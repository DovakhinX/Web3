/** @type {import('next').NextConfig} */
const nextConfig =  {
    webpack: (config, { isServer }) => {
    // Add a rule to handle JSON imports
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: 'json-loader',
    });

    return config;
  },


}

module.exports = nextConfig
