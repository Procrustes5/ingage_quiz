/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { _isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
