const tsLintLoader = () => (
  {
    test: [/\.ts$/, /\.tsx$/],
    enforce: 'pre',
    loader: 'tslint-loader',
    options: {
      tsConfigFile: 'tsconfig.json',
    },
  }
);

module.exports = tsLintLoader;
