"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/category", label: "Browse Categories", desc: "All supplement categories" },
  { href: "/best", label: "Best-Of Guides", desc: "Top picks per category" },
  { href: "/ingredients", label: "Ingredient Index", desc: "Evidence-based profiles" },
  { href: "/brands", label: "Brand Directory", desc: "Independent brand ratings" },
];

const popularReviews = [
  { href: "/reviews/optimum-nutrition-gold-standard-whey", label: "ON Gold Standard Whey", score: 9 },
  { href: "/reviews/myprotein-creatine-monohydrate", label: "MyProtein Creatine", score: 8 },
  { href: "/reviews/muscleblaze-biozyme-whey", label: "MuscleBlaze Biozyme Whey", score: 8 },
];

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>404 — Not Found</span>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "80px 24px 64px" }} className="px-page">

        {/* Hero */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>ERR-404</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Page Not Found</span>
          </div>

          {/* Big 404 */}
          <div style={{ position: "relative", marginBottom: 32 }}>
            <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(6rem, 20vw, 14rem)", fontWeight: 800, color: "rgba(26,23,20,0.06)", lineHeight: 1, letterSpacing: "-0.04em", margin: 0, userSelect: "none", pointerEvents: "none" }}>
              404
            </p>
            <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)" }}>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
                Nothing here —{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>yet.</em>
              </h1>
              <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.7, maxWidth: 480, margin: 0 }}>
                This page doesn't exist, may have moved, or the supplement review you're looking for hasn't been published yet. Try the links below.
              </p>
            </div>
          </div>

          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", backgroundColor: "#1A1714", color: "#FFFFFF", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
          >
            ← Back to Home
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>

          {/* Quick navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 16 }}>Quick Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
              {quickLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", textDecoration: "none", transition: "background-color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F2F8F4"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = i % 2 === 0 ? "#F6F8F6" : "#FFFFFF"; }}
                >
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", margin: 0, marginBottom: 3 }}>{link.label}</p>
                    <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{link.desc}</p>
                  </div>
                  <span style={{ color: "#0F7A5A", fontSize: 14, flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular reviews */}
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", marginBottom: 16 }}>Popular Reviews</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
              {popularReviews.map((r, i) => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", textDecoration: "none", transition: "background-color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F2F8F4"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = i % 2 === 0 ? "#F6F8F6" : "#FFFFFF"; }}
                >
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", margin: 0 }}>{r.label}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 800, color: "#1A1714" }}>{r.score}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#6B7770" }}>/10</span>
                    <span style={{ color: "#0F7A5A", fontSize: 14 }}>→</span>
                  </div>
                </Link>
              ))}
              <Link
                href="/reviews"
                style={{ display: "flex", justifyContent: "center", padding: "14px 20px", backgroundColor: "#F2F8F4", textDecoration: "none" }}
              >
                <span style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View all reviews →</span>
              </Link>
            </div>

            {/* Search suggestion */}
            <div style={{ marginTop: 16, padding: "16px 20px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 12, borderLeft: "3px solid #0F7A5A" }}>
              <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>
                Looking for a specific product or ingredient?{" "}
                <Link href="/search" style={{ color: "#0F7A5A", fontWeight: 600 }}>Try our search →</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
