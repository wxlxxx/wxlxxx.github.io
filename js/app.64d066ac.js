(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)r=l[u],a[r]&&p.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);h&&h(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00ac":function(t,e,i){t.exports=i.p+"img/demo5.5d6d8e46.jpg"},"02c8":function(t,e,i){},"02fc":function(t,e,i){t.exports=i.p+"img/demo4.43b00452.jpeg"},"0a18":function(t,e,i){t.exports=i.p+"img/pic1.dba25d03.png"},"0e35":function(t,e,i){"use strict";var s=i("4e8e"),a=i.n(s);a.a},1310:function(t,e,i){t.exports=i.p+"img/demo2.824c4824.jpeg"},1425:function(t,e,i){},"15b9":function(t,e,i){t.exports=i.p+"img/demo3.2db79a3b.jpeg"},"16e9":function(t,e,i){"use strict";var s=i("b9bc"),a=i.n(s);a.a},"3e55":function(t,e,i){},"42cf":function(t,e,i){},"499a":function(t,e,i){t.exports=i.p+"img/pic2.7b9e4247.png"},"4e8e":function(t,e,i){},"537a":function(t,e,i){"use strict";var s=i("02c8"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("3e2e"),i("c29f"),i("ea5e"),i("1f70");var s=i("6e6d"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},n=[],r={name:"App"},l=r,o=i("17cc"),c=Object(o["a"])(l,a,n,!1,null,null,null),h=c.exports,u=i("1e6f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-dark d-flex align-items-center justify-content-center",staticStyle:{height:"100vh"}},t._l(t.routes,function(e){return e.path!=t.currRoute.path?i("router-link",{staticClass:"bg-primary rounded p-md-5 mx-5 h2 text-light",attrs:{to:e.path}},[t._v(t._s(e.name))]):t._e()}),1)},d=[],f={name:"Home",data:function(){return{routes:null,currRoute:null}},created:function(){this.routes=this.$router.options.routes,this.currRoute=this.$route}},m=f,v=(i("5d26"),Object(o["a"])(m,p,d,!1,null,"d8dc0fa2",null)),_=v.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-dark py-5",staticStyle:{"min-height":"100vh"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"bg-light p-5 rounded"},[i("router-view")],1)])])},b=[],x={name:"Stage1"},w=x,C=(i("537a"),Object(o["a"])(w,g,b,!1,null,"4f9e7897",null)),y=C.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-dark py-5",staticStyle:{"min-height":"100vh"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"bg-light p-5 rounded"},[i("router-view")],1)])])},j=[],k={name:"Stage2"},R=k,P=(i("f407"),Object(o["a"])(R,S,j,!1,null,"60247556",null)),E=P.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},T=[],M={name:"Stage3"},O=M,I=(i("de59"),Object(o["a"])(O,$,T,!1,null,"6fba389a",null)),z=I.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("ol",t._l(t.routes,function(e){return""!=e.path?i("li",[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])},D=[],q={name:"Stage1List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))}},L=q,Y=(i("7036"),Object(o["a"])(L,A,D,!1,null,"fa4fea38",null)),X=Y.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0),t._m(1)])},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table table-bordered"},[i("tr",[i("td",{attrs:{rowspan:"7"}},[t._v("数据类型")])]),i("tr",[i("td"),i("td",[t._v("object")]),i("td",[t._v("Function Array Date...")])]),i("tr",[i("td",{attrs:{rowspan:"6"}},[t._v("原始类型")]),i("td",[t._v("number")]),i("td",{attrs:{rowspan:"5"}})]),i("tr",[i("td",[t._v("string")])]),i("tr",[i("td",[t._v("boolean")])]),i("tr",[i("td",[t._v("null")])]),i("tr",[i("td",[t._v("undefined")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"table table-bordered"},[i("tr",[i("td",{attrs:{rowspan:"4"}},[t._v("类型检测方法")])]),i("tr",[i("td",[t._v("typeof")]),i("td",[t._v('\n\t\t\t\ttypeof function () {} === "function" '),i("br"),t._v('\n\t\t\t\ttypeof(NaN) === "number" '),i("br"),t._v('\n\t\t\t\ttypeof(null) === "object" '),i("br"),t._v('\n\t\t\t\ttypeof true === "boolean" '),i("br"),t._v('\n\t\t\t\ttypeof( [1， 2] ) === "object"\n\t\t\t')])]),i("tr",[i("td",[t._v("instanceof")]),i("td",[t._v("\n\t\t\t\t[1, 2] instanceof Array === true "),i("br"),t._v("\n\t\t\t\tnew Object() instanceof Array === false\n\t\t\t")])]),i("tr",[i("td",[t._v("Object.prototype.toString")]),i("td",[t._v('\n\t\t\t\tObject.prototype.toString.apply([]); === "[object Array]"; '),i("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(function(){}); === "[object Function]"; '),i("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(null); === "[object Null]" '),i("br"),t._v('\n\t\t\t\tObject.prototype.toString.apply(undefined); === "[object Undefined]"\n\t\t\t')])])])}],W={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},B=W,J=(i("0e35"),Object(o["a"])(B,H,F,!1,null,"f97ada48",null)),N=J.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table table-bordered"},[s("tr",[s("td",{attrs:{rowspan:"4"}},[t._v("创建对象")])]),s("tr",[s("td",[t._v("字面量")]),s("td",[t._v("var obj1 = {x : 1, y : 2}")]),s("td")]),s("tr",[s("td",[t._v("构造函数")]),s("td",[t._v("\n\t\t\t\tfunction foo(){} "),s("br"),t._v("\n\t\t\t\tvar obj =new foo()\n\t\t\t")]),s("td",[s("img",{attrs:{src:i("0a18")}})])]),s("tr",[s("td",[t._v("Object.create")]),s("td",[t._v("\n\t\t\t\tvar obj = Object.create({x : 1})\n\t\t\t")]),s("td")])])}],Z={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},G=Z,Q=(i("fb4f"),Object(o["a"])(G,U,V,!1,null,"33622598",null)),K=Q.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("p",[t._v("AJAX：Asynchronous JavaScript and XML")]),i("p",[t._v("XMLHttpRequest对象")]),i("p",[t._v("HTTP请求步骤：")]),t._m(0),i("p",[t._v("HTTP请求组成")]),t._m(1),i("p",[t._v("HTTP响应组成")]),t._m(2),i("p",[t._v("XMLHttpRequest取得响应")]),t._m(3),i("p",[t._v("readyState属性的变化代表服务器响应的变化")]),t._m(4),t._m(5)])},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("建立TCP连接")]),i("li",[t._v("Web浏览器向Web服务器发送请求命令")]),i("li",[t._v("Web浏览器发送请求头信息")]),i("li",[t._v("web服务器应答")]),i("li",[t._v("web服务器发送应答头信息")]),i("li",[t._v("web服务器向浏览器发送数据")]),i("li",[t._v("web服务器关闭TCP连接")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("http请求的方法或动作，比如GET还是POST")]),i("li",[t._v("请求地址")]),i("li",[t._v("请求头，包含一些客户端环境信息，身份验证信息等")]),i("li",[t._v("请求体，请求正文，包含客户端提交的查询字符串信息，表单信息等")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("状态码")]),i("li",[t._v("响应头，响应头也和请求头一样包含许多有用的信息，例如服务器类型、日期时间、内容类型和长度等")]),i("li",[t._v("响应体")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("responseText:获得字符串形式的响应数据")]),i("li",[t._v("responseXML：获得XML形式的响应数据（比较少）")]),i("li",[t._v("status和statusText:以数字和文本形式返回HTTP状态码 ")]),i("li",[t._v("getAllResponseHeader()：获取所有的响应报头")]),i("li",[t._v("getResponseHeader()：查询响应中的某个字段的值")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("0：请求未初始化，open还没有调用")]),i("li",[t._v("1：服务器连接已建立，open已经调用了")]),i("li",[t._v("2：请求已接收，也就是接收到头信息了")]),i("li",[t._v("3：请求处理中，也就是接收到了响应主体")]),i("li",[t._v("4：请求已完成，且响应已就绪，也就是响应完成了")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",{staticClass:"bg-dark text-light"},[i("code",[t._v('\n\t\tvar xhr = new XMLHttpRequest()\n\t\txhr.open("post","a.php","true")\n\t\txhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")\n\t\txhr.send({})\n\t\txhr.onreadystatechange=function(){\n\t\t\tif(xhr.readState===4 && xhr.status===200){\n\t\t\t\t//xhr.responseText\n\t\t\t}\n\t\t}\n\t')])])}],it={name:"Doc1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route}},st=it,at=(i("7b99"),Object(o["a"])(st,tt,et,!1,null,"55d0088e",null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("ol",t._l(t.routes,function(e){return""!=e.path?i("li",[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])},lt=[],ot={name:"Stage1List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))}},ct=ot,ht=(i("6b49"),Object(o["a"])(ct,rt,lt,!1,null,"3a0f2a04",null)),ut=ht.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("elliptical",{attrs:{cw:800,ch:500}})],1)},dt=[],ft=i("97c0"),mt=i.n(ft),vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{attrs:{id:"demoCanvas"}})])}],gt={name:"Elliptical",data:function(){return{stage:null,shape:null,ellipse:{a:50,b:30,h:60,k:140,x:10},line:{k:-2,b:300,x:92},arc:{r:50,a:50,b:50,x:0},speed:6}},props:["cw","ch"],mounted:function(){this.stage=new createjs.Stage("demoCanvas"),this.stage.canvas.width=this.cw,this.stage.canvas.height=this.ch,this.shape=new createjs.Shape,this.stage.addChild(this.shape),createjs.Ticker.addEventListener("tick",this.handleTick1),createjs.Ticker.setFPS(60)},methods:{handleTick1:function(){if(this.ellipse.x<=this.ellipse.h+this.ellipse.a)if(this.ellipse.x<=this.ellipse.a/2+this.ellipse.h-this.ellipse.a)for(var t=0;t<this.speed;t++)this.DrawPoints(this.ellipse.x+t,this.getEllipseY1(this.ellipse.x+t));else if(this.ellipse.x<=this.ellipse.h)for(t=0;t<this.speed;t++)this.DrawPoints(this.ellipse.x+t,this.getEllipseY1(this.ellipse.x+t),4);else if(this.ellipse.x<=this.ellipse.h+this.ellipse.a/2)for(t=0;t<this.speed;t++)this.DrawPoints(this.ellipse.x+t,this.getEllipseY1(this.ellipse.x+t),8);else for(t=0;t<this.speed;t++)this.DrawPoints(this.ellipse.x+t,this.getEllipseY1(this.ellipse.x+t),16);else{var e=this.ellipse.h+this.ellipse.a-(this.ellipse.x-(this.ellipse.h+this.ellipse.a));for(t=0;t<this.speed;t++)this.DrawPoints(e+t,this.getEllipseY2(e+t),16)}this.stage.update(),this.ellipse.x+=this.speed,this.ellipse.x>=4*this.ellipse.h&&(createjs.Ticker.removeEventListener("tick",this.handleTick1),createjs.Ticker.addEventListener("tick",this.handleTick2))},handleTick2:function(){for(var t=0;t<this.speed;t++)this.DrawPoints(this.line.x+t,this.getLineY(this.line.x+t),16);this.stage.update(),this.line.x+=this.speed,this.line.x>=this.ellipse.a+this.ellipse.h&&(createjs.Ticker.removeEventListener("tick",this.handleTick2),createjs.Ticker.addEventListener("tick",this.handleTick3))},handleTick3:function(){console.log(this.arc.x),console.log(this.getArcY1(this.arc.x));for(var t=0;t<this.speed;t++)this.DrawPoints(this.arc.x+t,this.getArcY1(this.arc.x+t),16);this.stage.update(),this.arc.x+=this.speed,this.arc.x>=500&&createjs.Ticker.removeEventListener("tick",this.handleTick3)},DrawPoints:function(t,e,i){i=i||1;for(var s=0;s<i;s++){var a=t+4*Math.random()-2,n=e+4*Math.random()-2;this.shape.graphics.beginFill("#000").drawCircle(a,n,.1)}},getEllipseY1:function(t){return Math.sqrt((1-Math.pow(t-this.ellipse.h,2)/Math.pow(this.ellipse.a,2))*Math.pow(this.ellipse.b,2))+this.ellipse.k},getEllipseY2:function(t){return-Math.sqrt((1-Math.pow(t-this.ellipse.h,2)/Math.pow(this.ellipse.a,2))*Math.pow(this.ellipse.b,2))+this.ellipse.k},getLineY:function(t){return this.line.k*t+this.line.b},getArcY1:function(t){return Math.sqrt(Math.pow(this.arc.r,2)-Math.pow(this.arc.x-this.arc.a,2))+this.arc.b}}},bt=gt,xt=Object(o["a"])(bt,vt,_t,!1,null,null,null),wt=xt.exports,Ct={name:"Demo1",components:{Elliptical:wt},data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){},methods:{}},yt=Ct,St=Object(o["a"])(yt,pt,dt,!1,null,"59c09570",null),jt=St.exports,kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("canvas",{attrs:{id:"demoCanvas",width:"1440",height:"900"}})])},Rt=[],Pt={name:"Demo2",data:function(){return{currRoute:null,stage:null,queue:null,shape:[],shapeAngle:0,C_W:0,C_H:0}},created:function(){this.currRoute=this.$route},mounted:function(){this.init()},methods:{init:function(){this.queue=new mt.a.LoadQueue,this.queue.on("complete",this.handleComplete,this),this.queue.loadManifest([{id:"bg",src:i("499a")},{id:"circle",src:i("ded3")}]),this.stage=new mt.a.Stage("demoCanvas"),this.C_W=this.stage.canvas.width,this.C_H=this.stage.canvas.height,this.shapeAngle=Math.PI/1.8+2*Math.PI,this.drawLoading()},handleComplete:function(){var t=this.queue.getResult("bg"),e=this.queue.getResult("circle"),i=new mt.a.Shape;i.graphics.bf(t).drawRect(0,0,t.width,t.height),i.setTransform(0,0,this.C_W/t.width,this.C_H/t.height);var s=new mt.a.Bitmap(e);s.setTransform(970,580),this.shape[0]=new mt.a.Shape,this.shape[1]=new mt.a.Shape,this.shape[2]=new mt.a.Shape,this.shape[3]=new mt.a.Shape,this.shape[4]=new mt.a.Shape,this.shape[1].graphics.beginFill("#000").drawRect(1110,731,20,20),this.shape[2].graphics.beginFill("#000").drawRect(1040,731,40,70),this.shape[3].graphics.beginFill("#000").drawRect(1130,701,130,50),this.shape[4].graphics.beginFill("#000").drawRect(1190,623,30,30),this.stage.addChild(i),this.stage.addChild(s),this.stage.addChild(this.shape[0]),this.stage.addChild(this.shape[1]),this.stage.addChild(this.shape[2]),this.stage.addChild(this.shape[3]),this.stage.addChild(this.shape[4]),this.stage.update(),mt.a.Ticker.addEventListener("tick",this.handleTick),mt.a.Ticker.setFPS(60)},handleTick:function(t){this.shapeAngle-=2*Math.PI/90,this.shape[0].graphics.clear(),this.shape[0].graphics.setStrokeStyle(20,"round").beginStroke("#000").arc(1120,731,150,Math.PI/1.8,this.shapeAngle),this.shapeAngle<=Math.PI/1.8&&(this.shape[0].graphics.clear(),mt.a.Ticker.removeEventListener("tick",this.handleTick),this.addMark()),this.stage.update()},addMark:function(){var t=1,e=setInterval(function(){this.shape[t].graphics.clear(),this.stage.update(),t+=1,t>=5&&(clearInterval(e),this.addText())}.bind(this),300)},addText:function(){var t=new mt.a.Text("Hello World","20px Arial","#ff7700");t.x=1190,t.y=623,this.stage.addChild(t),this.stage.update()},drawLoading:function(){}}},Et=Pt,$t=Object(o["a"])(Et,kt,Rt,!1,null,"549f4f3e",null),Tt=$t.exports,Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("canvas",{ref:"App_mazecanvas"})])},Ot=[],It=(i("271e"),{name:"Demo3",data:function(){return{currRoute:null,canvas:null,context:null,image:"maze.gif",startX:440,startY:0,endX:571,endY:131,startSpotStyle:"#0000FF",endSpotStyle:"#20c997"}},created:function(){this.currRoute=this.$route},mounted:function(){this.canvas=this.$refs.App_mazecanvas,this.context=this.canvas.getContext("2d");var t=i("bb6e")("./"+this.image),e=new Image;e.onload=function(){this.canvas.width=e.width+30,this.canvas.height=e.height+30,this.drawWhite(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(e,15,15),this.drawSpot(this.startX,this.startY,this.startSpotStyle),this.drawSpot(this.endX,this.endY,this.endSpotStyle)}.bind(this),e.src=t,window.addEventListener("keydown",this.move,!0)},methods:{drawSpot:function(t,e,i){this.context.beginPath(),this.context.rect(t,e,15,15),this.context.closePath(),this.context.fillStyle=i,this.context.fill()},move:function(t){var e,i;switch(t=t||window.event,t.keyCode){case 38:e=this.startX,i=this.startY-3;break;case 37:e=this.startX-3,i=this.startY;break;case 40:e=this.startX,i=this.startY+3;break;case 39:e=this.startX+3,i=this.startY;break;default:return}this.canMove(e,i)&&(this.drawWhite(this.startX,this.startY,15,15),this.drawSpot(e,i,this.startSpotStyle),this.startX=e,this.startY=i)},canMove:function(t,e){for(var i=this.context.getImageData(t,e,15,15),s=i.data,a=!0,n=0;n<900;n+=4)if(0===s[n]&&0===s[n+1]&&0===s[n+2]){a=!1;break}return a},drawWhite:function(t,e,i,s){this.context.beginPath(),this.context.rect(t,e,i,s),this.context.closePath(),this.context.fillStyle="white",this.context.fill()}}}),zt=It,At=Object(o["a"])(zt,Mt,Ot,!1,null,"5a6cee30",null),Dt=At.exports,qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("circle-component",{ref:"cp1",attrs:{colorB:"#0060b6",colorF:"#75cfff",colorContent:"#fff",size:80,border:8,vdata:30,animateSpeed:20}}),i("br"),i("circle-component",{ref:"cp2",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:100,border:8,vdata:50,"animate-speed":20}}),i("br"),i("circle-component",{ref:"cp3",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:120,border:12,vdata:70,"animate-speed":20}}),i("br"),i("circle-component",{ref:"cp4",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:200,border:16,vdata:90,"animate-speed":20}}),i("br"),i("circle-component",{ref:"cp5",attrs:{"color-b":"#0060b6","color-f":"#75cfff","color-content":"#fff",size:200,border:16,vdata:90,"animate-speed":50}})],1)},Lt=[],Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{style:t.box.style},[i("div",{style:t.leftCircle.style}),i("div",{style:t.rightCircle.style}),i("div",{style:t.content.style},[t._v(t._s(t.content.text)+"%")])])])},Xt=[],Ht={name:"CircleComponent",data:function(){return{currRoute:null,box:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorB,position:"relative"}},content:{style:{width:this.size-2*this.border+"px",height:this.size-2*this.border+"px",borderRadius:"50%",backgroundColor:this.colorContent,position:"absolute",left:this.border+"px",top:this.border+"px",fontSize:.3*this.size+"px",textAlign:"center",lineHeight:this.size-2*this.border+"px"},text:0},leftCircle:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorF,position:"absolute",left:"0px",top:"0px",clip:"rect(0px "+this.size/2+"px "+this.size+"px 0px)",transition:"",transform:"rotate(0deg)"}},rightCircle:{style:{width:this.size+"px",height:this.size+"px",borderRadius:"50%",backgroundColor:this.colorF,position:"absolute",left:"0px",top:"0px",clip:"rect(0px "+this.size+"px "+this.size+"px "+this.size/2+"px)",transition:"",transform:"rotate(0deg)"}}}},props:["colorB","colorF","size","vdata","border","colorContent","animateSpeed"],created:function(){this.currRoute=this.$route},mounted:function(){},methods:{animate:function(){if(this.vdata<=50){this.rightCircle.style.transition="all "+this.vdata*this.animateSpeed/1e3+"s linear",setTimeout(function(){this.rightCircle.style.transform="rotate("+this.vdata/100*360+"deg)"}.bind(this));var t=setInterval(function(){this.content.text+=1,this.content.text==this.vdata&&clearInterval(t)}.bind(this),this.animateSpeed)}else{this.rightCircle.style.transition="all "+50*this.animateSpeed/1e3+"s linear",this.leftCircle.style.transition="all "+(this.vdata-50)*this.animateSpeed/1e3+"s linear",setTimeout(function(){this.rightCircle.style.transform="rotate(180deg)"}.bind(this)),setTimeout(function(){this.rightCircle.style.transition="none",this.rightCircle.style.transform="rotate(0deg)",this.rightCircle.style.backgroundColor=this.colorB,this.leftCircle.style.transform="rotate("+(this.vdata-50)/100*360+"deg)"}.bind(this),50*this.animateSpeed);t=setInterval(function(){this.content.text+=1,this.content.text==this.vdata&&clearInterval(t)}.bind(this),this.animateSpeed)}}}},Ft=Ht,Wt=Object(o["a"])(Ft,Yt,Xt,!1,null,"4fcc9e74",null),Bt=Wt.exports,Jt={name:"Demo4",data:function(){return{currRoute:null}},components:{CircleComponent:Bt},created:function(){this.currRoute=this.$route},mounted:function(){this.$refs.cp1.animate(),this.$refs.cp2.animate(),this.$refs.cp3.animate(),this.$refs.cp4.animate(),this.$refs.cp5.animate()},methods:{}},Nt=Jt,Ut=Object(o["a"])(Nt,qt,Lt,!1,null,"12be929a",null),Vt=Ut.exports,Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),i("canvas",{attrs:{id:"myCanvas"}}),i("p",[i("input",{attrs:{id:"input1",type:"",name:""}}),i("input",{attrs:{id:"input2",type:"",name:""}}),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.demo()}}},[t._v("ok")])])])},Gt=[],Qt={name:"Demo5",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){this.drawCircle("myCanvas")},methods:{demo:function(){this.drawCircleAnimate("myCanvas",parseInt(document.getElementById("input1").value),parseInt(document.getElementById("input1").value),parseInt(document.getElementById("input2").value))},drawCircleAnimate:function(t,e,i,s){t=t;requestAnimationFrame(function(){i+=1,this.drawCircle(t,e,i),i<s&&this.drawCircleAnimate(t,e,i,s)}.bind(this))},drawCircle:function(t,e,i){var s=80,a=110,n=10,r=document.getElementById(t);r.width=s,r.height=a;var l=r.getContext("2d");l.beginPath(),l.lineWidth=n,l.strokeStyle="#a3c8db66",l.arc(s/2,s/2,s/2-n,-Math.PI/2,3*Math.PI/2),l.stroke(),e&&i&&(l.beginPath(),l.lineWidth=n,l.strokeStyle="#00aee6",l.arc(s/2,s/2,s/2-n,2*Math.PI*e/100-Math.PI/2,2*Math.PI*i/100-Math.PI/2),l.stroke()),l.beginPath(),l.font="300 24px 'Muli',sans-serif,Arial,Helvetica",l.textBaseline="middle",l.textAlign="center",l.fillStyle="#26324b",e&&i?l.fillText(i-e+"%",s/2,100):l.fillText("0%",s/2,100)}}},Kt=Qt,te=Object(o["a"])(Kt,Zt,Gt,!1,null,"11595cb8",null),ee=te.exports,ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"mb-4"},[t._v(t._s(t.currRoute.name))]),t._m(0)])},se=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"marquee"},[i("div",{staticClass:"marquee-item"},[i("p",[t._v("1")]),i("p",[t._v("2")]),i("p",[t._v("3")]),i("p",[t._v("4")]),i("p",[t._v("5")]),i("p",[t._v("6")]),i("p",[t._v("7")]),i("p",[t._v("8")]),i("p",[t._v("9")]),i("p",[t._v("10")]),i("p",[t._v("11")]),i("p",[t._v("12")]),i("p",[t._v("13")]),i("p",[t._v("14")]),i("p",[t._v("15")]),i("p",[t._v("16")]),i("p",[t._v("17")]),i("p",[t._v("18")]),i("p",[t._v("19")]),i("p",[t._v("20")])])])}],ae=i("debc"),ne=i.n(ae),re={name:"Demo1",data:function(){return{currRoute:null}},created:function(){this.currRoute=this.$route},mounted:function(){this.marquee(".marquee",".marquee-item",8e3)},methods:{marquee:function(t,e,i){var s=ne()(t).height(),a=ne()(e).innerHeight(),n=ne()(e).clone(!0);ne()(t).append(n),ne()(e).eq(0).css("margin-top","-"+(2*a-s)+"px"),function t(){ne()(e).eq(0).animate({marginTop:-(a-s)+"px"},i,"linear",function(){ne()(e).eq(0).css("margin-top","-"+(2*a-s)+"px"),t()})}()}}},le=re,oe=(i("8f67"),Object(o["a"])(le,ie,se,!1,null,"c305453e",null)),ce=oe.exports,he=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reveal"},[i("div",{staticClass:"slides"},[i("section",[i("h2",[t._v(t._s(t.currRoute.name))]),i("ol",t._l(t.routes,function(e){return""!=e.path?i("li",[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1):t._e()}),0)])])])},ue=[],pe=i("2fa8"),de=i.n(pe),fe={name:"Stage3List",data:function(){return{routes:null,currRoute:null}},created:function(){this.currRoute=this.$route;var t=this.$router.options.routes;t.map(function(t){t.path==this.currRoute.path&&(this.routes=t.children)}.bind(this))},mounted:function(){de.a.initialize({controls:!0,progress:!0,center:!0,hash:!1,transition:"slide"})}},me=fe,ve=(i("b25d"),Object(o["a"])(me,he,ue,!1,null,"4ad24b19",null)),_e=ve.exports,ge=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},be=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reveal"},[s("div",{staticClass:"slides"},[s("section",[s("h2",[t._v("A pixel is not a pixel is not a pixel")]),s("p",[s("small",[t._v("CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport...")])])]),s("section",[s("h3",[t._v("1、核心概念")])]),s("section",[s("h4",[t._v("1.1、PX到底是什么？")]),s("p",{staticClass:"fragment"},[s("small",[t._v("是图像显示的基本单元。不能够再切割成更小单位或是元素，以单一颜色存在。")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("不同的设备，图像基本采样单元是不同的")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("所以在谈论像素时一定要清楚它的上下文")])]),s("p",{staticClass:"fragment"},[s("small",[s("img",{staticStyle:{width:"300px"},attrs:{src:i("c165")}})])])]),s("section",{attrs:{id:"fragments"}},[s("h4",[t._v("1.2、CSS像素")]),s("p",{staticClass:"fragment"},[s("small",[t._v("CSS像素是虚拟像素(逻辑像素)，是相对设备像素(device pixel)而言的，浏览器内的一切长度都是以CSS像素为单位的.")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("在不同的设备之间，每1个CSS像素所代表的物理像素是可以变化的")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("在同样一个设备上，每1个CSS像素所代表的物理像素是可以变化的")])])]),s("section",[s("h4",[t._v("1.3、物理像素(设备像素)")]),s("p",{staticClass:"fragment"},[s("small",[t._v("顾名思义，显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了。")])])]),s("section",[s("h4",[t._v("1.4、DPR(设备像素比)")]),s("p",{staticClass:"fragment"},[s("small",[t._v("css认为浏览器应该对css中的像素进行调节，使得浏览器中 1css像素的大小在不同物理设备上看上去大小总是差不多")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("默认情况下一个CSS像素应该是等于一个物理像素的宽度的，但是浏览器的放大操作让一个CSS像素等于了多个设备像素宽度")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("DPR(设备像素比) = 设备像素/CSS像素")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("1px=(dpr)^2*dp,")])]),s("p",{staticClass:"fragment"},[s("small",[s("a",{attrs:{href:"https://www.baidu.com/",target:"_blank"}},[s("img",{staticStyle:{width:"50px"},attrs:{src:i("78dd")}})])])])]),s("section",[s("h4",[t._v("1.5、DIP（设备独立像素）")]),s("p",{staticClass:"fragment"},[s("small",[t._v("与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("window对象有一个devicePixelRatio属性，它的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("设备独立像素与物理像素的对应关系")])]),s("div",[s("img",{attrs:{src:i("df08"),alt:""}})]),s("p")]),s("section",[s("h4",[t._v("1.6、PPI/DPI(像素密度)")]),s("p",{staticClass:"fragment"},[s("small",[t._v("每英寸像素取值,也就是衡量单位物理面积内拥有像素值的情况")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("ppi越高，每英寸像素点越多，图像越清晰")])]),s("div",[s("img",{attrs:{src:i("1310"),alt:""}}),s("img",{attrs:{src:i("15b9"),alt:""}})]),s("p")]),s("section",[s("h4",[t._v("1.7、计算PPI")]),s("p",{staticClass:"fragment"},[s("small",[t._v("手机屏幕距离你的眼睛10-12英寸(约25-30厘米)时，它的分辨率只要达到300PPI这个神奇数字(每英寸300个像素点)以上，你的视网膜就无法分辨出像素点了，这样的屏幕被称为“视网膜屏幕”。由于其具备超高的像素密度，因此屏幕显示异常清晰、锐利。而通常电脑显示屏幕的分辨率为72PPI")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("PPI的计算公式表达为 PPI=√(X²+Y²)/ Z (X:长度像素数；Y:宽度像素数；Z:屏幕尺寸)")])])]),s("section",[s("h3",[t._v("2、Viewport")])]),s("section",[s("h4",[t._v("2.1、layout viewport")]),s("p",{staticClass:"fragment"},[s("small",[t._v("首先，移动设备上的浏览器认为自己必须能让所有的网站都正常显示")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("但如果以浏览器的可视区域作为viewport的话,那些为桌面浏览器设计的网站会挤作一团或布局乱掉")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("浏览器就决定默认情况下把viewport设为一个较宽的值，比如980px")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("这个浏览器默认的viewport叫做 layout viewport")])]),s("p",{staticClass:"fragment"},[s("small",[s("a",{attrs:{href:"https://www.sznsyy.net/",target:"_blank"}},[s("img",{staticStyle:{width:"50px"},attrs:{src:i("78dd")}})])])])]),s("section",[s("h4",[t._v("2.2、visual viewport")]),s("p",{staticClass:"fragment"},[s("small",[t._v("上文提到的layout viewport宽度是大于浏览器可视区域的宽度的")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("我们还需要一个viewport来代表 浏览器可视区域的大小,这个viewport叫做 visual viewport")])]),s("p",{staticClass:"fragment"},[s("img",{attrs:{src:i("02fc"),alt:""}})])]),s("section",[s("h4",[t._v("2.3、ideal viewport")]),s("p",{staticClass:"fragment"},[s("small",[t._v("不需要用户缩放和横向滚动条就能正常的查看网站的所有内容")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("文字以及其他元素无论是在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("移动设备的理想viewport —— ideal viewport")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("不同的设备拥有有不同的ideal viewport")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户")])])]),s("section",[s("h4",[t._v("2.4、如何得到ideal viewport")]),s("p",{staticClass:"fragment"},[s("pre",[s("code",{staticClass:"hljs html",staticStyle:{"word-wrap":"break-word"}},[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')])])]),s("p",{staticClass:"fragment"},[s("small",[t._v("只设置width=device-width 在iphone和ipad上，无论是竖屏还是横屏，宽度都是竖屏时ideal viewport的宽度")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("只设置initial-scale=1 windows phone 上的IE 无论是竖屏还是横屏都把宽度设为竖屏时 ideal viewport 的宽度")])]),s("p",{staticClass:"fragment"},[s("small",[s("a",{attrs:{href:"https://www.baidu.com/",target:"_blank"}},[s("img",{staticStyle:{width:"50px"},attrs:{src:i("78dd")}})])])])]),s("section",[s("h4",[t._v("2.5、initial-scale的默认值")]),s("p",{staticClass:"fragment"},[s("small",[t._v("各浏览器默认的 layout viewport 宽度一般都是980啊，1024啊，800啊等等这些个值")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("浏览器会自动计算 initial-scale 这个值，以保证当前 layout viewport 的宽度在缩放后就是浏览器可视区域的宽度，也就是说不会出现横向滚动条")])])]),s("section",[s("h3",[t._v("3、网页图片问题")]),s("p",{staticClass:"fragment"},[s("small",[t._v("用像素描述图片大小脱离显示设备毫无意义")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("普通位图记录着显示设备需要多少个设备像素显示以及每个像素的颜色、位置等数据")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("比如一个图片长800像素可以理解为在DPR为1的显示器上要求用同样多的设备像素显示")])])]),s("section",[s("h4",[t._v("3.1、图片放大模糊失真")]),s("p",{staticClass:"fragment"},[s("small",[t._v("在普通屏幕下，1个位图像素对应着1个物理像素，图片可以完美的显示。可是在放大图片或retina屏幕下，1个位图像素对应着多个物理像素，由于位图像素不可以再分割，所以图片就会只能就进取色，导致图片模糊。")])]),s("div",[s("img",{attrs:{src:i("00ac"),alt:""}})])]),s("section",[s("h4",[t._v("3.2、图片缩小模糊失真")]),s("p",{staticClass:"fragment"},[s("small",[t._v("在DPR(设备像素比)不变的情况下，图片缩小即让显示设备用更少的物理像素来显示图片像素，显示设备遍会按照一定规则丢弃一些逻辑像素数据")])]),s("p",{staticClass:"fragment"},[s("small",[s("div",{staticStyle:{width:"500px",display:"flex"}},[s("div",{staticStyle:{width:"50%",height:"100px","background-color":"red"}}),s("div",{staticStyle:{width:"50%",height:"100px","background-color":"#fff"}})])])])]),s("section",[s("h4",[t._v("3.3、矢量图的使用")]),s("p",{staticClass:"fragment"},[s("small",[t._v("如svg图像记录的不是像素，而是组成图片的元素的几何特性，如记录直线的起始位置、方向、长度，圆弧的圆心位置、弧度、端点位置等")])]),s("p",{staticClass:"fragment"},[s("small",[t._v("最大的缺点是难以表现色彩层次丰富的逼真图像效果,以及浏览器兼容性要求。")])])]),s("section",[s("h3",[t._v("end")])])])])}],xe={name:"Share1",mounted:function(){de.a.initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"slide"})}},we=xe,Ce=(i("16e9"),Object(o["a"])(we,ge,be,!1,null,"5520dbd6",null)),ye=Ce.exports;s["a"].use(u["a"]);var Se=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:_},{path:"/stage1/",name:"javascript基础",component:y,children:[{path:"",name:"javascript基础",component:X},{path:"doc1",name:"javascript数据类型及检测方法",component:N},{path:"doc2",name:"原型链",component:K},{path:"doc23",name:"AJAX",component:nt}]},{path:"/stage2/",name:"javascript应用",component:E,children:[{path:"",name:"javascript应用",component:ut},{path:"demo1",name:"CreateJs应用案例",component:jt},{path:"demo2",name:"CreateJs应用案例2",component:Tt},{path:"demo3",name:"Maze",component:Dt},{path:"demo4",name:"Progress loop",component:Vt},{path:"demo5",name:"Progress loop with canvas",component:ee},{path:"demo6",name:"marquee",component:ce}]},{path:"/stage3/",name:"内部分享",component:z,children:[{path:"",name:"内部分享",component:_e},{path:"share1",name:"A pixel is not a pixel is not a pixel",component:ye}]}]});s["a"].config.productionTip=!1,new s["a"]({router:Se,render:function(t){return t(h)}}).$mount("#app")},"5d26":function(t,e,i){"use strict";var s=i("caaf"),a=i.n(s);a.a},"6b49":function(t,e,i){"use strict";var s=i("7662"),a=i.n(s);a.a},7036:function(t,e,i){"use strict";var s=i("3e55"),a=i.n(s);a.a},7662:function(t,e,i){},"78dd":function(t,e,i){t.exports=i.p+"img/lizi.c085977f.jpg"},"7b99":function(t,e,i){"use strict";var s=i("1425"),a=i.n(s);a.a},"8f67":function(t,e,i){"use strict";var s=i("eb36"),a=i.n(s);a.a},9699:function(t,e,i){t.exports=i.p+"img/maze.6145d7f1.gif"},"97c0":function(t,e){t.exports=void 0},b25d:function(t,e,i){"use strict";var s=i("ee08"),a=i.n(s);a.a},b9bc:function(t,e,i){},bb6e:function(t,e,i){var s={"./demo1.jpeg":"df08","./demo2.jpeg":"1310","./demo3.jpeg":"15b9","./demo4.jpeg":"02fc","./demo5.jpg":"00ac","./demo6.jpg":"c165","./icon1.png":"ded3","./lizi.jpg":"78dd","./maze.gif":"9699","./pic1.png":"0a18","./pic2.png":"499a"};function a(t){var e=n(t);return i(e)}function n(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="bb6e"},c165:function(t,e,i){t.exports=i.p+"img/demo6.7a7ac9e4.jpg"},c71d:function(t,e,i){},caaf:function(t,e,i){},d8a2:function(t,e,i){},de59:function(t,e,i){"use strict";var s=i("42cf"),a=i.n(s);a.a},ded3:function(t,e,i){t.exports=i.p+"img/icon1.7743b779.png"},df08:function(t,e,i){t.exports=i.p+"img/demo1.f2b0d632.jpeg"},eb36:function(t,e,i){},ee08:function(t,e,i){},f407:function(t,e,i){"use strict";var s=i("d8a2"),a=i.n(s);a.a},fb4f:function(t,e,i){"use strict";var s=i("c71d"),a=i.n(s);a.a}});
//# sourceMappingURL=app.64d066ac.js.map