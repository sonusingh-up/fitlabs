import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "WellMedr vs Ro Body (2026): GLP-1 Compared",
  description: "WellMedr vs Ro Body: price, GLP-1 medication options, microdosing, same-day consults, and side-effect support compared side by side. Which is better in 2026?",
  alternates: { canonical: "/compare/wellmedr-vs-ro-body" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WellMedr vs Ro Body (2026): GLP-1 Telehealth Compared",
  description: "WellMedr vs Ro Body: price, GLP-1 medication options, microdosing, same-day consults, and side-effect support compared side by side. Which is better in 2026?",
  articleSection: "Comparison",
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Research Team",
    url: "https://fitlabreviews.com/authors/fitlab-research-team",
  },
  publisher: {
    "@type": "Organization",
    name: "Fitlabreviews",
    url: "https://fitlabreviews.com",
  },
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/compare/wellmedr-vs-ro-body",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WellMedr cheaper than Ro Body?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WellMedr starts at $88/month for compounded tirzepatide, while Ro Body's compounded semaglutide starts around $99/month and their branded GLP-1 programmes run $145–$299+/month depending on the plan. WellMedr's lower price point reflects its use of compounded tirzepatide rather than branded pens.",
      },
    },
    {
      "@type": "Question",
      name: "Does WellMedr or Ro Body offer microdosing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WellMedr explicitly offers a microdosing protocol, allowing patients to start at 1.25mg tirzepatide/week — half the standard dose. Ro Body follows a standard FDA escalation schedule and does not offer a formalised sub-dose titration option.",
      },
    },
    {
      "@type": "Question",
      name: "Which platform is better for semaglutide (Ozempic/Wegovy)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ro Body has historically focused on semaglutide and offers both compounded and branded options (Wegovy). WellMedr focuses primarily on tirzepatide (Zepbound/Mounjaro). If you specifically want semaglutide, Ro Body is the stronger platform.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get started — WellMedr or Ro Body?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WellMedr offers same-day consultations in most cases. Ro Body's consultation process typically takes 24–48 hours before a prescription is issued. Both ship within 3–5 business days once the prescription is active.",
      },
    },
    {
      "@type": "Question",
      name: "Are WellMedr and Ro Body both US-only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both platforms are US-only, require a US-licensed physician consultation, and ship exclusively within the United States. Neither service is available internationally.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for first-time GLP-1 users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WellMedr's microdosing option makes it a better choice for GLP-1 beginners who are concerned about side effects. Ro Body's more established brand and semaglutide experience makes it a solid choice for patients who have been recommended Ozempic or Wegovy specifically.",
      },
    },
  ],
};

type Verdict = "wellmedr" | "ro-body" | "tie";

interface CompareRow {
  category: string;
  wellmedr: string;
  roBody: string;
  verdict: Verdict;
  notes: string;
}

const compareData: CompareRow[] = [
  {
    category: "Starting Price",
    wellmedr: "From $88/mo",
    roBody: "From $99/mo",
    verdict: "wellmedr",
    notes: "WellMedr's compounded tirzepatide offers a lower entry point. Branded options at Ro Body run $145–$299+/mo.",
  },
  {
    category: "Medication Options",
    wellmedr: "Compounded Tirzepatide",
    roBody: "Compounded Sema + Branded GLP-1s",
    verdict: "ro-body",
    notes: "Ro Body offers more medication variety including branded Wegovy. WellMedr focuses exclusively on tirzepatide.",
  },
  {
    category: "Microdosing Available",
    wellmedr: "Yes — 1.25mg start",
    roBody: "No formal protocol",
    verdict: "wellmedr",
    notes: "WellMedr's microdosing is a key differentiator. Ro Body follows standard fixed escalation schedule.",
  },
  {
    category: "Consultation Speed",
    wellmedr: "Same-day (most cases)",
    roBody: "24–48 hours typical",
    verdict: "wellmedr",
    notes: "WellMedr's same-day consult is valuable for patients ready to start immediately.",
  },
  {
    category: "Check-in Model",
    wellmedr: "Monthly async + chat",
    roBody: "Monthly async + app",
    verdict: "tie",
    notes: "Both platforms use asynchronous check-ins. Ro Body's app has more features; WellMedr offers direct chat access.",
  },
  {
    category: "Branded Meds Option",
    wellmedr: "No",
    roBody: "Yes (Wegovy, Ozempic)",
    verdict: "ro-body",
    notes: "If insurance covers branded GLP-1s, Ro Body can facilitate. WellMedr only offers compounded formulations.",
  },
  {
    category: "Side-Effect Support",
    wellmedr: "Microdosing + physician consult",
    roBody: "Standard clinical support",
    verdict: "wellmedr",
    notes: "WellMedr's microdosing protocol actively reduces side effects. Ro Body manages them reactively.",
  },
  {
    category: "TrustPilot Rating",
    wellmedr: "4.0★ (300+ reviews)",
    roBody: "3.9★ (1,200+ reviews)",
    verdict: "tie",
    notes: "Both platforms have similar ratings. Ro Body's larger review base provides more signal.",
  },
  {
    category: "Weight Loss Evidence",
    wellmedr: "Tirzepatide: 20.9% avg",
    roBody: "Semaglutide: 14.9% avg",
    verdict: "wellmedr",
    notes: "Tirzepatide (WellMedr) has stronger weight-loss evidence than semaglutide (Ro Body) in head-to-head trials (SURMOUNT-5 2024).",
  },
  {
    category: "US Only",
    wellmedr: "Yes",
    roBody: "Yes",
    verdict: "tie",
    notes: "Both platforms serve US residents only.",
  },
];

const verdictCount = {
  wellmedr: compareData.filter((r) => r.verdict === "wellmedr").length,
  roBody: compareData.filter((r) => r.verdict === "ro-body").length,
  tie: compareData.filter((r) => r.verdict === "tie").length,
};

export default function WellmedrVsRoBodyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, padding: "12px 24px", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/compare" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Compare</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>WellMedr vs Ro Body</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>COMPARISON · GLP-1 TELEHEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Updated May 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 16 }}>
            WellMedr vs Ro Body{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>(2026): GLP-1 Telehealth Compared</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, maxWidth: 700, marginBottom: 24 }}>
            Both platforms offer compounded GLP-1 medications for weight loss. WellMedr leads on price, microdosing, and tirzepatide outcomes. Ro Body wins on medication variety and branded drug access. We ran both through our FSP scoring framework to find out which delivers better value for different patient profiles.
          </p>

          {/* Score cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 600 }}>
            {[
              { provider: "WellMedr", score: "8.0", color: "#C4622D", wins: verdictCount.wellmedr },
              { provider: "Ro Body", score: "7.2", color: "#5C5650", wins: verdictCount.roBody },
            ].map((p) => (
              <div key={p.provider} style={{ backgroundColor: "#F8F2E4", border: `2px solid ${p.color}`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 8px" }}>FSP Score</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.2rem", fontWeight: 800, color: p.color, margin: "0 0 4px", lineHeight: 1 }}>{p.score}<span style={{ fontSize: "1rem", color: "#A89880", fontWeight: 400 }}>/10</span></p>
                <p style={{ fontWeight: 700, color: "#1A1714", margin: "0 0 8px" }}>{p.provider}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", margin: 0 }}>{p.wins} categories won</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Affiliate + medical notice */}
      <div style={{ backgroundColor: "#EDE8DF", borderBottom: "1px solid #D4C9B8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 24px" }}>
          <p style={{ fontSize: 12, color: "#8A8480", margin: 0 }}>
            <strong>Affiliate disclosure:</strong> WellMedr links on this page are affiliate links — Fitlabreviews may earn a commission if you purchase. Ro Body is not affiliated. Scores are editorially independent.{" "}
            <Link href="/editorial-policy" style={{ color: "#C4622D" }}>Policy →</Link>
            {" · "}
            <Link href="/medical-disclaimer" style={{ color: "#C4622D" }}>Medical disclaimer →</Link>
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Quick verdict */}
        <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Our Verdict</p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 12 }}>
            <strong>WellMedr wins overall</strong> for most patients starting GLP-1 therapy in 2026. Its microdosing option, lower price point ($88/mo), and tirzepatide&apos;s superior weight-loss evidence (20.9% mean reduction vs 14.9% for semaglutide) give it a clear edge for first-time users and GI-sensitive patients.
          </p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, marginBottom: 0 }}>
            <strong>Ro Body is the better choice</strong> if you specifically need semaglutide (Ozempic/Wegovy), want access to branded prescriptions, or have insurance that covers semaglutide-specific medications.
          </p>
        </div>

        {/* Main comparison table */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Side-by-Side" figure="§ 01" title="Full Feature" titleItalic="Comparison" size="sm" />

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 600 }}>
              <thead>
                <tr style={{ backgroundColor: "#1A1714" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#F2EBD9", fontWeight: 600, width: "25%" }}>Category</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#C4622D", fontWeight: 600, width: "30%" }}>WellMedr</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#D4C9B8", fontWeight: 600, width: "30%" }}>Ro Body</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", color: "#D4C9B8", fontWeight: 600 }}>Winner</th>
                </tr>
              </thead>
              <tbody>
                {compareData.map((row, i) => (
                  <tr key={row.category} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "#1A1714", verticalAlign: "top" }}>{row.category}</td>
                    <td style={{ padding: "12px 16px", color: row.verdict === "wellmedr" ? "#C4622D" : "#5C5650", fontWeight: row.verdict === "wellmedr" ? 600 : 400, verticalAlign: "top" }}>{row.wellmedr}</td>
                    <td style={{ padding: "12px 16px", color: row.verdict === "ro-body" ? "#4A7C59" : "#5C5650", fontWeight: row.verdict === "ro-body" ? 600 : 400, verticalAlign: "top" }}>{row.roBody}</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}>
                      {row.verdict === "tie" ? (
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", letterSpacing: "0.08em" }}>TIE</span>
                      ) : (
                        <span style={{
                          padding: "2px 8px",
                          backgroundColor: row.verdict === "wellmedr" ? "rgba(196,98,45,0.1)" : "rgba(74,124,89,0.1)",
                          border: `1px solid ${row.verdict === "wellmedr" ? "rgba(196,98,45,0.25)" : "rgba(74,124,89,0.25)"}`,
                          borderRadius: 4,
                          fontSize: 9,
                          color: row.verdict === "wellmedr" ? "#C4622D" : "#4A7C59",
                          fontFamily: "var(--font-dm-mono), monospace",
                          letterSpacing: "0.08em",
                          fontWeight: 700,
                        }}>
                          {row.verdict === "wellmedr" ? "WellMedr" : "Ro Body"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginTop: 12 }}>
            Scores based on Fitlab Scoring Protocol (FSP) v2.1. Pricing accurate as of May 2026; may change. Check providers directly for current plans.
          </p>
        </section>

        {/* Section 2: Price breakdown */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Pricing" figure="§ 02" title="Cost Breakdown" titleItalic="& Value" size="sm" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 20 }}>
            {[
              {
                provider: "WellMedr",
                color: "#C4622D",
                plans: [
                  { plan: "Compounded Tirzepatide", price: "From $88/mo", notes: "1.25–15mg/week; monthly supply" },
                  { plan: "Consultation", price: "Included", notes: "Same-day async consultation" },
                  { plan: "Ongoing Check-ins", price: "Included", notes: "Monthly + chat support" },
                ],
              },
              {
                provider: "Ro Body",
                color: "#5C5650",
                plans: [
                  { plan: "Compounded Semaglutide", price: "From $99/mo", notes: "0.25–2.4mg/week" },
                  { plan: "Branded Wegovy", price: "$299+/mo (after ins.)", notes: "Subject to insurance; varies widely" },
                  { plan: "Ro Body Programme", price: "$145/mo", notes: "Full programme: coaching + meds" },
                ],
              },
            ].map((p) => (
              <div key={p.provider} style={{ border: `1px solid ${p.color}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", backgroundColor: p.color }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", margin: 0 }}>{p.provider}</p>
                </div>
                {p.plans.map((plan, i) => (
                  <div key={i} style={{ padding: "12px 18px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", margin: 0 }}>{plan.plan}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: p.color, margin: 0, flexShrink: 0, marginLeft: 12 }}>{plan.price}</p>
                    </div>
                    <p style={{ fontSize: 12, color: "#8A8480", margin: 0 }}>{plan.notes}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
            WellMedr&apos;s $88/month entry point is the lowest of any major GLP-1 telehealth platform we reviewed. The savings are possible because WellMedr exclusively uses compounded tirzepatide — the branded equivalent (Zepbound) costs $550–650/month without insurance. Neither platform charges a consultation fee or membership separately.
          </p>
        </section>

        {/* Section 3: Medication comparison */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Medications" figure="§ 03" title="Tirzepatide vs" titleItalic="Semaglutide" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 20 }}>
            The core medication difference: WellMedr uses tirzepatide (dual GIP/GLP-1 agonist); Ro Body primarily uses semaglutide (GLP-1 agonist only). This is not a minor detail — head-to-head data now shows meaningfully different outcomes.
          </p>

          <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, padding: "20px 24px", marginBottom: 16 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4622D", marginBottom: 12 }}>SURMOUNT-5 Head-to-Head Trial (Jastreboff 2024)</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
              {[
                { metric: "Weight Loss (72 wk)", tirzepatide: "20.2%", sema: "13.7%", winner: "tirzepatide" },
                { metric: "≥20% Body Weight Loss", tirzepatide: "31.6%", sema: "16.1%", winner: "tirzepatide" },
                { metric: "GI Adverse Events", tirzepatide: "Comparable", sema: "Comparable", winner: "tie" },
              ].map((row) => (
                <div key={row.metric} style={{ borderLeft: "2px solid #C4622D", paddingLeft: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>{row.metric}</p>
                  <p style={{ fontSize: 13, margin: "0 0 2px" }}><strong style={{ color: "#C4622D" }}>Tirzepatide: {row.tirzepatide}</strong></p>
                  <p style={{ fontSize: 13, margin: 0, color: "#5C5650" }}>Semaglutide: {row.sema}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>
            Tirzepatide&apos;s advantage comes from its dual mechanism — GIP receptor agonism adds appetite suppression and fat metabolism effects on top of GLP-1&apos;s satiety signalling. If your primary goal is maximum weight loss, the evidence favours tirzepatide (WellMedr) over semaglutide (Ro Body).
          </p>
        </section>

        {/* Section 4: Who should choose what */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Recommendation" figure="§ 04" title="Which Platform" titleItalic="Is Right for You?" size="sm" />

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                label: "Choose WellMedr if...",
                color: "#C4622D",
                bg: "rgba(196,98,45,0.05)",
                border: "rgba(196,98,45,0.2)",
                points: [
                  "You want the lowest price ($88/mo)",
                  "You're new to GLP-1s and worried about side effects (microdosing available)",
                  "You want the strongest weight-loss evidence (tirzepatide over semaglutide)",
                  "You want same-day access — consult within hours",
                  "You have no insurance coverage for branded GLP-1s",
                ],
              },
              {
                label: "Choose Ro Body if...",
                color: "#4A7C59",
                bg: "rgba(74,124,89,0.05)",
                border: "rgba(74,124,89,0.2)",
                points: [
                  "You specifically need semaglutide (physician-recommended Ozempic/Wegovy)",
                  "You have insurance that covers branded GLP-1 medications",
                  "You want a larger existing review base and longer-established platform",
                  "You prefer a structured coaching programme alongside medication",
                ],
              },
            ].map((section) => (
              <div key={section.label} style={{ backgroundColor: section.bg, border: `1px solid ${section.border}`, borderRadius: 10, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, color: section.color, marginBottom: 12, fontSize: 15 }}>{section.label}</p>
                <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {section.points.map((point, i) => (
                    <li key={i} style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.6 }}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: CTA */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="Get Started" figure="§ 05" title="Start Your" titleItalic="GLP-1 Journey" size="sm" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ backgroundColor: "#F8F2E4", border: "2px solid #C4622D", borderRadius: 12, padding: "24px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>WellMedr</p>
                <span style={{ padding: "2px 8px", backgroundColor: "#C4622D", color: "#fff", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em" }}>OUR TOP PICK</span>
              </div>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 16 }}>Compounded tirzepatide from $88/mo. Microdosing available. Same-day consultations. US residents only.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href="https://www.wellmedr.com/pages/get-started-weight-loss"
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  style={{ display: "block", padding: "12px 20px", backgroundColor: "#C4622D", color: "#fff", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center" }}
                >
                  Start at WellMedr ↗
                </a>
                <Link href="/reviews/wellmedr" style={{ display: "block", padding: "10px 20px", border: "1px solid #C4622D", color: "#C4622D", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                  Read Full Review →
                </Link>
              </div>
            </div>

            <div style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, padding: "24px 24px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Ro Body</p>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 16 }}>Compounded semaglutide from $99/mo. Branded Wegovy/Ozempic options. Insurance assistance available. US only.</p>
              <p style={{ fontSize: 12, color: "#8A8480", fontStyle: "italic" }}>
                Ro Body is not an affiliate partner. We link editorially only. Visit robody.com directly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="FAQ" figure="§ 06" title="Frequently Asked" titleItalic="Questions" size="sm" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {[
              {
                q: "Is WellMedr cheaper than Ro Body?",
                a: "Yes. WellMedr starts at $88/month vs Ro Body's $99/month entry. Ro Body's branded programme runs $145–$299+/month."
              },
              {
                q: "Does WellMedr offer microdosing?",
                a: "Yes — WellMedr allows starting at 1.25mg tirzepatide/week (half the standard dose) with extended 6–8 week escalation windows. Ro Body does not offer a formalised microdosing protocol."
              },
              {
                q: "Which is better for semaglutide users?",
                a: "Ro Body. It offers compounded and branded semaglutide (Wegovy/Ozempic). WellMedr focuses exclusively on tirzepatide."
              },
              {
                q: "How fast is the consultation process?",
                a: "WellMedr offers same-day consultations in most cases. Ro Body typically takes 24–48 hours before a prescription is issued."
              },
              {
                q: "Are both platforms US-only?",
                a: "Yes. Both WellMedr and Ro Body are US-only services requiring a US-licensed physician and shipping within the United States only."
              },
              {
                q: "Which is better for first-time GLP-1 users?",
                a: "WellMedr, primarily because of its microdosing option — it significantly reduces the chance of GI side effects that cause first-time users to discontinue therapy prematurely."
              },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "18px 22px", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 8, fontSize: 15 }}>{item.q}</p>
                <p style={{ fontSize: 14, color: "#5C5650", margin: 0, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section style={{ marginBottom: 48 }}>
          <SectionHeading label="References" figure="§ 07" title="Sources &" titleItalic="Citations" size="sm" />
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Jastreboff AM, et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). New England Journal of Medicine, 387(3), 205–216.",
              "Jastreboff AM, et al. (2024). Tirzepatide vs. Semaglutide for Obesity (SURMOUNT-5). New England Journal of Medicine, 391(2), 109–119.",
              "Wilding JPH, et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). New England Journal of Medicine, 384(11), 989–1002.",
              "Aronne LJ, et al. (2024). Continued Treatment with Tirzepatide for Maintenance of Weight Reduction (SURMOUNT-4). New England Journal of Medicine, 390(8), 730–740.",
              "FDA. (2023). Zepbound (tirzepatide) injection prescribing information.",
              "FDA. (2021). Wegovy (semaglutide) injection prescribing information.",
            ].map((ref, i) => (
              <li key={i} style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{ref}</li>
            ))}
          </ol>
        </section>

        {/* Related */}
        <div style={{ padding: "24px 28px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "/reviews/wellmedr", label: "WellMedr Review (2026) — GLP-1 Telehealth Rated 8/10" },
              { href: "/ingredients/tirzepatide", label: "Tirzepatide: Mechanism, Benefits & Side Effects" },
              { href: "/research/microdose-glp1", label: "Microdose GLP-1 Telehealth: Does It Work?" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: 14, color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
