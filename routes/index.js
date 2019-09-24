const express = require('express')
const router = express.Router()

const loginService = require('../services/auth')

// routes
router.get('/', function (req, res, next) {
  res.render('login')
})

module.exports = router
