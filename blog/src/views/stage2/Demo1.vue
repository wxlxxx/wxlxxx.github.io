<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<elliptical :cw="800" :ch="500"></elliptical>
	</div>
</template>

<script>
	import createjs from 'createjs'
	import Elliptical from '../../components/Elliptical.vue'
	export default {
		name: 'Doc1',
		components: {Elliptical},
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

</style>