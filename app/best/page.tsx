import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Best Supplement Roundups — Fitlabreviews",
  description: "Evidence-ranked best-of lists for every major supplement category. Each roundup compares top products on formula quality, value, and third-party verification.",
};

const roundups = [
  {
    slug: "whey-protein",
    title: "Best Whey Protein",
    subtitle: "in India — 2026",
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
    accent: "#C4622D",
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
    subtitle: "India — 2026",
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
    accent: "#C4622D",
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
];

const categoryGroups = [
  { label: "Protein & Amino Acids", slugs: ["whey-protein", "protein-powder-for-beginners", "mass-gainer"] },
  { label: "Performance", slugs: ["creatine", "pre-workout"] },
  { label: "Body Composition", slugs: ["fat-burner"] },
  { label: "Health & Wellness", slugs: ["multivitamin", "ashwagandha"] },
];

export default function BestHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Best Of</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ROUNDUP INDEX · {roundups.length} GUIDES</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Tested & Ranked · 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Best{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Supplement Guides</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620 }}>
            Every roundup covers 7–15 products, ranked on formula quality, label transparency, price efficiency, and real-world results. Updated when formulas or prices change significantly.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Jump links by category */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categoryGroups.map((g) => (
            <a key={g.label} href={`#${g.label.toLowerCase().replace(/\s+/g, "-")}`} style={{ padding: "5px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "#F8F2E4" }}>
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
                    style={{ display: "flex", flexDirection: "column", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4" }}
                    className="hub-card"
                  >
                    {/* Accent header */}
                    <div style={{ height: 4, backgroundColor: r.accent }} />

                    {/* Card content */}
                    <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase", marginBottom: 6 }}>{r.figure} · {r.lastUpdated}</p>
                          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.15 }}>{r.title}</h2>
                          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 4 }}>{r.subtitle}</p>
                        </div>
                        <span style={{ flexShrink: 0, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", border: "1px solid #D4C9B8", borderRadius: 4, backgroundColor: "#EDE8DF" }}>{r.productCount} products</span>
                      </div>

                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{r.summary}</p>

                      {/* Top pick & budget pick */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        <div style={{ padding: "10px 12px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Top Pick</p>
                          <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1714", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.3 }}>{r.topPick}</p>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 800, color: r.accent, margin: 0 }}>{r.topPickScore}/10</p>
                        </div>
                        <div style={{ padding: "10px 12px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Budget Pick</p>
                          <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1714", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.3 }}>{r.budgetPick}</p>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 800, color: "#5C5650", margin: 0 }}>{r.budgetScore}/10</p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EDE8DF", paddingTop: 10 }}>
                        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                          {r.tags.map((tag) => (
                            <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{tag}</span>
                          ))}
                        </div>
                        <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>Read Guide →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Methodology note */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>How We Build Roundups</p>
          <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 12 }}>
            Roundups are built from our full review database — every product ranked here has a full individual review. Top picks are determined by composite FSP score, not editorial preference or affiliate value.
          </p>
          <Link href="/methodology" style={{ fontSize: 13, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Read the Fitlab Scoring Protocol →
          </Link>
        </div>

      </div>
    </div>
  );
}
