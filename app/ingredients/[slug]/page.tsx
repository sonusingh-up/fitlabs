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
              The primary mechanism is phosphocreatine (PCr) replenishment within the ATP-PCr energy system — the body's fastest pathway for regenerating adenosine triphosphate (ATP), the universal cellular energy currency.
            </p>
            <p>
              During maximal-effort activities lasting 1–10 seconds (sprinting, heavy compound lifts, explosive jumps), the body relies almost exclusively on stored ATP and PCr. When ATP is consumed, creatine kinase catalyses the transfer of a phosphate group from PCr back to ADP, rapidly regenerating ATP. This reaction sustains near-maximal power output for longer than would otherwise be possible.
            </p>
            <p>
              Supplementation increases total muscle creatine stores by approximately 20–40% above baseline (Harris et al., 1992, <em>Clinical Science</em>), with a corresponding increase in PCr. The practical result: more energy available per set, greater training volume achievable per session, and faster recovery between bouts of high-intensity work.
            </p>
            <h3>Secondary mechanisms</h3>
            <p>
              Beyond ATP resynthesis, creatine has emerging evidence for several secondary effects: increased satellite cell activity (relevant to muscle hypertrophy), elevated insulin-like growth factor-1 (IGF-1) expression in muscle tissue, and reduced myostatin — a protein that limits muscle growth. These effects are less studied but may partially explain why creatine benefits extend beyond what pure energy system enhancement would predict.
            </p>
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

            <h3>Maintenance Protocol (Recommended for most people)</h3>
            <p>
              Take <strong>3–5g of creatine monohydrate daily</strong>, consistently, without cycling. At this dose, muscle creatine stores reach saturation within 3–4 weeks. This is the most practical and well-tolerated approach for long-term use.
            </p>

            <h3>Loading Protocol (Optional)</h3>
            <p>
              Take <strong>20g per day</strong>, split into four 5g doses spread throughout the day, for 5–7 days. This saturates muscle stores in approximately one week — useful if you have a competition approaching or want faster results. After the loading phase, drop to 3–5g/day maintenance.
            </p>
            <p>
              Loading is not necessary. The end state — saturated muscle creatine — is identical whether you load fast or saturate slowly. Some users experience mild GI discomfort at 20g/day; in that case, skip loading and start directly at 5g/day.
            </p>

            <h3>Timing</h3>
            <p>
              Timing has minimal effect on performance outcomes. Post-workout creatine shows a slight advantage in some studies, likely due to co-ingestion with carbohydrates raising insulin, which enhances creatine transport into muscle (insulin-mediated CreaT1 upregulation). In practice, take it consistently at any time that works in your routine. Missing a day occasionally does not meaningfully reduce muscle creatine stores.
            </p>

            {/* Dosage cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginTop: 24, marginBottom: 20 }}>
              {[
                { label: "Daily Maintenance", value: "3–5g", note: "For all users, long-term" },
                { label: "Loading Phase", value: "20g / day", note: "4 × 5g doses for 5–7 days" },
                { label: "Best Taken With", value: "Carbs + Water", note: "Enhances uptake marginally" },
                { label: "Cycle?", value: "No", note: "Continuous use is fine; no wash-out needed" },
              ].map((d) => (
                <div key={d.label} style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{d.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{d.value}</p>
                  <p style={{ fontSize: 11, color: "#5C5650" }}>{d.note}</p>
                </div>
              ))}
            </div>

            <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
                <strong>Do you need to cycle creatine?</strong> No. The idea that creatine requires cycling (e.g. 8 weeks on, 4 weeks off) has no scientific support. Long-term continuous use across multiple years has been studied with no adverse effects. Cycling only means you spend several weeks with sub-optimal muscle creatine stores each year.
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
              Creatine monohydrate has one of the strongest safety records of any sports supplement. It has been studied continuously since the early 1990s, with multiple long-term trials (up to 5 years) finding no clinically significant adverse effects in healthy adults.
            </p>

            <h3>Kidney function</h3>
            <p>
              The most common safety concern is kidney damage. This is not supported by the evidence. Serum creatinine — a standard kidney function marker — rises during creatine supplementation because creatinine is the metabolic byproduct of creatine. Higher muscle creatine → more creatinine produced → higher serum creatinine. This is a normal physiological response, not a sign of kidney damage. GFR (glomerular filtration rate), which more accurately reflects true kidney function, is not adversely affected by creatine supplementation in healthy individuals (Poortmans & Francaux, 1999, <em>International Journal of Sports Medicine</em>).
            </p>
            <p>
              <strong>Important caveat:</strong> People with pre-existing kidney disease, single kidney, or on nephrotoxic medications should consult a physician before supplementing, as the research base specifically applies to healthy adults.
            </p>

            <h3>Water retention</h3>
            <p>
              Creatine causes intramuscular water retention — water stored inside muscle fibres, which is part of why muscles appear fuller and strength increases. This is not subcutaneous water retention (the type that causes a puffy, bloated appearance). The scale weight gain of 1–2kg during the first week of supplementation is water inside muscles, not body fat.
            </p>

            <h3>GI discomfort</h3>
            <p>
              Some users experience mild stomach cramping, nausea, or diarrhoea, typically associated with loading doses of 20g/day taken in large single servings. This is largely dose-dependent and solvable by splitting doses into smaller amounts (4–5 × 5g) with plenty of water. At the standard 3–5g/day maintenance dose, GI side effects are rare.
            </p>

            <h3>Hair loss concern</h3>
            <p>
              A single 2009 study (van der Merwe et al., <em>Clinical Journal of Sport Medicine</em>) found that rugby players taking creatine had elevated DHT (dihydrotestosterone) levels, a hormone associated with androgenic alopecia. This study has not been replicated, used a small sample, and measured DHT rather than actual hair loss. The link between creatine and hair loss in genetically susceptible individuals remains speculative, not confirmed.
            </p>

            {/* Safety summary cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, marginTop: 24 }}>
              {[
                { label: "Kidney Damage", verdict: "Not supported", color: "#2D6A4F", bg: "rgba(45,106,79,0.08)" },
                { label: "Liver Damage", verdict: "Not supported", color: "#2D6A4F", bg: "rgba(45,106,79,0.08)" },
                { label: "Muscle Cramping", verdict: "Rare at 3–5g/day", color: "#8B7355", bg: "rgba(139,115,85,0.08)" },
                { label: "GI Upset", verdict: "Dose-dependent", color: "#8B7355", bg: "rgba(139,115,85,0.08)" },
                { label: "Hair Loss", verdict: "Unconfirmed", color: "#8B7355", bg: "rgba(139,115,85,0.08)" },
                { label: "Long-term use", verdict: "Safe (5yr data)", color: "#2D6A4F", bg: "rgba(45,106,79,0.08)" },
              ].map((s) => (
                <div key={s.label} style={{ padding: "12px 14px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: s.bg }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>{s.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: s.color, margin: 0 }}>{s.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Who Should Take Creatine */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Who Should — and Shouldn't — Take Creatine</h2>

            <h3>Best suited for</h3>
            <ul>
              <li><strong>Strength and power athletes</strong> — The evidence is strongest for short-duration, high-intensity disciplines: weightlifting, powerlifting, sprinting, team sports with repeated explosive efforts.</li>
              <li><strong>Natural (drug-free) athletes</strong> — Without exogenous anabolics, creatine is one of the few supplements with measurable, consistent effect on strength and body composition.</li>
              <li><strong>Vegetarians and vegans</strong> — No dietary creatine intake means lower baseline muscle stores. Vegetarians consistently show larger responses to supplementation than omnivores.</li>
              <li><strong>Older adults (40+)</strong> — Evidence supports creatine + resistance training for preserving lean mass, strength, and potentially bone density in aging populations.</li>
              <li><strong>People doing HIIT or circuit training</strong> — Any training involving repeated maximal or near-maximal efforts will benefit from higher PCr availability.</li>
            </ul>

            <h3>Less benefit for</h3>
            <ul>
              <li><strong>Endurance athletes (pure aerobic)</strong> — Creatine's primary mechanism is in the ATP-PCr system, which contributes minimally to activities lasting more than 2–3 minutes. Marathoners and long-distance cyclists see little direct performance benefit, and the intramuscular water weight may be an unwanted addition.</li>
              <li><strong>People with kidney disease</strong> — Not contraindicated for everyone, but requires physician oversight due to creatinine marker interference and the need to monitor kidney function individually.</li>
            </ul>
          </section>

          {/* 8. India Market Notes */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }} className="ingredient-article">
            <h2>Buying Creatine in India: What to Know</h2>
            <p>
              Creatine monohydrate is one of the safest supplements to buy in India — it's a single ingredient with no complex blending, making quality easier to verify. That said, the Indian supplement market does have adulteration risks.
            </p>

            <h3>Price benchmarks (May 2026)</h3>
            <p>
              Expect to pay <strong>₹500–₹800 for 250g</strong> and <strong>₹1,400–₹2,200 for 500g</strong> from reputable brands. Price per gram of creatine should be ₹2–₹4. If a product claims to be creatine monohydrate and is significantly cheaper, question the source and purity.
            </p>

            <h3>Brands to trust</h3>
            <ul>
              <li><strong>AS-IT-IS Nutrition</strong> — FSSAI-licensed, NABL lab-tested, unflavoured, no additives. Best budget option. Sells genuine creatine monohydrate at competitive pricing on Amazon India.</li>
              <li><strong>MyProtein Creatine Monohydrate</strong> — Informed Sport certified, third-party tested. Reliable for athletes in tested sports.</li>
              <li><strong>Optimum Nutrition Micronised Creatine</strong> — Trusted global brand. Micronised for better mixability. Available on Amazon.in — buy from ON's official storefront only.</li>
              <li><strong>MuscleBlaze Creatine</strong> — Indian brand with NABL testing. Decent quality at competitive pricing; check the batch certificate on their website.</li>
            </ul>

            <h3>Counterfeit risk</h3>
            <p>
              Pure creatine monohydrate has low counterfeit risk compared to complex pre-workouts and whey proteins, because there's less to hide in a single-ingredient powder. However, underdosing (less creatine per serving than stated) does occur. Purchase from authorised sellers, check for FSSAI licence numbers on packaging, and prefer brands with accessible third-party lab certificates (COAs).
            </p>
          </section>

          {/* 9. FAQ */}
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
