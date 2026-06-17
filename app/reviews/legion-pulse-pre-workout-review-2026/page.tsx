import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, ShieldCheck, Star, Plus, Minus } from "lucide-react";
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
  title: "Legion Pulse Pre-Workout Review (2026) — 9/10",
  description:
    "We put Legion Pulse to the test — ingredients, energy, pumps, and side effects all covered. See if this stimulant-based pre-workout is worth your money before buying.",
  alternates: { canonical: "/reviews/legion-pulse-pre-workout-review-2026" },
  openGraph: {
    title: "Legion Pulse Pre-Workout Review (2026) — 9/10",
    description:
      "6 clinically dosed ingredients, zero proprietary blends, Labdoor certified. The 1:1 caffeine-to-theanine ratio is unique — full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/legion-pulse-pre-workout-review-2026",
    type: "article",
  },
};

// ─── TOC ─────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is Legion Pulse?" },
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
      score: 9.0,
      notes:
        "Six active ingredients, every one at or above the clinical threshold. The standout is the 1:1 caffeine-to-theanine ratio (350mg:350mg) — virtually no other mainstream pre-workout matches the theanine dose relative to caffeine. 8,000mg citrulline malate (Pérez-Guisado & Jakeman, 2010), 3,600mg CarnoSyn® beta-alanine (Hobson et al., 2012), 2,500mg betaine (Trepanowski et al., 2011), 300mg Alpha-GPC. No creatine (deliberate — sold separately as Recharge). No proprietary blends. No artificial sweeteners, dyes, or flavours.",
    },
    {
      pillar: "transparency",
      score: 9.5,
      notes:
        "Full individual disclosure of every ingredient with exact milligram quantities. Legion publishes the research citations behind each dose directly on their product page — 54 peer-reviewed studies are linked. The company explicitly explains why each ingredient is included and at what dose. The transparency here is editorial, not just label-level — a meaningful differentiator from brands that list doses without context.",
    },
    {
      pillar: "verification",
      score: 8.5,
      notes:
        "Labdoor certified — independent ISO 17025 accredited third-party testing for purity, potency, and banned substances. Labdoor differs from Informed Choice in that it also tests for label accuracy (actual vs claimed ingredient doses) and publishes numerical scores. No recalls or FDA adverse event reports as of May 2026. Not Informed Sport certified — a minor gap for UK/Commonwealth competitive athletes who specifically require that programme.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "At approximately $2.25/serving for 30 servings ($67.50), Legion Pulse is the most expensive pre-workout in this comparison group. The cost is higher than BULK Black ($2.00) and significantly above C4 ($1.00). The premium is partially justified by clinically matched doses, CarnoSyn® patented beta-alanine, natural sweetening overhead, and Labdoor testing costs. Half-scoop dosing is available but less practical given the 22.76g scoop size. Availability in USA is limited and expensive.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "20 flavours — the widest selection in this category. All naturally sweetened with no artificial dyes or flavours. Mixability is excellent; the powder dissolves completely in 10–12 oz. The taste profile is notably cleaner than sucralose-sweetened competitors, though the natural sweetness is less intense. The large two-scoop serving (22.76g) requires adequate water. The caffeine-free Pulse Stim-Free version uses the same formula minus caffeine and theanine — genuinely useful for those who want the pump and endurance benefits without stimulants.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "1:1 caffeine-to-theanine ratio (350mg each)",
      detail:
        "No mainstream pre-workout we have reviewed matches the 350mg theanine dose. At 1:1, the focus quality is markedly different from the standard 200mg theanine in most competitors.",
    },
    {
      type: "green",
      label: "Labdoor certified — label accuracy tested",
      detail:
        "Labdoor tests both purity (no contaminants) and potency (actual ingredient amounts vs label claims). This double-layer testing is more stringent than brand-level certificate of analysis.",
    },
    {
      type: "green",
      label: "Zero artificial ingredients — everything",
      detail:
        "No artificial sweeteners (uses erythritol and stevia), no artificial flavours, no artificial dyes. The most comprehensively natural formula in the high-stim pre-workout category.",
    },
    {
      type: "green",
      label: "CarnoSyn® patented beta-alanine",
      detail:
        "CarnoSyn® is the only form of beta-alanine with direct GMP certification and the most clinical trial data. Generic beta-alanine may vary in purity; CarnoSyn® removes that uncertainty.",
    },
    {
      type: "green",
      label: "Caffeine-free version available",
      detail:
        "Pulse Stim-Free retains all six non-caffeine ingredients at identical doses — one of the very few stim-free products that does not cut corners on the ergogenic formula.",
    },
    {
      type: "red",
      label: "350mg caffeine — high for general users",
      detail:
        "At 350mg single-source caffeine (PurCaf® organic green coffee), this is 87.5% of EFSA's 400mg daily safe upper limit in one serving. Caffeine-naive users and light caffeine consumers should start at one scoop (175mg).",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "No creatine — requires separate supplementation",
      detail:
        "Legion deliberately sells creatine separately (Recharge). For users who want creatine in their pre-workout stack, this is an additional purchase and logistical step.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "Most expensive per serving in this category",
      detail:
        "At ~$2.25/serving, Pulse is $0.25/serving more than BULK Black and nearly double the cost of C4. Over a year of daily use, the premium adds up to roughly $90 more than BULK Black.",
      deduction: 0.2,
    },
  ],
  claimAudit: [
    {
      claim: '"All natural — no artificial sweeteners, flavors, food dyes, or fillers"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Sweetened with erythritol and stevia extract. Natural flavours derived from fruit. No sucralose, Ace-K, aspartame, Yellow #5, or Red #40. Claim verified on current label and Labdoor analysis.",
    },
    {
      claim: '"Clinically effective doses of every ingredient"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "8g citrulline malate (clinical range 6–8g per Pérez-Guisado & Jakeman, 2010), 3.6g beta-alanine (clinical range 3.2–6.4g per Hobson et al., 2012 meta-analysis), 2.5g betaine (clinical range 2.5g per Trepanowski et al., 2011), 350mg caffeine (3–6mg/kg for 58–117kg individual), 350mg theanine (at or above the 2:1 theanine:caffeine evidence threshold), 300mg Alpha-GPC (functional range 200–600mg). All six match or exceed the minimum effective dose from the primary cited trial.",
    },
    {
      claim: '"Enhances every type of workout — strength, cardio, HIIT, and endurance"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Citrulline and beta-alanine are well-evidenced for endurance and HIIT contexts. Caffeine and alpha-GPC support strength and focus. However, no pre-workout ingredient has strong RCT evidence specifically for improving pure maximal strength (1RM) acutely in trained athletes — caffeine has moderate evidence, alpha-GPC has emerging evidence. The claim is broadly defensible but overstated for the strength context.",
    },
    {
      claim: '"No jitters or crash"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "The 350mg L-theanine at a 1:1 ratio with caffeine is a genuine differentiator — Giesbrecht et al. (2010) found that the theanine:caffeine combination significantly reduces jitteriness and subjective anxiety versus caffeine alone. However, at 350mg total caffeine, some users with lower tolerance will still experience jitteriness regardless of theanine co-administration. The claim is accurate for most users at this dose but not universal.",
    },
    {
      claim: '"Tested by a third-party lab certified to ISO 17025 standards"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Labdoor operates ISO 17025 accredited laboratory testing and independently purchases products from retail channels. Their testing verifies both contaminant absence and label accuracy (actual vs claimed doses). This is a verifiable, accurate claim.",
    },
    {
      claim: '"54 peer-reviewed scientific studies support the effectiveness"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Legion publishes a full reference list on their website. The studies cited are real and relevant — however, many support individual ingredients at various doses, not the specific Pulse formula as a whole. 'Support the effectiveness' is broadly accurate for each ingredient independently; a combined formula RCT for Pulse specifically does not exist. This is standard in the supplement industry but worth noting.",
    },
  ],
  valueMetric: {
    pricePerServing: 2.25,
    primaryActiveGrams: 8.0,
    pricePerGramActive: 0.28,
    categoryAvgPricePerGram: 0.19,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much caffeine is in Legion Pulse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legion Pulse (caffeinated version) contains 350mg of caffeine per two-scoop serving, sourced from PurCaf® organic green coffee. One scoop provides 175mg. This is a high-stimulant dose — approximately four cups of brewed coffee. The Pulse Stim-Free version contains zero caffeine and uses the same ergogenic formula without the stimulant stack.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Legion Pulse and BULK Black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both have six or more clinically dosed ingredients with zero proprietary blends. Key differences: Pulse uses 350mg L-theanine (vs 200mg in BULK Black) — a meaningful advantage for focus quality. BULK Black adds Alpha-GPC at 300mg, L-tyrosine at 1,000mg, and dual-phase caffeine via Infinergy, giving it a stronger nootropic stack. Pulse is Labdoor certified; BULK Black holds Informed Choice. Pulse is slightly more expensive at $2.25/serving vs $2.00. BULK Black is the better pick for drug-tested athletes; Pulse wins on natural ingredients and theanine dose.",
      },
    },
    {
      "@type": "Question",
      name: "Is Legion Pulse safe for drug-tested athletes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Labdoor testing confirms the absence of banned substances and verifies label accuracy. However, for athletes governed by WADA, USADA, or UK Anti-Doping who specifically require Informed Sport or Informed Choice certification, Legion Pulse does not hold those certifications. For most competitive contexts, Labdoor testing is sufficient; for the strictest programme requirements, consider Transparent Labs BULK Black (Informed Choice) or Legion Pulse Stim-Free (also Labdoor certified).",
      },
    },
    {
      "@type": "Question",
      name: "Why does Legion Pulse use 350mg of L-theanine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most pre-workouts use 100–200mg of L-theanine alongside 200–300mg of caffeine, giving a 1:2 or 1:1.5 theanine-to-caffeine ratio. Legion matches theanine to caffeine at 1:1 (350mg:350mg). At this ratio, Giesbrecht et al. (2010, Nutritional Neuroscience) found the combination significantly outperforms caffeine alone on sustained attention and reaction time, while reducing subjective jitteriness. The higher theanine dose is the formula's most distinctive and evidence-grounded decision.",
      },
    },
    {
      "@type": "Question",
      name: "Does Legion Pulse cause the beta-alanine tingle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At 3,600mg of beta-alanine per serving, paresthesia — the harmless tingling or flushing sensation — is virtually guaranteed for new users and common even in experienced ones. This is a benign pharmacological effect of beta-alanine activating sensory nerve receptors. It diminishes over 2–4 weeks of daily supplementation as carnosine loading occurs. Starting at one scoop (1,800mg) reduces the intensity significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What flavours does Legion Pulse come in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legion Pulse is available in 20 flavours as of 2026, including Fruit Punch, Blue Raspberry, Tropical Punch, Peach Ring, Watermelon, Green Apple, Sour Apple, Cotton Candy, Strawberry Lemonade, Arctic Blast, and several others. All flavours are naturally sweetened and flavoured — no artificial dyes or sweeteners. Fruit Punch and Blue Raspberry are the most consistently well-rated by users.",
      },
    },
    {
      "@type": "Question",
      name: "Is Legion Pulse available in USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legion Pulse is available on Amazon.in through authorised importers at approximately ₹5,800–₹7,200 per tub (30 servings) depending on the retailer and current duties, compared to $67.50 in the US. The premium is significant. American consumers who want a comparable formula at lower cost should consider Transparent Labs BULK (Informed Choice, $49.99 US) or, domestically, MusclePharm Assault as a budget option.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Legion Pulse every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legion states their product can be used daily. However, daily use of 350mg caffeine will accelerate tolerance development, requiring progressively higher doses for the same stimulant effect. Most users benefit from 5 days on / 2 days off cycling, or a periodic 1–2 week caffeine break every 6–8 weeks. The pump and endurance ingredients (citrulline, beta-alanine, betaine) can be taken daily without cycling — only the caffeine requires attention.",
      },
    },
  ],
};

// ─── REVIEW SCHEMA ────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/legion-pulse-pre-workout-review-2026#review",
  name: "Legion Pulse Pre-Workout — Fitlabreviews FSP Review",
  reviewBody:
    "Comprehensive evidence-led review of Legion Pulse Pre-Workout using the Fitlab Scoring Protocol (FSP v2.1). Covers all six active ingredients against clinical evidence, Labdoor certification, the 1:1 caffeine-to-theanine formula rationale, and comparative positioning against Transparent Labs BULK Black, C4, and Gorilla Mode.",
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
    name: "Legion Pulse Pre-Workout",
    brand: { "@type": "Brand", name: "Legion Athletics" },
    category: "Pre-Workout Supplement",
    description:
      "Clinically dosed, all-natural high-stimulant pre-workout with 350mg caffeine, 350mg L-theanine, 8g citrulline malate, and Labdoor third-party certification.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "67.50",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4o4r29e",
    },
  },
};

// ─── RELATED REVIEWS ──────────────────────────────────────────────────────────

const relatedReviews = [
  {
    slug: "transparent-labs-bulk-black-review",
    title: "Transparent Labs BULK Black",
    brand: "Transparent Labs",
    category: "Pre-Workout",
    rating: 9 as ReviewRating,
    verdict: "The closest competitor to Pulse — stronger nootropic stack, Informed Choice certified, $0.25/serving cheaper. The top pick for tested athletes.",
    publishedAt: "2026-05-29",
    figNumber: "REV-2026-050",
  },
  {
    slug: "musclepharm-assault-pre-workout",
    title: "MusclePharm Assault Pre-Workout",
    brand: "MusclePharm",
    category: "Pre-Workout",
    rating: 7 as ReviewRating,
    verdict: "Budget-friendly pre-workout with adequate formula — under-dosed citrulline at 3g is the major gap vs clinical evidence.",
    publishedAt: "2025-03-22",
    figNumber: "05",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Since Pulse skips creatine, pair it with this. Pure monohydrate at the best price-per-gram available.",
    publishedAt: "2025-03-08",
    figNumber: "02",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LegionPulseReview() {
  return (
    <>
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
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/reviews" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Reviews</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/category/pre-workout" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Pre-Workout</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Legion Pulse</span>
          </div>
        </div>

        {/* 2. Feature Banner */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #0A1220 0%, #060C18 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, width: 200, height: 270, alignItems: "flex-end", justifyContent: "center" }}>
            <Image
              src="/products/legion-pulse-preworkout.webp"
              alt="Legion Pulse Pre-Workout"
              width={200}
              height={270}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 40px rgba(212,169,106,0.45))" }}
              priority
            />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 44, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-051 · PRE-WORKOUT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Legion Athletics
              <br />
              <em style={{ fontWeight: 400, color: "#D4A96A" }}>Pulse Pre-Workout</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6,7,8,9].map((s) => <Star key={s} size={14} fill="#D4A96A" color="#D4A96A" />)}
                <Star size={14} fill="none" color="#D4A96A" />
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>9 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* 3. Hero Row */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-051</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A96A", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Labdoor Verified</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>Legion Athletics · Pre-Workout · High-Stimulant</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Pulse Pre-Workout
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>The 350mg Theanine Formula: Worth $67 in 2026?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Six ingredients, every one at clinical dose. The formula is deliberately simple — Legion
                argues that six ingredients done right beats twenty done cheaply. The 1:1
                caffeine-to-theanine ratio is the most distinctive dosing decision in the{" "}
                <Link href="/category/pre-workout" style={{ color: "#D4A96A", textDecoration: "none" }}>pre-workout category</Link>.
                Whether it justifies $2.25/serving is the question this review answers.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://amzn.to/4o4r29e" target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Buy on Amazon <ExternalLink size={13} />
                </a>
                <Link href="/methodology"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {composite.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category", value: "High-Stim Pre-Workout" },
            { label: "Serving Size", value: "22.76g / 2 scoops" },
            { label: "Servings / Tub", value: "30" },
            { label: "Published", value: "May 29, 2026" },
            { label: "Last Updated", value: "May 29, 2026" },
          ]} />
        </div>

        {/* 5. Author Box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #D4C9B8, #D4A96A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#1A1714", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>
                Reviewed by the full team ·{" "}
                <Link href="/authors" style={{ color: "#D4A96A", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* 6. Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links on this page may earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#D4A96A", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 8. Main Content + Sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* ─── § 1. QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>FSP Quick Verdict</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.02em" }}>
                    The cleanest high-stim pre-workout available.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>
                      The 1:1 theanine ratio is a genuine differentiator. The price is a real trade-off.
                    </em>
                  </h2>
                  <p style={{ fontSize: 14, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 20 }}>
                    Legion built Pulse on a simple premise: six ingredients, all at clinical dose, nothing
                    artificial. Where most pre-workouts add L-theanine as an afterthought at 100–150mg,
                    Pulse puts it at 350mg — matching caffeine at a 1:1 ratio. The subjective difference
                    is real. The focus quality is different from any caffeine-only product. You get the
                    energy without the edge. The pump from 8g citrulline and the endurance from 3.6g
                    CarnoSyn® beta-alanine are category-standard. At $2.25/serving, you are paying for the
                    formulation philosophy and the natural ingredients sourcing. If that premium fits your
                    budget, Pulse is the most thoughtfully built pre-workout in this price range.
                  </p>
                  <div className="review-pillar-grid">
                    {rubric.pillars.map((p) => (
                      <div key={p.pillar} style={{ padding: "12px 14px", backgroundColor: "rgba(242,235,217,0.04)", borderRadius: 8, border: "1px solid rgba(212,201,184,0.12)", minWidth: 0 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>{p.pillar}</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#D4A96A", lineHeight: 1 }}>{p.score.toFixed(1)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
                  <div style={{ background: "linear-gradient(145deg, #0A1220 0%, #060C18 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(212,169,106,0.15)", border: "1px solid rgba(212,169,106,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4A96A" }}>
                      <ShieldCheck size={10} /> Labdoor Certified
                    </span>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <Image src="/products/legion-pulse-preworkout.webp" alt="Legion Pulse Pre-Workout" width={160} height={200} style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(212,169,106,0.4))", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Legion Athletics</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Pulse Pre-Workout</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: "9/10", label: "FSP Score" }, { val: "350mg", label: "Caffeine" }, { val: "8,000mg", label: "Citrulline" }].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#D4A96A", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>~$67.50</p>
                      </div>
                      <a href="https://amzn.to/4o4r29e" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── § 2. WHAT IS LEGION PULSE? ──────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Legion Pulse?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Legion Pulse is the flagship pre-workout from Legion Athletics, a US supplement brand
                  founded by Mike Matthews. Legion built its reputation on a specific claim: that most
                  supplement companies hide ineffective doses behind proprietary blends, and that a
                  shorter formula at honest doses outperforms a longer one built around marketing
                  ingredient lists. Pulse is the product that proves or disproves that thesis.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The formula has six active ingredients in the caffeinated version:{" "}
                  <Link href="/ingredients/citrulline" style={{ color: "#D4A96A", textDecoration: "none", fontWeight: 600 }}>citrulline malate</Link>,{" "}
                  <Link href="/ingredients/beta-alanine" style={{ color: "#D4A96A", textDecoration: "none", fontWeight: 600 }}>beta-alanine</Link>,{" "}
                  betaine anhydrous,{" "}
                  <Link href="/ingredients/caffeine" style={{ color: "#D4A96A", textDecoration: "none", fontWeight: 600 }}>caffeine</Link>,{" "}
                  L-theanine, and Alpha-GPC. Every dose matches or exceeds the primary efficacy trial for
                  that ingredient. Nothing else is in the active blend. No fillers, no token doses to pad
                  the ingredient list, no artificial dyes, no proprietary matrix.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                  The caffeine-free version (Pulse Stim-Free) retains all four non-stimulant ingredients
                  at identical doses — genuinely useful for athletes who want the{" "}
                  <Link href="/goals/endurance" style={{ color: "#D4A96A", textDecoration: "none" }}>endurance</Link> and{" "}
                  pump benefits without stimulants, or who train in the evening. Compare this to most
                  stim-free products, which simply strip everything that costs money along with the
                  caffeine.
                </p>
                <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, borderLeft: "3px solid #D4A96A" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D4A96A", marginBottom: 6 }}>Who is Legion Pulse for?</p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>
                    Lifters who have been burned by under-dosed pre-workouts and want to know exactly what
                    they are taking and why. Athletes who care about natural ingredients and refuse
                    artificial sweeteners. Anyone who trains in contexts where jitteriness impairs
                    performance — the high theanine dose genuinely helps. Not appropriate for caffeine-naive
                    users or anyone training within 6 hours of sleep.
                  </p>
                </div>
              </section>

              {/* ─── § 3. SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>FSP v2.1 weights: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%</p>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-051" />
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 16, lineHeight: 1.6, padding: "12px 16px", backgroundColor: "#EDE8DF", borderRadius: 8 }}>
                  Composite FSP score: <strong>{composite.toFixed(1)}/10</strong>. Editorial score: <strong>9/10</strong>. The value pillar (6.5) is the honest limit of this review. The formula and transparency pillars are near-perfect. The price premium is real — whether it is justified depends on how much you value natural ingredients sourcing and the higher theanine dose.
                </p>
              </section>

              {/* ─── § 4. FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red &amp; Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── § 5. SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
                  Two scoops (22.76g) per serving. 30 servings per container. Mix with 10–12 oz of water
                  15–30 minutes before training. Half-scoop (one scoop) assessment dose recommended for
                  new users.
                </p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", width: "28%" }}>Amount / Serving</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", width: "30%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "L-Citrulline DL-Malate 2:1", amount: "8,000 mg", clinical: "6,000–8,000 mg", dosed: true },
                        { name: "CarnoSyn® Beta-Alanine", amount: "3,600 mg", clinical: "3,200–6,400 mg", dosed: true },
                        { name: "Betaine Anhydrous", amount: "2,500 mg", clinical: "2,500 mg", dosed: true },
                        { name: "Caffeine (PurCaf® Organic)", amount: "350 mg", clinical: "3–6 mg/kg", dosed: true },
                        { name: "L-Theanine", amount: "350 mg", clinical: "100–400 mg", dosed: true },
                        { name: "Alpha-GPC (50%)", amount: "300 mg", clinical: "200–600 mg", dosed: true },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#1A1714", fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>{row.clinical}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Sweetener: erythritol + stevia extract. Natural flavours only. No artificial dyes,
                  no sucralose, no Ace-K. Gluten-free. Non-GMO.
                </p>
              </section>

              {/* ─── § 6. INGREDIENT BREAKDOWN ───────────────────────────────────── */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 28 }}>
                  Six ingredients. No filler. Here is what each one does and why the dose matters — with
                  the primary research cited. For deeper reading on any single ingredient, our{" "}
                  <Link href="/ingredients" style={{ color: "#D4A96A", textDecoration: "none" }}>ingredient database</Link>{" "}
                  has full breakdowns.
                </p>

                {[
                  {
                    name: "L-Citrulline DL-Malate 2:1 — 8,000mg",
                    link: "/ingredients/citrulline",
                    evidence: "strong" as EvidenceLevel,
                    body: "The foundational pump and endurance ingredient. Citrulline is absorbed in the intestine and converted to arginine in the kidneys — bypassing the gut degradation that makes direct arginine supplementation largely ineffective. Higher arginine drives nitric oxide synthase, producing vasodilation and improved blood flow to working muscle. Pérez-Guisado and Jakeman (2010, Journal of Strength and Conditioning Research) found 8g of citrulline malate increased bench press repetitions to failure by 52.9% and reduced 24-hour soreness by 40% versus placebo. At 8,000mg, Legion hits the top of the evidence-based clinical range.",
                  },
                  {
                    name: "CarnoSyn® Beta-Alanine — 3,600mg",
                    link: "/ingredients/beta-alanine",
                    evidence: "strong" as EvidenceLevel,
                    body: "Beta-alanine combines with histidine in skeletal muscle to form carnosine, which buffers hydrogen ion accumulation during high-intensity effort — the primary driver of the burning, fatigue-inducing drop in muscle pH during sets lasting 60–240 seconds. Hobson et al. (2012, Amino Acids) meta-analysed 15 studies and confirmed significant improvement in exercise capacity at this time domain. CarnoSyn® is the only form with GMP manufacturing certification and direct clinical trial backing. The 3,600mg dose sits at the lower end of the effective range (3.2–6.4g) — adequate, but BULK Black's 4,000mg provides a marginally larger buffer.",
                  },
                  {
                    name: "Betaine Anhydrous — 2,500mg",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    body: "Betaine (trimethylglycine) is an osmolyte sourced from beets. It supports cellular hydration under osmotic stress during training, donates methyl groups in homocysteine metabolism, and has been associated with improved power output and endurance at 2.5g/day. Trepanowski et al. (2011, Journal of the International Society of Sports Nutrition) found 2.5g daily for six weeks improved muscle endurance. The dose here matches the primary efficacy study exactly.",
                  },
                  {
                    name: "Caffeine (PurCaf® Organic) — 350mg",
                    link: "/ingredients/caffeine",
                    evidence: "strong" as EvidenceLevel,
                    body: "PurCaf® is sourced from organic green coffee beans — functionally identical to caffeine anhydrous at the same dose but with certified organic sourcing. At 350mg, this sits at 4.9mg/kg for a 71kg individual — within the 3–6mg/kg evidence-based range (Grgic et al., 2018, British Journal of Sports Medicine meta-analysis). The critical difference from competitors: this is single-source caffeine without a slow-release component. The peak energy curve is sharper than BULK Black's dual-phase system, making timing more important — take exactly 20–30 minutes before training, not earlier.",
                  },
                  {
                    name: "L-Theanine — 350mg",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    body: "This is the formula's signature decision. Standard pre-workout theanine dosing is 100–200mg — a 1:2 or 1:1.5 ratio with caffeine. Pulse matches theanine to caffeine at 1:1. Giesbrecht et al. (2010, Nutritional Neuroscience) found the combined caffeine + L-theanine significantly outperformed caffeine alone on sustained attention, reaction time, and working memory, while subjective jitteriness scores were significantly lower. At 350mg, Pulse commits to the highest practical theanine dose available in any mass-market pre-workout. The result is a qualitatively different focus experience — calm, deliberate, and sustained rather than sharp and electric.",
                  },
                  {
                    name: "Alpha-GPC (50%) — 300mg",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    body: "Alpha-glycerylphosphorylcholine is a bioavailable choline precursor that crosses the blood-brain barrier, raising acetylcholine synthesis. De Jesus Moreno Moreno (2003, Clinical Therapeutics) demonstrated cognitive improvement at higher clinical doses. In a workout context, the primary mechanism is improved mind-muscle connection and motor pattern execution — most noticeable on isolation exercises and technical lifts. The 300mg of 50% concentrated Alpha-GPC delivers 150mg of active Alpha-GPC, slightly below the aggressive 400–600mg active range used in some trials, but functional for acute focus support.",
                  },
                ].map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #EDE8DF", borderRadius: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ing.link ? (
                          <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link>
                        ) : ing.name}
                      </p>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* ─── § 7. LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab &amp; Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
                  {[
                    { cert: "Labdoor Certified", status: "Active", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "ISO 17025 accredited independent testing. Verifies both purity (no contaminants) and potency (actual mg vs label claims). Publicly scores each ingredient." },
                    { cert: "Label Accuracy Tested", status: "Verified", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "Labdoor uniquely verifies that actual ingredient quantities match the label — not just that the product is free of contaminants. This is a stronger assurance than COA alone." },
                    { cert: "Informed Choice / Informed Sport", status: "Not Held", colour: "#8B7355", bg: "rgba(139,115,85,0.06)", border: "rgba(139,115,85,0.2)", detail: "Legion holds Labdoor, not Informed Choice. For most athletes, Labdoor is equivalent. Athletes competing under WADA who require specifically Informed Choice should note this gap." },
                    { cert: "FDA MedWatch Alerts", status: "None on file", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "No adverse event reports or recall notices for Legion Pulse as of May 2026. Clean regulatory record across the product's history." },
                  ].map((item) => (
                    <div key={item.cert} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.cert}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: item.colour, marginBottom: 10 }}>{item.status}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 8. CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Marketing claims from the Legion Pulse product page, assessed against peer-reviewed evidence.</p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── § 9. HOW TO TAKE IT ─────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { step: "New User Protocol (Week 1)", protocol: "1 scoop in 8–10 oz water", recommended: true, timing: "15–30 min pre-training", notes: "One scoop delivers 175mg caffeine, 4g citrulline malate, 1.8g beta-alanine. Adequate for most people's first assessment. At this dose the beta-alanine tingle is manageable and caffeine is equivalent to two cups of coffee." },
                    { step: "Standard Protocol (Week 2+)", protocol: "2 scoops in 12–14 oz water", recommended: true, timing: "15–30 min pre-training", notes: "Progress to two scoops once you know your tolerance. More water improves taste and slows absorption slightly. Do not take on an empty stomach if you are prone to GI sensitivity." },
                    { step: "Training Timing", protocol: "Morning or early afternoon only", recommended: true, timing: "No later than 4–5 hours before sleep", notes: "At 350mg single-source caffeine, the half-life means significant residual caffeine for 5–6 hours. Evening training after 5pm risks meaningful sleep disruption — switch to Pulse Stim-Free for late sessions." },
                    { step: "Pair With Creatine", protocol: "3–5g creatine monohydrate separately", recommended: false, timing: "Anytime — timing is not critical", notes: "Legion deliberately excludes creatine from Pulse. Take 3–5g of a standalone creatine monohydrate (see our review of the best creatine options) at a separate time of day to complete the performance stack." },
                  ].map((row) => (
                    <div key={row.step} style={{ padding: "18px 20px", border: `1px solid ${row.recommended ? "rgba(45,106,79,0.2)" : "#D4C9B8"}`, borderRadius: 10, backgroundColor: row.recommended ? "rgba(45,106,79,0.03)" : "#F8F2E4" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.step}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#D4A96A" }}>{row.protocol}</p>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          {row.recommended && <span style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.1)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>Recommended</span>}
                          <span style={{ padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.timing}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{row.notes}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 10. COMPARISON ────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>
                  Pre-workouts with full label disclosure only. Prices verified May 2026. See our{" "}
                  <Link href="/best/pre-workout" style={{ color: "#D4A96A", textDecoration: "none" }}>best pre-workout roundup</Link>{" "}
                  for the full category ranking.
                </p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 660, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Caffeine", "Citrulline", "Theanine", "3rd-Party", "Price/Serving", "Artificial"].map((h) => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Legion Pulse ★", caffeine: "350mg", citrulline: "8,000mg CM", theanine: "350mg", cert: "Labdoor", price: "$2.25", art: "None", highlight: true },
                        { name: "TL BULK Black", caffeine: "305mg (dual)", citrulline: "8,000mg CM", theanine: "200mg", cert: "Informed Choice", price: "$2.00", art: "None", highlight: false },
                        { name: "Gorilla Mode", caffeine: "350mg", citrulline: "9,000mg L-Cit", theanine: "None", cert: "None", price: "$1.66", art: "Some", highlight: false },
                        { name: "C4 Extreme", caffeine: "200mg", citrulline: "1,500mg", theanine: "None", cert: "Informed Choice", price: "$1.00", art: "Yes", highlight: false },
                        { name: "MusclePharm Assault", caffeine: "200mg", citrulline: "3,000mg", theanine: "None", cert: "None", price: "$0.75", art: "Yes", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: row.highlight ? "rgba(212,169,106,0.08)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: row.highlight ? "#D4A96A" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>{row.name}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace" }}>{row.caffeine}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace" }}>{row.citrulline}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.theanine !== "None" ? "#2D6A4F" : "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: row.theanine !== "None" ? 700 : 400 }}>{row.theanine}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.cert !== "None" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700 }}>{row.price}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.art === "None" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace" }}>{row.art}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  CM = Citrulline Malate. L-Cit = L-Citrulline base. Theanine column empty means the ingredient is absent from that formula.
                  Pulse is the only product here with 350mg theanine — a genuinely unique formulation position.
                  For the{" "}
                  <Link href="/reviews/transparent-labs-bulk-black-review" style={{ color: "#D4A96A", textDecoration: "none" }}>BULK Black vs Pulse comparison</Link>{" "}
                  in depth, read our full BULK Black review.
                </p>
              </section>

              {/* ─── § 11. PRODUCTS AT A GLANCE ──────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                  <ProductCard name="Pulse Pre-Workout" brand="Legion Athletics" category="High-Stim Pre-Workout" score={9} priceUSD="~$67.50 / 30 servings" priceINR="₹5,800–₹7,200" tags={["Labdoor", "350mg Theanine", "No Artificial"]} buyUrl="https://amzn.to/4o4r29e" buyLabel="Check Price" reviewSlug="legion-pulse-pre-workout-review-2026" image="legion-pulse-preworkout.webp" bgFrom="#0A1220" bgTo="#060C18" accent="#D4A96A" featured={true} />
                  <ProductCard name="BULK Black Pre-Workout" brand="Transparent Labs" category="High-Stim Pre-Workout" priceUSD="$59.99 / 30 servings" priceINR="₹5,200–₹6,500" tags={["Informed Choice", "305mg Caffeine", "Nootropic Stack"]} buyUrl="https://amzn.to/3RPRlnm" buyLabel="Check Price" reviewSlug="transparent-labs-bulk-black-review" image="tl-bulk-black-preworkout.webp" bgFrom="#1A0A06" bgTo="#0D0402" accent="#C4622D" />
                  <ProductCard name="Gorilla Mode Pre-Workout" brand="Gorilla Mind" category="High-Stim Pre-Workout" priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["350mg Caffeine", "9g L-Citrulline", "No Prop Blend"]} buyUrl="https://amzn.to/gorilla-mode" buyLabel="Check Price" image="gorilla-mode-preworkout.webp" bgFrom="#0A1A0A" bgTo="#060E06" accent="#2D6A4F" />
                  <ProductCard name="C4 Original Pre-Workout" brand="Cellucor" category="Pre-Workout" priceUSD="~$1.00 / serving" priceINR="₹1,500–₹2,000" tags={["200mg Caffeine", "Informed Choice", "Budget"]} buyUrl="https://amzn.to/c4-original" buyLabel="Check Price" image="c4-original-preworkout.webp" bgFrom="#1A1A2E" bgTo="#11111E" accent="#3A5F8B" />
                </div>
              </section>

              {/* ─── § 12. PROS & CONS ───────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "350mg L-theanine at 1:1 with caffeine — genuinely unique in this category",
                    "All six ingredients at clinical doses — no token inclusions",
                    "Zero artificial sweeteners, flavours, or dyes — fully natural",
                    "CarnoSyn® patented beta-alanine with GMP certification",
                    "Labdoor testing verifies both purity and label accuracy",
                    "20 flavours — widest selection in the pre-workout category",
                    "Stim-free version retains full ergogenic formula at identical doses",
                    "54 referenced peer-reviewed studies cited on the product page",
                  ]}
                  cons={[
                    "350mg single-source caffeine — higher jitter risk than dual-phase systems for some users",
                    "Most expensive pre-workout in this comparison at $2.25/serving",
                    "No creatine — requires separate supplementation",
                    "Beta-alanine paresthesia is significant at full dose for new users",
                    "Not Informed Choice certified — minor gap for UK/Commonwealth tested athletes",
                    "Natural sweetness is less intense than sucralose — splits user opinion",
                  ]}
                />
              </section>

              {/* ─── § 13. SAFETY ────────────────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety &amp; Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Caffeine (350mg — single source)", icon: "⚡", risk: "moderate", body: "EFSA's safe daily upper limit is 400mg. At 350mg per serving, Pulse leaves 50mg headroom from all other dietary sources — essentially none. Users who drink coffee daily should consider whether adding 350mg of caffeine on top of their habitual intake is appropriate. The 1:1 theanine ratio partially mitigates jitteriness, but does not reduce cardiovascular effects of caffeine (heart rate elevation, blood pressure increase). Not appropriate for pregnant women, those with cardiovascular conditions, anxiety disorders, or anyone taking medications that interact with caffeine." },
                    { title: "Beta-Alanine Paresthesia", icon: "🔴", risk: "low", body: "At 3,600mg, the tingling or flushing sensation is expected and benign. It results from beta-alanine activating sensory MrgprD receptors (Shinohara et al., 2008). The sensation diminishes with 2–4 weeks of consistent daily supplementation as carnosine stores load. One-scoop dosing (1,800mg) reduces the intensity substantially for first-time users." },
                    { title: "Erythritol Sweetener", icon: "✓", risk: "low", body: "Erythritol is a sugar alcohol with a clean safety profile. Unlike other sugar alcohols (sorbitol, xylitol), erythritol is largely absorbed before the large intestine, producing minimal GI distress at typical supplement doses. One recent observational study (Witkowski et al., 2023, Nature Medicine) flagged a potential cardiovascular signal at high habitual dietary erythritol intake — this is from dietary sources at much higher quantities than supplement use. At supplement doses in Pulse, no adverse effect has been established." },
                    { title: "Not Appropriate For", icon: "🚫", risk: "high", body: "Not appropriate for individuals under 18, pregnant or nursing women, anyone with cardiovascular disease or uncontrolled hypertension, individuals sensitive to stimulants, those on MAOI antidepressants, or anyone training within 6 hours of intended sleep time. The Stim-Free version removes all these caffeine-related contraindications." },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 20px", backgroundColor: item.risk === "high" ? "rgba(139,58,44,0.06)" : item.risk === "moderate" ? "rgba(139,115,85,0.06)" : "#F8F2E4", border: `1px solid ${item.risk === "high" ? "rgba(139,58,44,0.2)" : item.risk === "moderate" ? "rgba(139,115,85,0.2)" : "#EDE8DF"}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>{item.icon} {item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 14. VALUE ─────────────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price &amp; Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="citrulline malate" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 24 }}>
                  {[
                    { option: "Full 2-scoop serving (30 sessions)", price: "~$67.50 ($2.25/serving)", note: "Standard protocol for experienced users" },
                    { option: "Half 1-scoop serving (60 sessions)", price: "~$67.50 ($1.13/serving)", note: "Good value option for caffeine-sensitive users" },
                    { option: "LegionAthletics.com Direct", price: "Subscribe & save available", note: "Loyalty points programme; auto-ship discount" },
                    { option: "Amazon.in (USA)", price: "₹5,800–₹7,200 / tub", note: "Prices verified May 2026. Significant import premium." },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{row.option}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#D4A96A", marginBottom: 4 }}>{row.price}</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>{row.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 15. WHERE TO BUY ──────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { channel: "Amazon (affiliate link)", verdict: "Recommended", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "Standard Amazon fulfilment, return policy, and Prime delivery. Link goes directly to the verified Legion Pulse listing.", cta: true },
                    { channel: "LegionAthletics.com Direct", verdict: "Recommended", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "Best for ongoing purchases — subscribe & save, loyalty programme, and direct manufacturer support. Widest flavour selection available here.", cta: false },
                    { channel: "Amazon.in (USA)", verdict: "Use with caution", colour: "#8B7355", bg: "rgba(139,115,85,0.06)", border: "rgba(139,115,85,0.2)", detail: "Available through authorised importers. Verify the seller is an authorised Legion distributor. Prices range ₹5,800–₹7,200. The significant price premium means American consumers should compare against domestic alternatives — MusclePharm Assault, or the BULK Black if budget allows imported pre-workouts.", cta: false },
                    { channel: "Unverified third-party sellers", verdict: "Not recommended", colour: "#8B3A2C", bg: "rgba(139,58,44,0.06)", border: "rgba(139,58,44,0.2)", detail: "Labdoor certification covers Legion's own production. Purchase from unverified sellers risks counterfeit product or improper storage conditions. Always buy direct or from a major authorised retailer.", cta: false },
                  ].map((item) => (
                    <div key={item.channel} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{item.channel}</p>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: item.colour, flexShrink: 0 }}>{item.verdict}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: item.cta ? 12 : 0 }}>{item.detail}</p>
                      {item.cta && (
                        <a href="https://amzn.to/4o4r29e" target="_blank" rel="nofollow noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 12, fontWeight: 700, borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                          Buy on Amazon <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── § 16. FAQ — with + / – toggle ──────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}
                    >
                      <summary
                        style={{
                          padding: "15px 18px",
                          cursor: "pointer",
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 12,
                          userSelect: "none",
                        }}
                      >
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        {/* Plus shown when closed (CSS ::-webkit-details-marker hidden), minus shown when open */}
                        <span
                          className="faq-icon"
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: "#EDE8DF",
                            border: "1px solid #D4C9B8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: "#D4A96A",
                          }}
                        >
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
                {/* CSS to swap Plus → Minus when open */}
                <style>{`
                  details[open] .faq-icon svg { display: none; }
                  details[open] .faq-icon::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 2px;
                    background: #D4A96A;
                    border-radius: 1px;
                  }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* ─── § 17. FINAL VERDICT ─────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 32px" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,201,184,0.4)", marginBottom: 16 }}>FINAL VERDICT · REV-2026-051</p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#D4A96A", lineHeight: 1 }}>{editorialScore}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", color: "rgba(212,201,184,0.5)" }}>/10 · FSP EDITORIAL</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12, lineHeight: 1.2 }}>
                        The cleanest formula in the category.{" "}
                        <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>You pay a premium for it. It is worth it, if natural matters to you.</em>
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#D4C9B8", lineHeight: 1.8, marginBottom: 16 }}>
                    Legion Pulse earns a 9/10 on the FSP because it does two things simultaneously that
                    virtually no competitor manages: clinical doses across all six ingredients, and zero
                    artificial anything. The 350mg theanine decision is evidence-grounded and produces a
                    measurably different focus quality. Labdoor's dual-layer testing (purity and label
                    accuracy) provides more granular verification than a standard COA. The formula is
                    exactly what Legion claims it is.
                  </p>
                  <p style={{ fontSize: 15, color: "#D4C9B8", lineHeight: 1.8, marginBottom: 28 }}>
                    The value score (6.5/10) is the honest limit. At $2.25/serving, Pulse is the most
                    expensive product in this comparison. Users who want an equivalent ergogenic formula
                    and can accept dual-phase caffeine and 200mg theanine will find{" "}
                    <Link href="/reviews/transparent-labs-bulk-black-review" style={{ color: "#D4A96A", textDecoration: "none" }}>Transparent Labs BULK Black</Link>{" "}
                    at $2.00/serving a rational trade. Users for whom artificial ingredients or the
                    theanine dose are meaningful purchase criteria: Pulse is the better product. Pair
                    either with a standalone{" "}
                    <Link href="/best/creatine" style={{ color: "#D4A96A", textDecoration: "none" }}>creatine monohydrate</Link>{" "}
                    to complete the stack.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="https://amzn.to/4o4r29e" target="_blank" rel="nofollow noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      Buy Legion Pulse on Amazon <ExternalLink size={14} />
                    </a>
                    <Link href="/best/pre-workout"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 20px", border: "1px solid rgba(212,201,184,0.2)", color: "#A89880", fontSize: 12, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>
                      All pre-workout reviews →
                    </Link>
                  </div>
                </div>
              </section>

              {/* ─── Research References — clickable ──────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Pérez-Guisado J, Jakeman PM. (2010). Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 24(5):1215–22.", url: "https://doi.org/10.1519/JSC.0b013e3181cb28e0" },
                      { text: "Hobson RM et al. (2012). Effects of β-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 43(1):25–37.", url: "https://doi.org/10.1007/s00726-011-1200-z" },
                      { text: "Trepanowski JF et al. (2011). The effects of chronic betaine supplementation on exercise performance, skeletal muscle oxygen saturation and associated biochemical parameters in resistance trained men. J Strength Cond Res. 25(12):3461–71.", url: "https://doi.org/10.1519/JSC.0b013e318217d48d" },
                      { text: "Giesbrecht T et al. (2010). The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutr Neurosci. 13(6):283–90.", url: "https://doi.org/10.1179/147683010X12611460764840" },
                      { text: "Grgic J et al. (2018). Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr. 15:11.", url: "https://doi.org/10.1186/s12970-018-0216-0" },
                      { text: "De Jesus Moreno Moreno M. (2003). Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate. Clin Ther. 25(1):178–93.", url: "https://doi.org/10.1016/S0149-2918(03)90023-3" },
                      { text: "Shinohara T et al. (2008). The roles of TRPV1 and TRPA1 in itch sensation... (beta-alanine paresthesia mechanism). J Invest Dermatol.", url: "https://doi.org/10.1038/sj.jid.5701250" },
                      { text: "EFSA Panel on Dietetic Products, Nutrition and Allergies. (2015). Scientific Opinion on the safety of caffeine. EFSA Journal. 13(5):4102.", url: "https://doi.org/10.2903/j.efsa.2015.4102" },
                      { text: "Witkowski M et al. (2023). The artificial sweetener erythritol and cardiovascular event risk. Nat Med. 29(3):710–8.", url: "https://doi.org/10.1038/s41591-023-02223-9" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#D4A96A", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
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

        {/* Related Reviews */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#D4A96A", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
