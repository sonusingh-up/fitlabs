import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, BookOpen, Target, ShieldCheck } from "lucide-react";

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
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import IngredientCard from "@/components/ui/IngredientCard";
import GoalCard from "@/components/ui/GoalCard";
import { BestOfGrid, TrustGrid } from "@/components/sections/HomeInteractive";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

const featuredReviews = [
  { slug: "optimum-nutrition-gold-standard-whey", title: "Optimum Nutrition Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark protein powder. Consistent quality, excellent amino acid profile, and the cleanest label at this price tier.", publishedAt: "2026-04-10", figNumber: "01", tags: ["whey", "muscle-gain", "post-workout"] },
  { slug: "wellmedr", title: "WellMedr Weight Management", brand: "WellMedr", category: "GLP-1 Program", rating: 9 as ReviewRating, verdict: "Clinician-supervised GLP-1 weight management with comprehensive telehealth support. The strongest evidence-based programme we have reviewed.", publishedAt: "2026-05-15", figNumber: "02", tags: ["glp-1", "weight-loss", "telehealth"] },
  { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "The cleanest, most affordable creatine monohydrate on the market. No frills, just results.", publishedAt: "2026-03-08", figNumber: "03", tags: ["creatine", "strength", "budget"] },
  { slug: "dymatize-iso100-review-2026", title: "Dymatize ISO100 Hydrolyzed Whey Isolate", brand: "Dymatize", category: "Whey Protein Isolate", rating: 9 as ReviewRating, verdict: "The only hydrolyzed isolate with dual NSF + Informed Choice certification. 25g protein, 2.7g leucine, category-best flavour.", publishedAt: "2026-05-27", figNumber: "04", tags: ["whey-isolate", "hydrolyzed", "nSF", "post-workout"] },
];

const blogPosts = [
  { slug: "sleep-window-anti-aging", title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging", category: "Longevity & Sleep", figure: "BLG-001", readTime: "9 min", date: "May 2026", accent: "#1A6B3A", badge: "Strong Evidence", badgeColor: "#1A6B3A" },
  { slug: "glp1-benefits-beyond-weight-loss", title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss", category: "Pharmacology", figure: "BLG-002", readTime: "13 min", date: "May 2026", accent: "#C4622D", badge: "Strong Evidence", badgeColor: "#1A6B3A" },
  { slug: "plant-foods-menopause", title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally", category: "Women's Health", figure: "BLG-003", readTime: "12 min", date: "May 2026", accent: "#2D6A4F", badge: "Moderate Evidence", badgeColor: "#92620A" },
  { slug: "diet-depression-anxiety", title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety", category: "Mental Health", figure: "BLG-004", readTime: "14 min", date: "May 2026", accent: "#92620A", badge: "Strong Evidence", badgeColor: "#1A6B3A" },
  { slug: "fitness-travel-2026", title: "Fitness Travel in 2026: How to Turn Your Vacation Into a Wellness Retreat", category: "Training & Lifestyle", figure: "BLG-005", readTime: "11 min", date: "May 2026", accent: "#7EB8D4", badge: "Practical Guide", badgeColor: "#5C5650" },
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
              We analyse the science behind every label so you can buy smarter. Independent, ingredient-first reviews for the American and global wellness market.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {/* Emil: .btn-primary has scale(0.97) :active press state */}
              <Link href="/reviews" className="btn-primary">
                Browse Reviews <ArrowRight size={14} />
              </Link>
              <Link href="/editorial-policy" className="btn-ghost">
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
        {/* Emil: animate-fade-up + is-visible added by IntersectionObserver in HomeInteractive */}
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
            {ingredients.map((ing) => (
              <div key={ing.slug} className="animate-fade-up">
                <IngredientCard {...ing} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/ingredients" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: "1px solid rgba(212,201,184,0.3)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Explore Ingredient Library <span className="arrow-nudge"><ArrowRight size={13} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST / METHODOLOGY */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <SectionHeading label="Editorial Standards" figure="SEC. 05" title="How we" titleItalic="research" subtitle="Our review process is built to eliminate bias, not amplify it. Here's what that looks like in practice." />
            <Link href="/editorial-policy" className="btn-primary">
              Read Full Policy <span className="arrow-nudge"><ArrowRight size={13} /></span>
            </Link>
          </div>
          <TrustGrid trustPoints={trustPoints} />
        </div>
      </section>

      {/* LATEST FROM THE BLOG */}
      <section style={{ borderTop: "1px solid #D4C9B8", maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <SectionHeading label="Blog" figure="SEC. 06" title="From the" titleItalic="blog" subtitle="Research-led articles on nutrition science, longevity, mental health, and fitness lifestyle." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="hub-card animate-fade-up"
              style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", textDecoration: "none", backgroundColor: "#F8F2E4" }}
            >
              <div style={{ height: 4, backgroundColor: post.accent }} />
              <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#A89880", textTransform: "uppercase" }}>{post.figure}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>{post.category}</span>
                  <span style={{ marginLeft: "auto", padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: post.badgeColor, backgroundColor: `${post.badgeColor}14`, border: `1px solid ${post.badgeColor}33` }}>{post.badge}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{post.title}</h3>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{post.date} · {post.readTime} read →</span>
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
