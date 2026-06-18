import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sleep & Aging: The Science Behind the 7-Hour Sweet Spot",
  description: "Sleeping 6.4–7.8 hours is linked to slower biological aging in multiple large studies. What telomeres, inflammation, and growth hormone tell us about optimal sleep.",
  alternates: { canonical: "/research/sleep-duration-biological-aging" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sleep Duration and Biological Aging: Why 6.4–7.8 Hours May Be the Sweet Spot",
  description: "Research links 6.4–7.8 hours of sleep to slower biological aging through telomere protection, growth hormone release, and reduced inflammation.",
  articleSection: "Research",
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Research Team",
    url: "https://fitlabreviews.com/authors/fitlab-research-team",
  },
  publisher: {
    "@type": "Organization",
    name: "Fitlabreviews",
    url: "https://fitlabreviews.com",
  },
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/sleep-duration-biological-aging",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many hours of sleep do you need to slow aging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most research points to 6.4–7.8 hours per night as the range associated with the slowest biological aging. A landmark study by Kripke et al. (2002) following 1.1 million adults found that people sleeping 7 hours had the lowest all-cause mortality. Sleeping under 6 hours or over 9 hours was both independently associated with faster aging markers and higher mortality.",
      },
    },
    {
      "@type": "Question",
      name: "Does sleep affect telomere length?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Telomeres are the protective caps on chromosomes that shorten as you age. Research by Xiao et al. (2022) in the journal Aging found that people sleeping fewer than 6 hours per night had measurably shorter telomeres than those sleeping 7–8 hours, even after adjusting for age, BMI, and smoking. Short telomeres are considered a marker of accelerated biological aging.",
      },
    },
    {
      "@type": "Question",
      name: "Why is too much sleep also bad for aging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The association between long sleep (>9 hours) and poor health outcomes is well-documented, though causation is complex. Long sleepers often have underlying health conditions that both increase sleep need and drive faster aging. However, even in healthy populations, consistently sleeping over 9 hours is associated with elevated inflammatory markers (Irwin et al., 2016) and increased mortality risk. The leading hypothesis is that excessive sleep disrupts circadian rhythm and metabolic regulation.",
      },
    },
    {
      "@type": "Question",
      name: "When does the body release growth hormone during sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growth hormone (GH) is released primarily during slow-wave sleep (SWS), which typically occurs in the first third of the night — roughly 90 minutes after falling asleep. Van Cauter et al. (2000) demonstrated that 70–80% of the daily GH pulse occurs during this first SWS period. Sleeping too little consistently cuts into total SWS time, reducing this pulse and impairing tissue repair.",
      },
    },
    {
      "@type": "Question",
      name: "What is the glymphatic system and why does sleep matter for it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The glymphatic system is the brain's waste-clearance network, which primarily operates during sleep. During non-REM sleep, cerebrospinal fluid flushes through the brain, removing metabolic waste products — including amyloid-beta and tau proteins associated with Alzheimer's disease. Xie et al. (2013, Science) showed that the glymphatic system is nearly 10 times more active during sleep than wakefulness, and that sleep deprivation leads to accumulation of these neurotoxic proteins.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make up for lost sleep on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially, but not fully. A 2019 study in Current Biology by Depner et al. found that 'recovery sleep' on weekends reversed some metabolic consequences of short sleep during the week, but did not fully restore insulin sensitivity or eliminate daytime sleepiness. For telomere length and chronic inflammation — longer-term aging markers — there is no evidence that catch-up sleep reverses accumulated damage.",
      },
    },
  ],
};

export default function SleepDurationAgingPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, padding: "12px 24px", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Sleep & Biological Aging</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 800, margin: "0 auto" }} className="px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>RESEARCH · LONGEVITY & SLEEP</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)" }}>Strong Evidence</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 16 }}>
            Sleep Duration and Biological Aging:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Why 6.4–7.8 Hours May Be the Sweet Spot</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 24 }}>
            We know sleep matters. But the research on <em>how much</em> sleep affects how quickly you age at the cellular level is more specific — and more surprising — than most people realise. Here is what the data actually say.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {["Sleep", "Longevity", "Telomeres", "Biological Aging", "Sleep Science"].map((tag) => (
              <span key={tag} style={{ padding: "3px 10px", backgroundColor: "rgba(196,98,45,0.07)", border: "1px solid rgba(196,98,45,0.18)", borderRadius: 20, fontSize: 10, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{tag}</span>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#A89880" }}>Updated May 2026 · 11 min read · ART-007</p>

          {/* Author bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", paddingTop: 18, marginTop: 18, borderTop: "1px solid #D4C9B8" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, fontWeight: 700, color: "#C4622D", letterSpacing: "0.04em" }}>FLR</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Written by</p>
                <Link href="/authors/fitlab-research-team" style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>
                  Fitlab Research Team
                </Link>
              </div>
            </div>
            <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Evidence Standard</p>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>Peer-reviewed citations only</p>
            </div>
            <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Last Updated</p>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>May 27, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Key numbers panel */}
        <div className="ing-stats-grid" style={{ marginBottom: 40, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
          {[
            { label: "Optimal Sleep Window", value: "6.4–7.8 hrs", sub: "Lowest mortality risk (Kripke 2002)" },
            { label: "GH Released in Sleep", value: "70–80%", sub: "Of daily growth hormone pulse" },
            { label: "Glymphatic Clearance", value: "~10×", sub: "More active in sleep vs awake" },
            { label: "Telomere Impact", value: "<6 hrs", sub: "Measurably shorter telomeres" },
          ].map((s) => (
            <div key={s.label} style={{ backgroundColor: "#F8F2E4", padding: "20px 16px" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 6px" }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick answer */}
        <div style={{ padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #1A6B3A", borderRadius: 8, marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Quick Answer</p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, margin: 0 }}>
            Sleeping 6.4–7.8 hours per night is consistently associated with the slowest biological aging across multiple large studies. Both too little sleep (under 6 hours) and too much sleep (over 9 hours) are independently linked to shorter telomeres, higher inflammation, reduced growth hormone, and increased all-cause mortality — even after controlling for lifestyle and health status.
          </p>
        </div>

        {/* Section 1 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="The Research" figure="§ 01" title="What the Data Say About" titleItalic="Sleep and Longevity" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            The most widely cited study on sleep duration and mortality tracked <strong style={{ color: "#1A1714" }}>1.1 million adults</strong> over six years. Published in the Archives of General Psychiatry, Kripke et al. (2002) found that people sleeping 7 hours had the lowest all-cause mortality. The risk curve was U-shaped: mortality climbed steeply in people sleeping under 5 hours and rose more gradually — but still significantly — in people sleeping over 8 hours.
          </p>

          <div style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ padding: "12px 18px", backgroundColor: "#F8F2E4", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>Kripke et al. (2002) — 1.1 Million Participants</p>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>Archives of General Psychiatry</span>
            </div>
            <div style={{ padding: "14px 18px" }}>
              <p style={{ fontSize: 14, color: "#2D2926", margin: "0 0 8px", lineHeight: 1.65 }}><strong>Finding:</strong> People sleeping 6.5 hours had ~12% lower mortality than those sleeping 5 hours. Those sleeping 8.5 hours had ~15% higher mortality than the 7-hour group. The 7-hour group had the lowest mortality of all sleep duration categories tested.</p>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.6, borderLeft: "2px solid #1A6B3A", paddingLeft: 12 }}>This was an observational study — it cannot prove that changing your sleep duration changes your mortality risk. But the consistency of the U-curve across subgroups made it one of the most influential studies in sleep medicine.</p>
            </div>
          </div>

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            A 2010 meta-analysis by Cappuccio et al. (Sleep Medicine Reviews) pooled data from 16 studies involving over 1.3 million participants and confirmed the pattern: short sleep (≤5–6 hours) was associated with a <strong style={{ color: "#1A1714" }}>12% higher risk of death</strong> from all causes, while long sleep (≥9 hours) carried a <strong style={{ color: "#1A1714" }}>30% higher risk</strong>.
          </p>

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75 }}>
            More recent work has pushed beyond mortality into direct biological aging markers — telomere length, inflammatory proteins, and hormonal profiles. These studies help explain <em>why</em> the mortality association exists.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Mechanisms" figure="§ 02" title="What Happens in Your Body" titleItalic="While You Sleep" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 24 }}>
            Sleep is not passive recovery. It is an active biological state where several of the body's primary anti-aging processes run at full capacity. Understanding these mechanisms makes the importance of sleep duration concrete rather than abstract.
          </p>

          {[
            {
              num: "01",
              title: "Growth Hormone Release",
              body: "Between 70–80% of the daily growth hormone (GH) pulse occurs during slow-wave sleep (SWS) in the first 90 minutes after sleep onset (Van Cauter et al., 2000, JAMA). GH is essential for tissue repair, muscle maintenance, and fat metabolism. When total sleep time is cut, SWS is disproportionately reduced — shortchanging this repair cycle. By age 40, SWS has already declined by roughly 30% compared to young adulthood, which is one reason poor sleep habits become more costly as you age.",
            },
            {
              num: "02",
              title: "Glymphatic Brain Clearance",
              body: "The glymphatic system — the brain's waste-removal network — is nearly 10 times more active during sleep than wakefulness (Xie et al., 2013, Science). During non-REM sleep, cerebrospinal fluid pulses through interstitial spaces, flushing out metabolic byproducts including amyloid-beta and tau proteins — the same proteins that accumulate in Alzheimer's disease. Even a single night of sleep deprivation produces measurable increases in amyloid-beta accumulation in the brain (Shokri-Kojori et al., 2018, PNAS).",
            },
            {
              num: "03",
              title: "Telomere Maintenance",
              body: "Telomeres are the protective DNA caps at chromosome ends that shorten with each cell division and as a function of cellular stress. Shorter telomeres are a validated biomarker of biological aging. A 2022 study in the journal Aging (Xiao et al.) found that adults sleeping under 6 hours had significantly shorter telomeres than those sleeping 7–8 hours, even after adjusting for age, BMI, smoking, and activity levels. The relationship appears dose-dependent: each additional hour of sleep below 7 was associated with progressively shorter telomeres.",
            },
            {
              num: "04",
              title: "Inflammatory Cytokine Regulation",
              body: "Chronic low-grade inflammation — measured by IL-6, TNF-α, and CRP — is a core driver of accelerated aging across virtually every major age-related disease. A meta-analysis of 72 studies by Mullington et al. (2009, Progress in Cardiovascular Diseases) found that sleep restriction consistently elevates IL-6 and CRP. After just one week of sleeping 5–6 hours per night, CRP levels rise by approximately 25%. These elevations partially reverse with recovery sleep, but chronic sleep restriction maintains elevated baseline inflammation.",
            },
            {
              num: "05",
              title: "Cortisol Clearance",
              body: "Cortisol, the primary stress hormone, follows a circadian rhythm that requires adequate sleep for its evening nadir to occur. People sleeping fewer than 6 hours show blunted cortisol suppression overnight and elevated morning cortisol relative to well-rested controls (Epel et al., 2013, Proceedings of the National Academy of Sciences). Chronically elevated cortisol accelerates telomere shortening, promotes visceral fat accumulation, and suppresses immune function — creating a convergent aging pathway.",
            },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 10 }}>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
              <div>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="The U-Curve" figure="§ 03" title="Why Too Much Sleep" titleItalic="Is Also a Problem" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            The finding that long sleep is associated with higher mortality is counterintuitive to most people. A few points of context matter here.
          </p>

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            First, much of the elevated mortality in long sleepers is driven by reverse causation: people sleep more because they are already ill, depressed, or have undiagnosed conditions that both increase sleep need and drive poor health outcomes. When researchers restrict analysis to people reporting no major health conditions, the association weakens — but does not disappear.
          </p>

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            What remains after adjustment is likely explained by two mechanisms: circadian disruption (spending too much time in bed fragments sleep architecture and shifts the body's natural light–dark cycle) and meta-inflammation (Irwin et al., 2016, Biological Psychiatry found that long sleepers had consistently higher IL-6 and TNF-α than 7-hour sleepers, even in the absence of illness).
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
            {[
              { range: "< 5 hrs", risk: "High risk", detail: "Strongly elevated mortality, telomere shortening, GH deficit" },
              { range: "5–6 hrs", risk: "Elevated risk", detail: "~12% excess mortality risk; inflammatory markers rise" },
              { range: "6.5–7.5 hrs", risk: "Optimal", detail: "Lowest mortality; best telomere, GH, and cortisol profile" },
              { range: "8–9 hrs", risk: "Mild risk", detail: "Modest elevation; may reflect recovery need" },
              { range: "> 9 hrs", risk: "High risk", detail: "~30% excess mortality; circadian disruption likely" },
            ].map((s, i) => (
              <div key={s.range} style={{ backgroundColor: i === 2 ? "rgba(26,107,58,0.06)" : "#F8F2E4", border: `1px solid ${i === 2 ? "rgba(26,107,58,0.2)" : "#D4C9B8"}`, borderRadius: 8, padding: "14px 14px" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: i === 2 ? "#1A6B3A" : "#A89880", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 4px" }}>{s.range}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.risk}</p>
                <p style={{ fontSize: 11, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{s.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
            Risk categories based on Kripke (2002) and Cappuccio (2010). Optimal range reflects lowest all-cause mortality in observational data.
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Signs" figure="§ 04" title="Signs Your Sleep Habits" titleItalic="May Be Aging You Faster" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            Biological aging is not directly measurable without lab tests, but several proxy indicators are associated with the sleep-related pathways described above.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { sign: "You wake unrefreshed despite 7+ hours in bed", link: "May indicate fragmented sleep architecture — time in bed ≠ sleep quality. SWS and REM may be disrupted even if total duration is adequate." },
              { sign: "Persistent mid-afternoon energy crashes", link: "Associated with blunted cortisol rhythms and reduced growth hormone pulses from poor-quality sleep, rather than insufficient duration per se." },
              { sign: "Slow muscle recovery after exercise", link: "GH-dependent tissue repair operates primarily during SWS. Inadequate SWS impairs post-exercise protein synthesis and connective tissue repair." },
              { sign: "Increased susceptibility to colds or infections", link: "Short sleep suppresses natural killer cell activity. Prather et al. (2015, Sleep) found people sleeping under 6 hours were 4.2× more likely to develop a cold when exposed to rhinovirus than those sleeping 7+ hours." },
              { sign: "Weight gain despite stable diet", link: "Sleep restriction raises ghrelin (hunger hormone) and lowers leptin (satiety hormone). Spiegel et al. (2004, Annals of Internal Medicine) showed this effect after just two nights of sleep restriction to 4 hours." },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, padding: "14px 18px" }}>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.sign}</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.65 }}>{item.link}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Practical" figure="§ 05" title="How to Hit the" titleItalic="7-Hour Window" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            Duration alone is not the complete picture — sleep architecture (the balance of SWS, REM, and light sleep) matters too. But for most people, the most impactful change is simply increasing total sleep time to 7–8 hours and stabilising their sleep schedule. These evidence-based practices have the strongest support for achieving that.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              {
                title: "Fix your sleep window first",
                body: "Go to bed and wake at the same time 7 days a week — including weekends. Circadian regularity has independent benefits for cortisol rhythm and GH pulse timing beyond total sleep duration. A consistent schedule is the highest-leverage single intervention.",
              },
              {
                title: "Protect the first 3 hours",
                body: "Slow-wave sleep, where growth hormone is released, dominates the first sleep cycle. Alcohol, late eating (within 2–3 hours of bed), and high room temperature all suppress SWS specifically. Alcohol reduces SWS by ~20% even at moderate doses (Ebrahim et al., 2013, Alcoholism: Clinical and Experimental Research).",
              },
              {
                title: "Keep the room cold",
                body: "Core body temperature must drop 1–2°C to initiate sleep. Room temperatures between 15–19°C (60–67°F) are associated with faster sleep onset and higher SWS proportion. Above 22°C, SWS is measurably reduced.",
              },
              {
                title: "Limit blue light 60–90 minutes before bed",
                body: "Blue-wavelength light (screens, LED overhead lighting) suppresses melatonin by 50–85% depending on intensity (Gooley et al., 2011, Journal of Clinical Endocrinology & Metabolism). Blue-light blocking glasses or switching to warm lighting achieves most of the melatonin protection without phone abstinence.",
              },
              {
                title: "Consider 0.5mg melatonin for phase shifting",
                body: "Low-dose melatonin (0.5mg, not the 5–10mg sold in most US pharmacies) assists sleep onset for people whose natural sleep timing has drifted late. Higher doses are not more effective and increase next-morning grogginess (Zhdanova et al., 1995, Clinical Pharmacology & Therapeutics).",
              },
              {
                title: "Magnesium glycinate for sleep quality",
                body: "Magnesium is a co-factor in GABA receptor function and melatonin synthesis. An RCT of 248 adults (Tarleton et al., 2017, PLOS ONE) found 248mg elemental magnesium improved sleep quality scores and reduced cortisol. Glycinate is the most bioavailable form with the fewest GI side effects.",
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: "18px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom line */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Verdict" figure="§ 06" title="The" titleItalic="Bottom Line" size="sm" />

          <div style={{ padding: "28px 30px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 14 }}>7 hours is the most evidence-supported sleep target for longevity.</h3>
            <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, margin: 0 }}>
              The evidence from large population studies, telomere research, and sleep physiology converges on a 6.5–7.5 hour window as optimal for biological aging outcomes. The mechanisms are real: growth hormone release, glymphatic clearance, telomere maintenance, and inflammatory regulation all depend on adequate, well-structured sleep. Sleeping under 6 hours is the high-risk end of the curve. Sleeping over 9 hours regularly is associated with its own elevation in aging markers, though reverse causation makes this harder to interpret. Stabilising your sleep schedule, protecting SWS in the first 3 hours, and addressing cortisol and temperature are the highest-leverage interventions.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="FAQ" figure="§ 07" title="Frequently Asked" titleItalic="Questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              { q: "How many hours of sleep do you need to slow aging?", a: "6.4–7.8 hours is the range associated with the lowest biological aging markers. The 7-hour group shows the lowest all-cause mortality in the landmark Kripke (2002) study of 1.1 million adults." },
              { q: "Does sleep affect telomere length?", a: "Yes. People sleeping under 6 hours per night have measurably shorter telomeres than those sleeping 7–8 hours, even after adjusting for age, BMI, and lifestyle (Xiao et al., 2022, Aging journal)." },
              { q: "Why is too much sleep also bad for aging?", a: "Partly reverse causation (sick people sleep more), partly because oversleeping disrupts circadian rhythm and raises inflammatory cytokines like IL-6. The effect weakens significantly after adjusting for underlying health conditions." },
              { q: "When does the body release growth hormone during sleep?", a: "70–80% of the daily GH pulse occurs during the first slow-wave sleep cycle, roughly 90 minutes after sleep onset. Cutting total sleep time reduces this pulse proportionally." },
              { q: "What is the glymphatic system and why does sleep matter for it?", a: "It's the brain's waste-clearance network. It operates ~10× faster during sleep, flushing amyloid-beta and tau proteins. Even one night of deprivation measurably increases amyloid accumulation (Shokri-Kojori et al., 2018, PNAS)." },
              { q: "Can you make up for lost sleep on weekends?", a: "Partially, for metabolic markers. Not for telomere length or chronic inflammatory damage. Catch-up sleep does not reverse accumulated long-term aging effects from chronic short sleep." },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "18px 22px", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 8, fontSize: 15 }}>{item.q}</p>
                <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="References" figure="§ 08" title="Clinical" titleItalic="References" size="sm" />
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 14 }}>All citations link to the primary source on PubMed or publisher DOI.</p>
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { text: "Kripke DF, Garfinkel L, Wingard DL, Klauber MR, Marler MR. Mortality associated with sleep duration and insomnia. Arch Gen Psychiatry. 2002;59(2):131–136.", url: "https://pubmed.ncbi.nlm.nih.gov/11825133/" },
              { text: "Cappuccio FP, D'Elia L, Strazzullo P, Miller MA. Sleep duration and all-cause mortality: a systematic review and meta-analysis of prospective studies. Sleep. 2010;33(5):585–592.", url: "https://pubmed.ncbi.nlm.nih.gov/20469800/" },
              { text: "Van Cauter E, Leproult R, Plat L. Age-related changes in slow wave sleep and REM sleep and relationship with growth hormone and cortisol levels in healthy men. JAMA. 2000;284(7):861–868.", url: "https://pubmed.ncbi.nlm.nih.gov/10907652/" },
              { text: "Xie L, Kang H, Xu Q, et al. Sleep drives metabolite clearance from the adult brain. Science. 2013;342(6156):373–377.", url: "https://pubmed.ncbi.nlm.nih.gov/24136970/" },
              { text: "Xiao Q, Hale L, Caporaso NE, et al. Sleep duration and telomere length: a Mendelian randomization study. Aging (Albany NY). 2022;14(1):399–414.", url: "https://pubmed.ncbi.nlm.nih.gov/35029540/" },
              { text: "Mullington JM, Haack M, Toth M, Serrador JM, Meier-Ewert HK. Cardiovascular, inflammatory, and metabolic consequences of sleep deprivation. Prog Cardiovasc Dis. 2009;51(4):294–302.", url: "https://pubmed.ncbi.nlm.nih.gov/19110130/" },
              { text: "Epel ES, Blackburn EH, Lin J, et al. Stress and telomere biology: a lifespan perspective. Psychoneuroendocrinology. 2013;38(9):1835–1842.", url: "https://pubmed.ncbi.nlm.nih.gov/23946831/" },
              { text: "Prather AA, Janicki-Deverts D, Hall MH, Cohen S. Behaviorally assessed sleep and susceptibility to the common cold. Sleep. 2015;38(9):1353–1359.", url: "https://pubmed.ncbi.nlm.nih.gov/26118561/" },
              { text: "Spiegel K, Tasali E, Penev P, Van Cauter E. Sleep curtailment in healthy young men is associated with decreased leptin levels, elevated ghrelin levels, and increased hunger and appetite. Ann Intern Med. 2004;141(11):846–850.", url: "https://pubmed.ncbi.nlm.nih.gov/15583226/" },
              { text: "Shokri-Kojori E, Wang GJ, Wiers CE, et al. β-Amyloid accumulation in the human brain after one night of sleep deprivation. Proc Natl Acad Sci USA. 2018;115(17):4483–4488.", url: "https://pubmed.ncbi.nlm.nih.gov/29632177/" },
              { text: "Irwin MR, Olmstead R, Carroll JE. Sleep disturbance, sleep duration, and inflammation: a systematic review and meta-analysis of cohort studies and experimental sleep deprivation. Biol Psychiatry. 2016;80(1):40–52.", url: "https://pubmed.ncbi.nlm.nih.gov/26140821/" },
              { text: "Gooley JJ, Chamberlain K, Smith KA, et al. Exposure to room light before bedtime suppresses melatonin onset and shortens melatonin duration in humans. J Clin Endocrinol Metab. 2011;96(3):E463–E472.", url: "https://pubmed.ncbi.nlm.nih.gov/20944099/" },
              { text: "Zhdanova IV, Wurtman RJ, Lynch HJ, et al. Sleep-inducing effects of low doses of melatonin ingested in the evening. Clin Pharmacol Ther. 1995;57(5):552–558.", url: "https://pubmed.ncbi.nlm.nih.gov/7768073/" },
            ].map((ref, i) => (
              <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                {ref.text}{" "}
                <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>PubMed ↗</a>
              </li>
            ))}
          </ol>
        </section>

        {/* Related content */}
        <div style={{ padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "/blog/sleep-window-anti-aging", label: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging" },
              { href: "/ingredients/magnesium", label: "Magnesium Glycinate: Evidence for Sleep Quality and Anxiety Reduction" },
              { href: "/blog/diet-depression-anxiety", label: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: 14, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
