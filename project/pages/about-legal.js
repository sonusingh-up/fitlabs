/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, SectionHead */

// ============================ ABOUT ============================
const About = () => /*#__PURE__*/React.createElement("div", {
  className: "fl-root paper",
  "data-screen-label": "16 About"
}, /*#__PURE__*/React.createElement(TopNav, {
  active: "research"
}), /*#__PURE__*/React.createElement("header", {
  className: "fl-container",
  style: {
    paddingTop: 80,
    paddingBottom: 64,
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
})), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow"
}, "About FitLab"), /*#__PURE__*/React.createElement("h1", {
  className: "t-display",
  style: {
    fontSize: 80,
    marginTop: 16,
    marginBottom: 28,
    maxWidth: 920
  }
}, "We started FitLab because ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--accent)"
  }
}, "the supplement industry lies on its labels.")), /*#__PURE__*/React.createElement("p", {
  className: "t-body-lg",
  style: {
    color: "var(--ink-2)",
    maxWidth: 720,
    fontSize: 20
  }
}, "Underdosed actives, proprietary blends, paid placements, and \"best of\" lists written by affiliate marketers. We thought the genre needed something different. So we built it.")), /*#__PURE__*/React.createElement("main", {
  className: "fl-container"
}, /*#__PURE__*/React.createElement("section", {
  className: "card-soft",
  style: {
    padding: 48,
    marginBottom: 80,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32
  }
}, [["2019", "Founded"], ["412", "Products independently reviewed"], ["32k", "Newsletter subscribers"], ["$0", "Affiliate commissions earned"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  className: "t-display-md",
  style: {
    fontSize: 56,
    color: "var(--accent)"
  }
}, n), /*#__PURE__*/React.createElement("div", {
  className: "t-meta",
  style: {
    color: "var(--muted)",
    marginTop: 8
  }
}, l)))), /*#__PURE__*/React.createElement("section", {
  style: {
    marginBottom: 80
  }
}, /*#__PURE__*/React.createElement(SectionHead, {
  eyebrow: "What we believe",
  title: "Three rules we operate by."
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  }
}, [{
  n: "01",
  t: "Evidence first, opinion last",
  b: "If the trials don't support a claim, neither do we — even when the brand is a friend, even when readers want a hopeful answer."
}, {
  n: "02",
  t: "No paid placements, ever",
  b: "We have refused six‑figure sponsorship offers. The independence of the verdict is the product. There is no version where we trade it."
}, {
  n: "03",
  t: "Show the work",
  b: "Every score, every claim, every dose recommendation links back to the studies that justify it. Read along, disagree, write us back."
}].map(v => /*#__PURE__*/React.createElement("div", {
  key: v.n,
  className: "card",
  style: {
    padding: 32
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "t-display-md",
  style: {
    fontSize: 48,
    color: "var(--accent)",
    display: "block",
    marginBottom: 16
  }
}, v.n), /*#__PURE__*/React.createElement("h3", {
  className: "t-h3",
  style: {
    marginBottom: 12
  }
}, v.t), /*#__PURE__*/React.createElement("p", {
  className: "t-body",
  style: {
    color: "var(--muted)"
  }
}, v.b))))), /*#__PURE__*/React.createElement("section", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: 80,
    marginBottom: 80
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "eyebrow"
}, "The story"), /*#__PURE__*/React.createElement("h2", {
  className: "t-h2",
  style: {
    marginTop: 12
  }
}, "From a Google Doc to 32,000 readers.")), /*#__PURE__*/React.createElement("div", {
  className: "t-body-lg",
  style: {
    color: "var(--ink-2)",
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("p", null, "FitLab started in 2019 as a shared Google Doc \u2014 a personal cheat sheet of which supplements actually had evidence, written by a registered dietitian for her own clients in Bengaluru and New Jersey. It got passed around. Then it got published. Then it got readers."), /*#__PURE__*/React.createElement("p", null, "The current team is six writers, one pharmacist, and a panel of medical reviewers spread across the US, UK, and India. We publish in English, test on global and Indian shelves, and refuse all sponsorship money."), /*#__PURE__*/React.createElement("p", null, "If you've found us useful, the best support is a ", /*#__PURE__*/React.createElement("a", {
  style: {
    color: "var(--accent)"
  }
}, "paid newsletter subscription"), " \u2014 that's what keeps the lights on without compromising the verdicts."))), /*#__PURE__*/React.createElement("section", {
  className: "card",
  style: {
    padding: 48,
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
    right: -100,
    bottom: -100,
    opacity: 0.25
  }
}, /*#__PURE__*/React.createElement(Molecule, {
  width: 460,
  height: 460,
  accent: "#0F766E"
})), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow",
  style: {
    color: "#9FD8D2"
  }
}, "Funding disclosure"), /*#__PURE__*/React.createElement("h3", {
  className: "t-h3",
  style: {
    color: "var(--bg)",
    marginTop: 12,
    marginBottom: 16,
    maxWidth: 760,
    position: "relative"
  }
}, "78% paid newsletter subscriptions. 22% FitLab Editorial Foundation grant. 0% brand money."), /*#__PURE__*/React.createElement("p", {
  className: "t-body",
  style: {
    color: "rgba(251,250,247,0.7)",
    maxWidth: 680,
    position: "relative"
  }
}, "Our 2025 financials are public \u2014 published every March in the change log. If we ever take brand money, we'll do it loudly, separate it from the editorial line, and tell you where every dollar went."))), /*#__PURE__*/React.createElement(Footer, null));

// ============================ AUTHORS ============================
const Authors = () => {
  const team = [{
    initials: "AK",
    name: "Dr. Anya Krishnan, RD",
    role: "Editor‑in‑Chief & Lead Nutrition Editor",
    creds: "PhD Nutritional Sci. (Tufts)",
    bio: "Twenty years of clinical sports dietetics. Anya sets the editorial line and reviews every product score before publication.",
    color: "#0F766E"
  }, {
    initials: "MR",
    name: "Marcus Rivera, MS, CSCS",
    role: "Senior Performance Editor",
    creds: "MS Exercise Phys. (Texas Tech)",
    bio: "Former NSCA‑CPT, now writes the strength and hypertrophy desk. Specializes in protein and creatine evidence.",
    color: "#1D4ED8"
  }, {
    initials: "PS",
    name: "Priya Shah, MSc",
    role: "India Editor",
    creds: "MSc Public Health (LSHTM)",
    bio: "Leads the FitLab India editions. Tests products against FSSAI standards and Indian e‑commerce supply chains.",
    color: "#B45309"
  }, {
    initials: "JK",
    name: "Dr. Jonas Kimura, PhD",
    role: "Research Lead",
    creds: "PhD Pharmacology (Kyoto)",
    bio: "Reads the literature so we don't miss anything. Owns the meta‑analysis breakdowns and retraction watch.",
    color: "#4338CA"
  }, {
    initials: "LT",
    name: "Lena Torres, RDN",
    role: "Reviews Editor",
    creds: "RDN, ISSN‑CISSN",
    bio: "Hands‑on with 200+ products tested per year. Owns the formulation and dose adequacy scoring.",
    color: "#9D174D"
  }, {
    initials: "DM",
    name: "Dr. Dan Mensah, PharmD",
    role: "Senior Pharmacology Reviewer",
    creds: "PharmD (UNC), BCCCP",
    bio: "Reviews supplement‑drug interaction copy across the site. Ex‑hospital ICU pharmacist.",
    color: "#0E7490"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": "17 Authors"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "research"
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
      right: -40,
      top: -40,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 460,
    height: 460
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Authors & medical reviewers"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 760
    }
  }, "The FitLab Science Team. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "Every byline, every credential, every conflict.")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 600
    }
  }, "Nine humans write everything you read here. Six on staff, three medical reviewers. We publish credentials and disclose funding for each.")), /*#__PURE__*/React.createElement("main", {
    className: "fl-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Medical reviewer \xB7 highlighted",
    title: "Medically reviewed by"
  }), /*#__PURE__*/React.createElement("article", {
    className: "card",
    style: {
      padding: 0,
      marginBottom: 64,
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      overflow: "hidden",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, #0F766E 0%, #064E48 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 320,
    height: 320,
    accent: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 144,
      height: 144,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.95)",
      color: "var(--accent-deep)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--serif)",
      fontSize: 56,
      fontWeight: 500,
      position: "relative",
      border: "4px solid rgba(255,255,255,0.4)"
    }
  }, "PS")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
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
    className: "chip chip-accent"
  }, "Medical reviewer"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Pharmacology"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "India")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      fontSize: 36,
      marginBottom: 6
    }
  }, "Pankaj Singh, Pharm.B"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      color: "var(--muted)"
    }
  }, "Pharmacist \xB7 Clinical reviewer for FitLab India")), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)",
      maxWidth: 640
    }
  }, "Pankaj reviews FitLab's India coverage for clinical accuracy, drug\u2011supplement interactions, and FSSAI compliance. Every India edition guide and any article touching on prescription\u2011adjacent ingredients carries his sign\u2011off before publication."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      paddingTop: 20,
      borderTop: "1px solid var(--line)",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "https://www.linkedin.com/in/pankaj-singh-77b93a368/",
    target: "_blank",
    rel: "noopener",
    style: {
      padding: "8px 14px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.74c0-2.55-1.36-3.74-3.18-3.74-1.47 0-2.13.81-2.5 1.38v-1.18H10v8.67h2.67v-4.84c0-1.27.94-1.88 1.83-1.88.85 0 1.84.62 1.84 1.91v4.81h2z"
  })), "LinkedIn profile ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      alignSelf: "center"
    }
  }, "Reviews since 2023 \xB7 84 articles signed off")))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The science team",
    title: "Six writers. One pharmacist. Three medical reviewers."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
      marginBottom: 80
    }
  }, team.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.initials,
    className: "card",
    style: {
      padding: 28,
      display: "grid",
      gridTemplateColumns: "84px 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: p.color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--serif)",
      fontSize: 26,
      fontWeight: 500
    }
  }, p.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "t-h4",
    style: {
      fontSize: 18,
      marginBottom: 4
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--accent)",
      marginBottom: 6
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      textTransform: "none",
      letterSpacing: 0,
      marginBottom: 10
    }
  }, p.creds), /*#__PURE__*/React.createElement("p", {
    className: "t-body-sm",
    style: {
      color: "var(--ink-2)"
    }
  }, p.bio)))))), /*#__PURE__*/React.createElement(Footer, null));
};

// ============================ PRIVACY ============================
const LegalPage = ({
  kind = "privacy"
}) => {
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? [["What we collect", "When you subscribe to the newsletter, we store your email address and the date you subscribed. When you visit the site, our analytics provider (Plausible) records anonymous, non‑identifying page view data — no cookies, no fingerprinting, no IP storage."], ["What we don't collect", "We don't run third‑party advertising trackers. We don't sell or share data. We don't ask for your address, birthday, or any health information. We don't have a 'create an account' feature."], ["How we use it", "Your email is used for one thing: sending the FitLab newsletter you subscribed to. We never use it for anything else and never share it with anyone, including our hosting providers, beyond what is operationally required to deliver the email."], ["Your rights", "You can unsubscribe in one click from any newsletter, or email privacy@fitlab.review to delete your data entirely. We respond within 7 days. Under GDPR/CCPA, you can request a copy of any data we hold on you at any time."], ["Third parties", "We use Vercel (hosting), Plausible (privacy‑first analytics), Buttondown (email delivery), and Cloudflare (CDN). None of these have access to data beyond what they need for their function."], ["Children", "FitLab is not directed at children under 16. We don't knowingly collect data from minors."], ["Changes", "If we change this policy materially, we'll email subscribers and post a banner at the top of the site for at least 30 days."]] : [["Use of the site", "FitLab is provided as informational content only. By using the site, you agree that nothing here constitutes medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any supplement, especially if pregnant, nursing, on medication, or managing a medical condition."], ["Editorial accuracy", "We try hard to be right. We cite our sources, hire credentialed reviewers, and re‑score products as new evidence emerges. We do not guarantee that every claim on every page reflects the current state of evidence at every moment. If you spot an error, write us at corrections@fitlab.review."], ["No affiliate income", "FitLab earns no affiliate commission, sponsorship revenue, or product placement income, full stop. Some article links go to retailer pages — those are reference links, not affiliate links."], ["Intellectual property", "All editorial content on FitLab is © FitLab Research, Inc., 2019–2026. You may quote up to 200 words with attribution. For broader licensing or syndication, write licensing@fitlab.review."], ["Trademarks", "FitLab, FitLab Reviews, and the FitLab molecule mark are trademarks of FitLab Research, Inc. All product names referenced on the site are trademarks of their respective owners."], ["Liability", "FitLab is not liable for any damages arising from use of the information on the site. The site is provided 'as is' without warranty of any kind."], ["Jurisdiction", "These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved in the courts of Wilmington, Delaware."], ["Contact", "Editorial: editor@fitlab.review · Press: press@fitlab.review · Legal: legal@fitlab.review"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "fl-root paper",
    "data-screen-label": isPrivacy ? "18 Privacy" : "19 Terms"
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "research"
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
      right: -100,
      top: -60,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(Molecule, {
    width: 460,
    height: 460
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, isPrivacy ? "Privacy policy" : "Terms of service"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginTop: 12,
      marginBottom: 16,
      maxWidth: 720
    }
  }, isPrivacy ? /*#__PURE__*/React.createElement(React.Fragment, null, "The short version: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "we don't track you.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "How we operate, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "plain\u2011English version."))), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--muted)",
      maxWidth: 640
    }
  }, isPrivacy ? "No third‑party cookies, no analytics fingerprinting, no ad networks. Your email if you subscribe to the newsletter, nothing else." : "Plain English where possible. Legal precision where it matters."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 32,
      paddingTop: 20,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "Last updated: Apr 14, 2026"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "\xB7 Version: ", isPrivacy ? "2.1" : "1.4"), /*#__PURE__*/React.createElement("span", {
    className: "t-meta",
    style: {
      color: "var(--muted)"
    }
  }, "\xB7 Effective immediately"))), /*#__PURE__*/React.createElement("main", {
    className: "fl-container",
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("aside", {
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
  }, "Contents"), /*#__PURE__*/React.createElement("ul", {
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
  }, sections.map(([t], i) => /*#__PURE__*/React.createElement("li", {
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
      padding: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Questions?"), /*#__PURE__*/React.createElement("div", {
    className: "t-body-sm",
    style: {
      marginTop: 10,
      color: "var(--ink-2)"
    }
  }, isPrivacy ? "privacy@fitlab.review" : "legal@fitlab.review"))), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720
    }
  }, sections.map(([title, body], i) => /*#__PURE__*/React.createElement("section", {
    key: title,
    style: {
      marginBottom: 40,
      paddingBottom: 32,
      borderBottom: i === sections.length - 1 ? "none" : "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-meta",
    style: {
      color: "var(--muted)",
      marginBottom: 8
    }
  }, "\xA7 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h2", {
    className: "t-h3",
    style: {
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      color: "var(--ink-2)"
    }
  }, body))))), /*#__PURE__*/React.createElement(Footer, null));
};
const Privacy = () => /*#__PURE__*/React.createElement(LegalPage, {
  kind: "privacy"
});
const Terms = () => /*#__PURE__*/React.createElement(LegalPage, {
  kind: "terms"
});
window.About = About;
window.Authors = Authors;
window.Privacy = Privacy;
window.Terms = Terms;
