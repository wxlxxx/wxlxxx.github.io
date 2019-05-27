<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<circle-component ref="cp1" :colorB="'#0060b6'" :colorF="'#75cfff'" :colorContent="'#fff'" :size="80" :border="8" :vdata="30" :animateSpeed="20"></circle-component>
		<br/>
		<circle-component ref="cp2" :color-b="'#0060b6'" :color-f="'#75cfff'" :color-content="'#fff'" :size="100" :border="8" :vdata="50" :animate-speed="20"></circle-component>
		<br/>
		<circle-component ref="cp3" :color-b="'#0060b6'" :color-f="'#75cfff'" :color-content="'#fff'" :size="120" :border="12" :vdata="70" :animate-speed="20"></circle-component>
		<br/>
		<circle-component ref="cp4" :color-b="'#0060b6'" :color-f="'#75cfff'" :color-content="'#fff'" :size="200" :border="16" :vdata="90" :animate-speed="20"></circle-component>
		<br/>
		<circle-component ref="cp5" :color-b="'#0060b6'" :color-f="'#75cfff'" :color-content="'#fff'" :size="200" :border="16" :vdata="90" :animate-speed="50"></circle-component>
	</div>
</template>

<script>
	import CircleComponent from '../../components/CircleComponent.vue'
	export default {
		name: 'Demo4',
		data(){
			return {
				currRoute: null
			}
		},
		components: {CircleComponent},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			this.$refs.cp1.animate()
			this.$refs.cp2.animate()
			this.$refs.cp3.animate()
			this.$refs.cp4.animate()
			this.$refs.cp5.animate()
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">

</style>