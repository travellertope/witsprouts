import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder imagery until WordPress media is wired up.
      { protocol: "https", hostname: "images.unsplash.com" },
      // TODO: add the WordPress media host once headless WP is connected.
    ],
  },
};

export default nextConfig;
