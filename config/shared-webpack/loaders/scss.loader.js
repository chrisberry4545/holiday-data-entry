const autoprefixer = require('autoprefixer');

const scssLoader = ({partnerName}) => ({
  test: /\.scss$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('sass-loader'),
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader: 'replace-string-loader',
      options: {
          search: '<!--partnerName--settings-->',
          replace: `${partnerName}/_settings.${partnerName}`,
          flags: 'g',
          file: true
      },
    },
  ],
});

module.exports = scssLoader;
