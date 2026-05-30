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
};

export default nextConfig;
