import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink, AlertTriangle } from "lucide-react";
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
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Heart & Soil Beef Organs Review (2026): Worth $55?",
  description:
    "Heart & Soil Beef Organs review: Informed Sport certified, Dr. Paul Saladino formulation, US regenerative sourcing, 5-organ blend, $1.83/serving. FSP 9/10.",
  alternates: { canonical: "/reviews/heart-and-soil-beef-organs" },
  openGraph: {
    title: "Heart & Soil Beef Organs Review (2026): Worth $55?",
    description:
      "The only Informed Sport certified beef organ supplement — is Dr. Saladino's multi-organ blend worth the premium price? Our full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "formula", label: "Formula Analysis" },
  { id: "sourcing", label: "Sourcing & Certification" },
  { id: "nutrients", label: "Nutrient Profile" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "safety", label: "Safety Notes" },
  { id: "value", label: "Price & Value" },
  { id: "comparison", label: "vs Competitors" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.0,
      notes:
        "Five-organ blend: beef liver, heart, kidney, spleen, and pancreas. Each organ contributes distinct nutrients — liver (retinol, B12, heme iron), heart (CoQ10), kidney (selenium, B2), spleen (heme iron, zinc), pancreas (enzymes, B vitamins). The nose-to-tail approach is the most nutritionally complete in this category. Minor deduction: individual organ doses are not disclosed — it is a proprietary blend. You cannot know the exact retinol contribution from liver alone, which matters for safety calculations.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "Heart & Soil publish their farming partners on the website and COA data is available. Dr. Saladino is publicly known and regularly discusses formulation decisions on his podcast. The main transparency gap is the proprietary blend — doses per organ are undisclosed. This is the most significant weakness given that retinol toxicity is a real concern and consumers cannot calculate their exact intake without knowing the liver-to-total-organ ratio.",
    },
    {
      pillar: "verification",
      score: 9.5,
      notes:
        "Informed Sport certified — every batch is tested for over 200 WADA-prohibited substances. This is the gold standard for supplement purity verification and is the highest verification level available for this product category. Heavy metal COA is also available. No other beef organ supplement in this roundup holds this certification. For competitive athletes, this is decisive.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "At $55/bottle (30 servings), this is $1.83/serving — the most expensive in the category. The Informed Sport premium is real and justified for athletes; for everyone else, the additional $0.33/serving over Ancestral Supplements is harder to justify. The 5-organ blend does provide broader nutrition, but without disclosed dosing, you cannot compare organ-for-organ efficiency. For non-athletes who do not need Informed Sport testing, Ancestral Supplements at $1.50/serving is the better value.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Six capsules per serving — same as Ancestral Supplements. Freeze-dried, room-temperature stable, travel-friendly. No taste or smell. The multi-organ approach means you are covering more nutritional bases in the same 6 capsules rather than concentrating on liver alone. Dr. Saladino's recommended protocol (6 caps with the largest meal) is clear and well-reasoned.",
    },
  ],
  flags: [
    { type: "green", label: "Informed Sport certified", detail: "Every batch tested for 200+ WADA-prohibited substances. The only beef organ supplement with this certification." },
    { type: "green", label: "5-organ nose-to-tail formula", detail: "Liver, heart, kidney, spleen, and pancreas — the most comprehensive organ blend in this roundup." },
    { type: "green", label: "US regenerative farm sourcing", detail: "Sources from named regenerative US farms. Regenerative = beyond organic — soil health, carbon farming, and strict animal welfare." },
    { type: "green", label: "Heavy metal COA available", detail: "Third-party tested for lead, cadmium, arsenic, and mercury. Published on request." },
    { type: "green", label: "Dr. Paul Saladino formulation", detail: "Formulated by a physician (MD) with deep clinical expertise in carnivore nutrition and ancestral health." },
    { type: "red", label: "Proprietary blend — doses undisclosed", detail: "Cannot determine individual organ contribution per serving. Retinol calculation from liver alone is impossible without this data.", deduction: 0.5 },
    { type: "red", label: "Most expensive in category", detail: "$1.83/serving vs $1.50 for Ancestral Supplements. Premium is justified for athletes; less so for general use.", deduction: 0.2 },
  ],
  claimAudit: [
    { claim: "\"The most nutrient-dense beef organ supplement available\"", verdict: "overstated", evidence: "moderate", notes: "Depends on the metric. For nutrient breadth, the 5-organ formula is the most comprehensive in this review. For individual organ concentration (e.g., retinol from liver), single-organ products at higher doses may deliver more per gram. 'Most nutrient-dense' is directionally credible but unverifiable without organ dosing disclosure." },
    { claim: "\"Sourced from US regenerative farms\"", verdict: "supported", evidence: "strong", notes: "Farm partners are named on the website and include verifiably regenerative operations. Regenerative certification exists via multiple bodies. Claim is specific and verifiable." },
    { claim: "\"Informed Sport certified\"", verdict: "supported", evidence: "strong", notes: "Informed Sport certification is public and batch-verifiable at informed-sport.com. Every product bearing this logo has been independently tested. Claim is fully verifiable." },
    { claim: "\"Contains natural CoQ10 from grass-fed beef heart\"", verdict: "supported", evidence: "strong", notes: "Beef heart is the richest dietary source of CoQ10. Fresh heart contains 113mg CoQ10/100g; dried concentrate will vary by freeze-drying ratio but the claim is scientifically accurate." },
    { claim: "\"Supports hormone balance\"", verdict: "unsupported", evidence: "limited", notes: "No clinical evidence that beef organ supplements improve hormonal parameters in humans. The claim likely derives from the micronutrient content (zinc, vitamin A cofactors for steroidogenesis) — but the mechanism-to-clinical-outcome gap is significant." },
  ],
  valueMetric: {
    pricePerServing: 1.83,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.61,
    categoryAvgPricePerGram: 0.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 9 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs#review",
  name: "Heart & Soil Beef Organs — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Heart & Soil Beef Organs using the Fitlab Scoring Protocol. Analysis covers the 5-organ formula, Informed Sport certification, US regenerative sourcing, Dr. Saladino's formulation rationale, proprietary blend transparency issues, and value at $55/bottle.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Heart & Soil Beef Organs",
    brand: { "@type": "Brand", name: "Heart & Soil" },
    category: "Organ Supplement",
    description: "5-organ freeze-dried blend (liver, heart, kidney, spleen, pancreas) from US regenerative farms. Informed Sport certified.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "55.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Heart & Soil safe for athletes?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Heart & Soil is the only beef organ supplement with Informed Sport certification, meaning every batch is tested for WADA-prohibited substances. For competitive athletes in tested sports, this is the only beef organ supplement we can recommend with confidence." },
    },
    {
      "@type": "Question",
      name: "Is the proprietary blend a problem?",
      acceptedAnswer: { "@type": "Answer", text: "It is a concern specifically around vitamin A (retinol) safety. Without knowing the exact liver-to-organ ratio, you cannot calculate your precise retinol intake. In practice, a 5-organ blend will contain significantly less liver per capsule than a single-organ liver product — so retinol intake is likely lower. But for pregnant women or those tracking retinol closely, the lack of disclosure is a real limitation." },
    },
    {
      "@type": "Question",
      name: "How does Heart & Soil compare to Ancestral Supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Heart & Soil wins on: Informed Sport certification, organ variety (5 vs 1), US regenerative sourcing. Ancestral Supplements wins on: sourcing transparency (batch COA by lot number), price ($1.50 vs $1.83/serving), and individual organ dose disclosure. Athletes should choose Heart & Soil. Sourcing-focused buyers on a budget should choose Ancestral. See our full comparison article." },
    },
    {
      "@type": "Question",
      name: "What is regenerative farming?",
      acceptedAnswer: { "@type": "Answer", text: "Regenerative agriculture goes beyond organic certification. It focuses on rebuilding soil health through managed grazing, cover cropping, and carbon sequestration. For organ supplements, this typically means cattle have year-round pasture access, no antibiotics, no hormones, and the farming system actively improves land health rather than depleting it." },
    },
    {
      "@type": "Question",
      name: "Can women take Heart & Soil Beef Organs?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, with the same caveats as all organ supplements: pregnant women should consult their OB/GYN due to retinol content. For non-pregnant women, the heme iron, B12, folate, and zinc in a multi-organ blend are particularly well-suited to female nutritional needs. Heart & Soil also makes female-specific formulas that include reproductive organ tissue." },
    },
  ],
};

const pros = [
  "Only Informed Sport certified beef organ supplement",
  "Comprehensive 5-organ nose-to-tail formula",
  "US regenerative farm sourcing — named farms on website",
  "Dr. Saladino's clinical formulation expertise",
  "Heavy metal COA available on request",
];
const cons = [
  "Proprietary blend — individual organ doses undisclosed",
  "Most expensive in category at $1.83/serving",
  "Retinol calculation impossible without organ-dose disclosure",
];

export default function HeartAndSoilReviewPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Feature banner */}
      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-046</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Heart & Soil Beef Organs
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>
              The carnivore community's premium pick — but is the price justified?
            </em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            {[1,2,3,4,5].map((i) => (
              <Star key={i} size={16} fill={i <= Math.round(editorialScore / 2) ? "#C4622D" : "none"} color={i <= Math.round(editorialScore / 2) ? "#C4622D" : "#5C5650"} />
            ))}
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8A8480", marginLeft: 8 }}>{editorialScore}/10</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/reviews" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Reviews</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Heart & Soil Beef Organs</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div className="review-layout">

          {/* Sidebar TOC */}
          <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Main content */}
          <article style={{ minWidth: 0 }}>
            <MobileTOC items={tocItems} />

            {/* Hero row */}
            <div id="verdict" style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>
                Heart & Soil Beef Organs
              </h2>
              <MetadataStrip
                items={[
                  { label: "Brand", value: "Heart & Soil" },
                  { label: "Founder", value: "Dr. Paul Saladino" },
                  { label: "Price", value: "$55 / 180 caps" },
                  { label: "Serving", value: "6 caps (3g)" },
                  { label: "Sourcing", value: "US Regenerative" },
                  { label: "Certification", value: "Informed Sport" },
                ]}
              />

              {/* Author box */}
              <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginTop: 20, marginBottom: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700 }}>FR</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 2 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 12, color: "#5C5650" }}>Independent supplement review · Evidence-led methodology · No brand affiliation</p>
                </div>
              </div>

              {/* Affiliate disclosure */}
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderRadius: 8, marginBottom: 24 }}>
                <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
                  DISCLOSURE: This review may contain affiliate links. We earn a small commission if you purchase via our links — at no extra cost to you. This does not influence our scores or recommendations. <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link>
                </p>
              </div>

              <ReviewScoreBadge rating={editorialScore} size="lg" />

              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Verdict</p>
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>
                  Heart & Soil is the best beef organ supplement for athletes and the most comprehensive nose-to-tail formula on the market. The Informed Sport certification is decisive for drug-tested competitors — no other organ supplement offers this. The main weakness is the proprietary blend: without disclosed organ doses, you cannot calculate exact retinol intake, which matters for safety. For non-athletes, Ancestral Supplements offers comparable sourcing quality at a lower price. For everyone else who wants the broadest organ nutrition with third-party verification, Heart & Soil is the clear choice.
                </p>
              </div>
            </div>

            {/* Score breakdown */}
            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-046" />
            </section>

            {/* Flags */}
            <section id="flags" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Red & Green Flags</h3>
              <FlagSystem flags={rubric.flags} />
            </section>

            {/* Formula */}
            <section id="formula" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Formula Analysis</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Heart & Soil uses a 5-organ blend in a 6-capsule serving: beef liver, beef heart, beef kidney, beef spleen, and beef pancreas. Total organ content is 3,000mg per serving — the same weight as Ancestral Supplements' single-organ liver product, but distributed across five different tissues.
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                The nose-to-tail philosophy is sound: different organs contribute different nutrients. Heart provides CoQ10 that liver lacks. Kidney provides selenium at levels not found in liver. Spleen provides heme iron with a different mineral co-factor profile than liver iron. Pancreas provides digestive enzyme precursors.
              </p>
              <div style={{ padding: 16, backgroundColor: "#FEF9F7", border: "1px solid #E5C4B8", borderRadius: 8, borderLeft: "3px solid #9B2020" }}>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                  <strong style={{ color: "#9B2020" }}>Transparency gap:</strong> Individual organ weights are not disclosed. A 3,000mg blend could be 70% liver and 7.5% each of the other four — or evenly distributed. The retinol (vitamin A) contribution depends entirely on the liver fraction. Without this data, precise safety calculations are impossible.
                </p>
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Sourcing & Certification</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Heart & Soil sources from US regenerative farms including well-known operations in the pasture-based livestock space. Unlike Ancestral Supplements (New Zealand), the US sourcing means potentially shorter supply chains and more direct farm relationships. The regenerative certification goes beyond USDA Organic by requiring soil health metrics and carbon farming practices.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { label: "Sourcing country", value: "United States" },
                  { label: "Farm model", value: "Regenerative (named farms)" },
                  { label: "Antibiotic use", value: "None" },
                  { label: "Hormone use", value: "None" },
                  { label: "Informed Sport", value: "Yes — every batch" },
                  { label: "Heavy metal COA", value: "Available on request" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nutrients */}
            <section id="nutrients" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Key Nutrients per Serving</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Exact nutrient values vary batch to batch (a feature of whole-food products). Approximate values at the 6-capsule (3g) serving based on known nutrient density of these organs:
              </p>
              <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <table style={{ borderCollapse: "collapse", minWidth: 500, width: "100%" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                      {["Nutrient", "Source organ", "Approx. per serving", "% Daily Value"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Retinol (Vit A)", "Liver (primary)", "~500–2,000 IU", "~5–20% DV"],
                      ["Vitamin B12", "Liver, kidney", "~8–15µg", "~300–600% DV"],
                      ["Heme Iron", "Liver, spleen", "~1–2mg", "~6–11% DV"],
                      ["CoQ10", "Heart", "~5–15mg", "No DV set"],
                      ["Selenium", "Kidney", "~15–30µg", "~25–55% DV"],
                      ["Zinc", "Spleen", "~1–2mg", "~9–18% DV"],
                      ["Folate", "Liver", "~30–60µg", "~8–15% DV"],
                    ].map(([nutrient, source, amount, pct], i) => (
                      <tr key={nutrient} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{nutrient}</td>
                        <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{source}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#1A1714" }}>{amount}</td>
                        <td style={{ padding: "10px 14px", fontSize: 12, color: "#5C5650" }}>{pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>
                Note: Values are estimates from published organ nutrient density data. Actual values vary by batch, season, and animal. Lower retinol estimates reflect dilution across 5 organs vs a single-organ liver product.
              </p>
            </section>

            {/* Claim audit */}
            <section id="claim-audit" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Claim Audit</h3>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            {/* How to take */}
            <section id="how-to-take" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>How to Take It</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>
                Recommended: 6 capsules daily with your largest meal. Dr. Saladino recommends taking with food to support digestion of the fat-soluble vitamins (A, D, K2) present in organ tissue. Starting at 3 capsules and building to 6 over two weeks is sensible if you are new to organ supplements.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Take with the largest meal of the day",
                  "Fat-soluble vitamins in organ meat absorb better with dietary fat",
                  "Start with 3 caps if new to organ supplements — build to 6",
                  "Do not exceed 6 caps without medical guidance",
                  "Consistent daily use is more important than timing",
                ].map((tip, i) => (
                  <li key={i} style={{ fontSize: 13, color: "#5C5650", padding: "5px 0", display: "flex", gap: 10, borderBottom: "1px solid #EDE8DF" }}>
                    <span style={{ color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 600, flexShrink: 0, paddingTop: 2 }}>0{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Safety Notes</h3>
              <div style={{ padding: 16, backgroundColor: "#FEF9F7", border: "1px solid #E5C4B8", borderRadius: 8, marginBottom: 16, display: "flex", gap: 12 }}>
                <AlertTriangle size={18} color="#9B2020" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                  <strong style={{ color: "#9B2020" }}>Pregnant women:</strong> Consult your OB/GYN before taking any organ supplement. The proprietary blend in Heart & Soil makes it impossible to calculate exact retinol intake — a critical consideration given retinol's teratogenic potential above 10,000 IU/day.
                </p>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                For healthy non-pregnant adults at label dose (6 caps): the retinol contribution is likely lower than single-organ liver supplements due to dilution across 5 organs. No serious adverse events are documented in the literature at standard dosing. Avoid stacking with high-dose vitamin A supplements or cod liver oil.
              </p>
            </section>

            {/* Value */}
            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="freeze-dried organ blend" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>
                At $55/bottle ($1.83/serving), Heart & Soil is the most expensive in this roundup. The Informed Sport premium is real: batch testing adds significant cost. For non-athletes who do not require drug testing, the $0.33/serving premium over Ancestral Supplements is harder to justify. For drug-tested athletes, it is non-negotiable.
              </p>
            </section>

            {/* Comparison */}
            <section id="comparison" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>vs Competitors</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  { name: "Ancestral Supplements", score: "8/10", diff: "Cheaper ($1.50/s), NZ sourcing, batch COA — but no Informed Sport, single-organ focus", href: "/reviews/ancestral-supplements-beef-liver" },
                  { name: "Left Coast Performance", score: "8/10", diff: "Cheapest quality option ($0.39/s), NZ sourced — but no COA, less brand credibility", href: "/reviews/left-coast-performance-beef-organs" },
                  { name: "Perfect Supplements", score: "8/10", diff: "USDA organic certified, budget-friendly — but Brazil sourcing, liver only", href: "/reviews/perfect-supplements-beef-liver" },
                ].map((comp) => (
                  <div key={comp.name} style={{ padding: 14, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{comp.name}</p>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D" }}>{comp.score}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5, marginBottom: 8 }}>{comp.diff}</p>
                    <Link href={comp.href} style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Full review →</Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros/cons */}
            <section id="pros-cons" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Pros & Cons</h3>
              <ProsCons pros={pros} cons={cons} />
            </section>

            {/* FAQ */}
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

            {/* Final verdict */}
            <section id="final" style={{ marginBottom: 40 }}>
              <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>
                  The best organ supplement for athletes. Overpriced for everyone else.
                </h3>
                <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.7, marginBottom: 16 }}>
                  Heart & Soil earns a 9/10 for delivering the broadest organ nutrition, the highest verification standard (Informed Sport), and credible US regenerative sourcing. The proprietary blend and premium price are its only real weaknesses — and for athletes who need batch drug testing, neither matters. For general consumers, Ancestral Supplements at $1.50/serving is the better value play.
                </p>
                <ReviewScoreBadge rating={editorialScore} size="md" />
              </div>
            </section>

            {/* References */}
            <section style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { num: 1, text: "Spitze AR et al. (2003). Taurine and carnosine content of various mammalian tissues. JAVMA. — Referenced for organ nutrient density.", href: "https://pubmed.ncbi.nlm.nih.gov/12716108/" },
                  { num: 2, text: "Mattila P et al. (2001). Contents of nutrients and antinutritional factors in conventional and organically produced foods. Eur J Nutr. — Nutrient comparison.", href: "https://pubmed.ncbi.nlm.nih.gov/11341045/" },
                  { num: 3, text: "Westerterp-Plantenga MS (2008). Protein intake and energy balance. Regul Pept. — Organ protein quality context.", href: "https://pubmed.ncbi.nlm.nih.gov/18448177/" },
                  { num: 4, text: "USDA FoodData Central. Beef, variety meats and by-products, liver, raw. FDC ID: 174469.", href: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/174469/nutrients" },
                ].map((ref) => (
                  <div key={ref.num} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", flexShrink: 0, width: 20 }}>[{ref.num}]</span>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5, textDecoration: "none" }}>
                      {ref.text} <ExternalLink size={10} style={{ display: "inline", verticalAlign: "middle" }} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

          </article>
        </div>
      </div>

      {/* Related reviews — outside container */}
      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Related Reviews</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { name: "Ancestral Supplements Beef Liver", score: 8, slug: "ancestral-supplements-beef-liver" },
              { name: "Left Coast Performance Beef Organs", score: 8, slug: "left-coast-performance-beef-organs" },
              { name: "Perfect Supplements Beef Liver", score: 8, slug: "perfect-supplements-beef-liver" },
            ].map((r) => (
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
