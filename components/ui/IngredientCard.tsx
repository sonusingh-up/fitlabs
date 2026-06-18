"use client";

import Link from "next/link";
import type { EvidenceLevel } from "@/lib/types";
import EvidenceBadge from "./EvidenceBadge";
import { ArrowRight } from "lucide-react";

interface IngredientCardProps {
  slug: string;
  name: string;
  category: string;
  summary: string;
  evidenceLevel: EvidenceLevel;
  topBenefit: string;
  figNumber?: string;
}

const evidenceStyle: Record<EvidenceLevel, { bg: string; accent: string; text: string }> = {
  strong:       { bg: "linear-gradient(145deg, #064E3B 0%, #022C22 100%)", accent: "#059669", text: "#6EE7B7" },
  moderate:     { bg: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", accent: "#0f7a5a", text: "#5EEAD4" },
  emerging:     { bg: "linear-gradient(145deg, #1E3A5F 0%, #0F172A 100%)", accent: "#3B82F6", text: "#93C5FD" },
  limited:      { bg: "linear-gradient(145deg, #78350F 0%, #451A03 100%)", accent: "#D97706", text: "#FCD34D" },
  insufficient: { bg: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", accent: "#586259", text: "#6b7770" },
};

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function IngredientCard({ slug, name, category, summary, evidenceLevel, topBenefit, figNumber }: IngredientCardProps) {
  const style = evidenceStyle[evidenceLevel] ?? evidenceStyle.limited;

  return (
    <Link
      href={`/ingredients/${slug}`}
      style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid #e4e8e5", textDecoration: "none", transition: "all 0.25s", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 12px 40px -10px rgba(0,0,0,0.12)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Evidence-colored header */}
      <div style={{ height: 110, background: style.bg, position: "relative", overflow: "hidden", padding: "16px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={gridOverlay} />
        {/* Ghost initial */}
        <span style={{ position: "absolute", right: 16, bottom: -10, fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "5rem", fontWeight: 800, color: "rgba(255,255,255,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {name[0]}
        </span>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {figNumber && <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{figNumber}</span>}
          <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: style.text, marginLeft: figNumber ? 0 : "auto" }}>{category}</span>
        </div>
        <div style={{ position: "relative" }}>
          <EvidenceBadge level={evidenceLevel} />
        </div>
      </div>

      {/* Accent line */}
      <div style={{ height: 2, backgroundColor: style.accent, opacity: 0.6 }} />

      {/* Body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211c", letterSpacing: "-0.015em", marginBottom: 10 }}>
          {name}
        </h3>
        <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.65, marginBottom: 14 }}>{summary}</p>
        <div style={{ padding: "10px 12px", backgroundColor: "#f6f8f6", borderRadius: 6, borderLeft: `3px solid ${style.accent}`, marginBottom: 16 }}>
          <p style={{ fontSize: 10, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>Primary Benefit</p>
          <p style={{ fontSize: 13, color: "#17211c", fontWeight: 500 }}>{topBenefit}</p>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>
          Research Profile <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
