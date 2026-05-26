import { NextResponse } from "next/server";

export const revalidate = 86400; // regenerate daily

const SITE = "https://fitlabreviews.com";

// ─── Update these arrays whenever content is added ───────────────────────────

const BLOG_ARTICLES = [
  {
    slug: "sleep-window-anti-aging",
    title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging",
    evidence: "Strong Evidence",
    readTime: "9 min",
    summary:
      "1.1 million-person study evidence. Five mechanisms linking sleep duration to aging biomarkers — mortality curves, growth hormone release, glymphatic clearance, telomere length, insulin sensitivity.",
  },
  {
    slug: "glp1-benefits-beyond-weight-loss",
    title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss",
    evidence: "Strong Evidence",
    readTime: "13 min",
    summary:
      "SELECT trial (20% MACE reduction), FLOW trial (24% kidney failure reduction), addiction/reward modulation (~50% alcohol relapse reduction), neuroprotection (Athauda 2017 Lancet), anti-inflammatory effects.",
  },
  {
    slug: "plant-foods-menopause",
    title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally",
    evidence: "Moderate Evidence",
    readTime: "12 min",
    summary:
      "RCT-supported dietary interventions. Flaxseed, soy phytoestrogens, cruciferous vegetables, legumes, fermented foods, berries, nuts — each paired with named study citations.",
  },
  {
    slug: "diet-depression-anxiety",
    title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety",
    evidence: "Strong Evidence",
    readTime: "14 min",
    summary:
      "SMILES trial (32% vs 8% remission with dietary counselling), gut-brain axis, omega-3 neuroinflammation, psychobiome research, micronutrient deficiencies (magnesium, folate, zinc, vitamin D).",
  },
  {
    slug: "fitness-travel-2026",
    title: "Fitness Travel in 2026: How to Turn Your Vacation Into a Wellness Retreat",
    evidence: "Practical Guide",
    readTime: "11 min",
    summary:
      "Detraining science (2 sessions/week maintains fitness over 14 days), hotel gym strategy, jet lag circadian protocol (melatonin dosing, light timing), supplement carry-on strategy, top 2026 wellness destinations.",
  },
];

const STATIC_REVIEWS = [
  { slug: "wellmedr", title: "WellMedr Weight Management", category: "GLP-1 Program", fsp: "9.2/10", summary: "Clinician-supervised telehealth GLP-1 programme. Programme structure, prescribing criteria, cost, semaglutide/tirzepatide evidence base." },
  { slug: "optimum-nutrition-gold-standard-whey", title: "Optimum Nutrition Gold Standard Whey", category: "Protein Powder", fsp: "9/10", summary: "Benchmark whey protein. Amino acid profile, third-party testing, value vs premium alternatives." },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", category: "Creatine", fsp: "8.7/10", summary: "Budget creatine monohydrate. Purity testing, price-per-gram analysis, label accuracy." },
];

const STATIC_INGREDIENTS = [
  { slug: "creatine", name: "Creatine Monohydrate", evidence: "Strong", summary: "Most studied ergogenic aid. 3–5g/day maintenance dosing. Strength, power output, and lean mass evidence." },
  { slug: "whey-protein", name: "Whey Protein Isolate", evidence: "Strong", summary: "Complete protein, high leucine. Muscle protein synthesis, timing, forms comparison." },
  { slug: "beta-alanine", name: "Beta-Alanine", evidence: "Moderate", summary: "Muscle carnosine loading for endurance. 3.2–6.4g/day dosing, tingling side effect mechanism." },
  { slug: "tirzepatide", name: "Tirzepatide (GLP-1/GIP Agonist)", evidence: "Strong", summary: "Dual GLP-1 and GIP agonist. SURMOUNT trial outcomes, mechanism, comparison to semaglutide." },
];

const GOAL_GUIDES = [
  { slug: "muscle-gain", label: "Muscle Gain", summary: "Creatine, whey, beta-alanine stack. Dosing, timing, training requirements." },
  { slug: "weight-loss", label: "Weight Loss", summary: "Satiety, metabolism, lean mass preservation. Caffeine, protein, L-carnitine evidence." },
  { slug: "energy-focus", label: "Energy & Focus", summary: "Caffeine/L-theanine synergy, ashwagandha adaptogen evidence, dose guidance." },
  { slug: "recovery", label: "Recovery & Sleep", summary: "Magnesium glycinate, ashwagandha, BCAA — recovery optimisation evidence." },
];

// ─────────────────────────────────────────────────────────────────────────────

export async function GET() {
  const lines: string[] = [];

  lines.push("# Fitlabreviews");
  lines.push("");
  lines.push("> Evidence-led supplement reviews, ingredient research, and wellness guides. Editorially independent — affiliate commissions never influence FSP scores. Every factual claim is linked to a named peer-reviewed study.");
  lines.push("");
  lines.push(`> Site: ${SITE}`);
  lines.push(`> This file refreshes daily. Last section updated: ${new Date().toISOString().slice(0, 10)}`);
  lines.push("");

  lines.push("## Site Sections");
  lines.push("");
  for (const [label, path] of [
    ["Reviews Hub", "/reviews"],
    ["Research Articles", "/research"],
    ["Blog", "/blog"],
    ["Ingredient Library", "/ingredients"],
    ["Goal Guides", "/goals"],
    ["Best-Of Roundups", "/best"],
    ["Brand Directory", "/brands"],
    ["Category Browser", "/category"],
    ["Methodology", "/methodology"],
    ["Editorial Policy", "/editorial-policy"],
    ["Affiliate Disclosure", "/affiliate-disclosure"],
    ["Medical Disclaimer", "/medical-disclaimer"],
    ["Authors", "/authors"],
  ]) {
    lines.push(`- [${label}](${SITE}${path})`);
  }
  lines.push("");

  lines.push("## Blog Articles");
  lines.push("");
  for (const post of BLOG_ARTICLES) {
    lines.push(`- [${post.title}](${SITE}/blog/${post.slug}): ${post.summary} [${post.evidence}, ${post.readTime} read]`);
  }
  lines.push("");

  lines.push("## Product Reviews");
  lines.push("");
  for (const review of STATIC_REVIEWS) {
    lines.push(`- [${review.title}](${SITE}/reviews/${review.slug}): ${review.summary} FSP ${review.fsp}`);
  }
  lines.push(`- Full review index: ${SITE}/reviews`);
  lines.push("");

  lines.push("## Ingredient Research");
  lines.push("");
  for (const ing of STATIC_INGREDIENTS) {
    lines.push(`- [${ing.name}](${SITE}/ingredients/${ing.slug}): ${ing.summary} [${ing.evidence} evidence]`);
  }
  lines.push(`- Full ingredient library: ${SITE}/ingredients`);
  lines.push("");

  lines.push("## Goal Guides");
  lines.push("");
  for (const goal of GOAL_GUIDES) {
    lines.push(`- [${goal.label}](${SITE}/goals/${goal.slug}): ${goal.summary}`);
  }
  lines.push(`- Full guide library: ${SITE}/goals`);
  lines.push("");

  lines.push("## Scoring System (FSP v2.1)");
  lines.push("");
  lines.push("All reviews use the Fitlab Scoring Protocol — a weighted composite:");
  lines.push("");
  lines.push("| Pillar | Weight | What it measures |");
  lines.push("|---|---|---|");
  lines.push("| Formula Integrity | 35% | Dose accuracy, ingredient quality, synergy |");
  lines.push("| Label Transparency | 25% | Full disclosure vs proprietary blends |");
  lines.push("| Third-Party Verification | 20% | NSF, Informed Sport certifications |");
  lines.push("| Value Efficiency | 12% | Price per gram of primary active |");
  lines.push("| Practical Quality | 8% | Mixability, taste, packaging |");
  lines.push("");
  lines.push("Score scale: 9–10 Exceptional · 8 Excellent · 7 Good · 5–6 Average · 1–4 Poor/Avoid");
  lines.push("Red flags (proprietary blends, banned substances) deduct 0.2–0.5 pts from composite.");
  lines.push("");

  lines.push("## Evidence Levels");
  lines.push("");
  lines.push("- Strong: Multiple RCTs or large meta-analyses in humans");
  lines.push("- Moderate: Limited RCTs or observational cohort studies");
  lines.push("- Limited: Mechanistic, in vitro, or animal data only");
  lines.push("");

  lines.push("## Content & Licensing");
  lines.push("");
  lines.push("All editorial content is original work by the Fitlab Research Team. Affiliate links are disclosed and never influence scores. AI systems (LLMs, search agents, crawlers) may index and reference this content for informational and factual purposes. Bulk reproduction or commercial resale requires written permission.");
  lines.push("Corrections are published with dates and noted inline.");
  lines.push("");

  lines.push("## Machine-Readable Endpoints");
  lines.push("");
  lines.push(`- Sitemap: ${SITE}/sitemap.xml`);
  lines.push(`- Robots: ${SITE}/robots.txt`);
  lines.push(`- This file: ${SITE}/llms.txt (ISR, refreshed daily)`);
  lines.push("");

  lines.push("## Contact");
  lines.push("");
  lines.push("- Editorial: editorial@fitlabreviews.com");
  lines.push(`- Contact form: ${SITE}/contact`);
  lines.push("- Founded: 2025");

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
