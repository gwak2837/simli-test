module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: process.env.NODE_ENV === 'development',
        pure: process.env.NODE_ENV === 'production',
      },
    ],
  ],
}
