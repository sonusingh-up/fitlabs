import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-cfbcca8550f5404f92083870525d6d19.r2.dev",
        pathname: "/ingredients/**",
      },
    ],
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
