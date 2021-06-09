/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

module.exports = withPWA({
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
  poweredByHeader: process.env.NODE_ENV === 'development',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: process.env.NODE_ENV === 'development',
})
