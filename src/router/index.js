import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import ach from '@/components/ach'
import news from '@/components/news'
import rel from '@/components/rel'
import tec from '@/components/tec'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/ach',
      name: 'ach',
      component: ach
    },{
      path: '/news',
      name: 'news',
      component: news
    },{
      path: '/rel',
      name: 'rel',
      component: rel
    },{
      path: '/tec',
      name: 'tec',
      component: tec
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
