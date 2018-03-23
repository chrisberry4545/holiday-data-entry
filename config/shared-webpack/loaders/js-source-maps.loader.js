const jsSourceMapsLoader = () => (
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
);

module.exports = jsSourceMapsLoader;
