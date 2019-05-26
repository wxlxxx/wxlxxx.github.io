<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<canvas ref="App_mazecanvas"></canvas>
	</div>
</template>

<script>
export default {
	name: 'Demo3',
	data(){
		return {
			currRoute: null,

			canvas: null,
			context: null,
			image: 'maze.gif',
			startX: 440,
			startY: 0,
			endX: 571,
			endY: 131,
			startSpotStyle: '#0000FF',
			endSpotStyle: '#20c997'
		}
	},
	created(){
		this.currRoute = this.$route
	},
	mounted(){
		this.canvas = this.$refs.App_mazecanvas
		this.context = this.canvas.getContext("2d")
		var imgSrc = require('../../assets/img/'+this.image)

		var mazeImg = new Image()
		mazeImg.onload = function(){
			this.canvas.width = mazeImg.width+30
			this.canvas.height = mazeImg.height+30
			this.drawWhite(0, 0, this.canvas.width, this.canvas.height)
			this.context.drawImage(mazeImg, 15, 15)
			this.drawSpot(this.startX, this.startY, this.startSpotStyle)
			this.drawSpot(this.endX, this.endY, this.endSpotStyle)
		}.bind(this)
		mazeImg.src = imgSrc

		window.addEventListener("keydown", this.move, true)
	},
	methods: {
		drawSpot(x, y, style){
			this.context.beginPath()
			this.context.rect(x, y, 15, 15)
			this.context.closePath()
			this.context.fillStyle = style
			this.context.fill()
		},
		move(e){
			var newX, newY;
			e = e || window.event
			switch (e.keyCode) {
				case 38:
				newX = this.startX;
				newY = this.startY - 3;
				break;
				case 37:
				newX = this.startX - 3;
				newY = this.startY;
				break;
				case 40:
				newX = this.startX;
				newY = this.startY + 3;
				break;
				case 39:
				newX = this.startX + 3;
				newY = this.startY;
				break;
				default: return;
			}
			if(this.canMove(newX,newY)){
				this.drawWhite(this.startX, this.startY,15, 15)
				this.drawSpot(newX, newY, this.startSpotStyle)
				this.startX = newX
				this.startY = newY
			}
		},


		canMove(destX, destY){
			var imgData = this.context.getImageData(destX, destY, 15, 15)
			var data = imgData.data
			var flag = true
			for(var i = 0; i < 4 * 15 * 15; i += 4){
				if(data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0){
					flag =  false
					break;
				}
			}
			return flag
		},


		drawWhite(x, y, w, h) {
			this.context.beginPath()
			this.context.rect(x, y, w, h)
			this.context.closePath()
			this.context.fillStyle = "white"
			this.context.fill()
		}
	}
}
</script>

<style scoped lang="scss">

</style>