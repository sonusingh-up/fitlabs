import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import type { EvidenceLevel } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — Research Deep-Dive`,
    description: `Evidence-based research article with trial breakdowns, mechanism analysis, and clinical data. Reviewed and fact-checked by our editorial team.`,
    alternates: { canonical: `/research/${slug}` },
  };
}

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "what-is", label: "What Is Creatine?" },
  { id: "loading", label: "Loading Protocol" },
  { id: "maintenance", label: "Maintenance Phase" },
  { id: "evidence", label: "Research Summary" },
  { id: "who", label: "Who Should Use It" },
  { id: "safety", label: "Safety" },
  { id: "verdict", label: "Verdict" },
];

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/research/creatine-guide" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Creatine Guide</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>ART-2025-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Ingredient Science</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 20 }}>
            The Complete Guide to <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Creatine Loading</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Published: April 2026</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>12 min read</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <EvidenceBadge level="strong" />
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* TOC */}
          <div className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
          </div>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>

            <section id="intro" style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85 }}>
                Creatine is one of the most studied sports supplements in history. Decades of research consistently confirm its ability to improve short-burst power, accelerate lean mass gains, and support certain cognitive functions. Despite this evidence, confusion about loading protocols persists — and it&apos;s costing people results.
              </p>
            </section>

            <section id="what-is" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                What Is Creatine?
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Creatine is a naturally occurring compound made from arginine, glycine, and methionine. Approximately 95% of the body&apos;s creatine is stored in skeletal muscle as phosphocreatine — the rapidly accessible energy reserve your muscles use during the first 10 seconds of maximal effort.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                Supplementing with creatine increases this phosphocreatine pool, allowing you to sustain high-intensity output for longer, recover faster between sets, and ultimately lift more over time.
              </p>
            </section>

            <section id="loading" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Loading Protocol
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                A creatine loading protocol involves taking 20g/day (split into 4 × 5g doses) for 5–7 days. This saturates muscle creatine stores rapidly and produces ergogenic effects within the first week.
              </p>
              <div style={{ padding: "20px 22px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 20 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 10 }}>Loading Protocol</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <p style={{ fontSize: 12, color: "#8A8480", marginBottom: 3 }}>Duration</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714" }}>5–7 days</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#8A8480", marginBottom: 3 }}>Total Dose</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714" }}>20g/day</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#8A8480", marginBottom: 3 }}>Split Into</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714" }}>4 × 5g servings</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#8A8480", marginBottom: 3 }}>Side Effects</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714" }}>Mild GI upset possible</p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.7 }}>
                <strong>Important:</strong> Loading is optional. A daily 5g dose achieves the same muscle saturation in 3–4 weeks without any digestive discomfort. If you prefer not to load, you still get the same long-term outcome.
              </p>
            </section>

            <section id="evidence" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Research Summary
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { claim: "Improves maximal strength (1RM) by 5–15%", level: "strong" as EvidenceLevel },
                  { claim: "Increases lean body mass over 4–12 weeks", level: "strong" as EvidenceLevel },
                  { claim: "Improves high-intensity exercise performance", level: "strong" as EvidenceLevel },
                  { claim: "May support cognitive function in sleep-deprived individuals", level: "moderate" as EvidenceLevel },
                  { claim: "Neuroprotective effects in aging populations", level: "emerging" as EvidenceLevel },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "12px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontSize: 13, color: "#2D2926" }}>{item.claim}</p>
                    <EvidenceBadge level={item.level} showIcon={false} />
                  </div>
                ))}
              </div>
            </section>

            <section id="verdict" style={{ marginBottom: 48 }}>
              <div style={{ padding: 28, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Editorial Verdict</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 12 }}>
                  Buy it. Take 5g daily. Keep it simple.
                </h3>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.75 }}>
                  Creatine monohydrate is the closest thing to a consensus supplement in sports science. Buy the cheapest pure monohydrate you can find. Take 5g a day. Load if you want faster results in the first month. That&apos;s it.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
