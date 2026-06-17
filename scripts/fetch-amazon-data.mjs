#!/usr/bin/env node

/**
 * Build-time script: fetches product data from Amazon Creators API
 * and writes it to data/amazon-cache.json.
 *
 * Usage:
 *   npm run fetch-amazon
 *
 * Required env vars (in .env.local):
 *   AMAZON_CLIENT_ID       — OAuth2 client ID from Creators API (v3.x LWA)
 *   AMAZON_CLIENT_SECRET   — OAuth2 client secret from Creators API (v3.x LWA)
 *   AMAZON_PARTNER_TAG     — Associates partner tag (e.g. supplementstr-20)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ── Load .env.local ──────────────────────────────────────────────────────

function loadEnv() {
  try {
    const envPath = resolve(ROOT, ".env.local");
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env.local is optional — env vars may come from CI/hosting
  }
}

loadEnv();

const CLIENT_ID = process.env.AMAZON_CLIENT_ID;
const CLIENT_SECRET = process.env.AMAZON_CLIENT_SECRET;
const PARTNER_TAG = process.env.AMAZON_PARTNER_TAG || "supplementstr-20";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "❌ Missing AMAZON_CLIENT_ID or AMAZON_CLIENT_SECRET.\n" +
    "   Add them to .env.local or set as environment variables.\n" +
    "   Get them from: https://affiliate-program.amazon.com/creatorsapi"
  );
  process.exit(1);
}

// ── Product catalog (inline to avoid TS import issues in .mjs) ───────────

const CATALOG_PATH = resolve(ROOT, "data/product-catalog.ts");
const CACHE_PATH = resolve(ROOT, "data/amazon-cache.json");

function parseAsinsFromCatalog() {
  const src = readFileSync(CATALOG_PATH, "utf-8");
  const asinRegex = /asin:\s*"([A-Z0-9]{10})"/g;
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const fallbackRegex = /fallbackUrl:\s*"([^"]+)"/g;

  const asins = [];
  const slugs = [];
  const fallbacks = [];
  let m;

  while ((m = asinRegex.exec(src)) !== null) asins.push(m[1]);
  while ((m = slugRegex.exec(src)) !== null) slugs.push(m[1]);
  while ((m = fallbackRegex.exec(src)) !== null) fallbacks.push(m[1]);

  return asins.map((asin, i) => ({
    asin,
    slug: slugs[i] || "",
    fallbackUrl: fallbacks[i] || "",
  }));
}

// ── Amazon Creators API (OAuth2 + Bearer token) ─────────────────────────
//
// Creators API v3.x (LWA — Login with Amazon) authentication:
//   - Token URL: https://api.amazon.com/auth/o2/token  (NA region, v3.1)
//   - Grant type: client_credentials
//   - Scope: creatorsapi::default
//   - Credentials: HTTP Basic auth header (base64 of client_id:client_secret)
//
// API endpoint:
//   - Host: creatorsapi.amazon  (single global host for all marketplaces)
//   - Path: /catalog/v1/getItems
//   - Marketplace signalled via x-marketplace header
//   - Request body uses lowerCamelCase field names

const TOKEN_URL = "https://api.amazon.com/auth/o2/token";
const CREATORS_API_HOST = "creatorsapi.amazon";
const CREATORS_API_ENDPOINT = `https://${CREATORS_API_HOST}/catalog/v1/getItems`;

let accessToken = null;
let tokenExpiresAt = 0;

async function getToken() {
  if (accessToken && Date.now() < tokenExpiresAt - 60_000) {
    return accessToken;
  }

  console.log("🔑 Requesting OAuth2 access token (Creators API v3.x LWA)...");

  // v3.x LWA requires Basic auth header with base64(client_id:client_secret)
  const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "creatorsapi::default",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Token request failed (${res.status}):`);
    console.error(`  Response body: ${body}`);
    console.error(`  Token URL: ${TOKEN_URL}`);
    console.error(`  Client ID: ${CLIENT_ID.slice(0, 30)}...`);
    throw new Error(`Token request failed (${res.status}): ${body}`);
  }

  const data = await res.json();
  accessToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000;

  console.log(`✅ Token acquired (expires in ${data.expires_in}s)`);
  return accessToken;
}

async function fetchItems(asins) {
  const token = await getToken();

  // Creators API uses lowerCamelCase field names (not PascalCase)
  const payload = {
    itemIds: asins,
    itemIdType: "ASIN",
    resources: [
      "itemInfo.title",
      "itemInfo.byLineInfo",
      "offersV2.listings.price",
      "offersV2.listings.availability",
      "images.primary.large",
    ],
    partnerTag: PARTNER_TAG,
    partnerType: "Associates",
  };

  const res = await fetch(CREATORS_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-marketplace": "www.amazon.com",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`GetItems failed (${res.status}):`);
    console.error(`  Response body: ${body}`);
    console.error(`  Endpoint: ${CREATORS_API_ENDPOINT}`);
    console.error(`  ASINs: ${asins.join(", ")}`);
    throw new Error(`GetItems failed (${res.status}): ${body}`);
  }

  return res.json();
}

function parseItem(item) {
  // Creators API returns lowerCamelCase keys
  const info = item.itemInfo || item.ItemInfo || {};
  const title = (info.title || info.Title)?.displayValue || (info.title || info.Title)?.DisplayValue || "";
  const byLine = info.byLineInfo || info.ByLineInfo || {};
  const brand = (byLine.brand || byLine.Brand)?.displayValue || (byLine.brand || byLine.Brand)?.DisplayValue || "";

  const offers = item.offers || item.Offers || {};
  const listings = offers.listings || offers.Listings || [];
  const listing = listings[0];
  const priceObj = listing?.price || listing?.Price;
  const savingBasis = listing?.savingBasis || listing?.SavingBasis;
  const availability = listing?.availability || listing?.Availability;

  const images = item.images || item.Images || {};
  const primary = images.primary || images.Primary || {};
  const large = primary.large || primary.Large || {};
  const imageUrl = large.url || large.URL;

  return {
    asin: item.asin || item.ASIN,
    title,
    url: item.detailPageURL || item.DetailPageURL,
    imageUrl: imageUrl || undefined,
    price: priceObj
      ? {
          amount: priceObj.amount || priceObj.Amount,
          currency: priceObj.currency || priceObj.Currency,
          display: priceObj.displayAmount || priceObj.DisplayAmount,
        }
      : undefined,
    listPrice: savingBasis
      ? {
          amount: savingBasis.amount || savingBasis.Amount,
          currency: savingBasis.currency || savingBasis.Currency,
          display: savingBasis.displayAmount || savingBasis.DisplayAmount,
        }
      : undefined,
    availability: (availability?.type || availability?.Type) || undefined,
    brand: brand || undefined,
    fetchedAt: new Date().toISOString(),
  };
}

// ── Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n📦 Amazon Creators API — Build-time product data fetcher\n");

  const entries = parseAsinsFromCatalog();
  const uniqueAsins = [...new Set(entries.map((e) => e.asin))];
  console.log(`Found ${uniqueAsins.length} unique ASINs in product catalog.\n`);

  const products = {};
  const errors = [];

  // Creators API allows max 10 items per request
  for (let i = 0; i < uniqueAsins.length; i += 10) {
    const chunk = uniqueAsins.slice(i, i + 10);
    const chunkNum = Math.floor(i / 10) + 1;
    const totalChunks = Math.ceil(uniqueAsins.length / 10);

    console.log(
      `  Batch ${chunkNum}/${totalChunks}: ${chunk.length} ASINs...`
    );

    try {
      const data = await fetchItems(chunk);

      // Handle both lowerCamelCase and PascalCase response keys
      const items = data.itemsResult?.items || data.ItemsResult?.Items || [];
      for (const item of items) {
        const parsed = parseItem(item);
        products[parsed.asin] = parsed;
        console.log(`    ✅ ${parsed.asin} — ${parsed.title.slice(0, 60)}`);
      }

      // Log errors for items not found
      const errs = data.errors || data.Errors || [];
      for (const err of errs) {
        const code = err.code || err.Code;
        const message = err.message || err.Message;
        console.log(`    ⚠️  ${code}: ${message}`);
        errors.push(err);
      }
    } catch (err) {
      console.error(`    ❌ Batch failed: ${err.message}`);
      errors.push({ batch: chunk, error: err.message });
    }

    // Rate limit: 1 req/sec
    if (i + 10 < uniqueAsins.length) {
      await new Promise((r) => setTimeout(r, 1100));
    }
  }

  // ── Write cache ──────────────────────────────────────────────────────

  const cache = {
    generatedAt: new Date().toISOString(),
    partnerTag: PARTNER_TAG,
    products,
  };

  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + "\n");

  console.log(
    `\n✅ Done! ${Object.keys(products).length}/${uniqueAsins.length} products cached.`
  );
  console.log(`   Cache written to: data/amazon-cache.json`);

  if (errors.length > 0) {
    console.log(`   ⚠️  ${errors.length} errors (products will use fallback URLs)`);
  }

  console.log("");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
