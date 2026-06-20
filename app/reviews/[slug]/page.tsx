import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

import { ExternalLink, AlertTriangle, Star, ChevronRight, CheckCircle2, XCircle, ArrowRight, Shield, FlaskConical, Scale, Sparkles } from "lucide-react";
import { PortableText } from "@portabletext/react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import ReadingProgress from "@/components/ui/ReadingProgress";
import AuthorPopup from "@/components/ui/AuthorPopup";
import { computeComposite } from "@/lib/scoring";
import { getReviewBySlug, getAllReviewSlugs, urlFor } from "@/lib/sanity";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "our-experience", label: "Our Experience" },
  { id: "ingredients", label: "Ingredients" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "value", label: "Price & Value" },
  { id: "alternatives", label: "Alternatives" },
  { id: "faq", label: "FAQ" },
  { id: "takeaway", label: "Takeaway" },
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
    title: review.title,
    description: review.metaDescription || `Evidence-led review of ${review.title}: ingredient analysis, FSP score, and honest verdict.`,
    alternates: { canonical: `/reviews/${slug}` },
    ...(heroImg ? { openGraph: { images: [{ url: heroImg, width: 1200, height: 630, alt: review.title }] } } : {}),
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
    valueMetric: review.valueMetric ?? { pricePerServing: 0, primaryActiveGrams: 0, pricePerGramActive: 0, categoryAvgPricePerGram: 0, efficiency: "at" },
    compositeScore: 0,
    editorialScore: (review.editorialScore ?? 5) as ReviewRating,
  };
  rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
  const heroImageUrl = review.heroImage ? urlFor(review.heroImage).width(1200).height(630).url() : null;

  const publishedDate = review.publishedAt ? new Date(review.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "—";
  const updatedDate = review.updatedAt ? new Date(review.updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : publishedDate;

  const reviewSchema = {
    "@context": "https://schema.org", "@type": "Review",
    "@id": `https://fitlabreviews.com/reviews/${slug}#review`,
    name: `${review.title} — Fitlabreviews FSP Review`,
    ...(heroImageUrl ? { image: heroImageUrl } : {}),
    reviewBody: review.verdict,
    reviewRating: { "@type": "Rating", ratingValue: rubric.editorialScore, bestRating: 10, worstRating: 1 },
    datePublished: review.publishedAt ?? "", dateModified: review.updatedAt ?? review.publishedAt ?? "",
    author: { "@type": review.author ? "Person" : "Organization", name: review.author?.name ?? "Fitlab Research Team", url: review.author ? `https://fitlabreviews.com/authors/${review.author.slug}` : "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    itemReviewed: { "@type": "Product", name: review.title, ...(heroImageUrl ? { image: heroImageUrl } : {}), brand: { "@type": "Brand", name: review.brand }, category: review.category },
    url: `https://fitlabreviews.com/reviews/${slug}`,
  };
  const faqSchema = review.faqItems && review.faqItems.length >= 4 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: review.faqItems.map((f: { question: string; answer: string }) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  } : null;

  const sectionDivider = { borderBottom: "1px solid #E9EDE9", paddingBottom: 40, marginBottom: 40 };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgress />

      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* ── Breadcrumb ── */}
        <div style={{ borderBottom: "1px solid #E9EDE9", backgroundColor: "#F6F8F6" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={12} style={{ color: "#D4C9B8" }} />
            <Link href="/reviews" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>Reviews</Link>
            <ChevronRight size={12} style={{ color: "#D4C9B8" }} />
            <span style={{ fontSize: 12, color: "#17211C", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{review.brand}</span>
          </div>
        </div>

        {/* ── Article header ── */}
        <div className="pad-hero" style={{ borderBottom: "1px solid #E9EDE9" }}>
          <div style={{ maxWidth: 740, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 9px", backgroundColor: "#E7F2EC", borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#0A4F3B", fontFamily: "var(--font-dm-sans)" }}>Evidence Based</span>
              {review.reviewCode && <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "var(--font-jetbrains), monospace" }}>{review.reviewCode}</span>}
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, color: "#17211C", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
              {review.title} Review ({new Date().getFullYear()})
            </h1>
            <p style={{ fontSize: 17, color: "#3F4B43", lineHeight: 1.7, marginBottom: 20 }}>{review.verdict}</p>

            {/* Author row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
              {review.author && (
                <AuthorPopup label="Written by" author={{ name: review.author.name, slug: review.author.slug, role: review.author.role, bio: review.author.bio, avatarUrl: review.author.avatar ? urlFor(review.author.avatar).width(128).height(128).url() : undefined, credentials: review.author.credentials, linkedIn: review.author.linkedIn }} />
              )}
              {review.reviewer && (
                <>
                  <div style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
                  <AuthorPopup label="Reviewed by" author={{ name: review.reviewer.name, slug: review.reviewer.slug, role: review.reviewer.role, bio: review.reviewer.bio, avatarUrl: review.reviewer.avatar ? urlFor(review.reviewer.avatar).width(128).height(128).url() : undefined, credentials: review.reviewer.credentials, linkedIn: review.reviewer.linkedIn }} />
                </>
              )}
            </div>
            <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)" }}>Updated {updatedDate}</p>
          </div>
        </div>

        {/* ── Hero image ── */}
        {heroImageUrl && (
          <div style={{ maxWidth: 740, margin: "0 auto", padding: "32px 24px 0" }}>
            <Image src={heroImageUrl} alt={review.title} width={1200} height={630} priority style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover" }} />
          </div>
        )}

        {/* ── Body: TOC sidebar + article ── */}
        <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0, maxWidth: 740 }} className="ingredient-article">

              <div className="block lg:hidden" style={{ marginBottom: 32 }}>
                <MobileTOC items={tocItems} />
              </div>

              {/* ════════ KEY TAKEAWAYS (boxed) ════════ */}
              <div id="key-takeaways" style={{ padding: "20px 24px", backgroundColor: "#F2F8F4", borderLeft: "4px solid #0F7A5A", borderRadius: "0 12px 12px 0", marginBottom: 40 }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 700, color: "#0A4F3B", marginBottom: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>Key Takeaways</p>
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  {(review.keyTakeaways && review.keyTakeaways.length > 0 ? review.keyTakeaways : [
                    review.verdict,
                    ...(review.bestFor?.length ? [`Best suited for: ${review.bestFor.join(", ")}.`] : []),
                    `FSP composite score: ${rubric.compositeScore.toFixed(1)}/10; editorial score: ${rubric.editorialScore}/10.`,
                  ]).map((t: string, i: number) => (
                    <li key={i} style={{ fontSize: 15, color: "#17211C", lineHeight: 1.65 }}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* ── Trust line (not a card — just a one-liner) ── */}
              <p style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 40, display: "flex", alignItems: "center", gap: 6 }}>
                <Shield size={12} style={{ color: "#0F7A5A" }} />
                142+ products reviewed · Editorially independent · No sponsored content ·{" "}
                <Link href="/methodology" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>How we evaluate →</Link>
              </p>

              {/* ════════ PRODUCT SPECS (boxed — compact inline card) ════════ */}
              <div style={{ padding: "20px 24px", border: "1px solid #E4E8E5", borderRadius: 12, marginBottom: 40, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                {heroImageUrl && (
                  <Image src={heroImageUrl} alt={review.title} width={100} height={100} style={{ borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                )}
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#17211C", margin: "0 0 4px" }}>{review.title}</p>
                  <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} style={{ color: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "#E4E8E5", fill: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "none" }} />
                    ))}
                    <span style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginLeft: 4 }}>{rubric.editorialScore}/10</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)" }}>
                    {review.valueMetric?.pricePerServing > 0 && <span>${review.valueMetric.pricePerServing.toFixed(2)}/serving</span>}
                    {review.category && <span>· {review.category}</span>}
                    {review.priceRange && <span>· {review.priceRange.charAt(0).toUpperCase() + review.priceRange.slice(1)}</span>}
                  </div>
                </div>
                {review.affiliateUrl && (
                  <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ padding: "10px 20px", background: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: 6 }}>
                    Shop now <ExternalLink size={13} />
                  </Link>
                )}
              </div>

              {/* ════════ PROS & CONS (boxed — two columns) ════════ */}
              {(review.pros?.length > 0 || review.cons?.length > 0) && (
                <div id="pros-cons" style={{ ...sectionDivider }}>
                  <ProsCons pros={review.pros ?? []} cons={review.cons ?? []} />
                  {review.affiliateUrl && (
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                      <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                        Shop now <ExternalLink size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* ════════ OUR EXPERIENCE (flowing text — only profile is boxed) ════════ */}
              {review.testerExperience?.name && (
                <div id="our-experience" style={sectionDivider}>
                  <h2>Our experience with {review.title}</h2>

                  {/* Tester profile — small boxed card */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", backgroundColor: "#F6F8F6", borderRadius: 10, marginBottom: 24 }}>
                    {review.testerExperience.avatar ? (
                      <Image src={urlFor(review.testerExperience.avatar).width(80).height(80).url()} alt={review.testerExperience.name} width={48} height={48} style={{ borderRadius: "50%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)" }}>
                        {review.testerExperience.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#17211C", margin: 0 }}>{review.testerExperience.name}</p>
                      {review.testerExperience.role && <p style={{ fontSize: 12, color: "#6B7770", margin: "2px 0 0" }}>{review.testerExperience.role}</p>}
                    </div>
                  </div>

                  {review.testerExperience.motivation && <p>{review.testerExperience.motivation}</p>}

                  {review.testerExperience.howUsed && (
                    <>
                      <h3>How I used it</h3>
                      <p>{review.testerExperience.howUsed}</p>
                    </>
                  )}
                  {review.testerExperience.taste && (
                    <>
                      <h3>Taste and texture</h3>
                      <p>{review.testerExperience.taste}</p>
                    </>
                  )}
                  {review.testerExperience.results && (
                    <>
                      <h3>Results</h3>
                      <p>{review.testerExperience.results}</p>
                    </>
                  )}
                  {review.testerExperience.finalThoughts && (
                    <>
                      <h3>Final thoughts</h3>
                      <p>{review.testerExperience.finalThoughts}</p>
                    </>
                  )}
                </div>
              )}

              {/* ════════ INGREDIENTS (flowing text) ════════ */}
              {review.ingredients?.length > 0 && (
                <div id="ingredients" style={sectionDivider}>
                  <h2>Breaking down the active ingredients</h2>
                  <p>We examined each ingredient in {review.title} against published clinical evidence. Here is what the label contains and what the research says about each component.</p>

                  {review.ingredients.map((ing: any, i: number) => (
                    <div key={ing.name} style={{ marginBottom: i < review.ingredients.length - 1 ? 24 : 0 }}>
                      <h3 style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        {ing.name}
                        {ing.dosage && <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 500 }}>({ing.dosage})</span>}
                      </h3>
                      <p>{ing.purpose}</p>
                      {ing.notes && <p style={{ fontSize: 14, color: "#6B7770" }}>{ing.notes}</p>}
                      <EvidenceBadge level={ing.evidenceLevel} />
                    </div>
                  ))}
                </div>
              )}

              {/* ════════ SCORE BREAKDOWN (component — no extra card wrapper) ════════ */}
              {rubric.pillars.length > 0 && (
                <div id="score-breakdown" style={sectionDivider}>
                  <h2>FSP score breakdown</h2>
                  <p>Every product is scored using the Fitlab Scoring Protocol (FSP v2.1), a weighted composite of five pillars. Red flags incur point deductions.</p>
                  <ScoreBreakdown rubric={rubric} reviewCode={review.reviewCode || `REV-${slug.slice(0, 8).toUpperCase()}`} />
                </div>
              )}

              {/* ════════ FLAGS (component — no card wrapper) ════════ */}
              {rubric.flags.length > 0 && (
                <div style={sectionDivider}>
                  <h2>Red and green flags</h2>
                  <FlagSystem flags={rubric.flags} />
                </div>
              )}

              {/* ════════ CLAIM AUDIT (component — no card wrapper) ════════ */}
              {rubric.claimAudit.length > 0 && (
                <div id="claim-audit" style={sectionDivider}>
                  <h2>Claim audit</h2>
                  <p>We checked every marketing claim {review.brand} makes about {review.title} against published peer-reviewed literature.</p>
                  <ClaimAudit items={rubric.claimAudit} />
                </div>
              )}

              {/* ════════ PRICE & VALUE (flowing text + component) ════════ */}
              {rubric.valueMetric.pricePerServing > 0 && (
                <div id="value" style={sectionDivider}>
                  <h2>How much does {review.title} cost?</h2>
                  <p>
                    At ${rubric.valueMetric.pricePerServing.toFixed(2)} per serving, {review.title} sits{" "}
                    {rubric.valueMetric.efficiency === "above" ? "below" : rubric.valueMetric.efficiency === "below" ? "above" : "at"}{" "}
                    the category average of ${rubric.valueMetric.categoryAvgPricePerGram.toFixed(2)} per gram of {review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"}.
                    {rubric.valueMetric.efficiency === "above" ? " This is good value for money." : rubric.valueMetric.efficiency === "below" ? " The premium is significant — consider whether the quality justifies the cost." : ""}
                  </p>
                  <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel={review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"} />
                </div>
              )}

              {/* ════════ FULL REVIEW BODY (flowing text) ════════ */}
              {review.body?.length > 0 && (
                <div style={sectionDivider}>
                  <PortableText value={review.body} />
                </div>
              )}

              {/* ════════ ALTERNATIVES TABLE (table — boxed) ════════ */}
              {review.relatedReviews && review.relatedReviews.length > 0 && (
                <div id="alternatives" style={sectionDivider}>
                  <h2>{review.title} alternatives</h2>
                  <p>If {review.title} does not match your budget or needs, these alternatives scored well in the same category.</p>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 600, width: "100%" }}>
                      <thead>
                        <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                          {["Product", "Score", "Category", "Price Tier", ""].map((h) => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", color: "#6B7770", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {review.relatedReviews.map((rel: { slug: string; title: string; brand: string; category: string; editorialScore: number; verdict: string; publishedAt: string; heroImage?: any; affiliateUrl?: string; priceRange?: string }, i: number) => (
                          <tr key={rel.slug} style={{ borderBottom: "1px solid #F0F3F1", backgroundColor: i % 2 === 0 ? "#FAFBFA" : "#FFFFFF" }}>
                            <td style={{ padding: "14px 12px" }}>
                              <Link href={`/reviews/${rel.slug}`} style={{ fontSize: 14, fontWeight: 600, color: "#17211C", textDecoration: "none" }}>{rel.title}</Link>
                              <p style={{ fontSize: 12, color: "#6B7770", margin: "2px 0 0" }}>{rel.brand}</p>
                            </td>
                            <td style={{ padding: "14px 12px" }}>
                              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 700, color: "#0F7A5A" }}>{rel.editorialScore}/10</span>
                            </td>
                            <td style={{ padding: "14px 12px", fontSize: 13, color: "#3F4B43" }}>{rel.category}</td>
                            <td style={{ padding: "14px 12px", fontSize: 13, color: "#3F4B43" }}>{rel.priceRange ? rel.priceRange.charAt(0).toUpperCase() + rel.priceRange.slice(1) : "—"}</td>
                            <td style={{ padding: "14px 12px" }}>
                              {rel.affiliateUrl ? (
                                <Link href={rel.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>Shop →</Link>
                              ) : (
                                <Link href={`/reviews/${rel.slug}`} style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>Read →</Link>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ════════ FAQ (flowing text — not accordion cards) ════════ */}
              {review.faqItems && review.faqItems.length > 0 && (
                <div id="faq" style={sectionDivider}>
                  <h2>Frequently asked questions</h2>
                  {review.faqItems.map((item: { question: string; answer: string }, i: number) => (
                    <div key={i} style={{ marginBottom: 20 }}>
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* ════════ REFERENCES (flowing text) ════════ */}
              {review.references && review.references.length > 0 && (
                <div style={{ ...sectionDivider, fontSize: 13, color: "#6B7770" }}>
                  <details>
                    <summary style={{ cursor: "pointer", fontWeight: 600, color: "#17211C", fontSize: 14 }}>
                      Sources ({review.references.length})
                    </summary>
                    <ol style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                      {review.references.map((ref: { text: string; url?: string }, i: number) => (
                        <li key={i} style={{ fontSize: 12, lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                          {ref.text}
                          {ref.url && <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>PubMed ↗</a></>}
                        </li>
                      ))}
                    </ol>
                  </details>
                </div>
              )}

              {/* ════════ TAKEAWAY (flowing text — the final verdict) ════════ */}
              <div id="takeaway" style={{ marginBottom: 40 }}>
                <h2>Takeaway</h2>
                <p>{review.verdict}</p>
                {review.bestFor?.length > 0 && (
                  <>
                    <p><strong>You should consider {review.title} if you:</strong></p>
                    <ul>
                      {review.bestFor.map((b: string) => <li key={b}>{b}</li>)}
                    </ul>
                  </>
                )}
                {review.notIdealFor?.length > 0 && (
                  <>
                    <p><strong>{review.title} might not be worth it if you:</strong></p>
                    <ul>
                      {review.notIdealFor.map((b: string) => <li key={b}>{b}</li>)}
                    </ul>
                  </>
                )}
                {review.affiliateUrl && (
                  <p>
                    <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                      Shop {review.title} <ExternalLink size={13} />
                    </Link>
                  </p>
                )}
              </div>

              {/* ── Affiliate disclosure (one-liner) ── */}
              <div style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", borderRadius: 10, display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
                <AlertTriangle size={12} style={{ color: "#9CA3AF", flexShrink: 0 }} />
                <p style={{ fontSize: 11, color: "#6B7770", margin: 0 }}>
                  This review may contain affiliate links. Commissions do not influence our ratings.{" "}
                  <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our disclosure →</Link>
                </p>
              </div>

            </article>
          </div>
        </div>
      </div>
    </>
  );
}
