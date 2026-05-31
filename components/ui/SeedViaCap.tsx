"use client";

import { SEED } from "@/lib/seed-tokens";

interface SeedViaCapProps {
  outerLabel: string;
  outerIngredients: string[];
  innerLabel: string;
  innerIngredients: string[];
  note?: string;
}

/**
 * SeedViaCap — Visual diagram of Seed's dual-capsule ViaCap delivery architecture.
 * Shows the outer capsule (body-facing actives) wrapping the inner capsule
 * (microbiome-facing postbiotics/prebiotics).
 *
 * Used on all Seed product review pages.
 */
export default function SeedViaCap({
  outerLabel,
  outerIngredients,
  innerLabel,
  innerIngredients,
  note,
}: SeedViaCapProps) {
  return (
    <div
      style={{
        backgroundColor: SEED.darkBg,
        borderRadius: 14,
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${SEED.darkBorder}`,
      }}
    >
      {/* Dot grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...SEED.dotGrid,
          borderRadius: 14,
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: 28 }}>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: SEED.green,
            marginBottom: 6,
          }}
        >
          ViaCap® Delivery Architecture
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: SEED.darkText,
            lineHeight: 1.3,
          }}
        >
          Two capsules. Two destinations.
        </p>
      </div>

      {/* Capsule diagram + ingredient lists */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* SVG Capsule Diagram */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg
            width="140"
            height="200"
            viewBox="0 0 140 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="ViaCap dual-capsule delivery diagram"
          >
            {/* Outer capsule */}
            <rect
              x="10"
              y="10"
              width="120"
              height="180"
              rx="60"
              fill="none"
              stroke={SEED.green}
              strokeWidth="2.5"
              opacity="0.7"
            />
            <rect
              x="10"
              y="10"
              width="120"
              height="180"
              rx="60"
              fill={SEED.green}
              fillOpacity="0.06"
            />

            {/* Outer capsule top half (different opacity to show capsule join) */}
            <path
              d="M10 100 Q10 10 70 10 Q130 10 130 100"
              fill={SEED.green}
              fillOpacity="0.10"
              stroke="none"
            />

            {/* Capsule join line */}
            <line
              x1="10"
              y1="100"
              x2="130"
              y2="100"
              stroke={SEED.green}
              strokeWidth="1"
              strokeDasharray="4 3"
              opacity="0.4"
            />

            {/* Outer label */}
            <text
              x="70"
              y="60"
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
              fill={SEED.green}
              opacity="0.9"
            >
              OUTER
            </text>
            <text
              x="70"
              y="74"
              textAnchor="middle"
              fontSize="8"
              fontFamily="monospace"
              fill={SEED.darkMuted}
            >
              BODY-FACING
            </text>

            {/* Inner capsule (acid-resistant) */}
            <rect
              x="30"
              y="110"
              width="80"
              height="70"
              rx="35"
              fill={SEED.darkCard}
              stroke={SEED.greenLight}
              strokeWidth="2"
            />
            <rect
              x="30"
              y="110"
              width="80"
              height="70"
              rx="35"
              fill={SEED.greenLight}
              fillOpacity="0.08"
            />

            {/* Inner label */}
            <text
              x="70"
              y="142"
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
              fill={SEED.greenLight}
            >
              INNER
            </text>
            <text
              x="70"
              y="156"
              textAnchor="middle"
              fontSize="7.5"
              fontFamily="monospace"
              fill={SEED.darkMuted}
            >
              GI-TARGETED
            </text>
          </svg>
        </div>

        {/* Ingredient lists */}
        <div style={{ flex: 1, minWidth: 200, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Outer capsule ingredients */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: SEED.green,
                  opacity: 0.8,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: SEED.green,
                  margin: 0,
                }}
              >
                {outerLabel}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 18 }}>
              {outerIngredients.map((ing) => (
                <p
                  key={ing}
                  style={{
                    fontSize: 12,
                    color: SEED.darkMuted,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    margin: 0,
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <span style={{ color: SEED.green, marginTop: 2, flexShrink: 0, fontSize: 10 }}>›</span>
                  {ing}
                </p>
              ))}
            </div>
          </div>

          {/* Inner capsule ingredients */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: SEED.greenLight,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: SEED.greenLight,
                  margin: 0,
                }}
              >
                {innerLabel}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 18 }}>
              {innerIngredients.map((ing) => (
                <p
                  key={ing}
                  style={{
                    fontSize: 12,
                    color: SEED.darkMuted,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    margin: 0,
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <span style={{ color: SEED.greenLight, marginTop: 2, flexShrink: 0, fontSize: 10 }}>›</span>
                  {ing}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      {note && (
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: 12,
            color: SEED.darkCaption,
            fontFamily: "var(--font-dm-sans), sans-serif",
            lineHeight: 1.65,
            marginTop: 20,
            paddingTop: 16,
            borderTop: `1px solid ${SEED.darkBorder}`,
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}
