/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, SectionHead, ProductImage, ScorePill */

// 26 brand dataset — varied origin, category, certification, score
const BRANDS = [{
  slug: "optimum-nutrition",
  name: "Optimum Nutrition",
  origin: "USA",
  founded: 1986,
  cats: ["Protein", "Pre‑Workout", "Creatine"],
  score: 8.4,
  products: 14,
  certs: ["Informed Sport", "NSF"],
  hue: "#B45309",
  short: "Gold Standard whey is the category benchmark; the rest of the line is uneven."
}, {
  slug: "thorne",
  name: "Thorne",
  origin: "USA",
  founded: 1984,
  cats: ["Multivitamin", "Sleep", "Vitamins"],
  score: 9.1,
  products: 22,
  certs: ["NSF", "TGA"],
  hue: "#0F766E",
  short: "Clinical‑grade formulations, transparent dosing, premium pricing — and it's earned."
}, {
  slug: "muscleblaze",
  name: "MuscleBlaze",
  origin: "India",
  founded: 2012,
  cats: ["Protein", "Mass Gainer", "Pre‑Workout"],
  score: 7.8,
  products: 18,
  certs: ["FSSAI", "Informed Choice"],
  hue: "#B91C1C",
  short: "India's most popular sports nutrition brand. Biozyme line tests cleanly; mass gainers don't."
}, {
  slug: "transparent-labs",
  name: "Transparent Labs",
  origin: "USA",
  founded: 2015,
  cats: ["Pre‑Workout", "Protein", "Fat Burner"],
  score: 9.3,
  products: 12,
  certs: ["Informed Choice"],
  hue: "#1F2937",
  short: "Full‑disclosure labels, clinical doses, no proprietary blends. Our most‑cited brand."
}, {
  slug: "myprotein",
  name: "Myprotein",
  origin: "UK",
  founded: 2004,
  cats: ["Protein", "Vitamins", "Pre‑Workout"],
  score: 7.2,
  products: 26,
  certs: ["Informed Sport"],
  hue: "#1D4ED8",
  short: "Sale prices are unbeatable. Quality varies between SKUs and production lots."
}, {
  slug: "now-foods",
  name: "NOW Foods",
  origin: "USA",
  founded: 1968,
  cats: ["Vitamins", "Sleep", "Multivitamin"],
  score: 8.6,
  products: 24,
  certs: ["NSF", "UL"],
  hue: "#16A34A",
  short: "Family‑owned, lab‑on‑site, decades of clean COAs. The reliable budget option."
}, {
  slug: "garden-of-life",
  name: "Garden of Life",
  origin: "USA",
  founded: 2000,
  cats: ["Multivitamin", "Protein", "Vitamins"],
  score: 8.0,
  products: 20,
  certs: ["NSF", "USDA Organic"],
  hue: "#15803D",
  short: "Whole‑food and organic line; cleanest plant‑protein options on US shelves."
}, {
  slug: "legion",
  name: "Legion",
  origin: "USA",
  founded: 2014,
  cats: ["Protein", "Pre‑Workout", "Creatine"],
  score: 9.0,
  products: 14,
  certs: ["Labdoor"],
  hue: "#7C2D12",
  short: "Clinical doses, transparent labels, founder‑led. Pulse pre‑workout is best in class."
}, {
  slug: "bulk",
  name: "Bulk",
  origin: "UK",
  founded: 2005,
  cats: ["Protein", "Vitamins", "Mass Gainer"],
  score: 7.6,
  products: 22,
  certs: ["Informed Sport"],
  hue: "#000000",
  short: "European answer to Myprotein. Cleaner labels, slightly higher prices."
}, {
  slug: "huel",
  name: "Huel",
  origin: "UK",
  founded: 2015,
  cats: ["Meal Replacement", "Protein"],
  score: 8.2,
  products: 8,
  certs: ["Vegan Society"],
  hue: "#1F2937",
  short: "Complete nutrition meal replacements. Macros are honest; texture is divisive."
}, {
  slug: "ghost",
  name: "Ghost",
  origin: "USA",
  founded: 2016,
  cats: ["Pre‑Workout", "Protein", "Energy"],
  score: 8.1,
  products: 10,
  certs: ["Informed Sport"],
  hue: "#6D28D9",
  short: "Flavor‑first lifestyle line. Doses meet label, formulas are merely competent."
}, {
  slug: "alpha-lion",
  name: "Alpha Lion",
  origin: "USA",
  founded: 2017,
  cats: ["Pre‑Workout", "Fat Burner"],
  score: 7.5,
  products: 9,
  certs: ["—"],
  hue: "#0E7490",
  short: "Bold formulas, occasional underdosing on flagship actives. Fun branding, mixed bag."
}, {
  slug: "jacked-factory",
  name: "Jacked Factory",
  origin: "USA",
  founded: 2014,
  cats: ["Pre‑Workout", "Fat Burner", "Creatine"],
  score: 8.3,
  products: 12,
  certs: ["Made in cGMP facility"],
  hue: "#B91C1C",
  short: "Honest budget alternative to premium pre‑workouts. Doses are tight and disclosed."
}, {
  slug: "kaged",
  name: "Kaged",
  origin: "USA",
  founded: 2016,
  cats: ["Pre‑Workout", "Protein", "Hydration"],
  score: 8.7,
  products: 11,
  certs: ["Informed Sport"],
  hue: "#0F766E",
  short: "Patented forms, clean labels, athlete‑targeted line. Re‑Kaged whey isolate is excellent."
}, {
  slug: "ritual",
  name: "Ritual",
  origin: "USA",
  founded: 2016,
  cats: ["Multivitamin", "Protein"],
  score: 8.5,
  products: 8,
  certs: ["Made Safe"],
  hue: "#9D174D",
  short: "Marketing‑forward but the clinical work is real. Essential multi is well‑formulated."
}, {
  slug: "athletic-greens",
  name: "AG1",
  origin: "USA",
  founded: 2010,
  cats: ["Greens", "Multivitamin"],
  score: 7.4,
  products: 1,
  certs: ["NSF Sport"],
  hue: "#0F766E",
  short: "One product, premium price. Genuinely well‑formulated, but you can build it cheaper."
}, {
  slug: "nutrabay",
  name: "Nutrabay",
  origin: "India",
  founded: 2017,
  cats: ["Protein", "Vitamins"],
  score: 7.9,
  products: 16,
  certs: ["FSSAI", "ISO 22000"],
  hue: "#1D4ED8",
  short: "India's transparency darling. Pure series tests reliably; flavor work is blunt."
}, {
  slug: "asitis",
  name: "AS-IT-IS",
  origin: "India",
  founded: 2014,
  cats: ["Protein", "Vitamins"],
  score: 7.7,
  products: 14,
  certs: ["FSSAI"],
  hue: "#7C2D12",
  short: "Unflavored, unflashy, single‑ingredient products. India's no‑nonsense option."
}, {
  slug: "wellbeing-nutrition",
  name: "Wellbeing Nutrition",
  origin: "India",
  founded: 2019,
  cats: ["Vitamins", "Multivitamin", "Sleep"],
  score: 7.6,
  products: 19,
  certs: ["FSSAI", "FDA"],
  hue: "#9D174D",
  short: "Plant‑forward, melts/gummies/effervescents. Trendy formats, decent formulations."
}, {
  slug: "oziva",
  name: "OZiva",
  origin: "India",
  founded: 2016,
  cats: ["Vitamins", "Protein", "Multivitamin"],
  score: 7.3,
  products: 21,
  certs: ["FSSAI"],
  hue: "#15803D",
  short: "Plant‑based wellness positioning. Doses are conservative, marketing is louder than science."
}, {
  slug: "boldfit",
  name: "Boldfit",
  origin: "India",
  founded: 2018,
  cats: ["Pre‑Workout", "Protein", "Vitamins"],
  score: 7.0,
  products: 17,
  certs: ["FSSAI"],
  hue: "#B91C1C",
  short: "Aggressive pricing, label accuracy is improving. Watch for proprietary blends."
}, {
  slug: "purayati",
  name: "Purayati",
  origin: "India",
  founded: 2019,
  cats: ["Vitamins", "Multivitamin"],
  score: 7.8,
  products: 12,
  certs: ["FSSAI", "WHO‑GMP"],
  hue: "#0E7490",
  short: "Apollo Pharmacy in‑house line. Pharmacy‑grade vitamins at fair pricing."
}, {
  slug: "carbamide-forte",
  name: "Carbamide Forte",
  origin: "India",
  founded: 2017,
  cats: ["Vitamins", "Sleep", "Multivitamin"],
  score: 7.5,
  products: 23,
  certs: ["FSSAI", "ISO"],
  hue: "#4338CA",
  short: "D2C vitamin specialist. Magnesium and ashwagandha SKUs test particularly well."
}, {
  slug: "naked-nutrition",
  name: "Naked Nutrition",
  origin: "USA",
  founded: 2014,
  cats: ["Protein", "Mass Gainer"],
  score: 8.8,
  products: 9,
  certs: ["Informed Choice"],
  hue: "#0F172A",
  short: "Single‑ingredient, no additives, no flavoring. Whey isolate is the cleanest on the market."
}, {
  slug: "klean-athlete",
  name: "Klean Athlete",
  origin: "USA",
  founded: 2010,
  cats: ["Multivitamin", "Protein", "Vitamins"],
  score: 8.9,
  products: 13,
  certs: ["NSF Sport"],
  hue: "#1D4ED8",
  short: "Douglas Labs sub‑brand for athletes. Every SKU is NSF Certified for Sport."
}, {
  slug: "momentous",
  name: "Momentous",
  origin: "USA",
  founded: 2016,
  cats: ["Protein", "Sleep", "Creatine"],
  score: 9.2,
  products: 15,
  certs: ["NSF Sport", "Informed Sport"],
  hue: "#0F766E",
  short: "Stanford‑linked formulations, clinical doses, third‑party tested twice. Premium done right."
}];
const ALL_CATS = [...new Set(BRANDS.flatMap(b => b.cats))].sort();
const ALL_ORIGINS = [...new Set(BRANDS.map(b => b.origin))];
const ALL_CERTS = [...new Set(BRANDS.flatMap(b => b.certs).filter(c => c !== "—"))].sort();

// ============================ BRAND LOGOMARK PLACEHOLDER ============================
const BrandMark = ({
  brand,
  size = 88,
  square = false
}) => {
  const initials = brand.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: square ? 12 : "50%",
      background: brand.hue,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--serif)",
      fontSize: size * 0.36,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
      flexShrink: 0
    }
  }, initials);
};

// ============================ BRANDS INDEX ============================
const BrandsIndex = () => {
  const [origin, setOrigin] = React.useState("All");
  const [cat, setCat] = React.useState("All");
  const [cert, setCert] = React.useState("All");
  const [sort, setSort] = React.useState("score");
  const [q, setQ] = React.useState("");
  const filtered = BRANDS.filter(b => origin === "All" || b.origin === origin).filter(b => cat === "All" || b.cats.includes(cat)).filter(b => cert === "All" || b.certs.includes(cert)).filter(b => !q || b.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) => sort === "score" ? b.score - a.score : sort === "az" ? a.name.localeCompare(b.name) : b.products - a.products);
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "20 Brands index"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "brands"
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
      right: -60,
      top: -40,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 520,
    height: 520
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Brand directory"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 820
    }
  }, "Every brand we've reviewed. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, BRANDS.length, " on the list.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 640
    }
  }, "Each brand is independently scored on formulation transparency, dose adequacy, third\u2011party testing, and value across their full catalog. Use the filters to narrow by region, category, or certification."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 32,
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 36,
      color: "var(--accent)"
    }
  }, BRANDS.length), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 4
    }
  }, "Brands tracked")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 36,
      color: "var(--accent)"
    }
  }, BRANDS.reduce((s, b) => s + b.products, 0)), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 4
    }
  }, "Products reviewed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 36,
      color: "var(--accent)"
    }
  }, BRANDS.filter(b => b.origin === "India").length), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 4
    }
  }, "India shelf brands")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-display-md",
    style: {
      fontSize: 36,
      color: "var(--accent)"
    }
  }, BRANDS.filter(b => b.score >= 9.0).length), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginTop: 4
    }
  }, "Score 9.0+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      background: "var(--surface-2)",
      position: "sticky",
      top: 68,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fl-container",
    style: {
      padding: "16px 0",
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 999,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    stroke: "var(--muted)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search brands\u2026",
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--sans)",
      fontSize: 13,
      flex: 1,
      color: "var(--ink)"
    }
  })), /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Origin",
    value: origin,
    setValue: setOrigin,
    options: ["All", ...ALL_ORIGINS]
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Category",
    value: cat,
    setValue: setCat,
    options: ["All", ...ALL_CATS]
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Cert",
    value: cert,
    setValue: setCert,
    options: ["All", ...ALL_CERTS]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      alignSelf: "center",
      marginRight: 8
    }
  }, "Sort:"), [["score", "Top score"], ["az", "A–Z"], ["count", "Most reviewed"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setSort(k),
    className: `chip ${sort === k ? "chip-ink" : ""}`,
    style: {
      cursor: "pointer",
      fontSize: 12,
      padding: "6px 12px"
    }
  }, l))))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 16
    }
  }, "Showing ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, filtered.length), " of ", BRANDS.length, " brands"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, filtered.map(b => /*#__PURE__*/React.createElement(BrandCard, {
    key: b.slug,
    brand: b
  })))), /*#__PURE__*/React.createElement(Footer, null));
};
const FilterGroup = ({
  label,
  value,
  setValue,
  options
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)",
    marginRight: 4
  }
}, label, ":"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 4,
    flexWrap: "wrap"
  }
}, options.slice(0, 6).map(o => /*#__PURE__*/React.createElement("button", {
  key: o,
  onClick: () => setValue(o),
  className: `chip ${value === o ? "chip-ink" : ""}`,
  style: {
    cursor: "pointer",
    fontSize: 11,
    padding: "4px 10px"
  }
}, o)), options.length > 6 && /*#__PURE__*/React.createElement("span", {
  className: "chip",
  style: {
    fontSize: 11,
    padding: "4px 10px",
    color: "var(--muted)"
  }
}, "+", options.length - 6)));
const BrandCard = ({
  brand
}) => /*#__PURE__*/React.createElement("a", {
  href: `/brands/${brand.slug}`,
  className: "card",
  style: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement(BrandMark, {
  brand: brand,
  size: 56,
  square: true
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("h3", {
  className: "t-h4",
  style: {
    fontSize: 18
  }
}, brand.name), /*#__PURE__*/React.createElement(ScorePill, {
  score: brand.score
})), /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)",
    marginTop: 4
  }
}, brand.origin, " \xB7 est. ", brand.founded))), /*#__PURE__*/React.createElement("p", {
  className: "t-body-sm",
  style: {
    color: "var(--ink-2)",
    lineHeight: 1.5
  }
}, brand.short), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 4,
    flexWrap: "wrap"
  }
}, brand.cats.slice(0, 3).map(c => /*#__PURE__*/React.createElement("span", {
  key: c,
  className: "chip",
  style: {
    fontSize: 10,
    padding: "3px 8px"
  }
}, c))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    marginTop: "auto",
    paddingTop: 14,
    borderTop: "1px solid var(--line)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-meta nums",
  style: {
    color: "var(--muted)"
  }
}, brand.products, " products"), /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--muted)"
  }
}, brand.certs[0]), /*#__PURE__*/React.createElement("span", {
  className: "t-meta",
  style: {
    color: "var(--accent)",
    marginLeft: "auto"
  }
}, "View brand \u2192")));

// ============================ BRAND DETAIL ============================
const BrandDetail = ({
  slug = "transparent-labs"
}) => {
  const brand = BRANDS.find(b => b.slug === slug) || BRANDS[0];
  const products = [{
    name: `${brand.name} Whey Protein`,
    cat: "Protein",
    score: brand.score - 0.2,
    evidence: "strong",
    price: "$54",
    shape: "tub"
  }, {
    name: `${brand.name} Pre-Workout`,
    cat: "Pre‑Workout",
    score: brand.score,
    evidence: "mod",
    price: "$44",
    shape: "tub"
  }, {
    name: `${brand.name} Creatine`,
    cat: "Creatine",
    score: brand.score - 0.5,
    evidence: "strong",
    price: "$28",
    shape: "tub"
  }, {
    name: `${brand.name} Multivitamin`,
    cat: "Multivitamin",
    score: brand.score - 0.4,
    evidence: "mod",
    price: "$38",
    shape: "bottle"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": `21 Brand · ${brand.name}`
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "brands"
  }), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      paddingTop: 32
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
  }, "Brands"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: "var(--muted-2)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--ink)"
    }
  }, brand.name)), /*#__PURE__*/React.createElement("header", {
    className: "card",
    style: {
      padding: 0,
      marginBottom: 40,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      overflow: "hidden",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    brand: brand,
    size: 88,
    square: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "t-display-md",
    style: {
      fontSize: 48,
      marginBottom: 4
    }
  }, brand.name), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      color: "var(--muted)"
    }
  }, brand.origin, " \xB7 est. ", brand.founded, " \xB7 ", brand.products, " products reviewed"))), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)"
    }
  }, brand.short), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, brand.certs.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "cite-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11
  }), " ", c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: brand.hue,
      color: "#fff",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.18
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 420,
    height: 420,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "rgba(255,255,255,0.7)",
      position: "relative"
    }
  }, "FitLab brand score"), /*#__PURE__*/React.createElement("div", {
    className: "t-display",
    style: {
      fontSize: 120,
      lineHeight: 1,
      color: "#fff",
      position: "relative",
      marginTop: 8
    }
  }, brand.score.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "rgba(255,255,255,0.85)",
      position: "relative",
      marginTop: 8
    }
  }, "Catalog\u2011weighted average across ", brand.products, " reviewed SKUs"))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Brand performance",
    title: "How they score on each pillar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 8,
      marginBottom: 56
    }
  }, [["Formulation transparency", brand.score - 0.1, "Label clarity, ingredient disclosure, no proprietary blends"], ["Dose adequacy", brand.score + 0.1, "Active ingredients hit clinical doses across catalog"], ["Third‑party testing", brand.score - 0.3, `Certifications: ${brand.certs.join(", ")}`], ["Value", brand.score - 0.6, "Cost per effective dose, normalized by category"]].map(([t, s, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: 20,
      borderBottom: i === 3 ? "none" : "1px solid var(--line)",
      display: "grid",
      gridTemplateColumns: "240px 1fr 80px",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      fontWeight: 500
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      color: "var(--muted)",
      marginTop: 2
    }
  }, b)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--line)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${s / 10 * 100}%`,
      background: brand.hue
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-h4 nums",
    style: {
      textAlign: "right"
    }
  }, s.toFixed(1))))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Catalog",
    title: `Reviewed products from ${brand.name}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
      marginBottom: 56
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "card",
    style: {
      padding: 20,
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-2)",
      borderRadius: 8,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    shape: p.shape,
    color: brand.hue,
    w: 96,
    h: 96
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      fontSize: 10,
      padding: "3px 8px"
    }
  }, p.cat), /*#__PURE__*/React.createElement(ScorePill, {
    score: p.score
  })), /*#__PURE__*/React.createElement("h4", {
    className: "t-h4",
    style: {
      fontSize: 17,
      marginBottom: 8
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(EvidenceBadge, {
    level: p.evidence
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-meta nums",
    style: {
      color: "var(--muted)"
    }
  }, p.price)))))), /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 32,
      background: "var(--ink)",
      color: "var(--bg)",
      border: "none",
      marginBottom: 32,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -80,
      bottom: -80,
      opacity: 0.2
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 360,
    height: 360,
    accent: "#0F766E"
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#9FD8D2",
      position: "relative"
    }
  }, "Editor's note \xB7 Apr 2026"), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3",
    style: {
      color: "var(--bg)",
      marginTop: 12,
      marginBottom: 12,
      maxWidth: 760,
      position: "relative"
    }
  }, "Why we keep recommending ", brand.name, " despite the price."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "rgba(251,250,247,0.8)",
      maxWidth: 720,
      position: "relative"
    }
  }, "FitLab has no commercial relationship with ", brand.name, ". We've tested ", brand.products, " of their products independently across ", new Date().getFullYear() - brand.founded, "+ years on the market \u2014 and the catalog average has stayed in the top quartile every year. That consistency is rare. The price reflects clinical doses and third\u2011party testing, not marketing margin."))), /*#__PURE__*/React.createElement(Footer, null));
};
window.BrandsIndex = BrandsIndex;
window.BrandDetail = BrandDetail;
window.BRANDS = BRANDS;
