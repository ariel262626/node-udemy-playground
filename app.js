const express = require('express')
const bodyParser = require('body-parser')

const feedRoutes = require('./routes/feed')

const app = express()

// app.use(bodyParser.urlencoded()) // for form data
app.use(bodyParser.json()) // for json data

app.use('/feed', feedRoutes)

app.listen(8080)
