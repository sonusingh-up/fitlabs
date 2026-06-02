"use client";

import { useState, useEffect, useRef } from "react";

type Unit = "imperial" | "metric";
type Gender = "male" | "female";
type Goal = "fatLoss" | "maintenance" | "muscleGain" | "recomp";
type DietStyle = "standard" | "highProtein" | "keto" | "lowCarb" | "vegan";
type MealMode = "3meals" | "4meals" | "if168";
type Region = "southAsia" | "western" | "eastAsian" | "mediterranean" | "latinAmerican" | "westAfrican";

interface Inputs {
  calories: string;
  gender: Gender;
  weightLbs: string;
  weightKg: string;
  goal: Goal;
  dietStyle: DietStyle;
  trainingDays: number;
}

interface Results {
  calories: number;
  proteinG: number;
  proteinKcal: number;
  carbG: number;
  carbKcal: number;
  fatG: number;
  fatKcal: number;
  // macro cycling
  trainingDayCarbs: number;
  trainingDayFat: number;
  trainingDayCalories: number;
  restDayCarbs: number;
  restDayFat: number;
  restDayCalories: number;
  // inputs copied
  weightKg: number;
  unit: Unit;
  goal: Goal;
  dietStyle: DietStyle;
  trainingDays: number;
  gender: Gender;
}

const lS: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#5C5650",
  marginBottom: 6,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const iS: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 8,
  border: "1px solid #D4C9B8",
  background: "#FDFAF4",
  fontSize: 15,
  color: "#1A1714",
  fontFamily: "var(--font-dm-sans),sans-serif",
  boxSizing: "border-box",
};

const proteinPerKg = {
  fatLoss:     { standard: 2.2, highProtein: 2.6, keto: 2.4, lowCarb: 2.3, vegan: 2.0 },
  maintenance: { standard: 1.8, highProtein: 2.2, keto: 2.0, lowCarb: 1.9, vegan: 1.6 },
  muscleGain:  { standard: 2.0, highProtein: 2.4, keto: 2.2, lowCarb: 2.1, vegan: 1.8 },
  recomp:      { standard: 2.4, highProtein: 2.8, keto: 2.5, lowCarb: 2.4, vegan: 2.1 }
};

const fatPct = {
  standard:    0.25,
  highProtein: 0.20,
  keto:        0.70,
  lowCarb:     0.40,
  vegan:       0.25
};

export default function MacrosCalculatorClient() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [inputs, setInputs] = useState<Inputs>({
    calories: "",
    gender: "male",
    weightLbs: "",
    weightKg: "",
    goal: "fatLoss",
    dietStyle: "standard",
    trainingDays: 4,
  });
  const [results, setResults] = useState<Results | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof Inputs, string>>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [preFilled, setPreFilled] = useState(false);

  // Result card states
  const [showCycling, setShowCycling] = useState(true);
  const [mealMode, setMealMode] = useState<MealMode>("4meals");
  const [activeProteinTab, setActiveProteinTab] = useState<string>("chicken");
  const [activeCarbTab, setActiveCarbTab] = useState<string>("rice");
  const [activeFatTab, setActiveFatTab] = useState<string>("almonds");
  const [showCarbMapper, setShowCarbMapper] = useState(false);
  const [showFatMapper, setShowFatMapper] = useState(false);
  const [activeRegion, setActiveRegion] = useState<Region>("southAsia");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // URL Params parsing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const calParam = params.get("calories") || params.get("tdee");
    const goalParam = params.get("goal");
    const weightParam = params.get("weight");
    const unitParam = params.get("unit");

    let updatedInputs = { ...inputs };
    let hasUpdates = false;

    if (calParam) {
      updatedInputs.calories = calParam;
      setPreFilled(true);
      hasUpdates = true;
    }
    if (unitParam === "imperial" || unitParam === "metric") {
      setUnit(unitParam);
    }
    if (weightParam) {
      if (unitParam === "imperial") {
        updatedInputs.weightLbs = weightParam;
      } else {
        updatedInputs.weightKg = weightParam;
      }
      hasUpdates = true;
    }
    if (goalParam) {
      let mappedGoal: Goal = "fatLoss";
      if (goalParam === "fat-loss" || goalParam === "fatLoss") mappedGoal = "fatLoss";
      else if (goalParam === "maintenance") mappedGoal = "maintenance";
      else if (goalParam === "muscle-gain" || goalParam === "muscleGain") mappedGoal = "muscleGain";
      else if (goalParam === "recomp") mappedGoal = "recomp";
      updatedInputs.goal = mappedGoal;
      hasUpdates = true;
    }

    if (hasUpdates) {
      setInputs(updatedInputs);
      // Auto calculate if weight is also present
      const weightVal = unitParam === "imperial" ? updatedInputs.weightLbs : updatedInputs.weightKg;
      if (calParam && weightVal) {
        // Run calculation after a small timeout to let state update
        setTimeout(() => {
          triggerCalculation(updatedInputs, unitParam === "imperial" ? "imperial" : "metric");
        }, 100);
      }
    }
  }, []);

  // Update default food tab when diet style changes
  useEffect(() => {
    if (inputs.dietStyle === "vegan") {
      setActiveProteinTab("lentils");
    } else {
      setActiveProteinTab("chicken");
    }
  }, [inputs.dietStyle]);

  function set(k: keyof Inputs, v: any) {
    setInputs(p => ({ ...p, [k]: v }));
    setErrors(p => ({ ...p, [k]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof Inputs, string>> = {};
    const caloriesNum = Number(inputs.calories);
    if (!inputs.calories || caloriesNum < 800 || caloriesNum > 6000) {
      e.calories = "Enter calories between 800 and 6,000 kcal";
    }

    if (unit === "imperial") {
      const lbs = Number(inputs.weightLbs);
      if (!inputs.weightLbs || lbs < 66 || lbs > 660) {
        e.weightLbs = "Enter a weight between 66–660 lbs";
      }
    } else {
      const kg = Number(inputs.weightKg);
      if (!inputs.weightKg || kg < 30 || kg > 300) {
        e.weightKg = "Enter a weight between 30–300 kg";
      }
    }

    setErrors(e);
    return !Object.keys(e).length;
  }

  function triggerCalculation(currentInputs: Inputs, currentUnit: Unit) {
    const caloriesNum = Number(currentInputs.calories);
    let weightKgNum = 0;
    if (currentUnit === "imperial") {
      weightKgNum = Number(currentInputs.weightLbs) * 0.453592;
    } else {
      weightKgNum = Number(currentInputs.weightKg);
    }

    // Determine warnings
    const wList: string[] = [];
    if (currentInputs.gender === "female" && caloriesNum < 1200) {
      wList.push("Warning: A calorie target below 1,200 kcal is very low and may be difficult to sustain safely. Ensure this is medically supervised.");
    } else if (currentInputs.gender === "male" && caloriesNum < 1500) {
      wList.push("Warning: A calorie target below 1,500 kcal is very low and may be difficult to sustain safely. Ensure this is medically supervised.");
    }

    // Step 1: Set Protein Target
    let multiplier = proteinPerKg[currentInputs.goal][currentInputs.dietStyle];
    if (currentInputs.gender === "female") {
      // Biological sex affects protein targets (slightly lower relative requirement due to body composition/lean mass ratios)
      multiplier = Math.max(1.2, multiplier - 0.2);
    }
    const rawProteinG = Math.round(weightKgNum * multiplier);
    let proteinG = rawProteinG;
    let proteinKcal = proteinG * 4;

    // Step 2: Set Fat Target
    let fatKcal = Math.round(caloriesNum * fatPct[currentInputs.dietStyle]);
    let fatG = Math.round(fatKcal / 9);

    // Step 3: Remaining Calories -> Carbs
    let remainingKcal = caloriesNum - proteinKcal - fatKcal;
    let carbG = Math.round(remainingKcal / 4);

    // Carbs safety check: must be >= 20g/day (especially for keto)
    if (carbG < 20) {
      carbG = 20;
      remainingKcal = caloriesNum - (carbG * 4);
      // Reduce protein first, but not below a comfortable baseline
      const minMultiplier = currentInputs.gender === "female" ? 1.2 : 1.4;
      const minProteinG = Math.round(weightKgNum * minMultiplier);
      
      let pG = proteinG;
      let fG = fatG;

      while (pG > minProteinG && (pG * 4 + fG * 9) > remainingKcal) {
        pG -= 1;
      }
      // If still exceeding, adjust fat down
      while ((pG * 4 + fG * 9) > remainingKcal && fG > 10) {
        fG -= 1;
      }
      
      proteinG = pG;
      proteinKcal = proteinG * 4;
      fatG = fG;
      fatKcal = fatG * 9;
    }

    // Step 5: Calorie Verification (Sum within ±15 kcal of input)
    let totalCheck = (proteinG * 4) + (carbG * 4) + (fatG * 9);
    let difference = caloriesNum - totalCheck;
    if (Math.abs(difference) > 15) {
      // Adjust carbs by ±1 until balanced
      const carbAdjust = Math.round(difference / 4);
      carbG += carbAdjust;
      if (carbG < 20) {
        carbG = 20;
      }
      totalCheck = (proteinG * 4) + (carbG * 4) + (fatG * 9);
      difference = caloriesNum - totalCheck;
    }

    // Protein check: Must not exceed 40% of total calories
    const proteinRatio = (proteinG * 4) / caloriesNum;
    if (proteinRatio > 0.40) {
      wList.push("Protein exceeds 40% of your total calories. This is a very high protein ratio. Ensure you have no pre-existing kidney issues and drink plenty of water.");
    }

    setWarnings(wList);

    // Step 4: Macro Cycling
    const trainingDayCarbs = Math.round(carbG * 1.20);
    const trainingDayFat = Math.round(fatG * 0.85);
    const trainingDayCalories = (proteinG * 4) + (trainingDayCarbs * 4) + (trainingDayFat * 9);

    const restDayCarbs = Math.round(carbG * 0.75);
    const restDayFat = Math.round(fatG * 1.20);
    const restDayCalories = (proteinG * 4) + (restDayCarbs * 4) + (restDayFat * 9);

    setResults({
      calories: caloriesNum,
      proteinG,
      proteinKcal,
      carbG,
      carbKcal: carbG * 4,
      fatG,
      fatKcal: fatG * 9,
      trainingDayCarbs,
      trainingDayFat,
      trainingDayCalories,
      restDayCarbs,
      restDayFat,
      restDayCalories,
      weightKg: weightKgNum,
      unit: currentUnit,
      goal: currentInputs.goal,
      dietStyle: currentInputs.dietStyle,
      trainingDays: currentInputs.trainingDays,
      gender: currentInputs.gender,
    });
  }

  function calculate() {
    if (!validate()) return;
    triggerCalculation(inputs, unit);
  }

  function reset() {
    setInputs({
      calories: "",
      gender: "male",
      weightLbs: "",
      weightKg: "",
      goal: "fatLoss",
      dietStyle: "standard",
      trainingDays: 4,
    });
    setResults(null);
    setErrors({});
    setWarnings([]);
    setPreFilled(false);
  }

  // Helper formatting labels
  const goalLabels = {
    fatLoss: "Fat Loss",
    maintenance: "Maintenance",
    muscleGain: "Muscle Gain",
    recomp: "Recomp",
  };

  const dietLabels = {
    standard: "Standard",
    highProtein: "High Protein",
    keto: "Keto",
    lowCarb: "Low Carb",
    vegan: "Vegan / Plant-Based",
  };

  // Meal distribution rows calculator
  function getMealRows() {
    if (!results) return [];
    const { proteinG, carbG, fatG } = results;

    let pcts: number[] = [];
    let meals: { name: string; time?: string }[] = [];

    if (mealMode === "3meals") {
      pcts = [0.30, 0.40, 0.30];
      meals = [
        { name: "Breakfast" },
        { name: "Lunch" },
        { name: "Dinner" },
      ];
    } else if (mealMode === "4meals") {
      pcts = [0.25, 0.35, 0.25, 0.15];
      meals = [
        { name: "Breakfast" },
        { name: "Lunch" },
        { name: "Dinner" },
        { name: "Post-Workout" },
      ];
    } else { // Intermittent Fasting 16:8
      pcts = [0.45, 0.15, 0.40];
      meals = [
        { name: "Meal 1", time: "12 PM" },
        { name: "Snack", time: "3 PM" },
        { name: "Meal 2", time: "7 PM" },
      ];
    }

    const pDist = distributeMacros(proteinG, pcts);
    const cDist = distributeMacros(carbG, pcts);
    const fDist = distributeMacros(fatG, pcts);

    return meals.map((m, i) => {
      const p = pDist[i];
      const c = cDist[i];
      const f = fDist[i];
      const kcal = (p * 4) + (c * 4) + (f * 9);
      return {
        name: m.name,
        time: m.time,
        p,
        c,
        f,
        kcal,
      };
    });
  }

  function distributeMacros(totalVal: number, percentages: number[]): number[] {
    let distributed = percentages.map(p => Math.round(totalVal * p));
    let sum = distributed.reduce((a, b) => a + b, 0);
    let diff = totalVal - sum;
    if (diff !== 0) {
      // Adjust largest portion to fix rounding
      const maxIdx = distributed.indexOf(Math.max(...distributed));
      distributed[maxIdx] += diff;
    }
    return distributed;
  }

  // Supplement gap calculation
  const comfortableProteinFromFood = results ? Math.round(results.weightKg * 1.2) : 0;
  const proteinGap = results ? (results.proteinG - comfortableProteinFromFood) : 0;

  // Share card Canvas downloader
  function drawAndDownloadShareCard() {
    const canvas = canvasRef.current;
    if (!canvas || !results) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 640;
    const H = 400;
    canvas.width = W;
    canvas.height = H;

    // Background
    ctx.fillStyle = "#1C1C1C";
    ctx.fillRect(0, 0, W, H);

    // Accent line at the top
    ctx.fillStyle = "#C1622F";
    ctx.fillRect(0, 0, W, 6);

    // Header label
    ctx.fillStyle = "#6B7280";
    ctx.font = "bold 11px system-ui";
    ctx.letterSpacing = "2px";
    ctx.fillText("FITLAB  ·  EVIDENCE-LED SUPPLEMENT RESEARCH", 32, 40);

    // Divider
    ctx.strokeStyle = "#2D2D2D";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(32, 58); ctx.lineTo(W - 32, 58); ctx.stroke();

    // Title
    ctx.font = "bold 24px system-ui";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("💪 My Daily Macro Targets", 32, 100);

    // Subtitle / Goal context
    ctx.font = "14px system-ui";
    ctx.fillStyle = "#9CA3AF";
    ctx.fillText(`Goal: ${goalLabels[results.goal]}  ·  Diet Style: ${dietLabels[results.dietStyle]}`, 32, 130);

    // Macros row grid helper
    const macros = [
      { name: "PROTEIN", g: `${results.proteinG}g`, kcal: `${results.proteinKcal} kcal` },
      { name: "CARBS", g: `${results.carbG}g`, kcal: `${results.carbKcal} kcal` },
      { name: "FAT", g: `${results.fatG}g`, kcal: `${results.fatKcal} kcal` },
    ];

    macros.forEach((m, idx) => {
      const colX = 32 + idx * 190;
      
      // Box
      ctx.fillStyle = "#262626";
      ctx.fillRect(colX, 160, 160, 110);
      ctx.strokeStyle = "#374151";
      ctx.strokeRect(colX, 160, 160, 110);

      // Label
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "bold 11px system-ui";
      ctx.fillText(m.name, colX + 16, 185);

      // Grams
      ctx.fillStyle = "#C1622F";
      ctx.font = "bold 32px system-ui";
      ctx.fillText(m.g, colX + 16, 225);

      // Calories
      ctx.fillStyle = "#D1D5DB";
      ctx.font = "12px system-ui";
      ctx.fillText(m.kcal, colX + 16, 252);
    });

    // Total calories summary
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "600 16px system-ui";
    ctx.fillText(`Daily Total: ${results.calories.toLocaleString()} kcal / day`, 32, 310);

    // Divider before footer
    ctx.strokeStyle = "#2D2D2D";
    ctx.beginPath(); ctx.moveTo(32, 340); ctx.lineTo(W - 32, 340); ctx.stroke();

    // Footer text
    ctx.fillStyle = "#6B7280";
    ctx.font = "12px system-ui";
    ctx.fillText("Calculate yours → fitlabreviews.com/tools/free/macros-calculator", 32, 370);

    // Save image
    const link = document.createElement("a");
    link.download = `fitlab-macro-targets-${results.goal}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function handleShare() {
    if (!results) return;
    const shareText = `My Daily Macro Targets from Fitlab: Protein ${results.proteinG}g | Carbs ${results.carbG}g | Fat ${results.fatG}g | Total: ${results.calories} kcal.`;
    if (navigator.share) {
      navigator.share({
        title: "My Daily Macro Targets",
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareText} — Calculate yours at: ${window.location.href}`);
      alert("✓ Share details copied to clipboard!");
    }
  }

  return (
    <div style={{ background: "#F2EBD9", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 12, color: "#6E6864" }}>
          <a href="/" style={{ color: "#6E6864" }}>Home</a><span>›</span>
          <a href="/tools/free" style={{ color: "#6E6864" }}>Free Tools</a><span>›</span>
          <span style={{ color: "#1A1714" }}>Macros Calculator</span>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto" }} className="container-pad">
        {/* Tool Header */}
        <div className="tool-header" style={{ textAlign: "center", padding: "32px 0 24px" }}>
          <span style={{ display: "inline-block", background: "#1A1714", color: "#F2EBD9", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", padding: "4px 10px", borderRadius: 4, marginBottom: 16 }}>FREE TOOL</span>
          <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(1.75rem,5vw,2.75rem)", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.1 }}>Macros Calculator</h1>
          <p style={{ fontSize: 16, color: "#4D4743", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Split your daily calories into exact protein, carbs, and fat targets — matched to your goal, your diet style, and your body.
          </p>
        </div>

        {/* Unit Toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ display: "flex", background: "#EDE8DF", borderRadius: 10, padding: 4, gap: 4 }}>
            {(["imperial", "metric"] as Unit[]).map(u => (
              <button
                key={u}
                onClick={() => {
                  setUnit(u);
                  // Clear errors when toggling unit
                  setErrors({});
                }}
                style={{
                  padding: "8px clamp(12px, 3vw, 20px)",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans),sans-serif",
                  fontSize: "clamp(11px, 2.8vw, 13px)",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  background: unit === u ? "#1A1714" : "transparent",
                  color: unit === u ? "#F2EBD9" : "#5C5650",
                  transition: "all 0.15s",
                }}
              >
                {u === "imperial" ? "Imperial (lbs/ft)" : "Metric (kg/cm)"}
              </button>
            ))}
          </div>
        </div>

        {/* Pre-fill Banner */}
        {preFilled && (
          <div style={{ background: "#ECFDF5", border: "1px solid #10B981", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#047857", fontSize: 16, fontWeight: "bold" }}>✓</span>
            <span style={{ fontSize: 13, color: "#065F46", fontWeight: 500 }}>
              Pre-filled from your BMR Calculator result. You can adjust this below.
            </span>
          </div>
        )}

        {/* Input Card */}
        <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 28px) clamp(16px, 4vw, 28px) clamp(16px, 4vw, 24px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#6E6864", marginBottom: 22, textTransform: "uppercase" }}>YOUR DETAILS</h2>

          {/* Calorie Target */}
          <div style={{ marginBottom: 20 }}>
            <label style={lS}>DAILY CALORIE TARGET (KCAL)</label>
            <input
              type="number"
              min={800}
              max={6000}
              placeholder="e.g. 2,000"
              value={inputs.calories}
              onChange={e => set("calories", e.target.value)}
              style={{ ...iS, borderColor: errors.calories ? "#C4622D" : "#D4C9B8", maxWidth: 240 }}
            />
            {errors.calories && <p style={{ color: "#C4622D", fontSize: 12, marginTop: 4 }}>{errors.calories}</p>}
          </div>

          {/* Biological Sex */}
          <div style={{ marginBottom: 20 }}>
            <span style={lS}>Biological Sex</span>
            <div style={{ display: "flex", gap: 10 }}>
              {(["male", "female"] as Gender[]).map(g => (
                <button
                  key={g}
                  onClick={() => set("gender", g)}
                  style={{
                    flex: 1,
                    padding: "10px 0",
                    borderRadius: 8,
                    cursor: "pointer",
                    border: inputs.gender === g ? "2px solid #C4622D" : "1px solid #D4C9B8",
                    background: inputs.gender === g ? "#FDF0E8" : "#FDFAF4",
                    color: inputs.gender === g ? "#C4622D" : "#5C5650",
                    fontWeight: 600,
                    fontSize: 14,
                    transition: "all 0.15s",
                    fontFamily: "var(--font-dm-sans),sans-serif",
                  }}
                >
                  {g === "male" ? "♂ Male" : "♀ Female"}
                </button>
              ))}
            </div>
          </div>

          {/* Weight */}
          <div style={{ marginBottom: 20 }}>
            {unit === "imperial" ? (
              <>
                <label style={lS}>BODY WEIGHT (LBS)</label>
                <input
                  type="number"
                  min={66}
                  max={660}
                  placeholder="e.g. 175 lbs"
                  value={inputs.weightLbs}
                  onChange={e => set("weightLbs", e.target.value)}
                  style={{ ...iS, borderColor: errors.weightLbs ? "#C4622D" : "#D4C9B8", maxWidth: 240 }}
                />
                {errors.weightLbs && <p style={{ color: "#C4622D", fontSize: 12, marginTop: 4 }}>{errors.weightLbs}</p>}
              </>
            ) : (
              <>
                <label style={lS}>BODY WEIGHT (KG)</label>
                <input
                  type="number"
                  min={30}
                  max={300}
                  placeholder="e.g. 80 kg"
                  value={inputs.weightKg}
                  onChange={e => set("weightKg", e.target.value)}
                  style={{ ...iS, borderColor: errors.weightKg ? "#C4622D" : "#D4C9B8", maxWidth: 240 }}
                />
                {errors.weightKg && <p style={{ color: "#C4622D", fontSize: 12, marginTop: 4 }}>{errors.weightKg}</p>}
              </>
            )}
          </div>

          {/* Primary Goal */}
          <div style={{ marginBottom: 20 }}>
            <label style={lS}>YOUR GOAL</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {[
                { key: "fatLoss", title: "🔥 Fat Loss", desc: "Lose body fat while keeping muscle" },
                { key: "maintenance", title: "⚖️ Maintenance", desc: "Stay at weight and improve composition" },
                { key: "muscleGain", title: "💪 Muscle Gain", desc: "Build muscle with a calorie surplus" },
                { key: "recomp", title: "🔄 Recomp", desc: "Lose fat AND gain muscle simultaneously" },
              ].map(g => {
                const isSelected = inputs.goal === g.key;
                return (
                  <div
                    key={g.key}
                    onClick={() => set("goal", g.key)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: isSelected ? "2px solid #C4622D" : "1px solid #D4C9B8",
                      background: isSelected ? "#FDF0E8" : "#FDFAF4",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 14, color: isSelected ? "#C4622D" : "#1A1714", marginBottom: 4 }}>
                      {g.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.4 }}>
                      {g.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diet Style */}
          <div style={{ marginBottom: 20 }}>
            <label style={lS}>DIET STYLE</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { key: "standard", label: "🍗 Standard" },
                { key: "highProtein", label: "💪 High Protein" },
                { key: "keto", label: "🥩 Keto" },
                { key: "lowCarb", label: "🌾 Low Carb" },
                { key: "vegan", label: "🌱 Vegan / Plant-Based" },
              ].map(d => {
                const isSelected = inputs.dietStyle === d.key;
                return (
                  <button
                    key={d.key}
                    onClick={() => set("dietStyle", d.key)}
                    style={{
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      padding: "8px 16px",
                      borderRadius: 20,
                      border: isSelected ? "2px solid #C4622D" : "1px solid #D4C9B8",
                      background: isSelected ? "#FDF0E8" : "#FDFAF4",
                      color: isSelected ? "#C4622D" : "#5C5650",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--font-dm-sans),sans-serif",
                      transition: "all 0.15s",
                    }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Training Days */}
          <div>
            <label style={lS}>TRAINING DAYS / WEEK</label>
            <div style={{ display: "flex", background: "#EDE8DF", borderRadius: 10, padding: 4, gap: 4, maxWidth: 320 }}>
              {[2, 3, 4, 5, 6, 7].map(day => {
                const isSelected = inputs.trainingDays === day;
                return (
                  <button
                    key={day}
                    onClick={() => set("trainingDays", day)}
                    style={{
                      flex: 1,
                      padding: "8px 0",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-dm-sans),sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      background: isSelected ? "#1A1714" : "transparent",
                      color: isSelected ? "#F2EBD9" : "#5C5650",
                      transition: "all 0.15s",
                    }}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Warnings / Checks block */}
        {warnings.length > 0 && (
          <div style={{ background: "#FFFBEB", border: "1.5px solid #F59E0B", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
              ⚠️ Health Notice
            </div>
            {warnings.map((w, idx) => (
              <p key={idx} style={{ fontSize: 13, color: "#78350F", margin: "4px 0", lineHeight: 1.5 }}>
                • {w}
              </p>
            ))}
          </div>
        )}

        {/* Calculate Button */}
        <button
          onClick={calculate}
          style={{
            width: "100%",
            padding: "15px 0",
            borderRadius: 10,
            border: "none",
            background: "#C4622D",
            color: "#FDFAF4",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-dm-sans),sans-serif",
            boxShadow: "0 4px 16px rgba(196,98,45,0.3)",
            marginBottom: 24,
          }}
        >
          Calculate My Macros →
        </button>

        {/* RESULTS SECTION */}
        {results && (
          <div>
            {/* CARD 1 — Daily Macro Targets (Dark card) */}
            <div style={{ background: "#1C1C1C", color: "#FFFFFF", borderRadius: 16, padding: "clamp(16px, 4vw, 28px) clamp(16px, 4vw, 28px) clamp(16px, 4vw, 24px)", marginBottom: 20, boxShadow: "0 8px 32px rgba(26,23,20,0.2)", opacity: 0, animation: "slideUp 250ms 0ms ease-out forwards" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase" }}>YOUR DAILY MACROS</span>
                <span style={{ fontSize: 12, color: "#E58B58", fontWeight: 600 }}>
                  [{goalLabels[results.goal]} · {dietLabels[results.dietStyle]}]
                </span>
              </div>

              {/* Grid values */}
              <div className="macro-grid">
                {[
                  { label: "PROTEIN", g: results.proteinG, kcal: results.proteinKcal, energy: "4 kcal/g" },
                  { label: "CARBS", g: results.carbG, kcal: results.carbKcal, energy: "4 kcal/g" },
                  { label: "FAT", g: results.fatG, kcal: results.fatKcal, energy: "9 kcal/g" },
                ].map(m => (
                  <div key={m.label} className="macro-col">
                    <div className="macro-label">{m.label}</div>
                    <div className="macro-val">{m.g}g</div>
                    <div className="macro-energy">{m.energy}</div>
                    <div className="macro-kcal">{m.kcal} kcal</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 15, color: "#D1D5DB", fontWeight: 600, marginBottom: 16, textAlign: "center" }}>
                Total: <strong style={{ color: "#FFFFFF", fontSize: "1.1rem" }}>{results.calories.toLocaleString()}</strong> kcal / day
              </div>

              {/* Visual Stacked Bar */}
              {(() => {
                const totalK = results.proteinKcal + results.carbKcal + results.fatKcal;
                const pPct = Math.round((results.proteinKcal / totalK) * 100);
                const cPct = Math.round((results.carbKcal / totalK) * 100);
                const fPct = 100 - pPct - cPct;

                return (
                  <div>
                    <div style={{ display: "flex", height: 20, borderRadius: 10, overflow: "hidden", background: "#374151", marginBottom: 8 }}>
                      <div style={{ width: `${pPct}%`, background: "#E58B58" }} title={`Protein: ${pPct}%`} />
                      <div style={{ width: `${cPct}%`, background: "#4A7C7A" }} title={`Carbs: ${cPct}%`} />
                      <div style={{ width: `${fPct}%`, background: "#9CA3AF" }} title={`Fat: ${fPct}%`} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9CA3AF", fontWeight: 500, padding: "0 4px" }}>
                      <span>Protein {pPct}%</span>
                      <span>Carbs {cPct}%</span>
                      <span>Fat {fPct}%</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* CARD 2 — Macro Flexibility Range */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 80ms ease-out forwards" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>YOUR ACCEPTABLE RANGE</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 20 }}>You don&apos;t need to be perfect. Hit these windows.</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { name: "PROTEIN", target: results.proteinG, min: Math.round(results.proteinG * 0.9), max: Math.round(results.proteinG * 1.1) },
                  { name: "CARBS", target: results.carbG, min: Math.max(20, Math.round(results.carbG * 0.9)), max: Math.round(results.carbG * 1.1) },
                  { name: "FAT", target: results.fatG, min: Math.round(results.fatG * 0.9), max: Math.round(results.fatG * 1.1) },
                ].map(r => (
                  <div key={r.name} className="range-row">
                    <span className="range-name">{r.name}</span>
                    
                    {/* Visual range bar */}
                    <div className="range-slider-container">
                      <span style={{ fontSize: 12, color: "#6E6864", fontFamily: "var(--font-dm-mono),monospace" }}>{r.min}g</span>
                      <div style={{ flex: 1, height: 6, background: "#EDE8DF", borderRadius: 3, position: "relative" }}>
                        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 10, height: 10, borderRadius: "50%", background: "#C4622D" }} />
                      </div>
                      <span style={{ fontSize: 12, color: "#6E6864", fontFamily: "var(--font-dm-mono),monospace" }}>{r.max}g</span>
                    </div>

                    <span className="range-target">
                      Target: <strong style={{ color: "#1A1714" }}>{r.target}g</strong>
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 12, color: "#6E6864", fontStyle: "italic", marginTop: 20, borderTop: "1px solid #EDE8DF", paddingTop: 12, margin: "16px 0 0 0" }}>
                Staying within these ranges 80% of the time produces the same results as hitting exact numbers daily.
              </p>
            </div>

            {/* CARD 3 — Macro Cycling */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 160ms ease-out forwards" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase" }}>MACRO CYCLING</span>
                <button
                  onClick={() => setShowCycling(!showCycling)}
                  style={{ background: "none", border: "none", color: "#C4622D", fontSize: 12, fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
                >
                  {showCycling ? "Hide details" : "Show details"}
                </button>
              </div>

              {showCycling ? (
                <>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 20 }}>Different days, different fuel.</h3>
                  <div className="cycling-grid">
                    {/* Training Day */}
                    <div style={{ background: "#FDF0E8", border: "1px solid #F3D9C9", borderRadius: 12, padding: "16px 20px" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#C4622D", marginBottom: 12, display: "flex", justifyContent: "space-between" }}>
                        <span>TRAINING DAYS</span>
                        <span style={{ background: "#C4622D", color: "#fff", padding: "1px 6px", borderRadius: 4, fontSize: 10 }}>{results.trainingDays} days / wk</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Protein:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace" }}>{results.proteinG}g</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Carbs:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace", color: "#10B981" }}>{results.trainingDayCarbs}g <span style={{ fontSize: 11, fontWeight: "normal" }}>↑ +20%</span></strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Fat:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace", color: "#EF4444" }}>{results.trainingDayFat}g <span style={{ fontSize: 11, fontWeight: "normal" }}>↓ −15%</span></strong>
                        </div>
                        <div style={{ borderTop: "1px solid #E5E7EB", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                          <span>Total:</span>
                          <span>{results.trainingDayCalories.toLocaleString()} kcal</span>
                        </div>
                      </div>
                    </div>

                    {/* Rest Day */}
                    <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "16px 20px" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#6E6864", marginBottom: 12, display: "flex", justifyContent: "space-between" }}>
                        <span>REST DAYS</span>
                        <span style={{ background: "#6E6864", color: "#fff", padding: "1px 6px", borderRadius: 4, fontSize: 10 }}>{7 - results.trainingDays} days / wk</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Protein:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace" }}>{results.proteinG}g</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Carbs:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace", color: "#EF4444" }}>{results.restDayCarbs}g <span style={{ fontSize: 11, fontWeight: "normal" }}>↓ −25%</span></strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#5C5650" }}>Fat:</span>
                          <strong style={{ fontFamily: "var(--font-dm-mono),monospace", color: "#10B981" }}>{results.restDayFat}g <span style={{ fontSize: 11, fontWeight: "normal" }}>↑ +20%</span></strong>
                        </div>
                        <div style={{ borderTop: "1px solid #EDE8DF", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                          <span>Total:</span>
                          <span>{results.restDayCalories.toLocaleString()} kcal</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 12, color: "#6E6864", marginTop: 16, lineHeight: 1.5 }}>
                    Carb cycling matches fuel to demand. More carbs on training days replenish glycogen. More fat on rest days supports hormone production.
                  </p>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "8px 0" }}>
                  <button
                    onClick={() => setShowCycling(true)}
                    style={{ background: "#C4622D", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                  >
                    Prefer a consistent daily target? Use the numbers from card 1.
                  </button>
                </div>
              )}
            </div>

            {/* CARD 4 — Per-Meal Macro Breakdown */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 240ms ease-out forwards" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>MEAL BREAKDOWN</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Spread your macros across the day.</h3>

              {/* Segmented control */}
              <div style={{ display: "flex", background: "#EDE8DF", borderRadius: 10, padding: 4, gap: 4, marginBottom: 20, maxWidth: 360 }}>
                {[
                  { key: "3meals", label: "3 Meals" },
                  { key: "4meals", label: "4 Meals" },
                  { key: "if168", label: "IF 16:8" },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setMealMode(opt.key as MealMode)}
                    style={{
                      flex: 1,
                      padding: "8px 0",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-dm-sans),sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      background: mealMode === opt.key ? "#1A1714" : "transparent",
                      color: mealMode === opt.key ? "#F2EBD9" : "#5C5650",
                      transition: "all 0.15s",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Responsive Table */}
              <div className="review-table-wrap" style={{ maxHeight: 300, overflowY: "auto", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <table style={{ width: "100%", minWidth: 460, borderCollapse: "collapse", textAlign: "left" }}>
                  <thead>
                    <tr style={{ background: "#EDE8DF", borderBottom: "1px solid #D4C9B8", position: "sticky", top: 0, zIndex: 10 }}>
                      <th style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: "#1A1714", textTransform: "uppercase" }}>Meal</th>
                      <th style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: "#1A1714", textTransform: "uppercase", textAlign: "right" }}>Protein</th>
                      <th style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: "#1A1714", textTransform: "uppercase", textAlign: "right" }}>Carbs</th>
                      <th style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: "#1A1714", textTransform: "uppercase", textAlign: "right" }}>Fat</th>
                      <th style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: "#1A1714", textTransform: "uppercase", textAlign: "right" }}>Kcal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getMealRows().map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #EDE8DF" }}>
                        <td style={{ padding: "12px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>
                          {row.name} {row.time && <span style={{ fontSize: 11, color: "#6E6864", fontWeight: "normal", display: "inline", marginLeft: 4 }}>({row.time})</span>}
                        </td>
                        <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{row.p}g</td>
                        <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{row.c}g</td>
                        <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{row.f}g</td>
                        <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontWeight: 600, color: "#C4622D", fontFamily: "var(--font-dm-mono),monospace" }}>{row.kcal}</td>
                      </tr>
                    ))}
                    <tr style={{ background: "#F5EFEB", fontWeight: "bold" }}>
                      <td style={{ padding: "12px", fontSize: 13, color: "#1A1714" }}>Daily Total</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{results.proteinG}g</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{results.carbG}g</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", fontFamily: "var(--font-dm-mono),monospace" }}>{results.fatG}g</td>
                      <td style={{ padding: "12px", fontSize: 13, textAlign: "right", color: "#C4622D", fontFamily: "var(--font-dm-mono),monospace" }}>
                        {getMealRows().reduce((acc, r) => acc + r.kcal, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CARD 5 — Food Source Mapper */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 320ms ease-out forwards" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>HIT YOUR TARGETS WITH REAL FOOD</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>
                What {results.proteinG}g of protein actually looks like.
              </h3>

              {/* Protein tabs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingBottom: 8, marginBottom: 16, borderBottom: "1px solid #EDE8DF" }}>
                {[
                  { key: "chicken", label: "🍗 Chicken" },
                  { key: "eggs", label: "🥚 Eggs" },
                  { key: "fish", label: "🐟 Fish" },
                  { key: "paneer", label: "🧀 Paneer" },
                  { key: "lentils", label: "🫘 Lentils (Vegan)" },
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveProteinTab(tab.key)}
                    style={{
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "none",
                      background: activeProteinTab === tab.key ? "#EDE8DF" : "transparent",
                      color: activeProteinTab === tab.key ? "#1A1714" : "#6E6864",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Protein tab contents */}
              <div style={{ background: "#FDFAF4", border: "1px solid #EDE8DF", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
                {activeProteinTab === "chicken" && (
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>To hit {results.proteinG}g protein from Chicken Breast:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                      <div className="food-detail-row">
                        <span>100g raw (31g protein)</span>
                        <strong>{Math.ceil(results.proteinG / 31)} servings ({Math.round(results.proteinG / 31 * 100)}g)</strong>
                      </div>
                      <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                        <span>1 breast (~45g protein)</span>
                        <strong>~{(results.proteinG / 45).toFixed(1)} breasts</strong>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                      {Array.from({ length: Math.max(1, Math.round(results.proteinG / 45)) }).map((_, i) => "🍗")}
                      <span style={{ fontSize: 12, color: "#6E6864", marginLeft: 8, letterSpacing: 0 }}>= {results.proteinG}g protein</span>
                    </div>
                  </div>
                )}
                {activeProteinTab === "eggs" && (
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>To hit {results.proteinG}g protein from Eggs:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                      <div className="food-detail-row">
                        <span>1 whole egg (6g protein)</span>
                        <strong>{Math.round(results.proteinG / 6)} whole eggs</strong>
                      </div>
                      <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                        <span>1 egg white (4g protein)</span>
                        <strong>{Math.round(results.proteinG / 4)} egg whites</strong>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                      {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.proteinG / 6))) }).map((_, i) => "🥚")}
                      {Math.round(results.proteinG / 6) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.proteinG / 6) - 15} more</span>}
                      <span style={{ fontSize: 12, color: "#6E6864", marginLeft: 8, letterSpacing: 0 }}>= {results.proteinG}g protein</span>
                    </div>
                  </div>
                )}
                {activeProteinTab === "fish" && (
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>To hit {results.proteinG}g protein from Fish Fillet:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                      <div className="food-detail-row">
                        <span>100g raw (22g protein)</span>
                        <strong>{Math.ceil(results.proteinG / 22)} servings ({Math.round(results.proteinG / 22 * 100)}g)</strong>
                      </div>
                      <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                        <span>1 standard fillet (~35g protein)</span>
                        <strong>~{(results.proteinG / 35).toFixed(1)} fillets</strong>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                      {Array.from({ length: Math.max(1, Math.round(results.proteinG / 35)) }).map((_, i) => "🐟")}
                      <span style={{ fontSize: 12, color: "#6E6864", marginLeft: 8, letterSpacing: 0 }}>= {results.proteinG}g protein</span>
                    </div>
                  </div>
                )}
                {activeProteinTab === "paneer" && (
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>To hit {results.proteinG}g protein from Paneer:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                      <div className="food-detail-row">
                        <span>100g block (18g protein)</span>
                        <strong>{Math.ceil(results.proteinG / 18)} servings ({Math.round(results.proteinG / 18 * 100)}g)</strong>
                      </div>
                      <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                        <span>200g standard block (36g protein)</span>
                        <strong>~{(results.proteinG / 36).toFixed(1)} blocks</strong>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                      {Array.from({ length: Math.max(1, Math.round(results.proteinG / 36)) }).map((_, i) => "🧀")}
                      <span style={{ fontSize: 12, color: "#6E6864", marginLeft: 8, letterSpacing: 0 }}>= {results.proteinG}g protein</span>
                    </div>
                  </div>
                )}
                {activeProteinTab === "lentils" && (
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>To hit {results.proteinG}g protein from Lentils:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                      <div className="food-detail-row">
                        <span>1 cup cooked dal (9g protein)</span>
                        <strong>{Math.ceil(results.proteinG / 9)} cups</strong>
                      </div>
                      <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                        <span>100g raw red lentils (24g protein)</span>
                        <strong>~{(results.proteinG / 24).toFixed(1)} servings</strong>
                      </div>
                    </div>
                    <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                      {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.proteinG / 9))) }).map((_, i) => "🫘")}
                      {Math.round(results.proteinG / 9) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.proteinG / 9) - 15} more</span>}
                      <span style={{ fontSize: 12, color: "#6E6864", marginLeft: 8, letterSpacing: 0 }}>= {results.proteinG}g protein</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Toggles for Carb & Fat sources */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 10 }}>
                <button
                  onClick={() => setShowCarbMapper(!showCarbMapper)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: "1px solid #C4622D",
                    color: "#C4622D",
                    background: showCarbMapper ? "#FDF0E8" : "transparent",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {showCarbMapper ? "Hide carb sources" : "Show carb sources"}
                </button>
                <button
                  onClick={() => setShowFatMapper(!showFatMapper)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: "1px solid #C4622D",
                    color: "#C4622D",
                    background: showFatMapper ? "#FDF0E8" : "transparent",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {showFatMapper ? "Hide fat sources" : "Show fat sources"}
                </button>
              </div>

              {/* Carb Source Mapper */}
              {showCarbMapper && (
                <div style={{ marginTop: 20, borderTop: "1px solid #EDE8DF", paddingTop: 20 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>🍚 Carb Sources Mapping ({results.carbG}g Target)</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingBottom: 8, marginBottom: 16 }}>
                    {[
                      { key: "rice", label: "🍚 Rice" },
                      { key: "roti", label: "🫓 Roti" },
                      { key: "oats", label: "🥣 Oats" },
                      { key: "banana", label: "🍌 Banana" },
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveCarbTab(tab.key)}
                        style={{
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          padding: "6px 12px",
                          borderRadius: 6,
                          border: "none",
                          background: activeCarbTab === tab.key ? "#EDE8DF" : "transparent",
                          color: activeCarbTab === tab.key ? "#1A1714" : "#6E6864",
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ background: "#FDFAF4", border: "1px solid #EDE8DF", borderRadius: 12, padding: "16px 20px" }}>
                    {activeCarbTab === "rice" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row">
                            <span>1 cup cooked white rice (45g carbs)</span>
                            <strong>~{(results.carbG / 45).toFixed(1)} cups</strong>
                          </div>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>100g uncooked white rice (80g carbs)</span>
                            <strong>~{(results.carbG / 80).toFixed(1)} portions</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.carbG / 45))) }).map((_, i) => "🍚")}
                          {Math.round(results.carbG / 45) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.carbG / 45) - 15} more</span>}
                        </div>
                      </div>
                    )}
                    {activeCarbTab === "roti" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>1 standard wheat roti (15g carbs)</span>
                            <strong>~{(results.carbG / 15).toFixed(1)} rotis</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.carbG / 15))) }).map((_, i) => "🫓")}
                          {Math.round(results.carbG / 15) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.carbG / 15) - 15} more</span>}
                        </div>
                      </div>
                    )}
                    {activeCarbTab === "oats" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row">
                            <span>1 cup cooked oatmeal (28g carbs)</span>
                            <strong>~{(results.carbG / 28).toFixed(1)} cups</strong>
                          </div>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>100g dry oats (66g carbs)</span>
                            <strong>~{(results.carbG / 66).toFixed(1)} portions</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.carbG / 28))) }).map((_, i) => "🥣")}
                          {Math.round(results.carbG / 28) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.carbG / 28) - 15} more</span>}
                        </div>
                      </div>
                    )}
                    {activeCarbTab === "banana" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>1 medium banana (27g carbs)</span>
                            <strong>~{(results.carbG / 27).toFixed(1)} bananas</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.carbG / 27))) }).map((_, i) => "🍌")}
                          {Math.round(results.carbG / 27) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.carbG / 27) - 15} more</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Fat Source Mapper */}
              {showFatMapper && (
                <div style={{ marginTop: 20, borderTop: "1px solid #EDE8DF", paddingTop: 20 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>🥜 Fat Sources Mapping ({results.fatG}g Target)</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingBottom: 8, marginBottom: 16 }}>
                    {[
                      { key: "almonds", label: "🥜 Almonds" },
                      { key: "oliveoil", label: "🫒 Olive Oil" },
                      { key: "eggyolk", label: "🥚 Egg Yolk" },
                      { key: "ghee", label: "🧈 Ghee" },
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveFatTab(tab.key)}
                        style={{
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          padding: "6px 12px",
                          borderRadius: 6,
                          border: "none",
                          background: activeFatTab === tab.key ? "#EDE8DF" : "transparent",
                          color: activeFatTab === tab.key ? "#1A1714" : "#6E6864",
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ background: "#FDFAF4", border: "1px solid #EDE8DF", borderRadius: 12, padding: "16px 20px" }}>
                    {activeFatTab === "almonds" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row">
                            <span>10 almonds (5g fat)</span>
                            <strong>~{(results.fatG / 5).toFixed(1)} servings ({Math.round(results.fatG / 5 * 10)} nuts)</strong>
                          </div>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>100g almonds (49g fat)</span>
                            <strong>~{(results.fatG / 49).toFixed(1)} portions</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.fatG / 5))) }).map((_, i) => "🥜")}
                          {Math.round(results.fatG / 5) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.fatG / 5) - 15} more</span>}
                        </div>
                      </div>
                    )}
                    {activeFatTab === "oliveoil" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>1 tbsp olive oil (14g fat)</span>
                            <strong>~{(results.fatG / 14).toFixed(1)} tbsp</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.max(1, Math.round(results.fatG / 14)) }).map((_, i) => "🫒")}
                        </div>
                      </div>
                    )}
                    {activeFatTab === "eggyolk" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>1 whole egg yolk (5g fat)</span>
                            <strong>~{(results.fatG / 5).toFixed(1)} yolks</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.fatG / 5))) }).map((_, i) => "🥚")}
                          {Math.round(results.fatG / 5) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.fatG / 5) - 15} more</span>}
                        </div>
                      </div>
                    )}
                    {activeFatTab === "ghee" && (
                      <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                          <div className="food-detail-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                            <span>1 tsp ghee (5g fat)</span>
                            <strong>~{(results.fatG / 5).toFixed(1)} tsp</strong>
                          </div>
                        </div>
                        <div style={{ marginTop: 14, fontSize: 18, letterSpacing: 4 }}>
                          {Array.from({ length: Math.min(15, Math.max(1, Math.round(results.fatG / 5))) }).map((_, i) => "🧈")}
                          {Math.round(results.fatG / 5) > 15 && <span style={{ fontSize: 13, color: "#6E6864", letterSpacing: 0 }}> + {Math.round(results.fatG / 5) - 15} more</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* CARD 6 — Supplement Gap Analyzer */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 400ms ease-out forwards" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>SUPPLEMENT GAP</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Can you hit this from food alone?</h3>

              {proteinGap > 0 ? (
                <div>
                  <div style={{ background: "#FEF2F2", border: "1px solid #EF4444", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                      ⚡ PROTEIN GAP DETECTED
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "#1A1714" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Your target:</span>
                        <strong>{results.proteinG}g / day</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F3D9D9", paddingBottom: 6 }}>
                        <span>Comfortable from food:</span>
                        <strong style={{ color: "#5C5650" }}>~{comfortableProteinFromFood}g / day</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: 14 }}>
                        <span style={{ color: "#EF4444" }}>Supplement gap:</span>
                        <strong style={{ color: "#EF4444" }}>~{proteinGap}g / day</strong>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>
                      That&apos;s roughly <strong>{Math.round(proteinGap / 25)} scoops</strong> of protein powder per day to hit your target easily.
                    </p>
                  </div>

                  <div style={{ background: "#1C1C1C", borderRadius: 12, padding: "20px 24px", border: "1px solid #2D2D2D" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#E58B58", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                      🔎 FIND YOUR PROTEIN POWDER
                    </div>
                    <p style={{ fontSize: 14, color: "#D1D5DB", marginBottom: 14, lineHeight: 1.5 }}>
                      We&apos;ve reviewed 40+ protein supplements. Here are the top-rated options for <strong style={{ color: "#FFFFFF" }}>{goalLabels[results.goal]}</strong>:
                    </p>
                    <a
                      href={results.dietStyle === "vegan" ? "/best-of/vegan-protein-powders" : "/best-of/protein-powders"}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "#C4622D",
                        color: "#FFFFFF",
                        padding: "10px 20px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                    >
                      {results.dietStyle === "vegan" ? "See Best Vegan Protein Powders →" : "See Best Protein Powders →"}
                    </a>
                  </div>
                </div>
              ) : (
                <div style={{ background: "#ECFDF5", border: "1px solid #10B981", borderRadius: 12, padding: "16px 20px", color: "#065F46" }}>
                  <p style={{ fontSize: 14, fontWeight: "bold", margin: 0 }}>
                    ✓ You can hit your protein from whole food alone. No supplement needed.
                  </p>
                  <p style={{ fontSize: 13, margin: "6px 0 0 0", lineHeight: 1.5 }}>
                    Your weight ({results.weightKg.toFixed(0)} kg) and goal require a modest amount of protein that you can easily obtain through whole-food meals like eggs, chicken, paneer, and lentils.
                  </p>
                </div>
              )}
            </div>

            {/* CARD 7 — South Asia Food Context */}
            <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", marginBottom: 20, boxShadow: "0 4px 24px rgba(26,23,20,0.06)", opacity: 0, animation: "slideUp 250ms 480ms ease-out forwards" }}>
              <div className="regional-header">
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6E6864", letterSpacing: "0.1em", textTransform: "uppercase" }}>WHAT THIS LOOKS LIKE IN A DAY</span>
                
                {/* Region dropdown */}
                <select
                  value={activeRegion}
                  onChange={e => setActiveRegion(e.target.value as Region)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "1px solid #D4C9B8",
                    background: "#FDFAF4",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A1714",
                    cursor: "pointer",
                  }}
                >
                  <option value="southAsia">IN South Asia</option>
                  <option value="western">Western</option>
                  <option value="eastAsian">East Asian</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="latinAmerican">Latin American</option>
                  <option value="westAfrican">West African</option>
                </select>
              </div>

              {/* Dynamic meal plan layout */}
              {(() => {
                const bMeal = {
                  p: Math.round(results.proteinG * 0.25),
                  c: Math.round(results.carbG * 0.25),
                  f: Math.round(results.fatG * 0.25),
                  kcal: Math.round(results.calories * 0.25),
                };
                const lMeal = {
                  p: Math.round(results.proteinG * 0.45),
                  c: Math.round(results.carbG * 0.45),
                  f: Math.round(results.fatG * 0.45),
                  kcal: Math.round(results.calories * 0.45),
                };
                const dMeal = {
                  p: results.proteinG - bMeal.p - lMeal.p,
                  c: results.carbG - bMeal.c - lMeal.c,
                  f: results.fatG - bMeal.f - lMeal.f,
                  kcal: results.calories - bMeal.kcal - lMeal.kcal,
                };

                const details = {
                  southAsia: {
                    breakfast: ["2 eggs + 1 cup milk chai", "2 rotis or 1 cup poha", "1 tsp ghee for cooking"],
                    lunch: ["150g chicken curry or 1 cup rajma", "1.5 cups rice or 3 rotis", "Dal tadka with 1 tsp oil"],
                    dinner: ["100g paneer or 1 cup dal", "2 rotis or 1 cup khichdi", "Light sabzi with minimal oil"],
                  },
                  western: {
                    breakfast: ["3 scrambled eggs or 1 scoop whey", "1 cup oatmeal with berries", "1 tbsp peanut butter"],
                    lunch: ["150g grilled chicken breast", "1 medium baked sweet potato", "Mixed greens + 1 tbsp olive oil"],
                    dinner: ["150g baked salmon fillet", "1 cup cooked quinoa", "Roasted asparagus with butter"],
                  },
                  eastAsian: {
                    breakfast: ["Silken tofu soup or steamed egg", "1 bowl of rice congee", "Sesame oil drizzle"],
                    lunch: ["150g beef stir-fry", "Udon noodles or steamed rice", "Stir-fried bok choy in peanut oil"],
                    dinner: ["150g steamed white fish", "Steamed edamame + brown rice", "Sesame seaweed salad"],
                  },
                  mediterranean: {
                    breakfast: ["1 cup Greek yogurt", "Handful of berries + oats", "1 tbsp walnuts + honey"],
                    lunch: ["150g sea bass or tuna salad", "1 cup chickpeas", "Greek salad with olive oil"],
                    dinner: ["150g grilled lamb souvlaki", "Whole wheat pita bread", "Hummus + olive oil dip"],
                  },
                  latinAmerican: {
                    breakfast: ["3 scrambled eggs + black beans", "2 warm corn tortillas", "Sliced half avocado"],
                    lunch: ["150g carne asada (beef)", "1 cup rice + pinto beans", "Cooked in light oil or lard"],
                    dinner: ["150g garlic shrimp", "Tostones (plantains)", "Cilantro lime butter sauce"],
                  },
                  westAfrican: {
                    breakfast: ["Akara (bean cakes) or 3 boiled eggs", "Pap (corn porridge)", "Red palm oil dip (sparingly)"],
                    lunch: ["150g grilled tilapia fish", "Jollof rice or boiled yams", "Tomato-based stew sauce"],
                    dinner: ["150g goat meat or chicken", "Fufu or pounded yam", "Egusi (melon seed) soup"],
                  },
                };

                const currentPlan = details[activeRegion];

                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { title: "BREAKFAST", macros: bMeal, foods: currentPlan.breakfast },
                      { title: "LUNCH", macros: lMeal, foods: currentPlan.lunch },
                      { title: "DINNER", macros: dMeal, foods: currentPlan.dinner },
                    ].map(meal => (
                      <div key={meal.title} style={{ borderBottom: "1px solid #EDE8DF", paddingBottom: 16 }}>
                        <div className="meal-header">
                          <strong style={{ fontSize: 13, color: "#C4622D", letterSpacing: "0.05em" }}>{meal.title} ({meal.macros.kcal} kcal)</strong>
                          <span style={{ fontSize: 11, color: "#6E6864", fontFamily: "var(--font-dm-mono),monospace" }}>
                            P: {meal.macros.p}g · C: {meal.macros.c}g · F: {meal.macros.f}g
                          </span>
                        </div>
                        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>
                          {meal.foods.map((food, i) => (
                            <li key={i} style={{ marginBottom: 4 }}>{food}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <p style={{ fontSize: 11, color: "#6E6864", margin: "8px 0 0 0", textAlign: "center", fontStyle: "italic" }}>
                      Approximate values. Portions and preparation vary.
                    </p>
                  </div>
                );
              })()}
            </div>

            {/* CARD 8 — Shareable Macro Card */}
            <div style={{ opacity: 0, animation: "slideUp 250ms 560ms ease-out forwards", marginBottom: 20 }}>
              {/* Hidden canvas */}
              <canvas ref={canvasRef} style={{ display: "none" }} />

              {/* Preview Card */}
              <div style={{ background: "#1C1C1C", borderRadius: 16, padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)", border: "1px solid #2D2D2D", marginBottom: 12 }}>
                <div style={{ height: 3, background: "#C4622D", borderRadius: 2, marginBottom: 16 }} />
                <p style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 16 }}>
                  FITLAB · EVIDENCE-LED SUPPLEMENT RESEARCH
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>💪 My Daily Macro Targets</h3>
                <p style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16 }}>
                  Goal: {goalLabels[results.goal]} · {dietLabels[results.dietStyle]} Diet
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Protein", val: `${results.proteinG}g`, cal: `${results.proteinKcal} kcal` },
                    { label: "Carbs", val: `${results.carbG}g`, cal: `${results.carbKcal} kcal` },
                    { label: "Fat", val: `${results.fatG}g`, cal: `${results.fatKcal} kcal` },
                  ].map((r, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", padding: "8px 0", borderBottom: "1px solid #2A2A2A" }}>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{r.label}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#E58B58" }}>{r.val}</span>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{r.cal}</span>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 14, color: "#FFFFFF", fontWeight: "bold" }}>
                  Daily Total: {results.calories.toLocaleString()} kcal
                </div>

                <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 14, marginBottom: 0 }}>
                  Calculate yours → fitlabreviews.com/tools/free/macros-calculator
                </p>
              </div>

              <button
                onClick={drawAndDownloadShareCard}
                style={{
                  width: "100%",
                  padding: "13px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#C4622D",
                  color: "#FDFAF4",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans),sans-serif",
                  boxShadow: "0 4px 16px rgba(196,98,45,0.3)",
                }}
              >
                ⬇ Download My Macro Card
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={reset}
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: 10,
                border: "1px solid #D4C9B8",
                background: "transparent",
                color: "#5C5650",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans),sans-serif",
                marginBottom: 24,
              }}
            >
              ↺ Start Over
            </button>

            {/* NEXT STEP CTA (Dark card) */}
            <div style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)", borderRadius: 16, padding: "clamp(20px, 5vw, 28px) clamp(16px, 4vw, 28px) clamp(16px, 4vw, 24px)", marginBottom: 24, border: "1px solid #374151", opacity: 0, animation: "slideUp 250ms 640ms ease-out forwards" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#E58B58", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 8v3a1.5 1.5 0 0 0 3 0V8" />
                  <path d="M15 8v8" />
                </svg>
                NEXT STEP
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Want a full 7-day meal plan built around these exact macros?</h3>
              <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 16, lineHeight: 1.6 }}>
                Our Meal Plan Generator creates breakfast, lunch, dinner, and snacks — matched to your <strong style={{ color: "#FFFFFF" }}>{results.proteinG}g protein</strong> / <strong style={{ color: "#FFFFFF" }}>{results.carbG}g carbs</strong> / <strong style={{ color: "#FFFFFF" }}>{results.fatG}g fat</strong> targets.
              </p>
              <a
                href="/tools/paid/meal-plan-generator"
                style={{
                  display: "inline-block",
                  background: "#C4622D",
                  color: "#FDFAF4",
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(196,98,45,0.3)",
                  transition: "background 0.15s",
                }}
              >
                Build My Meal Plan →
              </a>
            </div>
          </div>
        )}

        {/* COMMON QUESTIONS (FAQ Accordion) */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16 }}>Common Questions</h2>
          <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 14, overflow: "hidden" }}>
            {[
              {
                q: "What's the difference between macros and calories?",
                a: "Calories determine whether you lose, maintain, or gain weight. Macros (macronutrients: protein, carbs, and fat) determine what kind of weight you lose or gain. Protein preserves or builds muscle, carbs fuel training, and fats support hormone function."
              },
              {
                q: "Why is protein so high on fat loss?",
                a: "When you are in a calorie deficit, your body is prone to burning muscle tissue for energy. High protein intake (e.g. 2.0–2.6g per kg of bodyweight) signals your body to retain muscle, ensuring that the weight you lose is fat. Protein is also highly satiating, which helps control hunger."
              },
              {
                q: "Do I need to hit my macros exactly every day?",
                a: "No. Consistency over perfection is key. Hitting within ±10% of your targets 80% of the time will yield the exact same results as trying to hit exact numbers daily. Focus on hitting your daily protein and calorie targets first, and let carbs and fats have some flexibility."
              },
              {
                q: "What's macro cycling and should I do it?",
                a: "Macro cycling involves eating more carbs (and fewer fats) on days you train to fuel workouts and replenish glycogen, and fewer carbs (with more fats) on rest days when energy demand is lower. While not strictly required, it helps optimize training performance and adherence."
              },
              {
                q: "Is a vegan diet enough to build muscle?",
                a: "Yes, you can build muscle on a plant-based diet. However, vegan protein sources are often less bioavailable and have lower leucine content, so vegans should target slightly higher overall protein intakes (1.8–2.1g per kg) and combine varied sources to ensure a complete amino acid profile."
              }
            ].map(f => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* SHARE + RELATED ARTICLES block */}
        <div style={{ background: "#FDFAF4", border: "1px solid #D4C9B8", borderRadius: 14, padding: "20px 24px", marginBottom: 24, textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "#5C5650", marginBottom: 12, fontWeight: 600 }}>Found this helpful?</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={handleShare}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: "1px solid #D4C9B8",
                background: "#EDE8DF",
                color: "#1A1714",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans),sans-serif"
              }}
            >
              📤 Share My Macros
            </button>
            <a
              href="/ingredients/whey-protein"
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: "1px solid #C4622D",
                color: "#C4622D",
                fontSize: 13,
                fontWeight: 600,
                display: "inline-block",
                textDecoration: "none"
              }}
            >
              Read: Best High-Protein American Foods →
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.7, borderTop: "1px solid #D4C9B8", paddingTop: 20, textAlign: "center" }}>
          ⚕️ This tool provides general wellness information only and is not a substitute for medical advice. Consult a healthcare professional before making changes to your diet, exercise, or supplement routine.
        </p>
      </div>
    </div>
  );
}
