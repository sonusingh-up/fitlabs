# CLAUDE.md — FitLabReviews.com Tool Development Guide

> This file governs how Claude Code builds every tool for fitlabreviews.com.
> Read this fully before writing a single line of code.

---

## 🧭 Project Identity

**Site:** fitlabreviews.com  
**Mission:** Help general health-conscious people make smarter fitness decisions — gear, supplements, workouts, and nutrition.  
**Voice:** Knowledgeable but approachable. Science-backed but never intimidating. Like advice from a trusted fit friend who actually did the research.  
**Audience:** Adults 25–50, health-curious, not necessarily hardcore athletes. They want clarity, not jargon.

---

## 🏗️ Tool Philosophy — The Golden Rules

Every tool built for this site must follow these non-negotiables:

### 1. Solve a Real Problem First
Before writing code, ask: *What decision does this help the user make?* If the answer is vague, the tool is not ready to be built. Every tool must have a clear "so what" — a concrete output the user can act on.

### 2. Results Must Feel Personal
Generic outputs are unacceptable. If a user enters their data, the result must feel tailored to *them* — their goal, their body, their constraints. Use their name if collected. Reference their inputs in the output. Never show a result that could have been copy-pasted from a generic article.

### 3. Free Tools: Hook. Paid Tools: Transform.
- **Free tools** solve one well-defined problem clearly and fast. They build trust and drive email signups.
- **Paid tools** go deeper — multi-step, personalized, AI-powered, exportable. They justify a subscription.
- Never build a free tool that accidentally does what a paid tool should. Scope carefully.

### 4. No Dead Ends
Every tool must end with a next step: a related article, a product recommendation, a CTA to upgrade, or a share prompt. Tools are funnels, not islands.

### 5. Mobile First, Always
Most users will be on their phone. Build for 375px width as the baseline. Desktop enhancements are additions, not the default.

---

## 🎨 Design Standards

### Visual Identity
```
Primary:    #1A1A2E   (deep navy — authority, trust)
Accent:     #E94560   (energetic red — action, urgency)
Surface:    #F8F9FA   (near-white — clean, clinical precision)
Muted:      #6B7280   (slate gray — supporting text)
Success:    #10B981   (emerald — positive results, health)
Warning:    #F59E0B   (amber — caution flags)
```

### Typography Rules
- **Headlines:** Use a strong, slightly condensed sans-serif (e.g., `Barlow Condensed`, `DM Sans Bold`, `Syne`). Never Inter, Roboto, or Arial.
- **Body/Labels:** Clean, readable. `DM Sans`, `Plus Jakarta Sans`, or `Outfit`.
- **Numbers/Data Output:** Monospaced or tabular numerals. Results must look precise — use `font-variant-numeric: tabular-nums`.
- **Import via Google Fonts** — always include the `<link>` in the HTML head.

### Layout Principles
- Use a **card-based layout** with subtle shadows (`box-shadow: 0 4px 24px rgba(0,0,0,0.08)`)
- Input sections and result sections must be **visually distinct** — don't mix them
- Results panels: use a slightly different background (`#EEF2FF` or navy-tinted) to make them feel like a "reveal"
- **Progress indicators** on multi-step tools — users must always know where they are
- Generous padding: minimum `24px` on cards, `16px` between input fields
- Border radius: `12px` on cards, `8px` on inputs and buttons

### Micro-interactions (Required)
- Input focus: subtle border glow in accent color
- Calculate/Submit button: loading state with spinner (never let it look frozen)
- Results: fade-in or slide-up animation (150–250ms, `ease-out`)
- Sliders: live value display that updates as user drags
- Error states: inline, red, specific — never a generic "invalid input"

### Do NOT Use
- Purple gradients on white (overused AI aesthetic)
- Generic stock icon sets (use Lucide or Phosphor consistently)
- Full-width inputs on desktop (max `480px` for single fields)
- Cookie-cutter Bootstrap/Tailwind defaults without customization

---

## ⚙️ Technical Standards

### Stack
- **React** preferred for tools with state (calculators, multi-step forms, AI tools)
- **Vanilla HTML/CSS/JS** acceptable for simple single-output calculators
- **No build tools assumed** — write self-contained files unless told otherwise
- **Tailwind**: Use only pre-defined utility classes, no custom config. Supplement with inline CSS variables for brand tokens.

### Claude API Integration (AI-Powered Tools)
```javascript
// Standard API call pattern — always use this structure
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-20250514",  // Always Sonnet 4 — never change this
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }]
  })
});

const data = await response.json();
const text = data.content.map(b => b.text || "").join("\n");
```

**AI Prompt Engineering Rules:**
- Always inject the user's actual inputs into the prompt — never ask Claude to guess
- Instruct Claude to respond in a specific format (JSON or structured sections)
- For JSON responses: include `"Return ONLY valid JSON, no markdown, no preamble"` in the system prompt
- Always wrap API calls in try/catch with a graceful fallback UI
- Show a skeleton loader or spinner during API calls — never a blank screen

### State Management
- Use `useState` and `useReducer` for all in-component state
- **Never use localStorage, sessionStorage, or any browser storage** — Claude artifacts don't support it
- For multi-step tools: store all step data in a single top-level state object
- Reset state clearly — always provide a "Start Over" button

### Validation Rules
- Validate inputs **before** calling any API or running calculations
- Provide specific, friendly error messages: *"Please enter a weight between 50–500 lbs"* not *"Invalid input"*
- Use controlled inputs — never uncontrolled
- For number inputs: set `min`, `max`, and `step` attributes always

---

## 🛠️ Tool Architecture Patterns

### Pattern A: Calculator Tool (Free)
```
[Header: Tool name + 1-line value prop]
[Input Card: All fields grouped logically]
[Calculate Button: Full-width, accent color, bold label]
[Results Card: Revealed after calculation, visually distinct]
[Next Step CTA: Related article or upgrade prompt]
```
- All math must happen client-side — no API needed
- Show formulas or methodology in a collapsed "How we calculated this" section (builds trust)
- Always allow unit switching (lbs ↔ kg, imperial ↔ metric)

### Pattern B: Quiz / Recommendation Tool (Free → Paid Upsell)
```
[Step 1–N: One question per screen, progress bar visible]
[Loading Screen: "Analyzing your profile..." with spinner]
[Results Screen: Personalized recommendation + explanation]
[CTA: "Get your full plan" → email gate or paid upgrade]
```
- Maximum 6 questions for free quiz, 10–12 for paid
- Each question must feel purposeful — explain why it matters (tooltip or sub-label)
- Results must reference specific answers from the quiz

### Pattern C: AI-Powered Deep Tool (Paid)
```
[Onboarding: Context-setting, 1–2 sentences on what the tool does]
[Input Form: Structured fields — NOT a chat box]
[Generate Button: With estimated wait time: "Takes ~10 seconds"]
[AI Output Section: Formatted, sectioned, scannable]
[Export/Save CTA: Download as PDF or email to yourself]
[Refine Option: "Adjust your inputs" without losing results]
```
- AI output must be **formatted and scannable** — use headers, bullets, tables in the response
- Instruct the AI to write in second person ("You should…", "Your goal…")
- Never show raw API output — always parse and render it with proper HTML structure
- Include a disclaimer: *"This tool provides general wellness guidance, not medical advice."*

### Pattern D: Comparison Tool (Free or Paid)
```
[Select Items: Search + select UI, max 3 items]
[Compare Button]
[Side-by-side Table: Key attributes, color-coded winners]
[Verdict Section: AI-generated "Best for…" summaries]
[Buy Links: Affiliate CTAs below each item]
```

---

## 📋 Every Tool Must Include

### Header Section
```html
<!-- Required in every tool -->
<div class="tool-header">
  <span class="tool-badge">FREE TOOL</span>  <!-- or "PRO TOOL" -->
  <h1>[Tool Name]</h1>
  <p class="tool-description">[One sentence: what problem this solves]</p>
</div>
```

### Disclaimer (Health Tools)
```html
<!-- Required at bottom of every health/supplement/nutrition tool -->
<p class="disclaimer">
  ⚕️ This tool provides general wellness information only and is not a substitute 
  for medical advice. Consult a healthcare professional before making changes 
  to your diet, exercise, or supplement routine.
</p>
```

### Share / Next Step Block (End of Every Tool)
```html
<!-- Required at bottom of every tool result -->
<div class="next-steps">
  <p>Found this helpful?</p>
  <button onclick="shareResult()">📤 Share Your Result</button>
  <a href="/[related-article]">Read our guide on [related topic] →</a>
</div>
```

---

## 🔒 Free vs. Paid Differentiation

| Feature | Free Tool | Paid Tool |
|---|---|---|
| Output depth | Single metric or summary | Full breakdown, multi-metric |
| Personalization | Based on inputs only | AI-powered, remembers preferences |
| Export | None | PDF download or email |
| History | None | Save and track over time |
| Steps | Single screen | Multi-step flow |
| Recommendations | Generic guidance | Specific products from review database |
| Support | None | In-tool help tooltips |

**Upsell Trigger Pattern (in free tools):**
```jsx
{showUpgrade && (
  <div className="upgrade-banner">
    <p>🔓 Want a full 7-day meal plan built around these macros?</p>
    <button className="btn-upgrade">Get Pro Access — $9/month</button>
  </div>
)}
```

---

## 🧪 Quality Checklist Before Shipping Any Tool

Run through this before considering a tool complete:

- [ ] Works on 375px mobile width without horizontal scroll
- [ ] All inputs validated with specific error messages
- [ ] Loading/calculating state visible during any async operation
- [ ] Results feel personalized — user's inputs are referenced in output
- [ ] Disclaimer present (health tools)
- [ ] Next step / CTA present after results
- [ ] No console errors or warnings
- [ ] Units (metric/imperial) handled or clearly specified
- [ ] Reset / Start Over button present
- [ ] Typography uses a non-generic font (loaded via Google Fonts)
- [ ] Brand colors used consistently (`#1A1A2E`, `#E94560`)
- [ ] Animation on result reveal (fade or slide)
- [ ] Tool tested with edge case inputs (0, negative, very high values)
- [ ] API tools: graceful error message if API fails

---

## 📁 File Naming Conventions

```
/tools/
  free/
    bmr-calculator.html
    macros-calculator.html
    bmi-calculator.html
    supplement-quiz.html
  paid/
    meal-plan-generator.jsx
    supplement-stack-builder.jsx
    workout-program-builder.jsx
    gear-comparison-tool.jsx
```

---

## 🚫 Hard Rules — Never Do These

1. **Never use Lorem Ipsum** — use realistic fitness data in placeholders (e.g., "e.g. 175 lbs", "e.g. I want to lose 10 lbs in 3 months")
2. **Never ship a tool that outputs the same result regardless of inputs** — test with multiple input combinations
3. **Never show a wall of text as AI output** — always parse and structure it
4. **Never use purple gradients** — it reads as generic AI. Use the brand palette.
5. **Never leave a dead end** — every result screen has a next action
6. **Never use `alert()` for errors** — always inline, always styled
7. **Never hardcode copy that should be dynamic** — if a result changes, the surrounding text must change with it
8. **Never build a tool without knowing its success metric** — what does a user do after using it?

---

## 💡 Improvement Opportunities to Note During Development

While building, if you notice any of the following, add a `// TODO:` comment and mention it in your summary:

- A calculation that could be more accurate with an additional input
- A free tool that could naturally upsell to a paid feature
- An AI prompt that could be improved with more structured output
- A UX flow that could be simplified by one fewer step
- A tool that could benefit from a data visualization (chart/graph)

---

*Last updated: May 2026 | fitlabreviews.com*
