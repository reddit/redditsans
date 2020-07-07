const fs = require("fs")

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
  { code: "ss01",
    title: "Stylistic Set 1",
    sample: "a"
  },
  { code: "ss02",
    title: "Stylistic Set 2",
    sample: "a"
  },
  { code: "ss03",
    title: "Stylistic Set 3",
    sample: "g"
  },
  { code: "ss04",
    title: "Stylistic Set 4",
    sample: "I"
  },
  { code: "ss05",
    title: "Stylistic Set 5",
    sample: "i"
  },
  { code: "ss06",
    title: "Stylistic Set 6",
    sample: "Ww"
  },
  { code: "ss07",
    title: "Stylistic Set 7",
    sample: "0"
  },
  { code: "kern",
    title: "Kerning",
    sample: "LT",
    active: 1
  },
  { code: "liga",
    title: "Default Ligatures",
    sample: "fl",
    active: 1
  },
  { code: "zero",
    title: "Slashed zero",
    sample: "0"
  },
  { code: "case",
    title: "Case Alternates",
    sample: "[H]"
  },
  { code: "subs",
    title: "Subscript",
    sample: "H2"
  },
  { code: "sups",
    title: "Superscript",
    sample: "H3"
  },
  { code: "numr",
    title: "Numerators",
    sample: "H4"
  },
  { code: "dnom",
    title: "Denominators",
    sample: "H5"
  },
  { code: "frac",
    title: "Fractions",
    sample: "1/2"
  },
  { code: "ordn",
    title: "Ordinals",
    sample: "8a"
  },
  { code: "tnum",
    title: "Tabular Numbers",
    sample: "911"
  },
  { code: "onum",
    title: "Old-style Figures",
    sample: "1984"
  },
]

const archive =
[
  "0.012",
  "0.011",
  "0.010",
  "0.009",
  "0.008",
  "0.007",
  "0.006",
  "0.005",
  "0.004",
  "0.003",
  "0.002",
  "0.001",
]

function getData() {
  const content = fs.readFileSync("../src/Reddit Sans.glyphs").toString()

  const versionMajor = content.match(/versionMajor = (\d+)/)[1]
  const versionMinor = content.match(/versionMinor = (\d+)/)[1]

  const version = [
    versionMajor,
    ".",
    ...Array.from({length: 3 - versionMinor.length}, () => 0),
    versionMinor
  ].join("")

  const glyphs = content
    .match(/glyphs = [\s\S]*(?=gridLength)/)[0]
    .split(/,(?=\n{[^{]+?glyphname = )/)
    .filter(e => !e.match(/export = 0/))
    .map((e, i, a) => ({
      name: getName(e),
      code: getCode(e),
      type: getType(e)
    }))
    .map((glyph, i, arr) => {
      if (!glyph.code && glyph.type) {
        const base = arr.find(e =>
          e.name === glyph.name.split(".")[0]
        )
        glyph.code = base ? base.code : null
      }

      if (!glyph.type) delete glyph.type

      if (glyph.name.match("_")) {
        glyph.codes = glyph.name.split("_").map(e =>
          arr.find(g => g.name === e.split(".")[0]) || {}
        )
      }

      return glyph
    })
    .filter(e => e.code || e.codes)

  return ({
    version,
    glyphs,
    features,
    archive,
    count: {
      codes: glyphs.filter(e => e.codes).length,
      total: glyphs.length
    }
  })
}

module.exports = getData()

