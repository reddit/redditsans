// Create a downloadable ZIP archive of fonts and additional resources

import fs from "fs"
import archiver from "archiver"

import("./src/_/data/font.js").then(({ default: { version } }) => {
  const dist = `./dist/Reddit Sans ${version}.zip`
  const output = fs.createWriteStream(dist)
  const archive = archiver("zip", { zlib: { level: 9 } })

  output.on("close", function () {
    console.log(`Archived fonts to ${dist}`)
    console.log((archive.pointer() / 1000 / 1000).toFixed(1) + "MB")
  })

  archive.pipe(output)

  archive.directory("./dist/fonts/reddit-mono/desktop", "Reddit Mono/desktop")
  archive.directory("./dist/fonts/reddit-mono/web", "Reddit Mono/web")

  archive.directory("./dist/fonts/reddit-sans/desktop", "Reddit Sans/desktop")
  archive.directory("./dist/fonts/reddit-sans/web", "Reddit Sans/web")

  archive.directory(
    "./dist/fonts/reddit-sans-condensed/desktop",
    "Reddit Sans Condensed/desktop"
  )
  archive.directory(
    "./dist/fonts/reddit-sans-condensed/web",
    "Reddit Sans Condensed/web"
  )

  archive.directory("../documentation/", false)
  archive.file("../LICENSE.md", false)
  archive.file("../FONTLOG.txt", false)

  archive.file("./dist/assets/css/fonts.css", { name: "Resources/fonts.css" })
  archive.file("./dist/assets/css/subsets.css", {
    name: "Resources/subsets.css",
  })
  archive.file("./dist/assets/css/variants.css", {
    name: "Resources/variants.css",
  })

  archive.finalize()
})
