import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 86400;

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import { ingredientsDb } from "@/lib/ingredients-db";
import { getIngredientBySlug, getAllIngredientSlugs } from "@/lib/sanity";
import type { EvidenceLevel } from "@/lib/types";

// ── Static params: Sanity slugs + local DB slugs (deduplicated) ─────────────
export async function generateStaticParams() {
  const sanitySlugs = await getAllIngredientSlugs();
  const localSlugs = ingredientsDb.map((i) => i.slug);
  const all = new Set([...sanitySlugs.map((s) => s.slug), ...localSlugs]);
  return Array.from(all).map((slug) => ({ slug }));
}

// ── Resolve data: Sanity first, fall back to local DB ───────────────────────
async function resolveIngredient(slug: string) {
  const sanity = await getIngredientBySlug(slug);
  if (sanity) {
    return {
      slug: sanity.slug,
      name: sanity.name,
      figure: sanity.figNumber || "ING-000",
      category: sanity.category || "",
      evidence: (sanity.evidenceLevel || "limited") as EvidenceLevel,
      dose: sanity.dose || "See studies",
      mechanism: sanity.mechanism || "",
      bestFor: sanity.bestFor || [],
      summary: sanity.summary || "",
      aka: sanity.aka || [],
      intro: sanity.intro || sanity.summary || "",
      mechanismDetail: sanity.mechanismDetail || "",
      keyBenefits: (sanity.keyBenefits || []).map((b: { claim: string; evidence: string; note: string }) => ({
        claim: b.claim,
        evidence: (b.evidence || "limited") as EvidenceLevel,
        note: b.note,
      })),
      dosageNotes: sanity.dosageNotes || "",
      safetyNotes: sanity.safetyNotes || "",
      whoFor: sanity.whoFor || "",
      relatedSlugs: sanity.relatedSlugs || [],
      faqItems: sanity.faqItems || [],
      publishedAt: sanity.publishedAt || "2026-01-01",
      updatedAt: sanity.updatedAt || sanity.publishedAt || "2026-01-01",
      source: "sanity" as const,
    };
  }

  const local = ingredientsDb.find((i) => i.slug === slug);
  if (local) {
    return {
      ...local,
      faqItems: [] as { question: string; answer: string }[],
      publishedAt: "2026-01-01",
      updatedAt: "2026-06-20",
      source: "local" as const,
    };
  }

  return null;
}

// ── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ing = await resolveIngredient(slug);
  if (!ing) return { title: "Ingredient Not Found" };

  const titleRaw = `${ing.name}: Benefits, Dosage & Side Effects`;
  const title = titleRaw.length > 55 ? `${ing.name}: Benefits & Dosage Guide` : titleRaw;
  const desc = `${ing.name} research profile: effective dose (${ing.dose}), mechanism of action, evidence level (${ing.evidence}), safety data, and who benefits most. Updated 2026.`;

  return {
    title,
    description: desc.slice(0, 160),
    alternates: { canonical: `/ingredients/${slug}` },
  };
}

// ── Evidence colours ────────────────────────────────────────────────────────
const evidenceColour: Record<EvidenceLevel, string> = {
  strong: "#0F7A5A",
  moderate: "#0A4F3B",
  limited: "#586259",
  emerging: "#3F4B43",
  insufficient: "#6B7770",
};

// ── Page ────────────────────────────────────────────────────────────────────
export default async function IngredientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ing = await resolveIngredient(slug);
  if (!ing) notFound();

  const pageUrl = `https://fitlabreviews.com/ingredients/${slug}`;
  const title = `${ing.name}: Benefits, Dosage & Side Effects`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: ing.intro,
    articleSection: "Ingredient Research",
    author: {
      "@type": "Organization",
      name: "Fitlabreviews Research Team",
      url: "https://fitlabreviews.com/authors/fitlab-research-team",
    },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
    datePublished: ing.publishedAt,
    dateModified: ing.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const faqEntries = ing.faqItems.length >= 4
    ? ing.faqItems
    : [
        { question: `What is the recommended dose of ${ing.name}?`, answer: ing.dosageNotes },
        { question: `Is ${ing.name} safe?`, answer: ing.safetyNotes },
        { question: `How does ${ing.name} work?`, answer: ing.mechanismDetail },
        { question: `Who should take ${ing.name}?`, answer: ing.whoFor },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/ingredients" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Ingredients</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{ing.name}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #E4E8E5" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#6B7770", textTransform: "uppercase" }}>{ing.figure}</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#6B7770", marginBottom: 8, textTransform: "uppercase" }}>{ing.category}</p>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 16 }}>
              {ing.name}
            </h1>
            {ing.aka && ing.aka.length > 0 && (
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770", marginBottom: 12, letterSpacing: "0.08em" }}>
                Also known as: {ing.aka.join(" · ")}
              </p>
            )}
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level={ing.evidence} />
            </div>
            <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>{ing.summary}</p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Stats grid */}
          {ing.dose && (
            <div style={{ marginBottom: 48 }}>
              <div className="ing-stats-grid">
                {[
                  { label: "Effective Dose", value: ing.dose, sub: "per clinical evidence" },
                  { label: "Evidence Level", value: ing.evidence.charAt(0).toUpperCase() + ing.evidence.slice(1), sub: ing.category },
                  { label: "Mechanism", value: ing.mechanism || "—", sub: "primary action" },
                  { label: "Best For", value: ing.bestFor[0] || "—", sub: ing.bestFor.slice(1).join(", ") || "—" },
                ].map((s) => (
                  <div key={s.label} style={{ padding: "20px 16px", backgroundColor: "#F6F8F6" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{s.label}</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", marginBottom: 2, lineHeight: 1.2 }}>{s.value}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#6B7770", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional before starting any supplementation, especially if you have pre-existing conditions or take medications.
            </p>
          </div>

          {/* § 1 What is it */}
          {ing.intro && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>What Is {ing.name}?</h2>
              <p>{ing.intro}</p>
            </section>
          )}

          {/* § 2 How it works */}
          {ing.mechanismDetail && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>How It Works: The Science</h2>
              <p style={{ marginBottom: 20 }}>{ing.mechanismDetail}</p>
              {ing.mechanism && (
                <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, borderLeft: "3px solid #0F7A5A" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6 }}>Primary Mechanism</p>
                  <p style={{ fontSize: 13, color: "#17211C", margin: 0, fontWeight: 600 }}>{ing.mechanism}</p>
                </div>
              )}
            </section>
          )}

          {/* § 3 Evidence-Based Benefits */}
          {ing.keyBenefits && ing.keyBenefits.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>Evidence-Based Benefits</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ing.keyBenefits.map((b: { claim: string; evidence: EvidenceLevel; note: string }, i: number) => (
                  <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                    <div style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                      <p style={{ fontWeight: 700, color: "#17211C", margin: 0, fontSize: 14, lineHeight: 1.4 }}>{b.claim}</p>
                      <span style={{
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontSize: 9,
                        fontFamily: "var(--font-jetbrains), monospace",
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        backgroundColor: `${evidenceColour[b.evidence]}14`,
                        border: `1px solid ${evidenceColour[b.evidence]}33`,
                        color: evidenceColour[b.evidence],
                      }}>
                        {b.evidence}
                      </span>
                    </div>
                    <div style={{ padding: "10px 16px" }}>
                      <p style={{ fontSize: 12, color: "#3F4B43", margin: 0, lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>{b.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* § 4 Dosage Guide */}
          {ing.dosageNotes && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>Dosage Guide</h2>
              {ing.dose && (
                <div style={{ padding: "20px 24px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, marginBottom: 20 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 8, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", margin: 0 }}>Effective Dose</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#0F7A5A", margin: 0 }}>{ing.dose}</p>
                  </div>
                </div>
              )}
              <p>{ing.dosageNotes}</p>
            </section>
          )}

          {/* § 5 Safety */}
          {ing.safetyNotes && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>Safety Profile & Side Effects</h2>
              <p>{ing.safetyNotes}</p>
            </section>
          )}

          {/* § 6 Who it's for */}
          {(ing.bestFor.length > 0 || ing.whoFor) && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>Who Should (and Shouldn&apos;t) Take It</h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {ing.bestFor.length > 0 && (
                  <div style={{ flex: "1 1 280px", border: "1px solid #E4E8E5", borderLeft: "3px solid #0F7A5A", borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <CheckCircle2 size={14} color="#0F7A5A" />
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F7A5A" }}>Best for</span>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {ing.bestFor.map((tag: string) => (
                        <span key={tag} style={{ padding: "3px 9px", backgroundColor: "rgba(15,122,90,0.08)", border: "1px solid rgba(15,122,90,0.2)", borderRadius: 4, fontSize: 11, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                {ing.whoFor && (
                  <div style={{ flex: "1 1 280px", border: "1px solid #E4E8E5", borderLeft: "3px solid #6B7770", borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <XCircle size={14} color="#6B7770" />
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770" }}>Who it&apos;s for</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>{ing.whoFor}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* § 7 FAQ */}
          {faqEntries.length > 0 && faqEntries[0].answer && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
              <h2>Frequently Asked Questions</h2>
              {faqEntries.map((item: { question: string; answer: string }, i: number) => (
                <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden", marginBottom: 8 }}>
                  <div style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5" }}>
                    <p style={{ fontWeight: 700, color: "#17211C", margin: 0, fontSize: 14 }}>{item.question}</p>
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Related */}
          {ing.relatedSlugs && ing.relatedSlugs.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 16 }}>Related Ingredients</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {ing.relatedSlugs.map((relSlug: string) => {
                  const rel = ingredientsDb.find((i) => i.slug === relSlug);
                  return (
                    <Link
                      key={relSlug}
                      href={`/ingredients/${relSlug}`}
                      style={{
                        padding: "8px 16px",
                        border: "1px solid #E4E8E5",
                        borderRadius: 14,
                        backgroundColor: "#F6F8F6",
                        fontSize: 13,
                        color: "#17211C",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {rel?.name ?? relSlug}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <div style={{ padding: "20px 24px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, borderLeft: "3px solid #586259" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Medical Disclaimer</p>
            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
              Ingredient profiles are for informational purposes only and do not constitute medical advice. Consult a qualified healthcare professional before starting any supplementation, especially if you have pre-existing conditions or take medications.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#0F7A5A", fontWeight: 600 }}>Full disclaimer →</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
