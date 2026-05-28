import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, AlertTriangle, CheckCircle, ShieldCheck, Star } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import MobileTOC from "@/components/ui/MobileTOC";
import ReviewCard from "@/components/ui/ReviewCard";
import ProductCard from "@/components/ui/ProductCard";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Heart & Soil Beef Organs Review (2026): Worth $55?",
  description:
    "Heart & Soil Beef Organs review: Informed Sport certified, Dr. Paul Saladino formulation, US regenerative sourcing, 5-organ blend, $1.83/serving. FSP 9/10.",
  alternates: { canonical: "/reviews/heart-and-soil-beef-organs" },
  openGraph: {
    title: "Heart & Soil Beef Organs Review (2026): Worth $55?",
    description:
      "The only Informed Sport certified beef organ supplement — is Dr. Saladino's multi-organ blend worth the premium price? Our full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is Heart & Soil?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "nutrients", label: "Key Nutrients" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Vitamin A" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.0,
      notes:
        "Five-organ blend: beef liver, heart, kidney, spleen, and pancreas. Each organ contributes distinct nutrients — liver (retinol, B12, heme iron), heart (CoQ10), kidney (selenium, B2), spleen (heme iron, zinc), pancreas (enzymes, B vitamins). The nose-to-tail approach is the most nutritionally complete in this category. Minor deduction: individual organ doses are not disclosed — it is a proprietary blend. You cannot know the exact retinol contribution from liver alone, which matters for safety calculations.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "Heart & Soil publish their farming partners on the website and COA data is available. Dr. Saladino is publicly known and regularly discusses formulation decisions on his podcast. The main transparency gap is the proprietary blend — doses per organ are undisclosed. This is the most significant weakness given that retinol toxicity is a real concern and consumers cannot calculate their exact intake without knowing the liver-to-total-organ ratio.",
    },
    {
      pillar: "verification",
      score: 9.5,
      notes:
        "Informed Sport certified — every batch is tested for over 200 WADA-prohibited substances. This is the gold standard for supplement purity verification and is the highest verification level available for this product category. Heavy metal COA is also available. No other beef organ supplement in this roundup holds this certification. For competitive athletes, this is decisive.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "At $55/bottle (30 servings), this is $1.83/serving — the most expensive in the category. The Informed Sport premium is real and justified for athletes; for everyone else, the additional $0.33/serving over Ancestral Supplements is harder to justify. The 5-organ blend does provide broader nutrition, but without disclosed dosing, you cannot compare organ-for-organ efficiency. For non-athletes who do not need Informed Sport testing, Ancestral Supplements at $1.50/serving is the better value.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Six capsules per serving — same as Ancestral Supplements. Freeze-dried, room-temperature stable, travel-friendly. No taste or smell. The multi-organ approach means you are covering more nutritional bases in the same 6 capsules rather than concentrating on liver alone. Dr. Saladino's recommended protocol (6 caps with the largest meal) is clear and well-reasoned.",
    },
  ],
  flags: [
    { type: "green", label: "Informed Sport certified", detail: "Every batch tested for 200+ WADA-prohibited substances. The only beef organ supplement with this certification." },
    { type: "green", label: "5-organ nose-to-tail formula", detail: "Liver, heart, kidney, spleen, and pancreas — the most comprehensive organ blend in this roundup." },
    { type: "green", label: "US regenerative farm sourcing", detail: "Sources from named regenerative US farms. Regenerative = beyond organic — soil health, carbon farming, and strict animal welfare." },
    { type: "green", label: "Heavy metal COA available", detail: "Third-party tested for lead, cadmium, arsenic, and mercury. Published on request." },
    { type: "green", label: "Dr. Paul Saladino formulation", detail: "Formulated by a physician (MD) with deep clinical expertise in carnivore nutrition and ancestral health." },
    { type: "red", label: "Proprietary blend — doses undisclosed", detail: "Cannot determine individual organ contribution per serving. Retinol calculation from liver alone is impossible without this data.", deduction: 0.5 },
    { type: "red", label: "Most expensive in category", detail: "$1.83/serving vs $1.50 for Ancestral Supplements. Premium is justified for athletes; less so for general use.", deduction: 0.2 },
  ],
  claimAudit: [
    { claim: "\"The most nutrient-dense beef organ supplement available\"", verdict: "overstated", evidence: "moderate", notes: "Depends on the metric. For nutrient breadth, the 5-organ formula is the most comprehensive in this review. For individual organ concentration (e.g., retinol from liver), single-organ products at higher doses may deliver more per gram. 'Most nutrient-dense' is directionally credible but unverifiable without organ dosing disclosure." },
    { claim: "\"Sourced from US regenerative farms\"", verdict: "supported", evidence: "strong", notes: "Farm partners are named on the website and include verifiably regenerative operations. Regenerative certification exists via multiple bodies. Claim is specific and verifiable." },
    { claim: "\"Informed Sport certified\"", verdict: "supported", evidence: "strong", notes: "Informed Sport certification is public and batch-verifiable at informed-sport.com. Every product bearing this logo has been independently tested. Claim is fully verifiable." },
    { claim: "\"Contains natural CoQ10 from grass-fed beef heart\"", verdict: "supported", evidence: "strong", notes: "Beef heart is the richest dietary source of CoQ10. Fresh heart contains 113mg CoQ10/100g; dried concentrate will vary by freeze-drying ratio but the claim is scientifically accurate." },
    { claim: "\"Supports hormone balance\"", verdict: "unsupported", evidence: "limited", notes: "No clinical evidence that beef organ supplements improve hormonal parameters in humans. The claim likely derives from the micronutrient content (zinc, vitamin A cofactors for steroidogenesis) — but the mechanism-to-clinical-outcome gap is significant." },
  ],
  valueMetric: {
    pricePerServing: 1.83,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.61,
    categoryAvgPricePerGram: 0.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs#review",
  name: "Heart & Soil Beef Organs — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Heart & Soil Beef Organs using the Fitlab Scoring Protocol. Analysis covers the 5-organ formula, Informed Sport certification, US regenerative sourcing, Dr. Saladino's formulation rationale, proprietary blend transparency issues, and value at $55/bottle.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Heart & Soil Beef Organs",
    brand: { "@type": "Brand", name: "Heart & Soil" },
    category: "Organ Supplement",
    description: "5-organ freeze-dried blend (liver, heart, kidney, spleen, pancreas) from US regenerative farms. Informed Sport certified.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "55.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.heartandsoil.co",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Heart & Soil safe for athletes?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Heart & Soil is the only beef organ supplement with Informed Sport certification, meaning every batch is tested for WADA-prohibited substances. For competitive athletes in tested sports, this is the only beef organ supplement we can recommend with confidence." },
    },
    {
      "@type": "Question",
      name: "Is the proprietary blend a problem?",
      acceptedAnswer: { "@type": "Answer", text: "It is a concern specifically around vitamin A (retinol) safety. Without knowing the exact liver-to-organ ratio, you cannot calculate your precise retinol intake. In practice, a 5-organ blend will contain significantly less liver per capsule than a single-organ liver product — so retinol intake is likely lower. But for pregnant women or those tracking retinol closely, the lack of disclosure is a real limitation." },
    },
    {
      "@type": "Question",
      name: "How does Heart & Soil compare to Ancestral Supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Heart & Soil wins on: Informed Sport certification, organ variety (5 vs 1), US regenerative sourcing. Ancestral Supplements wins on: sourcing transparency (batch COA by lot number), price ($1.50 vs $1.83/serving), and individual organ dose disclosure. Athletes should choose Heart & Soil. Sourcing-focused buyers on a budget should choose Ancestral." },
    },
    {
      "@type": "Question",
      name: "What is regenerative farming?",
      acceptedAnswer: { "@type": "Answer", text: "Regenerative agriculture goes beyond organic certification. It focuses on rebuilding soil health through managed grazing, cover cropping, and carbon sequestration. For organ supplements, this typically means cattle have year-round pasture access, no antibiotics, no hormones, and the farming system actively improves land health rather than depleting it." },
    },
    {
      "@type": "Question",
      name: "Can women take Heart & Soil Beef Organs?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, with the same caveats as all organ supplements: pregnant women should consult their OB/GYN due to retinol content. For non-pregnant women, the heme iron, B12, folate, and zinc in a multi-organ blend are particularly well-suited to female nutritional needs. Heart & Soil also makes female-specific formulas that include reproductive organ tissue." },
    },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "ancestral-supplements-beef-liver", title: "Ancestral Supplements Beef Liver", brand: "Ancestral Supplements", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "Best freeze-dried NZ liver. Zero fillers, COA on request, justified premium for those who won't eat real liver.", publishedAt: "2026-05-27", figNumber: "44" },
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "NZ-sourced 5-organ blend at $0.39/serving — the best value pick for quality-conscious budget buyers.", publishedAt: "2026-05-27", figNumber: "47" },
];

export default function HeartAndSoilReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Organ Supplements", href: "/category/organ-supplements" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Heart &amp; Soil Beef Organs</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-046 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Heart &amp; Soil<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Organs</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={`e${i}`} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-046</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A", whiteSpace: "nowrap" }}>Full Review · FSP Scored · US Regenerative 5-Organ</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Heart &amp; Soil · Organ Supplement · 5-Organ Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Organs — Best for Athletes<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Is the Informed Sport Premium Worth It in 2026?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Five organs, US regenerative sourcing, Informed Sport certified. Dr. Saladino's nose-to-tail formula is the most comprehensive in the category — but the proprietary blend and premium price raise real questions.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://www.heartandsoil.co"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Check Price <ExternalLink size={13} />
                </a>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {rubric.compositeScore.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* ── Metadata strip ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category", value: "Organ Supplement" },
            { label: "Form", value: "Capsules (180 ct)" },
            { label: "Serving", value: "6 caps / 3,000mg" },
            { label: "Source", value: "US Regenerative" },
            { label: "Published", value: "May 27, 2026" },
            { label: "Last Updated", value: "May 27, 2026" },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written &amp; Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Organ supplement research · Informed Sport certification analysis · Regenerative agriculture sourcing review
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Research Review</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate notice ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links above may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#7B3B1A", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main content */}
            <article style={{ minWidth: 0 }}>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-046</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Heart &amp; Soil is the best beef organ supplement for athletes and the most comprehensive nose-to-tail formula on the market. The Informed Sport certification is decisive for drug-tested competitors — no other organ supplement offers this.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The main weakness is the proprietary blend: without disclosed organ doses, you cannot calculate exact retinol intake, which matters for safety. For non-athletes, Ancestral Supplements offers comparable sourcing quality at a lower price. For everyone who wants the broadest organ nutrition with third-party verification, Heart &amp; Soil is the clear choice.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ backgroundColor: "rgba(242,235,217,0.04)", border: "1px solid rgba(212,201,184,0.12)", borderRadius: 8, padding: "12px 14px" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(212,201,184,0.4)", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: p.score >= 8.5 ? "#2D6A4F" : p.score >= 7 ? "#A89880" : "#8B3A2C", lineHeight: 1 }}>{p.score.toFixed(1)}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHAT IS ────────────────────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Heart &amp; Soil Beef Organs?</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Heart &amp; Soil was founded by Dr. Paul Saladino — a physician best known for advocating the carnivore diet and the nutritional density of nose-to-tail eating. The Beef Organs product is the brand's flagship: a five-organ freeze-dried blend designed to deliver the complete nutritional spectrum of ancestral organ consumption in capsule form.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The formula includes beef liver, beef heart, beef kidney, beef spleen, and beef pancreas. Each organ contributes nutrients the others lack: liver provides retinol, B12, and heme iron; heart is the primary dietary source of CoQ10; kidney adds selenium and riboflavin; spleen contributes tuftsin and additional heme iron; pancreas provides enzyme precursors and B vitamins.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The Informed Sport certification distinguishes Heart &amp; Soil from every other organ supplement in this category. Every batch is independently tested for over 200 WADA-prohibited substances. For drug-tested athletes, this is the only verifiably safe option.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #7B3B1A" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B3B1A", marginBottom: 8 }}>Regenerative vs Organic vs Grass-Fed</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Heart &amp; Soil&apos;s US regenerative sourcing goes beyond USDA Organic. Regenerative agriculture requires active soil health improvement through managed grazing, reduced tillage, and carbon sequestration. Farm partners are named on the brand&apos;s website — this level of supply chain transparency is rare in the organ supplement category.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-046" />
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                  FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                  Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                </p>
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red &amp; Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Supplement Facts</h2>

                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>Supplement Facts</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#A89880" }}>Serving size: 6 capsules · Servings per container: 30</p>
                    </div>
                  </div>

                  <div style={{ padding: "0 20px", backgroundColor: "#F8F2E4" }}>
                    <div style={{ padding: "12px 0", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>Beef Organ Blend (Freeze-Dried)</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace" }}>3,000mg</span>
                    </div>
                    {[
                      ["Organs included", "Liver, Heart, Kidney, Spleen, Pancreas"],
                      ["Source", "United States"],
                      ["Farm model", "Regenerative (named farms)"],
                      ["Certification", "Informed Sport (every batch)"],
                      ["Processing", "Freeze-Dried"],
                    ].map(([label, value], i) => (
                      <div key={label} style={{ padding: "8px 0", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{label}</span>
                        <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6 }}>
                      <strong style={{ color: "#5C5650" }}>Proprietary blend note:</strong> Individual organ weights are not disclosed. A 3,000mg blend distributed across five organs means significantly less liver per serving than a single-organ liver product — which reduces retinol load, but prevents precise vitamin A calculation.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients per Serving</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Approximate values per 6-capsule serving based on known nutrient density of these organs. Lower retinol estimates reflect dilution across 5 organs vs a single-organ liver product.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Retinol (Vit A)", amount: "~500–2,000 IU", dv: "~5–20% DV", evidence: "strong" as EvidenceLevel, note: "Liver is the primary source. Diluted across 5 organs — significantly less than a single-organ liver product. This is a safety advantage for those monitoring retinol intake." },
                    { nutrient: "Vitamin B12", amount: "~8–15 µg", dv: "~300–600% DV", evidence: "strong" as EvidenceLevel, note: "Liver and kidney are the two richest B12 sources. Both are in this blend — B12 delivery is excellent." },
                    { nutrient: "Heme Iron", amount: "~1–2 mg", dv: "~6–11% DV", evidence: "strong" as EvidenceLevel, note: "Liver and spleen together provide two distinct heme iron sources. Spleen has the highest iron density of any organ tissue (~42mg/100g)." },
                    { nutrient: "CoQ10", amount: "~5–15 mg", dv: "No DV set", evidence: "strong" as EvidenceLevel, note: "Beef heart is the richest dietary CoQ10 source (113mg/100g fresh heart). Absent from single-organ liver products — this is a key differentiator of the multi-organ approach." },
                    { nutrient: "Selenium", amount: "~15–30 µg", dv: "~25–55% DV", evidence: "strong" as EvidenceLevel, note: "Beef kidney is the primary selenium source. Relevant for thyroid function and antioxidant defense." },
                    { nutrient: "Zinc", amount: "~1–2 mg", dv: "~9–18% DV", evidence: "moderate" as EvidenceLevel, note: "Spleen is a meaningful zinc source. Zinc is a cofactor for immune function and testosterone synthesis." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>{row.nutrient}</p>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#7B3B1A", fontWeight: 600 }}>{row.amount}</p>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{row.dv}</p>
                        <div style={{ marginTop: 6 }}>
                          <EvidenceBadge level={row.evidence} showIcon={false} />
                        </div>
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{row.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: "#8A8480", marginTop: 8 }}>Values are estimates from published organ nutrient density data. Actual values vary by batch, season, and animal. Exact organ-to-organ ratios are not disclosed (proprietary blend).</p>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Data &amp; Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Heart &amp; Soil holds the highest verification standard available for organ supplements — Informed Sport certification. Every batch is independently tested before release.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Informed Sport", status: "Certified", result: "Every batch — 200+ WADA substances", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Lead (Pb)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Cadmium (Cd)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Arsenic (As)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Mercury (Hg)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Organ dose disclosure", status: "Undisclosed", result: "Proprietary blend", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                  ].map((cert) => (
                    <div key={cert.test} style={{ padding: "16px", border: `1px solid ${cert.color}33`, borderRadius: 10, backgroundColor: cert.bg }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: cert.bg, border: `1px solid ${cert.color}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: cert.color, fontFamily: "var(--font-dm-mono), monospace" }}>{cert.icon}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{cert.test}</span>
                      </div>
                      <p style={{ fontSize: 11, color: cert.color, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 700 }}>{cert.status}</p>
                      <p style={{ fontSize: 11, color: "#5C5650" }}>{cert.result}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF" }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>Verify certification:</strong> Go to <em>informed-sport.com/certified-products</em> and search for Heart &amp; Soil to confirm current batch certification status. Informed Sport publishes a searchable database of all certified products.
                  </p>
                </div>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Marketing Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── HOW TO TAKE IT ─────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { q: "Standard dose", a: "6 capsules daily with your largest meal. Dr. Saladino recommends taking with food to support digestion of the fat-soluble vitamins (A, D, K2) present in organ tissue." },
                    { q: "Starting out", a: "Start with 3 capsules for the first 1–2 weeks if you are new to organ supplements. Some people experience mild digestive adjustment — this usually resolves in 5–7 days." },
                    { q: "Timing", a: "With food, always. Fat-soluble vitamins require dietary fat for absorption. Any fat-containing meal works." },
                    { q: "Do not exceed", a: "6 caps without medical guidance. At 6 caps, retinol intake from the liver fraction is likely well below the 10,000 IU/day UL. At 12 caps (sometimes suggested in ancestral health circles), this needs monitoring." },
                    { q: "Consistent daily use", a: "More important than timing. Organ nutrition builds gradually — consistent daily use maintains circulating nutrient levels better than sporadic high-dose days." },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Heart &amp; Soil is the premium tier in this roundup. Key differentiators are Informed Sport certification, US regenerative sourcing, and the 5-organ formula.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Heart & Soil", "Ancestral Supps", "Left Coast Perf.", "Perfect Supps"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["9/10 ★", "8/10", "8/10", "8/10"] },
                        { metric: "Organs", vals: ["5 (full blend)", "1 (liver)", "5 (full blend)", "1 (liver)"] },
                        { metric: "Sourcing", vals: ["US Regenerative", "NZ Grass-Fed", "NZ Grass-Fed", "Brazil Organic"] },
                        { metric: "Certification", vals: ["Informed Sport", "Heavy metal COA", "None", "USDA Organic"] },
                        { metric: "Price / serving", vals: ["$1.83", "$1.50", "$0.39", "$0.33"] },
                        { metric: "Dose disclosure", vals: ["Proprietary blend", "Single ingredient", "Proprietary blend", "Single ingredient"] },
                        { metric: "Athletes safe", vals: ["Yes (verified)", "No cert", "No cert", "No cert"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#7B3B1A" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026. Heart &amp; Soil sold direct at heartandsoil.co — check site for current pricing and bundles.</p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Top organ supplements compared — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Organs"
                    brand="Heart & Soil"
                    category="Organ Supplement"
                    score={9}
                    priceUSD="$55 / 180 caps"
                    priceINR="N/A"
                    tags={["Informed Sport", "5-Organ Blend", "US Regen."]}
                    buyUrl="https://www.heartandsoil.co"
                    buyLabel="Check Price"
                    reviewSlug="heart-and-soil-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                    featured={true}
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Ancestral Supplements"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="$43–47 / 180 caps"
                    priceINR="₹3,800–4,800"
                    tags={["NZ Grass-Fed", "Freeze-Dried", "No Fillers"]}
                    buyUrl="https://amzn.to/49RAlmU"
                    buyLabel="Buy on Amazon"
                    reviewSlug="ancestral-supplements-beef-liver"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="~$35 / 180 caps"
                    priceINR="N/A"
                    tags={["NZ Sourced", "5-Organ", "Best Value"]}
                    buyUrl="https://amzn.to/beef-organ-link"
                    buyLabel="Check Price"
                    reviewSlug="left-coast-performance-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Perfect Supplements"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="~$30 / 180 caps"
                    priceINR="N/A"
                    tags={["USDA Organic", "Brazil Sourced", "Budget Pick"]}
                    buyUrl="https://amzn.to/beef-organ-link"
                    buyLabel="Check Price"
                    reviewSlug="perfect-supplements-beef-liver"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#5C5650"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "Only Informed Sport certified beef organ supplement",
                    "Comprehensive 5-organ nose-to-tail formula",
                    "US regenerative farm sourcing — named farms on website",
                    "Dr. Saladino's clinical formulation expertise",
                    "Heavy metal COA available on request",
                  ]}
                  cons={[
                    "Proprietary blend — individual organ doses undisclosed",
                    "Most expensive in category at $1.83/serving",
                    "Retinol calculation impossible without organ-dose disclosure",
                  ]}
                />
              </section>

              {/* ─── SAFETY & VITAMIN A ─────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety &amp; Vitamin A</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The proprietary blend makes retinol calculation impossible — a notable concern given Vitamin A&apos;s toxicity potential.</p>

                <div style={{ padding: "20px 24px", border: "1px solid #C4622D44", borderRadius: 12, backgroundColor: "#FDF5EF", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#C4622D", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>Pregnant women: consult your OB/GYN before use</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                        The proprietary blend in Heart &amp; Soil makes it impossible to calculate exact retinol intake — a critical consideration given retinol&apos;s teratogenic potential above 10,000 IU/day. For pregnant women, a product with disclosed ingredient doses is safer.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      icon: <CheckCircle size={15} color="#2D6A4F" />,
                      title: "At 6 caps/day: likely safe for most healthy adults",
                      body: "A 5-organ blend distributes the 3g across five tissues. The liver fraction is likely 600mg or less — significantly less retinol than a single-organ liver product at the same total dose.",
                    },
                    {
                      icon: <AlertTriangle size={15} color="#8B7355" />,
                      title: "With a daily multivitamin: check your total retinol",
                      body: "Many multivitamins contain 750–1,500 mcg RAE of preformed Vitamin A. Combined with organ supplements, total intake approaches the 3,000 mcg UL. Monitor total retinol from all sources.",
                    },
                    {
                      icon: <ShieldCheck size={15} color="#2D6A4F" />,
                      title: "For athletes: Informed Sport provides safety assurance",
                      body: "The Informed Sport certification verifies every batch for WADA-prohibited substances. For drug-tested athletes, this is the decisive factor — no other organ supplement offers this assurance.",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price &amp; Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="freeze-dried organ blend" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "180 caps (30 sv)", usd: "$55", note: "Standard bottle" },
                    { size: "Subscribe & Save", usd: "~$47–50/mo", note: "~15% off, cancellable" },
                    { size: "Bundle options", usd: "Varies", note: "Check heartandsoil.co" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.usd}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026 at heartandsoil.co. International shipping available.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Heart & Soil website (heartandsoil.co)",
                      price: "$55",
                      notes: "Primary channel. Subscribe &amp; Save available. Bundles and product stacks. Direct brand support for COA requests.",
                      recommended: true,
                      url: "https://www.heartandsoil.co",
                    },
                    {
                      channel: "Amazon US",
                      price: "$55–60",
                      notes: "Available but often slightly higher than direct. Verify the seller is Heart &amp; Soil directly. Informed Sport certification applies regardless of where you buy — the batch certification travels with the product.",
                      recommended: false,
                      url: "https://www.heartandsoil.co",
                    },
                  ].map((channel) => (
                    <div key={channel.channel} style={{ padding: "16px 20px", border: `1px solid ${channel.recommended ? "#2D6A4F33" : "#D4C9B8"}`, borderRadius: 10, backgroundColor: channel.recommended ? "#F0F8F3" : "#F8F2E4", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{channel.channel}</p>
                          {channel.recommended && <span style={{ padding: "1px 7px", backgroundColor: "#2D6A4F", borderRadius: 4, fontSize: 8, color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Recommended</span>}
                        </div>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{channel.notes}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>{channel.price}</p>
                        <a href={channel.url} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Shop Now <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FAQ ────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <div key={i} style={{ padding: "18px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>{faq.name}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-046</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    The best organ supplement for athletes.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>Overpriced for everyone else.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Heart &amp; Soil earns a 9/10 for delivering the broadest organ nutrition, the highest verification standard (Informed Sport), and credible US regenerative sourcing. The proprietary blend and premium price are its only real weaknesses — and for athletes who need batch drug testing, neither matters.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    For general consumers, Ancestral Supplements at $1.50/serving is the better value play. But if you compete in a tested sport, Heart &amp; Soil is non-negotiable — it is the only organ supplement with Informed Sport certification.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Best for athletes. Informed Sport certified. Premium price.</p>
                    </div>
                    <a href="https://www.heartandsoil.co" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Check Price <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Spitze AR et al. (2003). Taurine and carnosine content of various mammalian tissues. JAVMA. — Referenced for organ nutrient density.",
                      "Mattila P et al. (2001). Contents of nutrients and antinutritional factors in conventional and organically produced foods. Eur J Nutr. — Nutrient comparison.",
                      "USDA FoodData Central. Beef, variety meats and by-products, liver, raw. FDC ID: 174469.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A. National Academies Press, 2001. Tolerable Upper Intake Level for preformed retinol: 10,000 IU/day.",
                      "Informed Sport. Certification and batch testing methodology. informed-sport.com.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ref}</li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ── Related Reviews ────────────────────────────────────────────────── */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {relatedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
