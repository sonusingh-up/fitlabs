import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, BookOpen, FlaskConical, Target } from "lucide-react";
import {
  getAllSkinGuides,
  getAllSkinConditions,
  getAllSkinRoutines,
  getAllSkinIngredients,
} from "@/lib/sanity-skin";

export const metadata: Metadata = {
  title: { absolute: "Skin Health — Evidence-Led Skincare · Fitlabreviews" },
  description:
    "Research-grade skincare guides, ingredient profiles, condition breakdowns, and daily routines. Evidence-led, editorially independent — no brand marketing.",
  alternates: { canonical: "/" },
};

// ─── Static fallback data (shown until Sanity content is published) ───────────

const staticGuides = [
  { title: "The Retinol Starter Guide: How to Begin Without Irritation", category: "Anti-Aging", difficulty: "beginner", timeEstimate: "8 min read", slug: "retinol-starter-guide" },
  { title: "SPF 101: Why Mineral vs Chemical Sunscreen Matters", category: "Sun Protection", difficulty: "beginner", timeEstimate: "6 min read", slug: "spf-mineral-vs-chemical" },
  { title: "Building a Hyperpigmentation Routine That Works", category: "Hyperpigmentation", difficulty: "intermediate", timeEstimate: "10 min read", slug: "hyperpigmentation-routine" },
  { title: "The Acid Guide: AHAs, BHAs, and PHAs Explained", category: "Exfoliation", difficulty: "intermediate", timeEstimate: "9 min read", slug: "acids-aha-bha-pha-guide" },
  { title: "Niacinamide: The Evidence Behind the Hype", category: "Ingredients", difficulty: "beginner", timeEstimate: "7 min read", slug: "niacinamide-evidence" },
  { title: "Sensitive Skin: Patch Testing and Trigger Identification", category: "Sensitive Skin", difficulty: "beginner", timeEstimate: "5 min read", slug: "sensitive-skin-patch-test" },
];

const staticConditions = [
  { title: "Acne", desc: "The most common skin condition. Pathology, triggers, and evidence-based treatment hierarchy.", symptoms: ["Breakouts", "Blackheads", "Oiliness"], slug: "acne" },
  { title: "Eczema (Atopic Dermatitis)", desc: "Barrier dysfunction and immune dysregulation — emollient strategies and trigger identification.", symptoms: ["Itching", "Dryness", "Redness"], slug: "eczema" },
  { title: "Hyperpigmentation", desc: "PIH, melasma, and solar lentigines — causes differ, treatment protocols differ.", symptoms: ["Dark spots", "Uneven tone", "Melasma"], slug: "hyperpigmentation" },
  { title: "Rosacea", desc: "Chronic inflammatory condition often misidentified. Trigger mapping and barrier-first protocol.", symptoms: ["Flushing", "Redness", "Sensitivity"], slug: "rosacea" },
  { title: "Psoriasis", desc: "Immune-mediated with skin and systemic implications. Topical management strategies.", symptoms: ["Plaques", "Scaling", "Inflammation"], slug: "psoriasis" },
  { title: "Dehydrated Skin", desc: "Distinct from dry skin type. Barrier repair and humectant sequencing for all skin types.", symptoms: ["Tightness", "Dullness", "Fine lines"], slug: "dehydrated-skin" },
];

const staticIngredients = [
  { title: "Retinol", category: "Retinoid", evidenceLevel: "strong", topBenefit: "Fine lines, texture & skin turnover", slug: "retinol" },
  { title: "Niacinamide", category: "Vitamin B3", evidenceLevel: "strong", topBenefit: "Pores, hyperpigmentation & barrier", slug: "niacinamide" },
  { title: "Vitamin C (L-Ascorbic Acid)", category: "Antioxidant", evidenceLevel: "strong", topBenefit: "Brightening & oxidative stress defence", slug: "vitamin-c" },
  { title: "Hyaluronic Acid", category: "Humectant", evidenceLevel: "moderate", topBenefit: "Surface hydration & transepidermal water loss", slug: "hyaluronic-acid" },
  { title: "AHAs (Glycolic & Lactic Acid)", category: "Exfoliant", evidenceLevel: "strong", topBenefit: "Resurfacing, radiance & pigment lightening", slug: "aha-exfoliants" },
  { title: "Zinc Oxide", category: "UV Filter", evidenceLevel: "strong", topBenefit: "Broad-spectrum photoprotection", slug: "zinc-oxide" },
];

const staticRoutines = [
  { title: "AM Routine for Oily & Acne-Prone Skin", skinTypes: ["oily", "acne-prone"], duration: "7 min", slug: "am-oily-acne-prone" },
  { title: "PM Routine for Dry & Dehydrated Skin", skinTypes: ["dry"], duration: "8 min", slug: "pm-dry-skin" },
  { title: "Sensitive Skin Minimal Daily Protocol", skinTypes: ["sensitive"], duration: "5 min", slug: "sensitive-skin-daily" },
  { title: "Anti-Aging AM Routine (30s+)", skinTypes: ["mature", "normal"], duration: "10 min", slug: "anti-aging-am" },
  { title: "Hyperpigmentation Evening Protocol", skinTypes: ["combination", "normal"], duration: "8 min", slug: "hyperpigmentation-evening" },
];

// ─── Tokens ───────────────────────────────────────────────────────────────────

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59",
  moderate: "#C4622D",
  limited: "#D4A96A",
  emerging: "#4A6C8C",
  insufficient: "#8A8480",
};

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59",
  intermediate: "#C4622D",
  advanced: "#8B1A1A",
};

const skinTypeColor: Record<string, string> = {
  oily: "#4A6C8C", dry: "#C4622D", combination: "#92620A",
  sensitive: "#4A7C59", normal: "#5C5650", "acne-prone": "#8B1A1A", mature: "#7B5EA7",
};

const trustPoints = [
  { icon: <FlaskConical size={18} />, title: "Ingredient-First", body: "We evaluate the formula before the brand. Every active is assessed against its clinical evidence — dose, vehicle, and concentration included." },
  { icon: <BookOpen size={18} />, title: "Named Citations Only", body: "If we reference a benefit, we cite the study — author, year, journal. No 'studies show' without naming them." },
  { icon: <ShieldCheck size={18} />, title: "Editorially Independent", body: "Affiliate commissions never determine what we recommend. A high-commission product still gets an honest write-up." },
  { icon: <Target size={18} />, title: "Explicit Evidence Levels", body: "Every claim is tagged: Strong, Moderate, Limited, Emerging, or Insufficient. Readers always know how confident we are." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SkinHomePage() {
  const [guides, conditions, routines, ingredients] = await Promise.all([
    getAllSkinGuides(),
    getAllSkinConditions(),
    getAllSkinRoutines(),
    getAllSkinIngredients(),
  ]);

  // Use live Sanity data when available; fall back to static editorial content.
  const hasGuides      = guides.length > 0;
  const hasConditions  = conditions.length > 0;
  const hasRoutines    = routines.length > 0;
  const hasIngredients = ingredients.length > 0;

  const displayGuides      = hasGuides      ? guides      : staticGuides;
  const displayConditions  = hasConditions  ? conditions  : staticConditions;
  const displayRoutines    = hasRoutines    ? routines    : staticRoutines;
  const displayIngredients = hasIngredients ? ingredients : staticIngredients;

  const guideHref      = (slug: string) => hasGuides      ? `/guides/${slug}`      : "/guides";
  const conditionHref  = (slug: string) => hasConditions  ? `/conditions/${slug}`  : "/conditions";
  const routineHref    = (slug: string) => hasRoutines    ? `/routines/${slug}`    : "/routines";
  const ingredientHref = (slug: string) => hasIngredients ? `/ingredients/${slug}` : "/ingredients";

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* ── HERO ── */}
      <section style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH · VOL. I</span>
            <span style={{ width: 40, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4622D" }}>Evidence-Led Skincare Research</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "end" }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1A1714", lineHeight: 0.95, marginBottom: 28 }}>
                Evidence-led
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skincare</em>
                <br />
                research.
              </h1>
              <p style={{ fontSize: 16, color: "#5C5650", lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}>
                Ingredient profiles, routine guides, and condition breakdowns built on published dermatology research — not brand marketing.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Browse Guides <ArrowRight size={14} />
                </Link>
                <Link href="/ingredients" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, fontWeight: 500, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Ingredient Library
                </Link>
              </div>
            </div>

            {/* Research dashboard panel */}
            <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 420, border: "1px solid rgba(212,201,184,0.4)" }}>
              <div style={{ padding: "14px 20px", background: "linear-gradient(145deg, #1E1B18 0%, #141210 100%)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Research Standards</span>
                <span style={{ position: "relative", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", letterSpacing: "0.1em" }}>● EVIDENCE-LED</span>
              </div>
              <div style={{ height: 2, background: "linear-gradient(90deg, #C4622D 0%, transparent 70%)" }} />
              {[
                { label: "Evidence Tiers", value: "5", sub: "Strong → Insufficient" },
                { label: "Clinical Sources", value: "4+", sub: "Dermatology journals, PubMed, Cochrane" },
                { label: "Affiliate Influence", value: "Zero", sub: "Commissions never shape recommendations" },
                { label: "Citation Policy", value: "Named", sub: "Author · Year · Journal — always" },
              ].map((stat, i) => (
                <div key={stat.label} style={{ padding: "16px 20px", borderBottom: i < 3 ? "1px solid #EDE8DF" : "none", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>{stat.label}</p>
                    <p style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{stat.sub}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: stat.value.length > 4 ? 16 : 24, fontWeight: 700, color: "#1A1714" }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BROWSE BY TYPE ── */}
      <section style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 01</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>What We Cover</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1, marginBottom: 32 }}>
            Start with <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>your concern</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { label: "Guides", href: "/guides", desc: "Research-led articles on skincare concerns, actives, and evidence-based routines.", code: "All Guides →" },
              { label: "Conditions", href: "/conditions", desc: "Clinical profiles of common skin conditions — causes, symptoms, treatments.", code: "All Conditions →" },
              { label: "Routines", href: "/routines", desc: "Step-by-step protocols sequenced from ingredient science, not trend convention.", code: "All Routines →" },
              { label: "Ingredients", href: "/ingredients", desc: "Evidence-rated profiles for the actives inside your products.", code: "All Ingredients →" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hub-card"
                style={{ display: "block", padding: "22px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1A1714" }}>{item.label}</span>
                  <ArrowRight size={14} style={{ color: "#C4622D", marginTop: 4, flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, marginBottom: 16 }}>{item.desc}</p>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D", letterSpacing: "0.08em" }}>{item.code}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED GUIDES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 02</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Guides</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
              Research-led <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skincare guides</em>
            </h2>
          </div>
          <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            All Guides <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 12 }}>
          {displayGuides.slice(0, 6).map((guide: any) => (
            <Link
              key={guide.slug}
              href={guideHref(guide.slug)}
              className="hub-card"
              style={{ display: "block", borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", textDecoration: "none", backgroundColor: "#F8F2E4" }}
            >
              <div style={{ height: 3, backgroundColor: guide.difficulty ? difficultyColor[guide.difficulty] ?? "#C4622D" : "#C4622D" }} />
              <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  {guide.category && (
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em" }}>{guide.category}</span>
                  )}
                  {guide.difficulty && (
                    <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: difficultyColor[guide.difficulty] ?? "#8A8480", backgroundColor: `${difficultyColor[guide.difficulty] ?? "#8A8480"}14`, border: `1px solid ${difficultyColor[guide.difficulty] ?? "#8A8480"}33` }}>{guide.difficulty}</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{guide.title}</h3>
                {guide.description && (
                  <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, margin: 0 }}>{(guide.description as string).slice(0, 100)}{(guide.description as string).length > 100 ? "…" : ""}</p>
                )}
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#C4622D" }}>
                  {guide.timeEstimate ?? "Read guide"} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section style={{ borderTop: "1px solid #D4C9B8", borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 03</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Conditions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
                Common <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>skin conditions</em>
              </h2>
            </div>
            <Link href="/conditions" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              All Conditions <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {displayConditions.slice(0, 6).map((condition: any) => (
              <Link
                key={condition.slug}
                href={conditionHref(condition.slug)}
                className="hub-card"
                style={{ display: "block", padding: "20px 22px", borderRadius: 12, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", textDecoration: "none" }}
              >
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, marginBottom: 8 }}>{condition.title}</h3>
                <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, marginBottom: 14 }}>
                  {condition.desc ?? (condition.description ? (condition.description as string).slice(0, 90) + ((condition.description as string).length > 90 ? "…" : "") : "")}
                </p>
                {condition.symptoms?.length > 0 && (
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {(condition.symptoms as string[]).slice(0, 3).map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>{s}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS (dark) ── */}
      <section style={{ borderBottom: "1px solid #2D2926", backgroundColor: "#1A1714" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650" }}>SEC. 04</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#5C5650", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Ingredients</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#F2EBD9", lineHeight: 1.1 }}>
                Know what <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8A8480" }}>you&apos;re applying</em>
              </h2>
            </div>
            <Link href="/ingredients" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid rgba(212,201,184,0.25)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
              Ingredient Library <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {displayIngredients.slice(0, 6).map((ing: any) => (
              <Link
                key={ing.slug ?? ing.title}
                href={ingredientHref(ing.slug)}
                className="hub-card"
                style={{ display: "block", padding: "20px 22px", borderRadius: 12, border: "1px solid rgba(212,201,184,0.12)", backgroundColor: "rgba(242,235,217,0.04)", textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#F2EBD9", lineHeight: 1.3 }}>{ing.title}</h3>
                  {ing.evidenceLevel && (
                    <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0, color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}1A`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}40` }}>{ing.evidenceLevel}</span>
                  )}
                </div>
                {ing.category && (
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5C5650", marginBottom: 10 }}>{ing.category}</p>
                )}
                <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.55 }}>
                  {ing.topBenefit ?? (ing.benefits?.[0] ?? "")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROUTINES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 05</span>
              <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin Routines</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.1 }}>
              Step-by-step <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>protocols</em>
            </h2>
          </div>
          <Link href="/routines" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            All Routines <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
          {displayRoutines.slice(0, 5).map((routine: any, i: number) => (
            <Link
              key={routine.slug}
              href={routineHref(routine.slug)}
              className="hub-row-link"
              style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "18px 22px", borderBottom: i < Math.min(displayRoutines.length, 5) - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", textDecoration: "none" }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>{routine.title}</p>
                {routine.skinTypes?.length > 0 && (
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {(routine.skinTypes as string[]).slice(0, 3).map((type) => (
                      <span key={type} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "1px 7px", borderRadius: 4, textTransform: "uppercase", color: skinTypeColor[type] ?? "#8A8480", backgroundColor: `${skinTypeColor[type] ?? "#8A8480"}14`, border: `1px solid ${skinTypeColor[type] ?? "#8A8480"}33` }}>{type}</span>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                {routine.duration && (
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", whiteSpace: "nowrap" }}>{routine.duration}</span>
                )}
                <ArrowRight size={13} style={{ color: "#C4622D" }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW WE RESEARCH (trust) ── */}
      <section style={{ borderTop: "1px solid #D4C9B8" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 06</span>
                <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Editorial Standards</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                How we <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>research</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, marginBottom: 28 }}>
                The skincare industry runs on aspiration and marketing budgets. We approach it the way we approach supplements — ingredient by ingredient, study by study, claim by claim.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Read Our Methodology <ArrowRight size={13} />
                </Link>
                <Link href="/editorial-policy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                  Editorial Policy
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {trustPoints.map((tp) => (
                <div key={tp.title} style={{ padding: "20px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "#C4622D" }}>{tp.icon}</span>
                    <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1714" }}>{tp.title}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{tp.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / LEGAL ── */}
      <section style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="pad-section px-page">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SEC. 07</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>About This Section</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", lineHeight: 1.1, marginBottom: 28 }}>
            More from <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>Fitlabreviews Skin</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10, marginBottom: 24 }}>
            {[
              { label: "About", code: "SKIN-ABOUT", desc: "Our mission, what we cover, and why evidence-first skincare matters.", href: "/about" },
              { label: "Methodology", code: "SKIN-METH-001", desc: "How we assign evidence levels and evaluate ingredient claims.", href: "/methodology" },
              { label: "Editorial Policy", code: "SKIN-ED-001", desc: "Independence guarantee, review process, and corrections policy.", href: "/editorial-policy" },
              { label: "Medical Disclaimer", code: "SKIN-MED-001", desc: "Educational content only — always consult a dermatologist.", href: "/medical-disclaimer" },
            ].map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="hub-card"
                style={{ display: "block", padding: "18px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, textDecoration: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#1A1714" }}>{card.label}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, color: "#A89880", textTransform: "uppercase" }}>{card.code}</span>
                </div>
                <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ paddingTop: 16, borderTop: "1px solid #D4C9B8", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/affiliate-disclosure" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Affiliate Disclosure</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <Link href="/medical-disclaimer" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Medical Disclaimer</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <Link href="/editorial-policy" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Editorial Policy</Link>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <a href="https://fitlabreviews.com" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>← Fitlabreviews.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
