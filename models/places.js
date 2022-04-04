// FILE TO HOLD OUR PLACES 
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: 'images/default-image.jpeg'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
})

// CREATING AND EXPORTING THE MODEL FROM HERE
module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     state: 'MA',
//     city: 'Worcester',
//     name: 'Taste-Tea Rolls',
//     cuisines: 'Desserts, Ice-creams',
//     pic: '/images/taste-tea.jpeg'
// }, {
//     state: 'CA',
//     city: 'Long Beach',
//     name: 'Monorom Cambodian Restaurant',
//     cuisines: 'Cambodian Food',
//     pic: '/images/cambodian.jpeg'
// }]