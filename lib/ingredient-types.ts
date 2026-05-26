export type EvidenceLevel = "strong" | "moderate" | "limited" | "emerging" | "insufficient";

export interface IngredientStat {
  label: string;
  value: string;
  sub: string;
}

export interface IngredientBenefit {
  claim: string;
  evidence: EvidenceLevel;
  citation: string;
  notes: string;
}

export interface IngredientForm {
  name: string;
  verdict: string;
  recommended: boolean;
  tag: string;
}

export interface SafetyPanel {
  concern: string;
  verdict: string;
  safe: boolean; // true = green, false = amber/red
  body: string;
  caveat?: string;
}

export interface MechanismStep {
  step: string;
  title: string;
  body: string;
}

export interface PopulationGroup {
  group: string;
  detail: string;
  tags: string[];
}

export interface CautionGroup {
  group: string;
  detail: string;
  isContraindication?: boolean;
}

export interface Reference {
  num: string;
  cite: string;
  journal: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface DosageCard {
  label: string;
  value: string;
  note: string;
}

export interface IngredientEntry {
  // Hub page — all required
  slug: string;
  name: string;
  figure: string;
  category: string;
  evidence: EvidenceLevel;
  dose: string;
  mechanism: string;
  bestFor: string[];
  summary: string;

  // Article page
  aka?: string[];
  intro: string;
  stats: IngredientStat[];

  mechanismOverview: string;
  mechanismSteps?: MechanismStep[];
  secondaryMechanisms?: { title: string; detail: string }[];

  benefits: IngredientBenefit[];

  dosageGuide: {
    intro: string;
    cards: DosageCard[];
    timingNote: string;
    warningNote?: string;
  };

  forms?: IngredientForm[];

  safety: SafetyPanel[];

  whoFor: PopulationGroup[];
  whoNot?: CautionGroup[];

  priceRange?: string;
  pricingNote?: string;

  references: Reference[];
  faq: FaqItem[];

  relatedSlugs?: string[];
}
