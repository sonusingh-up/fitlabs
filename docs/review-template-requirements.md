# Review Template Requirements — `/reviews/[slug]`

The requirement spec for authoring a **new product review** in the redesigned,
Sanity‑driven review template. This is the **source of truth for all future reviews**.

> **Scope note.** This template powers **future reviews only**. The ~30 existing
> static review pages under `app/reviews/<slug>/page.tsx` are intentionally
> **retained as‑is** and are not migrated. New reviews are authored as **Sanity
> documents** and render automatically through `app/reviews/[slug]/page.tsx`.

---

## 1. How a new review gets published

1. Create a `review` document in **Sanity** (via Sanity Studio at `/studio`, or
   programmatically via the Sanity MCP / import API).
2. Give it a unique `slug` (e.g. `citrus-burn`). The slug **must not** collide
   with an existing static page directory under `app/reviews/` — static routes
   win over the dynamic `[slug]` route.
3. Publish the document. The page is live at `https://fitlabreviews.com/reviews/<slug>`.
4. Add an entry to `lib/articles.ts` so it appears in the homepage feed (see §6).

There is **no `.tsx` file to write** for a new review. The presentation is fixed
by `app/reviews/[slug]/page.tsx`; you only supply the content fields below.

**Reference implementation:** the live `citrus-burn` review document is a complete,
correct example of every field. Query it for a template:
`*[_type=="review" && slug.current=="citrus-burn"][0]`.

---

## 2. Field reference

Source of truth: `sanity/schemas/review.ts` (schema) + `lib/sanity.ts`
(`getReviewBySlug` GROQ) + `app/reviews/[slug]/page.tsx` (rendering).

### Core / SEO

| Field | Type | Required | Drives | Notes |
|---|---|---|---|---|
| `title` | string | ✅ | Hero h1, `<title>`, schema | Product name only — no "Review", no brand suffix. The template appends " Review". |
| `slug.current` | slug | ✅ | URL `/reviews/<slug>` | Must be unique vs static pages. |
| `brand` | string | ✅ | Hero eyebrow, monogram, sidebar, sticky bar | First 2 letters become the monogram. |
| `category` | string | ✅ | Eyebrow, breadcrumb | e.g. "Fat Burner", "Protein Powder". |
| `editorialScore` | number 1–10 | ✅ | FSP score box, verdict word, evidence badge, colour | **Single source of the headline score.** See §3. |
| `metaDescription` | text (≤155) | ✅ (SEO) | `<meta description>` | Brand + product + score + one data point. |
| `verdict` | text | ✅ | Hero "Our verdict" box, **Bottom line** section | 2–4 sentence honest summary. |
| `affiliateUrl` | url | ⬜ | Sidebar buy box + sticky buy bar | If absent, buy box/sticky bar are hidden. |
| `reviewCode` | string | ⬜ | Hero product panel label | e.g. `REV-2026-061`. Falls back to `FIG. 01`. |
| `publishedAt` / `updatedAt` | date | ✅ / ⬜ | Byline date, JSON‑LD, history fallback | `updatedAt` defaults to `publishedAt`. |
| `heroImage` | image | ⬜ | Hero product panel | If set, replaces the monogram placeholder. |
| `author` / `reviewer` | reference → author | ⬜ | Byline | Falls back to **Fitlab Research Team** (writer) and **Pankaj Singh** (reviewer) — the site's two authors. |

### FSP scoring — `pillars[]` (drives the **Scorecard** section)

Exactly **5** items, one per pillar. Weights are fixed in `lib/scoring.ts`
(Formula 35 · Transparency 25 · Verification 20 · Value 12 · Practical 8).

| Subfield | Type | Notes |
|---|---|---|
| `pillar` | enum | `formula` \| `transparency` \| `verification` \| `value` \| `practical` |
| `score` | number 1–10 | One decimal allowed. Bar width + colour derive from this. |
| `notes` | text | One‑paragraph justification shown under the bar. |

### `flags[]` (red/green) and `claimAudit[]`

Carried in the document and used for the FSP composite + JSON‑LD. (The current
template renders the scorecard, not a separate flag grid — keep them populated
for the composite score and future use.)

- `flags[]`: `{ type: "red"|"green", label, detail, deduction? }` — red‑flag
  `deduction` values subtract from the composite (`computeComposite`).
- `claimAudit[]`: `{ claim, verdict: supported|overstated|context-dependent|unsupported, evidence: strong|moderate|limited|emerging|insufficient, notes }`.

### `quickStats[]` (drives **At‑a‑glance** 4‑stat grid)

3–4 items. If omitted, the template derives stats from `productSpecs`.

| Subfield | Type | Example |
|---|---|---|
| `label` | string | "Protein", "Cost", "Form" |
| `value` | string | "25g", "$$", "Capsule" |
| `note` | string | "per serving", "$1.63–$2.63/serving" |

### `ingredients[]` (drives **Ingredient & dosage analysis** table)

| Subfield | Type | Notes |
|---|---|---|
| `name` | string | Ingredient name. |
| `dosage` | string | Per‑serving dose, or `"Undisclosed"`. Shown in the "Per serving" column. |
| `take` | string | One‑line verdict in the "Our take" column. Falls back to `notes`/`purpose`. |
| `flag` | enum | `good` (green) \| `warn` (amber) \| `bad` (red) dot. If omitted, derived from `evidenceLevel`. |
| `evidenceLevel` | enum | strong/moderate/limited/emerging/insufficient (used for flag fallback). |

### `pros[]` / `cons[]` (drives **Pros & cons**)

Two string arrays. Pros → green box ("What we liked"); cons → amber box ("Worth noting").

### `specs[]` (drives **Specs & nutrition** table)

Array of `{ label, value }`. If omitted, derived from `productSpecs`
(`servingSize`, `protein`, `calories`, `servings`).

### `alternatives[]` (drives **Best alternatives** cards)

| Subfield | Type | Notes |
|---|---|---|
| `brand` | string | First 2 letters → card monogram. |
| `name` | string | Product name. |
| `rating` | number 1–10 | Score shown top‑right, colour‑coded. |
| `price` | enum | `$` \| `$$` \| `$$$`. |
| `priceNote` | string | e.g. "~$1.67/serving". |
| `angle` | string | "Choose this for full transparency." (green line). |
| `why` | text | One‑sentence rationale. |
| `slug` | string | Optional. If set → "Read review" link to `/reviews/<slug>`. |
| `affiliateUrl` | url | Optional. If set → "Check price" link. |

### `faqItems[]` (drives **FAQ** accordion + FAQPage JSON‑LD)

Array of `{ question, answer }`. **≥ 4 items** required to emit FAQPage schema.

### `references[]` (drives **Sources** panel)

Array of `{ text, url? }`. Named study (author, year, journal) + DOI/PubMed URL.

### `reviewHistory[]` (drives **History** panel)

Array of `{ date, note }` (e.g. `{ "Jun 21, 2026", "Original review published." }`).
If omitted, derived from `publishedAt`/`updatedAt`.

### `buyBox` (drives the **sidebar buy box**)

`{ priceDisplay, priceUnit, perServingNote, retailerName, secondaryUrl }` —
e.g. `priceDisplay: "$49–$79"`, `priceUnit: "/ bottle (30-day)"`,
`retailerName: "CitrusBurn.com"`, `secondaryUrl` (Amazon, optional).

### `body` (drives **What we found** deep‑dive)

Portable Text. Renders paragraphs, `h3`, bullet lists, and **blockquotes**
(blockquotes get the green left‑border pull‑quote style). 3–6 paragraphs.

### `relatedReviews[]` (drives **Read next**)

Array of references → other `review` docs. Up to 4 shown.

---

## 3. Auto‑derived values — do **not** set these manually

Computed in `app/reviews/[slug]/page.tsx` from `editorialScore`:

| Output | Rule |
|---|---|
| Score colour | ≥8 `#059669` · ≥6 `#0E8784` · ≥5 `#D97706` · <5 `#EF4444` |
| Verdict word | ≥9 Outstanding · ≥8 Excellent · ≥6 Solid · ≥5 Mixed · <5 Skip |
| Evidence badge | ≥8 strong · ≥6 moderate · ≥5 limited · <5 emerging |
| Stars | `round(editorialScore / 2)` filled (gold) |
| Composite (FSP) | `computeComposite(pillars, flags)` — weighted pillars − red‑flag deductions |

---

## 4. Section → field map (what fills each visual block)

| # | Template section | Fields |
|---|---|---|
| Hero | score box, verdict box, product panel | `editorialScore`, `verdict`/`keyTakeaways[0]`, `brand`, `heroImage`/monogram, `reviewCode` |
| Byline | reviewer · writer · updated | `reviewer`/`author` (fallbacks), `updatedAt` |
| At a glance | 4‑stat grid | `quickStats[]` |
| On this page | accordion | auto from present sections |
| Scorecard | 5 pillar bars | `pillars[]` |
| What we found | prose + blockquote | `body` |
| Ingredient analysis | 3‑col table | `ingredients[]` |
| Pros & cons | two tinted boxes | `pros[]`, `cons[]` |
| Specs & nutrition | key/value table | `specs[]` |
| Best alternatives | cards | `alternatives[]` |
| FAQ | accordion | `faqItems[]` |
| Bottom line | score card + prose | `editorialScore`, `verdict` |
| How we reviewed | Sources/History | `references[]`, `reviewHistory[]` |
| Sidebar | buy box + newsletter | `affiliateUrl`, `buyBox` |
| Read next | cards | `relatedReviews[]` |
| Sticky buy bar | mobile fixed CTA | `affiliateUrl`, `brand`, `editorialScore`, `buyBox.priceDisplay` |

---

## 5. Pre‑publish checklist

- [ ] `slug` is unique (no matching `app/reviews/<slug>/` static dir)
- [ ] `title` is product name only (no "Review"/brand suffix)
- [ ] `editorialScore` set (drives score box, colour, verdict word, badge)
- [ ] 5 `pillars` present
- [ ] `verdict` written (hero + bottom line)
- [ ] `metaDescription` 140–160 chars, includes brand + score
- [ ] `quickStats` (3–4) or `productSpecs` present
- [ ] `ingredients[]` have `take` + `flag`
- [ ] `pros`/`cons` populated
- [ ] `alternatives[]` (2–5) with `angle`, `price`, `priceNote`
- [ ] `faqItems` ≥ 4 (for FAQPage schema)
- [ ] `references[]` use named studies + DOI/PubMed URLs
- [ ] `affiliateUrl` + `buyBox` set (or intentionally omitted)
- [ ] Entry added to `lib/articles.ts` (homepage feed)
- [ ] Published, and `/reviews/<slug>` returns 200 in the new design

---

## 6. Homepage feed entry (`lib/articles.ts`)

Add to `allArticles`:

```ts
{
  slug: "<slug>", type: "review" as ArticleType,
  href: "/reviews/<slug>",
  title: "<Full headline>",
  category: "REVIEWS", tags: ["Reviews", "Nutrition"],
  mins: 12, evidence: "Moderate evidence",
  image: "/illustrations/fallback-reviews.png",
  date: "YYYY-MM-DD",
},
```

---

## 7. Environment

The dynamic route requires these env vars (public):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=381hs563
NEXT_PUBLIC_SANITY_DATASET=production
```

If `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset, `getReviewBySlug` returns `null`
and every `/reviews/<slug>` 404s. (Schema additions like `quickStats`,
`alternatives`, `specs`, `buyBox` render from the document JSON via GROQ even
before the Studio schema is redeployed; redeploy the Studio only when you need
to **edit** those fields in the Studio UI.)
