import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
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
    founder: "Brian Johnson (independent; formerly Liver King)",
    rating: 9 as ReviewRating,
    priceBottle: "$45",
    servings: "30",
    pricePerServing: "$1.50",
    pricePerMonth: "$45",
    capsPerServing: "6",
    organs: "Liver (primary SKU); multi-organ blends also available",
    sourcing: "New Zealand grass-fed, pasture-raised",
    processing: "Freeze-dried (lyophilized)",
    certifications: "No 3rd-party cert — publishes COA instead",
    coaPublic: true,
    informedSport: false,
    heavyMetalTested: true,
    fillersAdded: false,
    grassFedClaim: true,
    approxRetinolPerServing: "~50,000 IU (very high — single-organ liver)",
    slug: "ancestral-supplements-beef-organs",
    reviewUrl: "/reviews/ancestral-supplements-beef-liver",
    buyUrl: "https://amzn.to/43xRRca",
    image: "/products/ancestral-supplements-beefliv.webp",
    bestFor: "Sourcing-conscious buyers who want NZ provenance + verifiable COA",
    keyStrength: "Most transparent sourcing + batch-level COA in the category",
    keyWeakness: "FDA warning letter (2025); no Informed Sport cert",
    verdict: "Best for buyers who prioritise supply-chain documentation over certification badges. NZ sourcing + published COAs is genuinely hard to beat.",
  },
  {
    name: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    founder: "Dr. Paul Saladino (Carnivore MD)",
    rating: 9 as ReviewRating,
    priceBottle: "$55",
    servings: "30",
    pricePerServing: "$1.83",
    pricePerMonth: "$55",
    capsPerServing: "6",
    organs: "Liver, Heart, Kidney, Spleen, Pancreas (5-organ blend)",
    sourcing: "US regenerative farms (named on website)",
    processing: "Freeze-dried (lyophilized)",
    certifications: "Informed Sport certified",
    coaPublic: true,
    informedSport: true,
    heavyMetalTested: true,
    fillersAdded: false,
    grassFedClaim: true,
    approxRetinolPerServing: "Lower per capsule — diluted across 5 organs",
    slug: "heart-and-soil-beef-organs",
    reviewUrl: "/reviews/heart-and-soil-beef-organs",
    buyUrl: "https://amzn.to/3Q2X5ts",
    image: "/products/HEART-SOIL.webp",
    bestFor: "Drug-tested athletes, those wanting nose-to-tail multi-organ coverage",
    keyStrength: "Only Informed Sport certified brand in the beef organ category",
    keyWeakness: "Highest price; individual organ doses not disclosed (proprietary blend)",
    verdict: "Best for athletes who need batch-tested purity and for buyers who want a single product covering all five major organs.",
  },
];

const comparisonRows = [
  { label: "Price / bottle", vals: [products[0].priceBottle, products[1].priceBottle], winner: 0 },
  { label: "Price / serving", vals: [products[0].pricePerServing, products[1].pricePerServing], winner: 0 },
  { label: "Caps / serving", vals: [products[0].capsPerServing, products[1].capsPerServing], winner: -1 },
  { label: "Organs included", vals: ["Liver-focused (1 main)", "5-organ blend"], winner: 1 },
  { label: "Sourcing", vals: ["NZ grass-fed (verified)", "US regenerative (named farms)"], winner: -1 },
  { label: "Processing", vals: ["Freeze-dried", "Freeze-dried"], winner: -1 },
  { label: "Informed Sport cert.", vals: ["No", "Yes ✓"], winner: 1 },
  { label: "Heavy metal COA", vals: ["Yes ✓ (batch-level)", "Yes ✓ (public)"], winner: 0 },
  { label: "Individual organ doses", vals: ["Disclosed ✓", "Proprietary blend ✗"], winner: 0 },
  { label: "Fillers / additives", vals: ["None ✓", "None ✓"], winner: -1 },
  { label: "Grass-fed verified", vals: ["NZ pasture (certified)", "US regenerative (named)"], winner: -1 },
  { label: "Retinol risk", vals: ["Higher (liver-only)", "Lower (diluted)"], winner: 1 },
];

const nutrientRows = [
  { nutrient: "Retinol (Vitamin A)", source: "Liver", ancestral: "✓✓✓ Very High", heartSoil: "✓✓ High", ancestralWins: true },
  { nutrient: "Vitamin B12", source: "Liver + Kidney", ancestral: "✓✓✓ Very High", heartSoil: "✓✓ High", ancestralWins: true },
  { nutrient: "Folate", source: "Liver", ancestral: "✓✓✓ Very High", heartSoil: "✓✓ Moderate", ancestralWins: true },
  { nutrient: "Heme Iron", source: "Liver + Spleen", ancestral: "✓✓ High", heartSoil: "✓✓ High", ancestralWins: null },
  { nutrient: "CoQ10", source: "Heart", ancestral: "Trace only", heartSoil: "✓✓ High", ancestralWins: false },
  { nutrient: "Selenium", source: "Kidney", ancestral: "Trace only", heartSoil: "✓✓ Moderate", ancestralWins: false },
  { nutrient: "Copper", source: "Liver", ancestral: "✓✓✓ Very High", heartSoil: "✓✓ Moderate", ancestralWins: true },
  { nutrient: "Digestive Enzymes", source: "Pancreas", ancestral: "Not present", heartSoil: "✓ Present", ancestralWins: false },
  { nutrient: "Tuftsin (peptide)", source: "Spleen", ancestral: "Not in main SKU", heartSoil: "✓ Present", ancestralWins: false },
  { nutrient: "Choline", source: "Liver", ancestral: "✓✓✓ Very High", heartSoil: "✓✓ High", ancestralWins: true },
];

const categoryWinners = [
  { category: "Sourcing Transparency", winner: "Ancestral Supplements", note: "NZ sourcing with published batch-level COA is the gold standard. Ancestral discloses the exact lot you're consuming." },
  { category: "Third-Party Certification", winner: "Heart & Soil", note: "Informed Sport certification tests every batch for 200+ WADA-banned substances. Essential for drug-tested athletes." },
  { category: "Organ Variety", winner: "Heart & Soil", note: "5-organ blend vs liver-focused Ancestral lineup. More comprehensive micronutrient coverage across CoQ10, selenium, enzymes." },
  { category: "Price per Serving", winner: "Ancestral Supplements", note: "$1.50 vs $1.83 — Ancestral is 18% cheaper per serving. Saves ~$120/year if you take it daily." },
  { category: "Label Transparency", winner: "Ancestral Supplements", note: "Ancestral discloses exact organ weight per capsule. Heart & Soil uses a proprietary blend — individual organ doses unknown." },
  { category: "Retinol Safety", winner: "Heart & Soil", note: "Liver-only formulas carry higher retinol risk. 5-organ dilution reduces this — safer for daily use and for those concerned about vitamin A toxicity." },
  { category: "Community Trust", winner: "Tie", note: "Both brands are trusted in carnivore and ancestral health communities. Heart & Soil benefits from Dr. Saladino's audience; Ancestral from its longer track record." },
  { category: "FDA Compliance", winner: "Heart & Soil", note: "Ancestral received an FDA warning letter in 2025 over marketing claims. Heart & Soil has a cleaner compliance record." },
];

const faqItems = [
  {
    q: "Are Ancestral Supplements and Heart & Soil the same quality?",
    a: "Both are premium brands with verified NZ or US regenerative sourcing and published COA data. The key differences: Ancestral has better sourcing transparency (NZ + batch COA + disclosed organ doses); Heart & Soil has Informed Sport certification and a more comprehensive 5-organ blend. Neither is clearly 'better' overall — it depends on your priorities.",
  },
  {
    q: "Which is better for drug-tested athletes?",
    a: "Heart & Soil, without question. It's the only beef organ supplement with Informed Sport certification — every batch is tested against WADA's prohibited substance list. If you're in a tested sport, this isn't a preference issue: Ancestral Supplements has no batch-level drug testing whatsoever.",
  },
  {
    q: "Which has better sourcing transparency?",
    a: "Ancestral Supplements. Their New Zealand pasture-raised sourcing is the most documented in the category — they publish batch-specific COAs for heavy metals (lead, cadmium, mercury, arsenic) and you can look up the specific lot number on your bottle. Heart & Soil's US regenerative sourcing is credible and they name the farms, but NZ regulatory standards are generally considered the global benchmark for organ supplement sourcing.",
  },
  {
    q: "Can I take both together?",
    a: "Not recommended without medical supervision. Both are high in retinol (preformed vitamin A from liver). Stacking them could push you over the tolerable upper intake level of 10,000 IU/day for preformed vitamin A — particularly with Ancestral's liver-focused formula. If you want to combine products, choose one brand as your primary and consult a physician about your total retinol intake.",
  },
  {
    q: "Which gives more CoQ10?",
    a: "Heart & Soil wins significantly here. CoQ10 is concentrated in cardiac muscle — beef heart is the dietary source. Ancestral's liver-only formula contains negligible CoQ10. Heart & Soil's 5-organ blend includes beef heart, which is the reason organ supplements are often recommended for mitochondrial and cardiovascular support.",
  },
  {
    q: "What's the FDA warning letter about for Ancestral Supplements?",
    a: "In 2025, the FDA issued a warning letter regarding structure/function claims on Ancestral's website — specifically, language implying their products diagnose, treat, cure, or prevent disease (which requires FDA drug approval). This is a marketing compliance issue, not a product safety failure. The FDA issues similar letters to hundreds of supplement companies annually. Ancestral's COA data, sourcing transparency, and product quality are unaffected. They updated their website claims in response.",
  },
  {
    q: "Which is better value for money?",
    a: "Ancestral Supplements at $1.50/serving vs Heart & Soil at $1.83/serving. The $0.33/serving difference compounds to roughly $120/year. Whether that premium is worth it depends on what you're buying: for athletes who need Informed Sport certification, Heart & Soil's premium is justified. For general use, Ancestral's value is excellent given NZ sourcing quality and COA transparency.",
  },
];

export default function AncestralVsHeartAndSoilPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ancestral Supplements vs Heart & Soil: Which Is Better in 2026?",
    url: "https://fitlabreviews.com/compare/ancestral-supplements-vs-heart-and-soil",
    datePublished: "2026-01-15",
    dateModified: "2026-05-28",
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
      { "@type": "ListItem", position: 3, name: "Ancestral Supplements vs Heart & Soil", item: "https://fitlabreviews.com/compare/ancestral-supplements-vs-heart-and-soil" },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <Link href="/compare" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Compare</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Ancestral vs Heart & Soil</span>
        </div>
      </div>

      {/* Comparison Banner */}
      <div style={{ width: "100%", background: "linear-gradient(145deg, #1E1208 0%, #120C06 100%)", position: "relative", overflow: "hidden", minHeight: 260 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          {/* Left product */}
          <div style={{ flex: 1, minWidth: 180, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 110, height: 130, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
              <img src="/products/ancestral-supplements-beefliv.webp" alt="Ancestral Supplements Beef Liver" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))" }} />
            </div>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9", textAlign: "center" }}>Ancestral Supplements</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <a href="https://amzn.to/43xRRca" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Buy ↗
              </a>
              <Link href="/reviews/ancestral-supplements-beef-liver" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", border: "1px solid rgba(242,235,217,0.2)", color: "#A89880", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Review →
              </Link>
            </div>
          </div>

          {/* VS */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)", marginBottom: 8 }}>DIRECT COMPARISON · 2026</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, fontStyle: "italic", color: "rgba(242,235,217,0.2)", lineHeight: 1 }}>vs</p>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginTop: 8 }}>Both scored 9 / 10 FSP</p>
          </div>

          {/* Right product */}
          <div style={{ flex: 1, minWidth: 180, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 110, height: 130, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
              <img src="/products/HEART-SOIL.webp" alt="Heart & Soil Beef Organs" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))" }} />
            </div>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9", textAlign: "center" }}>Heart & Soil</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <a href="https://amzn.to/3Q2X5ts" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Buy ↗
              </a>
              <Link href="/reviews/heart-and-soil-beef-organs" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", border: "1px solid rgba(242,235,217,0.2)", color: "#A89880", fontSize: 11, fontWeight: 600, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Review →
              </Link>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F2EBD9)" }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Intro */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>FITLAB INDEPENDENT COMPARISON · Last updated May 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16, maxWidth: 740 }}>
            Ancestral Supplements <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5C5650" }}>vs</em> Heart & Soil —{" "}
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "#8A8480" }}>Which Should You Buy?</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", maxWidth: 700, lineHeight: 1.75 }}>
            Both brands score 9/10 on the Fitlab Scoring Protocol and dominate the premium beef organ supplement market. The decision comes down to one question: do you need Informed Sport drug-testing certification, or do you prioritise verifiable NZ sourcing with batch-specific COA data?
          </p>
        </div>

        {/* Product hero cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 56 }}>
          {products.map((p) => (
            <div key={p.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 14, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>
              {/* Image area */}
              <div style={{ height: 180, backgroundColor: "#EDE8DF", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, position: "relative" }}>
                <img src={p.image} alt={p.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))" }} />
                <div style={{ position: "absolute", top: 12, right: 12, padding: "3px 8px", backgroundColor: "#1A1714", borderRadius: 5 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880" }}>{p.certifications.includes("Informed") ? "Informed Sport ✓" : "COA Published ✓"}</span>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>{p.brand}</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{p.name}</h2>
                  <p style={{ fontSize: 12, color: "#8A8480", marginTop: 2 }}>Founded by {p.founder}</p>
                </div>
                <ReviewScoreBadge rating={p.rating} size="md" />
                {/* Key stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {[
                    { label: "Price/serving", val: p.pricePerServing },
                    { label: "Price/bottle", val: p.priceBottle },
                    { label: "Caps/serving", val: p.capsPerServing },
                    { label: "Organs", val: p.informedSport ? "5-organ blend" : "Liver-focused" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ padding: "8px 10px", backgroundColor: "#EDE8DF", borderRadius: 6 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>{stat.label}</p>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{stat.val}</p>
                    </div>
                  ))}
                </div>
                {/* Best for / strength */}
                <div style={{ padding: "12px 14px", backgroundColor: "#EDE8DF", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
                  <p style={{ fontSize: 11, color: "#1A1714", fontWeight: 600, marginBottom: 4 }}>Best for</p>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{p.bestFor}</p>
                </div>
                <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, flex: 1 }}>{p.verdict}</p>
              </div>
              {/* CTA footer */}
              <div style={{ padding: "14px 22px", borderTop: "1px solid #D4C9B8", display: "flex", gap: 10 }}>
                <a href={p.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ flex: 2, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 16px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Buy on Amazon <ExternalLink size={12} />
                </a>
                <Link href={p.reviewUrl} style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 12px", border: "1px solid #D4C9B8", color: "#7B3B1A", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Full review →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Specs table */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Specs" figure="§ 01" title="Side-by-side" titleItalic="breakdown" size="sm" />
          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 560, width: "100%", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#1A1714" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Metric</th>
                  {products.map((p) => (
                    <th key={p.slug} style={{ padding: "14px 20px", textAlign: "center", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#F2EBD9" }}>{p.brand}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "12px 20px", fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{row.label}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} style={{ padding: "12px 20px", textAlign: "center", fontSize: 13, color: val.includes("✓") ? "#2D6A4F" : val.includes("✗") ? "#9B2020" : "#1A1714", fontWeight: (row.winner === j) ? 700 : 400 }}>
                        {row.winner === j && (
                          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C4622D", marginRight: 6, verticalAlign: "middle" }} />
                        )}
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>· Orange dot = winner in that category</p>
        </section>

        {/* Nutrient breakdown */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Nutrient Coverage" figure="§ 02" title="What each product" titleItalic="actually provides" size="sm" />
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, marginBottom: 20, maxWidth: 700 }}>
            The organ composition determines your nutrient profile. Ancestral's liver-focus gives you very high retinol, B12, folate, and copper. Heart & Soil's 5-organ blend adds CoQ10 (heart), selenium (kidney), enzymes (pancreas), and tuftsin (spleen) at the cost of some depth in the liver nutrients.
          </p>
          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 560, width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  <th style={{ padding: "12px 20px", textAlign: "left", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Nutrient</th>
                  <th style={{ padding: "12px 20px", textAlign: "left", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Best Source</th>
                  <th style={{ padding: "12px 20px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#F2EBD9", fontFamily: "var(--font-playfair), Georgia, serif" }}>Ancestral</th>
                  <th style={{ padding: "12px 20px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#F2EBD9", fontFamily: "var(--font-playfair), Georgia, serif" }}>Heart & Soil</th>
                </tr>
              </thead>
              <tbody>
                {nutrientRows.map((row, i) => (
                  <tr key={row.nutrient} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "11px 20px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{row.nutrient}</td>
                    <td style={{ padding: "11px 20px", fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>{row.source}</td>
                    <td style={{ padding: "11px 20px", textAlign: "center", fontSize: 12, color: row.ancestralWins === true ? "#2D6A4F" : row.ancestralWins === false ? "#9B2020" : "#5C5650", fontWeight: row.ancestralWins === true ? 600 : 400 }}>{row.ancestral}</td>
                    <td style={{ padding: "11px 20px", textAlign: "center", fontSize: 12, color: row.ancestralWins === false ? "#2D6A4F" : row.ancestralWins === true ? "#9B2020" : "#5C5650", fontWeight: row.ancestralWins === false ? 600 : 400 }}>{row.heartSoil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginTop: 8 }}>Green = winner in that nutrient. Estimates based on organ composition at standard serving doses.</p>
        </section>

        {/* Sourcing deep dive */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Key Differentiator" figure="§ 03" title="The sourcing" titleItalic="question" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
            <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <img src="/products/ancestral-supplements-beefliv.webp" alt="Ancestral Supplements" style={{ width: 48, height: 56, objectFit: "contain" }} />
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4622D" }}>Ancestral Supplements</p>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>New Zealand, batch-verified</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginBottom: 12 }}>
                New Zealand is widely considered the highest regulatory standard for beef organ supplements. NZ has strict controls on pesticide use, antibiotic restriction, and pasture requirements. Ancestral publishes batch-specific COAs covering lead, cadmium, mercury, and arsenic — you can verify the exact lot you purchased. This level of traceability is rare in the supplement industry.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {["NZ Ministry of Primary Industries oversight", "Year-round pasture feeding (climate default)", "Batch-level heavy metal COA published", "Exact organ dose per capsule disclosed"].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckCircle size={13} color="#2D6A4F" style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 12, color: "#5C5650" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <img src="/products/HEART-SOIL.webp" alt="Heart & Soil" style={{ width: 48, height: 56, objectFit: "contain" }} />
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#185FA5" }}>Heart & Soil</p>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>US regenerative, Informed Sport tested</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, marginBottom: 12 }}>
                Heart & Soil sources from named US regenerative farms, visible on their website. Regenerative agriculture goes beyond organic — it focuses on soil health, carbon sequestration, and animal welfare. Informed Sport certification adds a separate layer of quality assurance: every batch is independently tested against 200+ WADA-prohibited substances, which matters more than sourcing for competitive athletes.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {["Named US regenerative farms (farm-to-capsule transparency)", "Informed Sport batch certification (200+ substances)", "5-organ blend: liver, heart, kidney, spleen, pancreas", "Heavy metal COA published alongside certification"].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckCircle size={13} color="#2D6A4F" style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 12, color: "#5C5650" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value analysis */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Price Analysis" figure="§ 04" title="Value &" titleItalic="cost comparison" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Per serving", ancestral: "$1.50", heartSoil: "$1.83", winner: "Ancestral" },
              { label: "Per month (daily use)", ancestral: "$45", heartSoil: "$55", winner: "Ancestral" },
              { label: "Per year (daily use)", ancestral: "$540", heartSoil: "$660", winner: "Ancestral" },
              { label: "Annual premium for H&S", ancestral: "—", heartSoil: "+$120/year", winner: "Context" },
            ].map((row) => (
              <div key={row.label} style={{ padding: "16px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>{row.label}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <p style={{ fontSize: 10, color: "#8A8480", marginBottom: 2 }}>Ancestral</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 16, fontWeight: 700, color: row.winner === "Ancestral" ? "#2D6A4F" : "#1A1714" }}>{row.ancestral}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 10, color: "#8A8480", marginBottom: 2 }}>Heart & Soil</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 16, fontWeight: 700, color: row.winner === "Heart & Soil" ? "#2D6A4F" : "#1A1714" }}>{row.heartSoil}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #7B3B1A" }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
              <strong style={{ color: "#1A1714" }}>Is the $120/year Heart & Soil premium worth it?</strong> For drug-tested athletes: yes, absolutely — Informed Sport batch testing is not optional in that context. For general users: Ancestral&apos;s NZ sourcing and batch COA provide strong quality assurance at a lower price. The premium only makes sense if you specifically need certification documentation.
            </p>
          </div>
        </section>

        {/* Category winners */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Category Winners" figure="§ 05" title="Who wins" titleItalic="each round" size="sm" />
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {categoryWinners.map((item, i) => (
              <div
                key={item.category}
                style={{ borderBottom: i < categoryWinners.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
                className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_2fr] lg:items-center"
              >
                {/* Category label */}
                <div
                  style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  className="px-4 pt-3 pb-1 lg:px-5 lg:py-[14px]"
                >
                  {item.category}
                </div>
                {/* Winner badge */}
                <div className="px-4 pb-2 lg:px-5 lg:py-[14px] lg:border-l lg:border-r lg:border-[#EDE8DF]">
                  <span style={{ padding: "4px 12px", backgroundColor: item.winner === "Tie" ? "#EDE8DF" : "#1A1714", color: item.winner === "Tie" ? "#5C5650" : "#F2EBD9", fontSize: 10, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap", display: "inline-block" }}>
                    {item.winner}
                  </span>
                </div>
                {/* Note */}
                <div
                  style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}
                  className="px-4 pb-3 lg:px-5 lg:py-[14px]"
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FDA warning */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ padding: 24, border: "1px solid #E5C4B8", borderRadius: 12, backgroundColor: "#FFF8F0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
              <AlertTriangle size={18} color="#9B2020" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B2020" }}>CONTEXT: THE 2025 FDA WARNING LETTER — ANCESTRAL SUPPLEMENTS</p>
            </div>
            <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, marginBottom: 12 }}>
              In 2025, Ancestral Supplements received an FDA warning letter. This is frequently misrepresented online:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { type: "clarify", text: "The warning was about structure/function claims on their website — language implying the products treat or cure disease, which requires FDA drug approval." },
                { type: "clarify", text: "It was NOT about contamination, safety failures, or product quality. No recall was issued." },
                { type: "clarify", text: "The FDA issues hundreds of similar letters to supplement companies annually — it's a marketing compliance issue, not a product indictment." },
                { type: "clarify", text: "Ancestral updated their website claims in response. Their COA transparency, sourcing, and formulations remain unchanged." },
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom line / recommendation */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Bottom Line" figure="§ 06" title="Which one" titleItalic="should you buy?" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {/* Ancestral */}
            <div style={{ backgroundColor: "#1A1714", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Choose Ancestral If…</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <img src="/products/ancestral-supplements-beefliv.webp" alt="Ancestral Supplements" style={{ width: 44, height: 52, objectFit: "contain" }} />
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9" }}>Ancestral Supplements</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "Sourcing provenance is your top priority",
                    "You want batch-specific COA data for your exact lot",
                    "You prefer single-organ liver purity and depth",
                    "Budget matters — 18% cheaper, saves ~$120/year",
                    "You're not a drug-tested competitive athlete",
                    "Disclosed individual organ doses matter to you",
                  ].map((r) => (
                    <li key={r} style={{ fontSize: 13, color: "#8A8480", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={12} color="#C4622D" style={{ flexShrink: 0, marginTop: 2 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 28px", borderTop: "1px solid #2D2520", display: "flex", gap: 10 }}>
                <a href="https://amzn.to/43xRRca" target="_blank" rel="nofollow noopener noreferrer" style={{ flex: 2, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Buy on Amazon <ExternalLink size={11} />
                </a>
                <Link href="/reviews/ancestral-supplements-beef-liver" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 12px", border: "1px solid #3D3830", color: "#8A8480", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Review →
                </Link>
              </div>
            </div>

            {/* Heart & Soil */}
            <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Choose Heart & Soil If…</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <img src="/products/HEART-SOIL.webp" alt="Heart & Soil" style={{ width: 44, height: 52, objectFit: "contain" }} />
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714" }}>Heart & Soil</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "You're a drug-tested competitive athlete (Informed Sport is non-negotiable)",
                    "You want nose-to-tail nutrition from a single product",
                    "CoQ10 (heart) and selenium (kidney) matter to you",
                    "Third-party certification is your primary trust signal",
                    "Price is secondary to purity documentation",
                  ].map((r) => (
                    <li key={r} style={{ fontSize: 13, color: "#5C5650", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={12} color="#2D6A4F" style={{ flexShrink: 0, marginTop: 2 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "16px 28px", borderTop: "1px solid #D4C9B8", display: "flex", gap: 10 }}>
                <a href="https://amzn.to/3Q2X5ts" target="_blank" rel="nofollow noopener noreferrer" style={{ flex: 2, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", backgroundColor: "#7B3B1A", color: "#F2EBD9", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Buy on Amazon <ExternalLink size={11} />
                </a>
                <Link href="/reviews/heart-and-soil-beef-organs" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 12px", border: "1px solid #D4C9B8", color: "#7B3B1A", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Review →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — accordion */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="FAQ" figure="§ 07" title="Common" titleItalic="questions" size="sm" />
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {faqItems.map((faq, i) => (
              <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <summary>{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <div style={{ padding: "10px 16px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 40 }}>
          <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
            DISCLOSURE: This comparison contains affiliate links. We earn a small commission if you purchase via our links at no extra cost to you. Scores and editorial judgements are independent of affiliate arrangements.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Full disclosure →</Link>
          </p>
        </div>

        {/* Related */}
        <section style={{ marginBottom: 16 }}>
          <SectionHeading label="See Also" figure="§ 08" title="Related" titleItalic="content" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { title: "Best Beef Organ Supplements — Carnivore Diet (2026)", desc: "Full 9-product category roundup with FSP rankings.", href: "/best/beef-organ-supplements-carnivore-diet" },
              { title: "Ancestral Supplements Review — Full FSP Analysis", desc: "Deep-dive review with COA analysis, nutrient breakdown, and verdict.", href: "/reviews/ancestral-supplements-beef-liver" },
              { title: "Heart & Soil Review — Full FSP Analysis", desc: "Detailed review: Informed Sport certification, 5-organ formulation, and value assessment.", href: "/reviews/heart-and-soil-beef-organs" },
              { title: "Organ Supplement Reviews Hub", desc: "All 9 organ supplement reviews ranked by FSP score.", href: "/reviews" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ padding: 18, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 6, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
