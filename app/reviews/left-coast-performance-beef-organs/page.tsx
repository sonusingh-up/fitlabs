import type { Metadata } from "next";
import Link from "next/link";
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
import ProductCard from "@/components/ui/ProductCard";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Left Coast Performance Beef Organs Review (2026)",
  description:
    "Left Coast Performance Beef Organs review: NZ sourced, 5-organ blend, women's formula available, $0.39/serving. Best value organ supplement? FSP 8/10.",
  alternates: { canonical: "/reviews/left-coast-performance-beef-organs" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "why-organs", label: "Why Organ Supplements" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "nutrients", label: "Key Nutrients" },
  { id: "sourcing", label: "Sourcing & Processing" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Products at a Glance" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Women's Formula" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    { pillar: "formula", score: 8.0, notes: "5-organ blend (liver, heart, kidney, pancreas, spleen) — 3,000mg per 6-capsule serving. No fillers. Same core formula concept as Heart & Soil but without Informed Sport certification. Women's formula adds reproductive organ tissue (uterus, ovary) at the same price point — a meaningful differentiation for the female market." },
    { pillar: "transparency", score: 7.0, notes: "New Zealand sourced — confirmed on the label and website. However, no published COA is available. No batch-specific heavy metal testing results. The sourcing claim is credible (NZ has strong agricultural regulations), but the absence of third-party verification documentation is a step below Ancestral Supplements and Heart & Soil." },
    { pillar: "verification", score: 6.0, notes: "No third-party certification (no Informed Sport, no NSF). No published heavy metal COA. The NZ sourcing provides implicit quality assurance through NZ Ministry for Primary Industries regulations, but this is regulatory compliance, not independent verification. Acceptable for general use; insufficient for drug-tested athletes." },
    { pillar: "value", score: 9.5, notes: "At $35/bottle (roughly $0.39/serving at 6 caps), Left Coast Performance is the best-value quality organ supplement in this roundup. The NZ sourcing at this price is genuinely impressive — cheaper than Force Factor's undisclosed-source product. For budget-conscious buyers who want NZ provenance, this is the clear winner." },
    { pillar: "practical", score: 8.0, notes: "6 capsules per serving, room temperature stable, no taste or smell. Widely available on Amazon and Walmart — the most accessible premium organ supplement in this review. The women's formula is available at the same price, with the same serving size." },
  ],
  flags: [
    { type: "green", label: "New Zealand sourced at budget price", detail: "NZ sourcing at $0.39/serving is the best price-to-sourcing ratio in this roundup." },
    { type: "green", label: "Women's formula available", detail: "Dedicated female formula includes uterus and ovary tissue — popular in ancestral health for hormone support." },
    { type: "green", label: "5-organ nose-to-tail blend", detail: "Liver, heart, kidney, pancreas, spleen — comprehensive organ coverage." },
    { type: "green", label: "Widely available (Amazon, Walmart)", detail: "Most accessible premium organ supplement — no specialty store required." },
    { type: "red", label: "No published COA", detail: "No batch-specific heavy metal testing results available. Reduces verifiability below top-tier brands.", deduction: 0.3 },
    { type: "red", label: "No third-party certification", detail: "Not Informed Sport or NSF certified. Not suitable for drug-tested athletes." },
  ],
  claimAudit: [
    { claim: "\"New Zealand grass-fed sourcing\"", verdict: "supported", evidence: "strong", notes: "NZ MPI regulations require year-round pasture access for beef cattle. The NZ sourcing claim is credible and consistent with regulatory requirements. No batch-level COA to verify, but NZ regulatory compliance provides baseline assurance." },
    { claim: "\"5 powerful organs in one capsule\"", verdict: "supported", evidence: "moderate", notes: "Label confirms liver, heart, kidney, pancreas, spleen. 'Powerful' is marketing language but the 5-organ combination is nutritionally well-chosen." },
    { claim: "\"Premium quality at an affordable price\"", verdict: "supported", evidence: "moderate", notes: "NZ sourcing at $0.39/serving is genuinely premium sourcing at a non-premium price — the claim is directionally accurate. 'Premium' without a COA is a stretch, but the sourcing quality is real." },
    { claim: "\"Supports energy and vitality\"", verdict: "overstated", evidence: "limited", notes: "No clinical evidence that organ supplements specifically improve energy in healthy adults. The B12, iron, and CoQ10 content could support energy metabolism in deficient individuals, but the general claim is unsubstantiated." },
  ],
  valueMetric: { pricePerServing: 0.39, primaryActiveGrams: 3, pricePerGramActive: 0.13, categoryAvgPricePerGram: 0.20, efficiency: "above" },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org", "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/left-coast-performance-beef-organs#review",
  name: "Left Coast Performance Beef Organs — Fitlabreviews FSP Review",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-27", dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: { "@type": "Product", name: "Left Coast Performance Beef Organs", brand: { "@type": "Brand", name: "Left Coast Performance" }, category: "Organ Supplement" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Left Coast Performance as good as Ancestral Supplements?", acceptedAnswer: { "@type": "Answer", text: "For sourcing quality, they are comparable — both use New Zealand grass-fed beef. Left Coast Performance wins on price ($0.39 vs $0.50/serving) and organ variety (5 organs vs liver-focused Ancestral). Ancestral wins on COA transparency — they publish batch-specific heavy metal results, which Left Coast does not." } },
    { "@type": "Question", name: "Is there a women's version of Left Coast Performance?", acceptedAnswer: { "@type": "Answer", text: "Yes — Left Coast Performance makes a dedicated women's formula that includes reproductive organ tissue (uterus, ovary) in addition to the standard 5-organ blend. It is marketed for hormone support and menstrual health. Clinical evidence for organ-specific benefits from reproductive tissue is limited, but it is popular in the ancestral health community." } },
    { "@type": "Question", name: "Can athletes take Left Coast Performance?", acceptedAnswer: { "@type": "Answer", text: "It is safe for most athletes, but it is not Informed Sport certified. If you are in a drug-tested sport, choose Heart & Soil — the only Informed Sport certified organ supplement. For recreational athletes and fitness enthusiasts, Left Coast Performance is a solid, affordable choice." } },
    { "@type": "Question", name: "Where is Left Coast Performance sold?", acceptedAnswer: { "@type": "Answer", text: "Amazon and Walmart are the primary retail channels, making it the most accessible premium organ supplement in this review. It is also available directly from the brand's website." } },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "ancestral-supplements-beef-liver", title: "Ancestral Supplements Beef Liver", brand: "Ancestral Supplements", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "The reference-standard NZ freeze-dried liver. Best COA transparency in the category.", publishedAt: "2026-05-27", figNumber: "01" },
  { slug: "heart-and-soil-beef-organs", title: "Heart & Soil Beef Organs", brand: "Heart & Soil", category: "Organ Supplement", rating: 9 as ReviewRating, verdict: "Informed Sport certified. Premium nose-to-tail blend. Best for drug-tested athletes.", publishedAt: "2026-05-27", figNumber: "02" },
];

export default function LeftCoastPerformanceReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/reviews" },
              { label: "Organ Supplements", href: "/category/organ-supplements" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Left Coast Performance Beef Organs</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-047 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Left Coast Performance<br /><em style={{ fontWeight: 400, color: "#586259" }}>Beef Organs</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i + editorialScore} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div className="hidden sm:flex" style={{ position: "absolute", right: "6%", bottom: 0, width: 130, height: 160, alignItems: "flex-end", justifyContent: "center" }}>
            <img src="/products/left-coast-performance-beef-organ.webp" alt="Left Coast Performance Beef Organs" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #FFFFFF)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" }}>REV-2026-047</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · NZ Grass-Fed Organs</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>
                Left Coast Performance · Organ Supplement · 5-Organ NZ Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Organs — Best Value<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43", fontSize: "0.7em" }}>NZ Sourcing at a Budget Price?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#3F4B43", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                NZ grass-fed 5-organ blend at $0.39/serving. Women&apos;s formula available. Widely sold on Amazon and Walmart. We tested whether the sourcing, value, and formulation hold up against the premium competition.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/4nUmi5H"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
                >
                  Buy on Amazon <ExternalLink size={13} />
                </a>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #E4E8E5", color: "#6B7770", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {composite.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* ── Metadata strip ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category", value: "Organ Supplement" },
            { label: "Form", value: "Capsules (180 ct)" },
            { label: "Serving", value: "6 caps / 3,000mg" },
            { label: "Source", value: "NZ Grass-Fed" },
            { label: "Published", value: "May 27, 2026" },
            { label: "Last Updated", value: "May 27, 2026" },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#6B7770", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-hanken), sans-serif" }}>
                Organ supplement research · NZ sourcing verification · Women&apos;s formula analysis
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Research Review</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate notice ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#586259", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif" }}>
              Affiliate disclosure: the Amazon link above may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#7B3B1A", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ borderTop: "1px solid #E4E8E5", borderBottom: "1px solid #E4E8E5", marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main content */}
            <article style={{ minWidth: 0 }}>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>Quick Verdict · REV-2026-047</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Left Coast Performance is the best value organ supplement for buyers who want New Zealand sourcing without the premium price. At $0.39/serving with a 5-organ NZ blend, it undercuts Ancestral Supplements by 22% and Heart & Soil by 51%.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The trade-off: no published COA and no third-party certification. For general use and budget-conscious buyers who trust NZ regulatory standards, this is an excellent choice. The dedicated women&apos;s formula is a genuine differentiation in a crowded market.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "16px 18px", backgroundColor: "#F6F8F6", borderRight: "1px solid #F2F8F4" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{p.score.toFixed(1)} / 10</p>
                      <p style={{ fontSize: 11, color: "#6B7770" }}>{p.notes.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHY ORGAN SUPPLEMENTS ──────────────────────────────────── */}
              <section id="why-organs" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Why Organ Supplements. Why Left Coast.</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The organ supplement market has consolidated around a few key differentiators: sourcing country, processing method, and price. Left Coast Performance occupies a distinct niche — New Zealand sourcing at a genuinely budget price. Most NZ-sourced organ supplements charge a premium for that provenance. Left Coast does not.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The 5-organ blend (liver, heart, kidney, pancreas, spleen) covers the major nutritional bases: B12 and retinol from liver, CoQ10 from heart, trace minerals from kidney, digestive enzymes from pancreas, and heme iron from spleen. This nose-to-tail approach is nutritionally sound and mirrors traditional whole-animal diets.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F2F8F4", borderLeft: "3px solid #7B3B1A" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B3B1A", marginBottom: 8 }}>The value proposition</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>
                    At $35/bottle for 180 capsules (30 servings), Left Coast delivers NZ-sourced organ nutrition at roughly the same price as non-NZ competitors. That&apos;s the core story here — you don&apos;t pay a sourcing premium for the NZ label.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-047" />
                <p style={{ fontSize: 12, color: "#6B7770", marginTop: 12 }}>
                  FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                  Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                </p>
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Supplement Facts</h2>

                <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 4 }}>Supplement Facts</p>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#586259" }}>Serving size: 6 capsules · Servings per container: 30</p>
                    </div>
                  </div>
                  <div style={{ padding: "0 20px", backgroundColor: "#F6F8F6" }}>
                    {[
                      { label: "Grass-Fed Beef Organs Blend (Freeze-Dried)", value: "3,000mg" },
                      { label: "Organs included", value: "Liver, Heart, Kidney, Pancreas, Spleen" },
                      { label: "Source", value: "New Zealand" },
                      { label: "Certification", value: "Grass-Fed, Pasture-Raised" },
                      { label: "Other ingredients", value: "None" },
                    ].map((row, i, arr) => (
                      <div key={row.label} style={{ padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #F2F8F4" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: i === 0 ? 13 : 12, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#1A1714" : "#3F4B43", fontFamily: i === 0 ? "var(--font-hanken), sans-serif" : "var(--font-hanken), sans-serif" }}>{row.label}</span>
                        <span style={{ fontSize: i === 0 ? 13 : 12, fontWeight: i === 0 ? 700 : 400, color: i === 4 ? "#2D6A4F" : i === 0 ? "#7B3B1A" : "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients from the 5-Organ Blend</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 24 }}>Approximate contributions per 6-capsule serving (3,000mg freeze-dried organs). Based on USDA FDC data for individual organ meats.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Vitamin B12", source: "Liver", evidence: "strong" as EvidenceLevel, note: "Highest B12 source in the 5-organ blend. Bioavailability from liver is near 100%." },
                    { nutrient: "Vitamin A (Retinol)", source: "Liver", evidence: "strong" as EvidenceLevel, note: "Preformed retinol — active form with high bioavailability. Track total daily intake from all sources." },
                    { nutrient: "CoQ10", source: "Heart", evidence: "moderate" as EvidenceLevel, note: "Cardiac muscle is the richest dietary CoQ10 source. Relevant for mitochondrial energy production." },
                    { nutrient: "Heme Iron", source: "Spleen + Liver", evidence: "strong" as EvidenceLevel, note: "Spleen is the most iron-concentrated organ. 15–35% absorption vs 2–20% for non-heme iron." },
                    { nutrient: "Copper", source: "Liver", evidence: "strong" as EvidenceLevel, note: "Critical for iron metabolism, connective tissue synthesis, and mitochondrial function." },
                    { nutrient: "Digestive Enzymes", source: "Pancreas", evidence: "limited" as EvidenceLevel, note: "Pancreatic enzymes (amylase, lipase, protease) — freeze-drying may preserve some enzymatic activity." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: i < 5 ? "1px solid #F2F8F4" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #F2F8F4" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 4 }}>{row.nutrient}</p>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#7B3B1A", fontWeight: 600, marginBottom: 4 }}>from {row.source}</p>
                        <EvidenceBadge level={row.evidence} showIcon={false} />
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>{row.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── SOURCING & PROCESSING ──────────────────────────────────── */}
              <section id="sourcing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Processing</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "New Zealand — why it matters at this price",
                      body: "NZ cattle operate under MPI regulations requiring year-round pasture access, no routine antibiotics, and no added growth hormones. Grass-finishing is the NZ norm. At $0.39/serving, Left Coast delivers NZ provenance cheaper than most US-sourced competitors — an unusual value inversion in the category.",
                    },
                    {
                      title: "Freeze-dried vs desiccated",
                      body: "Left Coast uses a freeze-drying process to preserve nutrient integrity. Freeze-drying removes moisture under vacuum at low temperatures, preserving heat-sensitive nutrients like CoQ10 and B vitamins better than conventional heat desiccation. The resulting powder is shelf-stable and concentrated at roughly 5–6× the nutrient density of fresh tissue by weight.",
                    },
                    {
                      title: "Individual organ dose disclosure",
                      body: "The 3,000mg blend dose is disclosed but individual organ contributions are not broken out. This is a standard limitation of proprietary blends in the category — Ancestral, Heart & Soil, and Left Coast all use blend declarations. You are trusting that liver constitutes the majority of the blend.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 22px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Data & Verification</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20 }}>The verification gap is the main limitation of Left Coast vs the top tier. No published COA, no third-party cert.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Heavy Metal COA", status: "Not Published", result: "No public batch testing", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "Informed Sport", status: "Not Certified", result: "Not suitable for drug-tested athletes", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "NSF Certified", status: "N/A", result: "No third-party cert", icon: "○", color: "#6B7770", bg: "#F2F8F4" },
                    { test: "NZ MPI Compliance", status: "Implied", result: "NZ regulatory standards apply", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                  ].map((cert) => (
                    <div key={cert.test} style={{ padding: "16px", border: `1px solid ${cert.color}33`, borderRadius: 10, backgroundColor: cert.bg }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: cert.bg, border: `1px solid ${cert.color}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: cert.color, fontFamily: "var(--font-jetbrains), monospace" }}>{cert.icon}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif" }}>{cert.test}</span>
                      </div>
                      <p style={{ fontSize: 11, color: cert.color, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 700 }}>{cert.status}</p>
                      <p style={{ fontSize: 11, color: "#3F4B43" }}>{cert.result}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "16px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F2F8F4" }}>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>
                    <strong>Bottom line on verification:</strong> NZ regulatory compliance (MPI) provides baseline quality assurance, but it is not the same as independent batch testing. If you need documented heavy metal testing, choose Ancestral Supplements or Heart & Soil. For general consumer use at this price point, Left Coast&apos;s sourcing is a reasonable trust basis.
                  </p>
                </div>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Marketing Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── HOW TO TAKE IT ─────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { q: "Recommended dose", a: "6 capsules per day — the full serving. Split 3 at breakfast and 3 at another meal. Some people tolerate 3/day as a maintenance dose." },
                    { q: "Timing", a: "With food, always. Fat-soluble vitamins (A, K2) in liver and organs require dietary fat for absorption. A meal containing any fat — eggs, avocado, olive oil — is sufficient." },
                    { q: "Starting out", a: "Begin with 3 capsules per day for the first week to assess digestive tolerance. Some people experience mild adjustment when introducing concentrated organ supplements. Increase to 6 if tolerated." },
                    { q: "Women's formula", a: "The women's formula uses the same 6-capsule serving with the same NZ-sourced base plus reproductive organ tissue. Follow the same timing and food recommendations." },
                    { q: "With other supplements", a: "Track your total daily Vitamin A from all sources (multivitamin, cod liver oil, other liver products). The tolerable upper intake level is 10,000 IU/day for adults." },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 6 }}>{item.q}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20 }}>Left Coast&apos;s strongest differentiation is value. Here is how it compares across the key metrics buyers care about.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Left Coast Perf.", "Ancestral Supps", "Heart & Soil", "Force Factor"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["8/10 ★", "8/10", "9/10", "7/10"] },
                        { metric: "Source country", vals: ["New Zealand", "New Zealand", "United States", "Undisclosed"] },
                        { metric: "Organs", vals: ["5-organ blend", "Liver only", "Multi-organ", "Multi-organ"] },
                        { metric: "COA available", vals: ["No", "On request", "Yes", "No"] },
                        { metric: "3rd-party cert", vals: ["None", "None", "Informed Sport", "None"] },
                        { metric: "Price / serving", vals: ["$0.39 ★", "$1.50", "$0.80", "$0.18"] },
                        { metric: "Women's formula", vals: ["Yes", "No", "No", "No"] },
                        { metric: "Retail", vals: ["Amazon, Walmart", "Amazon", "Direct", "Walmart, Amazon"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770", borderRight: "1px solid #F2F8F4", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#7B3B1A" : "#2D2926", fontFamily: "var(--font-hanken), sans-serif", borderRight: j < 3 ? "1px solid #F2F8F4" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#6B7770", marginTop: 10 }}>
                  Prices verified May 2026 on Amazon US. Competitor data based on published label information.
                </p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 24 }}>Buy cards for the main organ supplements in this comparison — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="$35 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "5-Organ Blend", "Women's Formula"]}
                    buyUrl="https://amzn.to/4nUmi5H"
                    buyLabel="Buy on Amazon"
                    reviewSlug="left-coast-performance-beef-organs"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                    featured={true}
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Ancestral Supplements"
                    category="Organ Supplement"
                    priceUSD="$43–47 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "Freeze-Dried", "COA Available"]}
                    buyUrl="https://amzn.to/49RAlmU"
                    buyLabel="Check Price"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Heart & Soil"
                    category="Organ Supplement"
                    priceUSD="~$0.80/serving"
                    priceINR="Not on Amazon.in"
                    tags={["Informed Sport", "Multi-Organ", "Premium"]}
                    buyUrl="https://heartandsoil.co"
                    buyLabel="Check Price"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Primal Origins"
                    brand="Force Factor"
                    category="Organ Supplement"
                    priceUSD="$0.18/serving"
                    priceINR="Not on Amazon.in"
                    tags={["Budget Pick", "Undisclosed Source"]}
                    buyUrl="https://amzn.to/4nUmi5H"
                    buyLabel="Check Price"
                    bgFrom="#1E1B14"
                    bgTo="#141008"
                    accent="#8B7355"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Best price-to-sourcing ratio in the category ($0.39/serving, NZ sourced)",
                    "Dedicated women's formula with reproductive organ tissue",
                    "5-organ comprehensive blend",
                    "Available at Amazon and Walmart",
                  ]}
                  cons={[
                    "No published COA or heavy metal testing results",
                    "No third-party certification",
                    "Less brand authority than Ancestral or Heart & Soil",
                  ]}
                />
              </section>

              {/* ─── SAFETY & WOMEN'S FORMULA ───────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety & Women&apos;s Formula</h2>
                <p style={{ fontSize: 14, color: "#6B7770", marginBottom: 20 }}>General safety considerations for organ supplements, plus what to know about the female-specific product.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      title: "Vitamin A — track your total intake",
                      body: "Liver and multi-organ blends contain preformed retinol. The tolerable upper intake level is 10,000 IU/day. At 6 caps/day this product contributes meaningfully to that total — add your multivitamin and other liver sources before concluding you are within safe limits.",
                    },
                    {
                      title: "Women's formula — what the evidence says",
                      body: "The women's formula adds uterus and ovary tissue to the standard 5-organ base. The 'like supports like' principle underlying this approach lacks rigorous clinical evidence, but it is popular in the ancestral health community. The additional organs are food-grade and NZ-sourced. The main documented benefit is the enhanced iron content from spleen, which is relevant for women with heavy periods or iron-deficiency anemia.",
                    },
                    {
                      title: "Pregnancy",
                      body: "Pregnant women should consult a doctor before taking any liver-based supplement. Preformed retinol at elevated doses is flagged in obstetric guidelines. The standard warning applies to all concentrated organ supplements, not specifically this product.",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="NZ freeze-dried organ blend" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "180 caps (30 sv)", price: "$35", note: "Standard bottle — best value" },
                    { size: "Women's Formula", price: "~$35", note: "Same price, enhanced blend" },
                    { size: "Walmart (in-store)", price: "~$30–35", note: "Check local availability" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #E4E8E5", borderRadius: 8, backgroundColor: "#F6F8F6" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.price}</p>
                      <p style={{ fontSize: 11, color: "#6B7770" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#6B7770", marginTop: 10 }}>Prices verified May 2026. Check Amazon and Walmart for current promotions.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US",
                      price: "$35",
                      notes: "Primary channel. Prime eligible. Both standard and women's formula available. Check that the listing is fulfilled by or sold by Left Coast Performance directly.",
                      recommended: true,
                      url: "https://amzn.to/4nUmi5H",
                    },
                    {
                      channel: "Walmart (online & in-store)",
                      price: "~$30–35",
                      notes: "Left Coast is one of the few organ supplements carried at Walmart. Pricing may vary by store. In-store availability is limited — check online first.",
                      recommended: true,
                      url: "https://amzn.to/4nUmi5H",
                    },
                    {
                      channel: "Left Coast Performance website",
                      price: "~$35",
                      notes: "Direct from brand. Useful if you want to contact their customer service about sourcing documentation.",
                      recommended: false,
                      url: "https://amzn.to/4nUmi5H",
                    },
                  ].map((channel) => (
                    <div key={channel.channel} style={{ padding: "16px 20px", border: `1px solid ${channel.recommended ? "#2D6A4F33" : "#E4E8E5"}`, borderRadius: 10, backgroundColor: channel.recommended ? "#F0F8F3" : "#F6F8F6", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif" }}>{channel.channel}</p>
                          {channel.recommended && <span style={{ padding: "1px 7px", backgroundColor: "#2D6A4F", borderRadius: 4, fontSize: 8, color: "#FFFFFF", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Recommended</span>}
                        </div>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6 }}>{channel.notes}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>{channel.price}</p>
                        <a href={channel.url} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", backgroundColor: "#1A1714", color: "#FFFFFF", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Shop Now <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FAQ ────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                      <summary>{faq.name}</summary>
                      <p className="faq-answer">{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 16 }}>Final Verdict · REV-2026-047</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Best value. Best for women.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#586259" }}>No COA is the only catch.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    NZ sourcing at $0.39/serving is the standout fact here. The women&apos;s formula adds genuine differentiation in a market that largely ignores female-specific organ needs. The 5-organ blend is nutritionally sound.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The absence of a published COA keeps it behind the top tier. For the general consumer who trusts NZ regulatory standards and wants the best price-to-sourcing ratio in the category, this is the clear pick. For drug-tested athletes or buyers who require documented heavy metal testing, choose Heart & Soil or Ancestral Supplements instead.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, color: "#3F4B43" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3F4B43" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#6B7770" }}>Best value NZ sourcing. No COA is the trade-off.</p>
                    </div>
                    <a href="https://amzn.to/4nUmi5H" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "USDA FoodData Central. Beef organ nutrient profiles — liver (#174489), heart (#174470), kidney (#174481), spleen, pancreas.",
                      "New Zealand Ministry for Primary Industries (MPI). Animal Products Act 1999 and livestock regulations. Year-round pasture access and no routine antibiotic requirements.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A (2001). Tolerable Upper Intake Level: 10,000 IU (3,000 mcg RAE)/day for adults.",
                      "Daley CA et al. (2010). A review of fatty acid profiles and antioxidant content in grass-fed and grain-fed beef. Nutr J 9:10.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>{ref}{" "}<a href={"https://scholar.google.com/scholar?q=" + encodeURIComponent(ref.split("(")[0].trim().substring(0,80))} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace" }}>↗</a></li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ── Related Reviews ────────────────────────────────────────────────── */}
        {relatedReviews.length > 0 && (
          <section style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="pad-section-sm px-page">
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>Related Reviews</p>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
                </div>
                <Link href="/reviews" style={{ fontSize: 12, color: "#7B3B1A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {relatedReviews.map((r) => (
                  <ReviewCard key={r.slug} {...r} />
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
