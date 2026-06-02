import { NextResponse } from "next/server";

const SITE_URL = "https://fitlabreviews.com";
const SITE_NAME = "Fitlabreviews";
const SITE_DESCRIPTION =
  "Evidence-led supplement reviews, ingredient analysis, and wellness guidance. Editorially independent, formula-first.";

const reviews = [
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard Whey — Review",
    description:
      "The benchmark protein powder. Consistent quality, excellent amino acid profile, and the cleanest label at this price tier. FSP Score: 9/10.",
    category: "Protein Powder",
    publishedAt: "2025-04-10",
    author: "Fitlab Research Team",
  },
  {
    slug: "musclepharm-assault-pre-workout",
    title: "MusclePharm Assault Pre-Workout — Review",
    description:
      "Solid stimulant blend with transparent labelling but under-dosed citrulline is a notable gap. FSP Score: 7/10.",
    category: "Pre-Workout",
    publishedAt: "2025-03-22",
    author: "Fitlab Research Team",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate — Review",
    description:
      "The cleanest, most affordable creatine monohydrate available in USA. No frills, just results. FSP Score: 8/10.",
    category: "Creatine",
    publishedAt: "2025-03-08",
    author: "Fitlab Research Team",
  },
  {
    slug: "muscleblaze-biozyme-whey",
    title: "MuscleBlaze Biozyme Whey — Review",
    description:
      "USA-optimised whey with enzyme blend for improved absorption. Strong value proposition for the domestic market. FSP Score: 8/10.",
    category: "Protein Powder",
    publishedAt: "2025-02-28",
    author: "Fitlab Research Team",
  },
];

const ingredients = [
  {
    slug: "creatine",
    title: "Creatine Monohydrate — Ingredient Profile",
    description:
      "One of the most studied ergogenic aids in sports science. Evidence summary: consistently improves short-burst power output and lean mass gains.",
    publishedAt: "2025-03-01",
  },
  {
    slug: "whey-protein",
    title: "Whey Protein Isolate — Ingredient Profile",
    description:
      "Complete protein with high leucine content. Rapid absorption post-exercise makes it the gold standard for muscle protein synthesis.",
    publishedAt: "2025-03-01",
  },
  {
    slug: "caffeine",
    title: "Caffeine — Ingredient Profile",
    description:
      "The world's most-used ergogenic compound. Evidence-backed for alertness, endurance, and fat oxidation at doses 3–6 mg/kg body weight.",
    publishedAt: "2025-03-01",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildItem(opts: {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  author?: string;
}): string {
  const pub = new Date(opts.pubDate).toUTCString();
  return `
    <item>
      <title>${escapeXml(opts.title)}</title>
      <link>${escapeXml(opts.link)}</link>
      <guid isPermaLink="true">${escapeXml(opts.link)}</guid>
      <description>${escapeXml(opts.description)}</description>
      <pubDate>${pub}</pubDate>
      ${opts.category ? `<category>${escapeXml(opts.category)}</category>` : ""}
      ${opts.author ? `<author>${escapeXml(opts.author)}</author>` : ""}
    </item>`;
}

export async function GET() {
  const reviewItems = reviews.map((r) =>
    buildItem({
      title: r.title,
      link: `${SITE_URL}/reviews/${r.slug}`,
      description: r.description,
      pubDate: r.publishedAt,
      category: r.category,
      author: r.author,
    })
  );

  const ingredientItems = ingredients.map((i) =>
    buildItem({
      title: i.title,
      link: `${SITE_URL}/ingredients/${i.slug}`,
      description: i.description,
      pubDate: i.publishedAt,
      category: "Ingredient Research",
      author: "Fitlab Research Team",
    })
  );

  const allItems = [...reviewItems, ...ingredientItems].join("");

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
      <url>${SITE_URL}/logo-banner.svg</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}</link>
    </image>
    ${allItems}
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
