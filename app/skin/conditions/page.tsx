import type { Metadata } from "next";
import Link from "next/link";
import { getAllSkinConditions } from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: "Skin Conditions — Causes, Symptoms & Treatments",
  description:
    "Evidence-led profiles of common skin conditions: causes, symptoms, and treatment options explained with reference to published dermatology research.",
  alternates: { canonical: "/skin/conditions" },
};

export default async function SkinConditionsPage() {
  const conditions = await getAllSkinConditions();

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Conditions</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Condition Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Conditions
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            Evidence-based profiles covering causes, symptoms, and treatment options — sourced from published dermatology literature, not brand copy.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        {conditions.length === 0 ? (
          <div style={{ padding: "64px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#A89880" }}>No conditions published yet.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {conditions.map((condition: any) => (
              <Link
                key={condition.slug}
                href={`/skin/conditions/${condition.slug}`}
                className="hub-card"
                style={{ display: "block", padding: "22px 24px", borderRadius: 12, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
              >
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, marginBottom: 10 }}>{condition.title}</h2>
                {condition.description && (
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 14 }}>
                    {condition.description.slice(0, 120)}{condition.description.length > 120 ? "…" : ""}
                  </p>
                )}
                {condition.symptoms?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {condition.symptoms.slice(0, 3).map((symptom: string) => (
                      <span key={symptom} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>
                        {symptom}
                      </span>
                    ))}
                    {condition.symptoms.length > 3 && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>+{condition.symptoms.length - 3} more</span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
