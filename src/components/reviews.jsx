import React from 'react';
import { Molecule, SmallMolecule, Icon, TopNav, Footer, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter, StudyRow } from './shared.jsx';

// ============================ REVIEWS INDEX ============================
export const ReviewsIndex = () => {
  const [activeCat, setActiveCat] = React.useState("All");
  const [activeEv, setActiveEv] = React.useState("All evidence");
  const cats = ["All", "Protein", "Pre‑Workout", "Creatine", "Fat Burners", "Sleep", "Multivitamins", "Greens", "Joint", "Nootropics"];
  const products = [
    { cat: "Protein",     brand: "Transparent Labs",  name: "100% Grass‑Fed Whey",          score: 9.2, ev: "strong", price: "$59",  shape: "tub",         color: "#0F766E", flag: "Editor's pick" },
    { cat: "Protein",     brand: "Optimum Nutrition", name: "Gold Standard Whey",           score: 8.4, ev: "strong", price: "$32",  shape: "tub",         color: "#B45309" },
    { cat: "Protein",     brand: "Naked Nutrition",   name: "Naked Whey",                   score: 8.7, ev: "strong", price: "$45",  shape: "tub",         color: "#374151" },
    { cat: "Pre‑Workout", brand: "Legion",            name: "Pulse",                        score: 8.9, ev: "strong", price: "$45",  shape: "tub",         color: "#1D4ED8", flag: "Best dosed" },
    { cat: "Pre‑Workout", brand: "Bare Performance",  name: "Flight",                       score: 8.1, ev: "mod",    price: "$45",  shape: "tub",         color: "#0E7490" },
    { cat: "Creatine",    brand: "Thorne",            name: "Creatine Monohydrate",         score: 9.6, ev: "strong", price: "$36",  shape: "pill-bottle", color: "#0F766E", flag: "Top score" },
    { cat: "Sleep",       brand: "Momentous",         name: "Magnesium L‑Threonate",        score: 8.4, ev: "mod",    price: "$54",  shape: "bottle",      color: "#6B21A8" },
    { cat: "Sleep",       brand: "Pure Encapsulations", name: "Magnesium Glycinate",        score: 8.6, ev: "strong", price: "$28",  shape: "pill-bottle", color: "#1E3A8A" },
    { cat: "Fat Burners", brand: "Legion",            name: "Phoenix",                      score: 7.2, ev: "mod",    price: "$45",  shape: "pill-bottle", color: "#B45309" },
    { cat: "Multivitamins", brand: "Ritual",          name: "Essential for Men 18+",        score: 7.8, ev: "mod",    price: "$33",  shape: "pill-bottle", color: "#9D174D" },
    { cat: "Greens",      brand: "Athletic Greens",   name: "AG1",                          score: 6.4, ev: "weak",   price: "$99",  shape: "sachet",      color: "#15803D" },
    { cat: "Nootropics",  brand: "MindLab Pro",       name: "Universal Nootropic",          score: 7.9, ev: "mod",    price: "$69",  shape: "pill-bottle", color: "#4338CA" },
  ];
  const filtered = products.filter(p => (activeCat === "All" || p.cat === activeCat));

  return (
    <div className="fl-root paper" data-screen-label="02 Reviews Index">
      <TopNav active="reviews"/>

      {/* Page header */}
      <header className="fl-container" style={{ paddingTop: 72, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: -40, opacity: 0.5 }}>
          <Molecule width={420} height={420}/>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Home</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <span className="t-meta" style={{ color: "var(--ink)" }}>Reviews</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 40, alignItems: "end" }}>
          <div>
            <span className="eyebrow">Independent reviews</span>
            <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16 }}>
              412 products. 184 ingredients. <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Zero affiliate edits.</span>
            </h1>
            <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 580 }}>
              Each review is anchored to a published methodology. Scores are recalculated when new RCTs land.
            </p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 12 }}>Last 30 days</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span className="t-body-sm">New reviews</span><span className="t-body-sm nums" style={{ fontWeight: 600 }}>14</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span className="t-body-sm">Re‑scored</span><span className="t-body-sm nums" style={{ fontWeight: 600 }}>23</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="t-body-sm">Studies added</span><span className="t-body-sm nums" style={{ fontWeight: 600 }}>61</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="fl-container" style={{ position: "sticky", top: 68, zIndex: 5, background: "var(--bg)", paddingTop: 16, paddingBottom: 16, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActiveCat(c)}
                className={`chip ${activeCat === c ? "chip-ink" : ""}`}
                style={{ cursor: "pointer", padding: "6px 14px", fontSize: 13 }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }}>
              <Icon name="filter" size={13}/> {activeEv}
              <Icon name="chevron-down" size={12}/>
            </button>
            <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }}>
              Sort: Score <Icon name="chevron-down" size={12}/>
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="fl-container" style={{ paddingTop: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <span className="t-meta" style={{ color: "var(--muted)" }}>Showing {filtered.length} of 412 · {activeCat}</span>
          <span className="t-meta" style={{ color: "var(--muted)" }}>Updated weekly</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {filtered.map((p, i) => (
            <article key={i} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
              {p.flag && (
                <span style={{ position: "absolute", top: 16, left: 16, padding: "3px 8px", background: "var(--ink)", color: "var(--bg)", borderRadius: 4, fontSize: 10, fontFamily: "var(--mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.flag}</span>
              )}
              <div style={{ display: "flex", gap: 16 }}>
                <ProductImage shape={p.shape} color={p.color} w={120} h={140}/>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="eyebrow" style={{ color: "var(--muted)" }}>{p.cat}</span>
                  <div className="t-meta" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: 0 }}>{p.brand}</div>
                  <h3 className="t-h4">{p.name}</h3>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
                    <ScorePill score={p.score}/>
                    <EvidenceBadge level={p.ev}/>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                <span className="t-body-sm nums">{p.price}</span>
                <a className="t-body-sm" href="#" style={{ color: "var(--accent)", fontWeight: 500 }}>Read review →</a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ REVIEW DETAIL ============================
export const ReviewDetail = () => {
  return (
    <div className="fl-root paper" data-screen-label="03 Review Detail">
      <TopNav active="reviews"/>
      <main className="fl-container" style={{ paddingTop: 56, paddingBottom: 0 }}>
        {/* breadcrumbs */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Reviews</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Protein</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <span className="t-meta" style={{ color: "var(--ink)" }}>Transparent Labs Whey</span>
        </div>

        {/* Hero */}
        <header style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 56, marginBottom: 56 }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
              <span className="chip chip-accent">Protein · Whey isolate</span>
              <span className="chip">Grass‑fed</span>
              <span className="chip">3rd‑party tested</span>
            </div>
            <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 10 }}>Transparent Labs</div>
            <h1 className="t-display-md" style={{ marginBottom: 20 }}>
              100% Grass‑Fed<br/>Whey Protein Isolate
            </h1>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 580, marginBottom: 28 }}>
              The cleanest whey isolate we've tested. 28g protein per 32g scoop, no artificial sweeteners, and a current Informed Sport COA. The rare 9+ score.
            </p>
            <div style={{ display: "flex", gap: 24, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <div>
                <div className="t-meta" style={{ color: "var(--muted)" }}>FitLab score</div>
                <div className="t-display-md" style={{ fontSize: 56, color: "var(--accent)", marginTop: 4 }}>9.2</div>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "center" }}>
                <Meter label="Formulation"  value={0.95} valueLabel="9.5"/>
                <Meter label="Dose adequacy" value={0.96} valueLabel="9.6"/>
                <Meter label="Purity / COA"  value={0.92} valueLabel="9.2"/>
                <Meter label="Value"         value={0.78} valueLabel="7.8" color="#B45309"/>
              </div>
            </div>
          </div>
          <aside className="card" style={{ padding: 24, height: "fit-content", position: "sticky", top: 88 }}>
            <ProductImage shape="tub" color="#0F766E" w="100%" h={260}/>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 20, marginBottom: 4 }}>
              <span className="t-h3 nums">$59</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>30 servings · $1.97/serv</span>
            </div>
            <div className="t-body-sm" style={{ color: "var(--muted)", marginBottom: 16 }}>Direct from Transparent Labs · Free US shipping</div>
            <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px 16px" }}>
              Visit retailer <Icon name="arrow-up-right" size={14}/>
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
              <Icon name="info" size={12} stroke="var(--muted)"/>
              <span className="t-meta" style={{ color: "var(--muted)" }}>FitLab earns no commission</span>
            </div>
            <div style={{ borderTop: "1px solid var(--line)", marginTop: 20, paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Flavor","Mocha"],["Servings","30"],["Protein/serv","28 g"],["Sweetener","Stevia + monk fruit"]].map(([k,v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>{k}</span>
                  <span className="t-body-sm">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </header>

        {/* Pros / Cons */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>What we like</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "28g protein per 32g — 87.5% protein by mass, top‑tier",
                "Informed Sport tested, with a public COA on every lot",
                "No artificial sweeteners, dyes, or proprietary blends",
                "0.45g leucine per scoop — clears MPS threshold easily",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 10 }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><Icon name="check" size={16}/></span>
                  <span className="t-body" style={{ color: "var(--ink-2)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ color: "#B45309" }}>What we don't</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Premium pricing — 35% above category median",
                "Mocha flavor reads sweet despite stevia‑only profile",
                "Solubility loses to Optimum Nutrition in cold milk",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 10 }}>
                  <span style={{ color: "#B45309", flexShrink: 0, marginTop: 2 }}><Icon name="x" size={16}/></span>
                  <span className="t-body" style={{ color: "var(--ink-2)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Article body */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 56, marginBottom: 56 }}>
          <article style={{ maxWidth: 720 }}>
            <h2 className="t-h2" style={{ marginBottom: 16 }}>The verdict</h2>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 16 }}>
              Whey is a commodity ingredient — almost any reputable brand will get you to 20+ grams of complete protein per scoop. Where products differentiate is on what they don't add, and what they're willing to disclose.
            </p>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 32 }}>
              Transparent Labs hits both. The label discloses every milligram of every ingredient (a methodology requirement at FitLab — see <a style={{ color: "var(--accent)" }}>Rule 02</a>), the macros earn the "isolate" claim with a 28/32 = 87.5% protein‑by‑mass ratio, and a current Informed Sport COA backs lot‑specific contaminant testing.
            </p>

            <h2 className="t-h2" style={{ marginBottom: 16 }}>How it scores against the methodology</h2>
            <div className="card-soft" style={{ padding: 28, marginBottom: 32 }}>
              {[
                { cat: "Formulation",   score: 9.5, note: "Single‑source whey isolate, no fillers, leucine clears 0.4g threshold." },
                { cat: "Dose adequacy", score: 9.6, note: "28g per scoop — exceeds the 25g per‑meal MPS dose used in 2023 ISSN guidance." },
                { cat: "Purity / COA",  score: 9.2, note: "Current Informed Sport (lot 2026‑014). Heavy metals < ND for Pb/Cd/As/Hg." },
                { cat: "Value",         score: 7.8, note: "$1.97/serving sits in the top quartile by price; offsets via subscription discount." },
              ].map((r, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 60px 1fr", gap: 20, padding: "14px 0", borderBottom: i === 3 ? "none" : "1px solid var(--line)", alignItems: "center" }}>
                  <span className="t-body" style={{ fontWeight: 500 }}>{r.cat}</span>
                  <span className="t-h4 nums" style={{ color: "var(--accent)" }}>{r.score}</span>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>{r.note}</span>
                </div>
              ))}
            </div>

            <h2 className="t-h2" style={{ marginBottom: 16 }}>The science, briefly</h2>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 16 }}>
              Whey's edge over plant proteins isn't its amino acid profile per se — most blended plant proteins close that gap — it's leucine concentration and digestion kinetics. <a style={{ color: "var(--accent)" }}>Witard et al. 2014</a> established that ~0.4g leucine triggers maximal MPS in young men, a finding reproduced across at least four further trials.
            </p>

            {/* Studies cited block */}
            <div className="card" style={{ padding: 28, marginTop: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <h3 className="t-h4">Cited research <span className="t-meta nums" style={{ color: "var(--muted)", marginLeft: 8 }}>14 studies</span></h3>
                <a className="btn-link" href="#">View all <Icon name="arrow-right" size={14}/></a>
              </div>
              <StudyRow year="2024" type="Meta‑analysis" title="Whey vs. plant protein for hypertrophy" journal="J. Int. Soc. Sports Nutr." n="1,209"/>
              <StudyRow year="2023" type="RCT" title="Leucine threshold for maximal MPS in young men" journal="Am. J. Clin. Nutr." n="48"/>
              <StudyRow year="2022" type="RCT" title="Whey isolate purity & inflammatory markers" journal="Nutrients" n="92"/>
            </div>
          </article>

          <aside style={{ position: "sticky", top: 88, height: "fit-content" }}>
            <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 14 }}>On this page</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, borderLeft: "2px solid var(--line)", paddingLeft: 14 }}>
              {["The verdict","How it scores","The science, briefly","Cited research","How it compares"].map((t, i) => (
                <li key={t}><a className="t-body-sm" href="#" style={{ color: i === 0 ? "var(--accent)" : "var(--muted)", fontWeight: i === 0 ? 600 : 400 }}>{t}</a></li>
              ))}
            </ul>
            <div className="card" style={{ padding: 18, marginTop: 32 }}>
              <span className="eyebrow">Author</span>
              <div className="t-body" style={{ fontWeight: 600, marginTop: 10 }}>Dr. Anya Krishnan</div>
              <div className="t-body-sm" style={{ color: "var(--muted)", marginTop: 4 }}>RD, PhD Nutritional Sci.</div>
              <div className="t-body-sm" style={{ marginTop: 10, color: "var(--ink-2)" }}>Reviewed Apr 12, 2026 · 18 min read</div>
            </div>
          </aside>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ BEST-OF DETAIL ============================
export const BestOfDetail = () => {
  const products = [
    { rank: 1, brand: "Transparent Labs", name: "100% Grass‑Fed Whey", score: 9.2, ev: "strong", color: "#0F766E", note: "Best overall — purity, dose, transparency",   per: "28 g / scoop", price: "$59", flag: "Editor's pick" },
    { rank: 2, brand: "Naked Nutrition",  name: "Naked Whey",          score: 8.7, ev: "strong", color: "#374151", note: "Best minimalist — single‑ingredient",       per: "25 g / scoop", price: "$45" },
    { rank: 3, brand: "Optimum Nutrition", name: "Gold Standard Whey", score: 8.4, ev: "strong", color: "#B45309", note: "Best value — widely available, well dosed", per: "24 g / scoop", price: "$32", flag: "Best value" },
    { rank: 4, brand: "Momentous",        name: "Essential Whey",      score: 8.1, ev: "strong", color: "#1D4ED8", note: "Best for athletes — NSF Sport tested",      per: "20 g / scoop", price: "$55" },
    { rank: 5, brand: "Ascent",           name: "Native Fuel",         score: 7.9, ev: "mod",    color: "#9D174D", note: "Best clean‑label drugstore option",          per: "25 g / scoop", price: "$40" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="04 Best-of Detail">
      <TopNav active="best-of"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 48, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -120, top: -60, opacity: 0.55 }}>
          <Molecule width={620} height={620}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Best Picks</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
          <span className="t-meta" style={{ color: "var(--ink)" }}>Best Whey Protein 2026</span>
        </div>
        <div style={{ maxWidth: 800, position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <span className="chip chip-accent">Protein</span>
            <span className="chip">2026 edition</span>
            <span className="chip">Global</span>
            <span className="cite-pill"><Icon name="check" size={11}/> 14 products tested · 47 studies cited</span>
          </div>
          <h1 className="t-display" style={{ fontSize: 72, marginBottom: 20 }}>
            The best whey proteins of <span style={{ fontStyle: "italic", color: "var(--accent)" }}>2026</span>.
          </h1>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 640 }}>
            Five proteins that meet our methodology floor — third‑party tested, fully disclosed, and dose‑adequate for muscle protein synthesis. Re‑scored monthly.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
            <div>
              <div className="t-meta" style={{ color: "var(--muted)" }}>Tested by</div>
              <div className="t-body" style={{ marginTop: 4, fontWeight: 500 }}>Dr. Anya Krishnan, RD</div>
            </div>
            <div>
              <div className="t-meta" style={{ color: "var(--muted)" }}>Last updated</div>
              <div className="t-body" style={{ marginTop: 4, fontWeight: 500 }}>April 14, 2026</div>
            </div>
            <div>
              <div className="t-meta" style={{ color: "var(--muted)" }}>Methodology</div>
              <div className="t-body" style={{ marginTop: 4, fontWeight: 500 }}>v3.1 · Protein protocol</div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick verdict bar */}
      <section className="fl-container">
        <div className="card-soft" style={{ padding: 32, marginBottom: 56 }}>
          <span className="eyebrow">At a glance</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, marginTop: 16 }}>
            {[
              ["Best overall",      "Transparent Labs"],
              ["Best value",        "Optimum Nutrition"],
              ["Best for athletes", "Momentous Essential"],
              ["Best minimalist",   "Naked Whey"],
              ["Best drugstore",    "Ascent Native Fuel"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 6 }}>{k}</div>
                <div className="t-body" style={{ fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking list */}
      <main className="fl-container">
        <SectionHead eyebrow="The list" title="The five we recommend"/>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {products.map(p => (
            <article key={p.rank} className="card" style={{ padding: 28, display: "grid", gridTemplateColumns: "60px 200px 1fr 200px", gap: 28, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <span className="t-display-md" style={{ fontSize: 48, color: p.rank === 1 ? "var(--accent)" : "var(--muted-2)" }}>#{p.rank}</span>
              </div>
              <ProductImage shape="tub" color={p.color} w={180} h={180}/>
              <div>
                {p.flag && <span style={{ display: "inline-block", padding: "3px 8px", background: "var(--ink)", color: "var(--bg)", borderRadius: 4, fontSize: 10, fontFamily: "var(--mono)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>{p.flag}</span>}
                <div className="t-meta" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: 0, marginBottom: 6 }}>{p.brand}</div>
                <h2 className="t-h3" style={{ marginBottom: 10 }}>{p.name}</h2>
                <p className="t-body" style={{ color: "var(--ink-2)", marginBottom: 14 }}>{p.note}</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <ScorePill score={p.score}/>
                  <EvidenceBadge level={p.ev}/>
                  <span className="chip">{p.per}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 8 }}>
                <div style={{ textAlign: "right" }}>
                  <div className="t-h3 nums">{p.price}</div>
                  <div className="t-meta" style={{ color: "var(--muted)" }}>30 servings</div>
                </div>
                <button className="btn btn-primary" style={{ justifyContent: "center" }}>Read full review <Icon name="arrow-right" size={14}/></button>
                <button className="btn btn-ghost" style={{ justifyContent: "center", fontSize: 13 }}>Visit retailer <Icon name="arrow-up-right" size={12}/></button>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison table */}
        <section style={{ marginTop: 80 }}>
          <SectionHead eyebrow="Side by side" title="Spec comparison"/>
          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr repeat(5, 1fr)", borderBottom: "1px solid var(--line)" }}>
              {["", "Transparent Labs", "Naked", "Optimum", "Momentous", "Ascent"].map((h, i) => (
                <div key={i} style={{ padding: "16px 18px", background: "var(--surface-2)", borderRight: i < 5 ? "1px solid var(--line)" : "none", fontWeight: 600, fontSize: 13 }}>{h}</div>
              ))}
            </div>
            {[
              ["Protein / scoop", "28 g",  "25 g",  "24 g",  "20 g",  "25 g"],
              ["Leucine / scoop", "3.0 g", "2.7 g", "2.5 g", "2.2 g", "2.6 g"],
              ["Sweetener",       "Stevia + monk fruit", "None", "Sucralose", "Stevia", "Stevia"],
              ["3rd‑party COA",   "✓ Informed Sport", "✓ Independent", "✓ NSF", "✓ NSF Sport", "✓ Informed Sport"],
              ["Price / serving", "$1.97", "$1.50", "$1.07", "$1.83", "$1.33"],
              ["FitLab score",    "9.2",   "8.7",   "8.4",   "8.1",   "7.9"],
            ].map((row, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: "1.2fr repeat(5, 1fr)", borderBottom: ri === 5 ? "none" : "1px solid var(--line)" }}>
                {row.map((cell, ci) => (
                  <div key={ci} style={{ padding: "14px 18px", borderRight: ci < 5 ? "1px solid var(--line)" : "none", fontSize: 13, fontFamily: ci === 0 ? "var(--sans)" : "var(--mono)", color: ci === 0 ? "var(--ink)" : "var(--ink-2)", fontWeight: ci === 0 ? 500 : 400, background: ri === 5 ? "var(--accent-soft)" : "transparent" }}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

