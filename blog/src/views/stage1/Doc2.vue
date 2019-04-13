<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<table class="table table-bordered">
			<tr>
				<td rowspan="4">创建对象</td>
			</tr>
			<tr>
				<td>字面量</td>
				<td>var obj1 = {x : 1, y : 2}</td>
				<td></td>
			</tr>
			<tr>
				<td>构造函数</td>
				<td>
					function foo(){} <br>
					var obj =new foo()
				</td>
				<td>
					<img src="../../assets/img/pic1.png">
				</td>
			</tr>
			<tr>
				<td>Object.create</td>
				<td>
					var obj = Object.create({x : 1})
				</td>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'Doc1',
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
.table th, .table td {
	vertical-align: middle;
}
</style>