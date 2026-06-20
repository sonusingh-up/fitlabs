import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const revalidate = 86400;

import { CheckCircle2, XCircle, Shield } from "lucide-react";
import ReviewCard from "@/components/ui/ReviewCard";
import { getBrandBySlug, getAllBrandSlugs } from "@/lib/sanity";
import type { ReviewRating } from "@/lib/types";

export async function generateStaticParams() {
  const slugs = await getAllBrandSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) {
    return {
      title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())} — Brand Profile & Review`,
      description: "Complete brand profile with all FSP-scored reviews, product range, manufacturing standards, third-party testing, and editorial verdict.",
      alternates: { canonical: `/brands/${slug}` },
    };
  }
  return {
    title: `${brand.name} — Brand Profile & Review`,
    description: (brand.metaDescription || brand.summary || `Complete brand profile for ${brand.name}.`).slice(0, 160),
    alternates: { canonical: `/brands/${slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) notFound();

  const ghostLetter = brand.name?.charAt(0)?.toUpperCase() || "B";

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/brands" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Brands</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{brand.name}</span>
        </div>
      </div>

      {/* Hero banner — grid texture, ghost letter, text only (no floating product image per CLAUDE.md rule 15) */}
      <div style={{ width: "100%", minHeight: 260, background: "linear-gradient(135deg, #17211C 0%, #0D1810 60%, #1a2e22 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.5) 39px, rgba(255,255,255,.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.5) 39px, rgba(255,255,255,.5) 40px)", backgroundSize: "40px 40px" }} />
        <span style={{ position: "absolute", right: "5%", bottom: -20, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(180px, 25vw, 280px)", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 0.85, userSelect: "none" }}>{ghostLetter}</span>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "48px 32px 40px", width: "100%" }}>
          {brand.figureCode && (
            <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}>{brand.figureCode}</span>
              <span style={{ width: 20, height: 1, backgroundColor: "rgba(255,255,255,0.15)" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", color: "#0F7A5A" }}>BRAND PROFILE</span>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
            {brand.country && <span style={{ padding: "4px 10px", backgroundColor: "rgba(15,122,90,0.15)", border: "1px solid rgba(15,122,90,0.3)", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#4ADE80", letterSpacing: "0.08em" }}>{brand.country}</span>}
            {brand.founded && <span style={{ padding: "4px 10px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "rgba(255,255,255,0.5)" }}>Est. {brand.founded}</span>}
            {brand.rating && <span style={{ padding: "4px 10px", backgroundColor: "rgba(15,122,90,0.2)", borderRadius: 6, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#4ADE80", fontWeight: 700 }}>{brand.rating}/10</span>}
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12 }}>{brand.name}</h1>
          {brand.summary && <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 640 }}>{brand.summary}</p>}
          {brand.categories && brand.categories.length > 0 && (
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {brand.categories.map((cat: string) => (
                <span key={cat} style={{ padding: "4px 12px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)" }}>{cat}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }} className="pad-section-sm px-page">

        {/* Stats grid */}
        {brand.stats && brand.stats.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <div className="ing-stats-grid">
              {brand.stats.map((s: { label: string; value: string }, i: number) => (
                <div key={i} style={{ padding: "20px 16px", backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", lineHeight: 1.2 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portable Text body */}
        {brand.body && brand.body.length > 0 && (
          <section style={{ marginBottom: 48 }} className="ingredient-article">
            <PortableText value={brand.body} />
          </section>
        )}

        {/* Green & Red Flags */}
        {((brand.greenFlags && brand.greenFlags.length > 0) || (brand.redFlags && brand.redFlags.length > 0)) && (
          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20 }}>What We Found</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {brand.greenFlags && brand.greenFlags.length > 0 && (
                <div style={{ border: "1px solid #E4E8E5", borderLeft: "3px solid #0F7A5A", borderRadius: 14, padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <CheckCircle2 size={16} color="#0F7A5A" />
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0F7A5A", fontWeight: 700 }}>Green Flags</span>
                  </div>
                  {brand.greenFlags.map((f: string) => (
                    <p key={f} style={{ fontSize: 13, color: "#17211C", padding: "4px 0", lineHeight: 1.5 }}>· {f}</p>
                  ))}
                </div>
              )}
              {brand.redFlags && brand.redFlags.length > 0 && (
                <div style={{ border: "1px solid #E4E8E5", borderLeft: "3px solid #DC2626", borderRadius: 14, padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <XCircle size={16} color="#DC2626" />
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#DC2626", fontWeight: 700 }}>Red Flags</span>
                  </div>
                  {brand.redFlags.map((f: string) => (
                    <p key={f} style={{ fontSize: 13, color: "#17211C", padding: "4px 0", lineHeight: 1.5 }}>· {f}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Certifications */}
        {brand.certifications && brand.certifications.length > 0 && (
          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20 }}>Certifications & Testing</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {brand.certifications.map((cert: string) => (
                <div key={cert} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <Shield size={14} style={{ color: "#0F7A5A" }} />
                  <span style={{ fontSize: 13, color: "#17211C", fontWeight: 600 }}>{cert}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Editorial Verdict */}
        {brand.verdict && (
          <section style={{ marginBottom: 48 }}>
            <div style={{ padding: 28, backgroundColor: "#17211C", borderRadius: 12 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 12 }}>Editorial Verdict</p>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>{brand.name}</h3>
              <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75 }}>{brand.verdict}</p>
            </div>
          </section>
        )}

        {/* FAQ */}
        {brand.faqItems && brand.faqItems.length > 0 && (
          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #E4E8E5" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20 }}>Frequently Asked Questions</h2>
            {brand.faqItems.map((item: { question: string; answer: string }, i: number) => (
              <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden", marginBottom: 8 }}>
                <summary style={{ padding: "14px 16px", cursor: "pointer", fontWeight: 700, color: "#17211C", fontSize: 14, backgroundColor: "#F6F8F6", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.question}
                  <span style={{ fontSize: 18, color: "#9CA3AF", flexShrink: 0, marginLeft: 8 }}>+</span>
                </summary>
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>{item.answer}</p>
                </div>
              </details>
            ))}
          </section>
        )}
      </div>

      {/* Reviewed Products — full width */}
      {brand.relatedReviews && brand.relatedReviews.length > 0 && (
        <div style={{ backgroundColor: "#F6F8F6", borderTop: "1px solid #E4E8E5", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 20 }}>Reviewed Products from {brand.name}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {brand.relatedReviews.map((rev: { slug: string; title: string; brand: string; category: string; editorialScore: number; verdict: string; publishedAt: string }) => (
                <ReviewCard
                  key={rev.slug}
                  slug={rev.slug}
                  title={rev.title}
                  brand={rev.brand}
                  category={rev.category}
                  rating={rev.editorialScore as ReviewRating}
                  verdict={rev.verdict}
                  publishedAt={rev.publishedAt}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
