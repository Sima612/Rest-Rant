const db = require('./models')

db.Place.create([{
    state: 'MA',
    city: 'Worcester',
    name: 'Taste-Tea Rolls',
    cuisines: 'Desserts, Ice-creams',
    pic: '/images/taste-tea.jpeg',
    founded: 2017
}, {
    state: 'CA',
    city: 'Long Beach',
    name: 'Monorom Cambodian Restaurant',
    cuisines: 'Cambodian Food',
    pic: '/images/cambodian.jpeg',
    founded: 2010
}])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})
