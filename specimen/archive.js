const fs = require("fs")
const archiver = require("archiver")
const font = require("./src/site/_data/font")

const dist = `./dist/Reddit Sans ${font.version}.zip`
const output = fs.createWriteStream(dist)
const archive = archiver("zip", { zlib: { level: 9 } })

output.on("close", function () {
  console.log(`Archived fonts to ${dist}`)
  console.log((archive.pointer() / 1000 / 1000).toFixed(1) + "MB")
})

archive.pipe(output)

archive.directory("./dist/fonts/desktop", "fonts/desktop")
archive.directory("./dist/fonts/web", "fonts/web")
archive.directory("../documents", false)

archive.finalize()
