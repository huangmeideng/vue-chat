import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ChatDetail from '@/pages/home/components/chat/ChatDetail'
import AddressDetail from '@/pages/home/components/addresslist/AddressDetail'
import CommunityDetail from '@/pages/home/components/community/CommunityDetail'
import CommunityPublish from '@/pages/home/components/community/CommunityPublish'
import CommunityScope from '@/pages/home/components/community/CommunityScope'
import CommonLocation from '@/common/CommonLocation'
import MySet from '@/pages/home/components/my/MySet'
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
    },
    {
      path: '/addresslist/detail/:id',
      name: 'AddressDetail',
      component: AddressDetail
    },
    {
      path: '/community/detail/',
      name: 'CommunityDetail',
      component: CommunityDetail
    },
    {
      path: '/community/publish/',
      name: 'CommunityPublish',
      component: CommunityPublish
    },
    {
      path: '/community/scope/',
      name: 'CommunityScope',
      component: CommunityScope
    },
    {
      path: '/common/location/',
      name: 'CommonLocation',
      component: CommonLocation
    },
    {
      path: '/my/myset/',
      name: 'MySet',
      component: MySet
    }
  ]
})
