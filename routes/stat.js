const express = require('express')
const router = express.Router()
const theaters = require('../mongo/theater')

router.use(express.static('views'))


router.get("/place", (req, res) => {
   theaters.theaters.find(function (err, theater) {
        res.render('stat-place.ejs', {data: theater})
    })
    .sort({"CITY" : 1 })
})

router.get("/place/:id", (req, res) => {
    theaters.theaters.findOne(req.params.id, (err, theater) => {
        res.render('place-info.ejs', {data: theater})
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