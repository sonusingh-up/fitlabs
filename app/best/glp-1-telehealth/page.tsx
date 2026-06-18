import type { Metadata } from "next";
import Link from "next/link";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "5 Best GLP-1 Telehealth Providers (2026)",
  description:
    "Best GLP-1 telehealth providers 2026 — WellMedr, Ro Body, Hers, Found & SkinnyRx ranked on price, microdosing, and consultation speed.",
  alternates: { canonical: "/best/glp-1-telehealth" },
  openGraph: {
    title: "5 Best GLP-1 Telehealth Providers (2026)",
    description:
      "We ranked 5 GLP-1 telehealth platforms on price, medication options, microdosing availability, side-effect support, and consultation speed. Here are the top picks for 2026.",
    url: "https://fitlabreviews.com/best/glp-1-telehealth",
    type: "article",
  },
};

type Provider = {
  rank: number;
  name: string;
  brand: string;
  rating: ReviewRating;
  startingPrice: string;
  priceNote: string;
  verdict: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  slug: string;
  medication: string;
  microdosing: string;
  consultSpeed: string;
  usOnly: boolean;
  badge: string;
  badgeColor: string;
  image: string;
  buyUrl: string;
  buyLabel: string;
  isAffiliate: boolean;
};

const topPicks: Provider[] = [
  {
    rank: 1,
    name: "WellMedr GLP-1 Programme",
    brand: "WellMedr",
    rating: 8 as ReviewRating,
    startingPrice: "$88/mo",
    priceNote: "compounded tirzepatide",
    verdict:
      "Editor's Choice — lowest price, microdosing option, same-day consults. Tirzepatide's 20.9% mean weight loss (SURMOUNT-1) gives it the strongest clinical evidence of any platform.",
    pros: [
      "Lowest starting price ($88/mo)",
      "Microdosing available — start at 1.25mg/week",
      "Same-day consultation in most cases",
      "Tirzepatide: best weight-loss evidence (SURMOUNT-1, 2022)",
      "TrustPilot 4.0★ (300+ reviews)",
    ],
    cons: [
      "Compounded tirzepatide only — no branded pens",
      "US residents only",
      "FDA compounding policy uncertainty (2025–2026)",
    ],
    bestFor: "First-time GLP-1 users and price-sensitive buyers",
    slug: "wellmedr",
    medication: "Compounded Tirzepatide",
    microdosing: "Yes — 1.25mg start",
    consultSpeed: "Same-day",
    usOnly: true,
    badge: "Editor's Choice",
    badgeColor: "#0F7A5A",
    image: "#",
    buyUrl: "https://www.wellmedr.com/pages/get-started-weight-loss",
    buyLabel: "Get Started at WellMedr ↗",
    isAffiliate: true,
  },
  {
    rank: 2,
    name: "Ro Body Weight Programme",
    brand: "Ro Body",
    rating: 7 as ReviewRating,
    startingPrice: "$99/mo",
    priceNote: "compounded semaglutide",
    verdict:
      "Best for semaglutide — broader medication menu including branded Wegovy. Larger review base and insurance assistance make it a strong option for patients prescribed Ozempic.",
    pros: [
      "Semaglutide + branded Wegovy/Ozempic options",
      "Insurance assistance for branded GLP-1s",
      "TrustPilot 3.9★ (1,200+ reviews)",
      "Integrated app with coaching features",
    ],
    cons: [
      "No microdosing protocol",
      "24–48hr consultation turnaround (slower than WellMedr)",
      "Branded programme runs $145–$299+/mo",
      "US only",
    ],
    bestFor: "Patients prescribed semaglutide or seeking branded meds",
    slug: "ro-body",
    medication: "Compounded Sema + Branded GLP-1s",
    microdosing: "No formal protocol",
    consultSpeed: "24–48 hours",
    usOnly: true,
    badge: "Best for Semaglutide",
    badgeColor: "#185FA5",
    image: "#",
    buyUrl: "#",
    buyLabel: "Visit Ro Body ↗",
    isAffiliate: false,
  },
  {
    rank: 3,
    name: "Hers Weight Loss",
    brand: "Hers",
    rating: 7 as ReviewRating,
    startingPrice: "$99/mo",
    priceNote: "compounded semaglutide",
    verdict:
      "Best for women — purpose-built women's platform with strong GLP-1 programme. Integrates hormone support, mental health, and weight loss in a single subscription.",
    pros: [
      "Women-focused platform with holistic care model",
      "Compounded semaglutide + branded options",
      "Mental health and hormonal support included",
      "Strong telehealth brand with broad service line",
    ],
    cons: [
      "Not tirzepatide-first (misses strongest weight-loss data)",
      "No microdosing",
      "Consultations can take 48–72 hours",
      "US only",
    ],
    bestFor: "Women wanting integrated weight + hormone + mental health care",
    slug: "hers-weight-loss",
    medication: "Compounded Sema + Branded GLP-1s",
    microdosing: "No",
    consultSpeed: "48–72 hours",
    usOnly: true,
    badge: "Best for Women",
    badgeColor: "#7B5EA7",
    image: "#",
    buyUrl: "#",
    buyLabel: "Visit Hers ↗",
    isAffiliate: false,
  },
  {
    rank: 4,
    name: "Found Weight Care",
    brand: "Found",
    rating: 7 as ReviewRating,
    startingPrice: "$119/mo",
    priceNote: "medication + coaching",
    verdict:
      "Best for coaching-led weight loss — Found pairs GLP-1 medication with a structured behavioural programme and 1-on-1 coaching. Strongest accountability model of any platform reviewed.",
    pros: [
      "1-on-1 health coaching included",
      "Structured behavioural change curriculum",
      "Multiple medication options (GLP-1 + non-GLP-1)",
      "Strong long-term support infrastructure",
    ],
    cons: [
      "Most expensive at $119/mo entry",
      "Coaching adds value but also adds cost",
      "Medication variety means GLP-1 isn't always the first option",
      "US only",
    ],
    bestFor: "Patients who want structured coaching alongside medication",
    slug: "found-weight",
    medication: "Multiple (GLP-1 + others)",
    microdosing: "No",
    consultSpeed: "24–48 hours",
    usOnly: true,
    badge: "Best for Coaching",
    badgeColor: "#0F6E56",
    image: "#",
    buyUrl: "#",
    buyLabel: "Visit Found ↗",
    isAffiliate: false,
  },
  {
    rank: 5,
    name: "SkinnyRx Weight Loss",
    brand: "SkinnyRx",
    rating: 6 as ReviewRating,
    startingPrice: "$79/mo",
    priceNote: "compounded semaglutide",
    verdict:
      "Budget entry point — SkinnyRx offers the lowest sticker price for compounded semaglutide. Lacks the microdosing, consultation speed, and support depth of top-tier platforms.",
    pros: [
      "Lowest price entry for compounded sema ($79/mo)",
      "Fast online sign-up process",
      "Widely accessible in US states",
    ],
    cons: [
      "Minimal physician support after consultation",
      "No microdosing protocol",
      "Fewer medication options",
      "Smaller review base — less proven track record",
      "US only",
    ],
    bestFor: "Budget-first buyers comfortable with lower support levels",
    slug: "skinny-rx",
    medication: "Compounded Semaglutide",
    microdosing: "No",
    consultSpeed: "24–48 hours",
    usOnly: true,
    badge: "Best Budget",
    badgeColor: "#854F0B",
    image: "#",
    buyUrl: "#",
    buyLabel: "Visit SkinnyRx ↗",
    isAffiliate: false,
  },
];

const faqItems = [
  {
    q: "What is a GLP-1 telehealth provider?",
    a: "A GLP-1 telehealth provider is an online platform that connects patients with licensed physicians who can prescribe GLP-1 receptor agonist medications (tirzepatide, semaglutide) for weight loss or type 2 diabetes management — without an in-person clinic visit. Consultations, prescriptions, and medication delivery all happen remotely.",
  },
  {
    q: "Is compounded tirzepatide or semaglutide safe?",
    a: "Compounded GLP-1 medications contain the same active molecule as branded versions (Zepbound, Wegovy, Mounjaro, Ozempic) but are manufactured by FDA-registered compounding pharmacies rather than the original manufacturer. They are not FDA-approved drugs. Safety depends on the compounding pharmacy's standards. Reputable platforms (like those ranked above) work exclusively with licensed 503B or 503A compounding pharmacies.",
  },
  {
    q: "Why is tirzepatide better than semaglutide for weight loss?",
    a: "Tirzepatide is a dual GIP/GLP-1 agonist — it activates two hunger-regulating hormone pathways simultaneously. In the SURMOUNT-5 head-to-head trial (Jastreboff 2024, NEJM), tirzepatide produced 20.2% mean body weight loss vs 13.7% for semaglutide at 72 weeks, with 31.6% of tirzepatide patients losing ≥20% of body weight vs 16.1% on semaglutide.",
  },
  {
    q: "What is microdosing GLP-1 and which providers offer it?",
    a: "Microdosing GLP-1 refers to starting below the standard initiation dose (e.g. 1.25mg tirzepatide instead of 2.5mg) and titrating more slowly to reduce nausea and GI side effects. It requires compounded medication since branded pens come in fixed doses. Of the platforms ranked here, only WellMedr explicitly offers a formalised microdosing protocol.",
  },
  {
    q: "How much does GLP-1 telehealth cost per month?",
    a: "Compounded GLP-1 telehealth starts at $79–$99/month depending on the platform and medication. Branded medication programmes (Wegovy, Zepbound) run $300–$700+/month without insurance. Insurance may cover branded options for patients with obesity-related conditions — check with each platform's insurance assistance team.",
  },
  {
    q: "Are all GLP-1 telehealth platforms US-only?",
    a: "All five platforms ranked in this roundup are US-only. GLP-1 prescriptions require a US-licensed physician, and compounded medications cannot be exported internationally. If you are outside the US, consult a local endocrinologist or weight-management clinic for access to branded GLP-1 medications.",
  },
  {
    q: "What questions should I ask at my GLP-1 consultation?",
    a: "Key questions: (1) Which medication will you prescribe — compounded or branded? (2) What is the titration schedule and can we slow it down if I experience side effects? (3) Does the platform offer microdosing? (4) How do I reach my prescriber if I have side effects? (5) What is the policy if I need to pause treatment?",
  },
];

export default function BestGlp1TelehealthPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "5 Best GLP-1 Telehealth Providers 2026",
    url: "https://fitlabreviews.com/best/glp-1-telehealth",
    numberOfItems: topPicks.length,
    itemListElement: topPicks.map((pick, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pick.name,
      url:
        pick.slug === "wellmedr"
          ? `https://fitlabreviews.com/reviews/${pick.slug}`
          : `https://fitlabreviews.com/best/glp-1-telehealth`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Best Of", item: "https://fitlabreviews.com/best" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best GLP-1 Telehealth Providers 2026",
        item: "https://fitlabreviews.com/best/glp-1-telehealth",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/best" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Best Of</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>GLP-1 Telehealth</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Hero */}
        <div style={{ marginBottom: 56, maxWidth: 780 }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" }}>ROUNDUP · 2026</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0F7A5A", whiteSpace: "nowrap" }}>5 Platforms Evaluated · US Only</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
            5 Best GLP-1 Telehealth Providers{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>— 2026 Rankings</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, marginBottom: 12 }}>
            We evaluated five GLP-1 telehealth platforms on price, medication options (tirzepatide vs semaglutide), microdosing availability, consultation speed, side-effect support, and compounding pharmacy standards. The difference between platforms is significant — especially on price and the ability to manage GI side effects.
          </p>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, marginBottom: 20 }}>
            All platforms below require a prescription from a licensed US physician and ship exclusively within the United States. Compounded GLP-1 medications are not FDA-approved drugs — they are legal custom formulations from licensed compounding pharmacies.
          </p>

          {/* US-only notice */}
          <div style={{ padding: "12px 16px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.2)", borderRadius: 8, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: "#3F4B43", margin: 0 }}>
              <strong style={{ color: "#0F7A5A" }}>US residents only.</strong>{" "}
              All GLP-1 telehealth platforms on this page operate exclusively within the United States. International readers should consult a local endocrinologist for branded GLP-1 access.
            </p>
          </div>

          {/* Affiliate + medical disclaimer strip */}
          <div style={{ padding: "10px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#6B7770", margin: 0 }}>
              <strong>Affiliate disclosure:</strong> WellMedr links are affiliate links — Fitlabreviews may earn a commission. Ro Body, Hers, Found, and SkinnyRx are editorially independent.{" "}
              <Link href="/editorial-policy" style={{ color: "#0F7A5A" }}>Policy →</Link>
              {" · "}
              <strong>Medical notice:</strong> GLP-1s are prescription medications. Consult a physician before starting.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#0F7A5A" }}>Full disclaimer →</Link>
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>
              Last updated: May 2026 · 5 platforms evaluated · Independent review
            </p>
          </div>
        </div>

        {/* Quick-jump comparison table */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="At a Glance" figure="§ 01" title="All 5 picks" titleItalic="side by side" size="sm" />
          <div style={{ overflowX: "auto", border: "1px solid #E4E8E5", borderRadius: 12 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 750, width: "100%", fontFamily: "var(--font-hanken), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#1A1714" }}>
                  {["Platform", "Medication", "Microdosing", "Starting Price", "Consult Speed", "Score", ""].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFFFFF", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 500, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topPicks.map((pick, i) => (
                  <tr key={pick.slug} style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {/* Provider logo thumbnail */}
                        <div style={{ width: 44, height: 44, backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 8, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img
                            src={pick.image}
                            alt={`${pick.brand} logo`}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{pick.brand}</div>
                          {pick.badge && (
                            <span style={{ fontSize: 9, padding: "2px 7px", backgroundColor: pick.badgeColor, color: "#fff", borderRadius: 99, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{pick.badge}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#3F4B43", verticalAlign: "middle" }}>{pick.medication}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, verticalAlign: "middle", whiteSpace: "nowrap" }}>
                      <span style={{ color: pick.microdosing.startsWith("Yes") ? "#4A7C59" : "#6B7770", fontWeight: pick.microdosing.startsWith("Yes") ? 600 : 400 }}>
                        {pick.microdosing}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "#0F7A5A", verticalAlign: "middle", whiteSpace: "nowrap" }}>{pick.startingPrice}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "#3F4B43", verticalAlign: "middle", whiteSpace: "nowrap" }}>{pick.consultSpeed}</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      <ReviewScoreBadge rating={pick.rating} size="sm" />
                    </td>
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      {pick.slug === "wellmedr" ? (
                        <Link href={`/reviews/${pick.slug}`} style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                          Review →
                        </Link>
                      ) : (
                        <span style={{ fontSize: 12, color: "#E4E8E5", fontFamily: "var(--font-jetbrains), monospace" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual picks */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Detailed Rankings" figure="§ 02" title="Each platform" titleItalic="reviewed" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {topPicks.map((pick) => (
              <div
                key={pick.slug}
                id={pick.slug}
                style={{
                  border: `1px solid ${pick.rank === 1 ? "#0F7A5A" : "#E4E8E5"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  backgroundColor: "#F6F8F6",
                }}
              >
                {/* Pick header */}
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #E4E8E5", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {/* Rank badge */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, backgroundColor: pick.rank === 1 ? "#0F7A5A" : "#F2F8F4", borderRadius: 10, flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, fontWeight: 700, color: pick.rank === 1 ? "#fff" : "#3F4B43" }}>#{pick.rank}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#6B7770", marginBottom: 4, textTransform: "uppercase" }}>
                        {pick.medication} · From {pick.startingPrice}
                      </div>
                      <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>
                        {pick.name}
                      </h2>
                    </div>
                  </div>

                  {/* Right: image + score + badge */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                    <div style={{ width: 80, height: 80, backgroundColor: "#F2F8F4", border: `2px solid ${pick.rank === 1 ? "#0F7A5A" : "#E4E8E5"}`, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img
                        src={pick.image}
                        alt={`${pick.brand} GLP-1 telehealth service`}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <ReviewScoreBadge rating={pick.rating} size="sm" />
                    {pick.badge && (
                      <span style={{ fontSize: 10, padding: "3px 10px", backgroundColor: pick.badgeColor, color: "#fff", borderRadius: 99, fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" }}>{pick.badge}</span>
                    )}
                  </div>
                </div>

                {/* Verdict + pros/cons */}
                <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Our Verdict</p>
                    <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, marginBottom: 16 }}>{pick.verdict}</p>

                    {/* Key specs mini-grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {[
                        { label: "Medication", value: pick.medication },
                        { label: "Microdosing", value: pick.microdosing },
                        { label: "Consult Speed", value: pick.consultSpeed },
                        { label: "Best For", value: pick.bestFor },
                      ].map((s) => (
                        <div key={s.label} style={{ borderLeft: "2px solid #E4E8E5", paddingLeft: 10 }}>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 3px" }}>{s.label}</p>
                          <p style={{ fontSize: 12, color: "#1A1714", fontWeight: 600, margin: 0 }}>{s.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Pros</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 16 }}>
                      {pick.pros.map((p) => (
                        <li key={p} style={{ fontSize: 13, color: "#1A1714", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#4A7C59", flexShrink: 0, marginTop: 1 }}>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#586259", marginBottom: 8 }}>Cons</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {pick.cons.map((c) => (
                        <li key={c} style={{ fontSize: 13, color: "#1A1714", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#9B2020", flexShrink: 0, marginTop: 1 }}>✗</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: CTA */}
                <div style={{ padding: "14px 24px", borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <p style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>
                    US only · From {pick.startingPrice} · {pick.medication}
                    {pick.isAffiliate && (
                      <span style={{ marginLeft: 8, color: "#0F7A5A" }}>[affiliate link]</span>
                    )}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href={pick.buyUrl}
                      target="_blank"
                      rel={pick.isAffiliate ? "nofollow noopener sponsored" : "nofollow noopener noreferrer"}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "8px 16px",
                        backgroundColor: pick.rank === 1 ? "#0F7A5A" : "#1A1714",
                        color: "#FFFFFF",
                        fontSize: 12, fontWeight: 600,
                        borderRadius: 6,
                        fontFamily: "var(--font-hanken), sans-serif",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pick.buyLabel}
                    </a>
                    {pick.slug === "wellmedr" && (
                      <Link href={`/reviews/${pick.slug}`} style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-hanken), sans-serif", whiteSpace: "nowrap" }}>
                        Full review →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence section */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Clinical Context" figure="§ 03" title="Which medication has" titleItalic="stronger evidence?" size="sm" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 24 }}>
            {[
              {
                drug: "Tirzepatide",
                brand: "Zepbound / Mounjaro",
                trial: "SURMOUNT-1",
                citation: "Jastreboff et al. (2022) — NEJM",
                weightLoss: "20.9%",
                n: "2,539",
                weeks: "72",
                highlight: true,
              },
              {
                drug: "Semaglutide",
                brand: "Wegovy / Ozempic",
                trial: "STEP-1",
                citation: "Wilding et al. (2021) — NEJM",
                weightLoss: "14.9%",
                n: "1,961",
                weeks: "68",
                highlight: false,
              },
            ].map((drug) => (
              <div
                key={drug.drug}
                style={{
                  border: `1px solid ${drug.highlight ? "#0F7A5A" : "#E4E8E5"}`,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "14px 18px", backgroundColor: drug.highlight ? "#0F7A5A" : "#F2F8F4", borderBottom: "1px solid #E4E8E5" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: drug.highlight ? "rgba(255,255,255,0.7)" : "#6B7770", margin: "0 0 4px" }}>{drug.trial} · n={drug.n}</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: drug.highlight ? "#fff" : "#1A1714", margin: 0 }}>{drug.drug}</p>
                  <p style={{ fontSize: 11, color: drug.highlight ? "rgba(255,255,255,0.8)" : "#3F4B43", margin: "2px 0 0" }}>{drug.brand}</p>
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#F6F8F6" }}>
                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Mean Weight Loss</p>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: drug.highlight ? "#0F7A5A" : "#1A1714", margin: 0 }}>{drug.weightLoss}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#586259", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Duration</p>
                      <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{drug.weeks} wks</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259", margin: "12px 0 0" }}>{drug.citation}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, padding: "18px 22px" }}>
            <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
              In the direct head-to-head SURMOUNT-5 trial (Jastreboff 2024, NEJM), tirzepatide produced <strong style={{ color: "#1A1714" }}>20.2% mean weight loss vs 13.7% for semaglutide</strong> at 72 weeks, with 31.6% of tirzepatide patients losing ≥20% of body weight compared to 16.1% on semaglutide. WellMedr&apos;s exclusive use of tirzepatide is the primary clinical reason it earns our top pick.
            </p>
          </div>
        </section>

        {/* How we ranked */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Methodology" figure="§ 04" title="How we" titleItalic="ranked these platforms" size="sm" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { criterion: "Price & Value", weight: "25%", desc: "Starting monthly cost, medication included, hidden fees, and cost per kg of weight lost." },
              { criterion: "Medication Strength", weight: "25%", desc: "Clinical evidence behind the prescribed drug — trials, effect size, head-to-head data." },
              { criterion: "Tolerability Support", weight: "20%", desc: "Microdosing availability, slow-taper protocols, physician access for side-effect management." },
              { criterion: "Consultation Speed", weight: "15%", desc: "Time from sign-up to prescription issued. Same-day vs 24–72hr turnaround." },
              { criterion: "Ongoing Support", weight: "15%", desc: "Check-in frequency, app quality, async messaging, and escalation pathways." },
            ].map((c) => (
              <div key={c.criterion} style={{ backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, padding: "16px 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 13 }}>{c.criterion}</p>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", fontWeight: 700 }}>{c.weight}</span>
                </div>
                <p style={{ fontSize: 12, color: "#3F4B43", margin: 0, lineHeight: 1.55 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="FAQ" figure="§ 05" title="Frequently Asked" titleItalic="Questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{ padding: "18px 24px", borderBottom: i < faqItems.length - 1 ? "1px solid #F2F8F4" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}
              >
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 8, fontSize: 15 }}>{item.q}</p>
                <p style={{ fontSize: 14, color: "#3F4B43", margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <div style={{ padding: "24px 28px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 14 }}>Related Articles</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { href: "/reviews/wellmedr", label: "WellMedr Full Review (2026)", sub: "Our #1 pick — in-depth FSP analysis" },
              { href: "/ingredients/tirzepatide", label: "Tirzepatide: Mechanism & Evidence", sub: "Deep-dive into the SURMOUNT trial programme" },
              { href: "/research/microdose-glp1", label: "Microdose GLP-1: Does It Work?", sub: "Evidence for sub-threshold dosing protocols" },
              { href: "/compare/wellmedr-vs-ro-body", label: "WellMedr vs Ro Body", sub: "Head-to-head comparison of our top 2 picks" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none", display: "block", padding: "14px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                <p style={{ fontSize: 14, color: "#0F7A5A", fontWeight: 700, margin: "0 0 4px" }}>{link.label} →</p>
                <p style={{ fontSize: 12, color: "#6B7770", margin: 0 }}>{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
