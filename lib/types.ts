export type EvidenceLevel = "strong" | "moderate" | "limited" | "emerging" | "insufficient";
export type ReviewRating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// ─── Fitlab Scoring Protocol (FSP) ───────────────────────────────────────────

export type ScoringPillar =
  | "formula"
  | "transparency"
  | "verification"
  | "value"
  | "practical";

export interface PillarScore {
  pillar: ScoringPillar;
  score: number; // 1–10, one decimal allowed
  notes: string;
}

export type FlagType = "red" | "green";

export interface ReviewFlag {
  type: FlagType;
  label: string;
  detail: string;
  deduction?: number; // only for red flags — subtracted from composite
}

export type ClaimVerdict =
  | "supported"
  | "overstated"
  | "context-dependent"
  | "unsupported";

export interface ClaimAuditItem {
  claim: string;
  verdict: ClaimVerdict;
  evidence: EvidenceLevel;
  notes: string;
}

export interface ValueMetric {
  pricePerServing: number;         // in ₹
  primaryActiveGrams: number;      // e.g. protein grams per serving
  pricePerGramActive: number;      // ₹ per gram
  categoryAvgPricePerGram: number; // benchmark for the category
  efficiency: "above" | "at" | "below"; // vs category average
}

export interface ScoringRubric {
  pillars: PillarScore[];
  flags: ReviewFlag[];
  claimAudit: ClaimAuditItem[];
  valueMetric: ValueMetric;
  compositeScore: number;   // calculated: weighted pillars - red flag deductions
  editorialScore: ReviewRating; // human-rounded final score shown on the review
}

export interface Review {
  slug: string;
  title: string;
  brand: string;
  category: string;
  rating: ReviewRating;
  verdict: string;
  heroImage?: string;
  publishedAt: string;
  updatedAt?: string;
  issueNumber?: string;
  tags: string[];
  bestFor: string[];
  notIdealFor: string[];
  priceRange: "budget" | "mid" | "premium";
  affiliateUrl?: string;
}

export interface Ingredient {
  name: string;
  dosage: string;
  evidenceLevel: EvidenceLevel;
  purpose: string;
  notes?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Category {
  slug: string;
  label: string;
  description: string;
  count?: number;
  icon?: string;
}

export interface Goal {
  slug: string;
  label: string;
  description: string;
  topIngredients: string[];
}

export interface ComparisonProduct {
  name: string;
  brand: string;
  rating: ReviewRating;
  price: number;
  priceUnit: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  affiliateUrl?: string;
}
