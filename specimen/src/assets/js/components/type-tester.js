import weights from "../data/weights.js"
import samples from "../../../_/data/samples.json"

const base = {
  fw: weights.findIndex((w) => w.value === 400),
  ls: 0,
  style: "",
  kern: 1,
  liga: 1,
}

const options = {
  reset: {},
  body: {
    fs: 18,
    lh: 28 / 18,
    content: samples.alice,
  },
  title: {
    ss01: 1,
    fw: 600,
    fs: 64,
    lh: 1.125,
    ls: -0.02,
    content:
      "Hyperreactor alphabetizers quintuplicate metagalaxies kaleidoscope!",
  },
}

const onClick = (e, elements) => {
  const option = e ? options[e.target.dataset.option] : options.reset
  const content = e ? option.content : samples.alice

  elements.FE.forEach((e) => (e.checked = option[e.value] === 1))
  elements.ST.forEach((e) => (e.checked = option.style === e.value))

  if (option.ss01) elements.FV[1].checked = true
  else if (option.ss02) elements.FV[2].checked = true
  else if (option.ss03) elements.FV[3].checked = true
  else elements.FV[0].checked = true

  if (content) {
    Array.from(elements.TA.children).forEach((el) => (el.value = content))
  }

  elements.FW.value = option.fw
  elements.FS.value = option.fs
  elements.FF.value = option.ff
  elements.LH.value = option.lh
  elements.LS.value = option.ls

  update(elements)
}

const getCheckedValue = (list) => {
  const el = list.find((e) => e.checked && !e.disabled && e.value !== "on")
  return el ? el.value : ""
}

const update = (elements) => {
  let weight = +elements.FW.value,
    size = +elements.FS.value,
    lineHeight = +elements.LH.value,
    letterSpacing = +elements.LS.value,
    flavor = elements.FV.find((e) => e.checked).value

  let features = elements.FE.filter((e) => !e.dataset.flavor).map(
    (e) => "'" + e.value + "' " + (e.checked ? 1 : 0)
  )

  let version = getCheckedValue(elements.VS)
  let style = getCheckedValue(elements.ST)
  let family = getCheckedValue(elements.FF)

  if (flavor) {
    features = features.concat(flavor.split(", ").map((e) => "'" + e + "' "))
  }

  lineHeight = Math.round(lineHeight * size)

  elements.TA.style.fontWeight = weights[weight].value
  elements.TA.style.fontSize = size + "px"
  elements.TA.style.lineHeight = lineHeight + "px"
  elements.TA.style.letterSpacing = letterSpacing + "em"
  elements.TA.style.fontStyle = style
  elements.TA.style.fontFamily = version ? '"' + version + '"' : family

  document.body.style.fontFeatureSettings = features.join(",")

  style = style.slice(0, 1).toUpperCase() + style.slice(1)

  let label = weights[weight].label

  if (style) label = label === "Regular" ? style : label + " " + style

  label += " " + size
  label += " / " + lineHeight + "px "

  if (letterSpacing > 0) label += "+"
  if (letterSpacing !== 0) label += letterSpacing * 1000

  elements.TC.innerHTML = label
}

const getElements = () => ({
  FW: document.getElementById("input-weight"),
  FS: document.getElementById("input-size"),
  LH: document.getElementById("input-lead"),
  LS: document.getElementById("input-track"),
  TA: document.getElementById("test-area"),
  TC: document.getElementById("test-criteria"),
  VS: Array.from(document.querySelectorAll("[name='input-version']")),
  ST: Array.from(document.querySelectorAll("[name='input-style']")),
  FF: Array.from(document.querySelectorAll("[name='input-family']")),
  FE: Array.from(document.querySelectorAll("[name='ff-setting']")),
  FV: Array.from(document.querySelectorAll("[name='ff-flavor']")),
})

export default {
  initialize: (el) => {
    const elements = getElements()

    base.fs = +elements.FS.value
    base.lh = +elements.LH.value

    Object.keys(options).forEach(
      (o) => (options[o] = Object.assign({}, base, options[o]))
    )

    el.addEventListener("input", () => update(elements))
    el.addEventListener("update", () => update(elements))

    Array.from(document.querySelectorAll("[data-option]")).forEach((el) =>
      el.addEventListener("click", (e) => onClick(e, elements))
    )

    onClick(null, elements)
  },
}
