import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 3600;
import { ExternalLink, AlertTriangle, Star } from "lucide-react";
import ReviewCard from "@/components/ui/ReviewCard";
import { PortableText } from "@portabletext/react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
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
  { id: "final", label: "Final Verdict" },
];

export async function generateStaticParams() {
  const slugs = await getAllReviewSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);
  if (!review) {
    return { title: "Review Not Found" };
  }
  return {
    title: `${review.title}`,
    description: review.metaDescription || `Evidence-led review of ${review.title}: ingredient analysis, FSP score, and honest verdict.`,
    alternates: { canonical: `/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = await getReviewBySlug(slug);

  if (!review) notFound();

  const rubric: ScoringRubric = {
    pillars: review.pillars ?? [],
    flags: review.flags ?? [],
    claimAudit: review.claimAudit ?? [],
    valueMetric: review.valueMetric ?? {
      pricePerServing: 0,
      primaryActiveGrams: 0,
      pricePerGramActive: 0,
      categoryAvgPricePerGram: 0,
      efficiency: "at",
    },
    compositeScore: 0,
    editorialScore: (review.editorialScore ?? 5) as ReviewRating,
  };
  rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

  const publishedDate = review.publishedAt
    ? new Date(review.publishedAt).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })
    : "—";
  const updatedDate = review.updatedAt
    ? new Date(review.updatedAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
    : publishedDate;

  const heroImageUrl = review.heroImage ? urlFor(review.heroImage).width(1200).height(630).url() : null;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://fitlabreviews.com/reviews/${slug}#review`,
    name: `${review.title} — Fitlabreviews FSP Review`,
    ...(heroImageUrl ? { image: heroImageUrl } : {}),
    reviewBody: review.verdict,
    reviewRating: {
      "@type": "Rating",
      ratingValue: rubric.editorialScore,
      bestRating: 10,
      worstRating: 1,
    },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href={`/category/${review.category?.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>{review.category}</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{review.brand}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #E4E8E5" }} className="pad-hero">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770" }}>{review.brand?.toUpperCase()}</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0F7A5A" }}>Full Review · FSP Scored</span>
            </div>
            <div className="layout-hero-split">
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>
                  {review.brand} · {review.category}
                </p>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 16 }}>
                  {review.title}
                </h1>
                {review.verdict && (
                  <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.65, maxWidth: 600, marginBottom: 24 }}>
                    {review.verdict}
                  </p>
                )}
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  {review.affiliateUrl && (
                    <Link
                      href={review.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 14, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
                    >
                      Check Price <ExternalLink size={13} />
                    </Link>
                  )}
                  <Link href="/methodology" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>
                    FSP Score: {rubric.compositeScore.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <ReviewScoreBadge rating={rubric.editorialScore} size="lg" />
            </div>
          </div>
        </div>

        {/* Metadata strip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Published", value: publishedDate },
            { label: "Last Updated", value: updatedDate },
            ...(review.testingPeriod ? [{ label: "Testing Period", value: review.testingPeriod }] : []),
            ...(review.tubsTested ? [{ label: "Tubs Tested", value: review.tubsTested }] : []),
            { label: "Price Range", value: review.priceRange ? review.priceRange.charAt(0).toUpperCase() + review.priceRange.slice(1) : "—" },
            { label: "FSP Score", value: `${rubric.editorialScore}/10` },
          ]} />
        </div>

        {/* Affiliate notice */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px 0" }}>
          <div style={{ padding: "10px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <AlertTriangle size={13} style={{ color: "#6B7770", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif" }}>
              This review may contain affiliate links. Commissions do not influence our ratings or recommendations.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Body: TOC + Content */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* TOC sidebar */}
            <div className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
              <TableOfContents items={tocItems} />
            </div>

            {/* Main content */}
            <div style={{ minWidth: 0 }}>

              {/* Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Quick Verdict
                </h2>
                <div style={{ padding: 24, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, borderLeft: "4px solid #0F7A5A" }}>
                  <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.75, marginBottom: review.bestFor?.length ? 16 : 0 }}>
                    {review.verdict}
                  </p>
                  {review.tags && review.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                      {review.tags.map((tag: string) => (
                        <span key={tag} style={{ padding: "4px 10px", backgroundColor: "rgba(15,122,90,0.08)", border: "1px solid rgba(15,122,90,0.2)", borderRadius: 8, fontSize: 11, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {(review.bestFor?.length || review.notIdealFor?.length) && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                    {review.bestFor?.length > 0 && (
                      <div style={{ padding: 16, border: "1px solid #E4E8E5", borderRadius: 14 }}>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 8 }}>Best For</p>
                        {review.bestFor.map((b: string) => (
                          <p key={b} style={{ fontSize: 13, color: "#17211C", padding: "3px 0" }}>· {b}</p>
                        ))}
                      </div>
                    )}
                    {review.notIdealFor?.length > 0 && (
                      <div style={{ padding: 16, border: "1px solid #E4E8E5", borderRadius: 14 }}>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Not Ideal For</p>
                        {review.notIdealFor.map((b: string) => (
                          <p key={b} style={{ fontSize: 13, color: "#17211C", padding: "3px 0" }}>· {b}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* Score Breakdown */}
              {rubric.pillars.length > 0 && (
                <section id="score-breakdown" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Score Breakdown
                  </h2>
                  <ScoreBreakdown rubric={rubric} reviewCode={review.reviewCode || `REV-${slug.slice(0, 8).toUpperCase()}`} />
                </section>
              )}

              {/* Flags */}
              {rubric.flags.length > 0 && (
                <section id="flags" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Red & Green Flags
                  </h2>
                  <FlagSystem flags={rubric.flags} />
                </section>
              )}

              {/* Ingredients */}
              {review.ingredients?.length > 0 && (
                <section id="ingredients" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Ingredient Breakdown
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                    {review.ingredients.map((ing: any, i: number) => (
                      <div key={ing.name} style={{ padding: "18px 20px", borderBottom: i < review.ingredients.length - 1 ? "1px solid #E4E8E5" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                            <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C" }}>{ing.name}</span>
                            {ing.dosage && (
                              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#3F4B43", backgroundColor: "#F6F8F6", padding: "2px 8px", borderRadius: 4 }}>{ing.dosage}</span>
                            )}
                          </div>
                          <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.5 }}>{ing.purpose}</p>
                          {ing.notes && (
                            <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.5, marginTop: 6 }}>{ing.notes}</p>
                          )}
                        </div>
                        <EvidenceBadge level={ing.evidenceLevel} showIcon={false} />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Claim Audit */}
              {rubric.claimAudit.length > 0 && (
                <section id="claim-audit" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 8, letterSpacing: "-0.02em" }}>
                    Claim Audit
                  </h2>
                  <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20, lineHeight: 1.6 }}>
                    We checked every marketing claim against published peer-reviewed literature.
                  </p>
                  <ClaimAudit items={rubric.claimAudit} />
                </section>
              )}

              {/* Pros Cons */}
              {(review.pros?.length > 0 || review.cons?.length > 0) && (
                <section id="pros-cons" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Pros & Cons
                  </h2>
                  <ProsCons pros={review.pros ?? []} cons={review.cons ?? []} />
                </section>
              )}

              {/* Value */}
              {rubric.valueMetric.pricePerServing > 0 && (
                <section id="value" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Price & Value
                  </h2>
                  <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel={review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"} />
                </section>
              )}

              {/* Full Review Body */}
              {review.body?.length > 0 && (
                <section id="body" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 28, letterSpacing: "-0.02em" }}>
                    Full Review
                  </h2>
                  <div style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                    <PortableText
                      value={review.body}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.85, margin: 0, padding: "0 28px 22px" }}>
                              {children}
                            </p>
                          ),
                          h2: ({ children }) => (
                            <div style={{ borderTop: "1px solid #E4E8E5", marginTop: 8, padding: "28px 28px 6px", backgroundColor: "#F6F8F6" }}>
                              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6 }}>Section</p>
                              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
                                {children}
                              </h2>
                            </div>
                          ),
                          h3: ({ children }) => (
                            <div style={{ padding: "20px 28px 4px" }}>
                              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.01em", margin: 0, borderLeft: "3px solid #0F7A5A", paddingLeft: 12 }}>
                                {children}
                              </h3>
                            </div>
                          ),
                        },
                      }}
                    />
                    <div style={{ height: 8, backgroundColor: "#F6F8F6", borderTop: "1px solid #E4E8E5" }} />
                  </div>
                </section>
              )}

              {/* Final Verdict */}
              <section id="final">
                <div style={{ padding: 32, backgroundColor: "#0D1810", borderRadius: 14 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 12 }}>Final Verdict</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", flex: 1 }}>
                      {review.title}
                    </h2>
                    <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                  </div>
                  <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 1.75, marginBottom: 20 }}>
                    {review.verdict}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: review.affiliateUrl ? 24 : 0 }}>
                    <div style={{ padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#586259", marginBottom: 4 }}>FSP COMPOSITE</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>
                        {rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 12, color: "#586259" }}>/10</span>
                      </p>
                    </div>
                    <div style={{ padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#586259", marginBottom: 4 }}>EDITORIAL SCORE</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#0F7A5A", lineHeight: 1 }}>
                        {rubric.editorialScore}<span style={{ fontSize: 12, color: "#586259" }}>/10</span>
                      </p>
                    </div>
                  </div>
                  {review.affiliateUrl && (
                    <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 14, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                      View Best Price <ExternalLink size={13} />
                    </Link>
                  )}
                </div>
              </section>

              {/* FAQ */}
              {review.faqItems && review.faqItems.length > 0 && (
                <section id="faq" style={{ marginTop: 56, marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {review.faqItems.map((item: { question: string; answer: string }, i: number) => (
                      <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                        <div style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5" }}>
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
              {review.references && review.references.length > 0 && (
                <section style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", marginBottom: 16 }}>Research References</h2>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {review.references.map((ref: { text: string; url?: string }, i: number) => (
                      <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                        {ref.text}
                        {ref.url && <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>PubMed ↗</a></>}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

            </div>
          </div>
        </div>

        {/* Related Reviews */}
        {review.relatedReviews && review.relatedReviews.length > 0 && (
          <div style={{ backgroundColor: "#F6F8F6", borderTop: "1px solid #E4E8E5", padding: "48px 24px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 20 }}>You might also read</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {review.relatedReviews.map((rel: { slug: string; title: string; brand: string; category: string; editorialScore: number; verdict: string; publishedAt: string }) => (
                  <ReviewCard
                    key={rel.slug}
                    slug={rel.slug}
                    title={rel.title}
                    brand={rel.brand}
                    category={rel.category}
                    rating={rel.editorialScore as ReviewRating}
                    verdict={rel.verdict}
                    publishedAt={rel.publishedAt}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Ingredients */}
        {review.relatedIngredients && review.relatedIngredients.length > 0 && (
          <div style={{ borderTop: "1px solid #E4E8E5", padding: "48px 24px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 16 }}>The science behind the label</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {review.relatedIngredients.map((ing: { name: string; slug: string }) => (
                  <Link key={ing.slug} href={`/ingredients/${ing.slug}`} style={{ padding: "10px 18px", border: "1px solid #E4E8E5", borderRadius: 14, backgroundColor: "#F6F8F6", fontSize: 13, color: "#17211C", fontWeight: 600, textDecoration: "none" }}>
                    {ing.name} →
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
