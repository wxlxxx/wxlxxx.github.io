<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<canvas id="demoCanvas" width="1440" height="900"></canvas>
	</div>
</template>

<script>
	import createjs from 'createjs'
	export default {
		name: 'Doc1',
		data(){
			return {
				currRoute: null,

				stage: null,
				queue: null,
				shape: [],
				shapeAngle: 0,
				C_W: 0,
            	C_H: 0,
			}
		},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			this.init()
		},
		methods: {
			init(){
				// 创建queue对象加载图片
				this.queue = new createjs.LoadQueue();
				this.queue.on("complete", this.handleComplete, this);
				this.queue.loadManifest([
					{id: "bg", src: require('../../assets/img/pic2.png')},
					{id: "circle", src: require('../../assets/img/icon1.png')}
				]);
				// 创建舞台对象
				this.stage = new createjs.Stage("demoCanvas")
				// 获取canvas大小
				this.C_W = this.stage.canvas.width
	            this.C_H = this.stage.canvas.height
	            // 舒适化角度变量
	            this.shapeAngle = Math.PI/1.8+Math.PI*2
	            // 加载中动画
	            this.drawLoading()


				// var canvas = document.getElementById('demoCanvas')
				// var stage = new createjs.Stage(canvas)
				// var circle = new createjs.Shape()
				// var line = new createjs.Shape()

				// var containerImage = new Image()
				// containerImage.src = require('../../assets/img/pic2.png')
				// containerImage.onload = function(){
				// 	canvas.width = event.target.width
				// 	canvas.height = event.target.height
				// 	var bitmap = new createjs.Bitmap(event.target)
				// 	stage.addChild(bitmap)

				// 	var circleImage = new Image()
				// 	circleImage.src = require('../../assets/img/icon1.png')
				// 	circleImage.onload = function(){
				// 		var bitmap = new createjs.Bitmap(event.target)
				// 		bitmap.setTransform(970,550)
				// 		stage.addChild(bitmap)

				// 		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50)
				// 		circle.x = 100;
				// 		circle.y = 100;
				// 		stage.addChild(circle)

				// 		line.graphics.setStrokeStyle(8,"round").beginStroke("rgba(0,0,0,0.5)")
				// 		line.graphics.arc(100,100,40,30,120,true)
				// 		stage.addChild(line)

				// 		stage.update()
				// 	}
				// }
			},
			handleComplete(){
				// 获取加载好的图片对象
				var bgImage = this.queue.getResult("bg")
				var circleImage = this.queue.getResult("circle")
				// 创建舞台背景对象
				var bg = new createjs.Shape()
				bg.graphics.bf(bgImage).drawRect(0,0,bgImage.width,bgImage.height)
				bg.setTransform(0, 0, this.C_W/bgImage.width, this.C_H/bgImage.height)
				// 创建舞台内的其他元素
				var circle = new createjs.Bitmap(circleImage)
				circle.setTransform(970,580)
				this.shape[0] = new createjs.Shape()
				this.shape[1] = new createjs.Shape()
				this.shape[2] = new createjs.Shape()
				this.shape[3] = new createjs.Shape()
				this.shape[4] = new createjs.Shape()
				this.shape[1].graphics.beginFill('#000').drawRect(1110, 731, 20, 20)
				this.shape[2].graphics.beginFill('#000').drawRect(1040, 731, 40, 70)
				this.shape[3].graphics.beginFill('#000').drawRect(1130, 701, 130, 50)
				this.shape[4].graphics.beginFill('#000').drawRect(1190, 623, 30, 30)
				// 添加元素到舞台中
				this.stage.addChild(bg)
				this.stage.addChild(circle)
				this.stage.addChild(this.shape[0])
				this.stage.addChild(this.shape[1])
				this.stage.addChild(this.shape[2])
				this.stage.addChild(this.shape[3])
				this.stage.addChild(this.shape[4])
				// this.shape[0].graphics.setStrokeStyle(20, 'round').beginStroke("#fff").arc(1120, 731, 150, Math.PI/1.8, Math.PI/1.8+Math.PI*2)
				this.stage.update()
				// 监听tick事件执行动画
				createjs.Ticker.addEventListener("tick", this.handleTick)
				createjs.Ticker.setFPS(60)
			},
			handleTick(event){
				this.shapeAngle -= Math.PI*2/90
				this.shape[0].graphics.clear()
				this.shape[0].graphics.setStrokeStyle(20, 'round').beginStroke("#000").arc(1120, 731, 150, Math.PI/1.8, this.shapeAngle)
				if(this.shapeAngle <= Math.PI/1.8){
					this.shape[0].graphics.clear()
					createjs.Ticker.removeEventListener("tick", this.handleTick)
					this.addMark()
				}
				this.stage.update()
			},
			addMark(){
				var i = 1
				var myInterval = setInterval(function(){
					this.shape[i].graphics.clear()
					this.stage.update()
					i += 1
					if(i >= 5){
						clearInterval(myInterval)
						this.addText()
					}
				}.bind(this),300)
			},
			addText(){
				var text = new createjs.Text("Hello World", "20px Arial", "#ff7700")
				text.x = 1190
				text.y = 623
				this.stage.addChild(text)
				this.stage.update()
			},
			drawLoading(){
				// ...
			}
		}
	}
</script>

<style scoped lang="scss">

</style>