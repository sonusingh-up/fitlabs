/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill, SectionHead, ProductImage, Meter, StudyRow */

// ============================ INGREDIENTS LIBRARY ============================
const IngredientsLibrary = () => {
  const [goal, setGoal] = React.useState("All");
  const goals = ["All", "Muscle Gain", "Fat Loss", "Sleep", "Focus", "Recovery", "Longevity"];
  const ings = [{
    name: "Creatine monohydrate",
    cat: "Performance",
    ev: "strong",
    goals: ["Muscle Gain", "Recovery"],
    dose: "3–5 g/day",
    studies: 412,
    accent: "#0F766E"
  }, {
    name: "Caffeine",
    cat: "Stimulant",
    ev: "strong",
    goals: ["Focus", "Fat Loss"],
    dose: "3–6 mg/kg",
    studies: 308,
    accent: "#B45309"
  }, {
    name: "Whey protein",
    cat: "Macro",
    ev: "strong",
    goals: ["Muscle Gain"],
    dose: "20–40 g",
    studies: 287,
    accent: "#1D4ED8"
  }, {
    name: "Magnesium glycinate",
    cat: "Mineral",
    ev: "strong",
    goals: ["Sleep", "Recovery"],
    dose: "200–400 mg",
    studies: 144,
    accent: "#6B21A8"
  }, {
    name: "L‑theanine",
    cat: "Nootropic",
    ev: "mod",
    goals: ["Focus", "Sleep"],
    dose: "100–200 mg",
    studies: 91,
    accent: "#0E7490"
  }, {
    name: "Beta‑alanine",
    cat: "Performance",
    ev: "strong",
    goals: ["Muscle Gain"],
    dose: "3.2–6.4 g",
    studies: 128,
    accent: "#0F766E"
  }, {
    name: "Ashwagandha (KSM‑66)",
    cat: "Adaptogen",
    ev: "mod",
    goals: ["Recovery", "Sleep"],
    dose: "300–600 mg",
    studies: 64,
    accent: "#9D174D"
  }, {
    name: "Vitamin D3",
    cat: "Vitamin",
    ev: "strong",
    goals: ["Longevity"],
    dose: "1000–4000 IU",
    studies: 219,
    accent: "#B45309"
  }, {
    name: "Omega‑3 (EPA/DHA)",
    cat: "Fatty acid",
    ev: "strong",
    goals: ["Longevity", "Recovery"],
    dose: "2–3 g",
    studies: 198,
    accent: "#1D4ED8"
  }, {
    name: "Citrulline malate",
    cat: "Performance",
    ev: "mod",
    goals: ["Muscle Gain"],
    dose: "6–8 g",
    studies: 78,
    accent: "#0F766E"
  }, {
    name: "Rhodiola rosea",
    cat: "Adaptogen",
    ev: "weak",
    goals: ["Focus"],
    dose: "200–400 mg",
    studies: 41,
    accent: "#9D174D"
  }, {
    name: "Berberine",
    cat: "Metabolic",
    ev: "mod",
    goals: ["Fat Loss", "Longevity"],
    dose: "500 mg 3x/day",
    studies: 57,
    accent: "#84CC16"
  }];
  const filtered = ings.filter(i => goal === "All" || i.goals.includes(goal));
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "05 Ingredients Library"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "ingredients"
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
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 500,
    height: 500
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Ingredient library"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 720
    }
  }, "184 ingredients, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "graded by evidence.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 600
    }
  }, "Mechanism, dose range, and study count for every ingredient we've encountered. Filter by goal to find what's actually worth taking.")), /*#__PURE__*/React.createElement("div", {
    className: "fl-container",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 16,
      paddingBottom: 16,
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, goals.map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    onClick: () => setGoal(g),
    className: `chip ${goal === g ? "chip-ink" : ""}`,
    style: {
      cursor: "pointer",
      padding: "6px 14px",
      fontSize: 13
    }
  }, g))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      padding: "6px 12px",
      fontSize: 13
    }
  }, "Evidence: All ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      padding: "6px 12px",
      fontSize: 13
    }
  }, "Sort: Studies ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  })))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, filtered.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.name,
    href: "#",
    className: "card",
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -20,
      top: -20,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(SmallMolecule, {
    size: 100,
    accent: i.accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 4
    }
  }, i.cat), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      fontSize: 22
    }
  }, i.name)), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: i.ev
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      paddingTop: 12,
      borderTop: "1px solid var(--line)"
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
  }, "Dose range"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, i.dose)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "Studies"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, i.studies))), /*#__PURE__*/React.createElement("div", {
    className: "tag-row",
    style: {
      position: "relative"
    }
  }, i.goals.map(g => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "chip",
    style: {
      fontSize: 11,
      padding: "2px 8px"
    }
  }, g))))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ INGREDIENT DETAIL ============================
const IngredientDetail = () => /*#__PURE__*/React.createElement("div", {
  className: "fl-root paper",
  "data-screen-label": "06 Ingredient Detail"
}, /*#__PURE__*/React.createElement(TopNav, {
  active: "ingredients"
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
}, "Ingredients"), /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 12,
  stroke: "var(--muted-2)"
}), /*#__PURE__*/React.createElement("a", {
  className: "t-meta",
  href: "#",
  style: {
    color: "var(--muted)"
  }
}, "Performance"), /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 12,
  stroke: "var(--muted-2)"
}), /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--ink)"
  }
}, "Creatine monohydrate")), /*#__PURE__*/React.createElement("header", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: 56,
    marginBottom: 56,
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginBottom: 18
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "chip chip-accent"
}, "Performance"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, "Ergogenic aid"), /*#__PURE__*/React.createElement("span", {
  className: "cite-pill"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 11
}), " 412 studies")), /*#__PURE__*/React.createElement("h1", {
  className: "t-display-md",
  style: {
    marginBottom: 20
  }
}, "Creatine", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--mono)",
    fontSize: 28,
    color: "var(--muted)",
    letterSpacing: 0
  }
}, "C\u2084H\u2089N\u2083O\u2082 \xB7 monohydrate")), /*#__PURE__*/React.createElement("p", {
  className: "t-body-lg",
  style: {
    color: "var(--ink-2)",
    maxWidth: 580
  }
}, "The most studied performance supplement in human history, and arguably the only one with unambiguous, replicated evidence of effect on strength, lean mass, and high\u2011intensity output.")), /*#__PURE__*/React.createElement("aside", {
  className: "card-soft",
  style: {
    padding: 28
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)",
    marginBottom: 14
  }
}, "Quick facts"), [["Evidence", /*#__PURE__*/React.createElement(EvidenceBadge, {
  level: "strong"
})], ["Dose", "3–5 g/day"], ["Loading", "Optional · 20g × 5 days"], ["Best with", "Carbs or post‑workout"], ["Cost / day", "$0.10"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid var(--line)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-body-sm",
  style: {
    color: "var(--muted)"
  }
}, k), /*#__PURE__*/React.createElement("span", {
  className: "t-body-sm nums",
  style: {
    fontWeight: 500
  }
}, v))))), /*#__PURE__*/React.createElement("section", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
    marginBottom: 56
  }
}, [{
  title: "Strength",
  v: 0.92,
  e: "strong",
  note: "1RM increases of 5–15% across 41 RCTs."
}, {
  title: "Lean mass",
  v: 0.85,
  e: "strong",
  note: "0.7–1.4 kg additional lean mass over 8–12 weeks."
}, {
  title: "Cognition",
  v: 0.55,
  e: "mod",
  note: "Modest benefit in sleep‑deprived states."
}, {
  title: "Endurance",
  v: 0.30,
  e: "weak",
  note: "No clear effect at typical aerobic outputs."
}].slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "card",
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("h3", {
  className: "t-h4"
}, r.title), /*#__PURE__*/React.createElement(EvidenceBadge, {
  level: r.e
})), /*#__PURE__*/React.createElement(Meter, {
  value: r.v,
  valueLabel: `${Math.round(r.v * 100)}%`
}), /*#__PURE__*/React.createElement("p", {
  className: "t-body-sm",
  style: {
    color: "var(--muted)",
    marginTop: 12
  }
}, r.note)))), /*#__PURE__*/React.createElement("section", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 280px",
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
}, "Mechanism"), /*#__PURE__*/React.createElement("p", {
  className: "t-body-lg",
  style: {
    color: "var(--ink-2)",
    marginBottom: 16
  }
}, "Creatine is stored in skeletal muscle as phosphocreatine and donates a phosphate to ADP to rapidly regenerate ATP during high\u2011intensity contractions. Supplementation increases muscle creatine stores by 10\u201340% above baseline, raising the ceiling on repeated near\u2011maximal efforts."), /*#__PURE__*/React.createElement("p", {
  className: "t-body-lg",
  style: {
    color: "var(--ink-2)",
    marginBottom: 32
  }
}, "Effects are largest in those starting from low baseline stores \u2014 vegetarians, women, and older adults typically respond more strongly than meat\u2011eating young men."), /*#__PURE__*/React.createElement("h2", {
  className: "t-h2",
  style: {
    marginBottom: 16
  }
}, "How to take it"), /*#__PURE__*/React.createElement("div", {
  className: "card-soft",
  style: {
    padding: 24,
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement("ol", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, [["Daily dose", "3–5 g per day. Body weight matters more than people think — round up if you're over 90 kg."], ["Loading?", "Optional. Loading reaches saturation in 5 days vs. 3–4 weeks. Either path lands at the same plateau."], ["Timing", "Doesn't matter much. Post‑workout with carbs is marginally better, but consistency dwarfs timing."], ["Form", "Monohydrate. Other forms (HCl, ethyl ester) charge premiums for no measurable benefit."]].map(([t, b]) => /*#__PURE__*/React.createElement("li", {
  key: t,
  style: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: 16,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-body",
  style: {
    fontWeight: 600
  }
}, t), /*#__PURE__*/React.createElement("span", {
  className: "t-body",
  style: {
    color: "var(--ink-2)"
  }
}, b))))), /*#__PURE__*/React.createElement("h2", {
  className: "t-h2",
  style: {
    marginBottom: 16
  }
}, "Cited research"), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement(StudyRow, {
  year: "2024",
  type: "Meta\u2011analysis",
  title: "Creatine in older adults: 41\u2011RCT dose\u2011response",
  journal: "Sports Med.",
  n: "3,420"
}), /*#__PURE__*/React.createElement(StudyRow, {
  year: "2023",
  type: "Meta\u2011analysis",
  title: "Cognitive effects of creatine supplementation",
  journal: "Neuroscience & Behav.",
  n: "1,180"
}), /*#__PURE__*/React.createElement(StudyRow, {
  year: "2022",
  type: "RCT",
  title: "Loading vs. maintenance dosing in trained lifters",
  journal: "J. Strength Cond.",
  n: "64"
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
}, "Found in stacks"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, ["Muscle Gain", "Foundational Health", "Recovery"].map(s => /*#__PURE__*/React.createElement("a", {
  key: s,
  href: "#",
  className: "card",
  style: {
    padding: 14,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-body-sm",
  style: {
    fontWeight: 500
  }
}, s), /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14,
  stroke: "var(--muted)"
}))))))), /*#__PURE__*/React.createElement(Footer, null));

// ============================ STACKS INDEX ============================
const StacksIndex = () => {
  const stacks = [{
    name: "Muscle Gain",
    ings: 5,
    cost: "$2.10",
    color: "#0F766E",
    icon: "dumbbell",
    desc: "Whey, creatine, beta‑alanine, vitamin D, omega‑3.",
    ev: "strong"
  }, {
    name: "Sleep Optimization",
    ings: 4,
    cost: "$1.40",
    color: "#1D4ED8",
    icon: "moon",
    desc: "Magnesium glycinate, glycine, L‑theanine, apigenin.",
    ev: "mod"
  }, {
    name: "Foundational Health",
    ings: 6,
    cost: "$1.90",
    color: "#0E7490",
    icon: "heart",
    desc: "Multi, omega‑3, vitamin D, K2, magnesium, creatine.",
    ev: "strong"
  }, {
    name: "Fat Loss Support",
    ings: 5,
    cost: "$2.30",
    color: "#B45309",
    icon: "fire",
    desc: "Caffeine, green tea, fiber, protein, l‑carnitine.",
    ev: "mod"
  }, {
    name: "Focus & Productivity",
    ings: 4,
    cost: "$1.80",
    color: "#4338CA",
    icon: "brain",
    desc: "Caffeine + L‑theanine, creatine, tyrosine, B‑complex.",
    ev: "mod"
  }, {
    name: "Recovery (post‑training)",
    ings: 5,
    cost: "$2.00",
    color: "#9D174D",
    icon: "leaf",
    desc: "Whey, creatine, tart cherry, magnesium, omega‑3.",
    ev: "strong"
  }, {
    name: "Endurance",
    ings: 4,
    cost: "$1.60",
    color: "#84CC16",
    icon: "bolt",
    desc: "Beta‑alanine, sodium bicarbonate, caffeine, beetroot.",
    ev: "strong"
  }, {
    name: "Longevity",
    ings: 6,
    cost: "$3.20",
    color: "#374151",
    icon: "globe",
    desc: "Omega‑3, D3+K2, magnesium, glycine, creatine, NMN.",
    ev: "weak"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "07 Stacks Index"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "stacks"
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
      right: -80,
      top: -40,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 500,
    height: 500
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Goal\u2011built stacks"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 720
    }
  }, "Protocols, not products. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "46 of them.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 600
    }
  }, "Multi\u2011ingredient programs designed for one specific outcome. Each stack lists timing, dosing, cost, and the studies behind it.")), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 20
    }
  }, stacks.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: "#",
    className: "card",
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      top: -40,
      opacity: 0.45
    }
  }, /*#__PURE__*/React.createElement(SmallMolecule, {
    size: 180,
    accent: s.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: s.color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: s.ev
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      fontSize: 32,
      marginBottom: 10
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "var(--muted)",
      marginBottom: 20
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      paddingTop: 16,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement("div", {
    className: "t-h4 nums",
    style: {
      marginTop: 4
    }
  }, s.ings)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Cost / day"), /*#__PURE__*/React.createElement("div", {
    className: "t-h4 nums",
    style: {
      marginTop: 4
    }
  }, s.cost)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 4,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      fontWeight: 500
    }
  }, "Open protocol"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ STACK DETAIL ============================
const StackDetail = () => {
  const ings = [{
    name: "Whey protein isolate",
    dose: "30 g",
    timing: "Post‑workout",
    ev: "strong",
    cost: "$0.65"
  }, {
    name: "Creatine monohydrate",
    dose: "5 g",
    timing: "Anytime, daily",
    ev: "strong",
    cost: "$0.10"
  }, {
    name: "Beta‑alanine",
    dose: "3.2 g",
    timing: "Split 2× w/ meal",
    ev: "strong",
    cost: "$0.25"
  }, {
    name: "Vitamin D3 + K2",
    dose: "2000 IU + 100 mcg",
    timing: "Morning, w/ fat",
    ev: "strong",
    cost: "$0.20"
  }, {
    name: "Omega‑3 (EPA/DHA)",
    dose: "2 g",
    timing: "With largest meal",
    ev: "strong",
    cost: "$0.90"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "08 Stack Detail"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "stacks"
  }), /*#__PURE__*/React.createElement("header", {
    className: "fl-container",
    style: {
      paddingTop: 64,
      paddingBottom: 56,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -100,
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
      marginBottom: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "t-meta",
    href: "#",
    style: {
      color: "var(--muted)"
    }
  }, "Stacks"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, "Muscle Gain")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      marginBottom: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 18,
      background: "#0F766E",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dumbbell",
    size: 32
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Muscle Gain protocol"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 6,
      fontSize: 56
    }
  }, "The Hypertrophy Stack"))), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      maxWidth: 640,
      position: "relative"
    }
  }, "Five ingredients. $2.10/day. Designed around one goal: maximize the rate of lean mass gain in trained lifters consuming adequate calories and protein."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      marginTop: 40,
      paddingTop: 32,
      borderTop: "1px solid var(--line)",
      maxWidth: 800,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 40,
      marginTop: 4
    }
  }, "5")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Cost / day"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 40,
      marginTop: 4
    }
  }, "$2.10")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Studies cited"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 40,
      marginTop: 4
    }
  }, "134")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Evidence"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: "strong"
  }))))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The protocol",
    title: "What to take, when, and why"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1.5fr 1fr 0.7fr",
      padding: "16px 20px",
      background: "var(--surface-2)",
      borderBottom: "1px solid var(--line)"
    }
  }, ["Ingredient", "Dose", "Timing", "Evidence", "Cost"].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, h))), ings.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: i.name,
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1.5fr 1fr 0.7fr",
      padding: "20px",
      borderBottom: idx === ings.length - 1 ? "none" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SmallMolecule, {
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      fontWeight: 500
    }
  }, i.name)), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      color: "var(--ink-2)"
    }
  }, i.dose), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--ink-2)"
    }
  }, i.timing), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: i.ev
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      color: "var(--ink-2)"
    }
  }, i.cost)))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Daily timeline",
    title: "When to take what"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-soft",
    style: {
      padding: 32,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      left: 0,
      right: 0,
      height: 2,
      background: "var(--line-2)"
    }
  }), [{
    x: 8,
    label: "06:00",
    title: "D3+K2",
    color: "#B45309"
  }, {
    x: 32,
    label: "12:00",
    title: "Omega‑3",
    color: "#1D4ED8"
  }, {
    x: 50,
    label: "16:00",
    title: "β‑alanine",
    color: "#0F766E"
  }, {
    x: 72,
    label: "18:00",
    title: "Whey + creatine",
    color: "#0F766E"
  }, {
    x: 92,
    label: "21:00",
    title: "β‑alanine #2",
    color: "#0F766E"
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: `${p.x}%`,
      top: 0,
      transform: "translateX(-50%)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 30
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: p.color,
      border: "3px solid var(--bg)",
      boxShadow: "0 0 0 1px var(--line-2)",
      marginInline: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      marginTop: 12,
      fontWeight: 500
    }
  }, p.title))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why these five"), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      marginTop: 12,
      marginBottom: 16
    }
  }, "What we left out, on purpose."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["BCAAs", "Redundant if protein intake is adequate. Not in stack."], ["HMB", "Effect size shrinks to noise in trained lifters."], ["Tribulus", "No replicable effect on testosterone or strength."], ["Glutamine", "Conditionally essential, but ineffective oral supplement."]].map(([k, v]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      fontWeight: 600
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 32,
      background: "var(--ink)",
      color: "var(--bg)",
      border: "none",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -60,
      bottom: -60,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 300,
    height: 300,
    accent: "#0F766E"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2",
      position: "relative"
    }
  }, "Honest caveat"), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      color: "var(--bg)",
      marginTop: 12,
      marginBottom: 16,
      position: "relative"
    }
  }, "Stacks don't beat protein, sleep, and progressive overload."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "rgba(251,250,247,0.7)",
      position: "relative"
    }
  }, "Combined effect of every ingredient here, on a well\u2011trained lifter eating enough, is roughly equivalent to a 5\u20138% bump in rate of gain. Useful \u2014 but the lifting plan is the multiplier.")))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ COMPARE DETAIL ============================
const CompareDetail = () => {
  const cols = [{
    name: "Transparent Labs",
    brand: "Whey isolate",
    color: "#0F766E",
    score: 9.2,
    price: "$59",
    protein: "28 g",
    leucine: "3.0 g",
    sweetener: "Stevia + monk fruit",
    coa: "Informed Sport",
    fit: "Premium · transparency"
  }, {
    name: "Optimum Nutrition",
    brand: "Gold Standard",
    color: "#B45309",
    score: 8.4,
    price: "$32",
    protein: "24 g",
    leucine: "2.5 g",
    sweetener: "Sucralose",
    coa: "NSF",
    fit: "Value · widely available"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "09 Compare Detail"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "compare"
  }), /*#__PURE__*/React.createElement("header", {
    className: "fl-container",
    style: {
      paddingTop: 56,
      paddingBottom: 32,
      position: "relative"
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
  }, "Compare"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, "Transparent Labs vs Optimum Nutrition")), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Head to head \xB7 whey protein"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 20,
      maxWidth: 800
    }
  }, "Transparent Labs ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-2)",
      fontStyle: "italic"
    }
  }, "vs"), " Optimum Nutrition"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 640
    }
  }, "Premium isolate against the category benchmark. The verdict isn't what most reviewers say.")), /*#__PURE__*/React.createElement("main", {
    className: "fl-container"
  }, /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 80px 1fr"
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 40,
      background: i === 0 ? "var(--accent-soft)" : "transparent",
      borderRight: i === 0 ? "none" : undefined,
      position: "relative"
    }
  }, i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      padding: "3px 8px",
      background: "var(--accent)",
      color: "#fff",
      borderRadius: 4,
      fontSize: 10,
      fontFamily: "var(--mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Winner overall"), /*#__PURE__*/React.createElement(ProductImage, {
    shape: "tub",
    color: c.color,
    w: 180,
    h: 180
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 20
    }
  }, c.name), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      fontSize: 32,
      marginTop: 6
    }
  }, c.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 18,
      paddingTop: 18,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Score"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 40,
      color: "var(--accent)",
      marginTop: 4
    }
  }, c.score)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 40,
      marginTop: 4
    }
  }, c.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--ink)",
      color: "var(--bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--serif)",
      fontStyle: "italic",
      fontSize: 20
    }
  }, "vs"))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Spec by spec",
    title: "The full breakdown"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: "hidden",
      marginBottom: 56
    }
  }, [["Protein per scoop", cols[0].protein, cols[1].protein, 0], ["Leucine", cols[0].leucine, cols[1].leucine, 0], ["Sweetener", cols[0].sweetener, cols[1].sweetener, 0], ["3rd‑party COA", cols[0].coa, cols[1].coa, null], ["Best for", cols[0].fit, cols[1].fit, null], ["Price / serving", "$1.97", "$1.07", 1]].map(([label, a, b, win], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: "20px 28px",
      borderBottom: i === 5 ? "none" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: win === 0 ? "var(--accent-soft)" : "transparent",
      padding: "8px 12px",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, win === 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      color: "var(--ink-2)",
      fontFamily: "var(--mono)"
    }
  }, a)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: win === 1 ? "var(--accent-soft)" : "transparent",
      padding: "8px 12px",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, win === 1 && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      color: "var(--ink-2)",
      fontFamily: "var(--mono)"
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    className: "card-soft",
    style: {
      padding: 40,
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 32,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our verdict"), /*#__PURE__*/React.createElement("div", {
    className: "t-display-md",
    style: {
      fontSize: 56,
      marginTop: 12,
      fontStyle: "italic"
    }
  }, "It depends.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Transparent Labs wins on formulation."), " 28g protein in 32g of powder, no artificial sweeteners, and a transparent ingredient panel. If those three things matter to you, the price is worth it."), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Optimum wins on price."), " At $1.07 a scoop with a 24g leucine\u2011adequate dose, it's the right call for anyone hitting protein targets through volume. Both clear our methodology floor.")))), /*#__PURE__*/React.createElement(Footer, null));
};
window.IngredientsLibrary = IngredientsLibrary;
window.IngredientDetail = IngredientDetail;
window.StacksIndex = StacksIndex;
window.StackDetail = StackDetail;
window.CompareDetail = CompareDetail;
