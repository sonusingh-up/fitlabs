import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Fitness & Nutrition Blog — Practical Guides",
  description: "Practical fitness and nutrition articles covering training principles, diet strategy, supplement mistakes, and evidence-based habits. No fluff, no sponsored content.",
  alternates: { canonical: "/blog" },
};

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  figure: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
  accent: string;
  featured: boolean;
};

const posts: BlogPost[] = [
  {
    slug: "how-to-read-a-supplement-label",
    title: "How to Read a Supplement Label Without Getting Deceived",
    category: "Label Literacy",
    figure: "BLG-001",
    readTime: "8 min",
    publishedAt: "May 2026",
    excerpt: "Proprietary blends, amino spiking, serving size tricks, and misleading percentage claims — here's exactly what to look for before buying any supplement.",
    tags: ["Label Reading", "Buying Guide", "Beginners"],
    accent: "#C4622D",
    featured: true,
  },
  {
    slug: "supplements-you-dont-need",
    title: "7 Supplements Most People Don't Actually Need",
    category: "Supplement Strategy",
    figure: "BLG-002",
    readTime: "6 min",
    publishedAt: "April 2026",
    excerpt: "BCAAs when you eat enough protein, glutamine for muscle gain, testosterone boosters, and four others — save your money on these overhyped categories.",
    tags: ["Savings", "Overrated", "Strategy"],
    accent: "#2D6A4F",
    featured: true,
  },
  {
    slug: "creatine-myths-debunked",
    title: "5 Creatine Myths Debunked by the Research",
    category: "Myth-Busting",
    figure: "BLG-003",
    readTime: "7 min",
    publishedAt: "March 2026",
    excerpt: "Creatine causes hair loss, damages kidneys, and only works for men — none of these hold up under scrutiny. We go through each myth with the actual data.",
    tags: ["Creatine", "Myths", "Research"],
    accent: "#D4A96A",
    featured: false,
  },
  {
    slug: "protein-intake-calculator",
    title: "How Much Protein Do You Actually Need?",
    category: "Nutrition Basics",
    figure: "BLG-004",
    readTime: "9 min",
    publishedAt: "March 2026",
    excerpt: "The 1g-per-pound rule is an overestimate for most people. Meta-analyses converge on 1.6–2.2g/kg for muscle gain. We break down the evidence by goal and training status.",
    tags: ["Protein", "Dosage", "Muscle Gain"],
    accent: "#C4622D",
    featured: false,
  },
  {
    slug: "best-time-to-take-supplements",
    title: "The Best Time to Take Each Supplement",
    category: "Timing & Protocols",
    figure: "BLG-005",
    readTime: "10 min",
    publishedAt: "February 2026",
    excerpt: "Creatine timing is flexible. Caffeine should be 45–60 min pre-workout. Protein matters daily, not post-workout. A complete timing guide for every common supplement.",
    tags: ["Timing", "Protocols", "Optimization"],
    accent: "#7EB8D4",
    featured: false,
  },
  {
    slug: "indian-supplement-buying-guide",
    title: "Buying Supplements in India — What to Watch For",
    category: "Regional Guide",
    figure: "BLG-006",
    readTime: "11 min",
    publishedAt: "January 2026",
    excerpt: "Counterfeit risk, import vs. local manufacturing, price-per-gram benchmarks, and trusted retailers. Everything you need to buy smartly in the Indian market.",
    tags: ["India", "Buying Guide", "Counterfeit"],
    accent: "#2D6A4F",
    featured: false,
  },
  {
    slug: "progressive-overload-explained",
    title: "Progressive Overload — The Only Training Principle That Matters",
    category: "Training",
    figure: "BLG-007",
    readTime: "7 min",
    publishedAt: "December 2025",
    excerpt: "No supplement compensates for a program that doesn't progressively challenge you. Here's how to apply overload systematically — weight, reps, volume, density.",
    tags: ["Training", "Fundamentals", "Strength"],
    accent: "#D4A96A",
    featured: false,
  },
  {
    slug: "sleep-and-muscle-recovery",
    title: "Sleep Is Your Most Underrated Recovery Tool",
    category: "Recovery",
    figure: "BLG-008",
    readTime: "6 min",
    publishedAt: "November 2025",
    excerpt: "Growth hormone peaks during deep sleep, muscle protein synthesis continues overnight, and cortisol spikes with sleep deprivation. 7–9 hours isn't a suggestion.",
    tags: ["Sleep", "Recovery", "Hormones"],
    accent: "#7EB8D4",
    featured: false,
  },
];

const categoryGroups = [
  { label: "Supplement Guides", categories: ["Label Literacy", "Supplement Strategy", "Timing & Protocols"] },
  { label: "Nutrition & Science", categories: ["Nutrition Basics", "Myth-Busting"] },
  { label: "Training & Recovery", categories: ["Training", "Recovery"] },
  { label: "Buying Guides", categories: ["Regional Guide"] },
];

const featured = posts.filter(p => p.featured);
const nonFeatured = posts.filter(p => !p.featured);

export default function BlogHubPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Blog</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>BLOG · {posts.length} ARTICLES</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>No Fluff · No Sponsorship</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Fitness &{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Nutrition Blog</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620 }}>
            Practical guides on training, nutrition, and supplements — built on evidence, not hype. Every article skips the filler and gets to what actually changes outcomes.
          </p>
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
        </div>

        {/* Featured posts */}
        {featured.length > 0 && (
          <section style={{ marginBottom: 56 }}>
            <SectionHeading label="Featured" figure="§ 01" title="Featured" titleItalic="articles" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 16 }}>
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="hub-card"
                  style={{ display: "flex", flexDirection: "column", border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4", position: "relative" }}
                >
                  <div style={{ height: 4, backgroundColor: post.accent }} />
                  <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{post.figure}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#8A8480", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4 }}>{post.category}</span>
                      <span style={{ marginLeft: "auto", padding: "2px 8px", backgroundColor: "rgba(196,98,45,0.1)", border: "1px solid rgba(196,98,45,0.25)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Featured</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0, flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {post.tags.map((tag) => (
                        <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #EDE8DF", paddingTop: 12 }}>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{post.publishedAt} · {post.readTime} read</p>
                      <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Grouped sections */}
        {categoryGroups.map((group) => {
          const groupPosts = nonFeatured.filter(p => group.categories.includes(p.category));
          if (groupPosts.length === 0) return null;
          const anchorId = group.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section key={group.label} id={anchorId} style={{ marginBottom: 56 }}>
              <SectionHeading label={group.label} figure="§" title={group.label.split(" ")[0]} titleItalic={group.label.split(" ").slice(1).join(" ")} size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {groupPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="hub-row-link"
                    style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", textDecoration: "none", backgroundColor: "#F8F2E4", alignItems: "stretch" }}
                  >
                    <div style={{ backgroundColor: post.accent }} />
                    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{post.figure}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#8A8480", textTransform: "uppercase", padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4 }}>{post.category}</span>
                      </div>
                      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{post.title}</h2>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {post.tags.map((tag) => (
                          <span key={tag} style={{ padding: "2px 7px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 9, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #EDE8DF", minWidth: 110 }}>
                      <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0, textAlign: "right" }}>{post.readTime} read</p>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{post.publishedAt}</p>
                        <span style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", display: "block", marginTop: 4 }}>Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Newsletter CTA */}
        <div style={{ marginTop: 16, padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 8 }}>Stay Updated</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>New articles, every two weeks.</p>
            <p style={{ fontSize: 13, color: "#8A8480", lineHeight: 1.6, marginTop: 6 }}>No spam, no affiliate pitches — just evidence-based content when it publishes.</p>
          </div>
          <Link href="/contact" style={{ padding: "12px 24px", backgroundColor: "#C4622D", color: "#F2EBD9", borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", flexShrink: 0 }}>
            Get in touch →
          </Link>
        </div>

      </div>
    </div>
  );
}
