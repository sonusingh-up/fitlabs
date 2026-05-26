import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, AlertTriangle } from "lucide-react";
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
import { getReviewBySlug, getAllReviewSlugs } from "@/lib/sanity";
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://fitlabreviews.com/reviews/${slug}#review`,
    name: `${review.title} — Fitlabreviews FSP Review`,
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
      brand: { "@type": "Brand", name: review.brand },
      category: review.category,
    },
    url: `https://fitlabreviews.com/reviews/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href={`/category/${review.category?.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>{review.category}</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{review.brand}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>{review.brand?.toUpperCase()}</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Full Review · FSP Scored</span>
            </div>
            <div className="layout-hero-split">
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                  {review.brand} · {review.category}
                </p>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
                  {review.title}
                </h1>
                {review.verdict && (
                  <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.65, maxWidth: 600, marginBottom: 24 }}>
                    {review.verdict}
                  </p>
                )}
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  {review.affiliateUrl && (
                    <Link
                      href={review.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                    >
                      Check Price <ExternalLink size={13} />
                    </Link>
                  )}
                  <Link href="/methodology" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>
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
            { label: "Category", value: review.category ?? "—" },
            { label: "Price Range", value: review.priceRange ? review.priceRange.charAt(0).toUpperCase() + review.priceRange.slice(1) : "—" },
            ...(review.bestFor?.length ? [{ label: "Best For", value: review.bestFor[0] }] : []),
            ...(review.author?.name ? [{ label: "Reviewed By", value: review.author.name }] : []),
          ]} />
        </div>

        {/* Affiliate notice */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px 0" }}>
          <div style={{ padding: "10px 16px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
            <AlertTriangle size={13} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              This review may contain affiliate links. Commissions do not influence our ratings or recommendations.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Body: TOC + Content */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* TOC sidebar */}
            <div className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
              <TableOfContents items={tocItems} />
            </div>

            {/* Main content */}
            <div style={{ minWidth: 0 }}>

              {/* Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Quick Verdict
                </h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #C4622D" }}>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: review.bestFor?.length ? 16 : 0 }}>
                    {review.verdict}
                  </p>
                  {review.tags && review.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                      {review.tags.map((tag: string) => (
                        <span key={tag} style={{ padding: "4px 10px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 8, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {(review.bestFor?.length || review.notIdealFor?.length) && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                    {review.bestFor?.length > 0 && (
                      <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 8 }}>Best For</p>
                        {review.bestFor.map((b: string) => (
                          <p key={b} style={{ fontSize: 13, color: "#2D2926", padding: "3px 0" }}>· {b}</p>
                        ))}
                      </div>
                    )}
                    {review.notIdealFor?.length > 0 && (
                      <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 8 }}>Not Ideal For</p>
                        {review.notIdealFor.map((b: string) => (
                          <p key={b} style={{ fontSize: 13, color: "#2D2926", padding: "3px 0" }}>· {b}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* Score Breakdown */}
              {rubric.pillars.length > 0 && (
                <section id="score-breakdown" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Score Breakdown
                  </h2>
                  <ScoreBreakdown rubric={rubric} reviewCode={`REV-${slug.slice(0, 8).toUpperCase()}`} />
                </section>
              )}

              {/* Flags */}
              {rubric.flags.length > 0 && (
                <section id="flags" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Red & Green Flags
                  </h2>
                  <FlagSystem flags={rubric.flags} />
                </section>
              )}

              {/* Ingredients */}
              {review.ingredients?.length > 0 && (
                <section id="ingredients" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Ingredient Breakdown
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                    {review.ingredients.map((ing: any, i: number) => (
                      <div key={ing.name} style={{ padding: "18px 20px", borderBottom: i < review.ingredients.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714" }}>{ing.name}</span>
                            {ing.dosage && (
                              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "2px 8px", borderRadius: 4 }}>{ing.dosage}</span>
                            )}
                          </div>
                          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{ing.purpose}</p>
                          {ing.notes && (
                            <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, marginTop: 6 }}>{ing.notes}</p>
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
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                    Claim Audit
                  </h2>
                  <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                    We checked every marketing claim against published peer-reviewed literature.
                  </p>
                  <ClaimAudit items={rubric.claimAudit} />
                </section>
              )}

              {/* Pros Cons */}
              {(review.pros?.length > 0 || review.cons?.length > 0) && (
                <section id="pros-cons" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Pros & Cons
                  </h2>
                  <ProsCons pros={review.pros ?? []} cons={review.cons ?? []} />
                </section>
              )}

              {/* Value */}
              {rubric.valueMetric.pricePerServing > 0 && (
                <section id="value" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Price & Value
                  </h2>
                  <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel={review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"} />
                </section>
              )}

              {/* Full Review Body */}
              {review.body?.length > 0 && (
                <section id="body" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 28, letterSpacing: "-0.02em" }}>
                    Full Review
                  </h2>
                  <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                    <PortableText
                      value={review.body}
                      components={{
                        block: {
                          normal: ({ children }) => (
                            <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.85, margin: 0, padding: "0 28px 22px" }}>
                              {children}
                            </p>
                          ),
                          h2: ({ children }) => (
                            <div style={{ borderTop: "1px solid #D4C9B8", marginTop: 8, padding: "28px 28px 6px", backgroundColor: "#F8F2E4" }}>
                              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>Section</p>
                              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>
                                {children}
                              </h2>
                            </div>
                          ),
                          h3: ({ children }) => (
                            <div style={{ padding: "20px 28px 4px" }}>
                              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.01em", margin: 0, borderLeft: "3px solid #C4622D", paddingLeft: 12 }}>
                                {children}
                              </h3>
                            </div>
                          ),
                        },
                      }}
                    />
                    <div style={{ height: 8, backgroundColor: "#F8F2E4", borderTop: "1px solid #EDE8DF" }} />
                  </div>
                </section>
              )}

              {/* Final Verdict */}
              <section id="final">
                <div style={{ padding: 32, backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2EBD9", letterSpacing: "-0.02em", flex: 1 }}>
                      {review.title}
                    </h2>
                    <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                  </div>
                  <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 20 }}>
                    {review.verdict}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: review.affiliateUrl ? 24 : 0 }}>
                    <div style={{ padding: "10px 14px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650", marginBottom: 4 }}>FSP COMPOSITE</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#F2EBD9", lineHeight: 1 }}>
                        {rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 12, color: "#5C5650" }}>/10</span>
                      </p>
                    </div>
                    <div style={{ padding: "10px 14px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650", marginBottom: 4 }}>EDITORIAL SCORE</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#2D6A4F", lineHeight: 1 }}>
                        {rubric.editorialScore}<span style={{ fontSize: 12, color: "#5C5650" }}>/10</span>
                      </p>
                    </div>
                  </div>
                  {review.affiliateUrl && (
                    <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      View Best Price <ExternalLink size={13} />
                    </Link>
                  )}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
