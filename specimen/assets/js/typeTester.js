var elFW = document.getElementById("input-weight"),
    elFS = document.getElementById("input-size"),
    elLH = document.getElementById("input-lead"),
    elLS = document.getElementById("input-track"),
    elTA = document.getElementById("testarea"),
    elTC = document.getElementById("testcriteria"),
    elFF = document.querySelectorAll("[name='ff-setting']"),
    elVs = document.getElementById("input-version");

var weights = {
  "300": "Light",
  "400": "Regular",
  "500": "Medium",
  "600": "Bold",
  "700": "ExtraBold"
}

var base = {
  kern: 1,
  liga: 1,
  fw: 400,
  fs: 21,
  lh: 1.5,
  ls: 0,
  content: [
    "Type anything you want here!",
    "What zen joy delivering boxes of equipment each week! We expect better julienned zest from high‑quality knives. Kid frequently craves jumbo pizza when texting. My quick raw vegan fix? Hot adzuki beans and jalapeño! Bouncy squad eking prize with influx of divine jumps. Whizzing black taxi drives off quickly up major road. We mix just over a dozen inky black helpings of squid.",
    "0123456789 email@address.com ¯\\_(ツ)_/¯"
  ].join("\n\n")
}

var options = {
  reset: {
    content: "Just walk past him. Act normal, don't make him suspect it was you that levitated his receipt. In fact, he might just blow it off since I returned it to him.",
    fs: 32,
    ss02: 1,
    ss11: 1
  },
  text: {
    ss02: 1,
    ss11: 1,
    fs: 16
  },
  grotesque: {
    ss01: 1
  },
  kaomoji: {
    content: [
      "(╯°□°）╯︵ ┻━┻",
      "",
      "( •_•)",
      "( •_•)>⌐■-■",
      "(⌐■_■)",
      "",
      "(  ͡° ͜ʖ ͡° )"
    ].join("\n")
  }
}

Object.keys(options).forEach((o) =>
  options[o] = Object.assign({}, base, options[o])
 )

function onClick (e) {
  var option = e ? options[e.target.dataset.option] : options.reset

  Array.from(elFF).forEach((e) => e.checked = !!option[e.value])

  elTA.value = option.content;
  elFW.value = option.fw;
  elFS.value = option.fs;
  elLH.value = option.lh;
  elLS.value = option.ls;

  onInput()
}

function onInput (e) {
  var fw = elFW.value;
  var fs = elFS.value;
  var lh = elLH.value;
  var ls = elLS.value;

  var ff = Array.from(elFF).map((el) =>
    "'" + el.value + "' " + (el.checked ? 1 : 0)
  ).join(",")

  lh = Math.round(lh * fs);

  elTA.style.fontWeight = fw;
  elTA.style.fontSize = fs + "px";
  elTA.style.lineHeight = lh + "px";
  elTA.style.letterSpacing = ls + "em";
  elTA.style.fontFamily = elVs.value;

  document.body.style.fontFeatureSettings = ff;

  elTC.innerHTML = [
    weights[fw],
    fs,
    "/ " + lh + "px",
    ls == 0 ? "" : (ls >= 0 ? "+" : "") + ls * 1000
  ].join(" ")
}

document.getElementById("testsettings").addEventListener("input", onInput)

Array.from(document.querySelectorAll("[data-option]")).forEach((el) =>
  el.addEventListener("click", onClick)
)

onClick()

// "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.\n\nВ начале июля, в чрезвычайно жаркое время, под вечер, один молодой человек вышел из своей каморки, которую нанимал от жильцов в С — м переулке, на улицу и медленно, как бы в нерешимости, отправился к К — ну мосту.\n\nHe had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high, five-storied house and was more like a cupboard than a room. The landlady who provided him with garret, dinners, and attendance, lived on the floor below, and every time he went out he was obliged to pass her kitchen, the door of which invariably stood open. And each time he passed, the young man had a sick, frightened feeling, which made him scowl and feel ashamed. He was hopelessly in debt to his landlady, and was afraid of meeting her.\n\nОн благополучно избегнул встречи с своею хозяйкой на лестнице. Каморка его приходилась под самою кровлей высокого пятиэтажного дома и походила более на шкаф, чем на квартиру. Квартирная же хозяйка его, у которой он нанимал эту каморку с обедом и прислугой, помещалась одною лестницей ниже, в отдельной квартире, и каждый раз, при выходе на улицу, ему непременно надо было проходить мимо хозяйкиной кухни, почти всегда настежь отворенной на лестницу. И каждый раз молодой человек, проходя мимо, чувствовал какое-то болезненное и трусливое ощущение, которого стыдился и от которого морщился. Он был должен кругом хозяйке и боялся с нею встретиться.\n\nThis was not because he was cowardly and abject, quite the contrary; but for some time past he had been in an overstrained irritable condition, verging on hypochondria. He had become so completely absorbed in himself, and isolated from his fellows that he dreaded meeting, not only his landlady, but anyone at all. He was crushed by poverty, but the anxieties of his position had of late ceased to weigh upon him. He had given up attending to matters of practical importance; he had lost all desire to do so. Nothing that any landlady could do had a real terror for him. But to be stopped on the stairs, to be forced to listen to her trivial, irrelevant gossip, to pestering demands for payment, threats and complaints, and to rack his brains for excuses, to prevaricate, to lie—no, rather than that, he would creep down the stairs like a cat and slip out unseen.\n\nНе то чтоб он был так труслив и забит, совсем даже напротив; но с некоторого времени он был в раздражительном и напряженном состоянии, похожем на ипохондрию. Он до того углубился в себя и уединился от всех, что боялся даже всякой встречи, не только встречи с хозяйкой. Он был задавлен бедностью; но даже стесненное положение перестало в последнее время тяготить его. Насущными делами своими он совсем перестал и не хотел заниматься. Никакой хозяйки, в сущности, он не боялся, что бы та ни замышляла против него. Но останавливаться на лестнице, слушать всякий вздор про всю эту обыденную дребедень, до которой ему нет никакого дела, все эти приставания о платеже, угрозы, жалобы, и при этом самому изворачиваться, извиняться, лгать, — нет уж, лучше проскользнуть как-нибудь кошкой по лестнице и улизнуть, чтобы никто не видал.",
// "I went down yesterday to the Peiraeus with Glaucon, the son of Ariston, to pay my devotions to the Goddess, and also because I wished to see how they would conduct the festival since this was its inauguration. I thought the procession of the citizens very fine, but it was no better than the show, made by the marching of the Thracian contingent.\n\nκατέβην χθὲς εἰς Πειραιᾶ μετὰ Γλαύκωνος τοῦ Ἀρίστωνος προσευξόμενός τε τῇ θεῷ καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες. καλὴ μὲν οὖν μοι καὶ ἡ τῶν ἐπιχωρίων πομπὴ ἔδοξεν εἶναι, οὐ μέντοι ἧττον ἐφαίνετο πρέπειν ἣν οἱ Θρᾷκες ἔπεμπον."
