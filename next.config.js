/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This configuration allows using NextJS on GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
}

module.exports = nextConfig