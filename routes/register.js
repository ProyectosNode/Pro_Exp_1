const express = require('express')
const reg = express.Router()
const authService = require('../services/auth')

reg.get('/', function (req, res, next) {
    res.render('register')
  })

module.exports = reg