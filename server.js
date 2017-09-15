const express = require('express')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const {passport} = require('./src/config/authentication')
const middleware = require('./src/controllers/middlewares')
const app = express()
const controller = require('./src/controllers/routes')
const flash = require('connect-flash')

const port = process.env.PORT || 3000

require('dotenv').load()

app.set('view engine', 'ejs')
app.set('views', (__dirname, 'src/views'))

app.use(express.static('public'))
app.use(session({secret: process.env.SECRET}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(middleware.localVariables)

app.use('/', controller)

app.use((error, req, res, next) => {
  res.status(500).render('./common/errors', {error})
})

app.use((req, res) => {
  res.render('./common/not_found')
})

app.listen(port)
console.log('Listening on port: 3000');
