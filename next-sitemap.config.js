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

// Hub paths — priority 1.0
const HUB_PATHS = new Set([
  "/", "/reviews", "/blog", "/research", "/goals", "/compare",
  "/category", "/brands", "/ingredients", "/best", "/methodology", "/authors",
]);

// Paths to exclude from the sitemap even if found in the build output
const EXCLUDE_PREFIXES = ["/skin", "/studio", "/api", "/_next"];
const EXCLUDE_EXACT = new Set([
  "/search", "/llms.txt", "/feed.xml", "/robots.txt", "/sitemap.xml",
  "/privacy", "/terms",
]);

/**
 * Reads .next/prerender-manifest.json — written by Next.js after every build.
 * Contains every statically pre-rendered route including all generateStaticParams
 * results (e.g. all 174 /ingredients/[slug] pages, all /reviews/[slug] pages).
 * Falls back to an empty array if the manifest is missing (shouldn't happen in CI).
 */
function discoverPrerenderRoutes() {
  try {
    const manifestPath = path.join(process.cwd(), ".next", "prerender-manifest.json");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
    return Object.keys(manifest.routes ?? {}).filter((route) => {
      if (EXCLUDE_EXACT.has(route)) return false;
      if (EXCLUDE_PREFIXES.some((p) => route.startsWith(p))) return false;
      return true;
    });
  } catch {
    console.warn("[next-sitemap] Could not read prerender-manifest.json — falling back to Sanity-only paths");
    return [];
  }
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

    // 1. All pre-rendered routes from the build — covers static pages AND
    //    every generateStaticParams result (ingredients-db, authors, Sanity reviews, etc.)
    const prerenderRoutes = discoverPrerenderRoutes();
    for (const route of prerenderRoutes) {
      push(await config.transform(config, route));
    }

    // 2. Sanity dynamic content — supplements the prerender manifest for any
    //    Sanity content that uses ISR rather than generateStaticParams,
    //    and serves as a fallback if the manifest read fails.
    const [reviews, ingredients, brands] = await Promise.all([
      sanity.fetch(`*[_type == "review" && defined(slug.current)]{ "slug": slug.current, updatedAt, publishedAt }`).catch(() => []),
      sanity.fetch(`*[_type == "ingredient" && defined(slug.current)]{ "slug": slug.current }`).catch(() => []),
      sanity.fetch(`*[_type == "brand" && defined(slug.current)]{ "slug": slug.current }`).catch(() => []),
    ]);

    for (const r of reviews) {
      push({ loc: `/reviews/${r.slug}`, changefreq: "monthly", priority: 0.9, lastmod: r.updatedAt || r.publishedAt || new Date().toISOString() });
    }
    for (const i of ingredients) {
      push({ loc: `/ingredients/${i.slug}`, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() });
    }
    for (const b of brands) {
      push({ loc: `/brands/${b.slug}`, changefreq: "monthly", priority: 0.7, lastmod: new Date().toISOString() });
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
