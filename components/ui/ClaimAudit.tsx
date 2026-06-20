import type { ClaimAuditItem } from "@/lib/types";
import { claimVerdictMeta } from "@/lib/scoring";
import EvidenceBadge from "@/components/ui/EvidenceBadge";

interface Props {
  items: ClaimAuditItem[];
}

const verdictIcon: Record<string, string> = {
  supported: "✓",
  overstated: "~",
  "context-dependent": "◎",
  unsupported: "✕",
};

export default function ClaimAudit({ items }: Props) {
  const supported = items.filter((i) => i.verdict === "supported").length;
  const overstated = items.filter((i) => i.verdict === "overstated").length;
  const unsupported = items.filter((i) => i.verdict === "unsupported").length;

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #E4E8E5" }}>

      {/* Header */}
      <div style={{ padding: "16px 24px", background: "linear-gradient(135deg, #0F7A5A 0%, #17806A 100%)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Claim Audit</p>
        <div style={{ display: "flex", gap: 12 }}>
          {supported > 0 && <span style={{ fontSize: 11, color: "#BBF7D0", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{supported} supported</span>}
          {overstated > 0 && <span style={{ fontSize: 11, color: "#FDE68A", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{overstated} overstated</span>}
          {unsupported > 0 && <span style={{ fontSize: 11, color: "#FECACA", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{unsupported} unsupported</span>}
        </div>
      </div>

      {/* Column headers */}
      <div className="claim-col-header-row" style={{ padding: "10px 24px", backgroundColor: "#F8FAF8", borderBottom: "1px solid #E4E8E5" }}>
        <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600 }}>Claim</span>
        <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, paddingLeft: 16 }}>Verdict</span>
        <span className="claim-evidence-header" style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, paddingLeft: 16 }}>Evidence</span>
      </div>

      {/* Rows */}
      {items.map((item, i) => {
        const meta = claimVerdictMeta(item.verdict);
        return (
          <div key={i} className="layout-claim-row" style={{ borderBottom: i < items.length - 1 ? "1px solid #F0F3F1" : "none", backgroundColor: "#FFFFFF" }}>
            <div style={{ padding: "18px 24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", backgroundColor: meta.bg, border: `1.5px solid ${meta.color}44`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: meta.color, marginTop: 1 }}>
                  {verdictIcon[item.verdict] ?? "?"}
                </span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#17211C", lineHeight: 1.4, margin: "0 0 4px" }}>{item.claim}</p>
                  <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.6, margin: 0 }}>{item.notes}</p>
                </div>
              </div>
            </div>
            <div className="claim-verdict-cell" style={{ padding: "18px 14px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <span style={{ display: "inline-block", padding: "5px 12px", backgroundColor: meta.bg, border: `1px solid ${meta.color}33`, borderRadius: 8, fontSize: 11, fontWeight: 600, color: meta.color, whiteSpace: "nowrap" as const }}>
                {meta.label}
              </span>
            </div>
            <div className="claim-evidence-cell" style={{ padding: "18px 14px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <EvidenceBadge level={item.evidence} showIcon={false} />
            </div>
          </div>
        );
      })}

      {/* Footer */}
      <div style={{ padding: "12px 24px", backgroundColor: "#F8FAF8", borderTop: "1px solid #E4E8E5" }}>
        <p style={{ fontSize: 12, color: "#9CA3AF", margin: 0 }}>
          Audited against peer-reviewed literature.{" "}
          <a href="/methodology#claim-audit" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>How we audit claims →</a>
        </p>
      </div>
    </div>
  );
}
