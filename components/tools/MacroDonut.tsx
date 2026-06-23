"use client";

import React from "react";

interface MacroDonutProps {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export default function MacroDonut({ protein, carbs, fat, calories }: MacroDonutProps) {
  const totalGrams = protein + carbs + fat;
  if (totalGrams === 0) return null;

  const pPct = (protein / totalGrams) * 100;
  const cPct = (carbs / totalGrams) * 100;
  const fPct = (fat / totalGrams) * 100;

  // SVG donut chart with conic gradient via stroke-dasharray
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  const pDash = (pPct / 100) * circumference;
  const cDash = (cPct / 100) * circumference;
  const fDash = (fPct / 100) * circumference;

  const pOffset = 0;
  const cOffset = -(pDash);
  const fOffset = -(pDash + cDash);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* Fat segment */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="14"
            strokeDasharray={`${fDash} ${circumference - fDash}`}
            strokeDashoffset={fOffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
            style={{ opacity: 0.85 }}
          />
          {/* Carbs segment */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="14"
            strokeDasharray={`${cDash} ${circumference - cDash}`}
            strokeDashoffset={cOffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
            style={{ opacity: 0.85 }}
          />
          {/* Protein segment */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="#ef4444"
            strokeWidth="14"
            strokeDasharray={`${pDash} ${circumference - pDash}`}
            strokeDashoffset={pOffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
            style={{ opacity: 0.85 }}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif" }} className="text-2xl font-bold text-ink tracking-tight">
            {calories}
          </span>
          <span className="text-[10px] text-ink-muted uppercase tracking-widest font-bold">kcal</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="text-ink-soft">Protein <span className="font-bold text-ink">{Math.round(pPct)}%</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
          <span className="text-ink-soft">Carbs <span className="font-bold text-ink">{Math.round(cPct)}%</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
          <span className="text-ink-soft">Fat <span className="font-bold text-ink">{Math.round(fPct)}%</span></span>
        </div>
      </div>
    </div>
  );
}
