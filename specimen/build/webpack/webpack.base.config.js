const path = require("path")
const paths = require("../../config/paths")
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default
const ImageminWebP = require("imagemin-webp")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ZipPlugin = require("zip-webpack-plugin")
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")

const font = require("../../src/11ty/_data/font")

module.exports = {
  entry: {
    main: [
      path.resolve(paths.srcAssets, "js/main.js"),
      path.resolve(paths.srcAssets, "style/main.sass"),
    ],
  },
  output: {
    path: path.resolve(paths.dist),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "../documents/",
          to: "./",
        },
        {
          from: "../fonts/",
          to: "./",
          transformPath(src) {
            const varRX = /(Chocolate|Vanilla|Fudge|Strawberry)/
            const setRX = /RedditSans-([A-F])[A-Z]/
            const cndRX = /(Condensed)/

            let file = src.match(/[^\/]+$/)[0]
            let variant = (src.match(varRX) || [])[1]
            let subset = (src.match(setRX) || [])[1]
            let condensed = (src.match(cndRX) || [])[1]

            if (variant) variant = variant.toLowerCase()

            // Move webfonts to appropriate "web" subdirectories
            if (file.match(/\.(woff2|woff)$/)) {
              if (condensed) {
                return path.join("fonts", "web", "condensed", file)
              } else if (variant) {
                return path.join("fonts", "web", "variants", variant, file)
              } else if (subset) {
                return path.join("fonts", "web", "subset", subset, src)
              } else {
                return path.join("fonts", "web", "full", src)
              }
            }

            // Move desktop fonts to "desktop" subdirectory
            if (src.match(/\.ttf$/)) {
              if (variant) {
                return path.join("fonts", "desktop", "variants", variant, file)
              } else {
                return path.join("fonts", "desktop", src)
              }
            }

            // Move PDF into "specimen" directory
            if (src.match(/\.pdf$/)) {
              return path.join("fonts", "specimen", src)
            }

            return src
          },
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminWebP({
          quality: 75,
        }),
      ],
    }),

    new ZipPlugin({
      filename: `Reddit Sans ${font.version}.zip`,
      include: [/\.(txt|pdf|css|woff2|ttf)/],
      exclude: ["fonts/archive/", /css\/main.*\.css/],
      pathPrefix: `Reddit Sans ${font.version}`,

      pathMapper: function (assetPath) {
        if (assetPath.startsWith("assets/")) {
          assetPath = path.join("fonts", path.basename(assetPath))
        }

        if (assetPath.match(/\.css$/)) {
          assetPath = path.join("css", path.basename(assetPath))
        }

        assetPath = assetPath.replace(/[a-f0-9]+\.css/, "css")

        return assetPath
      },
    }),
  ],
}
