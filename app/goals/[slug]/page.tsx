import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { getGoalBySlug, getAllGoalSlugs } from "@/lib/sanity";
import type { EvidenceLevel } from "@/lib/types";
import React from "react";

const linkStyle = { color: "#0F7A5A", fontWeight: 600 as const, textDecoration: "none" as const, borderBottom: "1px solid rgba(15,122,90,0.3)" };

const internalLinks: { term: RegExp; href: string }[] = [
  { term: /\bomega-3 fatty acids\b/i, href: "/ingredients/omega-3" },
  { term: /\bomega-3s\b/i, href: "/ingredients/omega-3" },
  { term: /\bOmega-3\b/, href: "/ingredients/omega-3" },
  { term: /\bEPA\+DHA\b/, href: "/ingredients/omega-3" },
  { term: /\bEPA and DHA\b/i, href: "/ingredients/omega-3" },
  { term: /\bwhey protein\b/i, href: "/ingredients/whey-protein" },
  { term: /\bbeta-alanine\b/i, href: "/ingredients/beta-alanine" },
  { term: /\bcaffeine\b/i, href: "/ingredients/caffeine" },
  { term: /\bresistance training\b/i, href: "/goals/muscle-gain" },
  { term: /\bmuscle mass\b/i, href: "/goals/muscle-gain" },
  { term: /\bsarcopenia\b/i, href: "/goals/muscle-gain" },
  { term: /\bsleep quality\b/i, href: "/goals/sleep-and-stress" },
  { term: /\bsleep deprivation\b/i, href: "/research/sleep-duration-biological-aging" },
  { term: /\bsleep architecture\b/i, href: "/blog/sleep-window-anti-aging" },
  { term: /\bfat loss\b/i, href: "/goals/fat-loss" },
  { term: /\brecovery\b/i, href: "/goals/recovery" },
  { term: /\benergy and focus\b/i, href: "/goals/energy-and-focus" },
  { term: /\bcreatine brain\b/i, href: "/research/creatine-brain-health" },
];

function autoLink(text: string): React.ReactNode {
  const usedHrefs = new Set<string>();
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest: { index: number; length: number; href: string } | null = null;

    for (const { term, href } of internalLinks) {
      if (usedHrefs.has(href)) continue;
      const match = remaining.match(term);
      if (match && match.index !== undefined) {
        if (!earliest || match.index < earliest.index) {
          earliest = { index: match.index, length: match[0].length, href };
        }
      }
    }

    if (!earliest) {
      parts.push(remaining);
      break;
    }

    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }
    const matchedText = remaining.slice(earliest.index, earliest.index + earliest.length);
    parts.push(
      <Link key={key++} href={earliest.href} style={linkStyle}>{matchedText}</Link>
    );
    usedHrefs.add(earliest.href);
    remaining = remaining.slice(earliest.index + earliest.length);
  }

  return parts.length === 1 && typeof parts[0] === "string" ? text : <>{parts}</>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllGoalSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const goal = await getGoalBySlug(slug);
  if (!goal) return { title: "Goal Guide" };
  return {
    title: goal.metaTitle || goal.title,
    description: goal.metaDescription || goal.summary,
    alternates: { canonical: `/goals/${slug}` },
  };
}

const accentMap: Record<string, { bg: string; valueColor: string; labelColor: string }> = {
  green: { bg: "#0F7A5A", valueColor: "#FFFFFF", labelColor: "rgba(255,255,255,0.75)" },
  neutral: { bg: "#F6F8F6", valueColor: "#1A1714", labelColor: "#586259" },
  gold: { bg: "#E8F5EF", valueColor: "#C98A1E", labelColor: "#586259" },
};

const priorityColors: Record<string, { color: string; bg: string; border: string }> = {
  Essential: { color: "#0F7A5A", bg: "rgba(15,122,90,0.08)", border: "rgba(15,122,90,0.2)" },
  Recommended: { color: "#C98A1E", bg: "rgba(201,138,30,0.08)", border: "rgba(201,138,30,0.2)" },
  Optional: { color: "#586259", bg: "rgba(228,232,229,0.5)", border: "#E4E8E5" },
};

export default async function GoalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = await getGoalBySlug(slug);
  if (!g) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://fitlabreviews.com/goals/${slug}#article`,
    headline: g.title + (g.titleItalic ? ` ${g.titleItalic}` : ""),
    description: g.metaDescription || g.summary,
    datePublished: g.publishedAt || "2026-06-22",
    dateModified: g.updatedAt || g.publishedAt || "2026-06-22",
    author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    url: `https://fitlabreviews.com/goals/${slug}`,
    mainEntityOfPage: `https://fitlabreviews.com/goals/${slug}`,
    articleSection: "Fitness Goals",
  };

  const faqSchema = g.faqItems?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqItems.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  /* Build TOC from sections + fixed sections */
  const tocItems = [
    { id: "key-takeaways", label: "Key Takeaways" },
    ...(g.sections || []).map((s: { id: string; label: string }) => ({ id: s.id, label: s.label || s.id })),
    ...(g.supplements?.length ? [{ id: "supplement-stack", label: "Supplement Stack" }] : []),
    ...(g.mistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    { id: "bottom-line", label: "Bottom Line" },
    ...(g.faqItems?.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(g.references?.length ? [{ id: "references", label: "References" }] : []),
  ];

  let sectionCounter = 0;
  const nextSection = () => { sectionCounter++; return `§ ${String(sectionCounter).padStart(2, "0")}`; };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/goals" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Goals</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{g.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {(g.figureCode || g.categoryLabel) && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              {g.figureCode && <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>{g.figureCode}</span>}
              {g.figureCode && g.categoryLabel && <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />}
              {g.categoryLabel && <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>{g.categoryLabel}</span>}
            </div>
          )}
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            {g.title}{" "}
            {g.titleItalic && <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>{g.titleItalic}</em>}
          </h1>
          {g.summary && (
            <p style={{ fontSize: 16, color: "#3F4B43", lineHeight: 1.75, maxWidth: 640, marginBottom: 28 }}>{g.summary}</p>
          )}
          {g.heroStats?.length > 0 && (
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
              {g.heroStats.map((stat: { value: string; label: string; accent?: string }, i: number) => {
                const a = accentMap[stat.accent || "neutral"] || accentMap.neutral;
                return (
                  <div key={i} style={{ padding: "18px 22px", backgroundColor: a.bg, flex: 1, minWidth: 140, borderRight: i < g.heroStats.length - 1 ? "1px solid rgba(228,232,229,0.5)" : "none" }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: a.valueColor, margin: 0 }}>{stat.value}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: a.labelColor, textTransform: "uppercase", marginTop: 6 }}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Credibility bar */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Link href="/authors/fitlab-research-team" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A 0%, #1A1714 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,122,90,0.2)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>FR</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, lineHeight: 1.2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, marginTop: 2 }}>Editorial &amp; Research</p>
                </div>
              </Link>
              <span style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
              <Link href="/authors/pankaj-singh" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #17211C 0%, #2D3A32 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>PS</span>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, lineHeight: 1 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, marginTop: 2, lineHeight: 1.2 }}>Pankaj Singh, B.&nbsp;Pharm</p>
                </div>
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              {g.citedStudies && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                  <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#17211C", letterSpacing: "0.04em" }}>{g.citedStudies} Cited studies</span>
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#F8F6F2", border: "1px solid #E4E8E5" }}>
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#586259" }}>June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title={g.metaTitle || g.title} slug={slug} />
            </div>
          </aside>

          <article style={{ maxWidth: 680, minWidth: 0 }}>
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            {g.keyTakeaways?.length > 0 && (
              <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  {g.keyTakeaways.map((t: string, i: number) => (
                    <li key={i} style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>{autoLink(t)}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Intro */}
            {g.summary && (
              <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>{g.summary}</p>
            )}

            {/* Dynamic sections */}
            {(g.sections || []).map((sec: {
              id: string; label: string; figure?: string; heading: string; headingItalic?: string;
              intro?: string; body?: unknown[]; numberedPanels?: { num: string; title: string; desc: string }[];
              gridCards?: { label: string; value: string; note: string }[];
              callout?: string; calloutLabel?: string;
            }) => {
              const fig = sec.figure || nextSection();
              return (
                <section key={sec.id} id={sec.id} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                  <SectionHeading label={sec.label} figure={fig} title={sec.heading} titleItalic={sec.headingItalic} size="sm" />

                  {sec.intro && <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>{autoLink(sec.intro)}</p>}

                  {/* Numbered panels */}
                  {sec.numberedPanels?.length ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                      {sec.numberedPanels.map((p) => (
                        <div key={p.num} style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{p.num}</span>
                            <div>
                              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{p.title}</p>
                              <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>{autoLink(p.desc)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Grid cards */}
                  {sec.gridCards?.length ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
                      {sec.gridCards.map((c) => (
                        <div key={c.label} style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{c.label}</p>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{c.value}</p>
                          {c.note && <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6 }}>{c.note}</p>}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Portable Text body */}
                  {sec.body?.length ? (
                    <div style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                      <PortableText value={sec.body as never} />
                    </div>
                  ) : null}

                  {/* Callout */}
                  {sec.callout && (
                    <div style={{ padding: "16px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #0F7A5A", borderRadius: "0 8px 8px 0" }}>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 6, fontWeight: 700 }}>{sec.calloutLabel || "What This Means"}</p>
                      <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.7, margin: 0 }}>{autoLink(sec.callout)}</p>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Supplement stack */}
            {g.supplements?.length > 0 && (
              <section id="supplement-stack" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <SectionHeading label="Evidence-Graded Stack" figure={nextSection()} title="Supplement" titleItalic="protocol" size="sm" />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {g.supplements.map((s: { rank: number; name: string; role: string; evidence: string; dose: string; timing: string; mechanism: string; citation: string; priority: string }) => {
                    const pc = priorityColors[s.priority] || priorityColors.Optional;
                    return (
                      <div key={s.name} style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                        <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fontWeight: 700, color: "#0F7A5A" }}>#{s.rank}</span>
                          <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#17211C", margin: 0 }}>{s.name}</p>
                          <span style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: pc.color, backgroundColor: pc.bg, border: `1px solid ${pc.border}`, textTransform: "uppercase" }}>{s.priority}</span>
                            <EvidenceBadge level={s.evidence as EvidenceLevel} />
                          </span>
                        </div>
                        <div style={{ padding: "18px 20px" }}>
                          <p style={{ fontSize: 13, color: "#586259", lineHeight: 1.7, marginBottom: 14 }}>{autoLink(s.mechanism)}</p>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginBottom: 14 }}>
                            <div style={{ padding: "10px 14px", backgroundColor: "#F6F8F6", borderRadius: 8, border: "1px solid #E4E8E5" }}>
                              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>Dose</p>
                              <p style={{ fontSize: 12, color: "#17211C", fontWeight: 600, margin: 0 }}>{s.dose}</p>
                            </div>
                            <div style={{ padding: "10px 14px", backgroundColor: "#F6F8F6", borderRadius: 8, border: "1px solid #E4E8E5" }}>
                              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 4 }}>Timing</p>
                              <p style={{ fontSize: 12, color: "#17211C", fontWeight: 600, margin: 0 }}>{s.timing}</p>
                            </div>
                          </div>
                          <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{s.citation}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Avoid list */}
                {g.avoidList?.length > 0 && (
                  <div style={{ marginTop: 24, padding: "20px 22px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B91C1C", marginBottom: 10, fontWeight: 700 }}>Save Your Money</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {g.avoidList.map((item: { name: string; reason: string }) => (
                        <div key={item.name} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: "#B91C1C", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✕</span>
                          <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}><strong>{item.name}</strong> — {item.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Common mistakes */}
            {g.mistakes?.length > 0 && (
              <section id="mistakes" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <SectionHeading label="Pitfalls" figure={nextSection()} title="Common" titleItalic="mistakes" size="sm" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                  {g.mistakes.map((item: { mistake: string; fix: string }) => (
                    <div key={item.mistake} style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6 }}>{item.mistake}</p>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{autoLink(item.fix)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Line */}
            {g.bottomLine?.length > 0 && (
              <section id="bottom-line" style={{ marginBottom: 48 }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                  <div style={{ padding: "20px 24px", backgroundColor: "#FFF5EB", borderBottom: "1px solid #EBD8C3" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6, fontWeight: 700 }}>Bottom Line</p>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>The Priority Hierarchy</h2>
                  </div>
                  <div style={{ padding: "22px 24px", backgroundColor: "#FAECD8" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {g.bottomLine.map((item: { rank: string; text: string }) => (
                        <div key={item.rank} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#C98A1E", flexShrink: 0, minWidth: 28 }}>{item.rank}</span>
                          <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                        </div>
                      ))}
                    </div>
                    {g.bottomLineClosing && (
                      <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginTop: 16, marginBottom: 0, borderTop: "1px solid rgba(201,138,30,0.25)", paddingTop: 16 }}>{g.bottomLineClosing}</p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* FAQ */}
            {g.faqItems?.length > 0 && (
              <section id="faq" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
                <SectionHeading label="Common Questions" figure={nextSection()} title="Frequently" titleItalic="Asked" size="sm" />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {g.faqItems.map((item: { question: string; answer: string }, i: number) => (
                    <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                      <summary style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.4, listStyle: "none" }}>
                        <span style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 700 }}>+</span>
                        </span>
                        {item.question}
                      </summary>
                      <div style={{ padding: "0 20px 18px 58px" }}>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* References */}
            {g.references?.length > 0 && (
              <section id="references">
                <SectionHeading label="Sources" figure={nextSection()} title="References" size="sm" />
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {g.references.map((ref: { text: string; journal?: string; url?: string }, i: number) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: "1px solid #F2F8F4" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A", fontWeight: 600, flexShrink: 0, minWidth: 20, textAlign: "right" }}>{i + 1}.</span>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>
                        {ref.text}{" "}
                        {ref.journal && <em style={{ color: "#586259" }}>{ref.journal}</em>}{" "}
                        {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, fontSize: 11, fontFamily: "var(--font-jetbrains), monospace" }}>PubMed →</a>}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Disclaimer */}
            <div style={{ marginTop: 40, padding: "20px 22px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 12, borderLeft: "3px solid #0F7A5A" }}>
              <p style={{ fontSize: 12, color: "#586259", lineHeight: 1.7, margin: 0 }}>
                This guide is for educational purposes and does not constitute medical advice. Dosages referenced are from peer-reviewed human trials — individual needs may vary. Consult a qualified practitioner before starting any supplementation protocol.{" "}
                <Link href="/editorial-policy" style={{ color: "#0F7A5A", fontWeight: 600 }}>Read our editorial policy →</Link>
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Related goals */}
      {g.relatedGoals?.length > 0 && (
        <div style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Related Goals" figure="→" title="Continue" titleItalic="exploring" size="sm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
              {g.relatedGoals.map((rg: { slug: string; title: string; desc: string; accent: string }) => (
                <Link key={rg.slug} href={`/goals/${rg.slug}`} className="hub-card" style={{ display: "block", padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FFFFFF", textDecoration: "none", borderTop: `3px solid ${rg.accent || "#0F7A5A"}` }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{rg.title}</p>
                  <p style={{ fontSize: 12, color: "#586259", lineHeight: 1.5, marginBottom: 10 }}>{rg.desc}</p>
                  <span style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View Guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
