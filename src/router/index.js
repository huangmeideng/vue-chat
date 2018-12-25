import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ChatDetail from '@/pages/home/components/chat/ChatDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
