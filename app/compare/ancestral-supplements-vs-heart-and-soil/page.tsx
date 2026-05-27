import type { Metadata } from "next";
import Link from "next/link";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Ancestral Supplements vs Heart & Soil: Which Is Better (2026)?",
  description:
    "Ancestral Supplements vs Heart & Soil — sourcing, COA transparency, organs included, price per serving, certifications. Which beef organ brand wins in 2026?",
  alternates: { canonical: "/compare/ancestral-supplements-vs-heart-and-soil" },
  openGraph: {
    title: "Ancestral Supplements vs Heart & Soil (2026) — Detailed Comparison",
    description:
      "Both dominate the beef organ supplement space. We break down sourcing, COA transparency, certifications, and price to help you choose.",
    url: "https://fitlabreviews.com/compare/ancestral-supplements-vs-heart-and-soil",
    type: "article",
  },
};

const products = [
  {
    name: "Ancestral Supplements Beef Liver",
    brand: "Ancestral Supplements",
    founder: "Brian Johnson (aka Liver King — prior; now independent)",
    rating: 9 as ReviewRating,
    priceBottle: "$45",
    servings: "30",
    pricePerServing: "$1.50",
    capsPerServing: "6",
    organs: "Liver (single-organ focus; multi-organ blends available)",
    sourcing: "New Zealand grass-fed, pasture-raised",
    processing: "Freeze-dried (lyophilized)",
    certifications: "None — transparent COA instead",
    coaPublic: true,
    informedSport: false,
    heavyMetalTested: true,
    fillersAdded: false,
    grassFedClaim: true,
    approxRetinolPerServing: "~50,000 IU retinol equivalent",
    slug: "ancestral-supplements-beef-liver",
    bestFor: "Sourcing-conscious buyers who want NZ provenance + COA data",
    keyStrength: "Most transparent sourcing + COA in the category",
    keyWeakness: "FDA warning letter issued 2025; single-organ focus in bestselling SKU",
  },
  {
    name: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    founder: "Dr. Paul Saladino (Carnivore MD)",
    rating: 9 as ReviewRating,
    priceBottle: "$55",
    servings: "30",
    pricePerServing: "$1.83",
    capsPerServing: "6",
    organs: "Liver, Heart, Kidney, Spleen, Pancreas (multi-organ blend)",
    sourcing: "US regenerative farms (specific farms on website)",
    processing: "Freeze-dried (lyophilized)",
    certifications: "Informed Sport",
    coaPublic: true,
    informedSport: true,
    heavyMetalTested: true,
    fillersAdded: false,
    grassFedClaim: true,
    approxRetinolPerServing: "Lower — diluted across 5 organs",
    slug: "heart-and-soil-beef-organs",
    bestFor: "Athletes, drug-tested competitors, those wanting full nose-to-tail nutrition",
    keyStrength: "Only Informed Sport certified brand in this space",
    keyWeakness: "Highest price; individual organ doses not disclosed",
  },
];

const comparisonRows = [
  { label: "Price / bottle", vals: [products[0].priceBottle, products[1].priceBottle] },
  { label: "Price / serving", vals: [products[0].pricePerServing, products[1].pricePerServing] },
  { label: "Caps / serving", vals: [products[0].capsPerServing, products[1].capsPerServing] },
  { label: "Organs included", vals: [products[0].organs, products[1].organs] },
  { label: "Sourcing", vals: [products[0].sourcing, products[1].sourcing] },
  { label: "Processing", vals: [products[0].processing, products[1].processing] },
  { label: "Informed Sport", vals: ["No", "Yes ✓"] },
  { label: "Heavy metal COA", vals: ["Yes ✓ (public)", "Yes ✓ (public)"] },
  { label: "Fillers / additives", vals: ["None", "None"] },
  { label: "Grass-fed", vals: ["NZ pasture (verified)", "US regenerative (verified)"] },
];

const categoryWinners = [
  { category: "Sourcing Transparency", winner: "Ancestral Supplements", note: "NZ sourcing with published batch-level COA is the gold standard in the category." },
  { category: "Third-Party Certification", winner: "Heart & Soil", note: "Informed Sport certification is meaningfully better than no certification — essential for drug-tested athletes." },
  { category: "Organ Variety", winner: "Heart & Soil", note: "5-organ blend vs liver-focused Ancestral lineup. More comprehensive nutrient coverage." },
  { category: "Price per Serving", winner: "Ancestral Supplements", note: "$1.50 vs $1.83 — Ancestral is 18% cheaper per serving at recommended dose." },
  { category: "Community Trust", winner: "Tie", note: "Both brands are widely trusted in the carnivore community. Heart & Soil benefits from Dr. Saladino's audience; Ancestral from longer track record." },
  { category: "Formulation Transparency", winner: "Ancestral Supplements", note: "Ancestral discloses exact organ weight per capsule. Heart & Soil uses a proprietary blend — individual organ doses unknown." },
  { category: "FDA Compliance History", winner: "Heart & Soil", note: "Ancestral Supplements received an FDA warning letter in 2025. Heart & Soil has a cleaner compliance record." },
];

const faqItems = [
  {
    q: "Are Ancestral Supplements and Heart & Soil the same quality?",
    a: "Both are premium brands with verified NZ or US regenerative sourcing and published COA data. The key differences are: Ancestral has better sourcing transparency (NZ + batch COA); Heart & Soil has Informed Sport certification and a more comprehensive organ blend. Neither is clearly 'better' — it depends on your priorities.",
  },
  {
    q: "Which is better for athletes?",
    a: "Heart & Soil, unambiguously. It's the only beef organ supplement with Informed Sport certification — meaning every batch is tested for WADA-banned substances. If you're a competitive athlete in a tested sport, this matters. Ancestral Supplements has no third-party drug testing.",
  },
  {
    q: "Which is better for sourcing transparency?",
    a: "Ancestral Supplements. Their New Zealand pasture-raised sourcing is the most documented in the category — they publish batch-specific COAs for heavy metals and confirm the NZ supply chain on their website. Heart & Soil's US regenerative sourcing is also transparent, but NZ is generally considered the higher regulatory standard.",
  },
  {
    q: "Can I take both together?",
    a: "Not recommended without medical supervision. Both are high in retinol (preformed vitamin A). Stacking them could push you toward or over the tolerable upper intake level of 10,000 IU/day for preformed vitamin A. Choose one brand and stick to the recommended dose.",
  },
  {
    q: "What's the FDA warning letter about for Ancestral Supplements?",
    a: "In 2025, the FDA issued a warning letter to Ancestral Supplements regarding structure/function claims made on their website — specifically, claims implying their products diagnose, treat, cure, or prevent disease (which requires drug approval). This doesn't necessarily mean the products are unsafe; it means the marketing language crossed a regulatory line. The FDA warning was about labeling and claims, not product contamination.",
  },
];

export default function AncestralVsHeartAndSoilPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ancestral Supplements vs Heart & Soil: Which Is Better in 2026?",
    url: "https://fitlabreviews.com/compare/ancestral-supplements-vs-heart-and-soil",
    datePublished: "2026-01-15",
    dateModified: "2026-05-27",
    author: { "@type": "Organization", name: "Fitlabreviews Editorial Team" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
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
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://fitlabreviews.com/compare" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ancestral Supplements vs Heart & Soil",
        item: "https://fitlabreviews.com/compare/ancestral-supplements-vs-heart-and-soil",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/compare" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Compare</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Ancestral vs Heart & Soil</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DIRECT COMPARISON · 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16, maxWidth: 720, margin: "0 auto 16px" }}>
            Ancestral Supplements{" "}
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5C5650" }}>vs</em>{" "}
            Heart & Soil
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", maxWidth: 560, margin: "0 auto 8px" }}>
            The two dominant beef organ supplement brands — compared on sourcing, COA transparency, organ variety, certifications, and price.
          </p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: May 2026 · Both products independently evaluated
          </p>
        </div>

        {/* Score cards */}
        <div className="layout-compare-cards" style={{ marginBottom: 56 }}>
          {products.map((p, i) => (
            <>
              <div key={p.slug} style={{ padding: 28, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 4, textTransform: "uppercase" }}>{p.brand}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", marginBottom: 12 }}>Founded by {p.founder}</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{p.name}</h3>
                <div style={{ display: "flex", marginBottom: 12 }}>
                  <ReviewScoreBadge rating={p.rating} size="md" />
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", marginBottom: 6 }}>
                  <strong style={{ fontWeight: 600 }}>Best for:</strong> {p.bestFor}
                </p>
                <p style={{ fontSize: 12, color: "#3B6D11" }}>
                  <strong style={{ fontWeight: 600 }}>Key strength:</strong> {p.keyStrength}
                </p>
              </div>
              {i === 0 && (
                <div key="vs" className="compare-vs-hide" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 400, fontStyle: "italic", color: "#D4C9B8" }}>vs</span>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Specs table */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Specs" figure="§ 01" title="Side-by-side" titleItalic="breakdown" size="sm" />
          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 560, width: "100%", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                  <th style={{ padding: "12px 20px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Metric</th>
                  {products.map((p) => (
                    <th key={p.slug} style={{ padding: "12px 20px", textAlign: "center", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{p.brand}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "12px 20px", fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{row.label}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} style={{ padding: "12px 20px", textAlign: "center", fontSize: 13, color: val.includes("✓") ? "#3B6D11" : "#1A1714", fontWeight: val.includes("✓") ? 600 : 400 }}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Category winners */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Category Winners" figure="§ 02" title="Who wins" titleItalic="each round" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {categoryWinners.map((item, i) => (
              <div key={item.category} className="layout-winners-row" style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div style={{ padding: "14px 20px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.category}</div>
                <div className="winners-col-border" style={{ padding: "14px 20px", borderLeft: "1px solid #EDE8DF" }}>
                  <span style={{ padding: "3px 10px", backgroundColor: item.winner === "Tie" ? "#EDE8DF" : "#1A1714", color: item.winner === "Tie" ? "#5C5650" : "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    {item.winner}
                  </span>
                </div>
                <div className="winners-col-border" style={{ padding: "14px 20px", fontSize: 13, color: "#5C5650", borderLeft: "1px solid #EDE8DF" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep dive: Sourcing */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Key Differentiator" figure="§ 03" title="The sourcing" titleItalic="question" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4622D", marginBottom: 12 }}>Ancestral Supplements</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                New Zealand is widely considered the highest-standard source for beef organ supplements. NZ has strict regulations on pesticide use, antibiotic restriction, and pasture-feeding requirements. Ancestral publishes batch COAs showing results for lead, cadmium, mercury, and arsenic — you can verify the specific lot number you received. This level of transparency is rare in the supplement industry.
              </p>
            </div>
            <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#185FA5", marginBottom: 12 }}>Heart & Soil</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
                Heart & Soil sources from US regenerative farms, which it names on its website. Regenerative agriculture goes beyond organic certification — it focuses on soil health, carbon sequestration, and animal welfare. The farms used include Polyface and similar model farms. The Informed Sport certification means every batch is tested for over 200 banned substances, which is a different type of quality assurance than sourcing documentation alone.
              </p>
            </div>
          </div>
        </section>

        {/* FDA warning note */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#FEF9F7", borderColor: "#E5C4B8" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B2020", marginBottom: 12 }}>CONTEXT: THE 2025 FDA WARNING LETTER</p>
            <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, marginBottom: 12 }}>
              In 2025, Ancestral Supplements received an FDA warning letter. This has been misrepresented in some online discussions, so here's what it actually means:
            </p>
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              {[
                "The warning was about structure/function claims on their website — language implying their products treat or cure disease, which requires FDA drug approval.",
                "It was NOT about contamination, safety, or product quality failures.",
                "The FDA issues hundreds of such letters to supplement companies annually — it's a compliance issue, not a product recall.",
                "Ancestral Supplements updated their website claims in response. Their COA data and sourcing transparency remain unchanged.",
              ].map((point, i) => (
                <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, padding: "4px 0", display: "flex", gap: 10 }}>
                  <span style={{ color: "#8A8480", flexShrink: 0 }}>—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final recommendation */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Bottom Line" figure="§ 04" title="Which one" titleItalic="should you buy?" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Choose If...</p>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>Ancestral Supplements</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Sourcing provenance is your top priority",
                  "You want batch-specific COA data",
                  "You prefer single-organ purity (liver)",
                  "Budget matters — 18% cheaper per serving",
                  "You're not a drug-tested athlete",
                ].map((r) => (
                  <li key={r} style={{ fontSize: 13, color: "#8A8480", padding: "4px 0" }}>· {r}</li>
                ))}
              </ul>
              <Link href="/reviews/ancestral-supplements-beef-liver" style={{ display: "inline-block", marginTop: 16, fontSize: 12, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>
                Read full review →
              </Link>
            </div>
            <div style={{ padding: 28, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Choose If...</p>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Heart & Soil</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "You're a drug-tested competitive athlete",
                  "You want nose-to-tail multi-organ nutrition",
                  "Third-party certification matters to you",
                  "You trust Dr. Paul Saladino's formulations",
                  "Price is secondary to certification",
                ].map((r) => (
                  <li key={r} style={{ fontSize: 13, color: "#5C5650", padding: "4px 0" }}>· {r}</li>
                ))}
              </ul>
              <Link href="/reviews/heart-and-soil-beef-organs" style={{ display: "inline-block", marginTop: 16, fontSize: 12, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>
                Read full review →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="FAQ" figure="§ 05" title="Common" titleItalic="questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {faqItems.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", borderBottom: i < faqItems.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <SectionHeading label="See Also" figure="§ 06" title="Related" titleItalic="content" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { title: "7 Best Beef Organ Supplements 2026", desc: "Full category roundup with all 7 ranked brands.", href: "/best/beef-organ-supplements" },
              { title: "Ancestral Supplements Beef Liver Review", desc: "Full deep-dive review with COA analysis and nutrient breakdown.", href: "/reviews/ancestral-supplements-beef-liver" },
              { title: "Heart & Soil Beef Organs Review", desc: "Detailed review of the Informed Sport certified multi-organ blend.", href: "/reviews/heart-and-soil-beef-organs" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ padding: 18, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
