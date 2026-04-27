/* global React */
// FitLab — Shared components: TopNav, Footer, Logo, Molecule decoration, EvidenceBadge, ScorePill, Cards, etc.

const FLLogo = ({ size = 28, color = "currentColor" }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color }}>
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.25"/>
      <circle cx="16" cy="16" r="9.5" stroke={color} strokeWidth="1.25" strokeDasharray="2 2.5"/>
      <circle cx="16" cy="6.5" r="2.4" fill={color}/>
      <circle cx="6.5" cy="16" r="2.4" fill={color}/>
      <circle cx="25.5" cy="16" r="2.4" fill={color}/>
      <circle cx="16" cy="25.5" r="2.4" fill={color}/>
      <circle cx="16" cy="16" r="1.6" fill={color}/>
    </svg>
    <span style={{
      fontFamily: "var(--serif)",
      fontSize: 22,
      letterSpacing: "-0.02em",
      fontWeight: 500,
      color: "var(--ink)"
    }}>
      FitLab<span style={{ color: "var(--accent)" }}>.</span>
    </span>
  </span>
);

// A decorative molecule/atom illustration. Used as hero accent.
const Molecule = ({ width = 520, height = 520, opacity = 1, accent = "var(--accent)" }) => (
  <svg width={width} height={height} viewBox="0 0 520 520" fill="none" style={{ opacity }}>
    <defs>
      <radialGradient id="mol-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={accent} stopOpacity="0.18"/>
        <stop offset="100%" stopColor={accent} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="260" cy="260" r="240" fill="url(#mol-glow)"/>
    {/* outer ring */}
    <circle cx="260" cy="260" r="200" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="2 4"/>
    <circle cx="260" cy="260" r="140" stroke="var(--line-2)" strokeWidth="1"/>
    <circle cx="260" cy="260" r="80"  stroke="var(--line-2)" strokeWidth="1" strokeDasharray="3 5"/>

    {/* bonds */}
    <g stroke="var(--ink)" strokeOpacity="0.7" strokeWidth="1.25">
      <line x1="260" y1="60"  x2="260" y2="180"/>
      <line x1="60"  y1="260" x2="180" y2="260"/>
      <line x1="460" y1="260" x2="340" y2="260"/>
      <line x1="260" y1="460" x2="260" y2="340"/>
      <line x1="120" y1="120" x2="200" y2="200"/>
      <line x1="400" y1="120" x2="320" y2="200"/>
      <line x1="120" y1="400" x2="200" y2="320"/>
      <line x1="400" y1="400" x2="320" y2="320"/>
      <line x1="180" y1="260" x2="260" y2="260"/>
      <line x1="260" y1="260" x2="340" y2="260"/>
      <line x1="260" y1="180" x2="260" y2="260"/>
      <line x1="260" y1="260" x2="260" y2="340"/>
    </g>

    {/* atoms */}
    <g>
      <circle cx="260" cy="60"  r="14" fill="var(--bg)" stroke={accent} strokeWidth="1.5"/>
      <circle cx="60"  cy="260" r="14" fill="var(--bg)" stroke={accent} strokeWidth="1.5"/>
      <circle cx="460" cy="260" r="14" fill="var(--bg)" stroke={accent} strokeWidth="1.5"/>
      <circle cx="260" cy="460" r="14" fill="var(--bg)" stroke={accent} strokeWidth="1.5"/>
      <circle cx="120" cy="120" r="10" fill={accent}/>
      <circle cx="400" cy="120" r="10" fill="var(--ink)"/>
      <circle cx="120" cy="400" r="10" fill="var(--ink)"/>
      <circle cx="400" cy="400" r="10" fill={accent}/>

      <circle cx="180" cy="260" r="9"  fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25"/>
      <circle cx="340" cy="260" r="9"  fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25"/>
      <circle cx="260" cy="180" r="9"  fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25"/>
      <circle cx="260" cy="340" r="9"  fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25"/>

      <circle cx="260" cy="260" r="22" fill="var(--ink)"/>
      <circle cx="260" cy="260" r="22" fill="none" stroke={accent} strokeWidth="2"/>
      <circle cx="260" cy="260" r="6"  fill={accent}/>
    </g>
  </svg>
);

// Smaller molecule for cards/inline use
const SmallMolecule = ({ size = 80, accent = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="30" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="2 3"/>
    <line x1="40" y1="10" x2="40" y2="70" stroke="var(--ink)" strokeOpacity="0.5"/>
    <line x1="10" y1="40" x2="70" y2="40" stroke="var(--ink)" strokeOpacity="0.5"/>
    <circle cx="40" cy="10" r="5" fill={accent}/>
    <circle cx="70" cy="40" r="5" fill="var(--ink)"/>
    <circle cx="40" cy="70" r="5" fill="var(--bg)" stroke={accent} strokeWidth="1.5"/>
    <circle cx="10" cy="40" r="5" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25"/>
    <circle cx="40" cy="40" r="6" fill="var(--ink)"/>
  </svg>
);

const Icon = ({ name, size = 16, stroke = "currentColor", strokeWidth = 1.5 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return (<svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>);
    case "arrow-right": return (<svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);
    case "arrow-up-right": return (<svg {...props}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case "chevron-down": return (<svg {...props}><path d="m6 9 6 6 6-6"/></svg>);
    case "chevron-right": return (<svg {...props}><path d="m9 18 6-6-6-6"/></svg>);
    case "star": return (<svg {...props} fill="currentColor" stroke="none"><path d="m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"/></svg>);
    case "check": return (<svg {...props}><path d="M20 6 9 17l-5-5"/></svg>);
    case "x": return (<svg {...props}><path d="M18 6 6 18M6 6l12 12"/></svg>);
    case "filter": return (<svg {...props}><path d="M3 5h18M6 12h12M10 19h4"/></svg>);
    case "info": return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>);
    case "book": return (<svg {...props}><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z"/><path d="M4 5v14"/></svg>);
    case "flask": return (<svg {...props}><path d="M9 3h6M10 3v6L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9V3"/></svg>);
    case "leaf": return (<svg {...props}><path d="M21 3c-7 0-13 5-13 12 0 2 1 4 2 5 1-9 7-13 11-15z"/><path d="M5 21c2-7 8-12 14-15"/></svg>);
    case "globe": return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
    case "moon": return (<svg {...props}><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>);
    case "bolt": return (<svg {...props}><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>);
    case "dumbbell": return (<svg {...props}><path d="M6 4v16M3 8v8M18 4v16M21 8v8M6 12h12"/></svg>);
    case "brain": return (<svg {...props}><path d="M9 6a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 12a3 3 0 0 0 2 2.8V16a3 3 0 0 0 3 3 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2 1 1 0 0 0 0 2zM15 6a3 3 0 0 1 3 3v.2A3 3 0 0 1 20 12a3 3 0 0 1-2 2.8V16a3 3 0 0 1-3 3 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2 1 1 0 0 1 0 2z"/></svg>);
    case "heart": return (<svg {...props}><path d="M19.5 5.5a5 5 0 0 0-7.5-.5 5 5 0 0 0-7.5.5 5 5 0 0 0 0 7l7.5 7.5 7.5-7.5a5 5 0 0 0 0-7z"/></svg>);
    case "fire": return (<svg {...props}><path d="M12 3s4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 1-3s-3 2-3 6a6 6 0 0 0 12 0c0-5-6-12-6-12z"/></svg>);
    case "circle": return (<svg {...props}><circle cx="12" cy="12" r="9"/></svg>);
    case "menu": return (<svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>);
    case "external": return (<svg {...props}><path d="M14 4h6v6M10 14 20 4M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>);
    case "scale": return (<svg {...props}><path d="M12 3v18M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z"/></svg>);
    case "target": return (<svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>);
    default: return null;
  }
};

const TopNav = ({ active = "home" }) => {
  const items = [
    ["home",        "Home",        "/"],
    ["reviews",     "Reviews",     "#"],
    ["best-of",     "Best Picks",  "#"],
    ["compare",     "Compare",     "#"],
    ["ingredients", "Ingredients", "#"],
    ["stacks",      "Stacks",      "#"],
    ["brands",      "Brands",      "#"],
    ["research",    "Research",    "#"],
    ["by-goal",     "By Goal",     "#"],
    ["india",       "India",       "#"],
  ];
  return (
    <nav className="fl-topbar">
      <div className="fl-container" style={{ display: "flex", alignItems: "center", gap: 32, height: 68 }}>
        <FLLogo />
        <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0, alignItems: "center", flex: 1 }}>
          {items.map(([k, label]) => (
            <li key={k}>
              <a href="#" className={`nav-link${active === k ? " active" : ""}`}>
                {label}
                {k === "india" && <span style={{ marginLeft: 6, fontSize: 9, padding: "2px 5px", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent-ink)", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>2026</span>}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="btn btn-ghost" style={{ padding: "8px 12px" }}>
            <Icon name="search" size={14} />
            <span style={{ color: "var(--muted)", fontSize: 13 }}>Search ingredients, products…</span>
            <span style={{ marginLeft: 24, fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--mono)" }}>⌘K</span>
          </button>
          <button className="btn btn-primary">Newsletter</button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--line)", marginTop: 96, background: "var(--surface-2)" }}>
    <div className="fl-container" style={{ paddingTop: 64, paddingBottom: 40 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <FLLogo />
          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: 16, maxWidth: 280 }}>
            Independent, evidence-based supplement reviews. Every recommendation cites the underlying research and discloses funding.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            <span className="cite-pill"><Icon name="check" size={11}/> No paid placements</span>
          </div>
        </div>
        {[
          ["Reviews", ["Protein", "Pre-Workout", "Creatine", "Fat Burners", "Sleep", "Multivitamins"]],
          ["Library", ["Ingredients", "Stacks", "Compare", "Research"]],
          ["Brands", ["All brands", "Optimum Nutrition", "Thorne", "MuscleBlaze", "Transparent Labs"]],
          ["India", ["Best Protein 2026", "Best Pre‑Workout 2026", "Best Vitamins 2026"]],
        ].map(([title, links]) => (
          <div key={title}>
            <div className="eyebrow" style={{ color: "var(--muted)", marginBottom: 14 }}>{title}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => (
                <li key={l}><a className="t-body-sm" href="#" style={{ color: "var(--ink-2)" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rule" style={{ marginTop: 56, marginBottom: 32 }}/>

      {/* Disclosures block */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
        <div style={{ padding: 20, border: "1px solid var(--line)", borderRadius: 10, background: "var(--bg)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Icon name="info" size={14} stroke="var(--accent)"/>
            <span className="eyebrow" style={{ color: "var(--accent)", margin: 0 }}>Not medical advice</span>
          </div>
          <p className="t-body-sm" style={{ color: "var(--ink-2)", margin: 0, lineHeight: 1.55 }}>
            Content on FitLab is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any supplement — especially if you are pregnant, nursing, taking medication, or managing a medical condition.
          </p>
        </div>
        <div style={{ padding: 20, border: "1px solid var(--line)", borderRadius: 10, background: "var(--bg)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Icon name="check" size={14} stroke="var(--accent)"/>
            <span className="eyebrow" style={{ color: "var(--accent)", margin: 0 }}>Affiliate disclosure</span>
          </div>
          <p className="t-body-sm" style={{ color: "var(--ink-2)", margin: 0, lineHeight: 1.55 }}>
            FitLab is reader‑funded. We earn <strong>no</strong> affiliate commission, sponsorship, or product‑placement income from any brand reviewed on the site. Some article links go to retailer pages for reference — they are not affiliate links. Our funding comes from paid newsletter subscribers and the FitLab Editorial Foundation grant.
          </p>
        </div>
      </div>

      <div className="rule" style={{ marginBottom: 24 }}/>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="t-meta" style={{ color: "var(--muted)" }}>© 2026 FitLab Research, Inc.  ·  Editorial standards  ·  Funding disclosure  ·  Methodology v3.1</div>
        <div className="t-meta" style={{ color: "var(--muted)" }}>Made with citations.</div>
      </div>
    </div>
  </footer>
);

// Evidence badge
const EvidenceBadge = ({ level = "strong", label }) => {
  const map = {
    strong: { cls: "ev-strong", text: "Strong evidence" },
    mod:    { cls: "ev-mod",    text: "Moderate" },
    weak:   { cls: "ev-weak",   text: "Limited" },
  };
  const m = map[level];
  return (
    <span className={`ev-badge ${m.cls}`}>
      <span className="dot"/>
      {label || m.text}
    </span>
  );
};

const ScorePill = ({ score = 8.7 }) => (
  <span className="score-pill">
    <Icon name="star" size={11}/>
    <span>{score.toFixed(1)}</span>
  </span>
);

// Metric stat (used in homepage hero)
const Stat = ({ n, unit, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
      <span className="t-display-md" style={{ fontSize: 56 }}>{n}</span>
      {unit && <span className="t-meta" style={{ color: "var(--muted)" }}>{unit}</span>}
    </div>
    <span className="t-meta" style={{ color: "var(--muted)" }}>{label}</span>
  </div>
);

// Linkable section title row
const SectionHead = ({ eyebrow, title, sub, action }) => (
  <div className="section-head">
    <div className="left">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="t-h2">{title}</h2>
      {sub && <p className="t-body" style={{ color: "var(--muted)", maxWidth: 560, marginTop: 4 }}>{sub}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

// Product image placeholder (an abstract supplement bottle silhouette)
const ProductImage = ({ shape = "tub", color = "var(--accent)", w = 220, h = 220, label }) => {
  const inner = (() => {
    if (shape === "tub") return (
      <g>
        <rect x="50" y="62" width="120" height="124" rx="6" fill="var(--ink)"/>
        <rect x="46" y="56" width="128" height="14" rx="3" fill="var(--ink-2)"/>
        <rect x="62" y="84" width="96" height="64" rx="2" fill="var(--bg)"/>
        <rect x="62" y="84" width="96" height="22" fill={color}/>
      </g>
    );
    if (shape === "bottle") return (
      <g>
        <rect x="80" y="40" width="60" height="20" rx="2" fill="var(--ink-2)"/>
        <path d="M70 60h80v126a6 6 0 0 1-6 6H76a6 6 0 0 1-6-6z" fill="var(--ink)"/>
        <rect x="80" y="92" width="60" height="64" fill="var(--bg)"/>
        <rect x="80" y="92" width="60" height="14" fill={color}/>
      </g>
    );
    if (shape === "pill-bottle") return (
      <g>
        <rect x="74" y="44" width="72" height="20" rx="3" fill="var(--ink-2)"/>
        <rect x="68" y="64" width="84" height="124" rx="8" fill="var(--ink)"/>
        <rect x="80" y="92" width="60" height="80" fill="var(--bg)"/>
        <text x="110" y="140" textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fill={color}>RX</text>
      </g>
    );
    if (shape === "sachet") return (
      <g>
        <path d="M52 66h116l-8 120H60z" fill={color}/>
        <rect x="56" y="62" width="108" height="10" fill="var(--ink)"/>
      </g>
    );
    return null;
  })();
  return (
    <div className="product-tile" style={{ width: w, height: h }}>
      <svg width="80%" height="80%" viewBox="0 0 220 220">{inner}</svg>
      {label && <div style={{ position: "absolute", top: 10, left: 10 }} className="t-meta">{label}</div>}
    </div>
  );
};

// Generic line bar (for evidence-strength meters etc)
const Meter = ({ value = 0.7, color = "var(--accent)", label, valueLabel }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    {label && (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="t-body-sm" style={{ color: "var(--ink-2)" }}>{label}</span>
        {valueLabel && <span className="t-meta" style={{ color: "var(--muted)" }}>{valueLabel}</span>}
      </div>
    )}
    <div style={{ height: 6, borderRadius: 999, background: "var(--bg-2)", overflow: "hidden" }}>
      <div style={{ width: `${Math.min(100, value*100)}%`, height: "100%", background: color, borderRadius: 999 }}/>
    </div>
  </div>
);

// Citation/study row
const StudyRow = ({ year, type, title, journal, n, link = true }) => (
  <div style={{ display: "grid", gridTemplateColumns: "60px 110px 1fr 80px 24px", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
    <span className="t-meta nums" style={{ color: "var(--muted)" }}>{year}</span>
    <span className="ev-badge ev-strong" style={{ width: "fit-content" }}>{type}</span>
    <div>
      <div className="t-body-sm" style={{ color: "var(--ink)", fontWeight: 500 }}>{title}</div>
      <div className="t-meta" style={{ color: "var(--muted)", marginTop: 2, textTransform: "none", letterSpacing: 0 }}>{journal}</div>
    </div>
    <span className="t-meta nums" style={{ color: "var(--muted)" }}>n={n}</span>
    {link && <Icon name="external" size={14} stroke="var(--muted)"/>}
  </div>
);

// Make available globally
Object.assign(window, {
  FLLogo, Molecule, SmallMolecule, Icon, TopNav, Footer,
  EvidenceBadge, ScorePill, Stat, SectionHead, ProductImage, Meter, StudyRow
});
