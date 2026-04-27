/* global React, TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, SectionHead */

// ============================ ABOUT ============================
const About = () => (
  <div className="fl-root paper" data-screen-label="16 About">
    <TopNav active="research"/>
    <header className="fl-container" style={{ paddingTop: 80, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, top: -60, opacity: 0.55 }}>
        <Molecule width={620} height={620}/>
      </div>
      <span className="eyebrow">About FitLab</span>
      <h1 className="t-display" style={{ fontSize: 80, marginTop: 16, marginBottom: 28, maxWidth: 920 }}>
        We started FitLab because <span style={{ fontStyle: "italic", color: "var(--accent)" }}>the supplement industry lies on its labels.</span>
      </h1>
      <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 720, fontSize: 20 }}>
        Underdosed actives, proprietary blends, paid placements, and "best of" lists written by affiliate marketers. We thought the genre needed something different. So we built it.
      </p>
    </header>

    <main className="fl-container">
      {/* Stats */}
      <section className="card-soft" style={{ padding: 48, marginBottom: 80, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {[
          ["2019", "Founded"],
          ["412",  "Products independently reviewed"],
          ["32k",  "Newsletter subscribers"],
          ["$0",   "Affiliate commissions earned"],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="t-display-md" style={{ fontSize: 56, color: "var(--accent)" }}>{n}</div>
            <div className="t-meta" style={{ color: "var(--muted)", marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Values */}
      <section style={{ marginBottom: 80 }}>
        <SectionHead eyebrow="What we believe" title="Three rules we operate by."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { n: "01", t: "Evidence first, opinion last", b: "If the trials don't support a claim, neither do we — even when the brand is a friend, even when readers want a hopeful answer." },
            { n: "02", t: "No paid placements, ever",    b: "We have refused six‑figure sponsorship offers. The independence of the verdict is the product. There is no version where we trade it." },
            { n: "03", t: "Show the work",                b: "Every score, every claim, every dose recommendation links back to the studies that justify it. Read along, disagree, write us back." },
          ].map(v => (
            <div key={v.n} className="card" style={{ padding: 32 }}>
              <span className="t-display-md" style={{ fontSize: 48, color: "var(--accent)", display: "block", marginBottom: 16 }}>{v.n}</span>
              <h3 className="t-h3" style={{ marginBottom: 12 }}>{v.t}</h3>
              <p className="t-body" style={{ color: "var(--muted)" }}>{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 80 }}>
        <div>
          <span className="eyebrow">The story</span>
          <h2 className="t-h2" style={{ marginTop: 12 }}>From a Google Doc to 32,000 readers.</h2>
        </div>
        <div className="t-body-lg" style={{ color: "var(--ink-2)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p>FitLab started in 2019 as a shared Google Doc — a personal cheat sheet of which supplements actually had evidence, written by a registered dietitian for her own clients in Bengaluru and New Jersey. It got passed around. Then it got published. Then it got readers.</p>
          <p>The current team is six writers, one pharmacist, and a panel of medical reviewers spread across the US, UK, and India. We publish in English, test on global and Indian shelves, and refuse all sponsorship money.</p>
          <p>If you've found us useful, the best support is a <a style={{ color: "var(--accent)" }}>paid newsletter subscription</a> — that's what keeps the lights on without compromising the verdicts.</p>
        </div>
      </section>

      {/* Funding bar */}
      <section className="card" style={{ padding: 48, background: "var(--ink)", color: "var(--bg)", border: "none", marginBottom: 32, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, bottom: -100, opacity: 0.25 }}>
          <Molecule width={460} height={460} accent="#0F766E"/>
        </div>
        <span className="eyebrow" style={{ color: "#9FD8D2" }}>Funding disclosure</span>
        <h3 className="t-h3" style={{ color: "var(--bg)", marginTop: 12, marginBottom: 16, maxWidth: 760, position: "relative" }}>
          78% paid newsletter subscriptions. 22% FitLab Editorial Foundation grant. 0% brand money.
        </h3>
        <p className="t-body" style={{ color: "rgba(251,250,247,0.7)", maxWidth: 680, position: "relative" }}>
          Our 2025 financials are public — published every March in the change log. If we ever take brand money, we'll do it loudly, separate it from the editorial line, and tell you where every dollar went.
        </p>
      </section>
    </main>
    <Footer/>
  </div>
);

// ============================ AUTHORS ============================
const Authors = () => {
  const team = [
    { initials: "AK", name: "Dr. Anya Krishnan, RD", role: "Editor‑in‑Chief & Lead Nutrition Editor",       creds: "PhD Nutritional Sci. (Tufts)", bio: "Twenty years of clinical sports dietetics. Anya sets the editorial line and reviews every product score before publication.", color: "#0F766E" },
    { initials: "MR", name: "Marcus Rivera, MS, CSCS", role: "Senior Performance Editor",                   creds: "MS Exercise Phys. (Texas Tech)", bio: "Former NSCA‑CPT, now writes the strength and hypertrophy desk. Specializes in protein and creatine evidence.", color: "#1D4ED8" },
    { initials: "PS", name: "Priya Shah, MSc",        role: "India Editor",                                 creds: "MSc Public Health (LSHTM)",      bio: "Leads the FitLab India editions. Tests products against FSSAI standards and Indian e‑commerce supply chains.", color: "#B45309" },
    { initials: "JK", name: "Dr. Jonas Kimura, PhD",  role: "Research Lead",                                creds: "PhD Pharmacology (Kyoto)",       bio: "Reads the literature so we don't miss anything. Owns the meta‑analysis breakdowns and retraction watch.", color: "#4338CA" },
    { initials: "LT", name: "Lena Torres, RDN",       role: "Reviews Editor",                               creds: "RDN, ISSN‑CISSN",                 bio: "Hands‑on with 200+ products tested per year. Owns the formulation and dose adequacy scoring.", color: "#9D174D" },
    { initials: "DM", name: "Dr. Dan Mensah, PharmD", role: "Senior Pharmacology Reviewer",                 creds: "PharmD (UNC), BCCCP",            bio: "Reviews supplement‑drug interaction copy across the site. Ex‑hospital ICU pharmacist.", color: "#0E7490" },
  ];
  return (
    <div className="fl-root paper" data-screen-label="17 Authors">
      <TopNav active="research"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 48, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.5 }}>
          <Molecule width={460} height={460}/>
        </div>
        <span className="eyebrow">Authors & medical reviewers</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 760 }}>
          The FitLab Science Team. <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Every byline, every credential, every conflict.</span>
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Nine humans write everything you read here. Six on staff, three medical reviewers. We publish credentials and disclose funding for each.
        </p>
      </header>

      {/* Medical reviewer feature — Pankaj Singh */}
      <main className="fl-container">
        <SectionHead eyebrow="Medical reviewer · highlighted" title="Medically reviewed by"/>
        <article className="card" style={{ padding: 0, marginBottom: 64, display: "grid", gridTemplateColumns: "300px 1fr", overflow: "hidden", minHeight: 320 }}>
          <div style={{ background: "linear-gradient(160deg, #0F766E 0%, #064E48 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
              <Molecule width={320} height={320} accent="#fff"/>
            </div>
            <div style={{ width: 144, height: 144, borderRadius: "50%", background: "rgba(255,255,255,0.95)", color: "var(--accent-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 56, fontWeight: 500, position: "relative", border: "4px solid rgba(255,255,255,0.4)" }}>PS</div>
          </div>
          <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="chip chip-accent">Medical reviewer</span>
              <span className="chip">Pharmacology</span>
              <span className="chip">India</span>
            </div>
            <div>
              <h2 className="t-h2" style={{ fontSize: 36, marginBottom: 6 }}>Pankaj Singh, Pharm.B</h2>
              <div className="t-body" style={{ color: "var(--muted)" }}>Pharmacist · Clinical reviewer for FitLab India</div>
            </div>
            <p className="t-body-lg" style={{ color: "var(--ink-2)", maxWidth: 640 }}>
              Pankaj reviews FitLab's India coverage for clinical accuracy, drug‑supplement interactions, and FSSAI compliance. Every India edition guide and any article touching on prescription‑adjacent ingredients carries his sign‑off before publication.
            </p>
            <div style={{ display: "flex", gap: 16, paddingTop: 20, borderTop: "1px solid var(--line)", marginTop: "auto" }}>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/pankaj-singh-77b93a368/" target="_blank" rel="noopener" style={{ padding: "8px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.74c0-2.55-1.36-3.74-3.18-3.74-1.47 0-2.13.81-2.5 1.38v-1.18H10v8.67h2.67v-4.84c0-1.27.94-1.88 1.83-1.88.85 0 1.84.62 1.84 1.91v4.81h2z"/></svg>
                LinkedIn profile <Icon name="arrow-up-right" size={12}/>
              </a>
              <span className="t-meta" style={{ color: "var(--muted)", alignSelf: "center" }}>Reviews since 2023 · 84 articles signed off</span>
            </div>
          </div>
        </article>

        {/* Team grid */}
        <SectionHead eyebrow="The science team" title="Six writers. One pharmacist. Three medical reviewers."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 80 }}>
          {team.map(p => (
            <article key={p.initials} className="card" style={{ padding: 28, display: "grid", gridTemplateColumns: "84px 1fr", gap: 20 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: p.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 26, fontWeight: 500 }}>{p.initials}</div>
              <div>
                <h3 className="t-h4" style={{ fontSize: 18, marginBottom: 4 }}>{p.name}</h3>
                <div className="t-meta" style={{ color: "var(--accent)", marginBottom: 6 }}>{p.role}</div>
                <div className="t-meta" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: 0, marginBottom: 10 }}>{p.creds}</div>
                <p className="t-body-sm" style={{ color: "var(--ink-2)" }}>{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

// ============================ PRIVACY ============================
const LegalPage = ({ kind = "privacy" }) => {
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? [
    ["What we collect", "When you subscribe to the newsletter, we store your email address and the date you subscribed. When you visit the site, our analytics provider (Plausible) records anonymous, non‑identifying page view data — no cookies, no fingerprinting, no IP storage."],
    ["What we don't collect", "We don't run third‑party advertising trackers. We don't sell or share data. We don't ask for your address, birthday, or any health information. We don't have a 'create an account' feature."],
    ["How we use it",   "Your email is used for one thing: sending the FitLab newsletter you subscribed to. We never use it for anything else and never share it with anyone, including our hosting providers, beyond what is operationally required to deliver the email."],
    ["Your rights",     "You can unsubscribe in one click from any newsletter, or email privacy@fitlab.review to delete your data entirely. We respond within 7 days. Under GDPR/CCPA, you can request a copy of any data we hold on you at any time."],
    ["Third parties",   "We use Vercel (hosting), Plausible (privacy‑first analytics), Buttondown (email delivery), and Cloudflare (CDN). None of these have access to data beyond what they need for their function."],
    ["Children",        "FitLab is not directed at children under 16. We don't knowingly collect data from minors."],
    ["Changes",         "If we change this policy materially, we'll email subscribers and post a banner at the top of the site for at least 30 days."],
  ] : [
    ["Use of the site",       "FitLab is provided as informational content only. By using the site, you agree that nothing here constitutes medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any supplement, especially if pregnant, nursing, on medication, or managing a medical condition."],
    ["Editorial accuracy",    "We try hard to be right. We cite our sources, hire credentialed reviewers, and re‑score products as new evidence emerges. We do not guarantee that every claim on every page reflects the current state of evidence at every moment. If you spot an error, write us at corrections@fitlab.review."],
    ["No affiliate income",   "FitLab earns no affiliate commission, sponsorship revenue, or product placement income, full stop. Some article links go to retailer pages — those are reference links, not affiliate links."],
    ["Intellectual property", "All editorial content on FitLab is © FitLab Research, Inc., 2019–2026. You may quote up to 200 words with attribution. For broader licensing or syndication, write licensing@fitlab.review."],
    ["Trademarks",            "FitLab, FitLab Reviews, and the FitLab molecule mark are trademarks of FitLab Research, Inc. All product names referenced on the site are trademarks of their respective owners."],
    ["Liability",             "FitLab is not liable for any damages arising from use of the information on the site. The site is provided 'as is' without warranty of any kind."],
    ["Jurisdiction",          "These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved in the courts of Wilmington, Delaware."],
    ["Contact",               "Editorial: editor@fitlab.review · Press: press@fitlab.review · Legal: legal@fitlab.review"],
  ];

  return (
    <div className="fl-root paper" data-screen-label={isPrivacy ? "18 Privacy" : "19 Terms"}>
      <TopNav active="research"/>
      <header className="fl-container" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -60, opacity: 0.4 }}>
          <Molecule width={460} height={460}/>
        </div>
        <span className="eyebrow">{isPrivacy ? "Privacy policy" : "Terms of service"}</span>
        <h1 className="t-h1" style={{ marginTop: 12, marginBottom: 16, maxWidth: 720 }}>
          {isPrivacy ? (<>The short version: <span style={{ fontStyle: "italic", color: "var(--accent)" }}>we don't track you.</span></>) : (<>How we operate, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>plain‑English version.</span></>)}
        </h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 640 }}>
          {isPrivacy ? "No third‑party cookies, no analytics fingerprinting, no ad networks. Your email if you subscribe to the newsletter, nothing else." : "Plain English where possible. Legal precision where it matters."}
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
          <span className="t-meta" style={{ color: "var(--muted)" }}>Last updated: Apr 14, 2026</span>
          <span className="t-meta" style={{ color: "var(--muted)" }}>· Version: {isPrivacy ? "2.1" : "1.4"}</span>
          <span className="t-meta" style={{ color: "var(--muted)" }}>· Effective immediately</span>
        </div>
      </header>

      <main className="fl-container" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56 }}>
        <aside style={{ position: "sticky", top: 88, height: "fit-content" }}>
          <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 14 }}>Contents</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, borderLeft: "2px solid var(--line)", paddingLeft: 14 }}>
            {sections.map(([t], i) => (
              <li key={t}><a className="t-body-sm" href="#" style={{ color: i === 0 ? "var(--accent)" : "var(--muted)", fontWeight: i === 0 ? 600 : 400 }}>{t}</a></li>
            ))}
          </ul>
          <div className="card" style={{ padding: 16, marginTop: 32 }}>
            <span className="eyebrow">Questions?</span>
            <div className="t-body-sm" style={{ marginTop: 10, color: "var(--ink-2)" }}>{isPrivacy ? "privacy@fitlab.review" : "legal@fitlab.review"}</div>
          </div>
        </aside>
        <article style={{ maxWidth: 720 }}>
          {sections.map(([title, body], i) => (
            <section key={title} style={{ marginBottom: 40, paddingBottom: 32, borderBottom: i === sections.length - 1 ? "none" : "1px solid var(--line)" }}>
              <div className="t-meta" style={{ color: "var(--muted)", marginBottom: 8 }}>§ {String(i+1).padStart(2,"0")}</div>
              <h2 className="t-h3" style={{ marginBottom: 12 }}>{title}</h2>
              <p className="t-body-lg" style={{ color: "var(--ink-2)" }}>{body}</p>
            </section>
          ))}
        </article>
      </main>
      <Footer/>
    </div>
  );
};

const Privacy = () => <LegalPage kind="privacy"/>;
const Terms = () => <LegalPage kind="terms"/>;

window.About = About;
window.Authors = Authors;
window.Privacy = Privacy;
window.Terms = Terms;
