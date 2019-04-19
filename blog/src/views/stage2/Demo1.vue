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

		        // stage.update();

		        // createjs.Tween.get(circle, {loop: true})
		        //   .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
		        //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
		        //   .to({alpha: 0, y: 125}, 100)
		        //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		        //   .to({x: 100}, 800, createjs.Ease.getPowInOut(2));

		  //       createjs.Tween.get(circle)
			 //    .wait(500)
			 //    .to({alpha:0, visible:false}, 1000)
			 //    .call(handleComplete);
			 //    function handleComplete(event) {
				//     // The tween changed.
				// }

		        // createjs.Ticker.setFPS(60);
		        // createjs.Ticker.addEventListener("tick", stage);

		        createjs.Ticker.addEventListener("tick", handleTick);

			    function handleTick() {
			     //Circle will move 10 units to the right.
			        circle.x += 2;
			        //Will cause the circle to wrap back
			        if (circle.x > stage.canvas.width) { circle.x = 0; }
			        stage.update();
			    }
			}
		}
	}
</script>

<style scoped lang="scss">

</style>