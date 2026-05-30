import type { Metadata } from "next";
import BmrCalculatorClient from "./BmrCalculatorClient";

export const metadata: Metadata = {
  title: "🔥 Free BMR Calculator — Know Your Exact Calorie Target",
  description:
    "Most calculators stop at BMR. This one adds a plateau predictor, NEAT booster, and meal plan — free.",
  alternates: { canonical: "https://fitlabreviews.com/tools/free/bmr-calculator" },
  openGraph: {
    title: "🔥 Free BMR Calculator — Know Your Exact Calorie Target",
    description:
      "Calculate your Basal Metabolic Rate and TDEE using the Mifflin-St Jeor equation. Free, instant, no sign-up required.",
    url: "https://fitlabreviews.com/tools/free/bmr-calculator",
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BMR Calculator",
  url: "https://fitlabreviews.com/tools/free/bmr-calculator",
  applicationCategory: "HealthApplication",
  description:
    "Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BMR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMR (Basal Metabolic Rate) is the number of calories your body needs to maintain basic physiological functions — breathing, circulation, and cell production — at complete rest.",
      },
    },
    {
      "@type": "Question",
      name: "Which BMR formula does this calculator use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This calculator uses the Mifflin-St Jeor equation (1990), which is the most validated formula for estimating BMR in the general population, outperforming the older Harris-Benedict equation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between BMR and TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMR is your baseline calorie burn at rest. TDEE (Total Daily Energy Expenditure) multiplies BMR by an activity factor to estimate total daily calories burned, including exercise and daily movement.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is this BMR calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mifflin-St Jeor equation is accurate within ±10% for most people. It may underestimate BMR for very muscular individuals and overestimate for those with high body fat.",
      },
    },
  ],
};

export default function BmrCalculatorPage() {
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
      <BmrCalculatorClient />
    </>
  );
}
