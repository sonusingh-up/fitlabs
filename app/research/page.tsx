import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Supplement Research & Science Articles",
  description: "Evidence-graded research articles on supplement science, longevity, GLP-1 medications, sleep biology, and clinical trial breakdowns. Every claim is linked to named peer-reviewed studies.",
  alternates: { canonical: "/research" },
};

type ResearchArticle = {
  slug: string;
  title: string;
  titleItalic: string;
  figure: string;
  topic: string;
  readTime: string;
  publishedAt: string;
  summary: string;
  evidence: "strong" | "moderate" | "limited";
  tags: string[];
  accent: string;
};

const articles: ResearchArticle[] = [
  {
    slug: "creatine-brain-health",
    title: "Creatine for Brain Health:",
    titleItalic: "Cognition, Memory & Mental Energy",
    figure: "ART-010",
    topic: "Brain & Cognitive Health",
    readTime: "14 min",
    publishedAt: "May 2026",
    summary: "Multiple RCTs show creatine improves working memory (effect size g = 0.34 in a 2023 meta-analysis of 10 trials, rising to g = 0.54 in adults over 65). Effects are strongest in vegetarians, older adults, and sleep-deprived individuals — populations with chronically low brain phosphocreatine.",
    evidence: "strong",
    tags: ["Creatine", "Cognition", "Working Memory", "Mental Fatigue", "Vegetarians"],
    accent: "#5B7FBD",
  },
  {
    slug: "sleep-duration-biological-aging",
    title: "Sleep Duration and Biological Aging:",
    titleItalic: "Why 6.4–7.8 Hours May Be the Sweet Spot",
    figure: "ART-007",
    topic: "Longevity & Sleep",
    readTime: "13 min",
    publishedAt: "May 2026",
    summary: "Data from over 1.1 million adults links 6.4–7.8 hours of sleep to the slowest biological aging. We examine five mechanisms — growth hormone release, glymphatic clearance, telomere length, inflammation, and cortisol — and what they mean in practice.",
    evidence: "strong",
    tags: ["Sleep", "Biological Aging", "Telomeres", "Longevity"],
    accent: "#1A6B3A",
  },
  {
    slug: "glp1-beyond-weight-loss",
    title: "GLP-1 Medications Beyond Weight Loss:",
    titleItalic: "Heart, Brain, Blood Pressure & More",
    figure: "ART-008",
    topic: "GLP-1 & Medications",
    readTime: "15 min",
    publishedAt: "May 2026",
    summary: "The SELECT trial showed a 20% cardiovascular event reduction. The FLOW trial was stopped early for a 24% kidney failure benefit. GLP-1 agonists also reduce blood pressure, show migraine promise via CGRP modulation, and are being investigated for depression and alcohol use disorder.",
    evidence: "strong",
    tags: ["GLP-1", "Semaglutide", "Cardiovascular", "Kidney Health", "Mental Health"],
    accent: "#C4622D",
  },
  {
    slug: "microdose-glp1",
    title: "Microdose GLP-1 Telehealth:",
    titleItalic: "Does It Work?",
    figure: "ART-009",
    topic: "GLP-1 & Medications",
    readTime: "11 min",
    publishedAt: "May 2026",
    summary: "Microdosing semaglutide or tirzepatide at sub-therapeutic doses is gaining traction among telehealth providers as a lower-side-effect alternative. We review the evidence base, dose thresholds, and what the studies actually show about efficacy at reduced doses.",
    evidence: "moderate",
    tags: ["GLP-1", "Microdosing", "Telehealth", "Semaglutide"],
    accent: "#7EB8D4",
  },
  {
    slug: "creatine-loading-guide",
    title: "The Complete Guide to",
    titleItalic: "Creatine Loading",
    figure: "ART-001",
    topic: "Ingredient Science",
    readTime: "12 min",
    publishedAt: "April 2026",
    summary: "Creatine loading saturates muscle phosphocreatine stores in 5–7 days rather than 3–4 weeks. We break down the evidence for loading vs. maintenance-only dosing, optimal timing, and whether HCl offers any real advantage.",
    evidence: "strong",
    tags: ["Creatine", "Loading Protocol", "Strength"],
    accent: "#2D6A4F",
  },
  {
    slug: "wpi-vs-wpc-protein",
    title: "WPI vs WPC Protein:",
    titleItalic: "What the Evidence Actually Shows",
    figure: "ART-013",
    topic: "Comparative Analysis",
    readTime: "12 min",
    publishedAt: "June 2026",
    summary: "Morton et al. (2018) meta-analysis of 49 RCTs found total protein dose — not processing method — determines lean mass gains. WPI wins on lactose (under 1g vs 4–5g per serving) and caloric efficiency. WPC wins on cost (35% cheaper per gram). Evidence-based decision framework for both.",
    evidence: "strong" as const,
    tags: ["Whey Protein", "WPI", "WPC", "Lactose", "Protein Purity", "Cost Analysis"],
    accent: "#2D6A4F",
  },
  {
    slug: "whey-vs-plant-protein",
    title: "Whey vs. Plant Protein",
    titleItalic: "A head-to-head analysis",
    figure: "ART-002",
    topic: "Comparative Analysis",
    readTime: "9 min",
    publishedAt: "March 2026",
    summary: "Both can support muscle protein synthesis when leucine thresholds are met. We compare digestibility, amino acid profiles, and real-world study outcomes — not marketing claims.",
    evidence: "strong",
    tags: ["Protein", "Plant-Based", "MPS"],
    accent: "#C4622D",
  },
  {
    slug: "caffeine-tolerance-reset",
    title: "Caffeine Tolerance",
    titleItalic: "How to reset and cycle effectively",
    figure: "ART-003",
    topic: "Stimulant Science",
    readTime: "7 min",
    publishedAt: "February 2026",
    summary: "Chronic caffeine use downregulates adenosine receptors, blunting ergogenic effects. The evidence suggests a 10–14 day abstinence period fully restores sensitivity in most individuals.",
    evidence: "moderate",
    tags: ["Caffeine", "Tolerance", "Pre-Workout"],
    accent: "#D4A96A",
  },
  {
    slug: "beta-alanine-paresthesia",
    title: "Beta-Alanine Tingling",
    titleItalic: "What the science says",
    figure: "ART-004",
    topic: "Ingredient Mechanism",
    readTime: "6 min",
    publishedAt: "January 2026",
    summary: "The tingling (paresthesia) is a benign cutaneous sensory effect caused by beta-alanine's interaction with peripheral sensory receptors. It doesn't indicate efficacy — the real measure is carnosine accumulation.",
    evidence: "strong",
    tags: ["Beta-Alanine", "Endurance", "Mechanism"],
    accent: "#7EB8D4",
  },
  {
    slug: "protein-timing-myth",
    title: "The Protein Timing",
    titleItalic: "Myth vs. reality",
    figure: "ART-005",
    topic: "Nutrition Science",
    readTime: "8 min",
    publishedAt: "December 2025",
    summary: "The 30-minute anabolic window is largely a myth for trained individuals eating adequate total protein. Schoenfeld et al. (2013) showed total daily protein matters far more than precise timing.",
    evidence: "strong",
    tags: ["Protein", "Timing", "Muscle Gain"],
    accent: "#C4622D",
  },
  {
    slug: "ashwagandha-ksm66-vs-sensoril",
    title: "KSM-66 vs Sensoril",
    titleItalic: "Ashwagandha extract comparison",
    figure: "ART-006",
    topic: "Adaptogen Research",
    readTime: "10 min",
    publishedAt: "November 2025",
    summary: "KSM-66 and Sensoril are both standardised ashwagandha extracts but differ in withanolide content and trial protocols. KSM-66 has stronger evidence for testosterone and cortisol endpoints; Sensoril edges it for stress biomarkers.",
    evidence: "moderate",
    tags: ["Ashwagandha", "Adaptogens", "Stress"],
    accent: "#2D6A4F",
  },
  {
    slug: "beef-organ-supplements-safety",
    title: "Are Beef Organ Supplements Safe?",
    titleItalic: "Risks, Contraindications & Safe Use",
    figure: "ART-011",
    topic: "Organ Supplement Science",
    readTime: "13 min",
    publishedAt: "May 2026",
    summary: "Vitamin A toxicity from chronic retinol excess, heavy metal accumulation, hemochromatosis risk in iron-overload patients, and purine load in gout — we examine the four primary safety concerns with beef organ supplements and establish evidence-based safe-use guidelines.",
    evidence: "moderate",
    tags: ["Safety", "Vitamin A Toxicity", "Heavy Metals", "Contraindications", "Organ Supplements"],
    accent: "#8B4513",
  },
  {
    slug: "freeze-dried-vs-desiccated-organ-supplements",
    title: "Freeze-Dried vs. Desiccated Organ Supplements:",
    titleItalic: "Which Processing Method Preserves More Nutrients?",
    figure: "ART-012",
    topic: "Organ Supplement Science",
    readTime: "11 min",
    publishedAt: "May 2026",
    summary: "Freeze-drying (lyophilisation) operates below 0°C under vacuum, preserving heat-labile vitamins and enzymes at the cost of higher manufacturing expense. Traditional desiccation uses low-heat airflow at 37–40°C. We compare nutrient retention, enzyme survival, and cost implications across both methods.",
    evidence: "moderate",
    tags: ["Processing Methods", "Freeze-Dried", "Nutrient Retention", "Organ Supplements", "Enzymes"],
    accent: "#A0522D",
  },
];

const topicGroups = [
  { label: "Brain & Cognitive Health", topics: ["Brain & Cognitive Health"] },
  { label: "Longevity & Sleep", topics: ["Longevity & Sleep"] },
  { label: "GLP-1 & Medications", topics: ["GLP-1 & Medications"] },
  { label: "Ingredient Science", topics: ["Ingredient Science", "Ingredient Mechanism"] },
  { label: "Nutrition & Protocols", topics: ["Nutrition Science", "Comparative Analysis"] },
  { label: "Stimulants & Adaptogens", topics: ["Stimulant Science", "Adaptogen Research"] },
  { label: "Organ Supplement Science", topics: ["Organ Supplement Science"] },
];

const evidenceConfig = {
  strong:   { label: "Strong Evidence",   color: "#1A6B3A", bg: "rgba(26,107,58,0.08)",   border: "rgba(26,107,58,0.2)"   },
  moderate: { label: "Moderate Evidence", color: "#92620A", bg: "rgba(146,98,10,0.08)",   border: "rgba(146,98,10,0.2)"   },
  limited:  { label: "Limited Evidence",  color: "#8A4020", bg: "rgba(138,64,32,0.08)",   border: "rgba(138,64,32,0.2)"   },
};

const stats = [
  { label: "Articles Published", value: articles.length.toString() },
  { label: "Strong Evidence", value: articles.filter(a => a.evidence === "strong").length.toString() },
  { label: "Topics Covered", value: topicGroups.length.toString() },
  { label: "Avg Read Time", value: "10 min" },
];

export default function ResearchHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Research</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>RESEARCH INDEX · {articles.length} ARTICLES</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Evidence-Graded</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Supplement{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Research</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            Deep-dives into clinical trial data, ingredient mechanisms, longevity science, and GLP-1 pharmacology. Every article is evidence-graded — strong, moderate, or limited — based on the quality and consistency of the underlying research.
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

        {/* Topic jump links */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          {topicGroups.map((g) => (
            <a
              key={g.label}
              href={`#${g.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              style={{ padding: "5px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "#F8F2E4" }}
            >
              {g.label}
            </a>
          ))}
          {/* Evidence legend */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["strong", "moderate", "limited"] as const).map((level) => {
              const cfg = evidenceConfig[level];
              return (
                <span key={level} style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", color: cfg.color, backgroundColor: cfg.bg, border: `1px solid ${cfg.border}`, textTransform: "uppercase" }}>
                  {cfg.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Grouped article cards */}
        {topicGroups.map((group) => {
          const groupArticles = articles.filter(a => group.topics.includes(a.topic));
          if (groupArticles.length === 0) return null;
          const anchorId = group.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section key={group.label} id={anchorId} style={{ marginBottom: 56 }}>
              <SectionHeading label={group.label} figure="§" title={group.label.split(" ")[0]} titleItalic={group.label.split(" ").slice(1).join(" ")} size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
                {groupArticles.map((article) => {
                  const evCfg = evidenceConfig[article.evidence];
                  return (
                    <Link
                      key={article.slug}
                      href={`/research/${article.slug}`}
                      className="hub-card"
                      style={{ display: "flex", flexDirection: "column", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4" }}
                    >
                      {/* Accent strip */}
                      <div style={{ height: 4, backgroundColor: article.accent }} />

                      <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                        {/* Meta row */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{article.figure}</span>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#8A8480", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4 }}>{article.topic}</span>
                          <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: evCfg.color, backgroundColor: evCfg.bg, border: `1px solid ${evCfg.border}`, textTransform: "uppercase" }}>{evCfg.label}</span>
                        </div>

                        {/* Title */}
                        <div>
                          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>
                            {article.title}{" "}
                            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>{article.titleItalic}</em>
                          </h2>
                        </div>

                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, flex: 1 }}>{article.summary}</p>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                          {article.tags.map((tag) => (
                            <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{tag}</span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EDE8DF", paddingTop: 12 }}>
                          <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{article.publishedAt} · {article.readTime} read</p>
                          <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Article →</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Editorial note */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "3px solid #C4622D" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>Evidence Grading System</p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#1A6B3A" }}>Strong</strong> — multiple RCTs with consistent outcomes.{" "}
            <strong style={{ color: "#92620A" }}>Moderate</strong> — limited RCTs or mixed results.{" "}
            <strong style={{ color: "#8A4020" }}>Limited</strong> — mostly observational or mechanistic data.{" "}
            All claims are referenced to the primary source.{" "}
            <Link href="/editorial-policy" style={{ color: "#C4622D", fontWeight: 600 }}>Read our editorial policy →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
