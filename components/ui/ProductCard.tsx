"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, BookOpen } from "lucide-react";

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
  /** filename inside /public/products/ e.g. "on-gold-standard-whey.webp" */
  image?: string;
  /** hex gradient start e.g. "#1F2937" */
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
  image,
  bgFrom = "#1F2937",
  bgTo = "#17211c",
  accent = "#0f7a5a",
  featured = false,
}: ProductCardProps) {
  const circ = 2 * Math.PI * 20;
  const filled = score !== undefined ? (score / maxScore) * circ : 0;

  return (
    <div
      style={{
        border: featured ? `1px solid ${accent}40` : "1px solid #F0F3F1",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {featured && (
        <div style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          padding: "2px 8px",
          backgroundColor: accent,
          borderRadius: 4,
          fontSize: 8,
          fontFamily: "var(--font-jetbrains), monospace",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#F9FAFB",
        }}>
          Reviewed
        </div>
      )}

      {/* Image area */}
      <div style={{
        height: 170,
        background: `linear-gradient(145deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        display: image ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 6,
      }}>
        {image ? (
          <>
            <Image
              src={`/products/${image}`}
              alt={`${name} by ${brand}`}
              fill
              style={{ objectFit: "contain", padding: "16px 20px", zIndex: 1 }}
              sizes="(max-width: 768px) 50vw, 280px"
            />
            {score !== undefined && (
              <div style={{ position: "absolute", bottom: 10, right: 10, zIndex: 3 }}>
                <svg width={48} height={48} viewBox="0 0 48 48">
                  <circle cx={24} cy={24} r={20} fill="rgba(17,24,39,0.85)" />
                  <circle cx={24} cy={24} r={18} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={2.5} />
                  <circle
                    cx={24} cy={24} r={18}
                    fill="none"
                    stroke={accent}
                    strokeWidth={2.5}
                    strokeDasharray={`${(score / maxScore) * (2 * Math.PI * 18)} ${2 * Math.PI * 18}`}
                    strokeLinecap="round"
                    transform="rotate(-90 24 24)"
                  />
                  <text x={24} y={29} textAnchor="middle" fill="#F9FAFB" fontSize={14} fontWeight={800} fontFamily="Georgia, serif">
                    {score}
                  </text>
                </svg>
              </div>
            )}
          </>
        ) : (
          score !== undefined && (
            <svg width={64} height={64} viewBox="0 0 64 64" style={{ position: "relative", zIndex: 2 }}>
              <circle cx={32} cy={32} r={26} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
              <circle
                cx={32} cy={32} r={26}
                fill="none"
                stroke={accent}
                strokeWidth={3}
                strokeDasharray={`${(score / maxScore) * (2 * Math.PI * 26)} ${2 * Math.PI * 26}`}
                strokeLinecap="round"
                transform="rotate(-90 32 32)"
              />
              <text x={32} y={37} textAnchor="middle" fill="#F9FAFB" fontSize={18} fontWeight={800} fontFamily="Georgia, serif">
                {score}
              </text>
            </svg>
          )
        )}

        <span style={{
          position: "absolute",
          bottom: 8,
          left: image ? 10 : "50%",
          transform: image ? "none" : "translateX(-50%)",
          zIndex: 3,
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          whiteSpace: "nowrap",
        }}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <p style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C4C9C5",
            marginBottom: 3,
          }}>
            {brand}
          </p>
          <p style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "#17211c",
            lineHeight: 1.25,
            margin: 0,
          }}>
            {name}
          </p>
        </div>

        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {tags.map((tag) => (
              <span key={tag} style={{
                padding: "2px 7px",
                backgroundColor: "#F6F8F6",
                border: "1px solid #F0F3F1",
                borderRadius: 4,
                fontSize: 9,
                color: "#6B7770",
                fontFamily: "var(--font-jetbrains), monospace",
                letterSpacing: "0.06em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
          <span style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#17211c",
          }}>
            {priceUSD}
          </span>
          {priceINR && priceINR !== "N/A" && (
            <span style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 10,
              color: "#C4C9C5",
            }}>
              {priceINR}
            </span>
          )}
        </div>

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
              padding: "9px 12px",
              backgroundColor: accent,
              color: "#F9FAFB",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 8,
              fontFamily: "var(--font-hanken), sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.15s",
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
                padding: "9px 12px",
                border: "1px solid #F0F3F1",
                color: "#6B7770",
                fontSize: 11,
                fontWeight: 600,
                borderRadius: 8,
                fontFamily: "var(--font-hanken), sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
                backgroundColor: "#FFFFFF",
                transition: "border-color 0.15s",
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
