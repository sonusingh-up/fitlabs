import type { Metadata } from "next";
import Link from "next/link";
import { Star, AlertTriangle } from "lucide-react";
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
  title: "Happee Beef Organs for Women Review (2026): Female Formula",
  description:
    "Happee beef organ supplement for women review: female-specific organ blend with liver, spleen, uterus. Heme iron, B12, reproductive support. FSP score 7/10.",
  alternates: { canonical: "/reviews/happee-beef-organ-women" },
  openGraph: {
    title: "Happee Beef Organs for Women Review (2026): Female Formula",
    description:
      "Happee targets women specifically — adding reproductive organ tissue and higher iron density. Is the female-focused formulation justified by evidence? Full FSP review.",
    url: "https://fitlabreviews.com/reviews/happee-beef-organ-women",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "formula", label: "Formula Analysis" },
  { id: "women-nutrients", label: "Nutrients for Women" },
  { id: "reproductive-organs", label: "Reproductive Organ Tissue" },
  { id: "sourcing", label: "Sourcing & Quality" },
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
        "Happee's women's organ blend includes beef liver, beef spleen, beef kidney, and bovine uterus — targeting the four nutrients most relevant to female physiology: heme iron (liver + spleen), selenium and B2 (kidney), and the 'like supports like' reproductive support claim (uterus). The iron-dense combination of liver + spleen is the most defensible formulation decision — it addresses the most common micronutrient deficiency in premenopausal women. The uterus inclusion is an ancestral health concept without clinical evidence; it does not detract nutritionally but the 'like supports like' claim should not be the primary purchase rationale. No heart or pancreas, which limits CoQ10 and enzyme content vs 5-organ competitors.",
    },
    {
      pillar: "transparency",
      score: 6.5,
      notes:
        "Happee discloses the organ types but not individual organ doses per capsule (proprietary blend). The brand is smaller and transparency infrastructure — COA availability, farm names, third-party testing documentation — is less developed than the category leaders. Sourcing is stated as New Zealand grass-fed, which is positive, but lot-specific traceability is not publicly available. For a female-targeted formula where retinol exposure from liver during pregnancy is a real concern, this proprietary blend approach is a meaningful risk.",
    },
    {
      pillar: "verification",
      score: 5.5,
      notes:
        "No Informed Sport, NSF, or equivalent third-party certification. No heavy metal COA publicly available at time of review. As a smaller brand, Happee has not yet invested in the verification infrastructure of category leaders. The absence of third-party testing is a greater concern here than in general-use products because this formula is specifically marketed to reproductive-age women — the demographic most affected by organotoxins and retinol excess.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "At approximately $38/bottle (60 servings), this is $0.63/serving. Competitive for a female-specific formulation — women's health organ supplements from premium brands (Heart & Soil women's formulas) can cost $1.50–$2.00/serving. The price is reasonable, particularly given the iron-dense spleen + liver combination that is genuinely targeted to female needs. Deduction for the lack of verification infrastructure at this price.",
    },
    {
      pillar: "practical",
      score: 8.0,
      notes:
        "Four capsules per serving, split-dose recommended (2 morning, 2 evening). Marketing is clearly directed at women, making the product approachable for the target demographic. NZ sourcing is credible. No taste or smell. Easily stackable. Monthly subscription option available through the brand's website at a modest discount.",
    },
  ],
  flags: [
    { type: "green", label: "Iron-dense liver + spleen combination", detail: "Combining the two highest iron-density organs directly addresses premenopausal women's leading micronutrient deficiency." },
    { type: "green", label: "NZ grass-fed sourcing", detail: "New Zealand's year-round pasture system and clean farming environment is the gold standard for organ supplement sourcing." },
    { type: "green", label: "Female-specific marketing and protocol", detail: "Serving recommendations, dosing rationale, and safety caveats are framed specifically for women's nutritional needs." },
    { type: "green", label: "Kidney inclusion for selenium and B2", detail: "Beef kidney adds selenium (thyroid function) and riboflavin (energy metabolism) to the iron-focused formula." },
    { type: "red", label: "No heavy metal COA published", detail: "Reproductive-age women are the most vulnerable to environmental contaminants in organ supplements. Absence of published testing is a significant gap.", deduction: 0.8 },
    { type: "red", label: "Proprietary blend — retinol incalculable", detail: "Pregnant or planning-to-conceive women cannot calculate retinol intake without individual organ doses.", deduction: 0.5 },
    { type: "red", label: "No third-party purity certification", detail: "No Informed Sport, NSF, or equivalent certification. Smaller brand with limited verification infrastructure.", deduction: 0.3 },
    { type: "red", label: "Uterus inclusion lacks evidence", detail: "The 'like supports like' rationale for bovine uterus tissue is an ancestral concept without clinical evidence. Its nutritional contribution is minimal." },
  ],
  claimAudit: [
    { claim: "\"Specifically formulated for women's health\"", verdict: "context-dependent", evidence: "moderate", notes: "The liver + spleen iron focus is genuinely relevant to premenopausal women, who have ~2.5x higher iron requirements than men (18mg vs 8mg RDA). Kidney's selenium content supports thyroid function — women have higher rates of thyroid disorders. The female focus has nutritional logic even if the specific organ blend hasn't been studied in female RCTs." },
    { claim: "\"Supports hormonal balance\"", verdict: "unsupported", evidence: "limited", notes: "No clinical evidence that beef organ supplements influence hormone levels in women. The zinc, B vitamins, and fat-soluble vitamins in organ meats have cofactor roles in steroid hormone biosynthesis, but the mechanistic link from dietary micronutrients to hormonal 'balance' does not constitute a proven supplement claim." },
    { claim: "\"Uterine tissue supports female reproductive health\"", verdict: "unsupported", evidence: "limited", notes: "The 'like supports like' concept has no clinical evidence base. Bovine uterus tissue is not a validated pharmacological intervention. The tissue may provide some peptides and trace nutrients, but 'supports female reproductive health' is an unverifiable outcome claim for a whole-food ingredient without RCT data." },
    { claim: "\"New Zealand grass-fed organs\"", verdict: "context-dependent", evidence: "moderate", notes: "NZ is a credible grass-fed sourcing region. The claim is plausible and consistent with NZ cattle farming standards. Without lot-specific COA or independent certification, the claim is unverified but highly plausible given the sourcing country." },
    { claim: "\"Rich in heme iron for menstrual support\"", verdict: "supported", evidence: "strong", notes: "Beef liver and spleen are among the highest heme iron sources available. Heme iron absorption (15–35%) significantly exceeds non-heme iron from plant sources. The iron rationale for premenopausal women is clinically established (Hallberg L et al., 1979 — Am J Clin Nutr)." },
  ],
  valueMetric: {
    pricePerServing: 0.63,
    primaryActiveGrams: 2,
    pricePerGramActive: 0.32,
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
  "@id": "https://fitlabreviews.com/reviews/happee-beef-organ-women#review",
  name: "Happee Beef Organs for Women — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Happee Beef Organs for Women using the Fitlab Scoring Protocol. Analysis covers the female-specific organ blend (liver, spleen, kidney, uterus), iron density rationale, NZ sourcing, reproductive organ tissue claims, and absence of third-party testing.",
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
    name: "Happee Beef Organs for Women",
    brand: { "@type": "Brand", name: "Happee" },
    category: "Organ Supplement",
    description: "Female-specific organ blend: beef liver, spleen, kidney, and bovine uterus. NZ grass-fed. Targeted at premenopausal women for iron, B vitamins, and reproductive support.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "37.99",
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
      name: "Why is beef spleen in a women's organ supplement?",
      acceptedAnswer: { "@type": "Answer", text: "Beef spleen contains approximately 42mg iron per 100g — the highest iron density of any organ or muscle meat. Combined with beef liver (approximately 6–7mg iron per 100g), a liver + spleen formula delivers the highest heme iron density possible from organ tissue. Heme iron is absorbed at 15–35%, compared to 3–8% for non-heme iron from plant sources. Premenopausal women need 18mg iron/day (vs 8mg for men) due to menstrual iron losses — the liver + spleen combination directly addresses this need." },
    },
    {
      "@type": "Question",
      name: "Is bovine uterus safe to consume in supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, at standard supplement doses, bovine uterus is safe for most adults. It is a food-grade organ tissue that has been consumed by humans across cultures for centuries. As a freeze-dried supplement ingredient, it contributes negligible hormones (denatured during processing). The 'like supports like' reproductive support claim is an ancestral health concept without clinical validation — the tissue's safety is not in question, but the claimed benefits lack RCT evidence." },
    },
    {
      "@type": "Question",
      name: "Can pregnant women take Happee Beef Organs for Women?",
      acceptedAnswer: { "@type": "Answer", text: "Pregnant women should consult their OB/GYN before taking any liver-containing supplement. Beef liver contains preformed vitamin A (retinol), which in excess can cause teratogenic effects (birth defects). The tolerable upper limit during pregnancy is 3,000µg RAE/day. Without disclosed individual organ doses, it is impossible to calculate exact retinol intake from Happee's proprietary blend. For pregnant women, a physician-supervised iron supplement with a known retinol content is safer." },
    },
    {
      "@type": "Question",
      name: "How does Happee compare to Heart & Soil women's formulas?",
      acceptedAnswer: { "@type": "Answer", text: "Heart & Soil offers female-specific organ blends (including their Whole Package and other formulas) at $1.50–$2.00/serving with Informed Sport certification and US regenerative farm sourcing. Happee is $0.63/serving with NZ sourcing. For women who need verified purity testing (athletes, those wanting documented heavy metal safety), Heart & Soil's women's line is the stronger choice. For budget-conscious buyers who want the liver + spleen iron focus and NZ sourcing, Happee offers better value." },
    },
    {
      "@type": "Question",
      name: "Is Happee Beef Organs useful for menstrual fatigue?",
      acceptedAnswer: { "@type": "Answer", text: "Menstrual fatigue is often partially driven by iron depletion from blood loss. Heme iron from beef liver and spleen is the most bioavailable dietary iron form. Over time, consistent organ supplement use may help maintain iron stores and reduce iron-deficiency-related fatigue. This is nutritional support — not medical treatment. Clinical iron deficiency anemia should be diagnosed via ferritin and hemoglobin testing and managed under physician guidance." },
    },
  ],
};

const pros = [
  "Iron-dense liver + spleen combination directly addresses women's iron needs",
  "NZ grass-fed sourcing — credible quality baseline",
  "Female-specific protocol with menstrual-cycle awareness",
  "Affordable at $0.63/serving for a targeted female formula",
  "3-capsule serving option available",
];
const cons = [
  "No heavy metal COA — a significant gap for reproductive-age women",
  "Proprietary blend — retinol intake incalculable (concern for pregnancy)",
  "No third-party purity certification (Informed Sport / NSF)",
  "Uterus inclusion adds no proven benefit",
  "No heart (CoQ10) or pancreas (enzymes) in formula",
];

export default function HappeeBeefOrganWomenPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Feature banner */}
      <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #2D2520 60%, #3D2E28 100%)", padding: "48px 24px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>REV-2026-053</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#3D3830", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#F2EBD9", lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
            Happee Beef Organs for Women
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#8A8480", fontSize: "0.7em", marginTop: 8 }}>
              Iron-dense female formula — good concept, needs better verification
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Happee Beef Organs for Women</span>
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
                Happee Beef Organs for Women
              </h2>
              <MetadataStrip
                items={[
                  { label: "Brand", value: "Happee" },
                  { label: "Price", value: "~$38 / 60 servings" },
                  { label: "Serving", value: "4 caps" },
                  { label: "Formula", value: "Liver, Spleen, Kidney, Uterus" },
                  { label: "Sourcing", value: "NZ grass-fed" },
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
                  Happee's female formula has the right nutritional instinct — the liver + spleen combination is the most iron-dense approach available, directly addressing premenopausal women's greatest micronutrient vulnerability. NZ sourcing is credible. The fatal weakness: no published heavy metal COA and no third-party purity testing. For a product marketed specifically to reproductive-age women, the absence of toxicant screening is a material safety gap, not a minor concern. Adequate for healthy women seeking food-based iron support. Not acceptable for pregnant women or those planning conception without physician involvement.
                </p>
              </div>
            </div>

            {/* Score breakdown */}
            <section id="score-breakdown" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Score Breakdown</h3>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-053" />
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
                Happee's women's formula includes four organ tissues: beef liver (retinol, B12, heme iron, copper), beef spleen (highest iron density organ), beef kidney (selenium, riboflavin, B12), and bovine uterus (ancestral 'like supports like' rationale).
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                The absence of beef heart (the primary CoQ10 source) is a meaningful gap compared to 5-organ competitors. For women interested in mitochondrial energy support — relevant for fatigue related to thyroid or menstrual issues — this limits the formula's completeness.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginBottom: 16 }}>
                {[
                  { organ: "Beef Liver", icon: "🫀", key: "Retinol, B12, heme iron, copper" },
                  { organ: "Beef Spleen", icon: "⚡", key: "Highest iron of any meat (~42mg/100g)" },
                  { organ: "Beef Kidney", icon: "💠", key: "Selenium, B2, B12" },
                  { organ: "Bovine Uterus", icon: "🌿", key: "Ancestral 'like supports like'" },
                ].map((item) => (
                  <div key={item.organ} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                    <p style={{ fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#A89880", letterSpacing: "0.05em", marginBottom: 4 }}>{item.organ}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{item.key}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Women-specific nutrients */}
            <section id="women-nutrients" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Nutrients for Women</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Premenopausal women have distinct micronutrient requirements that differ from general adults:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { nutrient: "Iron", why: "18mg RDA vs 8mg for adult men. Heavy menstrual blood loss depletes iron stores — iron-deficiency is the most common micronutrient deficiency globally in reproductive-age women.", source: "Liver + spleen" },
                  { nutrient: "Folate", why: "400–800µg/day for women of childbearing age to prevent neural tube defects. Beef liver is a rich folate source (290µg/100g).", source: "Beef liver" },
                  { nutrient: "B12", why: "2.4µg/day RDA. Essential for neurological function and red blood cell production. Liver and kidney are among the richest sources.", source: "Liver + kidney" },
                  { nutrient: "Selenium", why: "55µg/day RDA. Women have higher rates of autoimmune thyroid disease (Hashimoto's) — selenium is a key thyroid cofactor.", source: "Beef kidney" },
                  { nutrient: "Copper", why: "0.9mg/day RDA. Cofactor for iron metabolism enzymes. Liver is the richest dietary copper source.", source: "Beef liver" },
                ].map((item) => (
                  <div key={item.nutrient} style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, display: "grid", gridTemplateColumns: "90px 1fr", gap: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>{item.nutrient}</p>
                      <p style={{ fontSize: 10, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace" }}>from {item.source}</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.why}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reproductive organ tissue */}
            <section id="reproductive-organs" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Reproductive Organ Tissue: What the Evidence Says</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Bovine uterus is included based on the ancestral 'like supports like' principle — the idea that consuming an organ provides nutritional support for the same organ in the consumer. This is a traditional health concept with no clinical RCT evidence base.
              </p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 16 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.08em", marginBottom: 8 }}>What the tissue does and doesn't provide</p>
                <ul style={{ paddingLeft: 18 }}>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>Bovine uterus provides protein, trace minerals, and potentially small amounts of signaling peptides</li>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>Hormones (estrogen, progesterone) are present in reproductive tissue but are denatured and/or digested before absorption at dietary doses</li>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>No clinical data shows bovine uterus supplementation improves uterine function, cycle regularity, or fertility in humans</li>
                  <li style={{ fontSize: 13, color: "#5C5650" }}>The inclusion does not harm the formula nutritionally — it simply doesn't demonstrably help beyond general organ protein content</li>
                </ul>
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Sourcing & Quality</h3>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Happee claims New Zealand grass-fed sourcing. NZ cattle are year-round pasture-raised by default — the country's climate and land system mean grass-finishing is the norm rather than the exception. This makes NZ one of the most credible grass-fed claims globally.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8 }}>
                <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                  No heavy metal COA is publicly available for Happee products at time of review. Organ meats — especially kidney — can accumulate environmental contaminants. For a product marketed to reproductive-age women, published heavy metal testing results should be a minimum expectation. Contact the brand directly for current batch COA data before purchase.
                </p>
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
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Take 4 capsules daily with meals. Splitting the dose (2 with breakfast, 2 with dinner) is often better tolerated. Taking with fat-containing meals improves fat-soluble vitamin absorption.</p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 6 }}>Cycle-aware dosing</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>For premenopausal women with heavy periods, consider taking Happee consistently throughout the month (not just around menstruation). Iron stores replenish over weeks — consistent daily use maintains ferritin better than cyclical dosing. Track energy levels and fatigue month-to-month to assess response.</p>
              </div>
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Safety Notes</h3>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, marginBottom: 16 }}>
                <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#9B2020", marginBottom: 6 }}>Critical: Pregnant women and those planning pregnancy</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                    Beef liver contains preformed vitamin A (retinol). Excess retinol during the first trimester of pregnancy is associated with teratogenic risk. The tolerable upper limit is 3,000µg RAE/day. Because Happee uses a proprietary blend, the retinol contribution cannot be precisely calculated. Pregnant women should not use any liver supplement without explicit physician approval.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                For women with hemochromatosis or high ferritin, the iron-dense liver + spleen combination in this formula is contraindicated. Always check ferritin levels before starting an iron-focused supplement protocol.
              </p>
            </section>

            {/* Value */}
            <section id="value" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Price & Value</h3>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="female organ blend" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>
                At $0.63/serving, Happee is competitively priced for a female-specific organ supplement. For context, Heart & Soil's women's formulas are $1.50–$2.00/serving. If Happee invested in third-party testing, they could justify this price tier more confidently. As it stands, the value is reasonable for healthy premenopausal women without specific risk factors.
              </p>
            </section>

            {/* Comparison */}
            <section id="comparison" style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>vs Competitors</h3>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 560 }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1A1714" }}>
                      {["Brand", "Price/Serving", "Female Focus", "Iron Density", "Verification", "Score"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Happee (Women)", "$0.63", "High", "Very High (liver+spleen)", "None", "7/10"],
                      ["Heart & Soil Women's", "$1.83+", "High", "Moderate (5-organ)", "Informed Sport", "9/10"],
                      ["Left Coast Performance", "$0.39", "Low", "High (5-organ)", "None", "8/10"],
                      ["Ancestral Supplements Liver", "$1.50", "Low", "High (liver focus)", "Heavy metal COA", "9/10"],
                      ["Terraferrin", "$1.10", "Moderate", "High (liver focus)", "COA Available", "7/10"],
                    ].map(([brand, price, female, iron, cert, score], i) => (
                      <tr key={brand} style={{ backgroundColor: brand.includes("Happee") ? "#FEF9F7" : i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", fontWeight: brand.includes("Happee") ? 600 : 400 }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#1A1714" }}>{brand}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{price}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{female}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{iron}</td>
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
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict — REV-2026-053</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Happee Beef Organs for Women: 7/10</p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 16 }}>
                  Happee has the right nutritional instinct — the liver + spleen iron density formula is genuinely optimised for premenopausal women in a way that no other product in this review matches. The NZ sourcing is credible. The price is fair. What holds it back from an 8 or 9 is the absence of third-party purity testing — a gap that is especially consequential given the target demographic.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75 }}>
                  <strong style={{ color: "#F2EBD9" }}>Buy Happee if:</strong> you are a healthy premenopausal woman seeking food-based iron support at a reasonable price with NZ sourcing. <strong style={{ color: "#F2EBD9" }}>Choose Heart & Soil's women's formula if:</strong> you need verified purity, are an athlete, or are pregnant / planning pregnancy.
                </p>
              </div>
            </section>

            {/* References */}
            <section style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Hallberg L et al. The role of vitamin C in iron absorption. Int J Vitam Nutr Res Suppl, 1989.",
                  "USDA FoodData Central. Beef spleen iron composition (~42mg/100g).",
                  "Institute of Medicine. Dietary Reference Intakes for Vitamin A. National Academies Press, 2001.",
                  "Rayman MP. Selenium and human health. Lancet, 2012.",
                  "WHO. Iron deficiency anaemia: assessment, prevention and control. World Health Organization, 2001.",
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
              { name: "Left Coast Performance Beef Organs", score: "8/10", href: "/reviews/left-coast-performance-beef-organs" },
              { name: "Enviromedica Terraferrin", score: "7/10", href: "/reviews/enviromedica-terraferrin" },
              { name: "Perfect Supplements Beef Liver", score: "8/10", href: "/reviews/perfect-supplements-beef-liver" },
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
