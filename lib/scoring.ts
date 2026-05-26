import type { ScoringPillar, PillarScore, ReviewFlag, ScoringRubric, ReviewRating } from "./types";

export const PILLAR_META: Record<ScoringPillar, { label: string; weight: number; description: string }> = {
  formula:      { label: "Formula Integrity",          weight: 0.35, description: "Are key ingredients at clinically studied doses with peer-reviewed backing?" },
  transparency: { label: "Label Transparency",         weight: 0.25, description: "Full disclosure — no proprietary blends hiding key actives." },
  verification: { label: "Third-Party Verification",   weight: 0.20, description: "NSF, Informed Sport, NABL, or equivalent independent testing." },
  value:        { label: "Value Efficiency",           weight: 0.12, description: "Price per effective gram vs the category benchmark." },
  practical:    { label: "Practical Quality",          weight: 0.08, description: "Real-world mixability, taste, texture, and packaging integrity." },
};

export const PILLAR_ORDER: ScoringPillar[] = [
  "formula",
  "transparency",
  "verification",
  "value",
  "practical",
];

export function computeComposite(pillars: PillarScore[], flags: ReviewFlag[]): number {
  const weighted = pillars.reduce((sum, p) => {
    const meta = PILLAR_META[p.pillar];
    return sum + p.score * meta.weight;
  }, 0);

  const totalDeductions = flags
    .filter((f) => f.type === "red" && f.deduction != null)
    .reduce((sum, f) => sum + (f.deduction ?? 0), 0);

  return Math.max(1, Math.min(10, parseFloat((weighted - totalDeductions).toFixed(2))));
}

export function pillarScoreColor(score: number): string {
  if (score >= 8) return "#2D6A4F";
  if (score >= 6) return "#8B7355";
  return "#8B3A2C";
}

export function pillarScoreBg(score: number): string {
  if (score >= 8) return "rgba(45,106,79,0.12)";
  if (score >= 6) return "rgba(139,115,85,0.12)";
  return "rgba(139,58,44,0.12)";
}

export function pillarBarColor(score: number): string {
  if (score >= 8) return "#2D6A4F";
  if (score >= 6) return "#8B7355";
  return "#8B3A2C";
}

export function pillarBarPercent(score: number): number {
  return (score / 10) * 100;
}

export function compositeToRating(composite: number): ReviewRating {
  return Math.round(composite) as ReviewRating;
}

export function claimVerdictMeta(verdict: ScoringRubric["claimAudit"][number]["verdict"]): { label: string; color: string; bg: string } {
  const map = {
    supported:          { label: "Research-Supported",  color: "#2D6A4F", bg: "rgba(45,106,79,0.08)" },
    overstated:         { label: "Overstated",          color: "#8B7355", bg: "rgba(139,115,85,0.08)" },
    "context-dependent":{ label: "Context-Dependent",  color: "#3A5F8B", bg: "rgba(58,95,139,0.08)" },
    unsupported:        { label: "Unsupported",         color: "#8B3A2C", bg: "rgba(139,58,44,0.08)" },
  };
  return map[verdict];
}
