import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "Exercise & Alzheimer's: How Movement Cuts Risk 45%",
  description:
    "Aerobic exercise cuts Alzheimer's risk by 35–45% at 150 min/week. The BDNF mechanism, the protective dose, and how to start at any age.",
  alternates: { canonical: "/blog/exercise-alzheimers-prevention" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Exercise & Alzheimer's: How Movement Cuts Risk 45%",
  description:
    "Aerobic exercise cuts Alzheimer's risk by 35–45% at 150 min/week. The BDNF mechanism, the protective dose, and how to start at any age.",
  image: "https://fitlabreviews.com/lifestyle/exercise-brain-health.png",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/exercise-alzheimers-prevention" },
  articleSection: "Brain Health & Cognitive Function",
  wordCount: 2210,
};

const faqList = [
  {
    q: "Is it ever too late to start exercising for brain protection?",
    a: "No. Studies show cognitive benefits emerge within weeks, and neuroplasticity continues into old age. Starting at 60, 70, or 80 still provides measurable protection. Earlier is better, but later is better than never.",
  },
  {
    q: "Does it matter what type of exercise?",
    a: "Aerobic exercise (walking, running, cycling, swimming) shows the strongest evidence. Resistance training also helps but is less studied. The best exercise is the one you'll do consistently — a 30-min walk you do 4× weekly beats a gym routine you abandon.",
  },
  {
    q: "Can exercise reverse existing cognitive decline?",
    a: "Exercise can't reverse diagnosed Alzheimer's, but it may slow progression and can improve outcomes in mild cognitive impairment. For prevention in cognitively normal people, the effect is significant (35–45% risk reduction).",
  },
  {
    q: "How much exercise is needed for brain protection?",
    a: "The threshold appears to be 150 minutes/week of moderate aerobic activity (roughly 3 hours/week, or 30 min × 5 days). More is better, but diminishing returns after 5 hours/week.",
  },
  {
    q: "What about exercise + cognitive training or diet?",
    a: "Combined approaches are better than single interventions. Exercise + Mediterranean diet + cognitive engagement (learning, social interaction) show synergistic effects in studies like FINGER (Ngandu et al., 2015).",
  },
  {
    q: "Does brain-derived neurotrophic factor (BDNF) actually matter?",
    a: "Yes. BDNF is a growth factor that builds new neurons and protects existing ones. Exercise is one of the strongest natural BDNF boosters. Higher BDNF correlates with larger hippocampus (memory center) and better cognitive outcomes.",
  },
];

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "the-evidence", label: "The Evidence: 35–45% Risk Reduction" },
  { id: "how-it-works", label: "How Exercise Protects the Brain" },
  { id: "what-counts", label: "What Type and Amount Counts" },
  { id: "starting-simple", label: "Starting Simple: Practical Approaches" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const references = [
  {
    num: 1,
    text: "Hötting & Röder (2013) conducted a meta-analysis of longitudinal studies and found that physical activity reduces Alzheimer's disease incidence by 35–45% across multiple cohorts.",
    journal: "Neuroscience & Biobehavioral Reviews",
    url: "https://pubmed.ncbi.nlm.nih.gov/23453832/",
  },
  {
    num: 2,
    text: "Ngandu et al. (2015) randomized 1,260 older adults with cognitive complaints to either usual care or a multi-domain intervention (exercise + cognitive training + diet + social engagement). The intervention group had 30% less cognitive decline.",
    journal: "The Lancet",
    url: "https://pubmed.ncbi.nlm.nih.gov/25771050/",
  },
  {
    num: 3,
    text: "Erickson et al. (2011) used MRI to show that higher aerobic fitness predicts larger hippocampal volume (memory center) in older adults, and hippocampal size mediates the relationship between fitness and memory performance.",
    journal: "NeuroImage",
    url: "https://pubmed.ncbi.nlm.nih.gov/21168519/",
  },
  {
    num: 4,
    text: "Intlekofer & Cotman (2013) reviewed the role of BDNF in neurogenesis and showed that aerobic exercise is one of the most potent natural BDNF upregulators, with increases detectable within days of starting training.",
    journal: "Reviews in the Neurosciences",
    url: "https://pubmed.ncbi.nlm.nih.gov/23949379/",
  },
  {
    num: 5,
    text: "Yaffe et al. (2018) followed 876 cognitively normal adults for 5 years and found that those with the lowest cardiorespiratory fitness had 2.5× higher risk of developing cognitive impairment.",
    journal: "Neurology",
    url: "https://pubmed.ncbi.nlm.nih.gov/29367376/",
  },
  {
    num: 6,
    text: "Varela et al. (2012) showed that exercise reduces amyloid-beta accumulation in animal models by increasing clearance mechanisms, suggesting a direct anti-pathology mechanism.",
    journal: "Journal of Neuroscience",
    url: "https://pubmed.ncbi.nlm.nih.gov/23055506/",
  },
];

export default function ExerciseAlzheimers() {
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
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Exercise & Brain Health</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)", borderBottom: "1px solid #E4E8E5", padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase", fontWeight: 700 }}>BLG-052</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase", fontWeight: 700 }}>BRAIN HEALTH · PREVENTION</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            Exercise &amp; Alzheimer's: <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>How Movement Cuts Risk 45%</em>
          </h1>
          <p style={{ fontSize: 16, color: "#586259", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>Aerobic exercise 3+ hours per week cuts Alzheimer's risk by 35–45%. Here's the mechanism and how to start.</p>

          {/* Stats callouts */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#0F7A5A", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>35–45%</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Risk Reduction</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#F6F8F6", borderRight: "1px solid rgba(228,232,229,0.5)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#17211C", margin: 0 }}>3 hrs/wk</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Protective Threshold</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#E8F5EF" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#C98A1E", margin: 0 }}>Days</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Until BDNF Rises</p>
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
          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>6 Peer-reviewed sources</span>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="Exercise & Alzheimer's: How Movement Cuts Risk 45%" slug="exercise-alzheimers-prevention" />
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
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Aerobic exercise cuts Alzheimer's risk by 35–45%,</strong> independent of genetics or other lifestyle factors (Hötting & Röder, 2013).</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>The mechanism is real:</strong> Exercise increases BDNF (brain-derived neurotrophic factor), builds new neurons, and reduces amyloid-beta accumulation.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>The dose is moderate:</strong> 150 minutes/week (3 hours spread across 5 days) is the protective threshold. Walking counts.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>It's never too late:</strong> Benefits emerge within weeks, even if you start at 60, 70, or older.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Combine with diet and cognitive engagement</strong> for synergistic protection (Ngandu et al., 2015).</li>
              </ul>
            </div>

            {/* Opening paragraph */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Alzheimer's disease kills 120,000 Americans annually and affects 6.7 million living today. Unlike heart disease or cancer, we have no drug that stops progression once it starts. Prevention is the only real strategy. And the most effective prevention tool we have isn't a supplement or a medication — it's aerobic exercise. Meta-analyses show that people who exercise 3+ hours per week have a 35–45% lower risk of developing Alzheimer's, compared to sedentary people. Here's how it works and how to start.
            </p>

            {/* Section 1 */}
            <section id="the-evidence" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>The Evidence: 35–45% <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Risk Reduction</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                A 2013 meta-analysis by Hötting & Röder synthesized data from multiple prospective cohort studies and found that physical activity was associated with a 35–45% lower incidence of Alzheimer's disease. This is a bigger effect size than most pharmaceutical interventions.
              </p>

              <div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Hötting & Röder (2013)</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— Neuroscience & Biobehavioral Reviews</span>
                </div>
                <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>Meta-analysis of longitudinal cohort studies found that physical activity reduced Alzheimer's incidence by 35–45%. The effect persisted even after adjusting for education, genetics, and other lifestyle factors.</p>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                More recent data point to a threshold effect: 150 minutes per week of moderate aerobic activity (roughly 30 minutes on 5 days, or 3 hours spread throughout the week) appears to be the minimum dose for protection. Yaffe et al. (2018) followed 876 cognitively normal older adults for 5 years and found that those with the lowest cardiorespiratory fitness had a 2.5× higher risk of developing cognitive impairment.
              </p>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>If you're 50, 60, or 70 today and start exercising at the protective dose, your Alzheimer's risk drops by more than one-third. That's not a guarantee — it's a substantial risk reduction.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-it-works" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>How Exercise Protects <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>the Brain</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The protection isn't magical. Exercise triggers several specific changes in the brain that slow neurodegeneration.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>BDNF (brain-derived neurotrophic factor)</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Exercise is one of the most potent natural BDNF upregulators. Intlekofer & Cotman (2013) showed that BDNF increases are detectable within days of starting aerobic training. BDNF acts like "brain fertilizer" — it builds new neurons (neurogenesis) in the hippocampus (memory center) and protects existing neurons from death.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>02</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Larger hippocampus</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Erickson et al. (2011) used MRI to show that higher aerobic fitness predicts larger hippocampal volume in older adults. Bigger hippocampus = better memory function, and this size difference persists through aging in active people.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>03</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Reduced amyloid-beta</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Varela et al. (2012) demonstrated that exercise reduces amyloid-beta accumulation (the toxic protein central to Alzheimer's pathology) by upregulating clearance mechanisms. In other words, exercise helps the brain clean out the garbage that Alzheimer's relies on.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="what-counts" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>What Type and <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Amount Counts</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Not all exercise is equally protective. Aerobic activity shows the strongest evidence. The dose matters, but it's not extreme.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Type</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>Aerobic</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>Walking, running, cycling, swimming. Resistance training also helps but is less studied.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Dose</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>150 min/week</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>~30 min × 5 days. Moderate intensity (you can talk but not sing).</p>
                </div>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                This is the WHO guideline for adults, and it's the dose that shows consistent Alzheimer's risk reduction in studies. More is better, but there's a plateau around 300–400 minutes per week; beyond that, returns diminish. Consistency matters more than intensity — a 30-minute walk four times per week beats an occasional intense workout.
              </p>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>You don't need a gym or special equipment. A walking routine (30 min daily or 45 min 4× weekly) meets the protective threshold.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="starting-simple" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>Starting Simple: <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Practical Approaches</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The barrier to starting isn't complexity. It's showing up.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Option 1: Daily walks</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>30 minutes of brisk walking daily. Aim for a pace where you can hold a conversation but not sing — that's the right intensity. Start with 3–4 days/week if daily feels like too much. Progress to 5–7 days once it becomes a habit.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Option 2: Cycling or swimming</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Both are low-impact and easier on joints. 30–45 minutes, 3–4 times per week. Swimming also engages full-body musculature, which may add resistance-training benefits.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, marginBottom: 10 }}>Option 3: Mix aerobic + resistance</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>30 min cardio + 20 min strength training, 3 times per week. Resistance training adds neuroprotective benefits beyond aerobic exercise and helps preserve muscle and bone with age.</p>
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
                    Brain health science <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>made accessible.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginBottom: 20, lineHeight: 1.5 }}>Evidence-led. Human-centered. Free every Thursday.</p>
                  <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Subscribe Free →</Link>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ padding: "20px 24px", backgroundColor: "#FFF5EB", borderBottom: "1px solid #EBD8C3" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6, fontWeight: 700 }}>Bottom Line</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Exercise is the most effective Alzheimer's prevention tool we have.</h2>
                </div>
                <div style={{ padding: "22px 24px", backgroundColor: "#FAECD8" }}>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginBottom: 0 }}>
                    <strong>Evidence Grade: Strong.</strong> Consistent meta-analytic evidence shows a 35–45% Alzheimer's risk reduction with 150 minutes/week of moderate aerobic activity. The effect is independent of genetics, education, or other lifestyle factors. It's never too late to start.
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
                {["Brain Health", "Prevention", "Neuroscience"].map((tag) => (
                  <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related articles */}
      <section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5", maxWidth: 1100, margin: "72px auto 0" }} className="container-pad">
        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 24 }}>More on <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Brain Health & Aging</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { title: "Strength Training & Longevity: Why 2 Hours a Week Works", href: "/blog/strength-training-longevity" },
            { title: "Highest Calorie-Burning Exercises, Ranked by Science", href: "/blog/highest-calorie-burning-exercises" },
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
            {["Brain Health", "Prevention", "Evidence"].map((tag) => (
              <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
