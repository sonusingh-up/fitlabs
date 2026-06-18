import { Check, X } from "lucide-react";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
      <div style={{ backgroundColor: "rgba(45,106,79,0.05)", border: "1px solid rgba(45,106,79,0.15)", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 14 }}>
          Strengths
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {pros.map((pro, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ marginTop: 2, flexShrink: 0, color: "#2D6A4F" }}>
                <Check size={14} strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: "rgba(196,98,45,0.04)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 12, padding: 20 }}>
        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 14 }}>
          Limitations
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {cons.map((con, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ marginTop: 2, flexShrink: 0, color: "#0F7A5A" }}>
                <X size={14} strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
