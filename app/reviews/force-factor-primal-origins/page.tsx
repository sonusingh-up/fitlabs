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
  title: "Force Factor Primal Origins Review (2026): Budget Pick?",
  description:
    "Force Factor Primal Origins review: Walmart bestseller, undisclosed sourcing, 4-organ blend, $0.18/serving. The cheapest option — is it good enough? FSP 7/10.",
  alternates: { canonical: "/reviews/force-factor-primal-origins" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "why-budget", label: "The Budget Case" },
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
  { id: "safety", label: "Safety Considerations" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    { pillar: "formula", score: 7.0, notes: "4-organ blend (liver, heart, kidney, pancreas) — spleen omitted vs competitors. Organ content per serving not clearly stated on label. Formula is functional but less comprehensive than 5-organ competitors." },
    { pillar: "transparency", score: 5.0, notes: "Sourcing country not disclosed on label or website. No information about farming practices, grass-fed status, or supply chain. This is the most significant weakness — at this price, sourcing shortcuts are possible and cannot be verified." },
    { pillar: "verification", score: 4.5, notes: "No third-party certification of any kind. No COA. No Informed Sport. Sourcing is undisclosed. This is the lowest verification level in this roundup. For a supplement consumed for health benefits, this level of opacity is a real concern." },
    { pillar: "value", score: 10, notes: "At ~$22/bottle ($0.18/serving), Force Factor Primal Origins is by far the cheapest option in this roundup. For first-time buyers who want to try organ supplements without a significant financial commitment, this is the accessible entry point. The value score reflects price; it does not reflect quality-adjusted value." },
    { pillar: "practical", score: 8.0, notes: "Available at Walmart and Amazon — the most accessible organ supplement to buy in person. Reasonable serving size. Walmart distribution means impulse purchase is possible for many buyers." },
  ],
  flags: [
    { type: "green", label: "Lowest price in category ($0.18/serving)", detail: "Best entry point for first-time organ supplement buyers." },
    { type: "green", label: "Widely available at Walmart", detail: "Most accessible in-person purchase option for this supplement category." },
    { type: "red", label: "Sourcing undisclosed", detail: "No information about origin country, farming practices, or grass-fed status. Cannot verify quality claims.", deduction: 0.5 },
    { type: "red", label: "No COA or third-party testing", detail: "No heavy metal testing results, no Informed Sport, no independent verification of any kind.", deduction: 0.3 },
    { type: "red", label: "4 organs only — spleen omitted", detail: "Missing spleen vs most competitors. Less comprehensive nose-to-tail coverage." },
  ],
  claimAudit: [
    { claim: "\"Premium quality organ supplement\"", verdict: "unsupported", evidence: "limited", notes: "'Premium' is a relative marketing term. At $0.18/serving with undisclosed sourcing, this is a budget product by any objective standard." },
    { claim: "\"Sourced from grass-fed cattle\"", verdict: "context-dependent", evidence: "limited", notes: "Claim appears on some marketing materials but sourcing country is not disclosed. Cannot verify grass-fed status without supply chain documentation." },
    { claim: "\"Supports energy and vitality\"", verdict: "overstated", evidence: "limited", notes: "Structure/function claim without clinical evidence. The nutrient content (B12, iron, CoQ10) may support energy in deficient individuals, but the claim is unsubstantiated for healthy adults." },
  ],
  valueMetric: { pricePerServing: 0.18, primaryActiveGrams: 2.5, pricePerGramActive: 0.07, categoryAvgPricePerGram: 0.20, efficiency: "above" },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org", "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/force-factor-primal-origins#review",
  name: "Force Factor Primal Origins — Fitlabreviews FSP Review",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-27", dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: { "@type": "Product", name: "Force Factor Primal Origins", brand: { "@type": "Brand", name: "Force Factor" }, category: "Organ Supplement" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Force Factor Primal Origins safe?", acceptedAnswer: { "@type": "Answer", text: "At standard doses, there are no documented safety issues with Force Factor Primal Origins specifically. The concern is not toxicity but rather verification: without a COA or disclosed sourcing, you cannot confirm heavy metal levels. For most healthy adults at label dosing, the practical risk is low. For pregnant women, those with hemochromatosis, or anyone tracking retinol intake carefully, the lack of verification data is a meaningful limitation." } },
    { "@type": "Question", name: "Is Force Factor Primal Origins worth buying?", acceptedAnswer: { "@type": "Answer", text: "As a first-time test purchase, yes. At $0.18/serving, the financial risk is minimal. If you are new to organ supplements and want to test tolerance before investing in a premium brand, this is a reasonable starting point. For ongoing use, we recommend upgrading to Left Coast Performance (NZ sourced at $0.39/serving) or Ancestral Supplements (full COA at $0.50/serving) once you have confirmed the format suits you." } },
    { "@type": "Question", name: "Why is Force Factor so much cheaper than Ancestral Supplements?", acceptedAnswer: { "@type": "Answer", text: "Primarily sourcing and verification. Ancestral Supplements uses New Zealand grass-fed beef with a published heavy metal COA — both add cost. Force Factor does not disclose sourcing and has no independent verification. Lower cost sourcing from lower-regulation markets is the most likely explanation for the price difference." } },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "Best value NZ-sourced multi-organ blend. The logical upgrade from Force Factor.", publishedAt: "2026-05-27", figNumber: "01" },
  { slug: "ancestral-supplements-beef-liver", title: "Ancestral Supplements Beef Liver", brand: "Ancestral Supplements", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "The reference-standard NZ freeze-dried liver. Full COA transparency.", publishedAt: "2026-05-27", figNumber: "02" },
];

export default function ForcefactorPrimalOriginsPage() {
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
              { label: "Organ Supplements", href: "/category/organ-supplements" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Force Factor Primal Origins</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1B14 0%, #141008 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-049 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Force Factor<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Primal Origins</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#8B7355" color="#8B7355" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i + editorialScore} size={14} fill="none" color="#8B7355" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-049</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B7355" }}>Full Review · FSP Scored · Budget Organ Supplement</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Force Factor · Organ Supplement · 4-Organ Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Primal Origins — $0.18/Serving<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Transparency is the price you pay for this price</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                The cheapest organ supplement at retail. Walmart bestseller. Undisclosed sourcing, no COA, no certifications. We tested whether the price-to-formula ratio makes sense for entry-level buyers.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/beef-organ-link"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#8B7355", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Buy on Amazon <ExternalLink size={13} />
                </a>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
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
            { label: "Form", value: "Capsules" },
            { label: "Serving", value: "4–6 caps / 2,500mg" },
            { label: "Source", value: "Undisclosed" },
            { label: "Published", value: "May 27, 2026" },
            { label: "Last Updated", value: "May 27, 2026" },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Budget supplement analysis · Transparency audit · Category comparison
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Research Review</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate notice ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: the Amazon link above may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8B7355", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main content */}
            <article style={{ minWidth: 0 }}>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-049</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Force Factor Primal Origins is a functional budget organ supplement with one overwhelming advantage: price. At $0.18/serving it is the cheapest organ supplement available at retail.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The cost is paid in transparency — sourcing is undisclosed, no COA is available, and no certifications exist. The verdict: buy one bottle to test organ supplement tolerance, then upgrade to Left Coast Performance or Ancestral Supplements for long-term use.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#8B7355", marginBottom: 4 }}>{p.score.toFixed(1)} / 10</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.notes.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── THE BUDGET CASE ────────────────────────────────────────── */}
              <section id="why-budget" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>The Budget Case for Organ Supplements</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The organ supplement category has a discovery problem. Most first-time buyers are not sure if they will tolerate the format — six capsules of concentrated organ meat is a significant introduction for someone who has never eaten liver. Spending $45 on a first purchase involves real financial risk if you discontinue after two weeks.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Force Factor Primal Origins solves this problem. At $22 for a month&apos;s supply, the risk of a failed experiment is low enough to justify trying. The limitation is that the transparency gaps that make the low price possible are also real. You are trading verifiability for affordability, and that is a meaningful trade for ongoing supplementation.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #8B7355" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355", marginBottom: 8 }}>Recommended use case</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Trial purchase only. If you confirm organ supplement tolerance and benefit, upgrade to Left Coast Performance ($0.39/serving, NZ sourced) or Ancestral Supplements ($0.50/serving, full COA) for long-term use.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-049" />
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                  FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                  Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
                  High value score (10/10) is offset by low transparency (5/10) and verification (4.5/10).
                </p>
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── SUPPLEMENT FACTS ───────────────────────────────────────── */}
              <section id="supplement-facts" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Supplement Facts</h2>

                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", backgroundColor: "#1A1714" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>Supplement Facts</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#A89880" }}>Serving size: 4–6 capsules · Servings per container: varies</p>
                  </div>
                  <div style={{ padding: "0 20px", backgroundColor: "#F8F2E4" }}>
                    {[
                      { label: "Beef Organ Blend (Freeze-Dried)", value: "~2,500mg", bold: true },
                      { label: "Organs included", value: "Liver, Heart, Kidney, Pancreas" },
                      { label: "Source", value: "Undisclosed" },
                      { label: "Certification", value: "None" },
                      { label: "Other ingredients", value: "To be verified on current label" },
                    ].map((row, i, arr) => (
                      <div key={row.label} style={{ padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</span>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: row.bold ? "#8B7355" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                    <p style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6 }}>
                      Individual organ doses are not disclosed. Total blend weight per serving is approximate. Verify current label for exact serving size — Force Factor occasionally updates formulations.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients — Estimated</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Estimated contributions from the 4-organ blend. Cannot be precisely calculated due to undisclosed sourcing and individual organ doses.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Vitamin B12", source: "Liver", evidence: "moderate" as EvidenceLevel, note: "Primary B12 source in the blend. Actual amounts depend on liver proportion of blend — not disclosed." },
                    { nutrient: "Vitamin A (Retinol)", source: "Liver", evidence: "moderate" as EvidenceLevel, note: "Preformed retinol present. Exact amount unknown — track total daily intake from all sources." },
                    { nutrient: "CoQ10", source: "Heart", evidence: "moderate" as EvidenceLevel, note: "Cardiac muscle contribution. Amount depends on heart proportion of blend." },
                    { nutrient: "Heme Iron", source: "Liver", evidence: "moderate" as EvidenceLevel, note: "Present in meaningful amounts. Exact level unverifiable without sourcing disclosure." },
                    { nutrient: "Copper", source: "Liver", evidence: "moderate" as EvidenceLevel, note: "Liver is the richest dietary copper source. Contributing amount estimated from blend weight." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>{row.nutrient}</p>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8B7355", fontWeight: 600, marginBottom: 4 }}>from {row.source}</p>
                        <EvidenceBadge level={row.evidence} showIcon={false} />
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{row.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: "#8A8480", marginTop: 8 }}>All values are estimates based on USDA FDC data for organ meats at the stated blend weight. Actual values are unverifiable without sourcing disclosure.</p>
              </section>

              {/* ─── SOURCING & PROCESSING ──────────────────────────────────── */}
              <section id="sourcing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Processing</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "Sourcing: the central problem",
                      body: "Force Factor does not disclose the country of origin for its beef organs. No information about farming practices, grass-fed status, antibiotic use, or supply chain partners is available on the label, website, or in customer service responses. This is not unusual for budget supplements, but it prevents any quality verification. You are trusting a budget brand with no accountability mechanism.",
                    },
                    {
                      title: "What undisclosed sourcing implies",
                      body: "The organ supplement market sources from New Zealand, Argentina, Brazil, Australia, United States, and several lower-cost markets. At $0.18/serving, premium NZ sourcing at the cost seen in Ancestral Supplements or Left Coast Performance is economically implausible. The sourcing is most likely from a lower-cost market with lower regulatory requirements — this is not inherently dangerous, but it cannot be verified.",
                    },
                    {
                      title: "Processing",
                      body: "The product claims to use freeze-drying or desiccation — specific method not confirmed in marketing materials. The capsule format is standard bovine gelatin. Shelf-stable and travel-friendly like all competitors in this category.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Data & Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>This is the weakest section of the review. No verification data exists for this product.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Heavy Metal COA", status: "Not Available", result: "No testing disclosed", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "Informed Sport", status: "Not Certified", result: "Not suitable for drug-tested athletes", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "NSF Certified", status: "N/A", result: "No certification", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
                    { test: "Sourcing Documentation", status: "Not Disclosed", result: "Cannot verify origin or practices", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                  ].map((cert) => (
                    <div key={cert.test} style={{ padding: "16px", border: `1px solid ${cert.color}33`, borderRadius: 10, backgroundColor: cert.bg }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: cert.bg, border: `1px solid ${cert.color}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: cert.color, fontFamily: "var(--font-dm-mono), monospace" }}>{cert.icon}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{cert.test}</span>
                      </div>
                      <p style={{ fontSize: 11, color: cert.color, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 700 }}>{cert.status}</p>
                      <p style={{ fontSize: 11, color: "#5C5650" }}>{cert.result}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Marketing Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── HOW TO TAKE IT ─────────────────────────────────────────── */}
              <section id="how-to-take" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { q: "Recommended dose", a: "Follow label instructions. Typically 4–6 capsules per day. Start with 2–3 the first week to assess digestive tolerance before building to the full serving." },
                    { q: "Timing", a: "With food, always. Fat-soluble vitamins in organ supplements require dietary fat for absorption. Do not take on an empty stomach, especially as a first-time user." },
                    { q: "As a trial purchase", a: "If your goal is testing format tolerance before investing in a premium brand, use this at the recommended dose for 2–4 weeks. If you notice benefit and tolerate it well, upgrade to Left Coast Performance or Ancestral Supplements for better sourcing assurance." },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>The transparency gap is visible when Force Factor is placed next to competitors at similar or slightly higher prices.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Force Factor", "Left Coast Perf.", "Perfect Supps", "Ancestral Supps"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["7/10 ★", "8/10", "8/10", "8/10"] },
                        { metric: "Price / serving", vals: ["$0.18 ★", "$0.39", "$0.33", "$1.50"] },
                        { metric: "Source country", vals: ["Undisclosed", "New Zealand", "Brazil", "New Zealand"] },
                        { metric: "Certification", vals: ["None", "None", "USDA Organic", "None"] },
                        { metric: "Heavy metal COA", vals: ["No", "No", "No", "On request"] },
                        { metric: "Organs", vals: ["4-organ", "5-organ", "Liver only", "Liver only"] },
                        { metric: "Retail", vals: ["Walmart ★", "Amazon, Walmart", "Amazon", "Amazon"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#8B7355" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>★ = category best in this metric. Prices verified May 2026.</p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Force Factor and the upgrade options — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Primal Origins"
                    brand="Force Factor"
                    category="Organ Supplement"
                    score={7}
                    priceUSD="~$22 / bottle"
                    priceINR="Not on Amazon.in"
                    tags={["Budget Pick", "Walmart Available"]}
                    buyUrl="https://amzn.to/beef-organ-link"
                    buyLabel="Buy on Amazon"
                    reviewSlug="force-factor-primal-origins"
                    bgFrom="#1E1B14"
                    bgTo="#141008"
                    accent="#8B7355"
                    featured={true}
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    priceUSD="$35 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "5-Organ Blend"]}
                    buyUrl="https://amzn.to/beef-organ-link"
                    buyLabel="Upgrade Option"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Perfect Supplements"
                    category="Organ Supplement"
                    priceUSD="~$30 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["USDA Organic", "Brazil Grass-Fed"]}
                    buyUrl="https://amzn.to/beef-organ-link"
                    buyLabel="Upgrade Option"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Liver"
                    brand="Ancestral Supplements"
                    category="Organ Supplement"
                    priceUSD="$43–47 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "COA Available"]}
                    buyUrl="https://amzn.to/49RAlmU"
                    buyLabel="Upgrade Option"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Cheapest option in the category ($0.18/serving)",
                    "Available at Walmart — most accessible in-person purchase",
                    "Good for first-time buyers testing the format",
                  ]}
                  cons={[
                    "Sourcing completely undisclosed",
                    "No COA, no third-party testing",
                    "4 organs only — misses spleen",
                    "Cannot verify grass-fed or quality claims",
                  ]}
                />
              </section>

              {/* ─── SAFETY CONSIDERATIONS ──────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety Considerations</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>General safety applies — the specific concern here is the lack of verification for this product.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      title: "Heavy metal risk — unverifiable",
                      body: "Organ meats concentrate environmental contaminants. Without a heavy metal COA, there is no way to verify that lead, cadmium, arsenic, or mercury are below action levels. For most healthy adults at standard doses, the practical risk is low. For individuals with high-risk profiles (children, pregnant women, those with compromised detoxification), the lack of testing data is a meaningful concern.",
                    },
                    {
                      title: "Vitamin A — track total intake",
                      body: "Liver contains preformed retinol. The tolerable upper intake level is 10,000 IU/day. At the standard dose, contribution from this product is meaningful — add your multivitamin and any other retinol sources before assessing total daily intake.",
                    },
                    {
                      title: "Pregnancy",
                      body: "Not recommended during pregnancy due to unverifiable retinol content and the absence of any sourcing or safety documentation. Choose a product with documented testing if supplementation is medically indicated.",
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="organ blend" />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginTop: 16 }}>
                  The value score (10/10) reflects raw price-per-serving. It does not reflect quality-adjusted value — when transparency and verification gaps are considered, the quality-adjusted value is significantly lower. For a trial purchase the price justification is strong. For ongoing supplementation it is not.
                </p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Walmart (in-store or online)",
                      price: "~$22",
                      notes: "Primary channel — widely available in-store. This is the most accessible organ supplement for buyers without Amazon Prime or specialty supplement access.",
                      recommended: true,
                      url: "https://amzn.to/beef-organ-link",
                    },
                    {
                      channel: "Amazon US",
                      price: "~$22–25",
                      notes: "Available on Amazon. Verify seller is Force Factor or fulfilled by Amazon — this price point attracts third-party resellers. Check for Amazon&apos;s Choice or Fulfilled by Amazon badge.",
                      recommended: true,
                      url: "https://amzn.to/beef-organ-link",
                    },
                  ].map((channel) => (
                    <div key={channel.channel} style={{ padding: "16px 20px", border: `1px solid ${channel.recommended ? "#2D6A4F33" : "#D4C9B8"}`, borderRadius: 10, backgroundColor: channel.recommended ? "#F0F8F3" : "#F8F2E4", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{channel.channel}</p>
                          {channel.recommended && <span style={{ padding: "1px 7px", backgroundColor: "#2D6A4F", borderRadius: 4, fontSize: 8, color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Recommended</span>}
                        </div>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{channel.notes}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>{channel.price}</p>
                        <a href={channel.url} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Shop Now <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FAQ ────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <div key={i} style={{ padding: "18px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 8 }}>{faq.name}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-049</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    A trial purchase,{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>not a long-term choice.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    The price is real. The transparency gaps are real. These two facts coexist — and the sensible consumer strategy is to use Force Factor Primal Origins exactly once, as a tolerance test, before committing to a product you can actually verify.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    If you tolerate it and want to continue, Left Coast Performance at $0.39/serving gives you NZ sourcing at $7/month more. Ancestral Supplements at $0.50/serving gives you a full COA. Either upgrade is worth it for ongoing supplementation.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#8B7355", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Lowest price. Lowest transparency. Trial purchase only.</p>
                    </div>
                    <a href="https://amzn.to/beef-organ-link" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#8B7355", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "USDA FoodData Central. Beef organ nutrient profiles — liver (#174489), heart (#174470), kidney (#174481), pancreas.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A (2001). Tolerable Upper Intake Level: 10,000 IU/day for adults.",
                      "FDA. Guidance for Industry: Heavy metals in food. Action levels for lead, cadmium, arsenic, mercury in foods and dietary supplements.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ref}</li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* ── Related Reviews ────────────────────────────────────────────────── */}
        {relatedReviews.length > 0 && (
          <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Upgrade Options</p>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>Better sourcing, verified quality</h3>
                </div>
                <Link href="/reviews" style={{ fontSize: 12, color: "#8B7355", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
