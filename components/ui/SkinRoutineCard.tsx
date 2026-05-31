"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export interface SkinRoutineCardProps {
  slug: string;
  title: string;
  description?: string;
  skinTypes?: string[];
  duration?: string;
  steps?: unknown[];
}

const skinTypeColor: Record<string, { text: string; bg: string; border: string }> = {
  oily:        { text: "#4A6C8C", bg: "rgba(74,108,140,0.1)",  border: "rgba(74,108,140,0.3)"  },
  dry:         { text: "#C4622D", bg: "rgba(196,98,45,0.1)",   border: "rgba(196,98,45,0.3)"   },
  combination: { text: "#92620A", bg: "rgba(146,98,10,0.1)",   border: "rgba(146,98,10,0.3)"   },
  sensitive:   { text: "#4A7C59", bg: "rgba(74,124,89,0.1)",   border: "rgba(74,124,89,0.3)"   },
  normal:      { text: "#5C5650", bg: "rgba(92,86,80,0.1)",    border: "rgba(92,86,80,0.3)"    },
  "acne-prone":{ text: "#8B1A1A", bg: "rgba(139,26,26,0.1)",   border: "rgba(139,26,26,0.3)"   },
  mature:      { text: "#7B5EA7", bg: "rgba(123,94,167,0.1)",  border: "rgba(123,94,167,0.3)"  },
};

const fallbackSkinType = { text: "#8A8480", bg: "rgba(138,132,128,0.1)", border: "rgba(138,132,128,0.3)" };

export default function SkinRoutineCard({
  slug,
  title,
  description,
  skinTypes = [],
  duration,
  steps = [],
}: SkinRoutineCardProps) {
  return (
    <Link
      href={`/skin/routines/${slug}`}
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
      {/* Accent bar */}
      <div style={{ height: 4, backgroundColor: "#C4622D" }} />

      {/* Header strip */}
      <div style={{ padding: "14px 18px 12px", backgroundColor: "#F0E8D5", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>
          Skin Routine
        </span>
        {duration && (
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650" }}>
            <Clock size={10} />
            {duration}
          </span>
        )}
      </div>

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

        {/* Skin type badges */}
        {skinTypes.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
            {skinTypes.map((type) => {
              const c = skinTypeColor[type] ?? fallbackSkinType;
              return (
                <span key={type} style={{ padding: "3px 9px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: c.text, backgroundColor: c.bg, border: `1px solid ${c.border}` }}>
                  {type}
                </span>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #EDE8DF" }}>
          {steps.length > 0 ? (
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>{steps.length} step{steps.length !== 1 ? "s" : ""}</span>
          ) : (
            <span />
          )}
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#1A1714", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            View Routine <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
