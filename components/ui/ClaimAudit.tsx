import type { ClaimAuditItem } from "@/lib/types";
import { claimVerdictMeta } from "@/lib/scoring";
import EvidenceBadge from "@/components/ui/EvidenceBadge";

interface Props {
  items: ClaimAuditItem[];
}

export default function ClaimAudit({ items }: Props) {
  return (
    <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>

      {/* Header */}
      <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650" }}>
          Marketing Claim Audit
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          {(["supported", "overstated", "context-dependent", "unsupported"] as const).map((v) => {
            const meta = claimVerdictMeta(v);
            const count = items.filter((i) => i.verdict === v).length;
            if (count === 0) return null;
            return (
              <span key={v} style={{ fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", color: meta.color }}>
                {count}× {v.replace("-", " ")}
              </span>
            );
          })}
        </div>
      </div>

      {/* Column headers — hidden on mobile */}
      <div className="claim-col-header-row" style={{ padding: "8px 20px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880" }}>Marketing Claim</span>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880" }}>Our Verdict</span>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880" }}>Evidence</span>
      </div>

      {/* Rows */}
      {items.map((item, i) => {
        const meta = claimVerdictMeta(item.verdict);
        const isLast = i === items.length - 1;
        return (
          <div
            key={i}
            className="layout-claim-row"
            style={{
              borderBottom: isLast ? "none" : "1px solid #EDE8DF",
              backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9",
            }}
          >
            {/* Claim + notes */}
            <div style={{ padding: "16px 20px" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 5, lineHeight: 1.4, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {item.claim}
              </p>
              <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, margin: 0 }}>
                {item.notes}
              </p>
            </div>

            {/* Verdict */}
            <div className="claim-verdict-cell" style={{ padding: "16px 16px", display: "flex", alignItems: "flex-start" }}>
              <span style={{
                display: "inline-block",
                padding: "4px 10px",
                backgroundColor: meta.bg,
                border: `1px solid ${meta.color}33`,
                borderRadius: 6,
                fontSize: 10,
                fontWeight: 700,
                color: meta.color,
                fontFamily: "var(--font-dm-mono), monospace",
                letterSpacing: "0.08em",
                lineHeight: 1.4,
              }}>
                {meta.label}
              </span>
            </div>

            {/* Evidence */}
            <div className="claim-evidence-cell" style={{ padding: "16px 16px", display: "flex", alignItems: "flex-start" }}>
              <EvidenceBadge level={item.evidence} showIcon={false} />
            </div>
          </div>
        );
      })}

      {/* Footer note */}
      <div style={{ padding: "10px 20px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
        <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0 }}>
          Claims are audited against published peer-reviewed literature as of the review date.{" "}
          <a href="/methodology#claim-audit" style={{ color: "#C4622D", textDecoration: "none" }}>How we audit claims →</a>
        </p>
      </div>
    </div>
  );
}
