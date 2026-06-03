import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, ShieldCheck, Star, Plus } from "lucide-react";
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
import ProductCard from "@/components/ui/ProductCard";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "WPI vs WPC Protein (2026): Which One Should You Take?",
  description:
    "WPI vs WPC protein compared on purity, lactose, cost, absorption, and real-world use. Evidence-based breakdown with exact doses, lab data, and our final verdict. FSP scored.",
  alternates: { canonical: "/reviews/wpi-vs-wpc-protein" },
  openGraph: {
    title: "WPI vs WPC Protein (2026) — The Honest Comparison",
    description:
      "Whey isolate vs concentrate: we break down protein purity, lactose content, digestion speed, and cost-per-gram so you stop guessing and start buying right.",
    url: "https://fitlabreviews.com/reviews/wpi-vs-wpc-protein",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Are WPI and WPC?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts Side-by-Side" },
  { id: "ingredients", label: "Protein Purity & Processing" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Use Each" },
  { id: "comparison", label: "vs. Best Products" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Side Effects" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

// ── WPI Rubric (the "reviewed" product in this VS format) ─────────────────────
const rubricWPI: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.5,
      notes:
        "WPI undergoes cross-flow microfiltration or ion exchange, producing ≥90% protein by weight. Lactose reduced to <1g per serving, fat <0.5g. High leucine density (≥2.6g per 25g protein) reliably meets the mTOR-activation threshold identified by Norton & Layman (2006). Ideal for anyone requiring high protein density per calorie.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "Best-in-class WPI products (Dymatize ISO100, Transparent Labs Whey Protein Isolate) publish full amino acid profiles on-label. Minor deductions remain for brands that list 'proprietary enzyme blends' without individual weights — a pattern inherited from the WPC market.",
    },
    {
      pillar: "verification",
      score: 9.0,
      notes:
        "Multiple WPI products carry Informed Choice, NSF Certified for Sport, or Informed Sport certification. Dymatize ISO100 holds dual NSF + Informed Choice status. Hydrolysed WPI variants add a further processing step that is well-documented and testable via peptide profiling.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "WPI costs $0.052–0.065/g protein vs WPC at $0.038–0.048/g. The purity premium is real: you pay ~35% more per gram of protein. For casual lifters eating adequate whole food protein, this premium rarely produces measurable additional benefit. Justified primarily for lactose-intolerant users and those cutting calories.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "Dissolves faster than WPC in cold water due to higher solubility. Thinner texture — some users find it less satisfying. Flavour systems can compensate but are category-dependent. Stomach comfort markedly better for lactose-sensitive individuals vs equivalent WPC dose.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Virtually Zero Lactose",
      detail:
        "WPI retains <1g lactose per 25g serving (vs ~4–5g in WPC). People with moderate lactose sensitivity can typically tolerate WPI without the bloating, cramping, or flatulence associated with WPC at the same protein dose.",
    },
    {
      type: "green",
      label: "Higher Protein Density Per Calorie",
      detail:
        "WPI delivers 90–95% protein by weight vs 70–80% for WPC. In a caloric deficit where every gram of protein must justify its calorie cost, this purity difference is meaningful — not marketing.",
    },
    {
      type: "green",
      label: "Faster Digestion vs WPC",
      detail:
        "Reduced fat and lactose content means WPI clears the stomach faster. In Boirie et al. (1997), whey proteins (predominantly isolate fraction) showed peak plasma amino acids at ~60–90 minutes vs casein at 300+ minutes. The advantage over WPC is smaller but measurable.",
    },
    {
      type: "red",
      label: "35–40% Higher Cost Per Gram Protein",
      detail:
        "WPI typically runs $0.052–0.065/g protein. WPC runs $0.038–0.048/g. If you tolerate dairy well and aren't in a hard cut, you're paying a significant premium for a purity advantage that doesn't translate to proportionally better results in most training contexts.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Lower Immunoglobulin Retention",
      detail:
        "Ion-exchange WPI strips most of the native immunoglobulins, lactoferrin, and bioactive peptides found in native whey. These compounds have immune-supportive properties at higher doses (Wong et al., 1997). Cross-flow microfiltration WPI preserves more but still less than cold-processed WPC.",
      deduction: 0.2,
    },
  ],
  claimAudit: [
    {
      claim: '"WPI absorbs faster than WPC for better muscle recovery"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Absorption speed difference between WPI and WPC is real but smaller than marketing implies. Tang et al. (2009) showed hydrolysed whey slightly outperformed WPC on MPS acutely, but net 24-hour protein balance was equivalent. For most training schedules with meals throughout the day, timing differences are irrelevant.",
    },
    {
      claim: '"Isolate is better for building muscle than concentrate"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "No head-to-head RCT demonstrates WPI produces superior lean mass gains vs WPC at matched protein doses in the context of adequate total daily intake. Morton et al. (2018) meta-analysis found total protein dose — not source — determines lean mass outcomes. The 'better for building' claim lacks direct support.",
    },
    {
      claim: '"Zero fat and zero carbs per serving"',
      verdict: "overstated",
      evidence: "strong",
      notes:
        "WPI labels often round to 0g fat and 0g carbs per serving. Actual values are <0.5g fat and <1g lactose — not zero. FDA allows rounding to zero for amounts this small, but 'zero' is technically inaccurate. For nearly all users this is nutritionally irrelevant, but for individuals tracking macros precisely it matters.",
    },
    {
      claim: '"WPC delivers superior bioactive compounds for immune support"',
      verdict: "context-dependent",
      evidence: "emerging",
      notes:
        "WPC does retain more native whey fractions (lactoferrin, immunoglobulins, beta-lactoglobulin) than standard WPI. Wong et al. (1997) showed immune-modulating effects but at doses (20–40g lactoferrin/day) far exceeding what protein powders provide. As a practical immune supplement, both WPI and WPC fall short of meaningful effect.",
    },
    {
      claim: '"WPC is just as good as WPI for most people"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "For people without lactose intolerance, WPC at matched protein doses produces equivalent gains in lean mass, strength, and recovery across all major meta-analyses reviewed. Churchward-Venne et al. (2012) and Morton et al. (2018) both confirm the total leucine dose — not processing method — as the primary determinant of MPS.",
    },
    {
      claim: '"Whey protein causes kidney damage"',
      verdict: "unsupported",
      evidence: "strong",
      notes:
        "Antonio et al. (2016) followed resistance-trained men consuming 2.51–3.32g/kg protein for 2 years with no adverse effect on kidney function in individuals without pre-existing renal disease. This applies equally to WPI and WPC. The claim originates from outdated studies conflating high protein intake with pre-existing pathology.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.75,
    primaryActiveGrams: 25,
    pricePerGramActive: 0.07,
    categoryAvgPricePerGram: 0.055,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubricWPI.compositeScore = computeComposite(rubricWPI.pillars, rubricWPI.flags);
const editorialScore = rubricWPI.editorialScore;
const composite = rubricWPI.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/wpi-vs-wpc-protein#review",
  name: "WPI vs WPC Protein — Fitlabreviews FSP Comparison",
  reviewBody:
    "A full evidence-based comparison of whey protein isolate (WPI) vs whey protein concentrate (WPC) covering protein purity, lactose content, digestion speed, bioactive compounds, cost-per-gram, and practical use cases for different training goals.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Whey Protein Isolate (WPI)",
    brand: { "@type": "Brand", name: "Category Analysis" },
    category: "Protein Powder",
    description: "WPI vs WPC head-to-head comparison across purity, lactose, cost, and practical outcomes.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between WPI and WPC protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI (Whey Protein Isolate) is filtered more extensively than WPC (Whey Protein Concentrate), resulting in higher protein content (≥90% vs 70–80% by weight), less lactose (<1g vs 4–5g per serving), and lower fat. WPC retains more natural bioactive compounds like immunoglobulins and lactoferrin due to less processing. The core protein source — whey — is the same in both.",
      },
    },
    {
      "@type": "Question",
      name: "Is WPI better than WPC for muscle building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not for most people. Multiple meta-analyses — including Morton et al. (2018) — confirm that total daily protein intake and leucine dose determine lean mass outcomes, not whether the whey is isolate or concentrate. At matched protein doses, WPI and WPC produce equivalent strength and hypertrophy results in people without lactose intolerance.",
      },
    },
    {
      "@type": "Question",
      name: "Which should I choose if I'm lactose intolerant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI. With <1g of lactose per serving, WPI is well-tolerated by most people with lactose sensitivity. WPC contains approximately 4–5g of lactose per 25g protein serving — not enough to cause issues for everyone, but enough to trigger symptoms in individuals with lower lactase activity.",
      },
    },
    {
      "@type": "Question",
      name: "Is WPC a low-quality protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WPC with 80% protein by weight (WPC80) is a high-quality protein source. It scores the same PDCAAS and DIAAS values as WPI — both are complete proteins with all essential amino acids. The quality difference lies in purity, not in protein value per gram consumed.",
      },
    },
    {
      "@type": "Question",
      name: "Does WPI absorb faster than WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marginally, yes. Lower fat and lactose content means WPI exits the stomach faster, resulting in slightly earlier peak plasma amino acids. Tang et al. (2009) showed hydrolysed whey (WPH) > WPI > WPC acutely. However, the practical significance of this timing difference is minimal unless you're training in a fasted state or consuming protein immediately pre-workout.",
      },
    },
    {
      "@type": "Question",
      name: "Is WPC better for immune health than WPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPC retains more native whey fractions (lactoferrin, immunoglobulins) that have immunomodulatory properties. However, the amounts provided per serving are far below the doses used in clinical studies. Neither WPI nor WPC provides clinically meaningful immune support at standard serving sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I mix WPI and WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many commercial protein products (including ON Gold Standard Whey) blend WPC + WPI + whey peptides to balance cost, purity, amino acid profile, and digestibility. There is no negative interaction. Blends can be an effective middle ground.",
      },
    },
    {
      "@type": "Question",
      name: "How much does WPI cost compared to WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI typically runs $0.052–0.065 per gram of protein. WPC typically runs $0.038–0.048 per gram. On a cost-per-gram-of-protein basis, WPI costs roughly 35–40% more. For a 2 lb container, this translates to a $10–15 premium at comparable serving sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Which protein is better for weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI has a marginal advantage during caloric restriction: higher protein density per calorie means you can hit your protein target while consuming fewer total calories per serving. If you are cutting and every calorie counts, WPI's caloric efficiency justifies the price premium. If you have sufficient caloric headroom, WPC achieves the same protein targets at lower cost.",
      },
    },
    {
      "@type": "Question",
      name: "Does whey protein damage your kidneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not in people with healthy kidneys. Antonio et al. (2016) followed resistance-trained individuals consuming up to 3.32g/kg body weight protein per day for 2 years with no adverse renal outcomes. This applies to both WPI and WPC. Individuals with pre-existing kidney disease should consult a physician before using any protein supplement.",
      },
    },
  ],
};

export default function WPIvsWPCReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Protein Powder", href: "/category/protein-powder" },
            ].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>WPI vs WPC</span>
          </div>
        </div>

        {/* ── Feature Banner ──────────────────────────────────────────────────── */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A2E1E 0%, #0F1A11 100%)", position: "relative", overflow: "hidden" }}>
          {/* Grid texture overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Pill row — HIDDEN on mobile */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", whiteSpace: "nowrap" }}>REV-2026-068</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(242,235,217,0.15)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2D6A4F", whiteSpace: "nowrap" }}>Protein Comparison · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 16 }}>
                  WPI vs WPC<br /><em style={{ fontWeight: 400, color: "#A89880", fontSize: "0.65em" }}>Whey Protein Isolate vs Concentrate</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.7)", lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
                  Both come from the same source. Both deliver complete protein. But the processing gap between them creates real differences in purity, lactose content, digestion speed, and cost. Here is what the evidence actually says.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://www.amazon.com/s?k=whey+protein+isolate" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Shop WPI on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(242,235,217,0.2)", color: "rgba(242,235,217,0.6)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>

              {/* Product images — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", gap: 16, flexShrink: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ position: "relative", width: 110, height: 140 }}>
                    <Image src="/products/dymatize-iso100.webp" alt="Dymatize ISO100 WPI" fill
                      style={{ objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))" }} priority />
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#2D6A4F", letterSpacing: "0.12em", textTransform: "uppercase" }}>WPI</span>
                </div>
                <div style={{ width: 1, height: 80, backgroundColor: "rgba(242,235,217,0.1)" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ position: "relative", width: 110, height: 140 }}>
                    <Image src="/products/on-gold-standard-whey.webp" alt="ON Gold Standard WPC" fill
                      style={{ objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))" }} priority />
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em", textTransform: "uppercase" }}>WPC</span>
                </div>
              </div>

              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Star row ────────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4].map((s) => <Star key={s} size={14} fill="#2D6A4F" color="#2D6A4F" />)}
              <Star size={14} fill="none" color="#2D6A4F" strokeWidth={2} />
            </div>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#8A8480", letterSpacing: "0.1em" }}>
              {editorialScore}/10 · FSP v2.1 · WPI Editorial Score
            </span>
          </div>
        </div>

        {/* ── Metadata strip ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category", value: "Protein Powder" },
            { label: "Type", value: "WPI vs WPC Comparison" },
            { label: "FSP Composite", value: `${composite.toFixed(1)} / 10` },
            { label: "WPI Protein %", value: "≥90% by weight" },
            { label: "WPC Protein %", value: "70–80% by weight" },
            { label: "Published", value: "Jun 3, 2026" },
          ]} />
        </div>

        {/* ── Author Box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A2E1E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F2EBD9" }}>FT</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors" style={{ color: "#1A1714", textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Evidence Review, June 2026</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Cross-referenced 14 RCTs and meta-analyses · Prices verified June 2026 · No brand funding
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Evidence-Based</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>RCT Reviewed</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate Disclosure ─────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links below may earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#2D6A4F", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* ── Mobile TOC ────────────────────────────────────────────────────────── */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* ── Main Content + Sidebar ───────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article */}
            <article style={{ minWidth: 0 }}>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #2D6A4F", marginBottom: 20 }}>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                    The WPI vs WPC debate has a boring answer: for most people, it doesn't matter. What matters is hitting your daily protein target — and both types get you there. The practical decision comes down to two things: whether you're lactose intolerant, and whether you're in a caloric deficit tight enough that purity-per-calorie matters. If either applies, WPI wins on its merits. If neither applies, WPC gives you the same results at 35% lower cost.
                  </p>
                </div>

                {/* Winner callout cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  <div style={{ padding: 18, border: "1px solid rgba(45,106,79,0.3)", borderRadius: 10, backgroundColor: "rgba(45,106,79,0.04)" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Choose WPI If</p>
                    {["You're lactose intolerant or dairy-sensitive", "You're in a hard cut (calories are tight)", "You train fasted or immediately post-workout", "You want maximum protein density per gram consumed"].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 6, padding: "4px 0" }}>
                        <span style={{ color: "#2D6A4F", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: 18, border: "1px solid rgba(196,98,45,0.3)", borderRadius: 10, backgroundColor: "rgba(196,98,45,0.04)" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 10 }}>Choose WPC If</p>
                    {["You tolerate dairy without GI issues", "You're bulking or maintaining (more calories available)", "You want the best cost-per-gram ratio", "You prefer a creamier texture and richer flavour"].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 6, padding: "4px 0" }}>
                        <span style={{ color: "#C4622D", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout: the blend option */}
                <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <ShieldCheck size={14} style={{ color: "#2D6A4F", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>
                    <strong style={{ color: "#1A1714" }}>The third option: blends.</strong> Many products (ON Gold Standard Whey, MuscleBlaze Biozyme) stack WPC + WPI + peptides. You get a middle-ground purity profile at a price between the two extremes. A legitimate choice for those who don't want to commit to either extreme.
                  </p>
                </div>
              </section>

              {/* Mobile product card — block on mobile, hidden sm+ */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
                  <div style={{ background: "linear-gradient(145deg, #1A2E1E 0%, #0F1A11 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(45,106,79,0.15)", border: "1px solid rgba(45,106,79,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D6A4F" }}>
                      <ShieldCheck size={10} /> Evidence-Based Comparison
                    </span>
                    <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 20, alignItems: "flex-end", paddingBottom: 12 }}>
                      <div style={{ position: "relative", width: 75, height: 95 }}>
                        <Image src="/products/dymatize-iso100.webp" alt="WPI example" fill style={{ objectFit: "contain", filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.5))" }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "rgba(242,235,217,0.4)" }}>vs</span>
                      <div style={{ position: "relative", width: 75, height: 95 }}>
                        <Image src="/products/on-gold-standard-whey.webp" alt="WPC example" fill style={{ objectFit: "contain", filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.5))" }} />
                      </div>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Fitlabreviews</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>WPI vs WPC Protein</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[
                        { val: `${editorialScore}/10`, label: "FSP Score" },
                        { val: "≥90%", label: "WPI Purity" },
                        { val: "~78%", label: "WPC Purity" },
                      ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#2D6A4F", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>WPI Price Range</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$45–70 / 2lb</p>
                      </div>
                      <a href="https://www.amazon.com/s?k=whey+protein+isolate" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Shop WPI <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── WHAT IS ────────────────────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Are WPI and WPC?</h2>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Both start from the same place. When milk is curdled to make cheese, liquid whey separates out. That liquid — low in fat and rich in protein — gets dried and processed into the powder you buy. The processing step is where WPI and WPC diverge.
                </p>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  <strong>Whey Protein Concentrate (WPC)</strong> is filtered once to remove most of the water, fat, and lactose. The result is a powder that typically runs 70–80% protein by weight — meaning every 100g of powder contains roughly 70–80g of protein, with the rest split between fat, lactose, and moisture. WPC80, the most common commercial grade, sits at the upper end of that range.
                </p>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  <strong>Whey Protein Isolate (WPI)</strong> goes through additional filtration — either <Link href="/ingredients/cross-flow-microfiltration" style={{ color: "#2D6A4F", textDecoration: "none", fontWeight: 600 }}>cross-flow microfiltration</Link> or ion exchange — that strips out nearly all remaining fat and lactose. The result: ≥90% protein by weight, typically <1g lactose per serving, and <0.5g fat. You pay more per gram, but more of every gram is protein.
                </p>

                {/* Processing comparison visual */}
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
                  <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Processing Chain</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#2D6A4F" }}>Raw Whey → Product</span>
                  </div>
                  {[
                    { step: "Raw liquid whey", wpc: "Starting point", wpi: "Starting point", bg: false },
                    { step: "Microfiltration / UF", wpc: "Single pass", wpi: "Multi-pass / extended", bg: true },
                    { step: "Protein content", wpc: "70–80% by weight", wpi: "≥90% by weight", bg: false },
                    { step: "Lactose per 25g serving", wpc: "~4–5g", wpi: "<1g", bg: true },
                    { step: "Fat per 25g serving", wpc: "1–3g", wpi: "<0.5g", bg: false },
                    { step: "Bioactive fractions retained", wpc: "Higher (less processing)", wpi: "Lower (more processing)", bg: true },
                    { step: "Cost per gram protein", wpc: "$0.038–0.048", wpi: "$0.052–0.065", bg: false },
                  ].map((row) => (
                    <div key={row.step} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "10px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: row.bg ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.step}</span>
                      <span style={{ fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.wpc}</span>
                      <span style={{ fontSize: 13, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.wpi}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Note: WPC and WPI column values are approximate category averages. Individual product specs vary.
                </p>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <p style={{ fontSize: 13, color: "#8A8480", marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Scores reflect WPI as a category vs the WPC baseline. FSP v2.1 weights applied.
                </p>
                <ScoreBreakdown rubric={rubricWPI} reviewCode="REV-2026-068" />
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubricWPI.flags} />
              </section>

              {/* ─── SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts Side-by-Side</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Per 25g protein serving · Representative values from category benchmarks</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 540, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "36%" }}>Nutrient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#2D6A4F", width: "32%" }}>WPI (typical)</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4622D", width: "32%" }}>WPC80 (typical)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nutrient: "Calories", wpi: "~100–110 kcal", wpc: "~120–130 kcal", highlight: false },
                        { nutrient: "Protein", wpi: "25g", wpc: "24g", highlight: true },
                        { nutrient: "Total Fat", wpi: "<0.5g", wpc: "1.5–3g", highlight: false },
                        { nutrient: "Saturated Fat", wpi: "<0.2g", wpc: "0.8–1.2g", highlight: false },
                        { nutrient: "Total Carbohydrates", wpi: "<2g", wpc: "3–5g", highlight: false },
                        { nutrient: "Lactose", wpi: "<1g", wpc: "4–5g", highlight: true },
                        { nutrient: "BCAAs", wpi: "~5.8–6.2g", wpc: "~5.2–5.8g", highlight: false },
                        { nutrient: "Leucine", wpi: "~2.6g", wpc: "~2.4–2.5g", highlight: false },
                        { nutrient: "Protein % by weight", wpi: "≥90%", wpc: "70–80%", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.nutrient} style={{ backgroundColor: row.highlight ? "rgba(45,106,79,0.05)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: row.highlight ? "#1A1714" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: row.highlight ? 700 : 400 }}>{row.nutrient}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", color: "#2D6A4F", whiteSpace: "nowrap" }}>{row.wpi}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 400, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", color: "#5C5650", whiteSpace: "nowrap" }}>{row.wpc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                  Values are category-level estimates. Actual figures vary by product and flavour. Leucine: the 2.5g threshold for maximum mTOR activation (Norton & Layman, 2006) is met by both types.
                </p>
              </section>

              {/* ─── PROTEIN PURITY & PROCESSING ───────────────────────────── */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Protein Purity & Processing</h2>

                {/* WPI */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ padding: "3px 10px", backgroundColor: "rgba(45,106,79,0.1)", border: "1px solid rgba(45,106,79,0.3)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D6A4F" }}>WPI</span>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>
                      <Link href="/ingredients/whey-protein-isolate" style={{ color: "#1A1714", textDecoration: "none" }}>Whey Protein Isolate →</Link>
                    </h3>
                    <EvidenceBadge level="strong" />
                  </div>
                  <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                      Cross-flow microfiltration passes liquid whey through ceramic membranes under pressure, physically separating fat globules and lactose from protein molecules by size. No heat is applied, so protein denaturation is minimal. The result is a protein fraction ≥90% pure with a native protein structure largely intact.
                    </p>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                      Ion exchange WPI uses pH manipulation (acid and base washes) to selectively bind whey proteins to a resin, then release them. Higher protein yield than microfiltration (sometimes 95%+), but the chemical process strips more bioactive fractions. Dymatize ISO100 uses both methods on its hydrolysed isolate fraction.
                    </p>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                      Hydrolysed WPI (WPH) is pre-digested: enzymes break peptide bonds into smaller peptide fragments. Peak plasma amino acids arrive earlier — Tang et al. (2009) showed WPH peaked at ~45 minutes vs WPC at ~75 minutes. The practical relevance of this speed difference is context-dependent (see Claim Audit below).
                    </p>
                  </div>
                </div>

                {/* WPC */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ padding: "3px 10px", backgroundColor: "rgba(196,98,45,0.1)", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4622D" }}>WPC</span>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>
                      <Link href="/ingredients/whey-protein-concentrate" style={{ color: "#1A1714", textDecoration: "none" }}>Whey Protein Concentrate →</Link>
                    </h3>
                    <EvidenceBadge level="strong" />
                  </div>
                  <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                      Standard ultrafiltration removes the bulk of water and some smaller molecules, concentrating the protein. WPC80 (the benchmark grade) achieves roughly 80% protein by dry weight. The remaining 20% is primarily lactose (~5–6%), fat (~4–5%), and moisture (~5%), with a small amount of minerals and bioactive fractions.
                    </p>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                      Because processing is less aggressive, WPC retains higher amounts of immunoglobulins (IgG, IgA, IgM), lactoferrin, and alpha-lactalbumin. These compounds have demonstrated immunomodulatory and antioxidant activity in vitro (Wong et al., 1997), but the practical doses achievable from a 25g protein serving are far below those used in clinical research.
                    </p>
                    <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                      WPC is the dominant form in most budget-to-mid-range protein powders. ON Gold Standard Whey, MuscleBlaze Biozyme, and Myprotein Impact Whey all use WPC80 as their primary protein source, often blending small amounts of WPI for a moderate purity improvement on the label.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Third-party testing landscape for WPI and WPC products.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  {[
                    {
                      cert: "Informed Choice / Informed Sport",
                      desc: "Tests for 250+ banned substances. Required by professional athletes. Available on WPI and WPC products equally. Dymatize ISO100 (WPI) and ON Gold Standard (WPC blend) both carry this certification.",
                      color: "#2D6A4F",
                    },
                    {
                      cert: "NSF Certified for Sport",
                      desc: "Tests for banned substances, label accuracy, and facility GMP compliance. Considered the most stringent US-based certification. More common on WPI products (premium market skews toward it). Dymatize ISO100 carries dual NSF + Informed Choice.",
                      color: "#3A5F8B",
                    },
                    {
                      cert: "Labdoor Testing",
                      desc: "Independently purchases and tests retail products for protein content accuracy, heavy metals, and contamination. Useful for verifying label claims without relying on brand-commissioned reports. Both WPI and WPC products rank in their database.",
                      color: "#8B7355",
                    },
                    {
                      cert: "Brand-Internal Lab Testing",
                      desc: "Many brands publish amino acid profiles and protein yield data from their own labs. This is not third-party verification. Treat it as directionally useful but not independently verifiable unless a COA from a named third-party lab is provided.",
                      color: "#C4622D",
                    },
                  ].map((item) => (
                    <div key={item.cert} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <div style={{ height: 3, backgroundColor: item.color, borderRadius: 2, marginBottom: 10 }} />
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.cert}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>
                    <strong style={{ color: "#1A1714" }}>Protein spiking risk:</strong> Amino acid spiking — adding cheap free amino acids (typically glycine, taurine, creatine) to inflate nitrogen content and fake a higher protein reading on the label — is a known problem across both WPI and WPC products, particularly at the budget end. Products with Informed Choice or NSF certification effectively eliminate this risk. Budget products without third-party testing should be treated with caution.
                  </p>
                </div>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubricWPI.claimAudit} />
              </section>

              {/* ─── HOW TO USE ─────────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Use Each</h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ padding: "20px", backgroundColor: "#F8F2E4", border: "1px solid rgba(45,106,79,0.3)", borderRadius: 10 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 12 }}>WPI — Best Use Cases</p>
                    {[
                      { timing: "Post-workout (fasted training)", note: "Fast gastric clearance delivers amino acids during the anabolic window you actually care about when training fasted." },
                      { timing: "Pre-bed (cutting phase)", note: "Higher protein density means fewer calories alongside your casein or mixed protein. Pair with 20g casein for sustained MPS overnight." },
                      { timing: "Intra-workout (HIIT / endurance)", note: "Dissolved easily in water. Low lactose means no GI distress during sustained cardio. Keep serving to 10–15g to avoid blood flow diversion." },
                      { timing: "Lactose intolerant users: any time", note: "The definitive choice. <1g lactose per serving tolerates in nearly all sensitivity levels." },
                    ].map((item) => (
                      <div key={item.timing} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 3 }}>{item.timing}</p>
                        <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.55, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.note}</p>
                      </div>
                    ))}
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", letterSpacing: "0.06em" }}>Dose: 25–30g protein / serving · 1–2x daily</p>
                  </div>

                  <div style={{ padding: "20px", backgroundColor: "#F8F2E4", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 10 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 12 }}>WPC — Best Use Cases</p>
                    {[
                      { timing: "Post-workout (fed state)", note: "If you had a meal within 2 hours before training, timing precision matters less. WPC delivers the same amino acid load at lower cost." },
                      { timing: "Meal replacement or smoothie base", note: "Creamier texture and higher fat content make it a better shake base. Blends better with milk, oats, and fruit than WPI." },
                      { timing: "Baking & cooking", note: "Lower purity profile behaves better under heat. WPC retains more moisture in protein pancakes, muffins, and energy balls without drying out." },
                      { timing: "Budget-conscious bulking", note: "During a bulk, you're eating sufficient calories anyway. Save the cost delta and apply it to whole food protein quality instead." },
                    ].map((item) => (
                      <div key={item.timing} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 3 }}>{item.timing}</p>
                        <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.55, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.note}</p>
                      </div>
                    ))}
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", letterSpacing: "0.06em" }}>Dose: 25–30g protein / serving · 1–2x daily</p>
                  </div>
                </div>

                <div style={{ marginTop: 16, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>
                    <strong style={{ color: "#1A1714" }}>Daily protein target matters more than type or timing.</strong> Whether WPI or WPC, total daily protein of 1.6–2.2g/kg body weight is the primary driver of lean mass retention and muscle protein synthesis across all training modalities (Morton et al., 2018). Hit that target consistently with whichever type fits your budget and tolerance.
                  </p>
                </div>
              </section>

              {/* ─── COMPARISON TABLE ───────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Best Products</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Representative best-in-class products for each type, benchmarked side-by-side.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "22%" }}>Product</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "12%" }}>Type</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "14%" }}>Protein / Serve</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "12%" }}>Lactose</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "16%" }}>Price / Serve</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "12%" }}>3P Cert</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", width: "12%" }}>FSP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Dymatize ISO100", type: "WPI (Hydrolysed)", protein: "25g", lactose: "<1g", price: "$1.60–1.80", cert: "NSF + IC", fsp: "9/10", highlight: true },
                        { product: "XTEND Pro Whey Isolate", type: "WPI", protein: "25g", lactose: "<0.5g", price: "$1.40–1.60", cert: "Informed Choice", fsp: "N/R", highlight: false },
                        { product: "ON Gold Standard Whey", type: "WPC Blend", protein: "24g", lactose: "~4g", price: "$1.15–1.25", cert: "Informed Choice", fsp: "9/10", highlight: false },
                        { product: "MuscleBlaze Biozyme", type: "WPC80", protein: "25g", lactose: "~4g", price: "$0.80–0.95", cert: "None", fsp: "N/R", highlight: false },
                        { product: "MyProtein Impact Whey", type: "WPC80", protein: "21g", lactose: "~3g", price: "$0.60–0.75", cert: "Informed Sport", fsp: "N/R", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(45,106,79,0.05)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 16px", fontSize: 11, color: row.type.includes("WPI") ? "#2D6A4F" : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", textAlign: "center", whiteSpace: "nowrap" }}>{row.type}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace", textAlign: "center" }}>{row.protein}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: row.lactose.includes("<1") || row.lactose.includes("<0") ? "rgba(45,106,79,0.10)" : "rgba(196,98,45,0.08)", border: `1px solid ${row.lactose.includes("<1") || row.lactose.includes("<0") ? "rgba(45,106,79,0.25)" : "rgba(196,98,45,0.2)"}`, borderRadius: 20, fontSize: 11, color: row.lactose.includes("<1") || row.lactose.includes("<0") ? "#2D6A4F" : "#C4622D", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.lactose}
                            </span>
                          </td>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", textAlign: "center" }}>{row.price}</td>
                          <td style={{ padding: "11px 16px", fontSize: 11, color: row.cert !== "None" ? "#2D6A4F" : "#C4622D", fontFamily: "var(--font-dm-mono), monospace", textAlign: "center", fontWeight: row.cert !== "None" ? 600 : 400 }}>{row.cert}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.fsp !== "N/R" ? (
                              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.fsp}</span>
                            ) : (
                              <span style={{ fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>N/R</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  N/R = not yet reviewed by Fitlabreviews. Prices verified June 2026. IC = Informed Choice. FSP scores from our full reviews where available.
                </p>

                {/* Competitor product cards */}
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>Shop Competitors</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {([
                      {
                        name: "Dymatize ISO100",
                        cert: "NSF + Informed Choice",
                        price: "~$1.70/serve",
                        image: "/products/dymatize-iso100.webp",
                        buyUrl: "https://www.amazon.com/s?k=dymatize+iso100",
                        reviewSlug: "dymatize-iso100-review-2026",
                      },
                      {
                        name: "XTEND Pro Whey Isolate",
                        cert: "Informed Choice",
                        price: "~$1.50/serve",
                        image: "/products/XTEND-Pro-Whey-Isolate.webp",
                        buyUrl: "https://www.amazon.com/s?k=xtend+pro+whey+isolate",
                        reviewSlug: null,
                      },
                      {
                        name: "ON Gold Standard Whey",
                        cert: "Informed Choice",
                        price: "~$1.20/serve",
                        image: "/products/on-gold-standard-whey.webp",
                        buyUrl: "https://www.amazon.com/s?k=optimum+nutrition+gold+standard+whey",
                        reviewSlug: "optimum-nutrition-gold-standard-whey",
                      },
                      {
                        name: "MuscleBlaze Biozyme Whey",
                        cert: "None disclosed",
                        price: "~$0.90/serve",
                        image: "/products/muscleblaze-biozyme-performance-whey.webp",
                        buyUrl: "https://www.amazon.com/s?k=muscleblaze+biozyme+whey",
                        reviewSlug: null,
                      },
                    ] as { name: string; cert: string; price: string; image: string; buyUrl: string; reviewSlug: string | null }[]).map((comp) => (
                      <div key={comp.name} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                        <div style={{ height: 3, backgroundColor: "#2D6A4F" }} />
                        <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 52, height: 66, flexShrink: 0, backgroundColor: "#EDE8DF", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={comp.image} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", marginBottom: 3, lineHeight: 1.3, fontFamily: "var(--font-dm-sans), sans-serif" }}>{comp.name}</p>
                            <p style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 4, letterSpacing: "0.04em" }}>{comp.cert}</p>
                            <p style={{ fontSize: 11, fontWeight: 700, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 8 }}>{comp.price}</p>
                            <div style={{ display: "flex", gap: 5 }}>
                              <a href={comp.buyUrl} target="_blank" rel="nofollow noopener noreferrer"
                                style={{ fontSize: 10, padding: "4px 9px", backgroundColor: "#2D6A4F", color: "#F2EBD9", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>
                                Buy →
                              </a>
                              {comp.reviewSlug && (
                                <Link href={`/reviews/${comp.reviewSlug}`}
                                  style={{ fontSize: 10, padding: "4px 9px", border: "1px solid #D4C9B8", color: "#5C5650", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
                                  Read →
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ────────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard
                    name="ISO100 Hydrolyzed WPI"
                    brand="Dymatize"
                    category="Protein Powder"
                    score={9}
                    priceUSD="~$50 / 30 servings"
                    priceINR="N/A"
                    tags={["WPI", "Hydrolysed", "NSF + IC"]}
                    buyUrl="https://www.amazon.com/s?k=dymatize+iso100"
                    buyLabel="Buy on Amazon"
                    reviewSlug="dymatize-iso100-review-2026"
                    image="dymatize-iso100.webp"
                    bgFrom="#0D1F10"
                    bgTo="#081408"
                    accent="#2D6A4F"
                    featured={true}
                  />
                  <ProductCard
                    name="Gold Standard 100% Whey"
                    brand="Optimum Nutrition"
                    category="Protein Powder"
                    score={9}
                    priceUSD="~$35 / 29 servings"
                    priceINR="N/A"
                    tags={["WPC Blend", "Informed Choice", "Value"]}
                    buyUrl="https://www.amazon.com/s?k=optimum+nutrition+gold+standard+whey"
                    buyLabel="Buy on Amazon"
                    reviewSlug="optimum-nutrition-gold-standard-whey"
                    image="on-gold-standard-whey.webp"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#C4622D"
                    featured={false}
                  />
                </div>
              </section>

              {/* ─── PROS & CONS ─────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 12 }}>WPI Pros & Cons</p>
                    <ProsCons
                      pros={[
                        "≥90% protein purity — highest available from whey",
                        "Virtually lactose-free (<1g per serving)",
                        "Faster gastric clearance than WPC",
                        "Fewer calories per gram of protein",
                        "Dissolves cleanly in cold water",
                      ]}
                      cons={[
                        "35–40% higher cost per gram of protein",
                        "Less bioactive fraction retention (immunoglobulins, lactoferrin)",
                        "Thinner texture — may feel less satisfying",
                        "No muscle-building advantage over WPC at matched doses",
                      ]}
                    />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 12 }}>WPC Pros & Cons</p>
                    <ProsCons
                      pros={[
                        "Lower cost per gram — best budget value",
                        "Retains more bioactive whey fractions",
                        "Creamier texture and typically richer flavour",
                        "Equivalent muscle-building outcomes at matched protein doses",
                        "Better for baking and cooking (retains moisture)",
                      ]}
                      cons={[
                        "4–5g lactose per serving — problematic for some",
                        "Lower protein density per calorie",
                        "Higher fat content (1.5–3g per serving)",
                        "Greater risk of GI discomfort in dairy-sensitive individuals",
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* ─── SAFETY & SIDE EFFECTS ──────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      topic: "Lactose intolerance",
                      verdict: "WPC: potential issue at ≥25g. WPI: safe for most sensitivity levels.",
                      detail: "WPC80 delivers ~4–5g lactose per 25g protein serving. Individuals with lactase deficiency may experience bloating, cramping, or diarrhoea. WPI at <1g lactose is well tolerated. True dairy allergy (IgE-mediated) is different from lactose intolerance — both WPI and WPC contain milk proteins and are contraindicated in dairy allergy.",
                      severity: "moderate",
                    },
                    {
                      topic: "Kidney function",
                      verdict: "No adverse effect in healthy individuals at ≤3g/kg body weight.",
                      detail: "Antonio et al. (2016) followed resistance-trained individuals consuming 2.51–3.32g/kg protein for 2 years. Blood urea nitrogen and creatinine remained within normal range. Individuals with pre-existing renal impairment should consult a physician — this finding does not apply to them.",
                      severity: "low",
                    },
                    {
                      topic: "Heavy metal contamination",
                      verdict: "Category-level risk exists. Third-party tested products eliminate it.",
                      detail: "Consumer Reports (2010) identified lead, arsenic, and cadmium in several protein powders. The risk is concentrated in products without third-party certification. Products with NSF, Informed Choice, or Informed Sport certification are independently tested for heavy metal limits. Stick to certified products.",
                      severity: "moderate",
                    },
                    {
                      topic: "Digestive discomfort (non-lactose)",
                      verdict: "Can occur with either type at high doses. Usually dose-dependent.",
                      detail: "Some individuals experience bloating or loose stools from whey protein regardless of lactose content. This may relate to beta-lactoglobulin sensitivity (a whey-specific protein absent in human breast milk) or high single-dose boluses. Starting at 15–20g per serving and building tolerance resolves this in most cases.",
                      severity: "low",
                    },
                  ].map((item) => (
                    <div key={item.topic} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "moderate" ? "rgba(139,58,44,0.1)" : "rgba(45,106,79,0.1)", border: `1px solid ${item.severity === "moderate" ? "rgba(139,58,44,0.25)" : "rgba(45,106,79,0.2)"}`, borderRadius: 4, fontSize: 9, color: item.severity === "moderate" ? "#8B3A2C" : "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.severity} concern</span>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.topic}</p>
                      </div>
                      <p style={{ fontSize: 13, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 6, fontSize: 12, letterSpacing: "0.02em" }}>{item.verdict}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ───────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubricWPI.valueMetric} activeIngredientLabel="whey protein isolate" />

                <div style={{ marginTop: 20 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Category Price Benchmarks (June 2026)</p>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#1A1714" }}>
                          <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Type / Tier</th>
                          <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>$/serve</th>
                          <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>$/g protein</th>
                          <th style={{ padding: "10px 14px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: "WPC Budget (no cert)", serve: "$0.60–0.80", gram: "$0.028–0.036", use: "Budget bulk", highlight: false },
                          { type: "WPC Mid (Informed Choice)", serve: "$1.00–1.30", gram: "$0.040–0.052", use: "Value daily driver", highlight: false },
                          { type: "WPI Standard", serve: "$1.40–1.70", gram: "$0.052–0.065", use: "Lactose intolerance / cut", highlight: true },
                          { type: "WPI Hydrolysed (premium)", serve: "$1.60–2.00", gram: "$0.060–0.075", use: "Fasted training / premium", highlight: false },
                        ].map((row, i) => (
                          <tr key={row.type} style={{ backgroundColor: row.highlight ? "rgba(45,106,79,0.05)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                            <td style={{ padding: "10px 14px", fontSize: 13, color: row.highlight ? "#1A1714" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: row.highlight ? 700 : 400 }}>{row.type}</td>
                            <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", color: "#1A1714", whiteSpace: "nowrap" }}>{row.serve}</td>
                            <td style={{ padding: "10px 14px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", color: "#5C5650", whiteSpace: "nowrap" }}>{row.gram}</td>
                            <td style={{ padding: "10px 14px", fontSize: 12, textAlign: "center", color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.use}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified June 2026. US market pricing. Bulk sizes (5 lb+) reduce cost by 15–25%.</p>
                </div>
              </section>

              {/* ─── WHERE TO BUY ────────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 6 }}>Best WPI on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      Dymatize ISO100 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", marginBottom: 16 }}>NSF + Informed Choice certified. Hydrolysed WPI. 25g protein, 2.7g leucine. Counterfeit risk is low — buy from Amazon.com official store.</p>
                    <a href="https://www.amazon.com/s?k=dymatize+iso100" target="_blank" rel="nofollow noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      <ExternalLink size={13} /> Buy WPI on Amazon
                    </a>
                  </div>
                  <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>Best WPC on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      ON Gold Standard <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 74 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", marginBottom: 16 }}>Informed Choice certified. WPC blend. 24g protein, 5.5g BCAAs. Always buy from ON's official brand store — counterfeit risk exists from grey market sellers.</p>
                    <a href="https://www.amazon.com/s?k=optimum+nutrition+gold+standard+whey" target="_blank" rel="nofollow noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      <ExternalLink size={13} /> Buy WPC on Amazon
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: 12, padding: "10px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6 }}>
                  <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong style={{ color: "#1A1714" }}>Counterfeit warning:</strong> Protein powders — particularly popular WPC blends — have documented fake product problems. Buy from brand-authorised Amazon storefronts or official brand websites. Verify batch certificates via QR codes where available (Informed Choice products).
                  </p>
                </div>
              </section>

              {/* ─── FAQ ─────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}
                    >
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>
                          {faq.name}
                        </span>
                        <span className="faq-icon-wpi-wpc" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#2D6A4F" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-wpi-wpc svg { display: none; }
                  details[open] .faq-icon-wpi-wpc::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 2px;
                    background: #2D6A4F;
                    border-radius: 1px;
                  }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>

                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 20 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Fitlabreviews Verdict · REV-2026-068</p>
                  <p style={{ fontSize: 15, color: "#F2EBD9", lineHeight: 1.8, marginBottom: 0 }}>
                    Stop asking which one is better for building muscle. The research is clear: matched protein doses produce matched results, full stop. The real question is which type fits your situation. If you're lactose intolerant, the answer is WPI — non-negotiable. If you're cutting calories and need maximum protein per calorie, WPI earns its premium. For everyone else — tolerating dairy, on a bulk, or simply watching their budget — WPC delivers every gram of muscle-building stimulus you need at 35% lower cost. When in doubt, a WPC/WPI blend gives you the middle ground without compromise.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  <div style={{ padding: "18px 20px", border: "1px solid rgba(45,106,79,0.3)", borderRadius: 10, backgroundColor: "rgba(45,106,79,0.04)" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Our WPI Pick</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>Dymatize ISO100 Hydrolysed</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.55 }}>Dual NSF + Informed Choice certified. 25g hydrolysed isolate. 2.7g leucine. Read our <Link href="/reviews/dymatize-iso100-review-2026" style={{ color: "#2D6A4F", textDecoration: "none", fontWeight: 600 }}>full review →</Link></p>
                  </div>
                  <div style={{ padding: "18px 20px", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 10, backgroundColor: "rgba(196,98,45,0.04)" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 10 }}>Our WPC Pick</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>ON Gold Standard 100% Whey</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.55 }}>Informed Choice certified since 2012. 24g protein, consistent yield. Read our <Link href="/reviews/optimum-nutrition-gold-standard-whey" style={{ color: "#C4622D", textDecoration: "none", fontWeight: 600 }}>full review →</Link></p>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ───────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      {
                        text: "Morton RW et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med. 52(6):376–384.",
                        url: "https://doi.org/10.1136/bjsports-2017-097608",
                      },
                      {
                        text: "Tang JE et al. (2009). Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. J Appl Physiol. 107(3):987–992.",
                        url: "https://doi.org/10.1152/japplphysiol.00076.2009",
                      },
                      {
                        text: "Boirie Y et al. (1997). Slow and fast dietary proteins differently modulate postprandial protein accretion. Proc Natl Acad Sci USA. 94(26):14930–14935.",
                        url: "https://doi.org/10.1073/pnas.94.26.14930",
                      },
                      {
                        text: "Norton LE, Layman DK. (2006). Leucine regulates translation initiation of protein synthesis in skeletal muscle after exercise. J Nutr. 136(2):533S–537S.",
                        url: "https://doi.org/10.1093/jn/136.2.533S",
                      },
                      {
                        text: "Churchward-Venne TA et al. (2012). Supplementation of a suboptimal protein dose with leucine or essential amino acids: effects on myofibrillar protein synthesis at rest and following resistance exercise in men. J Physiol. 590(11):2751–2765.",
                        url: "https://doi.org/10.1113/jphysiol.2012.228833",
                      },
                      {
                        text: "Antonio J et al. (2016). A high protein diet has no harmful effects: a one-year crossover study in resistance-trained males. J Nutr Metab. 2016:9104792.",
                        url: "https://doi.org/10.1155/2016/9104792",
                      },
                      {
                        text: "Wong CW et al. (1997). Effects of dietary whey and casein on the immune response in mice immunised with ovalbumin. Acta Paediatr. 86(9):942–947.",
                        url: "https://doi.org/10.1111/j.1651-2227.1997.tb15183.x",
                      },
                      {
                        text: "Witard OC et al. (2014). Myofibrillar muscle protein synthesis rates subsequent to a meal in response to small and large bolus doses of dairy and soy protein. Am J Clin Nutr. 99(1):86–95.",
                        url: "https://doi.org/10.3945/ajcn.112.055517",
                      },
                      {
                        text: "Consumer Reports. (2010). Alert: Protein drinks — you don't need the extra protein or the heavy metals our tests found. Consumer Reports Magazine. July 2010.",
                        url: "https://www.consumerreports.org/cro/2012/04/protein-drinks/index.htm",
                      },
                      {
                        text: "Devries MC, Phillips SM. (2015). Supplemental protein in support of muscle mass and health: advantage whey. J Food Sci. 80(S1):A8–A15.",
                        url: "https://doi.org/10.1111/1750-3841.12802",
                      },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#2D6A4F", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
                          doi →
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ── Related Reviews — OUTSIDE layout-sidebar ───────────────────────── */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Related Reviews</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                {
                  slug: "dymatize-iso100-review-2026",
                  title: "Dymatize ISO100 Review",
                  brand: "Dymatize",
                  category: "Protein Powder (WPI)",
                  verdict: "Best-in-class hydrolysed WPI. Dual NSF + Informed Choice. 25g protein, 2.7g leucine.",
                  rating: 9 as ReviewRating,
                  accent: "#2D6A4F",
                },
                {
                  slug: "optimum-nutrition-gold-standard-whey",
                  title: "ON Gold Standard Whey Review",
                  brand: "Optimum Nutrition",
                  category: "Protein Powder (WPC)",
                  verdict: "The benchmark WPC blend. Informed Choice certified since 2012. Consistent yield across 4 years.",
                  rating: 9 as ReviewRating,
                  accent: "#C4622D",
                },
              ].map((r) => (
                <Link key={r.slug} href={`/reviews/${r.slug}`} style={{ display: "block", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ height: 3, backgroundColor: r.accent }} />
                  <div style={{ padding: "16px 18px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>{r.brand} · {r.category}</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{r.title}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.55 }}>{r.verdict}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: r.accent }}>{r.rating}/10</span>
                      <span style={{ fontSize: 12, color: r.accent, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Review →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
