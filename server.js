const express = require('express')
const app = express()
const controller = require('./src/controller/server')

const port = process.env.PORT || 3000

app.use('/', controller)

app.listen(port)
console.log('Listening on port: 3000');
