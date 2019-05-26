<template>
	<div>
		<canvas id="demoCanvas"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'Elliptical',
		data(){
			return {
				stage: null,
				shape: null,
				ellipse: {
					a: 50,
					b: 30,
					h: 60,
					k: 140,
					x: 10,
				},
				line: {
					k: -2,
					b: 300,
					x: 92
				},
				arc: {
					r: 50,
					a: 50,
					b: 50,
					x: 0
				},
				speed: 6
			}
		},
		props: ['cw', 'ch'],
		mounted(){
			this.stage = new createjs.Stage("demoCanvas")
			this.stage.canvas.width = this.cw
			this.stage.canvas.height = this.ch
			this.shape = new createjs.Shape()
			this.stage.addChild(this.shape)
			createjs.Ticker.addEventListener("tick", this.handleTick1)
			createjs.Ticker.setFPS(60)
		},
		methods: {
			handleTick1(){
				if(this.ellipse.x <= this.ellipse.h+this.ellipse.a){
					if(this.ellipse.x <= this.ellipse.a/2+this.ellipse.h-this.ellipse.a){
						for(var i=0;i<this.speed;i++){
							this.DrawPoints(this.ellipse.x+i,this.getEllipseY1(this.ellipse.x+i))
						}
					}else if(this.ellipse.x <= this.ellipse.h){
						for(var i=0;i<this.speed;i++){
							this.DrawPoints(this.ellipse.x+i,this.getEllipseY1(this.ellipse.x+i),4)
						}
					}else if(this.ellipse.x <= this.ellipse.h+this.ellipse.a/2){
						for(var i=0;i<this.speed;i++){
							this.DrawPoints(this.ellipse.x+i,this.getEllipseY1(this.ellipse.x+i),8)
						}
					}else{
						for(var i=0;i<this.speed;i++){
							this.DrawPoints(this.ellipse.x+i,this.getEllipseY1(this.ellipse.x+i),16)
						}
					}
				}else{
					var x2 = this.ellipse.h+this.ellipse.a - (this.ellipse.x-(this.ellipse.h+this.ellipse.a))
					for(var i=0;i<this.speed;i++){
						this.DrawPoints(x2+i,this.getEllipseY2(x2+i),16)
					}
				}
				this.stage.update()
				this.ellipse.x+=this.speed
				if(this.ellipse.x >= this.ellipse.h*4){
					createjs.Ticker.removeEventListener("tick", this.handleTick1)
					createjs.Ticker.addEventListener("tick", this.handleTick2)
				}
			},
			handleTick2(){
				for(var i=0;i<this.speed;i++){
					this.DrawPoints(this.line.x+i,this.getLineY(this.line.x+i),16)
				}
				this.stage.update()
				this.line.x += this.speed
				if(this.line.x >= this.ellipse.a+this.ellipse.h){
					createjs.Ticker.removeEventListener("tick", this.handleTick2)
					createjs.Ticker.addEventListener("tick", this.handleTick3)
				}
			},
			handleTick3(){
				console.log(this.arc.x)
				console.log(this.getArcY1(this.arc.x))
				for(var i=0;i<this.speed;i++){
					this.DrawPoints(this.arc.x+i,this.getArcY1(this.arc.x+i),16)
				}
				this.stage.update()
				this.arc.x += this.speed
				if(this.arc.x >= 500){
					createjs.Ticker.removeEventListener("tick", this.handleTick3)
				}
			},
			DrawPoints(x,y,times){
				var times = times || 1
				for(var i=0;i<times;i++){
					var newx = x + Math.random()*4-2
					var newy = y + Math.random()*4-2
					this.shape.graphics.beginFill('#000').drawCircle(newx, newy, 0.1)
				}
			},
			getEllipseY1(x){
				return Math.sqrt((1-Math.pow(x-this.ellipse.h,2)/Math.pow(this.ellipse.a,2))*Math.pow(this.ellipse.b,2))+this.ellipse.k
			},
			getEllipseY2(x){
				return -Math.sqrt((1-Math.pow(x-this.ellipse.h,2)/Math.pow(this.ellipse.a,2))*Math.pow(this.ellipse.b,2))+this.ellipse.k
			},
			getLineY(x){
				return this.line.k*x+this.line.b
			},
			getArcY1(x){
				return Math.sqrt(Math.pow(this.arc.r,2)-Math.pow(this.arc.x-this.arc.a,2))+this.arc.b
			}
		}
	}
</script>

<style>
	

</style>