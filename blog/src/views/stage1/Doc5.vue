<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<p>vue的双向绑定是由数据劫持结合发布者－订阅者模式实现的,通过Object.defineProperty()来劫持对象属性的setter和getter操作，在数据变动时做你想要做的事情</p>
		<p>Object.defineProperty(obj, prop, descriptor)</p>
		<table class="table table-bordered">
			<tr>
				<td>obj</td>
				<td>要在其上定义属性的对象。</td>
			</tr>
			<tr>
				<td>prop</td>
				<td>要定义或修改的属性的名称。</td>
			</tr>
			<tr>
				<td>descriptor</td>
				<td>将被定义或修改的属性描述符。</td>
			</tr>
		</table>
		<p>例子：通过Object.defineProperty()这个方法设置了Book对象的name属性，对其get和set方法进行重写</p>
		<pre class="bg-dark text-light"><code>
			var Book = {
				name: '人性的弱点'
			};
			console.log(Book.name);  // 人性的弱点
			var Book = {};
			var name = '';
			Object.defineProperty(Book,'name',{
				set:function(value) {
					name = value;
					console.log('你取了一个书名叫:'+value);
				},
				get:function() {
					console.log('get方法被监听到');
					return '<'+name+'>';
				}
			});
			Book.name = '人性的弱点';  //你取了一个书名叫:人性的弱点
			console.log(Book.name);　//<人性的弱点>
		</code></pre>
		<p>原生js实现数据绑定：</p>
		<pre class="bg-dark text-light"><code>
			// 监听器Observer: 
			// 1.通过observe()方法进行遍历向下找到所有的属性
			// 2.通过defineReactive()方法重写对象属性的get/set方法进行数据劫持监听
			// 3.需要一个消息订阅器Dep来专门收集这些订阅者，并在监听器Observer和订阅者Watcher之间进行统一的管理，如果有变动的，就通知订阅者
			function observe(data){
				if(!data || typeof data !== 'object') {
			        return;
			    }
			    Object.keys(data).forEach(function(key){
			        defineReactive(data,key,data[key]);
			    });
			}
			function defineReactive(data,key,val){
				observe(val)       //递归遍历所有的属性
				let dep = new Dep();
				Object.defineProperty(data,key,{
			        enumerable:true,         //当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中
			        configurable:true,       //当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。
			        get:function() {
			        	if (Dep.target) {         //Watcher初始化触发
			                dep.addSub(Dep.target);  // 在这里添加一个订阅者，即触发属性get方法完成添加订阅者
			            }
			            return val;
			        },
			        set:function(newVal) {
			        	if (val === newVal) {
			                return;
			            }
			            val = newVal;
			            console.log('属性'+key+'已经被监听,现在值为:"'+newVal.toString()+'"');
			            dep.notify(); // 如果数据变化，通知所有订阅者
			        }
			    })
			}
			function Dep() {
			    this.subs = [];     //消息订阅器需要有一个容器来存放订阅者
			}
			Dep.prototype = {                        
			    addSub:function(sub) {
			        this.subs.push(sub);
			    },
			    notify:function() {
			        this.subs.forEach(function(sub) {
			            sub.update();        //通知每个订阅者检查更新
			        })
			    }
			}
			Dep.target = null;


			// 订阅者Watcher:
			// 1.将自己注册到监听器中
			// 2.收到属性的变化通知并执行相应的函数，从而更新视图
			function Watcher(vm,exp,cb) {
			    this.vm = vm;    //指向SelfVue的作用域
			    this.exp = exp;  //绑定属性的key值
			    this.cb = cb;    //闭包
			    this.value = this.get();  //注册一个订阅者
			}
			Watcher.prototype = {
			    update:function() {
			        this.run();
			    },
			    run:function() {
			        let value = this.vm.data[this.exp];
			        let oldVal = this.value;
			        if(value !== oldVal) {
			            this.value = value;
			            // this.cb.call(this.vm,value,oldVal);
			            this.cb(value)
			        }
			    },
			    get:function() {
			        Dep.target = this;                   // 在Dep.target上缓存一下订阅者，添加成功后去除
			        let value = this.vm.data[this.exp];  // 在订阅者Watcher在初始化时触发对象属性的get函数来执行添加订阅者的操作
			        Dep.target = null;                   // 释放自己
			        return value;
			    }
			}


			//将Observer和Watcher关联起来，得到模拟vue数据绑定的方法SelfVue
			function SelfVue(data,el,exp) {
			    this.data = data;
			    observe(data);     //初始化一个监听器（将data下所有属性注册到监听器中）
			    el.innerHTML = this.data[exp];
			    // 初始化一个订阅者
			    new Watcher(this,exp,function(value) {
			        el.innerHTML = value;
			    });
			    return this;
			}
			// test
			let ele = document.querySelector('#name');
			let selfVue = new SelfVue({
				name:'hello world 2s 后变化'
			},ele,'name');

			window.setTimeout(function() {
				console.log('name值改变了');
				selfVue.data.name = 'byebye world';
			},2000);
		</code></pre>
		<h1 id="name"></h1>
	</div>
</template>

<script>
	export default {
		name: 'Doc5',
		data(){
			return {
				currRoute: null,
			}
		},
		created(){
			this.currRoute = this.$route
		},
		mounted(){
			let ele = document.querySelector('#name');
			let selfVue = new SelfVue({
				name:'hello world'
			},ele,'name');

			window.setTimeout(function() {
				console.log('name值改变了');
				selfVue.data.name = 'byebye world';
			},2000);
		},
		methods: {
		}
	}

// 监听器Observer: 
// 1.通过observe()方法进行遍历向下找到所有的属性
// 2.通过defineReactive()方法重写对象属性的get/set方法进行数据劫持监听
// 3.需要一个消息订阅器Dep来专门收集这些订阅者，并在监听器Observer和订阅者Watcher之间进行统一的管理，如果有变动的，就通知订阅者
function observe(data){
	if(!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    });
}
function defineReactive(data,key,val){
	observe(val)       //递归遍历所有的属性
	let dep = new Dep();
	Object.defineProperty(data,key,{
        enumerable:true,         //当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中
        configurable:true,       //当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。
        get:function() {
        	if (Dep.target) {         //Watcher初始化触发
                dep.addSub(Dep.target);  // 在这里添加一个订阅者，即触发属性get方法完成添加订阅者
            }
            return val;
        },
        set:function(newVal) {
        	if (val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性'+key+'已经被监听,现在值为:"'+newVal.toString()+'"');
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    })
}
function Dep() {
    this.subs = [];     //消息订阅器需要有一个容器来存放订阅者
}
Dep.prototype = {                        
    addSub:function(sub) {
        this.subs.push(sub);
    },
    notify:function() {
        this.subs.forEach(function(sub) {
            sub.update();        //通知每个订阅者检查更新
        })
    }
}
Dep.target = null;


// 订阅者Watcher:
// 1.将自己注册到监听器中
// 2.收到属性的变化通知并执行相应的函数，从而更新视图
function Watcher(vm,exp,cb) {
    this.vm = vm;    //指向SelfVue的作用域
    this.exp = exp;  //绑定属性的key值
    this.cb = cb;    //闭包
    this.value = this.get();  //注册一个订阅者
}
Watcher.prototype = {
    update:function() {
        this.run();
    },
    run:function() {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if(value !== oldVal) {
            this.value = value;
            // this.cb.call(this.vm,value,oldVal);
            this.cb(value)
        }
    },
    get:function() {
        Dep.target = this;                   // 在Dep.target上缓存一下订阅者，添加成功后去除
        let value = this.vm.data[this.exp];  // 在订阅者Watcher在初始化时触发对象属性的get函数来执行添加订阅者的操作
        Dep.target = null;                   // 释放自己
        return value;
    }
}


//将Observer和Watcher关联起来，得到模拟vue数据绑定的方法SelfVue
function SelfVue(data,el,exp) {
    this.data = data;
    observe(data);     //初始化一个监听器（将data下所有属性注册到监听器中）
    el.innerHTML = this.data[exp];
    // 初始化一个订阅者
    new Watcher(this,exp,function(value) {
        el.innerHTML = value;
    });
    return this;
}
</script>

<style scoped lang="scss">

</style>