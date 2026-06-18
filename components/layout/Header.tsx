"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Menu, X, Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [overlayQuery, setOverlayQuery] = useState("");
  const [overlayResults, setOverlayResults] = useState<Array<{ url: string; title: string; type: string }>>([]);
  const [overlayLoading, setOverlayLoading] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const overlayDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        setOverlayQuery("");
      }
      // Cmd+K / Ctrl+K opens search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setOverlayQuery("");
      setOverlayResults([]);
    }
  }, [searchOpen]);

  // Scroll lock when any overlay is open
  useEffect(() => {
    const isLocked = searchOpen || mobileOpen;
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen, mobileOpen]);

  // Live search inside the overlay (top 5 quick results)
  const runOverlaySearch = useCallback(async (q: string) => {
    if (!q || q.length < 2) { setOverlayResults([]); return; }
    setOverlayLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error — pagefind generated post-build
      const pf = window.pagefind ?? await import(/* webpackIgnore: true */ "/pagefind/pagefind.js").then(async (m: any) => { await m.init(); window.pagefind = m; return m; });
      const search = await pf.search(q);
      const top = search.results.slice(0, 5);
      const data = await Promise.all(top.map((r: { data: () => Promise<{ url: string; meta: { title?: string } }> }) => r.data()));
      setOverlayResults(data.map((d: { url: string; meta: { title?: string } }) => ({
        url: d.url.replace(/\.html$/, "").replace(/\/index$/, "") || "/",
        title: d.meta?.title ?? d.url,
        type: d.url.includes("/reviews/") ? "Review"
            : d.url.includes("/ingredients/") ? "Ingredient"
            : d.url.includes("/research/") ? "Research"
            : d.url.includes("/blog/") ? "Article"
            : d.url.includes("/brands/") ? "Brand"
            : "Page",
      })));
    } catch {
      setOverlayResults([]);
    } finally {
      setOverlayLoading(false);
    }
  }, []);

  useEffect(() => {
    if (overlayDebounceRef.current) clearTimeout(overlayDebounceRef.current);
    if (overlayQuery.length < 2) { setOverlayResults([]); return; }
    overlayDebounceRef.current = setTimeout(() => runOverlaySearch(overlayQuery), 240);
    return () => { if (overlayDebounceRef.current) clearTimeout(overlayDebounceRef.current); };
  }, [overlayQuery, runOverlaySearch]);

  function handleOverlayKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && overlayQuery.trim()) {
      setSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(overlayQuery.trim())}`);
    }
  }

  function handleMobileSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && mobileQuery.trim()) {
      setMobileOpen(false);
      router.push(`/search?q=${encodeURIComponent(mobileQuery.trim())}`);
    }
  }

  function handleSearchPanelKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab") return;
    const panel = searchPanelRef.current;
    if (!panel) return;
    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

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
        paddingTop: "env(safe-area-inset-top, 0)",
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
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null); }}
        style={{ borderBottom: "1px solid #E9EDE9", backgroundColor: "#fff", position: "relative" }}
      >
        <div className="header-inner" style={{ maxWidth: 1280, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <Link href="/" aria-label="Fitlabreviews home" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 5.5vw, 26px)",
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
                  onFocus={() => { setOpenMenu(item.label); setSearchOpen(false); }}
                >
                  <Link
                    href={item.href}
                    {...(item.columns ? { "aria-haspopup": "true" as const } : {})}
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
                width: 44,
                height: 44,
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

            <div className="header-cta-btn" style={{ flexShrink: 0 }}>
              <Link href="/reviews" className="btn-primary" style={{ fontSize: 13 }}>
                All Reviews
              </Link>
            </div>

            <button
              onClick={() => { setMobileOpen((v) => !v); setMobileExpanded(null); }}
              className="header-hamburger"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                color: "#374151",
                padding: "12px",
                minWidth: 44,
                minHeight: 44,
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
            <div ref={searchPanelRef} className="search-panel" role="dialog" aria-modal="true" aria-label="Search" onKeyDown={handleSearchPanelKeyDown}>
              <div style={{ maxWidth: 840, margin: "0 auto", padding: "32px 24px 40px" }}>
                {/* Input row */}
                <div className="search-input-wrap">
                  {overlayLoading
                    ? <Loader2 size={20} style={{ color: "#0F7A5A", flexShrink: 0, animation: "header-spin 1s linear infinite" }} />
                    : <Search size={20} style={{ color: "#0F7A5A", flexShrink: 0 }} />
                  }
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search for a supplement, ingredient, or condition…"
                    className="search-input"
                    aria-label="Search site"
                    value={overlayQuery}
                    onChange={(e) => setOverlayQuery(e.target.value)}
                    onKeyDown={handleOverlayKeyDown}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <kbd style={{ fontSize: 11, color: "#6B7770", border: "1px solid #D7DDD9", borderRadius: 5, padding: "2px 7px", fontFamily: "var(--font-jetbrains), monospace", lineHeight: 1.6 }}>↵ Enter</kbd>
                    <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="search-close-btn">
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Live results */}
                {overlayQuery.length >= 2 && (
                  <div style={{ marginTop: 16, borderRadius: 12, border: "1px solid #E4E8E5", overflow: "hidden" }}>
                    {overlayResults.length > 0 ? (
                      <>
                        {overlayResults.map((r, i) => (
                          <Link
                            key={i}
                            href={r.url}
                            onClick={() => setSearchOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "12px 16px",
                              borderBottom: i < overlayResults.length - 1 ? "1px solid #F0F4F2" : "none",
                              textDecoration: "none",
                              backgroundColor: "#FFFFFF",
                            }}
                            className="hub-row-link"
                          >
                            <span style={{ fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: ".08em", padding: "2px 6px", borderRadius: 4, backgroundColor: "#E7F2EC", color: "#0A4F3B", flexShrink: 0 }}>
                              {r.type}
                            </span>
                            <span style={{ fontSize: 14, fontWeight: 600, color: "#17211C", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {r.title}
                            </span>
                            <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", flexShrink: 0 }}>
                              {r.url}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href={`/search?q=${encodeURIComponent(overlayQuery)}`}
                          onClick={() => setSearchOpen(false)}
                          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "11px 16px", backgroundColor: "#F6F8F6", textDecoration: "none", fontSize: 13, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                          See all results for &ldquo;{overlayQuery}&rdquo; →
                        </Link>
                      </>
                    ) : !overlayLoading ? (
                      <div style={{ padding: "16px", textAlign: "center", backgroundColor: "#F6F8F6" }}>
                        <span style={{ fontSize: 13, color: "#6B7770" }}>No results — <Link href={`/search?q=${encodeURIComponent(overlayQuery)}`} onClick={() => setSearchOpen(false)} style={{ color: "#0F7A5A", fontWeight: 600 }}>try full search →</Link></span>
                      </div>
                    ) : null}
                  </div>
                )}

                {/* Trending — shown when query is empty */}
                {overlayQuery.length < 2 && (
                  <>
                    <div style={{ marginTop: 26 }}>
                      <div className="search-section-label">Trending searches</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                        {TRENDING_SEARCHES.map((t) => (
                          <Link
                            key={t}
                            href={`/search?q=${encodeURIComponent(t)}`}
                            className="search-trend-chip"
                            onClick={() => setSearchOpen(false)}
                          >
                            {t}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 28 }}>
                      <div className="search-section-label">Popular topics</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {POPULAR_TOPICS.map((p) => (
                          <Link key={p.title} href={p.href} className="search-topic-card" onClick={() => setSearchOpen(false)}>
                            <div style={{ width: 46, height: 46, flex: "none", borderRadius: 9, background: p.bg }} />
                            <div>
                              <div className="search-topic-cat">{p.cat}</div>
                              <div className="search-topic-title">{p.title}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
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
              <label htmlFor="mobile-search-input" className="sr-only">Search reviews, ingredients</label>
              <input
                id="mobile-search-input"
                type="search"
                placeholder="Search reviews, ingredients…"
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                onKeyDown={handleMobileSearchKeyDown}
                style={{ flex: 1, border: "none", background: "none", outline: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16 }}
              />
              {mobileQuery && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    router.push(`/search?q=${encodeURIComponent(mobileQuery.trim())}`);
                  }}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#0F7A5A", fontSize: 13, fontWeight: 700, fontFamily: "var(--font-dm-sans), sans-serif", padding: "0 4px" }}
                >
                  Go →
                </button>
              )}
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
                      textDecoration: "none", padding: "14px 0",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                      aria-expanded={mobileExpanded === item.label}
                      aria-label={`${mobileExpanded === item.label ? "Collapse" : "Expand"} ${item.label} submenu`}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "12px 8px", color: "#586259", display: "flex", alignItems: "center" }}
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
                        style={{ display: "block", fontSize: 13, color: "#586259", padding: "10px 0", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
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
