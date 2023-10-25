const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination: "/admin/desk",
};

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  rewrites: async () => [STUDIO_REWRITE],
  async redirects() {
    return [
      {
        source: "/admin/:path*",
        destination: "/admin/desk",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
