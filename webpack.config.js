const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
  const devMode = env.NODE_ENV === 'development';

  return {
    mode: env.NODE_ENV,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
                // data: "@import './src/index.scss';"
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader'
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|pdf|ico)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'app.css'
      }),
      new CopyPlugin([{ from: '_redirects' }])
    ],
    devServer: {
      historyApiFallback: true
    }
  };
};

//@import "~font-awesome/css/font-awesome.css";
