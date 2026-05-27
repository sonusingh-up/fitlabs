import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import MobileTOC from "@/components/ui/MobileTOC";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Forest Leaf Beef Organ Complex Review (2026)",
  description:
    "Forest Leaf Beef Organ Complex review: 5-organ blend, clean label, strong Amazon presence, $0.31/serving. Mid-tier pick for new organ supplement users. FSP 7/10.",
  alternates: { canonical: "/reviews/forest-leaf-beef-organ-complex" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Flags" },
  { id: "formula", label: "Formula" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "value", label: "Price & Value" },
  { id: "pros-cons", label: "Pros & Cons" },
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

const pros = ["5-organ comprehensive blend", "Competitive mid-tier price ($0.31/serving)", "Strong positive Amazon review history", "No fillers"];
const cons = ["Sourcing country not consistently disclosed", "No COA or third-party testing", "Less brand credibility than top-tier options"];

export default function ForestLeafReviewPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-050</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Forest Leaf Beef Organ Complex
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>A clean mid-range pick — solid but opaque on sourcing</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {[1,2,3,4,5].map((i) => <Star key={i} size={16} fill={i <= Math.round(editorialScore/2) ? "#C4622D" : "none"} color={i <= Math.round(editorialScore/2) ? "#C4622D" : "#5C5650"} />)}
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8A8480", marginLeft: 8 }}>{editorialScore}/10</span>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/reviews" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Reviews</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Forest Leaf Beef Organ Complex</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div className="review-layout">
          <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
          <article style={{ minWidth: 0 }}>
            <MobileTOC items={tocItems} />
            <div id="verdict" style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>Forest Leaf Beef Organ Complex</h2>
              <MetadataStrip items={[{ label: "Brand", value: "Forest Leaf" }, { label: "Price", value: "~$28 / 180 caps" }, { label: "Serving", value: "6 caps (3g)" }, { label: "Sourcing", value: "Undisclosed" }, { label: "Organs", value: "5" }, { label: "Cert", value: "None" }]} />
              <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 20, marginBottom: 16, display: "flex", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700 }}>FR</span></div>
                <div><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 2 }}>Reviewed by</p><p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 2 }}>Fitlab Research Team</p><p style={{ fontSize: 12, color: "#5C5650" }}>Independent review · No brand affiliation</p></div>
              </div>
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderRadius: 8, marginBottom: 24 }}><p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>DISCLOSURE: May contain affiliate links. <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link></p></div>
              <ReviewScoreBadge rating={editorialScore} size="lg" />
              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Verdict</p>
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>Forest Leaf is a functional mid-tier option with good Amazon reviews and a complete 5-organ formula. The opaque sourcing story prevents it from ranking higher. For buyers between Force Factor's price and Left Coast Performance's NZ provenance, it fills the gap — but for an extra $0.08/serving, Left Coast Performance's confirmed NZ sourcing is the better choice.</p>
              </div>
            </div>
            <section id="score-breakdown" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3><ScoreBreakdown rubric={rubric} reviewCode="REV-2026-050" /></section>
            <section id="flags" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Flags</h3><FlagSystem flags={rubric.flags} /></section>
            <section id="formula" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Formula</h3><p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>5-organ blend: liver, heart, kidney, spleen, pancreas. 3,000mg per 6-capsule serving. No fillers. The formula is functionally sound and comprehensive. The missing piece is sourcing documentation — without it, nutrient quality cannot be verified.</p></section>
            <section id="claim-audit" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Claim Audit</h3><ClaimAudit items={rubric.claimAudit} /></section>
            <section id="value" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3><ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="5-organ blend" /></section>
            <section id="pros-cons" style={{ marginBottom: 40 }}><h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Pros & Cons</h3><ProsCons pros={pros} cons={cons} /></section>
            <section id="faq" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>FAQ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {faqSchema.mainEntity.map((item, i) => (<div key={i} style={{ padding: "18px 20px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}><p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>Q. {item.name}</p><p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</p></div>))}
              </div>
            </section>
            <section id="final" style={{ marginBottom: 40 }}>
              <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Solid mid-tier. Left Coast beats it for $0.08 more.</h3>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginBottom: 16 }}>7/10 — functional formula, reasonable price, but sourcing opacity is a frustrating gap. For $0.08 more per serving, Left Coast Performance's confirmed NZ sourcing makes it the better choice at the same price tier.</p>
                <ReviewScoreBadge rating={editorialScore} size="md" />
              </div>
            </section>
          </article>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Better Alternatives</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[{ name: "Left Coast Performance — NZ sourced for $0.39/s", score: 8, slug: "left-coast-performance-beef-organs" }, { name: "Perfect Supplements — USDA Organic", score: 8, slug: "perfect-supplements-beef-liver" }, { name: "Ancestral Supplements — COA published", score: 8, slug: "ancestral-supplements-beef-liver" }].map((r) => (
              <Link key={r.slug} href={`/reviews/${r.slug}`} style={{ textDecoration: "none" }}><div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}><p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{r.name}</p><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700 }}>{r.score}/10</span></div></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
