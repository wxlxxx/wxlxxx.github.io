<template>
	<div>
		<h1 class="mb-4">{{currRoute.name}}</h1>
		<ol>
			<!-- <li v-for="item in routes" v-if="item.path != ''">
				<router-link :to="item.path">{{item.name}}</router-link>
			</li> -->
			<li v-for="item in routes" v-if="item.path != ''">
				<a :href="item.fullPath">{{item.name}}</a>
			</li>
		</ol>
	</div>
</template>

<script>
	export default {
		name: 'Stage1List',
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
		}
	}
</script>

<style scoped lang="scss">
	ol {
		padding-left: 1rem;
		li {
			margin-bottom: 1rem;
		}
	}
</style>