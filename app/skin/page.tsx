import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getAllSkinGuides,
  getAllSkinConditions,
  getAllSkinRoutines,
  getAllSkinIngredients,
} from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: { absolute: "Skin Health — Evidence-Led Skincare · Fitlabreviews" },
  description:
    "Research-grade skincare guides, ingredient analysis, condition profiles, and daily routines. Evidence-led, editorially independent skin health.",
  alternates: { canonical: "/skin" },
};

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59",
  intermediate: "#C4622D",
  advanced: "#8B1A1A",
};

export default async function SkinHomePage() {
  const [guides, conditions, routines, ingredients] = await Promise.all([
    getAllSkinGuides(),
    getAllSkinConditions(),
    getAllSkinRoutines(),
    getAllSkinIngredients(),
  ]);

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* HERO */}
      <section style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 40, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4622D" }}>Evidence-Led Skincare</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "end" }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1A1714", lineHeight: 0.95, marginBottom: 24 }}>
                Evidence-led
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skincare</em>
                <br />
                research.
              </h1>
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.7, maxWidth: 440, marginBottom: 32 }}>
                Ingredient profiles, routine guides, and condition breakdowns built on published dermatology research — not brand marketing.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/skin/guides" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Browse Guides <ArrowRight size={14} />
                </Link>
                <Link href="/skin/ingredients" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, fontWeight: 500, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Ingredient Library
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 400, border: "1px solid rgba(212,201,184,0.4)" }}>
              <div style={{ padding: "14px 20px", background: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Skin Library</span>
                <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.1em" }}>● LIVE</span>
              </div>
              <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)" }} />
              {[
                { label: "Guides Published", value: `${guides.length || "—"}`, sub: "Across 7 categories" },
                { label: "Conditions Profiled", value: `${conditions.length || "—"}`, sub: "With cause & treatment breakdowns" },
                { label: "Skin Ingredients", value: `${ingredients.length || "—"}`, sub: "Evidence-rated profiles" },
                { label: "Routines", value: `${routines.length || "—"}`, sub: "Step-by-step protocols" },
              ].map((stat, i) => (
                <div key={stat.label} style={{ padding: "16px 20px", borderBottom: "1px solid #EDE8DF", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{stat.label}</p>
                    <p style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{stat.sub}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 24, fontWeight: 700, color: "#1A1714" }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES */}
      {guides.length > 0 && (
        <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 01</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Guides</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
                Latest <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skincare guides</em>
              </h2>
            </div>
            <Link href="/skin/guides" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              All Guides <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 12 }}>
            {guides.slice(0, 6).map((guide: any) => (
              <Link
                key={guide.slug}
                href={`/skin/guides/${guide.slug}`}
                className="hub-card"
                style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", textDecoration: "none", backgroundColor: "#F8F2E4" }}
              >
                <div style={{ height: 3, backgroundColor: guide.difficulty ? difficultyColor[guide.difficulty] ?? "#C4622D" : "#C4622D" }} />
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    {guide.category && (
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em" }}>{guide.category}</span>
                    )}
                    {guide.difficulty && (
                      <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: difficultyColor[guide.difficulty] ?? "#8A8480", backgroundColor: `${difficultyColor[guide.difficulty] ?? "#8A8480"}14`, border: `1px solid ${difficultyColor[guide.difficulty] ?? "#8A8480"}33` }}>{guide.difficulty}</span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{guide.title}</h3>
                  {guide.description && (
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, margin: 0 }}>{guide.description.slice(0, 100)}{guide.description.length > 100 ? "…" : ""}</p>
                  )}
                  {guide.timeEstimate && (
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480" }}>{guide.timeEstimate} →</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CONDITIONS */}
      {conditions.length > 0 && (
        <section style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 02</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Conditions</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
                  Common <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skin conditions</em>
                </h2>
              </div>
              <Link href="/skin/conditions" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                All Conditions <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {conditions.slice(0, 6).map((condition: any) => (
                <Link
                  key={condition.slug}
                  href={`/skin/conditions/${condition.slug}`}
                  className="hub-card"
                  style={{ display: "block", padding: "18px 20px", borderRadius: 12, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
                >
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, marginBottom: 8 }}>{condition.title}</h3>
                  {condition.description && (
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, marginBottom: 10 }}>{condition.description.slice(0, 90)}{condition.description.length > 90 ? "…" : ""}</p>
                  )}
                  {condition.symptoms?.length > 0 && (
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{condition.symptoms.length} symptoms profiled</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROUTINES */}
      {routines.length > 0 && (
        <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 03</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Routines</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
                Step-by-step <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>routines</em>
              </h2>
            </div>
            <Link href="/skin/routines" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              All Routines <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {routines.slice(0, 5).map((routine: any, i: number) => (
              <Link
                key={routine.slug}
                href={`/skin/routines/${routine.slug}`}
                className="hub-row-link"
                style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "16px 20px", borderBottom: i < routines.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", textDecoration: "none" }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{routine.title}</p>
                  {routine.skinTypes?.length > 0 && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {routine.skinTypes.slice(0, 3).map((type: string) => (
                        <span key={type} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "1px 6px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>{type}</span>
                      ))}
                    </div>
                  )}
                </div>
                {routine.duration && (
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", whiteSpace: "nowrap" }}>{routine.duration}</span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* INGREDIENTS */}
      {ingredients.length > 0 && (
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#1A1714" }} className="pad-section px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650" }}>SEC. 04</span>
                  <span style={{ width: 24, height: 1, backgroundColor: "#5C5650", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Ingredients</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#F2EBD9", lineHeight: 1.1 }}>
                  Know what <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8A8480" }}>you&apos;re applying</em>
                </h2>
              </div>
              <Link href="/skin/ingredients" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid rgba(212,201,184,0.3)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                Ingredient Library <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {ingredients.slice(0, 6).map((ing: any) => (
                <Link
                  key={ing.slug}
                  href={`/skin/ingredients/${ing.slug}`}
                  className="hub-card"
                  style={{ display: "block", padding: "18px 20px", borderRadius: 12, border: "1px solid rgba(212,201,184,0.15)", backgroundColor: "rgba(242,235,217,0.05)", textDecoration: "none" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9", lineHeight: 1.3 }}>{ing.title}</h3>
                    {ing.evidenceLevel && (
                      <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0, color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}1A`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}40` }}>
                        {ing.evidenceLevel}
                      </span>
                    )}
                  </div>
                  {ing.category && (
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650", marginBottom: 8 }}>{ing.category}</p>
                  )}
                  {ing.benefits?.length > 0 && (
                    <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5 }}>{ing.benefits[0]}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT THIS SECTION */}
      <section style={{ borderTop: "1px solid #D4C9B8" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 05</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>About This Section</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 32 }}>
            How we <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>research</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              {
                label: "About",
                code: "SKIN-ABOUT",
                desc: "Our mission, what we cover, and why evidence-first skincare matters.",
                href: "/skin/about",
              },
              {
                label: "Methodology",
                code: "SKIN-METH-001",
                desc: "How we assign evidence levels and evaluate ingredient claims against dermatology research.",
                href: "/skin/methodology",
              },
              {
                label: "Editorial Policy",
                code: "SKIN-ED-001",
                desc: "Our review process, independence guarantee, corrections policy, and author expertise.",
                href: "/skin/editorial-policy",
              },
              {
                label: "Medical Disclaimer",
                code: "SKIN-MED-001",
                desc: "Educational content only. Always consult a dermatologist for diagnosis and treatment.",
                href: "/skin/medical-disclaimer",
              },
            ].map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="hub-card"
                style={{ display: "block", padding: "20px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714" }}>{card.label}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", textTransform: "uppercase", letterSpacing: "0.08em" }}>{card.code}</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #EDE8DF", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/skin/affiliate-disclosure" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Affiliate Disclosure</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <Link href="/skin/medical-disclaimer" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Medical Disclaimer</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <Link href="/skin/editorial-policy" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Editorial Policy</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>← Fitlabreviews.com</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
