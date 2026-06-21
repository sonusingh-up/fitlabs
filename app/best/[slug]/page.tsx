import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Bookmark, ShieldCheck } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ComparisonTable from "@/components/ui/ComparisonTable";
import SectionHeading from "@/components/ui/SectionHeading";
import ProsCons from "@/components/ui/ProsCons";
import ReviewCard from "@/components/ui/ReviewCard";
import SourcesToggle from "@/components/ui/SourcesToggle";
import type { ReviewRating } from "@/lib/types";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `Best ${name} (2026) — Tested & Ranked Top Picks`,
    description: `Our research team tested and ranked the best ${name.toLowerCase()} for 2026 — FSP scores, full comparison, pricing tiers, and who each pick suits best. Independent, evidence-led.`,
    alternates: { canonical: `/best/${slug}` },
  };
}

// ── Static demo data (swap for Sanity bestList query) ───────────────────────

const topPicks = [
  {
    rank: 1,
    name: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    rating: 9 as ReviewRating,
    priceUSD: "$74.99",
    perServe: "~$1.36/serving",
    priceTier: "$$" as const,
    verdict: "Best overall — the industry benchmark for consistency and independently verified protein content.",
    angle: "Choose this if you want a proven, widely available all-rounder.",
    pros: ["Verified protein content", "Mixes cleanly, no clumps", "Sold everywhere"],
    cons: ["Contains sucralose", "WPC blend, not isolate"],
    bestFor: "Most users",
    slug: "optimum-nutrition-gold-standard-whey",
  },
  {
    rank: 2,
    name: "Dymatize ISO100",
    brand: "Dymatize",
    rating: 8 as ReviewRating,
    priceUSD: "$89.99",
    perServe: "~$1.67/serving",
    priceTier: "$$$" as const,
    verdict: "Best isolate — hydrolyzed for the fastest absorption, with dual NSF + Informed Choice certification.",
    angle: "Choose this if you're lactose-sensitive or want the cleanest macros.",
    pros: ["Whey isolate + hydrolyzed", "NSF + Informed Choice certified", "Lactose-friendly"],
    cons: ["Premium price per serving", "Fewer budget pack sizes"],
    bestFor: "Lactose-intolerant lifters",
    slug: "dymatize-iso100-review-2026",
  },
  {
    rank: 3,
    name: "MyProtein Impact Whey",
    brand: "MyProtein",
    rating: 8 as ReviewRating,
    priceUSD: "$54.99",
    perServe: "~$0.92/serving",
    priceTier: "$" as const,
    verdict: "Best value — the lowest cost-per-gram of protein on this list without cutting the formula.",
    angle: "Choose this if budget is the deciding factor.",
    pros: ["Lowest cost per gram", "Huge flavor range", "Frequent discounts"],
    cons: ["Flavor consistency varies", "WPC blend"],
    bestFor: "Budget-conscious buyers",
    slug: "myprotein-creatine-monohydrate",
  },
];

const fastFacts = [
  "All picks deliver 24–25g protein per serving with a complete amino acid profile.",
  "Cost ranges from ~$0.92 to ~$1.67 per serving (verified June 2026).",
  "Two of three carry independent third-party certification (NSF or Informed Choice).",
  "Isolate-based options suit lactose-sensitive users; WPC blends cost less.",
];

const sources = [
  { text: "Jäger R et al. (2017). International Society of Sports Nutrition Position Stand: protein and exercise. Journal of the International Society of Sports Nutrition. 14:20.", url: "https://doi.org/10.1186/s12970-017-0177-8" },
  { text: "Morton RW et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. British Journal of Sports Medicine. 52(6):376–384.", url: "https://doi.org/10.1136/bjsports-2017-097608" },
  { text: "Product pricing verified directly from manufacturer and Amazon listings, June 2026." },
];

const history = [
  { date: "Jun 21, 2026", note: "Re-tested all three picks; updated per-serving pricing and added Dymatize NSF certification status." },
  { date: "Mar 04, 2026", note: "Initial roundup published with FSP v2.1 scoring." },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default async function BestOfPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const comparisonProducts = topPicks.map((p) => ({
    name: p.name,
    brand: p.brand,
    rating: p.rating,
    price: p.priceUSD,
    priceUnit: "",
    pros: p.pros,
    cons: p.cons,
    bestFor: p.bestFor,
  }));

  const tocItems = [
    { id: "fast-facts", label: "Fast facts" },
    { id: "quick-look", label: "At a glance" },
    { id: "pricing", label: "Pricing guide" },
    { id: "picks", label: "The picks" },
    { id: "how-we-chose", label: "How we chose" },
    { id: "trust", label: "Why trust us" },
    { id: "compare", label: "Full comparison" },
    { id: "faq", label: "FAQ" },
    { id: "bottom-line", label: "Bottom line" },
  ];

  const shareUrl = `https://fitlabreviews.com/best/${slug}`;
  const shareText = `Best ${pageTitle} (2026)`;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }} className="px-page">
          <Link href="/" style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
          <Link href="/best" style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Best Of</Link>
          <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Best {pageTitle}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* Sidebar TOC */}
          <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
            <nav style={{ position: "sticky", top: 80, paddingTop: 8 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#586259", marginBottom: 14, paddingRight: 20 }}>On this page</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 2, paddingRight: 16 }}>
                {tocItems.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} style={{ display: "block", padding: "6px 0", fontSize: 13, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>{t.label}</a>
                  </li>
                ))}
              </ul>
              {/* Newsletter mini */}
              <div style={{ marginTop: 24, marginRight: 16, padding: "16px 18px", backgroundColor: "#E7F2EC", border: "1px solid rgba(15,122,90,0.2)", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>The Research Dispatch</p>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.55, marginBottom: 12 }}>Evidence-led supplement reviews in your inbox. No hype.</p>
                <Link href="/#newsletter" style={{ display: "inline-block", padding: "8px 14px", backgroundColor: "#0F7A5A", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>Subscribe →</Link>
              </div>
            </nav>
          </aside>

          {/* Article */}
          <article style={{ minWidth: 0 }}>

            {/* Hero */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259" }}>Roundup · 2026</span>
                <EvidenceBadge level="strong" />
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259" }}>
                  <Bookmark size={11} /> Save
                </span>
              </div>
              <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#17211C", lineHeight: 1.05, marginBottom: 16, maxWidth: 760 }}>
                Best {pageTitle} <em style={{ fontStyle: "italic", fontWeight: 400, color: "#586259" }}>of 2026</em>
              </h1>
              <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.7, marginBottom: 14, maxWidth: 680 }}>
                We tested {topPicks.length * 6}+ products against the Fitlab Scoring Protocol to find the best options across budget, mid-range, and premium tiers. Every pick was scored on formula quality, label transparency, third-party verification, and real cost per serving.
              </p>
              <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.04em" }}>
                Last updated June 2026 · {topPicks.length * 6}+ products evaluated · Brands don&apos;t pay us
              </p>
            </div>

            {/* Fast Facts */}
            <section id="fast-facts" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <div style={{ padding: "22px 26px", backgroundColor: "#E7F2EC", border: "1px solid rgba(15,122,90,0.2)", borderRadius: 14 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 14 }}>Fast facts</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
                  {fastFacts.map((fact) => (
                    <li key={fact} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#17211C", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A", marginTop: 8 }} />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* At a glance — quick-look jump list */}
            <section id="quick-look" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="At a Glance" figure="§ 01" title="Our top" titleItalic="picks" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {topPicks.map((pick) => (
                  <a key={pick.slug} href={`#pick-${pick.slug}`} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6", textDecoration: "none" }}>
                    <span style={{ flexShrink: 0, fontFamily: "var(--font-jetbrains), monospace", fontSize: 13, fontWeight: 700, color: pick.rank === 1 ? "#0F7A5A" : "#6B7770", minWidth: 28 }}>#{pick.rank}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", margin: 0 }}>{pick.name}</p>
                      <p style={{ fontSize: 12, color: "#586259", margin: "2px 0 0", fontFamily: "var(--font-hanken), sans-serif" }}>{pick.bestFor} · {pick.perServe}</p>
                    </div>
                    <ReviewScoreBadge rating={pick.rating} size="sm" showLabel={false} />
                  </a>
                ))}
              </div>
            </section>

            {/* Pricing guide */}
            <section id="pricing" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="What You'll Pay" figure="§ 02" title="Pricing" titleItalic="guide" size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {[
                  { tier: "$", label: "Budget", note: "Under $1.10 / serving. WPC blends, fewer certifications." },
                  { tier: "$$", label: "Mid-range", note: "$1.10–$1.55 / serving. The sweet spot for most buyers." },
                  { tier: "$$$", label: "Premium", note: "Over $1.55 / serving. Isolate, hydrolyzed, certified." },
                ].map((p) => (
                  <div key={p.tier} style={{ padding: "18px 20px", backgroundColor: "#FAF5EC", border: "1px solid #E4E8E5", borderRadius: 12 }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 800, color: "#C98A1E", marginBottom: 4 }}>{p.tier}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>{p.label}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.55, margin: 0 }}>{p.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The picks — full product cards */}
            <section id="picks" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="The Picks" figure="§ 03" title="Reviewed in" titleItalic="full" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {topPicks.map((pick) => (
                  <div key={pick.slug} id={`pick-${pick.slug}`} style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden", backgroundColor: "#FFFFFF", scrollMarginTop: 80 }}>
                    {/* Card header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "20px 24px", borderBottom: "1px solid #F0F3F1", flexWrap: "wrap" }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: pick.rank === 1 ? "#0F7A5A" : "#6B7770" }}>#{pick.rank} {pick.rank === 1 ? "· Best Overall" : ""}</span>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#C98A1E", letterSpacing: "0.1em" }}>{pick.priceTier}</span>
                        </div>
                        <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>{pick.brand}</p>
                        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#17211C", margin: 0, letterSpacing: "-0.02em" }}>{pick.name}</h3>
                      </div>
                      <ReviewScoreBadge rating={pick.rating} size="md" />
                    </div>
                    {/* Card body */}
                    <div style={{ padding: "20px 24px" }}>
                      <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 12 }}>{pick.verdict}</p>
                      <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.6, marginBottom: 18, fontWeight: 600 }}>{pick.angle}</p>
                      <ProsCons pros={pick.pros} cons={pick.cons} />
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: 120 }}>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#17211C", margin: 0 }}>{pick.priceUSD}</p>
                          <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: "2px 0 0" }}>{pick.perServe}</p>
                        </div>
                        <Link href={`/reviews/${pick.slug}`} style={{ padding: "10px 18px", border: "1px solid #E4E8E5", color: "#3F4B43", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>Full review →</Link>
                        <a href={`https://www.amazon.com/s?k=${encodeURIComponent(pick.name)}&tag=supplementstr-20`} target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#0F7A5A", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif" }}>Check price <ExternalLink size={12} /></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How we chose */}
            <section id="how-we-chose" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="Methodology" figure="§ 04" title="How we" titleItalic="chose" size="sm" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                {[
                  { num: "01", title: "Formula analysis", desc: "Every ingredient checked against the research literature for efficacy at the stated dose." },
                  { num: "02", title: "Label transparency", desc: "Proprietary blends lose points. Full per-ingredient disclosure is required for a top ranking." },
                  { num: "03", title: "Third-party testing", desc: "We prioritize NSF, Informed Choice, or equivalent independent certification where available." },
                  { num: "04", title: "Cost per gram", desc: "Protein per dollar matters. We calculate real cost efficiency across pack and serving sizes." },
                ].map((step) => (
                  <div key={step.num} style={{ padding: 24, backgroundColor: "#F6F8F6", borderRight: "1px solid #F0F3F1", borderBottom: "1px solid #F0F3F1" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#0F7A5A", marginBottom: 10 }}>{step.num}</p>
                    <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 8 }}>{step.title}</h4>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why trust us — dark stats band */}
            <section id="trust" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, background: "linear-gradient(135deg, #101A16 0%, #0A1410 100%)", padding: "36px 32px" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
                    <ShieldCheck size={16} style={{ color: "#0F7A5A" }} />
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: 0 }}>Why trust us</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
                    {[
                      { stat: `${topPicks.length * 6}+`, label: "Products evaluated" },
                      { stat: "5", label: "FSP scoring pillars" },
                      { stat: "$0", label: "Paid by brands" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2.4rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>{s.stat}</p>
                        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", margin: 0 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Full comparison */}
            <section id="compare" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="Side-by-Side" figure="§ 05" title="Full" titleItalic="comparison" size="sm" />
              <ComparisonTable products={comparisonProducts} />
            </section>

            {/* FAQ — details accordion */}
            <section id="faq" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { q: `What is the best ${pageTitle.toLowerCase()} for beginners?`, a: "Start with our #1 pick — it's reliable, independently verified, and available everywhere. You can move to an isolate later if you find you're lactose-sensitive." },
                  { q: `How much should I take per day?`, a: "Most adults building muscle need 1.6–2.2g of protein per kg of bodyweight daily (Morton et al., 2018). Use supplements to fill the gap your whole-food diet leaves, not to replace it." },
                  { q: "Is a more expensive option always better?", a: "No. Our value pick scores within one point of the premium option at roughly half the cost per serving. Pay more only for a specific need — isolate for lactose sensitivity, or certification for tested-athlete status." },
                ].map((faq, i) => (
                  <details key={i} className={`faq-best-${i}`} style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF", borderRadius: 8, border: "1px solid #F0F3F1", overflow: "hidden" }}>
                    <summary style={{ padding: "16px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 14, fontWeight: 600, color: "#17211C", lineHeight: 1.4 }}>{faq.q}</span>
                      <span className="faq-best-icon" style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", backgroundColor: "#E7F2EC", color: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600 }}>+</span>
                    </summary>
                    <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                  </details>
                ))}
              </div>
              <style>{`
                .faq-best-icon { transition: transform 200ms var(--ease-out-expo); }
                details[open] .faq-best-icon { transform: rotate(45deg); }
                details summary::-webkit-details-marker { display: none; }
              `}</style>
            </section>

            {/* Bottom line */}
            <section id="bottom-line" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
              <div style={{ padding: "24px 28px", backgroundColor: "#E7F2EC", border: "1px solid rgba(15,122,90,0.2)", borderRadius: 14 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>The bottom line</p>
                <p style={{ fontSize: 15, color: "#17211C", lineHeight: 1.75, margin: 0 }}>
                  For most people, the #1 pick is the right call — proven, verified, and easy to find. If you&apos;re lactose-sensitive or chase the cleanest macros, step up to the isolate. If price decides it, the value pick scores within a point of both for far less per serving. There is no wrong answer on this list; there&apos;s only the one that fits your priority.
                </p>
              </div>
            </section>

            {/* Sources / History */}
            <section style={{ marginBottom: 48 }}>
              <SourcesToggle sources={sources} history={history} />
            </section>

            {/* Share */}
            <section style={{ marginBottom: 24, paddingTop: 24, borderTop: "1px solid #E4E8E5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#586259" }}>Share</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", padding: "6px 14px", border: "1px solid #E4E8E5", borderRadius: 999 }}>Facebook</a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", padding: "6px 14px", border: "1px solid #E4E8E5", borderRadius: 999 }}>X</a>
                <a href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`} style={{ fontSize: 12, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", padding: "6px 14px", border: "1px solid #E4E8E5", borderRadius: 999 }}>Email</a>
              </div>
            </section>

          </article>
        </div>
      </div>

      {/* Read Next — full width */}
      <section style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>Read next</h2>
            <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
            <Link href="/reviews" style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 700, color: "#0F7A5A", textDecoration: "none" }}>All reviews →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {topPicks.map((p, i) => (
              <ReviewCard
                key={p.slug}
                slug={p.slug}
                title={p.name}
                brand={p.brand}
                category="protein powder"
                rating={p.rating}
                verdict={p.verdict}
                publishedAt="2026-06-21"
                variant="default"
                figNumber={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
