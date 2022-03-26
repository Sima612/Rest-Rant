// ROUTER
const router = require('express').Router()

// ROUTE FOR NEW PLACES
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/', (req,res) => {
    let places = [{
        state: 'MA',
        city: 'Worcester',
        name: 'Taste-Tea Rolls',
        cuisines: 'Desserts, Ice-creams',
        pic: '/images/taste-tea.jpeg'
    }, {
        state: 'CA',
        city: 'Long Beach',
        name: 'Monorom Cambodian Restaurant',
        cuisines: 'Cambodian Food',
        pic: '/images/cambodian.jpeg'
    }]
    res.render('places/index', {places})
})


module.exports = router