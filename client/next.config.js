/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Rewrite default API routes to use the Flask backend
const rewrites = () => {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:5000/api/:path*",
    },
  ];
};

module.exports = {
  ...nextConfig,
  async rewrites() {
    return rewrites();
  },
};
