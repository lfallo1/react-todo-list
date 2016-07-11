module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname,
    filename: './public/main.js'
  },
  resolve: {
    root: __dirname + '/src',
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower)/
      }
    ]
  }
};
