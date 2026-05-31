import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import SkinBreadcrumb from "@/components/ui/SkinBreadcrumb";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Skin Health",
  description:
    "Fitlabreviews Skin content is educational, not medical or dermatological advice. Consult a licensed dermatologist before changing your skincare routine.",
  alternates: { canonical: "/skin/medical-disclaimer" },
};

const sections = [
  {
    title: "Educational Content Only",
    body: "All content published under the Fitlabreviews Skin Health section — including ingredient profiles, condition overviews, routine guides, and skincare articles — is for educational and informational purposes only. It does not constitute medical advice, dermatological diagnosis, or a treatment plan. Nothing on these pages should be treated as a substitute for a consultation with a licensed dermatologist or qualified healthcare professional.",
  },
  {
    title: "Consult a Dermatologist",
    body: "Before beginning any new skincare routine, introducing a new active ingredient, or attempting to treat a diagnosed skin condition, consult a board-certified dermatologist or your primary care physician. This is especially important if your skin concern is persistent, painful, spreading, or failing to respond to over-the-counter products. Self-diagnosis from online sources — including this site — is not a substitute for clinical examination.",
  },
  {
    title: "Not a Replacement for Clinical Diagnosis",
    body: "Skin conditions such as acne, eczema, psoriasis, rosacea, and hyperpigmentation have overlapping presentations. What looks like one condition may be another. Ingredient recommendations appropriate for one condition may aggravate a different one. Our condition profiles are written to inform, not diagnose. Only a qualified professional examining your skin in person can provide an accurate diagnosis and targeted treatment plan.",
  },
  {
    title: "Special Populations",
    body: "Extra caution is required for the following groups, all of whom should seek professional guidance before applying any new skincare active: pregnant or breastfeeding individuals (certain retinoids, salicylic acid concentrations, and chemical exfoliants carry known risks); people with diagnosed skin conditions (eczema, psoriasis, rosacea); individuals with highly reactive or sensitised skin; anyone using topical or systemic prescription medications that may interact with skincare actives; children under 12 years of age.",
  },
  {
    title: "Medication & Active Ingredient Interactions",
    body: "Some skincare ingredients interact with prescription medications. Retinoids (both topical and oral) interact with certain antibiotics and medications that increase sun sensitivity. High-concentration acids may compromise the skin barrier in ways that increase absorption of other topical drugs. Chemical sunscreen filters may interact with photosensitising medications. This is not an exhaustive list. Always disclose your full skincare routine to your prescribing physician.",
  },
  {
    title: "Ingredient Evidence Levels",
    body: "Where we assign evidence levels (Strong, Moderate, Limited, Emerging, Insufficient) to skincare ingredients, these reflect our reading of published cosmetic science and dermatology literature at the time of writing. Evidence levels are a directional guide, not a clinical prescription. An ingredient rated Strong for one indication may have no evidence for another. Read each profile in full and discuss with a professional before applying findings to your own routine.",
  },
  {
    title: "Evolving Research",
    body: "Cosmetic science and dermatology research evolve continuously. Some content on this site may not reflect the most recent findings at the time you read it. We update articles periodically but cannot guarantee real-time accuracy. We are not liable for decisions made based on information that has since been superseded by newer research.",
  },
  {
    title: "No Liability",
    body: "Fitlabreviews, its editors, authors, contributors, and affiliates accept no liability for any adverse skin reactions, health outcomes, or other consequences arising from use of information published on this site. Use of any content is at your sole risk. If you experience an adverse reaction to a product or ingredient, discontinue use immediately and consult a healthcare professional.",
  },
];

export default function SkinMedicalDisclaimerPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <SkinBreadcrumb items={[{ label: "Medical Disclaimer" }]} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>

        {/* Warning banner */}
        <div style={{ padding: "20px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <AlertTriangle size={18} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
            <strong>Important:</strong> Fitlabreviews Skin content is for educational purposes only. It is not medical or dermatological advice and does not replace professional diagnosis or treatment. Always consult a qualified dermatologist or healthcare professional before changing your skincare routine or treating a skin condition.
          </p>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLAIMER · SKIN-MED-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Medical Disclaimer
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Skin Health Section · Last updated: May 31, 2026</p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((s) => (
            <div key={s.title} style={{ paddingBottom: 32, borderBottom: "1px solid #D4C9B8" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
            </div>
          ))}

          {/* Cross-links */}
          <div style={{ padding: "20px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>See Also</p>
            <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 16 }}>
              This disclaimer applies specifically to the Skin Health section. The full Fitlabreviews Medical Disclaimer — which covers supplement, nutrition, and pharmacology content — is available at the link below.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/medical-disclaimer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Full Medical Disclaimer →
              </Link>
              <Link href="/skin/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Skin Editorial Policy
              </Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
