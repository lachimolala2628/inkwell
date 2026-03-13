import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'covers.openlibrary.org' },
      { protocol: 'https', hostname: 'x2s3amoh3gxzfcyb.public.blob.vercel-storage.com' },
    ]
  }
};

export default nextConfig;
