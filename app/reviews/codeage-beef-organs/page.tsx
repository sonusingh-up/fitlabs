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
  title: "Codeage Beef Organs Review (2026): Worth Buying?",
  description:
    "Codeage Beef Organs review: 5-organ blend, Non-GMO Verified, grass-fed sourcing, $0.83/serving. Full FSP scoring — formula, transparency, value. Rated 7/10.",
  alternates: { canonical: "/reviews/codeage-beef-organs" },
  openGraph: {
    title: "Codeage Beef Organs Review (2026): Worth Buying?",
    description:
      "Codeage's beef organ capsules — clean label certifications but undisclosed sourcing country. Is the premium pricing justified? Our full FSP analysis.",
    url: "https://fitlabreviews.com/reviews/codeage-beef-organs",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "formula", label: "Formula Analysis" },
  { id: "sourcing", label: "Sourcing & Certifications" },
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
      score: 7.5,
      notes:
        "Five-organ blend: beef liver, heart, kidney, spleen, and pancreas. Total 3,000mg per 4-capsule serving. The organ selection is comprehensive and matches the best multi-organ products. Deductions: (1) individual organ doses are proprietary — no disclosure of how the 3g is split across five tissues; (2) the serving size of 4 capsules delivering 3g is the same as competitors but the formula is positioned as equivalent without distinguishing proof of quality or potency.",
    },
    {
      pillar: "transparency",
      score: 7.0,
      notes:
        "Codeage clearly labels Non-GMO Verified and Certified Grass-Fed claims. The company does not publicly disclose the country of origin for their beef sourcing — labelled 'grass-fed' without specifying whether US, NZ, Argentine, or Brazilian origin. COA data is not prominently published. For a premium-priced supplement, sourcing opacity is a meaningful concern. Claims of 'pasture-raised' and 'grass-finished' are present on packaging but not independently verified.",
    },
    {
      pillar: "verification",
      score: 6.5,
      notes:
        "Non-GMO Project Verified certification is legitimate and batch-verifiable. However, Non-GMO verification does not test for heavy metals, pathogen contamination, or organ potency. No Informed Sport, NSF Certified for Sport, or equivalent certification. No independently published heavy metal COA found at time of review. The absence of third-party purity testing is the primary verification weakness.",
    },
    {
      pillar: "value",
      score: 6.5,
      notes:
        "At approximately $50/bottle (60 servings, 4 caps/serving), this is $0.83/serving — significantly higher than Left Coast Performance ($0.39) and Forest Leaf ($0.31) without a clear sourcing or certification premium to justify the gap. Non-GMO Verified is a relatively low bar. For the same price, Ancestral Supplements provides superior sourcing transparency. Value score is pulled down by the pricing-to-value mismatch.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Four capsules per serving is a practical dose — lower than the six-capsule count of Ancestral and Heart & Soil. Easy to split across meals (2 caps morning, 2 caps evening). Capsules are bovine gelatin rather than plant-based, consistent with organ supplement category norms. Well-tolerated in most users. Freeze-dried and shelf-stable.",
    },
  ],
  flags: [
    { type: "green", label: "Non-GMO Project Verified", detail: "Third-party certification for GMO-free sourcing, batch-verifiable at nongmoproject.org." },
    { type: "green", label: "5-organ nose-to-tail blend", detail: "Liver, heart, kidney, spleen, and pancreas in one serving." },
    { type: "green", label: "4-capsule serving size", detail: "Lower pill burden than 6-capsule competitors — easier to split across day." },
    { type: "green", label: "Gluten-free, dairy-free", detail: "Multiple allergen exclusions confirmed. Suitable for paleo and carnivore protocols." },
    { type: "red", label: "Sourcing country undisclosed", detail: "Grass-fed claim with no country of origin specified. Significant transparency gap for a premium product.", deduction: 0.5 },
    { type: "red", label: "No heavy metal COA available", detail: "Organ meats concentrate environmental contaminants. No independent heavy metal testing results published.", deduction: 0.5 },
    { type: "red", label: "Proprietary blend — no organ dose disclosure", detail: "Cannot determine retinol contribution from liver fraction. Safety calculation impossible.", deduction: 0.3 },
  ],
  claimAudit: [
    { claim: "\"Grass-fed and pasture-raised\"", verdict: "context-dependent", evidence: "limited", notes: "Claim is made without country of origin or independent certification (e.g., AGA Certified Grass-Fed, PCO Certified 100% Grassfed). 'Grass-fed' without these specifics can apply to cattle that receive minimal pasture time or grass supplementation alongside grain finishing. Non-GMO Verified does not verify grass-fed claims." },
    { claim: "\"Non-GMO Verified\"", verdict: "supported", evidence: "strong", notes: "Non-GMO Project Verification is a legitimate third-party certification with standardised criteria. The claim is batch-verifiable. It confirms absence of GMO ingredients — it does not confirm sourcing quality, potency, or heavy metal safety." },
    { claim: "\"Contains all five major organs\"", verdict: "supported", evidence: "strong", notes: "The supplement facts panel lists beef liver, heart, kidney, spleen, and pancreas as ingredients. The claim is factually accurate. Individual organ weights are not disclosed (proprietary blend)." },
    { claim: "\"Supports immune function\"", verdict: "context-dependent", evidence: "limited", notes: "The zinc, B12, and selenium in a multi-organ blend have established roles in immune cell function. The claim is mechanistically sound at adequate dietary doses. Whether the dose in 3g of mixed organ tissue delivers clinically meaningful immune support is unproven in this form." },
    { claim: "\"Hormone-free and antibiotic-free\"", verdict: "context-dependent", evidence: "limited", notes: "Claim is consistent with grass-fed/pasture-raised positioning but no independent certification is cited. USDA Organic would verify this claim; Non-GMO Verified does not." },
  ],
  valueMetric: {
    pricePerServing: 0.83,
    primaryActiveGrams: 3,
    pricePerGramActive: 0.28,
    categoryAvgPricePerGram: 0.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/codeage-beef-organs#review",
  name: "Codeage Beef Organs — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Codeage Beef Organs using the Fitlab Scoring Protocol. Analysis covers the 5-organ blend, Non-GMO Verified certification, undisclosed sourcing country, absence of heavy metal COA, and value at $0.83/serving.",
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
    name: "Codeage Beef Organs",
    brand: { "@type": "Brand", name: "Codeage" },
    category: "Organ Supplement",
    description: "5-organ freeze-dried blend. Non-GMO Project Verified. Grass-fed claim without country of origin disclosure.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "49.99",
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
      name: "Where does Codeage source their beef organs?",
      acceptedAnswer: { "@type": "Answer", text: "Codeage labels their product as 'grass-fed and pasture-raised' but does not publicly disclose the country of origin at time of review. Unlike Ancestral Supplements (New Zealand, batch-traceable) or Heart & Soil (named US regenerative farms), Codeage's supply chain is opaque. If sourcing origin is important to you, this is a material gap." },
    },
    {
      "@type": "Question",
      name: "Does Codeage Beef Organs have heavy metal testing?",
      acceptedAnswer: { "@type": "Answer", text: "No independently published heavy metal COA was found at time of review. Organ meats — particularly kidney and liver — can concentrate environmental contaminants (cadmium, lead, arsenic). For any organ supplement, heavy metal testing and published results are a meaningful safety consideration. Ancestral Supplements and Heart & Soil publish COA data; Codeage does not prominently do so." },
    },
    {
      "@type": "Question",
      name: "Is Codeage Beef Organs Non-GMO?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Codeage Beef Organs is Non-GMO Project Verified. This is a legitimate third-party certification confirming the absence of GMO ingredients. It does not verify sourcing country, heavy metal levels, or organ potency. The certification is a positive data point but a relatively low bar for a premium organ supplement." },
    },
    {
      "@type": "Question",
      name: "How many capsules per serving of Codeage Beef Organs?",
      acceptedAnswer: { "@type": "Answer", text: "4 capsules per serving, delivering 3,000mg (3g) of mixed organ blend. This is a lower pill burden than Ancestral Supplements and Heart & Soil (both 6 capsules for 3g). Some users split the 4 capsules into 2 caps twice daily with meals. 60 servings per bottle at the standard 4-cap dose." },
    },
    {
      "@type": "Question",
      name: "How does Codeage compare to Ancestral Supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Ancestral Supplements is the stronger choice. Ancestral Supplements provides full sourcing transparency (NZ batch-traceable), published heavy metal COA, and similar pricing with single-organ products that allow precise retinol monitoring. Codeage's 5-organ blend is marginally more convenient, but the sourcing opacity and lack of independent purity testing are material weaknesses at the $0.83/serving price point." },
    },
  ],
};

const pros = [
  "Non-GMO Project Verified — legitimate third-party certification",
  "5-organ nose-to-tail blend in 4 capsules (lower pill burden)",
  "Gluten-free, dairy-free, no artificial additives",
  "Widely available on Amazon with consistent supply",
];
const cons = [
  "Sourcing country not disclosed — 'grass-fed' claim unverifiable",
  "No heavy metal COA published",
  "Proprietary blend — individual organ doses undisclosed",
  "Overpriced at $0.83/serving vs comparable competitors",
];

export default function CodeageBeefOrgansPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Feature banner */}
      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-051</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Codeage Beef Organs
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>
              Non-GMO certified, but sourcing transparency falls short
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Codeage Beef Organs</span>
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
                Codeage Beef Organs
              </h2>
              <MetadataStrip
                items={[
                  { label: "Brand", value: "Codeage" },
                  { label: "Price", value: "~$50 / 60 servings" },
                  { label: "Serving", value: "4 caps (3g)" },
                  { label: "Sourcing", value: "Grass-fed (origin undisclosed)" },
                  { label: "Certification", value: "Non-GMO Project Verified" },
                  { label: "Score", value: "7/10" },
                ]}
              />

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

              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderRadius: 8, marginBottom: 24 }}>
                <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
                  DISCLOSURE: This review may contain affiliate links. We earn a small commission if you purchase via our links — at no extra cost to you. This does not influence our scores or recommendations. <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link>
                </p>
              </div>

              <ReviewScoreBadge rating={editorialScore} size="lg" />

              <div style={{ marginTop: 20, padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Verdict</p>
                <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>
                  Codeage Beef Organs is a mid-tier option in a competitive category. The Non-GMO Project Verified certification is legitimate and the 5-organ blend is formulated correctly. The problem: the price-to-transparency ratio doesn't hold up. At $0.83/serving, you can buy Ancestral Supplements (full sourcing transparency, published COA, NZ grass-fed) for $1.50/serving, or Left Coast Performance (NZ sourced) for $0.39/serving. Codeage sits in an awkward middle — more expensive than the value leaders but lacking the sourcing depth of the premium tier. Worth buying if you specifically value Non-GMO Verified and want 4 capsules rather than 6.
                </p>
              </div>
            </div>

            {/* Score breakdown */}
            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-051" />
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
                Codeage Beef Organs uses the same 5-organ blend found in the category leaders: beef liver, heart, kidney, spleen, and pancreas at 3,000mg per serving. The organ selection is nutritionally sound — each tissue contributes distinct nutrients that the others lack. The formula design is correct.
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                The serving size of 4 capsules is a practical improvement over the 6-capsule serving of Ancestral Supplements and Heart & Soil. Lower pill burden makes the protocol easier to maintain — a real-world usability advantage that the score reflects.
              </p>
              <div style={{ padding: 16, backgroundColor: "#FEF9F7", border: "1px solid #E5C4B8", borderRadius: 8, borderLeft: "3px solid #9B2020" }}>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                  <strong style={{ color: "#9B2020" }}>Transparency issue:</strong> Individual organ doses are not disclosed. The 3g blend could be weighted heavily toward liver (less expensive ingredient, higher retinol content) or more evenly distributed. Without this data, Vitamin A intake cannot be precisely calculated.
                </p>
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Sourcing & Certifications</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Codeage claims grass-fed, pasture-raised sourcing. The country of origin is not disclosed on the product or website. Non-GMO Project Verified certification is authentic — it means the sourcing supply chain has been audited for GMO contamination. However, Non-GMO Verified does not verify:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {["Country of origin or farm identity", "Grass-finishing vs grain-finishing practices", "Heavy metal contamination levels", "Antibiotic or hormone use"].map((item) => (
                  <li key={item} style={{ fontSize: 14, color: "#5C5650", marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                For buyers who specifically value Non-GMO verification, Codeage delivers. For buyers who want to trace their organs to a specific farm or country, the transparency gap is a dealbreaker at this price point.
              </p>
            </section>

            {/* Nutrients */}
            <section id="nutrients" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Nutrient Profile</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                A 5-organ blend at 3g total delivers meaningful amounts of the following nutrients (estimated based on typical organ compositions — exact amounts not disclosed):
              </p>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 480 }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1A1714" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>Nutrient</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>Primary Source Organ</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Retinol (Vitamin A)", "Beef liver", "Vision, immune function, skin health"],
                      ["Vitamin B12", "Liver, kidney", "Neurological function, red blood cells"],
                      ["Heme iron", "Liver, spleen", "Oxygen transport, energy metabolism"],
                      ["CoQ10", "Beef heart", "Mitochondrial electron transport"],
                      ["Selenium", "Beef kidney", "Antioxidant defense, thyroid function"],
                      ["Zinc", "Multiple organs", "Immune function, testosterone synthesis"],
                      ["Digestive enzymes", "Beef pancreas", "Amylase, lipase, protease"],
                    ].map(([nutrient, source, fn], i) => (
                      <tr key={nutrient} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{nutrient}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{source}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{fn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                Codeage recommends 4 capsules daily. Taking all 4 with a fat-containing meal improves absorption of fat-soluble vitamins (A, D, K2). You can split the dose: 2 capsules with breakfast, 2 with dinner.
              </p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 6 }}>Protocol recommendation</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>Take 4 capsules with your main meal. If you also eat liver, liver-based foods, or take a vitamin A supplement, track your total retinol intake to avoid exceeding the tolerable upper limit of 3,000µg RAE/day. Pregnant women should consult their physician before use.</p>
              </div>
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Safety Notes</h3>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, marginBottom: 16 }}>
                <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                  <strong>Vitamin A (retinol):</strong> All liver-containing supplements carry a retinol load. Without disclosed organ dosing, exact intake cannot be calculated. Pregnant women, those planning pregnancy, and individuals taking isotretinoin (Accutane) should avoid liver-based supplements or consult a physician.
                </p>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                Iron content from multi-organ blends is relevant for those with hemochromatosis or elevated ferritin. Consult a physician if you have iron storage conditions. For healthy adults, dietary iron from organ supplements is safe within normal dietary ranges.
              </p>
            </section>

            {/* Value */}
            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="mixed organ blend" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>
                At approximately $0.83/serving, Codeage is mid-market in the organ supplement category. It is cheaper than Heart & Soil ($1.83) and Ancestral Supplements ($1.50) but more expensive than Left Coast Performance ($0.39) and Forest Leaf ($0.31). Given the sourcing transparency weaknesses relative to competitors at similar or lower prices, the value proposition is weak.
              </p>
            </section>

            {/* Comparison */}
            <section id="comparison" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>vs Competitors</h3>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1A1714" }}>
                      {["Brand", "Price/Serving", "Organs", "Sourcing", "Certification", "Score"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Codeage", "$0.83", "5", "Undisclosed", "Non-GMO", "7/10"],
                      ["Ancestral Supplements", "$1.50", "1–5", "NZ (traceable)", "Heavy metal COA", "9/10"],
                      ["Heart & Soil", "$1.83", "5", "US Regen.", "Informed Sport", "9/10"],
                      ["Left Coast Performance", "$0.39", "5", "NZ", "None", "8/10"],
                      ["Forest Leaf", "$0.31", "5", "Undisclosed", "None", "7/10"],
                    ].map(([brand, price, organs, sourcing, cert, score], i) => (
                      <tr key={brand} style={{ backgroundColor: brand === "Codeage" ? "#FEF9F7" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", fontWeight: brand === "Codeage" ? 600 : 400 }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#1A1714" }}>{brand}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{price}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{organs}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{sourcing}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{cert}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pros / Cons */}
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
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final verdict */}
            <section id="final" style={{ marginBottom: 48 }}>
              <div style={{ padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict — REV-2026-051</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Codeage Beef Organs: 7/10</p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 16 }}>
                  Codeage is a competent product held back by sourcing opacity at a price that invites direct comparison to superior alternatives. The Non-GMO Verified certification is genuine, the 4-capsule serving is convenient, and the 5-organ formula is nutritionally complete. But at $0.83/serving, the value case breaks down when you consider what Left Coast Performance delivers for half the price, or what Ancestral Supplements delivers for double.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75 }}>
                  <strong style={{ color: "#F2EBD9" }}>Buy Codeage if:</strong> you specifically require Non-GMO Project Verified and prefer 4 capsules over 6. Skip it if sourcing transparency or value are priorities.
                </p>
              </div>
            </section>

            {/* References */}
            <section style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "USDA FoodData Central. Beef organ nutrient composition data. fdc.nal.usda.gov",
                  "Non-GMO Project Standard v15. Non-GMO Project, 2023. nongmoproject.org",
                  "Hallberg L et al. Dietary heme iron absorption. Am J Clin Nutr, 1979.",
                  "Rayman MP. Selenium and human health. Lancet, 2012.",
                  "Prasad AS. Zinc in human health. J Am Coll Nutr, 2008.",
                ].map((ref, i) => (
                  <div key={i} style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", flexShrink: 0 }}>[{i + 1}]</span>
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.6 }}>{ref}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* Related reviews */}
      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Reviews</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { name: "Ancestral Supplements Beef Liver", score: "9/10", href: "/reviews/ancestral-supplements-beef-liver" },
              { name: "Heart & Soil Beef Organs", score: "9/10", href: "/reviews/heart-and-soil-beef-organs" },
              { name: "Left Coast Performance Beef Organs", score: "8/10", href: "/reviews/left-coast-performance-beef-organs" },
              { name: "Forest Leaf Beef Organ Complex", score: "7/10", href: "/reviews/forest-leaf-beef-organ-complex" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D" }}>{item.score}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
