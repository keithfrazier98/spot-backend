const path = require('path')
require('dotenv').config({path: path.join(__dirname, '..', '.env')})

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const businessesRouter = require('./businesses/businesses.router')
app.use('/businesses', businessesRouter)

const categoriesRouter = require('./categories/categories.router')
app.use('/categories', categoriesRouter)

const notFound = require("./errors/notFound");
app.use(notFound);

const errorHandler = require("./errors/errorHandler");
app.use(errorHandler)

module.exports = app
