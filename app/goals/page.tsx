import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

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
    accent: "#C4622D",
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
    accent: "#2D6A4F",
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
    accent: "#D4A96A",
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
    accent: "#7EB8D4",
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
    accent: "#2D6A4F",
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
    accent: "#D4A96A",
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
    accent: "#7EB8D4",
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
    summary: "Most people in India are Vitamin D deficient. Omega-3 covers the typical dietary shortfall in DHA/EPA. These three are the most broadly evidence-supported baseline supplements.",
    outcome: "Fill common nutritional gaps with strong safety profiles",
    tags: ["Daily Use", "Immunity", "Longevity"],
    accent: "#C4622D",
    priority: "Specialist",
  },
];

const categoryGroups = [
  { label: "Body Composition", categories: ["Body Composition"] },
  { label: "Performance", categories: ["Performance"] },
  { label: "Recovery & Wellness", categories: ["Recovery", "Wellness", "Cognitive Performance"] },
];

const priorityConfig = {
  Foundation: { label: "Foundation Goal", color: "#92620A", bg: "rgba(212,169,106,0.12)", border: "rgba(212,169,106,0.3)" },
  Common:     { label: "Common Goal",     color: "#5C5650", bg: "rgba(212,201,184,0.2)",  border: "rgba(212,201,184,0.5)" },
  Specialist: { label: "Specialist",      color: "#8A8480", bg: "rgba(242,235,217,0.6)",  border: "#D4C9B8" },
};

const difficultyColor = {
  Beginner:     "#1A6B3A",
  Intermediate: "#92620A",
  Advanced:     "#8A4020",
};

const stats = [
  { label: "Goal Guides", value: goals.length.toString() },
  { label: "Ingredients Mapped", value: "20+" },
  { label: "Evidence-Graded", value: "All" },
  { label: "Updated", value: "2026" },
];

export default function GoalsHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Goals</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>GOAL GUIDES · {goals.length} PROTOCOLS</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient-First · Evidence-Based</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Supplements by{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Goal</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            Every guide starts with your outcome and works backwards — listing only ingredients that have evidence at the doses that work. Nothing is included because it sells well.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{s.value}</p>
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
              style={{ padding: "5px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "#F8F2E4" }}
            >
              {g.label}
            </a>
          ))}
          {/* Priority legend */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["Foundation", "Common", "Specialist"] as const).map((p) => {
              const cfg = priorityConfig[p];
              return (
                <span key={p} style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", color: cfg.color, backgroundColor: cfg.bg, border: `1px solid ${cfg.border}`, textTransform: "uppercase" }}>
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
                      style={{ display: "flex", flexDirection: "column", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4" }}
                    >
                      {/* Accent strip */}
                      <div style={{ height: 4, backgroundColor: goal.accent }} />

                      <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                        {/* Meta row */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{goal.figure}</span>
                          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: pCfg.color, backgroundColor: pCfg.bg, border: `1px solid ${pCfg.border}`, textTransform: "uppercase" }}>{pCfg.label}</span>
                          <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", color: difficultyColor[goal.difficulty], backgroundColor: `${difficultyColor[goal.difficulty]}12`, border: `1px solid ${difficultyColor[goal.difficulty]}30`, textTransform: "uppercase" }}>{goal.difficulty}</span>
                        </div>

                        {/* Title */}
                        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.15 }}>
                          {goal.title}{" "}
                          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>{goal.titleItalic}</em>
                        </h2>

                        {/* Outcome pill */}
                        <div style={{ padding: "8px 12px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6 }}>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Outcome</p>
                          <p style={{ fontSize: 12, color: "#1A1714", margin: 0, fontWeight: 500 }}>{goal.outcome}</p>
                        </div>

                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{goal.summary}</p>

                        {/* Top ingredients */}
                        <div>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Key Ingredients</p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                            {goal.topIngredients.map((ing, i) => (
                              <span key={ing} style={{ padding: "3px 8px", backgroundColor: i === 0 ? "rgba(196,98,45,0.08)" : "#EDE8DF", border: `1px solid ${i === 0 ? "rgba(196,98,45,0.2)" : "#D4C9B8"}`, borderRadius: 4, fontSize: 10, color: i === 0 ? "#C4622D" : "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>
                                {i === 0 ? "★ " : ""}{ing}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EDE8DF", paddingTop: 12 }}>
                          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{goal.supplementCount} supplements ranked</p>
                          <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>View Guide →</span>
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
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#A89880", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Note</span>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              These guides suggest supplements based on evidence strength — they do not constitute medical advice. Doses referenced are from peer-reviewed human trials. Consult a qualified practitioner before starting any supplementation protocol.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600 }}>Read our medical disclaimer →</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
