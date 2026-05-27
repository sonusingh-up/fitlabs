---
name: research-article
description: Build a complete, SEO-optimised research article for /research/[slug]/page.tsx
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Research Article Builder — Fitlabreviews

You are building a deep-dive research article for **Fitlabreviews** at `/research/$ARGUMENTS`.

Research articles are NOT blog posts. They are longer, denser, trial-card-heavy, and require full clinical reference lists with clickable PubMed/DOI links. They live at `/research/<slug>` and use the `ART-XXX` figure code system. The gold standard templates are:

- `app/research/sleep-duration-biological-aging/page.tsx` — ART-007 (longevity/sleep topic)
- `app/research/glp1-beyond-weight-loss/page.tsx` — ART-008 (pharmacology/trials topic)

Read one of those before writing anything.

---

## Step 1 — Gather context before writing

1. Run `ls app/research/` — see existing slugs and avoid duplicates
2. Read the gold standard template that best matches your topic (sleep = longevity; GLP-1 = pharmacology/trials)
3. Read `app/research/page.tsx` — note the `topicGroups` array; you will need to add your article to the right group (or create one)
4. Read `app/globals.css` — use existing classes (`ing-stats-grid`, `hub-card`, `pad-hero`, `px-page`, `pad-section-sm`)
5. Determine the next `ART-XXX` figure number: check existing articles for the highest used number

---

## Step 2 — File location

```
app/research/<slug>/page.tsx   ← static route, always use this
```

Never write to the dynamic fallback `app/research/[slug]/page.tsx`. Static routes take Next.js routing priority automatically.

---

## Step 3 — Assign an ART figure code

Check existing articles:
- ART-001 through ART-006 — older ingredient science articles (hub placeholders)
- ART-007 — sleep-duration-biological-aging
- ART-008 — glp1-beyond-weight-loss
- ART-009 — microdose-glp1

Assign the next available number sequentially. Add it to the hero meta line and hub `articles` array.

---

## Step 4 — Does this article need a medical disclaimer banner?

Add the disclaimer banner **immediately after the breadcrumb** if the article covers:
- Prescription medications (GLP-1, metformin, statins, etc.)
- Controlled substances
- Mental health treatments
- Any content where someone might act on advice that requires a physician

```tsx
{/* Medical disclaimer — only add for prescription/clinical drug content */}
<div style={{ backgroundColor: "rgba(138,64,32,0.06)", borderBottom: "1px solid rgba(138,64,32,0.2)", padding: "10px 24px" }}>
  <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-start" }}>
    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", color: "#8A4020", textTransform: "uppercase", marginTop: 1, flexShrink: 0 }}>Medical Notice</span>
    <p style={{ fontSize: 12, color: "#8A4020", lineHeight: 1.5, margin: 0 }}>
      [Drug name] medications are prescription drugs. This article summarises published clinical trial evidence for educational purposes only. Consult a licensed prescriber before starting, stopping, or changing any medication. See our <Link href="/medical-disclaimer" style={{ color: "#8A4020", fontWeight: 600, textDecoration: "underline" }}>Medical Disclaimer</Link>.
    </p>
  </div>
</div>
```

---

## Step 5 — SEO metadata (mandatory checklist)

```tsx
export const metadata: Metadata = {
  title: "...",        // ≤55 chars in %s portion. NO "Fitlabreviews". Active, specific.
  description: "...", // 140–160 chars. Primary keyword + key trial finding + differentiation.
  alternates: { canonical: "/research/<slug>" },
};
```

**Title formula for research articles:**
- Lead with the topic + the specific finding or tension
- Examples that work: `"Sleep & Aging: The Science Behind the 7-Hour Sweet Spot"`, `"GLP-1 Benefits Beyond Weight Loss: Heart, Brain & Mood"`
- Never start with "The", "A", or the brand name
- Must be ≤55 characters — count carefully

**Description formula:**
- Open with the core result (not "This article covers...")
- Name at least one specific study finding with a number
- 140–160 characters — measure with `description.length`

---

## Step 6 — JSON-LD schemas (mandatory — place at top of return)

Every research article needs **two** schemas:

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "<full article title>",
  description: "<meta description text>",
  articleSection: "Research",
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Research Team",
    url: "https://fitlabreviews.com/authors/fitlab-research-team",
  },
  publisher: {
    "@type": "Organization",
    name: "Fitlabreviews",
    url: "https://fitlabreviews.com",
  },
  datePublished: "YYYY-MM-DD",   // original publish date — never change after first commit
  dateModified: "YYYY-MM-DD",    // today's date
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://fitlabreviews.com/research/<slug>",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    // minimum 5 questions — these must mirror the FAQ section visible on-page
    {
      "@type": "Question",
      name: "<Question text exactly as shown in the UI>",
      acceptedAnswer: { "@type": "Answer", text: "<Full answer, 2–4 sentences>" },
    },
  ],
};
```

Inject at the very top of the return statement, before any visible JSX:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
```

---

## Step 7 — Required page structure (in order)

Every research article must include **all** of the following sections:

| Order | Element | Required? |
|---|---|---|
| 1 | JSON-LD schemas | Always |
| 2 | Breadcrumb strip | Always |
| 3 | Medical disclaimer banner | If prescription drug content |
| 4 | Hero section | Always |
| 5 | Author bar | Always |
| 6 | Key stats dark panel | Always |
| 7 | Quick Answer box | Always |
| 8 | Body sections (§ 01 → §N) | 6–10 sections |
| 9 | Bottom Line dark panel | Always |
| 10 | FAQ accordion | Always — minimum 5 Q&As |
| 11 | Clinical References | Always — clickable PubMed links |
| 12 | Related content block | Always |

---

## Step 8 — Breadcrumb

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
  <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
    <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
    <span style={{ color: "#D4C9B8" }}>/</span>
    <Link href="/research" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Research</Link>
    <span style={{ color: "#D4C9B8" }}>/</span>
    <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Short Page Label</span>
  </div>
</div>
```

---

## Step 9 — Hero section

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", padding: "48px 24px 40px" }}>
  <div style={{ maxWidth: 780, margin: "0 auto" }}>

    {/* Evidence badge + meta line */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
      <span style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em", color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em" }}>ART-00X · Topic Category · XX min read</span>
      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.12em" }}>Month Year</span>
    </div>

    {/* H1 */}
    <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1714", lineHeight: 1.1, marginBottom: 20 }}>
      Main Title:{" "}
      <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Italic subtitle</em>
    </h1>

    {/* Lead paragraph */}
    <p style={{ fontSize: 17, color: "#5C5650", lineHeight: 1.75, marginBottom: 28 }}>
      2–3 sentence framing paragraph. Name the specific insight this article delivers.
      State the tension or question it resolves. No "In this article we will..." openers.
    </p>

    {/* Tags */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
      {["Tag1", "Tag2", "Tag3"].map((tag) => (
        <span key={tag} style={{ padding: "3px 9px", backgroundColor: "rgba(196,98,45,0.06)", border: "1px solid rgba(196,98,45,0.15)", borderRadius: 4, fontSize: 10, color: "#C4622D", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.06em" }}>{tag}</span>
      ))}
    </div>

    {/* Author bar — ALWAYS include this */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", paddingTop: 18, borderTop: "1px solid #D4C9B8" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, fontWeight: 700, color: "#C4622D", letterSpacing: "0.04em" }}>FLR</span>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Written by</p>
          <Link href="/authors/fitlab-research-team" style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Fitlab Research Team
          </Link>
        </div>
      </div>
      <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
      <div>
        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Evidence Standard</p>
        <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>Peer-reviewed citations only</p>
      </div>
      <span style={{ color: "#D4C9B8", fontSize: 16 }}>·</span>
      <div>
        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8480", margin: "0 0 2px" }}>Last Updated</p>
        <p style={{ fontSize: 13, color: "#5C5650", margin: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>Month DD, YYYY</p>
      </div>
    </div>

  </div>
</div>
```

**Evidence badge colours:**
```
Strong Evidence:   color #1A6B3A, bg rgba(26,107,58,0.08),  border rgba(26,107,58,0.2)
Moderate Evidence: color #92620A, bg rgba(146,98,10,0.08),  border rgba(146,98,10,0.2)
Limited Evidence:  color #8A4020, bg rgba(138,64,32,0.08),  border rgba(138,64,32,0.2)
```

---

## Step 10 — Key stats dark panel

Place immediately after the hero. Use 3–5 stats, each drawn from a named trial.

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#1A1714", padding: "32px 24px" }}>
  <div style={{ maxWidth: 780, margin: "0 auto" }}>
    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 20 }}>Key Findings at a Glance</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 20 }}>
      {[
        { value: "XX%", label: "Metric description", sub: "Trial name, drug/dose" },
      ].map((stat) => (
        <div key={stat.value} style={{ borderLeft: "2px solid #C4622D", paddingLeft: 14 }}>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: "#F2EBD9", margin: "0 0 4px" }}>{stat.value}</p>
          <p style={{ fontSize: 12, color: "rgba(242,235,217,0.7)", lineHeight: 1.4, margin: "0 0 4px" }}>{stat.label}</p>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.06em", margin: 0 }}>{stat.sub}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

---

## Step 11 — Quick Answer box

Place after the stats panel. Gives Google a clear featured-snippet candidate.

```tsx
<div style={{ borderBottom: "1px solid #D4C9B8", padding: "28px 24px" }}>
  <div style={{ maxWidth: 780, margin: "0 auto" }}>
    <div style={{ borderLeft: "3px solid #1A6B3A", backgroundColor: "rgba(26,107,58,0.04)", padding: "16px 18px", borderRadius: "0 8px 8px 0" }}>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Quick Answer</p>
      <p style={{ fontSize: 14, color: "#1A1714", lineHeight: 1.7, margin: 0 }}>
        2–4 sentences. Direct answer to the article's central question.
        Include the key number or finding. End with a qualifier about evidence quality.
      </p>
    </div>
  </div>
</div>
```

---

## Step 12 — Body sections

Wrap body content in a single `maxWidth: 780` container. Each section uses `SectionHeading`:

```tsx
import SectionHeading from "@/components/ui/SectionHeading";

<section style={{ marginBottom: 56 }}>
  <SectionHeading label="§ 01" figure="§" title="Main Section Title:" titleItalic="italic subtitle" size="md" />
  <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.8, marginBottom: 20 }}>...</p>
</section>
```

**Required section types by article topic:**

### For pharmacology / clinical trial articles (like GLP-1):
- § 01 — Mechanism overview (how the drug/molecule works + receptor location grid)
- § 02 — Primary RCT (the flagship trial — full trial card)
- § 03 — Secondary benefit 1 with sub-mechanisms
- § 04 — Secondary benefit 2 (moderate evidence — amber callout)
- § 05 — Secondary benefit 3 (mental health / addiction / brain)
- § 06 — Additional benefit (kidney, liver, sleep apnea, etc.)
- § 07 — Additional benefit 2
- § 08 — Bottom Line dark panel
- § 09 — FAQ accordion
- § 10 — Clinical References

### For longevity / biology articles (like sleep aging):
- § 01 — The primary evidence (landmark study card)
- § 02 — Mechanisms (5 numbered panels — one per mechanism)
- § 03 — The U-curve or risk table
- § 04 — Warning signs / symptoms section
- § 05 — Practical protocol (grid of 4–6 tips)
- § 06 — Bottom Line dark panel
- § 07 — FAQ accordion
- § 08 — Clinical References

### For ingredient/supplement science articles:
- § 01 — What it is + mechanism overview
- § 02 — Clinical evidence (loading/timing RCTs)
- § 03 — Benefits (numbered benefit panels)
- § 04 — Dosing table
- § 05 — Safety & side effects (Myth/Reality cards)
- § 06 — Forms comparison
- § 07 — Who it's for (population group cards)
- § 08 — Bottom Line
- § 09 — FAQ
- § 10 — References

---

## Step 13 — UI patterns for body sections

### Trial card (flagship RCT)
```tsx
<div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
  <div style={{ backgroundColor: "#1A1714", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", letterSpacing: "0.12em", fontWeight: 700 }}>TRIAL NAME · YEAR</span>
    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(242,235,217,0.35)", letterSpacing: "0.1em" }}>JOURNAL · Phase 3 RCT</span>
  </div>
  <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
    {[
      { label: "Population", value: "N adults with [condition]" },
      { label: "Drug / Dose", value: "Drug Xmg weekly" },
      { label: "Duration", value: "X months" },
      { label: "Primary Outcome", value: "Composite endpoint" },
      { label: "Result", value: "X% relative risk reduction (HR X.XX)" },
      { label: "Key Note", value: "Stopped early / weight-independent / etc." },
    ].map((d) => (
      <div key={d.label}>
        <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{d.label}</p>
        <p style={{ fontSize: 13, color: "#1A1714", lineHeight: 1.5, margin: 0 }}>{d.value}</p>
      </div>
    ))}
  </div>
</div>
```

### Numbered mechanism panels
```tsx
{[
  { num: "01", title: "Mechanism Name", body: "Explanation with citation (Author et al., Year, Journal)." },
].map((item) => (
  <div key={item.num} style={{ display: "flex", gap: 16, padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, marginBottom: 10 }}>
    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
    <div>
      <p style={{ fontWeight: 700, color: "#1A1714", marginBottom: 6, fontSize: 14 }}>{item.title}</p>
      <p style={{ fontSize: 13, color: "#5C5650", margin: 0, lineHeight: 1.7 }}>{item.body}</p>
    </div>
  </div>
))}
```

### Evidence level callout (use for "Moderate" or "Limited" sections)
```tsx
<div style={{ borderLeft: "3px solid #92620A", backgroundColor: "rgba(146,98,10,0.04)", padding: "14px 18px", borderRadius: "0 8px 8px 0" }}>
  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 6 }}>Evidence Level: Moderate</p>
  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>
    Honest summary of what the evidence does and does not show. Name the specific limitation.
  </p>
</div>
```

### Receptor location / feature grid
```tsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
  {[
    { site: "Location Name", effect: "Effect description" },
  ].map((r) => (
    <div key={r.site} style={{ padding: "10px 12px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 6 }}>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", color: "#C4622D", marginBottom: 4, textTransform: "uppercase" }}>{r.site}</p>
      <p style={{ fontSize: 11, color: "#5C5650", lineHeight: 1.5, margin: 0 }}>{r.effect}</p>
    </div>
  ))}
</div>
```

### Risk / outcome table (for dose-response or U-curve data)
```tsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
  {[
    { range: "< X hrs", risk: "High risk", detail: "Specific consequence with citation" },
    { range: "X–Y hrs", risk: "Optimal", detail: "Lowest mortality / best biomarkers" },
  ].map((s, i) => (
    <div key={s.range} style={{ backgroundColor: s.risk === "Optimal" ? "rgba(26,107,58,0.06)" : "#F8F2E4", border: `1px solid ${s.risk === "Optimal" ? "rgba(26,107,58,0.2)" : "#D4C9B8"}`, borderRadius: 8, padding: "14px" }}>
      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: s.risk === "Optimal" ? "#1A6B3A" : "#A89880", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 4px" }}>{s.range}</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: "0 0 4px" }}>{s.risk}</p>
      <p style={{ fontSize: 11, color: "#5C5650", margin: 0, lineHeight: 1.5 }}>{s.detail}</p>
    </div>
  ))}
</div>
```

---

## Step 14 — Bottom Line dark panel

The final content section (not counting FAQ and References). Serves as the editorial verdict.

```tsx
<section style={{ marginBottom: 56, backgroundColor: "#1A1714", borderRadius: 12, padding: "36px 36px 32px", overflow: "hidden", position: "relative" }}>
  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
  <div style={{ position: "relative" }}>
    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.4)", marginBottom: 16 }}>Bottom Line</p>
    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.2, marginBottom: 20 }}>
      One-sentence verdict that names the key finding
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {[
        "Bullet 1: specific trial result with trial name and year.",
        "Bullet 2: mechanism or secondary finding.",
        "Bullet 3: evidence limitation or what's still unproven.",
      ].map((point, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", flexShrink: 0, marginTop: 3 }}>→</span>
          <p style={{ fontSize: 14, color: "rgba(242,235,217,0.8)", lineHeight: 1.65, margin: 0 }}>{point}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Step 15 — FAQ accordion

Minimum 5 Q&As. These must exactly mirror the `faqSchema.mainEntity` array you defined earlier.

```tsx
<section style={{ marginBottom: 56 }}>
  <SectionHeading label="§ XX" figure="§" title="Frequently" titleItalic="Asked Questions" size="md" />
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    {faqSchema.mainEntity.map((item, i) => (
      <details key={i} style={{ border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", overflow: "hidden" }}>
        <summary style={{ padding: "16px 20px", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1714", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span>{item.name}</span>
          <span style={{ color: "#C4622D", fontSize: 18, flexShrink: 0 }}>+</span>
        </summary>
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid #EDE8DF" }}>
          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: "14px 0 0" }}>{item.acceptedAnswer.text}</p>
        </div>
      </details>
    ))}
  </div>
</section>
```

---

## Step 16 — Clinical References (clickable PubMed links — mandatory)

```tsx
<section style={{ marginBottom: 56 }}>
  <SectionHeading label="§ XX" figure="§" title="Clinical" titleItalic="References" size="md" />
  <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", marginBottom: 14 }}>
    All citations link to the primary source on PubMed or publisher DOI.
  </p>
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {[
      {
        text: "Author A, Author B, Author C, et al. Full Article Title. Journal Abbrev. YYYY;Vol(Issue):pages.",
        url: "https://pubmed.ncbi.nlm.nih.gov/PMID/",
      },
    ].map((ref, i) => (
      <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", flexShrink: 0, marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
        <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
          {ref.text}{" "}
          <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>PubMed ↗</a>
        </p>
      </div>
    ))}
  </div>
</section>
```

**Reference formatting rules:**
- Use PubMed URLs: `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`
- For FDA labels: `https://www.accessdata.fda.gov/drugsatfda_docs/label/...`
- For ADA/society guidelines: use the DOI `https://doi.org/...`
- Label non-PubMed links as `Source ↗` instead of `PubMed ↗`
- List authors in the format the journal uses — don't truncate to "et al." unless there are >6 authors
- Include trial name in parentheses after the citation where applicable: `(SELECT trial)`, `(FLOW trial)`
- **Never fabricate a citation.** If you are not certain a paper exists with those exact authors/year/journal, use a real alternative and note the change.

---

## Step 17 — Related content block

```tsx
<section>
  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Related Reading</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
    {[
      { href: "/research/<related-slug>", label: "Related Research Article", sub: "What it covers" },
      { href: "/blog/<related-slug>", label: "Related Blog Article", sub: "Consumer-friendly version" },
      { href: "/reviews/<related-slug>", label: "Product Review", sub: "FSP X/10 — what we found" },
      { href: "/ingredients/<related-slug>", label: "Ingredient Profile", sub: "Mechanism, trials, dosing" },
    ].map((link) => (
      <Link key={link.href} href={link.href} className="hub-card" style={{ display: "block", padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, textDecoration: "none", backgroundColor: "#F8F2E4" }}>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714", marginBottom: 4 }}>{link.label}</p>
        <p style={{ fontSize: 11, color: "#8A8480", margin: 0 }}>{link.sub}</p>
      </Link>
    ))}
  </div>
</section>
```

---

## Step 18 — Hub page sync

After the article file is written, open `app/research/page.tsx` and add the new article to the `articles` array:

```tsx
{
  slug: "<slug>",
  title: "Main Title:",
  titleItalic: "Italic subtitle",
  figure: "ART-0XX",
  topic: "<Existing topic group or new one>",          // must match a topicGroups entry
  readTime: "X min",
  publishedAt: "Month YYYY",
  summary: "2–3 sentence summary. Include the key study and finding.",
  evidence: "strong" | "moderate" | "limited",
  tags: ["Tag1", "Tag2", "Tag3"],
  accent: "#HEX",   // choose a colour that visually distinguishes this topic group
},
```

If you're creating a new topic group, also add it to `topicGroups`:
```tsx
{ label: "New Topic Group", topics: ["New Topic Group"] },
```

Place new groups at the top of the array if they represent priority editorial areas (longevity, GLP-1/medications). Supplement science groups go below.

---

## Step 19 — Design system reference

| Token | Value |
|---|---|
| Page background | `#F2EBD9` |
| Body text | `#5C5650` |
| Heading text | `#1A1714` |
| Rust accent | `#C4622D` |
| Sepia muted | `#A89880` |
| Border | `#D4C9B8` |
| Card background | `#F8F2E4` |
| Section strip | `#EDE8DF` |
| Dark panel | `#1A1714` |
| Strong evidence green | `#1A6B3A` |
| Moderate evidence amber | `#92620A` |
| Limited evidence brown | `#8A4020` |

**Fonts:**
- Headlines / display: `var(--font-playfair), Georgia, serif`
- Body / UI: `var(--font-dm-sans), sans-serif`
- Labels / mono / code: `var(--font-dm-mono), monospace`

**Typography:**
- H1: `clamp(1.7rem, 4vw, 2.6rem)`, weight 800, tracking `-0.02em`
- H2 (section): `1.5rem`, weight 700
- H3 (card title): `1.1rem`, weight 700
- Body: `fontSize: 16`, `lineHeight: 1.8`
- Small body: `fontSize: 13–14`, `lineHeight: 1.65–1.7`
- Meta labels: `fontSize: 9–10`, `letterSpacing: "0.12–0.2em"`, `textTransform: "uppercase"`

---

## Step 20 — Content quality rules (non-negotiable)

- **Every factual claim needs a named citation**: `(Author et al., Year, Journal)` — never "studies show"
- **Specify the dose used in cited trials** — not generic recommendations
- **Distinguish evidence types**: RCT > observational > mechanistic > animal. Say which one explicitly for each claim
- **Honest about limits**: if evidence is only preclinical, say "preclinical evidence suggests". If one trial, say "one trial found"
- **No AI fluff phrases**: "game-changer", "revolutionary", "science-backed" (overused), "unlock", "supercharge", "holistic", "synergistic"
- **Numbers must come from the cited source**: don't round, don't approximate unless saying "approximately"
- **Dedicated clinical trials beat off-label observations** — always cite the largest/most recent RCT for a given claim
- **For drug articles**: note any FDA approval status, contraindications, and the fact that it requires a prescription

---

## Step 21 — Pre-commit checklist

Before reporting done, verify every item:

- [ ] Title `%s` portion ≤ 55 characters, contains no "Fitlabreviews"
- [ ] `alternates.canonical` set to `/research/<slug>`
- [ ] Meta description 140–160 characters
- [ ] `dateModified` is today's date in `YYYY-MM-DD`
- [ ] `faqSchema.mainEntity` has ≥ 5 questions
- [ ] FAQ on-page matches the FAQ schema text exactly
- [ ] Author bar present in hero with link to `/authors/fitlab-research-team`
- [ ] All references have working PubMed/DOI URLs (no fabricated citations)
- [ ] `npm run build` (or `npx tsc --noEmit`) passes with zero TypeScript errors
- [ ] Article added to `app/research/page.tsx` `articles` array with correct `topic` matching a `topicGroups` entry
- [ ] Medical disclaimer banner present if article covers prescription drugs
- [ ] Related content block links to 3–4 real existing pages (verify slugs exist)
- [ ] No inline `display` styles overriding responsive CSS classes

---

## Output

Report when done:
1. File path created
2. ART figure number assigned
3. Number of body sections written
4. Number of citations with PubMed links
5. TypeScript check result
6. Hub page change made (which `topic` group, article position)
