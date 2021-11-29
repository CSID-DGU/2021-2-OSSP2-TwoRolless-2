const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const indexRouter = require('./routes')
const showRouter = require('./routes/show')
const statRouter = require('./routes/stat')
const onlineRouter = require('./routes/online')

const connect = require('./mongo')
connect()

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 5000)
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use('/', indexRouter)
app.use('/show', showRouter)
app.use('/stat', statRouter)
app.use('/online', onlineRouter)

app.listen(app.get('port'), () => {
    console.log('PORT', app.get('port'), '번에서 대기중!')
})