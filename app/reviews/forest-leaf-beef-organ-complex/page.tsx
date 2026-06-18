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
  title: "Forest Leaf Beef Organ Complex Review (2026)",
  description:
    "Forest Leaf Beef Organ Complex review: 5-organ blend, clean label, strong Amazon presence, $0.31/serving. Mid-tier pick for new organ supplement users. FSP 7/10.",
  alternates: { canonical: "/reviews/forest-leaf-beef-organ-complex" },
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
  { id: "safety", label: "Safety & Vitamin A" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    { pillar: "formula", score: 7.5, notes: "5-organ blend: liver, heart, kidney, spleen, pancreas. 3,000mg per 6-capsule serving. No fillers noted on label. Comprehensive organ coverage at a mid-tier price — the formula is functionally sound." },
    { pillar: "transparency", score: 6.0, notes: "Sourcing country not disclosed on the main label. Some product listings reference US or NZ sourcing but this is not consistently confirmed. No batch-specific COA available. The transparency level is better than Force Factor (they do not make unverifiable grass-fed claims) but worse than the top tier." },
    { pillar: "verification", score: 5.5, notes: "No third-party certification. No published COA. Amazon customer reviews are positive and no contamination incidents have been reported, but this is anecdotal, not verification." },
    { pillar: "value", score: 9.0, notes: "At ~$28/bottle ($0.31/serving) with a 5-organ formula, Forest Leaf is competitively priced. More expensive than Force Factor but cheaper than the NZ-sourced brands. For buyers who want a 5-organ blend at a mid-tier price, this sits in a reasonable position." },
    { pillar: "practical", score: 8.0, notes: "6 capsules per serving. Strong Amazon presence with good reviews. Room-temperature stable. Available for Prime delivery." },
  ],
  flags: [
    { type: "green", label: "5-organ comprehensive blend", detail: "Complete nose-to-tail formula at a mid-tier price." },
    { type: "green", label: "Strong Amazon reviews", detail: "Consistently high ratings across a large number of verified Amazon reviews — a positive signal." },
    { type: "green", label: "Competitive mid-tier pricing", detail: "$0.31/serving for a 5-organ blend is reasonable value." },
    { type: "red", label: "Sourcing not consistently disclosed", detail: "Country of origin unclear across different product listings.", deduction: 0.3 },
    { type: "red", label: "No COA or third-party testing", detail: "No independent verification of quality claims." },
  ],
  claimAudit: [
    { claim: "\"Premium grass-fed organ complex\"", verdict: "context-dependent", evidence: "limited", notes: "Grass-fed claim without sourcing documentation is unverifiable. Cannot confirm without supply chain disclosure." },
    { claim: "\"5 powerful organs\"", verdict: "supported", evidence: "strong", notes: "Label confirms 5 organ types. The combination is nutritionally sound." },
    { claim: "\"No fillers, no artificial ingredients\"", verdict: "supported", evidence: "strong", notes: "Label ingredient list supports this claim. Standard for quality organ supplements." },
  ],
  valueMetric: { pricePerServing: 0.31, primaryActiveGrams: 3, pricePerGramActive: 0.10, categoryAvgPricePerGram: 0.20, efficiency: "above" },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org", "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/forest-leaf-beef-organ-complex#review",
  name: "Forest Leaf Beef Organ Complex — Fitlabreviews FSP Review",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-27", dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: { "@type": "Product", name: "Forest Leaf Beef Organ Complex", brand: { "@type": "Brand", name: "Forest Leaf" }, category: "Organ Supplement" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Forest Leaf a good brand?", acceptedAnswer: { "@type": "Answer", text: "Forest Leaf has strong Amazon ratings and no documented quality incidents. The sourcing transparency gap is the main concern. For a mid-budget buyer who wants a 5-organ blend and is not concerned about sourcing documentation, it is a reasonable choice." } },
    { "@type": "Question", name: "How does Forest Leaf compare to Left Coast Performance?", acceptedAnswer: { "@type": "Answer", text: "Left Coast Performance wins on sourcing transparency (NZ confirmed on label) at a slightly higher price ($0.39 vs $0.31/serving). Forest Leaf wins on price. For the extra $0.08/serving, Left Coast Performance's confirmed NZ sourcing is worth it for most buyers." } },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "NZ sourced 5-organ blend for $0.08/serving more. The upgrade pick over Forest Leaf.", publishedAt: "2026-05-27", figNumber: "01" },
  { slug: "force-factor-primal-origins", title: "Force Factor Primal Origins", brand: "Force Factor", category: "Organ Supplement", rating: 7 as ReviewRating, verdict: "Cheaper than Forest Leaf at $0.18/serving. Undisclosed sourcing.", publishedAt: "2026-05-27", figNumber: "02" },
];

export default function ForestLeafReviewPage() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Forest Leaf Beef Organ Complex</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1B14 0%, #141008 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-050 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Forest Leaf<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Organ Complex</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#8B7355" color="#8B7355" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i + editorialScore} size={14} fill="none" color="#8B7355" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div className="hidden sm:flex" style={{ position: "absolute", right: "6%", bottom: 0, width: 130, height: 160, alignItems: "flex-end", justifyContent: "center" }}>
            <img src="/products/ForestLeaf-Beef-Organ.webp" alt="Forest Leaf Beef Organ Complex" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-050</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B7355" }}>Full Review · FSP Scored · 5-Organ Mid-Tier</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Forest Leaf · Organ Supplement · 5-Organ Blend
              </p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Organ Complex — Solid Mid-Tier<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>But Opaque on Sourcing</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                5-organ blend at $0.31/serving. Strong Amazon reviews. No published COA or sourcing country. We tested whether the formula and price hold up against competitors with better transparency.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/4dzvZTM"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#8B7355", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
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
            { label: "Form", value: "Capsules (180 ct)" },
            { label: "Serving", value: "6 caps / 3,000mg" },
            { label: "Source", value: "Undisclosed" },
            { label: "Published", value: "May 27, 2026" },
            { label: "Last Updated", value: "May 27, 2026" },
          ]} />
        </div>

        {/* ── Author box ─────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-hanken), sans-serif" }}>
                Mid-tier supplement analysis · Sourcing verification · Amazon review analysis
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
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-hanken), sans-serif" }}>
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-050</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Forest Leaf is a functional mid-tier option with good Amazon reviews and a complete 5-organ formula. The opaque sourcing story prevents it from ranking higher.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    For buyers between Force Factor&apos;s price and Left Coast Performance&apos;s NZ provenance, it fills the gap — but for an extra $0.08/serving, Left Coast Performance&apos;s confirmed NZ sourcing is the better choice.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#8B7355", marginBottom: 4 }}>{p.score.toFixed(1)} / 10</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.notes.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHY ORGAN SUPPLEMENTS ──────────────────────────────────── */}
              <section id="why-organs" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Forest Leaf in the Organ Supplement Landscape</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Forest Leaf Beef Organ Complex occupies the mid-range of the organ supplement category: more expensive than Force Factor&apos;s undisclosed-sourcing budget option ($0.18), cheaper than the NZ-sourced brands ($0.39–$0.50), and without the organic certification of Perfect Supplements ($0.33). The formula is complete and the Amazon review history is positive.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  The value of Forest Leaf is primarily price and convenience. If you want a 5-organ blend on Amazon Prime without paying for NZ sourcing, this is a reasonable option. The sourcing opacity is the main limitation — it is difficult to justify Forest Leaf over Left Coast Performance for $0.08 more per serving when Left Coast provides confirmed NZ provenance.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #8B7355" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355", marginBottom: 8 }}>The $0.08 question</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    Left Coast Performance costs $0.39/serving vs Forest Leaf&apos;s $0.31. For a 30-serving bottle, that&apos;s $2.40 more per month — for confirmed NZ sourcing. For most buyers, that premium is worth it.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-050" />
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
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

                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", backgroundColor: "#1A1714" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>Supplement Facts</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#A89880" }}>Serving size: 6 capsules · Servings per container: 30</p>
                  </div>
                  <div style={{ padding: "0 20px", backgroundColor: "#F8F2E4" }}>
                    {[
                      { label: "Beef Organ Blend (Freeze-Dried)", value: "3,000mg", bold: true },
                      { label: "Organs included", value: "Liver, Heart, Kidney, Spleen, Pancreas" },
                      { label: "Source", value: "Undisclosed" },
                      { label: "Certification", value: "None" },
                      { label: "Other ingredients", value: "None (as labeled)" },
                    ].map((row, i, arr) => (
                      <div key={row.label} style={{ padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: "#1A1714" }}>{row.label}</span>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: row.bold ? "#8B7355" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients from the 5-Organ Blend</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Estimated contributions per 6-capsule serving based on USDA FDC data. Exact values unverifiable without sourcing disclosure.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Vitamin B12", source: "Liver + Kidney", evidence: "moderate" as EvidenceLevel, note: "Primary B12 sources in the blend. Liver has the highest B12 concentration of any food." },
                    { nutrient: "Vitamin A (Retinol)", source: "Liver", evidence: "moderate" as EvidenceLevel, note: "Preformed retinol present. Exact amount unverifiable — track total daily intake from all sources." },
                    { nutrient: "CoQ10", source: "Heart", evidence: "moderate" as EvidenceLevel, note: "Cardiac muscle is the richest dietary CoQ10 source. Amount depends on heart proportion of blend." },
                    { nutrient: "Heme Iron", source: "Spleen + Liver", evidence: "moderate" as EvidenceLevel, note: "Spleen is the highest iron-density organ. 15–35% absorption vs 2–20% for non-heme iron." },
                    { nutrient: "Selenium", source: "Kidney", evidence: "moderate" as EvidenceLevel, note: "Beef kidney is a rich selenium source. Important for thyroid function and antioxidant defense." },
                    { nutrient: "Digestive Enzymes", source: "Pancreas", evidence: "limited" as EvidenceLevel, note: "Pancreatic amylase, lipase, and protease. Some enzymatic activity may survive freeze-drying." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 4 }}>{row.nutrient}</p>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8B7355", fontWeight: 600, marginBottom: 4 }}>from {row.source}</p>
                        <EvidenceBadge level={row.evidence} showIcon={false} />
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{row.note}</p>
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
                      title: "Sourcing: what we know",
                      body: "Forest Leaf does not consistently disclose the country of origin for their beef organs. Some product listings and marketing materials have referenced US or NZ sourcing, but this is not confirmed across all listings. This inconsistency is itself a transparency signal — brands with premium sourcing typically lead with it.",
                    },
                    {
                      title: "What sourcing opacity means practically",
                      body: "Without a disclosed source country, there is no way to assess the regulatory environment governing the cattle. This does not mean the product is unsafe — Forest Leaf has no documented quality incidents and maintains high Amazon review ratings. It means quality cannot be independently verified, and you are relying on the brand's internal standards.",
                    },
                    {
                      title: "Processing",
                      body: "The product is described as freeze-dried on product listings, which is the preferred processing method for preserving heat-sensitive nutrients. Standard shelf-stable capsule format. No preservatives or flow agents on the label.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── LAB & VERIFICATION ─────────────────────────────────────── */}
              <section id="lab-data" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Lab Data & Verification</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>No third-party testing results are published for Forest Leaf. The strong Amazon review record is positive but is not a substitute for documented testing.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "Heavy Metal COA", status: "Not Published", result: "No public batch testing", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "Informed Sport", status: "Not Certified", result: "Not suitable for drug-tested athletes", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "NSF Certified", status: "N/A", result: "No certification", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
                    { test: "Amazon Review Signal", status: "Positive", result: "High ratings, no incident history", icon: "~", color: "#8B7355", bg: "#F5EEE5" },
                  ].map((cert) => (
                    <div key={cert.test} style={{ padding: "16px", border: `1px solid ${cert.color}33`, borderRadius: 10, backgroundColor: cert.bg }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: cert.bg, border: `1px solid ${cert.color}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: cert.color, fontFamily: "var(--font-dm-mono), monospace" }}>{cert.icon}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif" }}>{cert.test}</span>
                      </div>
                      <p style={{ fontSize: 11, color: cert.color, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 700 }}>{cert.status}</p>
                      <p style={{ fontSize: 11, color: "#5C5650" }}>{cert.result}</p>
                    </div>
                  ))}
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
                    { q: "Recommended dose", a: "6 capsules per day. Split 3 with breakfast and 3 with another meal for best tolerance." },
                    { q: "Starting out", a: "Begin with 3 capsules for the first week. Some people experience mild digestive adjustment when introducing organ supplements. Build to 6 if tolerated." },
                    { q: "Timing", a: "Always with food. Fat-soluble vitamins A, D, and K2 require dietary fat for absorption. Any fat-containing meal is sufficient." },
                    { q: "Vitamin A tracking", a: "Track total daily retinol from all sources. The tolerable upper limit is 10,000 IU/day. Add your multivitamin, fortified foods, and other liver products." },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 6 }}>{item.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Forest Leaf sits at a price point between Force Factor and Left Coast Performance. This comparison shows what each $0.08 increment buys you.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Forest Leaf", "Force Factor", "Left Coast Perf.", "Perfect Supps"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["7/10 ★", "7/10", "8/10", "8/10"] },
                        { metric: "Price / serving", vals: ["$0.31 ★", "$0.18", "$0.39", "$0.33"] },
                        { metric: "Source country", vals: ["Undisclosed", "Undisclosed", "New Zealand", "Brazil"] },
                        { metric: "Organs", vals: ["5-organ ★", "4-organ", "5-organ", "Liver only"] },
                        { metric: "Certification", vals: ["None", "None", "None", "USDA Organic"] },
                        { metric: "COA available", vals: ["No", "No", "No", "No"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#8B7355" : "#2D2926", fontFamily: "var(--font-hanken), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026.</p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Forest Leaf and its price-tier alternatives — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Organ Complex"
                    brand="Forest Leaf"
                    category="Organ Supplement"
                    score={7}
                    priceUSD="~$28 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["5-Organ Blend", "Amazon Available"]}
                    buyUrl="https://amzn.to/4dzvZTM"
                    buyLabel="Buy on Amazon"
                    reviewSlug="forest-leaf-beef-organ-complex"
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
                    tags={["NZ Grass-Fed", "Upgrade Pick"]}
                    buyUrl="https://amzn.to/4dzvZTM"
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
                    tags={["USDA Organic"]}
                    buyUrl="https://amzn.to/4dzvZTM"
                    buyLabel="Check Price"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Primal Origins"
                    brand="Force Factor"
                    category="Organ Supplement"
                    priceUSD="~$22 / bottle"
                    priceINR="Not on Amazon.in"
                    tags={["Budget Pick", "Walmart"]}
                    buyUrl="https://amzn.to/4dzvZTM"
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
                    "5-organ comprehensive blend",
                    "Competitive mid-tier price ($0.31/serving)",
                    "Strong positive Amazon review history",
                    "No fillers",
                  ]}
                  cons={[
                    "Sourcing country not consistently disclosed",
                    "No COA or third-party testing",
                    "Less brand credibility than top-tier options",
                  ]}
                />
              </section>

              {/* ─── SAFETY & VITAMIN A ─────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety & Vitamin A</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Standard safety considerations for organ supplements apply to Forest Leaf as for all products in this category.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { title: "Vitamin A tracking", body: "Liver in the blend contributes preformed retinol. The tolerable upper limit is 10,000 IU/day. Add your multivitamin and other retinol sources before assessing total intake." },
                    { title: "Heavy metals", body: "No COA is available for Forest Leaf. Without documented testing, heavy metal levels are unverifiable. For general healthy adults at normal doses, practical risk is low. For pregnant women or children, choose a product with published testing." },
                    { title: "Pregnancy", body: "Pregnant women should not use liver supplements without physician guidance. Preformed retinol at elevated doses is flagged in obstetric guidelines." },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICE & VALUE ──────────────────────────────────────────── */}
              <section id="value" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="5-organ blend" />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginTop: 16 }}>
                  $0.31/serving is reasonable for a 5-organ blend with good Amazon reviews. The value score (9.0/10) reflects the price-to-formula ratio — good value for what is labeled. The sourcing gap means quality-adjusted value is lower than the raw price suggests.
                </p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US",
                      price: "~$28",
                      notes: "Primary channel. Prime eligible. Check the listing is sold by Forest Leaf or fulfilled by Amazon. Verify the label shows the current 5-organ formula.",
                      recommended: true,
                      url: "https://amzn.to/4dzvZTM",
                    },
                  ].map((channel) => (
                    <div key={channel.channel} style={{ padding: "16px 20px", border: `1px solid ${channel.recommended ? "#2D6A4F33" : "#D4C9B8"}`, borderRadius: 10, backgroundColor: channel.recommended ? "#F0F8F3" : "#F8F2E4", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif" }}>{channel.channel}</p>
                          {channel.recommended && <span style={{ padding: "1px 7px", backgroundColor: "#2D6A4F", borderRadius: 4, fontSize: 8, color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Recommended</span>}
                        </div>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{channel.notes}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714" }}>{channel.price}</p>
                        <a href={channel.url} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
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
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <summary>{faq.name}</summary>
                      <p className="faq-answer">{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-050</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    Solid mid-tier.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>Left Coast beats it for $0.08 more.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Functional formula, reasonable price, strong Amazon reviews. The sourcing opacity is a frustrating gap that prevents a higher score.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    For $0.08 more per serving, Left Coast Performance&apos;s confirmed NZ sourcing makes it the better choice at this price tier. If Forest Leaf had consistent sourcing disclosure, it would score 8/10. Until then, it earns 7.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#8B7355", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Good formula. Opaque sourcing. Upgrade to Left Coast for $0.08 more.</p>
                    </div>
                    <a href="https://amzn.to/4dzvZTM" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#8B7355", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                      Buy on Amazon <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </section>

              {/* ─── RESEARCH REFERENCES ────────────────────────────────────── */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "USDA FoodData Central. Beef organ nutrient profiles — liver (#174489), heart (#174470), kidney (#174481), spleen, pancreas.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A (2001). Tolerable Upper Intake Level: 10,000 IU/day for adults.",
                      "Fellows PJ (2009). Food Processing Technology. Freeze-drying process parameters and nutrient retention.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>{ref}{" "}<a href={"https://scholar.google.com/scholar?q=" + encodeURIComponent(ref.split("(")[0].trim().substring(0,80))} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace" }}>↗</a></li>
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Related Reviews</p>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
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
