const express = require('express')
const router = express.Router()

router.use(express.static('views'))

router.get('/trend', (req, res, next) => {
    try {
        res.render('stat-trend.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/place', (req, res, next) => {
    try {
        res.render('stat-place.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router