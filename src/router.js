import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import state from './state'
import Tickets from './components/Tickets.vue'
import NewTicket from './components/NewTicket.vue'
import Ticket from './components/Ticket.vue'
import NotFound from './components/NotFound.vue'

const routes=[
	{path:'/',name:'home',component:Home},
	{path:'/faq',name:'faq',component:FAQ},
	{path:'/login',name:'login',component:Login,meta:{guest:true}},
	{path:'/tickets',component:TicketsLayout,meta:{private:true},children:[
		{path:'',name:'tickets',component:Tickets},
		{path:'new',name:'new-ticket',component:NewTicket},
		{path:':id',name:'ticket',component:Ticket,props:route=>({id:route.params.id})},
	]},
	{path:'*',component:NotFound},
]

const router = new VueRouter({
	routes,
	mode:'history',
})

router.beforeEach((to,from,next)=>{
	//TODO
	console.log('to',to.name)

	if(to.meta.private && !state.user){
		next({
			name:'login',
			params:{
				wantedRoute:to.fullPath,
			}})
		return		
	}
	if(to.matched.some(r=>r.meta.guest) && state.user){
		next({name:'home'})
		return
	}
	next()
})

export default router
