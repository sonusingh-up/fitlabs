import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const reviewLinks = [
  { label: "All Reviews", href: "/reviews" },
  { label: "Protein Powders", href: "/category/protein-powder" },
  { label: "Pre-Workout", href: "/category/pre-workout" },
  { label: "Creatine", href: "/category/creatine" },
  { label: "Best-Of Roundups", href: "/best" },
];

const researchLinks = [
  { label: "Research Articles", href: "/research" },
  { label: "Goal Guides", href: "/goals" },
  { label: "Ingredient Library", href: "/ingredients" },
  { label: "Brand Directory", href: "/brands" },
  { label: "BMR & Macros Tools", href: "/tools" },
];

const aboutLinks = [
  { label: "About FitLab", href: "/authors" },
  { label: "Our Team", href: "/authors" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Methodology", href: "/methodology" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FAF5EC", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Main footer grid */}
      <div className="footer-main-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 56px", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 40 }}>

        {/* Brand + newsletter */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <span style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 900,
              fontSize: 24,
              color: "#17211C",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}>
              fitlabreviews
            </span>
          </div>

          <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 22, fontWeight: 500, margin: "0 0 10px", color: "#17211C" }}>
            Get the Research Dispatch
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#586259", margin: "0 0 18px", maxWidth: 320 }}>
            Honest, evidence-led supplement and wellness research in your inbox. No hype, no sponsors.
          </p>
          <NewsletterForm />
          <p style={{ fontSize: 12, color: "#6B7770", marginTop: 12 }}>
            Your{" "}
            <Link href="/privacy" style={{ color: "#0F7A5A" }}>privacy</Link>
            {" "}matters. Unsubscribe anytime.
          </p>
        </div>

        {/* Reviews */}
        <div>
          <h4 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 18px" }}>
            Reviews
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {reviewLinks.map((l) => (
              <li key={l.label} style={{ marginBottom: 13 }}>
                <Link href={l.href} className="footer-link" style={{ fontSize: 14.5, color: "#3F4B43" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Research & Goals */}
        <div>
          <h4 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 18px" }}>
            Research &amp; Goals
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {researchLinks.map((l) => (
              <li key={l.label} style={{ marginBottom: 13 }}>
                <Link href={l.href} className="footer-link" style={{ fontSize: 14.5, color: "#3F4B43" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F7A5A", margin: "0 0 18px" }}>
            About
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {aboutLinks.map((l) => (
              <li key={l.label} style={{ marginBottom: 13 }}>
                <Link href={l.href} className="footer-link" style={{ fontSize: 14.5, color: "#3F4B43" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimers */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 32px" }}>
        <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#6B7770", margin: "0 0 12px", maxWidth: 880 }}>
          <strong style={{ color: "#586259" }}>Not medical advice.</strong>{" "}
          Content on Fitlabreviews is educational and reflects our reading of published research. Nothing here replaces a licensed physician, dietician, or pharmacist. Consult a qualified professional before starting, stopping, or combining any supplement.
        </p>
        <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#6B7770", margin: 0, maxWidth: 880 }}>
          <strong style={{ color: "#586259" }}>Affiliate disclosure.</strong>{" "}
          Some product links are affiliate links — if you buy, we earn a small commission at no extra cost to you. This never influences our scores, rankings, or recommendations.
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#101A16", color: "#9FB0A7" }}>
        <div className="footer-bottom-bar" style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, fontSize: 13 }}>
          <span>© 2026 Fitlabreviews. All reviews are editorially independent.</span>
          <div className="footer-bottom-links" style={{ display: "flex", gap: 22 }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
              { label: "Medical Disclaimer", href: "/medical-disclaimer" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ color: "#9FB0A7", fontSize: 13, textDecoration: "none" }}
                className="footer-bottom-link"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
