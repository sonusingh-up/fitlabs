const { createClient } = require("@sanity/client");

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "381hs563",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SITE_URL = process.env.SITE_URL || "https://fitlabreviews.com";

const HIGH_PRIORITY_PATHS = [
  "/", "/reviews", "/blog", "/research", "/goals", "/category", "/brands", "/ingredients", "/best", "/methodology", "/authors",
  // Skin Health section
  "/skin", "/skin/guides", "/skin/conditions", "/skin/routines", "/skin/ingredients",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/privacy", "/terms", "/search", "/api/*", "/_next/*"],

  additionalPaths: async (config) => {
    const paths = [];

    // Static hub pages
    for (const p of HIGH_PRIORITY_PATHS) {
      paths.push(await config.transform(config, p));
    }

    // Dynamic Sanity content — supplements
    const [reviews, ingredients, brands, skinGuides, skinConditions, skinRoutines, skinIngredients] = await Promise.all([
      sanity.fetch(`*[_type == "review" && defined(slug.current)]{ "slug": slug.current, updatedAt, publishedAt }`),
      sanity.fetch(`*[_type == "ingredient" && defined(slug.current)]{ "slug": slug.current }`),
      sanity.fetch(`*[_type == "brand" && defined(slug.current)]{ "slug": slug.current }`),
      // Skin Health content
      sanity.fetch(`*[_type == "skinGuide" && defined(slug.current)]{ "slug": slug.current, updatedAt, publishedAt }`),
      sanity.fetch(`*[_type == "skinCondition" && defined(slug.current)]{ "slug": slug.current, publishedAt }`),
      sanity.fetch(`*[_type == "skinRoutine" && defined(slug.current)]{ "slug": slug.current, publishedAt }`),
      sanity.fetch(`*[_type == "skinIngredient" && defined(slug.current)]{ "slug": slug.current, publishedAt }`),
    ]);

    for (const r of reviews) {
      paths.push({
        loc: `/reviews/${r.slug}`,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: (r.updatedAt || r.publishedAt || new Date().toISOString()),
      });
    }

    for (const i of ingredients) {
      paths.push({
        loc: `/ingredients/${i.slug}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    }

    for (const b of brands) {
      paths.push({
        loc: `/brands/${b.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    // Skin Health — dynamic routes
    for (const g of skinGuides) {
      paths.push({
        loc: `/skin/guides/${g.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: (g.updatedAt || g.publishedAt || new Date().toISOString()),
      });
    }

    for (const c of skinConditions) {
      paths.push({
        loc: `/skin/conditions/${c.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: (c.publishedAt || new Date().toISOString()),
      });
    }

    for (const r of skinRoutines) {
      paths.push({
        loc: `/skin/routines/${r.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: (r.publishedAt || new Date().toISOString()),
      });
    }

    for (const i of skinIngredients) {
      paths.push({
        loc: `/skin/ingredients/${i.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: (i.publishedAt || new Date().toISOString()),
      });
    }

    return paths;
  },

  robotsTxtOptions: {
    // Single wildcard block — allow + disallow must be in one policy entry
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      // AI crawlers — explicitly welcomed for GEO (Generative Engine Optimisation)
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
    // No additionalSitemaps — robots.txt auto-points to sitemap.xml (the index)
  },

  transform: async (config, path) => {
    const isReview = path.startsWith("/reviews/");
    const isSkinHub = path === "/skin" || ["/skin/guides", "/skin/conditions", "/skin/routines", "/skin/ingredients"].includes(path);
    return {
      loc: path,
      changefreq: isReview ? "monthly" : config.changefreq,
      priority: HIGH_PRIORITY_PATHS.includes(path) ? (isSkinHub ? 0.9 : 1.0) : isReview ? 0.9 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
