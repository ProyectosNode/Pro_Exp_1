const express = require('express')
const show = express.Router()
const authService = require('../services/auth')
//const usersCtrl = require('../controllers/usersCtrl')

/* GET user by email */
show.post('/', function (req, res, next) {
    let email = req.body.email
    let password = req.body.password
    authService.authenticateEmailPassword(email, password)
    //res.render('show')
    res.render('home', {email})
  })

module.exports = show