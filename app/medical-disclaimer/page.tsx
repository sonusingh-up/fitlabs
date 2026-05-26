import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Fitlabreviews",
  description: "Fitlabreviews's medical disclaimer. Our content is for informational purposes only and does not constitute medical advice.",
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
        <div style={{ padding: "20px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 3, marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <AlertTriangle size={18} style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>
            <strong>Important:</strong> The content on Fitlabreviews is for informational purposes only. It does not constitute medical advice, diagnosis, or treatment recommendations. Always consult a qualified healthcare professional before making changes to your diet, supplement regimen, or health plan.
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLAIMER · MED-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
            Medical Disclaimer
          </h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              title: "Not Medical Advice",
              body: "Nothing on this website should be interpreted as medical advice. Information about supplements, ingredients, dosages, and health effects is provided for general informational purposes only. It does not replace professional medical guidance.",
            },
            {
              title: "Supplement Safety Varies by Individual",
              body: "Individual health conditions, medications, allergies, and other factors can significantly affect how you respond to supplements. What is safe for one person may not be appropriate for another. This is why professional medical consultation is essential.",
            },
            {
              title: "Our Research Has Limits",
              body: "We strive to present accurate, current information based on available research. However, nutritional science evolves rapidly. Some content may not reflect the latest findings. We are not liable for decisions made based on our content.",
            },
            {
              title: "Special Populations",
              body: "If you are pregnant, breastfeeding, under 18 years old, or have a medical condition, consult your doctor before taking any supplement. Many supplements have not been tested in these populations.",
            },
            {
              title: "Consult a Professional",
              body: "We strongly recommend working with a registered dietitian, sports nutritionist, or physician when planning a supplement protocol — especially for complex goals, high-risk populations, or therapeutic uses.",
            },
          ].map((section) => (
            <div key={section.title} style={{ paddingBottom: 32, borderBottom: "1px solid #D4C9B8" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{section.title}</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
