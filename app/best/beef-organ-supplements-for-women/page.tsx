import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Best Beef Organ Supplements for Women (2026)",
  description:
    "Best beef organ supplements for women 2026: iron, B12, folate, selenium picks for premenopausal women, pregnancy prep, and thyroid support. Evidence-ranked.",
  alternates: { canonical: "/best/beef-organ-supplements-for-women" },
};

export default function BestBeefOrganSupplementsWomenPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Beef Organ Supplements for Women 2026",
    description: "Evidence-ranked beef organ supplements for women, scored for heme iron density, retinol safety, third-party testing, and female-relevant nutrient profiles.",
    url: "https://fitlabreviews.com/best/beef-organ-supplements-for-women",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ancestral Supplements Beef Liver", url: "https://fitlabreviews.com/reviews/ancestral-supplements-beef-liver" },
      { "@type": "ListItem", position: 2, name: "Heart & Soil Beef Organs (Women's Formula)", url: "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs" },
      { "@type": "ListItem", position: 3, name: "Left Coast Performance Beef Organs", url: "https://fitlabreviews.com/reviews/left-coast-performance-beef-organs" },
      { "@type": "ListItem", position: 4, name: "Happee Beef Organs for Women", url: "https://fitlabreviews.com/reviews/happee-beef-organ-women" },
      { "@type": "ListItem", position: 5, name: "Enviromedica Terraferrin", url: "https://fitlabreviews.com/reviews/enviromedica-terraferrin" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What nutrients in beef organs are most important for women?",
        acceptedAnswer: { "@type": "Answer", text: "For premenopausal women, heme iron is the priority — the female RDA is 18mg/day vs 8mg for adult men, driven by menstrual blood loss. Beef liver and spleen are among the highest heme iron sources available. Folate (290µg/100g in liver) supports cell division and is critical for pregnancy planning. B12, copper, and selenium from organ meats support energy, thyroid function, and immune health. Retinol (vitamin A) from liver is highly bioavailable — important for adequate intake but requires monitoring during pregnancy." },
      },
      {
        "@type": "Question",
        name: "Can women with heavy periods benefit from organ supplements?",
        acceptedAnswer: { "@type": "Answer", text: "Yes — heme iron from beef liver and spleen is absorbed at 15–35%, significantly higher than non-heme iron from plant sources (3–8%). Women with heavy menstrual blood loss who are iron-deficient may benefit from consistent organ supplement use as a food-based iron strategy. This is nutritional support, not a medical treatment — clinical iron deficiency anemia should be confirmed with a ferritin blood test and managed under physician guidance." },
      },
      {
        "@type": "Question",
        name: "Is beef liver safe during pregnancy?",
        acceptedAnswer: { "@type": "Answer", text: "Beef liver is high in preformed vitamin A (retinol). Excess retinol during the first trimester is associated with teratogenic risk. The tolerable upper limit is 3,000µg RAE/day. A single 100g serving of beef liver contains up to 16,899µg retinol — well above the UL. Standard supplement doses (3–6 caps = ~3–6g of dried liver) provide far less, but the exact amount depends on concentration ratios. Pregnant women should not use liver supplements without explicit OB/GYN guidance. This is a hard rule, not a precautionary one." },
      },
      {
        "@type": "Question",
        name: "What is the best beef organ supplement for women with thyroid issues?",
        acceptedAnswer: { "@type": "Answer", text: "For thyroid support, selenium density is the key differentiator. Beef kidney provides 140–160µg selenium per 100g — the highest of any organ meat. Products containing beef kidney (Ancestral Supplements multi-organ, Heart & Soil Beef Organs, Left Coast Performance) provide selenium alongside T3/T4 cofactor support. Supplemental selenium specifically for thyroid conditions should be discussed with a physician, but dietary selenium from kidney-containing organ supplements is within safe ranges at standard doses." },
      },
      {
        "@type": "Question",
        name: "Do beef organ supplements help with fertility?",
        acceptedAnswer: { "@type": "Answer", text: "Organ supplements provide micronutrients with documented roles in reproductive health — folate (neural tube defect prevention), B12, zinc (ovarian function), iron (adequate blood oxygen for implantation), vitamin A (reproductive tissue maintenance). 'Like supports like' claims for bovine reproductive organ tissue are an ancestral health concept without clinical evidence. The micronutrient support case for fertility preparation is plausible; the organ-specific claims are not. Those actively trying to conceive should use a physician-supervised prenatal approach." },
      },
    ],
  };

  const picks = [
    {
      rank: 1,
      name: "Ancestral Supplements Beef Liver",
      score: "9/10",
      tag: "Best Overall for Women",
      price: "$1.50/serving",
      href: "/reviews/ancestral-supplements-beef-liver",
      image: "/products/ancestral-supplements-beefliv.webp",
      buyUrl: "https://amzn.to/43xRRca",
      why: "NZ grass-fed liver provides the highest retinol, B12, folate, and heme iron per serving of any single-organ product. Published heavy metal COA. Lot-specific traceability. The gold standard for women seeking a liver-first nutrient protocol. Retinol dose is disclosed, enabling safe monitoring.",
      nutrients: ["Retinol 16,899µg/100g", "Folate 290µg/100g", "B12 59.3µg/100g", "Heme iron 6.2mg/100g"],
      caution: "Pregnant women must consult OB/GYN — liver retinol exceeds first-trimester safe intake in large doses.",
    },
    {
      rank: 2,
      name: "Heart & Soil Beef Organs",
      score: "9/10",
      tag: "Best for Athletes & Verified Purity",
      price: "$1.83/serving",
      href: "/reviews/heart-and-soil-beef-organs",
      image: "/products/HEART-SOIL.webp",
      buyUrl: "https://amzn.to/3Q2X5ts",
      why: "The only Informed Sport certified organ supplement — decisive for competitive female athletes. 5-organ nose-to-tail formula covers CoQ10 (energy), selenium (thyroid), and spleen iron alongside liver. Dr. Saladino also offers female-specific formulas including reproductive organ tissue for those interested in the ancestral approach. Premium but justified for verified-purity needs.",
      nutrients: ["5 organs: liver, heart, kidney, spleen, pancreas", "Informed Sport certified", "US Regenerative farm sourcing", "Heavy metal COA available"],
      caution: "Proprietary blend — individual organ doses undisclosed. Retinol calculation requires physician guidance.",
    },
    {
      rank: 3,
      name: "Left Coast Performance Beef Organs",
      score: "8/10",
      tag: "Best Value for Iron + Broad Nutrition",
      price: "$0.39/serving",
      href: "/reviews/left-coast-performance-beef-organs",
      image: "/products/left-coast-performance-beef-organ.webp",
      buyUrl: "https://amzn.to/4nUmi5H",
      why: "NZ sourced 5-organ blend at the lowest price of the credible products reviewed. For premenopausal women on a budget, the liver + spleen combination within the 5-organ formula provides excellent iron density. Popular with women following the carnivore diet. No female-specific marketing, but the nutritional profile is well-suited.",
      nutrients: ["5 organs (NZ sourced)", "$0.39/serving", "Best price-to-quality ratio", "Spleen included for iron density"],
      caution: "No heavy metal COA publicly available. Adequate for most users.",
    },
    {
      rank: 4,
      name: "Happee Beef Organs for Women",
      score: "7/10",
      tag: "Best Female-Specific Iron Focus",
      price: "$0.63/serving",
      href: "/reviews/happee-beef-organ-women",
      image: "/products/Happee-Grass-Fed-Beef-Organ.webp",
      buyUrl: "https://amzn.to/4uDGXOc",
      why: "The only product in this roundup specifically designed around female iron needs — the liver + spleen combination provides the highest heme iron density of any reviewed formula. NZ grass-fed sourcing. Explicit female-focused protocol. Held back by lack of third-party testing and no published heavy metal COA.",
      nutrients: ["Liver + Spleen (iron-dense)", "Kidney (selenium, B2)", "NZ grass-fed", "Female-specific protocol"],
      caution: "No third-party testing. Proprietary blend — retinol incalculable. Not suitable during pregnancy without physician approval.",
    },
    {
      rank: 5,
      name: "Enviromedica Terraferrin",
      score: "7/10",
      tag: "Best for Targeted Iron Optimisation",
      price: "$1.10/serving",
      href: "/reviews/enviromedica-terraferrin",
      image: "/products/Enviromedica.webp",
      buyUrl: "https://amzn.to/4vhPma3",
      why: "Unique lactoferrin + desiccated liver formula. Lactoferrin has clinical evidence for modestly improving iron absorption and immune modulation. Disclosed ingredient doses (not a proprietary blend). Argentine grass-fed sourcing with published COA. Best suited for iron-focused women who want the lactoferrin synergy or want to stack with a broader multi-organ supplement.",
      nutrients: ["Lactoferrin + beef liver", "Disclosed doses (not proprietary)", "Argentine grass-fed", "COA on website"],
      caution: "Liver-only (no CoQ10/selenium). Expensive as a standalone at $1.10/serving.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/best" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Best</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Organs for Women</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>Roundup · 2026</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Evidence-Led Rankings</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Best Beef Organ Supplements for Women
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.65em", marginTop: 10 }}>Iron, Folate, B12 & Female-Specific Formulas — 2026 Rankings</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            Women have different micronutrient priorities than the general population: higher iron requirements (18mg vs 8mg RDA for premenopausal women), greater folate needs during reproductive years, and higher rates of thyroid disorders requiring selenium support. Organ supplements can meaningfully address these gaps — but the right formula depends on your specific goals and health status.
          </p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>
            This guide covers the five best beef organ supplements for women in 2026, ranked by heme iron density, retinol safety profile, third-party testing, and female-relevant nutrient composition. All products were evaluated using the Fitlab Scoring Protocol (FSP).
          </p>
          <div style={{ padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, borderLeft: "3px solid #9B2020" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#9B2020", marginBottom: 6 }}>Safety note: Pregnancy</p>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>Beef liver contains high levels of preformed vitamin A (retinol). Excess retinol in the first trimester is associated with teratogenic risk. Pregnant women and those actively trying to conceive should not use liver-containing supplements without explicit physician guidance. This applies to all products in this roundup.</p>
          </div>
        </div>

        {/* Quick picks summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 48, padding: 20, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[
            { label: "Best Overall", value: "Ancestral Liver", sub: "9/10 · NZ sourced" },
            { label: "Best for Athletes", value: "Heart & Soil", sub: "9/10 · Informed Sport" },
            { label: "Best Value", value: "Left Coast", sub: "8/10 · $0.39/serving" },
            { label: "Best Iron Focus", value: "Happee Women's", sub: "7/10 · Liver + Spleen" },
            { label: "Best Iron+Lactoferrin", value: "Terraferrin", sub: "7/10 · Disclosed doses" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "12px 14px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Why organ supplements for women */}
        <SectionHeading label="Context" figure="§ 01" title="Why women need" titleItalic="different organ nutrients" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            The case for organ supplements is stronger for premenopausal women than for any other demographic — because the micronutrient gap is larger and more specific.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                title: "Iron — the #1 gap",
                body: "Iron deficiency is the most prevalent micronutrient deficiency globally, disproportionately affecting women of reproductive age. The female RDA is 18mg/day (vs 8mg for men). Heavy menstrual flow depletes iron stores faster than dietary replacement from typical Western diets. Heme iron from beef liver (~6mg/100g) and spleen (~42mg/100g) is absorbed at 15–35% — vs 3–8% for non-heme iron from plants or fortified foods.",
              },
              {
                title: "Folate — for reproductive years",
                body: "Beef liver provides approximately 290µg folate per 100g — roughly 73% of the RDA in a single 100g serving. Folate is critical for DNA synthesis, cell division, and — for those planning pregnancy — neural tube defect prevention. Food folate from liver is highly bioavailable compared to synthetic folic acid supplementation.",
              },
              {
                title: "Selenium — thyroid connection",
                body: "Women are 5–10x more likely than men to develop autoimmune thyroid disease (Hashimoto's thyroiditis). Selenium is an essential cofactor for iodothyronine deiodinases (T4 → T3 conversion) and thyroid peroxidase. Beef kidney provides 140–160µg selenium per 100g — the highest density of any organ meat.",
              },
              {
                title: "Retinol — monitor during pregnancy",
                body: "Beef liver is the most concentrated natural source of preformed vitamin A (retinol) — 16,899µg per 100g. Retinol is essential for reproductive health, immune function, and skin integrity. However, it is also teratogenic in excess. The tolerable upper limit is 3,000µg RAE/day, with more conservative recommendations during pregnancy. Supplemental liver use during pregnancy requires physician oversight.",
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: 18, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product picks */}
        <SectionHeading label="Rankings" figure="§ 02" title="Our top picks" titleItalic="for women" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
          {picks.map((pick) => (
            <div key={pick.rank} style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
              {/* Card header */}
              <div style={{ padding: "16px 20px", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700 }}>#{pick.rank}</span>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9" }}>{pick.name}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", backgroundColor: "#252220", padding: "3px 8px", borderRadius: 4 }}>{pick.tag}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 13, color: "#C4622D", fontWeight: 700 }}>{pick.score}</span>
                </div>
              </div>
              {/* Card body */}
              <div style={{ padding: "18px 20px", backgroundColor: "#F8F2E4", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650" }}>{pick.price}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 14 }}>{pick.why}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {pick.nutrients.map((n) => (
                      <span key={n} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "3px 8px", borderRadius: 4 }}>{n}</span>
                    ))}
                  </div>
                  {pick.caution && (
                    <p style={{ fontSize: 12, color: "#8A8480", fontStyle: "italic", marginBottom: 14 }}>⚠ {pick.caution}</p>
                  )}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <a href={pick.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 12, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                      Buy on Amazon ↗
                    </a>
                    <Link href={pick.href} style={{ fontSize: 13, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>
                      Full review →
                    </Link>
                  </div>
                </div>
                <div style={{ width: 90, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 90, height: 110, backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={pick.image} alt={pick.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buying guide */}
        <SectionHeading label="Guide" figure="§ 03" title="How to choose" titleItalic="for your specific needs" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {[
            {
              goal: "Premenopausal women with heavy periods",
              rec: "Prioritise liver + spleen iron density. Happee Women's (liver + spleen) or Left Coast Performance (5-organ including spleen) are the best budget options. For premium with testing, Heart & Soil.",
            },
            {
              goal: "Women planning pregnancy (pre-conception)",
              rec: "Ancestral Supplements Beef Liver — disclosed dosing allows retinol monitoring. Consult OB/GYN on specific retinol limit for your protocol. Do not use liver supplements in the first trimester without explicit physician guidance.",
            },
            {
              goal: "Female athletes in tested sports",
              rec: "Heart & Soil exclusively — the only Informed Sport certified organ supplement. The certification is batch-testable and covers 200+ WADA-banned substances.",
            },
            {
              goal: "Women with thyroid issues (Hashimoto's)",
              rec: "Any kidney-containing multi-organ product for selenium density: Left Coast Performance, Ancestral Supplements multi-organ, or Heart & Soil. Discuss supplemental selenium with your endocrinologist.",
            },
            {
              goal: "Women interested in iron optimisation (supplementing beyond diet)",
              rec: "Terraferrin — the lactoferrin + liver combination has the strongest clinical rationale for iron bioavailability support. Stack with a kidney-containing product for thyroid nutrients.",
            },
          ].map((item) => (
            <div key={item.goal} style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Goal</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.goal}</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Recommendation</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.rec}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <SectionHeading label="FAQ" figure="§ 04" title="Common" titleItalic="questions" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ padding: "20px 22px", borderBottom: i < faqSchema.mainEntity.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Related */}
        <SectionHeading label="Related" figure="§ 05" title="More organ" titleItalic="supplement guides" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 48 }}>
          {[
            { name: "7 Best Beef Organ Supplements", desc: "Full category rankings", href: "/best/beef-organ-supplements" },
            { name: "Ancestral vs Heart & Soil", desc: "Head-to-head comparison", href: "/compare/ancestral-supplements-vs-heart-and-soil" },
            { name: "Beef Organ Supplements: Carnivore Diet", desc: "Carnivore protocol guide", href: "/best/beef-organ-supplements-carnivore-diet" },
            { name: "Beef Liver Ingredient Profile", desc: "Retinol, B12, iron evidence", href: "/ingredients/beef-liver" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#5C5650" }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
