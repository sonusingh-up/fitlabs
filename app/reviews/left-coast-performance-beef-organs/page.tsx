import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink, AlertTriangle } from "lucide-react";
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
  title: "Left Coast Performance Beef Organs Review (2026)",
  description:
    "Left Coast Performance Beef Organs review: NZ sourced, 5-organ blend, women's formula available, $0.39/serving. Best value organ supplement? FSP 8/10.",
  alternates: { canonical: "/reviews/left-coast-performance-beef-organs" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Flags" },
  { id: "formula", label: "Formula" },
  { id: "sourcing", label: "Sourcing" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "women", label: "Women's Formula" },
  { id: "value", label: "Price & Value" },
  { id: "pros-cons", label: "Pros & Cons" },
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

const pros = ["Best price-to-sourcing ratio in the category ($0.39/serving, NZ sourced)", "Dedicated women's formula with reproductive organ tissue", "5-organ comprehensive blend", "Available at Amazon and Walmart"];
const cons = ["No published COA or heavy metal testing results", "No third-party certification", "Less brand authority than Ancestral or Heart & Soil"];

export default function LeftCoastPerformanceReviewPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-047</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Left Coast Performance Beef Organs
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>NZ sourcing at a budget price — the hidden value pick</em>
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Left Coast Performance</span>
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
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>Left Coast Performance Beef Organs</h2>
              <MetadataStrip items={[{ label: "Brand", value: "Left Coast Performance" }, { label: "Price", value: "$35 / 180 caps" }, { label: "Serving", value: "6 caps (3g)" }, { label: "Sourcing", value: "New Zealand" }, { label: "Organs", value: "5 (Liver, Heart, Kidney, Pancreas, Spleen)" }, { label: "Certification", value: "None" }]} />
              <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 20, marginBottom: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
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
                <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>DISCLOSURE: May contain affiliate links. Commissions do not influence scores. <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link></p>
              </div>
              <ReviewScoreBadge rating={editorialScore} size="lg" />
              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Verdict</p>
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>Left Coast Performance is the best value organ supplement for buyers who want New Zealand sourcing without the premium price. At $0.39/serving with a 5-organ NZ blend, it undercuts Ancestral Supplements by 22% and Heart & Soil by 51%. The trade-off: no published COA and no third-party certification. For general use and budget-conscious buyers who trust NZ regulatory standards, this is an excellent choice. The dedicated women's formula is a genuine differentiation in a crowded market.</p>
              </div>
            </div>

            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-047" />
            </section>

            <section id="flags" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Red & Green Flags</h3>
              <FlagSystem flags={rubric.flags} />
            </section>

            <section id="formula" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Formula Analysis</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>6 capsules deliver 3,000mg of a 5-organ blend: beef liver, heart, kidney, pancreas, and spleen. No fillers, no additives, bovine gelatin capsule. The formula mirrors the nose-to-tail approach of Heart & Soil at roughly one-third the price. Individual organ doses are not disclosed — same limitation as Heart & Soil's proprietary blend.</p>
            </section>

            <section id="sourcing" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Sourcing</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>New Zealand grass-fed and pasture-raised — confirmed on label and website. NZ Ministry for Primary Industries (MPI) regulations ensure year-round pasture access, no routine antibiotics, and strict contaminant monitoring. The absence of a published batch COA means you are trusting NZ regulatory compliance rather than verifying it independently. For most buyers, that is a reasonable trade at this price.</p>
            </section>

            <section id="claim-audit" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Claim Audit</h3>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            <section id="women" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Women's Formula</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Left Coast Performance's female-specific formula adds uterus and ovary tissue to the standard 5-organ blend. The ancestral health principle here is "like supports like" — using reproductive organ tissue to support female hormone balance. Clinical evidence for this specific mechanism is limited, but the product is one of the few female-targeted organ supplements at a non-premium price point.</p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>The women's formula contains the same NZ-sourced organ blend plus additional reproductive tissue. Marketed for hormone support, menstrual health, and iron replenishment. Particularly relevant for women with heavy periods or iron-deficiency anemia given the heme iron content from liver and spleen.</p>
              </div>
            </section>

            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="NZ freeze-dried organ blend" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>At $35/bottle and roughly $0.39/serving, Left Coast Performance is the best-value quality organ supplement in this review. The value score (9.5/10) reflects the exceptional price-to-sourcing ratio. The only reason it does not score 10 is the lack of COA transparency.</p>
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
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Best value. Best for women. No COA is the only catch.</h3>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginBottom: 16 }}>NZ sourcing at $0.39/serving is the standout fact here. The women's formula adds genuine differentiation. The absence of a published COA keeps it behind the top tier — but for the price, this is an excellent organ supplement for the general consumer.</p>
                <ReviewScoreBadge rating={editorialScore} size="md" />
              </div>
            </section>

            <section style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { num: 1, text: "USDA FoodData Central. Beef organ nutrient profiles.", href: "https://fdc.nal.usda.gov/" },
                  { num: 2, text: "New Zealand MPI. Animal Products Act and livestock regulations.", href: "https://www.mpi.govt.nz/" },
                ].map((ref) => (
                  <div key={ref.num} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", flexShrink: 0, width: 20 }}>[{ref.num}]</span>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5, textDecoration: "none" }}>{ref.text} <ExternalLink size={10} style={{ display: "inline", verticalAlign: "middle" }} /></a>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Related Reviews</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[{ name: "Ancestral Supplements Beef Liver", score: 8, slug: "ancestral-supplements-beef-liver" }, { name: "Heart & Soil Beef Organs", score: 9, slug: "heart-and-soil-beef-organs" }, { name: "Perfect Supplements Beef Liver", score: 8, slug: "perfect-supplements-beef-liver" }].map((r) => (
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
