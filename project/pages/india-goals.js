/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter */

// ============================ BY GOAL INDEX ============================
const ByGoalIndex = () => {
  const goals = [{
    name: "Muscle Gain",
    icon: "dumbbell",
    color: "#0F766E",
    desc: "Hypertrophy, strength, lean mass.",
    stacks: 4,
    ings: 18,
    articles: 42
  }, {
    name: "Fat Loss",
    icon: "fire",
    color: "#B45309",
    desc: "Body recomposition, energy expenditure.",
    stacks: 3,
    ings: 12,
    articles: 31
  }, {
    name: "Sleep",
    icon: "moon",
    color: "#1D4ED8",
    desc: "Onset, depth, recovery.",
    stacks: 2,
    ings: 14,
    articles: 24
  }, {
    name: "Focus",
    icon: "brain",
    color: "#4338CA",
    desc: "Attention, working memory, energy.",
    stacks: 2,
    ings: 15,
    articles: 19
  }, {
    name: "Recovery",
    icon: "leaf",
    color: "#9D174D",
    desc: "Inflammation, soreness, return to play.",
    stacks: 3,
    ings: 16,
    articles: 28
  }, {
    name: "Longevity",
    icon: "globe",
    color: "#374151",
    desc: "Healthspan, biomarkers, prevention.",
    stacks: 2,
    ings: 22,
    articles: 22
  }, {
    name: "Endurance",
    icon: "bolt",
    color: "#84CC16",
    desc: "VO₂max, lactate threshold, time trial.",
    stacks: 1,
    ings: 9,
    articles: 14
  }, {
    name: "Joint Health",
    icon: "scale",
    color: "#0E7490",
    desc: "Cartilage, mobility, arthritis support.",
    stacks: 1,
    ings: 8,
    articles: 11
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "10 By Goal Index"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "by-goal"
  }), /*#__PURE__*/React.createElement("header", {
    className: "fl-container",
    style: {
      paddingTop: 64,
      paddingBottom: 40,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      top: -40,
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 500,
    height: 500
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Browse by goal"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 720
    }
  }, "Start with the outcome, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "not the ingredient.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 600
    }
  }, "Each goal page collects the relevant stacks, top\u2011rated products, ingredient deep\u2011dives, and research summaries in one place.")), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      marginBottom: 24,
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -60,
      bottom: -60,
      opacity: 0.25
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 360,
    height: 360,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: "rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dumbbell",
    size: 26,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2"
    }
  }, "Most read goal"), /*#__PURE__*/React.createElement("h2", {
    className: "t-display-md",
    style: {
      color: "#fff",
      marginTop: 12,
      fontSize: 56
    }
  }, "Muscle Gain"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "rgba(255,255,255,0.8)",
      marginTop: 16,
      maxWidth: 420
    }
  }, "Hypertrophy, strength, and lean mass. The four stacks, twelve products, and eighteen ingredients with evidence behind them.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "#9FD8D2"
    }
  }, "Stacks"), /*#__PURE__*/React.createElement("div", {
    className: "t-h3",
    style: {
      color: "#fff",
      marginTop: 4
    }
  }, "4")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "#9FD8D2"
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement("div", {
    className: "t-h3",
    style: {
      color: "#fff",
      marginTop: 4
    }
  }, "18")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "#9FD8D2"
    }
  }, "Articles"), /*#__PURE__*/React.createElement("div", {
    className: "t-h3",
    style: {
      color: "#fff",
      marginTop: 4
    }
  }, "42")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      background: "var(--surface-2)",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--muted)"
    }
  }, "What's inside"), [["The Hypertrophy Stack", "Stack · 5 ingredients · $2.10/day"], ["Best Whey Protein 2026", "Best‑of · 5 winners ranked"], ["Creatine: a 412‑study explainer", "Ingredient · Strong evidence"], ["Protein timing: does it matter?", "Research summary · 12 min read"]].map(([t, m]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      fontWeight: 500
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 4,
      textTransform: "none",
      letterSpacing: 0
    }
  }, m)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    stroke: "var(--muted)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, goals.slice(1).map(g => /*#__PURE__*/React.createElement("a", {
    key: g.name,
    href: "#",
    className: "card",
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -20,
      top: -20,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(SmallMolecule, {
    size: 120,
    accent: g.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 11,
      background: g.color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      marginBottom: 8
    }
  }, g.name), /*#__PURE__*/React.createElement("p", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, g.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 16,
      borderTop: "1px solid var(--line)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta nums",
    style: {
      color: "var(--muted)"
    }
  }, g.stacks, " stacks"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta nums",
    style: {
      color: "var(--muted)"
    }
  }, g.ings, " ings"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta nums",
    style: {
      color: "var(--muted)"
    }
  }, g.articles, " articles")))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ INDIA HUB ============================
const IndiaHub = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "11 India Hub"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "india"
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #0F766E 0%, #064E48 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -120,
      top: -80,
      opacity: 0.18
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 640,
    height: 640,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fl-container",
    style: {
      paddingTop: 72,
      paddingBottom: 64,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 12,
      borderRadius: 2,
      overflow: "hidden",
      display: "inline-flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "#FF9933"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "#000080"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "#138808"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2"
    }
  }, "India editions \xB7 2026")), /*#__PURE__*/React.createElement("h1", {
    className: "t-display",
    style: {
      color: "#fff",
      maxWidth: 780,
      marginBottom: 24,
      fontSize: 76
    }
  }, "Built for the Indian shelf, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#9FD8D2"
    }
  }, "not adapted from the US.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "rgba(255,255,255,0.85)",
      maxWidth: 640,
      marginBottom: 36
    }
  }, "Every recommendation here is for a product you can actually buy on Amazon.in, HealthKart, or 1mg \u2014 with INR pricing, FSSAI verification, and label transparency scoring."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      paddingTop: 36,
      borderTop: "1px solid rgba(255,255,255,0.18)",
      maxWidth: 720
    }
  }, [["68", "Products tested in India"], ["3", "City pricing benchmarks"], ["100%", "FSSAI license verified"], ["₹", "All pricing in rupees"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 44,
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "#9FD8D2",
      marginTop: 6
    }
  }, l)))))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Flagship guides",
    title: "Our three India rankings, recalculated for 2026",
    sub: "Each guide tests products available on Indian e\u2011commerce, scored against the same methodology we use globally."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginBottom: 80
    }
  }, [{
    tag: "Protein",
    title: "Best Protein Supplements India 2026",
    n: 24,
    top: "MuscleBlaze Biozyme",
    price: "₹3,499",
    color: "#0F766E",
    path: "/india/best-protein-supplements-india-2026/"
  }, {
    tag: "Pre‑Workout",
    title: "Best Pre‑Workout Supplements India 2026",
    n: 18,
    top: "GNC Beyond Raw LIT",
    price: "₹3,199",
    color: "#B45309",
    path: "/best-pre-workout-supplements-india-2026/"
  }, {
    tag: "Vitamins",
    title: "Best Vitamins & Minerals India 2026",
    n: 26,
    top: "HealthKart HK Vitals",
    price: "₹999",
    color: "#1D4ED8",
    path: "/india/best-vitamins-minerals-india-2026/"
  }].map((g, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: g.path,
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: `linear-gradient(160deg, ${g.color} 0%, ${g.color}cc 100%)`,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.35
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 400,
    height: 400,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement(ProductImage, {
    shape: "tub",
    color: g.color,
    w: 140,
    h: 150
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      padding: "3px 8px",
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      borderRadius: 4,
      fontSize: 10,
      fontFamily: "var(--mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, g.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      fontSize: 22
    }
  }, g.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      paddingTop: 12,
      borderTop: "1px solid var(--line)",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "Products tested"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      fontWeight: 500
    }
  }, g.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "Top pick"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      fontWeight: 500
    }
  }, g.top)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "From"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      fontWeight: 500
    }
  }, g.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, "Open guide"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    stroke: "var(--accent)"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 32,
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "India methodology"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      marginTop: 12,
      marginBottom: 16
    }
  }, "The four extra checks we run on Indian products."), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)"
    }
  }, "The Indian supplement market has a counterfeiting problem and a labelling problem. We adjust for both.")), /*#__PURE__*/React.createElement("div", {
    className: "card-soft",
    style: {
      padding: 8
    }
  }, [["FSSAI license check", "We verify the license number against fssai.gov.in for every product. No license, no review."], ["Lab‑match purchase", "Products are bought from the same channels readers use — Amazon.in, HealthKart, 1mg — not sample units."], ["Heavy metal screen", "Independent COA for Pb, Cd, As, Hg. Indian whey lots have failed this 4× in the last year."], ["Underdose flag", "Local pre‑workouts often run at 70% of clinical dose; we call that out explicitly."]].map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: 20,
      borderBottom: i === 3 ? "none" : "1px solid var(--line)",
      display: "grid",
      gridTemplateColumns: "32px 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--accent)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--mono)",
      fontSize: 12
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, b)))))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Recent India reviews",
    title: "Individual products on the Indian shelf",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn-link",
      href: "#"
    }, "All India reviews ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 40
    }
  }, [{
    brand: "MuscleBlaze",
    name: "Biozyme Performance Whey",
    score: 8.6,
    ev: "strong",
    price: "₹3,499",
    color: "#B45309",
    shape: "tub"
  }, {
    brand: "GNC",
    name: "Beyond Raw LIT",
    score: 8.4,
    ev: "strong",
    price: "₹3,199",
    color: "#1D4ED8",
    shape: "tub"
  }, {
    brand: "HealthKart",
    name: "HK Vitals Multivitamin",
    score: 7.9,
    ev: "mod",
    price: "₹999",
    color: "#0E7490",
    shape: "pill-bottle"
  }, {
    brand: "Optimum Nutrition",
    name: "Gold Standard Whey (India)",
    score: 8.2,
    ev: "strong",
    price: "₹4,599",
    color: "#B45309",
    shape: "tub"
  }].map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "card",
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    shape: p.shape,
    color: p.color,
    w: "100%",
    h: 140
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      textTransform: "none",
      letterSpacing: 0
    }
  }, p.brand), /*#__PURE__*/React.createElement("h4", {
    className: "t-h4",
    style: {
      fontSize: 16
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ScorePill, {
    score: p.score
  }), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: p.ev
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, p.price), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--accent)"
    }
  }, "Read \u2192")))))), /*#__PURE__*/React.createElement(Footer, null));
};
window.ByGoalIndex = ByGoalIndex;
window.IndiaHub = IndiaHub;
