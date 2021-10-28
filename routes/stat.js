const express = require('express')
const router = express.Router()
const Info = require('../mongo/info')

router.use(express.static('views'))

router.get('/place', async (req, res, next) => {
    try {
        const infos = await Info.find({})
        res.render('stat-place.html', {infos})
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/trend', (req, res, next) => {
    try {
        res.render('stat-trend.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})


module.exports = router