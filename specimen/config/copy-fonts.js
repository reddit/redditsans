import flavors from "../src/assets/js/data/variants.js"
import weights from "../src/assets/js/data/weights.js"

const weight = `*(${weights.map((n) => n.label).join("|")}|Italic)`
const families = ["Reddit Sans", "Reddit Sans Condensed", "Reddit Mono"]

const fontConfig = []

families.forEach((family, i) => {
  const src = `../fonts`
  const out = "dist/fonts/" + family.replace(/ /g, "-").toLocaleLowerCase()
  const familyName = family.replace(/ /g, "")

  // Full desktop fonts
  fontConfig.push({
    src,
    dist: `${out}/desktop/`,
    include: `**/${familyName}-${weight}.ttf`,
    flatten: true,
  })

  // Full webfonts
  fontConfig.push({
    src,
    dist: `${out}/web/full/`,
    include: `**/${familyName}-${weight}.woff*`,
    flatten: true,
  })

  // Subsets and variants are not yet migrated to be built by scripts
  return

  // Web subsets
  fontConfig.push({
    src: `${src}/subsets`,
    dist: `${out}/web/subsets`,
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
