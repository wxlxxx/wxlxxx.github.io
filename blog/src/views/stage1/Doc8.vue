<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<h4>1.类class</h4>
		<pre class="bg-dark text-light"><code>
		class Animal {
			constructor(name, color){
				this.name = name
				this.color = color
			}
			toStiong(){
				consoloe.log('name:' + this.name + 'color:' + this.color)
			}
		}
		var animal = new Animal('dog', 'white')
		animal.toStiong()

		class Cat extends Animal {
			constructor(action){
				super('cat', 'white')
				this.action = action
			}
			toStiong(){
				consoloe.log(super.toStiong())
			}
		}
		var cat = new Cat('catch')
		cat.toStiong()
		</code></pre>
		<h4>2.延展操作符</h4>
		<pre class="bg-dark text-light"><code>
		function sum (x, y, z) {
			return x + y + z
		}
		var numbers = [1, 2, 3]
		//普通方式
		console.log(sum.apply(null, numbers))
		//延展操作符
		console.log(sum(...numbers))
		</code></pre>
		<h4>3.Promise</h4>
		<pre class="bg-dark text-light"><code>
		new Promise(function (resolve, reject) {
			console.log('start new Promise...')
			var timeOut = Math.random() * 2
			console.log('set timeout to: ' + timeOut + ' seconds.')
			setTimeout(function () {
				if (timeOut < 1) {
					console.log('call resolve()...')
					resolve('111')
				}
				else {
					console.log('call reject()...')
					reject('222')
				}
			}, timeOut * 1000)
		}).then(function (res) {
			console.log(res) //111
		}).catch(function (rej) {
			console.log(rej) //222
		})
		</code></pre>
		<div><img src="../../assets/img/doc-8-1.png"></div>
		<pre class="bg-dark text-light"><code>
		// 0.5秒后返回input*input的计算结果:
		function multiply(input) {
		    return new Promise(function (resolve, reject) {
		        console.log('calculating ' + input + ' x ' + input + '...');
		        setTimeout(resolve, 500, input * input);
		    });
		}

		// 0.5秒后返回input+input的计算结果:
		function add(input) {
		    return new Promise(function (resolve, reject) {
		        console.log('calculating ' + input + ' + ' + input + '...');
		        setTimeout(resolve, 500, input + input);
		    });
		}

		var p = new Promise(function (resolve, reject) {
		    console.log('start new Promise...');
		    resolve(123);
		});

		p.then(multiply)
		 .then(add)
		 .then(multiply)
		 .then(add)
		 .then(function (result) {
		    console.log('Got value: ' + result);
		});
		</code></pre>
		<h4>4.async/await</h4>
		<pre class="bg-dark text-light"><code>
		function login(userName){
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('1001')
				}, 600)
			})
		}
		function getLoginResult(userId){
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					if(userId == '1001'){
						resolve('success')
					}else{
						reject('fail')
					}
				}, 600)
			})
		}
		//不使用async/await
		function doLogin(userName){
			login(userName)
				.then(getLoginResult())
				.then((result) = {
					console.log(result)
				})
		}
		//使用async/await
		async doLogin2(userName) {
			const userId = await login(userName)
			const result = await getLoginResult(userId)
			console.log(result)
		}
		doLogin('wxl') //success
		doLogin2('wxl') //success
		</code></pre>
		<h4>5.values/entries</h4>
		<pre class="bg-dark text-light"><code>
		var obj1 = {a: 1, b: 2, c: 3}
		//遍历obj1
		//es7:
		var vals = Object.keys(obj1).map(key => obj1[key])
		console.log(vals) //[1, 2, 3]
		Object.keys(obj1).forEach(key => {
			console.log('key:' + key + ' value:' + obj1[key])
		})
		//key:a value:1
		//key:b value:2
		//key:c value:3
		//es8:
		var vals = Object.values(obj1)
		console.log(vals) //[1, 2, 3]
		for(let [key, value] of Object.entries(obj1)){
			console.log('key:' + key + ' value:' + obj1[key])
		}
		//key:a value:1
		//key:b value:2
		//key:c value:3
		</code></pre>
	</div>
</template>

<script>
	export default {
		name: 'Doc8',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		}
	}
</script>

<style scoped lang="scss">

</style>