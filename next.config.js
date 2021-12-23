module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ]
    );

    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};