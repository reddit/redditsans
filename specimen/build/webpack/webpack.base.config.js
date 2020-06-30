const path = require("path")
const paths = require("../../config/paths")
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default
const ImageminWebP = require("imagemin-webp")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ZipPlugin = require('zip-webpack-plugin')

const font = require("../../src/11ty/_data/font")

module.exports = {
  entry: {
    main: [
      path.resolve(paths.srcAssets, "js/main.js"),
      path.resolve(paths.srcAssets, "style/main.sass"),
    ],
    fonts: path.resolve(paths.srcAssets, "style/fonts.sass"),
    subsets: path.resolve(paths.srcAssets, "style/subsets.sass"),
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
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: "./src/assets/images/**/*.{png,jpg,jpeg}",
        //   to: "./assets/images/[name].webp",
        // },
        {
          from: "../documents/",
          to: "./",
        },
        {
          from: "../fonts/",
          to: "./",
          transformPath(targetPath, absPath) {
            // Fonts to folders
            if (targetPath.match(/\.(woff2|woff|eot)$/)) {
              if (targetPath.match(/RedditSans-[A-F][A-Z]/)) {
                const set = targetPath.match(/RedditSans-([A-F])[A-Z]/)[1]
                return path.join("fonts", "web", "subset", set, targetPath)
              } else {
                return path.join("fonts", "web", "full", targetPath)
              }
            }

            if (targetPath.match(/\.ttf$/)) {
              return path.join("fonts", "desktop", targetPath)
            }

            if (targetPath.match(/\.pdf$/)) {
              return path.join("fonts", "specimen", targetPath)
            }

            return targetPath
          }
        },
      ]
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

      pathMapper: function(assetPath) {
        if (assetPath.startsWith('assets/')) {
          assetPath = path.join('fonts', path.basename(assetPath))
        }

        if (assetPath.match(/\.css$/)) {
          assetPath = path.join("css", path.basename(assetPath))
        }

        assetPath = assetPath.replace(/[a-f0-9]+\.css/, "css")

        return assetPath
      },
    })
  ],
}
