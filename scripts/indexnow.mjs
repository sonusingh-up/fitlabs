#!/usr/bin/env node

/**
 * Pings IndexNow (Bing/Yandex/DuckDuckGo) with all site URLs after deploy.
 * Google announced IndexNow support in 2024 — this accelerates crawl discovery.
 *
 * Usage: node scripts/indexnow.mjs
 * Runs automatically in postbuild via package.json.
 */

import { readdirSync, statSync } from "fs";
import { join } from "path";

const SITE_URL = process.env.SITE_URL || "https://fitlabreviews.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "fitlabreviews-indexnow-key";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const SECTIONS = ["reviews", "blog", "research", "ingredients", "brands", "best", "compare", "goals", "category"];
const HUB_PAGES = ["/", "/reviews", "/blog", "/research", "/ingredients", "/brands", "/best", "/goals", "/category", "/methodology", "/authors", "/editorial-policy", "/tools"];

function discoverStaticRoutes(section) {
  const dir = join(process.cwd(), "app", section);
  try {
    return readdirSync(dir)
      .filter((name) => {
        if (name.startsWith("[") || name === "page.tsx") return false;
        const sub = join(dir, name);
        try {
          return statSync(sub).isDirectory() && statSync(join(sub, "page.tsx")).isFile();
        } catch { return false; }
      })
      .map((slug) => `/${section}/${slug}`);
  } catch {
    return [];
  }
}

async function pingIndexNow(urls) {
  if (urls.length === 0) return;

  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map((path) => `${SITE_URL}${path}`),
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(`[IndexNow] Submitted ${urls.length} URLs → ${res.status} ${res.statusText}`);
  } catch (err) {
    console.warn(`[IndexNow] Failed (non-fatal): ${err.message}`);
  }
}

async function main() {
  const allPaths = [...HUB_PAGES];
  for (const section of SECTIONS) {
    allPaths.push(...discoverStaticRoutes(section));
  }

  console.log(`[IndexNow] Discovered ${allPaths.length} URLs to submit`);

  // IndexNow accepts max 10,000 URLs per request — batch if needed
  const BATCH_SIZE = 10000;
  for (let i = 0; i < allPaths.length; i += BATCH_SIZE) {
    await pingIndexNow(allPaths.slice(i, i + BATCH_SIZE));
  }
}

main().catch((err) => {
  console.warn(`[IndexNow] Script error (non-fatal): ${err.message}`);
  process.exit(0); // non-fatal — don't break the build
});
