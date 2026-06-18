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
import SeedStrainPanel from "@/components/ui/SeedStrainPanel";
import SeedResearchCard from "@/components/ui/SeedResearchCard";
import { computeComposite } from "@/lib/scoring";
import { SEED, seedScoreColor, SEED_PRODUCTS } from "@/lib/seed-tokens";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Seed DS-01 Daily Synbiotic Review (2026) — 8/10",
  description:
    "Seed DS-01 review: 24 confirmed strains, 53.6B AFU, dual-capsule ViaCap delivery, $49.99/month. The most rigorous commercial synbiotic. FSP 8/10.",
  alternates: { canonical: "/reviews/seed-ds-01" },
  openGraph: {
    title: "Seed DS-01 Daily Synbiotic Review (2026) — 8/10",
    description:
      "53.6 billion AFU across 24 genomically confirmed strains. Dual-capsule ViaCap delivery. Four targeted blends. Stability tested. The benchmark in commercial synbiotics.",
    url: "https://fitlabreviews.com/reviews/seed-ds-01",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.0,
      notes:
        "24 genomically confirmed probiotic strains across four targeted blends (digestive/gut immunity, cardiovascular, micronutrient synthesis, dermatological). 53.6B AFU total — measured by flow cytometry, counting all viable cells rather than just culturable colonies. 400mg MAPP prebiotic (punicalagins from pomegranate) is non-fermenting, meaning no gas/bloat. Dual ViaCap delivery separates prebiotic (outer) from probiotic strains (inner, acid-resistant) for targeted release.",
    },
    {
      pillar: "transparency",
      score: 7.5,
      notes:
        "All 24 strain names are published. AFU counts are disclosed per blend (38.7B, 4.21B, 7.23B, 3.34B). Prebiotic composition (punicalagins, 400mg) is named. Individual per-strain AFU counts are not published. Some strains appear in multiple blends without specifying which strain number belongs to which blend count. Better than the industry average but not complete.",
    },
    {
      pillar: "verification",
      score: 8.5,
      notes:
        "Genomic confirmation of all strains — each strain is sequenced and identity-verified. Stability tested at shelf conditions (no refrigeration required). Third-party tested for pesticides, herbicides, allergens, and contaminants. Seed publishes a reference library linking clinical evidence per strain. No NSF Certified for Sport, but the genomic + stability testing framework exceeds most probiotic brands.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "$49.99/month ($1.67/serving) is premium pricing for a probiotic. The scientific rigour — 24 genomically confirmed strains, AFU measurement, stability testing, non-fermenting prebiotic — justifies part of the cost differential vs. budget probiotics. Quarterly subscription at $135.35 drops to $1.50/serving. Compared to clinical-grade probiotics in healthcare settings, this is competitive.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "2 capsules/day, shelf-stable without refrigeration, vegan, gluten-free. Available via subscription with free shipping. Broad retail (Amazon, direct). The dual-capsule system is self-contained — no separate prebiotic needed. No known timing restrictions (though empty stomach or with a light meal is suggested).",
    },
  ],
  flags: [
    {
      type: "green",
      label: "24 genomically confirmed strains — identity verified by sequencing",
      detail:
        "Every strain in DS-01 is genomically sequenced and confirmed before use. This eliminates the common industry problem of strain misidentification — where a product claims L. rhamnosus GG but contains a related but different strain with different clinical properties.",
    },
    {
      type: "green",
      label: "AFU measurement — more accurate than CFU",
      detail:
        "DS-01 uses flow cytometry to count Active Fluorescent Units (AFU) rather than CFU (colony-forming units). CFU only counts bacteria that form visible colonies under culture conditions — missing viable but non-culturable cells. AFU measures all live, active cells. 53.6B AFU is a genuinely meaningful potency figure.",
    },
    {
      type: "green",
      label: "Non-fermenting MAPP prebiotic — no gas or bloat",
      detail:
        "Most probiotic supplements use FOS, inulin, or chicory root as prebiotics — these ferment rapidly in the upper GI, causing gas and bloating in many users. DS-01's MAPP prebiotic (punicalagins from pomegranate rind concentrate) is non-fermenting, modulating the microbiome via polyphenol pathways without fermentation-related discomfort.",
    },
    {
      type: "green",
      label: "Stability tested — no refrigeration required",
      detail:
        "Strains are tested for viability through the stated shelf life at ambient conditions. This is meaningfully different from many probiotic brands that ship refrigerated products that may have been stored at room temperature during transit.",
    },
    {
      type: "green",
      label: "Four targeted blends — systemic health beyond gut",
      detail:
        "DS-01 distributes strains across four evidence-based targets: digestive/gut immunity (primary, 38.7B AFU), cardiovascular (4.21B), micronutrient synthesis (7.23B), and dermatological (3.34B). This is a more differentiated formulation approach than generic 'digestive health' blends.",
    },
    {
      type: "red",
      label: "Per-strain AFU counts undisclosed",
      detail:
        "While blend-level AFU counts are published (e.g., 38.7B AFU for the digestive blend), individual strain contributions are not broken out. For consumers trying to match specific strains to clinical evidence, this creates a verification gap.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "$49.99/month — 3–10× more expensive than most probiotics",
      detail:
        "The scientific quality is real, but the pricing creates an access barrier. Effective probiotics with published clinical evidence exist at $15–25/month. DS-01's premium requires that the formulation sophistication translates to meaningfully better outcomes — plausible but not yet demonstrated in a head-to-head RCT against simpler comparators.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"53.6 billion AFU of genomically confirmed probiotic strains"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "AFU methodology via flow cytometry is scientifically established and more accurate than CFU. Genomic confirmation is a stated production step. Potency claim is backed by stability testing through shelf life. This claim is verifiable and well-supported.",
    },
    {
      claim: '"Digestive health, gut immunity, dermatological health, cardiovascular health, micronutrient synthesis"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "The named health targets each have strain-specific evidence. For example, L. plantarum 299v for GI transit (Nobaek et al., 2000); B. longum BB536 for immune modulation (Nagata et al., 2011). However, these studies used specific strains at specific doses — DS-01 includes these strains in multi-strain blends where individual contributions cannot be isolated.",
    },
    {
      claim: '"Clinically and scientifically studied strains"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Seed publishes a Reference Library linking each strain to supporting literature. The claim is accurate — these are individually studied strains, not generic probiotic mixes. The appropriate caveat is that most individual strain studies don't use the exact multi-strain combination in DS-01.",
    },
    {
      claim: '"Shelf-stable formulation"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Stability testing at ambient conditions is a production standard Seed explicitly follows. The claim is verifiable and represents a genuine differentiation from many probiotic brands that lose viability during unrefrigerated transit.",
    },
    {
      claim: '"Dual-capsule system for targeted delivery"',
      verdict: "supported",
      evidence: "moderate",
      notes:
        "The ViaCap architecture is real and patented. Outer capsule releases prebiotic in the upper GI; inner acid-resistant capsule passes to the lower GI/colon for probiotic release. The targeted delivery mechanism is mechanistically sound. A product-specific RCT demonstrating superior outcomes vs. standard capsules would strengthen this claim.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.67,
    primaryActiveGrams: 0.4,
    pricePerGramActive: 4.18,
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
  { id: "what-is", label: "What Is DS-01?" },
  { id: "viacap", label: "ViaCap Architecture" },
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
      name: "What is the difference between DS-01 and a regular probiotic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DS-01 differs from most commercial probiotics in four ways: (1) Genomic confirmation — every strain is DNA-sequenced and identity-verified, eliminating misidentification; (2) AFU measurement — Active Fluorescent Units by flow cytometry count all viable bacteria, vs. CFU which only counts culturable colonies; (3) Non-fermenting prebiotic — MAPP prebiotic from pomegranate rind doesn't ferment in the upper GI, avoiding the gas/bloat common with inulin-based prebiotics; (4) ViaCap dual-capsule delivery — separates prebiotic from probiotic, delivering each to the optimal GI location.",
      },
    },
    {
      "@type": "Question",
      name: "What does 53.6 billion AFU mean and is it enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AFU (Active Fluorescent Units) measures all viable, active bacteria using flow cytometry — a more accurate count than CFU (colony-forming units), which only counts bacteria that form visible colonies under lab conditions. 53.6B AFU is a clinically meaningful potency. Most research showing probiotic benefits uses 1–50 billion CFU/day; 53.6B AFU in a multi-strain product is an appropriate dose. The key is whether these are the right strains for your health goal, which DS-01's four-blend structure addresses.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to refrigerate DS-01?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DS-01 is shelf-stable at ambient temperature. Seed stability-tests each batch to confirm strains remain viable through the stated shelf life without refrigeration. This is a meaningful advantage over probiotics that ship cold but may have been stored at room temperature during transit — which can significantly reduce viable counts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does DS-01 take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For digestive symptoms (bloating, irregularity), most clinical probiotic studies show effects within 2–4 weeks of consistent daily use. Seed's own published trials follow participants for 4–8 weeks. Some users notice changes within 1–2 weeks; other benefits (micronutrient synthesis support, cardiovascular strain effects) require longer-term consistent use. There is no instant effect.",
      },
    },
    {
      "@type": "Question",
      name: "Is DS-01 third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DS-01 is third-party tested for pesticides, herbicides, allergens, and contaminants. Additionally, each strain undergoes genomic confirmation (DNA sequencing) and stability testing. Seed publishes a Reference Library of clinical evidence for each strain. The testing framework is more thorough than most commercial probiotics.",
      },
    },
    {
      "@type": "Question",
      name: "Why is DS-01 more expensive than other probiotics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At $49.99/month, DS-01 is 3–10× more expensive than budget probiotics. The premium reflects: genomic sequencing and verification of 24 strains, AFU methodology vs. simpler CFU, stability testing, patented ViaCap dual-capsule manufacturing, and non-fermenting MAPP prebiotic (significantly more expensive than standard inulin). Whether these translate to meaningfully better clinical outcomes compared to a well-chosen $25/month probiotic has not been directly studied.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take DS-01 with antibiotics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take DS-01 at least 2 hours after an antibiotic dose — antibiotics will kill most probiotic strains if co-administered. Continue DS-01 throughout the antibiotic course and for at least 2 weeks after completing the course. The 14 Day Gut Reset (same DS-01 formulation, 28 capsule format) is specifically positioned for post-antibiotic recovery.",
      },
    },
    {
      "@type": "Question",
      name: "What does the prebiotic in DS-01 do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DS-01 uses 400mg of MAPP (Microbiota-Accessible Polyphenolic Precursors) — punicalagins concentrated from American pomegranate rind. Unlike fermentable prebiotics (inulin, FOS, chicory root), MAPP is non-fermenting: it doesn't rapidly ferment in the upper GI, avoiding the gas and bloating many users experience with standard prebiotics. Instead, it modulates the microbiome via polyphenol transformation pathways and is delivered via the outer ViaCap capsule to the appropriate GI location.",
      },
    },
    {
      "@type": "Question",
      name: "Is DS-01 safe for people with IBS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DS-01 is marketed as suitable for most adults including those with IBS, and the non-fermenting MAPP prebiotic avoids the trigger that causes fermentable prebiotics to worsen IBS symptoms. Several strains in DS-01 (e.g., L. plantarum CJLP133, L. rhamnosus) have IBS-specific trial data. However, individual responses to specific strains vary, and DS-01 has not conducted a product-specific IBS RCT. Consult a gastroenterologist if you have IBS.",
      },
    },
    {
      "@type": "Question",
      name: "How does DS-01 compare to the 14 Day Gut Reset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 14 Day Gut Reset uses the same DS-01 formulation at the same dose — 2 capsules/day. The difference is format and intent: DS-01 is a 30-day subscription for daily long-term use; the 14 Day Gut Reset is a 28-capsule (14-day) pack positioned for acute recovery (post-antibiotics, post-travel, post-illness). If you want to start DS-01 and your gut is disrupted, the 14-day format lets you try it without committing to a full month subscription.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-ds-01#review",
  name: "Seed DS-01 Daily Synbiotic — Fitlabreviews FSP Review",
  reviewBody:
    "Seed DS-01 is the most scientifically rigorous commercial probiotic available. 24 genomically confirmed strains, 53.6B AFU by flow cytometry, non-fermenting MAPP prebiotic, and ViaCap dual-capsule delivery. The benchmark against which all commercial synbiotics should be measured. FSP v2.1 editorial: 8/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed DS-01 Daily Synbiotic",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Probiotic / Synbiotic",
    description:
      "24-strain probiotic + MAPP prebiotic in a dual-capsule ViaCap system. 53.6B AFU. Genomically confirmed. Shelf-stable.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "49.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4vm1F57",
    },
  },
};

const relatedReviews = [
  {
    slug: "seed-14-day-gut-reset",
    title: "Seed 14 Day Gut Reset",
    brand: "Seed",
    category: "Gut Reset",
    rating: 8 as ReviewRating,
    verdict: "Same DS-01 formulation in a 14-day intensive format. Best choice post-antibiotics or after GI disruption.",
    publishedAt: "2026-05-31",
    figNumber: "066",
  },
  {
    slug: "seed-pds-08",
    title: "Seed PDS-08 Pediatric Synbiotic",
    brand: "Seed",
    category: "Kids Probiotic",
    rating: 8 as ReviewRating,
    verdict: "9 pediatric-specific strains, 24.5B AFU, 5g prebiotic. First kids synbiotic with a double-blind RCT.",
    publishedAt: "2026-05-31",
    figNumber: "064",
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

export default function SeedDS01Review() {
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
                <Link href={c.href} style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: SEED.border, fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: SEED.border, fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: SEED.muted, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>DS-01 Daily Synbiotic</span>
          </div>
        </div>

        {/* Feature Banner — Seed dark with dot grid */}
        <div style={{ width: "100%", background: SEED.bannerBg, position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Seed brand strip */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ padding: "3px 8px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 4, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: SEED.green }}>Seed</span>
                  <span style={{ color: SEED.darkBorder, fontSize: 10 }}>·</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>REV-2026-063</span>
                  <span style={{ color: SEED.darkBorder, fontSize: 10 }}>·</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>Synbiotic · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: SEED.darkText, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed DS-01®<br />
                  <em style={{ fontWeight: 400, color: SEED.darkMuted, fontSize: "0.65em" }}>Daily Synbiotic</em>
                </h1>
                <p style={{ fontSize: 15, color: SEED.darkMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  24 genomically confirmed strains. 53.6 billion AFU. Non-fermenting MAPP prebiotic. ViaCap dual-capsule delivery. The most scientifically rigorous commercial synbiotic available.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4vm1F57" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: `1px solid ${SEED.darkBorder}`, color: SEED.darkCaption, fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/seed-ds-01.webp" alt="Seed DS-01 Daily Synbiotic" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(61,139,55,0.4))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
            {/* Star row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7,8].map(s => <Star key={s} size={13} fill={SEED.green} color={SEED.green} />)}
                {[9,10].map(s => <Star key={s} size={13} fill="none" color={`${SEED.green}55`} />)}
              </div>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: SEED.darkCaption, letterSpacing: "0.12em" }}>8 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.pageBg})` }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Seed" },
            { label: "Category", value: "Daily Synbiotic" },
            { label: "Strains", value: "24 (genomically confirmed)" },
            { label: "Potency", value: "53.6B AFU" },
            { label: "Serving", value: "2 capsules / day" },
            { label: "Price", value: "$49.99 / month" },
            { label: "Per Serving", value: "$1.67" },
            { label: "Published", value: "May 31, 2026" },
          ]} />
        </div>

        {/* Author box */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: SEED.darkBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 700, color: SEED.green }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-hanken), sans-serif", marginBottom: 2 }}>
                <Link href="/authors" style={{ color: SEED.ink, textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: SEED.caption, fontSize: 12 }}> · Independent Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: SEED.muted }}>Strain-level literature analysis · FSP v2.1 scoring · Cross-referenced with Seed Reference Library</p>
            </div>
            <span style={{ padding: "3px 8px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 4, fontSize: 10, color: SEED.muted, fontFamily: "var(--font-jetbrains), monospace" }}>Editorial Review</span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: SEED.sepia, flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-hanken), sans-serif" }}>
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
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: SEED.darkBg, borderRadius: 14, marginBottom: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 14, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-063</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>
                        The benchmark commercial synbiotic. Genomic rigor, AFU methodology, and non-fermenting prebiotic set it apart from the field.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: SEED.darkMuted, letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.75 }}>
                    DS-01 earns an 8/10 by doing what most probiotics don't: applying pharmaceutical-grade identity verification to each of its 24 strains, measuring potency with the more accurate AFU methodology, and solving the prebiotic gas/bloat problem with a non-fermenting polyphenol instead of fermentable fibres. Individual per-strain AFU counts remain unpublished (a transparency gap) and $49.99/month is a premium that not everyone can sustain. But for consumers who want the closest thing to a clinically validated daily synbiotic, DS-01 is the honest choice.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => {
                    const labels: Record<string, string> = { formula: "Formula", transparency: "Transparency", verification: "Verification", value: "Value", practical: "Practical" };
                    const weights: Record<string, string> = { formula: "35%", transparency: "25%", verification: "20%", value: "12%", practical: "8%" };
                    return (
                      <div key={p.pillar} style={{ padding: "16px 14px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10, textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: seedScoreColor(p.score), lineHeight: 1, marginBottom: 4 }}>{p.score.toFixed(1)}</div>
                        <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>{labels[p.pillar]}</div>
                        <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: SEED.sepia }}>{weights[p.pillar]} weight</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${SEED.border}`, backgroundColor: SEED.cardBg }}>
                  <div style={{ background: SEED.bannerBg, padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 20, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.green }}>
                      <ShieldCheck size={10} /> Genomically Confirmed
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/seed-ds-01.webp" alt="Seed DS-01" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(61,139,55,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: `linear-gradient(transparent, ${SEED.cardBg})` }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>Seed</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: SEED.ink, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>DS-01® Daily Synbiotic</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: `1px solid ${SEED.mutedBg}`, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "53.6B", label: "AFU" }, { val: "24", label: "Strains" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: SEED.green, lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: SEED.caption }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.caption, marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink }}>$49.99</p>
                      </div>
                      <a href="https://amzn.to/4vm1F57" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is DS-01 */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Seed DS-01®?</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  DS-01® Daily Synbiotic is Seed's flagship product and the formulation that built the brand's scientific reputation. It combines 24 probiotic strains with a novel MAPP prebiotic in a ViaCap dual-capsule delivery system — a genuinely differentiated architecture compared to standard probiotic capsules.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  The "synbiotic" designation means it contains both probiotics and a prebiotic in one product. Unlike most synbiotics that add fermentable fibres (inulin, FOS) which can worsen bloating in sensitive users, DS-01 uses MAPP (Microbiota-Accessible Polyphenolic Precursors) — 400mg of punicalagins from pomegranate rind concentrate. MAPP is non-fermenting: it modulates the microbiome via polyphenol transformation rather than fermentation.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75 }}>
                  Seed is a health science company co-founded by Raja Dhir and Ara Katz. The brand's approach to DS-01 is notably rigorous: each of the 24 strains is genomically sequenced, potency is measured by AFU (Active Fluorescent Units) rather than CFU, strains are stability-tested at ambient temperature, and a public Reference Library links each strain to supporting clinical literature.
                </p>
              </section>

              {/* § 3 ViaCap Architecture */}
              <section id="viacap" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>ViaCap® Delivery Architecture</h2>
                <p style={{ fontSize: 14, color: SEED.muted, marginBottom: 20, fontFamily: "var(--font-hanken), sans-serif" }}>How DS-01 delivers prebiotic and probiotic to distinct GI locations.</p>
                <SeedViaCap
                  outerLabel="Outer Capsule → Upper GI"
                  outerIngredients={[
                    "MAPP Prebiotic 400mg (punicalagins from pomegranate rind concentrate)",
                    "Released in upper GI tract to condition microbiome environment",
                    "Non-fermenting — no gas or bloat",
                  ]}
                  innerLabel="Inner Capsule (Acid-Resistant) → Lower GI / Colon"
                  innerIngredients={[
                    "24 probiotic strains (53.6B AFU total)",
                    "Chlorophyllin-coloured outer shell (naturally pigmented)",
                    "Acid-resistant: survives gastric passage, releases in colon",
                  ]}
                  note="ViaCap® is a patented dual-capsule system. The two-capsule serving (2 per day) contains both layers in each unit. Do not open or crush — the acid-resistant inner capsule depends on its shell remaining intact."
                />
              </section>

              {/* § 4 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-063" />
              </section>

              {/* § 5 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 6 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-hanken), sans-serif" }}>Serving size: 2 capsules · Servings per container: 30 · 60 capsules total</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 520, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "38%" }}>Component</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "22%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "20%" }}>Capsule</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "20%" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "MAPP Prebiotic (Pomegranate punicalagins)", amount: "400 mg", cap: "Outer", ok: true },
                        { name: "Digestive Health Blend (15 strains)", amount: "224 mg / 38.7B AFU", cap: "Inner", ok: true },
                        { name: "Micronutrient Synthesis Blend (2 strains)", amount: "36 mg / 7.23B AFU", cap: "Inner", ok: true },
                        { name: "Cardiovascular Health Blend (2 strains)", amount: "13 mg / 4.21B AFU", cap: "Inner", ok: true },
                        { name: "Dermatological Health Blend (5 strains)", amount: "36 mg / 3.34B AFU", cap: "Inner", ok: true },
                        { name: "Total Probiotic Potency", amount: "53.6B AFU", cap: "Inner", ok: true },
                        { name: "Per-strain individual AFU", amount: "Undisclosed", cap: "Inner", ok: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: SEED.body, fontFamily: "var(--font-hanken), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 12, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", color: row.ok ? SEED.greenDeep : SEED.scoreLow }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", fontSize: 11, textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", color: SEED.caption }}>{row.cap}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.ok ? SEED.certPass : SEED.certFail, border: `1px solid ${row.ok ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 20, fontSize: 11, color: row.ok ? SEED.certPassText : SEED.certFailText, fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.ok ? (
                                <span style={{display:'inline-flex',alignItems:'center',gap:4}}>
                                  Disclosed
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                              ) : "Undisclosed"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* § 7 Strain Panel */}
              <section id="strains" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Strain Profile</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-hanken), sans-serif" }}>All 24 strains are genomically confirmed. AFU measured by flow cytometry.</p>
                <SeedStrainPanel
                  totalAFU="53.6B AFU"
                  measurementNote="AFU (Active Fluorescent Units) by flow cytometry counts all viable, active bacteria — more accurate than CFU, which only counts culturable colonies. Individual per-strain AFU counts are not publicly disclosed."
                  blends={[
                    {
                      name: "Digestive Health & Gut Immunity",
                      totalAFU: "38.7B AFU",
                      color: SEED.green,
                      strains: [
                        "B. longum SD-BB536-JP", "B. breve SD-BR3-IT", "L. plantarum SD-LP1-IT",
                        "L. rhamnosus SD-LR6-IT", "L. rhamnosus HRVD113-US", "B. infantis SD-M63-JP",
                        "B. lactis SD-BS5-IT", "B. lactis HRVD524-US", "B. lactis SD-150-BE",
                        "L. crispatus SD-LCR01-IT", "L. casei SHIROTA", "B. breve HRVD521-US",
                        "B. longum HRVD90b-US", "Lb. fermentum SD-LF8-IT", "L. reuteri RD830-FR",
                      ],
                    },
                    {
                      name: "Micronutrient Synthesis",
                      totalAFU: "7.23B AFU",
                      color: "#5EAD58",
                      strains: ["B. adolescentis SD-BA5-IT", "L. reuteri SD-LRE2-IT"],
                    },
                    {
                      name: "Cardiovascular Health",
                      totalAFU: "4.21B AFU",
                      color: "#2A8A8A",
                      strains: ["L. plantarum SD-LPLDL-UK", "B. lactis SD-CECT8145-SP"],
                    },
                    {
                      name: "Dermatological Health",
                      totalAFU: "3.34B AFU",
                      color: "#3A6FA8",
                      strains: [
                        "L. salivarius SD-LS1-IT", "B. lactis SD-CECT8145-SP",
                        "B. longum SD-CECT7347-SP", "L. casei SD-CECT9104-SP", "B. breve SD-BR3-IT",
                      ],
                    },
                  ]}
                />
              </section>

              {/* § 8 Ingredient Analysis */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Analysis</h2>
                {[
                  {
                    name: "MAPP Prebiotic — 400 mg (Non-fermenting)",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "A genuinely better prebiotic — no bloat mechanism",
                    body: "Standard synbiotic prebiotics (inulin, FOS, beta-glucan) rapidly ferment in the upper GI, producing hydrogen and methane gas — a common cause of bloating and discomfort. MAPP (Microbiota-Accessible Polyphenolic Precursors) — punicalagins from pomegranate rind — modulates the microbiome through polyphenol metabolism rather than fermentation. Tomás-Barberán et al. (2014) demonstrated punicalagins are transformed by gut bacteria into urolithins, which have prebiotic and anti-inflammatory effects without fermentation byproducts. This is a meaningful formulation advance.",
                  },
                  {
                    name: "24-Strain Probiotic Blend — 53.6B AFU",
                    evidence: "strong" as EvidenceLevel,
                    verdict: "The most strain-diverse, evidence-linked commercial probiotic formula",
                    body: "No commercial probiotic has 24 genomically confirmed, individually evidenced strains at 53.6B AFU. The blend isn't arbitrary — each strain is selected for its specific target area (digestive, cardiovascular, micronutrient synthesis, dermatological). Key strains with RCT evidence: L. rhamnosus GG (HRVD113-US equivalent) for digestive health (Szajewska & Kołodziej, 2015 meta-analysis); B. longum BB536 for immune modulation (Nagata et al., 2011 RCT); L. plantarum 299v-equivalent for IBS (Nobaek et al., 2000 RCT); B. lactis BB-12 equivalents for gut immunity.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 1 ? 16 : 0, padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: SEED.ink, margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 9 Clinical Research */}
              <section id="research" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Clinical Research</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-hanken), sans-serif" }}>Key studies supporting DS-01 ingredient strains. Seed publishes a full Reference Library linking each strain to supporting literature.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <SeedResearchCard
                    title="Probiotic supplementation with L. rhamnosus and B. lactis: systematic review of digestive outcomes"
                    authors="Szajewska H & Kołodziej M"
                    year={2015}
                    journal="Alimentary Pharmacology & Therapeutics"
                    finding="Meta-analysis of 12 RCTs found L. rhamnosus GG significantly reduced antibiotic-associated diarrhoea incidence (RR 0.48) and duration. Equivalent strain to DS-01's L. rhamnosus HRVD113-US."
                    trialType="Meta-analysis"
                    doi="https://doi.org/10.1111/apt.13404"
                  />
                  <SeedResearchCard
                    title="Effects of Bifidobacterium longum BB536 intake on common cold symptoms in healthy adults"
                    authors="Nagata S et al."
                    year={2011}
                    journal="Journal of Infection and Chemotherapy"
                    finding="Double-blind RCT (N=73): BB536 supplementation significantly reduced duration and severity of upper respiratory tract infections vs. placebo. Equivalent strain family to DS-01's B. longum SD-BB536-JP."
                    trialType="RCT"
                    doi="https://doi.org/10.1007/s10156-010-0207-0"
                  />
                  <SeedResearchCard
                    title="A randomized double-blind placebo-controlled trial of a probiotic in irritable bowel syndrome"
                    authors="Nobaek S et al."
                    year={2000}
                    journal="American Journal of Gastroenterology"
                    finding="L. plantarum 299v (equivalent family to DS-01's L. plantarum SD-LP1-IT) significantly reduced flatulence and improved overall GI symptoms in IBS patients at 12 weeks vs. placebo."
                    trialType="RCT"
                    doi="https://doi.org/10.1111/j.1572-0241.2000.02014.x"
                  />
                </div>
              </section>

              {/* § 10 Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Genomic confirmation (all 24 strains)", status: true },
                    { label: "Stability tested (shelf-stable)", status: true },
                    { label: "Pesticide & herbicide tested", status: true },
                    { label: "Allergen tested", status: true },
                    { label: "Contaminant tested", status: true },
                    { label: "Vegan / Shelf-stable", status: true },
                    { label: "NSF / Informed Sport", status: false },
                    { label: "Per-strain potency published", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: item.status ? SEED.certPass : SEED.certFail, border: `1px solid ${item.status ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", color: item.status ? SEED.certPassText : SEED.certFailText }}>
                        {item.status
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={SEED.certPassText} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={SEED.certFailText} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        }
                      </span>
                      <span style={{ fontSize: 12, color: SEED.body, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 11 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 12 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>Protocol</p>
                  <p style={{ fontSize: 15, color: SEED.ink, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-hanken), sans-serif" }}>Take 2 capsules daily. Start with 1 capsule for the first 3 days to allow your microbiome to adjust.</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {["Take on an empty stomach or with a light meal. Avoid taking immediately after a heavy meal.", "Take at the same time each day — consistency matters more for probiotic colonisation than exact timing.", "Space from antibiotics by at least 2 hours.", "Do not open, crush, or chew — the acid-resistant inner capsule depends on its shell.", "Consistent daily use for 4+ weeks for full microbiome benefit."].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, fontFamily: "var(--font-hanken), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 13 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 620, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        {["Product", "Strains", "Potency", "Prebiotic", "Verification", "$/Month"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Seed DS-01", strains: "24 (genomic)", potency: "53.6B AFU", pre: "MAPP 400mg", cert: "Genomic + stability", price: "$49.99", hi: true },
                        { product: "Ritual Synbiotic+", strains: "2", potency: "11B CFU", pre: "FOS 1g", cert: "Third-party tested", price: "$39.99", hi: false },
                        { product: "Garden of Life RAW", strains: "34", potency: "100B CFU", pre: "Organic prebiotics", cert: "NSF Certified", price: "$49.99", hi: false },
                        { product: "Culturelle Daily", strains: "1 (LGG)", potency: "10B CFU", pre: "Inulin", cert: "USP Verified", price: "$25.99", hi: false },
                        { product: "Align Probiotic", strains: "1 (BB-12)", potency: "1B CFU", pre: "None", cert: "None listed", price: "$29.99", hi: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.hi ? "rgba(61,139,55,0.06)" : i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.hi ? 700 : 400, color: SEED.ink, fontFamily: "var(--font-hanken), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.body, fontFamily: "var(--font-hanken), sans-serif" }}>{row.strains}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 600, color: row.hi ? SEED.greenDeep : SEED.body, fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" }}>{row.potency}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.muted, fontFamily: "var(--font-hanken), sans-serif" }}>{row.pre}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.muted, fontFamily: "var(--font-hanken), sans-serif" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.hi ? SEED.green : SEED.ink, fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: SEED.caption, marginTop: 12, fontFamily: "var(--font-hanken), sans-serif" }}>Prices verified May 2026. CFU vs AFU: AFU counts all viable bacteria; CFU only counts culturable colonies — direct comparison has limitations.</p>
              </section>

              {/* § 14 Seed Family */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Seed Product Family</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-hanken), sans-serif" }}>All Seed products use ViaCap dual-capsule Co-Biotic delivery architecture.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="DS-01® Daily Synbiotic" brand="Seed" category="Synbiotic" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["24 Strains", "53.6B AFU", "MAPP Prebiotic"]} buyUrl="https://amzn.to/4vm1F57" buyLabel="Buy on Amazon" reviewSlug="seed-ds-01" image="seed-ds-01.webp" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} featured={true} />
                  <ProductCard name="PDS-08® Pediatric Synbiotic" brand="Seed" category="Kids Synbiotic" score={8} priceUSD="$39.99 / 30 sachets" priceINR="N/A" tags={["9 Strains", "Ages 3–17"]} buyUrl="https://www.amazon.com/Seed-PDS-08%C2%AE-Pediatric-Daily-Synbiotic/dp/B0CPTRHQP7" buyLabel="Buy on Amazon" reviewSlug="seed-pds-08" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                  <ProductCard name="DS-01® 14 Day Gut Reset" brand="Seed" category="Gut Reset" score={8} priceUSD="~$29.99 / 14 servings" priceINR="N/A" tags={["Same DS-01 Formula", "28 Capsules"]} buyUrl="https://www.amazon.com/SEED-DS-01%C2%AE-14-Day-Gut-Rescue/dp/B0CPTT5TWD" buyLabel="Buy on Amazon" reviewSlug="seed-14-day-gut-reset" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                </div>
              </section>

              {/* § 15 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["24 genomically confirmed strains — identity verified, not assumed", "AFU measurement by flow cytometry — more accurate than CFU", "Non-fermenting MAPP prebiotic — avoids the bloat caused by fermentable fibres", "ViaCap dual-capsule delivers prebiotic and probiotic to distinct GI locations", "Shelf-stable without refrigeration — viability confirmed through shelf life", "Third-party tested for pesticides, herbicides, allergens, and contaminants", "Four targeted blends: digestive, cardiovascular, micronutrient synthesis, dermatological", "Public Reference Library linking each strain to supporting clinical evidence"]}
                  cons={["$49.99/month — among the most expensive commercial probiotics", "Per-strain AFU counts undisclosed", "No head-to-head RCT demonstrating superiority over lower-priced alternatives", "No Informed Sport or NSF Certified for Sport (limits use for tested athletes)", "Subscription model — no one-time purchase available through main channel"]}
                />
              </section>

              {/* § 16 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 20 }}>
                  DS-01 has an excellent safety profile in healthy adults. Minor initial GI adjustment is common and expected — starting at 1 capsule/day for the first 3 days reduces this.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Initial GI adjustment (first 3–7 days)", severity: "low", detail: "Increased gas, loose stools, or mild bloating for the first week as your microbiome adjusts to 24 new strains. Start with 1 capsule/day for 3 days before moving to the full 2-capsule dose." },
                    { label: "Severely immunocompromised individuals", severity: "moderate", detail: "Probiotic supplementation is generally not recommended for individuals with serious immune deficiencies (e.g., post-organ transplant, active chemotherapy, severe neutropenia) without medical supervision. Live bacteria can cause infection in severely compromised immune states." },
                    { label: "Antibiotic co-administration", severity: "low", detail: "Antibiotics will kill most probiotic strains. Space by at least 2 hours. DS-01 can and should be continued throughout an antibiotic course — it won't make the antibiotics less effective." },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${item.severity === "moderate" ? "rgba(139,115,85,0.3)" : SEED.border}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "moderate" ? "#8B7355" : "#4A7C59", borderRadius: 4, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF" }}>{item.severity} risk</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-hanken), sans-serif" }}>{item.label}</span>
                      </div>
                      <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 17 Price & Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="MAPP prebiotic (pomegranate punicalagins)" />
                <div style={{ marginTop: 20, padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>
                    Subscription at $135.35/quarter reduces to $1.50/serving. Amazon pricing may vary. Prices verified May 2026.
                  </p>
                </div>
              </section>

              {/* § 18 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: SEED.ink, marginBottom: 4 }}>
                      $49.99 <span style={{ fontSize: "0.55em", color: SEED.sepia, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 400 }}>/ 30 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: SEED.muted, margin: 0 }}>Also at seed.com, Target, Sprouts. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/4vm1F57" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 19 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderRadius: 8, border: `1px solid ${SEED.mutedBg}`, overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: SEED.ink, fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-seed-ds01" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: SEED.green }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: SEED.muted, lineHeight: 1.7, fontFamily: "var(--font-hanken), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-seed-ds01 svg{display:none;}details[open] .faq-icon-seed-ds01::after{content:'';display:block;width:10px;height:2px;background:${SEED.green};border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 20 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: SEED.darkBg, borderRadius: 16, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 16, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 — REV-2026-063</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, color: SEED.darkMuted }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>Recommended. The most scientifically rigorous commercial synbiotic.</p>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.8, marginBottom: 28 }}>
                    DS-01 earns its 8/10 honestly. Genomic confirmation, AFU measurement, non-fermenting prebiotic, and ViaCap delivery represent genuine formulation advances that most probiotic brands don't make. The price is real and the per-strain potency disclosure gap is a legitimate criticism. But if you're investing in a daily synbiotic and want the most evidence-linked formula available, DS-01 is the defensible choice. Publish the per-strain AFU and this becomes a 9.
                  </p>
                  <a href="https://amzn.to/4vm1F57" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>
                    Buy on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Szajewska H, Kołodziej M. (2015). Systematic review with meta-analysis: L. rhamnosus GG in the prevention of antibiotic-associated diarrhoea in children. Alimentary Pharmacology & Therapeutics, 42(10):1149–1157.", url: "https://doi.org/10.1111/apt.13404" },
                      { text: "Nagata S et al. (2011). Effects of Bifidobacterium longum BB536 on common cold symptoms in healthy adults. Journal of Infection and Chemotherapy, 17(6):814–820.", url: "https://doi.org/10.1007/s10156-010-0207-0" },
                      { text: "Nobaek S et al. (2000). Alteration of intestinal microflora associated with reduction of abdominal bloating in IBS. American Journal of Gastroenterology, 95(5):1231–1238.", url: "https://doi.org/10.1111/j.1572-0241.2000.02014.x" },
                      { text: "Tomás-Barberán FA et al. (2014). Ellagic acid metabolism by human gut microbiota: a comparative analysis of in vitro and in vivo studies. Journal of Agricultural and Food Chemistry, 62(23):5441–5445.", url: "https://doi.org/10.1021/jf4028454" },
                      { text: "Salminen S et al. (2021). The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of postbiotics. Nature Reviews Gastroenterology & Hepatology, 18(9):649–667.", url: "https://doi.org/10.1038/s41575-021-00440-6" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: SEED.muted, lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: SEED.green, textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Seed Reviews */}
        <section style={{ borderTop: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.caption, marginBottom: 6 }}>Seed Product Reviews</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, letterSpacing: "-0.02em" }}>More from Seed</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: SEED.green, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
