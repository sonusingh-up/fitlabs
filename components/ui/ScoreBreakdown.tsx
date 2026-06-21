"use client";

import { useEffect, useState } from "react";
import type { ScoringRubric } from "@/lib/types";
import { PILLAR_META, PILLAR_ORDER, pillarBarColor, pillarBarPercent, pillarScoreColor } from "@/lib/scoring";
import { ChevronDown } from "lucide-react";

interface Props {
  rubric: ScoringRubric;
  reviewCode?: string;
}

export default function ScoreBreakdown({ rubric, reviewCode }: Props) {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const totalDeductions = rubric.flags
    .filter((f) => f.type === "red" && f.deduction != null)
    .reduce((sum, f) => sum + (f.deduction ?? 0), 0);

  const weightedRaw = rubric.pillars.reduce((sum, p) => {
    return sum + p.score * PILLAR_META[p.pillar].weight;
  }, 0);

  return (
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E4E8E5" }}>

      {/* Header */}
      <div style={{ padding: "18px 24px", background: "linear-gradient(135deg, #17211C 0%, #1A2E24 100%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(255,255,255,0.35)", marginBottom: 4, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Fitlab Scoring Protocol · FSP v2.1
          </p>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>
            Score Breakdown
          </p>
        </div>
        {reviewCode && (
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{reviewCode}</span>
        )}
      </div>

      {/* Pillar rows */}
      {PILLAR_ORDER.map((key, i) => {
        const pillar = rubric.pillars.find((p) => p.pillar === key);
        if (!pillar) return null;
        const meta = PILLAR_META[key];
        const color = pillarBarColor(pillar.score);
        const pct = pillarBarPercent(pillar.score);
        const scoreColor = pillarScoreColor(pillar.score);
        const isOpen = expanded === key;

        return (
          <div key={key} style={{ borderBottom: "1px solid #F0F3F1", backgroundColor: "#FFFFFF" }}>
            <button
              onClick={() => setExpanded(isOpen ? null : key)}
              style={{
                width: "100%",
                padding: "18px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                display: "block",
              }}
              aria-expanded={isOpen}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#C4C9C5", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 14, fontWeight: 600, color: "#17211C" }}>{meta.label}</span>
                  <span style={{ fontSize: 10, color: "#C4C9C5", fontFamily: "var(--font-jetbrains), monospace" }}>{Math.round(meta.weight * 100)}%</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 800, color: scoreColor }}>{pillar.score.toFixed(1)}</span>
                  <ChevronDown
                    size={14}
                    style={{
                      color: "#C4C9C5",
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>
              <div style={{ height: 4, backgroundColor: "#F0F3F1", borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  backgroundColor: color,
                  borderRadius: 2,
                  transform: `scaleX(${mounted ? pct / 100 : 0})`,
                  transformOrigin: "left",
                  transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 80}ms`,
                }} />
              </div>
            </button>
            <div style={{
              maxHeight: isOpen ? 300 : 0,
              overflow: "hidden",
              transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}>
              <p style={{
                padding: "0 24px 18px",
                fontSize: 13,
                color: "#6B7770",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {pillar.notes}
              </p>
            </div>
          </div>
        );
      })}

      {/* Footer — composite score */}
      <div style={{ padding: "18px 24px", backgroundColor: "#FAFBFA", borderTop: "1px solid #E4E8E5" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6B7770", marginBottom: 4 }}>
          <span>Weighted total</span><span style={{ fontWeight: 600, color: "#17211C" }}>{weightedRaw.toFixed(2)}</span>
        </div>
        {totalDeductions > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#DC2626", marginBottom: 4 }}>
            <span>Red flag deductions</span><span style={{ fontWeight: 600 }}>-{totalDeductions.toFixed(1)}</span>
          </div>
        )}
        <div style={{ height: 1, backgroundColor: "#E4E8E5", margin: "12px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#C4C9C5", marginBottom: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>FSP Composite</p>
            <a href="/methodology" style={{ fontSize: 12, color: "#0F7A5A", textDecoration: "none", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>How we score →</a>
          </div>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 800, color: "#17211C", lineHeight: 1 }}>
            {rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 14, color: "#C4C9C5", fontWeight: 500 }}>/10</span>
          </span>
        </div>
      </div>
    </div>
  );
}
