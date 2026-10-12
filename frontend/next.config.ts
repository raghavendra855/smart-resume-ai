import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['pdf-parse', 'mammoth'],
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${backendUrl}/api/:path*`,
        },
      ],
      afterFiles: [
        {
          source: '/resume-analyzer',
          destination: '/analyzer',
        },
        {
          source: '/skill-verification',
          destination: '/skills',
        },
        {
          source: '/job-search',
          destination: '/jobs',
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
