const nextConfig = require('./next.config')

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: nextConfig.i18n.locales,
  pseudoLocale: 'pseudo',
  sourceLocale: nextConfig.i18n.defaultLocale,
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [],
  experimental: {
    extractor: {
      // glob pattern of entrypoints
      // this will find all nextjs pages
      entries: ['<rootDir>/src/pages/**/*.tsx'],
      // output pattern, this instruct extractor where to store catalogs
      output: '<rootDir>/src/locales/{entryDir}/{entryName}/{locale}'
    }
  }
}
