"use client";

import { useEffect, useState } from "react";
import type { ScoringRubric } from "@/lib/types";
import { PILLAR_META, PILLAR_ORDER, pillarBarColor, pillarBarPercent, pillarScoreColor } from "@/lib/scoring";

interface Props {
  rubric: ScoringRubric;
  reviewCode?: string;
}

export default function ScoreBreakdown({ rubric, reviewCode }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const totalDeductions = rubric.flags
    .filter((f) => f.type === "red" && f.deduction != null)
    .reduce((sum, f) => sum + (f.deduction ?? 0), 0);

  const weightedRaw = rubric.pillars.reduce((sum, p) => {
    return sum + p.score * PILLAR_META[p.pillar].weight;
  }, 0);

  return (
    <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", backgroundColor: "#F6F8F6" }}>

      {/* Header */}
      <div style={{ padding: "16px 20px", backgroundColor: "#17211C", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 4 }}>
            Fitlab Scoring Protocol · FSP v2.1
          </p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
            Score Breakdown
          </p>
        </div>
        {reviewCode && (
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#3F4B43" }}>{reviewCode}</span>
        )}
      </div>

      {/* Pillar rows */}
      <div style={{ padding: "4px 0" }}>
        {PILLAR_ORDER.map((key, i) => {
          const pillar = rubric.pillars.find((p) => p.pillar === key);
          if (!pillar) return null;
          const meta = PILLAR_META[key];
          const color = pillarBarColor(pillar.score);
          const pct = pillarBarPercent(pillar.score);
          const scoreColor = pillarScoreColor(pillar.score);
          const isLast = i === PILLAR_ORDER.length - 1;

          return (
            <div
              key={key}
              style={{
                padding: "18px 20px 16px",
                borderBottom: isLast ? "none" : "1px solid #F2F8F4",
                backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF",
              }}
            >
              {/* Label row */}
              <div className="layout-pillar-label">
                <div className="pillar-label-left">
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259", minWidth: 20 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D2926" }}>
                    {meta.label}
                  </span>
                  <span className="pillar-weight-tag" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259" }}>
                    {Math.round(meta.weight * 100)}% weight
                  </span>
                </div>
                <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 17, fontWeight: 700, color: scoreColor, lineHeight: 1, flexShrink: 0 }}>
                  {pillar.score.toFixed(1)}
                  <span style={{ fontSize: 11, fontWeight: 400, color: `${scoreColor}88` }}>/10</span>
                </span>
              </div>

              {/* Bar */}
              <div style={{ height: 5, backgroundColor: "#E8E0D0", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: color,
                    borderRadius: 3,
                    transform: `scaleX(${mounted ? pct / 100 : 0})`,
                    transformOrigin: "left",
                    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>

              {/* Notes */}
              <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
                {pillar.notes}
              </p>
            </div>
          );
        })}
      </div>

      {/* Calculation footer */}
      <div style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4", padding: "16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770", letterSpacing: "0.1em" }}>Weighted total</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#3F4B43" }}>{weightedRaw.toFixed(2)}</span>
          </div>
          {totalDeductions > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8B3A2C", letterSpacing: "0.1em" }}>Red flag deductions</span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#8B3A2C" }}>−{totalDeductions.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div style={{ height: 1, backgroundColor: "#E4E8E5", marginBottom: 14 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 3 }}>
              FSP Composite Score
            </p>
            <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
              Rounds to editorial score below
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 28, fontWeight: 800, color: "#17211C", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {rubric.compositeScore.toFixed(1)}
            </span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#6B7770", marginLeft: 3 }}>/10</span>
          </div>
        </div>
      </div>

      {/* Methodology link */}
      <div style={{ borderTop: "1px solid #E4E8E5", padding: "10px 20px", backgroundColor: "#FFFFFF" }}>
        <a href="/methodology" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#0F7A5A", textDecoration: "none" }}>
          How we score → Full methodology
        </a>
      </div>
    </div>
  );
}
