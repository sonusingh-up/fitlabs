import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How affiliate commissions work on Fitlabreviews, which partners we work with, and why commercial relationships never influence our editorial ratings or recommendations.",
  alternates: { canonical: "/affiliate-disclosure" },
};

const sections = [
  {
    id: "what-is-an-affiliate-link",
    title: "What Is an Affiliate Link?",
    body: "An affiliate link is a tracked URL that identifies Fitlabreviews as the referring source for a visit to a third-party website. When you click an affiliate link and complete a qualifying purchase, the retailer or brand pays us a small commission. The price you pay is identical whether or not you use our link — we never receive a portion of your purchase price.",
  },
  {
    id: "which-partners-we-work-with",
    title: "Which Partners We Work With",
    body: "We affiliate with brands and programmes we have reviewed editorially and believe offer genuine value. Current and past affiliate relationships include telehealth weight management programmes, supplement retailers, and direct brand programmes. We do not affiliate with brands we consider deceptive in their marketing, ingredient labelling, or dosing claims. Affiliate status is never a precondition for a review.",
  },
  {
    id: "does-commission-affect-reviews",
    title: "Does Commission Affect Our Reviews?",
    body: "No. Editorial ratings — FSP scores, evidence grades, ingredient assessments — are determined by our review process independently of any commercial arrangement. Reviewers are not informed of the commission rate for any product they assess. We have published reviews that recommend against products despite active affiliate relationships, and we will continue to do so. A higher commission earns no editorial favour.",
  },
  {
    id: "the-firewall",
    title: "The Firewall Between Editorial and Commercial",
    body: "The editorial team makes all rating and recommendation decisions. Affiliate partnerships are managed separately and are not disclosed to reviewers during the review process. No brand can purchase a favourable review, a higher FSP score, or placement in a 'Best Of' roundup. If a brand partner objects to an unfavourable review, the review stands.",
  },
  {
    id: "sponsored-content",
    title: "Sponsored Content",
    body: "Any content that is paid for, sponsored, or influenced by a brand is labelled clearly as 'Sponsored' or 'Paid Partnership' at the top of the page. Sponsored content is editorially distinct from our reviews and research articles. We do not publish sponsored content that makes false health claims or overstates evidence.",
  },
  {
    id: "ftc-compliance",
    title: "FTC & Regulatory Compliance",
    body: "In accordance with FTC guidelines (16 CFR Part 255), all pages containing affiliate links display a visible disclosure. This page constitutes our primary affiliate disclosure. Individual review pages and articles with affiliate links include inline notices. For international readers: equivalent disclosure obligations apply under UK ASA, EU consumer protection regulations, and comparable frameworks in other jurisdictions.",
  },
  {
    id: "third-party-sites",
    title: "Links to Third-Party Sites",
    body: "Affiliate links direct you to third-party websites. Fitlabreviews is not responsible for the content, pricing, availability, or accuracy of information on those sites after you leave our pages. Prices and product availability can change without notice.",
  },
  {
    id: "questions",
    title: "Questions About Our Affiliate Relationships",
    body: "If you want to know whether a specific product or page carries an affiliate relationship, or if you have concerns about how commercial arrangements may have affected a specific piece of content, contact us directly. We will respond to disclosure questions within 5 business days.",
  },
];

export default function AffiliateDisclosurePage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 12 }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Affiliate Disclosure</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>DISCLOSURE · AFD-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Last Updated May 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 20 }}>
            Affiliate{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Disclosure</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 620 }}>
            Transparency is foundational to independent editorial. This document explains every commercial relationship on this site and the editorial firewall that separates them from our ratings.
          </p>

          {/* FTC Banner */}
          <div style={{ marginTop: 32, padding: "18px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #1A6B3A", borderRadius: 8 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6 }}>FTC Disclosure Notice</p>
            <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              Some links on this site are affiliate links. If you click through and make a purchase, Fitlabreviews may earn a commission at no additional cost to you. This does not affect our ratings, rankings, or editorial conclusions.
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
                borderBottom: "1px solid #D4C9B8",
                display: "grid",
                gridTemplateColumns: "3px 1fr",
                gap: "0 28px",
              }}
            >
              <div style={{ width: 3, backgroundColor: i === 0 ? "#C4622D" : "#D4C9B8", borderRadius: 2, alignSelf: "stretch" }} />
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1A1714", marginBottom: 14, letterSpacing: "-0.015em" }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div style={{ marginTop: 56, padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Related Policies</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 20 }}>
            Understand the full picture of how we operate.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/editorial-policy"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Editorial Policy →
            </Link>
            <Link
              href="/medical-disclaimer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Medical Disclaimer
            </Link>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
