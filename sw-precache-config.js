module.exports = {
  staticFileGlobs: [
    './build/**/*(*.html !(404.html))',
    './build/images/**.*',
    './build/static/**',
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: './build/service-worker.js',
  // For unknown URLs, fallback to the index page
  navigateFallback: './200.html',
  // Ignores URLs starting from /__ (useful for Firebase):
  // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
  navigateFallbackWhitelist: [/^(?!\/__).*/],
  // Don't precache sourcemaps (they're large) and build asset manifest:
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
  stripPrefix: './build'
}
