import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ChatDetail from '@/pages/home/components/chat/ChatDetail'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat/detail/',
      name: 'ChatDetail',
      component: ChatDetail
    }
  ]
})
