import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Download, Copy, Check } from "lucide-react";

interface ResultShareCardProps {
  goal: string;
  dietType: string;
  dailyProtein: number;
  perMeal: number;
  meals: number;
  gapScoops: number;
}

export default function ResultShareCard({
  goal,
  dietType,
  dailyProtein,
  perMeal,
  meals,
  gapScoops
}: ResultShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const formatGoal = (g: string) => g.replace(/([A-Z])/g, ' $1').trim();

  const handleCopy = async () => {
    const text = `🏋 My FitLab Protein Report
Goal: ${formatGoal(goal)} | Diet: ${dietType}
Daily Need: ${Math.round(dailyProtein)}g protein
Per Meal (${meals} meals): ${Math.round(perMeal)}g
Diet Gap: ≈ ${gapScoops} scoops whey
Formula: ISSN 2024
fitlabreviews.com/tools/protein-calculator`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "fitlab-protein-result.png";
      link.href = url;
      link.click();
    } catch (err) {
      console.error("Failed to download image: ", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="my-10 bg-background-alt p-6 sm:p-8 rounded-2xl border border-border">
      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl font-medium mb-6">Share Your Result</h3>
      
      {/* The card to capture */}
      <div 
        ref={cardRef} 
        className="text-white p-8 rounded-xl max-w-sm mx-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #17211c 0%, #0c120f 100%)" }}
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f7a5a] to-[#34d399]"></div>
        <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }} className="text-[#34d399] font-bold text-xl mb-4 tracking-tight">FitLab Reviews</div>
        
        <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }} className="text-3xl font-medium mb-1 text-white">Your Protein Profile</h4>
        <div className="text-white/60 text-sm mb-6 pb-4 border-b border-white/10 flex justify-between">
          <span>Goal: <span className="text-white capitalize">{formatGoal(goal)}</span></span>
          <span>Diet: <span className="text-white capitalize">{dietType}</span></span>
        </div>
        
        <div style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif" }} className="text-6xl font-bold mb-2 tracking-tight text-[#e7f2ec]">
          {Math.round(dailyProtein)}<span className="text-2xl text-white/50 font-normal">g / day</span>
        </div>
        
        <div className="space-y-3 mt-8 text-sm">
          <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
            <span className="text-white/70">Per Meal ({meals} meals)</span>
            <span className="font-bold text-lg">{Math.round(perMeal)}g</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
            <span className="text-white/70">Diet Gap</span>
            <span className="font-bold text-[#34d399]">≈ {gapScoops} scoops</span>
          </div>
          <div className="flex justify-between items-center px-3">
            <span className="text-white/50 text-xs">Formula</span>
            <span className="font-medium text-white/40 text-xs tracking-widest uppercase">ISSN 2024</span>
          </div>
        </div>
        
        <div style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#34d399" }} className="text-center text-[10px] tracking-widest uppercase mt-8 font-bold opacity-80 pt-4 border-t border-white/10">
          fitlabreviews.com
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
        <button 
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 bg-white border border-border px-5 py-3 rounded-lg text-ink font-medium hover:bg-border-light transition-colors shadow-sm"
        >
          {copied ? <Check size={18} className="text-[#2E8B57]" /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy Text"}
        </button>
        <button 
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center justify-center gap-2 bg-[#0f7a5a] hover:bg-[#0c6248] text-white px-6 py-3 rounded-xl font-medium transition-colors text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={18} />
          {downloading ? "Generating..." : "Download Image"}
        </button>
      </div>
      <p className="text-center text-xs text-ink-muted mt-4">
        💡 Share your result on Instagram or WhatsApp with your gym friends!
      </p>
    </div>
  );
}
