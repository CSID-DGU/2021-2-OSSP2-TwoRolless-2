const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const snsSchema = new Schema({


})

module.exports.sns = mongoose.model('sns', snsSchema)