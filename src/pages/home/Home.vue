<template>
    <div>
        <van-nav-bar title="vue聊" fixed class="nav-header"></van-nav-bar>
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
export default {
    name: "Home",
    components: {
        NavBar,
        Tabbar,
        TabbarItem
    },
    data() {
        return {
            active: 1
        }
    },
}
</script>

<style scoped>
    .nav-header {
        background-color: #4494D5;
        color: #FFFFFF;
    }
</style>

