"use client";
import { useState } from "react";

interface Props { goalCals: number; animDelay: number; }
type Mode = "3" | "4" | "if";

const CONFIGS: Record<Mode, { label: string; splits: number[]; labels: string[] }> = {
  "3": { label:"3 Meals",        splits:[0.33,0.34,0.33], labels:["Breakfast","Lunch","Dinner"] },
  "4": { label:"4 Meals",        splits:[0.25,0.30,0.25,0.20], labels:["Breakfast","Lunch","Snack","Dinner"] },
  "if": { label:"IF 16:8",       splits:[0.35,0.35,0.30], labels:["12:00 PM – Meal 1","3:00 PM – Meal 2","7:00 PM – Meal 3"] },
};

export default function MealDistribution({ goalCals, animDelay }: Props) {
  const [mode, setMode] = useState<Mode>("3");
  const cfg = CONFIGS[mode];

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#586259", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>Meal Distribution</div>
        <h2 style={{ fontFamily:"var(--font-newsreader),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:16 }}>Spread your calories across your day.</h2>

        {/* Mode selector */}
        <div style={{ display:"flex", background:"#EDE8DF", borderRadius:10, padding:4, gap:4, marginBottom:20, width:"fit-content" }}>
          {(["3","4","if"] as Mode[]).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              padding:"7px 16px", borderRadius:8, border:"none", cursor:"pointer",
              fontFamily:"var(--font-hanken),sans-serif", fontSize:13, fontWeight:600,
              background: mode === m ? "#1A1714" : "transparent",
              color: mode === m ? "#F2EBD9" : "#5C5650",
              transition:"all 0.15s",
            }}>{CONFIGS[m].label}</button>
          ))}
        </div>

        {/* Meal rows */}
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {cfg.labels.map((label, i) => {
            const kcal = Math.round(goalCals * cfg.splits[i]);
            const pct = cfg.splits[i] * 100;
            return (
              <div key={label} style={{ display:"grid", gridTemplateColumns:"140px 1fr 70px", gap:12, alignItems:"center" }}>
                <span style={{ fontSize:13, fontWeight:600, color:"#1A1714" }}>{label}</span>
                <div style={{ background:"#EDE8DF", borderRadius:20, height:8, overflow:"hidden" }}>
                  <div style={{ width:`${pct}%`, height:"100%", background:"#C4622D", borderRadius:20, transition:"width 0.3s" }} />
                </div>
                <span style={{ fontSize:13, fontWeight:700, color:"#1A1714", textAlign:"right", fontVariantNumeric:"tabular-nums" }}>
                  {kcal.toLocaleString()} kcal
                </span>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize:11, color:"#8A8480", marginTop:14, marginBottom:0 }}>Based on your fat loss target of {goalCals.toLocaleString()} kcal/day.</p>
      </div>
    </div>
  );
}
