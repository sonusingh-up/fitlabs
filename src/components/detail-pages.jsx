import React from 'react';
import {
  TopNav, Footer, Molecule, SmallMolecule, Icon, EvidenceBadge, ScorePill,
  Stat, SectionHead, ProductImage, Meter, StudyRow,
} from './shared.jsx';

/* ============================================================
   REVIEW DETAIL PAGE — driven by data
   ============================================================ */
export const ReviewDetailPage = ({ review }) => {
  return (
    <div className="fl-root paper">
      <TopNav active="reviews" />
      <main className="fl-container" style={{ paddingTop: 32 }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <a className="t-meta" href="/reviews" style={{ color: "var(--muted)" }}>Reviews</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)" />
          <a className="t-meta" href="/reviews" style={{ color: "var(--muted)" }}>{review.category}</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)" />
          <span className="t-meta" style={{ color: "var(--ink)" }}>{review.brand}</span>
        </div>

        {/* Hero */}
        <header className="card" style={{ padding: 0, marginBottom: 40, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", minHeight: 320 }}>
          <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="chip">{review.category}</span>
              <EvidenceBadge level={review.evidence} />
            </div>
            <span className="eyebrow" style={{ color: "var(--muted)" }}>{review.brand}</span>
            <h1 className="t-h1" style={{ marginBottom: 8 }}>{review.name}</h1>
            <p className="t-body-lg" style={{ color: "var(--ink-2)" }}>{review.short}</p>
            <div style={{ display: "flex", gap: 24, paddingTop: 12, borderTop: "1px solid var(--line)", marginTop: "auto", flexWrap: "wrap" }}>
              <Stat n={review.score.toFixed(1)} label="FitLab score" />
              <Stat n={review.protein} label="Protein/serving" />
              <Stat n={review.pricePerServ} label="Per serving" />
            </div>
          </div>
          <div style={{ background: "var(--bg-2)", display: "flex", alignItems: "center", justifyContent: "center", padding: 40, position: "relative" }}>
            <ProductImage shape="tub" w={280} h={280} label={review.brand} />
          </div>
        </header>

        {/* Score breakdown */}
        <SectionHead eyebrow="Score breakdown" title="How we scored it" />
        <div className="card" style={{ padding: 32, marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            <Meter label="Formulation transparency" value={Math.min(1, review.score / 10 + 0.05)} valueLabel={`${(review.score + 0.5).toFixed(1)}/10`} />
            <Meter label="Dose adequacy" value={Math.min(1, review.score / 10 + 0.02)} valueLabel={`${(review.score + 0.2).toFixed(1)}/10`} />
            <Meter label="Third-party testing" value={Math.min(1, review.score / 10 - 0.05)} valueLabel={`${(review.score - 0.5).toFixed(1)}/10`} />
            <Meter label="Value" value={Math.min(1, review.score / 10 - 0.1)} valueLabel={`${(review.score - 1.0).toFixed(1)}/10`} />
          </div>
        </div>

        {/* Pros / Cons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>What we like</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {review.pros.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Icon name="check" size={16} stroke="var(--accent)" />
                  <span className="t-body" style={{ color: "var(--ink-2)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ color: "var(--ev-mod)" }}>Trade-offs</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {review.cons.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Icon name="x" size={16} stroke="var(--ev-mod)" />
                  <span className="t-body" style={{ color: "var(--ink-2)" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <section className="card" style={{ padding: 40, background: "var(--ink)", color: "var(--bg)", border: "none", marginBottom: 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -80, bottom: -80, opacity: 0.18 }}>
            <Molecule width={360} height={360} />
          </div>
          <span className="eyebrow" style={{ color: "#9FD8D2", position: "relative" }}>The verdict</span>
          <h3 className="t-h3" style={{ color: "var(--bg)", marginTop: 12, marginBottom: 12, position: "relative" }}>FitLab score: {review.score.toFixed(1)}/10</h3>
          <p className="t-body-lg" style={{ color: "rgba(251,250,247,0.85)", maxWidth: 720, position: "relative" }}>{review.verdict}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/* ============================================================
   INGREDIENT DETAIL PAGE
   ============================================================ */
export const IngredientDetailPage = ({ ingredient: ing }) => {
  return (
    <div className="fl-root paper">
      <TopNav active="ingredients" />
      <main className="fl-container" style={{ paddingTop: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <a className="t-meta" href="/ingredients" style={{ color: "var(--muted)" }}>Ingredients</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)" />
          <span className="t-meta" style={{ color: "var(--ink)" }}>{ing.name}</span>
        </div>

        {/* Hero */}
        <header style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, marginBottom: 56, alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              <span className="chip">{ing.category}</span>
              <EvidenceBadge level={ing.evidence} />
              <span className="cite-pill"><Icon name="book" size={11} /> {ing.citations} citations</span>
            </div>
            <h1 className="t-display-md" style={{ marginBottom: 16 }}>{ing.name}</h1>
            <p className="t-body-lg" style={{ color: "var(--muted)", maxWidth: 560 }}>{ing.short}</p>
            <div style={{ display: "flex", gap: 32, marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <Stat n={ing.dose.split(' ')[0]} unit={ing.dose.split(' ').slice(1).join(' ')} label="Daily dose" />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="t-body-sm" style={{ color: "var(--ink)" }}>{ing.timing}</span>
                <span className="t-meta" style={{ color: "var(--muted)" }}>Timing</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <Molecule width={360} height={360} />
          </div>
        </header>

        {/* Mechanism */}
        <SectionHead eyebrow="Mechanism" title="How it works" />
        <div className="card" style={{ padding: 32, marginBottom: 56 }}>
          <p className="t-body-lg" style={{ color: "var(--ink-2)" }}>{ing.mechanism}</p>
        </div>

        {/* Benefits */}
        <SectionHead eyebrow="Benefits" title="What the research shows" />
        <div className="card" style={{ padding: 32, marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {ing.benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, borderRadius: 10, background: "var(--accent-soft)" }}>
                <Icon name="check" size={18} stroke="var(--accent)" />
                <span className="t-body" style={{ color: "var(--ink)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best for */}
        <SectionHead eyebrow="Best for" title="Who should take it" />
        <div className="card" style={{ padding: 32, marginBottom: 32 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {ing.bestFor.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Icon name="target" size={16} stroke="var(--accent)" />
                <span className="t-body" style={{ color: "var(--ink-2)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Side effects */}
        <SectionHead eyebrow="Considerations" title="Possible side effects" />
        <div className="card" style={{ padding: 32, marginBottom: 32 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {ing.sideEffects.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Icon name="info" size={16} stroke="var(--ev-mod)" />
                <span className="t-body" style={{ color: "var(--ink-2)" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* ============================================================
   STACK DETAIL PAGE
   ============================================================ */
export const StackDetailPage = ({ stack }) => {
  return (
    <div className="fl-root paper">
      <TopNav active="stacks" />
      <main className="fl-container" style={{ paddingTop: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <a className="t-meta" href="/stacks" style={{ color: "var(--muted)" }}>Stacks</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)" />
          <span className="t-meta" style={{ color: "var(--ink)" }}>{stack.name}</span>
        </div>

        {/* Hero */}
        <header className="card" style={{ padding: 0, marginBottom: 40, display: "grid", gridTemplateColumns: "1.4fr 1fr", overflow: "hidden", minHeight: 320 }}>
          <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="eyebrow" style={{ color: stack.accent }}>{stack.goal}</span>
            <h1 className="t-h1">{stack.name}</h1>
            <p className="t-body-lg" style={{ color: "var(--ink-2)" }}>{stack.short}</p>
            <div style={{ display: "flex", gap: 24, paddingTop: 16, borderTop: "1px solid var(--line)", marginTop: "auto", flexWrap: "wrap" }}>
              <Stat n={stack.components.length} label="Ingredients" />
              <Stat n={stack.monthly} label="Monthly cost" />
            </div>
          </div>
          <div style={{ background: stack.accent, color: "#fff", padding: 40, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
              <Molecule width={420} height={420} accent="#fff" />
            </div>
            <Icon name={stack.icon} size={64} stroke="#fff" strokeWidth={1.2} />
            <div className="t-h3" style={{ color: "#fff", position: "relative" }}>{stack.goal}</div>
          </div>
        </header>

        {/* Components table */}
        <SectionHead eyebrow="Protocol" title="What's in the stack" />
        <div className="card" style={{ padding: 8, marginBottom: 56 }}>
          {stack.components.map((c, i) => (
            <div key={i} style={{
              padding: 20,
              borderBottom: i === stack.components.length - 1 ? "none" : "1px solid var(--line)",
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 120px",
              gap: 16,
              alignItems: "center",
            }}>
              <div>
                <div className="t-body" style={{ fontWeight: 500 }}>{c.name}</div>
                <div className="t-meta" style={{ color: "var(--muted)", marginTop: 2, textTransform: "none", letterSpacing: 0 }}>{c.timing}</div>
              </div>
              <span className="t-body nums" style={{ color: "var(--ink-2)" }}>{c.dose}</span>
              <span className="t-body-sm" style={{ color: "var(--muted)" }}>{c.timing}</span>
              <EvidenceBadge level={c.evidence} />
            </div>
          ))}
        </div>

        {/* What we left out */}
        <SectionHead eyebrow="What we left out" title="And why" />
        <div className="card" style={{ padding: 32, marginBottom: 32 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {stack.leftOut.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Icon name="x" size={16} stroke="var(--ev-mod)" />
                <span className="t-body" style={{ color: "var(--ink-2)" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best for */}
        <section className="card" style={{ padding: 32, background: "var(--ink)", color: "var(--bg)", border: "none", marginBottom: 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -80, bottom: -80, opacity: 0.18 }}>
            <Molecule width={360} height={360} accent={stack.accent} />
          </div>
          <span className="eyebrow" style={{ color: "#9FD8D2", position: "relative" }}>Best for</span>
          <p className="t-body-lg" style={{ color: "rgba(251,250,247,0.85)", maxWidth: 720, position: "relative", marginTop: 12 }}>{stack.bestFor}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/* ============================================================
   BLOG DETAIL PAGE
   ============================================================ */
export const BlogDetailPage = ({ post }) => {
  return (
    <div className="fl-root paper">
      <TopNav active="blog" />
      <main className="fl-container" style={{ paddingTop: 32, maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <a className="t-meta" href="/blog" style={{ color: "var(--muted)" }}>Blog</a>
          <Icon name="chevron-right" size={12} stroke="var(--muted-2)" />
          <span className="t-meta" style={{ color: "var(--ink)" }}>{post.category}</span>
        </div>

        <header style={{ marginBottom: 48 }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>{post.category}</span>
          <h1 className="t-display-md" style={{ marginTop: 12, marginBottom: 16 }}>{post.title}</h1>
          <p className="t-body-lg" style={{ color: "var(--muted)", marginBottom: 24 }}>{post.subtitle}</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--line)", flexWrap: "wrap" }}>
            <span className="t-meta" style={{ color: "var(--muted)" }}>{post.author}</span>
            <span className="t-meta" style={{ color: "var(--muted)" }}>·</span>
            <span className="t-meta" style={{ color: "var(--muted)" }}>{post.date}</span>
            <span className="t-meta" style={{ color: "var(--muted)" }}>·</span>
            <span className="t-meta" style={{ color: "var(--muted)" }}>{post.readTime}</span>
            <span className="t-meta" style={{ color: "var(--accent)", marginLeft: "auto" }}>Reviewed by {post.reviewedBy}</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 56 }}>
          <p className="t-body-lg" style={{ color: "var(--ink)", lineHeight: 1.7, fontWeight: 500 }}>{post.excerpt}</p>
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="t-h3" style={{ marginTop: 16 }}>{block.text}</h2>;
            if (block.type === 'p') return <p key={i} className="t-body-lg" style={{ color: "var(--ink-2)", lineHeight: 1.7 }}>{block.text}</p>;
            if (block.type === 'ul') return (
              <ul key={i} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {block.items.map((it, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Icon name="check" size={16} stroke="var(--accent)" />
                    <span className="t-body-lg" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{it}</span>
                  </li>
                ))}
              </ul>
            );
            return null;
          })}
        </div>

        <div className="card" style={{ padding: 28, marginBottom: 32 }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Methodology</span>
          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: 8 }}>
            This article cites peer-reviewed research and is medically reviewed by {post.reviewedBy}. We disclose all funding sources on our <a href="/about" style={{ color: "var(--accent)" }}>About page</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
