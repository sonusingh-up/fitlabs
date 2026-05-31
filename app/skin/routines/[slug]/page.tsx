import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSkinRoutineSlugs, getSkinRoutineBySlug } from "@/lib/sanity-skin";

export async function generateStaticParams() {
  const slugs = await getAllSkinRoutineSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const routine = await getSkinRoutineBySlug(slug);
  if (!routine) return { title: "Routine Not Found" };
  return {
    title: `${routine.title} — Step-by-Step Skincare Routine`,
    description:
      routine.metaDescription ||
      `${routine.title}: a ${routine.duration ?? "skincare"} routine with step-by-step instructions for ${routine.skinTypes?.join(", ") ?? "all skin types"}.`,
    alternates: { canonical: `/skin/routines/${slug}` },
  };
}

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

const skinTypeColor: Record<string, string> = {
  oily: "#4A6C8C",
  dry: "#C4622D",
  combination: "#92620A",
  sensitive: "#4A7C59",
  normal: "#5C5650",
  "acne-prone": "#8B1A1A",
  mature: "#7B5EA7",
};

export default async function SkinRoutinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const routine = await getSkinRoutineBySlug(slug);
  if (!routine) notFound();

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: routine.title,
    description: routine.description,
    totalTime: routine.duration ?? undefined,
    step: routine.steps?.map((step: any, i: number) => ({
      "@type": "HowToStep",
      position: step.stepNumber ?? i + 1,
      name: step.instruction,
      text: step.notes ?? step.instruction,
    })) ?? [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/skin" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <Link href="/skin/routines" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Routines</Link>
            <span style={{ color: "#D4C9B8" }}>/</span>
            <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{routine.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>Skin Routine</span>
              {routine.duration && (
                <>
                  <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>{routine.duration}</span>
                </>
              )}
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16 }}>
              {routine.title}
            </h1>
            {routine.description && (
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 680, marginBottom: 20 }}>{routine.description}</p>
            )}
            {routine.skinTypes?.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", textTransform: "uppercase", letterSpacing: "0.1em", alignSelf: "center" }}>For:</span>
                {routine.skinTypes.map((type: string) => (
                  <span key={type} style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: skinTypeColor[type] ?? "#8A8480", backgroundColor: `${skinTypeColor[type] ?? "#8A8480"}14`, border: `1px solid ${skinTypeColor[type] ?? "#8A8480"}33` }}>
                    {type}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

          {/* Steps */}
          {routine.steps?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 01</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>
                  Step-by-Step Protocol
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {routine.steps.map((step: any, i: number) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "flex-start", padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 800, color: "#C4622D" }}>{step.stepNumber ?? i + 1}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1714", marginBottom: step.notes ? 6 : 0, lineHeight: 1.4 }}>{step.instruction}</p>
                      {step.notes && (
                        <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.6, margin: 0 }}>{step.notes}</p>
                      )}
                      {step.duration && (
                        <span style={{ display: "inline-block", marginTop: 8, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#A89880", textTransform: "uppercase" }}>{step.duration}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Ingredients */}
          {routine.ingredients?.length > 0 && (
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #D4C9B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>§ 02</span>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", margin: 0 }}>Key Ingredients</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {routine.ingredients.map((ing: any) => (
                  <Link
                    key={ing.slug}
                    href={`/skin/ingredients/${ing.slug}`}
                    className="hub-card"
                    style={{ display: "block", padding: "14px 16px", borderRadius: 8, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{ing.title}</p>
                      {ing.evidenceLevel && (
                        <span style={{ padding: "2px 6px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0, color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}14`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}33` }}>
                          {ing.evidenceLevel}
                        </span>
                      )}
                    </div>
                    {ing.category && (
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", textTransform: "uppercase" }}>{ing.category}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Guides */}
          {routine.relatedGuides?.length > 0 && (
            <section style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Guides</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {routine.relatedGuides.map((guide: any) => (
                  <Link
                    key={guide.slug}
                    href={`/skin/guides/${guide.slug}`}
                    style={{ padding: "8px 16px", border: "1px solid #D4C9B8", borderRadius: 6, backgroundColor: "#F8F2E4", fontSize: 13, color: "#1A1714", fontWeight: 600, textDecoration: "none" }}
                  >
                    {guide.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
