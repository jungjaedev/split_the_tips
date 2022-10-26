module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@data': './src/data',
            '@components': './src/components',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
