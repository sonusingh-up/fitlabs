"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Arrae independently third-party tested?",
    a: "Not in the way that phrase usually implies. Arrae reports batch-level testing for identity (FTIR), heavy metals, and microbiology — which are useful baseline checks. However, the brand holds no NSF, USP, Informed Sport, or BSCG product-level certification. Those programmes independently verify that what is on the label is actually in the capsule at the stated dose. Arrae's testing is internal and not verified by an independent certifying body.",
  },
  {
    q: "Is the clinical evidence behind Bloat solid?",
    a: "It is real evidence, but it has significant limitations. The headline 86% bloating reduction figure comes from a 35-person, open-label, single-arm observational trial conducted by Citrus Labs — an industry sponsor. There was no placebo group and no blinding, meaning participant-reported outcomes are subject to the placebo effect. A second, more rigorous randomised placebo-controlled trial (NCT07370740) is registered but unpublished as of May 2026. That result will be more meaningful.",
  },
  {
    q: "How does Arrae compare on price?",
    a: "Arrae sits at the expensive end of the DTC supplement market. Bloat at $1.47/serving costs considerably more than standalone digestive enzyme products with comparable ingredients. Calm at $2.40–3.67/serving is hard to justify on formula alone — 63mg of magnesium bisglycinate is well below the clinically studied therapeutic range for anxiety (200–400mg in most trials), and the doses of the other three actives are hidden inside a proprietary blend. You are partly paying for the brand, the packaging, and the community.",
  },
  {
    q: "Who is Arrae actually suitable for?",
    a: "People who want short, readable ingredient lists without a long chain of synthetic additives. People who find value in the aesthetic and lifestyle framing — treating supplements more like a skincare routine. People who have tried standard digestive enzyme products and want something with a more targeted herb combination. It is not the right choice for drug-tested athletes (no Informed Sport cert), people who want independent potency verification, or anyone prioritising maximum cost-efficiency.",
  },
  {
    q: "Is the MB-1 'natural GLP-1 support' claim accurate?",
    a: "It is extrapolated rather than proven. IGOB131® (African mango seed extract) has RCT data showing modest effects on body weight and metabolic markers — but the mechanism through which it might influence GLP-1 specifically is based on animal model and in vitro data, not human clinical evidence. Grains of Paradise has some thermogenesis data in humans, but at doses higher than the blend likely delivers. The GLP-1 framing is a marketing angle, not a clinically established effect.",
  },
];

export default function ArraeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 8 }}>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: `1px solid ${isOpen ? "#C4C0B4" : "#D4C9B8"}`,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "#F8F2E4",
              transition: "border-color 0.15s",
            }}
          >
            {/* Question button */}
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
                padding: "18px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                borderBottom: isOpen ? "1px solid #EDE8DF" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "0.975rem",
                  fontWeight: 700,
                  color: "#1A1714",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.q}
              </span>

              {/* +/− icon */}
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "1px solid #D4C9B8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                  backgroundColor: isOpen ? "#1A1714" : "#EDE8DF",
                  transition: "background 0.15s, border-color 0.15s",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    transition: "transform 0.2s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M5 1V9M1 5H9"
                    stroke={isOpen ? "#F2EBD9" : "#5C5650"}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            {/* Answer panel */}
            {isOpen && (
              <div style={{ padding: "16px 20px 20px" }}>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5C5650",
                    lineHeight: 1.78,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
