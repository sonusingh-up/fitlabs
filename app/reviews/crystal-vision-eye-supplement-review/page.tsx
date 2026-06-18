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

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Crystal Vision Eye Supplement Review (2026): Does It Really Work?",
  description:
    "Does Crystal Vision really work? We break down the ingredients, side effects, and real customer results in our updated 2026 eye supplement review.",
  alternates: { canonical: "/reviews/crystal-vision-eye-supplement-review" },
  openGraph: {
    title: "Crystal Vision Eye Supplement Review (2026): Does It Really Work?",
    description:
      "Decent core ingredients at a very competitive price. But no zeaxanthin, undisclosed doses, and no third-party potency testing hold it back. Honest FSP analysis.",
    url: "https://fitlabreviews.com/reviews/crystal-vision-eye-supplement-review",
    type: "article",
  },
};

// ─── TOC ─────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is Crystal Vision?" },
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

// ─── SCORING ─────────────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 6.5,
      notes:
        "Seven ingredients — lutein, bilberry extract, eyebright, vitamins C and E, zinc, and copper. The core is directionally correct: lutein is the most evidence-backed ingredient in eye health nutrition, bilberry provides anthocyanin-based retinal protection, and vitamins C and E with zinc align with AREDS2 micronutrient framework (AREDS2 Research Group, 2013, JAMA Ophthalmology). The critical gap: zeaxanthin is absent. Lutein and zeaxanthin work synergistically as the primary macular pigment carotenoids — virtually every clinical trial on macular pigment density supplementation uses both. Omitting zeaxanthin leaves the formula incomplete against its own AREDS2 comparator. Eyebright (Euphrasia officinalis) has limited human RCT data — traditional use, not clinical validation. Exact individual doses are not publicly confirmed.",
    },
    {
      pillar: "transparency",
      score: 5.0,
      notes:
        "The ingredient list is disclosed. The exact milligram quantities per ingredient are not confirmed in publicly available documentation. For an eye health supplement citing AREDS2 research — which used specific doses (lutein 10mg, zeaxanthin 2mg, zinc 80mg, copper 2mg, vitamin C 500mg, vitamin E 400 IU) — the inability to verify whether this formula matches or approaches those doses is a meaningful transparency gap. No proprietary blend is indicated, which is positive. But the label must publish doses for claims against clinical studies to be verifiable.",
    },
    {
      pillar: "verification",
      score: 4.5,
      notes:
        "GMP (Good Manufacturing Practices) certification is the minimum regulatory standard for US dietary supplements — it covers facility and process requirements, not ingredient potency or purity verification. 'Clinically tested' appears on marketing materials but refers to the research behind individual ingredients, not independent testing of this specific product. No Labdoor, NSF, USP, or Informed Sport certification is held. No certificate of analysis (COA) is publicly available. For a supplement making AREDS2-adjacent claims about macular degeneration, the absence of independent potency testing is a notable limitation.",
    },
    {
      pillar: "value",
      score: 9.0,
      notes:
        "At $28.50 for 30 servings ($0.95/serving), Crystal Vision is priced significantly below the eye health supplement category average of approximately $1.50–$2.50/serving for comparable formulas. For users who want a foundational lutein + bilberry supplement without paying premium AREDS2-tier pricing, this is genuinely accessible. The price-to-formula ratio makes it defensible as a starting point, but it cannot compete with properly dosed, third-party tested alternatives on formula quality.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Two capsules daily with water — straightforward protocol, no timing requirements, no pre-workout window to manage. Vegan, gluten-free, non-GMO, and made in the USA — ticks the key dietary compatibility boxes. Available online via ClickBank distribution. The main practical consideration: no subscription or direct-brand account management; ClickBank fulfilment means customer service goes through the ClickBank ecosystem rather than a direct manufacturer relationship.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Lutein — the right lead ingredient",
      detail:
        "Lutein is the best-evidenced carotenoid for macular pigment density and blue light filtration. Choosing it as the primary active is the correct decision. AREDS2 confirmed its role in reducing AMD progression risk.",
    },
    {
      type: "green",
      label: "Vegan, gluten-free, non-GMO",
      detail:
        "All three dietary markers confirmed. Rare for an eye supplement at this price point to tick all three.",
    },
    {
      type: "green",
      label: "GMP certified, Made in USA",
      detail:
        "FDA-registered GMP facility ensures manufacturing process standards are met. Minimum required standard, but correctly met.",
    },
    {
      type: "green",
      label: "Very competitive price ($0.95/serving)",
      detail:
        "The lowest price per serving we have reviewed in the eye health category. For budget-conscious users who want foundational eye nutrition, this is a meaningful advantage.",
    },
    {
      type: "red",
      label: "No zeaxanthin — the single biggest formula gap",
      detail:
        "Lutein and zeaxanthin are co-located in the macula. AREDS2, the definitive eye supplement study, used both. Every well-formulated eye supplement pairs them. Crystal Vision uses lutein alone for carotenoid support — this is a meaningful clinical gap, not a minor omission.",
      deduction: 0.5,
    },
    {
      type: "red",
      label: "No third-party potency testing",
      detail:
        "GMP certification covers process, not product. Without Labdoor, NSF, or USP verification, the actual mg per capsule of lutein, bilberry, and zinc cannot be independently confirmed. Particularly relevant given undisclosed doses.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Exact ingredient doses not publicly confirmed",
      detail:
        "The supplement facts panel showing individual mg quantities is not reproduced in any publicly accessible product documentation. Without dose transparency, claims referencing AREDS2 research cannot be verified against the specific amounts used in that study.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Eyebright has limited clinical evidence",
      detail:
        "Eyebright (Euphrasia officinalis) has traditional use in European herbalism for eye complaints. Human RCT evidence is sparse — animal and in vitro data only. Its inclusion adds breadth but not clinical credibility.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Protects against blue light damage"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Lutein does accumulate in the macula and does filter high-energy blue light — this mechanism is well-established (Bernstein et al., 2016, Prog Retin Eye Res). Whether the lutein dose in this formula reaches the 10mg minimum associated with measurable macular pigment density increases is unverifiable without confirmed dose disclosure. Claim is mechanistically plausible but dose-dependent and therefore context-dependent.",
    },
    {
      claim: '"Reduces oxidative stress in the eyes"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Vitamins C and E are established antioxidants. Bilberry anthocyanins have antioxidant activity in ocular tissue (Ogawa et al., 2014, J Agric Food Chem). The claim is directionally supported but relies on dose adequacy, which is unverified. Standard antioxidant doses (vitamin C 500mg, vitamin E 400 IU per AREDS2) are likely not reached in a 2-capsule daily serving of this breadth.",
    },
    {
      claim: '"Prevents age-related macular degeneration"',
      verdict: "overstated",
      evidence: "moderate",
      notes:
        "AREDS2 (2013) found that a specific formulation (lutein 10mg, zeaxanthin 2mg, vitamin C 500mg, vitamin E 400 IU, zinc 80mg, copper 2mg) reduced risk of progression to advanced AMD by approximately 25% in people who already had intermediate AMD. This is a risk reduction in a specific at-risk population using a specific formula — not prevention in the general population. 'Prevents AMD' overstates what the evidence actually says, and this formula lacks zeaxanthin, making the AREDS2 comparison even less applicable.",
    },
    {
      claim: '"Improves focus and reduces eye fatigue"',
      verdict: "context-dependent",
      evidence: "limited",
      notes:
        "Digital eye strain reduction is not a well-powered RCT category. Lutein supplementation has been associated with reduced visual fatigue scores in screen workers in some small trials (Yao et al., 2013, Nutrients), but the evidence base is limited and dose-dependent. Bilberry has some supporting data on retinal microcirculation. This claim is plausible for digital workers but not robustly established.",
    },
    {
      claim: '"Natural, Gluten Free, Vegan, Non-GMO"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "These are labelling claims that are factually verifiable from the product information. Crystal Vision's ingredient list is plant-derived and contains no animal products, gluten-containing ingredients, or GMO disclosures. Claim is accurate.",
    },
  ],
  valueMetric: {
    pricePerServing: 0.95,
    primaryActiveGrams: 0.01,
    pricePerGramActive: 95.0,
    categoryAvgPricePerGram: 120.0,
    efficiency: "above",
  },
  compositeScore: 0,
  editorialScore: 6 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main ingredients in Crystal Vision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crystal Vision contains seven active ingredients: Lutein, Bilberry Extract (Vaccinium myrtillus), Eyebright (Euphrasia officinalis), Vitamin C, Vitamin E, Zinc, and Copper. The exact milligram quantities per serving are not publicly disclosed in available product documentation. The formula is vegan, gluten-free, and non-GMO.",
      },
    },
    {
      "@type": "Question",
      name: "Does Crystal Vision contain zeaxanthin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Zeaxanthin is not listed as a separate ingredient in Crystal Vision. This is the formula's most significant gap. Lutein and zeaxanthin are the two primary macular pigment carotenoids — they are co-located in the macula and retina, and the landmark AREDS2 study used both together. Every well-formulated eye supplement pairs them. If zeaxanthin is a priority for you — particularly if you are concerned about AMD risk — look for a supplement that explicitly includes both.",
      },
    },
    {
      "@type": "Question",
      name: "Is Crystal Vision third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crystal Vision is manufactured in a GMP-certified, FDA-registered facility in the USA. GMP covers manufacturing process standards, not independent potency or purity verification of the finished product. No third-party testing certification from programmes such as NSF, Labdoor, or USP is indicated. The marketing uses the phrase 'clinically tested,' which refers to the research behind individual ingredients — not an independent test of this specific product.",
      },
    },
    {
      "@type": "Question",
      name: "How does Crystal Vision compare to AREDS2 formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AREDS2 formula — the supplement used in the Age-Related Eye Disease Study 2 — contains lutein (10mg), zeaxanthin (2mg), vitamin C (500mg), vitamin E (400 IU), zinc (80mg), and copper (2mg). Crystal Vision includes lutein, vitamins C and E, zinc, and copper — but omits zeaxanthin. It also adds bilberry and eyebright, which are not in AREDS2. Critically, the exact doses in Crystal Vision are not publicly confirmed, so it is impossible to verify whether it reaches the AREDS2 thresholds for the ingredients it does share. Crystal Vision is not an AREDS2 formula, and should not be treated as equivalent.",
      },
    },
    {
      "@type": "Question",
      name: "Who should take Crystal Vision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crystal Vision is most appropriate for adults over 40 looking for a low-cost daily eye health supplement with foundational lutein and antioxidant support. It is not appropriate for people who have been diagnosed with intermediate AMD and are looking for a clinically validated AREDS2 formula — for that, consult an ophthalmologist and use an independently tested AREDS2 product. It is also worth noting that supplements cannot correct refractive errors (near or farsightedness) or replace prescription treatment for eye disease.",
      },
    },
    {
      "@type": "Question",
      name: "Can Crystal Vision improve night vision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Night vision is primarily governed by rod photoreceptors and their dependence on rhodopsin, which requires vitamin A. Crystal Vision does not list vitamin A as an ingredient. Bilberry has been associated with night vision improvements in some studies, but the evidence is inconsistent — a Cochrane review (Canter & Ernst, 2004) found insufficient evidence to support bilberry for night vision from controlled trials. The claim is not strongly supported for this specific formula.",
      },
    },
    {
      "@type": "Question",
      name: "Is Crystal Vision safe to take with other supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ingredients in Crystal Vision — lutein, bilberry, eyebright, vitamins C and E, zinc, and copper — are generally well-tolerated at typical supplement doses. High-dose zinc (above 40mg daily) can interfere with copper absorption, which is why AREDS2 pairs zinc with copper. Crystal Vision includes copper for this reason. Vitamin E supplementation above 400 IU daily has been associated with increased bleeding risk in people taking anticoagulants. If you take prescription medications, particularly blood thinners, consult your doctor before adding any supplement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of Crystal Vision and where can I buy it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crystal Vision is available at $28.50 per bottle (30 servings / 60 capsules) — approximately $0.95 per serving, which is among the lowest in the eye health supplement category. It is sold online through ClickBank-affiliated channels. Free shipping is indicated on orders. There is no subscription programme listed publicly.",
      },
    },
  ],
};

// ─── REVIEW SCHEMA ────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/crystal-vision-eye-supplement-review#review",
  name: "Crystal Vision Eye Supplement — Fitlabreviews FSP Review",
  reviewBody:
    "Evidence-led FSP v2.1 review of Crystal Vision eye health supplement. Covers all seven active ingredients against clinical evidence, AREDS2 alignment gaps (missing zeaxanthin), verification limitations, and honest value assessment at $0.95/serving.",
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
    name: "Crystal Vision Eye Supplement",
    brand: { "@type": "Brand", name: "MDS Labs" },
    category: "Eye Health Supplement",
    description:
      "Daily eye health supplement with lutein, bilberry, eyebright, vitamins C and E, zinc, and copper. Vegan, GMP certified, $0.95/serving.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "28.50",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net",
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
    verdict: "FSP 9/10 — the pre-workout benchmark. Fully dosed, Informed Choice certified.",
    publishedAt: "2026-05-29",
    figNumber: "REV-2026-050",
  },
  {
    slug: "legion-pulse-pre-workout-review-2026",
    title: "Legion Pulse Pre-Workout",
    brand: "Legion Athletics",
    category: "Pre-Workout",
    rating: 9 as ReviewRating,
    verdict: "FSP 9/10 — 350mg theanine, Labdoor certified, all natural. The clean-formula benchmark.",
    publishedAt: "2026-05-29",
    figNumber: "REV-2026-051",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "FSP 8/10 — the best cost-per-gram creatine monohydrate in the category.",
    publishedAt: "2025-03-08",
    figNumber: "02",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CrystalVisionReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/reviews" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Reviews</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/category/eye-health" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Eye Health</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Crystal Vision</span>
          </div>
        </div>

        {/* 2. Feature Banner */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #08181F 0%, #040C10 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, width: 200, height: 270, alignItems: "flex-end", justifyContent: "center" }}>
            <Image src="/products/crystal-vision.webp" alt="Crystal Vision Eye Supplement" width={200} height={270}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 40px rgba(45,122,154,0.5))" }} priority />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 44, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-052 · EYE HEALTH</span>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              MDS Labs
              <br />
              <em style={{ fontWeight: 400, color: "#2D7A9A" }}>Crystal Vision</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6].map((s) => <Star key={s} size={14} fill="#2D7A9A" color="#2D7A9A" />)}
                {[7,8,9,10].map((s) => <Star key={s} size={14} fill="none" color="#2D7A9A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>6 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #FFFFFF)" }} />
        </div>

        {/* 3. Hero Row */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" }}>REV-2026-052</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2D7A9A", whiteSpace: "nowrap" }}>Full Review · FSP Scored · GMP Certified</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>MDS Labs · Eye Health · Vision Support</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Crystal Vision
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43", fontSize: "0.7em" }}>A Budget Eye Supplement With One Major Formula Gap</em>
              </h2>
              <p style={{ fontSize: 15, color: "#3F4B43", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Crystal Vision gets the lead ingredient right — lutein is exactly where it should be for
                a{" "}
                <Link href="/category/eye-health" style={{ color: "#2D7A9A", textDecoration: "none" }}>daily eye health supplement</Link>.
                The price is genuinely impressive at $0.95 per serving. But it ships without
                zeaxanthin — lutein's partner in the macula that every AREDS2-aligned formula
                includes — and the exact doses are not publicly disclosed. At $28.50 you get real
                value. What you do not get is a complete, verifiable formula.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net" target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#2D7A9A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                  Buy Crystal Vision <ExternalLink size={13} />
                </a>
                <Link href="/methodology"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #E4E8E5", color: "#6B7770", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
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
            { label: "Category", value: "Eye Health Supplement" },
            { label: "Serving Size", value: "2 capsules / day" },
            { label: "Servings / Bottle", value: "30" },
            { label: "Published", value: "May 29, 2026" },
            { label: "Last Updated", value: "May 29, 2026" },
          ]} />
        </div>

        {/* 5. Author Box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #E4E8E5, #2D7A9A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#FFFFFF", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>
                Reviewed by the full team ·{" "}
                <Link href="/authors" style={{ color: "#2D7A9A", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* 6. Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#586259", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif" }}>
              Affiliate disclosure: links on this page may earn a commission at no cost to you. Scores are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#2D7A9A", textDecoration: "none" }}>Read our disclosure →</Link>
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

            <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>FSP Quick Verdict</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.02em" }}>
                    Decent starting point for foundational eye nutrition.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#586259" }}>
                      Missing zeaxanthin and dose transparency keep it from competing with serious formulas.
                    </em>
                  </h2>
                  <p style={{ fontSize: 14, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 20 }}>
                    Crystal Vision does a few things correctly. Lutein is the right lead ingredient — it is
                    the most evidence-backed carotenoid for macular pigment density and blue light filtration.
                    Bilberry brings anthocyanin antioxidant support for retinal tissue. Vitamins C and E with
                    zinc and copper are aligned with the AREDS2 micronutrient framework, the most cited eye
                    health supplement study ever conducted. And the price — $0.95 per serving — is the
                    most competitive we have reviewed in this category. That is the honest case for it.
                    The honest case against: there is no zeaxanthin, which is lutein&apos;s partner in the macula
                    and part of every rigorous eye health formula. The exact milligram doses are not
                    publicly confirmed — you cannot verify whether the lutein dose reaches even the 10mg
                    minimum associated with measurable macular effects. There is no independent third-party
                    potency testing. For $0.95/serving, Crystal Vision is not a scam — but it is not a
                    complete formula either.
                  </p>
                  <div className="review-pillar-grid">
                    {rubric.pillars.map((p) => (
                      <div key={p.pillar} style={{ padding: "12px 14px", backgroundColor: "rgba(242,235,217,0.04)", borderRadius: 8, border: "1px solid rgba(212,201,184,0.12)", minWidth: 0 }}>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{p.pillar}</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#2D7A9A", lineHeight: 1 }}>{p.score.toFixed(1)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
                  <div style={{ background: "linear-gradient(145deg, #08181F 0%, #040C10 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(45,122,154,0.15)", border: "1px solid rgba(45,122,154,0.35)", borderRadius: 20, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D7A9A" }}>
                      <ShieldCheck size={10} /> GMP Certified · USA Made
                    </span>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <Image src="/products/crystal-vision.webp" alt="Crystal Vision Eye Supplement" width={160} height={200}
                        style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(45,122,154,0.45))", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F6F8F6)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 4 }}>MDS Labs</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Crystal Vision</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #F2F8F4", borderBottom: "1px solid #F2F8F4" }}>
                      {[{ val: "6/10", label: "FSP Score" }, { val: "Lutein", label: "Lead Active" }, { val: "7 Ing.", label: "Total" }].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#2D7A9A", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$28.50</p>
                      </div>
                      <a href="https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#2D7A9A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>
                        Buy Now <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is Crystal Vision? */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Crystal Vision?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Crystal Vision is a daily eye health supplement from MDS Labs (a Reventek® brand),
                  sold through ClickBank distribution. It is formulated for people dealing with digital
                  eye strain, age-related visual decline, and blue light exposure — the increasingly
                  common complaints of anyone who spends significant time in front of screens or who is
                  over 40 and noticing changes in visual sharpness or light sensitivity.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The formula uses seven ingredients:{" "}
                  <Link href="/ingredients/lutein" style={{ color: "#2D7A9A", textDecoration: "none", fontWeight: 600 }}>lutein</Link>,
                  bilberry extract, eyebright herb, vitamins C and E, zinc, and copper. All plant-derived.
                  All confirmed vegan, gluten-free, and non-GMO. Made in a GMP-certified facility in
                  the USA. Two capsules per day is the entire protocol — no timing window, no stacking,
                  no loading phase.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                  What it is not: an AREDS2 formula. The AREDS2 study — the most important
                  clinical trial in eye supplement history — used a specific combination including both
                  lutein and zeaxanthin. Crystal Vision omits zeaxanthin. This matters, and the
                  ingredient breakdown section explains why in detail.
                </p>
                <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10, borderLeft: "3px solid #2D7A9A" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D7A9A", marginBottom: 6 }}>Who is Crystal Vision for?</p>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>
                    Adults over 40 looking for affordable daily eye nutrition — lutein for macular
                    pigment, bilberry for retinal antioxidant support, vitamins and minerals for
                    baseline eye health. Not appropriate as a replacement for prescribed AREDS2
                    supplementation in people diagnosed with intermediate AMD. Not a substitute for
                    routine eye examinations. Cannot correct refractive errors.
                  </p>
                </div>
              </section>

              {/* § 3 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 24 }}>FSP v2.1 weights: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%</p>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-052" />
                <p style={{ fontSize: 13, color: "#6B7770", marginTop: 16, lineHeight: 1.6, padding: "12px 16px", backgroundColor: "#F2F8F4", borderRadius: 8 }}>
                  Composite FSP score: <strong>{composite.toFixed(1)}/10</strong>. Editorial score: <strong>6/10</strong>. Value (9.0) and practical (7.5) scores are genuine strengths. Formula (6.5), transparency (5.0), and verification (4.5) reflect real limitations that a more complete, independently tested formula would address.
                </p>
              </section>

              {/* § 4 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red &amp; Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 16 }}>
                  Two capsules (1 serving) per day. 30 servings per bottle. Take with water. No specific
                  timing requirement. Below are the confirmed ingredients. <strong>Note:</strong> exact
                  milligram quantities per ingredient are not publicly confirmed — the clinical reference
                  ranges are shown so you can assess what the doses would need to be to hit evidence
                  thresholds.
                </p>
                <div style={{ padding: "10px 16px", backgroundColor: "rgba(139,58,44,0.06)", border: "1px solid rgba(139,58,44,0.2)", borderRadius: 8, marginBottom: 20 }}>
                  <p style={{ fontSize: 13, color: "#8B3A2C", lineHeight: 1.6 }}>
                    <strong>Transparency note:</strong> Individual ingredient doses are not reproduced in
                    any publicly accessible product documentation we could locate. The table below shows
                    confirmed ingredients and their evidence-based clinical ranges for reference.
                  </p>
                </div>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", width: "40%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", width: "20%" }}>Confirmed</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", width: "20%" }}>AREDS2 Dose</th>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", width: "20%" }}>Evidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Lutein", confirmed: "✓ Present", areds: "10 mg", ev: "Strong" },
                        { name: "Bilberry Extract", confirmed: "✓ Present", areds: "N/A", ev: "Moderate" },
                        { name: "Eyebright (Euphrasia)", confirmed: "✓ Present", areds: "N/A", ev: "Limited" },
                        { name: "Vitamin C", confirmed: "✓ Present", areds: "500 mg", ev: "Strong" },
                        { name: "Vitamin E", confirmed: "✓ Present", areds: "400 IU", ev: "Strong" },
                        { name: "Zinc", confirmed: "✓ Present", areds: "80 mg", ev: "Strong" },
                        { name: "Copper", confirmed: "✓ Present", areds: "2 mg", ev: "Strong" },
                        { name: "Zeaxanthin", confirmed: "✗ Absent", areds: "2 mg", ev: "Strong" },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: row.confirmed === "✗ Absent" ? "#8B3A2C" : "#2D2926", fontFamily: "var(--font-hanken), sans-serif", fontWeight: row.confirmed === "✗ Absent" ? 600 : 400 }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.confirmed.startsWith("✓") ? "rgba(45,106,79,0.10)" : "rgba(139,58,44,0.10)", border: `1px solid ${row.confirmed.startsWith("✓") ? "rgba(45,106,79,0.25)" : "rgba(139,58,44,0.25)"}`, borderRadius: 20, fontSize: 11, color: row.confirmed.startsWith("✓") ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" as const, fontWeight: 600 }}>
                              {row.confirmed}
                            </span>
                          </td>
                          <td style={{ padding: "11px 16px", textAlign: "center", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{row.areds}</td>
                          <td style={{ padding: "11px 16px", fontSize: 12, color: row.ev === "Strong" ? "#2D6A4F" : row.ev === "Limited" ? "#8B3A2C" : "#8B7355", fontFamily: "var(--font-jetbrains), monospace" }}>{row.ev}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* § 6 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 28 }}>
                  Seven ingredients. Here is what each one does, what the clinical evidence actually says,
                  and where the gaps are. For deeper context on any individual ingredient, the{" "}
                  <Link href="/ingredients" style={{ color: "#2D7A9A", textDecoration: "none" }}>ingredient database</Link>{" "}
                  has full breakdowns.
                </p>

                {[
                  {
                    name: "Lutein — (dose unconfirmed)",
                    link: "/ingredients/lutein",
                    evidence: "strong" as EvidenceLevel,
                    body: "The right call as the lead ingredient. Lutein is a carotenoid that concentrates specifically in the macula — the central region of the retina responsible for sharp detail and colour discrimination. It acts as a natural optical filter for high-energy blue light and as an antioxidant within macular tissue. The AREDS2 Research Group (2013, JAMA Ophthalmology) used 10mg daily and found supplementation associated with a 25% reduction in progression to advanced AMD in a high-risk population. ConsumerLab's review of eye supplement evidence established 10mg as the minimum effective threshold for measurable macular pigment optical density changes. Without confirmed doses, we cannot verify Crystal Vision meets this threshold.",
                  },
                  {
                    name: "Bilberry Extract (Vaccinium myrtillus) — (dose unconfirmed)",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    body: "Bilberry is the strongest ancillary ingredient in this formula. Its anthocyanin content — the compounds responsible for its deep blue-purple pigment — have demonstrated protective effects on retinal photoreceptor cells under oxidative and blue light stress in both animal and in vitro research. Ogawa et al. (2014, Journal of Agricultural and Food Chemistry) found bilberry and lutein extracts reduced reactive oxygen species and protected photoreceptors from blue LED light-induced damage. The limitation: most positive human trial data comes from small studies. Effective bilberry extract doses in human research are typically 120–160mg of standardised extract; without a confirmed dose, the inclusion cannot be verified as functional.",
                  },
                  {
                    name: "Eyebright (Euphrasia officinalis) — (dose unconfirmed)",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    body: "Eyebright has a long history in European traditional medicine for eye complaints — redness, irritation, conjunctivitis. The mechanistic rationale is anti-inflammatory: iridoid glycosides and flavonoids in eyebright have shown anti-inflammatory activity in cellular models. Human RCT evidence, however, is sparse. The strongest published data is a non-randomised observational study. A Cochrane-level evaluation of eyebright for eye conditions has not been conducted. Its presence adds traditional credibility and some anti-inflammatory plausibility, but it is not a clinically validated ingredient in the way lutein is.",
                  },
                  {
                    name: "Vitamin C — (dose unconfirmed)",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    body: "Vitamin C is an essential antioxidant and the primary water-soluble antioxidant in ocular tissue. The lens of the eye has one of the highest concentrations of vitamin C in the body — it protects crystallin proteins from oxidative damage and maintains lens transparency. AREDS2 used 500mg daily. Standard dietary intake is approximately 75–90mg; supplementation to 500mg provides meaningful additional antioxidant load to ocular tissue. Whether Crystal Vision's dose approaches 500mg in a 2-capsule serving covering six other ingredients is uncertain.",
                  },
                  {
                    name: "Vitamin E — (dose unconfirmed)",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    body: "The fat-soluble antioxidant partner to vitamin C. Vitamin E (as alpha-tocopherol) protects retinal cell membranes from lipid peroxidation — a key mechanism in photoreceptor degeneration. AREDS2 used 400 IU daily. For reference, a 2-capsule serving containing seven ingredients would need significant vitamin E concentration to approach 400 IU — this is physically possible but space-constrained.",
                  },
                  {
                    name: "Zinc — (dose unconfirmed)",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    body: "Zinc is concentrated in the retina and choroid — higher than almost anywhere else in the body. It is required for rhodopsin synthesis (the photopigment essential for night vision), vitamin A metabolism, and antioxidant enzyme activity. AREDS2 used 80mg zinc oxide daily. This is a notably high dose — the NIH tolerable upper intake level for zinc is 40mg, which is why AREDS2 paired it with copper at 2mg to prevent copper-deficiency anaemia from high zinc intake. Crystal Vision includes copper, which confirms awareness of this interaction. Whether the zinc dose reaches or approaches 80mg in this formula is unknown.",
                  },
                  {
                    name: "Copper — (dose unconfirmed)",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    body: "Copper's role here is protective rather than direct: high zinc supplementation inhibits copper absorption in the gut. Without co-supplemented copper, high-zinc eye formulas can cause copper-deficiency anaemia over time. AREDS2 used 2mg daily to counteract 80mg zinc. Crystal Vision's inclusion of copper demonstrates that the formulator understood this interaction — a positive signal about the formula's design intent.",
                  },
                ].map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F6F8F6", border: "1px solid #F2F8F4", borderRadius: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ing.link ? (
                          <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link>
                        ) : ing.name}
                      </p>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{ing.body}</p>
                  </div>
                ))}

                {/* Missing ingredient callout */}
                <div style={{ padding: "20px 22px", backgroundColor: "rgba(139,58,44,0.06)", border: "2px solid rgba(139,58,44,0.2)", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B3A2C", marginBottom: 10, fontWeight: 700 }}>
                    What&apos;s missing — and why it matters
                  </p>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 12 }}>
                    <strong>Zeaxanthin (absent).</strong> Lutein and zeaxanthin are the only two
                    carotenoids that accumulate in the human macula. Lutein concentrates in the
                    peripheral macula; zeaxanthin concentrates in the central fovea — the area
                    responsible for the sharpest, most detailed vision. AREDS2 used 2mg zeaxanthin daily
                    alongside lutein. Every major competitor formula includes both. Without zeaxanthin,
                    Crystal Vision provides only half of the carotenoid macular pigment support that
                    the clinical evidence calls for.
                  </p>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                    <strong>Omega-3 fatty acids (absent).</strong> The updated AREDS2 protocol explored
                    DHA and EPA supplementation for AMD. While the original AREDS2 primary analysis did
                    not show additional benefit from omega-3s, subsequent subgroup analyses suggested
                    potential benefit for certain populations. Most premium eye formulas include them.
                    At Crystal Vision&apos;s price point, their absence is understandable — but worth noting
                    if omega-3 eye health support is a priority.
                  </p>
                </div>
              </section>

              {/* § 7 Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab &amp; Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
                  {[
                    { cert: "GMP Certification", status: "Certified", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "GMP (Good Manufacturing Practices) covers facility hygiene, process controls, and record-keeping. It is the regulatory minimum for US dietary supplement manufacturers. It does not verify ingredient potency, identity, or purity in the finished product." },
                    { cert: "Made in USA", status: "Confirmed", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "Manufactured in an FDA-registered US facility. Positive — US-manufactured supplements are subject to FDA GMP regulations, providing baseline quality assurance." },
                    { cert: "NSF / Labdoor / USP", status: "Not held", colour: "#8B3A2C", bg: "rgba(139,58,44,0.06)", border: "rgba(139,58,44,0.2)", detail: "No independent third-party potency or purity verification from any recognised certification programme. Without this, the actual ingredient doses cannot be independently confirmed. This is the most significant quality gap for a product citing AREDS2 research." },
                    { cert: "Certificate of Analysis", status: "Not published", colour: "#8B7355", bg: "rgba(139,115,85,0.06)", border: "rgba(139,115,85,0.2)", detail: "No batch-level COA is publicly available. COAs would provide at minimum identity and potency data for raw ingredients. Their absence reinforces the transparency concern around actual doses." },
                  ].map((item) => (
                    <div key={item.cert} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.cert}</p>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: item.colour, marginBottom: 10 }}>{item.status}</p>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "14px 18px", backgroundColor: "#F2F8F4", borderRadius: 8, borderLeft: "3px solid #8B7355" }}>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>
                    <strong>Bottom line on verification:</strong> GMP certification is the floor, not
                    the ceiling. The eye supplement market contains products where labelled doses and
                    actual doses diverge significantly — ConsumerLab testing has found this repeatedly.
                    For a supplement making AMD-adjacent claims, independent potency testing would be
                    the minimum credibility standard. Crystal Vision does not currently meet it.
                  </p>
                </div>
              </section>

              {/* § 8 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20 }}>Marketing claims from Crystal Vision product pages, assessed against published evidence.</p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 9 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { step: "Daily Protocol", protocol: "2 capsules with water", recommended: true, timing: "With a meal (morning preferred)", notes: "The fat-soluble ingredients — lutein and vitamins E — absorb better when taken with a meal containing dietary fat. Avocado, olive oil, eggs, or nuts alongside breakfast will improve carotenoid bioavailability meaningfully. This is not a minor point: lutein absorption can increase 3–5× when taken with a fat-containing meal versus fasted." },
                    { step: "Consistency", protocol: "Daily, no cycling needed", recommended: true, timing: "Same time each day", notes: "Eye health supplements are not acute performance boosters — they work through gradual accumulation in macular tissue. Lutein loading in the macula occurs over weeks to months of consistent daily intake. Missing occasional days is not critical; going weeks without is. Set a daily reminder." },
                    { step: "What to expect", protocol: "Gradual, not immediate", recommended: true, timing: "4–12 weeks for noticeable change", notes: "Some users report reduced eye fatigue and improved light comfort within 4–6 weeks. Measurable macular pigment density changes in research studies typically require 3–6 months of consistent supplementation. Crystal Vision is not a short-term intervention — it is a long-term nutritional support strategy." },
                    { step: "Consider adding", protocol: "Zeaxanthin (separate supplement)", recommended: false, timing: "Same time as Crystal Vision", notes: "Given the absence of zeaxanthin in this formula, users who want to complete the macular pigment carotenoid support can add a standalone zeaxanthin supplement (2–4mg daily). This partially addresses Crystal Vision's biggest formula gap without switching products." },
                  ].map((row) => (
                    <div key={row.step} style={{ padding: "18px 20px", border: `1px solid ${row.recommended ? "rgba(45,106,79,0.2)" : "#E4E8E5"}`, borderRadius: 10, backgroundColor: row.recommended ? "rgba(45,106,79,0.03)" : "#F6F8F6" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.step}</p>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#2D7A9A" }}>{row.protocol}</p>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          {row.recommended && <span style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.1)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace" }}>Recommended</span>}
                          <span style={{ padding: "2px 8px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{row.timing}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>{row.notes}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20 }}>
                  Eye health supplements compared on ingredients, AREDS2 alignment, third-party testing, and price. See the{" "}
                  <Link href="/best/eye-health" style={{ color: "#2D7A9A", textDecoration: "none" }}>best eye health supplements roundup</Link>{" "}
                  for the full category ranking.
                </p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 560, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Lutein", "Zeaxanthin", "Bilberry", "3rd-Party", "Price/Serving"].map((h) => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" as const }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Crystal Vision ★", lutein: "✓ (dose ?)", zeax: "✗ Absent", bilberry: "✓", cert: "GMP only", price: "$0.95", highlight: true },
                        { name: "Performance Lab Vision", lutein: "10mg (Lutemax)", zeax: "2mg", bilberry: "✗", cert: "Informed Sport", price: "$1.83" , highlight: false },
                        { name: "Bausch + Lomb Ocuvite", lutein: "10mg", zeax: "2mg", bilberry: "✗", cert: "None", price: "$0.67", highlight: false },
                        { name: "PreserVision AREDS2", lutein: "10mg", zeax: "2mg", bilberry: "✗", cert: "USP Verified", price: "$0.52", highlight: false },
                        { name: "EyePromise Screen Shield", lutein: "15mg", zeax: "6mg (meso)", bilberry: "✓", cert: "NSF Certified", price: "$1.65", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: row.highlight ? "rgba(45,122,154,0.07)" : i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: row.highlight ? "#2D7A9A" : "#2D2926", fontFamily: "var(--font-hanken), sans-serif", whiteSpace: "nowrap" as const }}>{row.name}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#1A1714", fontFamily: "var(--font-jetbrains), monospace" }}>{row.lutein}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.zeax.startsWith("✗") ? "#8B3A2C" : "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", fontWeight: row.zeax.startsWith("✗") ? 700 : 400 }}>{row.zeax}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.bilberry === "✓" ? "#2D6A4F" : "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{row.bilberry}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.cert !== "GMP only" && row.cert !== "None" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-jetbrains), monospace" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#1A1714", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700 }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.6 }}>
                  Crystal Vision is the cheapest option here — and the only one without zeaxanthin or
                  independent third-party testing. PreserVision AREDS2 at $0.52 is USP Verified and
                  matches AREDS2 precisely. For anyone specifically managing AMD risk, PreserVision
                  AREDS2 is the more defensible choice despite being a different product type.
                </p>
              </section>

              {/* § 11 Products at a Glance */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                  <ProductCard name="Crystal Vision" brand="MDS Labs" category="Eye Health Supplement" score={6} priceUSD="$28.50 / 30 servings" priceINR="N/A" tags={["Lutein", "Bilberry", "Vegan", "GMP"]} buyUrl="https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net" buyLabel="Buy Now" reviewSlug="crystal-vision-eye-supplement-review" image="crystal-vision.webp" bgFrom="#08181F" bgTo="#040C10" accent="#2D7A9A" featured={true} />
                  <ProductCard name="Pulse Pre-Workout" brand="Legion Athletics" category="Pre-Workout" priceUSD="~$67.50 / 30 servings" priceINR="N/A" tags={["FSP 9/10", "Labdoor", "No Artificial"]} buyUrl="https://amzn.to/4o4r29e" buyLabel="Check Price" reviewSlug="legion-pulse-pre-workout-review-2026" image="legion-pulse-preworkout.webp" bgFrom="#0A1220" bgTo="#060C18" accent="#D4A96A" />
                  <ProductCard name="BULK Black Pre-Workout" brand="Transparent Labs" category="Pre-Workout" priceUSD="$59.99 / 30 servings" priceINR="N/A" tags={["FSP 9/10", "Informed Choice", "Dual Caffeine"]} buyUrl="https://amzn.to/3RPRlnm" buyLabel="Check Price" reviewSlug="transparent-labs-bulk-black-review" image="tl-bulk-black-preworkout.webp" bgFrom="#1A0A06" bgTo="#0D0402" accent="#0F7A5A" />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "Lutein is the correct lead ingredient for macular pigment and blue light filtration",
                    "Bilberry extract provides anthocyanin antioxidant support — backed by retinal protection research",
                    "Vitamins C, E, zinc, copper align with AREDS2 micronutrient framework",
                    "Copper included to offset zinc — correct and considered formulation detail",
                    "Vegan, gluten-free, non-GMO — all three confirmed",
                    "$0.95/serving — the most competitive price point in the eye health supplement category",
                    "GMP certified, Made in USA",
                    "Simple 2-capsule daily protocol — no timing complexity",
                  ]}
                  cons={[
                    "No zeaxanthin — lutein's partner in the macula, present in every AREDS2-aligned formula",
                    "Exact ingredient doses not publicly disclosed — cannot verify against clinical thresholds",
                    "No independent third-party potency testing (no NSF, Labdoor, USP, or equivalent)",
                    "Eyebright has limited human RCT evidence — included on traditional use, not clinical validation",
                    "No vitamin A — important for night vision and not supplied by other listed ingredients",
                    "No omega-3 fatty acids — increasingly recommended in comprehensive eye health formulas",
                    "ClickBank distribution — no direct manufacturer customer support channel",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety &amp; Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Lutein and Carotenoids", icon: "✓", risk: "low", body: "Lutein is well-tolerated at supplement doses up to 20mg daily. At very high chronic intakes (>20mg/day), carotenodermia — a harmless yellowing of the skin — has been reported but is not a safety concern. At the doses likely present in this formula, no adverse effects are expected." },
                    { title: "Zinc and Copper", icon: "⚡", risk: "moderate", body: "Zinc supplementation above 40mg daily (the NIH tolerable upper intake level) can suppress copper absorption over time, leading to copper-deficiency anaemia. Crystal Vision includes copper for this reason — the interaction is known and accounted for. Users taking other zinc-containing supplements should count their total zinc intake. The World Health Organization notes that high zinc intake can also impair immune function at sustained doses above 40mg." },
                    { title: "Vitamin E", icon: "⚡", risk: "moderate", body: "Vitamin E at doses above 400 IU daily has been associated with increased bleeding tendency and may interact with anticoagulant medications (warfarin, aspirin at therapeutic doses). If you take blood thinners, discuss vitamin E supplementation with your prescribing doctor before starting." },
                    { title: "Eyebright", icon: "⚡", risk: "low", body: "Eyebright is generally well-tolerated as an oral supplement. Topical eye use of eyebright preparations carries contamination risk and is not recommended. At oral supplement doses, no significant adverse effects are documented in the literature, though its long-term safety data is thin." },
                    { title: "Not Appropriate For", icon: "🚫", risk: "high", body: "Crystal Vision is not a treatment for any eye disease, including AMD, cataracts, glaucoma, or diabetic retinopathy. Anyone who has been diagnosed with an eye condition should consult an ophthalmologist before adding any supplement. This product does not replace prescribed treatment, corrective lenses, or professional eye care. Not recommended during pregnancy or nursing without medical advice." },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 20px", backgroundColor: item.risk === "high" ? "rgba(139,58,44,0.06)" : item.risk === "moderate" ? "rgba(139,115,85,0.06)" : "#F6F8F6", border: `1px solid ${item.risk === "high" ? "rgba(139,58,44,0.2)" : item.risk === "moderate" ? "rgba(139,115,85,0.2)" : "#F2F8F4"}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>{item.icon} {item.title}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 14 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price &amp; Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="lutein" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 24 }}>
                  {[
                    { option: "1 bottle (30 servings)", price: "$28.50 ($0.95/serving)", note: "Standard single purchase" },
                    { option: "Annual cost (daily use)", price: "~$347/year", note: "12 bottles at single-bottle pricing" },
                    { option: "vs. PreserVision AREDS2", price: "$0.52/serving", note: "USP verified, full AREDS2 formula, includes zeaxanthin" },
                    { option: "vs. Performance Lab Vision", price: "$1.83/serving", note: "Informed Sport certified, patented Lutemax 2020®, full zeaxanthin" },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{row.option}</p>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#2D7A9A", marginBottom: 4 }}>{row.price}</p>
                      <p style={{ fontSize: 12, color: "#6B7770" }}>{row.note}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#F2F8F4", borderRadius: 8, borderLeft: "3px solid #8B7355" }}>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>
                    The value case for Crystal Vision is real — $0.95/serving is genuinely the
                    cheapest entry point for a lutein + bilberry + antioxidant supplement. The
                    trade-off is formula completeness and verification. PreserVision AREDS2 at
                    $0.52/serving is cheaper, has zeaxanthin, and carries USP verification.
                    If cost and clinical alignment both matter, PreserVision AREDS2 is the stronger
                    choice despite being less &quot;natural.&quot; If natural ingredients and bilberry are
                    specifically your priority and you are comfortable without third-party potency
                    testing, Crystal Vision is a reasonable budget option.
                  </p>
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { channel: "Official link (via our affiliate)", verdict: "Recommended", colour: "#2D6A4F", bg: "rgba(45,106,79,0.06)", border: "rgba(45,106,79,0.2)", detail: "The ClickBank-distributed official channel. Purchased direct from the supplier, free shipping indicated. ClickBank provides a standardised purchase and refund process.", cta: true },
                    { channel: "Amazon.com", verdict: "Check carefully", colour: "#8B7355", bg: "rgba(139,115,85,0.06)", border: "rgba(139,115,85,0.2)", detail: "Multiple Crystal Vision products exist on Amazon from different brands — verify the seller is the same MDS Labs formulation if this is the version you want.", cta: false },
                    { channel: "Third-party supplement stores", verdict: "Not recommended", colour: "#8B3A2C", bg: "rgba(139,58,44,0.06)", border: "rgba(139,58,44,0.2)", detail: "Given the absence of third-party testing, chain of custody matters. Unverified sellers add storage and handling risk on top of existing quality assurance limitations.", cta: false },
                  ].map((item) => (
                    <div key={item.channel} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{item.channel}</p>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: item.colour, flexShrink: 0 }}>{item.verdict}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, marginBottom: item.cta ? 12 : 0 }}>{item.detail}</p>
                      {item.cta && (
                        <a href="https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net" target="_blank" rel="nofollow noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", backgroundColor: "#2D7A9A", color: "#FFFFFF", fontSize: 12, fontWeight: 700, borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>
                          Buy Crystal Vision <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* § 16 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderRadius: 8, border: "1px solid #F2F8F4", overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" as const }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#2D7A9A", fontWeight: 700, fontSize: 14 }}>+</span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#3F4B43", lineHeight: 1.75, fontFamily: "var(--font-hanken), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon { background: #2D7A9A; border-color: #2D7A9A; color: #FFFFFF; font-size: 16px; }
                  details[open] .faq-icon::before { content: '−'; }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 32px" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,201,184,0.4)", marginBottom: 16 }}>FINAL VERDICT · REV-2026-052</p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#2D7A9A", lineHeight: 1 }}>{editorialScore}</p>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.15em", color: "rgba(212,201,184,0.5)" }}>/10 · FSP EDITORIAL</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 12, lineHeight: 1.2 }}>
                        A usable budget option with real gaps.{" "}
                        <em style={{ fontStyle: "italic", fontWeight: 400, color: "#586259" }}>
                          Right core ingredient, wrong formula depth.
                        </em>
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#E4E8E5", lineHeight: 1.8, marginBottom: 16 }}>
                    Crystal Vision earns a 6/10. Lutein is the correct lead ingredient. Bilberry
                    adds genuine antioxidant protection for retinal tissue. The AREDS2-inspired
                    micronutrient support — vitamins C, E, zinc, copper — is directionally right.
                    At $0.95 per serving it is the most affordable formula we have reviewed in this
                    category. And it is vegan, gluten-free, non-GMO, and made in the USA.
                  </p>
                  <p style={{ fontSize: 15, color: "#E4E8E5", lineHeight: 1.8, marginBottom: 28 }}>
                    But the score stops at 6 for reasons that matter. No zeaxanthin — lutein&apos;s
                    partner in the macula — is not a minor omission. It is the single most
                    evidence-backed addition to any lutein-based formula. Without confirmed
                    individual doses, every citation to AREDS2 research is unverifiable against
                    this specific product. And without third-party potency testing, you are taking
                    the manufacturer&apos;s word on what is actually in each capsule. For anyone serious
                    about supporting long-term eye health, these gaps are real. For someone looking
                    for an affordable daily eye supplement with foundational lutein and antioxidant
                    support — and who understands what they are and are not getting — Crystal Vision
                    is a reasonable starting point at an excellent price.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="https://3c3ef3wlq9gkqmr8uw4jvncyfc.hop.clickbank.net" target="_blank" rel="nofollow noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "#2D7A9A", color: "#FFFFFF", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>
                      Buy Crystal Vision <ExternalLink size={14} />
                    </a>
                    <Link href="/best/eye-health"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 20px", border: "1px solid rgba(212,201,184,0.2)", color: "#586259", fontSize: 12, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em" }}>
                      All eye health reviews →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "AREDS2 Research Group. (2013). Lutein + zeaxanthin and omega-3 fatty acids for age-related macular degeneration. JAMA. 309(19):2005–15.", url: "https://doi.org/10.1001/jama.2013.4997" },
                      { text: "Bernstein PS et al. (2016). Lutein, zeaxanthin, and meso-zeaxanthin: The basic and clinical science underlying carotenoid-based nutritional interventions against ocular disease. Prog Retin Eye Res. 50:34–66.", url: "https://doi.org/10.1016/j.preteyeres.2015.10.003" },
                      { text: "Ogawa K et al. (2014). Protective effect of bilberry and lingonberry on blue LED light-induced retinal photoreceptor cell damage in vitro. J Agric Food Chem. 62(15):3396–403.", url: "https://doi.org/10.1021/jf500207e" },
                      { text: "Yao Y et al. (2013). Lutein supplementation improves visual performance in Chinese drivers: a randomized controlled trial. Nutrients. 5(12):4886–94.", url: "https://doi.org/10.3390/nu5124886" },
                      { text: "Canter PH, Ernst E. (2004). Anthocyanosides of Vaccinium myrtillus (bilberry) for night vision—a systematic review of placebo-controlled trials. Surv Ophthalmol. 49(1):38–50.", url: "https://doi.org/10.1016/j.survophthal.2003.10.006" },
                      { text: "Mrowicka M et al. (2022). Lutein and zeaxanthin and their roles in age-related macular degeneration — neurodegenerative disease. Nutrients. 14(4):827.", url: "https://doi.org/10.3390/nu14040827" },
                      { text: "Johnson EJ. (2014). Role of lutein and zeaxanthin in visual and cognitive function throughout the lifespan. Nutr Rev. 72(9):605–12.", url: "https://doi.org/10.1111/nure.12133" },
                      { text: "Chew EY et al. (2022). Long-term outcomes of adding lutein/zeaxanthin and omega-3 fatty acids to the AREDS supplements on age-related macular degeneration progression. JAMA Ophthalmol. 140(7):692–98.", url: "https://doi.org/10.1001/jamaophthalmol.2022.1640" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#2D7A9A", textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, whiteSpace: "nowrap" as const }}>
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
        <section style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#2D7A9A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
