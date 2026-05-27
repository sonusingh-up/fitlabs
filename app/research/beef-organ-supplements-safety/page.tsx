import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import EvidenceBadge from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = {
  title: "Beef Organ Supplements Safety: Vitamin A, Heavy Metals",
  description:
    "Complete safety guide for beef organ supplements: vitamin A toxicity risk, heavy metal testing, hemochromatosis contraindications, pregnancy limits. Evidence-based.",
  alternates: { canonical: "/research/beef-organ-supplements-safety" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beef Organ Supplement Safety: Vitamin A Toxicity, Heavy Metals & Who Should Avoid Them",
  description: "Evidence-based safety review of beef organ supplements covering retinol toxicity risk, heavy metal bioaccumulation, iron overload contraindications, pregnancy limits, and best practices for safe supplementation.",
  articleSection: "Research",
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Research Team",
    url: "https://fitlabreviews.com/authors/fitlab-research-team",
  },
  publisher: {
    "@type": "Organization",
    name: "Fitlabreviews",
    url: "https://fitlabreviews.com",
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/beef-organ-supplements-safety",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you get too much vitamin A from beef organ supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — at high doses or in high-risk individuals. Beef liver contains 16,899µg retinol per 100g fresh weight. The tolerable upper intake level (UL) for adults is 3,000µg RAE/day (IOM, 2001). A typical 6-capsule serving of freeze-dried liver supplement contains approximately 0.5–0.8g of dried liver, which equates to roughly 500–1,000µg retinol (3–5x concentrated). At standard doses, most adults are below the UL. The risk groups are: (1) pregnant women — retinol is teratogenic in excess; (2) people also eating liver regularly; (3) people taking high-dose vitamin A supplements concurrently; (4) individuals on isotretinoin (Accutane).",
      },
    },
    {
      "@type": "Question",
      name: "Do beef organ supplements contain heavy metals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All organ meats — particularly kidney — can bioaccumulate environmental heavy metals (cadmium, lead, arsenic, mercury) at higher concentrations than muscle meat. The extent depends on: (1) the animal's feeding environment and exposure; (2) whether grazing land has industrial contamination; (3) the specific organ (kidney > liver > heart > spleen). Premium brands (Ancestral Supplements, Heart & Soil, Enviromedica) publish certificates of analysis showing heavy metal levels below safe thresholds. Always look for a published COA before purchasing organ supplements — particularly if using them long-term.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to take beef organ supplements every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For healthy adults without iron overload conditions, daily organ supplement use at label doses is safe for most people. The key variables: (1) retinol accumulation — preformed vitamin A (retinol) is fat-soluble and accumulates. At standard single-product doses, most adults remain below the 3,000µg/day UL. Using multiple liver products or eating liver meals on the same days increases risk. (2) Heavy metal burden — at certified COA-confirmed doses, heavy metals in premium products are well within safe ranges. Without COA data, daily long-term use of any organ supplement carries an unquantified risk.",
      },
    },
    {
      "@type": "Question",
      name: "Who should avoid beef organ supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The following groups should either avoid or consult a physician before using: (1) Pregnant women — retinol in liver can cause birth defects at elevated doses; (2) People with hemochromatosis or elevated ferritin — heme iron cannot be down-regulated; (3) Individuals on isotretinoin (Accutane), retinoids, or high-dose vitamin A supplements — cumulative retinol risk; (4) People with gout or hyperuricemia — organ meats are high in purines; (5) Those with severe dairy allergies considering lactoferrin-containing products; (6) People with kidney disease — high purine, protein, and phosphorus loads.",
      },
    },
    {
      "@type": "Question",
      name: "Are beef organ supplements safe during pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liver-containing supplements are not recommended during pregnancy without physician guidance. Preformed retinol from liver is teratogenic in excess during the first trimester. The WHO and IOM recommend pregnant women avoid large amounts of liver specifically because of this risk. Standard prenatal vitamins provide beta-carotene (pro-vitamin A, not directly teratogenic) rather than preformed retinol. If you are pregnant and considering organ supplements for iron or B12, discuss specific products, doses, and timing with your OB/GYN.",
      },
    },
  ],
};

const safetyRisks = [
  {
    title: "Vitamin A (Retinol) Toxicity",
    level: "strong" as const,
    severity: "Moderate–High (context-dependent)",
    who: "Pregnant women, concurrent retinoid users, heavy liver eaters",
    data: "Beef liver: 16,899µg retinol/100g fresh. Adult UL: 3,000µg RAE/day. Teratogenic at excess in first trimester. Chronic excess causes hepatotoxicity, bone loss, headaches.",
    mitigation: "Track total retinol from all sources. Most single-dose organ supplements deliver 300–900µg/serving — safe for healthy adults but cumulative.",
    refs: "Institute of Medicine, 2001. Dietary Reference Intakes for Vitamin A.",
  },
  {
    title: "Heavy Metal Bioaccumulation",
    level: "moderate" as const,
    severity: "Low–Moderate (sourcing-dependent)",
    who: "Long-term users of products without published COA",
    data: "Kidney cadmium: 0.3–0.5mg/kg in clean NZ/AU sources; can be 2–4mg/kg in contaminated environments. EU EFSA safety benchmark: 2.5µg cadmium/kg body weight/week.",
    mitigation: "Only purchase products with published heavy metal COA. NZ and AU sourcing generally has lower environmental cadmium than some other grass-fed regions.",
    refs: "EFSA CONTAM Panel, 2012. Cadmium dietary exposure. EFSA Journal.",
  },
  {
    title: "Iron Overload",
    level: "strong" as const,
    severity: "High (in contraindicated groups only)",
    who: "Hemochromatosis, elevated ferritin (>200ng/mL), transfusion-dependent conditions",
    data: "Heme iron absorption is 15–35% regardless of iron status — the body cannot down-regulate heme absorption the way it can for non-heme iron. Beef spleen: 42mg iron/100g. In HFE hemochromatosis patients, continued high-heme dietary iron causes organ damage.",
    mitigation: "Anyone with hemochromatosis or elevated ferritin should not use organ supplements containing liver or spleen without physician guidance. Annual ferritin testing is recommended for long-term organ supplement users.",
    refs: "Andrews NC. Disorders of iron metabolism. NEJM, 1999; Camaschella C. Iron deficiency. NEJM, 2015.",
  },
  {
    title: "Purine Load & Gout",
    level: "moderate" as const,
    severity: "Low–Moderate (in susceptible individuals)",
    who: "Gout sufferers, hyperuricemia, history of kidney stones",
    data: "Organ meats are high-purine foods. Purines metabolise to uric acid. In gout-susceptible individuals, high purine dietary load can trigger acute episodes. Kidney is the highest-purine organ meat.",
    mitigation: "People with gout or hyperuricemia should limit or avoid organ supplement use, particularly kidney-containing products. Discuss with a rheumatologist.",
    refs: "Choi HK et al. Purine-rich foods and risk of gout. NEJM, 2004.",
  },
];

export default function BeefOrganSafetyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Organ Supplement Safety</span>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ART-011</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Safety Research</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 16 }}>
            Beef Organ Supplement Safety
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.65em", marginTop: 10 }}>Vitamin A Toxicity, Heavy Metals & Who Should Avoid Them</em>
          </h1>

          {/* Author bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700 }}>FR</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>Fitlab Research Team</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>Published May 2026</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>12 min read</span>
            </div>
          </div>

          {/* Medical disclaimer */}
          <div style={{ padding: "12px 16px", backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, borderLeft: "3px solid #9B2020", marginBottom: 20 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B2020", marginBottom: 6 }}>Medical Disclaimer</p>
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.65 }}>This article is educational and does not constitute medical advice. Consult a physician before starting any supplement, particularly if you are pregnant, have a chronic health condition, or take prescription medication.</p>
          </div>
        </div>

        {/* Stats panel */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 48, padding: 20, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[
            { label: "Retinol UL (Adults)", value: "3,000µg/day", sub: "RAE — IOM 2001" },
            { label: "Liver retinol", value: "16,899µg", sub: "Per 100g fresh weight" },
            { label: "Kidney cadmium", value: "0.3–0.5mg/kg", sub: "Clean NZ/AU source" },
            { label: "Heme iron absorption", value: "15–35%", sub: "Cannot be downregulated" },
            { label: "Purine risk organs", value: "Kidney > Liver", sub: "Gout-susceptible individuals" },
            { label: "Safe for most adults", value: "1 serving/day", sub: "With COA-verified product" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "12px 14px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick answer */}
        <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Answer</p>
          <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.75 }}>
            For healthy adults without iron overload conditions, daily beef organ supplements from COA-verified brands are safe at label doses. The two primary risks are: (1) vitamin A (retinol) accumulation from liver-containing products — a concern mainly for pregnant women and those consuming multiple liver sources; (2) heavy metal burden from products without independent testing. The solution to both: choose brands that publish batch-level COA data, track total retinol from all sources, and get a ferritin test annually if using iron-dense products long-term.
          </p>
        </div>

        {/* Safety risks */}
        <SectionHeading label="Safety" figure="§ 01" title="The four main" titleItalic="risk vectors" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
          {safetyRisks.map((risk, i) => (
            <div key={risk.title} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650" }}>0{i + 1}</span>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9" }}>{risk.title}</p>
                </div>
                <EvidenceBadge level={risk.level} />
              </div>
              <div style={{ padding: "16px 18px", backgroundColor: "#F8F2E4" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 14 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 4 }}>Severity</p>
                    <p style={{ fontSize: 13, color: "#9B2020", fontWeight: 600 }}>{risk.severity}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 4 }}>Affected Groups</p>
                    <p style={{ fontSize: 13, color: "#5C5650" }}>{risk.who}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.65, marginBottom: 10 }}><strong>Data:</strong> {risk.data}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 10 }}><strong>Mitigation:</strong> {risk.mitigation}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>{risk.refs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vitamin A deep dive */}
        <SectionHeading label="Vitamin A" figure="§ 02" title="Retinol toxicity:" titleItalic="what the evidence shows" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            Retinol (preformed vitamin A) is fat-soluble and accumulates in the liver. Unlike beta-carotene (the plant-based precursor), retinol has no safe upper threshold for excess absorption — the body continues absorbing it regardless of stored amounts.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { phase: "Acute toxicity", threshold: ">150,000µg single dose", effects: "Headache, nausea, vomiting, blurred vision. Rare from food supplements." },
              { phase: "Chronic toxicity (adults)", threshold: ">3,000µg/day sustained (UL)", effects: "Hepatotoxicity, bone loss (osteoporosis risk), hair loss, teratogenicity." },
              { phase: "Teratogenicity (pregnancy)", threshold: ">3,000µg/day in first trimester", effects: "Neural crest cell migration defects, ear/heart/CNS malformations. Hard limit." },
              { phase: "Safe range", threshold: "700–3,000µg/day (adults)", effects: "No adverse effects in healthy adults. The typical daily diet provides 600–1,000µg/day." },
            ].map((row) => (
              <div key={row.phase} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 12, padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{row.phase}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D" }}>{row.threshold}</p>
                <p style={{ fontSize: 13, color: "#5C5650" }}>{row.effects}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", marginBottom: 8 }}>Practical Calculation: Single-organ liver supplement</p>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
              A 6-capsule serving of freeze-dried beef liver supplement contains approximately 3–6g of dried liver. Fresh-to-dry ratio for beef liver is approximately 4:1 (25% dry weight). So 3–6g dried liver ≈ 12–24g fresh liver equivalent. At 16,899µg retinol/100g, this equates to roughly <strong style={{ color: "#1A1714" }}>2,028–4,056µg retinol per serving</strong> — straddling the UL for some users. At 3g dried liver: ~2,000µg. Most supplements target this lower range.
            </p>
          </div>
        </div>

        {/* Heavy metals section */}
        <SectionHeading label="Heavy Metals" figure="§ 03" title="Cadmium, lead, arsenic" titleItalic="in organ supplements" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            The liver is the body's primary detoxification organ — meaning it processes and can concentrate environmental toxins. The kidney is the filtering organ — which means it handles and can bioaccumulate heavy metals that the liver processes.
          </p>
          <div className="review-table-wrap">
            <table style={{ borderCollapse: "collapse", minWidth: 500 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["Metal", "Highest Organ", "Safe Limit (EFSA/EPA)", "COA-verified risk?"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cadmium", "Kidney", "2.5µg/kg BW/week (EFSA)", "Low (clean source, standard dose)"],
                  ["Lead", "Liver, Kidney", "No safe level (EFSA)", "Very Low (COA-verified products)"],
                  ["Arsenic", "Liver", "No safe inorganic level", "Low (grass-fed, clean soil)"],
                  ["Mercury", "Liver, Kidney", "1.3µg/kg BW/week (EFSA)", "Very Low (land-based animals)"],
                ].map(([metal, organ, limit, risk], i) => (
                  <tr key={metal} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{metal}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{organ}</td>
                    <td style={{ padding: "10px 14px", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480" }}>{limit}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
            Mercury is primarily a concern for marine animals. Grass-fed beef organ supplements present very low mercury risk. Cadmium is the primary concern for kidney supplements — mitigated by clean pasture sourcing and published COA.
          </p>
        </div>

        {/* Who should avoid */}
        <SectionHeading label="Contraindications" figure="§ 04" title="Who should" titleItalic="avoid organ supplements" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 48 }}>
          {[
            {
              group: "Pregnant women (first trimester)",
              risk: "Critical",
              detail: "Liver retinol is teratogenic in excess. Do not use any liver-containing supplement without explicit OB/GYN guidance. Multi-organ blends with undisclosed liver dosing are not safe in pregnancy.",
            },
            {
              group: "Hemochromatosis & elevated ferritin",
              risk: "High",
              detail: "Heme iron absorption cannot be regulated downward. Spleen (42mg iron/100g) and liver (6mg/100g) are the two highest heme iron sources. Absolutely contraindicated without physician monitoring.",
            },
            {
              group: "Isotretinoin (Accutane) users",
              risk: "High",
              detail: "Isotretinoin is a vitamin A derivative. Combined retinol from liver supplements can push total vitamin A intake to toxic levels. Avoid all liver supplements while on isotretinoin.",
            },
            {
              group: "Gout or hyperuricemia",
              risk: "Moderate",
              detail: "Organ meats are high-purine foods. Kidney > liver > heart in purine content. Discuss with a rheumatologist before use.",
            },
            {
              group: "Chronic kidney disease (CKD)",
              risk: "Moderate",
              detail: "High protein, phosphorus, and purine load from organ meats may be inappropriate in CKD. Consult nephrologist.",
            },
            {
              group: "Planning pregnancy (pre-conception)",
              risk: "Low–Moderate",
              detail: "Single serving of a well-dosed liver supplement is likely safe for most. Use products with disclosed doses, stay under 3,000µg retinol RAE/day total from all sources, and involve OB/GYN as you approach conception.",
            },
          ].map((item) => (
            <div key={item.group} style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, display: "grid", gridTemplateColumns: "2fr 1fr 3fr", gap: 12, alignItems: "start" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.group}</p>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: item.risk === "Critical" || item.risk === "High" ? "#9B2020" : "#C4622D" }}>{item.risk}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Safe use checklist */}
        <SectionHeading label="Safe Use" figure="§ 05" title="Best practices for" titleItalic="safe supplementation" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Choose brands with published, current-batch heavy metal COA (Ancestral Supplements, Heart & Soil, Enviromedica publish COA data)",
              "Track total retinol from all sources: liver supplements + vitamin A supplements + dietary liver + fortified foods",
              "Stay under 3,000µg retinol RAE/day from all sources combined (10,000 IU is approximately 3,000µg RAE)",
              "Get a baseline ferritin blood test before starting iron-dense organ supplements; recheck annually",
              "If pregnant or planning pregnancy: stop liver supplements or get physician approval with specific dose guidance",
              "Start with 1–2 capsules and increase over 1–2 weeks to assess tolerance — organ supplements can cause nausea in some people",
              "Take with meals, ideally containing fat — improves fat-soluble vitamin absorption and reduces nausea",
              "If you eat whole liver regularly (1–2x/week), reduce or eliminate supplement dose to avoid retinol stacking",
            ].map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", border: "1px solid #D4C9B8", borderRadius: 6 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", flexShrink: 0, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div style={{ padding: 24, backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Safe for most adults. Specific risks exist for specific groups.</p>
          <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75 }}>
            Beef organ supplements are not inherently dangerous, but they are not consequence-free either. The risks — vitamin A accumulation, heavy metals, iron overload — are real and dose-dependent. For the majority of healthy adults without the specific contraindications listed above, daily use of a single COA-verified organ supplement at label doses is safe. The key error is naive stacking: multiple liver products, concurrent vitamin A supplements, and daily whole liver meals can together push retinol above safe thresholds without the user realising it.
          </p>
        </div>

        {/* FAQ */}
        <SectionHeading label="FAQ" figure="§ 06" title="Common safety" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* References */}
        <SectionHeading label="References" figure="§ 07" title="Research" titleItalic="citations" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
          {[
            { num: 1, text: "Institute of Medicine. Dietary Reference Intakes for Vitamin A, Vitamin K, Arsenic, Boron, Chromium, Copper, Iodine, Iron, Manganese, Molybdenum, Nickel, Silicon, Vanadium, and Zinc. National Academies Press, 2001.", url: "https://www.ncbi.nlm.nih.gov/books/NBK222318/" },
            { num: 2, text: "EFSA CONTAM Panel. Cadmium dietary exposure in the European population. EFSA Journal, 2012;10(1):2551.", url: "https://www.efsa.europa.eu/en/efsajournal/pub/2551" },
            { num: 3, text: "Andrews NC. Disorders of iron metabolism. N Engl J Med, 1999;341(26):1986–1995.", url: "https://pubmed.ncbi.nlm.nih.gov/10607817/" },
            { num: 4, text: "Camaschella C. Iron-deficiency anemia. N Engl J Med, 2015;372(19):1832–1843.", url: "https://pubmed.ncbi.nlm.nih.gov/25946282/" },
            { num: 5, text: "Choi HK et al. Purine-rich foods, dairy and protein intake, and the risk of gout in men. N Engl J Med, 2004;350:1093–1103.", url: "https://pubmed.ncbi.nlm.nih.gov/14999112/" },
            { num: 6, text: "USDA FoodData Central. Beef liver, raw. National Agricultural Library.", url: "https://fdc.nal.usda.gov/" },
            { num: 7, text: "Hallberg L et al. Heme iron absorption in man. Am J Clin Nutr, 1979;32(10):2111–2119.", url: "https://pubmed.ncbi.nlm.nih.gov/495550/" },
          ].map((ref) => (
            <div key={ref.num} style={{ display: "flex", gap: 12, padding: "8px 12px", backgroundColor: "#F8F2E4", borderRadius: 6 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", flexShrink: 0, minWidth: 20 }}>[{ref.num}]</span>
              <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>
                {ref.text}{" "}
                <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace" }}>↗ PubMed</a>
              </p>
            </div>
          ))}
        </div>

        {/* Related */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { name: "7 Best Beef Organ Supplements 2026", href: "/best/beef-organ-supplements" },
            { name: "Beef Liver Ingredient Profile", href: "/ingredients/beef-liver" },
            { name: "Best Organs for Women", href: "/best/beef-organ-supplements-for-women" },
            { name: "Freeze-Dried vs Desiccated: What's the Difference?", href: "/research/freeze-dried-vs-desiccated-organ-supplements" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 14, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
