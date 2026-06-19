import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "GLP-1 Companion Supplements: The 2026 Trend Explained",
  description: "As GLP-1 users look to mitigate muscle loss and gastrointestinal side effects, companion supplements have surged. We review the evidence behind the trend.",
  alternates: { canonical: "/blog/glp1-companion-supplements-2026" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GLP-1 Companion Supplements: The 2026 Trend Explained",
  description: "As GLP-1 users look to mitigate muscle loss and gastrointestinal side effects, companion supplements have surged. We review the evidence behind the trend.",
  image: "https://fitlabreviews.com/illustrations/glp1_companion_hero.png",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  author: {
    "@type": "Organization",
    name: "Fitlabreviews Editorial",
    url: "https://fitlabreviews.com/about",
  },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/glp1-companion-supplements-2026" },
  articleSection: "NUTRITION",
  wordCount: 1650,
};

const faqList = [
  {
    q: "Can berberine act as a natural alternative to semaglutide?",
    a: "While berberine has demonstrated mild efficacy in improving insulin sensitivity and modest weight reduction in some trials, it lacks the potent, targeted incretin-mimicking mechanism of prescription GLP-1 agonists. It should not be viewed as a substitute for medical therapy."
  },
  {
    q: "When is the best time to take fiber if I'm on a GLP-1 medication?",
    a: "Because GLP-1 agonists naturally delay gastric emptying, taking large doses of supplemental fiber simultaneously with oral medications can alter their absorption. It is generally advised to space fiber intake at least 2 hours away from other oral medications."
  },
  {
    q: "Why is muscle loss a specific concern with these medications?",
    a: "Rapid, significant weight loss induced by severe caloric restriction often results in the body breaking down muscle tissue for energy. Clinical data suggests up to 40% of the weight lost on GLP-1s can be lean mass if not counteracted by high protein intake and resistance training."
  },
  {
    q: "Are specialized 'GLP-1 companion' multivitamins necessary?",
    a: "Not necessarily. While micronutrient intake decreases alongside caloric intake, a standard, high-quality multivitamin is usually sufficient to bridge the gap. Specialized branding does not inherently improve the bioavailability of the vitamins."
  },
  {
    q: "Does whey protein interfere with GLP-1 side effects like nausea?",
    a: "Whey protein is generally well-tolerated, but because it is digesting alongside a delayed gastric emptying process, consuming very large boluses of liquid protein quickly can exacerbate nausea. Sipping protein slowly or splitting doses is recommended."
  },
  {
    q: "Can I use HMB without resistance training to save muscle?",
    a: "HMB primarily helps suppress muscle protein breakdown. While it offers some protective effects during caloric restriction, clinical consensus maintains that the mechanical stimulus of resistance training is required to actually stimulate new muscle protein synthesis effectively."
  }
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

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "rise-of-category", label: "The Rise of the \"Companion\" Category" },
  { id: "preserving-lean-mass", label: "Preserving Lean Mass" },
  { id: "navigating-gi-shift", label: "Navigating the GI Shift" },
  { id: "bridging-micronutrients", label: "Bridging the Micronutrient Gap" },
  { id: "the-verdict", label: "The Verdict" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
];

const refs = [
  {
    num: "1",
    text: "Sargeant, J. A., et al. (2019). 'Impact of GLP-1 receptor agonists on body composition.'",
    journal: "Diabetes, Obesity and Metabolism",
    url: "https://pubmed.ncbi.nlm.nih.gov/31140683/"
  },
  {
    num: "2",
    text: "Paddon-Jones, D., et al. (2008). 'Role of dietary protein in the sarcopenia of aging.'",
    journal: "The American Journal of Clinical Nutrition",
    url: "https://pubmed.ncbi.nlm.nih.gov/18469251/"
  },
  {
    num: "3",
    text: "Wilkinson, D. J., et al. (2013). 'Effects of leucine and its metabolite β-hydroxy-β-methylbutyrate on human skeletal muscle protein metabolism.'",
    journal: "The Journal of Physiology",
    url: "https://pubmed.ncbi.nlm.nih.gov/23551944/"
  },
  {
    num: "4",
    text: "McRorie, J. W., Jr (2015). 'Evidence-based approach to fiber supplements and clinically meaningful health benefits.'",
    journal: "Nutrition Today",
    url: "https://pubmed.ncbi.nlm.nih.gov/25972618/"
  },
  {
    num: "5",
    text: "Wilding, J. P. H., et al. (2021). 'Once-Weekly Semaglutide in Adults with Overweight or Obesity.'",
    journal: "The New England Journal of Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/33567185/"
  }
];

const relatedCards = [
  {
    title: "Whey vs. Casein for Muscle Retention",
    desc: "How different protein digestion rates impact muscle preservation during severe caloric deficits.",
    type: "REVIEW",
    href: "/research/wpi-vs-wpc-protein",
    img: "/illustrations/whey-protein-types.png",
  },
  {
    title: "The Soluble Fiber Deep Dive",
    desc: "Understanding how psyllium husk modulates gastric emptying and gut motility.",
    type: "INGREDIENT",
    href: "/ingredients/psyllium-husk",
    img: "/illustrations/psyllium-husk-fiber.png",
  },
  {
    title: "Berberine: The Hype Examined",
    desc: "A clinical look at the alkaloid heavily marketed as an over-the-counter metabolic booster.",
    type: "INGREDIENT",
    href: "/ingredients/berberine",
    img: "/illustrations/berberine-extract.png",
  },
  {
    title: "Top Multivitamins for 2026",
    desc: "Our lab-tested analysis of the most bioavailable micronutrient complexes.",
    type: "REVIEW",
    href: "/reviews/best-multivitamins",
    img: "/illustrations/multivitamin-pills.png",
  },
  {
    title: "HMB for Lean Mass",
    desc: "Does this leucine metabolite actually prevent muscle breakdown during weight loss?",
    type: "SCIENCE",
    href: "/ingredients/hmb",
    img: "/illustrations/hmb-molecule.png",
  },
  {
    title: "Probiotics for Digestion",
    desc: "Strain-specific approaches to alleviating functional constipation and bloat.",
    type: "SCIENCE",
    href: "/ingredients/probiotics-bifidobacterium",
    img: "/illustrations/probiotics-bacteria.png",
  }
];

export default function ArticleGLP1CompanionSupplements() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ReadingProgress />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px 20px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", textTransform: "uppercase", letterSpacing: "0.05em", color: "#8A7B6F", marginBottom: 32 }}>
          <Link href="/" style={{ color: "#8A7B6F", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "#8A7B6F", textDecoration: "none" }}>Blog</Link>
          <span>/</span>
          <span style={{ color: "#1A1714", fontWeight: 700 }}>GLP-1 Companion Supplements</span>
        </div>

        {/* Hero Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid #1A1714", paddingBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>BLG-006</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#3F4B43", letterSpacing: "0.15em" }}>NUTRITION · WEIGHT MANAGEMENT</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 48, alignItems: "center" }} className="hero-grid">
            <div>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#1A1714", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 24px" }}>
                GLP-1 Companion <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Supplements:</em><br />
                The 2026 Trend Explained
              </h1>
              
              <div style={{ display: "flex", gap: 24, fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", marginBottom: 32 }}>
                <span>June 2026</span>
                <span>8 min read</span>
                <span style={{ color: "#1A6B3A", fontWeight: 700 }}>Evidence-Led</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, padding: "14px 16px", backgroundColor: "#F6F8F6", borderRadius: 8, borderLeft: "3px solid #0F7A5A" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, fontWeight: 800, color: "#0F7A5A" }}>40%</span>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.5 }}>Up to 40% of weight lost on GLP-1 therapy can be lean muscle mass if not aggressively mitigated.</p>
                </div>
                <div style={{ display: "flex", gap: 12, padding: "14px 16px", backgroundColor: "#F6F8F6", borderRadius: 8, borderLeft: "3px solid #C98A1E" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, fontWeight: 800, color: "#C98A1E" }}>GI</span>
                  <p style={{ fontSize: 13, color: "#3F4B43", margin: 0, lineHeight: 1.5 }}>Gastrointestinal distress remains the primary reason patients discontinue therapy, driving supplement demand.</p>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: "100%", minHeight: 400, borderRadius: 16, overflow: "hidden" }}>
              <Image 
                src="/illustrations/glp1_companion_hero.png" 
                alt="Abstract representation of GLP-1 companion supplements" 
                fill 
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Row */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6", marginBottom: 48 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, fontWeight: 700, color: "#FFFFFF" }}>FE</span>
            </div>
            <span style={{ fontSize: 12, color: "#17211C", fontWeight: 600 }}>Fitlabreviews Editorial</span>
          </div>
          <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
          <span style={{ fontSize: 11, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>Fact-checked June 2026</span>
          <span style={{ width: 1, height: 14, backgroundColor: "#D4C9B8" }} />
          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>5 Peer-reviewed sources</span>
        </div>
      </div>

      {/* Layout Grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <div className="layout-sidebar" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, alignItems: "start" }}>
          
          <aside className="hidden lg:block" style={{ position: "sticky", top: 120, borderRight: "1px solid #D4C9B8", paddingRight: 32 }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="GLP-1 Companion Supplements: The 2026 Trend Explained" slug="glp1-companion-supplements-2026" />
            </div>
          </aside>

          <article style={{ maxWidth: 680, minWidth: 0 }}>
            {/* Mobile TOC */}
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>The supplement industry has pivoted aggressively toward <strong>"GLP-1 companion"</strong> products, but most lack clinical validation for directly mimicking the medication's effects.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Clinical focus has shifted toward using supplements to <strong>mitigate severe side effects</strong>, primarily lean mass loss and gastrointestinal distress.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Significant weight loss on GLP-1s often includes a <strong>25–40% reduction in lean mass</strong>, making strategic whey protein and HMB supplementation a focal point of nutritional therapy.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Soluble fiber and targeted probiotics</strong> are the most evidence-backed interventions for managing the delayed gastric emptying induced by the medication.</li>
              </ul>
            </div>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#1A1714", fontWeight: 500, marginBottom: 48 }}>
              With millions of patients now utilizing GLP-1 receptor agonists (such as semaglutide and tirzepatide) for weight management, a secondary market has exploded: the "companion supplement." Patients navigating dramatic metabolic shifts are turning to over-the-counter products to manage the physiological toll of rapid weight loss. The tension lies in separating the marketing hype of "natural alternatives" from the clinical reality of supportive nutritional care.
            </p>

            {/* Section 1 */}
            <section id="rise-of-category" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>The Rise of the "Companion" Category</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                As GLP-1 prescriptions surged throughout 2024 and 2025, the supplement industry responded with an influx of products branded explicitly for this demographic. These products generally fall into two distinct camps: those claiming to mimic the drug's incretin-boosting effects (often featuring ingredients like berberine or L-arginine), and those designed to support the body through the medication's side effects.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                Clinical endocrinologists have repeatedly cautioned against the former. There are no large-scale, peer-reviewed clinical trials demonstrating that over-the-counter botanical extracts can safely or effectively replace the targeted mechanism of prescription GLP-1 agonists. However, the latter category—supplements used to mitigate the unintended consequences of severe caloric restriction—is firmly rooted in established nutritional science.
              </p>
            </section>

            {/* Section 2 */}
            <section id="preserving-lean-mass" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>Preserving Lean Mass: The Protein Problem</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                The most urgent clinical concern surrounding rapid GLP-1-induced weight loss is sarcopenia (muscle loss). Trial data consistently shows that while these medications effectively reduce adipose tissue, up to 25–40% of the total weight lost can be lean body mass (Sargeant et al., 2019, Diabetes, Obesity and Metabolism).
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Whey Protein Isolation</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Because patients on GLP-1s experience profound appetite suppression, consuming adequate whole-food protein (the recommended 1.2–1.6 g/kg of body weight) becomes physically difficult. Whey protein isolate is utilized due to its rapid digestion rate and high leucine content, which serves as the primary trigger for muscle protein synthesis (Paddon-Jones et al., 2008, The American Journal of Clinical Nutrition).</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>02</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>HMB (β-Hydroxy β-Methylbutyrate)</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>While whey stimulates synthesis, HMB—a metabolite of leucine—has been shown to suppress muscle protein breakdown. Recent crossover trials demonstrate that combining calcium-HMB with whey protein helps maintain net muscle protein balance during periods of catabolic stress, such as severe caloric restriction (Wilkinson et al., 2013, The Journal of Physiology).</p>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 0 }}>
                The combination of high-quality protein supplementation and mechanical loading via resistance training remains the only proven method to combat the catabolic environment created by GLP-1 therapy.
              </p>

              <div style={{ marginTop: 24, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Prioritize hitting your daily protein target (often through liquid whey supplements if solid food is intolerable) and engage in resistance training before investing in unproven metabolic boosters.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="navigating-gi-shift" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>Navigating the Gastrointestinal Shift</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                The primary mechanism of action for medications like semaglutide involves significantly delaying gastric emptying. This mechanism is highly effective for inducing early satiety, but it directly causes the most frequently reported adverse events: nausea, constipation, and vomiting (Wilding et al., 2021, The New England Journal of Medicine).
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                Consequently, the second pillar of companion supplementation focuses on gut motility. Soluble, non-fermenting fibers, particularly psyllium husk, are frequently recommended. Unlike fermentable fibers (like inulin) which can exacerbate gas and bloating in a delayed-emptying environment, psyllium acts as a mechanical bulking agent that normalizes bowel function without adding to the gastrointestinal burden (McRorie, 2015, Nutrition Today).
              </p>
            </section>

            {/* Section 4 */}
            <section id="bridging-micronutrients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>Bridging the Micronutrient Gap</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                The math of severe caloric restriction is straightforward: when total food volume drops by 30-50%, micronutrient ingestion drops correspondingly. Patients on long-term GLP-1 therapy are at an increased risk for deficiencies in Vitamin D, B12, iron, and magnesium.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 0 }}>
                While the market is now flooded with "GLP-1 Specific Multivitamins," the biochemical reality is that a standard, highly bioavailable multivitamin complex serves the exact same function. The key is ensuring consistent daily intake rather than seeking out specialized (and often price-marked-up) proprietary blends.
              </p>

              <div style={{ marginTop: 24, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>You do not need a specialized "companion" multivitamin. A standard, third-party tested daily multivitamin is sufficient to bridge the nutritional gaps caused by reduced food intake.</p>
              </div>
            </section>

            {/* Inline CTA */}
            <div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13, color: "#FFF" }}>✉</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
                    Get insights like this — <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>straight to your inbox.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginBottom: 20, lineHeight: 1.5 }}>Evidence-based. No sponsors. Free every Thursday.</p>
                  <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Subscribe Free →</Link>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <section id="the-verdict" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>The Verdict: Do You Need Them?</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", marginBottom: 20 }}>
                The rapid adoption of GLP-1 therapies has necessitated a shift in how we approach nutritional supplementation. While the pursuit of a natural, over-the-counter alternative to semaglutide remains clinically unverified, the targeted use of functional supplements to manage the harsh physiological realities of the medication is a valid and necessary protocol.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#2D2926", margin: 0 }}>
                Supplements cannot mimic the potent incretin effects of prescription agonists. However, when utilized to preserve lean muscle tissue via specific protein interventions and to manage gastrointestinal motility through precise fiber sourcing, they serve as a critical bridge between medical intervention and long-term metabolic health.
              </p>
            </section>

            {/* Bottom Line Panel */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ height: 4, background: "linear-gradient(90deg, #0F7A5A 0%, #C98A1E 100%)" }} />
                <div style={{ backgroundColor: "#FFF5EB", padding: "24px 32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: "#1A1714", margin: 0 }}>The Bottom Line</h2>
                    <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, color: "#92620A", backgroundColor: "rgba(146,98,10,0.08)", border: "1px solid rgba(146,98,10,0.2)" }}>Grade B (Moderate)</span>
                  </div>
                  <p style={{ fontSize: 15, color: "#3D2E22", lineHeight: 1.6, margin: 0 }}>
                    While there is strong mechanistic rationale and extrapolated clinical data supporting the use of whey protein, HMB, and soluble fiber during severe caloric restriction, large-scale randomized controlled trials specifically testing these combinations alongside active GLP-1 therapy are still emerging.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <div className="block lg:hidden" style={{ marginBottom: 48 }}>
              <ShareButtons title="GLP-1 Companion Supplements: The 2026 Trend Explained" slug="glp1-companion-supplements-2026" />
            </div>

            <section id="faq" style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#8A7B6F", textTransform: "uppercase", letterSpacing: "0.1em" }}>FAQ</span>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#A89880" }}>{faqList.length} Questions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 24 }}>
                Frequently Asked <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Questions</em>
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((faq, i) => (
                  <details key={i} className="faq-item" style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                    <summary style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, listStyle: "none", cursor: "pointer" }}>
                      <span style={{ fontFamily: "var(--font-newsreader)", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", width: 28 }}>{String(i+1).padStart(2,"0")}</span>
                      <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#17211C" }}>{faq.q}</span>
                      <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="faq-toggle" style={{ color: "#0F7A5A", fontSize: 16, lineHeight: 1 }}>+</span>
                      </span>
                    </summary>
                    <div style={{ padding: "0 20px 18px 62px", borderTop: "1px solid #F2F8F4" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.8, paddingTop: 14, margin: 0 }}>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* References */}
            <section id="references" style={{ marginBottom: 48 }}>
              <details style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                <summary style={{ backgroundColor: "#FFF9F3", padding: "16px 20px", cursor: "pointer", listStyle: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#3D2E22", borderRadius: 10 }}>
                  Key References · {refs.length} sources <span style={{ float: "right", color: "#8A7B6F" }}>Show ↓</span>
                </summary>
                <div style={{ padding: "16px 20px" }}>
                  {refs.map((ref, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i !== refs.length - 1 ? "1px solid #F2F8F4" : "none" }}>
                      <span style={{ fontFamily: "var(--font-newsreader)", fontSize: 14, fontWeight: 800, color: "#E4E8E5" }}>{ref.num}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 12, color: "#586259", margin: "0 0 4px", lineHeight: 1.5 }}>
                          {ref.text} <em style={{ color: "#1A1714" }}>{ref.journal}</em>
                        </p>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#0F7A5A", textDecoration: "none", fontWeight: 700 }}>PubMed →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

          </article>
        </div>
      </div>

      {/* Similar Articles Container */}
      <div style={{ backgroundColor: "#F6F8F6", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <section style={{ paddingTop: 0 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 32 }}>
              Similar <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>articles</em>
            </h2>
            <div style={{ display: "flex", gap: 16, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 24 }} className="review-table-wrap">
              {relatedCards.map((card, i) => (
                <Link key={i} href={card.href} style={{ flex: "0 0 240px", scrollSnapAlign: "start", borderRadius: 14, border: "1px solid #EBD8C3", backgroundColor: "#FFFFFF", textDecoration: "none", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: 160, position: "relative", backgroundColor: "#F0EBE1" }}>
                    <Image src={card.img} alt={card.title} fill style={{ objectFit: "cover" }} />
                    <span style={{ position: "absolute", bottom: 12, left: 12, padding: "4px 8px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, letterSpacing: "0.1em", color: "#1A1714" }}>
                      {card.type}
                    </span>
                  </div>
                  <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-newsreader)", fontSize: "1.1rem", fontWeight: 700, color: "#1A1714", margin: "0 0 8px", lineHeight: 1.3 }}>{card.title}</p>
                    <p style={{ fontSize: 12, color: "#586259", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 32, paddingTop: 32, borderTop: "1px solid #E4E8E5" }}>
              <Link href="/blog" style={{ fontSize: 13, fontWeight: 700, color: "#0F7A5A", textDecoration: "none" }}>← Back to Blog</Link>
              <div style={{ display: "flex", gap: 6 }}>
                {["WEIGHT MANAGEMENT", "PROTEIN", "DIGESTION"].map(tag => (
                  <span key={tag} style={{ padding: "4px 10px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", color: "#8A7B6F", backgroundColor: "#FFFFFF" }}>{tag}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
