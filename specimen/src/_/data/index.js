import { readFileSync } from "node:fs"

import site from "./site.js"
import font from "./font.js"
import navigation from "./navigation.js"

const samples = JSON.parse(readFileSync("./src/_/data/samples.json"))

export default {
  site,
  font,
  navigation,
  samples,
}
