import Vue from 'vue'
import Router from 'vue-router'
// import Homepage from '@/pages/Homepage/template.vue'
// import Login from '@/pages/Login/template.vue'
// import Register from '@/pages/Register/template.vue'
// import User from '@/pages/User/template.vue'
// import Myself from '@/pages/Myself/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import Create from '@/pages/Create/template.vue'
// import Details from '@/pages/Details/template.vue'
//设置模块的懒加载，只有当用户要进入该页面时才加载该页面
import store from '../store'

Vue.use(Router)

/*var router = new Router({
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path:'/login',
      component: Login 
    },
    {
      path:'/register',
      component: Register 
    },
    {
      path:'/create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path:'/edit/:blogId',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path:'/myself',
      component: Myself,
      meta:{requiresAuth:true}
    },
    {
      path:'/user/:userId',
      component: User 
    },    {
      path:'/details/:blogId',
      component: Details 
    }
  ]
})
*/
const router = new Router({
  routes:[
    {
      path:'/',
      component:()=>import('@/pages/homepage/template.vue')
    },
    {
      path:'/login',
      component:()=>import('@/pages/login/template.vue')
    },
    {
      path:'/register',
      component:()=>import('@/pages/register/template.vue')
    },
    {
      path:'/create',
      component:()=>import('@/pages/create/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/edit/:blogId',
      component:()=>import('@/pages/edit/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/myself',
      component:()=>import('@/pages/myself/template.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/user/:userId',
      component:()=>import('@/pages/user/template.vue'),
    },
    {
      path:'/detail/:blogId',
      component:()=>import('@/pages/detail/template.vue'),
    }
  ]
})
//当用户在jinru进入某个页面时才加载该模块，实现了懒加载

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('checkLogin').then(isLogin=>{
      if(!isLogin){
        next({
          path:'/login',
          query: { redirect: to.fullPath }
        })
      }else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router