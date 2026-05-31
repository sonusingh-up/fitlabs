const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "381hs563",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SITE_URL = process.env.SITE_URL || "https://fitlabreviews.com";

// Directories to skip when scanning app/ — skin has its own sitemap, studio is CMS
const SKIP_DIRS = new Set([
  "skin", "studio", "search", "api", "_next", "node_modules", ".next",
  "llms.txt", "feed.xml", "robots.txt", "sitemap.xml",
]);

// Hub paths that get priority 1.0
const HUB_PATHS = new Set([
  "/", "/reviews", "/blog", "/research", "/goals", "/compare",
  "/category", "/brands", "/ingredients", "/best", "/methodology", "/authors",
]);

function discoverStaticPages(appDir) {
  const found = [];

  function walk(dir, segments) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }

    if (entries.some((e) => e.isFile() && e.name.startsWith("page."))) {
      found.push(segments.length === 0 ? "/" : "/" + segments.join("/"));
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (SKIP_DIRS.has(name)) continue;
      if (name.startsWith("[")) continue; // dynamic [slug] routes — covered by Sanity fetch
      if (name.startsWith("(") && name.endsWith(")")) {
        walk(path.join(dir, name), segments); // route group — no URL segment added
        continue;
      }
      walk(path.join(dir, name), [...segments, name]);
    }
  }

  walk(appDir, []);
  return found;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/privacy", "/terms", "/search", "/api/*", "/_next/*",
    "/llms.txt", "/feed.xml", "/studio", "/studio/*",
    "/skin", "/skin/*",
  ],

  additionalPaths: async (config) => {
    const seen = new Set();
    const paths = [];

    function push(entry) {
      if (!entry || seen.has(entry.loc)) return;
      seen.add(entry.loc);
      paths.push(entry);
    }

    // 1. Scan app/ directory for all static (non-dynamic) pages
    const appDir = path.join(process.cwd(), "app");
    const staticPages = discoverStaticPages(appDir);
    for (const p of staticPages) {
      push(await config.transform(config, p));
    }

    // 2. Dynamic Sanity content — main site only
    const [reviews, ingredients, brands] = await Promise.all([
      sanity.fetch(`*[_type == "review" && defined(slug.current)]{ "slug": slug.current, updatedAt, publishedAt }`),
      sanity.fetch(`*[_type == "ingredient" && defined(slug.current)]{ "slug": slug.current }`),
      sanity.fetch(`*[_type == "brand" && defined(slug.current)]{ "slug": slug.current }`),
    ]);

    for (const r of reviews) {
      push({
        loc: `/reviews/${r.slug}`,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: r.updatedAt || r.publishedAt || new Date().toISOString(),
      });
    }
    for (const i of ingredients) {
      push({
        loc: `/ingredients/${i.slug}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    }
    for (const b of brands) {
      push({
        loc: `/brands/${b.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return paths;
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/studio/", "/skin/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
  },

  transform: async (config, urlPath) => {
    const isReview = urlPath.startsWith("/reviews/") && urlPath !== "/reviews";
    const isBlog = urlPath.startsWith("/blog/") && urlPath !== "/blog";
    const isResearch = urlPath.startsWith("/research/") && urlPath !== "/research";
    const isCompare = urlPath.startsWith("/compare/") && urlPath !== "/compare";
    const isBest = urlPath.startsWith("/best/") && urlPath !== "/best";
    const isMonthly = isReview || isBlog || isResearch || isCompare || isBest;

    let priority = config.priority; // default 0.7
    if (HUB_PATHS.has(urlPath)) {
      priority = 1.0;
    } else if (isReview) {
      priority = 0.9;
    } else if (isBlog || isResearch || isCompare || isBest) {
      priority = 0.8;
    }

    return {
      loc: urlPath,
      changefreq: isMonthly ? "monthly" : config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
