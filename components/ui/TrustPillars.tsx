"use client";

import { useState } from "react";

const PILLARS = [
  {
    num: "01",
    title: "Research-Verified",
    desc: "Every claim links to peer-reviewed studies. We separate evidence from marketing language on every single page.",
    detail: "We grade evidence using four tiers: RCT meta-analyses, individual RCTs, observational data, and mechanistic research. A claim that appears only in animal studies is labelled accordingly — not promoted as settled science.",
  },
  {
    num: "02",
    title: "Editorially Independent",
    desc: "No brand pays for placement. Every score is determined by our methodology, not commercial relationships.",
    detail: "We decline review samples and sponsored content. Products are purchased on the open market at retail price, identically to how a consumer would buy them. Affiliate links are disclosed on every page — they never influence scores.",
  },
  {
    num: "03",
    title: "Ingredient-First",
    desc: "We review ingredients before products, not the other way around.",
    detail: "Each ingredient in our library is profiled for mechanism, effective dose from clinical data, and known interactions before any product containing it is rated. A product can only score well if its ingredients are dosed at levels shown to work.",
  },
  {
    num: "04",
    title: "Goal-Matched",
    desc: "Content is organised by your health goal, not by category or brand.",
    detail: "Rather than grouping by product type, every review, ingredient page, and research brief links to the goals it actually supports. A creatine review surfaces in Muscle Gain, Recovery, and Cognitive Performance — wherever the evidence points.",
  },
];

export default function TrustPillars() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ paddingTop: 56 }}>
      {PILLARS.map((pillar, i) => {
        const isActive = active === i;
        const panelId = `trust-pillar-panel-${i}`;
        return (
          <div key={pillar.num}>
            <button
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              aria-controls={panelId}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "24px 0",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              {/* Number */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 13,
                  color: isActive ? "#4A9A78" : "rgba(255,255,255,.55)",
                  flexShrink: 0,
                  marginTop: 4,
                  transition: "color 280ms ease",
                }}
              >
                {pillar.num}
              </span>

              {/* Text block */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      fontSize: isActive ? 26 : 22,
                      fontWeight: 500,
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,.60)",
                      margin: 0,
                      letterSpacing: "-.01em",
                      transition: "font-size 280ms ease, color 280ms ease",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Expand icon */}
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: `1.5px solid ${isActive ? "#4A9A78" : "rgba(255,255,255,.40)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "border-color 280ms ease, transform 280ms ease",
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <line x1="5.5" y1="0" x2="5.5" y2="11" stroke={isActive ? "#4A9A78" : "rgba(255,255,255,.60)"} strokeWidth="1.5" />
                      <line x1="0" y1="5.5" x2="11" y2="5.5" stroke={isActive ? "#4A9A78" : "rgba(255,255,255,.60)"} strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>

                {/* Expandable content — grid-template-rows avoids max-height thrash */}
                <div
                  id={panelId}
                  role="region"
                  aria-label={pillar.title}
                  style={{
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    opacity: isActive ? 1 : 0,
                    transition: "grid-template-rows 380ms cubic-bezier(0.16,1,0.3,1), opacity 280ms cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,.80)",
                        margin: "10px 0 0",
                      }}
                    >
                      {pillar.desc}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,.65)",
                        margin: "10px 0 0",
                      }}
                    >
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* Divider */}
            {i < PILLARS.length - 1 && (
              <div
                style={{
                  height: 1,
                  background: isActive
                    ? "linear-gradient(90deg, #4A9A78 0%, rgba(255,255,255,.08) 60%)"
                    : "rgba(255,255,255,.1)",
                  transition: "background 280ms ease",
                }}
              />
            )}
          </div>
        );
      })}

      {/* CTA */}
      <div style={{ marginTop: 36 }}>
        <a
          href="/methodology"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#4A9A78",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Read our full methodology
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
