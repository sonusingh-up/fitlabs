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
  { id: "verdict",          label: "Quick Verdict"          },
  { id: "what-is",         label: "What Is Arrae Bloat?"   },
  { id: "score-breakdown", label: "Score Breakdown"         },
  { id: "flags",           label: "Red & Green Flags"       },
  { id: "supplement-facts",label: "Supplement Facts"        },
  { id: "ingredients",     label: "Ingredient Breakdown"    },
  { id: "lab-data",        label: "Testing & Verification"  },
  { id: "claim-audit",     label: "Claim Audit"             },
  { id: "how-to-take",     label: "How to Take It"          },
  { id: "comparison",      label: "vs. Competitors"         },
  { id: "products",        label: "Products at a Glance"    },
  { id: "pros-cons",       label: "Pros & Cons"             },
  { id: "safety",          label: "Safety & Side Effects"   },
  { id: "value",           label: "Price & Value"           },
  { id: "where-to-buy",    label: "Where to Buy"            },
  { id: "faq",             label: "FAQ"                     },
  { id: "final",           label: "Final Verdict"           },
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
      detail: "Arrae discloses 220mg ginger. Clinical trials showing IBS/bloating benefit use 1,000–2,000mg daily (Nikkhah Bodagh et al., 2019; ScienceDirect 2024). At 2–3 caps, you get 220mg — not 1,000mg.",
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
const composite = rubric.compositeScore;

// ── Schemas ────────────────────────────────────────────────────────────────

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/arrae-bloat#review",
  name: "Arrae Bloat — Fitlabreviews FSP Review",
  reviewBody:
    "Arrae Bloat is a clean, filler-free digestive blend with plausible mechanisms. The ginger dose is well below clinical trial levels, five of six ingredient doses are hidden in a proprietary blend, and the headline '86% reduction' comes from an industry-sponsored open-label study with no control group. Legitimate product, overstated marketing.",
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
    category: "Digestive Enzymes",
    description:
      "A 6-ingredient organic digestive enzyme and herb blend in capsule form, targeting post-meal bloating and IBS symptoms.",
    offers: {
      "@type": "Offer",
      price: "22.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/4wZ3tCG",
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
      name: "Does Arrae Bloat actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some people report post-meal comfort improvement, particularly for food-triggered bloating. The ingredients — ginger, peppermint, bromelain — have plausible mechanisms. However, ginger is underdosed compared to clinical trials, five of six ingredient doses are hidden in a proprietary blend, and the supporting study lacked a control group. Results are likely variable across individuals.",
      },
    },
    {
      "@type": "Question",
      name: "How many capsules should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arrae recommends 2–3 capsules after meals or when bloating occurs. The supplement facts label is based on a 2-capsule serving (220mg ginger + 1,080mg proprietary blend = 1,300mg total). Taking 3 capsules does not increase the ginger dose — it increases the proprietary blend portion.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Bloat third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arrae reports batch-level testing for identity (FTIR), heavy metals, and microbiology. These are self-reported and not verified by an independent certifying body. Arrae holds no NSF, USP, Informed Sport, or BSCG product-level certification as of May 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Arrae Bloat every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Arrae positions Bloat as a daily supplement, not just as-needed relief. The ingredients at these doses are generally considered safe for daily use. Slippery elm and dandelion root are well-tolerated long-term. Consult a physician if you have GERD, kidney disease, or are on blood thinners.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Bloat worth the price vs alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At $1.47 per serving, Arrae Bloat is considerably more expensive than broader-spectrum enzyme alternatives: NOW Super Enzymes costs ~$0.19/serving and covers more enzyme types. The premium reflects branding, packaging, and the organic certification — not superior clinical evidence. If budget matters, alternatives deliver comparable or broader enzyme coverage for a fraction of the cost.",
      },
    },
    {
      "@type": "Question",
      name: "Does Arrae Bloat help with IBS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arrae markets Bloat for IBS symptoms and cites a study showing a 74% reduction in 'all IBS symptoms'. However, that figure comes from the same 35-person industry-funded study with no control group, combining both Bloat and Calm products. There is no standalone published RCT for Arrae Bloat and IBS. Ginger and peppermint have individual evidence for IBS relief, but neither is optimally dosed here for that purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arrae Bloat vegan and gluten-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All six active ingredients are certified organic. The capsule shell is hypromellose (plant-based, not gelatin). The product is certified vegan, kosher, gluten-free, and non-GMO. The only ingredient is hypromellose as an inactive — there are no fillers, binders, or synthetic additives.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results from Arrae Bloat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arrae claims relief in under 1 hour for acute bloating. In the Citrus Labs study, 77% of participants reported symptom improvement within 1–2 hours. For consistent daily benefit, most user reviews suggest 2–4 weeks of regular use before noticing a baseline change in bloating frequency. Individual results depend heavily on the cause of your bloating — dietary, hormonal, or gut-motility related.",
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
    verdict: "Best budget creatine in USA — pure, clean, affordable.",
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

// ── Product image ──────────────────────────────────────────────────────────
const PRODUCT_IMG = "/products/Arrae-Bloat.webp";

// ── Page ───────────────────────────────────────────────────────────────────

export default function ArraeBloatReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home",       href: "/" },
              { label: "Reviews",    href: "/reviews" },
              { label: "Gut Health", href: "/category/gut-health" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>
                  {crumb.label}
                </Link>
                {i < arr.length - 1 && <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Arrae Bloat</span>
          </div>
        </div>

        {/* 2. Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #1A0F08 0%, #2C1A10 50%, #1A0F08 100%)", borderBottom: "1px solid #E4E8E5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,169,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,106,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Pill row — hidden on mobile */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-054</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(212,201,184,0.2)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0F7A5A", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>
                  Arrae
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A", fontSize: "0.85em" }}>Bloat</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Six organic herbs and enzymes, clean label, no fillers. But ginger is underdosed, five of six ingredient amounts are hidden, and the headline study had no control group. Here&apos;s what the evidence actually shows.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    href="https://amzn.to/4wZ3tCG"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
                  >
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link
                    href="/methodology"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.25)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}
                  >
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              {/* Product image — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 200 }}>
                  <Image
                    src={PRODUCT_IMG}
                    alt="Arrae Bloat capsules bottle"
                    fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 8px 40px rgba(196,98,45,0.4))" }}
                  />
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
                <Star key={i} size={12} fill="#0F7A5A" color="#0F7A5A" />
              ))}
              {Array.from({ length: 10 - editorialScore }, (_, i) => (
                <Star key={i} size={12} fill="none" color="#0F7A5A" />
              ))}
              <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", marginLeft: 6 }}>
                {editorialScore}/10
              </span>
            </div>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>REV-2026-054</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Digestive Enzymes · Gut Health</span>
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>·</span>
            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>May 30, 2026</span>
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #E4E8E5, #0F7A5A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#FFFFFF", flexShrink: 0 }}>F</div>
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
          <div style={{ padding: "8px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#586259", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>
              Affiliate disclosure: Amazon links earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0F7A5A", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC — no border, marginTop only */}
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
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 10 }}>FSP Score · 7/10</p>
                  <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.8, marginBottom: 0 }}>
                    Arrae Bloat is a clean, organic digestive supplement with sensible ingredients and zero fillers. The ginger is genuinely useful — it just isn&apos;t dosed high enough to match what clinical trials used. Five of six ingredient amounts are hidden in a proprietary blend. The headline clinical data comes from a 35-person, open-label, industry-funded study with no control group, and the &quot;86% bloating reduction&quot; figure mixes in Calm as well. For people who want a short, clean-label herb-and-enzyme capsule after meals and aren&apos;t price-sensitive, it&apos;s a reasonable option. If you want transparency on every dose, or value-for-money over branding, there are better choices.
                  </p>
                </div>

                {/* 5-pillar grid */}
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

              {/* Mobile product card — block on mobile, hidden sm+ */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
                  {/* Dark header with product image */}
                  <div style={{ background: "linear-gradient(145deg, #1A0F08 0%, #2C1A10 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(196,98,45,0.15)", border: "1px solid rgba(196,98,45,0.35)", borderRadius: 20, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A" }}>
                      <ShieldCheck size={10} /> cGMP Certified
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image
                        src={PRODUCT_IMG}
                        alt="Arrae Bloat capsules"
                        fill
                        style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(196,98,45,0.5))" }}
                      />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F6F8F6)" }} />
                  </div>
                  {/* Card body */}
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 4 }}>Arrae</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Bloat Capsules</p>
                    {/* 3 key stats */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #F2F8F4", borderBottom: "1px solid #F2F8F4" }}>
                      {[
                        { val: `${editorialScore}/10`, label: "FSP Score" },
                        { val: "220mg",               label: "Ginger"    },
                        { val: "1,300mg",              label: "Per Serve" },
                      ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#0F7A5A", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Price + CTA */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 2 }}>Price / 30 caps</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$22.00</p>
                      </div>
                      <a href="https://amzn.to/4wZ3tCG" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 02 What Is Arrae Bloat? */}
              <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  What Is Arrae Bloat?
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  Arrae Bloat is a six-ingredient digestive capsule in the <Link href="/category/gut-health" style={{ color: "#0F7A5A", textDecoration: "none" }}>gut health</Link> category, targeting post-meal bloating, gas, and general gut discomfort. It launched in March 2020 as Arrae&apos;s first product and remains their flagship. The brand was founded by Siff Haider and Nish Samantray — a husband-and-wife team who built it to nine figures in revenue over five years, largely through social media and influencer reach.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  The formula contains <Link href="/ingredients/ginger" style={{ color: "#0F7A5A", textDecoration: "none" }}>ginger root extract</Link>, dandelion root, lemon balm, peppermint leaf, bromelain (from pineapple), and slippery elm inner bark — all organic. Total active content per 2-capsule serving: 1,300mg. The capsule itself is hypromellose (vegan). Nothing else.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  It is positioned as a premium, aesthetically-forward supplement — glass jar, clean design, meant to sit on a counter rather than be hidden in a cabinet. The pricing ($22 for 30 caps) reflects that positioning. It is sold at GNC, Vitamin Shoppe, Ulta, Amazon, and Walmart.
                </p>
              </section>

              {/* § 03 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Score Breakdown
                </h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-054" />
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
                        { name: "Organic Ginger Root Extract",           amount: "220mg",    clinical: "1,000–2,000mg" },
                        { name: "Organic Proprietary Blend (5 actives)", amount: "1,080mg",  clinical: "—"             },
                        { name: "  ↳ Organic Dandelion Root Extract",    amount: "Undisclosed", clinical: "—"          },
                        { name: "  ↳ Organic Lemon Balm Herb Top",       amount: "Undisclosed", clinical: "—"          },
                        { name: "  ↳ Organic Peppermint Leaf Extract",   amount: "Undisclosed", clinical: "200–400mg"  },
                        { name: "  ↳ Organic Bromelain",                 amount: "Undisclosed", clinical: "—"          },
                        { name: "  ↳ Organic Slippery Elm Bark",         amount: "Undisclosed", clinical: "—"          },
                        { name: "Total Active Per 2-Cap Serving",        amount: "1,300mg",  clinical: "—"             },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-hanken), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", color: row.amount === "Undisclosed" ? "#586259" : "#1A1714" }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            {row.clinical !== "—" ? (
                              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                                {row.clinical}
                              </span>
                            ) : (
                              <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", marginTop: 10 }}>
                  Other Ingredients: Hypromellose (Capsule) only · Serving Size: 2 capsules · Servings Per Container: 15
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginTop: 16 }}>
                  The formula has two disclosed numbers and a significant problem: only ginger (220mg) and the total proprietary blend (1,080mg) are on the label. You get a 1,300mg supplement with one known dose and five unknown ones. The ginger dose is roughly 10–20% of what the evidence supports for meaningful GI effect — clinical IBS and bloating trials use 1,000–2,000mg daily.
                </p>
              </section>

              {/* § 06 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Ingredient Breakdown
                </h2>

                {([
                  {
                    name: "Ginger (Zingiber officinale) — 220mg",
                    link: "/ingredients/ginger",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Underdosed",
                    body: "Ginger accelerates gastric emptying, reduces nausea, and has anti-inflammatory gingerol compounds. Multiple RCTs support gut motility benefit. The effective dose in trials: 1,000–2,000mg daily. At 220mg per serving, Arrae delivers a fraction of that. Whether this sub-clinical dose does anything meaningful is genuinely unclear.",
                  },
                  {
                    name: "Bromelain (pineapple enzyme) — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Plausible but unquantified",
                    body: "Bromelain is a cysteine protease that breaks down proteins in the gut. It is absorbed orally and biologically active. There is mechanistic rationale for post-meal protein digestion support. However, independent human RCTs specifically for bloating are lacking. Without knowing how much is in the blend, it is impossible to assess dosing adequacy.",
                  },
                  {
                    name: "Peppermint Leaf Extract — dose undisclosed",
                    link: null,
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Right ingredient, wrong form",
                    body: "The strongest IBS evidence is for enteric-coated peppermint oil capsules (0.2–0.4mL, three times daily) — not peppermint leaf extract. Peppermint leaf extract contains menthol, but the dose needed for smooth-muscle relaxation and its bioavailability in leaf form is not well established. Reasonable inclusion; oil form has stronger evidence.",
                  },
                  {
                    name: "Dandelion Root Extract — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Traditional use, weak clinical data",
                    body: "Dandelion root has diuretic and mild prebiotic properties. Small studies show it increases urine output. Arrae claims it 'improves liver health' and 'removes excess water.' The diuretic effect is mechanistically plausible but evidence at supplement doses is thin. Its inclusion for bloating related to water retention is reasonable.",
                  },
                  {
                    name: "Lemon Balm (Melissa officinalis) — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Emerging gut-brain axis data",
                    body: "Lemon balm has anxiolytic and gut-relaxant effects via GABA-A receptor activity. Cases et al. (2011, Mediterranean Journal of Nutrition) showed lemon balm reduced GI symptoms in functional dyspepsia. No independent human trials exist specifically for lemon balm and bloating. Mechanism is plausible given the gut-brain connection in IBS.",
                  },
                  {
                    name: "Slippery Elm Inner Bark — dose undisclosed",
                    link: null,
                    evidence: "limited" as EvidenceLevel,
                    verdict: "Mucilage effect, minimal RCT data",
                    body: "Slippery elm forms a mucilage coating in the GI tract, traditionally used for irritation and inflammation. A 2002 Altern Ther Health Med study found a formula including slippery elm improved IBS-constipation symptoms. Isolated slippery elm human RCT data is essentially absent. Its inclusion is traditional rather than strongly evidence-based.",
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
                        <span style={{ padding: "3px 9px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
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
                    { label: "cGMP Certified Facility",     status: "pass"    as const },
                    { label: "FTIR Identity Testing",        status: "partial" as const },
                    { label: "Heavy Metal Testing",          status: "partial" as const },
                    { label: "Microbiological Analysis",     status: "partial" as const },
                    { label: "NSF / USP Certified",          status: "fail"    as const },
                    { label: "Informed Sport / BSCG",        status: "fail"    as const },
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
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: styles.color, margin: 0 }}>{styles.label}</p>
                        </div>
                        <p style={{ fontSize: 12, color: "#3C3530", margin: 0, lineHeight: 1.4 }}>{cert.label}</p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                  Arrae reports FTIR identity testing, heavy metal analysis, and microbiological testing per batch — but these are brand self-reports. No independent certifying body (NSF, USP, BSCG) publishes or verifies these results. NSF certification specifically verifies that what is on the label is present at the stated dose. Batch COA testing confirms absence of contamination and basic identity — not label accuracy. If you need certified label accuracy, look elsewhere.
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
                    { label: "Arrae's recommendation",   value: "2–3 caps after meals"              },
                    { label: "Timing",                   value: "Post-meal or before if prone"       },
                    { label: "Daily use",                value: "Safe for daily use"                 },
                    { label: "Capsule size",             value: "Large — some users struggle with 3" },
                    { label: "Can open capsules?",       value: "Yes — mix in warm water"            },
                    { label: "Storage",                  value: "Cool, dry place. No refrigeration"  },
                  ].map((row) => (
                    <div key={row.label} style={{ padding: "12px 14px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                  One practical note from user reviews: the capsules are on the larger side — some people find swallowing three at once uncomfortable. Arrae confirms the capsule contents can be opened and dissolved in warm water without losing efficacy. The powder has a mild ginger taste.
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
                        {["Product", "Price/serve", "Enzymes", "Herbs", "3rd-party cert", "Our take"].map((h) => (
                          <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", textAlign: "left", borderBottom: "1px solid #3C3530" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Arrae Bloat",                    price: "$1.47", enzymes: "1 (bromelain)",    herbs: "5 organic",                    cert: "None",            take: "Clean label, underdosed ginger, pricey" },
                        { product: "NOW Super Enzymes",               price: "$0.19", enzymes: "4 (broad spec)",   herbs: "None",                          cert: "NPA A-rated GMP", take: "Best value, no herb support" },
                        { product: "Physician's Choice (16 enzymes)", price: "$0.43", enzymes: "16 + probiotics",  herbs: "Ginger, peppermint",            cert: "None",            take: "Broader spectrum, similar price point" },
                        { product: "Enzymedica Digest Gold",          price: "$0.89", enzymes: "10+ Thera-blend",  herbs: "None",                          cert: "None",            take: "Highest enzyme potency, no herbs" },
                        { product: "Perelel Digestive Enzyme",        price: "$1.00", enzymes: "Multi-enzyme",     herbs: "Ginger, licorice, fennel, lemon balm", cert: "3rd-party tested", take: "Closest competitor — similar concept, tested" },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: i === 0 ? "#0F7A5A" : "#3C3530", fontWeight: i === 0 ? 600 : 400, whiteSpace: "nowrap" }}>{row.product}</td>
                          <td style={{ padding: "10px 14px", fontSize: 13, color: "#3C3530", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43" }}>{row.enzymes}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43" }}>{row.herbs}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", whiteSpace: "nowrap" }}>{row.cert}</td>
                          <td style={{ padding: "10px 14px", fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{row.take}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.6 }}>
                  Arrae Bloat&apos;s closest competitor on concept is Perelel — similar organic herbs, similar target (post-meal comfort), similar price, but with third-party testing. On enzymes alone, NOW Super Enzymes delivers broader coverage at 10× lower cost. Prices verified May 2026.
                </p>
              </section>

              {/* § 11 Products at a Glance */}
              <section id="products" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                  Products at a Glance
                </h2>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 20 }}>
                  Arrae Bloat reviewed here. If you want a broader-spectrum enzyme option, Physician&apos;s Choice is the best direct trade-off on cost and coverage.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard
                    name="Bloat Capsules"
                    brand="Arrae"
                    category="Digestive Enzymes"
                    score={7}
                    priceUSD="$22 / 30 caps"
                    priceINR="N/A"
                    tags={["Organic", "Vegan", "Filler-Free"]}
                    buyUrl="https://amzn.to/4wZ3tCG"
                    buyLabel="Buy on Amazon"
                    reviewSlug="arrae-bloat"
                    image="Arrae-Bloat.webp"
                    bgFrom="#1A0F08"
                    bgTo="#2C1A10"
                    accent="#0F7A5A"
                    featured={true}
                  />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
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

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Safety &amp; Side Effects
                </h2>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 14 }}>
                  At the doses in Arrae Bloat, all six ingredients have generally favourable safety profiles. No serious adverse event reports are on file with the FDA as of May 2026. Some users report mild nausea or stomach discomfort on first use — particularly at 3 capsules with a heavy meal.
                </p>
                {[
                  { heading: "Who should be cautious", points: [
                    "People on blood thinners (warfarin) — ginger and bromelain both have mild antiplatelet activity at higher doses",
                    "People with GERD or acid reflux — peppermint can relax the lower esophageal sphincter, potentially worsening reflux",
                    "Kidney disease — dandelion root is a diuretic; discuss with a physician",
                    "Pregnancy — ginger at supplement doses has not been established as safe in pregnancy; consult your doctor",
                  ]},
                  { heading: "Generally safe for", points: [
                    "Healthy adults with post-meal bloating or IBS-type symptoms",
                    "Daily or as-needed use — no known tolerance or dependency risk",
                    "People with nut, gluten, or dairy restrictions — this product is free of all three",
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="active herbs and enzymes" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 20 }}>
                  {[
                    { option: "30 caps (one-time)",     price: "$22.00",  perServe: "$1.47 at 2 caps"  },
                    { option: "60 caps Amazon",          price: "~$36",    perServe: "$1.20 at 2 caps"  },
                    { option: "Subscription (25% off)", price: "~$16.50", perServe: "$1.10 at 2 caps"  },
                    { option: "GNC retail",              price: "$22",     perServe: "Same as direct"    },
                  ].map((row) => (
                    <div key={row.option} style={{ padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#586259", marginBottom: 5 }}>{row.option}</p>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{row.price}</p>
                      <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{row.perServe}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Where to Buy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { retailer: "Amazon",          url: "https://amzn.to/4wZ3tCG", note: "Best for Prime shipping, frequent deals",            recommended: true  },
                    { retailer: "arraeworld.com",  url: "https://www.arraeworld.com", note: "25% off with subscription, glass jar direct",      recommended: false },
                    { retailer: "GNC",             url: "https://www.gnc.com",      note: "In-store and online, same price as direct",          recommended: false },
                    { retailer: "Vitamin Shoppe",  url: "https://www.vitaminshoppe.com", note: "Often runs member discounts (15–20% off)",     recommended: false },
                    { retailer: "Ulta Beauty",     url: "https://www.ulta.com",     note: "Wellness section — good for loyalty point users",    recommended: false },
                    { retailer: "Walmart",         url: "https://www.walmart.com",  note: "Available in-store and online. Standard pricing.",   recommended: false },
                  ].map((r) => (
                    <div key={r.retailer} style={{ padding: "14px 16px", backgroundColor: r.recommended ? "#F6F8F6" : "#FFFFFF", border: `1px solid ${r.recommended ? "#0F7A5A" : "#E4E8E5"}`, borderRadius: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.08em", fontWeight: 700, color: "#1A1714", margin: 0 }}>{r.retailer}</p>
                        {r.recommended && <span style={{ fontSize: 9, padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.12)", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 10, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em" }}>TOP PICK</span>}
                      </div>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5, marginBottom: 8, margin: "0 0 8px" }}>{r.note}</p>
                      <a href={r.url} target="_blank" rel="nofollow noopener noreferrer"
                        style={{ fontSize: 11, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                        Shop now →
                      </a>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.6 }}>
                  To verify authenticity, buy only from authorised retailers above. Counterfeit listings have appeared on third-party Amazon sellers — check that the sold-by is a verified Arrae seller or Amazon itself. Prices verified May 2026.
                </p>
              </section>

              {/* § 16 FAQ — details/faq-icon toggle pattern */}
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
                        <span className="faq-icon" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#0F7A5A" }}>
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
                    background: #0F7A5A;
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
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>FSP · 7/10 · Arrae Bloat</p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        Arrae Bloat is exactly what it says it is: a short, clean-label capsule with six organic herbs and enzymes. The filler-free formula, organic certifications, and readable ingredient list are genuine positives in a category full of over-stuffed proprietary blends.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85, marginBottom: 14 }}>
                        But the marketing outpaces the evidence. Ginger — the most studied and most important ingredient — is dosed at 220mg when trials use 1,000–2,000mg. Five of six ingredient amounts are invisible. The study Arrae calls proof was 35 people with no control group, funded by a company whose business is running product trials for brands. And the headline percentage wasn&apos;t even for Bloat alone.
                      </p>
                      <p style={{ fontSize: 15, color: "#6B7770", lineHeight: 1.85 }}>
                        If you want a clean, short-ingredient digestive supplement and price is not the deciding factor, Arrae Bloat is a defensible choice. If you want maximum transparency, independent certification, or value-for-money on enzymes specifically — look at Perelel (tested, similar concept), <Link href="/reviews/myprotein-creatine-monohydrate" style={{ color: "#0F7A5A", textDecoration: "none" }}>Physician&apos;s Choice</Link> (broader enzymes, fraction of the price), or NOW Super Enzymes ($0.19/serving).
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <ReviewScoreBadge rating={editorialScore} size="lg" />
                      <a
                        href="https://amzn.to/4wZ3tCG"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
                      >
                        Buy on Amazon <ExternalLink size={13} />
                      </a>
                      <p style={{ fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", marginTop: 8 }}>$22 · 30 caps · arraeworld.com</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research References — always last inside article */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Research References
                </h2>
                <div style={{ padding: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      {
                        text: "Nikkhah Bodagh M et al. (2019). Ginger in gastrointestinal disorders: A systematic review of clinical trials. Food Science & Nutrition. 7(1):96–108.",
                        url: "https://doi.org/10.1002/fsn3.807",
                      },
                      {
                        text: "ScienceDirect (2024). Preventive and therapeutic effects of ginger on bowel disease: A review of clinical trials. Current Research in Food Science. 8:100099.",
                        url: "https://doi.org/10.1016/j.crfs.2024.100099",
                      },
                      {
                        text: "Lohsiriwat S et al. (2010). Effect of ginger on lower esophageal sphincter pressure. Journal of the Medical Association of Thailand. 93(3):366–372.",
                        url: "https://pubmed.ncbi.nlm.nih.gov/20370896/",
                      },
                      {
                        text: "Cappello G et al. (2007). Peppermint oil in the treatment of irritable bowel syndrome: a prospective double blind placebo-controlled randomized trial. Digestive and Liver Disease. 39(6):530–536.",
                        url: "https://doi.org/10.1016/j.dld.2007.02.006",
                      },
                      {
                        text: "Cases J et al. (2011). Pilot trial of Melissa officinalis L. leaf extract in the treatment of volunteers suffering from mild-to-moderate anxiety disorders and sleep disturbances. Mediterranean Journal of Nutrition and Metabolism. 4(3):211–218.",
                        url: "https://doi.org/10.1007/s12349-010-0045-4",
                      },
                      {
                        text: "Braun JM et al. (2002). Use of herbal medicines by patients with irritable bowel syndrome. Alimentary Pharmacology & Therapeutics. 16(7):1445–1452.",
                        url: "https://doi.org/10.1046/j.1365-2036.2002.01287.x",
                      },
                      {
                        text: "Citrus Labs (2022). Study to Evaluate the Efficacy of Arrae's Bloat & Calm Alchemy Capsules. ClinicalTrials.gov Identifier: NCT05197413.",
                        url: "https://clinicaltrials.gov/study/NCT05197413",
                      },
                      {
                        text: "KGK Science (registered 2025). Clinical Trial to Investigate the Safety and Efficacy of Bloat on Gas and Bloating in Healthy Women. ClinicalTrials.gov Identifier: NCT07370740.",
                        url: "https://clinicaltrials.gov/study/NCT07370740",
                      },
                      {
                        text: "Holtmann G et al. (2003). Efficacy of artichoke leaf extract in the treatment of patients with functional dyspepsia: a six-week placebo-controlled, double-blind, multicentre trial. Alimentary Pharmacology & Therapeutics. 18(11-12):1099–1105.",
                        url: "https://doi.org/10.1046/j.1365-2036.2003.01765.x",
                      },
                      {
                        text: "Shekelle PG et al. (2003). Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: a meta-analysis. JAMA. 289(12):1537–1545.",
                        url: "https://doi.org/10.1001/jama.289.12.1537",
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

        {/* Related Reviews — outside container-pad */}
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
