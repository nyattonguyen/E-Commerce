/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: "https://localhost:3000",
  }
}

module.exports = nextConfig
