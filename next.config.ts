import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
