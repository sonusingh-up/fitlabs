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
  "protein powder": "linear-gradient(145deg, #1F2937 0%, #17211c 100%)",
  "pre-workout": "linear-gradient(145deg, #27201C 0%, #1A1410 100%)",
  creatine: "linear-gradient(145deg, #0F2420 0%, #0A1A17 100%)",
  vitamins: "linear-gradient(145deg, #142014 0%, #0C160C 100%)",
  default: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)",
};

function getGradient(category: string) {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(categoryGradient)) {
    if (key.includes(k)) return v;
  }
  return categoryGradient.default;
}

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
          gap: 14,
          alignItems: "center",
          padding: "14px 0",
          borderBottom: "1px solid #F0F3F1",
          textDecoration: "none",
        }}
      >
        <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 9, color: "#C4C9C5", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3, fontWeight: 600 }}>
            {brand} · {category}
          </p>
          <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211c", lineHeight: 1.25 }}>
            {title}
          </h4>
        </div>
        <ArrowRight size={12} style={{ color: "#C4C9C5", flexShrink: 0 }} />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/reviews/${slug}`}
        className="review-card-hover"
        style={{
          display: "block",
          backgroundColor: "#17211c",
          borderRadius: 12,
          overflow: "hidden",
          textDecoration: "none",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{
          height: 160,
          background: getGradient(category),
          position: "relative",
          overflow: "hidden",
          padding: "18px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {figNumber && (
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 600 }}>
                  FIG. {figNumber}
                </span>
              )}
            </div>
            <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
          </div>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f7a5a", fontWeight: 600 }}>{category}</span>
        </div>

        <div style={{ padding: "20px 22px 24px" }}>
          <p style={{ fontSize: 9, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>{brand}</p>
          <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "#F9FAFB", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 10 }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: "#6b7770", lineHeight: 1.6, marginBottom: 20 }}>{verdict}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 10, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>{date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>
              Read Review <span className="arrow-nudge"><ArrowRight size={12} /></span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/reviews/${slug}`}
      className="review-card-hover"
      style={{
        display: "block",
        backgroundColor: "#FFFFFF",
        border: "1px solid #F0F3F1",
        borderRadius: 12,
        overflow: "hidden",
        textDecoration: "none",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s",
      }}
    >
      <div style={{
        height: 110,
        background: getGradient(category),
        position: "relative",
        overflow: "hidden",
        padding: "14px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {figNumber ? (
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 600 }}>FIG. {figNumber}</span>
          ) : <span />}
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f7a5a", fontWeight: 600 }}>{category}</span>
        </div>
        <ReviewScoreBadge rating={rating} size="sm" showLabel={false} />
      </div>

      <div style={{ padding: "16px 18px 20px" }}>
        <p style={{ fontSize: 9, color: "#C4C9C5", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>{brand}</p>
        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 700, color: "#17211c", lineHeight: 1.2, letterSpacing: "-0.015em", marginBottom: 8 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.6, marginBottom: 14 }}>{verdict}</p>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{ padding: "2px 8px", backgroundColor: "#F6F8F6", border: "1px solid #F0F3F1", borderRadius: 4, fontSize: 9, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #F0F3F1" }}>
          <span style={{ fontSize: 10, color: "#C4C9C5", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>{date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#17211c", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>
            Read <span className="arrow-nudge"><ArrowRight size={11} /></span>
          </span>
        </div>
      </div>
    </Link>
  );
}
