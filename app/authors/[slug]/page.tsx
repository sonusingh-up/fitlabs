import type { Metadata } from "next";
import Link from "next/link";
import { authors } from "../page";
import type { ReviewRating } from "@/lib/types";
import ReviewCard from "@/components/ui/ReviewCard";

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return { title: "Author Not Found" };
  return {
    title: `${author.name} — Reviewer Profile`,
    description: `${author.role} — read their supplement reviews, credentials, and areas of expertise. ${author.bio.slice(0, 80)}`,
    alternates: { canonical: `/authors/${slug}` },
  };
}

// Sample reviews per author (in a real CMS this would be fetched)
const authorReviews: Record<string, Array<{ slug: string; title: string; brand: string; category: string; rating: ReviewRating; verdict: string; publishedAt: string }>> = {
  "fitlab-research-team": [
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8, verdict: "Clean, affordable, and third-party tested. The best budget creatine in USA.", publishedAt: "2025-03-08" },
    { slug: "muscleblaze-biozyme-whey", title: "MuscleBlaze Biozyme Whey", brand: "MuscleBlaze", category: "Protein Powder", rating: 8, verdict: "Best American brand — enhanced absorption enzyme blend and solid protein yield.", publishedAt: "2025-03-20" },
    { slug: "musclepharm-assault-pre-workout", title: "MusclePharm Assault", brand: "MusclePharm", category: "Pre-Workout", rating: 7, verdict: "Solid stimulant blend with transparent labelling but under-dosed citrulline.", publishedAt: "2025-03-22" },
  ],
  "pankaj-singh": [
    { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9, verdict: "The benchmark protein powder. Consistent quality, excellent amino acid profile.", publishedAt: "2025-04-10" },
    { slug: "optimum-nutrition-creatine", title: "ON Micronised Creatine", brand: "Optimum Nutrition", category: "Creatine", rating: 8, verdict: "Reliable brand with excellent mixability. Slightly pricier but widely available.", publishedAt: "2025-02-15" },
  ],
};

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return <div>Author not found.</div>;

  const reviews = authorReviews[slug] ?? [];

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/authors" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Authors</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{author.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>{author.figure}</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Author Profile</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 28, flexWrap: "wrap" }}>
            {/* Avatar */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", backgroundColor: author.accent, display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #E4E8E5" }}>
                <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#FFFFFF" }}>{author.initials}</span>
              </div>
            </div>

            {/* Name + meta */}
            <div style={{ flex: 1, minWidth: 240 }}>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 6 }}>
                {author.name}
              </h1>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7770", marginBottom: 16 }}>{author.role} · On Fitlab since {author.since}</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 16px", backgroundColor: "#0A66C2", color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                )}
                <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", border: "1px solid #E4E8E5", color: "#3F4B43", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", backgroundColor: "#F6F8F6" }}>
                  Editorial Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Stats */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { label: "Reviews Published", value: author.reviewCount.toString() },
              { label: "Ingredient Profiles", value: author.ingredientProfiles.toString() },
              { label: "On Fitlab Since", value: author.since },
              { label: "Specialties", value: author.specialties.length.toString() },
            ].map((stat) => (
              <div key={stat.label} style={{ padding: "20px", border: "1px solid #E4E8E5", borderRadius: 8, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>{stat.label}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bio */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#17211C", marginBottom: 16, letterSpacing: "-0.02em" }}>About</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.85, marginBottom: 20 }}>{author.bio}</p>
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 10 }}>Areas of Expertise</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {author.specialties.map((s) => (
                <span key={s} style={{ padding: "5px 12px", border: "1px solid #E4E8E5", borderRadius: 6, fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.07em", backgroundColor: "#F2F8F4" }}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#17211C", marginBottom: 16, letterSpacing: "-0.02em" }}>Credentials & Methodology</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
            {author.credentials.map((cred, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 14, color: "#2D2926", margin: 0, lineHeight: 1.5 }}>{cred}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews by this author */}
        {reviews.length > 0 && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#17211C", marginBottom: 20, letterSpacing: "-0.02em" }}>
              Recent Reviews
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              {reviews.map((r) => (
                <ReviewCard key={r.slug} {...r} />
              ))}
            </div>
            <Link href="/category" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
              View all reviews →
            </Link>
          </section>
        )}

        {/* Transparency note */}
        <div style={{ padding: "22px 26px", backgroundColor: "#17211C", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 10 }}>Editorial Independence</p>
          <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 1.75, margin: 0 }}>
            All scores and verdicts on this site are the independent judgement of the author(s) listed. No brand, retailer, or affiliate partner influences review outcomes. Affiliate commissions are disclosed separately and never affect scoring.{" "}
            <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our full editorial policy →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
