import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitlabreviews.com"),
  title: {
    default: "Fitlabreviews — Evidence-Led Supplement Reviews",
    template: "%s · Fitlabreviews",
  },
  description:
    "Research-grade supplement reviews, ingredient analysis, and wellness guidance for smarter buying decisions. Evidence-led, editorially independent. No bias.",
  keywords: [
    "supplement reviews",
    "protein powder",
    "creatine",
    "pre-workout",
    "wellness",
    "fitness",
    "evidence-based supplements",
    "USA supplements",
    "best whey protein USA",
  ],
  authors: [{ name: "Fitlabreviews Editorial" }],
  creator: "Fitlabreviews",
  publisher: "Fitlabreviews",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitlabreviews.com",
    siteName: "Fitlabreviews",
    title: "Fitlabreviews — Evidence-Led Supplement Reviews",
    description:
      "Research-grade supplement reviews, ingredient analysis, and wellness guidance. Reviews · No Bias.",
    images: [
      {
        url: "/logo-banner.svg",
        width: 1200,
        height: 300,
        alt: "Fitlabreviews — Reviews · No Bias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitlabreviews — Evidence-Led Supplement Reviews",
    description: "Research-grade supplement reviews. No bias.",
    images: ["/logo-banner.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ⚠ NO alternates.canonical here — root layout canonical propagates to ALL
  // child pages and overrides their individual canonicals. Each page sets its
  // own via `alternates: { canonical: "/its-own-path" }` in its own metadata.
};

const GA_ID = "G-N23DKB7H8K";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fitlabreviews.com/#organization",
  name: "Fitlabreviews",
  url: "https://fitlabreviews.com",
  logo: {
    "@type": "ImageObject",
    url: "https://fitlabreviews.com/logo-banner.svg",
    width: 148,
    height: 36,
  },
  description:
    "Evidence-led supplement reviews, ingredient analysis, and wellness guidance for the American and global market. Editorially independent.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "editorial@fitlabreviews.com",
    contactType: "Editorial",
  },
  sameAs: ["https://www.linkedin.com/in/pankaj-singh-77b93a368/"],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fitlabreviews.com/#website",
  url: "https://fitlabreviews.com",
  name: "Fitlabreviews",
  description:
    "Research-grade supplement reviews, ingredient analysis, and wellness guidance. Evidence-led, editorially independent.",
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://fitlabreviews.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#F2EBD9" }}
    >
      <head>
        {/* JSON-LD: Organization + WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {/* RSS Feed discovery */}
        <link rel="alternate" type="application/rss+xml" title="Fitlabreviews — Latest Reviews" href="/feed.xml" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          backgroundColor: "#F2EBD9",
          color: "#1A1714",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
