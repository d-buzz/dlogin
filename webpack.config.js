const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve(__dirname, "./src/index-popup.js"),
    options: path.resolve(__dirname, "./src/index-options.js"),
    foreground: path.resolve(__dirname, "./src/index-foreground.js")
  },
  stats: {
    logging: 'info', //  errors, warnings, and info messages
    warnings: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                {
                  'plugins': [
                    '@babel/plugin-proposal-class-properties',
                  ]
                }
              ],
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: 'src/popup.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      filename: 'options.html',
      template: 'src/options.html',
      chunks: ['options']
    }),
    new HtmlWebpackPlugin({
      filename: 'foreground.html',
      template: 'src/foreground.html',
      chunks: ['foreground']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: '[name].[ext]' },
        { from: 'src/background.js', to: '[name].[ext]' },
        { from: 'src/inject_script.js', to: '[name].[ext]' },
      ]
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components')
    },
  }
}