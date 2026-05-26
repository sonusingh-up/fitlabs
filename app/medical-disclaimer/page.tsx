import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Fitlabreviews content is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Medical Disclaimer</span>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "80px 24px" }}>

        {/* Warning banner */}
        <div style={{ padding: "20px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <AlertTriangle size={18} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
            <strong>Important:</strong> The content on Fitlabreviews is for informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before changing your diet, supplement regimen, medication, or health plan.
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLAIMER · MED-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Medical Disclaimer
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 26, 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              title: "Not Medical Advice",
              body: "Nothing on this website constitutes medical advice. Information about supplements, ingredients, dosages, dietary patterns, and health effects is provided for general informational and educational purposes only. It does not replace professional medical guidance, diagnosis, or treatment from a licensed healthcare provider.",
            },
            {
              title: "Supplement & Ingredient Information",
              body: "Supplement and ingredient pages describe findings from published research. The doses, effects, and mechanisms described reflect evidence from clinical trials, observational studies, or mechanistic data — and are presented for educational value, not as dosage instructions. Always verify any supplementation approach with a qualified professional, particularly when combining multiple products.",
            },
            {
              title: "GLP-1 and Prescription Medications",
              body: "Some content on this site discusses GLP-1 receptor agonists (such as semaglutide and tirzepatide) and other prescription medications. This content is strictly informational and does not constitute a recommendation to use, obtain, or discontinue any prescription drug. GLP-1 agonists and similar medications require a valid prescription and ongoing medical supervision. Reviews of telehealth programmes that facilitate access to these medications are editorial assessments only — not endorsements of specific treatment plans.",
            },
            {
              title: "Mental Health Content",
              body: "Articles discussing diet, nutrition, and mental health — including depression and anxiety — are based on published research and are not intended as therapeutic guidance. If you are experiencing symptoms of depression, anxiety, or any other mental health condition, please seek qualified professional care. Dietary improvement is not a substitute for evidence-based psychiatric or psychological treatment.",
            },
            {
              title: "Individual Variation",
              body: "Health conditions, medications, allergies, genetics, age, and other individual factors significantly affect how a person responds to supplements and dietary changes. What is safe and effective for one person may be inappropriate or harmful for another. This is why professional medical consultation is non-negotiable before making material changes to your supplement or nutrition protocol.",
            },
            {
              title: "Evolving Evidence Base",
              body: "Nutritional and supplement science evolves rapidly. Some content may not reflect the most recent findings at the time you read it. We review and update articles periodically, but we cannot guarantee that every page reflects the current state of the evidence. We are not liable for decisions made based on content that has been superseded by newer research.",
            },
            {
              title: "Special Populations",
              body: "If you are pregnant, breastfeeding, under 18 years old, or managing a chronic health condition, consult your doctor before taking any supplement or making significant dietary changes. Many supplements and dietary interventions have not been adequately studied in these populations, and risks may be materially different from those in the general adult population.",
            },
            {
              title: "No Liability",
              body: "Fitlabreviews, its editors, authors, and affiliates accept no liability for actions taken based on the information provided on this site. Use of this content is at your own risk. We strongly recommend working with a registered dietitian, sports nutritionist, or physician when planning any supplement protocol — especially for therapeutic goals or complex health situations.",
            },
          ].map((section) => (
            <div key={section.title} style={{ paddingBottom: 32, borderBottom: "1px solid #D4C9B8" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{section.title}</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Editorial Policy →
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
