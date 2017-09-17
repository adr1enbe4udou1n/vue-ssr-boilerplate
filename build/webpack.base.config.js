require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

const webpackDevServerPort = parseInt(process.env.WEBPACKDEVSERVER_PORT || '8080', 10)
const production = process.env.NODE_ENV === 'production'

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: production ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: production,
                sourceMap: true,
                importLoaders: 1
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')
                ]
              }
            }, {
              loader: 'resolve-url-loader?sourceMap'
            }, {
              loader: 'sass-loader',
              options: {
                precision: 8,
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader?cacheDirectory',
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
              publicPath: '/'
            }
          },
          {
            loader: 'img-loader',
            options: {
              enabled: production
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true,
      disable: !production
    }),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackNotifierPlugin()
  ],
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    compress: true,
    quiet: true,
    port: webpackDevServerPort
  }
}

let plugins = []

if (production) {
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
} else {
  plugins = [
    new FriendlyErrorsWebpackPlugin()
  ]
}

module.exports.plugins.push(...plugins)
