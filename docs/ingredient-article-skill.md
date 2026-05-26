---
description: Build a complete, SEO-optimised ingredient research article for /ingredients/[slug]/page.tsx
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Ingredient Article Builder

You are building a detailed ingredient research article for **FitLab Reviews** (`/ingredients/$ARGUMENTS`).

## Step 1 — Gather info before writing

1. Read the existing creatine article for structural reference:
   `app/ingredients/[slug]/page.tsx` (creatine is the gold standard template)
2. Read `app/globals.css` — use existing CSS classes (`ing-stats-grid`, `ingredient-article`, etc.), never duplicate them with inline styles.
3. Read `app/ingredients/page.tsx` — confirm the ingredient's `slug`, `figure`, `category`, `evidence`, `dose`, `mechanism`, `bestFor` fields match the hub array entry.

## Step 2 — File location & naming

- **Path**: `app/ingredients/[slug]/page.tsx` — replace `[slug]` with the actual slug (e.g. `beta-alanine`, `caffeine`, `omega-3`)
- **Never** write to the dynamic catch-all `app/ingredients/[slug]/page.tsx` — each ingredient gets its own static route file that takes routing priority.

Wait — there is no per-ingredient static route directory. The pattern used in this project is:

```
app/ingredients/creatine/page.tsx      ← static, takes priority
app/ingredients/[slug]/page.tsx        ← fallback (do not overwrite)
```

Create a new directory: `app/ingredients/<slug>/page.tsx`

## Step 3 — SEO metadata (mandatory checklist)

```tsx
export const metadata: Metadata = {
  title: "<Primary keyword: benefit & differentiator>",  // ≤55 chars, NO "Fitlabreviews"
  description: "<140–160 chars. Keyword + benefit + differentiator. No filler openers.>",
  alternates: { canonical: "/ingredients/<slug>" },
};
```

**Title formula** (follow Healthline/Health.com style):
- Format: `"<Ingredient>: <Benefit 1>, <Benefit 2> & <Benefit 3>"`
- Or:     `"<Ingredient> — Dosage, Benefits & Side Effects"`
- Always ≤55 characters in the `%s` portion.
- Current year should appear in meta description, not title.

## Step 4 — JSON-LD (mandatory)

Every ingredient page needs **two** schemas at the top of the return statement:

```tsx
{/* Article schema */}
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "<title>",
  description: "<meta description>",
  articleSection: "Ingredient Research",
  author: { "@type": "Organization", name: "Fitlabreviews Research Team", url: "https://fitlabreviews.com/authors/fitlab-research-team" },
  publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
  datePublished: "<YYYY-MM-DD>",
  dateModified: "<today: YYYY-MM-DD>",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/ingredients/<slug>" },
}) }} />

{/* FAQPage schema — minimum 4 questions */}
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "<Q1>", acceptedAnswer: { "@type": "Answer", text: "<A1>" } },
    // ... 5–7 total
  ],
}) }} />
```

## Step 5 — Required sections (in order)

| # | Section | Key content |
|---|---------|-------------|
| 1 | **Hero / Stats panel** | `ing-stats-grid` with 4 cells: Effective Dose, Evidence Level, Primary Use, Form |
| 2 | **What Is `<Ingredient>`** | Definition, natural sources, brief history of use |
| 3 | **How It Works: The Science** | Mechanism of action with step-by-step visual breakdown cards |
| 4 | **Evidence-Based Benefits** | 5–8 benefits, each with citation (Author Year) and dose used in study |
| 5 | **Dosage Guide** | Protocol table (loading vs maintenance if applicable), timing, cycling |
| 6 | **Supplement Forms Compared** | Table or cards: form name, bioavailability, cost, verdict |
| 7 | **Safety Profile & Side Effects** | Myth/Reality card panels with study citations |
| 8 | **Who Should (and Shouldn't) Take It** | Population group cards (green = good fit, amber = caution) |
| 9 | **Pricing & Where to Buy** | USD primary. INR secondary only if relevant. Brand comparison table |
| 10 | **References** | Numbered list: Author (Year). Title. *Journal*. DOI/URL |
| 11 | **FAQ** | 5–7 questions mirroring FAQPage JSON-LD |
| 12 | **Related Reviews** (optional) | Link to review pages that contain this ingredient |

## Step 6 — Visual component patterns

### Stats grid (section 1)
```tsx
<div className="ing-stats-grid" style={{ marginBottom: 32 }}>
  {[
    { label: "Effective Dose", value: "X–Xg / day", sub: "per clinical evidence" },
    { label: "Evidence Level", value: "Strong", sub: "multiple meta-analyses" },
    { label: "Primary Use", value: "...", sub: "..." },
    { label: "Best Form", value: "...", sub: "..." },
  ].map((s) => (
    <div key={s.label} style={{ backgroundColor: "#F8F2E4", padding: "20px 16px" }}>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 6px" }}>{s.label}</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.value}</p>
      <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{s.sub}</p>
    </div>
  ))}
</div>
```

### Mechanism step cards (section 3)
```tsx
{[
  { step: "01", title: "...", desc: "..." },
  { step: "02", title: "...", desc: "..." },
].map((s) => (
  <div key={s.step} style={{ display: "flex", gap: 16, padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 8 }}>
    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{s.step}</div>
    <div>
      <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{s.title}</p>
      <p style={{ fontSize: 13, color: "#5C5650", margin: 0 }}>{s.desc}</p>
    </div>
  </div>
))}
```

### Myth/Reality safety cards (section 7)
```tsx
{[
  { myth: "...", reality: "...", citation: "Author (Year)" },
].map((item, i) => (
  <div key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
    <div style={{ padding: "10px 16px", backgroundColor: "rgba(196,98,45,0.06)", borderBottom: "1px solid #D4C9B8" }}>
      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.12em", textTransform: "uppercase" }}>Myth</span>
      <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", margin: "4px 0 0" }}>{item.myth}</p>
    </div>
    <div style={{ padding: "10px 16px" }}>
      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#4A7C59", letterSpacing: "0.12em", textTransform: "uppercase" }}>Reality</span>
      <p style={{ fontSize: 14, color: "#2D2926", margin: "4px 0 4px" }}>{item.reality}</p>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", margin: 0 }}>{item.citation}</p>
    </div>
  </div>
))}
```

### Population group cards (section 8)
```tsx
{/* Good fit — green accent */}
<div style={{ border: "1px solid #D4C9B8", borderLeft: "3px solid #4A7C59", borderRadius: 8, padding: "14px 18px", marginBottom: 8 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
    <p style={{ fontWeight: 700, color: "#1A1714", margin: 0 }}>{group.name}</p>
    <span style={{ padding: "2px 8px", backgroundColor: "rgba(74,124,89,0.08)", border: "1px solid rgba(74,124,89,0.2)", borderRadius: 4, fontSize: 9, color: "#4A7C59", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Recommended</span>
  </div>
  <p style={{ fontSize: 13, color: "#5C5650", margin: "0 0 6px" }}>{group.desc}</p>
  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", margin: 0 }}>{group.citation}</p>
</div>

{/* Caution — amber accent */}
<div style={{ border: "1px solid #D4C9B8", borderLeft: "3px solid #D4A96A", borderRadius: 8, padding: "14px 18px", marginBottom: 8 }}>
  ...
  <span style={{ ..., backgroundColor: "rgba(212,169,106,0.1)", color: "#A07840" }}>Use Caution</span>
</div>
```

### Price / brand table (section 9)
```tsx
{/* Always USD first. INR in parentheses only when relevant to audience. */}
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
  <thead>
    <tr style={{ backgroundColor: "#1A1714", color: "#F2EBD9" }}>
      <th style={{ padding: "10px 14px", textAlign: "left", ... }}>Brand</th>
      <th>Size</th>
      <th>Price (USD)</th>
      <th>Per Serving</th>
      <th>Verdict</th>
    </tr>
  </thead>
  <tbody>
    {brands.map((b, i) => (
      <tr key={b.name} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
        ...
      </tr>
    ))}
  </tbody>
</table>
```

## Step 7 — Content quality rules

- **Citations**: always `Author (Year)` inline, full reference in the References section
- **Doses**: state the dose used *in the cited study*, not just the supplement label dose
- **No AI fluff**: banned phrases — "game-changer", "unlock your potential", "science-backed" (overused), "revolutionary", "supercharge"
- **Prices**: USD is the primary currency. Show INR in parentheses only when the section is explicitly about India availability. Always state the price date.
- **Evidence claims**: link to specific RCTs or meta-analyses — never "studies show"
- **Safety**: always note if evidence is from healthy adults; flag known contraindications

## Step 8 — Hub page sync

After writing the article, check `app/ingredients/page.tsx`:
- The ingredient must already exist in the `ingredients` array with matching `slug`, `evidence`, `dose`, `mechanism`, `bestFor`
- If it's missing, add it to the array in the correct alphabetical/logical position
- Update the `figure` field to the next sequential number (e.g. `"ING-013"`)

## Step 9 — Pre-commit checklist

- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] Title `%s` portion ≤ 55 characters, no "Fitlabreviews"
- [ ] Meta description 140–160 characters
- [ ] `alternates.canonical` set to `/ingredients/<slug>`
- [ ] Both JSON-LD schemas present (Article + FAQPage)
- [ ] `dateModified` is today's date
- [ ] All 10+ sections present
- [ ] Prices shown in USD (INR only where explicitly relevant)
- [ ] Hub page `ingredients` array updated if needed
- [ ] No inline `display` styles overriding CSS classes

## Output

Create the file at `app/ingredients/<slug>/page.tsx` and report:
1. Word count of the article body
2. Number of citations included
3. TypeScript check result
4. Any hub page changes made
