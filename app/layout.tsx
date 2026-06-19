import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Newsreader, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CookieConsent from "@/components/ui/CookieConsent";

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
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fitlabreviews — Evidence-Led Supplement Reviews",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitlabreviews — Evidence-Led Supplement Reviews",
    description: "Research-grade supplement reviews. No bias.",
    images: ["/opengraph-image"],
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-N23DKB7H8K";

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
      className={`${playfair.variable} ${dmSans.variable} ${hankenGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#ffffff" }}
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
        {/* Google Consent Mode v2 — default to denied until user accepts */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted',
            });
          `}
        </Script>
        {/* Google Analytics — only render when GA_ID is available */}
        {GA_ID && (
          <>
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
          </>
        )}
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-hanken), var(--font-hanken), system-ui, sans-serif",
          backgroundColor: "#ffffff",
          color: "#17211c",
        }}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        {/* Emil Kowalski: activate .animate-fade-up scroll entrances site-wide */}
        <ScrollReveal />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
