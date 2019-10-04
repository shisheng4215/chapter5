import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import router from './router.js'
import './global-components'
import VueFetch ,{$fetch} from './plugins/fetch.js'
import state from './state.js'
import VueState from './plugins/state.js'
import * as filters from './filters.js'

for(const key in filters){
	Vue.filter(key,filters[key])
}
Vue.use(VueFetch,{
	baseUrl:'http://localhost:3000/',
})

Vue.use(VueState,state)
Vue.use(VueRouter)

async function main(){
	try{
		state.user = await $fetch('user')
	}catch(e){
		console.warm(e)
	}
}

new Vue({
	el:'#app',
	data:state,
	render:h=>h(AppLayout),
	router,
})

main()