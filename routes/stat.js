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

router.get('/place-trend', async (req, res) => {

    const theater_ic = await theater_inc.theater_inc.find({})
        .sort({ "rank": 1 })
    try {
        res.render('place-trend.ejs', {
            data: theater_ic
        })
    } catch (Error) {
        res.render(Error)
    }

})

router.get('/place-trend-all', async (req, res) => {

    try {
        const seoul = await theater_over.theater_over.find({ ctprvn_nm: "서울특별시" }).sort({ signgu_nm : 1 })
        const gyunggi = await theater_over.theater_over.find({ ctprvn_nm: "경기도" }).sort({ signgu_nm : 1 })
        const busan = await theater_over.theater_over.find({ ctprvn_nm: "부산광역시" }).sort({ signgu_nm : 1 })
        const all = await theater_over.theater_over.find({ ctprvn_nm: { $nin : ["서울특별시", "경기도", "부산광역시"] }}).sort({ ctprvn_nm : 1 })

        res.render('place-trend-all.ejs', { data1: seoul, data2: gyunggi, data3: busan, data4: all })
    } catch (err) {
        res.render(Error)
    }
})


router.get('/show-trend', async (req, res) => {

    try {
        res.render('show-trend.html')
    } catch (err) {
        res.render(Error)
    }
})

module.exports = router