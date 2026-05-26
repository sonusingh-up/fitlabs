"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Reviews",
    href: "/category",
    children: [
      { label: "All Categories", href: "/category" },
      { label: "Protein Powder", href: "/category/protein-powder" },
      { label: "Pre-Workout", href: "/category/pre-workout" },
      { label: "Creatine", href: "/category/creatine" },
      { label: "Vitamins & Minerals", href: "/category/vitamins-minerals" },
      { label: "Adaptogens", href: "/category/adaptogens" },
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
    href: "/goals/muscle-gain",
    children: [
      { label: "Muscle Gain", href: "/goals/muscle-gain" },
      { label: "Weight Loss", href: "/goals/weight-loss" },
      { label: "Energy & Focus", href: "/goals/energy-focus" },
      { label: "Recovery & Sleep", href: "/goals/recovery" },
    ],
  },
  { label: "Methodology", href: "/methodology" },
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

  return (
    <header
      style={{
        borderBottom: "1px solid #D4C9B8",
        backgroundColor: "#F2EBD9",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Top editorial strip */}
      <div
        style={{
          borderBottom: "1px solid #D4C9B8",
          padding: "6px 0",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#8A8480",
          fontFamily: "var(--font-dm-mono), monospace",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>VOL. I · 2025 · EVIDENCE-LED SUPPLEMENT RESEARCH</span>
          <span>INDIA &amp; GLOBAL EDITION</span>
        </div>
      </div>

      {/* Main nav row */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

          {/* Logo — image on md+, text fallback on mobile */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }} aria-label="Fitlabreviews home">
            {/* Full wordmark — hidden on very small screens */}
            <span className="hidden sm:block">
              <Image
                src="/logo-banner.svg"
                alt="Fitlabreviews — Reviews · No Bias"
                width={160}
                height={40}
                priority
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </span>
            {/* Text fallback for tiny screens when banner is hidden */}
            <span
              className="sm:hidden"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.05em",
                color: "#1A1714",
                textTransform: "uppercase",
              }}
            >
              Fitlabreviews
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden lg:flex">
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
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    padding: "6px 12px",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    color: openDropdown === item.label ? "#C4622D" : "#1A1714",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    borderRadius: 8,
                    transition: "color 0.15s",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown size={12} style={{ opacity: 0.5 }} />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: 210,
                      backgroundColor: "#F8F2E4",
                      border: "1px solid #D4C9B8",
                      boxShadow: "0 8px 32px -8px rgba(26,23,20,0.14)",
                      borderRadius: 8,
                      padding: "8px 0",
                      zIndex: 100,
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "8px 16px",
                          fontSize: 13,
                          color: "#2D2926",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          textDecoration: "none",
                          transition: "background 0.1s, color 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#F0E8D0";
                          (e.currentTarget as HTMLElement).style.color = "#C4622D";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#2D2926";
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
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/search"
              style={{ color: "#5C5650", display: "flex", alignItems: "center", padding: 6 }}
              aria-label="Search"
            >
              <Search size={18} />
            </Link>

            <Link
              href="/category/all"
              style={{
                display: "none",
                padding: "7px 16px",
                backgroundColor: "#1A1714",
                color: "#F2EBD9",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderRadius: 8,
                fontFamily: "var(--font-dm-sans), sans-serif",
                textDecoration: "none",
              }}
              className="lg:block"
            >
              All Reviews
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#1A1714", padding: 6 }}
              aria-label="Toggle menu"
              className="lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid #D4C9B8",
            backgroundColor: "#F8F2E4",
            padding: "16px 24px 24px",
          }}
        >
          {nav.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid #EDE8DF", paddingBottom: 12, marginBottom: 12 }}>
              <Link
                href={item.href}
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#1A1714",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  textDecoration: "none",
                  marginBottom: item.children ? 8 : 0,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ paddingLeft: 12 }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      style={{
                        display: "block",
                        fontSize: 13,
                        color: "#5C5650",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        padding: "4px 0",
                        textDecoration: "none",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
