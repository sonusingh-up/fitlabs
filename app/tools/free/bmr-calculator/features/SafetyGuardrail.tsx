"use client";
interface Props { fatLoss: number; tdee: number; gender: "male"|"female"; animDelay: number; }

export default function SafetyGuardrail({ fatLoss, tdee, gender, animDelay }: Props) {
  const minSafe = gender === "female" ? 1200 : 1500;
  if (fatLoss >= minSafe) return null;
  const safeDeficit = tdee - minSafe;
  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FEF2F2", border:"2px solid #EF4444", borderRadius:16, padding:"20px 24px", marginBottom:16 }}>
        <div style={{ fontSize:11, fontWeight:700, color:"#EF4444", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:8 }}>
          ⛔ Safety Check
        </div>
        <p style={{ fontSize:14, color:"#17211C", marginBottom:8, fontWeight:600 }}>
          Your fat loss target ({fatLoss.toLocaleString()} kcal) is below the safe minimum for {gender === "female" ? "women" : "men"} ({minSafe.toLocaleString()} kcal).
        </p>
        <p style={{ fontSize:13, color:"#3F4B43", marginBottom:10, lineHeight:1.6 }}>
          Eating below this level risks muscle loss, nutrient deficiencies, and metabolic slowdown.
        </p>
        <div style={{ background:"#fff", border:"1px solid #EF4444", borderRadius:8, padding:"10px 14px" }}>
          <p style={{ fontSize:13, color:"#17211C", margin:0 }}>
            ✓ We&apos;ve adjusted your recommended intake to{" "}
            <strong style={{ color:"#0F7A5A" }}>{minSafe.toLocaleString()} kcal/day</strong>{" "}
            with a safer −{safeDeficit.toLocaleString()} kcal deficit.
          </p>
        </div>
      </div>
    </div>
  );
}
