require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 PAGE</h1>')
})

app.listen(process.env.PORT)