const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const snsSchema = new Schema({
    tag: {
        type: String,
    },

    time:{
        type: Date,
    },

    text: {
        type: String,
    },

    img: {
        type: String,
    }
})

module.exports.sns = mongoose.model('sns', snsSchema)