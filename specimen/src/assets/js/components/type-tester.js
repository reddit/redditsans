const weights = require("../data/weights")

const base = {
  kern: 1,
  liga: 1,
  fw: weights.findIndex((w) => w.value === 400),
  // fs: 21,
  lh: 1.53,
  ls: 0,
  style: "",
  content: [
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”",
    "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
    "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.",
  ].join("\n\n"),
}

const options = {
  reset: {},
  text: {
    ss02: 1,
    ss11: 1,
    fs: 16,
  },
  grotesque: {
    ss01: 1,
  },
  kaomoji: {
    content: [
      "(╯°□°）╯︵ ┻━┻",
      "",
      "( •_•)",
      "( •_•)>⌐■-■",
      "(⌐■_■)",
      "",
      "(  ͡° ͜ʖ ͡° )",
    ].join("\n"),
  },
}

Object.keys(options).forEach(
  (o) => (options[o] = Object.assign({}, base, options[o]))
)

function onClick(e, elements) {
  var option = e ? options[e.target.dataset.option] : options.reset

  elements.FE.forEach((e) => (e.checked = !!option[e.value]))
  elements.ST.forEach((e) => (e.checked = option.style === e.value))

  Array.from(elements.TA.children).forEach((el) => (el.value = option.content))

  elements.FW.value = option.fw
  elements.FS.value = option.fs
  elements.FF.value = option.ff
  elements.LH.value = option.lh
  elements.LS.value = option.ls

  onInput(e, elements)
}

function onInput(e, elements) {
  var weight = elements.FW.value,
    size = elements.FS.value,
    lineHeight = elements.LH.value,
    letterSpacing = elements.LS.value,
    flavor = elements.FV.find((e) => e.checked).value

  var features = elements.FE.filter((e) => !e.dataset.flavor).map(
    (e) => "'" + e.value + "' " + (e.checked ? 1 : 0)
  )

  if (flavor) {
    features = features.concat(flavor.split(", ").map((e) => "'" + e + "' "))
  }

  var version = elements.VS.length
    ? elements.VS.find((e) => e.checked).value
    : ""
  var style = elements.ST.length ? elements.ST.find((e) => e.checked).value : ""
  var family = elements.FF.length
    ? elements.FF.find((e) => e.checked).value
    : ""

  lineHeight = Math.round(lineHeight * size)

  elements.TA.style.fontWeight = weights[weight].value
  elements.TA.style.fontSize = size + "px"
  elements.TA.style.lineHeight = lineHeight + "px"
  elements.TA.style.letterSpacing = letterSpacing + "em"
  elements.TA.style.fontStyle = style
  elements.TA.style.fontFamily = version ? '"' + version + '"' : family

  document.body.style.fontFeatureSettings = features.join(",")

  elements.TC.innerHTML = [
    weights[weight].label,
    elements.FF.find((e) => e.checked)?.dataset.label || "",
    style.slice(0, 1).toUpperCase() + style.slice(1),
    size,
    "/ " + lineHeight + "px",
    letterSpacing == 0
      ? ""
      : (letterSpacing >= 0 ? "+" : "") + letterSpacing * 1000,
  ].join(" ")
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

module.exports = {
  initialize: (el) => {
    const elements = getElements()

    options.reset.fs = +elements.FS.value
    options.reset.lh = +elements.LH.value

    el.addEventListener("input", (e) => onInput(e, elements))

    Array.from(document.querySelectorAll("[data-option]")).forEach((el) =>
      el.addEventListener("click", (e) => onClick(e, elements))
    )

    onClick(null, elements)
  },
}
