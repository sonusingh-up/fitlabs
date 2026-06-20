import type { ValueMetric } from "@/lib/types";

interface Props {
  metric: ValueMetric;
  activeIngredientLabel?: string;
}

export default function ValueMetricPanel({ metric, activeIngredientLabel = "primary active" }: Props) {
  const efficiencyMeta = {
    above: { label: "Good Value", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
    at:    { label: "Average",    color: "#CA8A04", bg: "#FEFCE8", border: "#FDE68A" },
    below: { label: "Premium",    color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
  }[metric.efficiency];

  const benchmarkDiff = ((metric.categoryAvgPricePerGram - metric.pricePerGramActive) / metric.categoryAvgPricePerGram * 100);
  const betterBy = Math.abs(benchmarkDiff).toFixed(0);
  const direction = benchmarkDiff > 0 ? "cheaper" : "more expensive";

  const stats = [
    { label: "Price / Serving", value: `$${metric.pricePerServing.toFixed(2)}` },
    { label: `${activeIngredientLabel} / Serving`, value: `${metric.primaryActiveGrams}g` },
    { label: "$ / Gram Active", value: `$${metric.pricePerGramActive.toFixed(2)}` },
    { label: "Category Avg", value: `$${metric.categoryAvgPricePerGram.toFixed(2)}/g` },
  ];

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E4E8E5" }}>

      {/* Header */}
      <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#F8FAF8", borderBottom: "1px solid #E4E8E5" }}>
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 700, color: "#17211C" }}>Value Analysis</span>
        <span style={{ padding: "4px 12px", backgroundColor: efficiencyMeta.bg, border: `1px solid ${efficiencyMeta.border}`, borderRadius: 8, fontSize: 12, fontWeight: 600, color: efficiencyMeta.color }}>
          {efficiencyMeta.label}
        </span>
      </div>

      {/* Stats grid */}
      <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ padding: "16px", backgroundColor: "#F8FAF8", borderRadius: 12, textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 6, fontWeight: 500 }}>{s.label}</p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 22, fontWeight: 800, color: "#17211C", lineHeight: 1, margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Comparison line */}
      <div style={{ padding: "14px 24px", borderTop: "1px solid #E4E8E5", backgroundColor: "#FFFFFF" }}>
        <p style={{ fontSize: 13, color: "#6B7770", margin: 0 }}>
          <strong style={{ color: "#17211C" }}>${metric.pricePerGramActive.toFixed(2)}/g</strong> vs category average of <strong style={{ color: "#17211C" }}>${metric.categoryAvgPricePerGram.toFixed(2)}/g</strong>
          {benchmarkDiff !== 0 && ` — ${betterBy}% ${direction} per gram of ${activeIngredientLabel}.`}
        </p>
      </div>
    </div>
  );
}
