import type { EvidenceLevel } from "@/lib/types";

// ─── Discriminated union ──────────────────────────────────────────────────────

interface ConditionMeta {
  type: "condition";
  symptomCount?: number;
  causeCount?: number;
  treatmentCount?: number;
}

interface RoutineMeta {
  type: "routine";
  skinTypes?: string[];
  duration?: string;
  stepCount?: number;
}

interface IngredientMeta {
  type: "ingredient";
  benefitCount?: number;
  riskCount?: number;
  evidenceLevel?: EvidenceLevel;
  category?: string;
}

interface GuideMeta {
  type: "guide";
  difficulty?: "beginner" | "intermediate" | "advanced";
  timeEstimate?: string;
  category?: string;
  authorName?: string;
  publishedAt?: string;
}

export type SkinMetadataStripProps =
  | ConditionMeta
  | RoutineMeta
  | IngredientMeta
  | GuideMeta;

// ─── Token maps ───────────────────────────────────────────────────────────────

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59",
  intermediate: "#C4622D",
  advanced: "#8B1A1A",
};

// ─── Internal primitive ───────────────────────────────────────────────────────

interface MetaItem {
  label: string;
  value: string;
  accent?: string;
}

function buildItems(props: SkinMetadataStripProps): MetaItem[] {
  switch (props.type) {
    case "condition":
      return [
        ...(props.symptomCount !== undefined  ? [{ label: "Symptoms",   value: String(props.symptomCount)  }] : []),
        ...(props.causeCount !== undefined    ? [{ label: "Causes",     value: String(props.causeCount)    }] : []),
        ...(props.treatmentCount !== undefined? [{ label: "Treatments", value: String(props.treatmentCount)}] : []),
      ];
    case "routine":
      return [
        ...(props.duration  ? [{ label: "Duration",  value: props.duration              }] : []),
        ...(props.stepCount !== undefined ? [{ label: "Steps",    value: String(props.stepCount)     }] : []),
        ...(props.skinTypes?.length       ? [{ label: "Skin Types", value: props.skinTypes.join(", ") }] : []),
      ];
    case "ingredient":
      return [
        ...(props.evidenceLevel ? [{ label: "Evidence", value: props.evidenceLevel.charAt(0).toUpperCase() + props.evidenceLevel.slice(1), accent: evidenceColor[props.evidenceLevel] }] : []),
        ...(props.category      ? [{ label: "Category",  value: props.category   }] : []),
        ...(props.benefitCount !== undefined ? [{ label: "Benefits", value: String(props.benefitCount) }] : []),
        ...(props.riskCount !== undefined    ? [{ label: "Risks",    value: String(props.riskCount)    }] : []),
      ];
    case "guide":
      return [
        ...(props.category     ? [{ label: "Category",   value: props.category }] : []),
        ...(props.difficulty   ? [{ label: "Level",       value: props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1), accent: difficultyColor[props.difficulty] }] : []),
        ...(props.timeEstimate ? [{ label: "Read Time",   value: props.timeEstimate }] : []),
        ...(props.authorName   ? [{ label: "Author",      value: props.authorName   }] : []),
        ...(props.publishedAt  ? [{ label: "Published",   value: new Date(props.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) }] : []),
      ];
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SkinMetadataStrip(props: SkinMetadataStripProps) {
  const items = buildItems(props);
  if (items.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0,
        borderTop: "1px solid #D4C9B8",
        borderBottom: "1px solid #D4C9B8",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="metadata-strip-item"
          style={{
            borderRight: i < items.length - 1 ? "1px solid #D4C9B8" : "none",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A89880",
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: item.accent ?? "#1A1714",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
