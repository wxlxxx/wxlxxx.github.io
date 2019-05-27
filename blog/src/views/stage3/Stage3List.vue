<template>
	<div class="reveal">
		<div class="slides">
			<section>
				<h2>{{currRoute.name}}</h2>
				<ol>
					<li v-for="item in routes" v-if="item.path != ''">
						<router-link :to="item.path">{{item.name}}</router-link>
					</li>
				</ol>
			</section>
		</div>
	</div>
</template>

<script>
	import Reveal from 'reveal.js'
	export default {
		name: 'Stage3List',
		data(){
			return {
				routes: null,
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
			let rootRoutes = this.$router.options.routes
			rootRoutes.map(function(item){
				if(item.path == this.currRoute.path){
					this.routes = item.children
				}
			}.bind(this))
		},
		mounted(){
			Reveal.initialize({
				controls: true,
				progress: true,
				center: true,
				hash: false,
				transition: 'slide'
			})
		}
	}
</script>

<style scoped lang="scss">
.reveal {
	background-color: #000;
}
li {
	white-space: nowrap;
}
</style>