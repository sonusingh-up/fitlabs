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
        gap: 5,
        padding: "4px 9px",
        backgroundColor: bg,
        border: `1px solid ${color}33`,
        borderRadius: 8,
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontWeight: 600,
        fontSize: 9,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {showIcon && (
        <span style={{ letterSpacing: 2, fontSize: 8 }}>{icons[level]}</span>
      )}
      {labels[level]}
    </span>
  );
}
