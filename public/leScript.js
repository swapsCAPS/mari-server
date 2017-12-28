var sentences = [
  "Dit is een zin van het gedicht en het is ook nog eens een hele lange zin en nog veel langer omg gaat maar door waajooooo",
  "Zinnetje deux",
  "en Drie"
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
    sentence = "Klaar met dit gezeik wil je je cadeautje?"
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
      }
    }
  )
}

$(document).ready(function() {
  $("#text").html(sentences[index])
  $("#prev").click(prev)
  $("#next").click(next)
})

