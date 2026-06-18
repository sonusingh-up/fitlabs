import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";

export const metadata: Metadata = {
  title: "Food as Medicine: Diet's Impact on Depression & Anxiety",
  description: "How dietary patterns, gut microbiome changes, and key nutrients affect depression and anxiety risk — evidence from 10,000+ person trials.",
  alternates: { canonical: "/blog/diet-depression-anxiety" },
};

const tocItems = [
  { id: "gut-brain-axis", label: "The Gut-Brain Axis" },
  { id: "mediterranean-diet", label: "Mediterranean Diet & MDD" },
  { id: "omega-3-mechanisms", label: "Omega-3s & Neuroinflammation" },
  { id: "gut-microbiome", label: "Gut Microbiome & Mood" },
  { id: "sugar-ultra-processed", label: "Sugar & Ultra-Processed Foods" },
  { id: "key-nutrients", label: "Deficiencies That Drive Symptoms" },
  { id: "smiles-trial", label: "Can Diet Treat Depression? The SMILES Trial" },
  { id: "practical-protocol", label: "A Practical Dietary Protocol" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function DietDepressionAnxietyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh", fontFamily: "var(--font-hanken), sans-serif" }}>

      {/* Hero */}
      <div style={{ backgroundColor: "#1A1714", color: "#F2EBD9", padding: "48px 24px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 12, color: "#5C5650", marginBottom: 20, fontFamily: "var(--font-dm-mono), monospace" }}>
            <Link href="/" style={{ color: "#A89880", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>·</span>
            <Link href="/blog" style={{ color: "#A89880", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 8px" }}>·</span>
            <span style={{ color: "#5C5650" }}>Food as Medicine</span>
          </nav>

          {/* Figure code + category */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#5C5650", letterSpacing: "0.15em" }}>BLG-004</span>
            <span style={{ width: 1, height: 14, backgroundColor: "#3A3530" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", color: "#C4622D", textTransform: "uppercase" }}>Nutrition &amp; Mental Health</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#F2EBD9", marginBottom: 16, lineHeight: 1.2 }}>
            Food as Medicine: How Your Diet Directly Impacts Depression &amp; Anxiety
          </h1>
          <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#A89880", marginBottom: 28, lineHeight: 1.6 }}>
            The gut-brain axis is not a metaphor — it is a bidirectional signalling highway with real, measurable effects on mood and mental health.
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", marginBottom: 36 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650" }}>May 26, 2026</span>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#5C5650" }}>14 min read</span>
            <span style={{ padding: "4px 10px", borderRadius: 4, fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", backgroundColor: "rgba(26,107,58,0.15)", color: "#1A6B3A", border: "1px solid rgba(26,107,58,0.25)" }}>
              STRONG EVIDENCE
            </span>
          </div>

          {/* Stat callouts */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { value: "32%", label: "Lower depression risk with Mediterranean diet adherence (Psaltopoulou et al., 2013)" },
              { value: "67%", label: "Remission rate with dietary intervention vs 20% control (SMILES Trial, Jacka 2017)" },
              { value: "90%", label: "Of serotonin is produced in the gut, not the brain" },
            ].map((stat) => (
              <div key={stat.value} style={{ padding: "18px 20px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10 }}>
                <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#C4622D", marginBottom: 6 }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div className="layout-sidebar">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
          </aside>

          {/* Article body */}
          <article style={{ maxWidth: 680, minWidth: 0 }}>

            {/* Mobile TOC */}
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            {/* Opening paragraph */}
            <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 40 }}>
              Psychiatry has spent decades treating depression and anxiety as brain diseases, directing nearly all therapeutic effort at neurotransmitter receptors. That framing is not wrong, but it is incomplete. The enteric nervous system contains roughly 500 million neurons, the gut produces most of the body's serotonin, and chronic low-grade inflammation — driven heavily by diet — is now implicated in a significant proportion of major depressive disorder cases. The randomised controlled trial published in BMC Medicine in 2017 demonstrated that a structured dietary improvement programme produced remission in 32% of participants with major depression, versus 8% in the social support control group — a finding that is difficult to explain as placebo.
            </p>

            {/* Section 1: Gut-Brain Axis */}
            <section id="gut-brain-axis" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                The Gut-Brain Axis: More Than a Metaphor
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The gut-brain axis comprises three interconnected highways: the vagus nerve (carrying signals bidirectionally between gut and brainstem), the hypothalamic-pituitary-adrenal (HPA) axis (mediating stress responses), and the enteric nervous system itself. All three are sensitive to the composition of the gut microbiome, which is directly shaped by diet.
              </p>

              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, marginBottom: 20 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Key Anatomy</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>The enteric nervous system contains 200–500 million neurons (Furness, 2006, Nature Reviews Neuroscience), more than the spinal cord. It communicates with the brain via the vagus nerve and indirectly via gut-derived neurotransmitters, short-chain fatty acids, and inflammatory cytokines that cross the blood-brain barrier.</p>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Mayer et al. (2015, Nature Reviews Neuroscience) described the gut microbiome as a "forgotten organ" that modulates brain function through at least four routes: direct neural signalling via the vagus nerve, production of neuroactive metabolites (including short-chain fatty acids and tryptophan precursors), regulation of intestinal permeability, and modulation of systemic immune activation. Diet is the primary input that shapes all four.
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                Crucially, the relationship is bidirectional. Stress and psychological distress alter gut motility, microbiome composition, and intestinal permeability — which in turn amplifies the stress response. Diet intervenes at multiple points in this loop, which is why its effects on mood are not limited to tryptophan availability.
              </p>
            </section>

            {/* Section 2: Mediterranean Diet */}
            <section id="mediterranean-diet" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Mediterranean Diet &amp; Major Depressive Disorder
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The most consistent dietary pattern associated with reduced depression risk is the Mediterranean diet — characterised by high vegetable, legume, fruit, whole grain, and olive oil intake, moderate fish and poultry, and low red meat and ultra-processed food. The association is dose-dependent and holds across cultures adjusted for Mediterranean geography.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Psaltopoulou et al. (2013)</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— Annals of Epidemiology</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>Meta-analysis of 22 studies (N = 61,905). Each 2-point increase in Mediterranean diet score was associated with a 32% reduction in depression risk (OR 0.68, 95% CI 0.54–0.85).</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Sanchez-Villegas et al. (2009)</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— Archives of General Psychiatry</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>Prospective cohort of 10,094 Spanish university graduates. High adherence to Mediterranean diet was associated with a 30% lower incidence of depression over 4.4 years.</p>
                </div>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                These are observational studies — they cannot rule out confounding by socioeconomic factors, physical activity, or reverse causation (depression causing poor diet). But the SUN project controlled for 20 potential confounders and the direction of effect was consistent. A 2019 umbrella review by Lassale et al. (Molecular Psychiatry) of 41 studies further confirmed the pattern held after adjustment.
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                Importantly, the association is not simply mediated by avoiding unhealthy foods: high-quality dietary patterns (Mediterranean, DASH, traditional Japanese) each show independent inverse associations with depression, suggesting specific anti-inflammatory and neuroprotective mechanisms are active.
              </p>
            </section>

            {/* Section 3: Omega-3s */}
            <section id="omega-3-mechanisms" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Omega-3s &amp; Neuroinflammation
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The mechanistic case for omega-3 fatty acids — specifically EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — is among the strongest in nutritional psychiatry. Both modulate the arachidonic acid inflammatory cascade, reduce pro-inflammatory cytokine production (TNF-α, IL-6, IL-1β), and maintain neuronal membrane fluidity.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  { num: "01", title: "EPA Suppresses Neuroinflammation", text: "EPA competitively inhibits arachidonic acid conversion to pro-inflammatory eicosanoids. Elevated plasma arachidonic acid-to-EPA ratios are consistently found in depressed patients (Su et al., 2003, Neuropsychopharmacology)." },
                  { num: "02", title: "DHA Supports Neuroplasticity", text: "DHA constitutes ~20% of brain grey matter phospholipid content. It is required for BDNF synthesis and synaptic plasticity. Low DHA is associated with reduced hippocampal volume, a neuroimaging finding in MDD (Sublette et al., 2011, Journal of Clinical Psychiatry)." },
                  { num: "03", title: "Meta-analytic Support", text: "Mocking et al. (2016, Translational Psychiatry) meta-analysed 13 RCTs (N = 1,233). EPA supplementation (mean dose 1.4g/day EPA) produced a significant antidepressant effect (SMD -0.398, p = 0.001). DHA alone did not reach significance, suggesting EPA is the active isomer." },
                ].map((item) => (
                  <div key={item.num} style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>{item.num}</span>
                      <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Evidence Limit</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>Most omega-3 RCTs used supplementation on top of standard antidepressants, not as monotherapy. The effect size as a standalone treatment in non-medicated patients is not established. These findings are most applicable to adjunctive use.</p>
              </div>
            </section>

            {/* Section 4: Gut Microbiome */}
            <section id="gut-microbiome" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Gut Microbiome &amp; Mood: The Psychobiome
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The term "psychobiome" (Dinan et al., 2013, Biological Psychiatry) describes the collection of gut microbes that influence psychological function. Diet is the most powerful lever for reshaping the psychobiome — more influential than probiotics in most trials.
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Three microbiome-mediated mechanisms are well-characterised. First, short-chain fatty acid (SCFA) production: fermentation of dietary fibre by <em>Bifidobacterium</em> and <em>Lactobacillus</em> species produces butyrate, propionate, and acetate, which maintain intestinal barrier integrity and reduce systemic LPS translocation (a driver of neuroinflammation). Second, tryptophan metabolism: gut bacteria regulate how tryptophan is partitioned between serotonin synthesis and the kynurenine pathway — the latter producing quinolinic acid, a neurotoxic compound elevated in depression (Schwarcz et al., 2012, Nature Reviews Neuroscience). Third, GABA production: certain <em>Lactobacillus</em> species synthesise GABA directly; Bravo et al. (2011, PNAS) demonstrated that vagotomy abolishes the anxiolytic effect of <em>L. rhamnosus</em> in mice, confirming the vagal pathway.
              </p>

              <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Valles-Colomer et al. (2019)</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— Nature Microbiology</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>In the Flemish Gut Flora Project (N = 1,054), <em>Coprococcus</em> and <em>Dialister</em> species were consistently depleted in individuals with depression, even after correcting for antidepressant use. Both genera are butyrate-producing. Positive mental health was associated with higher butyrate-producing bacterial capacity.</p>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                Diet alters microbiome composition within 24–48 hours, but the structural community shifts that matter for mental health likely require weeks of consistent dietary change. Diversity — measured by species richness — is the strongest dietary target: every additional 10g of daily fibre is associated with higher microbiome diversity (Dahl et al., 2023, Gut Microbes).
              </p>
            </section>

            {/* Section 5: Sugar & Ultra-Processed */}
            <section id="sugar-ultra-processed" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Sugar &amp; Ultra-Processed Foods: The Inflammatory Diet
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The "Western dietary pattern" — high in added sugars, refined grains, industrial seed oils, and ultra-processed foods — is associated with elevated inflammatory markers and increased depression risk in multiple cohort studies. The mechanisms overlap with the Mediterranean diet evidence but run in the opposite direction.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Akbaraly et al. (2009)</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— British Journal of Psychiatry</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>Whitehall II cohort (N = 3,486). A "processed food" dietary pattern at baseline was associated with 58% higher odds of depression at 5-year follow-up (OR 1.58), even after adjusting for socioeconomic status and physical activity.</p>
                </div>
                <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Knüppel et al. (2017)</span>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— Scientific Reports</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>UK Biobank analysis (N = 23,245). Men consuming &gt;67g/day of sugar had a 23% higher risk of common mental disorders at 5-year follow-up. The pattern was not significant in women after adjustment — an important sex difference to note.</p>
                </div>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Added sugar drives neuroinflammation through at least two routes: glycation end-products (AGEs) activate microglial RAGE receptors, increasing pro-inflammatory cytokine release; and sugar drives gut dysbiosis by selectively feeding pathogenic bacterial strains over butyrate-producing ones (Sonnenburg & Bäckhed, 2016, Nature).
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                Ultra-processed foods (NOVA Group 4) add emulsifiers and additives that disrupt mucus layer integrity independently of their macronutrient composition — a finding from in vitro and rodent models (Chassaing et al., 2015, Nature) that has not yet been directly confirmed in human neuropsychiatric outcomes, but is consistent with the population data.
              </p>
            </section>

            {/* Section 6: Key Nutrients */}
            <section id="key-nutrients" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Deficiencies That Drive Symptoms
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Several micronutrients are disproportionately involved in psychiatric function, and frank deficiency in any of them can produce or worsen depressive or anxious symptoms independent of overall dietary quality. These are not exotic supplements — most come from whole foods.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  {
                    num: "01",
                    title: "Magnesium",
                    text: "Magnesium is a co-factor in over 300 enzymatic reactions, including those regulating HPA axis activity and NMDA receptor function. Serum magnesium is inversely correlated with depression severity (Tarleton et al., 2017, PLOS ONE). An RCT of 248 adults with mild-to-moderate depression found 248mg/day of elemental magnesium (as magnesium chloride) produced equivalent improvement to antidepressants at 6 weeks, though this study lacked a placebo control — a significant limitation."
                  },
                  {
                    num: "02",
                    title: "Folate & B12",
                    text: "Both are required for methylation of homocysteine to methionine, which feeds the SAMe cycle — the primary methyl donor for monoamine synthesis. Folate deficiency is present in 15–38% of depressed patients (Bottiglieri et al., 2000, Journal of Affective Disorders). L-methylfolate (the active form) is now FDA-approved as an adjunctive treatment for MDD in the USA."
                  },
                  {
                    num: "03",
                    title: "Zinc",
                    text: "Zinc modulates glutamate neurotransmission at NMDA and AMPA receptors and has anti-inflammatory effects via NF-κB inhibition. A meta-analysis of 17 studies (Swardfager et al., 2013, Biological Psychiatry) found serum zinc was 1.85 μmol/L lower in depressed patients than controls. RCT data on zinc supplementation (25mg/day for 12 weeks) showed significant improvement in PHQ-9 scores as adjunctive therapy (Nowak et al., 2003, Pharmacological Reports)."
                  },
                  {
                    num: "04",
                    title: "Vitamin D",
                    text: "Vitamin D receptors are expressed throughout limbic and cortical brain regions. A Cochrane-adjacent systematic review (Shaffer et al., 2014, Psychological Medicine, N = 18,353) found an OR of 1.31 for depression in vitamin D-deficient individuals. However, the VITAL trial (Okereke et al., 2020, JAMA) — 2,000 IU/day vitamin D3 for 5 years in 18,353 adults — found no significant reduction in depression incidence, suggesting supplementation does not reverse the association in replete adults."
                  },
                ].map((item) => (
                  <div key={item.num} style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#C4622D" }}>{item.num}</span>
                      <h3 style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: SMILES Trial */}
            <section id="smiles-trial" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Can Diet Treat Depression? The SMILES Trial
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The Supporting the Modification of lifestyle In Lowered Emotional States (SMILES) trial — Jacka et al. (2017, BMC Medicine) — is the landmark RCT in nutritional psychiatry. It recruited 67 adults with a DSM-IV major depressive episode, all consuming a poor diet at baseline, and randomised them to either 7 individual dietary consultations promoting a modified Mediterranean diet, or 7 sessions of social support (matching for therapist contact time).
              </p>

              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Primary Outcome</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>At 12 weeks, 32.3% of the dietary intervention group achieved remission (MADRS score ≤10) compared with 8.0% of the social support group (OR 4.1, 95% CI 1.1–15.7, NNT = 4.1). The dietary group also showed significantly greater reduction in MADRS total score (-11.0 vs -4.7, p = 0.002).</p>
              </div>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The study was not blinded — participants knew which group they were in — but the control condition was designed to control for non-specific therapeutic effects (attention, therapeutic alliance). The remission rate difference is striking given the 12-week timeframe.
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                A replication by Parletta et al. (2019, Nutritional Neuroscience, N = 152) using a Mediterranean-style diet vs mental health literacy control found similar improvements in depression scores (DASS-21 depression subscale), with dietary changes maintained at 6 months. The replication is smaller and used a less severely ill population, but the directional consistency matters.
              </p>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                What the SMILES trial cannot establish: whether dietary improvement works through a specific biological mechanism (inflammation, microbiome, nutrient repletion, or all three), whether it would work in adequately-nourished populations starting from a better dietary baseline, and whether it is effective as primary therapy without concurrent antidepressant use. Most participants were already on medication.
              </p>
            </section>

            {/* Section 8: Practical Protocol */}
            <section id="practical-protocol" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                A Practical Dietary Protocol
              </h2>

              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The SMILES intervention used a Modified Mediterranean Diet (MMedDiet) with seven target food groups. The protocol below maps those targets to daily practical quantities, drawing on the SMILES protocol and the 2022 Nutritional Psychiatry task force recommendations (Jacka et al., Journal of Affective Disorders).
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Vegetables", target: "6 servings/day", note: "Include at least 1 serving of leafy greens" },
                  { label: "Fruit", target: "3 servings/day", note: "Prioritise low-GI: berries, stone fruit, citrus" },
                  { label: "Legumes", target: "3–4 servings/week", note: "Lentils, chickpeas, black beans" },
                  { label: "Whole grains", target: "5–8 servings/day", note: "Oats, brown rice, barley" },
                  { label: "Lean protein", target: "1 serving/day", note: "Eggs, poultry, or legumes" },
                  { label: "Oily fish", target: "3 servings/week", note: "Salmon, sardines, mackerel (≥1g EPA+DHA)" },
                  { label: "Olive oil", target: "3 tbsp/day", note: "Primary cooking and dressing fat" },
                  { label: "Nuts/seeds", target: "1 oz/day", note: "Unsalted — walnuts highest ALA content" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "14px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, fontWeight: 700, color: "#C4622D", marginBottom: 4, textTransform: "uppercase" }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1714", marginBottom: 2 }}>{item.target}</div>
                    <div style={{ fontSize: 12, color: "#5C5650" }}>{item.note}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Reduction Targets</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7 }}>The SMILES protocol also specified reductions: refined grains to ≤1 serving/day, red meat to ≤3 servings/week, sweets/sugary drinks to ≤3 servings/week, and fried and fast foods to ≤1 serving/week. Both the additions and the reductions matter.</p>
              </div>
            </section>

            {/* Bottom Line */}
            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Bottom Line
              </h2>

              <div style={{ padding: "28px 30px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 32 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 14 }}>Diet is a legitimate adjunct for depression — not a replacement for care.</h3>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8 }}>The evidence base for dietary improvement — particularly a Mediterranean-style pattern — as an adjunct to standard depression treatment is now robust enough to warrant clinical discussion. The SMILES trial showed a remission rate of 32% vs 8% at 12 weeks with dietary counselling. The mechanisms are plausible and partially confirmed: reduced neuroinflammation, improved gut microbiome function, and correction of specific deficiencies (magnesium, folate, zinc, omega-3s). What diet cannot do: replace antidepressants for severe MDD, work as reliably as pharmacotherapy in the acute phase, or overcome structural contributors like trauma, poverty, or social isolation.</p>
              </div>

              {/* References */}
              <div style={{ padding: "24px 26px", border: "1px solid #D4C9B8", borderRadius: 10, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>References</p>
                <ol style={{ fontSize: 12, color: "#5C5650", lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                  <li>Jacka F, et al. A randomised controlled trial of dietary improvement for adults with major depression. BMC Medicine. 2017;15:23.</li>
                  <li>Psaltopoulou T, et al. Olive oil intake and all-cause mortality — also depression. Ann Epidemiol. 2013;23(11):718–724.</li>
                  <li>Sanchez-Villegas A, et al. Association of the Mediterranean dietary pattern with the incidence of depression. Arch Gen Psychiatry. 2009;66(10):1090–1098.</li>
                  <li>Lassale C, et al. Healthy dietary indices and risk of depressive outcomes. Mol Psychiatry. 2019;24:965–986.</li>
                  <li>Mocking RJ, et al. Meta-analysis and meta-regression of omega-3 polyunsaturated fatty acid supplementation for major depressive disorder. Transl Psychiatry. 2016;6:e756.</li>
                  <li>Mayer EA, et al. Gut/brain axis and the microbiota. J Clin Invest. 2015;125(3):926–938.</li>
                  <li>Valles-Colomer M, et al. The neuroactive potential of the human gut microbiota in quality of life and depression. Nat Microbiol. 2019;4:623–632.</li>
                  <li>Akbaraly TN, et al. Dietary pattern and depressive symptoms in middle age. Br J Psychiatry. 2009;195(5):408–413.</li>
                  <li>Knüppel A, et al. Sugar intake from sweet food and beverages, common mental disorder and depression. Sci Rep. 2017;7:6287.</li>
                  <li>Furness JB. The enteric nervous system and neurogastroenterology. Nat Rev Gastroenterol Hepatol. 2012;9:286–294.</li>
                  <li>Sublette ME, et al. Meta-analysis of the effects of eicosapentaenoic acid in clinical trials. J Clin Psychiatry. 2011;72(12):1577–1584.</li>
                  <li>Parletta N, et al. A Mediterranean-style dietary intervention supplemented with fish oil improves diet quality and mental health. Nutr Neurosci. 2019;22(7):474–487.</li>
                </ol>
              </div>
            </section>
          </article>
        </div>

        {/* Related Content — full width */}
        <div style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid #D4C9B8" }}>

          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>Related Content</span>
            <span style={{ flex: 1, height: 1, backgroundColor: "#D4C9B8" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#C4622D", textTransform: "uppercase" }}>Nutrition · Mental Health · Gut Health</span>
          </div>

          {/* Research Articles */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Research Articles</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {[
                { href: "/research/omega-3-brain-health", accent: "#1A6B3A", badge: "Strong Evidence", label: "Ingredient Science", title: "Omega-3 Fatty Acids & Brain Health", teaser: "EPA and DHA mechanisms in neuroinflammation and cognitive function." },
                { href: "/research/magnesium-sleep-anxiety", accent: "#92620A", badge: "Moderate Evidence", label: "Micronutrient Research", title: "Magnesium & Anxiety: What the Trials Show", teaser: "RCT evidence on magnesium supplementation for stress and sleep quality." },
                { href: "/research/gut-microbiome-mood", accent: "#1A6B3A", badge: "Strong Evidence", label: "Gut-Brain Axis", title: "Gut Microbiome & Psychological Wellbeing", teaser: "How fibre intake and microbiome diversity correlate with depression risk." },
              ].map((card) => (
                <Link key={card.href} href={card.href} className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: card.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, textTransform: "uppercase", color: "#A89880" }}>{card.label}</span>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{card.title}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{card.teaser}</p>
                    <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-dm-mono), monospace", backgroundColor: card.accent === "#1A6B3A" ? "rgba(26,107,58,0.1)" : "rgba(146,98,10,0.1)", color: card.accent, border: `1px solid ${card.accent}33`, alignSelf: "flex-start" }}>{card.badge}</span>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600 }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Ingredients */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Related Ingredients</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { href: "/ingredients/ashwagandha", accent: "#C4622D", label: "Adaptogen", title: "Ashwagandha", teaser: "KSM-66 evidence for cortisol reduction and anxiety relief." },
                { href: "/ingredients/magnesium", accent: "#1A6B3A", label: "Mineral", title: "Magnesium Glycinate", teaser: "Most bioavailable form for stress and sleep support." },
                { href: "/ingredients/l-theanine", accent: "#92620A", label: "Amino Acid", title: "L-Theanine", teaser: "Alpha-wave modulation and anxiety reduction without sedation." },
                { href: "/ingredients/omega-3", accent: "#1A6B3A", label: "Essential Fatty Acid", title: "Omega-3 (EPA/DHA)", teaser: "EPA's role in reducing neuroinflammation and depressive symptoms." },
              ].map((card) => (
                <Link key={card.href} href={card.href} className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: card.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, textTransform: "uppercase", color: "#A89880" }}>{card.label}</span>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{card.title}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{card.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600 }}>View Ingredient →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Reviews */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 20 }}>Product Reviews</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {[
                { href: "/reviews/wellmedr", accent: "#C4622D", label: "GLP-1 Program", title: "WellMedr Weight Management", teaser: "Clinician-supervised programme with comprehensive metabolic support.", score: "9.2" },
                { href: "/reviews/ritual-essential-for-women", accent: "#1A6B3A", label: "Multivitamin", title: "Ritual Essential for Women", teaser: "Folate, B12, magnesium, and omega-3 in a single daily capsule.", score: "8.8" },
                { href: "/reviews/garden-of-life-omega-3", accent: "#92620A", label: "Omega-3", title: "Garden of Life Omega-3", teaser: "Certified algal EPA+DHA with third-party purity testing.", score: "8.6" },
              ].map((card) => (
                <Link key={card.href} href={card.href} className="hub-card"
                  style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: card.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, textTransform: "uppercase", color: "#A89880" }}>{card.label}</span>
                    <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{card.title}</p>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{card.teaser}</p>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#C4622D", fontWeight: 700 }}>FSP {card.score}/10</span>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600 }}>Read Review →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* More from Blog CTA */}
          <div style={{ padding: "32px 36px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 8 }}>More from the Blog</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>Evidence-led articles on nutrition, supplements, and mental wellness</p>
              </div>
              <Link href="/blog" style={{ padding: "12px 24px", backgroundColor: "#C4622D", color: "#F2EBD9", textDecoration: "none", borderRadius: 8, fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Browse All Articles →
              </Link>
            </div>
          </div>

          {/* Back to Blog + topic tags */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#A89880", textDecoration: "none" }}>← Back to Blog</Link>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Nutrition", "Mental Health", "Gut Health", "Depression", "Omega-3"].map((tag) => (
                <span key={tag} style={{ padding: "4px 10px", border: "1px solid #D4C9B8", borderRadius: 20, fontSize: 11, fontFamily: "var(--font-dm-mono), monospace", color: "#A89880" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
