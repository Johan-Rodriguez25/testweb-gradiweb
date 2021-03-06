const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'build.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        type: 'asset',
        test: /\.(png|jpg|gif)$/i
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
