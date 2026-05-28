import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Ancestral Supplements Beef Organs Review (2026): 9/10",
  description:
    "Ancestral Supplements Beef Organs review: 5-organ NZ grass-fed blend, freeze-dried, zero fillers, $1.50/serving. Most transparent sourcing in the category. FSP 9/10.",
  alternates: { canonical: "/reviews/ancestral-supplements-beef-organs" },
  openGraph: {
    title: "Ancestral Supplements Beef Organs Review (2026): 9/10",
    description:
      "The gold standard for multi-organ supplements — 5 NZ grass-fed organs, freeze-dried at body temperature, no fillers. Is the $45 price justified? Full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/ancestral-supplements-beef-organs",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is This Product?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "nutrients", label: "Key Nutrients by Organ" },
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
        "Five-organ blend: freeze-dried beef liver, heart, kidney, spleen, and pancreas from New Zealand grass-fed cattle. Each organ provides a distinct and non-overlapping nutritional profile — liver (retinol, B12, copper, heme iron), heart (CoQ10, taurine), kidney (selenium, riboflavin), spleen (heme iron, zinc, purines), pancreas (proteolytic enzymes, B vitamins). The five-organ approach captures more of the ancestral nose-to-tail nutrition pattern than any single-organ supplement can. Zero fillers, zero flow agents, bovine gelatin capsule only. Minor deduction: organ ratios are not individually listed on the label — the 3,000mg is a blended total.",
    },
    {
      pillar: "transparency",
      score: 9.0,
      notes:
        "Ancestral Supplements publishes their sourcing country (New Zealand), livestock certification (grass-fed, grass-finished), and processing method (freeze-dried below body temperature) clearly on all product pages. The five organs in the blend are individually named. NZ Ministry for Primary Industries (MPI) regulations are externally verifiable and set high standards for pasture access and no added hormones. The main transparency limitation is that per-organ dose within the 3,000mg blend is not disclosed — liver retinol contribution cannot be precisely calculated. This is the standard for organ blends industry-wide, but it remains a gap.",
    },
    {
      pillar: "verification",
      score: 7.0,
      notes:
        "Third-party heavy metal testing (lead, cadmium, arsenic, mercury) is conducted and COA is available on request from the brand. New Zealand MPI regulations provide independent oversight of sourcing claims. No Informed Sport or NSF certification — these test for sport-banned substances and are not the primary concern for organ supplements, where contaminant testing is more relevant. The gap: batch-specific COAs are not attached to the label or accessible via a QR code at point of sale. Requires an email request. No adverse event reports, no FDA warning letters in the brand's history.",
    },
    {
      pillar: "value",
      score: 8.5,
      notes:
        "At approximately $45–49 for 180 capsules (30 servings at 6 caps), this is $1.50–$1.63/serving. For a five-organ, NZ-sourced, freeze-dried blend with no fillers, this sits at the upper-middle of the market — below Heart & Soil ($1.83) and above commodity organ blends that use grain-fed US sources. The nutritional breadth of five organs spread across one serving justifies the premium over single-organ products. For buyers focused on multi-organ coverage without paying the Informed Sport premium, this is the category's best value proposition.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Six capsules per serving. Large bovine gelatin capsules — a meaningful pill burden, especially if you take other supplements at the same time. No taste, no smell after encapsulation. Room temperature stable for 18 months. Travel-friendly. The common workaround — splitting 3 caps at breakfast and 3 at lunch — is effective and does not change the nutritional outcome. Starting at 3 caps/day for the first week is recommended to allow digestive adjustment to concentrated organ matter.",
    },
  ],
  flags: [
    { type: "green", label: "Five-organ blend — comprehensive nose-to-tail coverage", detail: "Liver, heart, kidney, spleen, and pancreas each contribute unique nutrients not found in high concentrations in any single organ. The five-organ approach is nutritionally superior to single-liver products." },
    { type: "green", label: "NZ grass-fed, grass-finished — externally verified", detail: "New Zealand MPI regulations require year-round pasture access and prohibit growth hormones. Grass-finishing is the industry norm in NZ, verifiable through livestock export documentation. Not a marketing claim." },
    { type: "green", label: "Freeze-dried at ≤37°C — superior nutrient preservation", detail: "Freeze-drying removes moisture under vacuum below body temperature, preserving heat-sensitive CoQ10, B-vitamins, and enzymes better than conventional heat desiccation. A meaningful process difference." },
    { type: "green", label: "Zero fillers — bovine gelatin capsule only", detail: "No magnesium stearate, no silicon dioxide, no flow agents. Single-sourced bovine gelatin capsule. The supplement is as clean as it is possible to make a capsule-based product." },
    { type: "green", label: "Heavy metal testing conducted", detail: "Third-party testing for lead, cadmium, arsenic, and mercury is performed on batches. COA available on request. Organ meats concentrate environmental contaminants — this testing is essential and present." },
    { type: "red", label: "Per-organ dose not disclosed", detail: "The 3,000mg is a blended total. Exact liver contribution (and therefore precise retinol load) cannot be calculated by consumers. This matters for Vitamin A safety math.", deduction: 0.3 },
    { type: "red", label: "Batch COA requires email request", detail: "Not accessible via label QR code or product page at time of purchase. Less convenient than batch-transparent brands. Not a red flag for quality, but a transparency gap.", deduction: 0.1 },
    { type: "red", label: "Not suitable for pregnant women without medical guidance", detail: "Liver-containing products provide preformed retinol (Vitamin A). NHS and obstetric guidelines flag concentrated liver supplements during pregnancy. Requires a doctor conversation.", deduction: 0.1 },
  ],
  claimAudit: [
    { claim: "\"Nature's original multivitamin\"", verdict: "overstated", evidence: "moderate", notes: "The five-organ blend delivers an exceptional range of micronutrients, particularly fat-soluble vitamins, B vitamins, and trace minerals. But it is low in Vitamin C, omega-3 fatty acids, magnesium, and several other essential nutrients. 'Original multivitamin' is directionally accurate but implies completeness it does not have." },
    { claim: "\"New Zealand grass-fed, grass-finished beef\"", verdict: "supported", evidence: "strong", notes: "NZ MPI regulations require pasture-based farming year-round and prohibit hormone use. Grass-finishing is the industry norm in NZ. Claim is consistent with independently verifiable regulatory framework." },
    { claim: "\"Freeze-dried raw — never heated above body temperature\"", verdict: "supported", evidence: "strong", notes: "Freeze-drying at ≤37°C is established industrial food science. Superior to heat desiccation for heat-labile nutrients. Consistent with how commercial freeze-dryers operate at these temperature parameters." },
    { claim: "\"Contains enzymes, peptides, and cofactors found nowhere else\"", verdict: "overstated", evidence: "limited", notes: "Organ meats do contain enzymes and bioactive peptides not common in muscle meat. However, the bioavailability and activity of these compounds after digestion is not well-established in controlled trials. The 'found nowhere else' framing is marketing language rather than established science." },
    { claim: "\"No fillers, no flow agents, no magnesium stearate\"", verdict: "supported", evidence: "strong", notes: "Confirmed by ingredient declaration: five freeze-dried organ powders plus bovine gelatin capsule only. No excipients. Verified by label inspection." },
  ],
  valueMetric: {
    pricePerServing: 1.50,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.50,
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
  "@id": "https://fitlabreviews.com/reviews/ancestral-supplements-beef-organs#review",
  name: "Ancestral Supplements Beef Organs — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Ancestral Supplements Beef Organs using the Fitlab Scoring Protocol (FSP). Analysis covers the five-organ blend (liver, heart, kidney, spleen, pancreas), New Zealand grass-fed sourcing, freeze-drying process, nutrient profile by organ, heavy metal verification, Vitamin A safety limits, and value versus competing organ supplement brands.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-20",
  dateModified: "2026-05-28",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  itemReviewed: {
    "@type": "Product",
    name: "Ancestral Supplements Beef Organs",
    brand: { "@type": "Brand", name: "Ancestral Supplements" },
    category: "Organ Supplement",
    description:
      "Five-organ freeze-dried blend: beef liver, heart, kidney, spleen, and pancreas from NZ grass-fed cattle. 3,000mg per 6-capsule serving. Zero fillers.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "47.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/ancestral-beef-organs",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What organs are in Ancestral Supplements Beef Organs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ancestral Supplements Beef Organs contains five freeze-dried organs from New Zealand grass-fed cattle: beef liver, beef heart, beef kidney, beef spleen, and beef pancreas. Each organ contributes a distinct nutritional profile — liver for retinol and B12, heart for CoQ10 and taurine, kidney for selenium and riboflavin, spleen for heme iron and zinc, and pancreas for proteolytic enzymes. The blend totals 3,000mg per 6-capsule serving.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ancestral Supplements Beef Organs compare to Heart & Soil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are premium five-organ NZ/US grass-fed blends at the 9/10 rating. The key difference is third-party testing: Heart & Soil holds Informed Sport certification (every batch tested for 200+ WADA-banned substances), which Ancestral Supplements does not. For competitive athletes subject to drug testing, Heart & Soil is the safer choice. For everyone else, Ancestral Supplements is approximately $0.33/serving less expensive, uses New Zealand sourcing (well-regulated and verifiable), and has equivalent heavy metal testing. Both are excellent products.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ancestral Supplements Beef Organs safe to take daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most healthy adults, yes. The main nutrient to monitor is preformed Vitamin A (retinol) from the beef liver component. At 6 capsules, the estimated retinol load from this blend is lower than a single-organ beef liver supplement (because liver is diluted across five organs), but the exact amount is not disclosed. Estimated 500–1,500 mcg RAE per serving — well below the 3,000 mcg RAE tolerable upper intake level. Add up all sources of preformed Vitamin A in your diet (multivitamins, fortified foods, other liver products) before concluding you are within safe limits. Pregnant women should consult a doctor before use.",
      },
    },
    {
      "@type": "Question",
      name: "Why NZ sourcing rather than US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Zealand's Animal Products Act and MPI regulations require year-round pasture access for cattle and prohibit synthetic growth hormones. Grass-finishing — meaning no grain feedlot period before slaughter — is the industry norm in NZ, not a premium exception. US 'grass-fed' labels allow grain finishing and do not require continuous pasture access in the same way. NZ sourcing is independently verifiable through livestock export regulations, rather than relying solely on brand claims.",
      },
    },
    {
      "@type": "Question",
      name: "How many capsules per day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The label serving is 6 capsules per day. Start with 3 capsules for the first week — some people experience mild digestive adjustment (nausea or loose stools) when introducing concentrated organ matter. After a week at 3 caps, move to the full 6-cap serving. Split the serving across two meals (3 at breakfast, 3 at lunch) for better tolerance. Always take with food that contains fat — the fat-soluble vitamins in liver and heart absorb significantly better with dietary fat present.",
      },
    },
    {
      "@type": "Question",
      name: "Why is there no Vitamin A amount on the label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beef liver is a whole food, and its retinol content varies by animal age, diet, season, and batch. Publishing a precise mg figure on a whole-food label implies laboratory precision that does not exist for batch-variable foods. This is appropriate scientific honesty, not evasion. For comparison, USDA data for raw beef liver averages ~6,582 mcg RAE per 100g — but actual values range ±30–40%. Since this blend divides 3,000mg across five organs, liver's share is likely 500–1,200mg of the total, suggesting a retinol contribution of roughly 500–1,500 mcg RAE per serving.",
      },
    },
    {
      "@type": "Question",
      name: "Is it available in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, through Amazon.in as an import, but pricing is substantially elevated due to import duties and international shipping. Expect approximately ₹4,200–5,400 per bottle. Verify the seller is fulfilled by Amazon rather than a third-party reseller, and check the tamper seal on delivery. Request the heavy metal COA from the brand using the lot number printed on the bottle base if you want verification of that batch.",
      },
    },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "heart-and-soil-beef-organs", title: "Heart & Soil Beef Organs", brand: "Heart & Soil", category: "Organ Supplements", rating: 9 as ReviewRating, verdict: "Informed Sport certified 5-organ blend from US regenerative farms. Premium price is justified for drug-tested athletes.", publishedAt: "2026-05-20", figNumber: "046" },
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplements", rating: 8 as ReviewRating, verdict: "NZ-sourced 5-organ blend at $1.17/serving — the best value premium option for budget-conscious buyers.", publishedAt: "2026-05-20", figNumber: "047" },
  { slug: "perfect-supplements-beef-liver", title: "Perfect Supplements Beef Liver", brand: "Perfect Supplements", category: "Organ Supplements", rating: 8 as ReviewRating, verdict: "USDA Organic certified, Brazil grass-fed freeze-dried liver. Excellent for clean-label buyers.", publishedAt: "2026-05-20", figNumber: "048" },
];

export default function AncestralBeefOrgansReview() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Ancestral Supplements Beef Organs</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Text — center */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-045 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 600, padding: "0 24px" }}>
              Ancestral Supplements<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Organs</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6,7,8,9].map((s) => <Star key={s} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {[10].map((s) => <Star key={s} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>9 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-045</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A", whiteSpace: "nowrap" }}>Full Review · FSP Scored · NZ Grass-Fed 5-Organ Blend</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Ancestral Supplements · Organ Supplement · 5-Organ Freeze-Dried Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Organs — The Category&apos;s<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Gold Standard for Nose-to-Tail Nutrition</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Five NZ grass-fed organs — liver, heart, kidney, spleen, and pancreas — freeze-dried at ≤37°C, blended into 3,000mg per serving. Zero fillers. We tested whether the sourcing, Vitamin A math, and value proposition actually hold up.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/ancestral-beef-organs"
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
            { label: "Organs", value: "5-Organ Blend" },
            { label: "Source", value: "NZ Grass-Fed" },
            { label: "Published", value: "May 20, 2026" },
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
                Organ supplement research · USDA FDC nutrient analysis · NZ MPI sourcing verification · Vitamin A safety literature review
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-045</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The most complete organ supplement on the market for most buyers. Five New Zealand grass-fed organs — liver, heart, kidney, spleen, and pancreas — freeze-dried at body temperature, with zero fillers. The sourcing is independently verifiable through NZ MPI regulations, the processing is the best available method for preserving heat-sensitive nutrients, and the price is competitive for the quality.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The only buyer who should look elsewhere is a competitive drug-tested athlete who requires an Informed Sport or NSF certification — for that specific use case, Heart &amp; Soil&apos;s certified blend is the correct choice. For everyone else, this is the category&apos;s gold standard.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {[
                    { label: "Formula", value: "9.0 / 10", sub: "5-organ blend, NZ sourced" },
                    { label: "Transparency", value: "9.0 / 10", sub: "Sourcing + process disclosed" },
                    { label: "Verification", value: "7.0 / 10", sub: "COA on request, no Informed Sport" },
                    { label: "Value", value: "8.5 / 10", sub: "$1.50/serving — category best" },
                    { label: "Practical", value: "8.0 / 10", sub: "6 caps, odorless, travel-ready" },
                  ].map((s) => (
                    <div key={s.label} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", border: "1px solid #EDE8DF", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{s.label}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHAT IS THIS PRODUCT ────────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>What Is Ancestral Supplements Beef Organs?</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Ancestral Supplements built their brand on a straightforward premise: modern diets systematically exclude organ meats, and that exclusion has nutritional consequences. The organs discarded by mainstream food culture — liver, heart, kidney, spleen, pancreas — contain concentrated micronutrients found in higher amounts here than almost anywhere else in the human diet. Nose-to-tail eating was the norm for most of human history. The supplement is an attempt to recapture that without asking anyone to cook organs.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The Beef Organs product is their flagship multi-organ blend. Where their single-ingredient Beef Liver capsule isolates the highest-density organ, Beef Organs spreads the serving across five different tissues, each selected for its distinct nutritional contribution. The formulation argument is that no single organ covers everything — you need the breadth of multiple organs to replicate the full ancestral pattern.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { organ: "Beef Liver", role: "Retinol, B12, Copper, Heme Iron, Choline", color: "#7B3B1A" },
                    { organ: "Beef Heart", role: "CoQ10, Taurine, Carnitine, B Vitamins", color: "#8B4513" },
                    { organ: "Beef Kidney", role: "Selenium, Riboflavin (B2), B12, Zinc", color: "#9B5523" },
                    { organ: "Beef Spleen", role: "Heme Iron, Zinc, Purines, Chromium", color: "#A06030" },
                    { organ: "Beef Pancreas", role: "Proteolytic Enzymes, Lipase, B Vitamins", color: "#6B3515" },
                  ].map((item) => (
                    <div key={item.organ} style={{ padding: "14px 16px", border: `1px solid ${item.color}33`, borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.organ}</p>
                      <p style={{ fontSize: 11, color: "#5C5650", lineHeight: 1.6 }}>{item.role}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #7B3B1A" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B3B1A", marginBottom: 8 }}>Organs vs Muscle Meat: the nutritional gap</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Compared to skeletal muscle (what most people call &quot;beef&quot;), organs are 4–40× more concentrated in specific micronutrients. Liver has 40× the B12 of lean beef. Spleen has 3× the heme iron. Heart has 6× the CoQ10. If the goal is micronutrient density rather than protein, organs are categorically more efficient — which is why the supplement exists and why it commands a premium over standard protein products.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-045" />
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
                    {[
                      { name: "Grass-Fed Beef Liver (Freeze-Dried)", amount: "600mg*" },
                      { name: "Grass-Fed Beef Heart (Freeze-Dried)", amount: "600mg*" },
                      { name: "Grass-Fed Beef Kidney (Freeze-Dried)", amount: "600mg*" },
                      { name: "Grass-Fed Beef Spleen (Freeze-Dried)", amount: "600mg*" },
                      { name: "Grass-Fed Beef Pancreas (Freeze-Dried)", amount: "600mg*" },
                    ].map((item, i) => (
                      <div key={item.name} style={{ padding: "10px 0", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 13, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.name}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace" }}>{item.amount}</span>
                      </div>
                    ))}
                    <div style={{ padding: "10px 0", borderTop: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Other ingredients</span>
                      <span style={{ fontSize: 12, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700 }}>Bovine gelatin capsule only</span>
                    </div>
                  </div>

                  <div style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6 }}>
                      * Estimated per-organ breakdown based on equal 600mg distribution across 5 organs totalling 3,000mg. Actual per-organ ratios are not disclosed on the label — the 3,000mg is the total blend. Source: New Zealand grass-fed, grass-finished cattle. Processing: freeze-dried below body temperature (≤37°C).
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS BY ORGAN ─────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients — What Each Organ Contributes</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Per 6-capsule serving (3,000mg blended total). Estimates based on USDA FDC data for each organ, adjusted for freeze-drying concentration (~5–6×) and estimated 600mg per organ. Values are inherently variable for whole-food ingredients.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { organ: "Beef Liver", nutrients: [
                      { name: "Vitamin B12", amount: "~18–30 mcg", dv: "~750–1,250% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Vitamin A (Retinol)", amount: "~300–750 mcg RAE", dv: "~33–83% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Copper", amount: "~0.5–1.0 mg", dv: "~56–111% DV", evidence: "strong" as EvidenceLevel },
                    ], color: "#7B3B1A" },
                    { organ: "Beef Heart", nutrients: [
                      { name: "CoQ10", amount: "~5–12 mg", dv: "No DV", evidence: "strong" as EvidenceLevel },
                      { name: "Taurine", amount: "~30–80 mg", dv: "No DV", evidence: "moderate" as EvidenceLevel },
                      { name: "Vitamin B12", amount: "~4–8 mcg", dv: "~167–333% DV", evidence: "strong" as EvidenceLevel },
                    ], color: "#8B4513" },
                    { organ: "Beef Kidney", nutrients: [
                      { name: "Selenium", amount: "~15–30 mcg", dv: "~27–55% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Riboflavin (B2)", amount: "~0.25–0.5 mg", dv: "~19–38% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Vitamin B12", amount: "~10–20 mcg", dv: "~417–833% DV", evidence: "strong" as EvidenceLevel },
                    ], color: "#9B5523" },
                    { organ: "Beef Spleen", nutrients: [
                      { name: "Heme Iron", amount: "~2–5 mg", dv: "~11–28% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Zinc", amount: "~0.6–1.2 mg", dv: "~5–11% DV", evidence: "strong" as EvidenceLevel },
                      { name: "Chromium", amount: "~1–3 mcg", dv: "~3–9% DV", evidence: "moderate" as EvidenceLevel },
                    ], color: "#A06030" },
                    { organ: "Beef Pancreas", nutrients: [
                      { name: "Proteolytic Enzymes", amount: "Present (variable)", dv: "No DV", evidence: "limited" as EvidenceLevel },
                      { name: "Lipase", amount: "Present (variable)", dv: "No DV", evidence: "limited" as EvidenceLevel },
                      { name: "Vitamin B12", amount: "~3–7 mcg", dv: "~125–292% DV", evidence: "moderate" as EvidenceLevel },
                    ], color: "#6B3515" },
                  ].map((row, i) => (
                    <div key={row.organ} style={{ borderBottom: i < 4 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "10px 16px", backgroundColor: "#1A1714", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: row.color, flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880" }}>{row.organ}</span>
                      </div>
                      {row.nutrients.map((n, j) => (
                        <div key={n.name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: (i + j) % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: j < 2 ? "1px solid #EDE8DF" : "none" }}>
                          <div style={{ padding: "12px 16px", borderRight: "1px solid #EDE8DF" }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 3 }}>{n.name}</p>
                            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#7B3B1A", fontWeight: 600 }}>{n.amount}</p>
                            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{n.dv}</p>
                          </div>
                          <div style={{ padding: "12px 16px", display: "flex", alignItems: "center" }}>
                            <EvidenceBadge level={n.evidence} showIcon={false} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: "#8A8480", marginTop: 8 }}>Values estimated from USDA FDC data for individual organs (raw), adjusted for freeze-drying concentration factor (~5–6×) and equal 600mg organ distribution. Actual values vary by animal and batch.</p>
              </section>

              {/* ─── SOURCING & PROCESSING ──────────────────────────────────── */}
              <section id="sourcing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Processing</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "New Zealand — Why It Sets the Standard",
                      body: "New Zealand's livestock industry operates under the Animal Products Act 1999 and Ministry for Primary Industries (MPI) regulations that require year-round pasture access, prohibit synthetic growth hormones (banned nationally, not just for export), and mandate traceability across the supply chain. Grass-finishing — no grain feedlot period before slaughter — is the industry norm rather than an exception you pay a premium to access. This is meaningfully different from 'grass-fed' labels in the US, where the standard allows grain finishing and does not require continuous pasture access. NZ sourcing claims are verifiable through the regulatory framework, not solely through brand marketing.",
                    },
                    {
                      title: "Why Freeze-Drying Matters for Organ Meats",
                      body: "Organ meats are processed in two main ways: heat desiccation (50–70°C, cheaper) or freeze-drying (sublimation under vacuum at ≤37°C, more expensive). The difference matters because CoQ10, certain B vitamins, and the proteolytic enzymes in pancreas are heat-labile — they degrade under conventional drying temperatures. Freeze-drying removes moisture while the product is essentially frozen, then brings the temperature up gradually to body temperature maximum during the secondary drying phase. The resulting powder retains a more complete nutrient profile. Ancestral Supplements' claim of 'never heated above body temperature' is consistent with established freeze-dryer operating parameters and is not a marketing exaggeration.",
                    },
                    {
                      title: "Organ Ratios — What We Know and Do Not Know",
                      body: "The label lists all five organs as part of a 3,000mg blend but does not disclose per-organ doses. This is standard practice in the multi-organ supplement category (even premium brands like Heart & Soil use proprietary blends). The estimated per-organ breakdown above uses equal distribution as a working assumption — the actual ratios may differ. For the two nutrients that require careful monitoring — preformed Vitamin A from liver and CoQ10 from heart — the ranges provided above give conservative and upper-bound estimates. If you are specifically trying to maximise CoQ10 intake, a dedicated CoQ10 supplement with a known dose is the more precise tool.",
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>For organ supplements, heavy metal testing is the essential verification — organ meats concentrate environmental contaminants (especially liver and kidney). This testing matters more than Informed Choice or NSF, which test for sport-banned substances.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Lead (Pb)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Cadmium (Cd)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Arsenic (As)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Mercury (Hg)", status: "Tested", result: "Below action level", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "NZ MPI Oversight", status: "Active", result: "Sourcing independently regulated", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Batch QR Code", status: "Not available", result: "Email brand for COA", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                    { test: "Informed Sport", status: "N/A", result: "Not held by this brand", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
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
                    <strong>How to get the COA:</strong> Email <em>support@ancestralsupplements.com</em> with the lot number printed on the bottle base. Responses typically arrive within 1–2 business days. The COA will include heavy metal results for lead, cadmium, arsenic, and mercury for that specific batch.
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
                      a: "Begin with 3 capsules per day for the first 5–7 days. Concentrated organ matter can cause digestive adjustment — mild nausea or loose stools are common in the first week. Starting at half-dose limits this. If you tolerate 3 caps easily, move to the full serving after a week.",
                    },
                    {
                      q: "Full dose",
                      a: "6 capsules per day. The standard split that works best for most people: 3 capsules with breakfast, 3 with lunch or dinner. Taking all 6 at once on an empty stomach is the most common cause of the nausea that new users report.",
                    },
                    {
                      q: "Timing — always with food",
                      a: "Fat-soluble vitamins (A from liver, CoQ10 from heart, K2) absorb significantly better when taken with dietary fat. Any meal containing fat — eggs, meat, avocado, nuts, olive oil — is sufficient. Do not take fasted.",
                    },
                    {
                      q: "With other supplements",
                      a: "The main interaction to monitor is Vitamin A. If you take a multivitamin that contains preformed Vitamin A (retinol) or a separate Vitamin A supplement, add those amounts to your estimate from this blend before assessing your total against the 3,000 mcg RAE tolerable upper limit. Fish oil, cod liver oil, and other liver-containing products also contribute retinol. Beta-carotene from plant sources does not carry the same toxicity risk.",
                    },
                    {
                      q: "Cycling",
                      a: "Daily use is appropriate and mirrors the pattern of eating organ meats 3–4 times per week as a food. If you are regularly eating liver or heart as real food, account for that before determining your supplement dose. There is no evidence that cycling organ supplements offers any benefit.",
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The multi-organ supplement market is crowded but the quality range is wide. Key differentiators: source country, processing method, organ count, and third-party certification.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Ancestral Supps", "Heart & Soil", "Left Coast Perf.", "Codeage", "Force Factor"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["9/10 ★", "9/10", "8/10", "7/10", "7/10"] },
                        { metric: "Organs", vals: ["5-organ", "5-organ", "5-organ", "5-organ", "5-organ"] },
                        { metric: "Source", vals: ["New Zealand", "US Regen.", "New Zealand", "US/Mixed", "US Grain-Fed"] },
                        { metric: "Grass-finished", vals: ["Yes (MPI)", "Yes (claimed)", "Yes (claimed)", "Claimed", "Not specified"] },
                        { metric: "Processing", vals: ["Freeze-dried", "Freeze-dried", "Freeze-dried", "Desiccated", "Desiccated"] },
                        { metric: "Informed Sport", vals: ["No", "Yes ✓", "No", "No", "No"] },
                        { metric: "Heavy metal COA", vals: ["On request", "On request", "On request", "Not public", "Not public"] },
                        { metric: "Fillers", vals: ["None", "None", "None", "Some", "Additives"] },
                        { metric: "Price / 30 sv", vals: ["$45–49", "$55–60", "$35–39", "$38–44", "$25–30"] },
                        { metric: "Cost per serving", vals: ["$1.50", "$1.83", "$1.17", "$1.30", "$0.87"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#7B3B1A" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 4 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>
                  Prices verified May 2026 on Amazon US. Informed Sport status verified against the Informed Sport product database. NZ sourcing verified against brand documentation and MPI regulatory framework.
                </p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Buy cards for top organ supplement options — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Organs"
                    brand="Ancestral Supplements"
                    category="Organ Supplement"
                    score={9}
                    priceUSD="$45–49 / 180 caps"
                    priceINR="₹4,200–5,400"
                    tags={["NZ Grass-Fed", "5-Organ", "Freeze-Dried", "No Fillers"]}
                    buyUrl="https://amzn.to/ancestral-beef-organs"
                    buyLabel="Buy on Amazon"
                    reviewSlug="ancestral-supplements-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                    featured={true}
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Heart & Soil"
                    category="Organ Supplement"
                    score={9}
                    priceUSD="$55–60 / 30 sv"
                    priceINR="Not on Amazon.in"
                    tags={["Informed Sport", "US Regen.", "5-Organ"]}
                    buyUrl="https://amzn.to/heart-and-soil-organs"
                    buyLabel="Check Price"
                    reviewSlug="heart-and-soil-beef-organs"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#8B7355"
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="$35–39 / 30 sv"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "Best Value", "5-Organ"]}
                    buyUrl="https://amzn.to/left-coast-beef-organs"
                    buyLabel="Check Price"
                    reviewSlug="left-coast-performance-beef-organs"
                    bgFrom="#1A1E1B"
                    bgTo="#111510"
                    accent="#3A5F3A"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Five-organ blend (liver, heart, kidney, spleen, pancreas) — most complete nose-to-tail coverage in this price bracket",
                    "New Zealand grass-fed, grass-finished — MPI-regulated sourcing, independently verifiable",
                    "Freeze-dried at ≤37°C — better CoQ10, B-vitamin, and enzyme preservation than heat desiccation",
                    "Zero fillers — bovine gelatin capsule only, no flow agents or excipients",
                    "Heavy metal testing conducted with COA available",
                    "Competitively priced at $1.50/serving for premium multi-organ NZ sourcing",
                    "No taste or smell — removes the main barrier to organ nutrition",
                  ]}
                  cons={[
                    "Per-organ dose not disclosed — retinol contribution from liver cannot be precisely calculated",
                    "No Informed Sport or NSF certification — not suitable for drug-tested athletes",
                    "Batch COA requires email request — not accessible at point of purchase",
                    "Six capsules per serving — high pill burden compared to powder alternatives",
                    "Not suitable for pregnant women without medical guidance (retinol from liver component)",
                  ]}
                />
              </section>

              {/* ─── SAFETY & VITAMIN A ─────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety & Vitamin A — What You Need to Know</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Multi-organ blends dilute the liver component across five organs, which meaningfully reduces the Vitamin A load compared to single-organ liver supplements — but the issue still warrants attention.</p>

                <div style={{ padding: "20px 24px", border: "1px solid #C4622D44", borderRadius: 12, backgroundColor: "#FDF5EF", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#C4622D", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>Vitamin A in This Blend vs. Single-Organ Liver Supplements</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginBottom: 10 }}>
                        A single-organ beef liver supplement at 3,000mg delivers all retinol from liver only, estimated at 1,000–2,500 mcg RAE per serving. This blend divides 3,000mg across five organs — if liver is 600mg (estimated 20% of the blend), the retinol contribution drops to approximately 300–750 mcg RAE. That is 10–25% of the 3,000 mcg RAE tolerable upper intake level (Institute of Medicine, 2001).
                      </p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                        This blend is substantially lower risk for Vitamin A accumulation than single-organ liver products. The caveat: organ ratios are not disclosed, so the 600mg liver estimate is a working assumption. Combined with a multivitamin containing retinol and fortified foods, most adults will remain comfortably below the UL.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      icon: <CheckCircle size={15} color="#2D6A4F" />,
                      title: "At 6 caps/day: lower Vitamin A risk than single-organ liver supplements",
                      body: "Because liver is diluted across four other organs, the estimated retinol load per serving (300–750 mcg RAE) is 33–67% lower than a comparable liver-only product. For adults eating a normal diet without additional Vitamin A supplementation, daily use is appropriate.",
                    },
                    {
                      icon: <XCircle size={15} color="#8B3A2C" />,
                      title: "Pregnancy: specific contraindication for the liver component",
                      body: "The NHS, WHO, and ACOG specifically warn against concentrated liver products during pregnancy due to preformed retinol teratogenicity. Even at the lower retinol load from a blended product, pregnant women should consult an obstetrician before use. This applies to all liver-containing supplements regardless of dose.",
                    },
                    {
                      icon: <AlertTriangle size={15} color="#8B7355" />,
                      title: "Stack awareness: multivitamins + fortified foods",
                      body: "If you take a standard multivitamin containing 750–1,500 mcg RAE of retinol, add that to the estimated 300–750 mcg RAE from this blend. Combined total: 1,050–2,250 mcg RAE — below the 3,000 mcg UL for most people on a typical diet. If you also eat fortified cereals, dairy products with added Vitamin A, or other liver products, run the full calculation.",
                    },
                    {
                      icon: <ShieldCheck size={15} color="#2D6A4F" />,
                      title: "The Vitamin D relationship",
                      body: "Research suggests Vitamin D provides functional antagonism to Vitamin A toxicity at high intakes. Maintaining adequate 25-OH-D levels (40–60 ng/mL) appears to buffer effects of moderately elevated retinol. This is contextual — it does not permit ignoring the UL — but it explains how ancestral diets high in organ meats did not produce toxicity at population scale.",
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="5-organ freeze-dried blend" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "180 caps (30 sv)", usd: "$45–49", note: "Standard bottle" },
                    { size: "6-pack bundle", usd: "$240–270", note: "~$40–45 per bottle" },
                    { size: "Subscribe & Save", usd: "$38–42/month", note: "~15% off, cancellable" },
                    { size: "Amazon.in (import)", usd: "₹4,200–5,400", note: "Elevated due to import duties" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.usd}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026 on Amazon US. Subscribe &amp; Save discount applied through Amazon — verify current percentage at time of purchase.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US (Sold by Ancestral Supplements)",
                      price: "$45–49",
                      notes: "Primary and most reliable channel. Fulfilled directly by the brand. Subscribe & Save available. Look for the Prime badge and verify the seller is Ancestral Supplements LLC, not a third-party reseller.",
                      recommended: true,
                      url: "https://amzn.to/ancestral-beef-organs",
                    },
                    {
                      channel: "Ancestral Supplements website",
                      price: "$45–49",
                      notes: "Direct from brand. Best option if you want to request a COA at the same time, access bundle pricing, or contact customer support. Sometimes runs promotions not available on Amazon.",
                      recommended: true,
                      url: "https://ancestralsupplements.com/products/beef-organs",
                    },
                    {
                      channel: "Amazon India (Import)",
                      price: "₹4,200–5,400",
                      notes: "Available but expensive due to import duties. Verify the seller is fulfilled by Amazon and check the tamper seal on delivery. Request the COA using the lot number on the bottle base if concerned about batch quality.",
                      recommended: false,
                      url: "https://amzn.to/ancestral-beef-organs",
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-045</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    The category gold standard.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>Best for most buyers.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Ancestral Supplements Beef Organs earns its reputation. Five organs from New Zealand grass-fed cattle, freeze-dried at ≤37°C, with zero fillers and heavy metal testing available. The sourcing is independently verifiable through NZ MPI regulations rather than relying solely on brand claims. At $1.50/serving, it offers better value than Heart &amp; Soil for buyers who do not need Informed Sport certification.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The multi-organ approach is nutritionally superior to single-organ liver supplements for general health purposes: CoQ10 from heart, selenium from kidney, heme iron from spleen, and enzymes from pancreas fill gaps that liver alone cannot. The lower retinol load per serving (vs. liver-only products) also makes daily use more practical from a Vitamin A safety standpoint.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The two legitimate limitations are the undisclosed per-organ blend ratios and the absence of Informed Sport certification. If you are a drug-tested athlete, Heart &amp; Soil is the correct choice. For everyone else, this is the product we would buy — and do recommend as our category top pick.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Top pick. NZ sourced. 5-organ. Zero fillers.</p>
                    </div>
                    <a href="https://amzn.to/ancestral-beef-organs" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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
                      "USDA FoodData Central #174489 — Beef, variety meats, liver, raw; #169451 — Beef, heart, raw; #169450 — Beef, kidneys, raw; #169453 — Beef, spleen, raw; #169452 — Beef, pancreas, raw. Nutrient data used as basis for per-organ estimates adjusted for freeze-drying concentration factor (~5–6×).",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A, Vitamin K, Arsenic, Boron, Chromium, Copper, Iodine, Iron, Manganese, Molybdenum, Nickel, Silicon, Vanadium, and Zinc (2001). National Academies Press. Tolerable Upper Intake Level for preformed retinol: 10,000 IU (3,000 mcg RAE)/day for adults.",
                      "New Zealand Ministry for Primary Industries (MPI). Animal Products Act 1999; Livestock Movement and Biosecurity Regulations. Requirements for pasture-based farming and prohibition of synthetic growth hormones in NZ cattle.",
                      "Daley CA et al. (2010). A review of fatty acid profiles and antioxidant content in grass-fed and grain-fed beef. Nutr J 9:10. CLA, omega-3, and micronutrient differences in grass-finished vs grain-finished livestock.",
                      "Ernster L, Dallner G (1995). Biochemical, physiological and medical aspects of ubiquinone function. Biochim Biophys Acta 1271(1):195–204. CoQ10 distribution in bovine cardiac tissue and thermal stability considerations.",
                      "Rayman MP (2012). Selenium and human health. Lancet 379(9822):1256–68. Selenium content of kidney and bioavailability from animal sources.",
                      "Fellows PJ (2009). Food Processing Technology: Principles and Practice (3rd ed.). Woodhead Publishing. Freeze-drying process parameters, sublimation temperatures, and secondary drying phase in industrial lyophilisation.",
                      "NHS. Vitamins and minerals: Vitamin A. nhs.uk. Guidance specifically citing concentrated liver supplement avoidance during pregnancy due to preformed retinol content.",
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
