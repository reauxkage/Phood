const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const postRoutes = require('./routes/post')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(postRoutes)

mongoose
    .connect('mongodb://localhost:27017/phood')
    .then(result => {
        app.listen(3000)
    })
    .catch((err => {
        console.log(err)
    }))