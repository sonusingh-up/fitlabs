/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, SectionHead, StudyRow */

// ============================ RESEARCH INDEX ============================
const ResearchIndex = () => {
  const featured = {
    type: "Meta‑analysis", tag: "Creatine",
    title: "Creatine in older adults: a 2026 dose‑response meta‑analysis of 41 RCTs.",
    author: "Dr. Anya Krishnan, RD",
    date: "Apr 18, 2026",
    read: "12 min",
    cites: 41,
    summary: "The 5g/day plateau holds, but loading phases produce no measurable advantage past week 4 in adults 60+. We re-scored four products on the back of this paper."
  };
  const articles = [
    { type: "RCT",          tag: "Ashwagandha", title: "Ashwagandha and cortisol: replication failure in a 240‑subject RCT.", read: "8 min",  cites: 3,  date: "Apr 11" },
    { type: "Review",       tag: "Magnesium",   title: "Magnesium forms compared: glycinate vs threonate vs citrate for sleep.", read: "10 min", cites: 18, date: "Apr 04" },
    { type: "Meta‑analysis",tag: "Caffeine",    title: "Caffeine timing and endurance: a 22‑study meta‑analysis.",            read: "9 min",  cites: 22, date: "Mar 28" },
    { type: "RCT",          tag: "Omega‑3",     title: "Omega‑3 dose-response on triglycerides in 1,200 adults.",             read: "11 min", cites: 12, date: "Mar 21" },
    { type: "Review",       tag: "Whey",        title: "Protein timing: the anabolic window myth, revisited.",                 read: "14 min", cites: 31, date: "Mar 14" },
    { type: "RCT",          tag: "Vitamin D",   title: "Vitamin D3 vs D2: bioavailability across 6 RCTs.",                    read: "7 min",  cites: 6,  date: "Mar 07" },
  ];

  return (
    <div className="fl-root paper" data-screen-label="12 Research">
      <TopNav active="research"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.5 }}>
          <Molecule width={500} height={500}/>
        </div>
        <span className="eyebrow">Research desk</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 760 }}>
          Where we read the trials, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>so the reviews stay honest.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          RCT explainers, meta‑analysis breakdowns, and retraction watch — the source layer behind every product score on FitLab.
        </p>
      </header>

      <div className="fl-container" style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["All","Meta‑analysis","RCT","Review","Retraction watch"].map((c, i) => (
            <button key={c} className={`chip ${i === 0 ? "chip-ink" : ""}`} style={{ cursor: "pointer", padding: "6px 14px", fontSize: 13 }}>{c}</button>
          ))}
        </div>
        <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }}>Sort: Newest <Icon name="chevron-down" size={12}/></button>
      </div>

      <main className="fl-container" style={{ paddingTop: 40 }}>
        {/* Featured */}
        <a href="#" className="card" style={{ padding: 0, marginBottom: 32, display: "grid", gridTemplateColumns: "1.4fr 1fr", overflow: "hidden", minHeight: 360 }}>
          <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="ev-badge ev-strong">{featured.type}</span>
              <span className="chip">{featured.tag}</span>
              <span className="chip">Featured</span>
            </div>
            <h2 className="t-h2" style={{ fontSize: 36 }}>{featured.title}</h2>
            <p className="t-body-lg" style={{ color: "var(--muted)" }}>{featured.summary}</p>
            <div style={{ display: "flex", gap: 24, marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--line)" }}>
              <span className="t-meta" style={{ color: "var(--muted)" }}>{featured.author}</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· {featured.date}</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· {featured.read} read</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· {featured.cites} studies cited</span>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Molecule width={420} height={420} accent="#fff" opacity={0.55}/>
          </div>
        </a>

        {/* Article grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {articles.map((a, i) => (
            <a key={i} href="#" className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <span className={`ev-badge ${a.type === "Meta‑analysis" ? "ev-strong" : a.type === "RCT" ? "ev-mod" : "ev-weak"}`}>{a.type}</span>
                <span className="chip" style={{ fontSize: 11 }}>{a.tag}</span>
              </div>
              <h3 className="t-h4" style={{ fontSize: 19, lineHeight: 1.25 }}>{a.title}</h3>
              <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)", display: "flex", gap: 12 }}>
                <span className="t-meta" style={{ color: "var(--muted)" }}>{a.date}</span>
                <span className="t-meta" style={{ color: "var(--muted)" }}>· {a.read}</span>
                <span className="t-meta nums" style={{ color: "var(--muted)", marginLeft: "auto" }}>{a.cites} cited</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ METHODOLOGY ============================
const Methodology = () => (
  <div className="fl-root paper" data-screen-label="13 Methodology">
    <TopNav active="research"/>
    <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 56, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, top: -60, opacity: 0.55 }}>
        <Molecule width={620} height={620}/>
      </div>
      <span className="eyebrow">Methodology · v3.1 · April 2026</span>
      <h1 className="t-display" style={{ fontSize: 76, marginTop: 16, marginBottom: 24, maxWidth: 900 }}>
        How a product gets a <span style={{ fontStyle: "italic", color: "var(--accent)" }}>FitLab score.</span>
      </h1>
      <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 700 }}>
        Every product on FitLab is scored on a published rubric. This page is the rubric — the rules, the weights, the disqualifiers, and the change log.
      </p>
    </header>

    <main className="fl-container">
      {/* Quick TOC */}
      <div className="card-soft" style={{ padding: 24, marginBottom: 56, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {[
          ["01","The four pillars"],
          ["02","Disqualifiers"],
          ["03","Evidence grading"],
          ["04","Conflicts & funding"],
          ["05","Change log"],
        ].map(([n, t]) => (
          <a key={n} href="#" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="t-meta" style={{ color: "var(--muted)" }}>Section {n}</span>
            <span className="t-body" style={{ fontWeight: 500, color: "var(--ink)" }}>{t}</span>
          </a>
        ))}
      </div>

      {/* Pillars */}
      <section style={{ marginBottom: 80 }}>
        <SectionHead eyebrow="01 · The four pillars" title="A score is the weighted sum of four assessments."/>
        <div className="card" style={{ overflow: "hidden" }}>
          {[
            ["Formulation",   "30%", "Active ingredient identity, form, and freedom from fillers, artificial sweeteners, and proprietary blends."],
            ["Dose adequacy", "30%", "Does each active hit the dose used in published RCTs? Underdosed actives cap the score at 6.0."],
            ["Purity / COA",  "25%", "Current third‑party certificate (Informed Sport, NSF, or independent lab) for the lot tested."],
            ["Value",         "15%", "Cost per effective dose, normalized by category. Premium pricing is allowed if formulation justifies it."],
          ].map(([k, w, b], i) => (
            <div key={k} style={{ display: "grid", gridTemplateColumns: "200px 80px 1fr", padding: "24px 28px", borderBottom: i === 3 ? "none" : "1px solid var(--line)", alignItems: "start", gap: 24 }}>
              <span className="t-h4">{k}</span>
              <span className="t-h4 nums" style={{ color: "var(--accent)" }}>{w}</span>
              <span className="t-body" style={{ color: "var(--ink-2)" }}>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Disqualifiers */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 80 }}>
        <div>
          <span className="eyebrow">02 · Hard disqualifiers</span>
          <h2 className="t-h2" style={{ marginTop: 12, marginBottom: 16 }}>Three things that take a product off the list.</h2>
          <p className="t-body-lg" style={{ color: "var(--muted)" }}>
            We don't write negative reviews of products that fail these checks. We just refuse to review them.
          </p>
        </div>
        <div className="card" style={{ padding: 8 }}>
          {[
            ["Proprietary blends", "If actives aren't disclosed in milligrams, we can't dose‑check the formula. Auto‑skip."],
            ["No third‑party COA", "We require a current Informed Sport, NSF, or equivalent independent COA for the tested lot."],
            ["Banned actives",      "DMAA, DMHA, ostarine derivatives, and other adulterants flagged by FDA, USADA, or FSSAI."],
          ].map(([t, b], i) => (
            <div key={t} style={{ padding: 20, borderBottom: i === 2 ? "none" : "1px solid var(--line)", display: "grid", gridTemplateColumns: "32px 1fr", gap: 16 }}>
              <Icon name="x" size={20} stroke="#B91C1C"/>
              <div>
                <div className="t-body" style={{ fontWeight: 600, marginBottom: 4 }}>{t}</div>
                <div className="t-body-sm" style={{ color: "var(--muted)" }}>{b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evidence grading */}
      <section style={{ marginBottom: 80 }}>
        <SectionHead eyebrow="03 · Evidence grading" title="What the badges actually mean."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { lvl: "strong", title: "Strong evidence", body: "≥ 2 meta‑analyses or ≥ 5 well‑powered RCTs converging on a positive effect at the dose claimed." },
            { lvl: "mod",    title: "Moderate evidence", body: "≥ 3 RCTs with positive effect, but mixed effect sizes or heterogeneity across populations." },
            { lvl: "weak",   title: "Limited evidence", body: "Promising mechanism but ≤ 2 RCTs, small n, or replication failures in published literature." },
          ].map(b => (
            <div key={b.lvl} className="card" style={{ padding: 28 }}>
              <EvidenceBadge level={b.lvl} label={b.title}/>
              <p className="t-body" style={{ color: "var(--ink-2)", marginTop: 16 }}>{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Funding */}
      <section className="card" style={{ padding: 40, background: "var(--ink)", color: "var(--bg)", border: "none", marginBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, bottom: -80, opacity: 0.25 }}>
          <Molecule width={400} height={400} accent="#0F766E"/>
        </div>
        <span className="eyebrow" style={{ color: "#9FD8D2" }}>04 · Conflicts & funding</span>
        <h2 className="t-h2" style={{ color: "var(--bg)", marginTop: 12, marginBottom: 16, maxWidth: 720, position: "relative" }}>
          We are reader‑funded. No brand has ever paid for a review.
        </h2>
        <p className="t-body-lg" style={{ color: "rgba(251,250,247,0.75)", maxWidth: 680, position: "relative" }}>
          FitLab is supported by paid newsletter subscribers and a research grant from the FitLab Editorial Foundation. We accept no affiliate commissions, sponsored content, or product placement. Our top three reviewed products are most often unavailable in our affiliate program — we publish the verdict that fits the evidence.
        </p>
      </section>

      {/* Change log */}
      <section style={{ marginBottom: 32 }}>
        <SectionHead eyebrow="05 · Change log" title="What changed in v3.1"/>
        <div className="card" style={{ padding: 8 }}>
          {[
            ["Apr 2026", "v3.1", "Added FSSAI verification step for India editions. Capped underdosed‑actives score at 6.0 (was 6.5)."],
            ["Jan 2026", "v3.0", "Re‑weighted Value pillar from 20% → 15%; Purity raised from 20% → 25%. Heavy metal screening now mandatory for India lots."],
            ["Sep 2025", "v2.4", "Added retraction watch protocol — products lose points when cited research is retracted."],
            ["Mar 2025", "v2.3", "Switched evidence grading from a 5‑tier to a 3‑tier scale for clarity."],
          ].map(([date, ver, body], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 80px 1fr", padding: "20px 24px", borderBottom: i === 3 ? "none" : "1px solid var(--line)", gap: 24 }}>
              <span className="t-meta nums" style={{ color: "var(--muted)" }}>{date}</span>
              <span className="t-body-sm" style={{ fontWeight: 600, fontFamily: "var(--mono)" }}>{ver}</span>
              <span className="t-body-sm" style={{ color: "var(--ink-2)" }}>{body}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer/>
  </div>
);

// ============================ BLOG INDEX ============================
const BlogIndex = () => {
  const posts = [
    { tag: "Training",    title: "Why progressive overload outperforms every supplement combined.", read: "9 min",  date: "Apr 22" },
    { tag: "Nutrition",   title: "How much protein do you actually need? A 2026 evidence summary.", read: "11 min", date: "Apr 17" },
    { tag: "Sleep",       title: "Magnesium for sleep: the form, the dose, the evidence.",          read: "8 min",  date: "Apr 12" },
    { tag: "Myths",       title: "The five supplement myths that won't die.",                       read: "12 min", date: "Apr 06" },
    { tag: "Buying",      title: "How to read a supplement label like an analytical chemist.",      read: "7 min",  date: "Mar 30" },
    { tag: "Training",    title: "Caffeine and lifting: timing, dose, and tolerance.",              read: "10 min", date: "Mar 24" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="14 Blog">
      <TopNav active="research"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.5 }}>
          <Molecule width={460} height={460}/>
        </div>
        <span className="eyebrow">The blog</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 720 }}>
          Long‑form on training, nutrition, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>and the science underneath.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Where reviews go deep. Educational essays, myth‑busters, and buying guides for the curious reader.
        </p>
      </header>

      <div className="fl-container" style={{ display: "flex", gap: 6, paddingTop: 16, paddingBottom: 16, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        {["All","Training","Nutrition","Sleep","Myths","Buying"].map((c, i) => (
          <button key={c} className={`chip ${i === 0 ? "chip-ink" : ""}`} style={{ cursor: "pointer", padding: "6px 14px", fontSize: 13 }}>{c}</button>
        ))}
      </div>

      <main className="fl-container" style={{ paddingTop: 40 }}>
        {/* Featured */}
        <a href="#" className="card" style={{ padding: 0, marginBottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", minHeight: 380 }}>
          <div style={{ background: "linear-gradient(160deg, #0F766E 0%, #064E48 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Molecule width={460} height={460} accent="#fff" opacity={0.5}/>
          </div>
          <div style={{ padding: 48, display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="chip chip-accent">Editor's pick</span>
              <span className="chip">Training</span>
            </div>
            <h2 className="t-display-md" style={{ fontSize: 44 }}>The lifter's pyramid: what to fix before reaching for a stack.</h2>
            <p className="t-body-lg" style={{ color: "var(--muted)" }}>
              Sleep, protein, progressive overload, then supplements. A 14‑minute argument with citations.
            </p>
            <div style={{ display: "flex", gap: 16, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              <span className="t-meta" style={{ color: "var(--muted)" }}>Dr. Anya Krishnan</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· Apr 24, 2026</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· 14 min read</span>
            </div>
          </div>
        </a>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="chip" style={{ width: "fit-content", fontSize: 11 }}>{p.tag}</span>
              <h3 className="t-h4" style={{ fontSize: 19, lineHeight: 1.25 }}>{p.title}</h3>
              <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)", display: "flex", gap: 12 }}>
                <span className="t-meta" style={{ color: "var(--muted)" }}>{p.date}</span>
                <span className="t-meta" style={{ color: "var(--muted)" }}>· {p.read}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ BLOG DETAIL ============================
const BlogDetail = () => (
  <div className="fl-root paper" data-screen-label="15 Blog Detail">
    <TopNav active="research"/>
    <main className="fl-container" style={{ paddingTop: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <a className="t-meta" href="#" style={{ color: "var(--muted)" }}>Blog</a>
        <Icon name="chevron-right" size={12} stroke="var(--muted-2)"/>
        <span className="t-meta" style={{ color: "var(--ink)" }}>How much protein do you actually need?</span>
      </div>

      <header style={{ maxWidth: 760, marginBottom: 40 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <span className="chip chip-accent">Nutrition</span>
          <span className="chip">2026 evidence summary</span>
          <span className="cite-pill"><Icon name="check" size={11}/> Medically reviewed</span>
        </div>
        <h1 className="t-display-md" style={{ fontSize: 56, marginBottom: 20 }}>
          How much protein do you <span style={{ fontStyle: "italic", color: "var(--accent)" }}>actually</span> need?
        </h1>
        <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 24 }}>
          The 0.8 g/kg RDA is a floor for survival, not optimization. Here's what 30 years of nitrogen balance, MPS, and outcome studies actually say — for lifters, sedentary adults, and older adults losing muscle.
        </p>
        <div style={{ display: "flex", gap: 24, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 600 }}>AK</div>
            <div>
              <div className="t-body-sm" style={{ fontWeight: 600 }}>Dr. Anya Krishnan, RD</div>
              <div className="t-meta" style={{ color: "var(--muted)" }}>Author · Lead nutrition editor</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ink)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 600 }}>PS</div>
            <div>
              <div className="t-body-sm" style={{ fontWeight: 600 }}>Pankaj Singh, Pharm.B</div>
              <div className="t-meta" style={{ color: "var(--muted)" }}>Medical reviewer</div>
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="t-meta" style={{ color: "var(--muted)" }}>Apr 17, 2026 · 11 min read</div>
            <div className="t-meta" style={{ color: "var(--muted)", marginTop: 4 }}>22 studies cited</div>
          </div>
        </div>
      </header>

      {/* Hero accent */}
      <div style={{ height: 320, background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)", borderRadius: 16, marginBottom: 48, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Molecule width={480} height={480} accent="#fff" opacity={0.6}/>
      </div>

      {/* Body + sidebar */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 56 }}>
        <article style={{ maxWidth: 720 }}>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", fontSize: 20, marginBottom: 24, fontFamily: "var(--serif)", fontStyle: "italic" }}>
            "How much protein?" is the most common question we get. The honest answer is that it depends on three things — your training, your age, and what you're actually trying to optimize for.
          </p>

          <h2 className="t-h2" style={{ marginBottom: 16, marginTop: 32 }}>The numbers, briefly</h2>
          <div className="card-soft" style={{ padding: 28, marginBottom: 32 }}>
            {[
              ["Sedentary adults",      "0.8–1.0 g/kg/day", "RDA floor, sufficient for nitrogen balance."],
              ["General lifters",       "1.4–1.8 g/kg/day", "Adequate for hypertrophy in most training programs."],
              ["Maximizing hypertrophy","1.6–2.2 g/kg/day", "ISSN 2017 + Morton 2018 meta. Diminishing returns past 1.6 g/kg."],
              ["Cutting / fat loss",    "2.0–2.4 g/kg/day", "Higher protein preserves lean mass during caloric deficit."],
              ["Adults 65+",            "1.2–1.6 g/kg/day", "Anabolic resistance — older adults need more per‑meal leucine."],
            ].map(([who, dose, why], i) => (
              <div key={who} style={{ display: "grid", gridTemplateColumns: "200px 180px 1fr", padding: "14px 0", borderBottom: i === 4 ? "none" : "1px solid var(--line)", gap: 20, alignItems: "center" }}>
                <span className="t-body" style={{ fontWeight: 500 }}>{who}</span>
                <span className="t-body-sm nums" style={{ color: "var(--accent)" }}>{dose}</span>
                <span className="t-body-sm" style={{ color: "var(--muted)" }}>{why}</span>
              </div>
            ))}
          </div>

          <h2 className="t-h2" style={{ marginBottom: 16, marginTop: 32 }}>Why the RDA underestimates lifters</h2>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 16 }}>
            The 0.8 g/kg RDA was set using nitrogen balance studies in sedentary college students. It answers a narrow question: what's the minimum to avoid losing nitrogen on average? It doesn't answer the question lifters care about: what dose maximizes muscle protein synthesis over weeks of progressive overload?
          </p>
          <p className="t-body-lg" style={{ color: "var(--ink-2)", marginBottom: 32 }}>
            <a style={{ color: "var(--accent)" }}>Morton et al. 2018</a>, a 49‑study meta‑analysis, identified ~1.62 g/kg as the breakpoint above which additional protein produces no further hypertrophy benefit in resistance trainees. That's roughly double the RDA.
          </p>

          <blockquote style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 24, margin: "32px 0", fontFamily: "var(--serif)", fontSize: 24, fontStyle: "italic", color: "var(--ink-2)", lineHeight: 1.4 }}>
            "Per‑meal protein dose matters as much as the daily total. Four 40 g meals beat three 60 g meals for sustained MPS."
          </blockquote>

          <h2 className="t-h2" style={{ marginBottom: 16, marginTop: 32 }}>Cited research</h2>
          <div className="card" style={{ padding: 24 }}>
            <StudyRow year="2018" type="Meta‑analysis" title="A systematic review of dietary protein during caloric restriction in lifters" journal="Br. J. Sports Med." n="2,316"/>
            <StudyRow year="2020" type="RCT" title="Per‑meal leucine threshold in older adults" journal="Am. J. Clin. Nutr." n="120"/>
            <StudyRow year="2022" type="Review" title="Protein distribution and 24‑hour MPS" journal="Nutrients" n="—"/>
          </div>
        </article>
        <aside style={{ position: "sticky", top: 88, height: "fit-content" }}>
          <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 14 }}>On this page</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, borderLeft: "2px solid var(--line)", paddingLeft: 14 }}>
            {["The numbers, briefly","Why the RDA underestimates","Per‑meal distribution","Cited research"].map((t, i) => (
              <li key={t}><a className="t-body-sm" href="#" style={{ color: i === 0 ? "var(--accent)" : "var(--muted)", fontWeight: i === 0 ? 600 : 400 }}>{t}</a></li>
            ))}
          </ul>
          <div className="card" style={{ padding: 16, marginTop: 32 }}>
            <span className="eyebrow">Related stack</span>
            <div className="t-body" style={{ fontWeight: 600, marginTop: 10 }}>The Hypertrophy Stack</div>
            <div className="t-body-sm" style={{ color: "var(--muted)", marginTop: 4 }}>5 ingredients · $2.10/day</div>
            <a className="btn-link" href="#" style={{ marginTop: 12 }}>Open <Icon name="arrow-right" size={14}/></a>
          </div>
        </aside>
      </div>
    </main>
    <Footer/>
  </div>
);

window.ResearchIndex = ResearchIndex;
window.Methodology = Methodology;
window.BlogIndex = BlogIndex;
window.BlogDetail = BlogDetail;
