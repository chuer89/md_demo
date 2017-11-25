const webpack = require('webpack');
const path = require('path');

const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  // context: path.resolve(__dirname, 'app')
  // devtool: 'eval-source-map',
  entry: {
    bundle: __dirname + '/app/main.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },

  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    port: '9001'
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "es2015", "react"
                ]
            }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css|\.scss$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, {
              loader: "sass-loader"
            }, {
              loader: "postcss-loader"
            }
        ]
      },
      {
        test: /\.md$/,
        use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
                pedantic: true,
                renderer
              }
            }
        ]
      }
    ]
  }
}