<template>
    <div>
        <van-nav-bar title="vue聊" fixed class="nav-header"></van-nav-bar>
        <div class="tab-box">
            <chat-list v-show="active === 0"></chat-list>
            <address-list v-show="active === 1"></address-list>
            <community v-show="active === 2"></community>
            <my v-show="active === 3"></my>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="chat-o">聊天</van-tabbar-item>
            <van-tabbar-item icon="phone-circle-o" dot>通讯录</van-tabbar-item>
            <van-tabbar-item icon="underway-o" info="2">社区</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o" info="20">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from 'vant'
import ChatList from './components/chat/ChatList'
import AddressList from './components/addresslist/AddressList'
import Community from './components/community/Community'
import My from './components/my/My'
export default {
    name: "Home",
    components: {
        NavBar,
        Tabbar,
        TabbarItem,
        ChatList,
        AddressList,
        Community,
        My
    },
    data() {
        return {
            active: 0
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .nav-header {
        background-color: #4494D5;
        color: #FFFFFF;
    }
    .tab-box {
        margin-top:46px;
    }
</style>

