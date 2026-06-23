import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import { getTDEECalculatorContent } from "@/lib/sanity";

// We can dynamically generate metadata if needed, but for now we'll keep the static base and override if sanity has data
export async function generateMetadata(): Promise<Metadata> {
  const content = await getTDEECalculatorContent();
  
  return {
    title: content?.seoTitle || "TDEE Calculator — Total Daily Energy Expenditure | FitLab Reviews",
    description: content?.seoDescription || "Free TDEE calculator to determine your daily calorie needs for fat loss, muscle gain, or maintenance. Includes personalized macro splits.",
    alternates: { canonical: "https://fitlabreviews.com/tools/tdee-calculator" },
    openGraph: {
      title: content?.seoTitle || "TDEE Calculator | FitLab Reviews",
      description: content?.seoDescription || "Calculate your exact daily calorie needs — with personalized macro splits for your fitness goals.",
      url: "https://fitlabreviews.com/tools/tdee-calculator",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content?.seoTitle || "TDEE Calculator | FitLab Reviews",
      description: content?.seoDescription || "Calculate your exact daily calorie needs — with personalized macro splits for your fitness goals.",
    },
  };
}

const tdeeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TDEE Calculator",
  description: "Free TDEE calculator to determine your daily calorie needs for fat loss, muscle gain, or maintenance. Includes personalized macro splits.",
  url: "https://fitlabreviews.com/tools/tdee-calculator",
  author: { "@type": "Organization", "name": "FitLab Reviews" }
};

export default async function TDEECalculatorPage() {
  const content = await getTDEECalculatorContent();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tdeeSchema) }}
      />
      <CalculatorClient sanityContent={content} />
    </>
  );
}
