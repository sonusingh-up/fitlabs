import type { ReviewFlag } from "@/lib/types";

interface Props {
  flags: ReviewFlag[];
}

export default function FlagSystem({ flags }: Props) {
  const red = flags.filter((f) => f.type === "red");
  const green = flags.filter((f) => f.type === "green");

  if (flags.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {red.length > 0 && (
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #FECACA" }}>
          <div style={{ padding: "14px 20px", backgroundColor: "#FEF2F2", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#DC2626", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 700, color: "#991B1B" }}>
              Red Flags ({red.length})
            </span>
          </div>
          {red.map((flag, i) => (
            <div key={i} style={{ padding: "16px 20px", borderTop: "1px solid #FEE2E2", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#17211C", marginBottom: 4 }}>{flag.label}</p>
                <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.55, margin: 0 }}>{flag.detail}</p>
              </div>
              {flag.deduction != null && (
                <span style={{ padding: "4px 10px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, fontSize: 12, fontWeight: 700, color: "#DC2626", fontFamily: "var(--font-dm-sans)", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
                  −{flag.deduction.toFixed(1)} pts
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {green.length > 0 && (
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #BBF7D0" }}>
          <div style={{ padding: "14px 20px", backgroundColor: "#F0FDF4", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#16A34A", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 700, color: "#166534" }}>
              Green Flags ({green.length})
            </span>
          </div>
          {green.map((flag, i) => (
            <div key={i} style={{ padding: "16px 20px", borderTop: "1px solid #DCFCE7", backgroundColor: "#FFFFFF" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#17211C", marginBottom: 4 }}>{flag.label}</p>
              <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.55, margin: 0 }}>{flag.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
