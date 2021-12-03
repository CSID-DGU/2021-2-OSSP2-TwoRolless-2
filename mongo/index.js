const mongoose = require('mongoose')

require('dotenv').config()
MONGO_URI = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(MONGO_URI, {
        dbName: 'TwoRolless',
    }, (err) => {
        if (err) {
            console.log('MongoDB Error!', err)
        } else {
            console.log('MongoDB Connected!')
        }
    })
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB Error!', err)
})

mongoose.connection.on('disconnected', () => {
    console.error('MongoDB Disconnected... Retry')
    connect()
})

module.exports = connect;



// python 주소
// mongodb+srv://Yujin:tworolless00@tworolless.cwje0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
