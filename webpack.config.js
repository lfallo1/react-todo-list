var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.js',
    'script!foundation-sites/dist/foundation.js',
    './src/main.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/js/main.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
