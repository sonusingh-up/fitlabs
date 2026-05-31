"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SkinConditionCardProps {
  slug: string;
  title: string;
  description?: string;
  symptoms?: string[];
}

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function SkinConditionCard({
  slug,
  title,
  description,
  symptoms = [],
}: SkinConditionCardProps) {
  return (
    <Link
      href={`/skin/conditions/${slug}`}
      style={{
        display: "block",
        backgroundColor: "#F8F2E4",
        border: "1px solid #D4C9B8",
        borderRadius: 12,
        overflow: "hidden",
        textDecoration: "none",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 16px 48px -12px rgba(26,23,20,0.18)";
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "#C4C0B4";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "#D4C9B8";
      }}
    >
      {/* Dark header */}
      <div style={{ height: 100, background: "linear-gradient(145deg, #1E1A16 0%, #141210 100%)", position: "relative", overflow: "hidden", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={gridOverlay} />
        {/* Ghost letter */}
        <span style={{ position: "absolute", right: 14, bottom: -10, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "5rem", fontWeight: 800, color: "rgba(242,235,217,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {title[0]}
        </span>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>Skin Condition</span>
          {symptoms.length > 0 && (
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 8px", backgroundColor: "rgba(196,98,45,0.15)", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 4, color: "#C4622D", letterSpacing: "0.1em" }}>
              {symptoms.length} symptom{symptoms.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D" }}>Research Profile</span>
        </div>
      </div>

      {/* Accent line */}
      <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)" }} />

      {/* Body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 700, color: "#1A1714", lineHeight: 1.2, letterSpacing: "-0.015em", marginBottom: 10 }}>
          {title}
        </h3>
        {description && (
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 14 }}>
            {description.length > 100 ? description.slice(0, 100) + "…" : description}
          </p>
        )}
        {symptoms.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
            {symptoms.slice(0, 3).map((symptom) => (
              <span key={symptom} style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {symptom}
              </span>
            ))}
            {symptoms.length > 3 && (
              <span style={{ padding: "3px 8px", fontSize: 9, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>
                +{symptoms.length - 3}
              </span>
            )}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 14, borderTop: "1px solid #EDE8DF" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#1A1714", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            View Profile <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
