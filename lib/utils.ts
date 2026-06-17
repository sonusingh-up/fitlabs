import type { EvidenceLevel, ReviewRating } from "./types";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function evidenceColor(level: EvidenceLevel): string {
  const map: Record<EvidenceLevel, string> = {
    strong: "#059669",
    moderate: "#0E8784",
    limited: "#D97706",
    emerging: "#3B82F6",
    insufficient: "#6B7280",
  };
  return map[level];
}

export function evidenceBg(level: EvidenceLevel): string {
  const map: Record<EvidenceLevel, string> = {
    strong: "rgba(5,150,105,0.06)",
    moderate: "rgba(14,135,132,0.06)",
    limited: "rgba(217,119,6,0.06)",
    emerging: "rgba(59,130,246,0.06)",
    insufficient: "rgba(107,114,128,0.06)",
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
  if (rating >= 8) return "#059669";
  if (rating >= 6) return "#0E8784";
  if (rating >= 5) return "#D97706";
  return "#EF4444";
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
