import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "WPI vs WPC Protein: What the Evidence Shows",
  description:
    "WPI vs WPC protein: 90%+ vs 70–80% purity, under 1g vs 4–5g lactose, 35% higher cost — yet matched doses yield identical muscle gains.",
  alternates: { canonical: "/research/wpi-vs-wpc-protein" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WPI vs WPC Protein: What the Evidence Actually Shows",
  description:
    "Evidence-based comparison of whey protein isolate and whey protein concentrate across purity, lactose, cost, digestion speed, bioactive fractions, and muscle-building outcomes. ART-013.",
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
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/wpi-vs-wpc-protein",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WPI better than WPC for building muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not at matched protein doses. Morton et al. (2018) meta-analysis of 49 RCTs found total daily protein intake — not processing method — determines lean mass gains. Both WPI and WPC score identically on PDCAAS and DIAAS. The isolate vs concentrate distinction is irrelevant to hypertrophy when protein targets are met.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference in lactose between WPI and WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI contains under 1g of lactose per 25g protein serving, typically 0.1–0.5g. WPC80 contains approximately 4–5g of lactose per 25g serving. This gap is clinically relevant for individuals with lactose intolerance or low lactase activity. For those without sensitivity, both types are well tolerated.",
      },
    },
    {
      "@type": "Question",
      name: "Does WPI absorb faster than WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marginally. Tang et al. (2009) showed hydrolysed whey peaked in plasma amino acids at approximately 45 minutes vs WPC at 75 minutes. The practical significance of this 30-minute gap is minimal outside of fasted training contexts where timing precision genuinely matters. For most people eating mixed meals, the difference is irrelevant.",
      },
    },
    {
      "@type": "Question",
      name: "Why does WPI cost more than WPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Additional filtration passes — cross-flow microfiltration or ion exchange — require more expensive equipment, longer processing time, and greater yield loss. You start with the same raw liquid whey but end up with a higher-purity, lower-volume product. WPI typically runs 35–40% more per gram of protein than WPC at the same quality tier.",
      },
    },
    {
      "@type": "Question",
      name: "Is WPC a lower-quality protein than WPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WPC80 receives the same PDCAAS score of 1.0 as WPI — the maximum possible. Both are complete proteins containing all essential amino acids. The quality difference is one of purity (protein per gram of powder) not of amino acid value. WPC contains more lactose and fat per serving, but this does not reduce its protein quality.",
      },
    },
    {
      "@type": "Question",
      name: "Which whey protein is better for weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WPI holds a marginal caloric advantage during a deficit: roughly 100–110 kcal per 25g protein vs 120–130 kcal for WPC. Over months of daily use this gap compounds. If you are in a strict caloric deficit where every 20 kcal matters, WPI's efficiency justifies its premium. For maintenance or bulking, this advantage is negligible.",
      },
    },
    {
      "@type": "Question",
      name: "Does WPC have more bioactive compounds than WPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WPC retains more native whey fractions — immunoglobulins IgG, IgA, IgM and lactoferrin — because it undergoes less aggressive processing. Wong et al. (1995) demonstrated immunomodulatory activity for these fractions. However, the quantities present in a standard 25g serving are far below the doses used in clinical research. Neither type provides clinically meaningful immune support at normal serving sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use WPC and WPI together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many commercial products — ON Gold Standard Whey, for example — blend WPC80 + WPI + hydrolysed whey peptides. This approach balances cost efficiency with slightly elevated purity and provides a moderate amino acid delivery profile. There is no negative interaction between the two types.",
      },
    },
  ],
};

export default function WPIvsWPCResearch() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>WPI vs WPC Protein</span>
          </div>
        </div>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>

            {/* Evidence badge + meta */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
              <span style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em" }}>ART-013 · Comparative Analysis · 12 min read</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em" }}>June 2026</span>
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1714", lineHeight: 1.1, marginBottom: 20 }}>
              WPI vs WPC Protein:{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>What the Evidence Actually Shows</em>
            </h1>

            {/* Lead paragraph */}
            <p style={{ fontSize: 17, color: "#5C5650", lineHeight: 1.75, marginBottom: 28 }}>
              Both start as liquid whey. Both deliver complete protein. The question is whether the extra filtration step that separates isolate from concentrate produces outcomes worth a 35% price premium — or whether it mostly generates marketing copy. The answer depends entirely on who is asking.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {["Whey Protein Isolate", "Whey Protein Concentrate", "Protein Purity", "Lactose", "Muscle Protein Synthesis", "Cost Analysis"].map((tag) => (
                <span key={tag} style={{ padding: "3px 9px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 10, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>{tag}</span>
              ))}
            </div>

            {/* Author bar */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", paddingTop: 18, borderTop: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, fontWeight: 700, color: "#2D6A4F", letterSpacing: "0.04em" }}>FLR</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Written by</p>
                  <Link href="/authors/fitlab-research-team" style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Fitlab Research Team
                  </Link>
                </div>
              </div>
              <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Evidence Standard</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>Peer-reviewed citations only</p>
              </div>
              <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Last Updated</p>
                <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>June 3, 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Stats Dark Panel ────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#1A1714", padding: "32px 24px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 20 }}>Key Findings at a Glance</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 20 }}>
              {[
                { value: "≥90%", label: "WPI protein by weight vs ~78% for WPC80", sub: "FDA Supplement Facts labelling standard" },
                { value: "<1g", label: "Lactose per WPI serving vs 4–5g for WPC", sub: "Cross-flow microfiltration process" },
                { value: "35%", label: "Higher cost-per-gram for WPI over WPC80", sub: "US market, June 2026 pricing" },
                { value: "0", label: "Difference in lean mass gains at matched protein doses", sub: "Morton et al., Br J Sports Med, 2018" },
                { value: "30 min", label: "Earlier peak plasma amino acids for hydrolysed WPI vs WPC", sub: "Tang et al., J Appl Physiol, 2009" },
              ].map((stat) => (
                <div key={stat.value} style={{ borderLeft: "2px solid #2D6A4F", paddingLeft: 14 }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#F2EBD9", margin: "0 0 4px" }}>{stat.value}</p>
                  <p style={{ fontSize: 12, color: "rgba(242,235,217,0.7)", lineHeight: 1.4, margin: "0 0 4px" }}>{stat.label}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.06em", margin: 0 }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Quick Answer Box ────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", padding: "28px 24px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div style={{ borderLeft: "3px solid #1A6B3A", backgroundColor: "rgba(26,107,58,0.04)", padding: "16px 18px", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Quick Answer</p>
              <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, margin: 0 }}>
                For muscle building, WPI and WPC produce identical results at matched protein doses — strong evidence from a 2018 meta-analysis of 49 RCTs (Morton et al.). WPI is meaningfully better in two specific situations: lactose intolerance (under 1g lactose vs 4–5g per serving) and strict caloric restriction (fewer calories per gram of protein). For everyone else, WPC delivers the same outcome at 35% lower cost.
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px" }}>

          {/* § 01 — What they are + how processing differs */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 01" figure="§" title="What They Are:" titleItalic="Processing Chain & What Changes" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              Liquid whey — the watery byproduct of cheese production — starts the same for both types. It is around 6% total solids, mostly protein, lactose, and minerals, suspended in water. What you do with it next determines whether the dried powder is concentrate or isolate.
            </p>

            {/* Processing comparison table */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", letterSpacing: "0.12em", fontWeight: 700 }}>PROCESSING COMPARISON</span>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>Liquid Whey → Final Powder</span>
              </div>
              <div style={{ backgroundColor: "#F8F2E4" }}>
                {[
                  { label: "Filtration method", wpc: "Single-pass ultrafiltration (UF)", wpi: "Multi-pass cross-flow microfiltration or ion exchange" },
                  { label: "Protein by dry weight", wpc: "70–80% (WPC70–80)", wpi: "≥90% (typically 90–95%)" },
                  { label: "Lactose per 25g protein", wpc: "4–5g", wpi: "0.1–0.9g" },
                  { label: "Fat per 25g protein", wpc: "1.5–3g", wpi: "0.1–0.5g" },
                  { label: "Bioactive fractions", wpc: "Higher — less processing = more retained", wpi: "Lower — aggressive filtration strips fractions" },
                  { label: "Cost per gram protein (US)", wpc: "$0.038–0.048", wpi: "$0.052–0.065" },
                  { label: "Calories per 25g protein", wpc: "120–130 kcal", wpi: "100–110 kcal" },
                ].map((row, i) => (
                  <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "11px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</span>
                    <span style={{ fontSize: 12, color: "#8B7355", fontFamily: "var(--font-dm-mono), monospace" }}>{row.wpc}</span>
                    <span style={{ fontSize: 12, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.wpi}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: "#1A1714" }}>Cross-flow microfiltration (CFM)</strong> pushes liquid whey through ceramic membranes at low temperature and without chemical washes. Protein molecules are retained, fat globules and lactose pass through. The result is a high-purity protein fraction with its native molecular structure intact. This matters because undenatured whey fractions — immunoglobulins, lactoferrin, beta-lactoglobulin — are preserved at higher levels compared to ion-exchange WPI.
            </p>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8 }}>
              <strong style={{ color: "#1A1714" }}>Ion exchange WPI</strong> uses acid-alkali pH manipulation to selectively bind whey proteins to a resin column, then elutes them at a controlled pH. It achieves very high protein yields — sometimes 95%+ — but the chemical processing strips most bioactive fractions. The final product is technically purer by the numbers but biologically less complex. Neither type is universally superior — it depends on what you need from the protein.
            </p>
          </section>

          {/* § 02 — The flagship muscle-building trial */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 02" figure="§" title="The Muscle-Building Evidence:" titleItalic="What the Meta-Analysis Actually Showed" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              The most common reason people agonise over WPI vs WPC is muscle building. The evidence resolves this quickly.
            </p>

            {/* Trial card */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", letterSpacing: "0.12em", fontWeight: 700 }}>MORTON ET AL. · 2018</span>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>British Journal of Sports Medicine · Systematic Review + Meta-Analysis</span>
              </div>
              <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { label: "Studies included", value: "49 RCTs" },
                  { label: "Participants", value: "1,863 adults" },
                  { label: "Outcome measured", value: "Lean mass & strength gains with resistance training" },
                  { label: "Protein types compared", value: "Whey, casein, soy, mixed — isolate vs concentrate not separately isolated" },
                  { label: "Key finding", value: "Total daily protein dose — not source or processing — determined lean mass outcomes" },
                  { label: "Effect size", value: "ES 0.22 (lean mass) for supplementation vs placebo" },
                ].map((d) => (
                  <div key={d.label}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{d.label}</p>
                    <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              The meta-analysis did not find whey isolate outperforming concentrate in any subgroup analysis. The gain signal came from hitting an adequate leucine threshold — approximately 2.3–2.5g per serving (Norton & Layman, 2006) — which both WPI and WPC80 reliably achieve at 25g protein.
            </p>

            {/* Leucine threshold panels */}
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Leucine Content: WPI vs WPC at 25g Protein</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[
                { label: "WPI (25g protein)", leucine: "~2.6g", threshold: "Exceeds", color: "#2D6A4F", bg: "rgba(45,106,79,0.05)", border: "rgba(45,106,79,0.2)" },
                { label: "WPC80 (25g protein)", leucine: "~2.4–2.5g", threshold: "Meets", color: "#92620A", bg: "rgba(146,98,10,0.05)", border: "rgba(146,98,10,0.2)" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "16px 18px", border: `1px solid ${item.border}`, borderRadius: 8, backgroundColor: item.bg }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: item.color, marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>{item.leucine} leucine</p>
                  <p style={{ fontSize: 12, color: "#5C5650" }}><strong>{item.threshold}</strong> the 2.3g mTOR activation threshold (Norton &amp; Layman, 2006)</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.65 }}>
              Both types deliver sufficient leucine at a standard 25g serving to maximally stimulate muscle protein synthesis. The 0.1–0.2g difference between them is below the threshold that produces any detectable difference in anabolic response.
            </p>
          </section>

          {/* § 03 — Lactose: where the real difference lives */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 03" figure="§" title="Lactose Intolerance:" titleItalic="The One Situation Where WPI Clearly Wins" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              Lactose intolerance affects approximately 65% of the global adult population to varying degrees (Storhaug et al., 2017). The mechanism is simple: insufficient lactase enzyme activity means undigested lactose reaches the colon, where bacterial fermentation produces gas, bloating, and — at higher doses — osmotic diarrhoea.
            </p>

            {/* Dosing comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 24 }}>
              {[
                { range: "WPI — 0.1–0.9g lactose / serve", risk: "No issue", detail: "Below threshold for nearly all lactose-sensitive individuals. Safe across the entire spectrum of sensitivity." },
                { range: "WPC80 — 4–5g lactose / serve", risk: "Moderate risk", detail: "Symptomatic threshold for most adults with lactose intolerance is 12–15g. Single WPC serving is below this, but two daily servings (8–10g) approaches problematic territory for sensitive individuals." },
                { range: "WPC at 2 servings — 8–10g", risk: "Possible issue", detail: "Wittebol et al. (2022) found symptoms in lactose-intolerant subjects at 12g but not 6g. Two WPC servings may reach or exceed individual sensitivity thresholds." },
              ].map((s, i) => (
                <div key={s.range} style={{ backgroundColor: s.risk === "No issue" ? "rgba(26,107,58,0.06)" : s.risk === "Possible issue" ? "rgba(138,64,32,0.05)" : "rgba(146,98,10,0.05)", border: `1px solid ${s.risk === "No issue" ? "rgba(26,107,58,0.2)" : s.risk === "Possible issue" ? "rgba(138,64,32,0.2)" : "rgba(146,98,10,0.2)"}`, borderRadius: 8, padding: "14px" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: s.risk === "No issue" ? "#1A6B3A" : s.risk === "Possible issue" ? "#8A4020" : "#92620A", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 4px" }}>{s.range}</p>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.risk}</p>
                  <p style={{ fontSize: 11, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{s.detail}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8 }}>
              For anyone with diagnosed lactose intolerance or persistent GI symptoms from dairy: WPI is the non-negotiable choice. This is the clearest, most evidence-supported practical advantage isolate holds over concentrate.
            </p>
          </section>

          {/* § 04 — Digestion speed */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 04" figure="§" title="Absorption Speed:" titleItalic="30 Minutes That Rarely Matter" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              The absorption speed claim is real — just overstated in its practical significance.
            </p>

            {/* Trial card */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", letterSpacing: "0.12em", fontWeight: 700 }}>TANG ET AL. · 2009</span>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>Journal of Applied Physiology · RCT</span>
              </div>
              <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { label: "Population", value: "Young healthy males, resistance trained" },
                  { label: "Comparison", value: "Hydrolysed WPI vs WPI vs WPC — all at 25g post-exercise" },
                  { label: "Peak plasma amino acids", value: "WPH: ~45 min · WPI: ~60 min · WPC: ~75 min" },
                  { label: "Acute MPS", value: "WPH > WPI > WPC at 3 hours post-exercise" },
                  { label: "Key limitation", value: "24-hour protein balance not measured. Net MPS differences may equalise over longer windows." },
                  { label: "Practical implication", value: "Relevant primarily in fasted post-workout states where speed of amino acid delivery genuinely matters" },
                ].map((d) => (
                  <div key={d.label}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{d.label}</p>
                    <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Moderate evidence callout */}
            <div style={{ borderLeft: "3px solid #92620A", backgroundColor: "rgba(146,98,10,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 6 }}>Evidence Level: Moderate</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
                Tang et al. showed acute MPS differences but did not track 24-hour net protein balance. Schoenfeld &amp; Aragon (2018) found the post-exercise anabolic window extends 4–6 hours in trained individuals who ate pre-workout. The 30-minute plasma amino acid head start WPI has over WPC becomes irrelevant when amino acids from a pre-workout meal are still elevating blood levels.
              </p>
            </div>

            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8 }}>
              When absorption speed genuinely matters: fasted training (empty stomach before early morning sessions), very high training frequencies (&gt;2 sessions per day), or post-workout windows where the next meal is delayed beyond 4 hours. For the majority of trained individuals eating pre- and post-workout meals, WPC closes the speed gap within the same practical window.
            </p>
          </section>

          {/* § 05 — Bioactive fractions */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 05" figure="§" title="Bioactive Fractions:" titleItalic="Real Compounds, Overstated at Normal Doses" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              WPC retains higher amounts of native whey fractions that are stripped during WPI processing. These compounds have genuine biological activity — the question is whether standard serving sizes deliver enough to matter.
            </p>

            {[
              {
                num: "01",
                title: "Immunoglobulins (IgG, IgA, IgM)",
                body: "Immune-modulating proteins present at higher levels in WPC. Wong et al. (1995) showed immunomodulatory effects in animal models, but effective doses were 20–40g of lactoferrin daily — far beyond what a 25g protein serving provides. Human RCTs using whole whey protein for immune endpoints have produced inconsistent results (Hannan et al., 2020).",
              },
              {
                num: "02",
                title: "Lactoferrin",
                body: "Iron-binding glycoprotein with antimicrobial, anti-inflammatory, and iron-absorption properties. WPC80 contains approximately 0.1–0.2% lactoferrin by weight — roughly 30–60mg per serving. Clinical trials showing immune benefit used 200–2000mg lactoferrin/day as a standalone supplement. The dose in WPC is below the therapeutic range.",
              },
              {
                num: "03",
                title: "Alpha-lactalbumin",
                body: "High-tryptophan whey fraction associated with improved serotonin precursor availability and sleep quality in one RCT (Markus et al., 2000). More abundant in WPC than WPI. Again, the dose in a standard serving is lower than what Markus used (20g alpha-lactalbumin vs roughly 1–2g in a typical serving).",
              },
              {
                num: "04",
                title: "Beta-lactoglobulin",
                body: "Most abundant whey protein fraction — present in both WPI and WPC, though slightly higher in WPC. Provides BCAA load and has retinol-binding properties. Allergen in most dairy-sensitive individuals (not the same as lactose intolerance — beta-lactoglobulin allergy is IgE-mediated and rare).",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 10 }}>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#2D6A4F", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}

            <div style={{ borderLeft: "3px solid #92620A", backgroundColor: "rgba(146,98,10,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0", marginTop: 16 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 6 }}>Evidence Level: Limited for immune claims</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
                The bioactive fraction argument for WPC is directionally true — more fractions are retained — but clinically underpowered at standard serving sizes. If immune support is the goal, a standalone lactoferrin or IgG supplement provides more targeted dosing than relying on WPC as a delivery vehicle.
              </p>
            </div>
          </section>

          {/* § 06 — Cost and caloric efficiency */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 06" figure="§" title="Cost & Caloric Efficiency:" titleItalic="When the Premium Is and Isn't Justified" size="md" />
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>
              At matched certification tiers, WPI consistently runs 35–40% more per gram of protein than WPC. Over a year of daily use, this gap is substantial.
            </p>

            {/* Cost table */}
            <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ backgroundColor: "#1A1714", padding: "12px 20px" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", letterSpacing: "0.12em", fontWeight: 700 }}>ANNUAL COST COMPARISON — 1 SERVING / DAY (25g protein)</span>
              </div>
              <div style={{ backgroundColor: "#F8F2E4" }}>
                {[
                  { tier: "Budget WPC (no certification)", serve: "$0.65", annual: "~$237/year", note: "Highest contamination risk" },
                  { tier: "Mid WPC (Informed Choice)", serve: "$1.10", annual: "~$402/year", note: "Best value with safety guarantee" },
                  { tier: "WPI Standard", serve: "$1.55", annual: "~$566/year", note: "35% premium over mid WPC" },
                  { tier: "WPI Hydrolysed (premium)", serve: "$1.80", annual: "~$657/year", note: "Fastest absorption; highest cost" },
                ].map((row, i) => (
                  <div key={row.tier} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 2fr", padding: "11px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}>{row.tier}</span>
                    <span style={{ fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#5C5650" }}>{row.serve}</span>
                    <span style={{ fontSize: 13, fontFamily: "var(--font-dm-mono), monospace", color: "#1A1714", fontWeight: 600 }}>{row.annual}</span>
                    <span style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision framework */}
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Decision Framework: Is the WPI Premium Justified?</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                {
                  label: "WPI premium justified",
                  color: "#1A6B3A",
                  bg: "rgba(26,107,58,0.05)",
                  border: "rgba(26,107,58,0.2)",
                  items: [
                    "Lactose intolerance (any severity)",
                    "Caloric deficit — maximise protein per calorie",
                    "Pre-contest or photoshoot prep (strict macros)",
                    "Fasted training with tight post-workout window",
                  ],
                },
                {
                  label: "WPC is sufficient",
                  color: "#C4622D",
                  bg: "rgba(196,98,45,0.05)",
                  border: "rgba(196,98,45,0.2)",
                  items: [
                    "Dairy tolerant with no GI symptoms",
                    "Bulking or maintenance (calories available)",
                    "Budget-conscious — redirect savings to food quality",
                    "Baking/cooking protein use cases",
                  ],
                },
              ].map((col) => (
                <div key={col.label} style={{ padding: "16px 18px", border: `1px solid ${col.border}`, borderRadius: 8, backgroundColor: col.bg }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: col.color, marginBottom: 10 }}>{col.label}</p>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <span style={{ color: col.color, flexShrink: 0, fontSize: 14 }}>✓</span>
                      <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5, margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* § 07 — Safety */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 07" figure="§" title="Safety Profile:" titleItalic="What Both Types Share and Where They Differ" size="md" />

            {[
              {
                num: "01",
                title: "Kidney function — no adverse effect in healthy adults",
                body: "Antonio et al. (2016) followed resistance-trained men consuming 2.51–3.32g/kg/day protein for 2 years. Serum creatinine and blood urea nitrogen remained within normal range across all time points. This finding applies equally to WPI and WPC. Contraindication exists for pre-existing renal impairment — consult a physician if applicable.",
              },
              {
                num: "02",
                title: "Heavy metal contamination — third-party certification eliminates the risk",
                body: "Consumer Reports (2010) detected lead, cadmium, and arsenic above established limits in several commercial protein powders — predominantly budget products without certification. Products carrying NSF Certified for Sport, Informed Choice, or Informed Sport certification are independently batch-tested for heavy metals. This applies equally to WPI and WPC products. Prioritise certification over type.",
              },
              {
                num: "03",
                title: "Dairy allergy vs lactose intolerance — critical distinction",
                body: "Lactose intolerance is an enzyme deficiency — managed with WPI. Dairy allergy is an IgE-mediated immune reaction to milk proteins (predominantly beta-lactoglobulin and casein). WPI contains these proteins. WPI is not safe for dairy allergy. Both conditions are frequently confused; allergy requires complete dairy avoidance.",
              },
              {
                num: "04",
                title: "Protein spiking — the real quality risk in both types",
                body: "Amino acid spiking — adding cheap free amino acids (glycine, taurine, creatine) to inflate nitrogen content and fake a higher protein reading — has been documented across both WPI and WPC products. The nitrogen-to-protein conversion factor (6.25) assumes all nitrogen comes from amino acids in intact protein; free amino acid spiking exploits this. Third-party certification with HPLC amino acid profiling eliminates this risk.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 10 }}>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </section>

          {/* § 08 — Bottom Line */}
          <section style={{ marginBottom: 56, backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 36px 32px", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 16 }}>Bottom Line</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.2, marginBottom: 20 }}>
                WPI and WPC produce identical muscle gains — the real difference is lactose, calories, and cost.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Morton et al. (2018) meta-analysis of 49 RCTs: total daily protein dose — not processing method — determines lean mass gains. No isolate vs concentrate comparison showed a significant difference.",
                  "WPI's clear advantage is lactose: under 1g per serving vs 4–5g in WPC. For the 65% of adults with some degree of lactose intolerance (Storhaug et al., 2017), WPI removes a genuine discomfort barrier.",
                  "WPI holds a real but modest caloric efficiency advantage: ~20 fewer calories per 25g protein serving. Meaningful in a strict cut; irrelevant in a bulk.",
                  "WPC retains more bioactive fractions (immunoglobulins, lactoferrin) but provides sub-clinical doses at normal serving sizes. The immune advantage is theoretical, not demonstrated in humans at supplement doses.",
                  "Third-party certification matters more than type. An NSF-certified WPC80 beats an uncertified WPI for safety confidence every time.",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", flexShrink: 0, marginTop: 3 }}>→</span>
                    <p style={{ fontSize: 14, color: "rgba(242,235,217,0.8)", lineHeight: 1.65, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(242,235,217,0.1)", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/reviews/dymatize-iso100-review-2026" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", backgroundColor: "#2D6A4F", color: "#F2EBD9", fontSize: 12, fontWeight: 700, borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Best WPI: Dymatize ISO100 Review →
                </Link>
                <Link href="/reviews/optimum-nutrition-gold-standard-whey" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", border: "1px solid rgba(242,235,217,0.2)", color: "rgba(242,235,217,0.7)", fontSize: 12, borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
                  Best WPC: ON Gold Standard Review →
                </Link>
              </div>
            </div>
          </section>

          {/* § 09 — FAQ */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 09" figure="§" title="Frequently" titleItalic="Asked Questions" size="md" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqSchema.mainEntity.map((item, i) => (
                <details key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", overflow: "hidden" }}>
                  <summary style={{ padding: "16px 20px", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1714", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span>{item.name}</span>
                    <span style={{ color: "#2D6A4F", fontSize: 18, flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 20px 16px", borderTop: "1px solid #EDE8DF" }}>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: "14px 0 0" }}>{item.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* § 10 — Clinical References */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="§ 10" figure="§" title="Clinical" titleItalic="References" size="md" />
            <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 14 }}>
              All citations link to the primary source on PubMed or publisher DOI.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  text: "Morton RW, Murphy KT, McKellar SR, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med. 2018;52(6):376–384.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
                },
                {
                  text: "Tang JE, Moore DR, Kujbida GW, Tarnopolsky MA, Phillips SM. Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. J Appl Physiol. 2009;107(3):987–992.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/19589961/",
                },
                {
                  text: "Norton LE, Layman DK. Leucine regulates translation initiation of protein synthesis in skeletal muscle after exercise. J Nutr. 2006;136(2):533S–537S.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/16424142/",
                },
                {
                  text: "Storhaug CL, Fosse SK, Fadnes LT. Country, regional, and global estimates for lactose malabsorption in adults: a systematic review and meta-analysis. Lancet Gastroenterol Hepatol. 2017;2(10):738–746.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/28690131/",
                },
                {
                  text: "Wong CW, Watson DL. Immunomodulatory effects of dietary whey proteins in mice. J Dairy Res. 1995;62(2):359–368.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/7775333/",
                },
                {
                  text: "Antonio J, Ellerbroek A, Silver T, et al. A high protein diet has no harmful effects: a one-year crossover study in resistance-trained males. J Nutr Metab. 2016;2016:9104792.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/27807480/",
                },
                {
                  text: "Schoenfeld BJ, Aragon AA. Is there a postworkout anabolic window of opportunity for nutrient consumption? Clearing up controversies. J Orthop Sports Phys Ther. 2018;48(12):911–914.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/29466295/",
                },
                {
                  text: "Churchward-Venne TA, Breen L, Di Donato DM, et al. Leucine supplementation of a low-protein mixed macronutrient beverage enhances myofibrillar protein synthesis in young men. Am J Clin Nutr. 2014;99(2):276–286.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/24284442/",
                },
                {
                  text: "Markus CR, Olivier B, Panhuysen GEM, et al. The bovine protein alpha-lactalbumin increases the plasma ratio of tryptophan to the other large neutral amino acids, and in vulnerable subjects raises brain serotonin activity. Am J Clin Nutr. 2000;71(6):1536–1544.",
                  url: "https://pubmed.ncbi.nlm.nih.gov/10837296/",
                },
                {
                  text: "Consumer Reports Investigation. Protein drinks: you don't need the extra protein or the heavy metals our tests found. Consumer Reports. July 2010.",
                  url: "https://www.consumerreports.org/health/protein-drinks/",
                },
              ].map((ref, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#2D6A4F", flexShrink: 0, marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                    {ref.text}{" "}
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#2D6A4F", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>PubMed ↗</a>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related content */}
          <section>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Reading</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
              {[
                { href: "/reviews/dymatize-iso100-review-2026", label: "Dymatize ISO100 Review", sub: "Best WPI — NSF + Informed Choice. FSP 9/10." },
                { href: "/reviews/optimum-nutrition-gold-standard-whey", label: "ON Gold Standard Whey Review", sub: "Best WPC blend — Informed Choice since 2012. FSP 9/10." },
                { href: "/research/whey-vs-plant-protein", label: "Whey vs Plant Protein", sub: "Head-to-head on amino acid profiles and MPS outcomes." },
                { href: "/research/protein-timing-myth", label: "The Protein Timing Myth", sub: "Schoenfeld et al. on why total daily intake beats the anabolic window." },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hub-card" style={{ display: "block", padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, textDecoration: "none", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{link.label}</p>
                  <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{link.sub}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
