const express = require('express')
const router = express.Router()
const theaters = require('../mongo/theater')
const theater_over = require('../mongo/theater_over')
const theater_inc = require('../mongo/theater_inc')

router.use(express.static('views'))

router.get("/place", (req, res) => {

    // const seoul = theaters.theaters.find({CITY: "서울"})
    // const incheon = theaters.theaters.find({CITY: "인천"})
    // const daejeon = theaters.theaters.find({CITY: "대전"})
    // const daegu = theaters.theaters.find({CITY: "대구"})
    // const busan = theaters.theaters.find({CITY: "부산"})
    // const ulsan = theaters.theaters.find({CITY: "울산"})
    // const jeju = theaters.theaters.find({CITY: "제주"})

    // const gangwon = theaters.theaters.find({CITY: "강원"})
    // const gyungbuk = theaters.theaters.find({CITY: "경북"})
    // const gyungnam = theaters.theaters.find({CITY: "경남"})
    // const jeonnam = theaters.theaters.find({CITY: "전남"})
    // const jeonbuk = theaters.theaters.find({CITY: "전북"})
    // const chungnam = theaters.theaters.find({CITY: "충남"})
    // const chungbuk = theaters.theaters.find({CITY: "충북"})
    // const gyunggi = theaters.theaters.find({CITY: "경기"})
    // const sejong = theaters.theaters.find({CITY: "세종"})

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
                                                    .sort({"rank": 1 })
    try{
        res.render('place-trend.ejs', {
            data: theater_ic
        })
    } catch(Error) {
        res.render(Error)
    }                                      
    
})

router.get('/place-trend-all', (req, res) => {
    theater_over.theater_over.find(function (err, thea) {
        try {
            res.render('place-trend-all.ejs', { data: thea })
        } catch (err) {
            res.render(Error)
        }
    })
})


router.get('/show-trend', async (req, res) => {

    try {
        res.render('show-trend.html')
    } catch (err) {
        res.render(Error)
    }
})

module.exports = router