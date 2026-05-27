import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Supplement Ingredient Research Index",
  description: "Evidence-based ingredient profiles: dosage guidelines, mechanism of action, safety data, and supplement form comparisons for every major sports nutrition ingredient.",
  alternates: { canonical: "/ingredients" },
};

const ingredients = [
  {
    slug: "creatine",
    name: "Creatine Monohydrate",
    category: "Strength & Power",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-001",
    summary: "The most researched ergogenic aid in sports science. Consistently improves short-burst power, strength output, and lean mass accumulation.",
    dose: "3–5g / day",
    mechanism: "Phosphocreatine replenishment",
    bestFor: ["Strength training", "Sprinting", "HIIT"],
  },
  {
    slug: "whey-protein",
    name: "Whey Protein Isolate",
    category: "Muscle Protein Synthesis",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-002",
    summary: "Complete protein with the highest leucine content of any supplement. Gold standard for post-exercise muscle protein synthesis.",
    dose: "20–40g / serving",
    mechanism: "Leucine-triggered MPS",
    bestFor: ["Muscle gain", "Recovery", "Weight loss"],
  },
  {
    slug: "beta-alanine",
    name: "Beta-Alanine",
    category: "Endurance",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-003",
    summary: "Increases muscle carnosine, buffering lactic acid during high-intensity efforts. The tingling (paraesthesia) is expected and harmless.",
    dose: "3.2–6.4g / day",
    mechanism: "Carnosine buffering",
    bestFor: ["Endurance", "HIIT", "High-rep training"],
  },
  {
    slug: "citrulline",
    name: "L-Citrulline / Citrulline Malate",
    category: "Blood Flow & Pump",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-004",
    summary: "Raises arginine and nitric oxide levels more effectively than arginine itself. Improves blood flow, reduces fatigue, and enhances work capacity.",
    dose: "6–8g citrulline (or 8g C. Malate)",
    mechanism: "Nitric oxide via arginine pathway",
    bestFor: ["Pre-workout", "Endurance", "Pump"],
  },
  {
    slug: "caffeine",
    name: "Caffeine",
    category: "Stimulant & Focus",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-005",
    summary: "The most widely used performance enhancer on the planet. Robustly improves endurance, strength, power, and cognitive performance.",
    dose: "3–6mg / kg bodyweight",
    mechanism: "Adenosine receptor antagonism",
    bestFor: ["Endurance", "Strength", "Focus", "Fat loss"],
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha (KSM-66 / Sensoril)",
    category: "Adaptogen & Recovery",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-006",
    summary: "A well-studied adaptogen with consistent data on cortisol reduction, strength improvement, and sleep quality. Standardised extracts matter.",
    dose: "300–600mg / day",
    mechanism: "HPA axis modulation",
    bestFor: ["Stress", "Recovery", "Sleep", "Testosterone support"],
  },
  {
    slug: "l-theanine",
    name: "L-Theanine",
    category: "Focus & Calm",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-007",
    summary: "Paired with caffeine, L-theanine smooths stimulant jitteriness and enhances sustained focus. One of the most reliable cognitive stacks.",
    dose: "100–200mg / dose",
    mechanism: "GABA modulation, alpha-wave activity",
    bestFor: ["Focus", "Anxiety reduction", "Caffeine synergy"],
  },
  {
    slug: "magnesium",
    name: "Magnesium (Glycinate / Malate)",
    category: "Sleep & Recovery",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-008",
    summary: "Involved in 300+ enzymatic reactions. Commonly deficient in athletes. Glycinate form has best absorption and sleep-quality evidence.",
    dose: "200–400mg elemental / day",
    mechanism: "NMDA receptor modulation, ATP synthesis",
    bestFor: ["Sleep", "Muscle recovery", "Deficiency correction"],
  },
  {
    slug: "hmb",
    name: "HMB (β-Hydroxy β-Methylbutyrate)",
    category: "Anti-Catabolism",
    evidence: "limited" as EvidenceLevel,
    figure: "ING-009",
    summary: "A leucine metabolite with anti-catabolic properties. Effect is significant only in untrained individuals or during caloric deficits.",
    dose: "3g / day",
    mechanism: "Protein degradation inhibition",
    bestFor: ["Beginners", "Cutting phases", "Injury recovery"],
  },
  {
    slug: "bcaa",
    name: "BCAAs (Leucine / Isoleucine / Valine)",
    category: "Amino Acids",
    evidence: "limited" as EvidenceLevel,
    figure: "ING-010",
    summary: "Redundant if protein intake is sufficient. Leucine specifically drives MPS — but you get more of it from whey protein at lower cost.",
    dose: "5–10g / serving",
    mechanism: "Leucine-driven MPS (partial)",
    bestFor: ["Fasted training", "Vegan diets", "Intra-workout"],
  },
  {
    slug: "vitamin-d",
    name: "Vitamin D3 + K2",
    category: "Hormonal & Bone Health",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-011",
    summary: "Vitamin D deficiency is endemic in India and linked to reduced testosterone, immune dysfunction, and bone weakness. D3 + K2 is the standard stack.",
    dose: "2000–4000 IU D3 + 100µg K2 / day",
    mechanism: "Nuclear receptor activation",
    bestFor: ["Deficiency correction", "Immunity", "Bone density"],
  },
  {
    slug: "omega-3",
    name: "Omega-3 (EPA + DHA)",
    category: "Anti-Inflammation",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-012",
    summary: "The most evidence-backed supplement for cardiovascular health and inflammation. Also supports muscle protein synthesis and joint health.",
    dose: "1–3g combined EPA+DHA / day",
    mechanism: "Eicosanoid pathway modulation",
    bestFor: ["Joint health", "Heart health", "Recovery", "Inflammation"],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide (GLP-1/GIP)",
    category: "Weight Management",
    evidence: "strong" as EvidenceLevel,
    figure: "ING-013",
    summary: "Dual GIP/GLP-1 receptor agonist with the strongest weight-loss evidence of any approved medication. Mean 20.9% body weight reduction at 15mg/week in SURMOUNT-1. Prescription only — US only.",
    dose: "2.5–15mg / week (Rx)",
    mechanism: "Dual GIP + GLP-1 receptor agonism",
    bestFor: ["Weight loss", "Type 2 diabetes", "Cardiometabolic risk"],
  },
  {
    slug: "beef-liver",
    name: "Desiccated Beef Liver",
    category: "Organ Supplements",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-2026-014",
    summary: "The most nutrient-dense organ, providing preformed vitamin A (retinol), heme iron, B12, copper, CoQ10, and all essential amino acids. Whole-food micronutrient density exceeds nearly every plant food.",
    dose: "3–6g desiccated / day (≈ 20–40g fresh)",
    mechanism: "Preformed nutrient delivery; heme iron absorption",
    bestFor: ["Iron deficiency", "Energy", "Liver function", "Nutrient density"],
  },
  {
    slug: "beef-heart",
    name: "Desiccated Beef Heart",
    category: "Organ Supplements",
    evidence: "moderate" as EvidenceLevel,
    figure: "ING-2026-015",
    summary: "The richest dietary source of CoQ10 (ubiquinol precursor), with approximately 3–4× the CoQ10 content of skeletal muscle. Also provides cardiac-specific peptides, B vitamins, and selenium.",
    dose: "3–6g desiccated / day",
    mechanism: "CoQ10 delivery; mitochondrial electron transport support",
    bestFor: ["Cardiovascular health", "Energy", "Athletic performance"],
  },
  {
    slug: "beef-kidney",
    name: "Desiccated Beef Kidney",
    category: "Organ Supplements",
    evidence: "limited" as EvidenceLevel,
    figure: "ING-2026-016",
    summary: "An exceptionally high source of selenium (up to 50× higher than muscle meat) and riboflavin (B2). Contains diamine oxidase (DAO) enzyme that may support histamine intolerance management.",
    dose: "2–4g desiccated / day",
    mechanism: "Selenium-glutathione peroxidase pathway; DAO enzyme activity",
    bestFor: ["Thyroid health", "Detoxification", "Histamine intolerance"],
  },
  {
    slug: "beef-spleen",
    name: "Desiccated Beef Spleen",
    category: "Organ Supplements",
    evidence: "limited" as EvidenceLevel,
    figure: "ING-2026-017",
    summary: "The highest natural source of heme iron per gram, surpassing liver. Contains tuftsin and splenopentin peptides with putative immune-modulating properties, though human clinical data is sparse.",
    dose: "2–4g desiccated / day",
    mechanism: "Heme iron absorption; immunomodulatory peptides",
    bestFor: ["Iron deficiency anaemia", "Immune support", "Athletes"],
  },
  {
    slug: "beef-pancreas",
    name: "Desiccated Beef Pancreas",
    category: "Organ Supplements",
    evidence: "limited" as EvidenceLevel,
    figure: "ING-2026-018",
    summary: "Contains exocrine enzymes (protease, lipase, amylase) and pancreatic peptides. Historically used in enzyme replacement therapy; supplemental evidence relies primarily on mechanistic and historical data.",
    dose: "2–4g desiccated / day",
    mechanism: "Exogenous digestive enzyme delivery; pancreatic peptide support",
    bestFor: ["Digestive support", "Enzyme deficiency", "Carnivore diet"],
  },
];

const categories = [...new Set(ingredients.map((i) => i.category))];

const evidenceSummary = [
  { level: "strong" as EvidenceLevel, count: ingredients.filter((i) => i.evidence === "strong").length, desc: "Multiple meta-analyses, consistent results" },
  { level: "moderate" as EvidenceLevel, count: ingredients.filter((i) => i.evidence === "moderate").length, desc: "Several consistent RCTs, good effect sizes" },
  { level: "limited" as EvidenceLevel, count: ingredients.filter((i) => i.evidence === "limited").length, desc: "Few studies or inconsistent results" },
];

export default function IngredientsHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, padding: "12px 24px" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Ingredients</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>INGREDIENT INDEX · {ingredients.length} PROFILES</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Research-Verified</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Ingredient{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Research Index</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 600, marginBottom: 28 }}>
            Every profile covers mechanism of action, clinically effective dosages, supplement form comparisons, and a full evidence classification. No marketing — only research.
          </p>

          {/* Evidence legend */}
          <div className="ing-evidence-legend">
            {evidenceSummary.map((e) => (
              <div key={e.level} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <EvidenceBadge level={e.level} showIcon={false} />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{e.count} ingredients</p>
                  <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Category filter chips — horizontal scroll on mobile */}
        <div style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span style={{ padding: "5px 14px", border: "1px solid #1A1714", borderRadius: 20, fontSize: 11, color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", backgroundColor: "#1A1714", cursor: "pointer", whiteSpace: "nowrap" }}>
            All
          </span>
          {categories.map((cat) => (
            <span key={cat} style={{ padding: "5px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", backgroundColor: "#F8F2E4", cursor: "pointer", whiteSpace: "nowrap" }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Ingredient list */}
        <section>
          <SectionHeading label="All Ingredients" figure="§ 01" title="Research" titleItalic="profiles" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {ingredients.map((ing, i) => (
              <Link
                key={ing.slug}
                href={`/ingredients/${ing.slug}`}
                className="ing-row hub-row-link"
                style={{ borderBottom: i < ingredients.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
              >
                {/* Left: figure + content */}
                <div className="ing-row-inner">
                  <div className="ing-figure-col">
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0, marginBottom: 4 }}>{ing.figure}</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", letterSpacing: "0.1em", margin: 0 }}>{ing.dose}</p>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{ing.name}</h2>
                      <span style={{ padding: "2px 8px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", backgroundColor: "#EDE8DF", flexShrink: 0 }}>{ing.category}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.55, margin: 0 }}>{ing.summary}</p>
                    <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                      {ing.bestFor.map((tag) => (
                        <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: badge + CTA */}
                <div className="ing-badge-col">
                  <EvidenceBadge level={ing.evidence} showIcon={false} />
                  <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>Read Profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ marginTop: 48, padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "3px solid #D4A96A" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>Medical Disclaimer</p>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
            Ingredient profiles are for informational purposes only and do not constitute medical advice. Consult a qualified healthcare professional before starting any supplementation, especially if you have pre-existing conditions or take medications.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600 }}>Full disclaimer →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
