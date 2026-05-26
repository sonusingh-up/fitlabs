"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReviewScoreBadge from "./ReviewScoreBadge";
import type { ReviewRating } from "@/lib/types";

interface ReviewCardProps {
  slug: string;
  title: string;
  brand: string;
  category: string;
  rating: ReviewRating;
  verdict: string;
  publishedAt: string;
  figNumber?: string;
  variant?: "default" | "featured" | "compact";
  tags?: string[];
}

const categoryGradient: Record<string, string> = {
  "protein powder": "linear-gradient(145deg, #2A1F16 0%, #1A1410 100%)",
  "pre-workout": "linear-gradient(145deg, #2A1410 0%, #1A0E0A 100%)",
  creatine: "linear-gradient(145deg, #0F1E1C 0%, #0A1614 100%)",
  vitamins: "linear-gradient(145deg, #101E10 0%, #0A160A 100%)",
  default: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)",
};

function getGradient(category: string) {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryGradient)) {
    if (key.includes(k)) return v;
  }
  return categoryGradient.default;
}

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function ReviewCard({
  slug,
  title,
  brand,
  category,
  rating,
  verdict,
  publishedAt,
  figNumber,
  variant = "default",
  tags = [],
}: ReviewCardProps) {
  const date = new Date(publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" });

  if (variant === "compact") {
    return (
      <Link
        href={`/reviews/${slug}`}
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          padding: "16px 0",
          borderBottom: "1px solid #EDE8DF",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 10, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>
            {brand} · {category}
          </p>
          <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.2 }}>
            {title}
          </h4>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/reviews/${slug}`}
        style={{
          display: "block",
          backgroundColor: "#1A1714",
          borderRadius: 12,
          overflow: "hidden",
          textDecoration: "none",
          transition: "transform 0.25s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
      >
        {/* Image block */}
        <div style={{ height: 180, background: getGradient(category), position: "relative", overflow: "hidden", padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={gridOverlay} />
          {/* Large background letter */}
          <span style={{ position: "absolute", right: 20, bottom: -12, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "6rem", fontWeight: 800, color: "rgba(242,235,217,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
            {category[0]}
          </span>
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            {figNumber && (
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>
                FIG. {figNumber}
              </span>
            )}
            <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D" }}>{category}</span>
          </div>
        </div>

        {/* Rust accent line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)" }} />

        <div style={{ padding: "22px 24px 26px" }}>
          <p style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>{brand}</p>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12 }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.65, marginBottom: 24 }}>{verdict}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#C4622D", fontWeight: 600 }}>
              Read Review <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/reviews/${slug}`}
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
      {/* Image header block */}
      <div style={{ height: 128, background: getGradient(category), position: "relative", overflow: "hidden", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={gridOverlay} />
        {/* Ghost category letter */}
        <span style={{ position: "absolute", right: 16, bottom: -8, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4.5rem", fontWeight: 800, color: "rgba(242,235,217,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {category[0]}
        </span>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {figNumber ? (
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>FIG. {figNumber}</span>
          ) : <span />}
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D" }}>{category}</span>
        </div>
        <div style={{ position: "relative" }}>
          <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
        </div>
      </div>

      {/* Thin accent line */}
      <div style={{ height: 1, background: "linear-gradient(90deg, #C4622D20 0%, transparent 60%)" }} />

      {/* Card body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{brand}</p>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, color: "#1A1714", lineHeight: 1.2, letterSpacing: "-0.015em", marginBottom: 10 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 16 }}>{verdict}</p>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #EDE8DF" }}>
          <span style={{ fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>{date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#1A1714", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Read <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
