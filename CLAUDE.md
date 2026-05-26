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
- **Prices — primary currency is USD.** Always show USD first. INR is optional and only included when the section explicitly covers India availability (e.g. a "Buying in India" sub-section). Never require both currencies everywhere. State the price date and use a range, not a single figure.
- **Evidence claims**: Reference the specific study (author, year, journal) — not "studies show"
- **Dosage**: Always state the dose used in the clinical evidence, not just the supplement's dose
- **Counterfeit warnings**: Mention verification methods (QR code, official store) only in sections that explicitly cover a specific regional market — not on every page.

---

## 10. File Structure for Reviews

New dedicated reviews go in static routes — NOT the dynamic `[slug]` template:
```
app/reviews/[product-slug]/page.tsx   ← static, takes priority over [slug]
app/reviews/[slug]/page.tsx           ← fallback template for unreviewed products
```

Static pages take Next.js routing priority over dynamic routes.
Use static pages for all fully-written reviews.

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

## 13. Build Verification

Before every `git push`, run:
```bash
npm run build
```
Fix all TypeScript errors and warnings before pushing.
The postbuild runs `next-sitemap` and `pagefind` automatically.
