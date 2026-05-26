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
    "India supplements",
    "best whey protein India",
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
  alternates: {
    canonical: "https://fitlabreviews.com",
  },
};

const GA_ID = "G-N23DKB7H8K";

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
