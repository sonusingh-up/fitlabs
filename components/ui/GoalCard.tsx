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
  "muscle-gain":  { bg: "linear-gradient(145deg, #2A1F16 0%, #1A1714 100%)", accent: "#C4622D" },
  "weight-loss":  { bg: "linear-gradient(145deg, #0F1E16 0%, #0A1410 100%)", accent: "#2D6A4F" },
  "energy-focus": { bg: "linear-gradient(145deg, #1A1408 0%, #140F06 100%)", accent: "#D4A96A" },
  recovery:       { bg: "linear-gradient(145deg, #0A1220 0%, #070D18 100%)", accent: "#7EB8D4" },
};

export default function GoalCard({ slug, label, description, topIngredients, code, image }: GoalCardProps) {
  const gs = goalStyle[slug] ?? { bg: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", accent: "#C4622D" };

  return (
    <Link
      href={`/goals/${slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #D4C9B8",
        textDecoration: "none",
        backgroundColor: "#F8F2E4",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
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
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            backgroundColor: "rgba(26,23,20,0.45)",
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
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "1.1rem", fontWeight: 700,
          color: "#1A1714", letterSpacing: "-0.01em", margin: 0,
        }}>{label}</h3>

        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, flex: 1 }}>{description}</p>

        <div>
          <p style={{
            fontSize: 9, color: "#8A8480",
            fontFamily: "var(--font-dm-mono), monospace",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 7,
          }}>Key Ingredients</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {topIngredients.slice(0, 3).map((ing) => (
              <span key={ing} style={{
                padding: "3px 8px",
                backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8",
                borderRadius: 4, fontSize: 10, color: "#5C5650",
                fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em",
              }}>{ing}</span>
            ))}
          </div>
        </div>

        <span style={{
          display: "flex", alignItems: "center", gap: 4,
          fontSize: 12, color: "#C4622D", fontWeight: 600,
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}>
          View Guide <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
