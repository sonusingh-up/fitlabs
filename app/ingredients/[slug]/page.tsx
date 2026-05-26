import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import type { EvidenceLevel, ReviewRating } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${name} — Evidence-Based Ingredient Profile`,
    description: `Evidence-based profile of ${name}: benefits, effective dose, safety data, forms comparison, and supplement recommendations.`,
    alternates: { canonical: `/ingredients/${slug}` },
  };
}

export default async function IngredientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const ingredientSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://fitlabreviews.com/ingredients/${slug}#article`,
    headline: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — Evidence-Based Ingredient Profile`,
    description:
      "Comprehensive, evidence-based ingredient profile including benefits, dosages, safety data, and supplement forms analysis.",
    datePublished: "2025-03-01",
    dateModified: "2026-05-26",
    author: {
      "@type": "Organization",
      name: "Fitlab Research Team",
      url: "https://fitlabreviews.com/authors",
    },
    publisher: {
      "@id": "https://fitlabreviews.com/#organization",
    },
    url: `https://fitlabreviews.com/ingredients/${slug}`,
    mainEntityOfPage: `https://fitlabreviews.com/ingredients/${slug}`,
    articleSection: "Ingredient Research",
    keywords: ["supplement ingredients", "evidence-based", slug.replace(/-/g, " ")],
  };

  const ingredient = {
    name: "Creatine Monohydrate",
    category: "Performance & Strength",
    evidenceLevel: "strong" as EvidenceLevel,
    publishedDate: "March 2026",
    figure: "ING-001",
    summary: "Creatine is one of the most researched ergogenic aids in sports science, with a robust body of evidence supporting its role in improving short-burst power, strength, and lean mass accumulation.",
    whatItIs: "Creatine is a naturally occurring compound synthesised from three amino acids — arginine, glycine, and methionine. It is stored primarily in skeletal muscle as phosphocreatine and plays a central role in the ATP-PCr (phosphocreatine) energy system, which powers short, intense bursts of activity.",
    benefits: [
      { claim: "Increases muscle strength and power", evidence: "strong" as EvidenceLevel, notes: "Consistent across multiple meta-analyses. Effect is most pronounced in high-intensity, short-duration efforts." },
      { claim: "Improves lean mass accumulation", evidence: "strong" as EvidenceLevel, notes: "Partially due to water retention, partially due to enhanced training volume." },
      { claim: "Enhances cognitive performance", evidence: "moderate" as EvidenceLevel, notes: "Emerging evidence, particularly in sleep-deprived or vegetarian individuals." },
      { claim: "Supports recovery", evidence: "moderate" as EvidenceLevel, notes: "Reduces muscle damage markers in some studies." },
      { claim: "Neuroprotective effects", evidence: "emerging" as EvidenceLevel, notes: "Animal studies promising; human evidence limited." },
    ],
    dosage: {
      loading: "20g/day (4 × 5g) for 5–7 days to saturate muscles rapidly",
      maintenance: "3–5g/day — sufficient for most users",
      timing: "Post-workout with carbohydrates slightly improves uptake, but timing is largely irrelevant",
      notes: "Loading is optional — daily 5g will achieve the same saturation in 3–4 weeks without GI upset.",
    },
    safety: "Creatine monohydrate is one of the safest sports supplements available. Decades of research show no adverse effects on kidney or liver function in healthy adults at standard doses. The only notable side effect is water retention in muscles — not subcutaneous fat.",
    forms: [
      { name: "Creatine Monohydrate", verdict: "Best choice — highest evidence, cheapest, most stable", recommended: true },
      { name: "Creatine HCl", verdict: "No proven benefit over monohydrate; smaller dose but higher cost", recommended: false },
      { name: "Buffered Creatine (Kre-Alkalyn)", verdict: "Marketing claims not supported by research vs monohydrate", recommended: false },
      { name: "Micronised Creatine", verdict: "Same as monohydrate, finer particle = better mixability only", recommended: true },
    ],
  };

  const relatedReviews = [
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Clean, affordable, and third-party tested. The best budget creatine in India.", publishedAt: "2025-03-08" },
    { slug: "optimum-nutrition-creatine", title: "ON Micronised Creatine Powder", brand: "Optimum Nutrition", category: "Creatine", rating: 8 as ReviewRating, verdict: "Reliable brand with excellent mixability. Slightly pricier than AS-IT-IS but more available.", publishedAt: "2025-02-15" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ingredientSchema) }}
      />
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/ingredients/creatine" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Ingredients</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{ingredient.name}</span>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>{ingredient.figure}</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Profile</span>
          </div>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>{ingredient.category}</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
            {ingredient.name}
          </h1>
          <div style={{ marginBottom: 20 }}>
            <EvidenceBadge level={ingredient.evidenceLevel} />
          </div>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 680 }}>{ingredient.summary}</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>What Is It?</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>{ingredient.whatItIs}</p>
        </section>

        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Benefits & Evidence</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {ingredient.benefits.map((b, i) => (
              <div key={i} style={{ padding: "18px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{b.claim}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{b.notes}</p>
                </div>
                <EvidenceBadge level={b.evidence} showIcon={false} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Dosage Guidelines</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Loading Protocol", value: ingredient.dosage.loading },
              { label: "Maintenance Dose", value: ingredient.dosage.maintenance },
              { label: "Timing", value: ingredient.dosage.timing },
            ].map((d) => (
              <div key={d.label} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{d.label}</p>
                <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{d.value}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}><strong>Note:</strong> {ingredient.dosage.notes}</p>
          </div>
        </section>

        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Safety Profile</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>{ingredient.safety}</p>
        </section>

        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Best Supplement Forms</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ingredient.forms.map((form) => (
              <div key={form.name} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: form.recommended ? "#F8F2E4" : "#EDE8DF" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{form.name}</p>
                  <p style={{ fontSize: 13, color: "#5C5650" }}>{form.verdict}</p>
                </div>
                <span style={{ padding: "4px 10px", backgroundColor: form.recommended ? "rgba(45,106,79,0.1)" : "rgba(196,98,45,0.08)", border: `1px solid ${form.recommended ? "rgba(45,106,79,0.2)" : "rgba(196,98,45,0.15)"}`, borderRadius: 8, fontSize: 10, color: form.recommended ? "#2D6A4F" : "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" as const }}>
                  {form.recommended ? "Recommended" : "Skip It"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading label="Products" figure="§ REL" title="Reviews featuring" titleItalic={ingredient.name} size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {relatedReviews.map((r) => (<ReviewCard key={r.slug} {...r} />))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
