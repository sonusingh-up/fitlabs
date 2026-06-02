---
name: review-article
description: Build a complete, SEO-optimised product review page for /reviews/[slug]/page.tsx on FitLab Reviews
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Review Article Builder

You are writing a full product review for **FitLab Reviews** at `/reviews/$ARGUMENTS`.

`$ARGUMENTS` is the product slug (e.g. `transparent-labs-bulk-black-review`, `legion-pulse-pre-workout-review-2026`).
The user's message contains: product name, brand, category, affiliate URL, product image filename(s), price, and any notes.

---

## Step 1 — Do NOT read existing review files for structure

All structural rules are encoded in this skill. Only read these if actually needed:

- `public/products/` — run `ls public/products/` to verify image filenames before writing ProductCards or competitor cards
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

Note: `Plus` is imported for the FAQ toggle. `ShieldCheck` is used in the mobile product card badge. Only import icons you actually use.

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
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
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
  priceINR="N/A"                     // "N/A" unless USA pricing is known
  tags={["Tag 1", "Tag 2"]}
  buyUrl="https://amzn.to/..."       // Amazon affiliate link ONLY
  buyLabel="Buy on Amazon"
  reviewSlug="product-slug"          // adds Read Review button
  image="product-image.webp"         // filename only — file must exist in /public/products/
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
            <Link href="/category/creatine">Creatine</Link>  {/* category crumb */}
            <span>/</span>
            <span>Product Name</span>
          </div>
        </div>

        {/* 2. Feature Banner — h1 lives here */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #bgFrom 0%, #bgTo 100%)", position: "relative", overflow: "hidden" }}>
          {/* Grid texture overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }} className="px-page">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 0 40px", gap: 32 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Pill row — HIDDEN on mobile */}
                <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ ..., whiteSpace: "nowrap" }}>REV-2026-XXX</span>
                  <span style={{ ..., flexShrink: 0 }} />
                  <span style={{ ..., whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
                </div>
                <h1>Brand<br /><em>Product Name</em></h1>
                <p>One-paragraph hook...</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="AFFILIATE_URL" target="_blank" rel="nofollow noopener noreferrer" ...>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <Link href="/methodology" ...>FSP {composite.toFixed(1)} → How we score</Link>
                </div>
              </div>
              {/* Product image — hidden on mobile */}
              <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ position: "relative", width: 200, height: 240 }}>
                  <Image src="/products/image.webp" alt="Product Name" fill
                    style={{ objectFit: "contain", filter: "drop-shadow(...)" }} priority />
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ReviewScoreBadge rating={editorialScore} size="lg" />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* 3. Star row + metadata */}
        ...

        {/* 4. MetadataStrip */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Brand",    value: "Brand Name"     },
            { label: "Category", value: "Category"       },
            { label: "Serving",  value: "1 scoop / day"  },
            { label: "Price",    value: "$XX.XX / N srv"  },
            { label: "Per Serve", value: "$X.XX"          },
            { label: "Published", value: "May 30, 2026"  },
          ]} />
        </div>

        {/* 5. Author Box */}
        ...

        {/* 6. Affiliate Disclosure */}
        ...

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
      {/* Certification / key feature badge */}
      <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", backgroundColor: "rgba(accent-rgb,0.15)", border: "1px solid rgba(accent-rgb,0.35)", borderRadius: 20, fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#accent" }}>
        <ShieldCheck size={10} /> Key certification or claim
      </span>
      {/* Product image */}
      <div style={{ position: "relative", zIndex: 1, width: 160, height: 200 }}>
        <Image src="/products/image.webp" alt="Product name" fill
          style={{ objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(X,X,X,0.5))" }} />
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
          { val: "5g",   label: "Creatine" },
          { val: "100",  label: "Servings" },
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
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>Price / N servings</p>
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
- Always `width: "100%"` on the table — prevents dead space on the right side
- Always `minWidth` (px) — never `width: "100%"` alone inside an overflow wrapper
- `whiteSpace: "nowrap"` on the amount column — prevents mid-value wrapping
- Clinical dose values use green pill badges, not plain coloured text
- `—` values use muted grey text

---

## Step 12 — Comparison table + Shop Competitors cards (both required)

The comparison section has two parts: a spec table for data scanning, and a competitor card grid for quick buying.

### Part A — Comparison spec table

```tsx
<div className="review-table-wrap">
  <table style={{ borderCollapse: "collapse", minWidth: 580, width: "100%" }}>
    ...
  </table>
</div>
<p style={{ fontSize: 13, color: "#8A8480", marginTop: 12, lineHeight: 1.6 }}>
  Footnote. Prices verified May 2026.
</p>
```

The `.review-table-wrap` class adds `overflow-x: auto` and a "swipe to see more →" hint on mobile.

### Part B — Shop Competitors card grid (required below the table)

Every comparison section must include a compact product card grid for each competitor. Each card shows: product image, certification label, price/serving, a **Buy →** button (Amazon link), and a **Read →** button (internal review link if we have one).

```tsx
{/* Competitor product cards */}
<div style={{ marginTop: 24 }}>
  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 14 }}>Shop Competitors</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
    {([
      {
        name: "Competitor Name",
        cert: "NSF Certified",
        price: "$0.60/serve",
        image: "/products/competitor-image.webp",          // must exist in /public/products/
        buyUrl: "https://amzn.to/...",                      // Amazon link only
        reviewSlug: "competitor-slug",                      // null if no review yet
      },
      // ... more competitors
    ] as { name: string; cert: string; price: string; image: string; buyUrl: string; reviewSlug: string | null }[]).map((comp) => (
      <div key={comp.name} style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
        <div style={{ height: 3, backgroundColor: "#accent" }} />
        <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ width: 52, height: 66, flexShrink: 0, backgroundColor: "#EDE8DF", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={comp.image} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4 }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1714", marginBottom: 3, lineHeight: 1.3, fontFamily: "var(--font-dm-sans), sans-serif" }}>{comp.name}</p>
            <p style={{ fontSize: 10, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 4, letterSpacing: "0.04em" }}>{comp.cert}</p>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#accent", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 8 }}>{comp.price}</p>
            <div style={{ display: "flex", gap: 5 }}>
              <a href={comp.buyUrl} target="_blank" rel="nofollow noopener noreferrer"
                style={{ fontSize: 10, padding: "4px 9px", backgroundColor: "#accent", color: "#F2EBD9", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>
                Buy →
              </a>
              {comp.reviewSlug && (
                <Link href={`/reviews/${comp.reviewSlug}`}
                  style={{ fontSize: 10, padding: "4px 9px", border: "1px solid #D4C9B8", color: "#5C5650", borderRadius: 4, textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em" }}>
                  Read →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Competitor card rules:**
- Only include competitors for which an image exists in `/public/products/` — verify with `ls public/products/` first
- `buyUrl` must be an Amazon link (affiliate code or direct Amazon product URL) — never a brand's own website
- `reviewSlug` — use our slug if we have reviewed it, `null` if not
- For unaffiliated competitor Amazon links, use `https://www.amazon.com/s?k=product+name` as a fallback search URL

---

## Step 13 — Where to Buy section (Amazon-only CTA)

**Only show Amazon.** Do not list multiple retailers (GNC, Vitamin Shoppe, direct brand site, Walmart, etc.). Use this single-panel pattern:

```tsx
<section id="where-to-buy" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Where to Buy</h2>
  <div style={{ padding: "24px 28px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
    <div>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#accent", marginBottom: 6 }}>Available on Amazon</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#1A1714", marginBottom: 4 }}>
        $XX.XX <span style={{ fontSize: "0.55em", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400 }}>/ N servings</span>
      </p>
      <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>Prime shipping · Fast delivery · Easy returns. Prices verified May 2026.</p>
    </div>
    <a href="AFFILIATE_URL" target="_blank" rel="nofollow noopener noreferrer"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", backgroundColor: "#accent", color: "#F2EBD9", fontSize: 14, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "nowrap" }}>
      <ExternalLink size={14} /> Buy on Amazon
    </a>
  </div>
</section>
```

---

## Step 14 — FAQ section with unique class name + toggle (required pattern)

**Critical: use a unique className per review** to prevent CSS conflicts. Base it on the slug (e.g. `faq-icon-tl-creatine`, `faq-icon-gorilla-mono`). Never reuse `faq-icon` as-is across multiple reviews.

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
          {/* Use a unique className derived from the review slug */}
          <span className="faq-icon-SLUG" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#accent" }}>
            <Plus size={13} strokeWidth={2.5} />
          </span>
        </summary>
        <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {faq.acceptedAnswer.text}
        </p>
      </details>
    ))}
  </div>

  {/* CSS — use the same unique class name here */}
  <style>{`
    details[open] .faq-icon-SLUG svg { display: none; }
    details[open] .faq-icon-SLUG::after {
      content: '';
      display: block;
      width: 10px;
      height: 2px;
      background: #ACCENT_HEX;
      border-radius: 1px;
    }
    details summary::-webkit-details-marker { display: none; }
    details summary::marker { display: none; }
  `}</style>
</section>
```

Replace `SLUG` with a short kebab-case identifier (e.g. `tl-hmb`, `gorilla-hcl`, `arrae-bloat`).
Replace `#ACCENT_HEX` with the actual hex value (e.g. `#3A5F8B` for creatine, `#C4622D` for pre-workout).

**FAQ rules:**
- Minimum 8 questions
- Questions must exactly mirror `faqSchema.mainEntity` — no duplication of content definition
- Never use a plain `<details>` without the toggle pattern

---

## Step 15 — Clickable research references (required pattern)

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
- Use `doi.org/10.XXXX/...` for academic journals; `clinicaltrials.gov/study/NCTXXXXXXXX` for trials; `pubmed.ncbi.nlm.nih.gov/XXXXXXXX/` for PubMed entries
- Minimum 8–10 references per review
- The `doi →` link opens in a new tab

---

## Step 16 — Internal linking rules

**Required link locations:**

| Location | Link target | Example |
|---|---|---|
| Breadcrumb | `/category/<category>` | `<Link href="/category/creatine">Creatine</Link>` |
| "What Is" section | Ingredient pages | `<Link href="/ingredients/creatine">creatine monohydrate</Link>` |
| Ingredient breakdown headings | Ingredient page | `<Link href="/ingredients/caffeine">{ing.name} →</Link>` |
| Competitor cards | `/reviews/<slug>` | `reviewSlug: "competitor-slug"` → renders Read → button |
| Final verdict | Related review | `<Link href="/reviews/other-product">read our review →</Link>` |

**Never link:**
- To `/brands/[slug]` pages anywhere in a review — no brand page backlinks
- Ingredient names in body prose more than once per ingredient (first mention only)
- Brand names to their own external websites (affiliate CTAs are separate and clearly marked)
- Made-up internal URLs that don't exist

---

## Step 17 — Image rules

- **All images must be local** — use `/products/filename.webp` only. Never use external CDN URLs (R2, Cloudinary, etc.) for product images.
- **Verify before writing** — run `ls public/products/` and confirm the filename exists before referencing it.
- **ProductCard `image` prop** — pass the filename only (e.g. `"tl-creatine-hmb.webp"`), not the full path. The component prepends `/products/`.
- **Feature banner and mobile card** — use the full path `src="/products/filename.webp"`.
- **Competitor cards** — use `src={comp.image}` where `comp.image` is the full `/products/...` path.
- **`<Image>` components** — never add `unoptimized` for local images. Only use `unoptimized` if forced to use an external URL (avoid).

---

## Step 18 — Breadcrumb (4-level pattern for reviews)

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
  <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }} className="px-page">
    {[
      { label: "Home",     href: "/" },
      { label: "Reviews",  href: "/reviews" },
      { label: "Creatine", href: "/category/creatine" },
    ].map((c, i, arr) => (
      <span key={c.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Link href={c.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{c.label}</Link>
        {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
      </span>
    ))}
    <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
    <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Product Short Name</span>
  </div>
</div>
```

`breadcrumb-pad` goes on the **outer** div, not the inner max-width div.

---

## Step 19 — Design system tokens

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
| Gut Health / Digestive | `#C4622D` rust | `#1A0F08` / `#2C1A10` |
| Organ Supplement | `#7B3B1A` deep brown | `#1E1208` / `#120C06` |
| Weight Loss | `#8B3A2C` dark red | `#1E0E0E` / `#140808` |
| Multivitamin | `#5C5CBF` indigo | `#1B1A2E` / `#12111E` |
| Plant Protein | `#4A7C59` sage | `#0F1E14` / `#0A1410` |
| Fat Burner | `#8B7355` warm brown | `#1E1B14` / `#141008` |

---

## Step 20 — Review figure codes

Format: `REV-2026-NNN` (sequential).

Find next number:
```bash
grep -roh "REV-2026-[0-9]*" app/reviews/ | sort -t'-' -k3 -n | tail -5
```

Current highest known: **REV-2026-058** (Gorilla Mind Creatine Monohydrate, May 2026).

---

## Step 21 — Content rules (non-negotiable)

- **No AI fluff**: banned — "game-changer", "unlock your potential", "science-backed" (overused), "revolutionary", "supercharge", "take your fitness to the next level"
- **Citations**: always `Author (Year)` inline — never "studies show" alone
- **Doses**: state the dose used in the cited trial, not just the label dose
- **Prices**: USD primary. INR only if specifically relevant (never required). Always state "prices verified May 2026"
- **Evidence**: specific RCTs or meta-analyses only — not "research suggests"
- **Voice**: direct. No passive constructions. Call out marketing overreach plainly.
- **Counterfeit warnings**: only in the Where to Buy section — not repeated elsewhere
- **Claim audit**: quote the exact marketing claim with quotation marks in the `claim` field
- **No brand backlinks**: never link to `/brands/[slug]` pages anywhere in a review

---

## Step 22 — Mobile-responsive rules (critical — violations cause broken layouts)

1. **Feature banner image**: `className="hidden sm:flex"` — NEVER `style={{ display: "flex" }}`
2. **Hero pill row**: `className="hidden sm:flex"` — NEVER `style={{ display: "flex" }}`
3. **Mobile TOC**: `className="block lg:hidden"` with `style={{ marginTop: 16 }}` — NO `borderTop` or `borderBottom` (causes red lines on mobile)
4. **Comparison tables**: `<div className="review-table-wrap">` + `minWidth` (px) on `<table>` — NEVER `width: "100%"` alone
5. **5-pillar verdict grid**: `<div className="review-pillar-grid">` — NEVER inline `display: grid` with `minmax(130px+)`
6. **Supplement facts table**: always `width: "100%"` AND `minWidth` together

---

## Step 23 — Hub page sync

After writing the review:

1. Check `app/reviews/page.tsx` — add the new review to the `reviews` array:
```typescript
{
  slug: "product-slug",
  title: "Product Name",
  brand: "Brand",
  category: "Creatine",
  figure: "REV-2026-NNN",
  rating: 8 as ReviewRating,
  verdict: "One sentence. Direct. Specific finding.",
  publishedAt: "2026-05-30",
  tags: ["Tag 1", "Tag 2"],
  thirdParty: true,
  accent: "#3A5F8B",
  image: "/products/image.webp",   // local path — never external CDN URL
  buyUrl: "https://amzn.to/...",   // Amazon only
}
```

2. Check `app/page.tsx` — if the review scores 8/10+, add to `featuredReviews` array.

3. Check `app/category/page.tsx` — if this is a new category or the first review in a category, update `reviewCount` for the matching entry.

---

## Step 24 — Pre-commit checklist

```bash
npm run build
```

Before committing, verify:
- [ ] `app/reviews/<slug>/page.tsx` created (NOT in the dynamic `[slug]` folder)
- [ ] Title `%s` ≤ 55 characters, no "Fitlabreviews" in string
- [ ] Meta description 140–160 characters
- [ ] `alternates: { canonical: "/reviews/<slug>" }` set
- [ ] Both JSON-LD schemas present (Review + FAQPage)
- [ ] `reviewSchema` has `name` field set
- [ ] `datePublished` and `dateModified` set to today
- [ ] `rubric.compositeScore = computeComposite(...)` called after const
- [ ] All 17+ sections present with correct `id` attributes
- [ ] Feature banner has `<h1>` with product name
- [ ] `Star` imported from lucide-react, `Plus` imported for FAQ toggle, `ShieldCheck` for mobile card badge
- [ ] Sidebar: `className="hidden lg:block"` — NOT `header-desktop-nav`
- [ ] No `style={{ display: "block" }}` on aside
- [ ] Article wrapper is `<article style={{ minWidth: 0 }}>` NOT `<main>`
- [ ] Mobile TOC: `style={{ marginTop: 16 }}` only — no borders
- [ ] Mobile product card present between §1 and §2 with `className="block sm:hidden"`
- [ ] Supplement facts table: `width: "100%"` AND `minWidth` set
- [ ] Clinical dose column uses green pill badges, not plain coloured text
- [ ] FAQ uses `<details>` with unique `.faq-icon-SLUG` class + `<Plus>` + CSS swap pattern
- [ ] All references use clickable `doi →` links with real DOI/PubMed/ClinicalTrials URLs
- [ ] Internal links in breadcrumb, hero, ingredient section, final verdict
- [ ] No links to `/brands/[slug]` pages anywhere
- [ ] `<FlagSystem flags={rubric.flags}>` — NOT `green={} red={}`
- [ ] `<ClaimAudit items={rubric.claimAudit}>` — NOT inline
- [ ] `<ValueMetricPanel metric={rubric.valueMetric}>` — NOT individual props
- [ ] `<ReviewScoreBadge rating={editorialScore}>` — NOT `score={}`
- [ ] ProductCard `image` prop is a filename (not full path) — file verified in `public/products/`
- [ ] Competitor cards present in comparison section with real images, Buy → and Read → links
- [ ] Where to Buy section is Amazon-only single CTA — no multi-retailer grid
- [ ] All product images use local `/products/` paths — no external CDN URLs
- [ ] No `unoptimized` on `<Image>` components pointing to local files
- [ ] FAQ class name is unique per review (e.g. `faq-icon-tl-hmb`)
- [ ] No unused imports
- [ ] Build passes with zero TypeScript errors
- [ ] Hub page (`app/reviews/page.tsx`) updated with new entry including local image path
- [ ] Homepage (`app/page.tsx`) updated if score ≥ 8
- [ ] `app/category/page.tsx` reviewCount updated if applicable

---

## Output

After creating the file, report:
1. URL: `/reviews/<slug>`
2. FSP composite score and editorial score
3. TypeScript build result
4. Image file used (verified in `/public/products/`)
5. Hub page updated: yes/no
6. Competitor cards: how many, which have Read → links
