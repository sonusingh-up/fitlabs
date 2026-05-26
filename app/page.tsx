import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, BookOpen, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Fitlabreviews — Evidence-Led Supplement Reviews",
  },
  description:
    "Research-grade supplement reviews, ingredient analysis, and wellness guidance for smarter buying decisions. Evidence-led, editorially independent. No bias.",
  alternates: {
    canonical: "/",
  },
};
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import IngredientCard from "@/components/ui/IngredientCard";
import GoalCard from "@/components/ui/GoalCard";
import { BestOfGrid, TrustGrid, ArticlesGrid } from "@/components/sections/HomeInteractive";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

const featuredReviews = [
  { slug: "optimum-nutrition-gold-standard-whey", title: "Optimum Nutrition Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark protein powder. Consistent quality, excellent amino acid profile, and the cleanest label at this price tier.", publishedAt: "2025-04-10", figNumber: "01", tags: ["whey", "muscle-gain", "post-workout"] },
  { slug: "musclepharm-assault-pre-workout", title: "MusclePharm Assault Pre-Workout", brand: "MusclePharm", category: "Pre-Workout", rating: 7 as ReviewRating, verdict: "Solid stimulant blend with transparent labelling but under-dosed citrulline is a notable gap.", publishedAt: "2025-03-22", figNumber: "02", tags: ["pre-workout", "energy", "focus"] },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "The cleanest, most affordable creatine monohydrate available in India. No frills, just results.", publishedAt: "2025-03-08", figNumber: "03", tags: ["creatine", "strength", "budget"] },
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
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* HERO */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A89880" }}>VOL. I · ISSUE Nº 01</span>
          <span style={{ width: 40, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4622D" }}>Supplement Research Editorial</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "end" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1A1714", lineHeight: 0.95, marginBottom: 24 }}>
              Evidence-led
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>supplement</em>
              <br />
              reviews.
            </h1>
            <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 440, marginBottom: 32 }}>
              We analyse the science behind every label so you can buy smarter. Independent, ingredient-first reviews for the Indian and global wellness market.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/category/all" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Browse Reviews <ArrowRight size={14} />
              </Link>
              <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, fontWeight: 500, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Our Methodology
              </Link>
            </div>
          </div>

          <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 400, border: "1px solid rgba(212,201,184,0.4)" }}>
            {/* Dashboard header */}
            <div style={{ padding: "14px 20px", background: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Research Dashboard</span>
              <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.1em" }}>● LIVE</span>
            </div>
            <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)" }} />
            {[
              { label: "Reviews Published", value: "142+", sub: "Across 12 categories" },
              { label: "Ingredients Profiled", value: "87", sub: "With evidence levels" },
              { label: "Avg. Research Hours", value: "18h", sub: "Per review published" },
              { label: "Affiliate Influence", value: "Zero", sub: "Ratings are always independent" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: "16px 20px", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{stat.label}</p>
                  <p style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{stat.sub}</p>
                </div>
                <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 24, fontWeight: 700, color: "#1A1714" }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ borderTop: "1px solid #D4C9B8" }} />
      </div>

      {/* FEATURED REVIEWS */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Featured Reviews" figure="SEC. 01" title="Latest from" titleItalic="the lab" subtitle="In-depth, evidence-led analysis of the supplements everyone is talking about." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {featuredReviews.map((review, i) => (
            <ReviewCard key={review.slug} {...review} variant={i === 0 ? "featured" : "default"} />
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/category/all" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            All Reviews <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* BEST OF CATEGORIES */}
      <section style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading label="Best Of" figure="SEC. 02" title="Roundups &" titleItalic="top picks" subtitle="Curated shortlists for when you need a clear recommendation, not a wall of text." />
          <BestOfGrid />
        </div>
      </section>

      {/* BROWSE BY GOAL */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Browse by Goal" figure="SEC. 03" title="Start with" titleItalic="your objective" subtitle="Your goal determines your stack. Evidence-matched recommendations for every fitness focus." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {goals.map((goal) => (<GoalCard key={goal.slug} {...goal} />))}
        </div>
      </section>

      {/* INGREDIENT RESEARCH */}
      <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#1A1714" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650" }}>SEC. 04</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#5C5650", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Ingredient Research</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#F2EBD9", lineHeight: 1.05 }}>
              Know what <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8A8480" }}>you&apos;re taking</em>
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Deep-dive profiles on the ingredients inside your supplements — what the evidence actually says.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {ingredients.map((ing) => (<IngredientCard key={ing.slug} {...ing} />))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/ingredients/creatine" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: "1px solid rgba(212,201,184,0.3)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Explore Ingredient Library <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST / METHODOLOGY */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <SectionHeading label="Editorial Standards" figure="SEC. 05" title="How we" titleItalic="research" subtitle="Our review process is built to eliminate bias, not amplify it. Here's what that looks like in practice." />
            <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Read Full Policy <ArrowRight size={13} />
            </Link>
          </div>
          <TrustGrid trustPoints={trustPoints} />
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section style={{ borderTop: "1px solid #D4C9B8", maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Research Articles" figure="SEC. 06" title="From the" titleItalic="archive" />
        <ArticlesGrid />
      </section>

    </div>
  );
}
