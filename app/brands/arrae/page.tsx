import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Arrae Supplements Review (2026) — Brand Deep-Dive",
  description:
    "Arrae reviewed 2026: clean manufacturing, no independent product cert, proprietary blend in Calm hides key doses. All 10 products broken down. Honest Silver tier verdict.",
  alternates: { canonical: "/brands/arrae" },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/arrae#org",
  name: "Arrae",
  url: "https://www.arrae.com",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands", item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "Arrae", item: "https://fitlabreviews.com/brands/arrae" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded", value: "2020" },
  { label: "Revenue", value: "$100M+" },
  { label: "Units Sold", value: "1.6M+" },
  { label: "Countries", value: "35" },
  { label: "Retail Locations", value: "2,265+" },
  { label: "Subscribers", value: "50,000+" },
];

const certifications = [
  {
    name: "cGMP Certified Facilities",
    status: "pass" as const,
    detail: "Manufactured in cGMP-certified facilities in the USA and Canada.",
  },
  {
    name: "NSF Certified for Sport",
    status: "fail" as const,
    detail: "No NSF product-level certification found. Confirmed absent.",
  },
  {
    name: "USP Verified",
    status: "fail" as const,
    detail: "No USP Dietary Supplement Verification found.",
  },
  {
    name: "Informed Sport / Choice",
    status: "fail" as const,
    detail: "No Informed Sport or Informed Choice certification found.",
  },
  {
    name: "Third-Party Batch Testing",
    status: "partial" as const,
    detail: "Brand reports FTIR identity testing, heavy metal analysis, and microbiological testing per batch. No independent body publishes or verifies these results.",
  },
  {
    name: "FDA Record",
    status: "pass" as const,
    detail: "No warning letters, recalls, or significant adverse event reports on file.",
  },
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

const products = [
  {
    slug: "arrae-bloat",
    name: "Bloat",
    category: "Digestive Enzymes",
    price: "$22",
    priceNote: "30 caps · ~$1.47/serving",
    description:
      "The flagship. Six-ingredient enzyme-plus-herb blend: ginger 220mg, dandelion root, lemon balm, peppermint, bromelain, slippery elm — total 1,080mg per serving. Taken after meals.",
    keyIngredients: ["Ginger 220mg", "Bromelain", "Lemon Balm", "Slippery Elm"],
    reviewSlug: null,
    // PLACEHOLDER: replace with /products/arrae-bloat.webp
    image: null,
  },
  {
    slug: "arrae-bloat-xl",
    name: "Bloat XL",
    category: "Digestive Enzymes",
    price: "$22",
    priceNote: "30 caps · larger serving size",
    description:
      "Same formula as Bloat, larger per-capsule dose. Positioned for those with more severe or chronic bloating. Same six-herb/enzyme combination.",
    keyIngredients: ["Ginger", "Bromelain", "Lemon Balm", "Slippery Elm"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-calm",
    name: "Calm",
    category: "Stress & Anxiety",
    price: "$36–55",
    priceNote: "60 caps · ~$2.40–3.67/serving",
    description:
      "Four-ingredient formula: magnesium bisglycinate 63mg, plus a proprietary blend of inositol, L-theanine, and organic passionflower 10:1 extract. Individual doses of the blend ingredients are not disclosed.",
    keyIngredients: ["Magnesium Bisglycinate 63mg", "Inositol", "L-Theanine", "Passionflower"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-sleep",
    name: "Sleep",
    category: "Sleep Support",
    price: "~$38",
    priceNote: "Melatonin-free formula",
    description:
      "GABA-led herbal sleep blend without melatonin. Also contains chamomile flower, valerian root, holy basil, and hops extract. Positioned for people who find melatonin causes morning grogginess.",
    keyIngredients: ["GABA", "Valerian Root", "Chamomile", "Holy Basil", "Hops"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-magnesium",
    name: "Magnesium",
    category: "General Wellness",
    price: "~$34",
    priceNote: "3-in-1 blend · 90 caps",
    description:
      "Three-form magnesium blend — glycinate (sleep/mood), citrate (digestion/regularity), and L-threonate (cognitive function). Marketed as covering 30+ health benefits.",
    keyIngredients: ["Magnesium Glycinate", "Magnesium Citrate", "Magnesium L-Threonate"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-constipation",
    name: "Constipation",
    category: "Gut Health",
    price: "~$28",
    priceNote: "Saline laxative mechanism",
    description:
      "Magnesium citrate as the primary active — a saline laxative that pulls water into the intestines to soften stool. Positioned as a non-stimulant alternative to senna-based products.",
    keyIngredients: ["Magnesium Citrate"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-heartburn",
    name: "Heartburn",
    category: "Gut Health",
    price: "~$32",
    priceNote: "Fast-acting formula",
    description:
      "Targets acid reflux and heartburn within one hour. Claims to coat the esophagus and repair the GI tract lining. Full ingredient breakdown not publicly disclosed in detail.",
    keyIngredients: ["Proprietary blend — details pending review"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-tribiotic",
    name: "Tribiotic",
    category: "Gut · Vaginal · Immune",
    price: "~$48",
    priceNote: "50B CFU · daily use",
    description:
      "Pre + pro + postbiotic combination with immunoglobulin. Eight probiotic strains plus one spore (B. subtilis Bss-19), XOS prebiotic 400mg, heat-killed ES1 postbiotic 25mg, and ImmunoLin 250mg immunoglobulin concentrate.",
    keyIngredients: ["50B CFU (8 strains)", "XOS Prebiotic 400mg", "ES1 HT Postbiotic 25mg", "ImmunoLin 250mg"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-mb1",
    name: "MB-1",
    category: "Metabolic Health",
    price: "$35–65",
    priceNote: "20–30 servings",
    description:
      "Seven-ingredient metabolic formula. Contains IGOB131® African mango, CQR-300® cissus, grains of paradise 895mg total blend, chromium picolinate 500mcg, B6 as P5P 5mg, green tea extract, and B. lactis B420. Marketed as \"natural GLP-1 support.\"",
    keyIngredients: ["IGOB131® African Mango", "Grains of Paradise", "Chromium 500mcg", "B. lactis B420"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "arrae-tone",
    name: "Tone",
    category: "Body Composition",
    price: "~$38",
    priceNote: "Creatine gummies",
    description:
      "Creatine monohydrate 5g per serving, ginger extract 400mg, and Slimbiotics® postbiotic 34mg. One of the few creatine products in gummy form with a postbiotic addition.",
    keyIngredients: ["Creatine Monohydrate 5g", "Ginger 400mg", "Slimbiotics® Postbiotic 34mg"],
    reviewSlug: null,
    image: null,
  },
];

// ── Reviewed products (populates as reviews publish) ───────────────────────
const publishedReviews: {
  slug: string;
  title: string;
  brand: string;
  category: string;
  rating: ReviewRating;
  verdict: string;
  publishedAt: string;
  figNumber: string;
}[] = [
  // Reviews added here as they publish:
  // { slug: "arrae-bloat", title: "Arrae Bloat", brand: "Arrae", category: "Digestive Enzymes", rating: X, verdict: "...", publishedAt: "2026-XX-XX", figNumber: "01" },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass: {
    dot: "#1A6B3A",
    bg: "rgba(26,107,58,0.07)",
    border: "rgba(26,107,58,0.2)",
    label: "Confirmed",
    labelColor: "#1A6B3A",
  },
  fail: {
    dot: "#9B2020",
    bg: "rgba(155,32,32,0.06)",
    border: "rgba(155,32,32,0.18)",
    label: "Not certified",
    labelColor: "#9B2020",
  },
  partial: {
    dot: "#92620A",
    bg: "rgba(146,98,10,0.07)",
    border: "rgba(146,98,10,0.2)",
    label: "Partial — self-reported",
    labelColor: "#92620A",
  },
};

export default function ArraeBrandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ──────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[
              { label: "Home", href: "/" },
              { label: "Brands", href: "/brands" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link
                  href={crumb.href}
                  style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}
                >
                  {crumb.label}
                </Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Arrae</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        {/*
          PLACEHOLDER IMAGE:
          Replace this gradient banner with an actual brand image.
          Recommended: 1280×360px brand/product flatlay
          Path: /public/brands/arrae-hero.webp
          Usage: background: `url('/brands/arrae-hero.webp') center/cover no-repeat`
        */}
        <div
          style={{
            width: "100%",
            minHeight: 280,
            background: "linear-gradient(135deg, #1A0F08 0%, #2C1A10 40%, #1E120A 100%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Subtle grid texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(212,169,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,106,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ghost brand letter */}
          <span
            style={{
              position: "absolute",
              right: -20,
              bottom: -30,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(8rem, 20vw, 16rem)",
              fontWeight: 800,
              color: "rgba(212,169,106,0.04)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}
          >
            A
          </span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "48px 24px 40px" }} className="px-page">
            {/* Figure + type row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: "rgba(212,169,106,0.5)",
                  textTransform: "uppercase",
                }}
              >
                BRD-009
              </span>
              <span style={{ width: 20, height: 1, backgroundColor: "rgba(212,169,106,0.2)", display: "inline-block" }} />
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: "#C4622D",
                  textTransform: "uppercase",
                }}
              >
                Brand Profile
              </span>
              {/* Tier badge */}
              <span
                style={{
                  padding: "3px 10px",
                  backgroundColor: "rgba(212,201,184,0.15)",
                  border: "1px solid rgba(212,201,184,0.3)",
                  borderRadius: 4,
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "rgba(212,201,184,0.8)",
                  textTransform: "uppercase",
                }}
              >
                Silver Tier
              </span>
            </div>

            {/* Brand name */}
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F2EBD9",
                lineHeight: 1.0,
                marginBottom: 12,
              }}
            >
              Arrae
            </h1>

            {/* One-liner */}
            <p style={{ fontSize: 15, color: "rgba(242,235,217,0.6)", lineHeight: 1.6, maxWidth: 560, marginBottom: 20 }}>
              Fast-acting women&apos;s wellness supplements. Clean labels, short formulas, no independent product certification.
            </p>

            {/* Category chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Gut Health", "Sleep", "Stress & Anxiety", "Metabolic Health", "Probiotics", "Body Composition"].map((cat) => (
                <span
                  key={cat}
                  style={{
                    padding: "4px 12px",
                    border: "1px solid rgba(212,201,184,0.2)",
                    borderRadius: 6,
                    fontSize: 11,
                    color: "rgba(242,235,217,0.5)",
                    fontFamily: "var(--font-dm-mono), monospace",
                    letterSpacing: "0.07em",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 0,
            }}
            className="px-page"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "20px 24px",
                  borderRight: i < stats.length - 1 ? "1px solid #D4C9B8" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 8,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#A89880",
                    marginBottom: 6,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#1A1714",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* ── Brand Overview ────────────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
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

              {/* Key facts sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Headquarters", value: "Los Angeles, CA (founders) · Dayton, NJ (distribution)" },
                  { label: "Founded", value: "March 2020" },
                  { label: "Founders", value: "Siff Haider & Nish Samantray" },
                  { label: "Manufacturing", value: "USA & Canada, cGMP-certified" },
                  { label: "Target audience", value: "Women 25–45, millennial wellness" },
                  { label: "Retail presence", value: "GNC, Vitamin Shoppe + 2,265 locations" },
                  { label: "Flagship product", value: "Bloat (2,800+ reviews)" },
                  { label: "Notable collab", value: "Pamela Anderson for MB-1 45+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px 1fr",
                      gap: 12,
                      padding: "12px 16px",
                      backgroundColor: "#F8F2E4",
                      border: "1px solid #D4C9B8",
                      borderRadius: 8,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#8A8480",
                        margin: 0,
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Verdict Card ─────────────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {/* Green flags */}
              <div
                style={{
                  padding: 24,
                  backgroundColor: "#F8F2E4",
                  border: "1px solid #D4C9B8",
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#1A6B3A",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#1A6B3A",
                      margin: 0,
                    }}
                  >
                    What works
                  </p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {greenFlags.map((flag) => (
                    <li
                      key={flag}
                      style={{
                        fontSize: 13,
                        color: "#3C3530",
                        lineHeight: 1.6,
                        paddingLeft: 16,
                        borderLeft: "2px solid rgba(26,107,58,0.3)",
                      }}
                    >
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red flags */}
              <div
                style={{
                  padding: 24,
                  backgroundColor: "#F8F2E4",
                  border: "1px solid #D4C9B8",
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#9B2020",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#9B2020",
                      margin: 0,
                    }}
                  >
                    Watch out for
                  </p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {redFlags.map((flag) => (
                    <li
                      key={flag}
                      style={{
                        fontSize: 13,
                        color: "#3C3530",
                        lineHeight: 1.6,
                        paddingLeft: 16,
                        borderLeft: "2px solid rgba(155,32,32,0.25)",
                      }}
                    >
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Certifications & Testing ──────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div
                    key={cert.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "220px 140px 1fr",
                      gap: 16,
                      alignItems: "center",
                      padding: "14px 20px",
                      backgroundColor: s.bg,
                      border: `1px solid ${s.border}`,
                      borderRadius: 8,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        color: "#3C3530",
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {cert.name}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: s.dot,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.07em",
                          color: s.labelColor,
                          margin: 0,
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{cert.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Testing context note */}
            <div
              style={{
                padding: "16px 20px",
                backgroundColor: "rgba(146,98,10,0.06)",
                border: "1px solid rgba(146,98,10,0.2)",
                borderRadius: 8,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  color: "#92620A",
                  textTransform: "uppercase",
                  paddingTop: 2,
                  flexShrink: 0,
                }}
              >
                Note
              </span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                Arrae reports FTIR identity testing, heavy metal analysis, and microbiological testing on every batch. These are real and useful processes. However, they are self-reported — no independent certifying body publishes or verifies these results. The distinction matters: batch testing catches contamination and basic identity fraud. It does not independently verify that the label doses of active ingredients are present and accurate, which is what NSF, USP, and similar programs specifically address.
              </p>
            </div>
          </section>

          {/* ── Clinical Evidence Note ────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Evidence" figure="§ 04" title="On the" titleItalic="clinical claims" size="sm" />

            <div style={{ maxWidth: 760 }}>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                Arrae&apos;s headline figures — &ldquo;86% reduction in bloating,&rdquo; &ldquo;74% of participants reported fewer IBS symptoms&rdquo; — come from a single clinical study conducted by Citrus Labs, a company whose business model is running product efficacy trials for consumer brands. The study enrolled 35 women over 18, ran for eight weeks, and used an open-label, single-arm observational design. There was no placebo group and no blinding.
              </p>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                A further detail worth noting: the 86% figure specifically reflects the combined Bloat + Calm result (weeks five through eight), not Bloat alone. Bloat-only results were lower. Arrae&apos;s marketing does not always make this distinction clear.
              </p>
              <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                A second, more rigorous study is registered on ClinicalTrials.gov (NCT07370740) — a randomised, placebo-controlled design run with KGK Science. It covers Bloat&apos;s effect on postprandial gas and bloating at the 60-minute mark. Results have not been published as of May 2026.
              </p>

              {/* Evidence classification card */}
              <div
                style={{
                  padding: "20px 24px",
                  backgroundColor: "#F8F2E4",
                  border: "1px solid #D4C9B8",
                  borderRadius: 10,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 20,
                }}
              >
                {[
                  { label: "Study design", value: "Single-arm observational", verdict: "weak" as const },
                  { label: "Sample size", value: "35 women", verdict: "weak" as const },
                  { label: "Sponsor", value: "Industry (Citrus Labs)", verdict: "partial" as const },
                  { label: "Control group", value: "None", verdict: "weak" as const },
                  { label: "Blinding", value: "Open-label", verdict: "weak" as const },
                  { label: "New RCT pending", value: "NCT07370740", verdict: "pass" as const },
                ].map((item) => {
                  const verdictMap = {
                    pass: { color: "#1A6B3A", bg: "rgba(26,107,58,0.07)" },
                    partial: { color: "#92620A", bg: "rgba(146,98,10,0.07)" },
                    weak: { color: "#9B2020", bg: "rgba(155,32,32,0.06)" },
                  };
                  const v = verdictMap[item.verdict];
                  return (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: v.bg, borderRadius: 6 }}>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 9,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#8A8480",
                          marginBottom: 6,
                        }}
                      >
                        {item.label}
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: v.color, margin: 0 }}>{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Product Lineup ────────────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 05" title="Full" titleItalic="product lineup" size="sm" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
              {products.map((product) => (
                <div
                  key={product.slug}
                  style={{
                    border: "1px solid #D4C9B8",
                    borderRadius: 10,
                    overflow: "hidden",
                    backgroundColor: "#F8F2E4",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/*
                    PLACEHOLDER IMAGE BLOCK
                    Replace this gradient with an <img> tag when product images are ready.
                    Recommended: 600×240px product shot on white/cream background.
                    Example: <img src="/products/arrae-bloat.webp" alt="Arrae Bloat capsules" style={{ width:"100%", height:160, objectFit:"cover" }} />

                    Current placeholder path for reference: /products/arrae-{product.slug}.webp
                  */}
                  <div
                    style={{
                      height: 120,
                      background: "linear-gradient(135deg, #2C1A10 0%, #1A0F08 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "3rem",
                        fontWeight: 800,
                        color: "rgba(242,235,217,0.06)",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {product.name[0]}
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 14,
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(212,169,106,0.4)",
                      }}
                    >
                      {/* PLACEHOLDER — replace with actual image */}
                      img placeholder
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 12,
                        padding: "3px 10px",
                        backgroundColor: "rgba(212,169,106,0.1)",
                        border: "1px solid rgba(212,169,106,0.2)",
                        borderRadius: 4,
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        color: "rgba(212,169,106,0.6)",
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#1A1714",
                          margin: 0,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {product.name}
                      </h3>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", margin: 0 }}>{product.price}</p>
                        <p
                          style={{
                            fontSize: 10,
                            color: "#8A8480",
                            fontFamily: "var(--font-dm-mono), monospace",
                            margin: 0,
                          }}
                        >
                          {product.priceNote}
                        </p>
                      </div>
                    </div>

                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{product.description}</p>

                    {/* Key ingredients */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {product.keyIngredients.map((ing) => (
                        <span
                          key={ing}
                          style={{
                            padding: "3px 8px",
                            backgroundColor: "#EDE8DF",
                            border: "1px solid #D4C9B8",
                            borderRadius: 4,
                            fontSize: 10,
                            color: "#5C5650",
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {ing}
                        </span>
                      ))}
                    </div>

                    {/* Review link or coming soon */}
                    <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid #EDE8DF" }}>
                      {product.reviewSlug ? (
                        <Link
                          href={`/reviews/${product.reviewSlug}`}
                          style={{
                            fontSize: 12,
                            color: "#C4622D",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          Read full review →
                        </Link>
                      ) : (
                        <span
                          style={{
                            fontSize: 11,
                            color: "#A89880",
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Review in progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Published Reviews ─────────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 06" title="Reviewed" titleItalic="products" size="sm" />

            {publishedReviews.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {publishedReviews.map((r) => (
                  <ReviewCard key={r.slug} {...r} />
                ))}
              </div>
            ) : (
              /* Empty state — shown until first review publishes */
              <div
                style={{
                  padding: "40px 32px",
                  border: "1px dashed #D4C9B8",
                  borderRadius: 10,
                  textAlign: "center",
                  backgroundColor: "#F8F2E4",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#A89880",
                    marginBottom: 10,
                  }}
                >
                  Coming soon
                </p>
                <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                  Individual product reviews are in progress. Bloat is first — publishing shortly.
                  <br />
                  Check back or{" "}
                  <Link href="/reviews" style={{ color: "#C4622D", fontWeight: 600 }}>
                    browse all reviews
                  </Link>{" "}
                  in the meantime.
                </p>
              </div>
            )}
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 07" title="Common" titleItalic="questions" size="sm" />

            <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  q: "Is Arrae independently third-party tested?",
                  a: "Not in the way that phrase usually implies. Arrae reports batch-level testing for identity (FTIR), heavy metals, and microbiology — which are useful baseline checks. However, the brand holds no NSF, USP, Informed Sport, or BSCG product-level certification. Those programmes independently verify that what is on the label is actually in the capsule at the stated dose. Arrae's testing is internal and not verified by an independent certifying body.",
                },
                {
                  q: "Is the clinical evidence behind Bloat solid?",
                  a: "It is real evidence, but it has significant limitations. The headline 86% bloating reduction figure comes from a 35-person, open-label, single-arm observational trial conducted by Citrus Labs — an industry sponsor. There was no placebo group and no blinding, meaning participant-reported outcomes are subject to the placebo effect. A second, more rigorous randomised placebo-controlled trial (NCT07370740) is registered but unpublished as of May 2026. That result will be more meaningful.",
                },
                {
                  q: "How does Arrae compare on price?",
                  a: "Arrae sits at the expensive end of the DTC supplement market. Bloat at $1.47/serving costs considerably more than standalone digestive enzyme products with comparable ingredients. Calm at $2.40–3.67/serving is hard to justify on formula alone — 63mg of magnesium bisglycinate is well below the clinically studied therapeutic range for anxiety (200–400mg in most trials), and the doses of the other three actives are hidden inside a proprietary blend. You are partly paying for the brand, the packaging, and the community.",
                },
                {
                  q: "Who is Arrae actually suitable for?",
                  a: "People who want short, readable ingredient lists without a long chain of synthetic additives. People who find value in the aesthetic and lifestyle framing — treating supplements more like a skincare routine. People who have tried standard digestive enzyme products and want something with a more targeted herb combination. It is not the right choice for drug-tested athletes (no Informed Sport cert), people who want independent potency verification, or anyone prioritising maximum cost-efficiency.",
                },
                {
                  q: "Is the MB-1 'natural GLP-1 support' claim accurate?",
                  a: "It is extrapolated rather than proven. IGOB131® (African mango seed extract) has RCT data showing modest effects on body weight and metabolic markers — but the mechanism through which it might influence GLP-1 specifically is based on animal model and in vitro data, not human clinical evidence. Grains of Paradise has some thermogenesis data in humans, but at doses higher than the blend likely delivers. The GLP-1 framing is a marketing angle, not a clinically established effect.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 24px",
                    backgroundColor: "#F8F2E4",
                    border: "1px solid #D4C9B8",
                    borderRadius: 10,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#1A1714",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.q}
                  </p>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Editorial Stance ─────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12, maxWidth: 840 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#5C5650",
                  }}
                >
                  Editorial Stance
                </span>
                <span style={{ width: 20, height: 1, backgroundColor: "#3C3530", display: "inline-block" }} />
                <span
                  style={{
                    padding: "2px 8px",
                    backgroundColor: "rgba(212,201,184,0.1)",
                    border: "1px solid rgba(212,201,184,0.2)",
                    borderRadius: 4,
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "rgba(212,201,184,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  Silver Tier · BRD-009
                </span>
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
