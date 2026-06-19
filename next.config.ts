import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev https://www.google-analytics.com https://m.media-amazon.com https://szpdxovusioijennckfg.supabase.co",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
      "font-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-cfbcca8550f5404f92083870525d6d19.r2.dev",
        pathname: "/ingredients/**",
      },
      {
        protocol: "https",
        hostname: "szpdxovusioijennckfg.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/reviews/wpi-vs-wpc-protein",
        destination: "/research/wpi-vs-wpc-protein",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
