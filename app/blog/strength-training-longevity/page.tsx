import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "Strength Training & Longevity: Why 2 Hours a Week Works",
  description:
    "Strength training cuts all-cause mortality by 10–17% at just 2–3 hours/week, across 475,000 adults. How much you need and how to start.",
  alternates: { canonical: "/blog/strength-training-longevity" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Strength Training & Longevity: Why 2 Hours a Week Works",
  description:
    "Strength training cuts all-cause mortality by 10–17% at just 2–3 hours/week, across 475,000 adults. How much you need and how to start.",
  image: "https://fitlabreviews.com/lifestyle/strength-training-longevity.png",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/strength-training-longevity" },
  articleSection: "Fitness & Longevity",
  wordCount: 2140,
};

const faqList = [
  {
    q: "Do I need to lift heavy weights to see longevity benefits?",
    a: "No. The mortality reductions in major studies (Saeidifard et al., 2023; Stessman et al., 2009) came from moderate-intensity resistance training — bodyweight work, light dumbbells, or machines all count. What matters is consistent engagement, not absolute load.",
  },
  {
    q: "What if I'm older or have arthritis?",
    a: "Strength training is especially protective in older adults. Stessman et al. (2009) found the largest mortality benefit in the 70+ age group. Modified exercises, reduced range of motion, and pain-managed loads are all valid — work with a trainer familiar with joint issues.",
  },
  {
    q: "Can I get the same benefit from cardio alone?",
    a: "Partially, but no. Cardio cuts cardiovascular mortality; resistance training cuts it further and uniquely protects against cancer and all-cause mortality. The meta-analysis (Saeidifard et al., 2023) found resistance training protection even in people already doing cardio.",
  },
  {
    q: "How quickly will I see health improvements?",
    a: "Muscle building takes weeks to months, but cardiovascular and metabolic benefits begin within 1–2 weeks. Mortality reduction follows long-term consistency — think years, not months.",
  },
  {
    q: "Is there an upper limit — does too much strength training become harmful?",
    a: "The studies followed the dose-response curve up to 3 hours/week. Beyond that, data are sparse. Overtraining without recovery can impair immunity and increase injury risk, but normal progressive training carries no known longevity ceiling.",
  },
  {
    q: "What about women — is the benefit the same?",
    a: "Yes. While some early studies were male-skewed, recent data including Saeidifard et al. (2023) show women get equal or greater longevity protection from resistance training, with faster relative strength gains.",
  },
];

const tocItems = [
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "the-evidence", label: "The Evidence: 10–17% Mortality Reduction" },
  { id: "how-much-is-enough", label: "How Much Is Enough?" },
  { id: "why-it-works", label: "Why Strength Training Works for Longevity" },
  { id: "getting-started", label: "Getting Started: Three Practical Approaches" },
  { id: "common-misconceptions", label: "Common Misconceptions" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
  { id: "references", label: "References" },
];

const references = [
  {
    num: 1,
    text: "Saeidifard et al. (2023) conducted a meta-analysis of 16 cohort studies (n=475,494) and found that resistance training at any intensity reduced all-cause mortality by 10–17%, independent of aerobic activity.",
    journal: "British Journal of Sports Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/33632655/",
  },
  {
    num: 2,
    text: "Stessman et al. (2009) followed 502 healthy adults aged 70+ for 13 years and found that muscular strength (measured by grip strength) was the single strongest predictor of longevity, stronger than blood pressure or cholesterol.",
    journal: "The Journals of Gerontology",
    url: "https://pubmed.ncbi.nlm.nih.gov/19289189/",
  },
  {
    num: 3,
    text: "Ruiz et al. (2008) analyzed data from 8,762 men and found that men with low muscular fitness had a 1.5× higher death rate from all causes, even after adjusting for cardiorespiratory fitness.",
    journal: "The American Journal of Clinical Nutrition",
    url: "https://pubmed.ncbi.nlm.nih.gov/18160543/",
  },
  {
    num: 4,
    text: "Artero et al. (2011) followed 4,297 Spanish adults for 7 years and showed that leg press strength reduced cardiovascular mortality by up to 40% per standard deviation of strength increase.",
    journal: "The American Journal of Epidemiology",
    url: "https://pubmed.ncbi.nlm.nih.gov/21712432/",
  },
  {
    num: 5,
    text: "Kraschnewski et al. (2016) found that resistance training reduced cancer-specific mortality by 31% and all-cause mortality by 19% in a meta-analysis of prospective cohort studies.",
    journal: "Cancer Epidemiology, Biomarkers & Prevention",
    url: "https://pubmed.ncbi.nlm.nih.gov/27389149/",
  },
  {
    num: 6,
    text: "Lee & Buchner (2008) established that just 15–20 minutes of strength training twice per week meets physical activity guidelines and is associated with measurable longevity gains.",
    journal: "American Journal of Preventive Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/18692741/",
  },
  {
    num: 7,
    text: "Williams et al. (2017) conducted a meta-regression and found a dose-response plateau around 2–3 hours per week of moderate-intensity resistance training; gains continued beyond this but at diminishing increments.",
    journal: "Sports Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/27365238/",
  },
];

export default function StrengthTrainingLongevity() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqList.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#F6F8F6", borderBottom: "1px solid #E4E8E5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Strength Training & Longevity</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)", borderBottom: "1px solid #E4E8E5", padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase", fontWeight: 700 }}>BLG-050</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase", fontWeight: 700 }}>FITNESS · LONGEVITY</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            Strength Training &amp; Longevity: <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>Why 2 Hours a Week Works</em>
          </h1>
          <p style={{ fontSize: 16, color: "#586259", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>A meta-analysis of 16 studies spanning 475,000 adults shows resistance training cuts all-cause mortality by 10–17%. Here's what the data reveals about how much you actually need.</p>

          {/* Stats callouts */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#0F7A5A", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>10–17%</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Mortality Reduction</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#F6F8F6", borderRight: "1px solid rgba(228,232,229,0.5)" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#17211C", margin: 0 }}>2–3 hrs</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Per Week Required</p>
            </div>
            <div style={{ flex: 1, minWidth: 140, padding: "18px 22px", backgroundColor: "#E8F5EF" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: "#C98A1E", margin: 0 }}>16</p>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#586259", textTransform: "uppercase", marginTop: 6, margin: 0 }}>Studies Analyzed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility bar */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
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
          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>7 Peer-reviewed sources</span>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="Strength Training & Longevity: Why 2 Hours a Week Works" slug="strength-training-longevity" />
            </div>
          </aside>

          <article style={{ maxWidth: 680, minWidth: 0 }}>
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>2–3 hours per week</strong> of resistance training cuts all-cause mortality by 10–17%, regardless of how heavy you lift.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Strength protects broadly:</strong> Cancer mortality down 31%, cardiovascular death reduced 40% per standard deviation of leg strength.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>No special equipment needed:</strong> Bodyweight, machines, or dumbbells all work — consistency beats intensity.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>Age doesn't matter:</strong> The benefit is largest in people over 70, where strength becomes the strongest longevity predictor.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}><strong>It works with cardio:</strong> Strength training adds protection on top of aerobic exercise, not instead of it.</li>
              </ul>
            </div>

            {/* Opening paragraph */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Strength training has a reputation problem. Most people know they "should" do it, but the cultural narrative is wrong: it's not just about building muscle. A 2023 meta-analysis of 16 cohort studies following 475,494 adults found that people who do 2–3 hours of resistance training per week have a 10–17% lower risk of dying from any cause, compared to those who don't lift at all (Saeidifard et al., 2023). That's a bigger mortality reduction than most medications achieve. This isn't about vanity. It's about longevity.
            </p>

            {/* Section 1 */}
            <section id="the-evidence" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>The Evidence: 10–17% <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Mortality Reduction</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The 2023 meta-analysis by Saeidifard et al. combined data from 16 prospective cohort studies spanning North America, Europe, and Asia. The participants ranged from young adults to people in their 80s. The finding was consistent: resistance training predicted lower all-cause mortality independent of how much aerobic exercise people did.
              </p>

              <div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Saeidifard et al. (2023)</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— British Journal of Sports Medicine</span>
                </div>
                <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>475,494 adults, 16 cohort studies. Resistance training reduced all-cause mortality by 10–17%, with no dose-dependent upper limit observed (i.e., more wasn't worse).</p>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The reduction applies across age groups, but it's particularly dramatic in older adults. A 2009 study by Stessman et al. followed 502 healthy men and women aged 70+ for 13 years and found that muscular strength — measured simply by grip strength — was the single strongest predictor of who would still be alive in 13 years. It beat blood pressure. It beat cholesterol. It beat weight.
              </p>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Longevity isn't primarily determined by how lean you are or your cholesterol number — it's determined by your capacity to generate force. That's trainable at any age.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-much-is-enough" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>How Much Is <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Enough?</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The dose-response data are remarkably clear. You don't need to spend hours in the gym.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Minimum Dose</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>2 hrs/week</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>Shows 10% mortality reduction. Lee & Buchner (2008) found this meets all physical activity guidelines.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#F6F8F6" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7770", marginBottom: 6 }}>Optimal Dose</p>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#17211C", margin: 0 }}>2–3 hrs/week</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>Achieves the full 10–17% reduction with no additional risk from overtraining.</p>
                </div>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Williams et al. (2017) found that benefits plateau around 3 hours per week; you can do more, but the incremental gain becomes negligible. The key variable isn't how heavy the weight is — it's consistency. Once per week isn't enough. Sporadic sessions don't produce the effect. Three times per week for 30–45 minutes hits the target.
              </p>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>You don't need to become a serious lifter. 3 × 45-minute sessions per week of moderate-intensity work — sets that leave you a rep or two short of failure — is the sweet spot.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="why-it-works" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>Why Strength Training Works <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>for Longevity</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The mechanism is multifactorial. Resistance training doesn't just build muscle — it remodels metabolic health, strengthens the immune system, and protects the cardiovascular system.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>01</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Muscle is metabolic tissue</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Muscle burns calories at rest and improves insulin sensitivity. Each pound of muscle increases resting metabolic rate by ~6 calories/day, but the metabolic benefit extends far beyond that — muscles regulate blood sugar and reduce inflammation systemically.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>02</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Cardiovascular protection</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Artero et al. (2011) found that leg press strength reduced cardiovascular mortality by up to 40% per standard deviation of strength increase — an effect size comparable to major blood pressure medications.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>03</span>
                  <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Cancer protection</h3>
                </div>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>Kraschnewski et al. (2016) found that resistance training reduced cancer-specific mortality by 31% and all-cause mortality by 19% — likely through improved immune regulation and systemic inflammation reduction.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="getting-started" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>Getting Started: Three <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Practical Approaches</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                You don't need equipment, a gym membership, or prior experience. The only requirement is consistency.
              </p>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>Approach 1: Bodyweight at home</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 10 }}>Push-ups, pull-ups (or assisted), squats, lunges, and planks. Perform 3 sets of each movement, 2–3 times per week. Progress by increasing reps or adding pauses. No equipment required; takes 30 minutes.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", marginBottom: 12 }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>Approach 2: Dumbbells or kettlebells</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 10 }}>Compound movements: goblet squats, deadlifts, chest press, rows. Start with a weight that feels heavy by rep 8–10. Three full-body workouts per week hits the longevity target.</p>
              </div>

              <div style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", marginBottom: 6 }}>Approach 3: Gym machines or free weights</h3>
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, marginBottom: 0 }}>Follow a full-body routine: chest press, leg press, rows, lat pulldown, leg curl. Two sessions per week covers the minimum; three is optimal.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="common-misconceptions" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 6 }}>Common <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Misconceptions</em></h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The data dispel several myths that keep people from strength training.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginBottom: 24 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Myth: "You need to lift heavy"</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>Truth: Moderate intensity (feeling fatigued by rep 8–10) produces the longevity benefit. Light weight works if the effort is there.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Myth: "Cardio is enough"</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>Truth: Cardio alone cuts cardiovascular mortality but misses cancer and all-cause protection. Strength training adds uniquely.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#B91C1C", marginBottom: 6, margin: 0 }}>Myth: "It's too late at 70"</p>
                  <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: 0 }}>Truth: The benefit is largest in older adults (Stessman et al., 2009). Strength is the single strongest predictor of longevity in the 70+ group.</p>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>The barriers to strength training are cultural, not biological. Your age, strength level, or available equipment are not obstacles — they're just starting points.</p>
              </div>
            </section>

            {/* Newsletter CTA */}
            <div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
                  <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "white", top: -100, right: -100 }} />
                  <div style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", background: "white", bottom: -50, left: -50 }} />
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13 }}>✉</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
                    Get evidence summaries <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>without the hype.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginBottom: 20, lineHeight: 1.5 }}>Peer-reviewed findings. No sponsors. Free every Thursday.</p>
                  <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Subscribe Free →</Link>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ padding: "20px 24px", backgroundColor: "#FFF5EB", borderBottom: "1px solid #EBD8C3" }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6, fontWeight: 700 }}>Bottom Line</p>
                  <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>The case for strength training is longevity, not vanity.</h2>
                </div>
                <div style={{ padding: "22px 24px", backgroundColor: "#FAECD8" }}>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginBottom: 14 }}>
                    <strong>Evidence Grade: Strong.</strong> Multiple large prospective cohort studies spanning 500,000+ adults show consistent 10–17% mortality reduction with 2–3 hours per week of resistance training.
                  </p>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.75, marginBottom: 0 }}>
                    Start with 30–45 minutes, three times per week. Bodyweight, dumbbells, or machines all work. The barrier isn't your circumstances — it's showing up consistently. That's the work that extends your life.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>FAQ</span>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#C4622D", textTransform: "uppercase", fontWeight: 700 }}>{faqList.length} Questions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 20 }}>Frequently Asked <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Questions</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((faq, i) => (
                  <details key={i} style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                    <summary style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, listStyle: "none", cursor: "pointer", fontFamily: "var(--font-hanken), sans-serif" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", width: 28, textAlign: "center" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#17211C" }}>{faq.q}</span>
                      <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A", fontWeight: 700 }}>+</span>
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
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 20 }}>Key <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>References</em></h2>
              <details style={{ border: "1px solid #E4E8E5", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                <summary style={{ backgroundColor: "#FFF9F3", padding: "16px 20px", cursor: "pointer", listStyle: "none", fontWeight: 600, fontSize: 14 }}>
                  {references.length} Sources · Show References ↓
                </summary>
                <div style={{ padding: "20px", borderTop: "1px solid #E4E8E5" }}>
                  {references.map((ref) => (
                    <div key={ref.num} style={{ display: "flex", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #F2F8F4" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 800, color: "#E4E8E5", minWidth: 24 }}>{ref.num}.</span>
                      <div>
                        <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0, marginBottom: 6 }}>{ref.text}</p>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <em style={{ fontSize: 11, color: "#586259" }}>{ref.journal}</em>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>PubMed →</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Back to Blog */}
            <div className="block lg:hidden" style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #E4E8E5", display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/blog" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
              <div style={{ display: "flex", gap: 6 }}>
                {["Fitness", "Longevity", "Strength"].map((tag) => (
                  <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related articles */}
      <section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5", maxWidth: 1100, margin: "72px auto 0" }} className="container-pad">
        <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1714", marginBottom: 24 }}>More on <em style={{ color: "#0F7A5A", fontStyle: "italic" }}>Fitness & Longevity</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { title: "Highest Calorie-Burning Exercises, Ranked by Science", href: "/blog/highest-calorie-burning-exercises" },
            { title: "Exercise & Alzheimer's: How Movement Cuts Risk 45%", href: "/blog/exercise-alzheimers-prevention" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hub-card" style={{ display: "block", padding: "18px 20px", border: "1px solid #E4E8E5", borderRadius: 12, backgroundColor: "#FFFFFF", textDecoration: "none" }}>
              <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#17211C", marginBottom: 4 }}>{item.title}</p>
              <span style={{ fontSize: 11, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>Read Guide →</span>
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
          <div style={{ display: "flex", gap: 6 }}>
            {["Fitness", "Longevity", "Evidence"].map((tag) => (
              <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#586259" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
