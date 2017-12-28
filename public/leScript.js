var sentences = [
  "Hey Marius!",
  "Tot nu toe gaat het goed, dus…",
  "Snap je al hoe het werkt?",
  "Hierachter zit meer code, dan gedicht. Dat heb je wel gemerkt",
  "Deze surprise staat ook op losse schroeven moet je begrijpen",
  "De techniek-piet zit echt een beetje billen te knijpen",
  "Er kan namelijk echt vanalles misgaan",
  "Bovendien heeft de Sint totaal geen vertrouwen, in de code van Daan",
  "Misschien heb je al wat gekraak gehoord?",
  "Een beetje als een radio die stoort?",
  "Ja dat zou heel goed kunnen",
  "Het is allemaal bij elkaar gehackt, die ervaring wil de Sint jou ook gunnen",
  "Maar wat zag de Sint tot zijn spijt? Marius had geen verlanglijst",
  "Dan maar naar de Gall & Gall, de Malibu was afgeprijst",
  "He gatverdamme nee toch",
  "De Sint heeft voor jou iets beters gekoch",
  "Wat hij op het oog had, was echter boven het budget",
  "Gelukkig vond hij een tweede-handsje, nieuw-in-doos op het internet!",
  "Je kunt er werkelijk vanalles mee",
  "Misschien een mediabox voor op je TV?",
  "Of wellicht iets met muziek?",
  "Koop je nog een DAC erbij, voor een paar piek",
  "En mocht je het even niet meer snappen",
  "Dan kun je altijd Daniel even appen",
  "Dan nu een demonstratie van dit fantastische apparaat",
  "Wat ik zei van die losse schroeven was niet gelogen, dus laten we hopen dat alles goed gaat...",
  "Als alles verloopt volgens plan",
  "Vind je een prachtige poster waar je, je cadeautje achter vinden kan"
]

var index   = 0
var sending = false

function prev() {
  console.log("prev")
  if (index > 0) index--
  setHtml()
}

function next() {
  console.log("next")
  index++
  setHtml()
}

function setHtml() {
  var sentence = sentences[index]
  if (!sentence) {
    sentence = "FISSAAAAA! (Tenminste, er zou nu het een en ander moeten gebeuren...)"
  }
  if (index >= sentences.length) {
    activate()
  }
  var newText = $("<p>", { class: "le-text text-center" }).attr("id", "text").html(sentence)
  $("#text").remove()
  // setTimeout(function() {
    $("#text-wrapper").append(newText)
  // }, 100)
}

function activate() {
  if (sending) return

  $.ajax(
    {
      url:         "/w00000t/on",
      type:        "POST",
      contentType: "application/json",
      data:        JSON.stringify({message: "yay"}),
      error:       function(error) {
        sending = false
        console.error(error)
      },
      success:     function() {
        sending = false
        var party = $("<div>", { class: "fissa" })
        setTimeout(function() {
          $("body").append(party)
        }, 6000)
      }
    }
  )
}

$(document).ready(function() {
  $("#text").html(sentences[index])
  $("#prev").click(prev)
  $("#next").click(next)
})

