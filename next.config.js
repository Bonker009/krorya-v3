/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BACKEND_URL,
    AWS_BASE_URL: process.env.AWS_BASE_URL,
    UI_BASE: process.env.NEXTAUTH_URL
  },
  images: {
    remotePatterns: [
      {
        hostname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
