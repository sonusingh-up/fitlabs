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
  title: "Nested Naturals Luna Review (2026) — Rated 7/10",
  description:
    "Luna Sleep Aid review: 8 ingredients fully disclosed, L-theanine 200mg, $0.73/serving. Best-value transparent sleep supplement. 6mg melatonin is too high. FSP 7/10.",
  alternates: { canonical: "/reviews/nested-naturals-luna" },
  openGraph: {
    title: "Nested Naturals Luna Review (2026) — Best Value, One Concern",
    description:
      "Luna discloses every dose, costs just $0.73/serving, and carries a lifetime money-back guarantee. The 6mg melatonin is the honest caveat for long-term users.",
    url: "https://fitlabreviews.com/reviews/nested-naturals-luna",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.0,
      notes:
        "L-Theanine 200mg is clinical. GABA 100mg is reasonable. Valerian 150mg, chamomile 150mg, lemon balm 100mg, and passion flower 100mg are all below their most-evidenced RCT doses (typically 2–4× higher). The formula breadth is good; individual doses are conservative. The principal concern is melatonin at 6mg — a pharmacological dose rather than the physiological 0.5–1mg supported by Brzezinski et al. (2005).",
    },
    {
      pillar: "transparency",
      score: 9.0,
      notes:
        "All eight ingredients and their exact doses are fully disclosed. No proprietary blends. Simple, clean label with minimal other ingredients (vegetable cellulose capsule, rice flour). This is exemplary label transparency for the price point.",
    },
    {
      pillar: "verification",
      score: 6.0,
      notes:
        "Luna states 'third-party tested' but does not name the testing organisation, share a COA link, or hold a named certification (NSF, Informed Choice, USP, Informed Sport, Clean Label Project). Vegan and GMO-free claims are present. The unnamed testing status is better than nothing but well below the transparency standard of named-certifier products.",
    },
    {
      pillar: "value",
      score: 9.0,
      notes:
        "At $21.95 / 30 servings ($0.73/serving), Luna is the best value fully-transparent sleep supplement on the market. Lifetime money-back guarantee is exceptional. For consumers wanting a complete-label product at an accessible price, the value proposition is unmatched.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Two capsule serving is simple and easy. Available widely on Amazon with Prime delivery. The 6mg melatonin may cause next-morning grogginess in sensitive individuals — a practical downside for early-rising users or those sensitive to higher melatonin doses.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Full label transparency — all 8 doses disclosed",
      detail: "Every ingredient and exact milligram amount is published. No proprietary blends. L-Theanine 200mg, Valerian 150mg, Chamomile 150mg, Passion Flower 100mg, Lemon Balm 100mg, Hops 100mg, GABA 100mg, Melatonin 6mg.",
    },
    {
      type: "green",
      label: "L-Theanine 200mg — hits clinical target",
      detail: "200mg L-theanine directly matches the dose used in Lyon et al. (2011), which found significant sleep quality improvement. At the clinical dose, this is the strongest performer in the formula.",
    },
    {
      type: "green",
      label: "Lifetime money-back guarantee",
      detail: "100% lifetime money-back guarantee with no questions asked. This is unusually generous and indicates the brand's confidence in the product.",
    },
    {
      type: "green",
      label: "$0.73/serving — best-value transparent sleep supplement",
      detail: "Full label, 8 ingredients, vegan, GMO-free, third-party tested — and at $0.73/serving it undercuts every comparably transparent competitor by a significant margin.",
    },
    {
      type: "red",
      label: "6mg melatonin — pharmacological, not physiological",
      detail: "Brzezinski et al. (2005) meta-analysis found 0.5–1mg melatonin produces physiological blood levels. 6mg is 6–12× above physiological range. Chronic use at this dose suppresses endogenous melatonin production, creates tolerance risk, and commonly causes next-morning grogginess in sensitive users. This is the formulation's most significant concern.",
      deduction: 0.3,
    },
    {
      type: "red",
      label: "'Third-party tested' — certifier unnamed",
      detail: "Luna states third-party testing but does not name the organisation, provide a COA, or hold a named certification. 'Third-party tested' without a named lab is an unverifiable claim.",
      deduction: 0.1,
    },
  ],
  claimAudit: [
    {
      claim: '"Get Back to Normal, Healthy Sleep"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes: "Plausible for mild sleep difficulties. The combination of L-theanine (200mg), GABA (100mg), and melatonin (6mg) will produce sedation in most users. 'Normal, healthy sleep' implies restoration of natural sleep architecture — melatonin at 6mg may actually distort REM patterns in some users (Turek & Gillette, 2004).",
    },
    {
      claim: '"Wake Up Refreshed"',
      verdict: "context-dependent",
      evidence: "limited",
      notes: "Plausible at lower doses. At 6mg melatonin, next-morning sedation ('sleep inertia') is a well-documented side effect in sensitive individuals, particularly those needing to wake early. This claim is more credible for formulas using physiological melatonin doses (0.5–1mg).",
    },
    {
      claim: '"Non-habit forming"',
      verdict: "supported",
      evidence: "moderate",
      notes: "The herbal ingredients (valerian, chamomile, lemon balm, hops, passion flower) and L-theanine have no established chemical dependency profile. Melatonin at 6mg carries tolerance risk with chronic use — not addiction, but endogenous suppression requiring dose escalation over time.",
    },
    {
      claim: '"Set a Healthier Sleep Pattern"',
      verdict: "context-dependent",
      evidence: "limited",
      notes: "Melatonin can anchor circadian timing (Lewy et al., 1998) and L-theanine supports sleep architecture quality (Lyon et al., 2011). However, high-dose melatonin (6mg) may disrupt natural circadian signalling rather than reinforce it — the mechanism for 'healthier patterns' is better served at 0.5–1mg.",
    },
    {
      claim: '"Third-Party Tested"',
      verdict: "context-dependent",
      evidence: "insufficient",
      notes: "Luna states third-party testing without naming the organisation, providing a COA, or specifying what was tested. The claim cannot be independently verified from public information. It is consistent with independent testing but unverifiable.",
    },
  ],
  valueMetric: {
    pricePerServing: 0.73,
    primaryActiveGrams: 0.2,
    pricePerGramActive: 3.65,
    categoryAvgPricePerGram: 3.50,
    efficiency: "at",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is Luna?" },
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
      name: "Does Luna Sleep Aid actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most users, yes — the sedative combination of 6mg melatonin, L-theanine, valerian, chamomile, passion flower, lemon balm, and hops will meaningfully reduce sleep latency and promote sleep. L-theanine at 200mg is the best-evidenced ingredient here (Lyon et al., 2011). The primary concern is the 6mg melatonin dose, which is 6–12× the physiological range and may cause next-morning grogginess in sensitive users or those who need to wake early.",
      },
    },
    {
      "@type": "Question",
      name: "Is 6mg melatonin too much in Luna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For many adults, yes. Brzezinski et al. (2005) and subsequent research established that 0.5–1mg melatonin produces blood levels matching natural nocturnal secretion. 6mg exceeds this by 6–12 fold, creating a pharmacological rather than physiological effect. Short-term, it works. Long-term, 6mg nightly can suppress endogenous melatonin production, increase grogginess on waking, and require dose escalation. Users concerned about this can try cutting to 1 capsule (1 capsule = 3mg melatonin + half doses of all other ingredients) or switch to a lower-melatonin formula.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best thing about Luna Sleep Aid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two things stand out: full label transparency and exceptional value. Every ingredient dose is disclosed — L-Theanine 200mg, Valerian 150mg, Chamomile 150mg, Passion Flower 100mg, Lemon Balm 100mg, Hops 100mg, GABA 100mg, Melatonin 6mg. And at $0.73/serving with a lifetime money-back guarantee, it is the most affordable fully-transparent sleep supplement available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Luna Sleep Aid third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luna states 'third-party tested' on its label but does not name the testing organisation, provide a certificate of analysis, or hold a named certification (NSF, Informed Choice, Clean Label Project, USP, Informed Sport). The claim is unverifiable from public information. It is a weaker transparency position than named-certifier products.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take just one Luna capsule instead of two?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and for users sensitive to melatonin it is worth trying. One capsule delivers 3mg melatonin and half-doses of all other ingredients — still well above the physiological range for melatonin, but a meaningful reduction. There is no stated contraindication to taking 1 capsule.",
      },
    },
    {
      "@type": "Question",
      name: "Does Luna Sleep Aid contain valerian? Will it smell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Luna contains 150mg valerian root. Valerian has a distinctive, pungent sulphurous odour that comes through in capsule products — some users find this noticeable on opening the bottle. The capsule itself contains the smell effectively, but breaking or chewing a capsule would release it. This is normal and not a quality concern.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Luna Sleep Aid take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users report onset within 30–60 minutes. Melatonin at 6mg acts directly and relatively quickly; L-theanine promotes relaxation within 30–45 minutes. Valerian and chamomile have slower onset (60–90 minutes). Take 30–45 minutes before intended sleep time.",
      },
    },
    {
      "@type": "Question",
      name: "Is Luna safe for long-term nightly use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The herbal ingredients and L-theanine are safe for long-term use. The concern is the 6mg melatonin — chronic use at doses above physiological range can suppress your body's own melatonin production. If you plan to use a sleep supplement nightly for months, consider a formulation with 0.5–1mg melatonin (such as Performance Lab Sleep's natural melatonin approach) for better long-term suitability.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Luna lifetime guarantee actually cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nested Naturals states a '100% Money Back Lifetime Guarantee' — no questions asked. This applies even to opened bottles and has no stated expiry window. To claim, contact their customer service with your order details. This is one of the most consumer-friendly guarantee policies in the supplement industry.",
      },
    },
    {
      "@type": "Question",
      name: "How does Luna compare to Performance Lab Sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luna costs $0.73/serving vs Performance Lab Sleep's $1.47/serving. Luna has 8 ingredients (all disclosed) vs Performance Lab's 4. Luna uses 6mg synthetic melatonin; Performance Lab uses no synthetic melatonin. Performance Lab has Clean Label Project certification; Luna has unnamed third-party testing. For value, Luna wins easily. For long-term use without melatonin tolerance risk, Performance Lab Sleep is the better choice.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/nested-naturals-luna#review",
  name: "Nested Naturals Luna Sleep Aid — Fitlabreviews FSP Review",
  reviewBody:
    "Luna Sleep Aid is an 8-ingredient sleep supplement with full label disclosure, L-theanine 200mg, and a lifetime money-back guarantee at $0.73/serving. The 6mg melatonin is above the physiological range and is the primary concern for long-term daily users. FSP v2.1 editorial: 7/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Nested Naturals Luna Sleep Aid",
    brand: { "@type": "Brand", name: "Nested Naturals" },
    category: "Sleep Supplement",
    description: "8-ingredient sleep supplement with L-theanine, valerian, chamomile, melatonin and herbal blend. Full doses disclosed.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "21.95",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/3Sb2LlK",
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
    verdict: "Four ingredients, every dose disclosed, no synthetic melatonin. Clean Label Project certified. The premium transparent option.",
    publishedAt: "2026-05-31",
    figNumber: "060",
  },
  {
    slug: "seed-pm-02",
    title: "Seed PM-02 Sleep + Restore",
    brand: "Seed",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Novel Co-Biotic dual-capsule delivery with 500mcg biphasic melatonin and ashwagandha. Partial dose disclosure. $1.17/serving.",
    publishedAt: "2026-05-31",
    figNumber: "062",
  },
  {
    slug: "yusleep",
    title: "YuSleep Sleep Drops",
    brand: "YuSleep",
    category: "Sleep Supplement",
    rating: 4 as ReviewRating,
    verdict: "Good ingredient selection, zero dose disclosure for 9 of 10 ingredients. No third-party testing. $2.30/serving.",
    publishedAt: "2026-05-31",
    figNumber: "059",
  },
];

export default function LunaSleepReview() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Luna Sleep Aid</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #0A1A12 0%, #060E0A 100%)", position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", whiteSpace: "nowrap" }}>REV-2026-061</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "rgba(242,235,217,0.15)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3D7A5E", whiteSpace: "nowrap" }}>Full Review · FSP Scored · Sleep Supplement</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Nested Naturals<br />
                  <em style={{ fontWeight: 400, color: "#A89880", fontSize: "0.65em" }}>Luna Sleep Aid</em>
                </h1>
                <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Eight ingredients, every dose disclosed, $0.73 a night, lifetime money-back guarantee. The best-value transparent sleep supplement available — with one honest concern about the melatonin dose.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3Sb2LlK" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#3D7A5E", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(242,235,217,0.15)", color: "rgba(242,235,217,0.5)", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/Luna-sleep.webp" alt="Nested Naturals Luna Sleep Aid" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(61,122,94,0.5))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7].map(s => <Star key={s} size={13} fill="#3D7A5E" color="#3D7A5E" />)}
                {[8,9,10].map(s => <Star key={s} size={13} fill="none" color="rgba(61,122,94,0.35)" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.4)", letterSpacing: "0.12em" }}>7 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Nested Naturals" },
            { label: "Category", value: "Sleep Supplement" },
            { label: "Serving", value: "2 vegan capsules" },
            { label: "Servings", value: "30 per bottle" },
            { label: "Price", value: "$21.95 / bottle" },
            { label: "Per Serving", value: "$0.73" },
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
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3D7A5E", marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-061</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>
                        The best-value transparent sleep supplement on the market. One honest concern: the 6mg melatonin dose is too high for long-term daily use.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#3D7A5E", lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.75 }}>
                    Luna gets a lot right. Every dose is disclosed. L-theanine hits the clinical target at 200mg. The price at $0.73/serving is unbeatable for a fully-transparent formula. The lifetime guarantee is the most consumer-friendly policy in the category. If you want a complete-label sleep supplement at an accessible price, Luna is hard to beat. The 6mg melatonin is a genuine concern for long-term users — it is pharmacological rather than physiological, and chronic high-dose melatonin suppresses endogenous production over time. We rate it 7/10 and recommend using 1 capsule (3mg melatonin) if you plan to use it nightly.
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
                  <div style={{ background: "linear-gradient(145deg, #0A1A12 0%, #060E0A 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(61,122,94,0.15)", border: "1px solid rgba(61,122,94,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6AAF8E" }}>
                      <ShieldCheck size={10} /> Full Label · Lifetime Guarantee
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
                      <Image src="/products/Luna-sleep.webp" alt="Nested Naturals Luna" fill style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(61,122,94,0.5))" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Nested Naturals</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Luna Sleep Aid</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "200mg", label: "L-Theanine" }, { val: "8", label: "Ingredients" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#3D7A5E", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$21.95</p>
                      </div>
                      <a href="https://amzn.to/3Sb2LlK" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#3D7A5E", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is Luna */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Luna Sleep Aid?</h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  Luna is a sleep supplement from Nested Naturals, a Canadian supplement brand founded in 2014. It combines eight ingredients in a two-capsule serving: <Link href="/ingredients/l-theanine" style={{ color: "#3D7A5E", textDecoration: "none" }}>L-theanine</Link> 200mg, valerian root 150mg, chamomile 150mg, passion flower 100mg, lemon balm 100mg, hops 100mg, GABA 100mg, and melatonin 6mg.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  The formula takes a broad-spectrum herbal approach, combining the best-evidenced non-melatonin sleep ingredients into a single capsule at an accessible price. Every dose is fully disclosed — unusual at this price point. The product is vegan, gluten-free, and GMO-free.
                </p>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75 }}>
                  Luna has accumulated strong customer reviews on Amazon (4.9 stars, 150+ reviews) and carries a lifetime money-back guarantee. Nested Naturals states the product is third-party tested but does not name the certifying organisation publicly.
                </p>
              </section>

              {/* § 3 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-061" />
              </section>

              {/* § 4 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 5 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 2 vegan capsules · Servings per container: 30</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "40%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "25%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9", width: "35%" }}>Clinical Range / Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "L-Theanine", amount: "200 mg", clinical: "100–400 mg", ok: true },
                        { name: "Valerian Root", amount: "150 mg", clinical: "300–600 mg", ok: false },
                        { name: "Chamomile (Whole Plant Extract)", amount: "150 mg", clinical: "200–400 mg", ok: false },
                        { name: "Passion Flower (Whole Plant Extract)", amount: "100 mg", clinical: "90–400 mg", ok: true },
                        { name: "Lemon Balm (Whole Plant Extract)", amount: "100 mg", clinical: "300–600 mg", ok: false },
                        { name: "Hops Flower Extract", amount: "100 mg", clinical: "Low-dose typical", ok: true },
                        { name: "GABA", amount: "100 mg", clinical: "100–300 mg", ok: true },
                        { name: "Melatonin", amount: "6 mg", clinical: "0.5–1 mg (physio)", ok: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: !row.ok ? "#8B3A2C" : "#2D6A4F" }}>
                            {row.amount}
                            {!row.ok && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: 4, verticalAlign: "middle"}}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                          </td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: row.ok ? "rgba(45,106,79,0.10)" : "rgba(139,115,85,0.10)", border: `1px solid ${row.ok ? "rgba(45,106,79,0.25)" : "rgba(139,115,85,0.25)"}`, borderRadius: 20, fontSize: 11, color: row.ok ? "#2D6A4F" : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                              {row.clinical}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Other ingredients: Vegetable Cellulose (capsule), Rice Flour.{" "}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",verticalAlign:"middle",marginRight:4}}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>{" "}6mg melatonin exceeds physiological range (0.5–1mg).
                </p>
              </section>

              {/* § 6 Ingredient Breakdown */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Breakdown</h2>
                {[
                  { name: "L-Theanine — 200 mg", warn: false, evidence: "moderate" as EvidenceLevel, verdict: "Clinical dose — the formula's strongest ingredient", body: "Lyon et al. (2011) used 200mg L-theanine and found significant improvements in sleep quality in boys with ADHD. Hidese et al. (2019) confirmed 200–400mg reduces stress and improves sleep quality in adults. At 200mg, Luna hits the clinical target. L-theanine promotes alpha brainwave activity without sedation — it works for sleep onset and quality improvement without causing grogginess." },
                  { name: "Melatonin — 6 mg", warn: true, evidence: "strong" as EvidenceLevel, verdict: "Works but overdosed — concern for long-term daily use", body: "Melatonin at 6mg will reliably cause sleep onset in most users. The problem is the dose. Brzezinski et al. (2005) meta-analysis established 0.5–1mg as the range matching physiological nocturnal levels. At 6mg — 6 to 12 times above physiological range — chronic use suppresses endogenous melatonin production (Nordlund & Lerner, 1977), may disrupt natural circadian signalling, and commonly causes sleep inertia (grogginess on waking). For occasional use, 6mg is broadly safe. For nightly use over months, we'd recommend either halving to 1 capsule or switching to a lower-dose product." },
                  { name: "Valerian Root — 150 mg", warn: false, evidence: "moderate" as EvidenceLevel, verdict: "Underdosed — relevant but below RCT threshold", body: "Valerian is the most-studied sleep herb. Leathwood et al. (1982) used 400–900mg aqueous extract and found reduced sleep latency. Bent et al. (2006) systematic review found inconsistent but generally positive results at 300–600mg. Luna's 150mg is below the doses showing consistent benefit, but combined with chamomile and hops may contribute synergistically." },
                  { name: "Chamomile — 150 mg", warn: false, evidence: "limited" as EvidenceLevel, verdict: "Traditional sedative — limited high-quality human data", body: "Chamomile (Matricaria recutita) contains apigenin, which binds GABA-A benzodiazepine receptors. Zick et al. (2011) found chamomile extract 270mg improved sleep quality in postpartum women. At 150mg, Luna's dose is below tested ranges. The effect at 150mg is likely anxiolytic and mild — useful as part of the blend, not as a primary driver." },
                  { name: "Passion Flower — 100 mg", warn: false, evidence: "limited" as EvidenceLevel, verdict: "Emerging evidence for anxiety reduction — dose is reasonable", body: "Passion flower (Passiflora incarnata) modulates GABA-A receptors. Ngan & Conduit (2011) found 5mg/kg/day passionflower tea improved subjective sleep quality. 100mg extract is in line with typical capsule products. Effect is primarily anxiolytic, reducing pre-sleep rumination rather than acting as a direct sleep inducer." },
                  { name: "Lemon Balm — 100 mg", warn: false, evidence: "moderate" as EvidenceLevel, verdict: "Underdosed — 3–6× below most-evidenced doses", body: "Cases et al. (2011) used 600mg for insomnia relief. Kennedy et al. (2004) showed 300mg reduced anxiety significantly. Luna's 100mg is well below these benchmarks. Useful as part of the herbal blend, but not a major contributor at this dose." },
                  { name: "Hops Flower Extract — 100 mg", warn: false, evidence: "limited" as EvidenceLevel, verdict: "Traditional sedative — typically combined with valerian in research", body: "Hops (Humulus lupulus) is traditionally combined with valerian for sleep. Schiller et al. (2006) found valerian/hops combination improved sleep quality. Isolated hops data is sparse. The 100mg in Luna is consistent with combination products. Contributes to the formula's sedative profile synergistically." },
                  { name: "GABA — 100 mg", warn: false, evidence: "limited" as EvidenceLevel, verdict: "Modest direct CNS effect — may work via gut-brain axis", body: "Oral GABA's CNS penetration is debated. Hepsomali et al. (2020) reviewed human studies and found modest sleep and anxiety benefits at 100–300mg, possibly via the gut-brain axis rather than direct BBB crossing. Pharma-GABA (fermented) may have superior bioavailability. Luna does not specify the GABA form. At 100mg, contribution is real but modest." },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 7 ? 16 : 0, padding: "18px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: ing.warn ? "#8B3A2C" : "#1A1714", margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
                        {ing.name}
                        {ing.warn && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",flexShrink:0}}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                      </h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3D7A5E", marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 7 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Third-Party Tested", status: true, note: "(Certifier unnamed)" },
                    { label: "Vegan Certified", status: true, note: "" },
                    { label: "GMO-Free", status: true, note: "" },
                    { label: "Gluten-Free", status: true, note: "" },
                    { label: "Named Certifier", status: false, note: "" },
                    { label: "NSF / Informed Choice", status: false, note: "" },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "14px 16px", backgroundColor: item.status ? "rgba(45,106,79,0.06)" : "rgba(139,58,44,0.06)", border: `1px solid ${item.status ? "rgba(45,106,79,0.2)" : "rgba(139,58,44,0.2)"}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ display: "flex", alignItems: "center", color: item.status ? "#2D6A4F" : "#8B3A2C" }}>
                        {item.status
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B3A2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        }
                      </span>
                      <span style={{ fontSize: 12, color: "#2D2926", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}{item.note && <span style={{ color: "#A89880" }}> {item.note}</span>}</span>
                    </div>
                  ))}
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
                  <p style={{ fontSize: 15, color: "#1A1714", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 2 capsules 30 minutes before bedtime.</p>
                </div>
                <div style={{ padding: "20px 24px", backgroundColor: "#FFF5F5", border: "1px solid #F5BFBF", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B3A2C", marginBottom: 10 }}>Our recommendation for long-term users</p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Start with 1 capsule (3mg melatonin) and assess tolerance before moving to 2. If you use Luna nightly for more than 4–8 weeks, consider cycling off for 1–2 weeks periodically to allow endogenous melatonin production to reset. Users who need to wake before 7am should take the full 2-capsule dose earlier (60–75 minutes before bed) to allow melatonin to clear by waking time.
                  </p>
                </div>
              </section>

              {/* § 10 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 620, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["Product", "Melatonin", "Full Label?", "Certification", "$/Serving", "Guarantee"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2EBD9" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Luna (Nested Naturals)", mel: "6 mg", melOk: false, full: "Yes", cert: "Unnamed 3rd party", price: "$0.73", guar: "Lifetime", highlight: true },
                        { product: "Performance Lab Sleep", mel: "None (natural)", melOk: true, full: "Yes", cert: "Clean Label Project", price: "$1.47", guar: "30-day (1st order)", highlight: false },
                        { product: "Seed PM-02", mel: "0.5 mg bioid.", melOk: true, full: "Partial", cert: "ISO 17025", price: "$1.17", guar: "30-day", highlight: false },
                        { product: "YuSleep", mel: "0.9 mg", melOk: true, full: "No (1/10)", cert: "None", price: "$2.30", guar: "60-day", highlight: false },
                        { product: "OLLY Sleep", mel: "5 mg", melOk: false, full: "Partial", cert: "None listed", price: "$0.50", guar: "Standard", highlight: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.highlight ? "rgba(61,122,94,0.06)" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: !row.melOk ? "#8B3A2C" : row.mel.includes("None") ? "#2D6A4F" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600, whiteSpace: "nowrap" }}>{row.mel}</td>
                          <td style={{ padding: "11px 14px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", backgroundColor: row.full === "Yes" ? "rgba(45,106,79,0.10)" : "rgba(139,58,44,0.10)", border: `1px solid ${row.full === "Yes" ? "rgba(45,106,79,0.25)" : "rgba(139,58,44,0.25)"}`, borderRadius: 20, fontSize: 10, color: row.full === "Yes" ? "#2D6A4F" : "#8B3A2C", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.full}</span>
                          </td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.cert}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.highlight ? "#3D7A5E" : "#1A1714", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.price}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>{row.guar}</td>
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
                  <ProductCard name="Luna Sleep Aid" brand="Nested Naturals" category="Sleep" score={7} priceUSD="$21.95 / 30 servings" priceINR="N/A" tags={["Full Label", "Lifetime Guarantee", "$0.73/serve"]} buyUrl="https://amzn.to/3Sb2LlK" buyLabel="Buy on Amazon" reviewSlug="nested-naturals-luna" image="Luna-sleep.webp" bgFrom="#0A1A12" bgTo="#060E0A" accent="#3D7A5E" featured={true} />
                  <ProductCard name="Performance Lab Sleep" brand="Performance Lab" category="Sleep" score={8} priceUSD="$44.00 / 30 servings" priceINR="N/A" tags={["Clean Label Project", "No Syn. Melatonin"]} buyUrl="https://amzn.to/4x4WZCs" buyLabel="Buy on Amazon" reviewSlug="performance-lab-sleep" bgFrom="#091828" bgTo="#050E18" accent="#3A6FA8" />
                  <ProductCard name="PM-02 Sleep + Restore" brand="Seed" category="Sleep" priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Biphasic Melatonin", "Co-Biotic"]} buyUrl="https://amzn.to/4eiBPZ1" buyLabel="Buy on Amazon" reviewSlug="seed-pm-02" bgFrom="#071A1A" bgTo="#040E0E" accent="#2A8A8A" />
                </div>
              </section>

              {/* § 12 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["Full label — all 8 doses disclosed, no proprietary blends", "$0.73/serving — best value in the transparent sleep supplement category", "L-Theanine 200mg hits clinical target (Lyon et al., 2011)", "Lifetime money-back guarantee — no questions asked", "Vegan, GMO-free, gluten-free", "Third-party tested (though certifier unnamed)", "Widely available on Amazon with Prime delivery", "4.9 stars across 150+ customer reviews"]}
                  cons={["6mg melatonin — pharmacological dose, suppresses endogenous production with chronic use", "Valerian 150mg, lemon balm 100mg — both below RCT-evidenced doses", "Third-party testing certifier unnamed — unverifiable claim", "May cause morning grogginess in early risers or sensitive individuals", "Valerian root has a pungent odour noticeable on opening the bottle"]}
                />
              </section>

              {/* § 13 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Melatonin 6mg — chronic endogenous suppression", severity: "moderate", detail: "Nordlund & Lerner (1977) demonstrated exogenous melatonin reduces endogenous pineal gland output. At 6mg nightly over months, the body's own melatonin production can down-regulate, potentially requiring continued supplementation or dose escalation for the same effect. For occasional use this risk is low; for daily use over 3+ months, consider lower-dose alternatives." },
                    { label: "Next-morning sedation (sleep inertia)", severity: "moderate", detail: "At 6mg, melatonin half-life (~45–60 min) means significant levels persist for 4–5 hours. Users waking within 5–6 hours of dosing may experience grogginess. Take 60–75 min before planned sleep time, not 30 min, to maximise clearance by waking time." },
                    { label: "Valerian + Sedative medications", severity: "low", detail: "Valerian has mild CNS depressant properties. Combined with benzodiazepines, barbiturates, alcohol, or other sleep aids, additive sedation is possible. At 150mg this risk is low." },
                    { label: "General tolerability", severity: "low", detail: "All ingredients at these doses are well-characterised and generally safe in healthy adults. No addiction or dependency profile. Passion flower and chamomile are not recommended in pregnancy without medical approval." },
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="L-theanine" />
                <div style={{ marginTop: 20, padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    At $21.95 for 30 servings ($0.73/serving), Luna is the most affordable fully-transparent sleep supplement on the market. The next closest fully-disclosed competitor (Seed PM-02) costs $1.17/serving. Performance Lab Sleep costs $1.47/serving. Luna's value proposition is straightforward: complete label transparency at a price accessible to virtually any budget, backed by a lifetime guarantee. Prices verified May 2026.
                  </p>
                </div>
              </section>

              {/* § 15 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3D7A5E", marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
                      $21.95 <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span>
                    </p>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Prime shipping · Lifetime money-back guarantee. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/3Sb2LlK" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3D7A5E", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
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
                        <span className="faq-icon-luna" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#3D7A5E" }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-luna svg{display:none;}details[open] .faq-icon-luna::after{content:'';display:block;width:10px;height:2px;background:#3D7A5E;border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 17 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3D7A5E", marginBottom: 8 }}>FSP v2.1 — REV-2026-061</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: "#3D7A5E", lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#A89880" }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.4 }}>Recommended for value seekers. Use 1 capsule if taking nightly long-term.</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.7)", lineHeight: 1.8, marginBottom: 28 }}>
                    Luna earns its 7/10 by doing the fundamentals well: full label disclosure, a clinical L-theanine dose, excellent value, and a lifetime guarantee. If your priority is a transparent, accessible sleep supplement for occasional or short-term use, Luna is the best option at this price. The 6mg melatonin is a genuine formulation concern for anyone using it nightly for months — consider cutting to 1 capsule or cycling with a lower-melatonin product. The 7/10 would be an 8/10 with 1mg melatonin.
                  </p>
                  <a href="https://amzn.to/3Sb2LlK" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#3D7A5E", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
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
                      { text: "Lyon MR, Kapoor MP, Juneja LR. (2011). L-theanine and objective sleep quality in ADHD boys. Alternative Medicine Review, 16(4):348–354.", url: "https://pubmed.ncbi.nlm.nih.gov/22214254/" },
                      { text: "Brzezinski A et al. (2005). Effects of exogenous melatonin on sleep: a meta-analysis. Sleep Medicine Reviews, 9(1):41–50.", url: "https://doi.org/10.1016/j.smrv.2004.06.004" },
                      { text: "Nordlund JJ, Lerner AB. (1977). The effects of oral melatonin on skin color and on the release of pituitary hormones. Journal of Clinical Endocrinology & Metabolism, 45(4):768–774.", url: "https://doi.org/10.1210/jcem-45-4-768" },
                      { text: "Leathwood PD et al. (1982). Aqueous extract of valerian root improves sleep quality in man. Pharmacology Biochemistry and Behavior, 17(1):65–71.", url: "https://doi.org/10.1016/0091-3057(82)90264-7" },
                      { text: "Bent S et al. (2006). Valerian for sleep: a systematic review and meta-analysis. American Journal of Medicine, 119(12):1005–1012.", url: "https://doi.org/10.1016/j.amjmed.2006.02.026" },
                      { text: "Cases J et al. (2011). Pilot trial of Melissa officinalis for anxiety and sleep disturbances. Mediterranean Journal of Nutrition and Metabolism, 4(3):211–218.", url: "https://doi.org/10.1007/s12349-010-0045-4" },
                      { text: "Zick SM et al. (2011). Preliminary examination of chamomile extract on sleep quality in postpartum women. Journal of Advanced Nursing, 67(2):306–313.", url: "https://doi.org/10.1111/j.1365-2648.2010.05507.x" },
                      { text: "Ngan A, Conduit R. (2011). Double-blind, placebo-controlled investigation of the effects of Passiflora incarnata on subjective sleep quality. Phytotherapy Research, 25(8):1153–1159.", url: "https://doi.org/10.1002/ptr.3400" },
                      { text: "Hepsomali P et al. (2020). Effects of oral GABA administration on stress and sleep in humans. Frontiers in Neuroscience, 14:923.", url: "https://doi.org/10.3389/fnins.2020.00923" },
                      { text: "Turek FW, Gillette MU. (2004). Melatonin, sleep, and circadian rhythms. Lancet, 364(9451):2177–2179.", url: "https://doi.org/10.1016/S0140-6736(04)17420-4" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#3D7A5E", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
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
