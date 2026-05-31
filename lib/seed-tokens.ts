/**
 * Seed Brand Design Tokens
 * Used across all Seed product review pages to maintain consistent
 * brand identity. Seed uses FitLab's standard parchment base with
 * deep forest green (#0D120A) dark panels and Seed green (#3D8B37) accents.
 */

export const SEED = {
  // Accent colors
  green: "#3D8B37",        // Primary Seed green — all CTAs, badges, accents
  greenLight: "#5EAD58",   // Hover / high-score emphasis
  greenDeep: "#2A5F26",    // Deep accent / score borders
  greenMuted: "#7FAF7A",   // Muted green for captions on light bg

  // Dark panel surfaces (used on banners, verdict panels, strain panels)
  darkBg: "#0D120A",       // Deep forest — main dark surface
  darkCard: "#141E0F",     // Elevated dark card
  darkBorder: "#253420",   // Dark panel borders
  darkText: "#F0F4EC",     // Text on dark surfaces
  darkMuted: "#8FAF88",    // Muted text on dark surfaces
  darkCaption: "#5D7A57",  // Caption text on dark surfaces

  // Feature banner gradient (used on all Seed feature banners)
  bannerBg: "linear-gradient(135deg, #0D120A 0%, #0A1508 100%)",

  // Dot-grid texture (Seed's signature dot motif, applied on dark panels)
  dotGrid: {
    backgroundImage: "radial-gradient(circle, rgba(61,139,55,0.15) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  },

  // Line-grid texture (alternative for supplement facts panels)
  lineGrid: {
    backgroundImage:
      "linear-gradient(rgba(61,139,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61,139,55,0.06) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  },

  // Score colors (same logic as FitLab but using green palette)
  scoreHigh: "#3D8B37",    // 7+ (replaces FitLab's #2D6A4F)
  scoreMid: "#8B7355",     // 5–6.9
  scoreLow: "#8B3A2C",     // < 5

  // Standard FitLab page colors (unchanged)
  pageBg: "#F2EBD9",
  cardBg: "#F8F2E4",
  mutedBg: "#EDE8DF",
  border: "#D4C9B8",
  ink: "#1A1714",
  body: "#2D2926",
  muted: "#5C5650",
  caption: "#8A8480",
  sepia: "#A89880",

  // Verification status colors
  certPass: "rgba(61,139,55,0.08)",
  certPassBorder: "rgba(61,139,55,0.25)",
  certPassText: "#2A5F26",
  certFail: "rgba(139,58,44,0.08)",
  certFailBorder: "rgba(139,58,44,0.25)",
  certFailText: "#8B3A2C",
} as const;

/** Returns the score color based on the score value */
export function seedScoreColor(score: number): string {
  if (score >= 7) return SEED.scoreHigh;
  if (score >= 5) return SEED.scoreMid;
  return SEED.scoreLow;
}

/** Seed product lines for cross-reference cards */
export const SEED_PRODUCTS = [
  { slug: "seed-ds-01", name: "DS-01® Daily Synbiotic", tagline: "53.6B AFU · 24 strains · 30 servings", figure: "REV-2026-063" },
  { slug: "seed-pds-08", name: "PDS-08® Pediatric Synbiotic", tagline: "24.5B AFU · 9 strains · Kids 3–17", figure: "REV-2026-064" },
  { slug: "seed-am-02", name: "AM-02™ Energy + Focus", tagline: "Caffeine-free nootropic · Co-Biotic", figure: "REV-2026-065" },
  { slug: "seed-14-day-gut-reset", name: "DS-01® 14 Day Gut Reset", tagline: "Same DS-01 formula · 14-day supply", figure: "REV-2026-066" },
  { slug: "seed-dm-02", name: "DM-02™ Daily Multivitamin", tagline: "20 vitamins/minerals · ViaCap", figure: "REV-2026-067" },
  { slug: "seed-pm-02", name: "PM-02™ Sleep + Restore", tagline: "Biphasic 500mcg melatonin · Co-Biotic", figure: "REV-2026-062" },
] as const;
