import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, AlertTriangle, Star } from "lucide-react";
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
  title: "Codeage Beef Organs Review (2026): Worth Buying?",
  description:
    "Codeage Beef Organs review: Non-GMO Verified, 5-organ blend, 4-capsule serving, undisclosed sourcing, no heavy metal COA. FSP analysis at $0.83/serving. Rated 7/10.",
  alternates: { canonical: "/reviews/codeage-beef-organs" },
  openGraph: {
    title: "Codeage Beef Organs Review (2026): Worth Buying?",
    description:
      "Codeage's beef organ capsules — Non-GMO certified but sourcing country undisclosed. Is the premium pricing justified? Our full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/codeage-beef-organs",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "why-nongmo", label: "Non-GMO in Context" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "nutrients", label: "Key Nutrients" },
  { id: "sourcing", label: "Sourcing & Certifications" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety Notes" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.5,
      notes:
        "Five-organ blend: beef liver, heart, kidney, spleen, and pancreas. Total 3,000mg per 4-capsule serving. The organ selection is comprehensive and matches the best multi-organ products. Deductions: (1) individual organ doses are proprietary — no disclosure of how the 3g is split across five tissues; (2) the 4-capsule serving is a genuine usability advantage over 6-capsule competitors, but without dose transparency the retinol contribution from the liver fraction cannot be calculated.",
    },
    {
      pillar: "transparency",
      score: 7.0,
      notes:
        "Codeage clearly labels Non-GMO Verified and Certified Grass-Fed claims. The company does not publicly disclose the country of origin for their beef sourcing — labelled 'grass-fed' without specifying whether US, NZ, Argentine, or Brazilian origin. COA data is not prominently published. For a premium-priced supplement, sourcing opacity is a meaningful concern. Claims of 'pasture-raised' and 'grass-finished' are present on packaging but not independently verified.",
    },
    {
      pillar: "verification",
      score: 6.5,
      notes:
        "Non-GMO Project Verified certification is legitimate and batch-verifiable. However, Non-GMO verification does not test for heavy metals, pathogen contamination, or organ potency. No Informed Sport, NSF Certified for Sport, or equivalent certification. No independently published heavy metal COA found at time of review. The absence of third-party purity testing is the primary verification weakness.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "At approximately $50/bottle (60 servings at 4 caps), this is $0.83/serving — significantly higher than Left Coast Performance ($0.39) and Forest Leaf ($0.31) without a clear sourcing or certification premium to justify the gap. Non-GMO Verified is a relatively low bar for this price. For comparable spend, Ancestral Supplements provides superior sourcing transparency. Value score is pulled down by the pricing-to-transparency mismatch.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Four capsules per serving is a practical dose — lower than the six-capsule count of Ancestral and Heart & Soil. Easy to split across meals (2 caps morning, 2 caps evening). Capsules are bovine gelatin, consistent with organ supplement category norms. Well-tolerated in most users. Freeze-dried and shelf-stable. Widely available on Amazon with consistent supply.",
    },
  ],
  flags: [
    { type: "green", label: "Non-GMO Project Verified", detail: "Third-party certification for GMO-free sourcing, batch-verifiable at nongmoproject.org." },
    { type: "green", label: "5-organ nose-to-tail blend", detail: "Liver, heart, kidney, spleen, and pancreas in one serving." },
    { type: "green", label: "4-capsule serving size", detail: "Lower pill burden than 6-capsule competitors — easier to split across day." },
    { type: "green", label: "Gluten-free, dairy-free", detail: "Multiple allergen exclusions confirmed. Suitable for paleo and carnivore protocols." },
    { type: "red", label: "Sourcing country undisclosed", detail: "Grass-fed claim with no country of origin specified. Significant transparency gap for a premium product.", deduction: 0.5 },
    { type: "red", label: "No heavy metal COA available", detail: "Organ meats concentrate environmental contaminants. No independent heavy metal testing results published.", deduction: 0.5 },
    { type: "red", label: "Proprietary blend — no organ dose disclosure", detail: "Cannot determine retinol contribution from liver fraction. Vitamin A safety calculation impossible.", deduction: 0.3 },
  ],
  claimAudit: [
    { claim: "\"Grass-fed and pasture-raised\"", verdict: "context-dependent", evidence: "limited", notes: "Claim is made without country of origin or independent certification (e.g., AGA Certified Grass-Fed, PCO Certified 100% Grassfed). 'Grass-fed' without these specifics can apply to cattle that receive minimal pasture time or grass supplementation alongside grain finishing. Non-GMO Verified does not verify grass-fed claims." },
    { claim: "\"Non-GMO Verified\"", verdict: "supported", evidence: "strong", notes: "Non-GMO Project Verification is a legitimate third-party certification with standardised criteria. The claim is batch-verifiable. It confirms absence of GMO ingredients — it does not confirm sourcing quality, potency, or heavy metal safety." },
    { claim: "\"Contains all five major organs\"", verdict: "supported", evidence: "strong", notes: "The supplement facts panel lists beef liver, heart, kidney, spleen, and pancreas as ingredients. The claim is factually accurate. Individual organ weights are not disclosed (proprietary blend)." },
    { claim: "\"Supports immune function\"", verdict: "context-dependent", evidence: "limited", notes: "The zinc, B12, and selenium in a multi-organ blend have established roles in immune cell function. The claim is mechanistically sound at adequate dietary doses. Whether the dose in 3g of mixed organ tissue delivers clinically meaningful immune support is unproven in this form." },
    { claim: "\"Hormone-free and antibiotic-free\"", verdict: "context-dependent", evidence: "limited", notes: "Claim is consistent with grass-fed/pasture-raised positioning but no independent certification is cited. USDA Organic would verify this claim; Non-GMO Verified does not." },
  ],
  valueMetric: {
    pricePerServing: 0.83,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.28,
    categoryAvgPricePerGram: 0.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/codeage-beef-organs#review",
  name: "Codeage Beef Organs — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Codeage Beef Organs using the Fitlab Scoring Protocol. Analysis covers the 5-organ blend, Non-GMO Verified certification, undisclosed sourcing country, absence of heavy metal COA, and value at $0.83/serving.",
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
    name: "Codeage Beef Organs",
    brand: { "@type": "Brand", name: "Codeage" },
    category: "Organ Supplement",
    description: "5-organ freeze-dried blend. Non-GMO Project Verified. Grass-fed claim without country of origin disclosure.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "49.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4wUtzqk",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does Codeage source their beef organs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Codeage labels their product as 'grass-fed and pasture-raised' but does not publicly disclose the country of origin at time of review. Unlike Ancestral Supplements (New Zealand, batch-traceable) or Heart & Soil (named US regenerative farms), Codeage's supply chain is opaque. If sourcing origin is important to you, this is a material gap.",
      },
    },
    {
      "@type": "Question",
      name: "Does Codeage Beef Organs have heavy metal testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No independently published heavy metal COA was found at time of review. Organ meats — particularly kidney and liver — can concentrate environmental contaminants (cadmium, lead, arsenic). For any organ supplement, heavy metal testing and published results are a meaningful safety consideration. Ancestral Supplements and Heart & Soil publish COA data; Codeage does not prominently do so.",
      },
    },
    {
      "@type": "Question",
      name: "Is Codeage Beef Organs Non-GMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Codeage Beef Organs is Non-GMO Project Verified. This is a legitimate third-party certification confirming the absence of GMO ingredients. It does not verify sourcing country, heavy metal levels, or organ potency. The certification is a positive data point but a relatively low bar for a premium organ supplement.",
      },
    },
    {
      "@type": "Question",
      name: "How many capsules per serving of Codeage Beef Organs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 capsules per serving, delivering 3,000mg (3g) of mixed organ blend. This is a lower pill burden than Ancestral Supplements and Heart & Soil (both 6 capsules for 3g). Some users split the 4 capsules into 2 caps twice daily with meals. 60 servings per bottle at the standard 4-cap dose.",
      },
    },
    {
      "@type": "Question",
      name: "How does Codeage compare to Ancestral Supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ancestral Supplements is the stronger choice. Ancestral Supplements provides full sourcing transparency (NZ batch-traceable), published heavy metal COA, and similar pricing with single-organ products that allow precise retinol monitoring. Codeage's 5-organ blend is marginally more convenient (4 caps vs 6), but the sourcing opacity and lack of independent purity testing are material weaknesses at the $0.83/serving price point.",
      },
    },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "NZ-sourced 5-organ blend at $0.39/serving. Better sourcing transparency than Codeage at less than half the price.", publishedAt: "2026-05-27", figNumber: "02" },
  { slug: "ancestral-supplements-beef-liver", title: "Ancestral Supplements Beef Liver", brand: "Ancestral Supplements", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "Single ingredient, NZ freeze-dried, heavy metal COA available. The transparency benchmark for the category.", publishedAt: "2026-05-27", figNumber: "01" },
];

export default function CodeageBeefOrgansReview() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Codeage Beef Organs</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Text — center */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-051 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Codeage<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Organs</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div className="hidden sm:flex" style={{ position: "absolute", right: "6%", bottom: 0, width: 130, height: 160, alignItems: "flex-end", justifyContent: "center" }}>
            <img src="/products/Codeage.webp" alt="Codeage Beef Organs" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-051</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · Non-GMO Verified Organ Blend</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Codeage · Organ Supplement · 5-Organ Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Organs — Non-GMO Certified,<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>But Sourcing Stays Hidden</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Codeage brings Non-GMO Project Verified to the organ supplement space — a legitimate third-party certification. But at $0.83/serving with no sourcing country disclosed and no heavy metal COA, the premium is hard to justify against transparent competitors.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/4wUtzqk"
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
            { label: "Form", value: "Capsules (240 ct)" },
            { label: "Serving", value: "4 caps / 3,000mg" },
            { label: "Certification", value: "Non-GMO Project Verified" },
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
                Organ supplement research · Supply chain transparency analysis · USDA FDC nutrient data
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-051</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Codeage Beef Organs is a mid-tier option in a competitive category. The Non-GMO Project Verified certification is legitimate, the 5-organ blend covers the right tissues, and 4 capsules is a genuine usability improvement over the 6-capsule competitors. The formula design is sound.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The problem: the price-to-transparency ratio does not hold up. At $0.83/serving, you can buy Left Coast Performance (NZ-sourced, $0.39) for less than half the price, or Ancestral Supplements (full NZ traceability, published COA, $1.50) for two dollars more. Codeage sits in an awkward middle — more expensive than the value leaders but lacking the sourcing depth of the premium tier.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {[
                    { label: "Formula", value: "7.5 / 10", sub: "5-organ, proprietary dose" },
                    { label: "Transparency", value: "7.0 / 10", sub: "Sourcing country hidden" },
                    { label: "Verification", value: "6.5 / 10", sub: "Non-GMO only, no COA" },
                    { label: "Value", value: "6.5 / 10", sub: "$0.83 hard to justify" },
                    { label: "Practical", value: "8.0 / 10", sub: "4 caps, easy to split" },
                  ].map((s) => (
                    <div key={s.label} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", border: "1px solid #EDE8DF", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{s.label}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── NON-GMO IN CONTEXT ─────────────────────────────────────── */}
              <section id="why-nongmo" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Non-GMO Verified — What It Actually Means</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Non-GMO Project Verified is a legitimate third-party certification from the Non-GMO Project, a US non-profit. It requires supply chain audits and product testing to confirm the absence of genetically modified organisms in the ingredients. For an organ supplement, this primarily means the cattle were not fed genetically modified grains — a meaningful distinction for buyers concerned about GMO exposure.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Codeage is one of the few organ supplement brands to obtain this certification. The butterfly seal on the label is batch-verifiable at nongmoproject.org. That&apos;s a genuine differentiator. The reason it earns a 7 rather than a 9 is not the certification itself — it is what the certification does not cover: sourcing country, heavy metal testing, or organ potency.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #7B3B1A" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B3B1A", marginBottom: 8 }}>The certification gap</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Non-GMO Verified tells you the cattle were not fed GMO feed. It does not tell you where the cattle were raised, whether they were grass-finished or grain-finished at slaughter, or whether the organs have been tested for lead, cadmium, or arsenic. For those questions, you need country of origin disclosure and a heavy metal COA — neither of which Codeage provides publicly.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-051" />
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
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#A89880" }}>Serving size: 4 capsules · Servings per container: 60</p>
                    </div>
                  </div>

                  <div style={{ padding: "0 20px", backgroundColor: "#F8F2E4" }}>
                    <div style={{ padding: "12px 0", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>Proprietary Blend (Beef Organs)</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace" }}>3,000mg</span>
                    </div>
                    {[
                      ["Beef Liver", "Included"],
                      ["Beef Heart", "Included"],
                      ["Beef Kidney", "Included"],
                      ["Beef Spleen", "Included"],
                      ["Beef Pancreas", "Included"],
                    ].map(([organ, status], i, arr) => (
                      <div key={organ} style={{ padding: "8px 0 8px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{organ}</span>
                        <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>{status} (dose undisclosed)</span>
                      </div>
                    ))}
                    <div style={{ padding: "8px 0", borderTop: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>Other ingredients</span>
                      <span style={{ fontSize: 12, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700 }}>Bovine gelatin (capsule)</span>
                    </div>
                  </div>

                  <div style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6 }}>
                      <strong style={{ color: "#5C5650" }}>Proprietary blend limitation:</strong> Individual organ doses are not disclosed. This means you cannot calculate your retinol intake from the liver fraction specifically. For safety-conscious buyers — particularly those tracking Vitamin A from multiple sources — this is a material transparency gap.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients — What the 5-Organ Blend Provides</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Estimated values for a 5-organ blend at 3,000mg total. Based on USDA FDC organ composition data — exact organ doses not disclosed by Codeage.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Retinol (Vitamin A)", source: "Beef liver", evidence: "strong" as EvidenceLevel, note: "The dominant nutrient concern in any liver-containing product. Without knowing the liver fraction dose, exact intake cannot be calculated. Estimated range: 400–1,800 mcg RAE depending on blend ratio." },
                    { nutrient: "Vitamin B12", source: "Liver, kidney", evidence: "strong" as EvidenceLevel, note: "Liver and kidney are the richest dietary B12 sources. A multi-organ blend at 3g delivers a meaningful B12 contribution, though less than a pure liver supplement." },
                    { nutrient: "CoQ10", source: "Beef heart", evidence: "moderate" as EvidenceLevel, note: "Beef heart is the highest dietary CoQ10 source. The heart fraction in a 5-organ blend contributes CoQ10 relevant for mitochondrial function and cardiac health. Dose unknown due to proprietary blend." },
                    { nutrient: "Heme Iron", source: "Liver, spleen", evidence: "strong" as EvidenceLevel, note: "Both liver and spleen are iron-dense organs. The spleen fraction specifically concentrates iron storage proteins. Heme iron absorption (15–35%) substantially exceeds non-heme iron (2–20%)." },
                    { nutrient: "Selenium", source: "Beef kidney", evidence: "strong" as EvidenceLevel, note: "Kidney is the richest dietary selenium source in beef. Critical for antioxidant defense (glutathione peroxidase) and thyroid function. The kidney fraction makes the multi-organ blend superior to liver alone for selenium." },
                    { nutrient: "Digestive Enzymes", source: "Beef pancreas", evidence: "moderate" as EvidenceLevel, note: "Pancreas contributes amylase, lipase, and protease — the same enzymes used in pancreatic enzyme replacement therapy. Whether supplemental doses in 3g of mixed organ meat provide clinically meaningful enzyme activity is unproven." },
                    { nutrient: "Zinc", source: "Multiple organs", evidence: "strong" as EvidenceLevel, note: "Multiple organ tissues contribute zinc. Heart, kidney, and liver all provide meaningful zinc concentrations. Relevant for immune function, testosterone synthesis, and wound healing." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 6 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>{row.nutrient}</p>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#7B3B1A", fontWeight: 600 }}>Source: {row.source}</p>
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
                <p style={{ fontSize: 11, color: "#8A8480", marginTop: 8 }}>Estimates based on USDA FDC organ composition data. Actual values vary by batch and organ dose ratio. Codeage does not disclose individual organ weights.</p>
              </section>

              {/* ─── SOURCING & CERTIFICATIONS ──────────────────────────────── */}
              <section id="sourcing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Certifications</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "Non-GMO Project Verified — what it covers",
                      body: "The Non-GMO Project Standard (v15) requires supply chain audits for GMO contamination at critical control points. For organ supplements, this means testing or verification that feed ingredients are non-GMO. The butterfly seal is batch-traceable at nongmoproject.org. This is a genuine third-party certification — not a self-declared claim.",
                    },
                    {
                      title: "Grass-fed claim — what is missing",
                      body: "Codeage describes their sourcing as 'grass-fed and pasture-raised.' No country of origin is stated. No independent grass-fed certification (American Grassfed Association, PCO Certified 100% Grassfed) is cited. Without these details, 'grass-fed' can apply to cattle that received minimal pasture time with grain finishing before slaughter. This is not an accusation — it is a transparency gap that buyers should be aware of.",
                    },
                    {
                      title: "What Non-GMO Verified does not cover",
                      body: "Non-GMO certification does not verify: country of origin, grass-finishing practices, antibiotic or hormone use, heavy metal contamination levels, or organ potency. For buyers who specifically want Non-GMO Verified, Codeage delivers. For buyers who want full supply chain transparency, the certification scope is too narrow at this price point.",
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>For organ supplements, heavy metal testing is the critical verification requirement. Liver and kidney concentrate environmental contaminants — published COA data is a basic safety expectation.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Non-GMO Verified", status: "Certified", result: "Third-party verified", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Lead (Pb)", status: "Not published", result: "No COA available", icon: "✗", color: "#8B3A2C", bg: "#F5E8E8" },
                    { test: "Cadmium (Cd)", status: "Not published", result: "No COA available", icon: "✗", color: "#8B3A2C", bg: "#F5E8E8" },
                    { test: "Arsenic (As)", status: "Not published", result: "No COA available", icon: "✗", color: "#8B3A2C", bg: "#F5E8E8" },
                    { test: "Gluten-Free", status: "Self-declared", result: "No third-party cert", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                    { test: "Informed Sport", status: "N/A", result: "Not certified", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
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
                    <strong>Comparison:</strong> Ancestral Supplements provides heavy metal COA on request (lead, cadmium, arsenic, mercury). Heart & Soil lists Informed Sport certification. Codeage&apos;s only third-party verification is Non-GMO Project — which does not test for heavy metals. For organ supplements where liver and kidney concentrate environmental contaminants, this gap is the most significant safety concern in the review.
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
                      q: "Recommended dose",
                      a: "4 capsules per day — the lowest serving size of any major 5-organ supplement. Take with food. A fat-containing meal (eggs, avocado, olive oil) improves absorption of fat-soluble vitamins A and K2.",
                    },
                    {
                      q: "Split dosing",
                      a: "2 capsules with breakfast and 2 with dinner. This is the most common user protocol and reduces any risk of gastrointestinal discomfort from concentrated organ meat. Most people tolerate 4 caps without splitting, but the option is there.",
                    },
                    {
                      q: "Starting out",
                      a: "Begin with 2 capsules daily for the first week if you are new to organ supplements. Concentrated organ meat can cause adjustment symptoms (mild nausea, loose stools) in sensitive individuals. This resolves in most cases within 5–7 days.",
                    },
                    {
                      q: "Tracking Vitamin A",
                      a: "Because individual organ doses are not disclosed, you cannot calculate exact retinol intake from this product. If you also take a multivitamin with Vitamin A, eat liver or fortified foods regularly, or take cod liver oil, track your total retinol intake from all sources against the 3,000 mcg RAE/day tolerable upper limit.",
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Codeage competes directly with Left Coast Performance on the multi-organ value tier and with Ancestral Supplements and Heart & Soil on the premium tier. At $0.83/serving it falls uncomfortably between both.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Brand", "Price/Serving", "Organs", "Sourcing", "Certification", "Score"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 0 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { brand: "Codeage ★", price: "$0.83", organs: "5", sourcing: "Undisclosed", cert: "Non-GMO Verified", score: "7/10", current: true },
                        { brand: "Left Coast Performance", price: "$0.39", organs: "5", sourcing: "NZ (named)", cert: "None", score: "8/10", current: false },
                        { brand: "Forest Leaf", price: "$0.31", organs: "5", sourcing: "Undisclosed", cert: "None", score: "7/10", current: false },
                        { brand: "Ancestral Supplements", price: "$1.50", organs: "1 (liver)", sourcing: "NZ traceable", cert: "Heavy metal COA", score: "8/10", current: false },
                        { brand: "Heart & Soil", price: "$1.83", organs: "5+", sourcing: "US Regenerative", cert: "Informed Sport", score: "9/10", current: false },
                      ].map((row, i) => (
                        <tr key={row.brand} style={{ backgroundColor: row.current ? "#FFF8F5" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: row.current ? "#7B3B1A" : "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: "1px solid #EDE8DF", fontWeight: row.current ? 700 : 400, whiteSpace: "nowrap" }}>{row.brand}</td>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: "1px solid #EDE8DF" }}>{row.organs}</td>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: "1px solid #EDE8DF" }}>{row.sourcing}</td>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: "1px solid #EDE8DF" }}>{row.cert}</td>
                          <td style={{ padding: "9px 14px", fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>
                  Prices verified May 2026 on Amazon US. Competitor data based on published label and website information.
                </p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Buy cards for the main organ supplements in this comparison — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Organs"
                    brand="Codeage"
                    category="Organ Supplement"
                    score={7}
                    priceUSD="~$50 / 240 caps"
                    priceINR="Not on Amazon.in"
                    tags={["Non-GMO Verified", "5-Organ Blend", "4 Caps/Serving"]}
                    buyUrl="https://amzn.to/4wUtzqk"
                    buyLabel="Buy on Amazon"
                    reviewSlug="codeage-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                    featured={true}
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="$23–26 / 60 sv"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Sourced", "5-Organ", "$0.39/Serving"]}
                    buyUrl="https://amzn.to/4nUmi5H"
                    buyLabel="Buy on Amazon"
                    reviewSlug="left-coast-performance-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Ancestral Supplements"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="$43–47 / 180 caps"
                    priceINR="₹3,800–4,800"
                    tags={["NZ Grass-Fed", "Freeze-Dried", "COA Available"]}
                    buyUrl="https://amzn.to/49RAlmU"
                    buyLabel="Buy on Amazon"
                    reviewSlug="ancestral-supplements-beef-liver"
                    image="ancestral-supplements-beefliv.webp"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Non-GMO Project Verified — legitimate third-party certification, batch-traceable",
                    "5-organ nose-to-tail blend in 4 capsules — lower pill burden than competitors",
                    "Gluten-free, dairy-free, no artificial additives",
                    "Widely available on Amazon with consistent supply",
                  ]}
                  cons={[
                    "Sourcing country not disclosed — 'grass-fed' claim unverifiable",
                    "No heavy metal COA published — kidney and liver concentrate contaminants",
                    "Proprietary blend — individual organ doses undisclosed, retinol cannot be calculated",
                    "Overpriced at $0.83/serving vs comparable competitors",
                  ]}
                />
              </section>

              {/* ─── SAFETY NOTES ───────────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety Notes</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The proprietary blend makes safety tracking harder for Codeage than for single-ingredient or fully disclosed multi-organ supplements.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      title: "Vitamin A — cannot be calculated precisely",
                      body: "The liver fraction in this blend is undisclosed. A blend weighted 60% toward liver would deliver significantly more retinol than one weighted 20%. Without this information, you cannot verify that daily retinol stays below the 3,000 mcg RAE tolerable upper limit (Institute of Medicine, 2001), especially if combining with a multivitamin or other liver sources.",
                    },
                    {
                      title: "Pregnancy — consult your doctor",
                      body: "Preformed Vitamin A (retinol) in excess is teratogenic. All liver-containing supplements are flagged in obstetric guidelines (NHS, WHO, ACOG). The proprietary blend makes this a more uncertain risk than transparent products. Pregnant women and those planning pregnancy should not take this product without a physician&apos;s guidance.",
                    },
                    {
                      title: "Heavy metals — unknown status",
                      body: "Kidney and liver concentrate environmental cadmium, lead, and arsenic from cattle feed and water sources. Codeage does not publish a heavy metal COA. This is not evidence of contamination — it is evidence of absent testing disclosure. For buyers in this category, this is the most significant safety consideration.",
                    },
                    {
                      title: "Hemochromatosis",
                      body: "Multi-organ blends with spleen and liver provide meaningful heme iron. Individuals with hemochromatosis or elevated ferritin should avoid regular organ supplement use or consult a physician. For healthy adults, dietary iron from organ supplements is safe within normal ranges.",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="mixed organ blend" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "240 caps (60 sv)", usd: "~$50", note: "Standard bottle" },
                    { size: "Subscribe & Save", usd: "~$42–45/mo", note: "~10–15% off via Amazon" },
                    { size: "vs Left Coast", usd: "$0.83 vs $0.39", note: "More than 2× per serving" },
                    { size: "vs Ancestral", usd: "$0.83 vs $1.50", note: "Mid-tier with less transparency" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.usd}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026 on Amazon US. Subscribe & Save availability varies — check current discount at time of purchase.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US",
                      price: "~$50",
                      notes: "Primary channel. Codeage is an Amazon-native brand with consistent availability. Check that the seller is Codeage directly or Amazon-fulfilled. Subscribe & Save available for approximately 10–15% off.",
                      recommended: true,
                      url: "https://amzn.to/4wUtzqk",
                    },
                    {
                      channel: "Codeage website (codeage.com)",
                      price: "~$50",
                      notes: "Direct from brand. Subscription bundles available. Use if you prefer to buy direct or have questions about ingredient sourcing (though public disclosure remains limited).",
                      recommended: true,
                      url: "https://www.codeage.com",
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
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <summary>{faq.name}</summary>
                      <p className="faq-answer">{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-051</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Competent formula. Questionable value.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>Transparency doesn&apos;t match the price.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Codeage Beef Organs is a competent product held back by sourcing opacity at a price that invites direct comparison to superior alternatives. The Non-GMO Verified certification is genuine, the 4-capsule serving is the category&apos;s lowest pill burden, and the 5-organ formula covers the right tissues. The product does what it says.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The problem is the gap between price and transparency. At $0.83/serving, Left Coast Performance delivers confirmed NZ sourcing for $0.39. Ancestral Supplements delivers full NZ traceability and a publishable heavy metal COA for $1.50. Codeage sits in the awkward middle: not cheap enough to dismiss transparency concerns, not transparent enough to justify the premium.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    Buy Codeage if Non-GMO Project Verified is a hard requirement and 4-capsule serving matters to you. Skip it if sourcing transparency, heavy metal testing, or value per dollar are priorities.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Non-GMO certified. Sourcing opacity. Mid-tier value.</p>
                    </div>
                    <a href="https://amzn.to/4wUtzqk" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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
                      "USDA FoodData Central — Beef organ composition data (liver, heart, kidney, spleen, pancreas). fdc.nal.usda.gov. Nutrient data used as basis for per-serving estimates.",
                      "Non-GMO Project Standard v15. Non-GMO Project, 2023. nongmoproject.org. Criteria and scope of Non-GMO Project Verified certification.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A (2001). National Academies Press. Tolerable Upper Intake Level for preformed retinol: 10,000 IU (3,000 mcg RAE)/day for adults.",
                      "Hallberg L, Hulthen L. Prediction of dietary iron absorption: an algorithm for calculating absorption and bioavailability of dietary iron. Am J Clin Nutr. 2000;71(5):1147–60. Heme vs non-heme iron absorption rates.",
                      "Rayman MP. Selenium and human health. Lancet. 2012;379(9822):1256–68. Selenium deficiency, kidney as dietary source.",
                      "Prasad AS. Zinc in human health: effect of zinc on immune cells. Mol Med. 2008;14(5–6):353–7. Zinc functions and organ supplement relevance.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ref}{" "}<a href={"https://scholar.google.com/scholar?q=" + encodeURIComponent(ref.split("(")[0].trim().substring(0,80))} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace" }}>↗</a></li>
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
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>Better Value & Better Transparency</h3>
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
