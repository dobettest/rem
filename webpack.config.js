// var webpack = require('webpack')
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin')//vue-cli 内置的依赖版本5~
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new htmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html")
  }),
  new copyWebpackPlugin([{
    from: path.resolve(__dirname, "./src/assets"),
    to:'assets'
  }])
  ],
  resolve: {

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },

      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              outputPath: 'assets/images/',
              fallback: 'file-loader'
            },
          }
        ]
      },
    ]
  }
};
