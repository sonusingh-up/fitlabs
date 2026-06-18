import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Research Team & Authors",
  description: "Meet the research team behind Fitlabreviews — independent supplement researchers, formula analysts, and evidence-based writers who score every product we review.",
  alternates: { canonical: "/authors" },
};

export const authors = [
  {
    slug: "fitlab-research-team",
    name: "Fitlab Research Team",
    role: "Editorial & Research",
    figure: "AUT-01",
    bio: "The Fitlab Research Team is a collective of sports nutrition analysts, dietitians, and evidence-based writers. Every review published on this site is built on a structured scoring framework — the Fitlab Scoring Protocol — that separates formula quality from marketing language. The team applies the same five-pillar rubric to every product: formula integrity, label transparency, third-party verification, value efficiency, and practical quality.",
    specialties: ["Formula Analysis", "Evidence Classification", "Claim Auditing", "Price Benchmarking"],
    reviewCount: 38,
    ingredientProfiles: 12,
    since: "2025",
    credentials: ["Sports Nutrition Research", "GROQ-Verified Ingredient Database", "Fitlab Scoring Protocol v2.1"],
    linkedin: null,
    twitter: null,
    accent: "#0F7A5A",
    initials: "FR",
  },
  {
    slug: "pankaj-singh",
    name: "Pankaj Singh",
    role: "Founder & Lead Researcher",
    figure: "AUT-02",
    bio: "Pankaj founded Fitlabreviews to fill a gap in the American supplement market — honest, formula-first reviews that aren't influenced by affiliate money or brand relationships. He oversees the editorial direction, scoring methodology, and all final review verdicts. With a focus on the American and global supplement market, Pankaj brings an ingredient-first lens to every category.",
    specialties: ["Supplement Strategy", "American Market Analysis", "Editorial Direction", "Brand Benchmarking"],
    reviewCount: 24,
    ingredientProfiles: 8,
    since: "2025",
    credentials: ["Founder, Fitlabreviews", "Evidence-Based Nutrition Research", "American Supplement Market Specialist"],
    linkedin: "https://www.linkedin.com/in/pankaj-singh-77b93a368/",
    twitter: null,
    accent: "#0A4F3B",
    initials: "PS",
  },
];

export default function AuthorsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Authors</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#6B7770", textTransform: "uppercase" }}>RESEARCH TEAM · {authors.length} AUTHORS</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Editorial Independence</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.0, marginBottom: 16 }}>
            The{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>Research Team</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.7, maxWidth: 620 }}>
            Every review, ingredient profile, and brand assessment on this site is produced by the team below. No ghostwriters, no brand-sponsored content, no undisclosed contributors.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        <section>
          <SectionHeading label="Authors" figure="§ 01" title="Meet the" titleItalic="team" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="hub-card"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0, border: "1px solid #E4E8E5", borderRadius: 16, overflow: "hidden", textDecoration: "none", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                {/* Accent sidebar */}
                <div style={{ width: 4, backgroundColor: author.accent }} />

                <div style={{ padding: "28px 32px", display: "grid", gridTemplateColumns: "88px 1fr", gap: 28, alignItems: "start" }}>
                  {/* Avatar */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: author.accent, display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #E4E8E5" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF" }}>{author.initials}</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#6B7770", textTransform: "uppercase" }}>{author.figure}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: 0, letterSpacing: "-0.01em" }}>{author.name}</h2>
                        {author.linkedin && (
                          <span style={{ padding: "2px 8px", backgroundColor: "rgba(10,102,194,0.08)", border: "1px solid rgba(10,102,194,0.2)", borderRadius: 4, fontSize: 9, color: "#0A66C2", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>LinkedIn</span>
                        )}
                      </div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", margin: 0 }}>{author.role}</p>
                    </div>

                    <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>{author.bio}</p>

                    {/* Stats + specialties */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 14 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 2 }}>Reviews</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{author.reviewCount}</p>
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 2 }}>Ingredient Profiles</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{author.ingredientProfiles}</p>
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 2 }}>On Fitlab Since</p>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{author.since}</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {author.specialties.map((s) => (
                        <span key={s} style={{ padding: "3px 9px", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.07em", backgroundColor: "#F6F8F6" }}>{s}</span>
                      ))}
                    </div>

                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View full profile →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust note */}
        <div style={{ marginTop: 56, padding: "24px 28px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 14, borderLeft: "3px solid #0F7A5A" }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>Editorial Transparency</p>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>
            All reviews carry a byline indicating which author or team produced them. Fitlab does not publish anonymous reviews. If you spot an error or want to discuss a verdict,{" "}
            <Link href="/contact" style={{ color: "#0F7A5A", fontWeight: 600 }}>contact us directly</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
