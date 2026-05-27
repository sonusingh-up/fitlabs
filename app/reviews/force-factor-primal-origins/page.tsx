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
  title: "Force Factor Primal Origins Review (2026): Budget Pick?",
  description:
    "Force Factor Primal Origins review: Walmart bestseller, undisclosed sourcing, 4-organ blend, $0.18/serving. The cheapest option — is it good enough? FSP 7/10.",
  alternates: { canonical: "/reviews/force-factor-primal-origins" },
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

const pros = ["Cheapest option in the category ($0.18/serving)", "Available at Walmart — most accessible in-person purchase", "Good for first-time buyers testing the format"];
const cons = ["Sourcing completely undisclosed", "No COA, no third-party testing", "4 organs only — misses spleen", "Cannot verify grass-fed or quality claims"];

export default function ForcefactorPrimalOriginsPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-049</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Force Factor Primal Origins
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>The $0.18/serving entry point — transparency is the price you pay</em>
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Force Factor Primal Origins</span>
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
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>Force Factor Primal Origins</h2>
              <MetadataStrip items={[{ label: "Brand", value: "Force Factor" }, { label: "Price", value: "~$22 / 120 caps" }, { label: "Serving", value: "4–6 caps" }, { label: "Sourcing", value: "Undisclosed" }, { label: "Organs", value: "4 (Liver, Heart, Kidney, Pancreas)" }, { label: "Cert", value: "None" }]} />
              <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 20, marginBottom: 16, display: "flex", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700 }}>FR</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 2 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 12, color: "#5C5650" }}>Independent supplement review · No brand affiliation</p>
                </div>
              </div>
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderRadius: 8, marginBottom: 24 }}>
                <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>DISCLOSURE: May contain affiliate links. <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link></p>
              </div>
              <ReviewScoreBadge rating={editorialScore} size="lg" />
              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Verdict</p>
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>Force Factor Primal Origins is a functional budget organ supplement with one overwhelming advantage: price. At $0.18/serving it is the cheapest organ supplement available at retail. The cost is paid in transparency — sourcing is undisclosed, no COA is available, and no certifications exist. Use it to trial the format, then upgrade to Left Coast Performance or Ancestral Supplements for long-term use.</p>
              </div>
            </div>

            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-049" />
            </section>

            <section id="flags" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Red & Green Flags</h3>
              <FlagSystem flags={rubric.flags} />
            </section>

            <section id="formula" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Formula</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>4-organ blend: beef liver, heart, kidney, and pancreas. Spleen is omitted compared to most competitors. Total organ content per serving is not clearly labeled — a transparency gap that prevents accurate nutrient estimation. No fillers noted on label.</p>
            </section>

            <section id="claim-audit" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Claim Audit</h3>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="organ blend" />
            </section>

            <section id="pros-cons" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Pros & Cons</h3>
              <ProsCons pros={pros} cons={cons} />
            </section>

            <section id="faq" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>FAQ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {faqSchema.mainEntity.map((item, i) => (
                  <div key={i} style={{ padding: "18px 20px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>Q. {item.name}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="final" style={{ marginBottom: 40 }}>
              <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>A trial purchase, not a long-term choice.</h3>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginBottom: 16 }}>The price is real. The transparency gaps are real. A smart use-case: buy one bottle to test organ supplement tolerance, then upgrade to Left Coast Performance or Ancestral Supplements for ongoing supplementation.</p>
                <ReviewScoreBadge rating={editorialScore} size="md" />
              </div>
            </section>
          </article>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Upgrade Options</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[{ name: "Left Coast Performance — NZ sourced budget pick", score: 8, slug: "left-coast-performance-beef-organs" }, { name: "Perfect Supplements — USDA Organic", score: 8, slug: "perfect-supplements-beef-liver" }, { name: "Ancestral Supplements — Full COA", score: 8, slug: "ancestral-supplements-beef-liver" }].map((r) => (
              <Link key={r.slug} href={`/reviews/${r.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{r.name}</p>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700 }}>{r.score}/10</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
