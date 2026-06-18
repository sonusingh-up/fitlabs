import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Creatine for Brain Health: Cognition & Memory",
  description:
    "Creatine improves memory and cuts mental fatigue per multiple RCTs, with the biggest gains in vegetarians and over-65s. 12-citation review.",
  alternates: { canonical: "/research/creatine-brain-health" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Creatine for Brain Health: How a Bodybuilding Supplement Boosts Cognition, Memory & Mental Energy",
  description:
    "RCT evidence and meta-analysis data show creatine supplementation improves working memory, reduces mental fatigue, and supports cognitive performance — especially in vegetarians and older adults.",
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
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/creatine-brain-health",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does creatine actually improve brain function?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multiple RCTs show measurable improvements in working memory and executive function. A 2023 meta-analysis by Prokopidis et al. (Nutrition Reviews) pooled 10 RCTs and found a significant effect size of g = 0.34 (95% CI: 0.12–0.56) for memory tasks. The effect is most consistent in vegetarians and adults over 65, who start from lower brain creatine levels.",
      },
    },
    {
      "@type": "Question",
      name: "How does creatine help the brain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine replenishes phosphocreatine (PCr), the brain's rapid ATP energy buffer. During intense cognitive work, the prefrontal cortex and hippocampus rapidly deplete local ATP — PCr recharges these stores within seconds. Creatine also exhibits neuroprotective properties: it reduces mitochondrial dysfunction and markers of neuronal damage in preclinical models of traumatic brain injury (Rae & Bröer, Neurochemistry International, 2015).",
      },
    },
    {
      "@type": "Question",
      name: "How much creatine do you need for brain benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most brain cognition RCTs used either 5g/day for 4–6 weeks (Rae et al., 2003) or 3–5g/day as a maintenance dose. There is no head-to-head trial comparing loading vs. maintenance for brain outcomes. A 2022 review by Forbes et al. (Nutrients) concluded that 3–5g/day is sufficient for long-term brain creatine saturation in most populations, with vegetarians potentially needing 4–6 weeks to see peak effects.",
      },
    },
    {
      "@type": "Question",
      name: "Do vegetarians benefit more from creatine for brain health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — consistently. Omnivores consume approximately 1–2g of creatine daily from meat and fish. Vegetarians receive near-zero dietary creatine, leaving brain and muscle PCr stores chronically below average. Benton & Donohoe (2011, British Journal of Nutrition) found significant memory improvements in vegetarians given creatine, with omnivores showing a non-significant trend. Rae et al. (2003) reported the same pattern — vegetarian participants drove the largest effect sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Does creatine help with mental fatigue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Watanabe et al. (2002, Neuroscience Research) found 8g/day for 5 days significantly reduced self-reported fatigue and prevented cognitive decline after 60 minutes of intensive mental calculation. Turner et al. (2015, Journal of Neuroscience) showed creatine loading maintained cognitive performance and cortical excitability during hypoxia — a validated model for severe mental fatigue. Effects appear strongest when cognitive demand is sustained.",
      },
    },
    {
      "@type": "Question",
      name: "Can creatine help with depression or mood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early mechanistic and observational evidence is intriguing but inconclusive. Allen (2012, Neuroscience & Biobehavioral Reviews) reviewed evidence linking brain creatine deficiency to depression-like symptoms and noted antidepressant properties in animal models. One small RCT found augmenting antidepressant treatment with creatine improved outcomes in treatment-resistant adolescent females. However, creatine is not a recognised treatment for any psychiatric condition, and dedicated human RCTs are limited.",
      },
    },
    {
      "@type": "Question",
      name: "Is creatine safe for long-term brain supplementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatine monohydrate has one of the strongest safety records of any supplement. A comprehensive review by Rawson & Venezia (Amino Acids, 2011) found no adverse effects on kidney or liver function at doses of 3–5g/day in healthy individuals, including the elderly. Gastrointestinal discomfort can occur with loading doses above 10g at once — splitting doses to 2.5–5g minimises this. Creatine is not recommended in individuals with pre-existing chronic kidney disease without medical supervision.",
      },
    },
  ],
};

export default function CreatineBrainHealthPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Creatine & Brain Health</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Evidence badge + meta line */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
            <span style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.12em", color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", letterSpacing: "0.12em" }}>ART-010 · Brain & Cognitive Health · 14 min read</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", letterSpacing: "0.12em" }}>May 2026</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1714", lineHeight: 1.1, marginBottom: 20 }}>
            Creatine for Brain Health:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>How a Bodybuilding Supplement Boosts Cognition, Memory & Mental Energy</em>
          </h1>

          {/* Lead paragraph */}
          <p style={{ fontSize: 17, color: "#3F4B43", lineHeight: 1.75, marginBottom: 28 }}>
            Creatine is best known for adding reps to your bench press — but a growing body of RCTs shows it also meaningfully improves working memory, reduces mental fatigue, and supports cognitive performance under stress. The mechanism is straightforward: your brain runs on ATP, and phosphocreatine is the fastest way to regenerate it. The groups with the most to gain — vegetarians and adults over 65 — are also the least likely to have adequate brain creatine stores.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {["Creatine", "Cognitive Health", "Working Memory", "Mental Fatigue", "Neuroprotection", "Vegetarian Nutrition"].map((tag) => (
              <span key={tag} style={{ padding: "3px 9px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 10, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em" }}>{tag}</span>
            ))}
          </div>

          {/* Author bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", paddingTop: 18, borderTop: "1px solid #E4E8E5" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, fontWeight: 700, color: "#0F7A5A", letterSpacing: "0.04em" }}>FLR</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7770", margin: "0 0 2px" }}>Written by</p>
                <Link href="/authors/fitlab-research-team" style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>
                  Fitlab Research Team
                </Link>
              </div>
            </div>
            <span style={{ color: "#E4E8E5", fontSize: 16 }}>·</span>
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7770", margin: "0 0 2px" }}>Evidence Standard</p>
              <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>Peer-reviewed citations only</p>
            </div>
            <span style={{ color: "#E4E8E5", fontSize: 16 }}>·</span>
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7770", margin: "0 0 2px" }}>Last Updated</p>
              <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, fontFamily: "var(--font-hanken), sans-serif" }}>May 27, 2026</p>
            </div>
          </div>

        </div>
      </div>

      {/* Key stats dark panel */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#1A1714", padding: "32px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 20 }}>Key Findings at a Glance</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 20 }}>
            {[
              { value: "g = 0.34", label: "Memory effect size across 10 RCTs", sub: "Prokopidis et al., Nutr Rev 2023" },
              { value: "g = 0.54", label: "Effect in adults over 65 years", sub: "Subgroup, Prokopidis 2023" },
              { value: "5 g/day", label: "Dose in landmark cognition trial", sub: "Rae et al., Proc R Soc 2003" },
              { value: "~0 g/day", label: "Dietary creatine from plant-based diet", sub: "Why vegetarians benefit most" },
              { value: "< 2 min", label: "Time to resynthesize brain PCr", sub: "Creatine–ATP shuttle mechanism" },
            ].map((stat) => (
              <div key={stat.value} style={{ borderLeft: "2px solid #0F7A5A", paddingLeft: 14 }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.55rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 4px" }}>{stat.value}</p>
                <p style={{ fontSize: 12, color: "rgba(242,235,217,0.7)", lineHeight: 1.4, margin: "0 0 4px" }}>{stat.label}</p>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.06em", margin: 0 }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Answer */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "28px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ borderLeft: "3px solid #1A6B3A", backgroundColor: "rgba(26,107,58,0.04)", padding: "16px 18px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Quick Answer</p>
            <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, margin: 0 }}>
              Yes — creatine supplementation has been shown to improve working memory and reduce mental fatigue in multiple double-blind RCTs. A 2023 meta-analysis pooling 10 trials found a significant effect size of g = 0.34 for memory outcomes in healthy adults, rising to g = 0.54 in those over 65. The mechanism is well understood: creatine replenishes the brain&apos;s phosphocreatine pool, maintaining ATP during cognitively demanding tasks. Evidence is strongest for vegetarians, older adults, and sleep-deprived individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px" }}>

        {/* § 01 — What is brain creatine? */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 01" figure="§" title="What Is" titleItalic="Brain Creatine?" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            The human brain accounts for roughly 2% of body weight but consumes approximately 20% of total resting energy — almost entirely as ATP. Unlike skeletal muscle, the brain cannot significantly increase blood glucose delivery on short notice. It relies instead on a local rapid-recharge mechanism: the phosphocreatine (PCr) shuttle.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            When a neuron fires, it hydrolyses ATP to ADP. The creatine kinase enzyme immediately transfers a phosphate group from PCr back to ADP, regenerating ATP within milliseconds — before slower metabolic pathways (glycolysis, oxidative phosphorylation) can respond. This makes PCr the brain&apos;s emergency power reserve during bursts of high cognitive demand (Rae & Bröer, Neurochemistry International, 2015).
          </p>

          {/* Brain creatine location grid */}
          <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", marginBottom: 10 }}>Where creatine operates in the brain</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 8, marginBottom: 20 }}>
            {[
              { site: "Prefrontal Cortex", effect: "Executive function, working memory, planning" },
              { site: "Hippocampus", effect: "Episodic memory formation and retrieval" },
              { site: "Cerebellum", effect: "Motor learning and cognitive coordination" },
              { site: "Neurons", effect: "Synaptic firing — ATP demand spikes 10-fold at active synapses" },
              { site: "Astrocytes", effect: "Energy buffering for surrounding neurons" },
              { site: "Mitochondria", effect: "PCr synthesised here via creatine kinase isozymes" },
            ].map((r) => (
              <div key={r.site} style={{ padding: "10px 12px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 6 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#0F7A5A", marginBottom: 4, textTransform: "uppercase" }}>{r.site}</p>
                <p style={{ fontSize: 11, color: "#3F4B43", lineHeight: 1.5, margin: 0 }}>{r.effect}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>
            Brain creatine is synthesised endogenously in small amounts and absorbed from the diet — primarily from red meat and fish. Vegetarians and vegans rely entirely on endogenous synthesis, which produces approximately 1g/day — roughly half what mixed-diet omnivores obtain through food (Roschel et al., Nutrients, 2021). This dietary gap is the single most important predictor of who benefits most from supplementation.
          </p>
        </section>

        {/* § 02 — Landmark RCT */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 02" figure="§" title="The Landmark" titleItalic="Cognition Trial" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            The study that established creatine&apos;s cognitive credentials was a double-blind, placebo-controlled crossover RCT by Rae, Digney, McEwan, and Bates, published in Proceedings of the Royal Society B in 2003. It remains the most cited creatine–cognition RCT two decades later.
          </p>

          {/* Trial card */}
          <div style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
            <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", letterSpacing: "0.12em", fontWeight: 700 }}>RAE ET AL. · 2003</span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>PROC R SOC LOND B · DOUBLE-BLIND CROSSOVER RCT</span>
            </div>
            <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "Population", value: "45 healthy adults (mixed omnivores & vegetarians)" },
                { label: "Intervention", value: "Creatine monohydrate 5 g/day for 6 weeks" },
                { label: "Design", value: "Double-blind, placebo-controlled, crossover" },
                { label: "Primary Outcomes", value: "Backward Digit Span (working memory), Ravens Progressive Matrices (intelligence)" },
                { label: "Result", value: "Significant improvement in intelligence test scores and working memory (p < 0.0001)" },
                { label: "Key Finding", value: "Effect driven largely by vegetarian subgroup; omnivores showed smaller non-sig trend" },
              ].map((d) => (
                <div key={d.label}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>{d.label}</p>
                  <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>
            The crossover design controls for individual differences in baseline intelligence, making the result more reliable. The finding that vegetarians drove the largest gains directly supports the PCr-depletion hypothesis: those with the most to gain from extra dietary creatine showed the biggest cognitive improvements.
          </p>
        </section>

        {/* § 03 — Meta-analysis */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 03" figure="§" title="Meta-Analysis:" titleItalic="What 10 RCTs Show Together" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            Individual trials can be underpowered or biased. The most rigorous way to assess the totality of evidence is via systematic meta-analysis. Two independent groups have now done this for creatine and memory — and both reach the same conclusion.
          </p>

          {/* Meta-analysis cards */}
          {[
            {
              title: "Prokopidis et al. (2023) — Nutrition Reviews",
              pmid: "35984306",
              details: [
                { label: "Trials pooled", value: "10 RCTs" },
                { label: "Participants", value: "~730 healthy adults" },
                { label: "Memory effect (all adults)", value: "g = 0.34 (95% CI: 0.12–0.56) — statistically significant" },
                { label: "Memory effect (adults ≥ 60 yr)", value: "g = 0.54 — clinically meaningful" },
                { label: "Conclusion", value: "Creatine supplementation significantly improves memory performance in healthy individuals" },
              ],
            },
            {
              title: "Forbes et al. (2022) — Nutrients",
              pmid: "35267907",
              details: [
                { label: "Scope", value: "Systematic review of creatine and brain function (not limited to memory)" },
                { label: "Cognitive domains improved", value: "Working memory, processing speed, mental fatigue resistance" },
                { label: "Subgroups with strongest effect", value: "Vegetarians, sleep-deprived individuals, older adults" },
                { label: "Recommended dose", value: "3–5g/day; loading not required for brain benefits" },
                { label: "Conclusion", value: "Broad support for creatine as a cognitive support supplement, particularly under metabolic stress" },
              ],
            },
          ].map((card) => (
            <div key={card.title} style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ backgroundColor: "#F2F8F4", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{card.title}</span>
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${card.pmid}/`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#0F7A5A", letterSpacing: "0.1em" }}>PubMed {card.pmid} ↗</a>
              </div>
              <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {card.details.map((d) => (
                  <div key={d.label}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>{d.label}</p>
                    <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginTop: 8 }}>
            A standardised effect size of g = 0.34 is considered a small-to-moderate effect in cognitive psychology. For context, this is comparable to the memory improvement seen with aerobic exercise interventions or omega-3 supplementation in healthy adults. An effect size of g = 0.54 in older adults is notably larger — equivalent to roughly a year of cognitive aging reversed.
          </p>
        </section>

        {/* § 04 — Mental fatigue & stress */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 04" figure="§" title="Mental Fatigue" titleItalic="& Cognitive Stress" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            The clearest signal in creatine cognition research is not baseline improvement in rested, well-nourished young adults — it is the reduction in cognitive decline under metabolic stress: prolonged mental effort, sleep deprivation, and hypoxia.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {[
              {
                num: "01",
                title: "Prolonged mental calculation (Watanabe et al., 2002)",
                body: "In a crossover RCT of 24 healthy adults, Watanabe, Kato, and Kato (Neuroscience Research) found that 8g/day creatine for 5 days significantly reduced self-reported mental fatigue during a 1-hour serial calculation task and prevented the progressive decline in accuracy seen with placebo. Cerebral oxygenation (measured via near-infrared spectroscopy) was also better maintained in the creatine group.",
              },
              {
                num: "02",
                title: "Hypoxia model — oxygen deprivation (Turner et al., 2015)",
                body: "Turner, Byblow, and Gant (Journal of Neuroscience) used hypoxic conditions (inspired oxygen reduced to ~12%) to model extreme metabolic brain stress. Creatine loading (20g/day for 7 days) maintained corticomotor excitability and cognitive task performance significantly better than placebo during oxygen deprivation. Hypoxia is a validated proxy for the metabolic state of prolonged severe mental fatigue.",
              },
              {
                num: "03",
                title: "Sleep deprivation (McMorris et al., 2006 meta-analysis support)",
                body: "The meta-analysis by McMorris and colleagues identified sleep deprivation as a condition in which creatine supplementation most reliably improves cognitive performance — consistent with the hypothesis that creatine benefits are largest when the brain's normal energy supply is compromised. This has particular relevance for shift workers, medical trainees, and athletes in multi-day competition.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: "3px solid #1A6B3A", backgroundColor: "rgba(26,107,58,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6 }}>Clinical Interpretation</p>
            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
              The pattern across these studies is consistent: creatine does not dramatically sharpen the cognition of a fully rested, well-fed young adult — but it does reliably protect performance when the brain is under energy stress. The practical takeaway is that creatine&apos;s cognitive benefit is most meaningful for anyone regularly operating in cognitively demanding, energy-compromised states.
            </p>
          </div>
        </section>

        {/* § 05 — Who benefits most */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 05" figure="§" title="Who Benefits" titleItalic="Most?" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Not everyone responds equally to creatine supplementation. Three populations consistently show the largest cognitive gains across trials:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 24 }}>
            {[
              {
                group: "Vegetarians & Vegans",
                evidence: "Strong",
                color: "#1A6B3A",
                bg: "rgba(26,107,58,0.06)",
                border: "rgba(26,107,58,0.2)",
                detail: "Near-zero dietary creatine intake leaves brain PCr chronically lower than in meat-eaters. Both Rae et al. (2003) and Benton & Donohoe (2011) show vegetarians drive the largest effect sizes in mixed-diet trials. This is the single most predictive factor for response.",
              },
              {
                group: "Adults Over 65",
                evidence: "Strong",
                color: "#1A6B3A",
                bg: "rgba(26,107,58,0.06)",
                border: "rgba(26,107,58,0.2)",
                detail: "Brain creatine content declines with age, and older adults show reduced endogenous synthesis capacity. The Prokopidis (2023) meta-analysis subgroup found g = 0.54 in adults ≥ 60 years — the largest effect in any subgroup. McMorris et al. (2007) found ~15% improvement in working memory in adults aged 67–80.",
              },
              {
                group: "Sleep-Deprived Individuals",
                evidence: "Moderate",
                color: "#92620A",
                bg: "rgba(146,98,10,0.06)",
                border: "rgba(146,98,10,0.2)",
                detail: "Consistent sleep deprivation depletes brain PCr by impairing restoration processes that normally occur during slow-wave sleep. Creatine supplementation partially compensates for this energy deficit. Evidence is drawn from observational data and the fatigue-stress RCTs — no dedicated sleep-deprivation + creatine RCT has been completed in healthy humans.",
              },
              {
                group: "Athletes in Heavy Training",
                evidence: "Moderate",
                color: "#92620A",
                bg: "rgba(146,98,10,0.06)",
                border: "rgba(146,98,10,0.2)",
                detail: "High-volume endurance or strength training increases total creatine turnover, potentially lowering cerebral PCr reserves. Observational data suggests athletes in heavy training blocks may show more cognitive benefit than those in maintenance phases, though direct RCT evidence for this specific population is limited.",
              },
            ].map((item) => (
              <div key={item.group} style={{ padding: "18px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.group}</p>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, color: item.color, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "white", padding: "2px 7px", borderRadius: 3, border: `1px solid ${item.border}`, flexShrink: 0, marginLeft: 8 }}>{item.evidence}</span>
                </div>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>
            Young, rested omnivores eating 100g+ of red meat daily already maintain near-maximal brain creatine saturation. For them, the Avgerinos et al. (2018) systematic review found effects were non-significant at p = 0.06 — a trend, not a reliable improvement. Managing expectations by dietary and age status is important when evaluating whether creatine is worth adding.
          </p>
        </section>

        {/* § 06 — Dosing */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 06" figure="§" title="Dosing for" titleItalic="Brain Health" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Dosing for cognitive outcomes differs slightly from athletic performance protocols. Key differences: brain creatine saturation is achieved more slowly than muscle saturation, and loading phases (20g/day for 5–7 days) are optional rather than necessary.
          </p>

          {/* Dose table */}
          <div style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
            <div style={{ backgroundColor: "#1A1714", padding: "10px 20px" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#0F7A5A", letterSpacing: "0.14em", textTransform: "uppercase" }}>Dosing Comparison — Brain Outcomes</span>
            </div>
            <div style={{ backgroundColor: "#F6F8F6" }}>
              {[
                { protocol: "Maintenance (3–5 g/day)", onset: "3–4 weeks to full brain saturation", used_in: "Most 4–6 week RCTs; Forbes et al. recommendation", notes: "Preferred for long-term use. No GI load. Practical." },
                { protocol: "Loading (20 g/day, 4×5g, 5–7 days)", onset: "5–7 days to full saturation", used_in: "Rae et al. 2003; Turner et al. 2015", notes: "Useful when faster cognitive benefit is needed. Mild GI discomfort in some individuals." },
                { protocol: "High-dose vegetarian (5–10 g/day)", onset: "2–3 weeks", used_in: "Benton & Donohoe 2011", notes: "May be appropriate for vegetarians with high cognitive demands; no additional safety concerns established." },
              ].map((row, i) => (
                <div key={row.protocol} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.4fr", gap: 12, padding: "14px 20px", borderTop: i === 0 ? "none" : "1px solid #F2F8F4", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Protocol</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", margin: 0 }}>{row.protocol}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Brain Saturation</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", margin: 0 }}>{row.onset}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Used In</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", margin: 0 }}>{row.used_in}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Notes</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", margin: 0 }}>{row.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 12 }}>
            <strong style={{ color: "#1A1714" }}>Timing:</strong> There is no strong evidence that timing creatine consumption relative to meals or cognitive tasks matters for brain outcomes, unlike muscle outcomes where pre- or post-workout timing has modest support. Creatine monohydrate is equally effective taken at any time of day.
          </p>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>
            <strong style={{ color: "#1A1714" }}>Form:</strong> Creatine monohydrate remains the most studied form for both athletic and cognitive outcomes. No published RCT has demonstrated that creatine HCl, buffered creatine, or creatine ethyl ester produces superior brain creatine loading compared to monohydrate (Forbes et al., 2022).
          </p>
        </section>

        {/* § 07 — Emerging areas */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 07" figure="§" title="Emerging Areas:" titleItalic="Mood, Depression & Neuroprotection" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Beyond cognition, creatine is being investigated for mental health and neuroprotective applications. The evidence base here is less mature than for memory — most findings are mechanistic or based on small trials — but the signals are consistent enough to justify monitoring.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {[
              {
                num: "01",
                title: "Depression & mood (Allen, 2012; Kondo et al., 2011)",
                body: "Brain creatine deficiency has been observed in depressed patients using phosphorus MR spectroscopy (31P-MRS). Allen's 2012 review in Neuroscience & Biobehavioral Reviews synthesised evidence that creatine deficiency impairs serotonin and dopamine synthesis — both dependent on ATP-consuming methylation reactions. One small RCT found that adding creatine 4g/day to SSRI treatment accelerated response in adolescent females with treatment-resistant depression (Kondo et al., 2011). This is a preliminary finding, not a treatment recommendation.",
              },
              {
                num: "02",
                title: "Traumatic brain injury & neuroprotection (Rae & Bröer, 2015)",
                body: "Phosphocreatine depletion is an early event in traumatic brain injury (TBI), preceding the cascade of neuronal damage. Animal studies consistently show creatine supplementation before TBI reduces lesion volume and neurological deficit. In a clinical study of children with severe TBI, creatine supplementation (0.4g/kg/day for 6 months) significantly improved cognitive and behavioural outcomes vs. placebo (Sakellaris et al., 2006). Adult TBI RCT data is lacking.",
              },
              {
                num: "03",
                title: "Neurodegenerative conditions — evidence limited",
                body: "Mechanistic studies suggest creatine may slow mitochondrial dysfunction and neuronal energy failure in Parkinson's and Huntington's disease. However, the large NINDS-funded TREND-HD trial (2015) found no benefit of creatine 10g/day in early Huntington's disease over 18 months. Smaller Parkinson's studies showed mixed results. Current evidence does not support creatine as a treatment for neurodegenerative conditions.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: "3px solid #92620A", backgroundColor: "rgba(146,98,10,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 6 }}>Evidence Level: Moderate for mood / Limited for neurodegeneration</p>
            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
              The mood and neuroprotection data are mechanistically compelling but lack the large, replicated RCTs available for memory and fatigue outcomes. These are research areas to watch — not current clinical indications.
            </p>
          </div>
        </section>

        {/* § 08 — Safety */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 08" figure="§" title="Safety &" titleItalic="Common Myths" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Creatine monohydrate has been continuously studied since the 1990s. Several persistent myths have been thoroughly investigated and refuted.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              {
                myth: "Creatine damages the kidneys",
                reality: "Creatine increases serum creatinine (a metabolite of creatine, not a kidney marker) — which can appear to mimic elevated kidney stress on standard blood panels. However, kidney function markers (GFR, cystatin C, BUN) are unaffected by creatine supplementation in healthy individuals. Rawson & Venezia (Amino Acids, 2011) reviewed 14 long-term studies (up to 5 years) and found no adverse kidney effects in healthy adults. Note: creatine is not recommended for those with pre-existing chronic kidney disease without medical supervision.",
              },
              {
                myth: "Creatine causes hair loss",
                reality: "This claim derives from a single 2009 RCT by van der Merwe et al. showing elevated dihydrotestosterone (DHT) levels in college rugby players on creatine. However, the trial did not measure hair loss or follicle health, no subsequent study has replicated the DHT finding, and DHT elevation alone does not equate to alopecia. No RCT has documented creatine-caused hair loss.",
              },
              {
                myth: "You must cycle creatine on and off",
                reality: "There is no evidence that cycling creatine is necessary or beneficial. Endogenous creatine synthesis downregulates slightly during supplementation but returns to normal within weeks of stopping. Long-term continuous supplementation (up to 5 years studied) shows no accumulating adverse effects (Rawson & Venezia, 2011).",
              },
              {
                myth: "Creatine is a steroid or PED",
                reality: "Creatine is not a steroid, hormone, or controlled substance. It is a naturally occurring compound found in food and synthesised endogenously. It is not banned by WADA, the IOC, or any major sporting federation. It is approved for over-the-counter sale globally.",
              },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 8, overflow: "hidden", backgroundColor: "#F6F8F6" }}>
                <div style={{ backgroundColor: "#F2F8F4", padding: "10px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#8A4020", textTransform: "uppercase" }}>Myth</span>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", margin: 0 }}>{item.myth}</p>
                </div>
                <div style={{ padding: "12px 16px", borderTop: "1px solid #E4E8E5" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.12em", color: "#1A6B3A", textTransform: "uppercase", marginBottom: 6 }}>Reality</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{item.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Line */}
        <section style={{ marginBottom: 56, backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 36px 32px", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 16 }}>Bottom Line</p>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 20 }}>
              Creatine is the best-evidenced cognitive supplement for people who start from a deficit — and among the safest compounds studied.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "A 2023 meta-analysis (Prokopidis et al., Nutrition Reviews) pooled 10 RCTs and found creatine significantly improves memory (g = 0.34 overall; g = 0.54 in adults over 65) — a small-to-moderate effect that rivals aerobic exercise interventions.",
                "The mechanism is established: creatine replenishes phosphocreatine, the brain's millisecond-speed ATP buffer. Effects are largest when brain PCr is chronically low — in vegetarians, older adults, sleep-deprived individuals, and athletes in heavy training blocks.",
                "Mental fatigue resistance is creatine's most consistent cognitive benefit. Two separate RCTs (Watanabe et al. 2002; Turner et al. 2015) showed creatine preserved cognitive performance during prolonged calculation tasks and hypoxic conditions where placebo participants degraded significantly.",
                "Safety concerns about kidney damage, hair loss, and off-cycling requirements are not supported by the evidence. Long-term studies up to 5 years in healthy adults show no adverse effects at 3–5g/day.",
                "Practical dose: 3–5g/day of creatine monohydrate, no loading required for brain benefits, taken at any time. Vegetarians and adults over 65 are likely to see the most meaningful improvements.",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", flexShrink: 0, marginTop: 3 }}>→</span>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.8)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 09" figure="§" title="Frequently" titleItalic="Asked Questions" size="md" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 8, backgroundColor: "#F6F8F6", overflow: "hidden" }}>
                <summary style={{ padding: "16px 20px", fontFamily: "var(--font-hanken), sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1714", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span>{item.name}</span>
                  <span style={{ color: "#0F7A5A", fontSize: 18, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "0 20px 16px", borderTop: "1px solid #F2F8F4" }}>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: "14px 0 0" }}>{item.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* § 10 — Clinical References */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 10" figure="§" title="Clinical" titleItalic="References" size="md" />
          <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", marginBottom: 14 }}>All citations link to the primary source on PubMed or publisher DOI.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                text: "Rae C, Digney AL, McEwan SR, Bates TC. Oral creatine monohydrate supplementation improves brain performance: a double-blind, placebo-controlled, cross-over trial. Proc R Soc Lond B Biol Sci. 2003;270(1529):2147–2150.",
                url: "https://pubmed.ncbi.nlm.nih.gov/14561278/",
              },
              {
                text: "Watanabe A, Kato N, Kato T. Effects of creatine on mental fatigue and cerebral hemoglobin oxygenation. Neurosci Res. 2002;42(4):279–285.",
                url: "https://pubmed.ncbi.nlm.nih.gov/11985880/",
              },
              {
                text: "McMorris T, Mielcarz G, Harris RC, Swain JP, Howard A. Creatine supplementation and cognitive performance in elderly individuals. Neuropsychol Dev Cogn B Aging Neuropsychol Cogn. 2007;14(5):517–528.",
                url: "https://pubmed.ncbi.nlm.nih.gov/17828627/",
              },
              {
                text: "Benton D, Donohoe R. The influence of creatine supplementation on the cognitive functioning of vegetarians and omnivores. Br J Nutr. 2011;105(7):1100–1105.",
                url: "https://pubmed.ncbi.nlm.nih.gov/21118604/",
              },
              {
                text: "Avgerinos KI, Spyrou N, Bougioukas KI, Kapogiannis D. Effects of creatine supplementation on cognitive function of healthy individuals: a systematic review of randomized controlled trials. Exp Gerontol. 2018;108:166–173.",
                url: "https://pubmed.ncbi.nlm.nih.gov/29704637/",
              },
              {
                text: "Forbes SC, Cordingley DM, Cornish SM, et al. Effects of Creatine Supplementation on Brain Function and Health. Nutrients. 2022;14(5):921.",
                url: "https://pubmed.ncbi.nlm.nih.gov/35267907/",
              },
              {
                text: "Roschel H, Gualano B, Ostojic SM, Rawson ES. Creatine Supplementation and Brain Health. Nutrients. 2021;13(2):586.",
                url: "https://pubmed.ncbi.nlm.nih.gov/33578876/",
              },
              {
                text: "Prokopidis K, Giannos P, Triantafyllidis KK, et al. Effects of creatine supplementation on memory in healthy individuals: a systematic review and meta-analysis of randomized controlled trials. Nutr Rev. 2023;81(4):416–427.",
                url: "https://pubmed.ncbi.nlm.nih.gov/35984306/",
              },
              {
                text: "Turner CE, Byblow WD, Gant N. Creatine supplementation enhances corticomotor excitability and cognitive performance during oxygen deprivation. J Neurosci. 2015;35(4):1773–1780.",
                url: "https://pubmed.ncbi.nlm.nih.gov/25632147/",
              },
              {
                text: "Rawson ES, Venezia AC. Use of creatine in the elderly and evidence for effects on cognitive function in young and old. Amino Acids. 2011;40(5):1349–1362.",
                url: "https://pubmed.ncbi.nlm.nih.gov/21394604/",
              },
              {
                text: "Rae CD, Bröer S. Creatine as a booster for human brain function. How might it work? Neurochem Int. 2015;89:249–259.",
                url: "https://pubmed.ncbi.nlm.nih.gov/26291867/",
              },
              {
                text: "Allen PJ. Creatine metabolism and psychiatric disorders: Does creatine supplementation have therapeutic value? Neurosci Biobehav Rev. 2012;36(5):1442–1462.",
                url: "https://pubmed.ncbi.nlm.nih.gov/22465051/",
              },
            ].map((ref, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", flexShrink: 0, marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
                  {ref.text}{" "}
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>PubMed ↗</a>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related content */}
        <section>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 16 }}>Related Reading</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {[
              { href: "/research/sleep-duration-biological-aging", label: "Sleep & Biological Aging", sub: "How 6.4–7.8 hrs links to slower aging" },
              { href: "/ingredients/creatine", label: "Creatine Ingredient Profile", sub: "Mechanism, loading protocols & dosing" },
              { href: "/blog/plant-foods-menopause", label: "Plant-Forward Eating Guide", sub: "Nutrition strategies including creatine gap" },
              { href: "/research/glp1-beyond-weight-loss", label: "GLP-1 Beyond Weight Loss", sub: "Cognitive and cardiovascular benefits" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="hub-card" style={{ display: "block", padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 8, textDecoration: "none", backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{link.label}</p>
                <p style={{ fontSize: 11, color: "#6B7770", margin: 0 }}>{link.sub}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
