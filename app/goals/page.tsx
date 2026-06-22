import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Supplement Stacks by Fitness Goal — Evidence-Based",
  description: "Goal-based supplement guides for muscle gain, fat loss, endurance, recovery, and more. Each guide recommends ingredients ranked by evidence strength, not marketing.",
  alternates: { canonical: "/goals" },
};

type Goal = {
  slug: string;
  title: string;
  titleItalic: string;
  figure: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  supplementCount: number;
  topIngredients: string[];
  summary: string;
  outcome: string;
  tags: string[];
  accent: string;
  priority: "Foundation" | "Common" | "Specialist";
};

const goals: Goal[] = [
  {
    slug: "muscle-gain",
    title: "Build",
    titleItalic: "Muscle",
    figure: "GOL-001",
    category: "Body Composition",
    difficulty: "Beginner",
    supplementCount: 4,
    topIngredients: ["Creatine Monohydrate", "Whey Protein", "Beta-Alanine", "Caffeine"],
    summary: "The foundation is progressive overload and 1.6–2.2g/kg protein. Creatine and whey are the only supplements with consistent, strong evidence for lean mass gain.",
    outcome: "Increase lean muscle mass over 8–16 weeks",
    tags: ["Strength", "Hypertrophy", "Most Popular"],
    accent: "#0F7A5A",
    priority: "Foundation",
  },
  {
    slug: "fat-loss",
    title: "Lose",
    titleItalic: "Body Fat",
    figure: "GOL-002",
    category: "Body Composition",
    difficulty: "Beginner",
    supplementCount: 3,
    topIngredients: ["Caffeine", "Protein", "Creatine"],
    summary: "A calorie deficit is the only non-negotiable. Caffeine increases thermogenesis marginally; protein preserves muscle. Most 'fat burners' add nothing beyond caffeine.",
    outcome: "Reduce body fat while preserving lean muscle",
    tags: ["Weight Loss", "Cutting", "Thermogenics"],
    accent: "#0A4F3B",
    priority: "Foundation",
  },
  {
    slug: "strength",
    title: "Increase",
    titleItalic: "Strength",
    figure: "GOL-003",
    category: "Performance",
    difficulty: "Intermediate",
    supplementCount: 3,
    topIngredients: ["Creatine Monohydrate", "Caffeine", "Beta-Alanine"],
    summary: "Creatine is the strongest ergogenic aid for strength. It consistently increases 1RM across compound movements by 5–15% relative to training-matched controls.",
    outcome: "Improve 1RM and multi-rep strength outputs",
    tags: ["Powerlifting", "1RM", "Compound Lifts"],
    accent: "#0F7A5A",
    priority: "Foundation",
  },
  {
    slug: "endurance",
    title: "Improve",
    titleItalic: "Endurance",
    figure: "GOL-004",
    category: "Performance",
    difficulty: "Intermediate",
    supplementCount: 4,
    topIngredients: ["Beta-Alanine", "Caffeine", "Sodium Bicarbonate", "Citrulline"],
    summary: "Beta-alanine buffers acid accumulation in high-intensity bouts over 60 seconds. Caffeine reduces perceived exertion. Sodium bicarb is often overlooked but well-evidenced.",
    outcome: "Sustain higher intensity for longer training sessions",
    tags: ["Cardio", "HIIT", "Cyclists", "Runners"],
    accent: "#3A7D9B",
    priority: "Common",
  },
  {
    slug: "recovery",
    title: "Speed Up",
    titleItalic: "Recovery",
    figure: "GOL-005",
    category: "Recovery",
    difficulty: "Beginner",
    supplementCount: 3,
    topIngredients: ["Creatine", "Protein", "Magnesium"],
    summary: "Sleep is the primary recovery lever — no supplement replaces it. Creatine aids glycogen resynthesis; protein maintains MPS overnight. Magnesium can improve sleep quality.",
    outcome: "Reduce DOMS and readiness time between sessions",
    tags: ["DOMS", "Sleep", "Post-Workout"],
    accent: "#0A4F3B",
    priority: "Common",
  },
  {
    slug: "energy-and-focus",
    title: "Boost",
    titleItalic: "Energy & Focus",
    figure: "GOL-006",
    category: "Cognitive Performance",
    difficulty: "Beginner",
    supplementCount: 3,
    topIngredients: ["Caffeine", "L-Theanine", "Ashwagandha"],
    summary: "Caffeine + L-theanine is the most evidence-supported stack for sustained focus without the jittery edge. Ashwagandha reduces cortisol chronically — useful for high-stress training blocks.",
    outcome: "Sustained mental clarity during training and work",
    tags: ["Focus", "Energy", "Pre-Workout"],
    accent: "#0F7A5A",
    priority: "Common",
  },
  {
    slug: "sleep-and-stress",
    title: "Improve",
    titleItalic: "Sleep & Stress",
    figure: "GOL-007",
    category: "Wellness",
    difficulty: "Beginner",
    supplementCount: 3,
    topIngredients: ["Ashwagandha", "Magnesium Glycinate", "L-Theanine"],
    summary: "Ashwagandha (KSM-66) has the strongest evidence for cortisol reduction and stress perception. Magnesium glycinate is the best-absorbed form for sleep latency improvement.",
    outcome: "Lower cortisol, reduce sleep latency, improve recovery",
    tags: ["Stress", "Sleep", "Adaptogens"],
    accent: "#3A7D9B",
    priority: "Specialist",
  },
  {
    slug: "general-health",
    title: "Maintain",
    titleItalic: "General Health",
    figure: "GOL-008",
    category: "Wellness",
    difficulty: "Beginner",
    supplementCount: 3,
    topIngredients: ["Vitamin D3", "Omega-3", "Magnesium"],
    summary: "Most people in USA are Vitamin D deficient. Omega-3 covers the typical dietary shortfall in DHA/EPA. These three are the most broadly evidence-supported baseline supplements.",
    outcome: "Fill common nutritional gaps with strong safety profiles",
    tags: ["Daily Use", "Immunity", "Longevity"],
    accent: "#0F7A5A",
    priority: "Specialist",
  },
  {
    slug: "longevity",
    title: "Supplements for",
    titleItalic: "Longevity",
    figure: "GOL-009",
    category: "Wellness",
    difficulty: "Intermediate",
    supplementCount: 5,
    topIngredients: ["Omega-3 (EPA+DHA)", "Vitamin D3", "Magnesium", "Creatine", "CoQ10"],
    summary: "No supplement extends human lifespan in a randomised trial. The evidence is observational: omega-3, vitamin D, and magnesium sufficiency correlate with lower all-cause mortality across large cohorts.",
    outcome: "Correct deficiency gaps linked to aging biomarkers",
    tags: ["Longevity", "Anti-Aging", "Healthspan"],
    accent: "#3A7D9B",
    priority: "Specialist",
  },
];

const categoryGroups = [
  { label: "Body Composition", categories: ["Body Composition"] },
  { label: "Performance", categories: ["Performance"] },
  { label: "Recovery & Wellness", categories: ["Recovery", "Wellness", "Cognitive Performance"] },
];

const priorityConfig = {
  Foundation: { label: "Foundation Goal", color: "#0A4F3B", bg: "rgba(15,122,90,0.08)", border: "rgba(15,122,90,0.2)" },
  Common:     { label: "Common Goal",     color: "#3F4B43", bg: "rgba(228,232,229,0.5)",  border: "#E4E8E5" },
  Specialist: { label: "Specialist",      color: "#6B7770", bg: "rgba(246,248,246,0.8)",  border: "#E4E8E5" },
};

const difficultyColor = {
  Beginner:     "#0F7A5A",
  Intermediate: "#3A7D9B",
  Advanced:     "#0A4F3B",
};

const stats = [
  { label: "Goal Guides", value: goals.length.toString() },
  { label: "Ingredients Mapped", value: "20+" },
  { label: "Evidence-Graded", value: "All" },
  { label: "Updated", value: "2026" },
];

export default function GoalsHubPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Goals</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#6B7770", textTransform: "uppercase" }}>GOAL GUIDES · {goals.length} PROTOCOLS</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Ingredient-First · Evidence-Based</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.0, marginBottom: 16 }}>
            Supplements by{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>Goal</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            Every guide starts with your outcome and works backwards — listing only ingredients that have evidence at the doses that work. Nothing is included because it sells well.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: "1px solid #E4E8E5", borderRadius: 14, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Jump links */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          {categoryGroups.map((g) => (
            <a
              key={g.label}
              href={`#${g.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              style={{ padding: "5px 14px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "#F6F8F6" }}
            >
              {g.label}
            </a>
          ))}
          {/* Priority legend */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["Foundation", "Common", "Specialist"] as const).map((p) => {
              const cfg = priorityConfig[p];
              return (
                <span key={p} style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", color: cfg.color, backgroundColor: cfg.bg, border: `1px solid ${cfg.border}`, textTransform: "uppercase" }}>
                  {cfg.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Goal groups */}
        {categoryGroups.map((group) => {
          const groupGoals = goals.filter(g => group.categories.includes(g.category));
          if (groupGoals.length === 0) return null;
          const anchorId = group.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section key={group.label} id={anchorId} style={{ marginBottom: 56 }}>
              <SectionHeading label={group.label} figure="§" title={group.label.split(" ")[0]} titleItalic={group.label.split(" ").slice(1).join(" ")} size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
                {groupGoals.map((goal) => {
                  const pCfg = priorityConfig[goal.priority];
                  return (
                    <Link
                      key={goal.slug}
                      href={`/goals/${goal.slug}`}
                      className="hub-card"
                      style={{ display: "flex", flexDirection: "column", border: "1px solid #E4E8E5", borderRadius: 16, overflow: "hidden", textDecoration: "none", backgroundColor: "#FFFFFF" }}
                    >
                      {/* Accent strip */}
                      <div style={{ height: 4, backgroundColor: goal.accent }} />

                      <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                        {/* Meta row */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#6B7770", textTransform: "uppercase" }}>{goal.figure}</span>
                          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: pCfg.color, backgroundColor: pCfg.bg, border: `1px solid ${pCfg.border}`, textTransform: "uppercase" }}>{pCfg.label}</span>
                          <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", color: difficultyColor[goal.difficulty], backgroundColor: `${difficultyColor[goal.difficulty]}12`, border: `1px solid ${difficultyColor[goal.difficulty]}30`, textTransform: "uppercase" }}>{goal.difficulty}</span>
                        </div>

                        {/* Title */}
                        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: 0, lineHeight: 1.15 }}>
                          {goal.title}{" "}
                          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>{goal.titleItalic}</em>
                        </h2>

                        {/* Outcome pill */}
                        <div style={{ padding: "8px 12px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 2 }}>Outcome</p>
                          <p style={{ fontSize: 12, color: "#17211C", margin: 0, fontWeight: 500 }}>{goal.outcome}</p>
                        </div>

                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{goal.summary}</p>

                        {/* Top ingredients */}
                        <div>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Key Ingredients</p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                            {goal.topIngredients.map((ing, i) => (
                              <span key={ing} style={{ padding: "3px 8px", backgroundColor: i === 0 ? "rgba(15,122,90,0.08)" : "#F6F8F6", border: `1px solid ${i === 0 ? "rgba(15,122,90,0.2)" : "#E4E8E5"}`, borderRadius: 4, fontSize: 10, color: i === 0 ? "#0F7A5A" : "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em" }}>
                                {i === 0 ? "★ " : ""}{ing}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E4E8E5", paddingTop: 12 }}>
                          <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{goal.supplementCount} supplements ranked</p>
                          <span style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View Guide →</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Disclaimer */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, borderLeft: "3px solid #0F7A5A" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#6B7770", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Note</span>
            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
              These guides suggest supplements based on evidence strength — they do not constitute medical advice. Doses referenced are from peer-reviewed human trials. Consult a qualified practitioner before starting any supplementation protocol.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our medical disclaimer →</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
