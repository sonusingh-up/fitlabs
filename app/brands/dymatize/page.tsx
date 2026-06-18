import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Dymatize Brand Review (2026): Gold Tier, Dual-Certified",
  description:
    "Dymatize brand profile: founded 1994, ISO100 carries both Informed Choice and NSF Certified for Sport — dual certification held by fewer than 5% of protein products. 8.3/10 avg score.",
  alternates: { canonical: "/brands/dymatize" },
};

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/dymatize#org",
  name: "Dymatize",
  url: "https://fitlabreviews.com/brands/dymatize",
  foundingDate: "1994",
  parentOrganization: { "@type": "Organization", name: "Post Holdings" },
  description:
    "Dymatize is an American premium sports nutrition brand founded in 1994 and acquired by Post Holdings in 2014. Best known for ISO100 Hydrolyzed Whey Protein, which holds dual Informed Choice and NSF Certified for Sport certification.",
  sameAs: ["https://www.dymatize.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands",   item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "Dymatize", item: "https://fitlabreviews.com/brands/dymatize" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",    value: "1994"       },
  { label: "Parent",     value: "Post Holdings" },
  { label: "Products",   value: "15+"        },
  { label: "Specialty",  value: "Protein"    },
  { label: "Avg Score",  value: "8.3/10"     },
  { label: "3P Tested",  value: "Dual"       },
];

const certifications = [
  {
    name: "Informed Choice / Informed Sport",
    status: "pass" as const,
    detail: "ISO100 carries Informed Choice certification — each production lot independently tested for 200+ WADA prohibited substances before release. Certificate verifiable by batch number on the Informed Sport registry.",
  },
  {
    name: "NSF Certified for Sport",
    status: "pass" as const,
    detail: "ISO100 is NSF Certified for Sport — independently tested for prohibited substances and label-claim accuracy. NSF Sport certification involves formula-level and batch-level testing, adding a second independent verification layer.",
  },
  {
    name: "Dual Certification (ISO100)",
    status: "pass" as const,
    detail: "ISO100 is one of fewer than 5% of protein supplements globally to simultaneously hold both Informed Choice and NSF Certified for Sport. Each certification uses different laboratory protocols — dual status provides the highest level of independent verification available in the category.",
  },
  {
    name: "USP Verified",
    status: "fail" as const,
    detail: "No USP Dietary Supplement Verification found across the Dymatize range as of May 2026.",
  },
  {
    name: "BSCG Certified Drug Free",
    status: "fail" as const,
    detail: "No BSCG certification found across the Dymatize range.",
  },
  {
    name: "FDA Record",
    status: "pass" as const,
    detail: "No FDA warning letters, product recalls, or significant adverse event reports on file for Dymatize. Clean regulatory record since 1994.",
  },
];

const greenFlags = [
  "Dual Informed Choice + NSF Certified for Sport on ISO100 — fewer than 5% of protein products hold both simultaneously",
  "2.7g leucine per serving — above the 2.5g MPS threshold identified by Churchward-Venne et al. (2012)",
  "Full BCAA breakdown on label: leucine, isoleucine, and valine listed individually with gram weights",
  "Hydrolyzed whey isolate first ingredient — no WPC padding or protein matrix blending",
  "30-year track record with zero FDA warning letters or product recalls",
  "No proprietary protein blends — the entire protein source is identified and characterised on the label",
];

const redFlags = [
  "Premium pricing: ISO100 runs $2.09/serving — 50–65% above the whey isolate category average of $1.20–1.40",
  "Narrow product range: core expertise is protein, with fewer accessory products than ON or MyProtein",
  "'Natural and artificial flavors' on ISO100 is unspecified — standard practice but not fully transparent",
  "Creatine Monohydrate offering has no differentiating features versus cheaper single-ingredient alternatives",
  "Post Holdings acquisition (2014) shifted brand positioning upmarket — older community concerns about formula consistency post-acquisition are unverified but documented",
];

const products = [
  {
    slug: "dymatize-iso100-hydrolyzed",
    name: "ISO100 Hydrolyzed Whey Protein",
    category: "Whey Protein Isolate",
    price: "$55–95",
    priceNote: "1.6–3 lb · ~$2.09/serving",
    description: "The flagship. Hydrolyzed WPI as the sole protein source — 25g protein per 29g scoop. 2.7g leucine. 110 kcal, 0.5g fat, 2g carbs. Dual Informed Choice + NSF Certified for Sport. The gold standard for verified hydrolyzed isolate.",
    keyIngredients: ["Hydrolyzed WPI (sole source)", "25g Protein", "Leucine 2.7g", "Dual Certified"],
    reviewSlug: "dymatize-iso100-review-2026",
    image: "/products/dymatize-iso100.webp",
  },
  {
    slug: "dymatize-iso100-clear",
    name: "ISO100 Clear",
    category: "Whey Protein Isolate",
    price: "$55–75",
    priceNote: "1.3 lb · clear liquid profile",
    description: "Lighter texture than standard ISO100 — mixes to a clear, juice-like liquid rather than a milky shake. Same hydrolyzed WPI base, same protein content. For those who find conventional protein shake texture unpleasant post-workout or in warmer weather.",
    keyIngredients: ["Hydrolyzed WPI", "25g Protein", "Juice-like texture", "Low Lactose"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "dymatize-iso100-natural",
    name: "ISO100 Natural",
    category: "Whey Protein Isolate",
    price: "$60–90",
    priceNote: "1.6–3 lb · no artificial sweeteners",
    description: "Same hydrolyzed WPI formula as standard ISO100, sweetened with stevia instead of sucralose. No artificial colours or flavours. Slightly different taste profile — the stevia sweetness is noticeable. Carries the same dual certification.",
    keyIngredients: ["Hydrolyzed WPI", "25g Protein", "Stevia sweetened", "No Artificial Flavors"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "dymatize-elite-whey",
    name: "Elite 100% Whey Protein",
    category: "Whey Protein",
    price: "$35–60",
    priceNote: "2–5 lb · more accessible price",
    description: "WPC + WPI blend — more affordable entry point into the Dymatize range. 25g protein per serving, 5.5g BCAAs. Does not carry the ISO100's dual certification. Informed Choice status for Elite Whey should be verified on the Informed Sport registry before purchase.",
    keyIngredients: ["WPC + WPI Blend", "25g Protein", "5.5g BCAAs", "Digestive enzymes"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "dymatize-elite-casein",
    name: "Elite Casein",
    category: "Casein Protein",
    price: "$40–65",
    priceNote: "4 lb · slow-release",
    description: "Micellar casein as primary source — 25g protein per serving, designed for overnight use. 7–8 hour digestion window supports sustained amino acid availability during sleep. Thicker texture; best mixed with 10–12oz water or milk.",
    keyIngredients: ["Micellar Casein", "25g Protein", "7–8hr digestion", "Pre-sleep use"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "dymatize-creatine",
    name: "Micronized Creatine Monohydrate",
    category: "Creatine",
    price: "$20–35",
    priceNote: "300–500g · 60–100 servings",
    description: "Unflavoured micronized creatine monohydrate, 5g per serving. Single ingredient. No distinguishing features versus other single-ingredient creatine options on the market — the value case depends on bundling with ISO100 purchases or sale pricing.",
    keyIngredients: ["Creatine Monohydrate 5g", "Micronized", "Single Ingredient"],
    reviewSlug: null,
    image: "/products/dymatize-creatine.png",
  },
  {
    slug: "dymatize-pre-wo",
    name: "Pre W.O.",
    category: "Pre-Workout",
    price: "$35–50",
    priceNote: "30 servings",
    description: "200mg caffeine + citrulline 5g + beta-alanine 3.2g. Citrulline at 5g is below the 6–8g dose used in most performance trials (Pérez-Guisado & Jakeman, 2010); beta-alanine at 3.2g is on the lower boundary of the effective range. Full ingredient disclosure, no proprietary blends.",
    keyIngredients: ["Caffeine 200mg", "Citrulline 5g", "Beta-Alanine 3.2g", "No prop blend"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "dymatize-extend",
    name: "Extend BCAAs + Protein",
    category: "Amino Acids",
    price: "$25–40",
    priceNote: "30 servings",
    description: "BCAA 2:1:1 blend (leucine 3.5g, isoleucine 1.75g, valine 1.75g) plus glutamine 1g, citrulline 0.5g, and whey protein isolate 7g. Positioned as intra-workout recovery support. Protein source (WPI) is a useful addition for extended sessions.",
    keyIngredients: ["Leucine 3.5g", "WPI 7g", "Glutamine 1g", "Citrulline 0.5g"],
    reviewSlug: null,
    image: null,
  },
];

const publishedReviews = [
  {
    slug: "dymatize-iso100-review-2026",
    title: "Dymatize ISO100 Hydrolyzed Whey",
    brand: "Dymatize",
    category: "Whey Protein Isolate",
    rating: 9 as ReviewRating,
    verdict: "Dual-certified hydrolyzed WPI with 2.7g leucine per serving. The verification standard no other hydrolyzed product matches — premium pricing is the only real objection.",
    publishedAt: "2026-05-27",
    figNumber: "46",
  },
];

const faqs = [
  {
    q: "Is Dymatize ISO100 worth the premium over ON Gold Standard?",
    a: "It depends on your priorities. ISO100 is hydrolyzed whey isolate — faster-absorbing than WPC, higher protein density, lower lactose, and dual-certified (Informed Choice + NSF Certified for Sport). ON Gold Standard uses WPC as the primary source and carries Informed Choice/Informed Sport certification only. If you are a competitive athlete subject to drug testing, ISO100's dual certification provides a higher level of protection. If you are a recreational gym user prioritising cost, ON Gold Standard at $1.15–1.25/serving versus ISO100 at $2.09/serving is a meaningful difference that the dual certification overhead alone does not fully explain.",
  },
  {
    q: "What does 'hydrolyzed whey' actually mean?",
    a: "Hydrolysis is an enzymatic process that breaks whey protein chains into shorter peptide fragments. These fragments cross the intestinal wall faster than intact proteins — peak blood amino acid levels are reached 20–30 minutes post-ingestion for hydrolysate versus 60–90 minutes for standard WPC/WPI (Tang et al., 2009, American Journal of Clinical Nutrition). The practical benefit is most relevant peri-workout when the speed of amino acid delivery to muscle tissue has the greatest theoretical impact on muscle protein synthesis. The difference versus standard WPI is smaller than versus WPC, and its real-world muscle-building advantage over concentrated whey is disputed in controlled trials.",
  },
  {
    q: "Does Dymatize ISO100 cause digestive problems?",
    a: "ISO100 is lower in lactose than WPC-based proteins because the whey is isolated and then hydrolyzed — both steps reduce lactose content. Most lactose-intolerant individuals tolerate ISO100 without symptoms, though response varies individually. The product contains no digestive enzyme blend (unlike MuscleBlaze Biozyme or some ON SKUs), but the pre-digestion from hydrolysis reduces the digestive load. If you have severe lactose intolerance or dairy allergy, ISO100 Clear (which mixes to a lighter texture) is reported to cause fewer GI issues than the standard milky-shake format.",
  },
  {
    q: "Which Dymatize products are certified for drug testing?",
    a: "ISO100 (standard, Clear, and Natural variants) carries dual Informed Choice + NSF Certified for Sport certification, making it the safest Dymatize product for athletes subject to anti-doping testing. Elite Whey Protein's certification status should be verified on the Informed Sport registry before purchase — certification status can change between formulation batches. Pre W.O. and Extend are not listed on the Informed Sport registry as of May 2026. For the safest approach in competition contexts, stick to ISO100 and confirm the specific lot number on the Informed Sport website.",
  },
  {
    q: "How does Dymatize compare to other premium isolate brands?",
    a: "Among hydrolyzed or pure-isolate products, ISO100 is best-in-class for certification — no other hydrolyzed WPI product simultaneously holds Informed Choice and NSF Certified for Sport. Alternatives at a lower price point include MyProtein THE Whey (Informed Sport certified, WPI + hydrolysate blend, ~$1.60/serving) and NOW Sports Whey Protein Isolate (NSF Certified for Sport, unflavoured, ~$1.20/serving). Neither alternative matches ISO100 on leucine content (2.7g) or the dual-certification bar. If price is secondary and you want the highest-confidence verified protein, ISO100 has no peer at its certification level.",
  },
  {
    q: "Where should I buy Dymatize to avoid counterfeits?",
    a: "Dymatize products are widely available from authorised retailers: Amazon (Dymatize official storefront), GNC, Vitamin Shoppe, Bodybuilding.com, and major grocery chains with supplement aisles (Walmart, Target in the US). Purchasing from the official brand storefront or these authorised retailers eliminates counterfeit risk. Avoid third-party marketplace listings without seller verification — Dymatize ISO100 is a high-value product and has appeared in counterfeit form through grey-market channels.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",       labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",   labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial",         labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function DymatizeBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .dy-mobile-toc { display: none; }
        @media (max-width: 767px) { .dy-mobile-toc { display: block; } }
        .dy-mobile-toc summary { list-style: none; }
        .dy-mobile-toc summary::-webkit-details-marker { display: none; }

        .dy-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .dy-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .dy-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .dy-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .dy-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .dy-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .dy-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .dy-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .dy-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .dy-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .dy-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .dy-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .dy-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .dy-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .dy-verdict-grid { grid-template-columns: 1fr; } }

        .dy-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .dy-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .dy-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .dy-product-grid { grid-template-columns: 1fr; } }

        .dy-faq-item summary { list-style: none; cursor: pointer; }
        .dy-faq-item summary::-webkit-details-marker { display: none; }

        .dy-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .dy-stance-card { padding: 24px 20px; } }

        .dy-section-anchor { scroll-margin-top: 72px; }

        .dy-product-img-wrap {
          position: relative; width: 100%; aspect-ratio: 4 / 3;
          background: #F0EAD8; overflow: hidden; flex-shrink: 0;
        }
        .dy-product-img-wrap img { object-fit: contain !important; object-position: center !important; padding: 12px; }
        .dy-product-img-placeholder {
          width: 100%; aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #111418 0%, #1E2428 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; flex-shrink: 0;
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Dymatize</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #0E1318 0%, #1A2230 45%, #111820 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />


          <span style={{ position: "absolute", right: -10, bottom: -30, fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(6rem, 20vw, 16rem)", fontWeight: 800, color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>DY</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(180,200,220,0.35)", textTransform: "uppercase" }}>BRD-004</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(180,200,220,0.12)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,169,106,0.2)", border: "1px solid rgba(212,169,106,0.4)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,169,106,0.9)", textTransform: "uppercase", fontWeight: 700 }}>Gold Tier</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(26,107,58,0.15)", border: "1px solid rgba(26,107,58,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(100,200,130,0.85)", textTransform: "uppercase" }}>Dual Certified</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              Dymatize
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.55)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              Premium hydrolyzed protein specialist. ISO100 is the only hydrolyzed WPI with dual Informed Choice and NSF Certified for Sport — the verification bar no other hydrolysate matches.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Hydrolyzed Whey", "Whey Isolate", "Casein", "Creatine", "Pre-Workout", "BCAAs"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(180,200,220,0.12)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.4)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="dy-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
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
          <details className="dy-mobile-toc" style={{ marginBottom: 8, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="overview" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="dy-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Dymatize was founded in 1994 in Farmers Branch, Texas by a group of sport scientists and nutrition researchers. The brand built its early reputation on high-purity protein formulations for competitive athletes at a time when most supplement companies were still prioritising flavour and marketing over ingredient quality. ISO100 launched in the early 2000s and became the reference product for athletes who required verified, clean protein sources.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Post Holdings, the St. Louis-based food conglomerate, acquired Dymatize in 2014 for approximately $380 million — one of the largest sports nutrition acquisitions of that decade. Post Holdings also owns Premier Protein and various other nutrition brands. The acquisition gave Dymatize access to Post&apos;s manufacturing scale and retail distribution, which enabled broader placement in mainstream grocery and mass-retail channels alongside the brand&apos;s traditional specialty fitness retail presence.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The brand&apos;s strategy has remained consistent post-acquisition: a relatively focused product range centred on premium protein, with independent certification as the primary quality differentiator. ISO100&apos;s dual Informed Choice + NSF Certified for Sport status was achieved and maintained after the acquisition — a credible signal that Post Holdings did not compromise the certification programme to reduce costs.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "linear-gradient(135deg, #0E1318 0%, #1A2230 100%)", borderRadius: 10, overflow: "hidden", border: "1px solid #D4C9B8" }}>
                  <Image
                    src="/products/dymatize-iso100.webp"
                    alt="Dymatize ISO100 Hydrolyzed Whey Protein"
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                    unoptimized
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Headquarters",    value: "Dallas, Texas, USA" },
                    { label: "Founded",         value: "1994 (Farmers Branch, TX)" },
                    { label: "Parent company",  value: "Post Holdings (acq. 2014, ~$380M)" },
                    { label: "Manufacturing",   value: "USA" },
                    { label: "Certification",   value: "Informed Choice + NSF Certified for Sport" },
                    { label: "Flagship product", value: "ISO100 Hydrolyzed Whey Protein" },
                    { label: "Flagship score",  value: "9/10 (FSP v2.1)" },
                    { label: "Key claim",       value: "Only dual-certified hydrolyzed WPI on market" },
                  ].map((item) => (
                    <div key={item.label} className="dy-fact-row">
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="dy-verdict-grid">
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
          <section id="certs" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="dy-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
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
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#1A6B3A", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Why dual matters</span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                Informed Choice and NSF Certified for Sport are independent programmes run by different organisations (LGC Group and NSF International respectively) using different laboratory protocols and testing panels. Holding both simultaneously means ISO100 has passed two independent verification regimes — a product could theoretically pass one and fail the other. For athletes in tested sports, dual certification is the highest confidence level available from a single commercial product. No other hydrolyzed whey protein currently holds both at the time of writing (May 2026).
              </p>
            </div>
          </section>

          {/* ── § 04 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 04" title="Full" titleItalic="product lineup" size="sm" />
            <div className="dy-product-grid">
              {products.map((product) => (
                <div key={product.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>
                  {product.image ? (
                    <div className="dy-product-img-wrap">
                      <Image src={product.image} alt={`Dymatize ${product.name}`} fill unoptimized />
                    </div>
                  ) : (
                    <div className="dy-product-img-placeholder">
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(180,200,220,0.05)", letterSpacing: "-0.05em" }}>{product.name[0]}</span>
                      <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(180,200,220,0.07)", border: "1px solid rgba(180,200,220,0.12)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(180,200,220,0.4)" }}>{product.category}</span>
                      <span style={{ position: "absolute", bottom: 7, left: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(180,200,220,0.2)" }}>Image coming</span>
                    </div>
                  )}
                  <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)", flexShrink: 0 }} />
                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>{product.name}</h3>
                      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 8 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", margin: 0 }}>{product.price}</p>
                        <p style={{ fontSize: 9, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{product.priceNote}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 12.5, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{product.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {product.keyIngredients.map((ing) => (
                        <span key={ing} style={{ padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{ing}</span>
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
          <section id="reviews" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 05" title="Reviewed" titleItalic="products" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {publishedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
              Elite Casein and Pre W.O. reviews publishing next.
            </p>
          </section>

          {/* ── § 06 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="dy-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
              {faqs.map((faq, i) => (
                <details key={i} className="dy-faq-item" style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="stance" className="dy-section-anchor" style={{ marginBottom: 56 }}>
            <div className="dy-stance-card" style={{ backgroundColor: "#0E1318", borderRadius: 12, maxWidth: 840, border: "1px solid rgba(180,200,220,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2A3540" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#1A2530", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,169,106,0.15)", border: "1px solid rgba(212,169,106,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,169,106,0.8)", textTransform: "uppercase", fontWeight: 700 }}>Gold Tier · BRD-004</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                Dymatize&apos;s Gold tier rating rests almost entirely on ISO100. The dual Informed Choice and NSF Certified for Sport certification is a genuine differentiator — not marketing language but a verifiable fact that no other hydrolyzed whey product currently matches. For athletes in tested sports or anyone who places a premium on independent verification, ISO100 is the correct recommendation without qualification.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                The honest caveat is range depth. Dymatize does relatively little outside protein. The creatine is a basic single-ingredient product with no distinguishing features. Pre W.O. doses citrulline below the most-studied performance thresholds. The casein is solid but unremarkable. This is not a brand you come to for breadth — it is a brand you come to because you want the most verified protein supplement commercially available in the United States.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, margin: 0 }}>
                The price is real and it is the primary reason some users choose ON Gold Standard or MyProtein ISO Pro instead. That is a legitimate trade-off. What ISO100 costs in dollars per serving, it returns in certainty — a commodity that is worth more in competitive sports contexts than it is for recreational gym use. Know your use case before deciding whether the premium is justified for you specifically.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
