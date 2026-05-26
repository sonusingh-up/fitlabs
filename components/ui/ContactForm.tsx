"use client";

export default function ContactForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }} onSubmit={(e) => e.preventDefault()}>
      {[
        { label: "Your Name", type: "text", placeholder: "Arjun Sharma" },
        { label: "Email Address", type: "email", placeholder: "arjun@example.com" },
        { label: "Subject", type: "text", placeholder: "e.g. Correction for creatine review" },
      ].map((field) => (
        <div key={field.label}>
          <label style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "#F8F2E4",
              border: "1px solid #D4C9B8",
              borderRadius: 8,
              fontSize: 14,
              color: "#1A1714",
              fontFamily: "var(--font-dm-sans), sans-serif",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      ))}
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Your message..."
          style={{
            width: "100%",
            padding: "10px 14px",
            backgroundColor: "#F8F2E4",
            border: "1px solid #D4C9B8",
            borderRadius: 8,
            fontSize: 14,
            color: "#1A1714",
            fontFamily: "var(--font-dm-sans), sans-serif",
            outline: "none",
            resize: "vertical",
            boxSizing: "border-box",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "11px 24px",
          backgroundColor: "#1A1714",
          color: "#F2EBD9",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.04em",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans), sans-serif",
          alignSelf: "flex-start",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
