// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

// DEFINING VIEW ENGINE *JSX*
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true })) // SENDING DATA TO BE RECEIEVED BY BACK-END CODE
app.use(methodOverride('_method'))

// IMPORTING ROUTER
app.use('/places', require('./controllers/places'))

// GETTING HOMEPAGE
app.get('/', (req, res) => {
    res.render('home')
})

// ERROR ROUTE
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)