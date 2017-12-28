var sentences = [
  "Dit is een zin van het gedicht en het is ook nog eens een hele lange zin en nog veel langer omg gaat maar door waajooooo",
  "Zinnetje deux",
  "en Drie"
]

var index = 0

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
    sentence = "Klaar met dit gezeik wil je je cadeautje?"
  }
  var newText = $("<p>", { class: "le-text text-center" }).attr("id", "text").html(sentence)
  $("#text").remove()
  // setTimeout(function() {
    $("#text-wrapper").append(newText)
  // }, 100)
}

$(document).ready(function() {
  $("#text").html(sentences[index])
  $("#prev").click(prev)
  $("#next").click(next)
})

