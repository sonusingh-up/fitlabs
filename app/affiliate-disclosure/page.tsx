import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How affiliate commissions work on Fitlabreviews, which partners we work with, and why commercial relationships never influence our editorial ratings or recommendations.",
  alternates: { canonical: "/affiliate-disclosure" },
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

        {/* Notice banner */}
        <div style={{ padding: "18px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #1A6B3A", borderRadius: 8, marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6 }}>Disclosure Notice</p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
            Some links on this site are affiliate links. If you click through and make a purchase, Fitlabreviews may earn a commission at no additional cost to you. This does not affect our ratings, rankings, or editorial conclusions.
          </p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLOSURE · AFD-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Affiliate Disclosure
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Last updated: May 26, 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              title: "What Is an Affiliate Link?",
              body: "An affiliate link is a tracked URL that identifies Fitlabreviews as the referring source for a visit to a third-party website. When you click an affiliate link and complete a qualifying purchase, the retailer or brand pays us a small commission. The price you pay is identical whether or not you use our link — we never receive a portion of your purchase price.",
            },
            {
              title: "Which Partners We Work With",
              body: "We affiliate with brands and programmes we have reviewed editorially and believe offer genuine value. Current and past affiliate relationships include telehealth weight management programmes (including WellMedr), supplement retailers, and direct brand programmes. We do not affiliate with brands we consider deceptive in their marketing, ingredient labelling, or dosing claims. Affiliate status is never a precondition for a review.",
            },
            {
              title: "Does Commission Affect Our Reviews?",
              body: "No. Editorial ratings — FSP scores, evidence grades, ingredient assessments — are determined by our review process independently of any commercial arrangement. Reviewers are not informed of the commission rate for any product they assess. We have published reviews that recommend against products despite active affiliate relationships, and we will continue to do so. A higher commission earns no editorial favour.",
            },
            {
              title: "The Firewall Between Editorial and Commercial",
              body: "The editorial team makes all rating and recommendation decisions. Affiliate partnerships are managed separately and are not disclosed to reviewers during the review process. No brand can purchase a favourable review, a higher FSP score, or placement in a 'Best Of' roundup. If a brand partner objects to an unfavourable review, the review stands.",
            },
            {
              title: "Sponsored Content",
              body: "Any content that is paid for, sponsored, or influenced by a brand is labelled clearly as 'Sponsored' or 'Paid Partnership' at the top of the page. Sponsored content is editorially distinct from our reviews and research articles. We do not publish sponsored content that makes false health claims or overstates evidence.",
            },
            {
              title: "FTC & Regulatory Compliance",
              body: "In accordance with FTC guidelines (16 CFR Part 255), all pages containing affiliate links display a visible disclosure. This page constitutes our primary affiliate disclosure. Individual review pages and articles with affiliate links include inline notices. For international readers: equivalent disclosure obligations apply under UK ASA, EU consumer protection regulations, and comparable frameworks in other jurisdictions.",
            },
            {
              title: "Link to Third-Party Sites",
              body: "Affiliate links direct you to third-party websites. Fitlabreviews is not responsible for the content, pricing, availability, or accuracy of information on those sites after you leave our pages. Prices and product availability can change without notice.",
            },
            {
              title: "Questions About Our Affiliate Relationships",
              body: "If you want to know whether a specific product or page carries an affiliate relationship, or if you have concerns about how commercial arrangements may have affected a specific piece of content, contact us directly. We will respond to disclosure questions within 5 business days.",
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
