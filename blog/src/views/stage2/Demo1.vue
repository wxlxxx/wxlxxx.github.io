<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<div class="row no-gutters flex-nowrap">
			<div class="col" v-for="(color,i) in colors" :key="i">
				<div :class="'p-4 ' + (i>=6 ? 'text-white' : 'text-dark')" :style="{backgroundColor: color}">{{color}}</div>
			</div>
		</div>
		<div class="py-3">
			<input class="form-control" v-model="primaryColor" type="text">
		</div>
	</div>
</template>

<script>
// import { generate } from '@ant-design/colors'
import generate from '../../assets/js/generateColors.js'
export default {
	name: 'Colors',
	data(){
		return {
			currRoute: null,

			colors: [],
			primaryColor: '#1890ff'
		}
	},
	created(){
		this.currRoute = this.$route

		this.colors = generate(this.primaryColor)
	},
	watch: {
		primaryColor: function(currVal) {
			this.colors = generate(currVal)
		}
	},
	mounted(){
		
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">

</style>