"use client";
import { useRef } from "react";

interface Props {
  bmr: number; tdee: number; cut: number;
  activityLabel: string; weightKg: number; animDelay: number;
}

export default function ShareableCard({ bmr, tdee, cut, activityLabel, weightKg, animDelay }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function drawAndDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 640, H = 340;
    canvas.width = W; canvas.height = H;

    // Background
    ctx.fillStyle = "#1C1C1C";
    ctx.fillRect(0, 0, W, H);

    // Top accent stripe
    ctx.fillStyle = "#C4622D";
    ctx.fillRect(0, 0, W, 4);

    // Header
    ctx.fillStyle = "#586259";
    ctx.font = "bold 11px system-ui";
    ctx.letterSpacing = "2px";
    ctx.fillText("FITLAB  ·  EVIDENCE-LED SUPPLEMENT RESEARCH", 32, 36);

    // Divider
    ctx.strokeStyle = "#2D2D2D";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(32, 52); ctx.lineTo(W-32, 52); ctx.stroke();

    // Flame + title
    ctx.font = "bold 22px system-ui";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("🔥  My Metabolic Profile", 32, 88);

    // Rows
    const rows = [
      { label:"BMR (at rest)",              val:`${bmr.toLocaleString()} kcal/day` },
      { label:`TDEE (${activityLabel})`,    val:`${tdee.toLocaleString()} kcal/day` },
      { label:"My Goal: Fat Loss",          val:`${cut.toLocaleString()} kcal/day` },
      { label:"Plateau alert: Recalculate", val:`at ${(weightKg - 5).toFixed(1)} kg` },
    ];

    rows.forEach((r, i) => {
      const y = 130 + i * 42;
      ctx.font = "400 14px system-ui";
      ctx.fillStyle = "#6b7770";
      ctx.fillText(r.label, 32, y);

      ctx.font = "bold 18px system-ui";
      ctx.fillStyle = "#C4622D";
      ctx.textAlign = "right";
      ctx.fillText(r.val, W - 32, y);
      ctx.textAlign = "left";

      if (i < rows.length - 1) {
        ctx.strokeStyle = "#2A2A2A";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(32, y + 14); ctx.lineTo(W - 32, y + 14); ctx.stroke();
      }
    });

    // Footer
    ctx.fillStyle = "#4B5563";
    ctx.font = "400 12px system-ui";
    ctx.fillText("Calculate yours →  fitlabreviews.com/tools/free/bmr-calculator", 32, H - 24);

    // Download
    const link = document.createElement("a");
    link.download = "fitlab-bmr-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards`, marginBottom:16 }}>
      {/* Hidden canvas */}
      <canvas ref={canvasRef} style={{ display:"none" }} />

      {/* Preview card */}
      <div style={{
        background:"#1C1C1C", borderRadius:16, padding:"24px 28px",
        border:"1px solid #2D2D2D", marginBottom:12,
      }}>
        <div style={{ height:3, background:"#C4622D", borderRadius:2, marginBottom:16 }} />
        <p style={{ fontSize:10, color:"#586259", letterSpacing:"0.12em", fontWeight:700, marginBottom:16 }}>
          FITLAB · EVIDENCE-LED SUPPLEMENT RESEARCH
        </p>
        <p style={{ fontSize:16, fontWeight:700, color:"#fff", marginBottom:16 }}>🔥 My Metabolic Profile</p>
        {[
          { label:"BMR (at rest)", val:`${bmr.toLocaleString()} kcal/day` },
          { label:`TDEE (${activityLabel})`, val:`${tdee.toLocaleString()} kcal/day` },
          { label:"My Goal: Fat Loss", val:`${cut.toLocaleString()} kcal/day` },
        ].map((r, i) => (
          <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid #2A2A2A" }}>
            <span style={{ fontSize:13, color:"#6b7770" }}>{r.label}</span>
            <span style={{ fontSize:14, fontWeight:700, color:"#C4622D", fontVariantNumeric:"tabular-nums" }}>{r.val}</span>
          </div>
        ))}
        <p style={{ fontSize:11, color:"#4B5563", marginTop:14, marginBottom:0 }}>
          Calculate yours → fitlabreviews.com/tools/free/bmr-calculator
        </p>
      </div>

      <button onClick={drawAndDownload} style={{
        width:"100%", padding:"13px 0", borderRadius:10, border:"none",
        background:"#C4622D", color:"#FDFAF4", fontSize:15, fontWeight:700,
        cursor:"pointer", fontFamily:"var(--font-hanken),sans-serif",
        boxShadow:"0 4px 16px rgba(196,98,45,0.3)",
      }}>
        ⬇ Download My FitLab Card
      </button>
    </div>
  );
}
