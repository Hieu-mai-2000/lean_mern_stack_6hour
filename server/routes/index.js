const express = require('express')
const router = express.Router()
const authRoute = require('./auth')
const postRoute = require('./post')

function routes(app) {
  app.use('/api/auth',authRoute)
  app.use('/api/post', postRoute)
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
}

module.exports = routes
