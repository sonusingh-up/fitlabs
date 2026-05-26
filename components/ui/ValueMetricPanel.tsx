import type { ValueMetric } from "@/lib/types";

interface Props {
  metric: ValueMetric;
  activeIngredientLabel?: string;
}

export default function ValueMetricPanel({ metric, activeIngredientLabel = "primary active" }: Props) {
  const efficiencyMeta = {
    above: { label: "Above Average",  color: "#2D6A4F", bg: "rgba(45,106,79,0.08)",  desc: "Better value than the category average" },
    at:    { label: "At Average",     color: "#8B7355", bg: "rgba(139,115,85,0.08)", desc: "On par with similar products" },
    below: { label: "Below Average",  color: "#8B3A2C", bg: "rgba(139,58,44,0.08)",  desc: "Priced above the category average" },
  }[metric.efficiency];

  const benchmarkDiff = ((metric.categoryAvgPricePerGram - metric.pricePerGramActive) / metric.categoryAvgPricePerGram * 100);
  const betterBy = Math.abs(benchmarkDiff).toFixed(0);
  const direction = benchmarkDiff > 0 ? "cheaper" : "more expensive";

  return (
    <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", backgroundColor: "#F8F2E4" }}>

      {/* Header */}
      <div className="layout-value-header" style={{ padding: "12px 20px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>
          Value Efficiency Analysis
        </span>
        <span style={{ padding: "3px 10px", backgroundColor: efficiencyMeta.bg, border: `1px solid ${efficiencyMeta.color}33`, borderRadius: 6, fontSize: 10, fontWeight: 700, color: efficiencyMeta.color, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em" }}>
          {efficiencyMeta.label}
        </span>
      </div>

      <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        <div style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F2EBD9" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Price / Serving</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1A1714", lineHeight: 1 }}>₹{metric.pricePerServing}</p>
        </div>

        <div style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F2EBD9" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{activeIngredientLabel} / serving</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1A1714", lineHeight: 1 }}>{metric.primaryActiveGrams}g</p>
        </div>

        <div style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F2EBD9" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>₹ per gram active</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1A1714", lineHeight: 1 }}>₹{metric.pricePerGramActive.toFixed(1)}</p>
        </div>

        <div style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F2EBD9" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Category Avg</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1A1714", lineHeight: 1 }}>₹{metric.categoryAvgPricePerGram.toFixed(1)}</p>
        </div>
      </div>

      <div style={{ padding: "12px 20px", borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
          <strong style={{ color: "#1A1714" }}>₹{metric.pricePerGramActive.toFixed(1)}/g</strong> vs category average of <strong style={{ color: "#1A1714" }}>₹{metric.categoryAvgPricePerGram.toFixed(1)}/g</strong>
          {benchmarkDiff !== 0 && ` — ${betterBy}% ${direction} per gram of ${activeIngredientLabel}.`}
        </p>
      </div>
    </div>
  );
}
