const express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: '首页'
	})
})

module.exports = router