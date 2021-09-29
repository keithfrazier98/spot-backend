const router = require('express').Router()
const controller = require('./autocomplete.controller')

router.route("/").get(controller.autocomplete)

module.exports = router