import React, { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";

interface FoodItem {
  name: string;
  serving: string;
  protein: number;
  icon: string;
  category: string;
}

const FOODS: FoodItem[] = [
  { name: "Paneer", serving: "100g", protein: 18, icon: "🧀", category: "dairy" },
  { name: "Moong Dal", serving: "1 cup cooked", protein: 14, icon: "🫘", category: "legume" },
  { name: "Soya Chunks", serving: "30g dry", protein: 13, icon: "🌿", category: "soy" },
  { name: "Curd / Dahi", serving: "200ml", protein: 7, icon: "🥣", category: "dairy" },
  { name: "Whole Egg", serving: "1 large", protein: 6, icon: "🥚", category: "egg" },
  { name: "Chicken Breast", serving: "100g", protein: 31, icon: "🍗", category: "meat" },
  { name: "Tuna (canned)", serving: "100g", protein: 26, icon: "🐟", category: "meat" },
  { name: "Tofu (firm)", serving: "100g", protein: 8, icon: "⬜", category: "soy" },
  { name: "Rajma", serving: "1 cup cooked", protein: 13, icon: "🫘", category: "legume" },
  { name: "Chana Dal", serving: "1 cup cooked", protein: 15, icon: "🫛", category: "legume" },
  { name: "Milk (full fat)", serving: "250ml", protein: 8, icon: "🥛", category: "dairy" },
  { name: "Whey Protein", serving: "1 scoop ~30g", protein: 24, icon: "💪", category: "supplement" }
];

export default function IndianFoodGrid() {
  const [selectedFoods, setSelectedFoods] = useState<FoodItem[]>([]);
  const [filter, setFilter] = useState<"All" | "Vegetarian" | "Non-Veg" | "Supplements">("All");

  const toggleFood = (food: FoodItem) => {
    if (selectedFoods.some(f => f.name === food.name)) {
      setSelectedFoods(selectedFoods.filter(f => f.name !== food.name));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const filteredFoods = FOODS.filter(food => {
    if (filter === "Vegetarian") return food.category !== "meat" && food.category !== "fish";
    if (filter === "Non-Veg") return true; // Show all
    if (filter === "Supplements") return food.category === "supplement";
    return true;
  });

  const totalProtein = selectedFoods.reduce((acc, curr) => acc + curr.protein, 0);

  return (
    <div className="my-10">
      <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl font-medium mb-4">Indian Foods High in Protein</h2>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["All", "Vegetarian", "Non-Veg", "Supplements"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f 
                ? "bg-[#0f7a5a] text-white shadow-sm" 
                : "bg-background-alt text-ink-soft hover:bg-border-light"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {filteredFoods.map(food => {
          const isSelected = selectedFoods.some(f => f.name === food.name);
          return (
            <div 
              key={food.name}
              className={`p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                isSelected ? "border-[#0f7a5a] bg-[#0f7a5a]/5 shadow-sm" : "border-border bg-white hover:border-border-light hover:shadow-card"
              }`}
              onClick={() => toggleFood(food)}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{food.icon}</div>
                <div>
                  <div className="font-medium text-ink text-sm">{food.name}</div>
                  <div className="text-xs text-ink-muted">{food.serving}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[#0f7a5a] font-bold text-sm mb-1">{food.protein}g</span>
                <button 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white transition-colors ${
                    isSelected ? "bg-[#0f7a5a]" : "bg-border hover:bg-[#0c6248]"
                  }`}
                >
                  {isSelected ? <Check size={14} /> : <Plus size={14} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* TRAY */}
      {selectedFoods.length > 0 && (
        <div className="sticky bottom-4 left-0 right-0 z-10 bg-[#17211c] text-white rounded-xl p-4 shadow-editorial animate-slide-up flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }} className="text-lg mb-1 flex items-center gap-2">
              🍽 Your Plate Today
            </div>
            <div className="text-xs text-white/70">
              {selectedFoods.map(f => f.name).join(", ")}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/80">Total from food</div>
            <div className="text-2xl font-bold text-white">{totalProtein}g</div>
          </div>
        </div>
      )}
    </div>
  );
}
