import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";
import GoalAuthGate from "@/components/ui/GoalAuthGate";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "How to Build Muscle: Supplements, Training & Diet",
  description:
    "Evidence-based muscle gain guide: 1.6–2.2 g/kg protein, creatine dosing, progressive overload, and the 4 supplements with replicated human trial data.",
  alternates: { canonical: "/goals/muscle-gain" },
};

/* ── JSON-LD ──────────────────────────────────────────────────── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://fitlabreviews.com/goals/muscle-gain#article",
  headline: "How to Build Muscle: Supplements, Training & Diet Guide (2026)",
  description:
    "Evidence-based muscle gain guide covering protein requirements, creatine, progressive overload, recovery, and evidence-graded supplement stacks.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: {
    "@type": "Organization",
    name: "Fitlab Research Team",
    url: "https://fitlabreviews.com/authors",
  },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  url: "https://fitlabreviews.com/goals/muscle-gain",
  mainEntityOfPage: "https://fitlabreviews.com/goals/muscle-gain",
  articleSection: "Fitness Goals",
  wordCount: 4800,
  keywords: [
    "how to build muscle",
    "muscle gain supplements",
    "creatine for muscle",
    "protein for muscle growth",
    "progressive overload",
    "muscle gain diet",
    "best supplements for muscle gain 2026",
  ],
};

const faqList = [
  {
    q: "How much protein do I actually need to build muscle?",
    a: "The most replicated finding across nitrogen-balance and tracer studies is 1.6–2.2 g per kg of bodyweight per day. Morton et al. (2018, British Journal of Sports Medicine) meta-analysed 49 studies and found no additional benefit above 1.62 g/kg/day for lean mass gains — though trained lifters near a plateau may benefit from the upper end of the range. Going above 2.2 g/kg adds nothing measurable and simply increases protein oxidation.",
  },
  {
    q: "Does creatine cause water retention and bloating?",
    a: "Creatine increases intracellular water content in muscle cells — this is a desired effect that improves cellular hydration and contributes to the initial 1–2 kg weight increase in the first 1–2 weeks. It does not cause subcutaneous bloating or puffiness. Powers et al. (2003) measured body water compartments and confirmed the retention is intramuscular, not subcutaneous. The weight gain reflects fuller muscle tissue, not fat or bloat.",
  },
  {
    q: "How long does it take to see visible muscle growth?",
    a: "Measurable hypertrophy (via ultrasound or DEXA) appears after 3–4 weeks of resistance training in untrained individuals. Visible changes that are noticeable in the mirror typically take 8–12 weeks. Trained lifters near their genetic ceiling may need 12–16 weeks to add measurable tissue. Strength gains appear faster than size — 1RM improvements are detectable within 1–2 weeks, primarily driven by neural adaptations.",
  },
  {
    q: "Do I need a calorie surplus to build muscle?",
    a: "For most people, yes. A modest surplus of 200–350 kcal above maintenance is sufficient to maximise muscle protein synthesis without excessive fat gain. Slater et al. (2019, Sports Medicine) estimated that lean mass accrual costs roughly 2,500–3,000 kcal per kg of muscle gained. Novice lifters and those returning from a break can build muscle at maintenance or even in a mild deficit (body recomposition), but the rate is significantly slower.",
  },
  {
    q: "Is whey protein better than plant protein for muscle gain?",
    a: "On a gram-for-gram basis, whey has a higher leucine content (~10–11% vs 6–8% in most plant blends) and faster digestion kinetics, which produces a stronger acute muscle protein synthesis response. However, Hevia-Larraín et al. (2021, Sports Medicine) showed that when total daily protein and leucine are equated, soy protein produced equivalent hypertrophy over 12 weeks. The practical takeaway: whey is more convenient per scoop, but matched plant protein works identically.",
  },
  {
    q: "Should beginners take pre-workout supplements?",
    a: "No. Beginners benefit most from establishing consistent training, sleep, and nutrition habits. Caffeine (the only ingredient in most pre-workouts with strong ergogenic evidence) should be reserved for plateau-breaking or competition scenarios. Starting with stimulants early builds tolerance, which reduces their utility later. After 6–12 months of consistent training, a simple 200 mg caffeine dose (taken 45–60 min pre-training) is the most evidence-supported option.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "why-most-fail", label: "Why Most People Fail" },
  { id: "protein", label: "Protein Requirements" },
  { id: "training", label: "Training Principles" },
  { id: "nutrition", label: "Nutrition Beyond Protein" },
  { id: "supplement-stack", label: "The 4-Supplement Stack" },
  { id: "sleep-recovery", label: "Sleep & Recovery" },
  { id: "timeline", label: "Realistic Timeline" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const supplements: {
  rank: number;
  name: string;
  role: string;
  evidence: EvidenceLevel;
  dose: string;
  timing: string;
  mechanism: string;
  citation: string;
  priority: "Essential" | "Recommended" | "Optional";
}[] = [
  {
    rank: 1,
    name: "Creatine Monohydrate",
    role: "ATP regeneration & cell volumisation",
    evidence: "strong",
    dose: "3–5 g/day (no loading required)",
    timing: "Any time — daily consistency matters, not timing",
    mechanism:
      "Increases phosphocreatine stores in muscle, enabling faster ATP regeneration during high-intensity contractions. Also draws water into muscle cells (cell volumisation), which may upregulate anabolic signalling via mTOR.",
    citation: "Kreider et al., 2017 — Journal of the ISSN (position stand)",
    priority: "Essential",
  },
  {
    rank: 2,
    name: "Whey Protein",
    role: "Hit daily protein targets efficiently",
    evidence: "strong",
    dose: "20–40 g per serving, 1–2 servings/day",
    timing: "Post-workout or any meal where whole-food protein falls short",
    mechanism:
      "Rapidly digested, leucine-rich protein source that maximises the post-exercise muscle protein synthesis (MPS) window. Functions identically to food protein — its advantage is convenience and per-gram cost, not a unique mechanism.",
    citation: "Morton et al., 2018 — British Journal of Sports Medicine",
    priority: "Essential",
  },
  {
    rank: 3,
    name: "Beta-Alanine",
    role: "Buffer lactic acid in high-rep sets",
    evidence: "moderate",
    dose: "3.2–6.4 g/day (split doses to reduce tingling)",
    timing: "Daily — not timing-dependent; takes 4–12 weeks to saturate",
    mechanism:
      "Increases intramuscular carnosine, which buffers hydrogen ions produced during glycolysis. Reduces the burning sensation in sets lasting 60–240 seconds, allowing 1–2 extra reps in the 8–15 rep range.",
    citation: "Hobson et al., 2012 — British Journal of Sports Medicine",
    priority: "Recommended",
  },
  {
    rank: 4,
    name: "Caffeine",
    role: "Reduce perceived exertion & increase power output",
    evidence: "strong",
    dose: "3–6 mg/kg bodyweight (200–400 mg for most adults)",
    timing: "45–60 min pre-workout — avoid after 2 PM to protect sleep",
    mechanism:
      "Adenosine receptor antagonist that reduces perceived exertion and central fatigue. At ergogenic doses, increases maximal voluntary contraction force by 3–5%. The performance benefit is acute, not cumulative — tolerance builds with daily use.",
    citation: "Grgic et al., 2020 — British Journal of Sports Medicine",
    priority: "Optional",
  },
];

const references = [
  { num: 1, text: "Morton RW, Murphy KT, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults.", journal: "Br J Sports Med. 2018;52(6):376-384.", url: "https://pubmed.ncbi.nlm.nih.gov/28698222/" },
  { num: 2, text: "Kreider RB, Kalman DS, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine.", journal: "J Int Soc Sports Nutr. 2017;14:18.", url: "https://pubmed.ncbi.nlm.nih.gov/28615996/" },
  { num: 3, text: "Schoenfeld BJ, Ogborn D, Krieger JW. Dose-response relationship between weekly resistance training volume and increases in muscle mass.", journal: "Med Sci Sports Exerc. 2017;49(5):955-962.", url: "https://pubmed.ncbi.nlm.nih.gov/28085733/" },
  { num: 4, text: "Hobson RM, Saunders B, et al. Effects of β-alanine supplementation on exercise performance: a meta-analysis.", journal: "Amino Acids. 2012;43(1):25-37.", url: "https://pubmed.ncbi.nlm.nih.gov/22270875/" },
  { num: 5, text: "Grgic J, Trexler ET, et al. Wake up and smell the coffee: caffeine supplementation and exercise performance — an umbrella review of 21 published meta-analyses.", journal: "Br J Sports Med. 2020;54(11):681-688.", url: "https://pubmed.ncbi.nlm.nih.gov/30926628/" },
  { num: 6, text: "Schoenfeld BJ, Grgic J, et al. Resistance training recommendations to maximize muscle hypertrophy in an athletic population: position stand of the IUSCA.", journal: "Int J Strength Cond. 2021;1(1).", url: "https://pubmed.ncbi.nlm.nih.gov/37636165/" },
  { num: 7, text: "Slater GJ, Dieter BP, et al. Is an energy surplus required to maximize skeletal muscle hypertrophy associated with resistance training?", journal: "Front Nutr. 2019;6:131.", url: "https://pubmed.ncbi.nlm.nih.gov/31482093/" },
  { num: 8, text: "Dattilo M, Antunes HK, et al. Sleep and muscle recovery: endocrinological and molecular basis for a new and promising hypothesis.", journal: "Med Hypotheses. 2011;77(2):220-222.", url: "https://pubmed.ncbi.nlm.nih.gov/21550729/" },
  { num: 9, text: "Leproult R, Van Cauter E. Effect of 1 week of sleep restriction on testosterone levels in young healthy men.", journal: "JAMA. 2011;305(21):2173-2174.", url: "https://pubmed.ncbi.nlm.nih.gov/21632481/" },
  { num: 10, text: "Hevia-Larraín V, Gualano B, et al. High-protein plant-based diet versus a protein-matched omnivorous diet to support resistance training adaptations.", journal: "Sports Med. 2021;51(6):1317-1330.", url: "https://pubmed.ncbi.nlm.nih.gov/33599941/" },
  { num: 11, text: "Powers ME, Arnold BL, et al. Creatine supplementation increases total body water without altering fluid distribution.", journal: "J Athl Train. 2003;38(1):44-50.", url: "https://pubmed.ncbi.nlm.nih.gov/12937471/" },
  { num: 12, text: "Jäger R, Kerksick CM, et al. International Society of Sports Nutrition position stand: protein and exercise.", journal: "J Int Soc Sports Nutr. 2017;14:20.", url: "https://pubmed.ncbi.nlm.nih.gov/28642676/" },
  { num: 13, text: "Wackerhage H, Schoenfeld BJ, et al. Stimuli and sensors that initiate skeletal muscle hypertrophy following resistance exercise.", journal: "J Appl Physiol. 2019;126(1):30-43.", url: "https://pubmed.ncbi.nlm.nih.gov/30335577/" },
  { num: 14, text: "Schoenfeld BJ, Contreras B, et al. Effects of different volume-equated resistance training loading strategies on muscular adaptations in well-trained men.", journal: "J Strength Cond Res. 2014;28(10):2909-2918.", url: "https://pubmed.ncbi.nlm.nih.gov/24714538/" },
  { num: 15, text: "Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation.", journal: "J Int Soc Sports Nutr. 2014;11:20.", url: "https://pubmed.ncbi.nlm.nih.gov/24864135/" },
  { num: 16, text: "Iraki J, Fitschen P, et al. Nutrition recommendations for bodybuilders in the off-season.", journal: "J Int Soc Sports Nutr. 2019;16(1):39.", url: "https://pubmed.ncbi.nlm.nih.gov/31182142/" },
  { num: 17, text: "Bonilla DA, Pérez-Idárraga A, et al. Creatine enhances the effects of cluster-set resistance training on lower-limb body composition and strength.", journal: "Nutrients. 2021;13(7):2303.", url: "https://pubmed.ncbi.nlm.nih.gov/34209246/" },
  { num: 18, text: "Knowles OE, Drinkwater EJ, et al. Inadequate sleep and muscle strength: implications for resistance training.", journal: "J Sci Med Sport. 2018;21(9):959-968.", url: "https://pubmed.ncbi.nlm.nih.gov/29422383/" },
];

const priorityColors = {
  Essential: { color: "#0F7A5A", bg: "rgba(15,122,90,0.08)", border: "rgba(15,122,90,0.2)" },
  Recommended: { color: "#C98A1E", bg: "rgba(201,138,30,0.08)", border: "rgba(201,138,30,0.2)" },
  Optional: { color: "#586259", bg: "rgba(228,232,229,0.5)", border: "#E4E8E5" },
};

export default function MuscleGainGoalPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/goals" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Goals</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Muscle Gain</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>GOL-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Body Composition · Foundation Goal</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            How to Build Muscle: Supplements, Training{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>&amp; Diet</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, maxWidth: 640, marginBottom: 28 }}>
            Progressive overload and 1.6 g/kg of protein will do 90% of the work. This guide covers the other 10% — the handful of supplements, recovery habits, and training variables that have survived peer review.
          </p>
          {/* Key stat callout */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            {[
              { value: "1.6–2.2 g/kg", label: "daily protein target for hypertrophy", bg: "#0F7A5A", valueColor: "#FFFFFF", labelColor: "rgba(255,255,255,0.75)" },
              { value: "10–20", label: "hard sets per muscle group per week", bg: "#F6F8F6", valueColor: "#1A1714", labelColor: "#586259" },
              { value: "8–16 wk", label: "minimum to measurable lean mass gain", bg: "#E8F5EF", valueColor: "#C98A1E", labelColor: "#586259" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "18px 22px", backgroundColor: stat.bg, flex: 1, minWidth: 140, borderRight: i < 2 ? "1px solid rgba(228,232,229,0.5)" : "none" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: stat.valueColor, margin: 0 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: stat.labelColor, textTransform: "uppercase", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credibility bar */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Link href="/authors/fitlab-research-team" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A 0%, #1A1714 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,122,90,0.2)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>FR</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, lineHeight: 1.2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, marginTop: 2 }}>Editorial &amp; Research</p>
                </div>
              </Link>
              <span style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
              <Link href="/authors/pankaj-singh" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #17211C 0%, #2D3A32 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>PS</span>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, lineHeight: 1 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, marginTop: 2, lineHeight: 1.2 }}>Pankaj Singh, B.&nbsp;Pharm</p>
                </div>
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#17211C", letterSpacing: "0.04em" }}>18 Cited studies</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#F8F6F2", border: "1px solid #E4E8E5" }}>
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#586259" }}>June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          {/* TOC sidebar */}
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="How to Build Muscle: Supplements, Training & Diet (2026)" slug="muscle-gain" />
            </div>
          </aside>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Daily protein intake of <strong>1.6–2.2 g/kg bodyweight</strong> is the single most important nutritional variable — no supplement compensates for falling short.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Creatine monohydrate</strong> (3–5 g/day) is the most evidence-supported muscle-building supplement ever studied — over 500 peer-reviewed papers confirm its efficacy and safety.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Progressive overload</strong> (adding reps, load, or sets over time) is the primary hypertrophy stimulus — 10–20 hard sets per muscle group per week is the evidence-based volume range.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Sleep below <strong>6 hours</strong> reduces testosterone by 10–15% and impairs muscle protein synthesis — no supplement offsets chronic sleep deprivation.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Only <strong>4 supplements</strong> have consistent, replicated evidence for muscle gain: creatine, whey protein, beta-alanine, and caffeine. Everything else is marketing or premature research.</li>
              </ul>
            </div>

            {/* Intro paragraph */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Muscle hypertrophy is a slow, energy-expensive biological process. Your body adds contractile tissue only when it receives a consistent signal — mechanical tension from resistance training — paired with adequate protein, sufficient calories, and time to recover. Supplements sit at the margin of this equation. They cannot create a stimulus that training does not provide, and they cannot compensate for a protein deficit. What they can do, in a small number of well-studied cases, is accelerate <Link href="/goals/recovery" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>recovery</Link>, improve work capacity, and make it easier to hit your daily targets. This guide separates those few cases from the hundreds of products that occupy shelf space without occupying the literature.
            </p>

            <GoalAuthGate>
            {/* § 01 — Why Most People Fail */}
            <section id="why-most-fail" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Reality Check" figure="§ 01" title="Why Most People" titleItalic="fail to gain muscle" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The supplement industry has inverted the priority stack. Most trainees spend 80% of their mental energy on product selection and 20% on the variables that actually determine outcomes. The evidence is unambiguous about what matters, in order:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  { num: "01", title: "Insufficient training stimulus", desc: "Programme hopping, ego lifting, and avoiding progressive overload. Wackerhage et al. (2019) identified mechanical tension as the primary sensor for hypertrophy — if the load or volume is not increasing over months, the adaptive signal weakens." },
                  { num: "02", title: "Not enough protein", desc: "Consistently eating below 1.6 g/kg/day. Morton et al. (2018) showed that protein supplementation increased lean mass by 0.30 kg over training alone — but only in people who were previously under-eating protein." },
                  { num: "03", title: "No calorie surplus (or an excessive one)", desc: "Building tissue requires energy. A 200–350 kcal surplus is enough. Anything larger accelerates fat gain without meaningfully increasing the rate of muscle protein synthesis (Slater et al., 2019)." },
                  { num: "04", title: "Chronic sleep deprivation", desc: "One week of 5-hour sleep cuts testosterone by 10–15% in young men (Leproult & Van Cauter, 2011, JAMA). Growth hormone — released primarily during slow-wave sleep — is also suppressed. Both hormones are rate-limiting for lean mass accrual." },
                  { num: "05", title: "Supplement distraction", desc: "Spending on BCAAs, testosterone boosters, and proprietary blends before the four basics above are locked in. The irony: creatine — the cheapest and most effective supplement — is often the last one people try." },
                ].map((item) => (
                  <div key={item.num} style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{item.num}</span>
                      <div>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #0F7A5A", borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6, fontWeight: 700 }}>What This Means</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.7, margin: 0 }}>
                  Fix the foundation first. If your protein is below 1.6 g/kg, your training has no progression scheme, or you sleep less than 7 hours — address those before spending a dollar on supplements. The supplement stack in § 05 assumes these basics are already in place.
                </p>
              </div>
            </section>

            {/* § 02 — Protein Requirements */}
            <section id="protein" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Macronutrients" figure="§ 02" title="Protein" titleItalic="requirements" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The protein question is the most studied topic in sports nutrition. After decades of nitrogen-balance studies, stable-isotope tracers, and meta-analyses, the data has converged on a narrow range.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                <div style={{ padding: "20px 22px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 8, fontWeight: 700 }}>The Consensus Range</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#17211C", marginBottom: 6 }}>1.6 – 2.2 g per kg bodyweight per day</p>
                  <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.65, margin: 0 }}>
                    Morton et al.&apos;s 2018 meta-analysis of 49 studies (1,863 participants) identified 1.62 g/kg/day as the point of diminishing returns for lean mass gains. The ISSN position stand (Jäger et al., 2017) extends the upper bound to 2.2 g/kg for athletes in an energy surplus.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                  {[
                    { label: "Beginner lifter, 75 kg", value: "120–165 g/day", note: "Lower end — novel stimulus requires less dietary support" },
                    { label: "Intermediate, 80 kg", value: "128–176 g/day", note: "Mid-range — plateau-breaking requires protein optimisation" },
                    { label: "Advanced, 90 kg (cutting)", value: "180–220 g/day", note: "Upper end — caloric deficit increases proteolysis risk" },
                  ].map((ex) => (
                    <div key={ex.label} style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{ex.label}</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#0F7A5A", margin: 0 }}>{ex.value}</p>
                      <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6 }}>{ex.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>Per-meal distribution</h3>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Spreading protein across 3–5 meals (each containing 0.4–0.55 g/kg) maximises muscle protein synthesis (MPS) across the day. A large bolus at one meal does not compensate for skipping protein at others — MPS has a ceiling per meal, not a daily averaging mechanism. Aiming for 30–50 g of protein per meal is practical for most adults.
              </p>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>Protein source quality</h3>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 0 }}>
                Leucine is the amino acid that directly activates mTOR — the molecular switch for MPS. Animal proteins (<Link href="/ingredients/whey-protein" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>whey</Link>, eggs, beef) contain 8–11% leucine; most plant proteins contain 6–8%. Hevia-Larraín et al. (2021) demonstrated that when total protein and leucine are equated, plant-based diets produce equivalent hypertrophy. The practical difference: you need a slightly larger serving of plant protein to hit the same leucine threshold (~2.5 g per meal). For a deep-dive on whey isolate vs concentrate, see our <Link href="/research/wpi-vs-wpc-protein" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>WPI vs WPC comparison</Link>.
              </p>
            </section>

            {/* § 03 — Training Principles */}
            <section id="training" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Progressive Overload" figure="§ 03" title="Training" titleItalic="principles for hypertrophy" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                No supplement creates a hypertrophy stimulus — that comes from training alone. Mechanical tension (heavy loads moved through a full range of motion, close to or at failure) is the primary driver of muscle growth. Wackerhage et al. (2019) mapped the molecular cascade: stretch-activated mechano-sensors on muscle fibres → mTOR activation → ribosomal biogenesis → muscle protein synthesis. Without this signal, protein and creatine have nothing to amplify.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  {
                    title: "Volume: 10–20 hard sets per muscle per week",
                    body: "Schoenfeld et al. (2017) found a dose-response relationship between weekly set volume and hypertrophy, with diminishing returns above 10 sets and a practical ceiling around 20. \"Hard sets\" means sets taken within 1–3 reps of failure — comfortable sets that end 5 reps short do not count.",
                  },
                  {
                    title: "Intensity: 30–85% 1RM, provided sets are near failure",
                    body: "Schoenfeld et al. (2014) showed that both heavy (3–5 RM) and moderate (8–12 RM) loads produce equivalent hypertrophy when volume is equated and sets are taken to or near failure. Lighter loads (15–30 RM) also work, but require more discomfort per set and more total volume to match.",
                  },
                  {
                    title: "Frequency: 2× per muscle group per week minimum",
                    body: "The IUSCA position stand (Schoenfeld et al., 2021) recommends training each muscle group at least twice per week. Spreading volume across more sessions reduces fatigue per session and allows higher quality sets — 4 sets of chest on Monday and 4 on Thursday outperforms 8 sets in one session for most trainees.",
                  },
                  {
                    title: "Progression: add reps first, then load",
                    body: "Double progression is the simplest evidence-based scheme: perform a target rep range (e.g. 8–12). When you hit the top of the range for all sets, increase the load by 2–5% and reset to the bottom. This guarantees progressive overload without requiring percentage-based programming.",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>{item.title}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #0F7A5A", borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6, fontWeight: 700 }}>What This Means</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.7, margin: 0 }}>
                  Track your sets and weights. If last week you did 3 × 10 at 60 kg on bench press and this week you did 3 × 11 at 60 kg, you progressed. If you did the same thing for a month, you didn&apos;t. The logbook is more important than the supplement shelf.
                </p>
              </div>
            </section>

            {/* § 04 — Nutrition Beyond Protein */}
            <section id="nutrition" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Calorie Balance" figure="§ 04" title="Nutrition" titleItalic="beyond protein" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Protein gets the headlines, but total calorie intake determines whether your body has the energy budget to build new tissue. Slater et al. (2019, Frontiers in Nutrition) estimated that each kilogram of muscle costs approximately 2,500–3,000 kcal in surplus energy above maintenance needs.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Calorie surplus", value: "+200 to +350 kcal/day", note: "Enough to support ~0.25 kg lean mass/month without excessive fat gain" },
                  { label: "Carbohydrates", value: "3–7 g/kg/day", note: "Fuel glycolytic training, replenish glycogen, spare protein from oxidation" },
                  { label: "Dietary fat", value: "0.5–1.5 g/kg/day", note: "Supports hormone production — testosterone drops when fat goes below 15% of calories" },
                  { label: "Hydration", value: "35–45 ml/kg/day", note: "Creatine works via cell volumisation — dehydration blunts this mechanism" },
                ].map((row) => (
                  <div key={row.label} style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{row.label}</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{row.value}</p>
                    <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6 }}>{row.note}</p>
                  </div>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>Body recomposition: the exception</h3>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 0 }}>
                Novice lifters, those returning from a break, and people with higher body fat percentages can build muscle at maintenance or even in a mild deficit — a phenomenon called body recomposition. Helms et al. (2014) documented this in natural bodybuilders during contest prep. The rate is slower (0.1–0.15 kg lean mass/month vs 0.25–0.5 kg in a surplus), but it does happen. The higher your body fat and the less trained you are, the more viable recomp becomes. For lean, trained individuals, a surplus is almost always necessary. See our <Link href="/goals/fat-loss" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>fat loss guide</Link> for cutting-specific protocols.
              </p>
            </section>

            {/* § 05 — The 4-Supplement Stack */}
            <section id="supplement-stack" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Evidence-Graded Stack" figure="§ 05" title="The 4 Supplements" titleItalic="that actually work" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Out of hundreds of ingredients marketed for muscle gain, exactly four have consistent, replicated evidence from human trials in resistance-trained populations. Everything else is either under-dosed, unstudied in humans, or only effective in rodent models at doses that don&apos;t translate. (If you are over 40, see our <Link href="/goals/longevity" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>longevity supplement guide</Link> — creatine and <Link href="/ingredients/omega-3" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>omega-3</Link> serve a dual role.)
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {supplements.map((s) => {
                  const pc = priorityColors[s.priority];
                  return (
                    <div key={s.name} style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                      {/* Header */}
                      <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 700, color: "#0F7A5A" }}>#{s.rank}</span>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#17211C", margin: 0 }}>
                          {s.name === "Whey Protein" ? <Link href="/ingredients/whey-protein" style={{ color: "#17211C", textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>{s.name}</Link>
                            : s.name === "Beta-Alanine" ? <Link href="/ingredients/beta-alanine" style={{ color: "#17211C", textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>{s.name}</Link>
                            : s.name === "Caffeine" ? <Link href="/ingredients/caffeine" style={{ color: "#17211C", textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>{s.name}</Link>
                            : s.name}
                        </p>
                        <span style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: pc.color, backgroundColor: pc.bg, border: `1px solid ${pc.border}`, textTransform: "uppercase" }}>{s.priority}</span>
                          <EvidenceBadge level={s.evidence} />
                        </span>
                      </div>
                      {/* Body */}
                      <div style={{ padding: "18px 20px" }}>
                        <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.7, marginBottom: 14 }}>{s.mechanism}</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginBottom: 14 }}>
                          <div style={{ padding: "10px 14px", backgroundColor: "#F6F8F6", borderRadius: 8, border: "1px solid #E4E8E5" }}>
                            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>Dose</p>
                            <p style={{ fontSize: 12, color: "#17211C", fontWeight: 600, margin: 0 }}>{s.dose}</p>
                          </div>
                          <div style={{ padding: "10px 14px", backgroundColor: "#F6F8F6", borderRadius: 8, border: "1px solid #E4E8E5" }}>
                            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>Timing</p>
                            <p style={{ fontSize: 12, color: "#17211C", fontWeight: 600, margin: 0 }}>{s.timing}</p>
                          </div>
                        </div>
                        <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{s.citation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What NOT to buy */}
              <div style={{ marginTop: 24, padding: "20px 22px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B91C1C", marginBottom: 10, fontWeight: 700 }}>Save Your Money</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    { name: "BCAAs", reason: "Redundant if you eat adequate protein. Whey already contains all three BCAAs in higher doses than any standalone BCAA product." },
                    { name: "Testosterone boosters (Tribulus, D-Aspartic Acid, fenugreek)", reason: "No human study has shown clinically meaningful testosterone elevation from OTC testosterone boosters in healthy young men. Willoughby & Leutholtz (2013) and subsequent replications found no effect on free testosterone." },
                    { name: "HMB (in trained individuals)", reason: "Early studies in untrained populations looked promising, but replicated trials in trained lifters (Rowlands & Thomson, 2009) found no additional benefit beyond adequate protein intake." },
                    { name: "Glutamine for muscle growth", reason: "Plasma glutamine is not depleted by resistance training in fed individuals. Supplementation shows zero additional effect on MPS when protein intake is adequate (Candow et al., 2001)." },
                  ].map((item) => (
                    <div key={item.name} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#B91C1C", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✕</span>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}><strong>{item.name}</strong> — {item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related product reviews */}
              <div style={{ marginTop: 24, padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 10, fontWeight: 700 }}>Related Reviews</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
                    <Link href="/reviews/optimum-nutrition-gold-standard-whey" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>ON Gold Standard Whey review</Link> — the benchmark whey protein for over a decade
                  </p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
                    <Link href="/reviews/transparent-labs-creatine-hmb" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>Transparent Labs Creatine HMB review</Link> — creatine monohydrate with added HMB and bioperine
                  </p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
                    <Link href="/reviews/legion-pulse-pre-workout-review-2026" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>Legion Pulse pre-workout review</Link> — clinically dosed <Link href="/ingredients/caffeine" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>caffeine</Link> + <Link href="/ingredients/beta-alanine" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>beta-alanine</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* § 06 — Sleep & Recovery */}
            <section id="sleep-recovery" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Recovery" figure="§ 06" title="Sleep" titleItalic="& recovery" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Muscle is not built during training — training is the stimulus. The actual tissue remodelling happens during rest, predominantly during <Link href="/goals/sleep-and-stress" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>sleep</Link>. Two hormonal axes underpin this process, and both are exquisitely sensitive to sleep duration and quality. (Our <Link href="/research/sleep-duration-biological-aging" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>research on sleep and biological aging</Link> covers the long-term consequences.)
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  {
                    title: "Growth hormone (GH) pulsatility",
                    desc: "60–70% of daily GH secretion occurs during slow-wave sleep (SWS) in the first 90 minutes of the night (Dattilo et al., 2011). GH stimulates IGF-1 release from the liver, which directly promotes satellite cell activation and muscle protein synthesis. Disrupted SWS — from alcohol, late caffeine, or insufficient total sleep — flattens these pulses.",
                  },
                  {
                    title: "Testosterone suppression from sleep restriction",
                    desc: "Leproult & Van Cauter (2011, JAMA) showed that one week of 5-hour sleep restriction in young healthy men reduced daytime testosterone by 10–15% — equivalent to 10–15 years of ageing. Testosterone is anabolic: lower levels reduce MPS rates and increase cortisol-mediated protein breakdown.",
                  },
                  {
                    title: "Cortisol and catabolism",
                    desc: "Chronic sleep deprivation elevates evening cortisol. Knowles et al. (2018) found that poor sleep quality was independently associated with reduced muscle strength and higher inflammatory markers in resistance-trained adults. Elevated cortisol promotes proteolysis — the breakdown of muscle protein for gluconeogenesis.",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 20px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 8, fontWeight: 700 }}>Sleep Protocol for Muscle Gain</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "7–9 hours of total sleep per night — 7.5 is the practical floor for most trainees",
                    "Fixed wake time (±30 min) — anchors circadian rhythm more effectively than fixed bedtime",
                    "No caffeine within 8 hours of sleep — caffeine’s half-life is 5–6 hours; residual levels reduce SWS depth",
                    "Bedroom temperature 18–19°C (64–66°F) — core body temperature must drop ~1°C for SWS initiation",
                    "Protein before bed: 30–40 g casein or whole-food protein — Res et al. (2012) showed overnight MPS increased by 22%",
                  ].map((tip, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                      <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65, margin: 0 }}>{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
                For a complete sleep optimisation protocol including <Link href="/ingredients/omega-3" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>magnesium</Link> and ashwagandha, see our <Link href="/goals/sleep-and-stress" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>Sleep &amp; Stress goal guide</Link>. Our <Link href="/blog/sleep-window-anti-aging" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(15,122,90,0.3)" }}>sleep window article</Link> covers why 6.4–7.8 hours may be the anti-aging sweet spot.
              </p>
            </section>

            {/* § 07 — Realistic Timeline */}
            <section id="timeline" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Expectations" figure="§ 07" title="Realistic" titleItalic="timeline" size="sm" />
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Supplement marketing promises rapid transformation. The biology tells a different story. Muscle tissue accrues at a rate governed by genetics, training history, hormonal status, and calorie availability. Here is what the literature supports for natural trainees:
              </p>
              <div className="review-table-wrap" style={{ border: "1px solid #E4E8E5", borderRadius: 12, marginBottom: 20 }}>
                <table style={{ borderCollapse: "collapse", minWidth: 500, width: "100%" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#F6F8F6" }}>
                      {["Training Stage", "Experience", "Rate (kg lean mass/month)", "Annual Ceiling"].map((h) => (
                        <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259", borderBottom: "1px solid #E4E8E5", fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Novice", "0–12 months", "0.7–1.0 kg", "~9–12 kg"],
                      ["Intermediate", "1–3 years", "0.3–0.5 kg", "~4–6 kg"],
                      ["Advanced", "3–6 years", "0.1–0.25 kg", "~1.5–3 kg"],
                      ["Elite/near-ceiling", "6+ years", "<0.1 kg", "<1 kg"],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E4E8E5" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "12px 16px", fontSize: 13, color: j === 0 ? "#17211C" : "#3F4B43", fontWeight: j === 0 ? 600 : 400, fontFamily: j === 2 ? "var(--font-newsreader), Georgia, serif" : "inherit" }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.7, marginBottom: 0 }}>
                These figures are derived from the McDonald/Aragon model of natural muscle gain potential, which aligns closely with DEXA-validated studies in collegiate athletes. Women can expect approximately 50–60% of these rates. Creatine supplementation adds 1–2 kg of intramuscular water weight in the first 2 weeks — this is not contractile tissue but is a positive adaptive signal.
              </p>
            </section>

            {/* § 08 — Common Mistakes */}
            <section id="mistakes" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Pitfalls" figure="§ 08" title="Common" titleItalic="mistakes" size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                {[
                  { mistake: "Bulking too aggressively", fix: "A 500+ kcal surplus does not accelerate muscle growth — it accelerates fat gain. Beyond ~350 kcal, excess energy is stored as adipose tissue, not muscle (Iraki et al., 2019)." },
                  { mistake: "Cutting too soon", fix: "Beginners often start a cut after 6–8 weeks of training because they see scale weight increase. That weight includes glycogen, water, and new muscle. Train in a surplus for at least 16–20 weeks before considering a cut." },
                  { mistake: "Avoiding carbs", fix: "Glycogen fuels resistance training. Chronically low-carb diets reduce training intensity, lower IGF-1, and increase cortisol. Unless you have a medical reason, eating 3–5 g/kg/day of carbohydrate supports better training outcomes." },
                  { mistake: "Skipping deload weeks", fix: "Accumulated fatigue masks true strength. A planned deload (50% volume, same intensity) every 4–6 weeks allows connective tissue to recover and often reveals new PRs the following week." },
                  { mistake: "Relying on soreness as a progress indicator", fix: "DOMS (delayed onset muscle soreness) reflects novelty, not stimulus quality. Trained muscles can grow without soreness. Progressive overload in the logbook is the only reliable indicator." },
                  { mistake: "Programme hopping", fix: "Adaptation takes 6–12 weeks. Changing programmes every 3 weeks restarts the neural learning curve without allowing enough time for morphological adaptation (actual muscle growth)." },
                ].map((item) => (
                  <div key={item.mistake} style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6 }}>{item.mistake}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.fix}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* § 09 — Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ padding: "20px 24px", backgroundColor: "#FFF5EB", borderBottom: "1px solid #EBD8C3" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6, fontWeight: 700 }}>Bottom Line</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>The Muscle Gain Hierarchy</h2>
                </div>
                <div style={{ padding: "22px 24px", backgroundColor: "#FAECD8" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { rank: "1st", text: "Train with progressive overload — 10–20 hard sets per muscle per week, mostly in the 6–15 rep range, 2× frequency minimum." },
                      { rank: "2nd", text: "Eat 1.6–2.2 g/kg protein daily, spread across 3–5 meals. Hit a 200–350 kcal surplus if you're lean enough to bulk." },
                      { rank: "3rd", text: "Sleep 7–9 hours with a fixed wake time. Protect slow-wave sleep by avoiding late caffeine and alcohol." },
                      { rank: "4th", text: "Supplement creatine monohydrate (3–5 g/day). Add whey protein if whole-food protein is consistently short." },
                      { rank: "5th", text: "Consider beta-alanine if your training involves high-rep sets in the 1–4 minute effort range. Consider caffeine for hard sessions — but cycle it." },
                    ].map((item) => (
                      <div key={item.rank} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#C98A1E", flexShrink: 0, minWidth: 28 }}>{item.rank}</span>
                        <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginTop: 16, marginBottom: 0, borderTop: "1px solid rgba(201,138,30,0.25)", paddingTop: 16 }}>
                    Everything above is cheaper, safer, and more effective than the next supplement someone is about to sell you. Get the hierarchy right and the margins — where supplements live — will compound over years of training.
                  </p>
                </div>
              </div>
            </section>

            {/* § 10 — FAQ */}
            <section id="faq" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <SectionHeading label="Common Questions" figure="§ 10" title="Frequently" titleItalic="Asked" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((item, i) => (
                  <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                    <summary style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4, listStyle: "none" }}>
                      <span style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 700 }}>+</span>
                      </span>
                      {item.q}
                    </summary>
                    <div style={{ padding: "0 20px 18px 58px" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* § 11 — References */}
            <section id="references">
              <SectionHeading label="Sources" figure="§ 11" title="References" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {references.map((ref) => (
                  <div key={ref.num} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: "1px solid #F2F8F4" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", fontWeight: 600, flexShrink: 0, minWidth: 20, textAlign: "right" }}>{ref.num}.</span>
                    <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>
                      {ref.text}{" "}
                      <em style={{ color: "#586259" }}>{ref.journal}</em>{" "}
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, fontSize: 11, fontFamily: "var(--font-jetbrains), monospace" }}>PubMed →</a>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div style={{ marginTop: 40, padding: "20px 22px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 12, borderLeft: "3px solid #0F7A5A" }}>
              <p style={{ fontSize: 12, color: "#586259", lineHeight: 1.7, margin: 0 }}>
                This guide is for educational purposes and does not constitute medical advice. Dosages referenced are from peer-reviewed human trials — individual needs may vary. Consult a qualified practitioner before starting any supplementation protocol.{" "}
                <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our editorial policy →</Link>
              </p>
            </div>
            </GoalAuthGate>
          </article>
        </div>
      </div>

      {/* Related goal pages — full-width */}
      <div style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }} className="pad-section-sm px-page">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading label="Related Goals" figure="→" title="Continue" titleItalic="exploring" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { slug: "fat-loss", title: "Lose Body Fat", desc: "Calorie deficit + muscle preservation strategies", accent: "#0A4F3B" },
              { slug: "strength", title: "Increase Strength", desc: "Creatine-first stack for 1RM improvements", accent: "#0F7A5A" },
              { slug: "recovery", title: "Speed Up Recovery", desc: "Sleep, magnesium, and glycogen resynthesis", accent: "#0A4F3B" },
              { slug: "energy-and-focus", title: "Boost Energy & Focus", desc: "Caffeine + L-theanine for sustained training intensity", accent: "#3A7D9B" },
            ].map((g) => (
              <Link key={g.slug} href={`/goals/${g.slug}`} className="hub-card" style={{ display: "block", padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FFFFFF", textDecoration: "none", borderTop: `3px solid ${g.accent}` }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{g.title}</p>
                <p style={{ fontSize: 12, color: "#586259", lineHeight: 1.5, marginBottom: 10 }}>{g.desc}</p>
                <span style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
