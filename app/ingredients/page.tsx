import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import HubMasthead from "@/components/ui/HubMasthead";
import { ingredientsDb } from "@/lib/ingredients-db";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Supplement Ingredient Research Index",
  description:
    "Evidence-based profiles for 175+ supplement ingredients: dosage guidelines, mechanism of action, safety data, and form comparisons across sports nutrition and health.",
  alternates: { canonical: "/ingredients" },
};

// ── Derived data ──────────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  "Strength & Power",
  "Protein & Amino Acids",
  "Endurance",
  "Blood Flow & Pump",
  "Stimulants & Focus",
  "Adaptogens",
  "Medicinal Mushrooms",
  "Sleep & Recovery",
  "Joint & Connective Tissue",
  "Vitamins",
  "Minerals",
  "Anti-Inflammation & Antioxidants",
  "Weight Management",
  "Testosterone & Hormonal",
  "Gut Health & Digestive",
  "Cardiovascular",
  "Cognitive / Nootropics",
  "Superfoods & Botanicals",
];

const grouped = CATEGORY_ORDER.reduce<Record<string, typeof ingredientsDb>>(
  (acc, cat) => {
    const matches = ingredientsDb.filter((i) => i.category === cat);
    if (matches.length > 0) acc[cat] = matches;
    return acc;
  },
  {}
);

// Catch any categories not in CATEGORY_ORDER
ingredientsDb.forEach((ing) => {
  if (!grouped[ing.category]) grouped[ing.category] = [];
  if (!grouped[ing.category].includes(ing)) grouped[ing.category].push(ing);
});

const allCategories = Object.keys(grouped);

const evidenceSummary: { level: EvidenceLevel; count: number; desc: string }[] = [
  { level: "strong", count: ingredientsDb.filter((i) => i.evidence === "strong").length, desc: "Multiple meta-analyses, consistent results" },
  { level: "moderate", count: ingredientsDb.filter((i) => i.evidence === "moderate").length, desc: "Several consistent RCTs, good effect sizes" },
  { level: "limited", count: ingredientsDb.filter((i) => i.evidence === "limited").length, desc: "Few studies or inconsistent results" },
  { level: "emerging", count: ingredientsDb.filter((i) => i.evidence === "emerging").length, desc: "Early-stage research, promising signals" },
  { level: "insufficient", count: ingredientsDb.filter((i) => i.evidence === "insufficient").length, desc: "No meaningful human trial data" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function IngredientsHubPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #e4e8e5", backgroundColor: "#f6f8f6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, padding: "12px 24px", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#e4e8e5" }}>/</span>
          <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>Ingredients</span>
        </div>
      </div>

      {/* Hero */}
      <HubMasthead
        eyebrow={`Ingredient Index · ${ingredientsDb.length} Profiles`}
        kicker="Research-Verified"
        title="Ingredient"
        titleAccent="Research Index"
        subtitle={`${ingredientsDb.length} ingredient profiles across ${allCategories.length} categories. Every entry covers mechanism of action, clinically effective dosages, and a full evidence classification. No marketing — only research.`}
      />

      {/* Evidence legend — light strip below the masthead */}
      <div style={{ borderBottom: "1px solid #e4e8e5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 28, paddingBottom: 28 }} className="px-page">
          <div className="ing-evidence-legend">
            {evidenceSummary.filter((e) => e.count > 0).map((e) => (
              <div key={e.level} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", border: "1px solid #e4e8e5", borderRadius: 8, backgroundColor: "#FFFFFF" }}>
                <EvidenceBadge level={e.level} showIcon={false} />
                <div>
                  <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, color: "#6b7770", textTransform: "uppercase", margin: 0 }}>{e.count} ingredients</p>
                  <p style={{ fontSize: 11, color: "#586259", margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Category jump links */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {allCategories.map((cat, i) => (
            <a
              key={cat}
              href={`#cat-${i}`}
              style={{
                padding: "5px 14px",
                border: "1px solid #e4e8e5",
                borderRadius: 20,
                fontSize: 11,
                color: "#586259",
                fontFamily: "var(--font-hanken), sans-serif",
                fontWeight: 600,
                letterSpacing: "0.12em",
                backgroundColor: "#f6f8f6",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Category sections */}
        {allCategories.map((cat, catIdx) => {
          const catIngredients = grouped[cat];
          return (
            <section key={cat} id={`cat-${catIdx}`} style={{ marginBottom: 64 }}>
              <SectionHeading
                label={cat}
                figure={`§ ${String(catIdx + 1).padStart(2, "0")}`}
                title={cat.split(" ")[0]}
                titleItalic={cat.split(" ").slice(1).join(" ")}
                size="sm"
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e4e8e5", borderRadius: 12, overflow: "hidden" }}>
                {catIngredients.map((ing, i) => (
                  <Link
                    key={ing.slug}
                    href={`/ingredients/${ing.slug}`}
                    className="ing-row hub-row-link"
                    style={{
                      borderBottom: i < catIngredients.length - 1 ? "1px solid #eef1ef" : "none",
                      backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#f6f8f6",
                    }}
                  >
                    <div className="ing-row-inner">
                      <div className="ing-figure-col">
                        <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.15em", fontSize: 9, color: "#6b7770", textTransform: "uppercase", margin: 0, marginBottom: 4 }}>{ing.figure}</p>
                        <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 10, color: "#0f7a5a", margin: 0 }}>{ing.dose}</p>
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#17211c", margin: 0 }}>{ing.name}</h2>
                        </div>
                        <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.55, margin: 0 }}>{ing.summary}</p>
                        <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                          {ing.bestFor.map((tag) => (
                            <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(15,122,90,0.06)", border: "1px solid rgba(15,122,90,0.15)", borderRadius: 4, fontSize: 9, color: "#0f7a5a", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="ing-badge-col">
                      <EvidenceBadge level={ing.evidence} showIcon={false} />
                      <span style={{ fontSize: 12, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", whiteSpace: "nowrap" }}>Read Profile →</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div style={{ marginTop: 12, textAlign: "right" }}>
                <a href="#" style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 10, color: "#6b7770", textDecoration: "none" }}>↑ Back to top</a>
              </div>
            </section>
          );
        })}

        {/* Disclaimer */}
        <div style={{ marginTop: 48, padding: "20px 24px", backgroundColor: "#f6f8f6", border: "1px solid #e4e8e5", borderRadius: 12, borderLeft: "3px solid #0f7a5a" }}>
          <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.18em", fontSize: 9, textTransform: "uppercase", color: "#6b7770", marginBottom: 6 }}>Medical Disclaimer</p>
          <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.7, margin: 0 }}>
            Ingredient profiles are for informational purposes only and do not constitute medical advice. Consult a qualified healthcare professional before starting any supplementation, especially if you have pre-existing conditions or take medications.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#0f7a5a", fontWeight: 600 }}>Full disclaimer →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
