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
  title: "Gorilla Mind Creatine Monohydrate Review (2026) — Rated 8/10",
  description:
    "Gorilla Mind Micronized Creatine: 5g per serving, 100 servings, $0.35/serving. HPLC tested. The value case for creatine monohydrate at its cleanest. FSP 8/10.",
  alternates: { canonical: "/reviews/gorilla-mind-creatine-monohydrate" },
  openGraph: {
    title: "Gorilla Mind Creatine Monohydrate Review (2026) — Rated 8/10",
    description:
      "100 servings of micronized creatine monohydrate at 5g per serve. HPLC tested, unflavored, single ingredient. The strongest value case in the creatine category.",
    url: "https://fitlabreviews.com/reviews/gorilla-mind-creatine-monohydrate",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"              },
  { id: "what-is",          label: "What Is This Product?"      },
  { id: "score-breakdown",  label: "Score Breakdown"             },
  { id: "flags",            label: "Red & Green Flags"           },
  { id: "supplement-facts", label: "Supplement Facts"            },
  { id: "ingredients",      label: "Ingredient Breakdown"        },
  { id: "lab-data",         label: "Testing & Verification"      },
  { id: "claim-audit",      label: "Claim Audit"                 },
  { id: "how-to-take",      label: "How to Take It"              },
  { id: "comparison",       label: "vs. Competitors"             },
  { id: "products",         label: "Products at a Glance"        },
  { id: "pros-cons",        label: "Pros & Cons"                 },
  { id: "safety",           label: "Safety & Side Effects"       },
  { id: "value",            label: "Price & Value"               },
  { id: "where-to-buy",     label: "Where to Buy"                },
  { id: "faq",              label: "FAQ"                         },
  { id: "final",            label: "Final Verdict"               },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.5,
      notes:
        "Single ingredient: micronized creatine monohydrate at 5g per serving. Micronisation reduces the particle size to less than 200 micrometres, which increases surface area and improves dissolution rate compared to standard creatine monohydrate. This matters practically: finer particles hydrate faster, mix more smoothly, and cause less GI irritation. No additives, fillers, or excipients. The formula is as clean as a formula can be — one ingredient that happens to be the most researched ergogenic compound in sports nutrition.",
    },
    {
      pillar: "transparency",
      score: 10.0,
      notes:
        "One ingredient. One dose. Fully disclosed. There is no proprietary blend to hide behind, no ambiguous serving size, and nothing in the other ingredients column except the product itself. Perfect transparency score — there is simply nothing to hide.",
    },
    {
      pillar: "verification",
      score: 7.0,
      notes:
        "HPLC (high-performance liquid chromatography) third-party tested for purity and identity. This confirms the creatine monohydrate content is accurate and the product is free of common contaminants. No Informed Sport, NSF Certified for Sport, or BSCG certification — so banned substance testing to elite sport standards is not available. For the general population this is adequate. For competitive drug-tested athletes, look at Thorne Creapure (NSF) or TL Creatine HMB (Informed Sport).",
    },
    {
      pillar: "value",
      score: 9.5,
      notes:
        "$34.99 for 100 servings at 5g each = $0.35/serving. This is among the best cost-per-gram pricing available from a reputable brand with third-party testing. Bulk powder sources (BulkSupplements) can go lower at $0.10–0.15/serving but without named-brand quality controls. For tested, branded micronized creatine at this price point, there is very little competition.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Unflavored. Mixes well in water — micronization means better dissolution than standard powder. Some grit remains compared to HCl (which dissolves completely clear), but significantly less than non-micronized monohydrate. 100 servings per tub means 3+ months of supply. The tradeoff: no flavoured options for those who want them. No measuring ambiguity — one flat scoop = 5g.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "5g micronized monohydrate — gold standard",
      detail: "The form used in the majority of 500+ human RCTs, at the established clinical dose. No upgrade required — this is the benchmark.",
    },
    {
      type: "green",
      label: "Single ingredient — complete transparency",
      detail: "One compound. One dose. Nothing to hide and nothing hidden. The cleanest label in the creatine category.",
    },
    {
      type: "green",
      label: "HPLC purity and identity tested",
      detail: "Third-party high-performance liquid chromatography confirms what the label says is what's in the tub, at the stated dose.",
    },
    {
      type: "green",
      label: "Exceptional value — $0.35/serving",
      detail: "100 servings at the clinical dose for $34.99. One of the best price-per-gram ratios from a reputable brand with third-party testing.",
    },
    {
      type: "red",
      label: "No Informed Sport or NSF certification",
      detail: "HPLC testing does not cover the banned substance panel required for elite sport. Drug-tested competitive athletes need Informed Sport or NSF certification.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Not Creapure® — unspecified sourcing",
      detail: "Creapure® is the German-manufactured creatine used by brands like Thorne that want the highest-sourcing verification. Gorilla Mind uses standard micronized monohydrate without specifying the manufacturing origin.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Improved Muscle Size"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine supplementation consistently increases lean mass through increased intramuscular water and muscle protein synthesis support. This is one of the most replicated findings in exercise science across hundreds of studies and multiple meta-analyses.",
    },
    {
      claim: '"Power Output"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Phosphocreatine replenishment directly enables greater short-duration high-intensity force production. Sprint performance, 1RM strength, and repeated sprint power all improve consistently with creatine supplementation (Rawson & Volek, 2003).",
    },
    {
      claim: '"Strength"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Lanhers et al. (2017) meta-analysis confirmed upper limb strength improvement. Lower body strength gains are equally well-documented. Creatine increases the work capacity available before phosphocreatine depletion, directly translating to more reps and sets at a given load.",
    },
    {
      claim: '"Micronized for better absorption"',
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Micronisation reduces particle size, increasing surface area and improving dissolution rate. Better dissolution correlates with improved GI tolerance and potentially faster gastric transit. Full bioavailability comparison studies are limited but the physical rationale and user experience data support this claim.",
    },
    {
      claim: '"No fillers, no additives"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "The supplement facts panel shows one ingredient. The label is accurate and verified by HPLC. Claim is entirely factual.",
    },
  ],
  valueMetric: {
    pricePerServing: 0.35,
    primaryActiveGrams: 5.0,
    pricePerGramActive: 0.07,
    categoryAvgPricePerGram: 0.06,
    efficiency: "at",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/gorilla-mind-creatine-monohydrate#review",
  name: "Gorilla Mind Creatine Monohydrate Micronized — Fitlabreviews FSP Review",
  reviewBody:
    "Gorilla Mind Micronized Creatine Monohydrate delivers 5g per serving at $0.35/serving across 100 servings. HPLC tested, single ingredient, no additives. This is the value benchmark in the creatine category — the cleanest formula at the most competitive price from a brand with third-party quality controls. The only gaps: no Informed Sport/NSF certification and unspecified creatine sourcing (not Creapure). For general users, it is hard to beat.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  itemReviewed: {
    "@type": "Product",
    name: "Gorilla Mind Creatine Monohydrate Micronized Powder",
    brand: { "@type": "Brand", name: "Gorilla Mind" },
    category: "Creatine Supplement",
    description: "100 servings of micronized creatine monohydrate at 5g per serving. Unflavored, HPLC tested, single ingredient.",
    offers: { "@type": "Offer", price: "34.99", priceCurrency: "USD", priceValidUntil: "2026-12-31", availability: "https://schema.org/InStock", url: "https://amzn.to/3PAiUk1" },
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
      name: "What is the difference between micronized and regular creatine monohydrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Micronized creatine monohydrate has been processed to reduce particle size to under 200 micrometres. This increases surface area, which improves dissolution rate in water. Practical result: it mixes more smoothly, leaves less grit at the bottom of your glass, and is easier on the GI tract for sensitive users. The creatine molecule itself is identical — micronisation is a processing method, not a different compound. Both forms have the same efficacy at the same dose.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gorilla Mind Creatine use Creapure®?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gorilla Mind does not specify Creapure® as their creatine source. Creapure® is a patented German-manufactured creatine monohydrate from AlzChem, known for exceptionally high purity standards. Some brands use it and market it as a quality differentiator. Gorilla Mind uses HPLC testing to verify purity independently, which is a different (valid) approach to quality assurance. The product is tested and confirmed pure — it is just not the Creapure form specifically.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a loading phase with this creatine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Loading (20g/day for 5–7 days) saturates muscle creatine stores faster but produces the same intramuscular creatine level as 3–4 weeks of 5g/day maintenance dosing. The ISSN confirms both approaches are effective. Loading causes more acute water retention and GI discomfort in some users. Gorilla Mind recommends 5g daily without a loading phase — that is a sensible, well-supported protocol.",
      },
    },
    {
      "@type": "Question",
      name: "Can I mix this creatine with pre-workout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The unflavored, fine-particle format mixes easily with pre-workout powders, protein shakes, or any other beverage. There are no interactions between creatine monohydrate and common pre-workout ingredients (caffeine, citrulline, beta-alanine, BCAAs). Historically, concerns about caffeine interfering with creatine's effect have not been replicated in modern studies. Combine freely.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Gorilla Mind creatine priced lower than many competitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine monohydrate is one of the most commoditised ingredients in sports nutrition — the raw material is inexpensive and the manufacturing is straightforward. Many brands charge premiums for branding, flavoured versions, certification badges, or co-ingredients (like HMB or D3). Gorilla Mind's micronized creatine is priced near the raw ingredient cost with reasonable brand margin added. The HPLC testing adds quality assurance without the cost of third-party certification programmes like Informed Sport.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a 100-serving tub last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At 5g daily (one scoop), 100 servings = 100 days — over 3 months. At 10g daily during a loading phase, 50 days. Most users on a maintenance protocol will get approximately 3.5 months per tub, making the cost per month around $10–11. This is one of the lowest cost-per-month figures for tested creatine monohydrate.",
      },
    },
    {
      "@type": "Question",
      name: "Is this creatine safe for long-term daily use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The International Society of Sports Nutrition (2017) position stand concluded that creatine monohydrate at 3–5g/day is safe for long-term use in healthy adults. Studies have followed users for up to five years without adverse effects in those with healthy kidneys. There is no evidence of tolerance, dependency, or reduced effectiveness with continuous use — in fact, saturation is maintained with consistent daily dosing.",
      },
    },
    {
      "@type": "Question",
      name: "Is unflavored creatine powder as effective as flavored versions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — flavouring does not affect creatine efficacy. The active ingredient and dose are the same regardless of whether natural flavors, sweeteners, or colorings are added. Flavoured versions are a preference choice, not a performance one. The advantage of unflavored: it can be added to any beverage without changing the taste, and there are fewer other ingredients that could theoretically interact with absorption (though no significant interactions are documented for common supplement flavoring agents).",
      },
    },
  ],
};

const relatedReviews = [
  {
    slug: "gorilla-mind-creatine-hcl",
    title: "Gorilla Mind Creatine HCl",
    brand: "Gorilla Mind",
    category: "Creatine",
    rating: 7 as ReviewRating,
    verdict: "CON-CRĒT® HCl + pepsin for GI-sensitive users. 38× more soluble, unflavored, 100 scoops.",
    publishedAt: "2026-05-30",
    figNumber: "57",
  },
  {
    slug: "transparent-labs-creatine-hmb",
    title: "TL Creatine HMB",
    brand: "Transparent Labs",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Informed Sport certified stack: 5g creatine + 1.5g MyHMB®. The premium option for caloric-deficit training.",
    publishedAt: "2026-05-30",
    figNumber: "56",
  },
];

export default function GorillaMindCreatineMonoReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Creatine", href: "/category/creatine" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>GM Creatine Monohydrate</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A1E2E 0%, #252B40 50%, #1A1E2E 100%)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(58,95,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,95,139,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-058</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A5F8B", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Gorilla Mind
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3A5F8B", fontSize: "0.85em" }}>Micronized Creatine</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  100 servings of 5g micronized creatine monohydrate at $0.35 per serving. One ingredient. HPLC tested. No fillers. This is what creatine looks like when you strip everything else away.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3PAiUk1" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 180, height: 220 }}>
                  <Image src="/products/GorillaMindreatineMonohydrateMicronizedPowder.webp" alt="Gorilla Mind Creatine Monohydrate Micronized" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 8px 40px rgba(58,95,139,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}><ReviewScoreBadge rating={editorialScore} size="lg" /></div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* Star row */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 4 }}>
              {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={12} fill="#3A5F8B" color="#3A5F8B" />)}
              {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i} size={12} fill="none" color="#3A5F8B" />)}
              <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginLeft: 6 }}>{editorialScore}/10</span>
            </div>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>REV-2026-058</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Creatine · Best Value</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",    value: "Gorilla Mind"              },
            { label: "Category", value: "Creatine"                  },
            { label: "Serving",  value: "1 scoop (5g) / day"        },
            { label: "Price",    value: "$34.99 / 100 servings"     },
            { label: "Per Serve", value: "$0.35"                    },
            { label: "Published", value: "May 30, 2026"             },
          ]} />
        </div>

        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #D4C9B8, #3A5F8B)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#F2EBD9", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>
                Reviewed by the full team · <Link href="/authors" style={{ color: "#3A5F8B", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
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
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
            <article style={{ minWidth: 0 }}>

              {/* § 01 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>FSP Score · 8/10</p>
                  <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85 }}>
                    There is no trick here. One ingredient. The right dose. HPLC tested. Three months of supply for $35. This is the value benchmark in the creatine category — the most evidence-backed ergogenic compound available, at the established clinical dose, from a brand that tests its product. The two gaps: no Informed Sport or NSF certification, and unspecified creatine sourcing (not Creapure). For the general population those gaps are not disqualifying. For drug-tested competitive athletes, they are — look at Thorne or Transparent Labs instead.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#1A1714", margin: 0, lineHeight: 1 }}>
                        {p.score.toFixed(1)}<span style={{ fontSize: "0.5em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/10</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mobile product card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
                  <div style={{ background: "linear-gradient(145deg, #1A1E2E 0%, #252B40 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(58,95,139,0.15)", border: "1px solid rgba(58,95,139,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3A5F8B" }}>
                      <ShieldCheck size={10} /> HPLC Tested · Single Ingredient
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 190 }}>
                      <Image src="/products/GorillaMindreatineMonohydrateMicronizedPowder.webp" alt="Gorilla Mind Creatine Monohydrate" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(58,95,139,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Gorilla Mind</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Micronized Creatine</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "5g", label: "Per Serve" }, { val: "100", label: "Servings" }].map((s) => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3A5F8B", lineHeight: 1, marginBottom: 3 }}>{s.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 100 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$34.99</p>
                      </div>
                      <a href="https://amzn.to/3PAiUk1" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 02 What Is It */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>What Is This Product?</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Gorilla Mind Micronized Creatine Monohydrate is exactly what the name says: micronized <Link href="/ingredients/creatine" style={{ color: "#3A5F8B", textDecoration: "none" }}>creatine monohydrate</Link> at 5g per serving, 100 servings per tub, unflavored. The micronisation reduces particle size to under 200 micrometres — practical effect: finer powder that dissolves faster, mixes more smoothly, and causes less GI friction than standard coarse creatine.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  There is nothing else in this product. No fillers. No artificial sweeteners. No anti-caking agents. No proprietary blends. The supplement facts panel is one line. The other ingredients section is blank.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  HPLC third-party tested for purity and identity. Available on Amazon, Walmart, and the Gorilla Mind direct site. At $34.99 for 100 servings, this sits in the value tier of tested creatine monohydrate — above unverified bulk powder, below Creapure-certified or Informed Sport products.
                </p>
              </section>

              {/* § 03 Score */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-058" />
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                </p>
              </section>

              {/* § 04 Flags */}
              <section id="flags" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Red &amp; Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 05 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "28%" }}>Per Serving</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "30%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#F8F2E4", borderBottom: "1px solid #EDE8DF" }}>
                        <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>Creatine Monohydrate (Micronized)</td>
                        <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: "#1A1714" }}>5,000mg</td>
                        <td style={{ padding: "11px 16px", textAlign: "center" }}>
                          <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>3,000–5,000mg</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 10 }}>
                  Other ingredients: None · Serving size: 1 scoop (5g) · Servings per container: 100
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                <div style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
                      <Link href="/ingredients/creatine" style={{ color: "#1A1714", textDecoration: "none" }}>Creatine Monohydrate (Micronized) — 5g →</Link>
                    </p>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <EvidenceBadge level={"strong" as EvidenceLevel} showIcon={false} />
                      <span style={{ padding: "3px 9px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>Gold standard — correctly dosed</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Creatine monohydrate at 5g/day is the most studied ergogenic compound in sports science. The mechanism: dietary creatine replenishes intramuscular phosphocreatine stores, which are the immediate energy source for maximal-intensity efforts lasting 1–10 seconds. With higher phosphocreatine availability, you can do more work before fatigue — more reps, more sets, more sprint repeats. Over weeks and months of consistent training with elevated creatine stores: measurable increases in lean mass, strength, and power output. Rawson & Volek (2003) confirmed strength gains; Lanhers et al. (2017) confirmed upper-body strength in a meta-analysis of 22 studies; Smith-Ryan et al. (2021) confirmed equivalent effects in women. Micronisation improves the dissolution rate and GI tolerability versus standard-grind monohydrate. No other creatine form has equivalent evidence at the monohydrate level.
                  </p>
                </div>

                <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Why creatine monohydrate still wins in 2026</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Multiple creatine variants have launched claiming superiority: buffered creatine (Kre-Alkalyn), creatine ethyl ester, creatine nitrate, creatine HCl, tri-creatine malate. None have convincingly outperformed monohydrate in head-to-head trials with adequate power and independent replication. Monohydrate remains the reference standard not by default but because it has survived 30+ years of scrutiny. Gorilla Mind&apos;s choice to formulate monohydrate is the scientifically correct choice.
                  </p>
                </div>
              </section>

              {/* § 07 Lab Data */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Testing &amp; Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "HPLC Purity Tested",         status: "pass"    as const },
                    { label: "Identity Verified",           status: "pass"    as const },
                    { label: "cGMP Manufacturing",          status: "pass"    as const },
                    { label: "Informed Sport Certified",    status: "fail"    as const },
                    { label: "NSF Certified for Sport",     status: "fail"    as const },
                    { label: "Creapure® Sourced",           status: "partial" as const },
                  ].map((cert) => {
                    const s = { pass: { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)", border: "rgba(26,107,58,0.2)", label: "Confirmed", color: "#1A6B3A" }, partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)", border: "rgba(146,98,10,0.2)", label: "Not specified", color: "#92620A" }, fail: { dot: "#9B2020", bg: "rgba(155,32,32,0.06)", border: "rgba(155,32,32,0.18)", label: "Not held", color: "#9B2020" } }[cert.status];
                    return (
                      <div key={cert.label} style={{ padding: "14px 16px", backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: s.dot, flexShrink: 0 }} />
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: s.color, margin: 0 }}>{s.label}</p>
                        </div>
                        <p style={{ fontSize: 12, color: "#3C3530", margin: 0, lineHeight: 1.4 }}>{cert.label}</p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                  HPLC testing is meaningful — it confirms the 5g creatine monohydrate on the label is what is in the scoop, and that the product is free from common adulteration. It does not cover the comprehensive banned-substance panel that Informed Sport or NSF certification requires. For recreational users, HPLC is adequate verification. For competitive athletes in drug-tested sport: this is not the product to use.
                </p>
              </section>

              {/* § 08 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 09 How to Take */}
              <section id="how-to-take" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Daily dose",     value: "5g (1 flat scoop)"                        },
                    { label: "Timing",         value: "Any time — with or without food"           },
                    { label: "Rest days",      value: "Yes — daily use maintains saturation"      },
                    { label: "Loading",        value: "Optional: 20g/day for 5 days (faster sat.)" },
                    { label: "Mix with",       value: "8–12oz water, shake, or any beverage"      },
                    { label: "With carbs",     value: "Insulin-mediated uptake — mildly beneficial" },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.8 }}>
                  The single most important protocol point: take it every day, including rest days. Phosphocreatine saturation is a cumulative effect that requires consistent daily maintenance. Missing days allows stores to gradually decline. At 5g daily, saturation takes approximately 28 days. At 20g/day loading for 5 days, saturation is faster but produces a temporary water retention spike. Both reach the same endpoint.
                </p>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Price/serve", "Form", "Cert", "Servings/tub", "Sourcing"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", textAlign: "left", borderBottom: "1px solid #3C3530" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Gorilla Mind Mono",    price: "$0.35", form: "Micronized",     cert: "HPLC only",      servings: "100", sourcing: "Unspecified"   },
                        { product: "Thorne Creatine",      price: "$0.60", form: "Creapure®",      cert: "NSF Certified",  servings: "90",  sourcing: "Germany (AlzChem)" },
                        { product: "TL Creatine HMB",      price: "$1.67", form: "Mono + HMB",     cert: "Informed Sport", servings: "30",  sourcing: "Unspecified"   },
                        { product: "BulkSupplements Mono", price: "$0.12", form: "Standard",       cert: "cGMP only",      servings: "200+", sourcing: "Unspecified"  },
                        { product: "Myprotein Creatine",   price: "$0.20", form: "Micronized",     cert: "Informed Choice", servings: "250+", sourcing: "Unspecified" },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#3A5F8B" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#3C3530", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.form}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.servings}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.sourcing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  Gorilla Mind Mono sits between bulk powders (lower price, no quality testing) and Creapure-sourced or certified options (higher price, stronger verification). For most users who don&apos;t require sport certification, it is the ideal middle point. Prices verified May 2026.
                </p>

                {/* Competitor product cards */}
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>Shop Competitors</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {([
                      { name: "Thorne Creatine Creapure", cert: "NSF Certified",  price: "$0.60/serve", image: "/products/thorne-creatine-creapure.webp",                       buyUrl: "https://www.amazon.com/s?k=thorne+creatine+creapure", reviewSlug: null },
                      { name: "TL Creatine HMB",          cert: "Informed Sport", price: "$1.67/serve", image: "/products/tl-creatine-hmb.webp",                               buyUrl: "https://amzn.to/3Qba8ZR",  reviewSlug: "transparent-labs-creatine-hmb" },
                      { name: "Gorilla Mind HCl",          cert: "HPLC Tested",   price: "$0.80/serve", image: "/products/GorillaMindCreatineHCl.webp",                         buyUrl: "https://amzn.to/3PAhINz",  reviewSlug: "gorilla-mind-creatine-hcl" },
                      { name: "Bulk Supplements Creatine", cert: "cGMP",          price: "$0.12/serve", image: "/products/bulk-supplements-creatine.webp",                      buyUrl: "https://www.amazon.com/s?k=bulksupplements+creatine+monohydrate", reviewSlug: null },
                      { name: "ON Micronized Creatine",    cert: "GMP Certified", price: "$0.20/serve", image: "/products/on-micronized-creatine-monohydrate-powder.webp",     buyUrl: "https://www.amazon.com/s?k=optimum+nutrition+micronized+creatine", reviewSlug: null },
                    ] as { name: string; cert: string; price: string; image: string; buyUrl: string; reviewSlug: string | null }[]).map((comp) => (
                      <div key={comp.name} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                        <div style={{ height: 3, backgroundColor: "#3A5F8B" }} />
                        <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 52, height: 66, flexShrink: 0, backgroundColor: "#EDE8DF", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={comp.image} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", marginBottom: 3, lineHeight: 1.3, fontFamily: "var(--font-dm-sans), sans-serif" }}>{comp.name}</p>
                            <p style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 4, letterSpacing: "0.04em" }}>{comp.cert}</p>
                            <p style={{ fontSize: 11, fontWeight: 700, color: "#3A5F8B", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 8 }}>{comp.price}</p>
                            <div style={{ display: "flex", gap: 5 }}>
                              <a href={comp.buyUrl} target="_blank" rel="nofollow noopener noreferrer"
                                style={{ fontSize: 10, padding: "4px 9px", backgroundColor: "#3A5F8B", color: "#F2EBD9", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>
                                Buy →
                              </a>
                              {comp.reviewSlug && (
                                <Link href={`/reviews/${comp.reviewSlug}`}
                                  style={{ fontSize: 10, padding: "4px 9px", border: "1px solid #D4C9B8", color: "#5C5650", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
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
              <section id="products" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>For Gorilla Mind&apos;s HCl version, see our <Link href="/reviews/gorilla-mind-creatine-hcl" style={{ color: "#3A5F8B", textDecoration: "none" }}>Creatine HCl review</Link>.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="Creatine Monohydrate Micronized" brand="Gorilla Mind" category="Creatine" score={8}
                    priceUSD="$34.99 / 100 servings" priceINR="N/A"
                    tags={["5g Monohydrate", "Micronized", "HPLC Tested", "100 Servings"]}
                    buyUrl="https://amzn.to/3PAiUk1" buyLabel="Buy on Amazon"
                    reviewSlug="gorilla-mind-creatine-monohydrate"
                    image="GorillaMindreatineMonohydrateMicronizedPowder.webp"
                    bgFrom="#1A1E2E" bgTo="#11131E" accent="#3A5F8B" featured={true} />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "5g micronized creatine monohydrate — the clinical standard form and dose",
                    "100 servings per tub — 3+ months supply at $0.35/serving",
                    "Single ingredient — maximum transparency, nothing to obscure",
                    "HPLC third-party tested — confirmed purity and identity",
                    "Mixes better than standard monohydrate — finer particles, less grit",
                    "No fillers, no sweeteners, no anti-caking agents — fully unflavored",
                    "Available on Amazon Prime and Walmart for convenient purchasing",
                  ]}
                  cons={[
                    "No Informed Sport, NSF, or BSCG certification — not suitable for drug-tested athletes",
                    "Creatine sourcing not specified — not confirmed as Creapure® German-manufactured",
                    "Only available unflavored — no flavoured options",
                    "Some grit remains vs HCl forms — not fully clear-dissolving",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Safety &amp; Side Effects</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Creatine monohydrate at 5g/day has one of the most comprehensive safety records of any supplement. The ISSN concluded in 2017 that creatine supplementation is safe for long-term use in healthy adults. Multiple studies have followed users for 5+ years without adverse effects in those with healthy kidneys.
                </p>
                {[
                  { heading: "Normal and expected", points: ["Intramuscular water retention in the first 1–2 weeks — water is drawn into muscle cells, not stored subcutaneously. Scale weight may increase 0.5–2kg temporarily.", "Mild GI adjustment — less common with micronized creatine than with coarser powder"] },
                  { heading: "Consult a physician if", points: ["Kidney or liver disease — creatine produces creatinine as a metabolite. Elevated creatinine can falsely suggest kidney impairment in people without disease. Safe for healthy kidneys.", "Pregnancy or breastfeeding — insufficient safety data; discuss with your doctor first"] },
                ].map((g) => (
                  <div key={g.heading} style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>{g.heading}</p>
                    <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>{g.points.map((pt) => <li key={pt} style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>{pt}</li>)}</ul>
                  </div>
                ))}
              </section>

              {/* § 14 Value */}
              <section id="value" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Price &amp; Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine monohydrate" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "100 servings (one-time)", price: "$34.99",  perServe: "$0.35/serving" },
                    { option: "Amazon listing",          price: "$34.99",  perServe: "Same as direct" },
                    { option: "Walmart",                 price: "~$32.99", perServe: "~$0.33/serving" },
                    { option: "Subscribe & Save",        price: "~$29.99", perServe: "~$0.30/serving" },
                  ].map((r) => (
                    <div key={r.option} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{r.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{r.price}</p>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{r.perServe}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3A5F8B", marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>$34.99 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 100 servings</span></p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Prime shipping · Fast delivery · Easy returns. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/3PAiUk1" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
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
                        <span className="faq-icon-gmmono" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3A5F8B" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-gmmono svg { display: none; }
                  details[open] .faq-icon-gmmono::after { content: ''; display: block; width: 10px; height: 2px; background: #3A5F8B; border-radius: 1px; }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>FSP · 8/10 · Gorilla Mind Creatine Monohydrate Micronized</p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        The case for this product is simple: creatine monohydrate is the most evidence-backed ergogenic supplement available. 5g is the correct dose. Micronized mixes better. HPLC testing gives you meaningful quality assurance. And at $0.35/serving, 100 days of supply costs $35.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        The two honest gaps: Gorilla Mind doesn&apos;t hold Informed Sport or NSF certification, which means drug-tested competitive athletes need to look elsewhere. And the creatine sourcing isn&apos;t specified as Creapure — if manufacturing origin matters to you, Thorne (NSF, Creapure) at $0.60/serving is the alternative.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85 }}>
                        For general users: this is the value benchmark. There is no reason to spend more for the same compound at the same dose unless you specifically need certification or Creapure sourcing. If you want a stack with co-ingredients, see <Link href="/reviews/transparent-labs-creatine-hmb" style={{ color: "#3A5F8B", textDecoration: "none" }}>TL Creatine HMB</Link>. If you have GI issues with monohydrate, see <Link href="/reviews/gorilla-mind-creatine-hcl" style={{ color: "#3A5F8B", textDecoration: "none" }}>Gorilla Mind HCl</Link>. If you just want creatine: this is it.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a href="https://amzn.to/3PAiUk1" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}>
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>$34.99 · 100 servings</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Rawson ES, Volek JS. (2003). Effects of creatine supplementation and resistance training on muscle strength. J Strength Cond Res. 17(4):822–31.", url: "https://doi.org/10.1519/1533-4287(2003)017<0822:EOCSART>2.0.CO;2" },
                      { text: "Lanhers C et al. (2017). Creatine supplementation and upper limb strength performance: meta-analysis. Sports Med. 47(1):163–73.", url: "https://doi.org/10.1007/s40279-016-0571-4" },
                      { text: "Smith-Ryan AE et al. (2021). Creatine supplementation in women's health: A lifespan perspective. Nutrients. 13(3):877.", url: "https://doi.org/10.3390/nu13030877" },
                      { text: "Antonio J et al. (2021). Common questions and misconceptions about creatine supplementation. JISSN. 18:13.", url: "https://doi.org/10.1186/s12970-021-00412-w" },
                      { text: "Kreider RB et al. (2017). ISSN position stand: Safety and efficacy of creatine supplementation. JISSN. 14:18.", url: "https://doi.org/10.1186/s12970-017-0173-z" },
                      { text: "Greenhaff PL et al. (1994). Influence of oral creatine supplementation of muscle torque during repeated bouts of maximal voluntary exercise. Clin Sci. 87(4):415–19.", url: "https://doi.org/10.1042/cs0870415" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#3A5F8B", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: "#3A5F8B", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
