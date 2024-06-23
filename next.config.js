/** @type {import('next').NextConfig} */
// biome-ignore lint/correctness/noNodejsModules: <explanation>
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
