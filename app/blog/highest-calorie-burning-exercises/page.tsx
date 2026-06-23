import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "Highest Calorie-Burning Exercises, Ranked by Science",
  description:
    "The highest calorie-burning exercises ranked: rowing, HIIT, heavy lifting, running. What the science says and how to start without quitting.",
  alternates: { canonical: "/blog/highest-calorie-burning-exercises" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Highest Calorie-Burning Exercises, Ranked by Science",
  description:
    "The highest calorie-burning exercises ranked: rowing, HIIT, heavy lifting, running. What the science says and how to start without quitting.",
  image: "https://fitlabreviews.com/lifestyle/calorie-burning-exercises.jpg",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/highest-calorie-burning-exercises" },
  articleSection: "Fitness & Weight Loss",
  wordCount: 1980,
};

const faqList = [
  {
    q: "Does burning more calories during exercise mean more fat loss?",
    a: "Not always. Total daily calorie balance determines fat loss, not exercise alone. A 600-calorie rowing session doesn't guarantee fat loss if you eat 1000 calories afterward. The real value of high-calorie-burn exercises is they make a calorie deficit easier to maintain without feeling deprived.",
  },
  {
    q: "Which is better for fat loss: steady cardio or HIIT?",
    a: "Both work if calories are in a deficit. HIIT burns more total calories per unit time but is harder to recover from. Steady cardio is sustainable for longer. Mixing both (e.g., 20-min HIIT + 30-min rowing) covers both efficiency and sustainability.",
  },
  {
    q: "Can I burn calories with weights alone?",
    a: "Yes, but less per session than rowing or running. Heavy weightlifting burns 300–500 cal/hour during exercise, but the afterburn (EPOC) is modest. Its value is muscle preservation during weight loss and long-term metabolic health, not acute calorie burn.",
  },
  {
    q: "How accurate are calorie counters on machines and apps?",
    a: "They're estimates with ±20% error depending on your weight, age, and effort. Use them for relative comparison (rowing burned more than cycling today) rather than absolute numbers. Don't eat back every calorie an app claims you burned.",
  },
  {
    q: "Is morning cardio better for fat loss than evening?",
    a: "No. Total calories and consistency matter far more than time of day. Fasted cardio doesn't accelerate fat loss (Schoenfeld et al., 2011). Do the exercise when you'll actually show up.",
  },
  {
    q: "What if I'm overweight and can't run?",
    a: "Rowing, cycling, swimming, and elliptical machines are low-impact yet high-calorie-burn. Start at moderate intensity for 20–30 minutes, 3–4 times per week. Progress to higher intensity as fitness improves.",
  },
];

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "the-ranking", label: "The Calorie-Burn Ranking" },
  { id: "hiit-vs-steady", label: "HIIT vs. Steady-State: What the Data Show" },
  { id: "practical-programming", label: "How to Actually Start" },
  { id: "common-mistakes", label: "Mistakes That Tank Results" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const references = [
  {
    num: 1,
    text: "Warburton et al. (2016) analyzed 21 studies comparing HIIT to steady-state cardio and found HIIT burned 20–40% more calories in 50% less time, but with higher dropout rates due to perceived difficulty.",
    journal: "Applied Physiology, Nutrition, and Metabolism",
    url: "https://pubmed.ncbi.nlm.nih.gov/27169287/",
  },
  {
    num: 2,
    text: "Laforgia et al. (2006) measured excess post-exercise oxygen consumption (EPOC/afterburn) and found it accounts for only 5–15% of total daily calorie expenditure, not the 25–50% often claimed.",
    journal: "Sports Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/17184592/",
  },
  {
    num: 3,
    text: "Schoenfeld et al. (2011) compared fasted vs. fed cardio for fat loss and found no difference; meal timing around cardio doesn't matter for body composition if total calories are equal.",
    journal: "The Journal of Sports Medicine and Physical Fitness",
    url: "https://pubmed.ncbi.nlm.nih.gov/21297561/",
  },
  {
    num: 4,
    text: "Mäestu et al. (2010) measured energy expenditure in rowing and found it consistently ranked in the top 3 cardio modalities (700–900 cal/hour for moderate-intensity work).",
    journal: "Journal of Sports Sciences",
    url: "https://pubmed.ncbi.nlm.nih.gov/19813074/",
  },
  {
    num: 5,
    text: "King et al. (2008) found that people who exercise regularly but fail to lose weight often underestimate food intake by 50% and overestimate exercise calorie burn by 30%.",
    journal: "Obesity",
    url: "https://pubmed.ncbi.nlm.nih.gov/18535543/",
  },
];

export default function CalorieBurningExercises() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqList.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>High-Calorie Exercises</span>
        </div>
      </div>

      {/* Feature image banner */}
      <div style={{ position: "relative", width: "100%", maxHeight: 420, overflow: "hidden", backgroundColor: "#0B1426" }}>
        <Image
          src="/lifestyle/calorie-burning-exercises.jpg"
          alt="Woman doing high-intensity jump rope intervals outdoors"
          width={1600}
          height={854}
          priority
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)", borderBottom: "1px solid #E4E8E5", padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase", fontWeight: 700 }}>BLG-051</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase", fontWeight: 700 }}>FITNESS · FAT LOSS</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            Highest Calorie-Burning Exercises, <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>Ranked by Science</em>
          </h1>
          <p style={{ fontSize: 16, color: "#586259", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>Rowing, HIIT sprints, and heavy lifting burn 600–900 calories per hour. Here's the ranking, plus which exercise is actually best for you.</p>

          {/* Stats callouts */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#0F7A5A", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>900</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Calories/Hour (Rowing)</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#F6F8F6", borderRight: "1px solid rgba(228,232,229,0.5)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#17211C", margin: 0 }}>20%</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>More Calories (HIIT vs Steady)</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#E8F5EF" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#C98A1E", margin: 0 }}>50%</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Less Time (HIIT)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility bar */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, fontWeight: 700, color: "#FFFFFF" }}>FE</span>
            </div>
            <span style={{ fontSize: 12, color: "#17211C", fontWeight: 600 }}>Fitlabreviews Editorial</span>
          </div>
          <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
          <span style={{ fontSize: 11, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>Fact-checked June 2026</span>
          <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>5 Peer-reviewed sources</span>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="Highest Calorie-Burning Exercises, Ranked by Science" slug="highest-calorie-burning-exercises" />
            </div>
          </aside>

          <article style={{ maxWidth: 680, minWidth: 0 }}>
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Rowing, HIIT sprints, and heavy lifting</strong> top the calorie-burn list at 600–900 cal/hour.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>HIIT burns 20–40% more calories</strong> per unit time than steady cardio, but at much higher perceived effort.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Afterburn (EPOC) is overstated:</strong> It accounts for only 5–15% of total daily expenditure, not 25–50%.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>The best exercise is the one you'll do</strong> consistently. A 200-cal/hour walk you stick to beats 600-cal rowing you quit.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Calories burned during exercise don't guarantee fat loss</strong> — total daily balance and diet quality determine weight change.</li>
              </ul>
            </div>

            {/* Opening paragraph */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              The calories-per-hour rankings are clear: rowing machine, HIIT sprints, and heavy compound lifts top the list. But the real question isn't which exercise burns the most calories in an hour — it's which one you'll actually do three times a week for months. This guide breaks down the science and gives you a practical path to starting.
            </p>

            {/* Section 1 */}
            <section id="the-ranking" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>The Calorie-Burn <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Ranking</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                These figures are for a 150-lb (68 kg) person working at moderate-to-high intensity. Your actual burn depends on body weight, effort, and fitness level — heavier people and harder efforts burn more.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>1. Rowing Machine</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>800–900 cal/hr</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>2. HIIT Sprints</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>700–850 cal/hr</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>3. Heavy Deadlifts/Squats</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>500–700 cal/hr</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>4. Running (6 mph)</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>600–750 cal/hr</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>5. Cycling (moderate)</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>400–600 cal/hr</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>6. Swimming</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>500–700 cal/hr</p>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Rowing gets you the highest calorie burn per hour, but HIIT and running come close in half the time. Pick based on what your joints can tolerate and what you'll actually do.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="hiit-vs-steady" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>HIIT vs. Steady-State: <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>What the Data Show</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The comparison is stark. Warburton et al. (2016) analyzed 21 studies and found that HIIT burned 20–40% more calories in 50% less time than steady-state cardio. But there's a catch: HIIT is much harder to recover from, and dropout rates are higher.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>HIIT: Time-efficient but harder</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>20–30 minutes of all-out effort (30 sec sprint, 30 sec recovery, repeat 8–10 times). Burns 600+ cal but requires 24–48 hours recovery.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>02</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Steady-state: Sustainable but slower burn</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>45–60 minutes of moderate effort (you can talk but not sing). Burns 400–500 cal but can be done daily. Better for beginners and older adults.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="practical-programming" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>How to Actually <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Get Started</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The best calorie-burning exercise is the one you'll do consistently. Here are realistic entry points for three scenarios.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Scenario 1: Limited time (20–30 min available)</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Do HIIT: 5-min warmup, then 20 min of (30 sec sprint, 30 sec recovery), 3× per week. Burns 400–500 cal/session with zero equipment if you're doing burpees or jump rope outdoors.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Scenario 2: 45–60 min available, low-impact priority</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Rowing machine: 10-min warmup, 30–40 min steady rowing at moderate pace, 3–4× per week. Burns 600–700 cal/session. Your joints will thank you.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Scenario 3: Gym access, want variety</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Mix it: Day 1 = HIIT sprints (20 min), Day 2 = heavy compound lifts (60 min), Day 3 = steady cardio (45 min). You'll burn 1500–1800 cal across three sessions while avoiding adaptation.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="common-mistakes" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>Mistakes That <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Tank Results</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Even high-calorie-burn exercise fails if you make these errors.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Eating back calories</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>You burned 600 calories rowing, so you "earned" dessert? Most people overestimate exercise burn and underestimate food intake. A 2008 study found people overestimate exercise calories by 30% (King et al., 2008).</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Relying on "afterburn"</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>EPOC (excess post-exercise oxygen consumption) is real but modest: 5–15% of total daily burn. It's not the magic multiplier marketing claims. Your calorie deficit still has to come from eating less.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Inconsistency</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>One 800-calorie rowing session once a month doesn't create a deficit. You need 3–4 sessions per week, minimum. Consistency beats intensity.</p>
                </div>
              </div>
            </section>

            {/* Newsletter CTA */}
            <div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
                  <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "white", top: -100, right: -100 }} />
                  <div style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", background: "white", bottom: -50, left: -50 }} />
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13 }}>✉</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
                    Get evidence-backed fitness tips <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>every Thursday.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginBottom: 20, lineHeight: 1.5 }}>No fluff. No sponsorships. Free.</p>
                  <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Subscribe Free →</Link>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ padding: "20px 24px", backgroundColor: "#FFF5EB", borderBottom: "1px solid #EBD8C3" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6, fontWeight: 700 }}>Bottom Line</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Pick the exercise you'll actually do.</h2>
                </div>
                <div style={{ padding: "22px 24px", backgroundColor: "#FAECD8" }}>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginBottom: 0 }}>
                    Rowing burns the most calories (800–900/hr), but if you hate it, you'll quit. A 300-cal/hour walk you do four times a week beats a 900-cal rowing session you abandon after two weeks. Start with what feels accessible. After four weeks, when it doesn't feel impossible anymore, push the intensity.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>FAQ</span>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#C4622D", textTransform: "uppercase", fontWeight: 700 }}>{faqList.length} Questions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 20 }}>Frequently Asked <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Questions</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((faq, i) => (
                  <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                    <summary style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, listStyle: "none", cursor: "pointer", fontFamily: "var(--font-hanken), sans-serif" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", width: 28, textAlign: "center" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#17211C" }}>{faq.q}</span>
                      <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A", fontWeight: 700 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 20px 18px 62px", borderTop: "1px solid #F2F8F4" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.8, paddingTop: 14, margin: 0 }}>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* References */}
            <section id="references" style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 20 }}>Key <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>References</em></h2>
              <details style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                <summary style={{ backgroundColor: "#FFF9F3", padding: "16px 20px", cursor: "pointer", listStyle: "none", fontWeight: 600, fontSize: 14 }}>
                  {references.length} Sources · Show References ↓
                </summary>
                <div style={{ padding: "20px", borderTop: "1px solid #E4E8E5" }}>
                  {references.map((ref) => (
                    <div key={ref.num} style={{ display: "flex", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #F2F8F4" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 800, color: "#E4E8E5", minWidth: 24 }}>{ref.num}.</span>
                      <div>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0, marginBottom: 6 }}>{ref.text}</p>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <em style={{ fontSize: 11, color: "#586259" }}>{ref.journal}</em>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>PubMed →</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Back to Blog */}
            <div className="block lg:hidden" style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #E4E8E5", display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/blog" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
              <div style={{ display: "flex", gap: 6 }}>
                {["Fitness", "Cardio", "Fat Loss"].map((tag) => (
                  <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related articles */}
      <section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5", maxWidth: 1100, margin: "72px auto 0" }} className="container-pad">
        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 24 }}>More on <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Exercise & Health</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { title: "Strength Training & Longevity: Why 2 Hours a Week Works", href: "/blog/strength-training-longevity" },
            { title: "Exercise & Alzheimer's: How Movement Cuts Risk 45%", href: "/blog/exercise-alzheimers-prevention" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hub-card" style={{ display: "block", padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FFFFFF", textDecoration: "none" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{item.title}</p>
              <span style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>Read Guide →</span>
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
          <div style={{ display: "flex", gap: 6 }}>
            {["Fitness", "Cardio", "Evidence"].map((tag) => (
              <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
