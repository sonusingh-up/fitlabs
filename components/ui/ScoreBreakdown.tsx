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
    <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", backgroundColor: "#F8F2E4" }}>

      {/* Header */}
      <div style={{ padding: "16px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>
            Fitlab Scoring Protocol · FSP v2.1
          </p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9" }}>
            Score Breakdown
          </p>
        </div>
        {reviewCode && (
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#5C5650" }}>{reviewCode}</span>
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
                borderBottom: isLast ? "none" : "1px solid #EDE8DF",
                backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9",
              }}
            >
              {/* Label row */}
              <div className="layout-pillar-label">
                <div className="pillar-label-left">
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", minWidth: 20 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D2926" }}>
                    {meta.label}
                  </span>
                  <span className="pillar-weight-tag" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>
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
                    width: mounted ? `${pct}%` : "0%",
                    backgroundColor: color,
                    borderRadius: 3,
                    transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>

              {/* Notes */}
              <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
                {pillar.notes}
              </p>
            </div>
          );
        })}
      </div>

      {/* Calculation footer */}
      <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", padding: "16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.1em" }}>Weighted total</span>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#5C5650" }}>{weightedRaw.toFixed(2)}</span>
          </div>
          {totalDeductions > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8B3A2C", letterSpacing: "0.1em" }}>Red flag deductions</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#8B3A2C" }}>−{totalDeductions.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div style={{ height: 1, backgroundColor: "#D4C9B8", marginBottom: 14 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 3 }}>
              FSP Composite Score
            </p>
            <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
              Rounds to editorial score below
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 28, fontWeight: 800, color: "#1A1714", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {rubric.compositeScore.toFixed(1)}
            </span>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#8A8480", marginLeft: 3 }}>/10</span>
          </div>
        </div>
      </div>

      {/* Methodology link */}
      <div style={{ borderTop: "1px solid #D4C9B8", padding: "10px 20px", backgroundColor: "#F2EBD9" }}>
        <a href="/methodology" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#C4622D", textDecoration: "none" }}>
          How we score → Full methodology
        </a>
      </div>
    </div>
  );
}
