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
				shape: null,
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
				this.queue = new createjs.LoadQueue();
				this.queue.on("complete", this.handleComplete, this);
				this.queue.loadManifest([
					{id: "bg", src: require('../../assets/img/pic2.png')},
					{id: "circle", src: require('../../assets/img/icon1.png')}
				]);
				this.stage = new createjs.Stage("demoCanvas")
				this.C_W = this.stage.canvas.width
	            this.C_H = this.stage.canvas.height
	            this.shapeAngle = Math.PI/1.8+Math.PI*2

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
				var bgImage = this.queue.getResult("bg")
				var circleImage = this.queue.getResult("circle")

				var bg = new createjs.Shape()
				bg.graphics.bf(bgImage).drawRect(0,0,bgImage.width,bgImage.height)
				bg.setTransform(0, 0, this.C_W/bgImage.width, this.C_H/bgImage.height)

				var circle = new createjs.Bitmap(circleImage)
				circle.setTransform(970,580)

				this.shape = new createjs.Shape()

				this.stage.addChild(bg)
				this.stage.addChild(circle)
				this.stage.addChild(this.shape)
				// this.shape.graphics.setStrokeStyle(20, 'round').beginStroke("#fff").arc(1120, 731, 150, Math.PI/1.8, Math.PI/1.8+Math.PI*2)
				this.stage.update()

				createjs.Ticker.addEventListener("tick", this.handleTick)
				createjs.Ticker.setFPS(60)
			},
			handleTick(event){
				console.log(this.shapeAngle)
				this.shapeAngle -= Math.PI*2/90
				this.shape.graphics.clear()
				this.shape.graphics.setStrokeStyle(20, 'round').beginStroke("#000").arc(1120, 731, 150, Math.PI/1.8, this.shapeAngle)
				if(this.shapeAngle <= Math.PI/1.8){
					this.shape.graphics.clear()
					createjs.Ticker.removeEventListener("tick", this.handleTick)
				}
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