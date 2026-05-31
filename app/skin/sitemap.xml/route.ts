import { NextResponse } from "next/server";
import {
  getAllSkinGuideSlugs,
  getAllSkinConditionSlugs,
  getAllSkinRoutineSlugs,
  getAllSkinIngredientSlugs,
} from "@/lib/sanity-skin";

// Serves https://skin.fitlabreviews.com/sitemap.xml
// Middleware rewrites /sitemap.xml on the skin subdomain → /skin/sitemap.xml → this handler.

const SKIN = "https://skin.fitlabreviews.com";
const today = new Date().toISOString().split("T")[0];

interface RouteConfig {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

const staticRoutes: RouteConfig[] = [
  { path: "/",                   priority: "1.0", changefreq: "weekly"  },
  { path: "/guides",             priority: "0.9", changefreq: "weekly"  },
  { path: "/conditions",         priority: "0.9", changefreq: "monthly" },
  { path: "/routines",           priority: "0.9", changefreq: "monthly" },
  { path: "/ingredients",        priority: "0.9", changefreq: "weekly"  },
  { path: "/about",              priority: "0.6", changefreq: "monthly" },
  { path: "/methodology",        priority: "0.6", changefreq: "monthly" },
  { path: "/editorial-policy",   priority: "0.6", changefreq: "monthly" },
  { path: "/medical-disclaimer", priority: "0.5", changefreq: "yearly"  },
  { path: "/affiliate-disclosure",priority: "0.5", changefreq: "yearly" },
];

function urlTag({ path, priority, changefreq, lastmod }: RouteConfig) {
  return `  <url>
    <loc>${SKIN}${path}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const [guides, conditions, routines, ingredients] = await Promise.all([
    getAllSkinGuideSlugs(),
    getAllSkinConditionSlugs(),
    getAllSkinRoutineSlugs(),
    getAllSkinIngredientSlugs(),
  ]);

  const entries = [
    // Static hub pages
    ...staticRoutes.map(urlTag),
    // Dynamic guide pages
    ...guides.map(({ slug }) =>
      urlTag({ path: `/guides/${slug}`, priority: "0.8", changefreq: "weekly" })
    ),
    // Dynamic condition pages
    ...conditions.map(({ slug }) =>
      urlTag({ path: `/conditions/${slug}`, priority: "0.7", changefreq: "monthly" })
    ),
    // Dynamic routine pages
    ...routines.map(({ slug }) =>
      urlTag({ path: `/routines/${slug}`, priority: "0.7", changefreq: "monthly" })
    ),
    // Dynamic ingredient pages
    ...ingredients.map(({ slug }) =>
      urlTag({ path: `/ingredients/${slug}`, priority: "0.8", changefreq: "weekly" })
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Cache 1 hour on CDN; revalidate when Sanity content changes
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
