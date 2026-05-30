import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, Star } from "lucide-react";
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
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Arrae Bloat Review (2026) — Does It Actually Work?",
  description:
    "Arrae Bloat: organic herb-and-enzyme blend at $1.47/serving. Ginger underdosed, 5 of 6 doses hidden. Industry-funded study, no control group. FSP 7/10.",
  alternates: { canonical: "/reviews/arrae-bloat" },
  openGraph: {
    title: "Arrae Bloat Review (2026) — Does It Actually Work?",
    description:
      "Arrae Bloat uses ginger, bromelain, peppermint, dandelion, lemon balm and slippery elm in a 1,300mg total blend. Clean label, no fillers — but ginger is underdosed and the clinical study has real design problems.",
    url: "https://fitlabreviews.com/reviews/arrae-bloat",
    type: "article",
  },
};

// ── TOC ────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "verdict",           label: "Quick Verdict"         },
  { id: "what-is-it",       label: "What Is Arrae Bloat?"  },
  { id: "score-breakdown",  label: "Score Breakdown"        },
  { id: "flags",            label: "Red & Green Flags"      },
  { id: "formula",          label: "Formula Analysis"       },
  { id: "ingredients",      label: "Ingredient Breakdown"   },
  { id: "lab-data",         label: "Testing & Verification" },
  { id: "claim-audit",      label: "Claim Audit"            },
  { id: "how-to-take",      label: "How to Take It"         },
  { id: "comparison",       label: "vs. Competitors"        },
  { id: "pros-cons",        label: "Pros & Cons"            },
  { id: "safety",           label: "Safety & Side Effects"  },
  { id: "value",            label: "Price & Value"          },
  { id: "faq",              label: "FAQ"                    },
  { id: "final",            label: "Final Verdict"          },
];

// ── Scoring Rubric ─────────────────────────────────────────────────────────

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 6.5,
      notes:
        "Six organic ingredients with plausible mechanisms. Ginger at 220mg is well below the 1,000–2,000mg used in IBS clinical trials (Nikkhah Bodagh et al., 2019; ScienceDirect 2024). Four of the six ingredients — dandelion, lemon balm, peppermint leaf, bromelain, slippery elm — are bundled into a single 1,080mg proprietary blend with no individual doses disclosed. The formula is clean and filler-free but not optimally dosed based on current evidence.",
    },
    {
      pillar: "transparency",
      score: 5.5,
      notes:
        "Only ginger (220mg) is individually disclosed. The remaining five actives share a 1,080mg proprietary blend — you cannot know how much bromelain, peppermint, lemon balm, dandelion, or slippery elm you are getting per serving. This is a genuine transparency gap. The total serving is 1,300mg across 2–3 capsules.",
    },
    {
      pillar: "verification",
      score: 5.0,
      notes:
        "cGMP-certified manufacturing. FTIR identity testing, heavy metal and microbiological testing per batch — all self-reported. No NSF, USP, Informed Sport, or BSCG product-level certification. The supporting clinical study (Citrus Labs, 35 women, open-label, no control group) was industry-sponsored and not peer-reviewed.",
    },
    {
      pillar: "value",
      score: 5.0,
      notes:
        "Arrae Bloat: $22 for 30 capsules = $1.47/serving at 2 caps. NOW Super Enzymes: $16.95 for 90 caps = $0.19/serving. Physician's Choice Digestive Enzymes (16 enzymes + probiotics): ~$0.43/serving. Arrae carries a significant premium for a 6-herb/enzyme blend vs broader-spectrum alternatives at a fraction of the cost.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Vegan, gluten-free, filler-free. Capsules are large per user reports — some difficulty swallowing 3 at a time. Light ginger taste noted when capsules are opened. No refrigeration required. Sold at GNC, Vitamin Shoppe, Amazon, and Walmart — easy to find. Glass packaging is a brand differentiator.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Filler-free formula",
      detail: "Hypromellose capsule is the only non-active ingredient. No magnesium stearate, silicon dioxide, or synthetic binders.",
    },
    {
      type: "green",
      label: "All organic ingredients",
      detail: "Every active ingredient is certified organic. Vegan, kosher, gluten-free, non-GMO.",
    },
    {
      type: "green",
      label: "cGMP manufacturing",
      detail: "Made in a cGMP-certified facility in the USA. Distributed by Arrae Inc., Dayton, NJ.",
    },
    {
      type: "green",
      label: "Widely available retail",
      detail: "Sold at GNC, Vitamin Shoppe, Ulta, Walmart, and Amazon — easy to find and return.",
    },
    {
      type: "red",
      label: "Proprietary blend hides 5 of 6 doses",
      detail: "Only ginger (220mg) is individually disclosed. Bromelain, peppermint, lemon balm, dandelion root, and slippery elm share a 1,080mg blend with no individual breakdowns.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "Ginger underdosed vs clinical evidence",
      detail: "Arrae discloses 220mg ginger. Clinical trials showing IBS/bloating benefit use 1,000–2,000mg daily (Nikkhah Bodagh et al., 2019; ScienceDirect 2024). At 2–3 caps, you get 220–220mg — not 1,000mg.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "No independent product certification",
      detail: "No NSF, USP, Informed Sport, or BSCG certification. Testing claims are self-reported; no independent body verifies potency or label accuracy.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Headline study has serious design limitations",
      detail: "The 86% bloating reduction figure comes from a 35-person, open-label, industry-sponsored observational study with no placebo group. Results represent combined Bloat + Calm use, not Bloat alone.",
      deduction: 0.2,
    },
  ],
  claimAudit: [
    {
      claim: '"Proven to Reduce Bloating by 86%"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "The 86% figure comes from the Citrus Labs study: 35 women, open-label, no control arm, industry-sponsored, not peer-reviewed. The figure reflects combined Bloat + Calm use (weeks 5–8), not Bloat alone. 'Proven' implies RCT-level evidence — this study does not meet that bar.",
    },
    {
      claim: '"Feel Relief in Less Than 1 Hour"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Ginger does support gastric motility and may reduce nausea acutely. Peppermint has smooth muscle relaxant effects. 77% of Citrus Labs study participants reported symptom amelioration within 1–2 hours. The claim is plausible for some users but not universally supported.",
    },
    {
      claim: '"Clinically Proven Formula"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "One industry-sponsored observational study (Citrus Labs, 2022) does not constitute 'clinically proven' in the conventional sense. A randomised placebo-controlled trial (NCT07370740) is registered but unpublished as of May 2026.",
    },
    {
      claim: '"Relieves all IBS symptoms by 74%"',
      verdict: "overstated",
      evidence: "limited",
      notes:
        "Again from the Citrus Labs study with combined Bloat + Calm, not Bloat alone. 'All IBS symptoms' is an overreach — the study measured self-reported symptom severity, not clinically diagnosed IBS outcomes by gastroenterological criteria.",
    },
    {
      claim: '"Targets facial puffiness and excess water weight"',
      verdict: "unsupported",
      evidence: "insufficient",
      notes:
        "Dandelion root has diuretic activity in small studies, but 'targeting facial puffiness' via a capsule supplement is not established in clinical evidence. This is marketing language without a specific evidentiary basis.",
    },
    {
      claim: '"1M+ people found quick relief"',
      verdict: "context-dependent",
      evidence: "insufficient",
      notes:
        "Sales figure used as social proof, not clinical evidence. Indicates commercial reach, not efficacy.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.47,
    primaryActiveGrams: 1.3,
    pricePerGramActive: 1.13,
    categoryAvgPricePerGram: 0.22,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;

// ── Schemas ────────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/arrae-bloat#review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  itemReviewed: {
    "@type": "Product",
    name: "Arrae Bloat",
    brand: { "@type": "Brand", name: "Arrae" },
    description:
      "A 6-ingredient organic digestive enzyme and herb blend in capsule form, targeting post-meal bloating and IBS symptoms.",
    offers: {
      "@type": "Offer",
      price: "22.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4wZ3tCG",
    },
  },
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Research Team",
    url: "https://fitlabreviews.com/authors/fitlab-research-team",
  },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
  reviewBody:
    "Arrae Bloat is a clean, filler-free digestive blend with plausible mechanisms. The ginger dose is well below clinical trial levels, five of six ingredient doses are hidden in a proprietary blend, and the headline '86% reduction' comes from an industry-sponsored open-label study with no control group. Legitimate product, overstated marketing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Arrae Bloat actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Some people do report post-meal comfort improvement, particularly for food-triggered bloating. The ingredients — ginger, peppermint, bromelain — have plausible mechanisms. However, ginger is underdosed compared to clinical trials, five of six ingredient doses are hidden in a proprietary blend, and the supporting study lacked a control group. Results are likely variable across individuals.",
      },
    },
    {
      "@type": "Question",
      name: "How many capsules should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Arrae recommends 2–3 capsules after meals or when bloating occurs. The supplement facts label is based on a 2-capsule serving (220mg ginger + 1,080mg proprietary blend = 1,300mg total). Taking 3 capsules does not increase the ginger dose — it increases the proprietary blend portion.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Bloat third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Arrae reports batch-level testing for identity (FTIR), heavy metals, and microbiology. These are self-reported and not verified by an independent certifying body. Arrae holds no NSF, USP, Informed Sport, or BSCG product-level certification as of May 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Arrae Bloat every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes — Arrae positions Bloat as a daily supplement, not just as-needed relief. The ingredients at these doses are generally considered safe for daily use. Slippery elm and dandelion root are well-tolerated long-term. Consult a physician if you have GERD, kidney disease, or are on blood thinners (dandelion has mild diuretic effects).",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Bloat worth the price vs alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "At $1.47 per serving, Arrae Bloat is considerably more expensive than broader-spectrum enzyme alternatives: NOW Super Enzymes costs ~$0.19/serving and covers more enzyme types. The premium reflects branding, packaging, and the organic certification — not superior clinical evidence. If budget matters, alternatives deliver comparable or broader enzyme coverage for a fraction of the cost.",
      },
    },
  ],
};

// ── Related Reviews ────────────────────────────────────────────────────────

const relatedReviews = [
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Best budget creatine in India — pure, clean, affordable.",
    publishedAt: "2026-03-08",
    figNumber: "01",
  },
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey",
    brand: "Dymatize",
    category: "Whey Protein Isolate",
    rating: 9 as ReviewRating,
    verdict: "The only hydrolyzed isolate with dual NSF + Informed Choice certification.",
    publishedAt: "2026-04-12",
    figNumber: "02",
  },
];

// ── R2 image base ──────────────────────────────────────────────────────────
const R2 = "https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/Arrae";

// ── Page ───────────────────────────────────────────────────────────────────

export default function ArraeBloatReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home",    href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Gut Health", href: "/category/gut-health" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>
                  {crumb.label}
                </Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Arrae Bloat</span>
          </div>
        </div>

        {/* 2. Feature banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A0F08 0%, #2C1A10 50%, #1A0F08 100%)", borderBottom: "1px solid #D4C9B8", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,106,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Arrae Bloat
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(242,235,217,0.5)", fontSize: "0.65em" }}>
                    Honest review, 2026
                  </em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Six organic herbs and enzymes, clean label, no fillers. But ginger is underdosed, five of six ingredient amounts are hidden, and the headline study had no control group. Here&apos;s what the evidence actually shows.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    href="https://amzn.to/4wZ3tCG"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                  >
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link
                    href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}
                  >
                    FSP {rubric.compositeScore.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              {/* Product image — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 200 }}>
                  <Image
                    src={`${R2}/ArraebloatCapsules.webp`}
                    alt="Arrae Bloat capsules bottle"
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized
                  />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Star row + metadata */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 4 }}>
              {[1,2,3,4,5,6,7,8,9,10].slice(0,editorialScore).map((i) => (
                <Star key={i} size={12} style={{ color: "#C4622D", fill: "#C4622D" }} />
              ))}
              <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginLeft: 6 }}>
                {editorialScore}/10
              </span>
            </div>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>REV-2026-054</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Digestive Enzymes · Gut Health</span>
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
          </div>
        </div>

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",     value: "Arrae"                   },
            { label: "Category",  value: "Digestive Enzymes"        },
            { label: "Serving",   value: "2–3 caps / serving"       },
            { label: "Price",     value: "$22 / 30 caps"            },
            { label: "Per Serve", value: "~$1.47 (2 caps)"          },
            { label: "Published", value: "May 30, 2026"             },
          ]} />
        </div>

        {/* 5. Author box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontStyle: "italic", color: "#C4622D" }}>F</span>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", margin: 0 }}>Fitlabreviews Research Team</p>
              <Link href="/authors/fitlab-research-team" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em", textDecoration: "none" }}>
                Editorial methodology → How we score supplements
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Affiliate disclosure */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
              Affiliate disclosure: Amazon links earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC */}
        <div className="block lg:hidden" style={{ borderBottom: "1px solid #D4C9B8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 8. Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop sidebar TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article */}
            <article style={{ minWidth: 0 }}>

              {/* § 01 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Quick Verdict
                </h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>FSP Score · 7/10</p>
                  <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.8, marginBottom: 0 }}>
                    Arrae Bloat is a clean, organic digestive supplement with sensible ingredients and zero fillers. The ginger is genuinely useful — it just isn&apos;t dosed high enough to match what clinical trials used. Five of six ingredient amounts are hidden in a proprietary blend. The headline clinical data comes from a 35-person, open-label, industry-funded study with no control group, and the &quot;86% bloating reduction&quot; figure mixes in Calm as well. For people who want a short, clean-label herb-and-enzyme capsule after meals and aren&apos;t price-sensitive, it&apos;s a reasonable option. If you want transparency on every dose, or value-for-money over branding, there are better choices.
                  </p>
                </div>

                {/* 5-pillar grid */}
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#1A1714", margin: 0, lineHeight: 1 }}>
                        {p.score.toFixed(1)}
                        <span style={{ fontSize: "0.5em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/10</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 02 What Is It */}
              <section id="what-is-it" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  What Is Arrae Bloat?
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Arrae Bloat is a six-ingredient digestive capsule targeting post-meal bloating, gas, and general gut discomfort. It launched in March 2020 as Arrae&apos;s first product and remains their flagship. The brand was founded by Siff Haider and Nish Samantray — a husband-and-wife team who funded the business with their wedding savings and built it to nine figures in revenue over five years, largely through social media and influencer reach.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The formula contains ginger root extract, dandelion root, lemon balm, peppermint leaf, bromelain (from pineapple), and slippery elm inner bark — all organic. Total active content per 2-capsule serving: 1,300mg. The capsule itself is hypromellose (vegan). Nothing else.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  It is positioned as a premium, aesthetically-forward supplement — glass jar, clean design, meant to sit on a counter rather than be hidden in a cabinet. The pricing ($22 for 30 caps) reflects that positioning. It is sold at GNC, Vitamin Shoppe, Ulta, Amazon, and Walmart.
                </p>
              </section>

              {/* § 03 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Score Breakdown
                </h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-054" />
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginTop: 14 }}>
                  FSP composite ({rubric.compositeScore.toFixed(2)}) is weighted: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%. Red flag deductions applied. Editorial score reflects holistic assessment.
                </p>
              </section>

              {/* § 04 Flags */}
              <section id="flags" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Red &amp; Green Flags
                </h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 05 Formula Analysis */}
              <section id="formula" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Formula Analysis
                </h2>

                {/* Label panel */}
                <div style={{ padding: "20px 24px", backgroundColor: "#1A1714", borderRadius: 10, marginBottom: 20 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 14 }}>Supplement Facts · 2-cap serving</p>
                  {[
                    { name: "Organic Ginger Extract (Rhizome)", amount: "220mg", disclosed: true },
                    { name: "Organic Dandelion Root Extract", amount: "—", disclosed: false },
                    { name: "Organic Lemon Balm Herb Top Extract", amount: "—", disclosed: false },
                    { name: "Organic Peppermint Leaf Extract", amount: "—", disclosed: false },
                    { name: "Organic Bromelain", amount: "—", disclosed: false },
                    { name: "Organic Slippery Elm Inner Bark Extract", amount: "—", disclosed: false },
                    { name: "Proprietary Blend (items 2–6 total)", amount: "1,080mg", disclosed: true },
                  ].map((row) => (
                    <div key={row.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(242,235,217,0.05)" }}>
                      <p style={{ fontSize: 13, color: row.disclosed ? "#F2EBD9" : "rgba(242,235,217,0.45)", margin: 0 }}>{row.name}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: row.disclosed ? "#C4622D" : "#5C5650", margin: 0, flexShrink: 0 }}>{row.amount}</p>
                    </div>
                  ))}
                  <p style={{ fontSize: 11, color: "#5C5650", marginTop: 12, fontFamily: "var(--font-dm-mono), monospace" }}>Other Ingredients: Hypromellose (Capsule) only.</p>
                </div>

                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The formula has two disclosed numbers and a significant problem: only ginger (220mg) and the total proprietary blend (1,080mg) are on the label. You get a 1,300mg supplement with one known dose and five unknown ones.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The ginger dose is the most important number here, and it is the most problematic. At 220mg per serving, it sits well below the 1,000–2,000mg used in clinical IBS and bloating trials. A 2024 ScienceDirect review identified 2,000mg daily as a beneficial dose for IBS and bowel disorders. Nikkhah Bodagh et al. (2019, Food Science &amp; Nutrition) found 1,000mg/day effective for nausea and gut motility. Arrae&apos;s ginger content is roughly 10–20% of what the evidence supports for meaningful GI effect.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Ingredient Breakdown
                </h2>

                {[
                  {
                    name: "Ginger (Zingiber officinale) — 220mg",
                    evidence: "moderate" as const,
                    verdict: "Underdosed",
                    body: "Ginger accelerates gastric emptying, reduces nausea, and has anti-inflammatory gingerol compounds. Multiple RCTs support gut motility benefit. The effective dose in trials: 1,000–2,000mg daily. At 220mg per serving, Arrae delivers a fraction of that. Whether this sub-clinical dose does anything meaningful is genuinely unclear.",
                  },
                  {
                    name: "Bromelain (pineapple enzyme) — dose undisclosed",
                    evidence: "limited" as const,
                    verdict: "Plausible but unquantified",
                    body: "Bromelain is a cysteine protease that breaks down proteins in the gut. It is absorbed orally and biologically active. There is mechanistic rationale for post-meal protein digestion support. However, independent human RCTs specifically for bloating are lacking. Its anti-inflammatory properties are better established than its direct anti-bloat effect. Without knowing how much is in the blend, it is impossible to assess dosing adequacy.",
                  },
                  {
                    name: "Peppermint Leaf Extract — dose undisclosed",
                    evidence: "moderate" as const,
                    verdict: "Right ingredient, wrong form",
                    body: "The strongest IBS evidence is for enteric-coated peppermint oil capsules (0.2–0.4mL, three times daily) — not peppermint leaf extract. Peppermint oil relaxes intestinal smooth muscle via menthol's calcium channel blocking effect. Peppermint leaf extract contains menthol, but the dose needed for the same effect and its bioavailability in leaf form is not well established. It is a reasonable inclusion; the oil form has stronger evidence.",
                  },
                  {
                    name: "Dandelion Root Extract — dose undisclosed",
                    evidence: "limited" as const,
                    verdict: "Traditional use, weak clinical data",
                    body: "Dandelion root has diuretic and mild prebiotic properties. Small studies show it increases urine output. Arrae claims it 'improves liver health' and 'removes excess water.' The liver claim is marketing — the diuretic effect is mechanistically plausible but evidence at supplement doses is thin. Its inclusion for a bloating product is reasonable given water retention is a component of some bloating.",
                  },
                  {
                    name: "Lemon Balm (Melissa officinalis) — dose undisclosed",
                    evidence: "limited" as const,
                    verdict: "Emerging gut-brain axis data",
                    body: "Lemon balm has anxiolytic and gut-relaxant effects via GABA-A receptor activity. A 2014 study (Cases et al., Nutrients) showed lemon balm reduced GI symptoms in functional dyspepsia. Tummy MOT and other review sources note there are no independent human trials specifically for lemon balm and bloating. Its mechanism is plausible given the gut-brain connection in IBS.",
                  },
                  {
                    name: "Slippery Elm Inner Bark — dose undisclosed",
                    evidence: "limited" as const,
                    verdict: "Mucilage effect, minimal RCT data",
                    body: "Slippery elm forms a mucilage coating in the GI tract, traditionally used for irritation and inflammation. A 2002 Altern Ther Health Med study found a formula including slippery elm improved IBS-constipation symptoms. Isolated slippery elm human RCT data is essentially absent. Its inclusion is traditional rather than evidence-based at the individual ingredient level.",
                  },
                ].map((ing) => (
                  <div key={ing.name} style={{ marginBottom: 20, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, letterSpacing: "0.05em", color: "#1A1714", margin: 0 }}>{ing.name}</h3>
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
              </section>

              {/* § 07 Lab Data */}
              <section id="lab-data" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Testing &amp; Verification
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "cGMP Certified Facility",     status: "pass"    as const },
                    { label: "FTIR Identity Testing",        status: "partial" as const },
                    { label: "Heavy Metal Testing",          status: "partial" as const },
                    { label: "Microbiological Analysis",     status: "partial" as const },
                    { label: "NSF / USP Certified",          status: "fail"    as const },
                    { label: "Informed Sport",               status: "fail"    as const },
                  ].map((cert) => {
                    const styles = {
                      pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",  border: "rgba(26,107,58,0.2)",  label: "Confirmed",      color: "#1A6B3A" },
                      partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",  border: "rgba(146,98,10,0.2)",  label: "Self-reported",  color: "#92620A" },
                      fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",  border: "rgba(155,32,32,0.18)", label: "Not certified",  color: "#9B2020" },
                    }[cert.status];
                    return (
                      <div key={cert.label} style={{ padding: "14px 16px", backgroundColor: styles.bg, border: `1px solid ${styles.border}`, borderRadius: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: styles.dot, flexShrink: 0 }} />
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: styles.color, margin: 0 }}>{styles.label}</p>
                        </div>
                        <p style={{ fontSize: 12, color: "#3C3530", margin: 0, lineHeight: 1.4 }}>{cert.label}</p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                  Arrae reports FTIR identity testing, heavy metal analysis, and microbiological testing per batch — but these are brand self-reports. No independent certifying body (NSF, USP, BSCG) publishes or verifies these results. For context: NSF certification specifically verifies that what is on the label is present at the stated dose. Batch COA testing does not confirm label accuracy — it confirms absence of contamination and basic identity. If you need certified label accuracy, look elsewhere.
                </p>
              </section>

              {/* § 08 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Claim Audit
                </h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 09 How To Take */}
              <section id="how-to-take" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  How to Take It
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Arrae's recommendation",   value: "2–3 caps after meals"         },
                    { label: "Timing",                   value: "Post-meal or before if prone"  },
                    { label: "Daily use",                value: "Safe for daily use"            },
                    { label: "Capsule size",             value: "Large — some users struggle with 3" },
                    { label: "Can open capsules?",       value: "Yes — mix in warm water"      },
                    { label: "Storage",                  value: "Cool, dry place. No refrigeration" },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                  One practical note from user reviews: the capsules are on the larger side — some people find swallowing three at once uncomfortable. Arrae confirms the capsule contents can be opened and dissolved in warm water without losing efficacy. The powder has a mild ginger taste.
                </p>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  vs. Competitors
                </h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 600 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Price/serve", "Enzymes", "Herbs", "3rd-party cert", "Our take"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", textAlign: "left", borderBottom: "1px solid #3C3530" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Arrae Bloat",                   price: "$1.47", enzymes: "1 (bromelain)", herbs: "5 organic",           cert: "None",           take: "Clean label, underdosed ginger, pricey" },
                        { product: "NOW Super Enzymes",              price: "$0.19", enzymes: "4 (broad spec)", herbs: "None",               cert: "NPA A-rated GMP", take: "Best value, no herb support" },
                        { product: "Physician's Choice (16 enzymes)", price: "$0.43", enzymes: "16 + probiotics", herbs: "Ginger, peppermint", cert: "None",          take: "Broader spectrum, similar price point" },
                        { product: "Enzymedica Digest Gold",         price: "$0.89", enzymes: "10+ Thera-blend", herbs: "None",              cert: "None",           take: "Highest enzyme potency, no herbs" },
                        { product: "Perelel Digestive Enzyme",       price: "$1.00", enzymes: "Multi-enzyme",    herbs: "Ginger, licorice, fennel, lemon balm", cert: "3rd-party tested", take: "Closest competitor — similar concept, tested" },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#C4622D" : "#3C3530", fontWeight: i === 0 ? 600 : 400 }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: "#3C3530", fontFamily: "var(--font-dm-mono), monospace" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{row.enzymes}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{row.herbs}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{row.take}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
                  Arrae Bloat&apos;s closest competitor on concept is Perelel — similar organic herbs, similar target (post-meal comfort), similar price, but with third-party testing. On enzymes alone, NOW Super Enzymes delivers broader coverage at 10× lower cost.
                </p>
              </section>

              {/* § 11 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Pros &amp; Cons
                </h2>
                <ProsCons
                  pros={[
                    "Completely filler-free — only hypromellose capsule as inactive ingredient",
                    "All six actives are certified organic",
                    "Clean, readable label — no 30-ingredient prop blends or mysterious powders",
                    "Vegan, gluten-free, kosher, non-GMO",
                    "cGMP-certified USA manufacturing",
                    "Widely available — GNC, Vitamin Shoppe, Ulta, Amazon, Walmart",
                    "Capsules can be opened and dissolved in water without losing efficacy",
                  ]}
                  cons={[
                    "Ginger at 220mg is 10–20% of the dose used in clinical IBS trials (1,000–2,000mg)",
                    "Five of six ingredient doses are hidden in a proprietary blend",
                    "No NSF, USP, Informed Sport, or BSCG certification",
                    "At $1.47/serving, significantly more expensive than broader-spectrum alternatives",
                    "Headline '86% reduction' comes from an industry-sponsored, no-control-group study",
                    "That study also combined Bloat + Calm — not Bloat alone",
                    "Large capsule size — some users struggle swallowing three at once",
                  ]}
                />
              </section>

              {/* § 12 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Safety &amp; Side Effects
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  At the doses in Arrae Bloat, all six ingredients have generally favourable safety profiles. No serious adverse event reports are on file with the FDA as of May 2026. Some users report mild nausea or stomach discomfort on first use — particularly at 3 capsules with a heavy meal.
                </p>
                {[
                  { heading: "Who should be cautious", points: ["People on blood thinners (warfarin) — ginger and bromelain both have mild antiplatelet activity at higher doses", "People with GERD or acid reflux — peppermint can relax the lower esophageal sphincter, potentially worsening reflux", "Kidney disease — dandelion root is a diuretic; discuss with a physician", "Pregnancy — ginger at supplement doses has not been established as safe in pregnancy; consult your doctor"] },
                  { heading: "Generally safe for", points: ["Healthy adults with post-meal bloating or IBS-type symptoms", "Daily or as-needed use — no known tolerance or dependency risk", "People with nut, gluten, or dairy restrictions — this product is free of all three"] },
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

              {/* § 13 Value */}
              <section id="value" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Price &amp; Value
                </h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="active herbs and enzymes" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "30 caps (one-time)",    price: "$22.00", perServe: "$1.47 at 2 caps" },
                    { option: "60 caps Amazon",         price: "~$36",   perServe: "$1.20 at 2 caps" },
                    { option: "Subscription (25% off)", price: "~$16.50", perServe: "$1.10 at 2 caps" },
                    { option: "GNC retail",             price: "$22",    perServe: "Same as direct"   },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{row.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.price}</p>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{row.perServe}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 14 FAQ */}
              <section id="faq" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  FAQ
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {faqSchema.mainEntity.map((item) => (
                    <div key={item.name} style={{ padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.01em" }}>
                        {item.name}
                      </p>
                      <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{item.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 15 Final Verdict */}
              <section id="final" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Final Verdict
                </h2>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>FSP · 7/10 · Arrae Bloat</p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        Arrae Bloat is exactly what it says it is: a short, clean-label capsule with six organic herbs and enzymes. The filler-free formula, organic certifications, and readable ingredient list are all genuine positives in a category full of over-stuffed proprietary blends.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                        But the marketing outpaces the evidence. Ginger — the most studied and most important ingredient — is dosed at 220mg when trials use 1,000–2,000mg. Five of six ingredient amounts are invisible. The study Arrae calls proof was 35 people with no control group, funded by a company whose business is running product trials for brands. And the headline percentage wasn&apos;t even for Bloat alone.
                      </p>
                      <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85 }}>
                        If you want a clean, short-ingredient digestive supplement and price is not the deciding factor, Arrae Bloat is a defensible choice. If you want maximum transparency, independent certification, or value-for-money on enzymes specifically — look at Perelel (tested, similar concept), Physician&apos;s Choice (broader enzymes, fraction of the price), or NOW Super Enzymes (basic but thorough, $0.19/serving).
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a
                        href="https://amzn.to/4wZ3tCG"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
                      >
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>$22 · 30 caps · arrae.com</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* References */}
              <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Research References
                </h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "Nikkhah Bodagh M et al. (2019). Ginger in gastrointestinal disorders: A systematic review of clinical trials. Food Science & Nutrition. PMC6341159.",
                      "ScienceDirect (2024). Preventive and therapeutic effects of ginger on bowel disease: A review of clinical trials. doi:10.1016/j.crfs.2024.100099",
                      "Citrus Labs (2022). Study to Evaluate the Efficacy of Arrae's Bloat & Calm Alchemy Capsules. NCT05197413. Open-label observational crossover, 35 women, 8 weeks. Industry-sponsored.",
                      "KGK Science (registered 2025). Clinical Trial to Investigate the Safety and Efficacy of Bloat on Gas and Bloating in Healthy Women. NCT07370740. Placebo-controlled RCT. Results pending as of May 2026.",
                      "Cappello G et al. (2007). Peppermint oil (Mintoil) in the treatment of irritable bowel syndrome: a prospective double blind placebo-controlled randomized trial. Digestive and Liver Disease.",
                      "Cases J et al. (2011). Pilot trial of Melissa officinalis L. leaf extract in the treatment of volunteers suffering from mild-to-moderate anxiety disorders and sleep disturbances. Mediterranean Journal of Nutrition and Metabolism.",
                      "Tummy MOT (2025). Independent review of Arrae Bloat. tummymot.com/reviews/arrae-bloat. Notes insufficient evidence for lemon balm and bromelain in human trials for bloating specifically.",
                      "Abby Langer Nutrition (2024). Arrae MB-1 and Arrae Bloat Review. Notes claims not supported by peer-reviewed RCTs.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>{ref}</li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* 9. Related Reviews — outside container-pad */}
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
