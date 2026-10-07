import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Two root layouts (Korean app/(ko), English app/[lang]) → one shared 404 in app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  images: {
    // Screenshots are pre-converted to WebP by scripts/prepare-assets.mjs,
    // so skip Vercel image optimization (keeps the Hobby plan quota untouched).
    unoptimized: true,
  },
  async redirects() {
    // Project pages moved from /work to /projects; keep old shared links working.
    return [
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/work/:slug", destination: "/projects/:slug", permanent: true },
      { source: "/en/work", destination: "/en/projects", permanent: true },
      { source: "/en/work/:slug", destination: "/en/projects/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
