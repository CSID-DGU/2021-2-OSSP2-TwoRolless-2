const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const indexRouter = require('./routes')
const showRouter = require('./routes/show')
const statRouter = require('./routes/stat')
const connect = require('./mongo')
connect()


const app = express()
const router = express.Router()

app.use(express.static('views'))

app.set('port', process.env.PORT || 5000)
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)


app.use('/', indexRouter)
app.use('/show', showRouter)
app.use('/stat', statRouter)


app.listen(app.get('port'), () => {
    console.log('PORT', app.get('port'), '번에서 대기중!')
})