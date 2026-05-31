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
  title: "YuSleep Review 2026: Does It Actually Work?",
  description:
    "YuSleep sleep drops review: good ingredient list but zero dose disclosure, no third-party testing, $2.30/serving. 'Nano-enhanced' claim is unexplained. FSP 4/10.",
  alternates: { canonical: "/reviews/yusleep" },
  openGraph: {
    title: "YuSleep Review (2026) — Good Ingredients, Hidden Doses",
    description:
      "YuSleep has a promising ingredient stack — L-theanine, magnesium glycinate, 0.9mg melatonin — but hides every dose except melatonin and carries no third-party certification. At $2.30/serving, that opacity is a problem.",
    url: "https://fitlabreviews.com/reviews/yusleep",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 6.0,
      notes:
        "Solid ingredient selection — L-theanine, magnesium glycinate, apigenin, 5-HTP, and low-dose melatonin all have clinical support. However, all doses except melatonin (0.9 mg) are undisclosed, making it impossible to verify whether any ingredient reaches a clinically effective amount.",
    },
    {
      pillar: "transparency",
      score: 2.5,
      notes:
        "No supplement facts panel is published anywhere on the product page or website. The term 'nano-enhanced' is used throughout marketing copy with zero explanation of mechanism, technology, or evidence. This is a fundamental labelling failure.",
    },
    {
      pillar: "verification",
      score: 2.0,
      notes:
        "No third-party certifications (NSF, Informed Choice, USP, Informed Sport) are mentioned anywhere. No COA is linked or referenced. No heavy metals testing data available. The product makes reference to 20 PubMed citations, but citing research that may or may not apply to their undisclosed doses is not the same as independent product verification.",
    },
    {
      pillar: "value",
      score: 3.5,
      notes:
        "At $2.30/serving (best available discounted rate), YuSleep sits well above the sleep supplement category average of ~$0.60–1.40/serving for fully transparent competitors. When you cannot verify whether ingredients are dosed at clinical levels, premium pricing is difficult to justify.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Liquid drop format is convenient and may offer faster absorption onset than capsules. Two-dropper dosing 30 minutes before bed is simple. 60-day money-back guarantee reduces financial risk. Ships within 24 hours.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Melatonin at 0.9 mg — correct low-dose",
      detail:
        "Most commercial sleep supplements overdose melatonin at 5–10 mg. YuSleep's 0.9 mg aligns with Brzezinski et al. (2005) finding that 0.5–1 mg doses produce physiological blood levels without next-day grogginess.",
    },
    {
      type: "green",
      label: "Evidence-backed ingredient list",
      detail:
        "L-theanine, magnesium glycinate, apigenin, 5-HTP, lemon balm, and GABA all have published human trial data supporting sleep-related outcomes — the question is whether YuSleep uses clinical doses.",
    },
    {
      type: "green",
      label: "60-day money-back guarantee",
      detail:
        "A full 60-day no-questions refund policy is a meaningful risk reduction for a first-time buyer, especially given the transparency gaps.",
    },
    {
      type: "green",
      label: "Liquid format — potentially faster onset",
      detail:
        "Sublingual or liquid ingestion can bypass first-pass digestion and reach systemic circulation faster than capsules. No pharmacokinetic data is provided for YuSleep specifically, but the mechanism is plausible.",
    },
    {
      type: "red",
      label: "No supplement facts panel",
      detail:
        "Only melatonin (0.9 mg) is disclosed. All other 9 ingredients have no stated dose. This is not a minor omission — it makes independent verification of efficacy and safety impossible. In the US, supplement labels are legally required to disclose all ingredient amounts per the DSHEA.",
      deduction: 0.5,
    },
    {
      type: "red",
      label: "Zero third-party testing or certification",
      detail:
        "No NSF, Informed Choice, USP, or Informed Sport certification. No COA (certificate of analysis) is available. No heavy metals or contaminant screening data is shared. For a liquid supplement, contamination risk is real and testing matters.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "'Nano-enhanced' claim — undefined and unverified",
      detail:
        "YuSleep markets itself as an 'all-natural nano-enhanced sleep formula' but provides no explanation of what nano-enhancement means, what technology is used, what particle sizes are involved, or what evidence supports enhanced bioavailability from this process. It reads as marketing language.",
      deduction: 0.2,
    },
  ],
  claimAudit: [
    {
      claim: '"Fall asleep faster"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Plausible if L-theanine and apigenin are dosed at clinical levels. Lyon et al. (2011) found 200 mg L-theanine reduced sleep latency. Avallone et al. (2000) showed apigenin binds benzodiazepine receptors. However, YuSleep discloses neither dose — this claim cannot be confirmed or denied based on available label information.",
    },
    {
      claim: '"Stay asleep all night without those brutal 3 AM wake-ups"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "No clinical trial exists on this specific formulation. Magnesium glycinate (Abbasi et al., 2012) and tart cherry (Howatson et al., 2012) show modest improvements in sleep continuity, but 'all night' without wake-ups is an extraordinary claim for an over-the-counter supplement with undisclosed doses.",
    },
    {
      claim: '"All-natural nano-enhanced sleep formula"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "The 'all-natural' portion is likely accurate given the ingredient list. 'Nano-enhanced' is a marketing term used without any mechanistic explanation, particle-size data, or bioavailability comparison. It cannot be verified.",
    },
    {
      claim: '"Supports your brain\'s sleep pressure system"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "GABA and 5-HTP do interact with GABAergic and serotonergic pathways involved in sleep regulation. Hepsomali et al. (2020) reviewed GABA supplementation and sleep. However, 'sleep pressure system' conflates adenosine-driven homeostatic pressure with GABAergic sedation — these are distinct mechanisms, and the language is imprecise.",
    },
    {
      claim: '"36,498+ reviews"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "This figure appears on the marketing page with no link to a verifiable platform (Amazon, Trustpilot, BBB). No independent review aggregator shows this volume. The number is unverifiable from publicly available sources.",
    },
  ],
  valueMetric: {
    pricePerServing: 2.30,
    primaryActiveGrams: 0.0009,
    pricePerGramActive: 2555.56,
    categoryAvgPricePerGram: 40.0,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 4 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is YuSleep?" },
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
      name: "Does YuSleep actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ingredients in YuSleep — L-theanine, magnesium glycinate, apigenin, 5-HTP, and low-dose melatonin — each have published clinical evidence supporting sleep quality improvements. The problem is that YuSleep does not disclose the dose of any ingredient except melatonin (0.9 mg). Without knowing whether you're getting 50 mg or 200 mg of L-theanine, or 100 mg or 400 mg of magnesium glycinate, it's impossible to predict whether the formula will work for you. It may work — the ingredients are real — but you're essentially trusting the manufacturer blind.",
      },
    },
    {
      "@type": "Question",
      name: "Why doesn't YuSleep show ingredient doses on their label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YuSleep does not publish a supplement facts panel or disclose per-ingredient doses (except for melatonin at 0.9 mg). The brand has not publicly explained why. Under DSHEA regulations, US dietary supplements are required to disclose all ingredient amounts on the label. We cannot independently verify whether the product sold online meets this requirement without purchasing it and reviewing the physical label. This is one of our primary concerns with the product.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'nano-enhanced' mean in YuSleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YuSleep describes itself as a 'nano-enhanced' formula but provides no explanation of what this means. Nano-emulsification is a real technology used to increase bioavailability of fat-soluble compounds, but YuSleep provides no particle-size data, bioavailability comparison studies, or independent validation of this claim. Based on available information, 'nano-enhanced' appears to be a marketing term without verifiable scientific backing.",
      },
    },
    {
      "@type": "Question",
      name: "Is YuSleep safe to take every night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The individual ingredients at typical clinical doses are generally well-tolerated for nightly use: melatonin at 0.9 mg is a physiological dose; L-theanine is non-sedating and non-habit-forming; magnesium glycinate is widely used long-term. However, because YuSleep does not disclose doses for most ingredients, it is not possible to confirm that amounts are within safe ranges. 5-HTP, for example, carries interaction risks with SSRIs and MAOIs. Consult a doctor before using if you take any medication.",
      },
    },
    {
      "@type": "Question",
      name: "How long does YuSleep take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YuSleep's website claims noticeable effects within 3–7 days. This is plausible for some ingredients: melatonin and L-theanine can act acutely on the same night. Magnesium glycinate typically requires 1–2 weeks of consistent use to influence sleep architecture. The claim of a 'complete sleep system reset' in 3–6 months is a marketing construct — no clinical evidence supports this framing for any over-the-counter sleep supplement.",
      },
    },
    {
      "@type": "Question",
      name: "Is YuSleep third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. As of May 2026, YuSleep does not hold any third-party certification (NSF, Informed Choice, USP, Informed Sport) and does not publish a certificate of analysis (COA) for heavy metals, microbials, or identity testing. This is a significant gap for a liquid supplement.",
      },
    },
    {
      "@type": "Question",
      name: "How does YuSleep compare to other sleep supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YuSleep's ingredient selection is competitive with supplements like Luna (Nested Naturals) and Performance Lab Sleep. The key difference is transparency: Luna and Performance Lab both publish full supplement facts panels with exact doses. At $2.30/serving (best discounted price), YuSleep also costs considerably more than most transparent alternatives in the category.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take YuSleep if I'm on medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Potentially not safely, depending on your medication. 5-HTP interacts with SSRIs, MAOIs, and triptans — combining them can cause serotonin syndrome. GABA supplementation may interact with CNS depressants including benzodiazepines and alcohol. Melatonin can interact with blood thinners and immunosuppressants. Because exact doses are not disclosed, your doctor cannot properly evaluate risk. Do not take YuSleep alongside any prescription medication without medical advice.",
      },
    },
    {
      "@type": "Question",
      name: "Is the '36,498+ reviews' claim on YuSleep's website real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This figure cannot be independently verified. No link is provided to a third-party review platform (Amazon, Trustpilot, or BBB) showing this volume. The number is displayed on the YuSleep marketing page without source attribution. We treat unverifiable review counts as a marketing claim, not an objective data point.",
      },
    },
    {
      "@type": "Question",
      name: "Is the YuSleep 60-day money-back guarantee legit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The guarantee is stated clearly on their website: 60 days, no questions asked. We cannot independently verify their return process since this review is based on website analysis. A 60-day window is generous and is one of the few positives here. If you try it and it doesn't work, you should be able to get your money back — but keep your order confirmation and email correspondence.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/yusleep#review",
  name: "YuSleep — Fitlabreviews FSP Review",
  reviewBody:
    "YuSleep is a liquid sleep supplement with a promising ingredient list — L-theanine, magnesium glycinate, apigenin, 5-HTP, and 0.9 mg melatonin — but fails on transparency by disclosing no doses except melatonin. No third-party testing is mentioned, and the 'nano-enhanced' marketing claim is unexplained. At $2.30/serving, the price premium is hard to justify given these gaps. FSP v2.1 composite: " +
    composite.toFixed(1) +
    " / 10. Editorial: 4/10.",
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
    name: "YuSleep Nano-Enhanced Sleep Drops",
    brand: { "@type": "Brand", name: "YuSleep" },
    category: "Sleep Supplement",
    description:
      "Liquid sleep supplement containing melatonin, L-theanine, magnesium glycinate, apigenin, 5-HTP, lemon balm, GABA, red tart cherry, and B vitamins.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "69.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://maxwebpromo.com/11204/3795/3/",
    },
  },
};

const relatedReviews = [
  {
    slug: "arrae-bloat",
    title: "Arrae Bloat Capsules",
    brand: "Arrae",
    category: "Gut Health",
    rating: 7 as ReviewRating,
    verdict:
      "Clean, filler-free organic herb blend. Ginger underdosed, 5 of 6 amounts hidden. Marketing outpaces the evidence.",
    publishedAt: "2026-05-27",
    figNumber: "054",
  },
  {
    slug: "gorilla-mind-creatine-monohydrate",
    title: "Gorilla Mind Creatine Monohydrate",
    brand: "Gorilla Mind",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict:
      "100 servings of pure micronized creatine monohydrate at $0.35/serving. HPLC tested. The value benchmark in the category.",
    publishedAt: "2026-05-27",
    figNumber: "058",
  },
  {
    slug: "transparent-labs-creatine-hmb",
    title: "Transparent Labs Creatine HMB",
    brand: "Transparent Labs",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict:
      "5g creatine + 1.5g HMB + Vitamin D3. Informed Sport certified. Best creatine stack for caloric-deficit training.",
    publishedAt: "2026-05-27",
    figNumber: "056",
  },
];

export default function YuSleepReview() {
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

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Sleep", href: "/category/sleep-supplements" },
            ].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>YuSleep</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #0F0B1C 0%, #080610 100%)", position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Pill row — hidden on mobile */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-059</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(242,235,217,0.15)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B4FA0", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Sleep Supplement</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  YuSleep<br />
                  <em style={{ fontWeight: 400, color: "#A89880", fontSize: "0.65em" }}>Does It Actually Work?</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Promising ingredient list. Liquid format. Low-dose melatonin. And absolutely no supplement facts panel disclosing what you're actually getting per dropper. We tested the claims.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://maxwebpromo.com/11204/3795/3/" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#6B4FA0", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Check Price <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(242,235,217,0.15)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>

              {/* Product image — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/yusleep.webp" alt="YuSleep sleep drops bottle" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(107,79,160,0.5))" }} priority />
                </div>
              </div>

              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>

            {/* Star row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} size={13} fill="#6B4FA0" color="#6B4FA0" />
                ))}
                {[5, 6, 7, 8, 9, 10].map((s) => (
                  <Star key={s} size={13} fill="none" color="rgba(107,79,160,0.35)" />
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.4)", letterSpacing: "0.12em" }}>4 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "YuSleep" },
            { label: "Category", value: "Sleep Supplement" },
            { label: "Form", value: "Liquid drops" },
            { label: "Serving", value: "2 droppers / night" },
            { label: "Price", value: "$69/mo (2-mo pack)" },
            { label: "Per Serving", value: "$2.30" },
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
              <p style={{ fontSize: 12, color: "#5C5650" }}>Ingredient and labelling analysis · FSP v2.1 scoring · Claims cross-referenced against PubMed literature</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Review</span>
            </div>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links below may earn a commission. Scores and verdicts are editorially independent.{" "}
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

        {/* Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article */}
            <article style={{ minWidth: 0 }}>

              {/* § 1 — Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>

                {/* Dark verdict panel */}
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 14, marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B4FA0", marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-059</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4, marginBottom: 0 }}>
                        Good ingredients on paper. Zero transparency on doses. At $2.30 a night, that's a problem.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#6B4FA0", lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.75, marginBottom: 0 }}>
                    YuSleep contains a genuinely interesting ingredient combination — <Link href="/ingredients/l-theanine" style={{ color: "#9B7FD0", textDecoration: "none" }}>L-theanine</Link>, magnesium glycinate, apigenin, 5-HTP, and melatonin at a sensibly low 0.9 mg. Each ingredient has clinical literature behind it at the right dose. The problem is that "at the right dose" qualifier: YuSleep discloses doses for exactly one of its ten ingredients (melatonin). The other nine are listed with no quantity. There is no supplement facts panel on their website. No third-party certification. And a marketing claim — "nano-enhanced" — that they never explain. For a product priced at premium tier, the opacity is inexcusable.
                  </p>
                </div>

                {/* 5-pillar grid */}
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => {
                    const labels: Record<string, string> = {
                      formula: "Formula",
                      transparency: "Transparency",
                      verification: "Verification",
                      value: "Value",
                      practical: "Practical",
                    };
                    const weights: Record<string, string> = {
                      formula: "35%",
                      transparency: "25%",
                      verification: "20%",
                      value: "12%",
                      practical: "8%",
                    };
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
                  <div style={{ background: "linear-gradient(145deg, #0F0B1C 0%, #080610 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(107,79,160,0.15)", border: "1px solid rgba(107,79,160,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B7FD0" }}>
                      <ShieldCheck size={10} /> Liquid Drops
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/yusleep.webp" alt="YuSleep sleep drops" fill
                        style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(107,79,160,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>YuSleep</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Nano-Enhanced Sleep Drops</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[
                        { val: `${editorialScore}/10`, label: "FSP Score" },
                        { val: "0.9mg", label: "Melatonin" },
                        { val: "10", label: "Ingredients" },
                      ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#6B4FA0", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>From / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$69.00</p>
                      </div>
                      <a href="https://maxwebpromo.com/11204/3795/3/" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#6B4FA0", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Check Price <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 — What Is YuSleep? */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is YuSleep?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  YuSleep is a liquid sleep supplement sold as "nano-enhanced sleep drops." You take two droppers 30 minutes before bed. The formula contains ten ingredients including <Link href="/ingredients/melatonin" style={{ color: "#6B4FA0", textDecoration: "none" }}>melatonin</Link> (0.9 mg — the only dose disclosed), <Link href="/ingredients/l-theanine" style={{ color: "#6B4FA0", textDecoration: "none" }}>L-theanine</Link>, magnesium glycinate, apigenin, 5-HTP, lemon balm extract, GABA, red tart cherry extract, and vitamins B6 and B2.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  The brand targets common sleep complaints: difficulty falling asleep, frequent night waking, and non-restorative sleep. Its marketing positions the product as working with the body's natural circadian rhythm rather than knocking you out artificially — a reasonable framing given the ingredient list.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  The "nano-enhanced" descriptor is applied across all marketing materials without explanation. In supplement science, nano-emulsification refers to reducing active compounds to nano-scale droplets for faster absorption — a real technology used in some pharmaceutical and nutraceutical formulations. Whether YuSleep uses this technology, and whether it applies to their specific ingredients, is never stated.
                </p>

                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 20 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Who makes YuSleep?</p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                    YuSleep is sold via getyusleep.com. The company behind the brand is not prominently disclosed on the product page. No parent company, manufacturing facility, or GMP certification is referenced. This is consistent with the broader transparency issues throughout the product's marketing.
                  </p>
                </div>
              </section>

              {/* § 3 — Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-059" />
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 16, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  FSP v2.1 composite score: <strong style={{ color: "#1A1714" }}>{composite.toFixed(1)}</strong> / 10 (weighted pillars minus red flag deductions). Editorial score: <strong style={{ color: "#1A1714" }}>{editorialScore}</strong> / 10. Scores are set independently — composite reflects the algorithmic weighting, editorial reflects our overall assessment.
                </p>
              </section>

              {/* § 4 — Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 — Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Serving size: 2 droppers (approx. 1 ml). Based on publicly available information as of May 2026.
                </p>

                <div style={{ padding: "14px 18px", backgroundColor: "#FFF5F5", border: "1px solid #F5BFBF", borderRadius: 8, marginBottom: 20, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <AlertTriangle size={14} style={{ color: "#8B3A2C", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 13, color: "#8B3A2C", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong>YuSleep does not publish a supplement facts panel on their website.</strong> The only disclosed dose is melatonin (0.9 mg). All other ingredient amounts are unknown. The table below reflects what is and is not disclosed — not inferred estimates.
                  </p>
                </div>

                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "28%" }}>Amount / Serving</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "30%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Melatonin", amount: "0.9 mg", clinical: "0.5–1 mg" },
                        { name: "L-Theanine", amount: "Undisclosed", clinical: "100–400 mg" },
                        { name: "Magnesium Glycinate", amount: "Undisclosed", clinical: "200–400 mg" },
                        { name: "Apigenin", amount: "Undisclosed", clinical: "50 mg" },
                        { name: "5-HTP", amount: "Undisclosed", clinical: "50–300 mg" },
                        { name: "GABA", amount: "Undisclosed", clinical: "100–300 mg" },
                        { name: "Lemon Balm Extract", amount: "Undisclosed", clinical: "300–600 mg" },
                        { name: "Red Tart Cherry Extract", amount: "Undisclosed", clinical: "480 mg (480 mg/d study)" },
                        { name: "Vitamin B6 (Pyridoxine)", amount: "Undisclosed", clinical: "1.3–2 mg (RDA)" },
                        { name: "Vitamin B2 (Riboflavin)", amount: "Undisclosed", clinical: "1.1–1.3 mg (RDA)" },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: row.amount === "0.9 mg" ? "#2D6A4F" : "#8B3A2C" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.clinical !== "—" ? (
                              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                                {row.clinical}
                              </span>
                            ) : (
                              <span style={{ fontSize: 12, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Clinical ranges based on published human trials. "Undisclosed" = not found on product page or label as of May 2026.
                </p>
              </section>

              {/* § 6 — Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Each ingredient is assessed on evidence quality and typical clinical dose — not on YuSleep's formula specifically, since doses are undisclosed.
                </p>

                {[
                  {
                    name: "Melatonin — 0.9 mg",
                    evidence: "strong" as EvidenceLevel,
                    verdict: "Best-dosed ingredient in the formula",
                    body: "Most supplement brands use 5–10 mg melatonin, creating a pharmacological rather than physiological effect. Brzezinski et al. (2005) demonstrated that 0.5–1 mg produces blood levels consistent with natural nocturnal secretion. Ferracioli-Oda et al. (2013) meta-analysis confirmed low-dose melatonin reduces sleep latency and improves quality without the next-morning impairment common at high doses. YuSleep's 0.9 mg is the one thing they got right on the label.",
                  },
                  {
                    name: "L-Theanine — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Evidence-backed — but dose matters enormously",
                    body: "L-theanine promotes alpha brainwave activity and reduces subjective anxiety without sedation. Lyon et al. (2011) found 200 mg/day improved sleep quality in boys with ADHD; Hidese et al. (2019) showed 200–400 mg reduced stress and improved sleep quality in adults. At 50 mg it is largely ineffective. At 200 mg it is meaningful. YuSleep discloses nothing, so this could be either.",
                  },
                  {
                    name: "Magnesium Glycinate — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Solid choice of form — unknown quantity",
                    body: "Glycinate is the best-absorbed form of magnesium for sleep purposes. Abbasi et al. (2012) found 500 mg magnesium supplementation significantly improved insomnia scores, sleep efficiency, and early morning waking in elderly insomniacs. Typical effective range is 200–400 mg elemental magnesium as glycinate. Without a disclosed dose, we cannot assess whether YuSleep's contribution is clinically meaningful.",
                  },
                  {
                    name: "Apigenin — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Mechanistically plausible, human data limited",
                    body: "Apigenin binds the GABA-A receptor benzodiazepine site (Avallone et al., 2000), which explains anxiolytic and mild sedative effects. It is the active compound responsible for chamomile's sleep benefits. Human RCT data is limited — most evidence is from in vitro, animal, or chamomile tea studies. Huberman Lab popularised 50 mg as a dose. YuSleep's amount is unknown.",
                  },
                  {
                    name: "5-HTP — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Effective but carries meaningful interaction risks",
                    body: "5-hydroxytryptophan is a precursor to serotonin, which converts to melatonin in the pineal gland. Birdsall (1998) reviewed 5-HTP's role in improving sleep quality, particularly REM sleep. Effective doses range from 50–300 mg. However, 5-HTP carries a real risk of serotonin syndrome if combined with SSRIs, MAOIs, or triptans. This risk is non-trivial and the undisclosed dose makes it impossible for consumers or doctors to evaluate the interaction.",
                  },
                  {
                    name: "GABA — Undisclosed",
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Limited CNS penetration from oral supplementation",
                    body: "GABA is the primary inhibitory neurotransmitter. The question is whether orally supplemented GABA crosses the blood-brain barrier in meaningful quantities. Hepsomali et al. (2020) reviewed available human data and found modest but inconsistent sleep and anxiety benefits at 100–300 mg. Pharma-GABA (naturally fermented) may have slightly better bioavailability than synthetic. YuSleep does not specify which form or what dose.",
                  },
                  {
                    name: "Lemon Balm Extract — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Reduces cortisol, supports relaxation",
                    body: "Lemon balm (Melissa officinalis) inhibits GABA transaminase, slowing GABA breakdown. Cases et al. (2011) found 600 mg significantly reduced insomnia severity and anxiety. Müller and Klement (2006) showed improved sleep quality in children at 160 mg combined extract. Effective in the 300–600 mg range. Unknown if YuSleep meets this threshold.",
                  },
                  {
                    name: "Red Tart Cherry Extract — Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Natural melatonin source with RCT support",
                    body: "Tart cherry contains naturally occurring melatonin, anthocyanins, and tryptophan. Pigeon et al. (2010) showed tart cherry juice reduced insomnia severity. Howatson et al. (2012) found 480 mg of concentrate significantly increased melatonin levels and improved sleep duration and quality in healthy adults. The clinical dose (480 mg) is specific — without label disclosure, we can't verify attainment.",
                  },
                  {
                    name: "Vitamins B6 & B2 — Undisclosed",
                    evidence: "emerging" as EvidenceLevel,
                    verdict: "Cofactors for melatonin synthesis — correct rationale",
                    body: "Vitamin B6 (pyridoxine) is a cofactor in the conversion of tryptophan → 5-HTP → serotonin → melatonin. Clayton (2010) documented B6's role in this pathway. B2 (riboflavin) supports mitochondrial function and circadian entrainment. Including both makes mechanistic sense for a sleep formula, and the RDA doses needed are small (1–2 mg each). These are likely to be adequately dosed even in a small-volume liquid.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 8 ? 28 : 0, padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B4FA0", marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 7 — Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#FFF5F5", border: "1px solid #F5BFBF", borderRadius: 12, marginBottom: 20 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B3A2C", marginBottom: 10 }}>No Third-Party Verification Found</p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    As of May 2026, YuSleep holds no NSF Certified for Sport, Informed Choice, Informed Sport, USP Verified, or BSCG certification. No certificate of analysis (COA) for heavy metals, microbials, or ingredient identity is published or linked on their website. The brand cites 20 PubMed references on their page — but citing external research is different from having your actual product independently tested.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                  {[
                    { label: "NSF Certified", status: false },
                    { label: "Informed Choice", status: false },
                    { label: "USP Verified", status: false },
                    { label: "COA Published", status: false },
                    { label: "Heavy Metals Tested", status: false },
                    { label: "GMP Facility Noted", status: false },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "14px 16px", backgroundColor: item.status ? "rgba(45,106,79,0.06)" : "rgba(139,58,44,0.06)", border: `1px solid ${item.status ? "rgba(45,106,79,0.2)" : "rgba(139,58,44,0.2)"}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                       <span style={{ display: "inline-flex", alignItems: "center", color: item.status ? "#2D6A4F" : "#8B3A2C" }}>
                         {item.status
                           ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                           : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                         }
                       </span>
                      <span style={{ fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 8 — Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 9 — How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Brand Protocol</p>
                  <p style={{ fontSize: 15, color: "#1A1714", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 2 droppers, 30 minutes before bed.</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    The brand does not specify whether to take it sublingually (under the tongue), mixed into water, or swallowed directly. This matters for absorption — sublingual delivery bypasses first-pass digestion and may be relevant to the "nano-enhanced" claim. No guidance is given.
                  </p>
                </div>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>What the evidence actually supports</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Melatonin: take 30–60 min before target sleep time. Timing matters more than dose for circadian effect.",
                      "L-Theanine: can be taken within 30 min of sleep. Acute anxiolytic effect. Non-sedating on its own.",
                      "Magnesium glycinate: accumulates over days — daily consistency matters more than exact timing.",
                      "5-HTP: take with or without food, 30–60 min before bed. Avoid combining with antidepressants.",
                      "GABA + Lemon Balm: best taken on an empty stomach or with light carbohydrates for CNS effect.",
                    ].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 10 — vs. Competitors */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>

                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 620, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Form", "Key Actives", "Doses Disclosed?", "3rd-Party", "$/Serving"].map((h) => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "YuSleep", form: "Liquid drops", actives: "Melatonin, L-Theanine, Mag Glycinate, Apigenin, 5-HTP", doses: "No (1 of 10)", cert: "None", price: "$2.30", highlight: true },
                        { product: "Luna (Nested Naturals)", form: "Capsules", actives: "Melatonin 6mg, L-Theanine 100mg, Mag 200mg, Valerian", doses: "Yes — full", cert: "None listed", price: "$0.50", highlight: false },
                        { product: "Performance Lab Sleep", form: "Capsules", actives: "Tart Cherry 500mg, Mag 100mg, L-Theanine 100mg", doses: "Yes — full", cert: "Informed Sport", price: "$1.40", highlight: false },
                        { product: "Natrol Advanced Sleep", form: "Tablets", actives: "Melatonin 10mg, L-Theanine 200mg, Valerian 100mg", doses: "Yes — full", cert: "None listed", price: "$0.30", highlight: false },
                        { product: "OLLY Sleep", form: "Gummies", actives: "Melatonin 5mg, L-Theanine 100mg, Botanicals", doses: "Partial", cert: "None listed", price: "$0.50", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(107,79,160,0.06)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.form}</td>
                          <td style={{ padding: "11px 14px", fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.actives}</td>
                          <td style={{ padding: "11px 14px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: row.doses.startsWith("Yes") ? "rgba(45,106,79,0.10)" : "rgba(139,58,44,0.10)", border: `1px solid ${row.doses.startsWith("Yes") ? "rgba(45,106,79,0.25)" : "rgba(139,58,44,0.25)"}`, borderRadius: 20, fontSize: 10, color: row.doses.startsWith("Yes") ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600, whiteSpace: "nowrap" }}>
                              {row.doses}
                            </span>
                          </td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.cert === "None" || row.cert === "None listed" ? "#8B3A2C" : "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.highlight ? "#8B3A2C" : "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Prices verified May 2026 at best available single-purchase price. YuSleep's discounted 2-month pack price used ($138 ÷ 60 servings).
                </p>

                <div style={{ marginTop: 20, padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Takeaway</p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Every main competitor publishes full or partial dose information. Performance Lab Sleep is the closest premium alternative with transparent dosing and Informed Sport certification at $1.40/serving — still expensive but justifiably so. Luna offers a transparent, well-dosed capsule at $0.50/serving. YuSleep's liquid format is a genuine differentiator, but at 4–5× the per-serving cost of transparent alternatives and with no disclosed doses, the premium is unjustifiable on current evidence.
                  </p>
                </div>
              </section>

              {/* § 11 — Products at a Glance */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard
                    name="YuSleep Sleep Drops"
                    brand="YuSleep"
                    category="Sleep Supplement"
                    score={4}
                    priceUSD="$69.00 / 30 servings"
                    priceINR="N/A"
                    tags={["Liquid Drops", "Melatonin 0.9mg"]}
                    buyUrl="https://maxwebpromo.com/11204/3795/3/"
                    buyLabel="Check Price"
                    reviewSlug="yusleep"
                    image="yusleep.webp"
                    bgFrom="#0F0B1C"
                    bgTo="#080610"
                    accent="#6B4FA0"
                    featured={true}
                  />
                  <ProductCard
                    name="Performance Lab Sleep"
                    brand="Performance Lab"
                    category="Sleep Supplement"
                    priceUSD="$42.00 / 30 servings"
                    priceINR="N/A"
                    tags={["Informed Sport", "Full Label"]}
                    buyUrl="https://www.amazon.com/s?k=performance+lab+sleep"
                    buyLabel="Check on Amazon"
                    bgFrom="#1A1E2E"
                    bgTo="#11131E"
                    accent="#3A5F8B"
                  />
                  <ProductCard
                    name="Luna Sleep Aid"
                    brand="Nested Naturals"
                    category="Sleep Supplement"
                    priceUSD="$14.99 / 30 servings"
                    priceINR="N/A"
                    tags={["Full Label", "Valerian"]}
                    buyUrl="https://www.amazon.com/s?k=luna+sleep+nested+naturals"
                    buyLabel="Check on Amazon"
                    bgFrom="#1A2E1E"
                    bgTo="#0F1A11"
                    accent="#2D6A4F"
                  />
                </div>
              </section>

              {/* § 12 — Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Melatonin dosed at 0.9 mg — physiological, not pharmacological",
                    "Strong ingredient selection: L-theanine, magnesium glycinate, apigenin, and 5-HTP each have clinical backing",
                    "Liquid format may offer faster absorption than capsules",
                    "60-day money-back guarantee reduces purchase risk",
                    "B6 and B2 included as cofactors for melatonin synthesis — mechanistically sound",
                    "Ships within 24 hours with straightforward dosing protocol",
                  ]}
                  cons={[
                    "9 of 10 ingredient doses are completely undisclosed — major transparency failure",
                    "No supplement facts panel published anywhere on the website",
                    "'Nano-enhanced' claim is marketing language with no supporting explanation or data",
                    "No third-party testing (NSF, Informed Choice, USP, Informed Sport, COA)",
                    "$2.30/serving — 3–4× more expensive than transparent alternatives with full labels",
                    "Review count of 36,498+ cannot be independently verified on any third-party platform",
                    "No manufacturer or company information disclosed on the website",
                    "5-HTP interaction risks cannot be properly assessed without dose disclosure",
                  ]}
                />
              </section>

              {/* § 13 — Safety & Side Effects */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  At typical clinical doses, most of YuSleep's ingredients are well-tolerated. The undisclosed doses introduce uncertainty — both about efficacy and about safety in sensitive populations.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      label: "5-HTP + Antidepressants",
                      severity: "high",
                      detail: "Combining 5-HTP with SSRIs, MAOIs, or serotonergic triptans can cause serotonin syndrome — a potentially life-threatening condition characterised by agitation, tremor, hyperthermia, and tachycardia. Do not take YuSleep alongside any serotonergic medication without consulting a doctor. This interaction risk applies regardless of dose.",
                    },
                    {
                      label: "GABA + CNS Depressants",
                      severity: "moderate",
                      detail: "GABA supplementation may potentiate the effects of benzodiazepines, alcohol, and other CNS depressants. Sedation can be additive. Avoid combining with these substances.",
                    },
                    {
                      label: "Melatonin + Immunosuppressants / Blood Thinners",
                      severity: "moderate",
                      detail: "Melatonin has immunomodulatory effects and may interact with cyclosporin, warfarin, and fluvoxamine. At 0.9 mg this risk is low, but individuals on these medications should consult a physician.",
                    },
                    {
                      label: "Pregnancy & Breastfeeding",
                      severity: "moderate",
                      detail: "Insufficient safety data exist for 5-HTP, lemon balm extract, and several other YuSleep ingredients during pregnancy or lactation. Avoid use unless specifically approved by your obstetrician.",
                    },
                    {
                      label: "Next-day grogginess",
                      severity: "low",
                      detail: "At 0.9 mg, melatonin is unlikely to cause next-morning impairment. However, GABA and lemon balm at higher-than-typical doses can extend sedation. Since doses are unknown, report any morning sedation and adjust timing.",
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: `1px solid ${item.severity === "high" ? "#F5BFBF" : item.severity === "moderate" ? "rgba(139,115,85,0.3)" : "#D4C9B8"}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "high" ? "#8B3A2C" : item.severity === "moderate" ? "#8B7355" : "#4A7C59", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EBD9" }}>{item.severity} risk</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.label}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 14 — Price & Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="disclosed active (melatonin 0.9 mg)" />

                <div style={{ marginTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Pricing by Package — Prices verified May 2026</p>
                  <div className="review-table-wrap">
                    <table style={{ borderCollapse: "collapse", minWidth: 500, width: "100%" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#1A1714" }}>
                          {["Package", "Total Price", "Per Bottle", "Per Serving", "Savings"].map((h) => (
                            <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { pack: "2-Month (2 bottles)", total: "$138", perBottle: "$69.00", perServe: "$2.30", savings: "Save $60 (30% off)" },
                          { pack: "3-Month (3 bottles)", total: "$177", perBottle: "$59.00", perServe: "$1.97", savings: "Save $120 (40% off)" },
                          { pack: "6-Month (6 bottles)", total: "$294", perBottle: "$49.00", perServe: "$1.63", savings: "Save $300 (50% off)" },
                        ].map((row, i) => (
                          <tr key={row.pack} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                            <td style={{ padding: "11px 14px", fontSize: 13, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.pack}</td>
                            <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.total}</td>
                            <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.perBottle}</td>
                            <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.perServe}</td>
                            <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.savings}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 13, color: "#8A8480", marginTop: 10, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Original (single-bottle) price not listed on website at time of review. Multi-pack discounts are shown as savings off the "original" price, which may be an artificially high anchor.
                  </p>
                </div>
              </section>

              {/* § 15 — Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B4FA0", marginBottom: 6 }}>Official Channel</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      From $49.00 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ bottle (6-month pack)</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>60-day money-back guarantee · Ships within 24 hours · Prices verified May 2026.</p>
                  </div>
                  <a href="https://maxwebpromo.com/11204/3795/3/" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#6B4FA0", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Check Price
                  </a>
                </div>
                <div style={{ marginTop: 16, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong style={{ color: "#1A1714" }}>Retailer note:</strong> YuSleep appears to be sold exclusively through its own website and affiliate channels. It is not currently listed on Amazon, and no physical retail distribution was found. Purchasing exclusively through one channel means no independent price comparison and no platform-based buyer protection (such as Amazon A-to-Z guarantee). Retain your order email and payment record if you intend to use the 60-day return policy.
                  </p>
                </div>
              </section>

              {/* § 16 — FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}
                    >
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>
                          {faq.name}
                        </span>
                        <span className="faq-icon-yusleep" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#6B4FA0" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-yusleep svg { display: none; }
                  details[open] .faq-icon-yusleep::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 2px;
                    background: #6B4FA0;
                    border-radius: 1px;
                  }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 — Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B4FA0", marginBottom: 8 }}>FSP v2.1 Final Score</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#6B4FA0", lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#A89880" }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4, marginBottom: 0 }}>
                        Interesting idea. Not enough transparency to recommend.
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
                    YuSleep is built on a genuinely thoughtful ingredient selection. The 0.9 mg melatonin dose is correct. The inclusion of L-theanine, magnesium glycinate, apigenin, and 5-HTP shows someone with knowledge of the sleep supplement space put this formula together. If those ingredients are present at clinical doses, this could be an effective product.
                  </p>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
                    But "could be" is not a standard that justifies $2.30/serving. The decision to withhold supplement facts, use undefined marketing terminology ("nano-enhanced"), and make no third-party testing available means that buyers have no way to verify what they're actually purchasing. That's not a minor oversight — it's a fundamental failure of consumer transparency.
                  </p>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 28 }}>
                    If YuSleep published a full supplement facts panel and secured a third-party certification, this review would look significantly different. Until then, we recommend choosing a fully transparent alternative. See <Link href="/reviews/transparent-labs-creatine-hmb" style={{ color: "#9B7FD0", textDecoration: "none" }}>our reviews →</Link> for products that do both.
                  </p>
                  <a href="https://maxwebpromo.com/11204/3795/3/" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#6B4FA0", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Check Current Price <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Brzezinski A et al. (2005). Effects of exogenous melatonin on sleep: a meta-analysis. Sleep Medicine Reviews, 9(1):41–50.", url: "https://doi.org/10.1016/j.smrv.2004.06.004" },
                      { text: "Ferracioli-Oda E, Qawasmi A, Bloch MH. (2013). Meta-analysis: melatonin for the treatment of primary sleep disorders. PLOS ONE, 8(5):e63773.", url: "https://doi.org/10.1371/journal.pone.0063773" },
                      { text: "Lyon MR, Kapoor MP, Juneja LR. (2011). The effects of L-theanine (Suntheanine®) on objective sleep quality in boys with attention deficit hyperactivity disorder. Alternative Medicine Review, 16(4):348–354.", url: "https://pubmed.ncbi.nlm.nih.gov/22214254/" },
                      { text: "Hidese S et al. (2019). Effects of L-theanine administration on stress-related symptoms and cognitive functions in healthy adults. Nutrients, 11(10):2362.", url: "https://doi.org/10.3390/nu11102362" },
                      { text: "Abbasi B et al. (2012). The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial. Journal of Research in Medical Sciences, 17(12):1161–1169.", url: "https://pubmed.ncbi.nlm.nih.gov/23853635/" },
                      { text: "Avallone R et al. (2000). Pharmacological profile of apigenin, a flavonoid isolated from Matricaria chamomilla. Biochemical Pharmacology, 59(11):1387–1394.", url: "https://doi.org/10.1016/s0006-2952(00)00264-1" },
                      { text: "Birdsall TC. (1998). 5-Hydroxytryptophan: a clinically-effective serotonin precursor. Alternative Medicine Review, 3(4):271–280.", url: "https://pubmed.ncbi.nlm.nih.gov/9727088/" },
                      { text: "Hepsomali P et al. (2020). Effects of oral gamma-aminobutyric acid (GABA) administration on stress and sleep in humans: a systematic review. Frontiers in Neuroscience, 14:923.", url: "https://doi.org/10.3389/fnins.2020.00923" },
                      { text: "Cases J et al. (2011). Pilot trial of Melissa officinalis L. leaf extract in the treatment of volunteers suffering from mild-to-moderate anxiety disorders and sleep disturbances. Mediterranean Journal of Nutrition and Metabolism, 4(3):211–218.", url: "https://doi.org/10.1007/s12349-010-0045-4" },
                      { text: "Howatson G et al. (2012). Effect of tart cherry juice (Prunus cerasus) on melatonin levels and enhanced sleep quality. European Journal of Nutrition, 51(8):909–916.", url: "https://doi.org/10.1007/s00394-011-0263-7" },
                      { text: "Pigeon WR et al. (2010). Effects of a tart cherry juice beverage on the sleep of older adults with insomnia: a pilot study. Journal of Medicinal Food, 13(3):579–583.", url: "https://doi.org/10.1089/jmf.2009.0096" },
                      { text: "Clayton PT. (2010). B6-responsive disorders: a model of vitamin dependency. Journal of Inherited Metabolic Disease, 29(2–3):317–326.", url: "https://doi.org/10.1007/s10545-005-0243-2" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#6B4FA0", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
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

        {/* Related Reviews — outside container-pad */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
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
