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
  title: "Arrae Tone Gummies Review (2026) — Creatine Worth $50?",
  description:
    "Arrae Tone Gummies: 5g creatine monohydrate + 400mg ginger + Slimbiotics postbiotic at $1.67/serving. Full ingredient breakdown, claim audit, vs powder alternatives. FSP 7/10.",
  alternates: { canonical: "/reviews/arrae-tone-gummies" },
  openGraph: {
    title: "Arrae Tone Gummies Review (2026) — Creatine Worth $50?",
    description:
      "5g creatine monohydrate in gummy form, with ginger to blunt GI discomfort and Slimbiotics postbiotic for body composition. Solid formula, full transparency — but you're paying 5–10x the cost of powder. FSP 7/10.",
    url: "https://fitlabreviews.com/reviews/arrae-tone-gummies",
    type: "article",
  },
};

// ── TOC ────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"          },
  { id: "what-is",          label: "What Is Arrae Tone?"    },
  { id: "score-breakdown",  label: "Score Breakdown"         },
  { id: "flags",            label: "Red & Green Flags"       },
  { id: "supplement-facts", label: "Supplement Facts"        },
  { id: "ingredients",      label: "Ingredient Breakdown"    },
  { id: "lab-data",         label: "Testing & Verification"  },
  { id: "claim-audit",      label: "Claim Audit"             },
  { id: "how-to-take",      label: "How to Take It"          },
  { id: "comparison",       label: "vs. Competitors"         },
  { id: "products",         label: "Products at a Glance"    },
  { id: "pros-cons",        label: "Pros & Cons"             },
  { id: "safety",           label: "Safety & Side Effects"   },
  { id: "value",            label: "Price & Value"           },
  { id: "where-to-buy",     label: "Where to Buy"            },
  { id: "faq",              label: "FAQ"                     },
  { id: "final",            label: "Final Verdict"           },
];

// ── Scoring Rubric ─────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.5,
      notes:
        "5g creatine monohydrate — the gold-standard dose, fully transparent, with decades of human RCT data behind it. Ginger at 400mg is a smart co-ingredient: creatine can cause GI discomfort in some users, and ginger at this dose has plausible anti-nausea and motility benefit. Slimbiotics® L. fermentum K8 postbiotic at 34mg is the most speculative inclusion — a 2026 NutraIngredients-reported study showed body fat, visceral adipose, and waist circumference reductions vs placebo, but this was a single manufacturer-adjacent study and the dose in Arrae (34mg) is not clearly the dose used in evidence. Gummy matrix with 1g sugar per gummy actively helps creatine uptake via insulin-mediated muscle transport. Formula is clean and honestly labelled.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "All three actives are individually disclosed with exact amounts — no proprietary blends. The serving size ('3–4 gummies') introduces a 33% dose ambiguity: 3 gummies delivers 5g creatine, but the label does not clearly tell you whether you need 3 or 4 for the full dose. Other ingredients are standard gummy excipients. Full marks minus the serving range ambiguity.",
    },
    {
      pillar: "verification",
      score: 5.0,
      notes:
        "Manufactured in a cGMP-certified facility. Vegan certified (pectin gummies, not gelatin). No NSF, USP, Informed Sport, or BSCG product-level certification as of May 2026. Creatine monohydrate is one of the most well-characterised ingredients in sports nutrition — adulteration risk is lower than novel compounds — but the absence of third-party verification is still a gap, particularly for the Slimbiotics ingredient.",
    },
    {
      pillar: "value",
      score: 3.5,
      notes:
        "$49.99 for 90 gummies at 3/serving = 30 servings = $1.67 per dose. Pure creatine monohydrate powder from a reputable source: $0.15–0.25/serving. Thorne Creapure (the benchmark certified powder): ~$0.55–0.65/serving. You are paying a 3–10x premium for the gummy format, ginger, and Slimbiotics. Convenience is a real value — not everyone will mix a daily powder — but the price is high for what the formula delivers.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "This is where Tone genuinely wins. No mixing, no clumping, no chalky aftertaste — a consistent complaint with creatine powders. Three flavours (Mixed Berry, Sour Watermelon, Sour Green Apple) with positive user reception. Travel-ready. No measuring. The barrier to daily consistency is much lower than powder, which matters for creatine since saturation effects require continuous daily use. The 1g sugar per gummy (3–4g total) is negligible for most users.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "5g creatine — gold-standard dose",
      detail: "The 3–5g daily range is supported by over 500 human studies. Arrae delivers the upper end of that range (5g) in a format that requires zero preparation.",
    },
    {
      type: "green",
      label: "All three active doses disclosed",
      detail: "Creatine 5g, ginger 400mg, Slimbiotics 34mg — every active is individually labelled. No proprietary blends, no hidden amounts.",
    },
    {
      type: "green",
      label: "Ginger added for GI comfort",
      detail: "Creatine can cause bloating and GI discomfort in some users. Ginger at 400mg is in the evidence-supported range for nausea and gut motility benefit — a smart pairing rather than a token inclusion.",
    },
    {
      type: "green",
      label: "Vegan pectin gummies",
      detail: "Uses pectin (plant-derived) instead of gelatin. Suitable for vegans. Non-GMO, no artificial colours or sweeteners.",
    },
    {
      type: "red",
      label: "No third-party certification",
      detail: "No NSF, USP, Informed Sport, or BSCG certification. Creatine monohydrate has low adulteration risk, but the Slimbiotics ingredient adds a point of uncertainty without independent verification.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "5–10x the cost of equivalent powder",
      detail: "At $1.67/serving vs $0.15–0.50 for powder creatine, the premium is significant. Convenience has value — but not everyone needs to pay this much for 5g creatine daily.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Serving size ambiguity",
      detail: "'3–4 gummies' as a serving range means your daily creatine intake varies from 5g (at 3 gummies) without a clear protocol for when to take 3 vs 4. The label defaults to 3 gummies for the supplement facts panel.",
      deduction: 0.1,
    },
    {
      type: "red",
      label: "Slimbiotics dose not independently validated",
      detail: "34mg of Slimbiotics postbiotic is a proprietary dose. The supporting study did not clearly confirm this as the effective amount. Results are promising but come from limited, manufacturer-adjacent research.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Support Lean Muscle, Strength & Recovery"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "Creatine monohydrate at 5g daily has been shown across dozens of RCTs to increase lean mass, upper and lower body strength, and accelerate post-exercise recovery. Rawson & Volek (2003, Journal of Strength and Conditioning Research) confirmed strength gains; Lanhers et al. (2017, Sports Medicine) confirmed upper limb strength. The claim is accurate and backed by the best evidence base in sports nutrition.",
    },
    {
      claim: '"Hormone-Friendly Muscle Toning Supplement"',
      verdict: "context-dependent",
      evidence: "limited",
      notes:
        "'Hormone-friendly' is undefined marketing language. There is no evidence creatine disrupts sex hormones in women. Smith-Ryan et al. (2021, Nutrients) found no adverse hormonal effects in women supplementing creatine. The claim isn't false — but it's designed to reassure, not inform. It has no active mechanism tied to hormone interaction.",
    },
    {
      claim: '"Specifically formulated for women"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Creatine's mechanism — replenishing phosphocreatine, enabling more ATP synthesis — is identical in men and women. What is true: women have approximately 70–80% lower resting intramuscular creatine stores than men (Greenhaff et al., 1994), giving them potentially greater relative response. The 'for women' positioning is mostly lifestyle marketing. The formula has nothing gender-specific in it.",
    },
    {
      claim: '"Toned Body" (brand positioning)',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Creatine supplementation + resistance training does improve body composition — more lean mass, relatively less fat — which contributes to a 'toned' appearance over time. Creatine alone, without training, does not tone. Arrae's own website notes this context. The claim is directionally accurate if paired with exercise.",
    },
    {
      claim: '"Slimbiotics supports fat loss and balances body composition"',
      verdict: "context-dependent",
      evidence: "limited",
      notes:
        "A 2026 study (reported by NutraIngredients, April 2026) found Slimbiotics L. fermentum K8 reduced body fat mass, visceral adipose tissue, and waist circumference vs placebo. This is promising but derives from a single study, and the dose used in Arrae Tone (34mg) is not clearly confirmed as the dose used in evidence. The body composition effect is real in principle; the dose-response at 34mg is unconfirmed.",
    },
    {
      claim: '"No bloating or GI side effects"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Ginger at 400mg has plausible anti-nausea and gut-motility benefit (Nikkhah Bodagh et al., 2019; Food Science & Nutrition). The sugar matrix in the gummy may also improve creatine transport compared to dry powder on an empty stomach. GI side effects from creatine are uncommon at 5g/day but real in a minority of users. The ginger inclusion is a legitimate mitigation strategy.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.67,
    primaryActiveGrams: 5.0,
    pricePerGramActive: 0.33,
    categoryAvgPricePerGram: 0.06,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

// ── Schemas ────────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/arrae-tone-gummies#review",
  name: "Arrae Tone Gummies — Fitlabreviews FSP Review",
  reviewBody:
    "Arrae Tone Gummies deliver 5g creatine monohydrate in a convenient gummy format with ginger for GI comfort and Slimbiotics postbiotic for body composition support. The creatine dosing is correct, all actives are disclosed, and the format genuinely reduces the daily compliance friction that powders create. The significant drawbacks are the premium price (5–10x powder creatine) and the absence of third-party certification. For anyone who won't reliably take powder creatine, Tone is a defensible spend.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  itemReviewed: {
    "@type": "Product",
    name: "Arrae Tone Gummies",
    brand: { "@type": "Brand", name: "Arrae" },
    category: "Creatine Supplement",
    description:
      "Creatine monohydrate 5g gummies with ginger and Slimbiotics postbiotic, marketed for lean muscle, strength, and body composition in women.",
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4u9uAbn",
    },
  },
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Arrae Tone actually effective for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — creatine monohydrate is effective, and women respond to it just as men do. The mechanism (phosphocreatine replenishment, increased ATP availability) is the same regardless of sex. What makes creatine particularly relevant for women: research shows women have roughly 70–80% lower resting intramuscular creatine stores than men, which means the relative gain from supplementation may be greater. The 'for women' branding is largely positioning, but the underlying supplement is genuinely useful.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from Arrae Tone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At 5g daily without a loading phase, muscle creatine saturation typically takes 3–4 weeks of consistent use. Performance improvements (strength, rep endurance, recovery speed) are usually noticeable within that window if you're training. Body composition changes — more lean mass, improved muscle definition — take longer: 8–12 weeks of combined creatine use and resistance training. Arrae does not include a loading phase protocol, which is reasonable; the slower saturation produces the same end result.",
      },
    },
    {
      "@type": "Question",
      name: "Will Arrae Tone cause water retention or bloating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine causes intramuscular water retention — water drawn into muscle cells, which is why muscles look fuller and feel harder. This is not the same as subcutaneous bloating. Some users, particularly those loading creatine rapidly, experience GI discomfort and visible water retention. Arrae includes ginger (400mg) specifically to mitigate GI side effects, and the 5g maintenance dose without a loading phase minimises the rapid intramuscular water shift. If you're sensitive to water retention, the first 1–2 weeks may feel slightly different; this typically normalises.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Arrae Tone if I don't work out regularly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but you'll see less benefit. Creatine enhances the energy available for high-intensity effort — it amplifies what you put in. Without resistance training or consistent exercise, the lean mass and strength gains documented in the literature won't manifest. Emerging research suggests creatine has benefits for brain health, bone density, and depression that are partially independent of exercise, but these are secondary to its exercise-dependent effects. If you're sedentary, Arrae Tone is not a good investment at $1.67/serving.",
      },
    },
    {
      "@type": "Question",
      name: "Is 5g creatine in gummy form as effective as powder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evidence suggests yes, with a minor caveat. Creatine monohydrate is absorbed via sodium-dependent transporters in the small intestine, and the 1g sugar per gummy (3–4g total per serving) may actually help by stimulating insulin release, which enhances creatine uptake into muscle cells. This is the same principle behind taking creatine with a carbohydrate meal. The gummy matrix (pectin, tapioca) does not appear to interfere with creatine absorption. No direct head-to-head gummy vs powder bioavailability study exists for this specific product, but the formulation rationale is sound.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Arrae Tone and regular creatine powder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine monohydrate is creatine monohydrate. The active ingredient is identical. The differences: Tone adds ginger (400mg) for GI comfort and Slimbiotics postbiotic (34mg) for body composition, comes in a gummy form that requires no mixing, and costs roughly 5–10x more per serving. If you reliably take powder every day, powder is a better financial choice. If you find powder inconvenient or skippable, the compliance benefit of gummies may outweigh the cost difference.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Tone vegan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Arrae Tone uses pectin (derived from citrus peel) as the gelling agent instead of gelatin. It is certified vegan, non-GMO, and gluten-free. The organic cane sugar, tapioca fiber syrup, and natural colours are all plant-sourced. No animal products are used in the formula.",
      },
    },
    {
      "@type": "Question",
      name: "Should I take Arrae Tone on rest days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is important. Creatine works by maintaining elevated intramuscular creatine stores, not by providing an acute pre-workout boost. Skipping rest days causes those stores to decline gradually, reducing the baseline effect. The International Society of Sports Nutrition recommends consistent daily creatine use (3–5g/day) including rest days. Arrae's 3 gummies per day protocol is designed for daily use, not just training days.",
      },
    },
  ],
};

// ── Related Reviews ────────────────────────────────────────────────────────

const relatedReviews = [
  {
    slug: "arrae-bloat",
    title: "Arrae Bloat Capsules",
    brand: "Arrae",
    category: "Digestive Enzymes",
    rating: 7 as ReviewRating,
    verdict: "Clean formula, ginger underdosed, five of six doses hidden — marketing outpaces the evidence.",
    publishedAt: "2026-05-30",
    figNumber: "54",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Best budget creatine — pure, clean, and priced right per gram.",
    publishedAt: "2026-03-08",
    figNumber: "02",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function ArraeToneReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home",    href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Creatine", href: "/category/creatine" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Arrae Tone Gummies</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A1E2E 0%, #252B40 50%, #1A1E2E 100%)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(58,95,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,95,139,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-055</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A5F8B", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Arrae
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3A5F8B", fontSize: "0.85em" }}>Tone Gummies</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Creatine monohydrate in gummy form, with ginger for GI comfort and Slimbiotics postbiotic for body composition. The dose is right, the formula is transparent — and you&apos;re paying a serious premium for the convenience. Here&apos;s whether it&apos;s worth it.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4u9uAbn" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              {/* Product image — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/tone-gummy.webp" alt="Arrae Tone Gummies bottle" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 8px 40px rgba(58,95,139,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
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
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>REV-2026-055</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Creatine · Women&apos;s Fitness</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
          </div>
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",     value: "Arrae"                       },
            { label: "Category",  value: "Creatine / Women's Fitness"  },
            { label: "Serving",   value: "3–4 gummies / day"           },
            { label: "Price",     value: "$49.99 / 90 gummies"         },
            { label: "Per Serve", value: "~$1.67 (at 3 gummies)"       },
            { label: "Published", value: "May 30, 2026"                },
          ]} />
        </div>

        {/* Author box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #D4C9B8, #3A5F8B)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#F2EBD9", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
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
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
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

        {/* Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* § 01 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Quick Verdict
                </h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>FSP Score · 7/10</p>
                  <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 0 }}>
                    Arrae Tone solves a real problem: most people don&apos;t take creatine consistently because the powder routine gets old. The 5g dose is correct, all three actives are individually disclosed, and the gummy format genuinely removes friction. The issues are the price — you&apos;re paying roughly five to ten times what equivalent powder creatine costs — the absence of third-party certification, and a &quot;for women&quot; positioning that&apos;s largely marketing rather than formulation science. If you&apos;ll reliably take three gummies a day where you wouldn&apos;t reliably mix a powder scoop, the premium may be worth it. If you&apos;re already consistent with powder, there&apos;s no formulation reason to switch.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#1A1714", margin: 0, lineHeight: 1 }}>
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
                      <ShieldCheck size={10} /> Vegan · cGMP Certified
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/arrae-tone-2.webp" alt="Arrae Tone Gummies" fill
                        style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(58,95,139,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Arrae</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Tone Gummies</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[
                        { val: `${editorialScore}/10`, label: "FSP Score"  },
                        { val: "5g",                   label: "Creatine"   },
                        { val: "400mg",                label: "Ginger"     },
                      ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3A5F8B", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 90 gummies</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$49.99</p>
                      </div>
                      <a href="https://amzn.to/4u9uAbn" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 02 What Is Arrae Tone? */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  What Is Arrae Tone?
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Arrae Tone is a <Link href="/category/creatine" style={{ color: "#3A5F8B", textDecoration: "none" }}>creatine monohydrate</Link> supplement in gummy form, positioned specifically at women who want lean muscle and improved body composition without the powder-and-shaker routine. It launched in early 2025, following the brand&apos;s trajectory from their flagship Bloat capsules into broader wellness. The brand founders — Siff Haider and Nish Samantray — built Arrae on the idea that supplements should be something you want to take, not something you have to force yourself through. Tone is the logical extension of that.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 24 }}>
                  Three active ingredients: <Link href="/ingredients/creatine" style={{ color: "#3A5F8B", textDecoration: "none" }}>creatine monohydrate</Link> at 5g (the clinical standard), ginger root extract at 400mg (for GI tolerance), and Slimbiotics® L. fermentum K8 postbiotic at 34mg (a proprietary strain with emerging body composition data). Three flavours: Mixed Berry, Sour Watermelon, Sour Green Apple. Available in 60 and 90 gummy counts.
                </p>

                {/* Image gallery — 4 additional product shots */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 16 }}>
                  {["/products/arrae-tone-3.webp", "/products/arrae-tone-4.webp", "/products/arrae-tone-5.webp"].map((src, i) => (
                    <div key={i} style={{ position: "relative", height: 180, borderRadius: 10, overflow: "hidden", backgroundColor: "#1A1E2E", border: "1px solid #D4C9B8" }}>
                      <Image src={src} alt={`Arrae Tone Gummies — view ${i + 3}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>Arrae Tone — Mixed Berry, Sour Watermelon, Sour Green Apple</p>
              </section>

              {/* § 03 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Score Breakdown
                </h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-055" />
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) is weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%. Red flag deductions applied. Editorial score reflects holistic assessment.
                </p>
              </section>

              {/* § 04 Flags */}
              <section id="flags" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Red &amp; Green Flags
                </h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 05 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Supplement Facts
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "42%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "28%" }}>Per 3 Gummies</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", width: "30%" }}>Clinical Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Creatine Monohydrate",              amount: "5,000mg (5g)", clinical: "3,000–5,000mg" },
                        { name: "Ginger Root Extract (Zingiber off.)", amount: "400mg",       clinical: "250–1,000mg"  },
                        { name: "Slimbiotics® Postbiotic",           amount: "34mg",         clinical: "Emerging"     },
                        { name: "Organic Cane Sugar",                amount: "3g",           clinical: "—"            },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: "#1A1714" }}>{row.amount}</td>
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
                <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 10 }}>
                  Other ingredients: Purified Water, Soluble Tapioca Fiber Syrup, Tapioca Syrup, Pectin, Natural Flavors, Citric Acid, Sodium Citrate, Coconut Oil, Natural Colors · Serving: 3 gummies · Servings per container: 30
                </p>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.8, marginTop: 16 }}>
                  One detail worth noting: the 1g of organic cane sugar per gummy (3g per serving) is functional, not decorative. Creatine uptake into muscle is enhanced by insulin, and a small carbohydrate co-ingestion triggers a modest insulin response that improves creatine transport. This is a legitimate reason to include sugar — not a compromise.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Ingredient Breakdown
                </h2>

                {([
                  {
                    name: "Creatine Monohydrate — 5g",
                    link: "/ingredients/creatine",
                    evidence: "strong" as EvidenceLevel,
                    verdict: "Correctly dosed",
                    body: "The most researched ergogenic supplement in existence, with over 500 human RCTs spanning four decades. At 5g daily, creatine replenishes phosphocreatine stores in skeletal muscle, enabling more ATP regeneration during high-intensity efforts. The practical outputs: more reps before failure, faster recovery between sets, and — over months of consistent use with training — measurable increases in lean mass. Rawson & Volek (2003) confirmed strength gains across populations; Antonio et al. (2021) reviewed misconceptions and confirmed that gender, age, and training status all modulate response, with women and older adults often showing proportionally strong results. 5g is the clinical sweet spot: effective without requiring a loading phase.",
                  },
                  {
                    name: "Ginger Root Extract — 400mg",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Smart co-ingredient",
                    body: "Ginger's inclusion here is deliberate. Creatine powder taken on an empty stomach causes nausea and GI discomfort in a meaningful minority of users — one reason many people abandon daily supplementation. At 400mg, ginger's gingerol and shogaol compounds support gastric motility and have established anti-nausea activity. Nikkhah Bodagh et al. (2019, Food Science & Nutrition) confirmed GI benefit across multiple RCTs at doses from 250–2,000mg. The 400mg in Tone is below the upper range for motility benefit but well within the evidence range for nausea suppression. This isn't a filler — it's a sensible answer to creatine's most common adherence problem.",
                  },
                  {
                    name: "Slimbiotics® Postbiotic (L. fermentum K8) — 34mg",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Emerging — watch this space",
                    body: "Slimbiotics is a heat-killed (postbiotic) formulation of three Lactobacillus fermentum strains (K7-Lb1, K8-Lb1, K11-Lb3) isolated from kimere, a traditionally fermented millet porridge. A 2026 study (NutraIngredients, April 2026; NCT05912699) found that the postbiotic group had significant reductions in body fat mass, visceral adipose tissue, waist circumference, and BMI vs placebo. Those results are meaningful — but this is one study, from a manufacturer-adjacent research context, and 34mg is a proprietary dose not clearly confirmed as the dose used in evidence. The ingredient is genuinely interesting. It is not established.",
                  },
                ] as { name: string; link: string | null; evidence: EvidenceLevel; verdict: string; body: string }[]).map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
                        {ing.link ? (
                          <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link>
                        ) : ing.name}
                      </p>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <EvidenceBadge level={ing.evidence} showIcon={false} />
                        <span style={{ padding: "3px 9px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                          {ing.verdict}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{ing.body}</p>
                  </div>
                ))}

                {/* The "for women" note */}
                <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>A note on the "for women" positioning</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Creatine&apos;s mechanism — phosphocreatine replenishment, ATP availability — is identical in men and women. There is nothing in Arrae Tone&apos;s formula that is gender-specific. What is true: women tend to have approximately 70–80% lower resting intramuscular creatine stores than men (Greenhaff et al., 1994), which means the relative response to supplementation may be proportionally greater. Smith-Ryan et al. (2021, Nutrients) specifically reviewed creatine in women and found benefits for strength, lean mass, bone density, and mood — none of which depend on a women&apos;s-specific formulation. Tone&apos;s &quot;hormone-friendly&quot; claim is reassurance marketing for an audience that has historically been discouraged from creatine with myths about bulking. The supplement is legitimate. The gender framing is positioning.
                  </p>
                </div>
              </section>

              {/* § 07 Lab & Verification */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Testing &amp; Verification
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "cGMP Certified Facility",  status: "pass"    as const },
                    { label: "Vegan Certified",           status: "pass"    as const },
                    { label: "Identity / Purity Testing", status: "partial" as const },
                    { label: "Heavy Metal Screening",     status: "partial" as const },
                    { label: "NSF / USP Certified",       status: "fail"    as const },
                    { label: "Informed Sport / BSCG",     status: "fail"    as const },
                  ].map((cert) => {
                    const s = {
                      pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",  border: "rgba(26,107,58,0.2)",  label: "Confirmed",     color: "#1A6B3A" },
                      partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",  border: "rgba(146,98,10,0.2)",  label: "Self-reported", color: "#92620A" },
                      fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",  border: "rgba(155,32,32,0.18)", label: "Not held",      color: "#9B2020" },
                    }[cert.status];
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
                  Arrae manufactures in a cGMP facility and holds vegan certification. Creatine monohydrate is one of the most well-characterised ingredients in sports nutrition — it is difficult to adulterate in ways that would pass basic identity testing. That said, the Slimbiotics postbiotic adds a novel ingredient with no public third-party verification. Informed Sport certification would mean every batch is tested for banned substances and label accuracy. Without it, you are relying on Arrae&apos;s own quality assurance process.
                </p>
              </section>

              {/* § 08 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Claim Audit
                </h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 09 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  How to Take It
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Daily dose",       value: "3–4 gummies per day"                    },
                    { label: "Creatine delivered", value: "5g at 3 gummies"                       },
                    { label: "Timing",           value: "Any time — with or without food"         },
                    { label: "Rest days",        value: "Yes — take every day for saturation"     },
                    { label: "Loading phase",    value: "Not required"                            },
                    { label: "Storage",          value: "Cool, dry place. Do not refrigerate."    },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.8 }}>
                  The most important rule with any creatine supplement — gummy or powder — is consistency. Creatine works by maintaining elevated intramuscular stores over time. Skipping days allows stores to decline. Three gummies daily, every day, builds to saturation in 3–4 weeks. You can take them at any point in the day; the pre- or post-workout timing that Arrae suggests is pragmatically sensible but not mechanistically critical at maintenance doses.
                </p>

                {/* Inline how-to image */}
                <div className="hidden sm:block" style={{ marginTop: 24, position: "relative", height: 220, borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8" }}>
                  <Image src="/products/arrae-tone-4.webp" alt="Arrae Tone Gummies — serving size" fill style={{ objectFit: "cover", objectPosition: "center" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,30,46,0.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", marginBottom: 6 }}>Serving size</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: "#F2EBD9", lineHeight: 1 }}>3 gummies</p>
                    <p style={{ fontSize: 13, color: "rgba(242,235,217,0.6)", marginTop: 6 }}>= 5g creatine monohydrate</p>
                  </div>
                </div>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  vs. Competitors
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 640, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Price/serve", "Creatine dose", "Co-ingredients", "Cert", "Format"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", textAlign: "left", borderBottom: "1px solid #3C3530" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Arrae Tone",             price: "$1.67", dose: "5g monohydrate", extras: "Ginger, Slimbiotics",      cert: "None",            format: "Gummy"          },
                        { product: "Thorne Creatine",        price: "$0.60", dose: "5g Creapure®",   extras: "None",                     cert: "NSF Certified",   format: "Powder"         },
                        { product: "Bulk Supplements Creat.", price: "$0.17", dose: "5g monohydrate", extras: "None",                    cert: "cGMP only",       format: "Powder"         },
                        { product: "Garden of Life Sport",   price: "$0.55", dose: "5g monohydrate", extras: "None",                     cert: "NSF Certified",   format: "Powder"         },
                        { product: "Nutricost Creatine Gum.", price: "$0.90", dose: "5g monohydrate", extras: "None",                    cert: "cGMP only",       format: "Gummy"          },
                        { product: "Gainful Creatine",       price: "$1.33", dose: "5g monohydrate", extras: "Custom flavour",           cert: "None",            format: "Powder"         },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#3A5F8B" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#3C3530", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.dose}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{row.extras}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", whiteSpace: "nowrap" }}>{row.format}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  The honest comparison: if you want the most trusted certified creatine with the least cost, Thorne Creatine (NSF Certified, Creapure) at $0.60/serving is the benchmark. Arrae Tone costs nearly 3x that for convenience + ginger + Slimbiotics. On gummies specifically, Nutricost offers 5g creatine gummies for ~$0.90/serving without the co-ingredients. Prices verified May 2026.
                </p>
              </section>

              {/* § 11 Products at a Glance */}
              <section id="products" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                  Products at a Glance
                </h2>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
                  Arrae Tone reviewed here. If you want a certified creatine alternative, see our <Link href="/reviews/myprotein-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>MyProtein Creatine review</Link>.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard
                    name="Tone Gummies"
                    brand="Arrae"
                    category="Creatine"
                    score={7}
                    priceUSD="$49.99 / 90 gummies"
                    priceINR="N/A"
                    tags={["5g Creatine", "Vegan Gummy", "Ginger"]}
                    buyUrl="https://amzn.to/4u9uAbn"
                    buyLabel="Buy on Amazon"
                    reviewSlug="arrae-tone-gummies"
                    image="arrae-tone-1.webp"
                    bgFrom="#1A1E2E"
                    bgTo="#11131E"
                    accent="#3A5F8B"
                    featured={true}
                  />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Pros &amp; Cons
                </h2>
                <ProsCons
                  pros={[
                    "5g creatine monohydrate — the correct clinical dose, no shortcuts",
                    "All three active ingredients individually disclosed — no proprietary blends",
                    "Ginger at 400mg is a sensible and evidence-grounded GI co-ingredient",
                    "Gummy format removes the daily friction that causes people to abandon powder routines",
                    "Small carbohydrate content (3g sugar/serving) actively supports creatine uptake",
                    "Vegan pectin formula — no gelatin, no artificial sweeteners",
                    "Multiple flavours that users actually enjoy — Mixed Berry, Sour Watermelon, Sour Green Apple",
                  ]}
                  cons={[
                    "At $1.67/serving, costs 3–10x more than equivalent powder creatine",
                    "No NSF, Informed Sport, USP, or BSCG certification",
                    "'3–4 gummies' serving range creates daily dose ambiguity",
                    "Slimbiotics at 34mg — promising ingredient, unconfirmed dose, one manufacturer-adjacent study",
                    "'For women' and 'hormone-friendly' positioning is marketing, not formulation science",
                    "60-gummy count offers only 15–20 servings — easy to miscalculate supply",
                  ]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Safety &amp; Side Effects
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Creatine monohydrate has one of the most extensive safety records of any supplement. The International Society of Sports Nutrition (2017) concluded that 3–5g daily creatine supplementation is safe for long-term use in healthy adults. No credible evidence links creatine to kidney damage, hair loss, or hormone disruption in healthy individuals — these are persistent myths.
                </p>
                {[
                  {
                    heading: "Common side effects (dose-dependent)",
                    points: [
                      "Intramuscular water retention — muscles hold more water during the saturation phase; this is normal and typically stabilises after 1–2 weeks",
                      "Minor GI discomfort — less likely with 5g maintenance dose vs loading; ginger in Tone specifically addresses this",
                      "Scale weight increase of 1–2kg in the first week — water in muscle, not fat",
                    ],
                  },
                  {
                    heading: "Who should consult a physician first",
                    points: [
                      "People with existing kidney or liver conditions — creatine metabolism produces creatinine, which elevated kidney biomarkers; cleared for healthy kidneys",
                      "Anyone on medications affecting fluid retention or renal function",
                      "Pregnant or breastfeeding women — no evidence of harm, but insufficient data; discuss with your doctor",
                    ],
                  },
                  {
                    heading: "Generally safe for",
                    points: [
                      "Healthy adults at any age — evidence supports safety from teens through elderly",
                      "Daily long-term use — no evidence of tolerance, dependency, or decline in effectiveness",
                      "People on caffeine — the historical 'creatine + caffeine blunts effects' concern was not replicated in later studies",
                    ],
                  },
                ].map((group) => (
                  <div key={group.heading} style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>{group.heading}</p>
                    <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                      {group.points.map((pt) => (
                        <li key={pt} style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* § 14 Price & Value */}
              <section id="value" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Price &amp; Value
                </h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine monohydrate" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "90 gummies (one-time)",   price: "$49.99",  perServe: "$1.67 at 3 gummies" },
                    { option: "60 gummies (one-time)",   price: "$34.99",  perServe: "$1.75 at 3 gummies" },
                    { option: "Subscription (10% off)",  price: "$44.99",  perServe: "$1.50 per serve"    },
                    { option: "Amazon 90-count",          price: "$49.99",  perServe: "Same as direct"     },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.price}</p>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{row.perServe}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginTop: 16 }}>
                  The value case for Tone is a compliance argument, not a formula argument. If the gummy format genuinely means you&apos;ll take creatine every day where you previously didn&apos;t, you&apos;re capturing the full benefit of the supplement. If you&apos;re already disciplined with powder, there is no formulation reason to pay the premium.
                </p>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Where to Buy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { retailer: "Amazon",           url: "https://amzn.to/4u9uAbn",         note: "90-count available, Prime shipping, competitive pricing",  recommended: true  },
                    { retailer: "arraeworld.com",   url: "https://www.arraeworld.com",       note: "Subscribe & Save 10% off. Direct from brand.",            recommended: false },
                    { retailer: "GNC",              url: "https://www.gnc.com",              note: "In-store and online. 60-count readily available.",         recommended: false },
                    { retailer: "Sprouts",          url: "https://www.sprouts.com",          note: "Available in select locations and online.",               recommended: false },
                    { retailer: "Vitamin Shoppe",   url: "https://www.vitaminshoppe.com",    note: "Member discounts apply. Online and in-store.",            recommended: false },
                  ].map((r) => (
                    <div key={r.retailer} style={{ padding: "14px 16px", backgroundColor: r.recommended ? "#F8F2E4" : "#F2EBD9", border: `1px solid ${r.recommended ? "#3A5F8B" : "#D4C9B8"}`, borderRadius: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.08em", fontWeight: 700, color: "#1A1714", margin: 0 }}>{r.retailer}</p>
                        {r.recommended && <span style={{ fontSize: 9, padding: "2px 7px", backgroundColor: "rgba(58,95,139,0.12)", border: "1px solid rgba(58,95,139,0.3)", borderRadius: 10, color: "#3A5F8B", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em" }}>TOP PICK</span>}
                      </div>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5, marginBottom: 8 }}>{r.note}</p>
                      <a href={r.url} target="_blank" rel="nofollow noopener noreferrer"
                        style={{ fontSize: 11, color: "#3A5F8B", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                        Shop now →
                      </a>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.6 }}>
                  The 90-count jar is better value than the 60-count on a per-serving basis. If trying Tone for the first time, Amazon Prime is the safest option for hassle-free returns. Prices verified May 2026.
                </p>
              </section>

              {/* § 16 FAQ — details/faq-icon pattern */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-tone" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3A5F8B" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
                <style>{`
                  details[open] .faq-icon-tone svg { display: none; }
                  details[open] .faq-icon-tone::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 2px;
                    background: #3A5F8B;
                    border-radius: 1px;
                  }
                  details summary::-webkit-details-marker { display: none; }
                  details summary::marker { display: none; }
                `}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Final Verdict
                </h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>FSP · 7/10 · Arrae Tone Gummies</p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        Arrae Tone gets the most important thing right: 5g of creatine monohydrate, correctly dosed, fully disclosed, in a format that actually makes people want to take it every day. The ginger addition is smart. The Slimbiotics inclusion is interesting. The transparency is good.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        The cost is the honest friction point. At $1.67 per serving, you are paying three times what Thorne&apos;s NSF-certified Creapure costs and ten times what bulk creatine monohydrate costs. The &quot;for women&quot; framing is positioning — creatine&apos;s mechanism doesn&apos;t change with biology, and the formula has nothing in it that is gender-specific. The absence of third-party certification is a gap for a product at this price point.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85 }}>
                        Who should buy it: anyone who genuinely finds powder creatine inconvenient enough that they don&apos;t take it consistently. Who shouldn&apos;t: anyone already disciplined with powder, anyone prioritising third-party certification, or anyone on a budget. For a certified powder alternative, <Link href="/reviews/myprotein-creatine-monohydrate" style={{ color: "#3A5F8B", textDecoration: "none" }}>MyProtein Creatine</Link> is our recommended budget option.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a href="https://amzn.to/4u9uAbn" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#3A5F8B", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}>
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>$49.99 · 90 gummies · arraeworld.com</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Research References
                </h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Rawson ES & Volek JS (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. Journal of Strength and Conditioning Research. 17(4):822–831.", url: "https://doi.org/10.1519/1533-4287(2003)017<0822:EOCSART>2.0.CO;2" },
                      { text: "Lanhers C et al. (2017). Creatine supplementation and upper limb strength performance: A systematic review and meta-analysis. Sports Medicine. 47(1):163–173.", url: "https://doi.org/10.1007/s40279-016-0571-4" },
                      { text: "Antonio J et al. (2021). Common questions and misconceptions about creatine supplementation: What does the scientific evidence really show? Journal of the International Society of Sports Nutrition. 18(1):13.", url: "https://doi.org/10.1186/s12970-021-00412-w" },
                      { text: "Smith-Ryan AE et al. (2021). Creatine supplementation in women's health: A lifespan perspective. Nutrients. 13(3):877.", url: "https://doi.org/10.3390/nu13030877" },
                      { text: "Greenhaff PL et al. (1994). Influence of oral creatine supplementation of muscle torque during repeated bouts of maximal voluntary exercise in man. Clinical Science. 87(4):415–419.", url: "https://doi.org/10.1042/cs0870415" },
                      { text: "Candow DG et al. (2022). Creatine supplementation for aging musculoskeletal and brain health. Nutrients. 14(3):644.", url: "https://doi.org/10.3390/nu14030644" },
                      { text: "Nikkhah Bodagh M et al. (2019). Ginger in gastrointestinal disorders: A systematic review of clinical trials. Food Science & Nutrition. 7(1):96–108.", url: "https://doi.org/10.1002/fsn3.807" },
                      { text: "NutraIngredients (2026, April). Slimbiotics study suggests postbiotic can reduce body fat, increase muscle mass, and support cognition. nutraingredients.com.", url: "https://www.nutraingredients.com/Article/2026/04/10/slimbiotics-study-suggests-postbiotic-can-reduce-body-fat-increase-muscle-mass-and-support-cognition/" },
                      { text: "ClinicalTrials.gov (2023). A Study to Evaluate the Effect of SlimBiotics L. Fermentum K8 Postbiotic on Weight Management and Metabolic Health Outcomes. NCT05912699.", url: "https://clinicaltrials.gov/study/NCT05912699" },
                      { text: "Kreider RB et al. (2017). International Society of Sports Nutrition position stand: Safety and efficacy of creatine supplementation in exercise, sport, and medicine. Journal of the International Society of Sports Nutrition. 14:18.", url: "https://doi.org/10.1186/s12970-017-0173-z" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: "#3A5F8B", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
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
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
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
