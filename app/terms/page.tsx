import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of Fitlabreviews.com — acceptable use, intellectual property, limitation of liability, and governing law.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: "By accessing or using Fitlabreviews.com (the \"Site\"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use the Site. These terms constitute the entire agreement between you and Fitlabreviews with respect to your use of the Site.",
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    items: [
      "Use the Site for lawful purposes only",
      "Not reproduce, copy, or redistribute editorial content without written permission",
      "Not use automated scraping, bots, or crawlers that strain server resources",
      "Not engage in any activity that disrupts or interferes with the Site",
      "Not misrepresent your identity or affiliation with Fitlabreviews",
      "Not attempt to gain unauthorised access to any part of the Site or its infrastructure",
    ],
  },
  {
    id: "content-and-accuracy",
    title: "Content & Accuracy",
    body: "Fitlabreviews publishes editorial content, supplement reviews, ingredient analysis, and research summaries for informational purposes. While we strive for accuracy, we make no warranties — express or implied — about the completeness, reliability, or suitability of the content for any particular purpose. The supplement industry and the underlying research evolve rapidly; content may not reflect the very latest findings at the time you read it.",
  },
  {
    id: "no-medical-advice",
    title: "No Medical Advice",
    body: "Nothing on this Site constitutes medical advice, diagnosis, or treatment. Content is for informational purposes only. You should always consult a qualified healthcare professional before making changes to your diet, supplement regimen, or health plan. Fitlabreviews expressly disclaims any liability for health decisions made based on Site content. See our full Medical Disclaimer for more detail.",
    link: { label: "Read our Medical Disclaimer →", href: "/medical-disclaimer" },
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: "All content on this Site — including text, editorial scoring methodologies (including the Fitlab Scoring Protocol), graphics, logos, and images — is the property of Fitlabreviews or its content licensors and is protected by applicable copyright and intellectual property law. You may share, quote, or excerpt content for non-commercial purposes provided you attribute Fitlabreviews and link back to the original page. Commercial reproduction, systematic copying, or use in AI training datasets without written authorisation is prohibited.",
  },
  {
    id: "affiliate-links",
    title: "Affiliate Links & Commercial Relationships",
    body: "Some links on this Site are affiliate links. Clicking through and making a purchase may result in Fitlabreviews earning a commission at no additional cost to you. These commercial arrangements do not influence our editorial ratings, scores, or recommendations. All material commercial relationships are disclosed on our Affiliate Disclosure page.",
    link: { label: "Read our Affiliate Disclosure →", href: "/affiliate-disclosure" },
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: "The Site contains links to third-party websites, including affiliate partners, referenced studies, brand websites, and regulatory resources. These links are provided for convenience and do not constitute an endorsement of those sites or their content. Fitlabreviews has no control over the content, privacy practices, or availability of third-party sites and accepts no responsibility for them. You access third-party sites at your own risk.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, Fitlabreviews, its editors, authors, officers, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from: (a) your use of or inability to use the Site; (b) reliance on content published on the Site; (c) any errors, omissions, or inaccuracies in content; or (d) any unauthorised access to or alteration of your transmissions or data. In jurisdictions that do not allow the exclusion of certain warranties or limitation of liability, our liability shall be limited to the maximum extent permitted by law.",
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: "You agree to indemnify and hold harmless Fitlabreviews and its team from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from: (a) your violation of these Terms; (b) your use of the Site in a manner not authorised by these Terms; or (c) your infringement of any intellectual property or other rights of any third party.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: "These Terms of Use are governed by and construed in accordance with the laws of the United States. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the United States. If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: "We reserve the right to modify these Terms of Use at any time. Changes are effective immediately upon posting to this page. Continued use of the Site following any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically. Material changes will be noted with an updated 'Last Updated' date.",
  },
];

export default function TermsOfUsePage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 12 }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Terms of Use</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>TERMS · TOS-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Last Updated June 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 20 }}>
            Terms of{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Use</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 620 }}>
            These terms govern your use of Fitlabreviews.com. By using the Site, you agree to them. Please read them carefully.
          </p>

          {/* Plain-language banner */}
          <div style={{ marginTop: 32, padding: "18px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #A89880", borderRadius: 8 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>Plain-Language Summary</p>
            <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              Use the site lawfully. Do not scrape or reproduce content commercially. Our editorial content is not medical advice — consult a professional. We are not liable for supplement decisions you make based on our reviews.
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
              style={{ padding: "40px 0", borderBottom: "1px solid #D4C9B8" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "3px 1fr", gap: "0 28px" }}>
                <div style={{ width: 3, backgroundColor: "#D4C9B8", borderRadius: 2 }} />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.015em" }}>
                    {section.title}
                  </h2>

                  {/* Bullet list (for acceptable use) */}
                  {section.items && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {section.items.map((item, ii) => (
                        <li
                          key={ii}
                          style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}
                        >
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", fontWeight: 700, flexShrink: 0, paddingTop: 2 }}>
                            {String(ii + 1).padStart(2, "0")}
                          </span>
                          <span style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.65 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Plain body */}
                  {section.body && (
                    <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>{section.body}</p>
                  )}

                  {/* Link */}
                  {section.link && (
                    <div style={{ marginTop: 16 }}>
                      <Link href={section.link.href} style={{ fontSize: 13, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                        {section.link.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ marginTop: 56, padding: "28px 32px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Questions about these terms?</p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
            If you have questions about these Terms of Use, please contact us at{" "}
            <a href="mailto:editorial@fitlabreviews.com" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>editorial@fitlabreviews.com</a>.
          </p>
        </div>

        {/* CTA Footer */}
        <div style={{ marginTop: 20, padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Related Policies</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 20 }}>
            Our full suite of editorial and legal policies.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/privacy"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Privacy Policy →
            </Link>
            <Link
              href="/medical-disclaimer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Medical Disclaimer
            </Link>
            <Link
              href="/affiliate-disclosure"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #3A3530", backgroundColor: "transparent", color: "#A89880", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
