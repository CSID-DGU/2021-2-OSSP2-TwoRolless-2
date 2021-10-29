const express = require('express')
const router = express.Router()
const Theater = require('../mongo/theater')

router.use(express.static('views'))


router.get("/place", (req, res) => {
    Theater.Theater.find({}, function (err, theater) {
        res.render('stat-place.html', {data: theater})
    })
})

module.exports = router