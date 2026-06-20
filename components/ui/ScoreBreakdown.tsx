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
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E4E8E5" }}>

      {/* Header — clean gradient */}
      <div style={{ padding: "20px 24px", background: "linear-gradient(135deg, #0F7A5A 0%, #17806A 100%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 2, letterSpacing: "0.06em" }}>
            Fitlab Scoring Protocol · FSP v2.1
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 17, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
            Score Breakdown
          </p>
        </div>
        {reviewCode && (
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{reviewCode}</span>
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

        return (
          <div key={key} style={{ padding: "20px 24px", borderBottom: "1px solid #F0F3F1", backgroundColor: "#FFFFFF" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, color: "#9CA3AF", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 600, color: "#17211C" }}>{meta.label}</span>
                <span style={{ fontSize: 11, color: "#9CA3AF" }}>{Math.round(meta.weight * 100)}%</span>
              </div>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, fontWeight: 800, color: scoreColor }}>{pillar.score.toFixed(1)}</span>
            </div>
            <div style={{ height: 6, backgroundColor: "#F0F3F1", borderRadius: 3, overflow: "hidden", marginBottom: 10 }}>
              <div style={{ height: "100%", backgroundColor: color, borderRadius: 3, transform: `scaleX(${mounted ? pct / 100 : 0})`, transformOrigin: "left", transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: `${i * 80}ms` }} />
            </div>
            <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.55, margin: 0 }}>{pillar.notes}</p>
          </div>
        );
      })}

      {/* Footer — composite score */}
      <div style={{ padding: "20px 24px", backgroundColor: "#F8FAF8", borderTop: "1px solid #E4E8E5" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6B7770", marginBottom: 4 }}>
          <span>Weighted total</span><span style={{ fontWeight: 600, color: "#17211C" }}>{weightedRaw.toFixed(2)}</span>
        </div>
        {totalDeductions > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#DC2626", marginBottom: 4 }}>
            <span>Red flag deductions</span><span style={{ fontWeight: 600 }}>−{totalDeductions.toFixed(1)}</span>
          </div>
        )}
        <div style={{ height: 1, backgroundColor: "#E4E8E5", margin: "12px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>FSP COMPOSITE</p>
            <a href="/methodology" style={{ fontSize: 12, color: "#0F7A5A", textDecoration: "none", fontWeight: 600 }}>How we score →</a>
          </div>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 32, fontWeight: 800, color: "#17211C", lineHeight: 1 }}>
            {rubric.compositeScore.toFixed(1)}<span style={{ fontSize: 14, color: "#9CA3AF", fontWeight: 500 }}>/10</span>
          </span>
        </div>
      </div>
    </div>
  );
}
