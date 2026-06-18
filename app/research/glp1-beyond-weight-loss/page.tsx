import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "GLP-1 Benefits Beyond Weight Loss: Heart, Brain & Mood",
  description: "Ozempic and Wegovy do more than help you lose weight. Research shows GLP-1 medications reduce cardiovascular risk, blood pressure, migraines, and depression.",
  alternates: { canonical: "/research/glp1-beyond-weight-loss" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GLP-1 Medications Beyond Weight Loss: Cardiovascular, Neurological, and Mental Health Benefits",
  description: "Clinical trial evidence shows GLP-1 receptor agonists like semaglutide and tirzepatide reduce cardiovascular events, lower blood pressure, improve depression scores, and may prevent kidney failure.",
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
    "@id": "https://fitlabreviews.com/research/glp1-beyond-weight-loss",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do GLP-1 drugs reduce heart attack risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The SELECT trial (2023), which enrolled 17,604 overweight adults with pre-existing cardiovascular disease, found semaglutide 2.4mg reduced major adverse cardiovascular events (heart attack, stroke, cardiovascular death) by 20% compared to placebo over a 34-month period — independent of the weight lost.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ozempic or Wegovy help with depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early evidence is promising but not conclusive. A subanalysis of the SELECT trial found participants on semaglutide reported significantly greater improvements in quality-of-life and mood scores compared to placebo. GLP-1 receptors are expressed in brain reward circuits, and rodent studies show direct antidepressant-like effects — but dedicated RCTs in humans with depression are still ongoing.",
      },
    },
    {
      "@type": "Question",
      name: "Do GLP-1 drugs lower blood pressure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meta-analyses of GLP-1 trials consistently show systolic blood pressure reductions of 3–6 mmHg. Some of this is attributable to weight loss, but direct vascular effects — including reduced arterial stiffness and improved endothelial function — appear to contribute independently.",
      },
    },
    {
      "@type": "Question",
      name: "Can semaglutide help with migraines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preclinical and small observational data suggest GLP-1 agonists may reduce migraine frequency. Semaglutide appears to modulate CGRP (calcitonin gene-related peptide) signalling — the same pathway targeted by modern anti-migraine drugs like rimegepant and erenumab. Dedicated migraine RCTs are underway as of 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What did the FLOW trial find about kidneys and GLP-1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FLOW trial (2024) enrolled 3,533 adults with type 2 diabetes and chronic kidney disease. Semaglutide reduced the composite kidney endpoint (kidney failure, doubling of creatinine, cardiovascular death) by 24% vs placebo. The trial was stopped early due to overwhelming benefit.",
      },
    },
    {
      "@type": "Question",
      name: "Are these benefits only from weight loss, or is it the drug itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both mechanisms contribute, but the drug itself has independent effects. The SELECT trial enrolled only people without diabetes, and cardiovascular benefits persisted even after adjusting for weight change. GLP-1 receptors are found on heart muscle, blood vessels, neurons, and immune cells — all plausible sites for direct drug action beyond energy balance.",
      },
    },
  ],
};

export default function GLP1BeyondWeightLossPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>GLP-1 Beyond Weight Loss</span>
        </div>
      </div>

      {/* Medical disclaimer banner */}
      <div style={{ backgroundColor: "rgba(138,64,32,0.06)", borderBottom: "1px solid rgba(138,64,32,0.2)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#8A4020", textTransform: "uppercase", marginTop: 1, flexShrink: 0 }}>Medical Notice</span>
          <p style={{ fontSize: 12, color: "#8A4020", lineHeight: 1.5, margin: 0 }}>
            GLP-1 medications are prescription drugs. This article summarises published clinical trial evidence for educational purposes only. Consult a licensed prescriber before starting, stopping, or changing any medication. See our <Link href="/medical-disclaimer" style={{ color: "#8A4020", fontWeight: 600, textDecoration: "underline" }}>Medical Disclaimer</Link>.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* Meta line */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
            <span style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.12em", color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", letterSpacing: "0.12em" }}>ART-008 · GLP-1 Research · 15 min read</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", letterSpacing: "0.12em" }}>May 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1714", lineHeight: 1.1, marginBottom: 20 }}>
            GLP-1 Medications Beyond Weight Loss:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>Heart, Brain, Blood Pressure & More</em>
          </h1>

          <p style={{ fontSize: 17, color: "#3F4B43", lineHeight: 1.75, marginBottom: 28 }}>
            Ozempic and Wegovy have become household names for weight loss — but the drugs behind them are doing far more inside your body. A growing body of clinical trial evidence shows GLP-1 receptor agonists reduce cardiovascular events, lower blood pressure, protect kidneys, ease migraine symptoms, and show early promise for depression and sleep apnea.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {["GLP-1", "Semaglutide", "Cardiovascular", "Blood Pressure", "Mental Health", "Migraine", "Kidney Health"].map((tag) => (
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

      {/* Key stats panel */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#1A1714", padding: "32px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 20 }}>Key Trial Findings at a Glance</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 20 }}>
            {[
              { value: "20%", label: "Cardiovascular event reduction", sub: "SELECT trial, semaglutide 2.4mg" },
              { value: "24%", label: "Kidney failure reduction", sub: "FLOW trial, CKD patients" },
              { value: "3–6 mmHg", label: "Systolic BP reduction", sub: "Meta-analysis, multiple trials" },
              { value: "~50%", label: "Alcohol relapse reduction", sub: "Observational, reward modulation" },
            ].map((stat) => (
              <div key={stat.value} style={{ borderLeft: "2px solid #0F7A5A", paddingLeft: 14 }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 4px" }}>{stat.value}</p>
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
          <div style={{ borderLeft: "3px solid #1A6B3A", paddingLeft: 18, backgroundColor: "rgba(26,107,58,0.04)", padding: "16px 18px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Quick Answer</p>
            <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, margin: 0 }}>
              GLP-1 receptor agonists have demonstrated clinically meaningful benefits beyond weight loss in large RCTs: a 20% reduction in major cardiovascular events (SELECT, 2023), a 24% reduction in kidney failure progression (FLOW, 2024), consistent blood pressure reductions of 3–6 mmHg, and early evidence for migraine relief, depression improvement, and alcohol craving reduction. These effects appear at least partly independent of weight loss.
            </p>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px" }}>

        {/* § 01: How GLP-1 drugs work beyond appetite */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 01" figure="§" title="Beyond the Gut:" titleItalic="How GLP-1 receptors work throughout the body" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            GLP-1 (glucagon-like peptide-1) is a hormone naturally released by intestinal cells after eating. It slows gastric emptying, signals fullness to the brain, and stimulates insulin release. But GLP-1 receptors aren't limited to the gut and pancreas — they're expressed across the cardiovascular system, kidneys, brain, liver, and immune cells.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Pharmaceutical GLP-1 agonists like semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) flood these receptors far more intensely and persistently than the body's own hormone. That's why their effects extend well beyond appetite — and why researchers have started running dedicated trials for cardiovascular, renal, and neurological endpoints.
          </p>
          <div style={{ backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 10, padding: "18px 22px", marginTop: 8 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>GLP-1 Receptor Locations</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
              {[
                { site: "Heart muscle", effect: "Reduced inflammation, direct cardioprotection" },
                { site: "Blood vessels", effect: "Improved endothelial function, lower BP" },
                { site: "Kidneys", effect: "Reduced fibrosis, improved filtration" },
                { site: "Brain (hypothalamus, brainstem)", effect: "Appetite suppression, reward modulation" },
                { site: "Dopamine circuits", effect: "Reduced craving for food, alcohol, nicotine" },
                { site: "Liver", effect: "Reduced fat accumulation (MASLD/NASH)" },
              ].map((r) => (
                <div key={r.site} style={{ padding: "10px 12px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 6 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#0F7A5A", marginBottom: 4, textTransform: "uppercase" }}>{r.site}</p>
                  <p style={{ fontSize: 11, color: "#3F4B43", lineHeight: 1.5, margin: 0 }}>{r.effect}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* § 02: Cardiovascular */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 02" figure="§" title="Cardiovascular Protection:" titleItalic="The SELECT trial evidence" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            The most compelling evidence for GLP-1 benefits beyond weight loss comes from the <strong style={{ color: "#1A1714" }}>SELECT trial</strong>, published in the <em>New England Journal of Medicine</em> in 2023 (Lincoff et al.).
          </p>

          {/* Trial card */}
          <div style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
            <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", letterSpacing: "0.12em", fontWeight: 700 }}>SELECT TRIAL · 2023</span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>NEJM · Phase 3 RCT</span>
            </div>
            <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "Population", value: "17,604 adults with obesity, no diabetes, pre-existing CVD" },
                { label: "Drug", value: "Semaglutide 2.4mg weekly (Wegovy dose)" },
                { label: "Duration", value: "~34 months (median)" },
                { label: "Primary outcome", value: "MACE: CV death, non-fatal heart attack, non-fatal stroke" },
                { label: "Result", value: "20% relative risk reduction in MACE vs placebo (HR 0.80)" },
                { label: "Weight-independence", value: "Benefit persisted after statistical adjustment for weight change" },
              ].map((d) => (
                <div key={d.label}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>{d.label}</p>
                  <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 16 }}>
            Crucially, SELECT enrolled adults without type 2 diabetes — the typical GLP-1 indication — which isolates weight-loss and direct drug effects from the glycaemic benefits that confound earlier CVOT trials like LEADER and SUSTAIN-6.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8 }}>
            Proposed mechanisms for the cardiovascular benefit include: direct anti-inflammatory signalling via GLP-1 receptors on macrophages and cardiac muscle cells, reductions in arterial stiffness, improved endothelial nitric oxide synthesis, and lower systolic blood pressure.
          </p>
        </section>

        {/* § 03: Blood pressure */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 03" figure="§" title="Blood Pressure:" titleItalic="Consistent reductions across trials" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            A 2021 meta-analysis by Sposito et al. pooling data from 60 GLP-1 trials found a mean systolic blood pressure reduction of <strong style={{ color: "#1A1714" }}>−3.57 mmHg</strong> (95% CI: −4.09 to −3.04) compared to placebo or active comparators. Diastolic pressure dropped by approximately −1.5 mmHg.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            While modest in absolute terms, even a 3 mmHg reduction in population systolic blood pressure is estimated to reduce stroke mortality by ~8% and coronary heart disease mortality by ~5% (Whelton et al., 2002 meta-analysis). The effect is seen in hypertensive patients and those with normal baseline BP.
          </p>
          <div style={{ backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 10, padding: "20px 24px" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 12 }}>What's driving the BP reduction?</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { n: "01", mechanism: "Weight loss", detail: "Lower body mass reduces cardiac output demand — partly explanatory but not sufficient alone" },
                { n: "02", mechanism: "Natriuresis (salt excretion)", detail: "GLP-1 receptors on kidney tubules promote sodium excretion, directly reducing blood volume and pressure" },
                { n: "03", mechanism: "Endothelial function", detail: "Improved nitric oxide synthesis in artery walls increases vasodilation" },
                { n: "04", mechanism: "Reduced sympathetic tone", detail: "Central GLP-1 signalling lowers noradrenaline release, reducing vasoconstriction" },
              ].map((m) => (
                <div key={m.n} style={{ display: "flex", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#0F7A5A", flexShrink: 0, marginTop: 2 }}>{m.n}</span>
                  <div>
                    <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1714" }}>{m.mechanism}</span>
                    <span style={{ fontSize: 13, color: "#3F4B43" }}> — {m.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* § 04: Migraine */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 04" figure="§" title="Migraine Relief:" titleItalic="The CGRP connection" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Migraine affects roughly 12% of the global population. Modern preventive treatments like erenumab (Aimovig) and rimegepant (Nurtec) work by blocking CGRP — calcitonin gene-related peptide, the key mediator of migraine pain.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Here's the connection to GLP-1: semaglutide has been shown in preclinical studies to suppress CGRP release from trigeminal nerve terminals — the same pathway targeted by anti-CGRP biologics. A 2022 study by Deligianni et al. reported that semaglutide reduced CGRP-induced dilation of cranial arteries in rodent models, suggesting a direct anti-migraine mechanism.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            Observational clinical reports followed: several patients on GLP-1 agonists for weight management or diabetes reported a significant reduction in migraine frequency and severity. A Danish register study (Kokoti et al., 2023) found GLP-1 agonist users had lower rates of triptan prescription fills compared to matched controls, suggesting reduced acute migraine attacks.
          </p>
          <div style={{ borderLeft: "3px solid #92620A", paddingLeft: 18, backgroundColor: "rgba(146,98,10,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 6 }}>Evidence Level: Moderate</p>
            <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>
              Dedicated migraine RCTs are underway (the LOSE-MIGRAINE trial, NCT05765981) as of 2026. Current evidence rests on preclinical mechanistic data and observational studies — promising but not yet sufficient to recommend GLP-1 drugs specifically for migraine prevention.
            </p>
          </div>
        </section>

        {/* § 05: Mental health */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 05" figure="§" title="Mental Health & Mood:" titleItalic="Reward circuits and depression" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            GLP-1 receptors are expressed in the nucleus accumbens, ventral tegmental area, and prefrontal cortex — brain regions central to motivation, mood, and reward processing. This anatomical reality has fuelled intense interest in GLP-1 effects on depression, anxiety, and addiction.
          </p>

          {/* Depression evidence */}
          <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Depression</h3>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            A pre-specified subanalysis of the SELECT trial found that semaglutide produced significantly greater improvements in the SF-36 mental health component score compared to placebo, with effect sizes independent of weight change. In separate datasets, patients starting GLP-1 agonists for diabetes showed lower rates of antidepressant initiation at 12 months vs matched controls (Wium-Andersen et al., 2023, <em>JAMA Network Open</em>).
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 24 }}>
            A rodent study by Hölscher (2014) in <em>CNS Drugs</em> demonstrated direct antidepressant-like effects of GLP-1 analogs independent of food intake — GLP-1 signalling in the hypothalamus appears to modulate corticotropin-releasing factor (CRF), a key stress hormone involved in major depression.
          </p>

          {/* Addiction / alcohol */}
          <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Alcohol Use and Addiction</h3>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Multiple observational studies and anecdotal reports from patients and addiction clinics have noted that GLP-1 agonists dramatically reduce cravings for alcohol, nicotine, and compulsive eating behaviours. Mechanistically, GLP-1 signalling blunts dopamine release in the nucleus accumbens in response to rewarding stimuli — effectively dampening the "wanting" signal that drives cravings.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 16 }}>
            An observational study (Klausen et al., 2022, <em>Addiction</em>) found that GLP-1 agonist-treated patients showed approximately 50% lower relapse rates over 12 months compared to matched controls not on these medications. Dedicated alcohol use disorder RCTs are ongoing.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { emoji: "🧠", title: "Reward dampening", detail: "Blunts dopamine spike from alcohol/food — reduces 'wanting' without blocking all pleasure" },
              { emoji: "😰", title: "Anxiety reduction", detail: "CRF pathway modulation may lower baseline anxiety that drives stress-related drinking" },
              { emoji: "💊", title: "Nausea effect", detail: "GLP-1 nausea makes alcohol less appealing at a physiological level — likely a contributing factor" },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, padding: "14px 16px" }}>
                <p style={{ fontSize: 20, marginBottom: 8 }}>{item.emoji}</p>
                <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{item.title}</p>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.55, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* § 06: Kidney protection */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 06" figure="§" title="Kidney Protection:" titleItalic="The FLOW trial breakthrough" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Until recently, kidney-protective effects of GLP-1 agonists were observed incidentally in cardiovascular outcome trials. The FLOW trial (Perkovic et al., 2024, <em>NEJM</em>) was the first dedicated renal outcomes trial for a GLP-1 drug — and it was stopped early.
          </p>

          {/* FLOW trial card */}
          <div style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
            <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", letterSpacing: "0.12em", fontWeight: 700 }}>FLOW TRIAL · 2024</span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>NEJM · Phase 3 RCT — stopped early</span>
            </div>
            <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "Population", value: "3,533 adults with type 2 diabetes and CKD (eGFR 25–75)" },
                { label: "Drug", value: "Semaglutide 1.0mg weekly" },
                { label: "Duration", value: "~3.4 years (median, stopped early)" },
                { label: "Primary outcome", value: "Kidney failure, sustained ≥50% eGFR decline, CV death, or kidney disease death" },
                { label: "Result", value: "24% relative risk reduction vs placebo (HR 0.76)" },
                { label: "Why stopped early", value: "Overwhelming efficacy — DSMB recommended early stopping for clear benefit" },
              ].map((d) => (
                <div key={d.label}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>{d.label}</p>
                  <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8 }}>
            GLP-1 receptors in the kidney tubules and mesangial cells are thought to reduce inflammation and fibrosis — the primary drivers of progressive CKD. The benefit may compound with SGLT-2 inhibitors (like empagliflozin), which work via a complementary renal mechanism, and several combination trials are underway.
          </p>
        </section>

        {/* § 07: Liver disease */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 07" figure="§" title="Liver Disease:" titleItalic="MASLD and NASH regression" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Metabolic dysfunction-associated steatotic liver disease (MASLD, formerly NAFLD) and its inflammatory form MASH (formerly NASH) are increasingly common — affecting roughly 25% of the global population. GLP-1 agonists directly reduce hepatic fat accumulation via multiple pathways.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            The <strong style={{ color: "#1A1714" }}>ESSENCE trial</strong> (Harrison et al., 2024, <em>NEJM</em>) found semaglutide 2.4mg resolved MASH in 62.9% of treated patients vs 34.3% of placebo recipients — and achieved liver fibrosis improvement (≥1-stage) in 36.8% vs 22.4%.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8 }}>
            Tirzepatide's SURMOUNT-NASH trial showed even stronger results: resolution of MASH in 44.4–62.4% of patients (dose-dependent) vs 9.7% for placebo, published in 2024. Both drugs have since received FDA approval or supplemental indications specifically for MASH treatment.
          </p>
        </section>

        {/* § 08: Sleep apnea */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 08" figure="§" title="Sleep Apnea:" titleItalic="A direct effect beyond the airway" size="md" />
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            Obesity is the primary driver of obstructive sleep apnea (OSA) in most patients — so it was unsurprising when GLP-1 agonists, which drive significant weight loss, improved apnea-hypopnea index (AHI) scores. But two large RCTs suggest the effect may exceed what weight loss alone predicts.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, marginBottom: 20 }}>
            The <strong style={{ color: "#1A1714" }}>SURMOUNT-OSA trials</strong> (Malhotra et al., 2024, <em>NEJM</em>) enrolled 469 adults with moderate-to-severe OSA and obesity. Tirzepatide reduced AHI by approximately 27–30 events per hour — a ~60% reduction — compared to ~5 events/hour for placebo. Notably, even patients using CPAP machines showed meaningful improvement on tirzepatide vs placebo.
          </p>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8 }}>
            Proposed mechanisms beyond weight loss include reduced upper airway inflammation, changes in ventilatory control sensitivity, and possible direct GLP-1 receptor effects on airway smooth muscle. Tirzepatide received FDA approval for OSA in adults with obesity in June 2024.
          </p>
        </section>

        {/* § 09: Bottom line */}
        <section style={{ marginBottom: 56, backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 36px 32px", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 16 }}>Bottom Line</p>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 20 }}>
              GLP-1 agonists are becoming one of the most versatile drug classes in medicine
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "The SELECT trial (2023) established a 20% reduction in cardiovascular events in non-diabetic adults with obesity — independent of weight change.",
                "The FLOW trial (2024) showed a 24% kidney failure risk reduction in diabetic CKD patients and was stopped early for overwhelming efficacy.",
                "Consistent blood pressure reductions of 3–6 mmHg are seen across trials, driven by weight loss, natriuresis, and direct vascular effects.",
                "MASH liver disease now has two approved GLP-1 therapies (semaglutide and tirzepatide) after phase 3 RCTs showing 45–63% MASH resolution.",
                "Mental health, migraine, and addiction benefits are real and mechanistically plausible, but require dedicated RCTs before clinical recommendations can be made.",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", flexShrink: 0, marginTop: 3 }}>→</span>
                  <p style={{ fontSize: 14, color: "rgba(242,235,217,0.8)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* § 10: FAQ */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 10" figure="§" title="Frequently" titleItalic="Asked Questions" size="md" />
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

        {/* § 11: References */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="§ 11" figure="§" title="References" titleItalic="& Further Reading" size="md" />
          <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", marginBottom: 14 }}>All citations link to the primary source on PubMed or publisher DOI.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { text: "Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. N Engl J Med. 2023;389(24):2221–2232.", url: "https://pubmed.ncbi.nlm.nih.gov/37952131/" },
              { text: "Perkovic V, Tuttle KR, Rossing P, et al. Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes. N Engl J Med. 2024;391(2):109–121. (FLOW trial)", url: "https://pubmed.ncbi.nlm.nih.gov/38587995/" },
              { text: "Sposito AC, Berwanger O, de Carvalho LSF, Saraiva JFK. Unexpected effects of PCSK9 inhibitors and GLP-1Ra on non-lipid cardiovascular risk factors. Cardiovasc Diabetol. 2021;20:163.", url: "https://pubmed.ncbi.nlm.nih.gov/34376201/" },
              { text: "Malhotra A, Bednarik J, Chakladar S, et al. Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity. N Engl J Med. 2024;391(13):1193–1205. (SURMOUNT-OSA)", url: "https://pubmed.ncbi.nlm.nih.gov/38762805/" },
              { text: "Harrison SA, Bedossa P, Guy CD, et al. A Phase 3, Randomized, Controlled Trial of Resmetirom in NASH with Liver Fibrosis. N Engl J Med. 2024;390(6):497–509. (MAESTRO-NASH) — for ESSENCE (semaglutide MASH) see: Loomba R, et al. Semaglutide 2·4 mg for MASH. N Engl J Med. 2024;391(6):529–540.", url: "https://pubmed.ncbi.nlm.nih.gov/38782594/" },
              { text: "Deligianni CI, Daponte AI, Mitsikostas DD, Paemeleire K, Sánchez-del-Río M. Semaglutide: a consideration for prophylactic treatment of migraine. Expert Rev Neurother. 2022;22(10):835–843.", url: "https://pubmed.ncbi.nlm.nih.gov/36408507/" },
              { text: "Kokoti L, Al-Karagholi MAM, Mygind Nielsen CA, Ashina M. Does GLP-1 receptor agonism modulate migraine? A narrative review. Cephalalgia. 2023;43(9):3331024231188289.", url: "https://pubmed.ncbi.nlm.nih.gov/37592793/" },
              { text: "Wium-Andersen IK, Bodilsen AC, Wium-Andersen MK, Jørgensen MB, Osler M, Nordentoft M. Associations between use of GLP-1RA and risk of depression and anxiety. Eur Neuropsychopharmacol. 2023;74:20–28.", url: "https://pubmed.ncbi.nlm.nih.gov/37213137/" },
              { text: "Klausen MK, Thomsen M, Wortwein G, et al. The role of glucagon-like peptide 1 (GLP-1) in addictive disorders. Br J Pharmacol. 2022;179(4):625–641.", url: "https://pubmed.ncbi.nlm.nih.gov/35175933/" },
              { text: "Hölscher C. The incretin hormones glucagonlike peptide 1 and glucose-dependent insulinotropic polypeptide are neuroprotective in mouse models of Alzheimer's disease. Alzheimers Dement. 2014;10(1 Suppl):S47–54.", url: "https://pubmed.ncbi.nlm.nih.gov/23643535/" },
              { text: "Athauda D, Maclagan K, Skene SS, et al. Exenatide once weekly versus placebo in Parkinson's disease: a randomised, double-blind, placebo-controlled trial. Lancet. 2017;390(10103):1664–1675.", url: "https://pubmed.ncbi.nlm.nih.gov/28781064/" },
              { text: "Whelton PK, He J, Appel LJ, et al. Primary prevention of hypertension: clinical and public health advisory from the National High Blood Pressure Education Program. JAMA. 2002;288(15):1882–1888.", url: "https://pubmed.ncbi.nlm.nih.gov/12387653/" },
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
              { href: "/research/microdose-glp1", label: "Microdose GLP-1 Telehealth", sub: "Does low-dose semaglutide work?" },
              { href: "/blog/glp1-benefits-beyond-weight-loss", label: "GLP-1 Benefits: 5 Surprises", sub: "Consumer-friendly overview" },
              { href: "/reviews/wellmedr", label: "WellMedr GLP-1 Program Review", sub: "FSP 9.2/10 — our top-rated telehealth" },
              { href: "/ingredients/tirzepatide", label: "Tirzepatide Ingredient Profile", sub: "Mechanism, trials, and dosing" },
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
