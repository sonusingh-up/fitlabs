"use server";

import { createClient } from "@/lib/supabase-server";

export async function saveTDEEProfile(profile: {
  unitSystem: "imperial" | "metric";
  targetGoal: "fatLoss" | "maintenance" | "muscleGain";
  macroModel: "balanced" | "lowCarb" | "highCarb";
  baselineTdee: number;
}) {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: "User not authenticated" };
  }

  const { error } = await supabase
    .from("user_tdee_profiles")
    .upsert({
      user_id: user.id,
      unit_system: profile.unitSystem,
      target_goal: profile.targetGoal,
      macro_model: profile.macroModel,
      baseline_tdee: profile.baselineTdee,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'user_id'
    });

  if (error) {
    console.error("Error saving TDEE profile:", error);
    return { error: "Failed to save profile." };
  }

  return { success: true };
}

export async function saveDailyLog(log: {
  logDate: string; // YYYY-MM-DD
  weight: number | null;
  caloriesConsumed: number | null;
}) {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: "User not authenticated" };
  }

  const { error } = await supabase
    .from("daily_metabolic_logs")
    .upsert({
      user_id: user.id,
      log_date: log.logDate,
      weight: log.weight,
      calories_consumed: log.caloriesConsumed
    }, {
      onConflict: 'user_id, log_date'
    });

  if (error) {
    console.error("Error saving daily log:", error);
    return { error: "Failed to save log." };
  }

  return { success: true };
}

export async function saveBulkLogs(logs: Array<{ logDate: string; weight: number | null; caloriesConsumed: number | null }>) {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: "User not authenticated" };
  }

  const payload = logs.map(l => ({
    user_id: user.id,
    log_date: l.logDate,
    weight: l.weight,
    calories_consumed: l.caloriesConsumed
  }));

  const { error } = await supabase
    .from("daily_metabolic_logs")
    .upsert(payload, {
      onConflict: 'user_id, log_date'
    });

  if (error) {
    console.error("Error saving bulk logs:", error);
    return { error: "Failed to save logs." };
  }

  return { success: true };
}
