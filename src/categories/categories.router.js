const router = require('express').Router()
const controller = require('./categories.contoller')

router.route("/").get(controller.getAllCategories)

module.exports=router