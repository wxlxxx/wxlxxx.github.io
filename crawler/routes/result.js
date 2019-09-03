const express = require('express')
const url  = require('url')
const http = require('http')
const zlib = require('zlib')
const superagent = require('superagent')
const cheerio = require('cheerio')

let router = express.Router()

router.post('/', (req, res) => {
	getCookie(req.body, (cookie) => {
		if(cookie == 'error'){
			res.send('密码错误')
			return
		}
		getWosMonthsign(cookie, (data) => {
			let dateList = JSON.parse(data).month
			let hoursList = JSON.parse(data).list
			let currMonth = new Date().getMonth()+1
			let currMonthStr = (currMonth >= 10 ? '' : '0') + currMonth + '-'
			let workDays = []
			let sum = 0
			dateList.map(function(item, index){
				if(item.match(currMonthStr) && hoursList[index] > 0){
					if(new Date(item).getDay()+1 < 6){
						workDays.push(hoursList[index])
					}else{
						sum += hoursList[index]*1
					}
				}
			})
			workDays.map(function(item){
				sum += item*1
			})
			let averageHours = (sum/workDays.length).toFixed(2)
			res.render('result', {
				title: '结果页',
				dateList: dateList,
				hoursList: hoursList,
				averageHours: averageHours,
				workDays: workDays
			})
		})
	})
})

function getWosMonthsign(cookie, callback){
	const options = {
		hostname: 'wos.wondershare.cn',
		port: 80,
		path: '/sign/monthsign',
		method: 'GET',
		headers: {
			"Accept": "application/json, text/javascript, */*; q=0.01",
			"Accept-Encoding": "gzip, deflate",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,fr;q=0.6,es;q=0.5,ar;q=0.4,pt;q=0.3,it;q=0.2",
			"Cache-Control": "no-cache",
			"Connection": "keep-alive",
			"Cookie": cookie,
			"Host": "wos.wondershare.cn",
			"Pragma": "no-cache",
			"Referer": "http://wos.wondershare.cn/sign/index",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
			"X-Requested-With": "XMLHttpRequest"
		}
	}
	const req = http.request(options, (res) => {
		let encoding = res.headers['content-encoding']
		let chunks = []
		let data;
		if(encoding == 'undefined'){
			res.setEncoding('utf8')
		}
		res.on('data', (chunk) => {
			chunks.push(chunk)
		});
		res.on('end', () => {
			let buffer = Buffer.concat(chunks)
			if (encoding == 'gzip') {
				zlib.gunzip(buffer, (err, decoded) => {
					data = decoded.toString()
					callback(data)
				})
			}else if (encoding == 'deflate') {
				zlib.inflate(buffer, (err, decoded) => {
					data = decoded.toString();
					callback(data)
				})
			} else {
				data = buffer.toString()
				callback(data)
			} 
		})
	})

	req.on('error', (e) => {
		console.error(`problem with request: ${e.message}`)
	})

	req.end()
}

function getCookie(postData, callback){
	let defaultCookie = "_pk_id.1.412b=682ef0d06f314deb.1566283475.1.1566283475.1566283475.; _pk_ses.1.412b=*"
	superagent.get('http://wos.wondershare.cn/login/login')
	.set({
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
		"Accept-Encoding": "gzip, deflate",
		"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,fr;q=0.6,es;q=0.5,ar;q=0.4,pt;q=0.3,it;q=0.2",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive",
		"Cookie": defaultCookie,
		"Host": "wos.wondershare.cn",
		"Pragma": "no-cache",
		"Referer": "http://wos.wondershare.cn/login/logout",
		"Upgrade-Insecure-Requests": 1,
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
	})
	.end(function(err, res) {
		if (err) {
			console.log(err.message+'1')
			return
		}
		let $ = cheerio.load(res.text)
		postData._csrf = $('[name="_csrf"]').val()
		let cookie = res.header['set-cookie']
		let cookieList = cookie.join(';').split(';')
		let cookieList_new = []
		cookieList.map(function(item){
			if(!/path=/i.test(item) && !/HttpOnly/.test(item) && !/expires=/.test(item) && !/Max-Age=/.test(item)){
				cookieList_new.push(item)
			}
		})
		defaultCookie = defaultCookie + ";" + cookieList_new.join(';')
        superagent.post('http://wos.wondershare.cn/login/login')
        .type('form')
        .redirects(0)
        .set({
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
			"Accept-Encoding": "gzip, deflate",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,fr;q=0.6,es;q=0.5,ar;q=0.4,pt;q=0.3,it;q=0.2",
			"Cache-Control": "no-cache",
			"Connection": "keep-alive",
			"Content-Length": Buffer.byteLength(JSON.stringify(postData)),
			"Content-Type": "application/x-www-form-urlencoded",
			"Cookie": defaultCookie,
			"Host": "wos.wondershare.cn",
			"Origin": "http://wos.wondershare.cn",
			"Pragma": "no-cache",
			"Referer": "http://wos.wondershare.cn/login/login",
			"Upgrade-Insecure-Requests": 1,
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
		})
		.send(postData)
		.then(function(err, res){
			if (err) {
				console.log(err.message+'2')
				callback('error')
				return
			}
		})
		.catch(err => {
			console.log(err.message+'3')
			if(err["response"]["header"]){
				let cookie = err["response"]["header"]["set-cookie"][0].split(';')[0]
				callback(defaultCookie.replace(/PHPSESSID.*?(?=\;)/,cookie))
			}
		})
    })
}

module.exports = router