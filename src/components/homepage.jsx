import React from 'react';
import { FLLogo, Molecule, SmallMolecule, Icon, TopNav, Footer, EvidenceBadge, ScorePill, Stat, SectionHead, ProductImage, Meter, StudyRow } from './shared.jsx';

export const Homepage = () => {
  return (
    <div className="fl-root paper" data-screen-label="01 Homepage">
      <TopNav active="home" />

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="fl-container" style={{ paddingTop: 88, paddingBottom: 64, position: "relative" }}>
          <div style={{ position: "absolute", right: -80, top: 20, opacity: 0.95 }}>
            <Molecule width={620} height={620} opacity={0.85} />
          </div>
          <div style={{ maxWidth: 720, position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <span className="cite-pill"><Icon name="check" size={11}/> Independently funded · Est. 2019</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>Methodology v3.1 · April 2026</span>
            </div>
            <h1 className="t-display" style={{ marginBottom: 24 }}>
              Supplements,<br/>
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>weighed by evidence.</span>
            </h1>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 560, marginBottom: 36 }}>
              We read the trials so you don't have to. Every product on FitLab is scored against meta‑analyses, RCTs, and dose‑response curves — never marketing.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 56 }}>
              <button className="btn btn-primary" style={{ padding: "12px 20px" }}>Browse 412 reviews <Icon name="arrow-right" size={14}/></button>
              <button className="btn btn-ghost" style={{ padding: "12px 20px" }}>How we score</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, paddingTop: 36, borderTop: "1px solid var(--line)", maxWidth: 640 }}>
              <Stat n="412" label="Products reviewed"/>
              <Stat n="184" label="Ingredients in library"/>
              <Stat n="2,310" label="Studies cited"/>
              <Stat n="46" label="Stacks built"/>
            </div>
          </div>
        </div>
      </section>

      {/* EDITOR'S PICKS */}
      <section className="fl-container" style={{ marginTop: 72 }}>
        <SectionHead
          eyebrow="Editor's Picks · April 2026"
          title="Top of the lab bench right now"
          sub="The single best evidence‑backed pick in each major category, recalculated monthly."
          action={<a className="btn-link" href="#">All 412 reviews <Icon name="arrow-right" size={14}/></a>}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { cat: "Whey Protein", brand: "Transparent Labs", name: "100% Grass‑Fed Whey", score: 9.2, ev: "strong", color: "#0F766E", shape: "tub", price: "$59" },
            { cat: "Pre‑Workout",  brand: "Legion",            name: "Pulse",                 score: 8.9, ev: "strong", color: "#B45309", shape: "tub", price: "$45" },
            { cat: "Creatine",     brand: "Thorne",            name: "Creatine Monohydrate",  score: 9.6, ev: "strong", color: "#1D4ED8", shape: "pill-bottle", price: "$36" },
            { cat: "Sleep",        brand: "Momentous",         name: "Magnesium L‑Threonate", score: 8.4, ev: "mod",    color: "#6B21A8", shape: "bottle", price: "$54" },
          ].map((p, i) => (
            <article key={i} className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <span className="eyebrow" style={{ color: "var(--muted)" }}>{p.cat}</span>
                <ScorePill score={p.score}/>
              </div>
              <ProductImage shape={p.shape} color={p.color} w="100%" h={180}/>
              <div>
                <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 6 }}>{p.brand}</div>
                <h3 className="t-h4" style={{ marginBottom: 10 }}>{p.name}</h3>
                <EvidenceBadge level={p.ev}/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
                <span className="t-body-sm nums" style={{ color: "var(--ink)" }}>{p.price}<span style={{ color: "var(--muted)" }}> · 30 servings</span></span>
                <a className="t-body-sm" href="#" style={{ color: "var(--accent)", fontWeight: 500 }}>Read review →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACKS */}
      <section className="fl-container" style={{ marginTop: 96 }}>
        <SectionHead
          eyebrow="Goal‑built stacks"
          title="Protocols, not products"
          sub="Multi‑ingredient programs designed for one specific outcome — with cost, timing, and evidence baked in."
          action={<a className="btn-link" href="#">All 46 stacks <Icon name="arrow-right" size={14}/></a>}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { goal: "Muscle Gain",          ings: 5, cost: "$2.10", color: "#0F766E", icon: "dumbbell" },
            { goal: "Sleep Optimization",   ings: 4, cost: "$1.40", color: "#1D4ED8", icon: "moon" },
            { goal: "Foundational Health",  ings: 6, cost: "$1.90", color: "#0E7490", icon: "heart" },
            { goal: "Fat Loss Support",     ings: 5, cost: "$2.30", color: "#B45309", icon: "fire" },
          ].map((s, i) => (
            <a key={i} href="#" className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, top: -20, opacity: 0.6 }}>
                <SmallMolecule size={120} accent={s.color}/>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} size={20}/>
              </div>
              <h3 className="t-h3" style={{ position: "relative" }}>{s.goal}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>Ingredients</span>
                  <span className="t-body-sm nums">{s.ings}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>Cost / day</span>
                  <span className="t-body-sm nums">{s.cost}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="t-body-sm" style={{ color: "var(--muted)" }}>Evidence</span>
                  <EvidenceBadge level="strong" label="Strong"/>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--accent)", marginTop: 4 }}>
                <span className="t-body-sm" style={{ fontWeight: 500 }}>Open protocol</span>
                <Icon name="arrow-right" size={14}/>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* INDIA + RESEARCH SPLIT */}
      <section className="fl-container" style={{ marginTop: 96, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
        <div className="card" style={{ padding: 40, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)", color: "#fff", border: "none" }}>
          <div style={{ position: "absolute", right: -100, bottom: -100, opacity: 0.18 }}>
            <Molecule width={500} height={500} accent="#fff"/>
          </div>
          <span className="eyebrow" style={{ color: "#9FD8D2" }}>India editions · 2026</span>
          <h2 className="t-h2" style={{ color: "#fff", marginTop: 12, marginBottom: 16, maxWidth: 480 }}>
            Built for the Indian shelf, not adapted from the US.
          </h2>
          <p className="t-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 460, marginBottom: 24 }}>
            We test on products you can actually buy on Amazon.in, HealthKart, and 1mg — with INR pricing, FSSAI checks, and label transparency scores.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
            {[
              "Best Protein Supplements India 2026",
              "Best Pre‑Workout Supplements India 2026",
              "Best Vitamins & Minerals India 2026",
            ].map(t => (
              <a key={t} href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>
                <span className="t-body" style={{ color: "#fff" }}>{t}</span>
                <Icon name="arrow-up-right" size={16} stroke="#9FD8D2"/>
              </a>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <span className="eyebrow">Our research standard</span>
          <h3 className="t-h3" style={{ marginTop: 10, marginBottom: 18 }}>Three rules that disqualify a product.</h3>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              ["01", "Underdosed actives", "If a clinically‑studied dose isn't met, the product can't score above 6.0 — full stop."],
              ["02", "Proprietary blends",  "We require disclosed milligrams per ingredient. No fairy‑dusting."],
              ["03", "Untested by 3rd party", "Reviews require a current Informed Sport, NSF, or independent COA."],
            ].map(([n, t, body]) => (
              <li key={n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 14 }}>
                <span className="t-display-md" style={{ fontSize: 32, color: "var(--accent)" }}>{n}</span>
                <div>
                  <div className="t-body" style={{ fontWeight: 600, marginBottom: 4 }}>{t}</div>
                  <div className="t-body-sm" style={{ color: "var(--muted)" }}>{body}</div>
                </div>
              </li>
            ))}
          </ol>
          <a className="btn-link" href="#" style={{ marginTop: 24 }}>Read full methodology <Icon name="arrow-right" size={14}/></a>
        </div>
      </section>

      {/* RESEARCH ROUNDUP */}
      <section className="fl-container" style={{ marginTop: 96 }}>
        <SectionHead
          eyebrow="From the research desk"
          title="What we read this week"
          action={<a className="btn-link" href="#">Research archive <Icon name="arrow-right" size={14}/></a>}
        />
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 16 }}>
          <a href="#" className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="ev-badge ev-strong">Meta‑analysis</span>
              <span className="chip">Creatine</span>
            </div>
            <h3 className="t-h2" style={{ fontSize: 32 }}>Creatine in older adults: a 2026 dose‑response meta‑analysis of 41 RCTs.</h3>
            <p className="t-body" style={{ color: "var(--muted)" }}>The 5g/day plateau holds, but loading phases produce no measurable advantage past week 4 in adults 60+.</p>
            <div style={{ display: "flex", gap: 16, marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              <span className="t-meta" style={{ color: "var(--muted)" }}>12 min read</span>
              <span className="t-meta" style={{ color: "var(--muted)" }}>· 41 studies cited</span>
            </div>
          </a>
          {[
            { type: "RCT", tag: "Ashwagandha", title: "Ashwagandha and cortisol: replication failure in a 240‑subject RCT.", read: "8 min", cites: 3 },
            { type: "Review", tag: "Magnesium", title: "Magnesium forms compared: glycinate vs threonate vs citrate for sleep.", read: "10 min", cites: 18 },
          ].map((a, i) => (
            <a key={i} href="#" className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <span className="ev-badge ev-mod">{a.type}</span>
                <span className="chip">{a.tag}</span>
              </div>
              <h3 className="t-h3">{a.title}</h3>
              <div style={{ display: "flex", gap: 16, marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                <span className="t-meta" style={{ color: "var(--muted)" }}>{a.read} read</span>
                <span className="t-meta" style={{ color: "var(--muted)" }}>· {a.cites} cited</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BY GOAL STRIP */}
      <section className="fl-container" style={{ marginTop: 96 }}>
        <SectionHead
          eyebrow="Browse by goal"
          title="What are you optimizing for?"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {[
            ["dumbbell", "Muscle Gain",   42],
            ["fire",     "Fat Loss",      31],
            ["moon",     "Sleep",         24],
            ["brain",    "Focus",         19],
            ["heart",    "Recovery",      28],
            ["leaf",     "Longevity",     22],
          ].map(([icon, name, n]) => (
            <a key={name} href="#" className="card-soft" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, transition: "all 200ms" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--bg)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <Icon name={icon} size={18}/>
              </div>
              <div className="t-h4">{name}</div>
              <span className="t-meta" style={{ color: "var(--muted)" }}>{n} resources</span>
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="fl-container" style={{ marginTop: 96 }}>
        <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 20, padding: "56px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.5 }}>
            <Molecule width={420} height={420} accent="#0F766E"/>
          </div>
          <div style={{ position: "relative" }}>
            <span className="eyebrow" style={{ color: "#9FD8D2" }}>The Lab Notebook · weekly</span>
            <h2 className="t-h2" style={{ color: "var(--bg)", marginTop: 14, marginBottom: 12 }}>
              One study, one ingredient, one verdict — every Sunday.
            </h2>
            <p className="t-body" style={{ color: "rgba(251,250,247,0.7)", maxWidth: 420 }}>
              Joined by 32,400 lifters, clinicians, and nerds. No affiliate links, ever.
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 8, padding: 6, background: "rgba(255,255,255,0.08)", borderRadius: 999 }}>
              <input placeholder="you@inbox.com" style={{ background: "transparent", border: "none", outline: "none", color: "#fff", padding: "10px 16px", flex: 1, fontFamily: "var(--sans)", fontSize: 14 }}/>
              <button className="btn btn-accent">Subscribe</button>
            </div>
            <span className="t-meta" style={{ color: "rgba(255,255,255,0.5)" }}>Unsubscribe in one click. We never sell data.</span>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

