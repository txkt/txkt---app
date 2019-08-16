import Vue from 'vue'
import Router from 'vue-router'
import hphk from '@/views/hphk'
import txDetails from '@/views/txDetails'
import comment from '@/views/comment'
import company from '@/views/company'
import course from '@/components/wj-components/course'
import teacher from '@/components/wj-components/teacher'
import recommend from '@/components/wj-components/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
   
  ]
})
