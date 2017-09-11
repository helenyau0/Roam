const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const controller = require('./src/controller/server')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', (__dirname, 'src/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', controller)

app.listen(port)
console.log('Listening on port: 3000');
