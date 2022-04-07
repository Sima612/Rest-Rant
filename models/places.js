// FILE TO HOLD OUR PLACES 
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: '/images/default-image.jpeg'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
})

// METHOD TO CALL TO OUTPUT STRING CONTAINING SEVERAL FIELDS
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// CREATING AND EXPORTING THE MODEL FROM HERE
module.exports = mongoose.model('Place', placeSchema)
