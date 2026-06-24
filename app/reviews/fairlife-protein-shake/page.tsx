import type { Metadata } from "next";
import Link from "next/link";
import { Star, AlertTriangle, ExternalLink } from "lucide-react";
import ReviewScoreBadge from "@/components/ui/ReviewScoreBadge";
import ProsCons from "@/components/ui/ProsCons";
import MetadataStrip from "@/components/ui/MetadataStrip";
import TableOfContents from "@/components/ui/TableOfContents";
import ScoreBreakdown from "@/components/ui/ScoreBreakdown";
import FlagSystem from "@/components/ui/FlagSystem";
import ClaimAudit from "@/components/ui/ClaimAudit";
import ValueMetricPanel from "@/components/ui/ValueMetricPanel";
import MobileTOC from "@/components/ui/MobileTOC";
import { computeComposite } from "@/lib/scoring";
import type { ReviewRating, ScoringRubric } from "@/lib/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Fairlife Protein Shake Review (2026): 30g, 150 Cal",
  title: "Fairlife Protein Shake Review (2026) — 8/10",
  description:
    "Fairlife Nutrition Plan review: 30g protein, 150 cal, lactose-free via ultra-filtration, 60% DV calcium. Taste, macros, sweetener analysis. FSP 8/10.",
  alternates: { canonical: "/reviews/fairlife-protein-shake" },
  openGraph: {
    title: "Fairlife Protein Shake Review (2026): 30g, 150 Cal",
    title: "Fairlife Protein Shake Review (2026) — 8/10",
    description:
      "Fairlife delivers 30g complete milk protein in 150 calories — best-in-class caloric efficiency for an RTD shake. Full FSP scoring, nutrition deep dive, and honest sweetener analysis.",
    url: "https://fitlabreviews.com/reviews/fairlife-protein-shake",
    type: "article",
  },
};

const tocItems = [
  { id: "verdict", label: "Quick Verdict" },
  { id: "score-breakdown", label: "Score Breakdown" },
  { id: "flags", label: "Red & Green Flags" },
  { id: "nutrition", label: "Nutrition Deep Dive" },
  { id: "protein-quality", label: "Protein Quality" },
  { id: "ultra-filtration", label: "Ultra-Filtration Technology" },
  { id: "taste", label: "Taste & Texture" },
  { id: "claim-audit", label: "Claim Audit" },
  { id: "who-for", label: "Who It's For" },
  { id: "sweeteners", label: "Safety & Sweeteners" },
  { id: "value", label: "Price & Value" },
  { id: "comparison", label: "vs Competitors" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "faq", label: "FAQ" },
  { id: "final", label: "Final Verdict" },
];

const rubric: ScoringRubric = {
  pillars: [
    {
      pillar: "formula",
      score: 8.5,
      notes:
        "30g complete milk protein per 340mL bottle at just 150 calories — the best caloric efficiency in the mainstream RTD category. The protein comes from ultra-filtered milk, delivering both whey and casein fractions for a combined fast + sustained amino acid release profile. 2g total sugar with 0g added sugar. The micronutrient fortification is genuinely useful: 60% DV calcium, 60% DV B12, 40% DV phosphorus, 35% DV zinc, and 25% DV vitamin D per bottle. The formula does rely on sucralose and acesulfame potassium for sweetness — a legitimate trade-off for the calorie profile, though some consumers prefer to avoid artificial sweeteners.",
    },
    {
      pillar: "transparency",
      score: 8.5,
      notes:
        "Full Nutrition Facts panel with 16 micronutrients itemised. Ingredient list is concise and readable: ultra-filtered milk, cocoa, natural and artificial flavors, cellulose gel and gum, sucralose, acesulfame potassium, carrageenan, vitamin and mineral blend. No proprietary blends. Coca-Cola subsidiary means FDA food-safety compliance is structural, not optional. Deduction: the exact whey-to-casein ratio resulting from ultra-filtration is never disclosed, and 'natural and artificial flavors' is a broad descriptor. For a consumer product in a regulated food category, this transparency level is well above average.",
    },
    {
      pillar: "verification",
      score: 8.0,
      notes:
        "Fairlife is regulated as a food product under FDA 21 CFR, not as a dietary supplement — this is a stricter regulatory tier with mandatory facility inspections, HACCP compliance, and allergen control plans. Coca-Cola's quality infrastructure includes supply chain audits, batch testing, and recall capability that most supplement brands lack entirely. No NSF Certified for Sport or Informed Sport marking, so competitive athletes subject to drug testing cannot rely on it for banned-substance screening. Independent third-party lab results are not published publicly.",
    },
    {
      pillar: "value",
      score: 7.5,
      notes:
        "At $2.50–3.50 per bottle (12-pack on Amazon: roughly $30–42, pricing as of June 2026), the cost per gram of protein is approximately $0.08–0.12/g. This is competitive within the RTD category — Premier Protein is $0.07–0.08/g, Muscle Milk Pro is $0.10–0.11/g, Core Power is $0.10–0.13/g. Fairlife sits at the category average. Compared to mixing your own whey isolate (~$0.03–0.04/g), RTD shakes carry a 2–3× convenience premium. That premium buys genuine value: no prep, no cleanup, consistent taste, shelf stability, and portability.",
    },
    {
      pillar: "practical",
      score: 9.0,
      notes:
        "Best-in-class practical score. Ready to drink with zero preparation. The chocolate variant is widely considered one of the best-tasting RTD shakes on the market — smooth, genuinely chocolate-forward, no chalky protein aftertaste. The 340mL bottle fits standard cup holders and gym bag pockets. Shelf-stable at room temperature with a long shelf life. Distribution is near-universal in the US: Walmart, Target, Costco, Amazon, convenience stores. Available in Chocolate, Vanilla, Strawberry, and Salted Caramel. The only practical limitation is that it ships heavy (liquid) — online orders can incur shipping costs.",
    },
  ],
  flags: [
    { type: "green", label: "30g protein in 150 calories", detail: "Best-in-class caloric efficiency for a mainstream RTD shake. Premier Protein delivers 30g in 160 cal; most RTD competitors are 170–230 cal for equivalent protein." },
    { type: "green", label: "Lactose-free via physical ultra-filtration", detail: "Lactose is physically removed through membrane filtration — not masked with added lactase enzyme. This makes it suitable for moderate lactose intolerance, though severe dairy allergy (casein/whey IgE) is still contraindicated." },
    { type: "green", label: "Complete milk protein (casein + whey)", detail: "Ultra-filtered milk retains both fast-absorbing whey and slow-release casein fractions. This dual-protein profile provides rapid post-exercise MPS stimulation plus sustained amino acid availability over 4–6 hours (Boirie et al., 1997, PNAS)." },
    { type: "green", label: "Exceptional micronutrient density", detail: "60% DV calcium (730mg), 60% DV B12 (1.4mcg), 40% DV phosphorus (510mg), 35% DV zinc (4mg), 25% DV vitamin D (5mcg) — per single bottle. This is meaningfully more than most RTD competitors deliver." },
    { type: "green", label: "FDA food-product regulation", detail: "Regulated under 21 CFR as a dairy food product, not a dietary supplement. This means mandatory facility inspections, HACCP compliance, and recall authority — a stricter tier than the self-regulated supplement industry." },
    { type: "red", label: "Sucralose + acesulfame potassium", detail: "Both sweeteners are FDA GRAS and have extensive safety data at typical consumption levels, but some consumers prefer to avoid them. Recent research (Suez et al., 2022, Cell) found individual gut microbiome responses to sucralose — clinical significance at dietary doses remains unclear.", deduction: 0.3 },
    { type: "red", label: "No sport certification (NSF/Informed Sport)", detail: "Competitive athletes subject to WADA testing cannot use Fairlife as a verified clean protein source. The product likely poses zero risk, but without third-party banned-substance screening, it cannot be recommended for tested athletes.", deduction: 0.2 },
    { type: "red", label: "Animal welfare controversy (2019)", detail: "An Animal Recovery Mission investigation at Fair Oaks Farms (Fairlife's former primary supplier) documented animal abuse in 2019. Fairlife subsequently severed ties with the farm and implemented third-party animal welfare audits. The incident is historical but relevant to ethical purchasing decisions." },
  ],
  claimAudit: [
    { claim: "\"30g High Quality Protein\"", verdict: "supported", evidence: "strong", notes: "The Nutrition Facts panel confirms 30g protein per 340mL bottle. The protein source — ultra-filtered milk — provides a complete amino acid profile with all essential amino acids, including ~2.5g leucine per serving (estimated from milk protein composition). 'High quality' is an accurate descriptor for a complete animal-sourced protein with a PDCAAS of 1.0." },
    { claim: "\"2g Sugar\"", verdict: "supported", evidence: "strong", notes: "Confirmed on the Nutrition Facts panel: 2g total sugars, 0g added sugars. The residual sugar is naturally occurring lactose that survives the ultra-filtration process. This is verified and accurate." },
    { claim: "\"8 Naturally Occurring Vitamins & Minerals\"", verdict: "context-dependent", evidence: "moderate", notes: "The '8 naturally occurring' framing is misleading. While milk naturally contains calcium, phosphorus, potassium, and B12, the ultra-filtration process concentrates some nutrients and depletes others. The label shows a 'vitamin and mineral blend' as an added ingredient — meaning at least some micronutrients are fortified, not purely 'naturally occurring.' The distinction matters for consumers who specifically seek whole-food nutrition." },
    { claim: "\"150 Calories\"", verdict: "supported", evidence: "strong", notes: "Confirmed on Nutrition Facts: 150 calories per bottle (340mL). This caloric density — 30g protein at 150 cal — represents a protein-to-calorie ratio of 80%, which is excellent. For comparison, a chicken breast is approximately 85% protein calories, making Fairlife remarkably close to whole-food protein efficiency." },
    { claim: "\"Helps satisfy hunger\"", verdict: "overstated", evidence: "moderate", notes: "Protein is the most satiating macronutrient (Paddon-Jones et al., 2008, Am J Clin Nutr), and 30g is a meaningful dose. However, Fairlife has not published satiety-specific RCTs for this product. The claim leverages general protein satiety evidence rather than product-specific data. Directionally accurate but technically overstated for a product-level claim." },
    { claim: "\"Lactose Free\"", verdict: "supported", evidence: "strong", notes: "Ultra-filtration physically removes lactose by passing milk through semi-permeable membranes that separate sugar molecules from protein. Independent testing confirms <0.5g lactose per serving — the FDA threshold for 'lactose free' labeling. This is a physical removal process, distinct from lactase-enzyme products that merely break down lactose." },
  ],
  valueMetric: {
    pricePerServing: 2.99,
    primaryActiveGrams: 30,
    pricePerGramActive: 0.10,
    categoryAvgPricePerGram: 0.09,
    efficiency: "at",
  },
  compositeScore: 0,
  editorialScore: 8 as ReviewRating,
};

rubric.compositeScore = computeComposite(rubric.pillars, rubric.flags);
const editorialScore = rubric.editorialScore;
const composite = rubric.compositeScore;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://fitlabreviews.com/reviews/fairlife-protein-shake#review",
  name: "Fairlife Nutrition Plan High Protein Shake — Fitlabreviews FSP Review",
  reviewBody:
    "Comprehensive evaluation of Fairlife Nutrition Plan High Protein Shake (Chocolate) using the Fitlab Scoring Protocol. Covers ultra-filtration technology, protein quality (casein + whey), micronutrient density, artificial sweetener analysis, caloric efficiency, taste, and competitive positioning vs Premier Protein, Core Power, and Muscle Milk.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: editorialScore,
    bestRating: 10,
    worstRating: 1,
  },
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  author: { "@type": "Organization", name: "Fitlab Research Team", url: "https://fitlabreviews.com/authors" },
  itemReviewed: {
    "@type": "Product",
    name: "Fairlife Nutrition Plan High Protein Shake",
    brand: { "@type": "Brand", name: "Fairlife" },
    category: "Ready-to-Drink Protein Shake",
    description: "Ultra-filtered milk protein shake. 30g protein, 150 calories, 2g sugar, lactose-free. Available in Chocolate, Vanilla, Strawberry, and Salted Caramel. Owned by The Coca-Cola Company.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "2.99",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Fairlife Protein Shake actually lactose-free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Fairlife uses a proprietary ultra-filtration process that physically removes lactose by passing milk through semi-permeable membranes. The final product contains <0.5g lactose per serving, meeting the FDA threshold for 'lactose free' labeling. This is a physical separation process — distinct from products that add lactase enzyme to break down lactose. People with moderate lactose intolerance generally tolerate it well. However, if you have a true dairy allergy (IgE-mediated response to casein or whey proteins), Fairlife is not safe — the proteins are concentrated, not removed." },
    },
    {
      "@type": "Question",
      name: "How does Fairlife compare to Premier Protein?",
      acceptedAnswer: { "@type": "Answer", text: "Both deliver 30g protein per bottle. Fairlife has 150 calories vs Premier Protein's 160 calories, and Fairlife's ultra-filtered milk protein provides both casein and whey fractions for sustained amino acid release. Premier Protein uses a milk protein concentrate + calcium caseinate blend. Taste is subjective but Fairlife consistently scores higher in consumer taste surveys. Premier Protein is typically $0.50–1.00 cheaper per bottle. If taste and caloric efficiency are priorities, Fairlife wins. If budget is the primary concern, Premier Protein offers comparable macros at a lower price point." },
    },
    {
      "@type": "Question",
      name: "Is sucralose in Fairlife Protein Shake safe?",
      acceptedAnswer: { "@type": "Answer", text: "Sucralose (Splenda) has FDA GRAS status and has been reviewed by regulatory agencies in over 80 countries. At typical dietary intake levels, the safety data is extensive and reassuring. A 2022 study in Cell (Suez et al.) found that sucralose can alter gut microbiome composition in some individuals — but the clinical significance at the doses found in a single protein shake is unclear. The WHO's 2023 assessment classified sucralose as 'possibly carcinogenic' (Group 2B) at very high chronic doses — the same category as aloe vera and pickled vegetables. For most consumers, one Fairlife shake per day poses negligible risk." },
    },
    {
      "@type": "Question",
      name: "Can I use Fairlife Protein Shake for weight loss?",
      acceptedAnswer: { "@type": "Answer", text: "Fairlife's macro profile — 30g protein at 150 calories with only 2g sugar — is well-suited for calorie-controlled diets. Protein is the most satiating macronutrient, and 30g per serving is a meaningful bolus for appetite management. In a calorie deficit, adequate protein intake (1.6–2.2g/kg/day per Schoenfeld & Aragon, 2018, JISSN) preserves lean mass while fat is lost. Fairlife can serve as a meal supplement or snack replacement within a structured eating plan. It is not a meal replacement on its own — 150 calories is insufficient for a full meal. Pair with whole foods (fruits, vegetables, whole grains) for complete nutrition." },
    },
    {
      "@type": "Question",
      name: "Is Fairlife owned by Coca-Cola?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The Coca-Cola Company fully acquired Fairlife LLC in 2020 (originally a joint venture established in 2012 with Select Milk Producers). Coca-Cola's ownership provides Fairlife with extensive quality infrastructure, distribution reach, and regulatory compliance resources. It also means Fairlife benefits from Coca-Cola's existing food safety systems and supply chain audits. For consumers, the practical implication is near-universal retail availability and consistent product quality across batches." },
    },
    {
      "@type": "Question",
      name: "How much protein do I actually absorb from Fairlife?",
      acceptedAnswer: { "@type": "Answer", text: "Milk protein has a PDCAAS (Protein Digestibility Corrected Amino Acid Score) of 1.0 — the maximum possible score, shared with egg and whey. This means virtually all 30g of protein is digestible and bioavailable. The dual casein + whey profile from ultra-filtered milk provides rapid leucine delivery (from whey fraction, peaking at ~60 minutes) plus sustained amino acid release (from casein fraction, over 4–6 hours). A 2009 study by Tang et al. in the Journal of Applied Physiology found that milk protein stimulates muscle protein synthesis at a rate intermediate between whey (faster) and casein (slower) — which may be optimal for sustained anabolism outside the immediate post-workout window." },
    },
    {
      "@type": "Question",
      name: "Does Fairlife contain carrageenan? Is that safe?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Fairlife contains carrageenan — a seaweed-derived thickener used to maintain texture and prevent separation. Food-grade carrageenan (undegraded) has FDA GRAS status and has been used in dairy products for decades. The safety concern stems from degraded carrageenan (poligeenan), which is not used in food products and has different chemical properties. The Joint FAO/WHO Expert Committee on Food Additives (JECFA) concluded that food-grade carrageenan is safe at current intake levels. Some individuals report gastrointestinal sensitivity — if you experience bloating or digestive discomfort, this ingredient may be a contributing factor." },
    },
    {
      "@type": "Question",
      name: "What happened with the Fairlife animal welfare controversy?",
      acceptedAnswer: { "@type": "Answer", text: "In June 2019, the Animal Recovery Mission (ARM) released undercover footage from Fair Oaks Farms — Fairlife's then-primary milk supplier in Indiana — showing animal abuse by farm workers. Fairlife responded by terminating its relationship with the specific farm, implementing mandatory third-party animal welfare audits across all supplier farms (using the FARM Program — Farmers Assuring Responsible Management), and increasing oversight. Three farm workers were criminally charged. The incident was a genuine failure of supply chain oversight. Fairlife's subsequent reforms are documented, but consumers for whom animal welfare is a primary concern should evaluate whether the corrective actions are sufficient." },
    },
  ],
};

const pros = [
  "30g complete protein at only 150 calories — best caloric efficiency in the RTD category",
  "Genuinely lactose-free via physical ultra-filtration, not enzyme-added",
  "Dual casein + whey protein for fast and sustained amino acid delivery",
  "Outstanding micronutrient profile: 60% DV calcium, 60% DV B12, 35% DV zinc per bottle",
  "Best-in-class taste among mainstream RTD protein shakes (chocolate especially)",
  "FDA-regulated food product with Coca-Cola quality infrastructure",
  "Near-universal retail availability across the US",
];
const cons = [
  "Contains sucralose and acesulfame potassium — not suitable for artificial sweetener avoiders",
  "No NSF Certified for Sport or Informed Sport — cannot recommend for WADA-tested athletes",
  "Premium price vs mixing your own whey powder (2–3× cost per gram of protein)",
  "Animal welfare controversy at former supplier farm (2019) — reforms implemented but history exists",
  "Carrageenan may cause GI discomfort in sensitive individuals",
  "Only 4g carbs — insufficient as a standalone meal replacement without additional food",
];

export default function FairlifeProteinShakePage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F2F8F4" }} className="breadcrumb-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
          <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
          <Link href="/reviews" style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.08em" }}>Reviews</Link>
          <span style={{ color: "#E4E8E5", fontSize: 11 }}>/</span>
          <span style={{ fontSize: 11, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Fairlife Protein Shake</span>
        </div>
      </div>

      {/* Feature Banner */}
      <div style={{ width: "100%", height: 300, background: "linear-gradient(145deg, #0A1628 0%, #162038 50%, #1A1714 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,235,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 40, gap: 12 }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(242,235,217,0.3)" }}>REV-2026-068 · RTD PROTEIN SHAKE</span>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1, maxWidth: 620, padding: "0 24px" }}>
            Fairlife Nutrition Plan<br /><em style={{ fontWeight: 400, color: "#6B8CC7" }}>High Protein Shake</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {Array.from({ length: editorialScore }, (_, i) => <Star key={i} size={14} fill="#7B3B1A" color="#7B3B1A" />)}
              {Array.from({ length: 10 - editorialScore }, (_, i) => <Star key={i + editorialScore} size={14} fill="none" color="#7B3B1A" />)}
            </div>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "rgba(242,235,217,0.5)", letterSpacing: "0.12em" }}>{editorialScore} / 10 · FSP v2.1</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, #FFFFFF)" }} />
      </div>

      {/* Hero row */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="pad-hero px-page">
        <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#586259", whiteSpace: "nowrap" }}>REV-2026-068</span>
          <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B3B1A" }}>Full Review · FSP Scored · RTD Protein</span>
        </div>
        <div className="layout-hero-split">
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 8 }}>
              Fairlife · Ready-to-Drink · Chocolate · 340 mL
            </p>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 16 }}>
              30 g Protein, 150 Calories —<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43", fontSize: "0.7em" }}>Ultra-Filtered, Lactose-Free</em>
            </h2>
            <p style={{ fontSize: 15, color: "#3F4B43", lineHeight: 1.7, maxWidth: 580, marginBottom: 24 }}>
              Coca-Cola&apos;s ultra-filtration technology strips lactose and concentrates protein from real milk. The result: 30 g of complete casein + whey protein in a 150-calorie bottle that actually tastes like chocolate milk — not protein powder dissolved in regret.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://amzn.to/3SkT5W8" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#7B3B1A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                Buy on Amazon <ExternalLink size={13} />
              </a>
              <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", border: "1px solid #E4E8E5", color: "#6B7770", fontSize: 12, borderRadius: 8, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", letterSpacing: "0.06em" }}>
                FSP {composite.toFixed(1)} → How we score
              </Link>
            </div>
          </div>
          <ReviewScoreBadge rating={editorialScore} size="lg" />
        </div>
      </div>

      {/* MetadataStrip */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <MetadataStrip items={[
          { label: "Brand", value: "Fairlife (Coca-Cola)" },
          { label: "Price", value: "~$2.50–3.50 / bottle" },
          { label: "Serving", value: "1 bottle (340 mL)" },
          { label: "Protein", value: "30 g (casein + whey)" },
          { label: "Calories", value: "150" },
          { label: "Score", value: "8/10" },
        ]} />
      </div>

      {/* Author box */}
      <div style={{ maxWidth: 1280, margin: "16px auto 0", padding: "0 24px" }}>
        <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1A1714", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>FL</span>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7770", marginBottom: 3 }}>Written & Reviewed By</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#1A1714", fontFamily: "var(--font-hanken), sans-serif", marginBottom: 2 }}>
              Fitlab Research Team
              <span style={{ fontWeight: 400, color: "#6B7770", fontSize: 12 }}> · Pankaj Singh, B. Pharm</span>
            </p>
            <p style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-hanken), sans-serif" }}>
              RTD protein analysis · Dairy filtration technology · Sports nutrition
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ padding: "3px 8px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 4, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Research Review</span>
            <span style={{ padding: "3px 8px", backgroundColor: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)", borderRadius: 4, fontSize: 10, color: "#2D6A4F", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>Evidence-Led</span>
          </div>
        </div>
      </div>

      {/* Affiliate notice */}
      <div style={{ maxWidth: 1280, margin: "12px auto 0", padding: "0 24px" }}>
        <div style={{ padding: "8px 14px", backgroundColor: "#F2F8F4", border: "1px solid #E4E8E5", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
          <AlertTriangle size={12} style={{ color: "#586259", flexShrink: 0 }} />
          <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif" }}>
            Affiliate disclosure: the Amazon link above may earn us a commission at no extra cost to you. Scores and verdicts are editorially independent.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#7B3B1A", textDecoration: "none" }}>Read our disclosure →</Link>
          </p>
        </div>
      </div>

      {/* Mobile TOC */}
      <div className="block lg:hidden" style={{ borderTop: "1px solid #E4E8E5", borderBottom: "1px solid #E4E8E5", marginTop: 16 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="px-page">
          <MobileTOC items={tocItems} />
        </div>
      </div>

      {/* Main content + sidebar */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* Desktop TOC */}
          <aside style={{ borderRight: "1px solid #E4E8E5" }} className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Main content */}
          <article style={{ minWidth: 0 }}>

            {/* ── Quick Verdict ── */}
            <section id="verdict" style={{ marginBottom: 56 }}>
              <div style={{ padding: "24px 28px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>Quick Verdict · REV-2026-068</p>
                <p style={{ fontSize: 15, color: "#C8BEA8", lineHeight: 1.8 }}>
                  Fairlife Nutrition Plan is the RTD protein shake that actually delivers on its bottle. Thirty grams of complete milk protein — both casein and whey, not just one fraction — at 150 calories with essentially no sugar. The ultra-filtration technology genuinely works: lactose is physically removed, not enzymatically masked, and the resulting protein density is the best in the mainstream RTD category. The taste is legitimately good — chocolate that tastes like chocolate, not like someone dissolved a vitamin in brown water. The micronutrient profile is a genuine bonus, not marketing filler: 60% DV calcium and B12 per bottle. Two honest deductions: artificial sweeteners (sucralose + ace-K) will be a dealbreaker for some consumers, and there is no sport certification for WADA-tested athletes. For everyone else — gym-goers, busy professionals, people managing weight, or anyone who wants convenient protein that doesn&apos;t taste like sacrifice — this is one of the best options on the market.
                </p>
              </div>
              <div className="review-pillar-grid">
                {rubric.pillars.map((p) => (
                  <div key={p.pillar} style={{ padding: "16px 18px", backgroundColor: "#F6F8F6", borderRight: "1px solid #F2F8F4" }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#586259", marginBottom: 6 }}>{p.pillar}</p>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#7B3B1A", marginBottom: 4 }}>{p.score.toFixed(1)} / 10</p>
                    <p style={{ fontSize: 11, color: "#6B7770" }}>{p.notes.split(".")[0]}.</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Score Breakdown ── */}
            <section id="score-breakdown" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Score Breakdown</h2>
              <ScoreBreakdown rubric={rubric} reviewCode="REV-2026-068" />
              <p style={{ fontSize: 12, color: "#6B7770", marginTop: 12 }}>
                FSP v2.1 composite: {composite.toFixed(2)}/10 → editorial score: {editorialScore}/10.
                Weighting: Formula 35% · Transparency 25% · Verification 20% · Value 12% · Practical 8%.
              </p>
            </section>

            {/* ── Flags ── */}
            <section id="flags" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Red & Green Flags</h2>
              <FlagSystem flags={rubric.flags} />
            </section>

            {/* ── Nutrition Deep Dive ── */}
            <section id="nutrition" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Nutrition Deep Dive</h2>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                Every number on a protein shake label deserves scrutiny — most RTD products pad their calorie counts with sugar or fat to improve taste. Fairlife does the opposite. Here is what one 340 mL bottle of the Chocolate variant actually delivers:
              </p>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Nutrient</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Amount</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>% DV</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { nutrient: "Protein", amount: "30 g", dv: "60%", note: "Complete amino acid profile — PDCAAS 1.0" },
                      { nutrient: "Calories", amount: "150", dv: "—", note: "80% of calories from protein — near whole-food efficiency" },
                      { nutrient: "Total Fat", amount: "2.5 g", dv: "3%", note: "Minimal fat means tight caloric control" },
                      { nutrient: "Total Carbs", amount: "4 g", dv: "1%", note: "Includes 1 g fiber, 2 g naturally occurring sugar" },
                      { nutrient: "Total Sugars", amount: "2 g", dv: "—", note: "0 g added sugar — residual lactose from filtration" },
                      { nutrient: "Calcium", amount: "730 mg", dv: "60%", note: "More than two cups of regular milk" },
                      { nutrient: "Vitamin B12", amount: "1.4 mcg", dv: "60%", note: "Crucial for neurological function and RBC production" },
                      { nutrient: "Phosphorus", amount: "510 mg", dv: "40%", note: "Bone mineralisation partner with calcium" },
                      { nutrient: "Zinc", amount: "4 mg", dv: "35%", note: "Immune function + testosterone biosynthesis cofactor" },
                      { nutrient: "Vitamin D", amount: "5 mcg", dv: "25%", note: "Calcium absorption + immune regulation" },
                      { nutrient: "Iodine", amount: "60 mcg", dv: "40%", note: "Thyroid hormone synthesis" },
                      { nutrient: "Potassium", amount: "460 mg", dv: "10%", note: "Electrolyte balance, blood pressure regulation" },
                      { nutrient: "Sodium", amount: "230 mg", dv: "10%", note: "Moderate — not excessive for a flavoured dairy product" },
                      { nutrient: "Magnesium", amount: "70 mg", dv: "15%", note: "Muscle contraction + sleep quality cofactor" },
                      { nutrient: "Selenium", amount: "10 mcg", dv: "20%", note: "Antioxidant defence via glutathione peroxidase" },
                    ].map((row, i) => (
                      <tr key={row.nutrient} style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{row.nutrient}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.amount}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#0F7A5A", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600 }}>{row.dv}</td>
                        <td style={{ padding: "10px 14px", fontSize: 12, color: "#6B7770", lineHeight: 1.5 }}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.65 }}>
                The standout metric: 80% of Fairlife&apos;s calories come from protein. A boneless chicken breast is approximately 85% protein calories. An RTD shake matching whole-food protein efficiency — while also delivering 60% DV calcium and 60% DV B12 — is a genuinely impressive formulation achievement.
              </p>
            </section>

            {/* ── Protein Quality ── */}
            <section id="protein-quality" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Protein Quality: Casein + Whey, Not Just One</h2>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                Most protein supplements use either whey concentrate, whey isolate, or casein. Fairlife&apos;s ultra-filtered milk retains both protein fractions in roughly the ratio they exist in cow&apos;s milk — approximately 80% casein and 20% whey.
              </p>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                This distinction matters for muscle protein synthesis (MPS) kinetics. A 1997 study by Boirie et al. in the Proceedings of the National Academy of Sciences established that whey and casein have fundamentally different absorption profiles:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                {[
                  { fraction: "Whey (~20%)", speed: "Fast", peak: "60–90 min", duration: "2–3 hours", benefit: "Rapid leucine spike → acute MPS stimulation" },
                  { fraction: "Casein (~80%)", speed: "Slow", peak: "3–4 hours", duration: "5–7 hours", benefit: "Sustained amino acid drip → anti-catabolic, prolonged MPS" },
                  { fraction: "Combined (Fairlife)", speed: "Biphasic", peak: "60 min + 3–4 h", duration: "5–7 hours", benefit: "Both fast MPS trigger and sustained amino acid availability" },
                ].map((item) => (
                  <div key={item.fraction} style={{ padding: "14px 18px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8, display: "grid", gridTemplateColumns: "120px 1fr", gap: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>{item.fraction}</p>
                      <p style={{ fontSize: 10, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace" }}>{item.speed} absorption</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.5 }}>
                        Peak: {item.peak} · Duration: {item.duration}
                      </p>
                      <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.5, marginTop: 4 }}>{item.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                Tang et al. (2009, Journal of Applied Physiology) found that milk protein — the blend of whey and casein — stimulates muscle protein synthesis at a rate intermediate between whey (highest acute MPS) and casein (most prolonged MPS). For contexts outside the immediate post-workout window — meal replacement, pre-bed nutrition, or between-meal protein — this sustained profile may be more functionally useful than pure whey.
              </p>
              <div style={{ padding: 16, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderLeft: "3px solid #0F7A5A", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", letterSpacing: "0.08em", marginBottom: 8 }}>Leucine content estimate</p>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>
                  Milk protein contains approximately 8.5% leucine by weight. At 30 g total protein, Fairlife delivers an estimated 2.5 g leucine per bottle — above the 2.0–2.5 g leucine threshold identified by Churchward-Venne et al. (2012, British Journal of Nutrition) as the minimum to maximally stimulate MPS in young adults. Older adults may need 3.0+ g, meaning two-thirds of a bottle reaches their threshold.
                </p>
              </div>
            </section>

            {/* ── Ultra-Filtration Technology ── */}
            <section id="ultra-filtration" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Ultra-Filtration: How It Works</h2>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                Fairlife&apos;s core technology is a multi-stage membrane filtration system. Regular milk passes through semi-permeable membranes with pore sizes calibrated to separate molecules by size and weight. The process is purely physical — no chemical additives, no enzymatic treatments.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
                {[
                  { step: "01", title: "Separation", desc: "Raw milk passes through ceramic or polymeric membranes. Lactose (small molecule, MW ~342 Da) passes through; proteins (large molecules, MW 14,000–23,000 Da for whey, ~25,000 Da for casein micelles) are retained." },
                  { step: "02", title: "Concentration", desc: "Retained protein fraction is concentrated, increasing protein density per volume while reducing sugar and overall calorie content. Fat content is separately adjusted." },
                  { step: "03", title: "Recombination", desc: "Concentrated protein, adjusted fat, and a controlled amount of permeate (water + minerals) are recombined to achieve the target nutrition profile: 30 g protein, 150 cal, 2 g sugar." },
                ].map((item) => (
                  <div key={item.step} style={{ padding: "16px 18px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                    <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 28, fontWeight: 800, color: "#E4E8E5", lineHeight: 1 }}>{item.step}</span>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", marginTop: 8, marginBottom: 6 }}>{item.title}</p>
                    <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                The practical result: you get more protein and fewer carbs per millilitre than regular milk, with lactose physically absent rather than enzymatically cleaved. Products like Lactaid add lactase enzyme to break lactose into glucose and galactose — the sugar is still there (and still contributes calories), it&apos;s just pre-digested. Fairlife&apos;s approach removes the lactose entirely, which is why it can achieve 2 g sugar at 30 g protein — a ratio no enzyme-treated milk product can match.
              </p>
            </section>

            {/* ── Taste & Texture ── */}
            <section id="taste" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Taste & Texture</h2>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                This is where Fairlife separates from the pack. Most RTD protein shakes suffer from the same problem: a grainy, artificially sweet, vaguely chemical flavour that reminds you at every sip that you are drinking a protein supplement. Fairlife&apos;s Chocolate variant tastes like actual chocolate milk — a richer, thicker version of what you drank as a child, with none of the chalky aftertaste that plagues whey-concentrate-based RTDs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { variant: "Chocolate", verdict: "The flagship. Rich cocoa flavour, smooth mouthfeel, no grittiness. Consistently rated the best-tasting mainstream RTD protein shake in consumer surveys. Served cold, it genuinely competes with regular chocolate milk." },
                  { variant: "Vanilla", verdict: "Clean vanilla with mild sweetness. Less polarising than chocolate but also less distinctive. Good as a base for smoothies — blends well with fruit without competing flavours." },
                  { variant: "Strawberry", verdict: "Natural-ish strawberry flavour — not the artificial candy taste common in strawberry proteins. Thinner mouthfeel than chocolate. Best served very cold." },
                  { variant: "Salted Caramel", verdict: "The most dessert-like option. Noticeably sweeter than other variants. Works as an evening treat or coffee alternative. Salt note is subtle but present." },
                ].map((item) => (
                  <div key={item.variant} style={{ padding: "12px 16px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.variant}</p>
                    <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6 }}>{item.verdict}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                The texture advantage comes from the milk protein base. Whey-concentrate RTDs rely on thickeners and stabilisers to approximate milk&apos;s mouthfeel. Fairlife starts with actual concentrated milk — the creamy texture is inherent, not engineered. Cellulose gel and carrageenan are present for consistency, but the base texture comes from the protein itself.
              </p>
            </section>

            {/* ── Claim Audit ── */}
            <section id="claim-audit" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Claim Audit</h2>
              <ClaimAudit items={rubric.claimAudit} />
            </section>

            {/* ── Who It's For ── */}
            <section id="who-for" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Who It&apos;s For (and Who Should Skip It)</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 16 }}>
                <div style={{ padding: "20px 22px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 12 }}>Ideal For</p>
                  <ul style={{ paddingLeft: 16 }}>
                    {[
                      "Gym-goers who want convenient post-workout protein without a shaker",
                      "People managing weight — 30 g protein at 150 cal supports satiety in a calorie deficit",
                      "Lactose-intolerant individuals who miss real dairy protein shakes",
                      "Busy professionals who need a grab-and-go protein source between meals",
                      "Older adults who struggle to hit daily protein targets from whole food alone",
                      "Anyone who values taste — Fairlife is one of very few RTDs that people drink by choice, not obligation",
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 8 }}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: "20px 22px", backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B2020", marginBottom: 12 }}>Not Recommended For</p>
                  <ul style={{ paddingLeft: 16 }}>
                    {[
                      "Anyone with a true dairy allergy (IgE-mediated) — the proteins are concentrated, not removed",
                      "WADA-tested athletes who require NSF Certified for Sport or Informed Sport verification",
                      "Strict artificial-sweetener avoiders — sucralose + ace-K are core to the formula",
                      "Budget-maximisers — mixing whey powder is 2–3× cheaper per gram of protein",
                      "Those seeking a complete meal replacement — 150 cal is a snack, not a meal",
                      "Consumers for whom the 2019 animal welfare controversy is disqualifying",
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 8 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Safety & Sweeteners ── */}
            <section id="sweeteners" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Safety & Sweeteners: The Honest Take</h2>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 16 }}>
                The most common objection to Fairlife is the artificial sweetener content. Here is what the current evidence actually shows — not the Instagram panic version, and not the industry dismissal version:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Sucralose</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, marginBottom: 8 }}>
                    FDA GRAS status. Approved in 80+ countries. The ADI (Acceptable Daily Intake) is 5 mg/kg/day — for a 70 kg adult, that is 350 mg/day. A single Fairlife shake contains a small fraction of this.
                  </p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, marginBottom: 8 }}>
                    Suez et al. (2022, Cell) found that sucralose altered gut microbiome composition and glycaemic responses in some — but not all — participants over a 2-week exposure period. The changes were individualised and reversed after cessation. Clinical significance at dietary intake levels (one shake/day) is unknown.
                  </p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>
                    The WHO&apos;s International Agency for Research on Cancer (IARC) in 2023 classified sucralose&apos;s related compound aspartame — not sucralose itself — as &quot;possibly carcinogenic&quot; (Group 2B). The same classification applies to aloe vera extract and pickled vegetables. This classification reflects limited evidence, not confirmed risk.
                  </p>
                </div>
                <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Acesulfame Potassium (Ace-K)</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, marginBottom: 8 }}>
                    FDA GRAS status since 1988. Used as a sweetness synergist with sucralose — allows lower doses of each sweetener to achieve the target sweetness level. The ADI is 15 mg/kg/day.
                  </p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>
                    Less studied than sucralose or aspartame individually. Some animal studies (Bandyopadhyay et al., 2008) showed gut microbiome effects at high chronic doses, but human data at dietary intake levels is limited. Not considered a significant safety concern at the amounts present in a single protein shake.
                  </p>
                </div>
                <div style={{ padding: "16px 20px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>Carrageenan</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>
                    A seaweed-derived thickener. Food-grade (undegraded) carrageenan has FDA GRAS status and JECFA approval. The safety concern relates to degraded carrageenan (poligeenan), which is chemically distinct and not used in food. Some individuals report GI sensitivity — bloating, gas, or discomfort — which may be real but is not universal. If you experience digestive issues with Fairlife, carrageenan is one potential contributor.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, backgroundColor: "#FFF8F0", border: "1px solid #E5C4B8", borderRadius: 8, marginTop: 16 }}>
                <AlertTriangle size={18} color="#0F7A5A" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65 }}>
                  <strong>Our editorial position:</strong> At one bottle per day, Fairlife&apos;s sweetener load is well within established safety limits and poses negligible risk for most adults. The artificial sweetener trade-off is what makes 30 g protein at 150 calories with 2 g sugar possible — without them, Fairlife would need to be either higher calorie (real sugar) or taste significantly worse (unsweetened). If you strongly prefer to avoid artificial sweeteners, look at Orgain Clean Protein or OWYN — but expect fewer protein grams, more sugar, or both.
                </p>
              </div>
            </section>

            {/* ── Price & Value ── */}
            <section id="value" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Price & Value</h2>
              <ValueMetricPanel metric={rubric.valueMetric} activeIngredientLabel="milk protein" />
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginTop: 16, marginBottom: 16 }}>
                Pricing context (as of June 2026, US market):
              </p>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 480, width: "100%" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Format</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Cost</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>$/g Protein</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { format: "Single bottle (retail)", cost: "$3.29–3.99", perg: "$0.11–0.13" },
                      { format: "12-pack (Amazon)", cost: "$29.98–41.99", perg: "$0.08–0.12" },
                      { format: "18-pack (Costco)", cost: "$28.99–32.99", perg: "$0.05–0.06" },
                    ].map((row, i) => (
                      <tr key={row.format} style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#1A1714" }}>{row.format}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.cost}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#0F7A5A", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600 }}>{row.perg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 13, color: "#6B7770", marginTop: 12, lineHeight: 1.65 }}>
                Costco&apos;s 18-pack is the best value — at $0.05–0.06/g protein, it approaches the cost of mixing your own whey powder while delivering the convenience premium for free. If you drink Fairlife regularly, the Costco SKU is the financially rational choice.
              </p>
            </section>

            {/* ── Comparison ── */}
            <section id="comparison" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>vs Competitors</h2>
              <div className="review-table-wrap" style={{ marginBottom: 16 }}>
                <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Product</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Protein</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Calories</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Sugar</th>
                      <th style={{ padding: "10px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Price</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259" }}>Key Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Fairlife Nutrition Plan", protein: "30 g", cal: "150", sugar: "2 g", price: "~$2.99", diff: "Best taste + caloric efficiency", highlight: true },
                      { name: "Premier Protein", protein: "30 g", cal: "160", sugar: "1 g", price: "~$2.29", diff: "Budget king — best value per gram" },
                      { name: "Core Power Elite", protein: "42 g", cal: "230", sugar: "7 g", price: "~$4.49", diff: "Highest protein — same parent company" },
                      { name: "Muscle Milk Pro", protein: "32 g", cal: "160", sugar: "2 g", price: "~$3.49", diff: "NSF Certified for Sport" },
                      { name: "OWYN Plant Protein", protein: "20 g", cal: "170", sugar: "4 g", price: "~$3.29", diff: "Vegan, allergy-friendly (no dairy/soy)" },
                      { name: "Orgain Clean Protein", protein: "20 g", cal: "140", sugar: "0 g", price: "~$2.79", diff: "No artificial sweeteners (stevia)" },
                    ].map((row, i) => (
                      <tr key={row.name} style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: row.highlight ? "rgba(15,122,90,0.05)" : i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                        <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: row.highlight ? 700 : 400, color: "#1A1714" }}>{row.name}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.protein}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.cal}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.sugar}</td>
                        <td style={{ padding: "10px 14px", fontSize: 13, color: "#3F4B43", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace" }}>{row.price}</td>
                        <td style={{ padding: "10px 14px", fontSize: 12, color: "#6B7770" }}>{row.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: 16, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderLeft: "3px solid #0F7A5A", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#0F7A5A", letterSpacing: "0.08em", marginBottom: 8 }}>Editorial pick by use case</p>
                <ul style={{ paddingLeft: 16 }}>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 6 }}><strong>Best taste + convenience:</strong> Fairlife Nutrition Plan (this review)</li>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 6 }}><strong>Best budget:</strong> Premier Protein — comparable macros at ~$0.50–1.00 less per bottle</li>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 6 }}><strong>Most protein per bottle:</strong> Core Power Elite (42 g) — but at a higher calorie cost</li>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 6 }}><strong>WADA-tested athletes:</strong> Muscle Milk Pro — NSF Certified for Sport</li>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6, marginBottom: 6 }}><strong>Vegan / dairy-free:</strong> OWYN — but only 20 g protein per serving</li>
                  <li style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.6 }}><strong>No artificial sweeteners:</strong> Orgain Clean Protein — stevia-sweetened, but only 20 g protein</li>
                </ul>
              </div>
            </section>

            {/* ── Pros & Cons ── */}
            <section id="pros-cons" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>Pros & Cons</h2>
              <ProsCons pros={pros} cons={cons} />
            </section>

            {/* ── FAQ ── */}
            <section id="faq" style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 20, letterSpacing: "-0.02em" }}>FAQ</h2>
              <div style={{ border: "1px solid #E4E8E5", borderRadius: 12, overflow: "hidden" }}>
                {faqSchema.mainEntity.map((item, i) => (
                  <details key={i} className="faq-item" style={{ backgroundColor: i % 2 === 0 ? "#F6F8F6" : "#FFFFFF" }}>
                    <summary>{item.name}</summary>
                    <p className="faq-answer">{item.acceptedAnswer.text}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Final Verdict ── */}
            <section id="final" style={{ marginBottom: 48 }}>
              <div style={{ padding: 24, backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3F4B43", marginBottom: 12 }}>Final Verdict — REV-2026-068</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>Fairlife Nutrition Plan High Protein Shake: 8/10</p>
                <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 1.75, marginBottom: 16 }}>
                  Fairlife is the rare product that actually earns its premium positioning. The ultra-filtration technology delivers what it promises — genuinely lactose-free protein from real milk, at a caloric efficiency (30 g / 150 cal) that matches whole chicken breast. The casein + whey dual-protein profile is nutritionally superior to single-fraction competitors for sustained amino acid delivery. The micronutrient fortification is a genuine bonus, not label decoration. And the taste — particularly Chocolate — is the best in the mainstream RTD category by a meaningful margin.
                </p>
                <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 1.75, marginBottom: 16 }}>
                  The deductions are real but bounded: sucralose and ace-K are well within safety limits at one bottle per day but will exclude artificial-sweetener avoiders; the absence of sport certification means WADA-tested athletes need to look elsewhere; and the 2019 animal welfare incident at a supplier farm — while addressed with structural reforms — is part of the brand&apos;s record.
                </p>
                <p style={{ fontSize: 14, color: "#6B7770", lineHeight: 1.75, marginBottom: 20 }}>
                  <strong style={{ color: "#FFFFFF" }}>Buy Fairlife if:</strong> you want the best-tasting, most nutritionally complete RTD protein shake available in the US market and are comfortable with artificial sweeteners. <strong style={{ color: "#FFFFFF" }}>Choose Premier Protein if:</strong> budget is your primary concern. <strong style={{ color: "#FFFFFF" }}>Choose Muscle Milk Pro if:</strong> you need sport certification for drug-tested competition.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 20, borderTop: "1px solid #3D3830", flexWrap: "wrap" }}>
                  <a href="https://amzn.to/3SkT5W8" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#0F7A5A", color: "#FFFFFF", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
                    Buy on Amazon <ExternalLink size={13} />
                  </a>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#3F4B43" }}>FSP Score: {composite.toFixed(1)}/10 → Editorial: {editorialScore}/10</span>
                </div>
              </div>
            </section>

            {/* ── References ── */}
            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 12 }}>Research References</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { text: "Boirie Y et al. Slow and fast dietary proteins differently modulate postprandial protein accretion. Proc Natl Acad Sci USA, 1997; 94(26): 14930–14935.", url: "https://pubmed.ncbi.nlm.nih.gov/9405716/" },
                  { text: "Tang JE et al. Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. J Appl Physiol, 2009; 107(3): 987–992.", url: "https://pubmed.ncbi.nlm.nih.gov/19589961/" },
                  { text: "Churchward-Venne TA et al. Role of protein and leucine in stimulating muscle protein synthesis. J Nutr, 2012; 142(12): 2205–2213.", url: "https://pubmed.ncbi.nlm.nih.gov/23097267/" },
                  { text: "Suez J et al. Personalized microbiome-driven effects of non-nutritive sweeteners on human glucose tolerance. Cell, 2022; 185(18): 3307–3328.", url: "https://pubmed.ncbi.nlm.nih.gov/35987213/" },
                  { text: "Paddon-Jones D et al. Protein, weight management, and satiety. Am J Clin Nutr, 2008; 87(5): 1558S–1561S.", url: "https://pubmed.ncbi.nlm.nih.gov/18469287/" },
                  { text: "Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. J Int Soc Sports Nutr, 2018; 15: 10.", url: "https://pubmed.ncbi.nlm.nih.gov/29497353/" },
                  { text: "USDA FoodData Central. Fairlife Nutrition Plan Chocolate (FDC ID varies by entry). Accessed June 2026.", url: "https://fdc.nal.usda.gov/" },
                  { text: "Joint FAO/WHO Expert Committee on Food Additives (JECFA). Safety evaluation of carrageenan. WHO Technical Report Series, 2015.", url: "https://www.who.int/publications/m/item/carrageenan" },
                ].map((ref, i) => (
                  <div key={i} style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#586259", flexShrink: 0 }}>[{i + 1}]</span>
                    <p style={{ fontSize: 12, color: "#6B7770", lineHeight: 1.6 }}>{ref.text}{" "}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: "#7B3B1A", textDecoration: "none", fontSize: 10, fontFamily: "var(--font-jetbrains), monospace" }}>PubMed ↗</a></p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* Related reviews */}
      <div style={{ borderTop: "1px solid #E4E8E5", backgroundColor: "#F2F8F4", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#586259", marginBottom: 16 }}>Related Reviews</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { name: "Optimum Nutrition Gold Standard Whey", score: "9/10", href: "/reviews/optimum-nutrition-gold-standard-whey" },
              { name: "Dymatize ISO100 Hydrolyzed", score: "9/10", href: "/reviews/dymatize-iso100-review-2026" },
              { name: "Transparent Labs Bulk Black", score: "8/10", href: "/reviews/transparent-labs-bulk-black-review" },
              { name: "Legion Pulse Pre-Workout", score: "9/10", href: "/reviews/legion-pulse-pre-workout-review-2026" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ padding: 16, backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 4 }}>{item.name}</p>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A" }}>{item.score}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
