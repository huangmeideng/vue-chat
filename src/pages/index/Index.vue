<template>
    <div class="container" :style="containerStyle">
        <fade-bounce>
            <login v-if="showLoginPanel" @cancelLogin="onCancelLogin"></login>
        </fade-bounce>
        <fade-down>
            <register v-show="showRegisterPanel" @cancelRegister="onCancelRegister"></register>
        </fade-down>
        <van-button class="button-login" 
                    type="default" 
                    :block="buttonBlock"
                    v-if="showLoginButton"
                    @click="onLogin">登录</van-button>
        <van-button class="button-register" 
                    type="default" 
                    :block="buttonBlock"
                    v-if="showRegisterButton"
                    @click="onRegister">注册</van-button>
    </div>
</template>

<script>
import FadeBounce from '../../common/fade/FadeBounce'
import FadeDown from '../../common/fade/FadeDown'
import Login from './components/Login'
import Register from './components/Register'
import { Button } from 'vant'
export default {
    name: 'Index',
    components: {
        FadeBounce,
        FadeDown,
        Button,
        Login,
        Register
    },
    data() {
        return {
            buttonBlock: true,
            showLoginButton: true,
            showRegisterButton: true,
            showLoginPanel: false,
            showRegisterPanel: false,
            containerStyle: {
                margin: '0px',
                padding: '0px',
                backgroundImage: 'url('+ require("@/assets/pic/loginBack.jpeg") + ')',
                backgroundRepeat: 'no-repeat',
                height: document.documentElement.clientHeight + 'px',
                width: '100%',
                backgroundSize: 'cover'
            }
        }
    },
    methods: {
        //显示登录页面
        onLogin () {
            this.showLoginPanel = true
            this.showLoginButton = false
            this.showRegisterButton = false
        },
        //显示注册页面
        onRegister () {
            this.showRegisterPanel = true
            this.showLoginButton = false
            this.showRegisterButton = false
        },
        //取消登录事件
        onCancelLogin () {
            this.showLoginPanel = false
            this.showLoginButton = true
            this.showRegisterButton = true
        },
        //取消注册事件
        onCancelRegister () {
            this.showRegisterPanel = false
            this.showLoginButton = true
            this.showRegisterButton = true
        }
    },
    mounted() {

    },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .button-login {
        width: 150px;
    }
    .button-register {
        width: 150px;
        margin-top: 20px;
    }
</style>

