<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
		<h4>面向对象编程</h4>
		<p>面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。</p>
		<p>目的是为了良好的可移植性和可扩展性。</p>
		<h4>面向对象和面向过程的区别</h4>
		<ol>
			<li><strong>面向过程</strong>就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。</li>
			<li><strong>面向对象</strong>是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。</li>
		</ol>
		<h4>封装</h4>
		<p>封装：把客观事物封装成抽象的类，隐藏属性和方法的实现细节，仅对外公开接口。</p>
		<pre class="bg-dark text-light"><code>
	var Book = function (id, name, price) {
		//private(在函数内部定义，函数外部访问不到，实例化之后实例化的对象访问不到)
		var num = 1;
		var id = id;
		function checkId() {
			console.log('private')
		}
		//protected(可以访问到函数内部的私有属性和私有方法，在实例化之后就可以对实例化的类进行初始化拿到函数的私有属性)
		this.getName = function () {
			console.log(id)
		}
		this.getPrice = function () {
			console.log(price)
		}

		//public(实例化的之后，实例化的对象就可以访问到了~)
		this.name = name;
		this.copy = function () {
			console.log('this is public')
		}

	}

	//在Book的原型上添加的方法实例化之后可以被实例化对象继承
	Book.prototype.proFunction = function () {
		console.log('this is proFunction')
	}

	//在函数外部通过.语法创建的属性和方法，只能通过该类访问，实例化对象访问不到
	Book.setTime = function () {
		console.log('this is new time')
	}
	var book1 = new Book('111','悲惨世界','$99')
	book1.getName();        // 111 getName是protected，可以访问到类的私有属性，所以实例化之后也可以访问到函数的私有属性
	book1.checkId();        //报错book1.checkId is not a function
	console.log(book1.id)   // undefined id是在函数内部通过定义的，是私有属性，所以实例化对象访问不到
	console.log(book1.name) //name 是通过this创建的，所以在实例化的时候会在book1中复制一遍name属性，所以可以访问到
	book1.copy()            //this is public
	book1.proFunction();    //this is proFunction
	Book.setTime();         //this is new time
	book1.setTime();        //报错book1.setTime is not a function
		</code></pre>
		<p><strong>new的实质</strong></p>
		<p>var o = new Object()</p>
		<ol>
			<li>新建一个对象o</li>
			<li>o. __proto__ = Object.prototype 将新创建的对象的__proto__属性指向构造函数的prototype</li>
			<li>将this指向新创建的对象</li>
			<li>返回新对象，但是这里需要看构造函数有没有返回值，如果构造函数的返回值为基本数据类型string,boolean,number,null,undefined,那么就返回新对象，如果构造函数的返回值为对象类型，那么就返回这个对象类型</li>
		</ol>
		<h4>继承</h4>
		<p>继承：子类可以使用父类的所有功能，并且对这些功能进行扩展。继承的过程，就是从一般到特殊的过程。</p>
		<h5>类式继承</h5>
		<p>所谓的类式继承就是使用的原型的方式，将方法添加在父类的原型上，然后子类的原型是父类的一个实例化对象。</p>
		<pre class="bg-dark text-light"><code>
		var SuperClass = function () {}
		var SubClass = function () {}
		SubClass.prototype = new SuperClass()
		</code></pre>
		<p>缺点：如果父类的构造函数中有引用类型，就会在子类中被所有实例共用，因此一个子类的实例如果更改了这个引用类型，就会影响到其他子类的实例</p>
		<h5>构造函数继承</h5>
		<p>SuperClass.call(this,id),直接改变this的指向，使通过this创建的属性和方法在子类中复制一份，因为是单独复制的，所以各个实例化的子类互不影响。但是会造成内存浪费的问题</p>
		<pre class="bg-dark text-light"><code>
		function SuperClass(id) {
			this.id = id
		}
		function SubClass(id) {
			SuperClass.call(this,id)
		}
		var subclass1 = new SubClass(10);
		var subclass2 = new SubClass(11);
		</code></pre>
	</div>
</template>

<script>
	export default {
		name: 'Doc7',
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