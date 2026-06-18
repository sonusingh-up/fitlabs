import type { Metadata } from "next";
import Link from "next/link";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [a, , b] = slug.split("-vs-");
  return {
    title: `${a?.replace(/-/g, " ")} vs ${b?.replace(/-/g, " ")} — Head-to-Head`,
    description: `Detailed side-by-side comparison with FSP scores, ingredients, dosages, price-per-serve, third-party testing, and final recommendation.`,
    alternates: { canonical: `/compare/${slug}` },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const products = [
    {
      name: "ON Gold Standard Whey",
      brand: "Optimum Nutrition",
      type: "WPC80 Blend",
      rating: 9 as ReviewRating,
      pricePerServing: "₹91",
      protein: "24g",
      calories: "120 kcal",
      bcaa: "5.5g",
      leucine: "2.5g",
      sweetener: "Sucralose",
      thirdParty: true,
      lactose: true,
      slug: "optimum-nutrition-gold-standard-whey",
      bestFor: "Most users, everyday use",
      ingredients: [
        { name: "Whey Protein Concentrate (WPC80)", evidenceLevel: "strong" as EvidenceLevel, dosage: "Primary source" },
        { name: "Whey Protein Isolate", evidenceLevel: "strong" as EvidenceLevel, dosage: "Secondary" },
        { name: "Whey Peptides", evidenceLevel: "moderate" as EvidenceLevel, dosage: "Minor" },
      ],
    },
    {
      name: "Dymatize ISO100",
      brand: "Dymatize",
      type: "Hydrolyzed WPI",
      rating: 8 as ReviewRating,
      pricePerServing: "₹110",
      protein: "25g",
      calories: "110 kcal",
      bcaa: "5.8g",
      leucine: "2.7g",
      sweetener: "Sucralose + Acesulfame-K",
      thirdParty: true,
      lactose: false,
      slug: "dymatize-iso100",
      bestFor: "Lactose-sensitive, cutting phase",
      ingredients: [
        { name: "Hydrolyzed Whey Isolate", evidenceLevel: "strong" as EvidenceLevel, dosage: "Primary source" },
        { name: "Whey Protein Isolate", evidenceLevel: "strong" as EvidenceLevel, dosage: "Secondary" },
      ],
    },
  ];

  const winnerByCategory = [
    { category: "Protein Per Serving", winner: "ISO100", note: "25g vs 24g — marginal but consistent" },
    { category: "Price Per Serving", winner: "Gold Standard", note: "₹91 vs ₹110 — 20% cheaper" },
    { category: "Lactose Tolerance", winner: "ISO100", note: "Virtually zero lactose in isolate form" },
    { category: "Absorption Speed", winner: "ISO100", note: "Hydrolyzed = faster peptide absorption" },
    { category: "Flavour Range", winner: "Gold Standard", note: "More options widely available in USA" },
    { category: "Value for Money", winner: "Gold Standard", note: "Comparable quality at lower price" },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Compare</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section">

        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DIRECT COMPARISON · 2026</p>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            {products[0].name} <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5C5650" }}>vs</em> {products[1].name}
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", maxWidth: 540, margin: "0 auto" }}>
            A head-to-head breakdown of ingredients, dosages, price, and the right choice for different users.
          </p>
        </div>

        {/* Score cards */}
        <div className="layout-compare-cards" style={{ marginBottom: 56 }}>
          {products.map((p, i) => (
            <>
              <div key={p.slug} style={{ padding: 28, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8 }}>{p.brand} · {p.type}</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{p.name}</h3>
                <div style={{ display: "flex", marginBottom: 12 }}>
                  <ReviewScoreBadge rating={p.rating} size="md" />
                </div>
                <p style={{ fontSize: 13, color: "#5C5650" }}>Best for: {p.bestFor}</p>
              </div>
              {i === 0 && (
                <div key="vs" className="compare-vs-hide" style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2rem", fontWeight: 400, fontStyle: "italic", color: "#D4C9B8" }}>vs</span>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Specs table */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Specs" figure="§ 01" title="Side-by-side" titleItalic="breakdown" size="sm" />
          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-hanken), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                  <th style={{ padding: "12px 20px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Metric</th>
                  {products.map((p) => (
                    <th key={p.slug} style={{ padding: "12px 20px", textAlign: "center", fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Protein/Serving", vals: products.map((p) => p.protein) },
                  { label: "Calories", vals: products.map((p) => p.calories) },
                  { label: "BCAAs", vals: products.map((p) => p.bcaa) },
                  { label: "Leucine", vals: products.map((p) => p.leucine) },
                  { label: "Price/Serving", vals: products.map((p) => p.pricePerServing) },
                  { label: "Sweetener", vals: products.map((p) => p.sweetener) },
                  { label: "3rd Party Tested", vals: products.map((p) => p.thirdParty ? "Yes ✓" : "No") },
                  { label: "Lactose", vals: products.map((p) => p.lactose ? "Contains" : "Virtually None") },
                ].map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "12px 20px", fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{row.label}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} style={{ padding: "12px 20px", textAlign: "center", fontSize: 14, color: "#1A1714", fontWeight: 500 }}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Winner by category */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Category Winners" figure="§ 02" title="Who wins" titleItalic="each round" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {winnerByCategory.map((item, i) => (
              <div key={item.category} className="layout-winners-row" style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div style={{ padding: "14px 20px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.category}</div>
                <div className="winners-col-border" style={{ padding: "14px 20px", borderLeft: "1px solid #EDE8DF" }}>
                  <span style={{ padding: "3px 10px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif" }}>{item.winner}</span>
                </div>
                <div className="winners-col-border" style={{ padding: "14px 20px", fontSize: 13, color: "#5C5650", borderLeft: "1px solid #EDE8DF" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final recommendation */}
        <section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Choose If...</p>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>{products[0].name}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["You want a proven, trusted formula", "Budget matters — good value", "You don't have lactose issues", "You want more flavour options"].map((r) => (
                  <li key={r} style={{ fontSize: 13, color: "#8A8480", padding: "4px 0" }}>· {r}</li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 28, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Choose If...</p>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{products[1].name}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["You're lactose intolerant", "You're in a cutting phase", "You want the cleanest isolate", "Absorption speed matters"].map((r) => (
                  <li key={r} style={{ fontSize: 13, color: "#5C5650", padding: "4px 0" }}>· {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
