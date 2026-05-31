import type { Metadata } from "next";
import Link from "next/link";
import SkinBreadcrumb from "@/components/ui/SkinBreadcrumb";

export const metadata: Metadata = {
  title: "Skin Research Methodology",
  description:
    "How Fitlabreviews Skin verifies skincare ingredient claims, assigns evidence levels, and evaluates routines. Sources, limitations, and update cadence.",
  alternates: { canonical: "/skin/methodology" },
};

const evidenceLevels = [
  { level: "Strong",       color: "#4A7C59", bg: "rgba(74,124,89,0.08)",   border: "rgba(74,124,89,0.25)",   criteria: "Multiple well-designed RCTs or systematic reviews/meta-analyses in humans. Consistent direction of effect across independent studies.", example: "Retinol for fine lines, niacinamide for hyperpigmentation, broad-spectrum SPF for photoprotection." },
  { level: "Moderate",     color: "#C4622D", bg: "rgba(196,98,45,0.08)",   border: "rgba(196,98,45,0.25)",   criteria: "At least one or two RCTs in humans with consistent findings, but limited replication or small sample sizes. Effect size is plausible and biologically coherent.", example: "Tranexamic acid for melasma, bakuchiol as a retinol alternative." },
  { level: "Limited",      color: "#D4A96A", bg: "rgba(212,169,106,0.08)", border: "rgba(212,169,106,0.25)", criteria: "Only small, short-duration, or methodologically weak studies in humans. Effect is possible but not reliably demonstrated.", example: "Centella asiatica for wound healing, some peptide complexes." },
  { level: "Emerging",     color: "#4A6C8C", bg: "rgba(74,108,140,0.08)", border: "rgba(74,108,140,0.25)", criteria: "Early-stage human data, case series, or promising in-vitro / animal results without strong clinical translation yet.", example: "Exosomes in topical serums, certain postbiotic skin treatments." },
  { level: "Insufficient", color: "#8A8480", bg: "rgba(138,132,128,0.08)", border: "rgba(138,132,128,0.25)", criteria: "No meaningful human evidence. Claims rest entirely on marketing, consumer testimonial, or in-vitro data that cannot be extrapolated to skin application.", example: "Many 'hero ingredient' claims in premium skincare marketing." },
];

const sources = [
  { category: "Clinical Journals",      examples: "Journal of Cosmetic Dermatology, British Journal of Dermatology, Journal of the American Academy of Dermatology (JAAD), Dermatology and Therapy" },
  { category: "Database Searches",      examples: "PubMed/MEDLINE, Cochrane Library (systematic reviews), ClinicalTrials.gov (registered trials)" },
  { category: "Regulatory Bodies",      examples: "EU Cosmetics Regulation (EC No 1223/2009), FDA Cosmetics, Cosmetic Ingredient Review (CIR) Safety Assessments" },
  { category: "Clinical Guidelines",    examples: "British Association of Dermatologists (BAD), American Academy of Dermatology (AAD), European Dermatology Forum" },
  { category: "Formulation Science",    examples: "Cosmetics & Toiletries, International Journal of Cosmetic Science, Society of Cosmetic Chemists publications" },
  { category: "Not Used as Evidence",   examples: "Brand white papers, influencer testimonials, customer reviews, anecdotal reports, press releases" },
];

const limitations = [
  "We are not dermatologists or licensed clinicians. Our content reflects our reading of published research, not clinical examination or diagnosis.",
  "Cosmetic science research often uses small sample sizes, short study durations, and self-reported outcomes. Effect sizes seen in trials may not replicate in daily real-world use.",
  "Product formulations vary significantly. An ingredient with strong evidence at 2% concentration may be present at sub-efficacious levels in many products we do not independently verify.",
  "Individual skin variation is large. Fitzpatrick skin type, barrier integrity, existing conditions, and medication use all affect how an ingredient performs — we cannot account for every case.",
  "We do not conduct independent laboratory testing of products. Formulation assessments are based on disclosed ingredient lists and available published literature.",
  "New research is published continuously. Some of our content may not reflect the most current evidence at the time you read it. Check the 'Last Updated' date on each article.",
];

export default function SkinMethodologyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <SkinBreadcrumb items={[{ label: "Methodology" }]} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>METHODOLOGY · SKIN-METH-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Research Methodology
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Skin Health Section · Last updated: May 31, 2026</p>
        </div>

        <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, marginBottom: 56, maxWidth: 640 }}>
          How we evaluate skincare ingredient claims, assign evidence levels, construct routine guides, and verify condition information — with sources, criteria, and honest limitations.
        </p>

        {/* Evidence Levels Table */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Evidence Level Framework</h2>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 24 }}>
            Every skincare ingredient claim we assess is assigned one of five evidence levels based on the quality, quantity, and consistency of published human research. We assign the level to the specific claim — not to the ingredient as a whole. An ingredient may have Strong evidence for one benefit and Insufficient evidence for another.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {evidenceLevels.map((e) => (
              <div key={e.level} style={{ border: `1px solid ${e.border}`, borderLeft: `3px solid ${e.color}`, borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "12px 18px", backgroundColor: e.bg, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: e.color, letterSpacing: "0.1em", textTransform: "uppercase", minWidth: 90 }}>{e.level}</span>
                </div>
                <div style={{ padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Criteria</p>
                    <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.6 }}>{e.criteria}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Examples</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, fontStyle: "italic" }}>{e.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Sources */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Research Sources</h2>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 24 }}>We use the following sources. We explicitly exclude marketing materials and influencer content as evidence.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
            {sources.map((s, i) => (
              <div key={s.category} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 0, borderBottom: i < sources.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div style={{ padding: "14px 16px", borderRight: "1px solid #EDE8DF" }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: i === sources.length - 1 ? "#C4622D" : "#5C5650", fontWeight: 600, margin: 0 }}>{s.category}</p>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.6, margin: 0 }}>{s.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product & Routine Assessment */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Ingredient & Routine Assessment</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "Concentration Context", body: "Where clinical evidence specifies an effective concentration, we note it alongside the ingredient profile. We flag common formulations that use an ingredient at sub-clinical concentrations and label the gap explicitly." },
              { label: "Formulation Interactions", body: "We evaluate known interactions between active ingredients — for example, the incompatibility of L-ascorbic acid (vitamin C) with niacinamide at high concentrations, or the pH requirements for effective AHA/BHA exfoliants. Routine guides account for these interactions when sequencing steps." },
              { label: "Safety & Contraindications", body: "We review CIR safety assessments, EU Cosmetics Regulation restricted/prohibited ingredient lists, and published adverse event data. Known sensitisers, phototoxic agents, and ingredients contraindicated in pregnancy are flagged clearly in each relevant profile." },
              { label: "Peer Fact-Check", body: "Every article is read by a second editor before publication. Articles covering clinical dermatology conditions are reviewed against current clinical guidelines before going live." },
            ].map((item) => (
              <div key={item.label} style={{ paddingLeft: 16, borderLeft: "3px solid #C4622D" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1714", marginBottom: 6 }}>{item.label}</p>
                <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Honest Limitations</h2>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>We believe publishing limitations is as important as publishing findings. Here is what we cannot claim to know:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {limitations.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "14px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65, margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Update cadence */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Update Cadence</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            Ingredient profiles are reviewed and updated when significant new clinical evidence is published or when regulatory status changes. Condition profiles are reviewed at least annually against current clinical guidelines. Routine guides are updated when ingredient pairing guidance or concentration evidence evolves materially. Each article shows a "Last Updated" date. If you believe an article contains outdated information, please contact us — we take reader corrections seriously.
          </p>
        </section>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/skin/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Editorial Policy →
          </Link>
          <Link href="/skin/medical-disclaimer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Medical Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}
