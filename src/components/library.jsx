import React from 'react';
import { Molecule, SmallMolecule, Icon, TopNav, Footer, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter, StudyRow } from './shared.jsx';

// ============================ INGREDIENTS LIBRARY ============================
export const IngredientsLibrary = () => {
  const [goal, setGoal] = React.useState("All");
  const goals = ["All", "Muscle Gain", "Fat Loss", "Sleep", "Focus", "Recovery", "Longevity"];
  const ings = [
    { name: "Creatine monohydrate", cat: "Performance",   ev: "strong", goals: ["Muscle Gain","Recovery"], dose: "3–5 g/day", studies: 412, accent: "#0F766E" },
    { name: "Caffeine",             cat: "Stimulant",     ev: "strong", goals: ["Focus","Fat Loss"],       dose: "3–6 mg/kg", studies: 308, accent: "#B45309" },
    { name: "Whey protein",         cat: "Macro",         ev: "strong", goals: ["Muscle Gain"],            dose: "20–40 g",   studies: 287, accent: "#1D4ED8" },
    { name: "Magnesium glycinate",  cat: "Mineral",       ev: "strong", goals: ["Sleep","Recovery"],       dose: "200–400 mg",studies: 144, accent: "#6B21A8" },
    { name: "L‑theanine",           cat: "Nootropic",     ev: "mod",    goals: ["Focus","Sleep"],          dose: "100–200 mg",studies: 91,  accent: "#0E7490" },
    { name: "Beta‑alanine",         cat: "Performance",   ev: "strong", goals: ["Muscle Gain"],            dose: "3.2–6.4 g", studies: 128, accent: "#0F766E" },
    { name: "Ashwagandha (KSM‑66)", cat: "Adaptogen",     ev: "mod",    goals: ["Recovery","Sleep"],       dose: "300–600 mg",studies: 64,  accent: "#9D174D" },
    { name: "Vitamin D3",           cat: "Vitamin",       ev: "strong", goals: ["Longevity"],              dose: "1000–4000 IU",studies: 219,accent: "#B45309" },
    { name: "Omega‑3 (EPA/DHA)",    cat: "Fatty acid",    ev: "strong", goals: ["Longevity","Recovery"],   dose: "2–3 g",     studies: 198, accent: "#1D4ED8" },
    { name: "Citrulline malate",    cat: "Performance",   ev: "mod",    goals: ["Muscle Gain"],            dose: "6–8 g",     studies: 78,  accent: "#0F766E" },
    { name: "Rhodiola rosea",       cat: "Adaptogen",     ev: "weak",   goals: ["Focus"],                  dose: "200–400 mg",studies: 41,  accent: "#9D174D" },
    { name: "Berberine",            cat: "Metabolic",     ev: "mod",    goals: ["Fat Loss","Longevity"],   dose: "500 mg 3x/day",studies: 57, accent: "#84CC16" },
  ];
  const filtered = ings.filter(i => goal === "All" || i.goals.includes(goal));

  return (
    <div className="fl-root paper" data-screen-label="05 Ingredients Library">
      <TopNav active="ingredients"/>

      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.6 }}>
          <Molecule width={500} height={500}/>
        </div>
        <span className="eyebrow">Ingredient library</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 720 }}>
          184 ingredients, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>graded by evidence.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Mechanism, dose range, and study count for every ingredient we've encountered. Filter by goal to find what's actually worth taking.
        </p>
      </header>

      <div className="fl-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, paddingBottom: 16, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {goals.map(g => (
            <button key={g} onClick={() => setGoal(g)} className={`chip ${goal === g ? "chip-ink" : ""}`} style={{ cursor: "pointer", padding: "6px 14px", fontSize: 13 }}>{g}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }}>
            Evidence: All <Icon name="chevron-down" size={12}/>
          </button>
          <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }}>
            Sort: Studies <Icon name="chevron-down" size={12}/>
          </button>
        </div>
      </div>

      <main className="fl-container" style={{ paddingTop: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {filtered.map(i => (
            <a key={i.name} href="#" className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, top: -20, opacity: 0.5 }}>
                <SmallMolecule size={100} accent={i.accent}/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", position: "relative" }}>
                <div>
                  <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 4 }}>{i.cat}</div>
                  <h3 className="t-h3" style={{ fontSize: 22 }}>{i.name}</h3>
                </div>
                <EvidenceBadge level={i.ev}/>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>Dose range</span>
                  <span className="t-body-sm nums">{i.dose}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>Studies</span>
                  <span className="t-body-sm nums">{i.studies}</span>
                </div>
              </div>
              <div className="tag-row" style={{ position: "relative" }}>
                {i.goals.map(g => <span key={g} className="chip" style={{ fontSize: 11, padding: "2px 8px" }}>{g}</span>)}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ INGREDIENT DETAIL ============================
export const IngredientDetail = () => (
  <div className="fl-root paper" data-screen-label="06 Ingredient Detail">
    <TopNav active="ingredients"/>
    <main className="fl-container" style={{ paddingTop: 56, paddingBottom: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Ingredients</a>
        <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
        <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Performance</a>
        <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
        <span className="t-meta" style={{ color: "var(--ink)" }}>Creatine monohydrate</span>
      </div>

      <header style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 56, marginBottom: 56, position: "relative" }}>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
            <span className="chip chip-accent">Performance</span>
            <span className="chip">Ergogenic aid</span>
            <span className="cite-pill"><Icon name="check" size={11}/> 412 studies</span>
          </div>
          <h1 className="t-display-md" style={{ marginBottom: 20 }}>
            Creatine<br/>
            <span style={{ fontFamily: "var(--mono)", fontSize: 28, color: "var(--muted)", letterSpacing: 0 }}>C₄H₉N₃O₂ · monohydrate</span>
          </h1>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 580 }}>
            The most studied performance supplement in human history, and arguably the only one with unambiguous, replicated evidence of effect on strength, lean mass, and high‑intensity output.
          </p>
        </div>
        <aside className="card-soft" style={{ padding: 28 }}>
          <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 14 }}>Quick facts</div>
          {[
            ["Evidence",   <EvidenceBadge level="strong"/>],
            ["Dose",       "3–5 g/day"],
            ["Loading",    "Optional · 20g × 5 days"],
            ["Best with",  "Carbs or post‑workout"],
            ["Cost / day", "$0.10"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
              <span className="t-body-sm" style={{ color: "var(--muted)" }}>{k}</span>
              <span className="t-body-sm nums" style={{ fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </aside>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 56 }}>
        {[
          { title: "Strength",   v: 0.92, e: "strong", note: "1RM increases of 5–15% across 41 RCTs." },
          { title: "Lean mass",  v: 0.85, e: "strong", note: "0.7–1.4 kg additional lean mass over 8–12 weeks." },
          { title: "Cognition",  v: 0.55, e: "mod",    note: "Modest benefit in sleep‑deprived states." },
          { title: "Endurance",  v: 0.30, e: "weak",   note: "No clear effect at typical aerobic outputs." },
        ].slice(0,3).map((r, i) => (
          <div key={i} className="card" style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <h3 className="t-h4">{r.title}</h3>
              <EvidenceBadge level={r.e}/>
            </div>
            <Meter value={r.v} valueLabel={`${Math.round(r.v*100)}%`}/>
            <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: 12 }}>{r.note}</p>
          </div>
        ))}
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 56, marginBottom: 56 }}>
        <article style={{ maxWidth: 720 }}>
          <h2 className="t-h2" style={{ marginBottom: 16 }}>Mechanism</h2>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 16 }}>
            Creatine is stored in skeletal muscle as phosphocreatine and donates a phosphate to ADP to rapidly regenerate ATP during high‑intensity contractions. Supplementation increases muscle creatine stores by 10–40% above baseline, raising the ceiling on repeated near‑maximal efforts.
          </p>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 32 }}>
            Effects are largest in those starting from low baseline stores — vegetarians, women, and older adults typically respond more strongly than meat‑eating young men.
          </p>

          <h2 className="t-h2" style={{ marginBottom: 16 }}>How to take it</h2>
          <div className="card-soft" style={{ padding: 24, marginBottom: 32 }}>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["Daily dose", "3–5 g per day. Body weight matters more than people think — round up if you're over 90 kg."],
                ["Loading?",    "Optional. Loading reaches saturation in 5 days vs. 3–4 weeks. Either path lands at the same plateau."],
                ["Timing",      "Doesn't matter much. Post‑workout with carbs is marginally better, but consistency dwarfs timing."],
                ["Form",        "Monohydrate. Other forms (HCl, ethyl ester) charge premiums for no measurable benefit."],
              ].map(([t, b]) => (
                <li key={t} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, alignItems: "start" }}>
                  <span className="t-body" style={{ fontWeight: 600 }}>{t}</span>
                  <span className="t-body" style={{ color: "var(--ink-2)" }}>{b}</span>
                </li>
              ))}
            </ol>
          </div>

          <h2 className="t-h2" style={{ marginBottom: 16 }}>Cited research</h2>
          <div className="card" style={{ padding: 24 }}>
            <StudyRow year="2024" type="Meta‑analysis" title="Creatine in older adults: 41‑RCT dose‑response" journal="Sports Med." n="3,420"/>
            <StudyRow year="2023" type="Meta‑analysis" title="Cognitive effects of creatine supplementation" journal="Neuroscience &amp; Behav." n="1,180"/>
            <StudyRow year="2022" type="RCT" title="Loading vs. maintenance dosing in trained lifters" journal="J. Strength Cond." n="64"/>
          </div>
        </article>
        <aside style={{ position: "sticky", top: 88, height: "fit-content" }}>
          <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 14 }}>Found in stacks</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Muscle Gain", "Foundational Health", "Recovery"].map(s => (
              <a key={s} href="#" className="card" style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="t-body-sm" style={{ fontWeight: 500 }}>{s}</span>
                <Icon name="arrow-right" size={14} stroke="var(--muted)"/>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </main>
    <Footer/>
  </div>
);

// ============================ STACKS INDEX ============================
export const StacksIndex = () => {
  const stacks = [
    { name: "Muscle Gain",         ings: 5, cost: "$2.10", color: "#0F766E", icon: "dumbbell", desc: "Whey, creatine, beta‑alanine, vitamin D, omega‑3.", ev: "strong" },
    { name: "Sleep Optimization",  ings: 4, cost: "$1.40", color: "#1D4ED8", icon: "moon",     desc: "Magnesium glycinate, glycine, L‑theanine, apigenin.", ev: "mod" },
    { name: "Foundational Health", ings: 6, cost: "$1.90", color: "#0E7490", icon: "heart",    desc: "Multi, omega‑3, vitamin D, K2, magnesium, creatine.", ev: "strong" },
    { name: "Fat Loss Support",    ings: 5, cost: "$2.30", color: "#B45309", icon: "fire",     desc: "Caffeine, green tea, fiber, protein, l‑carnitine.",   ev: "mod" },
    { name: "Focus & Productivity",ings: 4, cost: "$1.80", color: "#4338CA", icon: "brain",    desc: "Caffeine + L‑theanine, creatine, tyrosine, B‑complex.",ev: "mod" },
    { name: "Recovery (post‑training)",ings: 5, cost: "$2.00", color: "#9D174D", icon: "leaf", desc: "Whey, creatine, tart cherry, magnesium, omega‑3.",   ev: "strong" },
    { name: "Endurance",           ings: 4, cost: "$1.60", color: "#84CC16", icon: "bolt",     desc: "Beta‑alanine, sodium bicarbonate, caffeine, beetroot.",ev: "strong" },
    { name: "Longevity",           ings: 6, cost: "$3.20", color: "#374151", icon: "globe",    desc: "Omega‑3, D3+K2, magnesium, glycine, creatine, NMN.", ev: "weak" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="07 Stacks Index">
      <TopNav active="stacks"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: -40, opacity: 0.5 }}>
          <Molecule width={500} height={500}/>
        </div>
        <span className="eyebrow">Goal‑built stacks</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 720 }}>
          Protocols, not products. <span style={{ fontStyle: "italic", color: "var(--accent)" }}>46 of them.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Multi‑ingredient programs designed for one specific outcome. Each stack lists timing, dosing, cost, and the studies behind it.
        </p>
      </header>

      <main className="fl-container" style={{ paddingTop: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {stacks.map(s => (
            <a key={s.name} href="#" className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.45 }}>
                <SmallMolecule size={180} accent={s.color}/>
              </div>
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: s.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s.icon} size={22}/>
                </div>
                <EvidenceBadge level={s.ev}/>
              </div>
              <div style={{ position: "relative" }}>
                <h2 className="t-h2" style={{ fontSize: 32, marginBottom: 10 }}>{s.name}</h2>
                <p className="t-body" style={{ color: "var(--muted)", marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 24, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                  <div>
                    <div className="t-meta" style={{ color: "var(--muted)" }}>Ingredients</div>
                    <div className="t-h4 nums" style={{ marginTop: 4 }}>{s.ings}</div>
                  </div>
                  <div>
                    <div className="t-meta" style={{ color: "var(--muted)" }}>Cost / day</div>
                    <div className="t-h4 nums" style={{ marginTop: 4 }}>{s.cost}</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, color: "var(--accent)" }}>
                    <span className="t-body-sm" style={{ fontWeight: 500 }}>Open protocol</span>
                    <Icon name="arrow-right" size={14}/>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ STACK DETAIL ============================
export const StackDetail = () => {
  const ings = [
    { name: "Whey protein isolate", dose: "30 g", timing: "Post‑workout",       ev: "strong", cost: "$0.65" },
    { name: "Creatine monohydrate", dose: "5 g",  timing: "Anytime, daily",     ev: "strong", cost: "$0.10" },
    { name: "Beta‑alanine",         dose: "3.2 g",timing: "Split 2× w/ meal",   ev: "strong", cost: "$0.25" },
    { name: "Vitamin D3 + K2",      dose: "2000 IU + 100 mcg", timing: "Morning, w/ fat", ev: "strong", cost: "$0.20" },
    { name: "Omega‑3 (EPA/DHA)",    dose: "2 g",  timing: "With largest meal",  ev: "strong", cost: "$0.90" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="08 Stack Detail">
      <TopNav active="stacks"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 56, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -60, opacity: 0.55 }}>
          <Molecule width={620} height={620}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, position: "relative" }}>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Stacks</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <span className="t-meta" style={{ color: "var(--ink)" }}>Muscle Gain</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 24, position: "relative" }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "#0F766E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="dumbbell" size={32}/>
          </div>
          <div>
            <span className="eyebrow">Muscle Gain protocol</span>
            <h1 className="t-h1" style={{ marginTop: 6, fontSize: 56 }}>The Hypertrophy Stack</h1>
          </div>
        </div>
        <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 640, position: "relative" }}>
          Five ingredients. $2.10/day. Designed around one goal: maximize the rate of lean mass gain in trained lifters consuming adequate calories and protein.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)", maxWidth: 800, position: "relative" }}>
          <div><div className="t-meta" style={{ color: "var(--muted)" }}>Ingredients</div><div className="t-display-md" style={{ fontSize: 40, marginTop: 4 }}>5</div></div>
          <div><div className="t-meta" style={{ color: "var(--muted)" }}>Cost / day</div><div className="t-display-md" style={{ fontSize: 40, marginTop: 4 }}>$2.10</div></div>
          <div><div className="t-meta" style={{ color: "var(--muted)" }}>Studies cited</div><div className="t-display-md" style={{ fontSize: 40, marginTop: 4 }}>134</div></div>
          <div><div className="t-meta" style={{ color: "var(--muted)" }}>Evidence</div><div style={{ marginTop: 10 }}><EvidenceBadge level="strong"/></div></div>
        </div>
      </header>

      <main className="fl-container">
        <SectionHead eyebrow="The protocol" title="What to take, when, and why"/>
        <div className="card" style={{ overflow: "hidden", marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1fr 0.7fr", padding: "16px 20px", background: "var(--surface-2)", borderBottom: "1px solid var(--line)" }}>
            {["Ingredient","Dose","Timing","Evidence","Cost"].map(h => <span key={h} className="t-meta" style={{ color: "var(--muted)" }}>{h}</span>)}
          </div>
          {ings.map((i, idx) => (
            <div key={i.name} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1fr 0.7fr", padding: "20px", borderBottom: idx === ings.length - 1 ? "none" : "1px solid var(--line)", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <SmallMolecule size={36}/>
                <span className="t-body" style={{ fontWeight: 500 }}>{i.name}</span>
              </div>
              <span className="t-body-sm nums" style={{ color: "var(--ink-2)" }}>{i.dose}</span>
              <span className="t-body-sm" style={{ color: "var(--ink-2)" }}>{i.timing}</span>
              <EvidenceBadge level={i.ev}/>
              <span className="t-body-sm nums" style={{ color: "var(--ink-2)" }}>{i.cost}</span>
            </div>
          ))}
        </div>

        {/* Daily timeline visual */}
        <SectionHead eyebrow="Daily timeline" title="When to take what"/>
        <div className="card-soft" style={{ padding: 32, marginBottom: 56 }}>
          <div style={{ position: "relative", height: 120 }}>
            <div style={{ position: "absolute", top: 60, left: 0, right: 0, height: 2, background: "var(--line-2)" }}/>
            {[
              { x: 8,  label: "06:00", title: "D3+K2",     color: "#B45309" },
              { x: 32, label: "12:00", title: "Omega‑3",   color: "#1D4ED8" },
              { x: 50, label: "16:00", title: "β‑alanine", color: "#0F766E" },
              { x: 72, label: "18:00", title: "Whey + creatine", color: "#0F766E" },
              { x: 92, label: "21:00", title: "β‑alanine #2", color: "#0F766E" },
            ].map((p, i) => (
              <div key={i} style={{ position: "absolute", left: `${p.x}%`, top: 0, transform: "translateX(-50%)", textAlign: "center" }}>
                <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 30 }}>{p.label}</div>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: p.color, border: "3px solid var(--bg)", boxShadow: "0 0 0 1px var(--line-2)", marginInline: "auto" }}/>
                <div className="t-body-sm" style={{ marginTop: 12, fontWeight: 500 }}>{p.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why this stack */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}>
          <div className="card" style={{ padding: 32 }}>
            <span className="eyebrow">Why these five</span>
            <h3 className="t-h3" style={{ marginTop: 12, marginBottom: 16 }}>What we left out, on purpose.</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["BCAAs",    "Redundant if protein intake is adequate. Not in stack."],
                ["HMB",      "Effect size shrinks to noise in trained lifters."],
                ["Tribulus", "No replicable effect on testosterone or strength."],
                ["Glutamine","Conditionally essential, but ineffective oral supplement."],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 16 }}>
                  <span className="t-body" style={{ fontWeight: 600 }}>{k}</span>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 32, background: "var(--ink)", color: "var(--bg)", border: "none", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -60, bottom: -60, opacity: 0.3 }}>
              <Molecule width={300} height={300} accent="#0F766E"/>
            </div>
            <span className="eyebrow" style={{ color: "#9FD8D2", position: "relative" }}>Honest caveat</span>
            <h3 className="t-h3" style={{ color: "var(--bg)", marginTop: 12, marginBottom: 16, position: "relative" }}>Stacks don't beat protein, sleep, and progressive overload.</h3>
            <p className="t-body" style={{ color: "rgba(251,250,247,0.7)", position: "relative" }}>
              Combined effect of every ingredient here, on a well‑trained lifter eating enough, is roughly equivalent to a 5–8% bump in rate of gain. Useful — but the lifting plan is the multiplier.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ COMPARE DETAIL ============================
export const CompareDetail = () => {
  const cols = [
    { name: "Transparent Labs", brand: "Whey isolate",  color: "#0F766E", score: 9.2, price: "$59", protein: "28 g", leucine: "3.0 g", sweetener: "Stevia + monk fruit", coa: "Informed Sport", fit: "Premium · transparency" },
    { name: "Optimum Nutrition", brand: "Gold Standard", color: "#B45309", score: 8.4, price: "$32", protein: "24 g", leucine: "2.5 g", sweetener: "Sucralose", coa: "NSF", fit: "Value · widely available" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="09 Compare Detail">
      <TopNav active="compare"/>
      <header className="fl-container" style={{ paddingTop: 56, paddingBottom: 32, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Compare</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <span className="t-meta" style={{ color: "var(--ink)" }}>Transparent Labs vs Optimum Nutrition</span>
        </div>
        <span className="eyebrow">Head to head · whey protein</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 20, maxWidth: 800 }}>
          Transparent Labs <span style={{ color: "var(--muted-2)", fontStyle: "italic" }}>vs</span> Optimum Nutrition
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 640 }}>
          Premium isolate against the category benchmark. The verdict isn't what most reviewers say.
        </p>
      </header>

      <main className="fl-container">
        {/* Big head-to-head block */}
        <section className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr" }}>
            {cols.map((c, i) => (
              <div key={i} style={{ padding: 40, background: i === 0 ? "var(--accent-soft)" : "transparent", borderRight: i === 0 ? "none" : undefined, position: "relative" }}>
                {i === 0 && <span style={{ position: "absolute", top: 16, right: 16, padding: "3px 8px", background: "var(--accent)", color: "#fff", borderRadius: 4, fontSize: 10, fontFamily: "var(--mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Winner overall</span>}
                <ProductImage shape="tub" color={c.color} w={180} h={180}/>
                <div className="t-meta" style={{ color: "var(--muted)", marginTop: 20 }}>{c.name}</div>
                <h2 className="t-h2" style={{ fontSize: 32, marginTop: 6 }}>{c.brand}</h2>
                <div style={{ display: "flex", gap: 16, marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                  <div>
                    <div className="t-meta" style={{ color: "var(--muted)" }}>Score</div>
                    <div className="t-display-md" style={{ fontSize: 40, color: "var(--accent)", marginTop: 4 }}>{c.score}</div>
                  </div>
                  <div>
                    <div className="t-meta" style={{ color: "var(--muted)" }}>Price</div>
                    <div className="t-display-md" style={{ fontSize: 40, marginTop: 4 }}>{c.price}</div>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 64, height: 64, borderRadius: "50%", background: "var(--ink)", color: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 20 }}>vs</div>
          </div>
        </section>

        {/* Spec by spec */}
        <SectionHead eyebrow="Spec by spec" title="The full breakdown"/>
        <div className="card" style={{ overflow: "hidden", marginBottom: 56 }}>
          {[
            ["Protein per scoop", cols[0].protein, cols[1].protein, 0],
            ["Leucine",           cols[0].leucine, cols[1].leucine, 0],
            ["Sweetener",         cols[0].sweetener, cols[1].sweetener, 0],
            ["3rd‑party COA",     cols[0].coa, cols[1].coa, null],
            ["Best for",          cols[0].fit, cols[1].fit, null],
            ["Price / serving",   "$1.97", "$1.07", 1],
          ].map(([label, a, b, win], i) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "20px 28px", borderBottom: i === 5 ? "none" : "1px solid var(--line)", alignItems: "center" }}>
              <span className="t-body" style={{ fontWeight: 500 }}>{label}</span>
              <div style={{ background: win === 0 ? "var(--accent-soft)" : "transparent", padding: "8px 12px", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
                {win === 0 && <Icon name="check" size={14} stroke="var(--accent)"/>}
                <span className="t-body" style={{ color: "var(--ink-2)", fontFamily: "var(--mono)" }}>{a}</span>
              </div>
              <div style={{ background: win === 1 ? "var(--accent-soft)" : "transparent", padding: "8px 12px", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
                {win === 1 && <Icon name="check" size={14} stroke="var(--accent)"/>}
                <span className="t-body" style={{ color: "var(--ink-2)", fontFamily: "var(--mono)" }}>{b}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <section className="card-soft" style={{ padding: 40, display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, marginBottom: 56 }}>
          <div>
            <span className="eyebrow">Our verdict</span>
            <div className="t-display-md" style={{ fontSize: 56, marginTop: 12, fontStyle: "italic" }}>It depends.</div>
          </div>
          <div>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 12 }}>
              <strong>Transparent Labs wins on formulation.</strong> 28g protein in 32g of powder, no artificial sweeteners, and a transparent ingredient panel. If those three things matter to you, the price is worth it.
            </p>
            <p className="t-body-lg" style={{ color: "var(--ink-2)" }}>
              <strong>Optimum wins on price.</strong> At $1.07 a scoop with a 24g leucine‑adequate dose, it's the right call for anyone hitting protein targets through volume. Both clear our methodology floor.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

