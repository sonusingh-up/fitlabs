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
  const contextDep = items.filter((i) => i.verdict === "context-dependent").length;
  const unsupported = items.filter((i) => i.verdict === "unsupported").length;

  return (
    <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>

      {/* ── Header bar ─────────────────────────────────────────────────────── */}
      <div style={{
        padding: "12px 20px",
        backgroundColor: "#17211C",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <p style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#3F4B43",
          margin: 0,
        }}>
          Marketing Claim Audit
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {supported > 0 && (
            <span style={{ fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", color: "#2D6A4F", letterSpacing: "0.08em" }}>
              {supported}× supported
            </span>
          )}
          {overstated > 0 && (
            <span style={{ fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", color: "#8B7355", letterSpacing: "0.08em" }}>
              {overstated}× overstated
            </span>
          )}
          {contextDep > 0 && (
            <span style={{ fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", color: "#3A5F8B", letterSpacing: "0.08em" }}>
              {contextDep}× context-dependent
            </span>
          )}
          {unsupported > 0 && (
            <span style={{ fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", color: "#8B3A2C", letterSpacing: "0.08em" }}>
              {unsupported}× unsupported
            </span>
          )}
        </div>
      </div>

      {/* ── Column headers — desktop only ──────────────────────────────────── */}
      <div className="claim-col-header-row" style={{
        padding: "8px 20px",
        backgroundColor: "#F2F8F4",
        borderBottom: "1px solid #E4E8E5",
      }}>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259" }}>
          Marketing Claim
        </span>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", paddingLeft: 16 }}>
          Our Verdict
        </span>
        <span className="claim-evidence-header" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", paddingLeft: 16 }}>
          Evidence
        </span>
      </div>

      {/* ── Rows ───────────────────────────────────────────────────────────── */}
      {items.map((item, i) => {
        const meta = claimVerdictMeta(item.verdict);
        const isLast = i === items.length - 1;
        return (
          <div
            key={i}
            className="layout-claim-row"
            style={{
              borderBottom: isLast ? "none" : "1px solid #F2F8F4",
              backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF",
            }}
          >
            {/* Claim text + notes */}
            <div style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                <span style={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  backgroundColor: meta.bg,
                  border: `1px solid ${meta.color}44`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  fontWeight: 700,
                  color: meta.color,
                  fontFamily: "var(--font-jetbrains), monospace",
                  marginTop: 1,
                }}>
                  {verdictIcon[item.verdict] ?? "?"}
                </span>
                <p style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#17211C",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  margin: 0,
                }}>
                  {item.claim}
                </p>
              </div>
              <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.6, margin: 0, paddingLeft: 26 }}>
                {item.notes}
              </p>
            </div>

            {/* Verdict badge */}
            <div className="claim-verdict-cell" style={{
              padding: "16px 14px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}>
              <span style={{
                display: "inline-block",
                padding: "5px 10px",
                backgroundColor: meta.bg,
                border: `1px solid ${meta.color}33`,
                borderRadius: 6,
                fontSize: 9,
                fontWeight: 700,
                color: meta.color,
                fontFamily: "var(--font-jetbrains), monospace",
                letterSpacing: "0.06em",
                lineHeight: 1.5,
                textAlign: "center",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}>
                {meta.label}
              </span>
            </div>

            {/* Evidence badge */}
            <div className="claim-evidence-cell" style={{
              padding: "16px 14px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}>
              <EvidenceBadge level={item.evidence} showIcon={false} />
            </div>
          </div>
        );
      })}

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: "10px 20px", backgroundColor: "#F2F8F4", borderTop: "1px solid #E4E8E5" }}>
        <p style={{ fontSize: 11, color: "#6B7770", margin: 0 }}>
          Claims are audited against published peer-reviewed literature as of the review date.{" "}
          <a href="/methodology#claim-audit" style={{ color: "#0F7A5A", textDecoration: "none" }}>
            How we audit claims →
          </a>
        </p>
      </div>
    </div>
  );
}
