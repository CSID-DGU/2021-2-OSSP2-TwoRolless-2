const express = require('express')
const router = express.Router()

const online_concert = require('../mongo/online_concert')
const online_musical = require('../mongo/online_musical')
const online_play = require('../mongo/online_play')

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
    
    try {
        res.render('online-play.html', {
            play: online_play
        })
    } catch (err) {
        console.error(err)
        next(err)
    }
})


module.exports = router