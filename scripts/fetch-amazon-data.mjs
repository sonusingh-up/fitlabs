#!/usr/bin/env node

/**
 * Build-time script: fetches product data from Amazon PA API (Creators API)
 * and writes it to data/amazon-cache.json.
 *
 * Usage:
 *   npm run fetch-amazon
 *
 * Required env vars (in .env.local):
 *   AMAZON_CLIENT_ID       — OAuth2 client ID from Creators API
 *   AMAZON_CLIENT_SECRET   — OAuth2 client secret from Creators API
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
    "   Get them from: https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html"
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

// ── Amazon PA API via Creators API (OAuth2) ──────────────────────────────

const TOKEN_URL = "https://api.amazon.com/auth/o2/token";
const PAAPI_HOST = "webservices.amazon.com";
const PAAPI_ENDPOINT = `https://${PAAPI_HOST}/paapi5/getitems`;

let accessToken = null;
let tokenExpiresAt = 0;

async function getToken() {
  if (accessToken && Date.now() < tokenExpiresAt - 60_000) {
    return accessToken;
  }

  console.log("🔑 Requesting OAuth2 access token...");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: "ProductAdvertisingAPI",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
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

  const payload = {
    ItemIds: asins,
    ItemIdType: "ASIN",
    Resources: [
      "ItemInfo.Title",
      "ItemInfo.ByLineInfo",
      "Offers.Listings.Price",
      "Offers.Listings.SavingBasis",
      "Offers.Listings.Availability.Type",
      "Images.Primary.Large",
    ],
    PartnerTag: PARTNER_TAG,
    PartnerType: "Associates",
    Marketplace: "www.amazon.com",
  };

  const res = await fetch(PAAPI_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "x-amz-target": "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GetItems failed (${res.status}): ${body}`);
  }

  return res.json();
}

function parseItem(item) {
  const info = item.ItemInfo || {};
  const title = info.Title?.DisplayValue || "";
  const brand = info.ByLineInfo?.Brand?.DisplayValue || "";

  const offers = item.Offers || {};
  const listing = (offers.Listings || [])[0];
  const priceObj = listing?.Price;
  const savingBasis = listing?.SavingBasis;
  const availability = listing?.Availability?.Type;

  const images = item.Images || {};
  const imageUrl = images.Primary?.Large?.URL;

  return {
    asin: item.ASIN,
    title,
    url: item.DetailPageURL,
    imageUrl: imageUrl || undefined,
    price: priceObj
      ? {
          amount: priceObj.Amount,
          currency: priceObj.Currency,
          display: priceObj.DisplayAmount,
        }
      : undefined,
    listPrice: savingBasis
      ? {
          amount: savingBasis.Amount,
          currency: savingBasis.Currency,
          display: savingBasis.DisplayAmount,
        }
      : undefined,
    availability: availability || undefined,
    brand: brand || undefined,
    fetchedAt: new Date().toISOString(),
  };
}

// ── Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n📦 Amazon PA API — Build-time product data fetcher\n");

  const entries = parseAsinsFromCatalog();
  const uniqueAsins = [...new Set(entries.map((e) => e.asin))];
  console.log(`Found ${uniqueAsins.length} unique ASINs in product catalog.\n`);

  const products = {};
  const errors = [];

  // PA API allows max 10 items per request
  for (let i = 0; i < uniqueAsins.length; i += 10) {
    const chunk = uniqueAsins.slice(i, i + 10);
    const chunkNum = Math.floor(i / 10) + 1;
    const totalChunks = Math.ceil(uniqueAsins.length / 10);

    console.log(
      `  Batch ${chunkNum}/${totalChunks}: ${chunk.length} ASINs...`
    );

    try {
      const data = await fetchItems(chunk);

      for (const item of data.ItemsResult?.Items || []) {
        const parsed = parseItem(item);
        products[parsed.asin] = parsed;
        console.log(`    ✅ ${parsed.asin} — ${parsed.title.slice(0, 60)}`);
      }

      // Log errors for items not found
      for (const err of data.Errors || []) {
        console.log(`    ⚠️  ${err.Code}: ${err.Message}`);
        errors.push(err);
      }
    } catch (err) {
      console.error(`    ❌ Batch failed: ${err.message}`);
      errors.push({ batch: chunk, error: err.message });
    }

    // Rate limit: 1 req/sec for PA API
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
