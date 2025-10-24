import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['finnhub.io', 's3.amazonaws.com'],
    unoptimized: true
  },
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // AWS Amplify specific configuration
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  // Ensure environment variables are loaded
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV
  }
};

export default nextConfig;
