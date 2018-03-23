const jsLoader = ({cacheDirectory, compact, paths}) => (
  // Process JS with Babel.
  {
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory,
      compact,
    },
  }
);

module.exports = jsLoader;
