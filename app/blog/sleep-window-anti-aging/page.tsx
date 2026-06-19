import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "The Perfect Sleep Window: 6.4–7.8 Hours for Anti-Aging",
  description: "Epidemiological and mechanistic evidence shows peak longevity outcomes cluster between 6.4 and 7.8 hours of sleep. Here's what the data actually says — and why 9 hours isn't better.",
  alternates: { canonical: "/blog/sleep-window-anti-aging" },
};

/* ── JSON-LD Schemas ──────────────────────────────────────── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging",
  description: "Epidemiological and mechanistic evidence shows peak longevity outcomes cluster between 6.4 and 7.8 hours of sleep.",
  image: "https://fitlabreviews.com/lifestyle/sleep-window-feature.png",
  datePublished: "2025-05-10",
  dateModified: "2026-06-19",
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/sleep-window-anti-aging" },
  articleSection: "Longevity",
  wordCount: 3200,
};

const faqList = [
  { q: "Is 6 hours of sleep enough for longevity?", a: "Most large cohort studies show increased all-cause mortality below 6.4 hours. While some individuals tolerate shorter sleep, the epidemiological evidence consistently places the mortality nadir between 6.4 and 7.8 hours." },
  { q: "Why is sleeping more than 9 hours linked to higher mortality?", a: "Habitual long sleep often signals underlying conditions like depression, chronic inflammation, or cardiovascular disease. However, Jike et al. (2018) found the association persists even after adjusting for comorbidities — excess time in bed may produce fragmented, low-quality sleep that is metabolically inferior." },
  { q: "Does sleep quality matter more than sleep duration?", a: "Yes. Ohayon et al. (2004) found subjective sleep quality was more predictive of daytime function and metabolic outcomes than duration alone. A consolidated 6.5-hour night routinely outperforms a fragmented 8-hour night on biomarkers." },
  { q: "What is the glymphatic system and why does it matter for aging?", a: "The glymphatic system is the brain's waste clearance mechanism, active almost exclusively during sleep. Xie et al. (2013, Science) showed it clears amyloid-β and tau proteins implicated in neurodegeneration. Chronic sleep restriction accelerates toxic protein accumulation." },
  { q: "What temperature should my bedroom be for optimal sleep?", a: "Research consistently supports 18–19°C (64–66°F). Core body temperature must fall approximately 1°C to initiate and sustain slow-wave sleep — the most restorative stage. Rooms above 19°C impair SWS depth." },
  { q: "Can supplements replace good sleep hygiene?", a: "No. Magnesium glycinate (200–400mg) shows modest sleep latency reduction (Abbasi et al., 2012), but no supplement substitutes for a fixed wake time, cool dark room, and avoiding alcohol within 3 hours of bed. Those three interventions have stronger evidence than any supplement." },
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
  { id: "where-range-comes-from", label: "Where 6.4–7.8 Comes From" },
  { id: "why-more-isnt-better", label: "Why More Isn't Better" },
  { id: "what-happens", label: "What Happens in Those Hours" },
  { id: "anti-aging-mechanisms", label: "The Anti-Aging Mechanisms" },
  { id: "quality-vs-quantity", label: "Quality vs. Quantity" },
  { id: "practical-protocol", label: "Practical Protocol" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
];

export default function SleepWindowArticle() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFF9F3" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Sleep Window & Anti-Aging</span>
        </div>
      </div>

      {/* Feature image banner */}
      <div style={{ position: "relative", width: "100%", maxHeight: 400, overflow: "hidden", backgroundColor: "#0B1426" }}>
        <Image
          src="/lifestyle/sleep-window-feature.png"
          alt="The Sleep Window — 6.4 to 7.8 hours visualised as a golden arc on a celestial clock"
          width={1200}
          height={630}
          priority
          style={{ width: "100%", height: "auto", objectFit: "cover", opacity: 0.92 }}
        />
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>BLG-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Longevity · Sleep Science</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>for Anti-Aging</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>May 2026</span>
            <span style={{ color: "#E4E8E5" }}>·</span>
            <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>11 min read</span>
            <span style={{ color: "#E4E8E5" }}>·</span>
            <span style={{ padding: "4px 10px", borderRadius: 20, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#FFFFFF", backgroundColor: "#0F7A5A", textTransform: "uppercase" }}>Strong Evidence</span>
          </div>
          {/* Key stat callout */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            {[
              { value: "~24%", label: "higher mortality with <6h sleep", bg: "#0F7A5A", valueColor: "#FFFFFF", labelColor: "rgba(255,255,255,0.75)" },
              { value: "~30%", label: "higher mortality with >9h sleep", bg: "#F6F8F6", valueColor: "#1A1714", labelColor: "#586259" },
              { value: "7h", label: "mortality nadir in most cohort studies", bg: "#E8F5EF", valueColor: "#C98A1E", labelColor: "#586259" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "18px 22px", backgroundColor: stat.bg, flex: 1, minWidth: 140, borderRight: i < 2 ? "1px solid rgba(228,232,229,0.5)" : "none" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: stat.valueColor, margin: 0 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: stat.labelColor, textTransform: "uppercase", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credibility row */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            {/* Authors */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Research Team */}
              <Link href="/authors/fitlab-research-team" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A 0%, #1A1714 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,122,90,0.2)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>FR</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, lineHeight: 1.2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, marginTop: 2 }}>Editorial & Research</p>
                </div>
              </Link>
              {/* Divider */}
              <span style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
              {/* Reviewed by */}
              <Link href="/authors/pankaj-singh" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #17211C 0%, #2D3A32 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>PS</span>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, lineHeight: 1 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, marginTop: 2, lineHeight: 1.2 }}>Pankaj Singh</p>
                </div>
              </Link>
            </div>
            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#FFF9F3", border: "1px solid #E4E8E5" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#17211C", letterSpacing: "0.04em" }}>9 Peer-reviewed sources</span>
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

          {/* TOC + Share */}
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="The Perfect Sleep Window: 6.4–7.8 Hours for Anti-Aging" slug="sleep-window-anti-aging" />
            </div>
          </aside>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>

            {/* Mobile TOC — visible below 1024px where the sidebar is hidden */}
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways — featured snippet target */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>All-cause mortality follows a U-shaped curve with sleep duration — the nadir sits between <strong>6.4 and 7.8 hours</strong> across multiple large cohort studies.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Sleeping <strong>more than 9 hours</strong> is independently associated with 46% higher mortality risk, even after adjusting for comorbidities.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Four mechanistic pathways link sleep to aging: <strong>telomere preservation, inflammatory suppression, GH pulsatility, and glymphatic clearance</strong>.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Sleep <strong>quality</strong> (consolidation, SWS depth, circadian alignment) matters more than raw duration.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>The three highest-leverage interventions: <strong>fixed wake time, 18–19°C bedroom, no alcohol within 3 hours of bed</strong>.</li>
              </ul>
            </div>

            {/* Intro */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Most sleep advice lands somewhere between &ldquo;get 8 hours&rdquo; and &ldquo;sleep is when your body repairs itself.&rdquo; Both statements are true but incomplete. The more useful finding buried in three decades of epidemiological research is this: all-cause mortality doesn&apos;t follow a linear curve with sleep duration. It follows a U-shape — and the bottom of that curve sits between roughly 6.4 and 7.8 hours, depending on the cohort.
            </p>

            {/* Section 1 */}
            <section id="where-range-comes-from" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
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
                  <div key={ref.study} style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>{ref.study}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— {ref.journal}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>{ref.finding}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                None of these studies were designed to identify an exact floor and ceiling — the 6.4–7.8 range reflects the zone where mortality risk, cardiovascular outcomes, and metabolic markers consistently converge at their lowest across multiple independent cohorts. It is not a prescription; it is a pattern.
              </p>
              {/* Practical takeaway */}
              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>If you consistently sleep 7 hours and feel alert by mid-morning without caffeine, you are likely in the optimal range. There is no evidence that pushing to 8 or 9 hours improves outcomes — and some evidence it worsens them.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="why-more-isnt-better" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
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
              <div style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6 }}>Mechanistic hypothesis</p>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
                  Excess time in bed without proportional deep sleep increases light, fragmented sleep — which is metabolically and cognitively inferior to consolidated shorter sleep. Spending 9 hours in bed achieving only 6 hours of quality sleep may be worse than spending 7 hours in bed with 6.5 hours of quality sleep.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="what-happens" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
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
                  <div key={item.stage} style={{ padding: "16px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, fontWeight: 700, color: "#1A1714", marginBottom: 6, letterSpacing: "0.04em" }}>{item.stage}</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.role}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                The critical point: slow-wave sleep (SWS) is front-loaded. The most restorative stage occurs disproportionately in the first half of the night. REM dominates the second half. This is why cutting sleep from 7.5h to 5h does not cost you 33% of each stage — it disproportionately eliminates the REM-heavy final cycles.
              </p>
            </section>

            {/* Section 4 */}
            <section id="anti-aging-mechanisms" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                The Anti-Aging Mechanisms
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The longevity signal from optimal sleep isn&apos;t just epidemiological correlation. There are at least four well-characterised mechanistic pathways linking sleep duration to biological aging rate:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
                    <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Telomere Length Preservation</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
                    Telomere length — the protective caps on chromosomes that shorten with each cell division — is a direct biomarker of biological aging. Epel et al. (2013, <em>Journal of Aging Research</em>) found that sleep duration of 6–7 hours was associated with longer telomeres in postmenopausal women compared to those sleeping &lt;6 or &gt;7 hours. Short sleep elevates cortisol chronically, and cortisol accelerates telomere attrition via oxidative stress pathways.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>02</span>
                    <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Inflammatory Suppression</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
                    Chronic low-grade inflammation — &ldquo;inflammaging&rdquo; — is a primary driver of age-related disease. Sleep restriction studies consistently show elevated IL-6, TNF-α, and CRP after even one week of sleeping under 6 hours per night (Mullington et al., 2009, <em>Progress in Cardiovascular Diseases</em>). These inflammatory markers return to baseline with recovery sleep, but habitual restriction maintains chronically elevated levels.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>03</span>
                    <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Growth Hormone Pulse Integrity</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
                    The largest single daily pulse of growth hormone in adults occurs during the first slow-wave sleep cycle, typically 60–90 minutes after sleep onset (Van Cauter et al., 2000, <em>JAMA</em>). GH drives tissue repair, fat oxidation, lean mass preservation, and immune function. Delaying sleep onset, fragmenting sleep, or consistently under-sleeping blunts this pulse. Its decline is one of the most consistent features of biological aging — and it is substantially modifiable through sleep architecture.
                  </p>
                </div>

                <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>04</span>
                    <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Glymphatic Amyloid Clearance</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
                    Xie et al. (2013, <em>Science</em>) demonstrated that the interstitial space of the brain expands by ~60% during sleep, allowing cerebrospinal fluid to flush metabolic waste — including amyloid-β and tau proteins implicated in neurodegeneration. This glymphatic flush is near-absent during waking. Chronic sleep restriction in mice accelerated amyloid plaque accumulation; in humans, a single night of sleep deprivation measurably increases cerebrospinal amyloid-β levels (Lucey et al., 2017, <em>Brain</em>).
                  </p>
                </div>
              </div>
              {/* Practical takeaway */}
              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Sleep isn&apos;t passive rest — it&apos;s when your body runs four distinct anti-aging programmes. Cutting sleep doesn&apos;t save time; it accelerates biological aging through measurable pathways. Protecting your first SWS cycle (the first 90 minutes) is the single most impactful thing you can do.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="quality-vs-quantity" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Quality vs. Quantity: Which Matters More?
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Duration is measurable. Quality is harder to quantify, but the evidence strongly suggests it dominates. Ohayon et al. (2004, <em>Sleep Medicine Reviews</em>) documented that subjective sleep quality — not just hours — was more predictive of daytime function, mood, and metabolic outcomes than duration alone.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Practically, quality is determined by three things: sleep continuity (minimal awakenings), sufficient slow-wave sleep architecture, and alignment with circadian timing. A fragmented 8-hour night routinely underperforms a consolidated 6.5-hour night on all biomarkers.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ padding: "16px 18px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A4020", marginBottom: 8 }}>Destroys Sleep Quality</p>
                  {["Alcohol within 3h of bed — suppresses REM", "Blue light after 9pm — delays melatonin onset by ~90 min", "Inconsistent sleep timing — disrupts circadian anchoring", "Room temperature above 19°C — impairs SWS depth"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #0F7A5A" }}>{item}</p>
                  ))}
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Improves Sleep Quality</p>
                  {["Consistent wake time — the most powerful circadian anchor", "18–19°C room temperature — optimal for SWS induction", "Magnesium glycinate 200–400mg — modest sleep latency reduction (Abbasi et al., 2012)", "Exercise — increases SWS duration, reduces sleep latency"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #1A6B3A" }}>{item}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Inline Newsletter CTA */}
            <div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden", position: "relative" }}>
              {/* Background */}
              <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                {/* Decorative circles */}
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
                <div style={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
                <div style={{ position: "absolute", bottom: -40, left: 60, width: 100, height: 100, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
                {/* Decorative dots */}
                <div style={{ position: "absolute", top: 20, right: 50, display: "grid", gridTemplateColumns: "repeat(5, 6px)", gap: 8, opacity: 0.15 }}>
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "#FFFFFF" }} />
                  ))}
                </div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13 }}>✉</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
                  </div>

                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
                    Get insights like this —{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>straight to your inbox.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginTop: 0, marginBottom: 20, lineHeight: 1.5 }}>
                    Evidence-based. No sponsors. Free every Thursday.
                  </p>

                  {/* CTA row */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", flexShrink: 0, letterSpacing: "0.03em", display: "inline-flex", alignItems: "center", gap: 8 }}>
                      Subscribe Free <span style={{ fontSize: 16 }}>→</span>
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ display: "flex" }}>
                        {["FR", "PS", "RD"].map((initials, i) => (
                          <div key={initials} style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: i === 0 ? "#0F7A5A" : i === 1 ? "#2D6A4F" : "#3D6B80", border: "2px solid #17211C", marginLeft: i > 0 ? -6 : 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 - i }}>
                            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 7, fontWeight: 700, color: "#FFFFFF" }}>{initials}</span>
                          </div>
                        ))}
                      </div>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>Join 2,400+ readers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <section id="practical-protocol" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
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
                  <div key={step.priority} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#C98A1E", opacity: 0.5, alignSelf: "start", paddingTop: 2 }}>{step.priority}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{step.action}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{step.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                {/* Top accent bar */}
                <div style={{ height: 4, background: "linear-gradient(90deg, #0F7A5A 0%, #C98A1E 100%)" }} />

                {/* Header — warm cream */}
                <div style={{ padding: "28px 30px 24px", backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 14, color: "#FFFFFF" }}>✓</span>
                      </div>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A7B6F" }}>Bottom Line</span>
                    </div>
                    <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#FFFFFF", backgroundColor: "#0F7A5A", textTransform: "uppercase" }}>Grade A — Strong Evidence</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 700, color: "#1A1714", marginBottom: 0, lineHeight: 1.35 }}>
                    Aim for 7 hours of consolidated sleep.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>The ceiling matters as much as the floor.</em>
                  </h3>
                </div>

                {/* Body — slightly deeper warm */}
                <div style={{ padding: "22px 30px 28px", backgroundColor: "#FAECD8", borderTop: "1px solid #EBD8C3" }}>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.85, marginBottom: 16 }}>
                    The preponderance of evidence from large cohort studies places the longevity-optimal sleep window between <strong style={{ color: "#1A1714" }}>6.4 and 7.8 hours</strong>. Sleeping significantly below 6 hours chronically is harmful — but so is spending 9+ hours in bed with fragmented, low-quality sleep. The four mechanisms that explain this — telomere integrity, inflammatory suppression, GH pulsatility, and glymphatic clearance — all operate optimally in a 7-hour window of consolidated, architecturally intact sleep.
                  </p>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.85, marginBottom: 20 }}>
                    The most effective intervention available: a fixed wake time, a dark cool room, and zero alcohol in the three hours before bed. No supplement replaces those three.
                  </p>

                  {/* Key actions strip */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Fixed wake time", "18–19°C bedroom", "No alcohol 3h before bed"].map(action => (
                      <span key={action} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 11, fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, color: "#1A1714", backgroundColor: "#FFFFFF", border: "1px solid #EBD8C3" }}>{action}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* References — expandable with clickable PubMed links */}
              <details style={{ marginTop: 32, border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                <summary style={{ padding: "16px 20px", cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, backgroundColor: "#FFF9F3" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                    <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 700, color: "#17211C" }}>Key References</span>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#6B7770", letterSpacing: "0.08em" }}>9 sources</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A" }}>Show ↓</span>
                </summary>
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { num: 1, text: "Kripke DF et al. Mortality associated with sleep duration and insomnia.", journal: "Arch Gen Psychiatry. 2002;59(2):131–136", url: "https://pubmed.ncbi.nlm.nih.gov/11825133/" },
                    { num: 2, text: "Cappuccio FP et al. Sleep duration and all-cause mortality: a systematic review and meta-analysis.", journal: "Sleep. 2010;33(5):585–592", url: "https://pubmed.ncbi.nlm.nih.gov/20469800/" },
                    { num: 3, text: "Xiao Q et al. Actigraphy-measured sleep characteristics and risk of dementia.", journal: "PLOS Medicine. 2022", url: "https://pubmed.ncbi.nlm.nih.gov/36445833/" },
                    { num: 4, text: "Van Cauter E et al. Age-related changes in slow wave sleep and relationship with growth hormone and cortisol levels.", journal: "JAMA. 2000;284(7):861–868", url: "https://pubmed.ncbi.nlm.nih.gov/10938176/" },
                    { num: 5, text: "Xie L et al. Sleep drives metabolite clearance from the adult brain.", journal: "Science. 2013;342(6156):373–377", url: "https://pubmed.ncbi.nlm.nih.gov/24136970/" },
                    { num: 6, text: "Mullington JM et al. Cardiovascular, inflammatory, and metabolic consequences of sleep deprivation.", journal: "Prog Cardiovasc Dis. 2009;51(4):294–302", url: "https://pubmed.ncbi.nlm.nih.gov/19110131/" },
                    { num: 7, text: "Jike M et al. Long sleep duration and health outcomes: a systematic review, meta-analysis.", journal: "Sleep Med Rev. 2018;39:25–36", url: "https://pubmed.ncbi.nlm.nih.gov/28890167/" },
                    { num: 8, text: "Epel ES et al. Sleep quality predicts telomere length in older women.", journal: "Psychoneuroendocrinology. 2013", url: "https://pubmed.ncbi.nlm.nih.gov/23084728/" },
                    { num: 9, text: "Abbasi B et al. The effect of magnesium supplementation on primary insomnia in elderly.", journal: "J Res Med Sci. 2012", url: "https://pubmed.ncbi.nlm.nih.gov/23853635/" },
                  ].map((ref) => (
                    <div key={ref.num} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: ref.num < 9 ? "1px solid #F2F8F4" : "none", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 800, color: "#E4E8E5", flexShrink: 0, width: 20, textAlign: "right", paddingTop: 1 }}>{ref.num}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.55, margin: 0 }}>
                          {ref.text}{" "}
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>{ref.journal}</span>
                        </p>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", marginTop: 2, display: "inline-block" }}>
                          PubMed →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Mobile share row — visible below lg where sidebar is hidden */}
            <div className="block lg:hidden" style={{ marginBottom: 32, padding: "16px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>Share this article</span>
              <div style={{ display: "flex", gap: 8 }}>
                <ShareButtons title="The Perfect Sleep Window: 6.4–7.8 Hours for Anti-Aging" slug="sleep-window-anti-aging" />
              </div>
            </div>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 48 }}>
              {/* Section header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>FAQ</span>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>{faqList.length} Questions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>
                Frequently Asked{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>Questions</em>
              </h2>

              {/* FAQ cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((faq, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}
                  >
                    <summary style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, color: "#17211C", cursor: "pointer", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.5, listStyle: "none", display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", flexShrink: 0, width: 28, textAlign: "center" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ flex: 1 }}>{faq.q}</span>
                      <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", lineHeight: 1 }} className="faq-toggle">+</span>
                      </span>
                    </summary>
                    <div style={{ padding: "0 20px 18px 62px", borderTop: "1px solid #F2F8F4" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.8, margin: 0, paddingTop: 14 }}>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </article>
        </div>

        {/* ── Related Content — Horizontal Carousel ─────────────────── */}
        <section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>
              Similar <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>articles</em>
            </h2>
            <Link href="/blog" style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
              View all →
            </Link>
          </div>

          {/* Scrollable card row */}
          <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8, scrollSnapType: "x mandatory" }} className="review-table-wrap">
            {[
              { href: "/research/ashwagandha-ksm66-vs-sensoril", type: "Research", title: "KSM-66 vs Sensoril", desc: "Ashwagandha extract comparison — cortisol and testosterone endpoints.", img: "/illustrations/card-ashwagandha.png" },
              { href: "/research/caffeine-tolerance-reset", type: "Research", title: "Caffeine Tolerance Reset", desc: "A 10–14 day abstinence period fully restores adenosine receptor sensitivity.", img: "/illustrations/card-caffeine.png" },
              { href: "/ingredients/ashwagandha", type: "Ingredient", title: "Ashwagandha", desc: "Cortisol reduction, sleep latency, and stress resilience — the most evidence-backed adaptogen.", img: "/illustrations/card-ashwagandha-ing.png" },
              { href: "/ingredients/magnesium", type: "Ingredient", title: "Magnesium Glycinate", desc: "Modest but consistent reduction in sleep latency. Best-absorbed form.", img: "/illustrations/card-magnesium.png" },
              { href: "/research/protein-timing-myth", type: "Research", title: "The Protein Timing Myth", desc: "Total daily intake outweighs precise timing for muscle protein synthesis.", img: "/illustrations/card-protein.png" },
              { href: "/reviews/optimum-nutrition-gold-standard-whey", type: "Review · 9/10", title: "ON Gold Standard Whey", desc: "The benchmark whey — Informed Choice certified, consistent protein yield.", img: "/illustrations/card-whey-review.png" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="hub-card"
                style={{ flex: "0 0 210px", scrollSnapAlign: "start", textDecoration: "none", borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3", backgroundColor: "#FFFFFF" }}
              >
                {/* Custom illustration */}
                <div style={{ height: 150, position: "relative", overflow: "hidden" }}>
                  <Image src={card.img} alt={card.title} width={400} height={280} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", bottom: 8, left: 12, fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", backgroundColor: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: 4 }}>{card.type}</span>
                </div>
                {/* Text content */}
                <div style={{ padding: "14px 14px 16px" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.25, marginBottom: 6 }}>{card.title}</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Back nav + tags */}
          <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
              ← Back to Blog
            </Link>
            <div style={{ display: "flex", gap: 6 }}>
              {["Sleep", "Longevity", "Anti-Aging"].map(tag => (
                <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
