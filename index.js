var express = require('express')
const path = require('path')
const loginRouter = require('./routes')

// app
var app = express()

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.use('/login', loginRouter)

// redirect
app.get('/', function (req, res) {
  res.redirect('/login')
})

app.use(function (req, res, next) {
  res.render('404')
})

app.listen(3000, function () {
  console.log('Servidor listo en el puerto: 3000!')
})
