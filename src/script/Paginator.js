import Vue from 'vue/dist/vue.esm.js'

var Paginator = {
	data: function () {
	    return {
	    	currPage: 1,
	        showPage:[],
	        showPageHalfNum: 2
	    }
	},
	props: ['total'],
	created: function(){
		this.init()
	},
	template: '<div class="Paginator" v-if="total>0"><span v-bind:class="{\'disabled\': currPage<=1}" v-on:click="currPage>1 ? changePage(currPage-1) : null">Prev</span><span v-bind:class="{\'disabled curr\': currPage==1}" v-on:click="changePage(1)">1</span><span v-if="currPage-showPageHalfNum>=3">...</span><span v-if="item>=2&&item<=total-1" v-for="item in showPage" v-bind:class="{\'disabled curr\': currPage==item}" v-on:click="changePage(item)">{{item}}</span><span v-if="currPage+showPageHalfNum<=total-2">...</span><span v-bind:class="{\'disabled\': currPage==total}" v-on:click="changePage(total)" v-if="total>=2">{{total}}</span><span v-bind:class="{\'disabled\': currPage>=total}" v-on:click="currPage<total ? changePage(currPage+1) : null">Next</span></div>',
	methods: {
		init: function(value){
			this.currPage = value || this.currPage
            this.showPage = []
            for(var i = -this.showPageHalfNum;i<=this.showPageHalfNum;i++){
              this.showPage.push(this.currPage+i)
            }
		},
		changePage: function(value){
			this.init(value)
            this.$emit('change-page', value)
		}
	}
}

new Vue({
	el: '#vueApp_paginator',
	components: {
		'my-paginator': Paginator
	},
	data: {
		totalPageNum: 10,
		callback1: null
	},
	created: function(){
		window.initPaginator = function(totalPageNum,callback) {
			this.totalPageNum = totalPageNum
			callback(1)
			this.callback1 = callback
		}.bind(this)
	},
	methods: {
		parentChangePage:function(num){
			this.callback1(num)
		},
	}
})