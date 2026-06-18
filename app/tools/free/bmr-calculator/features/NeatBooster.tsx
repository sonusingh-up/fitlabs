"use client";
import { useState } from "react";

interface Props {
  baseTdee: number;
  onAdjust: (bonus: number) => void;
  animDelay: number;
}

const NEAT_OPTIONS = [
  { icon: "🚶", label: "Walk / cycle to commute", kcal: 100 },
  { icon: "🧍", label: "Standing desk", kcal: 80 },
  { icon: "🏗️", label: "Physical labor job", kcal: 200 },
  { icon: "💃", label: "Naturally fidgety / restless", kcal: 70 },
];

export default function NeatBooster({ baseTdee, onAdjust, animDelay }: Props) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    const next = new Set(selected);
    if (next.has(i)) next.delete(i); else next.add(i);
    setSelected(next);
    const bonus = [...next].reduce((s, idx) => s + NEAT_OPTIONS[idx].kcal, 0);
    onAdjust(bonus);
  }

  const bonus = [...selected].reduce((s, i) => s + NEAT_OPTIONS[i].kcal, 0);
  const adjTdee = baseTdee + bonus;

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#586259", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>
          Refine Your TDEE
        </div>
        <h2 style={{ fontFamily:"var(--font-newsreader),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:6 }}>
          Your activity level might be underestimated.
        </h2>
        <p style={{ fontSize:13, color:"#586259", marginBottom:16, lineHeight:1.6 }}>
          NEAT (Non-Exercise Activity Thermogenesis) — daily movement outside structured exercise — can add 200–500 kcal to your true daily burn. Select all that apply:
        </p>

        <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:16 }}>
          {NEAT_OPTIONS.map((opt, i) => (
            <button key={i} onClick={() => toggle(i)} style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"8px 14px", borderRadius:24,
              border: selected.has(i) ? "2px solid #C4622D" : "1px solid #D4C9B8",
              background: selected.has(i) ? "#FDF0E8" : "#fff",
              color: selected.has(i) ? "#C4622D" : "#5C5650",
              fontFamily:"var(--font-hanken),sans-serif",
              fontSize:13, fontWeight:600, cursor:"pointer", transition:"all 0.15s",
            }}>
              <span>{opt.icon}</span>{opt.label} <span style={{ color:"#8A8480", fontSize:11 }}>(+{opt.kcal})</span>
            </button>
          ))}
        </div>

        {bonus > 0 && (
          <div style={{ background:"#EDE8DF", borderRadius:10, padding:"12px 16px" }}>
            <p style={{ fontSize:14, color:"#1A1714", margin:0, fontWeight:600 }}>
              Adjusted TDEE: <span style={{ color:"#8A8480", textDecoration:"line-through" }}>{baseTdee.toLocaleString()}</span>{" "}
              → <span style={{ color:"#C4622D" }}>{adjTdee.toLocaleString()} kcal/day</span>{" "}
              <span style={{ fontSize:12, color:"#5C5650" }}>(+{bonus} kcal from NEAT)</span>
            </p>
          </div>
        )}
        <p style={{ fontSize:11, color:"#8A8480", marginTop:10, marginBottom:0 }}>
          These are estimates. Use as a directional adjustment only.
        </p>
      </div>
    </div>
  );
}
