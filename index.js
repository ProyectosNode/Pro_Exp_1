var express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const loginRouter= require('./routes/login')
const forgotRouter = require('./routes/forgot')
const registerRouter = require('./routes/register')
const showRouter = require('./routes/showUser')

// app
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.use('/login', loginRouter)
app.use('/show', showRouter)
app.use('/forgot', forgotRouter)
app.use('/register', registerRouter)

// redirect
app.get('/', function (req, res) {
  res.redirect('/login')
})

app.use(function (req, res, next) {
  res.render('404')
})

app.listen(3000, function () {
  console.log('Servidor listo en el puerto: 3000')
})
