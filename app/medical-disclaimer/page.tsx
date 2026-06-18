import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Fitlabreviews content is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.",
  alternates: { canonical: "/medical-disclaimer" },
};

const sections = [
  {
    id: "not-medical-advice",
    title: "Not Medical Advice",
    body: "Nothing on this website constitutes medical advice. Information about supplements, ingredients, dosages, dietary patterns, and health effects is provided for general informational and educational purposes only. It does not replace professional medical guidance, diagnosis, or treatment from a licensed healthcare provider.",
    highlight: false,
  },
  {
    id: "supplement-information",
    title: "Supplement & Ingredient Information",
    body: "Supplement and ingredient pages describe findings from published research. The doses, effects, and mechanisms described reflect evidence from clinical trials, observational studies, or mechanistic data — and are presented for educational value, not as dosage instructions. Always verify any supplementation approach with a qualified professional, particularly when combining multiple products.",
    highlight: false,
  },
  {
    id: "glp1-medications",
    title: "GLP-1 and Prescription Medications",
    body: "Some content on this site discusses GLP-1 receptor agonists (such as semaglutide and tirzepatide) and other prescription medications. This content is strictly informational and does not constitute a recommendation to use, obtain, or discontinue any prescription drug. GLP-1 agonists and similar medications require a valid prescription and ongoing medical supervision. Reviews of telehealth programmes that facilitate access to these medications are editorial assessments only — not endorsements of specific treatment plans.",
    highlight: true,
  },
  {
    id: "mental-health",
    title: "Mental Health Content",
    body: "Articles discussing diet, nutrition, and mental health — including depression and anxiety — are based on published research and are not intended as therapeutic guidance. If you are experiencing symptoms of depression, anxiety, or any other mental health condition, please seek qualified professional care. Dietary improvement is not a substitute for evidence-based psychiatric or psychological treatment.",
    highlight: false,
  },
  {
    id: "individual-variation",
    title: "Individual Variation",
    body: "Health conditions, medications, allergies, genetics, age, and other individual factors significantly affect how a person responds to supplements and dietary changes. What is safe and effective for one person may be inappropriate or harmful for another. This is why professional medical consultation is non-negotiable before making material changes to your supplement or nutrition protocol.",
    highlight: false,
  },
  {
    id: "evolving-evidence",
    title: "Evolving Evidence Base",
    body: "Nutritional and supplement science evolves rapidly. Some content may not reflect the most recent findings at the time you read it. We review and update articles periodically, but we cannot guarantee that every page reflects the current state of the evidence. We are not liable for decisions made based on content that has been superseded by newer research.",
    highlight: false,
  },
  {
    id: "special-populations",
    title: "Special Populations",
    body: "If you are pregnant, breastfeeding, under 18 years old, or managing a chronic health condition, consult your doctor before taking any supplement or making significant dietary changes. Many supplements and dietary interventions have not been adequately studied in these populations, and risks may be materially different from those in the general adult population.",
    highlight: false,
  },
  {
    id: "no-liability",
    title: "No Liability",
    body: "Fitlabreviews, its editors, authors, and affiliates accept no liability for actions taken based on the information provided on this site. Use of this content is at your own risk. We strongly recommend working with a registered dietitian, sports nutritionist, or physician when planning any supplement protocol — especially for therapeutic goals or complex health situations.",
    highlight: false,
  },
];

export default function MedicalDisclaimerPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5", fontSize: 12 }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Medical Disclaimer</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>DISCLAIMER · MED-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>Last Updated May 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 20 }}>
            Medical{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>Disclaimer</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, maxWidth: 620 }}>
            Our content reflects the published research. It is not medical advice. Read this before relying on anything you find here for a health decision.
          </p>

          {/* Warning Banner */}
          <div style={{ marginTop: 32, padding: "20px 22px", backgroundColor: "#FDF5EE", border: "1px solid #E8C4A0", borderLeft: "3px solid #0F7A5A", borderRadius: 8, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#17211C" }}>Important:</strong> The content on Fitlabreviews is for informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before changing your diet, supplement regimen, medication, or health plan.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {sections.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              style={{
                padding: "36px 0",
                borderBottom: "1px solid #E4E8E5",
              }}
            >
              {section.highlight ? (
                /* Special highlighted callout for prescription medications */
                <div style={{ padding: "24px 28px", backgroundColor: "#FDF5EE", border: "1px solid #E8C4A0", borderLeft: "3px solid #0F7A5A", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 10 }}>
                    ⚠ Special Notice · {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", marginBottom: 14, letterSpacing: "-0.015em" }}>
                    {section.title}
                  </h2>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>
                    {section.body}
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "3px 1fr", gap: "0 28px" }}>
                  <div style={{ width: 3, backgroundColor: "#E4E8E5", borderRadius: 2, alignSelf: "stretch" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#586259", marginBottom: 10 }}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#17211C", marginBottom: 14, letterSpacing: "-0.015em" }}>
                      {section.title}
                    </h2>
                    <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>
                      {section.body}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div style={{ marginTop: 56, padding: "32px 36px", backgroundColor: "#17211C", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 10 }}>Related Policies</p>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 20 }}>
            Our editorial standards and commercial transparency.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/editorial-policy"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Editorial Policy →
            </Link>
            <Link
              href="/affiliate-disclosure"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#586259", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Affiliate Disclosure
            </Link>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#586259", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
