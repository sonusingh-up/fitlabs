"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertTriangle, Wand2, HelpCircle, Save, RotateCcw, ChevronDown, Flame, Scale, Zap, TrendingDown, TrendingUp, Minus, Info } from "lucide-react";
import { useTDEE, useAdaptiveTDEE, TDEEInputs } from "../../../hooks/useTDEE";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { saveTDEEProfile, saveBulkLogs } from "../../actions/tdee-actions";
import TDEEShareCard from "../../../components/tools/TDEEShareCard";
import MacroDonut from "../../../components/tools/MacroDonut";

export default function CalculatorClient({ sanityContent }: { sanityContent?: any }) {
  const [activeTab, setActiveTab] = useState<"standard" | "adaptive">("standard");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const { register, setValue, watch, reset } = useForm<TDEEInputs>({
    defaultValues: {
      unitSystem: "imperial",
      sex: "male",
      age: "",
      weight: "",
      heightCm: "",
      heightFt: "",
      heightIn: "",
      bodyFat: "",
      formula: "mifflin",
      activity: "moderate",
      targetAdjustment: -20,
      macroModel: "balanced"
    }
  });

  const formValues = watch();
  const unitSystem = formValues.unitSystem;
  const result = useTDEE(formValues as TDEEInputs);

  const [logs, setLogs] = useLocalStorage<Array<{ day: number; weight: number | ""; calories: number | "" }>>(
    "tdee_adaptive_logs",
    Array.from({ length: 14 }, (_, i) => ({ day: i + 1, weight: "", calories: "" }))
  );

  const adaptiveResult = useAdaptiveTDEE(
    logs,
    formValues.unitSystem,
    formValues.targetAdjustment,
    formValues.macroModel,
    formValues.sex
  );

  const updateLog = (index: number, field: "weight" | "calories", value: string) => {
    const newLogs = [...logs];
    newLogs[index][field] = value ? Number(value) : "";
    setLogs(newLogs);
  };

  const autoFillLogs = () => {
    const newLogs = [...logs];
    const filledCals = newLogs.filter(l => l.calories !== "").map(l => l.calories as number);
    if (filledCals.length > 0) {
      const avgCal = Math.round(filledCals.reduce((a, b) => a + b, 0) / filledCals.length);
      newLogs.forEach(l => { if (l.calories === "") l.calories = avgCal; });
    }
    let firstValidIdx = newLogs.findIndex(l => l.weight !== "");
    let lastValidIdx = newLogs.findLastIndex(l => l.weight !== "");
    if (firstValidIdx !== -1 && lastValidIdx !== -1 && firstValidIdx < lastValidIdx) {
      const startW = newLogs[firstValidIdx].weight as number;
      const endW = newLogs[lastValidIdx].weight as number;
      const step = (endW - startW) / (lastValidIdx - firstValidIdx);
      for (let i = firstValidIdx + 1; i < lastValidIdx; i++) {
        if (newLogs[i].weight === "") {
          newLogs[i].weight = Number((startW + step * (i - firstValidIdx)).toFixed(1));
        }
      }
    }
    setLogs(newLogs);
  };

  const clearLogs = () => {
    setLogs(Array.from({ length: 14 }, (_, i) => ({ day: i + 1, weight: "", calories: "" })));
  };

  const [isSavingStandard, setIsSavingStandard] = useState(false);
  const handleSaveStandard = async () => {
    if (!result) return;
    setIsSavingStandard(true);
    const goal = formValues.targetAdjustment < 0 ? "fatLoss" : formValues.targetAdjustment > 0 ? "muscleGain" : "maintenance";
    await saveTDEEProfile({ unitSystem: formValues.unitSystem, targetGoal: goal, macroModel: formValues.macroModel, baselineTdee: result.tdee });
    setIsSavingStandard(false);
    alert("Profile saved to database!");
  };

  const [isSavingAdaptive, setIsSavingAdaptive] = useState(false);
  const handleSaveAdaptive = async () => {
    setIsSavingAdaptive(true);
    const validLogs = logs.filter(l => l.weight !== "" || l.calories !== "").map(l => {
      const d = new Date();
      d.setDate(d.getDate() - (14 - l.day));
      return { logDate: d.toISOString().split('T')[0], weight: l.weight === "" ? null : Number(l.weight), caloriesConsumed: l.calories === "" ? null : Number(l.calories) };
    });
    await saveBulkLogs(validLogs);
    setIsSavingAdaptive(false);
    alert("Adaptive logs saved to database!");
  };

  const getActivityTooltip = () => {
    if (sanityContent?.tooltips && Array.isArray(sanityContent.tooltips)) {
      const found = sanityContent.tooltips.find((t: any) => t.level === formValues.activity);
      if (found) return found.description;
    }
    switch (formValues.activity) {
      case "sedentary": return "< 5,000 steps/day. Desk job, driving, minimal movement.";
      case "light": return "5,000 – 7,000 steps/day. Light daily movement or 1–2 light workouts/week.";
      case "moderate": return "7,000 – 10,000 steps/day. Standard active lifestyle, 3–5 workouts/week.";
      case "active": return "10,000 – 12,000 steps/day. Very active job or intense 6 days/week training.";
      case "athlete": return "12,000+ steps/day. Manual labor or elite 2x/day training programs.";
      default: return "";
    }
  };

  const getGoalLabel = (adj: number) => {
    if (adj <= -25) return { label: "Aggressive Cut", icon: TrendingDown, color: "text-red-600" };
    if (adj < 0) return { label: "Fat Loss", icon: TrendingDown, color: "text-orange-600" };
    if (adj === 0) return { label: "Maintenance", icon: Minus, color: "text-[#0f7a5a]" };
    if (adj <= 10) return { label: "Lean Bulk", icon: TrendingUp, color: "text-blue-600" };
    return { label: "Aggressive Bulk", icon: TrendingUp, color: "text-purple-600" };
  };

  const goalInfo = getGoalLabel(formValues.targetAdjustment);
  const GoalIcon = goalInfo.icon;

  const filledLogCount = logs.filter(l => l.weight !== "" && l.calories !== "").length;

  return (
    <main className="min-h-screen bg-background text-ink pb-20">
      {/* ─── HERO ─── */}
      <section style={{ background: "linear-gradient(135deg, #e7f2ec 0%, #f2f8f4 50%, #eef6f1 100%)", borderBottom: "1px solid #e0ebe4" }} className="pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0f7a5a]/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#34d399]/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0f7a5a", marginBottom: 16 }} className="flex items-center justify-center gap-2">
            <Flame size={14} /> Advanced Engine · Evidence-Based
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.06, color: "#17211c" }}>
            The Adaptive <em style={{ fontStyle: "italic", color: "#0f7a5a" }}>TDEE Engine</em>
          </h1>
          <p className="text-base md:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Standard calculators guess your metabolism. Our adaptive tracker uses <strong className="text-ink">14 days of real data</strong> to find your true metabolic expenditure.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-10 flex justify-center gap-6 md:gap-10">
            {[
              { icon: Zap, label: "3 Formulas", sub: "Mifflin · Harris · Katch" },
              { icon: Scale, label: "Adaptive Tracking", sub: "14-Day Energy Balance" },
              { icon: Flame, label: "Macro Engine", sub: "3 Split Models" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#c9ead9] flex items-center justify-center shadow-sm">
                  <s.icon size={18} className="text-[#0f7a5a]" />
                </div>
                <span className="text-xs font-bold text-ink">{s.label}</span>
                <span className="text-[10px] text-ink-muted hidden md:block">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TAB NAVIGATION ─── */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 relative z-20 mb-10">
        <div className="flex bg-white rounded-xl shadow-editorial p-1.5 border border-border">
          {[
            { id: "standard" as const, label: "Standard Calculator", num: "01" },
            { id: "adaptive" as const, label: "14-Day Adaptive Tracker", num: "02" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3.5 text-sm font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[#0f7a5a] text-white shadow-md"
                  : "text-ink-soft hover:bg-background-alt"
              }`}
            >
              <span className={`text-[10px] font-mono ${activeTab === tab.id ? "text-white/60" : "text-ink-muted"}`}>{tab.num}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          STANDARD CALCULATOR
      ════════════════════════════════════════════════════════ */}
      {activeTab === "standard" && (
        <section className="max-w-3xl mx-auto px-6 relative z-10 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-editorial p-6 md:p-10 border border-border mb-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-bold text-ink-muted uppercase tracking-wider flex items-center gap-2">
                <Scale size={14} className="text-[#0f7a5a]" /> Your Profile
              </h2>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => reset()}
                  className="text-ink-muted text-xs font-medium hover:text-ink transition-colors flex items-center gap-1"
                >
                  <RotateCcw size={12} /> Reset
                </button>
                <button
                  type="button"
                  onClick={() => setValue("unitSystem", unitSystem === "imperial" ? "metric" : "imperial")}
                  className="bg-background-alt text-[#0f7a5a] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#c9ead9] hover:bg-[#e7f2ec] transition-colors"
                >
                  {unitSystem === "imperial" ? "🇺🇸 Imperial" : "🌍 Metric"}
                </button>
              </div>
            </div>

            <form>
              {/* Row 1: Age + Sex */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Age</label>
                  <input
                    type="number"
                    {...register("age", { valueAsNumber: true })}
                    className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all placeholder:text-ink-muted/50"
                    placeholder="e.g. 28"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Biological Sex</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["male", "female"] as const).map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setValue("sex", s)}
                        className={`py-3.5 rounded-xl text-sm font-bold transition-all border ${
                          formValues.sex === s
                            ? "border-[#0f7a5a] bg-[#0f7a5a]/10 text-[#0f7a5a] shadow-sm"
                            : "border-border bg-background-alt text-ink-soft hover:bg-white"
                        }`}
                      >
                        {s === "male" ? "♂ Male" : "♀ Female"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Weight + Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Weight</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="any"
                      {...register("weight", { valueAsNumber: true })}
                      className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all pr-14 placeholder:text-ink-muted/50"
                      placeholder={`e.g. ${unitSystem === "metric" ? "75" : "165"}`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted bg-white px-2 py-1 rounded-md border border-border">{unitSystem === "metric" ? "kg" : "lbs"}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Height</label>
                  {unitSystem === "metric" ? (
                    <div className="relative">
                      <input
                        type="number"
                        {...register("heightCm", { valueAsNumber: true })}
                        className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all pr-14 placeholder:text-ink-muted/50"
                        placeholder="e.g. 175"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted bg-white px-2 py-1 rounded-md border border-border">cm</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          type="number"
                          {...register("heightFt", { valueAsNumber: true })}
                          className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all pr-10 placeholder:text-ink-muted/50"
                          placeholder="5"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted">ft</span>
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          {...register("heightIn", { valueAsNumber: true })}
                          className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all pr-10 placeholder:text-ink-muted/50"
                          placeholder="10"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted">in</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Advanced Toggle */}
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full mb-6 flex items-center justify-between p-4 bg-[#faf6f3] rounded-xl border border-[#f0e8e2] hover:bg-[#f5eee8] transition-colors group"
              >
                <span className="text-sm font-bold text-ink flex items-center gap-2">
                  <Zap size={14} className="text-amber-600" /> Advanced Engine Settings
                </span>
                <ChevronDown size={16} className={`text-ink-muted transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
              </button>

              {showAdvanced && (
                <div className="mb-6 p-5 bg-[#faf6f3] rounded-xl border border-[#f0e8e2] animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Body Fat %</label>
                      <input
                        type="number"
                        {...register("bodyFat", { valueAsNumber: true })}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all placeholder:text-ink-muted/50"
                        placeholder="e.g. 15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">Primary Formula</label>
                      <select
                        {...register("formula")}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:border-[#0f7a5a] appearance-none"
                      >
                        <option value="mifflin">Mifflin-St Jeor (Default)</option>
                        <option value="harris_benedict">Harris-Benedict (Revised)</option>
                        <option value="katch_mcardle">Katch-McArdle (Lean Mass)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-3">
                    <Info size={12} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-ink-muted">
                      Katch-McArdle requires Body Fat % to calculate Lean Body Mass. If left empty, 15% is used as a safe default.
                    </p>
                  </div>
                </div>
              )}

              {/* Activity Level */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">
                  Activity Level (PAL)
                </label>
                <select
                  {...register("activity")}
                  className="w-full bg-background-alt border border-border rounded-xl px-4 py-3.5 text-ink font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-2 focus:ring-[#0f7a5a]/20 transition-all appearance-none"
                >
                  <option value="sedentary">Sedentary (×1.2)</option>
                  <option value="light">Lightly Active (×1.375)</option>
                  <option value="moderate">Moderately Active (×1.55)</option>
                  <option value="active">Very Active (×1.725)</option>
                  <option value="athlete">Athlete / Physical Labor (×1.9)</option>
                </select>
                <div className="flex items-start gap-2 mt-2.5 px-1">
                  <HelpCircle size={13} className="text-[#0f7a5a] shrink-0 mt-0.5" />
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {getActivityTooltip()}
                  </p>
                </div>
              </div>

              {/* ── Target & Macros ── */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xs font-bold text-ink-muted uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Flame size={14} className="text-[#0f7a5a]" /> Target & Macros
                </h3>

                {/* Goal slider */}
                <div className="mb-8 p-5 bg-background-alt rounded-xl border border-border">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-ink flex items-center gap-2">
                      <GoalIcon size={16} className={goalInfo.color} />
                      {goalInfo.label}
                    </label>
                    <span className="text-sm font-bold text-[#0f7a5a] bg-white px-3 py-1 rounded-lg border border-[#c9ead9]">
                      {formValues.targetAdjustment > 0 ? `+${formValues.targetAdjustment}%` : `${formValues.targetAdjustment}%`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-30" max="20" step="5"
                    {...register("targetAdjustment", { valueAsNumber: true })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f7a5a]"
                  />
                  <div className="flex justify-between text-[10px] text-ink-muted mt-2 px-0.5 font-medium">
                    <span>−30% Cut</span>
                    <span>Maintain</span>
                    <span>+20% Bulk</span>
                  </div>
                </div>

                {/* Macro Model */}
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-3">Macro Split</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "balanced" as const, label: "Balanced", split: "40C / 30P / 30F" },
                      { id: "lowCarb" as const, label: "Low Carb", split: "25C / 40P / 35F" },
                      { id: "highCarb" as const, label: "High Carb", split: "50C / 30P / 20F" }
                    ].map(m => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setValue("macroModel", m.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          formValues.macroModel === m.id
                            ? "border-[#0f7a5a] bg-[#0f7a5a]/10 shadow-sm"
                            : "border-border bg-white hover:bg-background-alt"
                        }`}
                      >
                        <div className={`text-sm font-bold mb-0.5 ${formValues.macroModel === m.id ? "text-[#0f7a5a]" : "text-ink"}`}>{m.label}</div>
                        <div className="text-[10px] text-ink-muted">{m.split}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* ═════════ RESULTS PANEL ═════════ */}
          {result && (
            <section className="animate-fade-in">
              {result.bmiWarning && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-bold text-sm mb-1">Medical Advisory (BMI {result.bmi})</p>
                    <p className="text-xs leading-relaxed">Your calculated Body Mass Index falls outside standard ranges (&lt;16 or &gt;50). Consult a healthcare professional before pursuing aggressive nutritional changes.</p>
                  </div>
                </div>
              )}

              {/* Primary Result Card */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-border mb-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-1.5 bg-[#e0f0e8] text-[#0f7a5a] text-xs font-mono tracking-wide uppercase px-3 py-1 rounded-full mb-5">
                    <Zap size={12} /> Real-Time Calculation
                  </div>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl md:text-3xl mb-3 font-medium">
                    {formValues.targetAdjustment === 0 ? "Your Maintenance Calories" : (formValues.targetAdjustment < 0 ? "Your Fat Loss Target" : "Your Muscle Gain Target")}
                  </h2>
                  <div style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif", color: "#0f7a5a" }} className="text-7xl md:text-8xl font-bold mb-3 tracking-tight transition-all">
                    {result.targetCalories}<span className="text-4xl text-ink-muted font-normal">kcal</span>
                  </div>
                  {result.clamped && (
                    <p className="text-xs text-red-600 font-bold mb-3 bg-red-50 inline-block px-3 py-1 rounded-lg">
                      ⚠️ Clamped to safe minimum floor ({result.minCals} kcal)
                    </p>
                  )}
                </div>

                {/* BMR / TDEE Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                  <div className="bg-background-alt p-4 rounded-xl border border-border text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mb-1">BMR</div>
                    <div className="text-xl font-bold text-ink">{result.bmr}</div>
                  </div>
                  <div className="bg-background-alt p-4 rounded-xl border border-border text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mb-1">TDEE</div>
                    <div className="text-xl font-bold text-ink">{result.tdee}</div>
                  </div>
                  <div className="bg-background-alt p-4 rounded-xl border border-border text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mb-1">Formula</div>
                    <div className="text-sm font-bold text-ink">{formValues.formula === "mifflin" ? "Mifflin" : formValues.formula === "katch_mcardle" ? "Katch" : "Harris"}</div>
                  </div>
                </div>

                {/* Donut + Macros */}
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }} className="text-xl font-medium text-[#17211c] mb-8 text-center">Daily Macro Allocation</h3>

                <MacroDonut
                  protein={result.macros.protein}
                  carbs={result.macros.carbs}
                  fat={result.macros.fat}
                  calories={result.targetCalories}
                />

                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8">
                  <div className="bg-red-50 border border-red-200 text-red-950 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-red-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Protein</div>
                    <div className="text-2xl font-bold">{result.macros.protein}g</div>
                    <div className="text-[10px] text-red-400 mt-1">{result.macros.protein * 4} kcal</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 text-blue-950 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-blue-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Carbs</div>
                    <div className="text-2xl font-bold">{result.macros.carbs}g</div>
                    <div className="text-[10px] text-blue-400 mt-1">{result.macros.carbs * 4} kcal</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 text-amber-950 p-4 rounded-xl text-center shadow-sm">
                    <div className="text-amber-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Fat</div>
                    <div className="text-2xl font-bold">{result.macros.fat}g</div>
                    <div className="text-[10px] text-amber-400 mt-1">{result.macros.fat * 9} kcal</div>
                  </div>
                </div>

                {/* Save CTA */}
                <div className="mt-8 pt-6 border-t border-border flex justify-center">
                  <button
                    onClick={handleSaveStandard}
                    disabled={isSavingStandard}
                    className="flex items-center gap-2 bg-[#0f7a5a] hover:bg-[#0c6148] text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50 shadow-sm hover:shadow-md"
                  >
                    <Save size={18} /> {isSavingStandard ? "Saving..." : "Save Profile to Account"}
                  </button>
                </div>
              </div>

              {/* Share Card */}
              <TDEEShareCard
                tdee={result.tdee}
                targetCalories={result.targetCalories}
                bmr={result.bmr}
                formula={formValues.formula}
                macros={result.macros}
                goal={goalInfo.label}
                macroModel={formValues.macroModel}
              />
            </section>
          )}
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          ADAPTIVE TRACKER
      ════════════════════════════════════════════════════════ */}
      {activeTab === "adaptive" && (
        <section className="max-w-3xl mx-auto px-6 relative z-10 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-editorial p-6 md:p-10 border border-border mb-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-ink mb-1 flex items-center gap-2">
                  <Scale size={18} className="text-[#0f7a5a]" /> 14-Day Data Logs
                </h2>
                <p className="text-sm text-ink-soft max-w-md leading-relaxed">
                  Enter your daily morning weight and calorie intake. Fill Day 1 & Day 14, then hit <strong>Smart Auto-Fill</strong> to interpolate everything else.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={clearLogs}
                  className="flex items-center justify-center gap-1.5 text-ink-muted hover:text-ink px-3 py-2 rounded-lg text-xs font-bold transition-colors border border-border hover:border-ink-muted/30"
                >
                  <RotateCcw size={13} /> Clear All
                </button>
                <button
                  onClick={autoFillLogs}
                  className="flex items-center justify-center gap-2 bg-[#f2f8f4] text-[#0f7a5a] border border-[#c9ead9] hover:bg-[#e7f2ec] px-4 py-2.5 rounded-lg text-sm font-bold transition-colors"
                >
                  <Wand2 size={15} /> Auto-Fill
                </button>
                <button
                  onClick={handleSaveAdaptive}
                  disabled={isSavingAdaptive}
                  className="flex items-center justify-center gap-2 bg-[#0f7a5a] hover:bg-[#0c6148] text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-50 shadow-sm hover:shadow-md"
                >
                  <Save size={15} /> {isSavingAdaptive ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            {/* Inline Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-background-alt rounded-xl border border-border">
              <div>
                <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">Target Adjuster</label>
                <div className="flex items-center gap-3 bg-white border border-border rounded-xl px-3 py-2.5">
                  <span className="text-sm font-bold text-[#0f7a5a] w-12 shrink-0">{formValues.targetAdjustment > 0 ? `+${formValues.targetAdjustment}%` : `${formValues.targetAdjustment}%`}</span>
                  <input
                    type="range"
                    min="-30" max="20" step="5"
                    {...register("targetAdjustment", { valueAsNumber: true })}
                    className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f7a5a]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">Macro Split</label>
                <select
                  {...register("macroModel")}
                  className="w-full bg-white border border-border rounded-xl px-4 py-2.5 text-sm text-ink font-medium focus:outline-none focus:border-[#0f7a5a] appearance-none"
                >
                  <option value="balanced">Balanced (40C / 30P / 30F)</option>
                  <option value="lowCarb">Low Carb (25C / 40P / 35F)</option>
                  <option value="highCarb">High Carb (50C / 30P / 20F)</option>
                </select>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs text-ink-muted font-medium">{filledLogCount}/14 days logged</span>
              <span className="text-xs text-ink-muted">Weight in {unitSystem === "metric" ? "kg" : "lbs"}</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full mb-5 overflow-hidden">
              <div
                className="h-full bg-[#0f7a5a] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(filledLogCount / 14) * 100}%` }}
              ></div>
            </div>

            {/* Log entries */}
            <div className="space-y-1.5 mb-6 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
              {logs.map((log, i) => {
                const isFilled = log.weight !== "" && log.calories !== "";
                return (
                  <div key={i} className={`flex gap-3 items-center p-2.5 rounded-xl border transition-all ${isFilled ? "bg-[#f2f8f4] border-[#c9ead9]" : "bg-background-alt border-border"}`}>
                    <div className={`w-14 text-xs font-mono text-center py-2 rounded-lg border ${isFilled ? "bg-[#0f7a5a] text-white border-[#0f7a5a]" : "bg-white text-ink-soft border-border"}`}>
                      D{log.day}
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="Weight"
                        value={log.weight}
                        onChange={(e) => updateLog(i, "weight", e.target.value)}
                        className="w-full bg-white border border-border rounded-lg p-2.5 text-sm font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a]/20 transition-all placeholder:text-ink-muted/40"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        placeholder="Calories"
                        value={log.calories}
                        onChange={(e) => updateLog(i, "calories", e.target.value)}
                        className="w-full bg-white border border-border rounded-lg p-2.5 text-sm font-medium focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a]/20 transition-all placeholder:text-ink-muted/40"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═════════ ADAPTIVE RESULTS ═════════ */}
          {adaptiveResult && (
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-border mb-10 animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                <div className="p-4 bg-background-alt rounded-xl border border-border text-center shadow-sm">
                  <div className="text-[10px] text-ink-muted uppercase font-bold tracking-wider mb-1">Avg Intake</div>
                  <div className="text-xl font-bold text-ink">{adaptiveResult.avgIntake}</div>
                  <div className="text-[10px] text-ink-muted">kcal/day</div>
                </div>
                <div className="p-4 bg-background-alt rounded-xl border border-border text-center shadow-sm">
                  <div className="text-[10px] text-ink-muted uppercase font-bold tracking-wider mb-1">Weight Δ</div>
                  <div className={`text-xl font-bold ${Number(adaptiveResult.deltaWeight) < 0 ? "text-green-600" : Number(adaptiveResult.deltaWeight) > 0 ? "text-red-600" : "text-ink"}`}>
                    {adaptiveResult.deltaWeight}
                  </div>
                  <div className="text-[10px] text-ink-muted">{unitSystem === "metric" ? "kg" : "lbs"}</div>
                </div>
                <div className="p-4 bg-[#e0f0e8] rounded-xl border border-[#c3e3d4] text-center col-span-2 shadow-sm flex flex-col justify-center">
                  <div className="text-[10px] text-[#0f7a5a] uppercase font-bold tracking-wider mb-1">True Adaptive TDEE</div>
                  <div className="text-3xl font-bold text-[#0f7a5a]">{adaptiveResult.adaptiveTdee} <span className="text-sm font-normal">kcal</span></div>
                </div>
              </div>

              <div className="text-center mb-8 border-t border-border pt-8">
                <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-xl md:text-2xl mb-2 font-medium">
                  {formValues.targetAdjustment === 0 ? "Your New Maintenance" : (formValues.targetAdjustment < 0 ? "Your New Fat Loss Target" : "Your New Muscle Gain Target")}
                </h2>
                <div style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif", color: "#0f7a5a" }} className="text-7xl md:text-8xl font-bold mb-2 tracking-tight transition-all">
                  {adaptiveResult.targetCalories}<span className="text-4xl text-ink-muted font-normal">kcal</span>
                </div>
                {adaptiveResult.clamped && (
                  <p className="text-xs text-red-600 font-bold mb-2 bg-red-50 inline-block px-3 py-1 rounded-lg">
                    ⚠️ Clamped to safe minimum floor ({adaptiveResult.minCals} kcal)
                  </p>
                )}
              </div>

              <MacroDonut
                protein={adaptiveResult.macros.protein}
                carbs={adaptiveResult.macros.carbs}
                fat={adaptiveResult.macros.fat}
                calories={adaptiveResult.targetCalories}
              />

              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8">
                <div className="bg-red-50 border border-red-200 text-red-950 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-red-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Protein</div>
                  <div className="text-2xl font-bold">{adaptiveResult.macros.protein}g</div>
                  <div className="text-[10px] text-red-400 mt-1">{adaptiveResult.macros.protein * 4} kcal</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-950 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-blue-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Carbs</div>
                  <div className="text-2xl font-bold">{adaptiveResult.macros.carbs}g</div>
                  <div className="text-[10px] text-blue-400 mt-1">{adaptiveResult.macros.carbs * 4} kcal</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-amber-600/80 text-[10px] mb-1 uppercase tracking-wider font-bold">Fat</div>
                  <div className="text-2xl font-bold">{adaptiveResult.macros.fat}g</div>
                  <div className="text-[10px] text-amber-400 mt-1">{adaptiveResult.macros.fat * 9} kcal</div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
