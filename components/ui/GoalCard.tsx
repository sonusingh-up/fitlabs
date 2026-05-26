"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GoalCardProps {
  slug: string;
  label: string;
  description: string;
  topIngredients: string[];
  icon?: string;
  code?: string;
  image?: string;
}

const goalStyle: Record<string, { bg: string; accent: string; overlay: string }> = {
  "muscle-gain":  { bg: "linear-gradient(145deg, #1A1714 0%, #2A1F16 100%)", accent: "#C4622D", overlay: "linear-gradient(to top, rgba(26,23,20,0.88) 0%, rgba(26,23,20,0.45) 60%, rgba(26,23,20,0.25) 100%)" },
  "weight-loss":  { bg: "linear-gradient(145deg, #0F1E16 0%, #0A1410 100%)", accent: "#2D6A4F", overlay: "linear-gradient(to top, rgba(15,30,22,0.88) 0%, rgba(15,30,22,0.45) 60%, rgba(15,30,22,0.25) 100%)" },
  "energy-focus": { bg: "linear-gradient(145deg, #1A1408 0%, #140F06 100%)", accent: "#D4A96A", overlay: "linear-gradient(to top, rgba(26,20,8,0.88) 0%, rgba(26,20,8,0.45) 60%, rgba(26,20,8,0.25) 100%)" },
  recovery:       { bg: "linear-gradient(145deg, #0A1220 0%, #070D18 100%)", accent: "#7EB8D4", overlay: "linear-gradient(to top, rgba(10,18,32,0.88) 0%, rgba(10,18,32,0.45) 60%, rgba(10,18,32,0.25) 100%)" },
};

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function GoalCard({ slug, label, description, topIngredients, icon, code, image }: GoalCardProps) {
  const gs = goalStyle[slug] ?? { bg: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", accent: "#C4622D", overlay: "linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.4) 100%)" };

  return (
    <Link
      href={`/goals/${slug}`}
      style={{ display: "flex", flexDirection: "column", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", textDecoration: "none", transition: "all 0.25s", backgroundColor: "#F8F2E4" }}
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
      {/* Header block */}
      <div style={{ height: 160, background: gs.bg, position: "relative", overflow: "hidden", padding: "16px 20px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>

        {/* Photo background */}
        {image && (
          <Image
            src={image}
            alt={label}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        )}

        {/* Dark gradient overlay — always present, deeper when image shown */}
        <div style={{ position: "absolute", inset: 0, background: gs.overlay, zIndex: 1 }} />

        {/* Grid texture */}
        <div style={{ ...gridOverlay, zIndex: 2 }} />

        {/* Ghost icon — only when no image */}
        {!image && (
          <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", fontSize: "3.5rem", opacity: 0.15, userSelect: "none", pointerEvents: "none", zIndex: 2 }}>{icon}</span>
        )}

        {/* Label row */}
        <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.6rem", lineHeight: 1, filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.4))" }}>{icon}</span>
          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", letterSpacing: "-0.01em", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>{label}</span>
        </div>

        {code && (
          <span style={{ position: "relative", zIndex: 3, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "rgba(242,235,217,0.45)", textTransform: "uppercase" }}>{code}</span>
        )}
      </div>

      {/* Accent line */}
      <div style={{ height: 2, backgroundColor: gs.accent, opacity: 0.7 }} />

      {/* Body */}
      <div style={{ padding: "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, flex: 1 }}>{description}</p>
        <div>
          <p style={{ fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Key Ingredients</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {topIngredients.slice(0, 3).map((ing) => (
              <span key={ing} style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{ing}</span>
            ))}
          </div>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          View Guide <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
