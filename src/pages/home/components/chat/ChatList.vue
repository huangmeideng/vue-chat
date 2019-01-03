<template>
    <div class="container">
        <router-link tag="div" to="/chat/detail/" class="chat-item" @click="onJumpChatDetail">
            <div class="chat-left">
                <img class="chat-avatar" src="@/assets/temp/avatar_one.jpg" alt="">
            </div>
            <div class="chat-center">
                <span class="chat-name">Kinano</span>
                <div class="chat-content">
                    我是上一条聊天内容
                </div>
            </div>
            <div class="chat-right">
                <div class="chat-time">
                    17:12
                </div>
                <div class="chat-tip">
                    23
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ChatList",
    methods: {
        onJumpChatDetail () {
            this.$emit('jumpChatDetail')
        }
    }
}
</script>

<style scoped>
    .chat-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80px;
        border: 1px solid #E5E4E4;
        background-color: #FFFFFF;
    }
    .chat-left {
        height: 80px;
        width: 80px;
    }
    .chat-avatar {
        width: 70px;
        height: 70px;
        border-radius: 5%;
        margin-top: 5px;
        margin-left: 5px;
    }
    .chat-center {
        display: flex;
        flex-direction: column;
    }
    .chat-name {
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
    }
    .chat-content {
        margin-top: 15px;
        margin-left: 10px;
    }
    .chat-right {
        display: flex;
        flex-direction: column;
    }
    .chat-time {
        margin-left: 80px;
        margin-top: 15px;
        font-size: 15px;
    }
    .chat-tip {
        width: 20px;
        height: 20px;
        margin-left: 90px;
        margin-top: 10px;
        border-radius: 50%;
        background-color: #EA544C;
        color: #FFFFFF;
        line-height: 20px;
        font-size: 10px;
        text-align: center;
    }
</style>
