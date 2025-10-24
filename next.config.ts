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
  // AWS Amplify specific configuration
  experimental: {
    appDir: true,
  },
  distDir: '.next',
  // Required for AWS Amplify
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://production.d6r1hwp4orqoq.amplifyapp.com' : undefined,
  // Ensure environment variables are loaded
  env: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
};

export default nextConfig;
