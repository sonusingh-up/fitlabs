import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import MyProteinMobileTOC from "@/components/ui/MyProteinMobileTOC";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "MyProtein Brand Review (2026): Silver Tier",
  description:
    "MyProtein brand profile: founded 2004, UK-based, Informed Sport certified on core SKUs. Best price-per-gram in the market. Full product lineup and our 7.8/10 avg score across 9 products.",
  alternates: { canonical: "/brands/myprotein" },
};

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/myprotein#org",
  name: "Myprotein",
  url: "https://fitlabreviews.com/brands/myprotein",
  foundingDate: "2004",
  parentOrganization: { "@type": "Organization", name: "THG (The Hut Group)" },
  description:
    "Myprotein is a UK-based sports nutrition brand founded in 2004 and acquired by THG (The Hut Group) in 2011. It is the world's largest online sports nutrition brand by revenue, known for value-for-money protein and supplement essentials sold across 70+ countries.",
  sameAs: ["https://www.myprotein.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands",  item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "Myprotein", item: "https://fitlabreviews.com/brands/myprotein" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",   value: "2004"    },
  { label: "Parent",    value: "THG"     },
  { label: "Products",  value: "200+"    },
  { label: "Countries", value: "70+"     },
  { label: "Avg Score", value: "7.8/10"  },
  { label: "3P Tested", value: "Partial" },
];

const certifications = [
  {
    name: "Informed Sport (select SKUs)",
    status: "partial" as const,
    detail: "Impact Whey Protein, THE Creatine, and a subset of core SKUs carry Informed Sport certification — independently tested for 200+ WADA prohibited substances per batch. Does not cover the full 200+ product catalogue.",
  },
  {
    name: "NSF-GMP Certified Facility",
    status: "fail" as const,
    detail: "No NSF-GMP facility certification confirmed for MyProtein manufacturing sites as of May 2026.",
  },
  {
    name: "USP Verified",
    status: "fail" as const,
    detail: "No USP Dietary Supplement Verification found across the MyProtein range.",
  },
  {
    name: "BSCG Certified Drug Free",
    status: "fail" as const,
    detail: "No BSCG certification across the MyProtein range.",
  },
  {
    name: "Third-Party Batch Testing",
    status: "partial" as const,
    detail: "Informed Sport batch testing applies to certified SKUs only. Non-certified products (flavoured variants, bars, vitamins) rely on internal quality controls without independent publication.",
  },
  {
    name: "Regulatory Record (UK/MHRA)",
    status: "pass" as const,
    detail: "No significant UK MHRA enforcement actions or product recalls on record. THG's broader business has faced scrutiny over corporate governance, but no food safety actions specific to MyProtein products.",
  },
];

const greenFlags = [
  "Best price-per-gram of protein in the mass-market category — typically 30–40% cheaper than ON per gram",
  "Informed Sport certified on Impact Whey Protein and THE Creatine — independent banned-substance testing",
  "Largest flavour range in the category: 90+ flavours on Impact Whey alone, with consistent execution",
  "THE Creatine is pure micronized creatine monohydrate — single ingredient, no fillers, correct 5g dose",
  "Clear Whey Isolate is a genuinely differentiated product with clean WPI90 and good amino acid disclosure",
  "Long operating history (20 years) with no major food safety incidents",
];

const redFlags = [
  "Informed Sport badge covers select SKUs only — the full 200+ product range is not independently certified",
  "Some flavoured variants swap the protein source or add maltodextrin without matching the unflavoured spec",
  "THG (parent) has had significant corporate governance scrutiny — supply chain transparency is limited",
  "\"Pro Range\" premium pricing is difficult to justify when the standard Impact line covers the same fundamentals at lower cost",
  "Artificial sweetener load in heavily flavoured products is higher than many competing brands at equivalent price",
];

const products = [
  {
    slug: "mp-impact-whey",
    name: "Impact Whey Protein",
    category: "Whey Protein",
    price: "$18–38",
    priceNote: "1–5.5 lb · ~$0.65–0.90/serving",
    description: "The flagship. WPC80 primary source, 21g protein per 25g scoop — 84% protein density. Informed Sport certified. 90+ flavour options. Lowest cost-per-gram in the mass market. Minor point: protein density drops slightly in flavoured vs unflavoured versions.",
    keyIngredients: ["Whey Protein Concentrate 80", "21g Protein", "4.5g BCAAs", "Informed Sport ✓"],
    reviewSlug: null,
    image: "/products/myprotein-impact-whey.webp",
  },
  {
    slug: "mp-impact-whey-isolate",
    name: "Impact Whey Isolate",
    category: "Whey Isolate",
    price: "$28–52",
    priceNote: "1–5.5 lb · ~$1.10–1.30/serving",
    description: "WPI90 primary source, 23g protein per 25g scoop — 92% protein density. Lower fat and lactose than standard Impact Whey. Informed Sport certified. Step up in cost, but justified by isolate-grade purity.",
    keyIngredients: ["Whey Protein Isolate 90", "23g Protein", "<0.1g Fat", "Informed Sport ✓"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mp-clear-whey-isolate",
    name: "Clear Whey Isolate",
    category: "Whey Isolate",
    price: "$35–55",
    priceNote: "20 servings · fruit-drink texture",
    description: "WPI90-based protein in a clear, fruit-drink format — not a milky shake. 20g protein per serving. Acid-hydrolysed to remove the milky texture. Popular with users who dislike thick shakes. Higher price per gram than Impact Whey Isolate.",
    keyIngredients: ["Whey Protein Isolate 90", "20g Protein", "Acid-Hydrolysed", "Fruit Flavours"],
    reviewSlug: null,
    image: "/products/Clear-Whey-Isolate.jpg",
  },
  {
    slug: "mp-the-creatine",
    name: "THE Creatine (Micronized)",
    category: "Creatine",
    price: "$16–28",
    priceNote: "250–500g · 50–100 servings",
    description: "Pure micronized creatine monohydrate — single ingredient, 5g per serving. Unflavoured. Informed Sport certified. One of the best-value creatine monohydrate options on the market — matches quality of more expensive competitors at a fraction of the price.",
    keyIngredients: ["Creatine Monohydrate 5g", "Micronized", "Informed Sport ✓"],
    reviewSlug: "myprotein-creatine-monohydrate",
    image: null,
  },
  {
    slug: "mp-the-pre-workout",
    name: "THE Pre-Workout",
    category: "Pre-Workout",
    price: "$25–35",
    priceNote: "30 servings",
    description: "200mg caffeine + beta-alanine 3.2g + citrulline malate 4g + creatine monohydrate 3g. Stronger caffeine dose than Gold Standard Pre-Workout; citrulline and creatine are below clinical maximums but in a useful range. Also available in a caffeine-free version.",
    keyIngredients: ["Caffeine 200mg", "Beta-Alanine 3.2g", "Citrulline Malate 4g", "Creatine 3g"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mp-essential-bcaa",
    name: "BCAA 4:1:1",
    category: "Amino Acids",
    price: "$18–28",
    priceNote: "270–540g · 30–60 servings",
    description: "Leucine-heavy 4:1:1 ratio — leucine 4g, isoleucine 1g, valine 1g per 6g serving. Informed Sport certified on select batches. Full dose disclosure. Flavoured options available. The 4:1:1 ratio has weaker independent support than standard 2:1:1.",
    keyIngredients: ["Leucine 4g", "Isoleucine 1g", "Valine 1g", "Full disclosure"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mp-alpha-men",
    name: "Alpha Men Multivitamin",
    category: "Multivitamin",
    price: "$18–25",
    priceNote: "240 tablets · 60 servings",
    description: "Sports-focused men's multivitamin. 23 micronutrients plus zinc, magnesium, and B-complex at reasonable doses. Some nutrients at lower-than-optimal amounts (e.g., vitamin D 200IU vs recommended 1000–2000IU). Budget-accessible entry to micronutrient coverage.",
    keyIngredients: ["Vitamin D 200IU", "Zinc 10mg", "B-Complex", "Magnesium 56mg"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mp-layered-bar",
    name: "Layered Protein Bar",
    category: "Protein Bars",
    price: "$3.50–4.00",
    priceNote: "per bar · 12 pack available",
    description: "Multi-layered bar with 25g protein per 80g bar. Protein blend (WPC, whey crisps) with caramel, chocolate, and nut layers. Popular flavour execution. Sugar content at 8–12g per bar is moderate. A strong option for on-the-go protein without the chalky texture of many competing bars.",
    keyIngredients: ["25g Protein Blend", "WPC + Whey Crisps", "8–12g Sugar", "High-Calorie"],
    reviewSlug: null,
    image: null,
  },
];

const publishedReviews = [
  {
    slug: "myprotein-creatine-monohydrate",
    title: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    category: "Creatine",
    rating: 8 as ReviewRating,
    verdict: "Pure micronized mono at the lowest price in its class. Informed Sport certified. The one missing piece is dose flexibility for loading phases.",
    publishedAt: "2026-05-20",
    figNumber: "38",
  },
];

const faqs = [
  {
    q: "Is MyProtein good quality?",
    a: "For the core range — Impact Whey Protein, Impact Whey Isolate, and THE Creatine — yes. These products carry Informed Sport certification, meaning each batch is independently tested before release. The protein density on Impact Whey (21g per 25g scoop) is accurate and consistent with independent testing. The quality caveat applies to the broader catalogue: MyProtein makes 200+ products, and Informed Sport certification does not extend to all of them. Non-certified SKUs have fewer independent checks.",
  },
  {
    q: "Is MyProtein Impact Whey Protein Informed Sport certified?",
    a: "Yes — Impact Whey Protein carries Informed Sport certification, and certification covers batch-level testing for 200+ WADA prohibited substances. The certification is listed on the Informed Sport registry, verifiable by product and batch number. Note that this certification applies to specific SKUs as registered — if you are purchasing for competitive sport purposes, confirm the exact product variant you are buying is on the current registry.",
  },
  {
    q: "How does MyProtein compare to Optimum Nutrition?",
    a: "Price per gram is the key difference: MyProtein Impact Whey typically costs 30–40% less per gram of protein than ON Gold Standard Whey. For protein quality, ON Gold Standard uses a WPC80 + WPI stack with full 18-amino acid disclosure and has a longer independent testing track record (Informed Sport since 2012). Both carry Informed Sport certification on their flagship whey products. If budget is the primary constraint, MyProtein wins clearly. If you want the highest-confidence verified product with the longest testing history, ON has the edge.",
  },
  {
    q: "Is MyProtein available in India?",
    a: "Yes — MyProtein ships to India via its dedicated India website (in.myprotein.com) and operates fulfilment through local logistics partners. INR pricing is available. Import duties mean the price advantage over local brands like MuscleBlaze or AS-IT-IS narrows significantly, and delivery times can vary. For customers in India who prioritise price-per-gram with third-party certification, AS-IT-IS remains a stronger local option for creatine and basic whey.",
  },
  {
    q: "Is Clear Whey Isolate worth the extra cost?",
    a: "If you genuinely prefer a clear, fruit-drink style protein over a milky shake, yes — Clear Whey Isolate is a well-executed product with WPI90 as the protein source and clean amino acid delivery. The 20g per serving is slightly lower than standard Impact Whey Isolate (23g), and the price per gram of protein is higher. It is not a better product nutritionally — it is a different texture experience. The premium is for format preference, not formula quality.",
  },
  {
    q: "What is the best MyProtein product to start with?",
    a: "Impact Whey Protein (unflavoured or one of the core flavours like Chocolate Brownie or Vanilla) is the right starting point. It is Informed Sport certified, correctly dosed, and the cheapest per gram in the category. THE Creatine is the second-best entry — single ingredient, Informed Sport certified, and priced lower than almost every competing brand. Both products together give you the most evidence-backed supplement stack at minimum cost.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",       labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",   labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial",         labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function MyProteinBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .mp-mobile-toc { display: none; }
        @media (max-width: 767px) { .mp-mobile-toc { display: block; } }

        .mp-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .mp-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .mp-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .mp-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .mp-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .mp-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .mp-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .mp-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .mp-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .mp-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .mp-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .mp-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .mp-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .mp-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .mp-verdict-grid { grid-template-columns: 1fr; } }

        .mp-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .mp-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .mp-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .mp-product-grid { grid-template-columns: 1fr; } }

        .mp-faq-item summary { list-style: none; cursor: pointer; }
        .mp-faq-item summary::-webkit-details-marker { display: none; }
        .mp-faq-item[open] summary { color: #1A1714; }

        .mp-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .mp-stance-card { padding: 24px 20px; } }

        .mp-section-anchor { scroll-margin-top: 72px; }

        .mp-product-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #F0EAD8;
          overflow: hidden;
          flex-shrink: 0;
        }
        .mp-product-img-wrap img {
          object-fit: contain !important;
          object-position: center !important;
          padding: 12px;
        }
        .mp-product-img-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Myprotein</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #1A1A2E 0%, #0F3460 50%, #16213E 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          {/* Ghost letter */}
          <span style={{ position: "absolute", right: -10, bottom: -30, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(6rem, 20vw, 16rem)", fontWeight: 800, color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>MP</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>BRD-002</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(255,255,255,0.1)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,201,184,0.15)", border: "1px solid rgba(212,201,184,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,201,184,0.8)", textTransform: "uppercase" }}>Silver Tier</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              Myprotein
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.55)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              The world&apos;s largest online sports nutrition brand. Unmatched price-per-gram on essentials. Informed Sport certified on core SKUs — not the full catalogue.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Whey Protein", "Creatine", "BCAA", "Pre-Workout", "Vitamins", "Protein Bars", "Whey Isolate"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.4)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="mp-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ padding: "18px 20px", borderRight: i < stats.length - 1 ? "1px solid #D4C9B8" : "none" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 5 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", lineHeight: 1, margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Mobile TOC */}
          <div className="mp-mobile-toc" style={{ marginBottom: 8 }}>
            <MyProteinMobileTOC />
          </div>

          {/* ── § 01 Brand Overview ────────────────────────────────────────── */}
          <section id="overview" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="mp-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Myprotein was founded in 2004 by Oliver Cookson from his bedroom in Manchester, England, with £500 in savings. The business model was direct-to-consumer from day one — sell protein powder online at the lowest possible price by cutting out distributors and retail markups. The approach worked. Within seven years, the brand had grown to £100 million in annual revenue.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  THG (The Hut Group), the Manchester-based e-commerce conglomerate, acquired Myprotein in 2011 for £58 million — one of the most successful exits in UK direct-to-consumer history. Under THG, the brand expanded into 70+ countries, launched a sub-brand architecture (Myvitamins, Myvegan, THE Protein Works), and grew to become the world&apos;s largest online sports nutrition retailer by revenue. THG listed on the London Stock Exchange in 2020 and has since faced significant investor scrutiny over governance and valuation, though operational performance for Myprotein has remained strong.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The brand&apos;s model remains unchanged: high-volume, low-margin essentials at the best available price, distributed via its own websites with regular discount events. Impact Whey Protein retails at 50–65% of the price of equivalent certified products from ON or Dymatize during promotional periods — a price position no competitor has been able to displace at certified quality.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Feature image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "linear-gradient(135deg, #1A1A2E 0%, #0F3460 100%)", borderRadius: 10, overflow: "hidden", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src="/products/myprotein-impact-whey.webp"
                    alt="Myprotein Impact Whey Protein"
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                    unoptimized
                  />
                </div>

                {/* Key facts */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Headquarters",    value: "Manchester, UK" },
                    { label: "Founded",         value: "2004" },
                    { label: "Founder",         value: "Oliver Cookson" },
                    { label: "Parent company",  value: "THG (The Hut Group), acquired 2011" },
                    { label: "Manufacturing",   value: "UK (Manchester area)" },
                    { label: "Certification",   value: "Informed Sport (select SKUs)" },
                    { label: "Flagship product", value: "Impact Whey Protein (90+ flavours)" },
                    { label: "Global reach",    value: "70+ countries, largest online sports nutrition brand" },
                  ].map((item) => (
                    <div key={item.label} className="mp-fact-row">
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="mp-verdict-grid">
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
          <section id="certs" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="mp-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
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
            <div style={{ padding: "16px 20px", backgroundColor: "rgba(146,98,10,0.06)", border: "1px solid rgba(146,98,10,0.2)", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#92620A", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Note</span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                The Informed Sport mark on Impact Whey Protein and THE Creatine is genuine and meaningful — each batch is independently tested before release. The important distinction: this badge does not follow the brand name onto every product. When buying Myprotein products outside the certified core range (flavoured variants, bars, vitamins, pre-workout), you are relying on internal quality controls without independent publication. Always verify the specific product and flavour variant is listed on the current Informed Sport registry before purchasing for sport competition use.
              </p>
            </div>
          </section>

          {/* ── § 04 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 04" title="Key" titleItalic="product lineup" size="sm" />
            <div className="mp-product-grid">
              {products.map((product) => (
                <div key={product.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>

                  {product.image ? (
                    <div className="mp-product-img-wrap">
                      <Image
                        src={product.image}
                        alt={`Myprotein ${product.name} supplement`}
                        fill
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="mp-product-img-placeholder">
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(255,255,255,0.04)", letterSpacing: "-0.05em" }}>
                        {product.name[0]}
                      </span>
                      <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)" }}>
                        {product.category}
                      </span>
                      <span style={{ position: "absolute", bottom: 7, left: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                        Image coming
                      </span>
                    </div>
                  )}

                  <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)", flexShrink: 0 }} />

                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>
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
          <section id="reviews" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 05" title="Reviewed" titleItalic="products" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {publishedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
              Impact Whey Protein review publishing next — full formula breakdown, amino profile, and lab data.
            </p>
          </section>

          {/* ── § 06 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="mp-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
              {faqs.map((faq, i) => (
                <details key={i} className="mp-faq-item" style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <summary style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", lineHeight: 1.4 }}>{faq.q}</span>
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
          <section id="stance" className="mp-section-anchor" style={{ marginBottom: 56 }}>
            <div className="mp-stance-card" style={{ backgroundColor: "#1A1A2E", borderRadius: 12, maxWidth: 840, border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3C3C5A" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#2A2A40", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,201,184,0.1)", border: "1px solid rgba(212,201,184,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,201,184,0.5)", textTransform: "uppercase" }}>Silver Tier · BRD-002</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                Myprotein earns Silver tier on the strength of two things: price and the Informed Sport certification on its core products. Impact Whey Protein and THE Creatine deliver independently verified quality at a price point that no certified competitor has matched. For anyone building a baseline supplement stack on a budget, these two products are the correct defaults.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                The honest limitation is scope. The Informed Sport badge covers a subset of the catalogue — the full 200+ product range is not independently certified. Some flavoured variants, bars, and vitamins operate on internal quality controls without independent publication. The THG parent company&apos;s governance record adds supply chain uncertainty that a brand like ON, with NSF-GMP certified facilities and a longer testing track record, does not carry.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, margin: 0 }}>
                Silver tier is not a consolation. For most people, buying certified Impact Whey and THE Creatine from Myprotein is the highest-value decision in the category. The gap to Gold tier reflects the selective certification scope — if Myprotein extended Informed Sport coverage across its core range, the assessment changes.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
