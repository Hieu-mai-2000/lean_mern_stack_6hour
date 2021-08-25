var express = require('express')
var router = express.Router()
const authRoute = require('./auth')

function routes(app) {
  app.use('/user',authRoute)
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
}

module.exports = routes
