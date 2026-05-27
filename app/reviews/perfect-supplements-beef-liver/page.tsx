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
  title: "Perfect Supplements Beef Liver Review (2026): USDA Organic",
  description:
    "Perfect Supplements Beef Liver review: USDA organic certified, Brazil sourced, liver-only formula, $0.33/serving. The budget organic pick — FSP 8/10.",
  alternates: { canonical: "/reviews/perfect-supplements-beef-liver" },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Flags" },
  { id: "formula", label: "Formula & Organic Cert" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "value", label: "Price & Value" },
  { id: "pros-cons", label: "Pros & Cons" },
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

const pros = ["Only USDA organic certified beef liver supplement in this roundup", "Cheapest certified-quality option ($0.33/serving)", "Clean single-ingredient label", "Well-established brand with strong customer reviews"];
const cons = ["Brazil sourcing — not New Zealand", "No heavy metal COA published", "Liver only — misses multi-organ nutrition", "No third-party drug testing"];

export default function PerfectSupplementsReviewPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-048</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Perfect Supplements Beef Liver
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>The only USDA organic option — at a budget price</em>
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Perfect Supplements Beef Liver</span>
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
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>Perfect Supplements Beef Liver</h2>
              <MetadataStrip items={[{ label: "Brand", value: "Perfect Supplements" }, { label: "Price", value: "~$30 / 180 caps" }, { label: "Serving", value: "6 caps (3g)" }, { label: "Sourcing", value: "Brazil" }, { label: "Certification", value: "USDA Organic" }, { label: "Organs", value: "Liver only" }]} />
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
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>Perfect Supplements is the ideal pick for organic-focused buyers who cannot justify the $45–55 price of top-tier brands. The USDA organic certification is independently audited and verifiable — a meaningful quality signal even without a COA. The trade-offs are Brazil sourcing (not NZ) and a liver-only formula. For buyers who want organic certification and budget pricing, this is the only option in the market.</p>
              </div>
            </div>

            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-048" />
            </section>

            <section id="flags" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Red & Green Flags</h3>
              <FlagSystem flags={rubric.flags} />
            </section>

            <section id="formula" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Formula & Organic Certification</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>Single ingredient: USDA organic certified freeze-dried beef liver from Brazil. 3,000mg per 6-capsule serving. No fillers, no additives. The USDA organic certification is verifiable in the USDA Organic Integrity Database — the most rigorous verifiable standard in this roundup for agricultural practices.</p>
              <div style={{ padding: 14, backgroundColor: "#EAF3DE", border: "1px solid #B8D4A0", borderRadius: 8 }}>
                <p style={{ fontSize: 13, color: "#3B6D11", lineHeight: 1.65 }}><strong>USDA Organic means:</strong> No synthetic pesticides or fertilizers, no GMOs, no antibiotics, no growth hormones, pasture access required, independently audited annually.</p>
              </div>
            </section>

            <section id="claim-audit" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Claim Audit</h3>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="USDA organic freeze-dried beef liver" />
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
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>The organic choice, at a price that makes sense.</h3>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginBottom: 16 }}>USDA organic cert at $0.33/serving is a genuinely competitive offer. Brazil sourcing and the liver-only formula are the limitations. For organic-focused buyers who want to stay under $35/month, Perfect Supplements is the only logical pick.</p>
                <ReviewScoreBadge rating={editorialScore} size="md" />
              </div>
            </section>
          </article>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Related Reviews</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[{ name: "Ancestral Supplements Beef Liver", score: 8, slug: "ancestral-supplements-beef-liver" }, { name: "Heart & Soil Beef Organs", score: 9, slug: "heart-and-soil-beef-organs" }, { name: "Left Coast Performance Beef Organs", score: 8, slug: "left-coast-performance-beef-organs" }].map((r) => (
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
