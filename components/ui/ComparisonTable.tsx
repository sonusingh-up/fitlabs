import type { ComparisonProduct, ReviewRating } from "@/lib/types";
import { ratingColor } from "@/lib/utils";
import { Check, Minus } from "lucide-react";

interface ComparisonTableProps {
  products: ComparisonProduct[];
  categories?: string[];
}

const defaultCategories = ["Overall Rating", "Price/Serving", "Best For", "Formula Quality", "Taste", "Mixability", "Value"];

export default function ComparisonTable({ products, categories = defaultCategories }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", border: "1px solid #E4E8E5", borderRadius: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #E4E8E5" }}>
            <th
              style={{
                padding: "14px 20px",
                textAlign: "left",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6B7770",
                fontFamily: "var(--font-jetbrains), monospace",
                fontWeight: 500,
                backgroundColor: "#F2F8F4",
                minWidth: 140,
              }}
            >
              Category
            </th>
            {products.map((p) => (
              <th
                key={p.name}
                style={{
                  padding: "14px 20px",
                  textAlign: "center",
                  backgroundColor: "#F2F8F4",
                }}
              >
                <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 14, fontWeight: 700, color: "#17211C", display: "block" }}>
                  {p.name}
                </span>
                <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>{p.brand}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: "#F6F8F6" }}>
            <td style={{ padding: "12px 20px", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Overall Rating
            </td>
            {products.map((p) => (
              <td key={p.name} style={{ padding: "12px 20px", textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: ratingColor(p.rating as ReviewRating),
                  }}
                >
                  {p.rating}
                  <span style={{ fontSize: 12, fontWeight: 400, color: "#586259" }}>/10</span>
                </span>
              </td>
            ))}
          </tr>
          <tr style={{ borderBottom: "1px solid #F2F8F4" }}>
            <td style={{ padding: "12px 20px", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Price / Serving
            </td>
            {products.map((p) => (
              <td key={p.name} style={{ padding: "12px 20px", textAlign: "center", fontSize: 14, color: "#17211C", fontWeight: 500 }}>
                ₹{p.price} {p.priceUnit}
              </td>
            ))}
          </tr>
          <tr style={{ borderBottom: "1px solid #F2F8F4", backgroundColor: "#F6F8F6" }}>
            <td style={{ padding: "12px 20px", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Best For
            </td>
            {products.map((p) => (
              <td key={p.name} style={{ padding: "12px 20px", textAlign: "center", fontSize: 13, color: "#2D2926" }}>
                {p.bestFor}
              </td>
            ))}
          </tr>
          <tr style={{ borderBottom: "1px solid #F2F8F4" }}>
            <td style={{ padding: "12px 20px", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Top Strengths
            </td>
            {products.map((p) => (
              <td key={p.name} style={{ padding: "12px 20px", textAlign: "center" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {p.pros.slice(0, 2).map((pro, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "#2D6A4F", padding: "2px 0" }}>
                      <Check size={11} /> {pro}
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr style={{ backgroundColor: "#F6F8F6" }}>
            <td style={{ padding: "12px 20px", fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Limitations
            </td>
            {products.map((p) => (
              <td key={p.name} style={{ padding: "12px 20px", textAlign: "center" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {p.cons.slice(0, 2).map((con, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "#0F7A5A", padding: "2px 0" }}>
                      <Minus size={11} /> {con}
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
