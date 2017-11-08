const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].fonts.css');
const extractSCSS = new ExtractTextPlugin('[name].styles.css');
const Paths = {
    src : path.join( __dirname, "src" ),
    build : path.join( __dirname, "build" )
  };
const TARGET = process.env.BUILD_DEV || process.env.BUILD_PROD;

module.exports = {
  entry: {
    app: Paths.src + '/index.js'
  },
  output: {
      path: Paths.build,
      filename: "bundle.js",
      publicPath: "/"
  },
    // watch: true,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['react', 'env', "es2015", "stage-0"]
            }
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(scss)$/,
          use: ['css-hot-loader'].concat(extractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {alias: {'../img': '../public/img'}}
              },
              {
                loader: 'sass-loader'
              }
            ]
          }))
        },
        {
          test: /\.css$/,
          use: extractCSS.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.svg$/,
          use: [
            {
              // loader: 'url-loader'
              loader: 'file-loader',
              options: {
                name: './img/[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[hash].[ext]'
          }
        }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
      new webpack.NamedModulesPlugin(),
      extractCSS,
      extractSCSS,
      new HtmlWebpackPlugin(
        {
          inject: true,
          template: './public/index.html'
        }
      ),
      new CopyWebpackPlugin([
          {from: './public/img', to: 'img'}
        ],
        {copyUnmodified: false}
      )
    ]
  };
