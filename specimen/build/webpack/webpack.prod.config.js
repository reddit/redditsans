const path = require("path")
const paths = require("../../config/paths")
const merge = require("webpack-merge")
const webpackBaseConfig = require("./webpack.base.config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const cssnano = require("cssnano")
const WebpackAssetsManifest = require("webpack-assets-manifest")

const autoprefixer = require("autoprefixer")

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    path.resolve(paths.src, "**/*.pug"),
    path.resolve(paths.src, "**/*.js"),
    path.resolve(paths.src, "**/*.json"),
    path.resolve(paths.src, "**/*.svg"),
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    filename: "assets/js/[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: [/.css$|.sass$/],
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              parser: "postcss-scss",
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[chunkhash].css",
    }),
    new WebpackAssetsManifest({
      output: path.resolve(paths.src, "11ty/_data/assets.json"),
      publicPath: "/",
      writeToDisk: true,
      apply(manifest) {
        manifest.set("year", new Date().getFullYear())
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
      }),
    ],
  },
})
