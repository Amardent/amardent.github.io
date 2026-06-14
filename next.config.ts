import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    // Static export can't use the default image optimization server, so we
    // serve images as-is. Required for next/image to work with `output: export`.
    unoptimized: true,
  },
};

export default nextConfig;
