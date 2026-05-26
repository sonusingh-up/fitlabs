import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Beta-Alanine: Benefits, Dosage & the Tingling Explained",
  description: "Beta-alanine raises muscle carnosine to buffer lactic acid during high-intensity efforts. Learn the proven benefits, correct dose (3.2–6.4g/day), why it tingles, and who actually benefits.",
  alternates: { canonical: "/ingredients/beta-alanine" },
};

export default function BetaAlaninePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/beta-alanine#article",
    headline: "Beta-Alanine: Benefits, Dosage, Side Effects & Who It Actually Works For",
    description: "Comprehensive, evidence-based research profile of beta-alanine covering carnosine buffering mechanism, proven endurance benefits, correct dosage, the tingling explained, and form comparisons.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/beta-alanine",
    mainEntityOfPage: "https://fitlabreviews.com/ingredients/beta-alanine",
    articleSection: "Ingredient Research",
    keywords: ["beta-alanine", "beta-alanine benefits", "carnosine buffering", "beta-alanine tingling", "beta-alanine dosage", "endurance supplement"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does beta-alanine make you tingle?",
        acceptedAnswer: { "@type": "Answer", text: "The tingling sensation (paraesthesia) is caused by beta-alanine binding to sensory nerve receptors (MrgprD) in the skin, triggering a transient itch-like response. It is dose-dependent, harmless, and not linked to any adverse effect on performance or health. Splitting doses into 0.8–1.6g portions significantly reduces the sensation. It typically diminishes with regular use as the body adapts." },
      },
      {
        "@type": "Question",
        name: "How long does beta-alanine take to work?",
        acceptedAnswer: { "@type": "Answer", text: "Beta-alanine works by gradually elevating muscle carnosine levels — a process that takes 4–12 weeks of consistent daily supplementation. Muscle carnosine increases approximately 20–30% after 4 weeks and 40–60% after 10–12 weeks of 3.2–6.4g/day. You will not feel a single-dose acute performance effect the way you would with caffeine. Consistency is what matters." },
      },
      {
        "@type": "Question",
        name: "What type of exercise does beta-alanine work for?",
        acceptedAnswer: { "@type": "Answer", text: "Beta-alanine's benefit is specific to high-intensity efforts lasting 1–4 minutes — where hydrogen ion (H+) accumulation causes acidosis and fatigue. This includes: 400m–1500m running, 100–400m swimming, rowing, combat sports rounds, HIIT intervals, and repeated sprint bouts in team sports. Powerlifters, marathon runners, and triathletes see minimal benefit." },
      },
      {
        "@type": "Question",
        name: "Should I take beta-alanine before or after a workout?",
        acceptedAnswer: { "@type": "Answer", text: "Timing does not matter for beta-alanine. It works by chronically increasing muscle carnosine stores over weeks — not via an acute pre-workout mechanism. Take it at a consistent time each day, split across 2–4 doses to reduce paraesthesia. Many products include it in pre-workouts, but this is for convenience rather than efficacy." },
      },
      {
        "@type": "Question",
        name: "Is beta-alanine the same as carnosine?",
        acceptedAnswer: { "@type": "Answer", text: "No. Beta-alanine is a precursor to carnosine — when you supplement beta-alanine, it combines with histidine inside muscle cells to form carnosine. Supplementing carnosine directly is less effective because it is broken down by carnosinase enzymes in the gut and blood before reaching muscle. Beta-alanine bypasses this problem by being transported intact into muscle, where carnosine is then synthesised." },
      },
      {
        "@type": "Question",
        name: "Can you stack beta-alanine with creatine?",
        acceptedAnswer: { "@type": "Answer", text: "Yes — they target completely different energy systems and combine well. Creatine replenishes the ATP-PCr system (0–10 second efforts), while beta-alanine buffers acidosis in the glycolytic system (1–4 minute efforts). Athletes doing HIIT, circuits, or sport with repeated high-intensity bouts can benefit from both. No negative interactions have been reported." },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    {
      claim: "Increases muscle carnosine concentrations",
      evidence: "strong",
      citation: "Harris et al., 2006 — Amino Acids",
      notes: "Foundational study demonstrating that oral beta-alanine supplementation (3.2–6.4g/day) increases muscle carnosine by 20–80% over 4–10 weeks. The rate of increase is dose-dependent and plateaus at approximately 60–80% above baseline with long-term use.",
    },
    {
      claim: "Improves high-intensity exercise performance (1–4 min efforts)",
      evidence: "moderate",
      citation: "Hobson et al., 2012 — British Journal of Sports Medicine (meta-analysis)",
      notes: "Meta-analysis of 15 RCTs found beta-alanine significantly improved exercise capacity for bouts lasting 1–4 minutes. Effect size was 0.374 — moderate and consistent across cycling, rowing, and running studies. Minimal benefit was observed for efforts under 60 seconds or over 4 minutes.",
    },
    {
      claim: "Reduces fatigue in repeated sprint and HIIT protocols",
      evidence: "moderate",
      citation: "Baguet et al., 2010 — Journal of Applied Physiology",
      notes: "Elite swimmers showed significantly reduced fatigue and improved sprint times in 10×100m efforts after 7 weeks of beta-alanine supplementation (4.8g/day). The benefit was linked directly to measured increases in muscle carnosine via ³¹P-MRS spectroscopy.",
    },
    {
      claim: "May improve total training volume and time to exhaustion",
      evidence: "moderate",
      citation: "Smith et al., 2009 — Journal of the International Society of Sports Nutrition",
      notes: "In 10 weeks of HIIT combined with beta-alanine (6g/day), subjects showed greater improvements in lean mass and VO2max vs placebo. The proposed mechanism: higher training volume enabled by reduced acidosis-induced fatigue leads to superior adaptation over time.",
    },
    {
      claim: "Beneficial for team sport athletes (repeated sprints)",
      evidence: "moderate",
      citation: "Saunders et al., 2012 — International Journal of Sports Physiology and Performance",
      notes: "Soccer players supplementing beta-alanine showed reduced fatigue scores and maintained sprint quality later in simulated match play. The benefit is linked to the repeated glycolytic demands of team sports rather than peak sprint speed.",
    },
    {
      claim: "May support performance in older adults",
      evidence: "limited",
      citation: "Stout et al., 2008 — Journal of Strength and Conditioning Research",
      notes: "Older adults (55–92 years) show significantly lower muscle carnosine than younger adults — making supplementation a logical intervention. 28 days of beta-alanine supplementation improved physical working capacity at fatigue threshold in older subjects versus placebo.",
    },
    {
      claim: "Potential cognitive buffering effects under fatigue",
      evidence: "limited",
      citation: "Stellingwerff et al., 2012 — Amino Acids (review)",
      notes: "Carnosine is found in the brain as well as muscle. Theoretical cognitive benefits exist under acidosis-inducing conditions (hypoxia, fatigue), but controlled human data confirming performance-relevant cognitive benefits from beta-alanine supplementation is limited.",
    },
  ];

  const forms = [
    { name: "Beta-Alanine Powder (standard)", verdict: "The research-validated form. Identical to CarnoSyn chemically. Cheaper per gram. Causes more pronounced paraesthesia when taken in large single doses — split into 0.8–1.6g servings. Unflavoured mixes neutrally into pre-workouts or water.", recommended: true, tag: "Best Value" },
    { name: "CarnoSyn (patented, standard release)", verdict: "The most studied branded form — used in the majority of published RCTs. Chemically identical to generic beta-alanine but with consistent quality control and a strong safety dossier. Trusted for competitive athletes in tested sports.", recommended: true, tag: "Research Standard" },
    { name: "SR CarnoSyn (slow-release)", verdict: "Patented sustained-release form that delivers beta-alanine over several hours, dramatically reducing peak blood levels and therefore paraesthesia. Allows larger single doses (3.2g) without tingling. Preferred for those who find standard beta-alanine uncomfortable.", recommended: true, tag: "Best for Comfort" },
    { name: "Beta-Alanine in Pre-Workout Blends", verdict: "Very common. Effective if the dose is adequate — most require 3.2g/day minimum and many blends underdose at 1.6–2g/serving. Always check the label. The paraesthesia from pre-workout beta-alanine is standard beta-alanine's effect — not a sign the product is working better.", recommended: false, tag: "Check Label Dose" },
    { name: "Carnosine (direct supplementation)", verdict: "Orally ingested carnosine is broken down by carnosinase enzymes before reaching muscle — making it an inefficient delivery method. Beta-alanine supplementation raises muscle carnosine more effectively than carnosine itself. Not recommended for this purpose.", recommended: false, tag: "Inferior Route" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/ingredients" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Ingredients</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beta-Alanine</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ING-003</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>Endurance · Carnosine Buffering</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              Beta-Alanine: Benefits,<br />Dosage & the Tingling Explained
            </h1>
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level="moderate" />
            </div>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>
              Beta-alanine is the only supplement that directly raises muscle carnosine — the body's primary intramuscular acid buffer. Consistent evidence across 15+ RCTs confirms it delays fatigue in high-intensity efforts lasting 1–4 minutes. The tingling is real, harmless, and manageable. Who benefits and who doesn&apos;t is more nuanced than most products suggest.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Quick stats panel */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Effective Dose", value: "3.2–6.4g", sub: "Per day (split doses)" },
                { label: "Loading Phase", value: "4–12 weeks", sub: "Full carnosine saturation" },
                { label: "Evidence Level", value: "Moderate", sub: "15+ RCTs, consistent effect" },
                { label: "Best For", value: "1–4 min efforts", sub: "HIIT · sprints · combat sports" },
              ].map((stat) => (
                <div key={stat.label} style={{ padding: "20px 16px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{stat.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{stat.value}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medical disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only and does not constitute medical advice. Consult a healthcare professional before starting supplementation, especially if you have cardiac conditions, take medications, or are pregnant.
            </p>
          </div>

          {/* 1. What Is Beta-Alanine? */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>What Is Beta-Alanine?</h2>
            <p>
              Beta-alanine is a non-essential, non-proteinogenic amino acid — meaning it is not one of the 20 standard amino acids used to build proteins in the human body. It is produced endogenously in the liver and is also found in dietary sources: most abundantly in animal muscle tissue (chicken breast, beef, pork, fish). Vegetarians and vegans have consistently lower muscle carnosine levels due to minimal dietary beta-alanine intake.
            </p>
            <p>
              Beta-alanine&apos;s sole known physiological purpose relevant to sports performance is as the <strong>rate-limiting precursor to carnosine</strong> (beta-alanyl-L-histidine) — a dipeptide concentrated in skeletal muscle and brain tissue. The body does not lack histidine (the other half of carnosine), so beta-alanine availability determines how much carnosine the muscle can synthesise.
            </p>
            <p>
              Unlike most sports supplements, beta-alanine does not provide an acute, single-dose performance effect. Its benefit accumulates over weeks as muscle carnosine levels rise — making it a chronic supplementation strategy, not a pre-workout stimulant. The famous tingling (paraesthesia) felt from larger doses is the body&apos;s nerve-mediated response to beta-alanine itself, not carnosine, and is unrelated to its performance mechanism.
            </p>
          </section>

          {/* 2. How It Works */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>How Beta-Alanine Works: The Science</h2>
            <p>
              Beta-alanine&apos;s mechanism is rooted in <strong>intramuscular pH buffering</strong> — the management of hydrogen ion (H+) accumulation that causes the burning sensation and force loss during high-intensity exercise.
            </p>

            {/* Step-by-step carnosine buffering pathway */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", borderBottom: "1px solid #2D2926" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>The Carnosine Buffering Pathway — Step by Step</p>
              </div>
              {[
                { step: "01", title: "Beta-alanine is absorbed and transported into muscle", body: "Oral beta-alanine is absorbed in the small intestine and transported into skeletal muscle cells via the taurine transporter (TauT) — a sodium-dependent, proton-coupled transporter. Inside the muscle, it combines with histidine (always in adequate supply) via the enzyme carnosine synthase to produce carnosine. This synthesis is slow and steady — not immediate." },
                { step: "02", title: "Muscle carnosine concentrations rise over weeks", body: "After 4 weeks at 3.2–6.4g/day, muscle carnosine typically increases 20–30%. After 10–12 weeks, increases of 40–80% above baseline are documented (Harris et al., 2006). Carnosine is stable in muscle and has a slow turnover — meaning gains persist for several weeks after stopping supplementation." },
                { step: "03", title: "High-intensity exercise generates H+ accumulation", body: "During glycolytic (anaerobic) exercise — efforts at roughly 80–100% VO2max lasting 1–4 minutes — glucose is rapidly broken down to lactate. This process generates hydrogen ions (H+). The resulting drop in muscle pH (from ~7.1 at rest toward ~6.5 at exhaustion) directly impairs actomyosin ATPase activity, calcium sensitivity, and cross-bridge cycling — the force-producing machinery of muscle contraction." },
                { step: "04", title: "Carnosine captures and neutralises H+ ions", body: "Carnosine is a dipeptide with a pKa of ~6.83 — ideally positioned to act as a buffer in the physiological pH range encountered during intense exercise. Its imidazole side chain (from histidine) accepts free H+ ions, physically removing them from the intracellular environment and reducing the acidic burden on muscle. Carnosine contributes approximately 7–10% of total intramuscular buffering capacity — a meaningful portion." },
                { step: "05", title: "Fatigue is delayed, more reps and time-to-exhaustion improve", body: "By maintaining a higher intramuscular pH for longer, carnosine allows muscle to sustain force production through a greater fraction of the high-intensity effort before acidosis limits contraction. In practice: more reps before failure at high loads, improved sprint performance in the 1–4 minute window, and less fatigue accumulation across repeated bouts. The effect is not acute — it reflects weeks of accumulated carnosine elevation." },
              ].map((s, i) => (
                <div key={s.step} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 18, borderRight: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#C4622D" }}>{s.step}</span>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{s.title}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3>Why the 1–4 minute window is specific</h3>
            <p>
              The glycolytic energy system dominates efforts lasting roughly 30 seconds to 4 minutes. Below this range, the ATP-PCr system (creatine&apos;s domain) handles most of the energy demand and acidosis is minimal. Above 4 minutes, aerobic oxidative phosphorylation takes over, lactate is cleared as fast as it is produced, and H+ accumulation is not the primary fatigue driver. Beta-alanine&apos;s buffering mechanism is therefore structurally specific to this glycolytic window — which is why the meta-analytic evidence shows clear benefit in this range and negligible benefit outside it.
            </p>

            <h3>Secondary mechanisms</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
              {[
                { title: "Antioxidant properties of carnosine", detail: "Carnosine scavenges reactive oxygen species (ROS) and inhibits advanced glycation end-products (AGEs) — cellular damage markers linked to aging. Its antioxidant capacity in muscle may provide a secondary protective benefit during oxidative stress from high-intensity training (Boldyrev et al., 2013, Physiological Reviews). The exercise-performance relevance of this mechanism is less established than pH buffering." },
                { title: "Heavy metal chelation", detail: "Carnosine chelates (binds and neutralises) heavy metal ions including copper and zinc at concentrations found in muscle. This may protect contractile proteins from metal-catalysed oxidative damage during exercise, though the magnitude of benefit in trained humans is not quantified (Hipkiss et al., 2001, Biochemistry/Moscow)." },
                { title: "Calcium sensitisation in muscle", detail: "At the pH range achieved during high-intensity exercise, carnosine has been shown to sensitise the contractile apparatus to calcium, partially counteracting the direct inhibitory effect of acidosis on calcium binding. This means muscle maintains greater force capacity at any given pH — not just through buffering, but through direct contractile enhancement (Dutka & Lamb, 2004, Journal of Physiology)." },
              ].map((m) => (
                <div key={m.title} style={{ padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", borderLeft: "3px solid #C4622D" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{m.title}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{m.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Benefits */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Proven Benefits & Evidence</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ padding: "18px 20px", borderBottom: i < benefits.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0 }}>{b.claim}</p>
                    <EvidenceBadge level={b.evidence} showIcon={false} />
                  </div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", letterSpacing: "0.08em", marginBottom: 4 }}>{b.citation}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{b.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Dosage */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Dosage Guide: How Much Beta-Alanine to Take</h2>
            <p>
              Beta-alanine dosing is about achieving a cumulative daily total — not timing a single pre-workout dose. The paraesthesia (tingling) it causes is dose-rate-dependent, so the standard strategy is to split the daily target across multiple smaller servings.
            </p>

            {/* Dose protocol comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }} className="layout-compare-simple">
              <div style={{ border: "2px solid #C4622D", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#C4622D" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.7)", margin: 0 }}>Standard Protocol</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>Split Doses</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>3.2–6.4g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>/ day</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>Split into <strong>0.8–1.6g doses</strong> taken 2–4× per day with meals. Minimises paraesthesia while delivering the full daily carnosine-building dose. Most studied protocol — matches the Harris et al. (2006) methodology.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Research-validated dose range", "Reduces tingling via smaller boluses", "Consistent daily intake drives carnosine"].map(p => (
                      <p key={p} style={{ fontSize: 12, color: "#2D6A4F", margin: 0 }}>✓ {p}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>Comfort-Optimised</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>SR CarnoSyn Protocol</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>3.2g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>× 2 / day</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>Slow-release (SR) formulation allows <strong>larger single doses</strong> without significant paraesthesia. 2× daily (morning and evening) with food. Slightly more expensive but removes the compliance barrier for paraesthesia-sensitive users.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Minimal tingling — same carnosine outcome", "Fewer daily doses to remember", "Higher cost per gram vs standard"].map((p, i) => (
                      <p key={p} style={{ fontSize: 12, color: i < 2 ? "#2D6A4F" : "#8B7355", margin: 0 }}>{i < 2 ? "✓" : "·"} {p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carnosine loading timeline */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ padding: "10px 18px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>Muscle Carnosine Increase Timeline (3.2–6.4g/day)</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
                {[
                  { time: "Week 1–2", increase: "~5–10%", note: "Building begins" },
                  { time: "Week 4", increase: "~20–30%", note: "Early performance gains" },
                  { time: "Week 8", increase: "~40–60%", note: "Significant buffering" },
                  { time: "Week 10–12", increase: "~60–80%", note: "Near plateau" },
                ].map((t, i) => (
                  <div key={t.time} style={{ padding: "14px 12px", borderRight: i < 3 ? "1px solid #EDE8DF" : "none", backgroundColor: i === 3 ? "#F8F2E4" : "#F2EBD9" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#C4622D", marginBottom: 6 }}>{t.time}</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#2D6A4F", marginBottom: 2 }}>{t.increase}</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 4 }}>{t.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Minimum Effective Dose", value: "3.2g / day", note: "Produces significant carnosine rise" },
                { label: "Optimal Dose", value: "4.8–6.4g / day", note: "Greater carnosine increase over time" },
                { label: "Single Serving Max", value: "0.8–1.6g", note: "Above this, paraesthesia intensifies" },
                { label: "Time to Effect", value: "4–12 weeks", note: "Performance gains emerge gradually" },
              ].map((d) => (
                <div key={d.label} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{d.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 3 }}>{d.value}</p>
                  <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{d.note}</p>
                </div>
              ))}
            </div>

            <h3>Does timing matter?</h3>
            <p>
              No. Beta-alanine has no acute performance mechanism — it works by slowly saturating muscle carnosine over weeks. There is no &quot;anabolic window&quot; or pre-workout advantage. Take doses consistently throughout the day with meals to reduce paraesthesia and improve GI tolerance. Many people include it in a pre-workout blend for convenience, but this timing choice is irrelevant to its efficacy.
            </p>

            <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
                <strong>Carnosine retention after stopping:</strong> Muscle carnosine declines slowly after supplementation is stopped — approximately 2–4 weeks before returning to baseline. This means short breaks (holidays, deload weeks) do not undo months of carnosine loading. For competitive athletes, continuous supplementation through a training block is the standard approach.
              </p>
            </div>
          </section>

          {/* 5. Supplement Forms */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Beta-Alanine Forms Compared</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              The market&apos;s main choice is standard vs slow-release. The performance outcome is equivalent — the difference is comfort and compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forms.map((form) => (
                <div key={form.name} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: form.recommended ? "#F8F2E4" : "#EDE8DF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0 }}>{form.name}</p>
                    <span style={{ padding: "3px 10px", backgroundColor: form.recommended ? "rgba(45,106,79,0.1)" : "rgba(196,98,45,0.08)", border: `1px solid ${form.recommended ? "rgba(45,106,79,0.2)" : "rgba(196,98,45,0.15)"}`, borderRadius: 6, fontSize: 9, color: form.recommended ? "#2D6A4F" : "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>
                      {form.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.55, margin: 0 }}>{form.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Safety & Side Effects */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Safety Profile & Side Effects</h2>
            <p>
              Beta-alanine has an excellent safety profile. The International Society of Sports Nutrition&apos;s 2015 position stand (Hobson et al.) concluded it is safe at research doses (3.2–6.4g/day), and no serious adverse effects have been reported in controlled trials. The conversation about safety almost always begins and ends with paraesthesia.
            </p>

            {[
              {
                concern: "Paraesthesia (tingling / flushing sensation)",
                verdict: "Harmless — manageable with split doses",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "The most common side effect — a tingling or flushing sensation typically felt in the face, ears, hands, and forearms. It appears within 15–20 minutes of ingestion, peaks at 30–45 minutes, and fully resolves within 60–90 minutes. The mechanism is activation of MrgprD sensory nerve receptors in the skin by beta-alanine itself — not carnosine. Splitting doses to ≤1.6g per serving dramatically reduces intensity. SR CarnoSyn eliminates it for most users. Paraesthesia is not a sign of nerve damage or drug effect — it is a benign, reversible sensory event.",
                caveat: "The tingling diminishes with regular use in many users as receptor desensitisation occurs. Some people find they never habituate — the SR form or strict dose-splitting is the practical solution.",
              },
              {
                concern: "Cardiac or blood pressure effects",
                verdict: "Not supported at normal doses",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "No controlled human study has reported adverse cardiovascular effects at research doses of 3.2–6.4g/day. A 2012 safety review (Hobson et al., British Journal of Sports Medicine) covering data from all published human trials found no clinically significant changes in heart rate, blood pressure, or ECG parameters attributable to beta-alanine.",
                caveat: null,
              },
              {
                concern: "Taurine depletion",
                verdict: "Theoretical in rodents — not observed in humans",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "Beta-alanine and taurine share the TauT transporter into muscle. In rodent studies, high-dose beta-alanine supplementation reduced muscle taurine levels. In humans, no significant taurine depletion has been observed at research doses (Hobson et al., 2012). The concern remains theoretical at recommended human doses, though it is the basis for some products co-supplementing taurine alongside beta-alanine.",
                caveat: "If supplementing at the higher end (6.4g/day) for extended periods, adding 1–2g/day of taurine as a precaution is a reasonable and low-risk choice.",
              },
              {
                concern: "GI discomfort",
                verdict: "Rare — take with food",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "GI side effects from beta-alanine are uncommon and typically mild — occasional nausea or discomfort reported in a small proportion of subjects in trials. Taking beta-alanine with food significantly reduces the incidence. No serious GI adverse events have been reported across the published literature.",
                caveat: null,
              },
              {
                concern: "Long-term use safety",
                verdict: "Well-tolerated up to 8+ weeks — limited data beyond",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "The majority of published trials run 4–12 weeks. No adverse effects have been reported in these timeframes. Data beyond 6 months of continuous use is limited, simply because most trials do not run that long. The ISSN's 2015 position stand concludes available evidence supports its safety, though they note ongoing research is needed for very-long-term use assessment.",
                caveat: null,
              },
            ].map((item) => (
              <div key={item.concern} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", backgroundColor: "#F8F2E4", borderBottom: "1px solid #EDE8DF", flexWrap: "wrap", gap: 8 }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.concern}</p>
                  <span style={{ padding: "3px 10px", backgroundColor: item.verdictBg, border: `1px solid ${item.verdictColor}30`, borderRadius: 6, fontSize: 11, fontWeight: 600, color: item.verdictColor, fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" as const }}>{item.verdict}</span>
                </div>
                <div style={{ padding: "14px 18px", borderLeft: `3px solid ${item.borderColor}` }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0, marginBottom: item.caveat ? 10 : 0 }}>{item.body}</p>
                  {item.caveat && (
                    <p style={{ fontSize: 12, color: "#8B7355", lineHeight: 1.6, margin: 0, paddingTop: 8, borderTop: "1px solid #EDE8DF" }}>
                      <strong>Note:</strong> {item.caveat}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* 7. Who Should Take It */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Who Should — and Shouldn&apos;t — Take Beta-Alanine</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              Beta-alanine&apos;s benefit is narrowly defined: it helps athletes whose performance is limited by muscle acidosis in the 1–4 minute glycolytic window. Outside this specific context, the evidence for benefit is weak.
            </p>

            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Clear performance benefit expected</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
              {[
                {
                  group: "Middle-distance runners & swimmers",
                  detail: "400m–1500m running and 100m–400m swimming are almost entirely glycolytic. Acidosis is the primary fatigue mechanism in these events. The Hobson et al. (2012) meta-analysis found the strongest effect sizes in cycling and running protocols of 1–4 minutes — events that map directly to middle-distance athletics.",
                  tags: ["400m–1500m run", "100m–400m swim", "800m row"],
                },
                {
                  group: "HIIT and interval training athletes",
                  detail: "Protocols with repeated near-maximal intervals (e.g., 30-second to 2-minute efforts with short rests) accumulate significant acidosis across the session. Beta-alanine reduces fatigue in later intervals and maintains work output in the back half of the session — where carnosine depletion would otherwise accelerate force loss.",
                  tags: ["HIIT", "Interval training", "Metabolic conditioning"],
                },
                {
                  group: "Combat sports athletes",
                  detail: "Boxing, MMA, wrestling, and judo rounds typically last 3–5 minutes at near-maximal output. Muscle acidosis between rounds and within rounds limits sustained intensity. Multiple studies in combat sports show beta-alanine improves punch output, work rate, and reduced fatigue in later rounds.",
                  tags: ["Boxing", "MMA", "Wrestling", "Judo", "Kickboxing"],
                },
                {
                  group: "Team sport athletes (soccer, basketball, hockey)",
                  detail: "Repeated sprint ability is critical in team sports. Players who maintain sprint quality in the second half — where accumulated acidosis degrades performance — gain a meaningful competitive advantage. Saunders et al. (2012) demonstrated sustained sprint quality in soccer players during simulated match play.",
                  tags: ["Soccer", "Basketball", "Hockey", "Rugby"],
                },
                {
                  group: "Vegetarians and vegans",
                  detail: "Dietary carnosine is found almost exclusively in animal muscle tissue. Vegetarians and vegans have baseline muscle carnosine levels approximately 20–26% lower than omnivores (Everaert et al., 2011, Amino Acids). The absolute increase from supplementation is similar, but the percentage gains are larger — starting from a lower base.",
                  tags: ["Vegetarian", "Vegan", "Plant-based"],
                },
              ].map((item, i) => (
                <div key={item.group} style={{ padding: "16px 20px", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.group}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 8 }}>{item.detail}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {item.tags.map(t => (
                      <span key={t} style={{ padding: "2px 8px", backgroundColor: "rgba(45,106,79,0.07)", border: "1px solid rgba(45,106,79,0.15)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace" }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B7355", marginBottom: 10 }}>Minimal benefit or not appropriate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  group: "Powerlifters and pure strength athletes",
                  detail: "Maximal strength efforts (1–5 rep range) last under 30 seconds and are dominated by the ATP-PCr system — not glycolysis. Acidosis is not the primary fatigue mechanism in this context. Creatine is the supplement with the strongest evidence for this population, not beta-alanine.",
                  caution: false,
                },
                {
                  group: "Marathon, ultramarathon, and long-distance endurance athletes",
                  detail: "Efforts lasting more than 10–15 minutes are primarily aerobic. Lactate is cleared as fast as it is produced, and muscle acidosis is not the limiter. The meta-analysis by Hobson et al. found no significant performance benefit for efforts exceeding 4 minutes. Beta-alanine is not a relevant supplement for pure endurance performance.",
                  caution: false,
                },
                {
                  group: "People sensitive to paraesthesia who cannot use split doses",
                  detail: "The tingling can range from mildly pleasant to genuinely uncomfortable. If SR CarnoSyn is not accessible and dose splitting is impractical (e.g. taking a single pre-workout serving), the paraesthesia may be a consistent barrier to compliance — reducing the effectiveness of the supplementation strategy.",
                  caution: true,
                },
              ].map((item) => (
                <div key={item.group} style={{ padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: item.caution ? "rgba(139,115,85,0.05)" : "#F2EBD9", borderLeft: `3px solid ${item.caution ? "#8B7355" : "#D4C9B8"}` }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.group}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Pricing */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Pricing & Where to Buy</h2>
            <p>
              Beta-alanine is one of the most affordable performance supplements when purchased as a standalone powder. Most of the market premium comes from branded (CarnoSyn) or slow-release formulations. The performance outcome is equivalent — the SR form only reduces paraesthesia.
            </p>

            <h3>Price benchmarks (USD, May 2026)</h3>
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", backgroundColor: "#1A1714" }}>
                {["Brand / Product", "Form", "Size", "Price (USD)", "Per 3.2g dose"].map((h, i) => (
                  <div key={h} style={{ padding: "10px 12px", borderRight: i < 4 ? "1px solid #2D2926" : "none" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
              {[
                { brand: "Bulk Supplements Beta-Alanine", form: "Standard powder", size: "500g", price: "$14–$18", perDose: "~$0.09–$0.12" },
                { brand: "NOW Sports Beta-Alanine", form: "Standard powder", size: "500g", price: "$18–$25", perDose: "~$0.12–$0.16" },
                { brand: "CarnoSyn (NovaBay)", form: "Standard CarnoSyn", size: "250g", price: "$25–$35", perDose: "~$0.32–$0.45" },
                { brand: "Natural Stacks SR CarnoSyn", form: "Slow-release capsules", size: "120 caps (48g)", price: "$30–$40", perDose: "~$2.00–$2.65" },
                { brand: "Swolverine Beta-Alanine", form: "CarnoSyn powder", size: "250g", price: "$28–$38", perDose: "~$0.36–$0.49" },
              ].map((row, i) => (
                <div key={row.brand} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", borderTop: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  {[row.brand, row.form, row.size, row.price, row.perDose].map((cell, j) => (
                    <div key={j} style={{ padding: "12px 12px", borderRight: j < 4 ? "1px solid #EDE8DF" : "none" }}>
                      <p style={{ fontSize: 13, color: j === 0 ? "#1A1714" : "#5C5650", fontWeight: j === 0 ? 600 : 400, margin: 0 }}>{cell}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>Prices from major US retailers (Amazon, official brand stores), May 2026. Generic beta-alanine powder is the best value — same efficacy as branded CarnoSyn at a fraction of the cost. SR CarnoSyn capsules carry a significant premium for the paraesthesia-reduction benefit.</p>
              </div>
            </div>

            <h3>What to look for on the label</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { step: "01", check: "Verify the ingredient is listed as beta-alanine (not carnosine)", detail: "Some cheaper blends list \"carnosine\" or \"carnosine precursor\" ambiguously. You want beta-alanine specifically, at a declared dose. Carnosine supplementation is not the equivalent and is less effective at raising muscle carnosine levels." },
                { step: "02", check: "Check the dose per serving against the daily target", detail: "Many pre-workout blends contain 1.6–2g beta-alanine per scoop — enough to cause tingling but below the minimum effective daily dose of 3.2g. If it is in a pre-workout you only take once daily, the dose is likely insufficient for meaningful carnosine accumulation without additional supplementation." },
                { step: "03", check: "Look for CarnoSyn certification if buying branded", detail: "CarnoSyn is the patented form used in the majority of published RCTs. It carries quality assurance beyond generic beta-alanine — relevant for competitive athletes in tested sports who need Informed Sport/NSF batch-testing alongside their protein." },
                { step: "04", check: "Avoid products with artificial dyes in capsules", detail: "Some beta-alanine capsule products use artificial colouring that can cause GI sensitivity in susceptible individuals. For capsule forms, look for vegetarian capsules with minimal excipients. For powder, unflavoured beta-alanine has no additives at all." },
              ].map((v, i) => (
                <div key={v.step} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderTop: i > 0 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 16, borderRight: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#C4622D" }}>{v.step}</span>
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{v.check}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. References */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>References</h2>
            <p style={{ fontSize: 13, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              All claims in this profile are drawn from peer-reviewed research. Key sources listed below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { num: "1", cite: "Harris, R.C., Tallon, M.J., Dunnett, M., et al. (2006). The absorption of orally supplied beta-alanine and its effect on muscle carnosine synthesis in human vastus lateralis.", journal: "Amino Acids, 30(3), 279–289." },
                { num: "2", cite: "Hobson, R.M., Saunders, B., Ball, G., Harris, R.C., & Sale, C. (2012). Effects of beta-alanine supplementation on exercise performance: a meta-analysis.", journal: "Amino Acids, 43(1), 25–37." },
                { num: "3", cite: "Sale, C., Saunders, B., & Harris, R.C. (2010). Effect of beta-alanine supplementation on muscle carnosine concentrations and exercise performance.", journal: "Amino Acids, 39(2), 321–333." },
                { num: "4", cite: "Baguet, A., Bourgois, J., Vanhee, L., Achten, E., & Derave, W. (2010). Important role of muscle carnosine in rowing performance.", journal: "Journal of Applied Physiology, 109(4), 1096–1101." },
                { num: "5", cite: "Smith, A.E., Walter, A.A., Graef, J.L., et al. (2009). Effects of beta-alanine supplementation and high-intensity interval training on endurance performance and body composition in men.", journal: "Journal of the International Society of Sports Nutrition, 6, 5." },
                { num: "6", cite: "Saunders, B., Sunderland, C., Harris, R.C., & Sale, C. (2012). Beta-alanine supplementation improves YoYo intermittent recovery test performance.", journal: "Journal of the International Society of Sports Physiology and Performance, 7(4), 349–357." },
                { num: "7", cite: "Stout, J.R., Cramer, J.T., Zoeller, R.F., et al. (2007). Effects of beta-alanine supplementation on the onset of neuromuscular fatigue and ventilatory threshold in women.", journal: "Amino Acids, 32(3), 381–386." },
                { num: "8", cite: "Stellingwerff, T., Anwander, H., Egger, A., et al. (2012). Effect of two beta-alanine dosing protocols on muscle carnosine synthesis and washout.", journal: "Amino Acids, 42(6), 2461–2472." },
                { num: "9", cite: "Dutka, T.L., & Lamb, G.D. (2004). Effect of carnosine on excitation-contraction coupling in mechanically-skinned rat skeletal muscle.", journal: "Journal of Muscle Research and Cell Motility, 25(3), 203–213." },
                { num: "10", cite: "Boldyrev, A.A., Aldini, G., & Derave, W. (2013). Physiology and pathophysiology of carnosine.", journal: "Physiological Reviews, 93(4), 1803–1845." },
                { num: "11", cite: "Everaert, I., Mooyaart, A., Baguet, A., et al. (2011). Vegetarianism, female gender and increasing age, but not CNDP1 genotype, are associated with reduced muscle carnosine levels in humans.", journal: "Amino Acids, 40(4), 1221–1229." },
                { num: "12", cite: "Hipkiss, A.R., Preston, J.E., Himsworth, D.T., Worthington, V.C., & Abbott, N.J. (2001). Protective effects of carnosine against malondialdehyde-induced toxicity towards cultured rat brain endothelial cells.", journal: "Neuroscience Letters, 238(3), 135–138." },
                { num: "13", cite: "Derave, W., Özdemir, M.S., Harris, R.C., et al. (2007). Beta-alanine supplementation augments muscle carnosine content and attenuates fatigue during repeated isokinetic contraction bouts in trained sprinters.", journal: "Journal of Applied Physiology, 103(5), 1736–1743." },
                { num: "14", cite: "Artioli, G.G., Gualano, B., Smith, A., Stout, J., & Lancha, A.H. Jr. (2010). Role of beta-alanine supplementation on muscle carnosine and exercise performance.", journal: "Medicine & Science in Sports & Exercise, 42(6), 1162–1173." },
              ].map((ref, i) => (
                <div key={ref.num} style={{ display: "grid", gridTemplateColumns: "32px 1fr", borderTop: i > 0 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 14, borderRight: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>{ref.num}</span>
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ fontSize: 12, color: "#2D2926", lineHeight: 1.65, margin: 0 }}>
                      {ref.cite} <em style={{ color: "#8A8480" }}>{ref.journal}</em>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. FAQ */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
              {[
                {
                  q: "Why does beta-alanine make you tingle?",
                  a: "Beta-alanine binds to MrgprD sensory nerve receptors in the skin, triggering a harmless tingling response (paraesthesia). It is dose-rate-dependent and resolves within 60–90 minutes. Splitting doses to ≤1.6g per serving or using SR CarnoSyn dramatically reduces intensity. It is not a sign of anything going wrong.",
                },
                {
                  q: "How long does beta-alanine take to work?",
                  a: "4–12 weeks of daily supplementation at 3.2–6.4g/day. Muscle carnosine rises 20–30% after 4 weeks and 40–80% after 10–12 weeks. There is no acute single-dose effect — you will not notice a difference on day one. Consistent daily intake over weeks is what produces the performance benefit.",
                },
                {
                  q: "What type of exercise does beta-alanine work for?",
                  a: "High-intensity efforts lasting 1–4 minutes where muscle acidosis (H+ accumulation) is the primary fatigue driver. Best evidence: 400m–1500m running, 100m–400m swimming, rowing, combat sports rounds, HIIT intervals, and repeated sprint bouts in team sports. Minimal benefit for powerlifting (<30 sec efforts) or endurance (>10 min efforts).",
                },
                {
                  q: "Should I take beta-alanine before or after a workout?",
                  a: "Timing does not matter — beta-alanine works by slowly elevating muscle carnosine over weeks, not via an acute pre-workout mechanism. Spread your daily dose across 2–4 meals for comfort. Many products include it in pre-workout blends for convenience, but this is not necessary for efficacy.",
                },
                {
                  q: "Is beta-alanine the same as carnosine?",
                  a: "No. Beta-alanine is a precursor to carnosine — your muscle combines it with histidine to synthesise carnosine. Supplementing carnosine directly is ineffective because carnosinase enzymes break it down before it reaches muscle. Beta-alanine bypasses this problem.",
                },
                {
                  q: "Can you stack beta-alanine with creatine?",
                  a: "Yes. They target completely different energy systems — creatine replenishes the ATP-PCr system (0–10 second efforts) and beta-alanine buffers acidosis in the glycolytic system (1–4 minute efforts). No negative interactions exist. Athletes doing HIIT, circuit training, or multi-modal sport benefit from both simultaneously.",
                },
              ].map((faq, i) => (
                <div key={i} style={{ padding: "20px", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Related Reviews */}
          <section>
            <SectionHeading label="Products" figure="§ REL" title="Products containing" titleItalic="beta-alanine" size="sm" />
            <div style={{ padding: "20px 24px", border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
              <p style={{ fontSize: 13, color: "#8A8480", margin: 0 }}>
                Full beta-alanine product reviews are in progress. Beta-alanine appears in our reviewed pre-workout and endurance supplement products — see the <Link href="/ingredients" style={{ color: "#C4622D", fontWeight: 600 }}>Ingredients index</Link> and <Link href="/best" style={{ color: "#C4622D", fontWeight: 600 }}>Best Of</Link> pages for product recommendations containing beta-alanine.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
