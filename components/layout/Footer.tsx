"use client";

import { useState } from "react";
import Link from "next/link";

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
  "About": [
    { label: "Our Team", href: "/authors" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Methodology (FSP)", href: "/methodology" },
    { label: "Tools", href: "/tools" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <footer style={{ backgroundColor: "#faf5ec", borderTop: "1px solid #e8e0d0" }}>

      {/* Main footer grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 48px" }}>
        <div className="footer-grid">

          {/* Newsletter column */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <span style={{
                width: 32, height: 32, borderRadius: 8, backgroundColor: "#0f7a5a",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-hanken), sans-serif",
                fontWeight: 800, fontSize: 14, color: "#ffffff", flexShrink: 0,
              }}>FL</span>
              <span style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 18, fontWeight: 600, color: "#17211c", letterSpacing: "-0.02em",
              }}>
                fitlab<strong style={{ color: "#0f7a5a" }}>reviews</strong>
              </span>
            </Link>

            <h3 style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 17, fontWeight: 600, color: "#17211c", marginBottom: 6,
            }}>
              Get the Research Dispatch
            </h3>
            <p style={{ fontSize: 13, color: "#6b7770", lineHeight: 1.65, marginBottom: 16 }}>
              Weekly evidence summaries, ingredient deep-dives, and honest product updates — no hype.
            </p>

            {status === "ok" ? (
              <p style={{ fontSize: 13, color: "#0f7a5a", fontWeight: 600 }}>You&apos;re subscribed. ✓</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 8 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1, padding: "9px 14px", fontSize: 13,
                    border: "1px solid #cdd8d0", borderRadius: 999,
                    backgroundColor: "#ffffff", color: "#17211c",
                    outline: "none", fontFamily: "var(--font-hanken), sans-serif",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    padding: "9px 16px", backgroundColor: "#14a474", color: "#06120c",
                    border: "none", borderRadius: 999, fontSize: 13, fontWeight: 700,
                    cursor: "pointer", fontFamily: "var(--font-hanken), sans-serif",
                    whiteSpace: "nowrap", transition: "background-color 150ms",
                  }}
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {status === "err" && (
              <p style={{ fontSize: 12, color: "#c04a4a", marginTop: 6 }}>Something went wrong. Try again.</p>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#0f7a5a", marginBottom: 14, fontWeight: 600,
              }}>
                {section}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer block */}
        <div style={{
          borderTop: "1px solid #ddd5c5", marginTop: 48, paddingTop: 28,
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          <p style={{ fontSize: 12, color: "#8a9a8f", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#586259" }}>Not medical advice.</strong>{" "}
            Content on Fitlabreviews is educational and reflects our reading of published research. Nothing here replaces a licensed physician, dietician, or pharmacist. Consult a qualified professional before starting, stopping, or combining any supplement.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#0f7a5a", fontWeight: 600, textDecoration: "none" }}>Full disclaimer →</Link>
          </p>
          <p style={{ fontSize: 12, color: "#8a9a8f", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#586259" }}>Affiliate disclosure.</strong>{" "}
            Some product links earn us a small commission at no extra cost to you. This never influences our scores, rankings, or recommendations.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#0f7a5a", fontWeight: 600, textDecoration: "none" }}>Full disclosure →</Link>
          </p>
        </div>
      </div>

      {/* Dark bottom bar */}
      <div style={{ backgroundColor: "#101a16", padding: "16px 24px" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", flexWrap: "wrap", gap: 12,
          justifyContent: "space-between", alignItems: "center",
        }}>
          <p style={{
            fontSize: 12, color: "#9fb0a7",
            fontFamily: "var(--font-hanken), sans-serif", margin: 0,
          }}>
            © {new Date().getFullYear()} Fitlabreviews. All reviews are editorially independent.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: 12, color: "#9fb0a7",
                  fontFamily: "var(--font-hanken), sans-serif",
                  textDecoration: "none", transition: "color 150ms",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#7fd8b4")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9fb0a7")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
