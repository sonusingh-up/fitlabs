import type { Metadata } from "next";
import type { ReactNode } from "react";
import SkinHeader from "@/components/layout/SkinHeader";
import SkinFooter from "@/components/layout/SkinFooter";

const SKIN_URL = "https://skin.fitlabreviews.com";
const SKIN_OG_IMAGE = "https://fitlabreviews.com/logo-banner.svg";

// WebSite schema scoped to the skin subdomain.
// Tells Google this is a distinct site entity within the Fitlabreviews publisher.
const skinWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SKIN_URL}/#website`,
  url: SKIN_URL,
  name: "Fitlabreviews Skin",
  description:
    "Evidence-led skincare guides, ingredient profiles, condition breakdowns, and daily routines. Science-first skin health — editorially independent.",
  publisher: {
    // Shared publisher entity with the main site
    "@id": "https://fitlabreviews.com/#organization",
  },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  // Override root metadataBase so all skin canonical/OG URLs resolve to the subdomain
  metadataBase: new URL(SKIN_URL),

  title: {
    default: "Skin Health — Evidence-Led Skincare · Fitlabreviews",
    // Page titles: "Retinol Guide · Fitlabreviews Skin"
    template: "%s · Fitlabreviews Skin",
  },
  description:
    "Evidence-led skincare guides, ingredient breakdowns, daily routines, and condition profiles. Science-first skin health for informed decisions.",

  keywords: [
    "skincare",
    "skin health",
    "skincare ingredients",
    "retinol guide",
    "niacinamide",
    "skin routines",
    "acne treatment",
    "eczema skincare",
    "evidence-based skincare",
    "dermatology research",
    "skincare science",
  ],

  authors: [{ name: "Fitlabreviews Editorial" }],
  creator: "Fitlabreviews",
  publisher: "Fitlabreviews",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SKIN_URL,
    siteName: "Fitlabreviews Skin",
    title: "Skin Health — Evidence-Led Skincare · Fitlabreviews",
    description:
      "Research-grade skincare guides, ingredient profiles, and condition breakdowns. Evidence-led, editorially independent.",
    images: [
      {
        url: SKIN_OG_IMAGE,
        width: 1200,
        height: 300,
        alt: "Fitlabreviews Skin — Evidence-Led Skincare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fitlabreviews Skin — Evidence-Led Skincare",
    description:
      "Research-grade skincare guides, ingredient profiles, and condition breakdowns. Evidence-led, editorially independent.",
    images: [SKIN_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Canonical is set per-page. Never set alternates here — it propagates to ALL children.
};

export default function SkinLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* WebSite schema — once, in the shared layout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skinWebSiteSchema) }}
      />
      <SkinHeader />
      <main className="flex-1">{children}</main>
      <SkinFooter />
    </>
  );
}
