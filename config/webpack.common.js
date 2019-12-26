const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const helpers = require("./helpers");

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

module.exports = {
  entry: {
    app: [helpers.root("client/app/index.js")]
  },

  output: {
    path: helpers.root("dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".json", ".css", ".scss", ".html"],
    alias: {
      app: "client/app",
      assets: "../public/assets",
      uploads: path.resolve(__dirname, "../public/uploads")
    },
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: helpers.root("client"),
        loader: "babel-loader"
      },

      // SCSS files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer]
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              fallback: 'file-loader',
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root("public/index.html"),
      inject: "body"
    }),

    new ExtractTextPlugin({
      filename: "css/[name].[hash].css",
      disable: !isProd
    }),

    new CopyWebpackPlugin([
      {
        from: helpers.root("public")
      }
    ])
  ]
};
