import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import HubMasthead from "@/components/ui/HubMasthead";

export const metadata: Metadata = {
  title: "Supplement Reviews by Category",
  description: "Browse supplement reviews by category. Every category page includes key ingredient analysis, evidence ratings, and independently reviewed products.",
  alternates: { canonical: "/category" },
};

const categories = [
  {
    slug: "protein-powder",
    name: "Protein Powder",
    figure: "CAT-01",
    icon: "🥛",
    reviewCount: 18,
    ingredientCount: 6,
    description: "The most important supplement for muscle protein synthesis. We evaluate protein yield accuracy, amino acid profiles, and label honesty.",
    topIngredients: ["Whey Isolate", "Casein", "Pea Protein"],
    keyConsiderations: ["Protein yield per 100g", "Amino spiking risk", "Digestive enzymes"],
    accent: "#0F7A5A",
    bestFor: ["Muscle Gain", "Recovery", "Weight Loss"],
  },
  {
    slug: "creatine",
    name: "Creatine",
    figure: "CAT-02",
    icon: "⚡",
    reviewCount: 10,
    ingredientCount: 3,
    description: "The most researched ergogenic aid available. Creatine monohydrate is the gold standard — everything else is marketing.",
    topIngredients: ["Creatine Monohydrate", "Creatine HCl", "Micronised Creatine"],
    keyConsiderations: ["Micronisation", "Purity certificates", "Price per gram"],
    accent: "#2D6A4F",
    bestFor: ["Strength", "Power", "Muscle Gain"],
  },
  {
    slug: "pre-workout",
    name: "Pre-Workout",
    figure: "CAT-03",
    icon: "🔥",
    reviewCount: 14,
    ingredientCount: 8,
    description: "The most abused category in sports nutrition. We only score pre-workouts with full label disclosure and clinically effective doses.",
    topIngredients: ["Citrulline", "Beta-Alanine", "Caffeine", "Alpha-GPC"],
    keyConsiderations: ["Proprietary blends", "Stimulant load", "Dose transparency"],
    accent: "#D4A96A",
    bestFor: ["Energy", "Focus", "Endurance"],
  },
  {
    slug: "mass-gainer",
    name: "Mass Gainer",
    figure: "CAT-04",
    icon: "📈",
    reviewCount: 7,
    ingredientCount: 4,
    description: "High-calorie supplements for hardgainers. We check calorie sources — quality carbs vs cheap sugars — and protein-per-rupee ratios.",
    topIngredients: ["Whey Protein", "Complex Carbs", "Creatine", "MCT Oil"],
    keyConsiderations: ["Sugar content", "Protein quality", "Calorie density"],
    accent: "#0F7A5A",
    bestFor: ["Bulking", "Hardgainers", "Weight Gain"],
  },
  {
    slug: "fat-burner",
    name: "Fat Burner",
    figure: "CAT-05",
    icon: "🔆",
    reviewCount: 9,
    ingredientCount: 5,
    description: "The most hyped, least effective category. We apply strict criteria — only evidence-backed thermogenics at meaningful doses score above 7.",
    topIngredients: ["Caffeine", "L-Carnitine", "Green Tea Extract", "Capsaicin"],
    keyConsiderations: ["Evidence quality", "Stimulant safety", "Dose accuracy"],
    accent: "#B07D2A",
    bestFor: ["Weight Loss", "Metabolism Support"],
  },
  {
    slug: "amino-acids",
    name: "Amino Acids & BCAAs",
    figure: "CAT-06",
    icon: "🧬",
    reviewCount: 11,
    ingredientCount: 5,
    description: "BCAAs are largely redundant with adequate protein intake. Essential aminos (EAAs) have better evidence. We separate the hype from the useful.",
    topIngredients: ["EAAs", "Leucine", "Glutamine", "BCAAs 2:1:1"],
    keyConsiderations: ["EAA vs BCAA", "Leucine content", "Use case (fasted training)"],
    accent: "#7EB8D4",
    bestFor: ["Recovery", "Fasted Training", "Vegan Athletes"],
  },
  {
    slug: "vitamins-minerals",
    name: "Vitamins & Minerals",
    figure: "CAT-07",
    icon: "🌿",
    reviewCount: 13,
    ingredientCount: 7,
    description: "Deficiency correction, not performance enhancement. We prioritise bioavailable forms — methylfolate over folic acid, D3 over D2.",
    topIngredients: ["Vitamin D3", "Magnesium Glycinate", "Zinc", "Omega-3"],
    keyConsiderations: ["Form bioavailability", "Dosing accuracy", "Fillers & excipients"],
    accent: "#2D6A4F",
    bestFor: ["General Health", "Deficiency", "Immunity"],
  },
  {
    slug: "adaptogens",
    name: "Adaptogens",
    figure: "CAT-08",
    icon: "🌱",
    reviewCount: 8,
    ingredientCount: 4,
    description: "Ashwagandha, Rhodiola, and Lion's Mane have the strongest human evidence. We check extract standardisation — the single biggest quality variable.",
    topIngredients: ["KSM-66 Ashwagandha", "Rhodiola Rosea", "Lion's Mane", "Sensoril"],
    keyConsiderations: ["Extract standardisation", "Withanolide content", "Dose"],
    accent: "#7EB8D4",
    bestFor: ["Stress", "Recovery", "Cognitive Function"],
  },
  {
    slug: "omega-fish-oil",
    name: "Omega-3 / Fish Oil",
    figure: "CAT-09",
    icon: "🐟",
    reviewCount: 6,
    ingredientCount: 2,
    description: "One of the most evidence-backed supplements for cardiovascular and joint health. EPA+DHA content and oxidation testing are what matter.",
    topIngredients: ["EPA", "DHA", "Algae Omega-3"],
    keyConsiderations: ["EPA+DHA concentration", "Oxidation (TOTOX score)", "Molecular form"],
    accent: "#3A7D9B",
    bestFor: ["Heart Health", "Joint Health", "Inflammation"],
  },
  {
    slug: "gut-health",
    name: "Gut Health",
    figure: "CAT-11",
    icon: "🫁",
    reviewCount: 1,
    ingredientCount: 3,
    description: "Digestive enzymes, postbiotics, and herb-based gut supplements. We evaluate ingredient doses against clinical evidence and flag proprietary blends that hide key amounts.",
    topIngredients: ["Bromelain", "Ginger Extract", "Peppermint Leaf"],
    keyConsiderations: ["Proprietary blend transparency", "Dose vs clinical trials", "Third-party certification"],
    accent: "#0F7A5A",
    bestFor: ["Bloating", "Digestive Comfort", "IBS Support"],
  },
  {
    slug: "sleep-recovery",
    name: "Sleep & Recovery",
    figure: "CAT-10",
    icon: "🌙",
    reviewCount: 7,
    ingredientCount: 5,
    description: "Sleep is the most powerful recovery tool available. We review supplements that genuinely support sleep architecture rather than just causing sedation.",
    topIngredients: ["Magnesium Glycinate", "Ashwagandha", "L-Theanine", "Melatonin"],
    keyConsiderations: ["Melatonin dose (0.5–1mg)", "Dependency risk", "Mechanism evidence"],
    accent: "#6B4E9B",
    bestFor: ["Recovery", "Sleep Quality", "Cortisol Management"],
  },
];

const stats = [
  { label: "Categories", value: categories.length.toString() },
  { label: "Total Reviews", value: `${categories.reduce((a, b) => a + b.reviewCount, 0)}+` },
  { label: "Ingredients Profiled", value: `${categories.reduce((a, b) => a + b.ingredientCount, 0) * 3}+` },
  { label: "Updated", value: "May 2026" },
];

export default function CategoryHubPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #e4e8e5", backgroundColor: "#f6f8f6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#e4e8e5" }}>/</span>
          <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>Categories</span>
        </div>
      </div>

      {/* Hero */}
      <HubMasthead
        eyebrow={`Category Index · ${categories.length} Categories`}
        kicker="Independently Reviewed"
        title="Browse by"
        titleAccent="Category"
        subtitle="Every category page gives you the key ingredients to look for, red flags to avoid, and our full reviewed product list — independently scored on formula quality, transparency, and value."
        stats={stats}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Category grid */}
        <section>
          <SectionHeading label="All Categories" figure="§ 01" title="Supplement" titleItalic="categories" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                style={{ display: "flex", flexDirection: "column", border: "1px solid #e4e8e5", borderRadius: 14, overflow: "hidden", textDecoration: "none", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                className="hub-card"
              >
                {/* Accent bar */}
                <div style={{ height: 3, backgroundColor: cat.accent }} />

                <div style={{ padding: "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                      <div>
                        <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, color: "#6b7770", textTransform: "uppercase", margin: 0, marginBottom: 3 }}>{cat.figure}</p>
                        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#17211c", margin: 0, letterSpacing: "-0.01em" }}>{cat.name}</h2>
                      </div>
                    </div>
                    <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, color: "#6b7770", padding: "4px 10px", border: "1px solid #e4e8e5", borderRadius: 4, backgroundColor: "#f6f8f6", flexShrink: 0 }}>
                      {cat.reviewCount} reviews
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.65, margin: 0 }}>{cat.description}</p>

                  {/* Key ingredients */}
                  <div>
                    <p style={{ fontSize: 9, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Key Ingredients</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {cat.topIngredients.slice(0, 3).map((ing) => (
                        <span key={ing} style={{ padding: "3px 8px", backgroundColor: "#f6f8f6", border: "1px solid #e4e8e5", borderRadius: 4, fontSize: 10, color: "#586259", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}>{ing}</span>
                      ))}
                    </div>
                  </div>

                  {/* Best for & CTA */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eef1ef", paddingTop: 10, marginTop: "auto" }}>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {cat.bestFor.slice(0, 2).map((tag) => (
                        <span key={tag} style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, color: cat.accent, fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.07em", backgroundColor: `${cat.accent}0F`, border: `1px solid ${cat.accent}28` }}>{tag}</span>
                      ))}
                    </div>
                    <span style={{ fontSize: 12, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>Browse →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <Link href="/best" style={{ padding: "24px 28px", backgroundColor: "#17211c", borderRadius: 14, textDecoration: "none", display: "block" }}>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Shortcut</p>
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F9FAFB", marginBottom: 8 }}>View Best-Of Guides →</h3>
            <p style={{ fontSize: 13, color: "#6b7770", lineHeight: 1.6, margin: 0 }}>Top picks per category, ranked and compared head-to-head.</p>
          </Link>
          <Link href="/ingredients" style={{ padding: "24px 28px", backgroundColor: "#FFFFFF", border: "1px solid #e4e8e5", borderRadius: 14, textDecoration: "none", display: "block", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, textTransform: "uppercase", color: "#6b7770", marginBottom: 8 }}>Deep Dive</p>
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211c", marginBottom: 8 }}>Browse Ingredients →</h3>
            <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.6, margin: 0 }}>Evidence profiles for every major sports nutrition ingredient.</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
