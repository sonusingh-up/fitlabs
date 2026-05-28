import type { Metadata } from "next";
import Link from "next/link";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "7 Best Beef Organ Supplements 2026 — Tested & Ranked",
  description:
    "Best beef organ supplements 2026 — ranked on sourcing, COA transparency, nutrient density, and price per serving. NZ grass-fed picks, women's options, carnivore-approved.",
  alternates: { canonical: "/best/beef-organ-supplements" },
  openGraph: {
    title: "7 Best Beef Organ Supplements 2026 — Tested & Ranked",
    description:
      "We ranked 9 beef organ supplement brands on sourcing transparency, COA availability, nutrient density, and price. Here are the top 7 for 2026.",
    url: "https://fitlabreviews.com/best/beef-organ-supplements",
    type: "article",
  },
};

const topPicks = [
  {
    rank: 1,
    name: "Ancestral Supplements Beef Liver",
    brand: "Ancestral Supplements",
    rating: 9 as ReviewRating,
    price: 45,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Editor's Choice — NZ grass-fed, freeze-dried, heavy-metal COA published. The gold standard for sourcing transparency.",
    pros: ["New Zealand grass-fed sourcing", "Published heavy-metal COA", "No fillers, no additives"],
    cons: ["Premium price point", "FDA warning letter issued 2025"],
    bestFor: "Sourcing-conscious buyers",
    slug: "ancestral-supplements-beef-liver",
    organs: "Liver",
    sourcing: "New Zealand",
    certifications: "None (transparent COA)",
    servingCost: "$0.50",
    badge: "Editor's Choice",
    badgeColor: "#C4622D",
    image: "/products/ancestral-supplements-beefliv.webp",
    buyUrl: "https://amzn.to/43xRRca",
  },
  {
    rank: 2,
    name: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    rating: 9 as ReviewRating,
    price: 55,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Best premium — Dr. Paul Saladino's brand. Informed Sport certified. Multi-organ blend with regenerative sourcing.",
    pros: ["Informed Sport certified", "Multi-organ formula", "Dr. Saladino formulation"],
    cons: ["Highest price point", "Proprietary blend — doses undisclosed"],
    bestFor: "Athletes and drug-tested competitors",
    slug: "heart-and-soil-beef-organs",
    organs: "Liver, Heart, Kidney, Spleen, Pancreas",
    sourcing: "Regenerative US farms",
    certifications: "Informed Sport",
    servingCost: "$0.61",
    badge: "Best Premium",
    badgeColor: "#185FA5",
    image: "/products/HEART-SOIL.webp",
    buyUrl: "https://amzn.to/3Q2X5ts",
  },
  {
    rank: 3,
    name: "Left Coast Performance Beef Organs",
    brand: "Left Coast Performance",
    rating: 8 as ReviewRating,
    price: 35,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Best value & best for women — New Zealand sourced, multi-organ blend. Amazon top seller with women's formula available.",
    pros: ["New Zealand sourced", "Dedicated women's formula", "Widely available (Amazon, Walmart)"],
    cons: ["No published COA", "Less brand authority than top tier"],
    bestFor: "Women and budget-conscious buyers",
    slug: "left-coast-performance-beef-organs",
    organs: "Liver, Heart, Kidney, Pancreas, Spleen",
    sourcing: "New Zealand",
    certifications: "None",
    servingCost: "$0.39",
    badge: "Best for Women",
    badgeColor: "#0F6E56",
    image: "/products/left-coast-performance-beef-organ.webp",
    buyUrl: "https://amzn.to/4nUmi5H",
  },
  {
    rank: 4,
    name: "Perfect Supplements Beef Liver",
    brand: "Perfect Supplements",
    rating: 8 as ReviewRating,
    price: 30,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Best organic — only USDA organic certified brand in this roundup. Budget-friendly entry into quality organ supplements.",
    pros: ["USDA organic certified", "Competitive pricing", "Clean label"],
    cons: ["Liver-only formula", "Brazilian sourcing (not NZ)"],
    bestFor: "Organic-focused buyers on a budget",
    slug: "perfect-supplements-beef-liver",
    organs: "Liver",
    sourcing: "Brazil (USDA organic)",
    certifications: "USDA Organic",
    servingCost: "$0.33",
    badge: "Best Organic",
    badgeColor: "#3B6D11",
    image: "/products/perfect-supplement.webp",
    buyUrl: "https://amzn.to/4odctAl",
  },
  {
    rank: 5,
    name: "Force Factor Primal Origins",
    brand: "Force Factor",
    rating: 7 as ReviewRating,
    price: 22,
    priceUnit: "/bottle (120 caps)",
    verdict:
      "Best budget — Walmart bestseller. Accessible price makes organ supplements approachable for first-time buyers.",
    pros: ["Lowest price point", "Widely available at Walmart", "Decent multi-organ formula"],
    cons: ["No sourcing transparency", "No COA available", "No grass-fed certification"],
    bestFor: "First-time buyers and budget-focused",
    slug: "force-factor-primal-origins",
    organs: "Liver, Heart, Kidney, Pancreas",
    sourcing: "Undisclosed",
    certifications: "None",
    servingCost: "$0.18",
    badge: "Best Budget",
    badgeColor: "#854F0B",
    image: "/products/Force-Factor-Primal-Origins.webp",
    buyUrl: "https://amzn.to/43wF5e3",
  },
  {
    rank: 6,
    name: "Forest Leaf Beef Organ Complex",
    brand: "Forest Leaf",
    rating: 7 as ReviewRating,
    price: 28,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Solid mid-tier pick with a clean formula and strong Amazon presence. Good for those stepping up from budget options.",
    pros: ["Clean label formula", "Good Amazon reviews", "Competitive pricing"],
    cons: ["Sourcing not disclosed", "No third-party testing"],
    bestFor: "Mid-range buyers wanting a multi-organ blend",
    slug: "forest-leaf-beef-organ-complex",
    organs: "Liver, Heart, Kidney, Spleen, Pancreas",
    sourcing: "Undisclosed",
    certifications: "None",
    servingCost: "$0.31",
    badge: "",
    badgeColor: "",
    image: "/products/ForestLeaf-Beef-Organ.webp",
    buyUrl: "https://amzn.to/4dzvZTM",
  },
  {
    rank: 7,
    name: "Codeage Beef Organs",
    brand: "Codeage",
    rating: 7 as ReviewRating,
    price: 42,
    priceUnit: "/bottle (180 caps)",
    verdict:
      "Premium packaging and broad organ blend. Good for buyers who want the nose-to-tail approach without the top-tier price.",
    pros: ["Comprehensive 5-organ blend", "Premium packaging", "Growing brand credibility"],
    cons: ["No sourcing transparency", "Higher price without COA"],
    bestFor: "Nose-to-tail supplementers",
    slug: "codeage-beef-organs",
    organs: "Liver, Heart, Kidney, Spleen, Pancreas",
    sourcing: "Undisclosed",
    certifications: "None",
    servingCost: "$0.47",
    badge: "",
    badgeColor: "",
    image: "/products/Codeage.webp",
    buyUrl: "https://amzn.to/4wUtzqk",
  },
];

const faqItems = [
  {
    q: "What are the benefits of beef organ supplements?",
    a: "Beef organ supplements — particularly freeze-dried liver — provide bioavailable heme iron, retinol (pre-formed vitamin A), CoQ10 (from heart), B12, folate, and copper at densities not found in muscle meat or most multivitamins. The liver is gram-for-gram the most nutrient-dense food on the planet. Organ supplements offer these nutrients in convenient capsule form without the taste barrier.",
  },
  {
    q: "Are beef organ supplements safe?",
    a: "For most healthy adults, yes. The main risk is vitamin A toxicity from excessive retinol intake — typically only a concern if you're also taking high-dose vitamin A supplements or eating fresh liver daily. Pregnant women should be especially cautious: retinol above 10,000 IU/day is associated with birth defects. Anyone on blood thinners should consult a doctor, as liver is high in vitamin K. Most products are safe at label doses.",
  },
  {
    q: "How much beef organ supplement should I take per day?",
    a: "Most brands recommend 3–6 capsules per day, providing roughly 3–6g of freeze-dried organ per serving. This is the equivalent of eating a small portion (about 1 oz) of fresh liver. Don't exceed recommended doses without medical guidance — liver is dense in retinol and the upper tolerable limit for preformed vitamin A is 10,000 IU/day for adults.",
  },
  {
    q: "What's the difference between grass-fed and conventional organ supplements?",
    a: "Grass-fed organs from New Zealand or pasture-raised US farms have a better fatty acid profile (higher omega-3 and CLA content), lower exposure to antibiotics and hormones, and better COA availability. New Zealand is preferred because of its strict regulatory environment for pasture-raised beef. Conventional or undisclosed sourcing doesn't necessarily mean inferior nutrient content, but sourcing transparency is a key quality signal.",
  },
  {
    q: "Is freeze-dried better than desiccated for organ supplements?",
    a: "Both processes preserve nutrients well — the difference is temperature. Freeze-drying (lyophilization) uses low temperatures under vacuum, better preserving heat-sensitive nutrients like B vitamins and enzymes. Desiccation uses low heat over time. Modern studies show minimal nutrient difference at the doses used in supplements. Look for whether COA data is available rather than the processing method as your main quality indicator.",
  },
  {
    q: "Can women take beef organ supplements?",
    a: "Yes — beef organ supplements are particularly well-suited for women due to their high heme iron (ideal for iron-deficiency anemia), folate, and B12 content. Left Coast Performance and Happee make female-specific formulas that include reproductive organ tissue (uterus, ovary) — popular in ancestral health circles for hormone support, though clinical evidence for organ-specific benefits is limited. Pregnant women should consult a physician due to retinol content.",
  },
  {
    q: "What's the difference between Ancestral Supplements and Heart & Soil?",
    a: "Ancestral Supplements (founded by Brian Johnson) focuses on single-organ purity and NZ sourcing with published COAs. Heart & Soil (founded by Dr. Paul Saladino) uses a multi-organ blended approach, is Informed Sport certified (third-party drug-tested), and emphasizes regenerative farming. Ancestral wins on sourcing transparency; Heart & Soil wins on third-party certification and athlete suitability. See our full comparison →",
  },
];

export default function BestBeefOrganSupplementsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 Best Beef Organ Supplements 2026",
    url: "https://fitlabreviews.com/best/beef-organ-supplements",
    numberOfItems: topPicks.length,
    itemListElement: topPicks.map((pick, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pick.name,
      url: `https://fitlabreviews.com/reviews/${pick.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Best Of", item: "https://fitlabreviews.com/best" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Beef Organ Supplements 2026",
        item: "https://fitlabreviews.com/best/beef-organ-supplements",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/best" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Best Of</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Beef Organ Supplements</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 56, maxWidth: 760 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>ROUNDUP · 2026</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>9 Brands Tested</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            7 Best Beef Organ Supplements{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>— 2026 Rankings</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, marginBottom: 12 }}>
            We evaluated 9 brands on sourcing transparency, COA availability, nutrient density, organ variety, and price per serving. This niche is dominated by passionate carnivore-community brands — quality and transparency vary enormously. Here are the seven worth your money in 2026.
          </p>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
            The case for organ supplements is straightforward: beef liver contains more retinol per gram than any other food, more bioavailable iron than any plant source, and B12 levels that dwarf muscle meat. The challenge is knowing which brands actually deliver what the label claims — with sourcing you can verify.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
              Last updated: May 2026 · 9 brands evaluated · Independent review
            </p>
          </div>
        </div>

        {/* Quick-jump comparison table */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="At a Glance" figure="§ 01" title="All 7 picks" titleItalic="side by side" size="sm" />
          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 700, width: "100%", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                  {["Brand", "Organs", "Sourcing", "Certifications", "Price/Serving", "Score", ""].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topPicks.map((pick, i) => (
                  <tr key={pick.slug} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 44, height: 54, backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={pick.image} alt={pick.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{pick.brand}</div>
                          {pick.badge && (
                            <span style={{ fontSize: 10, padding: "2px 8px", backgroundColor: pick.badgeColor, color: "#fff", borderRadius: 99, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.05em" }}>{pick.badge}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#5C5650", verticalAlign: "top", maxWidth: 160 }}>{pick.organs}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#5C5650", verticalAlign: "top", whiteSpace: "nowrap" }}>{pick.sourcing}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#5C5650", verticalAlign: "top" }}>{pick.certifications}</td>
                    <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600, color: "#1A1714", verticalAlign: "top", whiteSpace: "nowrap" }}>{pick.servingCost}</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}>
                      <ReviewScoreBadge rating={pick.rating} size="sm" />
                    </td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}>
                      <Link href={`/reviews/${pick.slug}`} style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                        Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual picks */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Detailed Rankings" figure="§ 02" title="Each pick" titleItalic="reviewed" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {topPicks.map((pick) => (
              <div key={pick.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                {/* Pick header */}
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #D4C9B8", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, backgroundColor: pick.rank === 1 ? "#1A1714" : "#EDE8DF", borderRadius: 10, flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, fontWeight: 700, color: pick.rank === 1 ? "#F2EBD9" : "#5C5650" }}>#{pick.rank}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 4, textTransform: "uppercase" }}>
                        {pick.brand} · {pick.sourcing} · {pick.price}{pick.priceUnit}
                      </div>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714" }}>
                        {pick.name}
                      </h2>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                    <div style={{ width: 72, height: 88, backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={pick.image} alt={pick.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <ReviewScoreBadge rating={pick.rating} size="sm" />
                    {pick.badge && (
                      <span style={{ fontSize: 10, padding: "3px 10px", backgroundColor: pick.badgeColor, color: "#fff", borderRadius: 99, fontFamily: "var(--font-dm-mono), monospace" }}>{pick.badge}</span>
                    )}
                  </div>
                </div>

                {/* Verdict + pros/cons */}
                <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Verdict</p>
                    <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.65 }}>{pick.verdict}</p>
                    <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>
                        ORGANS: {pick.organs}
                      </span>
                    </div>
                    <div style={{ marginTop: 12 }}>
                      <p style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 4 }}>BEST FOR: {pick.bestFor}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Pros</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 16 }}>
                      {pick.pros.map((p) => (
                        <li key={p} style={{ fontSize: 13, color: "#1A1714", padding: "3px 0", display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#3B6D11", flexShrink: 0, marginTop: 1 }}>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>Cons</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {pick.cons.map((c) => (
                        <li key={c} style={{ fontSize: 13, color: "#1A1714", padding: "3px 0", display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#9B2020", flexShrink: 0, marginTop: 1 }}>✗</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div style={{ padding: "14px 24px", borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
                    {pick.certifications !== "None" ? `Certification: ${pick.certifications}` : "No third-party certification"}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <a href={pick.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 12, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                      Buy on Amazon ↗
                    </a>
                    <Link href={`/reviews/${pick.slug}`} style={{ fontSize: 13, color: "#C4622D", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                      Full review →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How we scored */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Methodology" figure="§ 03" title="How we" titleItalic="ranked them" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              { num: "01", title: "Sourcing Transparency", desc: "NZ or pasture-raised US sourcing with verifiable farm provenance scores highest. 'Undisclosed' sourcing is penalised — it's the most important quality signal in this niche.", weight: "30%" },
              { num: "02", title: "COA & Lab Transparency", desc: "We checked whether each brand publishes batch-specific Certificates of Analysis for heavy metals (lead, cadmium, mercury, arsenic). Only Ancestral Supplements and Heart & Soil provide these publicly.", weight: "25%" },
              { num: "03", title: "Organ Variety & Dose", desc: "A multi-organ blend (liver + heart + kidney + spleen + pancreas) provides broader nutrient coverage. We also verified whether organ doses are disclosed or hidden in proprietary blends.", weight: "20%" },
              { num: "04", title: "Third-Party Certification", desc: "Informed Sport or NSF certification provides athlete assurance and basic contamination checks. Heart & Soil is the only brand here with Informed Sport status.", weight: "15%" },
              { num: "05", title: "Price Per Serving", desc: "Calculated on a per-capsule basis at recommended dose. Ancestral and Heart & Soil command a premium; Force Factor Primal Origins is the accessible entry point.", weight: "10%" },
            ].map((step) => (
              <div key={step.num} style={{ padding: 24, backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#C4622D" }}>{step.num}</p>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", backgroundColor: "#EDE8DF", padding: "2px 8px", borderRadius: 99 }}>{step.weight}</span>
                </div>
                <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's in beef organs — educational */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Background" figure="§ 04" title="What's actually" titleItalic="in organ supplements" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {[
              { organ: "Beef Liver", nutrients: "Retinol (Vitamin A), B12, Heme Iron, Copper, Folate, CoQ10", why: "The most nutrient-dense food per gram. A 3g serving of dried liver provides 100%+ of daily B12 and retinol for most adults.", link: "/ingredients/beef-liver" },
              { organ: "Beef Heart", nutrients: "CoQ10, B12, Selenium, Zinc, Iron", why: "The richest dietary source of CoQ10 — relevant for mitochondrial energy production and cardiovascular health.", link: "/ingredients/beef-heart" },
              { organ: "Beef Kidney", nutrients: "Selenium, B12, Riboflavin (B2), CoQ10", why: "Exceptionally high in selenium — a cofactor for glutathione peroxidase and thyroid hormone conversion.", link: "/ingredients/beef-kidney" },
              { organ: "Beef Spleen", nutrients: "Heme Iron, Zinc, Immune peptides", why: "The richest source of heme iron after liver. Used in ancestral traditions for immune support.", link: "/ingredients/beef-spleen" },
              { organ: "Beef Pancreas", nutrients: "Digestive enzymes, Zinc, B vitamins", why: "Provides pancreatic enzymes (amylase, lipase, protease). Like-supports-like theory — used for digestive support in ancestral health.", link: "/ingredients/beef-pancreas" },
            ].map((item) => (
              <div key={item.organ} style={{ padding: 20, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.organ}</h3>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Key nutrients: {item.nutrients}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 10 }}>{item.why}</p>
                <Link href={item.link} style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Ingredient profile →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Who should NOT take this */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Safety" figure="§ 05" title="Who should" titleItalic="avoid these" size="sm" />
          <div style={{ padding: 28, border: "1px solid #9B2020", borderRadius: 12, backgroundColor: "#FEF9F7" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B2020", marginBottom: 16 }}>IMPORTANT SAFETY NOTICE</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { who: "Pregnant women", why: "High retinol (preformed vitamin A) is a known teratogen above 10,000 IU/day. Beef liver supplements can approach or exceed this threshold at full dose. Always consult your OB/GYN." },
                { who: "People on blood thinners (warfarin)", why: "Liver is rich in vitamin K1 and K2, which antagonise warfarin. Consistent daily intake can alter INR. Inform your physician if starting organ supplements." },
                { who: "People with hemochromatosis", why: "A hereditary iron overload condition. Heme iron from liver supplements is absorbed at 15–35%, significantly higher than non-heme iron. Organ supplements are contraindicated." },
                { who: "Those with hypervitaminosis A", why: "If you already take high-dose vitamin A supplements or cod liver oil, adding liver supplements increases toxicity risk. Acute retinol toxicity presents as headache, nausea, and liver damage." },
              ].map((item) => (
                <div key={item.who} style={{ padding: 16, backgroundColor: "#FFF7F5", borderRadius: 8, border: "1px solid #F5DDD8" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#9B2020", marginBottom: 6 }}>⚠ {item.who}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {faqItems.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", borderBottom: i < faqItems.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related comparisons */}
        <section>
          <SectionHeading label="Deep Dives" figure="§ 07" title="Related" titleItalic="comparisons" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {[
              { title: "Ancestral Supplements vs Heart & Soil", desc: "The two biggest names head-to-head: sourcing, COA, price, and community trust.", href: "/compare/ancestral-supplements-vs-heart-and-soil", label: "Fastest to rank" },
              { title: "Best Beef Organ Supplements for Women", desc: "Female-specific formulas, hormone support blends, and iron-focused picks.", href: "/best/beef-organ-supplements-for-women", label: "Growing audience" },
              { title: "Beef Organ Supplements for Carnivore Diet", desc: "What the carnivore community actually buys — Reddit-vetted picks.", href: "/best/beef-organ-supplements-carnivore-diet", label: "Community favourite" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ padding: 20, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4", height: "100%" }}>
                  <span style={{ fontSize: 10, padding: "2px 8px", backgroundColor: "#EDE8DF", color: "#5C5650", borderRadius: 99, fontFamily: "var(--font-dm-mono), monospace", marginBottom: 10, display: "inline-block" }}>{item.label}</span>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 6, marginTop: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
