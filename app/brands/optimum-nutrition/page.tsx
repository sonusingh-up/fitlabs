import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Optimum Nutrition Brand Review (2026): Gold Tier",
  description:
    "Optimum Nutrition brand profile: founded 1986, Informed Choice certified, NSF-GMP manufacturing. Full product lineup, certifications, and our 8.1/10 avg score across 12 products.",
  alternates: { canonical: "/brands/optimum-nutrition" },
};

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/optimum-nutrition#org",
  name: "Optimum Nutrition",
  url: "https://fitlabreviews.com/brands/optimum-nutrition",
  foundingDate: "1986",
  parentOrganization: { "@type": "Organization", name: "Glanbia Performance Nutrition" },
  description:
    "Optimum Nutrition is an American sports nutrition brand founded in 1986 and acquired by Glanbia in 2008. Best known for Gold Standard 100% Whey, the category's reference-standard protein supplement for over two decades.",
  sameAs: ["https://www.optimumnutrition.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",   item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands", item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "Optimum Nutrition", item: "https://fitlabreviews.com/brands/optimum-nutrition" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",        value: "1986"   },
  { label: "Parent",         value: "Glanbia" },
  { label: "Products",       value: "50+"    },
  { label: "Countries",      value: "90+"    },
  { label: "Avg Score",      value: "8.1/10" },
  { label: "3P Tested",      value: "Yes"    },
];

const certifications = [
  {
    name: "Informed Choice / Informed Sport",
    status: "pass" as const,
    detail: "Gold Standard 100% Whey and several core SKUs carry Informed Sport certification — independently tested for 200+ WADA prohibited substances, batch by batch.",
  },
  {
    name: "NSF-GMP Certified Facility",
    status: "pass" as const,
    detail: "Manufacturing facilities are NSF International GMP-certified, ensuring contamination controls, batch consistency, and label-claim accuracy.",
  },
  {
    name: "USP Verified",
    status: "fail" as const,
    detail: "No USP Dietary Supplement Verification found across the ON product range as of May 2026.",
  },
  {
    name: "BSCG Certified Drug Free",
    status: "fail" as const,
    detail: "No BSCG certification across the ON product range.",
  },
  {
    name: "Third-Party Batch Testing",
    status: "pass" as const,
    detail: "Informed Sport batch test certificates are verifiable via QR code on packaging — each lot is independently tested before release.",
  },
  {
    name: "FDA Record",
    status: "pass" as const,
    detail: "No FDA warning letters, recalls, or significant adverse event reports on file for Optimum Nutrition. Clean record since 1986.",
  },
];

const greenFlags = [
  "Informed Sport certified since 2012 — batch-level, independent banned-substance testing",
  "Full 18-amino acid disclosure on Gold Standard Whey label — exceeds US labelling requirements",
  "QR code batch verification on-pack links directly to Informed Sport test certificate",
  "37-year commercial track record with zero major product recalls",
  "NSF-GMP certified manufacturing — batch consistency verified at facility level",
  "Most thoroughly reviewed whey in category — replicated across 20+ independent lab analyses",
];

const redFlags = [
  "Aminogen® digestive enzyme blend dose is proprietary — individual ingredient weights undisclosed",
  "Some lower-tier SKUs (Serious Mass) mix WPC with lower-quality protein sources without dose breakdown",
  "Premium pricing — cost-per-gram-of-protein runs ~20% above category average on standard tub sizes",
  "Post-Glanbia acquisition (2008): community reports note minor formula adjustments, though documented quality metrics remain strong",
];

const products = [
  {
    slug: "on-gold-standard-whey",
    name: "Gold Standard 100% Whey",
    category: "Whey Protein",
    price: "$45–55",
    priceNote: "5 lb · ~$1.15–1.25/serving",
    description: "The category reference standard. WPC80 + WPI + whey peptides, 24g protein per 29.4g scoop — 81.6% protein density. Full amino acid label disclosure. Informed Sport certified.",
    keyIngredients: ["Whey Isolate", "Whey Concentrate", "Whey Peptides", "5.5g BCAAs"],
    reviewSlug: "optimum-nutrition-gold-standard-whey",
    image: "/products/on-gold-standard-whey.webp",
  },
  {
    slug: "on-gold-standard-casein",
    name: "Gold Standard 100% Casein",
    category: "Casein Protein",
    price: "$35–45",
    priceNote: "4 lb · ~$1.40–1.60/serving",
    description: "Micellar casein as primary source — slow-digesting protein ideal before sleep. 24g protein per serving, 5g BCAAs. Thicker consistency by design; mixes well in 8–10oz cold water.",
    keyIngredients: ["Micellar Casein", "24g Protein", "5g BCAAs", "Calcium 60%DV"],
    reviewSlug: null,
    image: "/products/on-gold-standard-casein.webp",
  },
  {
    slug: "on-gold-standard-isolate",
    name: "Gold Standard 100% Isolate",
    category: "Whey Isolate",
    price: "$55–65",
    priceNote: "5 lb · ~$1.40–1.60/serving",
    description: "Primarily WPI — higher protein density than standard Gold Standard Whey. Lower fat and lactose. Suited for those with lactose sensitivity or cutting phases. Fewer flavour options than core Whey.",
    keyIngredients: ["Whey Protein Isolate", "25g Protein", "<1g Fat", "<1g Carbs"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "on-gold-standard-pre-workout",
    name: "Gold Standard Pre-Workout",
    category: "Pre-Workout",
    price: "$30–40",
    priceNote: "30 servings",
    description: "175mg caffeine (anhydrous) + creatine monohydrate 3g + beta-alanine 1.5g + citrulline malate. Conservative doses versus clinical standards on creatine and citrulline — a moderate-stimulant formula rather than a maximum-dose pre.",
    keyIngredients: ["Caffeine 175mg", "Creatine Mono 3g", "Beta-Alanine 1.5g", "Citrulline Malate"],
    reviewSlug: null,
    image: "/products/on-pre-workout.webp",
  },
  {
    slug: "on-gold-standard-bcaa",
    name: "Gold Standard BCAA",
    category: "Amino Acids",
    price: "$25–35",
    priceNote: "28 servings · electrolyte formula",
    description: "2:1:1 BCAA ratio — leucine 5g, isoleucine 2.5g, valine 2.5g per serving — plus electrolytes (sodium, potassium, magnesium). Flavoured powder. Leucine dose meets MPS threshold for intra-workout use.",
    keyIngredients: ["Leucine 5g", "Isoleucine 2.5g", "Valine 2.5g", "Electrolytes"],
    reviewSlug: null,
    image: "/products/on-bcaa.webp",
  },
  {
    slug: "on-serious-mass",
    name: "Serious Mass",
    category: "Mass Gainer",
    price: "$65–80",
    priceNote: "12 lb · ~$3.50–4.00/serving",
    description: "1,250 kcal per two-scoop serving. Protein blend (WPC, casein, egg albumen) + maltodextrin as primary carbohydrate source. 50g protein, 252g carbohydrates. High sugar content — a meal-replacement mass gainer, not a clean bulker.",
    keyIngredients: ["50g Protein Blend", "252g Carbs", "Maltodextrin", "25 Vitamins & Minerals"],
    reviewSlug: null,
    image: "/products/on-serious-mass.jpg",
  },
  {
    slug: "on-micronized-creatine",
    name: "Micronized Creatine Monohydrate",
    category: "Creatine",
    price: "$20–30",
    priceNote: "400g · 80 servings",
    description: "Unflavoured micronized creatine monohydrate — 5g per serving. Single ingredient. No proprietary blend. Dissolves readily in water. One of the most competitively priced creatine mono options across ON's portfolio.",
    keyIngredients: ["Creatine Monohydrate 5g"],
    reviewSlug: null,
    image: "/products/on-micronized-creatine-monohydrate-powder.webp",
  },
  {
    slug: "on-essential-amino-energy",
    name: "Essential Amin.O. Energy",
    category: "Amino Acids + Energy",
    price: "$25–35",
    priceNote: "65 servings · 9.5 oz",
    description: "5g essential amino acid blend (proprietary — individual doses undisclosed) plus 100mg caffeine from green tea and green coffee. Low-calorie. Dose flexibility — 1–3 scoops. Caffeine source is natural but blend transparency is limited.",
    keyIngredients: ["EAA Blend 5g (prop.)", "Caffeine 100mg", "Green Tea Extract", "Green Coffee"],
    reviewSlug: null,
    image: "/products/on-essential-amino-energy.webp",
  },
  {
    slug: "on-opti-men",
    name: "Opti-Men / Opti-Women",
    category: "Multivitamin",
    price: "$25–35",
    priceNote: "150 tablets · 50 servings",
    description: "Sports-focused multivitamin with 75+ ingredients. Opti-Men includes amino acids and botanical blends alongside standard vitamins and minerals. Opti-Women is iron-inclusive. Both products include several ingredients at doses below clinically relevant thresholds.",
    keyIngredients: ["75+ Nutrients", "B-Complex", "Zinc 15mg", "Amino Acid Blend"],
    reviewSlug: null,
    image: "/products/on-men-multivitamin.webp",
  },
];

const publishedReviews = [
  {
    slug: "optimum-nutrition-gold-standard-whey",
    title: "ON Gold Standard 100% Whey",
    brand: "Optimum Nutrition",
    category: "Whey Protein",
    rating: 9 as ReviewRating,
    verdict: "The category benchmark. Informed Sport certified, full amino acid disclosure, 81.6% protein density. Premium price is the only real trade-off.",
    publishedAt: "2026-05-26",
    figNumber: "45",
  },
];

const faqs = [
  {
    q: "Is Optimum Nutrition a trustworthy brand?",
    a: "ON is one of the most independently verified brands in sports nutrition. Gold Standard 100% Whey has carried Informed Sport certification since 2012 — meaning each production lot is tested by an accredited lab for 200+ WADA-prohibited substances before release. The manufacturing facilities are NSF-GMP certified. In almost four decades of commercial operation, ON has not received any FDA warning letters or issued product recalls.",
  },
  {
    q: "Who manufactures Optimum Nutrition products?",
    a: "ON operates its own manufacturing facilities in the United States. The brand was acquired by Glanbia PLC in 2008 and operates under Glanbia Performance Nutrition (GPN) alongside brands like BSN, Isopure, and ThinkThin. Manufacturing remains US-based at their Aurora, Colorado and Downers Grove, Illinois facilities.",
  },
  {
    q: "How does ON Gold Standard Whey compare to Dymatize ISO100?",
    a: "ISO100 is a whey hydrolysate + isolate formula scoring slightly higher on protein density (~25g per 29g scoop vs ON's 24g per 29.4g). ISO100 is better for lactose sensitivity and slightly faster-absorbing. ON Gold Standard uses WPC as the primary source — it's less processed, slightly lower in protein density, but fully Informed Sport certified and more widely available. ISO100 carries Informed Choice certification. Both are Gold Tier products; the choice depends on budget and lactose tolerance.",
  },
  {
    q: "Is Optimum Nutrition good for beginners?",
    a: "Gold Standard 100% Whey is one of the most beginner-appropriate protein supplements available. The label is clear, dosing is straightforward (1 scoop = 24g protein), flavours are consistent and widely liked, and the brand is sold in thousands of retail locations globally. The price-per-serving runs about $1.15–1.25, which is above average — if budget is the primary concern, AS-IT-IS or MyProtein Impact Whey offer lower cost per gram at some sacrifice of third-party testing.",
  },
  {
    q: "Does ON Serious Mass actually help you gain weight?",
    a: "In a caloric surplus, yes — Serious Mass provides 1,250kcal per two-scoop serving, which makes hitting a calorie surplus straightforward for hardgainers. The protein quality is adequate (50g blend of WPC, casein, egg albumen). The downside: the primary carbohydrate source is maltodextrin — a high-glycaemic, low-micronutrient starch. For clean bulking, whole-food carbohydrates with a standard protein supplement are a better approach. Serious Mass is most useful for those who genuinely struggle to eat enough.",
  },
  {
    q: "Where is the best place to buy ON products at lowest price?",
    a: "In the US: Amazon (official ON storefront), GNC, and Vitamin Shoppe consistently offer competitive pricing. The 5 lb and 10 lb tub sizes offer meaningfully better cost-per-serving than 2 lb sizes. Subscribe-and-save on Amazon can reduce price by ~10–15%. Always buy from the official ON storefront or authorised retailers — counterfeit ON products have been documented, particularly on third-party marketplace listings.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",       labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",   labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial",         labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function OptimumNutritionBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .on-mobile-toc { display: none; }
        @media (max-width: 767px) { .on-mobile-toc { display: block; } }
        .on-mobile-toc summary { list-style: none; }
        .on-mobile-toc summary::-webkit-details-marker { display: none; }

        .on-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .on-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .on-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .on-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .on-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .on-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .on-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .on-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .on-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .on-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .on-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .on-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .on-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .on-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .on-verdict-grid { grid-template-columns: 1fr; } }

        .on-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .on-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .on-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .on-product-grid { grid-template-columns: 1fr; } }

        .on-faq-item summary { list-style: none; cursor: pointer; }
        .on-faq-item summary::-webkit-details-marker { display: none; }
        .on-faq-item[open] summary { color: #1A1714; }

        .on-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .on-stance-card { padding: 24px 20px; } }

        .on-section-anchor { scroll-margin-top: 72px; }

        .on-product-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #F0EAD8;
          overflow: hidden;
          flex-shrink: 0;
        }
        .on-product-img-wrap img {
          object-fit: contain !important;
          object-position: center !important;
          padding: 12px;
        }
        .on-product-img-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #0C1933 0%, #0A1228 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Optimum Nutrition</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #0C1933 0%, #162545 40%, #0A1228 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          {/* Grid texture */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(100,160,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          {/* Ghost letter */}
          <span style={{ position: "absolute", right: -10, bottom: -30, fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(6rem, 20vw, 16rem)", fontWeight: 800, color: "rgba(100,160,255,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>ON</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(100,160,255,0.4)", textTransform: "uppercase" }}>BRD-001</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(100,160,255,0.15)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,169,106,0.2)", border: "1px solid rgba(212,169,106,0.4)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,169,106,0.9)", textTransform: "uppercase", fontWeight: 700 }}>Gold Tier</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              Optimum Nutrition
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.55)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              The industry&apos;s reference-standard protein brand. Founded 1986, Informed Sport certified, NSF-GMP manufacturing. Every major product category covered.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Whey Protein", "Casein", "Creatine", "Pre-Workout", "Mass Gainers", "Amino Acids", "Multivitamins"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(100,160,255,0.15)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.45)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="on-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ padding: "18px 20px", borderRight: i < stats.length - 1 ? "1px solid #D4C9B8" : "none" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", lineHeight: 1, margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Mobile TOC */}
          <details className="on-mobile-toc" style={{ marginBottom: 8, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
            <summary style={{ padding: "13px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5C5650" }}>On this page</span>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 16, color: "#A89880", lineHeight: 1 }}>+</span>
            </summary>
            <ul style={{ margin: 0, padding: "6px 0", listStyle: "none", borderTop: "1px solid #D4C9B8" }}>
              {[
                { id: "overview", label: "Brand overview" },
                { id: "verdict",  label: "Quick verdict" },
                { id: "certs",    label: "Certifications & testing" },
                { id: "products", label: "Product lineup" },
                { id: "reviews",  label: "Reviewed products" },
                { id: "faq",      label: "FAQ" },
                { id: "stance",   label: "Editorial stance" },
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", fontSize: 13, color: "#5C5650", textDecoration: "none" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.1em", flexShrink: 0 }}>§</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          {/* ── § 01 Brand Overview ────────────────────────────────────────── */}
          <section id="overview" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="on-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Optimum Nutrition was founded in 1986 by brothers Michael and Tony Costello in Aurora, Illinois. The company built its early reputation on contract manufacturing before pivoting to branded products in the early 1990s. Gold Standard 100% Whey launched in 1996 and has remained the best-selling protein supplement in the United States every year since.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Glanbia PLC, the Irish dairy and nutrition conglomerate, acquired ON in 2008 for approximately $316 million. The acquisition gave Glanbia immediate access to the US sports nutrition retail channel and ON&apos;s manufacturing infrastructure. ON continues to operate as a standalone brand under the Glanbia Performance Nutrition (GPN) umbrella, which also includes BSN, Isopure, and ThinkThin.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The brand&apos;s operational advantage is its supply chain. Glanbia is one of the world&apos;s largest whey protein processors — ON sources directly from parent-company facilities, giving it cost and consistency advantages that are difficult for independent brands to replicate. This vertical integration is a primary reason Gold Standard Whey&apos;s amino acid profile and protein yield have remained consistent across two decades of independent testing.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Product hero image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "linear-gradient(135deg, #0C1933 0%, #162545 100%)", borderRadius: 10, overflow: "hidden", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src="/products/on-gold-standard-whey.webp"
                    alt="Optimum Nutrition Gold Standard Whey"
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                    unoptimized
                  />
                </div>

                {/* Key facts */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Headquarters",     value: "Downers Grove, IL, USA" },
                    { label: "Founded",          value: "1986 (Aurora, Illinois)" },
                    { label: "Founders",         value: "Michael & Tony Costello" },
                    { label: "Parent company",   value: "Glanbia Performance Nutrition (acq. 2008)" },
                    { label: "Manufacturing",    value: "USA (Aurora, CO + Downers Grove, IL)" },
                    { label: "Certification",    value: "Informed Sport, NSF-GMP" },
                    { label: "Flagship product", value: "Gold Standard 100% Whey (since 1996)" },
                    { label: "Flagship claim",   value: "#1 Whey Protein for 20+ consecutive years" },
                  ].map((item) => (
                    <div key={item.label} className="on-fact-row">
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="on-verdict-grid">
              <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1A6B3A", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A6B3A", margin: 0 }}>What works</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {greenFlags.map((flag) => (
                    <li key={flag} style={{ fontSize: 13, color: "#3C3530", lineHeight: 1.6, paddingLeft: 14, borderLeft: "2px solid rgba(26,107,58,0.3)" }}>{flag}</li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#9B2020", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B2020", margin: 0 }}>Watch out for</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {redFlags.map((flag) => (
                    <li key={flag} style={{ fontSize: 13, color: "#3C3530", lineHeight: 1.6, paddingLeft: 14, borderLeft: "2px solid rgba(155,32,32,0.25)" }}>{flag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── § 03 Certifications ────────────────────────────────────────── */}
          <section id="certs" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="on-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.06em", color: "#3C3530", margin: 0, fontWeight: 500 }}>{cert.name}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: s.dot, flexShrink: 0 }} />
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.07em", color: s.labelColor, margin: 0 }}>{s.label}</p>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{cert.detail}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: "16px 20px", backgroundColor: "rgba(26,107,58,0.06)", border: "1px solid rgba(26,107,58,0.2)", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#1A6B3A", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Note</span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                Informed Sport certification — the standard ON Gold Standard Whey carries — requires independent pre-release batch testing for every production lot, not just periodic audits. The test certificates are tied to specific batch numbers and verifiable via the QR code on-pack. This is a higher bar than NSF Certified for Sport (which tests the formula once) or self-reported batch testing (no independent verification). Not all ON products carry this level of certification — the Informed Sport mark applies specifically to products listed on the Informed Sport registry.
              </p>
            </div>
          </section>

          {/* ── § 04 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 04" title="Full" titleItalic="product lineup" size="sm" />
            <div className="on-product-grid">
              {products.map((product) => (
                <div key={product.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>

                  {product.image ? (
                    <div className="on-product-img-wrap">
                      <Image
                        src={product.image}
                        alt={`Optimum Nutrition ${product.name} supplement`}
                        fill
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="on-product-img-placeholder">
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(100,160,255,0.05)", letterSpacing: "-0.05em" }}>
                        {product.name[0]}
                      </span>
                      <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(100,160,255,0.08)", border: "1px solid rgba(100,160,255,0.15)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(100,160,255,0.4)" }}>
                        {product.category}
                      </span>
                      <span style={{ position: "absolute", bottom: 7, left: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(100,160,255,0.25)" }}>
                        Image coming
                      </span>
                    </div>
                  )}

                  {/* Rust accent line */}
                  <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)", flexShrink: 0 }} />

                  {/* Card body */}
                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>
                        {product.name}
                      </h3>
                      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 8 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", margin: 0 }}>{product.price}</p>
                        <p style={{ fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{product.priceNote}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 12.5, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{product.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {product.keyIngredients.map((ing) => (
                        <span key={ing} style={{ padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
                          {ing}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px solid #EDE8DF" }}>
                      {product.reviewSlug ? (
                        <Link href={`/reviews/${product.reviewSlug}`} style={{ fontSize: 12, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Read full review →</Link>
                      ) : (
                        <span style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>Review in progress</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── § 05 Published Reviews ─────────────────────────────────────── */}
          <section id="reviews" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 05" title="Reviewed" titleItalic="products" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {publishedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
              More ON product reviews publishing shortly — Gold Standard Casein and Micronized Creatine next.
            </p>
          </section>

          {/* ── § 06 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="on-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
              {faqs.map((faq, i) => (
                <details key={i} className="on-faq-item" style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <summary style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 16, color: "#A89880", flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 20px 16px", borderTop: "1px solid #EDE8DF" }}>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: "14px 0 0" }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── § 07 Editorial Stance ──────────────────────────────────────── */}
          <section id="stance" className="on-section-anchor" style={{ marginBottom: 56 }}>
            <div className="on-stance-card" style={{ backgroundColor: "#0C1933", borderRadius: 12, maxWidth: 840, border: "1px solid rgba(100,160,255,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3C5070" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#1A2840", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,169,106,0.15)", border: "1px solid rgba(212,169,106,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,169,106,0.8)", textTransform: "uppercase", fontWeight: 700 }}>Gold Tier · BRD-001</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                Optimum Nutrition is the benchmark against which everything else in sports protein is measured. That status is not marketing — it is the consequence of being independently tested, consistently accurate on label claims, and available at scale across 90 countries for nearly four decades. The Informed Sport certification on Gold Standard Whey is among the most rigorous third-party verification available in the supplement industry.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                Gold tier reflects the consistency of the core range: Gold Standard Whey earns it outright. Not every product in the portfolio operates at that standard — Essential Amin.O. Energy uses a proprietary EAA blend with undisclosed doses, Serious Mass relies on maltodextrin as the primary calorie source, and some pre-workout doses fall short of clinical thresholds. These are not disqualifying flaws, but they mean ON&apos;s Gold rating is earned by its flagship protein line, not uniformly across the full portfolio.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, margin: 0 }}>
                If you are starting out with protein supplements and want a verified, consistent product with a long track record, Gold Standard 100% Whey is the correct default recommendation — not because it is the cheapest or the highest in protein density, but because no other product at its price point combines independent batch testing with this level of documented consistency. That is worth something.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
