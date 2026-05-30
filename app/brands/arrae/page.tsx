import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ArraeMobileTOC from "@/components/ui/ArraeMobileTOC";
import ArraeFAQ from "@/components/ui/ArraeFAQ";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Arrae Review (2026): Is It Worth the Price?",
  description:
    "Arrae earns Silver Tier at FitLab. Clean labels, cGMP manufacturing, no NSF cert, and undisclosed doses in Calm. Evidence-led breakdown of Bloat, MB-1, Calm, and 7 more.",
  alternates: { canonical: "/brands/arrae" },
};

// ── R2 image base ──────────────────────────────────────────────────────────
const R2 = "https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/Arrae";

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/arrae#org",
  name: "Arrae",
  url: "https://fitlabreviews.com",
  foundingDate: "2020",
  founder: [
    { "@type": "Person", name: "Siffat Haider" },
    { "@type": "Person", name: "Nish Samantray" },
  ],
  description:
    "Arrae is a US-based direct-to-consumer supplement brand targeting millennial women. Founded in 2020, the brand focuses on fast-acting, single-problem formulas for bloating, anxiety, sleep, and metabolic health.",
  sameAs: ["https://www.instagram.com/arrae.co"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",   item: "https://fitlabreviews.com"        },
    { "@type": "ListItem", position: 2, name: "Brands", item: "https://fitlabreviews.com/brands"  },
    { "@type": "ListItem", position: 3, name: "Arrae",  item: "https://fitlabreviews.com/brands/arrae" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",          value: "2020"    },
  { label: "Revenue",          value: "$100M+"  },
  { label: "Units Sold",       value: "1.6M+"   },
  { label: "Countries",        value: "35"      },
  { label: "Retail Locations", value: "2,265+"  },
  { label: "Subscribers",      value: "50,000+" },
];

const certifications = [
  { name: "cGMP Certified Facilities",  status: "pass"    as const, detail: "Manufactured in cGMP-certified facilities in the USA and Canada."                                                                                                     },
  { name: "NSF Certified for Sport",    status: "fail"    as const, detail: "No NSF product-level certification found. Confirmed absent."                                                                                                          },
  { name: "USP Verified",               status: "fail"    as const, detail: "No USP Dietary Supplement Verification found."                                                                                                                        },
  { name: "Informed Sport / Choice",    status: "fail"    as const, detail: "No Informed Sport or Informed Choice certification found."                                                                                                            },
  { name: "Third-Party Batch Testing",  status: "partial" as const, detail: "Brand reports FTIR identity testing, heavy metals, and microbiological testing per batch. No independent body publishes or verifies these results."                    },
  { name: "FDA Record",                 status: "pass"    as const, detail: "No warning letters, recalls, or significant adverse event reports on file."                                                                                           },
];

const greenFlags = [
  "Short, readable ingredient lists — no 25-ingredient prop blends",
  "Filler-free in practice — hypromellose capsule is the only 'other ingredient' on most products",
  "Retail-qualified — sold at GNC and Vitamin Shoppe, which run their own supplier vetting",
  "Real founder story with verifiable financial skin in the game",
  "Clean FDA record since 2020 launch",
];

const redFlags = [
  "No independent product-level certification (NSF, USP, Informed Sport, BSCG)",
  "Calm's key ingredient doses (L-Theanine, Inositol) hidden inside a proprietary blend — amounts undisclosed",
  "Clinical study underpinning headline claims was a 35-person, open-label, industry-sponsored trial — not a placebo-controlled RCT",
  "MB-1 \"natural GLP-1 support\" framing extrapolates from preclinical and proxy data",
  "Premium price-per-serving difficult to justify on formula alone for several products",
];

// image: null = no image in R2 yet — renders gradient fallback
const products = [
  {
    slug: "arrae-bloat",
    name: "Bloat",
    category: "Digestive Enzymes",
    price: "$22",
    priceNote: "30 caps · ~$1.47/serving",
    description: "The flagship. Six-ingredient enzyme-plus-herb blend: ginger 220mg, dandelion root, lemon balm, peppermint, bromelain, slippery elm — total 1,080mg per serving. Taken after meals.",
    keyIngredients: ["Ginger 220mg", "Bromelain", "Lemon Balm", "Slippery Elm"],
    reviewSlug: "arrae-bloat",
    image: "/products/Arrae-Bloat.webp",
  },
  {
    slug: "arrae-bloat-xl",
    name: "Bloat XL",
    category: "Digestive Enzymes",
    price: "$22",
    priceNote: "30 caps · larger serving size",
    description: "Same formula as Bloat, larger per-capsule dose. Positioned for those with more severe or chronic bloating. Same six-herb/enzyme combination.",
    keyIngredients: ["Ginger", "Bromelain", "Lemon Balm", "Slippery Elm"],
    reviewSlug: null,
    image: `${R2}/ArraebloatCapsulesDigestive.webp`,
  },
  {
    slug: "arrae-calm",
    name: "Calm",
    category: "Stress & Anxiety",
    price: "$36–55",
    priceNote: "60 caps · ~$2.40–3.67/serving",
    description: "Four-ingredient formula: magnesium bisglycinate 63mg, plus a proprietary blend of inositol, L-theanine, and organic passionflower 10:1 extract. Individual doses of the blend ingredients are not disclosed.",
    keyIngredients: ["Magnesium Bisglycinate 63mg", "Inositol", "L-Theanine", "Passionflower"],
    reviewSlug: null,
    image: `${R2}/ArraeCalmCortisolManager.webp`,
  },
  {
    slug: "arrae-sleep",
    name: "Sleep",
    category: "Sleep Support",
    price: "~$38",
    priceNote: "Melatonin-free formula",
    description: "GABA-led herbal sleep blend without melatonin. Also contains chamomile flower, valerian root, holy basil, and hops extract. Positioned for people who find melatonin causes morning grogginess.",
    keyIngredients: ["GABA", "Valerian Root", "Chamomile", "Holy Basil", "Hops"],
    reviewSlug: null,
    image: `${R2}/arrae-sleep.webp`,
  },
  {
    slug: "arrae-magnesium",
    name: "Magnesium",
    category: "General Wellness",
    price: "~$34",
    priceNote: "3-in-1 blend · 90 caps",
    description: "Three-form magnesium blend — glycinate (sleep/mood), citrate (digestion/regularity), and L-threonate (cognitive function). Marketed as covering 30+ health benefits.",
    keyIngredients: ["Magnesium Glycinate", "Magnesium Citrate", "Magnesium L-Threonate"],
    reviewSlug: null,
    image: `${R2}/ArraeMagnesium.webp`,
  },
  {
    slug: "arrae-constipation",
    name: "Constipation",
    category: "Gut Health",
    price: "~$28",
    priceNote: "Saline laxative mechanism",
    description: "Magnesium citrate as the primary active — a saline laxative that pulls water into the intestines to soften stool. Positioned as a non-stimulant alternative to senna-based products.",
    keyIngredients: ["Magnesium Citrate"],
    reviewSlug: null,
    image: `${R2}/ArraeConstipationReliefCapsules.webp`,
  },
  {
    slug: "arrae-heartburn",
    name: "Heartburn",
    category: "Gut Health",
    price: "~$32",
    priceNote: "Fast-acting formula",
    description: "Targets acid reflux and heartburn within one hour. Claims to coat the esophagus and repair the GI tract lining. Full ingredient breakdown not publicly disclosed in detail.",
    keyIngredients: ["Proprietary blend — details pending review"],
    reviewSlug: null,
    image: `${R2}/arrae-Heartburn.webp`,
  },
  {
    slug: "arrae-tribiotic",
    name: "Tribiotic",
    category: "Gut · Vaginal · Immune",
    price: "~$48",
    priceNote: "50B CFU · daily use",
    description: "Pre + pro + postbiotic combination with immunoglobulin. Eight probiotic strains plus one spore (B. subtilis Bss-19), XOS prebiotic 400mg, heat-killed ES1 postbiotic 25mg, and ImmunoLin 250mg immunoglobulin concentrate.",
    keyIngredients: ["50B CFU (8 strains)", "XOS Prebiotic 400mg", "ES1 HT Postbiotic 25mg", "ImmunoLin 250mg"],
    reviewSlug: null,
    image: `${R2}/ArraeTribiotic.webp`,
  },
  {
    slug: "arrae-mb1",
    name: "MB-1",
    category: "Metabolic Health",
    price: "$35–65",
    priceNote: "20–30 servings",
    description: "Seven-ingredient metabolic formula. Contains IGOB131® African mango, CQR-300® cissus, grains of paradise 895mg total blend, chromium picolinate 500mcg, B6 as P5P 5mg, green tea extract, and B. lactis B420. Marketed as \"natural GLP-1 support.\"",
    keyIngredients: ["IGOB131® African Mango", "Grains of Paradise", "Chromium 500mcg", "B. lactis B420"],
    reviewSlug: null,
    image: `${R2}/ArraeMB-1.webp`,
  },
  {
    slug: "arrae-tone",
    name: "Tone",
    category: "Body Composition",
    price: "$49.99",
    priceNote: "90 gummies · ~$1.67/serving",
    description: "Creatine monohydrate 5g per serving, ginger extract 400mg, and Slimbiotics® postbiotic 34mg. Vegan pectin gummies — no mixing required. Available in Mixed Berry, Sour Watermelon, and Sour Green Apple.",
    keyIngredients: ["Creatine Monohydrate 5g", "Ginger 400mg", "Slimbiotics® Postbiotic 34mg"],
    reviewSlug: "arrae-tone-gummies",
    image: "/products/arrae-tone-1.webp",
  },
];

// Populates as reviews publish
const publishedReviews = [
  {
    slug: "arrae-bloat",
    title: "Arrae Bloat",
    brand: "Arrae",
    category: "Digestive Enzymes",
    rating: 7 as ReviewRating,
    verdict: "Clean, filler-free organic herb blend. Ginger underdosed, 5 of 6 amounts hidden. Marketing outpaces the evidence.",
    publishedAt: "2026-05-30",
    figNumber: "54",
  },
  {
    slug: "arrae-tone-gummies",
    title: "Arrae Tone Gummies",
    brand: "Arrae",
    category: "Creatine",
    rating: 7 as ReviewRating,
    verdict: "5g creatine monohydrate in a vegan gummy — correct dose, full transparency. Premium price is the real trade-off.",
    publishedAt: "2026-05-30",
    figNumber: "55",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",               labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",           labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial — self-reported", labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function ArraeBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .arrae-mobile-toc { display: none; }
        @media (max-width: 767px) { .arrae-mobile-toc { display: block; } }

        .arrae-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .arrae-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .arrae-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .arrae-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .arrae-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .arrae-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .arrae-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .arrae-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .arrae-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .arrae-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .arrae-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .arrae-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .arrae-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .arrae-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .arrae-verdict-grid { grid-template-columns: 1fr; } }

        .arrae-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .arrae-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .arrae-evidence-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 20px 24px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 10px; }
        @media (max-width: 600px) { .arrae-evidence-grid { grid-template-columns: repeat(2, 1fr); padding: 16px; } }
        @media (max-width: 400px) { .arrae-evidence-grid { grid-template-columns: 1fr; } }

        .arrae-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .arrae-product-grid { grid-template-columns: 1fr; } }

        .arrae-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .arrae-stance-card { padding: 24px 20px; } }

        .arrae-section-anchor { scroll-margin-top: 72px; }

        /* Product card image wrapper — fill mode container */
        .arrae-product-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #F0EAD8;
          overflow: hidden;
          flex-shrink: 0;
        }
        /* next/image fill child — show full image, no crop */
        .arrae-product-img-wrap img {
          object-fit: contain !important;
          object-position: center !important;
          padding: 12px;
        }
        /* Gradient fallback for products with no image yet */
        .arrae-product-img-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #2C1A10 0%, #1A0F08 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        /* Overview brand image */
        .arrae-brand-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #1A0F08;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #D4C9B8;
        }
        .arrae-brand-img-wrap img {
          object-fit: contain !important;
          object-position: center !important;
          padding: 24px;
          filter: brightness(0) invert(1);
          opacity: 0.9;
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Arrae</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #1A0F08 0%, #2C1A10 40%, #1E120A 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          {/* Grid texture */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,169,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,106,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          {/* Logo — top-right, sitting inside the dark banner */}
          <div style={{ position: "absolute", top: 24, right: 24, zIndex: 2 }}>
            <Image
              src={`${R2}/arraelogo.webp`}
              alt="Arrae logo"
              width={120}
              height={48}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }}
              unoptimized
            />
          </div>

          {/* Ghost letter */}
          <span style={{ position: "absolute", right: -20, bottom: -30, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(6rem, 20vw, 16rem)", fontWeight: 800, color: "rgba(212,169,106,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>A</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(212,169,106,0.5)", textTransform: "uppercase" }}>BRD-009</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(212,169,106,0.2)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,201,184,0.15)", border: "1px solid rgba(212,201,184,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,201,184,0.8)", textTransform: "uppercase" }}>Silver Tier</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              Arrae
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.6)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              Fast-acting women&apos;s wellness supplements. Clean labels, short formulas, no independent product certification.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Gut Health", "Sleep", "Stress & Anxiety", "Metabolic Health", "Probiotics", "Body Composition"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(212,201,184,0.2)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.5)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="arrae-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
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
          <div className="arrae-mobile-toc" style={{ marginBottom: 8 }}>
            <ArraeMobileTOC />
          </div>

          {/* ── § 01 Brand Overview ────────────────────────────────────────── */}
          <section id="overview" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="arrae-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Arrae launched in March 2020, founded by Siff Haider and Nish Samantray — a husband-and-wife team who funded the business with $484K they had saved for their wedding. They ran operations out of a 400-square-foot Toronto apartment, packing orders themselves in the early months.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  Siff came to the brand through her own experience with chronic illness and bloating — she had spent years cycling through conventional medicine before finding relief through natural remedies. Nish brought a background in technical product management and operations. The division worked: Siff built the brand identity and community, Nish handled logistics, finance, and growth strategy.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The premise is deliberately narrow: solve one problem per product, make it work fast, and make the packaging good enough to sit on a counter instead of being shoved in a cabinet. Their first product, Bloat, went from zero to $1 million in revenue in nine months. By year five, the brand had crossed nine figures with minimal outside investment and a team of 33.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Brand feature image */}
                <div className="arrae-brand-img-wrap">
                  <Image
                    src={`${R2}/arraelogo.webp`}
                    alt="Arrae brand logo"
                    fill
                    unoptimized
                  />
                </div>

                {/* Key facts */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Headquarters",     value: "Los Angeles, CA (founders) · Dayton, NJ (distribution)" },
                  { label: "Founded",          value: "March 2020" },
                  { label: "Founders",         value: "Siff Haider & Nish Samantray" },
                  { label: "Manufacturing",    value: "USA & Canada, cGMP-certified" },
                  { label: "Target audience",  value: "Women 25–45, millennial wellness" },
                  { label: "Retail presence",  value: "GNC, Vitamin Shoppe + 2,265 locations" },
                  { label: "Flagship product", value: "Bloat (2,800+ reviews)" },
                  { label: "Notable collab",   value: "Pamela Anderson for MB-1 45+" },
                ].map((item) => (
                  <div key={item.label} className="arrae-fact-row">
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="arrae-verdict-grid">
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
          <section id="certs" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="arrae-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
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
                Arrae reports FTIR identity testing, heavy metal analysis, and microbiological testing on every batch. These are real and useful processes. However, they are self-reported — no independent certifying body publishes or verifies these results. The distinction matters: batch testing catches contamination and basic identity fraud. It does not independently verify that the label doses of active ingredients are present and accurate, which is what NSF, USP, and similar programs specifically address.
              </p>
            </div>
          </section>

          {/* ── § 04 Clinical Evidence ─────────────────────────────────────── */}
          <section id="evidence" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Evidence" figure="§ 04" title="On the" titleItalic="clinical claims" size="sm" />
            <div style={{ maxWidth: 760 }}>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                Arrae&apos;s headline figures — &ldquo;86% reduction in bloating,&rdquo; &ldquo;74% of participants reported fewer IBS symptoms&rdquo; — come from a single clinical study conducted by Citrus Labs, a company whose business model is running product efficacy trials for consumer brands. The study enrolled 35 women over 18, ran for eight weeks, and used an open-label, single-arm observational design. There was no placebo group and no blinding.
              </p>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                A further detail worth noting: the 86% figure specifically reflects the combined Bloat + Calm result (weeks five through eight), not Bloat alone. Bloat-only results were lower. Arrae&apos;s marketing does not always make this distinction clear.
              </p>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 20 }}>
                A second, more rigorous study is registered on ClinicalTrials.gov (NCT07370740) — a randomised, placebo-controlled design run with KGK Science. It covers Bloat&apos;s effect on postprandial gas and bloating at the 60-minute mark. Results have not been published as of May 2026.
              </p>
              <div className="arrae-evidence-grid">
                {[
                  { label: "Study design",   value: "Single-arm observational", verdict: "weak"    as const },
                  { label: "Sample size",    value: "35 women",                 verdict: "weak"    as const },
                  { label: "Sponsor",        value: "Industry (Citrus Labs)",   verdict: "partial" as const },
                  { label: "Control group",  value: "None",                     verdict: "weak"    as const },
                  { label: "Blinding",       value: "Open-label",               verdict: "weak"    as const },
                  { label: "New RCT pending", value: "NCT07370740",             verdict: "pass"    as const },
                ].map((item) => {
                  const v = { pass: { color: "#1A6B3A", bg: "rgba(26,107,58,0.07)" }, partial: { color: "#92620A", bg: "rgba(146,98,10,0.07)" }, weak: { color: "#9B2020", bg: "rgba(155,32,32,0.06)" } }[item.verdict];
                  return (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: v.bg, borderRadius: 6 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>{item.label}</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: v.color, margin: 0 }}>{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── § 05 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 05" title="Full" titleItalic="product lineup" size="sm" />
            <div className="arrae-product-grid">
              {products.map((product) => (
                <div key={product.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>

                  {/* Image or gradient fallback */}
                  {product.image ? (
                    <div className="arrae-product-img-wrap">
                      <Image
                        src={product.image}
                        alt={`Arrae ${product.name} supplement`}
                        fill
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="arrae-product-img-placeholder">
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(242,235,217,0.05)", letterSpacing: "-0.05em" }}>
                        {product.name[0]}
                      </span>
                      {/* Category tag overlay */}
                      <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(212,169,106,0.1)", border: "1px solid rgba(212,169,106,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(212,169,106,0.55)" }}>
                        {product.category}
                      </span>
                      {/* "Image coming" label */}
                      <span style={{ position: "absolute", bottom: 7, left: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(212,169,106,0.3)" }}>
                        Image coming
                      </span>
                    </div>
                  )}

                  {/* Rust accent line */}
                  <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)", flexShrink: 0 }} />

                  {/* Card body */}
                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>
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

          {/* ── § 06 Published Reviews ─────────────────────────────────────── */}
          <section id="reviews" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 06" title="Reviewed" titleItalic="products" size="sm" />
            {publishedReviews.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {publishedReviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
              </div>
            ) : (
              <div style={{ padding: "36px 28px", border: "1px dashed #D4C9B8", borderRadius: 10, textAlign: "center", backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Coming soon</p>
                <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                  Individual product reviews are in progress. Bloat is first — publishing shortly.{" "}Check back or{" "}
                  <Link href="/reviews" style={{ color: "#C4622D", fontWeight: 600 }}>browse all reviews</Link>.
                </p>
              </div>
            )}
          </section>

          {/* ── § 07 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="arrae-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 07" title="Common" titleItalic="questions" size="sm" />
            <ArraeFAQ />
          </section>

          {/* ── § 08 Editorial Stance ──────────────────────────────────────── */}
          <section id="stance" className="arrae-section-anchor" style={{ marginBottom: 56 }}>
            <div className="arrae-stance-card" style={{ backgroundColor: "#1A1714", borderRadius: 12, maxWidth: 840 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5C5650" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#3C3530", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,201,184,0.1)", border: "1px solid rgba(212,201,184,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,201,184,0.5)", textTransform: "uppercase" }}>Silver Tier · BRD-009</span>
              </div>
              <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                Arrae is a well-built brand in a legitimate product category. The formulas are short and legible. The manufacturing is credible. The founder story is real and the business has scaled without the kind of quality shortcuts that usually accompany rapid DTC growth. These are not small things in an industry full of proprietary-blend noise.
              </p>
              <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, marginBottom: 14 }}>
                The honest limitations are also real. The absence of independent product-level certification means you are trusting the brand&apos;s own quality claims — which may be accurate, but cannot be independently verified. Key doses in Calm are hidden inside a proprietary blend. The clinical study underpinning headline claims is industry-sponsored and lacks a placebo arm. MB-1&apos;s GLP-1 positioning overstates what the evidence currently supports.
              </p>
              <p style={{ fontSize: 15, color: "#8A8480", lineHeight: 1.85, margin: 0 }}>
                Silver tier reflects a brand that is genuinely better than average — not a brand that has earned full trust across its range. Individual product reviews will assign specific scores. If the pending RCT for Bloat publishes with strong results, that assessment moves up.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
