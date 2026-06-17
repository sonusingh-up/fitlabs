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
import ReviewCard from "@/components/ui/ReviewCard";
import ProductCard from "@/components/ui/ProductCard";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Performance Lab Sleep Review (2026) — Rated 8/10",
  description:
    "Performance Lab Sleep review: 4-ingredient formula, CherryPURE 500mg, no synthetic melatonin, Clean Label certified. $1.47/serving. FSP 8/10.",
  alternates: { canonical: "/reviews/performance-lab-sleep" },
  openGraph: {
    title: "Performance Lab Sleep Review (2026) — Clean Label, Honest Formula",
    description:
      "Full supplement facts disclosed. No synthetic melatonin. Clean Label Project certified. Four quality ingredients at clinical doses. The benchmark for transparent sleep supplementation.",
    url: "https://fitlabreviews.com/reviews/performance-lab-sleep",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.0,
      notes:
        "Four ingredients, all at meaningful doses: CherryPURE® 500mg (50:1 Montmorency tart cherry — the richest natural melatonin source), L-Tryptophan 200mg (melatonin precursor pathway), Lemon Balm 200mg (close to clinical range), and a 100mg NutriGenesis® magnesium blend (bisglycinate + taurate). No proprietary blends. The magnesium dose is below the 200–400mg clinical range, but the form quality is excellent.",
    },
    {
      pillar: "transparency",
      score: 9.0,
      notes:
        "Every dose is fully disclosed. Ingredient forms are specified: NutriGenesis® magnesium (nature-identical chelated forms), CherryPURE® (branded 50:1 extract), NutriCaps® pullulan capsule. No filler maze. This is as transparent as sleep supplements get.",
    },
    {
      pillar: "verification",
      score: 7.5,
      notes:
        "Clean Label Project certified (covers contaminants, heavy metals, pesticides), GMP certified facility, B Corp certified company. Third-party tested. No specific Informed Sport or NSF Certified for Sport badge, which limits its appeal for drug-tested athletes. But for general consumers, the Clean Label Project is a meaningful, independent standard.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "At $1.47/serving (one-time) or $1.32/serving (subscription), Performance Lab Sleep sits at the premium end of the category. CherryPURE® is a costly branded extract, and NutriGenesis® magnesium commands a price premium. The quality justifies part of the cost, but budget alternatives with transparent labels exist for significantly less.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "2–4 capsule flexibility lets users titrate dose. No synthetic melatonin means no tolerance build-up risk or next-day grogginess from receptor desensitisation. NutriCaps® pullulan capsule is cleaner than gelatin. Non-habit-forming. 30-day money-back (first order).",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Full supplement facts — all doses disclosed",
      detail:
        "Every ingredient and dose is published: Magnesium 100mg, CherryPURE® 500mg, L-Tryptophan 200mg, Lemon Balm 200mg. No proprietary blends. Ingredient forms are named.",
    },
    {
      type: "green",
      label: "No synthetic melatonin — natural source only",
      detail:
        "Melatonin is delivered indirectly via CherryPURE® (naturally occurring melatonin in Montmorency tart cherry concentrate) and L-Tryptophan (precursor pathway). Avoids synthetic melatonin's tolerance and receptor desensitisation risks.",
    },
    {
      type: "green",
      label: "Clean Label Project certified",
      detail:
        "Independent certification covering 400+ contaminants, heavy metals, and pesticide residues. Meaningful, rigorous standard not held by most sleep supplement brands.",
    },
    {
      type: "green",
      label: "NutriGenesis® magnesium — premium bioavailable forms",
      detail:
        "Bisglycinate + taurate blend with NutriGenesis® nature-identical chelation. Both forms have superior absorption vs. oxide or citrate, and taurate specifically crosses the blood-brain barrier more readily.",
    },
    {
      type: "red",
      label: "Magnesium 100mg — below clinical effective range",
      detail:
        "Abbasi et al. (2012) used 500mg to demonstrate sleep improvement in insomniacs. Most sleep RCTs use 200–400mg elemental magnesium. At 100mg, Performance Lab Sleep's magnesium contribution is unlikely to be a primary driver — it's more of a cofactor dose.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "30-day guarantee applies to first order only",
      detail:
        "The money-back guarantee applies only to your first purchase. Subsequent orders have a 14-day return window for unopened products only. This is a meaningful limitation if you don't see results until the second month.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Sleep deeper. Wake up fresher."',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "CherryPURE® tart cherry is the most directly evidence-backed ingredient here. Howatson et al. (2012) found 500mg concentrate increased melatonin levels and improved sleep duration/quality. L-Tryptophan's conversion to melatonin is a real pathway (Richard et al., 2009). 'Fresher' wake-up is plausible without synthetic melatonin's grogginess, but no RCT exists on this specific formula.",
    },
    {
      claim: '"No next-morning grogginess"',
      verdict: "supported",
      evidence: "moderate",
      notes:
        "The absence of synthetic melatonin is the key mechanism here. High-dose synthetic melatonin (5–10mg) causes hangover effects in sensitive users via receptor desensitisation. At the trace amounts naturally present in tart cherry (estimated 0.01–0.02mg per 500mg CherryPURE®), this risk is effectively eliminated.",
    },
    {
      claim: '"Non-habit-forming"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "None of the four ingredients have established dependency or withdrawal profiles at these doses. L-Tryptophan, lemon balm, tart cherry, and magnesium are all safe for long-term daily use without tolerance concerns.",
    },
    {
      claim: '"Supports nightly mind-body cell renewal"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "Sleep itself promotes cellular repair processes — this is well established (Xie et al., 2013, glymphatic clearance). The claim that Performance Lab Sleep specifically 'supports cell renewal' beyond general sleep hygiene is not directly evidenced for this formula.",
    },
    {
      claim: '"Starts working in approximately 30 minutes"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "L-Tryptophan onset for serotonin elevation: 30–60 min. Lemon balm: acute effect within 60 min (Cases et al., 2011). Tart cherry melatonin rise: 60–90 min. The 30-minute window is optimistic for the tryptophan-to-melatonin conversion pathway, which requires multiple enzymatic steps.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.47,
    primaryActiveGrams: 0.5,
    pricePerGramActive: 2.94,
    categoryAvgPricePerGram: 1.80,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is Performance Lab Sleep?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "ingredients", label: "Ingredient Breakdown" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Side Effects" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Performance Lab Sleep actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The evidence behind the individual ingredients is solid. CherryPURE® tart cherry at 500mg has direct RCT support for improving melatonin levels and sleep quality (Howatson et al., 2012). L-Tryptophan at 200mg supports serotonin and melatonin synthesis. Lemon balm at 200mg has modest RCT support. Magnesium at 100mg is below the most-studied sleep dose but contributes as a cofactor. The formula works best for users with mild sleep difficulties rather than clinical insomnia.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Performance Lab Sleep not contain synthetic melatonin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance Lab Sleep deliberately avoids synthetic melatonin to prevent receptor desensitisation and next-morning grogginess. Instead, melatonin is delivered via CherryPURE® (Montmorency tart cherry, a natural source of melatonin) and L-Tryptophan (which converts to serotonin and then melatonin via the pineal gland). The trade-off is slower onset compared to direct melatonin supplementation, but lower long-term tolerance risk.",
      },
    },
    {
      "@type": "Question",
      name: "What is CherryPURE® and how does it help sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CherryPURE® is a branded Montmorency tart cherry concentrate at a 50:1 ratio — 500mg CherryPURE® is equivalent to 25g of whole tart cherry. Tart cherry is one of the few foods with naturally measurable melatonin content, plus anthocyanins that may inhibit inflammatory pathways disrupting sleep. Howatson et al. (2012) found 480mg concentrate increased urinary melatonin and improved sleep duration and quality in healthy adults.",
      },
    },
    {
      "@type": "Question",
      name: "Is Performance Lab Sleep third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Performance Lab Sleep is Clean Label Project certified — an independent certification that tests for 400+ contaminants including heavy metals, pesticides, and plasticisers. The brand also operates GMP certified manufacturing. It does not hold Informed Sport or NSF Certified for Sport status, which matters specifically for competitive athletes subject to doping control.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Performance Lab Sleep take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brand states approximately 30 minutes. In practice, L-Tryptophan conversion to serotonin and melatonin takes multiple enzymatic steps — realistic onset for the full melatonin pathway is 60–90 minutes. Lemon balm's GABAergic effects can occur within 60 minutes. CherryPURE® melatonin content is modest but direct. Consistent daily use over 7–14 days is where most users report clearer benefits, particularly for sleep continuity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Performance Lab Sleep with magnesium I already take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Performance Lab Sleep contains 100mg magnesium (bisglycinate + taurate). If you already supplement with 200–400mg magnesium glycinate separately, the additional 100mg from PL Sleep is safe and additive. Total magnesium intake from all sources shouldn't regularly exceed 400mg/day supplemental to avoid GI side effects, but going slightly over is unlikely to cause problems in healthy adults.",
      },
    },
    {
      "@type": "Question",
      name: "Is Performance Lab Sleep suitable for vegans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Performance Lab Sleep uses NutriCaps® capsules made from pullulan — a fermented, plant-derived material — rather than gelatin. All four active ingredients are plant-derived or nature-identical. The product carries Vegetarian Society Vegan approval.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Performance Lab Sleep money-back guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance Lab offers a 30-day money-back guarantee on first orders — even on opened or used bottles. For subsequent orders, the return window is 14 days for unopened products only. This is an important limitation: if you need more than 30 days to assess efficacy (common with sleep supplements that require consistent use), the guarantee may not protect you on your second purchase.",
      },
    },
    {
      "@type": "Question",
      name: "How does Performance Lab Sleep compare to melatonin tablets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard melatonin tablets (0.5–10mg) act faster and more predictably than Performance Lab Sleep's tart cherry approach. However, high-dose synthetic melatonin (5mg+) suppresses endogenous production over time and can cause next-morning grogginess. Performance Lab Sleep's philosophy — supporting the body's own melatonin synthesis via precursors and natural sources — is more conservative but may work better for long-term use without tolerance development.",
      },
    },
    {
      "@type": "Question",
      name: "Who should use Performance Lab Sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance Lab Sleep is best suited for adults with mild sleep difficulties — difficulty winding down, occasional night waking, or sub-optimal sleep quality — who want a clean, no-synthetic-melatonin formula. It is not designed for shift workers or those with severe clinical insomnia. Athletes subject to doping control should note it lacks Informed Sport certification.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/performance-lab-sleep#review",
  name: "Performance Lab Sleep — Fitlabreviews FSP Review",
  reviewBody:
    "Performance Lab Sleep is a four-ingredient, fully transparent sleep supplement using CherryPURE® tart cherry, L-Tryptophan, lemon balm, and NutriGenesis® magnesium. No synthetic melatonin. Clean Label Project certified. Full doses disclosed. At $1.47/serving it is premium-priced but the ingredient quality and transparency justify the cost. FSP v2.1 editorial: 8/10.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  itemReviewed: {
    "@type": "Product",
    name: "Performance Lab Sleep",
    brand: { "@type": "Brand", name: "Performance Lab" },
    category: "Sleep Supplement",
    description:
      "Natural sleep supplement with CherryPURE® tart cherry, L-Tryptophan, lemon balm and NutriGenesis® magnesium. No synthetic melatonin.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "44.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4x4WZCs",
    },
  },
};

const relatedReviews = [
  {
    slug: "nested-naturals-luna",
    title: "Nested Naturals Luna Sleep Aid",
    brand: "Nested Naturals",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Full label, 8 ingredients, $0.73/serving. Best value sleep supplement. 6mg melatonin is the one honest concern for long-term users.",
    publishedAt: "2026-05-31",
    figNumber: "061",
  },
  {
    slug: "seed-pm-02",
    title: "Seed PM-02 Sleep + Restore",
    brand: "Seed",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Novel dual-capsule Co-Biotic delivery. Biphasic 500mcg melatonin. Partial dose disclosure on blends. $1.17/serving.",
    publishedAt: "2026-05-31",
    figNumber: "062",
  },
  {
    slug: "yusleep",
    title: "YuSleep Sleep Drops",
    brand: "YuSleep",
    category: "Sleep Supplement",
    rating: 4 as ReviewRating,
    verdict: "Good ingredient ideas, zero dose disclosure for 9 of 10 ingredients. No third-party testing. $2.30/serving.",
    publishedAt: "2026-05-31",
    figNumber: "059",
  },
];

export default function PerformanceLabSleepReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Sleep", href: "/category/sleep-supplements" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Performance Lab Sleep</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #091828 0%, #050E18 100%)", position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-060</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(242,235,217,0.15)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A6FA8", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Sleep Supplement</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Performance Lab<br />
                  <em style={{ fontWeight: 400, color: "#A89880", fontSize: "0.65em" }}>Sleep</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Four ingredients. Every dose disclosed. No synthetic melatonin. Clean Label Project certified. The most transparent sleep supplement in its price bracket.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4x4WZCs" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#3A6FA8", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(242,235,217,0.15)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/perlab-sleep.webp" alt="Performance Lab Sleep capsules" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(58,111,168,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7,8].map(s => <Star key={s} size={13} fill="#3A6FA8" color="#3A6FA8" />)}
                {[9,10].map(s => <Star key={s} size={13} fill="none" color="rgba(58,111,168,0.35)" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.4)", letterSpacing: "0.12em" }}>8 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Performance Lab" },
            { label: "Category", value: "Sleep Supplement" },
            { label: "Serving", value: "2–4 NutriCaps / night" },
            { label: "Servings", value: "30 per bottle" },
            { label: "Price", value: "$44.00 / bottle" },
            { label: "Per Serving", value: "$1.47" },
            { label: "Published", value: "May 31, 2026" },
            { label: "Last Updated", value: "May 31, 2026" },
          ]} />
        </div>

        {/* Author box */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors" style={{ color: "#1A1714", textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Independent Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650" }}>Ingredient analysis · FSP v2.1 scoring · Claims cross-referenced against PubMed literature</p>
            </div>
            <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Review</span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links may earn a commission. Scores are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main content */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 14, marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A6FA8", marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-060</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>
                        The benchmark for transparent sleep supplementation. Four clean ingredients, every dose disclosed, no synthetic melatonin.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#3A6FA8", lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.75 }}>
                    Performance Lab Sleep earns its score through honest simplicity. It doesn't try to stack 10 ingredients at unknown doses — it picks four quality actives, discloses every milligram, and backs them with independent certification. The magnesium dose is below clinical range, and $1.47/serving is expensive relative to simpler alternatives. But for consumers who want clean, certified, synthetic-melatonin-free sleep support with full label transparency, this is the standard other products should be measured against.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => {
                    const labels: Record<string, string> = { formula: "Formula", transparency: "Transparency", verification: "Verification", value: "Value", practical: "Practical" };
                    const weights: Record<string, string> = { formula: "35%", transparency: "25%", verification: "20%", value: "12%", practical: "8%" };
                    const color = p.score >= 7 ? "#2D6A4F" : p.score >= 5 ? "#8B7355" : "#8B3A2C";
                    return (
                      <div key={p.pillar} style={{ padding: "16px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color, lineHeight: 1, marginBottom: 4 }}>{p.score.toFixed(1)}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>{labels[p.pillar]}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>{weights[p.pillar]} weight</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
                  <div style={{ background: "linear-gradient(145deg, #091828 0%, #050E18 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(58,111,168,0.15)", border: "1px solid rgba(58,111,168,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A9FD8" }}>
                      <ShieldCheck size={10} /> Clean Label Project
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/perlab-sleep.webp" alt="Performance Lab Sleep" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(58,111,168,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Performance Lab</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Sleep</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "500mg", label: "CherryPURE®" }, { val: "0", label: "Syn. Melatonin" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3A6FA8", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$44.00</p>
                      </div>
                      <a href="https://amzn.to/4x4WZCs" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3A6FA8", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is It */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Performance Lab Sleep?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  Performance Lab Sleep is a nightly supplement from Performance Lab — a UK-based nutraceutical brand with a reputation for clean, minimal formulations. The product uses four ingredients: CherryPURE® Montmorency tart cherry extract (500mg, 50:1 ratio), <Link href="/ingredients/l-theanine" style={{ color: "#3A6FA8", textDecoration: "none" }}>L-Tryptophan</Link> (200mg), lemon balm extract (200mg), and a NutriGenesis® magnesium blend (100mg bisglycinate + taurate).
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  The core design principle is avoiding synthetic melatonin. Instead, the formula supports the body's own melatonin synthesis pathway: CherryPURE® provides naturally occurring melatonin from tart cherry, while L-Tryptophan feeds the enzymatic chain that converts tryptophan → 5-HTP → serotonin → melatonin. This is a slower-acting but arguably more physiologically appropriate approach for long-term use.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75 }}>
                  Performance Lab is a B Corp certified company manufacturing in GMP certified facilities. Performance Lab Sleep specifically holds Clean Label Project certification — a rigorous independent test covering 400+ contaminants. The product is vegan, non-GMO, gluten-free, and soy-free.
                </p>
              </section>

              {/* § 3 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-060" />
              </section>

              {/* § 4 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 2 NutriCaps® · Servings per container: 30</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "40%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "25%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "35%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Magnesium (Bisglycinate, Taurate, NutriGenesis®)", amount: "100 mg", clinical: "200–400 mg" },
                        { name: "CherryPURE® (Montmorency Tart Cherry, 50:1)", amount: "500 mg", clinical: "480–500 mg", clinicalOk: true },
                        { name: "L-Tryptophan", amount: "200 mg", clinical: "150–300 mg", clinicalOk: true },
                        { name: "Lemon Balm Extract", amount: "200 mg", clinical: "300–600 mg" },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: "#2D6A4F" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.clinicalOk ? "rgba(45,106,79,0.10)" : "rgba(139,115,85,0.10)", border: `1px solid ${row.clinicalOk ? "rgba(45,106,79,0.25)" : "rgba(139,115,85,0.25)"}`, borderRadius: 20, fontSize: 11, color: row.clinicalOk ? "#2D6A4F" : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.clinical}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Other ingredients: NutriCaps® Pullulan capsule, Nu-FLOW® Rice Concentrate. No synthetic melatonin, no artificial fillers.
                </p>
              </section>

              {/* § 6 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                {[
                  {
                    name: "CherryPURE® Tart Cherry — 500 mg (50:1)",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "The headline ingredient — on target at 500mg",
                    body: "Montmorency tart cherry is one of the few food sources with measurable melatonin content, plus anthocyanins and tryptophan. Howatson et al. (2012) found 480mg concentrate significantly raised urinary melatonin levels and improved sleep duration and quality in healthy adults. Pigeon et al. (2010) showed tart cherry juice reduced insomnia severity. The 50:1 ratio means 500mg CherryPURE® equals 25g whole cherry — a meaningful concentration. This is the strongest ingredient in the formula.",
                  },
                  {
                    name: "L-Tryptophan — 200 mg",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Solid precursor dose for melatonin pathway support",
                    body: "Tryptophan is the dietary precursor to 5-HTP → serotonin → melatonin. Richard et al. (2009) confirmed 1g L-tryptophan improved morning alertness and sleep quality in a double-blind trial. At 200mg, Performance Lab Sleep is below the 1g typically used in sleep studies — but the dose is additive with the direct melatonin contribution from CherryPURE®. A 2015 Cochrane review found tryptophan supplementation meaningfully reduces sleep latency.",
                  },
                  {
                    name: "Lemon Balm Extract — 200 mg",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Underdosed vs. RCT data — useful adjunct nonetheless",
                    body: "Lemon balm (Melissa officinalis) inhibits GABA-transaminase, prolonging GABAergic inhibitory signalling. Cases et al. (2011) used 600mg and found significant insomnia relief. Kennedy et al. (2004) showed 300mg reduced anxiety and improved mood. Performance Lab Sleep's 200mg is below these benchmarks, though the combination with tart cherry and tryptophan may compensate. The contribution here is anxiolysis and relaxation rather than direct sleep induction.",
                  },
                  {
                    name: "Magnesium — 100 mg (NutriGenesis® Bisglycinate + Taurate)",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Premium form, underdosed for primary sleep effect",
                    body: "Magnesium supports GABA receptor function and reduces cortisol. Abbasi et al. (2012) found 500mg supplementation improved insomnia, sleep efficiency, and early waking. The effective range is 200–400mg. Performance Lab Sleep's 100mg is below clinical threshold for primary sleep benefit, but NutriGenesis® bisglycinate + taurate are among the best-absorbed forms — taurate specifically has documented CNS uptake superiority. At 100mg it acts as a cofactor, not a primary driver.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 3 ? 20 : 0, padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3A6FA8", marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 7 Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Clean Label Project", status: true },
                    { label: "GMP Certified", status: true },
                    { label: "B Corp Certified", status: true },
                    { label: "Vegan Approved", status: true },
                    { label: "Informed Sport", status: false },
                    { label: "NSF Certified", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "14px 16px", backgroundColor: item.status ? "rgba(45,106,79,0.06)" : "rgba(139,58,44,0.06)", border: `1px solid ${item.status ? "rgba(45,106,79,0.2)" : "rgba(139,58,44,0.2)"}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ display: "inline-flex", alignItems: "center" }}>
                        {item.status
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        }
                      </span>
                      <span style={{ fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong style={{ color: "#1A1714" }}>Clean Label Project</strong> tests for 400+ contaminants including heavy metals (lead, arsenic, cadmium), pesticide residues, plasticisers (BPA, phthalates), and mycotoxins. This is a more comprehensive contaminant screen than most supplement certifications. The absence of Informed Sport certification limits its appeal for competitive athletes — drug-tested athletes should be aware.
                  </p>
                </div>
              </section>

              {/* § 8 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 9 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>Brand Protocol</p>
                  <p style={{ fontSize: 15, color: "#1A1714", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 2–4 NutriCaps® 30 minutes before sleep. Use daily and consistently for best results.</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    The 2–4 capsule flexibility is a practical advantage. Start at 2 capsules and increase to 4 if needed. For users with sensitive systems, 2 capsules of Performance Lab Sleep is typically sufficient.
                  </p>
                </div>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Evidence-based timing notes</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {["L-Tryptophan: best absorbed in absence of other large amino acids. Take 30–60 min before a light meal or on an empty stomach.", "CherryPURE® tart cherry: onset for melatonin elevation is 60–90 min — start earlier than 30 min if sleep latency is the primary issue.", "Magnesium glycinate: effects are cumulative. Consistent daily use matters more than precise timing.", "Lemon balm: acute anxiolytic effect within 60 min. Clinically useful for pre-sleep rumination."].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 620, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Ingredients", "Syn. Melatonin", "Full Label?", "Certification", "$/Serving"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Performance Lab Sleep", ings: "4 (all disclosed)", syn: "No", full: "Yes", cert: "Clean Label Project", price: "$1.47", highlight: true },
                        { product: "Nested Naturals Luna", ings: "8 (all disclosed)", syn: "6 mg", full: "Yes", cert: "Third-party (unspecified)", price: "$0.73", highlight: false },
                        { product: "Seed PM-02", ings: "10+ (partial)", syn: "0.5 mg bioid.", full: "Partial", cert: "ISO 17025", price: "$1.17", highlight: false },
                        { product: "YuSleep", ings: "10 (1 disclosed)", syn: "0.9 mg", full: "No", cert: "None", price: "$2.30", highlight: false },
                        { product: "OLLY Sleep", ings: "3 (partial)", syn: "5 mg", full: "Partial", cert: "None listed", price: "$0.50", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(58,111,168,0.06)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.ings}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.syn === "No" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>{row.syn}</td>
                          <td style={{ padding: "11px 14px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: row.full === "Yes" ? "rgba(45,106,79,0.10)" : "rgba(139,58,44,0.10)", border: `1px solid ${row.full === "Yes" ? "rgba(45,106,79,0.25)" : "rgba(139,58,44,0.25)"}`, borderRadius: 20, fontSize: 10, color: row.full === "Yes" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.full}</span>
                          </td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.highlight ? "#3A6FA8" : "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices verified May 2026.</p>
              </section>

              {/* § 11 Products at a Glance */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="Performance Lab Sleep" brand="Performance Lab" category="Sleep" score={8} priceUSD="$44.00 / 30 servings" priceINR="N/A" tags={["Clean Label Project", "No Syn. Melatonin"]} buyUrl="https://amzn.to/4x4WZCs" buyLabel="Buy on Amazon" reviewSlug="performance-lab-sleep" image="perlab-sleep.webp" bgFrom="#091828" bgTo="#050E18" accent="#3A6FA8" featured={true} />
                  <ProductCard name="Luna Sleep Aid" brand="Nested Naturals" category="Sleep" priceUSD="$21.95 / 30 servings" priceINR="N/A" tags={["Full Label", "Lifetime Guarantee"]} buyUrl="https://amzn.to/3Sb2LlK" buyLabel="Buy on Amazon" reviewSlug="nested-naturals-luna" bgFrom="#0A1A12" bgTo="#060E0A" accent="#3D7A5E" />
                  <ProductCard name="PM-02 Sleep + Restore" brand="Seed" category="Sleep" priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Co-Biotic System", "Biphasic Melatonin"]} buyUrl="https://amzn.to/4eiBPZ1" buyLabel="Buy on Amazon" reviewSlug="seed-pm-02" bgFrom="#071A1A" bgTo="#040E0E" accent="#2A8A8A" />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["Full supplement facts — every dose disclosed", "No synthetic melatonin — no tolerance or grogginess risk", "Clean Label Project certified (400+ contaminants tested)", "NutriGenesis® magnesium: premium bisglycinate + taurate forms", "CherryPURE® 500mg directly matches Howatson et al. (2012) study dose", "Vegan-certified NutriCaps® pullulan capsule — no gelatin", "2–4 capsule flexibility for dose titration", "B Corp certified company"]}
                  cons={["Magnesium 100mg below clinical effective range (200–400mg)", "$1.47/serving is 2× the price of transparent alternatives like Luna", "30-day guarantee applies to first order only — subsequent orders 14 days unopened", "No Informed Sport or NSF Certified for Sport badge", "Lemon balm 200mg below RCT doses (300–600mg)", "No subscription discount available on Amazon"]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 20 }}>
                  Performance Lab Sleep has an excellent safety profile. No synthetic melatonin eliminates the principal side effect concern associated with most sleep supplements. All four ingredients are well-characterised at these doses.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "L-Tryptophan + MAOIs / SSRIs", severity: "moderate", detail: "L-Tryptophan contributes to serotonin synthesis. Combined with MAOIs or SSRIs, this can theoretically increase serotonin syndrome risk, though at 200mg the risk is substantially lower than with 5-HTP. Consult a doctor if on serotonergic medications." },
                    { label: "Lemon Balm + CNS Depressants", severity: "low", detail: "Lemon balm has mild sedative properties. Combined with benzodiazepines, alcohol, or sleep aids, additive sedation is possible. At 200mg this risk is minimal but worth noting." },
                    { label: "Magnesium + Antibiotics", severity: "low", detail: "Magnesium can reduce absorption of some antibiotics (tetracyclines, fluoroquinolones) when taken simultaneously. Space by at least 2 hours if on these medications." },
                    { label: "General tolerability", severity: "low", detail: "All four ingredients are well-tolerated in healthy adults at these doses. No dependency, withdrawal, or tolerance profile. Safe for long-term nightly use." },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: `1px solid ${item.severity === "moderate" ? "rgba(139,115,85,0.3)" : "#D4C9B8"}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "moderate" ? "#8B7355" : "#4A7C59", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EBD9" }}>{item.severity} risk</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.label}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 14 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="CherryPURE® tart cherry extract" />
                <div style={{ marginTop: 24 }}>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#1A1714" }}>
                          {["Option", "Price", "Per Serving", "Saving"].map(h => (
                            <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { option: "One-time (1 bottle)", price: "$44.00", perServe: "$1.47", saving: "—" },
                          { option: "Monthly subscription", price: "$39.60", perServe: "$1.32", saving: "10% off" },
                          { option: "Smart sub (4 bottles)", price: "$132.00", perServe: "$1.10", saving: "25% off" },
                        ].map((row, i) => (
                          <tr key={row.option} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                            <td style={{ padding: "11px 14px", fontSize: 13, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.option}</td>
                            <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace" }}>{row.price}</td>
                            <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#3A6FA8", fontFamily: "var(--font-dm-mono), monospace" }}>{row.perServe}</td>
                            <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.saving}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices from performancelab.com. Prices verified May 2026.</p>
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3A6FA8", marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      $44.00 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Prime shipping · Easy returns. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/4x4WZCs" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3A6FA8", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 16 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-pl-sleep" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3A6FA8" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-pl-sleep svg{display:none;}details[open] .faq-icon-pl-sleep::after{content:'';display:block;width:10px;height:2px;background:#3A6FA8;border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A6FA8", marginBottom: 8 }}>FSP v2.1 — REV-2026-060</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#3A6FA8", lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#A89880" }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>Recommended. The cleanest sleep formula at this price point.</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 28 }}>
                    Performance Lab Sleep earns an 8/10 for doing what most sleep supplements don't: disclosing everything, certifying independently, and avoiding synthetic melatonin. The magnesium dose deserves to be doubled, and at $1.47/serving it asks a premium that not every consumer can justify. But for those who want a genuinely clean, certified, science-grounded product — and are happy to pair it with a separate 200–300mg magnesium glycinate supplement if needed — this is the most defensible choice in its category.
                  </p>
                  <a href="https://amzn.to/4x4WZCs" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3A6FA8", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Buy on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Howatson G et al. (2012). Effect of tart cherry juice on melatonin levels and enhanced sleep quality. European Journal of Nutrition, 51(8):909–916.", url: "https://doi.org/10.1007/s00394-011-0263-7" },
                      { text: "Pigeon WR et al. (2010). Effects of tart cherry beverage on sleep of older adults with insomnia. Journal of Medicinal Food, 13(3):579–583.", url: "https://doi.org/10.1089/jmf.2009.0096" },
                      { text: "Richard DM et al. (2009). L-tryptophan: basic metabolic functions, behavioral research and therapeutic indications. International Journal of Tryptophan Research, 2:45–60.", url: "https://doi.org/10.4137/IJTR.S2129" },
                      { text: "Cases J et al. (2011). Pilot trial of Melissa officinalis for mild-to-moderate anxiety and sleep disturbances. Mediterranean Journal of Nutrition and Metabolism, 4(3):211–218.", url: "https://doi.org/10.1007/s12349-010-0045-4" },
                      { text: "Kennedy DO et al. (2004). Anxiolytic effects of lemon balm in healthy volunteers. Psychosomatic Medicine, 66(4):607–613.", url: "https://doi.org/10.1097/01.psy.0000132877.72833.71" },
                      { text: "Abbasi B et al. (2012). Magnesium supplementation and primary insomnia in elderly. Journal of Research in Medical Sciences, 17(12):1161–1169.", url: "https://pubmed.ncbi.nlm.nih.gov/23853635/" },
                      { text: "Xie L et al. (2013). Sleep drives metabolite clearance from the adult brain. Science, 342(6156):373–377.", url: "https://doi.org/10.1126/science.1241224" },
                      { text: "Brzezinski A et al. (2005). Effects of exogenous melatonin on sleep: a meta-analysis. Sleep Medicine Reviews, 9(1):41–50.", url: "https://doi.org/10.1016/j.smrv.2004.06.004" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#3A6FA8", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Reviews */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>More sleep supplement reviews</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {relatedReviews.map(r => <ReviewCard key={r.slug} {...r} />)}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
