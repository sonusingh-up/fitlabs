/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter */

// ============================ BY GOAL INDEX ============================
const ByGoalIndex = () => {
  const goals = [
    { name: "Muscle Gain", icon: "dumbbell", color: "#0F766E", desc: "Hypertrophy, strength, lean mass.",       stacks: 4, ings: 18, articles: 42 },
    { name: "Fat Loss",    icon: "fire",     color: "#B45309", desc: "Body recomposition, energy expenditure.", stacks: 3, ings: 12, articles: 31 },
    { name: "Sleep",       icon: "moon",     color: "#1D4ED8", desc: "Onset, depth, recovery.",                 stacks: 2, ings: 14, articles: 24 },
    { name: "Focus",       icon: "brain",    color: "#4338CA", desc: "Attention, working memory, energy.",      stacks: 2, ings: 15, articles: 19 },
    { name: "Recovery",    icon: "leaf",     color: "#9D174D", desc: "Inflammation, soreness, return to play.", stacks: 3, ings: 16, articles: 28 },
    { name: "Longevity",   icon: "globe",    color: "#374151", desc: "Healthspan, biomarkers, prevention.",     stacks: 2, ings: 22, articles: 22 },
    { name: "Endurance",   icon: "bolt",     color: "#84CC16", desc: "VO₂max, lactate threshold, time trial.",   stacks: 1, ings: 9,  articles: 14 },
    { name: "Joint Health",icon: "scale",    color: "#0E7490", desc: "Cartilage, mobility, arthritis support.", stacks: 1, ings: 8,  articles: 11 },
  ];

  return (
    <div className="fl-root paper" data-screen-label="10 By Goal Index">
      <TopNav active="by-goal"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.55 }}>
          <Molecule width={500} height={500}/>
        </div>
        <span className="eyebrow">Browse by goal</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 720 }}>
          Start with the outcome, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>not the ingredient.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Each goal page collects the relevant stacks, top‑rated products, ingredient deep‑dives, and research summaries in one place.
        </p>
      </header>

      <main className="fl-container" style={{ paddingTop: 32 }}>
        {/* big featured goal */}
        <a href="#" className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 24, display: "grid", gridTemplateColumns: "1.2fr 1fr", minHeight: 320 }}>
          <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -60, bottom: -60, opacity: 0.25 }}>
              <Molecule width={360} height={360} accent="#fff"/>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon name="dumbbell" size={26} stroke="#fff"/>
              </div>
              <span className="eyebrow" style={{ color: "#9FD8D2" }}>Most read goal</span>
              <h2 className="t-display-md" style={{ color: "#fff", marginTop: 12, fontSize: 56 }}>Muscle Gain</h2>
              <p className="t-body-lg" style={{ color: "rgba(255,255,255,0.8)", marginTop: 16, maxWidth: 420 }}>
                Hypertrophy, strength, and lean mass. The four stacks, twelve products, and eighteen ingredients with evidence behind them.
              </p>
            </div>
            <div style={{ display: "flex", gap: 32, position: "relative" }}>
              <div><div className="t-meta" style={{ color: "#9FD8D2" }}>Stacks</div><div className="t-h3" style={{ color: "#fff", marginTop: 4 }}>4</div></div>
              <div><div className="t-meta" style={{ color: "#9FD8D2" }}>Ingredients</div><div className="t-h3" style={{ color: "#fff", marginTop: 4 }}>18</div></div>
              <div><div className="t-meta" style={{ color: "#9FD8D2" }}>Articles</div><div className="t-h3" style={{ color: "#fff", marginTop: 4 }}>42</div></div>
            </div>
          </div>
          <div style={{ padding: 40, background: "var(--surface-2)", display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow" style={{ color: "var(--muted)" }}>What's inside</span>
            {[
              ["The Hypertrophy Stack",          "Stack · 5 ingredients · $2.10/day"],
              ["Best Whey Protein 2026",         "Best‑of · 5 winners ranked"],
              ["Creatine: a 412‑study explainer","Ingredient · Strong evidence"],
              ["Protein timing: does it matter?","Research summary · 12 min read"],
            ].map(([t, m]) => (
              <div key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                <div>
                  <div className="t-body" style={{ fontWeight: 500 }}>{t}</div>
                  <div className="t-meta" style={{ color: "var(--muted)", marginTop: 4, textTransform: "none", letterSpacing: 0 }}>{m}</div>
                </div>
                <Icon name="arrow-right" size={14} stroke="var(--muted)"/>
              </div>
            ))}
          </div>
        </a>

        {/* grid of remaining goals */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {goals.slice(1).map(g => (
            <a key={g.name} href="#" className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 18, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, top: -20, opacity: 0.4 }}>
                <SmallMolecule size={120} accent={g.color}/>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: g.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <Icon name={g.icon} size={20}/>
              </div>
              <div style={{ position: "relative" }}>
                <h3 className="t-h3" style={{ marginBottom: 8 }}>{g.name}</h3>
                <p className="t-body-sm" style={{ color: "var(--muted)" }}>{g.desc}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--line)", position: "relative" }}>
                <span className="t-meta nums" style={{ color: "var(--muted)" }}>{g.stacks} stacks</span>
                <span className="t-meta nums" style={{ color: "var(--muted)" }}>{g.ings} ings</span>
                <span className="t-meta nums" style={{ color: "var(--muted)" }}>{g.articles} articles</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ INDIA HUB ============================
const IndiaHub = () => {
  return (
    <div className="fl-root paper" data-screen-label="11 India Hub">
      <TopNav active="india"/>

      {/* HERO */}
      <header style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #0F766E 0%, #064E48 100%)", color: "#fff" }}>
        <div style={{ position: "absolute", right: -120, top: -80, opacity: 0.18 }}>
          <Molecule width={640} height={640} accent="#fff"/>
        </div>
        <div className="fl-container" style={{ paddingTop: 72, paddingBottom: 64, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 18, height: 12, borderRadius: 2, overflow: "hidden", display: "inline-flex", flexDirection: "column" }}>
              <span style={{ flex: 1, background: "#FF9933" }}/>
              <span style={{ flex: 1, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#000080" }}/>
              </span>
              <span style={{ flex: 1, background: "#138808" }}/>
            </span>
            <span className="eyebrow" style={{ color: "#9FD8D2" }}>India editions · 2026</span>
          </div>
          <h1 className="t-display" style={{ color: "#fff", maxWidth: 780, marginBottom: 24, fontSize: 76 }}>
            Built for the Indian shelf, <span style={{ fontStyle: "italic", color: "#9FD8D2" }}>not adapted from the US.</span>
          </h1>
          <p className="t-body-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 640, marginBottom: 36 }}>
            Every recommendation here is for a product you can actually buy on Amazon.in, HealthKart, or 1mg — with INR pricing, FSSAI verification, and label transparency scoring.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.18)", maxWidth: 720 }}>
            {[
              ["68",  "Products tested in India"],
              ["3",   "City pricing benchmarks"],
              ["100%","FSSAI license verified"],
              ["₹",   "All pricing in rupees"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="t-display-md" style={{ fontSize: 44, color: "#fff" }}>{n}</div>
                <div className="t-meta" style={{ color: "#9FD8D2", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* THE THREE FLAGSHIP GUIDES */}
      <main className="fl-container" style={{ paddingTop: 80 }}>
        <SectionHead eyebrow="Flagship guides" title="Our three India rankings, recalculated for 2026" sub="Each guide tests products available on Indian e‑commerce, scored against the same methodology we use globally."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 80 }}>
          {[
            { tag: "Protein", title: "Best Protein Supplements India 2026", n: 24, top: "MuscleBlaze Biozyme", price: "₹3,499", color: "#0F766E", path: "/india/best-protein-supplements-india-2026/" },
            { tag: "Pre‑Workout", title: "Best Pre‑Workout Supplements India 2026", n: 18, top: "GNC Beyond Raw LIT", price: "₹3,199", color: "#B45309", path: "/best-pre-workout-supplements-india-2026/" },
            { tag: "Vitamins", title: "Best Vitamins & Minerals India 2026", n: 26, top: "HealthKart HK Vitals", price: "₹999",  color: "#1D4ED8", path: "/india/best-vitamins-minerals-india-2026/" },
          ].map((g, i) => (
            <a key={i} href={g.path} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 200, background: `linear-gradient(160deg, ${g.color} 0%, ${g.color}cc 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                  <Molecule width={400} height={400} accent="#fff"/>
                </div>
                <ProductImage shape="tub" color={g.color} w={140} h={150}/>
                <span style={{ position: "absolute", top: 14, left: 14, padding: "3px 8px", background: "rgba(0,0,0,0.55)", color: "#fff", borderRadius: 4, fontSize: 10, fontFamily: "var(--mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{g.tag}</span>
              </div>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <h3 className="t-h3" style={{ fontSize: 22 }}>{g.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 12, borderTop: "1px solid var(--line)", marginTop: "auto" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="t-body-sm" style={{ color: "var(--muted)" }}>Products tested</span>
                    <span className="t-body-sm nums" style={{ fontWeight: 500 }}>{g.n}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="t-body-sm" style={{ color: "var(--muted)" }}>Top pick</span>
                    <span className="t-body-sm" style={{ fontWeight: 500 }}>{g.top}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="t-body-sm" style={{ color: "var(--muted)" }}>From</span>
                    <span className="t-body-sm nums" style={{ fontWeight: 500 }}>{g.price}</span>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12 }}>
                  <span className="t-body-sm" style={{ color: "var(--accent)", fontWeight: 600 }}>Open guide</span>
                  <Icon name="arrow-right" size={14} stroke="var(--accent)"/>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* What we check on Indian products */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, marginBottom: 80 }}>
          <div>
            <span className="eyebrow">India methodology</span>
            <h2 className="t-h2" style={{ marginTop: 12, marginBottom: 16 }}>The four extra checks we run on Indian products.</h2>
            <p className="t-body-lg" style={{ color: "var(--muted)" }}>
              The Indian supplement market has a counterfeiting problem and a labelling problem. We adjust for both.
            </p>
          </div>
          <div className="card-soft" style={{ padding: 8 }}>
            {[
              ["FSSAI license check",     "We verify the license number against fssai.gov.in for every product. No license, no review."],
              ["Lab‑match purchase",      "Products are bought from the same channels readers use — Amazon.in, HealthKart, 1mg — not sample units."],
              ["Heavy metal screen",      "Independent COA for Pb, Cd, As, Hg. Indian whey lots have failed this 4× in the last year."],
              ["Underdose flag",          "Local pre‑workouts often run at 70% of clinical dose; we call that out explicitly."],
            ].map(([t, b], i) => (
              <div key={t} style={{ padding: 20, borderBottom: i === 3 ? "none" : "1px solid var(--line)", display: "grid", gridTemplateColumns: "32px 1fr", gap: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 12 }}>0{i+1}</div>
                <div>
                  <div className="t-body" style={{ fontWeight: 600, marginBottom: 4 }}>{t}</div>
                  <div className="t-body-sm" style={{ color: "var(--muted)" }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent India reviews */}
        <SectionHead eyebrow="Recent India reviews" title="Individual products on the Indian shelf" action={<a className="btn-link" href="#">All India reviews <Icon name="arrow-right" size={14}/></a>}/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
          {[
            { brand: "MuscleBlaze",  name: "Biozyme Performance Whey", score: 8.6, ev: "strong", price: "₹3,499", color: "#B45309", shape: "tub" },
            { brand: "GNC",          name: "Beyond Raw LIT",            score: 8.4, ev: "strong", price: "₹3,199", color: "#1D4ED8", shape: "tub" },
            { brand: "HealthKart",   name: "HK Vitals Multivitamin",    score: 7.9, ev: "mod",    price: "₹999",   color: "#0E7490", shape: "pill-bottle" },
            { brand: "Optimum Nutrition", name: "Gold Standard Whey (India)", score: 8.2, ev: "strong", price: "₹4,599", color: "#B45309", shape: "tub" },
          ].map((p, i) => (
            <article key={i} className="card" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
              <ProductImage shape={p.shape} color={p.color} w="100%" h={140}/>
              <div className="t-meta" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: 0 }}>{p.brand}</div>
              <h4 className="t-h4" style={{ fontSize: 16 }}>{p.name}</h4>
              <div style={{ display: "flex", gap: 8 }}>
                <ScorePill score={p.score}/>
                <EvidenceBadge level={p.ev}/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: "1px solid var(--line)" }}>
                <span className="t-body-sm nums">{p.price}</span>
                <span className="t-meta" style={{ color: "var(--accent)" }}>Read →</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

window.ByGoalIndex = ByGoalIndex;
window.IndiaHub = IndiaHub;
