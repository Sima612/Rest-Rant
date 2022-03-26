// ROUTER
const router = require('express').Router()
const places = require('../models/places.js')

// ROUTE FOR NEW PLACES
router.get('/new', (req, res) => {
    res.render('places/new')
})

// POST /places ROUTE
router.post('/', (req, res) => {
    if(!req.body.pic) {req.body.pic = 'https://www.graduatehotels.com/berkeley/wp-content/uploads/sites/7/2019/11/9-Graduate_Hotel_256_1600x1200-1330x880-c-default.jpg'}
    if(!req.body.city) {req.body.city = 'https://thumbs.dreamstime.com/b/random-san-francisco-city-street-downtown-81047097.jpg'}
    if(!req.body.state) {req.body.state = 'USA'}

    places.push(req.body)
    res.redirect('/places') // REDIRECTING TO ANOTHER ROUTE
})

// INDEX ROUTE
router.get('/', (req,res) => {
    res.render('places/index', {places})
})


module.exports = router