"use client";

import React, { useState, useEffect, useRef } from "react";
import ProteinGapChart from "@/components/tools/ProteinGapChart";
import IndianFoodGrid from "@/components/tools/IndianFoodGrid";
import ResultShareCard from "@/components/tools/ResultShareCard";
import DynamicFAQ from "@/components/tools/DynamicFAQ";
import { Info } from "lucide-react";

export default function CalculatorClient() {
  const [age, setAge] = useState<number | "">("");
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState<number | "">("");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("muscleGain");
  const [dietType, setDietType] = useState("vegetarian");
  const [meals, setMeals] = useState(4);
  const [useGoalWeight, setUseGoalWeight] = useState(false);
  const [goalWeight, setGoalWeight] = useState<number | "">("");
  
  const [result, setResult] = useState<any>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateProtein = () => {
    if (!weight || !age) return;
    
    // Convert to kg
    const wKg = weightUnit === "lbs" ? (weight as number) * 0.453592 : (weight as number);
    const targetWKg = useGoalWeight && goalWeight ? (weightUnit === "lbs" ? (goalWeight as number) * 0.453592 : (goalWeight as number)) : wKg;

    // ISSN 2024 Multipliers
    const goalMultipliers: Record<string, { min: number; max: number }> = {
      fatLoss: { min: 1.6, max: 2.4 },
      muscleGain: { min: 1.6, max: 2.2 },
      maintenance: { min: 1.2, max: 1.6 },
      performance: { min: 1.8, max: 2.7 },
      health: { min: 1.2, max: 1.6 }
    };

    const activityScale: Record<string, number> = {
      sedentary: 0,
      light: 0.25,
      moderate: 0.5,
      active: 0.75,
      athlete: 1.0
    };

    const t = activityScale[activity];
    const { min, max } = goalMultipliers[goal];
    let multiplier = min + (max - min) * t;

    let protein = targetWKg * multiplier;

    // Age adjustment (Senior anabolic resistance)
    const isSenior = (age as number) >= 60;
    if (isSenior) protein *= 1.20;

    // Diet adjustment (Plant bioavailability)
    if (dietType === "vegetarian") protein *= 1.20;
    if (dietType === "vegan") protein *= 1.25;

    // Indian diet baseline
    let baseline = 50; // generic
    if (dietType === "nonveg") baseline = 60;
    if (dietType === "vegetarian") baseline = 42;
    if (dietType === "vegan") baseline = 38;
    if (dietType === "eggetarian") baseline = 50;

    const gap = Math.max(0, protein - baseline);
    const scoops = Math.ceil(gap / 25);

    setResult({
      daily: Math.round(protein),
      min: Math.round(targetWKg * min),
      max: Math.round(targetWKg * max),
      perKg: parseFloat(multiplier.toFixed(2)),
      baseline,
      gap,
      scoops,
      isSenior,
      isPlantBased: dietType === "vegetarian" || dietType === "vegan"
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const perMeal = result ? result.daily / meals : 0;

  return (
    <main className="min-h-screen bg-background text-ink pb-20">
      {/* HERO */}
      <section style={{ background: "linear-gradient(120deg, #e7f2ec, #f2f8f4)", borderBottom: "1px solid #e0ebe4" }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f7a5a", marginBottom: 14 }}>
            Science-backed · Vegetarian-aware
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.25rem)", fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 14px", lineHeight: 1.04, color: "#17211c" }}>
            How Much Protein Do You <em style={{ fontStyle: "italic", color: "#0f7a5a" }}>Actually</em> Need?
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
            India's most personalized protein calculator. Uses the latest ISSN 2024 guidelines with automatic adjustments for Indian diets, vegetarians, and seniors.
          </p>
          <div className="mt-10 flex justify-center">
            <img src="/assets/hero-illustration.png" alt="Indian Protein Sources" className="w-full max-w-sm mx-auto drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* CALCULATOR FORM */}
      <section className="max-w-3xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-editorial p-6 md:p-10 border border-border">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-ink mb-2">Age</label>
              <input 
                type="number" 
                min="15" max="100"
                value={age}
                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                className="w-full bg-background-alt border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a] transition-colors"
                placeholder="e.g. 28"
              />
            </div>
            {/* Sex */}
            <div>
              <label className="block text-sm font-medium text-ink mb-2">Biological Sex</label>
              <select 
                value={sex} 
                onChange={(e) => setSex(e.target.value)}
                className="w-full bg-background-alt border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a] transition-colors appearance-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-ink mb-2 flex justify-between">
                <span>Weight</span>
                <button 
                  onClick={() => setWeightUnit(weightUnit === "kg" ? "lbs" : "kg")}
                  className="text-[#0f7a5a] text-xs font-medium hover:underline"
                >
                  Switch to {weightUnit === "kg" ? "lbs" : "kg"}
                </button>
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : "")}
                  className="w-full bg-background-alt border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a] transition-colors pr-12"
                  placeholder={`e.g. ${weightUnit === "kg" ? "75" : "165"}`}
                />
                <span className="absolute right-4 top-3 text-ink-muted">{weightUnit}</span>
              </div>
            </div>
            
            {/* Diet Type */}
            <div>
              <label className="block text-sm font-medium text-ink mb-2">Diet Type</label>
              <select 
                value={dietType} 
                onChange={(e) => setDietType(e.target.value)}
                className="w-full bg-background-alt border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a] transition-colors appearance-none"
              >
                <option value="vegetarian">Vegetarian (Lacto/Ovo)</option>
                <option value="nonveg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="eggetarian">Eggetarian</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-ink mb-3">Primary Goal</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: "fatLoss", label: "Fat Loss" },
                { id: "muscleGain", label: "Muscle Gain" },
                { id: "maintenance", label: "Maintenance" },
                { id: "performance", label: "Athletic Perf." },
                { id: "health", label: "General Health" }
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setGoal(g.id)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    goal === g.id 
                      ? "border-[#0f7a5a] bg-[#0f7a5a]/10 text-[#0f7a5a]" 
                      : "border-border bg-white text-ink-soft hover:bg-background-alt"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-ink mb-3">Activity Level</label>
            <select 
              value={activity} 
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-background-alt border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-[#0f7a5a] focus:ring-1 focus:ring-[#0f7a5a] transition-colors appearance-none"
            >
              <option value="sedentary">Sedentary (Desk job, no exercise)</option>
              <option value="light">Lightly Active (1-2 days/week)</option>
              <option value="moderate">Moderately Active (3-4 days/week)</option>
              <option value="active">Very Active (5-6 days/week)</option>
              <option value="athlete">Athlete (Competitive, 2x daily)</option>
            </select>
          </div>

          {/* Goal Weight Toggle (if weight is high, suggest using goal weight - simplified for UI) */}
          <div className="mb-8 bg-background-alt p-4 rounded-xl border border-border flex items-start gap-3">
            <input 
              type="checkbox" 
              id="useGoalWeight" 
              checked={useGoalWeight}
              onChange={(e) => setUseGoalWeight(e.target.checked)}
              className="mt-1"
            />
            <div>
              <label htmlFor="useGoalWeight" className="text-sm font-medium text-ink cursor-pointer block mb-1">
                I am significantly overweight
              </label>
              <p className="text-xs text-ink-muted">
                If you carry excess body fat, calculating protein based on your current weight will give you an artificially high number. Calculate based on your target weight instead.
              </p>
              {useGoalWeight && (
                <div className="mt-3 relative w-1/2">
                  <input 
                    type="number" 
                    min="1"
                    value={goalWeight}
                    onChange={(e) => setGoalWeight(e.target.value ? Number(e.target.value) : "")}
                    className="w-full bg-white border border-border rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:border-[#0f7a5a] transition-colors"
                    placeholder={`Goal (${weightUnit})`}
                  />
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={calculateProtein}
            disabled={!age || !weight || (useGoalWeight && !goalWeight)}
            className="w-full bg-[#0f7a5a] text-white font-medium text-lg py-4 rounded-xl hover:bg-[#0c6248] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Protein Target
          </button>
        </div>
      </section>

      {/* RESULTS SECTION */}
      {result && (
        <section ref={resultRef} className="max-w-3xl mx-auto px-6 mt-12 animate-fade-in">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#e0f0e8] text-[#0f7a5a] text-xs font-mono tracking-wide uppercase px-3 py-1 rounded-full mb-4">
              <Info size={14} /> Based on ISSN 2024
            </div>
            
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl mb-2 font-medium">Your Daily Protein Target</h2>
            <div style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif", color: "#0f7a5a" }} className="text-6xl md:text-7xl font-bold mb-2 tracking-tight">
              {result.daily}<span className="text-3xl text-ink-muted font-normal">g</span>
            </div>
            <div className="text-ink-soft">
              Range: {result.min}g - {result.max}g <span className="text-border mx-2">|</span> ≈ {result.perKg}g per kg
            </div>
            
            {result.isSenior && (
              <div className="mt-4 inline-block bg-[#FFF4E5] text-[#D97706] text-sm px-4 py-2 rounded-lg border border-[#FDE68A]">
                <strong>Senior Adjustment:</strong> +20% added due to age-related anabolic resistance.
              </div>
            )}
            
            {result.isPlantBased && (
              <div className="mt-4 inline-block bg-[#E8F5E9] text-[#2E7D32] text-sm px-4 py-2 rounded-lg border border-[#C8E6C9] ml-2">
                <strong>Plant Protein Adjustment:</strong> +{dietType === "vegan" ? "25%" : "20%"} added for lower bioavailability.
              </div>
            )}
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-border mb-10">
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }} className="text-2xl font-medium text-[#17211c] mb-6">Per-Meal Split</h3>
            
            <div className="mb-8">
              <label className="flex justify-between text-sm font-medium text-ink mb-4">
                <span>How many meals per day?</span>
                <span className="text-[#0f7a5a] font-bold">{meals} meals</span>
              </label>
              <input 
                type="range" 
                min="2" max="6" 
                value={meals} 
                onChange={(e) => setMeals(Number(e.target.value))}
                className="w-full accent-[#0f7a5a]"
              />
              <div className="flex justify-between text-xs text-ink-muted mt-2">
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
            </div>

            <div className="bg-background-alt p-6 rounded-xl text-center border border-border">
              <div className="text-ink-soft mb-2">Eat this amount per meal:</div>
              <div className="text-3xl font-bold text-[#0f7a5a] mb-2">
                {Math.round(perMeal)}g
              </div>
              <p className="text-sm text-ink-muted max-w-md mx-auto">
                Research shows 25–40g per meal maximizes muscle protein synthesis. Distributing protein evenly is better than eating it all at dinner.
              </p>
            </div>
          </div>

          <ProteinGapChart 
            targetProtein={result.daily}
            dietBaseline={result.baseline}
            scoopsNeeded={result.scoops}
            gap={result.gap}
          />

          <IndianFoodGrid />

          <ResultShareCard 
            goal={goal}
            dietType={dietType}
            dailyProtein={result.daily}
            perMeal={perMeal}
            meals={meals}
            gapScoops={result.scoops}
          />

          <DynamicFAQ 
            goal={goal}
            dietType={dietType}
            age={Number(age)}
            dailyProtein={result.daily}
          />
          
        </section>
      )}
    </main>
  );
}
