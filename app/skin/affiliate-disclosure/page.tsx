import type { Metadata } from "next";
import Link from "next/link";
import SkinBreadcrumb from "@/components/ui/SkinBreadcrumb";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Skin Health",
  description:
    "Fitlabreviews Skin may earn commissions on skincare product links. Commissions never influence our ingredient ratings, routine recommendations, or editorial scores.",
  alternates: { canonical: "/skin/affiliate-disclosure" },
};

const sections = [
  {
    title: "What Are Affiliate Links?",
    body: "Some links on the Fitlabreviews Skin Health section are affiliate links. This means that if you click a link and purchase a product from the retailer we link to, Fitlabreviews may receive a small commission from that sale. The commission is paid by the retailer — not by you. The price you pay is exactly the same whether you use our link or navigate to the retailer directly.",
  },
  {
    title: "Which Links May Be Affiliate Links?",
    body: "Affiliate links most commonly appear in product mentions within ingredient profiles, routine guides, and condition articles. Where a product is mentioned alongside a 'Check Price', 'Buy Now', or similar CTA, that link is likely an affiliate link. We do not mark every affiliate link inline, but this disclosure applies sitewide to the Skin Health section.",
  },
  {
    title: "Commissions Never Influence Editorial Content",
    body: "Affiliate commissions do not influence what we recommend, how we rate ingredients, or how we structure routines. A product that earns us a higher commission does not receive a better write-up. A product with no affiliate relationship at all may be the first thing we recommend if the evidence supports it. Our editorial process runs independently of our commercial relationships.",
  },
  {
    title: "No Paid Placements or Sponsored Content",
    body: "Fitlabreviews Skin does not sell placement in guides, ingredient profiles, or routines. Brands cannot pay to be featured, ranked higher, or recommended. If you see a product mentioned, it is because our editorial team assessed it as relevant — not because a commercial arrangement put it there.",
  },
  {
    title: "Affiliate Partners",
    body: "We work with established affiliate networks and retailer programmes. We do not disclose individual partner names, as partnerships change over time. What does not change: our policy that commercial relationships never determine editorial outcomes. Any new affiliate partnership is reviewed against our independence standards before it goes live.",
  },
  {
    title: "FTC Compliance",
    body: "This disclosure is made in accordance with the U.S. Federal Trade Commission's guidelines on endorsements and testimonials (16 CFR Part 255) and equivalent regulations in other jurisdictions. We are committed to transparency about how this site earns revenue.",
  },
  {
    title: "Questions?",
    body: "If you have questions about our affiliate relationships or believe a specific piece of content has been influenced by a commercial relationship, please contact us. We take editorial independence seriously and will investigate any credible concern.",
  },
];

export default function SkinAffiliateDisclosurePage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <SkinBreadcrumb items={[{ label: "Affiliate Disclosure" }]} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>DISCLOSURE · SKIN-AFF-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Affiliate Disclosure
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Skin Health Section · Last updated: May 31, 2026</p>
        </div>

        {/* Lead */}
        <div style={{ padding: "20px 22px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, marginBottom: 40 }}>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.75, margin: 0 }}>
            <strong>The short version:</strong> Some skincare product links on this site are affiliate links. We earn a small commission if you buy through them — at no extra cost to you. This never changes what we recommend or how we rate ingredients.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((s) => (
            <div key={s.title} style={{ paddingBottom: 32, borderBottom: "1px solid #D4C9B8" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
            </div>
          ))}

          {/* Cross-links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/affiliate-disclosure" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Full Site Affiliate Disclosure →
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
