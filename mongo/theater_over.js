const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const the_overSchema = new Schema({

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
    }
})

module.exports.theater_over = mongoose.model('theater_over', the_overSchema)

// change_rate는 빼고 지역별로 볼 수 있게