import type { ReviewRating } from "@/lib/types";
import { ratingLabel, ratingColor } from "@/lib/utils";

interface ReviewScoreBadgeProps {
  rating: ReviewRating;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function ReviewScoreBadge({ rating, size = "md", showLabel = true }: ReviewScoreBadgeProps) {
  const color = ratingColor(rating);
  const label = ratingLabel(rating);

  const sizes = {
    sm: { score: 20, label: 10, pad: "4px 8px" },
    md: { score: 28, label: 10, pad: "8px 14px" },
    lg: { score: 40, label: 11, pad: "12px 20px" },
  };

  const s = sizes[size];

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        border: `1.5px solid ${color}`,
        borderRadius: 3,
        padding: s.pad,
        gap: 2,
        backgroundColor: `${color}10`,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: s.score,
          fontWeight: 700,
          color,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {rating}
        <span style={{ fontSize: s.score * 0.55, fontWeight: 400, color: `${color}99` }}>/10</span>
      </span>
      {showLabel && (
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: s.label,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
