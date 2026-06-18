import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beef Pancreas Supplement: Digestive Enzymes & Benefits (2026)",
  description:
    "Beef pancreas supplement guide: pancreatic enzymes (amylase, lipase, protease), zinc, B vitamins. Evidence, dosage, and best brands reviewed.",
  alternates: { canonical: "/ingredients/beef-pancreas" },
};

export default function BeefPancreasPage() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beef-pancreas#article",
    headline: "Beef Pancreas Supplement: Digestive Enzymes, Dosage & Benefits (2026)",
    datePublished: "2026-05-27", dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beef-pancreas",
    articleSection: "Ingredient Research",
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does beef pancreas supplement contain digestive enzymes?", acceptedAnswer: { "@type": "Answer", text: "Yes — beef pancreas contains pancreatic enzymes including pancreatin (a mixture of amylase, lipase, and protease). These are the same enzyme classes present in human pancreatic juice. In freeze-dried supplements, these enzymes are preserved in a denatured state — whether they survive digestion to exert meaningful effects in the small intestine is debated. Medical-grade pancreatic enzyme replacement therapy (PERT) uses standardised, enteric-coated formulations that are pharmacologically different from food-based supplements." } },
      { "@type": "Question", name: "What is 'like supports like' for beef pancreas?", acceptedAnswer: { "@type": "Answer", text: "The 'like supports like' principle is an ancestral health concept: consuming an organ provides specific nutritional support for the same organ in your own body. For beef pancreas, this means the enzymes, peptides, and cofactors in pancreatic tissue might support your own pancreatic function. This concept is not supported by clinical RCTs. It is a plausible but unproven hypothesis rooted in traditional nutrition practices." } },
      { "@type": "Question", name: "Is beef pancreas supplement safe for diabetics?", acceptedAnswer: { "@type": "Answer", text: "At standard food-supplement doses, beef pancreas does not meaningfully affect blood glucose or insulin in most people. The insulin content in freeze-dried pancreatic tissue is negligible and is denatured/digested before absorption. However, people with diabetes or insulin resistance should inform their physician before adding any new supplement to their regimen." } },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    { claim: "Contains pancreatic digestive enzymes (amylase, lipase, protease)", evidence: "moderate", citation: "Layer P, Keller J, 1999 — Aliment Pharmacol Ther; DiMagno EP, 1993", notes: "Beef pancreas naturally contains pancreatin — a mixture of digestive enzymes. In freeze-dried form, the enzyme activity is partially preserved. Whether oral supplementation delivers clinically meaningful enzyme activity to the small intestine depends on formulation and enteric coating. Medical PERT for exocrine pancreatic insufficiency uses standardised enteric-coated preparations. Food-based pancreas supplements provide lower and variable enzyme doses without enteric coating." },
    { claim: "Provides zinc for insulin synthesis and metabolic function", evidence: "strong", citation: "Prasad AS, 2008 — J Am Coll Nutr; Rutter GA, 2010 — Biochem Soc Trans", notes: "Beef pancreas contains approximately 2–4mg zinc per 100g. Zinc is an essential cofactor in insulin synthesis — each insulin hexamer contains 2 zinc atoms. Zinc deficiency impairs glucose tolerance. Dietary zinc from animal sources is highly bioavailable." },
    { claim: "Contains B vitamins supporting energy metabolism", evidence: "moderate", citation: "USDA FoodData Central; Kennedy DO, 2016 — Nutrients", notes: "Beef pancreas provides meaningful amounts of B1 (thiamine), B2 (riboflavin), B3 (niacin), and B5 (pantothenic acid). These B vitamins are co-factors in the citric acid cycle and fatty acid metabolism. Contribution per supplement serving is modest, complementing broader micronutrient intake." },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/ingredients" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Ingredients</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Beef Pancreas</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" }}>ING-2026-015</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0F7A5A", whiteSpace: "nowrap" }}>Ingredient Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 16 }}>
            Beef Pancreas Supplement
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#3F4B43", fontSize: "0.7em", marginTop: 8 }}>Digestive Enzymes, Zinc & the Like-Supports-Like Claim</em>
          </h1>
          <p style={{ fontSize: 15, color: "#3F4B43", lineHeight: 1.75, marginBottom: 12 }}>Beef pancreas is included in nose-to-tail organ supplements primarily for its pancreatic enzyme content (amylase, lipase, protease), zinc, and B vitamins. It is the most conceptually interesting organ from an ancestral health perspective — the "like supports like" hypothesis connects pancreatic tissue consumption to digestive support. Clinical evidence is limited; the nutritional profile is well-documented.</p>
          <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>Last updated: May 2026</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48, padding: 24, backgroundColor: "#17211C", borderRadius: 12 }}>
          {[{ label: "Pancreatin enzymes", value: "Amylase, Lipase, Protease", sub: "Digestive enzyme complex" }, { label: "Zinc per 100g", value: "2–4mg", sub: "18–36% Daily Value" }, { label: "Thiamine (B1) per 100g", value: "~0.1mg", sub: "9% Daily Value" }, { label: "Niacin (B3) per 100g", value: "~4mg", sub: "25% Daily Value" }, { label: "Protein per 100g", value: "~15g", sub: "Complete amino acids" }, { label: "Fat per 100g", value: "~16g", sub: "Including fat-soluble vitamins" }].map((stat) => (
            <div key={stat.label} style={{ padding: "14px 16px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 6 }}>{stat.label}</p>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: stat.value.length > 10 ? 13 : 20, fontWeight: 700, color: "#FFFFFF", marginBottom: 2 }}>{stat.value}</p>
              <p style={{ fontSize: 11, color: "#6B7770" }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="Evidence" figure="§ 01" title="What the research" titleItalic="actually shows" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ padding: 20, border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211C" }}>{b.claim}</p>
                <EvidenceBadge level={b.evidence} />
              </div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259", letterSpacing: "0.08em", marginBottom: 6 }}>{b.citation}</p>
              <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>{b.notes}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="FAQ" figure="§ 02" title="Common" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211C", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading label="Related" figure="§ 03" title="Other organ" titleItalic="ingredients" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[{ name: "Beef Liver", desc: "Retinol, B12, heme iron", href: "/ingredients/beef-liver" }, { name: "Beef Heart", desc: "CoQ10, carnitine", href: "/ingredients/beef-heart" }, { name: "Beef Kidney", desc: "Selenium, B2", href: "/ingredients/beef-kidney" }, { name: "Beef Spleen", desc: "Heme iron, immune peptides", href: "/ingredients/beef-spleen" }].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 16, border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#3F4B43" }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
