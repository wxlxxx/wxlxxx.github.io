<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<canvas id="demoCanvas" width="500" height="300"></canvas>
	</div>
</template>

<script>
	import createjs from 'createjs'
	export default {
		name: 'Doc1',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			this.canvasFunc()
		},
		methods: {
			canvasFunc(){
				var stage = new createjs.Stage("demoCanvas");
		        var circle = new createjs.Shape();
		        circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
		        circle.x = 100;
		        circle.y = 100;
		        stage.addChild(circle);
		        createjs.Tween.get(circle, {loop: true})
		          .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
		          .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
		          .to({alpha: 0, y: 125}, 100)
		          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		          .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
		        createjs.Ticker.setFPS(60);
		        createjs.Ticker.addEventListener("tick", stage);
			}
		}
	}
</script>

<style scoped lang="scss">

</style>