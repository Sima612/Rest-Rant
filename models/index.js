// REQUIRE DOTENV TO USE THE VALUE OF MONGO_URI ENV VARIABLE
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// MAKING CONNECTION INFO AND ACCESSING TO ALL OUR MODELS
module.exports.Place = require('./places')