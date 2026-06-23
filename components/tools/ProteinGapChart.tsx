import React from "react";

interface ProteinGapChartProps {
  targetProtein: number;
  dietBaseline: number;
  scoopsNeeded: number;
  gap: number;
}

export default function ProteinGapChart({ targetProtein, dietBaseline, scoopsNeeded, gap }: ProteinGapChartProps) {
  // We'll show three bars: Target, Baseline, and Supplement Bridge.
  // Instead of a 3-bar Chart.js, we will use a 100% stacked or simple overlapping bars in CSS.
  // Actually, horizontal bars:
  // 1. "Your Daily Need"
  // 2. "Avg Indian Diet"
  // 3. "With Whey Supplement"
  
  // Find max value to scale bars properly
  const maxVal = Math.max(targetProtein, dietBaseline + scoopsNeeded * 25);
  
  const targetPct = (targetProtein / maxVal) * 100;
  const baselinePct = (dietBaseline / maxVal) * 100;
  const bridgePct = ((dietBaseline + scoopsNeeded * 25) / maxVal) * 100;

  return (
    <div className="bg-background-alt border border-border rounded-xl p-6 my-8">
      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl font-medium mb-6">Your Protein Gap</h3>
      
      <div className="flex flex-col gap-5">
        {/* Bar 1: Target */}
        <div>
          <div className="flex justify-between text-sm text-ink-soft mb-1 font-medium">
            <span>Your Daily Need</span>
            <span className="text-[#0f7a5a] font-bold">{Math.round(targetProtein)}g</span>
          </div>
          <div className="h-6 w-full bg-border-light rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0f7a5a] transition-all duration-1000 ease-out" 
              style={{ width: `${targetPct}%` }}
            ></div>
          </div>
        </div>

        {/* Bar 2: Avg Diet */}
        <div>
          <div className="flex justify-between text-sm text-ink-soft mb-1 font-medium">
            <span>Avg Indian Diet</span>
            <span className="font-bold">{Math.round(dietBaseline)}g</span>
          </div>
          <div className="h-6 w-full bg-[#e0ebe4] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#e0ebe4] transition-all duration-1000 ease-out" 
              style={{ width: `${baselinePct}%` }}
            ></div>
          </div>
        </div>

        {/* Bar 3: With Whey */}
        <div>
          <div className="flex justify-between text-sm text-ink-soft mb-1 font-medium">
            <span>With Whey Supplement</span>
            <span className="text-[#0c6248] font-bold">{Math.round(dietBaseline + gap)}g</span>
          </div>
          <div className="h-6 w-full bg-[#e0ebe4] rounded-full overflow-hidden flex">
            <div 
              className="h-full bg-[#c2dbce] transition-all duration-1000 ease-out" 
              style={{ width: `${baselinePct}%` }}
            ></div>
            <div 
              className="h-full bg-[#0c6248] transition-all duration-1000 ease-out border-l border-white/20 shadow-[-4px_0_12px_rgba(0,0,0,0.1)]" 
              style={{ width: `${bridgePct - baselinePct}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-sm text-ink-muted leading-relaxed">
        You currently get about <strong className="text-ink">{dietBaseline}g</strong> from a typical Indian diet. 
        Your target is <strong className="text-ink">{Math.round(targetProtein)}g</strong>. That's a gap of <strong className="text-ink">{Math.round(gap)}g</strong> — roughly <strong>{Math.ceil(gap / 25)} scoops of whey protein</strong> or equivalent food.
      </p>
    </div>
  );
}
