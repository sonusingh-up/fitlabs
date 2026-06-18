"use client";
import { useState } from "react";
import WeightTimeline  from "./features/WeightTimeline";
import PlateauPredictor from "./features/PlateauPredictor";
import SafetyGuardrail from "./features/SafetyGuardrail";
import NeatBooster     from "./features/NeatBooster";
import MealDistribution from "./features/MealDistribution";
import FormulaSelector  from "./features/FormulaSelector";
import MealContext      from "./features/MealContext";
import ShareableCard    from "./features/ShareableCard";

type Unit   = "imperial" | "metric";
type Gender = "male" | "female";

interface Inputs {
  gender: Gender; age: string;
  weightLbs: string; weightKg: string;
  heightFt: string; heightIn: string; heightCm: string;
  activity: string;
}
interface Results {
  bmr: number; tdee: number; activityLabel: string;
  cut: number; bulk: number;
  weightKg: number; heightCm: number; age: number; gender: Gender;
}

const ACTIVITY = [
  { value:"1.2",   label:"Sedentary",        desc:"Desk job, little or no exercise" },
  { value:"1.375", label:"Lightly Active",    desc:"Light exercise 1–3 days/week" },
  { value:"1.55",  label:"Moderately Active", desc:"Moderate exercise 3–5 days/week" },
  { value:"1.725", label:"Very Active",        desc:"Hard exercise 6–7 days/week" },
  { value:"1.9",   label:"Extra Active",       desc:"Very hard exercise + physical job" },
];

function calcBMR(g: Gender, wKg: number, hCm: number, age: number) {
  return g === "male" ? 10*wKg + 6.25*hCm - 5*age + 5 : 10*wKg + 6.25*hCm - 5*age - 161;
}

const iS: React.CSSProperties = {
  width:"100%", padding:"11px 14px", borderRadius:8, border:"1px solid #D4C9B8",
  background:"#FDFAF4", fontSize:15, color:"#1A1714",
  fontFamily:"var(--font-hanken),sans-serif", boxSizing:"border-box",
};
const lS: React.CSSProperties = {
  display:"block", fontSize:12, fontWeight:600, color:"#5C5650",
  marginBottom:6, letterSpacing:"0.06em", textTransform:"uppercase",
};

export default function BmrCalculatorClient() {
  const [unit, setUnit]     = useState<Unit>("imperial");
  const [inputs, setInputs] = useState<Inputs>({
    gender:"male", age:"", weightLbs:"", weightKg:"",
    heightFt:"", heightIn:"", heightCm:"", activity:"1.55",
  });
  const [results, setResults] = useState<Results | null>(null);
  const [errors, setErrors]   = useState<Partial<Record<keyof Inputs, string>>>({});

  // Feature state
  const [neatBonus, setNeatBonus]   = useState(0);
  const [katchBmr, setKatchBmr]     = useState<number | null>(null);

  function set(k: keyof Inputs, v: string) {
    setInputs(p => ({ ...p, [k]: v }));
    setErrors(p => ({ ...p, [k]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof Inputs, string>> = {};
    const age = Number(inputs.age);
    if (!inputs.age || age < 15 || age > 100) e.age = "Enter an age between 15 and 100";
    if (unit === "imperial") {
      const lbs = Number(inputs.weightLbs);
      if (!inputs.weightLbs || lbs < 50 || lbs > 700) e.weightLbs = "Enter a weight between 50–700 lbs";
      const ft = Number(inputs.heightFt);
      if (!inputs.heightFt || ft < 3 || ft > 8) e.heightFt = "Enter feet between 3–8";
    } else {
      const kg = Number(inputs.weightKg);
      if (!inputs.weightKg || kg < 20 || kg > 320) e.weightKg = "Enter a weight between 20–320 kg";
      const cm = Number(inputs.heightCm);
      if (!inputs.heightCm || cm < 90 || cm > 250) e.heightCm = "Enter height between 90–250 cm";
    }
    setErrors(e);
    return !Object.keys(e).length;
  }

  function calculate() {
    if (!validate()) return;
    let wKg: number, hCm: number;
    if (unit === "imperial") {
      wKg = Number(inputs.weightLbs) * 0.453592;
      hCm = (Number(inputs.heightFt)*12 + Number(inputs.heightIn||"0")) * 2.54;
    } else {
      wKg = Number(inputs.weightKg);
      hCm = Number(inputs.heightCm);
    }
    const bmr  = Math.round(calcBMR(inputs.gender, wKg, hCm, Number(inputs.age)));
    const mult = Number(inputs.activity);
    const tdee = Math.round(bmr * mult);
    const aLabel = ACTIVITY.find(a => a.value === inputs.activity)!.label;
    setKatchBmr(null);
    setNeatBonus(0);
    setResults({ bmr, tdee, activityLabel:aLabel, cut:tdee-500, bulk:tdee+300, weightKg:wKg, heightCm:hCm, age:Number(inputs.age), gender:inputs.gender });
  }

  function reset() {
    setInputs({ gender:"male", age:"", weightLbs:"", weightKg:"", heightFt:"", heightIn:"", heightCm:"", activity:"1.55" });
    setResults(null); setErrors({}); setNeatBonus(0); setKatchBmr(null);
  }

  // Derived values (NEAT + Katch adjustments)
  const activeBmr  = katchBmr ?? (results?.bmr ?? 0);
  const baseTdee   = results ? Math.round(activeBmr * Number(inputs.activity)) : 0;
  const adjTdee    = baseTdee + neatBonus;
  const adjCut     = adjTdee - 500;
  const adjBulk    = adjTdee + 300;
  const minSafe    = results?.gender === "female" ? 1200 : 1500;
  const displayCut = adjCut < minSafe ? minSafe : adjCut;

  return (
    <div style={{ background:"#F2EBD9", minHeight:"100vh" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom:"1px solid #D4C9B8", backgroundColor:"#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth:760, margin:"0 auto", display:"flex", alignItems:"center", gap:8, fontSize:12, color:"#8A8480" }}>
          <a href="/" style={{ color:"#8A8480" }}>Home</a><span>›</span>
          <a href="/tools/free" style={{ color:"#8A8480" }}>Free Tools</a><span>›</span>
          <span style={{ color:"#1A1714" }}>BMR Calculator</span>
        </div>
      </div>

      <div style={{ maxWidth:760, margin:"0 auto" }} className="container-pad">
        {/* Header */}
        <div style={{ marginBottom:32, textAlign:"center" }}>
          <span style={{ display:"inline-block", background:"#1A1714", color:"#F2EBD9", fontSize:10, fontWeight:700, letterSpacing:"0.12em", padding:"4px 10px", borderRadius:4, marginBottom:16 }}>FREE TOOL</span>
          <h1 style={{ fontFamily:"var(--font-newsreader),Georgia,serif", fontSize:"clamp(1.75rem,5vw,2.75rem)", fontWeight:800, color:"#1A1714", letterSpacing:"-0.02em", marginBottom:12, lineHeight:1.1 }}>BMR Calculator</h1>
          <p style={{ fontSize:16, color:"#5C5650", maxWidth:520, margin:"0 auto", lineHeight:1.6 }}>
            Find your Basal Metabolic Rate — the exact number of calories your body burns at rest — then dial in your daily target.
          </p>
        </div>

        {/* Unit Toggle */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:28 }}>
          <div style={{ display:"flex", background:"#EDE8DF", borderRadius:10, padding:4, gap:4 }}>
            {(["imperial","metric"] as Unit[]).map(u => (
              <button key={u} onClick={() => setUnit(u)} style={{
                padding:"8px 20px", borderRadius:8, border:"none", cursor:"pointer",
                fontFamily:"var(--font-hanken),sans-serif", fontSize:13, fontWeight:600,
                background: unit===u ? "#1A1714" : "transparent",
                color: unit===u ? "#F2EBD9" : "#5C5650", transition:"all 0.15s",
              }}>{u === "imperial" ? "Imperial (lbs/ft)" : "Metric (kg/cm)"}</button>
            ))}
          </div>
        </div>

        {/* Input Card */}
        <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"28px 28px 24px", marginBottom:20, boxShadow:"0 4px 24px rgba(26,23,20,0.06)" }}>
          <h2 style={{ fontSize:13, fontWeight:700, letterSpacing:"0.08em", color:"#8A8480", marginBottom:22, textTransform:"uppercase" }}>Your Details</h2>

          {/* Gender */}
          <div style={{ marginBottom:20 }}>
            <span style={lS}>Biological Sex</span>
            <div style={{ display:"flex", gap:10 }}>
              {(["male","female"] as Gender[]).map(g => (
                <button key={g} onClick={() => set("gender",g)} style={{
                  flex:1, padding:"10px 0", borderRadius:8, cursor:"pointer",
                  border: inputs.gender===g ? "2px solid #C4622D" : "1px solid #D4C9B8",
                  background: inputs.gender===g ? "#FDF0E8" : "#FDFAF4",
                  color: inputs.gender===g ? "#C4622D" : "#5C5650",
                  fontWeight:600, fontSize:14, transition:"all 0.15s",
                  fontFamily:"var(--font-hanken),sans-serif",
                }}>{g==="male" ? "♂ Male" : "♀ Female"}</button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div style={{ marginBottom:20 }}>
            <label style={lS}>Age (years)</label>
            <input type="number" min={15} max={100} placeholder="e.g. 32"
              value={inputs.age} onChange={e => set("age",e.target.value)}
              style={{ ...iS, borderColor:errors.age?"#C4622D":"#D4C9B8", maxWidth:200 }} />
            {errors.age && <p style={{ color:"#C4622D", fontSize:12, marginTop:4 }}>{errors.age}</p>}
          </div>

          {/* Weight */}
          <div style={{ marginBottom:20 }}>
            {unit==="imperial" ? (
              <>
                <label style={lS}>Weight (lbs)</label>
                <input type="number" min={50} max={700} placeholder="e.g. 175 lbs"
                  value={inputs.weightLbs} onChange={e => set("weightLbs",e.target.value)}
                  style={{ ...iS, borderColor:errors.weightLbs?"#C4622D":"#D4C9B8", maxWidth:200 }} />
                {errors.weightLbs && <p style={{ color:"#C4622D", fontSize:12, marginTop:4 }}>{errors.weightLbs}</p>}
              </>
            ) : (
              <>
                <label style={lS}>Weight (kg)</label>
                <input type="number" min={20} max={320} placeholder="e.g. 80 kg"
                  value={inputs.weightKg} onChange={e => set("weightKg",e.target.value)}
                  style={{ ...iS, borderColor:errors.weightKg?"#C4622D":"#D4C9B8", maxWidth:200 }} />
                {errors.weightKg && <p style={{ color:"#C4622D", fontSize:12, marginTop:4 }}>{errors.weightKg}</p>}
              </>
            )}
          </div>

          {/* Height */}
          <div style={{ marginBottom:20 }}>
            {unit==="imperial" ? (
              <>
                <label style={lS}>Height</label>
                <div style={{ display:"flex", gap:10 }}>
                  <div>
                    <input type="number" min={3} max={8} placeholder="ft"
                      value={inputs.heightFt} onChange={e => set("heightFt",e.target.value)}
                      style={{ ...iS, borderColor:errors.heightFt?"#C4622D":"#D4C9B8", maxWidth:110 }} />
                    <span style={{ fontSize:12, color:"#8A8480", display:"block", marginTop:3 }}>feet</span>
                    {errors.heightFt && <p style={{ color:"#C4622D", fontSize:12, marginTop:2 }}>{errors.heightFt}</p>}
                  </div>
                  <div>
                    <input type="number" min={0} max={11} placeholder="in"
                      value={inputs.heightIn} onChange={e => set("heightIn",e.target.value)}
                      style={{ ...iS, maxWidth:110 }} />
                    <span style={{ fontSize:12, color:"#8A8480", display:"block", marginTop:3 }}>inches</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <label style={lS}>Height (cm)</label>
                <input type="number" min={90} max={250} placeholder="e.g. 175 cm"
                  value={inputs.heightCm} onChange={e => set("heightCm",e.target.value)}
                  style={{ ...iS, borderColor:errors.heightCm?"#C4622D":"#D4C9B8", maxWidth:200 }} />
                {errors.heightCm && <p style={{ color:"#C4622D", fontSize:12, marginTop:4 }}>{errors.heightCm}</p>}
              </>
            )}
          </div>

          {/* Activity */}
          <div>
            <label style={lS}>Activity Level</label>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {ACTIVITY.map(a => (
                <label key={a.value} style={{
                  display:"flex", alignItems:"center", gap:12, padding:"10px 14px",
                  borderRadius:8, cursor:"pointer", transition:"all 0.15s",
                  border: inputs.activity===a.value ? "1.5px solid #C4622D" : "1px solid #D4C9B8",
                  background: inputs.activity===a.value ? "#FDF0E8" : "#FDFAF4",
                }}>
                  <input type="radio" name="activity" value={a.value}
                    checked={inputs.activity===a.value} onChange={() => set("activity",a.value)}
                    style={{ accentColor:"#C4622D", width:16, height:16, flexShrink:0 }} />
                  <div>
                    <span style={{ fontWeight:600, fontSize:14, color:"#1A1714" }}>{a.label}</span>
                    <span className="activity-desc">{a.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button onClick={calculate} style={{
          width:"100%", padding:"15px 0", borderRadius:10, border:"none",
          background:"#C4622D", color:"#FDFAF4", fontSize:16, fontWeight:700,
          cursor:"pointer", letterSpacing:"0.02em",
          fontFamily:"var(--font-hanken),sans-serif",
          boxShadow:"0 4px 16px rgba(196,98,45,0.3)", marginBottom:24,
        }}>Calculate My BMR →</button>

        {/* ── RESULTS ── */}
        {results && (
          <div>
            {/* Primary BMR + TDEE — always uses live adjTdee */}
            <div style={{ background:"#1A1714", borderRadius:16, padding:"28px 28px 24px", marginBottom:16, boxShadow:"0 8px 32px rgba(26,23,20,0.2)", opacity:0, animation:"slideUp 250ms 0ms ease-out forwards" }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#8A8480", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:20 }}>Your Results</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                <div>
                  <div style={{ fontSize:12, color:"#8A8480", marginBottom:4 }}>BMR (at rest)</div>
                  <div style={{ fontSize:"clamp(2rem,6vw,2.75rem)", fontWeight:800, color:"#F2EBD9", fontVariantNumeric:"tabular-nums", lineHeight:1, fontFamily:"var(--font-dm-mono),monospace" }}>{activeBmr.toLocaleString()}</div>
                  <div style={{ fontSize:13, color:"#5C5650", marginTop:4 }}>calories / day</div>
                </div>
                <div>
                  <div style={{ fontSize:12, color:"#8A8480", marginBottom:4 }}>TDEE ({results.activityLabel}{neatBonus>0?" + NEAT":""})</div>
                  <div style={{ fontSize:"clamp(2rem,6vw,2.75rem)", fontWeight:800, color:"#C4622D", fontVariantNumeric:"tabular-nums", lineHeight:1, fontFamily:"var(--font-dm-mono),monospace" }}>{adjTdee.toLocaleString()}</div>
                  <div style={{ fontSize:13, color:"#5C5650", marginTop:4 }}>calories / day</div>
                </div>
              </div>
            </div>

            {/* Goal Targets */}
            <div style={{ background:"#EDE8DF", borderRadius:16, padding:"24px 28px", marginBottom:16, border:"1px solid #D4C9B8", opacity:0, animation:"slideUp 250ms 80ms ease-out forwards" }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#8A8480", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:16 }}>Your Goal Targets</div>
              <div className="bmr-goals-grid">
                {[
                  { label:"Fat Loss",    cal:displayCut, desc:adjCut<minSafe?"Adjusted to safe min":"−500 kcal deficit", color:"#D4A853" },
                  { label:"Maintenance", cal:adjTdee,    desc:"Stay at current weight", color:"#A89880" },
                  { label:"Muscle Gain", cal:adjBulk,    desc:"+300 kcal surplus", color:"#5C8A6E" },
                ].map(g => (
                  <div key={g.label} style={{ background:"#FDFAF4", borderRadius:10, padding:"14px 12px", border:"1px solid #D4C9B8", textAlign:"center" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:g.color, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>{g.label}</div>
                    <div style={{ fontSize:"1.4rem", fontWeight:800, color:"#1A1714", fontVariantNumeric:"tabular-nums", fontFamily:"var(--font-dm-mono),monospace" }}>{g.cal.toLocaleString()}</div>
                    <div style={{ fontSize:11, color:"#8A8480", marginTop:3 }}>{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 8 NEW FEATURES ── */}
            <SafetyGuardrail  fatLoss={adjCut} tdee={adjTdee} gender={results.gender} animDelay={160} />
            <WeightTimeline   tdee={adjTdee} weightKg={results.weightKg} unit={unit} animDelay={240} />
            <PlateauPredictor bmr={activeBmr} weightKg={results.weightKg} unit={unit} animDelay={320} />
            <NeatBooster      baseTdee={baseTdee} onAdjust={setNeatBonus} animDelay={400} />
            <MealDistribution goalCals={displayCut} animDelay={480} />
            <FormulaSelector  mifflinBmr={results.bmr} weightKg={results.weightKg} onUseKatch={setKatchBmr} animDelay={560} />
            <MealContext      tdee={adjTdee} animDelay={640} />
            <ShareableCard    bmr={activeBmr} tdee={adjTdee} cut={displayCut} activityLabel={results.activityLabel} weightKg={results.weightKg} animDelay={720} />

            {/* Methodology */}
            <details style={{ marginBottom:16 }}>
              <summary style={{ cursor:"pointer", padding:"14px 18px", background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:10, fontSize:13, fontWeight:600, color:"#5C5650", listStyle:"none", display:"flex", justifyContent:"space-between" }}>
                <span>📐 How we calculated this</span><span style={{ color:"#C4622D" }}>+</span>
              </summary>
              <div style={{ padding:"16px 18px", background:"#FDFAF4", border:"1px solid #D4C9B8", borderTop:"none", borderRadius:"0 0 10px 10px", fontSize:13, color:"#5C5650", lineHeight:1.7 }}>
                <p style={{ marginBottom:8 }}><strong>Formula:</strong> Mifflin-St Jeor equation (1990) — the most validated BMR formula for the general population.</p>
                <p style={{ marginBottom:8, fontFamily:"var(--font-dm-mono),monospace", fontSize:12, background:"#EDE8DF", padding:"8px 12px", borderRadius:6 }}>
                  Men: BMR = 10W + 6.25H − 5A + 5<br />Women: BMR = 10W + 6.25H − 5A − 161<br /><span style={{ color:"#8A8480" }}>W=kg, H=cm, A=age</span>
                </p>
                <p>TDEE = BMR × activity multiplier. Accuracy: ±10% for most adults.</p>
              </div>
            </details>

            {/* Reset */}
            <button onClick={reset} style={{ width:"100%", padding:"12px 0", borderRadius:10, border:"1px solid #D4C9B8", background:"transparent", color:"#5C5650", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"var(--font-hanken),sans-serif", marginBottom:24 }}>
              ↺ Start Over
            </button>

            {/* Upsell */}
            <div style={{ background:"linear-gradient(135deg,#1A1714 0%,#2D2926 100%)", borderRadius:14, padding:"20px 24px", marginBottom:24, border:"1px solid #3D3530" }}>
              <div style={{ fontSize:11, fontWeight:700, color:"#C4622D", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>🔓 Next Step</div>
              <p style={{ fontSize:15, color:"#F2EBD9", fontWeight:600, marginBottom:4 }}>Want a full macro breakdown built around your {adjTdee.toLocaleString()} kcal target?</p>
              <p style={{ fontSize:13, color:"#8A8480", marginBottom:14 }}>Our Macros Calculator splits your calories into exact protein, carbs, and fat targets for your goal.</p>
              <a href="/tools/free/macros-calculator" style={{ display:"inline-block", background:"#C4622D", color:"#FDFAF4", padding:"10px 20px", borderRadius:8, fontSize:13, fontWeight:700, textDecoration:"none" }}>Calculate My Macros →</a>
            </div>

            {/* Next Steps */}
            <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:14, padding:"20px 24px", marginBottom:24, textAlign:"center" }}>
              <p style={{ fontSize:14, color:"#5C5650", marginBottom:12, fontWeight:600 }}>Found this helpful?</p>
              <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                <button onClick={() => {
                  if (navigator.share) navigator.share({ title:"My BMR Result", text:`BMR: ${activeBmr} | TDEE: ${adjTdee} kcal/day`, url:window.location.href });
                  else navigator.clipboard.writeText(`BMR: ${activeBmr} | TDEE: ${adjTdee} kcal/day — ${window.location.href}`);
                }} style={{ padding:"9px 18px", borderRadius:8, border:"1px solid #D4C9B8", background:"#EDE8DF", color:"#1A1714", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"var(--font-hanken),sans-serif" }}>
                  📤 Share My Result
                </button>
                <a href="/ingredients/creatine" style={{ padding:"9px 18px", borderRadius:8, border:"1px solid #C4622D", color:"#C4622D", fontSize:13, fontWeight:600, display:"inline-block", textDecoration:"none" }}>
                  Read: Creatine for Body Composition →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div style={{ marginBottom:32 }}>
          <h2 style={{ fontFamily:"var(--font-newsreader),Georgia,serif", fontSize:"1.4rem", fontWeight:700, color:"#1A1714", marginBottom:16 }}>Common Questions</h2>
          <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:14, overflow:"hidden" }}>
            {[
              { q:"What does BMR actually measure?", a:"BMR is the number of calories your body burns to keep you alive at complete rest — breathing, pumping blood, regulating temperature, and maintaining cell function. It doesn't include any activity." },
              { q:"Why is Mifflin-St Jeor more accurate than Harris-Benedict?", a:"A 2005 meta-analysis (Frankenfield et al., Journal of the American Dietetic Association) found Mifflin-St Jeor predicted measured RMR within 10% for 82% of participants, outperforming the 1919 Harris-Benedict equations." },
              { q:"My result seems too low / too high — why?", a:"Mifflin-St Jeor doesn't account for body composition. Athletes with high muscle mass will have a higher real BMR; people with high body fat will have a lower real BMR. Use the Katch-McArdle option above if you know your body fat %." },
              { q:"How do I use my TDEE to lose weight?", a:"Create a moderate calorie deficit — typically 300–500 kcal below your TDEE. A 500 kcal/day deficit yields ~0.5 kg (1 lb) of fat loss per week. Deficits larger than 700 kcal/day risk muscle loss." },
            ].map(f => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize:12, color:"#8A8480", lineHeight:1.7, borderTop:"1px solid #D4C9B8", paddingTop:20, textAlign:"center" }}>
          ⚕️ This tool provides general wellness information only and is not a substitute for medical advice. Consult a healthcare professional before making changes to your diet, exercise, or supplement routine.
        </p>
      </div>
    </div>
  );
}
