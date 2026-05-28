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
  title: "Enviromedica Terraferrin Review (2026): Lactoferrin + Organs",
  description:
    "Enviromedica Terraferrin review: lactoferrin + desiccated bovine liver blend. Iron bioavailability, immune support, $1.10/serving. Full FSP analysis — 7/10.",
  alternates: { canonical: "/reviews/enviromedica-terraferrin" },
  openGraph: {
    title: "Enviromedica Terraferrin Review (2026): Lactoferrin + Organs",
    description:
      "Enviromedica combines lactoferrin with desiccated beef liver for iron optimisation. Is the formulation worth the premium? Our full evidence-based review.",
    url: "https://fitlabreviews.com/reviews/enviromedica-terraferrin",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "formula", label: "Formula Analysis" },
  { id: "lactoferrin", label: "Lactoferrin Evidence" },
  { id: "sourcing", label: "Sourcing & Quality" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "safety", label: "Safety Notes" },
  { id: "value", label: "Price & Value" },
  { id: "comparison", label: "vs Standard Organ Blends" },
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
        "Terraferrin differentiates itself by combining desiccated bovine liver with lactoferrin — a glycoprotein found in colostrum and whey that plays a role in iron transport and immune modulation. The combination targets iron optimisation: liver provides heme iron, while lactoferrin theoretically supports iron absorption and reduces oxidative iron toxicity. The formula is conceptually innovative. Evidence gap: the specific combination of desiccated liver + supplemental lactoferrin has not been tested in clinical RCTs; the rationale is mechanistic. Deduction for liver-only focus — no multi-organ breadth.",
    },
    {
      pillar: "transparency",
      score: 7.5,
      notes:
        "Enviromedica discloses desiccated beef liver dose and lactoferrin dose on the supplement facts panel. The sourcing is stated as Argentine grass-fed. COA documentation is available on their website, which is above average for the category. Full lactoferrin source (bovine colostrum vs whey) is not always prominently specified. Company is transparent about their broader Terraflora / fermented soil-based probiotic philosophy.",
    },
    {
      pillar: "verification",
      score: 6.5,
      notes:
        "No Informed Sport or NSF Certified for Sport certification. COA for heavy metals is available but not always current-batch. The lactoferrin component adds complexity — purity and activity verification for lactoferrin specifically is not standard in the organ supplement category. For competitive athletes, the absence of batch-level purity certification is a concern.",
    },
    {
      pillar: "value",
      score: 6.0,
      notes:
        "At approximately $44/bottle (40 servings), this is $1.10/serving — expensive for a product that provides only beef liver plus lactoferrin rather than a multi-organ blend. Comparable multi-organ products (Left Coast: $0.39, Forest Leaf: $0.31) provide broader nutritional coverage for significantly less. The lactoferrin addition justifies a modest premium, but the per-serving cost puts Terraferrin at the higher end of the category without multi-organ breadth to justify it.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Three capsules per serving — the lowest pill count reviewed. Product is marketed specifically for iron status support, making it useful for a targeted protocol rather than a general organ supplement. Easy to stack with a separate multi-organ product. Shelf-stable, no refrigeration required. Well-tolerated based on user feedback.",
    },
  ],
  flags: [
    { type: "green", label: "Unique lactoferrin + liver formulation", detail: "The only organ supplement in this review combining liver with lactoferrin for iron transport optimisation." },
    { type: "green", label: "Disclosed lactoferrin dose", detail: "Unlike proprietary blends, Terraferrin shows individual ingredient amounts — enabling evidence-based dosing assessment." },
    { type: "green", label: "Argentine grass-fed sourcing", detail: "Argentina is a established source of pasture-raised beef with year-round grazing; historically strong for organ meat quality." },
    { type: "green", label: "COA available on website", detail: "Heavy metal testing results are published, which is above average for the category." },
    { type: "green", label: "3-capsule serving size", detail: "Lowest pill burden in the category. Easy to incorporate without disrupting supplement routines." },
    { type: "red", label: "Liver-only (no multi-organ breadth)", detail: "No heart (CoQ10), kidney (selenium/B2), spleen (tuftsin), or pancreas — narrower nutritional scope than 5-organ blends.", deduction: 0.5 },
    { type: "red", label: "Limited clinical evidence for specific formula", detail: "Desiccated liver + lactoferrin combination not studied in RCTs. Mechanistic rationale is sound but outcome data is absent.", deduction: 0.3 },
  ],
  claimAudit: [
    { claim: "\"Lactoferrin supports iron absorption\"", verdict: "context-dependent", evidence: "moderate", notes: "Lactoferrin has demonstrated iron-binding and iron-transport properties in vitro and in animal studies. Human clinical evidence shows that bovine lactoferrin supplementation (200–300mg/day) modestly improves iron status in iron-deficient populations (Paesano R et al., 2010 — Biometals). Whether the dose in Terraferrin is sufficient and the combination with desiccated liver enhances this effect is unproven." },
    { claim: "\"Argentine grass-fed, pasture-raised beef\"", verdict: "context-dependent", evidence: "moderate", notes: "Argentina is a well-established source of extensively grazed cattle. The claim is consistent with Argentine cattle industry standards. No independent grass-fed certification is cited, but the country-of-origin claim is specific and verifiable." },
    { claim: "\"Supports immune function\"", verdict: "context-dependent", evidence: "moderate", notes: "Lactoferrin has documented immunomodulatory properties — it binds LPS (bacterial endotoxin), modulates macrophage activity, and has antiviral properties in laboratory studies (Legrand D, 2016 — Biochem Cell Biol). Beef liver provides B12, zinc, and copper — all essential for immune cell function. The claim is mechanistically supported." },
    { claim: "\"Optimises iron levels\"", verdict: "overstated", evidence: "limited", notes: "'Optimise' is a marketing claim without a clinical reference point. The product may support adequate iron intake and potentially improve iron bioavailability via lactoferrin mechanisms. It cannot 'optimise' iron levels — that would require blood monitoring, individual titration, and clinical guidance. The claim overstates what is plausible from a supplement." },
    { claim: "\"Supports gut health\"", verdict: "unsupported", evidence: "limited", notes: "Lactoferrin has prebiotic and antimicrobial properties that may modulate gut microbiota in theory. Beef liver alone does not have established gut health benefits. The claim is vague and lacks product-specific clinical evidence." },
  ],
  valueMetric: {
    pricePerServing: 1.10,
    primaryActiveGrams: 1.5,
    pricePerGramActive: 0.73,
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
  "@id": "https://fitlabreviews.com/reviews/enviromedica-terraferrin#review",
  name: "Enviromedica Terraferrin — Fitlabreviews FSP Review",
  reviewBody:
    "In-depth evaluation of Enviromedica Terraferrin using the Fitlab Scoring Protocol. Analysis covers the lactoferrin + desiccated beef liver formula, iron bioavailability evidence, Argentine sourcing, COA transparency, and value at $1.10/serving.",
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
    name: "Enviromedica Terraferrin",
    brand: { "@type": "Brand", name: "Enviromedica" },
    category: "Organ Supplement",
    description: "Desiccated beef liver + bovine lactoferrin. Argentine grass-fed sourcing. Targeted iron optimisation and immune support.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "43.99",
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
      name: "What is lactoferrin and why is it in a beef organ supplement?",
      acceptedAnswer: { "@type": "Answer", text: "Lactoferrin is an iron-binding glycoprotein found naturally in colostrum, breast milk, and whey. It plays roles in iron transport, immune modulation, and antimicrobial defense. Enviromedica combines it with desiccated beef liver (a heme iron source) on the rationale that lactoferrin can improve iron absorption and reduce oxidative stress from free iron. The combination is mechanistically plausible — clinical evidence for this specific pairing is limited." },
    },
    {
      "@type": "Question",
      name: "Is Terraferrin good for iron deficiency anemia?",
      acceptedAnswer: { "@type": "Answer", text: "Terraferrin is positioned for iron status support, not clinical anemia treatment. Clinical-grade iron deficiency anemia should be diagnosed via blood tests (ferritin, hemoglobin, transferrin saturation) and managed with physician guidance. Bovine lactoferrin at 200–300mg/day has shown modest improvements in iron status in some trials. However, prescription iron supplementation delivers far higher elemental iron doses. Terraferrin is best viewed as a dietary iron source, not a medical treatment." },
    },
    {
      "@type": "Question",
      name: "Can I take Terraferrin with other organ supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Terraferrin provides liver-focused iron and lactoferrin. Stacking it with a multi-organ product (heart for CoQ10, kidney for selenium, spleen for additional heme iron) fills the nutritional gaps. The main consideration: monitor total retinol intake if stacking with another liver-containing product. Terraferrin's liver dose plus additional liver supplements may approach the upper tolerable retinol limit (3,000µg RAE/day) for some users." },
    },
    {
      "@type": "Question",
      name: "Where is Enviromedica Terraferrin sourced?",
      acceptedAnswer: { "@type": "Answer", text: "Enviromedica states Argentine grass-fed beef sourcing. Argentina has a long tradition of extensive pasture-based cattle ranching with year-round grazing, making it a credible source for grass-fed organ meats. The company publishes COA data, which is above average for the category. No independent grass-fed certification is cited." },
    },
    {
      "@type": "Question",
      name: "Who should consider Terraferrin over a standard organ blend?",
      acceptedAnswer: { "@type": "Answer", text: "Terraferrin is best suited for: (1) Women with heavy menstrual blood loss or documented iron deficiency who want a food-based iron strategy; (2) People specifically interested in lactoferrin's immune-modulating properties; (3) Those who want a liver supplement with the lowest pill burden (3 caps vs 6). For general organ nutrition and nose-to-tail completeness, a 5-organ blend is a better choice. Terraferrin can complement a multi-organ stack rather than replace it." },
    },
  ],
};

const pros = [
  "Unique lactoferrin + liver combination with sound mechanistic rationale",
  "Disclosed ingredient doses — not a proprietary blend",
  "Argentine grass-fed sourcing with COA available",
  "3-capsule serving — lowest pill burden reviewed",
  "Targeted iron optimisation protocol",
];
const cons = [
  "Liver-only — no CoQ10 (heart), selenium (kidney), or tuftsin (spleen)",
  "Expensive at $1.10/serving for single-organ focus",
  "Lactoferrin + liver combination lacks RCT evidence",
  "No Informed Sport or NSF Certified for Sport certification",
];

export default function EnviromediciaTerraferrinPage() {
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
          <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Enviromedica Terraferrin</span>
        </div>
      </div>

      {/* Feature Banner */}
      <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-052 · ORGAN SUPPLEMENT</span>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
            Enviromedica<br /><em style={{ fontWeight: 400, color: "#A89880" }}>Terraferrin</em>
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
          <img src="/products/Enviromedica.webp" alt="Enviromedica Terraferrin" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
      </div>

      {/* Hero row */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
        <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-052</span>
          <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · Argentine Grass-Fed</span>
        </div>
        <div className="layout-hero-split">
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
              Enviromedica · Organ Supplement · Liver + Lactoferrin
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
              Terraferrin — Targeted Iron Protocol,<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Lactoferrin + Liver Formula</em>
            </h2>
            <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
              Desiccated Argentine grass-fed beef liver combined with bovine lactoferrin — the only organ supplement in this category pairing heme iron with an iron-transport glycoprotein.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://amzn.to/4vhPma3" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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
          { label: "Brand", value: "Enviromedica" },
          { label: "Price", value: "~$44 / 40 servings" },
          { label: "Serving", value: "3 caps" },
          { label: "Formula", value: "Liver + Lactoferrin" },
          { label: "Sourcing", value: "Argentine grass-fed" },
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
              Organ supplement research · Iron bioavailability analysis · Lactoferrin evidence review
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
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Quick Verdict · REV-2026-052</p>
                <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                  Terraferrin is the most specialised product in this review — it is not a general organ supplement but a targeted iron-optimisation product. The combination of desiccated liver and lactoferrin is mechanistically sound and the Argentine sourcing with published COA puts Enviromedica above average for transparency. The problem: $1.10/serving for liver-only focus when multi-organ competitors cost $0.31–$0.39. Best suited for women with iron-deficiency concerns, people stacking it alongside a separate multi-organ supplement, or buyers interested in lactoferrin&apos;s immune properties specifically. Not the right choice as your sole organ supplement.
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
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-052" />
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
                Terraferrin contains two active ingredients: desiccated beef liver (providing heme iron, retinol, B12, copper) and bovine lactoferrin (an iron-binding glycoprotein). This is a narrower formula than the 5-organ blends in this category but with a specific functional rationale — iron status support.
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                The individual doses are disclosed on the supplement facts panel — an important transparency advantage over proprietary blends. This means you can assess the retinol contribution from the liver dose and the lactoferrin dose against clinical benchmarks.
              </p>
            </section>

            {/* Lactoferrin evidence */}
            <section id="lactoferrin" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Lactoferrin Evidence</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Lactoferrin is the most evidence-supported component of Terraferrin. Key research:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { claim: "Iron absorption", note: "Bovine lactoferrin at 200–300mg/day improved iron status markers (ferritin, hemoglobin) in iron-deficient pregnant women (Paesano R et al., 2010 — Biometals). Effect size was modest but statistically significant." },
                  { claim: "Immune modulation", note: "Lactoferrin binds LPS (bacterial endotoxin) and modulates macrophage and NK cell activity. In vitro and animal data are robust; human clinical trials are smaller (Legrand D, 2016 — Biochem Cell Biol)." },
                  { claim: "Antiviral properties", note: "Laboratory studies demonstrate lactoferrin can inhibit viral entry for several respiratory viruses. Human RCT evidence for clinical antiviral effect from oral supplementation is limited (Wakabayashi H et al., 2014 — Int Dairy J)." },
                  { claim: "Gut microbiota", note: "Prebiotic effects in neonates are well established. Evidence in adult supplementation is less consistent." },
                ].map((item) => (
                  <div key={item.claim} style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.claim}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Sourcing & Quality</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
                Enviromedica sources beef liver from Argentine grass-fed cattle. Argentina is one of the world&apos;s largest beef exporters, with extensive grassland-based (pampas) cattle systems that support year-round grazing. The COA is available on the Enviromedica website — covering heavy metals (lead, cadmium, arsenic, mercury). This transparency level is above average for the organ supplement category.
              </p>
            </section>

            {/* Claim audit */}
            <section id="claim-audit" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            {/* How to take */}
            <section id="how-to-take" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>
                Take 3 capsules with a meal, preferably one containing fat to support fat-soluble vitamin (retinol) absorption. For iron optimisation, taking Terraferrin on an empty stomach may marginally improve iron absorption, but the retinol content means taking it with food is generally safer.
              </p>
              <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 6 }}>Stacking note</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>If you want comprehensive organ nutrition (CoQ10, selenium, multi-organ breadth) alongside the iron-optimisation protocol, stack Terraferrin with a multi-organ product such as Left Coast Performance at $0.39/serving. Combined cost: ~$1.50/serving for a complete protocol. Monitor total retinol intake if adding additional liver-containing supplements.</p>
              </div>
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety Notes</h2>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, marginBottom: 16 }}>
                <AlertTriangle size={18} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                  <strong>Vitamin A (retinol):</strong> Liver provides preformed retinol. Pregnant women and those planning pregnancy should limit retinol intake to under 3,000µg RAE/day (UL) and ideally consult their OB/GYN before using any liver supplement. Isotretinoin users should avoid.
                </p>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                Lactoferrin is generally well-tolerated. It is derived from bovine milk protein — those with severe dairy allergies should confirm tolerability. Iron from heme sources (liver) is absorbed at high rates regardless of iron status — people with hemochromatosis or elevated ferritin should not use liver supplements without physician guidance.
              </p>
            </section>

            {/* Value */}
            <section id="value" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="beef liver + lactoferrin" />
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginTop: 16 }}>
                The $1.10/serving price is difficult to justify as a standalone organ supplement when multi-organ products offer broader coverage for $0.31–$0.39/serving. As a targeted iron supplement with lactoferrin, the price is more defensible — standalone lactoferrin capsules at clinical doses cost $0.50–$1.00/serving without the liver component. Viewed as lactoferrin + liver in a single capsule, the value equation improves.
              </p>
            </section>

            {/* Comparison */}
            <section id="comparison" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs Standard Organ Blends</h2>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 540 }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1A1714" }}>
                      {["", "Terraferrin", "Left Coast Performance", "Ancestral Supplements"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Organs covered", "Liver only", "5 organs", "1–5 organs"],
                      ["Price/serving", "$1.10", "$0.39", "$1.50"],
                      ["Lactoferrin", "✓ Included", "✗ None", "✗ None"],
                      ["Iron focus", "Primary focus", "Partial (spleen/liver)", "Partial (liver)"],
                      ["COA available", "Yes", "Limited", "Yes"],
                      ["Sourcing", "Argentine", "NZ", "NZ"],
                    ].map(([attr, t, lc, as_], i) => (
                      <tr key={attr} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                        <td style={{ padding: "10px 14px", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480", letterSpacing: "0.05em" }}>{attr}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{t}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{lc}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{as_}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict — REV-2026-052</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Enviromedica Terraferrin: 7/10</p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 16 }}>
                  Terraferrin is a well-made niche product. The lactoferrin + liver combination is thoughtfully formulated for iron optimisation, the Argentine sourcing is credible, and the published COA is a genuine differentiator. The limitations are clear: narrow scope (liver only), high price for single-organ coverage, and mechanistic rather than RCT-level evidence for the lactoferrin–liver synergy.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 20 }}>
                  <strong style={{ color: "#F2EBD9" }}>Buy Terraferrin if:</strong> you have iron-deficiency concerns, want lactoferrin alongside your liver supplement, or prefer Argentine sourcing. Use it to complement — not replace — a multi-organ formula.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 20, borderTop: "1px solid #3D3830", flexWrap: "wrap" }}>
                  <a href="https://amzn.to/4vhPma3" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
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
                  "Paesano R et al. Bovine lactoferrin for prevention and treatment of iron deficiency and iron deficiency anemia. Biometals, 2010;23(3):411-417.",
                  "Legrand D. Overview of lactoferrin as a natural immune modulator. Biochem Cell Biol, 2016;94(3):252-258.",
                  "Wakabayashi H et al. Lactoferrin for prevention of common viral respiratory tract infections. Int Dairy J, 2014;35(1):66-70.",
                  "USDA FoodData Central. Beef liver nutrient composition. fdc.nal.usda.gov",
                  "Hallberg L et al. Heme iron absorption in man. Am J Clin Nutr, 1979.",
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
              { name: "Heart & Soil Beef Organs", score: "9/10", href: "/reviews/heart-and-soil-beef-organs" },
              { name: "Left Coast Performance Beef Organs", score: "8/10", href: "/reviews/left-coast-performance-beef-organs" },
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
