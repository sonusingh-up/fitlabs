"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const footerLinks = {
  "Reviews": [
    { label: "All Reviews", href: "/reviews" },
    { label: "Protein Powders", href: "/category/protein-powder" },
    { label: "Pre-Workout", href: "/category/pre-workout" },
    { label: "Creatine", href: "/category/creatine" },
    { label: "Best-Of Roundups", href: "/best" },
  ],
  "Research & Goals": [
    { label: "Research Articles", href: "/research" },
    { label: "Blog", href: "/blog" },
    { label: "Goal Guides", href: "/goals" },
    { label: "Ingredient Library", href: "/ingredients" },
    { label: "Brand Directory", href: "/brands" },
  ],
  "Tools": [
    { label: "BMR Calculator", href: "/tools/free/bmr-calculator" },
    { label: "Macros Calculator", href: "/tools/free/macros-calculator" },
  ],
  "About": [
    { label: "About FitLab", href: "/about" },
    { label: "Our Team", href: "/authors" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Methodology (FSP)", href: "/methodology" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Legal": [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E5E7EB", backgroundColor: "#FFFFFF", marginTop: 80 }}>
      {/* Newsletter band */}
      <div
        style={{
          borderBottom: "1px solid #E5E7EB",
          padding: "56px 24px",
          textAlign: "center",
          backgroundColor: "#111827",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal top accent */}
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #0E8784 50%, transparent)" }} />
        <div style={{ position: "relative", maxWidth: 480, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            The Research Dispatch
          </p>
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#F9FAFB",
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            Evidence first. Noise never.
          </h3>
          <p style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 24, lineHeight: 1.6 }}>
            Weekly supplement research, ingredient deep-dives, and honest product updates — no hype.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Links grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px 32px", marginBottom: 56 }}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  marginBottom: 14,
                  fontWeight: 600,
                }}
              >
                {section}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer block */}
        <div
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: "22px 24px",
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            backgroundColor: "#F8FAFB",
          }}
        >
          <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#111827", fontFamily: "var(--font-dm-sans), sans-serif" }}>Not medical advice.</strong>{" "}
            Content on Fitlabreviews is educational and reflects our reading of published research. Nothing here replaces a licensed physician, dietician, or pharmacist. Consult a qualified professional before starting, stopping, or combining any supplement — especially if you are pregnant, on medication, or managing a chronic condition.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#0E8784", fontWeight: 600, textDecoration: "none" }}>Full disclaimer →</Link>
          </p>
          <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#111827", fontFamily: "var(--font-dm-sans), sans-serif" }}>Affiliate disclosure.</strong>{" "}
            Fitlabreviews participates in affiliate programmes. Some product links on this site are affiliate links — if you click and buy, we earn a small commission at no extra cost to you. This never influences our scores, rankings, or recommendations.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#0E8784", fontWeight: 600, textDecoration: "none" }}>Full disclosure →</Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #E5E7EB",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image
              src="/logo-banner.svg"
              alt="Fitlabreviews — Reviews · No Bias"
              width={140}
              height={35}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            © {new Date().getFullYear()} Fitlabreviews. All reviews are editorially independent.
          </p>
        </div>
      </div>
    </footer>
  );
}
