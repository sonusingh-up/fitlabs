import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy & Independence",
  description:
    "How Fitlabreviews researches, rates, and publishes supplement reviews. Our independence guarantee, scoring criteria, COI disclosures, and corrections policy.",
  alternates: { canonical: "/editorial-policy" },
};

const methodology = [
  {
    step: "01",
    title: "Formula Analysis",
    body: "We start with the ingredient panel — not the marketing page. Every active ingredient is cross-referenced against the peer-reviewed literature to verify whether the dose used is within the efficacious range. Under-dosed actives, prop blends, and pixie-dusted formulas are flagged explicitly.",
  },
  {
    step: "02",
    title: "Evidence Classification",
    body: "Each ingredient is assigned an evidence level: Strong (multiple meta-analyses), Moderate (consistent RCTs), Limited (few or small studies), Emerging (early-stage research), or Insufficient (no meaningful human data). We never conflate animal data with human evidence.",
  },
  {
    step: "03",
    title: "Label Transparency Audit",
    body: "Products using proprietary blends — where ingredient amounts are hidden — receive automatic score deductions. Full label disclosure is a foundational requirement. We cannot evaluate what we cannot see, and neither can you.",
  },
  {
    step: "04",
    title: "Third-Party Verification",
    body: "We check for certifications from NSF International, Informed Sport, or equivalent independent bodies. Certifications earn green flags. Absence of testing is noted, not penalised unless the category carries contamination risk (e.g. pre-workout stimulants).",
  },
  {
    step: "05",
    title: "Price & Value Assessment",
    body: "We calculate the cost per gram of primary active ingredient and benchmark it against the category average. Value scoring is category-relative — a premium creatine is compared against other creatines, not protein powders.",
  },
  {
    step: "06",
    title: "Claim Audit",
    body: "Marketing claims are audited individually and classified as Supported, Context-Dependent, Overstated, or Unsupported. Each verdict appears transparently in the review. Brands do not see or influence this audit prior to publication.",
  },
  {
    step: "07",
    title: "Peer Review & Publication",
    body: "Every review is read by at least one other editor before publication. We maintain a corrections policy — if we publish an error, we update the content, date the correction, and note what changed. Nothing is silently deleted.",
  },
];

const scoring = [
  { range: "9–10", label: "Exceptional", color: "#2D6A4F", bg: "#EEF7F2", desc: "Category-leading formula, full label transparency, third-party verified. Recommended without reservation." },
  { range: "8", label: "Excellent", color: "#3A7D44", bg: "#F0F7EE", desc: "Strong formula with minor gaps. Worth buying for most users in this category." },
  { range: "7", label: "Good", color: "#6B8F4A", bg: "#F4F6EE", desc: "Solid product with meaningful limitations. May suit some users better than others — see the review for context." },
  { range: "5–6", label: "Average", color: "#B07D2A", bg: "#FBF6EC", desc: "Underwhelming for the price or category. Better alternatives exist and are linked in the review." },
  { range: "1–4", label: "Poor / Avoid", color: "#C4622D", bg: "#FDF5EE", desc: "Significant formula flaws, deceptive labelling, prop blend abuse, or severe value failures." },
];

const fspPillars = [
  { label: "Formula Integrity", weight: "35%", desc: "Doses, ingredient quality, synergy" },
  { label: "Label Transparency", weight: "25%", desc: "Full disclosure vs prop blends" },
  { label: "3rd-Party Verification", weight: "20%", desc: "NSF, Informed Sport, etc." },
  { label: "Value Efficiency", weight: "12%", desc: "$ per gram of active ingredient" },
  { label: "Practical Quality", weight: "8%", desc: "Taste, mixability, packaging" },
];

const conflicts = [
  {
    q: "Do brands pay for reviews?",
    a: "No. Reviews are initiated by our editorial team, not by brands. Brands are never notified before a review is published.",
  },
  {
    q: "Do you accept free products?",
    a: "Occasionally we receive samples. If so, it is disclosed in the review header. Receiving a sample does not improve or worsen a score — it only affects our ability to assess mixability, taste, and packaging.",
  },
  {
    q: "How do affiliate links work?",
    a: "We earn a small commission if you buy through our links. This funds the site. It does not — under any circumstance — change scores or rankings. A product we link to may still score 5/10 if the formula doesn't warrant more.",
  },
  {
    q: "Can a brand request removal of a review?",
    a: "No. We do not remove reviews on commercial grounds. We will issue corrections if a formula changes, and we update scores when new evidence emerges.",
  },
  {
    q: "Who writes the reviews?",
    a: "All editorial content is produced by the Fitlabreviews team. We do not accept guest posts from supplement brands, PR agencies, or paid contributors.",
  },
];

const tocItems = [
  { label: "Independence Guarantee", id: "independence-guarantee" },
  { label: "Our Methodology", id: "our-methodology" },
  { label: "Scoring Scale", id: "scoring-scale" },
  { label: "FSP System", id: "fsp-system" },
  { label: "Conflict of Interest", id: "conflict-of-interest" },
  { label: "Corrections Policy", id: "corrections-policy" },
];

const correctionSteps = [
  "Update the affected content immediately",
  "Add a dated correction note at the top of the article",
  "Log the change in our editorial records",
  "Re-evaluate and update the score if the correction materially affects it",
];

export default function EditorialPolicyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 12 }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Policy</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>POL-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Last Updated May 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 20 }}>
            Editorial Policy &amp;{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Independence</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680 }}>
            Every decision we make about what to publish, how to score it, and who to recommend is governed by this document. We make it public because accountability is only meaningful when it can be checked.
          </p>

          {/* TOC pills */}
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{ padding: "6px 14px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.05em", textDecoration: "none", backgroundColor: "#F8F2E4" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Independence Guarantee */}
        <section id="independence-guarantee" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #D4C9B8" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>01 — Independence</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>
            Independence Guarantee
          </h2>
          <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
            <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 17, fontStyle: "italic", color: "#F2EBD9", lineHeight: 1.65, margin: 0 }}>
              &ldquo;No brand, advertiser, or affiliate partner has any influence over the content, ratings, or recommendations published on Fitlabreviews — ever.&rdquo;
            </p>
          </div>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
            We may earn affiliate commissions when you purchase through our links. These commissions fund the site — editorial research, ingredient database maintenance, and independent testing costs. They do not influence scores, rankings, or what we choose to review.
          </p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            If a high-earning affiliate product has a poor formula, we score it poorly and say so clearly. Our reputation with readers is worth more than any affiliate arrangement.
          </p>
        </section>

        {/* Methodology */}
        <section id="our-methodology" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #D4C9B8" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>02 — Process</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>
            Our Methodology
          </h2>
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {methodology.map((m, i) => (
              <div
                key={m.step}
                style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 0, borderBottom: i < methodology.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
              >
                <div style={{ padding: "24px 16px", borderRight: "1px solid #EDE8DF", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700 }}>{m.step}</span>
                </div>
                <div style={{ padding: "24px 24px" }}>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring Scale */}
        <section id="scoring-scale" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #D4C9B8" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>03 — Rating Scale</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>
            Scoring Scale
          </h2>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 24 }}>Scores are assigned on a 1–10 integer scale only — no half-points.</p>
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {scoring.map((s, i) => (
              <div
                key={s.range}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 0, borderBottom: i < scoring.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
              >
                <div style={{ padding: "20px 16px", borderRight: "1px solid #EDE8DF", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", backgroundColor: s.bg }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.range}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, color: s.color, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4, opacity: 0.8 }}>{s.label}</span>
                </div>
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center" }}>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FSP System */}
        <section id="fsp-system" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #D4C9B8" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>04 — Scoring Framework</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Fitlab Scoring Protocol (FSP)
          </h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 28 }}>
            Since January 2026, all reviews use the Fitlab Scoring Protocol — a five-pillar weighted framework that produces a transparent composite score alongside the editorial rating.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 20 }}>
            {fspPillars.map((p) => (
              <div key={p.label} style={{ padding: "20px 20px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 8 }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{p.label}</p>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700, flexShrink: 0 }}>{p.weight}</span>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: "16px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>
              Red flags (e.g. prop blends, banned substances) deduct 0.2–0.5 points from the composite. Green flags (e.g. third-party certification, open-source formula) are noted but do not inflate scores.{" "}
              <Link href="/methodology" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Read the full FSP methodology →</Link>
            </p>
          </div>
        </section>

        {/* Conflict of Interest */}
        <section id="conflict-of-interest" style={{ marginBottom: 72, paddingBottom: 72, borderBottom: "1px solid #D4C9B8" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>05 — Transparency</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>
            Conflict of Interest — Q&amp;A
          </h2>
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {conflicts.map((c, i) => (
              <div
                key={i}
                style={{ padding: "24px 28px", borderBottom: i < conflicts.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
              >
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.05em", color: "#C4622D", marginBottom: 6 }}>Q.</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 10 }}>{c.q}</p>
                <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{c.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corrections Policy */}
        <section id="corrections-policy" style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>06 — Accountability</p>
          <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Corrections Policy
          </h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 24 }}>
            We get things wrong. When we do, we correct it visibly — not silently. If a formula changes, a study is retracted, or a reader identifies a factual error, we:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {correctionSteps.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}
              >
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, paddingTop: 1, flexShrink: 0 }}>0{i + 1}</span>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
            To report an error, contact us at{" "}
            <a href="mailto:editorial@fitlabreviews.com" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>editorial@fitlabreviews.com</a>.
            We review every submission.
          </p>
        </section>

        {/* CTA Footer */}
        <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Related</p>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 20 }}>
            See how we score supplements in detail.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/methodology"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Full FSP Methodology →
            </Link>
            <Link
              href="/affiliate-disclosure"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Affiliate Disclosure
            </Link>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Contact Editorial Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
