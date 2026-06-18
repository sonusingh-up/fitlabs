import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "AS-IT-IS Nutrition Brand Review (2026): Purist Silver Tier",
  description:
    "AS-IT-IS Nutrition brand profile: Bengaluru-based purist supplement brand, zero fillers, single-ingredient products, best price-per-gram in USA. No international third-party certification. 8.0/10 avg score.",
  alternates: { canonical: "/brands/as-it-is" },
};

// ── Schemas ────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/brands/as-it-is#org",
  name: "AS-IT-IS Nutrition",
  url: "https://fitlabreviews.com/brands/as-it-is",
  foundingDate: "2016",
  description:
    "AS-IT-IS Nutrition is an independent American supplement brand founded in 2016 in Bengaluru. Known for single-ingredient products with no fillers, no proprietary blends, and the lowest price-per-gram for raw protein in USA.",
  sameAs: ["https://www.asitisnutrition.com"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://fitlabreviews.com" },
    { "@type": "ListItem", position: 2, name: "Brands",           item: "https://fitlabreviews.com/brands" },
    { "@type": "ListItem", position: 3, name: "AS-IT-IS Nutrition", item: "https://fitlabreviews.com/brands/as-it-is" },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: "Founded",   value: "2016"       },
  { label: "HQ",        value: "Bengaluru"  },
  { label: "Products",  value: "30+"        },
  { label: "Philosophy", value: "Zero filler" },
  { label: "Avg Score", value: "8.0/10"     },
  { label: "3P Tested", value: "No"         },
];

const certifications = [
  {
    name: "FSSAI Licensed Manufacturing",
    status: "pass" as const,
    detail: "AS-IT-IS products are manufactured at FSSAI-licensed facilities. This confirms basic food safety compliance under American law — it does not involve independent amino acid verification or label-accuracy auditing.",
  },
  {
    name: "Informed Sport / Informed Choice",
    status: "fail" as const,
    detail: "No Informed Sport or Informed Choice certification on any AS-IT-IS product. Products are not independently tested for WADA prohibited substances.",
  },
  {
    name: "NSF-GMP Certified Facility",
    status: "fail" as const,
    detail: "No NSF International GMP certification confirmed for AS-IT-IS manufacturing facilities.",
  },
  {
    name: "Third-Party Batch Testing",
    status: "fail" as const,
    detail: "No independent per-batch test certificates published. AS-IT-IS does not operate a QR code or scratch-card authentication system — there is no on-pack mechanism to verify authenticity or label accuracy for specific lots.",
  },
  {
    name: "Label Transparency (Protein/100g)",
    status: "pass" as const,
    detail: "AS-IT-IS prominently states protein content per 100g on every product — a practice that makes cross-brand price comparisons straightforward. This is a voluntary transparency choice, not a certification.",
  },
  {
    name: "FDA Record",
    status: "partial" as const,
    detail: "As an USA-only brand, AS-IT-IS does not fall under US FDA jurisdiction. No FSSAI enforcement actions or product alerts found as of May 2026.",
  },
];

const greenFlags = [
  "Single-ingredient products — the unflavoured range contains exactly what's on the label and nothing else",
  "Protein per 100g stated clearly on every product, making price-per-gram comparisons honest and easy",
  "Best price-per-gram for raw WPC80 in USA as of mid-2026 — roughly 30–40% cheaper than MuscleBlaze equivalent",
  "No artificial sweeteners, flavours, or colours in the unflavoured range — zero compromise on the core product",
  "FSSAI licensed — baseline American food safety compliance met",
  "Builds its entire value proposition on ingredient purity, not brand premium or marketing spend",
];

const redFlags = [
  "No independent international certification — no Informed Sport, NSF, USP, or BSCG to verify label claims",
  "No QR code or batch-level authentication on packaging — counterfeit products are indistinguishable without testing",
  "Manufacturing facility location not publicly disclosed — no audit trail available to consumers",
  "Flavoured range uses sucralose and artificial flavours — undermines the brand's zero-filler identity for that segment",
  "No third-party batch test results published — purity claims rest entirely on the brand's word",
  "Range is limited to basics — nothing beyond protein, creatine, aminos, and vitamins",
];

const products = [
  {
    name: "Whey Protein 80%",
    category: "Whey Protein",
    price: "₹1,099–1,799",
    priceNote: "500g–1kg · ~80g protein/100g",
    description: "WPC80, unflavoured. Protein content per 100g stated on label: 80g. No sweeteners, no flavouring, no lecithin. Mixes less smoothly than instantised products — expect some foam and minor residue with a shaker. The lowest cost-per-gram pure protein in USA at mid-2026 pricing.",
    keyIngredients: ["WPC80", "80g Protein/100g", "Unflavoured", "Single Ingredient"],
    reviewSlug: null,
  },
  {
    name: "Whey Protein Isolate",
    category: "Whey Protein Isolate",
    price: "₹1,799–2,799",
    priceNote: "500g–1kg · ~90g protein/100g",
    description: "WPI, unflavoured. 90g protein per 100g — higher density than the WPC80 range. Lower lactose content than concentrate. No additives. For those with moderate lactose sensitivity who want a pure isolate without paying for imported brand premiums.",
    keyIngredients: ["WPI", "90g Protein/100g", "Unflavoured", "Low Lactose"],
    reviewSlug: null,
  },
  {
    name: "Creatine Monohydrate",
    category: "Creatine",
    price: "₹349–599",
    priceNote: "100–250g · 20–50 servings",
    description: "Micronized creatine monohydrate, 5g per serving, unflavoured, single ingredient. Among the cheapest creatine options available in USA. Single-ingredient creatine has low adulteration risk versus protein blends — the purist format plays to the category's low-complexity advantage.",
    keyIngredients: ["Creatine Monohydrate 5g", "Micronized", "Single Ingredient"],
    reviewSlug: null,
  },
  {
    name: "BCAA 2:1:1",
    category: "Amino Acids",
    price: "₹599–999",
    priceNote: "200–400g · unflavoured",
    description: "Leucine 2.5g, Isoleucine 1.25g, Valine 1.25g per serving — 2:1:1 ratio, full disclosure. Unflavoured powder. No fillers. Leucine dose is below the 3.5g threshold used in the more-cited MPS studies (Norton & Layman, 2006), though the 2.5g dose is within a useful range for intra-workout use.",
    keyIngredients: ["Leucine 2.5g", "Isoleucine 1.25g", "Valine 1.25g", "No fillers"],
    reviewSlug: null,
  },
  {
    name: "L-Glutamine",
    category: "Recovery",
    price: "₹399–699",
    priceNote: "100–250g · 20–50 servings",
    description: "L-Glutamine powder, 5g per serving, single ingredient. Evidence for glutamine supplementation in well-nourished athletes is limited (Gleeson, 2008, Nutrition); the more relevant use case is recovery from intense prolonged training or during illness. Priced lower than every major American brand equivalent.",
    keyIngredients: ["L-Glutamine 5g", "Single Ingredient", "Unflavoured"],
    reviewSlug: null,
  },
  {
    name: "Caffeine Anhydrous",
    category: "Stimulant",
    price: "₹249–399",
    priceNote: "50–100g · 200 servings",
    description: "Pure caffeine anhydrous powder — 200mg per scoop (0.2g). One of the few brands in USA selling standalone caffeine powder. Useful for users who want a measured stimulant dose without a full pre-workout formula. Requires a milligram-accurate scale — a measuring spoon is not adequate.",
    keyIngredients: ["Caffeine Anhydrous 200mg/scoop", "Single Ingredient"],
    reviewSlug: null,
  },
  {
    name: "Casein Protein",
    category: "Casein Protein",
    price: "₹1,499–2,499",
    priceNote: "500g–1kg · slow-release",
    description: "Micellar casein, unflavoured. Slower digestion than whey — 6–8 hour amino acid release window, suited for pre-sleep use. Protein per 100g: approximately 80g. Thicker texture than whey; mixes better in a blender than a shaker.",
    keyIngredients: ["Micellar Casein", "~80g Protein/100g", "Unflavoured", "Pre-sleep use"],
    reviewSlug: null,
  },
  {
    name: "Multivitamin + Minerals",
    category: "Multivitamin",
    price: "₹299–499",
    priceNote: "60–120 tablets",
    description: "Standard vitamin and mineral tablet. Includes vitamin D3, zinc, B-complex, and iron. Doses are on the conservative end — this is a baseline coverage product rather than a high-dose sports multivitamin. At this price point, it covers daily micronutrient gaps for active individuals without complexity.",
    keyIngredients: ["Vitamin D3", "Zinc", "B-Complex", "Iron"],
    reviewSlug: null,
  },
];

const faqs = [
  {
    q: "Is AS-IT-IS Whey Protein really free of fillers?",
    a: "The unflavoured range is genuinely minimal. The ingredient list on AS-IT-IS Whey Protein 80% is typically one item: whey protein concentrate. There are no lecithins, no gums, no sweeteners, and no flavour agents. The practical consequence is reduced mixability — without lecithin instantisation, you will get more foam and residue in a shaker compared to branded products like Gold Standard or Impact Whey. If you blend it or use a milk base, the texture difference is less noticeable. The filler-free claim is accurate for the unflavoured SKUs.",
  },
  {
    q: "How does AS-IT-IS Whey compare to MuscleBlaze Biozyme?",
    a: "AS-IT-IS Whey Protein 80% and MuscleBlaze Biozyme Performance Whey are both WPC80 bases, but they are built on different propositions. AS-IT-IS strips everything out and passes the cost saving to the buyer — you get roughly 30–40% more protein per rupee versus Biozyme. MuscleBlaze adds Aminogen® and ProHydrolase® enzyme blends and claims improved absorption, but does not disclose the enzyme doses, which makes independent efficacy assessment impossible. AS-IT-IS does not add enzymes, does not have Biozyme's QR code authentication system, and does not have independent certification either. The honest comparison: AS-IT-IS wins on cost-per-gram and ingredient minimalism; MuscleBlaze wins on counterfeit protection and distribution support.",
  },
  {
    q: "Is AS-IT-IS protein authentic on Amazon USA?",
    a: "Unlike MuscleBlaze, AS-IT-IS does not use a QR code or batch authentication system. The primary way to reduce counterfeit risk is to buy exclusively from the AS-IT-IS brand storefront on Amazon USA — not from third-party marketplace sellers, even if listed as 'fulfilled by Amazon'. FBA fulfilment does not guarantee the product in the Amazon warehouse is from the brand directly. The absence of any on-pack authentication mechanism is a genuine limitation for a brand that competes on ingredient purity — there is currently no consumer-level way to verify the contents of a specific tub without independent lab testing.",
  },
  {
    q: "Why is AS-IT-IS so much cheaper than other supplement brands?",
    a: "Three reasons: no marketing spend (AS-IT-IS does not run TV campaigns, has no celebrity endorsements, and has minimal retail distribution outside Amazon), no flavour or additive costs in the unflavoured range, and no third-party certification overhead — Informed Sport and NSF certification programmes involve per-lot testing costs that brands typically factor into retail pricing. The cost structure is lean by design. The trade-off is that the savings on certification are passed to you, along with the absence of the verification those programmes provide.",
  },
  {
    q: "Has AS-IT-IS been independently tested for protein content accuracy?",
    a: "Not by a formal third-party certification programme. AS-IT-IS does not publish independent lab certificates on its product pages or website. There are informal community-level tests visible in American fitness forums and YouTube channels (primarily HPLC protein content tests run by individual reviewers), and results have generally been consistent with label claims for the core WPC80 product. However, these are not systematic or ongoing — they are point-in-time tests of specific batches by non-accredited testers. The absence of formal certification means label accuracy for any given batch you purchase cannot be independently confirmed.",
  },
  {
    q: "Is AS-IT-IS suitable for competitive athletes?",
    a: "No, if drug testing applies to your sport. AS-IT-IS has no Informed Sport, NSF Certified for Sport, or BSCG certification — none of the products have been tested for WADA prohibited substances. Using an uncertified product in a drug-tested sport carries a risk that many sports' anti-doping programmes treat as the athlete's responsibility regardless of the brand's own claims. For recreational training with no drug testing requirement, the absence of sport certification is not a practical problem — the purity of the unflavoured range is well-regarded. But the certification gap is disqualifying for tested athletes.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

const statusStyles = {
  pass:    { dot: "#1A6B3A", bg: "rgba(26,107,58,0.07)",   border: "rgba(26,107,58,0.2)",   label: "Confirmed",           labelColor: "#1A6B3A" },
  fail:    { dot: "#9B2020", bg: "rgba(155,32,32,0.06)",   border: "rgba(155,32,32,0.18)",  label: "Not certified",       labelColor: "#9B2020" },
  partial: { dot: "#92620A", bg: "rgba(146,98,10,0.07)",   border: "rgba(146,98,10,0.2)",   label: "Partial",             labelColor: "#92620A" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function AsItIsNutritionBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .aii-mobile-toc { display: none; }
        @media (max-width: 767px) { .aii-mobile-toc { display: block; } }
        .aii-mobile-toc summary { list-style: none; }
        .aii-mobile-toc summary::-webkit-details-marker { display: none; }

        .aii-stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
        @media (max-width: 900px) {
          .aii-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .aii-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .aii-stats-grid > div:nth-child(3n) { border-right: none !important; }
          .aii-stats-grid > div:nth-last-child(-n+3) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .aii-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .aii-stats-grid > div { border-right: 1px solid #D4C9B8 !important; border-bottom: 1px solid #D4C9B8; }
          .aii-stats-grid > div:nth-child(2n) { border-right: none !important; }
          .aii-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        .aii-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 767px) { .aii-overview-grid { grid-template-columns: 1fr; gap: 24px; } }

        .aii-fact-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 12px 16px; background: #F8F2E4; border: 1px solid #D4C9B8; border-radius: 8px; }
        @media (max-width: 480px) { .aii-fact-row { grid-template-columns: 1fr; gap: 4px; } }

        .aii-verdict-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .aii-verdict-grid { grid-template-columns: 1fr; } }

        .aii-cert-row { display: grid; grid-template-columns: 220px 160px 1fr; gap: 16px; align-items: center; padding: 14px 20px; border-radius: 8px; }
        @media (max-width: 700px) { .aii-cert-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; } }

        .aii-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        @media (max-width: 360px) { .aii-product-grid { grid-template-columns: 1fr; } }

        .aii-faq-item summary { list-style: none; cursor: pointer; }
        .aii-faq-item summary::-webkit-details-marker { display: none; }

        .aii-stance-card { padding: 32px 36px; }
        @media (max-width: 640px) { .aii-stance-card { padding: 24px 20px; } }

        .aii-section-anchor { scroll-margin-top: 72px; }

        .aii-product-placeholder {
          width: 100%; aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #0D1F12 0%, #142A1A 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; flex-shrink: 0;
        }
      `}</style>

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }].map((crumb, i) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
              </span>
            ))}
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>AS-IT-IS Nutrition</span>
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #0D1F12 0%, #1A3320 45%, #0F2216 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(80,200,100,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(80,200,100,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <span style={{ position: "absolute", right: -10, bottom: -30, fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(6rem, 18vw, 14rem)", fontWeight: 800, color: "rgba(80,200,100,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>AII</span>

          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "40px 24px 36px", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "rgba(80,200,100,0.3)", textTransform: "uppercase" }}>BRD-005</span>
              <span style={{ width: 16, height: 1, backgroundColor: "rgba(80,200,100,0.1)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", color: "#C4622D", textTransform: "uppercase" }}>Brand Profile</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(212,201,184,0.15)", border: "1px solid rgba(212,201,184,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,201,184,0.8)", textTransform: "uppercase" }}>Silver Tier</span>
              <span style={{ padding: "3px 10px", backgroundColor: "rgba(80,200,100,0.1)", border: "1px solid rgba(80,200,100,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(100,220,120,0.75)", textTransform: "uppercase" }}>Zero Filler</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, marginBottom: 10 }}>
              AS-IT-IS Nutrition
            </h1>
            <p style={{ fontSize: "clamp(13px, 3.5vw, 15px)", color: "rgba(242,235,217,0.55)", lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
              Bengaluru-based purist brand. Single-ingredient products, nothing added, best price-per-gram for raw protein in USA — without any international third-party certification.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Whey Protein", "Whey Isolate", "Creatine", "BCAAs", "Glutamine", "Caffeine", "Multivitamins"].map((cat) => (
                <span key={cat} style={{ padding: "4px 10px", border: "1px solid rgba(80,200,100,0.1)", borderRadius: 6, fontSize: 10, color: "rgba(242,235,217,0.4)", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.07em" }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div className="aii-stats-grid px-page" style={{ maxWidth: 1280, margin: "0 auto" }}>
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
          <details className="aii-mobile-toc" style={{ marginBottom: 8, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="overview" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Background" figure="§ 01" title="Brand" titleItalic="overview" size="sm" />
            <div className="aii-overview-grid">
              <div>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  AS-IT-IS Nutrition launched in 2016 in Bengaluru with a single, deliberately narrow brief: sell raw supplement ingredients without adding anything to them. No flavours, no sweeteners, no fillers, and — critically — no pricing premium for any of those things. The founding came from a frustration that was common in the American fitness market at the time: most available protein supplements either used proprietary blends that hid what was in them, or charged meaningfully more than the ingredient itself cost to manufacture.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8, marginBottom: 16 }}>
                  The brand built its distribution almost entirely through Amazon USA. This was not a backup channel — it was the strategy. By avoiding brick-and-mortar retail margins and gym distributor mark-ups, AS-IT-IS could price at a level that undercut every major American and imported competitor on cost-per-gram. By 2020, the brand had become the most reviewed protein on Amazon USA in the unflavoured category.
                </p>
                <p style={{ fontSize: 15, color: "#3C3530", lineHeight: 1.8 }}>
                  What the brand has not done in that time is invest in international third-party certification. There is no Informed Sport testing, no NSF audit, and no published batch-level quality certificates. The brand&apos;s position is that the ingredient purity speaks for itself — an argument that works as long as independent community testing keeps supporting the label claims, and breaks down if it does not.
                </p>
              </div>

              {/* Key facts panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Brand identity visual */}
                <div style={{ width: "100%", aspectRatio: "16 / 9", background: "linear-gradient(135deg, #0D1F12 0%, #1A3320 100%)", borderRadius: 10, border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, color: "rgba(242,235,217,0.12)", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>AS-IT-IS</p>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(80,200,100,0.25)", marginTop: 8 }}>Nothing Added. Nothing Hidden.</p>
                  </div>
                </div>

                {[
                  { label: "Headquarters",    value: "Bengaluru, Karnataka, USA" },
                  { label: "Founded",         value: "2016" },
                  { label: "Ownership",       value: "Independent (privately held)" },
                  { label: "Manufacturing",   value: "USA (facility not publicly disclosed)" },
                  { label: "Certification",   value: "FSSAI licensed only" },
                  { label: "Distribution",    value: "Amazon USA (primary), own website" },
                  { label: "Flagship product", value: "Whey Protein 80% (unflavoured)" },
                  { label: "Core proposition", value: "Best price-per-gram for raw protein in USA" },
                ].map((item) => (
                  <div key={item.label} className="aii-fact-row">
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8480", margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: "#3C3530", margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── § 02 Quick Verdict ─────────────────────────────────────────── */}
          <section id="verdict" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Assessment" figure="§ 02" title="Quick" titleItalic="verdict" size="sm" />
            <div className="aii-verdict-grid">
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
          <section id="certs" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Verification" figure="§ 03" title="Certifications &" titleItalic="testing" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {certifications.map((cert) => {
                const s = statusStyles[cert.status];
                return (
                  <div key={cert.name} className="aii-cert-row" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
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
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#92620A", textTransform: "uppercase", paddingTop: 2, flexShrink: 0 }}>The gap</span>
              <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                AS-IT-IS occupies an unusual position: the brand&apos;s entire identity is built on transparency and purity, yet there is no independent body that verifies those claims batch by batch. Community testing on Amazon USA has generally been consistent with label claims for the core WPC80 product, which is meaningful — but it is informal, not systematic. The gap between &ldquo;community says it checks out&rdquo; and &ldquo;independently certified&rdquo; is the central limitation. For a brand that markets itself on honesty, closing this gap through Informed Sport or equivalent certification would be the single most impactful quality upgrade available.
              </p>
            </div>
          </section>

          {/* ── § 04 Product Lineup ────────────────────────────────────────── */}
          <section id="products" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Products" figure="§ 04" title="Key" titleItalic="product lineup" size="sm" />
            <div className="aii-product-grid">
              {products.map((product) => (
                <div key={product.name} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4", display: "flex", flexDirection: "column" }}>
                  <div className="aii-product-placeholder">
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2.8rem", fontWeight: 800, color: "rgba(80,200,100,0.05)", letterSpacing: "-0.05em" }}>{product.name[0]}</span>
                    <span style={{ position: "absolute", top: 8, right: 10, padding: "2px 8px", backgroundColor: "rgba(80,200,100,0.07)", border: "1px solid rgba(80,200,100,0.12)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "rgba(100,220,120,0.45)" }}>{product.category}</span>
                  </div>
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
                      <span style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>Review in progress</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── § 05 Published Reviews ─────────────────────────────────────── */}
          <section id="reviews" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="Reviews" figure="§ 05" title="Reviewed" titleItalic="products" size="sm" />
            <div style={{ padding: "36px 28px", border: "1px dashed #D4C9B8", borderRadius: 10, textAlign: "center", backgroundColor: "#F8F2E4" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Coming soon</p>
              <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>
                AS-IT-IS Whey Protein 80% review is first — full protein yield test, mixability, and a direct price-per-gram comparison against MuscleBlaze and ON.{" "}
                <Link href="/reviews" style={{ color: "#C4622D", fontWeight: 600 }}>Browse all reviews →</Link>
              </p>
            </div>
          </section>

          {/* ── § 06 FAQ ───────────────────────────────────────────────────── */}
          <section id="faq" className="aii-section-anchor" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #D4C9B8" }}>
            <SectionHeading label="FAQ" figure="§ 06" title="Common" titleItalic="questions" size="sm" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
              {faqs.map((faq, i) => (
                <details key={i} className="aii-faq-item" style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
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
          <section id="stance" className="aii-section-anchor" style={{ marginBottom: 56 }}>
            <div className="aii-stance-card" style={{ backgroundColor: "#0D1F12", borderRadius: 12, maxWidth: 840, border: "1px solid rgba(80,200,100,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1A3A20" }}>Editorial Stance</span>
                <span style={{ width: 16, height: 1, backgroundColor: "#142A1A", display: "inline-block" }} />
                <span style={{ padding: "2px 8px", backgroundColor: "rgba(212,201,184,0.1)", border: "1px solid rgba(212,201,184,0.2)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "rgba(212,201,184,0.5)", textTransform: "uppercase" }}>Silver Tier · BRD-005</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                AS-IT-IS is the most honest brand in the American supplement market in terms of what it claims to be. The product philosophy is genuine — the unflavoured range really does contain a single ingredient, the protein-per-100g is clearly stated, and the price-per-gram is the lowest available in USA for a comparable raw ingredient. For a recreational gym user in USA who buys from the brand storefront on Amazon and uses unflavoured protein, this is a legitimate, no-nonsense choice.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, marginBottom: 14 }}>
                The contradiction the brand has not resolved is this: it builds its entire identity on transparency and purity, but there is no independent party that verifies those claims. Community testing has been broadly favourable — but community testing is informal, conducted by individual reviewers with HPLC access, and not systematic across batches. A brand that genuinely believes its own purity claims has every reason to submit to Informed Sport or equivalent independent per-batch certification. AS-IT-IS has not done that. The absence is noticeable precisely because the brand makes such a point of honesty.
              </p>
              <p style={{ fontSize: 15, color: "rgba(242,235,217,0.65)", lineHeight: 1.85, margin: 0 }}>
                Silver tier is the correct placement: better than most American competitors on ingredient minimalism and pricing, below Gold because there is no independent verification to back the purity claims. If Informed Sport certification were added to the core WPC80 and WPI products, this assessment changes. Until then, AS-IT-IS earns its Silver on the strength of its product philosophy and the informal evidence that the philosophy is being followed.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
