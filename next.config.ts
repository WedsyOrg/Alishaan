import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2nxsp2llz8pyi.cloudfront.net', // Your CloudFront domain
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alishaan-wedding-assets.s3.ap-south-1.amazonaws.com', // Fallback to S3
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
