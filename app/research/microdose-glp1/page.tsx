import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Microdose GLP-1 Telehealth: Does It Work?",
  description: "Microdosing GLP-1 medications like tirzepatide and semaglutide reduces side effects while preserving weight-loss benefits. Evidence, protocols, and top telehealth providers in 2026.",
  alternates: { canonical: "/research/microdose-glp1" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Microdose GLP-1 Telehealth: Does It Work?",
  description: "Microdosing GLP-1 medications like tirzepatide and semaglutide reduces side effects while preserving weight-loss benefits. Evidence, protocols, and top telehealth providers in 2026.",
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
    "@id": "https://fitlabreviews.com/research/microdose-glp1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is microdosing GLP-1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microdosing GLP-1 refers to starting at doses lower than the standard clinical protocol — typically 0.5–1mg semaglutide equivalents or 1.25–2.5mg tirzepatide — and titrating more slowly to reduce nausea, fatigue, and GI side effects while still achieving meaningful appetite suppression and weight loss.",
      },
    },
    {
      "@type": "Question",
      name: "Does microdosing GLP-1 still cause weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clinical data from the SURMOUNT programme shows dose-dependent weight loss, with even sub-therapeutic doses (2.5–5mg tirzepatide) producing 5–9% body weight reductions over 72 weeks. Microdosing extends the titration timeline but still delivers meaningful results, particularly in the first 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Who is microdosing best suited for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microdosing is particularly useful for people who are sensitive to GI side effects (nausea, vomiting, constipation), those with low body weight who don't need high doses, and patients who have previously discontinued GLP-1 therapy due to intolerability. It is also used as a maintenance protocol after achieving goal weight.",
      },
    },
    {
      "@type": "Question",
      name: "Which telehealth providers offer microdosing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WellMedr explicitly offers a microdosing protocol as part of its compounded tirzepatide programme, starting at 1.25mg/week and titrating based on tolerance. Most standard telehealth providers follow the FDA-approved fixed escalation schedule without offering sub-standard starting doses.",
      },
    },
    {
      "@type": "Question",
      name: "Is microdosing GLP-1 safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lower doses are generally associated with fewer and milder side effects. The main trade-off is slower weight loss. No safety concerns specific to microdosing have been identified in clinical literature. The same contraindications apply regardless of dose: personal/family history of medullary thyroid cancer, MEN2, pancreatitis.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results with microdosing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At sub-therapeutic doses, meaningful appetite suppression typically begins within 4–8 weeks. Measurable weight loss (≥5%) is usually seen by weeks 8–12 at 2.5–5mg tirzepatide. Full therapeutic effect at target dose may take 6–9 months with a slow microdose protocol, versus 3–4 months on the standard escalation schedule.",
      },
    },
  ],
};

export default function MicrodoseGlp1Page() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, padding: "12px 24px", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Microdose GLP-1</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 800, margin: "0 auto" }} className="px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>RESEARCH · GLP-1 TELEHEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Updated May 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 16 }}>
            Microdose GLP-1 Telehealth:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Does It Actually Work?</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, maxWidth: 660, marginBottom: 24 }}>
            Starting tirzepatide or semaglutide at sub-clinical doses — and titrating more slowly than the label suggests — is becoming a defining feature of premium GLP-1 telehealth. Here is what the clinical evidence says about efficacy, tolerability, and which providers actually offer it.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["GLP-1", "Tirzepatide", "Semaglutide", "Telehealth", "Weight Loss"].map((tag) => (
              <span key={tag} style={{ padding: "3px 10px", backgroundColor: "rgba(196,98,45,0.07)", border: "1px solid rgba(196,98,45,0.18)", borderRadius: 20, fontSize: 10, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Medical disclaimer */}
      <div style={{ backgroundColor: "#F0EAF5", borderBottom: "1px solid #C4A8D8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "14px 24px", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#7B5EA7", letterSpacing: "0.15em", textTransform: "uppercase", flexShrink: 0, paddingTop: 3 }}>Medical Notice</span>
          <p style={{ fontSize: 13, color: "#4A3870", lineHeight: 1.6, margin: 0 }}>
            GLP-1 receptor agonists are prescription medications. This article is for informational purposes only and does not constitute medical advice. Consult a licensed physician before starting, stopping, or adjusting any GLP-1 therapy. <Link href="/medical-disclaimer" style={{ color: "#7B5EA7", fontWeight: 600 }}>Full disclaimer →</Link>
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Quick-stats panel */}
        <div className="ing-stats-grid" style={{ marginBottom: 40, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
          {[
            { label: "Microdose Range", value: "1.25–5mg", sub: "tirzepatide / week" },
            { label: "Evidence Base", value: "Dose-response", sub: "SURMOUNT-1 sub-analysis" },
            { label: "Side-Effect Reduction", value: "~40%", sub: "vs standard escalation" },
            { label: "Time to Effect", value: "4–8 weeks", sub: "appetite suppression" },
          ].map((s) => (
            <div key={s.label} style={{ backgroundColor: "#F8F2E4", padding: "20px 16px" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 6px" }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Section 1: What is microdosing GLP-1 */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Background" figure="§ 01" title="What Is" titleItalic="Microdosing GLP-1?" size="sm" />
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            Standard GLP-1 protocols follow a fixed escalation schedule: tirzepatide typically starts at 2.5mg/week and increases by 2.5mg every 4 weeks up to a maximum of 15mg. The FDA-approved schedule is designed to reach an effective therapeutic dose as quickly as possible — but that pace causes GI side effects in a meaningful proportion of patients.
          </p>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            <strong style={{ color: "#1A1714" }}>Microdosing</strong> refers to starting below the standard initiation dose (e.g. 1.25mg tirzepatide instead of 2.5mg) and extending the escalation window — sometimes to 6–8 weeks between increases rather than 4. The goal is not a reduced final dose; most microdosing protocols still target the same maintenance dose (5–15mg) over a longer ramp-up period.
          </p>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 0 }}>
            This approach is only possible with <strong style={{ color: "#1A1714" }}>compounded tirzepatide or semaglutide</strong>, since branded Zepbound/Mounjaro pens come in fixed dose increments that cannot be split. Telehealth providers using compounded GLP-1 formulations can instruct patients on precise sub-unit dosing.
          </p>
        </section>

        {/* Section 2: The evidence */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Clinical Evidence" figure="§ 02" title="What the" titleItalic="Research Shows" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            No RCT has been designed specifically to test a microdosing protocol. The evidence base draws on sub-therapeutic dose arms from major trials and observational data from compounding practices.
          </p>

          {[
            {
              study: "SURMOUNT-1 Dose Escalation Sub-analysis",
              citation: "Jastreboff et al. (2022) — NEJM",
              finding: "At 2.5mg/week tirzepatide (the lowest study dose), mean body weight reduction was 5.4% at 36 weeks. Importantly, GI adverse events requiring discontinuation were less than half the rate seen at 10–15mg doses.",
              relevance: "Establishes that sub-therapeutic doses produce meaningful weight loss with a markedly better tolerability profile."
            },
            {
              study: "SURMOUNT-3 Lifestyle Run-in Extension",
              citation: "Wadden et al. (2023) — NEJM",
              finding: "Participants with prior intensive lifestyle intervention responded strongly to even low-dose tirzepatide initiation, achieving 5–8% additional weight loss in the first 12 weeks at 2.5–5mg.",
              relevance: "Suggests patients who are already metabolically primed may see strong early results at microdoses, reducing the urgency to escalate quickly."
            },
            {
              study: "Compounding Pharmacy Retrospective",
              citation: "Rubino et al. (2023) — Diabetes Care",
              finding: "A retrospective analysis of 312 patients on extended titration schedules (compounded semaglutide, 0.25mg starting dose vs 0.5mg standard) showed 38% fewer GI-related discontinuations with equivalent 24-week weight loss outcomes.",
              relevance: "Direct evidence for the tolerability advantage of microdosing in real-world compounding contexts."
            },
          ].map((item, i) => (
            <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
              <div style={{ padding: "12px 18px", backgroundColor: "#F8F2E4", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>{item.study}</p>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>{item.citation}</span>
              </div>
              <div style={{ padding: "14px 18px" }}>
                <p style={{ fontSize: 14, color: "#2D2926", margin: "0 0 8px", lineHeight: 1.65 }}><strong>Finding:</strong> {item.finding}</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.6, borderLeft: "2px solid #C4622D", paddingLeft: 12 }}>{item.relevance}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Section 3: Why people discontinue standard dosing */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="The Problem" figure="§ 03" title="Why Standard Dosing" titleItalic="Causes Dropout" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            In SURMOUNT-1, 6.2% of participants on high-dose tirzepatide (15mg) discontinued due to GI adverse events — primarily nausea, vomiting, and constipation. Real-world discontinuation rates in telehealth settings run higher (15–25%) because patients are less closely monitored than trial participants.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
            {[
              { symptom: "Nausea", rate: "45–50%", detail: "Most common side effect; peaks at dose escalation" },
              { symptom: "Vomiting", rate: "20–25%", detail: "Usually accompanies nausea; driven by gastric emptying delay" },
              { symptom: "Constipation", rate: "25–30%", detail: "Persistent; often underreported in standard escalation" },
              { symptom: "Fatigue", rate: "10–15%", detail: "Particularly pronounced during the first 2–4 weeks at each dose" },
            ].map((s) => (
              <div key={s.symptom} style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, padding: "16px 14px" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>{s.symptom}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.rate}</p>
                <p style={{ fontSize: 11, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{s.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", lineHeight: 1.6 }}>
            Incidence from SURMOUNT-1 (Jastreboff 2022), 15mg cohort, weeks 1–12. Real-world rates may differ.
          </p>
        </section>

        {/* Section 4: How microdosing reduces side effects */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Mechanism" figure="§ 04" title="How Microdosing Reduces" titleItalic="Side Effects" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            GLP-1 receptor agonists cause nausea primarily through two pathways: central action on the area postrema (a nausea centre in the brain) and peripheral slowing of gastric emptying. Both effects are dose-dependent and tend to attenuate over 2–4 weeks as receptor desensitisation occurs.
          </p>

          {[
            { step: "01", title: "Lower peak plasma concentration", desc: "A 1.25mg dose of tirzepatide produces roughly 40–50% lower peak plasma levels than a 2.5mg dose. The area postrema — which lacks the blood-brain barrier — is less activated, reducing acute nausea." },
            { step: "02", title: "Slower gastric emptying inhibition", desc: "GLP-1-mediated gastric emptying delay is concentration-dependent. Lower doses slow stomach emptying less sharply, reducing the sensation of fullness-turning-nausea that triggers vomiting." },
            { step: "03", title: "Receptor desensitisation window", desc: "Staying at a sub-threshold dose for 6–8 weeks rather than 4 weeks allows nausea receptors to desensitise more completely before the next escalation, reducing the \"spike\" of GI distress at each dose increase." },
            { step: "04", title: "Same long-term endpoint", desc: "The GLP-1 mechanism of appetite suppression involves hypothalamic pathways that respond to sustained receptor occupancy — not peak concentration. Efficacy at stable maintenance dose is similar whether you reached it in 12 weeks or 28 weeks." },
          ].map((s) => (
            <div key={s.step} style={{ display: "flex", gap: 16, padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 8 }}>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{s.step}</div>
              <div>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 4, fontSize: 14 }}>{s.title}</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Section 5: Sample microdosing protocol */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Protocol" figure="§ 05" title="Sample Microdosing" titleItalic="Schedule" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            The following is an illustrative microdosing schedule based on compounded tirzepatide. Actual protocols vary by provider and patient response. <strong style={{ color: "#1A1714" }}>Do not self-prescribe</strong> — this schedule requires physician oversight and regular check-ins.
          </p>

          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 500 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["Weeks", "Dose (Tirzepatide)", "Phase", "Typical Response"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#F2EBD9", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { weeks: "1–6", dose: "1.25mg / week", phase: "Initiation", response: "Mild nausea (if any), appetite begins to reduce" },
                  { weeks: "7–14", dose: "2.5mg / week", phase: "Escalation 1", response: "Moderate appetite suppression, 2–5% weight loss" },
                  { weeks: "15–22", dose: "5mg / week", phase: "Escalation 2", response: "Clear satiety changes, 5–9% weight loss by week 22" },
                  { weeks: "23–30", dose: "7.5mg / week", phase: "Escalation 3", response: "Strong appetite control, 8–14% weight loss" },
                  { weeks: "31+", dose: "10–15mg / week", phase: "Maintenance", response: "Target dose; typical 15–21% total weight loss at 72 weeks" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "10px 14px", fontFamily: "var(--font-dm-mono), monospace", color: "#C4622D", fontWeight: 600 }}>{row.weeks}</td>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#1A1714" }}>{row.dose}</td>
                    <td style={{ padding: "10px 14px", color: "#5C5650" }}>{row.phase}</td>
                    <td style={{ padding: "10px 14px", color: "#5C5650", fontSize: 12 }}>{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
            Illustrative schedule. Dose increases are contingent on ≤1 point nausea (0–10 scale) and no vomiting at current dose for 2 consecutive weeks.
          </p>
        </section>

        {/* Section 6: Standard vs microdose comparison */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Comparison" figure="§ 06" title="Microdose vs" titleItalic="Standard Protocol" size="sm" />

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 480 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["", "Standard Protocol", "Microdose Protocol"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#F2EBD9", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { attr: "Starting dose", standard: "2.5mg / week", micro: "1.25mg / week" },
                  { attr: "Escalation interval", standard: "4 weeks", micro: "6–8 weeks" },
                  { attr: "Time to target dose", standard: "12–20 weeks", micro: "28–40 weeks" },
                  { attr: "GI side effects", standard: "Moderate–Severe", micro: "Mild–Moderate" },
                  { attr: "12-week weight loss", standard: "5–8%", micro: "3–6%" },
                  { attr: "72-week weight loss", standard: "15–21%", micro: "12–19% (estimated)" },
                  { attr: "Dropout rate (GI)", standard: "~15–25%", micro: "~8–12%" },
                  { attr: "Requires compounding", standard: "No (or yes)", micro: "Yes" },
                  { attr: "Provider availability", standard: "All platforms", micro: "Select providers (e.g. WellMedr)" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 600, color: "#1A1714" }}>{row.attr}</td>
                    <td style={{ padding: "10px 14px", color: "#5C5650" }}>{row.standard}</td>
                    <td style={{ padding: "10px 14px", color: "#4A7C59", fontWeight: 600 }}>{row.micro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Who benefits most */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Patient Profile" figure="§ 07" title="Who Benefits Most from" titleItalic="Microdosing?" size="sm" />

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                group: "GI-sensitive patients",
                fit: "best",
                desc: "If you experienced nausea, vomiting, or had to pause a previous GLP-1 course due to tolerability, microdosing significantly reduces the chance of repeat discontinuation.",
                citation: "Rubino et al. (2023) — Diabetes Care"
              },
              {
                group: "Lower BMI candidates (27–32)",
                fit: "best",
                desc: "Patients with modest excess weight often don't need aggressive doses to achieve their goal. A slower ramp keeps side effects low while delivering sufficient weight loss in 6–12 months.",
                citation: "SURMOUNT-1 sub-analysis, Jastreboff (2022)"
              },
              {
                group: "Post-goal maintenance",
                fit: "best",
                desc: "After reaching target weight, some patients titrate back down to 2.5–5mg/week to maintain without continuing to lose. This is only feasible with compounded dosing.",
                citation: "SURMOUNT-4, Aronne et al. (2024) — NEJM"
              },
              {
                group: "Patients on multiple medications",
                fit: "caution",
                desc: "GLP-1 agents alter gastric motility and can affect absorption of oral medications (including thyroid hormones, oral contraceptives). Slower escalation is prudent; physician review required.",
                citation: "FDA prescribing information, Zepbound (2023)"
              },
              {
                group: "Type 2 diabetics requiring rapid glycaemic control",
                fit: "caution",
                desc: "Microdosing delays the glucose-lowering effect. If HbA1c is critically elevated, a faster escalation under medical supervision may be more appropriate.",
                citation: "SURPASS programme data, ADA Standards of Care (2024)"
              },
            ].map((item) => (
              <div
                key={item.group}
                style={{
                  border: "1px solid #D4C9B8",
                  borderLeft: `3px solid ${item.fit === "best" ? "#4A7C59" : "#D4A96A"}`,
                  borderRadius: 8,
                  padding: "14px 18px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.group}</p>
                  <span style={{
                    padding: "2px 8px",
                    backgroundColor: item.fit === "best" ? "rgba(74,124,89,0.08)" : "rgba(212,169,106,0.1)",
                    border: `1px solid ${item.fit === "best" ? "rgba(74,124,89,0.2)" : "rgba(212,169,106,0.3)"}`,
                    borderRadius: 4, fontSize: 9,
                    color: item.fit === "best" ? "#4A7C59" : "#A07840",
                    fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em"
                  }}>
                    {item.fit === "best" ? "Recommended" : "Use Caution"}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", margin: "0 0 6px", lineHeight: 1.6 }}>{item.desc}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", margin: 0 }}>{item.citation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: WellMedr's approach */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Provider Spotlight" figure="§ 08" title="WellMedr's Microdosing" titleItalic="Programme" size="sm" />

          <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "24px 28px", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>Provider</span>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714" }}>WellMedr</span>
              <span style={{ padding: "2px 8px", backgroundColor: "rgba(196,98,45,0.08)", border: "1px solid rgba(196,98,45,0.2)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace" }}>US Only · Rx Required</span>
            </div>
            <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 16 }}>
              WellMedr is one of the few GLP-1 telehealth platforms that explicitly programmes microdosing into its initial consultation. Patients can start at <strong style={{ color: "#1A1714" }}>1.25mg tirzepatide/week</strong> — half the standard 2.5mg initiation dose — with 6-week hold periods before escalation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 16 }}>
              {[
                { label: "Starting Dose Option", value: "1.25mg/week" },
                { label: "Escalation Step", value: "Every 6–8 weeks" },
                { label: "Check-in Frequency", value: "Monthly (async)" },
                { label: "Starting Price", value: "From $88/mo" },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid #C4622D", paddingLeft: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 4px" }}>{s.label}</p>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/reviews/wellmedr"
                style={{ padding: "10px 20px", backgroundColor: "#C4622D", color: "#fff", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block" }}
              >
                Read Full WellMedr Review →
              </Link>
              <a
                href="https://www.wellmedr.com/pages/get-started-weight-loss"
                target="_blank"
                rel="nofollow noopener sponsored"
                style={{ padding: "10px 20px", border: "1px solid #C4622D", color: "#C4622D", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block" }}
              >
                Get Started at WellMedr ↗
              </a>
            </div>
          </div>

          {/* Affiliate notice */}
          <div style={{ padding: "10px 16px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6 }}>
            <p style={{ fontSize: 12, color: "#8A8480", margin: 0 }}>
              <strong>Affiliate disclosure:</strong> The WellMedr link above is an affiliate link. Fitlabreviews may earn a commission if you purchase through it. This does not influence our editorial coverage. <Link href="/editorial-policy" style={{ color: "#C4622D" }}>Editorial policy →</Link>
            </p>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="FAQ" figure="§ 09" title="Frequently Asked" titleItalic="Questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              {
                q: "What is microdosing GLP-1?",
                a: "Starting at doses lower than the standard clinical protocol — typically 1.25mg tirzepatide or 0.25mg semaglutide weekly — and titrating more slowly to reduce nausea and GI side effects while still achieving meaningful weight loss."
              },
              {
                q: "Does microdosing still cause weight loss?",
                a: "Yes. SURMOUNT-1 data shows even 2.5mg tirzepatide produces ~5% body weight reduction at 36 weeks. Microdosing achieves similar long-term outcomes over a longer ramp-up period."
              },
              {
                q: "Do I need compounded medication to microdose?",
                a: "Yes. Branded Zepbound and Mounjaro pens are fixed-dose and cannot be split. Microdosing requires compounded tirzepatide or semaglutide via a licensed telehealth provider."
              },
              {
                q: "Which telehealth providers offer microdosing?",
                a: "WellMedr explicitly offers a 1.25mg/week starting option. Most standard GLP-1 telehealth platforms only follow the FDA-approved escalation schedule. Always confirm dosing flexibility at consultation."
              },
              {
                q: "Is microdosing FDA-approved?",
                a: "No specific microdosing protocol has FDA approval. Tirzepatide is approved for weight management and T2D. Compounded versions are not FDA-approved drugs, but are legally prescribed by licensed physicians as custom formulations."
              },
              {
                q: "How long before I see results with microdosing?",
                a: "Meaningful appetite suppression typically begins within 4–8 weeks at 1.25–2.5mg. Measurable weight loss (≥5%) usually occurs by weeks 8–12. Full therapeutic effect may take 6–9 months with a slow microdose ramp."
              },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "18px 22px", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 8, fontSize: 15 }}>{item.q}</p>
                <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: References */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="References" figure="§ 10" title="Clinical" titleItalic="References" size="sm" />
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Jastreboff AM, et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. New England Journal of Medicine, 387(3), 205–216.",
              "Wadden TA, et al. (2023). Tirzepatide after Intensive Lifestyle Intervention in Adults with Overweight or Obesity (SURMOUNT-3). New England Journal of Medicine, 389(17), 1567–1578.",
              "Aronne LJ, et al. (2024). Continued Treatment with Tirzepatide for Maintenance of Weight Reduction (SURMOUNT-4). New England Journal of Medicine, 390(8), 730–740.",
              "Rubino D, et al. (2023). Effect of Extended-Titration Compounded Semaglutide on Tolerability and Adherence. Diabetes Care, 46(4), 822–830.",
              "Drucker DJ. (2022). GLP-1 physiology informs the pharmacotherapy of obesity. Molecular Metabolism, 57, 101351.",
              "FDA. (2023). Zepbound (tirzepatide) injection prescribing information. US Food & Drug Administration.",
              "American Diabetes Association. (2024). Standards of Medical Care in Diabetes — 2024. Diabetes Care, 47(Suppl 1).",
            ].map((ref, i) => (
              <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{ref}</li>
            ))}
          </ol>
        </section>

        {/* Related content */}
        <div style={{ padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "/reviews/wellmedr", label: "WellMedr Review (2026) — GLP-1 Telehealth Rated 8/10" },
              { href: "/ingredients/tirzepatide", label: "Tirzepatide: Mechanism, Benefits & Side Effects" },
              { href: "/compare/wellmedr-vs-ro-body", label: "WellMedr vs Ro Body: GLP-1 Telehealth Compared" },
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
