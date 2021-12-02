const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const the_incSchema = new Schema({

    rank: {
        type: Number
    },
    
    fclty_id: {
        type: String
    },

    ctprvn_nm: {
        type: String
    },

    signgu_nm: {
        type: String
    },

    fclty_nm: {
        type: String
    },

    change_rate: {
        type: Number
    },

    musical:{
        type: String
    },

    concert: {
        type: String
    },

    play: {
        type: String
    },

    ballet: {
        type: String
    }
})

module.exports.theater_inc = mongoose.model('theater_inc', the_incSchema)