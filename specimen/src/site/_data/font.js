const load = require("load-nextstep-plist")

const weights = require("../../assets/js/data/weights")
const styles = require("../../assets/js/data/styles")
const ranges = require("../../assets/js/data/ranges")
const variants = require("../../assets/js/data/variants")
const archive = require("../../assets/js/data/versions")

const cssName = "redditsans"

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

async function getData() {
  const data = await load("../src/Reddit Sans.glyphs")

  const version = [
    data.versionMajor,
    ("00" + data.versionMinor).slice(-3),
  ].join(".")

  const versions = [version, ...archive]

  const glyphs = data.glyphs
    .filter((e) => e.export !== "0")
    .map((e) => ({
      name: e.glyphname,
      code: e.unicode,
      type: (e.glyphname.match(/\w+\.(.*)/) || [])[1],
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
    condensedVersions: ["03", "02", "01"],
  }
}

module.exports = getData()
