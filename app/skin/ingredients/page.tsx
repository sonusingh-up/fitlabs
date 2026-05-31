import type { Metadata } from "next";
import Link from "next/link";
import { getAllSkinIngredients } from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: "Skin Ingredients — Evidence-Rated Ingredient Profiles",
  description:
    "Evidence-rated profiles for common skincare ingredients: retinol, niacinamide, vitamin C, and more. Benefits, risks, and how to use each one.",
  alternates: { canonical: "/skin/ingredients" },
};

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

export default async function SkinIngredientsPage() {
  const ingredients = await getAllSkinIngredients();

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Ingredients</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Ingredient Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Ingredients
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            What the research actually says about the ingredients in your skincare. Evidence levels assigned from published dermatology and cosmetic science literature.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        {ingredients.length === 0 ? (
          <div style={{ padding: "64px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#A89880" }}>No ingredients published yet.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {ingredients.map((ing: any, i: number) => (
              <Link
                key={ing.slug}
                href={`/skin/ingredients/${ing.slug}`}
                className="hub-row-link"
                style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "18px 22px", borderBottom: i < ingredients.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", textDecoration: "none" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714" }}>{ing.title}</span>
                    {ing.category && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "1px 6px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>{ing.category}</span>
                    )}
                  </div>
                  {ing.benefits?.length > 0 && (
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5 }}>{ing.benefits[0]}</p>
                  )}
                </div>
                {ing.evidenceLevel && (
                  <span style={{ padding: "3px 9px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", whiteSpace: "nowrap", color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}14`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}33` }}>
                    {ing.evidenceLevel}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
