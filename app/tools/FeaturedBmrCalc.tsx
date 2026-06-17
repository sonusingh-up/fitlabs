"use client";

import { useState } from "react";

export default function FeaturedBmrCalc() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("170");
  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("10");
  const [activity, setActivity] = useState("1.55");

  const ageNum = parseFloat(age);
  const lbs = parseFloat(weight);
  const ft = parseFloat(feet);
  const inch = parseFloat(inches);
  const act = parseFloat(activity);

  let bmr = NaN;
  if ([ageNum, lbs, ft, inch].every((n) => !isNaN(n))) {
    const kg = lbs * 0.453592;
    const cm = (ft * 12 + inch) * 2.54;
    bmr = 10 * kg + 6.25 * cm - 5 * ageNum + (sex === "male" ? 5 : -161);
  }

  const tdee = isNaN(bmr) ? NaN : bmr * (isNaN(act) ? 1.55 : act);
  const fmt = (n: number) => (isNaN(n) ? "—" : Math.round(n).toLocaleString("en-US"));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: 46,
    border: "1px solid #d7ddd9",
    borderRadius: 10,
    padding: "0 14px",
    fontSize: 16,
    outline: "none",
    color: "#17211c",
    backgroundColor: "#FFFFFF",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: "#586259",
    marginBottom: 8,
  };

  return (
    <div style={{
      border: "1px solid #e4e8e5",
      borderRadius: 20,
      overflow: "hidden",
    }} className="featured-calc-grid">
      {/* Form side */}
      <div style={{ padding: "40px 38px" }} className="featured-calc-form">
        <div style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#0f7a5a",
          marginBottom: 8,
        }}>
          Featured · BMR & TDEE
        </div>
        <h2 style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 30,
          fontWeight: 500,
          margin: "0 0 24px",
          color: "#17211c",
          letterSpacing: "-0.02em",
        }}>
          Find your calorie target
        </h2>

        {/* Sex toggle */}
        <div style={{ marginBottom: 18 }}>
          <div style={labelStyle}>Biological sex</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => setSex("male")}
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                border: sex === "male" ? "1px solid #0f7a5a" : "1px solid #d7ddd9",
                background: sex === "male" ? "#0f7a5a" : "#FFFFFF",
                color: sex === "male" ? "#FFFFFF" : "#17211c",
              }}
            >
              Male
            </button>
            <button
              onClick={() => setSex("female")}
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                border: sex === "female" ? "1px solid #0f7a5a" : "1px solid #d7ddd9",
                background: sex === "female" ? "#0f7a5a" : "#FFFFFF",
                color: sex === "female" ? "#FFFFFF" : "#17211c",
              }}
            >
              Female
            </button>
          </div>
        </div>

        {/* Age + Weight */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
          <div>
            <div style={labelStyle}>Age (years)</div>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <div style={labelStyle}>Weight (lbs)</div>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Height */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
          <div>
            <div style={labelStyle}>Height (ft)</div>
            <input
              type="number"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <div style={labelStyle}>Height (in)</div>
            <input
              type="number"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Activity */}
        <div>
          <div style={labelStyle}>Activity level</div>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={{
              ...inputStyle,
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23586259' stroke-width='1.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: 36,
              fontSize: 15,
            }}
          >
            <option value="1.2">Sedentary — little or no exercise</option>
            <option value="1.375">Lightly active — 1–3 days/week</option>
            <option value="1.55">Moderately active — 3–5 days/week</option>
            <option value="1.725">Very active — 6–7 days/week</option>
            <option value="1.9">Extra active — hard exercise + job</option>
          </select>
        </div>
      </div>

      {/* Result side */}
      <div style={{
        background: "linear-gradient(150deg, #0a4f3b, #0f7a5a)",
        color: "#FFFFFF",
        padding: "40px 38px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }} className="featured-calc-result">
        <div style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#a7e3c9",
          marginBottom: 6,
        }}>
          YOUR BMR
        </div>
        <div style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: 64,
          lineHeight: 1,
          marginBottom: 4,
          fontWeight: 500,
        }}>
          {fmt(bmr)}
          <span style={{ fontSize: 20, opacity: 0.7 }}> kcal</span>
        </div>
        <div style={{ fontSize: 14, color: "#cdeadd", marginBottom: 26 }}>
          Calories burned at complete rest
        </div>

        <div style={{
          background: "rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: 20,
          marginBottom: 18,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 15, opacity: 0.9 }}>Maintenance (TDEE)</span>
            <strong style={{
              fontSize: 24,
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontWeight: 500,
            }}>
              {fmt(tdee)}
            </strong>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5 }}>
            <span style={{ opacity: 0.9 }}>Lose fat (−500)</span>
            <strong>{fmt(tdee - 500)} kcal</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14.5 }}>
            <span style={{ opacity: 0.9 }}>Lean bulk (+300)</span>
            <strong>{fmt(tdee + 300)} kcal</strong>
          </div>
        </div>

        <div style={{
          fontSize: 11.5,
          color: "#a7e3c9",
          marginTop: 22,
          lineHeight: 1.5,
        }}>
          Mifflin-St Jeor estimate. General wellness info only — not medical advice.
        </div>
      </div>
    </div>
  );
}
