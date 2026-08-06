import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // TODO: add the WordPress media host once headless WP is connected.
    ],
  },
  async redirects() {
    return [
      {
        // Nomination CTAs link here so the destination can change without
        // touching every button on the site. Once WordPress is connected,
        // this could move to a redirect manager in the plugin instead.
        source: "/2026prize",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSeRjug6AerIH9n0c8TDS6YGesaEbDI6E09TCRdG12uVqvovGQ/viewform?usp=header",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
