import type { Metadata } from "next";
import Link from "next/link";
import FeaturedBmrCalc from "./FeaturedBmrCalc";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free Calculators & Tools (2026) — BMR, Macros, TDEE",
  description:
    "Research-grade fitness calculators built on validated formulas. BMR, TDEE, macros, protein, body fat — free, instant, no sign-up. Mifflin-St Jeor powered.",
  alternates: { canonical: "/tools" },
};

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fitness Calculators & Tools",
  url: "https://fitlabreviews.com/tools",
  description:
    "Research-grade fitness calculators built on validated formulas — BMR, TDEE, macros, protein, body fat percentage, and more.",
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
};

interface ToolCard {
  title: string;
  description: string;
  href: string;
  status: "live" | "soon";
}

const tools: ToolCard[] = [
  {
    title: "BMR Calculator",
    description: "Calories you burn at rest",
    href: "/tools/free/bmr-calculator",
    status: "live",
  },
  {
    title: "Macros Calculator",
    description: "Daily carb, protein & fat split",
    href: "/tools/free/macros-calculator",
    status: "live",
  },
  {
    title: "Protein Calculator",
    description: "How much you actually need",
    href: "/tools/protein-calculator",
    status: "live",
  },
  {
    title: "TDEE Calculator",
    description: "Total daily energy burn",
    href: "#",
    status: "soon",
  },
  {
    title: "1RM Calculator",
    description: "Estimate your one-rep max",
    href: "#",
    status: "soon",
  },
  {
    title: "Body Fat %",
    description: "Navy method estimate",
    href: "#",
    status: "soon",
  },
  {
    title: "Water Intake",
    description: "Daily hydration target",
    href: "#",
    status: "soon",
  },
  {
    title: "Creatine Loading",
    description: "Load & maintenance dosing",
    href: "#",
    status: "soon",
  },
];

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />

      {/* PAGE HEAD */}
      <section style={{
        background: "linear-gradient(120deg, #e7f2ec, #f2f8f4)",
        borderBottom: "1px solid #e0ebe4",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 32px 48px" }}>
          <div style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#0f7a5a",
            marginBottom: 14,
          }}>
            Free · instant · no sign-up
          </div>
          <h1 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.25rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
            lineHeight: 1.04,
            color: "#17211c",
          }}>
            Calculators & <em style={{ fontStyle: "italic", color: "#0f7a5a" }}>tools</em>
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#3f4b43",
            margin: 0,
            maxWidth: 600,
          }}>
            Dial in your numbers with research-grade tools — built on the Mifflin-St Jeor equation and validated formulas, not guesswork.
          </p>
        </div>
      </section>

      {/* FEATURED BMR CALCULATOR */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 32px 0" }}>
        <FeaturedBmrCalc />
      </section>

      {/* ALL TOOLS GRID */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 32px 88px" }}>
        <h2 style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 28,
          fontWeight: 500,
          margin: "0 0 24px",
          color: "#17211c",
          letterSpacing: "-0.02em",
        }}>
          All <em style={{ fontStyle: "italic", color: "#0f7a5a" }}>tools</em>
        </h2>

        <div className="tools-grid">
          {tools.map((tool) => {
            const isLive = tool.status === "live";
            const CardTag = isLive ? Link : "div";
            return (
              <CardTag
                key={tool.title}
                href={isLive ? tool.href : undefined as any}
                className="tool-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid #e4e8e5",
                  borderRadius: 14,
                  padding: 22,
                  minHeight: 140,
                  cursor: isLive ? "pointer" : "default",
                  opacity: isLive ? 1 : 0.8,
                }}
              >
                <span style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isLive ? "#0f7a5a" : "#8a948c",
                }}>
                  {isLive ? "LIVE" : "SOON"}
                </span>
                <div style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 21,
                  fontWeight: 500,
                  margin: "14px 0 6px",
                  color: "#17211c",
                }}>
                  {tool.title}
                </div>
                <div style={{
                  fontSize: 13,
                  color: "#6b7770",
                }}>
                  {tool.description}
                </div>
              </CardTag>
            );
          })}
        </div>
      </section>
    </>
  );
}
