// ROUTER
const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        state: 'Massachusetts',
        city: 'Worcester',
        name: 'Taste-Tea Rolls',
        cuisines: 'Desserts',
        pic: 'https://lh3.googleusercontent.com/-3CCJneswIxM/W1hK9q34QpI/AAAAAAAAKjY/dkn4nLiVBd4Rtpr7PRK7vuFef2DaA8HwgCLIBGAYYCw/w768-h768-n-o-k-v1/'
    }]
    res.render('places/index', {places})
})

module.exports = router