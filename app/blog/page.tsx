import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import HubMasthead from "@/components/ui/HubMasthead";

export const metadata: Metadata = {
  title: "Fitness, Nutrition & Longevity Blog",
  description: "Evidence-led articles on sleep science, GLP-1 research, nutritional psychiatry, and fitness travel — every claim named and cited. No fluff, no sponsored content.",
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
  evidenceBadge: "strong" | "moderate" | "guide";
};

const posts: BlogPost[] = [
  {
    slug: "sleep-window-anti-aging",
    title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging",
    category: "Longevity & Sleep",
    figure: "BLG-001",
    readTime: "9 min",
    publishedAt: "May 2026",
    excerpt: "Mortality risk rises steeply below 6 hours and above 9. A 1.1 million-person study and five mechanisms explain why the window is narrower than most people assume.",
    tags: ["Sleep", "Longevity", "Anti-Aging"],
    accent: "#1A6B3A",
    featured: true,
    evidenceBadge: "strong",
  },
  {
    slug: "diet-depression-anxiety",
    title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety",
    category: "Mental Health",
    figure: "BLG-004",
    readTime: "14 min",
    publishedAt: "May 2026",
    excerpt: "The SMILES trial produced a 32% remission rate vs 8% with dietary counselling alone. The gut-brain axis mechanisms behind that gap — and what to eat to close it.",
    tags: ["Nutrition", "Depression", "Gut Health"],
    accent: "#92620A",
    featured: true,
    evidenceBadge: "strong",
  },
  {
    slug: "glp1-benefits-beyond-weight-loss",
    title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss",
    category: "Pharmacology",
    figure: "BLG-002",
    readTime: "13 min",
    publishedAt: "May 2026",
    excerpt: "20% MACE reduction in SELECT, 24% kidney failure reduction in FLOW, ~50% drop in alcohol relapse — GLP-1 agonists are proving effective far outside the metabolic clinic.",
    tags: ["GLP-1", "Cardiovascular", "Ozempic"],
    accent: "#C4622D",
    featured: false,
    evidenceBadge: "strong",
  },
  {
    slug: "plant-foods-menopause",
    title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally",
    category: "Women's Health",
    figure: "BLG-003",
    readTime: "12 min",
    publishedAt: "May 2026",
    excerpt: "Visceral fat roughly doubles during the menopause transition. These seven food categories — from flaxseed to fermented foods — have RCT evidence behind each claim.",
    tags: ["Menopause", "Women's Health", "Phytoestrogens"],
    accent: "#2D6A4F",
    featured: false,
    evidenceBadge: "moderate",
  },
  {
    slug: "fitness-travel-2026",
    title: "Fitness Travel in 2026: How to Turn Your Vacation Into a Wellness Retreat",
    category: "Training & Lifestyle",
    figure: "BLG-005",
    readTime: "11 min",
    publishedAt: "May 2026",
    excerpt: "Two sessions per week is all it takes to prevent detraining over 14 days. A complete protocol: hotel gym strategy, jet lag recovery, supplement carry-on, and top destinations.",
    tags: ["Travel", "Training", "Jet Lag"],
    accent: "#7EB8D4",
    featured: false,
    evidenceBadge: "guide",
  },
];

const categoryGroups = [
  { label: "Longevity & Science", categories: ["Longevity & Sleep", "Pharmacology"] },
  { label: "Nutrition & Health", categories: ["Mental Health", "Women's Health"] },
  { label: "Training & Lifestyle", categories: ["Training & Lifestyle"] },
];

const evidenceBadgeStyles: Record<string, { color: string; bg: string; border: string; label: string }> = {
  strong:   { color: "#1A6B3A", bg: "rgba(26,107,58,0.08)",   border: "rgba(26,107,58,0.2)",   label: "Strong Evidence" },
  moderate: { color: "#92620A", bg: "rgba(146,98,10,0.08)",   border: "rgba(146,98,10,0.2)",   label: "Moderate Evidence" },
  guide:    { color: "#5C5650", bg: "rgba(92,86,80,0.06)",    border: "rgba(92,86,80,0.15)",   label: "Practical Guide" },
};

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
      <HubMasthead
        eyebrow={`Blog · ${posts.length} Articles`}
        kicker="No Fluff · No Sponsorship"
        title="Fitness &"
        titleAccent="Nutrition Blog"
        subtitle="Practical guides on training, nutrition, and supplements — built on evidence, not hype. Every article skips the filler and gets to what actually changes outcomes."
      />

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
                      <span style={{ marginLeft: "auto", padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: evidenceBadgeStyles[post.evidenceBadge].color, backgroundColor: evidenceBadgeStyles[post.evidenceBadge].bg, border: `1px solid ${evidenceBadgeStyles[post.evidenceBadge].border}` }}>{evidenceBadgeStyles[post.evidenceBadge].label}</span>
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
                    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", borderLeft: "1px solid #EDE8DF", minWidth: 130 }}>
                      <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: evidenceBadgeStyles[post.evidenceBadge].color, backgroundColor: evidenceBadgeStyles[post.evidenceBadge].bg, border: `1px solid ${evidenceBadgeStyles[post.evidenceBadge].border}`, whiteSpace: "nowrap" }}>{evidenceBadgeStyles[post.evidenceBadge].label}</span>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{post.publishedAt} · {post.readTime}</p>
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
