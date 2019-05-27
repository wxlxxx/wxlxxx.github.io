<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<table class="table table-bordered">
			<tr>
				<td rowspan="7">数据类型</td>
			</tr>
			<tr>
				<td></td>
				<td>object</td>
				<td>Function Array Date...</td>
			</tr>
			<tr>
				<td rowspan="6">原始类型</td>
				<td>number</td>
				<td rowspan="5"></td>
			</tr>
			<tr>
				<td>string</td>
			</tr>
			<tr>
				<td>boolean</td>
			</tr>
			<tr>
				<td>null</td>
			</tr>
			<tr>
				<td>undefined</td>
			</tr>
		</table>
		<table class="table table-bordered">
			<tr>
				<td rowspan="4">类型检测方法</td>
			</tr>
			<tr>
				<td>typeof</td>
				<td>
					typeof function () {} === "function" <br/>
					typeof(NaN) === "number" <br/>
					typeof(null) === "object" <br/>
					typeof true === "boolean" <br/>
					typeof( [1， 2] ) === "object"
				</td>
			</tr>
			<tr>
				<td>instanceof</td>
				<td>
					[1, 2] instanceof Array === true <br>
					new Object() instanceof Array === false
				</td>
			</tr>
			<tr>
				<td>Object.prototype.toString</td>
				<td>
					Object.prototype.toString.apply([]); === "[object Array]"; <br>
					Object.prototype.toString.apply(function(){}); === "[object Function]"; <br>
					Object.prototype.toString.apply(null); === "[object Null]" <br>
					Object.prototype.toString.apply(undefined); === "[object Undefined]"
				</td>
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