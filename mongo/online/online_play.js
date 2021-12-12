const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const on_play = new Schema({

    No: {
        type: Number
    },
    TYPE: {
        type: String
    },
    IMG_LINK: {
        type: String
    },
    STATE: {
        type: String
    },
    NAME: {
        type: String
    },
    DATE: {
        type: String
    },
    RUN_TIME: {
        type: String
    },
    PLATFORM: {
        type: String
    },
    DETAILS: {
        type: String
    },
    HREF: {
        type: String
    },
    PURCHASE_SITE: {
        type: String
    },
})

module.exports.on_ply = mongoose.model('on_ply', on_play)