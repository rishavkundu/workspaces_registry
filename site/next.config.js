/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'NousVM Registry',
    description: 'Custom registry of Nous workspaces for Kasm.',
    icon: '/favicon.ico',
    listUrl: 'https://nousvm.com/',
    contactUrl: 'https://nousvm.com/',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
