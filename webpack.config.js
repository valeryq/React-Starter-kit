const webpack = require('webpack');

// Get environment for build types
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: './src/app',
  },

  output: {
    path: __dirname + '/public/assets',
    filename: "[name].js",
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1'] },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
    new webpack.NoErrorsPlugin(),
  ],

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'eval' : null,

  devServer: {
    port: 3000,
    contentBase: __dirname + '/public',
    historyApiFallback: true,
  }
};

// If environment === production, then include minification plugin and drop console_* from code and hide warnings
if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    })
  );
}
