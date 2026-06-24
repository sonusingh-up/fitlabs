import { useMemo } from 'react';

type Sex = 'male' | 'female';
type Formula = 'mifflin' | 'harris_benedict' | 'katch_mcardle';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'athlete';
type UnitSystem = 'imperial' | 'metric';
type MacroModel = 'balanced' | 'lowCarb' | 'highCarb';

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  athlete: 1.9,
};

export interface TDEEInputs {
  unitSystem: UnitSystem;
  sex: Sex;
  age: number | "";
  weight: number | "";
  heightCm: number | "";
  heightFt: number | "";
  heightIn: number | "";
  bodyFat: number | "";
  formula: Formula;
  activity: ActivityLevel;
  targetAdjustment: number;
  macroModel: MacroModel;
}

export function useTDEE(inputs: TDEEInputs) {
  // Extract inputs for convenience
  const {
    unitSystem, sex, age, weight, heightCm, heightFt, heightIn,
    bodyFat, formula, activity, targetAdjustment, macroModel
  } = inputs;

  const results = useMemo(() => {
    // 1. Validate Core Inputs
    if (!age || !weight) return null;
    if (unitSystem === "metric" && !heightCm) return null;
    if (unitSystem === "imperial" && (!heightFt && heightFt !== 0)) return null;

    // 2. Normalize Measurements
    const wKg = unitSystem === "imperial" ? (weight as number) * 0.453592 : (weight as number);
    
    let hCm = 0;
    if (unitSystem === "metric") {
      hCm = heightCm as number;
    } else {
      const inches = ((heightFt as number) * 12) + (heightIn ? (heightIn as number) : 0);
      hCm = inches * 2.54;
    }

    // 3. BMI Guardrail
    const hM = hCm / 100;
    const bmi = wKg / (hM * hM);
    const bmiWarning = bmi < 16.0 || bmi > 50.0;

    // 4. BMR Math Engine
    let bmr = 0;
    if (formula === "katch_mcardle") {
      const bf = bodyFat || 15; // Safe fallback if they select it but leave it empty
      const lbm = wKg * (1 - (bf as number) / 100);
      bmr = 370 + (21.6 * lbm);
    } else if (formula === "harris_benedict") {
      if (sex === "male") {
        bmr = (13.397 * wKg) + (4.799 * hCm) - (5.677 * (age as number)) + 88.362;
      } else {
        bmr = (9.247 * wKg) + (3.098 * hCm) - (4.330 * (age as number)) + 447.593;
      }
    } else {
      // Default: Mifflin-St Jeor
      bmr = (10 * wKg) + (6.25 * hCm) - (5 * (age as number));
      if (sex === "male") bmr += 5;
      else bmr -= 161;
    }

    bmr = Math.round(bmr);

    // 5. TDEE
    const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

    // 6. Target Adjustment & Guardrails
    let targetCalories = Math.round(tdee * (1 + (targetAdjustment / 100)));
    let clamped = false;
    const minCals = sex === "male" ? 1500 : 1200;
    
    if (targetCalories < minCals) {
      targetCalories = minCals;
      clamped = true;
    }

    // 7. Macro Allocation Engine
    let pPercent = 0.30, cPercent = 0.40, fPercent = 0.30;
    if (macroModel === "lowCarb") {
      pPercent = 0.40; cPercent = 0.25; fPercent = 0.35;
    } else if (macroModel === "highCarb") {
      pPercent = 0.30; cPercent = 0.50; fPercent = 0.20;
    }

    const protein = Math.round((targetCalories * pPercent) / 4);
    const carbs = Math.round((targetCalories * cPercent) / 4);
    const fat = Math.round((targetCalories * fPercent) / 9);

    return {
      bmr,
      tdee,
      targetCalories,
      macros: { protein, carbs, fat },
      clamped,
      minCals,
      bmi: bmi.toFixed(1),
      bmiWarning
    };

  }, [
    unitSystem, sex, age, weight, heightCm, heightFt, heightIn,
    bodyFat, formula, activity, targetAdjustment, macroModel
  ]);

  return results;
}

export function useAdaptiveTDEE(
  logs: Array<{ day: number; weight: number | ""; calories: number | "" }>,
  unitSystem: UnitSystem,
  targetAdjustment: number,
  macroModel: MacroModel,
  sex: Sex
) {
  const adaptiveResults = useMemo(() => {
    const validCalLogs = logs.filter(l => l.calories !== "");
    if (validCalLogs.length === 0) return null;

    const sumCals = validCalLogs.reduce((acc, l) => acc + (l.calories as number), 0);
    const avgIntake = sumCals / validCalLogs.length;

    const getAvgWeight = (days: number[]) => {
      const valid = days.map(d => logs[d - 1].weight).filter(w => w !== "");
      if (valid.length === 0) return null;
      return valid.reduce((acc, w) => acc + (w as number), 0) / valid.length;
    };

    const startWeight = getAvgWeight([1, 2, 3]);
    const endWeight = getAvgWeight([12, 13, 14]);

    if (startWeight === null || endWeight === null) return null;

    let caloricShiftDaily = 0;
    let deltaWeightForDisplay = 0;
    
    if (unitSystem === "imperial") {
      deltaWeightForDisplay = endWeight - startWeight;
      caloricShiftDaily = (deltaWeightForDisplay * 3500) / 14;
    } else {
      deltaWeightForDisplay = endWeight - startWeight;
      caloricShiftDaily = (deltaWeightForDisplay * 7700) / 14;
    }

    // Variance Spike Clamp
    if (caloricShiftDaily > 1000) caloricShiftDaily = 1000;
    if (caloricShiftDaily < -1000) caloricShiftDaily = -1000;

    const adaptiveTDEE = avgIntake - caloricShiftDaily;

    // Target from Dynamic Slider
    let targetCalories = Math.round(adaptiveTDEE * (1 + (targetAdjustment / 100)));

    let clamped = false;
    const minCals = sex === "male" ? 1500 : 1200;
    if (targetCalories < minCals) {
      targetCalories = minCals;
      clamped = true;
    }

    let pPercent = 0.30, cPercent = 0.40, fPercent = 0.30;
    if (macroModel === "lowCarb") {
      pPercent = 0.40; cPercent = 0.25; fPercent = 0.35;
    } else if (macroModel === "highCarb") {
      pPercent = 0.30; cPercent = 0.50; fPercent = 0.20;
    }

    return {
      avgIntake: Math.round(avgIntake),
      deltaWeight: deltaWeightForDisplay.toFixed(2),
      adaptiveTdee: Math.round(adaptiveTDEE),
      targetCalories,
      macros: {
        protein: Math.round((targetCalories * pPercent) / 4),
        carbs: Math.round((targetCalories * cPercent) / 4),
        fat: Math.round((targetCalories * fPercent) / 9)
      },
      clamped,
      minCals
    };
  }, [logs, unitSystem, targetAdjustment, macroModel, sex]);

  return adaptiveResults;
}
