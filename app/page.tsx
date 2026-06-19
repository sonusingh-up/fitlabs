import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { researchBriefs } from "@/lib/data";
import { allArticles, getArticleImage } from "@/lib/articles";
import TrustPillars from "@/components/ui/TrustPillars";
import NewsletterForm from "@/components/ui/NewsletterForm";
import RecommendedReads from "@/components/ui/RecommendedReads";

export const metadata: Metadata = {
  title: { absolute: "Fitlabreviews — Evidence-Led Supplement Reviews" },
  description:
    "Research-grade supplement reviews, ingredient analysis, and free nutrition tools. 142+ products reviewed, 87 ingredients profiled, zero sponsor influence.",
  alternates: { canonical: "/" },
};

const latestResearch = researchBriefs.slice(0, 3);

const GOAL_CARDS = [
  {
    code: "G-01", title: "Muscle Gain", bg: "#0F7A5A", href: "/goals/muscle-gain",
    desc: "Build lean mass with evidence-backed protocols and foundational diet structure.",
    tags: ["Creatine", "Whey", "Beta-Alanine"],
  },
  {
    code: "G-02", title: "Weight Loss", bg: "#C98A1E", href: "/goals/fat-loss",
    desc: "Support your deficit with ingredients that preserve muscle and improve satiety.",
    tags: ["Protein", "Caffeine", "L-Carnitine"],
  },
  {
    code: "G-03", title: "Energy & Focus", bg: "#0A4F3B", href: "/goals/strength",
    desc: "Build a clean stimulant stack that performs all day without the afternoon crash.",
    tags: ["Caffeine", "L-Theanine", "Ashwagandha"],
  },
  {
    code: "G-04", title: "Recovery & Sleep", bg: "#17211C", href: "/goals/recovery",
    desc: "Reduce soreness, deepen sleep, and optimise your body's natural repair window.",
    tags: ["Magnesium", "Ashwagandha", "Glycine"],
  },
];

const TOOL_CARDS = [
  { label: "BMR CALCULATOR",     title: "Find the calories you burn at rest",       href: "/tools/free/bmr-calculator" },
  { label: "MACROS CALCULATOR",  title: "Set your daily carb, protein & fat split", href: "/tools/free/macros-calculator" },
  { label: "PROTEIN CALCULATOR", title: "How much protein you actually need",        href: "/tools" },
];

const EDITOR_PICKS = [
  {
    rank: 1, slug: "dymatize-iso100-review-2026",
    title: "ISO100 Hydrolyzed Whey Isolate", category: "WHEY ISOLATE", brand: "DYMATIZE",
    score: 9, specs: "NSF Certified · 25g protein · $67–$85",
    bg: "#D4E9DF", stripeColor: "rgba(15,122,90,.08)", labelColor: "#0A4F3B",
    image: "/lifestyle/dymatize_iso100.jpg",
  },
  {
    rank: 2, slug: "transparent-labs-bulk-black-review",
    title: "BULK Black Pre-Workout", category: "PRE-WORKOUT", brand: "T. LABS",
    score: 9, specs: "Full disclosure · 275mg caffeine · $49–$55",
    bg: "#FDF3DE", stripeColor: "rgba(201,138,30,.1)", labelColor: "#7A5A0A",
    image: "/lifestyle/transparent_labs_bulk.png",
  },
  {
    rank: 3, slug: "heart-and-soil-beef-organs",
    title: "Beef Organs Complex", category: "ORGAN", brand: "HEART & SOIL",
    score: 9, specs: "Grass-fed · 6 organs · $52–$58",
    bg: "#D4E9DF", stripeColor: "rgba(15,122,90,.08)", labelColor: "#0A4F3B",
    image: "/lifestyle/heart_soil_beef_organs.jpg",
  },
  {
    rank: 4, slug: "seed-ds01-daily-synbiotic-review",
    title: "DS-01 Daily Synbiotic", category: "PROBIOTIC", brand: "SEED",
    score: 8, specs: "24 strains · AFU-tested · $49/mo",
    bg: "#E4EAF0", stripeColor: "rgba(60,90,120,.08)", labelColor: "#3A4F5A",
    image: "/lifestyle/seed_ds01.jpg",
  },
];

const RECOMMENDED_READS = allArticles
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  })
  .slice(0, 8);


export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hp-hero-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 72px", display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 56, alignItems: "start" }}>
        {/* Featured article */}
        <article>
          <Link href="/research/sleep-duration-biological-aging" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <Image
                src="/lifestyle/sleep_longevity.png"
                alt="Woman sleeping peacefully — sleep duration and anti-aging research"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <span style={{ position: "absolute", top: 16, left: 16, background: "#0A4F3B", color: "#DFF3E9", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", padding: "6px 11px", borderRadius: 7, zIndex: 1 }}>
                FIG. 01 — EDITORIAL
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0 12px" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#0F7A5A", fontWeight: 500 }}>
                Longevity &amp; Sleep
              </span>
              <span style={{ height: 14, width: 1, background: "#CFD6D1" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#0A4F3B", background: "#E7F2EC", padding: "3px 9px", borderRadius: 6 }}>
                STRONG EVIDENCE
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(32px,4vw,46px)", fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1.07, margin: "0 0 16px", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              The Perfect Sleep Window: Why 6.4&ndash;7.8 Hours Is the Anti-Aging Sweet Spot
            </h1>
            <p style={{ fontSize: "clamp(16px, 2.5vw, 18px)", lineHeight: 1.65, color: "#586259", margin: "0 0 18px", maxWidth: 620 }}>
              We read 40+ cohort studies on sleep duration and mortality. The protective range is narrower — and more specific — than the &ldquo;eight hours&rdquo; rule suggests.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              {/* Avatar — FL initials */}
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#0F7A5A", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                FL
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px 10px" }}>
                <span style={{ fontSize: 14, color: "#586259" }}>
                  By <strong style={{ color: "#17211C" }}>Fitlab Editorial</strong>
                </span>
                {/* Peer-reviewed badge */}
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#E7F2EC", border: "1px solid #C9DFD4", borderRadius: 6, padding: "3px 9px", fontSize: 12, color: "#0A4F3B", fontWeight: 600, whiteSpace: "nowrap" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  R. Mehta, RD
                </span>
                <span style={{ height: 12, width: 1, background: "#CFD6D1", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#6B7770", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  May 2026 · 9 min
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* Trending sidebar — auto from registry */}
        <aside className="hp-hero-aside">
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 22 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A474" strokeWidth="2.4">
              <path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" />
            </svg>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 24, fontWeight: 600, margin: 0 }}>
              Trending now
            </h2>
          </div>

          {allArticles
            .filter(a => a.slug !== "sleep-window-anti-aging")
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 4)
            .map((item, i) => (
            <Link
              key={item.slug}
              href={item.href}
              style={{ display: "flex", gap: 16, textDecoration: "none", color: "inherit", paddingBottom: 20, marginBottom: 20, borderBottom: i < 3 ? "1px solid #E4E8E5" : "none", alignItems: "center" }}
            >
              <div style={{ width: 88, height: 88, flex: "none", borderRadius: 11, overflow: "hidden", position: "relative" }}>
                <Image
                  src={getArticleImage(item)}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="88px"
                />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 5 }}>
                  {item.category}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.28 }}>{item.title}</div>
              </div>
            </Link>
          ))}
        </aside>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 84px" }}>
        <div className="hp-newsletter-grid" style={{ borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1.1fr .9fr", background: "linear-gradient(120deg,#E7F2EC,#F2F8F4)" }}>
          <div className="hp-newsletter-inner" style={{ padding: "54px 52px" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 38, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 14px", lineHeight: 1.08 }}>
              Evidence first.<br />Noise never.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 26px", maxWidth: 420 }}>
              Weekly supplement research, ingredient deep-dives, and honest product updates straight to your inbox — no hype, no sponsors.
            </p>
            <NewsletterForm />
            <p style={{ fontSize: 12, color: "#6B7770", marginTop: 14 }}>
              Your <Link href="/privacy" style={{ color: "#0F7A5A" }}>privacy</Link> matters. Unsubscribe anytime.
            </p>
          </div>
          <div className="hp-newsletter-img" style={{ position: "relative", minHeight: 300, overflow: "hidden" }}>
            <Image
              src="/lifestyle/health_wellness_editorial.png"
              alt="Woman enjoying a peaceful morning — healthy lifestyle"
              fill
              loading="eager"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* ── SEC. 01 — BROWSE BY GOAL ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 88px" }}>
        <div className="hp-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
          <div>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
              Sec. 01 — Browse by goal
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
              Start with <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>your objective</em>
            </h2>
          </div>
          <Link href="/goals" style={{ color: "#0F7A5A", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
            All goal guides →
          </Link>
        </div>
        <div className="hp-goal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {GOAL_CARDS.map((g, i) => (
            <Link
              key={g.code}
              href={g.href}
              className="hover-featured hp-goal-card"
              style={{
                textDecoration: "none", color: "#FFFFFF", borderRadius: 16, background: g.bg,
                display: "flex", flexDirection: "column", minHeight: 300, padding: 26,
                position: "relative", overflow: "hidden",
                transition: "transform 200ms var(--ease-out-expo)",
                animation: "fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both",
                animationDelay: `${i * 85 + 60}ms`,
              }}
            >
              {/* Arrow affordance */}
              <div className="hp-goal-arrow" style={{ position: "absolute", top: 20, right: 20, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 200ms var(--ease-out-expo), transform 200ms var(--ease-out-expo)" }}>
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, opacity: 0.65, marginBottom: 14, letterSpacing: "0.08em" }}>{g.code}</div>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 26, fontWeight: 500, margin: "0 0 10px", color: "#FFFFFF", lineHeight: 1.15 }}>{g.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: "0 0 auto" }}>{g.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 20 }}>
                {g.tags.map((t) => (
                  <span key={t} style={{ fontSize: 11, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)", padding: "4px 10px", borderRadius: 20, letterSpacing: "0.02em" }}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SEC. 02 — FREE TOOLS ── */}
      <section style={{ background: "#F6F8F6", borderTop: "1px solid #E4E8E5", borderBottom: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ marginBottom: 34 }}>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
              Sec. 02 — Free tools
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
              Calculators &amp; <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>lookups</em>
            </h2>
          </div>
          <div className="hp-tools-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 22 }}>
            {/* Feature card */}
            <div className="hp-tools-feature" style={{ borderRadius: 18, background: "linear-gradient(140deg,#E7F2EC,#F2F8F4)", padding: "42px 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start", overflow: "hidden", position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 30, fontWeight: 500, margin: "0 0 12px" }}>
                  Dial in your nutrition
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 26px", maxWidth: 360 }}>
                  Find your calorie target, daily macros, and protein needs with our free, no-signup calculators — built on the Mifflin-St Jeor equation.
                </p>
                <Link href="/tools/free/bmr-calculator" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Open BMR Calculator
                </Link>
              </div>
              {/* Nutrition photo */}
              <div className="hp-tools-photo" style={{ width: 180, height: 180, borderRadius: 14, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                <Image
                  src="/lifestyle/calculator_lifestyle.png"
                  alt="Woman tracking nutrition on phone with healthy food"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="180px"
                />
              </div>
            </div>
            {/* Tool rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {TOOL_CARDS.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="tool-card-link"
                  style={{ textDecoration: "none", color: "inherit", background: "#FFFFFF", border: "1px solid #E4E8E5", borderRadius: 14, padding: 22, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", marginBottom: 6 }}>{t.label}</div>
                    <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{t.title}</div>
                  </div>
                  <span style={{ width: 40, height: 40, flex: "none", borderRadius: "50%", background: "#E7F2EC", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INGREDIENT LIBRARY PROMO (HEALTHLINE REDESIGN) ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "84px 24px" }}>
        <div className="layout-ingredient-promo">
          
          {/* Left Column: 3 Stacked Cards */}
          <div className="promo-small-cards">
            <Link href="/goals" className="hover-scale promo-small-card" style={{ textDecoration: "none", color: "#FFFFFF", borderRadius: 24, background: "linear-gradient(135deg, #1C6B6D, #2A7E7D)", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.9, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Goal Guides</div>
                <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>Identify supplements for your objective</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF", color: "#2A7E7D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </Link>
            
            <Link href="/reviews" className="hover-scale promo-small-card" style={{ textDecoration: "none", color: "#FFFFFF", borderRadius: 24, background: "linear-gradient(135deg, #449596, #58A6A5)", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.9, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Product Reviews</div>
                <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>Compare top-rated brands online</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF", color: "#58A6A5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </Link>
            
            <Link href="/research" className="hover-scale promo-small-card" style={{ textDecoration: "none", color: "#FFFFFF", borderRadius: 24, background: "linear-gradient(135deg, #66B2AE, #7EC1BB)", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.9, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Science Hub</div>
                <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>Find clinical trials &amp; deep-dives</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF", color: "#7EC1BB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </div>
            </Link>
          </div>

          {/* Right Column: Main Directory Card */}
          <div className="promo-big-card">
            <h2 className="promo-big-card-title">
              Ingredient Library: A to Z
            </h2>
            <p className="promo-big-card-desc">
              Learn everything you need to know about specific active ingredients, natural extracts, and over-the-counter supplements.
            </p>
            <Link
              href="/ingredients"
              className="promo-big-card-btn hover-scale"
            >
              Search ingredients
            </Link>

            {/* Bottom Graphic */}
            <div className="promo-big-card-img">
              <Image
                src="https://szpdxovusioijennckfg.supabase.co/storage/v1/object/sign/images/ingredient_library_hero.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZTlhOGU1OS1mY2MwLTRmODUtYjE2YS1jYjBkYmM0MjljOTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaW5ncmVkaWVudF9saWJyYXJ5X2hlcm8ucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTg3ODI1MywiZXhwIjoxOTM5NTU4MjUzfQ.huAgk7XpVAlrH6NZtv64Jz08ul4Rv-icA04kJKxZYgU"
                alt="Weekly pill organizer filled with supplements"
                fill
                className="promo-big-card-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* ── SEC. 03 — RECOMMENDED READS ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
            Sec. 03 — Recommended reads
          </div>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
            Worth <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>your time</em>
          </h2>
        </div>

        <RecommendedReads articles={RECOMMENDED_READS} />
      </section>

      {/* ── SEC. 04 — EDITORIAL STANDARDS ── */}
      <section style={{ background: "#0D1810" }}>
        <div className="hp-editorial-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "84px 24px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          {/* Left */}
          <div>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#4A9A78", marginBottom: 20 }}>
              Sec. 04 — Editorial standards
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(30px,3.5vw,44px)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "-.02em", lineHeight: 1.1, margin: "0 0 36px" }}>
              Why you can trust us on your health journey
            </h2>
            {/* Team photo */}
            <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <Image
                src="/lifestyle/team_professionals.png"
                alt="Editorial team reviewing research together"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right — interactive trust pillars */}
          <TrustPillars />
        </div>
      </section>

      {/* ── SEC. 05 — EDITOR'S PICKS ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "84px 24px" }}>
        <div className="hp-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
          <div>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
              Sec. 05 — Fitlab Selects 2026
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
              The editor&apos;s <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>picks</em>
            </h2>
          </div>
          <Link href="/reviews" style={{ color: "#0F7A5A", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
            All reviewed products →
          </Link>
        </div>
        <div className="hp-picks-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {EDITOR_PICKS.map((pick) => (
            <Link
              key={pick.slug}
              href={`/reviews/${pick.slug}`}
              className="picks-card"
              style={{ textDecoration: "none", color: "inherit", borderRadius: 16, border: "1px solid #E4E8E5", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF" }}
            >
              {/* Image area */}
              <div style={{ position: "relative", aspectRatio: "1/0.9", background: pick.bg, backgroundImage: `repeating-linear-gradient(45deg,${pick.stripeColor} 0 14px,transparent 14px 28px)`, overflow: "hidden" }}>
                <Image
                  src={pick.image}
                  alt={pick.title}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", padding: "16px" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <span style={{ position: "absolute", top: 14, left: 14, fontFamily: "var(--font-jetbrains), monospace", fontSize: 13, fontWeight: 600, color: "#6B7770", zIndex: 1 }}>
                  #{pick.rank}
                </span>
                <span style={{ position: "absolute", top: 10, right: 14, width: 42, height: 42, borderRadius: "50%", background: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#FFFFFF", zIndex: 1 }}>
                  {pick.score}
                </span>
              </div>
              {/* Content */}
              <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 9 }}>
                  {pick.category} · {pick.brand}
                </div>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 600, lineHeight: 1.2, margin: "0 0 10px", color: "#17211C" }}>
                  {pick.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#6B7770", margin: 0, lineHeight: 1.5 }}>
                  {pick.specs}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SEC. 06 — FROM THE LAB ── */}
      <section style={{ background: "#F6F8F6", borderTop: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div className="hp-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
                Sec. 06 — From the lab
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
                Latest <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>research</em>
              </h2>
            </div>
            <Link href="/research" style={{ color: "#0F7A5A", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
              All articles →
            </Link>
          </div>
          <div className="hp-lab-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {latestResearch.map((brief, i) => (
              <Link
                key={brief.slug}
                href={`/research/${brief.slug}/`}
                className="hub-card research-card-link"
                style={{
                  textDecoration: "none", color: "inherit",
                  background: "#FFFFFF", border: "1px solid #E4E8E5",
                  borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column",
                }}
              >
                <div style={{ aspectRatio: "16/9", background: i === 1 ? "linear-gradient(135deg,#F4E6C9,#FAF3E2)" : "linear-gradient(135deg,#D4E9DF,#EEF6F1)", backgroundImage: i === 1 ? "repeating-linear-gradient(45deg,rgba(201,138,30,.07) 0 12px,transparent 12px 24px)" : "repeating-linear-gradient(45deg,rgba(15,122,90,.06) 0 12px,transparent 12px 24px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".14em", color: "#0F7A5A", opacity: 0.5 }}>[ ARTICLE ]</span>
                </div>
                <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 5 }}>
                    {brief.type}
                  </div>
                  <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 11, opacity: 0.7 }}>
                    STRONG EVIDENCE
                  </div>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 500, lineHeight: 1.2, margin: "0 0 14px" }}>
                    {brief.title}
                  </h3>
                  <div style={{ fontSize: 13, color: "#6B7770", marginTop: "auto" }}>
                    May 2026 · {brief.mins} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
