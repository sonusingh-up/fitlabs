import type { ProductCatalogEntry } from "@/lib/amazon/types";

/**
 * Central product catalog — maps every reviewed product to its Amazon ASIN.
 *
 * To add a new product:
 *   1. Add an entry here with the ASIN from Amazon.com
 *   2. Run `npm run fetch-amazon` to update the cache
 *   3. Use `getAmazonProduct(slug)` in your page to get the live affiliate link
 *
 * The `fallbackUrl` is used when the API is unavailable or the ASIN lookup fails.
 * Use your existing amzn.to shortened links as fallbacks.
 */
export const productCatalog: ProductCatalogEntry[] = [
  // ── Beef Organ Supplements ──────────────────────────────────────────────
  {
    slug: "ancestral-supplements-beef-liver",
    asin: "B076H5TFZH",
    label: "Ancestral Supplements Grass Fed Beef Liver",
    brand: "Ancestral Supplements",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/49RAlmU",
  },
  {
    slug: "heart-and-soil-beef-organs",
    asin: "B0BN9PYR1J",
    label: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/3Q2X5ts",
  },
  {
    slug: "left-coast-performance-beef-organs",
    asin: "B0931YN6TC",
    label: "Left Coast Performance Grass Fed Beef Organ",
    brand: "Left Coast Performance",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4nUmi5H",
  },
  {
    slug: "perfect-supplements-beef-liver",
    asin: "B00IRGKBXU",
    label: "Perfect Supplements Beef Liver",
    brand: "Perfect Supplements",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4odctAl",
  },
  {
    slug: "force-factor-primal-origins",
    asin: "B0CZK2QV8Y",
    label: "Force Factor Primal Origins Beef Organ Complex",
    brand: "Force Factor",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/43wF5e3",
  },
  {
    slug: "forest-leaf-beef-organ-complex",
    asin: "B0BFMQ33XV",
    label: "Forest Leaf Beef Organ Complex",
    brand: "Forest Leaf",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4dzvZTM",
  },
  {
    slug: "codeage-beef-organs",
    asin: "B09BKFRGL2",
    label: "Codeage Grass Fed Beef Organs",
    brand: "Codeage",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4wUtzqk",
  },
  {
    slug: "enviromedica-terraferrin",
    asin: "B0B8X7YRPN",
    label: "Enviromedica Terraferrin",
    brand: "Enviromedica",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4vhPma3",
  },
  {
    slug: "happee-beef-organ-women",
    asin: "B0DFYJBPTH",
    label: "Happee Beef Organ Complex for Women",
    brand: "Happee",
    category: "Organ Supplement",
    fallbackUrl: "https://amzn.to/4uDGXOc",
  },

  // ── Pre-Workout ──────────────────────────────────────────────────────────
  {
    slug: "legion-pulse-pre-workout",
    asin: "B00K364ALE",
    label: "Legion Pulse Pre-Workout",
    brand: "Legion Athletics",
    category: "Pre-Workout",
    fallbackUrl: "https://amzn.to/4o4r29e",
  },
  {
    slug: "transparent-labs-bulk-black",
    asin: "B0BG4DW28R",
    label: "Transparent Labs Bulk Black",
    brand: "Transparent Labs",
    category: "Pre-Workout",
    fallbackUrl: "https://amzn.to/3RPRlnm",
  },

  // ── Creatine ─────────────────────────────────────────────────────────────
  {
    slug: "transparent-labs-creatine-hmb",
    asin: "B078GSZ4QR",
    label: "Transparent Labs Creatine HMB",
    brand: "Transparent Labs",
    category: "Creatine",
    fallbackUrl: "https://amzn.to/3Qba8ZR",
  },
  {
    slug: "gorilla-mind-creatine-monohydrate",
    asin: "B0BZ7KNYCV",
    label: "Gorilla Mind Creatine Monohydrate",
    brand: "Gorilla Mind",
    category: "Creatine",
    fallbackUrl: "https://amzn.to/3PAiUk1",
  },
  {
    slug: "gorilla-mind-creatine-hcl",
    asin: "B0BZ7JD5FG",
    label: "Gorilla Mind Creatine HCl",
    brand: "Gorilla Mind",
    category: "Creatine",
    fallbackUrl: "https://amzn.to/3PAhINz",
  },

  // ── Protein Powder ───────────────────────────────────────────────────────
  {
    slug: "dymatize-iso100",
    asin: "B000GIPJ0M",
    label: "Dymatize ISO100 Hydrolyzed Protein Powder",
    brand: "Dymatize",
    category: "Protein Powder",
    fallbackUrl: "https://amzn.to/4e73lcN",
  },

  // ── Digestive / Gut Health ───────────────────────────────────────────────
  {
    slug: "arrae-bloat",
    asin: "B09W5P56S8",
    label: "Arrae Bloat Digestive Enzyme",
    brand: "Arrae",
    category: "Digestive Health",
    fallbackUrl: "https://amzn.to/4wZ3tCG",
  },
  {
    slug: "arrae-tone-gummies",
    asin: "B0D59WXSNN",
    label: "Arrae Tone Gummies",
    brand: "Arrae",
    category: "Weight Management",
    fallbackUrl: "https://amzn.to/4u9uAbn",
  },

  // ── Probiotics (Seed) ───────────────────────────────────────────────────
  {
    slug: "seed-ds-01",
    asin: "B0CDMB2X4X",
    label: "Seed DS-01 Daily Synbiotic",
    brand: "Seed",
    category: "Probiotic",
    fallbackUrl: "https://amzn.to/4vm1F57",
  },
  {
    slug: "seed-pds-08",
    asin: "B0D3FTVQMB",
    label: "Seed PDS-08 Pediatric Daily Synbiotic",
    brand: "Seed",
    category: "Probiotic",
    fallbackUrl: "https://amzn.to/4ecAxQa",
  },
  {
    slug: "seed-14-day-gut-reset",
    asin: "B0D9MNPP1V",
    label: "Seed 14-Day Gut Reset",
    brand: "Seed",
    category: "Gut Health",
    fallbackUrl: "https://amzn.to/4vkvR0y",
  },
  {
    slug: "seed-am-02",
    asin: "B0DR7XQPNV",
    label: "Seed AM-02",
    brand: "Seed",
    category: "Probiotic",
    fallbackUrl: "https://amzn.to/3Sd0OoQ",
  },
  {
    slug: "seed-pm-02",
    asin: "B0DR7VTJQL",
    label: "Seed PM-02",
    brand: "Seed",
    category: "Sleep Support",
    fallbackUrl: "https://amzn.to/4eiBPZ1",
  },
  {
    slug: "seed-dm-02",
    asin: "B0DR7WL2QM",
    label: "Seed DM-02",
    brand: "Seed",
    category: "Probiotic",
    fallbackUrl: "https://amzn.to/3RE5ELW",
  },

  // ── Sleep ────────────────────────────────────────────────────────────────
  {
    slug: "performance-lab-sleep",
    asin: "B08GYKMC93",
    label: "Performance Lab Sleep",
    brand: "Performance Lab",
    category: "Sleep Aid",
    fallbackUrl: "https://amzn.to/4x4WZCs",
  },
  {
    slug: "nested-naturals-luna",
    asin: "B00V2JO7NY",
    label: "Nested Naturals Luna Sleep Aid",
    brand: "Nested Naturals",
    category: "Sleep Aid",
    fallbackUrl: "https://amzn.to/3Sb2LlK",
  },
];

export function getCatalogEntry(slug: string): ProductCatalogEntry | undefined {
  return productCatalog.find((p) => p.slug === slug);
}

export function getAllAsins(): string[] {
  return [...new Set(productCatalog.map((p) => p.asin))];
}
