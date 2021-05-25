const path = require("path")
const paths = require("../../config/paths")
const merge = require("webpack-merge")
const webpackBaseConfig = require("./webpack.base.config.js")
const chokidar = require("chokidar")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackAssetsManifest = require("webpack-assets-manifest")

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  output: {
    publicPath: "/assets/",
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: [/.css$|.sass$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true },
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    before(app, server) {
      chokidar.watch(["./dist/**/*.html"]).on("all", function () {
        server.sockWrite(server.sockets, "content-changed")
      })
    },
    hot: true,
    overlay: true,
    contentBase: paths.dist,
    index: "index.html",
    host: "0.0.0.0",
    port: 3001,
    open: false,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new WebpackAssetsManifest({
      output: path.resolve(paths.src, "11ty/_data/assets.json"),
      publicPath: "/assets/",
      writeToDisk: true,
      apply(manifest) {
        manifest.set("year", new Date().getFullYear())
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
