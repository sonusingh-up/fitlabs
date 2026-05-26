import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import type { EvidenceLevel, ReviewRating } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "creatine") {
    return {
      title: "Creatine Monohydrate: Benefits, Dosage & Side Effects",
      description: "Creatine monohydrate is the most researched sports supplement. Learn the proven benefits, correct dosage (3–5g/day), side effects, and which forms actually work.",
      alternates: { canonical: "/ingredients/creatine" },
    };
  }

  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${name}: Benefits, Dosage & Side Effects`,
    description: `Evidence-based profile of ${name}: benefits, effective dose, safety data, forms comparison, and supplement recommendations.`,
    alternates: { canonical: `/ingredients/${slug}` },
  };
}

export default async function IngredientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://fitlabreviews.com/ingredients/${slug}#article`,
    headline: "Creatine Monohydrate: Benefits, Dosage, Side Effects & Safety",
    description: "Comprehensive, evidence-based research profile of creatine monohydrate covering mechanism of action, proven benefits, correct dosage, safety data, and supplement form analysis.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: `https://fitlabreviews.com/ingredients/${slug}`,
    mainEntityOfPage: `https://fitlabreviews.com/ingredients/${slug}`,
    articleSection: "Ingredient Research",
    keywords: ["creatine monohydrate", "creatine benefits", "creatine dosage", "creatine side effects", "creatine supplement India"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much creatine should I take per day?",
        acceptedAnswer: { "@type": "Answer", text: "The research-supported maintenance dose is 3–5g per day. A loading phase of 20g/day (split into 4 doses) for 5–7 days saturates muscles faster but is optional — taking 5g daily achieves the same saturation in 3–4 weeks." },
      },
      {
        "@type": "Question",
        name: "Does creatine cause kidney damage?",
        acceptedAnswer: { "@type": "Answer", text: "No. Decades of controlled research in healthy adults show no adverse effects on kidney function at standard doses (3–5g/day). Creatine does raise serum creatinine (a kidney marker), but this is a normal physiological response to higher creatine intake, not a sign of kidney damage. People with pre-existing kidney disease should consult a doctor before supplementing." },
      },
      {
        "@type": "Question",
        name: "When is the best time to take creatine?",
        acceptedAnswer: { "@type": "Answer", text: "Timing is largely irrelevant. Research shows no significant performance difference between pre- and post-workout creatine. Consistency matters more than timing — take it at the same time each day. Taking it with carbohydrates slightly improves muscle uptake due to insulin-mediated transport." },
      },
      {
        "@type": "Question",
        name: "Does creatine cause water retention or bloating?",
        acceptedAnswer: { "@type": "Answer", text: "Creatine causes intramuscular water retention — water stored inside muscle cells — which is part of why muscles appear fuller and strength increases. This is not subcutaneous bloating (the kind that makes you look puffy). The slight scale weight gain (1–2kg) is water inside muscles, not fat or subcutaneous fluid." },
      },
      {
        "@type": "Question",
        name: "Is creatine HCl better than creatine monohydrate?",
        acceptedAnswer: { "@type": "Answer", text: "No. Despite marketing claims, no peer-reviewed research shows creatine HCl produces superior muscle saturation, strength gains, or body composition changes compared to monohydrate. Monohydrate has 30+ years of research behind it. HCl costs more and has a smaller evidence base." },
      },
      {
        "@type": "Question",
        name: "Can women take creatine?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Women respond to creatine similarly to men. Research shows strength and power improvements in female athletes, and emerging evidence suggests additional benefits for bone density and cognitive health, particularly relevant around menopause. Dosing is the same: 3–5g/day." },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    {
      claim: "Increases maximal strength and power output",
      evidence: "strong",
      citation: "Lanhers et al., 2017 — European Journal of Sport Science",
      notes: "Meta-analysis of 22 RCTs confirmed significant improvements in 1RM bench press and leg press. Effect is most pronounced in compound, high-intensity movements.",
    },
    {
      claim: "Improves high-intensity exercise capacity",
      evidence: "strong",
      citation: "Rawson & Volek, 2003 — Journal of Strength & Conditioning Research",
      notes: "Creatine improves performance in repeated sprint bouts and short-duration maximal efforts (≤30 seconds). Less effect on aerobic endurance.",
    },
    {
      claim: "Increases lean body mass",
      evidence: "strong",
      citation: "Branch, 2003 — International Journal of Sport Nutrition",
      notes: "Lean mass gains result from both intramuscular water retention and enhanced training volume enabling greater hypertrophic adaptation over time.",
    },
    {
      claim: "Enhances muscle recovery between sets",
      evidence: "moderate",
      citation: "Rawson & Clarkson, 2003 — Journal of Athletic Training",
      notes: "Accelerated phosphocreatine resynthesis between sets allows higher volume and reduced fatigue accumulation in training sessions.",
    },
    {
      claim: "Supports cognitive performance",
      evidence: "moderate",
      citation: "Avgerinos et al., 2018 — Experimental Gerontology",
      notes: "Most pronounced in sleep-deprived, vegetarian, or older adults due to lower baseline creatine stores. Evidence in healthy, well-rested individuals is mixed.",
    },
    {
      claim: "May support bone density and healthy aging",
      evidence: "emerging",
      citation: "Gualano et al., 2014 — Medicine & Science in Sports & Exercise",
      notes: "Combined creatine + resistance training shows additive bone mineral density benefit in older women. Research is ongoing.",
    },
    {
      claim: "Neuroprotective effects",
      evidence: "emerging",
      citation: "Adhihetty & Beal, 2008 — Neuromolecular Medicine",
      notes: "Animal and in-vitro research is promising for neurodegenerative conditions. Human clinical data is limited and not yet practice-changing.",
    },
  ];

  const forms = [
    { name: "Creatine Monohydrate", verdict: "The gold standard. Highest evidence base, cheapest per gram, most stable. Micronised variant mixes better — same effect.", recommended: true, tag: "Best Choice" },
    { name: "Micronised Creatine Monohydrate", verdict: "Same as monohydrate, finer particle size for better solubility. Marginally easier to mix. Identical effect.", recommended: true, tag: "Good Choice" },
    { name: "Creatine HCl", verdict: "Smaller dose required per serving, but no evidence of superior muscle saturation or performance vs monohydrate. 3–4× the cost.", recommended: false, tag: "Skip" },
    { name: "Buffered Creatine (Kre-Alkalyn)", verdict: "Marketed as more stable and better absorbed. A 2012 Journal of ISSN head-to-head showed no difference vs monohydrate.", recommended: false, tag: "Skip" },
    { name: "Creatine Ethyl Ester (CEE)", verdict: "Lower bioavailability than monohydrate in direct comparison studies (Spillane et al., 2009). Higher cost, inferior outcome.", recommended: false, tag: "Avoid" },
    { name: "Creatine Magnesium Chelate", verdict: "Limited research. One study (Selsby et al., 2004) showed comparable performance to monohydrate, not superiority.", recommended: false, tag: "Insufficient Data" },
  ];

  const relatedReviews = [
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Clean, affordable, and third-party tested. The best budget creatine available in India.", publishedAt: "2025-03-08" },
    { slug: "optimum-nutrition-creatine", title: "ON Micronised Creatine Powder", brand: "Optimum Nutrition", category: "Creatine", rating: 8 as ReviewRating, verdict: "Reliable brand with excellent mixability. Slightly pricier than AS-IT-IS but widely available.", publishedAt: "2025-02-15" },
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
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Creatine Monohydrate</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ING-001</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>Strength & Power · Performance</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              Creatine Monohydrate: Benefits,<br />Dosage & Side Effects
            </h1>
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level="strong" />
            </div>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>
              Creatine monohydrate is the most extensively researched ergogenic supplement in sports science. Over 500 peer-reviewed studies confirm it increases muscle strength, power output, and lean mass — with a safety profile that holds up across three decades of use.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Quick stats panel */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Effective Dose", value: "3–5g / day", sub: "Maintenance" },
                { label: "Loading Protocol", value: "20g / day", sub: "×5–7 days (optional)" },
                { label: "Evidence Level", value: "Strong", sub: "500+ peer-reviewed studies" },
                { label: "Onset", value: "2–4 weeks", sub: "Full saturation (no loading)" },
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
              This profile is for informational purposes only and does not constitute medical advice. Consult a healthcare professional before starting any supplementation, especially if you have pre-existing kidney disease or take medications.
            </p>
          </div>

          {/* 1. What Is Creatine? */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>What Is Creatine Monohydrate?</h2>
            <p>
              Creatine is a naturally occurring compound synthesised in the human body from three amino acids — arginine, glycine, and methionine — primarily in the liver, kidneys, and pancreas. Approximately 95% of total body creatine is stored in skeletal muscle, with the remainder distributed in the brain, heart, and testes.
            </p>
            <p>
              The body synthesises around 1–2g of creatine per day, and an omnivorous diet contributes roughly another 1–2g daily — primarily from red meat and fish. Vegetarians and vegans, who have no dietary creatine intake, consistently show lower baseline muscle creatine stores and therefore tend to respond more strongly to supplementation.
            </p>
            <p>
              Creatine monohydrate — creatine bonded to one water molecule — is the supplemental form backed by the overwhelming majority of research. When ingested, it is absorbed through the small intestine via a sodium-dependent transporter (CreaT1) and taken up into skeletal muscle against a concentration gradient.
            </p>
          </section>

          {/* 2. How It Works */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>How Creatine Works: The Science</h2>
            <p>
              Creatine's primary mechanism operates within the <strong>ATP-PCr (phosphocreatine) energy system</strong> — the fastest but most limited of the body's three energy pathways, powering all-out efforts lasting 1–10 seconds.
            </p>

            {/* Step-by-step PCr cycle */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", borderBottom: "1px solid #2D2926" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>The ATP-PCr Cycle — Step by Step</p>
              </div>
              {[
                { step: "01", title: "Muscle contracts", body: "ATP (adenosine triphosphate) is split into ADP + Pi, releasing the energy needed for contraction. Stored ATP lasts only 1–2 seconds at maximal intensity." },
                { step: "02", title: "PCr donates a phosphate group", body: "Creatine kinase catalyses the transfer of a phosphate group from phosphocreatine (PCr) to ADP, rapidly regenerating ATP. This reaction is nearly instantaneous." },
                { step: "03", title: "Free creatine is released", body: "After donating its phosphate, PCr becomes free creatine (Cr). It diffuses back to the mitochondria to be re-phosphorylated during rest — restoring the PCr pool." },
                { step: "04", title: "Supplementation expands the PCr pool", body: "Creatine monohydrate raises total muscle creatine stores 20–40% above baseline (Harris et al., 1992). A larger PCr pool means more ATP regenerated per set — higher peak power, more reps at heavy loads, faster inter-set recovery." },
              ].map((s, i) => (
                <div key={s.step} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderBottom: i < 3 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
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

            <h3>Why more creatine = more reps at heavy loads</h3>
            <p>
              The practical effect compounds across a training session. With a larger PCr pool, inter-set PCr resynthesis is faster — meaning each successive set starts with a higher energy reserve. Over weeks and months, the ability to sustain higher training volume leads to greater hypertrophic and strength adaptations than would occur with baseline creatine stores alone. This is why the strength benefit from creatine is not purely acute — it accumulates through enhanced training quality (Lanhers et al., 2017).
            </p>

            <h3>Secondary mechanisms</h3>
            <p>
              Beyond ATP resynthesis, three secondary mechanisms have meaningful research support:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
              {[
                { title: "Satellite cell activation", detail: "Creatine supplementation increases the number and activity of satellite cells (muscle stem cells) following resistance training, potentially enhancing the hypertrophic response independent of energy system effects (Olsen et al., 2006, Journal of Physiology)." },
                { title: "IGF-1 upregulation in muscle tissue", detail: "Creatine combined with resistance training elevates local IGF-1 mRNA expression in skeletal muscle, a key anabolic signalling molecule (Deldicque et al., 2005, Journal of Applied Physiology)." },
                { title: "Myostatin suppression", detail: "Preliminary evidence suggests creatine may reduce myostatin — a negative regulator of muscle growth — though human data is limited and the magnitude of effect unclear (Saremi et al., 2010, International Journal of Sport Nutrition)." },
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
            <h2>Dosage Guide: How Much Creatine to Take</h2>
            <p>
              Two protocols are validated by research. The end result — fully saturated muscle creatine stores — is identical. The choice is only about how fast you get there.
            </p>

            {/* Protocol comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }} className="layout-compare-simple">
              <div style={{ border: "2px solid #C4622D", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#C4622D" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.7)", margin: 0 }}>Most Popular</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>Daily Maintenance</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>3–5g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>/ day</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>Take consistently, any time of day, indefinitely. Muscle stores saturate fully in <strong>3–4 weeks</strong>. No GI discomfort. No loading required.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Simple one-dose-per-day routine", "No GI side effects", "Same end result as loading"].map(p => (
                      <p key={p} style={{ fontSize: 12, color: "#2D6A4F", margin: 0 }}>✓ {p}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>Optional — Faster Saturation</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Loading Protocol</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>20g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>/ day × 5–7 days</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>Split into <strong>4 × 5g doses</strong> with meals. Saturates muscles in ~7 days. Then drop to 3–5g/day maintenance. Useful pre-competition.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Reaches saturation in 1 week", "Higher short-term cost", "Risk of mild GI upset at 20g/day"].map((p, i) => (
                      <p key={p} style={{ fontSize: 12, color: i < 1 ? "#2D6A4F" : "#8B7355", margin: 0 }}>{i < 1 ? "✓" : "·"} {p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Saturation timeline */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ padding: "10px 18px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>Muscle Creatine Saturation Timeline</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
                {[
                  { time: "Day 1", maintenance: "~2%", loading: "~20%", note: "Starting" },
                  { time: "Week 1", maintenance: "~15%", loading: "~95%", note: "" },
                  { time: "Week 2", maintenance: "~50%", loading: "100%", note: "Loading done" },
                  { time: "Week 4", maintenance: "~95–100%", loading: "100%", note: "Both equal" },
                ].map((t, i) => (
                  <div key={t.time} style={{ padding: "14px 12px", borderRight: i < 3 ? "1px solid #EDE8DF" : "none", backgroundColor: i === 3 ? "#F8F2E4" : "#F2EBD9" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#C4622D", marginBottom: 6 }}>{t.time}</p>
                    <p style={{ fontSize: 11, color: "#2D6A4F", marginBottom: 2 }}>Load: {t.loading}</p>
                    <p style={{ fontSize: 11, color: "#5C5650", marginBottom: 0 }}>Daily: {t.maintenance}</p>
                    {t.note && <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", marginTop: 4 }}>{t.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            <h3>Timing — does it matter?</h3>
            <p>
              Timing has a small but measurable effect. A 2013 study by Antonio & Ciccone (<em>Journal of the International Society of Sports Nutrition</em>) found post-workout creatine produced slightly greater lean mass and strength gains versus pre-workout. The proposed mechanism: post-workout carbohydrate intake raises insulin, which upregulates the CreaT1 transporter, improving creatine uptake into muscle. The absolute difference is modest — consistency and total daily dose matter far more than timing.
            </p>

            {/* Quick reference cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Maintenance Dose", value: "3–5g / day", note: "All users — long-term" },
                { label: "Loading Dose", value: "4 × 5g / day", note: "5–7 days only (optional)" },
                { label: "Optimal Timing", value: "Post-workout", note: "With carbs; timing secondary" },
                { label: "Should You Cycle?", value: "No", note: "Continuous use supported up to 5 years" },
              ].map((d) => (
                <div key={d.label} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{d.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 3 }}>{d.value}</p>
                  <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{d.note}</p>
                </div>
              ))}
            </div>

            <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
                <strong>Do you need to cycle creatine?</strong> No. The cycling myth (e.g. 8 weeks on, 4 weeks off) has no evidence base. Cycling just means spending weeks each year with sub-optimal muscle creatine stores for no benefit. Long-term continuous use across 4–5 years shows no adverse health outcomes in multiple independent studies (Greenhaff, 1997; Bizzarini & De Angelis, 2004).
              </p>
            </div>
          </section>

          {/* 5. Supplement Forms */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Creatine Forms Compared</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              The supplement market offers many creatine variants. The verdict from the peer-reviewed literature is consistent: monohydrate remains the reference standard.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forms.map((form) => (
                <div key={form.name} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: form.recommended ? "#F8F2E4" : "#EDE8DF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", margin: 0 }}>{form.name}</p>
                    <span style={{ padding: "3px 10px", backgroundColor: form.recommended ? "rgba(45,106,79,0.1)" : "rgba(196,98,45,0.08)", border: `1px solid ${form.recommended ? "rgba(45,106,79,0.2)" : "rgba(196,98,45,0.15)"}`, borderRadius: 6, fontSize: 9, color: form.recommended ? "#2D6A4F" : "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" as const }}>
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
              Creatine monohydrate has been studied continuously since 1992 — longer than almost any other sports supplement. Multiple long-term trials (up to 5 years), systematic reviews, and position statements from the International Society of Sports Nutrition (Kreider et al., 2017) consistently find no clinically significant adverse effects in healthy adults at standard doses.
            </p>

            {/* Myth vs Reality cards */}
            {[
              {
                concern: "Kidney damage",
                verdict: "Not supported in healthy adults",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "Serum creatinine rises during supplementation — creatinine is creatine's metabolic byproduct, so more muscle creatine → more creatinine produced. This does not reflect reduced kidney function. GFR (glomerular filtration rate), the actual measure of kidney health, remains unaffected in healthy subjects (Poortmans & Francaux, 1999, International Journal of Sports Medicine; Gualano et al., 2008, European Journal of Applied Physiology).",
                caveat: "People with pre-existing kidney disease, a single kidney, or on nephrotoxic medications should consult a physician — the safety evidence applies specifically to healthy adults.",
              },
              {
                concern: "Water retention / bloating",
                verdict: "Intramuscular only — not subcutaneous",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "Creatine draws water into muscle cells (intramuscular retention) — the reason muscles appear fuller and harder. This is not subcutaneous water retention (the puffiness under skin that makes you look bloated). The 1–2kg scale weight gain in the first week is water inside muscle fibres. It is part of the mechanism behind strength and power improvements, not a cosmetic problem.",
                caveat: null,
              },
              {
                concern: "GI discomfort",
                verdict: "Dose-dependent — avoidable",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "Nausea, cramping, or loose stools are reported at loading doses (20g/day) when taken as a single large serving. Splitting the loading dose into 4 × 5g portions with meals eliminates GI symptoms in most users. At the standard 3–5g/day maintenance dose, GI side effects are uncommon and typically resolve within days.",
                caveat: null,
              },
              {
                concern: "Hair loss (androgenic alopecia)",
                verdict: "Unconfirmed — single unreplicated study",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "One study (van der Merwe et al., 2009, Clinical Journal of Sport Medicine) found elevated DHT in rugby players taking creatine. DHT is associated with androgenic alopecia in genetically susceptible individuals. Critically: the study measured DHT levels, not actual hair loss; used a small sample (20 subjects); and has not been replicated in over 15 years of subsequent research. The link remains speculative.",
                caveat: "If you have a strong family history of male-pattern baldness, this remains an unresolved uncertainty worth being aware of.",
              },
              {
                concern: "Liver damage",
                verdict: "Not supported",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "No controlled study has found adverse effects on liver function markers (ALT, AST, bilirubin) at standard creatine doses in healthy adults. A 2003 review by Poortmans & Francaux covering 5 years of continuous creatine use found no hepatotoxic effect.",
                caveat: null,
              },
              {
                concern: "Long-term use",
                verdict: "Safe — up to 5 years of data",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "The longest controlled trials run to 4–5 years. A 2003 study (Bizzarini & De Angelis, Journal of Sports Medicine and Physical Fitness) monitoring athletes over 4 years found no adverse health outcomes. The ISSN's 2017 position stand concludes creatine is 'generally regarded as safe' for long-term use in healthy populations.",
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

          {/* 7. Who Should Take Creatine */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Who Should — and Shouldn't — Take Creatine</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              Creatine's benefits are population-dependent. The evidence is strongest where baseline muscle creatine stores are lowest or where ATP-PCr demand is highest.
            </p>

            {/* Who benefits most */}
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Likely to benefit significantly</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
              {[
                {
                  group: "Strength & power athletes",
                  detail: "The strongest evidence is in high-intensity, short-duration disciplines — weightlifting, powerlifting, sprinting, and team sports with repeated explosive efforts. Multiple meta-analyses confirm 5–15% improvements in maximal strength and sprint performance.",
                  tags: ["Powerlifting", "Weightlifting", "Sprinting", "CrossFit"],
                },
                {
                  group: "Vegetarians & vegans",
                  detail: "No dietary creatine means lower baseline muscle stores — typically 20–30% below omnivores. Vegetarians consistently show larger absolute gains from supplementation. A 2003 study (Burke et al., International Journal of Sport Nutrition) found vegetarians gained significantly more lean mass than meat-eaters during an 8-week creatine + training protocol.",
                  tags: ["Vegetarian", "Vegan", "Plant-based"],
                },
                {
                  group: "Natural (drug-free) athletes",
                  detail: "Without anabolic compounds, creatine is one of only a handful of supplements with a consistent, measurable, independently replicated effect on strength and body composition — making it disproportionately valuable for natural athletes.",
                  tags: ["Natural bodybuilding", "Drug-tested sports"],
                },
                {
                  group: "Older adults (40+)",
                  detail: "Creatine + resistance training shows additive benefits for lean mass preservation, strength, and bone mineral density in aging adults (Chilibeck et al., 2017, British Journal of Sports Medicine meta-analysis). Especially relevant for women post-menopause.",
                  tags: ["Healthy aging", "Sarcopenia prevention", "Bone health"],
                },
                {
                  group: "HIIT & circuit training",
                  detail: "Any protocol involving repeated near-maximal efforts — intervals, circuit training, CrossFit-style WODs — draws heavily on the PCr system. Greater PCr availability directly improves performance in these contexts.",
                  tags: ["HIIT", "Circuit training", "Metabolic conditioning"],
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

            {/* Less benefit / proceed with caution */}
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B7355", marginBottom: 10 }}>Limited benefit or proceed with caution</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  group: "Pure endurance athletes",
                  detail: "Creatine's mechanism (ATP-PCr) is largely irrelevant for activities lasting more than 2–3 minutes. Marathon runners, triathletes, and long-distance cyclists see little direct performance benefit. The intramuscular water gain (1–2kg) may also be an unwanted addition for weight-sensitive endurance sports.",
                  caution: false,
                },
                {
                  group: "Pre-existing kidney disease",
                  detail: "Not necessarily contraindicated, but creatine raises serum creatinine — interfering with a key monitoring marker used to track kidney function. Anyone with CKD, a single kidney, or nephrotoxic medication must consult a nephrologist before supplementing.",
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

          {/* 8. India Market Notes */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Buying Creatine in India: What to Know</h2>
            <p>
              Creatine monohydrate is one of the easier supplements to buy safely in India — it is a single-ingredient powder with no complex blending, making quality verification straightforward. The main risk is not counterfeiting but <strong>underdosing</strong>: some products contain less creatine per serving than stated on the label.
            </p>

            {/* Price benchmark table */}
            <h3>Price benchmarks (May 2026, ₹/USD ≈ ₹83)</h3>
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", backgroundColor: "#1A1714" }}>
                {["Brand", "Size", "Price Range", "₹ per gram"].map(h => (
                  <div key={h} style={{ padding: "10px 14px", borderRight: h !== "₹ per gram" ? "1px solid #2D2926" : "none" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
              {[
                { brand: "AS-IT-IS Nutrition", size: "500g", price: "₹550–₹700", perGram: "₹1.1–₹1.4" },
                { brand: "MuscleBlaze Creatine", size: "500g", price: "₹700–₹900", perGram: "₹1.4–₹1.8" },
                { brand: "MyProtein Creatine", size: "500g", price: "₹900–₹1,200", perGram: "₹1.8–₹2.4" },
                { brand: "ON Micronised Creatine", size: "634g (60 srv)", price: "₹1,500–₹1,900", perGram: "₹2.4–₹3.0" },
              ].map((row, i) => (
                <div key={row.brand} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", borderTop: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  {[row.brand, row.size, row.price, row.perGram].map((cell, j) => (
                    <div key={j} style={{ padding: "12px 14px", borderRight: j < 3 ? "1px solid #EDE8DF" : "none" }}>
                      <p style={{ fontSize: 13, color: j === 0 ? "#1A1714" : "#5C5650", fontWeight: j === 0 ? 600 : 400, margin: 0 }}>{cell}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>Prices from Amazon.in and Healthkart, May 2026. Fair value range for pure creatine monohydrate: ₹1–₹2.5 per gram.</p>
              </div>
            </div>

            <h3>Brands to trust — and why</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { name: "AS-IT-IS Nutrition", badge: "Best Value", badgeColor: "#2D6A4F", detail: "FSSAI-licensed, NABL-accredited lab certificates available on request. Unflavoured, zero additives. Manufactured in India. The most cost-effective verified option on Amazon.in. COA batches are periodically uploaded to their product listings." },
                { name: "MyProtein Creatine Monohydrate", badge: "Tested Athletes", badgeColor: "#2D6A4F", detail: "Informed Sport certified — batch-tested for banned substances. The correct choice for competitive athletes in tested sports (WADA, NADA). Available from MyProtein's official India storefront." },
                { name: "Optimum Nutrition Micronised Creatine", badge: "Premium", badgeColor: "#8B7355", detail: "Micronised for better mixability. Global brand with strong QC history. On Amazon.in, purchase only from the 'Optimum Nutrition India' seller to avoid third-party counterfeits. Check the holographic seal on the lid." },
                { name: "MuscleBlaze Creatine", badge: "Indian Brand", badgeColor: "#8B7355", detail: "Indian brand with NABL-lab tested batches. Lab reports are available via their website's batch verification tool. Competitive pricing and reliable availability across India." },
              ].map((b) => (
                <div key={b.name} style={{ padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", margin: 0 }}>{b.name}</p>
                    <span style={{ padding: "2px 8px", backgroundColor: `${b.badgeColor}12`, border: `1px solid ${b.badgeColor}30`, borderRadius: 4, fontSize: 9, color: b.badgeColor, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" as const }}>{b.badge}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{b.detail}</p>
                </div>
              ))}
            </div>

            <h3>How to verify quality before you buy</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { step: "01", check: "Look for FSSAI licence number", detail: "All food supplements legally sold in India must display an FSSAI licence number. Verify it on the FSSAI portal (fssai.gov.in) — fake numbers won't resolve." },
                { step: "02", check: "Check for a COA or batch certificate", detail: "Certificate of Analysis from a NABL-accredited lab (or equivalent) confirms actual creatine content. Brands like AS-IT-IS and MuscleBlaze publish these. If a brand can't produce one, skip it." },
                { step: "03", check: "Buy from verified storefronts only", detail: "On Amazon.in, filter by 'Sold by [Brand Name]' — avoid third-party sellers for supplements. Healthkart's official store is also reliable for listed brands." },
                { step: "04", check: "Check the price-per-gram", detail: "Pure creatine monohydrate should cost ₹1–₹2.5/g. Significantly below ₹1/g should raise questions about purity or underdosing. Unusually cheap supplements cut quality somewhere." },
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
              All claims in this profile are drawn from peer-reviewed research. Key sources are listed below. Citations are formatted by author, year, and journal.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { num: "1", cite: "Harris, R.C., Söderland, K., & Hultman, E. (1992). Elevation of creatine in resting and exercised muscle of normal subjects by creatine supplementation.", journal: "Clinical Science, 83(3), 367–374." },
                { num: "2", cite: "Lanhers, C., Pereira, B., Naughton, G., Trousselard, M., Lesage, F.X., & Dutheil, F. (2017). Creatine supplementation and lower limb strength performance: A systematic review and meta-analyses.", journal: "European Journal of Sport Science, 17(4), 492–503." },
                { num: "3", cite: "Branch, J.D. (2003). Effect of creatine supplementation on body composition and performance: a meta-analysis.", journal: "International Journal of Sport Nutrition and Exercise Metabolism, 13(2), 198–226." },
                { num: "4", cite: "Rawson, E.S., & Volek, J.S. (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance.", journal: "Journal of Strength and Conditioning Research, 17(4), 822–831." },
                { num: "5", cite: "Poortmans, J.R., & Francaux, M. (1999). Long-term oral creatine supplementation does not impair renal function in healthy athletes.", journal: "Medicine & Science in Sports & Exercise, 31(8), 1108–1110." },
                { num: "6", cite: "Gualano, B., Ugrinowitsch, C., Novaes, R.B., et al. (2008). Effects of creatine supplementation on renal function: a randomized, double-blind, placebo-controlled clinical trial.", journal: "European Journal of Applied Physiology, 103(1), 33–40." },
                { num: "7", cite: "Kreider, R.B., Kalman, D.S., Antonio, J., et al. (2017). International Society of Sports Nutrition position stand: Safety and efficacy of creatine supplementation in exercise, sport, and medicine.", journal: "Journal of the International Society of Sports Nutrition, 14, 18." },
                { num: "8", cite: "Antonio, J., & Ciccone, V. (2013). The effects of pre versus post workout supplementation of creatine monohydrate on body composition and strength.", journal: "Journal of the International Society of Sports Nutrition, 10, 36." },
                { num: "9", cite: "Avgerinos, K.I., Spyrou, N., Bougioukas, K.I., & Kapogiannis, D. (2018). Effects of creatine supplementation on cognitive function of healthy individuals: A systematic review of randomized controlled trials.", journal: "Experimental Gerontology, 108, 166–173." },
                { num: "10", cite: "Olsen, S., Aagaard, P., Kadi, F., et al. (2006). Creatine supplementation augments the increase in satellite cell and myonuclei number in human skeletal muscle induced by strength training.", journal: "Journal of Physiology, 573(2), 525–534." },
                { num: "11", cite: "Burke, D.G., Chilibeck, P.D., Parise, G., Candow, D.G., Mahoney, D., & Tarnopolsky, M. (2003). Effect of creatine and weight training on muscle creatine and performance in vegetarians.", journal: "Medicine & Science in Sports & Exercise, 35(11), 1946–1955." },
                { num: "12", cite: "Chilibeck, P.D., Kaviani, M., Candow, D.G., & Zello, G.A. (2017). Effect of creatine supplementation during resistance training on lean tissue mass and muscular strength in older adults: a meta-analysis.", journal: "Open Access Journal of Sports Medicine, 8, 213–226." },
                { num: "13", cite: "van der Merwe, J., Brooks, N.E., & Myburgh, K.H. (2009). Three weeks of creatine monohydrate supplementation affects dihydrotestosterone to testosterone ratio in college-aged rugby players.", journal: "Clinical Journal of Sport Medicine, 19(5), 399–404." },
                { num: "14", cite: "Bizzarini, E., & De Angelis, L. (2004). Is the use of oral creatine supplementation safe?", journal: "Journal of Sports Medicine and Physical Fitness, 44(4), 411–416." },
                { num: "15", cite: "Deldicque, L., Louis, M., Theisen, D., et al. (2005). Increased IGF mRNA in human skeletal muscle after creatine supplementation.", journal: "Medicine & Science in Sports & Exercise, 37(5), 731–736." },
                { num: "16", cite: "Saremi, A., Gharakhanloo, R., Sharghi, S., Gharaati, M.R., Larijani, B., & Omidfar, K. (2010). Effects of oral creatine and resistance training on serum myostatin and IGFBP-3.", journal: "Acta Physiologica Hungarica, 97(1), 71–80." },
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
                  q: "How much creatine should I take per day?",
                  a: "The research-supported maintenance dose is 3–5g per day. An optional loading phase of 20g/day (split into four 5g doses) for 5–7 days saturates muscles faster but is not necessary — daily 5g achieves the same saturation in 3–4 weeks without GI discomfort.",
                },
                {
                  q: "Does creatine cause kidney damage?",
                  a: "No — for healthy individuals. Creatine raises serum creatinine (a lab marker) because creatinine is creatine's metabolic byproduct. This does not reflect kidney damage. GFR, the true measure of kidney function, is unaffected at standard doses. People with pre-existing kidney disease should consult a doctor before supplementing.",
                },
                {
                  q: "When is the best time to take creatine?",
                  a: "Timing is largely irrelevant. Consistency matters more than timing. Taking it post-workout with carbohydrates shows a marginal advantage in some studies (due to insulin-mediated uptake), but the real-world difference is small. Pick a time you'll remember and stick to it.",
                },
                {
                  q: "Does creatine cause bloating or puffiness?",
                  a: "Creatine causes intramuscular water retention — water stored inside muscle cells, which makes muscles appear fuller and harder. This is not subcutaneous bloating (puffiness under the skin). The 1–2kg scale weight gain in the first week is water inside muscle, not body fat or subcutaneous fluid.",
                },
                {
                  q: "Is creatine HCl better than creatine monohydrate?",
                  a: "No. No peer-reviewed research shows creatine HCl produces superior muscle saturation, strength, or body composition results versus monohydrate. Monohydrate has 30+ years of research behind it. HCl is a newer form marketed on the basis of smaller serving size, but the evidence doesn't support premium pricing.",
                },
                {
                  q: "Can women take creatine?",
                  a: "Yes. Women respond to creatine similarly to men in terms of strength and power improvements. Emerging evidence also suggests benefits for bone density and cognitive function in women, particularly relevant around menopause. Dosing is the same: 3–5g/day.",
                },
              ].map((faq, i) => (
                <div key={i} style={{ padding: "20px", borderBottom: i < 5 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Related Reviews */}
          <section>
            <SectionHeading label="Products" figure="§ REL" title="Reviewed creatine" titleItalic="supplements" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {relatedReviews.map((r) => (
                <ReviewCard key={r.slug} {...r} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
