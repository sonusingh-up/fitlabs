import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, CheckCircle, XCircle } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReviewRating } from "@/lib/types";

export const metadata: Metadata = {
  title: "Legion Pulse vs Transparent Labs BULK Black (2026): Which Pre-Workout Wins?",
  description:
    "Legion Pulse or Transparent Labs BULK Black — which pre-workout is actually better? We compare ingredients, energy, pumps, price, and results to help you choose.",
  alternates: { canonical: "/compare/legion-pulse-vs-bulk-black" },
  openGraph: {
    title: "Legion Pulse vs Transparent Labs BULK Black (2026): Which Pre-Workout Wins?",
    description:
      "Both score 9/10. Both are fully transparent. The differences are specific — caffeine delivery, theanine dose, certification, and $0.25/serving. Here is how to pick.",
    url: "https://fitlabreviews.com/compare/legion-pulse-vs-bulk-black",
    type: "article",
  },
};

// ─── Product data ─────────────────────────────────────────────────────────────

const pulse = {
  name: "Legion Pulse",
  brand: "Legion Athletics",
  type: "High-Stim Pre-Workout",
  rating: 9 as ReviewRating,
  fsp: "9/10",
  price: "$67.50",
  pricePerServing: "$2.25",
  servings: "30",
  caffeine: "350mg (PurCaf® organic, single source)",
  citrulline: "8,000mg CM 2:1",
  betaAlanine: "3,600mg (CarnoSyn®)",
  betaine: "2,500mg",
  theanine: "350mg (1:1 with caffeine)",
  alphaGpc: "300mg",
  tyrosine: "—",
  taurine: "—",
  caffeineSys: "Single source (anhydrous)",
  sweetener: "Erythritol + Stevia",
  artificial: "None",
  cert: "Labdoor",
  flavours: "20",
  servingSize: "22.76g / 2 scoops",
  bestFor: "Natural ingredients, high theanine, flavour variety",
  strength: "350mg L-theanine at 1:1 ratio — unique in category",
  weakness: "Most expensive per serving; no Informed Choice cert",
  verdict: "The cleanest high-stim formula. The theanine dose is a genuine differentiator for focus quality.",
  reviewSlug: "/reviews/legion-pulse-pre-workout-review-2026",
  buyUrl: "https://amzn.to/4o4r29e",
  image: "/products/legion-pulse-preworkout.webp",
  accent: "#D4A96A",
  bg: "rgba(212,169,106,0.08)",
  border: "rgba(212,169,106,0.3)",
};

const bulkBlack = {
  name: "BULK Black",
  brand: "Transparent Labs",
  type: "High-Stim Pre-Workout",
  rating: 9 as ReviewRating,
  fsp: "9/10",
  price: "$59.99",
  pricePerServing: "$2.00",
  servings: "30",
  caffeine: "305mg (275mg anhydrous + 30mg Infinergy®)",
  citrulline: "8,000mg CM 2:1",
  betaAlanine: "4,000mg",
  betaine: "2,500mg",
  theanine: "200mg",
  alphaGpc: "300mg",
  tyrosine: "1,000mg",
  taurine: "1,300mg",
  caffeineSys: "Dual-phase (anhydrous + Infinergy®)",
  sweetener: "Stevia only",
  artificial: "None",
  cert: "Informed Choice",
  flavours: "8",
  servingSize: "20.6g / 1 scoop",
  bestFor: "Drug-tested athletes, deeper nootropic stack, longer sessions",
  strength: "Informed Choice cert + dual-phase caffeine + L-tyrosine stack",
  weakness: "Less theanine; fewer flavours",
  verdict: "Broader formula, Informed Choice certified. The pick for competitive athletes and long training sessions.",
  reviewSlug: "/reviews/transparent-labs-bulk-black-review",
  buyUrl: "https://amzn.to/3RPRlnm",
  image: "/products/tl-bulk-black-preworkout.webp",
  accent: "#C4622D",
  bg: "rgba(196,98,45,0.08)",
  border: "rgba(196,98,45,0.3)",
};

// ─── Ingredient comparison rows ───────────────────────────────────────────────

const ingredientRows = [
  { label: "Citrulline Malate 2:1", pulse: "8,000 mg", bulk: "8,000 mg", winner: "tie", clinical: "6,000–8,000 mg" },
  { label: "Beta-Alanine", pulse: "3,600 mg (CarnoSyn®)", bulk: "4,000 mg", winner: "bulk", clinical: "3,200–6,400 mg" },
  { label: "Betaine Anhydrous", pulse: "2,500 mg", bulk: "2,500 mg", winner: "tie", clinical: "2,500 mg" },
  { label: "Caffeine", pulse: "350 mg (single)", bulk: "305 mg (dual-phase)", winner: "context", clinical: "200–400 mg" },
  { label: "L-Theanine", pulse: "350 mg ★", bulk: "200 mg", winner: "pulse", clinical: "100–400 mg" },
  { label: "Alpha-GPC (50%)", pulse: "300 mg", bulk: "300 mg", winner: "tie", clinical: "200–600 mg" },
  { label: "L-Tyrosine", pulse: "—", bulk: "1,000 mg ★", winner: "bulk", clinical: "500–2,000 mg" },
  { label: "Taurine", pulse: "—", bulk: "1,300 mg", winner: "bulk", clinical: "1,000–3,000 mg" },
  { label: "Infinergy® Di-Caf. Malate", pulse: "—", bulk: "30 mg", winner: "bulk", clinical: "Adjunct" },
  { label: "AstraGin®", pulse: "—", bulk: "50 mg", winner: "bulk", clinical: "25–100 mg" },
  { label: "3rd-Party Certification", pulse: "Labdoor", bulk: "Informed Choice", winner: "context", clinical: "—" },
  { label: "Artificial Ingredients", pulse: "None", bulk: "None", winner: "tie", clinical: "—" },
  { label: "Sweetener", pulse: "Erythritol + Stevia", bulk: "Stevia", winner: "tie", clinical: "—" },
  { label: "Flavours", pulse: "20", bulk: "8", winner: "pulse", clinical: "—" },
];

// ─── Category winners ─────────────────────────────────────────────────────────

const categoryWinners = [
  { category: "Pump & Endurance (citrulline, betaine)", winner: "Tie", reason: "Identical doses on both ingredients. No performance difference between the two." },
  { category: "Beta-alanine endurance buffering", winner: "BULK Black", reason: "4,000mg vs 3,600mg — marginal edge; both within the 3.2–6.4g clinical range." },
  { category: "Caffeine quality & sourcing", winner: "Legion Pulse", reason: "PurCaf® organic green coffee certification is unique. Single-source delivery is simpler to time." },
  { category: "Caffeine energy curve (long sessions)", winner: "BULK Black", reason: "Dual-phase system extends energy tail — measurable for sessions over 90 minutes." },
  { category: "Jitter control & focus quality", winner: "Legion Pulse", reason: "350mg theanine at 1:1 ratio with caffeine. Giesbrecht et al. (2010) confirmed significantly lower jitteriness vs caffeine alone at this ratio." },
  { category: "Nootropic stack depth (heavy lifting)", winner: "BULK Black", reason: "L-tyrosine (1,000mg) addresses catecholamine depletion under fatigue — not covered by theanine." },
  { category: "Third-party testing (recreational athletes)", winner: "Tie", reason: "Both independently tested. Labdoor verifies label accuracy; Informed Choice covers WADA banned list." },
  { category: "Third-party testing (drug-tested athletes)", winner: "BULK Black", reason: "Informed Choice is the recognised standard under WADA, USADA, and UK Anti-Doping. Labdoor is not equivalent." },
  { category: "Natural ingredients & sourcing", winner: "Legion Pulse", reason: "Organic caffeine sourcing (PurCaf®), erythritol + stevia blend — the most comprehensively natural formula." },
  { category: "Flavour selection", winner: "Legion Pulse", reason: "20 flavours vs 8. Practical advantage for long-term consistency." },
  { category: "Price per serving", winner: "BULK Black", reason: "$2.00 vs $2.25 — $90/year cheaper on consistent 5×/week use." },
  { category: "Formula depth per dollar", winner: "BULK Black", reason: "16 active ingredients vs 6, at a lower price. Broader coverage for the same training goals." },
];

const pulseWins = categoryWinners.filter((c) => c.winner === "Legion Pulse").length;
const bulkWins  = categoryWinners.filter((c) => c.winner === "BULK Black").length;
const ties      = categoryWinners.filter((c) => c.winner === "Tie").length;

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Which is better for drug-tested competitive athletes — Pulse or BULK Black?",
    a: "BULK Black. It holds Informed Choice certification — the programme recognised by WADA, USADA, and UK Anti-Doping — which involves monthly blind retail purchase testing for 270+ prohibited substances. Legion Pulse holds Labdoor certification, which tests for banned substances but is not a recognised programme under most competitive anti-doping agencies. If your sport requires Informed Choice or Informed Sport specifically, BULK Black is the only option of the two.",
  },
  {
    q: "Does Legion Pulse have more caffeine than BULK Black?",
    a: "Yes. Legion Pulse contains 350mg of caffeine per two-scoop serving from a single organic source (PurCaf®). BULK Black contains 305mg total — 275mg caffeine anhydrous plus 30mg Infinergy® di-caffeine malate. The 45mg difference is minor, but the delivery mechanism differs: Pulse hits peak plasma levels faster with a sharper curve; BULK Black's dual-phase system extends energy duration, making it more suitable for training sessions over 90 minutes.",
  },
  {
    q: "Why does Legion Pulse use so much more L-theanine than BULK Black?",
    a: "Legion deliberately doses theanine at 350mg to match caffeine at a 1:1 ratio. Giesbrecht et al. (2010, Nutritional Neuroscience) found this ratio significantly improved sustained attention and reaction time versus caffeine alone, while reducing subjective jitteriness. Most pre-workouts use 100–200mg of theanine — enough to reduce some jitteriness, but not enough to produce the sustained calm-focus effect at the 1:1 ratio. BULK Black uses 200mg, which provides benefit but less than Pulse's approach.",
  },
  {
    q: "BULK Black has 16 ingredients and Pulse has 6. Does more mean better?",
    a: "Not necessarily. What matters is whether each ingredient is at a clinical dose. Both products meet that standard. BULK Black is broader — it adds L-tyrosine, taurine, Infinergy®, AstraGin®, and micronutrients that Pulse omits. Pulse commits more budget to theanine and CarnoSyn® beta-alanine. The 'more ingredients' argument only holds if all additions are evidence-based and at effective doses — which they are in BULK Black. This is a genuine formula philosophy difference, not a quality gap.",
  },
  {
    q: "Which is better value for money?",
    a: "BULK Black at $2.00/serving offers more ingredients and a broader formula for 11% less than Pulse's $2.25/serving. Over a year of 5×/week use, that is approximately $90 in savings. However, if Legion Pulse's specific advantages — 350mg theanine, organic caffeine sourcing, 20 flavours, and erythritol-based sweetening — are meaningful to you, the premium is defensible. For pure formula-per-dollar, BULK Black wins. For the specific theanine and natural ingredient advantages, Pulse earns its premium.",
  },
  {
    q: "Can I take either of these if I am caffeine-sensitive?",
    a: "Neither is appropriate for caffeine-sensitive individuals at full dose. Pulse delivers 350mg and BULK Black delivers 305mg — both are high-stimulant doses approaching EFSA's 400mg daily safe upper limit. Both products offer a half-dose starting protocol (one scoop of Pulse = 175mg; half scoop of BULK Black = 152.5mg) that is manageable for those with moderate caffeine tolerance. If you are genuinely sensitive to caffeine, consider Legion Pulse Stim-Free, which retains the full ergogenic formula at zero caffeine.",
  },
  {
    q: "Is Legion Pulse available in USA? What about BULK Black?",
    a: "Both are available on Amazon.in through authorised importers at a significant premium over US pricing ($67.50 for Pulse, $59.99 for BULK Black as of May 2026). The import duty and logistics markup means both sit well above the price tier of domestic American alternatives — the premium pays for clinical dosing, natural ingredients, and third-party certification that most domestic options do not offer.",
  },
  {
    q: "Which should I choose if I train in the morning vs evening?",
    a: "Morning training: either product works. Evening training (after 5–6pm): neither is ideal at full dose, as 305–350mg of caffeine has a half-life of 5–6 hours, which risks sleep disruption. For evening sessions, use Legion Pulse Stim-Free or reduce to one scoop of Pulse (175mg caffeine) and time it no later than 4pm. BULK Black's dual-phase caffeine extends the energy window further, making it slightly worse for evening use.",
  },
];

export default function LegionPulseVsBulkBlackPage() {

  // ─── Schemas ───────────────────────────────────────────────────────────────

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Legion Pulse vs Transparent Labs BULK Black (2026): Which Pre-Workout Is Better?",
    url: "https://fitlabreviews.com/compare/legion-pulse-vs-bulk-black",
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    author: { "@type": "Organization", name: "Fitlabreviews Editorial Team" },
    publisher: { "@type": "Organization", name: "Fitlabreviews", url: "https://fitlabreviews.com" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://fitlabreviews.com/compare" },
      { "@type": "ListItem", position: 3, name: "Legion Pulse vs BULK Black", item: "https://fitlabreviews.com/compare/legion-pulse-vs-bulk-black" },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <Link href="/compare" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Compare</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <Link href="/category/pre-workout" style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Pre-Workout</Link>
          <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Pulse vs BULK Black</span>
        </div>
      </div>

      {/* ── Dark hero banner with both products ─────────────────────────────── */}
      <div style={{ background: "linear-gradient(145deg, #0A0A14 0%, #050508 100%)", position: "relative", overflow: "hidden", padding: "40px 20px 0" }}>
        {/* Grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>

          {/* Figure code */}
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.25)", textAlign: "center", marginBottom: 28 }}>
            CMP-006 · DIRECT COMPARISON · PRE-WORKOUT · MAY 2026
          </p>

          {/* Mobile: stacked layout — desktop: side-by-side via layout-compare-cards */}
          <div className="layout-compare-cards" style={{ alignItems: "flex-end" }}>

            {/* Left — Legion Pulse */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingBottom: 36 }}>
              {/* Image — larger on mobile */}
              <div style={{ width: "clamp(120px, 30vw, 160px)", height: "clamp(150px, 38vw, 200px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <img
                  src={pulse.image}
                  alt="Legion Pulse Pre-Workout"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 10px 32px rgba(212,169,106,0.55))" }}
                />
              </div>
              {/* Label */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.35)", marginBottom: 5 }}>Legion Athletics</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 17, fontWeight: 700, color: "#F2EBD9", marginBottom: 3 }}>Pulse</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#D4A96A" }}>9/10 FSP</p>
              </div>
              {/* Buttons — full-width on mobile */}
              <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 220 }}>
                <a
                  href={pulse.buyUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "10px 14px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Buy ↗
                </a>
                <Link
                  href={pulse.reviewSlug}
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "10px 14px", border: "1px solid rgba(242,235,217,0.18)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Review →
                </Link>
              </div>
            </div>

            {/* VS — hidden on mobile via compare-vs-hide */}
            <div className="compare-vs-hide" style={{ textAlign: "center", paddingBottom: 56, flexShrink: 0 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(242,235,217,0.2)", marginBottom: 8 }}>BOTH SCORED</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 400, fontStyle: "italic", color: "rgba(242,235,217,0.12)", lineHeight: 1 }}>vs</p>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(242,235,217,0.2)", marginTop: 8 }}>9 / 10 FSP</p>
            </div>

            {/* Mobile-only VS divider — shown between the two products on small screens */}
            <div className="block md:hidden" style={{ textAlign: "center", padding: "4px 0" }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.8rem", fontWeight: 400, fontStyle: "italic", color: "rgba(242,235,217,0.18)" }}>vs</span>
            </div>

            {/* Right — BULK Black */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingBottom: 36 }}>
              <div style={{ width: "clamp(120px, 30vw, 160px)", height: "clamp(150px, 38vw, 200px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <img
                  src={bulkBlack.image}
                  alt="Transparent Labs BULK Black Pre-Workout"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 10px 32px rgba(196,98,45,0.55))" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,235,217,0.35)", marginBottom: 5 }}>Transparent Labs</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 17, fontWeight: 700, color: "#F2EBD9", marginBottom: 3 }}>BULK Black</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#C4622D" }}>9/10 FSP</p>
              </div>
              <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 220 }}>
                <a
                  href={bulkBlack.buyUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "10px 14px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 700, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Buy ↗
                </a>
                <Link
                  href={bulkBlack.reviewSlug}
                  style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, padding: "10px 14px", border: "1px solid rgba(242,235,217,0.18)", color: "#A89880", fontSize: 13, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Review →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Fade to page background */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent, #F2EBD9)" }} />
      </div>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-section px-page">

        {/* Intro + H1 */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>
            FITLAB INDEPENDENT COMPARISON · Prices verified May 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 16, maxWidth: 780 }}>
            Legion Pulse <em style={{ fontWeight: 400, fontStyle: "italic", color: "#5C5650" }}>vs</em> Transparent Labs BULK Black —{" "}
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "#8A8480" }}>Which Should You Buy?</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", maxWidth: 720, lineHeight: 1.8 }}>
            Both score 9/10 on the Fitlab Scoring Protocol. Both are fully transparent — no proprietary
            blends, no token doses, no artificial ingredients. Put them directly side by side and the
            differences are specific: caffeine delivery system, theanine dose, nootropic stack depth,
            third-party certification programme, and $0.25 per serving. This comparison works through
            each dimension so you can make an informed choice rather than a guess.
          </p>
        </div>

        {/* Score cards */}
        <div className="layout-compare-cards" style={{ marginBottom: 56 }}>
          {[pulse, bulkBlack].map((p, i) => (
            <>
              <div key={p.name} style={{ padding: 28, border: `1px solid ${p.border}`, borderRadius: 12, backgroundColor: p.bg }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#8A8480", marginBottom: 8 }}>
                  {p.brand} · {p.type}
                </p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>
                  {p.name}
                </h3>
                <div style={{ display: "flex", marginBottom: 16 }}>
                  <ReviewScoreBadge rating={p.rating} size="md" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                  <p style={{ fontSize: 12, color: "#5C5650" }}><strong style={{ color: "#1A1714" }}>Price:</strong> {p.pricePerServing}/serving · {p.price} / 30 servings</p>
                  <p style={{ fontSize: 12, color: "#5C5650" }}><strong style={{ color: "#1A1714" }}>Certification:</strong> {p.cert}</p>
                  <p style={{ fontSize: 12, color: "#5C5650" }}><strong style={{ color: "#1A1714" }}>Key advantage:</strong> {p.strength}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a href={p.buyUrl} target="_blank" rel="nofollow noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 14px", backgroundColor: p.accent, color: p.name === "Legion Pulse" ? "#1A1714" : "#F2EBD9", fontSize: 12, fontWeight: 700, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={11} />
                  </a>
                  <Link href={p.reviewSlug}
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 14px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 12, borderRadius: 6, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
                    Full Review →
                  </Link>
                </div>
              </div>

              {i === 0 && (
                <div key="vs" className="compare-vs-hide" style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.5rem", fontWeight: 400, fontStyle: "italic", color: "#D4C9B8" }}>vs</span>
                </div>
              )}
            </>
          ))}
        </div>

        {/* ── § 01 Who Should Pick Which ──────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Quick Pick" figure="§ 01" title="Who should pick" titleItalic="which one" size="sm" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              {
                product: "Choose Legion Pulse if:",
                accent: "#D4A96A",
                bg: "rgba(212,169,106,0.06)",
                border: "rgba(212,169,106,0.25)",
                items: [
                  "You train skills or sports where calm, sustained focus matters more than raw stimulation",
                  "You want 100% natural sourcing — organic caffeine (PurCaf®), erythritol, stevia, zero artificial anything",
                  "You want 20 flavours and genuinely enjoy variety in your pre-workout",
                  "Labdoor's label-accuracy testing is sufficient for your athletic context",
                  "You frequently train in conditions where jitter-sensitivity is a problem",
                ],
              },
              {
                product: "Choose BULK Black if:",
                accent: "#C4622D",
                bg: "rgba(196,98,45,0.06)",
                border: "rgba(196,98,45,0.25)",
                items: [
                  "You compete under WADA, USADA, or UK Anti-Doping and need Informed Choice certification",
                  "You do heavy compound strength training where catecholamine demand is highest",
                  "You regularly train for 90+ minutes and need sustained energy without a mid-session drop",
                  "You want the deeper nootropic stack — tyrosine + dual-caffeine + full Alpha-GPC",
                  "Budget matters and you want the most formula coverage per dollar spent",
                ],
              },
            ].map((card) => (
              <div key={card.product} style={{ padding: "20px", backgroundColor: card.bg, border: `1px solid ${card.border}`, borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: card.accent, marginBottom: 12, fontWeight: 700 }}>{card.product}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: card.accent, fontSize: 12, flexShrink: 0, marginTop: 2 }}>→</span>
                      <span style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", borderRadius: 8, borderLeft: "3px solid #8B7355" }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
              Both products are equally legitimate choices. This comparison identifies specific
              differences — neither product is a compromise. See the{" "}
              <Link href="/methodology" style={{ color: "#C4622D", textDecoration: "none" }}>FSP methodology</Link>{" "}
              for how both arrived at a 9/10.
            </p>
          </div>
        </section>

        {/* ── § 02 Formula Side-by-Side ───────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Ingredients" figure="§ 02" title="Formula" titleItalic="side-by-side" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>
            Where the formulas share ingredients — citrulline, betaine, Alpha-GPC — they are at
            identical doses. Every clinical dose is cited to the primary efficacy trial. The divergence
            is entirely in what BULK Black adds (deeper nootropic stack, dual caffeine, absorption
            support) and what Pulse commits more to (theanine, organic caffeine sourcing). Green
            highlights indicate the ingredient where that product leads.
          </p>

          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#1A1714" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Ingredient</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#D4A96A" }}>Legion Pulse</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#C4622D" }}>BULK Black</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Clinical range</th>
                </tr>
              </thead>
              <tbody>
                {ingredientRows.map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</td>
                    <td style={{ padding: "11px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", color: row.winner === "pulse" ? "#2D6A4F" : row.pulse === "—" ? "#C8BEA8" : "#1A1714", fontWeight: row.winner === "pulse" ? 700 : 400 }}>{row.pulse}</td>
                    <td style={{ padding: "11px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", color: row.winner === "bulk" ? "#2D6A4F" : row.bulk === "—" ? "#C8BEA8" : "#1A1714", fontWeight: row.winner === "bulk" ? 700 : 400 }}>{row.bulk}</td>
                    <td style={{ padding: "11px 16px", fontSize: 11, color: "#A89880", fontFamily: "var(--font-dm-mono), monospace" }}>{row.clinical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── § 03 Caffeine System ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Caffeine" figure="§ 03" title="Single source vs" titleItalic="dual-phase delivery" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>
            The caffeine architecture is the most practically significant difference between the two
            products. It is not just dose — it is the shape of the energy curve.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              {
                product: "Legion Pulse — 350mg Single Source",
                accent: "#D4A96A",
                bg: "rgba(212,169,106,0.06)",
                border: "rgba(212,169,106,0.2)",
                source: "PurCaf® organic green coffee (Coffea arabica seed)",
                curve: "Sharp peak at 30–60 min, steeper decline at 2–3 hrs",
                bestFor: "60–75 min lifting sessions. Time it exactly 20–30 min before training.",
                tradeoff: "More defined comedown vs dual-phase. Timing discipline matters more.",
                unique: "Only mainstream pre-workout with certified organic caffeine sourcing.",
              },
              {
                product: "BULK Black — 305mg Dual-Phase",
                accent: "#C4622D",
                bg: "rgba(196,98,45,0.06)",
                border: "rgba(196,98,45,0.2)",
                source: "275mg caffeine anhydrous + 30mg Infinergy® di-caffeine malate",
                curve: "Sharp onset from anhydrous, extended tail from Infinergy® (slower release)",
                bestFor: "90+ min sessions, two-a-days, or any extended training block.",
                tradeoff: "Slightly slower peak than single-source anhydrous. More complex system.",
                unique: "Theobromine (50mg) adds further xanthine extension to the energy window.",
              },
            ].map((item) => (
              <div key={item.product} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: item.accent, marginBottom: 12, fontWeight: 700 }}>{item.product}</p>
                {[
                  { label: "Source", val: item.source },
                  { label: "Energy curve", val: item.curve },
                  { label: "Best training window", val: item.bestFor },
                  { label: "Trade-off", val: item.tradeoff },
                  { label: "Unique to this", val: item.unique },
                ].map((row) => (
                  <div key={row.label} style={{ marginBottom: 10 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 2 }}>{row.label}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6 }}>{row.val}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8 }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
              <strong>The 45mg gap matters less than the curve shape.</strong> For standard 60–75 minute
              sessions, both deliver comparable output — the difference at peak is negligible with
              established tolerance. For sessions over 90 minutes, BULK Black's extended tail is a
              real practical advantage. Harpaz et al. (2017, <em>J Basic Clin Physiol Pharmacol</em>)
              confirmed differential absorption kinetics between caffeine anhydrous and di-caffeine
              malate forms.
            </p>
          </div>
        </section>

        {/* ── § 04 Focus & Nootropics ─────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Nootropics" figure="§ 04" title="Theanine depth vs" titleItalic="nootropic breadth" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>
            Both include Alpha-GPC at 300mg. After that the approaches diverge — and this is where the
            formula philosophies show most clearly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              {
                product: "Pulse — 350mg Theanine",
                accent: "#D4A96A",
                bg: "rgba(212,169,106,0.06)",
                border: "rgba(212,169,106,0.2)",
                mechanism: "Modulates glutamate receptors, promotes alpha-wave brain activity. 1:1 ratio with caffeine blunts jitteriness and sustains attention without sedation.",
                evidence: "Giesbrecht et al. (2010, Nutr Neurosci) — combined caffeine + theanine at 1:1 significantly outperformed caffeine alone on sustained attention, reaction time, and reduced subjective jitter.",
                best: "Technical training, skill-based sports, any context where calm deliberate focus beats peak stimulation.",
              },
              {
                product: "BULK Black — Tyrosine + Theanine",
                accent: "#C4622D",
                bg: "rgba(196,98,45,0.06)",
                border: "rgba(196,98,45,0.2)",
                mechanism: "L-Tyrosine (1,000mg) is a catecholamine precursor — dopamine, norepinephrine, epinephrine. Under physical stress these deplete; tyrosine replenishes the substrate for resynthesis. L-Theanine (200mg) provides partial jitter buffering.",
                evidence: "Deijen & Orlebeke (1994, Brain Res Bull) — tyrosine reduced working memory performance decline under stress. More relevant for maximal-effort strength training than for technical skill work.",
                best: "Heavy compound lifting, high-intensity strength sessions, training under fatigue where catecholamine demand is the limiting factor.",
              },
            ].map((item) => (
              <div key={item.product} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: item.accent, marginBottom: 12, fontWeight: 700 }}>{item.product}</p>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Mechanism</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.mechanism}</p>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Evidence</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.evidence}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>Best for</p>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{item.best}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── § 05 Third-Party Testing ─────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Verification" figure="§ 05" title="Labdoor vs" titleItalic="Informed Choice" size="sm" />

          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>
            Both products are independently tested. But the programmes have different scopes — and for
            competitive athletes, the distinction is not minor.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
            {[
              {
                cert: "Labdoor",
                product: "Legion Pulse",
                accent: "#D4A96A",
                bg: "rgba(212,169,106,0.06)",
                border: "rgba(212,169,106,0.2)",
                checks: [
                  { label: "ISO 17025 accredited lab", pass: true },
                  { label: "Tests purity (contaminants)", pass: true },
                  { label: "Tests potency (actual vs label dose)", pass: true },
                  { label: "Publishes numerical scores per ingredient", pass: true },
                  { label: "Covers WADA prohibited substances list", pass: false },
                  { label: "Recognised by national Olympic bodies", pass: false },
                  { label: "Ongoing blind retail purchase testing", pass: false },
                ],
                verdict: "Best for: general population, recreational athletes, anyone who wants label accuracy assurance beyond a brand COA.",
              },
              {
                cert: "Informed Choice",
                product: "BULK Black",
                accent: "#C4622D",
                bg: "rgba(196,98,45,0.06)",
                border: "rgba(196,98,45,0.2)",
                checks: [
                  { label: "ISO 17025 accredited lab (LGC Group)", pass: true },
                  { label: "Tests purity (contaminants)", pass: true },
                  { label: "Tests specifically against WADA prohibited list", pass: true },
                  { label: "Ongoing monthly blind retail purchase testing", pass: true },
                  { label: "Recognised by UK Sport, USADA affiliates", pass: true },
                  { label: "Required for UK Sport-funded athletes", pass: true },
                  { label: "Does NOT verify label accuracy / potency", pass: false },
                ],
                verdict: "Best for: competitive athletes under WADA, USADA, UK Anti-Doping, or any programme that specifically requires Informed Choice.",
              },
            ].map((item) => (
              <div key={item.cert} style={{ padding: "18px 20px", backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: 10 }}>
                <div style={{ marginBottom: 14 }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714" }}>{item.cert}</p>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: item.accent }}>Used by {item.product}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
                  {item.checks.map((c) => (
                    <div key={c.label} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      {c.pass ? <CheckCircle size={13} color="#2D6A4F" style={{ flexShrink: 0, marginTop: 1 }} /> : <XCircle size={13} color="#8B3A2C" style={{ flexShrink: 0, marginTop: 1 }} />}
                      <span style={{ fontSize: 12, color: c.pass ? "#2D2926" : "#8A8480", lineHeight: 1.5 }}>{c.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "10px 12px", backgroundColor: "#F8F2E4", borderRadius: 6 }}>
                  <p style={{ fontSize: 12, color: "#2D2926", lineHeight: 1.6 }}>{item.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "14px 18px", backgroundColor: "#EDE8DF", borderRadius: 8, borderLeft: "3px solid #C4622D" }}>
            <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>
              <strong>For recreational athletes and most gym users:</strong> both certifications are
              adequate. <strong>For drug-tested competitive athletes:</strong> check your governing
              body's requirements. If they specify Informed Choice or Informed Sport, BULK Black is the
              only option between the two. Labdoor is not a recognised programme under WADA-affiliated
              anti-doping agencies.
            </p>
          </div>
        </section>

        {/* ── § 06 Price & Value ───────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Value" figure="§ 06" title="Price per serving" titleItalic="what you actually pay" size="sm" />

          <div style={{ overflowX: "auto", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Scenario</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#D4A96A" }}>Legion Pulse</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#C4622D" }}>BULK Black</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 500 }}>Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: "Per full serving", pulse: "$2.25", bulk: "$2.00", diff: "Pulse +$0.25" },
                  { scenario: "Per tub (30 servings)", pulse: "~$67.50", bulk: "$59.99", diff: "Pulse +$7.50" },
                  { scenario: "Per half-serving", pulse: "$1.13", bulk: "$1.00", diff: "Pulse +$0.13" },
                  { scenario: "Annual (5×/week, 52 weeks)", pulse: "~$877", bulk: "~$780", diff: "Pulse +~$97/year" },
                ].map((row, i) => (
                  <tr key={row.scenario} style={{ borderBottom: "1px solid #EDE8DF", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                    <td style={{ padding: "11px 16px", fontSize: 13, color: "#2D2926" }}>{row.scenario}</td>
                    <td style={{ padding: "11px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700, color: "#D4A96A" }}>{row.pulse}</td>
                    <td style={{ padding: "11px 16px", textAlign: "center", fontSize: 12, fontFamily: "var(--font-dm-mono), monospace", fontWeight: 700, color: "#C4622D" }}>{row.bulk}</td>
                    <td style={{ padding: "11px 16px", fontSize: 12, color: "#8B7355", fontFamily: "var(--font-dm-mono), monospace" }}>{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.8, maxWidth: 720 }}>
            The $0.25/serving gap is real. At 5 sessions per week for a year it compounds to
            approximately $97. What Pulse costs more for: 150mg extra theanine, CarnoSyn® certified
            beta-alanine, PurCaf® organic caffeine sourcing, and erythritol-based sweetening. If those
            specifics matter to you, the premium is defensible. For pure formula breadth per dollar,
            BULK Black wins on value.
          </p>
        </section>

        {/* ── § 07 Category Winners ────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="Scorecard" figure="§ 07" title="Category winners" titleItalic="12 dimensions" size="sm" />

          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
            {categoryWinners.map((item, i) => (
              <div key={item.category} style={{ display: "grid", gridTemplateColumns: "1fr auto 2fr", borderBottom: i < categoryWinners.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", alignItems: "center" }}>
                <div style={{ padding: "13px 18px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650", letterSpacing: "0.06em" }}>{item.category}</div>
                <div style={{ padding: "13px 16px", borderLeft: "1px solid #EDE8DF", borderRight: "1px solid #EDE8DF" }}>
                  <span style={{
                    padding: "4px 10px",
                    backgroundColor: item.winner === "Tie" ? "#EDE8DF" : item.winner === "Legion Pulse" ? "rgba(212,169,106,0.15)" : "rgba(196,98,45,0.12)",
                    color: item.winner === "Tie" ? "#8A8480" : item.winner === "Legion Pulse" ? "#8B6E2A" : "#8B3A2C",
                    borderRadius: 12,
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap" as const,
                    fontWeight: 700,
                  }}>
                    {item.winner}
                  </span>
                </div>
                <div style={{ padding: "13px 18px", fontSize: 12, color: "#5C5650", lineHeight: 1.55 }}>{item.reason}</div>
              </div>
            ))}
          </div>

          {/* Score tally */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Legion Pulse", count: pulseWins, accent: "#D4A96A", bg: "rgba(212,169,106,0.08)" },
              { label: "Ties", count: ties, accent: "#8B7355", bg: "#EDE8DF" },
              { label: "BULK Black", count: bulkWins, accent: "#C4622D", bg: "rgba(196,98,45,0.08)" },
            ].map((s) => (
              <div key={s.label} style={{ padding: "16px", backgroundColor: s.bg, borderRadius: 10, textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: s.accent, lineHeight: 1, marginBottom: 4 }}>{s.count}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A89880" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── § 08 FAQ ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeading label="FAQ" figure="§ 08" title="Common" titleItalic="questions" size="sm" />

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqItems.map((faq, i) => (
              <details key={i} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderRadius: 8, border: "1px solid #EDE8DF", overflow: "hidden" }}>
                <summary style={{ padding: "15px 18px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, userSelect: "none" as const }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.4 }}>{faq.q}</span>
                  <span className="faq-icon" style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#8B7355", fontWeight: 700, fontSize: 14 }}>+</span>
                </summary>
                <p style={{ padding: "0 18px 16px", fontSize: 13, color: "#5C5650", lineHeight: 1.75, fontFamily: "var(--font-dm-sans), sans-serif" }}>{faq.a}</p>
              </details>
            ))}
          </div>
          <style>{`
            details[open] .faq-icon { background: #1A1714; border-color: #1A1714; color: #F2EBD9; }
            details summary::-webkit-details-marker { display: none; }
            details summary::marker { display: none; }
            details[open] .faq-icon::before { content: '−'; }
            details[open] .faq-icon { font-size: 16px; }
          `}</style>
        </section>

        {/* ── § 09 Bottom Line ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ padding: "36px 32px", backgroundColor: "#1A1714", borderRadius: 12, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,235,217,0.35)", marginBottom: 16 }}>
                CMP-006 · BOTTOM LINE
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.2, marginBottom: 24 }}>
                BULK Black wins on breadth and certification.{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A89880" }}>
                  Pulse wins on theanine depth, natural sourcing, and variety.
                </em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: "→", col: "#C4622D", text: "For drug-tested competitive athletes: BULK Black. Informed Choice is the recognised standard under WADA and USADA. Labdoor is not equivalent in that context." },
                  { icon: "→", col: "#D4A96A", text: "For skill-based training, technical sport, or anyone sensitive to caffeine jitter: Pulse. The 350mg theanine at 1:1 with caffeine produces a qualitatively different and more controlled focus." },
                  { icon: "→", col: "#C4622D", text: "For extended training sessions (90+ minutes): BULK Black. Dual-phase caffeine delivery sustains energy beyond what single-source allows." },
                  { icon: "→", col: "#D4A96A", text: "For strict natural ingredient requirements: Pulse. Organic caffeine, erythritol + stevia, no artificial anything — the most complete natural formula in this tier." },
                  { icon: "→", col: "#C4622D", text: "For pure formula value: BULK Black. 16 active ingredients vs 6, $0.25/serving cheaper, $97/year savings at 5 sessions per week." },
                  { icon: "→", col: "#8B7355", text: "Whichever you choose: add 3–5g creatine monohydrate daily from a separate source. Neither product includes it. The ergogenic data for creatine is unambiguous and neither formula substitutes for it." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 14, color: item.col, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                    <p style={{ fontSize: 14, color: "rgba(242,235,217,0.8)", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href={pulse.reviewSlug}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#D4A96A", color: "#1A1714", fontSize: 12, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Full Pulse Review →
                </Link>
                <Link href={bulkBlack.reviewSlug}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 12, fontWeight: 700, borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Full BULK Black Review →
                </Link>
                <Link href="/best/pre-workout"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid rgba(212,201,184,0.2)", color: "#A89880", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  All pre-workout rankings →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>References</p>
          <div style={{ padding: 20, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
            <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { text: "Giesbrecht T et al. (2010). The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutr Neurosci. 13(6):283–90.", url: "https://doi.org/10.1179/147683010X12611460764840" },
                { text: "Pérez-Guisado J, Jakeman PM. (2010). Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 24(5):1215–22.", url: "https://doi.org/10.1519/JSC.0b013e3181cb28e0" },
                { text: "Hobson RM et al. (2012). Effects of β-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 43(1):25–37.", url: "https://doi.org/10.1007/s00726-011-1200-z" },
                { text: "Trepanowski JF et al. (2011). The effects of chronic betaine supplementation on exercise performance. J Strength Cond Res. 25(12):3461–71.", url: "https://doi.org/10.1519/JSC.0b013e318217d48d" },
                { text: "Deijen JB, Orlebeke JF. (1994). Effect of tyrosine on cognitive function and blood pressure under stress. Brain Res Bull. 33(3):319–23.", url: "https://doi.org/10.1016/0361-9230(94)90200-3" },
                { text: "Harpaz E et al. (2017). The effect of caffeine on energy balance. J Basic Clin Physiol Pharmacol. 28(1):1–10.", url: "https://doi.org/10.1515/jbcpp-2016-0090" },
                { text: "Grgic J et al. (2018). Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr. 15:11.", url: "https://doi.org/10.1186/s12970-018-0216-0" },
              ].map((ref, i) => (
                <li key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {ref.text}{" "}
                  <a href={ref.url} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#C4622D", textDecoration: "none", fontFamily: "var(--font-dm-mono), monospace", fontSize: 11 }}>
                    doi →
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related content */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>Related</span>
            <span style={{ flex: 1, height: 1, backgroundColor: "#D4C9B8" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", textTransform: "uppercase" }}>Pre-Workout · Reviews</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginBottom: 28 }}>
            {[
              { href: "/reviews/legion-pulse-pre-workout-review-2026", accent: "#D4A96A", cat: "Full Review · FSP 9/10", title: "Legion Pulse Pre-Workout", teaser: "Complete FSP breakdown — 350mg theanine, Labdoor cert, 20 flavours. Every ingredient against its clinical trial." },
              { href: "/reviews/transparent-labs-bulk-black-review", accent: "#C4622D", cat: "Full Review · FSP 9/10", title: "TL BULK Black Pre-Workout", teaser: "16 active ingredients, Informed Choice certified, dual-phase caffeine. Full formula analysis and scoring." },
              { href: "/reviews/musclepharm-assault-pre-workout", accent: "#8B7355", cat: "Full Review · FSP 7/10", title: "MusclePharm Assault", teaser: "The budget pre-workout benchmark. Where clinical dose is hit and where it falls short of the two above." },
              { href: "/best/pre-workout", accent: "#2D6A4F", cat: "Category Roundup", title: "Best Pre-Workouts 2026", teaser: "Full category ranking — 12 products compared on formula, verification, and value. Every tier covered." },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="hub-card"
                style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                <div style={{ backgroundColor: card.accent }} />
                <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, textTransform: "uppercase", color: "#A89880", letterSpacing: "0.1em" }}>{card.cat}</span>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714" }}>{card.title}</p>
                  <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6 }}>{card.teaser}</p>
                  <span style={{ fontSize: 11, color: card.accent, fontWeight: 600, marginTop: 4 }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <Link href="/compare" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>← All Comparisons</Link>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Pre-Workout", "Legion", "Transparent Labs", "High-Stim"].map((tag) => (
                <span key={tag} style={{ padding: "3px 9px", fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", color: "#A89880", border: "1px solid #D4C9B8", borderRadius: 12, letterSpacing: "0.06em" }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
