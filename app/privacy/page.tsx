import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fitlabreviews collects, uses, and protects your personal information. Our cookie policy, third-party services, and your rights under GDPR and CCPA.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    subsections: [
      {
        label: "Analytics Data",
        body: "We use Google Analytics 4 (GA4) to understand how visitors use the site. GA4 collects anonymised data including pages visited, time on site, device type, browser, and approximate geographic location (country/region level). We have enabled IP anonymisation. We do not use GA4 to identify individual users.",
      },
      {
        label: "Newsletter Subscriptions",
        body: "If you subscribe to The Research Dispatch, we collect your email address. This is stored securely and used only to send our editorial newsletter. You can unsubscribe at any time using the link in any email.",
      },
      {
        label: "Contact Form Submissions",
        body: "If you contact us via the contact form, we collect your name, email address, and the content of your message. This data is used solely to respond to your enquiry and is not added to any marketing list without your explicit consent.",
      },
      {
        label: "Cookies",
        body: "We use functional cookies (essential for site operation), analytics cookies (GA4), and preference cookies. We do not use advertising or retargeting cookies. You can manage cookie preferences through your browser settings.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    body: "We use the information we collect to: (a) understand how our content is used so we can improve it; (b) send newsletters to subscribers who have opted in; (c) respond to enquiries and support requests; (d) detect and prevent technical errors or abuse. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    services: [
      { name: "Google Analytics 4", purpose: "Site usage analytics", link: "https://policies.google.com/privacy" },
      { name: "Sanity CMS", purpose: "Content management backend", link: "https://www.sanity.io/legal/privacy" },
      { name: "Vercel", purpose: "Hosting and edge delivery", link: "https://vercel.com/legal/privacy-policy" },
      { name: "Resend / Mailchimp", purpose: "Newsletter delivery", link: "https://resend.com/legal/privacy-policy" },
      { name: "CourtListener (via API)", purpose: "Legal citation research tool", link: "https://free.law/privacy/" },
    ],
  },
  {
    id: "cookies-policy",
    title: "Cookies Policy",
    body: "Cookies are small text files stored by your browser. We use: (1) Essential cookies — required for basic functionality (e.g. session management). These cannot be disabled. (2) Analytics cookies — GA4 cookies that help us understand traffic patterns. You can opt out by using the Google Analytics opt-out browser add-on or by disabling third-party cookies in your browser settings. (3) Preference cookies — remember display preferences such as dark/light mode if applicable. No cookies are used for advertising, retargeting, or cross-site tracking.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: "Analytics data is retained for 14 months in GA4 (the minimum configurable period). Newsletter subscriber data is retained until you unsubscribe. Contact form submissions are retained for up to 12 months for the purposes of responding to follow-up queries. After this period, submissions are deleted from our systems. We do not archive personal communications beyond what is operationally necessary.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    rights: [
      { right: "Access", desc: "Request a copy of the personal data we hold about you." },
      { right: "Rectification", desc: "Ask us to correct inaccurate or incomplete data." },
      { right: "Erasure", desc: "Request deletion of your personal data ('right to be forgotten')." },
      { right: "Portability", desc: "Receive your data in a machine-readable format." },
      { right: "Objection", desc: "Object to processing based on legitimate interest (e.g. analytics)." },
      { right: "Opt-Out (CCPA)", desc: "California residents may opt out of the sale of personal information. We do not sell personal data, but you may exercise this right by contacting us." },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    body: "We implement industry-standard security measures including HTTPS/TLS encryption for all data in transit, access controls restricted to authorised personnel, and use of reputable third-party services with their own security certifications. No transmission over the internet is 100% secure, and we cannot guarantee absolute security, but we take our obligations seriously.",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: "Fitlabreviews is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will delete it promptly.",
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be noted with an updated 'Last Updated' date at the top of this page. Continued use of the site after any changes constitutes acceptance of the updated policy. We recommend checking this page periodically.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 12 }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Privacy Policy</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>POLICY · PRV-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Last Updated June 2026</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 20 }}>
            Privacy{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Policy</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 620 }}>
            This policy describes what data Fitlabreviews collects, how we use it, and the rights you have over it under GDPR, CCPA, and equivalent frameworks.
          </p>

          {/* Summary Banner */}
          <div style={{ marginTop: 32, padding: "18px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #5B8FA8", borderRadius: 8 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5B8FA8", marginBottom: 6 }}>Plain-Language Summary</p>
            <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
              We collect only what we need. We use Google Analytics for traffic data (anonymised). We send newsletters only to opt-in subscribers. We do not sell your data, ever.
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
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.015em" }}>
                    {section.title}
                  </h2>

                  {/* Subsections (for Information We Collect) */}
                  {section.subsections && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {section.subsections.map((sub) => (
                        <div key={sub.label} style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{sub.label}</p>
                          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Third-party services table */}
                  {section.services && (
                    <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
                      {section.services.map((svc, si) => (
                        <div
                          key={svc.name}
                          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderBottom: si < section.services!.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: si % 2 === 0 ? "#F8F2E4" : "#F2EBD9", padding: "14px 20px" }}
                        >
                          <div>
                            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{svc.name}</p>
                            <p style={{ fontSize: 12, color: "#8A8480", margin: 0 }}>{svc.purpose}</p>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <a href={svc.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>
                              Privacy Policy →
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Your Rights */}
                  {section.rights && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {section.rights.map((r) => (
                        <div key={r.right} style={{ display: "flex", gap: 16, padding: "14px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#C4622D", flexShrink: 0, paddingTop: 2, minWidth: 70 }}>{r.right}</span>
                          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Plain body text */}
                  {section.body && (
                    <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>{section.body}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for data requests */}
        <div style={{ marginTop: 56, padding: "28px 32px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Data Requests</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>
            Exercise your privacy rights
          </p>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7, marginBottom: 20 }}>
            To exercise any of the rights listed above, or to ask questions about your personal data, contact our editorial team. We respond to all data requests within 30 days.
          </p>
          <a
            href="mailto:privacy@fitlabreviews.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
          >
            privacy@fitlabreviews.com →
          </a>
        </div>

        {/* CTA Footer */}
        <div style={{ marginTop: 20, padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 10 }}>Related Policies</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 20 }}>
            Understand the full picture of how we operate.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/terms"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
            >
              Terms of Use →
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
