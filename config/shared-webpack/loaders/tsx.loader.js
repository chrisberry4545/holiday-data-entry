const tsxLoader = ({ partnerName, backendUrl }) => (
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "awesome-typescript-loader",
      },
      {
        loader: 'replace-string-loader',
        options: {
            search: '/dependency-injection/inversify.config',
            replace: `/${partnerName}/inversify.config`,
            flags: 'g',
            file: true
        },
      },
      {
        loader: 'replace-string-loader',
        options: {
          search: 'process.env.BACKEND_URL',
          replace: backendUrl,
          flags: 'g',
          file: true,
        }
      }
    ],
  }
);

module.exports = tsxLoader;
