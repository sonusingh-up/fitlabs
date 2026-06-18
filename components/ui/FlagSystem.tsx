import type { ReviewFlag } from "@/lib/types";

interface Props {
  flags: ReviewFlag[];
}

export default function FlagSystem({ flags }: Props) {
  const red = flags.filter((f) => f.type === "red");
  const green = flags.filter((f) => f.type === "green");

  if (flags.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {red.length > 0 && (
        <div style={{ border: "1px solid rgba(139,58,44,0.25)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "10px 16px", backgroundColor: "rgba(139,58,44,0.06)", borderBottom: "1px solid rgba(139,58,44,0.15)", display: "flex", alignItems: "center", gap: 8 }}>
            <RedFlagIcon />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B3A2C" }}>
              Red Flags — Trust Reducers ({red.length})
            </span>
          </div>
          {red.map((flag, i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: i < red.length - 1 ? "1px solid rgba(139,58,44,0.1)" : "none", backgroundColor: i % 2 === 0 ? "#FBF5F0" : "#F8EEE8", display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 600, color: "#8B3A2C", marginBottom: 3 }}>{flag.label}</p>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{flag.detail}</p>
              </div>
              {flag.deduction != null && (
                <span style={{ padding: "3px 8px", backgroundColor: "rgba(139,58,44,0.1)", border: "1px solid rgba(139,58,44,0.2)", borderRadius: 6, fontSize: 11, fontWeight: 700, color: "#8B3A2C", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" as const }}>
                  −{flag.deduction.toFixed(1)} pts
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {green.length > 0 && (
        <div style={{ border: "1px solid rgba(45,106,79,0.25)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "10px 16px", backgroundColor: "rgba(45,106,79,0.05)", borderBottom: "1px solid rgba(45,106,79,0.15)", display: "flex", alignItems: "center", gap: 8 }}>
            <GreenFlagIcon />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F" }}>
              Green Flags — Trust Builders ({green.length})
            </span>
          </div>
          {green.map((flag, i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: i < green.length - 1 ? "1px solid rgba(45,106,79,0.1)" : "none", backgroundColor: i % 2 === 0 ? "#F2F8F5" : "#EDF5F1" }}>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 600, color: "#2D6A4F", marginBottom: 3 }}>{flag.label}</p>
              <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{flag.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RedFlagIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L11 10H1L6 1Z" stroke="#8B3A2C" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="6" y1="4.5" x2="6" y2="7" stroke="#8B3A2C" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="6" cy="8.5" r="0.6" fill="#8B3A2C" />
    </svg>
  );
}

function GreenFlagIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#2D6A4F" strokeWidth="1.2" />
      <path d="M3.5 6L5.2 7.7L8.5 4.5" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
