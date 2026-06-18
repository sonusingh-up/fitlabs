"use client";
import { useState } from "react";

interface Props {
  tdee: number; weightKg: number; unit: "imperial" | "metric"; animDelay: number;
}

const S = {
  label: { display:"block", fontSize:11, fontWeight:700, color:"#586259", letterSpacing:"0.08em", textTransform:"uppercase" as const, marginBottom:6 },
  input: { width:"100%", padding:"10px 13px", borderRadius:8, border:"1px solid #D4C9B8", background:"#FDFAF4", fontSize:14, color:"#1A1714", fontFamily:"var(--font-hanken),sans-serif", boxSizing:"border-box" as const },
  err: { color:"#EF4444", fontSize:12, marginTop:4 },
};

export default function WeightTimeline({ tdee, weightKg, unit, animDelay }: Props) {
  const [goalW, setGoalW] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [result, setResult] = useState<null | { status:"ok"|"warn"|"danger"; realisticDate:string; reqCals:number; reqDeficit:number; milestones:number[] }>(null);
  const [err, setErr] = useState<{goalW?:string; date?:string}>({});

  const fatLoss = tdee - 500;
  const todayMs = Date.now();
  const minDate = new Date(todayMs + 30*86400000).toISOString().split("T")[0];
  const maxDate = new Date(todayMs + 730*86400000).toISOString().split("T")[0];

  function calcTimeline() {
    const errs: {goalW?:string; date?:string} = {};
    const gw = parseFloat(goalW);
    const gwKg = unit === "imperial" ? gw * 0.453592 : gw;
    if (!goalW || isNaN(gwKg) || gwKg >= weightKg) errs.goalW = "Goal must be less than current weight";
    if (gwKg < weightKg * 0.7) errs.goalW = "Goal can't exceed 30% below current weight";
    if (!targetDate) errs.date = "Please pick a target date";
    setErr(errs);
    if (Object.keys(errs).length) return;

    const weightToLose = weightKg - gwKg;
    const totalDeficit = weightToLose * 7700;
    const daysNeeded = Math.round(totalDeficit / 500);
    const realisticDate = new Date(todayMs + daysNeeded * 86400000).toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" });

    const targetDays = (new Date(targetDate).getTime() - todayMs) / 86400000;
    const reqDeficit = Math.round(totalDeficit / targetDays);
    const reqCals = tdee - reqDeficit;

    const status = reqDeficit <= 750 ? "ok" : reqDeficit <= 1000 ? "warn" : "danger";
    const milestones = [4,8,12].map(w => Math.max(gwKg, weightKg - (500 * w * 7 / 7700)));

    setResult({ status, realisticDate, reqCals, reqDeficit, milestones });
  }

  const displayW = (kg: number) => unit === "imperial" ? `${(kg/0.453592).toFixed(1)} lbs` : `${kg.toFixed(1)} kg`;

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>
        <div style={S.label}>Weight Loss Timeline</div>
        <h2 style={{ fontFamily:"var(--font-newsreader),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:16 }}>When will you reach your goal?</h2>

        <div className="timeline-inputs">
          <div>
            <label style={S.label}>Goal Weight ({unit === "imperial" ? "lbs" : "kg"})</label>
            <input type="number" value={goalW} onChange={e => setGoalW(e.target.value)}
              placeholder={unit === "imperial" ? `${(weightKg/0.453592 - 11).toFixed(0)}` : `${(weightKg-5).toFixed(0)}`}
              style={{ ...S.input, borderColor: err.goalW ? "#EF4444" : "#D4C9B8" }} />
            {err.goalW && <p style={S.err}>{err.goalW}</p>}
          </div>
          <div>
            <label style={S.label}>Target Date</label>
            <input type="date" value={targetDate} min={minDate} max={maxDate}
              onChange={e => setTargetDate(e.target.value)}
              style={{ ...S.input, borderColor: err.date ? "#EF4444" : "#D4C9B8" }} />
            {err.date && <p style={S.err}>{err.date}</p>}
          </div>
        </div>

        <button onClick={calcTimeline} style={{
          width:"100%", padding:"11px 0", borderRadius:10, border:"none",
          background:"#C4622D", color:"#FDFAF4", fontSize:14, fontWeight:700,
          cursor:"pointer", fontFamily:"var(--font-hanken),sans-serif", marginBottom: result ? 16 : 0,
        }}>Calculate Timeline →</button>

        {result && (
          <div style={{ background:"#1A1714", borderRadius:12, padding:"18px 20px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <span style={{
                padding:"3px 10px", borderRadius:20, fontSize:12, fontWeight:700,
                background: result.status==="ok" ? "#10B981" : result.status==="warn" ? "#F59E0B" : "#EF4444",
                color:"#fff",
              }}>
                {result.status==="ok" ? "✓ Realistic" : result.status==="warn" ? "⚠ Aggressive" : "✗ Not Recommended"}
              </span>
            </div>
            {result.status === "ok" && (
              <p style={{ color:"#F2EBD9", fontSize:14 }}>At −500 kcal/day you'll reach your goal by <strong>{result.realisticDate}</strong>.</p>
            )}
            {result.status === "warn" && (
              <p style={{ color:"#F2EBD9", fontSize:14 }}>To hit your date you'd need to eat only <strong style={{ color:"#F59E0B" }}>{result.reqCals.toLocaleString()} kcal/day</strong> (−{result.reqDeficit} kcal deficit). This is aggressive but achievable with high protein intake.</p>
            )}
            {result.status === "danger" && (
              <>
                <p style={{ color:"#F2EBD9", fontSize:14, marginBottom:8 }}>That timeline requires a −{result.reqDeficit} kcal/day deficit — unsafe and likely to cause muscle loss.</p>
                <p style={{ color:"#F59E0B", fontSize:13 }}>✓ At −500 kcal/day, a safer target date is <strong>{result.realisticDate}</strong>.</p>
              </>
            )}
            {/* Milestones */}
            <div className="timeline-milestones">
              {["Start", "4 wks", "8 wks", "12 wks"].map((label, i) => (
                <div key={label} style={{ background:"rgba(255,255,255,0.07)", borderRadius:8, padding:"8px 6px", textAlign:"center" }}>
                  <div style={{ fontSize:10, color:"#8A8480", marginBottom:3 }}>{label}</div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#F2EBD9", fontVariantNumeric:"tabular-nums" }}>
                    {i === 0 ? displayW(weightKg) : displayW(result.milestones[i-1])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
