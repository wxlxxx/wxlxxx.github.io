<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Doc8',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		}
	}
</script>

<style scoped lang="scss">

</style>