<template>
	<div>
		<h2 class="mb-4">{{currRoute.name}}</h2>
    <p>1. 工厂模式</p>
    <pre class="bg-dark text-light"><code>
      function createPerson(name) {
          var o = new Object();
          o.name = name;
          o.getName = function () {
              console.log(this.name);
          };

          return o;
      }

      var person1 = createPerson('kevin');
    </code></pre>
    <p>缺点：对象无法识别，因为所有的实例都指向一个原型</p>

    <p class="pt-4">2. 构造函数模式</p>
    <pre class="bg-dark text-light"><code>
      function Person(name) {
          this.name = name;
          this.getName = function () {
              console.log(this.name);
          };
      }

      var person1 = new Person('kevin');
    </code></pre>
    <p>优点：实例可以识别为一个特定的类型</p>
    <p>缺点：每次创建实例时，每个方法都要被创建一次</p>
    
    <p class="pt-4">3. 原型模式</p>
    <pre class="bg-dark text-light"><code>
      function Person(name) {

      }

      Person.prototype.name = 'keivn';
      Person.prototype.getName = function () {
          console.log(this.name);
      };

      var person1 = new Person();
    </code></pre>
    <p>优点：方法不会重新创建</p>
    <p>缺点：1. 所有的属性和方法都共享 2. 不能初始化参数</p>
    <p class="pt-4">4. 组合模式</p>
    <pre class="bg-dark text-light"><code>
      function Person(name) {
          this.name = name;
      }

      Person.prototype = {
          constructor: Person,
          getName: function () {
              console.log(this.name);
          }
      };

      var person1 = new Person();
    </code></pre>
    <p>优点：该共享的共享，该私有的私有，使用最广泛的方式</p>
  </div>
</template>

<script>
	export default {
		name: 'Doc11',
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

</style>
