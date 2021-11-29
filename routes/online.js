const express = require('express')
const router = express.Router()

router.use(express.static('views'))


router.get('/concert', (req, res, next) => {
    try {
        res.render('online-concert.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/musical', (req, res, next) => {
    try {
        res.render('online-musical.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/play', (req, res, next) => {
    try {
        res.render('online-play.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})


module.exports = router