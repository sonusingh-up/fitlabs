import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "MuscleBlaze Brand Review (2026): India's #1 Supplement Brand",
  description:
    "MuscleBlaze brand profile: India's largest sports nutrition brand, founded 2012 under HealthKart. Biozyme enzyme technology, FSSAI licensed, no Informed Sport certification. 7.5/10 avg score.",
  alternates: { canonical: "/brands/muscleblaze" },
};

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/muscleblaze#org",
  name: "MuscleBlaze",
  url: "https://fitlabreviews.com/brands/muscleblaze",
  foundingDate: "2012",
  parentOrganization: { "@type": "Organization", name: "HealthKart (Bright Sun Ventures)" },
  description:
    "MuscleBlaze is India's largest sports nutrition brand, launched in 2012 under HealthKart. Known for the Biozyme enzyme-enhanced whey range, it is sold across HealthKart, Amazon India, Flipkart, and 2,000+ offline retail locations.",
  sameAs: ["https://www.muscleblaze.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands",      item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "MuscleBlaze", item: "https://fitlabreviews.com/brands/muscleblaze" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",   value: "2012"     },
  { label: "Parent",    value: "HealthKart" },
  { label: "Products",  value: "70+"      },
  { label: "Market",    value: "India #1" },
  { label: "Avg Score", value: "7.5/10"   },
  { label: "3P Tested", value: "No"       },
];

const certifications = [
  {
    name: "FSSAI Licensed Manufacturing",
    status: "pass" as const,
    detail: "All MuscleBlaze products are manufactured at FSSAI (Food Safety and Standards Authority of India) licensed facilities. FSSAI licensing is the baseline Indian food safety requirement — it confirms regulatory compliance but does not involve independent amino acid or label-accuracy verification.",
  },
  {
    name: "Informed Sport / Informed Choice",
    status: "fail" as const,
    detail: "No Informed Sport or Informed Choice certification found on any MuscleBlaze product as of May 2026. Products are not independently tested for WADA prohibited substances.",
  },
  {
    name: "NSF-GMP Certified Facility",
    status: "fail" as const,
    detail: "No NSF International GMP certification confirmed for MuscleBlaze manufacturing facilities.",
  },
  {
    name: "USP Verified",
    status: "fail" as const,
    detail: "No USP Dietary Supplement Verification found across the MuscleBlaze range.",
  },
  {
    name: "Third-Party Batch Testing",
    status: "partial" as const,
    detail: "MuscleBlaze publishes some internal lab reports for protein content and heavy metals on their website. These are self-commissioned — no independent certifying body verifies or publishes results on an ongoing per-batch basis.",
  },
  {
    name: "Authenticity Verification (QR)",
    status: "pass" as const,
    detail: "All MuscleBlaze products carry a QR code and scratch-card authentication system verified via their app or website. This combats counterfeiting — a significant issue in the Indian supplement market — but does not independently verify label-claimed doses.",
  },
];

const greenFlags = [
  "India's largest sports nutrition brand — widest offline and online distribution across all price tiers",
  "Own manufacturing facility in Nalagarh, Himachal Pradesh — reduces reliance on contract manufacturers",
  "Biozyme enzyme complex (Aminogen® + ProHydrolase®) is a genuine formulation differentiator in the Indian market",
  "QR code + scratch-card authenticity verification on every pack — meaningful counterfeit protection",
  "FSSAI licensed — baseline Indian food safety compliance across all products",
  "Competitive INR pricing: no import duty overhead, substantially cheaper than equivalent imported brands",
  "Raw Whey range uses minimal processing and publishes protein-per-100g clearly on the label",
];

const redFlags = [
  "No independent international certification (Informed Sport, NSF, USP, BSCG) — label accuracy not independently verified",
  "Amino acid spiking allegations have historically affected the Indian whey market — MuscleBlaze has been named in independent audits, though the brand disputes this",
  "Biozyme enzyme blend component doses are not fully disclosed — Aminogen® and ProHydrolase® quantities per serving are proprietary",
  "Mass gainer range relies heavily on maltodextrin — calorie-dense but nutritionally sparse for the price",
  "Internal lab reports are self-commissioned and not independently audited per batch",
  "Some flavoured SKUs use artificial colours (tartrazine, sunset yellow) not permitted in several export markets",
];

const products = [
  {
    slug: "mb-biozyme-performance-whey",
    name: "Biozyme Performance Whey",
    category: "Whey Protein",
    price: "₹2,199–3,999",
    priceNote: "1–2 kg · ~₹73–110/serving",
    description: "Flagship protein. WPC80 base with Biozyme enzyme complex (Aminogen® + ProHydrolase®) to improve digestion and amino acid absorption. 25g protein per 33g scoop. Marketed as delivering better utilisation than standard whey. Third-party verification of absorption claims is absent.",
    keyIngredients: ["WPC80", "25g Protein", "Aminogen®", "ProHydrolase®"],
    reviewSlug: null,
    image: "/products/muscleblaze-biozyme-performance-whey.webp",
  },
  {
    slug: "mb-biozyme-whey-gold",
    name: "Biozyme Whey Gold",
    category: "Whey Protein",
    price: "₹2,799–4,999",
    priceNote: "1–2 kg · premium tier",
    description: "Premium step-up from Performance Whey. WPI + WPC blend with Biozyme complex. Higher protein density per scoop than the standard Biozyme range. Fewer flavour options. Positioned as the brand's closest equivalent to an isolate-blend.",
    keyIngredients: ["WPI + WPC Blend", "27g Protein", "Biozyme Complex", "Low Carb"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mb-raw-whey",
    name: "Raw Whey Protein",
    category: "Whey Protein",
    price: "₹1,399–2,199",
    priceNote: "1–2 kg · unflavoured",
    description: "Unflavoured WPC80 with minimal processing. No artificial sweeteners, no flavouring agents. Published protein per 100g on the label: 80g. Best value protein in the MuscleBlaze range. Often used as a base protein mixed with natural flavouring by experienced users.",
    keyIngredients: ["WPC80 (unflavoured)", "80g Protein/100g", "No Sweeteners", "Single Ingredient"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mb-creatine",
    name: "Creatine Monohydrate",
    category: "Creatine",
    price: "₹499–799",
    priceNote: "100–250g · 20–50 servings",
    description: "Micronized creatine monohydrate — 5g per serving. Unflavoured. Single ingredient. Competitively priced versus other Indian options. No third-party certification, but single-ingredient creatine has low adulteration risk versus protein blends.",
    keyIngredients: ["Creatine Monohydrate 5g", "Micronized", "Unflavoured"],
    reviewSlug: null,
    image: "/products/muscleblaze-creatine.webp",
  },
  {
    slug: "mb-super-mass-gainer",
    name: "Super Mass Gainer",
    category: "Mass Gainer",
    price: "₹1,999–3,499",
    priceNote: "3–6 kg · ~₹150–200/serving",
    description: "High-calorie mass gainer: 1,092 kcal per 3-scoop serving (330g). 31g protein (WPC blend) + 221g carbohydrates, primarily maltodextrin. 27 vitamins and minerals. The caloric density is useful for hardgainers; the carbohydrate quality (maltodextrin-dominant) is the main nutritional limitation.",
    keyIngredients: ["31g Protein Blend", "221g Carbs (Maltodextrin)", "27 Micronutrients", "1,092 kcal"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mb-pre-workout",
    name: "Beginner's Pre-Workout",
    category: "Pre-Workout",
    price: "₹799–1,199",
    priceNote: "30 servings",
    description: "Entry-level pre-workout with 150mg caffeine + beta-alanine 1.6g + L-arginine 1.5g. Conservative doses aimed at beginners and stimulant-naive users. Full ingredient disclosure on label. Caffeine and arginine doses are below clinical maximums but functional for the target audience.",
    keyIngredients: ["Caffeine 150mg", "Beta-Alanine 1.6g", "L-Arginine 1.5g", "Full disclosure"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mb-glutamine",
    name: "Glutamine",
    category: "Recovery",
    price: "₹599–999",
    priceNote: "250–500g · 50–100 servings",
    description: "Unflavoured L-glutamine — 5g per serving. Single ingredient. Published on the label in full. Glutamine supplementation has limited evidence in well-nourished athletes (Gleeson, 2008); most benefit is in recovery from intense training or illness. Priced competitively vs. imported alternatives.",
    keyIngredients: ["L-Glutamine 5g", "Single Ingredient", "Unflavoured"],
    reviewSlug: null,
    image: null,
  },
  {
    slug: "mb-mb-vite",
    name: "MB-Vite Daily Multivitamin",
    category: "Multivitamin",
    price: "₹499–799",
    priceNote: "60 tablets · 30 servings",
    description: "Daily multivitamin with 25+ nutrients. Includes vitamin D3 1000IU (higher than most Indian brand competitors), zinc 10mg, B-complex, and magnesium. One of the better-dosed multivitamins in the MuscleBlaze range at a price accessible for Indian consumers.",
    keyIngredients: ["Vitamin D3 1000IU", "Zinc 10mg", "B-Complex", "Magnesium 50mg"],
    reviewSlug: null,
    image: null,
  },
];

const faqs = [
  {
    q: "Is MuscleBlaze a trustworthy brand?",
    a: "MuscleBlaze is India's largest sports nutrition brand with over a decade of operation and FSSAI-licensed manufacturing. For most Indian consumers, it represents the best balance of availability, price, and reasonable quality assurance. The key limitation is the absence of international independent certification (Informed Sport, NSF, USP). MuscleBlaze has faced amino spiking allegations in the past — the brand disputes these claims and has published internal lab reports — but no independent per-batch certification resolves the question definitively. For recreational training, the brand is reasonable. For competitive athletes subject to drug testing, the absence of Informed Sport certification is a material gap.",
  },
  {
    q: "What is MuscleBlaze Biozyme technology?",
    a: "Biozyme is a proprietary enzyme complex incorporating Aminogen® (a patented fenugreek-derived protease blend by Triarq Health) and ProHydrolase® (a multi-enzyme protease blend by Deerland Enzymes). The enzymes are included to improve the digestion and absorption of whey protein. Aminogen® has one published study (Oben et al., 2008, Nutrition Journal) showing a 2.2x increase in serum amino acids versus plain whey in a small sample. ProHydrolase® has two small industry-sponsored trials showing reduced GI discomfort and improved BCAA levels. Both ingredients are real, but MuscleBlaze does not disclose the exact doses of either enzyme in their blend, which prevents independent efficacy assessment.",
  },
  {
    q: "How does MuscleBlaze compare to Optimum Nutrition?",
    a: "ON Gold Standard Whey has Informed Sport certification (independent banned-substance batch testing), a 20+ year track record, full amino acid disclosure, and NSF-GMP certified manufacturing. MuscleBlaze has none of these international certifications. Price per serving, however, favours MuscleBlaze significantly — after accounting for Indian import duties on ON products, MuscleBlaze Biozyme Performance Whey can be 50–60% cheaper per serving. For Indian consumers who are not competitive athletes and prioritise value, MuscleBlaze is a reasonable choice. For the highest-confidence verified product, ON remains the benchmark.",
  },
  {
    q: "Is MuscleBlaze protein authentic? How can I verify?",
    a: "Every MuscleBlaze product includes a QR code and scratch-card authentication system. Scan the QR or enter the scratch code at muscleblaze.com/authenticate to verify. Products purchased from HealthKart.com, Amazon India (sold by HealthKart), or Flipkart (sold by HealthKart) are highly likely to be authentic. The counterfeit risk is higher on offline distributors, local gym supplement shops, and third-party marketplace sellers — buy only from authorised channels. MuscleBlaze also advises checking packaging integrity: sealed inner pouch, consistent label print quality, and matching batch numbers on the tub and seal.",
  },
  {
    q: "Has MuscleBlaze been caught amino spiking?",
    a: "Yes — MuscleBlaze products were included in a widely-cited 2016 Labdoor-style independent analysis of Indian whey proteins that flagged multiple brands for lower-than-label protein content, a common indicator of amino spiking (replacing protein grams with cheaper free amino acids like taurine or glycine). MuscleBlaze disputed the findings and published counter-reports. As of 2026, the brand has made public commitments to label accuracy and publishes internal lab test reports. However, no independent per-batch third-party body verifies these results — the dispute cannot be definitively resolved without Informed Sport or equivalent independent certification.",
  },
  {
    q: "Is MuscleBlaze available outside India?",
    a: "MuscleBlaze is primarily an India-focused brand and does not have significant distribution in international markets. Some products are available on Amazon globally through grey-market sellers, but these are not authorised channels and carry higher counterfeiting risk. The brand has expressed intent to expand internationally but has not established a formal export distribution network as of May 2026. For international buyers, the import-duty economics that make MuscleBlaze competitive in India do not apply, which eliminates the primary value proposition.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",           labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",       labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial — self-reported", labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function MuscleBlazerandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .mb-mobile-toc { display: none; }
        @media (max-width: 767px) { .mb-mobile-toc { display: block; } }
        .mb-mobile-toc summary { list-style: none; }
        .mb-mobile-toc summary::-webkit-details-marker { display: none; }

        .mb-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .mb-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .mb-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .mb-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .mb-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .mb-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .mb-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .mb-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .mb-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .mb-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .mb-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .mb-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .mb-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .mb-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .mb-verdict-grid { grid-template-columns: 1fr; } }

        .mb-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .mb-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .mb-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .mb-product-grid { grid-template-columns: 1fr; } }

        .mb-faq-item summary { list-style: none; cursor: pointer; }
        .mb-faq-item summary::-webkit-details-marker { display: none; }
        .mb-faq-item[open] summary { color: #1A1714; }

        .mb-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .mb-stance-card { padding: 24px 20px; } }

        .mb-section-anchor { scroll-margin-top: 72px; }

        .mb-product-img-wrap {
          position: relative; width: 100%; aspect-ratio: 4 / 3;
          background: #F0EAD8; overflow: hidden; flex-shrink: 0;
        }
        .mb-product-img-wrap img { object-fit: contain !important; object-position: center !important; padding: 12px; }
        .mb-product-img-placeholder {
          width: 100%; aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #1A0505 0%, #3A0A0A 100%);
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
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>MuscleBlaze</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #1A0505 0%, #3D0C0C 45%, #220808 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,80,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,0,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <span style={{ position: "absolute", right: -10, bottom: -30, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(6rem, 20vw, 16rem)", fontWeight: 800, color: "rgba(255,80,0,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>MB</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(255,120,50,0.4)", textTransform: "uppercase" }}>BRD-003</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(255,120,50,0.15)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,201,184,0.15)", border: "1px solid rgba(212,201,184,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,201,184,0.8)", textTransform: "uppercase" }}>Silver Tier</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(255,120,50,0.12)", border: "1px solid rgba(255,120,50,0.25)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,160,80,0.8)", textTransform: "uppercase" }}>India #1</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              MuscleBlaze
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.55)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              India&apos;s largest sports nutrition brand. Biozyme enzyme technology, nationwide distribution, competitive INR pricing — without international third-party certification.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Whey Protein", "Creatine", "Mass Gainers", "Pre-Workout", "Glutamine", "Multivitamins", "Protein Bars"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(255,120,50,0.15)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.4)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="mb-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
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

          <details className="mb-mobile-toc" style={{ marginBottom: 8, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="overview" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="mb-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  MuscleBlaze was launched in 2012 as the in-house supplement brand of HealthKart, India&apos;s largest health and nutrition e-commerce platform. HealthKart was founded in 2011 by Prashant Tandon and Sameer Maheshwari, backed by Sequoia Capital and Temasek among others. The idea behind MuscleBlaze was straightforward: India had a fast-growing fitness market but was largely dependent on imported US brands that carried a 38.5% import duty, making them expensive for most consumers. An Indian brand could offer comparable quality at half the price.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  The brand grew rapidly through HealthKart&apos;s own distribution network — a significant structural advantage over pure third-party brands. By 2018, MuscleBlaze had become the best-selling protein brand on Amazon India and Flipkart. The brand operates its primary manufacturing facility in Nalagarh, Himachal Pradesh, with additional contract manufacturing for some SKUs.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  The Biozyme range, launched in 2020, was a deliberate move upmarket. By licensing Aminogen® and ProHydrolase® — enzyme technologies used in some US premium products — MuscleBlaze positioned itself against the perception that Indian brands use lower-quality formulations than their imported counterparts. Whether the enzyme doses are at clinically relevant levels remains an open question, as the brand does not disclose individual enzyme quantities.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "linear-gradient(135deg, #1A0505 0%, #3D0C0C 100%)", borderRadius: 10, overflow: "hidden", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src="/products/muscleblaze-biozyme-performance-whey.webp"
                    alt="MuscleBlaze Biozyme Performance Whey"
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                    unoptimized
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Headquarters",    value: "Gurugram, Haryana, India" },
                    { label: "Founded",         value: "2012" },
                    { label: "Parent company",  value: "HealthKart (Bright Sun Ventures)" },
                    { label: "Manufacturing",   value: "Nalagarh, Himachal Pradesh (own facility)" },
                    { label: "Certification",   value: "FSSAI licensed" },
                    { label: "Flagship product", value: "Biozyme Performance Whey" },
                    { label: "Distribution",    value: "HealthKart, Amazon India, Flipkart, 2,000+ offline" },
                    { label: "Market position", value: "#1 sports nutrition brand in India by market share" },
                  ].map((item) => (
                    <div key={item.label} className="mb-fact-row">
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="mb-verdict-grid">
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
          <section id="certs" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="mb-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
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
            <div style={{ padding: "16px 20px", backgroundColor: "rgba(155,32,32,0.05)", border: "1px solid rgba(155,32,32,0.15)", borderRadius: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#9B2020", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>Important</span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                FSSAI licensing confirms a brand meets India&apos;s food safety baseline — it is a legal operating requirement, not a quality differentiator. It does not involve independent amino acid verification, banned substance testing, or label-accuracy auditing in the way Informed Sport or NSF certification does. The absence of international independent certification is the single most significant gap in MuscleBlaze&apos;s quality assurance framework, and it is the primary reason the brand sits at Silver rather than Gold tier despite leading the Indian market.
              </p>
            </div>
          </section>

          {/* ── § 04 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 04" title="Key" titleItalic="product lineup" size="sm" />
            <div className="mb-product-grid">
              {products.map((product) => (
                <div key={product.slug} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>
                  {product.image ? (
                    <div className="mb-product-img-wrap">
                      <Image src={product.image} alt={`MuscleBlaze ${product.name}`} fill unoptimized />
                    </div>
                  ) : (
                    <div className="mb-product-img-placeholder">
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(255,80,0,0.05)", letterSpacing: "-0.05em" }}>{product.name[0]}</span>
                      <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(255,80,0,0.08)", border: "1px solid rgba(255,80,0,0.15)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(255,160,80,0.5)" }}>{product.category}</span>
                      <span style={{ position: "absolute", bottom: 7, left: 12, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,80,0,0.25)" }}>Image coming</span>
                    </div>
                  )}
                  <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)", flexShrink: 0 }} />
                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>{product.name}</h3>
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
          <section id="reviews" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 05" title="Reviewed" titleItalic="products" size="sm" />
            <div style={{ padding: "36px 28px", border: "1px dashed #D4C9B8", borderRadius: 10, textAlign: "center", backgroundColor: "#F8F2E4" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Coming soon</p>
              <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                Individual MuscleBlaze product reviews are in progress. Biozyme Performance Whey is first — full amino acid analysis, mixability, and a direct comparison against ON Gold Standard.{" "}
                <Link href="/reviews" style={{ color: "#C4622D", fontWeight: 600 }}>Browse all reviews →</Link>
              </p>
            </div>
          </section>

          {/* ── § 06 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="mb-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
              {faqs.map((faq, i) => (
                <details key={i} className="mb-faq-item" style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="stance" className="mb-section-anchor" style={{ marginBottom: 56 }}>
            <div className="mb-stance-card" style={{ backgroundColor: "#1A0505", borderRadius: 12, maxWidth: 840, border: "1px solid rgba(255,80,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3A1A10" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#2A0A0A", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,201,184,0.1)", border: "1px solid rgba(212,201,184,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,201,184,0.5)", textTransform: "uppercase" }}>Silver Tier · BRD-003</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                MuscleBlaze is the best-positioned brand for Indian consumers who want domestic pricing without importing supplements. The distribution advantage is real — no other brand in India combines HealthKart&apos;s retail reach with its own manufacturing. The Biozyme enzyme technology is a genuine formulation investment, not marketing noise, even if exact doses remain proprietary. For recreational gym users in India, Biozyme Performance Whey or Raw Whey paired with MuscleBlaze Creatine is a sensible, cost-effective baseline stack.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                The honest assessment requires naming the gap. The amino spiking allegations from 2016 have not been fully resolved through independent certification — they have been addressed through brand-published reports, which is not the same thing. The absence of Informed Sport or NSF certification means there is no independent body confirming that label doses of protein and key amino acids are accurate batch by batch. In a market that has historically had problems with label accuracy, this is a material limitation, not a technicality.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, margin: 0 }}>
                Silver tier reflects genuine quality across the core range with an unresolved certification gap. If MuscleBlaze pursues and achieves Informed Sport certification on its flagship protein line — as it has the distribution scale and manufacturing to do — the assessment moves up. Until then, the brand earns its position as the best Indian option while carrying the verification caveat that comes with the territory.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
