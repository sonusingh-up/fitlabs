import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";

export const metadata: Metadata = {
  title: "The Perfect Sleep Window: 6.4–7.8 Hours for Anti-Aging",
  description: "Epidemiological and mechanistic evidence shows peak longevity outcomes cluster between 6.4 and 7.8 hours of sleep. Here's what the data actually says — and why 9 hours isn't better.",
  alternates: { canonical: "/blog/sleep-window-anti-aging" },
};

const tocItems = [
  { id: "where-range-comes-from", label: "Where 6.4–7.8 Comes From" },
  { id: "why-more-isnt-better", label: "Why More Isn't Better" },
  { id: "what-happens", label: "What Happens in Those Hours" },
  { id: "anti-aging-mechanisms", label: "The Anti-Aging Mechanisms" },
  { id: "quality-vs-quantity", label: "Quality vs. Quantity" },
  { id: "practical-protocol", label: "Practical Protocol" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function SleepWindowArticle() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Sleep Window & Anti-Aging</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>BLG-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Longevity · Sleep Science</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>for Anti-Aging</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>May 2026</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>11 min read</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
          </div>
          {/* Key stat callout */}
          <div style={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {[
              { value: "~24%", label: "higher mortality with <6h sleep" },
              { value: "~30%", label: "higher mortality with >9h sleep" },
              { value: "7h", label: "mortality nadir in most cohort studies" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "14px 20px", backgroundColor: i === 0 ? "#1A1714" : "#F0E8D5", border: "1px solid #D4C9B8", flex: 1, minWidth: 140 }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: i === 0 ? "#C4622D" : "#1A1714", margin: 0 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: i === 0 ? "#8A8480" : "#A89880", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* TOC */}
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
          </aside>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>

            {/* Mobile TOC — visible below 1024px where the sidebar is hidden */}
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Intro */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Most sleep advice lands somewhere between &ldquo;get 8 hours&rdquo; and &ldquo;sleep is when your body repairs itself.&rdquo; Both statements are true but incomplete. The more useful finding buried in three decades of epidemiological research is this: all-cause mortality doesn&apos;t follow a linear curve with sleep duration. It follows a U-shape — and the bottom of that curve sits between roughly 6.4 and 7.8 hours, depending on the cohort.
            </p>

            {/* Section 1 */}
            <section id="where-range-comes-from" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Where 6.4–7.8 Hours Actually Comes From
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The range isn&apos;t arbitrary. It consolidates findings from several large independent cohort studies that each identified their own mortality nadir:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  {
                    study: "Kripke et al. (2002)",
                    journal: "Archives of General Psychiatry",
                    finding: "In a cohort of over 1.1 million adults followed for 6 years, lowest mortality risk appeared in the 6.5–7.4 hour range. Risk increased incrementally above and below this window.",
                  },
                  {
                    study: "Cappuccio et al. (2010)",
                    journal: "Sleep — Meta-analysis, 1.3M participants",
                    finding: "Short sleep duration (<6h) was associated with a 12% increase in all-cause mortality. Long sleep (>8–9h) was associated with a 30% increase. The optimal zone converged around 7 hours.",
                  },
                  {
                    study: "Xiao et al. (2022)",
                    journal: "PLOS Medicine",
                    finding: "U-shaped association confirmed in a UK Biobank analysis of 500,000 participants. Seven hours of sleep correlated with the lowest risk of mental health disorders, cardiovascular events, and all-cause mortality.",
                  },
                  {
                    study: "Ayas et al. (2003)",
                    journal: "Archives of Internal Medicine",
                    finding: "In 72,000 women from the NHS study, both ≤5h and ≥9h sleep groups showed significantly elevated coronary heart disease risk compared to the 8h reference group — but the 6–7h group was not significantly different from 8h.",
                  },
                ].map((ref) => (
                  <div key={ref.study} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>{ref.study}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— {ref.journal}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{ref.finding}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                None of these studies were designed to identify an exact floor and ceiling — the 6.4–7.8 range reflects the zone where mortality risk, cardiovascular outcomes, and metabolic markers consistently converge at their lowest across multiple independent cohorts. It is not a prescription; it is a pattern.
              </p>
            </section>

            {/* Section 2 */}
            <section id="why-more-isnt-better" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Why More Sleep Isn&apos;t Better
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The elevated mortality risk in long sleepers is one of the most replicated — and least discussed — findings in sleep epidemiology. It demands an explanation, and the honest answer is: it&apos;s complicated.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The most defensible interpretation is that habitual long sleep is often a <em>symptom</em>, not a cause. Depression, chronic illness, and inflammatory disease all increase sleep duration. When studies control for these confounders, the long-sleep mortality signal partially attenuates — but it does not disappear entirely.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                A 2019 meta-analysis by Jike et al. in <em>Sleep Medicine Reviews</em> (14 cohort studies, over 1.7 million participants) found that even after adjusting for comorbidities, sleeping &gt;9 hours was independently associated with a 46% higher all-cause mortality risk. The excess sleep itself — not only the underlying illness — appears to be a contributing variable.
              </p>
              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Mechanistic hypothesis</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  Excess time in bed without proportional deep sleep increases light, fragmented sleep — which is metabolically and cognitively inferior to consolidated shorter sleep. Spending 9 hours in bed achieving only 6 hours of quality sleep may be worse than spending 7 hours in bed with 6.5 hours of quality sleep.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="what-happens" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                What Actually Happens in Those Hours
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Sleep is not a single state. It cycles through four stages roughly every 90 minutes — three non-REM stages of progressively deepening sleep, followed by REM. Each stage is associated with distinct repair and consolidation processes. Shortchanging any one of them has measurable consequences.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                {[
                  { stage: "Stage 1–2 (Light NREM)", role: "Memory consolidation of procedural and motor tasks. Body temperature drops. Heart rate slows." },
                  { stage: "Stage 3 (Slow-Wave Sleep)", role: "Growth hormone secretion — 70–80% of nightly GH release occurs in the first SWS cycle (Van Cauter et al., 2000, JAMA). Primary cellular repair window." },
                  { stage: "REM Sleep", role: "Emotional memory processing, synaptic pruning, and amygdala recalibration. Disruption correlates with anxiety, impaired emotional regulation, and cardiovascular risk." },
                  { stage: "Glymphatic Clearance", role: "The brain&apos;s waste clearance system (glymphatic system) is nearly 10× more active during sleep than waking (Xie et al., 2013, Science). Amyloid-β and tau clearance depend on this window." },
                ].map((item) => (
                  <div key={item.stage} style={{ padding: "16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#1A1714", marginBottom: 6, letterSpacing: "0.04em" }}>{item.stage}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{item.role}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                The critical point: slow-wave sleep (SWS) is front-loaded. The most restorative stage occurs disproportionately in the first half of the night. REM dominates the second half. This is why cutting sleep from 7.5h to 5h does not cost you 33% of each stage — it disproportionately eliminates the REM-heavy final cycles.
              </p>
            </section>

            {/* Section 4 */}
            <section id="anti-aging-mechanisms" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                The Anti-Aging Mechanisms
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The longevity signal from optimal sleep isn&apos;t just epidemiological correlation. There are at least four well-characterised mechanistic pathways linking sleep duration to biological aging rate:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>01</span>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Telomere Length Preservation</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Telomere length — the protective caps on chromosomes that shorten with each cell division — is a direct biomarker of biological aging. Epel et al. (2013, <em>Journal of Aging Research</em>) found that sleep duration of 6–7 hours was associated with longer telomeres in postmenopausal women compared to those sleeping &lt;6 or &gt;7 hours. Short sleep elevates cortisol chronically, and cortisol accelerates telomere attrition via oxidative stress pathways.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>02</span>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Inflammatory Suppression</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Chronic low-grade inflammation — &ldquo;inflammaging&rdquo; — is a primary driver of age-related disease. Sleep restriction studies consistently show elevated IL-6, TNF-α, and CRP after even one week of sleeping under 6 hours per night (Mullington et al., 2009, <em>Progress in Cardiovascular Diseases</em>). These inflammatory markers return to baseline with recovery sleep, but habitual restriction maintains chronically elevated levels.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>03</span>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Growth Hormone Pulse Integrity</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    The largest single daily pulse of growth hormone in adults occurs during the first slow-wave sleep cycle, typically 60–90 minutes after sleep onset (Van Cauter et al., 2000, <em>JAMA</em>). GH drives tissue repair, fat oxidation, lean mass preservation, and immune function. Delaying sleep onset, fragmenting sleep, or consistently under-sleeping blunts this pulse. Its decline is one of the most consistent features of biological aging — and it is substantially modifiable through sleep architecture.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>04</span>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Glymphatic Amyloid Clearance</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
                    Xie et al. (2013, <em>Science</em>) demonstrated that the interstitial space of the brain expands by ~60% during sleep, allowing cerebrospinal fluid to flush metabolic waste — including amyloid-β and tau proteins implicated in neurodegeneration. This glymphatic flush is near-absent during waking. Chronic sleep restriction in mice accelerated amyloid plaque accumulation; in humans, a single night of sleep deprivation measurably increases cerebrospinal amyloid-β levels (Lucey et al., 2017, <em>Brain</em>).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="quality-vs-quantity" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Quality vs. Quantity: Which Matters More?
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Duration is measurable. Quality is harder to quantify, but the evidence strongly suggests it dominates. Ohayon et al. (2004, <em>Sleep Medicine Reviews</em>) documented that subjective sleep quality — not just hours — was more predictive of daytime function, mood, and metabolic outcomes than duration alone.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Practically, quality is determined by three things: sleep continuity (minimal awakenings), sufficient slow-wave sleep architecture, and alignment with circadian timing. A fragmented 8-hour night routinely underperforms a consolidated 6.5-hour night on all biomarkers.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A4020", marginBottom: 8 }}>Destroys Sleep Quality</p>
                  {["Alcohol within 3h of bed — suppresses REM", "Blue light after 9pm — delays melatonin onset by ~90 min", "Inconsistent sleep timing — disrupts circadian anchoring", "Room temperature above 19°C — impairs SWS depth"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #C4622D" }}>{item}</p>
                  ))}
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Improves Sleep Quality</p>
                  {["Consistent wake time — the most powerful circadian anchor", "18–19°C room temperature — optimal for SWS induction", "Magnesium glycinate 200–400mg — modest sleep latency reduction (Abbasi et al., 2012)", "Exercise — increases SWS duration, reduces sleep latency"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #1A6B3A" }}>{item}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="practical-protocol" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Practical Protocol
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The evidence supports aiming for 7 hours of consolidated sleep — not 8, not 6. For most adults, a target of 6.5–7.5 hours covers the full protective range. Individual variation is real; some people genuinely function optimally at 6.2 hours, others at 7.6. The most reliable signal is daytime alertness without caffeine by mid-morning.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { priority: "01", action: "Set a fixed wake time 7 days a week", rationale: "Circadian consistency is the highest-leverage sleep intervention. Irregular wake times fragment sleep architecture across the week." },
                  { priority: "02", action: "Count back 7h from your wake time — that's your sleep target", rationale: "This gives you a consistent bedtime target without obsessing over hours in bed. Time in bed should not significantly exceed target sleep time." },
                  { priority: "03", action: "Keep the bedroom at 18–19°C", rationale: "Core body temperature must fall ~1°C to initiate and sustain slow-wave sleep. This is the single most underrated environmental variable in sleep research." },
                  { priority: "04", action: "No alcohol within 3 hours of sleep", rationale: "Alcohol reliably suppresses REM in the first half of the night, even at low doses (1–2 units). The 'sedative' effect is real; the sleep quality is not." },
                  { priority: "05", action: "Morning light within 30 minutes of waking", rationale: "Outdoor light exposure on the retina sets circadian phase. It determines when melatonin rises that evening. This is more powerful than any supplement." },
                ].map((step) => (
                  <div key={step.priority} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#D4C9B8", alignSelf: "start", paddingTop: 2 }}>{step.priority}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{step.action}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{step.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ padding: "28px 30px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 14, lineHeight: 1.3 }}>
                  Aim for 7 hours of consolidated sleep. The ceiling matters as much as the floor.
                </h3>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 16 }}>
                  The preponderance of evidence from large cohort studies places the longevity-optimal sleep window between 6.4 and 7.8 hours. Sleeping significantly below 6 hours chronically is harmful — but so is spending 9+ hours in bed with fragmented, low-quality sleep. The four mechanisms that explain this — telomere integrity, inflammatory suppression, GH pulsatility, and glymphatic clearance — all operate optimally in a 7-hour window of consolidated, architecturally intact sleep.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8 }}>
                  The most effective intervention available: a fixed wake time, a dark cool room, and zero alcohol in the three hours before bed. No supplement replaces those three.
                </p>
              </div>

              {/* References */}
              <div style={{ marginTop: 32, padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Key References</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "Kripke DF et al. Mortality associated with sleep duration and insomnia. Arch Gen Psychiatry. 2002;59(2):131–136.",
                    "Cappuccio FP et al. Sleep duration and all-cause mortality. Sleep. 2010;33(5):585–592.",
                    "Xiao Q et al. Actigraphy-measured sleep characteristics and risk of dementia. PLOS Medicine. 2022.",
                    "Van Cauter E et al. Age-related changes in slow wave sleep and REM sleep and relationship with growth hormone and cortisol levels in healthy men. JAMA. 2000;284(7):861–868.",
                    "Xie L et al. Sleep drives metabolite clearance from the adult brain. Science. 2013;342(6156):373–377.",
                    "Mullington JM et al. Cardiovascular, inflammatory, and metabolic consequences of sleep deprivation. Prog Cardiovasc Dis. 2009;51(4):294–302.",
                    "Jike M et al. Long sleep duration and health outcomes: a systematic review, meta-analysis. Sleep Med Rev. 2018;39:25–36.",
                    "Epel ES et al. Sleep quality predicts telomere length in older women. Psychoneuroendocrinology. 2013.",
                    "Abbasi B et al. The effect of magnesium supplementation on primary insomnia in elderly. J Res Med Sci. 2012.",
                  ].map((ref) => (
                    <p key={ref} style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6, fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{ref}</p>
                  ))}
                </div>
              </div>
            </section>

          </article>
        </div>

        {/* ── Related Content ─────────────────────────────────────────── */}
        <section style={{ marginTop: 72, paddingTop: 48, borderTop: "2px solid #D4C9B8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>Related Content</span>
            <span style={{ flex: 1, height: 1, backgroundColor: "#D4C9B8" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Sleep · Recovery · Longevity</span>
          </div>

          {/* Research Articles */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Research Articles</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                {
                  href: "/research/ashwagandha-ksm66-vs-sensoril",
                  label: "Adaptogen Research",
                  title: "KSM-66 vs Sensoril",
                  sub: "Ashwagandha extract comparison",
                  teaser: "KSM-66 leads on cortisol and testosterone endpoints; Sensoril edges it for perceived stress biomarkers.",
                  accent: "#2D6A4F",
                  evidence: "Moderate",
                  evidenceColor: "#92620A",
                },
                {
                  href: "/research/caffeine-tolerance-reset",
                  label: "Stimulant Science",
                  title: "Caffeine Tolerance",
                  sub: "How to reset and cycle effectively",
                  teaser: "A 10–14 day abstinence period fully restores adenosine receptor sensitivity in most individuals.",
                  accent: "#D4A96A",
                  evidence: "Moderate",
                  evidenceColor: "#92620A",
                },
                {
                  href: "/research/protein-timing-myth",
                  label: "Nutrition Science",
                  title: "The Protein Timing Myth",
                  sub: "vs. reality",
                  teaser: "Total daily protein intake outweighs precise timing for muscle protein synthesis in trained individuals.",
                  accent: "#C4622D",
                  evidence: "Strong",
                  evidenceColor: "#1A6B3A",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}
                >
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: item.evidenceColor, padding: "1px 6px", backgroundColor: `${item.evidenceColor}12`, border: `1px solid ${item.evidenceColor}25`, borderRadius: 3 }}>{item.evidence}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p>
                    </div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", marginTop: 2 }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Ingredients */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Ingredients</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {[
                {
                  href: "/ingredients/ashwagandha",
                  label: "Adaptogen",
                  title: "Ashwagandha",
                  sub: "KSM-66 · Sensoril",
                  teaser: "Cortisol reduction, sleep latency, and stress resilience — the most evidence-backed adaptogen.",
                  accent: "#2D6A4F",
                },
                {
                  href: "/ingredients/magnesium",
                  label: "Mineral",
                  title: "Magnesium Glycinate",
                  sub: "Best-absorbed form",
                  teaser: "Modest but consistent reduction in sleep latency. Most effective in people with marginal deficiency.",
                  accent: "#7EB8D4",
                },
                {
                  href: "/ingredients/l-theanine",
                  label: "Amino Acid",
                  title: "L-Theanine",
                  sub: "Combined with caffeine",
                  teaser: "Promotes relaxed alertness by increasing alpha brain wave activity. Takes the edge off caffeine.",
                  accent: "#D4A96A",
                },
                {
                  href: "/ingredients/beta-alanine",
                  label: "Amino Acid",
                  title: "Beta-Alanine",
                  sub: "Carnosine precursor",
                  teaser: "Evidence on post-exercise recovery and its interaction with sleep quality in trained athletes.",
                  accent: "#C4622D",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}
                >
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p>
                    </div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", marginTop: 2 }}>View Profile →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Product Reviews</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                {
                  href: "/reviews/wellmedr",
                  label: "Wellness · Health",
                  title: "WellMedr Health Supplement",
                  brand: "Wellmedr",
                  verdict: "Decent formulation for general wellness with reasonable label transparency.",
                  rating: 7,
                  accent: "#D4A96A",
                },
                {
                  href: "/reviews/optimum-nutrition-gold-standard-whey",
                  label: "Protein Powder",
                  title: "ON Gold Standard Whey",
                  brand: "Optimum Nutrition",
                  verdict: "The benchmark whey — Informed Choice certified, consistent protein yield, clean label.",
                  rating: 9,
                  accent: "#C4622D",
                },
                {
                  href: "/reviews/myprotein-creatine-monohydrate",
                  label: "Creatine",
                  title: "MyProtein Creatine Monohydrate",
                  brand: "MyProtein",
                  verdict: "Best budget creatine — pure monohydrate, no fillers, well-priced per gram.",
                  rating: 8,
                  accent: "#2D6A4F",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}
                >
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: item.rating >= 9 ? "#1A6B3A" : "#C4622D", lineHeight: 1 }}>{item.rating}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>/10</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.brand}</p>
                    </div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.verdict}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", marginTop: 2 }}>Read Review →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* More from Blog */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10 }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>More from Blog</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Practical fitness &amp; nutrition guides — no fluff, no sponsorship.</p>
            </div>
            <Link href="/blog" style={{ padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", flexShrink: 0, letterSpacing: "0.04em" }}>
              Browse All Articles →
            </Link>
          </div>

          {/* Back nav + tags */}
          <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              ← Back to Blog
            </Link>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ padding: "3px 9px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Sleep</span>
              <span style={{ padding: "3px 9px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Longevity</span>
              <span style={{ padding: "3px 9px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Anti-Aging</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
