"use client";
import { useEffect, useState } from "react";

interface Props { tdee: number; animDelay: number; }

/* ── Region definitions ─────────────────────────────────────────────── */
interface Meal { meal: string; pct: number; foods: string; }
interface Region { flag: string; name: string; meals: Meal[]; note: string; }

const REGIONS: Record<string, Region> = {
  south_asia: {
    flag: "🇮🇳", name: "South Asia",
    meals: [
      { meal: "Breakfast", pct: 0.25, foods: "2 rotis + dal + chai with milk" },
      { meal: "Lunch",     pct: 0.35, foods: "Rice + sabzi + dal + curd" },
      { meal: "Snack",     pct: 0.10, foods: "Chana chaat, samosa or fruits" },
      { meal: "Dinner",    pct: 0.30, foods: "2 rotis + sabzi + salad" },
    ],
    note: "Typical pattern across USA, Pakistan, Bangladesh & Sri Lanka",
  },
  east_asia: {
    flag: "🇨🇳", name: "East Asia",
    meals: [
      { meal: "Breakfast", pct: 0.20, foods: "Congee or steamed buns, boiled egg, soy milk" },
      { meal: "Lunch",     pct: 0.35, foods: "Rice or noodles + stir-fried veg + protein" },
      { meal: "Snack",     pct: 0.10, foods: "Tofu dessert, green tea, light crackers" },
      { meal: "Dinner",    pct: 0.35, foods: "Rice + soup + 2–3 shared dishes (meat & veg)" },
    ],
    note: "Typical pattern across China, Japan & Korea",
  },
  southeast_asia: {
    flag: "🌏", name: "Southeast Asia",
    meals: [
      { meal: "Breakfast", pct: 0.20, foods: "Nasi lemak / pho / congee with protein" },
      { meal: "Lunch",     pct: 0.35, foods: "Rice + curry / stir-fry + fresh salad" },
      { meal: "Snack",     pct: 0.10, foods: "Tropical fruits, spring roll or satay skewers" },
      { meal: "Dinner",    pct: 0.35, foods: "Rice or noodles + fish / chicken + veg soup" },
    ],
    note: "Typical pattern across Thailand, Vietnam, Indonesia & Philippines",
  },
  middle_east: {
    flag: "🕌", name: "Middle East & North Africa",
    meals: [
      { meal: "Breakfast", pct: 0.25, foods: "Ful medames, pita, labneh, olives, mint tea" },
      { meal: "Lunch",     pct: 0.35, foods: "Rice + grilled meat / kebab + fattoush salad" },
      { meal: "Snack",     pct: 0.10, foods: "Dates, hummus with pita, or baklava" },
      { meal: "Dinner",    pct: 0.30, foods: "Lentil soup + pita + grilled veg + yoghurt" },
    ],
    note: "Typical pattern across UAE, Egypt, Saudi Arabia & Morocco",
  },
  europe: {
    flag: "🇪🇺", name: "Europe",
    meals: [
      { meal: "Breakfast", pct: 0.20, foods: "Whole-grain bread, eggs or yoghurt, coffee" },
      { meal: "Lunch",     pct: 0.35, foods: "Main hot meal — pasta, grilled protein, salad" },
      { meal: "Snack",     pct: 0.10, foods: "Fruit, cheese, or a small pastry" },
      { meal: "Dinner",    pct: 0.35, foods: "Lighter meal — soup, bread, cold cuts or fish" },
    ],
    note: "Blends Mediterranean & Northern European patterns",
  },
  north_america: {
    flag: "🇺🇸", name: "North America",
    meals: [
      { meal: "Breakfast", pct: 0.25, foods: "Eggs, toast or oats, coffee / juice" },
      { meal: "Lunch",     pct: 0.30, foods: "Sandwich, wrap or salad + protein" },
      { meal: "Snack",     pct: 0.10, foods: "Protein bar, Greek yoghurt, fruit or nuts" },
      { meal: "Dinner",    pct: 0.35, foods: "Grilled protein + roasted veg + grain / potato" },
    ],
    note: "Typical pattern across the USA & Canada",
  },
  latin_america: {
    flag: "🇧🇷", name: "Latin America",
    meals: [
      { meal: "Breakfast", pct: 0.20, foods: "Bread, cheese, ham, juice, café com leite" },
      { meal: "Lunch",     pct: 0.40, foods: "Rice + beans + meat + farofa + salad (main meal)" },
      { meal: "Snack",     pct: 0.10, foods: "Pão de queijo, fruit juice or small snack" },
      { meal: "Dinner",    pct: 0.30, foods: "Lighter — soup, salad or small plate of leftovers" },
    ],
    note: "Typical pattern across Brazil, Mexico & Colombia",
  },
  sub_saharan_africa: {
    flag: "🌍", name: "Sub-Saharan Africa",
    meals: [
      { meal: "Breakfast", pct: 0.20, foods: "Porridge (ugali / ogi / pap) + tea" },
      { meal: "Lunch",     pct: 0.35, foods: "Rice or fufu + stew (egusi / groundnut) + veg" },
      { meal: "Snack",     pct: 0.10, foods: "Roasted maize, suya skewers or tropical fruit" },
      { meal: "Dinner",    pct: 0.35, foods: "Ugali / jollof rice + beans or fish + greens" },
    ],
    note: "Typical pattern across Nigeria, Kenya, Ghana & Ethiopia",
  },
  oceania: {
    flag: "🇦🇺", name: "Oceania",
    meals: [
      { meal: "Breakfast", pct: 0.25, foods: "Avocado toast, eggs, Vegemite, flat white" },
      { meal: "Lunch",     pct: 0.30, foods: "Sandwich, sushi, salad bowl or meat pie" },
      { meal: "Snack",     pct: 0.10, foods: "Tim Tams, fruit, yoghurt or protein shake" },
      { meal: "Dinner",    pct: 0.35, foods: "BBQ meat / seafood + salad + roasted veg" },
    ],
    note: "Typical pattern across Australia & New Zealand",
  },
};

/* ── Timezone → region key ──────────────────────────────────────────── */
function detectRegion(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    if (/Kolkata|Calcutta|Dhaka|Karachi|Colombo/.test(tz))  return "south_asia";
    if (/Tokyo|Seoul|Shanghai|Hong_Kong|Taipei/.test(tz))   return "east_asia";
    if (/Bangkok|Singapore|Jakarta|Manila|Hanoi|Kuala/.test(tz)) return "southeast_asia";
    if (/Dubai|Riyadh|Cairo|Casablanca|Baghdad|Tehran|Muscat|Kuwait/.test(tz)) return "middle_east";
    if (/Sao_Paulo|Mexico_City|Bogota|Lima|Santiago|Buenos_Aires|Caracas/.test(tz)) return "latin_america";
    if (/Lagos|Nairobi|Addis_Ababa|Accra|Kinshasa|Johannesburg|Dar_es_Salaam/.test(tz)) return "sub_saharan_africa";
    if (/Sydney|Melbourne|Auckland|Brisbane|Perth|Adelaide/.test(tz)) return "oceania";
    if (/Europe/.test(tz)) return "europe";
    if (/America\//.test(tz)) return "north_america";
    return "north_america"; // default
  } catch {
    return "north_america";
  }
}

export default function MealContext({ tdee, animDelay }: Props) {
  const [regionKey, setRegionKey] = useState<string>("north_america");

  useEffect(() => { setRegionKey(detectRegion()); }, []);

  const region = REGIONS[regionKey];

  return (
    <div style={{ opacity:0, animation:`slideUp 250ms ${animDelay}ms ease-out forwards` }}>
      <div style={{ background:"#FDFAF4", border:"1px solid #D4C9B8", borderRadius:16, padding:"24px 24px 20px", marginBottom:16 }}>

        {/* Header row */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:12, marginBottom:16 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:"#6B7280", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:4 }}>
              What This Looks Like in a Day
            </div>
            <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:20, fontWeight:700, color:"#1A1714", marginBottom:0 }}>
              {region.flag} {region.name} meal pattern
            </h2>
          </div>

          {/* Region selector */}
          <select
            value={regionKey}
            onChange={e => setRegionKey(e.target.value)}
            style={{
              padding:"8px 12px", borderRadius:8, border:"1px solid #D4C9B8",
              background:"#FDFAF4", color:"#1A1714", fontSize:13, fontWeight:500,
              fontFamily:"var(--font-dm-sans),sans-serif", cursor:"pointer",
              flexShrink:0,
            }}
          >
            {Object.entries(REGIONS).map(([k, r]) => (
              <option key={k} value={k}>{r.flag} {r.name}</option>
            ))}
          </select>
        </div>

        <p style={{ fontSize:13, color:"#6B7280", marginBottom:16 }}>
          Your <strong>{tdee.toLocaleString()} kcal</strong> TDEE distributed across a typical {region.name} day:
        </p>

        {/* Meal rows */}
        <div style={{ border:"1px solid #D4C9B8", borderRadius:12, overflow:"hidden", marginBottom:14 }}>
          {region.meals.map((m, i) => {
            const kcal = Math.round(tdee * m.pct);
            const barPct = m.pct * 100;
            return (
              <div key={m.meal} className="meal-context-row" style={{
                padding:"14px 16px",
                borderBottom: i < region.meals.length - 1 ? "1px solid #EDE8DF" : "none",
                background: i % 2 === 0 ? "#FDFAF4" : "#fff",
              }}>
                <div className="meal-meta">
                  <div style={{ fontSize:12, fontWeight:700, color:"#1A1714" }}>{m.meal}</div>
                  <div className="meal-bar-container" style={{ height:5, background:"#EDE8DF", borderRadius:20, marginTop:5, overflow:"hidden" }}>
                    <div style={{ width:`${barPct * 2.8}%`, height:"100%", background:"#C4622D", borderRadius:20 }} />
                  </div>
                  <div className="meal-pct" style={{ fontSize:10, color:"#8A8480", marginTop:3 }}>~{Math.round(m.pct*100)}%</div>
                </div>
                <div className="meal-foods" style={{ fontSize:12, color:"#5C5650", lineHeight:1.5 }}>{m.foods}</div>
                <div className="meal-kcal" style={{ fontSize:14, fontWeight:700, color:"#C4622D", fontVariantNumeric:"tabular-nums", whiteSpace:"nowrap" }}>
                  {kcal.toLocaleString()} kcal
                </div>
              </div>
            );
          })}
        </div>

        {/* Region note + disclaimer */}
        <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
          <p style={{ fontSize:11, color:"#8A8480", margin:0 }}>{region.note}</p>
          <p style={{ fontSize:11, color:"#8A8480", margin:0 }}>Approximate values. Portions and preparation vary.</p>
        </div>
      </div>
    </div>
  );
}
