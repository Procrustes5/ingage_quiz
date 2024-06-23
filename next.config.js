/** @type {import('next').NextConfig} */

// biome-ignore lint/correctness/noNodejsModules: <explanation>
const path = require("node:path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    console.log("Webpack: ", config.resolve.alias);
    return config;
  },
};

module.exports = nextConfig;
