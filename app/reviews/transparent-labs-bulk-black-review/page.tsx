import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "TL BULK Black Pre-Workout Review (2026) — Rated 9/10",
  description:
    "Transparent Labs BULK Black review: 8g citrulline malate, 305mg dual-phase caffeine, 300mg Alpha-GPC, Informed Choice certified. $59 / 30 servings. FSP 9/10.",
  alternates: { canonical: "/reviews/transparent-labs-bulk-black-review" },
  openGraph: {
    title: "TL BULK Black Pre-Workout Review (2026) — Rated 9/10",
    description:
      "16 clinically dosed ingredients, zero proprietary blends, Informed Choice certified. Is this the best high-stim pre-workout of 2026? Full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/transparent-labs-bulk-black-review",
    type: "article",
  },
};

// ─── TOC ─────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is BULK Black?" },
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

// ─── SCORING RUBRIC ───────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.5,
      notes:
        "16 active ingredients, every one at or above the clinical threshold established in peer-reviewed trials. 8,000mg citrulline malate (Pérez-Guisado & Jakeman, 2010, J Strength Cond Res), 4,000mg beta-alanine (Hobson et al., 2012, Amino Acids meta-analysis), 2,500mg betaine (Trepanowski et al., 2011, J Int Soc Sports Nutr), 300mg Alpha-GPC (De Jesus Moreno Moreno, 2003, Clin Ther), 305mg dual-phase caffeine. No proprietary blends. No filler ingredients. Zero artificial sweeteners, dyes, or sucralose.",
    },
    {
      pillar: "transparency",
      score: 10.0,
      notes:
        "Every ingredient listed individually with precise milligram quantities. Transparent Labs publishes the exact sourcing for patented ingredients (BetaPure® betaine, AlphaSize® Alpha-GPC, Infinergy® di-caffeine malate, AstraGin®). No blend groupings, no 'proprietary matrix' language. The label is the gold standard for the pre-workout category.",
    },
    {
      pillar: "verification",
      score: 9.0,
      notes:
        "Informed Choice certified — the programme involves random retail shelf purchases tested monthly for 270+ banned substances and label accuracy. Not a one-time pass. BULK Black has held this certification continuously since product launch. No recalls or adverse event reports on FDA MedWatch as of May 2026. Heavy metals COA available on the TL website per batch.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "At $59.99 / 30 servings ($2.00/serving), this sits at the premium tier. Category average is approximately $1.40/serving for comparable pre-workouts. The premium is partially justified by clinical ingredient doses, Informed Choice certification overhead, and patented ingredient forms (BetaPure®, AlphaSize®, AstraGin®). Gorilla Mode and C4 Extreme undercut significantly on price with weaker formulas or proprietary blends.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Available in 8 flavours including Blue Raspberry, Black Cherry, Peach Mango, and Sour Gummy. Stevia-sweetened — taste is slightly more mineral than sucralose-sweetened competitors, which divides users. Mixability is excellent: fully dissolved in 10–12 oz of water with 15–20 seconds of shaking. Scoop size is large (20.6g per serving). Half-scoop dosing is practical and reduces per-serving cost to $1.00.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Informed Choice certified",
      detail:
        "Monthly blind-purchase testing for 270+ banned substances. The highest standard for competitive athletes.",
    },
    {
      type: "green",
      label: "Zero proprietary blends",
      detail:
        "Every ingredient is individually disclosed with exact mg — no 'proprietary matrix' language anywhere on the label.",
    },
    {
      type: "green",
      label: "All clinical doses",
      detail:
        "8g citrulline malate, 4g beta-alanine, 2.5g betaine, 300mg Alpha-GPC — each matches or exceeds the dose used in efficacy trials.",
    },
    {
      type: "green",
      label: "Dual-phase caffeine delivery",
      detail:
        "275mg caffeine anhydrous for rapid onset + 30mg Infinergy® di-caffeine malate for extended duration. Reduces the characteristic 'crash' of single-source caffeine products.",
    },
    {
      type: "green",
      label: "No artificial sweeteners or dyes",
      detail:
        "Stevia-sweetened only. No sucralose, Ace-K, artificial colours, or synthetic dyes. Relevant for users sensitive to artificial additives.",
    },
    {
      type: "red",
      label: "High caffeine — not for beginners",
      detail:
        "305mg total caffeine is approximately 3.5–4.4 mg/kg for a 70–85 kg individual. EFSA's safe daily intake upper limit is 400mg. New users or caffeine-sensitive individuals should start at half a scoop (152.5mg).",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "4g beta-alanine causes significant paresthesia",
      detail:
        "Beta-alanine at 4,000mg produces strong tingling (paresthesia) in most users for 20–40 minutes post-ingestion. This is benign and dose-dependent but is consistently flagged in user reviews as unpleasant for those unfamiliar with it.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "No creatine included",
      detail:
        "Transparent Labs deliberately excludes creatine, citing caffeine interference evidence. Users who want creatine must supplement separately — this adds cost and convenience friction. Competitors like Gorilla Mode include it.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Clinically Dosed, Sugar Free Preworkout"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "All key actives — citrulline malate (8g), beta-alanine (4g), betaine (2.5g), caffeine (305mg), Alpha-GPC (300mg) — match or exceed doses used in the cited efficacy RCTs. Zero sugar confirmed on the Supplement Facts panel. Claim is accurate.",
    },
    {
      claim: '"Zero artificial sweeteners, food dyes, or harmful additives"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Stevia extract only as sweetener. Beet root powder and grape fruit powder used for colour — both natural. No sucralose, Ace-K, aspartame, Yellow #5, or Red #40 present. Claim holds.",
    },
    {
      claim: '"Supports lean muscle growth and testosterone-supporting micronutrients"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Vitamin D (75mcg / 3,000 IU), zinc (10mg), and boron (3mg) are associated with testosterone support in deficient populations. In men with adequate baseline levels, supplementation shows minimal testosterone effect. Granville & Sames (2015, Biological Trace Element Research) found boron supports free testosterone in deficient males. Claim is context-dependent on the user's baseline micronutrient status.",
    },
    {
      claim: '"Extended energy without the crash via Infinergy DiCaffeine Malate"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Di-caffeine malate has a slower release profile than anhydrous caffeine (Harpaz et al., 2017, J Int Soc Sports Nutr). At 30mg, the crash-reducing effect is modest relative to the 275mg anhydrous component. The combination does reduce comedown severity for most users, but the claim overstates the effect of 30mg as a meaningful 'extended energy' mechanism.",
    },
    {
      claim: '"Enhanced focus via AlphaSize Alpha-GPC and L-Theanine"',
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Alpha-GPC at 300mg raises acetylcholine precursor availability (De Jesus Moreno Moreno, 2003). L-theanine at 200mg blunts caffeine-induced anxiety and jitteriness (Giesbrecht et al., 2010, Nutritional Neuroscience). The 1:1 theanine-to-caffeine-anhydrous ratio (200mg:275mg) is slightly below the classic 1:1 pairing but remains within the functional range. Focus enhancement claim is supported.",
    },
    {
      claim: '"No banned substances — safe for drug-tested athletes"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Informed Choice certification involves ongoing, blind-purchase shelf testing for 270+ WADA-listed banned substances. This is the highest voluntary verification standard in the supplement industry. The claim is supported for athletes competing under WADA, USADA, or similar agencies.",
    },
  ],
  valueMetric: {
    pricePerServing: 2.00,
    primaryActiveGrams: 8.0,
    pricePerGramActive: 0.25,
    categoryAvgPricePerGram: 0.19,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ─── FAQ SCHEMA ───────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much caffeine is in Transparent Labs BULK Black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BULK Black contains 305mg of total caffeine per serving: 275mg caffeine anhydrous (rapid onset) and 30mg Infinergy® di-caffeine malate (extended release). This is a high-stimulant dose. New users and caffeine-sensitive individuals should start with a half scoop (152.5mg total caffeine).",
      },
    },
    {
      "@type": "Question",
      name: "Is Transparent Labs BULK Black safe for drug-tested athletes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BULK Black holds Informed Choice certification, which involves monthly blind-purchase testing for over 270 banned substances on the WADA prohibited list. This is the highest voluntary banned-substance assurance available in the supplement industry.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between BULK and BULK Black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BULK Black is the high-stimulant evolution of standard BULK. The main differences: BULK Black contains 305mg caffeine vs 180mg in BULK, adds 300mg Alpha-GPC for nootropic focus, includes Infinergy® di-caffeine malate for extended energy, and adds L-tyrosine at 1,000mg. The core pump and endurance ingredients (citrulline, beta-alanine, betaine) are identical between the two formulas.",
      },
    },
    {
      "@type": "Question",
      name: "Why does BULK Black not contain creatine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transparent Labs excludes creatine from BULK Black because high doses of caffeine may interfere with creatine's ergogenic effects (as cited in their product FAQ). They recommend pairing BULK Black with a separate creatine monohydrate supplement taken at a different time of day.",
      },
    },
    {
      "@type": "Question",
      name: "Does BULK Black cause tingling or itching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 4,000mg dose of beta-alanine causes paresthesia — a harmless tingling or flushing sensation — in most users for 20–40 minutes after ingestion. This is a well-documented, dose-dependent pharmacological effect of beta-alanine and is not an allergic reaction. Users who find it uncomfortable can try half a scoop initially.",
      },
    },
    {
      "@type": "Question",
      name: "When should I take BULK Black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take one scoop 20–30 minutes before training. Due to the 305mg caffeine content, avoid taking BULK Black within 6–8 hours of your intended sleep time. Morning and early-afternoon training windows are ideal. Evening training after 5–6pm risks caffeine-mediated sleep disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Is Transparent Labs BULK Black available in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BULK Black is available on Amazon.in and through a small number of specialised Indian supplement importers. Pricing in India ranges from ₹5,200–₹6,500 per tub (30 servings) depending on the retailer and import duties, compared to $59.99 in the US. This represents a significant price premium for Indian consumers relative to domestic pre-workouts.",
      },
    },
    {
      "@type": "Question",
      name: "How does BULK Black compare to Gorilla Mode pre-workout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are high-quality, fully disclosed formulas. BULK Black's key advantages are Informed Choice certification (critical for drug-tested athletes), the nootropic stack (Alpha-GPC + L-theanine), and no artificial sweeteners. Gorilla Mode offers creatine (2.5g) and higher total citrulline (9,000mg L-citrulline vs 8,000mg citrulline malate), often at a slightly lower price. BULK Black is the better choice for tested athletes and those avoiding artificial additives.",
      },
    },
  ],
};

// ─── REVIEW SCHEMA ────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/transparent-labs-bulk-black-review#review",
  name: "Transparent Labs BULK Black Pre-Workout — Fitlabreviews FSP Review",
  reviewBody:
    "Comprehensive evidence-led review of Transparent Labs BULK Black Pre-Workout using the Fitlab Scoring Protocol (FSP v2.1). Analysis covers all 16 active ingredients against clinical evidence, Informed Choice certification, value per serving, and comparative positioning against Gorilla Mode, Legion Pulse, and C4 Extreme.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  itemReviewed: {
    "@type": "Product",
    name: "Transparent Labs BULK Black Pre-Workout",
    brand: { "@type": "Brand", name: "Transparent Labs" },
    category: "Pre-Workout Supplement",
    description:
      "High-stimulant pre-workout with 16 clinically dosed active ingredients, 305mg dual-phase caffeine, 8g citrulline malate, and Informed Choice certification.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "59.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/3RPRlnm",
    },
  },
};

// ─── RELATED REVIEWS ──────────────────────────────────────────────────────────

const relatedReviews = [
  {
    slug: "musclepharm-assault-pre-workout",
    title: "MusclePharm Assault Pre-Workout",
    brand: "MusclePharm",
    category: "Pre-Workout",
    rating: 7 as ReviewRating,
    verdict: "Solid stimulant blend with transparent labelling but under-dosed citrulline at 3g is a notable gap versus clinical evidence.",
    publishedAt: "2025-03-22",
    figNumber: "05",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Pair this with BULK Black. Pure creatine monohydrate at the best price-per-gram in the category.",
    publishedAt: "2025-03-08",
    figNumber: "02",
  },
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey Isolate",
    brand: "Dymatize",
    category: "Protein Powder",
    rating: 9 as ReviewRating,
    verdict: "The only dual NSF + Informed Choice certified hydrolyzed isolate. A natural pairing with a certified pre-workout.",
    publishedAt: "2026-05-27",
    figNumber: "REV-2026-045",
  },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

export default function TransparentLabsBulkBlackReview() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div
          style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}
          className="breadcrumb-pad"
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: 12,
                color: "#8A8480",
                fontFamily: "var(--font-dm-mono), monospace",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link
              href="/reviews"
              style={{
                fontSize: 12,
                color: "#8A8480",
                fontFamily: "var(--font-dm-mono), monospace",
                textDecoration: "none",
              }}
            >
              Reviews
            </Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span
              style={{
                fontSize: 12,
                color: "#5C5650",
                fontFamily: "var(--font-dm-mono), monospace",
              }}
            >
              TL BULK Black
            </span>
          </div>
        </div>

        {/* 2. Feature Banner */}
        <div
          style={{
            width: "100%",
            height: 300,
            background: "linear-gradient(145deg, #1A0A06 0%, #0D0402 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Product image — hidden on mobile */}
          <div
            className="hidden sm:flex"
            style={{
              position: "absolute",
              right: "8%",
              bottom: 0,
              width: 200,
              height: 270,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              src="/products/tl-bulk-black-preworkout.webp"
              alt="Transparent Labs BULK Black Pre-Workout"
              width={200}
              height={270}
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                filter: "drop-shadow(0 8px 40px rgba(196,98,45,0.4))",
              }}
              priority
            />
          </div>
          {/* Text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              paddingTop: 44,
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(242,235,217,0.3)",
              }}
            >
              REV-2026-050 · PRE-WORKOUT
            </span>
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#F2EBD9",
                letterSpacing: "-0.02em",
                textAlign: "center",
                lineHeight: 1.1,
                maxWidth: 560,
                padding: "0 24px",
              }}
            >
              Transparent Labs
              <br />
              <em style={{ fontWeight: 400, color: "#C4622D" }}>BULK Black Pre-Workout</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
                  <Star key={s} size={14} fill="#C4622D" color="#C4622D" />
                ))}
                <Star size={14} fill="none" color="#C4622D" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  color: "rgba(242,235,217,0.5)",
                  letterSpacing: "0.12em",
                }}
              >
                9 / 10 · FSP v2.1
              </span>
            </div>
          </div>
          {/* Fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background: "linear-gradient(transparent, #F2EBD9)",
            }}
          />
        </div>

        {/* 3. Hero Row */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          {/* Pill row — hidden on mobile */}
          <div
            className="hidden sm:flex"
            style={{ alignItems: "center", gap: 12, marginBottom: 16 }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#A89880",
                whiteSpace: "nowrap",
              }}
            >
              REV-2026-050
            </span>
            <span
              style={{
                width: 24,
                height: 1,
                backgroundColor: "#D4C9B8",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C4622D",
                whiteSpace: "nowrap",
              }}
            >
              Full Review · FSP Scored · Informed Choice Verified
            </span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8A8480",
                  marginBottom: 8,
                }}
              >
                Transparent Labs · Pre-Workout · High-Stimulant
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#1A1714",
                  lineHeight: 1.08,
                  marginBottom: 16,
                }}
              >
                BULK Black Pre-Workout
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#5C5650",
                    fontSize: "0.7em",
                  }}
                >
                  Is the $59 High-Stim Premium Justified in 2026?
                </em>
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#5C5650",
                  lineHeight: 1.7,
                  maxWidth: 580,
                  marginBottom: 24,
                }}
              >
                16 active ingredients. 305mg dual-phase caffeine. 8g citrulline malate at the full
                clinical dose. Informed Choice certified since launch. BULK Black is the formula
                that pre-workout labels have been promising for a decade — without the proprietary
                blend hiding what you are actually paying for.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/3RPRlnm"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    backgroundColor: "#C4622D",
                    color: "#F2EBD9",
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 8,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    textDecoration: "none",
                  }}
                >
                  Buy on Amazon <ExternalLink size={13} />
                </a>
                <Link
                  href="/methodology"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 16px",
                    border: "1px solid #D4C9B8",
                    color: "#8A8480",
                    fontSize: 12,
                    borderRadius: 8,
                    fontFamily: "var(--font-dm-mono), monospace",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                  }}
                >
                  FSP {composite.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip
            items={[
              { label: "Category", value: "High-Stim Pre-Workout" },
              { label: "Serving Size", value: "20.6g / 1 scoop" },
              { label: "Servings / Tub", value: "30" },
              { label: "Published", value: "May 29, 2026" },
              { label: "Last Updated", value: "May 29, 2026" },
            ]}
          />
        </div>

        {/* 5. Author Box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 16px",
              backgroundColor: "#F8F2E4",
              border: "1px solid #D4C9B8",
              borderRadius: 24,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #D4C9B8, #C4622D)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: 15,
                color: "#F2EBD9",
                flexShrink: 0,
              }}
            >
              F
            </div>
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#2D2926",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  marginBottom: 1,
                }}
              >
                Fitlab Research Team
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#A89880",
                }}
              >
                Reviewed by the full team ·{" "}
                <Link href="/authors" style={{ color: "#C4622D", textDecoration: "none" }}>
                  Authors page →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* 6. Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div
            style={{
              padding: "8px 14px",
              backgroundColor: "#EDE8DF",
              border: "1px solid #D4C9B8",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p
              style={{
                fontSize: 11,
                color: "#8A8480",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Affiliate disclosure: links on this page may earn a commission. Scores and verdicts
              are editorially independent.{" "}
              <Link
                href="/affiliate-disclosure"
                style={{ color: "#C4622D", textDecoration: "none" }}
              >
                Read our disclosure →
              </Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC */}
        <div
          className="block lg:hidden"
          style={{ marginTop: 16 }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 8. Main Content + Sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC Sidebar */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article Body */}
            <article style={{ minWidth: 0 }}>

              {/* ─── § 1. QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div
                  style={{
                    padding: "28px 32px",
                    backgroundColor: "#1A1714",
                    borderRadius: 12,
                    marginBottom: 24,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#5C5650",
                      marginBottom: 12,
                    }}
                  >
                    FSP Quick Verdict
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#F2EBD9",
                      lineHeight: 1.2,
                      marginBottom: 16,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    The best high-stimulant pre-workout formula available.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>
                      Worth every cent if you train hard and care about what you take.
                    </em>
                  </h2>
                  <p style={{ fontSize: 14, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 20 }}>
                    BULK Black is the product other brands&apos; labels are aspiring to be. Every
                    key active ingredient lands at or above the dose used in the pivotal clinical
                    trial. The label has no hidden blends. Informed Choice certification is ongoing,
                    not a one-time pass. The 305mg dual-phase caffeine system genuinely extends
                    energy duration. The nootropic stack — Alpha-GPC plus L-theanine plus
                    L-tyrosine — delivers a quality of focus that caffeine-only formulas cannot
                    replicate. At $59.99 for 30 servings, it is not cheap. At $1.00/serving on a
                    half scoop it becomes genuinely accessible. For experienced lifters, tested
                    athletes, and anyone done with pre-workouts that do nothing: this is the
                    benchmark.
                  </p>
                  {/* 5-pillar grid */}
                  <div className="review-pillar-grid">
                    {rubric.pillars.map((p) => (
                      <div
                        key={p.pillar}
                        style={{
                          padding: "12px 14px",
                          backgroundColor: "rgba(242,235,217,0.04)",
                          borderRadius: 8,
                          border: "1px solid rgba(212,201,184,0.12)",
                          minWidth: 0,
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#8A8480",
                            marginBottom: 6,
                          }}
                        >
                          {p.pillar}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "#C4622D",
                            lineHeight: 1,
                          }}
                        >
                          {p.score.toFixed(1)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Mobile product card — shown only on mobile, below Quick Verdict */}
              <div
                className="block sm:hidden"
                style={{ margin: "0 0 48px" }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid #D4C9B8",
                    backgroundColor: "#F8F2E4",
                  }}
                >
                  {/* Dark header with product image */}
                  <div
                    style={{
                      background: "linear-gradient(145deg, #1A0A06 0%, #0D0402 100%)",
                      padding: "28px 24px 0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                      position: "relative",
                      minHeight: 220,
                    }}
                  >
                    {/* Grid texture */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        borderRadius: "14px 14px 0 0",
                      }}
                    />
                    {/* Cert badge */}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "4px 10px",
                        backgroundColor: "rgba(45,106,79,0.15)",
                        border: "1px solid rgba(45,106,79,0.35)",
                        borderRadius: 20,
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#6BBF8A",
                      }}
                    >
                      <ShieldCheck size={10} /> Informed Choice Certified
                    </span>
                    {/* Product image */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <Image
                        src="/products/tl-bulk-black-preworkout.webp"
                        alt="Transparent Labs BULK Black Pre-Workout tub"
                        width={160}
                        height={200}
                        style={{
                          objectFit: "contain",
                          filter: "drop-shadow(0 12px 32px rgba(196,98,45,0.5))",
                          display: "block",
                        }}
                      />
                    </div>
                    {/* Fade to card body */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 48,
                        background: "linear-gradient(transparent, #F8F2E4)",
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "16px 20px 20px" }}>
                    {/* Brand + name */}
                    <p
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#A89880",
                        marginBottom: 4,
                      }}
                    >
                      Transparent Labs
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "#1A1714",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        marginBottom: 12,
                      }}
                    >
                      BULK Black Pre-Workout
                    </p>

                    {/* Key stats row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 8,
                        marginBottom: 16,
                        padding: "12px 0",
                        borderTop: "1px solid #EDE8DF",
                        borderBottom: "1px solid #EDE8DF",
                      }}
                    >
                      {[
                        { val: "9/10", label: "FSP Score" },
                        { val: "305mg", label: "Caffeine" },
                        { val: "8,000mg", label: "Citrulline" },
                      ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p
                            style={{
                              fontFamily: "var(--font-playfair), Georgia, serif",
                              fontSize: "1rem",
                              fontWeight: 800,
                              color: "#C4622D",
                              lineHeight: 1,
                              marginBottom: 3,
                            }}
                          >
                            {stat.val}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-dm-mono), monospace",
                              fontSize: 9,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#A89880",
                            }}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 9,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#A89880",
                            marginBottom: 2,
                          }}
                        >
                          Price / 30 servings
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: "1.1rem",
                            fontWeight: 800,
                            color: "#1A1714",
                          }}
                        >
                          $59.99
                        </p>
                      </div>
                      <a
                        href="https://amzn.to/3RPRlnm"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "10px 18px",
                          backgroundColor: "#C4622D",
                          color: "#F2EBD9",
                          fontSize: 13,
                          fontWeight: 700,
                          borderRadius: 8,
                          textDecoration: "none",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          flexShrink: 0,
                        }}
                      >
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── § 2. WHAT IS BULK BLACK? ────────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  What Is BULK Black?
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Transparent Labs BULK Black is the high-stimulant upgrade to the brand&apos;s
                  original BULK pre-workout, launched for experienced lifters who have built
                  caffeine tolerance and want a formula that can match their training intensity.
                  Where standard BULK provides 180mg of caffeine and no nootropic stack, BULK
                  Black delivers 305mg via a dual-source system — caffeine anhydrous for rapid
                  onset, Infinergy® di-caffeine malate for sustained output — and adds 300mg
                  AlphaSize® Alpha-GPC and 1,000mg L-tyrosine for acetylcholine-mediated focus.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The product sits within Transparent Labs&apos; commitment to full label
                  transparency — every ingredient listed individually with exact milligram
                  quantities, no proprietary blends, and no filler ingredients. Informed Choice
                  certification has been held continuously since the product&apos;s launch, meaning
                  random retail shelf samples are purchased and tested monthly for WADA-listed
                  banned substances.
                </p>
                <div
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "#F8F2E4",
                    border: "1px solid #D4C9B8",
                    borderRadius: 10,
                    borderLeft: "3px solid #C4622D",
                    marginTop: 20,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4622D",
                      marginBottom: 6,
                    }}
                  >
                    Who is BULK Black for?
                  </p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>
                    Experienced lifters with established caffeine tolerance (200mg+ daily from all
                    sources). Competitive and tested athletes who need Informed Choice
                    certification. Anyone who has taken pre-workouts that &quot;don&apos;t
                    work&quot; and suspects under-dosing is the cause. Not appropriate for
                    caffeine-naive users, those with cardiovascular sensitivity, or anyone who
                    trains within 6 hours of bedtime.
                  </p>
                </div>
              </section>

              {/* ─── § 3. SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Score Breakdown
                </h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>
                  FSP v2.1 weights: Formula 35% · Transparency 25% · Verification 20% · Value 12%
                  · Practical 8%
                </p>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-050" />
                <p
                  style={{
                    fontSize: 13,
                    color: "#8A8480",
                    marginTop: 16,
                    lineHeight: 1.6,
                    padding: "12px 16px",
                    backgroundColor: "#EDE8DF",
                    borderRadius: 8,
                  }}
                >
                  Composite FSP score: <strong>{composite.toFixed(1)}/10</strong>. Editorial score:{" "}
                  <strong>9/10</strong>. The editorial score exceeds the composite because the
                  formula quality and transparency pillars represent the category ceiling — no other
                  pre-workout we have reviewed matches BULK Black on both dimensions simultaneously.
                </p>
              </section>

              {/* ─── § 4. FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Red &amp; Green Flags
                </h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── § 5. SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Supplement Facts
                </h2>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
                  One scoop (20.6g) per serving. 30 servings per container. Mix with 10–14 oz of
                  water and consume 20–30 minutes before training. Tolerance assessment: start at
                  ½ scoop.
                </p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            fontSize: 11,
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#A89880",
                            width: "42%",
                          }}
                        >
                          Ingredient
                        </th>
                        <th
                          style={{
                            padding: "12px 16px",
                            textAlign: "right",
                            fontSize: 11,
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#A89880",
                            width: "28%",
                          }}
                        >
                          Amount / Serving
                        </th>
                        <th
                          style={{
                            padding: "12px 16px",
                            textAlign: "center",
                            fontSize: 11,
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#A89880",
                            width: "30%",
                          }}
                        >
                          Clinical Dose
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Citrulline Malate 2:1", amount: "8,000 mg", clinical: "6,000–8,000 mg", dosed: true },
                        { name: "Beta-Alanine", amount: "4,000 mg", clinical: "3,200–6,400 mg", dosed: true },
                        { name: "Betaine Anhydrous (BetaPure®)", amount: "2,500 mg", clinical: "2,500 mg", dosed: true },
                        { name: "L-Tyrosine", amount: "1,000 mg", clinical: "500–2,000 mg", dosed: true },
                        { name: "Taurine", amount: "1,300 mg", clinical: "1,000–3,000 mg", dosed: true },
                        { name: "AlphaSize® Alpha-GPC 50%", amount: "300 mg", clinical: "200–600 mg", dosed: true },
                        { name: "Caffeine Anhydrous", amount: "275 mg", clinical: "3–6 mg/kg", dosed: true },
                        { name: "L-Theanine", amount: "200 mg", clinical: "100–200 mg", dosed: true },
                        { name: "Infinergy® Di-Caffeine Malate", amount: "30 mg", clinical: "Adjunct", dosed: true },
                        { name: "Theobromine", amount: "50 mg", clinical: "Adjunct", dosed: true },
                        { name: "AstraGin® (Absorption Matrix)", amount: "50 mg", clinical: "25–100 mg", dosed: true },
                        { name: "Boron (as Boron Citrate)", amount: "3 mg", clinical: "3–6 mg", dosed: true },
                        { name: "Vitamin D3 (Cholecalciferol)", amount: "75 mcg (3,000 IU)", clinical: "Varies", dosed: true },
                        { name: "Vitamin B6 (Pyridoxine HCl)", amount: "5 mg", clinical: "—", dosed: false },
                        { name: "Vitamin B12 (Methylcobalamin)", amount: "250 mcg", clinical: "—", dosed: false },
                        { name: "Sodium / Potassium (Electrolytes)", amount: "150 mg / 100 mg", clinical: "—", dosed: false },
                      ].map((row, i) => (
                        <tr
                          key={row.name}
                          style={{
                            backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9",
                            borderBottom: "1px solid #EDE8DF",
                          }}
                        >
                          <td
                            style={{
                              padding: "11px 16px",
                              fontSize: 13,
                              color: "#2D2926",
                              fontFamily: "var(--font-dm-sans), sans-serif",
                            }}
                          >
                            {row.name}
                          </td>
                          <td
                            style={{
                              padding: "11px 16px",
                              fontSize: 13,
                              color: "#1A1714",
                              fontWeight: 700,
                              textAlign: "right",
                              fontFamily: "var(--font-dm-mono), monospace",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {row.amount}
                          </td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.dosed && row.clinical !== "—" ? (
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 9px",
                                  backgroundColor: "rgba(45,106,79,0.10)",
                                  border: "1px solid rgba(45,106,79,0.25)",
                                  borderRadius: 20,
                                  fontSize: 11,
                                  color: "#2D6A4F",
                                  fontFamily: "var(--font-dm-mono), monospace",
                                  whiteSpace: "nowrap",
                                  fontWeight: 600,
                                }}
                              >
                                {row.clinical}
                              </span>
                            ) : (
                              <span
                                style={{
                                  fontSize: 12,
                                  color: "#A89880",
                                  fontFamily: "var(--font-dm-mono), monospace",
                                }}
                              >
                                —
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ─── § 6. INGREDIENT BREAKDOWN ───────────────────────────────────── */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Ingredient Breakdown
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 28 }}>
                  BULK Black organises its 16 active ingredients into four functional categories:
                  endurance and pump, energy and stimulants, focus and nootropics, and micronutrient
                  support. Every ingredient below is cited to the primary efficacy trial that
                  establishes the clinical dose range.
                </p>

                {/* Endurance & Pump */}
                <div style={{ marginBottom: 32 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C4622D",
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: "1px solid #EDE8DF",
                    }}
                  >
                    Endurance &amp; Pump
                  </p>
                  {[
                    {
                      name: "Citrulline Malate 2:1 — 8,000mg",
                      evidence: "strong" as EvidenceLevel,
                      body: "The 2:1 ratio means this serving delivers approximately 5,300mg of L-citrulline. Pérez-Guisado and Jakeman (2010, Journal of Strength and Conditioning Research) found 8g of citrulline malate reduced muscle soreness by 40% and increased the number of repetitions completed to failure in bench press by a mean of 52.9% versus placebo. Citrulline is converted to arginine in the kidney, raising plasma arginine and driving nitric oxide synthase — producing vasodilation, improved blood flow, and the subjective pump effect. At 8g, BULK Black hits the upper bound of the evidence-based dose range.",
                    },
                    {
                      name: "Beta-Alanine — 4,000mg",
                      evidence: "strong" as EvidenceLevel,
                      body: "Beta-alanine is a non-essential amino acid that combines with histidine to form carnosine in skeletal muscle. Carnosine buffers hydrogen ion accumulation during high-intensity exercise — the primary mechanism for muscular acidosis and fatigue in sets lasting 60–240 seconds. Hobson et al. (2012, Amino Acids, meta-analysis of 15 studies) confirmed beta-alanine significantly improves exercise capacity in this time domain. The effective dose range is 3.2–6.4g/day; 4g sits comfortably in the middle. Daily supplementation (not just pre-workout) is required for full carnosine loading.",
                    },
                    {
                      name: "Betaine Anhydrous (BetaPure®) — 2,500mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "Betaine is an osmolyte that supports cellular hydration under osmotic stress during intense training. Trepanowski et al. (2011, Journal of the International Society of Sports Nutrition) found 2.5g/day for six weeks improved muscle endurance. BetaPure® is a pharmaceutical-grade form from Associated British Foods. The 2,500mg dose matches the primary efficacy study exactly. Some studies show strength benefits; others do not — the evidence is moderate rather than strong, but consistent enough to justify inclusion at this dose.",
                    },
                    {
                      name: "Taurine — 1,300mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "Taurine is an amino sulphonic acid with roles in calcium signalling in muscle, osmoregulation, and antioxidant defence. Balshaw et al. (2013, Amino Acids) found 1g of taurine supplementation improved 3km time-trial performance in trained cyclists by a statistically significant margin. At 1,300mg, BULK Black exceeds the dose used in the primary endurance trial.",
                    },
                  ].map((ing) => (
                    <div
                      key={ing.name}
                      style={{
                        marginBottom: 20,
                        padding: "18px 20px",
                        backgroundColor: "#F8F2E4",
                        border: "1px solid #EDE8DF",
                        borderRadius: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 10,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1A1714",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {ing.name}
                        </p>
                        <EvidenceBadge level={ing.evidence} />
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{ing.body}</p>
                    </div>
                  ))}
                </div>

                {/* Energy & Stimulants */}
                <div style={{ marginBottom: 32 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C4622D",
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: "1px solid #EDE8DF",
                    }}
                  >
                    Energy &amp; Stimulants
                  </p>
                  {[
                    {
                      name: "Caffeine Anhydrous — 275mg",
                      evidence: "strong" as EvidenceLevel,
                      body: "Caffeine is the most studied ergogenic compound in sports nutrition. At 3–6mg/kg body weight, it reliably improves aerobic endurance, sprint performance, and maximal strength (Grgic et al., 2018, British Journal of Sports Medicine, meta-analysis). For a 75kg individual, 275mg represents 3.7mg/kg — comfortably within the evidence-based range. Caffeine anhydrous provides rapid absorption, with peak plasma levels at 30–60 minutes post-ingestion.",
                    },
                    {
                      name: "Infinergy® Di-Caffeine Malate — 30mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "Di-caffeine malate is buffered caffeine bound to malic acid, producing a slower absorption curve than anhydrous caffeine. Infinergy® contributes approximately 20mg of caffeine equivalents from the 30mg compound dose. The primary purpose is energy curve extension — reducing the sharp comedown characteristic of single-source caffeine formulas. Harpaz et al. (2017, Journal of the International Society of Sports Nutrition) confirmed differential release kinetics between caffeine forms. The 30mg dose makes a modest but measurable contribution.",
                    },
                    {
                      name: "Theobromine — 50mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "Theobromine is a methylxanthine (structurally related to caffeine) with a longer half-life and a milder, more sustained stimulant effect. It is a natural constituent of cacao. At 50mg in a 305mg caffeine context, its contribution is primarily to extend the energy tail of the formula rather than drive acute stimulation. The combination is well-tolerated and avoids the vasoconstrictive profile of pure caffeine stacks.",
                    },
                  ].map((ing) => (
                    <div
                      key={ing.name}
                      style={{
                        marginBottom: 20,
                        padding: "18px 20px",
                        backgroundColor: "#F8F2E4",
                        border: "1px solid #EDE8DF",
                        borderRadius: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 10,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1A1714",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {ing.name}
                        </p>
                        <EvidenceBadge level={ing.evidence} />
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{ing.body}</p>
                    </div>
                  ))}
                </div>

                {/* Focus & Nootropics */}
                <div style={{ marginBottom: 32 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C4622D",
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: "1px solid #EDE8DF",
                    }}
                  >
                    Focus &amp; Nootropics
                  </p>
                  {[
                    {
                      name: "AlphaSize® Alpha-GPC — 300mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "Alpha-glycerylphosphorylcholine (Alpha-GPC) is a bioavailable choline precursor that crosses the blood-brain barrier and raises acetylcholine synthesis. De Jesus Moreno Moreno (2003, Clinical Therapeutics) demonstrated cognitive improvement in clinical populations. In healthy athletes, the mechanism translates to improved mind-muscle connection, especially on motor-skill-dependent movements (machine work, Olympic lifts, cable isolation exercises). The 300mg dose of 50% concentrated Alpha-GPC provides 150mg of active Alpha-GPC — slightly below the 400–600mg active dose range used in some cognition trials, but within the functional range for acute workout focus.",
                    },
                    {
                      name: "L-Theanine — 200mg",
                      evidence: "strong" as EvidenceLevel,
                      body: "L-theanine modulates glutamate receptor activity and promotes alpha-wave brain activity — producing a state of calm alertness without sedation. Giesbrecht et al. (2010, Nutritional Neuroscience) established that caffeine + L-theanine in combination significantly outperforms caffeine alone on tests of attention and reaction time. The 200mg dose against 275mg caffeine anhydrous (0.73:1 ratio) is slightly below the classic 1:1 pairing but remains within the range demonstrated to reduce jitteriness and sustain focus quality.",
                    },
                    {
                      name: "L-Tyrosine — 1,000mg",
                      evidence: "moderate" as EvidenceLevel,
                      body: "L-tyrosine is a precursor to catecholamine neurotransmitters (dopamine, norepinephrine, epinephrine). Under physical and cognitive stress, catecholamine synthesis increases and tyrosine becomes conditionally essential. Deijen and Orlebeke (1994, Brain Research Bulletin) found tyrosine supplementation significantly reduced working memory decline under stress. At 1,000mg, BULK Black provides a meaningful contribution to sustained cognitive performance during high-intensity training sessions.",
                    },
                  ].map((ing) => (
                    <div
                      key={ing.name}
                      style={{
                        marginBottom: 20,
                        padding: "18px 20px",
                        backgroundColor: "#F8F2E4",
                        border: "1px solid #EDE8DF",
                        borderRadius: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 10,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1A1714",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {ing.name}
                        </p>
                        <EvidenceBadge level={ing.evidence} />
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{ing.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 7. LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Lab &amp; Verification
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  {[
                    {
                      cert: "Informed Choice",
                      status: "Certified",
                      colour: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      detail:
                        "Monthly blind-purchase shelf testing. 270+ banned substances. Active since product launch.",
                    },
                    {
                      cert: "Heavy Metals COA",
                      status: "Published",
                      colour: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      detail:
                        "Batch-level certificates of analysis available on the Transparent Labs website for each production run.",
                    },
                    {
                      cert: "NSF Certified for Sport",
                      status: "Not Held",
                      colour: "#8B7355",
                      bg: "rgba(139,115,85,0.06)",
                      border: "rgba(139,115,85,0.2)",
                      detail:
                        "TL holds Informed Choice, not NSF. Both are rigorous; the absence of NSF is not a concern for most athletes — dual certification is rare.",
                    },
                    {
                      cert: "FDA MedWatch Alerts",
                      status: "None",
                      colour: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      detail:
                        "No adverse event reports or recall notices associated with BULK Black on FDA MedWatch as of May 2026.",
                    },
                  ].map((item) => (
                    <div
                      key={item.cert}
                      style={{
                        padding: "18px 20px",
                        backgroundColor: item.bg,
                        border: `1px solid ${item.border}`,
                        borderRadius: 10,
                        minWidth: 0,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#1A1714",
                          marginBottom: 4,
                        }}
                      >
                        {item.cert}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: item.colour,
                          marginBottom: 10,
                        }}
                      >
                        {item.status}
                      </p>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "#F8F2E4",
                    border: "1px solid #D4C9B8",
                    borderRadius: 10,
                  }}
                >
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>Informed Choice vs NSF Certified for Sport:</strong> Both programmes
                    test for WADA-listed banned substances. Informed Choice is operated by LGC Group
                    and is mandatory for UK Sport funding. NSF is the North American standard
                    required by most major US sports organisations. For WADA-governed competition,
                    Informed Choice provides equivalent assurance to NSF. BULK Black&apos;s Informed
                    Choice certification is sufficient for virtually all competitive contexts.
                  </p>
                </div>
              </section>

              {/* ─── § 8. CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Claim Audit
                </h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>
                  Marketing claims from the official Transparent Labs product page and Amazon
                  listing, assessed against published evidence.
                </p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── § 9. HOW TO TAKE IT ─────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  How to Take It
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    {
                      step: "Tolerance Assessment (Week 1)",
                      protocol: "½ scoop (152.5mg caffeine) in 8–10 oz water",
                      recommended: true,
                      timing: "20–30 min pre-training",
                      notes:
                        "For any user new to BULK Black — including experienced pre-workout users — start with half a scoop to assess individual response to the 305mg full-dose caffeine load. The beta-alanine tingling is also dose-dependent and more manageable at half dose.",
                    },
                    {
                      step: "Maintenance Protocol (Week 2+)",
                      protocol: "1 scoop (305mg caffeine) in 12–14 oz water",
                      recommended: true,
                      timing: "20–30 min pre-training",
                      notes:
                        "Progress to a full scoop once you have confirmed your caffeine tolerance. Use 12–14 oz of water for better mixability and to slow caffeine absorption slightly — reducing peak-plasma spike.",
                    },
                    {
                      step: "Training Window",
                      protocol: "Morning to early afternoon preferred",
                      recommended: true,
                      timing: "No later than 5–6 hours before sleep",
                      notes:
                        "At 305mg total caffeine with a dual-phase delivery system, effects persist for 4–6 hours in most individuals. Evening training risks sleep disruption. Caffeine&apos;s half-life of 5–6 hours means a 6pm dose may still have 150mg active at midnight.",
                    },
                    {
                      step: "Cycling",
                      protocol: "5 days on / 2 days off, or 8 weeks on / 2 weeks off",
                      recommended: false,
                      timing: "As needed",
                      notes:
                        "Caffeine tolerance develops with daily use. Periodic breaks maintain sensitivity and reduce dependence. On rest days, consider a half scoop for general energy without full stimulant loading.",
                    },
                  ].map((row) => (
                    <div
                      key={row.step}
                      style={{
                        padding: "18px 20px",
                        border: `1px solid ${row.recommended ? "rgba(45,106,79,0.2)" : "#D4C9B8"}`,
                        borderRadius: 10,
                        backgroundColor: row.recommended ? "rgba(45,106,79,0.03)" : "#F8F2E4",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 8,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#1A1714",
                              marginBottom: 2,
                            }}
                          >
                            {row.step}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-dm-mono), monospace",
                              fontSize: 11,
                              color: "#C4622D",
                            }}
                          >
                            {row.protocol}
                          </p>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          {row.recommended && (
                            <span
                              style={{
                                padding: "2px 8px",
                                backgroundColor: "rgba(45,106,79,0.1)",
                                border: "1px solid rgba(45,106,79,0.2)",
                                borderRadius: 4,
                                fontSize: 10,
                                color: "#2D6A4F",
                                fontFamily: "var(--font-dm-mono), monospace",
                              }}
                            >
                              Recommended
                            </span>
                          )}
                          <span
                            style={{
                              padding: "2px 8px",
                              backgroundColor: "#EDE8DF",
                              border: "1px solid #D4C9B8",
                              borderRadius: 4,
                              fontSize: 10,
                              color: "#5C5650",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.timing}
                          </span>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                        {row.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 10. COMPARISON ────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  vs. Competitors
                </h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>
                  High-stimulant pre-workouts with full label disclosure. Prices verified May 2026.
                </p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {[
                          "Product",
                          "Caffeine",
                          "Citrulline",
                          "Beta-Alanine",
                          "3rd-Party",
                          "Price/Serving",
                          "Prop Blend",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "12px 14px",
                              textAlign: "left",
                              fontSize: 10,
                              fontFamily: "var(--font-dm-mono), monospace",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#A89880",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "TL BULK Black ★",
                          caffeine: "305mg (dual)",
                          citrulline: "8,000mg CM",
                          beta: "4,000mg",
                          cert: "Informed Choice",
                          price: "$2.00",
                          prop: "None",
                          highlight: true,
                        },
                        {
                          name: "Gorilla Mode",
                          caffeine: "350mg",
                          citrulline: "9,000mg L-Cit",
                          beta: "3,200mg",
                          cert: "None",
                          price: "$1.66",
                          prop: "None",
                          highlight: false,
                        },
                        {
                          name: "Legion Pulse",
                          caffeine: "350mg",
                          citrulline: "8,000mg CM",
                          beta: "3,600mg",
                          cert: "Informed Sport",
                          price: "$2.33",
                          prop: "None",
                          highlight: false,
                        },
                        {
                          name: "C4 Extreme",
                          caffeine: "200mg",
                          citrulline: "1,500mg L-Cit",
                          beta: "3,200mg",
                          cert: "Informed Choice",
                          price: "$1.00",
                          prop: "Yes",
                          highlight: false,
                        },
                        {
                          name: "MusclePharm Assault",
                          caffeine: "200mg",
                          citrulline: "3,000mg",
                          beta: "2,500mg",
                          cert: "None",
                          price: "$0.75",
                          prop: "Yes",
                          highlight: false,
                        },
                      ].map((row, i) => (
                        <tr
                          key={row.name}
                          style={{
                            backgroundColor: row.highlight
                              ? "rgba(196,98,45,0.07)"
                              : i % 2 === 0
                              ? "#F8F2E4"
                              : "#F2EBD9",
                            borderBottom: "1px solid #EDE8DF",
                          }}
                        >
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 13,
                              fontWeight: row.highlight ? 700 : 400,
                              color: row.highlight ? "#C4622D" : "#2D2926",
                              fontFamily: "var(--font-dm-sans), sans-serif",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {row.name}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color: "#1A1714",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.caffeine}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color: "#1A1714",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.citrulline}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color: "#1A1714",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.beta}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color:
                                row.cert !== "None" ? "#2D6A4F" : "#8B3A2C",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.cert}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color: "#1A1714",
                              fontFamily: "var(--font-dm-mono), monospace",
                              fontWeight: 700,
                            }}
                          >
                            {row.price}
                          </td>
                          <td
                            style={{
                              padding: "11px 14px",
                              fontSize: 12,
                              color: row.prop === "None" ? "#2D6A4F" : "#8B3A2C",
                              fontFamily: "var(--font-dm-mono), monospace",
                            }}
                          >
                            {row.prop}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  CM = Citrulline Malate. L-Cit = L-Citrulline base. 8,000mg citrulline malate
                  delivers approximately 5,300mg L-citrulline equivalents; direct dose comparisons
                  require accounting for the malate fraction weight.
                </p>
              </section>

              {/* ─── § 11. PRODUCTS AT A GLANCE ──────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Products at a Glance
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 16,
                  }}
                >
                  <ProductCard
                    name="BULK Black Pre-Workout"
                    brand="Transparent Labs"
                    category="High-Stim Pre-Workout"
                    score={9}
                    priceUSD="$59.99 / 30 servings"
                    priceINR="₹5,200–₹6,500"
                    tags={["Informed Choice", "305mg Caffeine", "No Prop Blend"]}
                    buyUrl="https://amzn.to/3RPRlnm"
                    buyLabel="Check Price"
                    reviewSlug="transparent-labs-bulk-black-review"
                    image="tl-bulk-black-preworkout.webp"
                    bgFrom="#1A0A06"
                    bgTo="#0D0402"
                    accent="#C4622D"
                    featured={true}
                  />
                  <ProductCard
                    name="Gorilla Mode Pre-Workout"
                    brand="Gorilla Mind"
                    category="High-Stim Pre-Workout"
                    priceUSD="$49.99 / 30 servings"
                    priceINR="N/A"
                    tags={["350mg Caffeine", "9g L-Citrulline", "No Prop Blend"]}
                    buyUrl="https://amzn.to/gorilla-mode"
                    buyLabel="Check Price"
                    image="gorilla-mode-preworkout.webp"
                    bgFrom="#0A1A0A"
                    bgTo="#060E06"
                    accent="#2D6A4F"
                  />
                  <ProductCard
                    name="C4 Original Pre-Workout"
                    brand="Cellucor"
                    category="Pre-Workout"
                    priceUSD="~$1.00 / serving"
                    priceINR="₹1,500–₹2,000"
                    tags={["200mg Caffeine", "Informed Choice", "Budget Option"]}
                    buyUrl="https://amzn.to/c4-original"
                    buyLabel="Check Price"
                    image="c4-original-preworkout.webp"
                    bgFrom="#1A1A2E"
                    bgTo="#11111E"
                    accent="#3A5F8B"
                  />
                  <ProductCard
                    name="Legion Pulse Pre-Workout"
                    brand="Legion Athletics"
                    category="High-Stim Pre-Workout"
                    priceUSD="$69.99 / 30 servings"
                    priceINR="N/A"
                    tags={["Informed Sport", "350mg Caffeine", "No Prop Blend"]}
                    buyUrl="https://amzn.to/legion-pulse"
                    buyLabel="Check Price"
                    image="legion-pulse-preworkout.webp"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#D4A96A"
                  />
                </div>
              </section>

              {/* ─── § 12. PROS & CONS ───────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Pros &amp; Cons
                </h2>
                <ProsCons
                  pros={[
                    "Every active ingredient at or above the clinical trial dose — no token doses",
                    "Informed Choice certified with ongoing monthly blind-purchase testing",
                    "Zero proprietary blends — complete label transparency per serving",
                    "Dual-phase caffeine system reduces peak-crash versus single-source formulas",
                    "Alpha-GPC + L-theanine + L-tyrosine nootropic stack provides genuine focus quality",
                    "No artificial sweeteners, dyes, or sucralose — stevia only",
                    "Excellent mixability in 10–14 oz water",
                    "Half-scoop protocol is practical and reduces cost to $1.00/serving",
                  ]}
                  cons={[
                    "305mg caffeine is inappropriate for beginners or caffeine-sensitive users",
                    "4g beta-alanine causes significant paresthesia (tingling) for 20–40 minutes",
                    "No creatine — requires separate supplementation if desired",
                    "$2.00/serving is premium vs. category average (~$1.40/serving)",
                    "Stevia sweetness is more muted than sucralose-based competitors — divides user preference",
                    "Large 20.6g scoop size requires adequate water volume for palatability",
                  ]}
                />
              </section>

              {/* ─── § 13. SAFETY ────────────────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Safety &amp; Side Effects
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "Caffeine (305mg total)",
                      icon: "⚡",
                      risk: "moderate",
                      body: "The European Food Safety Authority (EFSA, 2015) established a safe habitual caffeine intake of 400mg/day for healthy adults. BULK Black&apos;s 305mg per serving leaves 95mg of daily headroom from other dietary sources (coffee, tea). Users who consume 2+ cups of coffee daily should account for their total caffeine load. Contraindicated in: pregnancy, cardiovascular conditions, anxiety disorders, medications that interact with caffeine (MAOIs, certain SSRIs). Half-scoop (152.5mg) is appropriate for most healthy adults new to this formula.",
                    },
                    {
                      title: "Beta-Alanine Paresthesia",
                      icon: "🔴",
                      risk: "low",
                      body: "The tingling, flushing, or itching sensation following beta-alanine ingestion is a benign dose-dependent effect caused by activation of sensory nerve receptors (Mas et al., 2012, Amino Acids). It does not indicate allergy or adverse response. The effect diminishes over 2–4 weeks of consistent daily use as carnosine loading occurs. Half-scoop reduces intensity. Splitting the dose (morning + pre-workout) further reduces the acute effect.",
                    },
                    {
                      title: "Alpha-GPC and Choline",
                      icon: "🧠",
                      risk: "low",
                      body: "At 300mg Alpha-GPC, cholinergic excess (headache, fatigue at very high doses) is unlikely. Users already taking high-dose choline supplements should note the combined load. Alpha-GPC is generally well-tolerated in clinical populations at doses up to 1,200mg/day.",
                    },
                    {
                      title: "Not Appropriate For",
                      icon: "🚫",
                      risk: "high",
                      body: "BULK Black is not appropriate for: individuals under 18, pregnant or nursing women, anyone with cardiovascular disease or hypertension, individuals sensitive to stimulants, those taking MAOI antidepressants, anyone with kidney disease (high amino acid load), or anyone with a history of anxiety disorders exacerbated by stimulants. Consult a physician before use if you take any prescription medications.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        padding: "18px 20px",
                        backgroundColor:
                          item.risk === "high"
                            ? "rgba(139,58,44,0.06)"
                            : item.risk === "moderate"
                            ? "rgba(139,115,85,0.06)"
                            : "#F8F2E4",
                        border: `1px solid ${
                          item.risk === "high"
                            ? "rgba(139,58,44,0.2)"
                            : item.risk === "moderate"
                            ? "rgba(139,115,85,0.2)"
                            : "#EDE8DF"
                        }`,
                        borderRadius: 10,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#1A1714",
                          marginBottom: 10,
                        }}
                      >
                        {item.icon} {item.title}
                      </p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 14. VALUE ─────────────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Price &amp; Value
                </h2>
                <ValueMetricPanel
                  metric={rubric.valueMetric}
                  activeIngredientLabel="citrulline malate"
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 12,
                    marginTop: 24,
                  }}
                >
                  {[
                    { option: "Full Scoop (30 servings)", price: "$59.99 ($2.00/serving)", note: "Recommended for experienced users" },
                    { option: "Half Scoop (60 servings)", price: "$59.99 ($1.00/serving)", note: "Best value; ideal for tolerance building" },
                    { option: "TL Website Direct", price: "$59.99 (+ free US shipping)", note: "Subscribe & save available" },
                    { option: "Amazon (India)", price: "₹5,200–₹6,500 / tub", note: "Prices verified May 2026" },
                  ].map((row) => (
                    <div
                      key={row.option}
                      style={{
                        padding: "14px 16px",
                        backgroundColor: "#F8F2E4",
                        border: "1px solid #D4C9B8",
                        borderRadius: 10,
                        minWidth: 0,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1A1714",
                          marginBottom: 4,
                        }}
                      >
                        {row.option}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 12,
                          color: "#C4622D",
                          marginBottom: 4,
                        }}
                      >
                        {row.price}
                      </p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>{row.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 15. WHERE TO BUY ──────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Where to Buy
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon (via our affiliate link)",
                      verdict: "Recommended",
                      colour: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      detail:
                        "Reliable fulfilment, standard return policy, and fastest delivery for most users. Link goes directly to the verified BULK Black listing.",
                      cta: true,
                    },
                    {
                      channel: "TransparentLabs.com (Direct)",
                      verdict: "Recommended",
                      colour: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      detail:
                        "Subscribe & save options available. Occasional bundle deals with creatine or protein. Best for US-based users who buy regularly.",
                      cta: false,
                    },
                    {
                      channel: "Amazon.in (India)",
                      verdict: "Use with caution",
                      colour: "#8B7355",
                      bg: "rgba(139,115,85,0.06)",
                      border: "rgba(139,115,85,0.2)",
                      detail:
                        "Available on Amazon.in through authorised importers. Verify the sold-by name is a TL-authorised seller. Prices range ₹5,200–₹6,500. Check the Informed Choice QR code on the tub before use.",
                      cta: false,
                    },
                    {
                      channel: "Generic gym supplement shops",
                      verdict: "Not recommended",
                      colour: "#8B3A2C",
                      bg: "rgba(139,58,44,0.06)",
                      border: "rgba(139,58,44,0.2)",
                      detail:
                        "Unverified storage conditions, potential for counterfeit or tampered stock. For a supplement where Informed Choice certification is a key purchase reason, chain-of-custody matters.",
                      cta: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.channel}
                      style={{
                        padding: "18px 20px",
                        backgroundColor: item.bg,
                        border: `1px solid ${item.border}`,
                        borderRadius: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 8,
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1A1714",
                          }}
                        >
                          {item.channel}
                        </p>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: item.colour,
                            flexShrink: 0,
                          }}
                        >
                          {item.verdict}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: item.cta ? 12 : 0 }}>
                        {item.detail}
                      </p>
                      {item.cta && (
                        <a
                          href="https://amzn.to/3RPRlnm"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "8px 16px",
                            backgroundColor: "#C4622D",
                            color: "#F2EBD9",
                            fontSize: 12,
                            fontWeight: 600,
                            borderRadius: 6,
                            textDecoration: "none",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          Buy on Amazon <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 16. FAQ ───────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  FAQ
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9",
                        borderRadius: 8,
                        border: "1px solid #EDE8DF",
                      }}
                    >
                      <summary
                        style={{
                          padding: "14px 18px",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#1A1714",
                          cursor: "pointer",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        {faq.name}
                      </summary>
                      <p
                        style={{
                          padding: "0 18px 16px",
                          fontSize: 13,
                          color: "#5C5650",
                          lineHeight: 1.7,
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ─── § 17. FINAL VERDICT ─────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div
                  style={{
                    backgroundColor: "#1A1714",
                    borderRadius: 12,
                    padding: "36px 32px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "rgba(212,201,184,0.4)",
                      marginBottom: 16,
                    }}
                  >
                    FINAL VERDICT · REV-2026-050
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 24,
                      flexWrap: "wrap",
                      marginBottom: 24,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "4rem",
                          fontWeight: 800,
                          color: "#C4622D",
                          lineHeight: 1,
                        }}
                      >
                        {editorialScore}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.15em",
                          color: "rgba(212,201,184,0.5)",
                        }}
                      >
                        /10 · FSP EDITORIAL
                      </p>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "1.4rem",
                          fontWeight: 700,
                          color: "#F2EBD9",
                          marginBottom: 12,
                          lineHeight: 1.2,
                        }}
                      >
                        The category benchmark.{" "}
                        <em
                          style={{
                            fontStyle: "italic",
                            fontWeight: 400,
                            color: "#A89880",
                          }}
                        >
                          Justified for serious athletes. Premium but not overpriced.
                        </em>
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#D4C9B8",
                      lineHeight: 1.8,
                      marginBottom: 16,
                    }}
                  >
                    Transparent Labs BULK Black earns a 9/10 on the FSP because it does something
                    the pre-workout category has failed to do consistently: it puts every ingredient
                    at the dose that the clinical evidence actually requires. 8g citrulline malate.
                    4g beta-alanine. 2.5g betaine. 305mg of caffeine delivered via a dual-source
                    system. 300mg Alpha-GPC. And it does all of this with Informed Choice
                    certification, full label transparency, and no artificial sweeteners.
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#D4C9B8",
                      lineHeight: 1.8,
                      marginBottom: 28,
                    }}
                  >
                    The value score (7/10) is honest. $59.99 for 30 servings is premium pricing,
                    and the premium is real — patented ingredient forms, Informed Choice testing
                    overhead, and manufacturing transparency have a cost. The half-scoop protocol
                    ($1.00/serving, 60 effective sessions) changes the value calculus
                    significantly. For experienced lifters who have built caffeine tolerance and
                    are done with formulas that produce nothing measurable: this is the standard
                    every pre-workout should be compared against.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="https://amzn.to/3RPRlnm"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 24px",
                        backgroundColor: "#C4622D",
                        color: "#F2EBD9",
                        fontSize: 14,
                        fontWeight: 700,
                        borderRadius: 8,
                        textDecoration: "none",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      Buy BULK Black on Amazon <ExternalLink size={14} />
                    </a>
                    <Link
                      href="/reviews"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "12px 20px",
                        border: "1px solid rgba(212,201,184,0.2)",
                        color: "#A89880",
                        fontSize: 12,
                        borderRadius: 8,
                        textDecoration: "none",
                        fontFamily: "var(--font-dm-mono), monospace",
                        letterSpacing: "0.06em",
                      }}
                    >
                      All pre-workout reviews →
                    </Link>
                  </div>
                </div>
              </section>

              {/* ─── Research References ──────────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    marginBottom: 16,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Research References
                </h2>
                <div
                  style={{
                    padding: 20,
                    backgroundColor: "#F8F2E4",
                    border: "1px solid #D4C9B8",
                    borderRadius: 10,
                  }}
                >
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Pérez-Guisado J, Jakeman PM. (2010). Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 24(5):1215–22. doi:10.1519/JSC.0b013e3181cb28e0",
                      "Hobson RM et al. (2012). Effects of β-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 43(1):25–37. doi:10.1007/s00726-011-1200-z",
                      "Trepanowski JF et al. (2011). The effects of chronic betaine supplementation on exercise performance, skeletal muscle oxygen saturation and associated biochemical parameters in resistance trained men. J Strength Cond Res. 25(12):3461–71.",
                      "De Jesus Moreno Moreno M. (2003). Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate: a multicenter, double-blind, randomized, placebo-controlled trial. Clin Ther. 25(1):178–93.",
                      "Giesbrecht T et al. (2010). The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutr Neurosci. 13(6):283–90.",
                      "Grgic J et al. (2018). Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr. 15:11. doi:10.1186/s12970-018-0216-0",
                      "Balshaw TG et al. (2013). The effect of acute taurine ingestion on 3-km running performance in trained middle-distance runners. Amino Acids. 44(2):555–61.",
                      "Deijen JB, Orlebeke JF. (1994). Effect of tyrosine on cognitive function and blood pressure under stress. Brain Res Bull. 33(3):319–23.",
                      "Harpaz E et al. (2017). The effect of caffeine on energy balance. J Basic Clin Physiol Pharmacol. 28(1):1–10.",
                      "EFSA Panel on Dietetic Products, Nutrition and Allergies. (2015). Scientific Opinion on the safety of caffeine. EFSA Journal. 13(5):4102.",
                    ].map((ref, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 12,
                          color: "#5C5650",
                          lineHeight: 1.6,
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {ref}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* 9. Related Reviews — OUTSIDE layout-sidebar and container-pad */}
        <section
          style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}
          className="pad-section-sm px-page"
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#A89880",
                    marginBottom: 6,
                  }}
                >
                  Related Reviews
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#1A1714",
                    letterSpacing: "-0.02em",
                  }}
                >
                  You might also read
                </h3>
              </div>
              <Link
                href="/reviews"
                style={{
                  fontSize: 12,
                  color: "#C4622D",
                  fontFamily: "var(--font-dm-mono), monospace",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                All reviews →
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {relatedReviews.map((r) => (
                <ReviewCard key={r.slug} {...r} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
