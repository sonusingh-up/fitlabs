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
  title: "Seed PM-02 Sleep + Restore Review (2026) — Rated 7/10",
  description:
    "Seed PM-02 review: innovative Co-Biotic dual capsule, biphasic 500mcg melatonin, Shoden ashwagandha, ISO 17025 tested. Partial dose disclosure. $1.17/serving. FSP 7/10.",
  alternates: { canonical: "/reviews/seed-pm-02" },
  openGraph: {
    title: "Seed PM-02 Review (2026) — Novel Science, Partial Transparency",
    description:
      "PM-02 pioneers a dual-capsule Co-Biotic delivery — one for the body, one for the microbiome. Biphasic 500mcg melatonin is the right dose. Ashwagandha and postbiotic amounts are undisclosed.",
    url: "https://fitlabreviews.com/reviews/seed-pm-02",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.5,
      notes:
        "500mcg bioidentical biphasic melatonin is the most physiologically appropriate melatonin dose in any commercial sleep supplement we've reviewed. Shoden ashwagandha (a high-potency standardised extract with direct human RCT support for sleep and cortisol) is a legitimate premium ingredient. Spermidine and pterostilbene in the Cellular Renewal Complex are genuinely interesting longevity-adjacent compounds. B vitamins (niacin 5mg, riboflavin 1.3mg, thiamine 1.2mg) are cofactors for melatonin synthesis. The postbiotic / prebiotic gut-brain axis approach is novel. The formulation thinking is excellent — the execution is partially opaque.",
    },
    {
      pillar: "transparency",
      score: 5.5,
      notes:
        "Melatonin (500mcg), B vitamins (Niacin 5mg, Riboflavin 1.3mg, Thiamine 1.2mg), total Cellular Renewal Complex (12mg), and total Gut-Brain Postbiotic (200mg) are disclosed. Shoden ashwagandha dose, PQQ dose, individual component amounts within the 12mg and 200mg blends (spermidine, pterostilbene, GABA, Lactobacillus brevis postbiotic) are all undisclosed. This is better than YuSleep's near-total opacity but falls short of full transparency.",
    },
    {
      pillar: "verification",
      score: 7.0,
      notes:
        "ISO 17025-accredited third-party testing is a meaningful standard — ISO 17025 is the international benchmark for testing laboratory competence. Available in major retail (Target, Sprouts, Amazon) which implies regulatory compliance. No specific NSF, Informed Sport, or USDA Organic certifications. Seed as a brand has established scientific credibility through its DS-01® probiotic, lending institutional trust.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "At $34.99 / 30 servings ($1.17/serving), PM-02 sits between Luna ($0.73) and Performance Lab Sleep ($1.47). The novel Co-Biotic delivery system, biphasic melatonin, and broad-spectrum innovation justify a premium over basic competitors. The undisclosed blend doses prevent full value verification — if the ashwagandha is at a sub-clinical dose, value degrades significantly.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Two-capsule serving. Empty stomach recommended for optimal absorption. Shelf-stable without refrigeration. Available at Target, Sprouts, and Amazon — the broadest retail distribution of any product in this comparison. Vegan. The dual-capsule design is an elegant practical execution of the Co-Biotic concept.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "500mcg biphasic melatonin — most physiologically precise dose in category",
      detail:
        "Seed PM-02 uses 500mcg (0.5mg) bioidentical melatonin in a biphasic release system — rapid-release for sleep onset, extended-release for sleep maintenance. Brzezinski et al. (2005) identified 0.5–1mg as the physiological range. This is the most accurately dosed melatonin in any commercial sleep supplement we've reviewed.",
    },
    {
      type: "green",
      label: "Shoden Ashwagandha — high-potency standardised extract with sleep RCT",
      detail:
        "Shoden is a patented ashwagandha extract standardised to 35% withanolide glycosides — substantially higher than standard KSM-66 (5%) or Sensoril (10%). Deshpande et al. (2020) showed Shoden significantly reduced sleep onset latency, improved sleep quality, and lowered cortisol in adults with insomnia.",
    },
    {
      type: "green",
      label: "ISO 17025-accredited third-party testing",
      detail:
        "ISO 17025 is the international standard for testing laboratory competence, covering both technical requirements and management systems. More rigorous than a brand self-claiming 'third-party tested' without specification.",
    },
    {
      type: "green",
      label: "Dual-capsule Co-Biotic delivery — outer for body, inner for microbiome",
      detail:
        "PM-02 uses a genuinely novel delivery architecture: the outer capsule releases active ingredients for systemic absorption; the inner capsule is acid-resistant and releases postbiotics and prebiotics in the lower GI tract to support the gut microbiome. This is a meaningful innovation, not a marketing construct.",
    },
    {
      type: "red",
      label: "Shoden ashwagandha dose — undisclosed",
      detail:
        "Deshpande et al. (2020) used 120mg Shoden daily for 6 weeks in their sleep RCT. Seed PM-02 does not disclose the Shoden dose. If it is below 120mg, the primary active's efficacy claim is unsubstantiable. This is the most critical missing disclosure.",
      deduction: 0.25,
    },
    {
      type: "red",
      label: "Cellular Renewal Complex (12mg) and Gut-Brain Postbiotic (200mg) — individual doses hidden",
      detail:
        "Spermidine and pterostilbene in the 12mg Cellular Renewal Complex are not individually quantified. GABA and Lactobacillus brevis in the 200mg Gut-Brain Postbiotic are not individually quantified. At 12mg total, meaningful doses of spermidine (~1mg typical) and pterostilbene (~50mg typical) cannot co-exist — suggesting either the blend is present in trace amounts or individual doses are far below clinical ranges.",
      deduction: 0.15,
    },
  ],
  claimAudit: [
    {
      claim: '"Non-habit forming bioidentical melatonin"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Bioidentical melatonin at 500mcg is chemically identical to endogenous melatonin. At physiological dose, no dependency or tolerance has been demonstrated in clinical literature. Brzezinski et al. (2005) confirm low-dose melatonin is safe for regular use without dependency.",
    },
    {
      claim: '"Supports circadian rhythm regulation"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Melatonin's role as a circadian synchroniser (zeitgeber) is well-established. Lewy et al. (1998) demonstrated low-dose melatonin advances the circadian phase. At 500mcg, PM-02's melatonin contribution is physiologically appropriate for circadian entrainment.",
    },
    {
      claim: '"Eases nighttime stress with clinically studied ashwagandha"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Shoden ashwagandha has an RCT from Deshpande et al. (2020) specifically showing sleep improvement and cortisol reduction. The 'clinically studied' claim is accurate for the ingredient. Whether PM-02 uses the studied dose (120mg) is unknown — the dose is not disclosed.",
    },
    {
      claim: '"Promotes deeper overnight restoration"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "No human trial exists on PM-02's specific formulation. The claim aggregates expected benefits of individual ingredients. Spermidine's cellular autophagy effects are real (Eisenberg et al., 2009) but mostly demonstrated in animal models at doses likely above what's present in 12mg total complex.",
    },
    {
      claim: '"Works across human and microbial pathways"',
      verdict: "context-dependent",
      evidence: "emerging",
      notes:
        "The gut-brain axis is a real, well-researched bidirectional communication system (Cryan et al., 2019). Lactobacillus brevis is a GABA-producing strain with published evidence. Whether the postbiotic preparation in PM-02 meaningfully modulates sleep through this pathway is unproven in a product-specific RCT.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.17,
    primaryActiveGrams: 0.0005,
    pricePerGramActive: 2340.0,
    categoryAvgPricePerGram: 40.0,
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
  { id: "what-is", label: "What Is Seed PM-02?" },
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
      name: "What makes Seed PM-02 different from other sleep supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things set PM-02 apart: (1) 500mcg bioidentical biphasic melatonin — the most physiologically accurate melatonin dose in any commercial sleep supplement, designed to mirror the body's natural nocturnal secretion rather than override it; (2) Shoden ashwagandha, a high-potency standardised extract with a direct sleep RCT showing reduced latency and cortisol; (3) a dual-capsule Co-Biotic delivery system with an acid-resistant inner capsule releasing postbiotics to the gut microbiome, supporting the gut-brain axis pathway for sleep. No other sleep supplement currently combines all three.",
      },
    },
    {
      "@type": "Question",
      name: "What is biphasic melatonin in PM-02?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biphasic melatonin means the 500mcg melatonin in PM-02 is released in two phases: a rapid-release portion for sleep onset (raising melatonin quickly at bedtime) and an extended-release portion for sleep maintenance (sustaining elevated levels through the night to reduce early waking). This mimics the natural melatonin secretion profile more closely than standard immediate-release melatonin tablets.",
      },
    },
    {
      "@type": "Question",
      name: "Is Seed PM-02 third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Seed states PM-02 is backed by ISO 17025-accredited third-party testing. ISO 17025 is the international standard for testing laboratory competence, covering accuracy, precision, and quality management systems. This is a credible certification standard. Seed does not specify whether testing covers identity, purity, or contaminants — or all three — so completeness is unclear.",
      },
    },
    {
      "@type": "Question",
      name: "Why doesn't Seed PM-02 disclose the ashwagandha dose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seed has not publicly explained why the Shoden ashwagandha dose is not listed individually. This is common when brands use proprietary blends to protect formulation specifics. The concern is that the clinically effective Shoden dose is 120mg (Deshpande et al., 2020), and without knowing PM-02's dose, consumers cannot assess whether they're getting an effective amount. This is a real transparency gap in an otherwise innovative product.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Co-Biotic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seed coined the term 'Co-Biotic' to describe formulas designed to benefit both the human body and the gut microbiome simultaneously. In PM-02, the outer capsule delivers bioavailable ingredients (melatonin, ashwagandha, PQQ, B vitamins, spermidine, pterostilbene) to the human body, while the inner acid-resistant capsule delivers GABA and Lactobacillus brevis postbiotic to the lower GI tract, where they modulate the gut-brain axis. It's a genuine architectural innovation.",
      },
    },
    {
      "@type": "Question",
      name: "How does Seed PM-02 compare to Performance Lab Sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance Lab Sleep: 4 ingredients, all fully disclosed, Clean Label Project certified, $1.47/serving. No synthetic melatonin. Seed PM-02: 10+ ingredients, partial disclosure, ISO 17025 tested, $1.17/serving. 500mcg biphasic melatonin. PM-02 wins on melatonin dosing and ingredient breadth. Performance Lab Sleep wins on full transparency and named contaminant testing. For consumers who want the most transparent product, choose Performance Lab. For those interested in the gut-brain axis innovation and ashwagandha, PM-02 is more interesting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Seed PM-02 every night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At 500mcg melatonin (physiological dose), PM-02 does not carry the endogenous suppression risk associated with 5–6mg melatonin products. Ashwagandha at typical doses is safe for daily use. The postbiotic content is designed for daily microbiome support. Seed recommends daily consistent use for best results. Take on an empty stomach for optimal absorption.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy Seed PM-02?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM-02 is available on Amazon, on Seed's own website (seed.com), at Target, and at Sprouts Farmers Market. It was launched in late 2025 and has the broadest retail distribution of any premium sleep supplement in this review category.",
      },
    },
    {
      "@type": "Question",
      name: "Is ashwagandha in PM-02 safe to take with other medications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ashwagandha has documented interactions with thyroid medications (may alter thyroid hormone levels), immunosuppressants (immunomodulatory effects), and sedatives/CNS depressants (additive sedation possible). If you take any of these medication classes, consult a doctor before using PM-02. The undisclosed dose makes interaction risk harder to assess precisely.",
      },
    },
    {
      "@type": "Question",
      name: "What does PQQ do in Seed PM-02?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PQQ (pyrroloquinoline quinone) is a mitochondrial support compound that promotes biogenesis of new mitochondria and acts as an antioxidant. Harris et al. (2013) found 20mg PQQ improved aspects of sleep quality in middle-aged participants. PM-02 does not disclose the PQQ dose, making it impossible to assess whether it meets the 20mg threshold showing benefit.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-pm-02#review",
  name: "Seed PM-02 Sleep + Restore — Fitlabreviews FSP Review",
  reviewBody:
    "Seed PM-02 is the most innovative sleep supplement in its class: biphasic 500mcg melatonin at physiological dose, Shoden ashwagandha with a direct sleep RCT, and a dual-capsule Co-Biotic delivery system targeting both body and gut microbiome. ISO 17025-accredited testing. The ashwagandha dose and blend components are undisclosed. $1.17/serving. FSP v2.1 editorial: 7/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed PM-02 Sleep + Restore",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Sleep Supplement",
    description:
      "Dual-capsule Co-Biotic sleep supplement with biphasic 500mcg melatonin, Shoden ashwagandha, spermidine, pterostilbene, and gut-brain postbiotic system.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "34.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4eiBPZ1",
    },
  },
};

const relatedReviews = [
  {
    slug: "performance-lab-sleep",
    title: "Performance Lab Sleep",
    brand: "Performance Lab",
    category: "Sleep Supplement",
    rating: 8 as ReviewRating,
    verdict: "Four ingredients, every dose disclosed, no synthetic melatonin. Clean Label Project certified. The benchmark for transparent sleep supplementation.",
    publishedAt: "2026-05-31",
    figNumber: "060",
  },
  {
    slug: "nested-naturals-luna",
    title: "Nested Naturals Luna Sleep Aid",
    brand: "Nested Naturals",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Full label, 8 ingredients. Best-value transparent sleep supplement at $0.73/serving. 6mg melatonin is the long-term concern.",
    publishedAt: "2026-05-31",
    figNumber: "061",
  },
  {
    slug: "yusleep",
    title: "YuSleep Sleep Drops",
    brand: "YuSleep",
    category: "Sleep Supplement",
    rating: 4 as ReviewRating,
    verdict: "Promising ingredients, zero dose disclosure for 9 of 10. No third-party testing. $2.30/serving.",
    publishedAt: "2026-05-31",
    figNumber: "059",
  },
];

export default function SeedPM02Review() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Seed PM-02</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #071A1A 0%, #040E0E 100%)", position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-062</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(242,235,217,0.15)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A8A8A", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Co-Biotic Sleep</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed<br />
                  <em style={{ fontWeight: 400, color: "#A89880", fontSize: "0.65em" }}>PM-02 Sleep + Restore</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Biphasic 500mcg melatonin. Shoden ashwagandha. A dual-capsule system targeting both body and gut microbiome. The most scientifically ambitious sleep supplement in the category — with partial disclosure holding it back.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4eiBPZ1" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#2A8A8A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(242,235,217,0.15)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/Sleep-PM-02.webp" alt="Seed PM-02 Sleep + Restore" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(42,138,138,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7].map(s => <Star key={s} size={13} fill="#2A8A8A" color="#2A8A8A" />)}
                {[8,9,10].map(s => <Star key={s} size={13} fill="none" color="rgba(42,138,138,0.35)" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.4)", letterSpacing: "0.12em" }}>7 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Seed" },
            { label: "Category", value: "Sleep Supplement" },
            { label: "Form", value: "Dual-capsule (Co-Biotic)" },
            { label: "Serving", value: "2 capsules / night" },
            { label: "Price", value: "$34.99 / 30 servings" },
            { label: "Per Serving", value: "$1.17" },
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
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A8A8A", marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-062</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>
                        The most innovative sleep supplement in the category. Biphasic 500mcg melatonin nails the dose. Disclosure gaps on ashwagandha and blends hold it to a 7.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#2A8A8A", lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.75 }}>
                    Seed PM-02 is a genuinely thoughtful product. Its 500mcg biphasic melatonin is the most appropriately dosed melatonin in any sleep supplement we've reviewed. Shoden ashwagandha has a direct sleep RCT behind it. The dual-capsule Co-Biotic system is a real delivery innovation, not marketing theatre. ISO 17025 testing is credible. But the ashwagandha dose is undisclosed — and that's the ingredient the core sleep claim rests on. The Cellular Renewal Complex at 12mg total almost certainly can't fit clinical doses of both spermidine and pterostilbene. With full dose disclosure, this would be an 8 or 9. Currently it's a well-intentioned 7.
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
                  <div style={{ background: "linear-gradient(145deg, #071A1A 0%, #040E0E 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(42,138,138,0.15)", border: "1px solid rgba(42,138,138,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5ABABA" }}>
                      <ShieldCheck size={10} /> ISO 17025 Tested
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/Sleep-PM-02.webp" alt="Seed PM-02" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(42,138,138,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Seed</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>PM-02 Sleep + Restore</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "500mcg", label: "Melatonin" }, { val: "Biphasic", label: "Release" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#2A8A8A", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$34.99</p>
                      </div>
                      <a href="https://amzn.to/4eiBPZ1" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#2A8A8A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is PM-02 */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Seed PM-02?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  PM-02 Sleep + Restore is Seed's entry into targeted sleep supplementation, launching in late 2025 as part of their Co-Biotics product line. Seed is primarily known for DS-01® — one of the best-validated commercial probiotics, with multiple published RCTs. PM-02 brings that scientific seriousness to sleep.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  The product uses a dual-capsule architecture. The outer capsule delivers bioavailable compounds to the body: biphasic 500mcg bioidentical melatonin, Shoden ashwagandha, PQQ, a 12mg Cellular Renewal Complex (spermidine + pterostilbene), and B vitamins (niacin 5mg, riboflavin 1.3mg, thiamine 1.2mg). The inner acid-resistant capsule delivers a 200mg Gut-Brain Postbiotic (GABA + Lactobacillus brevis postbiotic) and prebiotic ingredients (Japanese wasabi + quercetin) to the lower GI tract.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75 }}>
                  Available at Target, Sprouts, Amazon, and seed.com — the broadest retail distribution of any premium sleep supplement in this review group. ISO 17025-accredited third-party testing. Vegan. Shelf-stable.
                </p>
              </section>

              {/* § 3 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-062" />
              </section>

              {/* § 4 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 16, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 2 capsules · Servings per container: 30</p>
                <div style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 16, display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <ShieldCheck size={14} style={{ color: "#2A8A8A", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong style={{ color: "#1A1714" }}>Dual-capsule architecture:</strong> Outer capsule (body-facing) releases actives systemically. Inner capsule (acid-resistant, chlorophyllin coating) releases postbiotics and prebiotics in the lower GI.
                  </p>
                </div>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 500, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "35%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "20%" }}>Capsule</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "20%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "25%" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Bioidentical Biphasic Melatonin", cap: "Outer", amount: "500 mcg ✓", ok: true },
                        { name: "Niacin (B3)", cap: "Outer", amount: "5 mg ✓", ok: true },
                        { name: "Riboflavin (B2)", cap: "Outer", amount: "1.3 mg ✓", ok: true },
                        { name: "Thiamine (B1)", cap: "Outer", amount: "1.2 mg ✓", ok: true },
                        { name: "Shoden® Ashwagandha", cap: "Outer", amount: "Undisclosed", ok: false },
                        { name: "PQQ", cap: "Outer", amount: "Undisclosed", ok: false },
                        { name: "Cellular Renewal Complex (Spermidine + Pterostilbene)", cap: "Outer", amount: "12 mg total", ok: false },
                        { name: "Gut-Brain Postbiotic (GABA + L. brevis postbiotic)", cap: "Inner", amount: "200 mg total", ok: false },
                        { name: "Prebiotics (Wasabi + Quercetin)", cap: "Inner", amount: "Undisclosed", ok: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 11, textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480" }}>{row.cap}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: row.ok ? "#2D6A4F" : "#8B7355" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.ok ? "rgba(45,106,79,0.10)" : "rgba(139,115,85,0.10)", border: `1px solid ${row.ok ? "rgba(45,106,79,0.25)" : "rgba(139,115,85,0.25)"}`, borderRadius: 20, fontSize: 11, color: row.ok ? "#2D6A4F" : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.ok ? "Disclosed ✓" : "Not fully disclosed"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* § 6 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                {[
                  { name: "Biphasic Melatonin — 500 mcg", evidence: "strong" as EvidenceLevel, verdict: "Best melatonin dose in any commercial sleep supplement", body: "500mcg sits squarely within the 0.5–1mg range identified by Brzezinski et al. (2005) as producing physiological nocturnal blood levels. The biphasic release — rapid onset for sleep latency, extended for maintenance — is a meaningful pharmacokinetic improvement over standard immediate-release melatonin. Lewy et al. (1998) demonstrated low-dose melatonin's circadian phase-shifting ability; PM-02's approach respects the mechanism rather than overriding it with a pharmacological dose." },
                  { name: "Shoden® Ashwagandha — Dose Undisclosed", evidence: "moderate" as EvidenceLevel, verdict: "Premium extract with direct sleep RCT — but dose unknown", body: "Shoden is standardised to 35% withanolide glycosides, versus 5% in KSM-66 and 10% in Sensoril. Deshpande et al. (2020) conducted a randomised, double-blind, placebo-controlled trial using 120mg Shoden daily for 6 weeks and found significant improvement in sleep onset latency (−40.9%), sleep efficiency (+8%), total sleep time (+13%), and morning cortisol reduction. This is the most relevant ashwagandha data for a sleep application. Without knowing if PM-02 uses 120mg, the primary evidence claim for ashwagandha cannot be confirmed." },
                  { name: "Cellular Renewal Complex — 12 mg total (Spermidine + Pterostilbene)", evidence: "emerging" as EvidenceLevel, verdict: "Interesting longevity angle — doses almost certainly sub-clinical", body: "Spermidine at 1–2mg/day has shown autophagy activation in human studies (Eisenberg et al., 2009). Pterostilbene, a bioavailable resveratrol analogue, is typically studied at 50–100mg. At 12mg total for both compounds, neither is likely to reach clinical doses — a 12mg blend containing meaningful amounts of both is mathematically challenging. The cellular renewal concept is scientifically interesting but likely present at nominal levels in this formula." },
                  { name: "Gut-Brain Postbiotic — 200 mg total (GABA + L. brevis postbiotic)", evidence: "emerging" as EvidenceLevel, verdict: "Novel gut-brain axis approach — individual doses undisclosed", body: "Lactobacillus brevis is a GABA-producing strain. The gut-brain axis is a real pathway for neurotransmitter signalling — Cryan et al. (2019) reviewed the mechanisms thoroughly. Postbiotics (bioactive compounds from probiotic metabolism) are increasingly recognised as effective without requiring live organism delivery. At 200mg total, if a meaningful L. brevis-derived GABA fraction is present, this could contribute meaningfully. The doses are undisclosed, making quantitative assessment impossible." },
                  { name: "PQQ — Dose Undisclosed", evidence: "emerging" as EvidenceLevel, verdict: "Mitochondrial support — interesting addition, dose unknown", body: "Harris et al. (2013) found 20mg PQQ improved aspects of sleep quality in 65 middle-aged participants. PQQ supports mitochondrial biogenesis and functions as an antioxidant. The dose in PM-02 is not disclosed — clinical benefit at 20mg may not transfer at lower doses." },
                  { name: "B Vitamins — Niacin 5mg, Riboflavin 1.3mg, Thiamine 1.2mg", evidence: "moderate" as EvidenceLevel, verdict: "Cofactors for melatonin synthesis — appropriate doses", body: "Riboflavin (B2) and niacin (B3) are cofactors in the tryptophan → melatonin pathway. Thiamine (B1) supports mitochondrial function. These doses are at or near the RDA — sufficient as cofactors for existing biosynthetic pathways. Clayton (2010) reviewed B6's (not included here) more direct role; B2 and B3 are upstream cofactors." },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 5 ? 16 : 0, padding: "18px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2A8A8A", marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 7 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "ISO 17025 Accredited Testing", status: true },
                    { label: "Retail Distribution", status: true },
                    { label: "Vegan", status: true },
                    { label: "Shelf-Stable", status: true },
                    { label: "NSF / Informed Sport", status: false },
                    { label: "Clean Label Project", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "14px 16px", backgroundColor: item.status ? "rgba(45,106,79,0.06)" : "rgba(139,58,44,0.06)", border: `1px solid ${item.status ? "rgba(45,106,79,0.2)" : "rgba(139,58,44,0.2)"}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 14, color: item.status ? "#2D6A4F" : "#8B3A2C" }}>{item.status ? "✓" : "✗"}</span>
                      <span style={{ fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    ISO 17025 is the international standard for testing laboratory competence — it covers calibration, testing methodology, uncertainty measurement, and quality management. It is a meaningful accreditation. Seed does not specify whether testing covers identity verification, potency, contaminants, or all three. For consumers, this is a credible but incompletely described testing claim.
                  </p>
                </div>
              </section>

              {/* § 8 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 9 How to Take */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>Brand Protocol</p>
                  <p style={{ fontSize: 15, color: "#1A1714", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 2 capsules daily, ideally on an empty stomach.</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    The empty stomach recommendation is important for both capsule layers: the outer capsule actives (ashwagandha, melatonin) absorb better without food competition; the inner acid-resistant capsule needs to transit through the stomach intact, which is less reliable if food has slowed gastric motility.
                  </p>
                </div>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Practical notes</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {["Take 30–45 minutes before target sleep time. At 500mcg, melatonin onset is subtle — don't expect the sedation common with 5–6mg products.", "Ashwagandha effects on cortisol and sleep quality are cumulative. Consistent daily use for 2–4 weeks is needed for full benefit (Deshpande et al., 2020 used 6 weeks).", "The postbiotic inner capsule benefits the gut microbiome — effects on the gut-brain axis may take longer to manifest than the acute melatonin effect.", "Do not crush or open the capsules — the dual architecture depends on both shells remaining intact."].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Melatonin", "Ashwagandha", "Full Label?", "Testing", "$/Serving"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Seed PM-02", mel: "500mcg biph. ✓", ash: "Shoden (undisclosed mg)", full: "Partial", test: "ISO 17025", price: "$1.17", highlight: true },
                        { product: "Performance Lab Sleep", mel: "None (natural)", ash: "—", full: "Yes", test: "Clean Label Project", price: "$1.47", highlight: false },
                        { product: "Luna (Nested Naturals)", mel: "6mg ⚠", ash: "—", full: "Yes", test: "Unnamed 3rd party", price: "$0.73", highlight: false },
                        { product: "YuSleep", mel: "0.9mg", ash: "—", full: "No", test: "None", price: "$2.30", highlight: false },
                        { product: "OLLY Sleep", mel: "5mg", ash: "—", full: "Partial", test: "None listed", price: "$0.50", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(42,138,138,0.06)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.mel.includes("⚠") ? "#8B3A2C" : row.mel.includes("✓") ? "#2D6A4F" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>{row.mel}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.ash}</td>
                          <td style={{ padding: "11px 14px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: row.full === "Yes" ? "rgba(45,106,79,0.10)" : "rgba(139,58,44,0.10)", border: `1px solid ${row.full === "Yes" ? "rgba(45,106,79,0.25)" : "rgba(139,58,44,0.25)"}`, borderRadius: 20, fontSize: 10, color: row.full === "Yes" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.full}</span>
                          </td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.test}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.highlight ? "#2A8A8A" : "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices verified May 2026.</p>
              </section>

              {/* § 11 Products */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="PM-02 Sleep + Restore" brand="Seed" category="Sleep" score={7} priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Biphasic Melatonin 500mcg", "Shoden Ashwagandha"]} buyUrl="https://amzn.to/4eiBPZ1" buyLabel="Buy on Amazon" reviewSlug="seed-pm-02" image="Sleep-PM-02.webp" bgFrom="#071A1A" bgTo="#040E0E" accent="#2A8A8A" featured={true} />
                  <ProductCard name="Performance Lab Sleep" brand="Performance Lab" category="Sleep" score={8} priceUSD="$44.00 / 30 servings" priceINR="N/A" tags={["Clean Label Project", "Full Label"]} buyUrl="https://amzn.to/4x4WZCs" buyLabel="Buy on Amazon" reviewSlug="performance-lab-sleep" bgFrom="#091828" bgTo="#050E18" accent="#3A6FA8" />
                  <ProductCard name="Luna Sleep Aid" brand="Nested Naturals" category="Sleep" score={7} priceUSD="$21.95 / 30 servings" priceINR="N/A" tags={["Full Label", "Lifetime Guarantee"]} buyUrl="https://amzn.to/3Sb2LlK" buyLabel="Buy on Amazon" reviewSlug="nested-naturals-luna" bgFrom="#0A1A12" bgTo="#060E0A" accent="#3D7A5E" />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["500mcg biphasic melatonin — most physiologically accurate dose in any commercial sleep supplement", "Shoden® ashwagandha — highest-potency standardised extract with direct sleep RCT (Deshpande et al., 2020)", "Dual-capsule Co-Biotic delivery targeting both body and gut microbiome — genuine innovation", "ISO 17025-accredited third-party testing", "Broad retail availability: Target, Sprouts, Amazon, seed.com", "Shelf-stable vegan formula", "B vitamins included as melatonin synthesis cofactors", "$1.17/serving — reasonable for innovation level"]}
                  cons={["Shoden ashwagandha dose undisclosed — the product's primary active ingredient amount is unknown", "Cellular Renewal Complex (12mg total) almost certainly cannot contain clinical doses of both spermidine and pterostilbene", "Gut-Brain Postbiotic (200mg) individual GABA and L. brevis amounts undisclosed", "PQQ dose undisclosed", "No Informed Sport or Clean Label Project certification", "Contaminant testing scope not specified"]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Ashwagandha + Thyroid Medications", severity: "moderate", detail: "Ashwagandha may stimulate thyroid hormone production. Users taking levothyroxine or other thyroid medications should consult a doctor — ashwagandha can alter thyroid hormone levels in ways that may require medication adjustment." },
                    { label: "Ashwagandha + Immunosuppressants", severity: "moderate", detail: "Ashwagandha has immunomodulatory properties. Combined with immunosuppressant medications (cyclosporin, tacrolimus), it may partially counteract immunosuppression. Avoid without medical consultation." },
                    { label: "Melatonin 500mcg — minimal risk", severity: "low", detail: "At physiological dose, 500mcg melatonin has an excellent safety profile. No dependency, no tolerance, no meaningful endogenous suppression risk at this dose. The safest melatonin formulation in the comparison group." },
                    { label: "GABA + CNS Depressants", severity: "low", detail: "The postbiotic GABA component may have additive sedative effects with benzodiazepines, barbiturates, or alcohol. At the doses present in 200mg total postbiotic (individual GABA amount unknown), this risk is expected to be low." },
                    { label: "Pregnancy / Breastfeeding", severity: "moderate", detail: "Ashwagandha is not recommended during pregnancy (uterine stimulant activity reported in some studies). Consult a doctor before use if pregnant or breastfeeding." },
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="melatonin (only fully disclosed active)" />
                <div style={{ marginTop: 20, padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    <strong style={{ color: "#1A1714" }}>Note on value metric:</strong> The value metric above uses melatonin as the only fully-specified active since the ashwagandha, spermidine, and pterostilbene doses are undisclosed. This understates PM-02's value proposition — Shoden ashwagandha is an expensive, premium extract and the dual-capsule architecture has real manufacturing cost. At $1.17/serving, PM-02 is reasonably priced for its innovation level if the undisclosed doses are at clinical levels. Prices verified May 2026.
                  </p>
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2A8A8A", marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      $34.99 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Also at Target · Sprouts · seed.com. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/4eiBPZ1" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#2A8A8A", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
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
                        <span className="faq-icon-seed-pm02" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#2A8A8A" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-seed-pm02 svg{display:none;}details[open] .faq-icon-seed-pm02::after{content:'';display:block;width:10px;height:2px;background:#2A8A8A;border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A8A8A", marginBottom: 8 }}>FSP v2.1 — REV-2026-062</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#2A8A8A", lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#A89880" }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>Recommended for innovation seekers. Disclose the ashwagandha dose and this becomes a 9.</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 28 }}>
                    Seed PM-02 is the most forward-thinking sleep supplement in this review group. The biphasic 500mcg melatonin is exactly right. Shoden ashwagandha is the most credible cortisol/sleep ingredient available. The Co-Biotic dual delivery is a genuine architectural innovation. ISO 17025 testing is credible. If Seed disclosed the ashwagandha dose, the Cellular Renewal Complex individual amounts, and the GABA/postbiotic breakdown, this would score 8–9/10. The opaque blends — particularly hiding the dose of the product's headline ingredient — prevent full recommendation. Buy it knowing the innovation is real; hope the doses match the RCTs.
                  </p>
                  <a href="https://amzn.to/4eiBPZ1" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#2A8A8A", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
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
                      { text: "Brzezinski A et al. (2005). Effects of exogenous melatonin on sleep: a meta-analysis. Sleep Medicine Reviews, 9(1):41–50.", url: "https://doi.org/10.1016/j.smrv.2004.06.004" },
                      { text: "Lewy AJ et al. (1998). Low, but not high, doses of melatonin entrained a free-running blind person with a long circadian period. Chronobiology International, 15(2):119–130.", url: "https://doi.org/10.3109/07420529808998678" },
                      { text: "Deshpande A et al. (2020). A randomized, double blind, placebo controlled study to evaluate the effects of ashwagandha root extract on sleep quality. Sleep Medicine, 72:28–36.", url: "https://doi.org/10.1016/j.sleep.2020.03.004" },
                      { text: "Eisenberg T et al. (2009). Induction of autophagy by spermidine promotes longevity. Nature Cell Biology, 11(11):1305–1314.", url: "https://doi.org/10.1038/ncb1975" },
                      { text: "Harris CB et al. (2013). Dietary pyrroloquinoline quinone (PQQ) alters indicators of inflammation and mitochondrial-related metabolism in human subjects. Journal of Nutritional Biochemistry, 24(12):2076–2084.", url: "https://doi.org/10.1016/j.jnutbio.2013.07.008" },
                      { text: "Cryan JF et al. (2019). The microbiota-gut-brain axis. Physiological Reviews, 99(4):1877–2013.", url: "https://doi.org/10.1152/physrev.00018.2018" },
                      { text: "Hepsomali P et al. (2020). Effects of oral GABA administration on stress and sleep. Frontiers in Neuroscience, 14:923.", url: "https://doi.org/10.3389/fnins.2020.00923" },
                      { text: "Clayton PT. (2010). B6-responsive disorders: a model of vitamin dependency. Journal of Inherited Metabolic Disease, 29(2–3):317–326.", url: "https://doi.org/10.1007/s10545-005-0243-2" },
                      { text: "Ferracioli-Oda E, Qawasmi A, Bloch MH. (2013). Meta-analysis: melatonin for the treatment of primary sleep disorders. PLOS ONE, 8(5):e63773.", url: "https://doi.org/10.1371/journal.pone.0063773" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#2A8A8A", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
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
