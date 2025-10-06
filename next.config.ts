import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vfelwsk30v.ufs.sh',
        pathname: '/f/**',
      },
    ]
  }
};

export default nextConfig;
