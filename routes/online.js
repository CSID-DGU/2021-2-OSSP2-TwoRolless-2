const express = require('express')
const router = express.Router()

const online_concert = require('../mongo/online/online_concert')
const online_musical = require('../mongo/online/online_musical')
const online_play = require('../mongo/online/online_play')

router.use(express.static('views'))

router.get('/concert', (req, res, next) => {

    try {
        res.render('online-concert.html', {
            concert: online_concert
        })
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/musical', (req, res, next) => {

    try {
        res.render('online-musical.html', {
            musical: online_musical
        })
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/play', (req, res, next) => {
    
    online_play.on_ply.find(function (err, play) {
        try {
            res.render('online-play.html', { data: play })
        } catch (err) {
            res.render(Error)
        }
    })
})


module.exports = router