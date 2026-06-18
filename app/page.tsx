import type { Metadata } from "next";
import Link from "next/link";
import { reviews, researchBriefs } from "@/lib/data";
import ReviewCard from "@/components/ui/ReviewCard";

export const metadata: Metadata = {
  title: { absolute: "Fitlabreviews — Evidence-Led Supplement Reviews" },
  description:
    "Research-grade supplement reviews, ingredient analysis, and free nutrition tools. 142+ products reviewed, 87 ingredients profiled, zero sponsor influence.",
  alternates: { canonical: "/" },
};

const featuredReviews = reviews.slice(0, 4);
const latestResearch = researchBriefs.slice(0, 3);

const GOAL_CARDS = [
  { code: "G-01", title: "Muscle Gain",      bg: "#0F7A5A", href: "/goals/muscle-gain",  tags: ["Creatine", "Whey", "Beta-Alanine"] },
  { code: "G-02", title: "Weight Loss",      bg: "#C98A1E", href: "/goals/fat-loss",     tags: ["Protein", "Caffeine", "L-Carnitine"] },
  { code: "G-03", title: "Energy & Focus",   bg: "#0A4F3B", href: "/goals/strength",     tags: ["Caffeine", "L-Theanine", "Ashwagandha"] },
  { code: "G-04", title: "Recovery & Sleep", bg: "#17211C", href: "/goals/recovery",     tags: ["Magnesium", "Ashwagandha", "Glycine"] },
];

const TOOL_CARDS = [
  { label: "BMR CALCULATOR",    title: "Find the calories you burn at rest",        href: "/tools/free/bmr-calculator" },
  { label: "MACROS CALCULATOR", title: "Set your daily carb, protein & fat split",  href: "/tools/free/macros-calculator" },
  { label: "PROTEIN CALCULATOR", title: "How much protein you actually need",       href: "/tools" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 72px", display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 56, alignItems: "start" }}>
        {/* Featured article */}
        <article>
          <Link href="/research/sleep-duration-biological-aging" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg,#D4E9DF,#EEF6F1)", backgroundImage: "repeating-linear-gradient(45deg,rgba(15,122,90,.06) 0 14px,transparent 14px 28px)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ position: "absolute", top: 16, left: 16, background: "#0A4F3B", color: "#DFF3E9", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", padding: "6px 11px", borderRadius: 7 }}>
                FIG. ART-007 — EDITORIAL
              </span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".16em", color: "#0F7A5A" }}>[ HERO PHOTOGRAPH ]</span>
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
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#586259", margin: "0 0 18px", maxWidth: 620 }}>
              We read 40+ cohort studies on sleep duration and mortality. The protective range is narrower — and more specific — than the &ldquo;eight hours&rdquo; rule suggests.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#586259" }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#DBE8E2", display: "inline-block" }} />
              <span>
                By <strong style={{ color: "#17211C" }}>Fitlab Editorial</strong> · Reviewed by R. Mehta, RD · May 2026 · 9 min read
              </span>
            </div>
          </Link>
        </article>

        {/* Trending sidebar */}
        <aside>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 22 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A474" strokeWidth="2.4">
              <path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" />
            </svg>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 24, fontWeight: 600, margin: 0 }}>
              Trending now
            </h2>
          </div>

          {[
            { cat: "Pharmacology", title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Benefits Beyond Weight Loss", href: "/research/glp1-beyond-weight-loss", warm: false },
            { cat: "Women's Health", title: "Plant-Forward Eating for Menopause: 7 Foods That Fight Weight Gain", href: "/blog/plant-foods-menopause", warm: true },
            { cat: "Mental Health", title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety", href: "/blog/diet-depression-anxiety", warm: false },
            { cat: "Reviews · 9/10", title: "Dymatize ISO100: The Only Dual-Certified Hydrolyzed Isolate", href: "/reviews/dymatize-iso100-review-2026", warm: true },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{ display: "flex", gap: 16, textDecoration: "none", color: "inherit", paddingBottom: 20, marginBottom: 20, borderBottom: i < 3 ? "1px solid #E4E8E5" : "none", alignItems: "center" }}
            >
              <div style={{ width: 88, height: 88, flex: "none", borderRadius: 11, background: item.warm ? "linear-gradient(135deg,#F4E6C9,#FAF3E2)" : "linear-gradient(135deg,#D4E9DF,#EEF6F1)" }} />
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 5 }}>
                  {item.cat}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.28 }}>{item.title}</div>
              </div>
            </Link>
          ))}
        </aside>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 84px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1.1fr .9fr", background: "linear-gradient(120deg,#E7F2EC,#F2F8F4)" }}>
          <div style={{ padding: "54px 52px" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 38, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 14px", lineHeight: 1.08 }}>
              Evidence first.<br />Noise never.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 26px", maxWidth: 420 }}>
              Weekly supplement research, ingredient deep-dives, and honest product updates — no hype, no sponsors.
            </p>
            <div style={{ display: "flex", background: "#FFFFFF", borderRadius: 999, padding: 6, border: "1px solid #CFE2D8", maxWidth: 430 }}>
              <input type="email" placeholder="Enter your email" style={{ flex: 1, border: "none", background: "none", padding: "0 18px", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "#17211C", outline: "none" }} />
              <button type="button" style={{ background: "#0F7A5A", color: "#FFFFFF", border: "none", fontWeight: 700, fontSize: 14, padding: "12px 26px", borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap" }}>
                Join free
              </button>
            </div>
            <p style={{ fontSize: 12, color: "#6B7770", marginTop: 14 }}>
              Your <Link href="/privacy" style={{ color: "#0F7A5A" }}>privacy</Link> matters. Unsubscribe anytime.
            </p>
          </div>
          <div style={{ background: "linear-gradient(135deg,#BFE0CF,#DCF0E4)", backgroundImage: "repeating-linear-gradient(45deg,rgba(15,122,90,.07) 0 16px,transparent 16px 32px)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".16em", color: "#0A634A" }}>[ LIFESTYLE PHOTO ]</span>
          </div>
        </div>
      </section>

      {/* ── BROWSE BY GOAL ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 88px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {GOAL_CARDS.map((g) => (
            <Link
              key={g.code}
              href={g.href}
              style={{ textDecoration: "none", color: "#FFFFFF", borderRadius: 16, background: g.bg, display: "flex", flexDirection: "column", minHeight: 280, padding: 26, transition: "transform 200ms var(--ease-out-expo)" }}
              className="hover-featured"
            >
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, opacity: 0.8, marginBottom: "auto" }}>{g.code}</div>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 26, fontWeight: 500, margin: "18px 0 10px", color: "#FFFFFF" }}>{g.title}</h3>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {g.tags.map((t) => (
                  <span key={t} style={{ fontSize: 11, background: "rgba(255,255,255,.16)", padding: "4px 9px", borderRadius: 6 }}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FREE TOOLS ── */}
      <section style={{ background: "#F6F8F6", borderTop: "1px solid #E4E8E5", borderBottom: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
                Sec. 02 — Free tools
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
                Calculators &amp; <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>lookups</em>
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 22 }}>
            <div style={{ borderRadius: 18, background: "linear-gradient(140deg,#E7F2EC,#F2F8F4)", padding: "42px 40px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 30, fontWeight: 500, margin: "0 0 12px" }}>
                Dial in your nutrition
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 26px", maxWidth: 420 }}>
                Find your calorie target, daily macros, and protein needs with our free, no-signup calculators — built on the Mifflin-St Jeor equation.
              </p>
              <Link href="/tools/free/bmr-calculator" className="btn-primary" style={{ alignSelf: "flex-start", marginBottom: 30 }}>
                Open BMR Calculator
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {TOOL_CARDS.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="tool-card-link"
                  style={{ textDecoration: "none", color: "inherit", background: "#FFFFFF", border: "1px solid #E4E8E5", borderRadius: 14, padding: 22, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", marginBottom: 6 }}>{t.label}</div>
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

      {/* ── EDITOR'S PICKS ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "84px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
          <div>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
              Sec. 03 — Fitlab Selects 2026
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
              The editor&apos;s <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>picks</em>
            </h2>
          </div>
          <Link href="/reviews" style={{ color: "#0F7A5A", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
            All reviewed products →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {featuredReviews.map((r) => (
            <ReviewCard
              key={r.slug}
              slug={r.slug}
              title={r.title}
              brand={r.brand}
              category={r.category}
              rating={r.rating}
              verdict={r.verdict}
              publishedAt={r.publishedAt}
              figNumber={r.figure}
              tags={r.tags}
            />
          ))}
        </div>
      </section>

      {/* ── LATEST RESEARCH ── */}
      <section style={{ background: "#F6F8F6", borderTop: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>
                Sec. 04 — From the lab
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, letterSpacing: "-.015em", margin: 0 }}>
                Latest <em style={{ fontStyle: "italic", color: "#0F7A5A" }}>research</em>
              </h2>
            </div>
            <Link href="/research" style={{ color: "#0F7A5A", fontWeight: 700, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap" }}>
              All articles →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
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
                <div style={{ aspectRatio: "16/9", background: i === 1 ? "linear-gradient(135deg,#F4E6C9,#FAF3E2)" : "linear-gradient(135deg,#D4E9DF,#EEF6F1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".14em", color: "#0F7A5A", opacity: 0.5 }}>[ ARTICLE ]</span>
                </div>
                <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 9 }}>
                    {brief.type}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 500, lineHeight: 1.2, margin: "0 0 14px" }}>
                    {brief.title}
                  </h3>
                  <div style={{ fontSize: 13, color: "#6B7770", marginTop: "auto" }}>
                    {brief.mins} min read
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
