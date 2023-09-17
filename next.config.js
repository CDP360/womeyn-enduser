/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    customKey: 'my-value',
  },
  distDir: 'build',
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateEtags: false,

}

module.exports = nextConfig
