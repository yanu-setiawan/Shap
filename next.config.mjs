/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "img.clerk.com", "subdomain"],
  },
  transpilePackages: ["framer-motion", "motion"],
  reactStrictMode: false,
};

export default nextConfig;
