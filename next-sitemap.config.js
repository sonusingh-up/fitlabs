const { createClient } = require("@sanity/client");

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "381hs563",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SITE_URL = process.env.SITE_URL || "https://fitlabreviews.com";

const HIGH_PRIORITY_PATHS = ["/", "/reviews", "/blog", "/research", "/goals", "/category", "/brands", "/ingredients", "/best", "/methodology", "/authors"];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/privacy", "/terms", "/search", "/api/*", "/_next/*", "/studio", "/studio/**", "/feed.xml", "/llms.txt", "/opengraph-image", "/auth", "/auth/**", "/account", "/admin"],

  additionalPaths: async (config) => {
    const paths = [];

    // Static hub pages — no fake lastmod; Google will use its own crawl date
    for (const p of HIGH_PRIORITY_PATHS) {
      paths.push(await config.transform(config, p));
    }

    // Dynamic Sanity content — use REAL timestamps from CMS
    const [reviews, ingredients, brands] = await Promise.all([
      sanity.fetch(`*[_type == "review" && defined(slug.current)]{ "slug": slug.current, _updatedAt, updatedAt, publishedAt }`),
      sanity.fetch(`*[_type == "ingredient" && defined(slug.current)]{ "slug": slug.current, _updatedAt, _createdAt }`),
      sanity.fetch(`*[_type == "brand" && defined(slug.current)]{ "slug": slug.current, _updatedAt, _createdAt }`),
    ]);

    for (const r of reviews) {
      paths.push({
        loc: `/reviews/${r.slug}`,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: r._updatedAt || r.updatedAt || r.publishedAt,
      });
    }

    for (const i of ingredients) {
      paths.push({
        loc: `/ingredients/${i.slug}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: i._updatedAt || i._createdAt,
      });
    }

    for (const b of brands) {
      paths.push({
        loc: `/brands/${b.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: b._updatedAt || b._createdAt,
      });
    }

    return paths;
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/studio"] },
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

  transform: async (config, path) => {
    const isReview = path.startsWith("/reviews/");
    return {
      loc: path,
      changefreq: isReview ? "monthly" : config.changefreq,
      priority: HIGH_PRIORITY_PATHS.includes(path) ? 1.0 : isReview ? 0.9 : config.priority,
      // Omit lastmod for auto-discovered static pages — Google trusts absent
      // lastmod more than one that falsely claims "just updated" on every build
    };
  },
};
