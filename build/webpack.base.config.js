const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/dist/'
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
                ident: 'postcss',
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
    new FriendlyErrorsPlugin(),
    new WebpackNotifierPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map'
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
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports.plugins.push(...plugins)
