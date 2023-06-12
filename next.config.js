/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "iili.io"],
  },
  swcMinify: true,
};


module.exports = nextConfig;
