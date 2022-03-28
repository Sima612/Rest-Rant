// ROUTER
const router = require('express').Router()
const { Router } = require('express')
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

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {res.render('error404')}
    else if(!places[id]) {res.render('error404')}
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {res.render('error404')}
    else if(!places[id]) {res.render('error404')}
    else {res.render('places/show')}

    res.render('places/show', {places: places[id], id})
})



module.exports = router