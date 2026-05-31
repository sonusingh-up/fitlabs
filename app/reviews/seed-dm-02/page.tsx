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
import SeedViaCap from "@/components/ui/SeedViaCap";
import { computeComposite } from "@/lib/scoring";
import { SEED, seedScoreColor } from "@/lib/seed-tokens";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Seed DM-02 Daily Multivitamin Review (2026) — Rated 7/10",
  description:
    "Seed DM-02 review: 20 vitamins/minerals at 100% DV, bioavailable chelated forms, ViaCap microbiome-aware delivery. $1.33/serving. Cellular complex underdosed. FSP 7/10.",
  alternates: { canonical: "/reviews/seed-dm-02" },
  openGraph: {
    title: "Seed DM-02 Review (2026) — Microbiome-Aware Multivitamin",
    description:
      "20 vitamins and minerals at 100% DV in chelated, bioavailable forms. ViaCap dual-capsule delivery with a microbiome-modulating prebiotic inner capsule. The first Co-Biotic multivitamin.",
    url: "https://fitlabreviews.com/reviews/seed-dm-02",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.5,
      notes:
        "20 vitamins and minerals at 100% DV — comprehensive coverage using bioavailable chelated forms for zinc, copper, manganese, molybdenum, and chromium. Cellular Energy Complex (CoQ10, PQQ, spermidine, postbiotic K2 MK-7) is genuinely interesting but at undisclosed individual doses within a likely small total allocation. Microbiome-Modulating Prebiotic (33mg wasabi + quercetin) targets the microbiome via the inner capsule. The vitamin/mineral foundation is solid; the cellular complex is likely sub-clinical.",
    },
    {
      pillar: "transparency",
      score: 7.0,
      notes:
        "All 20 core vitamins and minerals are individually disclosed at exact amounts (100% DV each). The Cellular Energy Complex and Microbiome Prebiotic are disclosed as totals only — individual CoQ10, PQQ, spermidine, K2, wasabi, and quercetin amounts are not published. Better transparency than many multivitamins but the cellular complex opacity is a gap.",
    },
    {
      pillar: "verification",
      score: 7.5,
      notes:
        "ISO 17025-accredited third-party testing. Available at major retail (Target, Sprouts, Amazon). Seed's institutional credibility from DS-01 extends to DM-02. No specific NSF, USP, or Informed Sport certification for the multivitamin product.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "$39.99 for 30 servings ($1.33/serving) is expensive for a multivitamin. The market average for quality multivitamins is $0.50–0.80/serving. Premium chelated forms, ViaCap manufacturing, and the Cellular Energy Complex justify part of the premium, but the undisclosed doses in the cellular complex make it hard to confirm that you're getting $1.33 of active value per capsule.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "1 capsule/day — the simplest possible protocol. Take with food for best absorption. Shelf-stable vegan formula. Available at Target, Sprouts, Amazon without subscription. The ViaCap architecture handles delivery complexity internally — the user just swallows one capsule.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "100% DV of 20 vitamins and minerals — comprehensive coverage",
      detail:
        "DM-02 covers 20 essential vitamins and minerals at 100% Daily Value. No ingredient is overdosed beyond the DV (avoiding megadose toxicity risks), and no key nutrient is missing. This is responsible, evidence-based multivitamin dosing.",
    },
    {
      type: "green",
      label: "Chelated mineral forms — superior bioavailability",
      detail:
        "Zinc, copper, manganese, molybdenum, and chromium are in chelated forms (bound to amino acids). Chelated minerals have documented superior absorption vs. oxide or sulfate forms. This is a meaningful quality differentiator over budget multivitamins using low-bioavailability mineral salts.",
    },
    {
      type: "green",
      label: "ViaCap with microbiome-aware delivery",
      detail:
        "DM-02's inner acid-resistant capsule delivers a Microbiome-Modulating Prebiotic (wasabi isothiocyanates + quercetin) to the lower GI, nourishing beneficial gut bacteria while the outer capsule delivers vitamins and minerals for systemic absorption. No other commercial multivitamin integrates microbiome support into the delivery architecture.",
    },
    {
      type: "green",
      label: "1 capsule/day — simplest possible protocol",
      detail:
        "Unlike many premium multivitamins requiring 4–6 capsules/day for full dosing, DM-02 achieves 100% DV of 20 nutrients in a single ViaCap capsule. This dramatically improves adherence.",
    },
    {
      type: "red",
      label: "Cellular Energy Complex — individual doses undisclosed, likely sub-clinical",
      detail:
        "The Cellular Energy Complex contains CoQ10, PQQ, spermidine, and postbiotic K2 MK-7. PQQ alone is evidenced at 20mg (Harris et al., 2013). CoQ10 at 100–200mg. Spermidine at 1–2mg. If these share a small total allocation, none can be at clinical doses. Seed does not disclose individual amounts.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "$1.33/serving — expensive for a multivitamin",
      detail:
        "Quality chelated-form multivitamins with full 100% DV coverage exist at $0.50–0.80/serving (e.g., Thorne Basic Nutrients at ~$0.88/serving). The DM-02 premium is partially justified by ViaCap delivery and the Cellular Energy Complex, but at undisclosed cellular doses, the value proposition is uncertain.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"100% DV Essential Vitamins and Minerals"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "20 nutrients at 100% Daily Value is directly verifiable from the supplement facts panel. All amounts are individually published. Claim is accurate.",
    },
    {
      claim: '"Helps fill daily nutrient gaps"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "This is the core use case for multivitamins. NHANES data consistently shows significant micronutrient gaps in adult diets (Vitamin D, magnesium, potassium, E). DM-02 addresses these gaps at appropriate doses.",
    },
    {
      claim: '"Immune, bone, hair, skin & nails health"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Vitamin D (immune + bone), Vitamin C (immune + collagen), Biotin (hair/nails), Zinc (immune + skin) all have established mechanisms at 100% DV. Claims are mechanistically supported but general health claims for multivitamins rarely demonstrate measurable outcomes in well-nourished populations (Fortmann et al., 2013).",
    },
    {
      claim: '"Vegan and shelf-stable"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "All ingredients are plant-derived or synthetic. No animal products. Stability tested at ambient conditions. Both claims are verifiable.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.33,
    primaryActiveGrams: 0.033,
    pricePerGramActive: 40.30,
    categoryAvgPricePerGram: 20.0,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is DM-02?" },
  { id: "viacap", label: "ViaCap Architecture" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "ingredients", label: "Ingredient Analysis" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
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
      name: "What makes Seed DM-02 different from other multivitamins?",
      acceptedAnswer: { "@type": "Answer", text: "Three differentiators: (1) ViaCap dual-capsule delivery — outer capsule delivers vitamins/minerals systemically; inner acid-resistant capsule delivers a Microbiome-Modulating Prebiotic (wasabi isothiocyanates + quercetin) to the lower GI. No other multivitamin integrates microbiome support into the delivery mechanism. (2) Chelated mineral forms — zinc, copper, manganese, molybdenum, and chromium are chelated for superior absorption. (3) Cellular Energy Complex — CoQ10, PQQ, spermidine, and K2 MK-7 in the same capsule." },
    },
    {
      "@type": "Question",
      name: "Is DM-02 worth $1.33/serving for a multivitamin?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on what you value. The chelated forms, ViaCap delivery, and microbiome-modulating prebiotic are genuine quality differentiators over budget multivitamins ($0.20–0.50/serving). The Cellular Energy Complex (CoQ10, PQQ, spermidine, K2) is interesting but individual doses are undisclosed — limiting value assessment. Comparable quality chelated-form multivitamins exist at $0.70–1.00/serving. The ViaCap delivery and microbiome integration justify a premium, but how much premium is a personal value judgment." },
    },
    {
      "@type": "Question",
      name: "Does DM-02 replace DS-01?",
      acceptedAnswer: { "@type": "Answer", text: "No. DM-02 is a multivitamin, not a probiotic. The inner capsule delivers prebiotics (wasabi + quercetin) to the microbiome — not probiotic strains. DS-01 delivers 24 probiotic strains at 53.6B AFU. They serve different purposes and can be used together. DM-02 for micronutrient coverage + cellular energy; DS-01 for active microbiome colonisation." },
    },
    {
      "@type": "Question",
      name: "What is the Cellular Energy Complex in DM-02?",
      acceptedAnswer: { "@type": "Answer", text: "The Cellular Energy Complex contains CoQ10 (mitochondrial electron transport), PQQ (mitochondrial biogenesis), spermidine (autophagy activation), and postbiotic Vitamin K2 MK-7 (calcium metabolism + vascular health). These are genuinely interesting longevity-adjacent compounds. The concern: individual doses are not disclosed. PQQ is studied at 20mg, CoQ10 at 100–200mg, spermidine at 1–2mg — it is unclear whether the total complex allocation allows clinical doses of each." },
    },
    {
      "@type": "Question",
      name: "Can I take DM-02 with food?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Seed recommends taking 1 capsule daily with food for best absorption. Fat-soluble vitamins (A, D, E, K) absorb better with dietary fat. The chelated minerals are well-absorbed regardless of food timing, but food reduces any potential GI sensitivity." },
    },
    {
      "@type": "Question",
      name: "Is DM-02 suitable for vegans?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. DM-02 is fully vegan — all vitamins and minerals are plant-derived or synthetic. The Vitamin D3 is vegan-sourced (lichen), and K2 MK-7 is produced via bacterial fermentation. The ViaCap capsule material is plant-based." },
    },
    {
      "@type": "Question",
      name: "Does DM-02 contain iron?",
      acceptedAnswer: { "@type": "Answer", text: "This is not confirmed in publicly available supplement facts. Many premium multivitamins exclude iron because excess iron is a risk for men and postmenopausal women (iron overload). If iron is a priority nutrient for you (e.g., premenopausal women with heavy periods, vegetarians), check the full label or supplement with iron separately if needed." },
    },
    {
      "@type": "Question",
      name: "How does DM-02 compare to Thorne or Pure Encapsulations multivitamins?",
      acceptedAnswer: { "@type": "Answer", text: "Thorne Basic Nutrients and Pure Encapsulations ONE Multivitamin are DM-02's closest premium competitors. Both use bioavailable forms and are third-party tested. Key differences: (1) DM-02 adds a microbiome-modulating prebiotic inner capsule — unique in the category; (2) DM-02 includes a Cellular Energy Complex with PQQ and spermidine — Thorne and Pure don't; (3) Thorne and Pure typically require 2–6 capsules/day; DM-02 is 1 capsule. Price-wise, DM-02 at $1.33/serving is comparable to Thorne ($0.88–1.50/serving) and Pure ($1.00–1.50/serving)." },
    },
    {
      "@type": "Question",
      name: "Is DM-02 third-party tested?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — ISO 17025-accredited third-party testing. This is the same testing framework used across all Seed products. Specific testing scope (identity, potency, contaminants, or all three) is not publicly specified for DM-02." },
    },
    {
      "@type": "Question",
      name: "Can I take DM-02 and DS-01 together?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. DM-02 (multivitamin + prebiotic) and DS-01 (probiotic synbiotic) serve complementary functions and are designed to be compatible. Both use ViaCap delivery and can be taken together or at different times. Seed's product line is designed as a modular system." },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-dm-02#review",
  name: "Seed DM-02 Daily Multivitamin — Fitlabreviews FSP Review",
  reviewBody:
    "DM-02 is the first microbiome-aware multivitamin: 20 vitamins/minerals at 100% DV in chelated bioavailable forms, plus a Cellular Energy Complex and ViaCap delivery with microbiome-modulating prebiotic inner capsule. $1.33/serving. FSP v2.1 editorial: 7/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed DM-02 Daily Multivitamin",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Multivitamin",
    description: "20 vitamins/minerals at 100% DV in chelated forms with ViaCap dual-capsule delivery and microbiome-modulating prebiotic.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "39.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M",
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
    verdict: "24 strains, 53.6B AFU, MAPP prebiotic. The probiotic complement to DM-02.",
    publishedAt: "2026-05-31",
    figNumber: "063",
  },
  {
    slug: "seed-am-02",
    title: "Seed AM-02 Energy + Focus",
    brand: "Seed",
    category: "Nootropic",
    rating: 7 as ReviewRating,
    verdict: "Caffeine-free nootropic with Cereboost ginseng and TeaCrine. Co-Biotic gut-brain delivery.",
    publishedAt: "2026-05-31",
    figNumber: "065",
  },
  {
    slug: "seed-pm-02",
    title: "Seed PM-02 Sleep + Restore",
    brand: "Seed",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Biphasic 500mcg melatonin, Shoden ashwagandha. The nighttime complement to AM-02.",
    publishedAt: "2026-05-31",
    figNumber: "062",
  },
];

export default function SeedDM02Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: SEED.pageBg, minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Multivitamins", href: "/category/multivitamins" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: SEED.border, fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: SEED.border, fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>DM-02 Daily Multivitamin</span>
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
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>REV-2026-067 · Co-Biotic Multivitamin · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: SEED.darkText, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed DM-02™<br />
                  <em style={{ fontWeight: 400, color: SEED.darkMuted, fontSize: "0.65em" }}>Daily Multivitamin</em>
                </h1>
                <p style={{ fontSize: 15, color: SEED.darkMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  20 vitamins and minerals at 100% DV. Chelated bioavailable forms. ViaCap delivery with a microbiome-modulating prebiotic inner capsule. The first Co-Biotic multivitamin. 1 capsule per day.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M" target="_blank" rel="nofollow noopener noreferrer"
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
                  <Image src="/products/seed-dm-02.webp" alt="Seed DM-02 Daily Multivitamin" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(61,139,55,0.4))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}><ReviewScoreBadge rating={editorialScore} size="lg" /></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7].map(s => <Star key={s} size={13} fill={SEED.green} color={SEED.green} />)}
                {[8,9,10].map(s => <Star key={s} size={13} fill="none" color={`${SEED.green}55`} />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: SEED.darkCaption, letterSpacing: "0.12em" }}>7 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.pageBg})` }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Seed" },
            { label: "Category", value: "Co-Biotic Multivitamin" },
            { label: "Nutrients", value: "20 vitamins + minerals" },
            { label: "Serving", value: "1 ViaCap / day" },
            { label: "Price", value: "$39.99 / 30 servings" },
            { label: "Per Serving", value: "$1.33" },
            { label: "Published", value: "May 31, 2026" },
            { label: "Last Updated", value: "May 31, 2026" },
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
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page"><MobileTOC items={tocItems} /></div>
        </div>

        {/* Main content */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">
            <aside style={{ borderRight: `1px solid ${SEED.border}` }} className="hidden lg:block"><TableOfContents items={tocItems} /></aside>

            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: SEED.darkBg, borderRadius: 14, marginBottom: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 14, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-067</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>
                        A genuinely novel multivitamin concept — microbiome-aware delivery with chelated forms. The Cellular Energy Complex is a question mark at undisclosed doses.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: SEED.darkMuted, letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.75 }}>
                    DM-02 earns a 7/10 because the core multivitamin is excellent — 20 nutrients at 100% DV in chelated bioavailable forms, one capsule per day, with a genuinely unique microbiome-modulating prebiotic delivery via the ViaCap inner capsule. No other multivitamin integrates microbiome support into the delivery architecture. The Cellular Energy Complex (CoQ10, PQQ, spermidine, K2) is a compelling addition conceptually, but at undisclosed individual doses, its contribution is likely nominal rather than clinical. At $1.33/serving, it is expensive relative to comparable-quality competitors. Disclose the Cellular Energy Complex doses and this moves to an 8.
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

              {/* § 2 What Is DM-02 */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Seed DM-02™?</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  DM-02 Daily Multivitamin is Seed's entry into the multivitamin category, applying their Co-Biotic (body + microbiome) philosophy to daily nutrient supplementation. It delivers 20 essential vitamins and minerals at 100% Daily Value using bioavailable chelated mineral forms — all in a single ViaCap capsule per day.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  The differentiator is the ViaCap architecture: the outer capsule delivers vitamins, minerals, and a Cellular Energy Complex (CoQ10, PQQ, spermidine, K2 MK-7) for systemic absorption. The inner acid-resistant capsule delivers a 33mg Microbiome-Modulating Prebiotic (Japanese wasabi isothiocyanates + quercetin from pagoda tree extract) to the lower GI — nourishing beneficial gut bacteria as part of the multivitamin serving.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75 }}>
                  DM-02 launched as part of Seed's Co-Biotics product line expansion in late 2025. Available at Target, Sprouts, Amazon, and seed.com. ISO 17025-accredited third-party testing.
                </p>
              </section>

              {/* § 3 ViaCap */}
              <section id="viacap" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>ViaCap® Architecture</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>How DM-02 delivers vitamins to the body and prebiotic to the microbiome — in one capsule.</p>
                <SeedViaCap
                  outerLabel="Outer Capsule → Systemic Absorption"
                  outerIngredients={[
                    "20 vitamins & minerals at 100% DV (chelated forms)",
                    "Cellular Energy Complex: CoQ10, PQQ, Spermidine, K2 MK-7",
                    "Released in upper GI for systemic bioavailability",
                  ]}
                  innerLabel="Inner Capsule (Acid-Resistant) → Lower GI / Microbiome"
                  innerIngredients={[
                    "Microbiome-Modulating Prebiotic 33mg",
                    "Japanese wasabi (root) — 2% isothiocyanates",
                    "Japanese pagoda tree (flower) — 95% quercetin",
                    "Nourishes beneficial gut bacteria during daily vitamin delivery",
                  ]}
                  note="One capsule daily with food. The microbiome-modulating prebiotic component is what makes DM-02 a 'Co-Biotic' multivitamin — it supports the microbiome as part of your daily vitamin routine."
                />
              </section>

              {/* § 4 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-067" />
              </section>

              {/* § 5 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 6 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 1 ViaCap · Servings per container: 30</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "40%" }}>Nutrient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "25%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "15%" }}>% DV</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "20%" }}>Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Vitamin A", amount: "900 mcg", dv: "100%", form: "—" },
                        { name: "Vitamin C", amount: "90 mg", dv: "100%", form: "—" },
                        { name: "Vitamin D3", amount: "20 mcg", dv: "100%", form: "Vegan (lichen)" },
                        { name: "Vitamin E", amount: "15 mg", dv: "100%", form: "—" },
                        { name: "Vitamin K", amount: "—", dv: "100%", form: "—" },
                        { name: "Thiamine (B1)", amount: "1.2 mg", dv: "100%", form: "—" },
                        { name: "Riboflavin (B2)", amount: "1.3 mg", dv: "100%", form: "—" },
                        { name: "Niacin (B3)", amount: "16 mg", dv: "100%", form: "—" },
                        { name: "Pantothenic Acid (B5)", amount: "5 mg", dv: "100%", form: "—" },
                        { name: "Biotin", amount: "30 mcg", dv: "100%", form: "—" },
                        { name: "Folate", amount: "400 mcg DFE", dv: "100%", form: "—" },
                        { name: "Iodine", amount: "150 mcg", dv: "100%", form: "—" },
                        { name: "Zinc", amount: "—", dv: "100%", form: "Chelated" },
                        { name: "Copper", amount: "0.9 mg", dv: "100%", form: "Chelated" },
                        { name: "Manganese", amount: "2.3 mg", dv: "100%", form: "Chelated" },
                        { name: "Chromium", amount: "35 mcg", dv: "100%", form: "Chelated" },
                        { name: "Molybdenum", amount: "—", dv: "100%", form: "Chelated" },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "10px 16px", fontSize: 13, color: SEED.body, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "10px 16px", fontSize: 12, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", color: SEED.greenDeep }}>{row.amount}</td>
                          <td style={{ padding: "10px 16px", fontSize: 11, textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", color: SEED.greenDeep, fontWeight: 600 }}>{row.dv}</td>
                          <td style={{ padding: "10px 16px", fontSize: 11, textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", color: row.form === "Chelated" ? SEED.green : SEED.caption }}>{row.form}</td>
                        </tr>
                      ))}
                      <tr style={{ backgroundColor: "rgba(139,115,85,0.06)", borderBottom: `1px solid ${SEED.mutedBg}` }}>
                        <td colSpan={4} style={{ padding: "10px 16px", fontSize: 12, fontWeight: 700, color: SEED.scoreMid, fontFamily: "var(--font-dm-mono), monospace" }}>+ Cellular Energy Complex (CoQ10, PQQ, Spermidine, K2 MK-7) — individual doses undisclosed</td>
                      </tr>
                      <tr style={{ backgroundColor: "rgba(139,115,85,0.06)" }}>
                        <td colSpan={4} style={{ padding: "10px 16px", fontSize: 12, fontWeight: 700, color: SEED.scoreMid, fontFamily: "var(--font-dm-mono), monospace" }}>+ Microbiome-Modulating Prebiotic 33mg (Wasabi + Quercetin) — inner capsule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: SEED.caption, marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  "—" = exact amount not found in publicly available supplement facts at time of review. All 20 nutrients confirmed at 100% DV.
                </p>
              </section>

              {/* § 7 Ingredient Analysis */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Analysis</h2>
                {[
                  {
                    name: "Chelated Minerals (Zinc, Copper, Manganese, Molybdenum, Chromium)",
                    evidence: "strong" as EvidenceLevel,
                    verdict: "Superior absorption forms — meaningful quality differentiator",
                    body: "Chelated minerals (bound to amino acids like glycine or bisglycinate) have documented superior absorption compared to oxide or sulfate forms. Gandia et al. (2007) showed zinc bisglycinate had 43% greater bioavailability than zinc gluconate. For a one-capsule multivitamin where dose space is limited, chelated forms ensure maximum utility from each milligram included.",
                  },
                  {
                    name: "Cellular Energy Complex (CoQ10, PQQ, Spermidine, K2 MK-7) — Undisclosed doses",
                    evidence: "emerging" as EvidenceLevel,
                    verdict: "Compelling concept, likely sub-clinical in a one-capsule format",
                    body: "Each component is individually interesting: CoQ10 supports mitochondrial electron transport (effective at 100–200mg); PQQ promotes mitochondrial biogenesis (Harris et al., 2013 used 20mg); spermidine activates autophagy (Eisenberg et al., 2009 — dietary spermidine intake ~1mg/day is cardioprotective); K2 MK-7 directs calcium to bone rather than arteries. In a single-capsule format that must also contain 20 vitamins and minerals, the physical space for meaningful Cellular Energy Complex doses is extremely limited. These ingredients are almost certainly present at nominal amounts.",
                  },
                  {
                    name: "Microbiome-Modulating Prebiotic — 33mg (Wasabi + Quercetin)",
                    evidence: "emerging" as EvidenceLevel,
                    verdict: "Novel concept — selective microbiome modulation via polyphenols",
                    body: "Japanese wasabi isothiocyanates and quercetin (from Japanese pagoda tree) are polyphenolic compounds with antimicrobial selectivity — they inhibit certain pathogenic bacteria while supporting beneficial species. This is a different mechanism from traditional prebiotics (FOS, inulin) which feed bacteria non-selectively. At 33mg total, this is a low dose — more of a daily microbiome maintenance signal than a therapeutic intervention.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 2 ? 16 : 0, padding: "18px 22px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: SEED.ink, margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 8 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { label: "ISO 17025-accredited testing", status: true },
                    { label: "Chelated mineral forms", status: true },
                    { label: "Vegan / Shelf-stable", status: true },
                    { label: "Major retail (Target, Sprouts)", status: true },
                    { label: "Cellular Energy Complex doses", status: false },
                    { label: "NSF / USP Verified", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: item.status ? SEED.certPass : SEED.certFail, border: `1px solid ${item.status ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 14, color: item.status ? SEED.certPassText : SEED.certFailText }}>{item.status ? "✓" : "✗"}</span>
                      <span style={{ fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 9 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 10 How to Take */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>Protocol</p>
                  <p style={{ fontSize: 15, color: SEED.ink, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 1 capsule daily with food for best absorption.</p>
                  <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Fat-soluble vitamins (A, D, E, K) absorb better with dietary fat. Morning or evening — timing doesn't critically matter for a multivitamin, but consistency does. Do not crush or open the capsule. Can be taken alongside DS-01 or AM-02.
                  </p>
                </div>
              </section>

              {/* § 11 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 600, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        {["Product", "Nutrients", "Caps/Day", "Chelated?", "Microbiome?", "$/Serving"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Seed DM-02", nut: "20 at 100% DV", caps: "1", chel: "Yes", mic: "Yes (ViaCap)", price: "$1.33", hi: true },
                        { product: "Thorne Basic Nutrients", nut: "21 nutrients", caps: "2", chel: "Yes", mic: "No", price: "$0.88", hi: false },
                        { product: "Pure Encapsulations ONE", nut: "20+ nutrients", caps: "1", chel: "Yes", mic: "No", price: "$1.10", hi: false },
                        { product: "Ritual Essential", nut: "10 nutrients", caps: "2", chel: "Partial", mic: "No", price: "$1.10", hi: false },
                        { product: "Nature Made Multi", nut: "22 nutrients", caps: "1", chel: "No (oxides)", mic: "No", price: "$0.15", hi: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.hi ? "rgba(61,139,55,0.06)" : i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.hi ? 700 : 400, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.nut}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 600, color: SEED.body, fontFamily: "var(--font-dm-mono), monospace" }}>{row.caps}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.chel === "Yes" ? SEED.greenDeep : SEED.muted, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.chel}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.mic.includes("Yes") ? SEED.greenDeep : SEED.muted, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.mic}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.hi ? SEED.green : SEED.ink, fontFamily: "var(--font-dm-mono), monospace" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: SEED.caption, marginTop: 12, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices verified May 2026. DM-02 is the only multivitamin with integrated microbiome-modulating delivery.</p>
              </section>

              {/* § 12 Seed Family */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Seed Product Family</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="DM-02™ Daily Multivitamin" brand="Seed" category="Multivitamin" score={7} priceUSD="$39.99 / 30 servings" priceINR="N/A" tags={["20 Nutrients", "Chelated", "ViaCap"]} buyUrl="https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M" buyLabel="Buy on Amazon" reviewSlug="seed-dm-02" image="seed-dm-02.webp" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} featured={true} />
                  <ProductCard name="DS-01® Daily Synbiotic" brand="Seed" category="Synbiotic" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["24 Strains", "53.6B AFU"]} buyUrl="https://www.amazon.com/Seed-DS-01-Daily-Synbiotic-Multi-Strain/dp/B0CMJR4XGR" buyLabel="Buy on Amazon" reviewSlug="seed-ds-01" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                  <ProductCard name="AM-02™ Energy + Focus" brand="Seed" category="Nootropic" score={7} priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Caffeine-Free", "Cereboost®"]} buyUrl="https://www.amazon.com/Seed-AM-02-Energy-Focus-Caffeine-Free/dp/B0FHYW18X6" buyLabel="Buy on Amazon" reviewSlug="seed-am-02" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                </div>
              </section>

              {/* § 13 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["20 vitamins/minerals at 100% DV — comprehensive, not megadosed", "Chelated mineral forms — superior absorption for zinc, copper, manganese, chromium, molybdenum", "Only 1 capsule/day — simplest protocol in the premium multivitamin category", "ViaCap with microbiome-modulating prebiotic — unique in multivitamins", "Cellular Energy Complex (CoQ10, PQQ, spermidine, K2) — interesting longevity ingredients", "ISO 17025-accredited testing", "Vegan, shelf-stable, available at major retail"]}
                  cons={["$1.33/serving — 50–60% more expensive than comparable quality multivitamins (Thorne, Pure)", "Cellular Energy Complex individual doses undisclosed — likely sub-clinical given one-capsule format", "Microbiome prebiotic at 33mg total — low dose for meaningful selective modulation", "No NSF or USP Verified certification", "No iron included (potential gap for premenopausal women)"]}
                />
              </section>

              {/* § 14 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    DM-02 has an excellent safety profile. All nutrients are at 100% DV — no megadoses that risk toxicity. No single vitamin exceeds the Upper Tolerable Intake Level. The chelated mineral forms are gentler on the GI tract than oxide/sulfate forms. The microbiome prebiotic at 33mg is unlikely to cause any GI effects. Overall: one of the safest supplement options for daily use. No specific drug interactions at 100% DV dosing.
                  </p>
                </div>
              </section>

              {/* § 15 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="microbiome-modulating prebiotic" />
              </section>

              {/* § 16 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: SEED.ink, marginBottom: 4 }}>$39.99 <span style={{ fontSize: "0.55em", color: SEED.sepia, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span></p>
                    <p style={{ fontSize: 13, color: SEED.muted, margin: 0 }}>Also at seed.com, Target, Sprouts. Prices verified May 2026.</p>
                  </div>
                  <a href="https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 17 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderRadius: 8, border: `1px solid ${SEED.mutedBg}`, overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-dm02" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: SEED.green }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: SEED.muted, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-dm02 svg{display:none;}details[open] .faq-icon-dm02::after{content:'';display:block;width:10px;height:2px;background:${SEED.green};border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 18 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: SEED.darkBg, borderRadius: 16, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 16, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 — REV-2026-067</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: SEED.darkMuted }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>Conditionally recommended. The best option if you want microbiome-aware delivery in your daily vitamin.</p>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.8, marginBottom: 28 }}>
                    DM-02 scores 7/10 because the core multivitamin is genuinely well-formulated — chelated forms, 100% DV, one capsule — and the microbiome-modulating ViaCap delivery is unique in the category. The Cellular Energy Complex is the main question mark: interesting ingredients at undisclosed (and likely sub-clinical) doses. If you want the most innovative multivitamin architecture available and value the microbiome integration, DM-02 is the choice. If you want maximum transparency at a lower price, Thorne Basic Nutrients or Pure Encapsulations ONE deliver comparable vitamin/mineral quality without the premium.
                  </p>
                  <a href="https://www.amazon.com/Seed-DM-02-Daily-Multivitamin-Essential/dp/B0FHYNSJ6M" target="_blank" rel="nofollow noopener noreferrer"
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
                      { text: "Gandia P et al. (2007). A bioavailability study comparing two oral formulations containing zinc. International Journal for Vitamin and Nutrition Research, 77(4):243–248.", url: "https://doi.org/10.1024/0300-9831.77.4.243" },
                      { text: "Harris CB et al. (2013). Dietary PQQ alters indicators of inflammation and mitochondrial-related metabolism. Journal of Nutritional Biochemistry, 24(12):2076–2084.", url: "https://doi.org/10.1016/j.jnutbio.2013.07.008" },
                      { text: "Eisenberg T et al. (2009). Induction of autophagy by spermidine promotes longevity. Nature Cell Biology, 11(11):1305–1314.", url: "https://doi.org/10.1038/ncb1975" },
                      { text: "Fortmann SP et al. (2013). Vitamin and mineral supplements in the primary prevention of cardiovascular disease and cancer. Annals of Internal Medicine, 159(12):824–834.", url: "https://doi.org/10.7326/0003-4819-159-12-201312170-00729" },
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
