import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Supplement Brand Directory",
  description: "Independent brand profiles covering formula quality, label transparency, third-party testing, and reliability ratings for every major supplement manufacturer.",
  alternates: { canonical: "/brands" },
};

const brands = [
  {
    slug: "optimum-nutrition",
    name: "Optimum Nutrition",
    country: "USA",
    founded: "1986",
    figure: "BRD-001",
    avgScore: 8.1,
    reviewCount: 12,
    thirdParty: true,
    verdict: "Industry benchmark for consistency and label accuracy.",
    categories: ["Protein", "Creatine", "Pre-Workout", "Amino Acids"],
    tier: "gold",
  },
  {
    slug: "myprotein",
    name: "MyProtein",
    country: "UK",
    founded: "2004",
    figure: "BRD-002",
    avgScore: 7.8,
    reviewCount: 9,
    thirdParty: true,
    verdict: "Strong value-for-money across essentials. Occasional flavour shortcuts.",
    categories: ["Protein", "Creatine", "Vitamins", "Amino Acids"],
    tier: "silver",
  },
  {
    slug: "muscleblaze",
    name: "MuscleBlaze",
    country: "USA",
    founded: "2012",
    figure: "BRD-003",
    avgScore: 7.5,
    reviewCount: 7,
    thirdParty: false,
    verdict: "Best American brand — improving formulas, local availability advantage.",
    categories: ["Protein", "Creatine", "Mass Gainers", "Pre-Workout"],
    tier: "silver",
  },
  {
    slug: "dymatize",
    name: "Dymatize",
    country: "USA",
    founded: "1994",
    figure: "BRD-004",
    avgScore: 8.3,
    reviewCount: 6,
    thirdParty: true,
    verdict: "Premium isolates with Informed Choice certification. Worth the price.",
    categories: ["Protein", "Post-Workout", "Amino Acids"],
    tier: "gold",
  },
  {
    slug: "as-it-is",
    name: "AS-IT-IS Nutrition",
    country: "USA",
    founded: "2016",
    figure: "BRD-005",
    avgScore: 8.0,
    reviewCount: 5,
    thirdParty: false,
    verdict: "Purist brand — zero fillers, honest labelling, exceptional price-per-gram.",
    categories: ["Protein", "Creatine", "Amino Acids", "Vitamins"],
    tier: "silver",
  },
  {
    slug: "musclepharm",
    name: "MusclePharm",
    country: "USA",
    founded: "2008",
    figure: "BRD-006",
    avgScore: 6.8,
    reviewCount: 4,
    thirdParty: true,
    verdict: "Solid sport-certified line but inconsistent across non-certified products.",
    categories: ["Pre-Workout", "Protein", "Recovery"],
    tier: "standard",
  },
  {
    slug: "now-sports",
    name: "NOW Sports",
    country: "USA",
    founded: "1968",
    figure: "BRD-007",
    avgScore: 8.4,
    reviewCount: 8,
    thirdParty: true,
    verdict: "Most trustworthy supplement brand for basics — rigorous testing, no marketing gimmicks.",
    categories: ["Creatine", "Amino Acids", "Vitamins", "Single Ingredients"],
    tier: "gold",
  },
  {
    slug: "garden-of-life",
    name: "Garden of Life",
    country: "USA",
    founded: "2000",
    figure: "BRD-008",
    avgScore: 7.2,
    reviewCount: 5,
    thirdParty: true,
    verdict: "Best plant-based range — certified organic, clean label, premium pricing.",
    categories: ["Plant Protein", "Probiotics", "Vitamins", "Greens"],
    tier: "silver",
  },
  {
    slug: "arrae",
    name: "Arrae",
    country: "USA",
    founded: "2020",
    figure: "BRD-009",
    avgScore: 0,       // updates automatically as individual product reviews publish
    reviewCount: 0,    // update to match published reviews count
    thirdParty: false,
    verdict: "Fast-acting women's wellness supplements. Short, readable formulas and clean manufacturing — but no independent product-level certification.",
    categories: ["Gut Health", "Sleep", "Stress & Anxiety", "Metabolic Health", "Probiotics"],
    tier: "silver",
  },
];

const tierConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  gold:     { label: "Top Tier",  color: "#92620A", bg: "rgba(212,169,106,0.12)", border: "rgba(212,169,106,0.3)" },
  silver:   { label: "Solid",     color: "#5C5650", bg: "rgba(212,201,184,0.2)",  border: "rgba(212,201,184,0.5)" },
  standard: { label: "Standard",  color: "#8A8480", bg: "rgba(242,235,217,0.6)",  border: "#D4C9B8" },
};

const stats = [
  { label: "Brands Profiled", value: brands.length.toString() },
  { label: "Products Reviewed", value: `${brands.reduce((a, b) => a + b.reviewCount, 0)}+` },
  { label: "Avg Brand Score", value: (brands.reduce((a, b) => a + b.avgScore, 0) / brands.length).toFixed(1) },
  { label: "3rd-Party Tested", value: `${brands.filter(b => b.thirdParty).length} brands` },
];

export default function BrandsHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Brands</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>BRAND INDEX · {brands.length} PROFILES</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Independently Assessed</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Supplement{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Brands</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            Every brand profiled here has been assessed across formula quality, label transparency, third-party testing, and value. We score brands on evidence — not marketing.
          </p>
          {/* Stats row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* All Brands */}
        <section>
          <SectionHeading label="All Brands" figure="§ 01" title="Brand" titleItalic="directory" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
            {brands.map((brand) => {
              const tier = tierConfig[brand.tier];
              return (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="hub-card"
                  style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4" }}

                >
                  {/* Card header */}
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{brand.figure}</span>
                        <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: tier.color, backgroundColor: tier.bg, border: `1px solid ${tier.border}`, textTransform: "uppercase" }}>{tier.label}</span>
                        {brand.thirdParty && (
                          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", color: "#2D6A4F", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", textTransform: "uppercase" }}>3P Tested</span>
                        )}
                      </div>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.01em" }}>{brand.name}</h2>
                      <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 4 }}>{brand.country} · Est. {brand.founded}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#1A1714", lineHeight: 1, margin: 0 }}>{brand.avgScore}</p>
                      <p style={{ fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>avg score</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "14px 20px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{brand.verdict}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {brand.categories.slice(0, 4).map((cat) => (
                        <span key={cat} style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>{cat}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EDE8DF", paddingTop: 12 }}>
                      <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{brand.reviewCount} products reviewed</p>
                      <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>View Profile →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trust note */}
        <div style={{ marginTop: 64, padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#A89880", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Note</span>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
            Brand scores reflect the average of reviewed products, not the brand's full portfolio. A brand scoring 8+ has consistently clean formulas across what we have reviewed — it does not mean every product is excellent.{" "}
            <Link href="/editorial-policy" style={{ color: "#C4622D", fontWeight: 600 }}>Read our editorial policy →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
