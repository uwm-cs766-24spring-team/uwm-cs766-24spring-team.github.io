// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
};

const withNextra = require('nextra')(nextConfig);

module.exports = withNextra();
