const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const off_concert = new Schema({

    title: {
        type: String
    },
    place: {
        type: String
    },
    period: {
        type: String
    },
    time: {
        type: String
    },
    age: {
        type: String
    },
    poster: {
        type: String
    },
    price: {
        type: Array
    },
    casting: {
        type: Array
    },
    timeinfo: {
        type: Array
    },
    notice: {
        type: Array
    },
    discount: {
        type: Array
    },
    schedule: {
        type: Array
    },
})

module.exports.off_con = mongoose.model('off_con', off_concert)