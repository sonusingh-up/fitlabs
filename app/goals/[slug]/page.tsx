import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating, EvidenceLevel } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Best Supplements for ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — Fitlabreviews Goal Guide`,
    description: `Evidence-based supplement guide for your fitness goal. Recommended ingredients, stacks, and product reviews.`,
  };
}

export default async function GoalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const goal = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const supplements = [
    { rank: 1, name: "Creatine Monohydrate", role: "Foundation", evidence: "strong" as EvidenceLevel, dose: "3–5g/day", timing: "Any time — consistency matters more than timing", priority: "High" },
    { rank: 2, name: "Whey Protein", role: "Protein target", evidence: "strong" as EvidenceLevel, dose: "20–40g/day", timing: "Post-workout or throughout day to hit protein goals", priority: "High" },
    { rank: 3, name: "Beta-Alanine", role: "Endurance support", evidence: "moderate" as EvidenceLevel, dose: "3.2g/day", timing: "Pre-workout — tingling is normal", priority: "Medium" },
    { rank: 4, name: "Caffeine", role: "Performance & Focus", evidence: "strong" as EvidenceLevel, dose: "3–6mg/kg bodyweight", timing: "45–60 min pre-workout", priority: "Optional" },
  ];

  const dietNotes = [
    "Protein intake of 1.6–2.2g/kg bodyweight is foundational — supplements assist, they don't replace food.",
    "Calorie surplus of 200–400 kcal is needed to support lean muscle gain without excessive fat gain.",
    "Training frequency matters more than any supplement — prioritise progressive overload.",
    "Sleep is when muscle protein synthesis peaks — 7–9 hours is non-negotiable.",
  ];

  const topReviews = [
    { slug: "optimum-nutrition-gold-standard-whey", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", category: "Protein Powder", rating: 9 as ReviewRating, verdict: "The benchmark whey. Clean label, consistent yield, widely available.", publishedAt: "2025-04-10" },
    { slug: "myprotein-creatine-monohydrate", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", category: "Creatine", rating: 8 as ReviewRating, verdict: "Best budget creatine in India — pure, clean, and affordable.", publishedAt: "2025-03-08" },
  ];

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/goals/muscle-gain" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Goals</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{goal}</span>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>GOAL GUIDE · G-01</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Evidence-Based Protocol</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Best Supplements for <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>{goal}</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 620 }}>
            An evidence-first guide to building a supplement protocol around your goal. We rank ingredients by research quality, not marketing budgets.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Supplement Stack" figure="§ 01" title="Recommended" titleItalic="protocol" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {supplements.map((s) => (
              <div key={s.name} className="layout-supplement-row" style={{ padding: "18px 20px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, fontWeight: 700, color: "#A89880" }}>#{s.rank}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{s.name}</p>
                  <p className="supp-mobile-meta">{s.dose} · <span style={{ color: s.priority === "High" ? "#2D6A4F" : s.priority === "Medium" ? "#8B7355" : "#A89880" }}>{s.priority}</span></p>
                  <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>{s.role}</p>
                </div>
                <div className="supp-col-hide">
                  <p style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 3 }}>DOSE</p>
                  <p style={{ fontSize: 12, color: "#2D2926" }}>{s.dose}</p>
                </div>
                <div className="supp-col-hide">
                  <p style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 3 }}>PRIORITY</p>
                  <span style={{ fontSize: 11, fontWeight: 600, color: s.priority === "High" ? "#2D6A4F" : s.priority === "Medium" ? "#8B7355" : "#A89880" }}>{s.priority}</span>
                </div>
                <EvidenceBadge level={s.evidence} showIcon={false} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Foundations" figure="§ 02" title="Diet &" titleItalic="lifestyle notes" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {dietNotes.map((note, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.65 }}>{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading label="Products" figure="§ 03" title="Top reviewed" titleItalic="for this goal" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {topReviews.map((r) => (<ReviewCard key={r.slug} {...r} />))}
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/best/muscle-gain" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              See Full Best-Of List →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
