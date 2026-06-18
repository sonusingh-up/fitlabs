import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, FileText } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Editorial & Media Enquiries",
  description: "Contact the Fitlabreviews editorial team for review submissions, corrections, media inquiries, or general questions about our supplement research.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Contact</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "start" }}>

          {/* Left */}
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>CONTACT</p>
            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
              Get in <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>touch.</em>
            </h1>
            <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.75, marginBottom: 40, maxWidth: 380 }}>
              We welcome corrections, reader questions, media inquiries, and feedback on our reviews. We do not accept payment for editorial coverage.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: <Mail size={18} />, label: "Editorial", value: "editorial@fitlabreviews.com", desc: "Reviews, corrections, research questions" },
                { icon: <MessageSquare size={18} />, label: "General", value: "hello@fitlabreviews.com", desc: "General inquiries and feedback" },
                { icon: <FileText size={18} />, label: "Media", value: "press@fitlabreviews.com", desc: "Press, partnerships, media requests" },
              ].map((contact) => (
                <div key={contact.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, color: "#5C5650", flexShrink: 0 }}>
                    {contact.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>{contact.label}</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#C4622D", marginBottom: 2 }}>{contact.value}</p>
                    <p style={{ fontSize: 12, color: "#8A8480" }}>{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ border: "1px solid #D4C9B8", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480" }}>Send a Message</p>
            </div>
            <div style={{ padding: 28 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
