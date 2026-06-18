import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Best Beef Organ Supplements for Carnivore Diet (2026)",
  description:
    "Best beef organ supplements for the carnivore diet 2026: nose-to-tail rankings, sourcing quality, CoQ10, selenium, iron picks for meat-based eaters. Evidence-ranked.",
  alternates: { canonical: "/best/beef-organ-supplements-carnivore-diet" },
};

export default function BestBeefOrganSupplementsCarnivorePage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Beef Organ Supplements for Carnivore Diet 2026",
    description: "Evidence-ranked beef organ supplements for carnivore diet practitioners, scored for sourcing quality, nose-to-tail completeness, and alignment with meat-based eating protocols.",
    url: "https://fitlabreviews.com/best/beef-organ-supplements-carnivore-diet",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ancestral Supplements Beef Organs", url: "https://fitlabreviews.com/reviews/ancestral-supplements-beef-liver" },
      { "@type": "ListItem", position: 2, name: "Heart & Soil Beef Organs", url: "https://fitlabreviews.com/reviews/heart-and-soil-beef-organs" },
      { "@type": "ListItem", position: 3, name: "Left Coast Performance Beef Organs", url: "https://fitlabreviews.com/reviews/left-coast-performance-beef-organs" },
      { "@type": "ListItem", position: 4, name: "Perfect Supplements Beef Liver", url: "/reviews/perfect-supplements-beef-liver" },
      { "@type": "ListItem", position: 5, name: "Force Factor Primal Origins", url: "/reviews/force-factor-primal-origins" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do carnivore dieters use beef organ supplements?",
        acceptedAnswer: { "@type": "Answer", text: "The carnivore diet — eating only animal products, typically beef — is nutritionally complete for most macronutrients but may fall short on organ-specific micronutrients if organ meats are not consumed regularly. Organ supplements provide concentrated liver (retinol, B12, folate, heme iron), heart (CoQ10, carnitine), kidney (selenium, riboflavin), spleen (heme iron, tuftsin), and pancreas (enzymes, B vitamins) without sourcing or preparing whole organs. For carnivore practitioners who eat only muscle meat, organ supplements close the nose-to-tail nutrition gap." },
      },
      {
        "@type": "Question",
        name: "Is the carnivore diet deficient without organ meats?",
        acceptedAnswer: { "@type": "Answer", text: "A muscle-meat-only carnivore diet is substantially complete but sub-optimal compared to a nose-to-tail approach. The key gaps: (1) CoQ10 — beef heart provides 113mg/100g; muscle meat provides minimal CoQ10. (2) Retinol — muscle meat contains no preformed vitamin A. (3) Folate — liver is the richest food source; muscle meat is low. (4) Selenium — kidney provides 140–160µg/100g; most muscle cuts provide 20–30µg. Regular organ consumption (Dr. Shawn Baker, Dr. Paul Saladino, and Mikhaila Peterson protocols recommend weekly organ consumption) addresses these gaps." },
      },
      {
        "@type": "Question",
        name: "Can I replace eating organ meats with organ supplements?",
        acceptedAnswer: { "@type": "Answer", text: "Partially. A standard organ supplement serving (3–6g dried organs in 4–6 capsules) is nutritionally equivalent to approximately 15–30g of fresh organ meat — a meaningful contribution but far less than a full 100g serving. For those who cannot or will not eat whole organs, supplements provide the micronutrient profile in a convenient form. The nutrient density advantage of eating fresh organs is real — a 100g liver provides more B12, iron, and retinol than any capsule protocol. Supplements are a practical bridge, not an equivalent replacement." },
      },
      {
        "@type": "Question",
        name: "Which organ supplements align with strict carnivore diet principles?",
        acceptedAnswer: { "@type": "Answer", text: "Strict carnivore practitioners typically require: (1) no plant-derived capsule material (bovine gelatin capsules, not vegetarian/vegan capsules); (2) no plant-based fillers or excipients; (3) single-ingredient or animal-only ingredient lists. All products in this roundup use bovine gelatin capsules and contain only organ tissue. Ancestral Supplements and Heart & Soil are most aligned with carnivore community values and both brands actively market to carnivore/ancestral health audiences." },
      },
      {
        "@type": "Question",
        name: "How many organ supplement capsules per day on a carnivore diet?",
        acceptedAnswer: { "@type": "Answer", text: "Most carnivore practitioners use 4–6 capsules per day (1 serving of the major brands). Those eating no whole organs may take 2 servings (8–12 capsules) for nutritional completeness. Paul Saladino and Ancestral Supplements both recommend 6 capsules daily with the largest meal. Starting with 2 capsules and increasing over 2 weeks is recommended for those new to organ supplements to allow gut adaptation. Monitor vitamin A intake if taking multiple servings of liver-containing products." },
      },
    ],
  };

  const picks = [
    {
      rank: 1,
      name: "Ancestral Supplements (Beef Organs or Beef Liver)",
      score: "9/10",
      tag: "Carnivore Community Standard",
      price: "$1.50/serving",
      href: "/reviews/ancestral-supplements-beef-liver",
      image: "/products/ancestral-supplements-beefliv.webp",
      buyUrl: "https://amzn.to/43xRRca",
      why: "The original and most trusted brand in the ancestral/carnivore supplement space. Founded by Brian Johnson ('Liver King' co-collaborator), Ancestral Supplements pioneered the modern organ supplement category. NZ grass-fed, batch-traceable sourcing. Published heavy metal COA. The only brand with single-organ options that allow you to customise your nose-to-tail protocol — buy separate beef liver, heart, kidney, spleen, and pancreas products and dose each precisely.",
      tags: ["NZ grass-fed", "Heavy metal COA", "Single-organ options", "Batch-traceable", "Carnivore community trusted"],
    },
    {
      rank: 2,
      name: "Heart & Soil Beef Organs",
      score: "9/10",
      tag: "Best Formulation + Verified Purity",
      price: "$1.83/serving",
      href: "/reviews/heart-and-soil-beef-organs",
      image: "/products/HEART-SOIL.webp",
      buyUrl: "https://amzn.to/3Q2X5ts",
      why: "Formulated by Dr. Paul Saladino — the physician most associated with the carnivore diet movement. The 5-organ blend is the most complete single-product nose-to-tail supplement available. Informed Sport certified (unique in the category). US regenerative farm sourcing. For carnivore practitioners who want Saladino's specific formulation philosophy and verified purity, this is the top choice.",
      tags: ["Dr. Saladino formulation", "Informed Sport certified", "US Regenerative", "5-organ blend", "Carnivore physician endorsed"],
    },
    {
      rank: 3,
      name: "Left Coast Performance Beef Organs",
      score: "8/10",
      tag: "Best Value Nose-to-Tail",
      price: "$0.39/serving",
      href: "/reviews/left-coast-performance-beef-organs",
      image: "/products/left-coast-performance-beef-organ.webp",
      buyUrl: "https://amzn.to/4nUmi5H",
      why: "NZ sourced 5-organ blend at $0.39/serving — the best price-to-sourcing ratio in the category. Popular in the carnivore community precisely because it delivers the full organ spectrum at a price that doesn't require a premium supplement budget. For carnivore practitioners who are already eating significant quantities of red meat and using supplements as a nutritional top-up rather than a primary source, Left Coast is the rational choice.",
      tags: ["NZ sourced", "$0.39/serving", "5-organ blend", "Best value", "Carnivore budget pick"],
    },
    {
      rank: 4,
      name: "Perfect Supplements Beef Liver",
      score: "8/10",
      tag: "Best Organic-Certified Single Organ",
      price: "$0.33/serving",
      href: "/reviews/perfect-supplements-beef-liver",
      image: "/products/perfect-supplement.webp",
      buyUrl: "https://amzn.to/4odctAl",
      why: "The only USDA Organic certified beef liver supplement reviewed. For carnivore practitioners who specifically prioritise organic certification alongside their meat sourcing standards, Perfect Supplements is the only option. Brazilian Cerrado grass-fed sourcing has a strong track record. Liver-only means maximum retinol and B12 density per serving without organ dilution — appropriate for carnivore practitioners adding heart, kidney, spleen individually.",
      tags: ["USDA Organic certified", "Brazilian Cerrado", "Liver-focused", "$0.33/serving", "Organic carnivore pick"],
    },
    {
      rank: 5,
      name: "Force Factor Primal Origins",
      score: "7/10",
      tag: "Best Budget Access Pick",
      price: "$0.18/serving",
      href: "/reviews/force-factor-primal-origins",
      image: "/products/Force-Factor-Primal-Origins.webp",
      buyUrl: "https://amzn.to/43wF5e3",
      why: "At $0.18/serving, Primal Origins makes organ supplementation accessible to carnivore practitioners on a tight budget. Four-organ formula (no spleen). Undisclosed sourcing is a real weakness against carnivore community standards that strongly value traceability. Best used as an entry-level product while establishing the organ supplement habit — then upgrade to Ancestral or Left Coast once the routine is confirmed.",
      tags: ["$0.18/serving", "Budget access", "4 organs", "Widely available", "Entry-level"],
    },
  ];

  const organNutrients = [
    { organ: "Beef Liver", nutrients: "Retinol, B12, B9 (folate), heme iron, copper", carnivoreRole: "Most nutrient-dense food known. Vitamin A precursor missing from muscle meat." },
    { organ: "Beef Heart", nutrients: "CoQ10 (113mg/100g), L-carnitine, B12, selenium", carnivoreRole: "Primary CoQ10 source. Mitochondrial energy production. Almost absent from muscle meat." },
    { organ: "Beef Kidney", nutrients: "Selenium (140–160µg/100g), riboflavin, B12", carnivoreRole: "Highest selenium density. Thyroid and antioxidant support beyond muscle meat levels." },
    { organ: "Beef Spleen", nutrients: "Heme iron (42mg/100g), zinc, tuftsin", carnivoreRole: "Highest iron density. Immune peptide tuftsin. Iron source beyond liver." },
    { organ: "Beef Pancreas", nutrients: "Pancreatin enzymes, zinc, B vitamins", carnivoreRole: "Digestive enzyme support. Zinc co-factors for insulin synthesis." },
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
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Organs — Carnivore Diet</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>Roundup · 2026</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>Carnivore Protocol</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Best Beef Organ Supplements for the Carnivore Diet
            <em style={{ display: "block", fontWeight: 400, fontStyle: "italic", color: "#5C5650", fontSize: "0.65em", marginTop: 10 }}>Nose-to-Tail Nutrition for Meat-Based Eating — 2026 Rankings</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 16 }}>
            The carnivore diet's nutritional completeness depends critically on organ consumption. A muscle-meat-only diet is high in complete protein, zinc, B12, and heme iron — but substantially deficient in CoQ10, vitamin A (retinol), folate, and optimal selenium levels relative to the nose-to-tail model that evolutionary biology suggests. Organ supplements close this gap when whole organs are impractical.
          </p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
            This guide ranks the best beef organ supplements specifically for carnivore diet practitioners — prioritising sourcing transparency, organ variety, and alignment with carnivore community quality standards.
          </p>
        </div>

        {/* Quick summary stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 48, padding: 20, backgroundColor: "#1A1714", borderRadius: 12 }}>
          {[
            { label: "Carnivore #1 Pick", value: "Ancestral Supps", sub: "9/10 · Community standard" },
            { label: "Best Formulation", value: "Heart & Soil", sub: "9/10 · Dr. Saladino" },
            { label: "Best Value", value: "Left Coast", sub: "8/10 · $0.39/serving" },
            { label: "Best Organic", value: "Perfect Supps", sub: "8/10 · USDA Organic" },
            { label: "Budget Pick", value: "Force Factor", sub: "7/10 · $0.18/serving" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "12px 14px", backgroundColor: "#252220", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C5650", marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9", marginBottom: 2 }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#8A8480" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Organ roles on carnivore */}
        <SectionHeading label="Context" figure="§ 01" title="What each organ adds" titleItalic="to a meat-based diet" size="sm" />
        <div style={{ marginBottom: 48 }}>
          <div className="review-table-wrap">
            <table style={{ borderCollapse: "collapse", minWidth: 540 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  {["Organ", "Key Nutrients", "Why Important on Carnivore"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#F2EBD9", letterSpacing: "0.08em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {organNutrients.map((row, i) => (
                  <tr key={row.organ} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: "#1A1714", whiteSpace: "nowrap" }}>{row.organ}</td>
                    <td style={{ padding: "12px 14px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{row.nutrients}</td>
                    <td style={{ padding: "12px 14px", fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{row.carnivoreRole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product picks */}
        <SectionHeading label="Rankings" figure="§ 02" title="Top picks for" titleItalic="carnivore diet" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
          {picks.map((pick) => (
            <div key={pick.rank} style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "16px 20px", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700 }}>#{pick.rank}</span>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9" }}>{pick.name}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", backgroundColor: "#252220", padding: "3px 8px", borderRadius: 4 }}>{pick.tag}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 13, color: "#C4622D", fontWeight: 700 }}>{pick.score}</span>
                </div>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#F8F2E4", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", marginBottom: 10 }}>{pick.price}</p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 14 }}>{pick.why}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    {pick.tags.map((t) => (
                      <span key={t} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "3px 8px", borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <a href={pick.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 12, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                      Buy on Amazon ↗
                    </a>
                    <Link href={pick.href} style={{ fontSize: 13, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>
                      Full review →
                    </Link>
                  </div>
                </div>
                <div style={{ width: 90, flexShrink: 0 }}>
                  <div style={{ width: 90, height: 110, backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={pick.image} alt={pick.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carnivore protocol guide */}
        <SectionHeading label="Protocol" figure="§ 03" title="Organ supplement" titleItalic="carnivore protocols" size="sm" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
          {[
            {
              protocol: "Strict Carnivore (Beef + Organs Only)",
              rec: "Ancestral Supplements. Single-organ products allow precise nutrient control. Eat fresh liver 1x/week + supplement with heart, kidney, spleen daily. Aligns with Paul Carnivore's and Liver King's ancestral philosophy.",
            },
            {
              protocol: "Carnivore with Muscle Meat Only (No Whole Organs)",
              rec: "Left Coast Performance or Ancestral multi-organ supplement 2x/day. 5-organ supplement at double dose partially compensates for absence of whole organs. Still less potent than fresh liver — use as nutritional bridge.",
            },
            {
              protocol: "Lion Diet (Ruminant Meat Only)",
              rec: "Perfect Supplements Beef Liver for USDA Organic certification. Ancestral Supplements for broader multi-organ coverage. Prioritise traceable, pure sourcing over organ variety since the diet is already restrictive.",
            },
            {
              protocol: "Carnivore + Athletic Performance",
              rec: "Heart & Soil (Informed Sport certified) is mandatory for drug-tested athletes. CoQ10 from beef heart is specifically relevant for mitochondrial energy production in trained athletes. Stack with Ancestral liver for individual organ dosing flexibility.",
            },
            {
              protocol: "Budget Carnivore Protocol",
              rec: "Force Factor Primal Origins at $0.18/serving for daily use. Eat fresh liver from grocery stores ($3–6/lb) 1–2x/week to complement. This hybrid approach delivers better nutrition than capsules alone at significantly lower total cost.",
            },
          ].map((item) => (
            <div key={item.protocol} style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Protocol</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{item.protocol}</p>
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
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {item.name}</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Related */}
        <SectionHeading label="Related" figure="§ 05" title="More organ" titleItalic="supplement guides" size="sm" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 48 }}>
          {[
            { name: "7 Best Beef Organ Supplements", desc: "Full category rankings", href: "/best/beef-organ-supplements" },
            { name: "Ancestral vs Heart & Soil", desc: "The two carnivore stalwarts vs each other", href: "/compare/ancestral-supplements-vs-heart-and-soil" },
            { name: "Best Organs for Women", desc: "Iron-focused female rankings", href: "/best/beef-organ-supplements-for-women" },
            { name: "Beef Heart Ingredient Profile", desc: "CoQ10 — the carnivore energy organ", href: "/ingredients/beef-heart" },
            { name: "Beef Liver Ingredient Profile", desc: "The most nutrient-dense food", href: "/ingredients/beef-liver" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#5C5650" }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
