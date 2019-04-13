<template>
	<div class="bg-dark py-5" style="min-height: 100vh;">
		<div class="container">
			<div class="bg-light p-5 rounded">
				<h1 class="mb-4">{{currentRoute.name}}</h1>
				<ol>
					<li v-for="item in routes" v-if="item.path.search(currentRoute.path) == 0 && item.path != currentRoute.path">
						<router-link :to="item.path">{{item.name}}</router-link>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Stage1',
		data(){
			return {
				routes: null,
				currentRoute: null
			}
		},
		created(){
			this.routes = this.$router.options.routes
			this.currentRoute = this.$router.currentRoute
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