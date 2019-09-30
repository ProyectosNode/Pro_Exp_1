const express = require('express')
const forgot = express.Router()
const authService = require('../services/auth')

forgot.get('/', function (req, res, next) {
    res.render('forgot')
  })

module.exports = forgot