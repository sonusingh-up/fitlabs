import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beef Kidney Supplement: Selenium Benefits, Dosage (2026)",
  description:
    "Beef kidney supplement guide: highest selenium density of any organ, riboflavin, B12, CoQ10. Evidence, dosage, safety, and best brands reviewed.",
  alternates: { canonical: "/ingredients/beef-kidney" },
};

export default function BeefKidneyPage() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beef-kidney#article",
    headline: "Beef Kidney Supplement: Selenium, B2, and Detox Support (2026)",
    datePublished: "2026-05-27", dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beef-kidney",
    articleSection: "Ingredient Research",
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why is beef kidney included in organ supplements?", acceptedAnswer: { "@type": "Answer", text: "Beef kidney provides a unique nutrient profile vs liver and heart: it is exceptionally high in selenium, riboflavin (B2), and CoQ10, while being lower in retinol than liver. This makes it a useful complement in a nose-to-tail multi-organ stack — adding selenium and B2 density without increasing the retinol load." } },
      { "@type": "Question", name: "Is beef kidney supplement safe?", acceptedAnswer: { "@type": "Answer", text: "Yes, for most healthy adults. Unlike liver, kidney does not pose a vitamin A toxicity risk. The main caution: kidney is high in purines, which are metabolised to uric acid. Those with gout or hyperuricemia should use kidney supplements cautiously. Also, kidney concentrates heavy metals (cadmium) at higher rates than liver — this makes COA documentation more important for kidney-containing products." } },
      { "@type": "Question", name: "How much selenium is in beef kidney?", acceptedAnswer: { "@type": "Answer", text: "Beef kidney contains approximately 140–160µg selenium per 100g — roughly 250–290% of the daily value. This is significantly higher than liver (~57µg/100g) and beef heart (~40µg/100g). The RDA for selenium is 55µg/day; the tolerable upper intake is 400µg/day. At standard organ supplement doses (containing a fraction of beef kidney), selenium intake from this source alone is unlikely to approach the upper limit." } },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    { claim: "Highest selenium density of the major organ meats", evidence: "strong", citation: "USDA FoodData Central; Rayman MP, 2012 — Lancet", notes: "Beef kidney contains 140–160µg selenium per 100g — the highest selenium density of commonly available organ meats. Selenium is a critical cofactor for glutathione peroxidase (GPx) enzymes, which neutralise reactive oxygen species. Also required for iodothyronine deiodinases, which convert T4 to active T3 thyroid hormone." },
    { claim: "Rich source of riboflavin (B2) for energy metabolism", evidence: "strong", citation: "USDA FoodData Central; Powers HJ, 2003 — Am J Clin Nutr", notes: "Beef kidney contains approximately 3.4mg riboflavin per 100g — 261% of the daily value. Riboflavin is a precursor to FAD and FMN, cofactors in the electron transport chain and fatty acid beta-oxidation. B2 deficiency impairs energy metabolism and is more common in those avoiding animal products." },
    { claim: "Contains CoQ10 for mitochondrial support", evidence: "moderate", citation: "Dallner G, Sindelar PJ, 2000 — Free Radic Biol Med", notes: "Beef kidney contains approximately 4–15mg CoQ10 per 100g. Lower than heart (~113mg/100g) but meaningful in a multi-organ blend. CoQ10 is the primary electron carrier between mitochondrial Complexes I/II and Complex III." },
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Kidney</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ING-2026-013</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Ingredient Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Beef Kidney Supplement
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.7em", marginTop: 8 }}>Selenium, Riboflavin & Detox Support</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Beef kidney is the most selenium-dense major organ meat, providing 140–160µg per 100g — roughly 2.5x the selenium density of liver. It is also rich in riboflavin (B2) and CoQ10. In multi-organ supplement blends, kidney adds selenium and B2 to the nutritional profile without increasing the retinol load of liver.</p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 2026</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48, padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[{ label: "Selenium per 100g", value: "140–160µg", sub: "250–290% Daily Value" }, { label: "Riboflavin (B2) per 100g", value: "3.4mg", sub: "261% Daily Value" }, { label: "Vitamin B12 per 100g", value: "~28µg", sub: "1,167% Daily Value" }, { label: "CoQ10 per 100g", value: "~4–15mg", sub: "Mitochondrial support" }, { label: "Zinc per 100g", value: "2.7mg", sub: "25% Daily Value" }, { label: "Iron per 100g", value: "4.6mg", sub: "26% Daily Value" }].map((stat) => (
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
          {[{ name: "Beef Liver", desc: "Retinol, B12, heme iron", href: "/ingredients/beef-liver" }, { name: "Beef Heart", desc: "CoQ10, carnitine", href: "/ingredients/beef-heart" }, { name: "Beef Spleen", desc: "Heme iron, zinc", href: "/ingredients/beef-spleen" }, { name: "Beef Pancreas", desc: "Digestive enzymes", href: "/ingredients/beef-pancreas" }].map((item) => (
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
