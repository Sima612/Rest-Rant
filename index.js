require('dotenv').config()

const express = require('express')
const app = express()

// IMPORTING ROUTER
app.use('/places', require('./controllers/places'))

// GETTING HOMEPAGE
app.get('/', (req, res) => {
    res.send('Hello World')
})

// ERROR ROUTE
app.get('*', (req, res) => {
    res.status(404).send('<h1>ERROR 404 PAGE</h1>')
})

app.listen(process.env.PORT)