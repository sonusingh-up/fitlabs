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
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
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
