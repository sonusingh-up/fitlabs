import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Supplement Comparisons — Head-to-Head, FSP-Scored",
  description:
    "Independent head-to-head supplement comparisons. Formula, sourcing, price, and certification dissected side by side so you can pick the right product for your goal.",
  alternates: { canonical: "/compare" },
};

const comparisons = [
  {
    slug: "ancestral-supplements-vs-heart-and-soil",
    category: "Organ Supplements",
    categoryColor: "#0A4F3B",
    headline: "Ancestral Supplements vs Heart & Soil",
    subline: "Sourcing transparency vs Informed Sport certification — which organ brand is right for you?",
    products: [
      { name: "Ancestral Supplements", score: "9/10", image: "/products/ancestral-supplements-beefliv.webp" },
      { name: "Heart & Soil", score: "9/10", image: "/products/HEART-SOIL.webp" },
    ],
    keyFinding: "Both score 9/10. The real difference: Ancestral publishes batch-level COAs from NZ-verified farms; Heart & Soil carries Informed Sport certification — non-negotiable for drug-tested athletes.",
    tags: ["Grass-Fed", "Freeze-Dried", "COA Transparency", "Informed Sport"],
    verdict: "Tie — depends on your priority",
  },
  {
    slug: "legion-pulse-vs-bulk-black",
    category: "Pre-Workout",
    categoryColor: "#0F7A5A",
    headline: "Legion Pulse vs Transparent Labs BULK Black",
    subline: "350mg theanine focus stack vs dual-phase caffeine and Informed Choice cert — $0.25/serving apart.",
    products: [
      { name: "Legion Pulse", score: "9/10", image: "/products/legion-pulse-preworkout.webp" },
      { name: "BULK Black", score: "9/10", image: "/products/tl-bulk-black-preworkout.webp" },
    ],
    keyFinding: "Both are fully dosed, fully transparent pre-workouts. Pulse wins on theanine quality and flavour range; BULK Black wins on Informed Choice certification and dual-phase caffeine for longer sessions.",
    tags: ["Full-Dose", "Transparent Label", "No Proprietary Blend", "High-Stim"],
    verdict: "Athletes → BULK Black · Focus-seekers → Legion Pulse",
  },
  {
    slug: "wellmedr-vs-ro-body",
    category: "GLP-1 Telehealth",
    categoryColor: "#3A7D9B",
    headline: "WellMedr vs Ro Body",
    subline: "Same-day tirzepatide microdosing vs established semaglutide platform — GLP-1 telehealth compared.",
    products: [
      { name: "WellMedr", score: "8/10", image: "/products/wellmedr-product.webp" },
      { name: "Ro Body", score: "7/10", image: null },
    ],
    keyFinding: "WellMedr leads on price ($88/mo vs $99+) and offers a formalised microdosing protocol. Ro Body is the stronger choice if you specifically want semaglutide or branded Wegovy.",
    tags: ["GLP-1", "Compounded Tirzepatide", "Microdosing", "Telehealth"],
    verdict: "WellMedr wins on value · Ro Body for semaglutide",
  },
];

const howWeCompare = [
  { step: "01", label: "FSP Score both products", desc: "Each product earns an independent Fitlab Scoring Protocol score before we bring them together." },
  { step: "02", label: "Map the decision criteria", desc: "We identify the real forks — the specific factors that should change your choice, not generic table-filling." },
  { step: "03", label: "Declare a winner per category", desc: "Each sub-category has a stated winner or tie. No fence-sitting." },
  { step: "04", label: "Give a clear bottom line", desc: "Every comparison ends with an explicit pick for each buyer profile. We do not write 'both are good' conclusions." },
];

export default function CompareHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://fitlabreviews.com/compare" },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Compare</span>
        </div>
      </div>

      {/* Hero banner */}
      <div style={{ width: "100%", background: "linear-gradient(145deg, #0D1810 0%, #0A4F3B 100%)", position: "relative", overflow: "hidden", minHeight: 220 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
            FITLAB INDEPENDENT COMPARISONS · 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 16, maxWidth: 640 }}>
            Head-to-Head{" "}
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>Supplement Comparisons</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 560, lineHeight: 1.75 }}>
            Every comparison is independently FSP-scored. We map the real decision forks — not generic spec tables — so you can pick the right product for your exact goal.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 56, background: "linear-gradient(transparent, #FFFFFF)" }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Comparison cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 72 }}>
          {comparisons.map((comp) => (
            <div
              key={comp.slug}
              style={{ border: "1px solid #E4E8E5", borderRadius: 16, overflow: "hidden", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              {/* Card top row */}
              <div className="flex flex-col sm:flex-row sm:items-stretch">

                {/* Products panel */}
                <div style={{ backgroundColor: "#0D1810", flexShrink: 0 }} className="sm:w-56 lg:w-64 flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-6 p-5 sm:p-6">
                  {comp.products.map((prod, i) => (
                    <div key={prod.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      {prod.image ? (
                        <div style={{ width: 60, height: 72, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                          <img
                            src={prod.image}
                            alt={prod.name}
                            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.6))" }}
                          />
                        </div>
                      ) : (
                        <div style={{ width: 60, height: 72, backgroundColor: "#0A4F3B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 18, color: "#586259" }}>?</span>
                        </div>
                      )}
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", textAlign: "center", lineHeight: 1.3 }}>{prod.name}</p>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#0F7A5A" }}>{prod.score}</span>
                      {i === 0 && (
                        <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.15)", lineHeight: 1, margin: "4px 0" }}>vs</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
                  {/* Category pill */}
                  <div>
                    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, border: `1px solid ${comp.categoryColor}`, color: comp.categoryColor, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
                      {comp.category}
                    </span>
                  </div>

                  {/* Headline */}
                  <div>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#17211C", lineHeight: 1.2, marginBottom: 6 }}>
                      {comp.headline}
                    </h2>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6 }}>{comp.subline}</p>
                  </div>

                  {/* Key finding */}
                  <div style={{ padding: "12px 14px", backgroundColor: "#F6F8F6", borderRadius: 8, borderLeft: "3px solid #0F7A5A" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7770", marginBottom: 5 }}>Key Finding</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.65 }}>{comp.keyFinding}</p>
                  </div>

                  {/* Tags + verdict row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                    {comp.tags.map((tag) => (
                      <span key={tag} style={{ padding: "3px 9px", backgroundColor: "#F6F8F6", borderRadius: 5, fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7770", border: "1px solid #E4E8E5" }}>{tag}</span>
                    ))}
                  </div>

                  {/* Verdict + CTA */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginTop: "auto", paddingTop: 4 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#3F4B43" }}>
                      <span style={{ color: "#6B7770" }}>VERDICT: </span>{comp.verdict}
                    </p>
                    <Link
                      href={`/compare/${comp.slug}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 12, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", whiteSpace: "nowrap" }}
                    >
                      Read full comparison →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How we compare */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeading label="Methodology" figure="§" title="How we run" titleItalic="comparisons" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {howWeCompare.map((step) => (
              <div key={step.step} style={{ padding: "20px 22px", border: "1px solid #E4E8E5", borderRadius: 14, backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 700, color: "#E4E8E5", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1 }}>{step.step}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>{step.label}</p>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related hub links */}
        <section style={{ marginBottom: 16 }}>
          <SectionHeading label="Explore More" figure="§" title="Related" titleItalic="content" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { title: "All Supplement Reviews", desc: "Every FSP-scored review — organ supplements, protein, creatine, and pre-workouts.", href: "/reviews" },
              { title: "Best Beef Organ Supplements", desc: "Full 9-product organ supplement category ranking for 2026.", href: "/best/beef-organ-supplements" },
              { title: "Best Beef Organs for Women", desc: "Female-specific organ supplement recommendations with iron-absorption analysis.", href: "/best/beef-organ-supplements-for-women" },
              { title: "FSP Scoring Methodology", desc: "How the Fitlab Scoring Protocol works — pillars, weights, and editorial standards.", href: "/methodology" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div className="hub-card" style={{ padding: 18, border: "1px solid #E4E8E5", borderRadius: 14, backgroundColor: "#FFFFFF", height: "100%", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#17211C", marginBottom: 6, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
