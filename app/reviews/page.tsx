import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Supplement Reviews — Evidence-Rated, Formula-First",
  description: "Independent supplement reviews rated with the Fitlab Scoring Protocol. Every review covers formula quality, label transparency, third-party verification, and value.",
  alternates: { canonical: "/reviews" },
};

type Review = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  figure: string;
  rating: ReviewRating;
  verdict: string;
  publishedAt: string;
  tags: string[];
  thirdParty: boolean;
  accent: string;
  image?: string;
  buyUrl?: string;
};

const reviews: Review[] = [
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    category: "Protein Powder",
    figure: "REV-001",
    rating: 9,
    verdict: "The benchmark whey. Clean label, consistent yield, Informed Choice certified.",
    publishedAt: "2025-04-10",
    tags: ["Whey", "Muscle Gain", "Informed Choice"],
    thirdParty: true,
    accent: "#C4622D",
  },
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    figure: "REV-002",
    rating: 8,
    verdict: "Best budget creatine — pure, clean, and priced well per gram.",
    publishedAt: "2025-03-08",
    tags: ["Creatine", "Monohydrate", "Budget-Friendly"],
    thirdParty: true,
    accent: "#2D6A4F",
  },
  {
    slug: "wellmedr",
    title: "Wellmedr Health Supplement",
    brand: "Wellmedr",
    category: "Wellness",
    figure: "REV-003",
    rating: 7,
    verdict: "Decent formulation for general wellness with reasonable label transparency.",
    publishedAt: "2025-05-01",
    tags: ["Wellness", "Health", "General Use"],
    thirdParty: false,
    accent: "#D4A96A",
  },
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey Isolate",
    brand: "Dymatize",
    category: "Protein Powder",
    figure: "REV-004",
    rating: 9,
    verdict: "Dual NSF + Informed Choice certified hydrolyzed isolate. 25g protein, 2.7g leucine, benchmark flavour. Premium price is the only caveat.",
    publishedAt: "2026-05-27",
    tags: ["Whey Isolate", "Hydrolyzed", "NSF Certified", "Informed Choice"],
    thirdParty: true,
    accent: "#2D6A4F",
  },
  {
    slug: "ancestral-supplements-beef-organs",
    title: "Ancestral Supplements Beef Organs",
    brand: "Ancestral Supplements",
    category: "Organ Supplements",
    figure: "REV-2026-045",
    rating: 9,
    verdict: "The gold standard: 5-organ blend from 100% NZ grass-fed cattle, freeze-dried at low temperature, no fillers. Highest organ diversity and sourcing transparency in the category.",
    publishedAt: "2026-05-20",
    tags: ["Grass-Fed", "New Zealand", "5-Organ", "Freeze-Dried"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/ancestral-supplements-beefliv.webp",
    buyUrl: "https://amzn.to/43xRRca",
  },
  {
    slug: "heart-and-soil-beef-organs",
    title: "Heart & Soil Beef Organs",
    brand: "Heart & Soil",
    category: "Organ Supplements",
    figure: "REV-2026-046",
    rating: 9,
    verdict: "Rigorously transparent sourcing from regenerative US farms. Proprietary organ blends are backed by strong editorial rationale. Premium pricing reflects genuine quality.",
    publishedAt: "2026-05-20",
    tags: ["Regenerative", "US Sourced", "Organ Blend", "Paul Saladino"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/HEART-SOIL.webp",
    buyUrl: "https://amzn.to/3Q2X5ts",
  },
  {
    slug: "left-coast-performance-beef-organs",
    title: "Left Coast Performance Beef Organs",
    brand: "Left Coast Performance",
    category: "Organ Supplements",
    figure: "REV-2026-047",
    rating: 8,
    verdict: "Best value in the category: 5-organ NZ blend with competitive capsule yield at $0.53/serving. Minor deductions for missing COA transparency.",
    publishedAt: "2026-05-20",
    tags: ["Best Value", "New Zealand", "5-Organ", "Budget"],
    thirdParty: false,
    accent: "#A0522D",
    image: "/products/left-coast-performance-beef-organ.webp",
    buyUrl: "https://amzn.to/4nUmi5H",
  },
  {
    slug: "perfect-supplements-beef-liver",
    title: "Perfect Supplements Beef Liver",
    brand: "Perfect Supplements",
    category: "Organ Supplements",
    figure: "REV-2026-048",
    rating: 8,
    verdict: "Premium single-organ liver from Uruguay grass-fed cattle. USDA-inspected, desiccated at low temp, Informed Sport certified. Strong for targeted liver supplementation.",
    publishedAt: "2026-05-20",
    tags: ["Beef Liver", "Uruguay", "Informed Sport", "Single Organ"],
    thirdParty: true,
    accent: "#A0522D",
    image: "/products/perfect-supplement.webp",
    buyUrl: "https://amzn.to/4odctAl",
  },
  {
    slug: "force-factor-primal-origins",
    title: "Force Factor Primal Origins",
    brand: "Force Factor",
    category: "Organ Supplements",
    figure: "REV-2026-049",
    rating: 7,
    verdict: "Accessible retail option with 5-organ blend. Undisclosed sourcing country and proprietary blend structure limit score. Good entry point at $0.50/serving.",
    publishedAt: "2026-05-20",
    tags: ["Retail Available", "5-Organ", "Budget-Friendly"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/Force-Factor-Primal-Origins.webp",
    buyUrl: "https://amzn.to/43wF5e3",
  },
  {
    slug: "forest-leaf-beef-organ-complex",
    title: "Forest Leaf Beef Organ Complex",
    brand: "Forest Leaf",
    category: "Organ Supplements",
    figure: "REV-2026-050",
    rating: 7,
    verdict: "5-organ blend with reasonable dosing and competitive price. Sourcing transparency below best-in-class; no third-party testing documentation provided.",
    publishedAt: "2026-05-20",
    tags: ["5-Organ", "Budget", "Amazon Available"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/ForestLeaf-Beef-Organ.webp",
    buyUrl: "https://amzn.to/4dzvZTM",
  },
  {
    slug: "codeage-beef-organs",
    title: "Codeage Beef Organs",
    brand: "Codeage",
    category: "Organ Supplements",
    figure: "REV-2026-051",
    rating: 7,
    verdict: "Non-GMO Verified and clean label with 5-organ blend. Sourcing country undisclosed; value efficiency slightly below category average at $0.28/g active.",
    publishedAt: "2026-05-20",
    tags: ["Non-GMO", "5-Organ", "Clean Label"],
    thirdParty: false,
    accent: "#6B3A2A",
    image: "/products/Codeage.webp",
    buyUrl: "https://amzn.to/4wUtzqk",
  },
  {
    slug: "enviromedica-terraferrin",
    title: "Enviromedica Terraferrin",
    brand: "Enviromedica",
    category: "Organ Supplements",
    figure: "REV-2026-052",
    rating: 7,
    verdict: "Unique liver + lactoferrin formula with clinical evidence for iron absorption improvement. Argentine sourcing, premium price at $1.10/serving.",
    publishedAt: "2026-05-20",
    tags: ["Lactoferrin", "Iron Absorption", "Argentine", "Unique Formula"],
    thirdParty: false,
    accent: "#8B4513",
    image: "/products/Enviromedica.webp",
    buyUrl: "https://amzn.to/4vhPma3",
  },
  {
    slug: "happee-beef-organ-women",
    title: "Happee Beef Organs for Women",
    brand: "Happee",
    category: "Organ Supplements",
    figure: "REV-2026-053",
    rating: 7,
    verdict: "Female-specific formula with liver, spleen, kidney, and bovine uterus from NZ cattle. Best value for women's organ supplementation at $0.63/serving.",
    publishedAt: "2026-05-20",
    tags: ["Women's Formula", "New Zealand", "4-Organ", "Female Health"],
    thirdParty: false,
    accent: "#A0522D",
    image: "/products/Happee-Grass-Fed-Beef-Organ.webp",
    buyUrl: "https://amzn.to/4uDGXOc",
  },
];

const categoryGroups: { label: string; categories: string[] }[] = [
  { label: "Protein & Gainers", categories: ["Protein Powder", "Mass Gainer"] },
  { label: "Performance", categories: ["Creatine", "Pre-Workout", "Amino Acids"] },
  { label: "Health & Wellness", categories: ["Wellness", "Vitamins", "Adaptogens"] },
  { label: "Body Composition", categories: ["Fat Loss", "Thermogenics"] },
  { label: "Organ Supplements", categories: ["Organ Supplements"] },
];

const ratingColor = (r: ReviewRating): string => {
  if (r >= 9) return "#1A6B3A";
  if (r >= 7) return "#C4622D";
  return "#8A4020";
};

const ratingBg = (r: ReviewRating): string => {
  if (r >= 9) return "rgba(26,107,58,0.08)";
  if (r >= 7) return "rgba(196,98,45,0.08)";
  return "rgba(138,64,32,0.08)";
};

const stats = [
  { label: "Reviews Published", value: reviews.length.toString() },
  { label: "Avg FSP Score", value: (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) },
  { label: "3rd-Party Verified", value: `${reviews.filter(r => r.thirdParty).length}` },
  { label: "Categories Covered", value: "8+" },
];

export default function ReviewsHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Reviews</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>REVIEW INDEX · {reviews.length} REVIEWS</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Fitlab Scoring Protocol</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Supplement{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Reviews</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            Every review is scored on five pillars: formula integrity, label transparency, third-party verification, value efficiency, and practical quality. No affiliate influence on verdicts.
          </p>
          {/* Stats */}
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

        {/* Category jump links */}
        <div style={{ marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categoryGroups.map((g) => (
            <a
              key={g.label}
              href={`#${g.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              style={{ padding: "5px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "#F8F2E4" }}
            >
              {g.label}
            </a>
          ))}
          <Link href="/category" style={{ padding: "5px 14px", border: "1px solid rgba(196,98,45,0.3)", borderRadius: 20, fontSize: 11, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em", textDecoration: "none", backgroundColor: "rgba(196,98,45,0.04)" }}>
            Browse by Category →
          </Link>
        </div>

        {/* Grouped review sections */}
        {categoryGroups.map((group) => {
          const groupReviews = reviews.filter(r => group.categories.includes(r.category));
          if (groupReviews.length === 0) return null;
          const anchorId = group.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section key={group.label} id={anchorId} style={{ marginBottom: 56 }}>
              <SectionHeading
                label={group.label}
                figure="§"
                title={group.label.split(" ")[0]}
                titleItalic={group.label.split(" ").slice(1).join(" ")}
                size="sm"
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {groupReviews.map((review) => (
                  <div
                    key={review.slug}
                    style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", alignItems: "stretch" }}
                  >
                    {/* Accent bar */}
                    <div style={{ backgroundColor: review.accent }} />

                    {/* Content — clickable area */}
                    <Link href={`/reviews/${review.slug}`} className="hub-row-link" style={{ display: "flex", flexDirection: "column", gap: 8, padding: "18px 20px", textDecoration: "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{review.figure}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#8A8480", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4 }}>{review.category}</span>
                        {review.thirdParty && (
                          <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", color: "#2D6A4F", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", textTransform: "uppercase" }}>3P Tested</span>
                        )}
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.01em" }}>{review.title}</h2>
                        <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 2 }}>{review.brand}</p>
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{review.verdict}</p>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {review.tags.map((tag) => (
                          <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{tag}</span>
                        ))}
                      </div>
                    </Link>

                    {/* Score + CTA */}
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #EDE8DF", minWidth: 110, gap: 12 }}>
                      <div style={{ textAlign: "right" }}>
                        {review.image && (
                          <div style={{ width: 54, height: 66, backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, marginLeft: "auto" }}>
                            <img src={review.image} alt={review.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                          </div>
                        )}
                        <div style={{ display: "inline-flex", alignItems: "baseline", gap: 2, padding: "6px 12px", backgroundColor: ratingBg(review.rating), border: `1px solid ${ratingColor(review.rating)}30`, borderRadius: 8 }}>
                          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: ratingColor(review.rating), lineHeight: 1 }}>{review.rating}</span>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: ratingColor(review.rating) }}>/10</span>
                        </div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase", marginTop: 4 }}>FSP Score</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                        {review.buyUrl && (
                          <a href={review.buyUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 10, fontWeight: 600, borderRadius: 5, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                            Buy ↗
                          </a>
                        )}
                        <Link href={`/reviews/${review.slug}`} style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Read →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* All reviews fallback — any not in a group */}
        {(() => {
          const groupedSlugs = categoryGroups.flatMap(g =>
            reviews.filter(r => g.categories.includes(r.category)).map(r => r.slug)
          );
          const ungrouped = reviews.filter(r => !groupedSlugs.includes(r.slug));
          if (ungrouped.length === 0) return null;
          return (
            <section style={{ marginBottom: 56 }}>
              <SectionHeading label="Other Reviews" figure="§" title="Other" titleItalic="reviews" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ungrouped.map((review) => (
                  <Link
                    key={review.slug}
                    href={`/reviews/${review.slug}`}
                    className="hub-row-link"
                    style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4", alignItems: "stretch" }}
                  >
                    <div style={{ backgroundColor: review.accent }} />
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{review.figure}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#8A8480", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4 }}>{review.category}</span>
                      </div>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{review.title}</h2>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{review.verdict}</p>
                    </div>
                    <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #EDE8DF", minWidth: 120 }}>
                      <div style={{ display: "inline-flex", alignItems: "baseline", gap: 2, padding: "6px 12px", backgroundColor: ratingBg(review.rating), border: `1px solid ${ratingColor(review.rating)}30`, borderRadius: 8 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: ratingColor(review.rating), lineHeight: 1 }}>{review.rating}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: ratingColor(review.rating) }}>/10</span>
                      </div>
                      <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Review →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Scoring methodology note */}
        <div style={{ marginTop: 16, padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>How We Score</p>
          <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75, marginBottom: 12 }}>
            Every product is rated on the Fitlab Scoring Protocol (FSP): formula integrity (30%), label transparency (20%), third-party verification (20%), value efficiency (15%), and practical quality (15%). No score is influenced by affiliate revenue or brand relationships.
          </p>
          <Link href="/methodology" style={{ fontSize: 13, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Read the full scoring methodology →
          </Link>
        </div>

      </div>
    </div>
  );
}
