const express = require('express')
const router = express.Router()
const theater = require('../mongo/theater')

router.use(express.static('views'))

router.route('/place')
    .get(async (req, res, next) => {
        try {
            const theaters = await theater.find({})
            res.json(theaters)
        } catch (err) {
            console.error(err)
            next(err)
        }
    })




module.exports = router