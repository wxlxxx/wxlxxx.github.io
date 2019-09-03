import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


if(document.querySelectorAll('.reveal').length > 0){
    require.ensure([],function(){
        const _ = require('./assets/js/revealdemo.js')
    },'revealdemo')
}