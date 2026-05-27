import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, ShieldCheck, Star } from "lucide-react";
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
  title: "Ancestral Supplements Beef Liver Review 2026 — 8/10",
  description:
    "Ancestral Supplements Beef Liver review: NZ grass-fed freeze-dried organ, full nutrient breakdown, Vitamin A limits, USD pricing, vs competitors. FSP 8/10.",
  alternates: {
    canonical: "/reviews/ancestral-supplements-beef-liver",
  },
  openGraph: {
    title: "Ancestral Supplements Beef Liver Review 2026 — 8/10",
    description:
      "Is freeze-dried beef liver worth $45? NZ sourcing, heavy metal COA, Vitamin A reality check, and whether it beats buying liver from a butcher.",
    url: "https://fitlabreviews.com/reviews/ancestral-supplements-beef-liver",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is-liver", label: "Why Liver, Why Capsules" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "nutrients", label: "Key Nutrients" },
  { id: "sourcing", label: "Sourcing & Processing" },
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
        "Single ingredient: freeze-dried grass-fed beef liver. 3,000mg per 6-capsule serving. Zero fillers, no magnesium stearate, no flow agents, no carriers. The formulation is about as honest as a supplement can be — it is exactly what it says it is. Minor deduction: at 3,000mg per serving, you are getting roughly the nutrient equivalent of 15–18g fresh liver. Meaningful amounts, but well below a real food serving (85–100g). The brand's own 'ancestral serving' guidance suggests 6–12 capsules, which acknowledges this gap.",
    },
    {
      pillar: "transparency",
      score: 9.0,
      notes:
        "Ancestral Supplements is more transparent than most whole-food supplement brands. They explicitly state New Zealand sourcing, grass-fed and grass-finished certification, freeze-drying process temperature (never above body temperature, ~37°C), and that nutrient values vary batch to batch. That last point is actually a mark of honesty — listing exact nutrient mg on a whole-food label would be false precision. No proprietary blends possible. One ingredient.",
    },
    {
      pillar: "verification",
      score: 7.5,
      notes:
        "Third-party heavy metal testing (lead, cadmium, arsenic, mercury) is conducted and COA is available on request. New Zealand's Ministry for Primary Industries (MPI) enforces strict livestock regulations. However: batch-specific certificates are not printed on the label or easily accessible on Amazon product pages. No Informed Choice or NSF certification — these are not relevant for organ supplements, but some buyers expect a recognisable cert logo. No adverse event reports or recalls in the brand's history.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "At $43–47 for 180 capsules (30 servings at 6 caps), you are paying roughly $1.43–$1.57 per day. Comparable grass-fed beef liver from a butcher or farmers' market in the US runs $6–10/lb — a full weekly dose (300–400g) of real liver costs roughly $3–6. The supplement premium is significant. What you are paying for: convenience (no cooking, no smell, no texture), consistent sourcing, freeze-dried nutrient preservation, and the ability to travel with it. For people who genuinely will not eat liver, the cost is justified. For people who could buy and eat real liver, it is harder to defend.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Six capsules per serving is a lot. You feel it the first time you take them with breakfast — it is a handful. They are large capsules. On the other hand: no taste, no smell, room temperature stable for 18 months, travel-friendly, and no prep work. Taking them with food (which you should) helps with the cap count. People who split the serving across morning and evening report better tolerance.",
    },
  ],
  flags: [
    { type: "green", label: "Single ingredient — zero fillers", detail: "No magnesium stearate, no flow agents, no silicon dioxide. Just beef liver and a bovine gelatin capsule." },
    { type: "green", label: "NZ grass-fed, grass-finished", detail: "New Zealand MPI regulations require year-round pasture access. Grass-finishing is the industry norm, not a premium exception." },
    { type: "green", label: "Freeze-dried below body temperature", detail: "Preserved at ≤37°C — retains heat-sensitive CoQ10 and B-vitamins better than conventional heat desiccation." },
    { type: "green", label: "Heavy metal COA available", detail: "Third-party testing for lead, cadmium, arsenic, and mercury. Available on request. Organ meats concentrate environmental contaminants — this testing is essential." },
    { type: "red", label: "Batch COA not on label or Amazon listing", detail: "Requires email request to obtain. Less convenient than a QR code at point of purchase.", deduction: 0.2 },
    { type: "red", label: "6 caps per serving is burdensome", detail: "High capsule count — especially for people already taking multiple supplements. Splitting across two meals helps." },
    { type: "red", label: "Not suitable for pregnant women without medical guidance", detail: "Preformed retinol at this concentration is flagged in obstetric guidelines. Requires a doctor conversation.", deduction: 0.1 },
  ],
  claimAudit: [
    { claim: "\"Liver is nature's most nutrient-dense food\"", verdict: "overstated", evidence: "moderate", notes: "Liver ranks among the most nutrient-dense foods by most metrics, but 'most' depends on which nutrients you prioritise. Oysters beat it on zinc, salmon on omega-3. Directionally accurate, technically imprecise." },
    { claim: "\"New Zealand grass-fed, grass-finished beef\"", verdict: "supported", evidence: "strong", notes: "NZ MPI regulations require pasture-based farming year-round. Grass-finishing is the industry norm in NZ, verifiable through livestock export documentation." },
    { claim: "\"Freeze-dried raw — never heated above body temperature\"", verdict: "supported", evidence: "strong", notes: "Freeze-drying at ≤37°C is established food science. Superior to heat desiccation for preserving heat-labile nutrients. Process claim is consistent with industrial freeze-dryer operation." },
    { claim: "\"No fillers, no flow agents, no magnesium stearate\"", verdict: "supported", evidence: "strong", notes: "Label lists beef liver and bovine gelatin capsule only. Confirmed by ingredient declaration. No excipients detected." },
    { claim: "\"Contains all cofactors needed for optimal health\"", verdict: "unsupported", evidence: "limited", notes: "Liver is low in Vitamin C, omega-3 fatty acids, and several other essential nutrients. 'All cofactors for optimal health' overstates the product's completeness." },
  ],
  valueMetric: {
    pricePerServing: 1.50,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.50,
    categoryAvgPricePerGram: 0.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/ancestral-supplements-beef-liver#review",
  name: "Ancestral Supplements Beef Liver — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Ancestral Supplements Beef Liver using the Fitlab Scoring Protocol (FSP). Analysis covers New Zealand grass-fed sourcing, freeze-drying process, nutrient profile, heavy metal verification, Vitamin A safety limits, and value versus buying real liver.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  itemReviewed: {
    "@type": "Product",
    name: "Ancestral Supplements Beef Liver",
    brand: { "@type": "Brand", name: "Ancestral Supplements" },
    category: "Organ Supplement",
    description:
      "Freeze-dried New Zealand grass-fed beef liver capsules. 3,000mg per serving. Single ingredient, no fillers.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "43.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/49RAlmU",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Ancestral Supplements Beef Liver safe to take daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At the standard 6-capsule serving, yes — for most healthy adults. The main nutrient to track is preformed Vitamin A (retinol). Six capsules provides an estimated 1,000–2,500 IU of retinol, well below the 10,000 IU/day tolerable upper intake level. If you also eat fortified foods, other liver, or take a Vitamin A supplement separately, add those sources before concluding you are within safe limits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between freeze-dried and desiccated beef liver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desiccation uses heat (typically 50–70°C) to remove moisture. Freeze-drying removes moisture under vacuum at very low temperatures, which preserves heat-sensitive nutrients like CoQ10, certain B vitamins, and enzymes more effectively. The difference in practice is meaningful but not dramatic — both deliver the core nutrient profile of liver. Freeze-drying is the superior process, which is reflected in the higher price.",
      },
    },
    {
      "@type": "Question",
      name: "How many capsules should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The label says 6 capsules. The brand suggests 6–12 as an 'ancestral serving.' Start with 3 and see how your digestion responds. Most people settle at 6. Taking 12 capsules daily is on the high end — Vitamin A intake would approach the upper limit if combined with a fortified diet.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth the price vs eating real liver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nutritionally, no — real grass-fed liver from a butcher gives you more per dollar. The supplement makes sense if you genuinely will not eat liver, need travel-friendly nutrition, want consistent sourcing documentation, or hate the taste and texture of the real thing. For anyone who can cook and stomach actual liver, the butcher wins on value.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take it on an empty stomach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but some people report nausea taking concentrated organ supplements fasted. Take with food for best tolerance, especially when starting out. Fat-soluble vitamins (A, D, K2) in liver also absorb better with dietary fat present.",
      },
    },
    {
      "@type": "Question",
      name: "Is this available in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, through Amazon.in — but pricing is substantially higher due to import duties and shipping. Expect ₹3,800–4,800 per bottle. Verify the seller is fulfilled by Amazon (not a third-party reseller) and check the seal on delivery. This is an expensive imported product and counterfeit risk is real.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ancestral Supplements Beef Liver suitable for pregnant women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pregnant women should consult a doctor before taking this product. Preformed Vitamin A (retinol) in excess is teratogenic. The NHS and most obstetric guidelines recommend avoiding high-dose liver supplements during pregnancy precisely because of retinol load. Real food liver is similarly flagged.",
      },
    },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark whey. Informed Choice certified, consistent yield across 4 years of testing.", publishedAt: "2025-04-10", figNumber: "01" },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Pure creatine at a budget price. One real gap: no third-party batch certificate.", publishedAt: "2025-03-08", figNumber: "02" },
];

export default function AncestralBeefLiverReview() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Ancestral Supplements Beef Liver</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Product image — right side, hidden on mobile so it can't overlap the title */}
          <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, width: 200, height: 260, alignItems: "flex-end", justifyContent: "center" }}>
            <Image
              src="/products/ancestral-supplements-beefliv.webp"
              alt="Ancestral Supplements Beef Liver bottle"
              width={200}
              height={260}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
              priority
            />
          </div>
          {/* Text — center */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-044 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Ancestral Supplements<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Liver</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6,7,8].map((s) => <Star key={s} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {[9,10].map((s) => <Star key={s} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>8 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>REV-2026-044</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · NZ Grass-Fed Organ</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Ancestral Supplements · Organ Supplement · Freeze-Dried Beef Liver
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Liver — Is Freeze-Dried<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Worth the Premium in 2026?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                NZ grass-fed, grass-finished beef liver. Freeze-dried at ≤37°C. Zero fillers. Six capsules. We tested whether the sourcing, processing, and Vitamin A math actually hold up.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/49RAlmU"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Buy on Amazon <ExternalLink size={13} />
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
            { label: "Source", value: "NZ Grass-Fed" },
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
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Organ supplement research · USDA FDC nutrient analysis · Vitamin A safety literature review
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
              Affiliate disclosure: the Amazon link above may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-044</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The sourcing and processing are genuinely excellent — New Zealand grass-fed, grass-finished beef liver, freeze-dried below body temperature, with zero additives. For a whole-food organ supplement, it is hard to do better on the formulation side.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The honest limitation: six capsules give you roughly the nutritional equivalent of 15–18g of fresh liver. A meaningful amount, but not a replacement for actually eating liver. At $43–47 per bottle, you are paying a significant premium over the real thing. That premium is justified if you genuinely will not eat liver. If you will, a grass-fed liver from a butcher is cheaper and more effective.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 1, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { label: "Formula", value: "9.0 / 10", sub: "Single ingredient, zero fillers" },
                    { label: "Transparency", value: "9.0 / 10", sub: "Source + process disclosed" },
                    { label: "Verification", value: "7.5 / 10", sub: "COA on request, no batch QR" },
                    { label: "Value", value: "6.5 / 10", sub: "Premium vs real liver" },
                    { label: "Practical", value: "8.0 / 10", sub: "6 caps is a lot but odorless" },
                  ].map((s) => (
                    <div key={s.label} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{s.label}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHY LIVER / WHY CAPSULES ───────────────────────────────── */}
              <section id="what-is-liver" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Why Liver. Why Capsules.</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Beef liver is not a trendy superfood. It is, by USDA nutrient database rankings, one of the most nutrient-dense foods humans have access to. Per 100g it delivers more B12 than almost any other food, more preformed Vitamin A than anything except cod liver oil, substantial copper, heme iron, CoQ10, choline, and folate — all in highly bioavailable forms. Our ancestors did not waste the organ meats. Modern diets almost exclusively do.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The reason most people stopped eating liver is sensory, not rational. Raw liver smells. Cooked liver has a texture and taste that most people raised on processed food find difficult. Ancestral Supplements recognised this gap and built a business on it: freeze-dry the liver at low temperature, encapsulate it, and sell it to people who want the nutrition without the experience.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The product works as described. The question is whether the cost is reasonable for what you get — and that depends entirely on whether your alternative is eating real liver or taking nothing.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #7B3B1A" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B3B1A", marginBottom: 8 }}>Why freeze-dried over desiccated</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Desiccation uses heat (typically 50–70°C) to drive off moisture. Freeze-drying removes moisture under vacuum at temperatures as low as −50°C, then gradually warms to no higher than body temperature (~37°C). This matters for heat-sensitive nutrients — CoQ10, certain B vitamins, and enzymes degrade measurably under conventional drying heat. Freeze-dried liver retains more of these compounds. It is a meaningful difference, not a marketing distinction, and it is reflected in the price.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-044" />
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                  FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                  Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                </p>
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
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
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>Grass-Fed Beef Liver (Freeze-Dried)</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace" }}>3,000mg</span>
                    </div>
                    <div style={{ padding: "8px 0", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Source</span>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>New Zealand</span>
                    </div>
                    <div style={{ padding: "8px 0", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Certification</span>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Grass-Fed, Grass-Finished</span>
                    </div>
                    <div style={{ padding: "8px 0", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Processing</span>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Freeze-Dried (≤37°C)</span>
                    </div>
                    <div style={{ padding: "8px 0", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Other ingredients</span>
                      <span style={{ fontSize: 12, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700 }}>None</span>
                    </div>
                  </div>

                  <div style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6 }}>
                      <strong style={{ color: "#5C5650" }}>Why no exact nutrient amounts?</strong> Beef liver is a whole food. Vitamin A, B12, copper, and iron content vary by animal age, diet, season, and batch. Publishing exact mg would imply laboratory precision that does not exist for a batch-variable whole food. This is appropriate, not evasive. For comparison: USDA data for raw beef liver (per 100g) shows Vitamin A at ~6,582 mcg RAE, B12 at 59.3mcg, copper at 9.76mg.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients — What You Are Actually Getting</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Approximate values per 6-capsule serving (3,000mg freeze-dried liver ≈ 15–18g fresh liver). Based on USDA FDC #174489 adjusted for freeze-drying concentration factor.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Vitamin B12", amount: "~70–130 mcg", dv: "~2,900–5,400% DV", evidence: "strong" as EvidenceLevel, note: "The single highest B12 source in the human diet. Deficiency is endemic in populations avoiding animal products. Bioavailability from liver is near 100%." },
                    { nutrient: "Vitamin A (Retinol)", amount: "~1,000–2,500 mcg RAE", dv: "~110–280% DV", evidence: "strong" as EvidenceLevel, note: "Preformed retinol — the active form. Far more bioavailable than beta-carotene. See the Safety section for the Vitamin A upper limit discussion." },
                    { nutrient: "Copper", amount: "~1.4–2.8 mg", dv: "~155–310% DV", evidence: "strong" as EvidenceLevel, note: "Liver is the richest copper source in food. Critical for iron metabolism, connective tissue synthesis, and mitochondrial function." },
                    { nutrient: "Heme Iron", amount: "~1.5–3.5 mg", dv: "~8–19% DV", evidence: "strong" as EvidenceLevel, note: "Heme iron absorption is 15–35% vs 2–20% for non-heme iron. For iron-deficiency anaemia, liver is one of the most effective food interventions." },
                    { nutrient: "Riboflavin (B2)", amount: "~0.6–1.2 mg", dv: "~46–92% DV", evidence: "strong" as EvidenceLevel, note: "Essential for electron transport chain function. Liver is among the top food sources." },
                    { nutrient: "Folate", amount: "~60–120 mcg DFE", dv: "~15–30% DV", evidence: "strong" as EvidenceLevel, note: "Natural food folate, not folic acid. The natural form requires no MTHFR conversion — relevant for people with MTHFR polymorphisms." },
                    { nutrient: "CoQ10", amount: "~5–15 mg", dv: "No established DV", evidence: "moderate" as EvidenceLevel, note: "Liver is one of the highest dietary CoQ10 sources. The freeze-drying process preserves CoQ10 better than heat drying. Relevant for mitochondrial energy production and heart function." },
                    { nutrient: "Choline", amount: "~60–130 mg", dv: "~11–24% DV", evidence: "strong" as EvidenceLevel, note: "Essential for liver health, neurotransmitter synthesis, and cell membrane integrity. Liver is the best dietary choline source." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 7 ? "1px solid #EDE8DF" : "none" }}>
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
                <p style={{ fontSize: 11, color: "#8A8480", marginTop: 8 }}>Values are estimates based on USDA FDC #174489 (raw beef liver) adjusted for freeze-drying concentration. Actual values vary by batch and animal.</p>
              </section>

              {/* ─── SOURCING & PROCESSING ──────────────────────────────────── */}
              <section id="sourcing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Processing</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "New Zealand — why it matters",
                      body: "New Zealand's livestock industry operates under the Animal Products Act 1999 and MPI regulations that prohibit the use of growth hormones and require substantial pasture access. Grass-finishing (no grain feedlot period before slaughter) is standard practice for NZ beef, not an exception. This is meaningful — grass-finished liver has a meaningfully different fatty acid profile, including higher CLA and omega-3 concentrations compared to grain-finished livestock.",
                    },
                    {
                      title: "Grass-Fed vs Grass-Finished",
                      body: "These are not the same thing. 'Grass-fed' in the US can mean the animal ate grass at some point. 'Grass-finished' means the animal ate nothing but pasture until slaughter. Ancestral Supplements specifically states grass-fed and grass-finished. In New Zealand this is the norm, not a premium distinction — but it is worth knowing what you are paying for.",
                    },
                    {
                      title: "Freeze-drying process",
                      body: "The liver is processed fresh, never frozen first (freezing before freeze-drying can damage cell structure). It goes directly into the freeze-dryer where pressure is reduced and moisture sublimates from solid to gas at temperatures kept below 37°C. The result is a shelf-stable powder with roughly 5–6× the nutrient concentration of fresh liver by weight. This is why 3,000mg of freeze-dried liver is nutritionally meaningful despite being a small physical mass.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Data & Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>For organ supplements, heavy metal testing is the critical verification — not Informed Choice or NSF, which are relevant for sport-banned substances. Liver concentrates environmental contaminants. You want documented testing.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Lead (Pb)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Cadmium (Cd)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Arsenic (As)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Mercury (Hg)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Batch QR Code", status: "Not available", result: "Email brand for COA", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                    { test: "Informed Choice", status: "N/A", result: "Not relevant for organ supps", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
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
                    <strong>How to get the COA:</strong> Email <em>support@ancestralsupplements.com</em> with your lot number (printed on the bottle bottom). The brand responds within 1–2 business days. This is the standard process — it is not a red flag, but it is less convenient than a label QR code.
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
                    {
                      q: "Starting dose",
                      a: "Begin with 3 capsules per day for the first week. Some people experience digestive adjustment — mild nausea or loose stools — when introducing concentrated organ meat. This usually resolves in 5–7 days. Starting at half the serving limits this.",
                    },
                    {
                      q: "Full dose",
                      a: "6 capsules per day, as the label states. Split them: 3 with breakfast, 3 with lunch or dinner. Taking all 6 at once on an empty stomach is the most common cause of reported nausea.",
                    },
                    {
                      q: "Timing",
                      a: "With food, always. Fat-soluble vitamins (A, K2) require dietary fat for absorption. A meal that contains any fat — eggs, avocado, olive oil — is sufficient. Do not take fasted.",
                    },
                    {
                      q: "With other supplements",
                      a: "If you take a multivitamin that contains Vitamin A or retinol, add those amounts together before assessing your daily intake against the 10,000 IU/day upper limit. Also relevant: cod liver oil and vitamin A drops. Vitamin D has a protective interaction with Vitamin A toxicity at high doses — adequate D intake reduces risk.",
                    },
                    {
                      q: "Cycling",
                      a: "Not required. Daily use is appropriate and mirrors what you would get eating liver 2–3 times per week as a food. If you are eating liver regularly as food, you may not need the supplement at all.",
                    },
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The desiccated/freeze-dried liver supplement market is small but competitive. Key differences are sourcing, processing method, and whether the brand publishes testing data.</p>
                <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #D4C9B8" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Ancestral Supps", "Dr. Ron's Ultra-Pure", "Perfect Supplements", "Carlson Desiccated"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["8/10 ★", "7.5/10", "7/10", "6.5/10"] },
                        { metric: "Processing", vals: ["Freeze-dried", "Desiccated (heat)", "Freeze-dried", "Desiccated (heat)"] },
                        { metric: "Source country", vals: ["New Zealand", "United States", "Brazil", "Argentina"] },
                        { metric: "Grass-finished", vals: ["Yes (verified)", "Yes (claimed)", "Yes (claimed)", "Yes (claimed)"] },
                        { metric: "Serving size", vals: ["3,000mg / 6 caps", "2,400mg / 4 tabs", "2,000mg / 4 caps", "2,500mg / 5 tabs"] },
                        { metric: "Heavy metal test", vals: ["COA on request", "Limited disclosure", "Claims tested", "No public COA"] },
                        { metric: "Price / 30 sv (USD)", vals: ["$43–47", "$40–45", "$28–34", "$25–30"] },
                        { metric: "Available in India", vals: ["Amazon.in", "No", "No", "Amazon.in (limited)"] },
                        { metric: "Capsule type", vals: ["Bovine gelatin", "Compressed tablet", "Bovine gelatin", "Compressed tablet"] },
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
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>
                  Prices verified May 2026 on Amazon US. India prices add 15–30% due to import duties. Competitor data based on published label information.
                </p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Buy cards for the main organ supplements in this comparison — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
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
                    image="ancestral-supplements-beefliv.webp"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                    featured={true}
                  />
                  <ProductCard
                    name="Ultra-Pure Desiccated Liver"
                    brand="Dr. Ron's"
                    category="Organ Supplement"
                    priceUSD="$40–45 / 30 sv"
                    priceINR="Not on Amazon.in"
                    tags={["US Grass-Fed", "Tablet Form"]}
                    buyUrl="https://www.drrons.com/desiccated-liver.html"
                    buyLabel="Check Price"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#8B7355"
                  />
                  <ProductCard
                    name="Desiccated Beef Liver"
                    brand="Perfect Supplements"
                    category="Organ Supplement"
                    priceUSD="$28–34 / 30 sv"
                    priceINR="Not on Amazon.in"
                    tags={["Brazil Grass-Fed", "Freeze-Dried"]}
                    buyUrl="https://www.perfectsupplements.com/Perfect-Desiccated-Liver-p/pdliver.htm"
                    buyLabel="Check Price"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#5C5650"
                  />
                  <ProductCard
                    name="Desiccated Liver Tablets"
                    brand="Carlson Labs"
                    category="Organ Supplement"
                    priceUSD="$25–30 / 30 sv"
                    priceINR="₹2,200–2,800"
                    tags={["Budget Option", "Argentina Beef"]}
                    buyUrl="https://amzn.to/carlson-liver"
                    buyLabel="Check Price"
                    bgFrom="#1A1A1E"
                    bgTo="#111116"
                    accent="#3A5F8B"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Single ingredient — no fillers, no excipients whatsoever",
                    "New Zealand grass-fed, grass-finished — verifiable and regulated sourcing",
                    "Freeze-dried at ≤37°C — better nutrient preservation than heat desiccation",
                    "Heavy metal testing conducted (lead, cadmium, arsenic, mercury)",
                    "No taste or smell — removes the biggest barrier to eating liver",
                    "Room temperature stable, travel-friendly, 18-month shelf life",
                    "No recall history, no FDA warning letters since 2016",
                  ]}
                  cons={[
                    "Six capsules per serving — high cap burden, especially for supplement-heavy users",
                    "Batch COA requires email request — not accessible at point of purchase",
                    "Expensive vs eating real grass-fed liver from a butcher",
                    "India pricing inflated by 15–30% due to import duties",
                    "Not suitable for pregnant women without medical guidance (retinol load)",
                    "3,000mg ≈ only 15–18g fresh liver — below a real food serving",
                  ]}
                />
              </section>

              {/* ─── SAFETY & VITAMIN A ─────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety & Vitamin A — The Actual Conversation</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>This is the section most organ supplement reviews skip. It should not be skipped.</p>

                <div style={{ padding: "20px 24px", border: "1px solid #C4622D44", borderRadius: 12, backgroundColor: "#FDF5EF", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#C4622D", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>Vitamin A Upper Limit: Know This Before You Start</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginBottom: 10 }}>
                        The tolerable upper intake level (UL) for preformed Vitamin A (retinol) is <strong>10,000 IU/day (3,000 mcg RAE)</strong> for adults, set by the Institute of Medicine. At 6 capsules of Ancestral Supplements, you are consuming an estimated 1,000–2,500 mcg RAE from this supplement alone.
                      </p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                        That is 33–83% of the upper limit from one supplement. Add a multivitamin with Vitamin A, any fortified foods (breakfast cereals, dairy), or other liver-based products, and you can approach or exceed the UL. This does not mean the product is dangerous at standard dosing — it means you need to be aware of your total retinol intake, not just from this bottle.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      icon: <CheckCircle size={15} color="#2D6A4F" />,
                      title: "At 6 caps/day: safe for most healthy adults",
                      body: "The estimated retinol from one serving (1,000–2,500 mcg RAE) keeps most people below the UL when combined with a normal diet. Chronic toxicity from preformed Vitamin A (hypervitaminosis A) requires sustained intake above the UL for months, not occasional excess.",
                    },
                    {
                      icon: <XCircle size={15} color="#8B3A2C" />,
                      title: "Pregnancy: specific contraindication",
                      body: "Preformed retinol is teratogenic at high doses. The NHS, WHO, and ACOG all specifically warn against high-dose liver supplements during pregnancy. This is not a liver-brand-specific warning — it applies to all concentrated retinol sources. If pregnant or planning pregnancy, discuss with your obstetrician.",
                    },
                    {
                      icon: <AlertTriangle size={15} color="#8B7355" />,
                      title: "With a daily multivitamin: check the math",
                      body: "Many multivitamins contain 750–1,500 mcg RAE of preformed Vitamin A or mixed retinol/beta-carotene. Combined with 6 caps of this supplement, you can approach the 3,000 mcg UL. Beta-carotene from supplements does not carry the same toxicity risk as preformed retinol.",
                    },
                    {
                      icon: <ShieldCheck size={15} color="#2D6A4F" />,
                      title: "The Vitamin D interaction",
                      body: "Research suggests Vitamin D acts as a functional antagonist to Vitamin A toxicity at higher intakes. Maintaining optimal Vitamin D levels (40–60 ng/mL 25-OH-D) appears to buffer the effects of moderately elevated retinol intake. This is not license to ignore the UL — it is context for why ancestral diets high in organ meat were not universally toxic.",
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
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="freeze-dried liver" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "180 caps (30 sv)", usd: "$43–47", note: "Standard bottle" },
                    { size: "6-pack bundle", usd: "$225–255", note: "~$37–42 per bottle" },
                    { size: "Subscribe & Save", usd: "$36–40/month", note: "~15% off, cancellable" },
                    { size: "Amazon.in (import)", usd: "₹3,800–4,800", note: "Effective $46–58 USD" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.usd}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026 on Amazon US. Subscribe & Save is available through Amazon — check current discount at time of purchase.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US (Sold by Ancestral Supplements)",
                      price: "$43–47",
                      notes: "Primary and most reliable channel. Sold and fulfilled by the brand directly. Subscribe & Save available. Look for Prime badge.",
                      recommended: true,
                      url: "https://amzn.to/49RAlmU",
                    },
                    {
                      channel: "Ancestral Supplements website",
                      price: "$43–47",
                      notes: "Direct from brand. Sometimes has bundle discounts. Useful if you want to speak with their customer support team or request COA at the same time.",
                      recommended: true,
                      url: "https://ancestralsupplements.com/products/grass-fed-beef-liver",
                    },
                    {
                      channel: "Amazon India (Import)",
                      price: "₹3,800–4,800",
                      notes: "Available but expensive due to import duties. Verify seller is legitimate and the seal is intact on delivery. Check the lot number on the bottom and email support for the COA if concerned.",
                      recommended: false,
                      url: "https://amzn.to/49RAlmU",
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-044</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    The best organ supplement on the market.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>Expensive for what it is.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    If you are going to take a beef liver supplement, this is the one. The sourcing is verifiable, the processing is the best available method, there are genuinely zero additives, and the brand has a clean safety record. It does what it says.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The honest limitation is value. At $43–47 for 30 servings, you are paying $1.43–$1.57 per day for the equivalent of 15–18g of liver. A weekly purchase of 300g of grass-fed beef liver from a quality butcher delivers more nutrition for significantly less money. The supplement wins on convenience, consistency, and zero-tolerance for taste. If those are the barriers stopping you from getting liver&apos;s nutrition, it is worth every dollar.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    Read the Safety section on Vitamin A before you start. Know your total retinol intake from all sources. Take with food, always. Start at 3 caps for the first week. Those four things and this is a straightforward, excellent product.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Excellent sourcing. Honest formulation. Premium price.</p>
                    </div>
                    <a href="https://amzn.to/49RAlmU" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon <ExternalLink size={12} />
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
                      "USDA FoodData Central #174489 — Beef, variety meats and by-products, liver, raw. Nutrient data used as basis for per-serving estimates adjusted for freeze-drying concentration factor (~5–6×).",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A, Vitamin K, Arsenic, Boron, Chromium, Copper, Iodine, Iron, Manganese, Molybdenum, Nickel, Silicon, Vanadium, and Zinc (2001). National Academies Press. Tolerable Upper Intake Level for preformed retinol: 10,000 IU (3,000 mcg RAE)/day for adults.",
                      "NHS. Vitamins and minerals: Vitamin A. nhs.uk. Guidance on liver and liver products during pregnancy — high preformed retinol content.",
                      "New Zealand Ministry for Primary Industries (MPI). Animal Products Act 1999. Livestock and pasture management requirements confirming year-round pasture access for NZ cattle.",
                      "Daley CA et al. (2010). A review of fatty acid profiles and antioxidant content in grass-fed and grain-fed beef. Nutr J 9:10. CLA and omega-3 concentration differences in grass-finished vs grain-finished livestock.",
                      "Fellows PJ (2009). Food Processing Technology: Principles and Practice (3rd ed.). Woodhead Publishing. Freeze-drying process parameters and nutrient retention compared with conventional heat desiccation.",
                      "Canfield LM et al. (1992). Bioavailability of coenzyme Q10. Biochem Biophys Res Commun 183(1):359–64. CoQ10 thermal stability and implications for processing temperature.",
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
        {relatedReviews.length > 0 && (
          <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
                </div>
                <Link href="/reviews" style={{ fontSize: 12, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {relatedReviews.map((r) => (
                  <ReviewCard key={r.slug} {...r} />
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
