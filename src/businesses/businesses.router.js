const router = require('express').Router()
const controller = require('./businesses.controller')

router.route('/').get(controller.read)

module.exports = router 
