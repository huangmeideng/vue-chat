<template>
    <div>
        <van-nav-bar title="vue聊" fixed class="nav-header"></van-nav-bar>
        <div class="tab-box" ref="bscroll" :style="{height: scrollHeight + 'px'}">
            <chat-list v-if="active === 0"></chat-list>
            <address-list v-if="active === 1"></address-list>
            <community v-if="active === 2"></community>
            <my v-if="active === 3"></my>
        </div>
        <van-tabbar v-model="active" @change="onChangeTab">
            <van-tabbar-item icon="chat-o">聊天</van-tabbar-item>
            <van-tabbar-item icon="phone-circle-o" dot>通讯录</van-tabbar-item>
            <van-tabbar-item icon="underway-o" info="2">社区</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o" info="20">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { NavBar, Swipe, SwipeItem, Tabbar, TabbarItem } from 'vant'
import ChatList from './components/chat/ChatList'
import AddressList from './components/addresslist/AddressList'
import Community from './components/community/Community'
import My from './components/my/My'
import Bscroll from "better-scroll"
export default {
    name: "Home",
    components: {
        NavBar,
        Swipe,
        SwipeItem,
        Tabbar,
        TabbarItem,
        ChatList,
        AddressList,
        Community,
        My
    },
    data() {
        return {
            active: 0,
            clientHeight: document.documentElement.clientHeight,
            scrollOptions: {
                click: true
            }
        }
    },
    computed: {
        scrollHeight () {
            return this.clientHeight - 46 - 50
        }
    },
    methods: {
        initScroll () {
            this.$nextTick( () => {
                this.scroll = new Bscroll(this.$refs.bscroll,this.scrollOptions)
            })
        },
        onChangeTab () {
            this.scroll = null
            this.initScroll()
        }
    },
    mounted() {
        this.initScroll()
    },
}
</script>

<style scoped>
    .nav-header {
        background-color: #4494D5;
        color: #FFFFFF;
    }
    .tab-box {
        overflow: hidden;
        margin-top:46px;
    }
</style>

