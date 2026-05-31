import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getAllSkinGuideSlugs, getSkinGuideBySlug } from "@/lib/sanity-skin";

export async function generateStaticParams() {
  const slugs = await getAllSkinGuideSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getSkinGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: `${guide.title}`,
    description:
      guide.metaDescription ||
      `${guide.title}: a ${guide.difficulty ?? ""} skincare guide${guide.timeEstimate ? ` (${guide.timeEstimate})` : ""}. Evidence-led recommendations from Fitlabreviews Skin.`,
    alternates: { canonical: `/skin/guides/${slug}` },
  };
}

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59",
  intermediate: "#C4622D",
  advanced: "#8B1A1A",
};

const relatedTypeLabel: Record<string, { label: string; href: (slug: string) => string }> = {
  skinCondition: { label: "Condition", href: (s) => `/skin/conditions/${s}` },
  skinIngredient: { label: "Ingredient", href: (s) => `/skin/ingredients/${s}` },
  skinRoutine: { label: "Routine", href: (s) => `/skin/routines/${s}` },
};

export default async function SkinGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = await getSkinGuideBySlug(slug);
  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    articleSection: guide.category ?? "Skin Health",
    author: guide.author
      ? { "@type": "Person", name: guide.author.name, url: `https://fitlabreviews.com/authors/${guide.author.slug}` }
      : { "@type": "Organization", name: "Fitlabreviews Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
    datePublished: guide.publishedAt ?? "",
    dateModified: guide.updatedAt ?? guide.publishedAt ?? "",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://fitlabreviews.com/skin/guides/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/skin/guides" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Guides</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{guide.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              {guide.category && (
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>{guide.category}</span>
              )}
              {guide.difficulty && (
                <>
                  <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: difficultyColor[guide.difficulty] ?? "#8A8480" }}>{guide.difficulty}</span>
                </>
              )}
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 20 }}>
              {guide.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 20 }}>
              {guide.publishedAt && (
                <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
                  {new Date(guide.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
              )}
              {guide.timeEstimate && (
                <>
                  <span style={{ color: "#D4C9B8" }}>·</span>
                  <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>{guide.timeEstimate}</span>
                </>
              )}
              {guide.author?.name && (
                <>
                  <span style={{ color: "#D4C9B8" }}>·</span>
                  <Link href={`/authors/${guide.author.slug}`} style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>
                    By {guide.author.name}
                  </Link>
                </>
              )}
            </div>
            {guide.description && (
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680 }}>{guide.description}</p>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Body content */}
          {guide.body?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: guide.relatedTopics?.length > 0 ? "1px solid #D4C9B8" : "none" }}>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                <PortableText
                  value={guide.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.85, margin: 0, padding: "0 28px 22px" }}>{children}</p>
                      ),
                      h2: ({ children }) => (
                        <div style={{ borderTop: "1px solid #D4C9B8", marginTop: 8, padding: "28px 28px 6px", backgroundColor: "#F8F2E4" }}>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>Section</p>
                          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>{children}</h2>
                        </div>
                      ),
                      h3: ({ children }) => (
                        <div style={{ padding: "20px 28px 4px" }}>
                          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0, borderLeft: "3px solid #C4622D", paddingLeft: 12 }}>{children}</h3>
                        </div>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul style={{ padding: "0 28px 22px 44px", margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>{children}</ul>
                      ),
                      number: ({ children }) => (
                        <ol style={{ padding: "0 28px 22px 44px", margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>{children}</ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.7 }}>{children}</li>
                      ),
                      number: ({ children }) => (
                        <li style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.7 }}>{children}</li>
                      ),
                    },
                  }}
                />
                <div style={{ height: 8, backgroundColor: "#F8F2E4", borderTop: "1px solid #EDE8DF" }} />
              </div>
            </section>
          )}

          {/* Related Topics (polymorphic) */}
          {guide.relatedTopics?.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Topics</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {guide.relatedTopics.map((topic: any, i: number) => {
                  if (!topic?._type || !topic?.slug) return null;
                  const meta = relatedTypeLabel[topic._type];
                  if (!meta) return null;
                  return (
                    <Link
                      key={i}
                      href={meta.href(topic.slug)}
                      className="hub-card"
                      style={{ display: "block", padding: "14px 16px", borderRadius: 8, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
                    >
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "1px 6px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", display: "inline-block", marginBottom: 8 }}>
                        {meta.label}
                      </span>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{topic.title}</p>
                      {topic.category && (
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", textTransform: "uppercase", marginTop: 4 }}>{topic.category}</p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
