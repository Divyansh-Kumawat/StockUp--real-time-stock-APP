import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['finnhub.io', 's3.amazonaws.com'],
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Allow deployment to AWS Amplify
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Ensure environment variables are loaded
  env: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
};

export default nextConfig;
