import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import HubMasthead from "@/components/ui/HubMasthead";

export const metadata: Metadata = {
  title: "Best Supplement Picks — Ranked Roundups",
  description: "Evidence-ranked best-of lists for every major supplement category. Each roundup compares top products on formula quality, value, and third-party verification.",
  alternates: { canonical: "/best" },
};

const roundups = [
  {
    slug: "whey-protein",
    title: "Best Whey Protein",
    subtitle: "in USA — 2026",
    figure: "RND-001",
    productCount: 14,
    lastUpdated: "May 2026",
    topPick: "ON Gold Standard Whey",
    topPickScore: 9,
    budgetPick: "MuscleBlaze Biozyme",
    budgetScore: 8,
    category: "Protein Powder",
    summary: "We tested 14 whey proteins on protein yield, amino acid spiking tests, mixability, and price-per-gram. The top picks cover every budget tier.",
    tags: ["Muscle Gain", "Recovery", "Most Popular"],
    accent: "#0f7a5a",
  },
  {
    slug: "creatine",
    title: "Best Creatine",
    subtitle: "Monohydrate — 2026",
    figure: "RND-002",
    productCount: 10,
    lastUpdated: "April 2026",
    topPick: "AS-IT-IS Creatine",
    topPickScore: 9,
    budgetPick: "MyProtein Creatine",
    budgetScore: 8,
    category: "Creatine",
    summary: "Creatine monohydrate is simple — the differences are in purity and price. We cut through the noise and show you what's worth buying.",
    tags: ["Strength", "Power", "Budget-Friendly"],
    accent: "#2D6A4F",
  },
  {
    slug: "pre-workout",
    title: "Best Pre-Workout",
    subtitle: "Without Proprietary Blends — 2026",
    figure: "RND-003",
    productCount: 12,
    lastUpdated: "March 2026",
    topPick: "Transparent Labs BULK",
    topPickScore: 9,
    budgetPick: "MusclePharm Assault",
    budgetScore: 7,
    category: "Pre-Workout",
    summary: "Pre-workouts are the most abused category in the industry. We only rank products with full label disclosure and efficacious ingredient doses.",
    tags: ["Energy", "Focus", "Pump"],
    accent: "#D4A96A",
  },
  {
    slug: "protein-powder-for-beginners",
    title: "Best Protein Powder for Beginners",
    subtitle: "USA — 2026",
    figure: "RND-004",
    productCount: 8,
    lastUpdated: "May 2026",
    topPick: "MuscleBlaze Biozyme",
    topPickScore: 8,
    budgetPick: "Nakpro Whey",
    budgetScore: 7,
    category: "Protein Powder",
    summary: "For beginners, the goal is simple — high protein yield, clean formula, accessible price. No complex stacks needed.",
    tags: ["Beginners", "Value", "Clean Label"],
    accent: "#7EB8D4",
  },
  {
    slug: "fat-burner",
    title: "Best Fat Burner",
    subtitle: "Evidence-Based Only — 2026",
    figure: "RND-005",
    productCount: 9,
    lastUpdated: "February 2026",
    topPick: "Transparent Labs Fat Burner",
    topPickScore: 8,
    budgetPick: "MuscleBlaze Fat Burner",
    budgetScore: 6,
    category: "Fat Loss",
    summary: "Most fat burners are overpriced caffeine pills. We only rank products with genuinely evidence-backed thermogenic ingredients at effective doses.",
    tags: ["Weight Loss", "Metabolism", "Stimulant-Free Options"],
    accent: "#0f7a5a",
  },
  {
    slug: "mass-gainer",
    title: "Best Mass Gainer",
    subtitle: "Clean Calories — 2026",
    figure: "RND-006",
    productCount: 7,
    lastUpdated: "January 2026",
    topPick: "Optimum Nutrition Serious Mass",
    topPickScore: 8,
    budgetPick: "MuscleBlaze Mass Gainer",
    budgetScore: 7,
    category: "Mass Gainer",
    summary: "Mass gainers are only worth it if you genuinely can't eat enough whole food. We rank them on calorie quality, protein content, and sugar load.",
    tags: ["Bulking", "High Calorie", "Hardgainers"],
    accent: "#2D6A4F",
  },
  {
    slug: "multivitamin",
    title: "Best Multivitamin",
    subtitle: "for Athletes — 2026",
    figure: "RND-007",
    productCount: 11,
    lastUpdated: "March 2026",
    topPick: "Thorne Research Basic Nutrients",
    topPickScore: 9,
    budgetPick: "HealthKart HK Vitals",
    budgetScore: 7,
    category: "Vitamins",
    summary: "A good multivitamin fills genuine micronutrient gaps — it doesn't replace food. We assess bioavailability of key forms like methylfolate and D3.",
    tags: ["Health", "Immunity", "Daily Use"],
    accent: "#D4A96A",
  },
  {
    slug: "ashwagandha",
    title: "Best Ashwagandha",
    subtitle: "KSM-66 & Sensoril Compared — 2026",
    figure: "RND-008",
    productCount: 8,
    lastUpdated: "April 2026",
    topPick: "NOW Foods KSM-66",
    topPickScore: 9,
    budgetPick: "AS-IT-IS Ashwagandha",
    budgetScore: 7,
    category: "Adaptogens",
    summary: "Standardised extract matters more than the brand. KSM-66 and Sensoril are the only forms with sufficient human trial data.",
    tags: ["Stress Relief", "Recovery", "Sleep"],
    accent: "#7EB8D4",
  },
  {
    slug: "beef-organ-supplements",
    title: "Best Beef Organ Supplements",
    subtitle: "Multi-Organ Complexes — 2026",
    figure: "RND-009",
    productCount: 9,
    lastUpdated: "May 2026",
    topPick: "Ancestral Supplements",
    topPickScore: 9,
    budgetPick: "Left Coast Performance",
    budgetScore: 8,
    category: "Organ Supplements",
    summary: "We ranked 9 beef organ supplements on organ diversity, sourcing transparency, processing method, and third-party testing. Grass-fed, pasture-raised sourcing and New Zealand origin dominate the top tier.",
    tags: ["Whole Food Nutrition", "Grass-Fed", "Nutrient Density"],
    accent: "#8B4513",
  },
  {
    slug: "beef-organ-supplements-for-women",
    title: "Best Beef Organ Supplements for Women",
    subtitle: "Female-Specific Formulas — 2026",
    figure: "RND-010",
    productCount: 5,
    lastUpdated: "May 2026",
    topPick: "Ancestral Supplements",
    topPickScore: 9,
    budgetPick: "Happee Beef Organs",
    budgetScore: 7,
    category: "Organ Supplements",
    summary: "Female-focused organ formulas prioritise liver and spleen for iron, heart for CoQ10, and in some cases uterine tissue for female-specific peptides. We cover safety, sourcing, and what the evidence actually shows.",
    tags: ["Women's Health", "Iron", "Hormonal Support"],
    accent: "#A0522D",
  },
  {
    slug: "beef-organ-supplements-carnivore-diet",
    title: "Best Beef Organs for Carnivore Diet",
    subtitle: "Whole-Animal Nutrition — 2026",
    figure: "RND-011",
    productCount: 5,
    lastUpdated: "May 2026",
    topPick: "Ancestral Supplements",
    topPickScore: 9,
    budgetPick: "Left Coast Performance",
    budgetScore: 8,
    category: "Organ Supplements",
    summary: "For carnivore dieters eating muscle-meat only, organ supplements fill critical micronutrient gaps. We rank the top picks for strict, lion diet, and athletic carnivore protocols.",
    tags: ["Carnivore", "Micronutrients", "Whole Animal"],
    accent: "#6B3A2A",
  },
];

const categoryGroups = [
  { label: "Protein & Amino Acids", slugs: ["whey-protein", "protein-powder-for-beginners", "mass-gainer"] },
  { label: "Performance", slugs: ["creatine", "pre-workout"] },
  { label: "Body Composition", slugs: ["fat-burner"] },
  { label: "Health & Wellness", slugs: ["multivitamin", "ashwagandha"] },
  { label: "Organ Supplements", slugs: ["beef-organ-supplements", "beef-organ-supplements-for-women", "beef-organ-supplements-carnivore-diet"] },
];

export default function BestHubPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #e4e8e5", backgroundColor: "#f6f8f6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#e4e8e5" }}>/</span>
          <span style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>Best Of</span>
        </div>
      </div>

      {/* Hero */}
      <HubMasthead
        eyebrow={`Roundup Index · ${roundups.length} Guides`}
        kicker="Tested & Ranked · 2026"
        title="Best"
        titleAccent="Supplement Guides"
        subtitle="Every roundup covers 7–15 products, ranked on formula quality, label transparency, price efficiency, and real-world results. Updated when formulas or prices change significantly."
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Jump links by category */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categoryGroups.map((g) => (
            <a key={g.label} href={`#${g.label.toLowerCase().replace(/\s+/g, "-")}`} style={{ padding: "5px 14px", border: "1px solid #e4e8e5", borderRadius: 20, fontSize: 11, color: "#586259", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none", backgroundColor: "#FFFFFF" }}>
              {g.label}
            </a>
          ))}
        </div>

        {/* Roundup cards — grouped by category */}
        {categoryGroups.map((group) => {
          const groupRoundups = roundups.filter(r => group.slugs.includes(r.slug));
          return (
            <section key={group.label} id={group.label.toLowerCase().replace(/\s+/g, "-")} style={{ marginBottom: 56 }}>
              <SectionHeading label={group.label} figure="§" title={group.label.split(" ")[0]} titleItalic={group.label.split(" ").slice(1).join(" ")} size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
                {groupRoundups.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/best/${r.slug}`}
                    style={{ display: "flex", flexDirection: "column", border: "1px solid #e4e8e5", borderRadius: 14, overflow: "hidden", textDecoration: "none", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                    className="hub-card"
                  >
                    {/* Accent header */}
                    <div style={{ height: 4, backgroundColor: r.accent }} />

                    {/* Card content */}
                    <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, color: "#6b7770", textTransform: "uppercase", marginBottom: 6 }}>{r.figure} · {r.lastUpdated}</p>
                          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#17211c", margin: 0, lineHeight: 1.15 }}>{r.title}</h2>
                          <p style={{ fontSize: 12, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", marginTop: 4 }}>{r.subtitle}</p>
                        </div>
                        <span style={{ flexShrink: 0, fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, color: "#6b7770", textTransform: "uppercase", padding: "4px 10px", border: "1px solid #e4e8e5", borderRadius: 4, backgroundColor: "#f6f8f6" }}>{r.productCount} products</span>
                      </div>

                      <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.65, margin: 0 }}>{r.summary}</p>

                      {/* Top pick & budget pick */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        <div style={{ padding: "10px 12px", backgroundColor: "#f6f8f6", border: "1px solid #e4e8e5", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 8, textTransform: "uppercase", color: "#6b7770", marginBottom: 4 }}>Top Pick</p>
                          <p style={{ fontSize: 12, fontWeight: 600, color: "#17211c", margin: 0, fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.3 }}>{r.topPick}</p>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 800, color: r.accent, margin: 0 }}>{r.topPickScore}/10</p>
                        </div>
                        <div style={{ padding: "10px 12px", backgroundColor: "#f6f8f6", border: "1px solid #e4e8e5", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 8, textTransform: "uppercase", color: "#6b7770", marginBottom: 4 }}>Budget Pick</p>
                          <p style={{ fontSize: 12, fontWeight: 600, color: "#17211c", margin: 0, fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.3 }}>{r.budgetPick}</p>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 800, color: "#586259", margin: 0 }}>{r.budgetScore}/10</p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eef1ef", paddingTop: 10 }}>
                        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                          {r.tags.map((tag) => (
                            <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(15,122,90,0.06)", border: "1px solid rgba(15,122,90,0.15)", borderRadius: 4, fontSize: 9, color: "#0f7a5a", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}>{tag}</span>
                          ))}
                        </div>
                        <span style={{ fontSize: 12, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", flexShrink: 0 }}>Read Guide →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Methodology note */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#17211c", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, letterSpacing: "0.12em", fontSize: 9, textTransform: "uppercase", color: "#586259", marginBottom: 10 }}>How We Build Roundups</p>
          <p style={{ fontSize: 14, color: "#6b7770", lineHeight: 1.75, marginBottom: 12 }}>
            Roundups are built from our full review database — every product ranked here has a full individual review. Top picks are determined by composite FSP score, not editorial preference or affiliate value.
          </p>
          <Link href="/methodology" style={{ fontSize: 13, color: "#0f7a5a", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
            Read the Fitlab Scoring Protocol →
          </Link>
        </div>

      </div>
    </div>
  );
}
