import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const revalidate = 3600;

import EvidenceBadge from "@/components/ui/EvidenceBadge";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
import { getBlogBySlug, getAllBlogSlugs, urlFor } from "@/lib/sanity";
import type { EvidenceLevel } from "@/lib/types";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) {
    return {
      title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}`,
      alternates: { canonical: `/blog/${slug}` },
    };
  }
  const ogImage = post.heroImage ? urlFor(post.heroImage).width(1200).height(630).url() : undefined;
  return {
    title: post.title.length > 55 ? post.title.slice(0, 52) + "..." : post.title,
    description: (post.metaDescription || post.summary || "").slice(0, 160),
    alternates: { canonical: `/blog/${slug}` },
    ...(ogImage ? {
      openGraph: {
        images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      },
    } : {}),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const pageUrl = `https://fitlabreviews.com/blog/${slug}`;
  const evidence = (post.evidenceLevel || "moderate") as EvidenceLevel;
  const heroImageUrl = post.heroImage ? urlFor(post.heroImage).width(1200).height(630).url() : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary || post.metaDescription,
    ...(heroImageUrl ? { image: heroImageUrl } : {}),
    articleSection: post.category || "Blog",
    author: post.author
      ? { "@type": "Person", name: post.author.name, url: `https://fitlabreviews.com/authors/${post.author.slug}` }
      : { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
    publisher: { "@id": "https://fitlabreviews.com/#organization" },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    inLanguage: "en-US",
  };

  const faqSchema = post.faqItems && post.faqItems.length >= 4 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqItems.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const tocItems = post.tocItems || [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <ReadingProgress />
      <div style={{ backgroundColor: "#FFFFFF" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <Link href="/blog" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "#E4E8E5" }}>/</span>
            <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{post.title.length > 40 ? post.title.slice(0, 37) + "..." : post.title}</span>
          </div>
        </div>

        {/* Feature image banner */}
        {heroImageUrl && (
          <div style={{ position: "relative", width: "100%", maxHeight: 420, overflow: "hidden", backgroundColor: "#0B1426" }}>
            <Image
              src={heroImageUrl}
              alt={post.title}
              width={1200}
              height={630}
              priority
              style={{ width: "100%", height: "auto", objectFit: "cover", opacity: 0.92 }}
            />
          </div>
        )}

        {/* Hero */}
        <div style={{ borderBottom: "1px solid #E4E8E5", ...(heroImageUrl ? { background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)" } : {}) }} className="pad-hero">
          <div style={{ maxWidth: 1100, margin: "0 auto" }} className="px-page">
            {post.figureCode && (
              <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#6B7770", textTransform: "uppercase" }}>{post.figureCode}</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase" }}>{post.category || "Blog"}</span>
              </div>
            )}

            <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.05, marginBottom: 16 }}>
              {post.titleItalic
                ? <>{post.title.replace(post.titleItalic, "")} <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>{post.titleItalic}</em></>
                : post.title
              }
            </h1>

            {post.summary && (
              <p style={{ fontSize: 17, color: "#3F4B43", lineHeight: 1.65, maxWidth: 680, marginBottom: 20 }}>{post.summary}</p>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: post.statCallouts?.length ? 24 : 0 }}>
              {post.publishedAt && <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>}
              {post.readTime && <><span style={{ color: "#E4E8E5" }}>·</span><span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{post.readTime} read</span></>}
              <span style={{ color: "#E4E8E5" }}>·</span>
              <EvidenceBadge level={evidence} />
            </div>

            {/* Stat callouts */}
            {post.statCallouts && post.statCallouts.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(post.statCallouts.length, 3)}, 1fr)`, gap: 12 }}>
                {post.statCallouts.map((s: { value: string; label: string }, i: number) => (
                  <div key={i} style={{ padding: "16px 18px", backgroundColor: i === 0 ? "#17211C" : i === 1 ? "#0F7A5A" : "#F6F8F6", borderRadius: 12 }}>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: i < 2 ? "#FFFFFF" : "#17211C", marginBottom: 4, lineHeight: 1.1 }}>{s.value}</p>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: i < 2 ? "rgba(255,255,255,0.6)" : "#6B7770", letterSpacing: "0.08em" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Author bar */}
        {post.author && (
          <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FAFBFA" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)" }}>
                {post.author.name?.split(" ").map((w: string) => w[0]).join("").slice(0, 2) || "FL"}
              </div>
              <span style={{ fontSize: 12, color: "#6B7770" }}>By </span>
              <Link href={`/authors/${post.author.slug}`} style={{ fontSize: 13, fontWeight: 600, color: "#17211C", textDecoration: "none" }}>{post.author.name}</Link>
              {post.reviewer && (
                <>
                  <span style={{ color: "#E4E8E5" }}>·</span>
                  <span style={{ fontSize: 12, color: "#6B7770" }}>Reviewed by </span>
                  <Link href={`/authors/${post.reviewer.slug}`} style={{ fontSize: 13, fontWeight: 600, color: "#17211C", textDecoration: "none" }}>{post.reviewer.name}</Link>
                </>
              )}
              {post.updatedAt && (
                <>
                  <span style={{ color: "#E4E8E5" }}>·</span>
                  <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>
                    Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Body: TOC sidebar + article */}
        <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* TOC sidebar */}
            {tocItems.length > 0 && (
              <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
                <TableOfContents items={tocItems} />
                <div style={{ marginTop: 24 }}>
                  <ShareButtons title={post.title} slug={slug} />
                </div>
              </aside>
            )}

            <article style={{ minWidth: 0, maxWidth: 680 }}>

              {/* Mobile TOC */}
              {tocItems.length > 0 && (
                <div className="block lg:hidden" style={{ marginBottom: 32 }}>
                  <MobileTOC items={tocItems} />
                </div>
              )}

              {/* Portable Text body */}
              {post.body && post.body.length > 0 && (
                <section style={{ marginBottom: 48 }} className="ingredient-article">
                  <PortableText value={post.body} />
                </section>
              )}

              {/* Mechanism Panels */}
              {post.mechanismPanels && post.mechanismPanels.length > 0 && (
                <section style={{ marginBottom: 48 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {post.mechanismPanels.map((m: { num: string; title: string; body: string }, i: number) => (
                      <div key={i} style={{ display: "flex", gap: 16, padding: "20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FAFBFA" }}>
                        <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 28, fontWeight: 700, color: "#E4E8E5", lineHeight: 1, flexShrink: 0, width: 36 }}>{m.num}</span>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 6 }}>{m.title}</p>
                          <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{m.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Bottom line */}
              <section style={{ marginBottom: 48 }}>
                <div style={{ padding: "24px 28px", backgroundColor: "#FFF5EB", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A5A0A", marginBottom: 8 }}>The Bottom Line</p>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#17211C", marginBottom: 10 }}>
                    {post.title}
                  </h3>
                  {post.summary && <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>{post.summary}</p>}
                </div>
              </section>

              {/* FAQ */}
              {post.faqItems && post.faqItems.length > 0 && (
                <section id="faq" style={{ marginBottom: 48 }}>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#17211C", marginBottom: 20 }}>Frequently Asked Questions</h2>
                  <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                    {post.faqItems.map((item: { question: string; answer: string }, i: number) => (
                      <details key={i} className="faq-item">
                        <summary>{item.question}</summary>
                        <p className="faq-answer">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* References */}
              {post.references && post.references.length > 0 && (
                <section style={{ marginBottom: 48 }}>
                  <details style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                    <summary style={{ padding: "14px 16px", cursor: "pointer", fontWeight: 700, color: "#17211C", fontSize: 14, backgroundColor: "#F6F8F6" }}>
                      References ({post.references.length}) — Show ↓
                    </summary>
                    <ol style={{ padding: "12px 16px 12px 36px", display: "flex", flexDirection: "column", gap: 6 }}>
                      {post.references.map((ref: { text: string; url?: string }, i: number) => (
                        <li key={i} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, fontFamily: "var(--font-jetbrains), monospace" }}>
                          {ref.text}
                          {ref.url && <>{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>PubMed ↗</a></>}
                        </li>
                      ))}
                    </ol>
                  </details>
                </section>
              )}

              {/* Related */}
              {post.relatedArticles && post.relatedArticles.length > 0 && (
                <section style={{ marginBottom: 48, padding: "20px 22px", backgroundColor: "#F2F8F4", borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>Related Reading</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {post.relatedArticles.map((rel: { href: string; label: string }, i: number) => (
                      <Link key={i} href={rel.href} className="fl-related-card">
                        {rel.label} →
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            </article>
          </div>
        </div>
      </div>
    </>
  );
}
