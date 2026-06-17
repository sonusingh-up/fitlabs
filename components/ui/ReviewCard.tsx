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
  "protein powder": "linear-gradient(145deg, #1F2937 0%, #111827 100%)",
  "pre-workout": "linear-gradient(145deg, #27201C 0%, #1A1410 100%)",
  creatine: "linear-gradient(145deg, #0F2420 0%, #0A1A17 100%)",
  vitamins: "linear-gradient(145deg, #142014 0%, #0C160C 100%)",
  default: "linear-gradient(145deg, #1F2937 0%, #111827 100%)",
};

function getGradient(category: string) {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryGradient)) {
    if (key.includes(k)) return v;
  }
  return categoryGradient.default;
}

const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
const QUART = "cubic-bezier(0.25, 1, 0.5, 1)";

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
          borderBottom: "1px solid #F3F4F6",
          textDecoration: "none",
          transition: `opacity 150ms ${EXPO}`,
        }}
      >
        <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4, fontWeight: 600 }}>
            {brand} · {category}
          </p>
          <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
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
          backgroundColor: "#111827",
          borderRadius: 14,
          overflow: "hidden",
          textDecoration: "none",
          transition: `transform 200ms ${EXPO}, box-shadow 200ms ${QUART}`,
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-5px)";
          el.style.boxShadow = "0 20px 60px -15px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <div style={{ height: 180, background: getGradient(category), position: "relative", overflow: "hidden", padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <span style={{ position: "absolute", right: 20, bottom: -12, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "6rem", fontWeight: 800, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
            {category[0]}
          </span>
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            {figNumber && (
              <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>
                FIG. {figNumber}
              </span>
            )}
            <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E8784", fontWeight: 600 }}>{category}</span>
          </div>
        </div>

        <div style={{ height: 2, background: "linear-gradient(90deg, #0E8784 0%, transparent 70%)" }} />

        <div style={{ padding: "22px 24px 26px" }}>
          <p style={{ fontSize: 11, color: "#6B7280", fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>{brand}</p>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)", fontWeight: 700, color: "#F9FAFB", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12 }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, marginBottom: 24 }}>{verdict}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#6B7280", fontFamily: "var(--font-dm-sans), sans-serif" }}>{date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#0E8784", fontWeight: 600 }}>
              Read Review{" "}
              <span className="arrow-nudge"><ArrowRight size={12} /></span>
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
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 14,
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        transition: `transform 200ms ${EXPO}, box-shadow 200ms ${QUART}, border-color 200ms ${EXPO}`,
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 12px 40px -10px rgba(0,0,0,0.12)";
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "#D1D5DB";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "#E5E7EB";
      }}
    >
      <div style={{ height: 128, background: getGradient(category), position: "relative", overflow: "hidden", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <span style={{ position: "absolute", right: 16, bottom: -8, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4.5rem", fontWeight: 800, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {category[0]}
        </span>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {figNumber ? (
            <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>FIG. {figNumber}</span>
          ) : <span />}
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E8784", fontWeight: 600 }}>{category}</span>
        </div>
        <div style={{ position: "relative" }}>
          <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
        </div>
      </div>

      <div style={{ height: 1, background: "linear-gradient(90deg, rgba(14,135,132,0.3) 0%, transparent 60%)" }} />

      <div style={{ padding: "18px 20px 22px" }}>
        <p style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{brand}</p>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.015em", marginBottom: 10 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65, marginBottom: 16 }}>{verdict}</p>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{ padding: "3px 8px", backgroundColor: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: 6, fontSize: 10, color: "#6B7280", fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #F3F4F6" }}>
          <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif" }}>{date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#111827", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Read{" "}
            <span className="arrow-nudge"><ArrowRight size={11} /></span>
          </span>
        </div>
      </div>
    </Link>
  );
}
