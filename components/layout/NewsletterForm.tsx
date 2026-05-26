"use client";

export default function NewsletterForm() {
  return (
    <form
      className="newsletter-form-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        style={{
          flex: 1,
          padding: "10px 14px",
          backgroundColor: "rgba(242,235,217,0.08)",
          border: "1px solid rgba(212,201,184,0.2)",
          borderRadius: 8,
          color: "#F2EBD9",
          fontSize: 14,
          fontFamily: "var(--font-dm-sans), sans-serif",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#C4622D",
          color: "#F2EBD9",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans), sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        Subscribe
      </button>
    </form>
  );
}
