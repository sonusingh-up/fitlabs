import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Omega-3 (EPA & DHA) — Dosage, Benefits & Best Forms",
  description: "Omega-3 (EPA + DHA) reduce cardiovascular risk, joint inflammation, and soreness. Evidence-based dose guide, fish oil vs krill vs algae, safety.",
  alternates: { canonical: "/ingredients/omega-3" },
};

export default function Omega3Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/omega-3#article",
    headline: "Omega-3 (EPA & DHA): Benefits, Dosage & Best Forms",
    description: "Comprehensive evidence-based profile of omega-3 fatty acids covering eicosanoid mechanism, cardiovascular, joint, and recovery benefits, dosing protocols, and form comparisons (fish oil, krill, algae).",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/omega-3",
    mainEntityOfPage: "https://fitlabreviews.com/ingredients/omega-3",
    articleSection: "Ingredient Research",
    keywords: ["omega-3 benefits", "fish oil dosage", "EPA DHA", "omega-3 for inflammation", "fish oil vs krill oil", "omega-3 for athletes"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much omega-3 should I take per day?",
        acceptedAnswer: { "@type": "Answer", text: "For general cardiovascular health: 1–2g combined EPA+DHA per day. For anti-inflammatory therapeutic effects (joint pain, recovery): 2–4g EPA+DHA per day. Always check the EPA+DHA content on the label — most fish oil capsules contain only 300mg EPA+DHA per 1g capsule, so you may need 3–10 capsules to reach effective doses. The FDA considers up to 3g/day as GRAS (Generally Recognised As Safe)." },
      },
      {
        "@type": "Question",
        name: "What is the difference between EPA and DHA?",
        acceptedAnswer: { "@type": "Answer", text: "EPA (eicosapentaenoic acid) is primarily anti-inflammatory — it serves as a substrate for anti-inflammatory eicosanoids (prostaglandins, thromboxanes) and has the strongest evidence for depression and cardiovascular event reduction. DHA (docosahexaenoic acid) is the dominant structural fatty acid in brain and retinal tissue — essential for cognitive development, visual function, and neuroplasticity. Both are important; most supplements provide both. EPA appears more potent for depression and inflammation; DHA is prioritised for brain health and pregnancy." },
      },
      {
        "@type": "Question",
        name: "Is fish oil or krill oil better?",
        acceptedAnswer: { "@type": "Answer", text: "Both are effective at matched EPA+DHA doses. Krill oil provides EPA and DHA in phospholipid form (vs triglyceride in fish oil), which may improve cell membrane incorporation at lower doses. Krill oil also contains astaxanthin (an antioxidant that protects the omega-3s). Fish oil is significantly cheaper per gram of EPA+DHA and has a far larger evidence base. Unless you have specific reasons to choose krill (shellfish allergy contraindicated), fish oil is the practical default." },
      },
      {
        "@type": "Question",
        name: "Why do some fish oil supplements smell and taste fishy?",
        acceptedAnswer: { "@type": "Answer", text: "Fishy burps and odour are signs of oxidised (rancid) omega-3 oil. Fresh, high-quality fish oil should be nearly odourless. Oxidation reduces efficacy and may increase cardiovascular risk. Buy from brands that provide TOTOX (total oxidation) values, store capsules in the fridge after opening, and choose enteric-coated capsules if GI issues persist. Taking with food also reduces burping." },
      },
      {
        "@type": "Question",
        name: "Can I get enough omega-3 from diet alone?",
        acceptedAnswer: { "@type": "Answer", text: "If you eat 2–3 servings of oily fish (salmon, mackerel, sardines, herring, anchovies) per week, you likely meet general health recommendations. However, reaching anti-inflammatory therapeutic doses (2–4g EPA+DHA/day) from food alone would require eating oily fish daily. Most people in Western countries consume far too little — average omega-3 intake is 0.1–0.2g/day vs the 1–3g recommended." },
      },
      {
        "@type": "Question",
        name: "Does omega-3 thin the blood?",
        acceptedAnswer: { "@type": "Answer", text: "Omega-3 has mild anticoagulant effects by reducing thromboxane A2-mediated platelet aggregation. At doses up to 3g/day, this effect is not clinically significant in healthy adults. At higher doses (>4g/day), increased bleeding time has been observed. If you take warfarin, aspirin, or other blood thinners, inform your doctor before starting high-dose omega-3 — particularly before any surgical procedures." },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string; url: string }[] = [
    {
      claim: "Reduces major cardiovascular events (heart attack, stroke)",
      evidence: "strong",
      citation: "Bhatt et al., 2019 — NEJM (REDUCE-IT trial)",
      notes: "4g/day of purified EPA (icosapentaenoic acid) reduced major adverse cardiovascular events by 25% vs placebo in 8,179 high-risk patients over 4.9 years. The STRENGTH trial using EPA+DHA showed weaker results, suggesting EPA alone may be more cardioprotective at high doses.",
      url: "https://doi.org/10.1056/NEJMoa1812792",
    },
    {
      claim: "Reduces joint pain and morning stiffness in rheumatoid arthritis",
      evidence: "strong",
      citation: "Goldberg & Katz, 2007 — Pain (meta-analysis)",
      notes: "Meta-analysis of 17 RCTs found significant reductions in joint tenderness, stiffness, and NSAID use at doses of 2.7–4g EPA+DHA/day over ≥3 months. Effect was consistent across studies. Onset of benefit requires 8–12 weeks of supplementation.",
      url: "https://doi.org/10.1016/j.pain.2007.01.020",
    },
    {
      claim: "Reduces triglycerides by 20–50%",
      evidence: "strong",
      citation: "Skulas-Ray et al., 2019 — Circulation (AHA Scientific Statement)",
      notes: "American Heart Association scientific statement confirmed 3–4g/day of prescription-grade omega-3 reduces triglycerides by 20–30% in adults with borderline-high levels (200–499 mg/dL) and by up to 50% in those with very high triglycerides (≥500 mg/dL).",
      url: "https://doi.org/10.1161/CIR.0000000000000709",
    },
    {
      claim: "Attenuates exercise-induced muscle damage and soreness",
      evidence: "moderate",
      citation: "Smith et al., 2011 — Clinical Science",
      notes: "1.86g EPA + 1.5g DHA for 7 days significantly reduced soreness, swelling, and range of motion loss following 200 maximal eccentric knee extensions. A separate trial by the same group in older adults showed improved MPS. Total omega-3 dose: ~3.4g/day.",
      url: "https://doi.org/10.1042/CS20100406",
    },
    {
      claim: "Enhances muscle protein synthesis in older adults",
      evidence: "moderate",
      citation: "Smith et al., 2011 — American Journal of Clinical Nutrition",
      notes: "1.86g EPA + 1.5g DHA for 8 weeks significantly increased the muscle protein anabolic response to insulin and amino acids in healthy older adults (65+ years). Omega-3 appears to sensitise muscle to anabolic signals — particularly relevant for combating age-related anabolic resistance.",
      url: "https://doi.org/10.3945/ajcn.111.011569",
    },
    {
      claim: "Reduces depressive symptoms (particularly with EPA-dominant formulas)",
      evidence: "moderate",
      citation: "Sublette et al., 2011 — Journal of Clinical Psychiatry (meta-analysis)",
      notes: "Meta-analysis of 15 trials found that supplements with ≥60% EPA significantly reduced depressive symptoms vs those with lower EPA proportions. The EPA:DHA ratio matters — EPA-dominant formulas showed consistent antidepressant effects; DHA-dominant did not.",
      url: "https://doi.org/10.4088/JCP.10m06233",
    },
    {
      claim: "Reduces blood pressure in hypertensive individuals",
      evidence: "moderate",
      citation: "Siervo et al., 2013 — American Journal of Hypertension (meta-analysis)",
      notes: "Meta-analysis of 70 RCTs found omega-3 supplementation reduced systolic blood pressure by 1.5–4.0 mmHg and diastolic by 1.0–3.5 mmHg, with greater effects at higher doses (≥3g/day) and in those with existing hypertension.",
      url: "https://doi.org/10.1038/ajh.2013.75",
    },
  ];

  const forms = [
    { name: "Fish Oil — Triglyceride (TG) Form", bioavail: "Good (~70% vs EE)", cost: "$", verdict: "Preferred form. Mimics how omega-3s occur naturally in fish. Superior absorption vs ethyl ester. Choose products with TOTOX <10 and verified EPA+DHA content.", recommended: true, tag: "Best Choice" },
    { name: "Fish Oil — Ethyl Ester (EE) Form", bioavail: "Moderate (~50%)", cost: "$", verdict: "Most prescription omega-3 drugs (Lovaza, Vascepa) use EE form. Absorption lower than TG form unless taken with a high-fat meal. Many cheaper supplements use EE — check the label.", recommended: false, tag: "Acceptable" },
    { name: "Krill Oil", bioavail: "High (phospholipid-bound)", cost: "$$$", verdict: "Phospholipid-form EPA+DHA may integrate into membranes more efficiently. Contains astaxanthin antioxidant. Good for those with GI issues from fish oil. Significantly more expensive per mg EPA+DHA.", recommended: false, tag: "Premium Option" },
    { name: "Algae Oil (vegan omega-3)", bioavail: "Good (TG or phospholipid)", cost: "$$", verdict: "The original marine omega-3 source — fish get omega-3 from algae. Equal efficacy to fish oil at matched doses. The only appropriate omega-3 source for vegans. DHA-dominant — EPA content lower in most products.", recommended: true, tag: "Vegan Choice" },
    { name: "Cod Liver Oil", bioavail: "Good", cost: "$", verdict: "Contains omega-3 alongside vitamins A and D — useful for those with vitamin deficiencies. Risk of vitamin A toxicity at high doses. Not suitable for reaching 2–4g EPA+DHA/day without vitamin A overdose.", recommended: false, tag: "Caution at High Dose" },
    { name: "Flaxseed / Chia / Hemp (ALA sources)", bioavail: "Poor — ALA must convert to EPA/DHA", cost: "$", verdict: "ALA (alpha-linolenic acid) is a plant omega-3 that converts to EPA and DHA at only 5–15% efficiency. Not a substitute for preformed EPA+DHA supplements. Useful for general health but not for therapeutic omega-3 targets.", recommended: false, tag: "Insufficient" },
  ];

  const safetyPanels = [
    {
      myth: "Fish oil thins the blood dangerously",
      reality: "At doses up to 3g/day, omega-3's mild antiplatelet effect is not clinically significant in healthy adults. Surgical risk increases only at very high doses (>4g/day) or in those on anticoagulant medications. The FDA GRAS designation covers up to 3g/day.",
      citation: "FDA GRAS Notice GRN 000105 (2002); Harris et al. (2007) — JAMA",
      url: "https://pubmed.ncbi.nlm.nih.gov/17404186/",
    },
    {
      myth: "All fish oil supplements are the same quality",
      reality: "Fish oil quality varies dramatically. Oxidised (rancid) fish oil may increase cardiovascular risk markers rather than reduce them. Studies by Jackowski et al. (2015) found 50% of commercial products exceeded acceptable oxidation limits. Look for products with TOTOX scores under 10, IFOS certification, or those that provide fresh-catch certificates.",
      citation: "Jackowski et al. (2015) — Journal of Nutritional Science",
      url: "https://doi.org/10.1017/jns.2015.8",
    },
    {
      myth: "High-dose fish oil causes prostate cancer",
      reality: "An observational study (Brasky et al., 2013) found a correlation between high plasma omega-3 and prostate cancer risk — widely misreported as causation. Subsequent systematic reviews and the REDUCE-IT trial data found no increased prostate cancer risk with supplementation. The observational association likely reflects confounding from dietary patterns.",
      citation: "Alexander et al. (2015) — Nutrition & Cancer (systematic review)",
      url: "https://doi.org/10.1080/01635581.2015.1015745",
    },
    {
      myth: "Burping after fish oil means it's working",
      reality: "Fishy burps indicate rancid (oxidised) oil, not efficacy. Fresh, properly stored omega-3 supplements are nearly odourless. Enteric-coated capsules, refrigeration after opening, and purchasing from brands with TOTOX data all eliminate the problem.",
      citation: "Jackowski et al. (2015) — Journal of Nutritional Science",
      url: "https://doi.org/10.1017/jns.2015.8",
    },
  ];

  const whoFor = [
    { group: "People eating little or no oily fish", detail: "The omega-3 index (EPA+DHA as % of red blood cell fatty acids) should ideally be ≥8%. Western diets average 4–5%. Anyone eating oily fish less than twice per week is likely deficient and benefits most from supplementation.", tags: ["General population", "Pescatarians", "Vegetarians (use algae)"], green: true },
    { group: "Athletes in heavy training", detail: "Omega-3 reduces the inflammatory burden of high-volume training, decreases DOMS, and in older athletes improves the anabolic response to protein. Dose: 2–3g EPA+DHA/day during intensified blocks.", tags: ["Endurance athletes", "Team sports", "Strength athletes"], green: true },
    { group: "Adults over 50", detail: "Omega-3 supports both the MPS response (anabolic resistance declines with age) and cardiovascular health. DHA also supports cognitive function — brain DHA declines with age.", tags: ["Cardiovascular risk", "Sarcopenia prevention", "Cognitive health"], green: true },
    { group: "People with rheumatoid arthritis or joint pain", detail: "3–4g EPA+DHA/day for ≥3 months consistently reduces joint tenderness, morning stiffness, and NSAID requirement. One of the few supplements with genuine NSAID-sparing evidence.", tags: ["Rheumatoid arthritis", "Osteoarthritis", "Inflammatory conditions"], green: true },
  ];

  const cautionGroups = [
    { group: "Those on warfarin or anticoagulant therapy", detail: "Omega-3 has additive antiplatelet effects. Doses above 2g/day should be cleared with your prescribing doctor. Monitor INR if starting high-dose supplementation alongside warfarin." },
    { group: "Shellfish allergy (for krill oil)", detail: "Krill is a crustacean. Krill oil is contraindicated in shellfish allergy. Use fish oil or algae omega-3 instead." },
  ];

  const refs = [
    { num: "1", cite: "Bhatt DL, Steg PG, Miller M, et al. (2019). Cardiovascular risk reduction with icosapentaenoic acid for hypertriglyceridemia.", journal: "N Engl J Med, 380(1), 11–22.", url: "https://doi.org/10.1056/NEJMoa1812792" },
    { num: "2", cite: "Goldberg RJ, Katz J. (2007). A meta-analysis of the analgesic effects of omega-3 polyunsaturated fatty acid supplementation for inflammatory joint pain.", journal: "Pain, 129(1–2), 210–23.", url: "https://doi.org/10.1016/j.pain.2007.01.020" },
    { num: "3", cite: "Skulas-Ray AC, Wilson PWF, Harris WS, et al. (2019). Omega-3 fatty acids for the management of hypertriglyceridemia: a science advisory from the American Heart Association.", journal: "Circulation, 140(12), e673–e691.", url: "https://doi.org/10.1161/CIR.0000000000000709" },
    { num: "4", cite: "Smith GI, Atherton P, Reeds DN, et al. (2011). Dietary omega-3 fatty acid supplementation increases the rate of muscle protein synthesis in older adults.", journal: "Am J Clin Nutr, 93(2), 402–12.", url: "https://doi.org/10.3945/ajcn.111.011569" },
    { num: "5", cite: "Smith GI, Atherton P, Reeds DN, et al. (2011). Omega-3 polyunsaturated fatty acids augment the muscle protein anabolic response to hyperinsulinaemia–hyperaminoacidaemia.", journal: "Clin Sci (Lond), 121(6), 267–78.", url: "https://doi.org/10.1042/CS20100406" },
    { num: "6", cite: "Sublette ME, Ellis SP, Geant AL, Mann JJ. (2011). Meta-analysis of the effects of eicosapentaenoic acid (EPA) in clinical trials in depression.", journal: "J Clin Psychiatry, 72(12), 1577–84.", url: "https://doi.org/10.4088/JCP.10m06233" },
    { num: "7", cite: "Siervo M, Lara J, Chowdhury S, Ashor A, Oggioni C, Mathers JC. (2013). Effects of the Dietary Approaches to Stop Hypertension (DASH) diet on cardiovascular risk factors: a systematic review and meta-analysis.", journal: "Br J Nutr, 113(1), 1–15.", url: "https://doi.org/10.1017/S0007114514003341" },
    { num: "8", cite: "Jackowski SA, Alvi AZ, Mirajkar A, et al. (2015). Oxidation levels of North American over-the-counter n-3 (omega-3) supplements and the influence of supplement formulation and delivery form on evaluating oxidative safety.", journal: "J Nutr Sci, 4, e30.", url: "https://doi.org/10.1017/jns.2015.8" },
    { num: "9", cite: "Alexander DD, Bassett JK, Weed DL, et al. (2015). Meta-analysis of long-chain omega-3 polyunsaturated fatty acids (LCω-3PUFA) and prostate cancer.", journal: "Nutr Cancer, 67(4), 543–54.", url: "https://doi.org/10.1080/01635581.2015.1015745" },
    { num: "10", cite: "Mozaffarian D, Rimm EB. (2006). Fish intake, contaminants, and human health: evaluating the risks and the benefits.", journal: "JAMA, 296(15), 1885–99.", url: "https://doi.org/10.1001/jama.296.15.1885" },
    { num: "11", cite: "Calder PC. (2017). Omega-3 fatty acids and inflammatory processes: from molecules to man.", journal: "Biochem Soc Trans, 45(5), 1105–15.", url: "https://doi.org/10.1042/BST20160474" },
    { num: "12", cite: "Harris WS, Mozaffarian D, Rimm E, et al. (2009). Omega-6 fatty acids and risk for cardiovascular disease: a science advisory from the American Heart Association.", journal: "Circulation, 119(6), 902–7.", url: "https://doi.org/10.1161/CIRCULATIONAHA.108.191627" },
  ];

  const brands = [
    { name: "Nordic Naturals Ultimate Omega", size: "1280mg EPA+DHA × 60 soft gels", price: "$35–45", perServing: "$0.58–0.75", verdict: "Triglyceride form, IFOS 5-star certified, consistently low TOTOX. Premium but the quality benchmark most studies reference." },
    { name: "Thorne Super EPA", size: "1000mg EPA+DHA × 90 gel caps", price: "$40–50", perServing: "$0.44–0.56", verdict: "NSF Certified for Sport. High EPA concentration. Excellent choice for drug-tested athletes and those prioritising EPA for inflammation." },
    { name: "Carlson The Very Finest Fish Oil", size: "1600mg EPA+DHA per tsp liquid", price: "$20–28 per 200ml", perServing: "$0.20–0.28", verdict: "Liquid form — very high EPA+DHA per serving at lower cost than capsules. Award-winning freshness. Refrigerate after opening." },
    { name: "Sports Research Triple Strength", size: "1250mg EPA+DHA × 180 softgels", price: "$35–45", perServing: "$0.19–0.25", verdict: "High EPA+DHA per capsule in TG form. IFOS certified. Good mid-tier value without sacrificing quality." },
    { name: "iWi Omega-3 (algae-based)", size: "390mg EPA+DHA × 60 softgels", price: "$25–32", perServing: "$0.42–0.53", verdict: "Best vegan/algae option. Nannochloropsis microalgae source. Lower EPA+DHA per capsule — need 2–3 for therapeutic dose." },
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
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Omega-3 (EPA & DHA)</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ING-012</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>Anti-Inflammation & Antioxidants · Cardiovascular</p>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              Omega-3 (EPA & DHA):<br />Benefits, Dosage & Best Forms
            </h1>
            <div style={{ marginBottom: 20 }}><EvidenceBadge level="strong" /></div>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680 }}>
              Omega-3 fatty acids EPA and DHA are the most evidence-backed supplements for cardiovascular protection and systemic inflammation. They reduce triglycerides, joint pain, muscle soreness, and depressive symptoms — and most people in Western countries are meaningfully deficient in them.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Stats */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Effective Dose", value: "1–3g EPA+DHA", sub: "check label — not total fish oil" },
                { label: "Evidence Level", value: "Strong", sub: "200+ RCTs across outcomes" },
                { label: "Primary Use", value: "Heart & Joints", sub: "inflammation, triglycerides" },
                { label: "Best Form", value: "TG Fish Oil", sub: "IFOS certified, TOTOX <10" },
              ].map((s) => (
                <div key={s.label} style={{ padding: "20px 16px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{s.value}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only. Consult a healthcare professional before starting high-dose omega-3 supplementation, particularly if you take anticoagulant medications (warfarin, aspirin, clopidogrel).
            </p>
          </div>

          {/* § 1 — What Is Omega-3 */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 01" figure="§ 01" title="What Are" titleItalic="Omega-3s?" size="sm" />
            <p>
              Omega-3 fatty acids are a family of polyunsaturated fats defined by a double bond at the third carbon from the methyl end. The two biologically critical forms for human health are <strong>EPA</strong> (eicosapentaenoic acid, C20:5) and <strong>DHA</strong> (docosahexaenoic acid, C22:6). A third form, ALA (alpha-linolenic acid), is found in plant foods but converts to EPA and DHA at only 5–15% efficiency — making direct EPA/DHA intake from marine sources essential for therapeutic effects.
            </p>
            <p>
              EPA and DHA are found primarily in the tissues of cold-water oily fish (salmon, mackerel, sardines, anchovies, herring) and in the marine microalgae (<em>Nannochloropsis, Schizochytrium</em>) that form the base of the marine food chain. Fish do not synthesise omega-3s — they accumulate them from dietary algae, which is why algae oil is both the original source and the most appropriate vegan alternative.
            </p>
            <p>
              The Western diet has undergone a dramatic shift in the omega-6:omega-3 ratio over the past century — from approximately 4:1 in ancestral diets to 15–20:1 today due to industrialised seed oils and reduced fish consumption. This imbalance drives a pro-inflammatory state at the cellular level, contributing to chronic disease risk. Supplemental EPA and DHA corrects this ratio.
            </p>
          </section>

          {/* § 2 — Mechanism */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 02" figure="§ 02" title="How It Works:" titleItalic="The Science" size="sm" />
            <p>Omega-3s work through multiple complementary mechanisms at the cellular and molecular level — not a single pathway like most supplements.</p>

            <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#1A1714" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>Omega-3 Mechanisms — Step by Step</p>
              </div>
              {[
                { step: "01", title: "Cell membrane phospholipid incorporation", body: "EPA and DHA compete with arachidonic acid (AA, an omega-6) for incorporation into cell membrane phospholipids. Higher EPA/DHA content changes the physical properties of membranes (fluidity, receptor function) and reduces the pool of AA available for pro-inflammatory eicosanoid production." },
                { step: "02", title: "Eicosanoid competition — shifting the inflammatory balance", body: "When omega-6 AA is metabolised by COX and LOX enzymes, it produces pro-inflammatory prostaglandins, thromboxanes, and leukotrienes. EPA competes with AA for these same enzymes, producing anti-inflammatory or neutral eicosanoids instead — directly modulating the inflammatory response." },
                { step: "03", title: "Specialised pro-resolving mediators (resolvins, protectins)", body: "EPA and DHA are converted to resolvins and protectins — a newly discovered class of lipid mediators that actively resolve (not just suppress) inflammation. Resolvins clear inflammatory cellular debris and signal the end of the inflammatory response. This is fundamentally different from NSAIDs, which suppress inflammation without resolving it." },
                { step: "04", title: "Gene expression via PPARs and NF-κB", body: "DHA and EPA activate peroxisome proliferator-activated receptors (PPAR-α and PPAR-γ) — nuclear receptors that regulate inflammatory gene transcription. They also inhibit NF-κB, the master inflammatory transcription factor. This genomic action reduces production of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) at the gene level." },
                { step: "05", title: "Triglyceride-lowering via reduced VLDL synthesis", body: "EPA reduces hepatic VLDL (very low density lipoprotein) secretion by inhibiting diacylglycerol acyltransferase and sterol regulatory element-binding protein (SREBP-1c), the key transcription factor for fatty acid synthesis. This reduces hepatic triglyceride packaging and lowers circulating triglycerides by 20–50%." },
              ].map((s, i) => (
                <div key={s.step} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 18, borderRight: "1px solid #EDE8DF" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#C4622D" }}>{s.step}</span>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{s.title}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* § 3 — Benefits */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 03" figure="§ 03" title="Evidence-Based" titleItalic="Benefits" size="sm" />
            <p style={{ marginBottom: 24 }}>Omega-3 has one of the broadest evidence bases of any supplement — affecting cardiovascular, musculoskeletal, neurological, and metabolic outcomes.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{b.claim}</p>
                    <EvidenceBadge level={b.evidence} showIcon={false} />
                  </div>
                  <div style={{ padding: "10px 16px" }}>
                    <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", marginBottom: 4, letterSpacing: "0.06em", display: "block", textDecoration: "none" }}>{b.citation} →</a>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{b.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* § 4 — Dosage */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 04" figure="§ 04" title="Dosage" titleItalic="Guide" size="sm" />
            <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 24 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Critical: Read EPA+DHA content, not total fish oil</p>
              <p style={{ fontSize: 13, color: "#2D2926", margin: 0 }}>A "1000mg fish oil" capsule typically contains only 300mg EPA+DHA. To reach 2g EPA+DHA/day you may need 6–7 of these standard capsules. Always read the supplement facts panel for the actual EPA and DHA amounts.</p>
            </div>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 460 }}>
                <thead>
                  <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
                    {["Goal", "Target EPA+DHA", "Duration", "Notes"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["General health / prevention", "1–2g / day", "Ongoing", "Meets AHA basic recommendation"],
                    ["Triglyceride reduction", "3–4g / day", "≥4 weeks", "Prescription level — doctor supervision"],
                    ["Joint inflammation (RA)", "2.7–4g / day", "≥3 months", "Full effect takes 8–12 weeks"],
                    ["Exercise recovery / DOMS", "2–3g / day", "≥1 week pre-exercise", "Load before high-demand blocks"],
                    ["Depression adjunct", "1–2g EPA-dominant / day", "≥8 weeks", "EPA:DHA ratio >2:1 preferred"],
                    ["Blood pressure reduction", "≥3g / day", "Ongoing", "Additive to dietary changes"],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: ci === 0 ? "#1A1714" : "#5C5650", fontWeight: ci === 0 ? 600 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Timing & absorption tips</h2>
            <p>
              Take omega-3 with the largest meal of the day — fat in food significantly improves absorption of triglyceride-form fish oil. Ethyl ester form shows the greatest absorption improvement with high-fat meals. No specific time of day is superior for efficacy. Splitting the daily dose across two meals can reduce GI discomfort.
            </p>
          </section>

          {/* § 5 — Forms */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 05" figure="§ 05" title="Supplement Forms" titleItalic="Compared" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forms.map((f) => (
                <div key={f.name} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ padding: "10px 16px", backgroundColor: f.recommended ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    <div>
                      <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>{f.name}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", margin: "3px 0 0", letterSpacing: "0.06em" }}>Bioavailability: {f.bioavail} · Cost: {f.cost}</p>
                    </div>
                    <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", whiteSpace: "nowrap", flexShrink: 0, backgroundColor: f.recommended ? "rgba(74,124,89,0.08)" : "rgba(138,132,128,0.1)", border: f.recommended ? "1px solid rgba(74,124,89,0.2)" : "1px solid rgba(138,132,128,0.2)", color: f.recommended ? "#4A7C59" : "#8A8480" }}>{f.tag}</span>
                  </div>
                  <div style={{ padding: "10px 16px" }}>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{f.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* § 6 — Safety */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 06" figure="§ 06" title="Safety Profile" titleItalic="& Side Effects" size="sm" />
            <p style={{ marginBottom: 24 }}>Omega-3 is safe at up to 3g/day per the FDA GRAS designation. Doses of 3–4g/day are used in clinical settings and are generally well tolerated in healthy adults, with GI effects being the most common complaint.</p>
            {safetyPanels.map((item, i) => (
              <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ padding: "10px 16px", backgroundColor: "rgba(196,98,45,0.06)", borderBottom: "1px solid #D4C9B8" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.12em", textTransform: "uppercase" }}>Myth</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", margin: "4px 0 0" }}>{item.myth}</p>
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#4A7C59", letterSpacing: "0.12em", textTransform: "uppercase" }}>Reality</span>
                  <p style={{ fontSize: 14, color: "#2D2926", margin: "4px 0 4px" }}>{item.reality}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", textDecoration: "none" }}>{item.citation} →</a>
                </div>
              </div>
            ))}

            <h2>Quality matters — check for oxidation</h2>
            <p>
              Rancid fish oil may worsen cardiovascular markers rather than improve them. When purchasing: (1) choose IFOS-certified products, (2) look for TOTOX values under 10 on the brand's website, (3) smell the capsules — fresh oil should be nearly odourless, (4) refrigerate after opening. Liquid omega-3 products are more prone to oxidation than capsules.
            </p>
          </section>

          {/* § 7 — Who For */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 07" figure="§ 07" title="Who Should" titleItalic="Take It?" size="sm" />
            <h2>Good fit</h2>
            {whoFor.map((g) => (
              <div key={g.group} style={{ border: "1px solid #D4C9B8", borderLeft: "3px solid #4A7C59", borderRadius: 8, padding: "14px 18px", marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{g.group}</p>
                  <span style={{ padding: "2px 8px", backgroundColor: "rgba(74,124,89,0.08)", border: "1px solid rgba(74,124,89,0.2)", borderRadius: 4, fontSize: 9, color: "#4A7C59", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Recommended</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", margin: "0 0 8px" }}>{g.detail}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {g.tags.map((t) => <span key={t} style={{ padding: "2px 7px", backgroundColor: "rgba(74,124,89,0.06)", border: "1px solid rgba(74,124,89,0.15)", borderRadius: 4, fontSize: 9, color: "#4A7C59", fontFamily: "var(--font-dm-mono), monospace" }}>{t}</span>)}
                </div>
              </div>
            ))}

            <h2 style={{ marginTop: 24 }}>Use caution</h2>
            {cautionGroups.map((g) => (
              <div key={g.group} style={{ border: "1px solid #D4C9B8", borderLeft: "3px solid #D4A96A", borderRadius: 8, padding: "14px 18px", marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{g.group}</p>
                  <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,169,106,0.1)", border: "1px solid rgba(212,169,106,0.2)", borderRadius: 4, fontSize: 9, color: "#A07840", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Use Caution</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>{g.detail}</p>
              </div>
            ))}
          </section>

          {/* § 8 — Pricing */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 08" figure="§ 08" title="Pricing &" titleItalic="Where to Buy" size="sm" />
            <p style={{ marginBottom: 8 }}>Prices below are USD as of May 2026. Cost per serving is calculated at 2g EPA+DHA target dose per day.</p>
            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 580 }}>
                <thead>
                  <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
                    {["Product", "EPA+DHA / Serving", "Price (USD)", "Per 2g EPA+DHA", "Verdict"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {brands.map((b, i) => (
                    <tr key={b.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", fontWeight: 600, color: "#1A1714" }}>{b.name}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: "#5C5650" }}>{b.size}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: "#5C5650" }}>{b.price}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", fontSize: 12 }}>{b.perServing}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: "#5C5650", fontSize: 12 }}>{b.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>Prices as of May 2026. For drug-tested athletes, look for NSF Certified for Sport or Informed-Sport certification.</p>
          </section>

          {/* § 9 — References */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 09" figure="§ 09" title="References" titleItalic="& Further Reading" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {refs.map((r) => (
                <div key={r.num} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid #EDE8DF" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", fontWeight: 700, flexShrink: 0, minWidth: 20 }}>[{r.num}]</span>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                    {r.cite}{" "}<em>{r.journal}</em>{" "}
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.04em" }}>→ View study</a>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* § 10 — FAQ */}
          <section style={{ marginBottom: 48 }} className="ingredient-article">
            <SectionHeading label="Section 10" figure="§ 10" title="Frequently Asked" titleItalic="Questions" size="sm" />
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 8 }}>
                <div style={{ padding: "12px 16px", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8" }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>{item.name}</p>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Related + Disclaimer */}
          <div style={{ marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["krill-oil", "curcumin", "vitamin-d3-k2", "astaxanthin"].map((s) => (
              <Link key={s} href={`/ingredients/${s}`} style={{ padding: "8px 16px", border: "1px solid #D4C9B8", borderRadius: 6, backgroundColor: "#F8F2E4", fontSize: 13, color: "#1A1714", fontWeight: 600, textDecoration: "none" }}>{s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</Link>
            ))}
          </div>
          <div style={{ padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "3px solid #D4A96A" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>Medical Disclaimer</p>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              Ingredient profiles are for informational purposes only and do not constitute medical advice.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600 }}>Full disclaimer →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
