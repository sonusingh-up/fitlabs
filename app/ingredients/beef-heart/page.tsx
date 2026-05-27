import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beef Heart Supplement: CoQ10 Benefits, Dosage & Best Brands (2026)",
  description:
    "Beef heart supplement guide: the richest dietary source of CoQ10, B12, selenium, zinc. Evidence, dosage, safety, and best beef heart supplement brands reviewed.",
  alternates: { canonical: "/ingredients/beef-heart" },
};

export default function BeefHeartPage() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beef-heart#article",
    headline: "Beef Heart Supplement: CoQ10 Benefits, Dosage & Best Brands (2026)",
    datePublished: "2026-05-27", dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beef-heart",
    articleSection: "Ingredient Research",
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is beef heart the best dietary source of CoQ10?", acceptedAnswer: { "@type": "Answer", text: "Yes — beef heart contains 113mg CoQ10 per 100g, making it the highest-known dietary CoQ10 source. By comparison, herring contains ~17mg/100g, chicken heart ~73mg/100g, and sardines ~6mg/100g. Conventional CoQ10 supplements use synthetic ubiquinone or ubiquinol; beef heart provides it in a whole-food matrix with co-occurring carnitine, B12, and selenium." } },
      { "@type": "Question", name: "Is beef heart supplement better than CoQ10 supplement?", acceptedAnswer: { "@type": "Answer", text: "Depends on your goal. Dedicated CoQ10 supplements (ubiquinol, 100–300mg/day) deliver significantly higher and more precise doses than beef heart supplements, which provide 5–15mg CoQ10 per 3g serving. For targeted CoQ10 supplementation (statin myopathy, heart failure, fertility), a dedicated supplement is more effective. For whole-food broad nutrition including CoQ10 plus B12, carnitine, and selenium, beef heart supplements make sense as part of an organ supplement stack." } },
      { "@type": "Question", name: "Can you take beef heart supplement every day?", acceptedAnswer: { "@type": "Answer", text: "Yes. Beef heart supplements are generally well-tolerated daily at label doses. Unlike beef liver, there is no vitamin A toxicity concern with beef heart. The main nutrients — CoQ10, B12, carnitine, selenium — are water-soluble or self-regulating at dietary doses." } },
      { "@type": "Question", name: "What is L-carnitine in beef heart?", acceptedAnswer: { "@type": "Answer", text: "Beef heart is one of the richest dietary sources of L-carnitine (approximately 1,100mg/100g fresh weight). Carnitine transports long-chain fatty acids into mitochondria for beta-oxidation (energy production). Carnitine deficiency is rare in red-meat eaters; supplementation benefits are most established in vegetarians, elderly individuals, and kidney disease patients." } },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    { claim: "Richest dietary source of CoQ10", evidence: "strong", citation: "Crane FL, 2001 — J Am Coll Nutr; USDA beef nutrient data", notes: "Beef heart contains 113mg CoQ10 per 100g fresh weight — the highest concentration of any food. CoQ10 is a critical electron carrier in the mitochondrial electron transport chain (Complexes I, II, III). Deficiency impairs ATP production and is documented in heart failure, statins users, and aging." },
    { claim: "High L-carnitine content supports fat metabolism", evidence: "moderate", citation: "Rebouche CJ, 2004 — Ann N Y Acad Sci", notes: "Beef heart contains approximately 1,100mg L-carnitine per 100g. Carnitine facilitates long-chain fatty acid transport across the inner mitochondrial membrane for oxidation. Clinical evidence for supplemental carnitine is strongest in carnitine-deficient populations (vegetarians, end-stage renal disease)." },
    { claim: "Provides B12 for neurological and red blood cell function", evidence: "strong", citation: "Tucker KL et al., 2000 — Am J Clin Nutr", notes: "Beef heart provides approximately 3.8µg B12 per 100g — about 160% of the daily value. While lower than liver, meaningful contribution to daily B12 intake, which is essential for myelin synthesis, megaloblastic anemia prevention, and homocysteine metabolism." },
    { claim: "Selenium source supporting thyroid and antioxidant function", evidence: "moderate", citation: "Rayman MP, 2012 — Lancet", notes: "Beef heart contains 37–45µg selenium per 100g, providing 67–82% of the RDA. Selenium is a cofactor for glutathione peroxidase enzymes (antioxidant defence) and iodothyronine deiodinases (thyroid hormone activation). Clinical evidence for supplementation is strongest in selenium-deficient populations." },
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Heart</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">

        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ING-2026-012</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Ingredient Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Beef Heart Supplement
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.7em", marginTop: 8 }}>CoQ10, Carnitine & the Mitochondrial Organ</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Beef heart is the richest dietary source of CoQ10 (coenzyme Q10) — providing 113mg per 100g fresh weight, far exceeding any other food. It is also dense in L-carnitine, vitamin B12, selenium, and zinc. In organ supplement blends, beef heart is included primarily for its CoQ10 content and the mitochondrial energy production this supports.</p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 2026 · Evidence reviewed against current PubMed literature</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48, padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[
            { label: "CoQ10 per 100g", value: "113mg", sub: "Richest dietary source" },
            { label: "L-Carnitine per 100g", value: "~1,100mg", sub: "Fat oxidation cofactor" },
            { label: "Vitamin B12 per 100g", value: "3.8µg", sub: "160% Daily Value" },
            { label: "Selenium per 100g", value: "37–45µg", sub: "67–82% Daily Value" },
            { label: "Zinc per 100g", value: "2.7mg", sub: "25% Daily Value" },
            { label: "Iron (heme) per 100g", value: "4.3mg", sub: "24% Daily Value" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: "14px 16px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 6 }}>{stat.label}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{stat.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Quick Answer</p>
          <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>Beef heart supplements are taken primarily for CoQ10 — a mitochondrial electron carrier essential for ATP production. Each gram of freeze-dried heart contains ~1.1–1.5mg CoQ10. A standard 3g serving provides ~3–5mg CoQ10 — lower than dedicated CoQ10 supplements (100–300mg), but delivered in a whole-food matrix with co-occurring carnitine, B12, and selenium. Most useful as part of a multi-organ stack rather than a standalone CoQ10 replacement.</p>
        </div>

        <SectionHeading label="Evidence" figure="§ 01" title="What the research" titleItalic="actually shows" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ padding: 20, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{b.claim}</p>
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
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="Related" figure="§ 03" title="Other organ" titleItalic="ingredients" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[{ name: "Beef Liver", desc: "Retinol, B12, heme iron", href: "/ingredients/beef-liver" }, { name: "Beef Kidney", desc: "Selenium, B2, CoQ10", href: "/ingredients/beef-kidney" }, { name: "Beef Spleen", desc: "Heme iron, zinc", href: "/ingredients/beef-spleen" }, { name: "Beef Pancreas", desc: "Digestive enzymes", href: "/ingredients/beef-pancreas" }].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#5C5650" }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
