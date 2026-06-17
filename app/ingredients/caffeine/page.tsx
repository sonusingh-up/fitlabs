import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Caffeine — Dosage, Benefits & Side Effects",
  description: "Caffeine is the most-studied legal ergogenic aid. Proven dose (3-6 mg/kg), endurance and strength gains, tolerance cycling, and safety. 2026 guide.",
  alternates: { canonical: "/ingredients/caffeine" },
};

export default function CaffeinePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/caffeine#article",
    headline: "Caffeine: Benefits, Dosage, Side Effects & Safety",
    description: "Comprehensive, evidence-based research profile of caffeine covering adenosine receptor mechanism, proven performance benefits, correct dosage by bodyweight, tolerance management, and safety data.",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/caffeine",
    mainEntityOfPage: "https://fitlabreviews.com/ingredients/caffeine",
    articleSection: "Ingredient Research",
    keywords: ["caffeine benefits", "caffeine dosage", "caffeine pre workout", "caffeine side effects", "caffeine half life", "caffeine tolerance"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much caffeine should I take before training?",
        acceptedAnswer: { "@type": "Answer", text: "The research-supported dose is 3–6mg per kg of bodyweight, taken 30–60 minutes before exercise. For a 75kg person this is 225–450mg. Most studies use 3–6mg/kg and show consistent improvements in endurance, strength, and cognitive performance. Start at the lower end (3mg/kg) to assess tolerance before progressing." },
      },
      {
        "@type": "Question",
        name: "Does caffeine cause dehydration?",
        acceptedAnswer: { "@type": "Answer", text: "No. At doses up to 6mg/kg, caffeine does not cause clinically significant dehydration. Maughan et al. (2003) confirmed that caffeine consumed in moderate amounts (up to 300mg) does not impair hydration status. While caffeine has mild diuretic properties, the fluid in coffee or tea compensates for this effect." },
      },
      {
        "@type": "Question",
        name: "How long does caffeine stay in the system?",
        acceptedAnswer: { "@type": "Answer", text: "Caffeine has a half-life of approximately 4–6 hours in healthy adults — meaning half the dose is still active 4–6 hours after ingestion. Full elimination takes 8–12 hours. To protect sleep quality, avoid caffeine within 6–8 hours of your intended sleep time. CYP1A2 enzyme variants cause significant individual variation — some people metabolise caffeine 2× faster or slower than average." },
      },
      {
        "@type": "Question",
        name: "How do I reset caffeine tolerance?",
        acceptedAnswer: { "@type": "Answer", text: "Tolerance develops through adenosine receptor upregulation and requires a washout period to reverse. A 10–14 day caffeine-free period fully restores receptor sensitivity in most individuals. Withdrawal symptoms (headache, irritability, fatigue) peak at 24–48 hours and resolve within 3–7 days. Some coaches recommend cycling 5 weeks on, 1–2 weeks off to preserve ergogenic potency." },
      },
      {
        "@type": "Question",
        name: "Is caffeine safe during pregnancy?",
        acceptedAnswer: { "@type": "Answer", text: "Current guidelines recommend limiting caffeine to under 200mg per day during pregnancy (WHO, NHS). High caffeine intake has been associated with low birth weight and preterm birth in observational studies. The NHS recommends 200mg/day as the maximum; some guidelines suggest 100mg/day as a more conservative limit. Supplement-dose caffeine (300–400mg) is not appropriate during pregnancy." },
      },
      {
        "@type": "Question",
        name: "Can caffeine make anxiety worse?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, in susceptible individuals. Caffeine blocks adenosine (which has anxiolytic properties) and elevates cortisol and norepinephrine. People with anxiety disorders, particularly panic disorder (which involves sensitised noradrenergic systems), often experience exacerbation of symptoms. Those with anxiety-prone temperaments should use caffeine conservatively (≤100–200mg) or consider switching to L-theanine + low-dose caffeine combinations for a smoother response." },
      },
      {
        "@type": "Question",
        name: "Is caffeine anhydrous better than coffee?",
        acceptedAnswer: { "@type": "Answer", text: "For performance purposes, caffeine anhydrous (pure caffeine powder or tablets) offers more precise dosing than coffee, whose caffeine content varies 50–300mg per cup depending on bean, roast, and preparation. Both are equally effective at matched doses — Graham et al. (1998) found no performance difference between coffee and anhydrous caffeine at equal caffeine doses. If you prefer coffee, standardise your preparation method for consistency." },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    {
      claim: "Improves endurance exercise performance",
      evidence: "strong",
      citation: "Doherty & Smith, 2005 — International Journal of Sport Nutrition",
      notes: "Meta-analysis of 21 RCTs. Caffeine supplementation improved time-to-exhaustion by an average of 11.2% vs placebo across cycling and running protocols. The ergogenic effect was consistent across trained and untrained participants.",
    },
    {
      claim: "Increases maximal strength and power output",
      evidence: "strong",
      citation: "Warren et al., 2010 — Medicine & Science in Sports & Exercise (meta-analysis)",
      notes: "Meta-analysis of 34 studies found significant improvements in muscle strength (effect size 0.19) and power (effect size 0.20) across bench press, leg press, and isokinetic dynamometry. Effect most consistent in upper-body strength tests.",
    },
    {
      claim: "Reduces ratings of perceived exertion (RPE)",
      evidence: "strong",
      citation: "Grgic et al., 2020 — British Journal of Sports Medicine",
      notes: "Multiple RCTs consistently show that caffeine reduces the perceived effort of exercise at identical absolute intensities. This 'exercise feels easier' effect is independent of actual physiological changes and contributes to both endurance and strength improvements.",
    },
    {
      claim: "Enhances cognitive performance and reaction time",
      evidence: "strong",
      citation: "McLellan et al., 2016 — Nutrition Reviews",
      notes: "Systematic review of 40 human studies. Caffeine improved sustained attention, working memory, reaction time, and accuracy at doses of 40–300mg. Benefits were most pronounced in sleep-deprived conditions but also present in well-rested participants.",
    },
    {
      claim: "Improves repeated sprint performance",
      evidence: "strong",
      citation: "Grgic et al., 2018 — British Journal of Sports Medicine (meta-analysis of 11 RCTs)",
      notes: "3–6mg/kg significantly improved mean and peak power in repeated sprint bouts. Effect size was moderate (0.35). Particularly relevant for team sports (football, basketball, rugby) where repeated high-intensity efforts define performance.",
    },
    {
      claim: "Increases fat oxidation during exercise",
      evidence: "moderate",
      citation: "Costill et al., 1978 — Medicine & Science in Sports",
      notes: "Foundational study showing that 250mg caffeine before 2h of cycling increased plasma free fatty acid levels and fat oxidation. Subsequent research has confirmed the effect is most significant at low-to-moderate exercise intensities (≤65% VO₂max).",
    },
    {
      claim: "May improve technical and skill-based performance",
      evidence: "moderate",
      citation: "Del Coso et al., 2012 — PLOS ONE",
      notes: "3mg/kg significantly improved shooting accuracy in basketball players during fatigued states. Emerging evidence suggests caffeine's CNS effects (improved alertness, motor control) benefit skill-based sport performance — an effect not captured in traditional strength/endurance paradigms.",
    },
  ];

  const forms = [
    { name: "Caffeine Anhydrous (powder/tablet)", verdict: "The gold standard. Precise, predictable dose. Used in virtually all research. Cheapest per dose. Best choice for athletes wanting a defined ergogenic dose.", recommended: true, tag: "Best Choice" },
    { name: "Coffee (brewed)", verdict: "Effective at matched doses but caffeine content varies 50–300mg per cup. Graham et al. (1998) showed no performance difference from anhydrous at equal doses. Fine if you can standardise your method.", recommended: true, tag: "Good Choice" },
    { name: "Energy Drinks (e.g. Monster, Red Bull)", verdict: "Typically 80–160mg caffeine per can with added sugar, B vitamins, and taurine. Variable total dose. Not the most cost-effective or clean delivery. Acceptable if dose is known.", recommended: false, tag: "Acceptable" },
    { name: "Caffeine + L-Theanine (stacked)", verdict: "200mg caffeine + 200mg L-theanine reduces jitteriness and anxiety while preserving performance benefits. Ideal for those sensitive to caffeine's stimulant side effects.", recommended: true, tag: "Recommended Stack" },
    { name: "Slow-Release Caffeine (e.g. Puredose)", verdict: "Extends caffeine's activity over 6–8 hours vs 4–6 for anhydrous. May reduce mid-afternoon energy crash. Less studied for acute performance. Better for sustained alertness than pre-workout peak.", recommended: false, tag: "Situational" },
    { name: "Natural Caffeine Sources (guarana, green tea)", verdict: "Contain caffeine alongside other compounds (theobromine, catechins). Effects are similar but bioavailability varies. Guarana contains ~3.6% caffeine by weight — check extract concentrations on labels.", recommended: false, tag: "Variable Dosing" },
  ];

  const safetyPanels = [
    {
      myth: "Caffeine causes dangerous dehydration during exercise",
      reality: "Caffeine has mild diuretic properties at rest, but at doses used for sport (3–6mg/kg) it does not cause clinically meaningful dehydration. Maughan et al. (2003) found caffeine up to 300mg did not impair hydration markers during exercise in the heat.",
      citation: "Maughan & Griffin (2003) — Journal of Human Nutrition and Dietetics",
    },
    {
      myth: "You need to cycle off caffeine or it stops working entirely",
      reality: "Tolerance develops to some of caffeine's effects (particularly subjective alertness) but performance benefits are partly preserved even in habitual users. Grgic et al. (2020) found performance benefits in regular caffeine consumers. Cycling does restore full sensitivity, but the supplement does not become completely ineffective.",
      citation: "Grgic et al. (2020) — British Journal of Sports Medicine",
    },
    {
      myth: "Caffeine is addictive in the same way as hard drugs",
      reality: "Caffeine produces physical dependence (withdrawal symptoms on cessation) but not addiction in the clinical sense. It does not cause compulsive drug-seeking behaviour or progressive dose escalation typical of addictive substances. The DSM-5 lists caffeine withdrawal as a diagnosis but not caffeine use disorder as an official addiction.",
      citation: "American Psychiatric Association DSM-5 (2013)",
    },
    {
      myth: "Pre-workout caffeine always causes insomnia",
      reality: "Timing matters more than caffeine use per se. Caffeine consumed 6+ hours before bedtime has minimal impact on sleep in most adults (Drake et al., 2013). The half-life of ~5 hours means morning or early afternoon caffeine is largely cleared by evening. Those with slow CYP1A2 metabolism are more affected.",
      citation: "Drake et al. (2013) — Journal of Clinical Sleep Medicine",
    },
    {
      myth: "Caffeine stunts growth in teenagers",
      reality: "There is no scientific evidence that moderate caffeine consumption stunts growth. This concern likely stems from caffeine's association with osteoporosis at very high doses in older adults (through calcium excretion). Moderate intake in adolescents does not affect bone development.",
      citation: "Temple (2009) — Nutrition Reviews",
    },
  ];

  const whoFor = [
    { group: "Endurance athletes", detail: "The strongest evidence base exists for endurance sports. Time-trial performance improvements of 1–4% are consistently replicated in cyclists, runners, and rowers at 3–6mg/kg.", tags: ["Cycling", "Running", "Rowing", "Triathlon"], green: true },
    { group: "Strength & power athletes", detail: "Meta-analysis confirms significant improvements in 1RM and peak power output. Most useful for high-volume training sessions where fatigue accumulates across sets.", tags: ["Weightlifting", "Powerlifting", "CrossFit"], green: true },
    { group: "Team sport athletes", detail: "Repeated sprint and decision-making improvements are documented. Caffeine reduces the cognitive and physical performance decline that occurs in the second half of matches.", tags: ["Football", "Basketball", "Rugby", "MMA"], green: true },
    { group: "Shift workers & students", detail: "Cognitive benefits (attention, reaction time, memory) are most pronounced when sleep-deprived — exactly when shift workers and students most need performance support.", tags: ["Cognitive work", "Night shifts"], green: true },
  ];

  const cautionGroups = [
    { group: "Anxiety disorders", detail: "Caffeine's noradrenergic and cortisol-elevating effects can exacerbate anxiety symptoms, particularly panic disorder. Start with ≤100mg and assess response before increasing.", isContraindication: false },
    { group: "Cardiovascular conditions", detail: "Hypertension, arrhythmia, or known heart disease: consult a cardiologist before high-dose caffeine supplementation. Moderate doses (≤200mg) are generally tolerated but individual response varies significantly.", isContraindication: false },
    { group: "Pregnancy", detail: "Limit to under 200mg/day per current guidelines (WHO, NHS). High doses associated with adverse fetal outcomes. Supplement-dose caffeine (300–600mg) is not appropriate during pregnancy.", isContraindication: true },
    { group: "Poor caffeine metabolisers (CYP1A2 slow variant)", detail: "Individuals with the CYP1A2*1F allele metabolise caffeine 2× slower than average. Standard doses may cause prolonged cardiovascular effects and insomnia. Genetic testing (e.g. 23andMe) can identify this variant.", isContraindication: false },
  ];

  const brands = [
    { name: "Bulk Supplements Caffeine Anhydrous", size: "100g (~500 doses)", price: "$10–14", perServing: "$0.02–0.03", verdict: "Purest and cheapest option. No fillers. Powder requires accurate scale — buy a 0.01g jewellery scale." },
    { name: "ProLab Caffeine Anhydrous", size: "200mg × 100 tabs", price: "$7–9", perServing: "$0.07–0.09", verdict: "Pre-measured 200mg tablets. Third-party tested. Reliable mid-tier option without needing to weigh doses." },
    { name: "NutraBio 100% Pure Caffeine", size: "200mg × 90 caps", price: "$8–12", perServing: "$0.09–0.13", verdict: "NSF-certified facility. Good choice for drug-tested athletes. Slightly higher per-dose cost reflects transparency." },
    { name: "Double Wood Caffeine + L-Theanine", size: "100mg/200mg × 120 caps", price: "$16–20", perServing: "$0.13–0.17", verdict: "Ready-made 1:2 stack. Convenient for those who want the combination without sourcing separately. Good value for the formula." },
    { name: "Genius Caffeine (Extended Release)", size: "100mg × 100 tabs", price: "$18–24", perServing: "$0.18–0.24", verdict: "Microencapsulated slow-release caffeine. Worth the premium for those needing sustained alertness over 6–8 hours vs acute pre-workout use." },
  ];

  const references = [
    { num: "1", cite: "Doherty M, Smith PM. (2005). Effects of caffeine ingestion on exercise testing: a meta-analysis. Int J Sport Nutr Exerc Metab, 15(2), 196–210.", journal: "International Journal of Sport Nutrition and Exercise Metabolism" },
    { num: "2", cite: "Warren GL, Park ND, Maresca RD, et al. (2010). Effect of caffeine ingestion on muscular strength and endurance: a meta-analysis. Med Sci Sports Exerc, 42(7), 1375–87.", journal: "Medicine & Science in Sports & Exercise" },
    { num: "3", cite: "McLellan TM, Caldwell JA, Lieberman HR. (2016). A review of caffeine's effects on cognitive, physical and occupational performance. Neurosci Biobehav Rev, 71, 294–312.", journal: "Neuroscience & Biobehavioral Reviews" },
    { num: "4", cite: "Grgic J, Grgic I, Pickering C, et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance — an umbrella review of 21 published meta-analyses. Br J Sports Med, 54(11), 681–688.", journal: "British Journal of Sports Medicine" },
    { num: "5", cite: "Grgic J, Trexler ET, Lazinica B, Pedisic Z. (2018). Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr, 15, 11.", journal: "Journal of the International Society of Sports Nutrition" },
    { num: "6", cite: "Costill DL, Dalsky GP, Fink WJ. (1978). Effects of caffeine ingestion on metabolism and exercise performance. Med Sci Sports, 10(3), 155–8.", journal: "Medicine & Science in Sports" },
    { num: "7", cite: "Graham TE, Hibbert E, Sathasivam P. (1998). Metabolic and exercise endurance effects of coffee and caffeine ingestion. J Appl Physiol, 85(3), 883–9.", journal: "Journal of Applied Physiology" },
    { num: "8", cite: "Maughan RJ, Griffin J. (2003). Caffeine ingestion and fluid balance: a review. J Hum Nutr Diet, 16(6), 411–20.", journal: "Journal of Human Nutrition and Dietetics" },
    { num: "9", cite: "Drake C, Roehrs T, Shambroom J, Roth T. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 9(11), 1195–200.", journal: "Journal of Clinical Sleep Medicine" },
    { num: "10", cite: "Goldstein ER, Ziegenfuss T, Kalman D, et al. (2010). International society of sports nutrition position stand: caffeine and performance. J Int Soc Sports Nutr, 7(1), 5.", journal: "Journal of the International Society of Sports Nutrition" },
    { num: "11", cite: "Del Coso J, Muñoz-Fernández VE, Muñoz G, et al. (2012). Effects of a caffeine-containing energy drink on simulated soccer performance. PLOS ONE, 7(2), e31380.", journal: "PLOS ONE" },
    { num: "12", cite: "Burke LM. (2008). Caffeine and sports performance. Appl Physiol Nutr Metab, 33(6), 1319–34.", journal: "Applied Physiology, Nutrition, and Metabolism" },
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
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Caffeine</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ING-005</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>Stimulants & Focus · Performance</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              Caffeine: Benefits,<br />Dosage & Side Effects
            </h1>
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level="strong" />
            </div>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>
              Caffeine is the most widely consumed psychoactive substance globally and the most thoroughly researched legal ergogenic aid in sport. Over 500 studies confirm improvements in endurance, strength, power output, and cognitive performance — with consistent effects across virtually every sport modality tested.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Stats grid */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Effective Dose", value: "3–6mg / kg", sub: "bodyweight, 30–60 min pre-exercise" },
                { label: "Evidence Level", value: "Strong", sub: "500+ peer-reviewed studies" },
                { label: "Half-Life", value: "4–6 hours", sub: "varies by CYP1A2 genotype" },
                { label: "Best Form", value: "Anhydrous", sub: "precise dose, most studied" },
              ].map((s) => (
                <div key={s.label} style={{ padding: "20px 16px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{s.value}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medical disclaimer */}
          <div style={{ marginBottom: 48, padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <AlertTriangle size={14} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              This profile is for informational purposes only. Caffeine is contraindicated at supplement doses during pregnancy and should be used cautiously in those with anxiety disorders, arrhythmia, or hypertension. Consult a healthcare professional if in doubt.
            </p>
          </div>

          {/* § 1 — What Is Caffeine */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 01" figure="§ 01" title="What Is" titleItalic="Caffeine?" size="sm" />
            <p>
              Caffeine (1,3,7-trimethylxanthine) is a naturally occurring purine alkaloid found in the seeds, leaves, and fruits of over 60 plant species. Coffee beans (<em>Coffea arabica</em>, ~1.2% caffeine by dry weight), tea leaves (<em>Camellia sinensis</em>, ~2.5%), guarana seeds (~3.6–5.8%), and cacao pods (~0.1–0.5%) are the primary dietary sources. Synthetic caffeine — chemically identical to plant-derived caffeine — is used in most supplements and pharmaceuticals.
            </p>
            <p>
              Caffeine's use as a stimulant dates to at least the 15th century with the spread of coffee from Ethiopia through Arabia. Tea consumption in China has even older roots. By the 19th century, caffeine had been isolated as a pure compound, and its pharmacological actions began to be systematically studied. Today it is the most consumed psychoactive substance on earth, with an estimated 80–90% of adults in the developed world consuming it daily.
            </p>
            <p>
              In sport, caffeine was removed from WADA's prohibited substance list in 2004 (having previously been banned above urinary concentrations of 12μg/mL). It is now one of the most researched ergogenic aids, with the International Society of Sports Nutrition position stand (Goldstein et al., 2010) classifying it as safe and effective for enhancing sport performance.
            </p>
          </section>

          {/* § 2 — How It Works */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 02" figure="§ 02" title="How It Works:" titleItalic="The Science" size="sm" />
            <p>
              Caffeine's primary mechanism is <strong>competitive antagonism of adenosine receptors</strong> — particularly the A1 and A2A subtypes — in the central and peripheral nervous system. Adenosine is an inhibitory neuromodulator that accumulates during wakefulness and promotes fatigue and sleep propensity. By blocking adenosine, caffeine removes this physiological brake on neural activity.
            </p>

            <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", borderBottom: "1px solid #2D2926" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>Caffeine Mechanism — Step by Step</p>
              </div>
              {[
                { step: "01", title: "Adenosine accumulates during wakefulness", body: "As neurons fire throughout the day, adenosine (a by-product of ATP hydrolysis) accumulates and binds A1 and A2A receptors, progressively slowing neural activity — creating the sensation of fatigue and sleepiness." },
                { step: "02", title: "Caffeine competes for adenosine receptor binding", body: "Caffeine is structurally similar to adenosine and binds adenosine receptors with high affinity — but acts as an antagonist, not an agonist. It blocks adenosine without mimicking its inhibitory effects, removing the fatigue brake." },
                { step: "03", title: "Catecholamine surge follows adenosine blockade", body: "Adenosine normally suppresses dopamine and norepinephrine signalling. With A1/A2A blockade lifted, dopamine and norepinephrine activity increases, improving motivation, alertness, and sympathetic nervous system tone." },
                { step: "04", title: "Reduced perceived effort — the 'exercise feels easier' effect", body: "The combination of blocked adenosine fatigue signals and elevated catecholamines reduces the subjective effort required for a given exercise intensity (RPE). This allows athletes to maintain higher outputs before stopping." },
                { step: "05", title: "Peripheral effects on muscle and fat tissue", body: "Caffeine also promotes calcium release from the sarcoplasmic reticulum (improving muscle contractile force) and increases plasma free fatty acid availability via catecholamine-driven lipolysis — contributing to improved fat oxidation during exercise." },
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

            <h2>Tolerance and receptor upregulation</h2>
            <p>
              Chronic caffeine exposure causes compensatory upregulation of adenosine receptors — the brain synthesises more receptors to overcome the blockade. This is the molecular basis of tolerance: the same dose produces a diminished effect over time. A 10–14 day caffeine-free washout period returns receptor density to baseline, fully restoring caffeine sensitivity.
            </p>
            <p>
              Importantly, not all of caffeine's ergogenic benefits disappear with tolerance. Grgic et al. (2020) found that habitual caffeine consumers still show significant performance improvements from caffeine supplementation — suggesting performance pathways are partially distinct from the subjective alertness pathways most affected by tolerance.
            </p>
          </section>

          {/* § 3 — Benefits */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 03" figure="§ 03" title="Evidence-Based" titleItalic="Benefits" size="sm" />
            <p style={{ marginBottom: 24 }}>Every benefit below is supported by at least one meta-analysis or multiple independent RCTs. The dose used in the cited study is stated alongside the outcome.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{b.claim}</p>
                    <EvidenceBadge level={b.evidence} showIcon={false} />
                  </div>
                  <div style={{ padding: "10px 16px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", marginBottom: 4, letterSpacing: "0.06em" }}>{b.citation}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{b.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* § 4 — Dosage Guide */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 04" figure="§ 04" title="Dosage" titleItalic="Guide" size="sm" />
            <p>Caffeine dosing should be weight-adjusted. The effective range identified in sport science literature is <strong>3–6mg per kg of bodyweight</strong>, taken 30–60 minutes before exercise.</p>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 480 }}>
                <thead>
                  <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
                    {["Bodyweight", "Low Dose (3mg/kg)", "Moderate (4.5mg/kg)", "High Dose (6mg/kg)"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["60 kg", "180mg", "270mg", "360mg"],
                    ["75 kg", "225mg", "338mg", "450mg"],
                    ["90 kg", "270mg", "405mg", "540mg"],
                    ["105 kg", "315mg", "472mg", "630mg"],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      {row.map((cell) => (
                        <td key={cell} style={{ padding: "10px 14px", borderBottom: "1px solid #EDE8DF", color: "#2D2926" }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Timing</h2>
            <p>
              Peak plasma caffeine occurs approximately 45–60 minutes after oral ingestion. Most research uses a 60-minute pre-exercise window. For endurance events, this aligns caffeine peak with the hardest portions of the effort. Some athletes split the dose — half 60 minutes before, half mid-race for longer events.
            </p>

            <h2>Cycling protocol</h2>
            <p>
              For athletes who want to preserve full ergogenic potency, a common approach is <strong>5–6 weeks of supplementation followed by 1–2 weeks caffeine-free</strong>. This prevents deep tolerance accumulation. If a complete washout is impractical, ensuring at least 2–3 days per week without caffeine can partially maintain sensitivity.
            </p>
            <p>
              The lowest effective dose for cognitive benefits is considerably lower — 40–100mg is effective for attention and reaction time. Athletes using caffeine primarily for focus during technical training may not need performance doses (3–6mg/kg).
            </p>

            <h2>Avoid within 6–8 hours of sleep</h2>
            <p>
              Drake et al. (2013) showed that caffeine consumed 6 hours before bed objectively disrupted sleep quality even when participants felt unaffected. Given caffeine's ~5-hour half-life, a 400mg dose at 2pm still leaves 200mg active at 7pm and 100mg at midnight. Shift training sessions to allow a 6-hour clearance window before intended sleep.
            </p>
          </section>

          {/* § 5 — Forms Compared */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 05" figure="§ 05" title="Supplement Forms" titleItalic="Compared" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forms.map((f) => (
                <div key={f.name} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ padding: "10px 16px", backgroundColor: f.recommended ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #D4C9B8", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>{f.name}</p>
                    <span style={{
                      padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", whiteSpace: "nowrap", flexShrink: 0,
                      backgroundColor: f.recommended ? "rgba(74,124,89,0.08)" : "rgba(138,132,128,0.1)",
                      border: f.recommended ? "1px solid rgba(74,124,89,0.2)" : "1px solid rgba(138,132,128,0.2)",
                      color: f.recommended ? "#4A7C59" : "#8A8480",
                    }}>{f.tag}</span>
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
            <p style={{ marginBottom: 24 }}>
              Caffeine is safe at doses up to 400mg/day for healthy, non-pregnant adults (European Food Safety Authority, 2015). Side effects are dose-dependent and primarily manifest at the high end of ergogenic doses (4–6mg/kg) or in individuals with lower tolerance.
            </p>
            {safetyPanels.map((item, i) => (
              <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ padding: "10px 16px", backgroundColor: "rgba(196,98,45,0.06)", borderBottom: "1px solid #D4C9B8" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.12em", textTransform: "uppercase" }}>Myth</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", margin: "4px 0 0" }}>{item.myth}</p>
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#4A7C59", letterSpacing: "0.12em", textTransform: "uppercase" }}>Reality</span>
                  <p style={{ fontSize: 14, color: "#2D2926", margin: "4px 0 4px" }}>{item.reality}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", margin: 0 }}>{item.citation}</p>
                </div>
              </div>
            ))}

            <h2>Known side effects at high doses</h2>
            <p>
              At doses above 6mg/kg or in sensitive individuals: anxiety, jitteriness, elevated heart rate, GI distress (particularly on an empty stomach), insomnia, and headache. These are dose-dependent and resolve with dose reduction. Acute toxicity (seizures, cardiac events) requires doses well above 10g — essentially impossible to reach with commercial supplements.
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
                  {g.tags.map((t) => (
                    <span key={t} style={{ padding: "2px 7px", backgroundColor: "rgba(74,124,89,0.06)", border: "1px solid rgba(74,124,89,0.15)", borderRadius: 4, fontSize: 9, color: "#4A7C59", fontFamily: "var(--font-dm-mono), monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}

            <h2 style={{ marginTop: 24 }}>Use caution / not recommended</h2>
            {cautionGroups.map((g) => (
              <div key={g.group} style={{ border: "1px solid #D4C9B8", borderLeft: `3px solid ${g.isContraindication ? "#C4622D" : "#D4A96A"}`, borderRadius: 8, padding: "14px 18px", marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{g.group}</p>
                  <span style={{ padding: "2px 8px", backgroundColor: g.isContraindication ? "rgba(196,98,45,0.1)" : "rgba(212,169,106,0.1)", border: `1px solid ${g.isContraindication ? "rgba(196,98,45,0.2)" : "rgba(212,169,106,0.2)"}`, borderRadius: 4, fontSize: 9, color: g.isContraindication ? "#C4622D" : "#A07840", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>
                    {g.isContraindication ? "Avoid" : "Use Caution"}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>{g.detail}</p>
              </div>
            ))}
          </section>

          {/* § 8 — Pricing */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 08" figure="§ 08" title="Pricing &" titleItalic="Where to Buy" size="sm" />
            <p style={{ marginBottom: 8 }}>Caffeine anhydrous is one of the cheapest supplements per effective dose. Prices below are USD (as of May 2026) from major US retailers. Amazon prices may vary.</p>
            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 560 }}>
                <thead>
                  <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
                    {["Product", "Size", "Price (USD)", "Per Dose (~200mg)", "Verdict"].map((h) => (
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
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>Prices as of May 2026. Always purchase from reputable retailers and verify NSF or Informed-Sport certification for drug-tested athletes.</p>
          </section>

          {/* § 9 — References */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <SectionHeading label="Section 09" figure="§ 09" title="References" titleItalic="& Further Reading" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { num: "1", cite: "Doherty M, Smith PM. (2005). Effects of caffeine ingestion on exercise testing: a meta-analysis.", journal: "Int J Sport Nutr Exerc Metab, 15(2), 196–210.", url: "https://doi.org/10.1123/ijsnem.15.2.196" },
                { num: "2", cite: "Warren GL, Park ND, Maresca RD, et al. (2010). Effect of caffeine ingestion on muscular strength and endurance: a meta-analysis.", journal: "Med Sci Sports Exerc, 42(7), 1375–87.", url: "https://doi.org/10.1249/MSS.0b013e3181c2a8c3" },
                { num: "3", cite: "McLellan TM, Caldwell JA, Lieberman HR. (2016). A review of caffeine's effects on cognitive, physical and occupational performance.", journal: "Neurosci Biobehav Rev, 71, 294–312.", url: "https://doi.org/10.1016/j.neubiorev.2016.09.001" },
                { num: "4", cite: "Grgic J, Grgic I, Pickering C, et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance — an umbrella review of 21 meta-analyses.", journal: "Br J Sports Med, 54(11), 681–688.", url: "https://doi.org/10.1136/bjsports-2019-101714" },
                { num: "5", cite: "Grgic J, Trexler ET, Lazinica B, Pedisic Z. (2018). Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis.", journal: "J Int Soc Sports Nutr, 15, 11.", url: "https://doi.org/10.1186/s12970-018-0216-0" },
                { num: "6", cite: "Costill DL, Dalsky GP, Fink WJ. (1978). Effects of caffeine ingestion on metabolism and exercise performance.", journal: "Med Sci Sports, 10(3), 155–8.", url: "https://pubmed.ncbi.nlm.nih.gov/723503/" },
                { num: "7", cite: "Graham TE, Hibbert E, Sathasivam P. (1998). Metabolic and exercise endurance effects of coffee and caffeine ingestion.", journal: "J Appl Physiol, 85(3), 883–9.", url: "https://doi.org/10.1152/jappl.1998.85.3.883" },
                { num: "8", cite: "Maughan RJ, Griffin J. (2003). Caffeine ingestion and fluid balance: a review.", journal: "J Hum Nutr Diet, 16(6), 411–20.", url: "https://doi.org/10.1046/j.1365-277X.2003.00477.x" },
                { num: "9", cite: "Drake C, Roehrs T, Shambroom J, Roth T. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed.", journal: "J Clin Sleep Med, 9(11), 1195–200.", url: "https://doi.org/10.5664/jcsm.3170" },
                { num: "10", cite: "Goldstein ER, Ziegenfuss T, Kalman D, et al. (2010). International society of sports nutrition position stand: caffeine and performance.", journal: "J Int Soc Sports Nutr, 7(1), 5.", url: "https://doi.org/10.1186/1550-2783-7-5" },
                { num: "11", cite: "Del Coso J, Muñoz-Fernández VE, Muñoz G, et al. (2012). Effects of a caffeine-containing energy drink on simulated soccer performance.", journal: "PLOS ONE, 7(2), e31380.", url: "https://doi.org/10.1371/journal.pone.0031380" },
                { num: "12", cite: "Burke LM. (2008). Caffeine and sports performance.", journal: "Appl Physiol Nutr Metab, 33(6), 1319–34.", url: "https://doi.org/10.1139/H08-130" },
              ].map((r) => (
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

          {/* Related */}
          <div style={{ padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "3px solid #D4A96A" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>Medical Disclaimer</p>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              Ingredient profiles are for informational purposes only and do not constitute medical advice. Consult a qualified healthcare professional before starting any supplementation protocol.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600 }}>Full disclaimer →</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
