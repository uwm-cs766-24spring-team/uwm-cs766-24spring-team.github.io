// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextra = require('nextra')(nextConfig);

module.exports = withNextra();
