const express = require('express')
const router = express.Router()

const online_concert = require('../mongo/online/online_concert')
const online_musical = require('../mongo/online/online_musical')
const online_play = require('../mongo/online/online_play')

router.use(express.static('views'))

router.get('/concert', (req, res, next) => {
    
    online_concert.on_con.find(function (err, concert) {
        try {
            res.render('online-concert.html', { data: concert })
        } catch (err) {
            res.render(Error)
        }
    })
        .sort({ "DATE": -1 })
})

router.get('/musical', (req, res, next) => {
    
    online_musical.on_mus.find(function (err, musical) {
        try {
            res.render('online-musical.html', { data: musical })
        } catch (err) {
            res.render(Error)
        }
    })
    .sort({ "DATE": -1 })
})

router.get('/play', (req, res, next) => {
    
    online_play.on_ply.find(function (err, play) {
        try {
            res.render('online-play.html', { data: play })
        } catch (err) {
            res.render(Error)
        }
    })
    .sort({ "DATE": -1 })
})


module.exports = router