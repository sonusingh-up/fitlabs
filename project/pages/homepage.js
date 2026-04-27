/* global React, TopNav, Footer, FLLogo, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill, Stat, SectionHead, ProductImage, Meter, StudyRow */

const Homepage = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "01 Homepage"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fl-container",
    style: {
      paddingTop: 88,
      paddingBottom: 64,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -80,
      top: 20,
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 620,
    height: 620,
    opacity: 0.85
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cite-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11
  }), " Independently funded \xB7 Est. 2019"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Methodology v3.1 \xB7 April 2026")), /*#__PURE__*/React.createElement("h1", {
    className: "t-display",
    style: {
      marginBottom: 24
    }
  }, "Supplements,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "weighed by evidence.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      maxWidth: 560,
      marginBottom: 36
    }
  }, "We read the trials so you don't have to. Every product on FitLab is scored against meta\u2011analyses, RCTs, and dose\u2011response curves \u2014 never marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      padding: "12px 20px"
    }
  }, "Browse 412 reviews ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      padding: "12px 20px"
    }
  }, "How we score")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      paddingTop: 36,
      borderTop: "1px solid var(--line)",
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "412",
    label: "Products reviewed"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "184",
    label: "Ingredients in library"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "2,310",
    label: "Studies cited"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "46",
    label: "Stacks built"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Editor's Picks \xB7 April 2026",
    title: "Top of the lab bench right now",
    sub: "The single best evidence\u2011backed pick in each major category, recalculated monthly.",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn-link",
      href: "#"
    }, "All 412 reviews ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, [{
    cat: "Whey Protein",
    brand: "Transparent Labs",
    name: "100% Grass‑Fed Whey",
    score: 9.2,
    ev: "strong",
    color: "#0F766E",
    shape: "tub",
    price: "$59"
  }, {
    cat: "Pre‑Workout",
    brand: "Legion",
    name: "Pulse",
    score: 8.9,
    ev: "strong",
    color: "#B45309",
    shape: "tub",
    price: "$45"
  }, {
    cat: "Creatine",
    brand: "Thorne",
    name: "Creatine Monohydrate",
    score: 9.6,
    ev: "strong",
    color: "#1D4ED8",
    shape: "pill-bottle",
    price: "$36"
  }, {
    cat: "Sleep",
    brand: "Momentous",
    name: "Magnesium L‑Threonate",
    score: 8.4,
    ev: "mod",
    color: "#6B21A8",
    shape: "bottle",
    price: "$54"
  }].map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "card",
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--muted)"
    }
  }, p.cat), /*#__PURE__*/React.createElement(ScorePill, {
    score: p.score
  })), /*#__PURE__*/React.createElement(ProductImage, {
    shape: p.shape,
    color: p.color,
    w: "100%",
    h: 180
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 6
    }
  }, p.brand), /*#__PURE__*/React.createElement("h3", {
    className: "t-h4",
    style: {
      marginBottom: 10
    }
  }, p.name), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: p.ev
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 12,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums",
    style: {
      color: "var(--ink)"
    }
  }, p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, " \xB7 30 servings")), /*#__PURE__*/React.createElement("a", {
    className: "t-body-sm",
    href: "#",
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, "Read review \u2192")))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Goal\u2011built stacks",
    title: "Protocols, not products",
    sub: "Multi\u2011ingredient programs designed for one specific outcome \u2014 with cost, timing, and evidence baked in.",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn-link",
      href: "#"
    }, "All 46 stacks ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, [{
    goal: "Muscle Gain",
    ings: 5,
    cost: "$2.10",
    color: "#0F766E",
    icon: "dumbbell"
  }, {
    goal: "Sleep Optimization",
    ings: 4,
    cost: "$1.40",
    color: "#1D4ED8",
    icon: "moon"
  }, {
    goal: "Foundational Health",
    ings: 6,
    cost: "$1.90",
    color: "#0E7490",
    icon: "heart"
  }, {
    goal: "Fat Loss Support",
    ings: 5,
    cost: "$2.30",
    color: "#B45309",
    icon: "fire"
  }].map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
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
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(SmallMolecule, {
    size: 120,
    accent: s.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: s.color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      position: "relative"
    }
  }, s.goal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative"
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
  }, "Ingredients"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, s.ings)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "Cost / day"), /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm nums"
  }, s.cost)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)"
    }
  }, "Evidence"), /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: "strong",
    label: "Strong"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      color: "var(--accent)",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-sm",
    style: {
      fontWeight: 500
    }
  }, "Open protocol"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 96,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 40,
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0F766E 0%, #064E48 100%)",
      color: "#fff",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -100,
      bottom: -100,
      opacity: 0.18
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 500,
    height: 500,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2"
    }
  }, "India editions \xB7 2026"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      color: "#fff",
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 480
    }
  }, "Built for the Indian shelf, not adapted from the US."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "rgba(255,255,255,0.85)",
      maxWidth: 460,
      marginBottom: 24
    }
  }, "We test on products you can actually buy on Amazon.in, HealthKart, and 1mg \u2014 with INR pricing, FSSAI checks, and label transparency scores."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative"
    }
  }, ["Best Protein Supplements India 2026", "Best Pre‑Workout Supplements India 2026", "Best Vitamins & Minerals India 2026"].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 0",
      borderBottom: "1px solid rgba(255,255,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body",
    style: {
      color: "#fff"
    }
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16,
    stroke: "#9FD8D2"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our research standard"), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      marginTop: 10,
      marginBottom: 18
    }
  }, "Three rules that disqualify a product."), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [["01", "Underdosed actives", "If a clinically‑studied dose isn't met, the product can't score above 6.0 — full stop."], ["02", "Proprietary blends", "We require disclosed milligrams per ingredient. No fairy‑dusting."], ["03", "Untested by 3rd party", "Reviews require a current Informed Sport, NSF, or independent COA."]].map(([n, t, body]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 32,
      color: "var(--accent)"
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, body))))), /*#__PURE__*/React.createElement("a", {
    className: "btn-link",
    href: "#",
    style: {
      marginTop: 24
    }
  }, "Read full methodology ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "From the research desk",
    title: "What we read this week",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn-link",
      href: "#"
    }, "Research archive ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "card",
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ev-badge ev-strong"
  }, "Meta\u2011analysis"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Creatine")), /*#__PURE__*/React.createElement("h3", {
    className: "t-h2",
    style: {
      fontSize: 32
    }
  }, "Creatine in older adults: a 2026 dose\u2011response meta\u2011analysis of 41 RCTs."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "var(--muted)"
    }
  }, "The 5g/day plateau holds, but loading phases produce no measurable advantage past week 4 in adults 60+."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: "auto",
      paddingTop: 16,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "12 min read"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "\xB7 41 studies cited"))), [{
    type: "RCT",
    tag: "Ashwagandha",
    title: "Ashwagandha and cortisol: replication failure in a 240‑subject RCT.",
    read: "8 min",
    cites: 3
  }, {
    type: "Review",
    tag: "Magnesium",
    title: "Magnesium forms compared: glycinate vs threonate vs citrate for sleep.",
    read: "10 min",
    cites: 18
  }].map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "card",
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ev-badge ev-mod"
  }, a.type), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, a.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3"
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: "auto",
      paddingTop: 16,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, a.read, " read"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "\xB7 ", a.cites, " cited")))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Browse by goal",
    title: "What are you optimizing for?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 12
    }
  }, [["dumbbell", "Muscle Gain", 42], ["fire", "Fat Loss", 31], ["moon", "Sleep", 24], ["brain", "Focus", 19], ["heart", "Recovery", 28], ["leaf", "Longevity", 22]].map(([icon, name, n]) => /*#__PURE__*/React.createElement("a", {
    key: name,
    href: "#",
    className: "card-soft",
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      transition: "all 200ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "t-h4"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, n, " resources"))))), /*#__PURE__*/React.createElement("section", {
    className: "fl-container",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      color: "var(--bg)",
      borderRadius: 20,
      padding: "56px 56px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      top: -40,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 420,
    height: 420,
    accent: "#0F766E"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2"
    }
  }, "The Lab Notebook \xB7 weekly"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      color: "var(--bg)",
      marginTop: 14,
      marginBottom: 12
    }
  }, "One study, one ingredient, one verdict \u2014 every Sunday."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "rgba(251,250,247,0.7)",
      maxWidth: 420
    }
  }, "Joined by 32,400 lifters, clinicians, and nerds. No affiliate links, ever.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: 6,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "you@inbox.com",
    style: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#fff",
      padding: "10px 16px",
      flex: 1,
      fontFamily: "var(--sans)",
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent"
  }, "Subscribe")), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "rgba(255,255,255,0.5)"
    }
  }, "Unsubscribe in one click. We never sell data.")))), /*#__PURE__*/React.createElement(Footer, null));
};
window.Homepage = Homepage;
