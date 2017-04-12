import path from 'path';

module.exports = {
  context: __dirname,
  entry: {
    bundle: './index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].umd.js',
    library: 'coreLessTransportConsole',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {
              modules: false,
              targets: {
                browsers: [
                  'last 2 versions'
                ]
              }
            }]
          ],
          babelrc: false
        }
      }
    ]
  },
  externals: {
    '@consoless/core': {
      commonjs: '@consoless/core',
      amd: '@consoless/core',
      root: 'coreLess'
    }
  }
};
