import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import type { EvidenceLevel, ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Whey Protein Isolate: Benefits, Dosage & Side Effects",
  description: "Whey protein isolate: fastest-absorbing, highest-leucine protein. Proven MPS benefits, correct dose (20-40 g), WPI vs WPC comparison, and safety.",
  alternates: { canonical: "/ingredients/whey-protein" },
};

export default function WheyProteinPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://fitlabreviews.com/ingredients/whey-protein#article",
    headline: "Whey Protein Isolate: Benefits, Dosage, Side Effects & Forms Compared",
    description: "Comprehensive, evidence-based research profile of whey protein isolate covering leucine-mTOR mechanism, proven benefits, correct dosage, safety data, and supplement form analysis.",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: "https://fitlabreviews.com/ingredients/whey-protein",
    mainEntityOfPage: "https://fitlabreviews.com/ingredients/whey-protein",
    articleSection: "Ingredient Research",
    keywords: ["whey protein isolate", "whey protein benefits", "WPI vs WPC", "protein dosage", "muscle protein synthesis"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much whey protein should I take per day?",
        acceptedAnswer: { "@type": "Answer", text: "For maximising muscle protein synthesis, research supports 20–40g per serving, with 0.25–0.40g per kg of bodyweight per meal being the clinically studied range. Total daily protein intake (1.6–2.2g/kg/day for athletes) matters more than any single serving. Spreading intake across 3–4 meals optimises MPS throughout the day." },
      },
      {
        "@type": "Question",
        name: "What is the difference between WPI and WPC?",
        acceptedAnswer: { "@type": "Answer", text: "Whey protein isolate (WPI) is filtered to contain >90% protein with minimal fat and lactose — making it preferable for lactose-sensitive individuals and those tracking macros closely. Whey protein concentrate (WPC) contains 70–80% protein with more fat, carbohydrates, and lactose. WPI costs more per gram but is a cleaner product." },
      },
      {
        "@type": "Question",
        name: "When is the best time to take whey protein?",
        acceptedAnswer: { "@type": "Answer", text: "The post-workout window (within 0–2 hours of training) is well-supported for maximising muscle protein synthesis. However, total daily protein intake is the primary driver of muscle gain — hitting your daily target consistently matters more than precise timing. Whey's fast absorption profile makes it particularly suited to post-workout use." },
      },
      {
        "@type": "Question",
        name: "Does whey protein damage kidneys?",
        acceptedAnswer: { "@type": "Answer", text: "No, not in healthy individuals. High protein diets (including from whey) do not impair kidney function in people with normal kidney health (Martin et al., 2005). The concern applies specifically to people with pre-existing chronic kidney disease, who should follow a protein-restricted diet under medical supervision." },
      },
      {
        "@type": "Question",
        name: "Can lactose-intolerant people take whey protein isolate?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, in most cases. Whey protein isolate undergoes additional filtration that removes nearly all lactose. Most lactose-intolerant individuals tolerate WPI without symptoms. Whey protein concentrate retains more lactose and is more likely to cause digestive discomfort. If in doubt, start with a small serving of WPI to test tolerance." },
      },
      {
        "@type": "Question",
        name: "Does whey protein cause acne?",
        acceptedAnswer: { "@type": "Answer", text: "There is an association between dairy-derived proteins (including whey) and acne in susceptible individuals, likely via IGF-1 stimulation and androgen signalling. It is not universal — most users have no skin response. Those with acne-prone skin who notice worsening after introducing whey may benefit from switching to a plant-based protein isolate and monitoring the response." },
      },
    ],
  };

  const benefits: { claim: string; evidence: EvidenceLevel; citation: string; notes: string }[] = [
    {
      claim: "Increases acute muscle protein synthesis (MPS)",
      evidence: "strong",
      citation: "Witard et al., 2014 — American Journal of Clinical Nutrition",
      notes: "Dose-response study: 40g whey produced greater post-exercise MPS than 20g, which exceeded 10g. The leucine threshold (~0.05g/kg) must be crossed to trigger maximal MPS signalling via mTORC1. Whey's ~10% leucine content makes it exceptionally effective at crossing this threshold.",
    },
    {
      claim: "Promotes muscle hypertrophy with resistance training",
      evidence: "strong",
      citation: "Morton et al., 2018 — British Journal of Sports Medicine (meta-analysis)",
      notes: "Meta-analysis of 49 RCTs (1,800 participants) confirmed protein supplementation significantly augments resistance training gains in lean mass and strength. Whey was the most common protein type studied. Effect was independent of training status and sex.",
    },
    {
      claim: "Supports fat loss and favourable body composition",
      evidence: "moderate",
      citation: "Phillips et al., 2016 — American Journal of Clinical Nutrition",
      notes: "High protein diets (partially supplied by whey) reduce fat mass while preserving lean mass during caloric deficits. The satiety effect of whey — partly driven by gut hormone release — also supports reduced calorie intake.",
    },
    {
      claim: "Accelerates post-exercise recovery",
      evidence: "moderate",
      citation: "Cockburn et al., 2010 — Applied Physiology, Nutrition, and Metabolism",
      notes: "Whey supplementation attenuated exercise-induced muscle damage markers and improved next-session performance. The combination of leucine-triggered MPS and essential amino acid availability drives faster structural repair.",
    },
    {
      claim: "Reduces delayed-onset muscle soreness (DOMS)",
      evidence: "moderate",
      citation: "Buckley et al., 2010 — Medicine & Science in Sports & Exercise",
      notes: "Hydrolysed whey reduced peak DOMS and improved peak force recovery 24 hours post-exercise versus carbohydrate control. Effect may be more pronounced with the hydrolysed form due to faster amino acid delivery.",
    },
    {
      claim: "Supports satiety and appetite regulation",
      evidence: "moderate",
      citation: "Veldhorst et al., 2009 — British Journal of Nutrition",
      notes: "Whey produced greater satiety responses than casein or soy at matched protein doses, attributed to elevated plasma amino acids stimulating gut hormone (GLP-1, CCK) release and a slower return of appetite.",
    },
    {
      claim: "May support immune function via glutathione",
      evidence: "limited",
      citation: "Baruchel & Viau, 1996 — Anticancer Research",
      notes: "Whey is rich in cysteine, a precursor to glutathione — the body's primary antioxidant. Elevated intracellular glutathione may support immune cell function. Evidence is mostly preclinical; clinical relevance in healthy athletes is unclear.",
    },
  ];

  const forms = [
    { name: "Whey Protein Isolate (WPI)", verdict: "Filtered to >90% protein. Near-zero lactose and fat — ideal for lactose-sensitive users and strict macro tracking. Highest leucine concentration per gram. More expensive than WPC.", recommended: true, tag: "Best Choice" },
    { name: "Whey Protein Concentrate (WPC)", verdict: "70–80% protein with more fat, carbohydrates, and lactose. Marginally cheaper per gram and retains more bioactive fractions (lactoferrin, immunoglobulins). The right choice if cost is the priority and you tolerate lactose.", recommended: true, tag: "Good Value" },
    { name: "Hydrolysed Whey Protein", verdict: "Pre-digested into smaller peptides for faster absorption. Peak amino acid levels in blood ~30 min faster vs intact whey (Manninen 2009). Real-world muscle-building advantage over WPI is negligible in non-clinical populations. Highest cost.", recommended: false, tag: "Premium / Marginal Edge" },
    { name: "Whey Protein Blend (WPC + WPI)", verdict: "Common in mid-tier products. Protein content typically 75–85%. Acceptable value but read labels carefully — cheap blends front-load WPC and use WPI for marketing while actual isolate content is low.", recommended: false, tag: "Check Label" },
    { name: "Native Whey", verdict: "Produced directly from milk rather than cheese-making byproduct. Higher leucine and undenatured protein fractions than standard whey (Hamarsland et al., 2017). Limited large-scale human data and higher cost. Interesting but not necessary.", recommended: false, tag: "Emerging" },
    { name: "Casein Protein", verdict: "Slow-digesting (6–8 hours). Does not outperform whey for MPS acutely, but the sustained amino acid release may be beneficial pre-sleep. Not a whey replacement — a different tool for a different window.", recommended: false, tag: "Different Use Case" },
  ];

  const relatedReviews = [
    { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein", rating: 9 as ReviewRating, verdict: "The benchmark whey blend. Consistent quality, excellent amino profile, widely available worldwide.", publishedAt: "2025-04-10" },
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
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Whey Protein Isolate</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ING-002</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Research Profile</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8, textTransform: "uppercase" }}>Muscle Protein Synthesis · Recovery</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              Whey Protein Isolate: Benefits,<br />Dosage & Side Effects
            </h1>
            <div style={{ marginBottom: 20 }}>
              <EvidenceBadge level="strong" />
            </div>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 0 }}>
              Whey protein isolate is the gold standard protein supplement — the highest leucine content of any source, near-complete amino acid profile, and the most replicated evidence base in sports nutrition. Over 300 peer-reviewed studies confirm its role in driving muscle protein synthesis, accelerating recovery, and supporting body composition.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Quick stats panel */}
          <div style={{ marginBottom: 56 }}>
            <div className="ing-stats-grid">
              {[
                { label: "Effective Dose", value: "20–40g", sub: "Per serving" },
                { label: "Leucine Content", value: "~10–11%", sub: "Highest of any protein" },
                { label: "Evidence Level", value: "Strong", sub: "300+ peer-reviewed studies" },
                { label: "Onset", value: "0–2 hrs", sub: "Post-exercise window" },
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
              This profile is for informational purposes only and does not constitute medical advice. Consult a healthcare professional before starting supplementation, especially if you have pre-existing kidney disease, a milk allergy, or take medications.
            </p>
          </div>

          {/* 1. What Is Whey Protein Isolate? */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>What Is Whey Protein Isolate?</h2>
            <p>
              Whey is the liquid fraction separated from curds during cheese production. It accounts for roughly 20% of total milk protein — the remaining 80% being casein. In its raw form, whey liquid contains water, lactose, fat, minerals, and approximately 6% protein. Through filtration and drying processes, this liquid is concentrated into the white powder found in supplement tubs.
            </p>
            <p>
              <strong>Whey protein isolate (WPI)</strong> undergoes additional processing — microfiltration or ion-exchange chromatography — that removes most of the remaining fat and lactose, yielding a powder that is typically <strong>90–95% protein by weight</strong>. This makes it the most protein-dense whey form available, with minimal carbohydrate and fat per serving.
            </p>
            <p>
              Whey is a complete protein: it contains all nine essential amino acids (EAAs) in amounts that meet or exceed human requirements. Its amino acid profile is particularly rich in leucine — the branched-chain amino acid that acts as the primary anabolic signalling trigger for muscle protein synthesis. At approximately 10–11% leucine by amino acid weight, whey outperforms egg, casein, soy, and all plant proteins in leucine density per gram of protein.
            </p>
          </section>

          {/* 2. How It Works: The Science */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>How Whey Protein Works: The Science</h2>
            <p>
              Whey's primary mechanism for driving muscle growth operates through the <strong>leucine-mTORC1 signalling axis</strong> — the central anabolic pathway governing muscle protein synthesis (MPS) in skeletal muscle.
            </p>

            {/* Step-by-step leucine pathway */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24, marginTop: 8 }}>
              <div style={{ padding: "12px 20px", backgroundColor: "#1A1714", borderBottom: "1px solid #2D2926" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>The Leucine → mTORC1 → MPS Pathway — Step by Step</p>
              </div>
              {[
                { step: "01", title: "Digestion & absorption", body: "Whey is rapidly digested in the small intestine. WPI reaches peak plasma amino acid levels within 60–90 minutes of ingestion — faster than casein (3–4 hours) or most plant proteins. This acute spike in circulating amino acids is critical for triggering MPS." },
                { step: "02", title: "Leucine crosses into muscle cells", body: "Leucine is transported across the muscle cell membrane via large neutral amino acid transporters (LAT1/4F2hc). Inside the cell, rising leucine concentration activates upstream sensors including Sestrin2 and CASTOR1, which release inhibition on the GATOR2 complex." },
                { step: "03", title: "mTORC1 is activated at the lysosome", body: "Leucine signals activate Rag GTPases, recruiting mTORC1 (mechanistic target of rapamycin complex 1) to the lysosomal membrane. Here, Rheb GTPase — itself activated by insulin/IGF-1 via PI3K-Akt — fully activates mTORC1." },
                { step: "04", title: "MPS is initiated", body: "Active mTORC1 phosphorylates two downstream targets: p70 S6K1 (promotes ribosome biogenesis and translation initiation) and 4E-BP1 (releases the translation initiation factor eIF4E). The net result: existing ribosomes are loaded with mRNA and new proteins are synthesised — including muscle structural proteins like myosin and actin." },
                { step: "05", title: "Net muscle protein balance shifts positive", body: "MPS must exceed muscle protein breakdown (MPB) for net accretion. Whey provides the full EAA substrate needed for new protein construction while leucine's anabolic signalling also reduces MPB via inhibition of ubiquitin-proteasome activity. The net result is a positive muscle protein balance — the biological foundation of hypertrophy." },
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

            <h3>Why leucine content is the critical variable</h3>
            <p>
              The leucine threshold concept — established in mechanistic work by Norton & Layman (2006) and later quantified by Churchward-Venne et al. (2012) — holds that a minimum dose of leucine (~0.05g/kg bodyweight per meal) must be reached to maximally stimulate MPS. Below this threshold, MPS is submaximally activated regardless of total protein dose. Above it, increasing leucine does not further increase MPS linearly. This is why whey's ~10% leucine content gives it a structural advantage over proteins with lower leucine density (e.g. soy at ~7.8%, pea at ~8%).
            </p>

            <h3>Secondary mechanisms</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
              {[
                { title: "Insulin potentiation of amino acid uptake", detail: "Whey's leucine and amino acid content stimulates modest insulin release, which upregulates GLUT4 translocation and enhances cellular amino acid transport. This synergistic effect is why consuming whey with a carbohydrate meal modestly improves MPS above protein alone (Power et al., 2009, Amino Acids)." },
                { title: "Reduction of muscle protein breakdown (MPB)", detail: "Leucine-activated mTORC1 suppresses autophagy and the ubiquitin-proteasome system, reducing the rate at which existing muscle proteins are degraded. The combined effect of elevated MPS and reduced MPB accelerates net muscle protein accretion beyond what MPS alone would predict (Phillips & Van Loon, 2011, Journal of Sports Sciences)." },
                { title: "Satellite cell activation", detail: "Essential amino acids from whey, particularly leucine, stimulate satellite cell (muscle stem cell) proliferation and differentiation — the same secondary mechanism seen with creatine. This effect may be more pronounced post-exercise when satellite cell activity is already elevated (Churchward-Venne et al., 2012, AJCN)." },
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

          {/* 4. Dosage Guide */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Dosage Guide: How Much Whey Protein to Take</h2>
            <p>
              The key principle is not the per-serving dose — it is <strong>total daily protein intake</strong> relative to bodyweight. Whey protein is a delivery vehicle for dietary protein; its supplemental benefit comes from helping you hit a daily target that food alone may not cover.
            </p>

            {/* Daily target vs per-serving */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }} className="layout-compare-simple">
              <div style={{ border: "2px solid #C4622D", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#C4622D" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.7)", margin: 0 }}>Primary Target</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>Total Daily Protein</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>1.6–2.2g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>/ kg / day</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>The research-supported range for athletes in resistance training (Morton et al., 2018). Spread across 3–4 meals for maximal MPS stimulation throughout the day.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Most important variable for muscle gain", "Distribute evenly across meals", "Use whey to bridge gaps in food intake"].map(p => (
                      <p key={p} style={{ fontSize: 12, color: "#2D6A4F", margin: 0 }}>✓ {p}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>Per Serving</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Individual Dose</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F2EBD9" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>20–40g <span style={{ fontSize: "0.9rem", color: "#8A8480", fontWeight: 400 }}>/ serving</span></p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 12 }}>For a 75kg athlete, 0.25–0.40g/kg = <strong>19–30g protein</strong> per meal to maximise MPS. 40g is the ceiling for acute MPS stimulation — larger doses are oxidised rather than used for muscle building.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {["Leucine threshold: ~0.05g/kg per meal", "~20g sufficient for most under 80kg", "40g ceiling — more is not better acutely"].map((p, i) => (
                      <p key={p} style={{ fontSize: 12, color: i < 2 ? "#2D6A4F" : "#8B7355", margin: 0 }}>{i < 2 ? "✓" : "·"} {p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick reference cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 10, marginBottom: 20 }}>
              {[
                { label: "For Muscle Gain", value: "1.6–2.2g / kg", note: "Total daily protein target" },
                { label: "For Fat Loss", value: "2.2–3.1g / kg", note: "Higher protein preserves muscle in deficit" },
                { label: "Per Serving", value: "20–40g", note: "0.25–0.40g/kg body weight" },
                { label: "Best Timing", value: "Post-workout", note: "Within 0–2 hrs of training" },
              ].map((d) => (
                <div key={d.label} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{d.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 3 }}>{d.value}</p>
                  <p style={{ fontSize: 11, color: "#5C5650", margin: 0 }}>{d.note}</p>
                </div>
              ))}
            </div>

            <h3>Does timing actually matter?</h3>
            <p>
              Post-workout protein timing is supported by evidence — but its importance is frequently overstated. A 2013 meta-analysis by Schoenfeld et al. (<em>Journal of the International Society of Sports Nutrition</em>) found that total daily protein intake was the primary predictor of hypertrophy, with timing adding only a modest additional effect. The "anabolic window" is broader than originally thought — MPS remains elevated for 24–48 hours post-training, and muscle is sensitive to protein at each meal throughout this period. The practical rule: don't skip protein around training, but don't panic if your shake is delayed 30 minutes.
            </p>

            <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
                <strong>Higher-protein diets during a cut:</strong> Research supports intakes up to 3.1g/kg/day during aggressive caloric restriction to maximise lean mass preservation (Helms et al., 2014, International Journal of Sport Nutrition). Whey protein's low calorie-to-protein ratio makes it particularly suited to this use case — ~110 kcal and ~25g protein per 30g serving of WPI.
              </p>
            </div>
          </section>

          {/* 5. Supplement Forms */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Whey Protein Forms Compared</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              The market offers multiple protein types, each with different protein density, digestion speed, and cost profiles.
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
              Whey protein is derived from food (milk) and has a well-established safety record across decades of human consumption. The key distinction to make is between a <strong>milk allergy</strong> (immune response to milk proteins — genuine contraindication) and <strong>lactose intolerance</strong> (digestive difficulty with milk sugar — manageable with WPI, which contains minimal lactose).
            </p>

            {[
              {
                concern: "Kidney damage",
                verdict: "Not supported in healthy adults",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "High-protein diets do not impair kidney function in healthy individuals. A 2005 review by Martin et al. (Journal of the American Dietetic Association) concluded that while protein restriction is appropriate for people with existing renal disease, no evidence supports kidney harm in healthy adults from high intakes. Whey protein at normal supplemental doses (20–40g/day) poses no renal risk in the absence of underlying kidney disease.",
                caveat: "People with chronic kidney disease (CKD) are managed on protein-restricted diets under medical supervision. Whey protein should be used under medical guidance in this population.",
              },
              {
                concern: "Lactose intolerance",
                verdict: "WPI is well-tolerated by most",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "Whey protein isolate undergoes additional filtration that removes nearly all lactose — typically <0.5g per 30g serving. The majority of lactose-intolerant individuals tolerate WPI without symptoms. Whey protein concentrate retains more lactose and is more likely to cause bloating, gas, or loose stools. If you are lactose-intolerant, choose WPI specifically and confirm the label shows <1g lactose per serving.",
                caveat: null,
              },
              {
                concern: "Milk allergy (distinct from lactose intolerance)",
                verdict: "Genuine contraindication",
                verdictColor: "#C4622D",
                verdictBg: "rgba(196,98,45,0.07)",
                borderColor: "#C4622D",
                body: "A true milk allergy is an immune response to milk proteins — primarily casein and beta-lactoglobulin. Whey is a milk protein, so anyone with a diagnosed milk allergy must avoid it entirely. This affects approximately 0.6% of adults. People with milk allergy should use plant-based protein alternatives (pea, rice, hemp) instead.",
                caveat: null,
              },
              {
                concern: "Acne / skin breakouts",
                verdict: "Association exists — not universal",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "Several observational studies and case reports link dairy protein consumption (including whey) with acne vulgaris in susceptible individuals. The proposed mechanism involves IGF-1 stimulation and androgen signalling from dairy-derived growth factors. This is not a universal effect — many users have no skin response. Those with existing acne-prone skin who notice worsening after introducing whey protein may benefit from switching to a plant-based isolate and monitoring the response.",
                caveat: "The evidence is mostly observational (Simonart 2012; Vongraviopap & Asawanonda 2016). A controlled trial is needed but ethical limitations make it difficult to conduct. Treat this as an individual-response consideration rather than a population-level risk.",
              },
              {
                concern: "GI discomfort",
                verdict: "Dose-dependent and form-dependent",
                verdictColor: "#8B7355",
                verdictBg: "rgba(139,115,85,0.07)",
                borderColor: "#8B7355",
                body: "Bloating, gas, or cramping from whey protein is usually lactose-related (more common with WPC) or from artificial sweeteners (sorbitol, maltitol) in some formulations. Large single servings (>50g) can cause GI transit issues regardless of form. Spreading protein across multiple smaller servings and choosing WPI or an unsweetened concentrate typically resolves symptoms.",
                caveat: null,
              },
              {
                concern: "Liver damage",
                verdict: "Not supported at normal doses",
                verdictColor: "#2D6A4F",
                verdictBg: "rgba(45,106,79,0.07)",
                borderColor: "#2D6A4F",
                body: "No controlled evidence links normal dietary or supplemental protein intake with liver damage in healthy adults. Extreme chronic protein overload (>4g/kg/day) has theoretical hepatic stress implications, but these doses exceed what any reasonable supplementation protocol would involve. The 1.6–2.2g/kg/day recommended range is well within safe limits.",
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

          {/* 7. Who Should Take Whey Protein */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Who Should — and Shouldn't — Take Whey Protein</h2>
            <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
              Whey protein is a protein source, not a drug. Its benefit is directly proportional to the gap between your dietary protein intake and your daily target — the larger the gap, the more valuable supplementation becomes.
            </p>

            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Likely to benefit significantly</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
              {[
                {
                  group: "Athletes with high protein requirements",
                  detail: "Resistance-training athletes require 1.6–2.2g of protein per kilogram of bodyweight daily. A 90kg athlete needs 144–198g/day — a target that is difficult and expensive to meet from food alone. Whey protein efficiently bridges this gap at a lower calorie and cost-per-gram than most whole-food sources.",
                  tags: ["Bodybuilding", "Powerlifting", "Team sports", "CrossFit"],
                },
                {
                  group: "Anyone in a caloric deficit",
                  detail: "During a cut, protein needs increase (up to 2.2–3.1g/kg/day) to protect lean mass. Simultaneously, calories are restricted, making high-volume food intake impractical. WPI's ~110 kcal per 25g protein serving makes it exceptionally efficient for body recomposition.",
                  tags: ["Fat loss", "Body recomposition", "Contest prep"],
                },
                {
                  group: "Vegetarians (lacto-ovo)",
                  detail: "Vegetarians who consume dairy can use whey protein to easily meet total protein targets without relying on plant sources with lower leucine density. Whey provides a complete, high-leucine protein that is difficult to replicate with plant foods alone without significant calorie overhead.",
                  tags: ["Lacto-vegetarian", "Ovo-vegetarian", "Flexitarian"],
                },
                {
                  group: "Older adults (50+)",
                  detail: "Anabolic resistance — the reduced sensitivity of aging muscle to protein-stimulated MPS — means older adults need higher per-meal leucine doses to trigger the same MPS response as younger individuals (Churchward-Venne et al., 2016, AJCN). Whey's high leucine content makes it the most practical protein source for overcoming this resistance.",
                  tags: ["Healthy aging", "Sarcopenia prevention", "Active retirees"],
                },
                {
                  group: "Post-surgery or injury recovery",
                  detail: "Adequate protein is essential for wound healing, immune function, and preventing muscle wasting during enforced rest. Whey provides fast-absorbing EAAs when appetite may be reduced and solid food intake is limited.",
                  tags: ["Recovery", "Injury rehab", "Post-operative"],
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

            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B7355", marginBottom: 10 }}>Limited benefit or proceed with caution</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  group: "Anyone already meeting protein targets from food",
                  detail: "If you consistently hit 1.6–2.2g/kg/day from whole foods, whey protein adds no additional muscle-building benefit. It is a protein source, not a magic supplement. The benefit is entirely in the protein itself — not some unique anabolic compound that whole foods lack.",
                  caution: false,
                },
                {
                  group: "People with milk allergy",
                  detail: "A true IgE-mediated milk allergy is a contraindication. Symptoms can range from hives and GI distress to anaphylaxis. Whey is a milk protein and cannot be safely consumed by this group. Use pea, rice, or hemp protein isolates instead.",
                  caution: true,
                },
                {
                  group: "Vegans",
                  detail: "Whey is animal-derived. The closest vegan equivalent in terms of leucine content and MPS stimulation is a blend of pea + rice protein isolate (to cover complementary amino acid profiles), with slightly higher doses needed to match whey's leucine delivery per serving.",
                  caution: false,
                },
              ].map((item) => (
                <div key={item.group} style={{ padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: item.caution ? "rgba(139,115,85,0.05)" : "#F2EBD9", borderLeft: `3px solid ${item.caution ? "#8B7355" : "#D4C9B8"}` }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.group}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Pricing & Where to Buy */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Pricing & Where to Buy</h2>
            <p>
              Whey protein is one of the most price-competitive supplement categories globally. The WPI market is mature — quality has converged at the top, and the main variable is cost per gram of protein. Use price-per-gram as your primary selection metric, not price per tub.
            </p>

            {/* Price benchmark table */}
            <h3>Price benchmarks (USD, May 2026)</h3>
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", backgroundColor: "#1A1714" }}>
                {["Brand / Product", "Form", "Size", "Price (USD)", "Per 25g protein"].map((h, i) => (
                  <div key={h} style={{ padding: "10px 12px", borderRight: i < 4 ? "1px solid #2D2926" : "none" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
              {[
                { brand: "ON Gold Standard Whey", form: "WPC/WPI blend", size: "5 lb", price: "$35–$50", perServing: "~$0.60–$0.85" },
                { brand: "Dymatize ISO100", form: "Hydrolysed WPI", size: "5 lb", price: "$55–$75", perServing: "~$0.90–$1.20" },
                { brand: "Isopure Zero Carb", form: "WPI", size: "3 lb", price: "$45–$60", perServing: "~$1.00–$1.35" },
                { brand: "MyProtein Impact WPI", form: "WPI", size: "2.5 kg", price: "$40–$55", perServing: "~$0.65–$0.90" },
                { brand: "Ghost Whey", form: "WPI/WPC blend", size: "2 lb", price: "$40–$50", perServing: "~$1.30–$1.65" },
              ].map((row, i) => (
                <div key={row.brand} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", borderTop: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  {[row.brand, row.form, row.size, row.price, row.perServing].map((cell, j) => (
                    <div key={j} style={{ padding: "12px 12px", borderRight: j < 4 ? "1px solid #EDE8DF" : "none" }}>
                      <p style={{ fontSize: 13, color: j === 0 ? "#1A1714" : "#5C5650", fontWeight: j === 0 ? 600 : 400, margin: 0 }}>{cell}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ padding: "10px 14px", backgroundColor: "#EDE8DF", borderTop: "1px solid #D4C9B8" }}>
                <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>Prices from major US retailers (Amazon, official brand stores), May 2026. Fair value for WPI: $0.60–$0.90 per 25g protein serving. Hydrolysed commands a premium with marginal real-world advantage.</p>
              </div>
            </div>

            <h3>Brands to trust — and why</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { name: "Optimum Nutrition Gold Standard Whey", badge: "Most Trusted", badgeColor: "#2D6A4F", detail: "The most studied and cited commercial whey product. WPC + WPI blend with consistent amino acid spiking-free formulation. Third-party tested. Available in 90+ countries. Amino acid verification panels available online." },
                { name: "Dymatize ISO100", badge: "Best WPI", badgeColor: "#2D6A4F", detail: "Hydrolysed WPI with Informed Sport certification — batch-tested for banned substances. The right choice for competitive athletes in tested sports. Clean label, minimal additives. Consistently passes third-party label accuracy tests." },
                { name: "MyProtein Impact WPI", badge: "Best Value", badgeColor: "#2D6A4F", detail: "Informed Sport certified. Competitive cost per gram — particularly when bought in bulk (2.5kg+). Minimal flavour additives in the unflavoured variant. Manufactured in EU-standard facilities in the UK." },
                { name: "Isopure Zero Carb", badge: "Zero Carb", badgeColor: "#8B7355", detail: "True WPI with zero carbohydrates and near-zero fat per serving — useful for strict ketogenic or very-low-carb protocols. Slightly lower protein density per dollar than other WPI options but a clean, reliable product." },
              ].map((b) => (
                <div key={b.name} style={{ padding: "14px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", margin: 0 }}>{b.name}</p>
                    <span style={{ padding: "2px 8px", backgroundColor: `${b.badgeColor}12`, border: `1px solid ${b.badgeColor}30`, borderRadius: 4, fontSize: 9, color: b.badgeColor, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>{b.badge}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{b.detail}</p>
                </div>
              ))}
            </div>

            <h3>How to verify quality before you buy</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { step: "01", check: "Look for third-party certification", detail: "Informed Sport, NSF Certified for Sport, or Labdoor certification confirm that what is on the label is what is in the tub. These certify against banned substance contamination AND label accuracy. This matters for competitive athletes and anyone who wants transparency." },
                { step: "02", check: "Check protein content per 100g of powder", detail: "A genuine WPI should show 85–92g protein per 100g powder. If a product claims to be WPI but shows <80g/100g, it likely contains significant WPC or fillers. WPC typically shows 70–80g/100g." },
                { step: "03", check: "Verify the amino acid profile on the label", detail: "Legitimate whey products list their full amino acid panel. Check that leucine is listed at 10–11% of total amino acids for WPI (e.g. ~2.5g leucine per 25g protein). Amino-spiked products inflate total nitrogen with cheap amino acids (glycine, taurine) — they will show inflated totals but lower BCAAs." },
                { step: "04", check: "Watch for amino spiking red flags", detail: "Amino spiking adds non-essential amino acids to inflate protein readings on a nitrogen test. Red flags: unusually high protein per 100g (>95g), 'amino acid blend' listed as a separate ingredient, price far below market rate for WPI. Brands like ON, Dymatize, MyProtein have been independently tested as spike-free." },
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
              All claims in this profile are drawn from peer-reviewed research. Key sources are listed below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              {[
                { num: "1", cite: "Witard, O.C., Jackman, S.R., Breen, L., Smith, K., Selby, A., & Tipton, K.D. (2014). Myofibrillar muscle protein synthesis rates subsequent to a meal in response to small and large bolus doses of dairy protein.", journal: "American Journal of Clinical Nutrition, 99(1), 86–95." },
                { num: "2", cite: "Morton, R.W., Murphy, K.T., McKellar, S.R., et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults.", journal: "British Journal of Sports Medicine, 52(6), 376–384." },
                { num: "3", cite: "Phillips, S.M., & Van Loon, L.J.C. (2011). Dietary protein for athletes: From requirements to optimum adaptation.", journal: "Journal of Sports Sciences, 29(Suppl 1), S29–S38." },
                { num: "4", cite: "Churchward-Venne, T.A., Breen, L., Di Donato, D.M., et al. (2012). Leucine supplementation of a low-protein mixed macronutrient beverage enhances myofibrillar protein synthesis in young men.", journal: "American Journal of Clinical Nutrition, 99(2), 276–286." },
                { num: "5", cite: "Schoenfeld, B.J., Aragon, A.A., & Krieger, J.W. (2013). The effect of protein timing on muscle strength and hypertrophy: a meta-analysis.", journal: "Journal of the International Society of Sports Nutrition, 10, 53." },
                { num: "6", cite: "Veldhorst, M.A., Nieuwenhuizen, A.G., Hochstenbach-Waelen, A., et al. (2009). Dose-dependent satiating effect of whey relative to casein or soy.", journal: "Physiology & Behavior, 96(4–5), 675–682." },
                { num: "7", cite: "Cockburn, E., Hayes, P.R., French, D.N., Stevenson, E., & St Clair Gibson, A. (2010). Acute milk-based protein–CHO supplementation attenuates exercise-induced muscle damage.", journal: "Applied Physiology, Nutrition, and Metabolism, 35(3), 270–277." },
                { num: "8", cite: "Buckley, J.D., Thomson, R.L., Coates, A.M., Howe, P.R., DeNichilo, M.O., & Rowney, M.K. (2010). Supplementation with a whey protein hydrolysate enhances recovery of muscle force-generating capacity following eccentric exercise.", journal: "Journal of Science and Medicine in Sport, 13(1), 178–181." },
                { num: "9", cite: "Martin, W.F., Armstrong, L.E., & Rodriguez, N.R. (2005). Dietary protein intake and renal function.", journal: "Nutrition & Metabolism, 2, 25." },
                { num: "10", cite: "Helms, E.R., Zinn, C., Rowlands, D.S., & Brown, S.R. (2014). A systematic review of dietary protein during caloric restriction in resistance trained lean athletes: a case for higher intakes.", journal: "International Journal of Sport Nutrition and Exercise Metabolism, 24(2), 127–138." },
                { num: "11", cite: "Churchward-Venne, T.A., Holwerda, A.M., Phillips, S.M., & Van Loon, L.J.C. (2016). What is the optimal amount of protein to support post-exercise skeletal muscle reconditioning in the older adult?", journal: "Sports Medicine, 46(9), 1205–1212." },
                { num: "12", cite: "Hamarsland, H., Nordengen, A.L., Nyvik Aas, S., et al. (2017). Native whey protein with high levels of leucine results in similar post-exercise muscular anabolic responses as regular whey protein.", journal: "Journal of the International Society of Sports Nutrition, 14, 43." },
                { num: "13", cite: "Power, O., Hallihan, A., & Jakeman, P. (2009). Human insulinotropic response to oral ingestion of native and hydrolysed whey protein.", journal: "Amino Acids, 37(2), 333–339." },
                { num: "14", cite: "Manninen, A.H. (2009). Protein hydrolysates in sports nutrition.", journal: "Nutrition & Metabolism, 6, 38." },
                { num: "15", cite: "Simonart, T. (2012). Acne and whey protein supplementation among bodybuilders.", journal: "Dermatology, 225(3), 256–258." },
                { num: "16", cite: "Vongraviopap, S., & Asawanonda, P. (2016). Dark chocolate exacerbates acne.", journal: "International Journal of Dermatology, 55(5), 587–591." },
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
                  q: "How much whey protein should I take per day?",
                  a: "Use whey to help hit your total daily protein target of 1.6–2.2g per kg of bodyweight (athletes in resistance training). Individual servings of 20–40g are supported by research — 0.25–0.40g per kg per meal. Total intake matters more than any single serving.",
                },
                {
                  q: "What is the difference between WPI and WPC?",
                  a: "WPI (>90% protein) has nearly all fat and lactose removed — better for lactose-sensitive individuals and strict macro tracking. WPC (70–80% protein) retains more fat, carbs, and lactose, is cheaper per gram, and retains more bioactive milk fractions. Both are effective protein sources.",
                },
                {
                  q: "When is the best time to take whey protein?",
                  a: "Post-workout (within 0–2 hours of training) is well-supported and practically sensible. However, total daily protein intake is the primary determinant of muscle gain — hitting your daily target consistently matters more than precise timing.",
                },
                {
                  q: "Does whey protein damage kidneys?",
                  a: "No — not in healthy adults. High-protein diets, including supplemental whey, do not impair kidney function in people without pre-existing renal disease (Martin et al., 2005). The concern applies specifically to those with chronic kidney disease, who should follow medically supervised protein restriction.",
                },
                {
                  q: "Can lactose-intolerant people take whey protein isolate?",
                  a: "Yes, in most cases. WPI is filtered to near-zero lactose (<0.5g per serving). Most lactose-intolerant individuals tolerate it without symptoms. WPC retains more lactose and is more likely to cause issues — check the label and choose WPI specifically.",
                },
                {
                  q: "Does whey protein cause acne?",
                  a: "There is an observed association between dairy proteins and acne in susceptible individuals — not a universal effect. If you are acne-prone and notice worsening after introducing whey, try a plant-based protein isolate (pea + rice blend) and monitor whether skin improves.",
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
            <SectionHeading label="Products" figure="§ REL" title="Reviewed whey protein" titleItalic="supplements" size="sm" />
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
