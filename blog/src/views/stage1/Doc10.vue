<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
    <ul>
      <li>闭包是指那些能够访问自由变量的函数</li>
      <li>自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量</li>
      <li>闭包 = 函数 + 函数能够访问的自由变量</li>
    </ul>
    <p>所以，从技术的角度讲，所有的JavaScript函数都是闭包 —— 《JavaScript权威指南》</p>
    <p>ECMAScript中，闭包指的是：</p>
    <ol>
      <li>从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。</li>
      <li>
        从实践角度：以下函数才算是闭包：
        <ol>
          <li>即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）</li>
          <li>在代码中引用了自由变量</li>
        </ol>
      </li>
    </ol>
    <pre class="bg-dark text-light"><code>
      var scope = "global scope";
      function checkscope(){
          var scope = "local scope";
          function f(){
              return scope;
          }
          return f;
      }

      var foo = checkscope();
      foo();
    </code></pre>
    <p>当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？</p>
    <pre class="bg-dark text-light"><code>
      fContext = {
          Scope: [AO, checkscopeContext.AO, globalContext.VO],
      }
    </code></pre>
    <p>因为这个作用域链，f 函数依然可以读取到 checkscopeContext.AO 的值，说明当 f 函数引用了 checkscopeContext.AO 中的值的时候，即使 checkscopeContext 被销毁了，但是 JavaScript 依然会让 checkscopeContext.AO 活在内存中，f 函数依然可以通过 f 函数的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。</p>
    <p>事例1：</p>
    <pre class="bg-dark text-light"><code>
      var data = [];
      for (var i = 0; i < 3; i++) {
        data[i] = function () {
          console.log(i);
        };
      }
      data[0]();
      data[1]();
      data[2]();
    </code></pre>
    <p>当执行到 data[0] 函数之前，此时全局上下文的 VO 为：</p>
    <pre class="bg-dark text-light"><code>
      globalContext = {
          VO: {
              data: [...],
              i: 3
          }
      }
    </code></pre>
    <p>当执行 data[0] 函数的时候，data[0] 函数的作用域链为：</p>
    <pre class="bg-dark text-light"><code>
      data[0]Context = {
          Scope: [AO, globalContext.VO]
      }
    </code></pre>
    <p>data[0]Context 的 AO 并没有 i 值，所以会从 globalContext.VO 中查找，i 为 3，所以打印的结果就是 3。data[1] 和 data[2] 是一样的道理。</p>
    <p>事例2：</p>
    <pre class="bg-dark text-light"><code>
      var data = [];
      for (var i = 0; i < 3; i++) {
        data[i] = function () {
          return function(){
              console.log(i);
          }
        };
      }
      data[0]();
      data[1]();
      data[2]();
    </code></pre>
    <p>当执行到 data[0] 函数之前，此时全局上下文的 VO 同事例1</p>
    <p>当执行 data[0] 函数的时候，data[0] 函数的作用域链发生了改变：</p>
    <pre class="bg-dark text-light"><code>
      data[0]Context = {
          Scope: [AO, 匿名函数Context.AO globalContext.VO]
      }
    </code></pre>
    <p><b>匿名函数</b>执行上下文的 AO 为：</p>
    <pre class="bg-dark text-light"><code>
      匿名函数Context = {
          AO: {
              arguments: {
                  0: 0,
                  length: 1
              },
              i: 0
          }
      }
    </code></pre>
    <p>所以打印的结果就是 0, data[1] 和 data[2] 是一样的道理</p>
  </div>
</template>

<script>
	export default {
		name: 'Doc10',
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
