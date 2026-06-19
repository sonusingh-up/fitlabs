# /blog-fit — Fitlab Blog Article Builder

Build a complete, editorial-quality blog article for `/blog/<slug>/page.tsx`.

## Usage

```
/blog-fit <slug> "<Full Article Title>"
```

**Example:**
```
/blog-fit glp1-benefits-beyond-weight-loss "GLP-1 Drugs Like Ozempic & Wegovy: 5 Surprising Benefits Beyond Weight Loss"
```

---

## What This Skill Does

1. Creates `app/blog/<slug>/page.tsx` as a **static route** (takes priority over any `[slug]` fallback)
2. Follows the gold standard template: `app/blog/sleep-window-anti-aging/page.tsx`
3. Enforces editorial voice, evidence standards, and SEO requirements
4. Runs the pre-commit checklist automatically before reporting done

---

## File Location

```
app/blog/<slug>/page.tsx   ← static route, always use this
```

Never create a dynamic `[slug]` route for blog articles. Static pages take Next.js routing priority.

---

## Required Article Structure

Every article must include **all** of the following, in this order:

### 1. Metadata export
```tsx
export const metadata: Metadata = {
  title: "...",          // ≤55 chars, NO "Fitlabreviews" in string
  description: "...",   // 140–160 chars, includes primary keyword + key differentiator
  alternates: { canonical: "/blog/<slug>" },
};
```

### 1b. JSON-LD Schemas (Article + FAQPage)
Both schemas are required. Placed as `const` declarations after metadata.

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "...",
  description: "...",
  image: "https://fitlabreviews.com/lifestyle/...",
  datePublished: "YYYY-MM-DD",   // original — never change
  dateModified: "2026-06-19",    // today's date
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/<slug>" },
  articleSection: "...",
  wordCount: ...,
};

const faqList = [
  { q: "...", a: "..." },  // minimum 6 Q&A pairs
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
```

Inject both at the top of the return statement:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
```

### 2. TOC items array
- Must include `{ id: "key-takeaways", label: "Key Takeaways" }` as the first item
- Must include `{ id: "faq", label: "FAQ" }` as the last item
- 6–9 body sections between those two
- IDs must match `id` attributes on `<section>` elements exactly

### 3. Hero block
- Breadcrumb: Home / Blog / Article Title
- Figure code: `BLG-XXX` (check existing articles for the next number)
- Category tag in rust: e.g. `LONGEVITY · SLEEP SCIENCE`
- H1 with Playfair serif + italic subtitle pattern
- Date, read time, evidence badge
- 2–3 stat callout boxes with key data points from the article

### 4. Layout: sidebar TOC + article body
```tsx
<div className="layout-sidebar">
  <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
    <TableOfContents items={tocItems} />
  </aside>
  <article style={{ maxWidth: 680, minWidth: 0 }}>
    {/* Mobile TOC — shown below 1024px where sidebar is hidden */}
    <div className="block lg:hidden" style={{ marginBottom: 32 }}>
      <MobileTOC items={tocItems} />
    </div>
    ...
  </article>
</div>
```

**Required imports:**
```tsx
import Image from "next/image";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
```

`MobileTOC`, `ReadingProgress`, and `ShareButtons` are `"use client"` components — importing them into a Server Component page is fine. Next.js handles the RSC boundary automatically.

```tsx
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
```

Add `<ReadingProgress />` after JSON-LD scripts, before breadcrumb.
Add `<ShareButtons title="..." slug="..." />` in the sidebar `<aside>` below `<TableOfContents>`.
Add a mobile share row (`className="block lg:hidden"`) before the FAQ section.

### 4b. Credibility row (between hero and content grid)
Full-width bar showing author, fact-check date, and source count. Placed between the hero div and the content grid div.

```tsx
<div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, fontWeight: 700, color: "#FFFFFF" }}>FE</span>
      </div>
      <span style={{ fontSize: 12, color: "#17211C", fontWeight: 600 }}>Fitlabreviews Editorial</span>
    </div>
    <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
    <span style={{ fontSize: 11, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>Fact-checked [Month] 2026</span>
    <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
    <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>N Peer-reviewed sources</span>
  </div>
</div>
```

### 4c. Key Takeaways box (first item inside article body)
Gold-bordered summary box on warm cream, targeting featured snippets. Placed before the opening paragraph, after MobileTOC.

```tsx
<div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
  <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
    <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>4–5 bullet points with <strong>bolded key facts</strong></li>
  </ul>
</div>
```

### 5. Opening paragraph (no H2)
- 3–4 sentences that frame the specific insight the article delivers
- No "In this article we will..." openers
- Must name the specific finding, claim, or tension the article resolves

### 6. Body sections (one per TOC item)
Each section:
```tsx
<section id="section-id" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
  <h2 style={{ fontFamily: "var(--font-playfair)...", ... }}>Section Title</h2>
  ...
</section>
```

### 6b. "What this means for you" callout boxes
Add 2–3 of these throughout the article, after the most evidence-dense sections. Warm cream bg with green left border.

```tsx
<div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
  <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Practical, direct takeaway sentence.</p>
</div>
```

### 6d. Inline Newsletter CTA (between section 5 and 6)
Dark gradient card with social proof. Place between the 5th and 6th body sections.

```tsx
<div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden" }}>
  <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
    {/* Decorative elements (circles + dot grid) — see gold standard for details */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 13 }}>✉</span>
        </div>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
      </div>
      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
        Get insights like this — <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>straight to your inbox.</em>
      </p>
      <p style={{ fontSize: 13, color: "#8B9B90", marginBottom: 20, lineHeight: 1.5 }}>Evidence-based. No sponsors. Free every Thursday.</p>
      <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Subscribe Free →</Link>
    </div>
  </div>
</div>
```

### 6e. FAQ accordion section (after Bottom Line, before References)
Minimum 6 Q&A pairs. Numbered card-based accordion with circular toggle buttons.

```tsx
<section id="faq" style={{ marginBottom: 48 }}>
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
    <span style={{ ... }}>FAQ</span>
    <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
    <span style={{ ... }}>{faqList.length} Questions</span>
  </div>
  <h2>Frequently Asked <em style={{ color: "#0F7A5A" }}>Questions</em></h2>
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    {faqList.map((faq, i) => (
      <details key={i} className="faq-item" style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
        <summary style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, listStyle: "none", cursor: "pointer" }}>
          <span style={{ fontFamily: "var(--font-newsreader)", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", width: 28 }}>{String(i+1).padStart(2,"0")}</span>
          <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#17211C" }}>{faq.q}</span>
          <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="faq-toggle" style={{ color: "#0F7A5A" }}>+</span>
          </span>
        </summary>
        <div style={{ padding: "0 20px 18px 62px", borderTop: "1px solid #F2F8F4" }}>
          <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.8, paddingTop: 14 }}>{faq.a}</p>
        </div>
      </details>
    ))}
  </div>
</section>
```

### 7. Bottom Line section
Warm Healthline-inspired card with green accent bar. **Not dark** — uses cream/peach backgrounds.

```tsx
<div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
  <div style={{ height: 4, background: "linear-gradient(90deg, #0F7A5A 0%, #C98A1E 100%)" }} />
  {/* Header — warm cream #FFF5EB */}
  {/* Body — deeper peach #FAECD8 with dark brown text #3D2E22 */}
  {/* Action pills — white bg with warm border */}
</div>
```
Use Grade A (Strong), Grade B (Moderate), or Grade C (Limited). See gold standard for exact pattern.

### 7b. References — expandable with clickable PubMed links
Collapsible `<details>` with numbered references and "PubMed →" links.

```tsx
<details style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
  <summary style={{ backgroundColor: "#FFF9F3", padding: "16px 20px", cursor: "pointer", listStyle: "none" }}>
    Key References · N sources · Show ↓
  </summary>
  {refs.map(ref => (
    <div style={{ display: "flex", gap: 12, padding: "10px 0" }}>
      <span style={{ fontWeight: 800, color: "#E4E8E5" }}>{ref.num}</span>
      <div><p>{ref.text} <span>{ref.journal}</span></p>
        <a href={ref.url} target="_blank">PubMed →</a>
      </div>
    </div>
  ))}
</details>
```

### 8. Similar Articles section (horizontal carousel)
Place **outside and after** `layout-sidebar`. Uses `<Image>` with custom illustrations from `/public/illustrations/`.

```tsx
<section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5" }}>
  <h2>Similar <em style={{ color: "#0F7A5A" }}>articles</em></h2>
  <div style={{ display: "flex", gap: 16, overflowX: "auto", scrollSnapType: "x mandatory" }} className="review-table-wrap">
    {cards.map(card => (
      <Link href={card.href} className="hub-card" style={{ flex: "0 0 210px", scrollSnapAlign: "start", borderRadius: 14, border: "1px solid #EBD8C3" }}>
        <div style={{ height: 150, overflow: "hidden" }}>
          <Image src={card.img} alt={card.title} width={400} height={280} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <span style={{ position: "absolute", bottom: 8, left: 12, ... }}>{card.type}</span>
        </div>
        <div style={{ padding: "14px" }}>
          <p style={{ fontFamily: "var(--font-newsreader)", fontSize: "0.9rem", fontWeight: 700 }}>{card.title}</p>
          <p style={{ fontSize: 11, color: "#586259", WebkitLineClamp: 2 }}>{card.desc}</p>
        </div>
      </Link>
    ))}
  </div>
</section>
```

Choose 6 related items: mix of research articles, ingredient profiles, and reviews relevant to the topic. Each needs a custom illustration in `/public/illustrations/`.

### 8b. Back to Blog nav
```tsx
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
  <Link href="/blog">← Back to Blog</Link>
  <div style={{ display: "flex", gap: 6 }}>
    {tags.map(tag => <span style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10 }}>{tag}</span>)}
  </div>
</div>
```
  <span style={{ fontFamily: "var(--font-dm-mono)...", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>Related Content</span>
  <span style={{ flex: 1, height: 1, backgroundColor: "#D4C9B8" }} />
  <span style={{ fontFamily: "var(--font-dm-mono)...", fontSize: 9, color: "#C4622D", textTransform: "uppercase" }}>Topic Tags</span>
</div>
```

Choose related items that genuinely connect to the article's subject matter — don't use generic fallbacks.

### 9. Back to Blog nav footer
```tsx
<Link href="/blog">← Back to Blog</Link>
```
with topic tag chips on the right. Place inside the Related Content section, after the More from Blog CTA.

---

## Content Standards (NON-NEGOTIABLE)

### Evidence requirements
- Every factual claim must cite a specific study: `(Author et al., Year, Journal)`
- Never write "studies show" or "research suggests" without naming the study
- Where multiple studies exist, cite the strongest (largest N, most recent, peer-reviewed)
- Distinguish mechanistic evidence from clinical outcomes — don't conflate them
- If a claim has only mechanistic/animal data, say so explicitly

### Voice rules
- **No AI fluff phrases:** "game-changer", "revolutionary", "unlock your potential", "science-backed" (overused), "holistic", "synergistic", "transformative"
- **No hedging chains:** "may potentially help to possibly support" → pick one qualifier or drop it
- **No listicle padding:** Each numbered point must carry a specific, non-obvious fact. If you can't find one, cut the point.
- **Honest about limits:** If evidence is animal/mechanistic only, say so. If a study had a small N, note it.
- Write like a knowledgeable colleague who respects the reader's time

### Numbers and specifics
- Always use the specific figure from the study, not a rounded approximation
- Doses: state the dose used in the trial, not a generic recommendation
- Prices: USD primary, only include INR if the section is specifically about USA
- Sample sizes: mention N when it matters for credibility (large cohort = credibility signal)

### What makes a strong blog section
- Opens with the specific tension or question it resolves
- Uses evidence callout boxes for key stats (parchment `#EDE8DF` background)
- Uses numbered mechanism panels (`01`, `02`...) when covering multiple parallel mechanisms
- Uses two-column grids for comparisons or pro/con breakdowns
- Ends each section with a synthesis sentence that draws the implication — not a summary restatement

---

## Design System

All inline styles must use these exact values:

| Variable | Value |
|---|---|
| Background | `#FFFFFF` |
| Ink (body text) | `#2D2926` |
| Heading ink | `#1A1714` |
| Primary accent | `#0F7A5A` (evidence green) |
| Gold accent | `#C98A1E` (numbers, callout labels) |
| Muted text | `#586259` |
| Light muted | `#6B7770` |
| Border | `#E4E8E5` |
| Warm card bg | `#FFF5EB` (study cards, callouts, FAQ toggle) |
| Warm card border | `#EBD8C3` |
| Warm deep bg | `#FAECD8` (Bottom Line body) |
| Alt bg | `#F6F8F6` / `#FFF9F3` |
| Dark panel | `#17211C` |
| Green (strong evidence) | `#1A6B3A` |
| Amber (moderate) | `#92620A` |

**Fonts:**
- Headlines: `var(--font-newsreader), Georgia, serif`
- Body: `var(--font-hanken), sans-serif`
- Labels/mono: `var(--font-jetbrains), monospace`

**Typography scale:**
- H1: `clamp(1.9rem, 5vw, 3.2rem)`, weight 800, tracking `-0.025em`
- H2: `1.5rem`, weight 700, tracking `-0.02em`
- H3: `0.95rem`, weight 700
- Body: `15px`, line-height `1.8`
- Small/meta: `13px`, line-height `1.65`
- Labels: `9–10px`, `letterSpacing: "0.15–0.2em"`, `textTransform: "uppercase"`

**Evidence badge colors:**
```
strong:   color #1A6B3A, bg rgba(26,107,58,0.08),  border rgba(26,107,58,0.2)
moderate: color #92620A, bg rgba(146,98,10,0.08),  border rgba(146,98,10,0.2)
limited:  color #8A4020, bg rgba(138,64,32,0.08),  border rgba(138,64,32,0.2)
```

---

## Reusable UI Patterns

### Study reference card (warm cream with gold left border)
```tsx
<div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E" }}>
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Author et al. (Year)</span>
    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— Journal Name</span>
  </div>
  <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7 }}>Finding description.</p>
</div>
```

### Callout / insight box (warm cream with gold label)
```tsx
<div style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0" }}>
  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6 }}>Label</p>
  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7 }}>Content.</p>
</div>
```

### Numbered mechanism panel (warm cream with gold number)
```tsx
<div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
    <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714" }}>Mechanism Name</h3>
  </div>
  <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>Explanation with citation.</p>
</div>
```

---

## SEO Pre-Commit Checklist

Before marking the task done, verify every item:

- [ ] Title does NOT contain "Fitlabreviews"
- [ ] Title `%s` portion is ≤55 characters
- [ ] `alternates.canonical` set with relative path `/blog/<slug>`
- [ ] Meta description is 140–160 characters
- [ ] Year references use 2026
- [ ] Every factual claim has an inline citation
- [ ] No AI fluff phrases present
- [ ] JSON-LD: Article schema with correct datePublished/dateModified
- [ ] JSON-LD: FAQPage schema with ≥6 Q&A pairs
- [ ] Credibility row present between hero and content grid
- [ ] Key Takeaways box present at top of article body (4–5 bullets)
- [ ] ≥2 "What this means for you" callout boxes after evidence-heavy sections
- [ ] FAQ accordion section with ≥6 questions rendered from faqList
- [ ] Evidence grade badge in Bottom Line panel
- [ ] Gold standard article structure followed (breadcrumb → hero → credibility row → sidebar TOC → key takeaways → article → bottom line → FAQ → references → related content)
- [ ] `hub-row-link` or `hub-card` class NOT used on article content (those are for hub pages only)
- [ ] Back to Blog link present at bottom

---

## Gold Standard Reference

Read `app/blog/sleep-window-anti-aging/page.tsx` before writing any blog article. That file is the structural template. Match its section depth, citation density, and panel usage — not its topic.

The three things that distinguish a good Fitlab blog article from a generic one:
1. **Specific numbers from named studies** — not "research shows improvements"
2. **Honest limitations** — every strong claim is accompanied by what it doesn't prove
3. **Synthesis, not summary** — each section ends by drawing an implication, not restating what was just said
