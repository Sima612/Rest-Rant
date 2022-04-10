// REQUIRE DOTENV TO USE THE VALUE OF MONGO_URI ENV VARIABLE
require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {console.log('Connected to mongo: ', process.env.MONGO_URI)})

// MAKING CONNECTION INFO AND ACCESSING TO ALL OUR MODELS
module.exports.Place = require('./places')
module.exports.Comment = require('./comment')