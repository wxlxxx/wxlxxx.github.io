<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<p>AJAX：Asynchronous JavaScript and XML</p>
		<p>XMLHttpRequest对象</p>
		<p>HTTP请求步骤：</p>
		<ol>
			<li>建立TCP连接</li>
			<li>Web浏览器向Web服务器发送请求命令</li>
			<li>Web浏览器发送请求头信息</li>
			<li>web服务器应答</li>
			<li>web服务器发送应答头信息</li>
			<li>web服务器向浏览器发送数据</li>
			<li>web服务器关闭TCP连接</li>
		</ol>
		<p>HTTP请求组成</p>
		<ol>
			<li>http请求的方法或动作，比如GET还是POST</li>
			<li>请求地址</li>
			<li>请求头，包含一些客户端环境信息，身份验证信息等</li>
			<li>请求体，请求正文，包含客户端提交的查询字符串信息，表单信息等</li>
		</ol>
		<p>HTTP响应组成</p>
		<ol>
			<li>状态码</li>
			<li>响应头，响应头也和请求头一样包含许多有用的信息，例如服务器类型、日期时间、内容类型和长度等</li>
			<li>响应体</li>
		</ol>
		<p>XMLHttpRequest取得响应</p>
		<ul>
			<li>responseText:获得字符串形式的响应数据</li>
			<li>responseXML：获得XML形式的响应数据（比较少）</li>
			<li>status和statusText:以数字和文本形式返回HTTP状态码 </li>
			<li>getAllResponseHeader()：获取所有的响应报头</li>
			<li>getResponseHeader()：查询响应中的某个字段的值</li>
		</ul>
		<p>readyState属性的变化代表服务器响应的变化</p>
		<ul>
			<li>0：请求未初始化，open还没有调用</li>
			<li>1：服务器连接已建立，open已经调用了</li>
			<li>2：请求已接收，也就是接收到头信息了</li>
			<li>3：请求处理中，也就是接收到了响应主体</li>
			<li>4：请求已完成，且响应已就绪，也就是响应完成了</li>
		</ul>
		<pre class="bg-dark text-light"><code>
			var xhr = new XMLHttpRequest()
			xhr.open("post","a.php","true")
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			xhr.send({})
			xhr.onreadystatechange=function(){
				if(xhr.readState===4 && xhr.status===200){
					//xhr.responseText
				}
			}
		</code></pre>
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