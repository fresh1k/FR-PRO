const CracoLessPlugin = require('craco-less');

const AntVariables = {
    '@primary-color': '#1DA57A',
}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: AntVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};