webpackJsonp([0,2],[,,function(t,e,n){n(19);var s=n(0)(n(24),n(13),null,null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(1),i=n.n(s),a=n(22),r=n.n(a),o=n(8),h=n.n(o),c=n(4),p=n.n(c),u=n(5),f=n.n(u),l=n(6),d=n.n(l);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:h.a},{path:"/demo1",name:"Demo1",component:p.a},{path:"/demo2",name:"Demo2",component:f.a},{path:"/demo3",name:"Demo3",component:d.a}]})},function(t,e,n){n(15);var s=n(0)(n(25),n(9),"data-v-269777e3",null);t.exports=s.exports},function(t,e,n){n(16);var s=n(0)(n(26),n(10),"data-v-26a58f64",null);t.exports=s.exports},function(t,e,n){n(17);var s=n(0)(n(27),n(11),"data-v-26b3a6e5",null);t.exports=s.exports},function(t,e,n){n(20);var s=n(0)(n(28),n(14),"data-v-72d4c9e6",null);t.exports=s.exports},function(t,e,n){n(18);var s=n(0)(n(29),n(12),"data-v-410e2007",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo1"},[t._v("\n我是demo1\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo2"},[t._v("\n我是demo2\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo3"},[t._v("\n我是demo3\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello",style:{height:t.innerHeight+"px"}},[t._l(t.pages,function(e,s){return n("div",{on:{click:function(e){t.resetPosition(s)}}},[n("enter",{ref:"enter",refInFor:!0,style:{transform:"rotate("+e.rotate+"deg)","-ms-transform":"rotate("+e.rotate+"deg)","-moz-transform":"rotate("+e.rotate+"deg)","-webkit-transform":"rotate("+e.rotate+"deg)"},attrs:{title:e.title,desc:t.activeId==s?e.desc:"",left:e.left,top:e.top}})],1)}),t._v(" "),n("nav",t._l(t.pages,function(e,s){return n("li",[n("span",{class:t.activeId==s?"active":"",on:{click:function(e){t.resetPosition(s)}}})])}))],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"enter",style:{left:t.left+"px",top:t.top+"px",backgroundImage:"url(static/bg.jpg)"}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.desc))])])},staticRenderFns:[]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo1"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo2"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo3"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"enter",props:["title","desc","left","top"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=n.n(s);e.default={name:"hello",data:function(){return{rangeLeft:{x:[0,0],y:[0,0]},rangeRight:{x:[0,0],y:[0,0]},rangeTop:{x:[0,0],y:[0,0]},rangeCenter:{x:0,y:0},innerHeight:"",pages:[{title:"",desc:"",linkto:""}],activeId:0}},components:{Enter:i.a},mounted:function(){var t=this.$refs.enter[0].$el.clientWidth,e=this.$refs.enter[0].$el.clientHeight,n=window.innerWidth,s=window.innerHeight;this.innerHeight=s,this.rangeLeft.x[0]=-t/2,this.rangeLeft.x[1]=(n-2*t)/2-t/2,this.rangeLeft.y[0]=-e/2,this.rangeLeft.y[1]=s-e/2,this.rangeRight.x[0]=(n-2*t)/2+1.5*t,this.rangeRight.x[1]=n-t/2,this.rangeRight.y[0]=-e/2,this.rangeRight.y[1]=s-e/2,this.rangeTop.x[0]=(n-2*t)/2-t,this.rangeTop.x[1]=n-(n-2*t)/2,this.rangeTop.y[0]=-e/2,this.rangeTop.y[1]=(s-2*e)/2-e/2,this.rangeCenter.x=(n-2*t)/2+t/2,this.rangeCenter.y=(s-2*e)/2+e/2;var i=new XMLHttpRequest;i.open("GET","static/test.json",!0),i.send(null),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status||304==i.status){var t=JSON.parse(i.responseText),e=[];t.map(function(t){e.push({title:t.title,desc:t.desc,linkto:t.linkto})}),this.pages=e,this.setPosition(0)}}.bind(this)},methods:{setPosition:function(t){this.pages.map(function(t,e){this.$set(t,"rotate",parseInt(60*Math.random()-30,10));var n=parseInt(3*Math.random(),10);0==n?this.setTopPosition(e):1==n?this.setLeftPosition(e):this.setRightPosition(e)}.bind(this)),this.setCenterPosition(t)},setCenterPosition:function(t){this.$set(this.pages[t],"left",this.rangeCenter.x),this.$set(this.pages[t],"top",this.rangeCenter.y),this.pages[t].rotate=0},setLeftPosition:function(t){this.$set(this.pages[t],"left",parseInt(Math.random()*(this.rangeLeft.x[1]-this.rangeLeft.x[0])+this.rangeLeft.x[0]),10),this.$set(this.pages[t],"top",parseInt(Math.random()*(this.rangeLeft.y[1]-this.rangeLeft.y[0])+this.rangeLeft.y[0]),10)},setRightPosition:function(t){this.$set(this.pages[t],"left",parseInt(Math.random()*(this.rangeRight.x[1]-this.rangeRight.x[0])+this.rangeRight.x[0]),10),this.$set(this.pages[t],"top",parseInt(Math.random()*(this.rangeRight.y[1]-this.rangeRight.y[0])+this.rangeRight.y[0]),10)},setTopPosition:function(t){this.$set(this.pages[t],"left",parseInt(Math.random()*(this.rangeTop.x[1]-this.rangeTop.x[0])+this.rangeTop.x[0]),10),this.$set(this.pages[t],"top",parseInt(Math.random()*(this.rangeTop.y[1]-this.rangeTop.y[0])+this.rangeTop.y[0]),10)},resetPosition:function(t){this.activeId==t?t==this.pages.length-1?window.location.href="http://wxlxxx.github.io":this.$router.push(this.pages[t].linkto):(this.activeId=t,this.setPosition(t))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s),a=n(2),r=n.n(a),o=n(3);new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})}],[30]);
//# sourceMappingURL=app.js.map