import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Fitlabreviews",
  description: "Fitlabreviews's affiliate disclosure policy. How affiliate commissions work and why they don't influence our editorial decisions.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Affiliate Disclosure</span>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLOSURE · AFD-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
            Affiliate Disclosure
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75 }}>
            Last updated: May 2025
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              title: "What Is an Affiliate Link?",
              body: "Some links on Fitlabreviews are affiliate links. This means if you click the link and make a purchase, we may receive a small commission from the retailer — at no extra cost to you. The price you pay is identical whether or not you use our link.",
            },
            {
              title: "Do Commissions Affect Our Reviews?",
              body: "No. Our editorial team makes rating decisions independently of commercial considerations. A product we earn higher commissions from does not receive a better review. We have reviewed products negatively despite active affiliate relationships — and we will continue to do so.",
            },
            {
              title: "Which Partners We Work With",
              body: "We partner with Indian and international supplement retailers including Amazon India, Healthkart, and brand-direct stores. We are selective about partnerships and do not affiliate with brands we believe market deceptively.",
            },
            {
              title: "FTC & Regulatory Compliance",
              body: "In accordance with FTC guidelines, all pages containing affiliate links display a visible disclosure notice. This page constitutes our full affiliate disclosure. Individual review pages include inline notices as required.",
            },
            {
              title: "Questions?",
              body: "If you have any questions about our affiliate relationships or how they are managed, please contact us. We believe transparency is the foundation of trust.",
            },
          ].map((section) => (
            <div key={section.title} style={{ paddingBottom: 32, borderBottom: "1px solid #D4C9B8" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{section.title}</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}

          <div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
