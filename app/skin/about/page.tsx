import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SkinBreadcrumb from "@/components/ui/SkinBreadcrumb";

export const metadata: Metadata = {
  title: "About the Skin Health Section",
  description:
    "About the Fitlabreviews Skin Health section — our mission, what we cover, how we research, and our commitment to evidence-based skincare writing.",
  alternates: { canonical: "/skin/about" },
};

const sections = [
  {
    label: "Guides",
    href: "/skin/guides",
    desc: "Research-led articles on skincare concerns, routines, and active ingredients — written with clinical sources, not brand talking points.",
  },
  {
    label: "Conditions",
    href: "/skin/conditions",
    desc: "Evidence-based profiles of common skin conditions: causes, symptoms, and treatment options sourced from dermatology clinical guidelines.",
  },
  {
    label: "Routines",
    href: "/skin/routines",
    desc: "Step-by-step protocols sequenced for efficacy, built from ingredient science rather than trend-driven convention.",
  },
  {
    label: "Ingredients",
    href: "/skin/ingredients",
    desc: "Deep-dive profiles on skincare actives — what the published research actually says about benefits, risks, effective concentrations, and formulation context.",
  },
];

const standards = [
  { title: "Every claim cites a source", body: "If we say an ingredient does something, we cite the study that says it. Author, year, journal. No 'studies show' without naming them." },
  { title: "Evidence levels are explicit", body: "We assign Strong / Moderate / Limited / Emerging / Insufficient to specific claims. A reader should always know how confident we are in what we write." },
  { title: "We name our limitations", body: "We are not dermatologists. We do not do independent lab testing. We publish our methodology and our known gaps. See our Methodology page for the full picture." },
  { title: "Corrections are visible", body: "If we publish an error, we correct it, date it, and note what changed. Nothing is silently deleted or quietly amended." },
  { title: "Affiliates don't move rankings", body: "A product we earn a commission on gets no ranking advantage. Our ingredient evaluations and routine recommendations are built from the evidence base, not the commercial relationship." },
];

export default function SkinAboutPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <SkinBreadcrumb items={[{ label: "About" }]} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>ABOUT · SKIN-ABOUT-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
            About Fitlabreviews Skin
          </h1>
          <p style={{ fontSize: 17, color: "#5C5650", lineHeight: 1.75, maxWidth: 600 }}>
            The Fitlabreviews Skin Health section exists to bring the same evidence-first standard we apply to supplement research to the world of skincare.
          </p>
        </div>

        {/* Mission panel */}
        <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 16 }}>Mission</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.45rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.35, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Evidence-led skincare research. No marketing. No trends. No affiliate-influenced recommendations.
          </p>
          <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.7, margin: 0 }}>
            The skincare industry runs on aspiration, aesthetics, and marketing budgets. We approach it the way we approach supplements — ingredient by ingredient, study by study, claim by claim. The question is never "does this brand say it works?" The question is always "what does the published research show, and at what concentration, in what formulation, for what population?"
          </p>
        </div>

        {/* Why skincare */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Why Skincare</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
            Skincare is a category where the gap between marketing claims and clinical evidence is enormous. A serum that costs $200 may be built around an ingredient with no meaningful human trial data. A drugstore product with well-studied actives at clinically relevant concentrations may outperform it. Most consumers have no way to tell the difference.
          </p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            The Fitlabreviews Skin section exists to close that gap. We translate published dermatology and cosmetic science research into plain-language profiles, routines, and guides — without accepting brand talking points as evidence, and without letting affiliate economics shape what we recommend.
          </p>
        </section>

        {/* What we cover */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>What We Cover</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {sections.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                style={{ display: "block", padding: "20px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714" }}>{s.label}</span>
                  <ArrowRight size={14} style={{ color: "#C4622D", flexShrink: 0, marginTop: 2 }} />
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quality standards */}
        <section style={{ marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>Quality Standards</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
            {standards.map((s, i) => (
              <div key={s.title} style={{ display: "grid", gridTemplateColumns: "8px 1fr", borderBottom: i < standards.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div style={{ backgroundColor: "#C4622D" }} />
                <div style={{ padding: "18px 20px" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Contact */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Team & Contact</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
            The Skin Health section is produced by the Fitlabreviews editorial team — the same team behind our supplement reviews and ingredient research. Author credentials and areas of expertise are listed on individual author profile pages. We do not use anonymous content or undisclosed AI generation.
          </p>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            Questions, corrections, or content suggestions can be sent through our contact page. We read and respond to substantive editorial queries.
          </p>
        </section>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/authors" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Meet the Team →
          </Link>
          <Link href="/skin/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Research Methodology
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
