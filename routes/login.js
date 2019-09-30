const express = require('express')
const login = express.Router()
//const authService = require('../services/auth')


// routes
login.get('/', function (req, res, next) {
  res.render('login')
})

module.exports = login
