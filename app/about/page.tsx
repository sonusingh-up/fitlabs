import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Mission, Team & Editorial Process",
  description: "Fitlabreviews is an independent supplement research publication. Learn about our editorial process, values, and the team behind the reviews.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>About</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>
            ABOUT US · EST. 2024
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1A1714", lineHeight: 0.95, marginBottom: 24 }}>
            We built the supplement
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>editorial we wanted.</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, maxWidth: 620 }}>
            Fitlabreviews exists because the supplement information landscape is broken. Most reviews are written by people paid to recommend products. Most "best-of" lists are affiliate directories dressed up as editorial content. We decided to do it differently.
          </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: 64, padding: 32, backgroundColor: "#1A1714", borderRadius: 3 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Our Mission</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 400, fontStyle: "italic", color: "#F2EBD9", lineHeight: 1.4 }}>
            "To give supplement consumers access to the same quality of information that professional athletes and sports scientists have always had — without the paywall, the jargon, or the bias."
          </p>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 24 }}>Our Values</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 3, overflow: "hidden" }}>
            {[
              { num: "01", title: "Evidence Over Anecdote", body: "Every recommendation references published research. We cite sources, acknowledge limitations, and note when evidence is weak." },
              { num: "02", title: "Independence is Non-Negotiable", body: "We accept no payment from brands for reviews. Affiliate commissions are disclosed and do not influence our ratings." },
              { num: "03", title: "Ingredient-First, Brand-Second", body: "We evaluate formulas on their scientific merit. A great formula from an unknown brand can outscore a mediocre product from a famous one." },
              { num: "04", title: "Honesty About Limitations", body: "Supplements are not magic. We say this clearly, often, and without embarrassment. The science has limits and we respect that." },
              { num: "05", title: "American Market Context", body: "Most supplement editorial is written for Western markets. We provide context specific to American consumers — pricing, availability, authenticity." },
            ].map((v, i) => (
              <div key={v.num} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24, padding: "24px 24px", borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D", fontWeight: 700, paddingTop: 4 }}>{v.num}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Editorial Policy <ArrowRight size={13} />
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Get in Touch <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
