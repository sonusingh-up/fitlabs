import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, ShieldCheck, Star, Plus } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import MobileTOC from "@/components/ui/MobileTOC";
import ReviewCard from "@/components/ui/ReviewCard";
import ProductCard from "@/components/ui/ProductCard";
import SeedViaCap from "@/components/ui/SeedViaCap";
import SeedResearchCard from "@/components/ui/SeedResearchCard";
import { computeComposite } from "@/lib/scoring";
import { SEED, seedScoreColor } from "@/lib/seed-tokens";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "Seed AM-02™ Review: A Science-Backed Nootropic for Clean Energy & Focus",
  description:
    "Seed AM-02 review: caffeine-free nootropic with Cereboost ginseng, TeaCrine, methyliberine. Co-Biotic gut-brain postbiotic. $34.99/30 servings. Partial disclosure. FSP 7/10.",
  alternates: { canonical: "/reviews/seed-am-02" },
  openGraph: {
    title: "Seed AM-02™ Review: A Science-Backed Nootropic for Clean Energy & Focus",
    description:
      "AM-02 delivers sustained, caffeine-free energy via Cereboost ginseng, TeaCrine, and methyliberine — plus a gut-brain postbiotic inner capsule. Individual blend doses undisclosed.",
    url: "https://fitlabreviews.com/reviews/seed-am-02",
    type: "article",
  },
};

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 7.5,
      notes:
        "Multi-Peak Energy Complex (274mg): Cereboost® American ginseng (10% ginsenosides) for cognitive function, SoWell™ methyliberine for fast-acting energy, TeaCrine® theacrine for sustained focus — three evidence-backed, caffeine-free actives. Gut-Brain Postbiotic inner capsule (100mg GABA from L. brevis) targets the gut-brain axis. Bioenergetic Cellular Complex (17mg): Vitamin D3, shilajit, PQQ, K2 MK-7. B vitamins disclosed. The formulation architecture is sophisticated; the undisclosed individual doses within each complex prevent full assessment.",
    },
    {
      pillar: "transparency",
      score: 5.5,
      notes:
        "Multi-Peak Energy Complex total (274mg), Gut-Brain Postbiotic total (100mg), Bioenergetic Cellular Complex total (17mg), and Microbiome Prebiotic total (33mg) are disclosed. Individual ingredient amounts within each complex (individual ginseng, methyliberine, theacrine doses; individual D3, shilajit, PQQ, K2 doses; individual GABA, postbiotic amounts) are all undisclosed. B vitamins are the only fully individually disclosed ingredients.",
    },
    {
      pillar: "verification",
      score: 7.0,
      notes:
        "ISO 17025-accredited third-party testing. Available at major retail (Target, Sprouts, Amazon). Seed's brand credibility from DS-01 provides institutional trust. No Informed Sport or NSF Certified for Sport certification. Testing scope (identity, potency, contaminants, or all three) is not fully specified.",
    },
    {
      pillar: "value",
      score: 7.0,
      notes:
        "$34.99 for 30 capsules ($1.17/serving) is reasonable for a caffeine-free nootropic with branded extracts (Cereboost®, SoWell™, TeaCrine®). Branded ingredients carry cost premiums. Compared to standard caffeine + L-theanine alternatives at $0.50–0.80/serving, AM-02 is more expensive. The innovation of Co-Biotic gut-brain delivery partially justifies the premium.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "1 capsule/day, take within 2 hours of waking. Caffeine-free — no timing restrictions around sleep. Shelf-stable vegan formula. No jitteriness or caffeine-related side effects. Available at Target, Sprouts, Amazon. The simplest dosing protocol in the Seed Co-Biotics line.",
    },
  ],
  flags: [
    {
      type: "green",
      label: "Caffeine-free — no jitters, no sleep disruption",
      detail:
        "AM-02 delivers energy and focus through adenosine receptor modulation (methyliberine, theacrine) and cognitive circulation support (Cereboost ginseng) rather than caffeine. Suitable for caffeine-sensitive users, those who limit caffeine for sleep quality, or anyone wanting steady focus without stimulant crash.",
    },
    {
      type: "green",
      label: "TeaCrine® + SoWell™ methyliberine — synergistic caffeine alternatives",
      detail:
        "Theacrine (TeaCrine®) and methyliberine (SoWell™) both modulate adenosine and dopamine receptor pathways — similar mechanisms to caffeine but without tolerance build-up. Joy et al. (2016) demonstrated TeaCrine improved energy and focus without anxiousness or habituation over 8 weeks.",
    },
    {
      type: "green",
      label: "Cereboost® American ginseng — cognitive function with RCT evidence",
      detail:
        "Cereboost® is a patented American ginseng extract standardised to 10% ginsenosides. Scholey et al. (2010) showed 200mg Cereboost improved working memory and attention significantly vs. placebo in a double-blind RCT.",
    },
    {
      type: "green",
      label: "Gut-brain postbiotic delivery — GABA from L. brevis via inner capsule",
      detail:
        "The inner acid-resistant capsule delivers GABA derived from Lactobacillus brevis fermentation directly to the lower GI. Gut-brain axis GABA signalling is a real pathway (Cryan et al., 2019). This is a genuinely novel Co-Biotic approach for cognitive support.",
    },
    {
      type: "red",
      label: "Individual ingredient doses in all blends undisclosed",
      detail:
        "The Multi-Peak Energy Complex (274mg) doesn't break out Cereboost, methyliberine, and theacrine individually. Cereboost's RCT used 200mg — if AM-02 uses less, the cognitive claim weakens significantly. Bioenergetic Complex (17mg total) cannot contain clinical doses of all four ingredients simultaneously (PQQ alone is effective at 20mg). The blend structure obscures critical dosing information.",
      deduction: 0.25,
    },
    {
      type: "red",
      label: "Bioenergetic Cellular Complex 17mg — likely sub-clinical for most components",
      detail:
        "17mg total for Vitamin D3 + Shilajit + PQQ + Vitamin K2 MK-7. PQQ is evidenced at 20mg alone (Harris et al., 2013). The entire 17mg complex cannot meaningfully contain all four at clinical doses. This complex is likely present at nominal amounts.",
      deduction: 0.15,
    },
  ],
  claimAudit: [
    {
      claim: '"Fast-acting energy and focus in as little as 1 hour"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "Methyliberine (SoWell™) and theacrine (TeaCrine®) act within 30–60 minutes. Cereboost ginseng has effects within 1 hour per Scholey et al. (2010). The '1 hour' claim is plausible but depends on individual dose levels — which aren't disclosed.",
    },
    {
      claim: '"Sustained energy for up to 6 hours"',
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "TeaCrine® has a longer duration of action than caffeine due to slower metabolism. Joy et al. (2016) tested it over 8 weeks and noted sustained energy ratings. A 6-hour duration is consistent with theacrine pharmacokinetics, though no AM-02-specific study confirms this duration.",
    },
    {
      claim: '"Caffeine-free"',
      verdict: "supported",
      evidence: "strong",
      notes:
        "All listed ingredients are confirmed caffeine-free. Cereboost ginseng, methyliberine, theacrine, and the gut-brain postbiotic components contain no caffeine. This claim is verifiable.",
    },
    {
      claim: '"Works across human and microbial pathways"',
      verdict: "context-dependent",
      evidence: "emerging",
      notes:
        "The dual-capsule architecture with a gut-brain postbiotic inner capsule (L. brevis GABA) does target both body and microbiome. The gut-brain axis is real. Whether the GABA amounts in 100mg total postbiotic complex meaningfully affect brain function via gut signalling has not been demonstrated in a product-specific trial.",
    },
  ],
  valueMetric: {
    pricePerServing: 1.17,
    primaryActiveGrams: 0.274,
    pricePerGramActive: 4.27,
    categoryAvgPricePerGram: 2.20,
    efficiency: "below",
  },
  compositeScore: 0,
  editorialScore: 7 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is", label: "What Is AM-02?" },
  { id: "viacap", label: "Co-Biotic Architecture" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "supplement-facts", label: "Supplement Facts" },
  { id: "ingredients", label: "Ingredient Analysis" },
  { id: "research", label: "Clinical Research" },
  { id: "lab-data", label: "Lab & Verification" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "how-to-take", label: "How to Take It" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "products", label: "Seed Family" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "safety", label: "Safety & Side Effects" },
  { id: "value", label: "Price & Value" },
  { id: "where-to-buy", label: "Where to Buy" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Seed AM-02 actually work without caffeine?",
      acceptedAnswer: { "@type": "Answer", text: "For most users, yes. Methyliberine (SoWell™) and theacrine (TeaCrine®) are caffeine alternatives that modulate adenosine receptors — the same mechanism as caffeine — without building tolerance or causing jitteriness. Cereboost® American ginseng has a double-blind RCT showing improved working memory and attention. The combination is designed for sustained, crash-free energy over 5–6 hours. Individual responses vary, and the undisclosed individual ingredient doses prevent precise efficacy prediction." },
    },
    {
      "@type": "Question",
      name: "What is the difference between AM-02 and regular caffeine supplements?",
      acceptedAnswer: { "@type": "Answer", text: "Caffeine acts on adenosine receptors to block fatigue signalling — it works quickly and strongly but builds tolerance, can cause jitteriness and anxiety, and disrupts sleep if taken too late. AM-02 uses methyliberine and theacrine (also adenosine receptor modulators) which are slower-clearing and don't build tolerance in the same way. Cereboost ginseng works via different pathways (ACh neurotransmission, blood flow) for cognitive effects. The gut-brain GABA postbiotic component is entirely different from caffeine's mechanism. The trade-off: caffeine is stronger and faster; AM-02 is steadier, longer-lasting, and sleep-neutral." },
    },
    {
      "@type": "Question",
      name: "Can I take AM-02 in the afternoon without affecting sleep?",
      acceptedAnswer: { "@type": "Answer", text: "Seed recommends taking AM-02 within 2 hours of waking — primarily to align with natural cortisol and energy rhythms, not because of a hard sleep cutoff. Methyliberine and theacrine have slower clearance than caffeine but are not stimulants in the same sense. Individual sensitivity varies. If you're particularly sleep-sensitive, stick to morning use." },
    },
    {
      "@type": "Question",
      name: "What is TeaCrine® and how is it different from caffeine?",
      acceptedAnswer: { "@type": "Answer", text: "TeaCrine® (theacrine) is a naturally occurring compound found in Camellia sinensis (tea) and cupuaçu fruit. It modulates adenosine and dopamine receptors — like caffeine — but has a longer half-life, doesn't build tolerance over 8 weeks (Joy et al., 2016), and is not classified as a stimulant. It provides sustained energy without the acute spike and crash of caffeine, and without inhibiting sleep when used earlier in the day." },
    },
    {
      "@type": "Question",
      name: "What is Cereboost® ginseng?",
      acceptedAnswer: { "@type": "Answer", text: "Cereboost® is a patented American ginseng extract (Panax quinquefolius) standardised to 10% ginsenosides. Scholey et al. (2010) showed 200mg Cereboost significantly improved working memory and reaction time in a double-blind RCT within 1 hour of ingestion. It works via acetylcholine neurotransmission and nitric oxide-mediated blood flow to the brain." },
    },
    {
      "@type": "Question",
      name: "How does the gut-brain postbiotic in AM-02 work for energy?",
      acceptedAnswer: { "@type": "Answer", text: "AM-02's inner acid-resistant capsule delivers 100mg of Gut-Brain Postbiotic — primarily GABA derived from Lactobacillus brevis fermentation — to the lower GI. The gut-brain axis bidirectionally communicates via the vagus nerve and neurotransmitter pathways. GABA produced in the gut can signal the brain via this pathway, potentially reducing stress and supporting focus. This is an emerging area of research; the mechanism is real, but AM-02-specific evidence for this component's cognitive effects hasn't been published." },
    },
    {
      "@type": "Question",
      name: "Is Seed AM-02 third-party tested?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — ISO 17025-accredited third-party testing. Seed does not specify whether testing covers identity, potency, and/or contaminants for AM-02 specifically." },
    },
    {
      "@type": "Question",
      name: "Can I stack AM-02 with coffee?",
      acceptedAnswer: { "@type": "Answer", text: "AM-02 is caffeine-free, so combining it with coffee is possible. However, TeaCrine and methyliberine also modulate adenosine receptors — adding caffeine creates an additive adenosine-blocking effect, which may increase jitteriness or anxiety in sensitive users. Start by taking AM-02 alone before combining with caffeine sources." },
    },
    {
      "@type": "Question",
      name: "Does AM-02 replace coffee?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your caffeine sensitivity. AM-02 is designed as a caffeine-free alternative providing 5–6 hours of steady focus without tolerance build-up. Heavy coffee drinkers may find AM-02 less acute in its initial effect. Caffeine-free individuals or those trying to reduce caffeine dependence often find AM-02 more suitable." },
    },
    {
      "@type": "Question",
      name: "Why does AM-02 cost more than basic nootropics?",
      acceptedAnswer: { "@type": "Answer", text: "AM-02 uses three patented branded ingredients (Cereboost®, SoWell™, TeaCrine®) which carry licensing and quality premiums over generic ginseng or theacrine. The ViaCap dual-capsule manufacturing is more expensive than standard capsule production. The gut-brain postbiotic component adds formulation complexity. At $1.17/serving for this ingredient profile, the price is in line with comparable premium nootropic products." },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/seed-am-02#review",
  name: "Seed AM-02 Energy + Focus — Fitlabreviews FSP Review",
  reviewBody:
    "AM-02 is Seed's caffeine-free nootropic Co-Biotic, combining Cereboost ginseng, TeaCrine theacrine, and methyliberine for sustained energy and focus, with a gut-brain GABA postbiotic inner capsule. Blend-level doses only. ISO 17025 tested. FSP v2.1 editorial: 7/10.",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Seed AM-02 Energy + Focus",
    brand: { "@type": "Brand", name: "Seed" },
    category: "Nootropic / Energy Supplement",
    description: "Caffeine-free nootropic with Cereboost ginseng, TeaCrine, methyliberine, and gut-brain Co-Biotic postbiotic delivery.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "34.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://amzn.to/3Sd0OoQ",
    },
  },
};

const relatedReviews = [
  {
    slug: "seed-ds-01",
    title: "Seed DS-01 Daily Synbiotic",
    brand: "Seed",
    category: "Daily Synbiotic",
    rating: 8 as ReviewRating,
    verdict: "24 strains, 53.6B AFU, non-fermenting MAPP prebiotic. The benchmark commercial synbiotic.",
    publishedAt: "2026-05-31",
    figNumber: "063",
  },
  {
    slug: "seed-pm-02",
    title: "Seed PM-02 Sleep + Restore",
    brand: "Seed",
    category: "Sleep Supplement",
    rating: 7 as ReviewRating,
    verdict: "Biphasic 500mcg melatonin, Shoden ashwagandha, Co-Biotic dual delivery. $1.17/serving.",
    publishedAt: "2026-05-31",
    figNumber: "062",
  },
  {
    slug: "seed-dm-02",
    title: "Seed DM-02 Daily Multivitamin",
    brand: "Seed",
    category: "Multivitamin",
    rating: 7 as ReviewRating,
    verdict: "20 vitamins/minerals at 100% DV with microbiome-aware ViaCap delivery.",
    publishedAt: "2026-05-31",
    figNumber: "067",
  },
];

export default function SeedAM02Review() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: SEED.pageBg, minHeight: "100vh" }}>

        {/* Breadcrumb */}
        <div style={{ borderBottom: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
            {[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: "Nootropics", href: "/category/nootropics" }].map((c, i, arr) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={c.href} style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
                {i < arr.length - 1 && <span style={{ color: SEED.border, fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: SEED.border, fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>AM-02 Energy + Focus</span>
          </div>
        </div>

        {/* Feature Banner */}
        <div style={{ width: "100%", background: SEED.bannerBg, position: "relative", overflow: "hidden", minHeight: 300 }}>
          <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ padding: "3px 8px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: SEED.green }}>Seed</span>
                  <span style={{ color: SEED.darkBorder, fontSize: 10 }}>·</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.darkCaption, whiteSpace: "nowrap" }}>REV-2026-065 · Co-Biotic Nootropic · FSP Scored</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 3.2rem)", fontWeight: 800, color: SEED.darkText, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 12 }}>
                  Seed AM-02™<br />
                  <em style={{ fontWeight: 400, color: SEED.darkMuted, fontSize: "0.65em" }}>Energy + Focus</em>
                </h1>
                <p style={{ fontSize: 15, color: SEED.darkMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                  Caffeine-free. Cereboost® ginseng, TeaCrine® theacrine, SoWell™ methyliberine. Gut-brain Co-Biotic postbiotic in an acid-resistant inner capsule. Up to 6 hours of sustained focus without stimulants.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3Sd0OoQ" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: `1px solid ${SEED.darkBorder}`, color: SEED.darkCaption, fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                    FSP {composite.toFixed(1)} → How we score
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/seed-am-02.webp" alt="Seed AM-02 Energy + Focus" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(61,139,55,0.4))" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}><ReviewScoreBadge rating={editorialScore} size="lg" /></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5,6,7].map(s => <Star key={s} size={13} fill={SEED.green} color={SEED.green} />)}
                {[8,9,10].map(s => <Star key={s} size={13} fill="none" color={`${SEED.green}55`} />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: SEED.darkCaption, letterSpacing: "0.12em" }}>7 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.pageBg})` }} />
        </div>

        {/* MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand", value: "Seed" },
            { label: "Category", value: "Co-Biotic Nootropic" },
            { label: "Caffeine", value: "None" },
            { label: "Serving", value: "1 capsule / morning" },
            { label: "Price", value: "$34.99 / month" },
            { label: "Per Serving", value: "$1.17" },
            { label: "Published", value: "May 31, 2026" },
            { label: "Last Updated", value: "May 31, 2026" },
          ]} />
        </div>

        {/* Author & disclosure */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: SEED.darkBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: SEED.green }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                <Link href="/authors" style={{ color: SEED.ink, textDecoration: "none" }}>Fitlab Research Team</Link>
                <span style={{ fontWeight: 400, color: SEED.caption, fontSize: 12 }}> · Independent Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: SEED.muted }}>Ingredient analysis · FSP v2.1 · Cross-referenced with nootropic literature</p>
            </div>
            <span style={{ padding: "3px 8px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 4, fontSize: 10, color: SEED.muted, fontFamily: "var(--font-dm-mono), monospace" }}>Editorial Review</span>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: SEED.sepia, flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: SEED.caption, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links may earn a commission.{" "}
              <Link href="/affiliate-disclosure" style={{ color: SEED.green, textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* Main content */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">
            <aside style={{ borderRight: `1px solid ${SEED.border}` }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              <section id="verdict" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: "28px 32px", backgroundColor: SEED.darkBg, borderRadius: 14, marginBottom: 28, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 14, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 Verdict — REV-2026-065</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>
                        Promising caffeine-free nootropic architecture. Blend-level-only disclosure prevents full assessment of what you're actually getting per dose.
                      </p>
                    </div>
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</div>
                      <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: SEED.darkMuted, letterSpacing: "0.1em" }}>/10 · EDITORIAL</div>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.75 }}>
                    AM-02 scores a 7/10 because the ingredient selection is genuinely interesting — Cereboost® ginseng has a direct cognitive RCT, TeaCrine® is the most-evidenced caffeine-free energy alternative, and the gut-brain postbiotic delivery is architecturally novel. The Bioenergetic Complex at 17mg total almost certainly can't contain clinical doses of all four components simultaneously. And the Multi-Peak Complex (274mg total) doesn't break out how much Cereboost, methyliberine, and theacrine are present individually — Cereboost's RCT used 200mg, meaning this entire complex may be insufficient if the split isn't right. For caffeine-free users who want sustained focus without stimulants, AM-02 is worth trying given the 30-day guarantee. Just know you're partly trusting the formulation.
                  </p>
                </div>
                <div className="review-pillar-grid">
                  {rubric.pillars.map((p) => {
                    const labels: Record<string, string> = { formula: "Formula", transparency: "Transparency", verification: "Verification", value: "Value", practical: "Practical" };
                    const weights: Record<string, string> = { formula: "35%", transparency: "25%", verification: "20%", value: "12%", practical: "8%" };
                    return (
                      <div key={p.pillar} style={{ padding: "16px 14px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10, textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: seedScoreColor(p.score), lineHeight: 1, marginBottom: 4 }}>{p.score.toFixed(1)}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>{labels[p.pillar]}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: SEED.sepia }}>{weights[p.pillar]} weight</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Mobile card */}
              <div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${SEED.border}`, backgroundColor: SEED.cardBg }}>
                  <div style={{ background: SEED.bannerBg, padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 200 }}>
                    <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: "14px 14px 0 0" }} />
                    <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(61,139,55,0.15)", border: "1px solid rgba(61,139,55,0.3)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.green }}>
                      <ShieldCheck size={10} /> Caffeine-Free
                    </span>
                    <div style={{ position: "relative", zIndex: 1, width: 140, height: 170 }}>
                      <Image src="/products/seed-am-02.webp" alt="Seed AM-02" fill style={{ objectFit: "contain" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(transparent, ${SEED.cardBg})` }} />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 4 }}>Seed</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink, marginBottom: 12 }}>AM-02™ Energy + Focus</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: `1px solid ${SEED.mutedBg}`, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                      {[{ val: `${editorialScore}/10`, label: "FSP Score" }, { val: "0mg", label: "Caffeine" }, { val: "6hr", label: "Duration" }].map(stat => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: SEED.green, lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
                          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: SEED.caption }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.caption, marginBottom: 2 }}>Price / 30 servings</p>
                        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: SEED.ink }}>$34.99</p>
                      </div>
                      <a href="https://amzn.to/3Sd0OoQ" target="_blank" rel="nofollow noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
                        Buy on Amazon <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* § 2 What Is AM-02 */}
              <section id="what-is" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>What Is Seed AM-02™?</h2>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  AM-02 Energy + Focus is Seed's Co-Biotic nootropic — a caffeine-free supplement designed for sustained mental energy and cognitive clarity. It uses the same ViaCap dual-capsule architecture as the rest of the Seed Co-Biotics line: an outer capsule for body-facing actives and an acid-resistant inner capsule for gut-brain axis postbiotic delivery.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75, marginBottom: 16 }}>
                  The energy complex combines three patented caffeine alternatives: Cereboost® American ginseng (RCT-evidenced for working memory), SoWell™ methyliberine (fast-acting adenosine modulator), and TeaCrine® theacrine (sustained energy without tolerance). The inner capsule delivers GABA from Lactobacillus brevis fermentation — targeting the gut-brain axis rather than directly supplementing brain GABA.
                </p>
                <p style={{ fontSize: 15, color: SEED.body, lineHeight: 1.75 }}>
                  AM-02 launched in late 2025 as part of Seed's Co-Biotics product line expansion. It is available at Target, Sprouts, Amazon, and seed.com. One capsule per day, taken within 2 hours of waking.
                </p>
              </section>

              {/* § 3 Co-Biotic Architecture */}
              <section id="viacap" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Co-Biotic Architecture</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>AM-02 delivers cognitive actives to the body and GABA postbiotic to the gut microbiome — simultaneously.</p>
                <SeedViaCap
                  outerLabel="Outer Capsule → Systemic Circulation"
                  outerIngredients={[
                    "Multi-Peak Energy Complex 274mg: Cereboost® ginseng + SoWell™ methyliberine + TeaCrine® theacrine",
                    "Bioenergetic Cellular Complex 17mg: Vitamin D3 + Shilajit + PQQ + Vitamin K2 MK-7",
                    "Microbiome Prebiotic 33mg (wasabi + quercetin)",
                    "B vitamins: Folate 400mcg, Niacin 5mg, Riboflavin 1.3mg, Thiamine 1.2mg, B12 2.4mcg",
                  ]}
                  innerLabel="Inner Capsule (Acid-Resistant) → Lower GI / Gut-Brain Axis"
                  innerIngredients={[
                    "Gut-Brain Postbiotic 100mg: GABA from Lactobacillus brevis fermentation",
                    "Targets gut-brain axis via vagus nerve and GABA signalling pathways",
                    "Bypasses upper GI degradation — delivered intact to colon",
                  ]}
                  note="Individual ingredient amounts within the Multi-Peak Energy Complex and Bioenergetic Cellular Complex are not disclosed. Only blend totals are published."
                />
              </section>

              {/* § 4 Score Breakdown */}
              <section id="score-breakdown" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-065" />
              </section>

              {/* § 5 Flags */}
              <section id="flags" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* § 6 Supplement Facts */}
              <section id="supplement-facts" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>Supplement Facts</h2>
                <p style={{ fontSize: 14, color: SEED.caption, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>Serving size: 1 ViaCap · Servings per container: 30</p>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "40%" }}>Ingredient</th>
                        <th style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "25%" }}>Amount</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "20%" }}>Capsule</th>
                        <th style={{ padding: "12px 16px", textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText, width: "15%" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Folate", amount: "400 mcg DFEs", cap: "Outer", ok: true },
                        { name: "Niacin (B3)", amount: "5 mg", cap: "Outer", ok: true },
                        { name: "Riboflavin (B2)", amount: "1.3 mg", cap: "Outer", ok: true },
                        { name: "Thiamine (B1)", amount: "1.2 mg", cap: "Outer", ok: true },
                        { name: "Vitamin B12", amount: "2.4 mcg", cap: "Outer", ok: true },
                        { name: "Multi-Peak Energy Complex (Cereboost® + SoWell™ + TeaCrine®)", amount: "274 mg total", cap: "Outer", ok: false },
                        { name: "Bioenergetic Cellular Complex (D3, Shilajit, PQQ, K2 MK-7)", amount: "17 mg total", cap: "Outer", ok: false },
                        { name: "Microbiome Prebiotic (Wasabi + Quercetin)", amount: "33 mg total", cap: "Outer", ok: false },
                        { name: "Gut-Brain Postbiotic (GABA from L. brevis)", amount: "100 mg total", cap: "Inner", ok: false },
                      ].map((row, i) => (
                        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 16px", fontSize: 13, color: SEED.body, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
                          <td style={{ padding: "11px 16px", fontSize: 12, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", color: row.ok ? SEED.greenDeep : SEED.scoreMid }}>{row.amount}</td>
                          <td style={{ padding: "11px 16px", fontSize: 11, textAlign: "center", fontFamily: "var(--font-dm-mono), monospace", color: SEED.caption }}>{row.cap}</td>
                          <td style={{ padding: "11px 16px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 7px", backgroundColor: row.ok ? SEED.certPass : "rgba(139,115,85,0.10)", border: `1px solid ${row.ok ? SEED.certPassBorder : "rgba(139,115,85,0.3)"}`, borderRadius: 20, fontSize: 10, color: row.ok ? SEED.certPassText : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>
                              {row.ok ? "✓" : "Blend"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* § 7 Ingredient Analysis */}
              <section id="ingredients" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 24, letterSpacing: "-0.02em" }}>Ingredient Analysis</h2>
                {[
                  {
                    name: "Cereboost® American Ginseng — Dose Undisclosed (in 274mg complex)",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "RCT-backed cognitive ingredient — but effective dose is 200mg alone",
                    body: "Cereboost® (Panax quinquefolius, 10% ginsenosides) was tested by Scholey et al. (2010) at 200mg in a double-blind RCT — finding significant improvements in working memory accuracy and secondary memory at 1, 3, and 6 hours post-dose. The mechanism involves acetylcholine neurotransmission and nitric oxide-mediated cerebrovascular blood flow. The critical issue: 200mg Cereboost alone meets the full 274mg Multi-Peak Complex budget if dosed at RCT levels. Unless methyliberine and theacrine are at sub-effective trace doses, the complex almost certainly contains sub-clinical Cereboost.",
                  },
                  {
                    name: "TeaCrine® (Theacrine) — Dose Undisclosed",
                    evidence: "moderate" as EvidenceLevel,
                    verdict: "Best caffeine alternative with tolerance-resistance data",
                    body: "TeaCrine® (theacrine) modulates adenosine and dopamine receptors. Joy et al. (2016) 8-week study showed sustained energy, focus, and motivation improvements without tolerance development — a key advantage over caffeine. Effective doses in studies: 50–200mg. At 100–150mg within a 274mg complex (shared with Cereboost and methyliberine), this is plausibly within range.",
                  },
                  {
                    name: "SoWell™ Methyliberine — Dose Undisclosed",
                    evidence: "emerging" as EvidenceLevel,
                    verdict: "Fast-acting adenosine modulator — emerging evidence base",
                    body: "Methyliberine is a purine alkaloid that antagonises adenosine receptors faster than caffeine. It provides acute energy onset within 30–60 minutes. The evidence base is less mature than TeaCrine — primarily manufacturer-sponsored research and preliminary trials. Typical product doses: 50–100mg. Within the 274mg complex shared with Cereboost and TeaCrine, plausible dosing is possible.",
                  },
                  {
                    name: "Bioenergetic Cellular Complex — 17 mg total",
                    evidence: "emerging" as EvidenceLevel,
                    verdict: "Compelling ingredients at almost certainly sub-clinical doses",
                    body: "17mg contains Vitamin D3 + Shilajit + PQQ + Vitamin K2 MK-7. PQQ alone is evidenced at 20mg (Harris et al., 2013 for sleep quality and cognitive metrics). Vitamin D3 effective doses are 20–100mcg. Shilajit and K2 also require meaningful doses. At 17mg total, none of these four can be at clinical doses simultaneously. This complex is almost certainly present as a micronutrient trace blend, not as primary actives.",
                  },
                ].map((ing, i) => (
                  <div key={ing.name} style={{ marginBottom: i < 3 ? 16 : 0, padding: "18px 22px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: SEED.ink, margin: 0 }}>{ing.name}</h3>
                      <EvidenceBadge level={ing.evidence} />
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>{ing.verdict}</p>
                    <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{ing.body}</p>
                  </div>
                ))}
              </section>

              {/* § 8 Clinical Research */}
              <section id="research" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Clinical Research</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <SeedResearchCard
                    title="Cereboost® American ginseng improves working memory and attention in healthy adults"
                    authors="Scholey A et al."
                    year={2010}
                    journal="Psychopharmacology"
                    finding="200mg Cereboost significantly improved working memory accuracy and secondary memory performance at 1, 3, and 6 hours post-dose vs. placebo. Effects via acetylcholine neurotransmission."
                    trialType="RCT"
                    doi="https://doi.org/10.1007/s00213-010-1880-7"
                  />
                  <SeedResearchCard
                    title="TeaCrine: a novel natural compound studied for its potential role in supporting mental focus and energy"
                    authors="Joy JM et al."
                    year={2016}
                    journal="Journal of the International Society of Sports Nutrition"
                    finding="8-week study: TheaCrine supplementation maintained energy, focus, and motivation without tolerance development. No increases in heart rate or blood pressure vs. placebo."
                    trialType="Observational"
                    doi="https://doi.org/10.1186/s12970-016-0117-z"
                  />
                </div>
              </section>

              {/* § 9 Lab */}
              <section id="lab-data" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Lab & Verification</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {[
                    { label: "ISO 17025-accredited testing", status: true },
                    { label: "Branded ingredients (Cereboost®, TeaCrine®)", status: true },
                    { label: "Vegan / Shelf-stable", status: true },
                    { label: "Individual blend doses disclosed", status: false },
                    { label: "NSF / Informed Sport", status: false },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "12px 14px", backgroundColor: item.status ? SEED.certPass : SEED.certFail, border: `1px solid ${item.status ? SEED.certPassBorder : SEED.certFailBorder}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 14, color: item.status ? SEED.certPassText : SEED.certFailText }}>{item.status ? "✓" : "✗"}</span>
                      <span style={{ fontSize: 12, color: SEED.body, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 10 Claim Audit */}
              <section id="claim-audit" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* § 11 How to Take It */}
              <section id="how-to-take" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>How to Take It</h2>
                <div style={{ padding: "20px 24px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderLeft: `3px solid ${SEED.green}`, borderRadius: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.caption, marginBottom: 8 }}>Protocol</p>
                  <p style={{ fontSize: 15, color: SEED.ink, fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-dm-sans), sans-serif" }}>Take 1 capsule daily, within 2 hours of waking. On an empty stomach or with a light meal.</p>
                  <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      "Morning timing aligns with natural cortisol peak for maximum synergy with AM-02's energy complex.",
                      "Caffeine-free — no strict cutoff time, but earlier use is preferred to align with circadian energy patterns.",
                      "Do not crush or open the capsule — the acid-resistant inner capsule must remain intact.",
                      "Can be combined with coffee carefully — see FAQ on stacking. Monitor for additive adenosine blockade effects.",
                    ].map((tip, i) => (
                      <li key={i} style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, fontFamily: "var(--font-dm-sans), sans-serif" }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* § 12 Comparison */}
              <section id="comparison" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>vs. Competitors</h2>
                <div className="review-table-wrap">
                  <table style={{ borderCollapse: "collapse", minWidth: 600, width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: SEED.darkBg }}>
                        {["Product", "Caffeine", "Key Actives", "Full Label?", "Testing", "$/Serving"].map(h => (
                          <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: SEED.darkText }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { product: "Seed AM-02", caf: "None", keys: "Cereboost, TeaCrine, Methyliberine, GABA postbiotic", full: "Partial", test: "ISO 17025", price: "$1.17", hi: true },
                        { product: "Mind Lab Pro", caf: "None", keys: "Lion's Mane, Citicoline, Bacopa, L-Theanine", full: "Yes", test: "Informed Sport", price: "$2.33", hi: false },
                        { product: "Alpha Brain", caf: "None", keys: "Bacopa, Alpha-GPC, L-Theanine, Huperzine A", full: "Partial", test: "Informed Sport", price: "$1.33", hi: false },
                        { product: "Natural Stacks Smart Caffeine", caf: "100mg", keys: "Caffeine + L-Theanine", full: "Yes", test: "None listed", price: "$0.50", hi: false },
                        { product: "Qualia Mind", caf: "90mg", keys: "28 ingredients", full: "Yes", test: "None listed", price: "$3.33", hi: false },
                      ].map((row, i) => (
                        <tr key={row.product} style={{ backgroundColor: row.hi ? "rgba(61,139,55,0.06)" : i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: row.hi ? 700 : 400, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.product}</td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: row.caf === "None" ? SEED.greenDeep : SEED.muted, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.caf}</td>
                          <td style={{ padding: "11px 14px", fontSize: 11, color: SEED.muted, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.keys}</td>
                          <td style={{ padding: "11px 14px", textAlign: "center" }}>
                            <span style={{ display: "inline-block", padding: "2px 7px", backgroundColor: row.full === "Yes" ? SEED.certPass : "rgba(139,115,85,0.10)", border: `1px solid ${row.full === "Yes" ? SEED.certPassBorder : "rgba(139,115,85,0.3)"}`, borderRadius: 20, fontSize: 10, color: row.full === "Yes" ? SEED.certPassText : "#8B7355", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 600 }}>{row.full}</span>
                          </td>
                          <td style={{ padding: "11px 14px", fontSize: 12, color: SEED.muted, fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.test}</td>
                          <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: row.hi ? SEED.green : SEED.ink, fontFamily: "var(--font-dm-mono), monospace" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 13, color: SEED.caption, marginTop: 12, fontFamily: "var(--font-dm-sans), sans-serif" }}>Prices verified May 2026. Mind Lab Pro is the key transparent competitor — full label, Informed Sport certified, but 2× the price.</p>
              </section>

              {/* § 13 Seed Family */}
              <section id="products" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Seed Product Family</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <ProductCard name="AM-02™ Energy + Focus" brand="Seed" category="Nootropic" score={7} priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Caffeine-Free", "Cereboost®", "TeaCrine®"]} buyUrl="https://amzn.to/3Sd0OoQ" buyLabel="Buy on Amazon" reviewSlug="seed-am-02" image="seed-am-02.webp" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} featured={true} />
                  <ProductCard name="PM-02™ Sleep + Restore" brand="Seed" category="Sleep" score={7} priceUSD="$34.99 / 30 servings" priceINR="N/A" tags={["Biphasic Melatonin", "Ashwagandha"]} buyUrl="https://amzn.to/4eiBPZ1" buyLabel="Buy on Amazon" reviewSlug="seed-pm-02" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                  <ProductCard name="DS-01® Daily Synbiotic" brand="Seed" category="Synbiotic" score={8} priceUSD="$49.99 / 30 servings" priceINR="N/A" tags={["24 Strains", "53.6B AFU"]} buyUrl="https://www.amazon.com/Seed-DS-01-Daily-Synbiotic-Multi-Strain/dp/B0CMJR4XGR" buyLabel="Buy on Amazon" reviewSlug="seed-ds-01" bgFrom="#0D120A" bgTo="#0A1508" accent={SEED.green} />
                </div>
              </section>

              {/* § 14 Pros & Cons */}
              <section id="pros-cons" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={["Caffeine-free — no tolerance, no jitters, no sleep disruption", "Cereboost® ginseng has a direct cognitive RCT (Scholey et al., 2010)", "TeaCrine® provides sustained energy without tolerance build-up (Joy et al., 2016)", "Novel gut-brain GABA postbiotic delivery — no other nootropic does this", "ISO 17025-accredited testing", "Simple 1 capsule/day protocol", "Available at Target, Sprouts, Amazon — no subscription required", "Suitable for caffeine-sensitive individuals"]}
                  cons={["Multi-Peak Energy Complex (274mg total) doesn't break out individual ingredient doses", "Bioenergetic Cellular Complex (17mg) almost certainly sub-clinical for all four components", "More expensive than basic caffeine alternatives ($0.50/serving)", "Mind Lab Pro: full label, Informed Sport certified, similar efficacy profile at comparable price", "Gut-brain GABA efficacy in this context is emerging/unproven at product level"]}
                />
              </section>

              {/* § 15 Safety */}
              <section id="safety" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Side Effects</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Adenosine receptor effects + caffeine stacking", severity: "low", detail: "Methyliberine and theacrine modulate adenosine receptors — similar to caffeine. Combined with high caffeine intake, additive effects (mild anxiety, elevated heart rate) are possible. Monitor if combining AM-02 with multiple coffee cups daily." },
                    { label: "American ginseng + blood thinners / diabetes medication", severity: "moderate", detail: "American ginseng may have mild hypoglycaemic effects and can interact with warfarin. If you take blood thinners or diabetes medications, consult a doctor before use." },
                    { label: "General tolerability", severity: "low", detail: "All primary actives (ginseng, theacrine, methyliberine) are well-characterised in short-term studies. No dependency, withdrawal, or significant adverse event profile at typical doses." },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "14px 18px", backgroundColor: SEED.cardBg, border: `1px solid ${item.severity === "moderate" ? "rgba(139,115,85,0.3)" : SEED.border}`, borderRadius: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ padding: "2px 8px", backgroundColor: item.severity === "moderate" ? "#8B7355" : "#4A7C59", borderRadius: 4, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EBD9" }}>{item.severity} risk</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.label}</span>
                      </div>
                      <p style={{ fontSize: 13, color: SEED.muted, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* § 16 Value */}
              <section id="value" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
                <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="Multi-Peak Energy Complex" />
              </section>

              {/* § 17 Where to Buy */}
              <section id="where-to-buy" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Where to Buy</h2>
                <div style={{ padding: "24px 28px", backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: SEED.green, marginBottom: 6 }}>Available on Amazon</p>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: SEED.ink, marginBottom: 4 }}>$34.99 <span style={{ fontSize: "0.55em", color: SEED.sepia, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ 30 servings</span></p>
                    <p style={{ fontSize: 13, color: SEED.muted, margin: 0 }}>Also at seed.com, Target, Sprouts. Prices verified May 2026.</p>
                  </div>
                  <a href="https://amzn.to/3Sd0OoQ" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
                    <ExternalLink size={14} /> Buy on Amazon
                  </a>
                </div>
              </section>

              {/* § 18 FAQ */}
              <section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: i % 2 === 0 ? SEED.cardBg : SEED.pageBg, borderRadius: 8, border: `1px solid ${SEED.mutedBg}`, overflow: "hidden" }}>
                      <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: SEED.ink, fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.name}</span>
                        <span className="faq-icon-am02" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: SEED.mutedBg, border: `1px solid ${SEED.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: SEED.green }}>
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </summary>
                      <p style={{ padding: "0 18px 16px", fontSize: 13, color: SEED.muted, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
                <style>{`details[open] .faq-icon-am02 svg{display:none;}details[open] .faq-icon-am02::after{content:'';display:block;width:10px;height:2px;background:${SEED.green};border-radius:1px;}details summary::-webkit-details-marker{display:none;}details summary::marker{display:none;}`}</style>
              </section>

              {/* § 19 Final Verdict */}
              <section id="final" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: `1px solid ${SEED.mutedBg}` }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: SEED.ink, marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: "32px 36px", backgroundColor: SEED.darkBg, borderRadius: 16, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, ...SEED.dotGrid, borderRadius: 16, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.green, marginBottom: 8 }}>FSP v2.1 — REV-2026-065</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "4rem", fontWeight: 800, color: SEED.green, lineHeight: 1 }}>{editorialScore}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: SEED.darkMuted }}>/ 10</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: SEED.darkText, lineHeight: 1.4 }}>Conditionally recommended. Best for caffeine-sensitive users who want the gut-brain architecture.</p>
                    </div>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontSize: 14, color: SEED.darkMuted, lineHeight: 1.8, marginBottom: 28 }}>
                    AM-02 scores 7/10 because the ingredient selection is genuinely interesting and the Co-Biotic gut-brain delivery is unique. Cereboost® has a real RCT, TeaCrine® has tolerance data, and the concept of pairing cognitive actives with a gut-brain postbiotic is forward-thinking. The 7 (not an 8 or 9) is because the blend-level opacity makes it impossible to confirm whether you're getting clinical doses of the key actives. If you want a caffeine-free daily nootropic and value the innovation, AM-02 is worth trying — the refund policy covers the risk.
                  </p>
                  <a href="https://amzn.to/3Sd0OoQ" target="_blank" rel="nofollow noopener noreferrer"
                    style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: SEED.green, color: SEED.darkText, fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Buy on Amazon <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* Research References */}
              <section style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
                <div style={{ padding: 20, backgroundColor: SEED.cardBg, border: `1px solid ${SEED.border}`, borderRadius: 10 }}>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { text: "Scholey A et al. (2010). Effects of American ginseng (Panax quinquefolius) on neurocognitive function. Psychopharmacology, 212(3):345–356.", url: "https://doi.org/10.1007/s00213-010-1880-7" },
                      { text: "Joy JM et al. (2016). TheaCrine (1,3,7,9-tetramethyluric acid) in sustained energy and cognitive performance. Journal of the International Society of Sports Nutrition, 13(1):1–7.", url: "https://doi.org/10.1186/s12970-016-0117-z" },
                      { text: "Cryan JF et al. (2019). The microbiota-gut-brain axis. Physiological Reviews, 99(4):1877–2013.", url: "https://doi.org/10.1152/physrev.00018.2018" },
                      { text: "Harris CB et al. (2013). Dietary PQQ alters indicators of inflammation and mitochondrial-related metabolism. Journal of Nutritional Biochemistry, 24(12):2076–2084.", url: "https://doi.org/10.1016/j.jnutbio.2013.07.008" },
                    ].map((ref, i) => (
                      <li key={i} style={{ fontSize: 12, color: SEED.muted, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {ref.text}{" "}
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: SEED.green, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>doi →</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Reviews */}
        <section style={{ borderTop: `1px solid ${SEED.border}`, backgroundColor: SEED.mutedBg }} className="pad-section-sm px-page">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: SEED.caption, marginBottom: 6 }}>Seed Product Reviews</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: SEED.ink, letterSpacing: "-0.02em" }}>More from Seed</h3>
              </div>
              <Link href="/reviews" style={{ fontSize: 12, color: SEED.green, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em", textDecoration: "none" }}>All reviews →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {relatedReviews.map(r => <ReviewCard key={r.slug} {...r} />)}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
