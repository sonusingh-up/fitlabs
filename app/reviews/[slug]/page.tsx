import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

import { ExternalLink, AlertTriangle, Star, ChevronRight, CheckCircle2, XCircle, ArrowRight, Shield, FlaskConical, Scale, Sparkles } from "lucide-react";
import { PortableText } from "@portabletext/react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import AuthorPopup from "@/components/ui/AuthorPopup";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import ReviewCard from "@/components/ui/ReviewCard";
import ReadingProgress from "@/components/ui/ReadingProgress";
import { computeComposite } from "@/lib/scoring";
import { getReviewBySlug, getAllReviewSlugs, urlFor } from "@/lib/sanity";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "ingredients", label: "Ingredient Breakdown" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "value", label: "Price & Value" },
  { id: "body", label: "Full Review" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

export async function generateStaticParams() {
  const slugs = await getAllReviewSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);
  if (!review) return { title: "Review Not Found" };
  const heroImg = review.heroImage ? urlFor(review.heroImage).width(1200).height(630).url() : undefined;
  return {
    title: `${review.title}`,
    description: review.metaDescription || `Evidence-led review of ${review.title}: ingredient analysis, FSP score, and honest verdict.`,
    alternates: { canonical: `/reviews/${slug}` },
    ...(heroImg ? { openGraph: { images: [{ url: heroImg, width: 1200, height: 630, alt: review.title }] } } : {}),
  };
}

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  formula: <FlaskConical size={16} />,
  transparency: <Shield size={16} />,
  verification: <CheckCircle2 size={16} />,
  value: <Scale size={16} />,
  practical: <Sparkles size={16} />,
};

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);
  if (!review) notFound();

  const rubric: ScoringRubric = {
    pillars: review.pillars ?? [],
    flags: review.flags ?? [],
    claimAudit: review.claimAudit ?? [],
    valueMetric: review.valueMetric ?? { pricePerServing: 0, primaryActiveGrams: 0, pricePerGramActive: 0, categoryAvgPricePerGram: 0, efficiency: "at" },
    compositeScore: 0,
    editorialScore: (review.editorialScore ?? 5) as ReviewRating,
  };
  rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

  const heroImageUrl = review.heroImage ? urlFor(review.heroImage).width(1200).height(630).url() : null;

  const publishedDate = review.publishedAt
    ? new Date(review.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "—";
  const updatedDate = review.updatedAt
    ? new Date(review.updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : publishedDate;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://fitlabreviews.com/reviews/${slug}#review`,
    name: `${review.title} — Fitlabreviews FSP Review`,
    ...(heroImageUrl ? { image: heroImageUrl } : {}),
    reviewBody: review.verdict,
    reviewRating: { "@type": "Rating", ratingValue: rubric.editorialScore, bestRating: 10, worstRating: 1 },
    datePublished: review.publishedAt ?? "",
    dateModified: review.updatedAt ?? review.publishedAt ?? "",
    author: {
      "@type": review.author ? "Person" : "Organization",
      name: review.author?.name ?? "Fitlab Research Team",
      url: review.author ? `https://fitlabreviews.com/authors/${review.author.slug}` : "https://fitlabreviews.com/authors",
    },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    itemReviewed: {
      "@type": "Product",
      name: review.title,
      ...(heroImageUrl ? { image: heroImageUrl } : {}),
      brand: { "@type": "Brand", name: review.brand },
      category: review.category,
    },
    url: `https://fitlabreviews.com/reviews/${slug}`,
  };

  const faqSchema = review.faqItems && review.faqItems.length >= 4 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: review.faqItems.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  // Shared card style
  const card = {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    border: "1px solid #E8EDE9",
    overflow: "hidden" as const,
  };
  const cardInner = { padding: "28px 28px" };
  const sectionGap = { marginBottom: 24 };
  const h2Style = {
    fontFamily: "var(--font-playfair), Georgia, serif",
    fontSize: "1.45rem",
    fontWeight: 800 as const,
    color: "#17211C",
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgress />

      <div style={{ backgroundColor: "#F4F7F5", minHeight: "100vh" }}>

        {/* ═══ HERO BANNER ═══ */}
        <div style={{ background: "linear-gradient(145deg, #17211C 0%, #0F3D2E 40%, #1A6B4B 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 56px", position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>Home</Link>
              <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
              <Link href="/reviews" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>Reviews</Link>
              <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-dm-sans)" }}>{review.brand}</span>
            </div>

            <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Left — text */}
              <div style={{ flex: "1 1 500px", minWidth: 0 }}>
                {/* Badges */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                  {review.reviewCode && <span style={{ padding: "4px 10px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{review.reviewCode}</span>}
                  <span style={{ padding: "4px 10px", backgroundColor: "rgba(15,122,90,0.2)", border: "1px solid rgba(15,122,90,0.3)", borderRadius: 8, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#4ADE80", letterSpacing: "0.1em" }}>FSP SCORED</span>
                  {review.category && <span style={{ padding: "4px 10px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 8, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "rgba(255,255,255,0.5)" }}>{review.category.toUpperCase()}</span>}
                </div>

                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>{review.brand} · {review.category}</p>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 20 }}>
                  {review.title}
                </h1>
                {review.verdict && (
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, maxWidth: 560, marginBottom: 24 }}>{review.verdict}</p>
                )}

                {/* CTA row */}
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  {review.affiliateUrl && (
                    <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "linear-gradient(135deg, #0F7A5A, #14A474)", color: "#FFFFFF", fontSize: 14, fontWeight: 700, borderRadius: 14, fontFamily: "var(--font-dm-sans)", textDecoration: "none", boxShadow: "0 4px 14px rgba(15,122,90,0.3)" }}>
                      Check Price <ExternalLink size={14} />
                    </Link>
                  )}
                  <Link href="/methodology" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    FSP {rubric.compositeScore.toFixed(1)}/10 — How we score <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right — product image + score */}
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                {/* Product image */}
                {heroImageUrl && (
                  <div className="hidden sm:flex" style={{ width: 180, height: 180, borderRadius: 20, overflow: "hidden", backgroundColor: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", alignItems: "center", justifyContent: "center" }}>
                    <Image src={heroImageUrl} alt={review.title} width={180} height={180} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                )}
                {/* Score ring */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "3px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 36, fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>{rubric.editorialScore}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>/10</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 700, color: "#4ADE80", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {rubric.editorialScore >= 9 ? "EXCEPTIONAL" : rubric.editorialScore >= 8 ? "EXCELLENT" : rubric.editorialScore >= 7 ? "GOOD" : "AVERAGE"}
                  </span>
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} style={{ color: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "rgba(255,255,255,0.15)", fill: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "none" }} />
              ))}
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm-sans)", marginLeft: 8 }}>{rubric.editorialScore}/10 editorial score</span>
            </div>
          </div>
        </div>

        {/* ═══ METADATA STRIP ═══ */}
        <div style={{ maxWidth: 1200, margin: "-24px auto 0", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div style={{ ...card, padding: "16px 24px" }}>
            <MetadataStrip items={[
              { label: "Published", value: publishedDate },
              { label: "Last Updated", value: updatedDate },
              ...(review.testingPeriod ? [{ label: "Testing Period", value: review.testingPeriod }] : []),
              ...(review.tubsTested ? [{ label: "Tubs Tested", value: review.tubsTested }] : []),
              { label: "Price Range", value: review.priceRange ? review.priceRange.charAt(0).toUpperCase() + review.priceRange.slice(1) : "—" },
              { label: "FSP Score", value: `${rubric.editorialScore}/10` },
            ]} />
          </div>
        </div>

        {/* ═══ BODY ═══ */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 80px" }}>

          {/* Author box */}
          {(review.author || review.reviewer) && (
            <div style={{ ...sectionGap, ...card, padding: "20px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                {review.author && (
                  <AuthorPopup
                    label="Written by"
                    author={{
                      name: review.author.name,
                      slug: review.author.slug,
                      role: review.author.role,
                      bio: review.author.bio,
                      avatarUrl: review.author.avatar ? urlFor(review.author.avatar).width(128).height(128).url() : undefined,
                      credentials: review.author.credentials,
                      linkedIn: review.author.linkedIn,
                    }}
                  />
                )}
                {review.reviewer && (
                  <>
                    <div style={{ width: 1, height: 36, backgroundColor: "#E8EDE9" }} />
                    <AuthorPopup
                      label="Reviewed by"
                      author={{
                        name: review.reviewer.name,
                        slug: review.reviewer.slug,
                        role: review.reviewer.role,
                        bio: review.reviewer.bio,
                        avatarUrl: review.reviewer.avatar ? urlFor(review.reviewer.avatar).width(128).height(128).url() : undefined,
                        credentials: review.reviewer.credentials,
                        linkedIn: review.reviewer.linkedIn,
                      }}
                    />
                  </>
                )}
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", backgroundColor: "#E7F2EC", borderRadius: 8 }}>
                  <Shield size={12} style={{ color: "#0F7A5A" }} />
                  <span style={{ fontSize: 10, color: "#0A4F3B", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>EDITORIALLY INDEPENDENT</span>
                </div>
              </div>
            </div>
          )}

          {/* Affiliate notice */}
          <div style={{ ...sectionGap, padding: "12px 18px", backgroundColor: "rgba(15,122,90,0.04)", border: "1px solid rgba(15,122,90,0.1)", borderRadius: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <AlertTriangle size={13} style={{ color: "#6B7770", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-dm-sans)", margin: 0 }}>
              This review may contain affiliate links. Commissions do not influence our ratings.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our disclosure →</Link>
            </p>
          </div>

          {/* Two-column: TOC + Content */}
          <div className="layout-sidebar">

            {/* TOC sidebar */}
            <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Mobile TOC */}
              <div className="block lg:hidden">
                <MobileTOC items={tocItems} />
              </div>

              {/* ── QUICK VERDICT ── */}
              <div id="verdict" style={card}>
                <div style={cardInner}>
                  <h2 style={h2Style}>Quick Verdict</h2>
                  <div style={{ padding: "20px 22px", background: "linear-gradient(135deg, #F2F8F4, #E7F2EC)", borderRadius: 16, borderLeft: "4px solid #0F7A5A", marginBottom: review.bestFor?.length ? 20 : 0 }}>
                    <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.75, margin: 0 }}>{review.verdict}</p>
                  </div>
                  {review.tags && review.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                      {review.tags.map((tag: string) => (
                        <span key={tag} style={{ padding: "5px 12px", background: "linear-gradient(135deg, rgba(15,122,90,0.06), rgba(15,122,90,0.1))", borderRadius: 10, fontSize: 11, color: "#0A4F3B", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  )}
                  {(review.bestFor?.length > 0 || review.notIdealFor?.length > 0) && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
                      {review.bestFor?.length > 0 && (
                        <div style={{ padding: "18px 20px", background: "linear-gradient(145deg, #E7F2EC, #D4E9DF)", borderRadius: 16 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                            <CheckCircle2 size={14} color="#0F7A5A" />
                            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 700, color: "#0A4F3B", letterSpacing: "0.08em", textTransform: "uppercase" }}>Best For</span>
                          </div>
                          {review.bestFor.map((b: string) => <p key={b} style={{ fontSize: 13, color: "#17211C", padding: "3px 0", fontFamily: "var(--font-dm-sans)" }}>· {b}</p>)}
                        </div>
                      )}
                      {review.notIdealFor?.length > 0 && (
                        <div style={{ padding: "18px 20px", backgroundColor: "#F6F8F6", borderRadius: 16 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                            <XCircle size={14} color="#9CA3AF" />
                            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 700, color: "#6B7770", letterSpacing: "0.08em", textTransform: "uppercase" }}>Not Ideal For</span>
                          </div>
                          {review.notIdealFor.map((b: string) => <p key={b} style={{ fontSize: 13, color: "#586259", padding: "3px 0", fontFamily: "var(--font-dm-sans)" }}>· {b}</p>)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* ── SCORE BREAKDOWN ── */}
              {rubric.pillars.length > 0 && (
                <div id="score-breakdown" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Score Breakdown</h2>
                    <ScoreBreakdown rubric={rubric} reviewCode={review.reviewCode || `REV-${slug.slice(0, 8).toUpperCase()}`} />
                  </div>
                </div>
              )}

              {/* ── FLAGS ── */}
              {rubric.flags.length > 0 && (
                <div id="flags" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Red & Green Flags</h2>
                    <FlagSystem flags={rubric.flags} />
                  </div>
                </div>
              )}

              {/* ── INGREDIENTS ── */}
              {review.ingredients?.length > 0 && (
                <div id="ingredients" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Ingredient Breakdown</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {review.ingredients.map((ing: any, i: number) => (
                        <div key={ing.name} style={{ padding: "16px 18px", backgroundColor: i % 2 === 0 ? "#F8FAF8" : "#FFFFFF", borderRadius: 14, border: "1px solid #E8EDE9" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 700, color: "#17211C" }}>{ing.name}</span>
                              {ing.dosage && <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", backgroundColor: "rgba(15,122,90,0.06)", padding: "2px 8px", borderRadius: 6 }}>{ing.dosage}</span>}
                            </div>
                            <EvidenceBadge level={ing.evidenceLevel} showIcon={false} />
                          </div>
                          <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.5, margin: 0, fontFamily: "var(--font-dm-sans)" }}>{ing.purpose}</p>
                          {ing.notes && <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.5, marginTop: 6, fontFamily: "var(--font-dm-sans)" }}>{ing.notes}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── CLAIM AUDIT ── */}
              {rubric.claimAudit.length > 0 && (
                <div id="claim-audit" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Claim Audit</h2>
                    <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20, lineHeight: 1.6, fontFamily: "var(--font-dm-sans)" }}>
                      We checked every marketing claim against published peer-reviewed literature.
                    </p>
                    <ClaimAudit items={rubric.claimAudit} />
                  </div>
                </div>
              )}

              {/* ── PROS & CONS ── */}
              {(review.pros?.length > 0 || review.cons?.length > 0) && (
                <div id="pros-cons" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Pros & Cons</h2>
                    <ProsCons pros={review.pros ?? []} cons={review.cons ?? []} />
                  </div>
                </div>
              )}

              {/* ── VALUE ── */}
              {rubric.valueMetric.pricePerServing > 0 && (
                <div id="value" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Price & Value</h2>
                    <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel={review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"} />
                  </div>
                </div>
              )}

              {/* ── FULL REVIEW BODY ── */}
              {review.body?.length > 0 && (
                <div id="body" style={card}>
                  <div style={{ ...cardInner, padding: "0" }}>
                    <div style={{ padding: "28px 28px 8px" }}>
                      <h2 style={h2Style}>Full Review</h2>
                    </div>
                    <PortableText
                      value={review.body}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.85, margin: 0, padding: "0 28px 20px", fontFamily: "var(--font-dm-sans)" }}>{children}</p>
                          ),
                          h2: ({ children }) => (
                            <div style={{ borderTop: "1px solid #E8EDE9", padding: "24px 28px 8px", backgroundColor: "#F8FAF8" }}>
                              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6 }}>Section</p>
                              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{children}</h2>
                            </div>
                          ),
                          h3: ({ children }) => (
                            <div style={{ padding: "16px 28px 4px" }}>
                              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", fontWeight: 700, color: "#17211C", margin: 0, borderLeft: "3px solid #0F7A5A", paddingLeft: 12 }}>{children}</h3>
                            </div>
                          ),
                        },
                      }}
                    />
                    <div style={{ height: 8, backgroundColor: "#F8FAF8", borderTop: "1px solid #E8EDE9", borderRadius: "0 0 20px 20px" }} />
                  </div>
                </div>
              )}

              {/* ── FAQ ── */}
              {review.faqItems && review.faqItems.length > 0 && (
                <div id="faq" style={card}>
                  <div style={cardInner}>
                    <h2 style={h2Style}>Frequently Asked Questions</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {review.faqItems.map((item: { question: string; answer: string }, i: number) => (
                        <details key={i} style={{ borderRadius: 14, overflow: "hidden", backgroundColor: "#F8FAF8", border: "1px solid #E8EDE9" }}>
                          <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 700, color: "#17211C", fontSize: 14, fontFamily: "var(--font-dm-sans)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {item.question}
                            <ChevronRight size={16} style={{ color: "#9CA3AF", flexShrink: 0, transition: "transform 200ms" }} />
                          </summary>
                          <div style={{ padding: "0 18px 16px" }}>
                            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans)" }}>{item.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── REFERENCES ── */}
              {review.references && review.references.length > 0 && (
                <div style={card}>
                  <div style={cardInner}>
                    <details>
                      <summary style={{ cursor: "pointer", fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 700, color: "#17211C", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Research References ({review.references.length})
                        <ChevronRight size={16} style={{ color: "#9CA3AF" }} />
                      </summary>
                      <ol style={{ paddingLeft: 20, marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                        {review.references.map((ref: { text: string; url?: string }, i: number) => (
                          <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                            {ref.text}
                            {ref.url && <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>PubMed ↗</a></>}
                          </li>
                        ))}
                      </ol>
                    </details>
                  </div>
                </div>
              )}

              {/* ── FINAL VERDICT ── */}
              <div id="final" style={{ borderRadius: 20, overflow: "hidden", background: "linear-gradient(145deg, #17211C 0%, #0F3D2E 60%, #1A6B4B 100%)" }}>
                <div style={{ padding: "36px 32px" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Final Verdict · {review.reviewCode || "FSP Scored"}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, marginBottom: 20 }}>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", flex: 1 }}>{review.title}</h2>
                    <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 24, fontFamily: "var(--font-dm-sans)" }}>{review.verdict}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: review.affiliateUrl ? 24 : 0 }}>
                    <div style={{ padding: "12px 16px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>FSP COMPOSITE</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>{rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>/10</span></p>
                    </div>
                    <div style={{ padding: "12px 16px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>EDITORIAL</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 800, color: "#4ADE80", lineHeight: 1 }}>{rubric.editorialScore}<span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>/10</span></p>
                    </div>
                  </div>
                  {review.affiliateUrl && (
                    <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "linear-gradient(135deg, #0F7A5A, #14A474)", color: "#FFFFFF", fontSize: 14, fontWeight: 700, borderRadius: 14, fontFamily: "var(--font-dm-sans)", textDecoration: "none", boxShadow: "0 4px 14px rgba(15,122,90,0.3)" }}>
                      View Best Price <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              </div>

            </article>
          </div>
        </div>

        {/* ═══ COMPARE PRODUCTS ═══ */}
        {review.relatedReviews && review.relatedReviews.length > 0 && (
          <div style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E8EDE9", padding: "56px 24px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #0F7A5A, #14A474)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <Scale size={18} />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#17211C", margin: 0 }}>Compare Products</h2>
                    <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)", margin: 0 }}>See how {review.title} stacks up</p>
                  </div>
                </div>
                <Link href="/compare" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-dm-sans)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  All comparisons <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                {review.relatedReviews.map((rel: { slug: string; title: string; brand: string; category: string; editorialScore: number; verdict: string; publishedAt: string; heroImage?: any; affiliateUrl?: string; priceRange?: string }) => {
                  const relImg = rel.heroImage ? urlFor(rel.heroImage).width(400).height(300).url() : null;
                  return (
                    <div key={rel.slug} style={{ borderRadius: 20, border: "1px solid #E8EDE9", overflow: "hidden", backgroundColor: "#FFFFFF", transition: "box-shadow 200ms" }}>
                      {/* Product image */}
                      <div style={{ height: 180, background: relImg ? undefined : "linear-gradient(145deg, #E7F2EC, #D4E9DF)", position: "relative", overflow: "hidden" }}>
                        {relImg ? (
                          <Image src={relImg} alt={rel.title} width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{rel.editorialScore}</span>
                              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-jetbrains), monospace" }}>/10</span>
                            </div>
                          </div>
                        )}
                        {/* Score badge overlay */}
                        <div style={{ position: "absolute", top: 12, right: 12, width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
                          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{rel.editorialScore}</span>
                          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-jetbrains), monospace" }}>/10</span>
                        </div>
                        {/* Category tag */}
                        <div style={{ position: "absolute", top: 12, left: 12, padding: "4px 10px", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", borderRadius: 8, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#fff", letterSpacing: "0.08em" }}>
                          {rel.category?.toUpperCase()}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: "18px 20px" }}>
                        <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-dm-sans)", marginBottom: 4 }}>{rel.brand}</p>
                        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#17211C", margin: "0 0 8px", lineHeight: 1.3 }}>{rel.title}</h3>
                        <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.5, fontFamily: "var(--font-dm-sans)", margin: "0 0 16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{rel.verdict}</p>

                        {/* Star rating */}
                        <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={13} style={{ color: i < Math.round(rel.editorialScore / 2) ? "#F59E0B" : "#E4E8E5", fill: i < Math.round(rel.editorialScore / 2) ? "#F59E0B" : "none" }} />
                          ))}
                          {rel.priceRange && <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-dm-sans)", marginLeft: 8 }}>{rel.priceRange.charAt(0).toUpperCase() + rel.priceRange.slice(1)}</span>}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", gap: 8 }}>
                          <Link href={`/reviews/${rel.slug}`}
                            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 12, fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                            Read Review <ArrowRight size={13} />
                          </Link>
                          {rel.affiliateUrl && (
                            <Link href={rel.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", background: "linear-gradient(135deg, #0F7A5A, #14A474)", borderRadius: 12, fontSize: 13, fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-dm-sans)", textDecoration: "none", boxShadow: "0 2px 8px rgba(15,122,90,0.2)" }}>
                              Buy <ExternalLink size={12} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ═══ RELATED INGREDIENTS ═══ */}
        {review.relatedIngredients && review.relatedIngredients.length > 0 && (
          <div style={{ borderTop: "1px solid #E8EDE9", padding: "48px 24px", backgroundColor: "#F4F7F5" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #E7F2EC, #D4E9DF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A" }}>
                  <FlaskConical size={16} />
                </div>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#17211C" }}>The science behind the label</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {review.relatedIngredients.map((ing: { name: string; slug: string }) => (
                  <Link key={ing.slug} href={`/ingredients/${ing.slug}`}
                    style={{ padding: "12px 20px", backgroundColor: "#FFFFFF", border: "1px solid #E8EDE9", borderRadius: 14, fontSize: 14, color: "#17211C", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-dm-sans)", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    {ing.name} <ArrowRight size={14} style={{ color: "#0F7A5A" }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
