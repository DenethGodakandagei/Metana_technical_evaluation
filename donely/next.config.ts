import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "randomuser.me",
      "api.dicebear.com",
      "avatars.dicebear.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  reactStrictMode: true,

 
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
