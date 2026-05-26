import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, AlertTriangle } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "ingredients", label: "Ingredient Breakdown" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Side Effects" },
  { id: "value", label: "Price & Value" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const sampleIngredients = [
  { name: "Whey Protein Concentrate (WPC80)", dosage: "24g per serving", evidenceLevel: "strong" as EvidenceLevel, purpose: "Muscle protein synthesis and recovery" },
  { name: "Leucine (from whey)", dosage: "~2.5g", evidenceLevel: "strong" as EvidenceLevel, purpose: "mTOR activation and anabolic signaling" },
  { name: "Glutamine & Glutamic Acid", dosage: "4.1g", evidenceLevel: "limited" as EvidenceLevel, purpose: "Recovery and gut health (evidence limited in healthy adults)" },
  { name: "Aminogen® (digestive enzyme)", dosage: "Proprietary", evidenceLevel: "emerging" as EvidenceLevel, purpose: "Enhanced amino acid absorption" },
];

// ── FSP scoring data for this product ────────────────────────────────────────
const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 9.0,
      notes: "24g protein at WPC80 standard — full BCAA profile. Leucine at ~2.5g meets the muscle protein synthesis threshold. Aminogen® is a minor proprietary enzyme at a non-material dose — doesn't affect overall formula quality.",
    },
    {
      pillar: "transparency",
      score: 8.0,
      notes: "Full macro and amino acid disclosure. Minor deduction: Aminogen® dosage is listed as 'proprietary' with no weight given. All other ingredients are individually disclosed.",
    },
    {
      pillar: "verification",
      score: 9.0,
      notes: "ON operates NSF-GMP certified facilities. Products are Informed Choice verified. Batch-level QR code verification available on Indian market packaging. No recall history.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes: "₹3.8/g protein — 18% above the category average of ₹3.2/g. Premium is partially justified by third-party testing costs. Better value at 2kg size (₹3.1/g).",
    },
    {
      pillar: "practical",
      score: 9.5,
      notes: "Mixes cleanly in 200ml water with no clumping. Tested across cold and room-temperature water. Chocolate flavour is accurate. Packaging seal is consistently intact.",
    },
  ],
  flags: [
    {
      type: "red",
      label: "Aminogen® dose undisclosed",
      detail: "The digestive enzyme blend dose is listed as proprietary. While it is a minor ingredient, full label transparency requires all ingredient weights.",
      deduction: 0.3,
    },
    {
      type: "green",
      label: "Informed Choice Certified",
      detail: "Certified by Informed Choice — independently tested for banned substances. Relevant for competitive athletes.",
    },
    {
      type: "green",
      label: "GMP-Certified Facility",
      detail: "Manufactured in an NSF-GMP certified facility. Consistent quality control standards across batches.",
    },
    {
      type: "green",
      label: "Batch QR Verification",
      detail: "Each tub carries a QR code linking to batch-specific test results. Available on Indian market packaging.",
    },
    {
      type: "green",
      label: "Full Amino Acid Profile Disclosed",
      detail: "Complete essential and non-essential amino acid breakdown available on the label — beyond regulatory requirement.",
    },
  ],
  claimAudit: [
    {
      claim: "24g of protein per serving",
      verdict: "supported",
      evidence: "strong",
      notes: "Confirmed by label and consistent with third-party testing results. Actual yield within ±2% of stated dose.",
    },
    {
      claim: "Helps build lean muscle",
      verdict: "supported",
      evidence: "strong",
      notes: "Whey protein at adequate intake (1.6g/kg bodyweight) combined with resistance training consistently shows lean mass gains in meta-analyses.",
    },
    {
      claim: "Fast-absorbing protein",
      verdict: "overstated",
      evidence: "moderate",
      notes: "WPC is moderately fast compared to casein, but hydrolysed whey absorbs faster. 'Fast-absorbing' is technically true but implies a performance advantage over WPI that isn't consistently shown in outcomes research.",
    },
    {
      claim: "5.5g BCAAs per serving",
      verdict: "supported",
      evidence: "strong",
      notes: "Leucine, isoleucine, valine content is disclosed and consistent with WPC80 amino acid profiles. Label figure verified.",
    },
    {
      claim: "Aminogen® enhances absorption",
      verdict: "context-dependent",
      evidence: "emerging",
      notes: "One industry-sponsored study shows improved nitrogen retention with Aminogen®. Independent replication is limited. The effect size is small and the dose in this product is undisclosed.",
    },
    {
      claim: "Supports recovery",
      verdict: "supported",
      evidence: "moderate",
      notes: "Protein supplementation post-exercise supports muscle repair. The specific recovery claim is a reasonable inference from the protein content, not from any proprietary formula.",
    },
  ],
  valueMetric: {
    pricePerServing: 91,
    primaryActiveGrams: 24,
    pricePerGramActive: 3.8,
    categoryAvgPricePerGram: 3.2,
    efficiency: "below",
  },
  compositeScore: 0, // computed below
  editorialScore: 9 as ReviewRating,
};

// Compute composite score
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${name} Review (2026)`,
    description: `Evidence-led supplement review of ${name}: ingredient analysis, dosage breakdown, FSP score, and honest verdict.`,
    alternates: { canonical: `/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productName = "Optimum Nutrition Gold Standard Whey";
  const brand = "Optimum Nutrition";
  const category = "Protein Powder";
  const publishedDate = "April 10, 2025";
  const updatedDate = "May 2025";

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://fitlabreviews.com/reviews/${slug}#review`,
    name: `${productName} — Fitlabreviews FSP Review`,
    reviewBody:
      "In-depth, evidence-led review using the Fitlab Scoring Protocol (FSP). Analysis covers formula integrity, label transparency, third-party verification, value efficiency, and practical quality.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: rubric.editorialScore,
      bestRating: 10,
      worstRating: 1,
    },
    datePublished: "2025-04-10",
    dateModified: "2025-05-01",
    author: {
      "@type": "Organization",
      name: "Fitlab Research Team",
      url: "https://fitlabreviews.com/authors",
    },
    publisher: {
      "@id": "https://fitlabreviews.com/#organization",
    },
    itemReviewed: {
      "@type": "Product",
      name: productName,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      category: category,
      description:
        "Whey protein concentrate blend with 24g protein per serving. Informed Choice certified, NSF-GMP facility.",
    },
    url: `https://fitlabreviews.com/reviews/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/category/protein" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Protein Powder</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>ON Gold Standard</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>REV-2025-041</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Full Review · FSP Scored</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                {brand} · {category}
              </p>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
                {productName}
              </h1>
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.65, maxWidth: 600, marginBottom: 24 }}>
                The benchmark whey protein. We spent 3 weeks testing it against its label claims — here&apos;s what we found when the marketing stopped talking.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href="#"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Check Price <ExternalLink size={13} />
                </Link>
                <Link href="/methodology" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>
                  FSP Score: {rubric.compositeScore.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={rubric.editorialScore} size="lg" />
          </div>
        </div>
      </div>

      {/* Metadata strip */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <MetadataStrip items={[
          { label: "Published", value: publishedDate },
          { label: "Last Updated", value: updatedDate },
          { label: "Category", value: category },
          { label: "Price Range", value: "Mid-Premium" },
          { label: "Best For", value: "Muscle Gain, Recovery" },
          { label: "Testing Period", value: "3 Weeks" },
        ]} />
      </div>

      {/* Affiliate notice */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px 0" }}>
        <div style={{ padding: "10px 16px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
          <AlertTriangle size={13} style={{ color: "#A89880", flexShrink: 0 }} />
          <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            This review may contain affiliate links. Commissions do not influence our ratings or recommendations.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#C4622D" }}>Read our disclosure →</Link>
          </p>
        </div>
      </div>

      {/* Body: TOC + Content */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* TOC sidebar */}
          <div className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
          </div>

          {/* Main content */}
          <div style={{ minWidth: 0 }}>

            {/* Quick Verdict */}
            <section id="verdict" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Quick Verdict
              </h2>
              <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #C4622D" }}>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 16 }}>
                  Gold Standard Whey remains the most reliable whey concentrate available in India. It delivers consistent protein yield (24g/serving), a complete amino acid profile with 5.5g BCAAs, and mixes cleanly. At ₹2,800–3,200 per kg, it sits at the higher end of mid-tier pricing — but the third-party testing and brand reliability justify the premium over unknown brands.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {["Best for muscle gain", "Reliable protein source", "Mixes well", "Tested purity"].map((tag) => (
                    <span key={tag} style={{ padding: "4px 10px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 8, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 8 }}>Best For</p>
                  {["Muscle gain", "Post-workout recovery", "High-protein diet support"].map((b) => (
                    <p key={b} style={{ fontSize: 13, color: "#2D2926", padding: "3px 0" }}>· {b}</p>
                  ))}
                </div>
                <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 8 }}>Not Ideal For</p>
                  {["Lactose intolerant users", "Strict vegans", "Those needing isolate-only protein"].map((b) => (
                    <p key={b} style={{ fontSize: 13, color: "#2D2926", padding: "3px 0" }}>· {b}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Score Breakdown */}
            <section id="score-breakdown" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Score Breakdown
              </h2>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2025-041" />
            </section>

            {/* Flags */}
            <section id="flags" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Red & Green Flags
              </h2>
              <FlagSystem flags={rubric.flags} />
            </section>

            {/* Ingredients */}
            <section id="ingredients" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Ingredient Breakdown
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {sampleIngredients.map((ing, i) => (
                  <div key={ing.name} style={{ padding: "18px 20px", borderBottom: i < sampleIngredients.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714" }}>{ing.name}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "2px 8px", borderRadius: 4 }}>{ing.dosage}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{ing.purpose}</p>
                    </div>
                    <EvidenceBadge level={ing.evidenceLevel} showIcon={false} />
                  </div>
                ))}
              </div>
            </section>

            {/* Claim Audit */}
            <section id="claim-audit" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
                Claim Audit
              </h2>
              <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                We checked every marketing claim on the label and brand website against published peer-reviewed literature.
              </p>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            {/* Pros Cons */}
            <section id="pros-cons" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Pros & Cons
              </h2>
              <ProsCons
                pros={[
                  "24g clean protein per serving",
                  "5.5g BCAAs with good leucine content",
                  "Mixes well with no lumps",
                  "Third-party tested for purity",
                  "Available India-wide with reliable sourcing",
                  "Good flavour range (double rich chocolate is best)",
                ]}
                cons={[
                  "Contains soy lecithin (potential concern for some)",
                  "Sucralose used as sweetener",
                  "WPC means ~5% lactose — can cause bloating in sensitive users",
                  "Price premium over local alternatives",
                ]}
              />
            </section>

            {/* Safety */}
            <section id="safety" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Safety & Side Effects
              </h2>
              <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <AlertTriangle size={14} style={{ color: "#8B7355" }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B7355" }}>Medical Disclaimer</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>
                  This is not medical advice. Consult a doctor before starting any supplement, especially if you have underlying health conditions.
                </p>
              </div>
              <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75 }}>
                Gold Standard Whey is well-tolerated by most healthy adults. Known side effects are primarily associated with lactose sensitivity — bloating, gas, or mild GI discomfort. The sucralose sweetener may be a concern for those avoiding artificial sweeteners. No serious safety signals at standard dosages (1–2 scoops/day).
              </p>
            </section>

            {/* Value */}
            <section id="value" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Price & Value
              </h2>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="protein" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginTop: 16 }}>
                {[
                  { label: "1 kg (33 servings)", price: "₹2,800–3,200", per: "~₹91/serving" },
                  { label: "2 kg (66 servings)", price: "₹4,800–5,500", per: "~₹76/serving" },
                  { label: "5 lb (74 servings)", price: "₹5,200–6,000", per: "~₹73/serving" },
                ].map((tier) => (
                  <div key={tier.label} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#8A8480", marginBottom: 6 }}>{tier.label}</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{tier.price}</p>
                    <p style={{ fontSize: 12, color: "#5C5650" }}>{tier.per}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {[
                  { q: "Is ON Gold Standard Whey safe for beginners?", a: "Yes. It's one of the safest and most researched protein supplements available. Start with one scoop to assess tolerance." },
                  { q: "Can I take it without working out?", a: "You can use it to meet daily protein targets, but results will be limited without a structured training programme." },
                  { q: "Is it original or fake if bought from Amazon India?", a: "There are counterfeit risks on Amazon India. Buy only from ON's official store or verified distributors. Check the QR code on the packaging." },
                  { q: "Is it good for weight loss?", a: "Protein supports satiety and muscle retention during a calorie deficit. It can support weight loss goals when used as part of a structured plan." },
                ].map((faq, i) => (
                  <div key={i} style={{ padding: "20px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section id="final">
              <div style={{ padding: 32, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Final Verdict</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2EBD9", letterSpacing: "-0.02em", flex: 1 }}>
                    Still the standard. For good reason.
                  </h2>
                  <ReviewScoreBadge rating={rubric.editorialScore} size="md" />
                </div>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 20 }}>
                  ON Gold Standard Whey earns its reputation through consistency, transparency, and third-party verification. It isn&apos;t the cheapest option, but it is one of the most reliable. For anyone building a foundational supplement stack, this is the safe choice — in both senses of the word.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div style={{ padding: "10px 14px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650", marginBottom: 4 }}>FSP COMPOSITE</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#F2EBD9", lineHeight: 1 }}>
                      {rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 12, color: "#5C5650" }}>/10</span>
                    </p>
                  </div>
                  <div style={{ padding: "10px 14px", backgroundColor: "rgba(242,235,217,0.05)", border: "1px solid #2D2926", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650", marginBottom: 4 }}>EDITORIAL SCORE</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 800, color: "#2D6A4F", lineHeight: 1 }}>
                      {rubric.editorialScore}<span style={{ fontSize: 12, color: "#5C5650" }}>/10</span>
                    </p>
                  </div>
                </div>
                <Link href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  View Best Price <ExternalLink size={13} />
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
