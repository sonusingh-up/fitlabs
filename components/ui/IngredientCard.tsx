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
  strong:       { bg: "linear-gradient(145deg, #0D1E16 0%, #091410 100%)", accent: "#2D6A4F", text: "#6FCF97" },
  moderate:     { bg: "linear-gradient(145deg, #1E1608 0%, #140F06 100%)", accent: "#8B7355", text: "#D4A96A" },
  emerging:     { bg: "linear-gradient(145deg, #0A1220 0%, #070D18 100%)", accent: "#3A5F8B", text: "#7EB8D4" },
  limited:      { bg: "linear-gradient(145deg, #200D08 0%, #180907 100%)", accent: "#8B3A2C", text: "#D4806A" },
  insufficient: { bg: "linear-gradient(145deg, #1A1714 0%, #141210 100%)", accent: "#5C5650", text: "#A89880" },
};

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function IngredientCard({ slug, name, category, summary, evidenceLevel, topBenefit, figNumber }: IngredientCardProps) {
  const style = evidenceStyle[evidenceLevel] ?? evidenceStyle.limited;

  return (
    <Link
      href={`/ingredients/${slug}`}
      style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", textDecoration: "none", transition: "all 0.25s", backgroundColor: "#F8F2E4" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 16px 48px -12px rgba(26,23,20,0.18)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Evidence-colored header */}
      <div style={{ height: 110, background: style.bg, position: "relative", overflow: "hidden", padding: "16px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={gridOverlay} />
        {/* Ghost initial */}
        <span style={{ position: "absolute", right: 16, bottom: -10, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "5rem", fontWeight: 800, color: "rgba(242,235,217,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {name[0]}
        </span>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {figNumber && <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>{figNumber}</span>}
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: style.text, marginLeft: figNumber ? 0 : "auto" }}>{category}</span>
        </div>
        <div style={{ position: "relative" }}>
          <EvidenceBadge level={evidenceLevel} />
        </div>
      </div>

      {/* Accent line */}
      <div style={{ height: 2, backgroundColor: style.accent, opacity: 0.6 }} />

      {/* Body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.015em", marginBottom: 10 }}>
          {name}
        </h3>
        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 14 }}>{summary}</p>
        <div style={{ padding: "10px 12px", backgroundColor: "#EDE8DF", borderRadius: 6, borderLeft: `3px solid ${style.accent}`, marginBottom: 16 }}>
          <p style={{ fontSize: 10, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>Primary Benefit</p>
          <p style={{ fontSize: 13, color: "#2D2926", fontWeight: 500 }}>{topBenefit}</p>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Research Profile <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
