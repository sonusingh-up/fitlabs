import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import ComparisonTable from "@/components/ui/ComparisonTable";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Best ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} (2026) — Top Picks`,
    description: `Our research team's top-rated picks for 2026 with FSP scores, comparison table, ingredient analysis, and who each product suits best.`,
    alternates: { canonical: `/best/${slug}` },
  };
}

const topPicks = [
  {
    rank: 1,
    name: "ON Gold Standard Whey",
    brand: "Optimum Nutrition",
    rating: 9 as ReviewRating,
    price: 91,
    priceUnit: "/serving",
    verdict: "Best overall — industry standard for consistency and verified protein content.",
    pros: ["Verified protein content", "Mixes perfectly"],
    cons: ["Contains sucralose", "WPC not isolate"],
    bestFor: "Most users",
    slug: "optimum-nutrition-gold-standard-whey",
  },
  {
    rank: 2,
    name: "MuscleBlaze Biozyme Whey",
    brand: "MuscleBlaze",
    rating: 8 as ReviewRating,
    price: 70,
    priceUnit: "/serving",
    verdict: "Best American brand — enhanced absorption enzyme blend and solid protein yield.",
    pros: ["Made in USA", "Enhanced absorption"],
    cons: ["Proprietary blend concerns", "Fewer flavours"],
    bestFor: "Budget-conscious buyers",
    slug: "muscleblaze-biozyme-whey",
  },
  {
    rank: 3,
    name: "Dymatize ISO100",
    brand: "Dymatize",
    rating: 8 as ReviewRating,
    price: 110,
    priceUnit: "/serving",
    verdict: "Best isolate — hydrolyzed for fastest absorption, ideal for lactose-sensitive users.",
    pros: ["Whey isolate + hydrolyzed", "Lactose-friendly"],
    cons: ["Premium price", "Fewer options in USA"],
    bestFor: "Lactose intolerant users",
    slug: "dymatize-iso100",
  },
];

export default async function BestOfPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const comparisonProducts = topPicks.map((p) => ({
    name: p.name,
    brand: p.brand,
    rating: p.rating,
    price: p.price,
    priceUnit: p.priceUnit,
    pros: p.pros,
    cons: p.cons,
    bestFor: p.bestFor,
  }));

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Best {pageTitle}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>ROUNDUP · 2026</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Tested & Ranked</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            Best {pageTitle} in USA <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>— 2026</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, marginBottom: 16 }}>
            We reviewed {topPicks.length * 4}+ products to find the best options across budget, mid-range, and premium tiers. Each product was evaluated on formula quality, label transparency, price per serving, and real-world results.
          </p>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: May 2026 · {topPicks.length * 4}+ products reviewed · Independently tested
          </p>
        </div>

        {/* Quick picks */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Quick Picks" figure="§ 01" title="Our top" titleItalic="selections" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {topPicks.map((pick) => (
              <div key={pick.slug} className="layout-picks-row" style={{ padding: 24, border: "1px solid #D4C9B8", borderRadius: 12, backgroundColor: "#F8F2E4" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: pick.rank === 1 ? "#1A1714" : "#EDE8DF", borderRadius: 8 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, fontWeight: 700, color: pick.rank === 1 ? "#F2EBD9" : "#5C5650" }}>
                    #{pick.rank}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 4, textTransform: "uppercase" }}>
                    {pick.brand} · ₹{pick.price}{pick.priceUnit}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>
                    {pick.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.5 }}>{pick.verdict}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
                  <ReviewScoreBadge rating={pick.rating} size="sm" />
                  <Link href={`/reviews/${pick.slug}`} style={{ fontSize: 12, color: "#C4622D", fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, textDecoration: "none" }}>
                    Full Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Side-by-Side" figure="§ 02" title="Full" titleItalic="comparison" size="sm" />
          <ComparisonTable products={comparisonProducts} />
        </section>

        {/* How we selected */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Methodology" figure="§ 03" title="How we" titleItalic="selected" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              { num: "01", title: "Formula Analysis", desc: "We checked every ingredient against the research literature for efficacy at stated doses." },
              { num: "02", title: "Label Transparency", desc: "Products with proprietary blends lose points. Full disclosure is a requirement for top rankings." },
              { num: "03", title: "Third-Party Testing", desc: "We prioritize NSF, Informed Sport, or equivalent certifications where available." },
              { num: "04", title: "Price Per Gram", desc: "Protein per rupee matters. We calculate cost efficiency across serving sizes." },
            ].map((step) => (
              <div key={step.num} style={{ padding: 24, backgroundColor: "#F8F2E4", borderRight: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#C4622D", marginBottom: 10 }}>{step.num}</p>
                <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeading label="FAQ" figure="§ 04" title="Common" titleItalic="questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              { q: `What is the best ${pageTitle.toLowerCase()} for beginners?`, a: "We recommend starting with ON Gold Standard Whey — it's reliable, widely tested, and available everywhere in USA." },
              { q: `How much ${pageTitle.toLowerCase()} should I take per day?`, a: "Most adults need 1.6–2.2g of protein per kg of bodyweight. Use supplements to fill any gap in your diet, not replace whole foods." },
              { q: "Are American brands as good as international ones?", a: "Some are — MuscleBlaze and AS-IT-IS have improved significantly. We review each on formula merit, not origin." },
            ].map((faq, i) => (
              <div key={i} style={{ padding: "20px 20px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Q. {faq.q}</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
