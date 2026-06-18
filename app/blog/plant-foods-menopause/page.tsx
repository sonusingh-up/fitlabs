import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/ui/TableOfContents";
import MobileTOC from "@/components/ui/MobileTOC";

export const metadata: Metadata = {
  title: "Plant-Forward Eating for Menopause: 7 Key Foods",
  description: "Visceral fat doubles during the menopausal transition independent of total weight gain. Seven plant foods with direct mechanistic and clinical evidence for combating this shift.",
  alternates: { canonical: "/blog/plant-foods-menopause" },
};

const tocItems = [
  { id: "why-menopause-changes-fat", label: "Why Menopause Changes Body Composition" },
  { id: "phytoestrogens", label: "The Role of Phytoestrogens" },
  { id: "flaxseed", label: "1. Flaxseed" },
  { id: "soy", label: "2. Soy" },
  { id: "cruciferous", label: "3. Cruciferous Vegetables" },
  { id: "legumes", label: "4. Legumes" },
  { id: "fermented-foods", label: "5. Fermented Foods" },
  { id: "berries", label: "6. Berries" },
  { id: "nuts-seeds", label: "7. Nuts &amp; Seeds" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function MenopauseArticle() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/blog" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Plant Foods for Menopause</span>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#A89880", textTransform: "uppercase" }}>BLG-003</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Women&apos;s Health · Nutrition</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.08, marginBottom: 20 }}>
            Plant-Forward Eating for Menopause:{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>7 Foods That Combat Weight Gain Naturally</em>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>May 2026</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>12 min read</span>
            <span style={{ color: "#D4C9B8" }}>·</span>
            <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em", fontWeight: 700, color: "#92620A", backgroundColor: "rgba(146,98,10,0.08)", border: "1px solid rgba(146,98,10,0.2)", textTransform: "uppercase" }}>Moderate Evidence</span>
          </div>
          <div style={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {[
              { value: "~2×", label: "visceral fat increase during menopausal transition" },
              { value: "40%", label: "lower hot flush frequency with soy isoflavones vs placebo" },
              { value: "~11%", label: "waist circumference reduction with legume-rich diet" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 20px", backgroundColor: i === 0 ? "#1A1714" : "#F0E8D5", border: "1px solid #D4C9B8", flex: 1, minWidth: 150 }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 800, color: i === 0 ? "#C4622D" : "#1A1714", margin: 0 }}>{s.value}</p>
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
              Weight gain during menopause is not simply a matter of eating more. The hormonal shift — specifically the decline in oestrogen — fundamentally changes how the body partitions fat, favouring visceral deposition over subcutaneous. No amount of calorie restriction fully reverses this without addressing the underlying biology. Certain plant foods, however, interact directly with the mechanisms driving this shift — not through vague &ldquo;hormone balancing&rdquo; claims, but through measurable effects on phytoestrogenic activity, the gut-oestrogen axis, insulin sensitivity, and systemic inflammation.
            </p>

            <section id="why-menopause-changes-fat" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Why Menopause Changes Body Composition</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Greendale et al. (2019, <em>Journal of Clinical Endocrinology &amp; Metabolism</em>) followed women across the menopausal transition using DXA imaging and found visceral adipose tissue increased approximately two-fold — independently of total body weight changes. Women who gained no weight on the scale still experienced significant visceral fat accumulation.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 20 }}>
                The mechanism: oestrogen normally directs fat storage toward subcutaneous depots (hips, thighs, breasts) and promotes insulin sensitivity in adipocytes. As oestradiol declines, fat redistribution shifts toward visceral depots — metabolically active fat that secretes pro-inflammatory adipokines and drives insulin resistance. Simultaneously, resting metabolic rate decreases and muscle mass declines if resistance training is absent.
              </p>
              <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>What food can and cannot do</p>
                <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>
                  No food reverses oestrogen decline. What plant-based interventions can do: partially compensate via phytoestrogenic activity, reduce visceral inflammation, support gut microbiome health (which modulates oestrogen metabolism), and improve insulin sensitivity. These are meaningful levers — not cures.
                </p>
              </div>
            </section>

            <section id="phytoestrogens" style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
              <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>The Role of Phytoestrogens</h2>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>
                Phytoestrogens are plant-derived compounds that bind oestrogen receptors — primarily ERβ — with roughly 100–1,000× lower affinity than oestradiol. They act as selective oestrogen receptor modulators (SERMs): weakly oestrogenic in oestrogen-deficient states (post-menopause), potentially anti-oestrogenic when endogenous oestrogen is high.
              </p>
              <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
                The three main classes in plant foods: <strong style={{ color: "#1A1714" }}>isoflavones</strong> (soy, legumes), <strong style={{ color: "#1A1714" }}>lignans</strong> (flaxseed, sesame, cruciferous vegetables), and <strong style={{ color: "#1A1714" }}>coumestans</strong> (alfalfa, clover sprouts). Isoflavones and lignans have the most clinical data.
              </p>
            </section>

            {[
              {
                id: "flaxseed", num: "1", title: "Flaxseed", sub: "Highest lignan content of any food",
                accent: "#C4622D",
                body: [
                  { text: "Flaxseed contains 75–800 times more lignans than any other plant food. The primary lignan secoisolariciresinol diglucoside (SDG) is converted by gut bacteria to enterolactone and enterodiol — mammalian lignans that bind oestrogen receptors and modulate oestrogen metabolism." },
                  { text: "Phipps et al. (1993, Journal of Clinical Endocrinology & Metabolism) demonstrated that 10g/day of flaxseed increased luteal phase length and altered the ratio of oestrogen metabolites toward the less potent 2-hydroxyoestrone (2-OHE1) form — associated with lower breast cancer risk and more favourable metabolic outcomes. In post-menopausal women, Dodin et al. (2005, Menopause) found 40g/day of flaxseed meal significantly reduced hot flushes (30% reduction over 12 weeks) and improved vaginal dryness scores.", isBlock: true },
                  { text: "Practical dose: 1–2 tablespoons of ground flaxseed per day. Whole seeds pass largely undigested — grinding is necessary for lignan bioavailability. The ALA omega-3 content (2.3g per tablespoon) is a secondary but meaningful benefit for reducing cardiovascular risk." },
                ],
                callout: null,
              },
              {
                id: "soy", num: "2", title: "Soy", sub: "Isoflavones genistein & daidzein",
                accent: "#2D6A4F",
                body: [
                  { text: "Soy isoflavones — primarily genistein and daidzein — are the most studied phytoestrogens. Epidemiological evidence from East Asian populations, where soy intake is 25–50mg isoflavones/day vs 2–5mg in Western populations, shows significantly lower rates of menopausal symptoms and lower visceral adiposity." },
                  { text: "Messina (2014, Fertility and Sterility) reviewed 19 RCTs and found soy isoflavones reduced hot flush frequency by approximately 26% compared to placebo — less than HRT but clinically meaningful without the associated risks. The metabolic benefit is more contentious: a Cochrane review (Lethaby et al., 2007) found modest improvements in lipid profiles and glucose metabolism.", isBlock: true },
                  { text: "The equol question: approximately 30–50% of Westerners (vs ~50–60% of Asians) harbour gut bacteria capable of converting daidzein to equol — a more potent and active metabolite. Equol producers show greater symptom benefit from soy. This partly explains the variable trial results." },
                ],
                callout: { label: "Safety note", text: "Soy phytoestrogens are not equivalent to exogenous oestrogen and do not increase breast cancer risk in population data. Women with oestrogen-sensitive breast cancer should discuss soy intake with their oncologist — guidelines are not uniformly restrictive, but individual context matters." },
              },
              {
                id: "cruciferous", num: "3", title: "Cruciferous Vegetables", sub: "DIM, I3C, and oestrogen metabolism",
                accent: "#D4A96A",
                body: [
                  { text: "Broccoli, cauliflower, Brussels sprouts, and kale contain glucosinolates that are hydrolysed to indole-3-carbinol (I3C) in the gut. I3C is further converted to diindolylmethane (DIM) in the acidic stomach environment." },
                  { text: "Higdon et al. (2007, Nutrition Reviews) documented that I3C and DIM shift oestrogen metabolism toward the 2-OHE1 pathway (protective) and away from the 16α-OHE1 pathway (associated with greater oestrogenic activity and adipogenesis). This metabolic shift is particularly relevant post-menopause when any circulating oestrogen comes predominantly from peripheral aromatisation of androgens in adipose tissue.", isBlock: true },
                  { text: "Additional benefit: cruciferous vegetables are high in fibre (supporting the gut microbiome), low glycaemic index (supporting insulin sensitivity), and contain sulforaphane — which activates Nrf2-mediated antioxidant pathways relevant to inflammation. A serving (80g) 4–5× per week is sufficient to produce measurable effects on oestrogen metabolite ratios (Fowke et al., 2000, Cancer Epidemiology)." },
                ],
                callout: null,
              },
              {
                id: "legumes", num: "4", title: "Legumes", sub: "Lentils, chickpeas, black beans",
                accent: "#7EB8D4",
                body: [
                  { text: "Legumes are the most protein-dense plant food, with 8–18g per 100g cooked, and contain resistant starch and soluble fibre that significantly improves postprandial insulin response — directly counteracting the insulin resistance driven by declining oestrogen." },
                  { text: "Villegas et al. (2008, Menopause) analysed 3,327 post-menopausal women in the Shanghai Women's Health Study and found those in the highest quintile of legume intake had significantly lower waist-to-hip ratios and lower prevalence of metabolic syndrome. The Nurses' Health Study similarly found 4+ servings of legumes per week associated with ~11% lower waist circumference gain over 8 years.", isBlock: true },
                  { text: "Legumes also contain coumestans (another phytoestrogen class) at lower concentrations than soy isoflavones but meaningful at regular intake. Their high satiety value relative to caloric density makes them one of the most practical tools for managing weight during the menopausal transition without restricting total calories aggressively." },
                ],
                callout: null,
              },
              {
                id: "fermented-foods", num: "5", title: "Fermented Foods", sub: "The gut-oestrogen axis (estrobolome)",
                accent: "#C4622D",
                body: [
                  { text: "The estrobolome — the collection of gut microbiome genes capable of metabolising oestrogen — directly influences circulating oestrogen levels. Plottel & Blaser (2011, Science Translational Medicine) described how β-glucuronidase-producing gut bacteria deconjugate oestrogen glucuronides excreted via bile, allowing reabsorption of active oestrogen. A diverse microbiome with adequate β-glucuronidase activity maintains higher circulating oestrogen post-menopause." },
                  { text: "Fermented foods — kefir, yoghurt, kimchi, sauerkraut, miso, tempeh — increase microbial diversity and introduce Lactobacillus and Bifidobacterium strains associated with better estrobolome function. Sonnenburg et al. (2021, Cell) in a 17-week RCT found high-fermented-food diets increased microbiome diversity by ~19% more than high-fibre diets, with corresponding reductions in 19 inflammatory protein markers.", isBlock: true },
                  { text: "Practical note: miso and tempeh contribute isoflavones in addition to fermentation benefits — a dual mechanism that makes fermented soy products among the most targeted choices for menopausal women." },
                ],
                callout: { label: "Prebiotic synergy", text: "Fermented foods work best alongside high-fibre plant foods. Fibre provides substrate for beneficial bacteria; fermented foods introduce and maintain the bacterial populations. The two are complementary, not interchangeable." },
              },
              {
                id: "berries", num: "6", title: "Berries", sub: "Polyphenols and visceral fat",
                accent: "#2D6A4F",
                body: [
                  { text: "Berries — blueberries, strawberries, raspberries, blackcurrants — are the most polyphenol-dense common fruit. Anthocyanins, their primary active compounds, inhibit adipogenesis in vitro and reduce visceral fat accumulation in animal models. In humans, the evidence is less direct but consistently positive." },
                  { text: "Stull et al. (2010, Journal of Nutrition) conducted a 6-week RCT in 32 obese, insulin-resistant subjects and found daily blueberry supplementation (45g freeze-dried) significantly improved insulin sensitivity vs placebo — independent of weight change. Cassidy et al. (2016, American Journal of Clinical Nutrition) followed 93,475 women and found those with the highest anthocyanin intake had ~10% lower risk of developing hypertension and had lower waist circumference gain over time.", isBlock: true },
                  { text: "The mechanism likely involves inhibition of NLRP3 inflammasome activation, improved mitochondrial function in adipocytes, and modulation of gut microbiome composition toward Akkermansia muciniphila — a species consistently associated with lower visceral adiposity. A practical dose: 150–200g of mixed berries daily covers the range used in positive RCTs." },
                ],
                callout: null,
              },
              {
                id: "nuts-seeds", num: "7", title: "Nuts & Seeds", sub: "Walnuts, almonds, pumpkin seeds",
                accent: "#D4A96A",
                body: [
                  { text: "Nuts and seeds contribute multiple mechanisms simultaneously: lignans and phytosterols (modest oestrogenic activity), magnesium (sleep quality, insulin sensitivity, mood regulation), and unsaturated fats that improve adiponectin levels — an adipokine that declines with visceral fat accumulation." },
                  { text: "Sabaté et al. (2010, British Journal of Nutrition) meta-analysed 25 nut consumption trials and found consistent reductions in fasting glucose (−4.7 mg/dL) and insulin (−1.4 μIU/mL). The PREDIMED trial, which used a Mediterranean diet with daily nuts (30g mixed) as an intervention, showed significant reductions in waist circumference, blood pressure, and fasting glucose at 5-year follow-up in post-menopausal women specifically.", isBlock: true },
                  { text: "Walnuts are uniquely positioned: highest ALA omega-3 content among nuts (2.6g per 30g serving), plus ellagitannins converted to urolithins by gut bacteria — compounds with emerging anti-inflammatory and mitochondrial biogenesis effects. Pumpkin seeds are the highest-magnesium common seed at 150mg per 30g serving. A 30g daily mix covers most of these bases." },
                ],
                callout: null,
              },
            ].map(section => (
              <section key={section.id} id={section.id} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #EDE8DF" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: section.accent }}>{section.num}</span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1A1714", margin: 0, letterSpacing: "-0.02em" }}>{section.title}</h2>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#8A8480", margin: 0, letterSpacing: "0.08em" }}>{section.sub}</p>
                  </div>
                </div>
                {section.body.map((p, i) => (
                  p.isBlock
                    ? <div key={i} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4", marginBottom: 16 }}><p style={{ fontSize: 14, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>{p.text}</p></div>
                    : <p key={i} style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8, marginBottom: 16 }}>{p.text}</p>
                ))}
                {section.callout && (
                  <div style={{ padding: "16px 18px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderLeft: "3px solid #C4622D", borderRadius: 8 }}>
                    <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A89880", marginBottom: 6 }}>{section.callout.label}</p>
                    <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.7, margin: 0 }}>{section.callout.text}</p>
                  </div>
                )}
              </section>
            ))}

            <section id="bottom-line" style={{ marginBottom: 48 }}>
              <div style={{ padding: "28px 30px", backgroundColor: "#1A1714", borderRadius: 12 }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Bottom Line</p>
                <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#F2EBD9", marginBottom: 14, lineHeight: 1.3 }}>
                  The foods work through biology, not folklore.
                </h3>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8, marginBottom: 12 }}>
                  None of the seven foods here replaces oestrogen. What they do is address the downstream mechanisms — phytoestrogenic activity at ERβ, oestrogen metabolite ratios, the gut-estrobolome axis, insulin sensitivity, and visceral inflammation. These are meaningful levers. The evidence is mostly moderate-quality, but the mechanisms are real and the foods carry essentially no risk.
                </p>
                <p style={{ fontSize: 14, color: "#8A8480", lineHeight: 1.8 }}>
                  The practical pattern: daily ground flaxseed (1–2 tbsp), legumes 4–5× per week, fermented food daily, mixed berries 150g daily, a 30g nut mix, cruciferous vegetables 4–5× per week, and soy food 1–2× per week if tolerated. None of this requires supplements — the effects come from the whole food matrix.
                </p>
              </div>
              <div style={{ marginTop: 32, padding: "20px 22px", border: "1px solid #D4C9B8", borderRadius: 8, backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 12 }}>Key References</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Greendale GA et al. Changes in body composition and weight during the menopause transition. JCI Insight. 2019.",
                    "Phipps WR et al. Effect of flax seed ingestion on the menstrual cycle. J Clin Endocrinol Metab. 1993;77(5):1215–1219.",
                    "Messina M. Soy and health update: evaluation of the clinical and epidemiologic literature. Nutrients. 2016;8(12):754.",
                    "Higdon JV et al. Cruciferous vegetables and human cancer risk. Nutr Rev. 2007;65(6):259–274.",
                    "Villegas R et al. Legume and soy food intake and the incidence of type 2 diabetes. Am J Clin Nutr. 2008.",
                    "Plottel CS, Blaser MJ. Microbiome and malignancy. Sci Transl Med. 2011;3(98):98ps30.",
                    "Sonnenburg JL et al. Diet-induced alterations in gut microflora contribute to fermented food benefit. Cell. 2021;184(16):4137–4153.",
                    "Stull AJ et al. Bioactives in blueberries improve insulin sensitivity in obese, insulin-resistant men and women. J Nutr. 2010.",
                    "Sabaté J et al. Nut consumption and blood lipid levels. Arch Intern Med. 2010;170(9):821–827.",
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
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>Menopause · Hormones · Nutrition</span>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Research Articles</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                { href: "/research/ashwagandha-ksm66-vs-sensoril", label: "Adaptogen Research", title: "KSM-66 vs Sensoril", sub: "Ashwagandha extract comparison", teaser: "Cortisol reduction and stress resilience — both relevant to the HPA axis dysregulation seen during perimenopause.", accent: "#2D6A4F", evidence: "Moderate", ec: "#92620A" },
                { href: "/research/protein-timing-myth", label: "Nutrition Science", title: "The Protein Timing Myth", sub: "vs. reality", teaser: "Total daily protein (1.6–2.2g/kg) matters most for muscle preservation during menopause — timing is secondary.", accent: "#C4622D", evidence: "Strong", ec: "#1A6B3A" },
                { href: "/research/caffeine-tolerance-reset", label: "Stimulant Science", title: "Caffeine Tolerance", sub: "Cycling protocols", teaser: "Caffeine sensitivity shifts during perimenopause; cycling protocols become more important.", accent: "#D4A96A", evidence: "Moderate", ec: "#92620A" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, color: item.ec, padding: "1px 6px", backgroundColor: `${item.ec}12`, border: `1px solid ${item.ec}25`, borderRadius: 3 }}>{item.evidence}</span></div>
                    <div><p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Related Ingredients</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {[
                { href: "/ingredients/ashwagandha", label: "Adaptogen", title: "Ashwagandha", sub: "Stress & hormonal support", teaser: "Cortisol reduction, sleep quality, and adrenal support — frequently used during perimenopause.", accent: "#2D6A4F" },
                { href: "/ingredients/whey-protein", label: "Protein", title: "Whey Protein", sub: "Muscle preservation", teaser: "Maintaining 1.6–2.2g/kg protein intake is the single most important dietary factor for lean mass during menopause.", accent: "#C4622D" },
                { href: "/ingredients/magnesium", label: "Mineral", title: "Magnesium Glycinate", sub: "Sleep & insulin sensitivity", teaser: "Supports sleep quality and insulin sensitivity — two physiological systems most disrupted during the menopausal transition.", accent: "#7EB8D4" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span>
                    <div><p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.sub}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.teaser}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>View Profile →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>Product Reviews</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {[
                { href: "/reviews/optimum-nutrition-gold-standard-whey", label: "Protein Powder", title: "ON Gold Standard Whey", brand: "Optimum Nutrition", verdict: "Clean-label whey to hit protein targets for lean mass preservation during and after menopause.", rating: 9, accent: "#C4622D" },
                { href: "/reviews/myprotein-creatine-monohydrate", label: "Creatine", title: "MyProtein Creatine Monohydrate", brand: "MyProtein", verdict: "Creatine supports lean mass, bone density, and cognitive function — all relevant post-menopause.", rating: 8, accent: "#2D6A4F" },
                { href: "/reviews/wellmedr", label: "Wellness", title: "WellMedr Health Supplement", brand: "Wellmedr", verdict: "General wellness supplement reviewed for ingredient transparency and menopausal health relevance.", rating: 7, accent: "#D4A96A" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="hub-card" style={{ display: "grid", gridTemplateColumns: "3px 1fr", textDecoration: "none", border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", backgroundColor: "#F8F2E4" }}>
                  <div style={{ backgroundColor: item.accent }} />
                  <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A89880" }}>{item.label}</span><div style={{ display: "flex", alignItems: "baseline", gap: 1 }}><span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.1rem", fontWeight: 800, color: item.rating >= 9 ? "#1A6B3A" : "#C4622D", lineHeight: 1 }}>{item.rating}</span><span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880" }}>/10</span></div></div>
                    <div><p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.2 }}>{item.title}</p><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#8A8480", marginTop: 2 }}>{item.brand}</p></div>
                    <p style={{ fontSize: 12, color: "#5C5650", lineHeight: 1.6, margin: 0 }}>{item.verdict}</p>
                    <span style={{ fontSize: 11, color: "#C4622D", fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif" }}>Read Review →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, padding: "20px 24px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 10 }}>
            <div><p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89880", marginBottom: 4 }}>More from Blog</p><p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0 }}>Practical fitness &amp; nutrition guides — no fluff, no sponsorship.</p></div>
            <Link href="/blog" style={{ padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none", flexShrink: 0 }}>Browse All Articles →</Link>
          </div>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-hanken), sans-serif", textDecoration: "none" }}>← Back to Blog</Link>
            <div style={{ display: "flex", gap: 8 }}>{["Menopause", "Phytoestrogens", "Nutrition", "Women's Health"].map(t => <span key={t} style={{ padding: "3px 9px", border: "1px solid #D4C9B8", borderRadius: 4, fontSize: 10, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>{t}</span>)}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
