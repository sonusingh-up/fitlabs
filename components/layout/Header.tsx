"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Reviews",
    href: "/reviews",
    children: [
      { label: "All Reviews", href: "/reviews" },
      { label: "By Category", href: "/category" },
      { label: "Protein Powder", href: "/category/protein-powder" },
      { label: "Pre-Workout", href: "/category/pre-workout" },
      { label: "Creatine", href: "/category/creatine" },
      { label: "Vitamins & Minerals", href: "/category/vitamins-minerals" },
    ],
  },
  {
    label: "Best Of",
    href: "/best",
    children: [
      { label: "All Roundups", href: "/best" },
      { label: "Best Whey Protein", href: "/best/whey-protein" },
      { label: "Best Pre-Workout", href: "/best/pre-workout" },
      { label: "Best Creatine", href: "/best/creatine" },
      { label: "Best Fat Burner", href: "/best/fat-burner" },
      { label: "Best Ashwagandha", href: "/best/ashwagandha" },
    ],
  },
  {
    label: "Ingredients",
    href: "/ingredients",
    children: [
      { label: "All Ingredients", href: "/ingredients" },
      { label: "Creatine Monohydrate", href: "/ingredients/creatine" },
      { label: "Whey Protein", href: "/ingredients/whey-protein" },
      { label: "Caffeine", href: "/ingredients/caffeine" },
      { label: "Beta-Alanine", href: "/ingredients/beta-alanine" },
      { label: "Ashwagandha", href: "/ingredients/ashwagandha" },
    ],
  },
  {
    label: "Goals",
    href: "/goals",
    children: [
      { label: "All Goal Guides", href: "/goals" },
      { label: "Muscle Gain", href: "/goals/muscle-gain" },
      { label: "Fat Loss", href: "/goals/fat-loss" },
      { label: "Strength", href: "/goals/strength" },
      { label: "Endurance", href: "/goals/endurance" },
      { label: "Recovery", href: "/goals/recovery" },
    ],
  },
  { label: "Tools", href: "/tools" },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "All Articles", href: "/research" },
      { label: "Blog", href: "/blog" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
];

const marqueeItems = [
  "142+ reviews",
  "87 ingredients analysed",
  "18h avg research per review",
  "Zero affiliate influence",
  "12 categories covered",
  "Evidence-led scoring",
  "Editorially independent",
  "142+ reviews",
  "87 ingredients analysed",
  "18h avg research per review",
  "Zero affiliate influence",
  "12 categories covered",
  "Evidence-led scoring",
  "Editorially independent",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>

      {/* Utility bar */}
      <div
        className="header-strip"
        style={{ backgroundColor: "#0a1410", padding: "6px 0" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11, color: "#7fb89a", letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            Editorially Independent · Evidence-Led · No Sponsored Content
          </span>
          <span style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11, color: "#4a6b58", letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            USA &amp; Global
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ backgroundColor: "#101a16", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }} aria-label="Fitlabreviews home">
              <span style={{
                width: 34, height: 34, borderRadius: 9, backgroundColor: "#14a474",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-hanken), sans-serif",
                fontWeight: 800, fontSize: 15, color: "#06120c", letterSpacing: "-0.02em", flexShrink: 0,
              }}>FL</span>
              <span style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 20, fontWeight: 600, color: "#e8efe9", letterSpacing: "-0.02em",
              }}>
                fitlab<span style={{ color: "#7fd8b4" }}>reviews</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="header-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
              {nav.map((item) => (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: "flex", alignItems: "center", gap: 3,
                      padding: "6px 11px",
                      fontSize: 14, fontWeight: 600,
                      color: openDropdown === item.label ? "#7fd8b4" : "#c8dcd1",
                      fontFamily: "var(--font-hanken), sans-serif",
                      borderRadius: 6,
                      transition: "color 150ms var(--ease-out-expo)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <span style={{
                        display: "inline-flex",
                        transition: "transform 200ms var(--ease-out-expo)",
                        transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.5,
                      }}>
                        <ChevronDown size={12} />
                      </span>
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div
                      className="nav-dropdown"
                      style={{
                        position: "absolute", top: "calc(100% + 4px)", left: 0, minWidth: 200,
                        backgroundColor: "#1a2d24", border: "1px solid rgba(127,216,180,0.12)",
                        boxShadow: "0 16px 48px -8px rgba(0,0,0,0.4)",
                        borderRadius: 10, padding: "6px 0", zIndex: 100,
                      }}
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "9px 16px", fontSize: 13, color: "#a8c9b8",
                            fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none",
                            transition: "background-color 120ms, color 120ms",
                            animationDelay: `${i * 20}ms`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(20,164,116,0.12)";
                            (e.currentTarget as HTMLElement).style.color = "#7fd8b4";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLElement).style.color = "#a8c9b8";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <Link
                href="/search"
                style={{
                  color: "#7fb89a", display: "flex", alignItems: "center", padding: 7,
                  borderRadius: 7, backgroundColor: "rgba(255,255,255,0.05)",
                  transition: "color 150ms, background-color 150ms",
                }}
                aria-label="Search"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#e8efe9";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#7fb89a";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                }}
              >
                <Search size={17} />
              </Link>
              <Link
                href="/newsletter"
                className="header-cta-btn"
                style={{
                  backgroundColor: "#14a474", color: "#06120c",
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.01em",
                  padding: "8px 18px", borderRadius: 999,
                  textDecoration: "none", transition: "background-color 150ms, transform 100ms",
                  display: "inline-flex", alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#12b882";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#14a474";
                }}
              >
                Subscribe
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }}
                className="header-hamburger"
                style={{
                  color: "#c8dcd1", padding: 6, background: "rgba(255,255,255,0.06)", border: "none",
                  cursor: "pointer", borderRadius: 7,
                  transition: "transform 100ms, background-color 150ms",
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust marquee */}
      <div style={{ backgroundColor: "#e7f2ec", borderBottom: "1px solid #d2e5db", overflow: "hidden", padding: "7px 0" }}>
        <div className="trust-marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 20, paddingRight: 48,
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11, color: "#2a6145", fontWeight: 500, letterSpacing: "0.06em",
              textTransform: "uppercase", whiteSpace: "nowrap",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#0f7a5a", display: "inline-block", flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{ backgroundColor: "#101a16", borderTop: "1px solid rgba(255,255,255,0.06)", maxHeight: "80vh", overflowY: "auto" }}
        >
          <div style={{ padding: "8px 16px 24px" }}>
            {nav.map((item) => (
              <div
                key={item.label}
                className="mobile-nav-item"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Link
                    href={item.href}
                    style={{
                      display: "block", flex: 1, fontWeight: 600, fontSize: 15,
                      color: "#c8dcd1", fontFamily: "var(--font-hanken), sans-serif",
                      textDecoration: "none", padding: "13px 0",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        padding: "13px 4px", color: "#4a6b58",
                        display: "flex", alignItems: "center",
                      }}
                    >
                      <span style={{
                        display: "inline-flex",
                        transition: "transform 220ms var(--ease-out-expo)",
                        transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}>
                        <ChevronDown size={16} />
                      </span>
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div style={{ paddingLeft: 12, paddingBottom: 10 }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block", fontSize: 13, color: "#6b9980",
                          fontFamily: "var(--font-hanken), sans-serif", padding: "7px 0",
                          textDecoration: "none",
                          transition: "color 120ms",
                        }}
                        onClick={() => setMobileOpen(false)}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#7fd8b4")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b9980")}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ paddingTop: 16 }}>
              <Link
                href="/newsletter"
                style={{
                  display: "block", textAlign: "center", backgroundColor: "#14a474",
                  color: "#06120c", fontFamily: "var(--font-hanken), sans-serif",
                  fontWeight: 700, fontSize: 13, padding: "12px 24px", borderRadius: 999,
                  textDecoration: "none",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Subscribe to Research Dispatch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
