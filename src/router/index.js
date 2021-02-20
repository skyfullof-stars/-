import Vue from 'vue'
import Router from 'vue-router'
//懒加载
const login = ()=> import('../components/login')
const register = ()=> import('../components/register')
const user = ()=> import('../pages/user')
const business = ()=> import('../pages/business')
const homepage = ()=> import('@/pages/homepage')
const goodslist = ()=>import('../pages/goodslist')
/* import login from '../components/login'
import user from '../pages/user.vue'
import business from '../pages/business.vue'
import homepage from '../pages/homepage.vue' */

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: login
    },
    ,
    {
      /* 这个一开始进入的不是login 是空 ,未来如果看到了请修改 */
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/homepage',
      component:homepage,
      children:[
    {
      path:'/user',
      component:user
    },
    {
      path:'/business',
      component:business
    },
    {
      path:'/goodslist',
      component:goodslist
    }
      ]
    }
  ]
})
