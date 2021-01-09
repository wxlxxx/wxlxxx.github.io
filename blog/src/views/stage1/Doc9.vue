<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
    <p>3个概念</p>
    <ol>
      <li>执行上下文: JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，这里的“一段代码”指的是可执行代码(executable code)。分为<b>全局代码、函数代码、eval代码</b>，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution contexts)"。JavaScript 引擎创建了<b>执行上下文栈</b>（Execution context stack，ECS）来管理执行上下文</li>
      <li>变量对象(Variable object，VO): 变量对象是与执行上下文相关的数据<b>作用域</b>，存储了在上下文中定义的变量和函数声明。分为<b>全局上下文</b>下的变量对象和<b>函数上下文</b>下的变量对象.全局上下文中的变量对象就是全局对象.</li>
      <li>作用域链(Scope chain): 当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。</li>
      <li>this: <a href="https://juejin.cn/post/6844903473872371725">详细解释</a></li>
    </ol>
    <p>事例：</p>
    <pre class="bg-dark text-light"><code>
      var scope = "global scope";
      function checkscope(){
          var scope2 = 'local scope';
          return scope2;
      }
      checkscope();
		</code></pre>
    <p class="pt-4">1.checkscope 函数被创建，保存作用域链到所有函数都有的内部属性[[scope]], js为静态作用域，函数的作用域在函数定义的时候就决定了。</p>
    <pre class="bg-dark text-light"><code>
      checkscope.[[scope]] = [
          globalContext.VO
      ];
    </code></pre>
    <p class="text-muted">(globalContext.VO表示全局上下文的变量对象即全局变量)</p>
    <p class="pt-4">2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈</p>
    <pre class="bg-dark text-light"><code>
      ECStack = [
          checkscopeContext,
          globalContext
      ];
    </code></pre>
    <p class="text-muted">(ECStack为执行上下文栈，初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它)</p>
    <p class="pt-4">3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链</p>
    <pre class="bg-dark text-light"><code>
      checkscopeContext = {
          Scope: checkscope.[[scope]],
      }
    </code></pre>
    <p class="text-muted">checkscopeContext为函数上下文, Scope为作用域链</p>
    <p class="pt-4">4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明</p>
    <pre class="bg-dark text-light"><code>
      checkscopeContext = {
          AO: {
              arguments: {
                  length: 0
              },
              scope2: undefined
          }
      }
    </code></pre>
    <p class="text-muted">AO为函数上下文的变量对象</p>
    <p class="pt-4">5.第三步：将活动对象压入 checkscope 作用域链顶端</p>
    <pre class="bg-dark text-light"><code>
      checkscopeContext = {
          AO: {
              arguments: {
                  length: 0
              },
              scope2: undefined
          },
          Scope: [AO, [[Scope]]]
      }
    </code></pre>
    <p class="pt-4">6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值</p>
    <pre class="bg-dark text-light"><code>
      checkscopeContext = {
          AO: {
              arguments: {
                  length: 0
              },
              scope2: 'local scope'
          },
          Scope: [AO, [[Scope]]]
      }
    </code></pre>
    <p class="pt-4">7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出</p>
    <pre class="bg-dark text-light"><code>
      ECStack = [
          globalContext
      ];
    </code></pre>
    <p class="pt-4">8.事例代码执行完毕</p>
    <p class="pt-5">事例2:</p>
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
    <ol>
      <li>进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈</li>
      <li>全局执行上下文初始化</li>
      <li>执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈</li>
      <li>checkscope 执行上下文初始化，创建变量对象、作用域链、this等</li>
      <li>checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出</li>
      <li>执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈</li>
      <li>f 执行上下文初始化，创建变量对象、作用域链、this等</li>
      <li>f 函数执行完毕，f 函数上下文从执行上下文栈中弹出</li>
    </ol>
	</div>
</template>

<script>
	export default {
		name: 'Doc9',
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
