const express = require('express')
const router = express.Router()

const sns = require('../mongo/sns')

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

router.get('/SNS', (req, res) => {
    sns.sns.find(function (err, sns) {
        try {
            res.render('SNS.html', {data: sns})
        } catch(err) {
            res.render(err)
        }
    })
})

router.get('/faq', (req, res, next) => {
    try {
        res.render('faq.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})


router.get('/show-musical', (req, res, next) => {
    try {
        res.render('show-musical.html',{data: musical})
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/show-play', (req, res, next) => {
    try {
        res.render('show-play.html',{data: play})
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/show-concert', (req, res, next) => {
    try {
        res.render('show-concert.html',{data: concert})
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router