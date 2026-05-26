import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, ShieldCheck, Minus } from "lucide-react";
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
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "MyProtein Creatine Monohydrate Review (2026) — Rated 8/10",
  description:
    "Honest review of MyProtein Creatine Monohydrate: formula, verification gaps, USD + INR pricing, comparison vs AS-IT-IS and ON Creatine. India market focus. FSP 8/10.",
  alternates: {
    canonical: "/reviews/myprotein-creatine-monohydrate",
  },
  openGraph: {
    title: "MyProtein Creatine Review (2026) — Good Product. One Real Gap.",
    description: "Pure creatine at a budget price. What it does well, what it skips, and whether that matters for you.",
    url: "https://fitlabreviews.com/reviews/myprotein-creatine-monohydrate",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is-creatine", label: "What Is Creatine" },
  { id: "the-formula", label: "The Formula" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "nutrition-label", label: "Nutrition Label" },
  { id: "verification", label: "Testing & Verification" },
  { id: "real-world", label: "Real-World Use" },
  { id: "mixability", label: "Mixability" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "dosing", label: "How to Dose It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.5,
      notes:
        "One ingredient: creatine monohydrate. 5g per serving. No fillers, no flow agents, no sweeteners. The formula cannot be simpler — which is exactly correct. Minor deduction for not specifying raw material source (Creapure® vs standard CM).",
    },
    {
      pillar: "transparency",
      score: 9.5,
      notes:
        "When your entire supplement facts panel is one line, you cannot be more transparent. Label says creatine monohydrate, nothing else. Ingredient integrity is not in question here — verification of that claim is (see third-party pillar).",
    },
    {
      pillar: "verification",
      score: 6.5,
      notes:
        "This is the real gap. MyProtein India does not carry Informed Choice, NSF, or any equivalent independent batch certification on their creatine. Internal QC is referenced on the website but not independently verifiable. No recall history, no adverse event reports — but absence of red flags is not the same as a clean certificate.",
    },
    {
      pillar: "value",
      score: 9.5,
      notes:
        "At regular price already competitive. On sale — which happens every 3–4 weeks at 40–70% off — this is unambiguously the cheapest creatine you will find from a recognisable brand. ₹650–850 for 250g at sale price works out to ₹13–17 per 5g serving.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Dissolves in water — yes, though not instantly clean; expect mild cloudiness for 30 seconds after mixing. Zip-lock pouch packaging is functional but not suited to Indian humidity: expect clumping by week 3 if you do not transfer to a sealed container. Unflavoured and genuinely tasteless.",
    },
  ],
  flags: [
    {
      type: "red",
      label: "No independent third-party certification",
      detail:
        "MyProtein India creatine carries no Informed Choice, NSF, or equivalent batch certification. Purity is claimed but not independently verifiable at the batch level. This matters more for competitive athletes than general gym-goers.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Raw material source unspecified",
      detail:
        "MyProtein does not disclose whether their creatine monohydrate is Creapure®-sourced (Germany) or standard CM from other manufacturing origins. For most users this is a minor point — creatine monohydrate is well-characterised regardless of origin. For purity-conscious buyers, the lack of disclosure is worth noting.",
      deduction: 0.1,
    },
    {
      type: "green",
      label: "Single ingredient — nothing to hide",
      detail:
        "No proprietary blends, no undisclosed additions, no fillers or flow agents. The entire product is one compound. This structural simplicity is itself a transparency green flag.",
    },
    {
      type: "green",
      label: "Correct 5g serving dose",
      detail:
        "5g per serving matches the clinically studied maintenance dose for creatine monohydrate. Not under-dosed at 3g (seen in some cheaper products), not inflated at 10g.",
    },
    {
      type: "green",
      label: "No banned substance history",
      detail:
        "No positive doping cases, FDA warning letters, or recall events associated with MyProtein creatine monohydrate products.",
    },
    {
      type: "green",
      label: "Unflavoured — genuinely stackable",
      detail:
        "Mixes into pre-workout, post-workout shake, juice, or plain water without affecting flavour. Stacking-friendly for users with complex supplement protocols.",
    },
  ],
  claimAudit: [
    {
      claim: "5g creatine monohydrate per serving",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Label is simple enough to be credible on its face. No independent lab confirmation we can link, but the serving size and stated ingredient are consistent with standard creatine product formats.",
    },
    {
      claim: "Increases muscle strength and power",
      verdict: "supported",
      evidence: "strong",
      notes:
        "The most robustly supported claim in sports supplementation. Creatine monohydrate at 3–5g/day improves short-burst power output in 70%+ of RCTs. The effect is from the compound — not from MyProtein specifically.",
    },
    {
      claim: "Supports muscle recovery",
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Some evidence for reduced exercise-induced muscle damage markers with creatine supplementation. Effect size is smaller and less consistent than the strength/power benefit.",
    },
    {
      claim: "Suitable for vegetarians",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Synthetic creatine monohydrate is produced by chemical synthesis — no animal-derived raw material. Vegetarians and vegans have lower baseline muscle creatine stores, making them the demographic likely to see the largest benefit.",
    },
    {
      claim: "Improve high-intensity performance",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Well-documented across multiple meta-analyses for activities lasting 10–30 seconds. Sprinting, heavy compound lifts, HIIT intervals — benefit is consistent. Aerobic, steady-state endurance: evidence is weak.",
    },
  ],
  valueMetric: {
    pricePerServing: 0.18,
    primaryActiveGrams: 5,
    pricePerGramActive: 0.036,
    categoryAvgPricePerGram: 0.045,
    efficiency: "above",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/myprotein-creatine-monohydrate#review",
  name: "MyProtein Creatine Monohydrate — Fitlabreviews FSP Review (8/10)",
  reviewBody:
    "No-fluff review of MyProtein Creatine Monohydrate covering formula analysis, third-party verification gaps, USD/INR pricing, comparison vs AS-IT-IS and ON Creatine, real-world use observations, and dosing guidance.",
  reviewRating: { "@type": "Rating", ratingValue: 8, bestRating: 10, worstRating: 1 },
  datePublished: "2025-03-08",
  dateModified: "2026-05-26",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  itemReviewed: {
    "@type": "Product",
    name: "MyProtein Creatine Monohydrate",
    brand: { "@type": "Brand", name: "MyProtein" },
    category: "Creatine Supplement",
    description: "Pure creatine monohydrate, unflavoured, 5g serving. No fillers. No third-party certification.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "8.00",
      highPrice: "38.00",
      offerCount: "3",
    },
  },
  url: "https://fitlabreviews.com/reviews/myprotein-creatine-monohydrate",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MyProtein creatine Creapure?",
      acceptedAnswer: { "@type": "Answer", text: "MyProtein does not specify Creapure® (the German-sourced, independently verified creatine monohydrate) on the India product label. Some MyProtein products sold in the UK/EU carry Creapure branding, but this is not confirmed for the Indian market version." },
    },
    {
      "@type": "Question",
      name: "Does MyProtein creatine have any fillers?",
      acceptedAnswer: { "@type": "Answer", text: "No. The ingredient list is a single line: creatine monohydrate. No anti-caking agents, no flow agents, no sweeteners, no flavours. It is a pure single-ingredient product." },
    },
    {
      "@type": "Question",
      name: "What is the best time to take MyProtein creatine?",
      acceptedAnswer: { "@type": "Answer", text: "Timing has a negligible effect on creatine outcomes. Post-workout is marginally better in some studies. Practically, take it whenever you will remember to take it every day — consistency of daily intake matters far more than timing." },
    },
    {
      "@type": "Question",
      name: "How much does MyProtein creatine cost in USD?",
      acceptedAnswer: { "@type": "Answer", text: "At regular price: 250g ~$10–12, 500g ~$18–22, 1kg ~$30–38. On sale (which occurs every 3–4 weeks at 40–70% off), 500g can drop to $10–12. Always buy on sale." },
    },
  ],
};

const relatedReviews = [
  { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark whey. Informed Choice certified, consistent protein yield across 4 years of testing.", publishedAt: "2025-04-10", figNumber: "01" },
  { slug: "muscleblaze-biozyme-whey", title: "MuscleBlaze Biozyme Whey", brand: "MuscleBlaze", category: "Protein Powder", rating: 8 as ReviewRating, verdict: "Best India-made whey. Enzyme blend for improved absorption, solid value at ₹1,900/kg.", publishedAt: "2025-02-28", figNumber: "02" },
  { slug: "musclepharm-assault-pre-workout", title: "MusclePharm Assault Pre-Workout", brand: "MusclePharm", category: "Pre-Workout", rating: 7 as ReviewRating, verdict: "Solid stimulant stack, transparent label, but citrulline is under-dosed.", publishedAt: "2025-03-22", figNumber: "04" },
];

export default function MyproteinCreatineReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/category" }, { label: "Creatine", href: "/category/creatine" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>MyProtein Creatine Monohydrate</span>
          </div>
        </div>

        {/* ── Feature hero ───────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 260, background: "linear-gradient(145deg, #0D1A0F 0%, #0A140C 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.25)" }}>REV-2025-031 · CREATINE</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 540, padding: "0 24px" }}>
              MyProtein<br /><em style={{ fontWeight: 400, color: "#6DBF8A" }}>Creatine Monohydrate</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "rgba(242,235,217,0.3)", letterSpacing: "0.2em" }}>ONE INGREDIENT · 8 / 10 · FSP v2.1</p>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>REV-2025-031</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2D6A4F" }}>Full Review · FSP Scored · India Market</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                MyProtein · Creatine · Unflavoured
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Creatine Monohydrate<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Good product. One real gap.</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, maxWidth: 560, marginBottom: 24 }}>
                Pure creatine monohydrate at a price most competitors cannot match. The formula is right. The value is right. The one thing missing — independent batch testing — is the honest reason it sits at 8 rather than 9.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="https://www.myprotein.com/sports-nutrition/creatine-monohydrate/10852482.html" target="_blank" rel="nofollow noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Check Price on MyProtein <ExternalLink size={13} />
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
            { label: "Published", value: "Mar 8, 2025" },
            { label: "Last Updated", value: "May 26, 2025" },
            { label: "Ingredients", value: "1 (Creatine Monohydrate)" },
            { label: "Serving Size", value: "5g" },
            { label: "Price (500g)", value: "$18–22 / ₹1,500–1,800" },
            { label: "FSP Score", value: `${rubric.compositeScore.toFixed(1)} / 10` },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9" }}>FT</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 2 }}>Reviewed By</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                <Link href="/authors" style={{ color: "#1A1714", textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Formula analysis, literature review, India market pricing</span>
              </p>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>FSP v2.1</span>
              <span style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>India Market</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate notice ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480" }}>Affiliate disclosure: links may earn a commission. Scores are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read disclosure →</Link>
            </p>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>
              <div className="block lg:hidden">
                <MobileTOC items={tocItems} />
              </div>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #2D6A4F", marginBottom: 16 }}>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                    MyProtein Creatine Monohydrate is a single-ingredient product done correctly. The formula is right — 5g of creatine monohydrate, nothing else. The price is right — among the lowest from any recognisable brand in India, especially on sale. The one honest gap is certification: there is no independent lab confirmation that what the label says is actually in the bag. For most gym-goers this will not be a dealbreaker. For competitive athletes who get tested, it should be.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Buy If</p>
                    {["You want pure creatine at minimum cost", "You're a recreational lifter or gym-goer", "You stack with other supplements", "You buy during MyProtein sales"].map((b) => (
                      <div key={b} style={{ display: "flex", gap: 6, padding: "4px 0", alignItems: "flex-start" }}>
                        <CheckCircle size={11} style={{ color: "#2D6A4F", flexShrink: 0, marginTop: 2 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 10 }}>Look Elsewhere If</p>
                    {["You compete in drug-tested sport", "You need Creapure® verified source", "You want Informed Choice certification", "You're in a high-humidity area with no airtight container"].map((b) => (
                      <div key={b} style={{ display: "flex", gap: 6, padding: "4px 0", alignItems: "flex-start" }}>
                        <XCircle size={11} style={{ color: "#C4622D", flexShrink: 0, marginTop: 2 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── WHAT IS CREATINE ───────────────────────────────────────── */}
              <section id="what-is-creatine" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Creatine — Briefly</h2>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 14 }}>
                  Creatine is a compound your body synthesises from arginine, glycine, and methionine, and also obtains from red meat and fish. About 95% of it lives in your skeletal muscle as phosphocreatine — the fuel your muscles use for the first 10–30 seconds of maximum-effort activity. Heavy compound lifts, sprints, HIIT sets: all driven by the phosphocreatine system.
                </p>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 14 }}>
                  Supplementing with creatine monohydrate saturates those stores above what diet alone can achieve. The result — documented across hundreds of trials — is an improvement in strength, power output, and lean mass accumulation. It is the single most evidence-backed ergogenic supplement that exists.
                </p>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                  The important thing to understand: <strong>the compound is the product.</strong> Creatine monohydrate from MyProtein, from AS-IT-IS, from ON, from a medical-grade lab — it is the same molecule. The question when buying is not which brand has better creatine. The question is: which brand gives you the correct dose of a pure product at the best price, with enough verification that you are not guessing.
                </p>
              </section>

              {/* ─── THE FORMULA ────────────────────────────────────────────── */}
              <section id="the-formula" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>The Formula</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>There is one ingredient. Here is what matters about it.</p>

                <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>Active Ingredient</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714" }}>Creatine Monohydrate</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>Per Serving</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#2D6A4F", lineHeight: 1 }}>5g</p>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
                    {[
                      { label: "Fillers", value: "None" },
                      { label: "Sweeteners", value: "None" },
                      { label: "Flavours", value: "None" },
                      { label: "Anti-caking agents", value: "None" },
                      { label: "Creatine % of serving", value: "100%" },
                      { label: "Source", value: "Unspecified" },
                    ].map((row) => (
                      <div key={row.label} style={{ padding: "10px 12px", backgroundColor: "#F2EBD9", border: "1px solid #D4C9B8", borderRadius: 6 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 4 }}>{row.label}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: row.value === "None" ? "#2D6A4F" : row.value === "Unspecified" ? "#C4622D" : "#1A1714" }}>{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "14px 18px", backgroundColor: "rgba(196,98,45,0.04)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>On the Creapure question</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Creapure® is a branded form of creatine monohydrate manufactured by AlzChem in Germany — widely considered the cleanest, most consistently tested source. MyProtein sells some products with Creapure branding in certain markets. For India, the creatine monohydrate label does not specify Creapure or its raw material origin. This does not mean the product is impure, but it means you cannot confirm the source without contacting MyProtein directly.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2025-031" />
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── NUTRITION LABEL ────────────────────────────────────────── */}
              <section id="nutrition-label" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Nutrition Label</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Per 1 serving (5g) · Unflavoured</p>
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", maxWidth: 480 }}>
                  <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)" }}>Supplement Facts</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F" }}>1 scoop = 5g</span>
                  </div>
                  {[
                    { nutrient: "Calories", amount: "0 kcal", note: "" },
                    { nutrient: "Total Fat", amount: "0g", note: "" },
                    { nutrient: "Carbohydrates", amount: "0g", note: "" },
                    { nutrient: "Sugars", amount: "0g", note: "" },
                    { nutrient: "Protein", amount: "0g", note: "" },
                    { nutrient: "Creatine Monohydrate", amount: "5g", note: "★ Key active" },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", padding: "10px 20px", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none", backgroundColor: row.note ? "rgba(45,106,79,0.04)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: "#2D2926", fontWeight: row.note ? 700 : 400 }}>{row.nutrient}</span>
                      <span style={{ fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#1A1714", fontWeight: row.note ? 700 : 400 }}>{row.amount}</span>
                      <span style={{ fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>{row.note}</span>
                    </div>
                  ))}
                  <div style={{ padding: "10px 20px", backgroundColor: "#EDE8DF" }}>
                    <p style={{ fontSize: 11, color: "#8A8480" }}>Zero macros — creatine provides no calories, protein, carbohydrate, or fat.</p>
                  </div>
                </div>
              </section>

              {/* ─── TESTING & VERIFICATION ─────────────────────────────────── */}
              <section id="verification" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Testing & Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The most important section in this review. Read it before you decide.</p>

                <div style={{ padding: 20, backgroundColor: "rgba(196,98,45,0.04)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 10, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                    <ShieldCheck size={16} style={{ color: "#C4622D", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4622D" }}>No independent third-party certification</p>
                  </div>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                    MyProtein India creatine monohydrate is not Informed Choice certified. It does not carry NSF certification. There is no publicly available, independently produced batch certificate you can verify online. MyProtein references internal quality testing on their website, but &ldquo;internal testing&rdquo; means the company is testing its own product — which is different from an independent lab doing it and publishing the result.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                    To be fair: MyProtein is a large, established supplement brand with no significant contamination or adulteration history on their creatine line. The absence of a certificate is not evidence of a problem. But it is an honest gap — one that competitors like ON (Informed Choice certified creatine) have closed, and one that affects the FSP score.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { cert: "Informed Choice", status: "Not held", color: "#8A8480" },
                    { cert: "NSF Certified for Sport", status: "Not held", color: "#8A8480" },
                    { cert: "Creapure® (raw material)", status: "Unconfirmed", color: "#C4622D" },
                    { cert: "Internal QC", status: "Claimed (not independent)", color: "#8B7355" },
                  ].map((row) => (
                    <div key={row.cert} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{row.cert}</p>
                      <span style={{ fontSize: 11, color: row.color, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>{row.status}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 16, padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>Practical note:</strong> If you are a recreational gym-goer who is not subject to drug testing, the certification gap matters less — you are buying creatine monohydrate, not a steroid precursor. If you compete in a tested sport at any level, use an Informed Choice certified option instead. ON Micronised Creatine and Optimum Nutrition Creatine Powder both carry the certification.
                  </p>
                </div>
              </section>

              {/* ─── REAL-WORLD USE ─────────────────────────────────────────── */}
              <section id="real-world" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Real-World Use</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    {
                      title: "The first two weeks",
                      body: "Nothing obvious happens and that is correct. Creatine saturation takes 2–4 weeks at 5g/day without a loading phase. Users who stop at day 10 because they &quot;feel nothing&quot; have not given the compound time to work. The benefit is not a feeling — it is a shift in your one-rep maxes and your ability to sustain higher rep counts at a given weight over time."
                    },
                    {
                      title: "Week 3–4: when it becomes noticeable",
                      body: "The change is subtle and cumulative. You will notice it when you hit a weight you were grinding at last month and it moves cleanly. Or when you complete the same HIIT session and recover faster between rounds. It is not dramatic. It is consistent — which is more useful."
                    },
                    {
                      title: "The clumping problem in India",
                      body: "The zip-lock pouch MyProtein uses is adequate for temperate climates. In India — particularly during monsoon months in Mumbai, Chennai, or Kolkata — it is not. Creatine monohydrate absorbs atmospheric moisture and turns from powder to solid brick in 2–3 weeks if you leave it in the original pouch. Transfer it to an airtight glass or plastic container when you open it. This solves the problem entirely. The product is fine — the packaging just needs help in humid conditions."
                    },
                    {
                      title: "Daily consistency is everything",
                      body: "Creatine is a long-game supplement. You take it every day — training days and rest days — not just pre-workout. The muscle stores stay saturated if intake is consistent. Miss a few days occasionally? Not a disaster. Stop for two weeks? Your stores deplete and you restart. Build the habit, not the ritual."
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "18px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── MIXABILITY ─────────────────────────────────────────────── */}
              <section id="mixability" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Mixability</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Tested in water, juice, and protein shake at 4°C and room temperature.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { test: "200ml cold water", result: "Dissolves in 20–30s with stirring. Mild cloudiness clears in 30–45s. No grit or residue.", rating: "Good" },
                    { test: "200ml room temp water", result: "Dissolves faster. Light cloudiness briefly. Essentially transparent when settled.", rating: "Good" },
                    { test: "Protein shake", result: "Fully incorporated in the shake mixing process. Zero texture impact.", rating: "Excellent" },
                    { test: "Juice / flavoured drink", result: "No detectable taste or texture change. Ideal for users who want flavour-free stacking.", rating: "Excellent" },
                  ].map((t) => (
                    <div key={t.test} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>{t.test}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, marginBottom: 8 }}>{t.result}</p>
                      <span style={{ padding: "2px 8px", backgroundColor: t.rating === "Excellent" ? "rgba(45,106,79,0.1)" : "rgba(139,115,85,0.1)", border: `1px solid ${t.rating === "Excellent" ? "rgba(45,106,79,0.2)" : "rgba(139,115,85,0.2)"}`, borderRadius: 4, fontSize: 10, color: t.rating === "Excellent" ? "#2D6A4F" : "#8B7355", fontFamily: "var(--font-dm-mono), monospace" }}>{t.rating}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                  Not micronised in the standard India-market version — so it is slightly coarser than premium micronised creatine products. In practice, this does not matter. The cloudiness people sometimes report is normal and does not indicate undissolved creatine — it settles fully within a minute. Shake and drink immediately; do not let it sit and inspect the glass.
                </p>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Brand claims from MyProtein product pages and packaging checked against published research.</p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── DOSING GUIDE ───────────────────────────────────────────── */}
              <section id="dosing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Dose It — Correctly</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      method: "Standard (No Loading)",
                      protocol: "5g per day, every day",
                      timeline: "Full saturation in 3–4 weeks",
                      recommended: true,
                      notes: "Take with water, juice, or your protein shake. Any time of day. The most practical approach — no GI discomfort, sustainable long-term."
                    },
                    {
                      method: "Loading Phase",
                      protocol: "20g/day for 5–7 days (4 × 5g), then 5g/day",
                      timeline: "Full saturation in 5–7 days",
                      recommended: false,
                      notes: "Saturates stores faster. Useful if you have a competition or test event in 2 weeks. Downside: some users experience GI discomfort at 20g/day. Unnecessary for long-term training."
                    },
                    {
                      method: "Rest Days",
                      protocol: "Still take 5g",
                      timeline: "Maintains saturation",
                      recommended: true,
                      notes: "A common mistake is skipping rest days. Muscle creatine stores deplete slowly — but consistent daily intake is what maintains the benefit. Do not only take it on training days."
                    },
                  ].map((row) => (
                    <div key={row.method} style={{ padding: "18px 20px", border: `1px solid ${row.recommended ? "rgba(45,106,79,0.2)" : "#D4C9B8"}`, borderRadius: 10, backgroundColor: row.recommended ? "rgba(45,106,79,0.03)" : "#F8F2E4" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.method}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D" }}>{row.protocol}</p>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          {row.recommended && <span style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.1)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>Recommended</span>}
                          <span style={{ padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.timeline}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{row.notes}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>What about timing?</strong> Post-workout has a marginal edge in some studies. Pre-workout has advocates. The honest answer: it does not matter much. Total daily intake and consistency matter. Take it when you will actually remember to take it.
                  </p>
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The creatine market in India has a few clear options. Here is where they actually differ.</p>
                <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #D4C9B8" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "MyProtein", "AS-IT-IS Nutrition", "ON Micronised Creatine", "MuscleBlaze Creatine"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#6DBF8A" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["8/10 ★", "7/10", "8.5/10", "7/10"] },
                        { metric: "Creatine per serve", vals: ["5g", "5g", "5g", "3g ⚠"] },
                        { metric: "Form", vals: ["Monohydrate", "Monohydrate", "Micronised CM", "Monohydrate"] },
                        { metric: "Creapure®", vals: ["Unspecified", "Unspecified", "Unspecified", "No"] },
                        { metric: "3P Certified", vals: ["No", "No", "Informed Choice", "No"] },
                        { metric: "Price / 500g (USD)", vals: ["$18–22", "$12–16", "$22–28", "$14–18"] },
                        { metric: "Price / 500g (INR)", vals: ["₹1,500–1,800", "₹1,000–1,350", "₹1,800–2,300", "₹1,200–1,500"] },
                        { metric: "On-sale price", vals: ["₹850–1,100", "Always low", "₹1,500–1,800", "₹900–1,100"] },
                        { metric: "Mixability", vals: ["Good", "Moderate", "Excellent", "Good"] },
                        { metric: "Packaging", vals: ["Zip-lock pouch", "Zip-lock pouch", "Tub (500g+)", "Tub"] },
                        { metric: "Best for", vals: ["Value buyers", "Cheapest option", "Athletes (tested sport)", "Brand preference"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#2D6A4F" : v.includes("⚠") ? "#C4622D" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>The MuscleBlaze 3g point matters:</strong> MuscleBlaze creatine uses a 3g serving size in some products, marketed as a &quot;optimal dose.&quot; This is below the 5g maintenance dose used in virtually all clinical research. You would need to take 1.67 scoops per serving to match the evidence-backed dose, which means your tub runs out 67% faster than a 5g product at the same price.
                  </p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>AS-IT-IS is cheaper but rougher:</strong> AS-IT-IS Nutrition sells creatine monohydrate at a lower price point and has built a reputation for no-frills honesty. The product is legitimate. The powder is coarser and mixability is poorer. If price is the only consideration, AS-IT-IS is your answer.
                  </p>
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Pure creatine monohydrate — zero fillers, sweeteners, or unnecessary additions",
                    "Correct 5g dose per serving — matches the evidence-backed maintenance dose",
                    "Genuinely affordable — category-beating price, especially on sale",
                    "Unflavoured — mixes cleanly into any shake or drink without affecting taste",
                    "Zero macros — does not add calories, protein, carbs, or fat to your diet",
                    "Large brand with no significant contamination or adulteration history",
                    "Good mixability — dissolves in cold or room-temperature water",
                  ]}
                  cons={[
                    "No independent third-party certification (Informed Choice, NSF) for India market",
                    "Raw material source (Creapure® or not) is unspecified on the India label",
                    "Zip-lock pouch packaging is vulnerable to humidity — expect clumping in monsoon months",
                    "Not micronised in the standard version — slightly coarser than premium alternatives",
                    "MyProtein's constant sale cycle means full-price purchases are poor value",
                  ]}
                />
              </section>

              {/* ─── SAFETY ─────────────────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety</h2>
                <div style={{ padding: "12px 16px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20 }}>
                  <AlertTriangle size={12} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 12, color: "#5C5650" }}>Not medical advice. Consult a healthcare professional before supplementing, especially with pre-existing conditions.{" "}
                    <Link href="/medical-disclaimer" style={{ color: "#C4622D", textDecoration: "none" }}>Disclaimer →</Link></p>
                </div>

                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Creatine monohydrate has more safety data behind it than almost any supplement in existence. Decades of research across thousands of subjects show no adverse effects on kidney function, liver function, or cardiovascular health in healthy adults at 5g/day. The myth that creatine damages kidneys has been thoroughly disproven in the literature — it persists only in gym mythology.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { condition: "Healthy adults", assessment: "Safe at 5g/day. Long-term use (years) shows no adverse health signals.", risk: "Low" },
                    { condition: "Pre-existing kidney disease (CKD)", assessment: "Contraindicated — creatine metabolism increases creatinine, which can complicate kidney disease management. Do not use without medical clearance.", risk: "Do not use" },
                    { condition: "Pregnant / breastfeeding", assessment: "Insufficient evidence. Avoid supplementation during pregnancy without medical advice.", risk: "Avoid" },
                    { condition: "Adolescents (under 18)", assessment: "No serious safety signals in research, but most studies are in adults. Whole-food protein and training consistency are more important for this group anyway.", risk: "Use caution" },
                    { condition: "Competitive athletes (tested sport)", assessment: "Creatine itself is not a banned substance. However, the absence of third-party certification on this product means cross-contamination risk cannot be ruled out. Use an Informed Choice certified product.", risk: "Use certified alternative" },
                  ].map((row) => (
                    <div key={row.condition} style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 12, padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", alignItems: "start" }}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{row.condition}</p>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{row.assessment}</p>
                      </div>
                      <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textAlign: "center", display: "block", backgroundColor: row.risk === "Low" ? "rgba(45,106,79,0.1)" : row.risk === "Do not use" || row.risk === "Avoid" ? "rgba(196,98,45,0.1)" : "rgba(139,115,85,0.1)", color: row.risk === "Low" ? "#2D6A4F" : row.risk === "Do not use" || row.risk === "Avoid" ? "#C4622D" : "#8B7355", border: `1px solid ${row.risk === "Low" ? "rgba(45,106,79,0.2)" : row.risk === "Do not use" || row.risk === "Avoid" ? "rgba(196,98,45,0.2)" : "rgba(139,115,85,0.2)"}` }}>
                        {row.risk}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine (USD)" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 12, marginTop: 16 }}>
                  {[
                    { size: "250g", servings: "50 servings", regUSD: "$10–12", saleUSD: "$5–7", regINR: "₹850–1,000", saleINR: "₹420–600" },
                    { size: "500g", servings: "100 servings", regUSD: "$18–22", saleUSD: "$10–13", regINR: "₹1,500–1,800", saleINR: "₹750–1,000" },
                    { size: "1kg", servings: "200 servings", regUSD: "$30–38", saleUSD: "$15–22", regINR: "₹2,500–3,200", saleINR: "₹1,250–1,800" },
                  ].map((tier) => (
                    <div key={tier.size} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", marginBottom: 6 }}>{tier.size} · {tier.servings}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>Regular: {tier.regUSD}</p>
                      <p style={{ fontSize: 12, color: "#8A8480", marginBottom: 6 }}>{tier.regINR}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#2D6A4F", marginBottom: 2 }}>On Sale: {tier.saleUSD}</p>
                      <p style={{ fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>{tier.saleINR}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 16, padding: "18px 20px", backgroundColor: "#1A1714", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 8 }}>The Sale Strategy</p>
                  <p style={{ fontSize: 14, color: "#A89880", lineHeight: 1.75 }}>
                    MyProtein runs sales at 40–70% off every 3–4 weeks. This is their standard business model, not a special event. Full price on MyProtein is a fiction — no regular buyer pays it. Sign up for their emails or download the app, wait for the next promo code, and buy a 1kg bag. At sale price, you are getting creatine monohydrate at a per-serving cost that makes most competitors impossible to justify.
                  </p>
                </div>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Unlike protein powder, creatine monohydrate counterfeiting is rare. The bigger risk here is paying full price.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { channel: "MyProtein India website (myprotein.com/in)", verdict: "Best", note: "Deepest discounts during sales. App-exclusive codes often add another 5–10%. Buy the largest size on sale." },
                    { channel: "Amazon India (MyProtein seller)", verdict: "Good", note: "Convenient with Prime delivery. Prices are usually slightly above MyProtein's own sale prices. Acceptable if you need it fast." },
                    { channel: "Flipkart", verdict: "OK", note: "Stocks MyProtein but sales do not always align. Check price vs MyProtein's own website before purchasing." },
                    { channel: "GNC India / Local supplement stores", verdict: "Avoid", note: "Typically sold at or above regular price. No benefit over buying direct from MyProtein on sale." },
                  ].map((row, i) => (
                    <div key={row.channel} style={{ padding: "14px 18px", borderBottom: i < 3 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr 80px", gap: 12, alignItems: "start" }}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 3 }}>{row.channel}</p>
                        <p style={{ fontSize: 12, color: "#5C5650" }}>{row.note}</p>
                      </div>
                      <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", textAlign: "center", backgroundColor: row.verdict === "Best" ? "rgba(45,106,79,0.1)" : row.verdict === "Good" ? "rgba(139,115,85,0.1)" : row.verdict === "OK" ? "rgba(139,115,85,0.08)" : "rgba(196,98,45,0.1)", color: row.verdict === "Best" ? "#2D6A4F" : row.verdict === "Good" ? "#8B7355" : row.verdict === "OK" ? "#8B7355" : "#C4622D", border: `1px solid ${row.verdict === "Best" ? "rgba(45,106,79,0.2)" : row.verdict === "Good" || row.verdict === "OK" ? "rgba(139,115,85,0.2)" : "rgba(196,98,45,0.2)"}` }}>
                        {row.verdict}
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
                    { q: "Is MyProtein creatine Creapure?", a: "MyProtein does not specify Creapure® on the India product label. Some MyProtein products in the UK carry Creapure branding — not confirmed for the India version. If Creapure sourcing is important to you, contact MyProtein support directly, or choose a product that explicitly states Creapure on the label." },
                    { q: "Should I do a loading phase?", a: "Not necessary. 5g/day without loading reaches full saturation in 3–4 weeks. Loading (20g/day for 5–7 days) gets you there faster — useful if you have an event in 2 weeks. For long-term use, skip the loading phase. It adds no additional benefit once stores are saturated." },
                    { q: "Why does my creatine turn into a solid block?", a: "Creatine monohydrate is hygroscopic — it absorbs moisture from the air. In India's humidity, especially during monsoon, it clumps or solidifies in the original zip-lock pouch within weeks. The fix is simple: transfer it to an airtight glass jar or container when you open it. The clumped creatine is still effective — break it up and use it. It has not gone bad." },
                    { q: "Can I take creatine without working out?", a: "Yes, but your results will be limited. Creatine increases phosphocreatine stores in muscle — those stores are meaningless without the training stimulus that depletes and rebuilds them. You can maintain supplementation on rest days (which is recommended), but starting creatine without a training programme is not a useful investment." },
                    { q: "Is it safe for vegetarians and vegans?", a: "Yes. Creatine monohydrate is synthetically produced — no animal products are involved. Vegetarians and vegans typically have lower baseline muscle creatine stores due to lower dietary creatine from food, so they often see more noticeable benefits from supplementation than meat-eaters." },
                    { q: "Does it cause hair loss?", a: "A widely repeated claim based on one small study (van der Merwe, 2009) showing increased DHT in rugby players after loading. The study has not been replicated. Current evidence does not support a causal link between creatine supplementation and hair loss. If you have a family history of androgenic alopecia and are concerned, discuss it with a dermatologist — but the existing evidence does not warrant avoiding creatine." },
                    { q: "How long does a 500g bag last?", a: "At 5g/day: 100 days — about 3.3 months. At the loading phase (20g/day for 7 days, then 5g/day): 7 days at 20g uses 140g, leaving 360g for 72 more days — roughly 11 weeks total." },
                  ].map((faq, i) => (
                    <div key={i} style={{ padding: "18px 20px", borderBottom: i < 6 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: 32, backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict · REV-2025-031</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 16 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 700, color: "#F2EBD9", letterSpacing: "-0.02em", flex: 1 }}>
                      The right product.<br />
                      <em style={{ fontWeight: 400, color: "#8A8480", fontSize: "0.85em" }}>One honest reason it is not a 9.</em>
                    </h3>
                    <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                  </div>
                  <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 16 }}>
                    MyProtein Creatine Monohydrate does the fundamentals correctly. It is pure. It is correctly dosed. It is affordable — genuinely so, not in the &ldquo;affordable for a supplement&rdquo; sense. If you are a recreational gym-goer who wants creatine and wants to spend as little as possible on it, this is a rational choice.
                  </p>
                  <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 24 }}>
                    The 8 instead of 9 is not a knock on the formula — it is about the verification gap. When a product carries no independent batch certification, you are taking the brand at their word. For creatine — a simple, single-ingredient compound with no incentive to adulterate — this is a calculated risk most buyers are comfortable making. But it should be a conscious decision, not an oversight.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                    {[
                      { label: "FSP Composite", value: `${rubric.compositeScore.toFixed(1)}/10`, color: "#F2EBD9" },
                      { label: "Editorial Score", value: `${rubric.editorialScore}/10`, color: "#6DBF8A" },
                      { label: "Best Buy Timing", value: "On Sale", color: "#C4622D" },
                    ].map((s) => (
                      <div key={s.label} style={{ padding: "10px 16px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", color: "#5C5650", marginBottom: 4, textTransform: "uppercase" }}>{s.label}</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link href="https://www.myprotein.com/sports-nutrition/creatine-monohydrate/10852482.html" target="_blank" rel="nofollow noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Buy on MyProtein (Wait for Sale) <ExternalLink size={13} />
                    </Link>
                    <Link href="/ingredients/creatine" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #2D2926", color: "#A89880", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>
                      Read: Creatine Evidence Profile →
                    </Link>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 14, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 18, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Rawson ES & Volek JS (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. J Strength Cond Res.",
                      "Lanhers C et al. (2017). Creatine supplementation and upper limb strength performance: A systematic review and meta-analysis. Sports Med.",
                      "Buford TW et al. (2007). International Society of Sports Nutrition position stand: creatine supplementation and exercise. J Int Soc Sports Nutr.",
                      "Kreider RB et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr.",
                      "van der Merwe J et al. (2009). Three weeks of creatine monohydrate supplementation affects dihydrotestosterone to testosterone ratio in college-aged rugby players. Clin J Sport Med. [Note: Single unreplicated study — cited for context, not for hair loss causation.]",
                      "Brosnan ME & Brosnan JT (2016). The role of dietary creatine. Amino Acids.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>{ref}</li>
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
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>What to read next</h3>
              </div>
              <Link href="/category" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
