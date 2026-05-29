---
name: review-article
description: Build a complete, SEO-optimised product review page for /reviews/[slug]/page.tsx on FitLab Reviews
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Review Article Builder

You are writing a full product review for **FitLab Reviews** at `/reviews/$ARGUMENTS`.

`$ARGUMENTS` is the product slug (e.g. `transparent-labs-bulk-black-review`, `legion-pulse-pre-workout-review-2026`).
The user's message contains: product name, brand, category, affiliate URL, product image filename, price, and any notes.

---

## Step 1 — Do NOT read existing review files for structure

All structural rules are encoded in this skill. Only read these if actually needed:

- `public/products/` — run `ls public/products/` to verify image filenames before writing ProductCards
- `lib/types.ts` lines 1–60 — only if you need to verify a type

---

## Step 2 — File location

```
app/reviews/<slug>/page.tsx   ← CREATE this (static route — takes priority over [slug] fallback)
```

Never write to `app/reviews/[slug]/page.tsx` — that is the fallback template.

---

## Step 3 — Complete ScoringRubric type

```typescript
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

const rubric: ScoringRubric = {
  pillars: [
    { pillar: "formula",      score: X.X, notes: "..." },
    { pillar: "transparency", score: X.X, notes: "..." },
    { pillar: "verification", score: X.X, notes: "..." },
    { pillar: "value",        score: X.X, notes: "..." },
    { pillar: "practical",    score: X.X, notes: "..." },
  ],
  flags: [
    { type: "green", label: "...", detail: "..." },
    { type: "red",   label: "...", detail: "...", deduction: 0.2 },
  ],
  claimAudit: [
    {
      claim: '"Exact marketing claim in quotes"',
      verdict: "supported",           // "supported" | "overstated" | "context-dependent" | "unsupported"
      evidence: "strong",             // "strong" | "moderate" | "limited" | "emerging" | "insufficient"
      notes: "Evidence rationale. Cite Author (Year) if applicable.",
    },
    // 4–6 claims total
  ],
  valueMetric: {
    pricePerServing: 2.00,
    primaryActiveGrams: 8.0,
    pricePerGramActive: 0.25,
    categoryAvgPricePerGram: 0.19,
    efficiency: "below",             // "above" | "at" | "below"
  },
  compositeScore: 0,                 // ALWAYS 0 here — assigned after
  editorialScore: 9 as ReviewRating,
};

// MUST call after the const:
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;
```

**FSP v2.1 weights:** Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%

---

## Step 4 — Required imports

```typescript
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
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";
```

Note: `Plus` is imported from lucide-react for the FAQ toggle. Only import icons you actually use.

---

## Step 5 — SEO metadata

```typescript
export const metadata: Metadata = {
  title: "<Brand Short> <Product> Review (2026) — Rated X/10",  // ≤55 chars, NO "Fitlabreviews"
  description: "<Brand> <Product> review: <fact 1>, <fact 2>, USD pricing, vs <competitor>. FSP X/10.",
  // description must be 140–160 chars
  alternates: { canonical: "/reviews/<slug>" },
  openGraph: {
    title: "<Product> Review (2026) — <One-line hook>",
    description: "<30–50 words. Hook + key finding>",
    url: "https://fitlabreviews.com/reviews/<slug>",
    type: "article",
  },
};
```

---

## Step 6 — JSON-LD schemas (both required)

Define `faqSchema` as a const above the component with **minimum 8 questions**. Place both scripts at the very top of the JSX return:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
```

`reviewSchema` structure:
```typescript
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/<slug>#review",
  name: "<Product> — Fitlabreviews FSP Review",
  reviewBody: "...",
  reviewRating: { "@type": "Rating", ratingValue: editorialScore, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "<Full Product Name>",
    brand: { "@type": "Brand", name: "<Brand>" },
    category: "<Category>",
    description: "<One sentence>",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "XX.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "<affiliate URL>",
    },
  },
};
```

---

## Step 7 — Component prop signatures (TypeScript enforced)

```tsx
// ✅ CORRECT
<ReviewScoreBadge rating={editorialScore} size="lg" />
<FlagSystem flags={rubric.flags} />
<ClaimAudit items={rubric.claimAudit} />
<ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="citrulline malate" />
<ScoreBreakdown rubric={rubric} reviewCode="REV-2026-XXX" />
<ProsCons pros={["...", "..."]} cons={["...", "..."]} />
<EvidenceBadge level="strong" />
<MobileTOC items={tocItems} />   // tocItems: { id: string, label: string }[]
<TableOfContents items={tocItems} />

// ❌ WRONG (cause build errors)
<ReviewScoreBadge score={} maxScore={} accent={} />
<FlagSystem green={[]} red={[]} />
<ClaimAudit claims={[]} />
<ValueMetricPanel priceUSD={} servings={} />
```

ProductCard:
```tsx
<ProductCard
  name="Product Name"
  brand="Brand"
  category="Category"
  score={9}                          // optional — shows score ring
  priceUSD="$59.99 / 30 servings"
  priceINR="₹5,200–₹6,500"          // "N/A" if not available
  tags={["Tag 1", "Tag 2"]}
  buyUrl="https://amzn.to/..."
  buyLabel="Check Price"
  reviewSlug="product-slug"          // adds Read Review button
  image="product-image.webp"         // file in /public/products/
  bgFrom="#1A0A06"
  bgTo="#0D0402"
  accent="#C4622D"
  featured={true}                    // shows "Reviewed" badge
/>
```

---

## Step 8 — Required sections (all 17+, in order)

| # | id | Label |
|---|---|---|
| 1 | `verdict` | Quick Verdict |
| 2 | `what-is` | What Is [Product]? |
| 3 | `score-breakdown` | Score Breakdown |
| 4 | `flags` | Red & Green Flags |
| 5 | `supplement-facts` | Supplement Facts |
| 6 | `ingredients` | Ingredient Breakdown |
| 7 | `lab-data` | Lab & Verification |
| 8 | `claim-audit` | Claim Audit |
| 9 | `how-to-take` | How to Take It |
| 10 | `comparison` | vs. Competitors |
| 11 | `products` | Products at a Glance |
| 12 | `pros-cons` | Pros & Cons |
| 13 | `safety` | Safety & Side Effects |
| 14 | `value` | Price & Value |
| 15 | `where-to-buy` | Where to Buy |
| 16 | `faq` | FAQ |
| 17 | `final` | Final Verdict |
| — | (no id) | Research References |
| — | (no id) | Related Reviews (outside container-pad) |

---

## Step 9 — Page layout skeleton (verified pattern)

```tsx
export default function ProductReview() {
  return (
    <>
      <script type="application/ld+json" ... />  {/* reviewSchema */}
      <script type="application/ld+json" ... />  {/* faqSchema */}

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* 1. Breadcrumb — breadcrumb-pad on OUTER div */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/reviews">Reviews</Link>
            <span>/</span>
            <Link href="/category/pre-workout">Pre-Workout</Link>  {/* category crumb */}
            <span>/</span>
            <span>Product Name</span>
          </div>
        </div>

        {/* 2. Feature Banner — h1 lives here */}
        <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #bgFrom 0%, #bgTo 100%)", position: "relative", overflow: "hidden" }}>
          {/* Grid texture overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Product image — HIDDEN on mobile */}
          <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, width: 200, height: 270, alignItems: "flex-end", justifyContent: "center" }}>
            <Image src="/products/image.webp" alt="Product Name" width={200} height={270}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 40px rgba(X,X,X,0.4))" }} priority />
          </div>
          {/* Text */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 44, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-XXX · CATEGORY</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 560, padding: "0 24px" }}>
              Brand Name<br /><em style={{ fontWeight: 400, color: "#accent" }}>Product Name</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#accent" color="#accent" />)}
                {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i} size={14} fill="none" color="#accent" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* 3. Hero Row — h2 here (NOT h1) */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          {/* Pill row — HIDDEN on mobile — NEVER use inline display:flex */}
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", whiteSpace: "nowrap" }}>REV-2026-XXX</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#accent", whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>Brand · Category</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                Product Name<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Is It Worth It in 2026?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                One-paragraph hook. What the product claims, what we actually found.
                Link to relevant <Link href="/category/pre-workout" style={{ color: "#accent", textDecoration: "none" }}>category page</Link> naturally.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="AFFILIATE_URL" target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#accent", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Buy on Amazon <ExternalLink size={13} />
                </a>
                <Link href="/methodology"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {composite.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={editorialScore} size="lg" />
          </div>
        </div>

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Category", value: "Pre-Workout" },
            { label: "Serving Size", value: "XX g / 1 scoop" },
            { label: "Servings / Tub", value: "30" },
            { label: "Published", value: "May 29, 2026" },
            { label: "Last Updated", value: "May 29, 2026" },
          ]} />
        </div>

        {/* 5. Author Box */}
        <div style={{ maxWidth: 1280, margin: "8px auto 0", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 24 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #D4C9B8, #accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#F2EBD9", flexShrink: 0 }}>F</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 1 }}>Fitlab Research Team</p>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>
                Reviewed by the full team · <Link href="/authors" style={{ color: "#accent", textDecoration: "none" }}>Authors page →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* 6. Affiliate Disclosure */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links on this page may earn a commission. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#accent", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
        </div>

        {/* 7. Mobile TOC — NO border, only marginTop */}
        <div className="block lg:hidden" style={{ marginTop: 16 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 8. Main Content + Sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC — className="hidden lg:block" NOT "header-desktop-nav" */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article — <article> not <main>, minWidth: 0 required */}
            <article style={{ minWidth: 0 }}>

              {/* § 1 Quick Verdict */}
              {/* § 2 What Is [Product]? */}
              {/* Mobile product card goes here — between § 1 and § 2 */}
              {/* § 3 – § 15 ... */}
              {/* § 16 FAQ — see FAQ section below */}
              {/* § 17 Final Verdict */}
              {/* Research References — always last inside article */}

            </article>
          </div>
        </div>

        {/* 9. Related Reviews — OUTSIDE layout-sidebar and container-pad */}
        <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section-sm px-page">
          {/* ... */}
        </section>

      </div>
    </>
  );
}
```

---

## Step 10 — Mobile product card (required — placed between § 1 and § 2)

Every review must include a mobile-only product card that shows below the Quick Verdict dark panel on small screens. It is hidden on sm+ (the feature banner image shows instead). Structure:

```tsx
{/* Mobile product card — block on mobile, hidden sm+ */}
<div className="block sm:hidden" style={{ margin: "0 0 48px" }}>
  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>

    {/* Dark header with product image */}
    <div style={{ background: "linear-gradient(145deg, #bgFrom 0%, #bgTo 100%)", padding: "28px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", minHeight: 220 }}>
      {/* Grid texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", borderRadius: "14px 14px 0 0" }} />
      {/* Certification badge */}
      <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(accent-rgb,0.15)", border: "1px solid rgba(accent-rgb,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#accent" }}>
        <ShieldCheck size={10} /> Informed Choice Certified
      </span>
      {/* Product image */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Image src="/products/image.webp" alt="Product name" width={160} height={200}
          style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(X,X,X,0.5))", display: "block" }} />
      </div>
      {/* Fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F8F2E4)" }} />
    </div>

    {/* Card body */}
    <div style={{ padding: "16px 20px 20px" }}>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Brand Name</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>Product Name</p>

      {/* 3 key stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF" }}>
        {[
          { val: `${editorialScore}/10`, label: "FSP Score" },
          { val: "305mg", label: "Caffeine" },
          { val: "8,000mg", label: "Citrulline" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 800, color: "#accent", lineHeight: 1, marginBottom: 3 }}>{stat.val}</p>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A89880" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Price + CTA */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / 30 servings</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#1A1714" }}>$XX.XX</p>
        </div>
        <a href="AFFILIATE_URL" target="_blank" rel="nofollow noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#accent", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", flexShrink: 0 }}>
          Buy on Amazon <ExternalLink size={12} />
        </a>
      </div>
    </div>
  </div>
</div>
```

---

## Step 11 — Supplement Facts table (correct pattern)

```tsx
<div className="review-table-wrap">
  <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
    {/* width: "100%" fills the section — prevents dead space on right */}
    {/* minWidth: 480 ensures mobile scroll kicks in before content breaks */}
    <thead>
      <tr style={{ backgroundColor: "#1A1714" }}>
        <th style={{ padding: "12px 16px", textAlign: "left", ..., width: "42%" }}>Ingredient</th>
        <th style={{ padding: "12px 16px", textAlign: "right", ..., width: "28%" }}>Amount / Serving</th>
        <th style={{ padding: "12px 16px", textAlign: "center", ..., width: "30%" }}>Clinical Range</th>
      </tr>
    </thead>
    <tbody>
      {ingredients.map((row, i) => (
        <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
          <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.name}</td>
          <td style={{ padding: "11px 16px", fontSize: 13, fontWeight: 700, textAlign: "right", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap" }}>{row.amount}</td>
          <td style={{ padding: "11px 16px", textAlign: "center" }}>
            {row.clinical !== "—" ? (
              {/* Green pill badge for dosed ingredients */}
              <span style={{ display: "inline-block", padding: "2px 9px", backgroundColor: "rgba(45,106,79,0.10)", border: "1px solid rgba(45,106,79,0.25)", borderRadius: 20, fontSize: 11, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", whiteSpace: "nowrap", fontWeight: 600 }}>
                {row.clinical}
              </span>
            ) : (
              <span style={{ fontSize: 12, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>—</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

Key rules:
- Always `width: "100%"` on the table — prevents the dead space on the right side
- Always `minWidth` (px) — never `width: "100%"` alone inside an overflow wrapper
- `whiteSpace: "nowrap"` on the amount column — prevents mid-value wrapping
- Clinical dose values use green pill badges, not plain coloured text
- `—` values use muted grey text

---

## Step 12 — Comparison table (correct pattern)

```tsx
<div className="review-table-wrap">
  <table style={{ borderCollapse: "collapse", minWidth: 580, width: "100%" }}>
    ...
  </table>
</div>
```

The `.review-table-wrap` class (in `globals.css`) adds `overflow-x: auto` and a "swipe to see more →" hint on mobile.

---

## Step 13 — FAQ section with + / − toggle (required pattern)

**Do not use plain `<details>` without the toggle icon.** Every FAQ must use this pattern:

```tsx
<section id="faq" style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #EDE8DF" }}>
  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {faqSchema.mainEntity.map((faq, i) => (
      <details
        key={i}
        style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}
      >
        <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>
            {faq.name}
          </span>
          {/* Plus icon — becomes minus dash via CSS when open */}
          <span className="faq-icon" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#accent" }}>
            <Plus size={13} strokeWidth={2.5} />
          </span>
        </summary>
        <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {faq.acceptedAnswer.text}
        </p>
      </details>
    ))}
  </div>

  {/* CSS to swap Plus → minus line when open, and hide browser default marker */}
  <style>{`
    details[open] .faq-icon svg { display: none; }
    details[open] .faq-icon::after {
      content: '';
      display: block;
      width: 10px;
      height: 2px;
      background: #accent;
      border-radius: 1px;
    }
    details summary::-webkit-details-marker { display: none; }
    details summary::marker { display: none; }
  `}</style>
</section>
```

Replace `#accent` in the CSS string with the actual hex value for the product (e.g. `#C4622D` for pre-workout, `#D4A96A` for Legion, `#2D6A4F` for whey).

**FAQ rules:**
- Minimum 8 questions
- Questions must exactly mirror `faqSchema.mainEntity` — no duplication of content definition
- Never use a plain `<details>` without the `.faq-icon` toggle pattern

---

## Step 14 — Clickable research references (required pattern)

Every reference must be a clickable DOI link. Never use plain text references:

```tsx
{/* Research References — always last section inside <article> */}
<section style={{ marginBottom: 56 }}>
  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Research References</h2>
  <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
    <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
      {[
        {
          text: "Author A et al. (Year). Study title fragment. Journal. Vol(Issue):pages.",
          url: "https://doi.org/10.XXXX/xxxxxxx",
        },
        // ... all references
      ].map((ref, i) => (
        <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {ref.text}{" "}
          <a href={ref.url} target="_blank" rel="noopener noreferrer"
            style={{ color: "#accent", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, whiteSpace: "nowrap" }}>
            doi →
          </a>
        </li>
      ))}
    </ol>
  </div>
</section>
```

**Reference rules:**
- Every reference needs a real DOI URL — never omit
- Use `doi.org/10.XXXX/...` format for all academic journals
- Minimum 8–10 references per review
- The `doi →` link opens in a new tab

---

## Step 15 — Internal linking (required throughout)

Internal links make the review part of the site's content graph and improve SEO. Add them naturally — not as a block list at the bottom, but woven into prose where they genuinely help the reader.

**Required link locations:**

| Location | Link target | Example |
|---|---|---|
| Breadcrumb | `/category/<category>` | `<Link href="/category/pre-workout">Pre-Workout</Link>` |
| Hero paragraph | Category or best-of page | `...in the <Link href="/best/pre-workout">pre-workout category</Link>` |
| "What Is" section | Ingredient pages | `<Link href="/ingredients/citrulline">citrulline malate</Link>` |
| Ingredient breakdown headings | Ingredient page | `<Link href="/ingredients/caffeine">{ing.name} →</Link>` |
| Comparison table footnote | Related review | `...read our <Link href="/reviews/other-product">BULK Black review</Link>` |
| Final verdict | Related review + best-of | `...consider <Link href="/reviews/other-product">TL BULK Black</Link>` and `<Link href="/best/creatine">creatine</Link>` |

**Never link:**
- Ingredient names in body prose mid-sentence more than once per ingredient (first mention only)
- Brand names to external sites (affiliate links are separate CTAs)
- Made-up internal URLs that don't exist

**Pattern for ingredient heading links:**
```tsx
<p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif" }}>
  {ing.link ? (
    <Link href={ing.link} style={{ color: "#1A1714", textDecoration: "none" }}>{ing.name} →</Link>
  ) : ing.name}
</p>
```

---

## Step 16 — Breadcrumb (4-level pattern for reviews)

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
  <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
    <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
    <span style={{ color: "#D4C9B8" }}>/</span>
    <Link href="/reviews" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Reviews</Link>
    <span style={{ color: "#D4C9B8" }}>/</span>
    <Link href="/category/pre-workout" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Pre-Workout</Link>
    <span style={{ color: "#D4C9B8" }}>/</span>
    <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Product Short Name</span>
  </div>
</div>
```

`breadcrumb-pad` goes on the **outer** div, not the inner max-width div.

---

## Step 17 — Design system tokens

```
Background:   #F2EBD9 (page), #F8F2E4 (card), #EDE8DF (muted), #1A1714 (dark panel)
Ink:          #1A1714 (headings), #2D2926 (body), #5C5650 (muted), #8A8480 (caption)
Border:       #D4C9B8 (primary), #EDE8DF (subtle)
Success:      #2D6A4F (green flags, certs)
Warning:      #8B7355 (amber)
Error:        #8B3A2C (red flags)
Sepia:        #A89880 (labels, metadata)

Fonts (CSS vars):
  "var(--font-playfair), Georgia, serif"   → headings, scores, product names
  "var(--font-dm-mono), monospace"         → labels, badges, codes, metadata
  "var(--font-dm-sans), sans-serif"        → body text, CTAs, buttons
```

**Accent colours by category:**

| Category | Accent | bgFrom / bgTo |
|---|---|---|
| Pre-Workout (default) | `#C4622D` rust | `#2A1410` / `#1A0E0A` |
| Pre-Workout (premium/gold) | `#D4A96A` gold | `#0A1220` / `#060C18` |
| Whey / Mass Gainer | `#2D6A4F` green | `#1A2E1E` / `#0F1A11` |
| Creatine | `#3A5F8B` blue | `#1A1E2E` / `#11131E` |
| Organ Supplement | `#7B3B1A` deep brown | `#1E1208` / `#120C06` |
| Weight Loss | `#8B3A2C` dark red | `#1E0E0E` / `#140808` |
| Multivitamin | `#5C5CBF` indigo | `#1B1A2E` / `#12111E` |
| Plant Protein | `#4A7C59` sage | `#0F1E14` / `#0A1410` |
| Fat Burner | `#8B7355` warm brown | `#1E1B14` / `#141008` |

---

## Step 18 — Review figure codes

Format: `REV-2026-NNN` (sequential).

Find next number:
```bash
grep -r "REV-2026-" app/reviews/ | grep -oP "REV-2026-\d+" | sort | tail -5
```

Current highest known: **REV-2026-051** (Legion Pulse, May 2026).

---

## Step 19 — Content rules (non-negotiable)

- **No AI fluff**: banned — "game-changer", "unlock your potential", "science-backed" (overused), "revolutionary", "supercharge", "take your fitness to the next level"
- **Citations**: always `Author (Year)` inline — never "studies show" alone
- **Doses**: state the dose used in the cited trial, not just the label dose
- **Prices**: USD primary. INR only in "Where to Buy" sub-sections covering India. Always state "prices verified May 2026"
- **Evidence**: specific RCTs or meta-analyses only — not "research suggests"
- **Voice**: direct. First person where appropriate. No passive constructions.
- **Counterfeit warnings**: only in the Where to Buy section, never repeated across the review
- **Claim audit**: quote the exact marketing claim with quotation marks in the `claim` field

---

## Step 20 — Mobile-responsive rules (critical — violations cause broken layouts)

1. **Feature banner image**: `className="hidden sm:flex"` — NEVER `style={{ display: "flex" }}`
2. **Hero pill row**: `className="hidden sm:flex"` — NEVER `style={{ display: "flex" }}`
3. **Mobile TOC**: `className="block lg:hidden"` with `style={{ marginTop: 16 }}` — NO `borderTop` or `borderBottom` (causes red lines on mobile)
4. **Comparison tables**: `<div className="review-table-wrap">` + `minWidth` (px) on `<table>` — NEVER `width: "100%"` alone
5. **5-pillar verdict grid**: `<div className="review-pillar-grid">` — NEVER inline `display: grid` with `minmax(130px+)`
6. **Supplement facts table**: always `width: "100%"` AND `minWidth` together

---

## Step 21 — Hub page sync

After writing the review:

1. Check `app/reviews/page.tsx` — add the new review to the `reviews` array:
```typescript
{
  slug: "product-slug",
  title: "Product Name",
  brand: "Brand",
  category: "Pre-Workout",
  figure: "REV-2026-NNN",
  rating: 9 as ReviewRating,
  verdict: "One sentence. Direct. Specific finding.",
  publishedAt: "2026-05-29",
  tags: ["Tag 1", "Tag 2"],
  thirdParty: true,
  accent: "#C4622D",
  image: "/products/image.webp",
}
```

2. Check `app/page.tsx` — if the review scores 8/10+, add to `featuredReviews` array.

---

## Step 22 — Pre-commit checklist

```bash
npm run build
```

Before committing, verify:
- [ ] `app/reviews/<slug>/page.tsx` created (NOT in the dynamic `[slug]` folder)
- [ ] Title `%s` ≤ 55 characters, no "Fitlabreviews" in string
- [ ] Meta description 140–160 characters
- [ ] `alternates: { canonical: "/reviews/<slug>" }` set
- [ ] Both JSON-LD schemas present (Review + FAQPage)
- [ ] `datePublished` and `dateModified` set to today
- [ ] `rubric.compositeScore = computeComposite(...)` called after const
- [ ] All 17+ sections present with correct `id` attributes
- [ ] Feature banner has `<h1>` — hero row uses `<h2>`
- [ ] `Star` imported from lucide-react, `Plus` imported for FAQ toggle
- [ ] Sidebar: `className="hidden lg:block"` — NOT `header-desktop-nav`
- [ ] No `style={{ display: "block" }}` on aside
- [ ] Article wrapper is `<article style={{ minWidth: 0 }}>` NOT `<main>`
- [ ] Mobile TOC: `style={{ marginTop: 16 }}` only — no borders
- [ ] Mobile product card present between §1 and §2 with `className="block sm:hidden"`
- [ ] Supplement facts table: `width: "100%"` AND `minWidth` set
- [ ] Clinical dose column uses green pill badges, not plain coloured text
- [ ] FAQ uses `<details>` with `.faq-icon` + `<Plus>` + CSS swap pattern
- [ ] All references use clickable `doi →` links with real DOI URLs
- [ ] Internal links in breadcrumb, hero, ingredient section, comparison, final verdict
- [ ] `<FlagSystem flags={rubric.flags}>` — NOT `green={} red={}`
- [ ] `<ClaimAudit items={rubric.claimAudit}>` — NOT inline
- [ ] `<ValueMetricPanel metric={rubric.valueMetric}>` — NOT individual props
- [ ] `<ReviewScoreBadge rating={editorialScore}>` — NOT `score={}`
- [ ] ProductCard images verified in `public/products/`
- [ ] No unused imports
- [ ] Build passes with zero TypeScript errors
- [ ] Hub page (`app/reviews/page.tsx`) updated with new entry
- [ ] Homepage (`app/page.tsx`) updated if score ≥ 8

---

## Output

After creating the file, report:
1. URL: `/reviews/<slug>`
2. FSP composite score and editorial score
3. TypeScript build result
4. Image file used (or "gradient fallback")
5. Hub page updated: yes/no
