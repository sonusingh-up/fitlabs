import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const revalidate = 3600;

import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { getResearchBySlug, getAllResearchSlugs } from "@/lib/sanity";
import type { EvidenceLevel } from "@/lib/types";

// ── Static params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await getAllResearchSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

// ── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);
  if (!article) {
    return {
      title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())} — Research Deep-Dive`,
      description: "Evidence-based research article with trial breakdowns, mechanism analysis, and clinical data.",
      alternates: { canonical: `/research/${slug}` },
    };
  }

  const titleStr = article.title.length > 55
    ? article.title.slice(0, 52) + "..."
    : article.title;

  return {
    title: titleStr,
    description: (article.metaDescription || article.summary || "").slice(0, 160),
    alternates: { canonical: `/research/${slug}` },
  };
}

// ── Page ────────────────────────────────────────────────────────────────────
export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);
  if (!article) notFound();

  const pageUrl = `https://fitlabreviews.com/research/${slug}`;
  const evidence = (article.evidenceLevel || "moderate") as EvidenceLevel;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary || article.metaDescription,
    articleSection: "Research",
    author: article.author
      ? { "@type": "Person", name: article.author.name, url: `https://fitlabreviews.com/authors/${article.author.slug}` }
      : { "@type": "Organization", name: "Fitlabreviews Research Team", url: "https://fitlabreviews.com/authors/fitlab-research-team" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
    datePublished: article.publishedAt || "2026-01-01",
    dateModified: article.updatedAt || article.publishedAt || "2026-06-20",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const faqSchema = article.faqItems && article.faqItems.length >= 4 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqItems.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const breadcrumbLabel = article.title.length > 40
    ? article.title.slice(0, 37) + "..."
    : article.title;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/research" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Research</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{breadcrumbLabel}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #E4E8E5" }} className="pad-hero">
          <div style={{ maxWidth: 800, margin: "0 auto" }} className="px-page">
            {article.figureCode && (
              <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>{article.figureCode}</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Research Article</span>
              </div>
            )}
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 20 }}>
              {article.titleItalic
                ? <>{article.title.replace(article.titleItalic, "")} <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>{article.titleItalic}</em></>
                : article.title
              }
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              {article.publishedAt && <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>Published: {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>}
              {article.readTime && <><span style={{ color: "#E4E8E5" }}>·</span><span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{article.readTime} read</span></>}
              <span style={{ color: "#E4E8E5" }}>·</span>
              <EvidenceBadge level={evidence} />
            </div>
          </div>
        </div>

        {/* Author bar */}
        {article.author && (
          <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FAFBFA" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)" }}>
                {article.author.name?.split(" ").map((w: string) => w[0]).join("").slice(0, 2) || "FL"}
              </div>
              <div>
                <span style={{ fontSize: 12, color: "#6B7770" }}>Written by </span>
                <Link href={`/authors/${article.author.slug}`} style={{ fontSize: 13, fontWeight: 600, color: "#17211C", textDecoration: "none" }}>{article.author.name}</Link>
                {article.author.role && <span style={{ fontSize: 12, color: "#6B7770" }}> · {article.author.role}</span>}
              </div>
              {article.updatedAt && (
                <>
                  <span style={{ color: "#E4E8E5" }}>·</span>
                  <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>
                    Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Main content — single column */}
        <div style={{ maxWidth: 800, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Quick Answer */}
          {article.quickAnswer && (
            <div style={{ marginBottom: 40, padding: "18px 22px", backgroundColor: "#F2F8F4", borderLeft: "3px solid #1A6B3A", borderRadius: "0 12px 12px 0" }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 8 }}>Quick Answer</p>
              <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.7, margin: 0 }}>{article.quickAnswer}</p>
            </div>
          )}

          {/* Stats Panel */}
          {article.statsPanel && article.statsPanel.length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <div className="ing-stats-grid">
                {article.statsPanel.map((s: { label: string; value: string; sub: string }, i: number) => (
                  <div key={i} style={{ padding: "20px 16px", backgroundColor: "#17211C", borderRadius: i === 0 ? "12px 0 0 12px" : i === article.statsPanel.length - 1 ? "0 12px 12px 0" : 0 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{s.label}</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 2, lineHeight: 1.2 }}>{s.value}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary / Intro */}
          {article.summary && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85 }}>{article.summary}</p>
            </section>
          )}

          {/* Portable Text body */}
          {article.body && article.body.length > 0 && (
            <section style={{ marginBottom: 48 }} className="ingredient-article">
              <PortableText value={article.body} />
            </section>
          )}

          {/* Mechanism Panels */}
          {article.mechanismPanels && article.mechanismPanels.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>Key Mechanisms</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {article.mechanismPanels.map((m: { num: string; title: string; body: string }, i: number) => (
                  <div key={i} style={{ display: "flex", gap: 16, padding: "20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FAFBFA" }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 28, fontWeight: 700, color: "#E4E8E5", lineHeight: 1, flexShrink: 0, width: 36 }}>{m.num}</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>{m.title}</p>
                      <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{m.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Line */}
          {article.summary && (
            <section style={{ marginBottom: 48 }}>
              <div style={{ padding: 28, backgroundColor: "#17211C", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 12 }}>The Bottom Line</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75 }}>{article.summary}</p>
              </div>
            </section>
          )}

          {/* FAQ */}
          {article.faqItems && article.faqItems.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {article.faqItems.map((item: { question: string; answer: string }, i: number) => (
                  <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ padding: "12px 16px", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #E4E8E5" }}>
                      <p style={{ fontWeight: 700, color: "#17211C", margin: 0, fontSize: 14 }}>{item.question}</p>
                    </div>
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {article.references && article.references.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", marginBottom: 16 }}>References</h2>
              <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {article.references.map((ref: { text: string; url?: string }, i: number) => (
                  <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                    {ref.text}
                    {ref.url && (
                      <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>PubMed ↗</a></>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section style={{ marginBottom: 48, padding: "24px", backgroundColor: "#F2F8F4", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 16 }}>Related Reading</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {article.relatedArticles.map((rel: { href: string; label: string }, i: number) => (
                  <Link key={i} href={rel.href} style={{ fontSize: 14, fontWeight: 600, color: "#17211C", textDecoration: "none", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: 8, border: "1px solid #E4E8E5" }}>
                    {rel.label} →
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Ingredients */}
          {article.relatedIngredients && article.relatedIngredients.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 12 }}>Related Ingredients</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {article.relatedIngredients.map((ing: { name: string; slug: string }) => (
                  <Link key={ing.slug} href={`/ingredients/${ing.slug}`} style={{ padding: "8px 16px", border: "1px solid #E4E8E5", borderRadius: 14, backgroundColor: "#F6F8F6", fontSize: 13, color: "#17211C", fontWeight: 600, textDecoration: "none" }}>
                    {ing.name}
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
