const fs = require("fs")

const weights = require("../../assets/js/data/weights")
const styles = require("../../assets/js/data/styles")
const ranges = require("../../assets/js/data/ranges")
const variants = require("../../assets/js/data/variants")
const archive = require("../../assets/js/data/versions")

const cssName = "redditsans"

const getName = (str) => {
  let name = str.match(/glyphname = ([^;]+);/)[1]
  return name.replace(/"/g, "")
}

const getCode = (str) => {
  let code = str.match(/unicode = ([^;]+);/)
  return code ? code[1] : null
}

const getType = (str) => {
  let type = str.match(/glyphname = ([^;]+);/)[1]
  type = type.match(/\w+\.(.*)/)
  return type ? type[1] : null
}

const features = [
  { flavor: "vanilla", code: "", title: "Vanilla", sample: "", active: true },
  { flavor: "chocolate", code: "ss01", title: "Chocolate", sample: "gal" },
  { flavor: "strawberry", code: "ss02", title: "Strawberry", sample: "ai" },
  { flavor: "fudge", code: "ss03", title: "Fudge", sample: "IgWw" },
  { code: "zero", title: "Slashed zero", sample: "0" },
  { code: "ss04", title: "Circular Zero", sample: "0" },
  { code: "case", title: "Case Alternates", sample: "[H]" },
  { code: "subs", title: "Subscript", sample: "H2" },
  { code: "sups", title: "Superscript", sample: "H3" },
  { code: "numr", title: "Numerators", sample: "H4" },
  { code: "dnom", title: "Denominators", sample: "H5" },
  { code: "frac", title: "Fractions", sample: "1/2" },
  { code: "ordn", title: "Ordinals", sample: "8a" },
  { code: "tnum", title: "Tabular Numbers", sample: "911" },
  { code: "onum", title: "Old-style Figures", sample: "1984" },
  { code: "liga", title: "Default Ligatures", sample: "r/", active: true },
  { code: "kern", title: "Kerning", sample: "LT", active: true },
]

function getData() {
  const content = fs.readFileSync("../src/Reddit Sans.glyphs").toString()

  const versionMajor = content.match(/versionMajor = (\d+)/)[1]
  const versionMinor = content.match(/versionMinor = (\d+)/)[1]

  const version = [
    versionMajor,
    ".",
    ...Array.from({ length: 3 - versionMinor.length }, () => 0),
    versionMinor,
  ].join("")

  const versions = [version, ...archive]

  const glyphs = content
    .match(/glyphs = [\s\S]*(?=gridLength)/)[0]
    .split(/,(?=\n{[^{]+?glyphname = )/)
    .filter((e) => !e.match(/export = 0/))
    .map((e, i, a) => ({
      name: getName(e),
      code: getCode(e),
      type: getType(e),
    }))
    .map((glyph, i, arr) => {
      if (!glyph.code && glyph.type) {
        const base = arr.find((e) => e.name === glyph.name.split(".")[0])
        glyph.code = base ? base.code : null
      }

      if (!glyph.type) delete glyph.type

      if (glyph.name.match("_")) {
        glyph.codes = glyph.name
          .split("_")
          .map((e) => arr.find((g) => g.name === e.split(".")[0]) || {})
      }

      return glyph
    })
    .filter((e) => e.code || e.codes)

  return {
    version,
    glyphs,
    features,
    versions,
    weights,
    styles,
    ranges,
    variants,
    cssName,
    count: {
      codes: glyphs.filter((e) => e.codes).length,
      total: glyphs.length,
    },
  }
}

module.exports = getData()
