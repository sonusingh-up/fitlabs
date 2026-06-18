"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

/* ─────────────────── Types ─────────────────── */
type MegaLink = { label: string; az?: string; href: string };
type MegaColumn = { title: string; links: MegaLink[] };
type FeaturedCard = { cat: string; title: string; bg: string; href: string };
type NavItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  featured?: FeaturedCard[];
};

/* ─────────────────── Data ─────────────────── */
const BG_G = "linear-gradient(135deg,#d4e9df,#eef6f1)";
const BG_A = "linear-gradient(135deg,#f4e6c9,#faf3e2)";
const BG_B = "linear-gradient(135deg,#d8e6f0,#eef4f9)";

const NAV: NavItem[] = [
  {
    label: "Reviews",
    href: "/reviews",
    columns: [
      {
        title: "By category",
        links: [
          { label: "All Reviews", href: "/reviews" },
          { label: "Protein Powders", href: "/category/protein-powder" },
          { label: "Pre-Workout", href: "/category/pre-workout" },
          { label: "Creatine", href: "/category/creatine" },
          { label: "Probiotics", href: "/category/probiotics" },
          { label: "Greens & Multis", href: "/category/vitamins-minerals" },
        ],
      },
      {
        title: "By score",
        links: [
          { label: "Editor's Choice (9+)", href: "/reviews" },
          { label: "Highly Rated (8+)", href: "/reviews" },
          { label: "Recently Tested", href: "/reviews" },
          { label: "Best Value Picks", href: "/best" },
        ],
      },
      {
        title: "By certification",
        links: [
          { label: "NSF Certified for Sport", href: "/reviews" },
          { label: "Informed Choice", href: "/reviews" },
          { label: "USP Verified", href: "/reviews" },
          { label: "Third-Party Tested", href: "/reviews" },
        ],
      },
    ],
    featured: [
      { cat: "Whey Isolate · 9/10", title: "Dymatize ISO100 Hydrolyzed", bg: BG_G, href: "/reviews/dymatize-iso100-review-2026" },
      { cat: "Pre-Workout · 9/10", title: "Transparent Labs BULK Black", bg: BG_A, href: "/reviews/transparent-labs-bulk-black-review" },
    ],
  },
  {
    label: "Best Of",
    href: "/best",
    columns: [
      {
        title: "Top roundups",
        links: [
          { label: "All Roundups", href: "/best" },
          { label: "Best Protein Powders", href: "/best/whey-protein" },
          { label: "Best Pre-Workouts", href: "/best/pre-workout" },
          { label: "Best Creatine", href: "/best/creatine" },
          { label: "Best Multivitamins", href: "/best/multivitamins" },
          { label: "Best Fat Burners", href: "/best/fat-burner" },
        ],
      },
      {
        title: "By goal",
        links: [
          { label: "Best for Muscle Gain", href: "/best" },
          { label: "Best for Weight Loss", href: "/best" },
          { label: "Best for Energy & Focus", href: "/best" },
          { label: "Best for Recovery", href: "/best" },
        ],
      },
      {
        title: "Buying guides",
        links: [
          { label: "How We Score (FSP v2.1)", href: "/methodology" },
          { label: "Reading a Supplement Label", href: "/blog" },
          { label: "Spotting Pixie-Dusting", href: "/blog" },
        ],
      },
    ],
    featured: [
      { cat: "12 products compared", title: "The Best Protein Powders of 2026", bg: BG_G, href: "/best/whey-protein" },
      { cat: "9 products compared", title: "The Best Pre-Workouts of 2026", bg: BG_A, href: "/best/pre-workout" },
    ],
  },
  {
    label: "Ingredients",
    href: "/ingredients",
    columns: [
      {
        title: "A–Z directory",
        links: [
          { az: "B", label: "Beta-Alanine", href: "/ingredients/beta-alanine" },
          { az: "C", label: "Caffeine", href: "/ingredients/caffeine" },
          { az: "C", label: "Creatine Monohydrate", href: "/ingredients/creatine" },
          { az: "M", label: "Magnesium Glycinate", href: "/ingredients" },
          { az: "O", label: "Omega-3", href: "/ingredients/omega-3" },
          { az: "W", label: "Whey Protein", href: "/ingredients/whey-protein" },
        ],
      },
      {
        title: "By evidence",
        links: [
          { label: "●●● Strong evidence", href: "/ingredients" },
          { label: "●●○ Moderate evidence", href: "/ingredients" },
          { label: "●○○ Limited evidence", href: "/ingredients" },
          { label: "Overhyped — avoid", href: "/ingredients" },
        ],
      },
      {
        title: "By benefit",
        links: [
          { label: "Strength & Power", href: "/goals/strength" },
          { label: "Endurance", href: "/goals/endurance" },
          { label: "Sleep & Recovery", href: "/goals/recovery" },
          { label: "Focus & Calm", href: "/goals/strength" },
        ],
      },
    ],
    featured: [
      { cat: "Strong evidence", title: "Creatine: The Most Studied Ergogenic Aid", bg: BG_G, href: "/ingredients/creatine" },
      { cat: "Strong evidence", title: "Beta-Alanine: Dosing & Evidence Summary", bg: BG_B, href: "/ingredients/beta-alanine" },
    ],
  },
  {
    label: "Brands",
    href: "/brands",
    columns: [
      {
        title: "Popular brands",
        links: [
          { label: "All Brands", href: "/brands" },
          { label: "Optimum Nutrition", href: "/brands/optimum-nutrition" },
          { label: "MyProtein", href: "/brands/myprotein" },
          { label: "Dymatize", href: "/brands/dymatize" },
          { label: "As-It-Is Nutrition", href: "/brands/as-it-is" },
          { label: "MuscleBlaze", href: "/brands/muscleblaze" },
        ],
      },
      {
        title: "By certification",
        links: [
          { label: "NSF-Certified Brands", href: "/brands" },
          { label: "Informed Choice Brands", href: "/brands" },
          { label: "Banned-Substance Tested", href: "/brands" },
        ],
      },
      {
        title: "Brand tools",
        links: [
          { label: "Compare Two Brands", href: "/compare" },
          { label: "Ingredient Lookup", href: "/ingredients" },
          { label: "Our Scoring Rubric", href: "/methodology" },
        ],
      },
    ],
    featured: [
      { cat: "Brand review", title: "Dymatize: Full Brand Analysis", bg: BG_G, href: "/brands/dymatize" },
      { cat: "Brand review", title: "Optimum Nutrition: Deep Dive", bg: BG_A, href: "/brands/optimum-nutrition" },
    ],
  },
  {
    label: "Goals",
    href: "/goals",
    columns: [
      {
        title: "Build",
        links: [
          { label: "Muscle Gain", href: "/goals/muscle-gain" },
          { label: "Strength", href: "/goals/strength" },
          { label: "Athletic Performance", href: "/goals/endurance" },
        ],
      },
      {
        title: "Lean",
        links: [
          { label: "Weight Loss", href: "/goals/fat-loss" },
          { label: "Cutting & Definition", href: "/goals/fat-loss" },
          { label: "Appetite Control", href: "/goals/fat-loss" },
        ],
      },
      {
        title: "Feel",
        links: [
          { label: "Energy & Focus", href: "/goals/strength" },
          { label: "Recovery & Sleep", href: "/goals/recovery" },
          { label: "Stress & Mood", href: "/goals/recovery" },
          { label: "Longevity", href: "/research" },
        ],
      },
    ],
    featured: [
      { cat: "Goal guide", title: "The Evidence-Backed Muscle-Gain Stack", bg: BG_G, href: "/goals/muscle-gain" },
      { cat: "Goal guide", title: "What Actually Helps You Sleep", bg: BG_B, href: "/goals/recovery" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    columns: [
      {
        title: "Calculators",
        links: [
          { label: "BMR Calculator", href: "/tools/free/bmr-calculator" },
          { label: "Macros Calculator", href: "/tools/free/macros-calculator" },
          { label: "All Free Tools", href: "/tools" },
        ],
      },
      {
        title: "Lookups",
        links: [
          { label: "Ingredient Library A–Z", href: "/ingredients" },
          { label: "Brand Directory", href: "/brands" },
          { label: "Compare Products", href: "/compare" },
        ],
      },
    ],
    featured: [
      { cat: "Free tool", title: "Find Your Calorie Target (BMR + TDEE)", bg: BG_G, href: "/tools/free/bmr-calculator" },
      { cat: "Free tool", title: "Set Your Daily Macros", bg: BG_A, href: "/tools/free/macros-calculator" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    columns: [
      {
        title: "Deep dives",
        links: [
          { label: "All Research", href: "/research" },
          { label: "Longevity & Aging", href: "/research" },
          { label: "Pharmacology", href: "/research" },
          { label: "Mental Health", href: "/research" },
          { label: "Nutrition Science", href: "/research" },
        ],
      },
      {
        title: "Field notes",
        links: [
          { label: "The Blog", href: "/blog" },
          { label: "Training Science", href: "/blog" },
          { label: "Women's Health", href: "/blog" },
        ],
      },
      {
        title: "How we work",
        links: [
          { label: "Methodology (FSP v2.1)", href: "/methodology" },
          { label: "Editorial Policy", href: "/editorial-policy" },
          { label: "Our Team", href: "/authors" },
        ],
      },
    ],
    featured: [
      { cat: "Strong evidence", title: "The Perfect Sleep Window: 6.4–7.8 Hours", bg: BG_G, href: "/research/sleep-duration-biological-aging" },
      { cat: "Pharmacology", title: "GLP-1 Drugs: 5 Benefits Beyond Weight Loss", bg: BG_A, href: "/research/glp1-beyond-weight-loss" },
    ],
  },
];

const TRENDING_SEARCHES = [
  "Creatine",
  "Best whey protein 2026",
  "Ozempic / Wegovy",
  "Magnesium for sleep",
  "Ashwagandha dosing",
  "Pre-workout without crash",
];

const POPULAR_TOPICS: FeaturedCard[] = [
  { cat: "Reviews · 9/10", title: "Dymatize ISO100 Hydrolyzed Whey", bg: BG_G, href: "/reviews/dymatize-iso100-review-2026" },
  { cat: "Ingredient deep-dive", title: "Creatine: Dosing & Evidence Summary", bg: BG_G, href: "/ingredients/creatine" },
  { cat: "Research · Strong evidence", title: "The Perfect Sleep Window", bg: BG_B, href: "/research/sleep-duration-biological-aging" },
  { cat: "Free tool", title: "BMR + TDEE Calculator", bg: BG_A, href: "/tools/free/bmr-calculator" },
];

/* ─────────────────── Component ─────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  const activeItem = NAV.find((n) => n.label === openMenu) ?? null;

  function isActive(href: string) {
    return pathname === href || pathname?.startsWith(href + "/");
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#ffffff",
        transition: "box-shadow 200ms var(--ease-out-expo)",
        ...(scrolled ? { boxShadow: "0 6px 24px -12px rgba(10,30,22,.22)" } : {}),
      }}
    >
      {/* ── Utility strip — desktop only via .header-strip ── */}
      <div
        className="header-strip"
        style={{
          borderBottom: "1px solid #F0F3F1",
          padding: "6px 0",
          backgroundColor: "#0A1410",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#CDD8D1", letterSpacing: "0.06em" }}>
            EDITORIALLY INDEPENDENT · EVIDENCE-LED · NO SPONSORED CONTENT
          </span>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#CDD8D1", opacity: 0.6, letterSpacing: "0.06em" }}>
            USA &amp; GLOBAL
          </span>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div
        ref={navRef}
        onMouseLeave={() => setOpenMenu(null)}
        style={{ borderBottom: "1px solid #E9EDE9", backgroundColor: "#fff", position: "relative" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>

          {/* Logo */}
          <Link href="/" aria-label="Fitlabreviews home" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 900,
                fontSize: 26,
                color: "#17211C",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              fitlabreviews
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="header-desktop-nav" aria-label="Main Navigation" style={{ alignItems: "center", gap: 2, height: "100%" }}>
            {NAV.map((item) => {
              const active = isActive(item.href);
              const open = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                  onMouseEnter={() => { setOpenMenu(item.label); setSearchOpen(false); }}
                >
                  <Link
                    href={item.href}
                    aria-expanded={open ? "true" : "false"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      height: "100%",
                      padding: "0 12px",
                      fontSize: 14,
                      fontWeight: active || open ? 700 : 500,
                      color: active || open ? "#0F7A5A" : "#374151",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      borderBottom: open ? "2px solid #0F7A5A" : "2px solid transparent",
                      transition: "color 150ms var(--ease-out-expo), border-color 150ms var(--ease-out-expo)",
                    }}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown
                        size={12}
                        style={{
                          opacity: 0.5,
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 200ms var(--ease-out-expo)",
                        }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button
              onClick={() => { setSearchOpen((v) => !v); setOpenMenu(null); }}
              aria-label="Open Search"
              aria-expanded={searchOpen}
              style={{
                background: searchOpen ? "#E7F2EC" : "transparent",
                border: "none",
                borderRadius: 8,
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: searchOpen ? "#0F7A5A" : "#586259",
                transition: "background 150ms var(--ease-out-expo), color 150ms var(--ease-out-expo)",
              }}
            >
              <Search size={18} />
            </button>

            <Link
              href="/reviews"
              className="header-cta-btn btn-primary"
              style={{ fontSize: 13 }}
            >
              All Reviews
            </Link>

            <button
              onClick={() => { setMobileOpen((v) => !v); setMobileExpanded(null); }}
              className="header-hamburger"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                color: "#374151",
                padding: 6,
                background: "none",
                border: "1px solid #D7DDD9",
                cursor: "pointer",
                borderRadius: 7,
                transition: "background-color 150ms var(--ease-out-expo)",
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ══════════ MEGA MENU PANEL ══════════ */}
        {activeItem && activeItem.columns && (
          <div
            className="mega-panel"
            onMouseEnter={() => setOpenMenu(activeItem.label)}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "30px 24px 36px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.15fr", gap: 32 }}>
              {activeItem.columns.map((col) => (
                <div key={col.title}>
                  <div className="mega-col-title">{col.title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {col.links.map((lnk) => (
                      <Link key={lnk.label} href={lnk.href} className="mega-link">
                        {lnk.az && <span className="mega-az-badge">{lnk.az}</span>}
                        {lnk.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {activeItem.featured && (
                <div style={{ borderLeft: "1px solid #EEF1EF", paddingLeft: 28 }}>
                  <div className="mega-trending-label">Trending</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {activeItem.featured.map((f) => (
                      <Link key={f.title} href={f.href} className="mega-featured-card">
                        <div style={{ width: 60, height: 60, flex: "none", borderRadius: 10, background: f.bg }} />
                        <div>
                          <div className="mega-featured-cat">{f.cat}</div>
                          <div className="mega-featured-title">{f.title}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════ SEARCH OVERLAY ══════════ */}
        {searchOpen && (
          <>
            <div className="search-panel">
              <div style={{ maxWidth: 840, margin: "0 auto", padding: "32px 24px 40px" }}>
                <div className="search-input-wrap">
                  <Search size={20} style={{ color: "#0F7A5A", flexShrink: 0 }} />
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search for a supplement, ingredient, or condition…"
                    className="search-input"
                    aria-label="Search site"
                  />
                  <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="search-close-btn">
                    <X size={16} />
                  </button>
                </div>

                <div style={{ marginTop: 26 }}>
                  <div className="search-section-label">Trending searches</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                    {TRENDING_SEARCHES.map((t) => (
                      <Link key={t} href={`/search?q=${encodeURIComponent(t)}`} className="search-trend-chip">
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 28 }}>
                  <div className="search-section-label">Popular topics</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {POPULAR_TOPICS.map((p) => (
                      <Link key={p.title} href={p.href} className="search-topic-card">
                        <div style={{ width: 46, height: 46, flex: "none", borderRadius: 9, background: p.bg }} />
                        <div>
                          <div className="search-topic-cat">{p.cat}</div>
                          <div className="search-topic-title">{p.title}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="search-backdrop" onClick={() => setSearchOpen(false)} aria-hidden="true" />
          </>
        )}
      </div>

      {/* ══════════ MOBILE DRAWER ══════════ */}
      {mobileOpen && (
        <div className="mobile-drawer" style={{ borderTop: "1px solid #E9EDE9", backgroundColor: "#FFFFFF", maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ padding: "8px 16px 24px" }}>
            <div className="mobile-search-row">
              <Search size={17} style={{ color: "#6B7770", flexShrink: 0 }} />
              <input
                type="search"
                placeholder="Search reviews, ingredients…"
                style={{ flex: 1, border: "none", background: "none", outline: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15 }}
              />
            </div>

            {NAV.map((item) => (
              <div key={item.label} className="mobile-nav-item" style={{ borderBottom: "1px solid #F3F4F6" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Link
                    href={item.href}
                    style={{
                      display: "block", flex: 1, fontWeight: 600, fontSize: 15,
                      color: isActive(item.href) ? "#0F7A5A" : "#17211c",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      textDecoration: "none", padding: "12px 0",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                      aria-expanded={mobileExpanded === item.label}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "12px 4px", color: "#9CA3AF", display: "flex", alignItems: "center" }}
                    >
                      <ChevronDown
                        size={16}
                        style={{
                          transition: "transform 220ms var(--ease-out-expo)",
                          transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                  )}
                </div>
                {item.columns && mobileExpanded === item.label && (
                  <div style={{ paddingLeft: 12, paddingBottom: 8 }}>
                    {item.columns.flatMap((col) => col.links).map((lnk) => (
                      <Link
                        key={lnk.label}
                        href={lnk.href}
                        style={{ display: "block", fontSize: 13, color: "#586259", padding: "6px 0", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {lnk.label}
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
                style={{ display: "block", textAlign: "center", borderRadius: 999, fontSize: 13 }}
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
