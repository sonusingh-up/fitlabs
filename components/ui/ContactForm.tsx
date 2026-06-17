"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: fd.get("name"),
          email: fd.get("email"),
          subject: fd.get("subject"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 18 }} onSubmit={handleSubmit}>
      {[
        { label: "Your Name", name: "name", type: "text", placeholder: "Arjun Sharma" },
        { label: "Email Address", name: "email", type: "email", placeholder: "arjun@example.com" },
        { label: "Subject", name: "subject", type: "text", placeholder: "e.g. Correction for creatine review" },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required
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
        <label htmlFor="message" style={{ display: "block", fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 6 }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
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
        disabled={status === "sending"}
        style={{
          padding: "11px 24px",
          backgroundColor: "#1A1714",
          color: "#F2EBD9",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.04em",
          border: "none",
          borderRadius: 8,
          cursor: status === "sending" ? "wait" : "pointer",
          fontFamily: "var(--font-dm-sans), sans-serif",
          alignSelf: "flex-start",
          opacity: status === "sending" ? 0.6 : 1,
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p style={{ color: "#2D6A4F", fontSize: 14, margin: 0 }}>Message sent successfully.</p>
      )}
      {status === "error" && (
        <p style={{ color: "#C4622D", fontSize: 14, margin: 0 }}>Failed to send. Please try again.</p>
      )}
    </form>
  );
}
