"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SkinGuideCardProps {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  timeEstimate?: string;
  publishedAt?: string;
}

const difficultyStyle: Record<string, { accent: string; text: string; bg: string; border: string }> = {
  beginner:     { accent: "#4A7C59", text: "#4A7C59", bg: "rgba(74,124,89,0.1)",   border: "rgba(74,124,89,0.3)"   },
  intermediate: { accent: "#C4622D", text: "#C4622D", bg: "rgba(196,98,45,0.1)",   border: "rgba(196,98,45,0.3)"   },
  advanced:     { accent: "#8B1A1A", text: "#8B1A1A", bg: "rgba(139,26,26,0.1)",   border: "rgba(139,26,26,0.3)"   },
};

const fallbackDifficulty = { accent: "#A89880", text: "#8A8480", bg: "rgba(138,132,128,0.1)", border: "rgba(138,132,128,0.3)" };

export default function SkinGuideCard({
  slug,
  title,
  description,
  category,
  difficulty,
  timeEstimate,
  publishedAt,
}: SkinGuideCardProps) {
  const d = difficulty ? (difficultyStyle[difficulty] ?? fallbackDifficulty) : fallbackDifficulty;
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : null;

  return (
    <Link
      href={`/skin/guides/${slug}`}
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
      {/* Difficulty-colored accent bar */}
      <div style={{ height: 4, backgroundColor: d.accent }} />

      {/* Meta row */}
      <div style={{ padding: "12px 18px", backgroundColor: "#F0E8D5", borderBottom: "1px solid #EDE8DF", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {category && (
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {category}
          </span>
        )}
        {difficulty && (
          <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: d.text, backgroundColor: d.bg, border: `1px solid ${d.border}` }}>
            {difficulty}
          </span>
        )}
        {timeEstimate && (
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", whiteSpace: "nowrap" }}>
            {timeEstimate}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 700, color: "#1A1714", lineHeight: 1.25, letterSpacing: "-0.015em", marginBottom: 10 }}>
          {title}
        </h3>
        {description && (
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 16 }}>
            {description.length > 110 ? description.slice(0, 110) + "…" : description}
          </p>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #EDE8DF" }}>
          <span style={{ fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>{date ?? ""}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#1A1714", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Read Guide <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
