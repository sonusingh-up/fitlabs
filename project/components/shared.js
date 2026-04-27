function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// FitLab — Shared components: TopNav, Footer, Logo, Molecule decoration, EvidenceBadge, ScorePill, Cards, etc.

const FLLogo = ({
  size = 28,
  color = "currentColor"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 32 32",
  fill: "none"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "16",
  r: "15",
  stroke: color,
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "16",
  r: "9.5",
  stroke: color,
  strokeWidth: "1.25",
  strokeDasharray: "2 2.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "6.5",
  r: "2.4",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6.5",
  cy: "16",
  r: "2.4",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "25.5",
  cy: "16",
  r: "2.4",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "25.5",
  r: "2.4",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "16",
  r: "1.6",
  fill: color
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--serif)",
    fontSize: 22,
    letterSpacing: "-0.02em",
    fontWeight: 500,
    color: "var(--ink)"
  }
}, "FitLab", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--accent)"
  }
}, ".")));

// A decorative molecule/atom illustration. Used as hero accent.
const Molecule = ({
  width = 520,
  height = 520,
  opacity = 1,
  accent = "var(--accent)"
}) => /*#__PURE__*/React.createElement("svg", {
  width: width,
  height: height,
  viewBox: "0 0 520 520",
  fill: "none",
  style: {
    opacity
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
  id: "mol-glow",
  cx: "50%",
  cy: "50%",
  r: "50%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: accent,
  stopOpacity: "0.18"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: accent,
  stopOpacity: "0"
}))), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "240",
  fill: "url(#mol-glow)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "200",
  stroke: "var(--line-2)",
  strokeWidth: "1",
  strokeDasharray: "2 4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "140",
  stroke: "var(--line-2)",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "80",
  stroke: "var(--line-2)",
  strokeWidth: "1",
  strokeDasharray: "3 5"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "var(--ink)",
  strokeOpacity: "0.7",
  strokeWidth: "1.25"
}, /*#__PURE__*/React.createElement("line", {
  x1: "260",
  y1: "60",
  x2: "260",
  y2: "180"
}), /*#__PURE__*/React.createElement("line", {
  x1: "60",
  y1: "260",
  x2: "180",
  y2: "260"
}), /*#__PURE__*/React.createElement("line", {
  x1: "460",
  y1: "260",
  x2: "340",
  y2: "260"
}), /*#__PURE__*/React.createElement("line", {
  x1: "260",
  y1: "460",
  x2: "260",
  y2: "340"
}), /*#__PURE__*/React.createElement("line", {
  x1: "120",
  y1: "120",
  x2: "200",
  y2: "200"
}), /*#__PURE__*/React.createElement("line", {
  x1: "400",
  y1: "120",
  x2: "320",
  y2: "200"
}), /*#__PURE__*/React.createElement("line", {
  x1: "120",
  y1: "400",
  x2: "200",
  y2: "320"
}), /*#__PURE__*/React.createElement("line", {
  x1: "400",
  y1: "400",
  x2: "320",
  y2: "320"
}), /*#__PURE__*/React.createElement("line", {
  x1: "180",
  y1: "260",
  x2: "260",
  y2: "260"
}), /*#__PURE__*/React.createElement("line", {
  x1: "260",
  y1: "260",
  x2: "340",
  y2: "260"
}), /*#__PURE__*/React.createElement("line", {
  x1: "260",
  y1: "180",
  x2: "260",
  y2: "260"
}), /*#__PURE__*/React.createElement("line", {
  x1: "260",
  y1: "260",
  x2: "260",
  y2: "340"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "60",
  r: "14",
  fill: "var(--bg)",
  stroke: accent,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "60",
  cy: "260",
  r: "14",
  fill: "var(--bg)",
  stroke: accent,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "460",
  cy: "260",
  r: "14",
  fill: "var(--bg)",
  stroke: accent,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "460",
  r: "14",
  fill: "var(--bg)",
  stroke: accent,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "120",
  cy: "120",
  r: "10",
  fill: accent
}), /*#__PURE__*/React.createElement("circle", {
  cx: "400",
  cy: "120",
  r: "10",
  fill: "var(--ink)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "120",
  cy: "400",
  r: "10",
  fill: "var(--ink)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "400",
  cy: "400",
  r: "10",
  fill: accent
}), /*#__PURE__*/React.createElement("circle", {
  cx: "180",
  cy: "260",
  r: "9",
  fill: "var(--bg)",
  stroke: "var(--ink)",
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "340",
  cy: "260",
  r: "9",
  fill: "var(--bg)",
  stroke: "var(--ink)",
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "180",
  r: "9",
  fill: "var(--bg)",
  stroke: "var(--ink)",
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "340",
  r: "9",
  fill: "var(--bg)",
  stroke: "var(--ink)",
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "22",
  fill: "var(--ink)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "22",
  fill: "none",
  stroke: accent,
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "260",
  cy: "260",
  r: "6",
  fill: accent
})));

// Smaller molecule for cards/inline use
const SmallMolecule = ({
  size = 80,
  accent = "var(--accent)"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 80 80",
  fill: "none"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "40",
  r: "30",
  stroke: "var(--line-2)",
  strokeWidth: "1",
  strokeDasharray: "2 3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "40",
  y1: "10",
  x2: "40",
  y2: "70",
  stroke: "var(--ink)",
  strokeOpacity: "0.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "40",
  x2: "70",
  y2: "40",
  stroke: "var(--ink)",
  strokeOpacity: "0.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "10",
  r: "5",
  fill: accent
}), /*#__PURE__*/React.createElement("circle", {
  cx: "70",
  cy: "40",
  r: "5",
  fill: "var(--ink)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "70",
  r: "5",
  fill: "var(--bg)",
  stroke: accent,
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "40",
  r: "5",
  fill: "var(--bg)",
  stroke: "var(--ink)",
  strokeWidth: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "40",
  r: "6",
  fill: "var(--ink)"
}));
const Icon = ({
  name,
  size = 16,
  stroke = "currentColor",
  strokeWidth = 1.5
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "search":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-3.5-3.5"
      }));
    case "arrow-right":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 5l7 7-7 7"
      }));
    case "arrow-up-right":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M7 17 17 7M9 7h8v8"
      }));
    case "chevron-down":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m6 9 6 6 6-6"
      }));
    case "chevron-right":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m9 18 6-6-6-6"
      }));
    case "star":
      return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
        fill: "currentColor",
        stroke: "none"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"
      }));
    case "check":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M20 6 9 17l-5-5"
      }));
    case "x":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M18 6 6 18M6 6l12 12"
      }));
    case "filter":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 5h18M6 12h12M10 19h4"
      }));
    case "info":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 8h.01M11 12h1v4h1"
      }));
    case "book":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 5v14"
      }));
    case "flask":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M9 3h6M10 3v6L4.5 18A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9V3"
      }));
    case "leaf":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M21 3c-7 0-13 5-13 12 0 2 1 4 2 5 1-9 7-13 11-15z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 21c2-7 8-12 14-15"
      }));
    case "globe":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      }));
    case "moon":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"
      }));
    case "bolt":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M13 2 4 14h7l-1 8 9-12h-7z"
      }));
    case "dumbbell":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M6 4v16M3 8v8M18 4v16M21 8v8M6 12h12"
      }));
    case "brain":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M9 6a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 12a3 3 0 0 0 2 2.8V16a3 3 0 0 0 3 3 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2 1 1 0 0 0 0 2zM15 6a3 3 0 0 1 3 3v.2A3 3 0 0 1 20 12a3 3 0 0 1-2 2.8V16a3 3 0 0 1-3 3 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2 1 1 0 0 1 0 2z"
      }));
    case "heart":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M19.5 5.5a5 5 0 0 0-7.5-.5 5 5 0 0 0-7.5.5 5 5 0 0 0 0 7l7.5 7.5 7.5-7.5a5 5 0 0 0 0-7z"
      }));
    case "fire":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3s4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 1-3s-3 2-3 6a6 6 0 0 0 12 0c0-5-6-12-6-12z"
      }));
    case "circle":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }));
    case "menu":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 7h16M4 12h16M4 17h16"
      }));
    case "external":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M14 4h6v6M10 14 20 4M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"
      }));
    case "scale":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v18M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z"
      }));
    case "target":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.5"
      }));
    default:
      return null;
  }
};
const TopNav = ({
  active = "home"
}) => {
  const [open, setOpen] = React.useState(false);
  const items = [["home", "Home", "/"], ["reviews", "Reviews", "/reviews"], ["best-of", "Best Picks", "/best"], ["compare", "Compare", "/compare"], ["ingredients", "Ingredients", "/ingredients"], ["stacks", "Stacks", "/stacks"], ["brands", "Brands", "/brands"], ["research", "Research", "/research"], ["by-goal", "By Goal", "/goals"], ["india", "India", "/india"]];
  return /*#__PURE__*/React.createElement("nav", {
    className: "fl-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fl-container fl-nav-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "fl-nav-logo"
  }, /*#__PURE__*/React.createElement(FLLogo, null)), /*#__PURE__*/React.createElement("ul", {
    className: "fl-nav-links"
  }, items.map(([k, label, href]) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    className: `nav-link${active === k ? " active" : ""}`
  }, label, k === "india" && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 9,
      padding: "2px 5px",
      borderRadius: 999,
      background: "var(--accent-soft)",
      color: "var(--accent-ink)",
      fontFamily: "var(--mono)",
      letterSpacing: "0.06em"
    }
  }, "2026"))))), /*#__PURE__*/React.createElement("div", {
    className: "fl-nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost fl-nav-search",
    style: {
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontSize: 13
    },
    className: "fl-nav-search-label"
  }, "Search ingredients, products\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 24,
      fontSize: 11,
      color: "var(--muted-2)",
      fontFamily: "var(--mono)"
    },
    className: "fl-nav-search-kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary fl-nav-cta"
  }, "Newsletter"), /*#__PURE__*/React.createElement("button", {
    className: "fl-nav-burger",
    "aria-label": "Open menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 22,
    stroke: "var(--ink)"
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "fl-nav-mobile"
  }, /*#__PURE__*/React.createElement("ul", null, items.map(([k, label, href]) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    className: `fl-nav-mobile-link${active === k ? " active" : ""}`,
    onClick: () => setOpen(false)
  }, label, k === "india" && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 10,
      padding: "2px 6px",
      borderRadius: 999,
      background: "var(--accent-soft)",
      color: "var(--accent-ink)",
      fontFamily: "var(--mono)"
    }
  }, "2026"))))), /*#__PURE__*/React.createElement("div", {
    className: "fl-nav-mobile-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Search")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Newsletter"))));
};
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    borderTop: "1px solid var(--line)",
    marginTop: 96,
    background: "var(--surface-2)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fl-container",
  style: {
    paddingTop: 64,
    paddingBottom: 40
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fl-footer-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FLLogo, null), /*#__PURE__*/React.createElement("p", {
  className: "t-body-sm",
  style: {
    color: "var(--muted)",
    marginTop: 16,
    maxWidth: 280
  }
}, "Independent, evidence-based supplement reviews. Every recommendation cites the underlying research and discloses funding."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginTop: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "cite-pill"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 11
}), " No paid placements"))), [["Reviews", [["Protein", "/reviews"], ["Pre-Workout", "/reviews"], ["Creatine", "/reviews"], ["Fat Burners", "/reviews"], ["Sleep", "/reviews"], ["Multivitamins", "/reviews"]]], ["Library", [["Ingredients", "/ingredients"], ["Stacks", "/stacks"], ["Compare", "/compare"], ["Research", "/research"]]], ["Brands", [["All brands", "/brands"], ["Optimum Nutrition", "/brands/optimum-nutrition"], ["Thorne", "/brands/thorne"], ["MuscleBlaze", "/brands/muscleblaze"], ["Transparent Labs", "/brands/transparent-labs"]]], ["India", [["Best Protein 2026", "/india"], ["Best Pre‑Workout 2026", "/india"], ["Best Vitamins 2026", "/india"]]]].map(([title, links]) => /*#__PURE__*/React.createElement("div", {
  key: title
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    color: "var(--muted)",
    marginBottom: 14
  }
}, title), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, links.map(([l, href]) => /*#__PURE__*/React.createElement("li", {
  key: l
}, /*#__PURE__*/React.createElement("a", {
  className: "t-body-sm",
  href: href,
  style: {
    color: "var(--ink-2)"
  }
}, l))))))), /*#__PURE__*/React.createElement("div", {
  className: "rule",
  style: {
    marginTop: 56,
    marginBottom: 32
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "fl-grid-2",
  style: {
    gap: 24,
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 20,
    border: "1px solid var(--line)",
    borderRadius: 10,
    background: "var(--bg)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "info",
  size: 14,
  stroke: "var(--accent)"
}), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow",
  style: {
    color: "var(--accent)",
    margin: 0
  }
}, "Not medical advice")), /*#__PURE__*/React.createElement("p", {
  className: "t-body-sm",
  style: {
    color: "var(--ink-2)",
    margin: 0,
    lineHeight: 1.55
  }
}, "Content on FitLab is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any supplement \u2014 especially if you are pregnant, nursing, taking medication, or managing a medical condition.")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 20,
    border: "1px solid var(--line)",
    borderRadius: 10,
    background: "var(--bg)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 14,
  stroke: "var(--accent)"
}), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow",
  style: {
    color: "var(--accent)",
    margin: 0
  }
}, "Affiliate disclosure")), /*#__PURE__*/React.createElement("p", {
  className: "t-body-sm",
  style: {
    color: "var(--ink-2)",
    margin: 0,
    lineHeight: 1.55
  }
}, "FitLab is reader\u2011funded. We earn ", /*#__PURE__*/React.createElement("strong", null, "no"), " affiliate commission, sponsorship, or product\u2011placement income from any brand reviewed on the site. Some article links go to retailer pages for reference \u2014 they are not affiliate links. Our funding comes from paid newsletter subscribers and the FitLab Editorial Foundation grant."))), /*#__PURE__*/React.createElement("div", {
  className: "rule",
  style: {
    marginBottom: 24
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "fl-footer-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, "\xA9 2026 FitLab Research, Inc.  \xB7  Editorial standards  \xB7  Funding disclosure  \xB7  Methodology v3.1"), /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, "Made with citations."))));

// Evidence badge
const EvidenceBadge = ({
  level = "strong",
  label
}) => {
  const map = {
    strong: {
      cls: "ev-strong",
      text: "Strong evidence"
    },
    mod: {
      cls: "ev-mod",
      text: "Moderate"
    },
    weak: {
      cls: "ev-weak",
      text: "Limited"
    }
  };
  const m = map[level];
  return /*#__PURE__*/React.createElement("span", {
    className: `ev-badge ${m.cls}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), label || m.text);
};
const ScorePill = ({
  score = 8.7
}) => /*#__PURE__*/React.createElement("span", {
  className: "score-pill"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "star",
  size: 11
}), /*#__PURE__*/React.createElement("span", null, score.toFixed(1)));

// Metric stat (used in homepage hero)
const Stat = ({
  n,
  unit,
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-display-md",
  style: {
    fontSize: 56
  }
}, n), unit && /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, unit)), /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, label));

// Linkable section title row
const SectionHead = ({
  eyebrow,
  title,
  sub,
  action
}) => /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "left"
}, eyebrow && /*#__PURE__*/React.createElement("span", {
  className: "eyebrow"
}, eyebrow), /*#__PURE__*/React.createElement("h2", {
  className: "t-h2"
}, title), sub && /*#__PURE__*/React.createElement("p", {
  className: "t-body",
  style: {
    color: "var(--muted)",
    maxWidth: 560,
    marginTop: 4
  }
}, sub)), action && /*#__PURE__*/React.createElement("div", null, action));

// Product image placeholder (an abstract supplement bottle silhouette)
const ProductImage = ({
  shape = "tub",
  color = "var(--accent)",
  w = 220,
  h = 220,
  label
}) => {
  const inner = (() => {
    if (shape === "tub") return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "50",
      y: "62",
      width: "120",
      height: "124",
      rx: "6",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "46",
      y: "56",
      width: "128",
      height: "14",
      rx: "3",
      fill: "var(--ink-2)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "62",
      y: "84",
      width: "96",
      height: "64",
      rx: "2",
      fill: "var(--bg)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "62",
      y: "84",
      width: "96",
      height: "22",
      fill: color
    }));
    if (shape === "bottle") return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "40",
      width: "60",
      height: "20",
      rx: "2",
      fill: "var(--ink-2)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 60h80v126a6 6 0 0 1-6 6H76a6 6 0 0 1-6-6z",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "92",
      width: "60",
      height: "64",
      fill: "var(--bg)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "92",
      width: "60",
      height: "14",
      fill: color
    }));
    if (shape === "pill-bottle") return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "74",
      y: "44",
      width: "72",
      height: "20",
      rx: "3",
      fill: "var(--ink-2)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "68",
      y: "64",
      width: "84",
      height: "124",
      rx: "8",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "92",
      width: "60",
      height: "80",
      fill: "var(--bg)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "110",
      y: "140",
      textAnchor: "middle",
      fontFamily: "var(--mono)",
      fontSize: "11",
      fill: color
    }, "RX"));
    if (shape === "sachet") return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M52 66h116l-8 120H60z",
      fill: color
    }), /*#__PURE__*/React.createElement("rect", {
      x: "56",
      y: "62",
      width: "108",
      height: "10",
      fill: "var(--ink)"
    }));
    return null;
  })();
  return /*#__PURE__*/React.createElement("div", {
    className: "product-tile",
    style: {
      width: w,
      height: h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "80%",
    height: "80%",
    viewBox: "0 0 220 220"
  }, inner), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    },
    className: "t-meta"
  }, label));
};

// Generic line bar (for evidence-strength meters etc)
const Meter = ({
  value = 0.7,
  color = "var(--accent)",
  label,
  valueLabel
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, label && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-body-sm",
  style: {
    color: "var(--ink-2)"
  }
}, label), valueLabel && /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, valueLabel)), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 6,
    borderRadius: 999,
    background: "var(--bg-2)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: `${Math.min(100, value * 100)}%`,
    height: "100%",
    background: color,
    borderRadius: 999
  }
})));

// Citation/study row
const StudyRow = ({
  year,
  type,
  title,
  journal,
  n,
  link = true
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "60px 110px 1fr 80px 24px",
    gap: 16,
    padding: "14px 0",
    borderBottom: "1px solid var(--line)",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-meta nums",
  style: {
    color: "var(--muted)"
  }
}, year), /*#__PURE__*/React.createElement("span", {
  className: "ev-badge ev-strong",
  style: {
    width: "fit-content"
  }
}, type), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "t-body-sm",
  style: {
    color: "var(--ink)",
    fontWeight: 500
  }
}, title), /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)",
    marginTop: 2,
    textTransform: "none",
    letterSpacing: 0
  }
}, journal)), /*#__PURE__*/React.createElement("span", {
  className: "t-meta nums",
  style: {
    color: "var(--muted)"
  }
}, "n=", n), link && /*#__PURE__*/React.createElement(Icon, {
  name: "external",
  size: 14,
  stroke: "var(--muted)"
}));

// Make available globally
Object.assign(window, {
  FLLogo,
  Molecule,
  SmallMolecule,
  Icon,
  TopNav,
  Footer,
  EvidenceBadge,
  ScorePill,
  Stat,
  SectionHead,
  ProductImage,
  Meter,
  StudyRow
});
