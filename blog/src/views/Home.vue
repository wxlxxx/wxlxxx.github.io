<template>
	<div style="height: 100vh" class="bg-dark d-flex align-items-center justify-content-center">
		<router-link v-for="item in routes" v-if="item.path != currRoute.path" class="bg-primary rounded p-md-5 mx-5 h2 text-light" :to="item.path">{{item.name}}</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data(){
			return {
				routes: null,
				currRoute: null
			}
		},
		created(){
			this.routes = this.$router.options.routes
			this.currRoute = this.$route
		}
	}
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
a {
	&:hover {
		text-decoration: none !important;
	}
}
</style>