const express = require('express')
const router = express.Router()

router.use(express.static('views'))

const offline_musical = require('../mongo/offline/offline_musical')
const offline_concert = require('../mongo/offline/offline_concert')
const offline_play = require('../mongo/offline/offline_play')


router.get('/concert', (req, res, next) => {
    try {
        res.render('show-concert.html',{data: offline_concert })
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/musical', (req, res, next) => {
    try {
        res.render('show-musical.html',{data:offline_musical})
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/play', (req, res, next) => {
    try {
        res.render('show-play.html',{data:offline_play})
    } catch (err) {
        console.error(err)
        next(err)
    }
})


module.exports = router