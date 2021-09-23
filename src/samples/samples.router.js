const router = require('express').Router()
const controller = require('./samples.controller')

router.route("/").get(controller.get)

module.exports = router