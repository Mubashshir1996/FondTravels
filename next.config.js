const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["my-lib"]
  },
  // swcMinify: false,
};

module.exports = nextConfig;