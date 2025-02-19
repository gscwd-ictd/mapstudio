/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lamoderno.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
