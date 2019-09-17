<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<h4>DOM</h4>
		<p>文档对象模型(Document Object Model)的简写，在浏览器中我们可以通过js来操作DOM</p>
		<h4>真实DOM渲染过程（webkit为例）</h4>
		<div><img src="../../assets/img/doc-6-1.jpg" alt=""></div>
		<ol>
			<li>解析HTML生成DOM树。<i class="text-primary">(生成过程中可能会被CSS和JS的加载执行阻塞)</i></li>
			<li>解析CSS生成CSSOM规则树。<i class="text-primary">(查找样式表是按照从右到左的顺序去匹配的,所以尽量用id和class，避免过渡层叠)</i></li>
			<li>将DOM树与CSSOM规则树合并在一起生成渲染树。</li>
			<li>遍历渲染树开始布局，计算每个节点的位置大小信息。</li>
			<li>将渲染树每个节点绘制到屏幕。</li>
		</ol>
		<h4>渲染阻塞</h4>
		<p>当浏览器遇到一个 script 标记时，DOM 构建将暂停，直至脚本完成执行，然后继续构建DOM。每次去执行JavaScript脚本都会严重地阻塞DOM树的构建，如果JavaScript脚本还操作了CSSOM，而正好这个CSSOM还没有下载和构建，浏览器甚至会延迟脚本执行和构建DOM，直至完成其CSSOM的下载和构建。</p>
		<h4>reflow与repaint</h4>
		<p><strong>reflow:</strong> 浏览器为了重新渲染部分或全部的文档而重新计算文档中元素的位置和几何结构的过程,在reflow的过程中浏览器会将render tree中受影响的节点失效，再重新构建render tree，有时候，即使仅仅回流一个单一的元素，也可能要求它的父元素以及任何跟随它的元素也产生回流</p>
		<p><strong>replaint:</strong> 屏幕的一部分重画，不影响整体布局，比如某个CSS的背景色变了，但元素的几何尺寸和位置不变。</p>
		<p>浏览器为了防止多次reflow操作放在循环中,它会收集reflow操作到缓存队列中直到一定的规模或者过了特定的时间，再一次性地flush队列，反馈到render tree中</p>
		<pre class="bg-dark text-light"><code>
			document.addEventListener('DOMContentLoaded', function () {
			    var date = new Date();
			    for (var i = 0; i < 70000; i++) {
			        var tmpNode = document.createElement("div");
			        tmpNode.innerHTML = "test" + i;
			        document.body.appendChild(tmpNode);
			    }
			    console.log(new Date() - date);
			});
		</code></pre>
		<p>如果想要在一次reflow过后就获取元素变动过后的值浏览器为了获取真实的值就不得不立即flush缓存的队列。如offsetTop/Left/Width/Height等</p>
		<pre class="bg-dark text-light"><code>
			document.addEventListener('DOMContentLoaded', function () {
	            var date = new Date();
	            for (var i = 0; i < 70000; i++) {
	                var tmpNode = document.createElement("div");
	                tmpNode.innerHTML = "test" + i;
	                document.body.offsetHeight; // 获取body的真实值
	                document.body.appendChild(tmpNode);
	            }
	            console.log("speed time", new Date() - date);
	        });
		</code></pre>
		<h4>S操作真实DOM的代价</h4>
		<p>原生JS或JQ操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程。在一次操作中，我需要更新10个DOM节点，浏览器收到第一个DOM请求后并不知道还有9次更新操作，因此会马上执行流程，最终执行10次</p>
		<h4>Virtual DOM</h4>
		<p>定义: Virtual DOM 其实就是一棵以 JavaScript 对象( VNode 节点)作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。</p>
		<div><img src="../../assets/img/doc-6-2.png" alt=""></div>
		<p>1.渲染函数(render): 用来生成Virtual DOM</p>
		<p>2.VNode 虚拟节点: 通过 createElement 方法能将 VNode 渲染成 dom 节点,准确说createElement 返回的其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。</p>
		<pre class="bg-dark text-light"><code>
			render: function (createElement) {
			  return createElement('h1', this.blogTitle)
			}
		</code></pre>
		<p>3.patch(也叫做patching算法): 它可以将vnode渲染成真实的DOM，这个过程是对比新旧虚拟节点之间有哪些不同，然后根据对比结果找出需要更新的的节点进行更新。</p>
		<h4>为何需要Virtual DOM？</h4>
		<p>1.以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力</p>
		<p>2.操作 DOM 慢，js运行效率高。我们可以将DOM对比操作放在JS层，提高效率。</p>
		<p>3.Virtual DOM的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。</p>
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