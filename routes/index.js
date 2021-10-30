const express = require('express')
const router = express.Router()

router.use(express.static('views'))

router.get('/', (req, res, next) => {
    try {
        res.render('index.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/about', (req, res, next) => {
    try {
        res.render('about.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/SNS', (req, res, next) => {
    try {
        res.render('SNS.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/faq', (req, res, next) => {
    try {
        res.render('faq.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})


// ===================== show ==========================

router.get('/show/concert', (req, res, next) => {
    try {
        res.render('show-concert.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/show/musical', (req, res, next) => {
    try {
        res.render('show-musical.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/show/play', (req, res, next) => {
    try {
        res.render('show-play.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})



module.exports = router