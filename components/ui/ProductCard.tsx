"use client";

import Link from "next/link";
import Image from "next/image";
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
  return (
    <div
      style={{
        border: featured ? `1px solid ${accent}55` : "1px solid #e4e8e5",
        borderRadius: 14,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
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
          fontFamily: "var(--font-hanken), sans-serif",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#F9FAFB",
        }}>
          Reviewed
        </div>
      )}

      <div style={{
        height: 180,
        background: `linear-gradient(145deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        display: image ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
        }} />

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
                <svg width={52} height={52} viewBox="0 0 52 52">
                  <circle cx={26} cy={26} r={22} fill="rgba(17,24,39,0.82)" />
                  <circle cx={26} cy={26} r={20} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={3} />
                  <circle
                    cx={26} cy={26} r={20}
                    fill="none"
                    stroke={accent}
                    strokeWidth={3}
                    strokeDasharray={`${(score / maxScore) * 125.7} 125.7`}
                    strokeLinecap="round"
                    transform="rotate(-90 26 26)"
                  />
                  <text x={26} y={31} textAnchor="middle" fill="#F9FAFB" fontSize={15} fontWeight={800} fontFamily="Georgia, serif">
                    {score}
                  </text>
                </svg>
              </div>
            )}
          </>
        ) : (
          <>
            {score !== undefined && (
              <div style={{ position: "relative", zIndex: 2 }}>
                <svg width={72} height={72} viewBox="0 0 72 72">
                  <circle cx={36} cy={36} r={30} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={4} />
                  <circle
                    cx={36} cy={36} r={30}
                    fill="none"
                    stroke={accent}
                    strokeWidth={4}
                    strokeDasharray={`${(score / maxScore) * 188.5} 188.5`}
                    strokeLinecap="round"
                    transform="rotate(-90 36 36)"
                  />
                  <text x={36} y={40} textAnchor="middle" fill="#F9FAFB" fontSize={20} fontWeight={800} fontFamily="Georgia, serif">
                    {score}
                  </text>
                </svg>
              </div>
            )}
            {score !== undefined && (
              <div style={{ display: "flex", gap: 2, position: "relative", zIndex: 2 }}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <Star
                    key={i}
                    size={8}
                    fill={i < score ? accent : "none"}
                    color={i < score ? accent : "rgba(255,255,255,0.2)"}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <span style={{
          position: "absolute",
          bottom: 8,
          left: image ? 12 : "50%",
          transform: image ? "none" : "translateX(-50%)",
          zIndex: 3,
          fontFamily: "var(--font-hanken), sans-serif",
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.38)",
          whiteSpace: "nowrap",
        }}>
          {category}
        </span>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${bgTo})`, zIndex: 2 }} />
      </div>

      <div style={{ height: 2, backgroundColor: accent, flexShrink: 0 }} />

      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <p style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6b7770",
            marginBottom: 4,
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
                backgroundColor: "#eef1ef",
                border: "1px solid #e4e8e5",
                borderRadius: 6,
                fontSize: 9,
                color: "#586259",
                fontFamily: "var(--font-hanken), sans-serif",
                fontWeight: 500,
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
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#17211c",
          }}>
            {priceUSD}
          </span>
          <span style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: 10,
            fontWeight: 500,
            color: "#6b7770",
          }}>
            {priceINR}
          </span>
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
              padding: "8px 12px",
              backgroundColor: accent,
              color: "#F9FAFB",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 7,
              fontFamily: "var(--font-hanken), sans-serif",
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
                border: "1px solid #e4e8e5",
                color: "#586259",
                fontSize: 11,
                fontWeight: 500,
                borderRadius: 7,
                fontFamily: "var(--font-hanken), sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
                backgroundColor: "#FFFFFF",
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
