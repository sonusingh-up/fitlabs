import type { EvidenceLevel, ReviewRating } from "./types";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function evidenceColor(level: EvidenceLevel): string {
  const map: Record<EvidenceLevel, string> = {
    strong: "#2D6A4F",
    moderate: "#52796F",
    limited: "#8B7355",
    emerging: "#C4622D",
    insufficient: "#6B6059",
  };
  return map[level];
}

export function evidenceBg(level: EvidenceLevel): string {
  const map: Record<EvidenceLevel, string> = {
    strong: "rgba(45,106,79,0.08)",
    moderate: "rgba(82,121,111,0.08)",
    limited: "rgba(139,115,85,0.08)",
    emerging: "rgba(196,98,45,0.08)",
    insufficient: "rgba(107,96,89,0.08)",
  };
  return map[level];
}

export function ratingLabel(rating: ReviewRating): string {
  if (rating >= 9) return "Exceptional";
  if (rating >= 8) return "Excellent";
  if (rating >= 7) return "Very Good";
  if (rating >= 6) return "Good";
  if (rating >= 5) return "Average";
  if (rating >= 4) return "Below Average";
  return "Poor";
}

export function ratingColor(rating: ReviewRating): string {
  if (rating >= 8) return "#2D6A4F";
  if (rating >= 6) return "#52796F";
  if (rating >= 5) return "#8B7355";
  return "#C4622D";
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
