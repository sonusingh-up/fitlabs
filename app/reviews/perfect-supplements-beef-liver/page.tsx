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
  title: "Perfect Supplements Beef Liver Review (2026): USDA Organic",
  description:
    "Perfect Supplements Beef Liver review: USDA organic certified, Brazil sourced, liver-only formula, $0.33/serving. The budget organic pick — FSP 8/10.",
  alternates: { canonical: "/reviews/perfect-supplements-beef-liver" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "why-organic", label: "Why USDA Organic" },
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
    { pillar: "formula", score: 8.0, notes: "Single ingredient: freeze-dried desiccated beef liver. 3,000mg per 6-capsule serving. USDA organic certified — the only brand in this roundup with that certification. No fillers. Brazilian sourcing means different regulatory environment than NZ, but USDA organic certification provides an independent standard." },
    { pillar: "transparency", score: 8.0, notes: "USDA organic certification is publicly verifiable and requires third-party auditing. This is a meaningful transparency mechanism even without a heavy-metal COA — the organic certification process involves documentation of farming practices. The Brazil sourcing is openly stated. No COA on the website, which prevents nutrient verification." },
    { pillar: "verification", score: 7.5, notes: "USDA organic certification provides regulatory-level verification of farming practices. No heavy metal COA published. No Informed Sport certification. The organic cert is a meaningful third-party standard, but it verifies agricultural practices, not nutrient content or contaminant testing." },
    { pillar: "value", score: 9.5, notes: "At ~$30/bottle ($0.33/serving), Perfect Supplements offers the cheapest certified-quality organ supplement in this roundup. USDA organic at this price point is genuinely competitive. For organic-focused buyers who cannot stretch to $45+ for Ancestral Supplements, this is the most logical choice." },
    { pillar: "practical", score: 8.0, notes: "6 capsules per serving, room temperature stable, no fillers. Same practical profile as competitors. Available online and on Amazon. The liver-only formula is simpler than multi-organ blends — some buyers prefer this for dose control." },
  ],
  flags: [
    { type: "green", label: "USDA organic certified", detail: "The only USDA organic certified beef liver supplement in this roundup — independently audited farming practices." },
    { type: "green", label: "Lowest price for certified-quality product", detail: "$0.33/serving is the cheapest option with a meaningful quality certification." },
    { type: "green", label: "Clean label — single ingredient", detail: "Beef liver and capsule only. No fillers, no additives." },
    { type: "red", label: "Brazil sourcing", detail: "Not New Zealand. Brazil has different regulatory standards for pasture-raised beef. USDA organic cert compensates partially.", deduction: 0.3 },
    { type: "red", label: "No heavy metal COA", detail: "No batch-specific contaminant testing results available. USDA organic does not test for heavy metals." },
    { type: "red", label: "Liver only — no multi-organ coverage", detail: "Single-organ formula misses CoQ10 (heart), selenium (kidney), and other organ-specific nutrients." },
  ],
  claimAudit: [
    { claim: "\"USDA organic certified\"", verdict: "supported", evidence: "strong", notes: "Certification is publicly verifiable through the USDA Organic Integrity Database. Audited by a USDA-accredited certifying agent. The strongest verifiable claim in this review." },
    { claim: "\"Pasture-raised beef liver\"", verdict: "supported", evidence: "moderate", notes: "USDA organic certification requires access to pasture. Brazil has year-round grass growing conditions, making true pasture-raising feasible. Organic cert provides the strongest assurance available without a farm visit." },
    { claim: "\"Non-GMO\"", verdict: "supported", evidence: "strong", notes: "USDA organic certification prohibits GMO inputs. The non-GMO claim is redundant given the organic cert, but accurate." },
    { claim: "\"Freeze-dried for maximum nutrition\"", verdict: "supported", evidence: "moderate", notes: "Freeze-drying preserves heat-sensitive nutrients better than heat desiccation. The method claim is scientifically accurate. 'Maximum nutrition' overstates the case — nutrients still vary by animal, season, and freeze-drying parameters." },
  ],
  valueMetric: { pricePerServing: 0.33, primaryActiveGrams: 3, pricePerGramActive: 0.11, categoryAvgPricePerGram: 0.20, efficiency: "above" },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org", "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/perfect-supplements-beef-liver#review",
  name: "Perfect Supplements Beef Liver — Fitlabreviews FSP Review",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-27", dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: { "@type": "Product", name: "Perfect Supplements Beef Liver", brand: { "@type": "Brand", name: "Perfect Supplements" }, category: "Organ Supplement" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Perfect Supplements beef liver actually organic?", acceptedAnswer: { "@type": "Answer", text: "Yes — USDA organic certification is independently audited and publicly verifiable. You can check their certification status in the USDA Organic Integrity Database. The certification covers farming practices, feed, and prohibited substance use." } },
    { "@type": "Question", name: "Is Brazil a good source for beef liver supplements?", acceptedAnswer: { "@type": "Answer", text: "Brazil has the world's largest grass-fed beef herd and year-round pasture conditions. The regulatory environment is different from New Zealand — Brazil's USDA organic certification compensates for this by imposing US standards on the farming operation. It is not equivalent to NZ sourcing from a regulatory standpoint, but the organic cert provides meaningful quality assurance." } },
    { "@type": "Question", name: "Why is Perfect Supplements cheaper than Ancestral Supplements?", acceptedAnswer: { "@type": "Answer", text: "Primarily sourcing: Brazil is cheaper than New Zealand for beef production. Perfect Supplements is also a smaller brand without the marketing overhead of Ancestral Supplements or Heart & Soil. The USDA organic certification adds cost, which is why the price is still higher than Force Factor's uncertified budget option." } },
  ],
};

const relatedReviews: {
  slug: string; title: string; brand: string; category: string;
  rating: ReviewRating; verdict: string; publishedAt: string; figNumber: string;
}[] = [
  { slug: "ancestral-supplements-beef-liver", title: "Ancestral Supplements Beef Liver", brand: "Ancestral Supplements", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "The reference-standard NZ freeze-dried liver. Best COA transparency in the category.", publishedAt: "2026-05-27", figNumber: "01" },
  { slug: "left-coast-performance-beef-organs", title: "Left Coast Performance Beef Organs", brand: "Left Coast Performance", category: "Organ Supplement", rating: 8 as ReviewRating, verdict: "Best value NZ-sourced multi-organ blend. Women's formula available.", publishedAt: "2026-05-27", figNumber: "02" },
];

export default function PerfectSupplementsReviewPage() {
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Perfect Supplements Beef Liver</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-048 · ORGAN SUPPLEMENT</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Perfect Supplements<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Beef Liver</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i + editorialScore} size={14} fill="none" color="#7B3B1A" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div className="hidden sm:flex" style={{ position: "absolute", right: "6%", bottom: 0, width: 130, height: 160, alignItems: "flex-end", justifyContent: "center" }}>
            <img src="/products/perfect-supplement.webp" alt="Perfect Supplements Beef Liver" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-048</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · USDA Organic Beef Liver</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                Perfect Supplements · Organ Supplement · USDA Organic Beef Liver
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Beef Liver — The Only USDA<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Organic Option at a Budget Price</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                USDA organic certified. Brazil-sourced. Single ingredient, zero fillers. $0.33/serving. We tested whether the organic certification, Brazil sourcing, and liver-only formula make sense against the competition.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="https://amzn.to/4odctAl"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
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
            { label: "Source", value: "Brazil (USDA Organic)" },
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
                Organic certification verification · USDA Organic Integrity Database · Brazil sourcing analysis
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
              <Link href="/affiliate-disclosure" style={{ color: "#7B3B1A", textDecoration: "none" }}>Read our disclosure →</Link>
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-048</p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    Perfect Supplements is the ideal pick for organic-focused buyers who cannot justify the $45–55 price of top-tier brands. The USDA organic certification is independently audited and verifiable — a meaningful quality signal even without a COA.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    The trade-offs are Brazil sourcing (not NZ) and a liver-only formula. For buyers who want organic certification and budget pricing, this is the only option in the market at $0.33/serving.
                  </p>
                </div>

                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => (
                    <div key={p.pillar} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.pillar}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{p.score.toFixed(1)} / 10</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.notes.split(".")[0]}.</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── WHY USDA ORGANIC ───────────────────────────────────────── */}
              <section id="why-organic" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Why USDA Organic Matters for Organ Supplements</h2>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  Most organ supplement brands use sourcing country (New Zealand, Argentina) as the quality signal. Perfect Supplements uses a different standard: USDA organic certification. This is independently audited, publicly verifiable in the USDA Organic Integrity Database, and enforces specific prohibitions that NZ regulatory compliance does not.
                </p>

                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                  USDA organic requires no synthetic pesticides or fertilizers, no GMOs, no antibiotics unless for disease treatment, no growth hormones, and pasture access. These are different requirements from NZ&apos;s MPI standards — neither is strictly superior, but organic certification is verifiable at a document level in a way that &quot;NZ sourced&quot; is not for buyers outside New Zealand.
                </p>

                <div style={{ padding: "18px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF", borderLeft: "3px solid #2D6A4F" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 8 }}>USDA Organic means</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    No synthetic pesticides or fertilizers · No GMOs · No antibiotics for growth promotion · No growth hormones · Pasture access required · Annually audited by a USDA-accredited certifying agent · Publicly verifiable in USDA Organic Integrity Database.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FSP Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-048" />
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                  FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                  Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
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
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", color: "#A89880" }}>Serving size: 6 capsules · Servings per container: 30</p>
                  </div>
                  <div style={{ padding: "0 20px", backgroundColor: "#F8F2E4" }}>
                    {[
                      { label: "USDA Organic Beef Liver (Freeze-Dried)", value: "3,000mg", bold: true },
                      { label: "Source", value: "Brazil" },
                      { label: "Certification", value: "USDA Organic" },
                      { label: "Processing", value: "Freeze-Dried" },
                      { label: "Other ingredients", value: "None", green: true },
                    ].map((row, i, arr) => (
                      <div key={row.label} style={{ padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</span>
                        <span style={{ fontSize: row.bold ? 13 : 12, fontWeight: row.bold ? 700 : 400, color: row.green ? "#2D6A4F" : row.bold ? "#7B3B1A" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── KEY NUTRIENTS ──────────────────────────────────────────── */}
              <section id="nutrients" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Key Nutrients from Beef Liver</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Approximate values per 6-capsule serving (3,000mg freeze-dried liver ≈ 15–18g fresh liver). Based on USDA FDC data for beef liver.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { nutrient: "Vitamin B12", evidence: "strong" as EvidenceLevel, note: "Highest B12 source in the human diet. Near 100% bioavailability. Critical for neurological function and DNA synthesis." },
                    { nutrient: "Vitamin A (Retinol)", evidence: "strong" as EvidenceLevel, note: "Preformed retinol — the active form. Track total daily retinol from all sources against the 10,000 IU/day upper limit." },
                    { nutrient: "Copper", evidence: "strong" as EvidenceLevel, note: "Liver is the richest dietary copper source. Essential for iron metabolism, connective tissue synthesis, and mitochondrial function." },
                    { nutrient: "Heme Iron", evidence: "strong" as EvidenceLevel, note: "15–35% absorption vs 2–20% for non-heme iron. Particularly relevant for women and athletes with iron-deficiency risk." },
                    { nutrient: "Riboflavin (B2)", evidence: "strong" as EvidenceLevel, note: "Essential for electron transport chain function. Liver ranks among the top dietary sources." },
                    { nutrient: "Choline", evidence: "strong" as EvidenceLevel, note: "Critical for liver health, neurotransmitter synthesis, and cell membrane integrity. Most people are deficient." },
                  ].map((row, i) => (
                    <div key={row.nutrient} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none" }}>
                      <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{row.nutrient}</p>
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
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Processing</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {
                      title: "Brazil sourcing — what it means",
                      body: "Brazil has the world's largest commercial grass-fed beef herd. Year-round tropical climate supports continuous pasture grazing without the cold-season confinement common in northern climates. The regulatory environment differs from NZ — USDA organic certification compensates by imposing US standards on Brazilian farming operations. This is not identical to NZ MPI compliance, but for organic-focused buyers it provides a documented, audited standard.",
                    },
                    {
                      title: "USDA Organic certification — what it audits",
                      body: "USDA organic certification requires annual third-party audit by a USDA-accredited certifying agent. The audit covers farming inputs (no synthetic pesticides, no GMO feed), livestock practices (pasture access, no antibiotics for growth promotion, no growth hormones), and handling/processing chain of custody. It does not test for heavy metal contamination or verify nutrient content.",
                    },
                    {
                      title: "Freeze-drying process",
                      body: "Perfect Supplements uses freeze-drying rather than heat desiccation. Freeze-drying removes moisture under vacuum at low temperatures, preserving heat-sensitive nutrients better than conventional drying methods. The resulting powder is shelf-stable and nutritionally concentrated at approximately 5–6× the density of fresh liver by weight.",
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>USDA organic certification is the primary verification mechanism. Heavy metal COA is not published.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { test: "USDA Organic Cert", status: "Certified", result: "Publicly verifiable in USDA database", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
                    { test: "Heavy Metal COA", status: "Not Published", result: "No public batch testing", icon: "✗", color: "#8B3A2C", bg: "#FDF0EE" },
                    { test: "Informed Sport", status: "N/A", result: "Not relevant for organ supps", icon: "○", color: "#8A8480", bg: "#EDE8DF" },
                    { test: "Non-GMO Verified", status: "Implied", result: "Covered by organic certification", icon: "✓", color: "#2D6A4F", bg: "#E8F5EE" },
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

                <div style={{ padding: "16px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#EDE8DF" }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                    <strong>Verifying the organic cert:</strong> Search &quot;Perfect Supplements&quot; or &quot;Organic&quot; at{" "}
                    <a href="https://organic.ams.usda.gov/integrity/" target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A" }}>organic.ams.usda.gov/integrity</a>.
                    The certification record shows the certifying agent, certificate dates, and scope. This is the most transparent quality verification in this category.
                  </p>
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
                    { q: "Recommended dose", a: "6 capsules per day — the standard serving. Split 3 with breakfast and 3 with another meal for best tolerance and fat-soluble vitamin absorption." },
                    { q: "Starting out", a: "Begin with 3 capsules per day for the first week. Introducing concentrated organ meat gradually reduces the risk of digestive adjustment. Build to 6 if tolerated well." },
                    { q: "Timing", a: "Always with food. Fat-soluble vitamins A, D, and K2 in liver require dietary fat for absorption. A meal containing any fat is sufficient." },
                    { q: "With other supplements", a: "Track total daily Vitamin A from all sources. The tolerable upper intake level is 10,000 IU/day. Add contributions from your multivitamin, fortified foods, and any other liver products before assessing total intake." },
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
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>How Perfect Supplements stacks up on the metrics that matter most for a liver-only product.</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "Perfect Supps", "Ancestral Supps", "Left Coast Perf.", "Force Factor"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#C8A870" : "rgba(242,235,217,0.4)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["8/10 ★", "8/10", "8/10", "7/10"] },
                        { metric: "Certification", vals: ["USDA Organic ★", "None", "None", "None"] },
                        { metric: "Source country", vals: ["Brazil", "New Zealand", "New Zealand", "Undisclosed"] },
                        { metric: "Organs", vals: ["Liver only", "Liver only", "5-organ blend", "Multi-organ"] },
                        { metric: "Heavy metal COA", vals: ["No", "On request", "No", "No"] },
                        { metric: "Price / serving", vals: ["$0.33 ★", "$1.50", "$0.39", "$0.18"] },
                        { metric: "3rd-party cert", vals: ["USDA Organic", "None", "None", "None"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "9px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "9px 14px", fontSize: 12, color: j === 0 ? "#7B3B1A" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 700 : 400, whiteSpace: "nowrap" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026. ★ = category best in this metric.</p>
              </section>

              {/* ─── PRODUCTS AT A GLANCE ───────────────────────────────────── */}
              <section id="products" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Products at a Glance</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>Buy cards for the main organ supplements in this comparison — prices verified May 2026.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                  <ProductCard
                    name="Beef Liver"
                    brand="Perfect Supplements"
                    category="Organ Supplement"
                    score={8}
                    priceUSD="~$30 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["USDA Organic", "Brazil Grass-Fed", "No Fillers"]}
                    buyUrl="https://amzn.to/4odctAl"
                    buyLabel="Buy on Amazon"
                    reviewSlug="perfect-supplements-beef-liver"
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
                    tags={["NZ Grass-Fed", "COA Available"]}
                    buyUrl="https://amzn.to/49RAlmU"
                    buyLabel="Check Price"
                    bgFrom="#1E1208"
                    bgTo="#120C06"
                    accent="#7B3B1A"
                  />
                  <ProductCard
                    name="Beef Organs"
                    brand="Left Coast Performance"
                    category="Organ Supplement"
                    priceUSD="$35 / 180 caps"
                    priceINR="Not on Amazon.in"
                    tags={["NZ Grass-Fed", "5-Organ Blend"]}
                    buyUrl="https://amzn.to/4odctAl"
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
                    tags={["Budget Pick"]}
                    buyUrl="https://amzn.to/4odctAl"
                    buyLabel="Check Price"
                    bgFrom="#1E1B14"
                    bgTo="#141008"
                    accent="#8B7355"
                  />
                </div>
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Only USDA organic certified beef liver supplement in this roundup",
                    "Cheapest certified-quality option ($0.33/serving)",
                    "Clean single-ingredient label",
                    "Well-established brand with strong customer reviews",
                  ]}
                  cons={[
                    "Brazil sourcing — not New Zealand",
                    "No heavy metal COA published",
                    "Liver only — misses multi-organ nutrition",
                    "No third-party drug testing",
                  ]}
                />
              </section>

              {/* ─── SAFETY & VITAMIN A ─────────────────────────────────────── */}
              <section id="safety" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Safety & Vitamin A</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Liver supplements contain preformed retinol — the safety consideration that applies to all brands in this category.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      title: "Daily Vitamin A tracking",
                      body: "At 6 capsules/day, this product contributes an estimated 1,000–2,500 mcg RAE of preformed retinol. The tolerable upper intake level is 3,000 mcg RAE/day (10,000 IU). Add contributions from your multivitamin and any fortified foods before assessing total intake.",
                    },
                    {
                      title: "Pregnancy",
                      body: "Pregnant women should consult a doctor before taking any liver-based supplement. Preformed retinol at elevated doses is flagged in obstetric guidelines. This is a standard warning for all concentrated retinol sources.",
                    },
                    {
                      title: "USDA organic and contaminants",
                      body: "USDA organic certification does not test for heavy metal contamination. Organic farming reduces pesticide exposure but liver still concentrates environmental contaminants. If you require documented heavy metal testing, choose Ancestral Supplements instead.",
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
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="USDA organic freeze-dried beef liver" />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 20 }}>
                  {[
                    { size: "180 caps (30 sv)", price: "~$30", note: "Standard bottle" },
                    { size: "Amazon Subscribe & Save", price: "~$25–27", note: "~10–15% off" },
                  ].map((p) => (
                    <div key={p.size} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{p.size}</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.price}</p>
                      <p style={{ fontSize: 11, color: "#8A8480" }}>{p.note}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>Prices verified May 2026 on Amazon US.</p>
              </section>

              {/* ─── WHERE TO BUY ───────────────────────────────────────────── */}
              <section id="where-to-buy" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    {
                      channel: "Amazon US",
                      price: "~$30",
                      notes: "Primary channel. Prime eligible. Subscribe & Save available. Verify seller is Perfect Supplements or fulfilled by Amazon directly.",
                      recommended: true,
                      url: "https://amzn.to/4odctAl",
                    },
                    {
                      channel: "Perfect Supplements website",
                      price: "~$30",
                      notes: "Direct from brand. Useful if you want to contact them about sourcing documentation or the organic certificate details.",
                      recommended: false,
                      url: "https://amzn.to/4odctAl",
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
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Final Verdict · REV-2026-048</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                    The organic choice,{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>at a price that makes sense.</em>
                  </h2>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8, marginBottom: 16 }}>
                    USDA organic cert at $0.33/serving is a genuinely competitive offer. For organic-focused buyers who want to stay under $35/month, Perfect Supplements is the only logical pick in this category.
                  </p>
                  <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                    Brazil sourcing and the liver-only formula are the limitations. If you want NZ sourcing, choose Ancestral Supplements or Left Coast Performance. If you want multi-organ coverage, choose Left Coast or Heart & Soil. If you want organic certification at the lowest possible price, Perfect Supplements wins.
                  </p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: "#7B3B1A", lineHeight: 1 }}>{editorialScore}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: "#5C5650" }}>/10</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650" }}>FSP Editorial Score</p>
                      <p style={{ fontSize: 12, color: "#8A8480" }}>Best USDA organic option. Budget-friendly.</p>
                    </div>
                    <a href="https://amzn.to/4odctAl" target="_blank" rel="nofollow noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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
                      "USDA FoodData Central #174489 — Beef, variety meats and by-products, liver, raw.",
                      "USDA Organic Integrity Database — organic.ams.usda.gov/integrity. Certification verification for Perfect Supplements.",
                      "USDA National Organic Program. 7 CFR Part 205. Organic livestock production requirements including pasture access and prohibited substances.",
                      "Institute of Medicine. Dietary Reference Intakes for Vitamin A (2001). Tolerable Upper Intake Level: 10,000 IU (3,000 mcg RAE)/day for adults.",
                      "Fellows PJ (2009). Food Processing Technology. Freeze-drying process parameters and nutrient retention.",
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ref}{" "}<a href={"https://scholar.google.com/scholar?q=" + encodeURIComponent(ref.split("(")[0].trim().substring(0,80))} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace" }}>↗</a></li>
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
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em" }}>You might also read</h3>
                </div>
                <Link href="/reviews" style={{ fontSize: 12, color: "#7B3B1A", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
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
