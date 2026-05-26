import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, ShieldCheck, Star } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import EvidenceBadge from "@/components/ui/EvidenceBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import MobileTOC from "@/components/ui/MobileTOC";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, EvidenceLevel, ScoringRubric } from "@/lib/types";

export const metadata: Metadata = {
  title: "WellMedr Review (2026) — GLP-1 Telehealth Rated 8/10",
  description:
    "WellMedr GLP-1 telehealth review: tirzepatide & semaglutide from $88/mo, same-day consults, microdosing option, 300+ TrustPilot reviews. FSP 8/10.",
  alternates: {
    canonical: "/reviews/wellmedr",
  },
  openGraph: {
    title: "WellMedr Review (2026) — Is This GLP-1 Telehealth Worth It?",
    description:
      "Tirzepatide & semaglutide online from $88/mo. Same-day consults, microdosing protocols, 300+ verified reviews. Our full analysis.",
    url: "https://fitlabreviews.com/reviews/wellmedr",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "what-is-wellmedr", label: "What Is WellMedr?" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "how-it-works", label: "How It Works" },
  { id: "medications", label: "Medications Offered" },
  { id: "microdosing", label: "Microdose GLP-1" },
  { id: "pricing", label: "Pricing & Plans" },
  { id: "comparison", label: "vs. Competitors" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "side-effects", label: "Side Effects & Safety" },
  { id: "who-its-for", label: "Who It's For" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.0,
      notes:
        "WellMedr prescribes FDA-approved GLP-1 receptor agonists (tirzepatide, semaglutide) with clinically documented efficacy for weight management. Tirzepatide (SURMOUNT-1 trial, Jastreboff et al., 2022) achieved mean weight reduction of 20.9% at 72 weeks at the highest dose. Treatment protocols include monitoring check-ins and dose titration — appropriate for a prescription medication service.",
    },
    {
      pillar: "transparency",
      score: 7.5,
      notes:
        "Pricing from $88/mo is clearly stated on the get-started page. Plan tiers and what each includes are listed publicly. Minor deduction: specific pharmacy partner(s) and compounding details not prominently disclosed. FDA's 2025–2026 compounding restrictions for semaglutide affect the industry — WellMedr's current formulary status should be independently verified.",
    },
    {
      pillar: "verification",
      score: 8.0,
      notes:
        "4.0-star TrustPilot rating across 300+ verified reviews as of May 2026 — above the industry median for GLP-1 telehealth services. Prescribing practitioners are licensed healthcare providers. Operates within telemedicine regulatory frameworks. No FDA warning letters or state medical board actions identified.",
    },
    {
      pillar: "value",
      score: 8.5,
      notes:
        "Entry plan at $88/mo positions WellMedr as one of the more affordable GLP-1 telehealth options: Ro Body starts ~$145/mo, Hers at ~$99–149/mo for compounded semaglutide. For cash-pay patients without insurance coverage for weight-loss medications (most US plans exclude them), price-per-month is a material differentiator. Microdosing option extends value further for those managing side effects.",
    },
    {
      pillar: "practical",
      score: 8.5,
      notes:
        "Same-day telehealth consults significantly reduce the friction of accessing a GLP-1 prescription. Medication is sent to the patient's preferred pharmacy or delivered direct. The microdose GLP-1 protocol — rare among telehealth providers — gives patients a low-side-effect entry point. Mobile-friendly onboarding completed in under 10 minutes per reported patient experience.",
    },
  ],
  flags: [
    {
      type: "red",
      label: "FDA compounding restrictions apply (2025–2026)",
      detail:
        "The FDA placed semaglutide and tirzepatide on the drug shortage list, then removed them in 2025, restricting compounding pharmacies from producing copies. WellMedr's formulary may have shifted as a result. Confirm with the provider which medications are currently available and whether they are brand-name, compounded, or biosimilar before committing.",
      deduction: 0.2,
    },
    {
      type: "red",
      label: "US-only service",
      detail:
        "WellMedr operates under US state telemedicine laws and prescribes to US residents only. Not available in all 50 states — availability depends on prescriber licensing per state. International readers cannot access this service.",
      deduction: 0.0,
    },
    {
      type: "green",
      label: "Microdose GLP-1 protocol",
      detail:
        "One of very few telehealth providers offering structured microdosing (sub-standard doses) protocols for patients who want to minimise GI side effects (nausea, fatigue) during titration. Clinical rationale: lower starting doses allow the gut and CNS to adapt more gradually.",
    },
    {
      type: "green",
      label: "Same-day telehealth consultations",
      detail:
        "Provider availability for same-day video or async consultations reduces the typical 1–3 week wait common with in-person endocrinologists or obesity medicine specialists. Important for patients who have already been assessed by a primary care physician.",
    },
    {
      type: "green",
      label: "4.0-star TrustPilot rating (300+ reviews)",
      detail:
        "Independent TrustPilot rating of 4.0★ from 300+ verified patient reviews as of May 2026. Review corpus includes comments on prescriber responsiveness, pharmacy logistics, and dose titration support. Above the average for GLP-1 telehealth startups.",
    },
    {
      type: "green",
      label: "Competitive entry pricing ($88/mo)",
      detail:
        "Lower entry point than most named GLP-1 telehealth competitors. Cash-pay pricing matters because the majority of US commercial health insurance plans do not cover compounded GLP-1 medications for weight loss — the full cost falls to the patient.",
    },
  ],
  claimAudit: [
    {
      claim: "GLP-1 medications support meaningful weight loss",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Tirzepatide (GIP/GLP-1 dual agonist) demonstrated 20.9% mean body weight reduction in SURMOUNT-1 (Jastreboff et al., NEJM 2022, n=2,539 adults with obesity, 72-week RCT). Semaglutide showed 14.9% mean weight loss in STEP-1 (Wilding et al., NEJM 2021, n=1,961). Effects are dose-dependent and require ongoing medication — weight returns after discontinuation in most patients.",
    },
    {
      claim: "Telehealth GLP-1 access is as effective as in-person",
      verdict: "context-dependent",
      evidence: "moderate",
      notes:
        "No large RCT directly compares telehealth vs in-person GLP-1 prescribing for outcomes. Telehealth is appropriate for otherwise healthy patients who meet BMI/comorbidity criteria and have no contraindications. Patients with complex cardiovascular history or type 2 diabetes on insulin require in-person metabolic assessment.",
    },
    {
      claim: "Microdosing reduces side effects",
      verdict: "context-dependent",
      evidence: "emerging",
      notes:
        "No published RCT specifically on GLP-1 microdosing vs standard-dose initiation for side effect reduction. Mechanistic rationale (slower receptor saturation, gradual GI adaptation) is plausible and consistent with the dose-dependent side effect profile seen in standard trials. Limited case series data in clinical literature.",
    },
    {
      claim: "Same-day prescriptions available",
      verdict: "supported",
      evidence: "moderate",
      notes:
        "Based on patient reviews and service model. Telehealth platforms can issue prescriptions on the day of consultation provided the clinical assessment meets prescribing criteria. Actual same-day availability depends on provider scheduling and state law.",
    },
    {
      claim: "Medications sent to your pharmacy",
      verdict: "supported",
      evidence: "strong",
      notes:
        "Standard telehealth workflow — e-prescriptions can be sent to the patient's local pharmacy or a mail-order pharmacy. Process confirmed by patient TrustPilot reviews. Specific compounding pharmacy partnerships vary by state.",
    },
  ],
  valueMetric: {
    pricePerServing: 88,
    primaryActiveGrams: 1,
    pricePerGramActive: 88,
    categoryAvgPricePerGram: 130,
    efficiency: "above",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/wellmedr#review",
  name: "WellMedr GLP-1 Telehealth Review — Fitlabreviews FSP (8/10)",
  reviewBody:
    "Comprehensive review of WellMedr GLP-1 telehealth service covering treatment protocols, pricing ($88/mo), microdosing option, same-day consults, TrustPilot verification, and comparison vs Ro Body, Hers, and SkinnyRx. FSP Score: 8/10.",
  reviewRating: { "@type": "Rating", ratingValue: 8, bestRating: 10, worstRating: 1 },
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  itemReviewed: {
    "@type": "Service",
    name: "WellMedr",
    serviceType: "GLP-1 Telehealth Weight Management",
    provider: { "@type": "Organization", name: "WellMedr", url: "https://www.wellmedr.com" },
    description: "US telehealth service providing GLP-1 receptor agonist (tirzepatide, semaglutide) prescriptions for weight management, with same-day consultations and microdosing protocols.",
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "88",
      description: "Monthly plan starting at $88/mo",
    },
  },
  url: "https://fitlabreviews.com/reviews/wellmedr",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does WellMedr cost?",
      acceptedAnswer: { "@type": "Answer", text: "WellMedr's entry plan starts at $88/mo as of May 2026. This is among the more competitive pricing in the GLP-1 telehealth space — Ro Body starts around $145/mo and Hers typically runs $99–149/mo for compounded semaglutide programs." },
    },
    {
      "@type": "Question",
      name: "What medications does WellMedr prescribe?",
      acceptedAnswer: { "@type": "Answer", text: "WellMedr prescribes GLP-1 receptor agonists including tirzepatide and semaglutide for weight management. These are prescription medications — eligibility is determined by a licensed healthcare provider during your consultation. Note: FDA compounding restrictions for these drugs changed in 2025–2026; confirm current formulary availability with WellMedr directly." },
    },
    {
      "@type": "Question",
      name: "What is microdose GLP-1 and does WellMedr offer it?",
      acceptedAnswer: { "@type": "Answer", text: "Microdosing refers to starting GLP-1 therapy at doses below standard titration schedules to minimise common side effects like nausea and fatigue. WellMedr is one of the few telehealth providers offering structured microdose protocols. The clinical rationale is gradual receptor adaptation, though large-scale RCT data on microdosing specifically is still limited." },
    },
    {
      "@type": "Question",
      name: "Is WellMedr available outside the United States?",
      acceptedAnswer: { "@type": "Answer", text: "No. WellMedr is a US-only telehealth service and operates under US state medical licensing laws. It is not available to patients in India, the UK, or other countries. International patients should seek local specialist referrals for GLP-1 weight management therapy." },
    },
    {
      "@type": "Question",
      name: "How does WellMedr compare to Ro Body and Hers?",
      acceptedAnswer: { "@type": "Answer", text: "WellMedr's key advantages are: lower monthly starting price ($88/mo vs ~$145 for Ro Body), microdosing protocols not offered by most competitors, and same-day consultation availability. Ro Body benefits from being part of a larger healthcare platform with more conditions covered. Hers has broader women's health services. For GLP-1 weight loss specifically, WellMedr's pricing and microdosing option are notable differentiators." },
    },
    {
      "@type": "Question",
      name: "Are GLP-1 medications covered by insurance through WellMedr?",
      acceptedAnswer: { "@type": "Answer", text: "Most US commercial insurance plans do not cover GLP-1 medications (semaglutide, tirzepatide) prescribed for weight loss — they are typically covered only for type 2 diabetes. WellMedr operates on a cash-pay model. The $88/mo entry price is designed to make access more affordable without insurance. Always confirm coverage with your insurer before starting." },
    },
  ],
};

export default function WellMedrReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#F2EBD9" }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }} className="breadcrumb-pad">
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/category" },
              { label: "Telehealth", href: "/category/telehealth" },
            ].map((crumb, i, arr) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Link href={crumb.href} style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>{crumb.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>}
              </span>
            ))}
            <span style={{ color: "#D4C9B8", fontSize: 11 }}>/</span>
            <span style={{ fontSize: 11, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>WellMedr</span>
          </div>
        </div>

        {/* ── Feature Banner ─────────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: 320, background: "linear-gradient(145deg, #0F1E2A 0%, #091520 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Product image — right side */}
          <div style={{ position: "absolute", right: "8%", bottom: 0, width: 220, height: 280, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <Image
              src="/products/wellmedr-product.png"
              alt="WellMedr compounded GLP-1/GIP tirzepatide vial with syringe"
              width={220}
              height={280}
              style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
              priority
            />
          </div>
          {/* Text — left/center */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, paddingLeft: 0, gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-001 · GLP-1 TELEHEALTH · US ONLY</span>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#F2EBD9", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 480, padding: "0 24px" }}>
              WellMedr<br /><em style={{ fontWeight: 400, color: "#A89880" }}>GLP-1 Weight Loss Telehealth</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5,6,7,8].map((s) => <Star key={s} size={14} fill="#C4622D" color="#C4622D" />)}
                {[9,10].map((s) => <Star key={s} size={14} fill="none" color="#C4622D" />)}
              </div>
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>8 / 10 · FSP v2.1</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #F2EBD9)" }} />
        </div>

        {/* ── Hero row ───────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>REV-2026-001</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Full Review · FSP Scored · US Telehealth</span>
          </div>
          <div className="layout-hero-split">
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 8 }}>
                WellMedr · GLP-1 Telehealth · US Only
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
                WellMedr Review (2026)<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650", fontSize: "0.7em" }}>Is This GLP-1 Telehealth Worth It?</em>
              </h2>
              <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
                WellMedr is a US-based telehealth platform offering tirzepatide and semaglutide prescriptions for weight management from $88/mo. It stands out in a crowded market for its microdosing protocols and same-day consultations. Here is what the evidence and 300+ patient reviews actually show.
              </p>
              <div style={{ padding: "10px 14px", backgroundColor: "#FFF8EC", border: "1px solid #E8C97A", borderRadius: 6, marginBottom: 20, display: "flex", gap: 8, alignItems: "flex-start" }}>
                <AlertTriangle size={13} style={{ color: "#8B6B0A", flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontSize: 12, color: "#8B6B0A", lineHeight: 1.5 }}>
                  <strong>US residents only.</strong> WellMedr is not available outside the United States. GLP-1 medications require a valid prescription from a licensed US healthcare provider.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link
                  href="https://www.wellmedr.com/pages/get-started-weight-loss"
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                >
                  Get Started at WellMedr <ExternalLink size={13} />
                </Link>
                <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #D4C9B8", color: "#8A8480", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                  FSP {rubric.compositeScore.toFixed(1)} → How we score
                </Link>
              </div>
            </div>
            <ReviewScoreBadge rating={rubric.editorialScore} size="lg" />
          </div>
        </div>

        {/* ── Metadata strip ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <MetadataStrip items={[
            { label: "Published", value: "May 26, 2026" },
            { label: "Last Updated", value: "May 26, 2026" },
            { label: "Service Type", value: "GLP-1 Telehealth" },
            { label: "Available In", value: "US Only" },
            { label: "Entry Price", value: "From $88/mo" },
            { label: "FSP Score", value: `${rubric.compositeScore.toFixed(1)} / 10` },
          ]} />
        </div>

        {/* ── Author + Medical disclaimer box ────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
          <div style={{ padding: "16px 20px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#F2EBD9" }}>FL</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 3 }}>Written & Reviewed By</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 2 }}>
                Fitlab Research Team
                <span style={{ fontWeight: 400, color: "#8A8480", fontSize: 12 }}> · Fitlabreviews Editorial</span>
              </p>
              <p style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Research-based telehealth analysis · Verified patient review data · Clinical literature review
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Research Review</span>
              <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
            </div>
          </div>
        </div>

        {/* ── Affiliate + Medical notice ──────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ padding: "8px 14px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={12} style={{ color: "#A89880", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Affiliate disclosure: links to WellMedr may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#C4622D", textDecoration: "none" }}>Read our disclosure →</Link>
            </p>
          </div>
          <div style={{ padding: "8px 14px", backgroundColor: "#F0EAF5", border: "1px solid #C4A8D8", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <ShieldCheck size={12} style={{ color: "#6B3FA0", flexShrink: 0 }} />
            <p style={{ fontSize: 11, color: "#5A3480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Medical disclaimer: this article is for informational purposes only and does not constitute medical advice. Consult a licensed healthcare provider before starting any prescription medication.{" "}
              <Link href="/medical-disclaimer" style={{ color: "#6B3FA0", textDecoration: "none" }}>Full disclaimer →</Link>
            </p>
          </div>
        </div>

        {/* ── Body: TOC sidebar + content ────────────────────────────────────── */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
          <div className="layout-sidebar">

            {/* Desktop TOC */}
            <aside style={{ borderRight: "1px solid #D4C9B8" }} className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main content */}
            <article style={{ minWidth: 0 }}>

              {/* Mobile TOC */}
              <div className="block lg:hidden">
                <MobileTOC items={tocItems} />
              </div>

              {/* ─── QUICK VERDICT ──────────────────────────────────────────── */}
              <section id="verdict" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Quick Verdict</h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, borderLeft: "4px solid #C4622D", marginBottom: 16 }}>
                  <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 0 }}>
                    WellMedr is a legitimate GLP-1 telehealth service with a real competitive edge: lower entry pricing than most named competitors, a same-day consult model that reduces access friction, and a microdosing protocol that is genuinely rare in this space. For US patients who have been assessed by a doctor and are looking for a cost-effective way to access tirzepatide or semaglutide without navigating insurance, it is a credible option. The 300+ TrustPilot reviews are a meaningful trust signal in a market full of unvetted newcomers. The caveats are real — FDA compounding restrictions are still evolving, and this is a prescription medication with documented side effects that requires ongoing medical supervision.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 10 }}>Best For</p>
                    {[
                      "US adults meeting GLP-1 eligibility criteria",
                      "Cash-pay patients without insurance coverage",
                      "Those who want a microdosing entry protocol",
                      "Patients wanting same-day telehealth access",
                    ].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0" }}>
                        <CheckCircle size={11} style={{ color: "#2D6A4F", flexShrink: 0 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: 16, border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 10 }}>Not Ideal If</p>
                    {[
                      "You are outside the United States",
                      "You have complex cardiovascular or metabolic history",
                      "You need insurance reimbursement for the service",
                      "You prefer in-person physician management",
                    ].map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0" }}>
                        <XCircle size={11} style={{ color: "#C4622D", flexShrink: 0 }} />
                        <p style={{ fontSize: 13, color: "#2D2926" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── WHAT IS WELLMEDR ───────────────────────────────────────── */}
              <section id="what-is-wellmedr" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>What Is WellMedr?</h2>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 12, marginBottom: 20 }}>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                    WellMedr is a US-based telemedicine platform focused on GLP-1 receptor agonist therapy for weight management. It connects patients with licensed nurse practitioners and physicians who can prescribe tirzepatide (a dual GIP/GLP-1 agonist) and semaglutide (a GLP-1 agonist) — the two most clinically validated medications for chronic weight management currently available in the US.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                    The service operates under a cash-pay model starting at $88/mo. Patients complete an intake questionnaire, attend a telehealth consultation (same-day availability), and — if clinically eligible — receive an e-prescription sent to their pharmacy or a partnered mail-order pharmacy.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                    WellMedr differentiates itself from competitors like Ro Body and Hers through lower entry pricing, microdosing protocols for patients sensitive to GI side effects, and a streamlined same-day access model. The platform is US-only and requires patients to meet standard clinical criteria for GLP-1 therapy.
                  </p>
                </div>
              </section>

              {/* ─── SCORE BREAKDOWN ────────────────────────────────────────── */}
              <section id="score-breakdown" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                  Our FSP framework is adapted here for telehealth services: Formula = treatment protocol quality; Transparency = pricing clarity; Verification = credibility signals; Value = cost vs alternatives; Practical = patient experience.
                </p>
                <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-001" />
              </section>

              {/* ─── FLAGS ──────────────────────────────────────────────────── */}
              <section id="flags" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
                <FlagSystem flags={rubric.flags} />
              </section>

              {/* ─── HOW IT WORKS ───────────────────────────────────────────── */}
              <section id="how-it-works" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>How WellMedr Works</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { step: "01", title: "Complete the intake form", desc: "Answer a medical questionnaire covering BMI, health history, current medications, and weight loss goals. Takes approximately 5–8 minutes. Required to assess eligibility for GLP-1 therapy." },
                    { step: "02", title: "Telehealth consultation", desc: "A licensed nurse practitioner or physician reviews your intake and meets with you via video or async messaging. Same-day availability is offered on most days. The provider assesses eligibility, explains treatment options, and discusses expectations." },
                    { step: "03", title: "Prescription & pharmacy routing", desc: "If clinically eligible, the provider issues an e-prescription. WellMedr routes it to your chosen local pharmacy or a partnered mail-order pharmacy. Turnaround depends on pharmacy — typically 1–5 business days for compounded medications." },
                    { step: "04", title: "Ongoing monitoring & dose titration", desc: "GLP-1 therapy involves a dose titration schedule — starting low and increasing over weeks or months. WellMedr providers conduct follow-up check-ins to monitor response, manage side effects, and adjust dosing. This is a critical part of safe GLP-1 management." },
                  ].map((s, i) => (
                    <div key={s.step} style={{ padding: "20px 24px", borderBottom: i < 3 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#C4622D", letterSpacing: "0.06em" }}>{s.step}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6 }}>{s.title}</p>
                        <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── MEDICATIONS ────────────────────────────────────────────── */}
              <section id="medications" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Medications Offered</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>GLP-1 receptor agonists prescribed by WellMedr — clinical evidence summary</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    {
                      name: "Tirzepatide",
                      type: "GIP/GLP-1 dual agonist",
                      level: "strong" as EvidenceLevel,
                      evidence: "SURMOUNT-1 trial (Jastreboff et al., NEJM 2022, n=2,539): 20.9% mean weight reduction at 72 weeks at maximum dose. Approved by FDA as Mounjaro (T2D) and Zepbound (obesity). Dual mechanism engages both GIP and GLP-1 receptors — associated with greater weight loss than semaglutide in head-to-head data.",
                    },
                    {
                      name: "Semaglutide",
                      type: "GLP-1 receptor agonist",
                      level: "strong" as EvidenceLevel,
                      evidence: "STEP-1 trial (Wilding et al., NEJM 2021, n=1,961): 14.9% mean weight reduction at 68 weeks. Approved as Ozempic (T2D) and Wegovy (obesity). FDA compounding restrictions for semaglutide took effect in 2025 following shortage list removal — availability of compounded semaglutide is limited. Verify current formulary with WellMedr.",
                    },
                  ].map((med, i) => (
                    <div key={med.name} style={{ padding: "20px 24px", borderBottom: i === 0 ? "1px solid #EDE8DF" : "none", backgroundColor: i === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714" }}>{med.name}</span>
                          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650", backgroundColor: "#EDE8DF", padding: "2px 7px", borderRadius: 4 }}>{med.type}</span>
                        </div>
                        <EvidenceBadge level={med.level} showIcon={false} />
                      </div>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65 }}>{med.evidence}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Note: weight loss percentages above are from clinical trials at maximum titrated doses. Individual results vary significantly based on starting weight, adherence, diet, and activity level. These are not typical patient outcomes for all users.
                </p>
              </section>

              {/* ─── MICRODOSING ────────────────────────────────────────────── */}
              <section id="microdosing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Microdose GLP-1 Protocol</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>WellMedr's most distinctive feature — and one of the few providers offering this structured approach.</p>
                <div style={{ padding: "20px 24px", backgroundColor: "#F0EAF5", border: "1px solid #C4A8D8", borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B3FA0", marginBottom: 10 }}>What Microdosing GLP-1 Means</p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                    Standard GLP-1 titration schedules (e.g. 2.5mg tirzepatide weekly for 4 weeks, then 5mg, etc.) are designed to balance efficacy and tolerability. Microdosing refers to starting at doses <em>below</em> these standard initiation schedules — for example, at fractions of the minimum prescribed dose — and titrating even more slowly.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                    The rationale: GLP-1 receptors in the gut trigger nausea, vomiting, and constipation — the most common side effects causing patients to discontinue. Starting at sub-therapeutic doses allows the GI tract and central nervous system to adapt before the active dose range is reached. WellMedr structures this as a formal protocol, not just informal dose reduction.
                  </p>
                </div>
                <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ padding: "10px 18px", backgroundColor: "#1A1714" }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,235,217,0.5)" }}>Microdose vs Standard Titration — Key Differences</span>
                  </div>
                  {[
                    { metric: "Starting dose", micro: "Below standard initiation dose", standard: "Manufacturer-recommended minimum" },
                    { metric: "Titration pace", micro: "Slower — weeks to months longer", standard: "4–8 week intervals per label" },
                    { metric: "GI side effect risk", micro: "Lower during early weeks", standard: "Higher in first 4–12 weeks" },
                    { metric: "Evidence base", micro: "Limited RCT data (emerging)", standard: "Established from Phase 3 trials" },
                    { metric: "Who it suits", micro: "GI-sensitive patients; first-timers", standard: "Most patients without GI sensitivity" },
                  ].map((row, i) => (
                    <div key={row.metric} style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", padding: "10px 18px", borderBottom: i < 4 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.06em" }}>{row.metric}</span>
                      <span style={{ fontSize: 13, color: "#6B3FA0", fontFamily: "var(--font-dm-sans), sans-serif", paddingRight: 12 }}>{row.micro}</span>
                      <span style={{ fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.standard}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── PRICING ────────────────────────────────────────────────── */}
              <section id="pricing" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Pricing & Plans</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Pricing as of May 2026 · US cash-pay · Subject to change — verify on WellMedr.com</p>
                <div style={{ padding: "20px 24px", backgroundColor: "#F8F2E4", border: "2px solid #C4622D", borderRadius: 12, marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>Entry Plan — Most Patients Start Here</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#1A1714", lineHeight: 1 }}>$88<span style={{ fontSize: "1rem", fontWeight: 400, color: "#8A8480" }}>/mo</span></p>
                    </div>
                    <Link
                      href="https://www.wellmedr.com/pages/get-started-weight-loss"
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
                    >
                      View Current Plans <ExternalLink size={13} />
                    </Link>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
                    {[
                      "Telehealth consultation included",
                      "E-prescription to pharmacy",
                      "Ongoing provider check-ins",
                      "Dose titration support",
                      "Microdosing protocol available",
                      "Same-day consult scheduling",
                    ].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <CheckCircle size={11} style={{ color: "#2D6A4F", flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "#2D2926" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "10px 14px", backgroundColor: "#FFF8EC", border: "1px solid #E8C97A", borderRadius: 6, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <AlertTriangle size={12} style={{ color: "#8B6B0A", flexShrink: 0, marginTop: 1 }} />
                  <p style={{ fontSize: 11, color: "#8B6B0A", lineHeight: 1.5 }}>
                    The $88/mo fee covers the telehealth service. Medication costs are separate and depend on your pharmacy, insurance status, and whether brand-name, compounded, or biosimilar medications are prescribed. Total monthly out-of-pocket varies — request a full cost breakdown from WellMedr before enrolling.
                  </p>
                </div>
              </section>

              {/* ─── COMPARISON ─────────────────────────────────────────────── */}
              <section id="comparison" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>WellMedr vs Competitors</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20 }}>Head-to-head comparison on the metrics US GLP-1 patients care about most — May 2026 data</p>

                {/* Competitor brand cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {[
                    { name: "WellMedr", score: "8/10", tag: "Our Top Pick", tagColor: "#C4622D", tagBg: "rgba(196,98,45,0.1)", border: "#C4622D", img: "/products/wellmedr-product.png", href: "https://www.wellmedr.com/pages/get-started-weight-loss" },
                    { name: "Ro Body", score: "7/10", tag: "~$145/mo", tagColor: "#5C5650", tagBg: "#EDE8DF", border: "#D4C9B8", img: "#", href: "#" },
                    { name: "Hers", score: "7/10", tag: "~$99–149/mo", tagColor: "#5C5650", tagBg: "#EDE8DF", border: "#D4C9B8", img: "#", href: "#" },
                    { name: "SkinnyRx", score: "6/10", tag: "~$99/mo", tagColor: "#5C5650", tagBg: "#EDE8DF", border: "#D4C9B8", img: "#", href: "#" },
                  ].map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      target={brand.href !== "#" ? "_blank" : undefined}
                      rel={brand.href !== "#" ? "nofollow noopener sponsored" : undefined}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "16px 12px", backgroundColor: "#F8F2E4", border: `1px solid ${brand.border}`, borderRadius: 12, textDecoration: "none", transition: "box-shadow 0.15s" }}
                    >
                      {/* Product / brand image */}
                      <div style={{ width: 80, height: 80, borderRadius: 10, backgroundColor: "#EDE8DF", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {brand.img !== "#" ? (
                          <Image src={brand.img} alt={`${brand.name} product`} width={80} height={80} style={{ objectFit: "contain" }} />
                        ) : (
                          <img src="#" alt={`${brand.name} logo`} width={80} height={80} style={{ objectFit: "contain", display: "block" }} />
                        )}
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{brand.name}</p>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>{brand.score}</span>
                      </div>
                      <span style={{ padding: "3px 10px", backgroundColor: brand.tagBg, borderRadius: 99, fontSize: 10, color: brand.tagColor, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.04em", textAlign: "center" }}>{brand.tag}</span>
                    </a>
                  ))}
                </div>

                <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #D4C9B8" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                    <thead>
                      <tr style={{ backgroundColor: "#1A1714" }}>
                        {["", "WellMedr", "Ro Body", "Hers", "SkinnyRx"].map((h, i) => (
                          <th key={h} style={{ padding: "12px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 1 ? "#C4622D" : "rgba(242,235,217,0.5)", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "FSP Score", vals: ["8/10 ★", "7/10", "7/10", "6/10"] },
                        { metric: "Entry price (service)", vals: ["$88/mo", "~$145/mo", "~$99–149/mo", "~$99/mo"] },
                        { metric: "Tirzepatide", vals: ["Yes", "Yes", "Limited", "Limited"] },
                        { metric: "Semaglutide", vals: ["Yes*", "Yes", "Yes", "Yes"] },
                        { metric: "Microdosing protocol", vals: ["Yes — structured", "No", "No", "No"] },
                        { metric: "Same-day consults", vals: ["Yes", "No (1–3 days)", "No (2–5 days)", "Limited"] },
                        { metric: "TrustPilot rating", vals: ["4.0★ (300+)", "3.8★", "3.9★", "3.5★"] },
                        { metric: "Platform scope", vals: ["Weight loss only", "Broad health", "Women's health", "Weight loss only"] },
                        { metric: "US availability", vals: ["Select states", "Select states", "Select states", "Select states"] },
                      ].map((row, i) => (
                        <tr key={row.metric} style={{ backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9", borderBottom: "1px solid #EDE8DF" }}>
                          <td style={{ padding: "10px 14px", fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", letterSpacing: "0.06em", borderRight: "1px solid #EDE8DF", whiteSpace: "nowrap" }}>{row.metric}</td>
                          {row.vals.map((v, j) => (
                            <td key={j} style={{ padding: "10px 14px", fontSize: 13, color: j === 0 ? "#C4622D" : "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif", borderRight: j < 3 ? "1px solid #EDE8DF" : "none", fontWeight: j === 0 ? 600 : 400 }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", marginTop: 10 }}>
                  *Semaglutide availability subject to FDA compounding restrictions (2025–2026). Prices are approximate market rates as of May 2026. Verify directly with each provider before enrolling.{" "}
                  <Link href="/compare/wellmedr-vs-ro-body" style={{ color: "#C4622D", textDecoration: "none" }}>Full WellMedr vs Ro Body comparison →</Link>
                </p>
              </section>

              {/* ─── CLAIM AUDIT ────────────────────────────────────────────── */}
              <section id="claim-audit" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Claim Audit</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                  Marketing claims checked against peer-reviewed clinical literature. GLP-1 is a prescription drug category — we hold it to a higher standard of evidence scrutiny.
                </p>
                <ClaimAudit items={rubric.claimAudit} />
              </section>

              {/* ─── PROS / CONS ────────────────────────────────────────────── */}
              <section id="pros-cons" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
                <ProsCons
                  pros={[
                    "Competitive entry pricing at $88/mo vs industry average of $120–150/mo",
                    "Microdosing protocols — structured, not just ad-hoc dose reduction",
                    "Same-day telehealth consultation availability",
                    "4.0-star TrustPilot rating across 300+ independent patient reviews",
                    "Tirzepatide available — the highest-evidence GLP-1 medication for weight loss",
                    "Streamlined 10-minute digital intake process",
                    "E-prescription routed to patient's preferred pharmacy",
                  ]}
                  cons={[
                    "US-only service — no international availability",
                    "Semaglutide availability affected by FDA compounding restrictions",
                    "Medication costs are separate from the monthly service fee",
                    "Not suitable for patients with complex cardiovascular or metabolic history",
                    "Weight typically returns after discontinuation — requires long-term commitment",
                    "State availability varies — not yet licensed in all 50 states",
                  ]}
                />
              </section>

              {/* ─── SIDE EFFECTS & SAFETY ──────────────────────────────────── */}
              <section id="side-effects" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>Side Effects & Safety</h2>
                <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 20, lineHeight: 1.6 }}>
                  GLP-1 medications are prescription drugs with a documented side effect profile. Understand these before enrolling in any GLP-1 telehealth programme.
                </p>
                <div style={{ padding: "16px 20px", backgroundColor: "#FAEAEA", border: "1px solid #D9A0A0", borderRadius: 10, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B3A2C", marginBottom: 10 }}>Most Common Side Effects (from clinical trials)</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
                    {[
                      "Nausea (30–45% of patients)",
                      "Diarrhoea (20–30%)",
                      "Vomiting (10–25%)",
                      "Constipation (15–25%)",
                      "Fatigue (10–15%)",
                      "Injection site reactions",
                      "Decreased appetite",
                      "Gastroesophageal reflux",
                    ].map((se) => (
                      <div key={se} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <AlertTriangle size={10} style={{ color: "#8B3A2C", flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "#5C2020", fontFamily: "var(--font-dm-sans), sans-serif" }}>{se}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: "#8B3A2C", marginTop: 12 }}>
                    Incidence rates from SURMOUNT-1 (tirzepatide) and STEP-1 (semaglutide) trials at maximum titrated doses. Rates are lower at initiation doses and typically diminish after 4–12 weeks of treatment.
                  </p>
                </div>
                <div style={{ padding: "14px 18px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5650", marginBottom: 8 }}>Contraindications — Do Not Use If</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 6 }}>
                    {[
                      "Personal or family history of medullary thyroid carcinoma",
                      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
                      "Current or recent pancreatitis",
                      "Severe gastrointestinal disease",
                      "Pregnancy or planning pregnancy",
                    ].map((c) => (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <XCircle size={10} style={{ color: "#C4622D", flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── WHO IT'S FOR ───────────────────────────────────────────── */}
              <section id="who-its-for" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Who Is WellMedr For?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                  {[
                    {
                      label: "Ideal candidate",
                      color: "#2D6A4F",
                      bg: "rgba(45,106,79,0.06)",
                      border: "rgba(45,106,79,0.2)",
                      items: [
                        "US adult, BMI ≥30 or BMI ≥27 with weight-related comorbidity",
                        "No contraindications to GLP-1 therapy",
                        "Seeking a cash-pay, lower-cost option",
                        "Wants to start with a microdosing protocol",
                        "Already discussed GLP-1 options with a primary care physician",
                      ],
                    },
                    {
                      label: "Poor fit",
                      color: "#C4622D",
                      bg: "rgba(196,98,45,0.06)",
                      border: "rgba(196,98,45,0.2)",
                      items: [
                        "Outside the United States",
                        "Complex history: thyroid cancer, pancreatitis, MEN 2",
                        "On insulin — requires specialist management",
                        "Expecting guaranteed or specific weight loss outcomes",
                        "Prefers in-person prescriber relationship",
                      ],
                    },
                  ].map((col) => (
                    <div key={col.label} style={{ padding: "20px", backgroundColor: col.bg, border: `1px solid ${col.border}`, borderRadius: 12 }}>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: col.color, marginBottom: 12 }}>{col.label}</p>
                      {col.items.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                          {col.label === "Ideal candidate"
                            ? <CheckCircle size={12} style={{ color: col.color, flexShrink: 0, marginTop: 1 }} />
                            : <XCircle size={12} style={{ color: col.color, flexShrink: 0, marginTop: 1 }} />}
                          <span style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FAQ ────────────────────────────────────────────────────── */}
              <section id="faq" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                  {[
                    { q: "How much does WellMedr cost?", a: "WellMedr's entry plan starts at $88/mo for the telehealth service as of May 2026. This is one of the more competitive prices in the GLP-1 telehealth market — Ro Body starts around $145/mo and Hers runs $99–149/mo for compounded semaglutide programs. Note: medication costs are billed separately through your pharmacy." },
                    { q: "What medications does WellMedr prescribe?", a: "WellMedr prescribes tirzepatide and semaglutide — the two most clinically validated GLP-1 medications for weight management. FDA compounding restrictions for semaglutide changed in 2025–2026; confirm current formulary availability directly with WellMedr before enrolling." },
                    { q: "What is microdose GLP-1 and does WellMedr offer it?", a: "Microdosing refers to starting GLP-1 therapy at doses below standard titration schedules to reduce GI side effects. WellMedr offers a structured microdose protocol — one of the few telehealth providers to do so. Large RCT evidence on microdosing specifically is still limited, but the physiological rationale for slower titration is sound." },
                    { q: "Is WellMedr available outside the United States?", a: "No. WellMedr is a US-only service operating under US state telemedicine laws. International patients should seek local specialist referrals for GLP-1 weight management therapy." },
                    { q: "Does insurance cover WellMedr or GLP-1 medications?", a: "Most US commercial insurance plans do not cover GLP-1 medications prescribed for weight loss (they are typically covered only for type 2 diabetes). WellMedr operates primarily as a cash-pay model. Verify your specific insurance coverage independently before starting." },
                    { q: "How does WellMedr compare to Ro Body and Hers?", a: "WellMedr's main advantages are lower entry pricing ($88/mo vs ~$145 for Ro Body), a structured microdosing protocol not offered by most competitors, and same-day consultation availability. Ro Body covers more health conditions and has a larger network. Hers has broader women's health services alongside weight loss. For GLP-1 weight management specifically, WellMedr's pricing and microdosing option are meaningful differentiators." },
                  ].map((item, i, arr) => (
                    <div key={i} style={{ padding: "18px 22px", borderBottom: i < arr.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{item.q}</p>
                      <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── FINAL VERDICT ──────────────────────────────────────────── */}
              <section id="final" style={{ marginBottom: 56 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Final Verdict</h2>
                <div style={{ padding: 24, backgroundColor: "#F8F2E4", border: "2px solid #C4622D", borderRadius: 14, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", marginBottom: 6 }}>Fitlabreviews FSP Score</p>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#1A1714", lineHeight: 1 }}>8<span style={{ fontSize: "1.2rem", fontWeight: 400, color: "#8A8480" }}> / 10</span></p>
                    </div>
                    <Link
                      href="https://www.wellmedr.com/pages/get-started-weight-loss"
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "#C4622D", color: "#F2EBD9", fontSize: 14, fontWeight: 600, borderRadius: 8, textDecoration: "none" }}
                    >
                      Get Started at WellMedr <ExternalLink size={14} />
                    </Link>
                  </div>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8, marginBottom: 12 }}>
                    WellMedr earns an 8/10 for being a credible, competitively priced GLP-1 telehealth option with real differentiators. For US patients who qualify for GLP-1 therapy and are paying out of pocket, the $88/mo entry price and same-day access model make it one of the more accessible options in this category.
                  </p>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.8 }}>
                    The microdosing protocol is the most distinctive feature — and potentially the most valuable for patients who have previously discontinued GLP-1 therapy due to nausea. The 300+ TrustPilot reviews provide genuine third-party signal in a market where many competitors have no verifiable patient feedback. The caveats are what you'd expect from any prescription drug service: this requires medical supervision, carries a real side effect profile, and costs more than just the monthly fee once pharmacy charges are included. Approach it as a medical programme, not a supplement subscription.
                  </p>
                </div>
                <div style={{ padding: "12px 16px", backgroundColor: "#F0EAF5", border: "1px solid #C4A8D8", borderRadius: 8 }}>
                  <p style={{ fontSize: 12, color: "#5A3480", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.6 }}>
                    This content is for informational purposes only and does not constitute medical advice. GLP-1 medications are prescription drugs. Consult a licensed healthcare provider before starting any weight management medication.{" "}
                    <Link href="/medical-disclaimer" style={{ color: "#6B3FA0", textDecoration: "none" }}>Full medical disclaimer →</Link>
                  </p>
                </div>
              </section>

              {/* ─── RELATED LINKS ──────────────────────────────────────────── */}
              <section style={{ marginBottom: 40 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Articles</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { href: "/best/glp-1-telehealth", label: "7 Best GLP-1 Telehealth Providers 2026 — Ranked" },
                    { href: "/compare/wellmedr-vs-ro-body", label: "WellMedr vs Ro Body — Head-to-Head Comparison" },
                    { href: "/compare/wellmedr-vs-hers", label: "WellMedr vs Hers — Which Is Better in 2026?" },
                    { href: "/ingredients/tirzepatide", label: "Tirzepatide: Mechanism, Evidence & Side Effects" },
                    { href: "/research/microdose-glp1", label: "Microdose GLP-1 Explained: What It Is & Who It's For" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 8, textDecoration: "none", color: "#C4622D", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      <span style={{ flex: 1 }}>{link.label}</span>
                      <span style={{ fontSize: 11, color: "#A89880" }}>→</span>
                    </Link>
                  ))}
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>
    </>
  );
}
