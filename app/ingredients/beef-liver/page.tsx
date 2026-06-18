import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beef Liver Supplement: Benefits, Dosage & Best Brands (2026)",
  description:
    "Beef liver supplement guide: retinol, B12, heme iron, copper content, clinical evidence, safe dosage, vitamin A toxicity risk, and best brands reviewed.",
  alternates: { canonical: "/ingredients/beef-liver" },
};

export default function BeefLiverPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beef-liver#article",
    headline: "Beef Liver Supplement: Benefits, Dosage, Safety & Best Brands (2026)",
    description: "Evidence-based research profile of beef liver supplements — retinol, B12, heme iron, CoQ10 content, clinical evidence for benefits, correct dosage, and vitamin A toxicity risk.",
    datePublished: "2026-05-27",
    dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beef-liver",
    articleSection: "Ingredient Research",
    keywords: ["beef liver supplement", "beef liver benefits", "desiccated beef liver", "beef liver vitamin A", "beef liver dosage", "freeze-dried liver"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What nutrients are in beef liver supplements?", acceptedAnswer: { "@type": "Answer", text: "Beef liver is the most nutrient-dense food per gram. Key nutrients: retinol (preformed vitamin A) — higher than any other food source; vitamin B12 — 3,000%+ daily value per 100g; heme iron — the most bioavailable form; copper — critical for iron metabolism and antioxidant enzymes; folate; riboflavin (B2); zinc; CoQ10; and choline. A freeze-dried supplement concentrates these nutrients approximately 4–5x vs fresh liver weight." } },
      { "@type": "Question", name: "How much beef liver supplement should I take?", acceptedAnswer: { "@type": "Answer", text: "Most products recommend 3–6 capsules per day, providing approximately 1.5–3g of freeze-dried liver. This is the nutrient equivalent of roughly 7–15g of fresh liver. The limiting nutrient is retinol — at standard doses (6 caps), expect roughly 500–2,500 IU retinol, depending on the product and batch. The tolerable upper intake for preformed vitamin A is 10,000 IU/day for healthy adults. Do not exceed recommended doses." } },
      { "@type": "Question", name: "Is beef liver supplement safe?", acceptedAnswer: { "@type": "Answer", text: "For most healthy adults at label doses, yes. The main safety concern is vitamin A (retinol) toxicity — beef liver is the richest dietary source of retinol. Chronic excess retinol causes hepatotoxicity, bone pain, and hair loss. Acute toxicity causes headache and nausea. Practical risk at standard supplement doses is low for non-pregnant adults not taking separate vitamin A supplements. Pregnant women: consult OB/GYN — retinol is teratogenic above 10,000 IU/day." } },
      { "@type": "Question", name: "Is freeze-dried better than desiccated beef liver?", acceptedAnswer: { "@type": "Answer", text: "Freeze-drying preserves heat-sensitive nutrients (CoQ10, B vitamins, enzymes) better than heat desiccation. Both deliver the core nutrient profile. The difference in practice is meaningful but not dramatic. More important than processing method: sourcing (NZ or US pasture-raised) and COA availability for heavy metals." } },
      { "@type": "Question", name: "Can you take beef liver supplements every day?", acceptedAnswer: { "@type": "Answer", text: "Yes, at recommended doses. Daily consistency is how you get the cumulative benefit from fat-soluble vitamins (A, D, K2) that accumulate in tissue. The key caution is to avoid stacking with other high-dose vitamin A sources (cod liver oil, dedicated vitamin A supplements, high-dose multivitamins) that would push retinol intake toward the upper limit." } },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    { claim: "Provides highly bioavailable retinol (preformed vitamin A)", evidence: "strong", citation: "USDA FoodData Central; Olson JA, 1994 — J Nutr", notes: "Beef liver contains 16,899 µg RAE retinol per 100g — far exceeding all other food sources. Preformed retinol from animal liver is absorbed and utilised more efficiently than beta-carotene from plant sources. Critical for vision, immune function, and skin barrier integrity." },
    { claim: "Highest dietary source of vitamin B12", evidence: "strong", citation: "USDA FoodData Central; Tucker KL, 2000 — Am J Clin Nutr", notes: "Beef liver contains 59.3µg B12 per 100g — approximately 2,471% of the daily value. B12 is essential for myelin synthesis, red blood cell formation, and DNA synthesis. Liver supplements provide meaningful B12 for vegetarians cautiously adding animal-derived products." },
    { claim: "Rich source of heme iron with high bioavailability", evidence: "strong", citation: "Hallberg L et al., 1979 — Am J Clin Nutr", notes: "Beef liver contains approximately 6.2mg iron per 100g as heme iron. Heme iron absorption rate is 15–35% — significantly higher than non-heme iron (1–10%). Clinical relevance for iron-deficiency anemia, particularly in women with heavy menstruation." },
    { claim: "Provides CoQ10 for mitochondrial energy production", evidence: "moderate", citation: "Garrido-Maraver J et al., 2014 — Front Biosci", notes: "While beef heart is the richest CoQ10 source, liver also contains CoQ10. CoQ10 is a cofactor in the electron transport chain. Clinical evidence for supplemental CoQ10 in healthy adults is mixed; more established for statin-induced myopathy and heart failure." },
    { claim: "Supports copper-dependent enzyme function", evidence: "moderate", citation: "Turnlund JR, 1998 — Am J Clin Nutr", notes: "Beef liver is the richest dietary copper source (9.7mg/100g vs 0.4mg RDA). Copper cofactors include superoxide dismutase (antioxidant), ceruloplasmin (iron metabolism), lysyl oxidase (connective tissue), and dopamine β-hydroxylase (neurotransmitter synthesis). Copper deficiency is uncommon but clinically significant." },
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Liver</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ING-2026-011</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Ingredient Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Beef Liver Supplement
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.7em", marginTop: 8 }}>Benefits, Dosage, Vitamin A Risks & Best Brands</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>Beef liver is gram-for-gram the most nutrient-dense food on the planet. It is the richest source of retinol (preformed vitamin A), the most concentrated dietary B12, and one of the best sources of bioavailable heme iron. Freeze-dried supplements offer these nutrients in capsule form without the taste, prep, and refrigeration requirements of eating whole liver.</p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 2026 · Evidence reviewed against current PubMed literature</p>
        </div>

        {/* Stats panel */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 48, padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[
            { label: "Vitamin B12 per 100g", value: "59.3µg", sub: "2,471% Daily Value" },
            { label: "Retinol (Vit A) per 100g", value: "16,899µg", sub: "Highest food source" },
            { label: "Heme Iron per 100g", value: "6.2mg", sub: "15–35% absorption" },
            { label: "Copper per 100g", value: "9.7mg", sub: "2,400% DV" },
            { label: "CoQ10 per 100g", value: "~39mg", sub: "Mitochondrial support" },
            { label: "Folate per 100g", value: "290µg", sub: "73% Daily Value" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: "14px 16px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 6 }}>{stat.label}</p>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{stat.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick answer */}
        <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Quick Answer</p>
          <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7 }}>
            <strong>What it is:</strong> Freeze-dried or desiccated bovine (beef) liver in capsule form. <strong>What it provides:</strong> The highest concentration of retinol, B12, heme iron, and copper available in any food or supplement. <strong>Who it is for:</strong> People who want the nutrient profile of liver without eating it — or who want to supplement a diet already containing some liver. <strong>Main risk:</strong> Vitamin A (retinol) toxicity with excessive intake or stacking with other vitamin A sources. <strong>Recommended dose:</strong> 3–6 capsules/day (1.5–3g freeze-dried liver equivalent).
          </p>
        </div>

        {/* Evidence section */}
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

        {/* Dosage */}
        <SectionHeading label="Dosage" figure="§ 02" title="How much" titleItalic="to take" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Starting dose", value: "3 capsules/day", note: "Build tolerance, ~1–1.5g freeze-dried liver" },
              { label: "Standard dose", value: "6 capsules/day", note: "Most brands' recommended serving, ~3g" },
              { label: "Retinol ceiling", value: "10,000 IU/day", note: "Tolerable upper intake level for adults" },
              { label: "Timing", value: "With largest meal", note: "Fat-soluble vitamins need dietary fat" },
            ].map((d) => (
              <div key={d.label} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>{d.label}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-newsreader), Georgia, serif", marginBottom: 4 }}>{d.value}</p>
                <p style={{ fontSize: 11, color: "#5C5650" }}>{d.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
            The standard 6-capsule serving provides approximately 3g of freeze-dried liver — the nutrient equivalent of roughly 15g fresh liver. A full 85g serving of fresh liver contains far more nutrition, which is why supplement advocates suggest eating whole liver 1–2x per week and using supplements on other days.
          </p>
        </div>

        {/* Safety */}
        <SectionHeading label="Safety" figure="§ 03" title="Vitamin A" titleItalic="toxicity risks" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <div style={{ padding: 20, backgroundColor: "#FEF9F7", border: "1px solid #E5C4B8", borderRadius: 10, marginBottom: 16, display: "flex", gap: 12 }}>
            <AlertTriangle size={20} color="#9B2020" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#9B2020", marginBottom: 8 }}>Vitamin A (Retinol) Toxicity</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>Beef liver is the richest dietary source of preformed retinol. Unlike beta-carotene from plants (which the body self-regulates), preformed retinol accumulates in liver tissue. Chronic excess causes hepatotoxicity, bone mineral density loss, and hair thinning. Acute overdose (very large single doses) causes headache, nausea, and vomiting.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { group: "Healthy adults", guidance: "Safe at 6 caps/day. Avoid stacking with cod liver oil or dedicated vitamin A supplements.", risk: "Low" },
              { group: "Pregnant women", guidance: "Retinol above 10,000 IU/day linked to birth defects. Consult OB/GYN before use.", risk: "High" },
              { group: "Hemochromatosis", guidance: "Heme iron absorption is high and unregulated. Organ supplements contraindicated.", risk: "High" },
              { group: "Warfarin users", guidance: "Vitamin K in liver can affect INR. Monitor closely with physician.", risk: "Medium" },
            ].map((item) => (
              <div key={item.group} style={{ padding: 14, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.group}</p>
                  <span style={{ fontSize: 10, padding: "2px 8px", backgroundColor: item.risk === "High" ? "#FCEAEA" : item.risk === "Medium" ? "#FAEEDA" : "#EAF3DE", color: item.risk === "High" ? "#9B2020" : item.risk === "Medium" ? "#854F0B" : "#3B6D11", borderRadius: 99, fontFamily: "var(--font-dm-mono), monospace" }}>{item.risk}</span>
                </div>
                <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best brands */}
        <SectionHeading label="Top Picks" figure="§ 04" title="Best beef liver" titleItalic="supplements" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {[
            { rank: 1, name: "Ancestral Supplements Beef Liver", note: "NZ grass-fed, published heavy metal COA. Gold standard for sourcing transparency.", score: "9/10", href: "/reviews/ancestral-supplements-beef-liver" },
            { rank: 2, name: "Perfect Supplements Beef Liver", note: "USDA organic certified, budget-friendly. Best pick for organic-focused buyers.", score: "8/10", href: "/reviews/perfect-supplements-beef-liver" },
            { rank: 3, name: "Left Coast Performance Beef Organs", note: "NZ sourced, 5-organ blend, lowest price for NZ provenance.", score: "8/10", href: "/reviews/left-coast-performance-beef-organs" },
          ].map((pick) => (
            <div key={pick.rank} style={{ padding: 18, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, backgroundColor: pick.rank === 1 ? "#1A1714" : "#EDE8DF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700, color: pick.rank === 1 ? "#F2EBD9" : "#5C5650" }}>#{pick.rank}</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{pick.name}</p>
                <p style={{ fontSize: 13, color: "#5C5650" }}>{pick.note}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700 }}>{pick.score}</span>
                <Link href={pick.href} style={{ fontSize: 11, color: "#C4622D", textDecoration: "none", fontWeight: 600 }}>Review →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <SectionHeading label="FAQ" figure="§ 05" title="Common" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Related ingredients */}
        <SectionHeading label="Related" figure="§ 06" title="Other organ" titleItalic="ingredients" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            { name: "Beef Heart", desc: "Richest source of CoQ10", href: "/ingredients/beef-heart" },
            { name: "Beef Kidney", desc: "Highest selenium density", href: "/ingredients/beef-kidney" },
            { name: "Beef Spleen", desc: "Iron + immune peptides", href: "/ingredients/beef-spleen" },
            { name: "Beef Pancreas", desc: "Digestive enzyme source", href: "/ingredients/beef-pancreas" },
          ].map((item) => (
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
