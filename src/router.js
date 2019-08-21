import Vue from 'vue'
import Router from 'vue-router'
import hphk from '@/views/hphk'
import txDetails from '@/views/txDetails'
import comment from '@/views/comment'
import company from '@/views/company'
import course from '@/components/wj-components/course'
import teacher from '@/components/wj-components/teacher'
import recommend from '@/components/wj-components/recommend'
import Login from './views/login'
import Signin from './views/signin'
import Forgetword from './views/forgetword'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/hphk',
      name: 'hphk',
      component: hphk
    },
    {
      path: '/txDetails',
      name: 'txDetails',
      component: txDetails
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/company',
      name: 'company',
      component: company,
      children:[
        {
          path:'',
          component:course
        },
        {
          path:'teacher',
          component:teacher
        },
        {
          path:'recommend',
          component:recommend
        }
      ]
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