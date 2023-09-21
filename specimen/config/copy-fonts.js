import flavors from "../src/assets/js/data/variants.js"
import subsets from "../src/assets/js/data/ranges.js"
import weights from "../src/assets/js/data/weights.js"

const weight = `*(${weights.map((n) => n.label).join("|")}|Italic)`
const families = ["Reddit Sans", "Reddit Sans Condensed", "Reddit Mono"]

const fontConfig = []

families.forEach((family, i) => {
  const src = `../fonts/${family}/`
  const out = "dist/fonts/" + family.toLocaleLowerCase().replace(/\s/g, "-")
  const familyName = family.replace(/\s/g, "")

  // Full desktop fonts
  fontConfig.push({
    src,
    dist: `${out}/desktop/`,
    include: `${familyName}-${weight}.ttf`,
  })

  // Full webfonts
  fontConfig.push({
    src,
    dist: `${out}/web/full/`,
    include: `${familyName}-${weight}.woff*`,
  })

  // Web subsets
  subsets
    .map((n) => n.label)
    .forEach((set) => {
      fontConfig.push({
        src,
        dist: `${out}/web/subsets/${set}`,
        include: `${familyName}-${set}${weight}.woff*`,
      })
    })

  if (i == 0) {
    // Web variants
    flavors
      .map((n) => n.label)
      .forEach((flavor) => {
        fontConfig.push({
          src,
          dist: `${out}/web/variants/${flavor}`,
          include: `variants/${familyName}${flavor}*.woff*`,
          flatten: true,
        })
      })

    // Desktop variants
    flavors
      .map((n) => n.label)
      .forEach((flavor) => {
        fontConfig.push({
          src,
          dist: `${out}/desktop/variants/${flavor}`,
          include: `variants/${familyName}${flavor}*.ttf`,
          flatten: true,
        })
      })
  }
})

export default fontConfig
