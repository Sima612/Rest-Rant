// ROUTER
const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        state: 'Massachusetts',
        city: 'Worcester',
        name: 'Taste-Tea Rolls',
        cuisines: 'Desserts',
        pic: ''
    }]
    res.render('places/index', {places})
})

module.exports = router