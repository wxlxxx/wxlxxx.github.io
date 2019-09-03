<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<div class="position-relative overflow-hidden">
			<img class="img-fluid" src="../../assets/img/Artboard-bg.svg" alt="">
			<div class="translate-center polygon">
				<img class="img-fluid" src="../../assets/img/Artboard.svg" alt="">
			</div>
			<img class="translate-center w-100 cover" src="../../assets/img/Artboard2.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Demo7',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
@keyframes animateDemo {
	0% {
		clip-path: polygon(0% 0%, 40% 0, 60% 100%, 0% 100%);
	}
	100% {
		clip-path: polygon(0% 0%, 60% 0, 40% 100%, 0% 100%);
	}
}
@keyframes animateDemo2 {
	0% {
		transform: translate(-50%,-50%) rotate(-5deg);
	}
	100% {
		transform: translate(-50%,-50%) rotate(5deg);
	}
}
.translate-center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.polygon {
	width: 100%;
	height: 100%;
	animation: animateDemo 4s linear infinite alternate;
}
.cover {
	animation: animateDemo2 4s linear infinite alternate;
}
</style>