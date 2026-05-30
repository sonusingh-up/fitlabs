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
    <footer style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", marginTop: 80 }}>
      {/* Newsletter band */}
      <div
        style={{
          borderBottom: "1px solid #D4C9B8",
          padding: "48px 24px",
          textAlign: "center",
          backgroundColor: "#1A1714",
        }}
      >
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8A8480",
              marginBottom: 12,
            }}
          >
            The Research Dispatch
          </p>
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#F2EBD9",
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            Evidence first. Noise never.
          </h3>
          <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>
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
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8A8480",
                  marginBottom: 14,
                }}
              >
                {section}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 13,
                        color: "#5C5650",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C4622D")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5C5650")}
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
            border: "1px dashed #C8BFB0",
            borderRadius: 10,
            padding: "22px 24px",
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>Not medical advice.</strong>{" "}
            Content on Fitlabreviews is educational and reflects our reading of published research. Nothing here replaces a licensed physician, dietician, or pharmacist. Consult a qualified professional before starting, stopping, or combining any supplement — especially if you are pregnant, on medication, or managing a chronic condition.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Full disclaimer →</Link>
          </p>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>Affiliate disclosure.</strong>{" "}
            Fitlabreviews participates in affiliate programmes. Some product links on this site are affiliate links — if you click and buy, we earn a small commission at no extra cost to you. This never influences our scores, rankings, or recommendations.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Full disclosure →</Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #D4C9B8",
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
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            © {new Date().getFullYear()} Fitlabreviews. All reviews are editorially independent.
          </p>
        </div>
      </div>
    </footer>
  );
}
