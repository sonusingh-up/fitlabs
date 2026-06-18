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
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div style={{ borderBottom: "1px solid #D7DDD9", backgroundColor: "#F2F8F4" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D7DDD9" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>About</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>

        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 16 }}>
            ABOUT US · EST. 2024
          </p>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#17211C", lineHeight: 0.95, marginBottom: 24 }}>
            We built the supplement
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>editorial we wanted.</em>
          </h1>
          <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.8, maxWidth: 620 }}>
            Fitlabreviews exists because the supplement information landscape is broken. Most reviews are written by people paid to recommend products. Most "best-of" lists are affiliate directories dressed up as editorial content. We decided to do it differently.
          </p>
        </div>

        <div style={{ marginBottom: 64, padding: 32, backgroundColor: "#0A4F3B", borderRadius: 14 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#14A474", marginBottom: 16 }}>Our Mission</p>
          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 400, fontStyle: "italic", color: "#F6F8F6", lineHeight: 1.4 }}>
            "To give supplement consumers access to the same quality of information that professional athletes and sports scientists have always had — without the paywall, the jargon, or the bias."
          </p>
        </div>

        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 24 }}>Our Values</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
            {[
              { num: "01", title: "Evidence Over Anecdote", body: "Every recommendation references published research. We cite sources, acknowledge limitations, and note when evidence is weak." },
              { num: "02", title: "Independence is Non-Negotiable", body: "We accept no payment from brands for reviews. Affiliate commissions are disclosed and do not influence our ratings." },
              { num: "03", title: "Ingredient-First, Brand-Second", body: "We evaluate formulas on their scientific merit. A great formula from an unknown brand can outscore a mediocre product from a famous one." },
              { num: "04", title: "Honesty About Limitations", body: "Supplements are not magic. We say this clearly, often, and without embarrassment. The science has limits and we respect that." },
              { num: "05", title: "American Market Context", body: "Most supplement editorial is written for Western markets. We provide context specific to American consumers — pricing, availability, authenticity." },
            ].map((v, i) => (
              <div key={v.num} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24, padding: "24px 24px", borderBottom: "1px solid #E4E8E5", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", fontWeight: 700, paddingTop: 4 }}>{v.num}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#17211C", marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
            Editorial Policy <ArrowRight size={13} />
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #E4E8E5", color: "#3F4B43", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
            Get in Touch <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
