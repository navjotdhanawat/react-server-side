import path from 'path';
const webpack = require('webpack');
import nodeExternals from 'webpack-node-externals';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
  filename: '[name].fonts.css',
  allChunks: true
});
const extractSCSS = new ExtractTextPlugin({
  filename: '[name].styles.css',
  allChunks: true
});

const client = {
  entry: {
    js: './src/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
      {
        test: /\.(scss)$/,
        use: ['css-hot-loader'].concat(extractSCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { alias: { '../img': '../public/img' } }
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
          test: /\.(png|jpg|jpeg|gif|ico)$/,
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
    ],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      extractCSS,
      extractSCSS
    ]
};

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: './src/server.js',
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'server-es5.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

export default [client, server];
