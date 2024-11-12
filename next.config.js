/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/com.giftcard/*',
      },
    ],
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
