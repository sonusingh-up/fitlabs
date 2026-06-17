import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import EvidenceBadge from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = {
  title: "Freeze-Dried vs Desiccated Organ Supplements (2026)",
  description:
    "Freeze-dried vs desiccated beef organs compared: nutrient retention, enzyme activity, cost, and which processing method yields the better supplement.",
  alternates: { canonical: "/research/freeze-dried-vs-desiccated-organ-supplements" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freeze-Dried vs Desiccated Organ Supplements: Which Preserves More Nutrients?",
  description: "Technical comparison of freeze-drying and desiccation (heat drying) processing methods for beef organ supplements — covering nutrient retention data, enzyme activity, shelf life, cost, and what the evidence says about which produces better products.",
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
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/freeze-dried-vs-desiccated-organ-supplements",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is freeze-dried organ supplement better than desiccated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freeze-drying (lyophilisation) preserves more heat-sensitive nutrients and enzyme activity than traditional desiccation (heat drying). The evidence for nutrient superiority of freeze-drying over desiccation is strongest for water-soluble B vitamins (particularly B1 and B5), enzyme proteins (CoQ10 structural integrity, pancreatic enzymes), and volatile compounds. For heat-stable nutrients — retinol, heme iron, B12, zinc, selenium — the difference between well-executed freeze-drying and low-temperature desiccation (<45°C) is minimal. The processing temperature matters more than the method label.",
      },
    },
    {
      "@type": "Question",
      name: "What does desiccated mean for organ supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desiccated means dried — specifically, dried at low temperatures using warm air circulation to remove moisture. Traditional desiccated thyroid products (like Armour Thyroid) use this method. For organ supplements, desiccation at temperatures below 45°C (113°F) can preserve most nutritional value. Desiccation above 60°C causes protein denaturation, enzyme inactivation, and B vitamin degradation. Some brands use 'desiccated' to describe heat-dried products without specifying temperature — this is a meaningful distinction.",
      },
    },
    {
      "@type": "Question",
      name: "Does freeze-drying destroy enzymes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freeze-drying itself does not destroy enzymes — it preserves them in a dehydrated, inactive state. Enzymes suspended in a freeze-dried matrix retain their structural conformation better than heat-dried equivalents. However, whether intact enzymes from freeze-dried organ supplements survive digestion and exert meaningful activity in the small intestine is a separate question. Gastric acid and proteases begin digesting proteins (including enzymes) in the stomach. Medical pancreatic enzyme replacement therapy (PERT) uses enteric-coated formulations specifically to bypass the stomach. Food-supplement organ enzymes lack this protection.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tell from the label if an organ supplement is freeze-dried?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many brands explicitly label their products as 'freeze-dried' or 'lyophilised'. Some use 'desiccated' — which can mean heat-dried or cold-dried depending on the manufacturer. If the label says 'desiccated' without specifying temperature, contact the manufacturer and ask: 'What is the maximum processing temperature?' Below 45°C is consistent with nutrient preservation; above 60°C indicates heat drying with potential nutrient loss.",
      },
    },
    {
      "@type": "Question",
      name: "Which brands use freeze-drying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ancestral Supplements and Heart & Soil explicitly state freeze-dried processing. Left Coast Performance also uses freeze-drying. Perfect Supplements uses desiccation at low temperature (below 37°C / 98.6°F as per their website) — which the brand argues preserves heat-sensitive nutrients. The bottom line: verified freeze-drying or documented low-temperature desiccation are both acceptable. High-temperature heat drying without temperature disclosure is a transparency gap.",
      },
    },
  ],
};

export default function FreezeDriedVsDesiccatedPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Freeze-Dried vs Desiccated</span>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ART-012</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Technical Review</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 16 }}>
            Freeze-Dried vs Desiccated Organ Supplements
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.65em", marginTop: 10 }}>Which Processing Method Actually Preserves More Nutrients?</em>
          </h1>

          {/* Author bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#F2EBD9", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700 }}>FR</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>Fitlab Research Team</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>Published May 2026</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>10 min read</span>
            </div>
          </div>
        </div>

        {/* Quick answer */}
        <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Quick Answer</p>
          <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.75 }}>
            Freeze-drying (lyophilisation) preserves heat-sensitive nutrients better than heat-based desiccation. For most stable nutrients — retinol, B12, heme iron, zinc, selenium — the practical difference between freeze-drying and well-executed low-temperature desiccation (below 45°C) is small. The processing temperature matters more than the method label. Brands using undisclosed temperature desiccation are the concern — 'desiccated' without temperature documentation can mean heat-damaged products.
          </p>
        </div>

        {/* Process comparison */}
        <SectionHeading label="The Methods" figure="§ 01" title="How each process" titleItalic="actually works" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
          {[
            {
              method: "Freeze-Drying (Lyophilisation)",
              steps: ["Organ tissue is quick-frozen at -40°C to -80°C", "Placed in a vacuum chamber at low temperature", "Ice sublimates directly from solid to vapour — skipping liquid phase", "Final moisture content: 1–4%", "Duration: 24–48 hours"],
              advantages: ["Preserves heat-sensitive vitamins (B1, B5, folate)", "Maintains enzyme structural conformation", "Best texture and rehydration properties", "Longest shelf life (up to 25 years in proper conditions)"],
              disadvantages: ["Expensive equipment and process time", "Higher product cost passed to consumer", "Requires controlled storage (moisture and light)"],
            },
            {
              method: "Desiccation (Heat Drying)",
              steps: ["Organ tissue is thinly sliced or ground", "Placed in warm air circulation dryer", "Temperature range: 35°C–80°C (variable by manufacturer)", "Moisture removed over hours to days", "Final moisture content: 3–8%"],
              advantages: ["Lower production cost", "Simple equipment", "Viable at low temperatures (<45°C) with good nutrient retention", "Traditional method — desiccated thyroid well-established"],
              disadvantages: ["High temperature = protein denaturation, enzyme inactivation", "B1, B5, C lost significantly above 60°C", "Shorter shelf life than freeze-dried"],
            },
          ].map((method) => (
            <div key={method.method} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", backgroundColor: "#1A1714" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#F2EBD9" }}>{method.method}</p>
              </div>
              <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4" }}>
                <div style={{ marginBottom: 14 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 6 }}>Process Steps</p>
                  {method.steps.map((s) => (
                    <p key={s} style={{ fontSize: 12, color: "#5C5650", marginBottom: 4 }}>→ {s}</p>
                  ))}
                </div>
                <div style={{ marginBottom: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 6 }}>Advantages</p>
                  {method.advantages.map((a) => (
                    <p key={a} style={{ fontSize: 12, color: "#1A5C25", marginBottom: 4 }}>✓ {a}</p>
                  ))}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#A89880", textTransform: "uppercase", marginBottom: 6 }}>Disadvantages</p>
                  {method.disadvantages.map((d) => (
                    <p key={d} style={{ fontSize: 12, color: "#9B2020", marginBottom: 4 }}>✗ {d}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nutrient retention */}
        <SectionHeading label="Nutrient Data" figure="§ 02" title="Nutrient retention" titleItalic="by processing method" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            Not all nutrients are equally affected by processing temperature. Fat-soluble vitamins and minerals are relatively heat-stable. Water-soluble B vitamins and bioactive proteins (enzymes, CoQ10) are most temperature-sensitive.
          </p>
          <div className="review-table-wrap">
            <table style={{ borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["Nutrient", "Heat Sensitivity", "Freeze-Dried Retention", "Low-Temp Dessic. (<45°C)", "High-Temp Dessic. (>60°C)"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.06em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Vitamin A (Retinol)", "Low", ">95%", ">90%", "80–90%"],
                  ["Vitamin B12", "Moderate", ">95%", "85–95%", "70–80%"],
                  ["Vitamin B1 (Thiamine)", "High", ">95%", "75–90%", "30–60%"],
                  ["Folate", "High", ">90%", "70–85%", "25–50%"],
                  ["Heme Iron", "Very Low", ">99%", ">99%", ">95%"],
                  ["Zinc", "Very Low", ">99%", ">99%", ">99%"],
                  ["Selenium", "Low", ">95%", ">95%", "90–95%"],
                  ["CoQ10", "Moderate–High", "85–95%", "75–90%", "50–70%"],
                  ["Pancreatic enzymes", "High", "60–80%*", "40–60%*", "5–20%*"],
                ].map(([nutrient, heat, fd, lt, ht], i) => (
                  <tr key={nutrient} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{nutrient}</td>
                    <td style={{ padding: "10px 14px", fontSize: 12, color: "#8A8480" }}>{heat}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#1A5C25", fontWeight: 600 }}>{fd}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{lt}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#9B2020" }}>{ht}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: "#8A8480", marginTop: 8, lineHeight: 1.6 }}>
            * Enzyme structural retention — biological activity post-digestion is separate. Ranges based on food science literature; organ supplement-specific data is limited.
          </p>
        </div>

        {/* The enzyme question */}
        <SectionHeading label="Enzymes" figure="§ 03" title="Do organ supplement" titleItalic="enzymes actually work?" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            Beef pancreas is included in organ supplements partly for its pancreatin content (amylase, lipase, protease). This raises two distinct questions:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <EvidenceBadge level="strong" />
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>Q1: Does freeze-drying preserve enzyme structural integrity?</p>
              </div>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                Yes — lyophilisation is widely used in pharmaceutical and biotechnology industries specifically because it preserves enzyme structure better than alternatives. Pancreatic enzyme preparations used in research are routinely freeze-dried. Freeze-dried pancreatin retains significantly more enzymatic activity than heat-desiccated equivalents (Damodaran, 1988 — J Food Science).
              </p>
            </div>
            <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <EvidenceBadge level="limited" />
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>Q2: Do those enzymes survive digestion and work in the small intestine?</p>
              </div>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
                This is where the evidence is weak. Gastric acid (pH 1.5–3.5) and pepsin begin degrading proteins — including digestive enzymes — in the stomach. Medical pancreatic enzyme replacement therapy (PERT) for exocrine pancreatic insufficiency uses <em>enteric-coated</em> microspheres specifically to bypass gastric acid and deliver enzymes intact to the duodenum. Uncoated, non-pharmaceutical pancreatin capsules from food supplements are not proven to deliver meaningful enzyme activity to the small intestine. The nutritional content (zinc, B vitamins) from pancreatic tissue is delivered regardless of enzyme survival.
              </p>
            </div>
          </div>
          <div style={{ padding: 16, backgroundColor: "#EDE8DF", borderRadius: 8 }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
              <strong>Practical implication:</strong> Freeze-drying beef pancreas preserves more enzyme structure than desiccation — but this primarily matters if the enzymes survive digestion and reach the small intestine active. The case for pancreas in organ supplements rests more securely on its zinc, B vitamins, and general tissue micronutrient content than on enzyme activity.
            </p>
          </div>
        </div>

        {/* What to look for */}
        <SectionHeading label="Buying Guide" figure="§ 04" title="What to look for" titleItalic="on the label" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 48 }}>
          {[
            { label: "Explicit freeze-dried claim", verdict: "Best", detail: "Look for 'freeze-dried' or 'lyophilised' on the label. Ancestral Supplements and Heart & Soil explicitly use this term." },
            { label: "Low-temperature desiccated (<45°C)", verdict: "Acceptable", detail: "Perfect Supplements documents processing below 37°C. Ask any 'desiccated' brand: 'What is the maximum processing temperature?'" },
            { label: "'Desiccated' without temperature disclosure", verdict: "Caution", detail: "Cannot assess nutrient retention without temperature data. Request COA and processing temperature documentation from the manufacturer." },
            { label: "No processing method information", verdict: "Avoid", detail: "For premium-priced supplements, absence of processing method disclosure is a transparency failure. This is basic product information that all quality brands should provide." },
          ].map((item) => (
            <div key={item.label} style={{ padding: "12px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, display: "grid", gridTemplateColumns: "180px 80px 1fr", gap: 12, alignItems: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.label}</p>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: item.verdict === "Best" ? "#1A5C25" : item.verdict === "Acceptable" ? "#5C5650" : "#9B2020", fontWeight: 600 }}>{item.verdict}</span>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Brand comparison */}
        <SectionHeading label="Brands" figure="§ 05" title="Processing methods by" titleItalic="reviewed brands" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <div className="review-table-wrap">
            <table style={{ borderCollapse: "collapse", minWidth: 500 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["Brand", "Method", "Temperature", "Score"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ancestral Supplements", "Freeze-dried", "~-40°C (lyophilisation)", "9/10"],
                  ["Heart & Soil", "Freeze-dried", "~-40°C (lyophilisation)", "9/10"],
                  ["Left Coast Performance", "Freeze-dried", "Disclosed (freeze-dry)", "8/10"],
                  ["Perfect Supplements", "Desiccated", "<37°C (documented)", "8/10"],
                  ["Force Factor Primal Origins", "Not disclosed", "Unknown", "7/10"],
                  ["Forest Leaf", "Not disclosed", "Unknown", "7/10"],
                  ["Codeage", "Not disclosed", "Unknown", "7/10"],
                  ["Enviromedica Terraferrin", "Desiccated", "Low-temp (claimed)", "7/10"],
                ].map(([brand, method, temp, score], i) => (
                  <tr key={brand} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{brand}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: method === "Freeze-dried" ? "#1A5C25" : method === "Desiccated" ? "#5C5650" : "#9B2020" }}>{method}</td>
                    <td style={{ padding: "10px 14px", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", color: "#8A8480" }}>{temp}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#5C5650" }}>{score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{ padding: 24, backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Temperature matters more than the method label.</p>
          <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75 }}>
            For the nutrients that define most organ supplement purchase decisions — B12, retinol, heme iron, zinc, selenium — the practical difference between freeze-drying and well-documented low-temperature desiccation is marginal. The meaningful distinction is between any cold-process method vs. high-temperature desiccation (above 60°C). For enzyme-containing products (beef pancreas), freeze-drying preserves significantly more activity. Ask any brand without clear processing disclosure to provide their temperature documentation — this is a basic quality question that transparent companies should be able to answer immediately.
          </p>
        </div>

        {/* FAQ */}
        <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* References */}
        <SectionHeading label="References" figure="§ 07" title="Research" titleItalic="citations" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
          {[
            { num: 1, text: "Damodaran S. Refolding of thermally unfolded soy proteins during the cooling regime of the protein network. J Food Science, 1988;53(3):670–672." },
            { num: 2, text: "Ratti C. Hot air and freeze-drying of high-value foods: a review. J Food Engineering, 2001;49(4):311–319." },
            { num: 3, text: "Di Cagno R et al. Effect of different drying methods on bioactive compounds in vegetables. Food Chemistry, 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31174040/" },
            { num: 4, text: "Layer P, Keller J. Pancreatic enzymes: secretion and luminal nutrient digestion in health and disease. J Clin Gastroenterol, 1999;28(1):3–10.", url: "https://pubmed.ncbi.nlm.nih.gov/9916664/" },
            { num: 5, text: "Shukla S et al. Lyophilisation of proteins: a review on formulation and process considerations. Pharm Dev Technol, 2010;15(4):359–387." },
            { num: 6, text: "USDA FoodData Central. Beef liver nutrient composition — retinol, B12, heme iron across processing states.", url: "https://fdc.nal.usda.gov/" },
          ].map((ref) => (
            <div key={ref.num} style={{ display: "flex", gap: 12, padding: "8px 12px", backgroundColor: "#F8F2E4", borderRadius: 6 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", flexShrink: 0, minWidth: 20 }}>[{ref.num}]</span>
              <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>
                {ref.text}
                {ref.url && (
                  <>
                    {" "}
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace" }}>↗</a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Related */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { name: "Beef Organ Safety Guide", href: "/research/beef-organ-supplements-safety" },
            { name: "7 Best Beef Organ Supplements", href: "/best/beef-organ-supplements" },
            { name: "Ancestral Supplements Review", href: "/reviews/ancestral-supplements-beef-liver" },
            { name: "Beef Pancreas Ingredient Profile", href: "/ingredients/beef-pancreas" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 14, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
