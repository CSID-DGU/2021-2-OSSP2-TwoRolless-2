const express = require('express')
const router = express.Router()
const theaters = require('../mongo/theater')

router.use(express.static('views'))

router.get("/place", (req, res) => {
    theaters.theaters.find(function (err, theater) {
        try {
            res.render('stat-place.html', { data: theater })
        } catch (err) {
            res.render(Error)
        }
    })
        .sort({ "TOTAL_SEAT_NUM": -1 })
})

router.get("/place/:id", (req, res) => {
    theaters.theaters.findOne({_id: req.params.id}, (err, theater) => {
        try {
            res.render('place-info.ejs', { data: theater })
        } catch (err) {
            res.render(Error)
        }
    })
})


// ====================================

router.get('/trend', (req, res, next) => {
    try {
        res.render('stat-trend.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router