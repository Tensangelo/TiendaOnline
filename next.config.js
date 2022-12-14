/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
  },
  images: {
    domains: ['m.media-amazon.com']
  },
}

module.exports = nextConfig;

