/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '/avatars.githubusercontent.com',
        port: '',
        pathname: 'u/101445847/**',
      },
    ],
  },
  

}

module.exports = nextConfig
module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
