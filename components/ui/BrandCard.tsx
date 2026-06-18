"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  slug: string;
  name: string;
  country: string;
  founded?: string;
  specialty: string;
  reviewCount: number;
  topProduct?: string;
  code?: string;
}

const gridOverlay = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none" as const,
};

export default function BrandCard({ slug, name, country, founded, specialty, reviewCount, topProduct, code }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${slug}`}
      style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5", textDecoration: "none", transition: "all 0.25s", backgroundColor: "#F6F8F6" }}
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
      <div style={{ height: 88, background: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", position: "relative", overflow: "hidden", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={gridOverlay} />
        {/* Ghost letter */}
        <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "5rem", fontWeight: 800, color: "rgba(242,235,217,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {name[0]}
        </span>
        {/* Brand initial badge */}
        <div style={{ position: "relative", width: 48, height: 48, backgroundColor: "#0F7A5A", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 800, fontFamily: "var(--font-playfair), Georgia, serif", lineHeight: 1 }}>{name[0]}</span>
        </div>
        {code && (
          <span style={{ position: "relative", fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "rgba(242,235,217,0.35)", textTransform: "uppercase" }}>{code}</span>
        )}
      </div>

      {/* Rust accent line */}
      <div style={{ height: 2, background: "linear-gradient(90deg, #0F7A5A 0%, transparent 70%)", opacity: 0.7 }} />

      {/* Body */}
      <div style={{ padding: "18px 20px 20px" }}>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", marginBottom: 3 }}>{name}</h3>
        <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", marginBottom: 12 }}>
          {country}{founded && ` · EST. ${founded}`}
        </p>
        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.55, marginBottom: 14 }}>{specialty}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #F2F8F4" }}>
          <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>
            {reviewCount} review{reviewCount !== 1 ? "s" : ""}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#0F7A5A", fontWeight: 600 }}>
            View Brand <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
