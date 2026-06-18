import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, BookOpen, Target, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import ProductCard from "@/components/ui/ProductCard";
import IngredientCard from "@/components/ui/IngredientCard";
import GoalCard from "@/components/ui/GoalCard";
import { BestOfGrid, TrustGrid } from "@/components/sections/HomeInteractive";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: {
    absolute: "Fitlabreviews — Evidence-Led Supplement Reviews",
  },
  description:
    "Research-grade supplement reviews, ingredient analysis, and wellness guidance. Evidence-led, editorially independent. No sponsors, no bias.",
  alternates: {
    canonical: "/",
  },
};

const featuredReviews = [
  { slug: "optimum-nutrition-gold-standard-whey", title: "Optimum Nutrition Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark protein powder. Consistent quality, excellent amino acid profile, and the cleanest label at this price tier.", publishedAt: "2026-04-10", figNumber: "01", tags: ["whey", "muscle-gain", "post-workout"] },
  { slug: "wellmedr", title: "WellMedr Weight Management", brand: "WellMedr", category: "GLP-1 Program", rating: 9 as ReviewRating, verdict: "Clinician-supervised GLP-1 weight management with comprehensive telehealth support. The strongest evidence-based programme we have reviewed.", publishedAt: "2026-05-15", figNumber: "02", tags: ["glp-1", "weight-loss", "telehealth"] },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "The cleanest, most affordable creatine monohydrate on the market. No frills, just results.", publishedAt: "2026-03-08", figNumber: "03", tags: ["creatine", "strength", "budget"] },
  { slug: "dymatize-iso100-review-2026", title: "Dymatize ISO100 Hydrolyzed Whey Isolate", brand: "Dymatize", category: "Whey Protein Isolate", rating: 9 as ReviewRating, verdict: "The only hydrolyzed isolate with dual NSF + Informed Choice certification. 25g protein, 2.7g leucine, category-best flavour.", publishedAt: "2026-05-27", figNumber: "04", tags: ["whey-isolate", "hydrolyzed", "nSF", "post-workout"] },
];

const bestProducts = [
  { name: "ISO100 Hydrolyzed Whey Isolate", brand: "Dymatize", category: "Whey Protein Isolate", score: 9, priceUSD: "$67–$85", priceINR: "₹5,600–₹7,100", tags: ["NSF Certified", "Hydrolyzed", "25g Protein"], buyUrl: "https://amzn.to/4e73lcN", reviewSlug: "dymatize-iso100-review-2026", image: "dymatize-iso100.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#14a474" },
  { name: "BULK Black Pre-Workout", brand: "Transparent Labs", category: "Pre-Workout", score: 9, priceUSD: "$49–$55", priceINR: "₹4,100–₹4,600", tags: ["Full Disclosure", "275mg Caffeine"], buyUrl: "https://amzn.to/3RPRlnm", reviewSlug: "transparent-labs-bulk-black-review", image: "tl-bulk-black-preworkout.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#14a474" },
  { name: "Beef Organs Complex", brand: "Heart & Soil", category: "Organ Supplement", score: 9, priceUSD: "$52–$58", priceINR: "₹4,300–₹4,800", tags: ["Grass-Fed", "6 Organs", "Desiccated"], buyUrl: "https://amzn.to/3Q2X5ts", reviewSlug: "heart-and-soil-beef-organs", image: "HEART-SOIL.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#c98a1e" },
  { name: "Creatine HMB", brand: "Transparent Labs", category: "Creatine", score: 8, priceUSD: "$44–$49", priceINR: "₹3,700–₹4,100", tags: ["Creapure®", "HMB Added", "No Fillers"], buyUrl: "https://amzn.to/3Qba8ZR", reviewSlug: "transparent-labs-creatine-hmb", image: "tl-creatine-hmb.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#14a474" },
  { name: "DS-01 Daily Synbiotic", brand: "Seed", category: "Probiotic", score: 8, priceUSD: "$49/mo", priceINR: "₹4,100/mo", tags: ["24 Strains", "AFU Tested", "Subscription"], buyUrl: "https://amzn.to/4vm1F57", reviewSlug: "seed-ds-01", image: "seed-ds-01.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#14a474" },
  { name: "Sleep", brand: "Performance Lab", category: "Sleep Aid", score: 8, priceUSD: "$39–$49", priceINR: "₹3,300–₹4,100", tags: ["Magnesium", "Cherry Extract", "No Melatonin"], buyUrl: "https://amzn.to/4x4WZCs", reviewSlug: "performance-lab-sleep", image: "perlab-sleep.webp", bgFrom: "#101a16", bgTo: "#0a1410", accent: "#14a474" },
];

const blogPosts = [
  { slug: "sleep-window-anti-aging", title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging", category: "Longevity & Sleep", figure: "BLG-001", readTime: "9 min", date: "May 2026", badge: "Strong Evidence", badgeColor: "#0f7a5a" },
  { slug: "glp1-benefits-beyond-weight-loss", title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss", category: "Pharmacology", figure: "BLG-002", readTime: "13 min", date: "May 2026", badge: "Strong Evidence", badgeColor: "#0f7a5a" },
  { slug: "plant-foods-menopause", title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally", category: "Women's Health", figure: "BLG-003", readTime: "12 min", date: "May 2026", badge: "Moderate Evidence", badgeColor: "#c98a1e" },
  { slug: "diet-depression-anxiety", title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety", category: "Mental Health", figure: "BLG-004", readTime: "14 min", date: "May 2026", badge: "Strong Evidence", badgeColor: "#0f7a5a" },
  { slug: "fitness-travel-2026", title: "Fitness Travel in 2026: How to Turn Your Vacation Into a Wellness Retreat", category: "Training & Lifestyle", figure: "BLG-005", readTime: "11 min", date: "May 2026", badge: "Practical Guide", badgeColor: "#6b7770" },
];

const ingredients = [
  { slug: "creatine", name: "Creatine Monohydrate", category: "Performance", summary: "One of the most studied ergogenic aids in sports science. Consistently improves short-burst power output and accelerates lean mass gains.", evidenceLevel: "strong" as EvidenceLevel, topBenefit: "Strength & Power Output", figNumber: "ING-01" },
  { slug: "whey-protein", name: "Whey Protein Isolate", category: "Recovery & Muscle", summary: "Complete protein with high leucine content. Rapid absorption post-exercise makes it the gold standard for muscle protein synthesis.", evidenceLevel: "strong" as EvidenceLevel, topBenefit: "Muscle Protein Synthesis", figNumber: "ING-02" },
  { slug: "beta-alanine", name: "Beta-Alanine", category: "Endurance", summary: "Raises muscle carnosine levels, buffering lactic acid during high-intensity efforts. Tingling sensation is expected and harmless.", evidenceLevel: "moderate" as EvidenceLevel, topBenefit: "Endurance & Work Capacity", figNumber: "ING-03" },
];

const goals = [
  { slug: "muscle-gain", label: "Muscle Gain", description: "Build lean muscle effectively with evidence-backed supplement protocols and foundational diet structure.", topIngredients: ["Creatine", "Whey Protein", "Beta-Alanine"], code: "G-01", image: "/goals/muscle-gain.jpg" },
  { slug: "weight-loss", label: "Weight Loss", description: "Support your calorie deficit with ingredients that preserve muscle, improve satiety, and support metabolism.", topIngredients: ["Protein", "Caffeine", "L-Carnitine"], code: "G-02", image: "/goals/weight-loss.jpg" },
  { slug: "energy-focus", label: "Energy & Focus", description: "From morning productivity to high-intensity training — build a clean stimulant stack that performs without crashing.", topIngredients: ["Caffeine", "L-Theanine", "Ashwagandha"], code: "G-03", image: "/goals/energy-focus.jpg" },
  { slug: "recovery", label: "Recovery & Sleep", description: "Reduce soreness, improve sleep quality, and optimize your body's natural repair processes.", topIngredients: ["Magnesium", "Ashwagandha", "BCAA"], code: "G-04", image: "/goals/recovery.jpg" },
];

const trustPoints = [
  { icon: <FlaskConical size={20} />, title: "Research-Verified", body: "Every claim is linked to peer-reviewed studies. We separate evidence from marketing language on every page." },
  { icon: <ShieldCheck size={20} />, title: "Editorially Independent", body: "Affiliates never influence ratings. Brands don't pay for better scores. Period." },
  { icon: <BookOpen size={20} />, title: "Ingredient-First", body: "We analyse formulas before brands. What's inside matters more than the logo on the label." },
  { icon: <Target size={20} />, title: "Goal-Matched", body: "Recommendations are matched to your specific fitness goal, not blanket 'best-of' lists." },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7770", fontWeight: 600 }}>Evidence-Led Reviews</span>
          <span style={{ width: 32, height: 1, backgroundColor: "#e4e8e5", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f7a5a", fontWeight: 600 }}>Research-Grade Analysis</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "end" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#17211c", lineHeight: 0.95, marginBottom: 24 }}>
              Evidence-led
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6b7770" }}>supplement</em>
              <br />
              reviews.
            </h1>
            <p style={{ fontSize: 16, color: "#586259", lineHeight: 1.7, maxWidth: 440, marginBottom: 32 }}>
              We analyse the science behind every label so you can buy smarter. Independent, ingredient-first reviews for the American and global wellness market.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reviews" className="btn-primary">
                Browse Reviews <ArrowRight size={14} />
              </Link>
              <Link href="/editorial-policy" className="btn-ghost">
                Our Methodology
              </Link>
            </div>
          </div>

          {/* Research Dashboard */}
          <div style={{ borderRadius: 16, overflow: "hidden", maxWidth: 400, border: "1px solid #e4e8e5", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}>
            <div style={{ padding: "14px 20px", background: "linear-gradient(145deg, #101a16 0%, #0a1410 100%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Research Dashboard</span>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#14a474", letterSpacing: "0.1em", fontWeight: 600 }}>● LIVE</span>
            </div>
            <div style={{ height: 2, background: "linear-gradient(90deg, #14a474 0%, transparent 70%)" }} />
            {[
              { label: "Reviews Published", value: "142+", sub: "Across 12 categories" },
              { label: "Ingredients Profiled", value: "87", sub: "With evidence levels" },
              { label: "Avg. Research Hours", value: "18h", sub: "Per review published" },
              { label: "Affiliate Influence", value: "Zero", sub: "Ratings are always independent" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: "16px 20px", borderBottom: "1px solid #eef1ef", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: i % 2 === 0 ? "#f6f8f6" : "#ffffff" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7770", marginBottom: 3, fontWeight: 500 }}>{stat.label}</p>
                  <p style={{ fontSize: 12, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif" }}>{stat.sub}</p>
                </div>
                <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 24, fontWeight: 700, color: "#17211c" }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ borderTop: "1px solid #e4e8e5" }} />
      </div>

      {/* ── FEATURED REVIEWS ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Featured Reviews" figure="SEC. 01" title="Latest from" titleItalic="the lab" subtitle="In-depth, evidence-led analysis of the supplements everyone is talking about." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {featuredReviews.map((review, i) => (
            <div key={review.slug} className="animate-fade-up">
              <ReviewCard {...review} variant={i === 0 ? "featured" : "default"} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/reviews" className="btn-ghost">
            All Reviews <span className="arrow-nudge"><ArrowRight size={13} /></span>
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER BAND ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #e4e8e5", borderBottom: "1px solid #e4e8e5" }} className="pad-section-sm px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(120deg, #e7f2ec, #f2f8f4)", borderRadius: 16, padding: "36px 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f7a5a", marginBottom: 8, fontWeight: 600 }}>The Research Dispatch</p>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.85rem)", fontWeight: 600, color: "#17211c", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                Evidence first. Noise never.
              </h2>
              <p style={{ fontSize: 14, color: "#586259", lineHeight: 1.6, margin: 0 }}>
                Weekly supplement research, ingredient deep-dives, and honest product updates — no hype.
              </p>
            </div>
            <Link
              href="/newsletter"
              className="btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Get the Dispatch →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEST PRODUCTS — EDITOR'S PICKS ─────────────────────────────── */}
      <section
        style={{ borderTop: "1px solid #e4e8e5", backgroundColor: "#101a16", position: "relative", overflow: "hidden" }}
        className="pad-section px-page"
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", marginBottom: 22 }}>
              <svg width={62} height={62} viewBox="0 0 62 62" aria-hidden style={{ filter: "drop-shadow(0 4px 14px rgba(20,164,116,0.35))" }}>
                <circle cx={31} cy={31} r={29} fill="none" stroke="#14a474" strokeWidth={1} opacity={0.4} />
                <circle cx={31} cy={31} r={24} fill="none" stroke="#14a474" strokeWidth={1.5} />
                {Array.from({ length: 24 }).map((_, i) => {
                  const a = (i / 24) * Math.PI * 2;
                  return (
                    <line key={i}
                      x1={31 + Math.cos(a) * 24} y1={31 + Math.sin(a) * 24}
                      x2={31 + Math.cos(a) * 28.5} y2={31 + Math.sin(a) * 28.5}
                      stroke="#14a474" strokeWidth={1} opacity={0.45}
                    />
                  );
                })}
                <path d="M31 19l3.1 6.3 6.9 1-5 4.9 1.2 6.9L31 41.7l-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="#14a474" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, backgroundColor: "rgba(20,164,116,0.4)" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#14a474", fontWeight: 600 }}>Fitlab Selects · 2026</span>
              <span style={{ width: 28, height: 1, backgroundColor: "rgba(20,164,116,0.4)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2.1rem, 5vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e8efe9", lineHeight: 1, margin: 0 }}>
              The Editor&apos;s <em style={{ fontStyle: "italic", fontWeight: 400, color: "#7fd8b4" }}>Picks</em>
            </h2>
            <p style={{ margin: "18px auto 0", maxWidth: 540, fontSize: 15, color: "#9fb0a7", lineHeight: 1.65, fontFamily: "var(--font-hanken), sans-serif" }}>
              Six supplements that topped our FSP rubric this year — independently tested, fully label-disclosed, ranked by the evidence and nothing else.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
            {bestProducts.map((product, i) => {
              const rank = i + 1;
              const isPodium = rank <= 3;
              return (
                <div key={product.reviewSlug} className="animate-fade-up hover-card" style={{ position: "relative", borderRadius: 12 }}>
                  <div aria-hidden style={{
                    position: "absolute", top: -12, right: -10, zIndex: 12,
                    width: 40, height: 40, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isPodium ? "linear-gradient(145deg,#14a474 0%,#0f7a5a 100%)" : "linear-gradient(145deg,#1a2d24 0%,#101a16 100%)",
                    border: isPodium ? "1px solid #7fd8b4" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: isPodium ? "0 6px 18px -4px rgba(20,164,116,0.5)" : "0 6px 16px -6px rgba(0,0,0,0.6)",
                  }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 17, fontWeight: 800, color: isPodium ? "#ffffff" : "#6b7770", lineHeight: 1 }}>
                      {rank}
                    </span>
                  </div>
                  <ProductCard {...product} featured={i === 0} />
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08))" }} />
            <Link
              href="/reviews"
              className="hover-rust-text"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 26px",
                border: "1px solid rgba(255,255,255,0.12)", color: "#c8dcd1",
                fontSize: 13, fontWeight: 600, borderRadius: 8,
                fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none",
                transition: "border-color 150ms, color 150ms", whiteSpace: "nowrap",
              }}
            >
              See All Reviewed Products <span className="arrow-nudge"><ArrowRight size={13} /></span>
            </Link>
            <span style={{ flex: 1, height: 1, background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.08))" }} />
          </div>
        </div>
      </section>

      {/* ── BEST OF CATEGORIES ──────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #e4e8e5", borderBottom: "1px solid #e4e8e5", backgroundColor: "#f6f8f6" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading label="Best Of" figure="SEC. 03" title="Roundups &" titleItalic="top picks" subtitle="Curated shortlists for when you need a clear recommendation, not a wall of text." />
          <BestOfGrid />
        </div>
      </section>

      {/* ── BROWSE BY GOAL ──────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Browse by Goal" figure="SEC. 04" title="Start with" titleItalic="your objective" subtitle="Your goal determines your stack. Evidence-matched recommendations for every fitness focus." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {goals.map((goal) => (<GoalCard key={goal.slug} {...goal} />))}
        </div>
      </section>

      {/* ── INGREDIENT RESEARCH ─────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #e4e8e5", backgroundColor: "#101a16" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a6b58", fontWeight: 600 }}>SEC. 05</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#1a2d24", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#14a474", fontWeight: 600 }}>Ingredient Research</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#e8efe9", lineHeight: 1.05 }}>
              Know what <em style={{ fontStyle: "italic", fontWeight: 400, color: "#9fb0a7" }}>you&apos;re taking</em>
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, color: "#9fb0a7", lineHeight: 1.6, fontFamily: "var(--font-hanken), sans-serif" }}>
              Deep-dive profiles on the ingredients inside your supplements — what the evidence actually says.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {ingredients.map((ing) => (
              <div key={ing.slug} className="animate-fade-up">
                <IngredientCard {...ing} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/ingredients" className="hover-rust-text" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: "1px solid rgba(255,255,255,0.1)", color: "#9fb0a7", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", transition: "border-color 150ms, color 150ms" }}>
              Explore Ingredient Library <span className="arrow-nudge"><ArrowRight size={13} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST / METHODOLOGY ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <SectionHeading label="Editorial Standards" figure="SEC. 06" title="How we" titleItalic="research" subtitle="Our review process is built to eliminate bias, not amplify it. Here's what that looks like in practice." />
            <Link href="/editorial-policy" className="btn-primary">
              Read Full Policy <span className="arrow-nudge"><ArrowRight size={13} /></span>
            </Link>
          </div>
          <TrustGrid trustPoints={trustPoints} />
        </div>
      </section>

      {/* ── LATEST FROM THE BLOG ────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #e4e8e5", maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Blog" figure="SEC. 07" title="From the" titleItalic="blog" subtitle="Research-led articles on nutrition science, longevity, mental health, and fitness lifestyle." />
        <div className="hp-article-grid">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="hub-card animate-fade-up"
              style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid #e4e8e5", textDecoration: "none", backgroundColor: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div style={{ height: 3, backgroundColor: "#0f7a5a" }} />
              <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", color: "#6b7770", textTransform: "uppercase", fontWeight: 500 }}>{post.figure}</span>
                  <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 10, padding: "2px 8px", backgroundColor: "#f2f8f4", border: "1px solid #e4e8e5", borderRadius: 6, color: "#586259", textTransform: "uppercase", fontWeight: 500 }}>{post.category}</span>
                  <span style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", textTransform: "uppercase", fontWeight: 600, color: post.badgeColor, backgroundColor: `${post.badgeColor}14`, border: `1px solid ${post.badgeColor}2a` }}>{post.badge}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 600, color: "#17211c", lineHeight: 1.35, margin: 0 }}>{post.title}</h3>
                <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 11, color: "#6b7770", fontWeight: 500 }}>{post.date} · {post.readTime} read →</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/blog" className="btn-ghost">
            All Articles <span className="arrow-nudge"><ArrowRight size={13} /></span>
          </Link>
        </div>
      </section>

    </div>
  );
}
