<template>
	<div class="reveal">
		<div class="slides">
			<section>
				<h2>A pixel is not a pixel is not a pixel</h2>
				<p>
					<small>CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport...</small>
				</p>
			</section>
			<section>
				<h3>1、PX(CSS pixels)</h3>
			</section>
			<section id="fragments">
				<h4>1.1、PX定义</h4>
				<p>虚拟像素，可以理解为“直觉”像素，CSS和JS使用的抽象单位，浏览器内的一切长度都是以CSS像素为单位的，CSS像素的单位是px。</p>
				<p class="fragment"><small>...在不同的设备之间，每1个CSS像素所代表的物理像素是可以变化的</small></p>
				<p class="fragment"><small>...在同样一个设备上，每1个CSS像素所代表的物理像素是可以变化的</small></p>
			</section>
			<section>
				<h4>1.2、PX到底是什么？</h4>
				<p class="fragment"><small>...根据 维基百科的解释，它是图像显示的基本单元，既不是一个确定的物理量，也不是一个点或者小方块，而是一个抽象概念</small></p>
				<p class="fragment"><small>...不同的设备，图像基本采样单元是不同的，显示器上的物理像素等于显示器的点距</small></p>
			</section>
		</div>
	</div>
</template>

<script>
	import Reveal from 'reveal.js'
	window.Reveal = Reveal
	export default {
		name: 'Share1',
		mounted(){
			this.$nextTick(function(){
				Reveal.initialize({
					controls: true,
					progress: true,
					center: true,
					hash: true,
					transition: 'slide'
				})
			})
		}
	}
</script>

<style scoped lang="scss">
.reveal {
	background-color: #000;
}
</style>