"use client";
import { useState } from "react";

interface Props { mifflinBmr: number; weightKg: number; onUseKatch: (bmr: number) => void; animDelay: number; }

export default function FormulaSelector({ mifflinBmr, weightKg, onUseKatch, animDelay }: Props) {
  const [open, setOpen] = useState(false);
  const [bf, setBf] = useState(20);
  const [using, setUsing] = useState(false);

  const leanMass = weightKg * (1 - bf / 100);
  const katchBmr = Math.round(370 + 21.6 * leanMass);

  function applyKatch() {
    setUsing(true);
    onUseKatch(katchBmr);
  }

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, marginBottom:16, overflow:"hidden" }}>
        <button onClick={() => setOpen(o => !o)} style={{
          width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center",
          padding:"18px 24px", border:"none", background:"transparent", cursor:"pointer",
          fontFamily:"var(--font-dm-sans),sans-serif",
        }}>
          <div style={{ textAlign:"left" }}>
            <div style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:2 }}>Formula Accuracy</div>
            <div style={{ fontSize:14, fontWeight:600, color:"#1A1714" }}>
              Using Mifflin-St Jeor — know your body fat %? Get a more accurate result.
            </div>
          </div>
          <span style={{ color:"#C4622D", fontSize:20, fontWeight:300, flexShrink:0, marginLeft:12 }}>{open ? "−" : "+"}</span>
        </button>

        {open && (
          <div style={{ padding:"0 24px 24px", borderTop:"1px solid #EDE8DF" }}>
            <div style={{ marginTop:16, marginBottom:16 }}>
              <label style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.08em", textTransform:"uppercase" as const, display:"block", marginBottom:8 }}>
                Body Fat %: {bf}%
              </label>
              <input type="range" min={5} max={50} step={1} value={bf}
                onChange={e => setBf(Number(e.target.value))}
                style={{ width:"100%", accentColor:"#C4622D" }} />
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#8A8480", marginTop:4 }}>
                <span>5% (very lean)</span><span>50% (high)</span>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              {[
                { label:"Mifflin-St Jeor", val:mifflinBmr, desc:"General formula", active:!using },
                { label:"Katch-McArdle",   val:katchBmr,   desc:"Best for muscular builds", active:using },
              ].map(f => (
                <div key={f.label} style={{
                  border: f.active ? "2px solid #C4622D" : "1px solid #D4C9B8",
                  background: f.active ? "#FDF0E8" : "#fff",
                  borderRadius:10, padding:"14px 16px", textAlign:"center",
                }}>
                  <div style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.06em", marginBottom:4 }}>{f.label}</div>
                  <div style={{ fontSize:24, fontWeight:800, color:"#1A1714", fontVariantNumeric:"tabular-nums" }}>{f.val.toLocaleString()}</div>
                  <div style={{ fontSize:11, color:"#8A8480", marginTop:3 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            {!using ? (
              <button onClick={applyKatch} style={{
                width:"100%", padding:"11px 0", borderRadius:10, border:"none",
                background:"#C4622D", color:"#FDFAF4", fontSize:14, fontWeight:700,
                cursor:"pointer", fontFamily:"var(--font-dm-sans),sans-serif",
              }}>Use Katch-McArdle Result →</button>
            ) : (
              <div style={{ background:"#E6F4F1", border:"1px solid #10B981", borderRadius:8, padding:"10px 14px", textAlign:"center" }}>
                <p style={{ color:"#065F46", fontSize:13, fontWeight:600, margin:0 }}>✓ Katch-McArdle applied to all results</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
