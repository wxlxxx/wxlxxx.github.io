<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<table class="table table-bordered">
			<tr>
				<td>this指向</td>
				<td colspan="2">
					this是在函数被调用时才发生的绑定，也就是说this具体指向什么，取决于怎么调用的函数。
				</td>
			</tr>
			<tr>
				<td>绑定规则</td>
				<td colspan="2">默认绑定、隐式绑定、显示绑定。优先级从低到高</td>
			</tr>
			<tr>
				<td>默认绑定</td>
				<td>即没有其他绑定规则存在时的默认规则</td>
				<td>
		<pre class="bg-dark text-light"><code>
		function foo() {
			console.log( this.a );
		}
		var a = 2; 
		foo(); // 2
		</code></pre>
					<p>默认绑定，将全局对象绑定this上,所以this.a 就解析成了全局变量中的a(在严格模式下执行会报undefined的错误)</p>
				</td>
			</tr>
			<tr>
				<td>隐式绑定</td>
				<td>函数的调用是在某个对象上触发的，即调用位置上存在上下文对象</td>
				<td>
		<pre class="bg-dark text-light"><code>
		function foo() { 
			console.log( this.a );
		}
		var a = 2;
		var obj = { 
			a: 3,
			foo: foo 
		};
		obj.foo(); // 3
		</code></pre>
					<p>这里对foo的调用存在上下文对象obj,即this绑定到了obj上，所以this.a被解析成了obj.a</p>
				</td>
			</tr>
			<tr>
				<td>显示绑定</td>
				<td>
					<p>通过这两个方法call(…)或apply(…)来实现改变对象的prototype关联对象</p>
					<p>apply/call: 劫持另外一个对象的方法，继承另外一个对象的属性</p>
					<p>obj1.apply(obj2, args): 用obj2对象来代替obj1，调用obj1的方法</p>
					<p>call()可以接收任何类型的参数，而apply()只能接收数组参数</p>
				</td>
				<td>
		<pre class="bg-dark text-light"><code>
		function foo() { 
			console.log( this.a );
		}
		var a = 2;
		var obj1 = { 
			a: 3,
		};
		var obj2 = { 
			a: 4,
		};
		foo.call( obj1 ); // 3
		foo.call( obj2 ); // 4
		</code></pre>
				</td>
			</tr>
			<tr>
				<td>箭头函数</td>
				<td>箭头函数中显示绑定不会生效</td>
				<td>
		<pre class="bg-dark text-light"><code>
		var foo = () => {   
			console.log( this.a );
		}
		var a = 2;
		var obj = { 
			a: 3,
			foo: foo 
		};
		obj.foo(); // 2
		foo.call(obj); // 2
		</code></pre>
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