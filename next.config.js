/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath for Cloudflare Pages
  basePath: '',
}

module.exports = nextConfig 