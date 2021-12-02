const express = require('express')
const router = express.Router()
const theaters = require('../mongo/theater')
const theater_over = require('../mongo/theater_over')
const theater_inc = require('../mongo/theater_inc')


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
    theaters.theaters.findOne({ _id: req.params.id }, (err, theater) => {
        try {
            res.render('place-info.ejs', { data: theater })
        } catch (err) {
            res.render(Error)
        }
    })
})


// ====================================

router.get('/trend', async (req, res) => {

    const theater_ov = await theater_over.theater_over.find({})
    const theater_ic = await theater_inc.theater_inc.find({})

    res.render('stat-trend.html', {
        data1: theater_ov,
        data2: theater_ic
    })

})

module.exports = router