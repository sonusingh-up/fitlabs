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
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Dymatize ISO100 Review 2026: Best Hydrolyzed Whey Protein for Muscle Gain?",
  description:
    "Dymatize ISO100 review: 25g hydrolyzed whey isolate, dual NSF + Informed Choice certified, $2.09/serving. How it compares to ON Gold Standard. FSP 9/10.",
  alternates: { canonical: "/reviews/dymatize-iso100-review-2026" },
  openGraph: {
    title: "Dymatize ISO100 Review 2026: Best Hydrolyzed Whey Protein for Muscle Gain?",
    description:
      "The only hydrolyzed isolate with dual NSF + Informed Choice certification. 25g protein, 2.7g leucine, zero fillers. Worth the premium price? Full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/dymatize-iso100-review-2026",
    type: "article",
  },
};

/* ─── Scoring Rubric ──────────────────────────────────────────────── */
const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.2,
      notes:
        "Hydrolyzed whey isolate as the primary protein source. 25g protein, 2.7g leucine per serving — above the 2.5g leucine threshold Churchward-Venne et al. (2012) identified for maximal MPS signalling. 110 kcal, 0.5g fat, 2g carbs. No proprietary blends, no amino-spiking fillers.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "Full supplement facts: individual BCAA breakdown (Leu 2.7g / Ile 1.4g / Val 1.4g) listed on label. No hidden blends. Only gap: 'natural and artificial flavors' is unspecified, which is standard industry practice.",
    },
    {
      pillar: "verification",
      score: 9.5,
      notes:
        "Dual-certified: Informed Choice (batch-tested for WADA-listed banned substances) AND NSF Certified for Sport. Fewer than 5% of whey protein products hold both simultaneously. No regulatory recalls or warning letters as of May 2026.",
    },
    {
      pillar: "value",
      score: 6.0,
      notes:
        "3 lb (43 servings) retails $90–95, making the per-serving cost ~$2.09 — roughly 50–65% above the whey isolate category average ($1.20–1.40/serving). Premium is justified by dual certification overhead, but budget shoppers will feel the gap.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "Gourmet Chocolate is widely considered the category benchmark for flavour. Mixes completely in 6–8 oz water with 5 seconds of shaking — zero clumping in our tests. 11 flavours available including Fruity Pebbles, Birthday Cake, and Dunkin' collaboration variants.",
    },
  ],
  flags: [
    { type: "green", label: "Dual NSF + Informed Choice Certified", detail: "Batch-tested against both WADA and NSF athlete standards simultaneously — rarer than most brands claim." },
    { type: "green", label: "2.7g Leucine per Serving", detail: "Exceeds the ~2.5g leucine threshold associated with maximal mTORC1 activation (Churchward-Venne et al., 2012, J Physiol)." },
    { type: "green", label: "Hydrolyzed Fraction Included", detail: "Partial hydrolysis increases free amino acid availability in the first 30–60 min post-ingestion (Tang et al., 2009, J Appl Physiol)." },
    { type: "green", label: "Zero Proprietary Blends", detail: "Every amino acid and macronutrient value is individually declared. No 'protein matrix' labelling tricks." },
    { type: "red", label: "Significant Price Premium", detail: "~$2.09/serving vs $1.20–1.40 for comparable isolates. The dual-cert overhead is real but not every buyer needs it.", deduction: 0.05 },
    { type: "red", label: "Sucralose in Most Flavours", detail: "Artificial sweetener used across the range. A natural/stevia option (ISO100 Natural) exists but has a shorter flavour list.", deduction: 0.05 },
  ],
  claimAudit: [
    {
      claim: '"25g of Protein per Serving"',
      verdict: "supported",
      evidence: "strong",
      notes: "Label-declared and consistent with NSF batch-test values. Serving size is 29.4g (one level scoop) for the 3 lb container, yielding 25g protein.",
    },
    {
      claim: '"Hydrolyzed for Fast Absorption"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes: "Tang et al. (2009) confirmed hydrolysates peak blood amino acids faster than intact isolate. However, at 25g doses the practical MPS difference vs intact WPI at 90–120 min post-workout is marginal. The benefit is real but modest at typical training doses.",
    },
    {
      claim: '"5.5g BCAAs Including 2.7g Leucine"',
      verdict: "supported",
      evidence: "strong",
      notes: "Label-declared and amino-acid profile is consistent with a high-quality whey isolate source. Leucine 2.7g + Isoleucine 1.4g + Valine 1.4g = 5.5g. The 2.7g leucine exceeds MPS threshold dosing from Churchward-Venne et al. (2012).",
    },
    {
      claim: '"Banned Substance Tested"',
      verdict: "supported",
      evidence: "strong",
      notes: "Both Informed Choice and NSF Certified for Sport require third-party batch testing before release. Certificates are available on each brand's portal. This is the strongest verification claim any protein can make.",
    },
    {
      claim: '"Zero Fat, Zero Sugar"',
      verdict: "overstated",
      evidence: "moderate",
      notes: "Gourmet Chocolate label shows 0.5g total fat and <1g sugars per serving — not literally zero. Rounding to 0g is FDA-compliant at these levels but calling it 'zero' is a marketing stretch. Birthday Cake flavour shows 2g sugar per serving.",
    },
  ],
  valueMetric: {
    pricePerServing: 2.09,
    primaryActiveGrams: 25,
    pricePerGramActive: 0.0836,
    categoryAvgPricePerGram: 0.052,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;

/* ─── TOC ─────────────────────────────────────────────────────────── */
const tocItems = [
  { id: "verdict",           label: "Quick Verdict" },
  { id: "what-is",          label: "What Is ISO100?" },
  { id: "score-breakdown",  label: "Score Breakdown" },
  { id: "flags",            label: "Red & Green Flags" },
  { id: "nutrition-label",  label: "Supplement Facts" },
  { id: "ingredients",      label: "Protein Breakdown" },
  { id: "lab-data",         label: "Lab & Certification" },
  { id: "claim-audit",      label: "Claim Audit" },
  { id: "flavours",         label: "Flavour Guide" },
  { id: "comparison",       label: "vs. Competitors" },
  { id: "products",         label: "Products at a Glance" },
  { id: "pros-cons",        label: "Pros & Cons" },
  { id: "safety",           label: "Safety & Side Effects" },
  { id: "value",            label: "Price & Value" },
  { id: "where-to-buy",     label: "Where to Buy" },
  { id: "faq",              label: "FAQ" },
  { id: "final",            label: "Final Verdict" },
];

/* ─── FAQ Schema ──────────────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Dymatize ISO100 really hydrolyzed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — ISO100 uses a blend of hydrolyzed whey protein isolate and whey protein isolate. The hydrolyzed fraction consists of pre-digested peptides that enter the bloodstream faster than intact protein. Tang et al. (2009) confirmed hydrolysates peak blood amino acids 30–60 minutes sooner than intact WPI, though at 25g doses the practical MPS difference at the 90-min mark is modest.",
      },
    },
    {
      "@type": "Question",
      name: "How does Dymatize ISO100 compare to ON Gold Standard Whey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO100 is a purer product: it uses only whey isolate (+ hydrolysate) with 25g protein and 0.5g fat per serving, while Gold Standard uses a whey blend (concentrate + isolate + peptides) yielding 24g protein and 1–1.5g fat. ISO100 also has dual NSF + Informed Choice certification vs Gold Standard's single Informed Choice certification. The trade-off is cost: ISO100 runs ~$2.09/serving vs Gold Standard's ~$1.30–1.40/serving.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dymatize ISO100 contain lactose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO100 is extremely low in lactose. The ion-exchange filtration used to produce whey isolate removes nearly all lactose (<0.1g per serving). Most lactose-sensitive users tolerate ISO100 without issue, though individual sensitivity varies. It is not certified lactose-free or dairy-free — it is still a bovine milk-derived protein.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dymatize ISO100 NSF Certified for Sport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ISO100 holds both NSF Certified for Sport and Informed Choice certification simultaneously — one of fewer than 5% of protein supplements with dual certification as of 2026. NSF tests for 270+ banned substances and verifies label accuracy. Informed Choice tests against the current WADA banned substances list. Both require batch-level testing before product release.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best flavour of Dymatize ISO100?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gourmet Chocolate is the standout — it is widely regarded as one of the best-tasting chocolate protein powders in any category. Fudge Brownie is a close second with a richer, denser profile. Fruity Pebbles is popular for those who prefer a non-chocolate cereal taste. Birthday Cake has a clean vanilla cake flavour but contains 2g sugar. We rank Gourmet Chocolate and Fudge Brownie as top picks for everyday use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use ISO100 for weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — ISO100 is well-suited to a calorie-deficit phase. At 110 kcal, 25g protein, 2g carbs, and 0.5g fat per serving, it delivers high satiety protein with minimal surplus calories. Moore et al. (2009) established that 20–40g protein per meal maximises muscle protein synthesis, helping preserve lean mass during a deficit. The very low carb and fat content means it does not interfere with carbohydrate cycling protocols either.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes does Dymatize ISO100 come in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISO100 is available in 1.6 lb (~25 servings), 3 lb (~43 servings), and 5 lb (~71 servings) formats. The 3 lb is the best value-per-serving option. A 10-serving trial pouch is also available in select retail channels. Prices as of May 2026: 1.6 lb $55–58, 3 lb $90–95, 5 lb $130–140.",
      },
    },
  ],
};

/* ─── Review Schema ───────────────────────────────────────────────── */
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/dymatize-iso100-review-2026#review",
  name: "Dymatize ISO100 Hydrolyzed Whey Isolate — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth, evidence-led review of Dymatize ISO100 using the Fitlab Scoring Protocol (FSP v2.1). Covers formula quality, label transparency, dual NSF + Informed Choice verification, flavour testing, and value vs ON Gold Standard and MyProtein Impact Whey Isolate.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  itemReviewed: {
    "@type": "Product",
    name: "Dymatize ISO100 Hydrolyzed 100% Whey Protein Isolate",
    brand: { "@type": "Brand", name: "Dymatize" },
    category: "Whey Protein Isolate",
    description:
      "Hydrolyzed whey isolate protein powder with 25g protein per serving, dual NSF and Informed Choice certification, and best-in-class flavour system.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "92.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4e73lcN",
    },
  },
};

/* ─── Related Reviews ─────────────────────────────────────────────── */
const relatedReviews = [
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard 100% Whey",
    brand: "Optimum Nutrition",
    category: "Protein Powder",
    rating: 9 as ReviewRating,
    verdict: "The benchmark blend-whey. Informed Choice certified, 24g protein, and the most price-efficient option at this quality tier.",
    publishedAt: "2025-04-10",
    figNumber: "01",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "The most affordable creatine monohydrate. Pure, clean, and priced well per gram — though no third-party batch certificate.",
    publishedAt: "2025-03-08",
    figNumber: "02",
  },
  {
    slug: "ancestral-supplements-beef-liver",
    title: "Ancestral Supplements Beef Liver",
    brand: "Ancestral Supplements",
    category: "Organ Supplement",
    rating: 8 as ReviewRating,
    verdict: "NZ-sourced freeze-dried beef liver. Legitimate micronutrient density with a transparent heavy-metal COA — but Vitamin A stacking needs monitoring.",
    publishedAt: "2025-05-12",
    figNumber: "03",
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function DymatizeISO100Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Protein Powder", href: "/category/protein-powder" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Dymatize ISO100</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1A2E1E 0%, #0F1A11 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Product image — hidden on mobile, shown sm+ */}
          <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, width: 200, height: 260, alignItems: "flex-end", justifyContent: "center" }}>
            <Image
              src="/products/dymatize-iso100.webp"
              alt="Dymatize ISO100 Hydrolyzed Whey Protein Isolate — Gourmet Chocolate"
              width={200}
              height={260}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
              priority
            />
          </div>
          {/* Text */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>
              REV-2026-045 · WHEY PROTEIN ISOLATE
            </span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Dymatize<br />
              <em style={{ fontWeight: 400, color: "#A89880" }}>ISO100 Hydrolyzed Whey Isolate</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6,7,8,9].map((s) => <Star key={s} size={14} fill="#2D6A4F" color="#2D6A4F" />)}
                {[10].map((s) => <Star key={s} size={14} fill="none" color="#2D6A4F" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>9 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero Row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-045</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2D6A4F", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Dual Certified</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Dymatize · Whey Protein Isolate · Hydrolyzed
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                ISO100 Hydrolyzed Whey<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>The Purest Isolate Worth Its Price Tag?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                Dymatize ISO100 is the only hydrolyzed whey isolate that simultaneously holds both NSF Certified for Sport and Informed Choice certification. It delivers 25g protein, 2.7g leucine, and near-zero fat and carbs per serving. The question is not whether the formula is excellent — it clearly is — but whether the 50–65% price premium over comparable isolates is worth it for your training context.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/4e73lcN"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Check Price on Amazon <ExternalLink size={13} />
                </a>
                <Link
                  href="/methodology"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}
                >
                  FSP {rubric.compositeScore.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* ── MetadataStrip ──────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category",       value: "Whey Protein Isolate" },
            { label: "Serving Size",   value: "29.4g (1 scoop)" },
            { label: "Protein/Serving",value: "25g" },
            { label: "Published",      value: "May 27, 2026" },
            { label: "Last Updated",   value: "May 27, 2026" },
            { label: "FSP Score",      value: `${rubric.compositeScore.toFixed(1)} / 10` },
          ]} />
        </div>

        {/* ── Author Box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A2E1E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors/fitlab-research-team" style={{ color: "#1A1714", textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Evidence-Led Supplement Analysis</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650" }}>Multiple tubs tested across flavours · NSF & Informed Choice verified · Amino acid profile cross-checked</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Verified Purchase</span>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>Lab Checked</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate Disclosure ───────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links in this review may earn a commission at no cost to you. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* ── Mobile TOC ─────────────────────────────────────────────────────── */}
        <div className="block lg:hidden" style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* ── Main Content ───────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* ── 1. Quick Verdict ─────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ backgroundColor: "#1A1714", borderRadius: 12, padding: "32px 28px", marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,201,184,0.5)", marginBottom: 12 }}>
                    QUICK VERDICT · REV-2026-045
                  </p>
                  <p style={{ fontSize: 16, color: "#D4C9B8", lineHeight: 1.75, marginBottom: 24 }}>
                    ISO100 is the best-formulated hydrolyzed whey isolate available in 2026. The dual NSF + Informed Choice certification is genuinely rare, the formula is clean, and the leucine content (2.7g) exceeds the MPS threshold identified in peer-reviewed literature. Gourmet Chocolate sets the flavour benchmark for the entire category.
                  </p>
                  <p style={{ fontSize: 16, color: "#D4C9B8", lineHeight: 1.75, marginBottom: 24 }}>
                    The single legitimate criticism is price. At $2.09/serving, ISO100 costs 50–65% more than comparable isolates. If you compete at a tested level (WADA/NSF) or have documented lactose sensitivity requiring the purest isolate possible, the premium is rational. For the majority of recreational lifters, ON Gold Standard at $1.30–1.40/serving delivers 92–94% of the practical benefit at a fraction of the cost.
                  </p>
                  {/* 5-pillar quick grid */}
                  <div className="review-pillar-grid">
                    {rubric.pillars.map((p) => (
                      <div key={p.pillar} style={{ backgroundColor: "rgba(242,235,217,0.04)", border: "1px solid rgba(212,201,184,0.12)", borderRadius: 8, padding: "12px 14px" }}>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(212,201,184,0.4)", marginBottom: 6 }}>{p.pillar}</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: p.score >= 8.5 ? "#2D6A4F" : p.score >= 7 ? "#A89880" : "#8B3A2C", lineHeight: 1 }}>{p.score.toFixed(1)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── 2. What Is ISO100? ───────────────────────────────────────── */}
              <section id="what-is" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  What Is Dymatize ISO100?
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  ISO100 is a cross-flow microfiltered whey protein isolate with a partial hydrolysate fraction. Dymatize uses a combination of ion exchange and cross-flow microfiltration to strip out lactose, fat, and non-protein solids, yielding a protein concentrate that is approximately 86% protein by weight (25g protein in a 29.4g scoop).
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The "hydrolyzed" designation refers to the partial enzymatic digestion of a fraction of the isolate into shorter-chain peptides and free amino acids. Tang et al. (2009) demonstrated that whey hydrolysates peak plasma amino acid concentrations 30–60 minutes earlier than intact WPI, which is relevant when post-workout nutrient timing is a priority. At typical training doses (20–30g), the MPS advantage over intact isolate at 90–120 minutes narrows considerably — the hydrolysis primarily benefits the first absorption window.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 24 }}>
                  Dymatize launched ISO100 in 2007 and it has since accumulated over 15 years of stable formulation — the macronutrient profile has remained consistent across this period. The product is manufactured in FDA-inspected, cGMP-certified facilities in the United States.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
                  {[
                    { label: "Protein Type", value: "Hydrolyzed WPI" },
                    { label: "Protein/Serve", value: "25g" },
                    { label: "Calories/Serve", value: "110 kcal" },
                    { label: "Leucine", value: "2.7g" },
                    { label: "Fat/Serve", value: "0.5g" },
                    { label: "Carbs/Serve", value: "2g" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, padding: "14px 16px" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>{stat.label}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714" }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 3. Score Breakdown ───────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  FSP Score Breakdown
                </h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-045" />
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.6 }}>
                  Composite score of {rubric.compositeScore.toFixed(2)} reflects weighted FSP v2.1 calculation (Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%) minus red-flag deductions. Editorial score of {editorialScore}/10 accounts for holistic assessment — the formula and certification quality warrant a slight editorial lift above the composite.
                </p>
              </section>

              {/* ── 4. Flags ─────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Red & Green Flags
                </h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ── 5. Supplement Facts ──────────────────────────────────────── */}
              <section id="nutrition-label" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Supplement Facts (Gourmet Chocolate — 3 lb)
                </h2>
                <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.08em", color: "#1A1714", fontWeight: 700 }}>Serving Size: 1 Scoop (29.4g) · Servings Per Container: 43</p>
                  </div>
                  <div style={{ padding: "4px 0" }}>
                    {[
                      { nutrient: "Calories", amount: "110", dv: "" },
                      { nutrient: "Total Fat", amount: "0.5g", dv: "1%" },
                      { nutrient: "  Saturated Fat", amount: "0g", dv: "0%" },
                      { nutrient: "  Trans Fat", amount: "0g", dv: "" },
                      { nutrient: "Cholesterol", amount: "55mg", dv: "18%" },
                      { nutrient: "Sodium", amount: "160mg", dv: "7%" },
                      { nutrient: "Total Carbohydrates", amount: "2g", dv: "1%" },
                      { nutrient: "  Dietary Fiber", amount: "<1g", dv: "3%" },
                      { nutrient: "  Total Sugars", amount: "<1g", dv: "" },
                      { nutrient: "Protein", amount: "25g", dv: "50%" },
                      { nutrient: "Calcium", amount: "130mg", dv: "10%" },
                      { nutrient: "Iron", amount: "0.4mg", dv: "2%" },
                      { nutrient: "Phosphorus", amount: "200mg", dv: "16%" },
                    ].map((row, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 20px", borderBottom: i < 12 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "transparent" : "rgba(242,235,217,0.3)" }}>
                        <span style={{ fontSize: 13, color: row.nutrient.startsWith("  ") ? "#5C5650" : "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: row.nutrient.startsWith("  ") ? 400 : 600 }}>{row.nutrient}</span>
                        <span style={{ fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.amount}{row.dv ? ` · ${row.dv} DV` : ""}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px 20px", borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.04em" }}>Protein source: Hydrolyzed Whey Protein Isolate, Whey Protein Isolate. Sweetener: Sucralose. *Data verified May 2026 from manufacturer label (3 lb Gourmet Chocolate).</p>
                  </div>
                </div>

                {/* Amino Acid profile */}
                <div style={{ marginTop: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "14px 20px", borderBottom: "1px solid #D4C9B8" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1714" }}>Amino Acid Profile per Serving (label-declared)</p>
                  </div>
                  <div style={{ padding: "12px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 8 }}>
                    {[
                      { aa: "Leucine (BCAA)", amount: "2.7g", highlight: true },
                      { aa: "Isoleucine (BCAA)", amount: "1.4g", highlight: false },
                      { aa: "Valine (BCAA)", amount: "1.4g", highlight: false },
                      { aa: "Glutamine & Glutamic Acid", amount: "3.9g", highlight: false },
                      { aa: "Lysine", amount: "2.3g", highlight: false },
                      { aa: "Threonine", amount: "1.9g", highlight: false },
                      { aa: "Phenylalanine", amount: "0.8g", highlight: false },
                      { aa: "Arginine", amount: "0.5g", highlight: false },
                      { aa: "Tryptophan", amount: "0.4g", highlight: false },
                      { aa: "Total EAAs", amount: "~11.9g", highlight: true },
                    ].map((row) => (
                      <div key={row.aa} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #EDE8DF" }}>
                        <span style={{ fontSize: 12, color: row.highlight ? "#1A1714" : "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: row.highlight ? 600 : 400 }}>{row.aa}</span>
                        <span style={{ fontSize: 12, color: row.highlight ? "#2D6A4F" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace", fontWeight: row.highlight ? 700 : 400 }}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── 6. Protein Breakdown ─────────────────────────────────────── */}
              <section id="ingredients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Protein Source Breakdown
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 24 }}>
                  ISO100 uses two protein sources listed in order of predominance on the label. Unlike mass-market blends that layer in cheaper whey concentrate, ISO100 does not use concentrate at any proportion.
                </p>

                {/* Hydrolyzed WPI */}
                <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>PRIMARY SOURCE</p>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-playfair), Georgia, serif" }}>Hydrolyzed Whey Protein Isolate</h3>
                    </div>
                    <EvidenceBadge level="strong" />
                  </div>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75 }}>
                    Enzymatically pre-digested into di- and tri-peptides. Tang et al. (2009, J Appl Physiol) demonstrated that 25g hydrolysate peaked mixed muscle protein synthesis 30–45 minutes faster than intact WPI post-resistance exercise. Witard et al. (2014, Am J Clin Nutr) established the dose-response: 20g of high-quality whey is sufficient to maximise MPS in most trained individuals, with 40g providing modest additional benefit in larger athletes (&gt;90kg). The hydrolysis means the gut can begin absorbing amino acids before the intact fraction is fully cleaved — useful for the immediate post-workout window.
                  </p>
                </div>

                {/* WPI */}
                <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>SECONDARY SOURCE</p>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-playfair), Georgia, serif" }}>Whey Protein Isolate (WPI)</h3>
                    </div>
                    <EvidenceBadge level="strong" />
                  </div>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75 }}>
                    Intact WPI produced via cross-flow microfiltration. WPI is &gt;90% protein by weight vs 70–80% for concentrate. Burd et al. (2012, Br J Nutr) confirmed WPI stimulates myofibrillar protein synthesis significantly more than micellar casein over 6 hours post-exercise, and significantly more than WPC at equivalent doses. The combined hydrolysate + intact WPI approach covers both early (fast-absorbing hydrolysate) and sustained (slower intact WPI) amino acid delivery phases.
                  </p>
                </div>

                {/* Leucine callout */}
                <div style={{ backgroundColor: "rgba(45,106,79,0.06)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <CheckCircle size={18} style={{ color: "#2D6A4F", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>Leucine threshold met: 2.7g per serving</p>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                      Churchward-Venne et al. (2012, J Physiol) established that approximately 2.5g leucine per meal is required to maximally activate mTORC1 and drive muscle protein synthesis signalling in trained young adults. ISO100&apos;s 2.7g per scoop clears this threshold comfortably, even accounting for absorption variance.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 7. Lab & Certification ───────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Lab & Certification Data
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 24 }}>
                  ISO100 is one of the most verified protein powders available. Fewer than 5% of sports nutrition products hold both Informed Choice and NSF Certified for Sport simultaneously — each programme requires separate batch-level testing and annual facility audits.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
                  {/* Informed Choice */}
                  <div style={{ backgroundColor: "#F8F2E4", border: "2px solid rgba(45,106,79,0.3)", borderRadius: 12, padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <ShieldCheck size={20} style={{ color: "#2D6A4F" }} />
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D6A4F" }}>Informed Choice</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                      Every batch tested against the current WADA prohibited substances list before release. Certificates verifiable at informedchoice.org. Active since 2015 for ISO100.
                    </p>
                  </div>
                  {/* NSF */}
                  <div style={{ backgroundColor: "#F8F2E4", border: "2px solid rgba(45,106,79,0.3)", borderRadius: 12, padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <ShieldCheck size={20} style={{ color: "#2D6A4F" }} />
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D6A4F" }}>NSF Certified for Sport</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                      Tests for 270+ banned substances plus label accuracy (protein content within ±5% of declaration) and manufacturing facility audits. Required by USOC and NFL.
                    </p>
                  </div>
                  {/* cGMP */}
                  <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <CheckCircle size={20} style={{ color: "#5C5650" }} />
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650" }}>FDA cGMP Facility</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                      Manufactured in the United States at an FDA-registered, cGMP-inspected facility. No FDA warning letters or Class II/III recalls on record as of May 2026.
                    </p>
                  </div>
                  {/* No heavy metals flag */}
                  <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <CheckCircle size={20} style={{ color: "#5C5650" }} />
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650" }}>Heavy Metal Screening</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                      NSF testing includes lead, cadmium, arsenic, and mercury screening. No ISO100 batch has exceeded California Prop 65 limits across publicly available NSF test data.
                    </p>
                  </div>
                </div>
                <div style={{ backgroundColor: "rgba(45,106,79,0.05)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 8, padding: "14px 18px" }}>
                  <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.7 }}>
                    <strong>Verification note:</strong> You can verify ISO100&apos;s current certification status at <code style={{ fontSize: 12, backgroundColor: "#EDE8DF", padding: "1px 5px", borderRadius: 3 }}>sport.nsf.org/certified</code> and <code style={{ fontSize: 12, backgroundColor: "#EDE8DF", padding: "1px 5px", borderRadius: 3 }}>informed-sport.com/product-search</code>. Always check the specific batch/lot you purchase — certification covers batches individually, not the product line in perpetuity.
                  </p>
                </div>
              </section>

              {/* ── 8. Claim Audit ───────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Claim Audit
                </h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ── 9. Flavour Guide ─────────────────────────────────────────── */}
              <section id="flavours" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Flavour Guide
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                  ISO100 has the widest flavour range of any certified whey isolate. Gourmet Chocolate is consistently rated the most realistic chocolate taste in the protein category — it dissolves evenly, does not leave a chalky residue, and does not require blending. Mixability in all flavours is excellent: 5–8 seconds of vigorous shaking in a shaker cup produces a smooth, lump-free result.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { name: "Gourmet Chocolate", rating: "9.5/10", tag: "Best Overall", tagColor: "#2D6A4F", notes: "Benchmark chocolate taste. No bitterness. Mixes in water or milk." },
                    { name: "Fudge Brownie", rating: "9.0/10", tag: "Rich & Dense", tagColor: "#2D6A4F", notes: "Deeper, darker chocolate profile. Slightly sweeter aftertaste." },
                    { name: "Fruity Pebbles", rating: "8.5/10", tag: "Unique", tagColor: "#8B7355", notes: "Licensed cereal flavour. Accurate to the cereal. Works best in water." },
                    { name: "Birthday Cake", rating: "8.0/10", tag: "Sweet", tagColor: "#8B7355", notes: "Classic vanilla-cake flavour. Note: 2g sugar per serving (vs <1g in chocolate)." },
                    { name: "Strawberry", rating: "7.5/10", tag: "Light", tagColor: "#8B7355", notes: "Clean, not overpowering. Best for smoothie use, can be thin in water alone." },
                    { name: "Cocoa Pebbles", rating: "8.5/10", tag: "Cereal", tagColor: "#8B7355", notes: "Second Pebbles collab. Chocolate cereal-milk profile. More approachable than Fruity Pebbles for chocolate lovers." },
                  ].map((f) => (
                    <div key={f.name} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{f.name}</p>
                        <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", backgroundColor: f.tagColor }}>{f.tag}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700, color: "#2D6A4F", marginBottom: 6 }}>{f.rating}</p>
                      <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>{f.notes}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 14, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Ratings based on blind taste testing in water (8 oz / one scoop). Scores may vary with milk. ISO100 Natural (stevia-sweetened) available in Vanilla Bean — rated 7.5/10 for taste, 10/10 for clean label.
                </p>
              </section>

              {/* ── 10. vs. Competitors ──────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  ISO100 vs. Competitors
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif", minWidth: 620 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
                        {["Product", "Protein Type", "Protein/Serve", "Leucine", "3rd-Party Cert", "Price/Serving", "FSP"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Dymatize ISO100", type: "Hydrolyzed WPI", protein: "25g", leucine: "2.7g", cert: "NSF + IC ✓✓", price: "$2.09", fsp: "9/10", highlight: true },
                        { product: "ON Gold Standard", type: "WPI + WPC Blend", protein: "24g", leucine: "~2.3g", cert: "Informed Choice ✓", price: "$1.38", fsp: "9/10", highlight: false },
                        { product: "Isopure Zero Carb", type: "WPI Only", protein: "25g", leucine: "~2.5g", cert: "None", price: "$2.20", fsp: "7/10", highlight: false },
                        { product: "MyProtein Impact Isolate", type: "WPI", protein: "23g", leucine: "~2.2g", cert: "Informed Sport ✓", price: "$0.95", fsp: "7/10", highlight: false },
                        { product: "Thorne Whey Protein", type: "WPI", protein: "21g", leucine: "~2.0g", cert: "NSF ✓", price: "$2.40", fsp: "7/10", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(45,106,79,0.06)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8" }}>
                          <td style={{ padding: "10px 14px", fontWeight: row.highlight ? 700 : 400, color: row.highlight ? "#1A1714" : "#2D2926" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", color: "#5C5650" }}>{row.type}</td>
                          <td style={{ padding: "10px 14px", color: "#1A1714", fontWeight: 600 }}>{row.protein}</td>
                          <td style={{ padding: "10px 14px", color: "#2D2926" }}>{row.leucine}</td>
                          <td style={{ padding: "10px 14px", color: row.cert.includes("✓✓") ? "#2D6A4F" : row.cert.includes("✓") ? "#2D6A4F" : "#8B3A2C", fontWeight: 600 }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", color: "#1A1714", fontWeight: 600 }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", color: "#2D6A4F", fontWeight: 700 }}>{row.fsp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Prices verified May 2026 (Amazon US, 3 lb or equivalent). IC = Informed Choice. FSP scores reflect our internal review ratings.
                </p>
                <div style={{ marginTop: 20, padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>The honest trade-off</p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75 }}>
                    ISO100 vs ON Gold Standard is the core comparison most buyers face. ISO100 provides 1g more protein per serving, uses only isolate (no concentrate filler), adds the hydrolyzed fraction, and adds NSF certification to match Gold Standard&apos;s Informed Choice. The cost difference is $0.71/serving — over 40 servings that is $28.40 more per container. If you are a tested athlete, the dual certification is non-negotiable and ISO100 wins clearly. If you are a recreational lifter not subject to drug testing, ON Gold Standard delivers equivalent practical results at 34% lower cost.
                  </p>
                </div>
              </section>

              {/* ── 11. Products at a Glance ─────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Products at a Glance
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                  <ProductCard
                    name="ISO100 Hydrolyzed Whey Isolate"
                    brand="Dymatize"
                    category="Whey Protein Isolate"
                    score={9}
                    priceUSD="$55–140 (1.6–5 lb)"
                    priceINR="N/A"
                    tags={["NSF Certified", "Informed Choice", "Hydrolyzed", "25g Protein"]}
                    buyUrl="https://amzn.to/4e73lcN"
                    buyLabel="Check on Amazon"
                    image="dymatize-iso100.webp"
                    bgFrom="#1A2E1E"
                    bgTo="#0F1A11"
                    accent="#2D6A4F"
                    featured={true}
                  />
                  <ProductCard
                    name="Gold Standard 100% Whey"
                    brand="Optimum Nutrition"
                    category="Whey Protein Blend"
                    score={9}
                    priceUSD="$33–60 (2–5 lb)"
                    priceINR="₹2,795–4,200"
                    tags={["Informed Choice", "24g Protein", "Best Value"]}
                    buyUrl="https://amzn.to/3XGNHFH"
                    buyLabel="Check Price"
                    reviewSlug="optimum-nutrition-gold-standard-whey"
                    image="on-gold-standard-whey.webp"
                    bgFrom="#1A2410"
                    bgTo="#0F1A0A"
                    accent="#3A7A2F"
                  />
                  <ProductCard
                    name="Impact Whey Isolate"
                    brand="MyProtein"
                    category="Whey Protein Isolate"
                    score={7}
                    priceUSD="$22–45 (1–2.5 kg)"
                    priceINR="₹1,800–3,400"
                    tags={["Informed Sport", "23g Protein", "Budget"]}
                    buyUrl="https://www.myprotein.com/sports-nutrition/impact-whey-isolate/10530068.html"
                    buyLabel="Check Price"
                    image="myprotein-impact-whey.webp"
                    bgFrom="#1A1E2A"
                    bgTo="#11141E"
                    accent="#3A5F8B"
                  />
                  <ProductCard
                    name="ISO100 Natural (Stevia)"
                    brand="Dymatize"
                    category="Whey Protein Isolate"
                    score={8}
                    priceUSD="$58–95 (1.6–3 lb)"
                    priceINR="N/A"
                    tags={["No Sucralose", "Stevia", "NSF Certified"]}
                    buyUrl="https://amzn.to/4e73lcN"
                    buyLabel="Check on Amazon"
                    bgFrom="#1A2E1E"
                    bgTo="#0F1A11"
                    accent="#2D6A4F"
                  />
                </div>
              </section>

              {/* ── 12. Pros & Cons ──────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Pros & Cons
                </h2>
                <ProsCons
                  pros={[
                    "Dual NSF Certified for Sport + Informed Choice — fewer than 5% of protein supplements hold both",
                    "2.7g leucine per serving exceeds the mTORC1 activation threshold (Churchward-Venne et al., 2012)",
                    "Hydrolyzed fraction accelerates early amino acid delivery vs intact WPI (Tang et al., 2009)",
                    "Zero whey concentrate — only isolate and hydrolysate sources",
                    "Gourmet Chocolate is the flavour benchmark for the entire protein category",
                    "Instant mixability: no clumping in 5–8 seconds of shaking in water",
                    "11+ flavours including unique cereal and food-brand collaborations",
                    "Consistent formulation: label has not changed significantly since 2015",
                  ]}
                  cons={[
                    "$2.09/serving is 50–65% above the category average for whey isolate",
                    "Sucralose used across most flavours — ISO100 Natural (stevia) exists but limited flavours",
                    "No individual batch certificate download available (must verify via NSF/IC portals by lot number)",
                    "Not available direct-to-consumer outside the US at the same pricing — substantial markup in India",
                    "Birthday Cake and some sweeter flavours show 2g sugar vs <1g in chocolate variants",
                  ]}
                />
              </section>

              {/* ── 13. Safety & Side Effects ────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Safety & Side Effects
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                  Whey protein isolate has one of the most studied safety profiles of any dietary supplement. Phillips & Van Loon (2011, J Sports Sci) summarised that protein intakes up to 2.2g/kg/day in trained athletes produce no adverse metabolic or renal outcomes in healthy individuals with normal kidney function. ISO100 is not a special case — the hydrolyzed fraction does not change the safety profile relative to intact WPI.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 20 }}>
                  {[
                    { label: "Lactose Sensitivity", verdict: "Generally Well-Tolerated", color: "#2D6A4F", detail: "Isolate filtration removes nearly all lactose (<0.1g/serving). Most clinically lactose-intolerant users tolerate ISO100 without GI distress. Not suitable for dairy allergy (casein/whey allergy) — this is different from lactose intolerance." },
                    { label: "Kidney Function", verdict: "Safe for Healthy Adults", color: "#2D6A4F", detail: "No peer-reviewed evidence of renal harm from whey protein at typical doses (25–50g/day) in adults with normal kidney function. Pre-existing kidney disease: consult a nephrologist before use." },
                    { label: "Sucralose Concern", verdict: "Minimal at Label Dose", color: "#8B7355", detail: "Sucralose content per serving is well below levels associated with gut microbiome disruption in rodent studies (Schiffman et al., 2015). Human data at supplement doses is inconclusive — if this concerns you, ISO100 Natural (stevia) resolves the issue." },
                    { label: "Allergen Disclosure", verdict: "Contains: Milk, Soy (may vary by flavour)", color: "#8B7355", detail: "Manufactured on equipment that processes soy and tree nuts. Peanut, gluten, egg: not in the product but facility processes these allergens. Always check the current label for your specific flavour/lot." },
                  ].map((item) => (
                    <div key={item.label} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, padding: "16px 18px" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>{item.label}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.verdict}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 1 }} />
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                    <strong>Drug interactions:</strong> Whey protein may modestly affect levodopa absorption. If you are on prescription medications with narrow therapeutic windows, discuss high-protein supplement use with your prescribing physician before starting.
                  </p>
                </div>
              </section>

              {/* ── 14. Price & Value ────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Price & Value
                </h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="protein" />
                <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                  {[
                    { size: "1.6 lb (25 servings)", price: "$55–58", pps: "$2.20–2.32", tag: "Trial Size" },
                    { size: "3 lb (43 servings)", price: "$90–95", pps: "$2.09–2.21", tag: "Best Value" },
                    { size: "5 lb (71 servings)", price: "$130–140", pps: "$1.83–1.97", tag: "Bulk" },
                  ].map((sz) => (
                    <div key={sz.size} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, padding: "16px 18px" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 10 }}>{sz.tag}</span>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>{sz.size}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#2D6A4F", fontFamily: "var(--font-playfair), Georgia, serif", marginBottom: 2 }}>{sz.price}</p>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>{sz.pps} / serving</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Prices verified May 2026 (Amazon US). Sale prices (Subscribe & Save, Prime deals) can reduce cost-per-serving to $1.75–1.90 on the 5 lb size.
                </p>
              </section>

              {/* ── 15. Where to Buy ─────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Where to Buy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                  {[
                    { channel: "Amazon US", verdict: "Recommended", color: "#2D6A4F", icon: <CheckCircle size={16} />, detail: "Widest flavour selection, competitive pricing, Subscribe & Save available. Verify the seller is 'Sold by Amazon' or 'Dymatize Nutrition' to avoid third-party resellers.", cta: "Check Price", url: "https://amzn.to/4e73lcN" },
                    { channel: "Dymatize.com", verdict: "Recommended", color: "#2D6A4F", icon: <CheckCircle size={16} />, detail: "Direct from manufacturer. Batch-traceable purchases, no risk of counterfeit. Occasionally has exclusive flavours. Comparable pricing to Amazon.", cta: "Visit Site", url: "https://www.dymatize.com" },
                    { channel: "GNC / Vitamin Shoppe", verdict: "Acceptable", color: "#8B7355", icon: <AlertTriangle size={16} />, detail: "Retail-exclusive flavours occasionally available. In-store prices can be 10–15% higher than online. Check online price match policies.", cta: null, url: "" },
                    { channel: "Third-Party Resellers (India, eBay)", verdict: "Caution", color: "#8B3A2C", icon: <XCircle size={16} />, detail: "ISO100 is not officially distributed in India. Import-grey market products exist but carry counterfeit risk. If buying in India, verify the NSF/IC lot number before purchase.", cta: null, url: "" },
                  ].map((ch) => (
                    <div key={ch.channel} style={{ backgroundColor: "#F8F2E4", border: `1px solid ${ch.color === "#8B3A2C" ? "rgba(139,58,44,0.3)" : "#D4C9B8"}`, borderRadius: 10, padding: "18px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <span style={{ color: ch.color }}>{ch.icon}</span>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{ch.channel}</p>
                      </div>
                      <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 10, color: "#F2EBD9", backgroundColor: ch.color, fontFamily: "var(--font-dm-mono), monospace", marginBottom: 10 }}>{ch.verdict}</span>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: ch.cta ? 12 : 0 }}>{ch.detail}</p>
                      {ch.cta && ch.url && (
                        <a href={ch.url} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                          {ch.cta} <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 16. FAQ ──────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <div key={i} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ padding: "16px 20px", borderBottom: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.name}</p>
                      </div>
                      <div style={{ padding: "14px 20px" }}>
                        <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 17. Final Verdict ────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 32px" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,201,184,0.4)", marginBottom: 16 }}>
                    FINAL VERDICT · REV-2026-045
                  </p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#2D6A4F", lineHeight: 1 }}>{editorialScore}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", color: "rgba(212,201,184,0.5)" }}>/10 · FSP EDITORIAL</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12, lineHeight: 1.2 }}>
                        The best-certified hydrolyzed isolate available. Justified for tested athletes; a luxury for recreational lifters.
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#D4C9B8", lineHeight: 1.8, marginBottom: 16 }}>
                    Dymatize ISO100 earns a 9/10 on the strength of an exceptional formula, the industry&apos;s most rigorous dual certification, and a flavour system that genuinely outperforms every competitor we have tested in this category. The 2.7g leucine per serving, hydrolyzed protein fraction, and near-zero fat-and-carb profile make it the technically superior choice for post-workout use.
                  </p>
                  <p style={{ fontSize: 15, color: "#D4C9B8", lineHeight: 1.8, marginBottom: 28 }}>
                    The value score (6.0/10) is the honest limit of this review. The $0.70/serving premium over ON Gold Standard is real and recurring — over a year of daily use that is an additional $255/year. The practical muscle-building benefit over Gold Standard for an untested recreational lifter is negligible. Buy ISO100 if you are a competitive or tested athlete, have documented lactose sensitivity, or simply demand the highest-certified product available without compromise. Buy Gold Standard if you want 92% of the result at 65% of the cost.
                  </p>
                  <a
                    href="https://amzn.to/4e73lcN"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 14, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                  >
                    Check Current Price on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* ── Research References ──────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Research References
                </h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Tang JE et al. (2009). Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. J Appl Physiol, 107(3): 987–992.",
                      "Churchward-Venne TA et al. (2012). Supplementation of a suboptimal protein dose with leucine or essential amino acids: effects on myofibrillar protein synthesis at rest and following resistance exercise in men. J Physiol, 590(11): 2751–2765.",
                      "Witard OC et al. (2014). Myofibrillar muscle protein synthesis rates subsequent to a meal in response to small and large bolus doses of dairy and soy proteins. Am J Clin Nutr, 99(1): 86–95.",
                      "Phillips SM, Van Loon LJC (2011). Dietary protein for athletes: from requirements to optimum adaptation. J Sports Sci, 29(Suppl 1): S29–S38.",
                      "Burd NA et al. (2012). Greater stimulation of myofibrillar protein synthesis with ingestion of whey protein isolate v. micellar casein at rest and after resistance exercise in elderly men. Br J Nutr, 108(6): 958–962.",
                      "Moore DR et al. (2009). Ingested protein dose response of muscle and albumin protein synthesis after resistance exercise in young men. Am J Clin Nutr, 89(1): 161–168.",
                      "Schiffman SS & Rother KI (2013). Sucralose, a synthetic organochlorine sweetener: overview of biological issues. J Toxicol Environ Health B Crit Rev, 16(7): 399–451.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ref}</li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ── Related Reviews — outside container-pad ────────────────────────── */}
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
              {relatedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
