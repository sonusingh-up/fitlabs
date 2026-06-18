import type { ReviewRating } from "@/lib/types";

export type ReviewData = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  figure: string;
  rating: ReviewRating;
  verdict: string;
  publishedAt: string;
  tags: string[];
};

export type ResearchBrief = {
  slug: string;
  type: string;
  title: string;
  mins: number;
};

export const reviews: ReviewData[] = [
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey",
    brand: "Dymatize",
    category: "Protein Powder",
    figure: "REV-004",
    rating: 9,
    verdict: "Dual NSF + Informed Choice certified hydrolyzed isolate. 25g protein, 2.7g leucine. Benchmark flavour. Premium price is the only caveat.",
    publishedAt: "2026-05-27",
    tags: ["Whey Isolate", "Hydrolyzed", "NSF Certified"],
  },
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    category: "Protein Powder",
    figure: "REV-001",
    rating: 9,
    verdict: "The benchmark whey. Clean label, consistent yield, Informed Choice certified.",
    publishedAt: "2025-04-10",
    tags: ["Whey", "Muscle Gain", "Informed Choice"],
  },
  {
    slug: "heart-and-soil-beef-organs",
    title: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    category: "Organ Supplements",
    figure: "REV-2026-046",
    rating: 9,
    verdict: "Rigorously transparent sourcing from regenerative US farms. Premium pricing reflects genuine quality.",
    publishedAt: "2026-05-20",
    tags: ["Regenerative", "US Sourced", "Organ Blend"],
  },
  {
    slug: "transparent-labs-bulk-black-review",
    title: "Transparent Labs BULK Black",
    brand: "Transparent Labs",
    category: "Pre-Workout",
    figure: "REV-2026-045",
    rating: 9,
    verdict: "Industry-leading label transparency. Clinical doses across all 19 actives, zero proprietary blends.",
    publishedAt: "2026-05-26",
    tags: ["Pre-Workout", "Clinical Doses", "No Prop Blend"],
  },
];

export const researchBriefs: ResearchBrief[] = [
  {
    slug: "sleep-duration-biological-aging",
    type: "Longevity & Sleep",
    title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Anti-Aging Sweet Spot",
    mins: 13,
  },
  {
    slug: "glp1-beyond-weight-loss",
    type: "Pharmacology",
    title: "GLP-1 Medications Beyond Weight Loss: Heart, Brain & Blood Pressure",
    mins: 15,
  },
  {
    slug: "creatine-brain-health",
    type: "Cognitive Health",
    title: "Creatine for Brain Health: Cognition, Memory & Mental Energy",
    mins: 14,
  },
];
