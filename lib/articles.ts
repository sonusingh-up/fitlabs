export type ArticleType = "blog" | "research" | "ingredient" | "review";

export interface ArticleEntry {
  slug: string;
  type: ArticleType;
  href: string;
  title: string;
  category: string;
  tags: string[];
  mins: number;
  evidence: string;
  image: string;
  date: string;
  featured?: boolean;
}

export const allArticles: ArticleEntry[] = [
  // ── Blog articles ─────────────────────────────────────────
  {
    slug: "sleep-window-anti-aging", type: "blog",
    href: "/blog/sleep-window-anti-aging",
    title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Anti-Aging Sweet Spot",
    category: "LONGEVITY & SLEEP", tags: ["Sleep & Recovery", "Fitness"],
    mins: 11, evidence: "Strong evidence",
    image: "/lifestyle/sleep_longevity.png",
    date: "2026-05-10", featured: true,
  },
  {
    slug: "glp1-benefits-beyond-weight-loss", type: "blog",
    href: "/blog/glp1-benefits-beyond-weight-loss",
    title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Benefits Beyond Weight Loss",
    category: "PHARMACOLOGY", tags: ["Nutrition", "Reviews"],
    mins: 13, evidence: "Strong evidence",
    image: "/illustrations/article-glp1-blog.png",
    date: "2026-04-22", featured: true,
  },
  {
    slug: "plant-foods-menopause", type: "blog",
    href: "/blog/plant-foods-menopause",
    title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain",
    category: "NUTRITION", tags: ["Nutrition", "Fitness"],
    mins: 10, evidence: "Moderate evidence",
    image: "/illustrations/article-plant-menopause.png",
    date: "2026-05-28",
  },
  {
    slug: "diet-depression-anxiety", type: "blog",
    href: "/blog/diet-depression-anxiety",
    title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety",
    category: "MENTAL HEALTH", tags: ["Nutrition"],
    mins: 14, evidence: "Strong evidence",
    image: "/lifestyle/article_thumbnail_woman.png",
    date: "2026-03-15",
  },
  {
    slug: "fitness-travel-2026", type: "blog",
    href: "/blog/fitness-travel-2026",
    title: "The Complete Guide to Staying Fit While Travelling (2026)",
    category: "FITNESS", tags: ["Fitness"],
    mins: 9, evidence: "Moderate evidence",
    image: "/illustrations/article-fitness-travel.png",
    date: "2026-04-05",
  },
  {
    slug: "glp1-companion-supplements-2026", type: "blog",
    href: "/blog/glp1-companion-supplements-2026",
    title: "7 GLP-1 Companion Supplements Trending in 2026",
    category: "PHARMACOLOGY", tags: ["Nutrition", "Reviews"],
    mins: 14, evidence: "Strong evidence",
    image: "/illustrations/article-glp1-blog.png",
    date: "2026-06-18", featured: true,
  },
  {
    slug: "strength-training-longevity", type: "blog",
    href: "/blog/strength-training-longevity",
    title: "Strength Training & Longevity: Why 2 Hours a Week Works",
    category: "FITNESS", tags: ["Fitness"],
    mins: 9, evidence: "Strong evidence",
    image: "/illustrations/fallback-fitness.png",
    date: "2026-06-22", featured: true,
  },
  {
    slug: "highest-calorie-burning-exercises", type: "blog",
    href: "/blog/highest-calorie-burning-exercises",
    title: "Highest Calorie-Burning Exercises, Ranked by Science",
    category: "FITNESS", tags: ["Fitness"],
    mins: 8, evidence: "Strong evidence",
    image: "/lifestyle/fitness_yoga.png",
    date: "2026-06-22",
  },
  {
    slug: "exercise-alzheimers-prevention", type: "blog",
    href: "/blog/exercise-alzheimers-prevention",
    title: "Exercise & Alzheimer's: How Movement Cuts Risk 45%",
    category: "BRAIN HEALTH", tags: ["Fitness"],
    mins: 9, evidence: "Strong evidence",
    image: "/illustrations/article-creatine-brain.png",
    date: "2026-06-22", featured: true,
  },

  // ── Research articles ─────────────────────────────────────
  {
    slug: "sleep-duration-biological-aging", type: "research",
    href: "/research/sleep-duration-biological-aging",
    title: "Sleep Duration & Biological Aging: The 7-Hour Sweet Spot",
    category: "LONGEVITY & SLEEP", tags: ["Sleep & Recovery"],
    mins: 18, evidence: "Strong evidence",
    image: "/lifestyle/sleep_longevity.png",
    date: "2026-04-10", featured: true,
  },
  {
    slug: "glp1-beyond-weight-loss", type: "research",
    href: "/research/glp1-beyond-weight-loss",
    title: "GLP-1 Benefits Beyond Weight Loss: Heart, Brain & Mood",
    category: "PHARMACOLOGY", tags: ["Nutrition", "Reviews"],
    mins: 20, evidence: "Strong evidence",
    image: "/illustrations/article-glp1-research.png",
    date: "2026-03-20",
  },
  {
    slug: "creatine-brain-health", type: "research",
    href: "/research/creatine-brain-health",
    title: "Creatine for Brain Health: Cognition, Memory & Neuroprotection",
    category: "SPORTS SCIENCE", tags: ["Fitness", "Nutrition"],
    mins: 15, evidence: "Moderate evidence",
    image: "/illustrations/article-creatine-brain.png",
    date: "2026-05-05",
  },
  {
    slug: "wpi-vs-wpc-protein", type: "research",
    href: "/research/wpi-vs-wpc-protein",
    title: "WPI vs WPC Protein: What the Evidence Actually Shows",
    category: "NUTRITION SCIENCE", tags: ["Nutrition", "Reviews", "Fitness"],
    mins: 16, evidence: "Strong evidence",
    image: "/illustrations/article-wpi-wpc.png",
    date: "2026-04-18",
  },
  {
    slug: "microdose-glp1", type: "research",
    href: "/research/microdose-glp1",
    title: "Microdose GLP-1 Telehealth: Does Low-Dose Tirzepatide Work?",
    category: "PHARMACOLOGY", tags: ["Nutrition", "Reviews"],
    mins: 14, evidence: "Limited evidence",
    image: "/lifestyle/health_wellness_editorial.png",
    date: "2026-05-15",
  },
  {
    slug: "beef-organ-supplements-safety", type: "research",
    href: "/research/beef-organ-supplements-safety",
    title: "Beef Organ Supplements: Safety, Vitamin A & Heavy Metals",
    category: "SAFETY & QUALITY", tags: ["Nutrition", "Reviews"],
    mins: 12, evidence: "Moderate evidence",
    image: "/lifestyle/heart_soil_beef_organs.jpg",
    date: "2026-02-28",
  },
  {
    slug: "freeze-dried-vs-desiccated-organ-supplements", type: "research",
    href: "/research/freeze-dried-vs-desiccated-organ-supplements",
    title: "Freeze-Dried vs Desiccated Organ Supplements (2026)",
    category: "SUPPLEMENT SCIENCE", tags: ["Nutrition", "Reviews"],
    mins: 11, evidence: "Moderate evidence",
    image: "/illustrations/article-freeze-dried.png",
    date: "2026-03-10",
  },
  
  // ── Review articles ──────────────────────────────────────
  {
    slug: "fairlife-protein-shake", type: "review" as ArticleType,
    href: "/reviews/fairlife-protein-shake",
    title: "Fairlife Protein Shake Review (2026): 30g, 150 Cal",
    title: "Fairlife Protein Shake Review: 30 g Protein, 150 Cal, FSP 8/10",
    category: "REVIEWS", tags: ["Nutrition", "Reviews"],
    mins: 14, evidence: "Strong evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-23", featured: true,
  },
  {
    slug: "prodentim", type: "review" as ArticleType,
    href: "/reviews/prodentim",
    title: "ProDentim Review (2026): Oral Probiotic Worth $69?",
    category: "REVIEWS", tags: ["Reviews"],
    mins: 12, evidence: "Limited evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-24",
  },
  {
    slug: "prostavive", type: "review" as ArticleType,
    href: "/reviews/prostavive",
    title: "ProstaVive Review (2026): Prostate Formula Tested",
    category: "REVIEWS", tags: ["Reviews"],
    mins: 12, evidence: "Limited evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-24",
  },
  {
    slug: "audifort", type: "review" as ArticleType,
    href: "/reviews/audifort",
    title: "Audifort Review (2026): Can Drops Fix Hearing?",
    category: "REVIEWS", tags: ["Reviews"],
    mins: 10, evidence: "Limited evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-24",
  },
  {
    slug: "joint-genesis", type: "review" as ArticleType,
    href: "/reviews/joint-genesis",
    title: "Joint Genesis Review (2026): Mobilee® Joint Formula",
    category: "REVIEWS", tags: ["Nutrition", "Reviews"],
    mins: 12, evidence: "Moderate evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-24",
  },
  {
    slug: "citrus-burn", type: "review" as ArticleType,
    href: "/reviews/citrus-burn",
    title: "Citrus Burn Review: Prop Blend Fat Burner, FSP 4/10",
    category: "REVIEWS", tags: ["Nutrition", "Reviews"],
    mins: 14, evidence: "Limited evidence",
    image: "/illustrations/fallback-reviews.png",
    date: "2026-06-21",
  },
];

const FALLBACK_IMAGES: Record<string, string> = {
  "LONGEVITY & SLEEP": "/illustrations/fallback-sleep.png",
  "SLEEP": "/illustrations/fallback-sleep.png",
  "NUTRITION": "/illustrations/fallback-nutrition.png",
  "NUTRITION SCIENCE": "/illustrations/fallback-nutrition.png",
  "MENTAL HEALTH": "/illustrations/fallback-nutrition.png",
  "WOMEN'S HEALTH": "/illustrations/fallback-nutrition.png",
  "FITNESS": "/illustrations/fallback-fitness.png",
  "SPORTS SCIENCE": "/illustrations/fallback-fitness.png",
  "PHARMACOLOGY": "/illustrations/fallback-pharma.png",
  "SAFETY & QUALITY": "/illustrations/fallback-pharma.png",
  "SUPPLEMENT SCIENCE": "/illustrations/fallback-pharma.png",
  "REVIEWS": "/illustrations/fallback-reviews.png",
};

export function getArticleImage(article: ArticleEntry): string {
  if (article.image) return article.image;
  return FALLBACK_IMAGES[article.category] || "/illustrations/fallback-default.png";
}

export function getArticlesByTag(tag: string): ArticleEntry[] {
  if (tag === "Top Reads") return allArticles.filter(a => a.featured).concat(allArticles.filter(a => !a.featured)).slice(0, 8);
  return allArticles.filter(a => a.tags.includes(tag));
}

export function getRecentArticles(limit = 8): ArticleEntry[] {
  return [...allArticles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

export function getFeaturedArticles(): ArticleEntry[] {
  return allArticles.filter(a => a.featured);
}
