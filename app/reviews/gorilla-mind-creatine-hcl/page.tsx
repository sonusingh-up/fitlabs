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

export const metadata: Metadata = {
  title: "Gorilla Mind Creatine HCl Review (2026) — 7/10",
  description:
    "Gorilla Mind Creatine HCl: CON-CRET 2.5g + pepsin, 100 servings, $0.80/dose. Is HCl worth it over monohydrate? Full audit. FSP 7/10.",
  alternates: { canonical: "/reviews/gorilla-mind-creatine-hcl" },
  openGraph: {
    title: "Gorilla Mind Creatine HCl Review (2026) — 7/10",
    description:
      "38x more water soluble than monohydrate, dosed at 2.5g per scoop, with pepsin for GI tolerance. For people who genuinely struggle with monohydrate GI effects — this is the best-formulated HCl option on the market.",
    url: "https://fitlabreviews.com/reviews/gorilla-mind-creatine-hcl",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"            },
  { id: "what-is",          label: "What Is Creatine HCl?"    },
  { id: "score-breakdown",  label: "Score Breakdown"           },
  { id: "flags",            label: "Red & Green Flags"         },
  { id: "supplement-facts", label: "Supplement Facts"          },
  { id: "ingredients",      label: "Ingredient Breakdown"      },
  { id: "lab-data",         label: "Testing & Verification"    },
  { id: "claim-audit",      label: "Claim Audit"               },
  { id: "how-to-take",      label: "How to Take It"            },
  { id: "comparison",       label: "vs. Competitors"           },
  { id: "products",         label: "Products at a Glance"      },
  { id: "pros-cons",        label: "Pros & Cons"               },
  { id: "safety",           label: "Safety & Side Effects"     },
  { id: "value",            label: "Price & Value"             },
  { id: "where-to-buy",     label: "Where to Buy"              },
  { id: "faq",              label: "FAQ"                       },
  { id: "final",            label: "Final Verdict"             },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.0,
      notes:
        "CON-CRĒT® is a patented creatine HCl form (creatine bonded to hydrochloric acid) with its own clinical studies backing. HCl is approximately 38 times more water soluble than monohydrate — meaning it dissolves completely in a small liquid volume, which reduces GI transit issues. The dose debate: Proponents argue 2.5g HCl is equivalent to 5g monohydrate due to superior absorption efficiency. The direct head-to-head evidence is limited — most studies used monohydrate. Pepsin addition is smart: a protease that helps break down protein in the GI environment, potentially improving tolerance for sensitive users.",
    },
    {
      pillar: "transparency",
      score: 9.0,
      notes:
        "Two ingredients disclosed: CON-CRĒT® Creatine HCl (2.5g) and Pepsin (amount not specified on label — this is the one gap). Unflavored — no hidden excipients or sweeteners. Serving size is clearly stated as 2.5g per scoop, but the implication that this equals 5g monohydrate is discussed in marketing rather than on the label itself.",
    },
    {
      pillar: "verification",
      score: 7.0,
      notes:
        "HPLC third-party tested for purity and identity. No NSF, Informed Sport, or BSCG certification. HPLC testing confirms the creatine HCl is what it claims to be at the stated dose — it does not test for the full range of banned substances that Informed Sport does. Sufficient for general users; not sufficient for drug-tested athletes.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "At $39.99 for 100 scoops × 2.5g = 250g total creatine HCl. If 2 scoops (5g HCl) is the effective daily dose, that is 50 days supply at $0.80/serving. If the 2.5g dose is genuinely equivalent to 5g monohydrate (as claimed), that drops the effective cost to $0.40/serving. The value depends on which dose claim you accept. Compared to monohydrate at $0.15–0.35/serving, it's still a premium — but less than many specialty creatine products.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "Unflavored and completely clear when dissolved — no cloudiness, no grit. The high water solubility means it mixes in 2–3 oz of liquid and disappears. Can be added to any beverage including coffee, juice, or water without affecting taste or texture. No clumping. 100 scoops per tub is generous. The pepsin inclusion means GI-sensitive users have an additional tolerance buffer.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "CON-CRĒT® patented HCl form",
      detail: "Not generic creatine HCl — the specific patented form with its own clinical dossier. 38x more water soluble than monohydrate, higher GI tolerance.",
    },
    {
      type: "green",
      label: "Pepsin for GI tolerance",
      detail: "Digestive enzyme that assists protein breakdown in the gut. Reduces any residual GI discomfort from creatine HCl, particularly relevant for users who experience issues with monohydrate.",
    },
    {
      type: "green",
      label: "Completely unflavored and clear-dissolving",
      detail: "Mixes into virtually any liquid without altering taste, colour, or texture. One of the cleanest-mixing creatine products on the market.",
    },
    {
      type: "green",
      label: "HPLC identity and purity tested",
      detail: "Third-party high-performance liquid chromatography testing confirms the creatine HCl content and absence of common contaminants.",
    },
    {
      type: "red",
      label: "No Informed Sport / NSF certification",
      detail: "HPLC testing does not cover the full banned substance panel that Informed Sport or NSF require. Not suitable for drug-tested competitive athletes without further verification.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Limited direct RCTs vs monohydrate",
      detail: "The dose equivalency claim (2.5g HCl = 5g monohydrate) lacks large independent head-to-head RCTs. Most creatine evidence uses monohydrate specifically. CON-CRĒT® has its own studies but fewer than monohydrate.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "Pepsin dose not disclosed",
      detail: "The pepsin amount per serving is not stated on the label. Cannot assess whether it's a functional or token dose.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"38x More Soluble Than Creatine Monohydrate"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine HCl solubility data is well-documented. The hydrochloride salt form dramatically increases aqueous solubility compared to the free base. This is a physical chemistry fact, not a marketing claim. The 38x figure is consistent with published solubility measurements.",
    },
    {
      claim: '"GI-Friendly Alternative to Monohydrate"',
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Higher solubility means faster and more complete dissolution in the stomach, reducing the undissolved creatine that causes GI discomfort in sensitive users. The addition of pepsin further supports GI tolerance. The mechanism is sound; individual response will vary.",
    },
    {
      claim: '"Effective at a Smaller Dose"',
      verdict: "context-dependent",
      evidence: "limited",
      notes:
        "CON-CRĒT® has its own clinical studies suggesting efficacy at 2.5g. The absorption efficiency advantage of HCl could theoretically require less total creatine to achieve the same intramuscular saturation. However, direct large-scale head-to-head comparisons against monohydrate at equivalent doses are lacking. The claim is plausible but not conclusively established.",
    },
    {
      claim: '"Improved Muscle Size, Power Output and Strength"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine supplementation in any effective form produces these outcomes — this is the most replicated finding in sports nutrition. The creatine HCl specifically shows these benefits in CON-CRĒT® studies. The claim is accurate for creatine as a class.",
    },
    {
      claim: '"No Bloating or Water Retention"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Creatine-induced intramuscular water retention (water drawn into muscle cells) occurs with both HCl and monohydrate — it is a mechanism of action, not a side effect. GI bloating from undissolved creatine is reduced with HCl. So: true for GI bloating, not applicable for the muscle water retention that is part of how creatine works.",
    },
    {
      claim: '"HPLC Tested"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Gorilla Mind confirms HPLC third-party testing. High-performance liquid chromatography is an appropriate method for creatine identity and purity testing. The claim is straightforward and accurate.",
    },
  ],
  valueMetric: {
    pricePerServing: 0.80,
    primaryActiveGrams: 5.0,
    pricePerGramActive: 0.16,
    categoryAvgPricePerGram: 0.06,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/gorilla-mind-creatine-hcl#review",
  name: "Gorilla Mind Creatine HCl — Fitlabreviews FSP Review",
  reviewBody:
    "Gorilla Mind Creatine HCl uses the patented CON-CRĒT® form with pepsin for GI tolerance. It is the best-formulated creatine HCl product available and is ideal for people who genuinely experience GI issues with monohydrate. The dose equivalency claim (2.5g HCl = 5g mono) lacks head-to-head RCTs, and the absence of third-party sport certification is a gap. For most users, monohydrate remains more evidence-backed and more affordable.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  itemReviewed: {
    "@type": "Product",
    name: "Gorilla Mind Creatine HCl",
    brand: { "@type": "Brand", name: "Gorilla Mind" },
    category: "Creatine Supplement",
    description: "CON-CRĒT® Creatine HCl 2.5g + Pepsin per serving, unflavored, 100 servings. HPLC tested.",
    offers: { "@type": "Offer", price: "39.99", priceCurrency: "USD", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", url: "https://amzn.to/3PAhINz" },
  },
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is creatine HCl better than creatine monohydrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not categorically — but it is better for specific situations. Creatine monohydrate has 500+ human RCTs behind it at 5g/day. HCl has fewer independent studies but has one proven advantage: it is 38x more water soluble, meaning it dissolves completely in the stomach, reducing GI discomfort that some users experience with monohydrate. If you tolerate monohydrate fine, there is no compelling evidence to switch. If you experience bloating, nausea, or GI upset with monohydrate, HCl is worth trying.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the serving size only 2.5g when creatine monohydrate is dosed at 5g?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine HCl proponents argue that the superior absorption efficiency of the hydrochloride form means less is needed to achieve equivalent intramuscular creatine saturation. CON-CRĒT® clinical studies used 2.5g and showed performance benefits. However, head-to-head comparisons with 5g monohydrate are limited. If you want to match the established clinical dose in monohydrate terms, taking 2 scoops (5g HCl) removes the guesswork — you still get 100 servings of 2.5g or 50 full 5g doses.",
      },
    },
    {
      "@type": "Question",
      name: "What does pepsin do in Gorilla Mind Creatine HCl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pepsin is a protease enzyme naturally present in gastric fluid. Its inclusion here serves GI tolerance — it assists in breaking down proteins in the stomach environment, which reduces residual GI discomfort from the creatine compound. Think of it as an additional buffer for sensitive digestive systems on top of the inherently better solubility of the HCl form.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gorilla Mind Creatine HCl need a loading phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The brand recommends 2.5g daily without a loading phase. If you want faster saturation, 5g (two scoops) daily for the first week is a reasonable protocol, then drop to 2.5g maintenance. The higher solubility of HCl may slightly accelerate uptake compared to monohydrate at equivalent doses, but the same 3–4 week saturation timeline applies at maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Who should choose creatine HCl over monohydrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The specific use cases where HCl has a real advantage: (1) People who experience bloating, stomach cramps, or loose stools with creatine monohydrate. (2) People who want to add creatine to a very small liquid volume (coffee, 2oz water) where monohydrate would not fully dissolve. (3) People who want a completely unflavored, taste-neutral creatine that can go in anything. If none of these apply to you, monohydrate at $0.15–0.35/serving is the better financial choice.",
      },
    },
    {
      "@type": "Question",
      name: "Does creatine HCl cause the same water retention as monohydrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intramuscular water retention — water drawn into muscle cells — is part of how creatine works and occurs with both forms. This is a mechanism of action, not a side effect. What HCl reduces is GI bloating from undissolved creatine sitting in the gut. If you experience visible scale weight increase from creatine, that reflects intramuscular water retention and will happen with HCl too — this is normal and desirable.",
      },
    },
    {
      "@type": "Question",
      name: "Is Gorilla Mind Creatine HCl safe for drug-tested athletes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gorilla Mind uses HPLC testing for purity and identity, but does not hold Informed Sport, NSF Certified for Sport, or BSCG certification. HPLC testing does not screen the full panel of banned substances that those certifications require. Drug-tested athletes competing under WADA, USADA, or national governing body rules should use a product with Informed Sport or NSF certification — such as Transparent Labs Creatine HMB or Thorne Creatine.",
      },
    },
    {
      "@type": "Question",
      name: "Is CON-CRĒT® creatine the same as generic creatine HCl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CON-CRĒT® is a patented creatine HCl form developed by Vireo Systems. It has its own clinical studies and a standardised manufacturing process. Generic creatine HCl from bulk suppliers may have the same chemical structure but without the same clinical backing, quality controls, or solubility guarantees. Gorilla Mind sources CON-CRĒT® specifically — this is a relevant distinction for quality assurance.",
      },
    },
  ],
};

const relatedReviews = [
  {
    slug: "gorilla-mind-creatine-monohydrate",
    title: "Gorilla Mind Creatine Micronized",
    brand: "Gorilla Mind",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "100 servings of pure 5g micronized creatine at $0.35/serving — the value benchmark in the category.",
    publishedAt: "2026-05-30",
    figNumber: "58",
  },
  {
    slug: "transparent-labs-creatine-hmb",
    title: "TL Creatine HMB",
    brand: "Transparent Labs",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "5g creatine + 1.5g MyHMB® + Informed Sport cert. The premium stack for caloric-deficit training.",
    publishedAt: "2026-05-30",
    figNumber: "56",
  },
];

export default function GorillaMindCreatineHClReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Creatine", href: "/category/creatine" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Gorilla Mind Creatine HCl</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A1E2E 0%, #252B40 50%, #1A1E2E 100%)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(58,95,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,95,139,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-057</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A5F8B", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Gorilla Mind
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3A5F8B", fontSize: "0.85em" }}>Creatine HCl</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  CON-CRĒT® creatine hydrochloride with pepsin. 38× more water soluble than monohydrate, clear-dissolving, and genuinely GI-friendly. The honest question: do you actually need HCl, or will monohydrate serve you better?
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3PAhINz" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 180, height: 220 }}>
                  <Image src="/products/GorillaMindCreatineHCl.webp" alt="Gorilla Mind Creatine HCl" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 8px 40px rgba(58,95,139,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}><ReviewScoreBadge rating={editorialScore} size="lg" /></div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #FFFFFF)" }} />
        </div>

        {/* Star row */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 4 }}>
              {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={12} fill="#3A5F8B" color="#3A5F8B" />)}
              {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i} size={12} fill="none" color="#3A5F8B" />)}
              <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", marginLeft: 6 }}>{editorialScore}/10</span>
            </div>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>REV-2026-057</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Creatine HCl · CON-CRĒT®</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",    value: "Gorilla Mind"              },
            { label: "Category", value: "Creatine"                  },
            { label: "Serving",  value: "1–2 scoops / day"          },
            { label: "Price",    value: "$39.99 / 100 scoops"       },
            { label: "Per Dose", value: "$0.80 (at 2 scoops/5g)"   },
            { label: "Published", value: "May 30, 2026"             },
          ]} />
        </div>

        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #E4E8E5, #3A5F8B)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#FFFFFF", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>
                Reviewed by the full team · <Link href="/authors" style={{ color: "#3A5F8B", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#586259", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
              Affiliate disclosure: Amazon links earn a commission. Scores are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#3A5F8B", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">
            <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
            <article style={{ minWidth: 0 }}>

              {/* § 01 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 10 }}>FSP Score · 7/10</p>
                  <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85 }}>
                    Gorilla Mind chose CON-CRĒT® — the best-formulated creatine HCl available — and added pepsin for GI tolerance. If you need creatine HCl, this is the version to buy. The honest caveat: most people don&apos;t need creatine HCl. Monohydrate at 5g has 500+ RCTs behind it, costs $0.15–0.35/serving, and the majority of users experience zero GI issues at maintenance doses. This product earns its score for what it is — not for being a universal upgrade over monohydrate.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#1A1714", margin: 0, lineHeight: 1 }}>
                        {p.score.toFixed(1)}<span style={{ fontSize: "0.5em", color: "#586259", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 400 }}>/10</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
                  <div style={{ background: "linear-gradient(145deg, #1A1E2E 0%, #252B40 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(58,95,139,0.15)", border: "1px solid rgba(58,95,139,0.35)", borderRadius: 20, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A5F8B" }}>
                      <ShieldCheck size={10} /> HPLC Tested · CON-CRĒT®
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 190 }}>
                      <Image src="/products/GorillaMindCreatineHCl.webp" alt="Gorilla Mind Creatine HCl" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(58,95,139,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F6F8F6)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 4 }}>Gorilla Mind</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Creatine HCl</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #F2F8F4", borderBottom: "1px solid #F2F8F4" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "2.5g", label: "Per Scoop" }, { val: "100", label: "Scoops" }].map((s) => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3A5F8B", lineHeight: 1, marginBottom: 3 }}>{s.val}</p>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 2 }}>Price / 100 scoops</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$39.99</p>
                      </div>
                      <a href="https://amzn.to/3PAhINz" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3A5F8B", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 02 What Is It */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>What Is Creatine HCl?</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  <Link href="/ingredients/creatine" style={{ color: "#3A5F8B", textDecoration: "none" }}>Creatine hydrochloride</Link> is creatine bonded to a hydrochloride group. The result is a dramatically more water-soluble compound — around 38 times more soluble than creatine monohydrate. This means it dissolves completely in a small amount of liquid, which eliminates the partially-dissolved creatine sitting in the GI tract that causes bloating and discomfort in sensitive users.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Gorilla Mind&apos;s Creatine HCl uses CON-CRĒT® — the patented HCl form developed by Vireo Systems, which has its own clinical study dossier separate from generic creatine HCl. Each scoop delivers 2.5g of CON-CRĒT® plus pepsin, a gastric enzyme that further assists GI tolerance. The product is unflavored, HPLC-tested, and available in 100-scoop tubs.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The core debate in creatine HCl is dose. Monohydrate&apos;s standard clinical dose is 5g/day. HCl proponents argue that the superior absorption means 2.5g achieves equivalent intramuscular saturation. This claim has some clinical backing from CON-CRĒT® studies but lacks large independent head-to-head comparisons. We&apos;ll address this in the ingredient breakdown.
                </p>
              </section>

              {/* § 03 Score */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-057" />
                <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                </p>
              </section>

              {/* § 04 Flags */}
              <section id="flags" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Red &amp; Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 05 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "28%" }}>Per Scoop (2.5g)</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", width: "30%" }}>Equiv. Mono Dose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "CON-CRĒT® Creatine HCl",  amount: "2,500mg",      clinical: "~3,750–5,000mg mono" },
                        { name: "Pepsin",                   amount: "Undisclosed",  clinical: "—"                   },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", color: row.amount === "Undisclosed" ? "#586259" : "#1A1714" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.clinical !== "—" ? (
                              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>{row.clinical}</span>
                            ) : <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>—</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", marginTop: 10 }}>
                  Other ingredients: None listed — unflavored · Serving: 1 scoop (2.5g) · Servings per tub: 100
                </p>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.75, marginTop: 14 }}>
                  The monohydrate equivalent column is an estimate based on absorption efficiency rationale, not a guaranteed equivalency. If you want certainty, take 2 scoops (5g HCl) to match the established monohydrate clinical dose.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                {([
                  { name: "CON-CRĒT® Creatine HCl — 2.5g", link: null, evidence: "moderate" as EvidenceLevel, verdict: "Patented form, limited head-to-head data", body: "Creatine HCl's solubility advantage is a physical fact. The question is whether 2.5g of HCl achieves the same intramuscular creatine saturation as 5g monohydrate. The theoretical basis: HCl is more completely absorbed, meaning less goes to waste. CON-CRĒT® studies (including work by Spillane et al., 2009 in JISSN) found performance benefits at low doses. Criticism: these studies are underpowered relative to monohydrate's evidence base, and most creatine researchers still recommend confirming saturation with 5g regardless of form. Our recommendation: take 2 scoops (5g HCl) if you want to match established evidence, or 1 scoop (2.5g) if you specifically follow the CON-CRĒT® protocol and accept the smaller evidence base." },
                  { name: "Pepsin — dose undisclosed", link: null, evidence: "limited" as EvidenceLevel, verdict: "Smart addition, dose unknown", body: "Pepsin is an endogenous gastric protease that breaks down proteins. Its inclusion is intended to reduce any residual GI discomfort from the creatine compound in the gut. The mechanism is sound — pepsin has documented effects on protein digestion tolerance. The omission of the dose from the label is a transparency gap; without knowing the amount, it is impossible to assess whether it's a functional or token inclusion." },
                ] as { name: string; link: string | null; evidence: EvidenceLevel; verdict: string; body: string }[]).map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
                        {ing.link ? <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link> : ing.name}
                      </p>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <EvidenceBadge level={ing.evidence} showIcon={false} />
                        <span style={{ padding: "3px 9px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{ing.verdict}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>{ing.body}</p>
                  </div>
                ))}

                <div style={{ padding: "16px 20px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 10, marginTop: 8 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>HCl vs Monohydrate — the honest scorecard</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
                    Monohydrate wins on: evidence volume (500+ RCTs), cost ($0.15–0.35/serving), established loading protocols, and independent certification options. HCl wins on: water solubility (38×), GI tolerance in sensitive users, mixing versatility (clear in any liquid), and smaller serving size for those who want minimal intake. Neither is &quot;better&quot; for a well-tolerating user — monohydrate is simply more proven and cheaper. HCl is the right choice for a specific, real problem.
                  </p>
                </div>
              </section>

              {/* § 07 Lab Data */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Testing &amp; Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "HPLC Purity Testing",       status: "pass"    as const },
                    { label: "CON-CRĒT® Patented Form",   status: "pass"    as const },
                    { label: "cGMP Manufacturing",         status: "pass"    as const },
                    { label: "Informed Sport Cert",        status: "fail"    as const },
                    { label: "NSF Certified for Sport",    status: "fail"    as const },
                    { label: "Banned Substance Screened",  status: "partial" as const },
                  ].map((cert) => {
                    const s = { pass: { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)", border: "rgba(26,107,58,0.2)", label: "Confirmed", color: "#1A6B3A" }, partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)", border: "rgba(146,98,10,0.2)", label: "Partial", color: "#92620A" }, fail: { dot: "#9B2020", bg: "rgba(155,32,32,0.06)", border: "rgba(155,32,32,0.18)", label: "Not held", color: "#9B2020" } }[cert.status];
                    return (
                      <div key={cert.label} style={{ padding: "14px 16px", backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: s.dot, flexShrink: 0 }} />
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: s.color, margin: 0 }}>{s.label}</p>
                        </div>
                        <p style={{ fontSize: 12, color: "#3C3530", margin: 0, lineHeight: 1.4 }}>{cert.label}</p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                  HPLC testing establishes creatine HCl identity and purity — it is a meaningful quality step. It does not cover the full banned substance panel. For competitive athletes in drug-tested sport, Informed Sport or NSF certification is required — this product does not have either.
                </p>
              </section>

              {/* § 08 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 09 How to Take */}
              <section id="how-to-take" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Standard dose",  value: "1 scoop (2.5g) daily per brand protocol"    },
                    { label: "Conservative",   value: "2 scoops (5g) to match monohydrate evidence" },
                    { label: "Mix with",       value: "Any liquid — dissolves completely and clearly" },
                    { label: "Timing",         value: "Any time — pre, intra, or post workout"       },
                    { label: "Rest days",      value: "Yes — daily use for phosphocreatine saturation" },
                    { label: "Loading",        value: "Not required or recommended"                   },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.8 }}>
                  The practical standout here is versatility. Because it dissolves completely and leaves the liquid clear, you can add this to morning coffee, a smoothie, or plain water without noticing it. This is genuinely useful for people who want creatine in their routine without a dedicated shake.
                </p>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Form", "Dose", "Price/serve", "Cert", "GI-friendly"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", textAlign: "left", borderBottom: "1px solid #3C3530" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Gorilla Mind HCl",   form: "CON-CRĒT® HCl", dose: "2.5g (5g opt.)", price: "$0.80",  cert: "HPLC only",      gi: "Best in class" },
                        { product: "Gorilla Mind Mono",  form: "Micronized",     dose: "5g",             price: "$0.35",  cert: "HPLC only",      gi: "Good"          },
                        { product: "TL Creatine HMB",    form: "Monohydrate",    dose: "5g",             price: "$1.67",  cert: "Informed Sport", gi: "Good"          },
                        { product: "Thorne Creatine",    form: "Creapure®",      dose: "5g",             price: "$0.60",  cert: "NSF Certified",  gi: "Good"          },
                        { product: "NOW Creatine Mono",  form: "Monohydrate",    dose: "5g",             price: "$0.15",  cert: "GMP only",       gi: "Variable"      },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#3A5F8B" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.form}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.dose}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, fontFamily: "var(--font-jetbrains), monospace", color: "#3C3530", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.gi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.6 }}>Prices verified May 2026.</p>

                {/* Competitor product cards */}
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 14 }}>Shop Competitors</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {([
                      { name: "Gorilla Mind Micronized", cert: "HPLC Tested",   price: "$0.35/serve", image: "/products/GorillaMindreatineMonohydrateMicronizedPowder.webp", buyUrl: "https://amzn.to/3PAiUk1",  reviewSlug: "gorilla-mind-creatine-monohydrate" },
                      { name: "TL Creatine HMB",         cert: "Informed Sport",price: "$1.67/serve", image: "/products/tl-creatine-hmb.webp",                               buyUrl: "https://amzn.to/3Qba8ZR",  reviewSlug: "transparent-labs-creatine-hmb" },
                      { name: "Thorne Creatine Creapure",cert: "NSF Certified", price: "$0.60/serve", image: "/products/thorne-creatine-creapure.webp",                       buyUrl: "https://www.amazon.com/s?k=thorne+creatine+creapure", reviewSlug: null },
                      { name: "ON Micronized Creatine",  cert: "GMP Certified", price: "$0.20/serve", image: "/products/on-micronized-creatine-monohydrate-powder.webp",     buyUrl: "https://www.amazon.com/s?k=optimum+nutrition+micronized+creatine", reviewSlug: null },
                    ] as { name: string; cert: string; price: string; image: string; buyUrl: string; reviewSlug: string | null }[]).map((comp) => (
                      <div key={comp.name} style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#F6F8F6" }}>
                        <div style={{ height: 3, backgroundColor: "#3A5F8B" }} />
                        <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 52, height: 66, flexShrink: 0, backgroundColor: "#F2F8F4", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={comp.image} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", marginBottom: 3, lineHeight: 1.3, fontFamily: "var(--font-hanken), sans-serif" }}>{comp.name}</p>
                            <p style={{ fontSize: 10, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", marginBottom: 4, letterSpacing: "0.04em" }}>{comp.cert}</p>
                            <p style={{ fontSize: 11, fontWeight: 700, color: "#3A5F8B", fontFamily: "var(--font-jetbrains), monospace", marginBottom: 8 }}>{comp.price}</p>
                            <div style={{ display: "flex", gap: 5 }}>
                              <a href={comp.buyUrl} target="_blank" rel="nofollow noopener noreferrer"
                                style={{ fontSize: 10, padding: "4px 9px", backgroundColor: "#3A5F8B", color: "#FFFFFF", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600 }}>
                                Buy →
                              </a>
                              {comp.reviewSlug && (
                                <Link href={`/reviews/${comp.reviewSlug}`}
                                  style={{ fontSize: 10, padding: "4px 9px", border: "1px solid #E4E8E5", color: "#3F4B43", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.04em" }}>
                                  Read →
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* § 11 Products at a Glance */}
              <section id="products" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 20 }}>For the monohydrate version from the same brand, see our <Link href="/reviews/gorilla-mind-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>Gorilla Mind Micronized review</Link>.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="Creatine HCl" brand="Gorilla Mind" category="Creatine" score={7} priceUSD="$39.99 / 100 scoops" priceINR="N/A"
                    tags={["CON-CRĒT®", "Pepsin", "Unflavored", "HPLC Tested"]} buyUrl="https://amzn.to/3PAhINz" buyLabel="Buy on Amazon"
                    reviewSlug="gorilla-mind-creatine-hcl" image="GorillaMindCreatineHCl.webp" bgFrom="#1A1E2E" bgTo="#11131E" accent="#3A5F8B" featured={true} />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "CON-CRĒT® is the best-researched patented HCl form — not generic bulk HCl",
                    "38× more water soluble than monohydrate — dissolves completely in minimal liquid",
                    "Pepsin addition reduces GI discomfort for sensitive users",
                    "Completely unflavored and colour-neutral — mixes invisibly into any drink",
                    "100 scoops per tub — generous supply at a competitive per-scoop price",
                    "HPLC purity tested — identity and contaminant-free verification",
                  ]}
                  cons={[
                    "No Informed Sport or NSF certification — not suitable for drug-tested athletes",
                    "Pepsin dose not disclosed — cannot verify if it's functional",
                    "Dose equivalency claim (2.5g HCl = 5g mono) has limited head-to-head evidence",
                    "At $0.80/full dose (2 scoops), costs more than monohydrate without a certification advantage",
                    "Only available unflavored — no flavoured options for those who prefer them",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Safety &amp; Side Effects</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Creatine HCl at the doses in this product is well-tolerated. The ISSN (2017) concluded creatine supplementation is safe for long-term use in healthy adults regardless of form. Pepsin at typical supplement doses has no documented adverse effects.
                </p>
                {[
                  { heading: "Expected with any creatine", points: ["Intramuscular water retention — water drawn into muscle cells, part of the mechanism of action. Scale weight may increase 0.5–1.5kg in the first 2 weeks.", "Mild GI adjustment — less likely with HCl than monohydrate due to superior solubility"] },
                  { heading: "Consult a physician if", points: ["You have kidney or liver disease — creatine metabolism produces creatinine, a kidney marker. Cleared for healthy kidneys.", "You are pregnant or breastfeeding — insufficient safety data for this population"] },
                ].map((g) => (
                  <div key={g.heading} style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>{g.heading}</p>
                    <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>{g.points.map((pt) => <li key={pt} style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>{pt}</li>)}</ul>
                  </div>
                ))}
              </section>

              {/* § 14 Value */}
              <section id="value" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Price &amp; Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine HCl" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "100 scoops (one-time)",   price: "$39.99",  perServe: "$0.40 at 1 scoop / $0.80 at 2" },
                    { option: "Amazon listing",           price: "$39.99",  perServe: "Same as direct"                  },
                    { option: "Subscribe & Save",         price: "~$35.99", perServe: "$0.36–$0.72/serving"            },
                  ].map((r) => (
                    <div key={r.option} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{r.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{r.price}</p>
                      <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{r.perServe}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3A5F8B", marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>$39.99 <span style={{ fontSize: "0.55em", color: "#586259", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 400 }}>/ 100 scoops</span></p>
                    <p style={{ fontSize: 13, color: "#3F4B43", margin: 0 }}>Prime shipping · Fast delivery · Easy returns. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/3PAhINz" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3A5F8B", color: "#FFFFFF", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 16 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderRadius: 8, border: "1px solid #F2F8F4", overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-gmhcl" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3A5F8B" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#3F4B43", lineHeight: 1.7, fontFamily: "var(--font-hanken), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-gmhcl svg { display: none; }
                  details[open] .faq-icon-gmhcl::after { content: ''; display: block; width: 10px; height: 2px; background: #3A5F8B; border-radius: 1px; }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>FSP · 7/10 · Gorilla Mind Creatine HCl</p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        Gorilla Mind built the right product: best-in-class patented HCl form, pepsin for GI tolerance, clean unflavored formulation. If creatine HCl is what you need, this is what you should buy.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        Whether you need HCl is the real question. The majority of people who use creatine monohydrate at 5g daily experience zero GI issues. The mixing advantage is real but niche. The dose equivalency claim is plausible but underproven. The absence of Informed Sport certification keeps it out of reach for drug-tested athletes.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85 }}>
                        For GI-sensitive users who can&apos;t tolerate monohydrate: this is the answer. For everyone else: <Link href="/reviews/gorilla-mind-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>Gorilla Mind Micronized</Link> at $0.35/serving covers your needs.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a href="https://amzn.to/3PAhINz" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}>
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", marginTop: 8 }}>$39.99 · 100 scoops</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Spillane M et al. (2009). The effects of creatine ethyl ester and creatine monohydrate supplementation on muscle creatine and phosphocreatine. JISSN. 6:6.", url: "https://doi.org/10.1186/1550-2783-6-6" },
                      { text: "Rawson ES, Volek JS. (2003). Effects of creatine supplementation and resistance training on muscle strength. J Strength Cond Res. 17(4):822–31.", url: "https://doi.org/10.1519/1533-4287(2003)017<0822:EOCSART>2.0.CO;2" },
                      { text: "Kreider RB et al. (2017). ISSN position stand: Safety and efficacy of creatine supplementation. JISSN. 14:18.", url: "https://doi.org/10.1186/s12970-017-0173-z" },
                      { text: "Antonio J et al. (2021). Common questions and misconceptions about creatine supplementation. JISSN. 18:13.", url: "https://doi.org/10.1186/s12970-021-00412-w" },
                      { text: "Lanhers C et al. (2017). Creatine supplementation and upper limb strength performance: A systematic review. Sports Med. 47(1):163–73.", url: "https://doi.org/10.1007/s40279-016-0571-4" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ref.text}{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#3A5F8B", textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        <section style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#3A5F8B", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
