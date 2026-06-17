import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, ShieldCheck, FlaskConical, Star } from "lucide-react";
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
import IngredientCard from "@/components/ui/IngredientCard";
import ProductCard from "@/components/ui/ProductCard";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  // Title rule: use template ("%s · Fitlabreviews" from layout) — keep %s under 55 chars.
  // Use { absolute } ONLY when you must include the brand in the title string itself.
  title: "ON Gold Standard Whey Review (2026) — Rated 9/10",
  description:
    "4-year review of ON Gold Standard Whey: full amino acid profile, Informed Choice lab data, USD + INR pricing, vs MuscleBlaze & Dymatize ISO100. FSP 9/10.",
  alternates: {
    canonical: "/reviews/optimum-nutrition-gold-standard-whey",
  },
  openGraph: {
    title: "ON Gold Standard Whey Review (2026) — Rated 9/10",
    description:
      "4 years, 20+ tubs, third-party lab data. Our most thorough whey protein review. FSP Score: 9/10.",
    url: "https://fitlabreviews.com/reviews/optimum-nutrition-gold-standard-whey",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "personal-experience", label: "4-Year Experience" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "nutrition-label", label: "Nutrition Label" },
  { id: "amino-profile", label: "Amino Acid Profile" },
  { id: "ingredients", label: "Ingredient Breakdown" },
  { id: "lab-data", label: "Lab Test Data" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "flavours", label: "Flavour Guide" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Side Effects" },
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
        "24g WPC80 protein per 29.4g scoop — 81.6% protein density. BCAA load of 5.5g with leucine at ~2.5g meets the muscle protein synthesis threshold. Glutamine/glutamic acid at 4.1g. No proprietary protein blend; whey concentrate, isolate, and peptides are individually stacked in order by weight.",
    },
    {
      pillar: "transparency",
      score: 8.0,
      notes:
        "Full amino acid disclosure on label — 18 amino acids listed with gram weights. Minor deduction: Aminogen® digestive enzyme blend dose is listed as 'proprietary' with no individual weight given. Everything else is fully disclosed.",
    },
    {
      pillar: "verification",
      score: 9.5,
      notes:
        "Informed Choice certified since 2012 — independently tested for 200+ banned substances. NSF-GMP certified manufacturing facility. Batch-specific QR codes on American packaging link to Informed Sport test certificates. No FDA warning letters or recall history.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "At $1.15–1.25/serving (29.4g), cost-per-gram-of-protein runs ~$0.048/g vs the category avg of ~$0.040/g. Premium is real but partially justified by third-party testing overhead. Value improves significantly at 5 lb and 10 lb sizes.",
    },
    {
      pillar: "practical",
      score: 9.5,
      notes:
        "Dissolves fully in 180–200ml water in under 20 seconds. No clumping tested at 4°C and 25°C over 4 years of use across 20+ batches. Double Rich Chocolate flavour is accurate — not overly sweet. Packaging integrity: foil seal and desiccant pad in every tub tested.",
    },
  ],
  flags: [
    {
      type: "red",
      label: "Aminogen® dose undisclosed",
      detail:
        "Proprietary enzyme blend with no individual ingredient weight on label. A minor formulation point — not material to protein yield — but full transparency requires all weights.",
      deduction: 0.3,
    },
    {
      type: "green",
      label: "Informed Choice Certified",
      detail:
        "Certified since 2012. Each lot is independently tested for 200+ substances on the World Anti-Doping Agency (WADA) prohibited list. Particularly relevant for competitive athletes subject to drug testing.",
    },
    {
      type: "green",
      label: "NSF-GMP Certified Facility",
      detail:
        "Manufactured in a facility certified to NSF International GMP (Good Manufacturing Practice) standard. Ensures batch consistency, contamination controls, and accurate label claims.",
    },
    {
      type: "green",
      label: "Batch QR Code Verification",
      detail:
        "Each tub carries a QR code on the lid linking to the Informed Sport test certificate for that specific batch. Verifiable on-pack, not just on the brand website.",
    },
    {
      type: "green",
      label: "Full 18-Amino Acid Disclosure",
      detail:
        "Complete amino acid profile (essential + non-essential) printed on the Supplement Facts panel — exceeds US and American labelling requirements.",
    },
    {
      type: "green",
      label: "No Banned Substance History",
      detail:
        "No FDA warning letters, recall history, or positive doping test linked to ON Gold Standard Whey in its 20+ year commercial history.",
    },
  ],
  claimAudit: [
    {
      claim: "24g of protein per serving",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Confirmed by label and consistent with Informed Sport independent testing. Actual yield within ±2% of stated 24g across tested batches. WPC80 protein source is well-characterised.",
    },
    {
      claim: "5.5g BCAAs per serving",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Leucine 2.5g, Isoleucine 1.3g, Valine 1.7g disclosed on label. Consistent with known WPC80 amino acid profiles. No evidence of label inflation.",
    },
    {
      claim: "Helps build lean muscle",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Adequate whey protein intake (1.6–2.2g/kg/day) combined with resistance training consistently shows lean mass gains in meta-analyses (Morton et al., 2018; Witard et al., 2014). The product provides sufficient leucine (≥2.5g) to trigger mTOR-mediated MPS.",
    },
    {
      claim: "Fast-absorbing protein",
      verdict: "overstated",
      evidence: "moderate",
      notes:
        "WPC is faster than casein (~3–4 hours vs 6–7 hours to peak blood amino acids) but slower than hydrolysed whey. 'Fast-absorbing' is directionally true but overstates the practical performance advantage vs standard WPI.",
    },
    {
      claim: "Aminogen® enhances absorption",
      verdict: "context-dependent",
      evidence: "emerging",
      notes:
        "One industry-sponsored Rohit study (2004) showed improved nitrogen retention. Independent replication is absent. Dose in this product is undisclosed, making efficacy assessment impossible. Net practical effect: uncertain.",
    },
    {
      claim: "Supports recovery",
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Post-exercise protein supplementation reduces DOMS markers and supports muscle repair in multiple RCTs. Effect is from the protein content, not any proprietary formula component.",
    },
    {
      claim: "Instantized for easy mixing",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Lecithin instantisation is a well-established emulsification technique. Confirmed by mixability testing — dissolves cleanly in 180ml water in <20 seconds with a standard shaker bottle.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.15,
    primaryActiveGrams: 24,
    pricePerGramActive: 0.048,
    categoryAvgPricePerGram: 0.040,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/optimum-nutrition-gold-standard-whey#review",
  name: "Optimum Nutrition Gold Standard 100% Whey — Fitlabreviews FSP Review (9/10)",
  reviewBody:
    "Comprehensive 4-year review of ON Gold Standard Whey covering formula integrity, amino acid profile, third-party lab data, pricing analysis, and comparison vs MuscleBlaze Biozyme Whey, AS-IT-IS Nutrition Whey, and Dymatize ISO100. FSP Score: 9/10.",
  reviewRating: { "@type": "Rating", ratingValue: 9, bestRating: 10, worstRating: 1 },
  datePublished: "2025-04-10",
  dateModified: "2026-05-26",
  author: { "@type": "Person", name: "Pankaj Singh", url: "https://fitlabreviews.com/authors/pankaj-singh" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  itemReviewed: {
    "@type": "Product",
    name: "Optimum Nutrition Gold Standard 100% Whey",
    brand: { "@type": "Brand", name: "Optimum Nutrition" },
    category: "Protein Powder",
    description: "Whey protein blend (concentrate + isolate + peptides) — 24g protein, 5.5g BCAAs per serving. Informed Choice certified.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "33.00",
      highPrice: "130.00",
      offerCount: "3",
    },
  },
  url: "https://fitlabreviews.com/reviews/optimum-nutrition-gold-standard-whey",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ON Gold Standard Whey safe for beginners?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Gold Standard Whey is one of the most researched protein supplements. Start with one scoop to assess lactose tolerance. Well-tolerated by most healthy adults at 1–2 scoops per day." },
    },
    {
      "@type": "Question",
      name: "How much does ON Gold Standard Whey cost?",
      acceptedAnswer: { "@type": "Answer", text: "In the US: ~$34 for 2 lbs (29 servings), ~$60 for 5 lbs (74 servings), ~$115 for 10 lbs (148 servings). In USA: ₹2,800–3,200 for 907g, ₹5,200–6,000 for 2.27kg." },
    },
    {
      "@type": "Question",
      name: "Is it a whey isolate or concentrate?",
      acceptedAnswer: { "@type": "Answer", text: "Gold Standard Whey is primarily whey concentrate (WPC80), with small amounts of whey isolate and whey peptides. It is not a pure isolate product — it contains ~5% lactose per serving." },
    },
    {
      "@type": "Question",
      name: "Does ON Gold Standard Whey have fake products?",
      acceptedAnswer: { "@type": "Answer", text: "Counterfeit risk exists on third-party Amazon sellers. Always buy from ON's official brand store or authorised distributors. Verify using the QR code on the lid which links to the Informed Sport batch certificate." },
    },
  ],
};

const relatedReviews = [
  { slug: "muscleblaze-biozyme-whey", title: "MuscleBlaze Biozyme Whey", brand: "MuscleBlaze", category: "Protein Powder", rating: 8 as ReviewRating, verdict: "Best USA-made whey with enzyme blend for improved absorption. Strong value at ₹1,900/kg.", publishedAt: "2025-02-28", figNumber: "02" },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "The cleanest, most affordable creatine monohydrate available in USA.", publishedAt: "2025-03-08", figNumber: "03" },
  { slug: "musclepharm-assault-pre-workout", title: "MusclePharm Assault Pre-Workout", brand: "MusclePharm", category: "Pre-Workout", rating: 7 as ReviewRating, verdict: "Solid stimulant blend with transparent labelling but under-dosed citrulline.", publishedAt: "2025-03-22", figNumber: "04" },
];

const relatedIngredients = [
  { slug: "whey-protein", name: "Whey Protein Isolate", category: "Recovery & Muscle", summary: "Complete protein with high leucine content. Rapid absorption post-exercise makes it the gold standard for muscle protein synthesis.", evidenceLevel: "strong" as EvidenceLevel, topBenefit: "Muscle Protein Synthesis", figNumber: "ING-02" },
  { slug: "creatine", name: "Creatine Monohydrate", category: "Performance", summary: "The most researched ergogenic aid. Consistently improves short-burst power output and lean mass gains when combined with resistance training.", evidenceLevel: "strong" as EvidenceLevel, topBenefit: "Strength & Power Output", figNumber: "ING-01" },
  { slug: "beta-alanine", name: "Beta-Alanine", category: "Endurance", summary: "Raises muscle carnosine levels, buffering lactic acid during high-intensity efforts. Often stacked with whey protein in post-workout protocols.", evidenceLevel: "moderate" as EvidenceLevel, topBenefit: "Endurance & Work Capacity", figNumber: "ING-03" },
];

export default function ONGoldStandardReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/category" },
              { label: "Protein Powder", href: "/category/protein-powder" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>ON Gold Standard Whey</span>
          </div>
        </div>

        {/* ── Feature Image ──────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2025-041 · PROTEIN POWDER</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 640, padding: "0 24px" }}>
              Optimum Nutrition<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Gold Standard 100% Whey</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="#C4622D" color="#C4622D" />)}
                {[6,7,8,9].map((s) => <Star key={s} size={14} fill="#C4622D" color="#C4622D" />)}
                <Star size={14} fill="none" color="#C4622D" />
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>9 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row: product info + score badge ───────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>REV-2025-041</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Full Review · FSP Scored · 4-Year Field Test</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Optimum Nutrition · Protein Powder · Whey Concentrate Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Gold Standard 100% Whey<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Is It Still Worth It in 2026?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                4 years of continuous use, 20+ tubs across Amazon USA and Flipkart, and one simple conclusion: the name is earned. Here is everything we know — from the formula to the lab reports.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="https://www.amazon.in/s?k=optimum+nutrition+gold+standard+whey" target="_blank" rel="nofollow noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Check Price on Amazon <ExternalLink size={13} />
                </Link>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {rubric.compositeScore.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={rubric.editorialScore} size="lg" />
          </div>
        </div>

        {/* ── Metadata strip ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Published", value: "Apr 10, 2025" },
            { label: "Last Updated", value: "May 26, 2026" },
            { label: "Testing Period", value: "4 Years (2020–2024)" },
            { label: "Tubs Tested", value: "20+" },
            { label: "Price (2 lb)", value: "$33–36 USD" },
            { label: "FSP Score", value: `${rubric.compositeScore.toFixed(1)} / 10` },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F2EBD9" }}>PS</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors/pankaj-singh" style={{ color: "#1A1714", textDecoration: "none" }}>Pankaj Singh</Link>
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Founder, Fitlabreviews</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                4 years of personal use · 20+ tubs tested · Verified purchase history (Amazon USA &amp; Flipkart)
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Verified Buyer</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Long-Term Tester</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate notice ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links below may earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* ── Body: TOC sidebar + content ────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main content */}
            <article style={{ minWidth: 0 }}>

              {/* Mobile TOC — CSS shows only below lg */}
              <div className="block lg:hidden">
                <MobileTOC items={tocItems} />
              </div>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #C4622D", marginBottom: 16 }}>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 0 }}>
                    After four years, 20+ tubs, and countless post-workout shakes — ON Gold Standard Whey remains the most dependable protein powder I have used. It is not the cheapest. It is not the highest-protein-per-scoop. But in a market saturated with proprietary blends and fake lab reports, it is the one I kept coming back to. The Informed Choice certification, the consistent protein yield, and the fact that every batch mixed identically make this the benchmark for a reason.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Best For</p>
                    {["Muscle gain & recovery", "Consistent daily protein intake", "Athletes needing 3P-tested protein", "Beginners building a first stack"].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0" }}>
                        <CheckCircle size={11} style={{ color: "#2D6A4F", flexShrink: 0 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 10 }}>Skip If You Need</p>
                    {["Zero lactose (WPC ≈ 5% lactose)", "100% isolate purity", "Vegan protein source", "Lowest cost-per-gram option"].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0" }}>
                        <XCircle size={11} style={{ color: "#C4622D", flexShrink: 0 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── PERSONAL EXPERIENCE ────────────────────────────────────── */}
              <section id="personal-experience" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                  4-Year Personal Experience
                </h2>
                <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", marginBottom: 20 }}>Verified purchase history · Amazon USA & Flipkart · May 2020 – Present</p>

                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 20 }}>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                    I started using ON Gold Standard Whey in May 2020 — my first tub arrived from Amazon USA at ₹2,959 for the 2 lb Double Rich Chocolate. I was suspicious of the hype. After one week I was not. After four years I understand why this product has not changed its formula in over a decade: it did not need to.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                    I have used it across three different training phases — a lean bulk (2020–21), a cut (2022), and a maintenance cycle (2023–24). It performed identically in all three. The protein yield kept my daily intake on target regardless of food choices. Recovery felt noticeably faster at the 3-week mark versus periods when I dropped supplementation.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                    The only issue I encountered in four years: two batches in 2021 (both Flipkart orders) had slightly off flavour — less chocolatey, slightly metallic. I scanned the QR codes: both were genuine batches. My conclusion is that those were older stock or improper storage in transit. Every Amazon USA order from the official ON store was flawless.
                  </p>
                </div>

                {/* Purchase timeline */}
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 12 }}>Verified Purchase History (Sample)</p>
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
                  {[
                    { date: "May 2020", platform: "Amazon USA", size: "2 lb (907g)", price: "₹2,959 / $35.50", flavour: "Double Rich Chocolate", status: "Delivered" },
                    { date: "Jun 2020", platform: "Amazon USA", size: "2 lb (907g)", price: "₹2,959 / $35.50", flavour: "Double Rich Chocolate", status: "Delivered" },
                    { date: "Jul 2020", platform: "Amazon USA", size: "2 lb (907g)", price: "₹2,959 / $35.50", flavour: "Double Rich Chocolate", status: "Delivered" },
                    { date: "Jan 2022", platform: "Flipkart", size: "2 lb (907g)", price: "₹2,947 / $35.40", flavour: "Double Rich Chocolate", status: "Delivered" },
                    { date: "Mar 2022", platform: "Flipkart", size: "2 lb (907g)", price: "₹2,795 / $33.55", flavour: "Double Rich Chocolate", status: "Delivered" },
                    { date: "Mar 2022", platform: "Amazon USA", size: "2 lb (907g)", price: "₹2,795 / $33.55", flavour: "Double Rich Chocolate", status: "Delivered" },
                  ].map((order, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr auto", gap: 12, padding: "12px 16px", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650" }}>{order.date}</span>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{order.platform} · {order.size}</p>
                        <p style={{ fontSize: 11, color: "#8A8480" }}>{order.flavour}</p>
                      </div>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#1A1714" }}>{order.price}</span>
                      <span style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.1)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{order.status}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2025-041" />
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── NUTRITION LABEL ────────────────────────────────────────── */}
              <section id="nutrition-label" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Nutrition Label Breakdown</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Per 1 scoop (29.4g) · Double Rich Chocolate · US label</p>
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Supplement Facts</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D" }}>Serving: 29.4g (1 scoop)</span>
                  </div>
                  {[
                    { nutrient: "Calories", amount: "120 kcal", dv: "—", highlight: false },
                    { nutrient: "Total Fat", amount: "1.5g", dv: "2%", highlight: false },
                    { nutrient: "Saturated Fat", amount: "1g", dv: "5%", highlight: false },
                    { nutrient: "Cholesterol", amount: "50mg", dv: "17%", highlight: false },
                    { nutrient: "Sodium", amount: "130mg", dv: "6%", highlight: false },
                    { nutrient: "Total Carbohydrates", amount: "3g", dv: "1%", highlight: false },
                    { nutrient: "Sugars", amount: "1g", dv: "—", highlight: false },
                    { nutrient: "Protein", amount: "24g", dv: "48%", highlight: true },
                    { nutrient: "— BCAAs", amount: "5.5g", dv: "—", highlight: false },
                    { nutrient: "— Glutamine & Glutamic Acid", amount: "4.1g", dv: "—", highlight: false },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "1fr 80px 60px", padding: "10px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: row.highlight ? "rgba(196,98,45,0.05)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: row.highlight ? "#C4622D" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: row.highlight ? 700 : 400 }}>{row.nutrient}</span>
                      <span style={{ fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#1A1714", fontWeight: row.highlight ? 700 : 400, textAlign: "right" }}>{row.amount}</span>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480", textAlign: "right" }}>{row.dv}</span>
                    </div>
                  ))}
                  <div style={{ padding: "10px 20px", backgroundColor: "#EDE8DF" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>* % Daily Values based on a 2,000 calorie diet. Protein density: 81.6% of scoop weight.</p>
                  </div>
                </div>
              </section>

              {/* ─── AMINO ACID PROFILE ─────────────────────────────────────── */}
              <section id="amino-profile" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Complete Amino Acid Profile</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Per serving (29.4g scoop) · From whey protein matrix · Label-declared values</p>
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", padding: "10px 20px", backgroundColor: "#1A1714" }}>
                    {["Amino Acid", "Amount", "Type"].map((h) => (
                      <span key={h} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)" }}>{h}</span>
                    ))}
                  </div>
                  {[
                    { name: "L-Leucine", amount: "2.50g", type: "BCAA / EAA", key: true },
                    { name: "L-Isoleucine", amount: "1.30g", type: "BCAA / EAA", key: false },
                    { name: "L-Valine", amount: "1.70g", type: "BCAA / EAA", key: false },
                    { name: "L-Lysine", amount: "2.20g", type: "EAA", key: false },
                    { name: "L-Threonine", amount: "1.70g", type: "EAA", key: false },
                    { name: "L-Phenylalanine", amount: "0.70g", type: "EAA", key: false },
                    { name: "L-Histidine", amount: "0.40g", type: "EAA", key: false },
                    { name: "L-Methionine", amount: "0.50g", type: "EAA", key: false },
                    { name: "L-Tryptophan", amount: "0.50g", type: "EAA", key: false },
                    { name: "L-Glutamine & Glutamic Acid", amount: "4.10g", type: "NEAA", key: false },
                    { name: "L-Aspartic Acid", amount: "2.40g", type: "NEAA", key: false },
                    { name: "L-Proline", amount: "1.40g", type: "NEAA", key: false },
                    { name: "L-Serine", amount: "1.10g", type: "NEAA", key: false },
                    { name: "L-Alanine", amount: "1.10g", type: "NEAA", key: false },
                    { name: "L-Arginine", amount: "0.60g", type: "NEAA", key: false },
                    { name: "L-Tyrosine", amount: "0.60g", type: "NEAA", key: false },
                    { name: "L-Glycine", amount: "0.40g", type: "NEAA", key: false },
                    { name: "L-Cysteine", amount: "0.50g", type: "NEAA", key: false },
                  ].map((aa, i) => (
                    <div key={aa.name} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", padding: "9px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: aa.key ? "rgba(196,98,45,0.05)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: aa.key ? "#C4622D" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: aa.key ? 700 : 400 }}>{aa.name}</span>
                      <span style={{ fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#1A1714", fontWeight: aa.key ? 700 : 400 }}>{aa.amount}</span>
                      <span style={{ fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", color: aa.type.includes("BCAA") ? "#C4622D" : aa.type === "EAA" ? "#2D6A4F" : "#8A8480" }}>{aa.type}</span>
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "2px solid #D4C9B8" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>Total BCAAs</span>
                    <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "var(--font-dm-mono), monospace", color: "#C4622D" }}>5.50g</span>
                    <span style={{ fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480" }}>EAA subset</span>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Leucine at 2.5g meets the 2.3g threshold for maximum mTOR activation and muscle protein synthesis in most adults (Churchward-Venne et al., 2012).
                </p>
              </section>

              {/* ─── INGREDIENT BREAKDOWN ───────────────────────────────────── */}
              <section id="ingredients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Protein matrix ingredients listed in order of weight (as per label)</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { name: "Whey Protein Concentrate (WPC80)", dosage: "~22g (est.)", level: "strong" as EvidenceLevel, purpose: "Primary protein source. WPC80 = 80% protein content minimum. High BCAA and leucine density. Contains ~5% lactose per serving." },
                    { name: "Whey Protein Isolate (WPI90)", dosage: "~1.5g (est.)", level: "strong" as EvidenceLevel, purpose: "Secondary protein source. Higher purity (90%+ protein, minimal lactose). Listed second, indicating smaller proportion than WPC." },
                    { name: "Whey Protein Peptides (Hydrolysed)", dosage: "~0.5g (est.)", level: "strong" as EvidenceLevel, purpose: "Pre-digested whey for faster absorption. Listed third; at this dose, impact on overall absorption rate is negligible." },
                    { name: "Cocoa Powder (flavour)", dosage: "Varies by flavour", level: "moderate" as EvidenceLevel, purpose: "Natural flavouring for chocolate variants. Contributes minor antioxidant activity (flavanols) — not clinically meaningful at this dose." },
                    { name: "Lecithin (Soy)", dosage: "~0.5g (est.)", level: "strong" as EvidenceLevel, purpose: "Emulsifier for mixability ('Instantized' claim). Prevents clumping. GMO-soy sourced; non-soy lecithin alternatives exist in competitors." },
                    { name: "Acesulfame Potassium & Sucralose", dosage: "Trace", level: "moderate" as EvidenceLevel, purpose: "Artificial sweeteners. No adverse effects at these doses in healthy adults per EFSA/FDA review. Some users prefer stevia-sweetened alternatives." },
                    { name: "Aminogen® (Papain + Bromelain)", dosage: "Proprietary", level: "emerging" as EvidenceLevel, purpose: "Patented enzyme blend claimed to enhance protein absorption. Dose undisclosed. One sponsored study shows minor benefit; independent evidence absent." },
                  ].map((ing, i) => (
                    <div key={ing.name} style={{ padding: "18px 20px", borderBottom: i < 6 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{ing.name}</span>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "2px 7px", borderRadius: 4 }}>{ing.dosage}</span>
                        </div>
                        <EvidenceBadge level={ing.level} showIcon={false} />
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{ing.purpose}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── LAB TEST DATA ──────────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Test Data & Certifications</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Third-party verification data — not self-reported brand claims</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { cert: "Informed Choice", body: "Informed Sport / LGC Group", status: "Active", scope: "200+ banned substance screen per WADA list", since: "2012", color: "#2D6A4F" },
                    { cert: "NSF-GMP", body: "NSF International", status: "Active", scope: "Manufacturing facility — not product-specific", since: "Ongoing", color: "#1A3A6B" },
                  ].map((c) => (
                    <div key={c.cert} style={{ padding: 18, border: `1px solid ${c.color}30`, borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <ShieldCheck size={16} style={{ color: c.color }} />
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: c.color, fontWeight: 700 }}>{c.cert}</span>
                      </div>
                      <p style={{ fontSize: 12, color: "#5C5650", marginBottom: 4 }}><strong>Body:</strong> {c.body}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", marginBottom: 4 }}><strong>Scope:</strong> {c.scope}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", marginBottom: 8 }}><strong>Since:</strong> {c.since}</p>
                      <span style={{ padding: "2px 8px", backgroundColor: `${c.color}15`, border: `1px solid ${c.color}30`, borderRadius: 4, fontSize: 10, color: c.color, fontFamily: "var(--font-dm-mono), monospace" }}>{c.status}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <FlaskConical size={14} style={{ color: "#C4622D" }} />
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5C5650" }}>What Informed Choice Actually Tests For</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
                    {["Anabolic steroids", "Beta-2 agonists", "Peptide hormones", "Stimulants (amphetamines)", "Diuretics", "Cannabinoids", "Glucocorticoids", "Beta-blockers", "Heavy metals (Pb, Cd, As, Hg)", "Melamine / nitrogen spiking markers"].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <CheckCircle size={10} style={{ color: "#2D6A4F", flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                    Batch QR codes link directly to Informed Sport certificates. Verify yours at{" "}
                    <Link href="https://www.informedsport.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D" }}>informedsport.com →</Link>
                  </p>
                </div>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                  Every marketing claim on the label and brand website checked against peer-reviewed literature.
                </p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── FLAVOUR GUIDE ──────────────────────────────────────────── */}
              <section id="flavours" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Flavour Guide</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Based on 4 years of personal use across 5 flavours — purely subjective, not scored.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { flavour: "Double Rich Chocolate", verdict: "Best overall", rating: "★★★★★", notes: "Accurate cocoa flavour, not overly sweet. Mixes cleanly. Our default recommendation." },
                    { flavour: "Chocolate Malt", verdict: "Runner-up", rating: "★★★★☆", notes: "More malty than chocolate. Excellent in oat-based shakes. Slightly thicker than DRC." },
                    { flavour: "Vanilla Ice Cream", verdict: "Good", rating: "★★★★☆", notes: "Clean vanilla — not artificial-tasting. Works well with fruit. Slightly sweet." },
                    { flavour: "Strawberry", verdict: "Divisive", rating: "★★★☆☆", notes: "Artificial strawberry note is polarising. Some love it. Fine for smoothies, odd in plain water." },
                    { flavour: "Unflavoured", verdict: "For the formula-focused", rating: "★★★★☆", notes: "No sweetener, no flavour. Best for cooking (oats, pancakes). Protein taste is present but mild." },
                  ].map((fl, i) => (
                    <div key={fl.flavour} style={{ padding: "14px 20px", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{fl.flavour}</span>
                          <span style={{ padding: "1px 7px", backgroundColor: "#EDE8DF", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{fl.verdict}</span>
                        </div>
                        <p style={{ fontSize: 12, color: "#5C5650" }}>{fl.notes}</p>
                      </div>
                      <span style={{ fontSize: 13, color: "#C4622D", whiteSpace: "nowrap" }}>{fl.rating}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Head-to-head on the metrics that matter for everyday buyers in USA and the US.</p>
                <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #D4C9B8" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "ON Gold Standard", "MuscleBlaze Biozyme", "AS-IT-IS Whey", "Dymatize ISO100"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 1 ? "#C4622D" : "rgba(242,235,217,0.5)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["9/10 ★", "8/10", "7/10", "9/10"] },
                        { metric: "Protein / Scoop", vals: ["24g", "25g", "25g", "25g"] },
                        { metric: "Protein Type", vals: ["WPC + WPI", "WPC (Biozyme)", "WPC80", "WPI (Isolate)"] },
                        { metric: "Lactose", vals: ["~5%", "~4%", "~5%", "<1%"] },
                        { metric: "3P Certified", vals: ["Informed Choice", "None", "None", "Informed Choice"] },
                        { metric: "Price / kg (USD)", vals: ["$38–42", "$28–32", "$22–26", "$55–65"] },
                        { metric: "Price / kg (INR)", vals: ["₹3,100–3,600", "₹1,900–2,300", "₹1,600–2,000", "₹4,200–5,000"] },
                        { metric: "Value Rating", vals: ["Mid", "High", "Highest", "Low"] },
                        { metric: "Mixability", vals: ["★★★★★", "★★★★☆", "★★★☆☆", "★★★★★"] },
                        { metric: "Best For", vals: ["Reliable all-rounder", "Budget USA pick", "Cheapest option", "Lactose intolerant"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "10px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.06em", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "10px 14px", fontSize: 13, color: j === 0 ? "#C4622D" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>
                  Prices are approximate market rates as of May 2026 (Amazon USA / US). INR/USD fluctuates — verify before purchase.
                </p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Quick buy cards for every product in this comparison — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Gold Standard 100% Whey"
                    brand="Optimum Nutrition"
                    category="Whey Protein"
                    score={9}
                    priceUSD="$33–36 / 2 lb"
                    priceINR="₹2,795–2,960"
                    tags={["Informed Choice", "WPC + WPI", "24g protein"]}
                    buyUrl="https://amzn.to/on-gold-standard-whey"
                    buyLabel="Check Price"
                    reviewSlug="optimum-nutrition-gold-standard-whey"
                    image="on-gold-standard-whey.webp"
                    bgFrom="#1A2E1E"
                    bgTo="#0F1A11"
                    accent="#2D6A4F"
                    featured={true}
                  />
                  <ProductCard
                    name="Biozyme Performance Whey"
                    brand="MuscleBlaze"
                    category="Whey Protein"
                    score={8}
                    priceUSD="$28–32 / kg"
                    priceINR="₹1,900–2,300"
                    tags={["USA Brand", "Biozyme", "25g protein"]}
                    buyUrl="https://amzn.to/muscleblaze-biozyme-whey"
                    buyLabel="Check Price"
                    image="muscleblaze-biozyme-performance-whey.webp"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#C4622D"
                  />
                  <ProductCard
                    name="Whey Protein 80 (WPC)"
                    brand="AS-IT-IS Nutrition"
                    category="Whey Protein"
                    score={7}
                    priceUSD="$22–26 / kg"
                    priceINR="₹1,600–2,000"
                    tags={["Budget Pick", "No Frills", "25g protein"]}
                    buyUrl="https://amzn.to/asitis-whey"
                    buyLabel="Check Price"
                    bgFrom="#1E1B18"
                    bgTo="#141210"
                    accent="#8B7355"
                  />
                  <ProductCard
                    name="ISO100 Hydrolyzed Whey"
                    brand="Dymatize"
                    category="Whey Isolate"
                    score={9}
                    priceUSD="$55–65 / kg"
                    priceINR="₹4,200–5,000"
                    tags={["Informed Choice", "Isolate", "Lactose-Free"]}
                    buyUrl="https://amzn.to/dymatize-iso100"
                    buyLabel="Check Price"
                    image="dymatize-iso100.webp"
                    bgFrom="#1B1A2E"
                    bgTo="#12111E"
                    accent="#5C5CBF"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Consistent 24g protein yield — confirmed across 20+ batches",
                    "5.5g BCAAs with leucine at threshold for mTOR activation",
                    "Informed Choice certified — tested for 200+ banned substances",
                    "Dissolves fully in 200ml water in under 20 seconds",
                    "NSF-GMP manufacturing — quality control independent of brand",
                    "Batch QR code on tub links directly to test certificate",
                    "Double Rich Chocolate flavour is genuinely good",
                    "No proprietary protein blend — all protein sources listed individually",
                  ]}
                  cons={[
                    "WPC = ~5% lactose — can cause bloating in lactose-sensitive users",
                    "Sucralose + acesulfame-K — users avoiding artificial sweeteners should look elsewhere",
                    "Aminogen® dose is proprietary — cannot verify efficacy in this product",
                    "Contains soy lecithin — not suitable for soy-allergic individuals",
                    "18% above category average cost-per-gram of protein",
                    "Counterfeit risk on third-party Amazon USA sellers",
                  ]}
                />
              </section>

              {/* ─── SAFETY ─────────────────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 20 }}>
                  <AlertTriangle size={13} style={{ color: "#8B7355", marginTop: 2, flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>
                    This is not medical advice. Consult a qualified healthcare professional before starting any supplement programme.{" "}
                    <Link href="/medical-disclaimer" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclaimer →</Link>
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { group: "Healthy Adults", risk: "Low", detail: "No serious adverse effects at 1–2 scoops/day. Decades of published research support safety of whey protein in healthy individuals." },
                    { group: "Lactose-Sensitive Users", risk: "Moderate", detail: "WPC contains ~5% lactose per serving. May cause bloating, gas, or GI discomfort. Consider WPI (Dymatize ISO100) or lactase enzyme supplementation." },
                    { group: "Kidney Disease (pre-existing)", risk: "Consult Doctor", detail: "High protein intake is contraindicated in CKD. Do not supplement without medical clearance." },
                    { group: "Soy Allergy", risk: "Moderate", detail: "Contains soy lecithin. Cross-reactivity is possible in soy-allergic individuals. Seek sunflower lecithin alternatives." },
                    { group: "Competitive Athletes (tested)", risk: "Low (Certified)", detail: "Informed Choice certification specifically addresses doping test risk. Buy only from official ON store and verify the QR code." },
                  ].map((row) => (
                    <div key={row.group} style={{ display: "grid", gridTemplateColumns: "1fr 130px", gap: 12, padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", alignItems: "start" }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{row.group}</p>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{row.detail}</p>
                      </div>
                      <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textAlign: "center", backgroundColor: row.risk === "Low" ? "rgba(45,106,79,0.1)" : row.risk === "Moderate" ? "rgba(196,98,45,0.1)" : "rgba(26,23,20,0.08)", color: row.risk === "Low" ? "#2D6A4F" : row.risk === "Moderate" ? "#C4622D" : "#1A1714", border: `1px solid ${row.risk === "Low" ? "rgba(45,106,79,0.2)" : row.risk === "Moderate" ? "rgba(196,98,45,0.2)" : "#D4C9B8"}` }}>
                        {row.risk}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="protein (USD)" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 16 }}>
                  {[
                    { label: "2 lb / 907g", servings: "29 servings", usd: "$33–36", inr: "₹2,800–3,200", perServing: "$1.14–1.24" },
                    { label: "5 lb / 2.27kg", servings: "74 servings", usd: "$58–65", inr: "₹4,800–5,800", perServing: "$0.78–0.88" },
                    { label: "10 lb / 4.54kg", servings: "148 servings", usd: "$110–125", inr: "₹9,200–11,000", perServing: "$0.74–0.84" },
                  ].map((tier) => (
                    <div key={tier.label} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#8A8480", marginBottom: 6 }}>{tier.label} · {tier.servings}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{tier.usd}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", marginBottom: 4 }}>{tier.inr}</p>
                      <p style={{ fontSize: 11, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace" }}>{tier.perServing} / serving</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Exchange rate reference: $1 ≈ ₹83–84 (May 2026). Verify current rates before purchase.</p>
              </section>

              {/* ─── WHERE TO BUY ────────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Where to Buy — USA & Global</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Counterfeit risk is real. Only buy from these verified channels and always scan the QR code on the lid.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { channel: "Amazon USA (ON Official Store)", region: "USA", risk: "Low", note: "Buy from 'Optimum Nutrition USA' seller, not third-party fulfilled listings." },
                    { channel: "Flipkart (ON Authorised)", region: "USA", risk: "Low", note: "Order from verified Flipkart Mall listings. Check seller name before checkout." },
                    { channel: "Amazon US (official ON listing)", region: "USA / Global", risk: "Low", note: "Lowest prices for US buyers. Subscribe & Save reduces cost by additional 5–10%." },
                    { channel: "ON Official Website (optimumnutrition.com)", region: "US / Global", risk: "Lowest", note: "Direct-from-brand — zero counterfeit risk. Prices slightly higher than Amazon." },
                    { channel: "Third-party Amazon sellers / local supplements shops", region: "USA", risk: "High", note: "High counterfeit risk. Avoid unless seller has extensive verified reviews. Always scan the QR code." },
                  ].map((row, i) => (
                    <div key={row.channel} style={{ padding: "14px 18px", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr 120px 80px", gap: 12, alignItems: "center" }}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 3 }}>{row.channel}</p>
                        <p style={{ fontSize: 12, color: "#5C5650" }}>{row.note}</p>
                      </div>
                      <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>{row.region}</span>
                      <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", backgroundColor: row.risk === "Low" || row.risk === "Lowest" ? "rgba(45,106,79,0.1)" : "rgba(196,98,45,0.1)", color: row.risk === "Low" || row.risk === "Lowest" ? "#2D6A4F" : "#C4622D", border: `1px solid ${row.risk === "Low" || row.risk === "Lowest" ? "rgba(45,106,79,0.2)" : "rgba(196,98,45,0.2)"}`, whiteSpace: "nowrap" }}>
                        Risk: {row.risk}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FAQ ────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { q: "Is ON Gold Standard a concentrate or isolate?", a: "It is primarily Whey Protein Concentrate (WPC80), with smaller amounts of Whey Protein Isolate and Whey Peptides blended in. At 24g protein per 29.4g scoop, protein density is ~82%. It is not a pure isolate product." },
                    { q: "How much does it cost in USD?", a: "2 lb (29 servings): $33–36. 5 lb (74 servings): $58–65. 10 lb (148 servings): $110–125. In USA: 2 lb is approximately ₹2,800–3,200 depending on platform and offer." },
                    { q: "Is it safe for lactose-intolerant people?", a: "WPC contains approximately 5% lactose per serving (~1.5g per scoop). Many lactose-sensitive users tolerate this level with no symptoms. Severe lactose intolerance should look at whey isolate products (e.g. Dymatize ISO100) or lactose-free options." },
                    { q: "How do I verify if my tub is genuine?", a: "Scan the QR code printed on the lid of the tub. It should link to an Informed Sport batch test certificate at informedsport.com. If the QR code does not scan, links to a generic page, or the batch number does not match the certificate, the product may be counterfeit." },
                    { q: "When should I take it?", a: "Post-workout is the most studied window (within 2 hours of training). However, for muscle gain, total daily protein intake (1.6–2.2g/kg bodyweight) matters more than timing. Use it whenever it is convenient to hit your daily protein target." },
                    { q: "Which flavour should I buy first?", a: "Double Rich Chocolate is the safest first choice — accurate cocoa flavour, widely available, and mixes well in water or milk. It has been our consistent choice across 4 years of use." },
                    { q: "How does it compare to MuscleBlaze Biozyme?", a: "MuscleBlaze Biozyme Whey is the best USA-made alternative — ₹700–1,000 cheaper per kg, 25g protein, enzyme blend for improved absorption. The trade-off is no third-party certification and domestic-only availability. For budget-conscious buyers in USA, Biozyme is a legitimate choice." },
                    { q: "Is it Informed Choice certified in USA?", a: "Yes. The American market tubs carry the same Informed Choice certification. The batch QR code on the lid is valid worldwide. Verify it on informedsport.com using the batch number." },
                  ].map((faq, i) => (
                    <div key={i} style={{ padding: "20px 20px", borderBottom: i < 7 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: 32, backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict · REV-2025-041</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 16 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "#F2EBD9", letterSpacing: "-0.02em", flex: 1 }}>
                      Still the standard.<br />
                      <em style={{ fontWeight: 400, color: "#8A8480", fontSize: "0.85em" }}>For four very good reasons.</em>
                    </h3>
                    <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                  </div>
                  <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 16 }}>
                    Gold Standard Whey earns its name through formula consistency, not marketing. The Informed Choice certification means every batch has been independently tested. The WPC80 matrix delivers reliable leucine loads. The mixability is genuinely superior to every alternative I have tried. And after 4 years of continuous use — with orders I can document — I have never found a reason to switch for primary protein needs.
                  </p>
                  <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 24 }}>
                    The caveats are real: it costs ~18% more per gram of protein than category average, it is not suitable for lactose intolerance, and it is not an isolate. For those constraints, better alternatives exist. For everyone else — this is the safest, most consistent choice in the whey protein market.
                  </p>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 24 }}>
                    {[
                      { label: "FSP Composite", value: `${rubric.compositeScore.toFixed(1)}/10`, color: "#F2EBD9" },
                      { label: "Editorial Score", value: `${rubric.editorialScore}/10`, color: "#2D6A4F" },
                      { label: "4-Year Verdict", value: "Repurchase", color: "#C4622D" },
                    ].map((s) => (
                      <div key={s.label} style={{ padding: "10px 16px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650", marginBottom: 4 }}>{s.label.toUpperCase()}</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link href="https://www.amazon.in/s?k=optimum+nutrition+gold+standard+whey" target="_blank" rel="nofollow noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon USA <ExternalLink size={13} />
                    </Link>
                    <Link href="https://www.amazon.com/s?k=optimum+nutrition+gold+standard+whey" target="_blank" rel="nofollow noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #2D2926", color: "#A89880", fontSize: 13, fontWeight: 500, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon US <ExternalLink size={13} />
                    </Link>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Morton RW et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med.",
                      "Churchward-Venne TA et al. (2012). Supplementation of a suboptimal protein dose with leucine or essential amino acids: effects on myofibrillar protein synthesis at rest and following resistance exercise in men. J Physiol.",
                      "Witard OC et al. (2014). Myofibrillar muscle protein synthesis rates subsequent to a meal in response to small and large bolus doses of dairy and soy protein. Am J Clin Nutr.",
                      "Tang JE et al. (2009). Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. J Appl Physiol.",
                      "West DW et al. (2011). Whey protein stimulates postprandial muscle protein accretion more effectively than do casein and casein hydrolysate in older men. Am J Clin Nutr.",
                      "Informed Sport Certificate: ON Gold Standard Whey. Accessible via batch QR code at informedsport.com.",
                      "NSF International. GMP Certification Program — Dietary Supplements. nsf.org/food/gmp-certification.",
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
              <Link href="/category/protein-powder" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All protein reviews →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {relatedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
          </div>
        </section>

        {/* ── Related Ingredients ───────────────────────────────────────────── */}
        <section style={{ borderTop: "1px solid #D4C9B8" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Ingredient Research</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>The science behind the label</h3>
              </div>
              <Link href="/ingredients" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All ingredients →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {relatedIngredients.map((ing) => (
                <Link key={ing.slug} href={`/ingredients/${ing.slug}`} style={{ textDecoration: "none" }}>
                  <div className="hub-card" style={{ padding: 20, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4", height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480" }}>{ing.figNumber} · {ing.category}</p>
                      <EvidenceBadge level={ing.evidenceLevel} showIcon={false} />
                    </div>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{ing.name}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, marginBottom: 10 }}>{ing.summary}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace" }}>Read profile →</span>
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
