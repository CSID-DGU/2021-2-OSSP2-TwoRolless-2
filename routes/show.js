const express = require('express')
const router = express.Router()

router.use(express.static('views'))

const offline_musical = require('../mongo/offline/offline_musical')
const offline_concert = require('../mongo/offline/offline_concert')
const offline_play = require('../mongo/offline/offline_play')


router.get('/concert', (req, res, next) => {
    offline_concert.off_con.find(function (err, concert) {
        try {
            res.render('show-concert.html', { data: concert })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get('/musical', (req, res, next) => {
    offline_musical.off_mus.find(function (err, musical) {
        try {
            res.render('show-concert.html', { data: musical })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get('/play', (req, res, next) => {
    offline_play.off_ply.find(function (err, play) {
        try {
            res.render('show-concert.html', { data: play })
        } catch (err) {
            res.render(Error)
        }
    })
})


module.exports = router