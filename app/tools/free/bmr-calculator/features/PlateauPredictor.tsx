"use client";

interface Props { bmr: number; weightKg: number; unit: "imperial"|"metric"; animDelay: number; }

const displayW = (kg: number, unit: string) =>
  unit === "imperial" ? `${(kg / 0.453592).toFixed(1)} lbs` : `${kg.toFixed(1)} kg`;

export default function PlateauPredictor({ bmr, weightKg, unit, animDelay }: Props) {
  const weeks = [
    { label: "Now",     bmrVal: bmr,                 delta: "Baseline", pct: "" },
    { label: "Week 4",  bmrVal: Math.round(bmr*0.97), delta: "−3%",     pct: "-3%" },
    { label: "Week 8",  bmrVal: Math.round(bmr*0.94), delta: "−6%",     pct: "-6%" },
    { label: "Week 12", bmrVal: Math.round(bmr*0.91), delta: "−9%",     pct: "-9%" },
    { label: "Week 16", bmrVal: Math.round(bmr*0.88), delta: "−12%",    pct: "-12%" },
  ];
  const checkWeights = [weightKg-3, weightKg-6, weightKg-9].map(w => displayW(Math.max(w, weightKg*0.6), unit));

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>
          Plateau Predictor
        </div>
        <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:6 }}>
          Your body will adapt. Here&apos;s when.
        </h2>
        <p style={{ fontSize:13, color:"#6B7280", marginBottom:16, lineHeight:1.6 }}>
          Sustained calorie restriction causes your BMR to drop — adaptive thermogenesis. Most people hit a plateau they never anticipated.
        </p>

        {/* Timeline strip */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:8, marginBottom:16 }}>
          {weeks.map(w => (
            <div key={w.label} style={{
              background: w.label === "Now" ? "#1A1714" : "#fff",
              border:"1px solid #D4C9B8", borderRadius:10, padding:"12px 8px", textAlign:"center"
            }}>
              <div style={{ fontSize:10, fontWeight:700, color: w.label==="Now" ? "#8A8480" : "#6B7280", marginBottom:5, letterSpacing:"0.06em" }}>
                {w.label}
              </div>
              <div style={{ fontSize:15, fontWeight:800, fontVariantNumeric:"tabular-nums", color: w.label==="Now" ? "#F2EBD9" : "#1A1714", lineHeight:1 }}>
                {w.bmrVal.toLocaleString()}
              </div>
              <div style={{ fontSize:10, color: w.label==="Now" ? "#8A8480" : "#C4622D", marginTop:4, fontWeight:600 }}>
                {w.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div style={{ background:"#FEF9EE", border:"1px solid #F59E0B", borderRadius:10, padding:"12px 16px" }}>
          <p style={{ fontSize:13, color:"#92400E", margin:0, lineHeight:1.6 }}>
            ⟳ <strong>Recalculate your BMR at:</strong> {checkWeights.join(", ")} to stay accurate and avoid stalling.
          </p>
        </div>
      </div>
    </div>
  );
}
