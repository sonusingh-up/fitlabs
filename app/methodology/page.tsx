import type { Metadata } from "next";
import Link from "next/link";
import { PILLAR_META, PILLAR_ORDER } from "@/lib/scoring";

export const metadata: Metadata = {
  title: "How We Score Supplements — FSP v2.1",
  description: "Fitlab Scoring Protocol (FSP v2.1) explained: 5 weighted pillars, red-flag deductions, claim auditing, and how every composite score is calculated.",
  alternates: { canonical: "/methodology" },
};

const pillarDetails: Record<string, { what: string[]; how: string; max: string }> = {
  formula: {
    what: [
      "Each key ingredient is cross-referenced against clinical study doses — not just presence on the label.",
      "Ingredients are rated by strength of evidence (strong / moderate / limited / emerging / insufficient).",
      "Products that include underdosed or ineffective supporting ingredients without disclosing it lose points.",
      "Proprietary blends on primary actives are an automatic red flag and a separate deduction.",
    ],
    how: "We check the dose of each ingredient against the dosing used in the best available meta-analyses or RCTs. If the clinical dose is 3.2g of beta-alanine and the product has 1.6g, it scores accordingly.",
    max: "A 10 here means every key ingredient is at or above a clinically studied dose, with strong peer-reviewed evidence and full transparency on the label.",
  },
  transparency: {
    what: [
      "Full ingredient list with individual weights for every active compound.",
      "No 'proprietary blend' labels masking key ingredient amounts.",
      "Accurate serving size — not inflated to make the dose appear larger.",
      "No misleading complex names for cheap commodity ingredients.",
    ],
    how: "We read the full ingredient list on the physical product label (not the brand website). Any hidden blend on a core ingredient automatically flags here and reduces the composite score.",
    max: "A 10 means every ingredient — including minor additives — is fully disclosed by weight, no blends, and the label matches what independent testing confirms.",
  },
  verification: {
    what: [
      "NSF Certified for Sport, Informed Sport, or NABL-accredited lab testing.",
      "Batch-level testing (QR-linked, not brand-level claims).",
      "History of recalls, adulteration, or regulatory warnings.",
      "Certificate of Analysis (CoA) availability.",
    ],
    how: "Third-party certification status is verified directly against the certifying body's database — not taken from brand marketing. A brand claiming NSF certification that has expired or is brand-level-only will not score as if it were batch-tested.",
    max: "A 10 requires active, batch-level third-party certification from a recognised body with publicly verifiable results.",
  },
  value: {
    what: [
      "Price per serving at standard retail (not promotional pricing).",
      "Price per gram of the primary active ingredient vs the category average.",
      "Serving size accuracy — we verify scoop weight vs label claim where possible.",
      "Total active yield per rupee spent.",
    ],
    how: "We calculate ₹/g of the primary active across comparable products in the category to establish a benchmark. A product at the benchmark scores 6. Better value scores higher; worse value scores lower.",
    max: "A 10 would require exceptional value — significantly below category average price-per-gram with no quality compromise. This pillar is intentionally hard to max.",
  },
  practical: {
    what: [
      "Mixability with water and milk (tested across temperatures).",
      "Taste and flavour accuracy vs description.",
      "Texture — grittiness, clumping, residue.",
      "Packaging — seal integrity, scoop accessibility, moisture protection.",
    ],
    how: "Tested over a minimum 2-week period by at least one reviewer. Taste is subjective; we describe rather than judge. Mixability and packaging are objective.",
    max: "A 10 means perfect mixability, accurate flavour, no grittiness, and packaging that maintains product integrity over its shelf life.",
  },
};

const redFlagExamples = [
  { flag: "Proprietary blend on primary active", deduction: "−1.0 pt", example: "A pre-workout listing '5g Pump Blend (Citrulline, Arginine, Agmatine)' — we can't verify any individual dose." },
  { flag: "Key ingredient underdosed vs clinical standard", deduction: "−0.5 pt each", example: "Beta-alanine at 1.6g (clinical minimum is 3.2g), or creatine at 2g (standard is 3–5g)." },
  { flag: "Marketing claim with no research support", deduction: "−0.5 pt", example: "'Burns fat 3× faster' — no credible human RCT exists for this claim." },
  { flag: "No third-party testing of any kind", deduction: "−0.5 pt", example: "No NSF, Informed Sport, FSSAI QC, NABL, or published CoA available." },
  { flag: "Serving size manipulation", deduction: "−1.0 pt", example: "30g scoop but only 20g active — 10g is undisclosed filler inflating the dose appearance." },
  { flag: "Prior adulteration / regulatory warning", deduction: "−2.0 pts", example: "FSSAI or FDA warning about the specific product or batch within 3 years." },
];

const greenFlagExamples = [
  { flag: "NSF Certified for Sport (batch-level)", detail: "Each production batch is independently tested and the results are publicly verifiable." },
  { flag: "Informed Sport certified", detail: "Screen for 250+ prohibited substances — highest standard for athlete-facing products." },
  { flag: "Full amino acid profile disclosed", detail: "Protein products that voluntarily show the full AA breakdown beyond the label minimum." },
  { flag: "Formula matches clinical study protocol", detail: "Every key ingredient at the exact dose and form used in peer-reviewed trials." },
  { flag: "NABL-accredited CoA available", detail: "Certificate of Analysis from a NABL-accredited American lab — available per batch." },
  { flag: "No proprietary blends anywhere on label", detail: "Every ingredient — including supporting compounds — disclosed individually by weight." },
];

export default function MethodologyPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      <div style={{ borderBottom: "1px solid #D7DDD9", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D7DDD9" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Methodology</span>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "60px 24px 56px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase" }}>FSP · v2.1</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>Scoring Methodology</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.0, marginBottom: 24 }}>
            The Fitlab Scoring <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>Protocol</em>
          </h1>
          <p style={{ fontSize: 16, color: "#17211C", lineHeight: 1.8, marginBottom: 16 }}>
            Every review score on Fitlab is calculated using the Fitlab Scoring Protocol (FSP) — a weighted, 5-pillar rubric designed to measure what actually matters in a supplement: whether it does what it claims, whether you can trust the label, and whether it's worth your money.
          </p>
          <p style={{ fontSize: 15, color: "#3F4B43", lineHeight: 1.8 }}>
            This page explains exactly how FSP works — the weights, the deductions, the audit process, and the limits of our methodology. No black boxes.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto" }} className="pad-section-sm px-page">

        <section style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 01</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              The Score Formula
            </h2>
          </div>
          <div style={{ padding: "24px 28px", backgroundColor: "#0D1810", borderRadius: 14, marginBottom: 24, fontFamily: "var(--font-jetbrains), monospace" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "#586259", textTransform: "uppercase", marginBottom: 16 }}>Calculation</p>
            <p style={{ fontSize: 14, color: "#14A474", lineHeight: 2 }}>
              Raw Score = Σ (Pillar Score × Pillar Weight)
            </p>
            <p style={{ fontSize: 14, color: "#F6F8F6", lineHeight: 2 }}>
              Composite Score = Raw Score − Σ (Red Flag Deductions)
            </p>
            <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 2 }}>
              Editorial Score = Round(Composite Score)
            </p>
          </div>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
            The <strong style={{ color: "#17211C" }}>Editorial Score</strong> is the final number displayed on a review. It is the Composite Score rounded to the nearest whole number. In rare cases where the Composite Score and Editorial Score diverge by more than 0.3 points, the reviewer must document their reasoning — this prevents reviewers from inflating or deflating scores beyond what the rubric supports.
          </p>
        </section>

        <section style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 02</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              The 5 Pillars
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PILLAR_ORDER.map((key, i) => {
              const meta = PILLAR_META[key];
              const detail = pillarDetails[key];
              return (
                <div key={key} style={{ border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                  <div className="layout-pillar-header" style={{ backgroundColor: "#0D1810" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#6B7770" }}>0{i + 1}</span>
                      <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#F6F8F6", margin: 0 }}>{meta.label}</h3>
                    </div>
                    <span style={{ padding: "4px 12px", backgroundColor: "rgba(20,164,116,0.15)", border: "1px solid rgba(20,164,116,0.3)", borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#14A474" }}>
                      {Math.round(meta.weight * 100)}% of score
                    </span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 16 }}>{meta.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                      {detail.what.map((point, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", flexShrink: 0, marginTop: 2 }}>→</span>
                          <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.6, margin: 0 }}>{point}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", borderRadius: 8, borderLeft: "3px solid #E4E8E5", marginBottom: 12 }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>How we measure it</p>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>{detail.how}</p>
                    </div>
                    <div style={{ padding: "12px 16px", backgroundColor: "#E7F2EC", borderRadius: 8, borderLeft: "3px solid #0F7A5A" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6 }}>What a 10 looks like</p>
                      <p style={{ fontSize: 12, color: "#17211C", lineHeight: 1.6, margin: 0 }}>{detail.max}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 03</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              Red Flag Deductions
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 24 }}>
            Red flags are automatic point deductions applied to the composite score for specific trust-reducing issues. They are applied regardless of how well the product scores on the 5 pillars — a beautifully marketed product with a proprietary blend on its key ingredient cannot hide that fact behind a strong formula score.
          </p>
          <div style={{ border: "1px solid rgba(139,58,44,0.25)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 20px", backgroundColor: "rgba(139,58,44,0.06)", borderBottom: "1px solid rgba(139,58,44,0.15)" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8B3A2C" }}>Defined Red Flags</span>
            </div>
            {redFlagExamples.map((item, i) => (
              <div key={i} style={{ padding: "16px 20px", borderBottom: i < redFlagExamples.length - 1 ? "1px solid rgba(139,58,44,0.1)" : "none", backgroundColor: i % 2 === 0 ? "#FAFAFA" : "#FFFFFF", display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#8B3A2C", marginBottom: 5, fontFamily: "var(--font-hanken), sans-serif" }}>{item.flag}</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5, fontStyle: "italic" }}>{item.example}</p>
                </div>
                <span style={{ padding: "3px 10px", backgroundColor: "rgba(139,58,44,0.1)", border: "1px solid rgba(139,58,44,0.2)", borderRadius: 6, fontSize: 11, fontWeight: 700, color: "#8B3A2C", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap" as const }}>{item.deduction}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.65, marginTop: 16 }}>
            The maximum total deduction is capped at −3.0 points. A score cannot fall below 1 from deductions alone. Multiple red flags stack.
          </p>
        </section>

        <section style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 04</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              Green Flags
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 24 }}>
            Green flags do not add points to the score. A product should not receive a higher score simply for doing the right thing — transparency and testing are the baseline expectation, not a bonus. Green flags are displayed as recognitions in the review so readers can see them clearly, but they do not inflate numbers.
          </p>
          <div style={{ border: "1px solid rgba(15,122,90,0.25)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 20px", backgroundColor: "rgba(15,122,90,0.05)", borderBottom: "1px solid rgba(15,122,90,0.15)" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F7A5A" }}>Recognition — No Score Boost</span>
            </div>
            {greenFlagExamples.map((item, i) => (
              <div key={i} style={{ padding: "16px 20px", borderBottom: i < greenFlagExamples.length - 1 ? "1px solid rgba(15,122,90,0.1)" : "none", backgroundColor: i % 2 === 0 ? "#F2F8F4" : "#FFFFFF" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#0F7A5A", marginBottom: 5, fontFamily: "var(--font-hanken), sans-serif" }}>{item.flag}</p>
                <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="claim-audit" style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 05</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              How We Audit Claims
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 20 }}>
            Every review includes a Claim Audit — a table that takes each marketing claim from the product&apos;s label or brand website and checks it against the published literature. Claims are assigned one of four verdicts:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {([
              { verdict: "Research-Supported", color: "#0F7A5A", bg: "rgba(15,122,90,0.08)", desc: "The claim is supported by at least two independent, peer-reviewed human studies at the relevant dose." },
              { verdict: "Overstated", color: "#8B7355", bg: "rgba(139,115,85,0.08)", desc: "There is evidence for the mechanism or a partial effect, but the claim goes beyond what the research actually shows." },
              { verdict: "Context-Dependent", color: "#3A5F8B", bg: "rgba(58,95,139,0.08)", desc: "The claim is true for a specific population (e.g., vegans, sleep-deprived athletes) but misleading when generalised." },
              { verdict: "Unsupported", color: "#8B3A2C", bg: "rgba(139,58,44,0.08)", desc: "No credible human RCT or meta-analysis supports this claim at the dose in the product." },
            ]).map((item) => (
              <div key={item.verdict} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, alignItems: "start", padding: "14px 16px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                <span style={{ padding: "4px 10px", backgroundColor: item.bg, border: `1px solid ${item.color}33`, borderRadius: 6, fontSize: 10, fontWeight: 700, color: item.color, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.06em", textAlign: "center" as const }}>{item.verdict}</span>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 06</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              Known Limitations
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { num: "01", text: "We do not conduct independent laboratory testing of products. Our Formula Integrity scores rely on label claims and, where available, third-party CoA data. We cannot independently verify that what is on the label matches what is in the product unless third-party testing confirms it." },
              { num: "02", text: "Taste is subjective. We describe practical quality as objectively as possible, but flavour preference is personal. Our Practical Quality score reflects mixability and texture primarily." },
              { num: "03", text: "Pricing changes. Value Efficiency scores reflect pricing at the time of the review. Significant price changes may affect this pillar's accuracy." },
              { num: "04", text: "The science evolves. Evidence levels can change as new meta-analyses are published. We aim to update reviews annually but cannot guarantee real-time accuracy." },
              { num: "05", text: "This is not medical advice. No score here implies a product is safe for everyone. Individuals with health conditions, allergies, or on medication should consult a physician." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", flexShrink: 0, marginTop: 2 }}>{item.num}</span>
                <p style={{ fontSize: 14, color: "#17211C", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>§ 07</span>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", letterSpacing: "-0.02em", margin: 0 }}>
              Version History
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
            {[
              { version: "FSP v2.1", date: "May 2026", changes: "Added Value Efficiency pillar. Introduced Claim Audit system. Red flag deductions formalised. Green flags separated from scoring." },
              { version: "FSP v2.0", date: "January 2026", changes: "Moved from 4 to 5 pillars. Added Practical Quality as explicit pillar. Weighted formula pillar increased from 30% to 35%." },
              { version: "FSP v1.0", date: "March 2025", changes: "Initial 4-pillar system. Formula, Transparency, Testing, and Value. Uniform weighting." },
            ].map((v, i) => (
              <div key={v.version} className="layout-version-row" style={{ padding: "16px 20px", borderBottom: i < 2 ? "1px solid #E4E8E5" : "none", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 700, color: "#17211C" }}>{v.version}</span>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#6B7770" }}>{v.date}</span>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.5, margin: 0 }}>{v.changes}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ padding: 28, backgroundColor: "#0D1810", borderRadius: 14, textAlign: "center" as const }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 12 }}>Questions?</p>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F6F8F6", marginBottom: 12 }}>
            We document our reasoning. You should be able to reproduce our scores.
          </p>
          <p style={{ fontSize: 13, color: "#6B7770", lineHeight: 1.65, maxWidth: 480, margin: "0 auto 20px" }}>
            If you disagree with a score, open a discussion. We update reviews when new evidence emerges or when we&apos;ve made an error.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", backgroundColor: "#14A474", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
            Contact the editorial team →
          </Link>
        </div>
      </div>
    </div>
  );
}
