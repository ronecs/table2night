module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@table2night': './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
