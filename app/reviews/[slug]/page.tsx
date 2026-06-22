import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import StickyBuyBar from "@/components/ui/StickyBuyBar";
import SourcesToggle from "@/components/ui/SourcesToggle";
import { computeComposite, PILLAR_META } from "@/lib/scoring";
import { getReviewBySlug, getAllReviewSlugs, urlFor } from "@/lib/sanity";
import type { ReviewRating, ScoringRubric, EvidenceLevel } from "@/lib/types";

export const revalidate = 3600;

// ── Design helpers (match Single Review Template exactly) ───────────────────
const scoreHex = (n: number) => (n >= 8 ? "#059669" : n >= 6 ? "#0E8784" : n >= 5 ? "#D97706" : "#EF4444");
const verdictWordFor = (n: number) => (n >= 9 ? "Outstanding" : n >= 8 ? "Excellent" : n >= 6 ? "Solid" : n >= 5 ? "Mixed" : "Skip");
const flagHex = (flag?: string, evi?: string) => {
  const f = flag || (evi === "strong" || evi === "moderate" ? "good" : evi === "limited" || evi === "emerging" ? "warn" : "bad");
  return f === "good" ? "#059669" : f === "warn" ? "#D97706" : "#EF4444";
};
const EVI: Record<string, { icon: string; label: string; color: string; bg: string }> = {
  strong: { icon: "●●●", label: "Evidence Based", color: "#059669", bg: "rgba(5,150,105,0.08)" },
  moderate: { icon: "●●○", label: "Moderate Evidence", color: "#0E8784", bg: "rgba(14,135,132,0.08)" },
  limited: { icon: "●○○", label: "Limited Evidence", color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  emerging: { icon: "◐○○", label: "Emerging Research", color: "#3B82F6", bg: "rgba(59,130,246,0.08)" },
  insufficient: { icon: "○○○", label: "Insufficient Data", color: "#6B7280", bg: "rgba(107,114,128,0.08)" },
};

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: "0 0 16px" }}>{children}</p>,
    h3: ({ children }) => <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: "26px 0 12px" }}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote style={{ margin: "24px 0", padding: "18px 22px", borderLeft: "3px solid #0F7A5A", background: "#F2F8F4", borderRadius: "0 10px 10px 0" }}>
        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.55, color: "#17211C", margin: 0 }}>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ color: "#17211c" }}>{children}</strong>,
    link: ({ children, value }) => <a href={value?.href} style={{ color: "#0F7A5A", textDecoration: "none" }}>{children}</a>,
  },
  list: { bullet: ({ children }) => <ul style={{ margin: "0 0 16px", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>{children}</ul> },
  listItem: { bullet: ({ children }) => <li style={{ fontSize: 15.5, lineHeight: 1.7, color: "#3F4B43" }}>{children}</li> },
};

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

  const heroImageUrl = review.heroImage ? urlFor(review.heroImage).width(680).height(760).url() : null;
  const publishedDate = review.publishedAt ? new Date(review.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "—";
  const updatedDate = review.updatedAt ? new Date(review.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase() : publishedDate;

  // Derived display values
  const score = rubric.editorialScore;
  const sColor = scoreHex(score);
  const verdictWord = verdictWordFor(score);
  const eviLevel: EvidenceLevel = (score >= 8 ? "strong" : score >= 6 ? "moderate" : score >= 5 ? "limited" : "emerging");
  const em = EVI[eviLevel];
  const fullStars = Math.round(score / 2);
  const monogram = (review.brand ?? "?").slice(0, 2).toUpperCase();
  const categorySlug = review.category?.toLowerCase().replace(/\s+/g, "-") ?? "";

  // quickStats — explicit field, else derived from productSpecs / valueMetric
  const quickStats: { label: string; value: string; note?: string }[] =
    review.quickStats?.length
      ? review.quickStats
      : [
          review.productSpecs?.protein && { label: "Protein", value: review.productSpecs.protein, note: "per serving" },
          review.productSpecs?.calories && { label: "Calories", value: review.productSpecs.calories, note: "per serving" },
          review.productSpecs?.servingSize && { label: "Serving", value: review.productSpecs.servingSize, note: "" },
          review.valueMetric?.pricePerServing > 0 && { label: "Cost", value: `$${review.valueMetric.pricePerServing.toFixed(2)}`, note: "per serving" },
        ].filter(Boolean).slice(0, 4) as { label: string; value: string; note?: string }[];

  // specs — explicit field, else derived
  const specs: { label: string; value: string }[] =
    review.specs?.length
      ? review.specs
      : ([
          ["Brand", review.brand],
          review.productSpecs?.servingSize && ["Serving size", review.productSpecs.servingSize],
          review.productSpecs?.protein && ["Protein per serving", review.productSpecs.protein],
          review.productSpecs?.calories && ["Calories per serving", review.productSpecs.calories],
          review.productSpecs?.servings && ["Servings per container", review.productSpecs.servings],
        ].filter(Boolean) as [string, string][]).map(([label, value]) => ({ label, value }));

  const pillarRows = rubric.pillars.map((p) => ({
    name: PILLAR_META[p.pillar].label,
    weight: `${Math.round(PILLAR_META[p.pillar].weight * 100)}%`,
    score: p.score,
    color: scoreHex(p.score),
    pct: `${Math.min(100, p.score * 10)}%`,
    note: p.notes,
  }));

  const alternatives = review.alternatives ?? [];
  const faqs = review.faqItems ?? [];
  const sources: { text: string; url?: string }[] = review.references ?? [];
  const history = review.reviewHistory?.length
    ? review.reviewHistory
    : [
        ...(review.updatedAt && review.updatedAt !== review.publishedAt ? [{ date: updatedDate, note: "Re-tested current batch and refreshed pricing." }] : []),
        ...(review.publishedAt ? [{ date: publishedDate, note: "Original review published." }] : []),
      ];

  // TOC — only sections we render
  const toc: { id: string; label: string }[] = [
    quickStats.length ? { id: "overview", label: "At a glance" } : null,
    pillarRows.length ? { id: "scorecard", label: "The scorecard" } : null,
    review.body?.length ? { id: "verdict", label: "What we found" } : null,
    review.ingredients?.length ? { id: "ingredients", label: "Ingredients & dosage" } : null,
    review.pros?.length || review.cons?.length ? { id: "pros-cons", label: "Pros & cons" } : null,
    specs.length ? { id: "specs", label: "Specs & nutrition" } : null,
    alternatives.length ? { id: "alternatives", label: "Best alternatives" } : null,
    faqs.length ? { id: "faq", label: "FAQ" } : null,
    review.verdict ? { id: "bottom-line", label: "The bottom line" } : null,
    sources.length ? { id: "sources", label: "How we reviewed" } : null,
  ].filter(Boolean) as { id: string; label: string }[];

  const buy = review.buyBox ?? {};
  const perServingNote = buy.perServingNote || (review.valueMetric?.pricePerServing > 0 ? `≈ $${review.valueMetric.pricePerServing.toFixed(2)} per serving` : "");

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
  const faqSchema = faqs.length >= 4 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f: { question: string; answer: string }) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  } : null;

  const sectionEyebrow = (num: string, label: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <span className="rv-jb" style={{ fontSize: 11, letterSpacing: ".12em", color: "#6B7770" }}>{num}</span>
      <span style={{ width: 24, height: 1, background: "#E4E8E5" }} />
      <span className="rv-jb" style={{ fontSize: 11, letterSpacing: ".12em", color: "#0F7A5A", fontWeight: 600 }}>{label}</span>
    </div>
  );
  const h2 = (plain: string, ital: string): React.CSSProperties => ({ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#17211C", letterSpacing: "-.025em", lineHeight: 1.08, margin: "0 0 22px" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div style={{ fontFamily: "var(--font-hanken), sans-serif", color: "#17211c", background: "#fff" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", background: "#F2F8F4" }}>
          <div className="rv-jb" style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8, fontSize: 12, flexWrap: "wrap" }}>
            <Link href="/" className="rv-breadcrumb-link">Home</Link>
            <span className="rv-breadcrumb-sep">/</span>
            <Link href="/reviews" className="rv-breadcrumb-link">Reviews</Link>
            <span className="rv-breadcrumb-sep">/</span>
            {review.category && <><Link href={`/category/${categorySlug}`} className="rv-breadcrumb-link">{review.category}</Link><span className="rv-breadcrumb-sep">/</span></>}
            <span style={{ color: "#3F4B43" }}>{review.title}</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ borderBottom: "1px solid #E4E8E5", background: "#fff" }}>
          <div className="review-hero" style={{ maxWidth: 1280, margin: "0 auto", padding: "44px 24px 48px", display: "flex", gap: 52, alignItems: "flex-start" }}>
            {/* product visual */}
            <div className="review-hero-visual" style={{ flex: "none", width: 340 }}>
              <div style={{ position: "relative", height: 380, borderRadius: 18, background: "linear-gradient(150deg,#0F2420 0%,#17211c 72%)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="rv-pf" style={{ position: "absolute", right: -26, bottom: -58, fontSize: 300, fontWeight: 900, color: "rgba(255,255,255,.05)", lineHeight: .7 }}>{monogram[0]}</span>
                <span className="rv-jb" style={{ position: "absolute", top: 16, left: 18, fontSize: 10, letterSpacing: ".16em", color: "rgba(255,255,255,.5)" }}>{review.reviewCode ? review.reviewCode : "FIG. 01"} · TESTED IN-HOUSE</span>
                {heroImageUrl ? (
                  <Image src={heroImageUrl} alt={review.title} fill style={{ objectFit: "contain", padding: 28, zIndex: 1 }} />
                ) : (
                  <div style={{ width: 150, height: 230, borderRadius: 12, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="rv-pf" style={{ fontWeight: 900, fontSize: 46, color: "#fff", letterSpacing: "-.03em", opacity: .92 }}>{monogram}</span>
                  </div>
                )}
              </div>
            </div>

            {/* hero meta */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                <span className="rv-jb" style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#0F7A5A", fontWeight: 600 }}>{review.category}</span>
                <span className="rv-dm" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 9px", background: em.bg, border: `1px solid ${em.color}33`, borderRadius: 8, fontWeight: 600, fontSize: 9, letterSpacing: ".10em", textTransform: "uppercase", color: em.color }}>
                  <span style={{ letterSpacing: 2, fontSize: 8 }}>{em.icon}</span>{em.label}
                </span>
              </div>

              <p className="rv-jb" style={{ fontSize: 12, letterSpacing: ".1em", color: "#6B7770", margin: "0 0 8px" }}>{review.brand?.toUpperCase()}</p>
              <h1 className="rv-nr" style={{ fontSize: "clamp(2.2rem,4.2vw,3.2rem)", fontWeight: 700, letterSpacing: "-.03em", color: "#17211C", lineHeight: 1.02, margin: 0 }}>
                {review.title} <em style={{ fontStyle: "italic", fontWeight: 500, color: "#586259" }}>Review</em>
              </h1>

              {review.verdict && <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3F4B43", margin: "16px 0 0", maxWidth: 560 }}>{review.verdict}</p>}

              {/* score + verdict row */}
              <div className="review-hero-scorerow" style={{ display: "flex", gap: 24, alignItems: "stretch", marginTop: 26 }}>
                <div style={{ flex: "none", width: 150, borderRadius: 14, background: `${sColor}14`, border: `1px solid ${sColor}33`, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  <span className="rv-jb" style={{ fontSize: 8, letterSpacing: ".14em", color: sColor, marginBottom: 2 }}>FSP SCORE</span>
                  <span className="rv-nr" style={{ fontSize: 52, fontWeight: 700, color: sColor, lineHeight: 1 }}>{score}<span style={{ fontSize: 22, fontWeight: 400, color: "#8A958D" }}>/10</span></span>
                  <span className="rv-dm" style={{ fontSize: 12, fontWeight: 700, color: sColor, marginTop: 4 }}>{verdictWord}</span>
                  <div style={{ display: "flex", gap: 2, marginTop: 6 }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill={i < fullStars ? "#C98A1E" : "#DCE2DD"}><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0, borderRadius: 14, border: "1px solid #E4E8E5", background: "#F8FAF8", padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p className="rv-mono-label-accent" style={{ fontSize: 10, letterSpacing: ".16em", margin: "0 0 8px" }}>Our verdict</p>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#2D3A31", margin: 0 }}>{review.keyTakeaways?.[0] ?? review.verdict ?? `Scored ${score}/10 against the Fitlab Scoring Protocol.`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE SHELL */}
        <div className="review-shell" style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 0", display: "flex", alignItems: "flex-start", gap: 40 }}>

          {/* MAIN */}
          <main style={{ flex: 1, minWidth: 0, maxWidth: 740 }}>

            {/* byline */}
            <div className="rv-dm" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", paddingBottom: 22, marginBottom: 32, borderBottom: "1px solid #E4E8E5", fontSize: 13, color: "#586259" }}>
              <span>Medically reviewed by <Link href={`/authors/${review.reviewer?.slug ?? "pankaj-singh"}`} className="rv-link">{review.reviewer?.name ?? "Pankaj Singh"}</Link></span>
              <span className="rv-breadcrumb-sep">·</span>
              <span>Written by <Link href={`/authors/${review.author?.slug ?? "fitlab-research-team"}`} className="rv-link">{review.author?.name ?? "Fitlab Research Team"}</Link></span>
              <span className="rv-breadcrumb-sep">·</span>
              <span className="rv-jb" style={{ fontSize: 11, letterSpacing: ".04em", color: "#6B7770" }}>UPDATED {updatedDate}</span>
            </div>

            {/* AT A GLANCE */}
            {quickStats.length > 0 && (
              <section id="overview" style={{ scrollMarginTop: 90, marginBottom: 44 }}>
                <div className="review-stat-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${quickStats.length}, 1fr)`, gap: 1, background: "#E4E8E5", border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                  {quickStats.map((s) => (
                    <div key={s.label} style={{ background: "#fff", padding: "18px 16px" }}>
                      <p className="rv-mono-label" style={{ fontSize: 9, margin: "0 0 8px" }}>{s.label}</p>
                      <p className="rv-nr" style={{ fontSize: 22, fontWeight: 700, color: "#17211C", margin: 0, lineHeight: 1, letterSpacing: "-.02em" }}>{s.value}</p>
                      {s.note && <p style={{ fontSize: 11, color: "#6B7770", margin: "6px 0 0" }}>{s.note}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ON THIS PAGE */}
            {toc.length > 0 && (
              <details open style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 40 }}>
                <summary className="review-otp-summary" style={{ background: "#F2F8F4", cursor: "pointer", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none" }}>
                  <span className="rv-dm" style={{ fontWeight: 700, fontSize: 15, color: "#17211C" }}>On this page</span>
                  <span className="review-otp-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400 }} />
                </summary>
                <div className="review-otp-grid" style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px" }}>
                  {toc.map((t, i) => (
                    <a key={t.id} href={`#${t.id}`} className="rv-dm" style={{ display: "flex", gap: 10, padding: "6px 0", fontSize: 13.5, color: "#3F4B43", textDecoration: "none" }}>
                      <span className="rv-jb" style={{ fontSize: 10, color: "#0F7A5A", minWidth: 16 }}>{String(i + 1).padStart(2, "0")}</span>{t.label}
                    </a>
                  ))}
                </div>
              </details>
            )}

            {/* SCORECARD */}
            {pillarRows.length > 0 && (
              <section id="scorecard" className="rv-section">
                {sectionEyebrow("§ 01", "THE SCORECARD")}
                <h2 className="rv-nr" style={h2("", "")}>How it scored <em className="rv-h2em">by pillar</em></h2>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#6B7770", margin: "-12px 0 24px" }}>Scored against the <strong style={{ color: "#3F4B43" }}>Fitlab Scoring Protocol</strong> — five weighted pillars totalling 100%.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {pillarRows.map((p) => (
                    <div key={p.name}>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 7 }}>
                        <span className="rv-dm" style={{ fontSize: 14.5, fontWeight: 700, color: "#17211C" }}>{p.name} <span className="rv-jb" style={{ fontSize: 10, fontWeight: 400, color: "#9AA39C", letterSpacing: ".04em" }}>· {p.weight} weight</span></span>
                        <span className="rv-nr" style={{ fontSize: 16, fontWeight: 700, color: p.color }}>{p.score}<span style={{ fontSize: 11, fontWeight: 400, color: "#9AA39C" }}>/10</span></span>
                      </div>
                      <div style={{ height: 8, borderRadius: 99, background: "#EEF1EF", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: p.pct, background: p.color, borderRadius: 99 }} />
                      </div>
                      <p style={{ fontSize: 13, lineHeight: 1.55, color: "#586259", margin: "8px 0 0" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VERDICT / DEEP DIVE */}
            {review.body?.length > 0 && (
              <section id="verdict" className="rv-section">
                {sectionEyebrow("§ 02", "FULL REVIEW")}
                <h2 className="rv-nr" style={h2("", "")}>What we <em className="rv-h2em">found</em></h2>
                <PortableText value={review.body} components={ptComponents} />
              </section>
            )}

            {/* INGREDIENT ANALYSIS */}
            {review.ingredients?.length > 0 && (
              <section id="ingredients" className="rv-section">
                {sectionEyebrow("§ 03", "WHAT'S INSIDE")}
                <h2 className="rv-nr" style={h2("", "")}>Ingredient &amp; dosage <em className="rv-h2em">analysis</em></h2>
                <div style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                  <div className="review-ing-head" style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 1.4fr", background: "#0F7A5A" }}>
                    {["Ingredient", "Per serving", "Our take"].map((h) => (
                      <span key={h} className="rv-jb" style={{ padding: "12px 18px", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", fontWeight: 600 }}>{h}</span>
                    ))}
                  </div>
                  {review.ingredients.map((ing: { name: string; dosage?: string; notes?: string; purpose?: string; take?: string; flag?: string; evidenceLevel?: string }, i: number) => (
                    <div key={i} className="review-ing-row" style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 1.4fr", borderBottom: "1px solid #EEF1EF", background: i % 2 === 1 ? "#F8FAF8" : "#fff", alignItems: "center" }}>
                      <span style={{ padding: "14px 18px", fontSize: 14, fontWeight: 600, color: "#17211C" }}>{ing.name}</span>
                      <span className="rv-jb" style={{ padding: "14px 18px", fontSize: 13, fontWeight: 700, color: "#0F7A5A" }}>{ing.dosage ?? "—"}</span>
                      <span className="review-ing-take" style={{ padding: "14px 18px", fontSize: 13, lineHeight: 1.5, color: "#3F4B43" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: flagHex(ing.flag, ing.evidenceLevel), flexShrink: 0 }} />
                          {ing.take ?? ing.notes ?? ing.purpose ?? "—"}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROS & CONS */}
            {(review.pros?.length > 0 || review.cons?.length > 0) && (
              <section id="pros-cons" className="rv-section">
                <h2 className="rv-nr" style={h2("", "")}>Pros &amp; <em className="rv-h2em">cons</em></h2>
                <div className="review-proscons" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  <div style={{ background: "rgba(15,122,90,.05)", border: "1px solid rgba(15,122,90,.15)", borderRadius: 14, padding: 22 }}>
                    <p className="rv-jb" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 16px" }}>What we liked</p>
                    <ul className="rv-list-col">
                      {(review.pros ?? []).map((pro: string, i: number) => (
                        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ flexShrink: 0, marginTop: 1, color: "#0F7A5A" }}><svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                          <span style={{ fontSize: 14, lineHeight: 1.5, color: "#2D2926" }}>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: "rgba(217,119,6,.05)", border: "1px solid rgba(217,119,6,.18)", borderRadius: 14, padding: 22 }}>
                    <p className="rv-jb" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#B7791F", margin: "0 0 16px" }}>Worth noting</p>
                    <ul className="rv-list-col">
                      {(review.cons ?? []).map((con: string, i: number) => (
                        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ flexShrink: 0, marginTop: 1, color: "#B7791F" }}><svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round"><path d="M5 12h14" /></svg></span>
                          <span style={{ fontSize: 14, lineHeight: 1.5, color: "#2D2926" }}>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* SPECS */}
            {specs.length > 0 && (
              <section id="specs" className="rv-section">
                <h2 className="rv-nr" style={h2("", "")}>Specs &amp; <em className="rv-h2em">nutrition</em></h2>
                <div style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                  {specs.map((sp, i) => (
                    <div key={i} className="rv-spec-row" style={{ borderBottom: "1px solid #F3F6F4" }}>
                      <span className="rv-jb" style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#6B7770" }}>{sp.label}</span>
                      <span style={{ fontSize: 14, color: "#17211C", fontWeight: 500, textAlign: "right" }}>{sp.value}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BEST ALTERNATIVES */}
            {alternatives.length > 0 && (
              <section id="alternatives" className="rv-section">
                {sectionEyebrow("§ 04", "IF IT'S NOT FOR YOU")}
                <h2 className="rv-nr" style={h2("", "")}>Best <em className="rv-h2em">alternatives</em></h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {alternatives.map((a: { brand: string; name: string; slug?: string; rating: number; price?: string; priceNote?: string; angle?: string; why?: string; affiliateUrl?: string; imageUrl?: string }, i: number) => {
                    const aColor = scoreHex(a.rating);
                    const tints = ["#E7F2EC", "#E8EEF5", "#FBF0DD", "#EFEAF6"];
                    return (
                      <article key={i} className="rv-alt-card">
                        <div className="rv-alt-thumb" style={{ background: tints[i % tints.length] }}>
                          {a.imageUrl ? (
                            <img src={a.imageUrl} alt={`${a.brand} ${a.name}`} width={88} height={88} style={{ width: 88, height: 88, objectFit: "contain" }} />
                          ) : (
                          <div style={{ width: 44, height: 64, borderRadius: 6, background: "#fff", boxShadow: "0 5px 14px rgba(16,30,22,.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span className="rv-pf" style={{ fontWeight: 900, fontSize: 15, color: "#17211C", letterSpacing: "-.02em" }}>{(a.brand ?? "?").slice(0, 2).toUpperCase()}</span>
                          </div>
                          )}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
                            <div>
                              <p className="rv-jb" style={{ fontSize: 10, letterSpacing: ".1em", color: "#6B7770", margin: "0 0 3px" }}>{a.brand}</p>
                              <h3 className="rv-nr" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: 0, lineHeight: 1.15 }}>{a.name}</h3>
                            </div>
                            <span className="rv-nr" style={{ fontSize: 20, fontWeight: 700, color: aColor, lineHeight: 1, flexShrink: 0 }}>{a.rating}<span style={{ fontSize: 11, fontWeight: 400, color: "#9AA39C" }}>/10</span></span>
                          </div>
                          {a.angle && <p className="rv-dm" style={{ fontSize: 13, fontWeight: 700, color: "#0F7A5A", margin: "12px 0 5px" }}>{a.angle}</p>}
                          {a.why && <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3F4B43", margin: 0 }}>{a.why}</p>}
                          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
                            {a.price && <span className="rv-jb" style={{ fontWeight: 700, fontSize: 13, color: "#0F7A5A" }}>{a.price} {a.priceNote && <span style={{ fontWeight: 400, color: "#9AA39C" }}>· {a.priceNote}</span>}</span>}
                            {a.slug && <Link href={`/reviews/${a.slug}`} className="rv-dm" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "#17211c", textDecoration: "none" }}>Read review <span className="nudge">→</span></Link>}
                            {a.affiliateUrl && <a href={a.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="rv-dm" style={{ fontSize: 13, fontWeight: 700, color: "#0F7A5A", textDecoration: "none" }}>Check price →</a>}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQ */}
            {faqs.length > 0 && (
              <section id="faq" className="rv-section">
                {sectionEyebrow("§ 05", "FAQ")}
                <h2 className="rv-nr" style={h2("", "")}>Common <em className="rv-h2em">questions</em></h2>
                <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                  {faqs.map((f: { question: string; answer: string }, i: number) => (
                    <details key={i} className="review-faq" style={{ borderBottom: i < faqs.length - 1 ? "1px solid #EEF1EF" : "none", background: i % 2 === 1 ? "#F8FAF8" : "#fff" }}>
                      <summary style={{ cursor: "pointer", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, listStyle: "none" }}>
                        <span className="rv-dm" style={{ fontWeight: 700, fontSize: 14.5, color: "#17211C", lineHeight: 1.4 }}>{f.question}</span>
                        <span className="review-faq-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400, flexShrink: 0 }} />
                      </summary>
                      <p style={{ fontSize: 14, lineHeight: 1.75, color: "#3F4B43", margin: 0, padding: "0 20px 20px" }}>{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* BOTTOM LINE */}
            {review.verdict && (
              <section id="bottom-line" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
                <h2 style={{ ...h2("", ""), margin: "0 0 16px" }}>The bottom line</h2>
                <div className="review-bottomline" style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: 24, border: "1px solid #DCEAE0", background: "#EFF6F0", borderRadius: 14 }}>
                  <div style={{ flexShrink: 0, width: 72, height: 72, borderRadius: 12, background: sColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                    <span className="rv-nr" style={{ fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{score}</span>
                    <span className="rv-jb" style={{ fontSize: 6.5, letterSpacing: ".1em", color: "rgba(255,255,255,.85)" }}>OUT OF 10</span>
                  </div>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#2D3A31", margin: 0 }}>{review.verdict}</p>
                </div>
              </section>
            )}

            {/* SOURCES / HISTORY + SHARE */}
            <section id="sources" style={{ borderTop: "1px solid #E4E8E5", paddingTop: 28, marginBottom: 8, scrollMarginTop: 90 }}>
              <p className="rv-jb" style={{ fontSize: 11, letterSpacing: ".06em", color: "#9AA39C", margin: "0 0 18px" }}>LAST REVIEWED ON {updatedDate}</p>
              <h3 className="rv-nr" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: "0 0 14px" }}>How we reviewed this product</h3>
              {(sources.length > 0 || history.length > 0) && <SourcesToggle sources={sources} history={history} />}
              <p style={{ fontSize: 12, color: "#9AA39C", marginTop: 18, lineHeight: 1.6 }}>
                Fitlabreviews has strict sourcing guidelines and relies on peer-reviewed studies, academic research, and clinical evidence.{" "}
                <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>Read our editorial policy →</Link>
              </p>
            </section>

          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="review-sidebar" style={{ flex: "none", width: 300 }}>
            <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 24 }}>
              {review.affiliateUrl && (
                <div style={{ border: "1px solid #E4E8E5", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 10px rgba(16,30,22,.05)" }}>
                  <div style={{ background: "#0F7A5A", padding: "10px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="rv-jb" style={{ fontSize: 10, letterSpacing: ".14em", color: "#fff", fontWeight: 600 }}>EDITOR&apos;S CHOICE</span>
                    <span className="rv-dm" style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{score}/10</span>
                  </div>
                  <div style={{ padding: 22 }}>
                    <p className="rv-jb" style={{ fontSize: 11, letterSpacing: ".1em", color: "#6B7770", margin: 0 }}>{(buy.retailerName ?? review.brand)?.toUpperCase()}</p>
                    <h3 className="rv-nr" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: "5px 0 12px" }}>{review.title}</h3>
                    {buy.priceDisplay && (
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                        <span className="rv-nr" style={{ fontSize: 32, fontWeight: 700, color: "#17211C", letterSpacing: "-.02em" }}>{buy.priceDisplay}</span>
                        {buy.priceUnit && <span style={{ fontSize: 13, color: "#6B7770" }}>{buy.priceUnit}</span>}
                      </div>
                    )}
                    {perServingNote && <p style={{ fontSize: 12.5, color: "#6B7770", margin: "0 0 18px" }}>{perServingNote}</p>}
                    <a href={review.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" className="buybtn rv-dm" style={{ display: "block", textAlign: "center", background: "#0F7A5A", color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: ".02em", padding: 14, borderRadius: 10, textDecoration: "none" }}>Check price{buy.retailerName ? ` at ${buy.retailerName}` : ""}</a>
                    {buy.secondaryUrl && <a href={buy.secondaryUrl} target="_blank" rel="nofollow noopener noreferrer" className="rv-dm" style={{ display: "block", textAlign: "center", marginTop: 10, fontSize: 13, fontWeight: 600, color: "#0F7A5A", textDecoration: "none" }}>See it on Amazon →</a>}
                    <p className="rv-jb" style={{ fontSize: 9, letterSpacing: ".06em", color: "#9AA39C", margin: "14px 0 0", textAlign: "center" }}>AFFILIATE LINK · WE MAY EARN A COMMISSION</p>
                  </div>
                </div>
              )}

              {/* newsletter */}
              <div style={{ background: "#E7F2EC", borderRadius: 14, padding: 24 }}>
                <p className="rv-mono-label-accent" style={{ margin: "0 0 10px" }}>Fitlabreviews newsletter</p>
                <h3 className="rv-nr" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: "0 0 10px", lineHeight: 1.2 }}>Get the Research Dispatch</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 18px" }}>Evidence-led supplement reviews in your inbox. No hype, no sponsors.</p>
                <Link href="/#newsletter" className="rv-dm" style={{ display: "block", textAlign: "center", background: "#0F7A5A", color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: ".04em", padding: 13, borderRadius: 8, textDecoration: "none" }}>JOIN NOW</Link>
              </div>
            </div>
          </aside>
        </div>

        {/* READ NEXT */}
        {review.relatedReviews?.length > 0 && (
          <section style={{ borderTop: "1px solid #E4E8E5", background: "#FBFCFB", marginTop: 56 }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <h2 className="rv-nr" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-.02em", margin: 0 }}>Read next</h2>
                <span style={{ flex: 1, height: 1, background: "#E4E8E5" }} />
                <Link href="/reviews" className="jl rv-dm" style={{ fontSize: 13, fontWeight: 700, color: "#0F7A5A", textDecoration: "none" }}>All reviews →</Link>
              </div>
              <div className="review-readnext" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                {review.relatedReviews.slice(0, 4).map((r: { slug: string; title: string; brand: string; editorialScore?: number; verdict?: string }) => (
                  <Link key={r.slug} href={`/reviews/${r.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <div style={{ position: "relative", height: 150, borderRadius: 14, overflow: "hidden", background: "linear-gradient(150deg,#143a30,#0f2a23)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="rv-pf" style={{ position: "absolute", right: -14, bottom: -34, fontSize: 150, fontWeight: 900, color: "rgba(255,255,255,.06)", lineHeight: .7 }}>{r.title?.[0]}</span>
                      <span className="rv-pf" style={{ fontWeight: 900, fontSize: 30, color: "rgba(255,255,255,.9)" }}>{(r.brand ?? "?").slice(0, 2).toUpperCase()}</span>
                    </div>
                    <h3 className="rv-nr" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#17211C", letterSpacing: "-.01em", lineHeight: 1.2, margin: "14px 0 6px" }}>{r.title}</h3>
                    {r.verdict && <p style={{ fontSize: 13, lineHeight: 1.55, color: "#586259", margin: 0 }}>{r.verdict}</p>}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* STICKY BUY BAR */}
      {review.affiliateUrl && (
        <StickyBuyBar
          productName={review.title}
          brand={review.brand}
          rating={rubric.editorialScore}
          price={buy.priceDisplay ?? (review.valueMetric?.pricePerServing > 0 ? `$${review.valueMetric.pricePerServing.toFixed(2)}/serving` : undefined)}
          url={review.affiliateUrl}
        />
      )}
    </>
  );
}
