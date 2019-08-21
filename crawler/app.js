const ip = require('ip')
const express = require('express')
const ejs=require('ejs')
const bodyParser = require('body-parser')

const index = require('./routes/index.js')
const result = require('./routes/result.js')


let app = express()
app.set('views', './views')
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.use('/', index)
app.use('/result', result)


let server = app.listen(10010, ip.address(), function () {
	let host = server.address().address
	let port = server.address().port
	console.log('Your App is running at http://%s:%s', host, port)
})