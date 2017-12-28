express = require "express"
app     = express()

goOn = false
secret = require "./secret"

app
	.get "/mariStatus/:param1/:paramDeux", (req, res) ->
		{ param1, paramDeux } = req.params
		return res.sendStatus 403 unless param1 is secret.one and paramDeux is secret.two
		console.log "w00t"
		res.json status: goOn

	.post "/w00000t/on", (req, res) ->
		goOn = true
		console.log "w00t"
		res.sendStatus 200

	.post "/w00000t/off", (req, res) ->
		goOn = false
		console.log "w00t"
		res.sendStatus 200

	.listen 3000, ->
		console.log "listening"

