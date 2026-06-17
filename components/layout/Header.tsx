"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    label: "Brands",
    href: "/brands",
    children: [
      { label: "All Brands", href: "/brands" },
      { label: "Optimum Nutrition", href: "/brands/optimum-nutrition" },
      { label: "MyProtein", href: "/brands/myprotein" },
      { label: "MuscleBlaze", href: "/brands/muscleblaze" },
      { label: "AS-IT-IS Nutrition", href: "/brands/as-it-is" },
      { label: "NOW Sports", href: "/brands/now-sports" },
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
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "All Articles", href: "/research" },
      { label: "Blog", href: "/blog" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
  {
    label: "About",
    href: "/authors",
    children: [
      { label: "Our Team", href: "/authors" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Methodology", href: "/methodology" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header style={{ borderBottom: "1px solid #E5E7EB", backgroundColor: "#FFFFFF", position: "sticky", top: 0, zIndex: 50 }}>

      {/* Trust credential strip — hidden on mobile */}
      <div className="header-strip" style={{ borderBottom: "1px solid #F3F4F6", padding: "6px 0", backgroundColor: "#F8FAFB" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, color: "#6B7280", fontWeight: 500 }}>
            Editorially independent · Evidence-led · No sponsored content
          </span>
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, color: "#9CA3AF" }}>
            USA &amp; Global
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }} aria-label="Fitlabreviews home">
            <Image
              src="/logo-banner.svg"
              alt="Fitlabreviews"
              width={148}
              height={36}
              priority
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
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
                    padding: "6px 10px",
                    fontSize: 14, fontWeight: 500,
                    color: openDropdown === item.label ? "#0E8784" : "#374151",
                    fontFamily: "var(--font-dm-sans), sans-serif",
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
                      opacity: 0.4,
                    }}>
                      <ChevronDown size={12} />
                    </span>
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    className="nav-dropdown"
                    style={{
                      position: "absolute", top: "100%", left: 0, minWidth: 210,
                      backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB",
                      boxShadow: "0 12px 40px -8px rgba(0,0,0,0.12)",
                      borderRadius: 10, padding: "6px 0", zIndex: 100,
                    }}
                  >
                    {item.children.map((child, i) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "9px 16px", fontSize: 13, color: "#374151",
                          fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none",
                          transition: "background-color 120ms var(--ease-out-expo), color 120ms var(--ease-out-expo)",
                          animationDelay: `${i * 20}ms`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#F0FDFA";
                          (e.currentTarget as HTMLElement).style.color = "#0E8784";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#374151";
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
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Link
              href="/search"
              style={{
                color: "#6B7280", display: "flex", alignItems: "center", padding: 6,
                borderRadius: 6,
                transition: "color 150ms var(--ease-out-expo), background-color 150ms var(--ease-out-expo)",
              }}
              aria-label="Search"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#111827";
                (e.currentTarget as HTMLElement).style.backgroundColor = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6B7280";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <Search size={18} />
            </Link>
            <Link
              href="/reviews"
              className="header-cta-btn btn-primary"
              style={{ fontSize: 12 }}
            >
              All Reviews
            </Link>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }}
              className="header-hamburger"
              style={{
                color: "#111827", padding: 6, background: "none", border: "none", cursor: "pointer",
                borderRadius: 6,
                transition: "transform 100ms var(--ease-out-expo), background-color 150ms var(--ease-out-expo)",
              }}
              aria-label="Toggle menu"
            >
              <span style={{ display: "flex", transition: "transform 200ms var(--ease-out-expo)" }}>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{ borderTop: "1px solid #E5E7EB", backgroundColor: "#FFFFFF", maxHeight: "80vh", overflowY: "auto" }}
        >
          <div style={{ padding: "8px 16px 24px" }}>
            {nav.map((item) => (
              <div
                key={item.label}
                className="mobile-nav-item"
                style={{ borderBottom: "1px solid #F3F4F6" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Link
                    href={item.href}
                    style={{
                      display: "block", flex: 1, fontWeight: 600, fontSize: 15,
                      color: "#111827", fontFamily: "var(--font-dm-sans), sans-serif",
                      textDecoration: "none", padding: "12px 0",
                      transition: "color 150ms var(--ease-out-expo)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      style={{
                        background: "none", border: "none", cursor: "pointer", padding: "12px 4px", color: "#9CA3AF",
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
                  <div
                    style={{ paddingLeft: 12, paddingBottom: 8, animation: "fadeUp 200ms var(--ease-out-expo) both" }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block", fontSize: 13, color: "#6B7280",
                          fontFamily: "var(--font-dm-sans), sans-serif", padding: "6px 0",
                          textDecoration: "none",
                          transition: "color 120ms var(--ease-out-expo)",
                        }}
                        onClick={() => setMobileOpen(false)}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#0E8784")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7280")}
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
                href="/reviews"
                className="btn-primary"
                style={{ display: "block", textAlign: "center", borderRadius: 8, fontSize: 13 }}
                onClick={() => setMobileOpen(false)}
              >
                Browse All Reviews →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
