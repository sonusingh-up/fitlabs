import type { Metadata } from "next";
import Link from "next/link";
import { getAllSkinGuides } from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: "Skin Guides — Research-Led Skincare Articles",
  description:
    "Research-led skincare guides covering acne, anti-aging, hydration, SPF, and more. Every guide cites the evidence behind its recommendations.",
  alternates: { canonical: "/guides" },
};

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59",
  intermediate: "#C4622D",
  advanced: "#8B1A1A",
};

export default async function SkinGuidesPage() {
  const guides = await getAllSkinGuides();

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Guides</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Guide Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Guides
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            Research-led guides for every skin concern. Each article ties its recommendations to the peer-reviewed evidence behind them.
          </p>
          {guides.length > 0 && (
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", marginTop: 16 }}>{guides.length} guide{guides.length !== 1 ? "s" : ""} published</p>
          )}
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        {guides.length === 0 ? (
          <div style={{ padding: "64px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#A89880" }}>No guides published yet.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
            {guides.map((guide: any) => (
              <Link
                key={guide.slug}
                href={`/skin/guides/${guide.slug}`}
                className="hub-card"
                style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
              >
                <div style={{ height: 4, backgroundColor: guide.difficulty ? difficultyColor[guide.difficulty] ?? "#C4622D" : "#C4622D" }} />
                <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    {guide.category && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em" }}>{guide.category}</span>
                    )}
                    {guide.difficulty && (
                      <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: difficultyColor[guide.difficulty] ?? "#8A8480", backgroundColor: `${difficultyColor[guide.difficulty] ?? "#8A8480"}14`, border: `1px solid ${difficultyColor[guide.difficulty] ?? "#8A8480"}33` }}>
                        {guide.difficulty}
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{guide.title}</h2>
                  {guide.description && (
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, margin: 0 }}>
                      {guide.description.slice(0, 110)}{guide.description.length > 110 ? "…" : ""}
                    </p>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {guide.timeEstimate && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{guide.timeEstimate}</span>
                    )}
                    {guide.publishedAt && (
                      <>
                        <span style={{ color: "#D4C9B8" }}>·</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>
                          {new Date(guide.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </>
                    )}
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", marginLeft: "auto" }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
