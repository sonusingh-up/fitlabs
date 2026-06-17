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
  title: "TL Creatine HMB Review (2026) — Rated 8/10",
  description:
    "Transparent Labs Creatine HMB: 5g creatine + 1.5g MyHMB® + BioPerine, Informed Sport certified. Full ingredient audit vs plain creatine. FSP 8/10.",
  alternates: { canonical: "/reviews/transparent-labs-creatine-hmb" },
  openGraph: {
    title: "TL Creatine HMB Review (2026) — Rated 8/10",
    description:
      "5g creatine monohydrate + 1.5g clinically dosed HMB + Vitamin D3 + BioPerine. Informed Sport certified and fully disclosed. The most honest premium creatine on the market — if you need HMB.",
    url: "https://fitlabreviews.com/reviews/transparent-labs-creatine-hmb",
    type: "article",
  },
};

// ── TOC ────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"            },
  { id: "what-is",          label: "What Is Creatine HMB?"    },
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

// ── Rubric ─────────────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.5,
      notes:
        "5g creatine monohydrate — the gold standard, no debate. 1.5g HMB as MyHMB® calcium form — patented, the most studied HMB form. HMB's evidence is strongest for people in caloric deficit, older adults, and those returning from inactivity; evidence in trained athletes in caloric surplus is weaker (Wilson et al., 2014; Rowlands & Thomson, 2009). Vitamin D3 at 12.5mcg (500 IU) is a modest but relevant addition — D3 deficiency is widespread and affects muscle protein synthesis. BioPerine at 5mg enhances absorption of creatine and other nutrients via inhibition of intestinal efflux transporters. Formula is clean — stevia + natural flavors, no artificial sweeteners or colours.",
    },
    {
      pillar: "transparency",
      score: 9.5,
      notes:
        "Every active is individually disclosed with precise amounts. No proprietary blends. Certificate of Analysis is publicly available per batch. This is one of the most transparent sports nutrition brands operating — every ingredient dose on the label is what you are actually getting per third-party verification.",
    },
    {
      pillar: "verification",
      score: 9.0,
      notes:
        "Informed Sport certified — meaning every production batch is tested by LGC Group for banned substances and label accuracy before it ships. This is the highest independent verification standard available for sports supplements, non-negotiable for drug-tested athletes. GMP manufacturing in an FDA-registered facility. Batch-level COA publicly available.",
    },
    {
      pillar: "value",
      score: 6.0,
      notes:
        "$49.99 for 30 servings = $1.67/serving. Plain creatine monohydrate from a quality source: $0.15–0.35/serving. HMB powder alone costs ~$0.50–0.80/serving from reputable suppliers. So the combination is priced competitively vs buying separately — but you're still paying a meaningful premium over bare creatine monohydrate. The Informed Sport cert adds cost to every batch tested.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Eight flavours plus Unflavored — more variety than most creatine products. Mixes clean with no grit. Stevia sweetening is not for everyone but there's an unflavored option. Serving is one scoop (no serving-range ambiguity). Available at most major supplement retailers.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Informed Sport certified",
      detail: "Every batch tested by LGC Group for banned substances and label accuracy. The highest third-party standard for sports supplements — accepted under WADA and USADA.",
    },
    {
      type: "green",
      label: "5g creatine — gold standard dose",
      detail: "5g monohydrate daily is backed by over 500 human studies. No guessing on dose — one scoop delivers the established effective amount.",
    },
    {
      type: "green",
      label: "MyHMB® patented HMB form",
      detail: "The calcium salt of HMB used in the majority of published clinical trials. Not generic HMB powder — the specific studied form.",
    },
    {
      type: "green",
      label: "Full dose disclosure — no proprietary blends",
      detail: "All four actives listed with exact amounts. Batch-level COA publicly available. Every label claim is verified before the product ships.",
    },
    {
      type: "red",
      label: "HMB evidence weakest for trained athletes",
      detail: "HMB's strongest evidence is in untrained individuals, older adults, and caloric-deficit scenarios. If you are experienced and training hard in a caloric surplus, the incremental benefit over creatine alone is unclear.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "Vitamin D3 at 500 IU is below optimal for many",
      detail: "12.5mcg (500 IU) is below the 1,000–4,000 IU commonly recommended for deficiency correction. A useful addition but not a replacement for a dedicated D3 supplement if you're actually deficient.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Clinically dosed creatine monohydrate and HMB"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "5g creatine monohydrate is the established clinical dose across hundreds of RCTs. 1.5g HMB matches the dose used in the Wilson et al. (2014) study that found significant lean mass and strength gains. Both doses are genuinely clinical.",
    },
    {
      claim: '"Increased lean muscle mass and strength"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine's effect on lean mass and strength is among the most replicated findings in sports nutrition (Rawson & Volek, 2003; Lanhers et al., 2017). HMB adds incremental benefit particularly in muscle protein preservation. The combined claim is supported.",
    },
    {
      claim: '"Reduce muscle breakdown"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "HMB inhibits the ubiquitin-proteasome pathway and reduces markers of muscle protein catabolism (Nissen et al., 1996). This effect is most pronounced during caloric restriction, illness recovery, or high training loads. In well-fed, well-trained individuals it's less impactful. Not inaccurate — just context-dependent.",
    },
    {
      claim: '"Enhanced energy output"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine's mechanism — phosphocreatine replenishment for faster ATP regeneration — directly translates to improved energy output in high-intensity efforts. This is mechanistically accurate and consistently replicated.",
    },
    {
      claim: '"Improved athletic performance"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Broad claim well-supported by creatine literature. Strength, power, sprint performance, and high-rep endurance all show consistent improvement in creatine supplementation studies across athlete populations.",
    },
    {
      claim: '"All-natural, no artificial sweeteners or colours"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Verified by third-party Informed Sport testing. Stevia and natural flavors confirmed. No synthetic colorants. Claim is accurate and independently verifiable.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.67,
    primaryActiveGrams: 6.5,
    pricePerGramActive: 0.26,
    categoryAvgPricePerGram: 0.06,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ── Schemas ────────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/transparent-labs-creatine-hmb#review",
  name: "Transparent Labs Creatine HMB — Fitlabreviews FSP Review",
  reviewBody:
    "Transparent Labs Creatine HMB combines 5g creatine monohydrate with 1.5g MyHMB® and Vitamin D3, fully disclosed and Informed Sport certified. The creatine is gold-standard dosed. HMB adds real benefit for people in caloric deficit or returning from injury — less so for trained athletes in surplus. The Informed Sport certification alone puts this above most of the market. Premium priced but justified if you need the combination.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  itemReviewed: {
    "@type": "Product",
    name: "Transparent Labs Creatine HMB",
    brand: { "@type": "Brand", name: "Transparent Labs" },
    category: "Creatine Supplement",
    description: "5g creatine monohydrate + 1.5g MyHMB® + Vitamin D3 + BioPerine. Informed Sport certified. Available in 8 flavours plus Unflavored.",
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/3Qba8ZR",
    },
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
      name: "What is HMB and does it actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMB (β-Hydroxy β-Methylbutyrate) is a metabolite of leucine — the most anabolic branched-chain amino acid. It works by inhibiting the ubiquitin-proteasome proteolytic pathway, which is the primary mechanism for muscle protein breakdown. The evidence: a 2014 Wilson et al. study found significant gains in lean mass and strength. HMB is most effective in untrained individuals, older adults, people in caloric deficit, or those returning from inactivity. For experienced, well-fed athletes in a consistent training block, the incremental benefit over creatine alone is smaller but not zero.",
      },
    },
    {
      "@type": "Question",
      name: "Is Transparent Labs Creatine HMB Informed Sport certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Transparent Labs Creatine HMB carries Informed Sport certification from LGC Group, meaning every production batch is independently tested for banned substances and label accuracy before shipping. This is the highest third-party verification standard available for sports supplements and is accepted under WADA and USADA guidelines — relevant for competitive and drug-tested athletes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to do a loading phase with Creatine HMB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Loading (20g/day for 5–7 days) saturates muscle creatine stores faster but produces the same endpoint as maintenance dosing (5g/day) after 3–4 weeks. Transparent Labs does not recommend loading. At 5g daily with consistent use, you reach full phosphocreatine saturation in approximately 3–4 weeks without the water retention spike that often accompanies loading.",
      },
    },
    {
      "@type": "Question",
      name: "What does BioPerine do in this formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BioPerine is a black pepper extract standardised to 95% piperine. Piperine inhibits intestinal P-glycoprotein and CYP3A4, which are drug-metabolising enzymes that can reduce absorption of certain nutrients. The 5mg dose is the standard used in most studies examining absorption enhancement. It's a legitimate synergist for creatine and HMB uptake — not a filler.",
      },
    },
    {
      "@type": "Question",
      name: "Who benefits most from HMB alongside creatine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The clearest beneficiaries: (1) People returning to training after a break or injury — HMB reduces muscle atrophy during detraining and accelerates regain. (2) Older adults (50+) — HMB reduces age-related sarcopenia independently of training. (3) People in a caloric deficit — HMB is muscle-sparing during fat-loss phases, helping preserve lean mass while creatine maintains training performance. For young, healthy athletes in a caloric surplus who train consistently, the benefit over plain creatine is smaller.",
      },
    },
    {
      "@type": "Question",
      name: "Does Vitamin D3 in this formula replace a dedicated supplement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not if you're actually deficient. The 500 IU (12.5mcg) in Creatine HMB is a useful addition to a complete diet but falls below the 1,000–4,000 IU recommended for deficiency correction. If you're deficient in Vitamin D (common in people with limited sun exposure), you'll need a separate D3 supplement at a higher dose. Think of the D3 here as a supplement to your diet, not a full replacement.",
      },
    },
    {
      "@type": "Question",
      name: "How does this compare to plain creatine monohydrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain creatine monohydrate at 5g/day costs $0.15–0.35/serving and is the most research-backed form. Creatine HMB costs $1.67/serving and adds HMB and Vitamin D3. If you only want creatine, plain monohydrate from a quality source is the better value. If you have a specific reason to want HMB (caloric deficit, injury recovery, age-related muscle preservation), the combination here at the Informed Sport certified quality level is hard to beat.",
      },
    },
    {
      "@type": "Question",
      name: "Is Transparent Labs Creatine HMB worth the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At $1.67/serving it depends entirely on your situation. If you want just creatine: no. If you want creatine + HMB + Informed Sport certification and don't want to stack separate products: yes. Buying Informed Sport certified creatine monohydrate separately (~$0.60/serving) and HMB separately (~$0.60/serving) would cost about $1.20/serving — not far off, and without the BioPerine and D3. The convenience case is reasonable at the $0.47 premium.",
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
    verdict: "100 servings of pure 5g micronized creatine at $0.35/serving. The value benchmark.",
    publishedAt: "2026-05-30",
    figNumber: "58",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Best budget creatine — pure, clean, priced right per gram.",
    publishedAt: "2026-03-08",
    figNumber: "02",
  },
];

export default function TLCreatineHMBReview() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>TL Creatine HMB</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A1E2E 0%, #252B40 50%, #1A1E2E 100%)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(58,95,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,95,139,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-056</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A5F8B", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Transparent Labs
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3A5F8B", fontSize: "0.85em" }}>Creatine HMB</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Creatine monohydrate stacked with MyHMB®, Vitamin D3, and BioPerine. Informed Sport certified, every dose disclosed. The strongest case for premium creatine is whether you actually need HMB — here&apos;s the honest answer.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3Qba8ZR" target="_blank" rel="nofollow noopener noreferrer"
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
                  <Image src="/products/tl-creatine-hmb.webp" alt="Transparent Labs Creatine HMB" fill
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
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>REV-2026-056</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Creatine · Informed Sport</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
          </div>
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",    value: "Transparent Labs"         },
            { label: "Category", value: "Creatine"                 },
            { label: "Serving",  value: "1 scoop / day"            },
            { label: "Price",    value: "$49.99 / 30 servings"     },
            { label: "Per Serve", value: "$1.67"                   },
            { label: "Published", value: "May 30, 2026"            },
          ]} />
        </div>

        {/* Author box */}
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

        {/* Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
              Affiliate disclosure: Amazon links earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#3A5F8B", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main layout */}
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
                    The creatine is right. The HMB is the right form at the right dose. The Informed Sport certification is genuine — every batch tested before shipping. What you need to decide is whether HMB is actually relevant to your situation. For most people training hard in a caloric surplus, plain creatine monohydrate at a fraction of the price does the same job on strength and lean mass. For people in a cut, returning from a break, or over 50, the HMB here earns its premium. The Informed Sport cert alone is worth the price over uncertified competitors if you compete in drug-tested sport.
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
                      <ShieldCheck size={10} /> Informed Sport Certified
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 190 }}>
                      <Image src="/products/tl-creatine-hmb.webp" alt="Transparent Labs Creatine HMB" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(58,95,139,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Transparent Labs</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Creatine HMB</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "5g", label: "Creatine" }, { val: "1.5g", label: "HMB" }].map((s) => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3A5F8B", lineHeight: 1, marginBottom: 3 }}>{s.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$49.99</p>
                      </div>
                      <a href="https://amzn.to/3Qba8ZR" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 02 What Is It */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>What Is Creatine HMB?</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Transparent Labs Creatine HMB is a combination supplement stacking four active ingredients: <Link href="/ingredients/creatine" style={{ color: "#3A5F8B", textDecoration: "none" }}>creatine monohydrate</Link> at 5g, HMB (as MyHMB® calcium β-Hydroxy β-Methylbutyrate Monohydrate) at 1.5g, Vitamin D3 at 12.5mcg, and BioPerine at 5mg. The logic: creatine saturates phosphocreatine stores for more ATP output; HMB reduces muscle protein catabolism; D3 supports muscle protein synthesis and immune function; BioPerine enhances absorption of all three.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Transparent Labs launched in 2015 with a label-transparency mandate — every ingredient dose published upfront, no proprietary blends, batch COA available. Creatine HMB is their creatine flagship and has held Informed Sport certification since 2019. Available in eight flavors (Hawaiian Splash, Watermelon, Blue Raspberry, Black Cherry, Orange, Strawberry Lemonade, Tropical Punch) plus Unflavored. Comes in 30-serving and 60-serving tubs.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The product is sold at Vitamin Shoppe, GNC, and Amazon in addition to the direct site. The Informed Sport cert means it has passed the same testing standard that elite sport governing bodies require.
                </p>
              </section>

              {/* § 03 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-056" />
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%. Red flag deductions applied.
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
                      {[
                        { name: "Creatine Monohydrate",                   amount: "5,000mg",  clinical: "3,000–5,000mg" },
                        { name: "HMB (MyHMB® Ca β-HMB Monohydrate)",      amount: "1,500mg",  clinical: "1,500–3,000mg" },
                        { name: "Vitamin D3 (Cholecalciferol)",            amount: "12.5mcg",  clinical: "25–100mcg"     },
                        { name: "BioPerine® (Black Pepper 95% Piperine)",  amount: "5mg",      clinical: "5–20mg"        },
                        { name: "Calcium (from HMB)",                      amount: "200mg",    clinical: "—"             },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: "#1A1714" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.clinical !== "—" ? (
                              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>{row.clinical}</span>
                            ) : <span style={{ fontSize: 12, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>—</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 10 }}>
                  Other ingredients: Natural flavors, Citric acid, L-Malic acid, Stevia extract · Serving: 1 scoop · Servings: 30
                </p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, marginTop: 14 }}>
                  D3 at 500 IU is below the 2,000–4,000 IU used in deficiency correction studies but is a net positive addition — no sports nutrition product at this price point routinely includes D3. Calcium at 200mg comes from the HMB salt, not added separately.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                {([
                  { name: "Creatine Monohydrate — 5g", link: "/ingredients/creatine", evidence: "strong" as EvidenceLevel, verdict: "Gold standard", body: "5g monohydrate is the dose used across the majority of 500+ human creatine studies. Replenishes phosphocreatine stores in skeletal muscle, enabling more rapid ATP regeneration during maximal efforts. The output: more reps before failure, faster recovery between sets, measurable lean mass accumulation over months. No other creatine form has equivalent direct evidence." },
                  { name: "HMB (MyHMB® Ca β-HMB) — 1,500mg", link: null, evidence: "moderate" as EvidenceLevel, verdict: "Evidence is population-dependent", body: "HMB is a metabolite of leucine produced in small amounts during normal protein metabolism. MyHMB® is the calcium salt used in clinical trials — not generic HMB free acid. At 1.5g, this matches the dose in Wilson et al. (2014), which found 1.5g/day produced significant lean mass and strength gains over 12 weeks. The key caveat: the strongest effects appeared in untrained subjects and those under high catabolism (caloric deficit, illness, detraining). For trained athletes in caloric surplus, the incremental benefit over creatine alone shrinks — Rowlands & Thomson (2009) found equivocal results in trained subjects." },
                  { name: "Vitamin D3 (Cholecalciferol) — 12.5mcg (500 IU)", link: null, evidence: "moderate" as EvidenceLevel, verdict: "Useful but modest dose", body: "Vitamin D3 receptors are found in muscle, and deficiency correlates with impaired muscle protein synthesis and reduced strength (Ceglia, 2009). At 500 IU this addition is useful as a dietary supplement to the baseline but is not a therapeutic dose for deficiency (which typically requires 1,000–4,000 IU depending on baseline levels). A net positive inclusion — no significant downside at this dose." },
                  { name: "BioPerine® — 5mg", link: null, evidence: "moderate" as EvidenceLevel, verdict: "Functional absorption enhancer", body: "95% piperine extract from black pepper. Inhibits intestinal P-glycoprotein and CYP3A4 metabolic enzymes, which reduces first-pass degradation of some nutrients and increases bioavailability. The 5mg dose matches the standard used in studies. Not a spectacle ingredient — a genuine bioavailability enhancer for the active ingredients it travels with." },
                ] as { name: string; link: string | null; evidence: EvidenceLevel; verdict: string; body: string }[]).map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
                        {ing.link ? <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link> : ing.name}
                      </p>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <EvidenceBadge level={ing.evidence} showIcon={false} />
                        <span style={{ padding: "3px 9px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{ing.verdict}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 07 Lab Data */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Testing &amp; Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Informed Sport Certified",  status: "pass"    as const },
                    { label: "GMP / FDA-Registered Mfg", status: "pass"    as const },
                    { label: "Batch COA Published",       status: "pass"    as const },
                    { label: "Banned Substance Tested",   status: "pass"    as const },
                    { label: "NSF Certified for Sport",   status: "partial" as const },
                    { label: "USP Verified",              status: "fail"    as const },
                  ].map((cert) => {
                    const s = { pass: { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)", border: "rgba(26,107,58,0.2)", label: "Confirmed", color: "#1A6B3A" }, partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)", border: "rgba(146,98,10,0.2)", label: "Not held", color: "#92620A" }, fail: { dot: "#9B2020", bg: "rgba(155,32,32,0.06)", border: "rgba(155,32,32,0.18)", label: "Not held", color: "#9B2020" } }[cert.status];
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
                  Informed Sport certification is the most rigorous independent standard available for sports supplements — accepted by World Athletics, UK Anti-Doping, and used as the baseline for athlete-safe supplementation. It covers both label accuracy and banned substance testing. NSF Certified for Sport is a parallel standard (not higher, not lower — different certifying body). Transparent Labs holds Informed Sport, not NSF. For most users, Informed Sport alone is more than sufficient.
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
                    { label: "Dose",          value: "1 scoop (approx. 13–15g with flavoring)"  },
                    { label: "Timing",        value: "Any time — with or without food"           },
                    { label: "Rest days",     value: "Yes — take every day for saturation"       },
                    { label: "Loading",       value: "Not required — 3–4 week saturation"        },
                    { label: "Mix with",      value: "Water (8–12 oz). Avoids dairy"             },
                    { label: "HMB timing",    value: "Split 0.75g AM + 0.75g PM for best effect" },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.8 }}>
                  One practical note on HMB timing: research suggests HMB is more effective when split into two doses (0.75g twice daily) rather than taken all at once. Since this product delivers the full 1.5g in a single scoop, splitting between two half-scoops morning and evening would be technically optimal — though many users take the full scoop at once with good results.
                </p>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Price/serve", "Creatine", "HMB", "Cert", "D3 + BioPerine"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", textAlign: "left", borderBottom: "1px solid #3C3530" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "TL Creatine HMB",        price: "$1.67", creatine: "5g mono",  hmb: "1.5g MyHMB®", cert: "Informed Sport", extras: "Yes" },
                        { product: "Thorne Creatine",         price: "$0.60", creatine: "5g Creapure", hmb: "None",     cert: "NSF Certified",  extras: "No"  },
                        { product: "Gorilla Mind Mono",       price: "$0.35", creatine: "5g micro", hmb: "None",        cert: "HPLC tested",    extras: "No"  },
                        { product: "NOW Creatine Mono",       price: "$0.15", creatine: "5g mono",  hmb: "None",        cert: "GMP only",       extras: "No"  },
                        { product: "BulkSupplements HMB",     price: "$0.60", creatine: "None",     hmb: "1g free acid", cert: "ISO/cGMP",      extras: "No"  },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#3A5F8B" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#3C3530", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.creatine}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.hmb}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.extras}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  For pure creatine with a certification, Thorne Creapure (NSF) at $0.60/serving is the benchmark. TL Creatine HMB&apos;s premium over Thorne is $1.07/serving — for HMB, D3, BioPerine, and a different certifying body (Informed Sport vs NSF). Prices verified May 2026.
                </p>

                {/* Competitor product cards */}
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>Shop Competitors</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {([
                      { name: "Thorne Creatine Creapure", cert: "NSF Certified", price: "$0.60/serve", image: "/products/thorne-creatine-creapure.webp", buyUrl: "https://www.amazon.com/s?k=thorne+creatine+creapure", reviewSlug: null },
                      { name: "Gorilla Mind Micronized",  cert: "HPLC Tested",   price: "$0.35/serve", image: "/products/GorillaMindreatineMonohydrateMicronizedPowder.webp", buyUrl: "https://amzn.to/3PAiUk1", reviewSlug: "gorilla-mind-creatine-monohydrate" },
                      { name: "Bulk Supplements Creatine",cert: "cGMP",          price: "$0.12/serve", image: "/products/bulk-supplements-creatine.webp", buyUrl: "https://www.amazon.com/s?k=bulksupplements+creatine+monohydrate", reviewSlug: null },
                      { name: "ON Micronized Creatine",   cert: "GMP Certified", price: "$0.20/serve", image: "/products/on-micronized-creatine-monohydrate-powder.webp", buyUrl: "https://www.amazon.com/s?k=optimum+nutrition+micronized+creatine", reviewSlug: null },
                    ] as { name: string; cert: string; price: string; image: string; buyUrl: string; reviewSlug: string | null }[]).map((comp) => (
                      <div key={comp.name} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                        <div style={{ height: 3, backgroundColor: "#3A5F8B" }} />
                        <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 52, height: 66, flexShrink: 0, backgroundColor: "#EDE8DF", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
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
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>If you want just creatine at the best value, see our <Link href="/reviews/gorilla-mind-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>Gorilla Mind Micronized review</Link>.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="Creatine HMB" brand="Transparent Labs" category="Creatine" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A"
                    tags={["Informed Sport", "HMB 1.5g", "Vitamin D3"]} buyUrl="https://amzn.to/3Qba8ZR" buyLabel="Buy on Amazon"
                    reviewSlug="transparent-labs-creatine-hmb" image="tl-creatine-hmb.webp" bgFrom="#1A1E2E" bgTo="#11131E" accent="#3A5F8B" featured={true} />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Pros &amp; Cons</h2>
                <ProsCons
                  pros={[
                    "Informed Sport certified — every batch tested for banned substances and label accuracy",
                    "5g creatine monohydrate — the correct clinical dose, no debate",
                    "MyHMB® is the patented calcium form used in actual clinical trials — not generic HMB",
                    "Fully disclosed — every active individually labelled with precise amounts",
                    "BioPerine and Vitamin D3 are practical additions, not marketing ingredients",
                    "8 flavours plus Unflavored — the broadest creatine flavour range reviewed",
                    "No artificial sweeteners, colours, or preservatives",
                  ]}
                  cons={[
                    "At $1.67/serving, costs 5–10x more than plain creatine monohydrate",
                    "HMB benefit is smaller for trained athletes in caloric surplus — the most common buyer profile",
                    "Vitamin D3 at 500 IU does not replace a dedicated D3 supplement for deficiency correction",
                    "30 servings per tub means frequent reordering; 60-serving option available at higher upfront cost",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Safety &amp; Side Effects</h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Both creatine monohydrate and HMB have well-established safety records. The ISSN (2017) confirmed 3–5g daily creatine is safe for long-term use in healthy adults. HMB at 1.5–3g/day showed no adverse effects in studies up to 12 weeks (Wilson et al., 2014). BioPerine at 5mg is considered safe across food and supplement applications.
                </p>
                {[
                  { heading: "Common and expected", points: ["Mild intramuscular water retention in the first 1–2 weeks — water into muscle cells, not subcutaneous bloating", "Slight scale weight increase during saturation — entirely from muscle water uptake"] },
                  { heading: "Who should consult a physician", points: ["People with kidney or liver conditions — creatine metabolism produces creatinine; cleared for healthy individuals but consult if any renal impairment", "Anyone on anticoagulants — BioPerine (piperine) can theoretically interact with warfarin metabolism", "Pregnant or breastfeeding women — creatine is under-studied in pregnancy; consult first"] },
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine + HMB combined" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "30 servings (one-time)",   price: "$49.99",  perServe: "$1.67/serving" },
                    { option: "60 servings (one-time)",   price: "$89.99",  perServe: "$1.50/serving" },
                    { option: "Subscribe & Save (10%)",   price: "$44.99",  perServe: "$1.50/serving" },
                    { option: "Amazon — 30 servings",     price: "$49.99",  perServe: "Same as direct" },
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
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>$49.99 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span></p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Prime shipping · Fast delivery · Easy returns. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/3Qba8ZR" target="_blank" rel="nofollow noopener noreferrer"
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
                        <span className="faq-icon-tl" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3A5F8B" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-tl svg { display: none; }
                  details[open] .faq-icon-tl::after { content: ''; display: block; width: 10px; height: 2px; background: #3A5F8B; border-radius: 1px; }
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
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>FSP · 8/10 · Transparent Labs Creatine HMB</p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        If you need Informed Sport certification — for competitive sport, drug testing, or because you genuinely require that level of verification — this is the creatine to buy. Full stop. The formula is honest, the doses are right, and the cert is real.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        The HMB case requires more nuance. If you are in a caloric cut, over 50, returning from a training break, or recovering from an injury, the 1.5g MyHMB® here adds genuine muscle-preservation value on top of creatine. If you are a healthy 25-year-old training hard in a caloric surplus, plain creatine monohydrate at $0.35/serving covers your needs. The formula does not lie to you about this — it is not a universal upgrade, it is a context-specific one.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85 }}>
                        For pure value: <Link href="/reviews/gorilla-mind-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>Gorilla Mind Micronized</Link> at $0.35/serving. For certified creatine only: Thorne Creapure at $0.60/serving. For creatine + HMB + Informed Sport: this.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a href="https://amzn.to/3Qba8ZR" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}>
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>$49.99 · 30 servings</p>
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
                      { text: "Wilson JM et al. (2014). The effects of 12 weeks of beta-hydroxy-beta-methylbutyrate free acid supplementation on muscle mass, strength, and power in resistance-trained individuals. Eur J Appl Physiol. 114(6):1217–27.", url: "https://doi.org/10.1007/s00421-014-2854-5" },
                      { text: "Rowlands DS, Thomson JS. (2009). Effects of β-hydroxy-β-methylbutyrate supplementation during resistance training on strength, body composition, and muscle damage in trained and untrained young men. J Strength Cond Res. 23(3):836–46.", url: "https://doi.org/10.1519/JSC.0b013e3181a00d48" },
                      { text: "Nissen S et al. (1996). Effect of leucine metabolite beta-hydroxy-beta-methylbutyrate on muscle metabolism during resistance-exercise training. J Appl Physiol. 81(5):2095–104.", url: "https://doi.org/10.1152/jappl.1996.81.5.2095" },
                      { text: "Rawson ES, Volek JS. (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. J Strength Cond Res. 17(4):822–31.", url: "https://doi.org/10.1519/1533-4287(2003)017<0822:EOCSART>2.0.CO;2" },
                      { text: "Lanhers C et al. (2017). Creatine supplementation and upper limb strength performance: A systematic review and meta-analysis. Sports Med. 47(1):163–73.", url: "https://doi.org/10.1007/s40279-016-0571-4" },
                      { text: "Ceglia L. (2009). Vitamin D and its role in skeletal muscle. Curr Opin Clin Nutr Metab Care. 12(6):628–33.", url: "https://doi.org/10.1097/MCO.0b013e3283312c05" },
                      { text: "Kreider RB et al. (2017). ISSN position stand: Safety and efficacy of creatine supplementation. J Int Soc Sports Nutr. 14:18.", url: "https://doi.org/10.1186/s12970-017-0173-z" },
                      { text: "Shoba G et al. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. Planta Med. 64(4):353–6.", url: "https://doi.org/10.1055/s-2006-957450" },
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

        {/* Related Reviews */}
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
