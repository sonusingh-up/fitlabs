import { NextResponse } from "next/server";
import { readdirSync, statSync } from "fs";
import { join } from "path";

export const revalidate = 3600;

const SITE_URL = "https://fitlabreviews.com";
const SITE_NAME = "Fitlabreviews";
const SITE_DESCRIPTION =
  "Evidence-led supplement reviews, ingredient analysis, and wellness guidance. Editorially independent, formula-first.";

interface FeedEntry {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  author: string;
  section: string;
}

function discoverStaticRoutes(section: string): string[] {
  const dir = join(process.cwd(), "app", section);
  try {
    return readdirSync(dir)
      .filter((name) => {
        if (name.startsWith("[") || name === "page.tsx") return false;
        const sub = join(dir, name);
        return statSync(sub).isDirectory() && statSync(join(sub, "page.tsx")).isFile();
      });
  } catch {
    return [];
  }
}

function titleFromSlug(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildEntries(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  const author = "Fitlab Research Team";

  for (const slug of discoverStaticRoutes("reviews")) {
    entries.push({
      slug,
      title: `${titleFromSlug(slug)} — Review`,
      description: `FSP-scored product review with ingredient analysis, claim audit, and value comparison.`,
      category: "Product Review",
      publishedAt: getFileMtime(join("app", "reviews", slug, "page.tsx")),
      author,
      section: "reviews",
    });
  }

  for (const slug of discoverStaticRoutes("blog")) {
    entries.push({
      slug,
      title: titleFromSlug(slug),
      description: `Evidence-based article covering the latest research and practical guidance.`,
      category: "Blog",
      publishedAt: getFileMtime(join("app", "blog", slug, "page.tsx")),
      author,
      section: "blog",
    });
  }

  for (const slug of discoverStaticRoutes("research")) {
    entries.push({
      slug,
      title: `${titleFromSlug(slug)} — Research Deep-Dive`,
      description: `Trial breakdowns, mechanism analysis, and clinical evidence summary.`,
      category: "Research",
      publishedAt: getFileMtime(join("app", "research", slug, "page.tsx")),
      author,
      section: "research",
    });
  }

  for (const slug of discoverStaticRoutes("ingredients")) {
    entries.push({
      slug,
      title: `${titleFromSlug(slug)} — Ingredient Profile`,
      description: `Evidence-based ingredient analysis with dosing, mechanisms, and safety data.`,
      category: "Ingredient Research",
      publishedAt: getFileMtime(join("app", "ingredients", slug, "page.tsx")),
      author,
      section: "ingredients",
    });
  }

  entries.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return entries;
}

function getFileMtime(relPath: string): string {
  try {
    return statSync(join(process.cwd(), relPath)).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const entries = buildEntries();

  const items = entries.map((e) => `
    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${escapeXml(`${SITE_URL}/${e.section}/${e.slug}`)}</link>
      <guid isPermaLink="true">${escapeXml(`${SITE_URL}/${e.section}/${e.slug}`)}</guid>
      <description>${escapeXml(e.description)}</description>
      <pubDate>${new Date(e.publishedAt).toUTCString()}</pubDate>
      <category>${escapeXml(e.category)}</category>
      <author>${escapeXml(e.author)}</author>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <managingEditor>editorial@fitlabreviews.com (Fitlab Research Team)</managingEditor>
    <webMaster>editorial@fitlabreviews.com (Fitlab Research Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
