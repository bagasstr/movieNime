/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samehadaku.world",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
