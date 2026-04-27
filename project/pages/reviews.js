/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter, StudyRow */

// ============================ REVIEWS INDEX ============================
const ReviewsIndex = () => {
  const [activeCat, setActiveCat] = React.useState("All");
  const [activeEv, setActiveEv] = React.useState("All evidence");
  const cats = ["All", "Protein", "Pre‑Workout", "Creatine", "Fat Burners", "Sleep", "Multivitamins", "Greens", "Joint", "Nootropics"];
  const products = [{
    cat: "Protein",
    brand: "Transparent Labs",
    name: "100% Grass‑Fed Whey",
    score: 9.2,
    ev: "strong",
    price: "$59",
    shape: "tub",
    color: "#0F766E",
    flag: "Editor's pick"
  }, {
    cat: "Protein",
    brand: "Optimum Nutrition",
    name: "Gold Standard Whey",
    score: 8.4,
    ev: "strong",
    price: "$32",
    shape: "tub",
    color: "#B45309"
  }, {
    cat: "Protein",
    brand: "Naked Nutrition",
    name: "Naked Whey",
    score: 8.7,
    ev: "strong",
    price: "$45",
    shape: "tub",
    color: "#374151"
  }, {
    cat: "Pre‑Workout",
    brand: "Legion",
    name: "Pulse",
    score: 8.9,
    ev: "strong",
    price: "$45",
    shape: "tub",
    color: "#1D4ED8",
    flag: "Best dosed"
  }, {
    cat: "Pre‑Workout",
    brand: "Bare Performance",
    name: "Flight",
    score: 8.1,
    ev: "mod",
    price: "$45",
    shape: "tub",
    color: "#0E7490"
  }, {
    cat: "Creatine",
    brand: "Thorne",
    name: "Creatine Monohydrate",
    score: 9.6,
    ev: "strong",
    price: "$36",
    shape: "pill-bottle",
    color: "#0F766E",
    flag: "Top score"
  }, {
    cat: "Sleep",
    brand: "Momentous",
    name: "Magnesium L‑Threonate",
    score: 8.4,
    ev: "mod",
    price: "$54",
    shape: "bottle",
    color: "#6B21A8"
  }, {
    cat: "Sleep",
    brand: "Pure Encapsulations",
    name: "Magnesium Glycinate",
    score: 8.6,
    ev: "strong",
    price: "$28",
    shape: "pill-bottle",
    color: "#1E3A8A"
  }, {
    cat: "Fat Burners",
    brand: "Legion",
    name: "Phoenix",
    score: 7.2,
    ev: "mod",
    price: "$45",
    shape: "pill-bottle",
    color: "#B45309"
  }, {
    cat: "Multivitamins",
    brand: "Ritual",
    name: "Essential for Men 18+",
    score: 7.8,
    ev: "mod",
    price: "$33",
    shape: "pill-bottle",
    color: "#9D174D"
  }, {
    cat: "Greens",
    brand: "Athletic Greens",
    name: "AG1",
    score: 6.4,
    ev: "weak",
    price: "$99",
    shape: "sachet",
    color: "#15803D"
  }, {
    cat: "Nootropics",
    brand: "MindLab Pro",
    name: "Universal Nootropic",
    score: 7.9,
    ev: "mod",
    price: "$69",
    shape: "pill-bottle",
    color: "#4338CA"
  }];
  const filtered = products.filter(p => activeCat === "All" || p.cat === activeCat);
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "02 Reviews Index"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "reviews"
  }), /*#__PURE__*/React.createElement("header", {
    className: "fl-container",
    style: {
      paddingTop: 72,
      paddingBottom: 40,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: -40,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 420,
    height: 420
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "t-meta",
    href: "#",
    style: {
      color: "var(--muted)"
    }
  }, "Home"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, "Reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 40,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Independent reviews"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16
    }
  }, "412 products. 184 ingredients. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "Zero affiliate edits.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 580
    }
  }, "Each review is anchored to a published methodology. Scores are recalculated when new RCTs land.")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 12
    }
  }, "Last 30 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm"
  }, "New reviews"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      fontWeight: 600
    }
  }, "14")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm"
  }, "Re\u2011scored"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      fontWeight: 600
    }
  }, "23")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm"
  }, "Studies added"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      fontWeight: 600
    }
  }, "61"))))), /*#__PURE__*/React.createElement("div", {
    className: "fl-container",
    style: {
      position: "sticky",
      top: 68,
      zIndex: 5,
      background: "var(--bg)",
      paddingTop: 16,
      paddingBottom: 16,
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setActiveCat(c),
    className: `chip ${activeCat === c ? "chip-ink" : ""}`,
    style: {
      cursor: "pointer",
      padding: "6px 14px",
      fontSize: 13
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      padding: "6px 12px",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 13
  }), " ", activeEv, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      padding: "6px 12px",
      fontSize: 13
    }
  }, "Sort: Score ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  }))))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Showing ", filtered.length, " of 412 \xB7 ", activeCat), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Updated weekly")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, filtered.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "card",
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative"
    }
  }, p.flag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      padding: "3px 8px",
      background: "var(--ink)",
      color: "var(--bg)",
      borderRadius: 4,
      fontSize: 10,
      fontFamily: "var(--mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, p.flag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    shape: p.shape,
    color: p.color,
    w: 120,
    h: 140
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--muted)"
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      textTransform: "none",
      letterSpacing: 0
    }
  }, p.brand), /*#__PURE__*/React.createElement("h3", {
    className: "t-h4"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(ScorePill, {
    score: p.score
  }), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: p.ev
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 14,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, p.price), /*#__PURE__*/React.createElement("a", {
    className: "t-body-sm",
    href: "#",
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, "Read review \u2192")))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ REVIEW DETAIL ============================
const ReviewDetail = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "03 Review Detail"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "reviews"
  }), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 56,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "t-meta",
    href: "#",
    style: {
      color: "var(--muted)"
    }
  }, "Reviews"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("a", {
    className: "t-meta",
    href: "#",
    style: {
      color: "var(--muted)"
    }
  }, "Protein"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, "Transparent Labs Whey")), /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: 56,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-accent"
  }, "Protein \xB7 Whey isolate"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Grass\u2011fed"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "3rd\u2011party tested")), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 10
    }
  }, "Transparent Labs"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-md",
    style: {
      marginBottom: 20
    }
  }, "100% Grass\u2011Fed", /*#__PURE__*/React.createElement("br", null), "Whey Protein Isolate"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      maxWidth: 580,
      marginBottom: 28
    }
  }, "The cleanest whey isolate we've tested. 28g protein per 32g scoop, no artificial sweeteners, and a current Informed Sport COA. The rare 9+ score."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "FitLab score"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 56,
      color: "var(--accent)",
      marginTop: 4
    }
  }, "9.2")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      alignContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    label: "Formulation",
    value: 0.95,
    valueLabel: "9.5"
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Dose adequacy",
    value: 0.96,
    valueLabel: "9.6"
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Purity / COA",
    value: 0.92,
    valueLabel: "9.2"
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Value",
    value: 0.78,
    valueLabel: "7.8",
    color: "#B45309"
  })))), /*#__PURE__*/React.createElement("aside", {
    className: "card",
    style: {
      padding: 24,
      height: "fit-content",
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    shape: "tub",
    color: "#0F766E",
    w: "100%",
    h: 260
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 20,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-h3 nums"
  }, "$59"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "30 servings \xB7 $1.97/serv")), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)",
      marginBottom: 16
    }
  }, "Direct from Transparent Labs \xB7 Free US shipping"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "12px 16px"
    }
  }, "Visit retailer ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 6,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 12,
    stroke: "var(--muted)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "FitLab earns no commission")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      marginTop: 20,
      paddingTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [["Flavor", "Mocha"], ["Servings", "30"], ["Protein/serv", "28 g"], ["Sweetener", "Stevia + monk fruit"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm"
  }, v)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--accent)"
    }
  }, "What we like"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "16px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["28g protein per 32g — 87.5% protein by mass, top‑tier", "Informed Sport tested, with a public COA on every lot", "No artificial sweeteners, dyes, or proprietary blends", "0.45g leucine per scoop — clears MPS threshold easily"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      color: "var(--ink-2)"
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#B45309"
    }
  }, "What we don't"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "16px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["Premium pricing — 35% above category median", "Mocha flavor reads sweet despite stevia‑only profile", "Solubility loses to Optimum Nutrition in cold milk"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#B45309",
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      color: "var(--ink-2)"
    }
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 260px",
      gap: 56,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      marginBottom: 16
    }
  }, "The verdict"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      marginBottom: 16
    }
  }, "Whey is a commodity ingredient \u2014 almost any reputable brand will get you to 20+ grams of complete protein per scoop. Where products differentiate is on what they don't add, and what they're willing to disclose."), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      marginBottom: 32
    }
  }, "Transparent Labs hits both. The label discloses every milligram of every ingredient (a methodology requirement at FitLab \u2014 see ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--accent)"
    }
  }, "Rule 02"), "), the macros earn the \"isolate\" claim with a 28/32 = 87.5% protein\u2011by\u2011mass ratio, and a current Informed Sport COA backs lot\u2011specific contaminant testing."), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      marginBottom: 16
    }
  }, "How it scores against the methodology"), /*#__PURE__*/React.createElement("div", {
    className: "card-soft",
    style: {
      padding: 28,
      marginBottom: 32
    }
  }, [{
    cat: "Formulation",
    score: 9.5,
    note: "Single‑source whey isolate, no fillers, leucine clears 0.4g threshold."
  }, {
    cat: "Dose adequacy",
    score: 9.6,
    note: "28g per scoop — exceeds the 25g per‑meal MPS dose used in 2023 ISSN guidance."
  }, {
    cat: "Purity / COA",
    score: 9.2,
    note: "Current Informed Sport (lot 2026‑014). Heavy metals < ND for Pb/Cd/As/Hg."
  }, {
    cat: "Value",
    score: 7.8,
    note: "$1.97/serving sits in the top quartile by price; offsets via subscription discount."
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "180px 60px 1fr",
      gap: 20,
      padding: "14px 0",
      borderBottom: i === 3 ? "none" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      fontWeight: 500
    }
  }, r.cat), /*#__PURE__*/React.createElement("span", {
    className: "t-h4 nums",
    style: {
      color: "var(--accent)"
    }
  }, r.score), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, r.note)))), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      marginBottom: 16
    }
  }, "The science, briefly"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      marginBottom: 16
    }
  }, "Whey's edge over plant proteins isn't its amino acid profile per se \u2014 most blended plant proteins close that gap \u2014 it's leucine concentration and digestion kinetics. ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--accent)"
    }
  }, "Witard et al. 2014"), " established that ~0.4g leucine triggers maximal MPS in young men, a finding reproduced across at least four further trials."), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 28,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "t-h4"
  }, "Cited research ", /*#__PURE__*/React.createElement("span", {
    className: "t-meta nums",
    style: {
      color: "var(--muted)",
      marginLeft: 8
    }
  }, "14 studies")), /*#__PURE__*/React.createElement("a", {
    className: "btn-link",
    href: "#"
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(StudyRow, {
    year: "2024",
    type: "Meta\u2011analysis",
    title: "Whey vs. plant protein for hypertrophy",
    journal: "J. Int. Soc. Sports Nutr.",
    n: "1,209"
  }), /*#__PURE__*/React.createElement(StudyRow, {
    year: "2023",
    type: "RCT",
    title: "Leucine threshold for maximal MPS in young men",
    journal: "Am. J. Clin. Nutr.",
    n: "48"
  }), /*#__PURE__*/React.createElement(StudyRow, {
    year: "2022",
    type: "RCT",
    title: "Whey isolate purity & inflammatory markers",
    journal: "Nutrients",
    n: "92"
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 88,
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 14
    }
  }, "On this page"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderLeft: "2px solid var(--line)",
      paddingLeft: 14
    }
  }, ["The verdict", "How it scores", "The science, briefly", "Cited research", "How it compares"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    className: "t-body-sm",
    href: "#",
    style: {
      color: i === 0 ? "var(--accent)" : "var(--muted)",
      fontWeight: i === 0 ? 600 : 400
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 18,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Author"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      fontWeight: 600,
      marginTop: 10
    }
  }, "Dr. Anya Krishnan"), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)",
      marginTop: 4
    }
  }, "RD, PhD Nutritional Sci."), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      marginTop: 10,
      color: "var(--ink-2)"
    }
  }, "Reviewed Apr 12, 2026 \xB7 18 min read"))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ BEST-OF DETAIL ============================
const BestOfDetail = () => {
  const products = [{
    rank: 1,
    brand: "Transparent Labs",
    name: "100% Grass‑Fed Whey",
    score: 9.2,
    ev: "strong",
    color: "#0F766E",
    note: "Best overall — purity, dose, transparency",
    per: "28 g / scoop",
    price: "$59",
    flag: "Editor's pick"
  }, {
    rank: 2,
    brand: "Naked Nutrition",
    name: "Naked Whey",
    score: 8.7,
    ev: "strong",
    color: "#374151",
    note: "Best minimalist — single‑ingredient",
    per: "25 g / scoop",
    price: "$45"
  }, {
    rank: 3,
    brand: "Optimum Nutrition",
    name: "Gold Standard Whey",
    score: 8.4,
    ev: "strong",
    color: "#B45309",
    note: "Best value — widely available, well dosed",
    per: "24 g / scoop",
    price: "$32",
    flag: "Best value"
  }, {
    rank: 4,
    brand: "Momentous",
    name: "Essential Whey",
    score: 8.1,
    ev: "strong",
    color: "#1D4ED8",
    note: "Best for athletes — NSF Sport tested",
    per: "20 g / scoop",
    price: "$55"
  }, {
    rank: 5,
    brand: "Ascent",
    name: "Native Fuel",
    score: 7.9,
    ev: "mod",
    color: "#9D174D",
    note: "Best clean‑label drugstore option",
    per: "25 g / scoop",
    price: "$40"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "04 Best-of Detail"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "best-of"
  }), /*#__PURE__*/React.createElement("header", {
    className: "fl-container",
    style: {
      paddingTop: 64,
      paddingBottom: 48,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -120,
      top: -60,
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 620,
    height: 620
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "t-meta",
    href: "#",
    style: {
      color: "var(--muted)"
    }
  }, "Best Picks"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, "Best Whey Protein 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-accent"
  }, "Protein"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "2026 edition"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Global"), /*#__PURE__*/React.createElement("span", {
    className: "cite-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11
  }), " 14 products tested \xB7 47 studies cited")), /*#__PURE__*/React.createElement("h1", {
    className: "t-display",
    style: {
      fontSize: 72,
      marginBottom: 20
    }
  }, "The best whey proteins of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "2026"), "."), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      maxWidth: 640
    }
  }, "Five proteins that meet our methodology floor \u2014 third\u2011party tested, fully disclosed, and dose\u2011adequate for muscle protein synthesis. Re\u2011scored monthly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 32,
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Tested by"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      marginTop: 4,
      fontWeight: 500
    }
  }, "Dr. Anya Krishnan, RD")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Last updated"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      marginTop: 4,
      fontWeight: 500
    }
  }, "April 14, 2026")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Methodology"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      marginTop: 4,
      fontWeight: 500
    }
  }, "v3.1 \xB7 Protein protocol"))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-soft",
    style: {
      padding: 32,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "At a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24,
      marginTop: 16
    }
  }, [["Best overall", "Transparent Labs"], ["Best value", "Optimum Nutrition"], ["Best for athletes", "Momentous Essential"], ["Best minimalist", "Naked Whey"], ["Best drugstore", "Ascent Native Fuel"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      fontWeight: 600
    }
  }, v)))))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The list",
    title: "The five we recommend"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, products.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.rank,
    className: "card",
    style: {
      padding: 28,
      display: "grid",
      gridTemplateColumns: "60px 200px 1fr 200px",
      gap: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 48,
      color: p.rank === 1 ? "var(--accent)" : "var(--muted-2)"
    }
  }, "#", p.rank)), /*#__PURE__*/React.createElement(ProductImage, {
    shape: "tub",
    color: p.color,
    w: 180,
    h: 180
  }), /*#__PURE__*/React.createElement("div", null, p.flag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "3px 8px",
      background: "var(--ink)",
      color: "var(--bg)",
      borderRadius: 4,
      fontSize: 10,
      fontFamily: "var(--mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, p.flag), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      textTransform: "none",
      letterSpacing: 0,
      marginBottom: 6
    }
  }, p.brand), /*#__PURE__*/React.createElement("h2", {
    className: "t-h3",
    style: {
      marginBottom: 10
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "var(--ink-2)",
      marginBottom: 14
    }
  }, p.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ScorePill, {
    score: p.score
  }), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: p.ev
  }), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, p.per))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-h3 nums"
  }, p.price), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "30 servings")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      justifyContent: "center"
    }
  }, "Read full review ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      justifyContent: "center",
      fontSize: 13
    }
  }, "Visit retailer ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 12
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Side by side",
    title: "Spec comparison"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr repeat(5, 1fr)",
      borderBottom: "1px solid var(--line)"
    }
  }, ["", "Transparent Labs", "Naked", "Optimum", "Momentous", "Ascent"].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "16px 18px",
      background: "var(--surface-2)",
      borderRight: i < 5 ? "1px solid var(--line)" : "none",
      fontWeight: 600,
      fontSize: 13
    }
  }, h))), [["Protein / scoop", "28 g", "25 g", "24 g", "20 g", "25 g"], ["Leucine / scoop", "3.0 g", "2.7 g", "2.5 g", "2.2 g", "2.6 g"], ["Sweetener", "Stevia + monk fruit", "None", "Sucralose", "Stevia", "Stevia"], ["3rd‑party COA", "✓ Informed Sport", "✓ Independent", "✓ NSF", "✓ NSF Sport", "✓ Informed Sport"], ["Price / serving", "$1.97", "$1.50", "$1.07", "$1.83", "$1.33"], ["FitLab score", "9.2", "8.7", "8.4", "8.1", "7.9"]].map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr repeat(5, 1fr)",
      borderBottom: ri === 5 ? "none" : "1px solid var(--line)"
    }
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      padding: "14px 18px",
      borderRight: ci < 5 ? "1px solid var(--line)" : "none",
      fontSize: 13,
      fontFamily: ci === 0 ? "var(--sans)" : "var(--mono)",
      color: ci === 0 ? "var(--ink)" : "var(--ink-2)",
      fontWeight: ci === 0 ? 500 : 400,
      background: ri === 5 ? "var(--accent-soft)" : "transparent"
    }
  }, cell))))))), /*#__PURE__*/React.createElement(Footer, null));
};
window.ReviewsIndex = ReviewsIndex;
window.ReviewDetail = ReviewDetail;
window.BestOfDetail = BestOfDetail;
