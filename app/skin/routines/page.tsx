import type { Metadata } from "next";
import Link from "next/link";
import { getAllSkinRoutines } from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: "Skin Routines — Step-by-Step Protocols by Skin Type",
  description:
    "Step-by-step skincare routines for every skin type. Each protocol is built on ingredient evidence and sequenced for maximum efficacy.",
  alternates: { canonical: "/skin/routines" },
};

const skinTypeColor: Record<string, string> = {
  oily: "#4A6C8C",
  dry: "#C4622D",
  combination: "#92620A",
  sensitive: "#4A7C59",
  normal: "#5C5650",
  "acne-prone": "#8B1A1A",
  mature: "#7B5EA7",
};

export default async function SkinRoutinesPage() {
  const routines = await getAllSkinRoutines();

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Routines</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Routine Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Routines
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            Step-by-step protocols sequenced for efficacy, built around ingredient evidence rather than product marketing.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        {routines.length === 0 ? (
          <div style={{ padding: "64px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#A89880" }}>No routines published yet.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {routines.map((routine: any) => (
              <Link
                key={routine.slug}
                href={`/skin/routines/${routine.slug}`}
                className="hub-card"
                style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
              >
                <div style={{ height: 3, backgroundColor: "#C4622D" }} />
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, gap: 12 }}>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714", lineHeight: 1.3 }}>{routine.title}</h2>
                    {routine.duration && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", whiteSpace: "nowrap", flexShrink: 0 }}>{routine.duration}</span>
                    )}
                  </div>
                  {routine.description && (
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 14 }}>
                      {routine.description.slice(0, 110)}{routine.description.length > 110 ? "…" : ""}
                    </p>
                  )}
                  {routine.skinTypes?.length > 0 && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {routine.skinTypes.map((type: string) => (
                        <span key={type} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", color: skinTypeColor[type] ?? "#8A8480", backgroundColor: `${skinTypeColor[type] ?? "#8A8480"}14`, border: `1px solid ${skinTypeColor[type] ?? "#8A8480"}33` }}>
                          {type}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
