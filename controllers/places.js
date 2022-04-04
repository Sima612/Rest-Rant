// ROUTER
const router = require('express').Router()
const db = require('../models')
const { Router } = require('express')
const places = require('../models/places.js')

// INDEX ROUTE 
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {res.render('places/index', {places})})
    .catch(err => {console.log(err)
        res.render('error404')})

})

// POST /places ROUTE
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {res.redirect('/places')})
    .catch(err => {console.log('err', err)
        res.render('error404')})
})

// NEW ROUTE
router.get('/new', (req,res) => {
    res.render('places/new')
})

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

// PUT ROUTE
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {res.render('places/show', {place})})
    .catch(err => {console.log('err', err)})
        res.render('error404')

})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router