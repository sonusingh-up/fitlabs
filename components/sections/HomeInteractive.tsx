"use client";

import Link from "next/link";

const bestOfItems = [
  { label: "Best Protein Powders", href: "/best/protein-powder", count: "12 products", code: "R-01" },
  { label: "Best Pre-Workout", href: "/best/pre-workout", count: "9 products", code: "R-02" },
  { label: "Best Creatine", href: "/best/creatine", count: "8 products", code: "R-03" },
  { label: "Best for Beginners", href: "/best/beginners", count: "6 stacks", code: "R-04" },
  { label: "Best for Weight Loss", href: "/best/weight-loss", count: "10 products", code: "R-05" },
  { label: "Best for Muscle Gain", href: "/best/muscle-gain", count: "11 products", code: "R-06" },
  { label: "Best Vitamins", href: "/best/vitamins", count: "7 products", code: "R-07" },
  { label: "Best Budget Picks", href: "/best/budget", count: "8 products", code: "R-08" },
];

const articles = [
  { title: "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging", href: "/blog/sleep-window-anti-aging", date: "May 2026", code: "BLG-001", category: "Longevity & Sleep", bg: "linear-gradient(145deg, #064E3B 0%, #022C22 100%)" },
  { title: "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss", href: "/blog/glp1-benefits-beyond-weight-loss", date: "May 2026", code: "BLG-002", category: "Pharmacology", bg: "linear-gradient(145deg, #7F1D1D 0%, #450A0A 100%)" },
  { title: "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally", href: "/blog/plant-foods-menopause", date: "May 2026", code: "BLG-003", category: "Women's Health", bg: "linear-gradient(145deg, #14532D 0%, #052E16 100%)" },
  { title: "Food as Medicine: How Your Diet Directly Impacts Depression & Anxiety", href: "/blog/diet-depression-anxiety", date: "May 2026", code: "BLG-004", category: "Mental Health", bg: "linear-gradient(145deg, #78350F 0%, #451A03 100%)" },
  { title: "Fitness Travel in 2026: How to Turn Your Vacation Into a Wellness Retreat", href: "/blog/fitness-travel-2026", date: "May 2026", code: "BLG-005", category: "Training & Lifestyle", bg: "linear-gradient(145deg, #1E3A5F 0%, #0F172A 100%)" },
];

export function BestOfGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
      {bestOfItems.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          style={{ display: "flex", flexDirection: "column", borderRadius: 14, overflow: "hidden", border: "1px solid #e4e8e5", textDecoration: "none", transition: "all 0.2s", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 12px 36px -8px rgba(0,0,0,0.12)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
            el.style.transform = "translateY(0)";
          }}
        >
          <div style={{ height: 52, background: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", position: "relative", overflow: "hidden", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ position: "relative", fontFamily: "var(--font-hanken), sans-serif", fontSize: 11, fontWeight: 700, color: "#0f7a5a", letterSpacing: "0.1em" }}>{item.code}</span>
            <span style={{ position: "relative", fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")} / {bestOfItems.length.toString().padStart(2, "0")}</span>
          </div>
          <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211c", lineHeight: 1.3, marginBottom: 8, display: "block" }}>{item.label}</span>
            <span style={{ fontSize: 11, color: "#6b7770", fontFamily: "var(--font-hanken), sans-serif" }}>{item.count} →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TrustGrid({ trustPoints }: { trustPoints: { icon: React.ReactNode; title: string; body: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
      {trustPoints.map((point, i) => (
        <div key={point.title} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #e4e8e5", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ height: 52, background: "linear-gradient(145deg, #1F2937 0%, #17211c 100%)", position: "relative", overflow: "hidden", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ position: "relative", color: "#0f7a5a" }}>{point.icon}</span>
            <span style={{ position: "relative", fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div style={{ padding: "16px 16px 20px" }}>
            <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211c", marginBottom: 8 }}>{point.title}</h4>
            <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.6 }}>{point.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ArticlesGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
      {articles.map((article, i) => (
        <Link
          key={article.href}
          href={article.href}
          style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid #e4e8e5", textDecoration: "none", transition: "all 0.2s", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 12px 36px -8px rgba(0,0,0,0.12)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
            el.style.transform = "translateY(0)";
          }}
        >
          <div style={{ height: 88, background: article.bg, position: "relative", overflow: "hidden", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f7a5a" }}>{article.category}</span>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em" }}>{article.code}</span>
            </div>
            <span style={{ position: "relative", fontFamily: "var(--font-hanken), sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}>{String(i + 1).padStart(2, "0")} / {articles.length.toString().padStart(2, "0")}</span>
          </div>
          <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
            <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211c", lineHeight: 1.3 }}>{article.title}</h4>
            <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 10, fontWeight: 600, color: "#6b7770" }}>{article.date} →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
