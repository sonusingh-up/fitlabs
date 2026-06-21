"use client";

import { useEffect, useRef, useState } from "react";
import type { ReviewRating } from "@/lib/types";
import { ratingLabel, ratingColor } from "@/lib/utils";

interface ReviewScoreBadgeProps {
  rating: ReviewRating;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const DIMS = {
  sm: { w: 44, r: 17, stroke: 2.5, font: 14, labelFont: 7, pad: "3px 6px" },
  md: { w: 64, r: 25, stroke: 3, font: 20, labelFont: 9, pad: "6px 10px" },
  lg: { w: 88, r: 35, stroke: 4, font: 28, labelFont: 10, pad: "10px 16px" },
};

export default function ReviewScoreBadge({ rating, size = "md", showLabel = true }: ReviewScoreBadgeProps) {
  const color = ratingColor(rating);
  const label = ratingLabel(rating);
  const d = DIMS[size];
  const circ = 2 * Math.PI * d.r;
  const filled = (rating / 10) * circ;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <svg width={d.w} height={d.w} viewBox={`0 0 ${d.w} ${d.w}`} style={{ display: "block" }}>
        <circle
          cx={d.w / 2} cy={d.w / 2} r={d.r}
          fill="none"
          stroke={`${color}18`}
          strokeWidth={d.stroke}
        />
        <circle
          cx={d.w / 2} cy={d.w / 2} r={d.r}
          fill="none"
          stroke={color}
          strokeWidth={d.stroke}
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={visible ? circ - filled : circ}
          transform={`rotate(-90 ${d.w / 2} ${d.w / 2})`}
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
        <text
          x={d.w / 2} y={d.w / 2 + d.font * 0.35}
          textAnchor="middle"
          fill={color}
          fontSize={d.font}
          fontWeight={800}
          fontFamily="Georgia, serif"
        >
          {rating}
        </text>
      </svg>
      {showLabel && (
        <span style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: d.labelFont,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color,
          lineHeight: 1,
        }}>
          {label}
        </span>
      )}
    </div>
  );
}
