import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Protein Calculator — How Much Protein Do You Need? | FitLab Reviews",
  description: "Free protein calculator for Indians. Get your personalized daily protein target based on goal, activity, and diet type. Vegetarian-aware, science-backed, ISSN 2024.",
  alternates: { canonical: "https://fitlabreviews.com/tools/protein-calculator" },
  openGraph: {
    title: "Protein Calculator | FitLab Reviews",
    description: "Calculate your exact daily protein needs — with Indian food examples, vegetarian adjustments, and supplement gap analysis.",
    url: "https://fitlabreviews.com/tools/protein-calculator",
    type: "website",
    images: ["/assets/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Calculator | FitLab Reviews",
    description: "Calculate your exact daily protein needs — with Indian food examples, vegetarian adjustments, and supplement gap analysis.",
    images: ["/assets/og-image.png"],
  },
};

const proteinSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Protein Calculator",
  description: "Free protein calculator for Indians. Get your personalized daily protein target based on goal, activity, and diet type. Vegetarian-aware, science-backed, ISSN 2024.",
  url: "https://fitlabreviews.com/tools/protein-calculator",
  author: { "@type": "Organization", "name": "FitLab Reviews" }
};

export default function ProteinCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(proteinSchema) }}
      />
      <CalculatorClient />
    </>
  );
}
