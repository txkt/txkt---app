import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Signin from './views/signin'
import Forgetword from './views/forgetword'
import Index from './views/index'
import Type from './views/type'

Vue.use(Router)

let router =new Router({
  routes: [
		{
			path:"/",
			name:"Index",
			component:Index,
		},
		{
			path:"/Index",
			name:"Index",
			component:Index,
		},
		{
			path:"/Type",
			name:"Type",
			component:Type,
		},
		{
			path:"/Login",
			name:"Login",
			component:Login,
		},
		{
			path:"/Signin",
			name:"Signin",
			component:Signin,
		},
		{
			path:"/Forgetword",
			name:"Forgetword",
			component:Forgetword,
		}
		
   
  ]
})

export default router;