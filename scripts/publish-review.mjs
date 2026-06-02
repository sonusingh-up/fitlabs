/**
 * publish-review.mjs
 * ─────────────────────────────────────────────
 * Run with: node scripts/publish-review.mjs
 *
 * This script lets Claude Code publish a full review
 * directly to Sanity — no form, no copy-paste, fully automatic.
 *
 * Requirements:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   NEXT_PUBLIC_SANITY_DATASET in .env.local
 *   SANITY_API_WRITE_TOKEN in .env.local  ← needs Editor permission
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Load .env.local manually (no dotenv dependency needed) ───────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");
const envFile = readFileSync(envPath, "utf-8");
const env = Object.fromEntries(
  envFile.split("\n")
    .filter(line => line && !line.startsWith("#"))
    .map(line => line.split("=").map(s => s.trim()))
    .filter(([k]) => k)
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ════════════════════════════════════════════════════════════════════════════
// ✏️  REVIEW DATA — Claude Code fills this section for every new review
// ════════════════════════════════════════════════════════════════════════════

const review = {
  _type: "review",

  // ── Basic Info ─────────────────────────────────────────────────────────────
  title: "MyProtein Creatine Monohydrate",
  slug: { _type: "slug", current: "myprotein-creatine-monohydrate" },
  brand: "MyProtein",
  category: "Creatine",
  editorialScore: 8,
  priceRange: "budget",
  publishedAt: "2025-03-08",
  updatedAt: "2026-05-26",

  metaDescription:
    "Honest review of MyProtein Creatine Monohydrate: formula, verification gaps, USD + INR pricing, comparison vs AS-IT-IS and ON Creatine. USA market focus. FSP 8/10.",

  verdict:
    "The cleanest, most affordable creatine monohydrate available in USA. No frills, just results. The only real gap is the absence of independent third-party batch certification.",

  affiliateUrl: "https://www.myprotein.com/sports-nutrition/creatine-monohydrate/10530743.html",

  tags: ["creatine", "strength", "budget", "usa", "monohydrate"],
  bestFor: ["Budget buyers", "Beginners", "Stackers", "Strength athletes"],
  notIdealFor: ["Competitive athletes needing certified products", "Those wanting Creapure-sourced creatine"],

  // ── FSP Scoring Pillars ───────────────────────────────────────────────────
  pillars: [
    {
      pillar: "formula",
      score: 9.5,
      notes:
        "One ingredient: creatine monohydrate. 5g per serving. No fillers, no flow agents, no sweeteners. The formula cannot be simpler — which is exactly correct. Minor deduction for not specifying raw material source (Creapure® vs standard CM).",
    },
    {
      pillar: "transparency",
      score: 9.5,
      notes:
        "When your entire supplement facts panel is one line, you cannot be more transparent. Label says creatine monohydrate, nothing else.",
    },
    {
      pillar: "verification",
      score: 6.5,
      notes:
        "MyProtein USA does not carry Informed Choice, NSF, or any equivalent independent batch certification on their creatine. Internal QC is referenced on the website but not independently verifiable.",
    },
    {
      pillar: "value",
      score: 9.5,
      notes:
        "At regular price already competitive. On sale — which happens every 3–4 weeks at 40–70% off — this is unambiguously the cheapest creatine from a recognisable brand. ₹650–850 for 250g.",
    },
    {
      pillar: "practical",
      score: 7.5,
      notes:
        "Dissolves in water with mild cloudiness for 30 seconds. Zip-lock pouch packaging is functional but not suited to American humidity — expect clumping by week 3 if not transferred to a sealed container.",
    },
  ],

  // ── Flags ─────────────────────────────────────────────────────────────────
  flags: [
    {
      type: "red",
      label: "No independent third-party certification",
      detail:
        "MyProtein USA creatine carries no Informed Choice, NSF, or equivalent batch certification. Purity is claimed but not independently verifiable at the batch level.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "Raw material source unspecified",
      detail:
        "MyProtein does not disclose whether their creatine monohydrate is Creapure®-sourced or standard CM from other manufacturing origins.",
      deduction: 0.1,
    },
    {
      type: "green",
      label: "Single ingredient — nothing to hide",
      detail:
        "No proprietary blends, no undisclosed additions, no fillers or flow agents. The entire product is one compound.",
    },
    {
      type: "green",
      label: "Correct 5g serving dose",
      detail:
        "5g per serving matches the clinically studied maintenance dose for creatine monohydrate. Not under-dosed.",
    },
    {
      type: "green",
      label: "No banned substance history",
      detail:
        "No positive doping cases, FDA warning letters, or recall events associated with MyProtein creatine products.",
    },
  ],

  // ── Ingredients ───────────────────────────────────────────────────────────
  ingredients: [
    {
      name: "Creatine Monohydrate",
      dosage: "5g per serving",
      evidenceLevel: "strong",
      purpose: "Increases phosphocreatine stores for improved short-burst power output and strength",
      notes: "Source not disclosed — may or may not be Creapure®",
    },
  ],

  // ── Claim Audit ───────────────────────────────────────────────────────────
  claimAudit: [
    {
      claim: "5g creatine monohydrate per serving",
      verdict: "supported",
      evidence: "strong",
      notes: "Label is simple enough to be credible on its face. Consistent with standard creatine product formats.",
    },
    {
      claim: "Increases muscle strength and power",
      verdict: "supported",
      evidence: "strong",
      notes: "The most robustly supported claim in sports supplementation. Creatine monohydrate at 3–5g/day improves short-burst power output in 70%+ of RCTs.",
    },
    {
      claim: "Supports muscle recovery",
      verdict: "supported",
      evidence: "moderate",
      notes: "Some evidence for reduced exercise-induced muscle damage markers. Effect size is smaller and less consistent than the strength/power benefit.",
    },
  ],

  // ── Pros / Cons ───────────────────────────────────────────────────────────
  pros: [
    "Best price-per-gram creatine from a recognisable brand in USA",
    "Pure single-ingredient formula — no unnecessary additions",
    "Correct 5g clinical dose per serving",
    "Genuinely tasteless — stacks with any supplement",
    "No recall or adverse event history",
  ],
  cons: [
    "No independent third-party batch certification",
    "Raw material source (Creapure® vs generic) not disclosed",
    "Packaging not humidity-resistant — clumps in American climate",
  ],

  // ── Value Metric ──────────────────────────────────────────────────────────
  valueMetric: {
    pricePerServing: 17,
    primaryActiveGrams: 5,
    pricePerGramActive: 3.4,
    categoryAvgPricePerGram: 4.5,
    efficiency: "above",
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 🚀  Publish to Sanity
// ════════════════════════════════════════════════════════════════════════════

async function publish() {
  try {
    // Check if slug already exists
    const existing = await client.fetch(
      `*[_type == "review" && slug.current == $slug][0]._id`,
      { slug: review.slug.current }
    );

    let result;
    if (existing) {
      // Update existing document
      result = await client.patch(existing).set(review).commit();
      console.log(`✅ Updated: "${review.title}" (${existing})`);
    } else {
      // Create new document
      result = await client.create(review);
      console.log(`✅ Published: "${review.title}" → ID: ${result._id}`);
    }

    console.log(`🔗 View at: https://fitlabreviews.com/reviews/${review.slug.current}`);
    console.log(`📝 Edit at: https://fitlabreviews.com/studio/structure/review;${result._id}`);

  } catch (err) {
    console.error("❌ Failed to publish:", err.message);
    process.exit(1);
  }
}

publish();
