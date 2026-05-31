import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getAllSkinIngredientSlugs, getSkinIngredientBySlug } from "@/lib/sanity-skin";

export async function generateStaticParams() {
  const slugs = await getAllSkinIngredientSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ing = await getSkinIngredientBySlug(slug);
  if (!ing) return { title: "Ingredient Not Found" };
  return {
    title: `${ing.title} — Skin Ingredient Profile`,
    description:
      ing.metaDescription ||
      `${ing.title} skincare ingredient profile: benefits, risks, how to use, and evidence level from published cosmetic science research.`,
    alternates: { canonical: `/skin/ingredients/${slug}` },
  };
}

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

export default async function SkinIngredientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ing = await getSkinIngredientBySlug(slug);
  if (!ing) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${ing.title} — Skin Ingredient Profile`,
    description: ing.description,
    articleSection: "Skin Ingredient Research",
    author: { "@type": "Organization", name: "Fitlabreviews Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
    datePublished: ing.publishedAt ?? "",
    dateModified: ing.publishedAt ?? "",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://fitlabreviews.com/skin/ingredients/${slug}` },
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
            <Link href="/skin/ingredients" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Ingredients</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{ing.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>Skin Ingredient</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Research Profile</span>
            </div>
            {ing.category && (
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>{ing.category}</p>
            )}
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              {ing.title}
            </h1>
            {ing.evidenceLevel && (
              <div style={{ marginBottom: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}14`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}40` }}>
                  Evidence: {ing.evidenceLevel}
                </span>
              </div>
            )}
            {ing.description && (
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680 }}>{ing.description}</p>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Medical disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only. Consult a dermatologist before adding new actives to your routine, especially if you have sensitive skin or take medications.
            </p>
          </div>

          {/* Benefits & Risks */}
          {(ing.benefits?.length > 0 || ing.risks?.length > 0) && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 01</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Benefits & Risks</h2>
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {ing.benefits?.length > 0 && (
                  <div style={{ flex: "1 1 280px", border: "1px solid #D4C9B8", borderLeft: "3px solid #4A7C59", borderRadius: 8, padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <CheckCircle2 size={14} color="#4A7C59" />
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A7C59" }}>Benefits</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {ing.benefits.map((benefit: string) => (
                        <p key={benefit} style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5, margin: 0, paddingLeft: 8, borderLeft: "2px solid rgba(74,124,89,0.3)" }}>{benefit}</p>
                      ))}
                    </div>
                  </div>
                )}
                {ing.risks?.length > 0 && (
                  <div style={{ flex: "1 1 280px", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <XCircle size={14} color="#C4622D" />
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4622D" }}>Risks & Warnings</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {ing.risks.map((risk: string) => (
                        <p key={risk} style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5, margin: 0, paddingLeft: 8, borderLeft: "2px solid rgba(196,98,45,0.3)" }}>{risk}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* How to Use */}
          {ing.howToUse && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 02</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>How to Use</h2>
              </div>
              <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75, margin: 0 }}>{ing.howToUse}</p>
              </div>
            </section>
          )}

          {/* Full body content */}
          {ing.body?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 03</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Deep Dive</h2>
              </div>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                <PortableText
                  value={ing.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.85, margin: 0, padding: "0 28px 22px" }}>{children}</p>
                      ),
                      h2: ({ children }) => (
                        <div style={{ borderTop: "1px solid #D4C9B8", marginTop: 8, padding: "28px 28px 6px", backgroundColor: "#F8F2E4" }}>
                          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>{children}</h2>
                        </div>
                      ),
                      h3: ({ children }) => (
                        <div style={{ padding: "20px 28px 4px" }}>
                          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0, borderLeft: "3px solid #C4622D", paddingLeft: 12 }}>{children}</h3>
                        </div>
                      ),
                    },
                  }}
                />
                <div style={{ height: 8, backgroundColor: "#F8F2E4", borderTop: "1px solid #EDE8DF" }} />
              </div>
            </section>
          )}

          {/* Sources */}
          {ing.sources?.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 04</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Research Sources</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {ing.sources.map((source: string, i: number) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", fontWeight: 700, flexShrink: 0 }}>[{i + 1}]</span>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5, margin: 0, fontFamily: "var(--font-dm-mono), monospace" }}>{source}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
