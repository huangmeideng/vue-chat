<template>
    <div class="container">
        <van-nav-bar class="nav-header" 
                    left-text="Kinano" 
                    left-arrow
                    @click-left="onBack"
                    fixed>
            <van-icon name="ellipsis" slot="right" size="25px"/>
        </van-nav-bar>
        <div class="chat-detail-box" ref="bscroll">
            <chat-dialog :dialogData="dialogData"></chat-dialog>
        </div>
        <div class="chat-footer">
            <div class="footer-left">
                <van-icon  class="left-emoji" name="smile-o" size="30px" color="#E56A20"/>
            </div>
            <div class="footer-center">
                <input class="center-input" type="text" placeholder="biu~biu~" v-model="inputValue">
            </div>
            <div class="footer-right" @click="onSendChat">
                <div class="right-button">
                    发送
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { NavBar, Icon, Toast } from "vant"
import ChatDialog from "./ChatDialog"
import utils from "@/utils"
import Bscroll from "better-scroll"
export default {
    name: 'ChatDetail',
    components: {
        NavBar,
        Icon,
        Toast,
        ChatDialog
    },
    data() {
        return {
            inputValue: '',
            dialogData: [
                {
                    id: 0,
                    type: 1,
                    text: '你好',
                    time: '17:00'
                },
                {
                    id: 1,
                    type: 1,
                    text: '我是kinano',
                    time: '17:02'
                },
                {
                    id: 2,
                    type: 2,
                    text: 'hello,我是momTrue',
                    time: '17:04',
                },
                {
                    id: 3,
                    type: 1,
                    text: '很高兴认识你',
                    time: '17:08'
                }
            ]
        }
    },
    methods: {
        onBack() {
            this.$router.push('/')
        },
        onSendChat() {
            if(this.inputValue === '') {
                Toast('请输入内容')
            } else{
                let chatContent = {
                    type: 2,
                    text: this.inputValue,
                    time: utils.getNowTime()
                }
                this.dialogData.push(chatContent)
                this.inputValue = ''
            }
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.bscroll)
    },
}
</script>

<style scoped>
    .nav-header {
        background-color: #4494D5;
        color: #FFFFFF;
    }
    .container >>> .van-nav-bar__text {
        color: #FFFFFF;
    }
    .container >>> .van-icon-arrow-left:before {
        color: #FFFFFF;
    }
    .container >>> .van-nav-bar .van-icon {
        color: #FFFFFF;
    }
    .chat-detail-box {
        margin-top: 46px;
    }
    .chat-footer {
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        border-top: 1px solid #E5E4E4;
        background-color: #FFFFFF;
    }
    .footer-left {
        width: 60px;
        height: 60px;
        border-right: 1px solid #E5E4E4;
    }
    .left-emoji {
        margin-left: 15px;
        margin-top: 15px;
    }
    .footer-center {
        height: 60px;
        width: 230px;
    }
    .center-input {
        border-bottom: 1px solid #4494D5;
        width: 200px;
        height: 40px;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
    }
    .footer-right {
        height: 60px;
    }
    .right-button {
        margin-top: 15px;
        margin-left: 5px;
        width: 60px;
        height: 30px;
        background-color: #4494D5;
        color: #FFFFFF;
        text-align: center;
        line-height: 30px;
        border-radius: 2px;
    }
</style>

