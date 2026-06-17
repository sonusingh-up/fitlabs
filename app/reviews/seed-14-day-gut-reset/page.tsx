import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, ShieldCheck, Star, Plus } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
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
import SeedStrainPanel from "@/components/ui/SeedStrainPanel";
import SeedViaCap from "@/components/ui/SeedViaCap";
import SeedResearchCard from "@/components/ui/SeedResearchCard";
import { computeComposite } from "@/lib/scoring";
import { SEED, seedScoreColor } from "@/lib/seed-tokens";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Seed 14-Day Gut Reset Review (2026) — 8/10",
  description:
    "Seed 14 Day Gut Reset review: same DS-01 formula (24 strains, 53.6B AFU) in a 28-capsule 14-day intensive pack. Best choice post-antibiotics or gut disruption. FSP 8/10.",
  alternates: { canonical: "/reviews/seed-14-day-gut-reset" },
  openGraph: {
    title: "Seed 14-Day Gut Reset Review (2026) — 8/10",
    description:
      "The same 24-strain, 53.6B AFU DS-01 formula in a 14-day intensive 28-capsule pack. Designed for post-antibiotic recovery, travel, or seasonal gut resets.",
    url: "https://fitlabreviews.com/reviews/seed-14-day-gut-reset",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.0,
      notes:
        "Same DS-01 formulation: 24 genomically confirmed strains, 53.6B AFU total, 400mg MAPP non-fermenting prebiotic, ViaCap dual-capsule delivery. This is the highest-scoring probiotic formula in our review library at the ingredient level. No formulation compromises in the 14-day format.",
    },
    {
      pillar: "transparency",
      score: 7.5,
      notes:
        "Same transparency profile as DS-01: blend-level AFU counts disclosed, all 24 strain names published, MAPP prebiotic composition named. Individual per-strain AFU counts not published. Identical to the DS-01 transparency gap.",
    },
    {
      pillar: "verification",
      score: 8.5,
      notes:
        "Same genomic confirmation, stability testing, and third-party testing as DS-01. Available at major retail (Target, Sprouts, Amazon, Erewhon). Consistent with Seed's quality framework.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "At approximately $29.99 for 14 servings ($2.14/serving), the per-serving cost is higher than the DS-01 subscription ($1.67/serving). This is expected for a single-use 14-day format — no subscription commitment, smaller unit size. For acute use post-antibiotics or travel, the premium per-serving is reasonable.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "28 capsules (2/day) for a defined 14-day course. Available at Target and Sprouts without subscription — ideal for occasional or one-time use. Easy to carry during travel. Shelf-stable. Clear duration makes adherence simple.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Identical DS-01 formula — full 53.6B AFU, 24 strains",
      detail:
        "The 14 Day Gut Reset uses the exact DS-01 formulation — not a diluted or simplified version. You get the same 24 genomically confirmed strains at the same 53.6B AFU potency for 14 days.",
    },
    {
      type: "green",
      label: "No subscription required — available at Target, Sprouts, Amazon",
      detail:
        "Unlike DS-01 which is primarily subscription-based via seed.com, the 14 Day Gut Reset is widely available at retail without any recurring commitment. Buy one when you need it.",
    },
    {
      type: "green",
      label: "Defined duration — ideal for acute recovery protocols",
      detail:
        "A 14-day course format is clinically appropriate for post-antibiotic recovery (most gut disruption studies use 7–14 day intervention windows) and travel gut recovery. The defined end date simplifies adherence.",
    },
    {
      type: "green",
      label: "Non-fermenting MAPP prebiotic — no bloat",
      detail:
        "The same 400mg MAPP (pomegranate punicalagins) prebiotic as DS-01 — non-fermenting, so no gas or bloating while your microbiome recovers.",
    },
    {
      type: "red",
      label: "$2.14/serving — more expensive per dose than DS-01 subscription",
      detail:
        "The single-unit format carries a 28% per-serving premium over DS-01 at subscription pricing ($1.67). For ongoing daily use, DS-01 is more economical. The Gut Reset format is justified for acute or occasional use only.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "Per-strain AFU counts undisclosed",
      detail:
        "Same limitation as DS-01. Blend-level AFU counts are published but individual strain contributions aren't broken out.",
      deduction: 0.2,
    },
  ],
  claimAudit: [
    {
      claim: '"Rapid gut recovery"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "L. rhamnosus GG has meta-analysis support for reducing antibiotic-associated diarrhoea duration. Post-antibiotic microbiome recovery timelines in RCTs range from 7 days to several months depending on antibiotic type and duration. A 14-day intensive course is evidence-based in its timeframe; 'rapid' is relative.",
    },
    {
      claim: '"Same formula as DS-01® Daily Synbiotic"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Seed explicitly states the 14 Day Gut Reset uses the same DS-01 formulation. The supplement facts panels are identical.",
    },
    {
      claim: '"Bloating & constipation relief"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Several DS-01 strains have RCT evidence for digestive outcomes. L. plantarum 299v for gas/bloating (Nobaek et al., 2000); B. lactis BB-12 for constipation/regularity. A 14-day course is sufficient duration for acute symptom improvements.",
    },
    {
      claim: '"Vegan & shelf-stable"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "All ingredients are plant-derived or bacterial. Stability tested at ambient conditions. No refrigeration required. Both claims are verifiable.",
    },
  ],
  valueMetric: {
    pricePerServing: 2.14,
    primaryActiveGrams: 0.4,
    pricePerGramActive: 5.35,
    categoryAvgPricePerGram: 1.50,
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
  { id: "what-is", label: "What Is the Gut Reset?" },
  { id: "viacap", label: "ViaCap Architecture" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "strains", label: "Strain Profile" },
  { id: "use-cases", label: "Best Use Cases" },
  { id: "research", label: "Clinical Research" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "DS-01 vs. 14-Day" },
  { id: "products", label: "Seed Family" },
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
      name: "Is the 14 Day Gut Reset the same as DS-01?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — the formulation is identical to DS-01 Daily Synbiotic: 24 genomically confirmed strains, 53.6B AFU total, 400mg MAPP non-fermenting prebiotic, ViaCap dual-capsule delivery. The only difference is the format: DS-01 is 60 capsules (30-day subscription); the 14 Day Gut Reset is 28 capsules (14-day single purchase)." },
    },
    {
      "@type": "Question",
      name: "When should I use the 14 Day Gut Reset vs. DS-01?",
      acceptedAnswer: { "@type": "Answer", text: "Use the 14 Day Gut Reset for: (1) Post-antibiotic recovery — take 2/day for 14 days immediately after completing your antibiotic course; (2) Travel recovery — after travel to regions with different microbial environments or food/water disruption; (3) Seasonal gut resets — quarterly 14-day intensive use; (4) First trial — try the full DS-01 formula for 14 days before committing to a monthly subscription. Use DS-01 for daily ongoing microbiome maintenance at a lower per-serving cost." },
    },
    {
      "@type": "Question",
      name: "Should I take the 14 Day Gut Reset during or after antibiotics?",
      acceptedAnswer: { "@type": "Answer", text: "Take it during the antibiotic course (spaced by at least 2 hours from each antibiotic dose) AND continue for the full 14 days after completing the course. Starting during the course helps maintain some microbiome diversity while the antibiotic acts; the 14 days post-course is the most critical recovery window. Space each dose at least 2 hours from antibiotics." },
    },
    {
      "@type": "Question",
      name: "Can I use the 14 Day Gut Reset more than once?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Multiple courses are safe — there are no contraindications to repeated 14-day courses. Common protocols: one course after each antibiotic treatment, quarterly seasonal resets, or after any significant gut disruption (travel, illness, major dietary change)." },
    },
    {
      "@type": "Question",
      name: "Where can I buy the 14 Day Gut Reset?",
      acceptedAnswer: { "@type": "Answer", text: "The 14 Day Gut Reset is available at Target, Sprouts Farmers Market, Amazon, Erewhon, and seed.com. Unlike DS-01, it does not require a subscription — buy when needed from any retailer." },
    },
    {
      "@type": "Question",
      name: "How quickly does the 14 Day Gut Reset work?",
      acceptedAnswer: { "@type": "Answer", text: "For post-antibiotic diarrhoea reduction, clinical probiotic studies show effects within 2–5 days of initiation. For broader microbiome recovery after significant disruption, 14 days is the minimum meaningful intervention window — many studies use 4 weeks for full recovery assessment. Start the Gut Reset the day you take your first antibiotic (or the day of disruption) for fastest recovery." },
    },
    {
      "@type": "Question",
      name: "Is the 14 Day Gut Reset a subscription?",
      acceptedAnswer: { "@type": "Answer", text: "No. The 14 Day Gut Reset is a single-purchase product available at retail without subscription. This is one of its key advantages for users who want the DS-01 formula without a recurring commitment." },
    },
    {
      "@type": "Question",
      name: "Is the per-serving cost of the 14 Day Gut Reset the same as DS-01?",
      acceptedAnswer: { "@type": "Answer", text: "No — the 14 Day Gut Reset costs approximately $29.99 for 14 servings ($2.14/serving), which is 28% more per serving than DS-01 at subscription pricing ($1.67/serving). This is typical for single-use vs. subscription formats. For occasional acute use, the premium is reasonable. For daily ongoing use, the DS-01 subscription is more economical." },
    },
    {
      "@type": "Question",
      name: "Should I transition to DS-01 after the 14 Day Gut Reset?",
      acceptedAnswer: { "@type": "Answer", text: "This is a common and sensible approach. The 14 Day Gut Reset serves as both an acute recovery course and a trial of the DS-01 formula. If you notice meaningful improvements in digestion, regularity, and wellbeing during the 14 days, transitioning to DS-01 for ongoing daily maintenance is a logical next step at a lower per-serving cost." },
    },
    {
      "@type": "Question",
      name: "Can I use the 14 Day Gut Reset for IBS?",
      acceptedAnswer: { "@type": "Answer", text: "The strains in the DS-01 formula — including L. plantarum 299v equivalent and L. rhamnosus — have individual RCT evidence for IBS symptom improvement. A 14-day course is at the short end of the window for IBS benefits (most studies run 4–8 weeks). A meaningful trial for IBS would be 14 days as a start, transitioning to DS-01 for a full 8-week assessment. Consult a gastroenterologist if IBS is significantly affecting quality of life." },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-14-day-gut-reset#review",
  name: "Seed DS-01 14 Day Gut Reset — Fitlabreviews FSP Review",
  reviewBody:
    "The 14 Day Gut Reset contains the identical DS-01 formula — 24 strains, 53.6B AFU, 400mg MAPP, ViaCap delivery — in a 28-capsule single-purchase 14-day format. The most evidence-backed format for post-antibiotic gut recovery. FSP v2.1 editorial: 8/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed DS-01 14 Day Gut Reset",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Probiotic / Gut Reset",
    description: "Same DS-01 formula (24 strains, 53.6B AFU, MAPP prebiotic) in a 28-capsule 14-day intensive single-purchase format.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "29.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4vkvR0y",
    },
  },
};

const relatedReviews = [
  {
    slug: "seed-ds-01",
    title: "Seed DS-01 Daily Synbiotic",
    brand: "Seed",
    category: "Daily Synbiotic",
    rating: 8 as ReviewRating,
    verdict: "Same formula in a 30-serving subscription. Better per-serving value for daily ongoing use.",
    publishedAt: "2026-05-31",
    figNumber: "063",
  },
  {
    slug: "seed-pds-08",
    title: "Seed PDS-08 Pediatric Synbiotic",
    brand: "Seed",
    category: "Kids Probiotic",
    rating: 8 as ReviewRating,
    verdict: "9 pediatric strains, 24.5B AFU, 5g prebiotic. First kids synbiotic with product-specific RCT.",
    publishedAt: "2026-05-31",
    figNumber: "064",
  },
  {
    slug: "seed-dm-02",
    title: "Seed DM-02 Daily Multivitamin",
    brand: "Seed",
    category: "Multivitamin",
    rating: 7 as ReviewRating,
    verdict: "20 vitamins/minerals at 100% DV with microbiome-aware ViaCap delivery.",
    publishedAt: "2026-05-31",
    figNumber: "067",
  },
];

export default function Seed14DayGutResetReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: SEED.pageBg, minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Probiotics", href: "/category/probiotics" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: SEED.border, fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: SEED.border, fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>14 Day Gut Reset</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: SEED.bannerBg, position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ padding: "3px 8px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: SEED.green }}>Seed</span>
                  <span style={{ color: SEED.darkBorder, fontSize: 10 }}>·</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>REV-2026-066 · Gut Reset · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: SEED.darkText, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed DS-01®<br />
                  <em style={{ fontWeight: 400, color: SEED.darkMuted, fontSize: "0.65em" }}>14 Day Gut Reset</em>
                </h1>
                <p style={{ fontSize: 15, color: SEED.darkMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Same formula as DS-01: 24 genomically confirmed strains, 53.6B AFU, non-fermenting MAPP prebiotic. 28 capsules for a 14-day intensive course. No subscription. Available at Target, Sprouts, Amazon.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4vkvR0y" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: `1px solid ${SEED.darkBorder}`, color: SEED.darkCaption, fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/seed-14-day.webp" alt="Seed 14 Day Gut Reset" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(61,139,55,0.4))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}><ReviewScoreBadge rating={editorialScore} size="lg" /></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7,8].map(s => <Star key={s} size={13} fill={SEED.green} color={SEED.green} />)}
                {[9,10].map(s => <Star key={s} size={13} fill="none" color={`${SEED.green}55`} />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: SEED.darkCaption, letterSpacing: "0.12em" }}>8 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.pageBg})` }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Seed" },
            { label: "Category", value: "Gut Reset / Synbiotic" },
            { label: "Format", value: "14-day (28 capsules)" },
            { label: "Strains", value: "24 (identical to DS-01)" },
            { label: "Potency", value: "53.6B AFU" },
            { label: "Price", value: "~$29.99" },
            { label: "Per Serving", value: "~$2.14" },
            { label: "Published", value: "May 31, 2026" },
          ]} />
        </div>

        {/* Author & Disclosure */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: SEED.darkBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: SEED.green }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors" style={{ color: SEED.ink, textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: SEED.caption, fontSize: 12 }}> · Independent Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: SEED.muted }}>FSP v2.1 · See our DS-01 review for full strain-level analysis</p>
            </div>
            <span style={{ padding: "3px 8px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 4, fontSize: 10, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Review</span>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: SEED.sepia, flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links may earn a commission.{" "}
              <Link href="/affiliate-disclosure" style={{ color: SEED.green, textDecoration: "none" }}>Read our disclosure →</Link>
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
            <aside style={{ borderRight: `1px solid ${SEED.border}` }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: SEED.darkBg, borderRadius: 14, marginBottom: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 14, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-066</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>
                        The best-evidenced acute gut recovery product available. DS-01's full formula, no subscription, available at Target.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: SEED.darkMuted, letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.75 }}>
                    The 14 Day Gut Reset earns the same 8/10 as DS-01 because it is DS-01 — same 24 strains, same potency, same delivery, same non-fermenting prebiotic. The format change (28 capsules, no subscription, retail availability) makes it the right choice for post-antibiotic recovery, travel gut disruption, or a no-commitment trial of the DS-01 formula. The slightly higher per-serving cost vs. DS-01 subscription is the only meaningful negative.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => {
                    const labels: Record<string, string> = { formula: "Formula", transparency: "Transparency", verification: "Verification", value: "Value", practical: "Practical" };
                    const weights: Record<string, string> = { formula: "35%", transparency: "25%", verification: "20%", value: "12%", practical: "8%" };
                    return (
                      <div key={p.pillar} style={{ padding: "16px 14px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10, textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: seedScoreColor(p.score), lineHeight: 1, marginBottom: 4 }}>{p.score.toFixed(1)}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>{labels[p.pillar]}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: SEED.sepia }}>{weights[p.pillar]} weight</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Mobile card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${SEED.border}`, backgroundColor: SEED.cardBg }}>
                  <div style={{ background: SEED.bannerBg, padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 200 }}>
                    <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.green }}>
                      <ShieldCheck size={10} /> Same as DS-01
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 170 }}>
                      <Image src="/products/seed-14-day.webp" alt="Seed 14 Day Gut Reset" fill style={{ objectFit: "contain" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.cardBg})` }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>Seed</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink, marginBottom: 12 }}>DS-01® 14 Day Gut Reset</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: `1px solid ${SEED.mutedBg}`, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "53.6B", label: "AFU" }, { val: "14", label: "Days" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: SEED.green, lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: SEED.caption }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.caption, marginBottom: 2 }}>Price / 14 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink }}>~$29.99</p>
                      </div>
                      <a href="https://amzn.to/4vkvR0y" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is It */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>What Is the Seed 14 Day Gut Reset?</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  The 14 Day Gut Reset is DS-01 in a single-purchase 14-day format. The formulation is identical: 24 genomically confirmed probiotic strains, 53.6B AFU total, 400mg MAPP non-fermenting prebiotic, ViaCap dual-capsule delivery. The product comes as 28 capsules — 2 per day for 14 days.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  The key differentiator vs. DS-01 is format and intent. DS-01 is a subscription product for daily long-term microbiome maintenance. The Gut Reset is a defined-duration course for acute situations: post-antibiotic recovery, post-travel gut disruption, or a seasonal reset. It's available at Target, Sprouts, Erewhon, and Amazon without a subscription.
                </p>
                <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>How it compares to DS-01</p>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 400, width: "100%" }}>
                      <thead>
                        <tr style={{ backgroundColor: SEED.darkBg }}>
                          {["", "DS-01 Daily", "14 Day Gut Reset"].map(h => (
                            <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.darkText }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: "Formula", a: "DS-01 (24 strains, 53.6B)", b: "DS-01 (identical)" },
                          { label: "Format", a: "60 capsules / 30 days", b: "28 capsules / 14 days" },
                          { label: "Purchase", a: "Subscription", b: "Single purchase" },
                          { label: "Per serving", a: "$1.67 (sub)", b: "~$2.14" },
                          { label: "Retail", a: "seed.com / Amazon", b: "Target, Sprouts, Amazon" },
                          { label: "Best for", a: "Daily maintenance", b: "Acute recovery" },
                        ].map((row, i) => (
                          <tr key={row.label} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                            <td style={{ padding: "10px 14px", fontSize: 12, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-dm-mono), monospace" }}>{row.label}</td>
                            <td style={{ padding: "10px 14px", fontSize: 12, color: SEED.muted, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.a}</td>
                            <td style={{ padding: "10px 14px", fontSize: 12, color: SEED.greenDeep, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>{row.b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* § 3 ViaCap */}
              <section id="viacap" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>ViaCap® Delivery Architecture</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Identical to DS-01 — outer delivers MAPP prebiotic, inner delivers 24 probiotic strains to the colon.</p>
                <SeedViaCap
                  outerLabel="Outer Capsule → Upper GI"
                  outerIngredients={["MAPP Prebiotic 400mg (punicalagins from pomegranate)", "Non-fermenting — no gas or bloat", "Conditions the microbiome environment"]}
                  innerLabel="Inner Capsule (Acid-Resistant) → Colon"
                  innerIngredients={["24 probiotic strains (53.6B AFU total)", "Acid-resistant shell survives gastric passage", "Delivers live strains directly to the colon"]}
                />
              </section>

              {/* § 4 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-066" />
              </section>

              {/* § 5 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 6 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 16, fontFamily: "var(--font-dm-sans), sans-serif" }}>Identical to DS-01 · Serving size: 2 capsules · 14 servings (28 capsules total)</p>
                <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    See the <Link href="/reviews/seed-ds-01#supplement-facts" style={{ color: SEED.green, textDecoration: "none" }}>DS-01 review supplement facts →</Link> for the full breakdown. The 14 Day Gut Reset uses the identical formulation: 4 blends (Digestive 38.7B AFU, Micronutrient 7.23B AFU, Cardiovascular 4.21B AFU, Dermatological 3.34B AFU) + 400mg MAPP prebiotic.
                  </p>
                </div>
              </section>

              {/* § 7 Strain Profile */}
              <section id="strains" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Strain Profile</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>24 genomically confirmed strains — same as DS-01.</p>
                <SeedStrainPanel
                  totalAFU="53.6B AFU"
                  measurementNote="AFU by flow cytometry. Same 24 strains as DS-01 Daily Synbiotic."
                  blends={[
                    { name: "Digestive Health & Gut Immunity", totalAFU: "38.7B AFU", color: SEED.green, strains: ["15 strains including B. longum, B. breve, L. plantarum, L. rhamnosus (×2), B. infantis, B. lactis (×3), L. crispatus, L. casei, Lb. fermentum, L. reuteri"] },
                    { name: "Micronutrient Synthesis", totalAFU: "7.23B AFU", color: "#5EAD58", strains: ["B. adolescentis SD-BA5-IT", "L. reuteri SD-LRE2-IT"] },
                    { name: "Cardiovascular Health", totalAFU: "4.21B AFU", color: "#2A8A8A", strains: ["L. plantarum SD-LPLDL-UK", "B. lactis SD-CECT8145-SP"] },
                    { name: "Dermatological Health", totalAFU: "3.34B AFU", color: "#3A6FA8", strains: ["L. salivarius, B. lactis, B. longum, L. casei, B. breve"] },
                  ]}
                />
              </section>

              {/* § 8 Best Use Cases */}
              <section id="use-cases" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Best Use Cases</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                  {[
                    { icon: "💊", title: "Post-Antibiotic Recovery", desc: "Start the day you begin antibiotics (2hr spacing). Continue for full 14 days after completion. The most clinically supported use case for this format." },
                    { icon: "✈️", title: "Travel Gut Recovery", desc: "After travel to regions with different food, water, or microbial environments. Acute gut disruption responds well to a defined intensive course." },
                    { icon: "🔄", title: "Quarterly Seasonal Reset", desc: "A 14-day intensive course quarterly complements daily DS-01 use — particularly useful heading into winter or after dietary disruption periods." },
                    { icon: "🧪", title: "DS-01 Trial", desc: "Try the full DS-01 formula for 14 days before committing to a monthly subscription. No subscription required, available at Target/Sprouts." },
                  ].map(item => (
                    <div key={item.title} style={{ padding: "18px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 9 Clinical Research */}
              <section id="research" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Clinical Research</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <SeedResearchCard
                    title="Probiotics for prevention and treatment of antibiotic-associated diarrhoea"
                    authors="Hempel S et al."
                    year={2012}
                    journal="JAMA"
                    finding="Meta-analysis of 82 RCTs: probiotic use significantly reduced antibiotic-associated diarrhoea (RR 0.58). Effect size was consistent across multi-strain and single-strain formulations. 14-day course duration consistent with trial protocols."
                    trialType="Meta-analysis"
                    doi="https://doi.org/10.1001/jama.2012.3507"
                  />
                  <SeedResearchCard
                    title="Microbiome disruption and recovery after antibiotic treatment"
                    authors="Palleja A et al."
                    year={2018}
                    journal="Nature Microbiology"
                    finding="Oral antibiotics caused major gut microbiota disruption, with near-complete recovery taking 1.5 months. Multi-strain probiotic intervention initiated during antibiotic course significantly shortened recovery timeline."
                    trialType="Observational"
                    doi="https://doi.org/10.1038/s41564-018-0257-9"
                  />
                </div>
              </section>

              {/* § 10 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { label: "Genomic confirmation (24 strains)", status: true },
                    { label: "Stability tested (shelf-stable)", status: true },
                    { label: "Third-party tested", status: true },
                    { label: "Retail verified (Target, Sprouts)", status: true },
                    { label: "Per-strain AFU published", status: false },
                    { label: "NSF / Informed Sport", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: item.status ? SEED.certPass : SEED.certFail, border: `1px solid ${item.status ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 14, color: item.status ? SEED.certPassText : SEED.certFailText }}>{item.status ? "✓" : "✗"}</span>
                      <span style={{ fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 11 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 12 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>14-Day Protocol</p>
                  <p style={{ fontSize: 15, color: SEED.ink, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 2 capsules daily for 14 consecutive days.</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Post-antibiotic: begin on day 1 of the antibiotic course. Space from each antibiotic dose by at least 2 hours. Continue for 14 days after completing the course.",
                      "Travel: begin the day of travel departure or first day of disruption. Complete all 14 days.",
                      "Seasonal reset: take at the same time each day (morning with a light meal is ideal).",
                      "Do not open or crush capsules — acid-resistant inner capsule must remain intact.",
                      "Start with 1 capsule/day for the first 2–3 days if you have a sensitive gut.",
                    ].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 13 DS-01 vs 14-Day */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>DS-01 vs. 14 Day Gut Reset — Which to Choose?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                  {[
                    { title: "Choose DS-01 if:", icon: "🔄", points: ["You want daily ongoing microbiome support", "Cost efficiency matters — $1.67/serving vs. $2.14", "You're comfortable with a subscription model"], color: SEED.green },
                    { title: "Choose 14 Day Gut Reset if:", icon: "⚡", points: ["You just finished (or are on) a course of antibiotics", "Your gut is disrupted from travel or illness", "You want to try DS-01 before subscribing", "You want no subscription commitment"], color: "#2A8A8A" },
                  ].map(card => (
                    <div key={card.title} style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderTop: `3px solid ${card.color}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 20, marginBottom: 10 }}>{card.icon}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: card.color, marginBottom: 12 }}>{card.title}</p>
                      <ul style={{ paddingLeft: 16, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {card.points.map((p, i) => (
                          <li key={i} style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 14 Seed Family */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Seed Product Family</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="DS-01® 14 Day Gut Reset" brand="Seed" category="Gut Reset" score={8} priceUSD="~$29.99 / 14 servings" priceINR="N/A" tags={["Same DS-01 Formula", "No Subscription"]} buyUrl="https://amzn.to/4vkvR0y" buyLabel="Buy on Amazon" reviewSlug="seed-14-day-gut-reset" image="seed-14-day.webp" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} featured={true} />
                  <ProductCard name="DS-01® Daily Synbiotic" brand="Seed" category="Synbiotic" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["24 Strains", "Subscription"]} buyUrl="https://www.amazon.com/Seed-DS-01-Daily-Synbiotic-Multi-Strain/dp/B0CMJR4XGR" buyLabel="Buy on Amazon" reviewSlug="seed-ds-01" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                  <ProductCard name="PDS-08® Pediatric Synbiotic" brand="Seed" category="Kids" score={8} priceUSD="$39.99 / 30 sachets" priceINR="N/A" tags={["Ages 3–17", "9 Strains"]} buyUrl="https://www.amazon.com/Seed-PDS-08%C2%AE-Pediatric-Daily-Synbiotic/dp/B0CPTRHQP7" buyLabel="Buy on Amazon" reviewSlug="seed-pds-08" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                </div>
              </section>

              {/* § 15 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["Identical DS-01 formula — 24 strains, 53.6B AFU, MAPP prebiotic, ViaCap delivery", "No subscription required", "Available at Target, Sprouts, Erewhon, Amazon — no direct website needed", "14-day defined course aligns with clinical post-antibiotic recovery windows", "Non-fermenting MAPP prebiotic — no gas or bloating during recovery", "Genomically confirmed strains, stability tested", "Shelf-stable — perfect for travel"]}
                  cons={["$2.14/serving is 28% more expensive per dose than DS-01 subscription", "Per-strain AFU counts undisclosed (same as DS-01)", "14 days may be insufficient for full microbiome recovery from heavy antibiotic courses (may need to follow with DS-01 subscription)"]}
                />
              </section>

              {/* § 16 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <p style={{ fontSize: 14, color: SEED.muted, marginBottom: 16, fontFamily: "var(--font-dm-sans), sans-serif" }}>Same safety profile as DS-01. See <Link href="/reviews/seed-ds-01#safety" style={{ color: SEED.green }}>DS-01 Safety section →</Link> for full details.</p>
                <div style={{ padding: "14px 18px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Key consideration: If taking concurrently with antibiotics, space each dose by at least 2 hours. Mild initial GI adjustment (gas, loose stools) is common in the first 3–5 days — start with 1 capsule/day for the first 2 days if sensitive. Severely immunocompromised individuals should consult a doctor before any probiotic use.
                  </p>
                </div>
              </section>

              {/* § 17 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="MAPP prebiotic (non-fermenting)" />
              </section>

              {/* § 18 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>Available on Amazon · No Subscription</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: SEED.ink, marginBottom: 4 }}>~$29.99 <span style={{ fontSize: "0.55em", color: SEED.sepia, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 14 servings</span></p>
                    <p style={{ fontSize: 13, color: SEED.muted, margin: 0 }}>Target · Sprouts · Erewhon · seed.com. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/4vkvR0y" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 19 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderRadius: 8, border: `1px solid ${SEED.mutedBg}`, overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-14day" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: SEED.green }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: SEED.muted, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-14day svg{display:none;}details[open] .faq-icon-14day::after{content:'';display:block;width:10px;height:2px;background:${SEED.green};border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 20 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: SEED.darkBg, borderRadius: 16, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 16, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 — REV-2026-066</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: SEED.darkMuted }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>Strongly recommended for post-antibiotic use. The most evidence-backed acute gut recovery product available.</p>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.8, marginBottom: 28 }}>
                    The 14 Day Gut Reset earns its 8/10 by being DS-01 — the most scientifically rigorous commercial synbiotic — in the format you need when your gut is disrupted. Post-antibiotic recovery, travel disruption, or seasonal resets each benefit from a defined intensive course. Available without subscription at Target and Sprouts makes it accessible without commitment. After the 14 days, transitioning to DS-01 for ongoing maintenance is the natural next step.
                  </p>
                  <a href="https://amzn.to/4vkvR0y" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Buy on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Hempel S et al. (2012). Probiotics for prevention and treatment of antibiotic-associated diarrhoea. JAMA, 307(18):1959–1969.", url: "https://doi.org/10.1001/jama.2012.3507" },
                      { text: "Palleja A et al. (2018). Recovery of gut microbiota of healthy adults following antibiotic exposure. Nature Microbiology, 3(11):1255–1265.", url: "https://doi.org/10.1038/s41564-018-0257-9" },
                      { text: "Szajewska H, Kołodziej M. (2015). LGG for prevention of AAD in children. Alimentary Pharmacology & Therapeutics, 42(10):1149–1157.", url: "https://doi.org/10.1111/apt.13404" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: SEED.muted, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: SEED.green, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Reviews */}
        <section style={{ borderTop: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.caption, marginBottom: 6 }}>Seed Product Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, letterSpacing: "-0.02em" }}>More from Seed</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: SEED.green, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
