const express = require('express')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const passport = require('passport')
const app = express()
const controller = require('./src/controller/server')

const port = process.env.PORT || 3000

require('dotenv').load()

app.set('view engine', 'ejs')
app.set('views', (__dirname, 'src/views'))

app.use(session({secret: process.env.SECRET}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', controller)

app.listen(port)
console.log('Listening on port: 3000');
