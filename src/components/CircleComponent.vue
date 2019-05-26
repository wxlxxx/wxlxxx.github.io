<template>
	<div>
		<div v-bind:style="box.style">
			<div v-bind:style="leftCircle.style"></div>
			<div v-bind:style="rightCircle.style"></div>
			<div v-bind:style="content.style">{{content.text}}%</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CircleComponent',
		data(){
			return {
				currRoute: null,

				box:{
					style:{'width':this.size+'px','height':this.size+'px','borderRadius':'50%','backgroundColor':this.colorB,'position':'relative'}
				},
				content:{
					style:{'width':this.size-this.border*2+'px','height':this.size-this.border*2+'px','borderRadius':'50%','backgroundColor':this.colorContent,'position':'absolute','left':this.border+'px','top':this.border+'px','fontSize':this.size*0.3+'px','textAlign':'center','lineHeight':this.size-this.border*2+'px'},
					text:0
				},
				leftCircle:{
					style:{'width':this.size+'px','height':this.size+'px','borderRadius':'50%','backgroundColor':this.colorF,'position':'absolute','left':'0px','top':'0px','clip':'rect(0px '+this.size/2+'px'+' '+this.size+'px'+' 0px)','transition':'','transform':'rotate(0deg)'}
				},
				rightCircle:{
					style:{'width':this.size+'px','height':this.size+'px','borderRadius':'50%','backgroundColor':this.colorF,'position':'absolute','left':'0px','top':'0px','clip':'rect(0px '+this.size+'px'+' '+this.size+'px'+' '+this.size/2+'px)','transition':'','transform':'rotate(0deg)'}
				}
			}
		},
		props:['colorB','colorF','size','vdata','border','colorContent','animateSpeed'],
		created(){
			this.currRoute = this.$route
		},
		mounted(){

		},
		methods: {
			animate:function(){
				if(this.vdata<=50){
					this.rightCircle.style.transition = 'all '+this.vdata*this.animateSpeed/1000+'s linear'
					setTimeout(function(){this.rightCircle.style.transform = 'rotate('+this.vdata/100*360+'deg)'}.bind(this))
					var inter = setInterval(function(){
						this.content.text += 1
						if(this.content.text == this.vdata){
							clearInterval(inter)
						}
					}.bind(this),this.animateSpeed)
				}else{
					this.rightCircle.style.transition = 'all '+50*this.animateSpeed/1000+'s linear'
					this.leftCircle.style.transition = 'all '+(this.vdata-50)*this.animateSpeed/1000+'s linear'
					setTimeout(function(){this.rightCircle.style.transform = 'rotate(180deg)'}.bind(this))
					setTimeout(function(){
						this.rightCircle.style.transition = 'none'
						this.rightCircle.style.transform = 'rotate(0deg)'
						this.rightCircle.style.backgroundColor = this.colorB
						this.leftCircle.style.transform = 'rotate('+((this.vdata-50)/100*360)+'deg)'
					}.bind(this),50*this.animateSpeed)
					var inter = setInterval(function(){
						this.content.text += 1
						if(this.content.text == this.vdata){
							clearInterval(inter)
						}
					}.bind(this),this.animateSpeed)
				}
			}
		}
	}
</script>

<style scoped lang="scss">

</style>