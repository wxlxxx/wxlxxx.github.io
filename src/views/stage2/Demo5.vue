<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<canvas id="myCanvas"></canvas>
		<p>
			<input id="input1" type="" name="">
			<input id="input2" type="" name="">
			<a href="javascript:;" @click="demo()">ok</a>
		</p>
	</div>
</template>

<script>
export default {
	name: 'Demo5',
	data(){
		return {
			currRoute: null
		}
	},
	created(){
		this.currRoute = this.$route
	},
	mounted(){
		this.drawCircle('myCanvas')
	},
	methods: {
		demo(){
			this.drawCircleAnimate('myCanvas',parseInt(document.getElementById('input1').value),parseInt(document.getElementById('input1').value),parseInt(document.getElementById('input2').value))
		},
		drawCircleAnimate(ele,old_pro,curr_pro,new_pro){
			var ele = ele
			requestAnimationFrame(function(){
				curr_pro += 1
				this.drawCircle(ele,old_pro,curr_pro)
				if(curr_pro<new_pro){
					this.drawCircleAnimate(ele,old_pro,curr_pro,new_pro)
				}
			}.bind(this));
		},
		drawCircle(ele,start,end){
			let width = 80
			let height = 110
			let lineWidth = 10
			let canvas = document.getElementById(ele)
			canvas.width = width
			canvas.height = height
			let ctx = canvas.getContext("2d")
			ctx.beginPath()
			ctx.lineWidth = lineWidth
			ctx.strokeStyle = '#a3c8db66'
			ctx.arc(width/2,width/2,width/2-lineWidth,-Math.PI/2,Math.PI*3/2)
			ctx.stroke()
			if(start&&end){
				ctx.beginPath()
				ctx.lineWidth = lineWidth
				ctx.strokeStyle = '#00aee6'
				ctx.arc(width/2,width/2,width/2-lineWidth,Math.PI*2*start/100-Math.PI/2,Math.PI*2*end/100-Math.PI/2)
				ctx.stroke()
			}
			ctx.beginPath()
			ctx.font = "300 24px 'Muli',sans-serif,Arial,Helvetica"
			ctx.textBaseline = 'middle'
			ctx.textAlign = 'center';
			ctx.fillStyle = '#26324b'
			if(start&&end){
				ctx.fillText((end-start)+'%', width/2, 100);
			}else{
				ctx.fillText('0%', width/2, 100);
			}
		}
	}
}
</script>

<style scoped lang="scss">

</style>