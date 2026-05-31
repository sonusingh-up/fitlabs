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
import SeedStrainPanel from "@/components/ui/SeedStrainPanel";
import SeedResearchCard from "@/components/ui/SeedResearchCard";
import { computeComposite } from "@/lib/scoring";
import { SEED, seedScoreColor } from "@/lib/seed-tokens";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Seed PDS-08 Pediatric Synbiotic Review (2026) — Rated 8/10",
  description:
    "Seed PDS-08 review: 9 pediatric strains, 24.5B AFU, 5g prebiotic fiber, double-blind RCT. The most evidence-backed probiotic for kids ages 3–17. FSP 8/10.",
  alternates: { canonical: "/reviews/seed-pds-08" },
  openGraph: {
    title: "Seed PDS-08 Review (2026) — First Kids Synbiotic With an RCT",
    description:
      "9 pediatric-specific probiotic strains, 24.5B AFU, and 5g dual-phase fiber prebiotic. The first 2-in-1 kids synbiotic tested in a double-blind, randomised, placebo-controlled trial.",
    url: "https://fitlabreviews.com/reviews/seed-pds-08",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.5,
      notes:
        "9 pediatric-specific probiotic strains across 3 targeted blends (GI/Immunity 19.5B, Respiratory 3.5B, Dermatological 1.5B). 5g dual-phase prebiotic (short-chain FOS + long-chain inulin) — fermentable fibers appropriate for developing gut microbiomes. Powder sachet format is ideal for children ages 3–17. Unique: this is the first 2-in-1 synbiotic studied in a pediatric double-blind RCT.",
    },
    {
      pillar: "transparency",
      score: 7.5,
      notes:
        "All 9 strain names published. Blend-level AFU counts disclosed (19.5B, 3.5B, 1.5B). 5g prebiotic amount and composition (short + long chain fibers) disclosed. Individual per-strain AFU breakdown not published. Overall transparency level matches DS-01.",
    },
    {
      pillar: "verification",
      score: 8.5,
      notes:
        "Genomically confirmed strains. Pediatric-specific double-blind, randomised, placebo-controlled trial conducted. Stability tested at shelf conditions. Third-party testing consistent with DS-01 standards. The RCT is a meaningful differentiator — most kids' probiotics have no pediatric clinical trial data.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "$39.99/month ($1.33/serving) is premium for a children's supplement. However, the clinical evidence — including a pediatric RCT — justifies a premium over unstudied alternatives. Compared to paediatric probiotic brands with zero clinical backing at $25–35/month, the differential is defensible.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Powder sachets are highly practical for children who can't swallow capsules. Mix into cold soft foods or liquids — flexible delivery. Shelf-stable. Ages 3–17. Clear weight-based dosing guidance. Not suitable for infants under 3. Adult dose is separate (DS-01).",
    },
  ],
  flags: [
    {
      type: "green",
      label: "First 2-in-1 kids synbiotic with a pediatric double-blind RCT",
      detail:
        "PDS-08 is the first commercially available pediatric synbiotic to have been tested in a double-blind, randomised, placebo-controlled trial in a pediatric population. This is a genuine scientific distinction — virtually all competing kids' probiotics have no pediatric RCT data.",
    },
    {
      type: "green",
      label: "Dual-phase prebiotic fiber — 5g short + long chain",
      detail:
        "5g of dual-phase fiber (short-chain FOS for rapid fermentation by bifidobacteria; long-chain inulin for slower, distal colon fermentation) supports a broader spectrum of beneficial bacteria than single-fiber prebiotics.",
    },
    {
      type: "green",
      label: "Pediatric-specific strain selection — not adult strains repackaged",
      detail:
        "PDS-08 uses strains specifically selected and studied in children: L. rhamnosus GG (gold standard for pediatric gut and immune outcomes), L. acidophilus LA-5, B. breve (colonisation of developing microbiomes). These are not simply repurposed adult strains.",
    },
    {
      type: "green",
      label: "Powder sachet — no capsules required, ages 3–17",
      detail:
        "Single-use sachets mix into yoghurt, applesauce, water, or smoothies. No capsule-swallowing required, making it genuinely usable for the full 3–17 age range.",
    },
    {
      type: "red",
      label: "Per-strain AFU counts undisclosed",
      detail:
        "Blend-level AFU counts are given (19.5B, 3.5B, 1.5B) but individual strain contributions are not broken out. Same limitation as DS-01.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "FOS/inulin prebiotic may cause GI upset in sensitive children",
      detail:
        "Unlike DS-01's non-fermenting MAPP prebiotic, PDS-08 uses fermentable FOS and inulin. In sensitive children, these can cause initial bloating and gas. This is the trade-off for developing-microbiome suitability — young gut microbiomes benefit from these fibers differently to adults.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Fiber-based prebiotic & probiotic for kids"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "5g dual-phase fiber (FOS + inulin) is a well-established prebiotic approach for children. 9 pediatric-specific probiotic strains. Both components are genuinely pediatric-appropriate.",
    },
    {
      claim: '"Digestive health, regularity, constipation relief"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "L. rhamnosus GG has strong pediatric RCT evidence for gut health and AAD prevention (Szajewska & Kołodziej, 2015). The full PDS-08 formulation's digestive effects are supported by the brand's own pediatric RCT, though study details (population, endpoints) are not fully published publicly.",
    },
    {
      claim: '"Ages 3–17"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Powder sachet format is appropriate for this age range. Strains selected are studied in pediatric populations. Not suitable for infants under 3.",
    },
    {
      claim: '"First 2-in-1 powdered synbiotic studied in a double-blind, randomized, placebo-controlled trial in a pediatric population"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Seed has stated this claim publicly and it is consistent with available literature — no other commercially available pediatric synbiotic product has published a double-blind RCT.",
    },
    {
      claim: '"Non-habit forming"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Probiotic strains and fermentable fiber prebiotics have no established dependency, withdrawal, or tolerance profile in children or adults.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.33,
    primaryActiveGrams: 5.0,
    pricePerGramActive: 0.266,
    categoryAvgPricePerGram: 0.20,
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
  { id: "what-is", label: "What Is PDS-08?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "strains", label: "Strain Profile" },
  { id: "ingredients", label: "Ingredient Analysis" },
  { id: "research", label: "Clinical Research" },
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
      name: "What age is PDS-08 suitable for?",
      acceptedAnswer: { "@type": "Answer", text: "PDS-08 is formulated for children ages 3–17. The powder sachet format makes it practical across this full range without requiring capsule swallowing. It is not intended for infants under 3. Adults should use DS-01." },
    },
    {
      "@type": "Question",
      name: "How do you give PDS-08 to a child?",
      acceptedAnswer: { "@type": "Answer", text: "Open one sachet and mix the powder into cold or room-temperature soft food (yoghurt, applesauce, oatmeal) or a cold liquid (water, milk, smoothie). Do not add to hot foods or beverages — heat kills probiotic strains. Can be given with or without food." },
    },
    {
      "@type": "Question",
      name: "Is PDS-08 safe alongside antibiotics?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, with spacing. Give PDS-08 at least 2 hours after the antibiotic dose — antibiotics administered simultaneously will kill the probiotic strains. Continue PDS-08 throughout the antibiotic course and for at least 2 weeks after completion to support microbiome recovery." },
    },
    {
      "@type": "Question",
      name: "What is the pediatric RCT that Seed conducted for PDS-08?",
      acceptedAnswer: { "@type": "Answer", text: "Seed conducted a double-blind, randomised, placebo-controlled trial of PDS-08 in a pediatric population — making it the first commercially available kids' synbiotic with this level of evidence. The study used the full PDS-08 formulation (not just individual strains), which is a meaningful distinction from studies of isolated strains. Full study details and endpoints have not been fully published in a peer-reviewed journal as of May 2026 — Seed references it in marketing materials." },
    },
    {
      "@type": "Question",
      name: "Does PDS-08 cause bloating in children?",
      acceptedAnswer: { "@type": "Answer", text: "Some children experience mild bloating and gas in the first 1–2 weeks as their microbiome adjusts. This is more common with PDS-08 than with DS-01 because PDS-08 uses fermentable FOS and inulin — fibers that feed beneficial bacteria but also ferment, producing gas. Starting with half a sachet for the first 3–5 days reduces this. If significant bloating persists beyond 2 weeks, consult a paediatrician." },
    },
    {
      "@type": "Question",
      name: "Does PDS-08 need to be refrigerated?",
      acceptedAnswer: { "@type": "Answer", text: "No. PDS-08 is shelf-stable at ambient temperature, consistent with Seed's stability testing standards. Store in a cool, dry place away from heat and direct sunlight." },
    },
    {
      "@type": "Question",
      name: "Is PDS-08 suitable for children with dairy allergies?",
      acceptedAnswer: { "@type": "Answer", text: "PDS-08 is vegan and does not contain dairy ingredients. However, some probiotic strains are grown on dairy-containing fermentation media, which may leave trace residues. Consult a paediatrician if your child has a severe dairy allergy. The product is explicitly labelled dairy-free by Seed." },
    },
    {
      "@type": "Question",
      name: "How does PDS-08 compare to Culturelle Kids?",
      acceptedAnswer: { "@type": "Answer", text: "Culturelle Kids uses a single strain (L. rhamnosus GG) at 5B CFU. PDS-08 uses 9 strains at 24.5B AFU across 3 targeted blends plus 5g prebiotic. Culturelle has more individual RCT data for LGG specifically; PDS-08 has a product-specific pediatric RCT covering the full formula. Culturelle costs ~$0.60/serving; PDS-08 costs $1.33/serving. For maximum evidence-per-dollar on a tight budget, Culturelle Kids is defensible; for the most comprehensive pediatric synbiotic formula available, PDS-08 leads the field." },
    },
    {
      "@type": "Question",
      name: "What is the prebiotic in PDS-08?",
      acceptedAnswer: { "@type": "Answer", text: "PDS-08 contains 5g of dual-phase prebiotic fiber: short-chain fructooligosaccharides (scFOS) and long-chain inulin. scFOS ferments rapidly in the proximal colon, preferentially feeding bifidobacteria. Long-chain inulin ferments more slowly in the distal colon, supporting a broader range of beneficial microbes. This is different from DS-01's non-fermenting MAPP prebiotic — for developing pediatric microbiomes, fermentable fiber prebiotics are appropriate and evidence-backed." },
    },
    {
      "@type": "Question",
      name: "Can PDS-08 help with childhood constipation?",
      acceptedAnswer: { "@type": "Answer", text: "Potentially. The 5g fiber prebiotic supports GI motility and regularity through two mechanisms: the prebiotic fiber adds bulk and feeds bacteria that produce short-chain fatty acids affecting colon motility; several included probiotic strains (B. lactis, L. rhamnosus) have RCT evidence for improving stool consistency and frequency in children. This is not a laxative and works through microbiome modulation — effects build over 2–4 weeks of consistent use." },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-pds-08#review",
  name: "Seed PDS-08 Pediatric Daily Synbiotic — Fitlabreviews FSP Review",
  reviewBody:
    "PDS-08 is the most evidence-backed pediatric probiotic available: 9 pediatric-specific strains at 24.5B AFU, 5g dual-phase prebiotic, and the first kids synbiotic tested in a product-specific double-blind RCT. FSP v2.1 editorial: 8/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed PDS-08 Pediatric Daily Synbiotic",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Pediatric Probiotic",
    description: "9-strain pediatric probiotic + 5g dual-phase prebiotic in powder sachet format. Ages 3–17.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "39.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4ecAxQa",
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
    verdict: "The adult version: 24 strains, 53.6B AFU, non-fermenting MAPP prebiotic. ViaCap dual-capsule delivery.",
    publishedAt: "2026-05-31",
    figNumber: "063",
  },
  {
    slug: "seed-14-day-gut-reset",
    title: "Seed 14 Day Gut Reset",
    brand: "Seed",
    category: "Gut Reset",
    rating: 8 as ReviewRating,
    verdict: "Same DS-01 formula in a 14-day intensive pack. Ideal for post-antibiotic gut recovery.",
    publishedAt: "2026-05-31",
    figNumber: "066",
  },
  {
    slug: "seed-dm-02",
    title: "Seed DM-02 Daily Multivitamin",
    brand: "Seed",
    category: "Multivitamin",
    rating: 7 as ReviewRating,
    verdict: "20 vitamins/minerals at 100% DV with microbiome-aware ViaCap delivery. $1.33/serving.",
    publishedAt: "2026-05-31",
    figNumber: "067",
  },
];

export default function SeedPDS08Review() {
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
            <span style={{ fontSize: 11, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>PDS-08 Pediatric Synbiotic</span>
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
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>REV-2026-064 · Kids Synbiotic · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: SEED.darkText, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed PDS-08®<br />
                  <em style={{ fontWeight: 400, color: SEED.darkMuted, fontSize: "0.65em" }}>Pediatric Daily Synbiotic</em>
                </h1>
                <p style={{ fontSize: 15, color: SEED.darkMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  9 pediatric-specific strains. 24.5 billion AFU. 5g dual-phase prebiotic fiber. The first 2-in-1 kids synbiotic with a product-specific double-blind RCT. Ages 3–17.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4ecAxQa" target="_blank" rel="nofollow noopener noreferrer"
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
                  <Image src="/products/seed-pds-08.webp" alt="Seed PDS-08 Pediatric Daily Synbiotic" fill
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
            { label: "Category", value: "Pediatric Synbiotic" },
            { label: "Ages", value: "3–17" },
            { label: "Strains", value: "9 (genomically confirmed)" },
            { label: "Potency", value: "24.5B AFU" },
            { label: "Price", value: "$39.99 / month" },
            { label: "Per Serving", value: "$1.33" },
            { label: "Published", value: "May 31, 2026" },
          ]} />
        </div>

        {/* Author & disclosure */}
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
              <p style={{ fontSize: 12, color: SEED.muted }}>Pediatric strain analysis · FSP v2.1 · Cross-referenced with pediatric probiotic literature</p>
            </div>
            <span style={{ padding: "3px 8px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 4, fontSize: 10, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Review</span>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: SEED.sepia, flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links may earn a commission. Scores are editorially independent.{" "}
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
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-064</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>
                        The most evidence-backed kids' probiotic. Pediatric-specific strains, a real RCT, and 5g of fiber prebiotic. Nothing else in the kids' category comes close.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: SEED.darkMuted, letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.75 }}>
                    PDS-08 earns an 8/10 on the same logic as DS-01 — genuine formulation rigour applied specifically to a pediatric population. The product-specific double-blind RCT is a meaningful achievement. The strains are pediatric-relevant, the prebiotic is appropriate for developing microbiomes, and the sachet format solves the capsule problem for the 3–17 age range. Per-strain AFU disclosure remains an open gap, and the fermentable fiber prebiotic (vs. DS-01's non-fermenting MAPP) can cause initial GI adjustment. At $1.33/serving, it's premium but justified.
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

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${SEED.border}`, backgroundColor: SEED.cardBg }}>
                  <div style={{ background: SEED.bannerBg, padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 200 }}>
                    <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.green }}>
                      <ShieldCheck size={10} /> Pediatric RCT
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 170 }}>
                      <Image src="/products/seed-pds-08.webp" alt="Seed PDS-08" fill style={{ objectFit: "contain" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.cardBg})` }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>Seed · Ages 3–17</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink, marginBottom: 12 }}>PDS-08® Pediatric Daily Synbiotic</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: `1px solid ${SEED.mutedBg}`, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "24.5B", label: "AFU" }, { val: "5g", label: "Prebiotic" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: SEED.green, lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: SEED.caption }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.caption, marginBottom: 2 }}>Price / 30 sachets</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink }}>$39.99</p>
                      </div>
                      <a href="https://amzn.to/4ecAxQa" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is PDS-08 */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Seed PDS-08®?</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  PDS-08® Pediatric Daily Synbiotic is Seed's probiotic formulated specifically for children ages 3–17. It comes in single-use powder sachets — one sachet mixed into cold food or liquid daily — making it practical across the full pediatric age range without requiring capsule swallowing.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  Unlike DS-01's 24-strain adult formula, PDS-08 uses 9 strains specifically selected for pediatric gut development: three blends targeting gastrointestinal immunity (the primary blend at 19.5B AFU), respiratory health (3.5B AFU), and dermatological health (1.5B AFU). The prebiotic component is 5g of dual-phase fiber — short-chain FOS and long-chain inulin — which feeds beneficial bacteria in developing microbiomes.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75 }}>
                  The scientific distinction that sets PDS-08 apart from every other commercial kids' probiotic: Seed has conducted a double-blind, randomised, placebo-controlled trial of PDS-08 itself — not just of individual strains taken from other contexts. This product-specific RCT in a pediatric population is genuinely unprecedented in the commercial pediatric probiotic market.
                </p>
              </section>

              {/* § 3 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-064" />
              </section>

              {/* § 4 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 1 sachet · Servings per container: 30</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "42%" }}>Component</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "28%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "30%" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Dual-Phase Prebiotic Fiber (scFOS + Inulin)", amount: "5 g", ok: true },
                        { name: "GI & Immunity Blend (4 strains)", amount: "19.5B AFU", ok: true },
                        { name: "Respiratory Health Blend (2 strains)", amount: "3.5B AFU", ok: true },
                        { name: "Dermatological Health Blend (3 strains)", amount: "1.5B AFU", ok: true },
                        { name: "Total Probiotic Potency", amount: "24.5B AFU", ok: true },
                        { name: "Per-strain individual AFU", amount: "Undisclosed", ok: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: SEED.body, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 12, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: row.ok ? SEED.greenDeep : SEED.scoreLow }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.ok ? SEED.certPass : SEED.certFail, border: `1px solid ${row.ok ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 20, fontSize: 11, color: row.ok ? SEED.certPassText : SEED.certFailText, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>
                              {row.ok ? "Disclosed ✓" : "Undisclosed"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* § 6 Strain Panel */}
              <section id="strains" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Strain Profile</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>All strains genomically confirmed and pediatric-appropriate.</p>
                <SeedStrainPanel
                  totalAFU="24.5B AFU"
                  measurementNote="AFU (Active Fluorescent Units) by flow cytometry. Individual per-strain AFU undisclosed."
                  blends={[
                    {
                      name: "Gastrointestinal & Immunity",
                      totalAFU: "19.5B AFU",
                      color: SEED.green,
                      strains: ["L. rhamnosus GG", "L. acidophilus LA-5", "B. lactis BB-12", "B. breve"],
                    },
                    {
                      name: "Respiratory Health",
                      totalAFU: "3.5B AFU",
                      color: "#5EAD58",
                      strains: ["B. breve", "L. salivarius"],
                    },
                    {
                      name: "Dermatological Health",
                      totalAFU: "1.5B AFU",
                      color: "#2A8A8A",
                      strains: ["B. lactis", "B. longum", "L. casei"],
                    },
                  ]}
                />
              </section>

              {/* § 7 Ingredient Analysis */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Analysis</h2>
                {[
                  {
                    name: "L. rhamnosus GG (LGG) — Primary Digestive Strain",
                    evidence: "strong" as EvidenceLevel,
                    verdict: "The gold standard pediatric probiotic strain — most RCT evidence in children",
                    body: "L. rhamnosus GG has the most extensive pediatric probiotic evidence base: Szajewska & Kołodziej (2015) meta-analysis of 12 RCTs confirmed it reduces antibiotic-associated diarrhoea incidence by 52% (RR 0.48) in children. Hojsak et al. (2010) found LGG reduced upper respiratory tract infections in children by 35%. It colonises the pediatric gut effectively and has an excellent 30-year safety record in children.",
                  },
                  {
                    name: "Dual-Phase Prebiotic Fiber — 5g (scFOS + Inulin)",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Fermentable fiber appropriate for developing microbiomes",
                    body: "5g of mixed-chain prebiotic fiber supports the developing pediatric microbiome in ways that adult prebiotics (like MAPP) don't address. Short-chain FOS (scFOS) is rapidly fermented by bifidobacteria in the proximal colon — producing short-chain fatty acids that support gut barrier integrity. Long-chain inulin reaches more distal regions. Buddington et al. (1999) demonstrated FOS supplementation increased bifidobacteria and lactobacilli in children. The 5g dose is consistent with effective pediatric prebiotic studies.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 1 ? 16 : 0, padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: SEED.ink, margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 8 Clinical Research */}
              <section id="research" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Clinical Research</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <SeedResearchCard
                    title="L. rhamnosus GG for prevention of antibiotic-associated diarrhoea in children"
                    authors="Szajewska H & Kołodziej M"
                    year={2015}
                    journal="Alimentary Pharmacology & Therapeutics"
                    finding="Meta-analysis of 12 RCTs: LGG reduced antibiotic-associated diarrhoea incidence by 52% in children (RR 0.48). Equivalent strain to PDS-08's primary GI blend strain."
                    trialType="Meta-analysis"
                    doi="https://doi.org/10.1111/apt.13404"
                  />
                  <SeedResearchCard
                    title="Lactobacillus rhamnosus GG prevents upper respiratory tract infections in children"
                    authors="Hojsak I et al."
                    year={2010}
                    journal="Clinical Nutrition"
                    finding="RCT (N=281 children): LGG reduced upper respiratory tract infection risk by 35% and GI infection risk by 63% vs. placebo over 3 months of supplementation."
                    trialType="RCT"
                    doi="https://doi.org/10.1016/j.clnu.2009.09.010"
                  />
                  <SeedResearchCard
                    title="Bifidobacterium lactis BB-12 in pediatric gut health"
                    authors="Piirainen L et al."
                    year={2008}
                    journal="British Journal of Nutrition"
                    finding="B. lactis BB-12 supplementation in children improved stool consistency and frequency, with significant reduction in hard stools at 4 weeks vs. placebo."
                    trialType="RCT"
                    doi="https://doi.org/10.1017/S0007114507812312"
                  />
                </div>
              </section>

              {/* § 9 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { label: "Genomic confirmation (all 9 strains)", status: true },
                    { label: "Stability tested (shelf-stable)", status: true },
                    { label: "Pediatric product-specific RCT", status: true },
                    { label: "Third-party tested", status: true },
                    { label: "Vegan / dairy-free", status: true },
                    { label: "NSF / Informed Sport", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: item.status ? SEED.certPass : SEED.certFail, border: `1px solid ${item.status ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 14, color: item.status ? SEED.certPassText : SEED.certFailText }}>{item.status ? "✓" : "✗"}</span>
                      <span style={{ fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 10 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 11 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>Protocol (Ages 3–17)</p>
                  <p style={{ fontSize: 15, color: SEED.ink, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Open 1 sachet, mix into cold or room-temperature food or liquid daily.</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Mix into cold yoghurt, applesauce, oatmeal, or a glass of cold/room-temperature water, milk, or smoothie.",
                      "Do NOT add to hot food or beverages — heat kills probiotic strains.",
                      "Start with half a sachet for the first 3–5 days to allow GI adjustment, especially if the child has not taken probiotics before.",
                      "Space from antibiotics by at least 2 hours.",
                      "Same time each day — morning or evening with a meal is convenient.",
                    ].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 12 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        {["Product", "Strains", "Potency", "Prebiotic", "Pediatric RCT", "$/Month"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Seed PDS-08", strains: "9 (genomic)", pot: "24.5B AFU", pre: "5g FOS+Inulin", rct: "Yes ✓", price: "$39.99", hi: true },
                        { product: "Culturelle Kids", strains: "1 (LGG)", pot: "5B CFU", pre: "Inulin 200mg", rct: "No (LGG only)", price: "~$18", hi: false },
                        { product: "Garden of Life Kids", strains: "14", pot: "5B CFU", pre: "Organic acacia", rct: "No", price: "~$27", hi: false },
                        { product: "Olly Kids Probiotic", strains: "2", pot: "1B CFU", pre: "Prebiotic fiber", rct: "No", price: "~$16", hi: false },
                        { product: "Renew Life Ultimate Flora Kids", strains: "6", pot: "3B CFU", pre: "None", rct: "No", price: "~$23", hi: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.hi ? "rgba(61,139,55,0.06)" : i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.hi ? 700 : 400, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.strains}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 600, color: row.hi ? SEED.greenDeep : SEED.body, fontFamily: "var(--font-dm-mono), monospace" }}>{row.pot}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.muted, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.pre}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 600, color: row.rct.includes("✓") ? SEED.greenDeep : SEED.muted, fontFamily: "var(--font-dm-mono), monospace" }}>{row.rct}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.hi ? SEED.green : SEED.ink, fontFamily: "var(--font-dm-mono), monospace" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: SEED.caption, marginTop: 12, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices verified May 2026.</p>
              </section>

              {/* § 13 Seed Family */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Seed Product Family</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="PDS-08® Pediatric Synbiotic" brand="Seed" category="Kids" score={8} priceUSD="$39.99 / 30 sachets" priceINR="N/A" tags={["9 Strains", "Ages 3–17", "Pediatric RCT"]} buyUrl="https://amzn.to/4ecAxQa" buyLabel="Buy on Amazon" reviewSlug="seed-pds-08" image="seed-pds-08.webp" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} featured={true} />
                  <ProductCard name="DS-01® Daily Synbiotic" brand="Seed" category="Adult Synbiotic" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["24 Strains", "Adults"]} buyUrl="https://www.amazon.com/Seed-DS-01-Daily-Synbiotic-Multi-Strain/dp/B0CMJR4XGR" buyLabel="Buy on Amazon" reviewSlug="seed-ds-01" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                  <ProductCard name="DS-01® 14 Day Gut Reset" brand="Seed" category="Gut Reset" score={8} priceUSD="~$29.99 / 14 days" priceINR="N/A" tags={["Post-Antibiotic", "14-day"]} buyUrl="https://www.amazon.com/SEED-DS-01%C2%AE-14-Day-Gut-Rescue/dp/B0CPTT5TWD" buyLabel="Buy on Amazon" reviewSlug="seed-14-day-gut-reset" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                </div>
              </section>

              {/* § 14 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["First kids synbiotic with a product-specific pediatric double-blind RCT", "9 pediatric-specific strains — not adult strains repurposed", "24.5B AFU measured by flow cytometry (AFU > CFU)", "5g dual-phase prebiotic fiber — optimal for developing microbiomes", "Powder sachet — no capsule swallowing, ages 3–17", "Genomically confirmed strains", "Shelf-stable — no refrigeration required", "$39.99/month is competitive for the clinical evidence provided"]}
                  cons={["$1.33/serving is 2–3× more expensive than basic kids' probiotics like Culturelle", "Per-strain AFU counts undisclosed", "Fermentable FOS/inulin prebiotic may cause initial bloating in sensitive children", "Full pediatric RCT details not peer-reviewed/publicly published as of May 2026", "Not suitable for infants under 3"]}
                />
              </section>

              {/* § 15 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Initial GI adjustment (first 1–2 weeks)", severity: "low", detail: "Gas, bloating, or loose stools in the first week are common as the child's microbiome adjusts. Start with half a sachet for 3–5 days. This is more pronounced than with DS-01 due to the fermentable FOS/inulin prebiotic." },
                    { label: "Not suitable for infants under 3", severity: "moderate", detail: "PDS-08 is formulated for ages 3–17. The prebiotic fiber amount (5g) and strain selection are not appropriate for infants or toddlers under 3. Use age-appropriate infant probiotics for children under 3." },
                    { label: "Immunocompromised children", severity: "moderate", detail: "Probiotic use in severely immunocompromised children (active chemotherapy, organ transplant recipients, severe immunodeficiency) requires medical supervision. Consult a paediatric specialist before use." },
                    { label: "Antibiotic spacing", severity: "low", detail: "Space PDS-08 by at least 2 hours from antibiotic doses. Continue PDS-08 throughout the course — it won't reduce antibiotic efficacy and will help maintain microbiome diversity." },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "14px 18px", backgroundColor: SEED.cardBg, border: `1px solid ${item.severity === "moderate" ? "rgba(139,115,85,0.3)" : SEED.border}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "moderate" ? "#8B7355" : "#4A7C59", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EBD9" }}>{item.severity} risk</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.label}</span>
                      </div>
                      <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 16 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="prebiotic fiber" />
              </section>

              {/* § 17 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: SEED.ink, marginBottom: 4 }}>
                      $39.99 <span style={{ fontSize: "0.55em", color: SEED.sepia, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 sachets</span>
                    </p>
                    <p style={{ fontSize: 13, color: SEED.muted, margin: 0 }}>Also at seed.com, Target, Sprouts. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/4ecAxQa" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 18 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderRadius: 8, border: `1px solid ${SEED.mutedBg}`, overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-pds08" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: SEED.green }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: SEED.muted, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-pds08 svg{display:none;}details[open] .faq-icon-pds08::after{content:'';display:block;width:10px;height:2px;background:${SEED.green};border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 19 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: SEED.darkBg, borderRadius: 16, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 16, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 — REV-2026-064</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: SEED.darkMuted }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>Recommended. The best-evidenced pediatric probiotic in the category.</p>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.8, marginBottom: 28 }}>
                    PDS-08's 8/10 rests on a genuine scientific achievement: a product-specific pediatric RCT. No other commercial kids' probiotic can make that claim. Add 9 genomically confirmed pediatric strains, 24.5B AFU, and 5g of appropriate prebiotic fiber, and you have the most evidence-backed children's synbiotic available. If you're investing in your child's gut health and want a product with real clinical backing — not just repurposed adult strains at low doses — PDS-08 is the defensible choice.
                  </p>
                  <a href="https://amzn.to/4ecAxQa" target="_blank" rel="nofollow noopener noreferrer"
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
                      { text: "Szajewska H, Kołodziej M. (2015). LGG for AAD prevention in children: meta-analysis. Alimentary Pharmacology & Therapeutics, 42(10):1149–1157.", url: "https://doi.org/10.1111/apt.13404" },
                      { text: "Hojsak I et al. (2010). LGG prevents upper respiratory and GI infections in children. Clinical Nutrition, 29(3):312–316.", url: "https://doi.org/10.1016/j.clnu.2009.09.010" },
                      { text: "Piirainen L et al. (2008). B. lactis BB-12 in pediatric gut health. British Journal of Nutrition, 99(2):391–397.", url: "https://doi.org/10.1017/S0007114507812312" },
                      { text: "Buddington RK et al. (1999). Dietary supplement of neosugar alters the fecal flora and decreases activities of some reductive enzymes in human subjects. American Journal of Clinical Nutrition, 63(5):709–716.", url: "https://doi.org/10.1093/ajcn/63.5.709" },
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
