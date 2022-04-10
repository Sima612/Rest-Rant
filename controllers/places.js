// ROUTER
const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')
const { Router } = require('express')

// INDEX ROUTE 
router.get('/', (req, res) => {
    db.Place.find()
    .then(places => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })

})

// NEW ROUTE
router.get('/new', (req,res) => {
    res.render('places/new')
})
// POST ROUTE ;  TAKE IN FORM DATA AND ADD DATA TO DATABASE
router.post('/', (req, res) => {
    if (!req.body.pic) { req.body.pic = undefined }
    if (!req.body.city) { req.body.city = undefined }
    if (!req.body.state) { req.body.state = undefined }
    
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if(err && err.name == 'ValidationError') {
            let message = 'ValidationError: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)

            res.render('places/new', {message})
        } else {
            res.render('error404')
        }
    })
})

// PUT ROUTE
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})


// SHOW ROUTE
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id).
    then(placeFound => {
        console.log(placeFound)
        res.render('places/edit')
    })
    .catch(err => {
        res.render('error404')
    })
})

// POST COMMENT ROUTE
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
    .then(place => {
        //CREATING COMMENT DATABASE
        db.Comment.create(req.body)
        .then(comment => {
            //SAVE COMMENT ID TO PLACE
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
    
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
        console.log(deletedPlace)
        res.status(303).redirect('/places')
    })
    .catch(err => {res.render('error404')})
})

module.exports = router