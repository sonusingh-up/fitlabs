import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beef Spleen Supplement: Iron, Zinc & Immune Benefits (2026)",
  description:
    "Beef spleen supplement guide: rich in heme iron, zinc, and immune peptides (tuftsin, splenopentin). Evidence, dosage, safety, and best supplement brands reviewed.",
  alternates: { canonical: "/ingredients/beef-spleen" },
};

export default function BeefSpleenPage() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beef-spleen#article",
    headline: "Beef Spleen Supplement: Iron, Zinc & Immune Support (2026)",
    datePublished: "2026-05-27", dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beef-spleen",
    articleSection: "Ingredient Research",
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why is beef spleen in organ supplements?", acceptedAnswer: { "@type": "Answer", text: "Beef spleen is included in organ supplements for its iron density (second only to liver), zinc content, and naturally occurring immune peptides (tuftsin and splenopentin). The spleen is an iron-storage organ, making spleen tissue exceptionally iron-rich. For women with iron-deficiency anemia or those with heavy menstrual blood loss, the high heme iron content is the primary rationale." } },
      { "@type": "Question", name: "What is tuftsin and does it work?", acceptedAnswer: { "@type": "Answer", text: "Tuftsin is a naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) found in spleen tissue. It stimulates macrophage, monocyte, and neutrophil activity in laboratory studies. Clinical evidence for supplemental tuftsin from food-based spleen products is limited — most research involves isolated tuftsin, not whole spleen extracts. The 'like supports like' immune benefit is plausible mechanistically but unproven in RCTs." } },
      { "@type": "Question", name: "Is beef spleen safe for people with iron overload?", acceptedAnswer: { "@type": "Answer", text: "No. Spleen is exceptionally iron-dense. For people with hemochromatosis (hereditary iron overload) or elevated ferritin, beef spleen supplements are contraindicated. Heme iron from spleen is absorbed at 15–35% — the body cannot actively reduce heme iron absorption the way it can reduce non-heme iron. Those with iron overload conditions should avoid all organ supplements containing spleen or liver." } },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    { claim: "Second-highest heme iron density after liver", evidence: "strong", citation: "USDA FoodData Central; Hallberg L et al., 1979 — Am J Clin Nutr", notes: "Beef spleen contains approximately 42mg iron per 100g — the highest iron content of any organ or muscle meat. The majority is heme iron, absorbed at 15–35% regardless of body iron status. Clinically relevant for iron-deficiency anemia, particularly in premenopausal women." },
    { claim: "Contains tuftsin — an immune-modulating peptide", evidence: "limited", citation: "Nishioka K et al., 1972 — Biochim Biophys Acta; Nathan CF, 1987 — J Exp Med", notes: "Tuftsin (Thr-Lys-Pro-Arg) is a naturally occurring peptide found in the spleen's IgG fraction. Laboratory and animal studies demonstrate tuftsin activates phagocytosis in macrophages and neutrophils. Human clinical evidence from whole spleen food products is absent. The 'like supports like' claim for immune support is mechanistically plausible but lacks RCT verification." },
    { claim: "Zinc source supporting immune and reproductive function", evidence: "moderate", citation: "Prasad AS, 2008 — J Am Coll Nutr", notes: "Beef spleen contains approximately 2–3mg zinc per 100g. Zinc is essential for T-cell function, wound healing, testosterone biosynthesis, and over 300 enzymatic reactions. Dietary zinc from animal sources is more bioavailable than plant zinc (no phytate competition)." },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/ingredients" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Ingredients</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Spleen</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ING-2026-014</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Ingredient Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Beef Spleen Supplement
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.7em", marginTop: 8 }}>Heme Iron, Zinc & Immune Peptides</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Beef spleen is the second-richest organ meat source of heme iron after liver, containing approximately 42mg iron per 100g. It also contains tuftsin — an immune-modulating tetrapeptide specific to spleen tissue — and zinc. For women with iron-deficiency anemia, spleen-containing organ blends provide a meaningful dietary iron boost.</p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 2026</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48, padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[{ label: "Iron per 100g", value: "~42mg", sub: "Highest of any meat" }, { label: "Zinc per 100g", value: "2–3mg", sub: "18–27% Daily Value" }, { label: "Vitamin B12 per 100g", value: "~3µg", sub: "125% Daily Value" }, { label: "Tuftsin", value: "Present", sub: "Immune peptide" }, { label: "Protein per 100g", value: "~19g", sub: "Complete amino acid profile" }, { label: "Calories per 100g", value: "~105 kcal", sub: "Lean organ tissue" }].map((stat) => (
            <div key={stat.label} style={{ padding: "14px 16px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 6 }}>{stat.label}</p>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{stat.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="Evidence" figure="§ 01" title="What the research" titleItalic="actually shows" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ padding: 20, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{b.claim}</p>
                <EvidenceBadge level={b.evidence} />
              </div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.08em", marginBottom: 6 }}>{b.citation}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{b.notes}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="FAQ" figure="§ 02" title="Common" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="Related" figure="§ 03" title="Other organ" titleItalic="ingredients" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[{ name: "Beef Liver", desc: "Retinol, B12, heme iron", href: "/ingredients/beef-liver" }, { name: "Beef Heart", desc: "CoQ10, carnitine", href: "/ingredients/beef-heart" }, { name: "Beef Kidney", desc: "Selenium, B2", href: "/ingredients/beef-kidney" }, { name: "Beef Pancreas", desc: "Digestive enzymes", href: "/ingredients/beef-pancreas" }].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#5C5650" }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
