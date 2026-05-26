"use client";

import Link from "next/link";
import { ExternalLink, BookOpen, Star } from "lucide-react";

export interface ProductCardProps {
  name: string;
  brand: string;
  category: string;
  score?: number;
  maxScore?: number;
  priceUSD: string;
  priceINR: string;
  tags?: string[];
  buyUrl: string;
  buyLabel?: string;
  reviewSlug?: string;
  /** hex gradient start e.g. "#1E1B18" */
  bgFrom?: string;
  bgTo?: string;
  accent?: string;
  featured?: boolean;
}

export default function ProductCard({
  name,
  brand,
  category,
  score,
  maxScore = 10,
  priceUSD,
  priceINR,
  tags = [],
  buyUrl,
  buyLabel = "Check Price",
  reviewSlug,
  bgFrom = "#1E1B18",
  bgTo = "#141210",
  accent = "#C4622D",
  featured = false,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: featured ? `1px solid ${accent}55` : "1px solid #D4C9B8",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#F8F2E4",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {featured && (
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 10,
          padding: "2px 8px",
          backgroundColor: accent,
          borderRadius: 4,
          fontSize: 8,
          fontFamily: "var(--font-dm-mono), monospace",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#F2EBD9",
          fontWeight: 700,
        }}>
          Reviewed
        </div>
      )}

      {/* ── Product image area ───────────────────────────────────────────── */}
      <div style={{
        height: 180,
        background: `linear-gradient(145deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Score ring */}
        {score !== undefined && (
          <div style={{ position: "relative", zIndex: 2 }}>
            <svg width={72} height={72} viewBox="0 0 72 72">
              <circle cx={36} cy={36} r={30} fill="none" stroke="rgba(242,235,217,0.08)" strokeWidth={4} />
              <circle
                cx={36} cy={36} r={30}
                fill="none"
                stroke={accent}
                strokeWidth={4}
                strokeDasharray={`${(score / maxScore) * 188.5} 188.5`}
                strokeLinecap="round"
                transform="rotate(-90 36 36)"
              />
              <text x={36} y={40} textAnchor="middle" fill="#F2EBD9" fontSize={20} fontWeight={800} fontFamily="Georgia, serif">
                {score}
              </text>
            </svg>
          </div>
        )}

        {/* Stars row */}
        {score !== undefined && (
          <div style={{ display: "flex", gap: 2, position: "relative", zIndex: 2 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <Star
                key={i}
                size={8}
                fill={i < score ? accent : "none"}
                color={i < score ? accent : "rgba(242,235,217,0.2)"}
              />
            ))}
          </div>
        )}

        {/* Category tag */}
        <span style={{
          position: "relative",
          zIndex: 2,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 8,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(242,235,217,0.35)",
        }}>
          {category}
        </span>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${bgTo})` }} />
      </div>

      {/* ── Accent line ─────────────────────────────────────────────────── */}
      <div style={{ height: 2, backgroundColor: accent, flexShrink: 0 }} />

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* Brand + name */}
        <div>
          <p style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#A89880",
            marginBottom: 4,
          }}>
            {brand}
          </p>
          <p style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "#1A1714",
            lineHeight: 1.25,
            margin: 0,
          }}>
            {name}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {tags.map((tag) => (
              <span key={tag} style={{
                padding: "2px 7px",
                backgroundColor: "#EDE8DF",
                border: "1px solid #D4C9B8",
                borderRadius: 4,
                fontSize: 9,
                color: "#5C5650",
                fontFamily: "var(--font-dm-mono), monospace",
                letterSpacing: "0.08em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
          <span style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#1A1714",
          }}>
            {priceUSD}
          </span>
          <span style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color: "#8A8480",
          }}>
            {priceINR}
          </span>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 8, marginTop: "auto", flexWrap: "wrap" }}>
          <a
            href={buyUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: "8px 12px",
              backgroundColor: accent,
              color: "#F2EBD9",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 7,
              fontFamily: "var(--font-dm-sans), sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {buyLabel} <ExternalLink size={10} />
          </a>
          {reviewSlug && (
            <Link
              href={`/reviews/${reviewSlug}`}
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                padding: "8px 12px",
                border: "1px solid #D4C9B8",
                color: "#5C5650",
                fontSize: 11,
                fontWeight: 500,
                borderRadius: 7,
                fontFamily: "var(--font-dm-sans), sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
                backgroundColor: "#F2EBD9",
              }}
            >
              <BookOpen size={10} /> Read Review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
