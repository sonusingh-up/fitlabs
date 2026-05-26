import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";

export const metadata: Metadata = {
  title: "GLP-1 Drugs: 5 Surprising Benefits Beyond Weight Loss",
  description: "Ozempic and Wegovy are known for weight loss, but cardiovascular protection, kidney defence, addiction modulation, and neuroprotection are where the evidence gets interesting.",
  alternates: { canonical: "/blog/glp1-benefits-beyond-weight-loss" },
};

const tocItems = [
  { id: "what-glp1-does", label: "What GLP-1 Agonists Actually Do" },
  { id: "cardiovascular", label: "1. Cardiovascular Protection" },
  { id: "kidney", label: "2. Kidney Disease Defence" },
  { id: "addiction", label: "3. Addiction & Reward Modulation" },
  { id: "neuroprotection", label: "4. Neuroprotection" },
  { id: "inflammation", label: "5. Systemic Inflammation" },
  { id: "who-for", label: "Who These Drugs Are Actually For" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function GLP1Article() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>GLP-1 Benefits Beyond Weight Loss</span>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>BLG-002</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Metabolic Health · GLP-1 Science</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            GLP-1 Drugs Like Ozempic &amp; Wegovy:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>5 Surprising Benefits Beyond Weight Loss</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>May 2026</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>13 min read</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#1A6B3A", backgroundColor: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)", textTransform: "uppercase" }}>Strong Evidence</span>
          </div>
          <div style={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {[
              { value: "20%", label: "MACE reduction in SELECT trial (non-diabetic obese)" },
              { value: "24%", label: "kidney failure reduction in FLOW trial" },
              { value: "~50%", label: "reduction in alcohol use disorder relapse (early data)" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 20px", backgroundColor: i === 0 ? "#1A1714" : "#F0E8D5", border: "1px solid #D4C9B8", flex: 1, minWidth: 150 }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: i === 0 ? "#C4622D" : "#1A1714", margin: 0 }}>{s.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.12em", color: i === 0 ? "#8A8480" : "#A89880", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="container-pad">
        <div className="layout-sidebar">
          <aside className="hidden lg:block" style={{ borderRight: "1px solid #D4C9B8" }}>
            <TableOfContents items={tocItems} />
          </aside>
          <article style={{ maxWidth: 680, minWidth: 0 }}>
            <div className="block lg:hidden" style={{ marginBottom: 32 }}>
              <MobileTOC items={tocItems} />
            </div>

            <p style={{ fontSize: 16, color: "#2D2926", lineHeight: 1.85, marginBottom: 48 }}>
              Semaglutide and liraglutide became household names on the back of dramatic weight loss results. But the researchers running the cardiovascular outcome trials were noticing something that had nothing to do with the number on the scale: people were having fewer heart attacks, their kidneys were holding up better, and — in some trials — they were drinking less alcohol. The weight loss is real, but for a drug class that acts on receptors distributed across the heart, brain, kidneys, and gut, it was always going to do more than shrink fat tissue.
            </p>

            <section id="what-glp1-does" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                What GLP-1 Agonists Actually Do
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Glucagon-like peptide-1 (GLP-1) is an incretin hormone released from L-cells in the gut in response to food. It signals the pancreas to secrete insulin, suppresses glucagon, slows gastric emptying, and acts on the hypothalamus to reduce appetite. GLP-1 receptor agonists (GLP-1 RAs) mimic this hormone but with a much longer half-life — semaglutide&apos;s weekly dosing form has a half-life of approximately 165 hours.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The critical point: GLP-1 receptors are not confined to the pancreas. They are expressed on cardiac myocytes, renal tubular cells, neurons in the brainstem and hypothalamus, immune cells, and the mesolimbic dopamine system. This broad receptor distribution is why the clinical effects of these drugs extend far beyond glycaemic control and weight.
              </p>
              <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Drugs covered in this article</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "#1A1714" }}>Semaglutide</strong> (Ozempic — T2D weekly injection; Wegovy — obesity weekly injection; Rybelsus — daily oral). <strong style={{ color: "#1A1714" }}>Liraglutide</strong> (Victoza — T2D; Saxenda — obesity). <strong style={{ color: "#1A1714" }}>Tirzepatide</strong> (Mounjaro/Zepbound — dual GIP/GLP-1 agonist) shares many of these mechanisms.
                </p>
              </div>
            </section>

            <section id="cardiovascular" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                1. Cardiovascular Protection
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                This is the most robustly evidenced benefit. Multiple large cardiovascular outcome trials (CVOTs) were mandated by regulators after 2008 to confirm these drugs did not increase cardiac risk. They found the opposite.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  { study: "LEADER trial (Marso et al., 2016)", journal: "NEJM — 9,340 participants", finding: "Liraglutide reduced major adverse cardiovascular events (MACE: heart attack, stroke, CV death) by 13% relative to placebo in high-CV-risk T2D patients over 3.8 years. CV death specifically reduced by 22%." },
                  { study: "SUSTAIN-6 (Marso et al., 2016)", journal: "NEJM — 3,297 participants", finding: "Weekly semaglutide 0.5mg and 1mg reduced MACE by 26% vs placebo in T2D. Non-fatal stroke showed the most pronounced reduction (39%)." },
                  { study: "SELECT trial (Lincoff et al., 2023)", journal: "NEJM — 17,604 participants", finding: "Critically, SELECT enrolled overweight/obese adults without diabetes but with established cardiovascular disease. Semaglutide 2.4mg reduced MACE by 20% vs placebo. This confirmed the cardiovascular benefit is not purely mediated by glucose lowering." },
                ].map(r => (
                  <div key={r.study} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>{r.study}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— {r.journal}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{r.finding}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                The mechanism is likely multi-factorial: direct cardioprotective effects via GLP-1R activation on cardiomyocytes, reduced atrial fibrillation burden, improved endothelial function, and indirect benefits from weight loss and blood pressure reduction. The SELECT data — in non-diabetics — makes it harder to attribute the effect to glucose control alone.
              </p>
            </section>

            <section id="kidney" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                2. Kidney Disease Defence
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                Chronic kidney disease (CKD) progression in type 2 diabetes has historically been managed primarily with ACE inhibitors and SGLT2 inhibitors. The FLOW trial changed the conversation.
              </p>
              <div style={{ padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>FLOW trial (Perkovic et al., 2024)</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— NEJM — 3,533 participants with T2D + CKD</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  Weekly semaglutide 1mg reduced the composite kidney endpoint (sustained 50% decline in eGFR, kidney failure, or kidney/CV death) by <strong style={{ color: "#1A1714" }}>24%</strong> compared to placebo. The trial was stopped early due to overwhelming efficacy. eGFR decline rate was significantly slower in the semaglutide group throughout the trial.
                </p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                The renal protection is partly explained by reduced glomerular hyperfiltration, lower blood pressure, and decreased albuminuria — but GLP-1 receptors on proximal tubular cells likely play a direct anti-fibrotic and anti-inflammatory role. This is an area of active mechanistic research; the clinical signal arrived before the mechanism was fully characterised.
              </p>
            </section>

            <section id="addiction" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                3. Addiction &amp; Reward Pathway Modulation
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                This is the most unexpected finding in GLP-1 research — and potentially the most consequential. Clinicians prescribing semaglutide for weight loss began noticing that patients were spontaneously reporting reduced alcohol cravings, less interest in smoking, and diminished compulsive behaviours. The mechanism traces to GLP-1 receptors in the mesolimbic dopamine system.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                GLP-1 receptors are expressed in the ventral tegmental area (VTA) and nucleus accumbens — core nodes of the brain&apos;s reward circuitry. Activation dampens dopaminergic signalling in response to rewarding stimuli. In animal models, GLP-1 agonists consistently reduce alcohol intake, cocaine self-administration, and nicotine use (Klausen et al., 2022, <em>Neuropsychopharmacology</em>).
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                {[
                  { claim: "Reduced alcohol consumption (self-reported) in obese patients on semaglutide", status: "Emerging clinical data + strong animal evidence" },
                  { claim: "Reduced nicotine cravings — case series and observational data", status: "Preliminary — prospective trials underway" },
                  { claim: "Potential application in alcohol use disorder", status: "Phase 2 trial (NCT05532319) ongoing as of 2026" },
                ].map(item => (
                  <div key={item.claim} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, padding: "12px 16px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", flexWrap: "wrap" }}>
                    <p style={{ fontSize: 13, color: "#2D2926", flex: 1 }}>{item.claim}</p>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.08em", color: "#92620A", backgroundColor: "rgba(146,98,10,0.08)", border: "1px solid rgba(146,98,10,0.2)", padding: "2px 8px", borderRadius: 4, flexShrink: 0 }}>{item.status}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                The honest caveat: most human data here is observational or from small studies. The animal evidence is mechanistically compelling, but the addiction application is not yet proven at the level of the cardiovascular trials. It is plausible, exciting, and appropriately under active clinical investigation.
              </p>
            </section>

            <section id="neuroprotection" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                4. Neuroprotection
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                GLP-1 receptors are expressed throughout the central nervous system — in the hippocampus, cortex, substantia nigra, and brainstem. This distribution sparked interest in whether GLP-1 agonists might protect against neurodegeneration.
              </p>
              <div style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#1A1714" }}>Athauda et al. (2017)</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>— The Lancet — Parkinson&apos;s disease RCT</span>
                </div>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  A randomised, double-blind, placebo-controlled trial of liraglutide in 45 Parkinson&apos;s patients over 12 months. The liraglutide group showed significantly better motor function scores and less cognitive decline at 12-month follow-up compared to placebo. This was a small trial, but one of the few RCTs of a GLP-1 agonist in neurodegeneration.
                </p>
              </div>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Separately, large observational analyses of T2D patients on GLP-1 agonists show lower rates of Alzheimer&apos;s diagnosis compared to matched patients on other diabetes medications. Norgaard et al. (2022, <em>Alzheimer&apos;s &amp; Dementia</em>) found a 50–70% lower risk of Alzheimer&apos;s in GLP-1 RA users vs sulfonylurea users — though confounding is a significant concern in observational data.
              </p>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                The mechanistic candidates include: reduced neuroinflammation, improved insulin signalling in neurons (insulin resistance in the brain is implicated in Alzheimer&apos;s pathology), and reduced amyloid-β accumulation in animal models. Phase 3 trials of semaglutide specifically for early Alzheimer&apos;s (EVOKE and EVOKE Plus) are underway. This remains a highly promising but unconfirmed application.
              </p>
            </section>

            <section id="inflammation" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                5. Systemic Inflammation Reduction
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                GLP-1 receptors are expressed on macrophages, monocytes, and dendritic cells. Activation shifts macrophage phenotype from pro-inflammatory (M1) toward anti-inflammatory (M2) polarisation and suppresses NF-κB signalling — the master regulator of inflammatory gene expression.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                In clinical trials, semaglutide and liraglutide consistently reduce high-sensitivity CRP (hsCRP), IL-6, and TNF-α. In the SELECT trial subanalysis (Petrie et al., 2023), hsCRP reduction with semaglutide was approximately 37% — substantially larger than what would be predicted from weight loss alone, suggesting a direct anti-inflammatory mechanism rather than a purely weight-mediated effect.
              </p>
              <div style={{ padding: "18px 20px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>Why this matters beyond labs</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  Chronic low-grade inflammation drives atherosclerosis, insulin resistance, sarcopenia, and cognitive decline. A drug that reduces CRP by 37% independent of weight loss would be a meaningful anti-inflammatory intervention in its own right. This mechanism likely explains part of the cardiovascular benefit seen in the CVOTs.
                </p>
              </div>
            </section>

            <section id="who-for" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>
                Who These Drugs Are Actually For
              </h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                The data above should not be read as endorsement for universal use. GLP-1 agonists are prescription drugs with real side effects — nausea (30–40% of users), vomiting, gallbladder disease, and rare but serious risks including pancreatitis and thyroid C-cell tumours (in rodents; human risk remains uncertain).
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A6B3A", marginBottom: 8 }}>Strongest evidence for</p>
                  {["T2D with high CV risk", "Obesity (BMI ≥30) with metabolic comorbidities", "CKD with T2D", "Established ASCVD without diabetes (SELECT data)"].map(i => <p key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: "0 0 5px", paddingLeft: 8, borderLeft: "2px solid #1A6B3A" }}>{i}</p>)}
                </div>
                <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 8 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A4020", marginBottom: 8 }}>Contraindicated / caution</p>
                  {["Personal/family history of MTC or MEN2", "Active pancreatitis", "Pregnancy", "Lean individuals without metabolic disease"].map(i => <p key={i} style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: "0 0 5px", paddingLeft: 8, borderLeft: "2px solid #C4622D" }}>{i}</p>)}
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75 }}>
                The muscle mass question is also unresolved. GLP-1 agonists cause significant lean mass loss alongside fat mass — roughly 25–40% of total weight lost is lean tissue in trials without resistance training. Anyone prescribed these drugs without a structured resistance training programme and adequate protein intake is accepting an unnecessary trade-off.
              </p>
            </section>

            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ padding: "28px 30px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 14, lineHeight: 1.3 }}>
                  GLP-1 agonists are systemic metabolic drugs, not weight loss pills.
                </h3>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 12 }}>
                  The cardiovascular and renal benefits are as well-evidenced as any drug class in modern cardiology. The addiction modulation and neuroprotection data are earlier-stage but mechanistically plausible and under rigorous investigation. For eligible patients, the benefit profile extends far beyond the scale.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8 }}>
                  The legitimate concerns — lean mass loss, gastrointestinal side effects, cost, access — are real and warrant honest discussion. But reframing these drugs purely as &ldquo;Ozempic for weight loss&rdquo; undersells both their clinical utility and the breadth of the underlying science.
                </p>
              </div>
              <div style={{ marginTop: 32, padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Key References</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Marso SP et al. Liraglutide and Cardiovascular Outcomes in Type 2 Diabetes. NEJM. 2016;375(4):311–322.",
                    "Marso SP et al. Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes. NEJM. 2016;375(19):1834–1844.",
                    "Lincoff AM et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. NEJM. 2023;389(24):2221–2232.",
                    "Perkovic V et al. Semaglutide and Kidney Outcomes in Type 2 Diabetes and CKD. NEJM. 2024.",
                    "Athauda D et al. Exenatide once weekly versus placebo in Parkinson's disease. Lancet. 2017;390(10103):1664–1675.",
                    "Klausen MK et al. Semaglutide reduces alcohol intake in alcohol-preferring vervet monkeys. JCI Insight. 2022.",
                    "Norgaard CH et al. Treatment with glucagon-like peptide-1 receptor agonists and incidence of dementia. Alzheimer's Dement. 2022.",
                  ].map(r => <p key={r} style={{ fontSize: 11, color: "#8A8480", lineHeight: 1.6, fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{r}</p>)}
                </div>
              </div>
            </section>
          </article>
        </div>

        {/* Related Content */}
        <section style={{ marginTop: 72, paddingTop: 48, borderTop: "2px solid #D4C9B8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>Related Content</span>
            <span style={{ flex: 1, height: 1, backgroundColor: "#D4C9B8" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>GLP-1 · Metabolic Health · Obesity</span>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Research Articles</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                { href: "/research/microdose-glp1", label: "GLP-1 Science", title: "Microdosing GLP-1", sub: "Clinical evidence review", teaser: "Emerging data on sub-therapeutic GLP-1 dosing for metabolic maintenance without full drug-level side effects.", accent: "#C4622D", evidence: "Limited", ec: "#8A4020" },
                { href: "/research/ashwagandha-ksm66-vs-sensoril", label: "Adaptogen Research", title: "KSM-66 vs Sensoril", sub: "Ashwagandha extract comparison", teaser: "Cortisol and stress biomarker outcomes across the two most-studied ashwagandha extracts.", accent: "#2D6A4F", evidence: "Moderate", ec: "#92620A" },
                { href: "/research/caffeine-tolerance-reset", label: "Stimulant Science", title: "Caffeine Tolerance Reset", sub: "Cycling protocols", teaser: "10–14 day abstinence fully restores adenosine receptor sensitivity — relevant for metabolic patients managing energy.", accent: "#D4A96A", evidence: "Moderate", ec: "#92620A" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, color: item.ec, padding: "1px 6px", backgroundColor: `${item.ec}12`, border: `1px solid ${item.ec}25`, borderRadius: 3 }}>{item.evidence}</span>
                    </div>
                    <div><p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Ingredients</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {[
                { href: "/ingredients/tirzepatide", label: "GLP-1/GIP Agonist", title: "Tirzepatide", sub: "Mounjaro · Zepbound", teaser: "Dual GIP/GLP-1 mechanism — superior weight loss vs semaglutide in SURMOUNT trials.", accent: "#C4622D" },
                { href: "/ingredients/ashwagandha", label: "Adaptogen", title: "Ashwagandha", sub: "KSM-66 · Sensoril", teaser: "Cortisol reduction and stress resilience — often co-prescribed in metabolic support protocols.", accent: "#2D6A4F" },
                { href: "/ingredients/beta-alanine", label: "Amino Acid", title: "Beta-Alanine", sub: "Exercise performance", teaser: "Supports training capacity — particularly relevant when on a GLP-1 agonist to preserve lean mass.", accent: "#D4A96A" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                    <div><p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>View Profile →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Product Reviews</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                { href: "/reviews/wellmedr", label: "GLP-1 Telehealth · Wellness", title: "WellMedr Health Supplement", brand: "Wellmedr", verdict: "GLP-1 telehealth and wellness protocol platform — reviewed for label transparency and clinical backing.", rating: 7, accent: "#D4A96A" },
                { href: "/reviews/myprotein-creatine-monohydrate", label: "Creatine", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", verdict: "Essential for lean mass preservation during GLP-1 weight loss — pure, affordable, no fillers.", rating: 8, accent: "#2D6A4F" },
                { href: "/reviews/optimum-nutrition-gold-standard-whey", label: "Protein Powder", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", verdict: "High-quality protein essential for countering lean mass loss during GLP-1 therapy.", rating: 9, accent: "#C4622D" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}><span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: item.rating >= 9 ? "#1A6B3A" : "#C4622D", lineHeight: 1 }}>{item.rating}</span><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>/10</span></div>
                    </div>
                    <div><p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.brand}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.verdict}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>Read Review →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10 }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>More from Blog</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Practical fitness &amp; nutrition guides — no fluff, no sponsorship.</p>
            </div>
            <Link href="/blog" style={{ padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", flexShrink: 0 }}>Browse All Articles →</Link>
          </div>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>← Back to Blog</Link>
            <div style={{ display: "flex", gap: 8 }}>
              {["GLP-1", "Ozempic", "Metabolic Health", "Cardiology"].map(t => <span key={t} style={{ padding: "3px 9px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{t}</span>)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
