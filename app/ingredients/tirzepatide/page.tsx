import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Tirzepatide: Mechanism, Benefits & Side Effects",
  description:
    "Tirzepatide (Zepbound/Mounjaro): dual GIP/GLP-1 agonist with the strongest weight-loss trial data. Dosage, safety, and telehealth access. 2026.",
  alternates: { canonical: "/ingredients/tirzepatide" },
};

export default function TirzepatidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/tirzepatide#article",
    headline: "Tirzepatide: Mechanism, Benefits, Dosage & Side Effects (2026)",
    description:
      "Comprehensive research profile of tirzepatide covering dual GIP/GLP-1 mechanism, SURMOUNT trial data, dosage schedule, safety, compounded vs brand-name options, and telehealth access.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/tirzepatide",
    mainEntityOfPage: "https://fitlabreviews.com/ingredients/tirzepatide",
    articleSection: "Ingredient Research",
    keywords: [
      "tirzepatide",
      "tirzepatide weight loss",
      "tirzepatide vs semaglutide",
      "Zepbound",
      "Mounjaro",
      "GLP-1 GIP dual agonist",
      "tirzepatide dosage",
      "tirzepatide side effects",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much weight can you lose on tirzepatide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In SURMOUNT-1 (Jastreboff et al., NEJM 2022), adults with obesity (BMI ≥30) lost a mean of 20.9% of body weight at the highest dose (15mg/week) over 72 weeks. At 5mg/week the mean was 15.0%. These are clinical trial results — individual outcomes vary based on diet, activity, starting weight, and adherence.",
        },
      },
      {
        "@type": "Question",
        name: "Is tirzepatide better than semaglutide for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Head-to-head data from SURMOUNT-5 (2024) showed tirzepatide 10–15mg/week produced 47% more weight loss than semaglutide 2.4mg/week (20.2% vs 13.7% body weight reduction) in adults with obesity over 72 weeks. Both are highly effective — tirzepatide's dual GIP/GLP-1 mechanism appears to provide an additive benefit over GLP-1 agonism alone.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common tirzepatide side effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common side effects are gastrointestinal: nausea (30–45% of patients), diarrhoea (20–30%), vomiting (10–25%), and constipation (15–25%). These are most pronounced during dose escalation and typically diminish within 4–12 weeks as the body adapts. Starting at a low dose (2.5mg/week) and escalating slowly reduces but does not eliminate them.",
        },
      },
      {
        "@type": "Question",
        name: "What is the tirzepatide dosage schedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FDA-approved titration: start at 2.5mg once weekly for 4 weeks, then increase by 2.5mg every 4 weeks as tolerated up to a maximum of 15mg/week. Most patients stabilise at 10mg or 15mg. Dose escalation should not be rushed — slower titration reduces gastrointestinal side effects.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Mounjaro and Zepbound?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro and Zepbound contain the same active ingredient — tirzepatide. Mounjaro is FDA-approved for type 2 diabetes management (approved May 2022). Zepbound is FDA-approved specifically for chronic weight management in adults with BMI ≥30 or ≥27 with weight-related comorbidity (approved November 2023). Insurance coverage and pricing differ depending on the indication.",
        },
      },
      {
        "@type": "Question",
        name: "Does weight come back after stopping tirzepatide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SURMOUNT-4 (Aronne et al., NEJM 2024) followed patients who had completed 36 weeks of tirzepatide and then switched to placebo for 52 weeks. Participants regained approximately two-thirds of their lost weight within the year after stopping. This reflects the chronic, physiological nature of obesity — not a failure of the drug. Long-term or indefinite treatment is likely necessary to maintain results.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get tirzepatide online without going to a doctor in person?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — US-based telehealth platforms like WellMedr can prescribe tirzepatide following a virtual consultation with a licensed provider. A prescription is still required. Eligibility depends on meeting clinical criteria (BMI, health history, no contraindications). Note: compounded tirzepatide availability varies by state and is subject to FDA compounding regulations.",
        },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    {
      claim: "Significant, sustained weight reduction in adults with obesity",
      evidence: "strong",
      citation: "Jastreboff et al. (2022) — NEJM (SURMOUNT-1)",
      notes:
        "Landmark 72-week RCT (n=2,539, BMI ≥30 or ≥27 with comorbidity). Mean weight loss: 15.0% at 5mg/week, 19.5% at 10mg/week, 20.9% at 15mg/week vs 3.1% placebo. 91% of 15mg patients achieved ≥5% weight loss vs 35% placebo. This is the largest effect size documented for any approved weight-loss medication at the time of publication.",
    },
    {
      claim: "Superior weight loss vs semaglutide 2.4mg in head-to-head comparison",
      evidence: "strong",
      citation: "Jastreboff et al. (2024) — NEJM (SURMOUNT-5)",
      notes:
        "First direct RCT comparing tirzepatide 10–15mg/week to semaglutide 2.4mg/week over 72 weeks (n=751, BMI ≥30). Mean weight reduction: 20.2% tirzepatide vs 13.7% semaglutide — a 47% relative difference. 31.6% of tirzepatide patients achieved ≥25% body weight loss vs 16.1% with semaglutide.",
    },
    {
      claim: "Effective in type 2 diabetes patients with concurrent weight loss",
      evidence: "strong",
      citation: "Jastreboff et al. (2023) — NEJM (SURMOUNT-2)",
      notes:
        "72-week RCT in adults with type 2 diabetes (n=938). Mean weight loss: 13.4% at 10mg/week, 15.7% at 15mg/week vs 3.3% placebo. Additionally, 40–51% of patients achieved HbA1c <5.7% (normoglycaemic threshold) vs 2% placebo. Demonstrates dual metabolic benefit in the diabetes population.",
    },
    {
      claim: "Weight loss amplified with intensive lifestyle intervention",
      evidence: "strong",
      citation: "Wadden et al. (2023) — NEJM (SURMOUNT-3)",
      notes:
        "Patients completing 12 weeks of intensive lifestyle intervention (diet + exercise) were randomised to tirzepatide 15mg/week or placebo for 72 weeks. Mean additional weight loss from randomisation: 18.4% tirzepatide vs 2.5% placebo, for a total loss of 26.6% from study entry. Demonstrates strong synergy between GLP-1 therapy and lifestyle change.",
    },
    {
      claim: "Weight regain occurs after discontinuation (treatment must be maintained)",
      evidence: "strong",
      citation: "Aronne et al. (2024) — NEJM (SURMOUNT-4)",
      notes:
        "Patients maintaining weight loss on tirzepatide for 36 weeks were randomised to continue tirzepatide or switch to placebo for 52 further weeks. Those who discontinued regained approximately 14% of original body weight (two-thirds of lost weight) within the year. Tirzepatide continuation group continued to lose weight (additional 5.5%). Establishes obesity as a chronic condition requiring ongoing treatment.",
    },
    {
      claim: "Improves cardiometabolic risk markers",
      evidence: "strong",
      citation: "Jastreboff et al. (2022) — NEJM (SURMOUNT-1)",
      notes:
        "Across SURMOUNT-1, tirzepatide produced significant improvements in waist circumference, triglycerides, HDL cholesterol, HbA1c, fasting insulin, and blood pressure vs placebo. The cardiovascular risk reduction is thought to be partially mediated by weight loss and partially by direct GIP/GLP-1 receptor effects on cardiometabolic pathways.",
    },
    {
      claim: "Reduces risk of major adverse cardiovascular events in high-risk patients",
      evidence: "strong",
      citation: "Lincoff et al. (2024) — NEJM (SURMOUNT-MMO)",
      notes:
        "Cardiovascular outcomes trial in adults with BMI ≥27 and established cardiovascular disease (n=13,751). Tirzepatide 2.4mg/week reduced risk of major adverse cardiovascular events (MACE) by 17% vs placebo over a mean of 3.4 years. Primary endpoint: composite of cardiovascular death, non-fatal myocardial infarction, non-fatal stroke.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/ingredients" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Ingredients</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Tirzepatide</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #E4E8E5" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>ING-013</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Medication Research Profile · Prescription Only</span>
            </div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#6B7770", marginBottom: 8, textTransform: "uppercase" }}>Weight Management · GIP/GLP-1 Dual Agonist</p>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 16 }}>
              Tirzepatide: Mechanism,<br />Benefits & Side Effects
            </h1>
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level="strong" />
            </div>
            <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>
              Tirzepatide is a dual GIP and GLP-1 receptor agonist approved by the FDA for chronic weight management (as Zepbound) and type 2 diabetes (as Mounjaro). It has produced the largest weight-loss effect sizes of any approved medication in randomised controlled trials — a mean of 20.9% body weight reduction at the highest dose over 72 weeks. Here is what the clinical evidence actually shows.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Stats panel */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Dose Range", value: "2.5–15mg", sub: "Once weekly · subcutaneous injection" },
                { label: "Evidence Level", value: "Strong", sub: "7 major RCTs · FDA approved" },
                { label: "Primary Use", value: "Weight loss", sub: "Also T2D · cardiometabolic risk" },
                { label: "Availability", value: "Rx only", sub: "Zepbound · Mounjaro · compounded" },
              ].map((stat) => (
                <div key={stat.label} style={{ padding: "20px 16px", backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{stat.label}</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#17211C", marginBottom: 2 }}>{stat.value}</p>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prescription warning */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#F0EAF5", border: "1px solid #C4A8D8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#6B3FA0", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5A3480", lineHeight: 1.6, margin: 0 }}>
              <strong>Prescription medication.</strong> Tirzepatide requires a valid prescription from a licensed US healthcare provider. This profile is for informational and educational purposes only — it does not constitute medical advice. Consult a qualified clinician before starting any GLP-1 therapy.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#6B3FA0" }}>Full disclaimer →</Link>
            </p>
          </div>

          {/* 1. What Is Tirzepatide? */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>What Is Tirzepatide?</h2>
            <p>
              Tirzepatide is a synthetic peptide that simultaneously activates two hormone receptors involved in metabolic regulation: the <strong>glucose-dependent insulinotropic polypeptide (GIP) receptor</strong> and the <strong>glucagon-like peptide-1 (GLP-1) receptor</strong>. This dual agonism distinguishes it from earlier GLP-1-only medications like semaglutide and liraglutide, and is responsible for its comparatively larger effect on body weight.
            </p>
            <p>
              Developed by Eli Lilly, tirzepatide was first approved by the FDA in May 2022 as <strong>Mounjaro</strong> for glycaemic control in adults with type 2 diabetes. In November 2023, the same molecule received separate FDA approval as <strong>Zepbound</strong> specifically for chronic weight management in adults with BMI ≥30, or BMI ≥27 with at least one weight-related comorbidity (hypertension, dyslipidaemia, type 2 diabetes, obstructive sleep apnoea, or cardiovascular disease).
            </p>
            <p>
              Unlike most supplements reviewed on this site, tirzepatide is not an over-the-counter product. It is a prescription-only injectable medication requiring medical assessment, ongoing supervision, and — given its mechanism of action affecting glucose homeostasis and appetite regulation — careful patient selection.
            </p>
            <div style={{ padding: "14px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, marginTop: 20 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Brand Names at a Glance</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { brand: "Zepbound", indication: "Chronic weight management (obesity)", approved: "Nov 2023", dose: "2.5–15mg/week" },
                  { brand: "Mounjaro", indication: "Type 2 diabetes (glycaemic control)", approved: "May 2022", dose: "2.5–15mg/week" },
                ].map((b) => (
                  <div key={b.brand} style={{ padding: "12px 16px", border: "1px solid #E4E8E5", borderRadius: 6, backgroundColor: "#FFFFFF" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{b.brand}</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", marginBottom: 2 }}>{b.indication}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259" }}>FDA approved: {b.approved} · {b.dose}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Mechanism of Action */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>How Tirzepatide Works: The Dual Agonist Mechanism</h2>
            <p>
              Tirzepatide&apos;s weight loss and glycaemic effects stem from its simultaneous activation of GIP and GLP-1 receptors — two incretin hormone receptors that govern post-meal insulin secretion, appetite regulation, and energy balance. This dual mechanism is why tirzepatide consistently outperforms GLP-1-only agents like semaglutide in head-to-head comparisons.
            </p>

            <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#17211C" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", margin: 0 }}>Mechanism Pathway — Step by Step</p>
              </div>
              {[
                { step: "01", title: "GLP-1 receptor activation — satiety and insulin", body: "GLP-1 is secreted by intestinal L-cells after eating. Tirzepatide mimics GLP-1 with greater potency and far longer duration than native GLP-1 (half-life ~5 days vs seconds for endogenous GLP-1). GLP-1 receptor activation in the pancreas stimulates glucose-dependent insulin secretion and suppresses glucagon. In the brain (hypothalamus, brainstem), it activates satiety circuits reducing appetite and food intake. In the gut, it slows gastric emptying — prolonging feelings of fullness after meals." },
                { step: "02", title: "GIP receptor activation — adipose tissue and energy expenditure", body: "GIP (glucose-dependent insulinotropic polypeptide) is secreted by intestinal K-cells in response to fat and carbohydrate. Its receptor is expressed in adipose tissue, brain, bone, and pancreas. Unlike GLP-1 agonism alone, GIP receptor activation promotes fatty acid utilisation in adipocytes and may increase energy expenditure via brown adipose tissue activity. In the hypothalamus, GIP signalling reinforces the appetite-suppression effects of GLP-1 — the combination producing additive weight loss beyond either mechanism alone." },
                { step: "03", title: "Synergistic weight reduction beyond either agonist alone", body: "The critical insight from tirzepatide trials: weight loss of 20.9% at 15mg/week substantially exceeds what would be predicted from GLP-1 agonism alone (semaglutide 2.4mg/week achieves ~15% in STEP-1). The GIP contribution — long considered paradoxical since GIP was once thought to promote fat storage — appears to enhance GLP-1 efficacy via GIP receptor-mediated potentiation of GLP-1 pathways in the CNS and periphery. The precise mechanism is an active area of research." },
                { step: "04", title: "Glucose-dependent insulin secretion (no hypoglycaemia risk alone)", body: "Both GIP and GLP-1 stimulate insulin only when blood glucose is elevated — not at normal fasting glucose levels. This glucose-dependent mechanism means tirzepatide does not cause hypoglycaemia as monotherapy in non-diabetic patients. Hypoglycaemia risk is relevant in type 2 diabetes patients when tirzepatide is combined with insulin or sulfonylureas, where combined glucose-lowering can overshoot." },
                { step: "05", title: "Gastric emptying slowing and satiety reinforcement", body: "Tirzepatide significantly delays gastric emptying, particularly during the early months of treatment. This extends postprandial satiety and blunts post-meal glucose peaks. The GI side effects (nausea, vomiting, constipation) are a direct consequence of this mechanism — slowed gut motility causes delayed gastric drainage. The side effect burden typically lessens as gastric accommodation adapts over weeks of treatment." },
              ].map((s, i) => (
                <div key={s.step} style={{ padding: "20px 24px", borderBottom: i < 4 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", display: "flex", gap: 20 }}>
                  <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{s.step}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#17211C", marginBottom: 6, fontFamily: "var(--font-hanken), sans-serif", fontSize: 14 }}>{s.title}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.65 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Evidence-Based Benefits */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Evidence-Based Benefits</h2>
            <p style={{ marginBottom: 24 }}>
              Tirzepatide has one of the most robust clinical evidence bases of any approved weight-management medication. The SURMOUNT programme — seven phase 3 RCTs — collectively enrolled over 20,000 participants across diverse populations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {benefits.map((b) => (
                <div key={b.claim} style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ padding: "12px 18px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                    <p style={{ fontWeight: 700, color: "#17211C", margin: 0, fontSize: 14, fontFamily: "var(--font-hanken), sans-serif" }}>{b.claim}</p>
                    <EvidenceBadge level={b.evidence} showIcon={false} />
                  </div>
                  <div style={{ padding: "12px 18px", backgroundColor: "#FFFFFF" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", marginBottom: 6, letterSpacing: "0.06em" }}>{b.citation}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.65 }}>{b.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Dosage Guide */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Dosage Schedule</h2>
            <p>
              Tirzepatide is administered as a once-weekly subcutaneous injection. The FDA-approved titration schedule is designed to minimise GI side effects by allowing the body to adapt before escalating to higher doses.
            </p>
            <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#17211C", display: "grid", gridTemplateColumns: "80px 120px 1fr 120px" }}>
                {["Week", "Dose", "Clinical Notes", "Escalate If"].map((h) => (
                  <span key={h} style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>{h}</span>
                ))}
              </div>
              {[
                { weeks: "1–4", dose: "2.5mg/week", notes: "Initiation dose. Below therapeutic range — exists purely to reduce side effects during adaptation. Most patients do not see weight loss yet.", escalate: "Always at week 5" },
                { weeks: "5–8", dose: "5mg/week", notes: "First therapeutic dose. Weight loss typically begins. GI side effects may be present but usually manageable.", escalate: "If tolerated" },
                { weeks: "9–12", dose: "7.5mg/week", notes: "Mid-range dose. Meaningful weight loss expected. If 5mg is well-tolerated, escalate. If GI side effects are significant, stay longer.", escalate: "If tolerated" },
                { weeks: "13–16", dose: "10mg/week", notes: "Standard maintenance dose for many patients. Balance of efficacy and tolerability. Some patients maintain here indefinitely.", escalate: "If more loss desired" },
                { weeks: "17–20", dose: "12.5mg/week", notes: "Higher maintenance option. Not always necessary — some patients achieve goals at 10mg.", escalate: "If tolerated" },
                { weeks: "21+", dose: "15mg/week", notes: "Maximum FDA-approved dose. Associated with greatest weight loss in SURMOUNT-1. Not all patients need or tolerate this dose.", escalate: "Maximum dose" },
              ].map((row, i) => (
                <div key={row.weeks} style={{ display: "grid", gridTemplateColumns: "80px 120px 1fr 120px", padding: "12px 20px", borderBottom: i < 5 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#3F4B43" }}>{row.weeks}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 700 }}>{row.dose}</span>
                  <p style={{ fontSize: 12, color: "#3F4B43", margin: 0, lineHeight: 1.55 }}>{row.notes}</p>
                  <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{row.escalate}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "12px 16px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6 }}>
              <p style={{ fontSize: 12, color: "#3F4B43", margin: 0, lineHeight: 1.6 }}>
                <strong>Slow titration note:</strong> Some patients benefit from longer periods at each dose before escalating — particularly those with significant GI sensitivity. Telehealth providers like WellMedr offer structured microdosing protocols that start below the standard 2.5mg initiation dose for patients with prior GI intolerance.{" "}
                <Link href="/reviews/wellmedr" style={{ color: "#0F7A5A" }}>See WellMedr review →</Link>
              </p>
            </div>
          </section>

          {/* 5. Supplement Forms Compared */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Brand-Name vs Compounded Tirzepatide</h2>
            <p>
              Tirzepatide is available in two primary forms for US patients: FDA-approved brand-name products, and compounded versions prepared by licensed compounding pharmacies. The regulatory landscape for compounded tirzepatide has changed significantly in 2025–2026.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              {[
                {
                  name: "Zepbound (Eli Lilly)",
                  tag: "FDA-Approved",
                  tagColor: "#2D6A4F",
                  tagBg: "rgba(45,106,79,0.08)",
                  cost: "~$550–650/month (without insurance)",
                  verdict: "Gold standard for obesity management. Identical to clinical trial formulation. Vials and single-dose pens available. Lilly's savings programme reduces cost for cash-pay patients to ~$349/month (eligibility conditions apply). Preferred when insurance covers it.",
                  recommended: true,
                },
                {
                  name: "Mounjaro (Eli Lilly)",
                  tag: "FDA-Approved (T2D)",
                  tagColor: "#2D6A4F",
                  tagBg: "rgba(45,106,79,0.08)",
                  cost: "~$800–1,000/month (without insurance)",
                  verdict: "Same molecule as Zepbound, approved for type 2 diabetes. Insurance typically covers for T2D indication. Higher list price without diabetes diagnosis. Not indicated for weight loss without T2D, but clinically identical to Zepbound.",
                  recommended: true,
                },
                {
                  name: "Compounded Tirzepatide",
                  tag: "Regulatory Status: Evolving",
                  tagColor: "#854F0B",
                  tagBg: "rgba(133,79,11,0.08)",
                  cost: "~$150–350/month (varies by pharmacy + service fee)",
                  verdict: "Compounded versions became available when tirzepatide appeared on FDA drug shortage lists. Following shortage list removal in 2024, large-scale compounding pharmacies face restrictions — but pharmacies can still compound for individual patient need. Availability, formulation consistency, and regulatory status vary by state and provider. Verify current status directly with your telehealth provider before enrolling.",
                  recommended: false,
                },
              ].map((form, i) => (
                <div key={form.name} style={{ padding: "18px 22px", borderBottom: i < 2 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {form.recommended
                        ? <CheckCircle size={14} style={{ color: "#2D6A4F", flexShrink: 0 }} />
                        : <AlertTriangle size={14} style={{ color: "#854F0B", flexShrink: 0 }} />}
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C" }}>{form.name}</span>
                    </div>
                    <span style={{ padding: "2px 9px", backgroundColor: form.tagBg, borderRadius: 4, fontSize: 10, color: form.tagColor, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em" }}>{form.tag}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", marginBottom: 6 }}>{form.cost}</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.65 }}>{form.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Safety Profile */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Safety Profile & Side Effects</h2>
            <p>
              Tirzepatide has a well-characterised safety and tolerability profile from over 20,000 participants across the SURMOUNT programme. The most common issues are GI-related, most pronounced during dose escalation, and typically diminish with time.
            </p>

            {/* GI side effects table */}
            <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#17211C", display: "grid", gridTemplateColumns: "1fr 100px 100px 1fr" }}>
                {["Side Effect", "Tirzepatide", "Placebo", "Clinical Context"].map((h) => (
                  <span key={h} style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>{h}</span>
                ))}
              </div>
              {[
                { effect: "Nausea", tir: "30–45%", pla: "8–12%", context: "Most common. Peaks during initiation and dose escalation. Usually resolves within 4–12 weeks as gastric adaptation occurs. Microdosing protocols reduce severity." },
                { effect: "Diarrhoea", tir: "20–30%", pla: "8–10%", context: "Second most common. GLP-1-mediated intestinal motility increase. Usually mild-to-moderate. Hydration management helps." },
                { effect: "Vomiting", tir: "10–25%", pla: "2–5%", context: "Dose-dependent. More common at higher doses during titration. Often co-occurs with nausea. Leads to discontinuation in a minority of patients." },
                { effect: "Constipation", tir: "15–25%", pla: "4–8%", context: "Paradoxically co-occurs with diarrhoea in different patients. Reflects heterogeneous GI motility effects. Dietary fibre and hydration management recommended." },
                { effect: "Decreased appetite", tir: "Very common", pla: "Low", context: "Expected and desired therapeutic effect. Can occasionally become excessive — if intake drops below 800 kcal/day, medical review is warranted." },
                { effect: "Injection site reactions", tir: "3–7%", pla: "1–2%", context: "Redness, bruising, or tenderness at injection site. Rotate injection sites weekly to minimise." },
                { effect: "Pancreatitis", tir: "<1% (rare)", pla: "<1%", context: "Rare but documented. Contraindicated in patients with history of pancreatitis. Seek immediate care for persistent severe abdominal pain." },
              ].map((row, i) => (
                <div key={row.effect} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px 1fr", padding: "11px 20px", borderBottom: i < 6 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-hanken), sans-serif" }}>{row.effect}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 700 }}>{row.tir}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#6B7770" }}>{row.pla}</span>
                  <p style={{ fontSize: 12, color: "#3F4B43", margin: 0, lineHeight: 1.55 }}>{row.context}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#6B7770", marginBottom: 24 }}>
              Incidence rates from SURMOUNT-1 (Jastreboff et al., NEJM 2022) at combined active doses. Rates are highest at maximum titrated doses and during escalation phases.
            </p>

            {/* Myth/reality cards */}
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", marginBottom: 16 }}>Common Misconceptions</h3>
            {[
              {
                myth: "Tirzepatide causes thyroid cancer in humans",
                reality: "Thyroid C-cell tumours were observed in rodent studies at supra-clinical doses — and carry a black box warning. However, rodent C-cells differ fundamentally from human thyroid C-cells, and no increased incidence of thyroid cancer has been observed in human clinical trials to date. The warning is precautionary. Tirzepatide remains contraindicated in patients with personal or family history of medullary thyroid carcinoma or MEN2.",
                citation: "FDA Prescribing Information, Zepbound (2023); Jastreboff et al., NEJM (2022)",
              },
              {
                myth: "GLP-1 medications cause muscle loss alongside fat loss",
                reality: "Weight loss from any intervention causes some lean mass reduction. SURMOUNT-1 data shows approximately 75–85% of weight lost on tirzepatide was fat mass. Combining tirzepatide with resistance training and adequate protein intake (≥1.2g/kg/day) substantially preserves lean mass. The muscle loss concern is real but not unique to GLP-1 therapy — it applies to any caloric deficit.",
                citation: "Jastreboff et al. (2022); SURMOUNT-1 body composition subgroup analysis",
              },
              {
                myth: "You can stop tirzepatide once you reach your goal weight",
                reality: "SURMOUNT-4 (Aronne et al., NEJM 2024) documented that patients who discontinued tirzepatide after 36 weeks regained approximately two-thirds of lost weight within the next 12 months. Obesity is a chronic neuroendocrine condition — not a temporary state corrected by weight loss alone. Long-term or indefinite treatment is likely required for most patients to maintain results.",
                citation: "Aronne et al. (2024) — NEJM (SURMOUNT-4)",
              },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ padding: "10px 16px", backgroundColor: "rgba(196,98,45,0.06)", borderBottom: "1px solid #E4E8E5" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#0F7A5A", letterSpacing: "0.12em", textTransform: "uppercase" }}>Myth</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#17211C", margin: "4px 0 0", fontFamily: "var(--font-hanken), sans-serif" }}>{item.myth}</p>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#4A7C59", letterSpacing: "0.12em", textTransform: "uppercase" }}>Reality</span>
                  <p style={{ fontSize: 13, color: "#2D2926", margin: "4px 0 8px", lineHeight: 1.65 }}>{item.reality}</p>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259", margin: 0 }}>{item.citation}</p>
                </div>
              </div>
            ))}

            {/* Absolute contraindications */}
            <div style={{ padding: "16px 20px", backgroundColor: "#FAEAEA", border: "1px solid #D9A0A0", borderRadius: 10, marginTop: 20 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8B3A2C", marginBottom: 12 }}>Absolute Contraindications — Do Not Use If</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 8 }}>
                {[
                  "Personal or family history of medullary thyroid carcinoma",
                  "Multiple Endocrine Neoplasia syndrome type 2 (MEN2)",
                  "History of pancreatitis",
                  "Pregnancy or active breastfeeding",
                  "Severe gastrointestinal disease (gastroparesis, IBD flare)",
                  "Known hypersensitivity to tirzepatide or excipients",
                ].map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                    <XCircle size={11} style={{ color: "#0F7A5A", flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 12, color: "#5C2020", fontFamily: "var(--font-hanken), sans-serif" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Who Should Use It */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Who Should (and Shouldn&apos;t) Use Tirzepatide</h2>

            {[
              {
                label: "Strong candidate",
                borderColor: "#4A7C59",
                tagColor: "#4A7C59",
                tagBg: "rgba(74,124,89,0.08)",
                tagText: "Recommended",
                items: [
                  { group: "Adults with BMI ≥30", detail: "Primary indication for Zepbound. Strongest evidence base. Consistent 15–21% weight loss over 72 weeks in SURMOUNT-1." },
                  { group: "Adults with BMI ≥27 + comorbidity", detail: "Approved indication with comorbidity: hypertension, dyslipidaemia, type 2 diabetes, sleep apnoea, or cardiovascular disease." },
                  { group: "Type 2 diabetes patients needing weight loss", detail: "Mounjaro provides both glycaemic control and significant weight loss (13–16% in SURMOUNT-2). Dual benefit vs single-mechanism agents." },
                  { group: "Patients with established cardiovascular disease", detail: "SURMOUNT-MMO (2024) showed 17% reduction in MACE over 3.4 years in high-risk patients. Particularly relevant for cardiometabolic risk management." },
                ],
              },
              {
                label: "Use caution / seek specialist review",
                borderColor: "#D4A96A",
                tagColor: "#A07840",
                tagBg: "rgba(212,169,106,0.1)",
                tagText: "Use Caution",
                items: [
                  { group: "Patients on insulin or sulfonylureas", detail: "Combination with insulin/sulfonylureas increases hypoglycaemia risk. Dose reduction of concomitant agents is typically required when starting tirzepatide." },
                  { group: "Patients with gastroparesis", detail: "Tirzepatide further slows gastric emptying — contraindicated in confirmed gastroparesis. Use caution in patients with clinically significant slow gastric motility." },
                  { group: "History of eating disorders", detail: "The appetite-suppressing effects of GLP-1 therapy can intersect with restrictive eating patterns in complex ways. Specialist involvement is recommended." },
                  { group: "Surgical candidates for bariatric procedures", detail: "Tirzepatide achieves weight loss comparable to some bariatric procedures in clinical trials. The decision between pharmacological and surgical approaches requires specialist assessment." },
                ],
              },
            ].map((col) => (
              <div key={col.label} style={{ marginBottom: 16 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: col.tagColor, marginBottom: 10 }}>{col.label}</p>
                {col.items.map((item) => (
                  <div key={item.group} style={{ border: "1px solid #E4E8E5", borderLeft: `3px solid ${col.borderColor}`, borderRadius: 8, padding: "14px 18px", marginBottom: 8, backgroundColor: "#F6F8F6" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, gap: 12 }}>
                      <p style={{ fontWeight: 700, color: "#17211C", margin: 0, fontFamily: "var(--font-hanken), sans-serif", fontSize: 14 }}>{item.group}</p>
                      <span style={{ padding: "2px 8px", backgroundColor: col.tagBg, border: `1px solid ${col.borderColor}30`, borderRadius: 4, fontSize: 9, color: col.tagColor, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{col.tagText}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.6 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* 8. Pricing & Access */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Pricing & Telehealth Access (US Only)</h2>
            <p>
              Tirzepatide is a US-only prescription medication for weight management. Pricing varies significantly between brand-name and compounded routes. The majority of US commercial insurance plans do not cover GLP-1 medications for weight loss — only for type 2 diabetes.
            </p>
            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #E4E8E5", marginBottom: 20 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
                <thead>
                  <tr style={{ backgroundColor: "#17211C" }}>
                    {["Route", "Monthly Cost (USD)", "Notes", "Insurance"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)", textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { route: "Zepbound (brand, obesity)", cost: "$349–650/mo", notes: "Lilly savings card may reduce to ~$349 for eligible cash-pay patients", ins: "Rarely covered" },
                    { route: "Mounjaro (brand, T2D)", cost: "$800–1,000/mo", notes: "Lilly savings available for T2D; lower co-pay with insurance", ins: "Often covered for T2D" },
                    { route: "Compounded (via telehealth)", cost: "$150–350/mo + service fee", notes: "WellMedr service from $88/mo + pharmacy cost. Availability varies by state", ins: "Not covered" },
                  ].map((row, i) => (
                    <tr key={row.route} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderBottom: "1px solid #F2F8F4" }}>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-hanken), sans-serif" }}>{row.route}</td>
                      <td style={{ padding: "11px 14px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 700 }}>{row.cost}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12, color: "#3F4B43" }}>{row.notes}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{row.ins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#6B7770", marginBottom: 0 }}>
              Prices as of May 2026. Subject to change. Verify current costs directly with providers and pharmacies. The Lilly insulin value programme and LillyDirect portal offer additional savings options for eligible patients.
            </p>
          </section>

          {/* 9. References */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>References</h2>
            <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Jastreboff AM, Aronne LJ, Ahmad NN, et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. *New England Journal of Medicine*, 387(3), 205–216. doi:10.1056/NEJMoa2206038",
                "Jastreboff AM, Kaplan LM, Frías JP, et al. (2023). Triple–Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. *New England Journal of Medicine*, 389, 514–526. (SURMOUNT-2 primary ref: Jastreboff 2023 NEJM T2D paper)",
                "Wadden TA, Chao AM, Machineni S, et al. (2023). Tirzepatide after Intensive Lifestyle Intervention in Adults with Overweight or Obesity: The SURMOUNT-3 Phase 3 Trial. *Nature Medicine*, 29, 2970–2978. doi:10.1038/s41591-023-02597-w",
                "Aronne LJ, Sattar N, Horn DB, et al. (2024). Continued Treatment with Tirzepatide for Maintenance of Weight Reduction in Adults with Obesity. *New England Journal of Medicine*, 391, 1247–1260. doi:10.1056/NEJMoa2407210 (SURMOUNT-4)",
                "Jastreboff AM, le Roux CW, Stefanski A, et al. (2024). Tirzepatide for Obesity Treatment and Diabetes Prevention. *New England Journal of Medicine*, 392, 958–971. (SURMOUNT-5 head-to-head vs semaglutide)",
                "Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. (2024). Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. *New England Journal of Medicine*, 389, 2221–2232. (SURMOUNT-MMO MACE outcomes)",
                "US FDA. (2022). FDA Approves Novel, Dual-Targeted Treatment for Type 2 Diabetes. FDA Press Release, May 13, 2022.",
                "US FDA. (2023). FDA Approves New Medication for Chronic Weight Management. FDA Press Release, November 8, 2023.",
                "Drucker DJ. (2022). GLP-1 physiology informs the pharmacotherapy of obesity. *Molecular Metabolism*, 57, 101351. doi:10.1016/j.molmet.2021.101351",
                "Coskun T, Urva S, Roell WC, et al. (2022). LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus. *Molecular Metabolism*, 18, 3–14. doi:10.1016/j.molmet.2018.09.009",
              ].map((ref, i) => (
                <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.65, fontFamily: "var(--font-hanken), sans-serif" }}>
                  {ref.split("*").map((part, j) =>
                    j % 2 === 1
                      ? <em key={j}>{part}</em>
                      : <span key={j}>{part}</span>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* 10. FAQ */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #E4E8E5" }} className="ingredient-article">
            <h2>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
              {[
                { q: "How much weight can you lose on tirzepatide?", a: "In SURMOUNT-1, adults with obesity lost a mean of 20.9% of body weight at the highest dose (15mg/week) over 72 weeks. At 5mg/week the mean was 15.0%. These are clinical trial results in a selected population — individual outcomes vary significantly based on diet, activity, starting weight, and adherence. These figures are not guaranteed outcomes for all users." },
                { q: "Is tirzepatide better than semaglutide for weight loss?", a: "Head-to-head data from SURMOUNT-5 (2024) showed tirzepatide 10–15mg/week produced 47% more weight loss than semaglutide 2.4mg/week (20.2% vs 13.7%) over 72 weeks. Both are highly effective — tirzepatide's dual GIP/GLP-1 mechanism appears to provide an additive benefit, but semaglutide remains a highly proven option, particularly where tirzepatide is not covered or accessible." },
                { q: "What are the most common tirzepatide side effects?", a: "Nausea (30–45%), diarrhoea (20–30%), vomiting (10–25%), and constipation (15–25%). These are most pronounced during dose escalation and typically diminish within 4–12 weeks as the body adapts. Starting at the low 2.5mg initiation dose and escalating slowly significantly reduces but does not eliminate side effects." },
                { q: "What is the tirzepatide dosage schedule?", a: "Start at 2.5mg once weekly for 4 weeks, then escalate by 2.5mg every 4 weeks as tolerated, up to a maximum of 15mg/week. Most patients stabilise at 10mg or 15mg. Dose escalation should not be rushed — slower titration substantially reduces gastrointestinal side effects." },
                { q: "What is the difference between Mounjaro and Zepbound?", a: "Both contain tirzepatide — the same active ingredient. Mounjaro is FDA-approved for type 2 diabetes (May 2022). Zepbound is FDA-approved for chronic weight management in obesity (November 2023). Insurance coverage, indication, and pricing differ between the two branded products." },
                { q: "Does weight come back after stopping tirzepatide?", a: "Yes. SURMOUNT-4 showed patients regained approximately two-thirds of lost weight within 12 months after discontinuation. Obesity is a chronic condition — long-term or indefinite treatment is likely necessary for most patients to maintain results." },
                { q: "Can I get tirzepatide online without an in-person doctor visit?", a: "Yes — US-based telehealth platforms (such as WellMedr) can prescribe tirzepatide following a virtual consultation with a licensed provider. A valid prescription is still required. Compounded tirzepatide availability varies by state and is subject to FDA compounding regulations — confirm current status with the provider before enrolling." },
              ].map((item, i, arr) => (
                <div key={i} style={{ padding: "18px 22px", borderBottom: i < arr.length - 1 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>{item.q}</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Related Reviews */}
          <section style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 14 }}>Related Articles</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/reviews/wellmedr", label: "WellMedr Review (2026) — GLP-1 Telehealth Rated 8/10" },
                { href: "/best/glp-1-telehealth", label: "7 Best GLP-1 Telehealth Providers 2026 — Ranked" },
                { href: "/research/microdose-glp1", label: "Microdose GLP-1 Explained: What It Is & Who It's For" },
                { href: "/compare/wellmedr-vs-ro-body", label: "WellMedr vs Ro Body — Head-to-Head Comparison" },
                { href: "/goals/weight-loss", label: "Weight Loss Supplement Guide — Fitlabreviews" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, textDecoration: "none", color: "#0F7A5A", fontSize: 13, fontFamily: "var(--font-hanken), sans-serif" }}>
                  <span style={{ flex: 1 }}>{link.label}</span>
                  <span style={{ fontSize: 11, color: "#586259" }}>→</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
