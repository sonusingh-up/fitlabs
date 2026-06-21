import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DynamicFAQProps {
  goal: string;
  dietType: string;
  age: number;
  dailyProtein: number;
}

interface FAQItem {
  q: string;
  a: string;
}

export default function DynamicFAQ({ goal, dietType, age, dailyProtein }: DynamicFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getFaqs = (): FAQItem[] => {
    const faqs: FAQItem[] = [
      {
        q: "When should I eat protein for best results?",
        a: "For optimal muscle protein synthesis, aim to consume 25-40g of protein post-workout (within 2 hours) and spread the rest evenly across your other meals. A casein-rich meal before bed can also aid overnight recovery."
      },
      {
        q: "Should I spread protein across meals?",
        a: "Yes. Research from the ISSN shows that eating 25-40g of protein per meal, spaced every 3-4 hours, is the most effective way to maximize muscle protein synthesis throughout the day."
      },
      {
        q: "Can I get all my protein from food without supplements?",
        a: "Absolutely. Supplements like whey protein are just convenient food. If you can meet your target through chicken, eggs, dal, paneer, and soya, you don't need powder."
      }
    ];

    if (dietType === "vegetarian" || dietType === "vegan") {
      faqs.push({
        q: "Do vegetarians need more protein?",
        a: "Yes. Plant proteins have lower DIAAS scores, meaning your body absorbs less of them per gram. We've adjusted your target upward by 20% to compensate. Focus on combining sources: dal + rice, soya chunks, paneer, and tofu."
      });
    }

    if (age >= 60) {
      faqs.push({
        q: "Why do older adults need more protein?",
        a: "After 60, muscles become resistant to protein's anabolic signals (anabolic resistance). Research shows older adults need 20% more protein to achieve the same muscle-building effect as younger people. Your target already includes this adjustment."
      });
    }

    if (dailyProtein >= 180) {
      faqs.push({
        q: "Is eating this much protein bad for my kidneys?",
        a: "In healthy individuals with no pre-existing kidney conditions, high-protein diets are safe. A 2016 review found no adverse effects from intakes up to 2.5g/kg in trained athletes. However, if you have kidney disease, consult your doctor first."
      });
    }

    if (goal === "fatLoss") {
      faqs.push({
        q: "Will eating more protein make me gain fat?",
        a: "No. Protein has the highest thermic effect of food (you burn 25-30% of its calories just digesting it). High protein diets actually support fat loss by preserving muscle during a calorie deficit and increasing satiety."
      });
    }

    if (goal === "muscleGain") {
      faqs.push({
        q: "Do I need protein every 2-3 hours to build muscle?",
        a: "No, this is an old myth. What matters most is your total daily protein. Spreading it across 3-5 meals is optimal, but you don't need to force-feed yourself every 2 hours."
      });
    }

    return faqs;
  };

  const faqs = getFaqs();

  return (
    <div className="my-12">
      <h2 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#17211c" }} className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`border rounded-xl overflow-hidden transition-colors ${
                isOpen ? "border-[#0f7a5a] bg-background-alt shadow-sm" : "border-border bg-white hover:border-border-light"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f7a5a] rounded-xl"
              >
                <span className="font-medium text-ink pr-4">{faq.q}</span>
                {isOpen ? <ChevronUp size={20} className="text-[#0f7a5a] flex-shrink-0" /> : <ChevronDown size={20} className="text-ink-muted flex-shrink-0" />}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-ink-soft text-sm leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
