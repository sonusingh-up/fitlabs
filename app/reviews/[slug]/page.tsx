import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

import { ExternalLink, AlertTriangle, Star, ChevronRight, ChevronDown, CheckCircle2, XCircle, ArrowRight, Shield, FlaskConical } from "lucide-react";
import { PortableText } from "@portabletext/react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import ReadingProgress from "@/components/ui/ReadingProgress";
import MobileTOC from "@/components/ui/MobileTOC";
import TableOfContents from "@/components/ui/TableOfContents";
import AuthorPopup from "@/components/ui/AuthorPopup";
import ArticleFeedback from "@/components/ui/ArticleFeedback";
import StickyBuyBar from "@/components/ui/StickyBuyBar";
import { computeComposite } from "@/lib/scoring";
import { getReviewBySlug, getAllReviewSlugs, urlFor } from "@/lib/sanity";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

const tocItems = [
  { id: "quick-look", label: "Quick Look" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "our-experience", label: "Our Experience" },
  { id: "ingredients", label: "Ingredients" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "claim-audit", label: "Claim Audit" },
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
  const updatedDate = review.updatedAt ? new Date(review.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : publishedDate;

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

  const divider = { borderBottom: "1px solid #E9EDE9", paddingBottom: 40, marginBottom: 40 };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgress />

      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* ── Affiliate disclosure bar ── */}
        <div style={{ backgroundColor: "#F6F8F6", borderBottom: "1px solid #E9EDE9", padding: "8px 24px" }}>
          <p style={{ maxWidth: 1200, margin: "0 auto", fontSize: 11, color: "#6B7770", fontFamily: "var(--font-dm-sans)", display: "flex", alignItems: "center", gap: 6 }}>
            <AlertTriangle size={11} style={{ flexShrink: 0 }} />
            We include products we think are useful. If you buy through links, we may earn a commission.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", marginLeft: 4 }}>Our process</Link>
          </p>
        </div>

        {/* ── Breadcrumb ── */}
        <div style={{ borderBottom: "1px solid #E9EDE9" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={12} style={{ color: "#D4C9B8" }} />
            <Link href={`/category/${review.category?.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>{review.category}</Link>
            <ChevronRight size={12} style={{ color: "#D4C9B8" }} />
            <span style={{ fontSize: 12, color: "#17211C", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{review.title}</span>
          </div>
        </div>

        {/* ── Article header ── */}
        <div className="pad-hero" style={{ borderBottom: "1px solid #E9EDE9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ padding: "3px 9px", backgroundColor: "#E7F2EC", borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#0A4F3B", fontFamily: "var(--font-dm-sans)" }}>Evidence Based</span>
              {review.reviewCode && <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "var(--font-jetbrains), monospace" }}>{review.reviewCode}</span>}
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, color: "#17211C", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12, maxWidth: 800 }}>
              {review.title} Review ({new Date().getFullYear()})
            </h1>
            <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>Published: {publishedDate} · Updated: {updatedDate}</p>

            {/* Author row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              {review.author && (
                <AuthorPopup label="Written by" author={{ name: review.author.name, slug: review.author.slug, role: review.author.role, bio: review.author.bio, avatarUrl: review.author.avatar ? urlFor(review.author.avatar).width(128).height(128).url() : undefined, credentials: review.author.credentials, linkedIn: review.author.linkedIn }} />
              )}
              {review.reviewer && (
                <>
                  <div style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
                  <AuthorPopup label="Fact checked" author={{ name: review.reviewer.name, slug: review.reviewer.slug, role: review.reviewer.role, bio: review.reviewer.bio, avatarUrl: review.reviewer.avatar ? urlFor(review.reviewer.avatar).width(128).height(128).url() : undefined, credentials: review.reviewer.credentials, linkedIn: review.reviewer.linkedIn }} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Hero image (full-width) ── */}
        {heroImageUrl && (
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 0" }}>
            <Image src={heroImageUrl} alt={review.title} width={1200} height={630} priority style={{ width: "100%", height: "auto", borderRadius: 8, objectFit: "cover" }} />
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            TWO-COLUMN LAYOUT: Article (left) + Sticky Sidebar (right)
            ══════════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 0" }}>
          <div className="review-layout">

            {/* ═══ LEFT: Article content ═══ */}
            <article style={{ minWidth: 0 }} className="ingredient-article">

              {/* Mobile TOC */}
              <div className="block lg:hidden" style={{ marginBottom: 24 }}>
                <MobileTOC items={tocItems} />
              </div>

              {/* ── QUICK LOOK (product card) ── */}
              <div id="quick-look" style={{ border: "1px solid #E4E8E5", borderRadius: 12, padding: "24px", marginBottom: 40 }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 700, color: "#6B7770", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Quick Look</p>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                  {heroImageUrl && (
                    <Image src={heroImageUrl} alt={review.title} width={140} height={140} style={{ borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, fontWeight: 700, color: "#17211C", margin: "0 0 6px" }}>{review.title}</p>
                    <div style={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 8 }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} style={{ color: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "#E4E8E5", fill: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "none" }} />
                      ))}
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginLeft: 6 }}>{rubric.editorialScore}/10</span>
                      <span style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)", marginLeft: 4 }}>FSP Scored</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.65, marginBottom: 12 }}>{review.verdict}</p>
                    <ul style={{ margin: "0 0 16px", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 4 }}>
                      {review.valueMetric?.pricePerServing > 0 && <li style={{ fontSize: 13, color: "#3F4B43" }}><strong>Price:</strong> ${review.valueMetric.pricePerServing.toFixed(2)}/serving</li>}
                      {review.productSpecs?.servings && <li style={{ fontSize: 13, color: "#3F4B43" }}><strong>Servings:</strong> {review.productSpecs.servings}</li>}
                      {review.productSpecs?.certifications?.length > 0 && <li style={{ fontSize: 13, color: "#3F4B43" }}><strong>Certifications:</strong> {review.productSpecs.certifications.join(", ")}</li>}
                      <li style={{ fontSize: 13, color: "#3F4B43" }}><strong>Category:</strong> {review.category}</li>
                    </ul>
                    {review.affiliateUrl && (
                      <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px", background: "#0F7A5A", color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                        Check Price <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* ── KEY TAKEAWAYS ── */}
              <div style={{ padding: "20px 24px", backgroundColor: "#FFF8ED", borderLeft: "4px solid #C98A1E", borderRadius: "0 8px 8px 0", marginBottom: 40 }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 700, color: "#17211C", marginBottom: 12 }}>Key Takeaways</p>
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  {(review.keyTakeaways && review.keyTakeaways.length > 0 ? review.keyTakeaways : [
                    review.verdict,
                    ...(review.bestFor?.length ? [`Best for: ${review.bestFor.join(", ")}.`] : []),
                    `FSP score: ${rubric.compositeScore.toFixed(1)}/10; editorial: ${rubric.editorialScore}/10.`,
                  ]).map((t: string, i: number) => (
                    <li key={i} style={{ fontSize: 15, color: "#17211C", lineHeight: 1.65 }}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* ── PROS & CONS ── */}
              {(review.pros?.length > 0 || review.cons?.length > 0) && (
                <div id="pros-cons" style={divider}>
                  <ProsCons pros={review.pros ?? []} cons={review.cons ?? []} />
                  {review.affiliateUrl && (
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                      <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: "#0F7A5A", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                        Shop now <ExternalLink size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* ── OUR EXPERIENCE ── */}
              {review.testerExperience?.name && (
                <div id="our-experience" style={divider}>
                  <h2>Our experience with {review.title}</h2>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", backgroundColor: "#F6F8F6", borderRadius: 10, marginBottom: 24 }}>
                    {review.testerExperience.avatar ? (
                      <Image src={urlFor(review.testerExperience.avatar).width(80).height(80).url()} alt={review.testerExperience.name} width={48} height={48} style={{ borderRadius: "50%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>
                        {review.testerExperience.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#17211C", margin: 0 }}>{review.testerExperience.name}</p>
                      {review.testerExperience.role && <p style={{ fontSize: 12, color: "#6B7770", margin: "2px 0 0" }}>{review.testerExperience.role}</p>}
                    </div>
                  </div>
                  {review.testerExperience.motivation && <p>{review.testerExperience.motivation}</p>}
                  {review.testerExperience.howUsed && <><h3>How I used it</h3><p>{review.testerExperience.howUsed}</p></>}
                  {review.testerExperience.taste && <><h3>Taste and texture</h3><p>{review.testerExperience.taste}</p></>}
                  {review.testerExperience.results && <><h3>Results</h3><p>{review.testerExperience.results}</p></>}
                  {review.testerExperience.finalThoughts && <><h3>Final thoughts</h3><p>{review.testerExperience.finalThoughts}</p></>}
                </div>
              )}

              {/* ── INGREDIENTS ── */}
              {review.ingredients?.length > 0 && (
                <div id="ingredients" style={divider}>
                  <h2>Breaking down the active ingredients</h2>
                  <p>We examined each ingredient in {review.title} against published clinical evidence.</p>
                  {review.ingredients.map((ing: any, i: number) => (
                    <div key={ing.name} style={{ marginBottom: i < review.ingredients.length - 1 ? 24 : 0 }}>
                      <h3>{ing.name} {ing.dosage && <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 500 }}>({ing.dosage})</span>}</h3>
                      <p>{ing.purpose}</p>
                      {ing.notes && <p style={{ fontSize: 14, color: "#6B7770" }}>{ing.notes}</p>}
                      <EvidenceBadge level={ing.evidenceLevel} />
                    </div>
                  ))}
                </div>
              )}

              {/* ── SCORE BREAKDOWN ── */}
              {rubric.pillars.length > 0 && (
                <div id="score-breakdown" style={divider}>
                  <h2>FSP score breakdown</h2>
                  <p>Scored using the Fitlab Scoring Protocol (FSP v2.1) — a weighted composite of five pillars.</p>
                  <ScoreBreakdown rubric={rubric} reviewCode={review.reviewCode || `REV-${slug.slice(0, 8).toUpperCase()}`} />
                </div>
              )}

              {/* ── FLAGS ── */}
              {rubric.flags.length > 0 && (
                <div style={divider}>
                  <h2>Red and green flags</h2>
                  <FlagSystem flags={rubric.flags} />
                </div>
              )}

              {/* ── CLAIM AUDIT ── */}
              {rubric.claimAudit.length > 0 && (
                <div id="claim-audit" style={divider}>
                  <h2>Claim audit</h2>
                  <p>We checked every marketing claim against peer-reviewed literature.</p>
                  <ClaimAudit items={rubric.claimAudit} />
                </div>
              )}

              {/* ── PRICE & VALUE ── */}
              {rubric.valueMetric.pricePerServing > 0 && (
                <div id="value" style={divider}>
                  <h2>How much does {review.title} cost?</h2>
                  <p>
                    At ${rubric.valueMetric.pricePerServing.toFixed(2)} per serving, {review.title} sits{" "}
                    {rubric.valueMetric.efficiency === "above" ? "below" : rubric.valueMetric.efficiency === "below" ? "above" : "at"}{" "}
                    the category average of ${rubric.valueMetric.categoryAvgPricePerGram.toFixed(2)}/g.
                  </p>
                  <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel={review.category?.toLowerCase().includes("protein") ? "protein" : "active ingredient"} />
                </div>
              )}

              {/* ── FULL REVIEW BODY ── */}
              {review.body?.length > 0 && (
                <div style={divider}><PortableText value={review.body} /></div>
              )}

              {/* ── ALTERNATIVES ── */}
              {review.relatedReviews && review.relatedReviews.length > 0 && (
                <div id="alternatives" style={divider}>
                  <h2>{review.title} alternatives</h2>
                  <p>Similar products that scored well in our testing.</p>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 540, width: "100%" }}>
                      <thead>
                        <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                          {["Product", "Score", "Category", "Price", ""].map((h) => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", color: "#6B7770", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {review.relatedReviews.map((rel: any, i: number) => (
                          <tr key={rel.slug} style={{ borderBottom: "1px solid #F0F3F1", backgroundColor: i % 2 === 0 ? "#FAFBFA" : "#fff" }}>
                            <td style={{ padding: "14px 12px" }}>
                              <Link href={`/reviews/${rel.slug}`} style={{ fontSize: 14, fontWeight: 600, color: "#17211C", textDecoration: "none" }}>{rel.title}</Link>
                              <p style={{ fontSize: 12, color: "#6B7770", margin: "2px 0 0" }}>{rel.brand}</p>
                            </td>
                            <td style={{ padding: "14px 12px", fontSize: 15, fontWeight: 700, color: "#0F7A5A" }}>{rel.editorialScore}/10</td>
                            <td style={{ padding: "14px 12px", fontSize: 13, color: "#3F4B43" }}>{rel.category}</td>
                            <td style={{ padding: "14px 12px", fontSize: 13, color: "#3F4B43" }}>{rel.priceRange ? rel.priceRange.charAt(0).toUpperCase() + rel.priceRange.slice(1) : "—"}</td>
                            <td style={{ padding: "14px 12px" }}>
                              <Link href={rel.affiliateUrl || `/reviews/${rel.slug}`} target={rel.affiliateUrl ? "_blank" : undefined} rel={rel.affiliateUrl ? "noopener noreferrer nofollow" : undefined} style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>
                                {rel.affiliateUrl ? "Shop →" : "Read →"}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ── FAQ (accordion) ── */}
              {review.faqItems && review.faqItems.length > 0 && (
                <div id="faq" style={divider}>
                  <h2>Frequently asked questions</h2>
                  {review.faqItems.map((item: { question: string; answer: string }, i: number) => (
                    <details key={i} style={{ borderBottom: "1px solid #F0F3F1", paddingBottom: 16, marginBottom: 16 }}>
                      <summary style={{ cursor: "pointer", fontSize: 16, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
                        {item.question}
                        <ChevronDown size={18} style={{ color: "#9CA3AF", flexShrink: 0 }} />
                      </summary>
                      <p style={{ paddingTop: 8 }}>{item.answer}</p>
                    </details>
                  ))}
                </div>
              )}

              {/* ── TAKEAWAY ── */}
              <div id="takeaway" style={divider}>
                <h2>Takeaway</h2>
                <p>{review.verdict}</p>
                {review.bestFor?.length > 0 && (
                  <><p><strong>You should consider {review.title} if you:</strong></p><ul>{review.bestFor.map((b: string) => <li key={b}>{b}</li>)}</ul></>
                )}
                {review.notIdealFor?.length > 0 && (
                  <><p><strong>{review.title} might not be worth it if you:</strong></p><ul>{review.notIdealFor.map((b: string) => <li key={b}>{b}</li>)}</ul></>
                )}
              </div>

              {/* ── GET STARTED CTA ── */}
              {review.affiliateUrl && (
                <div style={{ padding: "28px 24px", border: "1px solid #E4E8E5", borderRadius: 12, marginBottom: 40, textAlign: "center" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", marginBottom: 8 }}>Get started with {review.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 16 }}>Interested in trying {review.title}? We can help.</p>
                  <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "14px 32px", background: "#0F7A5A", color: "#fff", fontSize: 15, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}>
                    SHOP NOW <ExternalLink size={14} />
                  </Link>
                </div>
              )}

              {/* ── HOW WE REVIEWED ── */}
              <div style={{ marginBottom: 40 }}>
                <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>Last reviewed on {updatedDate}</p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 12 }}>How we reviewed this article:</h3>
                <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #E4E8E5" }}>
                  {review.references && review.references.length > 0 && (
                    <details style={{ flex: 1 }}>
                      <summary style={{ cursor: "pointer", padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)", listStyle: "none", borderBottom: "2px solid #0F7A5A", display: "inline-block" }}>
                        Sources ({review.references.length})
                      </summary>
                      <ol style={{ paddingLeft: 20, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                        {review.references.map((ref: { text: string; url?: string }, i: number) => (
                          <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                            {ref.text}
                            {ref.url && <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A" }}>↗</a></>}
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}
                </div>
                <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 12, lineHeight: 1.6 }}>
                  Fitlabreviews has strict sourcing guidelines and relies on peer-reviewed studies, academic research, and clinical evidence.{" "}
                  <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>Read our editorial policy →</Link>
                </p>
              </div>

              {/* ── Inline feedback (mobile) ── */}
              <div className="block lg:hidden" style={{ marginBottom: 40 }}>
                <ArticleFeedback slug={slug} />
              </div>

            </article>

            {/* ═══ RIGHT: Sticky Sidebar ═══ */}
            <div className="review-sidebar">

              {/* Sidebar product card */}
              <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, padding: "20px", backgroundColor: "#FAFBFA" }}>
                {heroImageUrl && <Image src={heroImageUrl} alt={review.title} width={260} height={160} style={{ width: "100%", height: "auto", borderRadius: 8, objectFit: "cover", marginBottom: 12 }} />}
                <p style={{ fontSize: 15, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", margin: "0 0 4px" }}>{review.title}</p>
                <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} style={{ color: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "#E4E8E5", fill: i < Math.round(rubric.editorialScore / 2) ? "#F59E0B" : "none" }} />
                  ))}
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#17211C", marginLeft: 4 }}>{rubric.editorialScore}/10</span>
                </div>
                {review.valueMetric?.pricePerServing > 0 && <p style={{ fontSize: 12, color: "#6B7770", margin: "0 0 12px" }}>${review.valueMetric.pricePerServing.toFixed(2)}/serving · {review.priceRange || review.category}</p>}
                {review.affiliateUrl && (
                  <Link href={review.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 16px", background: "#0F7A5A", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none", width: "100%" }}>
                    Check Price <ExternalLink size={12} />
                  </Link>
                )}
              </div>

              {/* Sidebar TOC */}
              <TableOfContents items={tocItems} />

              {/* Find the right supplements */}
              <div style={{ borderTop: "1px solid #E4E8E5", paddingTop: 20 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 12 }}>Find the right supplements</p>
                {[
                  { label: "Best Protein Powders", href: "/best/whey-protein" },
                  { label: "Best Pre-Workouts", href: "/best/pre-workout" },
                  { label: "Best Creatine", href: "/best/creatine" },
                  { label: "All Reviews", href: "/reviews" },
                ].map((lnk) => (
                  <Link key={lnk.label} href={lnk.href} style={{ display: "block", fontSize: 13, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-dm-sans)", textDecoration: "none", padding: "6px 0" }}>
                    {lnk.label}
                  </Link>
                ))}
              </div>

              {/* Was this helpful? */}
              <div style={{ borderTop: "1px solid #E4E8E5", paddingTop: 20 }}>
                <ArticleFeedback slug={slug} />
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            READ NEXT — full width
            ══════════════════════════════════════════════════════════════ */}
        {review.relatedReviews && review.relatedReviews.length > 0 && (
          <div style={{ borderTop: "1px solid #E9EDE9", padding: "48px 24px", backgroundColor: "#FAFBFA" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", marginBottom: 24 }}>Read next</h2>
              <div className="review-read-next">
                {/* Featured (first item) */}
                {(() => {
                  const feat = review.relatedReviews[0];
                  const featImg = feat.heroImage ? urlFor(feat.heroImage).width(600).height(400).url() : null;
                  return (
                    <Link href={`/reviews/${feat.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                      {featImg && <Image src={featImg} alt={feat.title} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: 8, objectFit: "cover", marginBottom: 16 }} />}
                      <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-dm-sans)", marginBottom: 4 }}>{feat.category}</p>
                      <p style={{ fontSize: 18, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 8, lineHeight: 1.3 }}>{feat.title}</p>
                      <p style={{ fontSize: 14, color: "#586259", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{feat.verdict}</p>
                    </Link>
                  );
                })()}
                {/* Smaller items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {review.relatedReviews.slice(1, 5).map((rel: any) => {
                    const relImg = rel.heroImage ? urlFor(rel.heroImage).width(120).height(80).url() : null;
                    return (
                      <Link key={rel.slug} href={`/reviews/${rel.slug}`} style={{ display: "flex", gap: 14, textDecoration: "none", color: "inherit" }}>
                        {relImg && <Image src={relImg} alt={rel.title} width={120} height={80} style={{ borderRadius: 6, objectFit: "cover", flexShrink: 0 }} />}
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 4, lineHeight: 1.3 }}>{rel.title}</p>
                          <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{rel.verdict}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile sticky CTA bar ── */}
      {review.affiliateUrl && (
        <StickyBuyBar
          productName={review.title}
          price={review.valueMetric?.pricePerServing > 0 ? `$${review.valueMetric.pricePerServing.toFixed(2)}/serving` : undefined}
          url={review.affiliateUrl}
        />
      )}
    </>
  );
}
