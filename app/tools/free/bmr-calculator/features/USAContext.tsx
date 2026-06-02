"use client";
import { useEffect, useState } from "react";

interface Props { tdee: number; animDelay: number; }

const MEALS = [
  { meal:"Breakfast", pct:0.25, foods:"Eggs, toast, and coffee" },
  { meal:"Lunch",     pct:0.35, foods:"Sandwich or salad with protein" },
  { meal:"Snack",     pct:0.10, foods:"Handful of almonds or fruit" },
  { meal:"Dinner",    pct:0.30, foods:"Chicken, veggies, and potatoes" },
];

export default function USAContext({ tdee, animDelay }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("America") || navigator.language.startsWith("en-US")) {
        setShow(true);
      }
    } catch {}
  }, []);

  if (!show) return null;

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>What This Looks Like in a Day</div>
        <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:4 }}>
          Based on a typical American meal pattern
        </h2>
        <p style={{ fontSize:13, color:"#6B7280", marginBottom:16 }}>Your {tdee.toLocaleString()} kcal TDEE, distributed across a traditional day:</p>

        <div style={{ border:"1px solid #D4C9B8", borderRadius:12, overflow:"hidden" }}>
          {MEALS.map((m, i) => {
            const kcal = Math.round(tdee * m.pct);
            return (
              <div key={m.meal} style={{
                display:"grid", gridTemplateColumns:"100px 1fr auto",
                gap:12, padding:"14px 16px", alignItems:"center",
                borderBottom: i < MEALS.length-1 ? "1px solid #EDE8DF" : "none",
                background: i % 2 === 0 ? "#FDFAF4" : "#fff",
              }}>
                <div>
                  <div style={{ fontSize:12, fontWeight:700, color:"#1A1714" }}>{m.meal}</div>
                  <div style={{ fontSize:10, color:"#8A8480" }}>~{Math.round(m.pct*100)}%</div>
                </div>
                <div style={{ fontSize:12, color:"#5C5650" }}>{m.foods}</div>
                <div style={{ fontSize:14, fontWeight:700, color:"#C4622D", fontVariantNumeric:"tabular-nums", whiteSpace:"nowrap" }}>
                  {kcal.toLocaleString()} kcal
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize:11, color:"#8A8480", marginTop:10, marginBottom:0 }}>
          Approximate values. Actual kcal varies by portion and preparation.
        </p>
      </div>
    </div>
  );
}
