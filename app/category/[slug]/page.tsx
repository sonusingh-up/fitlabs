import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Best ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Supplements (2026)`,
    description: `Browse all FSP-scored supplements in this category for 2026. Evidence-based ratings, ingredient analysis, and price-per-serve comparisons.`,
    alternates: { canonical: `/category/${slug}` },
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
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Best budget creatine in USA — pure, clean, affordable.", publishedAt: "2025-03-08" },
    { slug: "muscleblaze-biozyme-whey", title: "MuscleBlaze Biozyme Whey", brand: "MuscleBlaze", category: "Protein Powder", rating: 8 as ReviewRating, verdict: "Best American brand — enhanced absorption and solid yield.", publishedAt: "2025-03-20" },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/reviews" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Reviews</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{categoryName}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>CATEGORY · CAT-01</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Supplement Reviews</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.0, marginBottom: 16 }}>
            Best <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>{categoryName}</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.7, maxWidth: 620, marginBottom: 24 }}>
            Every product in this category has been independently reviewed for formula quality, label transparency, and value for money.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              type="search"
              placeholder="Filter products..."
              style={{ padding: "10px 16px", border: "1px solid #E4E8E5", borderRadius: 8, fontSize: 13, color: "#2D2926", backgroundColor: "#F6F8F6", fontFamily: "var(--font-hanken), sans-serif", outline: "none", minWidth: 220 }}
            />
            <Link href={`/best/${slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#17211C", color: "#FFFFFF", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, textDecoration: "none" }}>
              See Top Picks →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Key Ingredients */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Key Ingredients" figure="§ 01" title="What to" titleItalic="look for" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
            {keyIngredients.map((ing, i) => (
              <div key={ing.name} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{ing.name}</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.5 }}>{ing.note}</p>
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
