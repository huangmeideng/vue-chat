<template>
    <div>
        <van-nav-bar title="cui聊" fixed class="nav-header"></van-nav-bar>
        <v-touch tag="div" @swipeleft="onSwipeLeft(currentActive)"  @swiperight="onSwipeRight(currentActive)" class="tab-box"   ref="bscroll" :style="{height: scrollHeight + 'px'}">
            <chat-list v-if="this.tabActive === 0"></chat-list>
            <address-list v-if="this.tabActive === 1" :currentLetter="currentLetter"></address-list>
            <community v-if="this.tabActive === 2"></community>
            <my v-if="this.tabActive === 3"></my>
        </v-touch>
        <common-letter-box v-show="showLetterBox" :letter="currentLetter"></common-letter-box>
        <common-letter v-show="this.tabActive === 1" @change="onClickLetter" @touchLetter="onTouchLetter" @touchStart="onTouchBoxStart" @touchEnd="onTouchBoxEnd"></common-letter>
        <van-tabbar v-model="currentActive" @change="onChangeTab">
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
import CommonLetter from '../../common/CommonLetter'
import CommonLetterBox from '../../common/CommonLetterBox'
import { mapState, mapActions } from 'vuex'
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
        My,
        CommonLetter,
        CommonLetterBox
    },
    data() {
        return {
            active: 0,
            clientHeight: document.documentElement.clientHeight,
            scrollOptions: {
                click: true
            },
            currentLetter: '',
            showLetterBox: false
        }
    },
    computed: {
        scrollHeight () {
            return this.clientHeight - 46 - 50
        },
        ...mapState(['tabActive']),
        currentActive: {
            get () {
                return this.tabActive
            },
            set (val) {
                this.dispatchTabActive(val)
            }
        }
    },
    watch: {
        currentLetter () {
            if (this.currentLetter) {
                let elementClass = ".letter-" + this.currentLetter
                this.scroll.scrollToElement(document.querySelector(elementClass))
            }
        }
    },
    methods: {
        /**
         * 点击字母事件
         */
        onClickLetter (e) {
            this.currentLetter = e
        },
        /**
         * 触摸字母事件
         */
        onTouchLetter (e) {
            this.currentLetter = e
        },
        /**
         * better-scroll初始化事件
         */
        initScroll () {
            this.$nextTick( () => {
                this.scroll = new Bscroll(document.querySelector('.tab-box'),this.scrollOptions)
            })
        },
        /**
         * 点击底部Tab事件
         */
        onChangeTab (e) {
            this.dispatchTabActive(e)
            this.scroll.destroy()
            this.initScroll()
        },
        ...mapActions(['dispatchTabActive']),
        /**
         * 左滑事件
         */
        onSwipeLeft(e) {
            if ( e >= 3 ) {
                return;
            } else{
                //this.active = e + 1
                this.dispatchTabActive(e+1)
                this.scroll.destroy()
                this.initScroll()
            }
        },
        /**
         * 右滑事件
         */
        onSwipeRight(e) {
            if ( e <= 0 ) {
                return;
            } else{
                //this.active = e - 1
                this.dispatchTabActive(e-1)
                this.scroll.destroy()
                this.initScroll()
            }
        },
        /**
         *  触摸开始显示中间字母box 
         */
        onTouchBoxStart () {
            this.showLetterBox = true
        },
        /**
         *  触摸结束隐藏中间字母box   
         */
        onTouchBoxEnd () {
            this.showLetterBox = false
        }
    },
    mounted(e) {
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
        background-color: #EBEAEA;
    }
</style>

