import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Best ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Supplements — Fitlabreviews`,
    description: `Browse all reviewed supplements in this category. Evidence-based ratings, ingredient analysis, and price comparisons.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const keyIngredients = [
    { name: "Creatine Monohydrate", evidence: "strong" as EvidenceLevel, note: "The most researched ergogenic aid in sports science." },
    { name: "Beta-Alanine", evidence: "moderate" as EvidenceLevel, note: "Buffers lactic acid during high-intensity exercise." },
    { name: "Citrulline Malate", evidence: "moderate" as EvidenceLevel, note: "Improves blood flow and reduces fatigue." },
  ];

  const reviews = [
    { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark whey. Clean label, consistent yield.", publishedAt: "2025-04-10" },
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Best budget creatine in India — pure, clean, affordable.", publishedAt: "2025-03-08" },
    { slug: "muscleblaze-biozyme-whey", title: "MuscleBlaze Biozyme Whey", brand: "MuscleBlaze", category: "Protein Powder", rating: 8 as ReviewRating, verdict: "Best Indian brand — enhanced absorption and solid yield.", publishedAt: "2025-03-20" },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/reviews" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Reviews</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{categoryName}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>CATEGORY · CAT-01</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Supplement Reviews</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Best <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>{categoryName}</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620, marginBottom: 24 }}>
            Every product in this category has been independently reviewed for formula quality, label transparency, and value for money.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              type="search"
              placeholder="Filter products..."
              style={{ padding: "10px 16px", border: "1px solid #D4C9B8", borderRadius: 8, fontSize: 13, color: "#2D2926", backgroundColor: "#F8F2E4", fontFamily: "var(--font-dm-sans), sans-serif", outline: "none", minWidth: 220 }}
            />
            <Link href={`/best/${slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, textDecoration: "none" }}>
              See Top Picks →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Key Ingredients */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Key Ingredients" figure="§ 01" title="What to" titleItalic="look for" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {keyIngredients.map((ing, i) => (
              <div key={ing.name} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{ing.name}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{ing.note}</p>
                </div>
                <EvidenceBadge level={ing.evidence} showIcon={false} />
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Grid */}
        <section>
          <SectionHeading label="All Reviews" figure="§ 02" title="Reviewed" titleItalic="products" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {reviews.map((r) => (<ReviewCard key={r.slug} {...r} />))}
          </div>
        </section>
      </div>
    </div>
  );
}
