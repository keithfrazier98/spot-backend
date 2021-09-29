const router = require('express').Router()
const controller = require('./businesses.controller')

router.route('/').get(controller.read)
router.route('/search').get(controller.getBusinesses)

module.exports = router 
