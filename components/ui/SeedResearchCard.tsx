import { SEED } from "@/lib/seed-tokens";

type TrialType = "RCT" | "Meta-analysis" | "Observational" | "In vitro" | "Review";

interface SeedResearchCardProps {
  title: string;
  authors: string;
  year: number;
  journal: string;
  finding: string;
  trialType: TrialType;
  doi: string;
  seedProduct?: string; // e.g. "DS-01" — shows a "Directly studied" badge if present
}

const TRIAL_COLORS: Record<TrialType, { bg: string; border: string; text: string }> = {
  RCT: {
    bg: "rgba(61,139,55,0.10)",
    border: "rgba(61,139,55,0.30)",
    text: "#2A5F26",
  },
  "Meta-analysis": {
    bg: "rgba(58,111,168,0.10)",
    border: "rgba(58,111,168,0.30)",
    text: "#1A3F6F",
  },
  Observational: {
    bg: "rgba(139,115,85,0.10)",
    border: "rgba(139,115,85,0.30)",
    text: "#5C3D1A",
  },
  "In vitro": {
    bg: "rgba(139,58,44,0.10)",
    border: "rgba(139,58,44,0.30)",
    text: "#5C1A14",
  },
  Review: {
    bg: "rgba(92,92,191,0.10)",
    border: "rgba(92,92,191,0.30)",
    text: "#2A2A7A",
  },
};

/**
 * SeedResearchCard — Clinical study highlight card for Seed product pages.
 * Displays trial type badge, citation, key finding, and DOI link.
 * Uses FitLab's standard light card bg with a Seed green left border accent.
 */
export default function SeedResearchCard({
  title,
  authors,
  year,
  journal,
  finding,
  trialType,
  doi,
  seedProduct,
}: SeedResearchCardProps) {
  const trialStyle = TRIAL_COLORS[trialType];

  return (
    <div
      style={{
        backgroundColor: SEED.cardBg,
        border: `1px solid ${SEED.border}`,
        borderLeft: `3px solid ${SEED.green}`,
        borderRadius: 10,
        padding: "18px 20px",
      }}
    >
      {/* Badges row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
          flexWrap: "wrap",
        }}
      >
        {/* Trial type badge */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "2px 9px",
            backgroundColor: trialStyle.bg,
            border: `1px solid ${trialStyle.border}`,
            borderRadius: 20,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: trialStyle.text,
            fontWeight: 700,
          }}
        >
          {trialType}
        </span>

        {/* Year badge */}
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9,
            color: SEED.caption,
            letterSpacing: "0.08em",
          }}
        >
          {year}
        </span>

        {/* "Directly studied" badge */}
        {seedProduct && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 9px",
              backgroundColor: "rgba(61,139,55,0.10)",
              border: "1px solid rgba(61,139,55,0.25)",
              borderRadius: 20,
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: SEED.greenDeep,
              fontWeight: 700,
            }}
          >
            {seedProduct} studied
          </span>
        )}
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: SEED.ink,
          fontFamily: "var(--font-dm-sans), sans-serif",
          lineHeight: 1.4,
          marginBottom: 6,
        }}
      >
        {title}
      </p>

      {/* Authors + Journal */}
      <p
        style={{
          fontSize: 11,
          color: SEED.caption,
          fontFamily: "var(--font-jetbrains), monospace",
          letterSpacing: "0.04em",
          marginBottom: 12,
          lineHeight: 1.5,
        }}
      >
        {authors} · <em>{journal}</em>
      </p>

      {/* Key finding */}
      <div
        style={{
          padding: "10px 14px",
          backgroundColor: "rgba(61,139,55,0.05)",
          borderRadius: 7,
          marginBottom: 12,
          borderLeft: `2px solid rgba(61,139,55,0.4)`,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: SEED.body,
            fontFamily: "var(--font-dm-sans), sans-serif",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          <strong style={{ color: SEED.greenDeep, fontWeight: 700 }}>Key finding: </strong>
          {finding}
        </p>
      </div>

      {/* DOI link */}
      <a
        href={doi}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontSize: 10,
          color: SEED.green,
          fontFamily: "var(--font-jetbrains), monospace",
          letterSpacing: "0.08em",
          textDecoration: "none",
        }}
      >
        View study →
      </a>
    </div>
  );
}
