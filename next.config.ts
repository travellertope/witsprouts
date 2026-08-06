import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // TODO: add the WordPress media host once headless WP is connected.
    ],
  },
};

export default nextConfig;
