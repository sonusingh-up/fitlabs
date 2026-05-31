import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  getAllSkinGuideSlugs,
  getAllSkinConditionSlugs,
  getAllSkinRoutineSlugs,
  getAllSkinIngredientSlugs,
} from "@/lib/sanity-skin";

// Serves https://skin.fitlabreviews.com/sitemap.xml
// Middleware rewrites /sitemap.xml on the skin subdomain → /skin/sitemap.xml → this handler.

const SKIN = "https://skin.fitlabreviews.com";

// Routes to exclude even if they appear in the manifest
const EXCLUDE_PREFIXES = ["/robots.txt", "/sitemap.xml", "/studio"];

// Hub paths — get priority 0.9
const HUB_PATHS = new Set(["/guides", "/conditions", "/routines", "/ingredients"]);

// Low-priority policy paths
const POLICY_PATHS = new Set(["/medical-disclaimer", "/affiliate-disclosure"]);

function getRouteConfig(urlPath: string): { priority: string; changefreq: string } {
  if (urlPath === "/") return { priority: "1.0", changefreq: "weekly" };
  if (HUB_PATHS.has(urlPath)) return { priority: "0.9", changefreq: "weekly" };
  if (POLICY_PATHS.has(urlPath)) return { priority: "0.5", changefreq: "yearly" };
  return { priority: "0.6", changefreq: "monthly" };
}

/**
 * Reads .next/server/app-paths-manifest.json (present at runtime in all
 * Next.js environments) to discover every static skin page automatically.
 * Falls back to a hardcoded list if the manifest is unavailable.
 */
function discoverSkinStaticPaths(): string[] {
  try {
    const manifestPath = path.join(
      process.cwd(),
      ".next",
      "server",
      "app-paths-manifest.json"
    );
    const manifest: Record<string, string> = JSON.parse(
      fs.readFileSync(manifestPath, "utf-8")
    );

    const found: string[] = [];
    for (const route of Object.keys(manifest)) {
      if (!route.startsWith("/skin")) continue;
      if (!route.endsWith("/page")) continue; // skip route handlers (/route)
      if (route.includes("[")) continue; // skip dynamic [slug] routes
      if (EXCLUDE_PREFIXES.some((p) => route.startsWith(`/skin${p}`))) continue;

      // /skin/about/page → /about   |   /skin/page → /
      const urlPath = route.replace(/^\/skin/, "").replace(/\/page$/, "") || "/";
      found.push(urlPath);
    }
    return found;
  } catch {
    // Fallback: hardcoded list covering all known static skin pages
    return [
      "/",
      "/guides",
      "/conditions",
      "/routines",
      "/ingredients",
      "/about",
      "/methodology",
      "/editorial-policy",
      "/medical-disclaimer",
      "/affiliate-disclosure",
    ];
  }
}

function urlTag(urlPath: string, priority: string, changefreq: string, lastmod: string) {
  return `  <url>
    <loc>${SKIN}${urlPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const [guides, conditions, routines, ingredients] = await Promise.all([
    getAllSkinGuideSlugs(),
    getAllSkinConditionSlugs(),
    getAllSkinRoutineSlugs(),
    getAllSkinIngredientSlugs(),
  ]);

  // Static pages — auto-discovered from the build manifest
  const staticEntries = discoverSkinStaticPaths().map((urlPath) => {
    const { priority, changefreq } = getRouteConfig(urlPath);
    return urlTag(urlPath, priority, changefreq, today);
  });

  // Dynamic Sanity content
  const dynamicEntries = [
    ...guides.map(({ slug }) =>
      urlTag(`/guides/${slug}`, "0.8", "weekly", today)
    ),
    ...conditions.map(({ slug }) =>
      urlTag(`/conditions/${slug}`, "0.7", "monthly", today)
    ),
    ...routines.map(({ slug }) =>
      urlTag(`/routines/${slug}`, "0.7", "monthly", today)
    ),
    ...ingredients.map(({ slug }) =>
      urlTag(`/ingredients/${slug}`, "0.8", "weekly", today)
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${[...staticEntries, ...dynamicEntries].join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
