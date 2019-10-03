import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import router from './router.js'
import './global-components'
import VueFetch from './plugins/fetch.js'

Vue.use(VueFetch,{
	baseUrl:'http://localhost:3000/',
})
Vue.use(VueRouter)

new Vue({
	el:'#app',
	render:h=>h(AppLayout),
	router,
})