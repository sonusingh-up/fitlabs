import type { Metadata } from "next";
import Link from "next/link";
import SourcesToggle from "@/components/ui/SourcesToggle";

export const revalidate = 3600;

// ── helpers (match Roundup Template exactly) ────────────────────────────────
const scoreHex = (n: number) => (n >= 8 ? "#059669" : n >= 6 ? "#0E8784" : n >= 5 ? "#D97706" : "#EF4444");
const EVI = { strong: { icon: "●●●", label: "Evidence Based", color: "#059669", bg: "rgba(5,150,105,0.08)" } };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `Best ${name} (2026) — Tested & Ranked`,
    description: `Our registered dietitians tested and ranked the best ${name.toLowerCase()} for 2026 — FSP scores, full comparison, pricing tiers, and who each pick suits best. Independent, evidence-led.`,
    alternates: { canonical: `/best/${slug}` },
  };
}

// ── Demo data (ported from design; swap for Sanity bestList) ────────────────
type Product = {
  anchorId: string; rankLabel: string; superlative: string; name: string; brand: string;
  retailer: string; stars: string; reviews: string; score: number; monogram: string; tint: string;
  /** Product image URL. "#" = placeholder (falls back to monogram). Replace with a real URL. */
  image?: string;
  proteinType: string; proteinShort: string; calProtein: string; nutrition: string;
  price: string; priceNote: string; discount?: string; affiliateUrl?: string;
  reviewLede: string; reviewRest: string; pros: string[]; cons: string[]; details: [string, string][];
};

// Author byline — the site has exactly two authors
const REVIEWER = { name: "Pankaj Singh", slug: "pankaj-singh", initials: "PS" };
const WRITER = { name: "Fitlab Research Team", slug: "fitlab-research-team" };

const PRODUCTS: Product[] = [
  {
    anchorId: "pick-naked", rankLabel: "Best overall", superlative: "Best overall for weight loss",
    name: "Naked Whey", brand: "Naked Nutrition", retailer: "NAKED NUTRITION", stars: "4.6", reviews: "1.2K+", score: 9, monogram: "NW", tint: "#E7F2EC", image: "#",
    proteinType: "Grass-fed whey concentrate", proteinShort: "Whey concentrate", calProtein: "120 cal / 25g",
    nutrition: "(Unflavored) Calories: 120, Carbs: 3g, Added sugar: 0g, Fat: 2g, Protein: 25g",
    price: "$$", priceNote: "~$1.90/serving",
    reviewLede: "We chose Naked Whey as our overall pick because it strips protein back to essentials: cold-processed grass-fed whey, and nothing else in the unflavored version.",
    reviewRest: "With 25g of protein for 120 calories and zero added sugar, it fits cleanly into a calorie-controlled diet. Our reviewers found it mixed without clumping and stayed neutral enough to blend into smoothies or oats. It is independently tested for heavy metals, which earns points under our Verification pillar.",
    pros: ["Single ingredient in unflavored version", "25g protein, 0g added sugar", "Independently tested for purity", "Mixes without clumping"],
    cons: ["Unflavored is bland on its own", "Concentrate rather than isolate", "Pricier than mass-market whey"],
    details: [["Serving size", "2 scoops (30g)"], ["Servings per tub", "30 (2 lb)"], ["Protein source", "Grass-fed whey concentrate"], ["Sweetener", "None (unflavored)"], ["Third-party tested", "Yes — Informed Choice"], ["Best for", "Clean, minimal formula"]],
  },
  {
    anchorId: "pick-transparent", rankLabel: "Best flavored", superlative: "Best flavored protein powder",
    name: "Transparent Labs Whey Isolate", brand: "Transparent Labs", retailer: "TRANSPARENT LABS", stars: "4.7", reviews: "1.5K+", score: 9, monogram: "TL", tint: "#E7F2EC", image: "#",
    proteinType: "Grass-fed whey isolate", proteinShort: "Whey isolate", calProtein: "130 cal / 28g",
    nutrition: "(Milk Chocolate) Calories: 130, Carbs: 1g, Added sugar: 0g, Fat: 1g, Protein: 28g",
    price: "$$", priceNote: "~$1.95/serving", discount: "Use code FITLAB10 for 10% off",
    reviewLede: "We chose Transparent Labs as the best-tasting pick thanks to a fully transparent label and a wide range of flavors our testers genuinely enjoyed.",
    reviewRest: "It delivers 28g of protein for 130 calories with no added sugar and no artificial sweeteners or coloring. The grass-fed isolate mixes smoothly, and the brand publishes its third-party certificates of analysis — exactly the transparency our scoring rewards.",
    pros: ["28g protein, 1g carbs", "No artificial sweeteners or dyes", "Fully disclosed, tested label", "Excellent range of flavors"],
    cons: ["Premium price point", "Sold mainly direct-to-consumer", "Stevia aftertaste for some"],
    details: [["Serving size", "1 scoop (34g)"], ["Servings per tub", "30"], ["Protein source", "Grass-fed whey isolate"], ["Sweetener", "Stevia"], ["Third-party tested", "Yes — published COAs"], ["Best for", "Taste + transparency"]],
  },
  {
    anchorId: "pick-dymatize", rankLabel: "Most affordable", superlative: "Most affordable protein powder",
    name: "Dymatize Elite 100% Whey", brand: "Dymatize", retailer: "AMAZON", stars: "4.6", reviews: "6.7K+", score: 8, monogram: "DY", tint: "#FBF0DD", image: "#",
    proteinType: "Whey concentrate and isolate blend", proteinShort: "Whey blend", calProtein: "140 cal / 25g",
    nutrition: "(Gourmet Vanilla) Calories: 140, Carbs: 2g, Added sugar: 0g, Fat: 3g, Protein: 25g",
    price: "$", priceNote: "~$1.04/serving",
    reviewLede: "We chose Dymatize Elite as the best budget pick: protein powders are not cheap, and this one delivers 25g of protein for around a dollar a serving.",
    reviewRest: "It pairs whey concentrate and isolate for 25g of protein at 140 calories with minimal sugar. Mixability is reliable and flavors are solid for the price. If you are on a tight budget but still want a verified protein count, it is one of your best options.",
    pros: ["Around $1 per serving", "25g protein, low sugar", "Reliable mixability", "Widely stocked"],
    cons: ["Concentrate-isolate blend", "Contains sucralose", "Fewer flavor options"],
    details: [["Serving size", "1 scoop (34g)"], ["Servings per tub", "32"], ["Protein source", "Whey concentrate + isolate"], ["Sweetener", "Sucralose"], ["Third-party tested", "Informed Choice (select)"], ["Best for", "Budget shoppers"]],
  },
  {
    anchorId: "pick-orgain", rankLabel: "Best plant-based", superlative: "Best plant-based organic",
    name: "Orgain Organic Protein", brand: "Orgain", retailer: "AMAZON", stars: "4.4", reviews: "42K+", score: 8, monogram: "OR", tint: "#EAF3E3", image: "#",
    proteinType: "Organic pea, brown rice, and chia protein", proteinShort: "Organic pea, rice", calProtein: "130 cal / 21g",
    nutrition: "(Vanilla Bean) Calories: 130, Carbs: 12g, Added sugar: 0g, Fat: 3g, Protein: 21g",
    price: "$", priceNote: "~$1.40/serving",
    reviewLede: "We chose Orgain Organic Protein as the best organic plant pick because it is USDA Organic, vegan, and widely available at an accessible price.",
    reviewRest: "It provides 21g of plant protein per serving with no added sugar. Carbohydrates are a little higher than the whey picks, so it suits those who want a fuller, more meal-like shake. The organic certification and broad retail availability make it an easy everyday option.",
    pros: ["USDA Organic and vegan", "Widely available", "No added sugar", "Affordable per serving"],
    cons: ["Higher carbs than whey picks", "Earthier plant taste", "Gritty if under-blended"],
    details: [["Serving size", "2 scoops (46g)"], ["Servings per tub", "20"], ["Protein source", "Organic pea + rice + chia"], ["Sweetener", "Stevia + erythritol"], ["Third-party tested", "USDA Organic certified"], ["Best for", "Organic, plant-based"]],
  },
  {
    anchorId: "pick-huel", rankLabel: "Best with added nutrients", superlative: "Best with added nutrients",
    name: "Huel Complete Protein", brand: "Huel", retailer: "AMAZON", stars: "3.9", reviews: "265+", score: 7, monogram: "HU", tint: "#EFEAF6", image: "#",
    proteinType: "Pea, faba bean, and brown rice protein", proteinShort: "Pea, faba, rice", calProtein: "110 cal / 20g",
    nutrition: "(Vanilla) Calories: 110, Carbs: 5g, Added sugar: 0g, Fat: 1g, Protein: 20g",
    price: "$", priceNote: "~$1.30/serving",
    reviewLede: "We chose Huel Complete Protein because it adds 26 vitamins and minerals on top of a plant-protein base — useful if you are cutting calories and worried about micronutrient gaps.",
    reviewRest: "At 110 calories and 20g of protein, it is a sensible lower-calorie option. The added nutrient blend is the differentiator, though the plant base has a slightly chalkier texture than whey and the proprietary flavor system is not for everyone.",
    pros: ["26 added vitamins and minerals", "Plant-based and vegan", "Low calorie, no added sugar", "Affordable per serving"],
    cons: ["Chalkier texture than whey", "20g protein is on the lower side", "Flavor divides reviewers"],
    details: [["Serving size", "1 scoop (33g)"], ["Servings per bag", "25"], ["Protein source", "Pea + faba + brown rice"], ["Sweetener", "Sucralose"], ["Third-party tested", "In-house + select batches"], ["Best for", "Added micronutrients"]],
  },
];

const FAST_FACTS = [
  "Raising protein intake supports weight loss by increasing fullness, preserving lean muscle in a calorie deficit, and modestly raising the thermic effect of feeding.",
  "Our picks deliver 20–28g of protein, stay under 200 calories per serving, and keep added sugar at or near zero — verified against each product's third-party panel.",
  "Our top overall choice, Naked Whey, is a single-ingredient grass-fed whey with 25g protein and 0g added sugar.",
];

const CRITERIA = [
  { num: "01", title: "Nutrition profile", desc: "Under 200 calories, low added sugar, and a high protein-to-calorie ratio to support a reduced-calorie diet." },
  { num: "02", title: "Formula quality", desc: "Complete amino acid profile, minimal fillers, and no proprietary blends that hide per-ingredient doses." },
  { num: "03", title: "Third-party testing", desc: "We prioritize NSF Certified for Sport, Informed Choice, or published heavy-metal and label-accuracy testing." },
  { num: "04", title: "Real-world testing", desc: "Our reviewers used each powder for at least two weeks, rating taste, texture, and mixability." },
];

const FAQS = [
  { q: "Does protein powder actually help with weight loss?", a: "Indirectly, yes. Protein increases fullness and helps preserve lean muscle in a calorie deficit, which supports fat loss. The powder itself isn't magic — it's a convenient way to hit a higher daily protein target inside a reduced-calorie diet." },
  { q: "How much protein should I have per day to lose weight?", a: "Most adults aiming to lose fat do well at roughly 1.6–2.2g of protein per kg of body weight. Use powder to fill the gap your whole-food meals leave, not to replace them." },
  { q: "Is whey or plant protein better for weight loss?", a: "Both work. Whey is slightly more complete per gram and mixes smoother; quality plant blends (pea + rice) close the gap and suit vegan or dairy-sensitive diets. Choose by preference and tolerance." },
  { q: "Should I get concentrate or isolate?", a: "For most people it doesn't matter. Isolate is marginally leaner and lower in lactose; concentrate costs less and still delivers ~25g protein per serving. Pick isolate only if you need the lowest fat, carbs, or lactose." },
  { q: "When should I take it?", a: "Timing is flexible. A serving after training can aid recovery and muscle maintenance, but total daily protein matters far more than exact timing." },
];

const SOURCES = [
  { text: "Pasiakos SM, et al. (2015). Effects of high-protein diets on fat-free mass. Sports Medicine, 45(1).", url: "https://doi.org/10.1007/s40279-014-0282-7" },
  { text: "Morton RW, et al. (2018). Protein supplementation and resistance training: a meta-analysis. British Journal of Sports Medicine, 52(6).", url: "https://doi.org/10.1136/bjsports-2017-097608" },
  { text: "Leidy HJ, et al. (2015). The role of protein in weight loss and maintenance. American Journal of Clinical Nutrition, 101(6).", url: "https://doi.org/10.3945/ajcn.114.084038" },
  { text: "Product pricing and certifications verified from manufacturer and Amazon listings, June 2026." },
];
const HISTORY = [
  { date: "Jun 21, 2026", note: "Re-tested all picks; updated per-serving pricing and certifications." },
  { date: "Jan 12, 2026", note: "Added Transparent Labs and refreshed scoring to FSP v2.1." },
  { date: "Aug 30, 2025", note: "Original roundup published." },
];

const TOC = [
  { id: "fast-facts", label: "The fast facts" },
  { id: "quick-look", label: "A quick look" },
  { id: "pricing", label: "Pricing guide" },
  { id: "picks", label: "Our top picks" },
  { id: "how-we-chose", label: "How we chose" },
  { id: "why-trust", label: "Why trust us" },
  { id: "compare", label: "How they compare" },
  { id: "how-effective", label: "How effective is it?" },
  { id: "how-to-use", label: "How to use it" },
  { id: "faq", label: "FAQ" },
  { id: "bottom-line", label: "The bottom line" },
];

const shareSvgs = {
  fb: "M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.8-1.7H17V1.3C16.4 1.2 15.3 1 14 1c-2.8 0-4.6 1.7-4.6 4.8V9H6v4h3.4v9z",
  x: "M18.2 2H21l-6.6 7.5L22 22h-6.1l-4.8-6.3L5.7 22H3l7-8L2 2h6.2l4.4 5.8zM16 20.2h1.5L8 3.7H6.4z",
};

export default async function BestOfPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const em = EVI.strong;
  const shareUrl = `https://fitlabreviews.com/best/${slug}`;

  const sectionEyebrow = (num: string, label: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".12em", color: "#6B7770" }}>{num}</span>
      <span style={{ width: 24, height: 1, background: "#E4E8E5" }} />
      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".12em", color: "#0F7A5A", fontWeight: 600 }}>{label}</span>
    </div>
  );
  const h2: React.CSSProperties = { fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#17211C", letterSpacing: "-.025em", lineHeight: 1.08 };

  return (
    <div style={{ fontFamily: "var(--font-hanken), sans-serif", color: "#17211c", background: "#fff" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", background: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#6B7770", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#C8D2CB" }}>/</span>
          <Link href="/best" style={{ color: "#6B7770", textDecoration: "none" }}>Best Of</Link>
          <span style={{ color: "#C8D2CB" }}>/</span>
          <span style={{ color: "#3F4B43" }}>Best {pageTitle}</span>
        </div>
      </div>

      {/* ARTICLE SHELL */}
      <div className="best-shell" style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 0", display: "flex", alignItems: "flex-start", gap: 40 }}>

        {/* share rail */}
        <div className="best-rail" style={{ flex: "none", width: 44, position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: ".18em", color: "#9AA39C", writingMode: "vertical-rl", transform: "rotate(180deg)", margin: "0 auto 6px" }}>SHARE</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, border: "1px solid #E4E8E5", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#586259", textDecoration: "none" }}><svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor"><path d={shareSvgs.fb} /></svg></a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent("Best " + pageTitle)}`} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, border: "1px solid #E4E8E5", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#586259", textDecoration: "none" }}><svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d={shareSvgs.x} /></svg></a>
          <a href={`mailto:?subject=${encodeURIComponent("Best " + pageTitle)}&body=${encodeURIComponent(shareUrl)}`} style={{ width: 38, height: 38, border: "1px solid #E4E8E5", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#586259", textDecoration: "none" }}><svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg></a>
        </div>

        {/* MAIN */}
        <main style={{ flex: 1, minWidth: 0, maxWidth: 740 }}>

          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#0F7A5A", fontWeight: 600 }}>Nutrition</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 9px", background: em.bg, border: `1px solid ${em.color}33`, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: ".10em", textTransform: "uppercase", color: em.color }}>
              <span style={{ letterSpacing: 2, fontSize: 8 }}>{em.icon}</span>{em.label}
            </span>
          </div>

          {/* title */}
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.1rem)", fontWeight: 700, letterSpacing: "-.03em", color: "#17211C", lineHeight: 1.04, margin: "0 0 20px" }}>
            {PRODUCTS.length} Best {pageTitle}, <em style={{ fontStyle: "italic", fontWeight: 500, color: "#586259" }}>Tested &amp; Ranked for 2026</em>
          </h1>

          {/* byline */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px", paddingBottom: 22, marginBottom: 8, borderBottom: "1px solid #E4E8E5", fontSize: 13, color: "#586259", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            <span>Medically reviewed by <Link href={`/authors/${REVIEWER.slug}`} className="jl" style={{ color: "#0F7A5A", textDecoration: "none", fontWeight: 600 }}>{REVIEWER.name}</Link></span>
            <span style={{ color: "#C8D2CB" }}>·</span>
            <span>Written by <Link href={`/authors/${WRITER.slug}`} className="jl" style={{ color: "#0F7A5A", textDecoration: "none", fontWeight: 600 }}>{WRITER.name}</Link></span>
            <span style={{ color: "#C8D2CB" }}>·</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".04em", color: "#6B7770" }}>UPDATED JUN 21, 2026</span>
          </div>

          {/* on this page */}
          <details open style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", margin: "24px 0 36px" }}>
            <summary className="review-otp-summary" style={{ background: "#F2F8F4", cursor: "pointer", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, color: "#17211C" }}>On this page</span>
              <span className="review-otp-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400 }} />
            </summary>
            <div className="review-otp-grid" style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px" }}>
              {TOC.map((t, i) => (
                <a key={t.id} href={`#${t.id}`} style={{ display: "flex", gap: 10, padding: "6px 0", fontSize: 13.5, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", minWidth: 16 }}>{String(i + 1).padStart(2, "0")}</span>{t.label}
                </a>
              ))}
            </div>
          </details>

          {/* FAST FACTS */}
          <section id="fast-facts" style={{ scrollMarginTop: 90, position: "relative", background: "#EFF6F0", border: "1px solid #DCEAE0", borderRadius: 14, padding: "34px 34px 30px", marginBottom: 48, overflow: "hidden" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.7rem", fontWeight: 700, color: "#17211C", margin: "0 0 18px", letterSpacing: "-.02em" }}>The fast facts</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 13 }}>
              {FAST_FACTS.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 8, flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: "#0F7A5A" }} />
                  <span style={{ fontSize: 15.5, lineHeight: 1.65, color: "#2D3A31" }}>{f}</span>
                </li>
              ))}
            </ul>
            <span style={{ position: "absolute", bottom: 18, right: 26, fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 900, fontSize: 15, color: "#17211C", opacity: .32, letterSpacing: "-.03em" }}>fitlabreviews</span>
          </section>

          {/* QUICK LOOK */}
          <section id="quick-look" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            {sectionEyebrow("§ 01", "AT A GLANCE")}
            <h2 style={{ ...h2, margin: "0 0 22px" }}>A quick look at the best <em style={{ fontStyle: "italic", fontWeight: 500, color: "#6B7770" }}>{pageTitle.toLowerCase()}</em></h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {PRODUCTS.map((p) => (
                <li key={p.anchorId} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: "#0F7A5A", transform: "translateY(-2px)" }} />
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "#2D3A31" }}>
                    <strong style={{ color: "#17211c" }}>{p.superlative}:</strong> {p.name}{" "}
                    <a href={`#${p.anchorId}`} className="jl" style={{ color: "#0F7A5A", textDecoration: "none", fontStyle: "italic", whiteSpace: "nowrap" }}>| Jump to review</a>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* PRICING GUIDE */}
          <section id="pricing" style={{ scrollMarginTop: 90, background: "#FAF5EC", border: "1px dashed #E3D6BC", borderRadius: 14, padding: "30px 32px", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.45rem", fontWeight: 700, color: "#17211C", margin: "0 0 16px", letterSpacing: "-.02em" }}>Pricing guide</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {[["$", "under $1.50 per serving"], ["$$", "$1.50 to $2.00 per serving"], ["$$$", "over $2.00 per serving"]].map(([sym, txt]) => (
                <li key={sym} style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: 15, color: "#2D3A31" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, color: "#0F7A5A", minWidth: 34 }}>{sym}</span> = {txt}
                </li>
              ))}
            </ul>
          </section>

          {/* OUR PICKS */}
          <section id="picks" style={{ scrollMarginTop: 90, marginBottom: 24 }}>
            {sectionEyebrow("§ 02", "THE PICKS")}
            <h2 style={{ ...h2, margin: "0 0 30px" }}>Our top picks <em style={{ fontStyle: "italic", fontWeight: 500, color: "#6B7770" }}>for {pageTitle.toLowerCase()}</em></h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {PRODUCTS.map((p) => {
                const sc = scoreHex(p.score);
                return (
                  <article key={p.anchorId} id={p.anchorId} style={{ scrollMarginTop: 90, border: "1px solid #E4E8E5", borderRadius: 14, background: "#fff", padding: 30, boxShadow: "0 1px 2px rgba(16,30,22,.04)" }}>
                    {/* superlative + score */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 18, marginBottom: 6 }}>
                      <div>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#0F7A5A", fontWeight: 600 }}>{p.rankLabel}</span>
                        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-.02em", margin: "6px 0 0", lineHeight: 1.15 }}>{p.superlative}</h3>
                      </div>
                      <div style={{ flexShrink: 0, width: 78, height: 78, borderRadius: 12, background: `${sc}14`, border: `1px solid ${sc}33`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1 }}>
                        <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 26, fontWeight: 700, color: sc, lineHeight: 1 }}>{p.score}<span style={{ fontSize: 13, fontWeight: 400, color: "#8A958D" }}>/10</span></span>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 7, letterSpacing: ".12em", color: sc }}>FSP SCORE</span>
                      </div>
                    </div>

                    {/* rating line */}
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 22 }}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="#C98A1E"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#17211c" }}>{p.stars}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#9AA39C", letterSpacing: ".04em" }}>({p.reviews}) FROM {p.retailer}</span>
                    </div>

                    {/* image + spec bullets */}
                    <div className="best-pick-body" style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                      <div style={{ flexShrink: 0, width: 190, height: 190, borderRadius: "50%", background: p.tint, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        {p.image && p.image !== "#" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.image} alt={p.name} style={{ width: 130, height: 160, objectFit: "contain", filter: "drop-shadow(0 6px 18px rgba(16,30,22,.18))" }} />
                        ) : (
                          <div style={{ width: 78, height: 118, borderRadius: 7, background: "#fff", boxShadow: "0 6px 18px rgba(16,30,22,.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 900, fontSize: 22, color: "#17211C", letterSpacing: "-.02em" }}>{p.monogram}</span>
                          </div>
                        )}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                        {[["Protein type", p.proteinType], ["Nutrition per serving", p.nutrition]].map(([k, v]) => (
                          <li key={k} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ marginTop: 7, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: "#0F7A5A" }} />
                            <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#2D3A31" }}><strong style={{ color: "#17211c" }}>{k}:</strong> {v}</span>
                          </li>
                        ))}
                        <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ marginTop: 7, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: "#0F7A5A" }} />
                          <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#2D3A31" }}><strong style={{ color: "#17211c" }}>Price:</strong> <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, color: "#0F7A5A" }}>{p.price}</span> <span style={{ color: "#6B7770" }}>· {p.priceNote}</span></span>
                        </li>
                        {p.discount && (
                          <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ marginTop: 7, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: "#C98A1E" }} />
                            <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#2D3A31" }}>{p.discount}</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* our review */}
                    <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginTop: 26, paddingTop: 24, borderTop: "1px solid #EEF1EF" }}>
                      <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: 10, background: sc, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                        <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{p.score}</span>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 6.5, letterSpacing: ".1em", color: "rgba(255,255,255,.85)" }}>OUT OF 10</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#17211C", margin: "0 0 8px" }}>Our review</h4>
                        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3F4B43", margin: 0 }}>{p.reviewLede}</p>
                        <details className="best-readmore">
                          <summary style={{ marginTop: 12, cursor: "pointer", listStyle: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 600, color: "#0F7A5A", display: "inline-flex", alignItems: "center", gap: 5 }}>
                            <span className="best-readmore-label" /> <span className="best-readmore-chev" style={{ fontSize: 11 }} />
                          </summary>
                          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3F4B43", margin: "12px 0 0" }}>{p.reviewRest}</p>
                        </details>
                      </div>
                    </div>

                    {/* pros & cons accordion */}
                    <details className="best-acc" style={{ borderTop: "1px solid #EEF1EF", marginTop: 22 }}>
                      <summary className="best-acc-sum" style={{ cursor: "pointer", padding: "18px 2px", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none" }}>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, color: "#17211C" }}>Pros &amp; cons</span>
                        <span className="best-acc-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400 }} />
                      </summary>
                      <div className="best-proscons" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: "2px 0 20px" }}>
                        <div style={{ background: "rgba(15,122,90,.05)", border: "1px solid rgba(15,122,90,.15)", borderRadius: 12, padding: 18 }}>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 13px" }}>Strengths</p>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                            {p.pros.map((pro, i) => (
                              <li key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}><span style={{ flexShrink: 0, marginTop: 1, color: "#0F7A5A" }}><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ fontSize: 13, lineHeight: 1.5, color: "#2D2926" }}>{pro}</span></li>
                            ))}
                          </ul>
                        </div>
                        <div style={{ background: "rgba(217,119,6,.05)", border: "1px solid rgba(217,119,6,.18)", borderRadius: 12, padding: 18 }}>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#B7791F", margin: "0 0 13px" }}>Limitations</p>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                            {p.cons.map((con, i) => (
                              <li key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}><span style={{ flexShrink: 0, marginTop: 1, color: "#B7791F" }}><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round"><path d="M5 12h14" /></svg></span><span style={{ fontSize: 13, lineHeight: 1.5, color: "#2D2926" }}>{con}</span></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>

                    {/* product details accordion */}
                    <details className="best-acc" style={{ borderTop: "1px solid #EEF1EF" }}>
                      <summary className="best-acc-sum" style={{ cursor: "pointer", padding: "18px 2px", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none" }}>
                        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, color: "#17211C" }}>Product details</span>
                        <span className="best-acc-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400 }} />
                      </summary>
                      <div style={{ padding: "2px 0 22px" }}>
                        <div style={{ border: "1px solid #EEF1EF", borderRadius: 12, overflow: "hidden" }}>
                          {p.details.map(([k, v], i) => (
                            <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 18, padding: "11px 16px", borderBottom: "1px solid #F3F6F4", background: i % 2 === 1 ? "#F8FAF8" : "#fff" }}>
                              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "#6B7770" }}>{k}</span>
                              <span style={{ fontSize: 13, color: "#17211C", fontWeight: 500, textAlign: "right" }}>{v}</span>
                            </div>
                          ))}
                        </div>
                        <a href={p.affiliateUrl ?? `https://www.amazon.com/s?k=${encodeURIComponent(p.name)}&tag=supplementstr-20`} target="_blank" rel="nofollow noopener noreferrer" className="jl" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "11px 20px", border: "1px solid #17211c", borderRadius: 999, fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 700, color: "#17211c", textDecoration: "none" }}>Check price <span className="nudge">→</span></a>
                        <span style={{ display: "block", marginTop: 8, fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: ".08em", color: "#9AA39C" }}>AFFILIATE LINK · WE MAY EARN A COMMISSION</span>
                      </div>
                    </details>
                  </article>
                );
              })}
            </div>
          </section>

          {/* HOW WE CHOSE */}
          <section id="how-we-chose" style={{ scrollMarginTop: 90, margin: "56px 0" }}>
            {sectionEyebrow("§ 03", "METHODOLOGY")}
            <h2 style={{ ...h2, margin: "0 0 14px" }}>How we chose <em style={{ fontStyle: "italic", fontWeight: 500, color: "#6B7770" }}>these picks</em></h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#3F4B43", margin: "0 0 26px", maxWidth: 660 }}>Our registered dietitians and testers scored every product against the Fitlab Scoring Protocol. Here is what mattered most.</p>
            <div className="best-criteria" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#E4E8E5", border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
              {CRITERIA.map((c) => (
                <div key={c.num} style={{ padding: 24, background: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".2em", color: "#0F7A5A", margin: "0 0 10px" }}>{c.num}</p>
                  <h4 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#17211C", margin: "0 0 8px" }}>{c.title}</h4>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#3F4B43", margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13.5, margin: "18px 0 0", color: "#3F4B43" }}><span style={{ color: "#17211c", fontWeight: 700 }}>» Learn more:</span> <Link href="/methodology" className="jl" style={{ color: "#0F7A5A", textDecoration: "none" }}>How we vet brands and products</Link>.</p>
          </section>

          {/* WHY TRUST — dark band */}
          <section id="why-trust" style={{ scrollMarginTop: 90, margin: "0 0 56px", borderRadius: 16, overflow: "hidden", background: "#101A16", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
            <div style={{ position: "relative", padding: "14px 28px", background: "#0F7A5A" }}><span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".2em", color: "#fff", fontWeight: 600, display: "block", textAlign: "center" }}>WHY TRUST FITLABREVIEWS</span></div>
            <div className="best-trust" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, padding: "38px 28px" }}>
              {[["82", "protein powders evaluated by our standards team"], ["54", "met our nutrition and transparency criteria"], ["19", "personally tested by our review team"]].map(([n, t], i) => (
                <div key={n} style={{ padding: "0 18px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 44, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1, borderBottom: "2px solid #C98A1E", display: "inline-block", paddingBottom: 8 }}>{n}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,.72)", margin: "14px 0 0" }}>{t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section id="compare" style={{ scrollMarginTop: 90, marginBottom: 56 }}>
            {sectionEyebrow("§ 04", "SIDE BY SIDE")}
            <h2 style={{ ...h2, margin: "0 0 24px" }}>How they <em style={{ fontStyle: "italic", fontWeight: 500, color: "#6B7770" }}>compare</em></h2>
            <div className="review-table-wrap" style={{ border: "1px solid #E4E8E5" }}>
              <table style={{ borderCollapse: "collapse", fontFamily: "var(--font-dm-sans), sans-serif", minWidth: 640 }}>
                <thead>
                  <tr>
                    {["Product", "Score", "Price", "Protein type", "Cal / Protein"].map((th) => (
                      <th key={th} style={{ textAlign: "left", padding: "13px 18px", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#fff", fontWeight: 600, background: "#0F7A5A" }}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p, i) => (
                    <tr key={p.anchorId} style={{ borderBottom: "1px solid #EEF1EF", background: i % 2 === 1 ? "#F8FAF8" : "#fff" }}>
                      <td style={{ padding: "14px 18px" }}><span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211C", display: "block" }}>{p.name}</span><span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#9AA39C" }}>{p.superlative}</span></td>
                      <td style={{ padding: "14px 18px" }}><span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 18, fontWeight: 700, color: scoreHex(p.score) }}>{p.score}<span style={{ fontSize: 11, fontWeight: 400, color: "#9AA39C" }}>/10</span></span></td>
                      <td style={{ padding: "14px 18px", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, fontSize: 13, color: "#0F7A5A" }}>{p.price}</td>
                      <td style={{ padding: "14px 18px", fontSize: 13, color: "#3F4B43" }}>{p.proteinShort}</td>
                      <td style={{ padding: "14px 18px", fontSize: 13, color: "#3F4B43" }}>{p.calProtein}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* HOW EFFECTIVE */}
          <section id="how-effective" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.5rem,2.8vw,2rem)", fontWeight: 700, color: "#17211C", letterSpacing: "-.025em", lineHeight: 1.1, margin: "0 0 18px" }}>How effective is {pageTitle.toLowerCase()} for weight loss?</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: "0 0 16px" }}>Protein powder helps you reach a higher daily protein intake, which supports weight loss by increasing fullness, preserving lean mass, and modestly raising energy expenditure — even in a calorie deficit. In a 2015 review in <em>Sports Medicine</em>, Pasiakos and colleagues found that higher-protein diets during energy restriction better protected lean muscle than standard-protein diets.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: "0 0 18px" }}>Powders are simply a convenient way to add protein. They work best inside a balanced diet and regular training — not as a replacement for whole foods. Used that way, they can help you:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 8px", display: "flex", flexDirection: "column", gap: 12 }}>
              {[["Feel fuller for longer", "protein blunts appetite, helping you eat fewer total calories."], ["Preserve lean muscle", "paired with resistance training, adequate protein limits muscle loss while cutting."], ["Support recovery", "faster recovery makes it easier to stay consistent with training."]].map(([b, t]) => (
                <li key={b} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}><span style={{ marginTop: 7, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: "#0F7A5A" }} /><span style={{ fontSize: 15, lineHeight: 1.65, color: "#2D3A31" }}><strong style={{ color: "#17211c" }}>{b}</strong> — {t}</span></li>
              ))}
            </ul>
          </section>

          {/* HOW TO USE */}
          <section id="how-to-use" style={{ scrollMarginTop: 90, marginBottom: 52 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.5rem,2.8vw,2rem)", fontWeight: 700, color: "#17211C", letterSpacing: "-.025em", lineHeight: 1.1, margin: "0 0 18px" }}>How to use {pageTitle.toLowerCase()} for weight loss</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: "0 0 16px" }}>Use protein powder to fill the gap between what you eat and your daily target — most adults aiming to lose fat do well at roughly 1.6–2.2g of protein per kg of body weight. Blend it into smoothies, stir it into oatmeal or yogurt, or bake with it to raise the protein content of a meal without adding many calories.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: 0 }}>Timing is flexible, though a serving after training can aid recovery and muscle maintenance. Remember that supplements support — never replace — the basics: balanced nutrition, sleep, stress management, and regular activity.</p>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ scrollMarginTop: 90, marginBottom: 52 }}>
            {sectionEyebrow("§ 05", "FAQ")}
            <h2 style={{ ...h2, margin: "0 0 22px" }}>Frequently asked <em style={{ fontStyle: "italic", fontWeight: 500, color: "#6B7770" }}>questions</em></h2>
            <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
              {FAQS.map((f, i) => (
                <details key={i} className="review-faq" style={{ borderBottom: i < FAQS.length - 1 ? "1px solid #EEF1EF" : "none", background: i % 2 === 1 ? "#F8FAF8" : "#fff" }}>
                  <summary style={{ cursor: "pointer", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, listStyle: "none" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 14.5, color: "#17211C", lineHeight: 1.4 }}>{f.q}</span>
                    <span className="review-faq-icon" style={{ fontSize: 20, color: "#0F7A5A", lineHeight: 1, fontWeight: 400, flexShrink: 0 }} />
                  </summary>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "#3F4B43", margin: 0, padding: "0 20px 20px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* BOTTOM LINE */}
          <section id="bottom-line" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <h2 style={{ ...h2, margin: "0 0 16px" }}>The bottom line</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: "0 0 16px" }}>Many people reach for protein powder to build muscle, but the right pick can also support a weight-loss plan. Our top choice, <strong style={{ color: "#17211c" }}>{PRODUCTS[0].name}</strong>, keeps things simple — {PRODUCTS[0].calProtein.split("/")[1]?.trim() ?? "clean protein"}, no added sugar, and independent testing for purity.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#3F4B43", margin: 0 }}>Whichever you choose, you&apos;ll see the best results using it alongside a balanced, reduced-calorie diet and consistent training. A supplement is a tool — the fundamentals do the heavy lifting.</p>
          </section>

          {/* SOURCES / HISTORY */}
          <section id="sources" style={{ borderTop: "1px solid #E4E8E5", paddingTop: 28, marginBottom: 8 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".06em", color: "#9AA39C", margin: "0 0 18px" }}>LAST MEDICALLY REVIEWED ON JUNE 21, 2026</p>
            <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", margin: "0 0 14px" }}>How we reviewed this article</h3>
            <SourcesToggle sources={SOURCES} history={HISTORY} />
            <p style={{ fontSize: 12, color: "#9AA39C", marginTop: 18, lineHeight: 1.6 }}>
              Fitlabreviews has strict sourcing guidelines and relies on peer-reviewed studies, academic research, and clinical evidence.{" "}
              <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>Read our editorial policy →</Link>
            </p>
          </section>

        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="best-sidebar" style={{ flex: "none", width: 300 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: 22, borderBottom: "2px solid #17211c", marginBottom: 24 }}>
            <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#d4e9df,#eef6f1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 800, color: "#0F7A5A", fontSize: 18 }}>{REVIEWER.initials}</div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: "#3F4B43", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <Link href={`/authors/${REVIEWER.slug}`} className="jl" style={{ color: "#0F7A5A", textDecoration: "none", fontWeight: 600 }}>Medically reviewed</Link> by {REVIEWER.name} — Written by <Link href={`/authors/${WRITER.slug}`} className="jl" style={{ color: "#0F7A5A", textDecoration: "none", fontWeight: 600 }}>{WRITER.name}</Link> — <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11 }}>Updated Jun 21, 2026</span>
            </div>
          </div>

          <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 24 }}>
            <nav style={{ border: "1px solid #E4E8E5", borderRadius: 12, padding: "18px 6px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "#586259", margin: "0 0 12px", paddingLeft: 14 }}>Contents</p>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                {TOC.map((t, i) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="toc-link" style={{ display: "flex", gap: 10, alignItems: "baseline", padding: "8px 14px", borderRadius: 8, fontSize: 13, color: "#3F4B43", textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#9AA39C", minWidth: 16 }}>{String(i + 1).padStart(2, "0")}</span>{t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div style={{ background: "#E7F2EC", borderRadius: 14, padding: 24 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 10px" }}>Fitlabreviews newsletter</p>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#17211C", margin: "0 0 10px", lineHeight: 1.2 }}>Get the Research Dispatch</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3F4B43", margin: "0 0 18px" }}>Evidence-led supplement and nutrition research in your inbox. No hype, no sponsors.</p>
              <Link href="/#newsletter" style={{ display: "block", textAlign: "center", background: "#0F7A5A", color: "#fff", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: ".04em", padding: 13, borderRadius: 8, textDecoration: "none" }}>JOIN NOW</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
