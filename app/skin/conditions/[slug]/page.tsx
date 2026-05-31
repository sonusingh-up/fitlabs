import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { getAllSkinConditionSlugs, getSkinConditionBySlug } from "@/lib/sanity-skin";

export async function generateStaticParams() {
  const slugs = await getAllSkinConditionSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = await getSkinConditionBySlug(slug);
  if (!condition) return { title: "Condition Not Found" };
  return {
    title: `${condition.title} — Causes, Symptoms & Treatments`,
    description:
      condition.metaDescription ||
      `${condition.title}: evidence-based overview of causes, symptoms, and treatment options from published dermatology research.`,
    alternates: { canonical: `/skin/conditions/${slug}` },
  };
}

export default async function SkinConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = await getSkinConditionBySlug(slug);
  if (!condition) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${condition.title} — Causes, Symptoms & Treatments`,
    description: condition.description,
    articleSection: "Skin Health",
    author: { "@type": "Organization", name: "Fitlabreviews Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
    datePublished: condition.publishedAt ?? "",
    dateModified: condition.publishedAt ?? "",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://fitlabreviews.com/skin/conditions/${slug}` },
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
            <Link href="/skin/conditions" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Conditions</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{condition.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>Skin Condition</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Research Profile</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              {condition.title}
            </h1>
            {condition.description && (
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680 }}>{condition.description}</p>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Medical disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only and does not constitute medical advice. Always consult a qualified dermatologist or healthcare professional for diagnosis and treatment.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600 }}>Full disclaimer →</Link>
            </p>
          </div>

          {/* Symptoms */}
          {condition.symptoms?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 01</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Symptoms</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
                {condition.symptoms.map((symptom: string) => (
                  <div key={symptom} style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
                    <p style={{ fontSize: 13, color: "#2D2926", margin: 0, lineHeight: 1.5 }}>{symptom}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Causes */}
          {condition.causes?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 02</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Causes</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {condition.causes.map((cause: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontSize: 13, color: "#2D2926", margin: 0, lineHeight: 1.6 }}>{cause}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Treatments */}
          {condition.treatments?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: condition.relatedGuides?.length > 0 ? "1px solid #D4C9B8" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 03</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Treatment Options</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {condition.treatments.map((treatment: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #4A7C59" }}>
                    <p style={{ fontSize: 13, color: "#2D2926", margin: 0, lineHeight: 1.6 }}>{treatment}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Guides */}
          {condition.relatedGuides?.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Guides</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {condition.relatedGuides.map((guide: any) => (
                  <Link
                    key={guide.slug}
                    href={`/skin/guides/${guide.slug}`}
                    className="hub-card"
                    style={{ display: "block", padding: "14px 16px", borderRadius: 8, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
                  >
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{guide.title}</p>
                    {guide.category && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", textTransform: "uppercase" }}>{guide.category}</span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
