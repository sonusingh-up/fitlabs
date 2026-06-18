"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GoalCardProps {
  slug: string;
  label: string;
  description: string;
  topIngredients: string[];
  code?: string;
  image?: string;
}

const goalStyle: Record<string, { bg: string; accent: string }> = {
  "muscle-gain":  { bg: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", accent: "#0f7a5a" },
  "weight-loss":  { bg: "linear-gradient(145deg, #064E3B 0%, #022C22 100%)", accent: "#059669" },
  "energy-focus": { bg: "linear-gradient(145deg, #78350F 0%, #451A03 100%)", accent: "#D97706" },
  recovery:       { bg: "linear-gradient(145deg, #1E3A5F 0%, #0F172A 100%)", accent: "#3B82F6" },
};

export default function GoalCard({ slug, label, description, topIngredients, code, image }: GoalCardProps) {
  const gs = goalStyle[slug] ?? { bg: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", accent: "#0f7a5a" };

  return (
    <Link
      href={`/goals/${slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #e4e8e5",
        textDecoration: "none",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
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
      {/* Image area — full bleed, no overlay */}
      <div style={{ position: "relative", height: 200, background: gs.bg, overflow: "hidden", flexShrink: 0 }}>

        {image ? (
          <Image
            src={image}
            alt={label}
            fill
            sizes="(max-width: 640px) 100vw, 340px"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        ) : (
          /* Fallback: just the gradient when no image */
          null
        )}

        {/* Code chip — top-left, always visible */}
        {code && (
          <span style={{
            position: "absolute", top: 12, left: 12,
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            backgroundColor: "rgba(17,24,39,0.45)",
            backdropFilter: "blur(4px)",
            padding: "3px 8px", borderRadius: 4,
            zIndex: 2,
          }}>
            {code}
          </span>
        )}
      </div>

      {/* Accent line */}
      <div style={{ height: 2, backgroundColor: gs.accent, flexShrink: 0 }} />

      {/* Card body — label sits here now, fully readable on light bg */}
      <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Label */}
        <h3 style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: "1.1rem", fontWeight: 700,
          color: "#17211c", letterSpacing: "-0.01em", margin: 0,
        }}>{label}</h3>

        <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.65, margin: 0, flex: 1 }}>{description}</p>

        <div>
          <p style={{
            fontSize: 9, color: "#6b7770",
            fontFamily: "var(--font-hanken), sans-serif",
            fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 7,
          }}>Key Ingredients</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {topIngredients.slice(0, 3).map((ing) => (
              <span key={ing} style={{
                padding: "3px 8px",
                backgroundColor: "#eef1ef", border: "1px solid #e4e8e5",
                borderRadius: 6, fontSize: 10, color: "#586259",
                fontFamily: "var(--font-hanken), sans-serif", fontWeight: 500, letterSpacing: "0.06em",
              }}>{ing}</span>
            ))}
          </div>
        </div>

        <span style={{
          display: "flex", alignItems: "center", gap: 4,
          fontSize: 12, color: "#0f7a5a", fontWeight: 600,
          fontFamily: "var(--font-hanken), sans-serif",
        }}>
          View Guide <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
