/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/vedantsahai18.github.io/' : '',
  basePath: isProd ? '/vedantsahai18.github.io' : '',
  output: 'export'
};

module.exports = nextConfig;