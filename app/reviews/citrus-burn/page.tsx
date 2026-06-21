import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, Star, Plus, ShieldCheck } from "lucide-react";
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

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Citrus Burn Review (2026) — Prop Blend Fat Burner, FSP 4/10",
  description:
    "Citrus Burn review: 7 undisclosed-dose botanicals, no third-party testing, bold thermogenesis claims with limited evidence. $49–$79/bottle. FSP 4/10.",
  alternates: { canonical: "/reviews/citrus-burn" },
  openGraph: {
    title: "Citrus Burn Review (2026) — Prop Blend Fat Burner, FSP 4/10",
    description:
      "Citrus Burn bundles synephrine, apple cider vinegar, cayenne, ginger, green tea, berberine, and ginseng in a fully undisclosed proprietary blend. No individual doses, no third-party cert, no peer-reviewed trials. Here is what the evidence says.",
    url: "https://fitlabreviews.com/reviews/citrus-burn",
    type: "article",
  },
};

// ── TOC ────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"           },
  { id: "what-is",           label: "What Is Citrus Burn?"    },
  { id: "score-breakdown",   label: "Score Breakdown"         },
  { id: "flags",             label: "Red & Green Flags"       },
  { id: "supplement-facts",  label: "Supplement Facts"        },
  { id: "ingredients",       label: "Ingredient Breakdown"    },
  { id: "lab-data",          label: "Testing & Verification"  },
  { id: "claim-audit",       label: "Claim Audit"             },
  { id: "how-to-take",       label: "How to Take It"          },
  { id: "comparison",        label: "vs. Competitors"         },
  { id: "alternatives",      label: "5 Better Alternatives"   },
  { id: "pros-cons",         label: "Pros & Cons"             },
  { id: "safety",            label: "Safety & Side Effects"   },
  { id: "value",             label: "Price & Value"           },
  { id: "where-to-buy",      label: "Where to Buy"            },
  { id: "faq",               label: "FAQ"                     },
  { id: "final",             label: "Final Verdict"           },
];

// ── Scoring Rubric ─────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 4.5,
      notes:
        "Seven botanicals with individually plausible mechanisms — synephrine, cayenne, ginger, green tea, berberine, ginseng, apple cider vinegar. However, every single ingredient dose is hidden inside a proprietary blend. Without knowing how much synephrine, EGCG, or berberine you are getting, it is impossible to assess whether any active reaches a clinically meaningful threshold. The formula could contain effective doses or homeopathic dust — the label does not tell you.",
    },
    {
      pillar: "transparency",
      score: 2.5,
      notes:
        "Zero individual ingredient doses are disclosed. The entire formula is a proprietary blend with no breakdown. The sales page names ingredients with dramatic origin stories ('Seville Orange Peel,' 'Himalayan Mountain Ginger,' 'Ceremonial Green Tea') but never states a milligram figure for any of them. This is the worst transparency score a product can earn while still listing ingredient names.",
    },
    {
      pillar: "verification",
      score: 3.0,
      notes:
        "Claims 'FDA-registered facility' and 'GMP-certified.' FDA-registered means the facility is registered with FDA — not that FDA has approved or tested the product. No NSF, USP, Informed Sport, BSCG, or any independent third-party product-level certification. No published COAs. No batch-level testing data available publicly. 'Third-party inspected' is vague and unverifiable.",
    },
    {
      pillar: "value",
      score: 3.5,
      notes:
        "At $49–$79 per bottle (30-day supply), Citrus Burn costs $1.63–$2.63 per serving. Transparent Labs Fat Burner (full dose disclosure, 3rd-party tested) costs ~$1.50/serving. Jacked Factory Burn XT (clinically dosed, transparent label) costs ~$0.67/serving. You are paying a premium for a product that hides every ingredient dose and has no independent testing.",
    },
    {
      pillar: "practical",
      score: 6.0,
      notes:
        "One capsule daily is convenient. Plant-based, soy-free, dairy-free, non-GMO claims are positive. 180-day money-back guarantee is generous and reduces purchase risk. However, the product is only sold through the official website (ClickBank) — no retail availability, no Amazon listing, limited accountability if the company changes terms.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "180-day money-back guarantee",
      detail: "Full refund within 180 days, no questions asked — significantly longer than the industry-standard 30–60 days. Reduces financial risk for buyers.",
    },
    {
      type: "green",
      label: "One capsule daily dosing",
      detail: "Simple dosing protocol. One capsule before breakfast with water. No multi-dose schedule to remember.",
    },
    {
      type: "green",
      label: "Plant-based, soy-free, non-GMO",
      detail: "Formula is plant-derived with no major allergens listed. Suitable for vegan and vegetarian users.",
    },
    {
      type: "red",
      label: "100% proprietary blend — zero doses disclosed",
      detail: "Not a single ingredient has its dose listed on the label or sales page. You cannot verify whether any active reaches a clinically meaningful amount. This is the most opaque labelling practice in the supplement industry.",
      deduction: 0.5,
    },
    {
      type: "red",
      label: "No independent third-party certification",
      detail: "No NSF, USP, Informed Sport, or BSCG certification. 'FDA-registered facility' and 'GMP-certified' are baseline manufacturing requirements, not product-level quality assurance. No COAs published.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Bold efficacy claims with no peer-reviewed evidence",
      detail: "'Increases thermogenesis by 74%' and 'reduces cravings by 54%' — no study citation, no sample size, no methodology. These percentages appear on the sales page without any linked or named clinical trial. The individual ingredients have some evidence at specific doses, but none of that evidence applies to this unnamed proprietary blend.",
      deduction: 0.4,
    },
    {
      type: "red",
      label: "ClickBank-only distribution",
      detail: "Sold exclusively through ClickBank affiliate marketing. Not available on Amazon, at GNC, Vitamin Shoppe, or any major retailer. ClickBank products have a higher rate of exaggerated marketing claims and limited post-purchase accountability.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Dramatic ingredient naming obscures real content",
      detail: "'Seville Orange Peel,' 'Andalusian Red Pepper,' 'Himalayan Mountain Ginger,' 'Ceremonial Green Tea' — these are marketing names for p-synephrine, cayenne pepper, ginger, and green tea extract. The geographic qualifiers imply premium sourcing but are unverifiable and have no bearing on efficacy.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Increases thermogenesis by up to 74%"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "No study is cited. The 74% figure appears on the sales page without a reference, sample size, or methodology. Synephrine (the likely basis for this claim) has modest thermogenic effects in studies — Stohs et al. (2012) found p-synephrine increased resting metabolic rate by ~65 kcal/day, not a 74% increase in thermogenesis. The claim conflates ingredient-level data with a specific percentage that has no published source.",
    },
    {
      claim: '"Reduces cravings by 54%"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "Attributed to 'Himalayan Mountain Ginger' on the sales page. No study citation provided. Ginger has some evidence for appetite modulation — Mansour et al. (2012) found ginger supplementation at 2g increased thermogenesis and reduced hunger, but that was at 2,000mg, and the reduction was not 54%. Without knowing the dose in Citrus Burn, this claim is unverifiable.",
    },
    {
      claim: '"Burns 25% more calories after meals"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "Attributed to 'Andalusian Red Pepper' (cayenne). Capsaicin does increase post-meal energy expenditure — Ludy & Mattes (2011) found a ~50 kcal/day increase with red pepper. A 25% increase in post-meal calorie burn is a significant overstatement of cayenne's measured effect, which is typically 4–5% of meal energy expenditure, not 25%.",
    },
    {
      claim: '"Addresses thermogenic resistance"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "'Thermogenic resistance' is not a recognized clinical term in metabolic science. It appears nowhere in PubMed or any peer-reviewed journal. This is a marketing concept invented to frame the product as solving a problem that does not exist in the clinical literature. Age-related metabolic slowdown is real — 'thermogenic resistance' is not how it works.",
    },
    {
      claim: '"Made in an FDA-registered, GMP-certified facility"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "FDA registration means the manufacturing facility is on FDA's registry — it does not mean FDA has tested, approved, or inspected the specific product. GMP certification is a legal requirement for all US supplement manufacturers under DSHEA (2007). These are baseline compliance requirements, not quality differentiators. The claim is technically true but framed to imply a higher standard of oversight than actually exists.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.63,
    primaryActiveGrams: 0,
    pricePerGramActive: 0,
    categoryAvgPricePerGram: 0.45,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 4 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ── Schemas ────────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/citrus-burn#review",
  name: "Citrus Burn — Fitlabreviews FSP Review",
  reviewBody:
    "Citrus Burn is a 7-ingredient fat burner sold exclusively through ClickBank. Every ingredient dose is hidden in a proprietary blend, no third-party certification exists, and the bold efficacy claims on the sales page have no cited studies. The individual ingredients — synephrine, cayenne, ginger, green tea, berberine, ginseng, and apple cider vinegar — have evidence at specific doses, but without knowing what is in the capsule, nothing can be assessed. The 180-day guarantee is generous. The product itself is not.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  itemReviewed: {
    "@type": "Product",
    name: "Citrus Burn",
    brand: { "@type": "Brand", name: "Citrus Burn" },
    category: "Fat Burner",
    description:
      "A 7-ingredient proprietary blend fat burner capsule targeting thermogenesis and appetite control, sold via ClickBank.",
    offers: {
      "@type": "Offer",
      price: "49.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://citrusburn.com/",
    },
  },
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  datePublished: "2026-06-21",
  dateModified: "2026-06-21",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Citrus Burn actually work for weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The individual ingredients in Citrus Burn — synephrine, cayenne, green tea extract, ginger, berberine — have published evidence for modest metabolic effects at specific doses. The problem is that every dose is hidden in a proprietary blend. Without knowing how much of each ingredient is in a capsule, it is impossible to determine whether the formula delivers a clinically meaningful amount of anything. No published study exists on the Citrus Burn formula itself.",
      },
    },
    {
      "@type": "Question",
      name: "Is Citrus Burn safe to take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The listed ingredients are generally considered safe at standard supplement doses. However, synephrine (from bitter orange peel) can raise blood pressure and heart rate, and should not be combined with caffeine or stimulant medications. Berberine can interact with diabetes medications, statins, and blood thinners. Without knowing the dose of each ingredient, you cannot assess the safety profile accurately. Consult a physician before use, especially if you take any medication.",
      },
    },
    {
      "@type": "Question",
      name: "What is thermogenic resistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thermogenic resistance is not a recognized medical or scientific term. It does not appear in PubMed, medical textbooks, or peer-reviewed journals. The concept — that the body's fat-burning mechanisms become 'resistant' after age 35 — is a marketing framework invented by the product's sales page. Age-related metabolic decline is real and well-documented, but it is driven by loss of lean mass, hormonal changes, and reduced activity — not a condition called 'thermogenic resistance.'",
      },
    },
    {
      "@type": "Question",
      name: "Is Citrus Burn FDA approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. No dietary supplement is FDA-approved. Citrus Burn claims to be made in an 'FDA-registered facility,' which means the manufacturing facility is on the FDA's registry — a legal requirement for all supplement manufacturers. It does not mean the FDA has reviewed, tested, or approved the product itself. FDA registration is a baseline compliance step, not a quality endorsement.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a refund for Citrus Burn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Citrus Burn offers a 180-day money-back guarantee, processed through ClickBank. This is significantly longer than the industry standard of 30–60 days and is one of the product's few genuine positives. ClickBank also has its own refund process, which can serve as a fallback if the vendor is unresponsive.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Citrus Burn only sold on its own website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citrus Burn is sold exclusively through ClickBank, a digital product marketplace that specializes in affiliate marketing. Products sold through ClickBank are not available on Amazon, at GNC, or other major retailers. This distribution model keeps margins high for affiliates and the vendor but limits buyer protections, product reviews, and accountability compared to mainstream retail channels.",
      },
    },
    {
      "@type": "Question",
      name: "Are there better alternatives to Citrus Burn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Several fat burners offer fully disclosed ingredient doses, independent third-party testing, and published research at lower or comparable prices. Transparent Labs Fat Burner PhysiqueSeries discloses every dose and is third-party tested. Jacked Factory Burn XT uses clinically dosed green tea, caffeine, and cayenne at $0.67/serving. Even basic caffeine pills ($0.05/serving) deliver a more evidence-based thermogenic effect than an undisclosed proprietary blend.",
      },
    },
  ],
};

// ── Alternatives ───────────────────────────────────────────────────────────

const alternatives = [
  {
    name: "Transparent Labs Recomp",
    brand: "Transparent Labs",
    category: "Fat Burner / Recomp",
    score: 8,
    price: "$49.99 / 60 caps",
    perServe: "~$1.67",
    why: "Fully disclosed doses for every ingredient. Third-party tested. Contains forskolin, 5-HTP, and chromium at clinically relevant amounts. Transparent label is the key differentiator — you know exactly what you are taking.",
    image: "https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/transparent_labs_recomp.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvdHJhbnNwYXJlbnRfbGFic19yZWNvbXAud2VicCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIwMTYxNDcsImV4cCI6MTc4MzkxNjk0N30.N6kna7jr2MZ2BO4ctu3v3uT8wAxA3z3ookozXdjt2rs",
    buyUrl: "https://www.amazon.com/s?k=Transparent+Labs+Recomp&tag=fitlabreviews-20",
  },
  {
    name: "Jacked Factory Burn XT",
    brand: "Jacked Factory",
    category: "Thermogenic Fat Burner",
    score: 7,
    price: "$29.99 / 60 caps",
    perServe: "~$1.00",
    why: "Clinically dosed green tea extract (EGCG), caffeine anhydrous, cayenne pepper, and acetyl L-carnitine. Every dose on the label. GMP-certified, third-party tested. Half the price of Citrus Burn with better transparency.",
    image: "https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/Jacked-Factory-Burn-XT.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvSmFja2VkLUZhY3RvcnktQnVybi1YVC53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjAxNjE4OCwiZXhwIjoyNDc1ODA4MTg4fQ.t96uiCVfLTnCFrvYkaZNozyAVgBebbL5AxdmJBx3AvA",
    buyUrl: "https://www.amazon.com/s?k=Jacked+Factory+Burn+XT&tag=fitlabreviews-20",
  },
  {
    name: "Metamucil 4-in-1 Psyllium Husk GLP-1",
    brand: "Metamucil",
    category: "Fiber / Appetite Support",
    score: 7,
    price: "$24.99 / 300 caps",
    perServe: "~$0.42",
    why: "Psyllium husk is one of the most evidence-backed fibers for appetite reduction and glycemic control. The GLP-1-adjacent framing is marketing, but the underlying mechanism — delayed gastric emptying and increased satiety via soluble fiber — has strong RCT support. A fraction of the price.",
    image: "https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/psyllium_husk.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcHN5bGxpdW1faHVzay53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjAxNjMxNSwiZXhwIjoyNDc1ODA4MzE1fQ.ao7nCkkKdLf55hG9mp8EtN7ZJqQqWOSIQKxrNg9P8P8",
    buyUrl: "https://www.amazon.com/s?k=Metamucil+Psyllium+Husk+Capsules&tag=fitlabreviews-20",
  },
  {
    name: "Nature's Bounty Green Tea Extract 315mg",
    brand: "Nature's Bounty",
    category: "Green Tea / EGCG",
    score: 7,
    price: "$8.99 / 100 caps",
    perServe: "~$0.09",
    why: "Pure green tea extract standardized to EGCG — the single most evidence-backed thermogenic compound in Citrus Burn's formula. Hurley et al. (2014) meta-analysis found green tea catechins increase fat oxidation by 16%. At $0.09/serving, you get the most proven ingredient alone for a fraction of the cost.",
    image: "https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/green_tea_extract.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZ3JlZW5fdGVhX2V4dHJhY3Qud2VicCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIwMTYzODUsImV4cCI6MjQ3NTgwODM4NX0.DJ7rynOvmiH-KGtpWv1uYe2Jy3AmK3szvVbCNp-odFw",
    buyUrl: "https://www.amazon.com/s?k=Nature%27s+Bounty+Green+Tea+Extract+315mg&tag=fitlabreviews-20",
  },
  {
    name: "Nutricost Caffeine Pills 200mg",
    brand: "Nutricost",
    category: "Stimulant / Thermogenic",
    score: 7,
    price: "$12.95 / 250 caps",
    perServe: "~$0.05",
    why: "Caffeine is the most studied thermogenic compound on earth. Dulloo et al. (1989) showed 100mg caffeine increases metabolic rate by 3–4%. At $0.05 per 200mg dose, this delivers a stronger evidence base for fat oxidation than the entire Citrus Burn proprietary blend — at 1/50th the cost.",
    image: "https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/nutricost-caffeine.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvbnV0cmljb3N0LWNhZmZlaW5lLndlYnAiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMDE2NDU5LCJleHAiOjI0NzU4MDg0NTl9.LAFZ3Ke8TeHqKrORTNtsZ4nIhlbkIxd8QyAOLmgulxA",
    buyUrl: "https://www.amazon.com/s?k=Nutricost+Caffeine+Pills+200mg&tag=fitlabreviews-20",
  },
];

// ── Related Reviews ────────────────────────────────────────────────────────

const relatedReviews = [
  {
    slug: "arrae-bloat",
    title: "Arrae Bloat",
    brand: "Arrae",
    category: "Digestive Enzymes",
    rating: 7 as ReviewRating,
    verdict: "Clean label and organic — but underdosed ginger and hidden doses.",
    publishedAt: "2026-05-30",
    figNumber: "01",
  },
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    category: "Whey Protein",
    rating: 9 as ReviewRating,
    verdict: "The benchmark whey — Informed Choice, NSF, and real transparency.",
    publishedAt: "2026-04-15",
    figNumber: "02",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function CitrusBurnReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home",        href: "/" },
              { label: "Reviews",     href: "/reviews" },
              { label: "Fat Burners", href: "/category/fat-burners" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>
                  {crumb.label}
                </Link>
                {i < arr.length - 1 && <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Citrus Burn</span>
          </div>
        </div>

        {/* 2. Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A0F08 0%, #2C1A10 50%, #1A0F08 100%)", borderBottom: "1px solid #E4E8E5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,106,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-060</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C98A1E", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Citrus
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C98A1E", fontSize: "0.85em" }}>Burn</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Seven botanicals, zero disclosed doses, bold claims with no cited studies. A ClickBank fat burner that hides everything behind a proprietary blend. Here&apos;s what the evidence actually says about each ingredient — and why you can&apos;t apply any of it to this product.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    href="https://622373lrqzdlgum9yk-k495nwd.hop.clickbank.net/?&traffic_source=fitlab&traffic_type=website"
                    target="_blank"
                    rel="nofollow noopener noreferrer sponsored"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C98A1E", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
                  >
                    Visit Official Site <ExternalLink size={13} />
                  </a>
                  <Link
                    href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}
                  >
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #FFFFFF)" }} />
        </div>

        {/* 3. Star row + metadata strip */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 4 }}>
              {Array.from({ length: editorialScore }, (_, i) => (
                <Star key={`f${i}`} size={12} fill="#C98A1E" color="#C98A1E" />
              ))}
              {Array.from({ length: 10 - editorialScore }, (_, i) => (
                <Star key={`e${i}`} size={12} fill="none" color="#C98A1E" />
              ))}
              <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", marginLeft: 6 }}>
                {editorialScore}/10
              </span>
            </div>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>REV-2026-060</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Fat Burner · Weight Management</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Jun 21, 2026</span>
          </div>
        </div>

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",     value: "Citrus Burn"               },
            { label: "Category",  value: "Fat Burner"                },
            { label: "Serving",   value: "1 capsule / day"           },
            { label: "Price",     value: "$49–$79 / 30 caps"         },
            { label: "Per Serve", value: "$1.63–$2.63"               },
            { label: "Published", value: "Jun 21, 2026"              },
          ]} />
        </div>

        {/* 5. Author box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #E4E8E5, #C98A1E)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#FFFFFF", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>
                Reviewed by the full team · <Link href="/authors" style={{ color: "#0F7A5A", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* 6. Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#92620A", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B5B3E", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
              Affiliate disclosure: Links on this page may earn a commission. Scores and verdicts are editorially independent — we do not adjust ratings based on affiliate partnerships.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 8. Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop sidebar TOC */}
            <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article */}
            <article style={{ minWidth: 0 }}>

              {/* § 01 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Quick Verdict
                </h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 10 }}>FSP Score · 4/10</p>
                  <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.8, marginBottom: 0 }}>
                    Citrus Burn is a proprietary-blend fat burner sold exclusively through ClickBank affiliate marketing. It contains seven botanical ingredients — synephrine (bitter orange), cayenne, ginger, green tea, berberine, Korean red ginseng, and apple cider vinegar — all of which have some individual evidence at specific doses. The problem: not a single dose is disclosed. The sales page claims &quot;74% increased thermogenesis&quot; and &quot;54% reduced cravings&quot; without citing a study, naming a sample size, or linking to a published paper. &quot;Thermogenic resistance&quot; — the condition it claims to solve — is not a recognized term in metabolic science. The 180-day money-back guarantee is genuinely generous. Almost everything else about this product&apos;s marketing fails basic scrutiny.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#1A1714", margin: 0, lineHeight: 1 }}>
                        {p.score.toFixed(1)}
                        <span style={{ fontSize: "0.5em", color: "#586259", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 400 }}>/10</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 02 What Is Citrus Burn? */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  What Is Citrus Burn?
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Citrus Burn is a one-capsule-daily fat burner positioned as a solution for people over 35 who struggle with stubborn body fat. The product&apos;s core marketing premise is &quot;thermogenic resistance&quot; — the idea that your body&apos;s fat-burning mechanisms become resistant as you age, and that this blend of seven botanicals reactivates them.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The formula includes p-synephrine (from Seville orange peel), apple cider vinegar, cayenne pepper, ginger, green tea, berberine, and Korean red ginseng. These are real ingredients with real research behind them — at specific, known doses. None of those doses are on the Citrus Burn label.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The product is sold exclusively through its own website via ClickBank, a digital product marketplace known for affiliate-marketed health supplements. It is not available on Amazon, at any major retailer, or in any pharmacy. Pricing ranges from $49 per bottle (6-bottle pack) to $79 per bottle (2-bottle pack), each bottle being a 30-day supply.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The manufacturer is not named on the website. The sales page references &quot;FDA-registered facility&quot; and &quot;GMP-certified&quot; but does not identify the contract manufacturer, the facility location, or any batch testing results.
                </p>
              </section>

              {/* § 03 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Score Breakdown
                </h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-060" />
                <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) is weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%. Red flag deductions applied. Editorial score reflects holistic assessment.
                </p>
              </section>

              {/* § 04 Flags */}
              <section id="flags" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Red &amp; Green Flags
                </h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 05 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Supplement Facts
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "28%" }}>Amount / Serving</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "30%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Seville Orange Peel (p-synephrine)",       amount: "Undisclosed", clinical: "10–50mg" },
                        { name: "Spanish Red Apple Vinegar",                 amount: "Undisclosed", clinical: "750–1,500mg" },
                        { name: "Andalusian Red Pepper (cayenne)",           amount: "Undisclosed", clinical: "2–6mg capsaicin" },
                        { name: "Himalayan Mountain Ginger",                 amount: "Undisclosed", clinical: "1,000–2,000mg" },
                        { name: "Ceremonial Green Tea (EGCG)",               amount: "Undisclosed", clinical: "400–500mg EGCG" },
                        { name: "Berberine",                                 amount: "Undisclosed", clinical: "900–1,500mg" },
                        { name: "Korean Red Ginseng",                        amount: "Undisclosed", clinical: "200–400mg" },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", color: "#9B2020" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.clinical}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", marginTop: 10 }}>
                  Serving Size: 1 capsule · Servings Per Container: 30 · All ingredient doses: UNDISCLOSED
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginTop: 16 }}>
                  This is the core problem with Citrus Burn: every single ingredient amount is hidden. A single capsule physically holds approximately 500–700mg of total powder. The clinical doses needed for synephrine alone (10–50mg), berberine (900–1,500mg), and green tea EGCG (400–500mg) already total well over 1,300mg at their low ends. It is physically impossible for a single capsule to contain clinically effective doses of all seven ingredients simultaneously.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Ingredient Breakdown
                </h2>

                {([
                  {
                    name: "Seville Orange Peel (p-Synephrine) — dose undisclosed",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Plausible, dose unknown",
                    body: "p-Synephrine is a protoalkaloid that increases resting metabolic rate via beta-3 adrenergic receptor agonism. Stohs et al. (2012, International Journal of Medical Sciences) found 50mg p-synephrine increased resting metabolic rate by ~65 kcal/day. Effective doses range from 10–50mg. Since a single capsule holds roughly 500–700mg total and seven ingredients compete for that space, the synephrine content is likely in the low single digits — well below the doses used in clinical trials.",
                  },
                  {
                    name: "Spanish Red Apple Vinegar (ACV) — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Weak evidence in capsule form",
                    body: "Apple cider vinegar's weight loss evidence is thin. Kondo et al. (2009, Bioscience Biotechnology and Biochemistry) found 15mL of liquid ACV daily reduced body weight by 1–2 kg over 12 weeks in a Japanese cohort — a modest effect from liquid vinegar, not capsule powder. Capsule forms contain negligible acetic acid. No RCT supports ACV capsules for weight loss.",
                  },
                  {
                    name: "Andalusian Red Pepper (Cayenne) — dose undisclosed",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Evidence exists, dose matters",
                    body: "Capsaicin from cayenne increases diet-induced thermogenesis. Ludy & Mattes (2011, Physiology & Behavior) found red pepper increased energy expenditure by ~50 kcal/day — a real but small effect. The sales page claim of '25% more calories after meals' grossly overstates this. Effective capsaicin doses are 2–6mg; whether Citrus Burn contains enough is unknowable.",
                  },
                  {
                    name: "Himalayan Mountain Ginger — dose undisclosed",
                    link: "/ingredients/ginger",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Solid ingredient, unknown dose",
                    body: "Ginger has genuine metabolic evidence. Mansour et al. (2012, Metabolism) found 2g ginger powder increased thermogenesis and reduced hunger feelings in overweight men. The clinical dose is 1,000–2,000mg. In a single capsule with six other ingredients, the ginger content is almost certainly sub-clinical. 'Himalayan Mountain' is a geographic marketing qualifier — not a distinct variety.",
                  },
                  {
                    name: "Ceremonial Green Tea (EGCG) — dose undisclosed",
                    link: null,
                    evidence: "strong" as EvidenceLevel,
                    verdict: "Best-studied ingredient, likely underdosed",
                    body: "Green tea catechins (specifically EGCG) have the strongest evidence base of any ingredient in this formula. Hurley et al. (2014, Nutrition Research Reviews) meta-analyzed 15 RCTs and found green tea catechins increased fat oxidation by 16%. Effective EGCG doses: 400–500mg daily. A single capsule splitting space with six other ingredients cannot reasonably deliver this amount.",
                  },
                  {
                    name: "Berberine — dose undisclosed",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Needs 900–1,500mg — impossible in this format",
                    body: "Berberine activates AMPK (the 'metabolic master switch') and has solid evidence for blood sugar regulation. Yin et al. (2008, Metabolism) used 1,500mg daily divided three times for significant HbA1c reduction. Even the low end of clinical dosing (900mg) exceeds what a single shared capsule can contain. Berberine in Citrus Burn is almost certainly a label decoration, not a therapeutic dose.",
                  },
                  {
                    name: "Korean Red Ginseng — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "General adaptogen, weak fat-loss data",
                    body: "Korean red ginseng (Panax ginseng) is an adaptogen with evidence for cortisol modulation and energy. Reay et al. (2005, Psychopharmacology) found 200mg improved cognitive performance and reduced fatigue. Its direct evidence for fat loss is weak — it may support energy levels during caloric restriction, but calling it a fat burner ingredient is a stretch. Clinical doses: 200–400mg.",
                  },
                ] as { name: string; link: string | null; evidence: EvidenceLevel; verdict: string; body: string }[]).map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
                        {ing.link ? (
                          <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link>
                        ) : ing.name}
                      </p>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <EvidenceBadge level={ing.evidence} showIcon={false} />
                        <span style={{ padding: "3px 9px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 4, fontSize: 10, color: "#6B5B3E", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                          {ing.verdict}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 07 Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Testing &amp; Verification
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "FDA-Registered Facility",       status: "partial" as const },
                    { label: "GMP Certified",                  status: "partial" as const },
                    { label: "Third-Party Inspected",          status: "partial" as const },
                    { label: "COA Published",                  status: "fail"    as const },
                    { label: "NSF / USP Certified",            status: "fail"    as const },
                    { label: "Informed Sport / BSCG",          status: "fail"    as const },
                  ].map((cert) => {
                    const styles = {
                      pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",  border: "rgba(26,107,58,0.2)",  label: "Confirmed",      color: "#1A6B3A" },
                      partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",  border: "rgba(146,98,10,0.2)",  label: "Self-reported",  color: "#92620A" },
                      fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",  border: "rgba(155,32,32,0.18)", label: "Not available",  color: "#9B2020" },
                    }[cert.status];
                    return (
                      <div key={cert.label} style={{ padding: "14px 16px", backgroundColor: styles.bg, border: `1px solid ${styles.border}`, borderRadius: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: styles.dot, flexShrink: 0 }} />
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: styles.color, margin: 0 }}>{styles.label}</p>
                        </div>
                        <p style={{ fontSize: 12, color: "#3C3530", margin: 0, lineHeight: 1.4 }}>{cert.label}</p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                  Every testing and certification claim on the Citrus Burn sales page is either self-reported or misleading. &quot;FDA-registered facility&quot; is a legal requirement for any supplement manufacturer — it means the building is on a government list, not that the product has been reviewed. &quot;GMP-certified&quot; has been mandatory under DSHEA since 2007. &quot;Third-party inspected&quot; is the vaguest possible claim — it does not name the testing body, what was tested, or what the results were. No COAs are published, no independent lab reports are available, and no certifying organization (NSF, USP, BSCG, Informed Sport) lists this product.
                </p>
              </section>

              {/* § 08 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Claim Audit
                </h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 09 How To Take */}
              <section id="how-to-take" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  How to Take It
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Recommended dose",     value: "1 capsule daily"                     },
                    { label: "Timing",                value: "Morning, before breakfast"            },
                    { label: "With water",            value: "Yes — take with a glass of water"    },
                    { label: "Capsule form",          value: "Standard capsule, easy to swallow"    },
                    { label: "Storage",               value: "Cool, dry place"                      },
                    { label: "Duration",              value: "Ongoing — no cycling mentioned"       },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                  The simplicity of the dosing protocol — one capsule daily before breakfast — is a genuine convenience factor. That said, cramming seven active botanicals into a single capsule raises the question of how much of anything you are actually getting per dose. Most serious fat burner formulas require 2–4 capsules per serving precisely because effective doses of thermogenic compounds require physical space.
                </p>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  vs. Competitors
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 600, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Price/serve", "Doses disclosed", "3rd-party cert", "Sold via", "Our take"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", textAlign: "left", borderBottom: "1px solid #3C3530" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Citrus Burn",                       price: "$1.63–$2.63", doses: "0 of 7",    cert: "None",                  sold: "ClickBank",         take: "All claims, no doses, no evidence" },
                        { product: "Transparent Labs PhysiqueSeries",   price: "~$1.50",       doses: "All",        cert: "3rd-party tested",     sold: "Direct + Amazon",   take: "Full transparency, evidence-based" },
                        { product: "Jacked Factory Burn XT",            price: "~$0.67",       doses: "All",        cert: "3rd-party tested",     sold: "Amazon",             take: "Best value thermogenic" },
                        { product: "Nature's Bounty Green Tea 315mg",   price: "~$0.09",       doses: "All",        cert: "USP verified",          sold: "Amazon + retail",   take: "Pure EGCG, strongest single ingredient" },
                        { product: "Nutricost Caffeine 200mg",          price: "~$0.05",       doses: "All",        cert: "3rd-party tested",     sold: "Amazon",             take: "Most evidence-backed thermogenic, cheapest" },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#9B2020" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: "#3C3530", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: row.doses === "0 of 7" ? "#9B2020" : "#3F4B43", fontWeight: row.doses === "0 of 7" ? 700 : 400 }}>{row.doses}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.sold}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{row.take}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.6 }}>
                  Every competitor listed above discloses every ingredient dose, costs less per serving, and has some form of independent testing. Citrus Burn is the most expensive option on the table with the least transparency. Prices verified June 2026.
                </p>
              </section>

              {/* § 11 — 5 Better Alternatives (Healthline-style cards) */}
              <section id="alternatives" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                  5 Better Alternatives
                </h2>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 24 }}>
                  Each product below offers full dose transparency, independent testing, and stronger evidence per dollar. Ranked by overall value and evidence quality.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {alternatives.map((alt, idx) => (
                    <div key={alt.name} style={{ display: "flex", gap: 0, border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                      {/* Left: Image */}
                      <div className="hidden sm:flex" style={{ width: 200, minHeight: 200, backgroundColor: "#F6F8F6", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", borderRight: "1px solid #E4E8E5" }}>
                        <Image
                          src={alt.image}
                          alt={alt.name}
                          width={160}
                          height={160}
                          style={{ objectFit: "contain", padding: 16 }}
                          unoptimized
                        />
                        <div style={{ position: "absolute", top: 10, left: 10, backgroundColor: "#0F7A5A", color: "#FFFFFF", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em" }}>
                          #{idx + 1}
                        </div>
                      </div>
                      {/* Right: Content */}
                      <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span className="block sm:hidden" style={{ backgroundColor: "#0F7A5A", color: "#FFFFFF", padding: "2px 7px", borderRadius: 4, fontSize: 9, fontWeight: 700, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em" }}>#{idx + 1}</span>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259", margin: 0 }}>{alt.brand}</p>
                        </div>
                        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 6 }}>
                          {alt.name}
                        </h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace" }}>{alt.score}/10</span>
                          <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
                          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{alt.price}</span>
                          <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
                          <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>{alt.perServe}/serve</span>
                        </div>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, marginBottom: 14 }}>
                          {alt.why}
                        </p>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                          <a
                            href={alt.buyUrl}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 12, fontWeight: 600, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}
                          >
                            Check Price on Amazon <ExternalLink size={11} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Pros &amp; Cons
                </h2>
                <ProsCons
                  pros={[
                    "180-day money-back guarantee — the longest in the fat burner category",
                    "One-capsule daily dosing is genuinely convenient",
                    "Plant-based, soy-free, dairy-free, non-GMO",
                    "The seven ingredients individually have published research at specific doses",
                    "Made in USA in a GMP-certified facility",
                  ]}
                  cons={[
                    "Every single ingredient dose is hidden — zero transparency",
                    "No independent third-party certification (no NSF, USP, BSCG, Informed Sport)",
                    "Bold efficacy claims ('74% thermogenesis,' '54% reduced cravings') cite no studies",
                    "'Thermogenic resistance' is an invented marketing term, not a medical concept",
                    "Sold exclusively via ClickBank — no Amazon, no retail, limited accountability",
                    "At $49–$79 per bottle, significantly more expensive than transparent alternatives",
                    "Single capsule physically cannot contain clinical doses of all seven ingredients",
                    "Manufacturer identity not disclosed on the website",
                    "Geographic ingredient names ('Seville,' 'Himalayan,' 'Andalusian') are unverifiable marketing embellishments",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Safety &amp; Side Effects
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The individual ingredients in Citrus Burn are generally considered safe at standard supplement doses. The challenge is that without knowing the specific doses, you cannot assess the safety profile accurately. Two ingredients in particular warrant caution.
                </p>
                {[
                  { heading: "Who should NOT take this product", points: [
                    "People on blood pressure medication — synephrine (bitter orange) can increase blood pressure and heart rate, especially combined with caffeine or other stimulants (Haller et al., 2005)",
                    "People on diabetes medications (metformin, insulin) — berberine lowers blood sugar and can cause dangerous hypoglycemia in combination with diabetic drugs",
                    "People on blood thinners (warfarin, aspirin) — ginger has mild antiplatelet activity; berberine may interact with CYP2D6 substrates",
                    "People taking statins — berberine can increase statin blood levels through CYP3A4 inhibition, raising the risk of muscle damage (rhabdomyolysis)",
                    "Pregnant or nursing women — synephrine and berberine have insufficient safety data in pregnancy",
                  ]},
                  { heading: "Generally safe for", points: [
                    "Healthy adults not on medication — these ingredients at low doses are well-tolerated",
                    "The 180-day guarantee limits financial risk from adverse reactions",
                    "Capsule form avoids the gastric irritation common with liquid cayenne",
                  ]},
                ].map((group) => (
                  <div key={group.heading} style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>{group.heading}</p>
                    <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                      {group.points.map((pt) => (
                        <li key={pt} style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* § 14 Price & Value */}
              <section id="value" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Price &amp; Value
                </h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="proprietary blend (total unknown)" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "6-Bottle Pack (180 days)",  price: "$294 total", perServe: "$1.63/day ($49/bottle)" },
                    { option: "3-Bottle Pack (90 days)",   price: "$207 total", perServe: "$2.30/day ($69/bottle)" },
                    { option: "2-Bottle Pack (60 days)",   price: "$158 total", perServe: "$2.63/day ($79/bottle)" },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{row.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.price}</p>
                      <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{row.perServe}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginTop: 16 }}>
                  The 6-bottle pack includes free shipping and two bonus e-books (a 15-day detox guide and a visualization guide). Regardless of pack size, you are paying $1.63–$2.63 daily for a product that discloses zero ingredient doses. Jacked Factory Burn XT delivers a fully transparent, third-party tested thermogenic formula for $0.67/day. The cost difference is not justified by the evidence.
                </p>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Where to Buy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    {
                      retailer: "CitrusBurn.com (ClickBank)",
                      url: "https://622373lrqzdlgum9yk-k495nwd.hop.clickbank.net/?&traffic_source=fitlab&traffic_type=website",
                      note: "Only official sales channel. ClickBank handles payment and refunds. 180-day money-back guarantee.",
                      recommended: true,
                    },
                  ].map((r) => (
                    <div key={r.retailer} style={{ padding: "14px 16px", backgroundColor: r.recommended ? "#FFF5EB" : "#FFFFFF", border: `1px solid ${r.recommended ? "#EBD8C3" : "#E4E8E5"}`, borderRadius: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.08em", fontWeight: 700, color: "#1A1714", margin: 0 }}>{r.retailer}</p>
                        <span style={{ fontSize: 9, padding: "2px 7px", backgroundColor: "rgba(201,138,30,0.12)", border: "1px solid rgba(201,138,30,0.3)", borderRadius: 10, color: "#92620A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em" }}>ONLY OPTION</span>
                      </div>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5, marginBottom: 8, margin: "0 0 8px" }}>{r.note}</p>
                      <a href={r.url} target="_blank" rel="nofollow noopener noreferrer sponsored"
                        style={{ fontSize: 11, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                        Visit site →
                      </a>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.6 }}>
                  Citrus Burn is not available on Amazon, at GNC, Vitamin Shoppe, Walmart, or any other retailer. The only way to purchase is through the official website, which routes payment through ClickBank. ClickBank does have its own consumer protection and refund process, which provides a layer of buyer protection beyond the vendor&apos;s 180-day guarantee. Prices verified June 2026.
                </p>
              </section>

              {/* § 16 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderRadius: 8, border: "1px solid #F2F8F4", overflow: "hidden" }}
                    >
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4 }}>
                          {faq.name}
                        </span>
                        <span className="faq-icon" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#C98A1E" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#3F4B43", lineHeight: 1.7, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon svg { display: none; }
                  details[open] .faq-icon::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 2px;
                    background: #C98A1E;
                    border-radius: 1px;
                  }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Final Verdict
                </h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 12 }}>FSP · 4/10 · Citrus Burn</p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        Citrus Burn contains seven ingredients that individually have some evidence for metabolic support — synephrine, cayenne, ginger, green tea, berberine, ginseng, and apple cider vinegar. That is where the positives end. Every dose is hidden. The sales page cites specific percentages (&quot;74% more thermogenesis,&quot; &quot;54% reduced cravings,&quot; &quot;25% more calories burned&quot;) without linking to a single study. &quot;Thermogenic resistance&quot; is a made-up condition that does not appear in any peer-reviewed journal.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        A single capsule physically cannot contain clinical doses of berberine (900–1,500mg), green tea EGCG (400–500mg), ginger (1,000–2,000mg), and four other ingredients simultaneously. The math does not work. Something — likely most ingredients — is present at a fraction of effective levels.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85 }}>
                        The 180-day guarantee is the one genuine bright spot. If you buy it and feel nothing after two months, you can get your money back — and you probably should. For the same money or less, Transparent Labs Recomp or Jacked Factory Burn XT will give you a fully transparent, third-party tested formula where you can actually verify that every ingredient is present at a dose that does something.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a
                        href="https://622373lrqzdlgum9yk-k495nwd.hop.clickbank.net/?&traffic_source=fitlab&traffic_type=website"
                        target="_blank"
                        rel="nofollow noopener noreferrer sponsored"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#C98A1E", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
                      >
                        Visit Official Site <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", marginTop: 8 }}>$49–$79 · 30 caps · citrusburn.com</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Research References
                </h2>
                <div style={{ padding: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      {
                        text: "Stohs SJ et al. (2012). Effects of p-synephrine alone and in combination with selected bioflavonoids on resting metabolism, blood pressure, heart rate and self-reported mood changes. International Journal of Medical Sciences. 9(7):527–538.",
                        url: "https://doi.org/10.7150/ijms.4446",
                      },
                      {
                        text: "Kondo T et al. (2009). Vinegar intake reduces body weight, body fat mass, and serum triglyceride levels in obese Japanese subjects. Bioscience, Biotechnology, and Biochemistry. 73(8):1837–1843.",
                        url: "https://doi.org/10.1271/bbb.90231",
                      },
                      {
                        text: "Ludy MJ & Mattes RD. (2011). The effects of hedonically acceptable red pepper doses on thermogenesis and appetite. Physiology & Behavior. 102(3-4):251–258.",
                        url: "https://doi.org/10.1016/j.physbeh.2010.11.018",
                      },
                      {
                        text: "Mansour MS et al. (2012). Ginger consumption enhances the thermic effect of food and promotes feelings of satiety without affecting metabolic and hormonal parameters in overweight men. Metabolism. 61(10):1347–1352.",
                        url: "https://doi.org/10.1016/j.metabol.2012.03.016",
                      },
                      {
                        text: "Hurley CF et al. (2014). The effect of caffeine and green tea catechins on fat oxidation: A meta-analysis. Nutrition Research Reviews. 27(2):326–341.",
                        url: "https://doi.org/10.1017/S0954422414000225",
                      },
                      {
                        text: "Yin J et al. (2008). Efficacy of berberine in patients with type 2 diabetes mellitus. Metabolism. 57(5):712–717.",
                        url: "https://doi.org/10.1016/j.metabol.2008.01.013",
                      },
                      {
                        text: "Reay JL et al. (2005). Single doses of Panax ginseng (G115) reduce blood glucose levels and improve cognitive performance during sustained mental activity. Journal of Psychopharmacology. 19(4):357–365.",
                        url: "https://doi.org/10.1177/0269881105053286",
                      },
                      {
                        text: "Haller CA et al. (2005). Hemodynamic effects of ephedra-free weight-loss supplements in humans. American Journal of Medicine. 118(9):998–1003.",
                        url: "https://doi.org/10.1016/j.amjmed.2005.02.034",
                      },
                      {
                        text: "Dulloo AG et al. (1989). Normal caffeine consumption: influence on thermogenesis and daily energy expenditure in lean and postobese human volunteers. American Journal of Clinical Nutrition. 49(1):44–50.",
                        url: "https://doi.org/10.1093/ajcn/49.1.44",
                      },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#0F7A5A", textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
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
              <Link href="/reviews" style={{ fontSize: 12, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
