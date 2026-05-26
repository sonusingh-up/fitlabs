/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://fitlabreviews.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/privacy",
    "/terms",
    "/search",
    "/api/*",
  ],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/category"),
    await config.transform(config, "/brands"),
    await config.transform(config, "/ingredients"),
    await config.transform(config, "/best"),
    await config.transform(config, "/methodology"),
    await config.transform(config, "/authors"),
  ],
  robotsTxtOptions: {
    policies: [
      // General crawlers
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Google AI / Gemini
      { userAgent: "Google-Extended", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Meta AI
      { userAgent: "FacebookBot", allow: "/" },
      // Common AI research crawlers
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://fitlabreviews.com"}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Boost priority for key hub pages
    const highPriority = ["/", "/category", "/brands", "/ingredients", "/best", "/methodology"];
    const reviewMatch = path.startsWith("/reviews/");
    return {
      loc: path,
      changefreq: reviewMatch ? "monthly" : config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : reviewMatch ? 0.9 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
