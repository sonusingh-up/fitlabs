import type { EvidenceLevel } from "@/lib/types";
import { evidenceColor, evidenceBg } from "@/lib/utils";

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  showIcon?: boolean;
}

const icons: Record<EvidenceLevel, string> = {
  strong: "●●●",
  moderate: "●●○",
  limited: "●○○",
  emerging: "◐○○",
  insufficient: "○○○",
};

const labels: Record<EvidenceLevel, string> = {
  strong: "Strong Evidence",
  moderate: "Moderate Evidence",
  limited: "Limited Evidence",
  emerging: "Emerging Research",
  insufficient: "Insufficient Data",
};

export default function EvidenceBadge({ level, showIcon = true }: EvidenceBadgeProps) {
  const color = evidenceColor(level);
  const bg = evidenceBg(level);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        backgroundColor: bg,
        border: `1px solid ${color}33`,
        borderRadius: 8,
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
      }}
    >
      {showIcon && (
        <span style={{ letterSpacing: 2, fontSize: 8 }}>{icons[level]}</span>
      )}
      {labels[level]}
    </span>
  );
}
