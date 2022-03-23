require('dotenv').config()

const express = require('express')
const app = express()

// DEFINING VIEW ENGINE *JSX*
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// IMPORTING ROUTER
app.use('/places', require('./controllers/places'))

// GETTING HOMEPAGE
app.get('/', (req, res) => {
    res.render('home')
})

// ERROR ROUTE
app.get('*', (req, res) => {
    res.status(404).send('<h1>ERROR 404 PAGE</h1>')
})

app.listen(process.env.PORT)