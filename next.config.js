/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return [
      // Redireccionamiento de paginas
      {
        source: '/products',
        destination: '/products/Products',
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
  },
  images: {
    domains: ['m.media-amazon.com']
  },
}

module.exports = nextConfig;

