<template>
	<div class="reveal">
		<div class="slides">
			<section>
				<h2>A pixel is not a pixel is not a pixel</h2>
				<p>
					<small>CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport...</small>
				</p>
			</section>

			<section>
				<h3>1、核心概念</h3>
			</section>
			<section>
				<h4>1.1、PX到底是什么？</h4>
				<p class="fragment"><small>px是pixel（像素）的缩写根据 维基百科的解释，它是图像显示的基本单元，既不是一个确定的物理量，也不是一个点或者小方块，而是一个抽象概念</small></p>
				<p class="fragment"><small>不同的设备，图像基本采样单元是不同的，显示器上的物理像素等于显示器的点距,而打印机的物理像素等于打印机的墨点</small></p>
				<p class="fragment"><small>所以在谈论像素时一定要清楚它的上下文</small></p>
			</section>
			<section id="fragments">
				<h4>1.2、CSS像素</h4>
				<p>CSS像素是虚拟像素，可以理解为“直觉”像素，CSS和JS使用的抽象单位，浏览器内的一切长度都是以CSS像素为单位的，CSS像素的单位是px。</p>
				<p class="fragment"><small>在不同的设备之间，每1个CSS像素所代表的物理像素是可以变化的</small></p>
				<p class="fragment"><small>在同样一个设备上，每1个CSS像素所代表的物理像素是可以变化的</small></p>
			</section>
			<section>
				<h4>1.3、物理像素(设备像素dp/pt)</h4>
				<p class="fragment"><small>顾名思义，显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了，单位pt</small></p>
				<p class="fragment"><small>pt在css单位中属于真正的绝对单位，1pt = 1/72(inch),inch及英寸，而1英寸等于2.54厘米。</small></p>
			</section>
			<section>
				<h4>1.4、DPR(设备像素比)</h4>
				<p class="fragment"><small>css认为浏览器应该对css中的像素进行调节，使得浏览器中 1css像素的大小在不同物理设备上看上去大小总是差不多</small></p>
				<p class="fragment"><small>默认情况下一个CSS像素应该是等于一个物理像素的宽度的，但是浏览器的放大操作让一个CSS像素等于了多个设备像素宽度</small></p>
				<p class="fragment"><small>DPR(设备像素比) = 设备像素/CSS像素</small></p>
				<p class="fragment"><small>1px=(dpr)^2*dp,</small></p>
				<p class="fragment"><small>栗子</small></p>
			</section>
			<section>
				<h4>1.5、DIP（设备独立像素/逻辑像素）</h4>
				<p class="fragment"><small>window对象有一个devicePixelRatio属性，它的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。</small></p>
				<p class="fragment">
					<small>设备独立像素与物理像素的对应关系</small>
					<div><img src="../../assets/img/demo1.jpeg" alt=""></div>
				</p>
			</section>
			<section>
				<h4>1.6、PPI/DPI(像素密度)</h4>
				<p class="fragment"><small>每英寸像素取值,也就是衡量单位物理面积内拥有像素值的情况</small></p>
				<p class="fragment">
					<small>ppi越高，每英寸像素点越多，图像越清晰</small>
					<div>
						<img src="../../assets/img/demo2.jpeg" alt="">
						<img src="../../assets/img/demo3.jpeg" alt="">
					</div>
				</p>
			</section>
			<section>
				<h4>1.7、计算PPI</h4>
				<p class="fragment"><small>手机屏幕距离你的眼睛10-12英寸(约25-30厘米)时，它的分辨率只要达到300PPI这个神奇数字(每英寸300个像素点)以上，你的视网膜就无法分辨出像素点了，这样的屏幕被称为“视网膜屏幕”。由于其具备超高的像素密度，因此屏幕显示异常清晰、锐利。而通常电脑显示屏幕的分辨率为72PPI</small></p>
				<p class="fragment"><small>PPI的计算公式表达为 PPI=√(X²+Y²)/ Z (X:长度像素数；Y:宽度像素数；Z:屏幕尺寸)</small></p>
			</section>

			<section>
				<h3>2、Viewport</h3>
			</section>
			<section>
				<h4>2.1、layout viewport</h4>
				<p class="fragment"><small>首先，移动设备上的浏览器认为自己必须能让所有的网站都正常显示</small></p>
				<p class="fragment"><small>但如果以浏览器的可视区域作为viewport的话,那些为桌面浏览器设计的网站会挤作一团或布局乱掉</small></p>
				<p class="fragment"><small>浏览器就决定默认情况下把viewport设为一个较宽的值，比如980px</small></p>
				<p class="fragment"><small>这个浏览器默认的viewport叫做 layout viewport</small></p>
				<p class="fragment"><small>栗子</small></p>
			</section>
			<section>
				<h4>2.2、visual viewport</h4>
				<p class="fragment"><small>上文提到的layout viewport宽度是大于浏览器可视区域的宽度的</small></p>
				<p class="fragment"><small>我们还需要一个viewport来代表 浏览器可视区域的大小,这个viewport叫做 visual viewport</small></p>
				<p class="fragment">
					<img src="../../assets/img/demo4.jpeg" alt="">
				</p>
			</section>
			<section>
				<h4>2.3、ideal viewport</h4>
				<p class="fragment"><small>不需要用户缩放和横向滚动条就能正常的查看网站的所有内容</small></p>
				<p class="fragment"><small>文字以及其他元素无论是在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的</small></p>
				<p class="fragment"><small>移动设备的理想viewport —— ideal viewport</small></p>
				<p class="fragment"><small>不同的设备拥有有不同的ideal viewport</small></p>
				<p class="fragment"><small>ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户</small></p>
			</section>
			<section>
				<h4>2.4、如何得到ideal viewport</h4>
				<p class="fragment">
					<pre><code class="hljs html" style="word-wrap: break-word;">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"&gt;</code></pre>
				</p>
				<p class="fragment"><small>只设置width=device-width 在iphone和ipad上，无论是竖屏还是横屏，宽度都是竖屏时ideal viewport的宽度</small></p>
				<p class="fragment"><small>只设置initial-scale=1 windows phone 上的IE 无论是竖屏还是横屏都把宽度设为竖屏时 ideal viewport 的宽度</small></p>
				<p class="fragment"><small>栗子</small></p>
			</section>
			<section>
				<h4>2.5、initial-scale的默认值</h4>
				<p class="fragment"><small>各浏览器默认的 layout viewport 宽度一般都是980啊，1024啊，800啊等等这些个值</small></p>
				<p class="fragment"><small>浏览器会自动计算 initial-scale 这个值，以保证当前 layout viewport 的宽度在缩放后就是浏览器可视区域的宽度，也就是说不会出现横向滚动条</small></p>
			</section>

			<section>
				<h3>3、非retina屏情况下网页图片问题</h3>
			</section>

			<section>
				<h3>4、retina屏情况下网页图片问题</h3>
			</section>
		</div>
	</div>
</template>

<script>
	import Reveal from 'reveal.js'
	window.Reveal = Reveal
	export default {
		name: 'Share1',
		mounted(){
			this.$nextTick(function(){
				Reveal.initialize({
					controls: true,
					progress: true,
					center: true,
					hash: true,
					transition: 'slide'
				})
			})
		}
	}
</script>

<style scoped lang="scss">
.reveal {
	background-color: #000;
}
</style>