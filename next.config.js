/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
};

module.exports = nextConfig;
