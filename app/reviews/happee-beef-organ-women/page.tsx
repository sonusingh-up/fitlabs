import type { Metadata } from "next";
import Link from "next/link";
import { Star, AlertTriangle, ExternalLink } from "lucide-react";
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
  title: "Happee Beef Organs for Women Review (2026)",
  description:
    "Happee beef organ supplement for women review: female-specific organ blend with liver, spleen, uterus. Heme iron, B12, reproductive support. FSP score 7/10.",
  alternates: { canonical: "/reviews/happee-beef-organ-women" },
  openGraph: {
    title: "Happee Beef Organs for Women Review (2026)",
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
const composite = rubric.compositeScore;

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
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <Link href="/reviews" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Reviews</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Happee Beef Organs for Women</span>
        </div>
      </div>

      {/* Feature Banner */}
      <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-053 · ORGAN SUPPLEMENT</span>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
            Happee Beef Organs<br /><em style={{ fontWeight: 400, color: "#A89880" }}>for Women</em>
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
          <img src="/products/Happee-Grass-Fed-Beef-Organ.webp" alt="Happee Beef Organs for Women" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
      </div>

      {/* Hero row */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
        <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-053</span>
          <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · NZ Grass-Fed Organs</span>
        </div>
        <div className="layout-hero-split">
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
              Happee · Organ Supplement · Female-Specific Formula
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
              Beef Organs for Women — Iron-Dense,<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Female-Focused Protocol</em>
            </h2>
            <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
              Liver and spleen — the two highest iron-density organs — combined with kidney and bovine uterus, from NZ grass-fed cattle. Targeted at premenopausal women&apos;s iron and B12 needs.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://amzn.to/4uDGXOc" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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

      {/* MetadataStrip */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <MetadataStrip items={[
          { label: "Brand", value: "Happee" },
          { label: "Price", value: "~$38 / 60 servings" },
          { label: "Serving", value: "4 caps" },
          { label: "Formula", value: "Liver, Spleen, Kidney, Uterus" },
          { label: "Sourcing", value: "NZ grass-fed" },
          { label: "Score", value: "7/10" },
        ]} />
      </div>

      {/* Author box */}
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
              Organ supplement research · NZ sourcing verification · Women&apos;s formula analysis
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Research Review</span>
            <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
          </div>
        </div>
      </div>

      {/* Affiliate notice */}
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

            {/* Quick Verdict */}
            <section id="verdict" style={{ marginBottom: 56 }}>
              <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-053</p>
                <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                  Happee&apos;s female formula has the right nutritional instinct — the liver + spleen combination is the most iron-dense approach available, directly addressing premenopausal women&apos;s greatest micronutrient vulnerability. NZ sourcing is credible. The fatal weakness: no published heavy metal COA and no third-party purity testing. For a product marketed specifically to reproductive-age women, the absence of toxicant screening is a material safety gap, not a minor concern. Adequate for healthy women seeking food-based iron support. Not acceptable for pregnant women or those planning conception without physician involvement.
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

            {/* Score breakdown */}
            <section id="score-breakdown" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-053" />
              <p style={{ fontSize: 12, color: "#8A8480", marginTop: 12 }}>
                FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
              </p>
            </section>

            {/* Flags */}
            <section id="flags" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
              <FlagSystem flags={rubric.flags} />
            </section>

            {/* Formula */}
            <section id="formula" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Formula Analysis</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Happee&apos;s women&apos;s formula includes four organ tissues: beef liver (retinol, B12, heme iron, copper), beef spleen (highest iron density organ), beef kidney (selenium, riboflavin, B12), and bovine uterus (ancestral &apos;like supports like&apos; rationale).
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                The absence of beef heart (the primary CoQ10 source) is a meaningful gap compared to 5-organ competitors. For women interested in mitochondrial energy support — relevant for fatigue related to thyroid or menstrual issues — this limits the formula&apos;s completeness.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginBottom: 16 }}>
                {[
                  { organ: "Beef Liver", key: "Retinol, B12, heme iron, copper" },
                  { organ: "Beef Spleen", key: "Highest iron of any meat (~42mg/100g)" },
                  { organ: "Beef Kidney", key: "Selenium, B2, B12" },
                  { organ: "Bovine Uterus", key: "Ancestral 'like supports like'" },
                ].map((item) => (
                  <div key={item.organ} style={{ padding: "12px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                    <p style={{ fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#A89880", letterSpacing: "0.05em", marginBottom: 4 }}>{item.organ}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{item.key}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Women-specific nutrients */}
            <section id="women-nutrients" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Nutrients for Women</h2>
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
            <section id="reproductive-organs" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Reproductive Organ Tissue: What the Evidence Says</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Bovine uterus is included based on the ancestral &apos;like supports like&apos; principle — the idea that consuming an organ provides nutritional support for the same organ in the consumer. This is a traditional health concept with no clinical RCT evidence base.
              </p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 16 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.08em", marginBottom: 8 }}>What the tissue does and doesn&apos;t provide</p>
                <ul style={{ paddingLeft: 18 }}>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>Bovine uterus provides protein, trace minerals, and potentially small amounts of signaling peptides</li>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>Hormones (estrogen, progesterone) are present in reproductive tissue but are denatured and/or digested before absorption at dietary doses</li>
                  <li style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>No clinical data shows bovine uterus supplementation improves uterine function, cycle regularity, or fertility in humans</li>
                  <li style={{ fontSize: 13, color: "#5C5650" }}>The inclusion does not harm the formula nutritionally — it simply doesn&apos;t demonstrably help beyond general organ protein content</li>
                </ul>
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Quality</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Happee claims New Zealand grass-fed sourcing. NZ cattle are year-round pasture-raised by default — the country&apos;s climate and land system mean grass-finishing is the norm rather than the exception. This makes NZ one of the most credible grass-fed claims globally.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8 }}>
                <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                  No heavy metal COA is publicly available for Happee products at time of review. Organ meats — especially kidney — can accumulate environmental contaminants. For a product marketed to reproductive-age women, published heavy metal testing results should be a minimum expectation. Contact the brand directly for current batch COA data before purchase.
                </p>
              </div>
            </section>

            {/* Claim audit */}
            <section id="claim-audit" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            {/* How to take */}
            <section id="how-to-take" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Take 4 capsules daily with meals. Splitting the dose (2 with breakfast, 2 with dinner) is often better tolerated. Taking with fat-containing meals improves fat-soluble vitamin absorption.</p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 6 }}>Cycle-aware dosing</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>For premenopausal women with heavy periods, consider taking Happee consistently throughout the month (not just around menstruation). Iron stores replenish over weeks — consistent daily use maintains ferritin better than cyclical dosing. Track energy levels and fatigue month-to-month to assess response.</p>
              </div>
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety Notes</h2>
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
            <section id="value" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="female organ blend" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>
                At $0.63/serving, Happee is competitively priced for a female-specific organ supplement. For context, Heart & Soil&apos;s women&apos;s formulas are $1.50–$2.00/serving. If Happee invested in third-party testing, they could justify this price tier more confidently. As it stands, the value is reasonable for healthy premenopausal women without specific risk factors.
              </p>
            </section>

            {/* Comparison */}
            <section id="comparison" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs Competitors</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(168px, 1fr))", gap: 12 }}>
                {[
                  { name: "Happee (Women)", image: "/products/Happee-Grass-Fed-Beef-Organ.webp", score: "7/10", price: "$0.63/serving", spec1: "Iron: Very High", spec2: "Female-specific", buyUrl: "https://amzn.to/4uDGXOc", reviewUrl: "/reviews/happee-beef-organ-women", isCurrent: true },
                  { name: "Heart & Soil Women's", image: "/products/HEART-SOIL.webp", score: "9/10", price: "$1.83+/serving", spec1: "Iron: High (5-organ)", spec2: "Informed Sport cert.", buyUrl: "https://amzn.to/3Q2X5ts", reviewUrl: "/reviews/heart-and-soil-beef-organs" },
                  { name: "Left Coast Performance", image: "/products/left-coast-performance-beef-organ.webp", score: "8/10", price: "$0.39/serving", spec1: "Iron: High (5-organ)", spec2: "Women's line avail.", buyUrl: "https://amzn.to/4nUmi5H", reviewUrl: "/reviews/left-coast-performance-beef-organs" },
                  { name: "Ancestral Supplements", image: "/products/ancestral-supplements-beefliv.webp", score: "9/10", price: "$1.50/serving", spec1: "Iron: High (liver)", spec2: "Heavy metal COA", buyUrl: "https://amzn.to/43xRRca", reviewUrl: "/reviews/ancestral-supplements-beef-organs" },
                  { name: "Enviromedica Terraferrin", image: "/products/Enviromedica.webp", score: "7/10", price: "$1.10/serving", spec1: "Iron: High (liver)", spec2: "Lactoferrin formula", buyUrl: "https://amzn.to/4vhPma3", reviewUrl: "/reviews/enviromedica-terraferrin" },
                ].map((comp) => (
                  <div key={comp.name} style={{ border: `${comp.isCurrent ? "2" : "1"}px solid ${comp.isCurrent ? "#C4622D" : "#D4C9B8"}`, borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>
                    {comp.isCurrent && (
                      <div style={{ padding: "4px 8px", backgroundColor: "#C4622D", textAlign: "center" }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F2EBD9" }}>This product</span>
                      </div>
                    )}
                    <div style={{ height: 100, backgroundColor: "#EDE8DF", display: "flex", alignItems: "center", justifyContent: "center", padding: 10 }}>
                      <img src={comp.image} alt={comp.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{comp.name}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 15, fontWeight: 700, color: "#C4622D", margin: 0 }}>{comp.score}</p>
                      <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{comp.price}</p>
                      <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{comp.spec1}</p>
                      <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{comp.spec2}</p>
                    </div>
                    <div style={{ padding: "10px 14px", borderTop: "1px solid #EDE8DF", display: "flex", gap: 6 }}>
                      <a href={comp.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "6px 8px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 10, fontWeight: 600, borderRadius: 5, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                        Buy ↗
                      </a>
                      {!comp.isCurrent && (
                        <Link href={comp.reviewUrl} style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#7B3B1A", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", padding: "6px 8px", border: "1px solid #D4C9B8", borderRadius: 5 }}>
                          Read →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros / Cons */}
            <section id="pros-cons" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
              <ProsCons pros={pros} cons={cons} />
            </section>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {faqSchema.mainEntity.map((item, i) => (
                  <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <summary>{item.name}</summary>
                    <p className="faq-answer">{item.acceptedAnswer.text}</p>
                  </details>
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
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 20 }}>
                  <strong style={{ color: "#F2EBD9" }}>Buy Happee if:</strong> you are a healthy premenopausal woman seeking food-based iron support at a reasonable price with NZ sourcing. <strong style={{ color: "#F2EBD9" }}>Choose Heart & Soil&apos;s women&apos;s formula if:</strong> you need verified purity, are an athlete, or are pregnant / planning pregnancy.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 20, borderTop: "1px solid #3D3830", flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4uDGXOc" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650" }}>FSP Score: {composite.toFixed(1)}/10 → Editorial: {editorialScore}/10</span>
                </div>
              </div>
            </section>

            {/* References */}
            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h2>
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
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.6 }}>{ref}{" "}<a href={"https://scholar.google.com/scholar?q=" + encodeURIComponent(ref.split("(")[0].trim().substring(0, 80))} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace" }}>↗</a></p>
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
