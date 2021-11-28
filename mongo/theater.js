const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const infoSchema = new Schema({
  No: {
    type: Number,
    required: true,
  },
  
  BUILDING_NAME: {
    type: String,
    required: true,
  },

  THEATER_NUM: {
    type: Number,
    required: true,
  },

  TOTAL_SEAT_NUM: {
    type: Number,
    required: true,
  },
  
  TYPE: {
    type: String,
    required: true,
  },

  OPENYEAR: {
    type: Number,
    required: true,
  },

  CITY: {
    type: String
  },

  TOWN: {
    type: String,
    required: true,
  },

  ADDRESS: {
    type: String,
    require: true,
  },

  PLAYROOM: {
    type: String,
    required: true,
  },

  FEEDROOM: {
    type: String,
    required: true,
  },

  DISABLED: {
    type: String,
    required: true,
  },

  PARKING: {
    type: String,
    required: true,
  },
})

module.exports.theaters = mongoose.model('theaters', infoSchema)