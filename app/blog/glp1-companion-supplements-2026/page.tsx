import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";

export const metadata: Metadata = {
  title: "7 GLP-1 Companion Supplements Trending in 2026",
  description: "The GLP-1 companion supplement market hit $2.2 billion in 2026. We review 7 trending supplements — creatine, HMB, protein, probiotics, electrolytes, vitamin D, and collagen — with trial data for each.",
  alternates: { canonical: "/blog/glp1-companion-supplements-2026" },
};

/* ── JSON-LD Schemas ──────────────────────────────────────── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GLP-1 Companion Supplements: The 2026 Trend Everyone's Talking About",
  description: "The GLP-1 companion supplement market hit $2.2 billion in 2026. We review 7 trending supplements with trial data for each.",
  image: "https://fitlabreviews.com/lifestyle/glp1-companion-supplements-feature.png",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  author: { "@type": "Organization", name: "Fitlabreviews Editorial", url: "https://fitlabreviews.com/about" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://fitlabreviews.com/blog/glp1-companion-supplements-2026" },
  articleSection: "Nutrition",
  wordCount: 4200,
};

const faqList = [
  { q: "Do I actually need supplements while on Ozempic or Wegovy?", a: "GLP-1 medications reduce caloric intake by roughly 20%, which increases the risk of micronutrient gaps — particularly in vitamin D, B12, magnesium, and iron. A 2026 analysis found GLP-1 users face a 49% higher risk of vitamin D deficiency compared to users of other diabetes medications. Whether you need supplements depends on your dietary quality and bloodwork, but most clinicians recommend at minimum a multivitamin, protein supplementation, and electrolytes." },
  { q: "How much muscle do you actually lose on GLP-1 drugs?", a: "In the STEP-1 trial, lean mass loss accounted for approximately 39–40% of total weight lost with semaglutide 2.4mg. For a person losing 15 kg, that translates to roughly 6 kg of lean mass. Resistance training combined with adequate protein intake (1.2–1.6 g/kg/day) is the most effective strategy to mitigate this. Creatine and HMB may offer additional protection, though direct RCT data in GLP-1 populations is still emerging." },
  { q: "Can creatine help prevent muscle loss on semaglutide?", a: "Creatine has strong evidence for preserving lean mass during caloric restriction in general populations. A 2026 perspective paper in the Journal of the International Society of Sports Nutrition argues creatine is a promising adjunct for GLP-1 users specifically, based on its mechanism of action — enhanced phosphocreatine resynthesis, satellite cell activation, and reduced myostatin expression. However, no large RCT has tested creatine specifically alongside GLP-1 therapy yet." },
  { q: "Which probiotics are best for GLP-1 side effects?", a: "Multi-strain probiotics containing Lactobacillus and Bifidobacterium species have the most evidence for reducing bloating and improving GI motility. A 2026 clinical trial (NCT07130396) is specifically testing UltraFlora Balance Probiotic in GLP-1 users. For constipation — the most persistent GI side effect — combining a probiotic with psyllium fiber (5–10g/day) appears more effective than either alone." },
  { q: "Is collagen worth taking on GLP-1 medications?", a: "Collagen peptides provide protein (typically 10–20g per serving) and may support skin elasticity during rapid weight loss. A 2019 RCT by Zdzieblik et al. found 15g daily collagen peptides combined with resistance training increased fat-free mass and decreased fat mass in premenopausal women. For GLP-1 users concerned about loose skin from rapid weight loss, collagen is a reasonable addition — but it should not replace complete protein sources like whey, which have superior amino acid profiles for muscle preservation." },
  { q: "How much protein should I eat on GLP-1 therapy?", a: "Most clinical guidelines recommend 1.2–1.6 g/kg of target body weight per day for GLP-1 users, which is higher than the general RDA of 0.8 g/kg. Given that GLP-1 drugs reduce appetite and food intake by approximately 20%, hitting this target usually requires deliberate protein supplementation — whey, casein, or plant-based protein powders. Protein should be distributed across 3–4 meals, with 25–40g per meal to maximise muscle protein synthesis." },
  { q: "Are there any supplements that interact badly with GLP-1 drugs?", a: "GLP-1 agonists slow gastric emptying, which can alter absorption timing of oral medications and supplements. Fat-soluble vitamins (A, D, E, K) may be absorbed more slowly. There are no known dangerous interactions between the 7 supplements covered in this article and semaglutide/tirzepatide, but timing matters — take supplements with meals and separate from your GLP-1 injection by at least 1 hour. Always consult your prescribing physician before starting a new supplement regimen." },
  { q: "What's the minimum supplement stack for a GLP-1 user on a budget?", a: "If cost is a constraint, prioritise three things: (1) whey protein to hit 1.2 g/kg/day total protein, (2) a basic electrolyte mix with sodium, potassium, and magnesium, and (3) vitamin D3 at 2,000 IU/day. These three address the most common and well-documented deficits. Creatine monohydrate is also inexpensive (roughly $0.05/day) and has a strong safety profile. Everything else — collagen, HMB, probiotics — is helpful but secondary." },
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
  { id: "why-companion-supplements", label: "Why GLP-1 Users Need Supplements" },
  { id: "the-muscle-problem", label: "The Muscle Loss Problem" },
  { id: "seven-supplements", label: "The 7 Trending Supplements" },
  { id: "creatine", label: "1. Creatine Monohydrate" },
  { id: "hmb", label: "2. HMB (β-Hydroxy β-Methylbutyrate)" },
  { id: "protein", label: "3. High-Protein Supplements" },
  { id: "probiotics", label: "4. Probiotics & Fibre" },
  { id: "electrolytes", label: "5. Electrolytes & Magnesium" },
  { id: "vitamin-d", label: "6. Vitamin D3" },
  { id: "collagen", label: "7. Collagen Peptides" },
  { id: "bottom-line", label: "Bottom Line" },
  { id: "faq", label: "FAQ" },
];

export default function GLP1CompanionSupplements() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFF9F3" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>GLP-1 Companion Supplements</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #E4E8E5", background: "linear-gradient(180deg, #F2F8F4 0%, #FFFFFF 100%)" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase", whiteSpace: "nowrap" }}>BLG-006</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#0F7A5A", textTransform: "uppercase", whiteSpace: "nowrap" }}>Nutrition · GLP-1 Science</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            GLP-1 Companion Supplements:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>The 2026 Trend Everyone&apos;s Talking About</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>June 2026</span>
            <span style={{ color: "#E4E8E5" }}>·</span>
            <span style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>14 min read</span>
            <span style={{ color: "#E4E8E5" }}>·</span>
            <span style={{ padding: "4px 10px", borderRadius: 20, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#92620A", backgroundColor: "rgba(146,98,10,0.08)", border: "1px solid rgba(146,98,10,0.2)", textTransform: "uppercase" }}>Moderate Evidence</span>
          </div>
          {/* Key stat callouts */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 12, overflow: "hidden", border: "1px solid #E4E8E5" }}>
            {[
              { value: "$2.2B", label: "GLP-1 supplement market in 2026", bg: "#0F7A5A", valueColor: "#FFFFFF", labelColor: "rgba(255,255,255,0.75)" },
              { value: "39–40%", label: "of weight lost on semaglutide is lean mass", bg: "#F6F8F6", valueColor: "#1A1714", labelColor: "#586259" },
              { value: "49%", label: "higher vitamin D deficiency risk vs other meds", bg: "#E8F5EF", valueColor: "#C98A1E", labelColor: "#586259" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "18px 22px", backgroundColor: stat.bg, flex: 1, minWidth: 140, borderRight: i < 2 ? "1px solid rgba(228,232,229,0.5)" : "none" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.6rem", fontWeight: 800, color: stat.valueColor, margin: 0 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: stat.labelColor, textTransform: "uppercase", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credibility row */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Link href="/authors/fitlab-research-team" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A 0%, #1A1714 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(15,122,90,0.2)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>FR</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, lineHeight: 1.2 }}>Fitlab Research Team</p>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, marginTop: 2 }}>Editorial & Research</p>
                </div>
              </Link>
              <span style={{ width: 1, height: 28, backgroundColor: "#E4E8E5" }} />
              <Link href="/authors/pankaj-singh" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #17211C 0%, #2D3A32 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>PS</span>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, lineHeight: 1 }}>Reviewed by</p>
                  <p style={{ fontSize: 13, color: "#17211C", fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", margin: 0, marginTop: 2, lineHeight: 1.2 }}>Pankaj Singh</p>
                </div>
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#FFF9F3", border: "1px solid #E4E8E5" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#17211C", letterSpacing: "0.04em" }}>12 Peer-reviewed sources</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, backgroundColor: "#F8F6F2", border: "1px solid #E4E8E5" }}>
                <span style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 600, color: "#586259" }}>June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">

          {/* TOC + Share */}
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #E4E8E5" }}>
            <TableOfContents items={tocItems} />
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E4E8E5" }}>
              <ShareButtons title="GLP-1 Companion Supplements: The 2026 Trend" slug="glp1-companion-supplements-2026" />
            </div>
          </aside>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>

            {/* Mobile TOC */}
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Key Takeaways */}
            <div id="key-takeaways" style={{ padding: "22px 24px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 36 }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 10, fontWeight: 700 }}>Key Takeaways</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>GLP-1 users lose <strong>39–40% of weight as lean mass</strong> (STEP-1 trial) — companion supplements aim to close that gap through muscle preservation, nutrient repletion, and GI support.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>The GLP-1 companion supplement market reached <strong>$2.2 billion in 2026</strong>, growing at 12–14% CAGR, driven by the 6+ million Americans now on semaglutide or tirzepatide.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>The <strong>7 trending supplements</strong>: creatine monohydrate, HMB, high-protein formulas, probiotics/fibre, electrolytes, vitamin D3, and collagen peptides — each addresses a specific, documented deficit.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>Evidence quality varies: creatine and protein have <strong>strong general evidence</strong> for muscle preservation during caloric restriction, but <strong>direct RCTs in GLP-1 populations</strong> are still limited for most supplements.</li>
                <li style={{ fontSize: 13, color: "#2D2926", lineHeight: 1.65 }}>The minimum effective stack on a budget: <strong>whey protein, electrolytes, vitamin D3, and creatine</strong> — total cost under $2/day.</li>
              </ul>
            </div>

            {/* Intro */}
            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Six million Americans are now taking GLP-1 receptor agonists like semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound). They eat roughly 20% fewer calories per day, lose 15–22% of body weight over 68 weeks, and — as the STEP-1 and SURMOUNT-1 trials documented — shed a significant fraction of lean mass in the process. The supplement industry noticed. In the space of 18 months, &ldquo;GLP-1 companion&rdquo; has become its own product category, with brands from Thorne to NatureMade launching dedicated stacks. The question isn&apos;t whether this market is real — at $2.2 billion and growing at nearly 12% annually, it clearly is. The question is which of these supplements actually have evidence behind them.
            </p>

            {/* Section 1: Why Companion Supplements */}
            <section id="why-companion-supplements" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Why GLP-1 Users Need Companion Supplements
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                GLP-1 receptor agonists work by mimicking the incretin hormone GLP-1, which slows gastric emptying, reduces appetite via hypothalamic signalling, and enhances insulin secretion. The downstream effect is that users eat substantially less — and when you eat less, you absorb less of everything: protein, vitamins, minerals, fibre.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Three categories of deficit emerge consistently in the literature:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  { num: "01", title: "Lean Mass Loss", desc: "Caloric restriction without adequate protein and resistance training leads to disproportionate muscle loss. In STEP-1, 39–40% of weight lost was lean mass — roughly 6.9 kg out of 15.3 kg total (Wilding et al., 2021, NEJM)." },
                  { num: "02", title: "Micronutrient Depletion", desc: "Reduced food intake and slowed gastric emptying impair absorption of fat-soluble vitamins. GLP-1 users show 49% higher risk of vitamin D deficiency compared to users of other diabetes medications (Remedys Nutrition, 2026 analysis). B12, iron, and magnesium gaps are also documented." },
                  { num: "03", title: "GI Disruption", desc: "Nausea affects 20–44% of semaglutide users at the 2.4mg dose; constipation persists in 24% (Friedrichsen et al., 2021, Obesity). These side effects reduce dietary diversity further and create a feedback loop of under-nutrition." },
                ].map((item) => (
                  <div key={item.num} style={{ padding: "20px 22px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C98A1E" }}>{item.num}</span>
                      <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>If you&apos;re on a GLP-1 medication, supplementation isn&apos;t optional wellness — it&apos;s compensating for a measurable reduction in nutrient intake. The question is which supplements actually address documented deficits versus which are marketing dressed up as science.</p>
              </div>
            </section>

            {/* Section 2: The Muscle Problem */}
            <section id="the-muscle-problem" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                The Muscle Loss Problem: What the Trials Actually Show
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The lean mass conversation around GLP-1 drugs is often oversimplified. Some advocates dismiss it — &ldquo;you lose muscle whenever you lose weight&rdquo; — while critics treat it as a fatal flaw. The data sits between these positions.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  { study: "STEP-1 (Wilding et al., 2021)", journal: "New England Journal of Medicine, N=1,961", finding: "Semaglutide 2.4mg produced 14.9% body weight loss over 68 weeks. DEXA sub-study showed lean mass reduction of 6.92 kg (placebo-corrected: −5.44 kg), representing 39–40% of total weight lost." },
                  { study: "SURMOUNT-1 (Jastreboff et al., 2022)", journal: "New England Journal of Medicine, N=2,539", finding: "Tirzepatide 15mg produced 22.5% weight loss. Lean mass fraction lost was comparable at 33–40% depending on dose tier. The higher absolute weight loss meant more lean mass was lost in absolute terms." },
                  { study: "SEMALEAN (2025–2026)", journal: "Ongoing — NCT preliminary data", finding: "This study specifically measures semaglutide's impact on fat mass, lean mass, and muscle function using DEXA and grip strength. Early data suggests that resistance training substantially attenuates lean mass loss — reducing the lean mass fraction from ~40% to ~20% of total weight lost." },
                ].map((ref) => (
                  <div key={ref.study} style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>{ref.study}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— {ref.journal}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>{ref.finding}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                The critical nuance: lean mass loss during GLP-1 therapy is not inevitable at the levels seen in the headline trials. Resistance training is the primary intervention. Supplements — particularly creatine, HMB, and adequate protein — are the secondary line of defence. Neither replaces the other.
              </p>
            </section>

            {/* Section 3: The 7 Supplements — Overview */}
            <section id="seven-supplements" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                The 7 GLP-1 Companion Supplements Trending in 2026
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                We evaluated each supplement on three criteria: (1) strength of evidence for the specific claim being made, (2) relevance to documented GLP-1 side effects or deficits, and (3) cost-effectiveness. Here&apos;s the honest assessment.
              </p>
              <div className="review-table-wrap">
                <table style={{ borderCollapse: "collapse", minWidth: 580 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E4E8E5" }}>
                      <th style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", fontWeight: 700 }}>Supplement</th>
                      <th style={{ padding: "12px 14px", textAlign: "left", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", fontWeight: 700 }}>Primary Claim</th>
                      <th style={{ padding: "12px 14px", textAlign: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", fontWeight: 700 }}>Evidence</th>
                      <th style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#586259", fontWeight: 700 }}>Cost/day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Creatine monohydrate", claim: "Lean mass preservation", evidence: "Strong*", cost: "$0.05–0.10", color: "#1A6B3A" },
                      { name: "HMB", claim: "Anti-catabolic", evidence: "Moderate", cost: "$0.50–1.00", color: "#92620A" },
                      { name: "Whey / protein", claim: "Muscle protein synthesis", evidence: "Strong", cost: "$0.80–1.50", color: "#1A6B3A" },
                      { name: "Probiotics + fibre", claim: "GI side effect relief", evidence: "Moderate", cost: "$0.30–1.00", color: "#92620A" },
                      { name: "Electrolytes + Mg", claim: "Hydration / deficiency", evidence: "Strong", cost: "$0.15–0.40", color: "#1A6B3A" },
                      { name: "Vitamin D3", claim: "Deficiency prevention", evidence: "Strong", cost: "$0.05–0.10", color: "#1A6B3A" },
                      { name: "Collagen peptides", claim: "Skin / lean mass", evidence: "Limited", cost: "$0.50–1.20", color: "#8A4020" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #F2F8F4" }}>
                        <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>{row.name}</td>
                        <td style={{ padding: "12px 14px", fontSize: 12, color: "#3F4B43" }}>{row.claim}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center" }}>
                          <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", fontWeight: 700, color: row.color, backgroundColor: `${row.color}14`, border: `1px solid ${row.color}33`, letterSpacing: "0.08em", textTransform: "uppercase" }}>{row.evidence}</span>
                        </td>
                        <td style={{ padding: "12px 14px", textAlign: "right", fontSize: 12, fontFamily: "var(--font-jetbrains), monospace", color: "#586259" }}>{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 11, color: "#6B7770", marginTop: 8, fontFamily: "var(--font-jetbrains), monospace" }}>
                * &ldquo;Strong&rdquo; = robust RCT evidence for the general claim; not all have been tested directly in GLP-1 populations.
              </p>
            </section>

            {/* Supplement 1: Creatine */}
            <section id="creatine" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                1. Creatine Monohydrate — The Strongest Case
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Creatine is the single most studied sports supplement in existence, with over 500 peer-reviewed papers supporting its efficacy for lean mass and strength. Its relevance to GLP-1 users is straightforward: it preserves muscle during caloric restriction.
              </p>
              <div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>Forbes et al. (2025)</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— J Int Soc Sports Nutr (Perspective)</span>
                </div>
                <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>Argues creatine is a &ldquo;promising adjunct strategy&rdquo; for GLP-1 users based on three mechanisms: enhanced phosphocreatine resynthesis during resistance training, satellite cell activation for muscle repair, and reduced myostatin expression. The paper calls for direct RCTs in GLP-1 populations.</p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                In older adults undergoing caloric restriction, creatine supplementation (5g/day) combined with resistance training consistently preserves more lean mass than resistance training alone. A meta-analysis by Chilibeck et al. (2017, <em>Journal of the International Society of Sports Nutrition</em>) across 22 RCTs found creatine increased lean tissue mass by an average of 1.37 kg compared to placebo during resistance training programmes.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6, fontWeight: 700 }}>Dose</p>
                  <p style={{ fontSize: 13, color: "#1A1714", margin: 0, fontWeight: 600 }}>3–5g per day</p>
                  <p style={{ fontSize: 11, color: "#586259", marginTop: 4 }}>Monohydrate form. No loading phase needed.</p>
                </div>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6, fontWeight: 700 }}>Cost</p>
                  <p style={{ fontSize: 13, color: "#1A1714", margin: 0, fontWeight: 600 }}>~$0.05–0.10/day</p>
                  <p style={{ fontSize: 11, color: "#586259", marginTop: 4 }}>Among the cheapest effective supplements available.</p>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                <strong>Limitation:</strong> No large RCT has tested creatine specifically in a GLP-1 cohort. The evidence is extrapolated from caloric restriction and aging studies. Given creatine&apos;s safety profile (no clinically meaningful adverse effects in healthy adults at 3–5g/day per ISSN position stand) and cost, the risk-benefit calculation strongly favours use.
              </p>
            </section>

            {/* Supplement 2: HMB */}
            <section id="hmb" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                2. HMB (β-Hydroxy β-Methylbutyrate) — The Anti-Catabolic
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                HMB is a metabolite of leucine that acts on the ubiquitin-proteasome pathway — the primary mechanism through which the body breaks down muscle protein. During caloric restriction, this pathway becomes hyperactive. HMB dampens it.
              </p>
              <div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>Panton et al. (2000)</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— J Nutr, N=36 (men and women)</span>
                </div>
                <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>3g/day HMB during 4 weeks of resistance training increased lean body mass and reduced body fat percentage more than placebo. HMB users achieved similar fat-loss totals as controls but retained approximately twice the lean mass.</p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The International Society of Sports Nutrition position stand recommends 3g/day of HMB, noting it &ldquo;can be used to enhance recovery by attenuating exercise-induced skeletal muscle damage in trained and untrained populations&rdquo; (Wilson et al., 2013, <em>J Int Soc Sports Nutr</em>). For GLP-1 users, the anti-catabolic mechanism is the key draw — HMB isn&apos;t primarily about building muscle, it&apos;s about slowing the rate at which you lose it during a caloric deficit.
              </p>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                <strong>Limitation:</strong> Meta-analyses are mixed. Rowlands &amp; Thomson (2009) found modest effects that were strongest in untrained individuals and during the first 2 weeks of training. The HMB-specific evidence in weight-loss populations is smaller-scale than creatine&apos;s. At $0.50–1.00/day, it&apos;s a reasonable add-on if budget allows but not the first priority.
              </p>
            </section>

            {/* Supplement 3: Protein */}
            <section id="protein" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                3. High-Protein Supplements — The Non-Negotiable
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                This is the least controversial recommendation on the list. When you eat 20% fewer calories, protein intake drops proportionally unless you actively compensate. The Obesity Medicine Association and multiple clinical guidelines now recommend GLP-1 users target 1.2–1.6 g/kg of target body weight per day — roughly double the standard RDA of 0.8 g/kg.
              </p>
              <div style={{ padding: "18px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderLeft: "3px solid #C98A1E", borderRadius: "0 10px 10px 0", marginBottom: 16 }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C98A1E", marginBottom: 6 }}>Why protein supplementation matters more on GLP-1s</p>
                <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.7, margin: 0 }}>
                  A 75kg person targeting 1.4 g/kg needs 105g of protein daily. If they&apos;re eating 1,600 calories (a typical intake on semaglutide 2.4mg), that means 26% of calories must come from protein — achievable, but requires deliberate planning or supplementation. Most users fall short without a protein supplement.
                </p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Whey protein isolate remains the gold standard for muscle protein synthesis due to its leucine content (10–12% by weight) and rapid absorption kinetics. For GLP-1 users with GI sensitivity, whey isolate is preferable to concentrate because the lactose has been largely removed. Plant-based blends (pea + rice) are a viable alternative for those who are dairy-intolerant — the amino acid profile is slightly inferior but the difference is clinically marginal when total daily intake is adequate.
              </p>
              <div style={{ marginTop: 20, padding: "14px 18px", backgroundColor: "#FFF5EB", borderRadius: 10, borderLeft: "3px solid #0F7A5A", border: "1px solid #EBD8C3" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 4, fontWeight: 700 }}>What this means for you</p>
                <p style={{ fontSize: 13, color: "#17211C", lineHeight: 1.65, margin: 0 }}>Aim for 25–40g of protein per meal across 3–4 meals. If appetite suppression makes solid food difficult, a whey shake between meals is the simplest intervention. Distribute protein evenly — a single 80g protein meal is less effective for MPS than three 27g servings.</p>
              </div>
            </section>

            {/* Supplement 4: Probiotics & Fibre */}
            <section id="probiotics" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                4. Probiotics &amp; Fibre — Managing the GI Fallout
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Gastrointestinal side effects are the most common reason people discontinue GLP-1 therapy. Nausea affects 20–44% of semaglutide users; constipation persists in roughly 24% even after titration (Friedrichsen et al., 2021, <em>Obesity</em>). The companion supplement industry has responded with GLP-1-specific probiotic formulations — and the rationale is actually grounded in biology, not just marketing.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The gut microbiome produces short-chain fatty acids and secondary bile acids that stimulate endogenous GLP-1 secretion. Microbiome composition also appears to influence inter-individual response to GLP-1 therapy. A clinical trial currently underway (NCT07130396) is testing UltraFlora Balance Probiotic combined with a multivitamin specifically in GLP-1 users — the first trial designed to measure probiotic impact on GI tolerability during GLP-1 treatment.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ padding: "16px 18px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Probiotics — What to Look For</p>
                  {["Multi-strain: Lactobacillus + Bifidobacterium species", "10+ billion CFU per dose", "Shelf-stable formulation (no cold chain needed)", "Enteric coating for GI survival"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #1A6B3A" }}>{item}</p>
                  ))}
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#92620A", marginBottom: 8 }}>Fibre — The Constipation Fix</p>
                  {["Psyllium husk: 5–10g/day, start at 5g", "Titrate slowly — rapid fibre increase worsens bloating", "Take with ≥250ml water per 5g dose", "Separate from GLP-1 injection by 1+ hour"].map(item => (
                    <p key={item} style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 10, borderLeft: "2px solid #92620A" }}>{item}</p>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                <strong>Limitation:</strong> Probiotic evidence for GI relief in general populations is moderate; evidence specifically in GLP-1 populations is preliminary. The NCT07130396 trial will provide the first rigorous data. In the meantime, multi-strain probiotics combined with psyllium fibre is the approach most commonly recommended by GI specialists treating GLP-1 users.
              </p>
            </section>

            {/* Supplement 5: Electrolytes & Magnesium */}
            <section id="electrolytes" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                5. Electrolytes &amp; Magnesium — The Silent Deficit
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Reduced food intake means reduced electrolyte intake. Add in the nausea and vomiting that affect a significant minority of users, and the dehydration risk compounds. Magnesium deserves special mention: it&apos;s involved in over 300 enzymatic reactions, and subclinical deficiency is already present in an estimated 50% of Americans before they start a GLP-1 drug (Rosanoff et al., 2012, <em>Nutrition Reviews</em>).
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                GLP-1 companion formulas are increasingly built around magnesium citrate, which offers superior bioavailability compared to magnesium oxide (the cheapest and most common form in multivitamins). A 2026 industry analysis by Green Jeeva noted that magnesium citrate is now the second-most-requested ingredient in GLP-1 companion formulations, behind only protein.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6, fontWeight: 700 }}>Minimum daily electrolytes</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 4px" }}><strong>Sodium:</strong> 1,500–2,300mg</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 4px" }}><strong>Potassium:</strong> 2,600–3,400mg</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}><strong>Magnesium:</strong> 310–420mg</p>
                </div>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#92620A", marginBottom: 6, fontWeight: 700 }}>Best forms for absorption</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 4px" }}><strong>Mg citrate</strong> or <strong>Mg glycinate</strong></p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: "0 0 4px" }}>Avoid Mg oxide (4% bioavailability)</p>
                  <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.6, margin: 0 }}>Glycinate preferred if GI-sensitive</p>
                </div>
              </div>
            </section>

            {/* Inline Newsletter CTA */}
            <div style={{ margin: "0 0 48px", borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <div style={{ background: "linear-gradient(135deg, #17211C 0%, #0A4F3B 60%, #0F7A5A 100%)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
                <div style={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
                <div style={{ position: "absolute", bottom: -40, left: 60, width: 100, height: 100, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
                <div style={{ position: "absolute", top: 20, right: 50, display: "grid", gridTemplateColumns: "repeat(5, 6px)", gap: 8, opacity: 0.15 }}>
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "#FFFFFF" }} />
                  ))}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#C98A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13 }}>✉</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A1E", fontWeight: 700 }}>The Research Dispatch</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#F5F0E8", margin: 0, lineHeight: 1.3, marginBottom: 6 }}>
                    Get insights like this —{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#14A474" }}>straight to your inbox.</em>
                  </p>
                  <p style={{ fontSize: 13, color: "#8B9B90", marginTop: 0, marginBottom: 20, lineHeight: 1.5 }}>
                    Evidence-based. No sponsors. Free every Thursday.
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link href="/#newsletter" style={{ padding: "12px 28px", backgroundColor: "#C98A1E", color: "#FFFFFF", borderRadius: 10, fontSize: 13, fontWeight: 700, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", flexShrink: 0, letterSpacing: "0.03em", display: "inline-flex", alignItems: "center", gap: 8 }}>
                      Subscribe Free <span style={{ fontSize: 16 }}>→</span>
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ display: "flex" }}>
                        {["FR", "PS", "RD"].map((initials, i) => (
                          <div key={initials} style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: i === 0 ? "#0F7A5A" : i === 1 ? "#2D6A4F" : "#3D6B80", border: "2px solid #17211C", marginLeft: i > 0 ? -6 : 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 - i }}>
                            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 7, fontWeight: 700, color: "#FFFFFF" }}>{initials}</span>
                          </div>
                        ))}
                      </div>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>Join 2,400+ readers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supplement 6: Vitamin D3 */}
            <section id="vitamin-d" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                6. Vitamin D3 — The Absorption Problem
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Vitamin D is fat-soluble. GLP-1 drugs slow gastric emptying and reduce dietary fat intake — both of which impair fat-soluble vitamin absorption. A 2026 analysis found GLP-1 users face a 49% higher risk of vitamin D deficiency compared to users of other diabetes medications, even after controlling for baseline vitamin D status and sun exposure.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                This matters beyond bone health. Vitamin D receptors are expressed in skeletal muscle, and deficiency is independently associated with reduced muscle strength and increased fall risk — a 2014 meta-analysis by Beaudart et al. (<em>Journal of Clinical Endocrinology &amp; Metabolism</em>) found that vitamin D supplementation improved lower limb muscle strength in deficient individuals. For GLP-1 users already at risk of lean mass loss, vitamin D deficiency compounds the problem.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 6, fontWeight: 700 }}>Recommended dose</p>
                  <p style={{ fontSize: 13, color: "#1A1714", margin: 0, fontWeight: 600 }}>2,000–4,000 IU/day (D3, not D2)</p>
                  <p style={{ fontSize: 11, color: "#586259", marginTop: 4 }}>Take with a fat-containing meal to improve absorption.</p>
                </div>
                <div style={{ padding: "14px 16px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10 }}>
                  <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#92620A", marginBottom: 6, fontWeight: 700 }}>Monitoring</p>
                  <p style={{ fontSize: 13, color: "#1A1714", margin: 0, fontWeight: 600 }}>Check 25(OH)D levels every 6 months</p>
                  <p style={{ fontSize: 11, color: "#586259", marginTop: 4 }}>Target: 40–60 ng/mL (100–150 nmol/L).</p>
                </div>
              </div>
            </section>

            {/* Supplement 7: Collagen */}
            <section id="collagen" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #F2F8F4" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                7. Collagen Peptides — The Skin Elasticity Play
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Rapid weight loss — particularly the 15–22% body weight reductions seen with semaglutide and tirzepatide — leaves excess skin. Collagen peptide supplements have surged in the GLP-1 companion market on the promise of supporting skin elasticity and connective tissue during this transition. The evidence is real but limited.
              </p>
              <div style={{ padding: "16px 18px", border: "1px solid #EBD8C3", borderRadius: 10, backgroundColor: "#FFF5EB", borderLeft: "3px solid #C98A1E", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714", flexShrink: 0 }}>Zdzieblik et al. (2019)</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#8A7B6F" }}>— Nutrients, N=77 (premenopausal women)</span>
                </div>
                <p style={{ fontSize: 13, color: "#3D2E22", lineHeight: 1.7, margin: 0 }}>15g daily collagen peptides combined with resistance training increased fat-free mass and decreased fat mass over 12 weeks compared to placebo + resistance training. The collagen group also showed improved body composition ratios.</p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                For skin elasticity specifically, a 2019 systematic review by de Miranda et al. (<em>International Journal of Dermatology</em>) found that 2.5–10g/day of collagen peptides improved skin hydration, elasticity, and wrinkle depth in 11 RCTs. However, these studies were conducted in general populations, not in individuals undergoing rapid weight loss.
              </p>
              <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.75 }}>
                <strong>Honest assessment:</strong> Collagen provides protein (10–20g per serving) but has an incomplete amino acid profile — low in leucine, the primary driver of muscle protein synthesis. It should supplement, not replace, whey or complete protein sources. For skin elasticity during rapid weight loss, the evidence is plausible but not proven in GLP-1 populations specifically. It&apos;s the weakest recommendation on this list — reasonable to try, but manage expectations.
              </p>
            </section>

            {/* Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3" }}>
                <div style={{ height: 4, background: "linear-gradient(90deg, #0F7A5A 0%, #C98A1E 100%)" }} />
                <div style={{ padding: "28px 30px 24px", backgroundColor: "#FFF5EB" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#0F7A5A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 14, color: "#FFFFFF" }}>✓</span>
                      </div>
                      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A7B6F" }}>Bottom Line</span>
                    </div>
                    <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 9, fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#92620A", backgroundColor: "rgba(146,98,10,0.08)", border: "1px solid rgba(146,98,10,0.2)", textTransform: "uppercase" }}>Grade B — Moderate Evidence</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 700, color: "#1A1714", marginBottom: 0, lineHeight: 1.35 }}>
                    GLP-1 companion supplements address real deficits.{" "}
                    <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>But not all 7 are equal.</em>
                  </h3>
                </div>
                <div style={{ padding: "22px 30px 28px", backgroundColor: "#FAECD8", borderTop: "1px solid #EBD8C3" }}>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.85, marginBottom: 16 }}>
                    The GLP-1 companion supplement trend is grounded in legitimate biology: users eat less, absorb less, and lose lean mass at rates that standard dietary advice doesn&apos;t adequately address. <strong style={{ color: "#1A1714" }}>Protein, creatine, electrolytes, and vitamin D3</strong> have the strongest evidence-to-cost ratios and should form the foundation of any GLP-1 supplement stack. HMB and probiotics are reasonable additions with moderate evidence. Collagen is the most speculative — potentially helpful for skin elasticity, but not a muscle preservation tool.
                  </p>
                  <p style={{ fontSize: 14, color: "#3D2E22", lineHeight: 1.85, marginBottom: 20 }}>
                    The critical caveat: no supplement replaces resistance training. The SEMALEAN trial and ADA data consistently show that exercise is the primary lever for muscle preservation during GLP-1 therapy — supplements are the secondary line. A user doing 2–3 resistance sessions per week with adequate protein will preserve more lean mass than someone taking every supplement on this list without training.
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Whey protein 1.2–1.6g/kg", "Creatine 5g/day", "Electrolytes daily", "Vitamin D3 2,000 IU"].map(action => (
                      <span key={action} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 11, fontFamily: "var(--font-hanken), sans-serif", fontWeight: 600, color: "#1A1714", backgroundColor: "#FFFFFF", border: "1px solid #EBD8C3" }}>{action}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* References */}
              <details style={{ marginTop: 32, border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                <summary style={{ padding: "16px 20px", cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, backgroundColor: "#FFF9F3" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0F7A5A" }} />
                    <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 700, color: "#17211C" }}>Key References</span>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#6B7770", letterSpacing: "0.08em" }}>12 sources</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "#0F7A5A" }}>Show ↓</span>
                </summary>
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { num: 1, text: "Wilding JPH et al. Once-weekly semaglutide in adults with overweight or obesity (STEP 1).", journal: "N Engl J Med. 2021;384(11):989–1002", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
                    { num: 2, text: "Jastreboff AM et al. Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1).", journal: "N Engl J Med. 2022;387(3):205–216", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
                    { num: 3, text: "Friedrichsen M et al. Gastrointestinal tolerability of once-weekly semaglutide 2.4 mg in adults with overweight or obesity.", journal: "Obesity. 2021;29(Suppl 2)", url: "https://pubmed.ncbi.nlm.nih.gov/35766362/" },
                    { num: 4, text: "Forbes SC et al. Creatine supplementation for preventing muscle atrophy in patients taking incretin-based pharmacotherapies.", journal: "J Int Soc Sports Nutr. 2025/2026 (Perspective)", url: "https://www.sciencedirect.com/science/article/pii/S3050624726000148" },
                    { num: 5, text: "Chilibeck PD et al. Effect of creatine supplementation during resistance training on lean tissue mass and muscular strength in older adults.", journal: "Open Access J Sports Med. 2017;8:213–226", url: "https://pubmed.ncbi.nlm.nih.gov/29138605/" },
                    { num: 6, text: "Wilson JM et al. International Society of Sports Nutrition Position Stand: beta-hydroxy-beta-methylbutyrate (HMB).", journal: "J Int Soc Sports Nutr. 2013;10(1):6", url: "https://pubmed.ncbi.nlm.nih.gov/23374455/" },
                    { num: 7, text: "Panton LB et al. Nutritional supplementation of the leucine metabolite HMB during resistance training.", journal: "Nutrition. 2000;16(9):734–739", url: "https://pubmed.ncbi.nlm.nih.gov/10978853/" },
                    { num: 8, text: "Rosanoff A et al. Suboptimal magnesium status in the United States: are the health consequences underestimated?", journal: "Nutr Rev. 2012;70(3):153–164", url: "https://pubmed.ncbi.nlm.nih.gov/22364157/" },
                    { num: 9, text: "Beaudart C et al. The effects of vitamin D on skeletal muscle strength, muscle mass, and muscle power: a systematic review and meta-analysis.", journal: "J Clin Endocrinol Metab. 2014;99(11):4336–4345", url: "https://pubmed.ncbi.nlm.nih.gov/25033068/" },
                    { num: 10, text: "Zdzieblik D et al. The influence of specific bioactive collagen peptides on body composition and muscle strength in middle-aged, untrained women.", journal: "Nutrients. 2019;11(4):892", url: "https://pubmed.ncbi.nlm.nih.gov/31010031/" },
                    { num: 11, text: "de Miranda RB et al. Effects of hydrolyzed collagen supplementation on skin aging: a systematic review and meta-analysis.", journal: "Int J Dermatol. 2021;60(12):1449–1461", url: "https://pubmed.ncbi.nlm.nih.gov/33742704/" },
                    { num: 12, text: "Straits Research. GLP-1 Supplement Market Size, Share, Growth, Analysis to 2034.", journal: "Market Report, 2026", url: "https://straitsresearch.com/report/glp-1-supplement-market" },
                  ].map((ref) => (
                    <div key={ref.num} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: ref.num < 12 ? "1px solid #F2F8F4" : "none", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 13, fontWeight: 800, color: "#E4E8E5", flexShrink: 0, width: 20, textAlign: "right", paddingTop: 1 }}>{ref.num}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 12, color: "#3F4B43", lineHeight: 1.55, margin: 0 }}>
                          {ref.text}{" "}
                          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770" }}>{ref.journal}</span>
                        </p>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: "#0F7A5A", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none", marginTop: 2, display: "inline-block" }}>
                          PubMed →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Mobile share row */}
            <div className="block lg:hidden" style={{ marginBottom: 32, padding: "16px 20px", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1714" }}>Share this article</span>
              <div style={{ display: "flex", gap: 8 }}>
                <ShareButtons title="GLP-1 Companion Supplements: The 2026 Trend" slug="glp1-companion-supplements-2026" />
              </div>
            </div>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#586259", textTransform: "uppercase" }}>FAQ</span>
                <span style={{ flex: 1, height: 1, backgroundColor: "#E4E8E5" }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.12em", color: "#0F7A5A", textTransform: "uppercase" }}>{faqList.length} Questions</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>
                Frequently Asked{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>Questions</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqList.map((faq, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{ border: "1px solid #E4E8E5", borderRadius: 10, overflow: "hidden", backgroundColor: "#FFFFFF" }}
                  >
                    <summary style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, color: "#17211C", cursor: "pointer", fontFamily: "var(--font-hanken), sans-serif", lineHeight: 1.5, listStyle: "none", display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: "#E4E8E5", flexShrink: 0, width: 28, textAlign: "center" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ flex: 1 }}>{faq.q}</span>
                      <span style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#FFF5EB", border: "1px solid #EBD8C3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "#0F7A5A", lineHeight: 1 }} className="faq-toggle">+</span>
                      </span>
                    </summary>
                    <div style={{ padding: "0 20px 18px 62px", borderTop: "1px solid #F2F8F4" }}>
                      <p style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.8, margin: 0, paddingTop: 14 }}>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </article>
        </div>

        {/* Related Content */}
        <section style={{ marginTop: 72, paddingTop: 40, borderTop: "1px solid #E4E8E5" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>
              Similar <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0F7A5A" }}>articles</em>
            </h2>
            <Link href="/blog" style={{ fontSize: 12, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8, scrollSnapType: "x mandatory" }} className="review-table-wrap">
            {[
              { href: "/blog/glp1-benefits-beyond-weight-loss", type: "Blog", title: "GLP-1: 5 Benefits Beyond Weight Loss", desc: "Cardiovascular protection, kidney defence, addiction modulation — trial evidence reviewed." },
              { href: "/ingredients/creatine", type: "Ingredient", title: "Creatine Monohydrate", desc: "The most studied sports supplement. Muscle mass, strength, and cognitive benefits." },
              { href: "/research/glp1-beyond-weight-loss", type: "Research", title: "GLP-1 Deep Dive", desc: "SELECT trial, FLOW trial, and the expanding evidence base for GLP-1 receptor agonists." },
              { href: "/ingredients/magnesium", type: "Ingredient", title: "Magnesium Glycinate", desc: "Modest but consistent reduction in sleep latency. Best-absorbed form." },
              { href: "/blog/plant-foods-menopause", type: "Blog", title: "Plant Foods for Menopause", desc: "Seven food categories with RCT evidence for combating menopause weight gain." },
              { href: "/reviews/optimum-nutrition-gold-standard-whey", type: "Review · 9/10", title: "ON Gold Standard Whey", desc: "The benchmark whey — Informed Choice certified, consistent protein yield." },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="hub-card"
                style={{ flex: "0 0 210px", scrollSnapAlign: "start", textDecoration: "none", borderRadius: 14, overflow: "hidden", border: "1px solid #EBD8C3", backgroundColor: "#FFFFFF" }}
              >
                <div style={{ height: 100, background: "linear-gradient(135deg, #17211C 0%, #0F7A5A 100%)", display: "flex", alignItems: "flex-end", padding: "10px 14px", position: "relative" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", backgroundColor: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: 4 }}>{card.type}</span>
                </div>
                <div style={{ padding: "14px 14px 16px" }}>
                  <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.9rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.25, marginBottom: 6 }}>{card.title}</p>
                  <p style={{ fontSize: 11, color: "#586259", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#6B7770", fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>
              ← Back to Blog
            </Link>
            <div style={{ display: "flex", gap: 6 }}>
              {["GLP-1", "Supplements", "Muscle Loss", "Nutrition"].map(tag => (
                <span key={tag} style={{ padding: "4px 10px", border: "1px solid #E4E8E5", borderRadius: 20, fontSize: 10, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
