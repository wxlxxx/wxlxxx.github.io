(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00ac":function(t,e,a){t.exports=a.p+"assets/img/demo5.jpg"},"0295":function(t,e,a){"use strict";var n=a("433c"),s=a.n(n);s.a},"02fc":function(t,e,a){t.exports=a.p+"assets/img/demo4.jpeg"},"0a18":function(t,e,a){t.exports=a.p+"assets/img/pic1.png"},"0e35":function(t,e,a){"use strict";var n=a("4e8e"),s=a.n(n);s.a},1310:function(t,e,a){t.exports=a.p+"assets/img/demo2.jpeg"},1425:function(t,e,a){},"15b9":function(t,e,a){t.exports=a.p+"assets/img/demo3.jpeg"},"30cc":function(t,e,a){},"3e55":function(t,e,a){},"42cf":function(t,e,a){},"433c":function(t,e,a){},"499a":function(t,e,a){t.exports=a.p+"assets/img/pic2.png"},"4a96":function(t,e,a){"use strict";var n=a("abb5"),s=a.n(n);s.a},"4e8e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("3e2e"),a("c29f"),a("ea5e"),a("1f70");var n=a("6e6d"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],i={name:"App"},o=i,c=a("17cc"),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,p=a("1e6f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark d-flex align-items-center justify-content-center",staticStyle:{height:"100vh"}},t._l(t.routes,function(e){return e.path!=t.currRoute.path?a("router-link",{staticClass:"bg-primary rounded p-md-5 mx-5 h2 text-light",attrs:{to:e.path}},[t._v(t._s(e.name))]):t._e()}),1)},f=[],h={name:"Home",data:function(){return{routes:null,currRoute:null}},created:function(){this.routes=this.$router.options.routes,this.currRoute=this.$route}},m=h,v=(a("5d26"),Object(c["a"])(m,d,f,!1,null,"d8dc0fa2",null)),_=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark py-5",staticStyle:{"min-height":"100vh"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"bg-light p-5 rounded"},[a("router-view")],1)])])},b=[],x={name:"Stage1"},C=x,w=(a("4a96"),Object(c["a"])(C,g,b,!1,null,null,null)),y=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark py-5",staticStyle:{"min-height":"100vh"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"bg-light p-5 rounded"},[a("router-view")],1)])])},S=[],R={name:"Stage2"},$=R,P=(a("f407"),Object(c["a"])($,j,S,!1,null,"60247556",null)),k=P.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},O=[],z={name:"Stage3"},I=z,A=(a("de59"),Object(c["a"])(I,E,O,!1,null,"6fba389a",null)),T=A.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("ol",t._l(t.routes,function(e){return""!=e.path?a("li",[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])},X=[],D={name:"Stage1List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))}},q=D,H=(a("7036"),Object(c["a"])(q,M,X,!1,null,"fa4fea38",null)),Y=H.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0),t._m(1)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-bordered"},[a("tr",[a("td",{attrs:{rowspan:"7"}},[t._v("数据类型")])]),a("tr",[a("td"),a("td",[t._v("object")]),a("td",[t._v("Function Array Date...")])]),a("tr",[a("td",{attrs:{rowspan:"6"}},[t._v("原始类型")]),a("td",[t._v("number")]),a("td",{attrs:{rowspan:"5"}})]),a("tr",[a("td",[t._v("string")])]),a("tr",[a("td",[t._v("boolean")])]),a("tr",[a("td",[t._v("null")])]),a("tr",[a("td",[t._v("undefined")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-bordered"},[a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("类型检测方法")])]),a("tr",[a("td",[t._v("typeof")]),a("td",[t._v('\n\t\t\t\ttypeof function () {} === "function" '),a("br"),t._v('\n\t\t\t\ttypeof(NaN) === "number" '),a("br"),t._v('\n\t\t\t\ttypeof(null) === "object" '),a("br"),t._v('\n\t\t\t\ttypeof true === "boolean" '),a("br"),t._v('\n\t\t\t\ttypeof( [1， 2] ) === "object"\n\t\t\t')])]),a("tr",[a("td",[t._v("instanceof")]),a("td",[t._v("\n\t\t\t\t[1, 2] instanceof Array === true "),a("br"),t._v("\n\t\t\t\tnew Object() instanceof Array === false\n\t\t\t")])]),a("tr",[a("td",[t._v("Object.prototype.toString")]),a("td",[t._v('\n\t\t\t\tObject.prototype.toString.apply([]); === "[object Array]"; '),a("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(function(){}); === "[object Function]"; '),a("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(null); === "[object Null]" '),a("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(undefined); === "[object Undefined]"\n\t\t\t')])])])}],B={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},W=B,J=(a("0e35"),Object(c["a"])(W,L,F,!1,null,"f97ada48",null)),N=J.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-bordered"},[n("tr",[n("td",{attrs:{rowspan:"4"}},[t._v("创建对象")])]),n("tr",[n("td",[t._v("字面量")]),n("td",[t._v("var obj1 = {x : 1, y : 2}")]),n("td")]),n("tr",[n("td",[t._v("构造函数")]),n("td",[t._v("\n\t\t\t\tfunction foo(){} "),n("br"),t._v("\n\t\t\t\tvar obj =new foo()\n\t\t\t")]),n("td",[n("img",{attrs:{src:a("0a18")}})])]),n("tr",[n("td",[t._v("Object.create")]),n("td",[t._v("\n\t\t\t\tvar obj = Object.create({x : 1})\n\t\t\t")]),n("td")])])}],Z={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},G=Z,K=(a("fb4f"),Object(c["a"])(G,U,V,!1,null,"33622598",null)),Q=K.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("p",[t._v("AJAX：Asynchronous JavaScript and XML")]),a("p",[t._v("XMLHttpRequest对象")]),a("p",[t._v("HTTP请求步骤：")]),t._m(0),a("p",[t._v("HTTP请求组成")]),t._m(1),a("p",[t._v("HTTP响应组成")]),t._m(2),a("p",[t._v("XMLHttpRequest取得响应")]),t._m(3),a("p",[t._v("readyState属性的变化代表服务器响应的变化")]),t._m(4),t._m(5)])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("建立TCP连接")]),a("li",[t._v("Web浏览器向Web服务器发送请求命令")]),a("li",[t._v("Web浏览器发送请求头信息")]),a("li",[t._v("web服务器应答")]),a("li",[t._v("web服务器发送应答头信息")]),a("li",[t._v("web服务器向浏览器发送数据")]),a("li",[t._v("web服务器关闭TCP连接")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("http请求的方法或动作，比如GET还是POST")]),a("li",[t._v("请求地址")]),a("li",[t._v("请求头，包含一些客户端环境信息，身份验证信息等")]),a("li",[t._v("请求体，请求正文，包含客户端提交的查询字符串信息，表单信息等")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("状态码")]),a("li",[t._v("响应头，响应头也和请求头一样包含许多有用的信息，例如服务器类型、日期时间、内容类型和长度等")]),a("li",[t._v("响应体")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("responseText:获得字符串形式的响应数据")]),a("li",[t._v("responseXML：获得XML形式的响应数据（比较少）")]),a("li",[t._v("status和statusText:以数字和文本形式返回HTTP状态码 ")]),a("li",[t._v("getAllResponseHeader()：获取所有的响应报头")]),a("li",[t._v("getResponseHeader()：查询响应中的某个字段的值")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("0：请求未初始化，open还没有调用")]),a("li",[t._v("1：服务器连接已建立，open已经调用了")]),a("li",[t._v("2：请求已接收，也就是接收到头信息了")]),a("li",[t._v("3：请求处理中，也就是接收到了响应主体")]),a("li",[t._v("4：请求已完成，且响应已就绪，也就是响应完成了")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"bg-dark text-light"},[a("code",[t._v('\n\t\tvar xhr = new XMLHttpRequest()\n\t\txhr.open("post","a.php","true")\n\t\txhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")\n\t\txhr.send({})\n\t\txhr.onreadystatechange=function(){\n\t\t\tif(xhr.readState===4 && xhr.status===200){\n\t\t\t\t//xhr.responseText\n\t\t\t}\n\t\t}\n\t')])])}],at={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},nt=at,st=(a("7b99"),Object(c["a"])(nt,tt,et,!1,null,"55d0088e",null)),rt=st.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-bordered"},[a("tr",[a("td",[t._v("this指向")]),a("td",{attrs:{colspan:"2"}},[t._v("\n\t\t\t\tthis是在函数被调用时才发生的绑定，也就是说this具体指向什么，取决于怎么调用的函数。\n\t\t\t")])]),a("tr",[a("td",[t._v("绑定规则")]),a("td",{attrs:{colspan:"2"}},[t._v("默认绑定、隐式绑定、显示绑定。优先级从低到高")])]),a("tr",[a("td",[t._v("默认绑定")]),a("td",[t._v("即没有其他绑定规则存在时的默认规则")]),a("td",[a("pre",{staticClass:"bg-dark text-light"},[a("code",[t._v("\n\tfunction foo() {\n\t\tconsole.log( this.a );\n\t}\n\tvar a = 2; \n\tfoo(); // 2\n\t")])]),a("p",[t._v("默认绑定，将全局对象绑定this上,所以this.a 就解析成了全局变量中的a(在严格模式下执行会报undefined的错误)")])])]),a("tr",[a("td",[t._v("隐式绑定")]),a("td",[t._v("函数的调用是在某个对象上触发的，即调用位置上存在上下文对象")]),a("td",[a("pre",{staticClass:"bg-dark text-light"},[a("code",[t._v("\n\tfunction foo() { \n\t\tconsole.log( this.a );\n\t}\n\tvar a = 2;\n\tvar obj = { \n\t\ta: 3,\n\t\tfoo: foo \n\t};\n\tobj.foo(); // 3\n\t")])]),a("p",[t._v("这里对foo的调用存在上下文对象obj,即this绑定到了obj上，所以this.a被解析成了obj.a")])])]),a("tr",[a("td",[t._v("显示绑定")]),a("td",[a("p",[t._v("通过这两个方法call(…)或apply(…)来实现改变对象的prototype关联对象")]),a("p",[t._v("apply/call: 劫持另外一个对象的方法，继承另外一个对象的属性")]),a("p",[t._v("obj1.apply(obj2, args): 用obj2对象来代替obj1，调用obj1的方法")]),a("p",[t._v("call()可以接收任何类型的参数，而apply()只能接收数组参数")])]),a("td",[a("pre",{staticClass:"bg-dark text-light"},[a("code",[t._v("\n\tfunction foo() { \n\t\tconsole.log( this.a );\n\t}\n\tvar a = 2;\n\tvar obj1 = { \n\t\ta: 3,\n\t};\n\tvar obj2 = { \n\t\ta: 4,\n\t};\n\tfoo.call( obj1 ); // 3\n\tfoo.call( obj2 ); // 4\n\t")])])])]),a("tr",[a("td",[t._v("箭头函数")]),a("td",[t._v("箭头函数中显示绑定不会生效")]),a("td",[a("pre",{staticClass:"bg-dark text-light"},[a("code",[t._v("\n\tvar foo = () => {   \n\t\tconsole.log( this.a );\n\t}\n\tvar a = 2;\n\tvar obj = { \n\t\ta: 3,\n\t\tfoo: foo \n\t};\n\tobj.foo(); // 2\n\tfoo.call(obj); // 2\n\t")])])])])])}],ct={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},lt=ct,ut=(a("0295"),Object(c["a"])(lt,it,ot,!1,null,"3e16c1c2",null)),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("ol",t._l(t.routes,function(e){return""!=e.path?a("li",[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])},ft=[],ht={name:"Stage1List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))}},mt=ht,vt=(a("6b49"),Object(c["a"])(mt,dt,ft,!1,null,"3a0f2a04",null)),_t=vt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("canvas",{ref:"App_mazecanvas"})])},bt=[],xt=(a("271e"),{name:"Demo3",data:function(){return{currRoute:null,canvas:null,context:null,image:"maze.gif",startX:440,startY:0,endX:571,endY:131,startSpotStyle:"#0000FF",endSpotStyle:"#20c997"}},created:function(){this.currRoute=this.$route},mounted:function(){this.canvas=this.$refs.App_mazecanvas,this.context=this.canvas.getContext("2d");var t=a("bb6e")("./"+this.image),e=new Image;e.onload=function(){this.canvas.width=e.width+30,this.canvas.height=e.height+30,this.drawWhite(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(e,15,15),this.drawSpot(this.startX,this.startY,this.startSpotStyle),this.drawSpot(this.endX,this.endY,this.endSpotStyle)}.bind(this),e.src=t,window.addEventListener("keydown",this.move,!0)},methods:{drawSpot:function(t,e,a){this.context.beginPath(),this.context.rect(t,e,15,15),this.context.closePath(),this.context.fillStyle=a,this.context.fill()},move:function(t){var e,a;switch(t=t||window.event,t.keyCode){case 38:e=this.startX,a=this.startY-3;break;case 37:e=this.startX-3,a=this.startY;break;case 40:e=this.startX,a=this.startY+3;break;case 39:e=this.startX+3,a=this.startY;break;default:return}this.canMove(e,a)&&(this.drawWhite(this.startX,this.startY,15,15),this.drawSpot(e,a,this.startSpotStyle),this.startX=e,this.startY=a)},canMove:function(t,e){for(var a=this.context.getImageData(t,e,15,15),n=a.data,s=!0,r=0;r<900;r+=4)if(0===n[r]&&0===n[r+1]&&0===n[r+2]){s=!1;break}return s},drawWhite:function(t,e,a,n){this.context.beginPath(),this.context.rect(t,e,a,n),this.context.closePath(),this.context.fillStyle="white",this.context.fill()}}}),Ct=xt,wt=Object(c["a"])(Ct,gt,bt,!1,null,"5a6cee30",null),yt=wt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("circle-component",{ref:"cp1",attrs:{colorB:"#0060b6",colorF:"#75cfff",colorContent:"#fff",size:80,border:8,vdata:30,animateSpeed:20}}),a("br"),a("circle-component",{ref:"cp2",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:100,border:8,vdata:50,"animate-speed":20}}),a("br"),a("circle-component",{ref:"cp3",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:120,border:12,vdata:70,"animate-speed":20}}),a("br"),a("circle-component",{ref:"cp4",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:200,border:16,vdata:90,"animate-speed":20}}),a("br"),a("circle-component",{ref:"cp5",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:200,border:16,vdata:90,"animate-speed":50}})],1)},St=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.box.style},[a("div",{style:t.leftCircle.style}),a("div",{style:t.rightCircle.style}),a("div",{style:t.content.style},[t._v(t._s(t.content.text)+"%")])])])},$t=[],Pt={name:"CircleComponent",data:function(){return{currRoute:null,box:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorB,position:"relative"}},content:{style:{width:this.size-2*this.border+"px",height:this.size-2*this.border+"px",borderRadius:"50%",backgroundColor:this.colorContent,position:"absolute",left:this.border+"px",top:this.border+"px",fontSize:.3*this.size+"px",textAlign:"center",lineHeight:this.size-2*this.border+"px"},text:0},leftCircle:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorF,position:"absolute",left:"0px",top:"0px",clip:"rect(0px "+this.size/2+"px "+this.size+"px 0px)",transition:"",transform:"rotate(0deg)"}},rightCircle:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorF,position:"absolute",left:"0px",top:"0px",clip:"rect(0px "+this.size+"px "+this.size+"px "+this.size/2+"px)",transition:"",transform:"rotate(0deg)"}}}},props:["colorB","colorF","size","vdata","border","colorContent","animateSpeed"],created:function(){this.currRoute=this.$route},mounted:function(){},methods:{animate:function(){if(this.vdata<=50){this.rightCircle.style.transition="all "+this.vdata*this.animateSpeed/1e3+"s linear",setTimeout(function(){this.rightCircle.style.transform="rotate("+this.vdata/100*360+"deg)"}.bind(this));var t=setInterval(function(){this.content.text+=1,this.content.text==this.vdata&&clearInterval(t)}.bind(this),this.animateSpeed)}else{this.rightCircle.style.transition="all "+50*this.animateSpeed/1e3+"s linear",this.leftCircle.style.transition="all "+(this.vdata-50)*this.animateSpeed/1e3+"s linear",setTimeout(function(){this.rightCircle.style.transform="rotate(180deg)"}.bind(this)),setTimeout(function(){this.rightCircle.style.transition="none",this.rightCircle.style.transform="rotate(0deg)",this.rightCircle.style.backgroundColor=this.colorB,this.leftCircle.style.transform="rotate("+(this.vdata-50)/100*360+"deg)"}.bind(this),50*this.animateSpeed);t=setInterval(function(){this.content.text+=1,this.content.text==this.vdata&&clearInterval(t)}.bind(this),this.animateSpeed)}}}},kt=Pt,Et=Object(c["a"])(kt,Rt,$t,!1,null,"4fcc9e74",null),Ot=Et.exports,zt={name:"Demo4",data:function(){return{currRoute:null}},components:{CircleComponent:Ot},created:function(){this.currRoute=this.$route},mounted:function(){this.$refs.cp1.animate(),this.$refs.cp2.animate(),this.$refs.cp3.animate(),this.$refs.cp4.animate(),this.$refs.cp5.animate()},methods:{}},It=zt,At=Object(c["a"])(It,jt,St,!1,null,"12be929a",null),Tt=At.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),a("canvas",{attrs:{id:"myCanvas"}}),a("p",[a("input",{attrs:{id:"input1",type:"",name:""}}),a("input",{attrs:{id:"input2",type:"",name:""}}),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.demo()}}},[t._v("ok")])])])},Xt=[],Dt={name:"Demo5",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){this.drawCircle("myCanvas")},methods:{demo:function(){this.drawCircleAnimate("myCanvas",parseInt(document.getElementById("input1").value),parseInt(document.getElementById("input1").value),parseInt(document.getElementById("input2").value))},drawCircleAnimate:function(t,e,a,n){t=t;requestAnimationFrame(function(){a+=1,this.drawCircle(t,e,a),a<n&&this.drawCircleAnimate(t,e,a,n)}.bind(this))},drawCircle:function(t,e,a){var n=80,s=110,r=10,i=document.getElementById(t);i.width=n,i.height=s;var o=i.getContext("2d");o.beginPath(),o.lineWidth=r,o.strokeStyle="#a3c8db66",o.arc(n/2,n/2,n/2-r,-Math.PI/2,3*Math.PI/2),o.stroke(),e&&a&&(o.beginPath(),o.lineWidth=r,o.strokeStyle="#00aee6",o.arc(n/2,n/2,n/2-r,2*Math.PI*e/100-Math.PI/2,2*Math.PI*a/100-Math.PI/2),o.stroke()),o.beginPath(),o.font="300 24px 'Muli',sans-serif,Arial,Helvetica",o.textBaseline="middle",o.textAlign="center",o.fillStyle="#26324b",e&&a?o.fillText(a-e+"%",n/2,100):o.fillText("0%",n/2,100)}}},qt=Dt,Ht=Object(c["a"])(qt,Mt,Xt,!1,null,"11595cb8",null),Yt=Ht.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},Ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"marquee"},[a("div",{staticClass:"marquee-item"},[a("p",[t._v("1")]),a("p",[t._v("2")]),a("p",[t._v("3")]),a("p",[t._v("4")]),a("p",[t._v("5")]),a("p",[t._v("6")]),a("p",[t._v("7")]),a("p",[t._v("8")]),a("p",[t._v("9")]),a("p",[t._v("10")]),a("p",[t._v("11")]),a("p",[t._v("12")]),a("p",[t._v("13")]),a("p",[t._v("14")]),a("p",[t._v("15")]),a("p",[t._v("16")]),a("p",[t._v("17")]),a("p",[t._v("18")]),a("p",[t._v("19")]),a("p",[t._v("20")])])])}],Bt=a("debc"),Wt=a.n(Bt),Jt={name:"Demo1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){this.marquee(".marquee",".marquee-item",8e3)},methods:{marquee:function(t,e,a){var n=Wt()(t).height(),s=Wt()(e).innerHeight(),r=Wt()(e).clone(!0);Wt()(t).append(r),Wt()(e).eq(0).css("margin-top","-"+(2*s-n)+"px"),function t(){Wt()(e).eq(0).animate({marginTop:-(s-n)+"px"},a,"linear",function(){Wt()(e).eq(0).css("margin-top","-"+(2*s-n)+"px"),t()})}()}}},Nt=Jt,Ut=(a("8f67"),Object(c["a"])(Nt,Lt,Ft,!1,null,"c305453e",null)),Vt=Ut.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},Gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative overflow-hidden"},[n("img",{staticClass:"img-fluid",attrs:{src:a("6119"),alt:""}}),n("div",{staticClass:"translate-center polygon"},[n("img",{staticClass:"img-fluid",attrs:{src:a("6109"),alt:""}})]),n("img",{staticClass:"translate-center w-100 cover",attrs:{src:a("f2ee"),alt:""}})])}],Kt={name:"Demo7",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){},methods:{}},Qt=Kt,te=(a("86a8"),Object(c["a"])(Qt,Zt,Gt,!1,null,"1a5c7d96",null)),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reveal"},[a("div",{staticClass:"slides"},[a("section",[a("h2",[t._v(t._s(t.currRoute.name))]),a("ol",t._l(t.routes,function(e){return""!=e.path?a("li",[a("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])])])},ne=[],se=a("2fa8"),re=a.n(se),ie={name:"Stage3List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))},mounted:function(){re.a.initialize({controls:!0,progress:!0,center:!0,hash:!1,transition:"slide"})}},oe=ie,ce=(a("b25d"),Object(c["a"])(oe,ae,ne,!1,null,"4ad24b19",null)),le=ce.exports,ue=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pe=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reveal"},[a("div",{staticClass:"slides"},[a("section",[a("h2",[t._v("A pixel is not a pixel is not a pixel")]),a("p",[a("small",[t._v("CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport...")])])]),a("section",[a("h3",[t._v("1、核心概念")])]),a("section",[a("h4",[t._v("1.1、PX到底是什么？")]),a("p",{staticClass:"fragment"},[a("small",[t._v("是图像显示的基本单元。不能够再切割成更小单位或是元素，以单一颜色存在。")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("不同的设备，图像基本采样单元是不同的")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("所以在谈论像素时一定要清楚它的上下文")])]),a("p",{staticClass:"fragment"},[a("small",[a("img",{staticStyle:{width:"300px"},attrs:{src:"/assets/img/demo6.jpg"}})])])]),a("section",{attrs:{id:"fragments"}},[a("h4",[t._v("1.2、CSS像素")]),a("p",{staticClass:"fragment"},[a("small",[t._v("CSS像素是虚拟像素(逻辑像素)，是相对设备像素(device pixel)而言的，浏览器内的一切长度都是以CSS像素为单位的.")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("在不同的设备之间，每1个CSS像素所代表的物理像素是可以变化的")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("在同样一个设备上，每1个CSS像素所代表的物理像素是可以变化的")])])]),a("section",[a("h4",[t._v("1.3、物理像素(设备像素)")]),a("p",{staticClass:"fragment"},[a("small",[t._v("顾名思义，显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了。")])])]),a("section",[a("h4",[t._v("1.4、DPR(设备像素比)")]),a("p",{staticClass:"fragment"},[a("small",[t._v("css认为浏览器应该对css中的像素进行调节，使得浏览器中 1css像素的大小在不同物理设备上看上去大小总是差不多")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("默认情况下一个CSS像素应该是等于一个物理像素的宽度的，但是浏览器的放大操作让一个CSS像素等于了多个设备像素宽度")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("DPR(设备像素比) = 设备像素/CSS像素")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("1px=(dpr)^2*dp,")])]),a("p",{staticClass:"fragment"},[a("small",[a("a",{attrs:{href:"https://www.baidu.com/",target:"_blank"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/img/lizi.jpg"}})])])])]),a("section",[a("h4",[t._v("1.5、DIP（设备独立像素）")]),a("p",{staticClass:"fragment"},[a("small",[t._v("与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("window对象有一个devicePixelRatio属性，它的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("设备独立像素与物理像素的对应关系")])]),a("div",[a("img",{attrs:{src:"/assets/img/demo1.jpeg",alt:""}})]),a("p")]),a("section",[a("h4",[t._v("1.6、PPI/DPI(像素密度)")]),a("p",{staticClass:"fragment"},[a("small",[t._v("每英寸像素取值,也就是衡量单位物理面积内拥有像素值的情况")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("ppi越高，每英寸像素点越多，图像越清晰")])]),a("div",[a("img",{attrs:{src:"/assets/img/demo2.jpeg",alt:""}}),a("img",{attrs:{src:"/assets/img/demo3.jpeg",alt:""}})]),a("p")]),a("section",[a("h4",[t._v("1.7、计算PPI")]),a("p",{staticClass:"fragment"},[a("small",[t._v("手机屏幕距离你的眼睛10-12英寸(约25-30厘米)时，它的分辨率只要达到300PPI这个神奇数字(每英寸300个像素点)以上，你的视网膜就无法分辨出像素点了，这样的屏幕被称为“视网膜屏幕”。由于其具备超高的像素密度，因此屏幕显示异常清晰、锐利。而通常电脑显示屏幕的分辨率为72PPI")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("PPI的计算公式表达为 PPI=√(X²+Y²)/ Z (X:长度像素数；Y:宽度像素数；Z:屏幕尺寸)")])])]),a("section",[a("h3",[t._v("2、Viewport")])]),a("section",[a("h4",[t._v("2.1、layout viewport")]),a("p",{staticClass:"fragment"},[a("small",[t._v("首先，移动设备上的浏览器认为自己必须能让所有的网站都正常显示")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("但如果以浏览器的可视区域作为viewport的话,那些为桌面浏览器设计的网站会挤作一团或布局乱掉")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("浏览器就决定默认情况下把viewport设为一个较宽的值，比如980px")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("这个浏览器默认的viewport叫做 layout viewport")])]),a("p",{staticClass:"fragment"},[a("small",[a("a",{attrs:{href:"https://www.sznsyy.net/",target:"_blank"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/img/lizi.jpg"}})])])])]),a("section",[a("h4",[t._v("2.2、visual viewport")]),a("p",{staticClass:"fragment"},[a("small",[t._v("上文提到的layout viewport宽度是大于浏览器可视区域的宽度的")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("我们还需要一个viewport来代表 浏览器可视区域的大小,这个viewport叫做 visual viewport")])]),a("p",{staticClass:"fragment"},[a("img",{attrs:{src:"/assets/img/demo4.jpeg",alt:""}})])]),a("section",[a("h4",[t._v("2.3、ideal viewport")]),a("p",{staticClass:"fragment"},[a("small",[t._v("不需要用户缩放和横向滚动条就能正常的查看网站的所有内容")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("文字以及其他元素无论是在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("移动设备的理想viewport —— ideal viewport")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("不同的设备拥有有不同的ideal viewport")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户")])])]),a("section",[a("h4",[t._v("2.4、如何得到ideal viewport")]),a("p",{staticClass:"fragment"},[a("pre",[a("code",{staticClass:"hljs html",staticStyle:{"word-wrap":"break-word"}},[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')])])]),a("p",{staticClass:"fragment"},[a("small",[t._v("只设置width=device-width 在iphone和ipad上，无论是竖屏还是横屏，宽度都是竖屏时ideal viewport的宽度")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("只设置initial-scale=1 windows phone 上的IE 无论是竖屏还是横屏都把宽度设为竖屏时 ideal viewport 的宽度")])]),a("p",{staticClass:"fragment"},[a("small",[a("a",{attrs:{href:"https://www.baidu.com/",target:"_blank"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/img/lizi.jpg"}})])])])]),a("section",[a("h4",[t._v("2.5、initial-scale的默认值")]),a("p",{staticClass:"fragment"},[a("small",[t._v("各浏览器默认的 layout viewport 宽度一般都是980啊，1024啊，800啊等等这些个值")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("浏览器会自动计算 initial-scale 这个值，以保证当前 layout viewport 的宽度在缩放后就是浏览器可视区域的宽度，也就是说不会出现横向滚动条")])])]),a("section",[a("h3",[t._v("3、网页图片问题")]),a("p",{staticClass:"fragment"},[a("small",[t._v("用像素描述图片大小脱离显示设备毫无意义")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("普通位图记录着显示设备需要多少个设备像素显示以及每个像素的颜色、位置等数据")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("比如一个图片长800像素可以理解为在DPR为1的显示器上要求用同样多的设备像素显示")])])]),a("section",[a("h4",[t._v("3.1、图片放大模糊失真")]),a("p",{staticClass:"fragment"},[a("small",[t._v("在普通屏幕下，1个位图像素对应着1个物理像素，图片可以完美的显示。可是在放大图片或retina屏幕下，1个位图像素对应着多个物理像素，由于位图像素不可以再分割，所以图片就会只能就进取色，导致图片模糊。")])]),a("div",[a("img",{attrs:{src:"/assets/img/demo5.jpg",alt:""}})])]),a("section",[a("h4",[t._v("3.2、图片缩小模糊失真")]),a("p",{staticClass:"fragment"},[a("small",[t._v("在DPR(设备像素比)不变的情况下，图片缩小即让显示设备用更少的物理像素来显示图片像素，显示设备遍会按照一定规则丢弃一些逻辑像素数据")])]),a("p",{staticClass:"fragment"},[a("small",[a("div",{staticStyle:{width:"500px",display:"flex"}},[a("div",{staticStyle:{width:"50%",height:"100px","background-color":"red"}}),a("div",{staticStyle:{width:"50%",height:"100px","background-color":"#fff"}})])])])]),a("section",[a("h4",[t._v("3.3、矢量图的使用")]),a("p",{staticClass:"fragment"},[a("small",[t._v("如svg图像记录的不是像素，而是组成图片的元素的几何特性，如记录直线的起始位置、方向、长度，圆弧的圆心位置、弧度、端点位置等")])]),a("p",{staticClass:"fragment"},[a("small",[t._v("最大的缺点是难以表现色彩层次丰富的逼真图像效果,以及浏览器兼容性要求。")])])]),a("section",[a("h3",[t._v("end")])])])])}],de={name:"Share1",mounted:function(){setTimeout(function(){re.a.initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"slide"})},1e3)}},fe=de,he=(a("f4072"),Object(c["a"])(fe,ue,pe,!1,null,"73a39a42",null)),me=he.exports;n["a"].use(p["a"]);var ve=new p["a"]({routes:[{path:"/",name:"home",component:_},{path:"/stage1/",name:"javascript基础",component:y,children:[{path:"",name:"javascript基础",component:Y},{path:"doc1",name:"javascript数据类型及检测方法",component:N},{path:"doc2",name:"原型链",component:Q},{path:"doc3",name:"AJAX",component:rt},{path:"doc4",name:"this机制",component:pt}]},{path:"/stage2/",name:"javascript应用",component:k,children:[{path:"",name:"javascript应用",component:_t},{path:"demo3",name:"Maze",component:yt},{path:"demo4",name:"Progress loop",component:Tt},{path:"demo5",name:"Progress loop with canvas",component:Yt},{path:"demo6",name:"marquee",component:Vt},{path:"demo7",name:"AnimateDemo",component:ee}]},{path:"/stage3/",name:"内部分享",component:T,children:[{path:"",name:"内部分享",component:le},{path:"share1",name:"A pixel is not a pixel is not a pixel",component:me}]}]});n["a"].config.productionTip=!1,new n["a"]({router:ve,render:function(t){return t(u)}}).$mount("#app")},"5d26":function(t,e,a){"use strict";var n=a("caaf"),s=a.n(n);s.a},6109:function(t,e,a){t.exports=a.p+"assets/img/Artboard.svg"},6119:function(t,e,a){t.exports=a.p+"assets/img/Artboard-bg.svg"},"6b49":function(t,e,a){"use strict";var n=a("7662"),s=a.n(n);s.a},7036:function(t,e,a){"use strict";var n=a("3e55"),s=a.n(n);s.a},7662:function(t,e,a){},7875:function(t,e,a){},"78dd":function(t,e,a){t.exports=a.p+"assets/img/lizi.jpg"},"7b99":function(t,e,a){"use strict";var n=a("1425"),s=a.n(n);s.a},"86a8":function(t,e,a){"use strict";var n=a("7875"),s=a.n(n);s.a},"8f67":function(t,e,a){"use strict";var n=a("eb36"),s=a.n(n);s.a},9699:function(t,e,a){t.exports=a.p+"assets/img/maze.gif"},abb5:function(t,e,a){},b25d:function(t,e,a){"use strict";var n=a("ee08"),s=a.n(n);s.a},bb6e:function(t,e,a){var n={"./Artboard-bg.svg":"6119","./Artboard.svg":"6109","./Artboard2.png":"f2ee","./demo1.jpeg":"df08","./demo2.jpeg":"1310","./demo3.jpeg":"15b9","./demo4.jpeg":"02fc","./demo5.jpg":"00ac","./demo6.jpg":"c165","./icon1.png":"ded3","./lizi.jpg":"78dd","./maze.gif":"9699","./pic1.png":"0a18","./pic2.png":"499a"};function s(t){var e=r(t);return a(e)}function r(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="bb6e"},c165:function(t,e,a){t.exports=a.p+"assets/img/demo6.jpg"},c71d:function(t,e,a){},caaf:function(t,e,a){},d8a2:function(t,e,a){},de59:function(t,e,a){"use strict";var n=a("42cf"),s=a.n(n);s.a},ded3:function(t,e,a){t.exports=a.p+"assets/img/icon1.png"},df08:function(t,e,a){t.exports=a.p+"assets/img/demo1.jpeg"},eb36:function(t,e,a){},ee08:function(t,e,a){},f2ee:function(t,e,a){t.exports=a.p+"assets/img/Artboard2.png"},f407:function(t,e,a){"use strict";var n=a("d8a2"),s=a.n(n);s.a},f4072:function(t,e,a){"use strict";var n=a("30cc"),s=a.n(n);s.a},fb4f:function(t,e,a){"use strict";var n=a("c71d"),s=a.n(n);s.a}});