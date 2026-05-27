---
name: review-article
description: Build a complete, SEO-optimised product review page for /reviews/[slug]/page.tsx on FitLab Reviews
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Review Article Builder

You are writing a full product review for **FitLab Reviews** at `/reviews/$ARGUMENTS`.

`$ARGUMENTS` is the product slug (e.g. `on-serious-mass`, `dymatize-iso100`).
The user's message contains: product name, brand, category, affiliate URL, product image filename (if any), price, and any personal experience notes to include.

---

## Step 1 — Do NOT read existing review files for structure

All structural rules are encoded in this skill. Reading existing pages wastes tokens. Only read these two files if you actually need them:

- `public/products/` — run `ls public/products/` to see available product images
- `lib/types.ts` lines 1–60 — only if you need to verify a type

---

## Step 2 — File location

```
app/reviews/<slug>/page.tsx   ← CREATE this (static route, takes priority over [slug] fallback)
```

Never write to `app/reviews/[slug]/page.tsx` — that is the fallback template. Static routes win in Next.js routing.

---

## Step 3 — Complete ScoringRubric type (encode everything here)

This is the most important section. The TypeScript type requires ALL of these fields:

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
    // GREEN flags (no deduction)
    { type: "green", label: "...", detail: "..." },
    // RED flags (deduction subtracted from composite)
    { type: "red", label: "...", detail: "...", deduction: 0.2 },
  ],
  claimAudit: [
    {
      claim: '"Exact marketing claim in quotes"',
      verdict: "supported",          // "supported" | "overstated" | "context-dependent" | "unsupported"
      evidence: "strong",            // "strong" | "moderate" | "limited" | "emerging" | "insufficient"
      notes: "Evidence rationale. Cite Author (Year) if applicable.",
    },
    // 4–6 claims total
  ],
  valueMetric: {
    pricePerServing: 1.20,           // USD
    primaryActiveGrams: 24,          // grams of key active per serving
    pricePerGramActive: 0.050,       // pricePerServing / primaryActiveGrams
    categoryAvgPricePerGram: 0.040,  // benchmark for the category
    efficiency: "below",             // "above" | "at" | "below"
  },
  compositeScore: 0,                 // ALWAYS start at 0
  editorialScore: 8 as ReviewRating, // your final editorial number (1–10)
};

// MUST call this after the const — computes weighted pillars minus red flag deductions
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;
```

**FSP v2.1 weights:** Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%

**Pillar scoring guide:**
- formula: Protein/active density, ingredient quality, no proprietary blends, amino acid profile
- transparency: Full label disclosure, no hidden doses, batch info accessible
- verification: 3rd-party certs (Informed Choice, NSF, heavy metals COA), no recalls
- value: Cost/serving vs category avg, size options, India vs US pricing gap
- practical: Mixability, taste, convenience, capsule count, travel-friendliness

---

## Step 4 — Required imports (copy exactly)

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, ShieldCheck } from "lucide-react";
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

Only import `IngredientCard` if the review has an explicit ingredients breakdown section.
Only import icons you actually use — don't leave unused imports.

---

## Step 5 — SEO metadata (mandatory)

```typescript
export const metadata: Metadata = {
  title: "<Product> Review (2026) — Rated X/10",   // ≤55 chars, NO "Fitlabreviews"
  description: "<Brand> <Product> review: <fact 1>, <fact 2>, USD pricing, vs <competitor>. FSP X/10.",
  // description must be 140–160 chars exactly
  alternates: { canonical: "/reviews/<slug>" },
  openGraph: {
    title: "<Product> Review (2026) — <One-line hook>",
    description: "<30–50 words. Hook + key finding>",
    url: "https://fitlabreviews.com/reviews/<slug>",
    type: "article",
  },
};
```

**Title rules:**
- Format: `"<Brand Short Name> <Product> Review (2026) — Rated X/10"`
- `%s` portion ≤ 55 characters (the template appends " · Fitlabreviews")
- Never include "Fitlabreviews" in the string — it doubles via the root template

---

## Step 6 — JSON-LD schemas (mandatory — both required)

Place both `<script>` tags at the very top of the JSX return, before the main `<div>`:

```tsx
export default function ProductNameReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        "@id": "https://fitlabreviews.com/reviews/<slug>#review",
        name: "<Product Name> — Fitlabreviews FSP Review",
        reviewBody: "In-depth, evidence-led review using the Fitlab Scoring Protocol (FSP)...",
        reviewRating: {
          "@type": "Rating",
          ratingValue: editorialScore,
          bestRating: 10,
          worstRating: 1,
        },
        datePublished: "2026-05-27",    // today — this IS the publish date for new reviews
        dateModified: "2026-05-27",
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
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.mainEntity,   // reference the faqSchema const defined above
      }) }} />

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>
        {/* page content */}
      </div>
    </>
  );
}
```

Define `faqSchema` as a const above the component (7 questions minimum). The FAQ section in JSX should render `faqSchema.mainEntity` to avoid duplicating content.

---

## Step 7 — Component prop signatures (exact — TypeScript enforced)

### ReviewScoreBadge
```tsx
<ReviewScoreBadge rating={editorialScore} size="lg" />
// Props: rating: ReviewRating, size?: "sm"|"md"|"lg", showLabel?: boolean
// ✗ WRONG: score={...} maxScore={...} accent={...}  — these don't exist
```

### FlagSystem
```tsx
<FlagSystem flags={rubric.flags} />
// Props: flags: ReviewFlag[]
// ✗ WRONG: green={[...]} red={[...]}  — component separates them internally
```

### ClaimAudit
```tsx
<ClaimAudit items={rubric.claimAudit} />
// Props: items: ClaimAuditItem[]
// ✗ Don't define items inline in JSX — put them in rubric.claimAudit
```

### ValueMetricPanel
```tsx
<ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="protein" />
// Props: metric: ValueMetric, activeIngredientLabel?: string
// ✗ WRONG: priceUSD={...} servings={...} — these don't exist
```

### ScoreBreakdown
```tsx
<ScoreBreakdown rubric={rubric} reviewCode="REV-2026-XXX" />
// Props: rubric: ScoringRubric, reviewCode: string
```

### MetadataStrip
```tsx
<MetadataStrip items={[
  { label: "Category", value: "Whey Protein" },
  { label: "Serving", value: "29.4g / 1 scoop" },
  { label: "Published", value: "May 27, 2026" },
  { label: "Last Updated", value: "May 27, 2026" },
]} />
// Props: items: { label: string, value: string }[]
```

### MobileTOC
```tsx
<MobileTOC items={tocItems} />
// tocItems: { id: string, label: string }[]
// Wrap in: <div className="block lg:hidden" style={{ borderBottom: "1px solid #D4C9B8" }}>
```

### TableOfContents
```tsx
<TableOfContents items={tocItems} />
// Wrap in: <aside className="header-desktop-nav" style={{ display: "block" }}>
//           <div style={{ position: "sticky", top: 24 }}>
```

### ProsCons
```tsx
<ProsCons pros={["...", "..."]} cons={["...", "..."]} />
// Props: pros: string[], cons: string[]
```

### EvidenceBadge
```tsx
<EvidenceBadge level="strong" />
<EvidenceBadge level="moderate" showIcon={false} />
// level: "strong"|"moderate"|"limited"|"emerging"|"insufficient"
```

### ProductCard
```tsx
<ProductCard
  name="Gold Standard 100% Whey"
  brand="Optimum Nutrition"
  category="Whey Protein"
  score={9}                          // optional — shows score ring
  priceUSD="$33–36 / 2 lb"
  priceINR="₹2,795–2,960"           // use "N/A" if not available
  tags={["Informed Choice", "24g"]}  // optional
  buyUrl="https://amzn.to/..."
  buyLabel="Check Price"             // default: "Check Price"
  reviewSlug="optimum-nutrition-gold-standard-whey"  // optional — adds Read Review button
  image="on-gold-standard-whey.webp"  // optional — file in /public/products/
  bgFrom="#1A2E1E"                   // gradient start (dark)
  bgTo="#0F1A11"                     // gradient end (darker)
  accent="#2D6A4F"                   // ring, badge, CTA button color
  featured={true}                    // shows "Reviewed" badge
/>
```

**Image mode:** when `image` is provided, the product photo fills the card header and the score ring moves to a small overlay bottom-right. When no image: gradient + centered large score ring + star row.

**Available images** — check `public/products/` with `ls` before writing ProductCards. Common ones:
- `on-gold-standard-whey.webp`, `muscleblaze-biozyme-performance-whey.webp`, `dymatize-iso100.webp`
- `on-micronized-creatine-monohydrate-powder.webp`, `muscleblaze-creatine.webp`
- `myprotein-impact-whey.webp`, `bulk-supplements-creatine.webp`
- `gorilla-mode-preworkout.webp`, `legion-pulse-preworkout.webp`, `c4-original-preworkout.webp`

### ReviewCard
```tsx
<ReviewCard
  slug="myprotein-creatine-monohydrate"
  title="MyProtein Creatine Monohydrate"
  brand="MyProtein"
  category="Creatine"
  rating={8 as ReviewRating}
  verdict="Pure creatine at a budget price. One real gap: no third-party batch certificate."
  publishedAt="2025-03-08"
  figNumber="02"
/>
```

---

## Step 8 — Page layout skeleton

```tsx
export default function ProductNameReview() {
  return (
    <>
      {/* JSON-LD schemas — both scripts here */}

      <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>

        {/* 1. Breadcrumb */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="breadcrumb-pad">
            {/* Home / Reviews / Category / Product */}
          </div>
        </div>

        {/* 2. Hero — layout-hero-split */}
        <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="layout-hero-split">
              {/* Left: badge pill + H1 + verdict sentence + CTA buttons */}
              {/* Right: ReviewScoreBadge + product Image */}
            </div>
          </div>
        </div>

        {/* 3. MetadataStrip */}
        <MetadataStrip items={[...]} />

        {/* 4. Mobile TOC */}
        <div className="block lg:hidden" style={{ borderBottom: "1px solid #D4C9B8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
            <MobileTOC items={tocItems} />
          </div>
        </div>

        {/* 5. Main content + sidebar */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Sidebar — desktop only */}
            <aside className="header-desktop-nav" style={{ display: "block" }}>
              <div style={{ position: "sticky", top: 24 }}>
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Article body */}
            <main>
              {/* sections here */}
            </main>

          </div>
        </div>

      </div>
    </>
  );
}
```

---

## Step 9 — Required sections (in this order)

| # | id | Label | Key content |
|---|---|---|---|
| 1 | `verdict` | Quick Verdict | Dark panel summary, 5-pillar score grid |
| 2 | `personal-experience` OR `what-is-<product>` | Experience or What Is It | Personal use / product education |
| 3 | `score-breakdown` | Score Breakdown | `<ScoreBreakdown>` + composite note |
| 4 | `flags` | Red & Green Flags | `<FlagSystem flags={rubric.flags}>` |
| 5 | `nutrition-label` | Nutrition Label / Supplement Facts | Key nutrients table |
| 6 | `ingredients` OR `nutrients` | Ingredient / Nutrient Breakdown | Evidence per ingredient, EvidenceBadge per row |
| 7 | `lab-data` | Lab Test Data | Cert cards grid (Informed Choice, heavy metals, etc.) |
| 8 | `claim-audit` | Claim Audit | `<ClaimAudit items={rubric.claimAudit}>` |
| 9 | `how-to-take` OR `flavours` | Dosing / Flavour Guide | Protocol or flavour ratings |
| 10 | `comparison` | vs. Competitors | Comparison table (min 3 competitors) |
| 11 | `products` | Products at a Glance | 4-card ProductCard grid |
| 12 | `pros-cons` | Pros & Cons | `<ProsCons>` |
| 13 | `safety` | Safety & Side Effects | Evidence-based, myth/reality panels if relevant |
| 14 | `value` | Price & Value | `<ValueMetricPanel>` + price grid by size |
| 15 | `where-to-buy` | Where to Buy | Channel cards (recommended / not recommended) |
| 16 | `faq` | FAQ | Renders `faqSchema.mainEntity` — no content duplication |
| 17 | `final` | Final Verdict | Dark panel, big score, final call, affiliate CTA |
| 18 | (no id) | Related Reviews | 2–3 `<ReviewCard>` items |

**Sections 2, 9 are flexible** — adapt label and content to the product type.

---

## Step 10 — Design system tokens (inline styles)

```
Background:   #F2EBD9 (page), #F8F2E4 (card), #EDE8DF (muted), #1A1714 (dark panel)
Ink:          #1A1714 (headings), #2D2926 (body), #5C5650 (muted), #8A8480 (caption)
Border:       #D4C9B8 (primary), #EDE8DF (subtle)
Rust/CTA:     #C4622D (default accent — override per product)
Sepia:        #A89880 (labels, metadata)
Success:      #2D6A4F (green flags, Informed Choice)
Warning:      #8B7355 (amber)
Error:        #8B3A2C (red flags)

Fonts (CSS vars):
  fontFamily: "var(--font-playfair), Georgia, serif"    → headings, scores, names
  fontFamily: "var(--font-dm-mono), monospace"          → labels, badges, codes, metadata
  fontFamily: "var(--font-dm-sans), sans-serif"         → body text, CTAs, buttons

Section heading pattern:
  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem",
    fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>
    Section Title
  </h2>
```

---

## Step 11 — Review figure codes

Format: `REV-YYYY-NNN` where YYYY = current year (2026), NNN = next sequential number.

To find the next number:
```bash
grep -r "REV-2026-" app/reviews/ | grep -oP "REV-2026-\d+" | sort | tail -5
```

Start from the highest number + 1.

---

## Step 12 — Color accents by product category

Pick an accent that fits the product, then use it for: hero CTA, accent line, score ring, featured ProductCard badge, final verdict score number.

| Category | Suggested accent | bgFrom / bgTo |
|---|---|---|
| Whey / Mass Gainer | `#2D6A4F` (green) | `#1A2E1E` / `#0F1A11` |
| Creatine | `#3A5F8B` (blue) | `#1A1E2E` / `#11131E` |
| Pre-Workout | `#C4622D` (rust/default) | `#2A1410` / `#1A0E0A` |
| Organ Supplement | `#7B3B1A` (deep brown) | `#1E1208` / `#120C06` |
| Weight Loss | `#8B3A2C` (dark red) | `#1E0E0E` / `#140808` |
| Multivitamin | `#5C5CBF` (indigo) | `#1B1A2E` / `#12111E` |
| Plant Protein | `#4A7C59` (sage) | `#0F1E14` / `#0A1410` |
| Fat Burner | `#8B7355` (warm brown) | `#1E1B14` / `#141008` |

---

## Step 13 — Content rules (non-negotiable)

- **No AI fluff**: banned phrases — "game-changer", "unlock your potential", "science-backed" (overused), "revolutionary", "supercharge", "take your fitness to the next level"
- **Citations**: always `Author (Year)` inline, never "studies show" alone
- **Doses**: state the dose used in the cited study, not just the label dose
- **Prices**: USD is primary. INR optional — only in "Where to Buy India" sub-sections. Always state "prices verified May 2026"
- **Evidence**: reference specific RCTs or meta-analyses — not vague "research suggests"
- **India market**: only mention counterfeit warnings in the Where to Buy section, not across the whole review
- **Vitamin A / organ supplements**: always include a safety section covering the UL (10,000 IU/day)
- **Voice**: direct. First person where appropriate. No passive "it has been shown that"
- **Claim audit**: quote the exact marketing claim with quotation marks in the `claim` field

---

## Step 14 — Hub page sync

After writing the review, check `app/reviews/page.tsx` (or equivalent reviews hub):
- If a `reviews` array exists, add the new review with: `{ slug, title, brand, category, rating, verdict, publishedAt, figNumber, tags }`
- The `publishedAt` should be today's date: `"2026-05-27"`

Also check `app/page.tsx` (homepage) — if it has a featured reviews array, add the new review if it is a strong review (8/10+).

---

## Step 15 — Pre-commit checklist

Run before every commit:
```bash
npm run build
```

Verify before committing:
- [ ] `app/reviews/<slug>/page.tsx` created (NOT in the dynamic `[slug]` folder)
- [ ] Title `%s` ≤ 55 characters, no "Fitlabreviews" in string
- [ ] Meta description 140–160 characters
- [ ] `alternates: { canonical: "/reviews/<slug>" }` set
- [ ] Both JSON-LD schemas present (Review + FAQPage)
- [ ] `datePublished` and `dateModified` both set to today `"2026-05-27"`
- [ ] `rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags)` called
- [ ] `editorialScore = rubric.editorialScore` derived from rubric
- [ ] All 17+ sections present with correct `id` attributes
- [ ] `<FlagSystem flags={rubric.flags}>` — NOT `green={} red={}`
- [ ] `<ClaimAudit items={rubric.claimAudit}>` — NOT items defined inline
- [ ] `<ValueMetricPanel metric={rubric.valueMetric}>` — NOT individual props
- [ ] `<ReviewScoreBadge rating={editorialScore}>` — NOT `score={}`
- [ ] ProductCard images verified to exist in `public/products/`
- [ ] No unused imports
- [ ] Build passes with zero TypeScript errors

---

## Output

After creating the file and verifying the build passes, report:
1. URL: `/reviews/<slug>`
2. FSP score and editorial score
3. TypeScript result
4. Image files used (or "gradient fallback" if none)
5. Any hub page changes made
