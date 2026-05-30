import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// ─────────────────────────────────────────────────────────────────────────────
// ADD this to the `images.remotePatterns` array in your next.config.js/ts
// If remotePatterns doesn't exist yet, create it as shown below.
// ─────────────────────────────────────────────────────────────────────────────

// next.config.js (full example if starting from scratch):
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ← ADD THIS ENTRY for Cloudflare R2 images
      {
        protocol: "https",
        hostname: "pub-cfbcca8550f5404f92083870525d6d19.r2.dev",
        pathname: "/ingredients/**",
      },
      // ... any other existing remotePatterns stay here
    ],
  },
};

module.exports = nextConfig;

// ─────────────────────────────────────────────────────────────────────────────
// If you already have a next.config.js with images.remotePatterns,
// just add the object above into the existing array. Don't replace the file.
// ─────────────────────────────────────────────────────────────────────────────
