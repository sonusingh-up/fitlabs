import type { Metadata } from "next";
import MacrosCalculatorClient from "./MacrosCalculatorClient";

export const metadata: Metadata = {
  title: "🔥 Free Macros Calculator — Protein, Carbs, and Fat Targets",
  description:
    "Calculate your exact daily protein, carb, and fat targets based on your goal, diet style, body weight, and training days. Free, instant, and personalized.",
  alternates: { canonical: "/tools/free/macros-calculator" },
  openGraph: {
    title: "🔥 Free Macros Calculator — Protein, Carbs, and Fat Targets",
    description:
      "Calculate your exact daily protein, carb, and fat targets based on your goal, diet style, body weight, and training days. Free, instant, and personalized.",
    url: "https://fitlabreviews.com/tools/free/macros-calculator",
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Macros Calculator",
  url: "https://fitlabreviews.com/tools/free/macros-calculator",
  applicationCategory: "HealthApplication",
  description:
    "Calculate your daily macro targets (protein, carbs, and fats) based on weight, training days, diet style, and fitness goal.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between macros and calories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calories determine whether you lose, maintain, or gain weight. Macros (macronutrients: protein, carbs, and fat) determine *what kind* of weight you lose or gain. Protein preserves or builds muscle, carbs fuel training, and fats support hormone function.",
      },
    },
    {
      "@type": "Question",
      name: "Why is protein so high on fat loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you are in a calorie deficit, your body is prone to burning muscle tissue for energy. High protein intake (e.g. 2.0–2.6g per kg of bodyweight) signals your body to retain muscle, ensuring that the weight you lose is fat. Protein is also highly satiating, which helps control hunger.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to hit my macros exactly every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Consistency over perfection is key. Hitting within ±10% of your targets 80% of the time will yield the exact same results as trying to hit exact numbers daily. Focus on hitting your daily protein and calorie targets first, and let carbs and fats have some flexibility.",
      },
    },
    {
      "@type": "Question",
      name: "What's macro cycling and should I do it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Macro cycling involves eating more carbs (and fewer fats) on days you train to fuel workouts and replenish glycogen, and fewer carbs (with more fats) on rest days when energy demand is lower. While not strictly required, it helps optimize training performance and adherence.",
      },
    },
    {
      "@type": "Question",
      name: "Is a vegan diet enough to build muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can build muscle on a plant-based diet. However, vegan protein sources are often less bioavailable and have lower leucine content, so vegans should target slightly higher overall protein intakes (1.8–2.1g per kg) and combine varied sources to ensure a complete amino acid profile.",
      },
    },
  ],
};

export default function MacrosCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MacrosCalculatorClient />
    </>
  );
}
