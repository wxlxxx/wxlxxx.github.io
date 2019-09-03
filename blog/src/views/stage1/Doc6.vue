<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Demo2',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		},
	}
</script>