import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import type { ReviewRating } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — Brand Profile & Review`,
    description: `Complete brand profile with all FSP-scored reviews, product range, manufacturing standards, third-party testing, and editorial verdict.`,
    alternates: { canonical: `/brands/${slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const brand = {
    name: "Optimum Nutrition",
    country: "USA",
    founded: "1986",
    figure: "BRD-001",
    rating: 8,
    reviewCount: 12,
    summary: "Optimum Nutrition is one of the most established sports nutrition brands globally, known for consistent quality, transparent labelling, and third-party testing across their core product range.",
    categories: ["Protein Powder", "Creatine", "Pre-Workout", "Amino Acids"],
    verdict: "Reliable, well-tested, and widely available. Not the cheapest, but one of the most consistent brands in sports nutrition.",
    stats: [
      { label: "Avg. Score", value: "8.1 / 10" },
      { label: "Products Reviewed", value: "12" },
      { label: "3rd Party Tested", value: "Yes" },
      { label: "Founded", value: "1986" },
    ],
  };

  const reviews = [
    { slug: "optimum-nutrition-gold-standard-whey", title: "Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark whey. Clean label, consistent yield, widely available.", publishedAt: "2025-04-10" },
    { slug: "optimum-nutrition-creatine", title: "ON Micronised Creatine Powder", brand: "Optimum Nutrition", category: "Creatine", rating: 8 as ReviewRating, verdict: "Reliable brand with excellent mixability. Slightly pricier than AS-IT-IS but more available.", publishedAt: "2025-02-15" },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/brands" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Brands</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{brand.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>{brand.figure}</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            {brand.name}
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 680, marginBottom: 24 }}>{brand.summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {brand.categories.map((cat) => (
              <span key={cat} style={{ padding: "4px 12px", border: "1px solid #D4C9B8", borderRadius: 8, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Stats */}
        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {brand.stats.map((stat) => (
              <div key={stat.label} style={{ padding: "20px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 8 }}>{stat.label}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714" }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Reviewed Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {reviews.map((r) => (<ReviewCard key={r.slug} {...r} />))}
          </div>
        </section>

        {/* Verdict */}
        <section>
          <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Editorial Stance</p>
            <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.75 }}>{brand.verdict}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
