<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<div class="marquee">
			<div class="marquee-item">
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
				<p>8</p>
				<p>9</p>
				<p>10</p>
				<p>11</p>
				<p>12</p>
				<p>13</p>
				<p>14</p>
				<p>15</p>
				<p>16</p>
				<p>17</p>
				<p>18</p>
				<p>19</p>
				<p>20</p>	
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'Demo1',
		data(){
			return {
				currRoute: null
			}
		},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			this.marquee('.marquee','.marquee-item',8000)
		},
		methods: {
			marquee(box,item,speed){
				var H = $(box).height()
				var h = $(item).innerHeight()
				var clone = $(item).clone(true)
				$(box).append(clone)
				$(item).eq(0).css('margin-top','-'+(2*h-H)+'px');
				(function marqueeScroll(){
					$(item).eq(0).animate({'marginTop':-(h-H)+'px'},speed,'linear',function(){
				        $(item).eq(0).css('margin-top','-'+(2*h-H)+'px');
				        marqueeScroll()
				    })
				})()
			}
		}
	}
</script>

<style scoped lang="scss">
.marquee{width: 300px;margin: 100px auto;height: 300px;overflow: hidden;}
.marquee .marquee-item p{background-color: #666;color: #fff;text-align: center;}
</style>