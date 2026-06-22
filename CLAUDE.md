@AGENTS.md

# Fitlabreviews — Claude Code Rules

This file is read automatically by Claude Code at the start of every session.
Rules here are non-negotiable and override default Claude behaviour.

---

## 1. SEO — Title Tags

### Rule: NEVER include the brand name in a page title string
The root layout (`app/layout.tsx`) uses the template `"%s · Fitlabreviews"`.
If a page title string also contains "Fitlabreviews", the rendered `<title>` will be:
`"Your Title · Fitlabreviews · Fitlabreviews"` — two brands, too long, penalised.

**Correct patterns:**
```typescript
// ✅ Let template append brand — keep title under 55 chars
title: "ON Gold Standard Whey Review (2026) — Rated 9/10"
// Renders: "ON Gold Standard Whey Review (2026) — Rated 9/10 · Fitlabreviews" = 66 chars ✓

// ✅ Use { absolute } ONLY when template must be bypassed entirely
title: { absolute: "Fitlabreviews — Evidence-Led Supplement Reviews" }
// Renders: "Fitlabreviews — Evidence-Led Supplement Reviews" = 47 chars ✓
```

**Wrong patterns:**
```typescript
// ❌ Will produce double brand
title: "ON Gold Standard Whey Review — 9/10 · Fitlabreviews"

// ❌ Over 55 chars before template = total > 70
title: "Optimum Nutrition Gold Standard 100% Whey Protein Powder Review 2026"
```

**Targets:**
- `%s` portion: ≤ 55 characters
- Total rendered (with " · Fitlabreviews"): ≤ 66 characters
- Ideal: 45–55 characters in `%s`

---

## 2. SEO — Meta Descriptions

- Length: **140–160 characters**
- Must include: primary keyword, key benefit or differentiator, no filler phrases
- Do NOT start with "This page...", "Welcome to...", "In this article..."
- For reviews: include brand, product name, score, and one unique data point

**Template for review pages:**
```
"[Product] review: [key fact 1], [key fact 2], price, [comparison]. FSP [score]/10."
```

---

## 3. SEO — Canonical Tags

### Critical Rule: NEVER set `alternates.canonical` in the root layout

Setting canonical in `app/layout.tsx` causes it to propagate to ALL child pages.
Every page will report the homepage URL as its canonical — a critical SEO error.

**Root layout (`app/layout.tsx`)**: NO `alternates` key. Leave it out entirely.

**Every page that exports `metadata` MUST include its own canonical:**
```typescript
// Static page
export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: { canonical: "/its-own-path" },  // ← relative path, metadataBase prepends domain
};

// Dynamic route — use generateMetadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${name} Review (2026)`,
    description: "...",
    alternates: { canonical: `/reviews/${slug}` },  // ← dynamic canonical
  };
}
```

**metadataBase is already set in layout.tsx to `https://fitlabreviews.com`.**
Relative paths like `/reviews/my-slug` will resolve to `https://fitlabreviews.com/reviews/my-slug`.

### Pages that require canonical tags
Every page with a `metadata` export, including:
- All hub pages: `/category`, `/brands`, `/ingredients`, `/best`, `/methodology`, `/authors`, `/editorial-policy`
- All review pages (static and `[slug]` dynamic route)
- All ingredient pages (static and `[slug]` dynamic route)
- All goal, brand, and best-of `[slug]` pages
- Homepage (`app/page.tsx`) — use `alternates: { canonical: "/" }`

---

## 4. Dates & Content Freshness

- Always use the **current year** in review titles and meta descriptions.
- Current year: **2026**
- `dateModified` in JSON-LD schemas: use today's date in `YYYY-MM-DD` format
- `datePublished` in JSON-LD: use the original publish date — never update it
- Do NOT hardcode years like "2025" in page titles — they become stale

**JSON-LD date format:**
```typescript
datePublished: "2025-04-10",   // original — never change
dateModified: "2026-05-26",    // update whenever page is revised
```

---

## 5. JSON-LD Structured Data

Every review page must include two schemas:
1. `Review` with `itemReviewed` (Product) and `reviewRating`
2. `FAQPage` if the page has an FAQ section (minimum 4 questions)

Every ingredient page must include:
1. `Article` schema with `articleSection: "Ingredient Research"`

Root layout includes:
1. `Organization` schema
2. `WebSite` schema with `SearchAction`

**All schemas must be injected via:**
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```
Place them at the top of the return statement, before the main `<div>`.

---

## 6. Page Title Checklist (run before every commit)

Before committing any new page or metadata change, verify:
- [ ] Title does NOT contain "Fitlabreviews" (unless using `{ absolute }`)
- [ ] Title `%s` portion is ≤ 55 characters
- [ ] `alternates.canonical` is set with a relative path
- [ ] Meta description is 140–160 characters
- [ ] Year in title is current (2026)
- [ ] JSON-LD `dateModified` reflects today's date
- [ ] Page has its own canonical, not inherited from layout

---

## 7. Responsive Layout Rules

- **Never put `display` in inline styles** for elements whose visibility is controlled by breakpoints.
  Inline `style={{ display: "flex" }}` overrides Tailwind `hidden` / `block` classes.
- Use CSS utility classes in `globals.css` for all responsive display logic.
- Existing classes: `.header-desktop-nav`, `.header-hamburger`, `.header-cta-btn`, `.header-strip`

---

## 8. Server vs Client Components

- Hub pages (brands, category, ingredients, best) must be **Server Components** — no event handlers inline.
- Use CSS `:hover` via utility classes (`.hub-card`, `.hub-row-link`) instead of `onMouseEnter/Leave`.
- Only add `"use client"` when the component uses: `useState`, `useEffect`, browser APIs, or event handlers.
- Client components that need to be in Server Component pages: extract into a separate file.

---

## 9. Content Standards

- **No AI fluff**: No phrases like "game-changer", "unlock your potential", "science-backed" (overused), "revolutionary"
- **Prices — primary currency is USD.** Always show USD first. INR is optional and only included when the section explicitly covers USA availability (e.g. a "Buying in USA" sub-section). Never require both currencies everywhere. State the price date and use a range, not a single figure.
- **Evidence claims**: Reference the specific study (author, year, journal) — not "studies show"
- **Dosage**: Always state the dose used in the clinical evidence, not just the supplement's dose
- **Counterfeit warnings**: Mention verification methods (QR code, official store) only in sections that explicitly cover a specific regional market — not on every page.

---

## 10. File Structure for Reviews

Reviews can be published two ways:

**Option A: Sanity CMS (preferred for new content)**
Publish via Sanity Studio (`/studio`). The `[slug]` template renders Sanity content
with the full Healthline/Forbes-style design — right sticky sidebar, Quick Look card,
comparison cards, accordion FAQs, "How we reviewed" section, and mobile sticky CTA.

**Option B: Static `.tsx` files (for custom layouts)**
```
app/reviews/[product-slug]/page.tsx   ← static, takes priority over [slug]
app/reviews/[slug]/page.tsx           ← Sanity-powered template (Healthline layout)
```

Static pages take Next.js routing priority over dynamic routes.
Use static pages only when the review needs a custom layout beyond what Sanity provides.

---

## 11. Ingredient Article Skill

Use the `/ingredient-article <slug>` slash command to build a new ingredient research article.

**What it does:**
- Creates `app/ingredients/<slug>/page.tsx` (static route — takes priority over the `[slug]` fallback)
- Enforces all 10+ required sections (stats panel, mechanism, benefits, dosage, forms, safety, who-for, pricing, references, FAQ)
- Applies correct JSON-LD (Article + FAQPage), SEO metadata, and CSS class patterns
- Runs the pre-commit checklist automatically

**When to use it:**
```
/ingredient-article beta-alanine
/ingredient-article caffeine
/ingredient-article omega-3
```

**Skill file location:** `.claude/commands/ingredient-article.md` (local only — not committed; canonical reference copy is `docs/ingredient-article-skill.md`)

The skill uses the creatine article (`app/ingredients/creatine/page.tsx`) as the structural gold standard. Read it before writing any new ingredient page.

---

## 12. Blog Article Skill

Use the `/blog-fit <slug> "<title>"` slash command to build a new blog article.

**What it does:**
- Creates `app/blog/<slug>/page.tsx` (static route — takes priority over any `[slug]` fallback)
- Enforces all required sections: hero with stat callouts, sidebar TOC, 6–9 body sections, numbered mechanism panels, bottom line dark panel, references block
- Applies correct SEO metadata, canonical tags, and design system tokens
- Enforces editorial voice: every factual claim gets a named citation, no AI fluff phrases
- Runs the pre-commit checklist automatically

**When to use it:**
```
/blog-fit sleep-window-anti-aging "The Perfect Sleep Window: Why 6.4–7.8 Hours Is the Sweet Spot for Anti-Aging"
/blog-fit glp1-benefits-beyond-weight-loss "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss"
/blog-fit plant-foods-menopause "Plant-Forward Eating for Menopause: 7 Foods That Combat Weight Gain Naturally"
```

**Skill file location:** `.claude/commands/blog-fit.md` (local only — not committed; canonical reference copy is `docs/blog-fit-skill.md`)

The skill uses `app/blog/sleep-window-anti-aging/page.tsx` as the structural gold standard. Read it before writing any new blog article.

**Blog article figure codes:** Increment from `BLG-001`. Check existing articles in `app/blog/` for the next available number.

---

## 13. Research Article Skill

Use the `/research-article <slug>` slash command to build a new deep-dive research article.

**What it does:**
- Creates `app/research/<slug>/page.tsx` (static route — takes priority over the `[slug]` fallback)
- Enforces: breadcrumb, optional medical disclaimer, hero with evidence badge + author bar, dark stats panel, Quick Answer box, 6–10 body sections with trial cards / mechanism panels, Bottom Line dark panel, FAQ accordion, clickable PubMed reference list, related content block
- Applies correct JSON-LD (Article + FAQPage), SEO metadata, and ART figure code
- Syncs the article to `app/research/page.tsx` hub array
- Runs the pre-commit checklist automatically

**When to use it:**
```
/research-article sleep-duration-biological-aging
/research-article glp1-beyond-weight-loss
/research-article creatine-phosphocreatine-mechanism
/research-article omega3-cardiovascular-evidence
```

**Skill file location:** `.claude/commands/research-article.md` (local only — not committed; canonical reference copy is `docs/research-article-skill.md`)

**Gold standard templates:**
- Longevity/biology topics → `app/research/sleep-duration-biological-aging/page.tsx` (ART-007)
- Pharmacology/trials topics → `app/research/glp1-beyond-weight-loss/page.tsx` (ART-008)

Read the matching template before writing any new research article.

**Research article figure codes:** `ART-XXX`. Current highest: ART-009. Check `app/research/page.tsx` `articles` array for the next available number.

**Key differences from blog articles:**
- Research articles are longer (12–20 min read), trial-card-heavy, and use numbered `§ 01` section headings via `SectionHeading`
- No sidebar TOC — content lives in a single `maxWidth: 780` column
- References are clickable numbered divs with real PubMed/DOI URLs, not an `<ol>` list
- Author bar is mandatory in the hero
- Medical disclaimer banner required for any prescription drug content
- ART figure code used (not BLG-)

---

## 14. Review Article Skill

> **⚠ NEW REVIEWS GO THROUGH SANITY (June 2026).** The redesigned review template
> at `app/reviews/[slug]/page.tsx` (Single Review design) is the path for **all new
> reviews** — author them as Sanity `review` documents, not static `.tsx` files.
> See **`docs/review-template-requirements.md`** (field reference + workflow) and
> **`docs/review-template-example.json`** (ready-to-fill skeleton). The ~30 existing
> static review pages are **retained as-is**; do not migrate them. The static
> `/review-article` skill below is kept only for the rare custom-layout review.

Use the `/review-article <slug>` slash command to build a new product review article.

**What it does:**
- Creates `app/reviews/<slug>/page.tsx` (static route — takes priority over the `[slug]` fallback)
- Encodes the full `ScoringRubric` type with all 7 required fields and exact prop signatures for every review component (`ReviewScoreBadge`, `FlagSystem`, `ClaimAudit`, `ValueMetricPanel`, `PillarBreakdown`, `ProductCard`, `ReviewHeader`)
- Enforces FSP v2.1 scoring weights (Formula 35%, Transparency 25%, Verification 20%, Value 12%, Practical 8%)
- Applies correct JSON-LD (Review + FAQPage), SEO metadata, canonical tags, and design tokens
- Runs the pre-commit checklist automatically

**When to use it:**
```
/review-article optimum-nutrition-gold-standard-whey
/review-article myprotein-impact-whey-isolate
/review-article legion-pulse-pre-workout
```

**Critical component prop patterns (TypeScript enforced — wrong props = build failure):**
```tsx
// ✅ CORRECT
<ReviewScoreBadge rating={editorialScore} size="lg" />
<FlagSystem flags={rubric.flags} />
<ClaimAudit items={rubric.claimAudit} />
<ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="creatine monohydrate" />

// ❌ WRONG (cause build errors)
<ReviewScoreBadge score={} maxScore={} accent={} />
<FlagSystem green={[]} red={[]} />
<ClaimAudit claims={[]} />
<ValueMetricPanel priceUSD={} servings={} />
```

**Critical layout patterns (verified from live pages — structural errors cause broken mobile/responsive):**
```tsx
// ✅ CORRECT sidebar
<aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
  <TableOfContents items={tocItems} />
</aside>

// ❌ WRONG sidebar (header-desktop-nav is for the top nav, not TOC; display:block overrides CSS)
<aside className="header-desktop-nav" style={{ display: "block" }}>

// ✅ CORRECT article wrapper
<article style={{ minWidth: 0 }}>

// ❌ WRONG (main doesn't get the correct CSS grid behavior)
<main>

// ✅ CORRECT breadcrumb — breadcrumb-pad on OUTER div
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
  <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>

// ❌ WRONG — breadcrumb-pad on INNER div means the border-bottom gets no padding
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
  <div style={{ maxWidth: 1280, margin: "0 auto" }} className="breadcrumb-pad">
```

**Mobile-responsive patterns (verified against live pages — always use these):**

1. **Hero pill row** — hide the decorative REV code / sub-label row on mobile:
   ```tsx
   // ✅ CORRECT — hidden on mobile, flex on sm+
   <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
     <span style={{ ..., whiteSpace: "nowrap" }}>REV-2026-045</span>
     <span style={{ ..., flexShrink: 0 }} />
     <span style={{ ..., whiteSpace: "nowrap" }}>Full Review · FSP Scored</span>
   </div>

   // ❌ WRONG — inline display:flex overrides Tailwind hidden class
   <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
   ```

2. **Comparison tables** — never use `width: "100%"` inside an overflow wrapper:
   ```tsx
   // ✅ CORRECT — use .review-table-wrap CSS class + minWidth on <table>
   <div className="review-table-wrap">
     <table style={{ borderCollapse: "collapse", minWidth: 580 }}>

   // ❌ WRONG — width:100% constrains table to container, overflow-x never activates
   <div style={{ overflowX: "auto" }}>
     <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580 }}>
   ```
   The `.review-table-wrap` class (in `globals.css`) also adds a "swipe to see more →" hint on mobile via `::after`.

3. **5-pillar verdict grid** — use the `.review-pillar-grid` CSS class so 3 pillars fit per row on mobile:
   ```tsx
   // ✅ CORRECT — repeat(auto-fit, minmax(100px, 1fr)) gives 2–3 cols at mobile
   <div className="review-pillar-grid">
     {rubric.pillars.map(...)}
   </div>

   // ❌ WRONG — minmax(130px) forces only 1–2 cols, orphaning the 5th pillar
   <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12 }}>
   ```

4. **Feature banner image** — hide product image on mobile to prevent overflow:
   ```tsx
   // ✅ CORRECT
   <div className="hidden sm:flex" style={{ position: "absolute", right: "8%", bottom: 0, ... }}>

   // ❌ WRONG — display:flex overrides hidden
   <div style={{ display: "flex", position: "absolute", ... }}>
   ```

**Review template layout (Healthline/Forbes style — `app/reviews/[slug]/page.tsx`):**
- Two-column layout: article left (70%) + right sticky sidebar (30%)
- CSS class: `.review-layout` (grid) + `.review-sidebar` (sticky top:80px)
- Sidebar contains: product mini-card, TableOfContents, category links, ArticleFeedback
- Mobile: single column + sticky bottom CTA bar (`StickyBuyBar` component)

**Required sections (top to bottom):**
- Affiliate disclosure bar (top of page)
- Breadcrumb (Home > Category > Product)
- h1 title with "Evidence Based" badge + review code
- Author row — always shows (fallback: "Fitlab Research Team" + "Pankaj Singh, B. Pharm")
- Hero image (only when Sanity heroImage is uploaded)
- Quick Look product card (image/placeholder + stars + verdict + specs + CTA)
- Key Takeaways (amber left-border callout)
- Pros & Cons
- Our Experience (tester section — when available)
- Ingredients breakdown (flowing text with EvidenceBadge)
- FSP Score Breakdown (teal gradient header)
- Red & Green Flags
- Claim Audit (teal gradient header)
- Price & Value (USD — $ not ₹)
- Full Review (Portable Text body)
- Compare with alternatives (product cards with image/placeholder + CTA buttons)
- FAQ (accordion `<details>/<summary>`)
- Takeaway (who should / shouldn't buy)
- "Get started with [product]" CTA card
- "How we reviewed this article" (Sources tab + editorial policy)
- "Read next" related articles grid (full-width)

**ScoringRubric pattern — compositeScore must be assigned AFTER const:**
```typescript
const rubric: ScoringRubric = {
  pillars: [...],           // 5 required
  flags: [...],             // green/red with type, label, detail, deduction?
  claimAudit: [...],        // 4–6 claims
  valueMetric: { pricePerServing, primaryActiveGrams, pricePerGramActive, categoryAvgPricePerGram, efficiency },
  compositeScore: 0,        // ← always 0 here
  editorialScore: 8 as ReviewRating,
};
rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);  // ← assigned after
```

**Review figure codes:** `REV-2026-NNN`. Check existing review pages for the next available number (current highest in use: REV-2026-045).

**Skill file location:** `.claude/commands/review-article.md` (local only — not committed; canonical reference copy is `docs/review-article-skill.md`)

**Product image filenames** available in `/public/products/` — pass the filename as the `image` prop on `ProductCard`. If no matching image exists, omit the prop and the card renders a gradient with a centered score ring.

---

## 15. Brand Page Rules

Brand pages live at `app/brands/[brand-name]/page.tsx` — one file per brand, no companion component files.

**Hero banner — no floating product images:**
- Do NOT add an absolutely-positioned product image inside the hero banner div.
- The hero contains only: grid texture overlay, ghost letter, and the text/badge block.
- Product images belong in the § 01 Brand Overview section (inside the overview grid) and in the § 04 Product Lineup cards — not in the hero.

```tsx
// ❌ WRONG — never add a floating product image to the brand hero
<div className="hidden sm:block" style={{ position: "absolute", top: 0, right: "5%", bottom: 0, zIndex: 2, display: "flex", alignItems: "flex-end" }}>
  <Image src="/products/product.webp" ... />
</div>

// ✅ CORRECT — hero contains only texture, ghost letter, and text block
<div style={{ width: "100%", minHeight: 260, background: "...", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
  <div style={{ position: "absolute", inset: 0, /* grid texture */ }} />
  <span style={{ position: "absolute", /* ghost letter */ }}>AB</span>
  <div style={{ position: "relative", /* text content */ }}>
    {/* badges, h1, tagline, category pills */}
  </div>
</div>
```

**Content quality — non-negotiable on every brand page:**
- Every sentence must be something a knowledgeable human editor would write, not something a language model defaults to.
- No AI fluff phrases: "game-changer", "unlock your potential", "revolutionary", "science-backed" (overused), "at the end of the day", "it's worth noting", "in conclusion", "the brand takes pride in", "their commitment to quality", "whether you're a beginner or a pro".
- No filler openers: never start a paragraph with "When it comes to…", "In today's competitive market…", "As one of the leading…"
- Every factual claim needs a specific source, number, or verifiable detail — not vague attribution ("studies show", "experts agree").
- Prices must include a date anchor or "as of [month year]" — never just a bare dollar/rupee figure.
- Certification claims must name the certifying body, what it covers, and what it does NOT cover.
- Red flags must be direct and specific — not hedged into meaninglessness. If a brand has a real problem, say what it is.
- The editorial stance must be a genuine take — a reader should finish it knowing exactly where we stand and why, not feeling like they read marketing copy for or against the brand.

**Mobile TOC — inline `<details>/<summary>` only:**
- Never create a separate `*MobileTOC.tsx` component file.
- Use a native `<details>/<summary>` element directly in `page.tsx`.

**Single file rule:**
- Each brand page = exactly one `page.tsx`.
- No `*MobileTOC.tsx`, no `*FAQ.tsx`, no client component extractions.
- The FAQ section uses `<details>/<summary>` (no `useState` needed).

**Gold standard template:** `app/brands/arrae/page.tsx`

---

## 16. Article Registry — Auto-Feed System

### Rule: Every new article MUST be registered in `lib/articles.ts`
The homepage "Recommended Reads" section, "Trending now" sidebar, and filter tabs all pull from a central registry at `lib/articles.ts`. If an article is not in this file, it will NOT appear on the homepage.

**After creating any new page** (blog, research, ingredient, or review), add an entry:
```typescript
// In lib/articles.ts → allArticles array
{
  slug: "your-article-slug", type: "blog",        // "blog" | "research" | "ingredient" | "review"
  href: "/blog/your-article-slug",
  title: "Your Full Article Title",
  category: "CATEGORY NAME",                       // e.g. "PHARMACOLOGY", "NUTRITION", "FITNESS"
  tags: ["Nutrition", "Reviews"],                   // determines which filter tabs show it
  mins: 12, evidence: "Strong evidence",            // or "Moderate evidence" / "Limited evidence"
  image: "/illustrations/your-image.png",           // unique illustration or photo
  date: "2026-06-19",                               // publish date YYYY-MM-DD
  featured: true,                                   // set true for hero/priority placement
},
```

**Available filter tags:** `"Fitness"`, `"Nutrition"`, `"Reviews"`, `"Sleep & Recovery"` — articles can have multiple tags.

**Image fallback system:** If an article has no `image` field, `getArticleImage()` auto-assigns a category-based illustration from `/public/illustrations/fallback-*.png`. But every article should have its own unique illustration.

**How the homepage uses the registry:**
- **Hero "Trending now" sidebar** — 4 most recent articles (excluding the featured hero article)
- **"Worth your time" section** — up to 8 articles, featured first then by date, filterable by tag
- **Filter tab counts** — auto-calculated from tags

### Skill integration
The `/blog-fit`, `/research-article`, `/ingredient-article`, and `/review-article` skills should all add an entry to `lib/articles.ts` as their final step. This is non-negotiable — an article without a registry entry is invisible on the homepage.

---

## 17. Reusable UI Components for Articles

New articles should use these shared components:

| Component | Import | Purpose |
|---|---|---|
| `ReadingProgress` | `@/components/ui/ReadingProgress` | Green progress bar fixed at top of page |
| `ShareButtons` | `@/components/ui/ShareButtons` | X, LinkedIn, copy-link buttons (sidebar + mobile) |
| `NewsletterForm` | `@/components/ui/NewsletterForm` | Working newsletter form with Resend + Supabase |
| `TableOfContents` | `@/components/ui/TableOfContents` | Desktop sidebar TOC |
| `MobileTOC` | `@/components/ui/MobileTOC` | Collapsible mobile TOC |
| `AuthorPopup` | `@/components/ui/AuthorPopup` | Clickable author with modal popup (bio, credentials, links) |
| `StickyBuyBar` | `@/components/ui/StickyBuyBar` | Mobile-only fixed bottom CTA bar |
| `ArticleFeedback` | `@/components/ui/ArticleFeedback` | "Was this article helpful?" Yes/No feedback |
| `UserMenu` | `@/components/auth/UserMenu` | Header user dropdown (login/profile/logout) |

### Blog article required imports:
```tsx
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
```

Add `<ReadingProgress />` after JSON-LD scripts. Add `<ShareButtons title="..." slug="..." />` in the sidebar below TOC.

---

## 18. Design Tokens — Card & Section Colors

Blog articles use a warm editorial palette for cards and callouts:

| Element | Background | Border | Text |
|---|---|---|---|
| Study reference cards | `#FFF5EB` | `#EBD8C3` (left: `#C98A1E`) | `#3D2E22` |
| Key Takeaways box | `#FFF5EB` | `#EBD8C3` (left: `#C98A1E`) | `#2D2926` |
| "What this means" callout | `#FFF5EB` | `#EBD8C3` (left: `#0F7A5A`) | `#17211C` |
| Mechanism panels (01, 02...) | `#FFF5EB` | `#EBD8C3` | Numbers: `#C98A1E` |
| Bottom Line header | `#FFF5EB` | `#EBD8C3` | `#1A1714` |
| Bottom Line body | `#FAECD8` | — | `#3D2E22` |
| FAQ toggle circles | `#FFF5EB` | `#EBD8C3` | `#0F7A5A` |
| Newsletter CTA | gradient `#17211C → #0F7A5A` | — | `#F5F0E8` |

The site's standard green palette (`#0F7A5A`, `#17211C`, `#E4E8E5`, `#F6F8F6`) is used for everything outside of cards — headers, nav, footer, dividers.

---

## 19. Supabase Integration

Supabase handles auth + user data + form storage:

**Auth system** (`@supabase/ssr` + cookie-based sessions):
- Login: `/auth/login` — email/password + Google OAuth
- Signup: `/auth/signup` — with email confirmation
- Password reset: `/auth/forgot-password` → `/auth/reset-password`
- User account: `/account` — profile editing, saved reviews, notification prefs, delete account
- Session refresh: `proxy.ts` (Next.js 16 uses proxy, not middleware)
- Admin panel: `/admin` — ISR revalidation (restricted to `ADMIN_EMAILS` in `lib/admin.ts`)

**Supabase clients:**
- `lib/supabase.ts` — service role key (server-side admin operations)
- `lib/supabase-browser.ts` — anon key (client-side auth via `createBrowserClient`)
- `lib/supabase-server.ts` — anon key + cookies (server components via `createServerClient`)

**Database tables:**
- `auth.users` — managed by Supabase Auth
- `profiles` — auto-created on signup via trigger (full_name, avatar_url, email_notifications)
- `saved_reviews` — user bookmarks (user_id, slug, title, rating, category)
- `subscribers` — newsletter signups
- `contact_submissions` — contact form entries

**RLS policies:** All user tables have Row Level Security. Users can only read/write their own data.

**Required env vars:**
- `NEXT_PUBLIC_SUPABASE_URL` — public (required for browser auth)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public (designed to be exposed, RLS protects data)
- `SUPABASE_SERVICE_ROLE_KEY` — server-only (admin operations, account deletion)

**Security rule:** NEVER expose secrets via `NEXT_PUBLIC_*`. The admin panel uses Server Actions (`app/admin/actions.ts`), not client-side API calls with secret tokens.

---

## 20. Build Verification

Before every `git push`, run:
```bash
npm run build
```
Fix all TypeScript errors and warnings before pushing.
The postbuild runs `next-sitemap` and `pagefind` automatically.

### Pre-push checklist for new articles:
- [ ] Article page created at correct static route (or published via Sanity)
- [ ] Entry added to `lib/articles.ts` with all fields (for static pages)
- [ ] JSON-LD schemas included (Article/Review + FAQPage)
- [ ] `npm run build` passes clean

---

## 21. Sanity CMS Integration

**Project ID:** `381hs563` · **Dataset:** `production` · **Studio:** `/studio`

**8 content types** (schemas in `sanity/schemas/`):
| Type | Schema File | GROQ in `lib/sanity.ts` |
|------|------------|------------------------|
| `review` | `review.ts` | `getReviewBySlug()`, `getAllReviewSlugs()`, `getAllReviews()` |
| `blog` | `blog.ts` | `getBlogBySlug()`, `getAllBlogSlugs()` |
| `ingredient` | `ingredient.ts` | `getIngredientBySlug()`, `getAllIngredientSlugs()` |
| `research` | `others.ts` | `getResearchBySlug()`, `getAllResearchSlugs()` |
| `brand` | `others.ts` | `getBrandBySlug()`, `getAllBrandSlugs()` |
| `bestList` | `others.ts` | `getBestBySlug()`, `getAllBestSlugs()` |
| `comparison` | `others.ts` | `getComparisonBySlug()` |
| `author` | `others.ts` | `getAuthorBySlug()` |

**Rich templates:** Every `[slug]` dynamic route renders Sanity content with the same design as static pages. Missing fields gracefully hide their sections.

**Image handling:** Use `urlFor(image).width(w).height(h).url()` from `lib/sanity.ts`. The `cdn.sanity.io` domain is whitelisted in `next.config.ts` (remotePatterns + CSP).

**Webhook for auto-revalidation:** `/api/revalidate/sanity` — receives Sanity publish events and calls `revalidatePath()` on the relevant hub + specific page. Set up in Sanity Dashboard → API → Webhooks.

---

## 22. Incremental Static Regeneration (ISR)

**Every content page has ISR** — `export const revalidate` at the module level:
- Hub pages (/, /reviews, /blog, etc.): `revalidate = 3600` (1 hour)
- Review/research/best/category `[slug]`: `revalidate = 3600` (1 hour)
- Ingredient/brand/author `[slug]`: `revalidate = 86400` (24 hours)
- Auth/account pages: dynamic (no ISR — user-specific)

**Admin revalidation panel** (`/admin`):
- Protected — requires login + admin email check (`lib/admin.ts`)
- One-click buttons to revalidate any hub section or custom path
- Uses Server Actions (`app/admin/actions.ts`) — no secrets on client

**Revalidation API endpoints:**
- `/api/revalidate` — manual revalidation with `REVALIDATE_SECRET` header
- `/api/revalidate/sanity` — Sanity webhook endpoint (auto-revalidates on publish)

**IndexNow:** `scripts/indexnow.mjs` runs in postbuild, pings Bing/Google with all site URLs.

---

## 23. Review UI Components

All review components use consistent design tokens (teal gradient headers, 16px border-radius, USD currency):

| Component | File | Props |
|-----------|------|-------|
| `ScoreBreakdown` | `components/ui/ScoreBreakdown.tsx` | `rubric: ScoringRubric`, `reviewCode?: string` |
| `FlagSystem` | `components/ui/FlagSystem.tsx` | `flags: ReviewFlag[]` |
| `ClaimAudit` | `components/ui/ClaimAudit.tsx` | `items: ClaimAuditItem[]` |
| `ValueMetricPanel` | `components/ui/ValueMetricPanel.tsx` | `metric: ValueMetric`, `activeIngredientLabel?: string` |
| `ProsCons` | `components/ui/ProsCons.tsx` | `pros: string[]`, `cons: string[]` |
| `AuthorPopup` | `components/ui/AuthorPopup.tsx` | `author: Author`, `label: string` — clickable, opens modal |
| `StickyBuyBar` | `components/ui/StickyBuyBar.tsx` | `productName`, `price?`, `url` — mobile only, fixed bottom |
| `ArticleFeedback` | `components/ui/ArticleFeedback.tsx` | `slug` — "Was this helpful?" Yes/No |

**Currency rule:** ValueMetricPanel uses **USD ($)** — never ₹ (rupees).
