<template>
    <div class="container">
        <router-link tag="div" 
                    to="/chat/detail/"  
                    v-for="(item,index) of dialogListData" 
                    :key="index"
                    class="chat-item">
            <div class="chat-left">
                <img class="chat-avatar" :src="item.avatar" alt="">
            </div>
            <div class="chat-center">
                <span class="chat-name">{{item.name}}</span>
                <div class="chat-content">
                    {{item.content}}
                </div>
            </div>
            <div class="chat-right">
                <div class="chat-time">
                    {{item.time}}
                </div>
                <div class="chat-tip">
                    {{item.tip}}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ChatListItem',
    props: ['dialogListData'],
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
        width: 235px;
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
        margin-left: 10px;
    }
    .chat-time {
        margin-top: 15px;
        font-size: 15px;
    }
    .chat-tip {
        width: 20px;
        height: 20px;
        margin-top: 10px;
        border-radius: 50%;
        background-color: #EA544C;
        color: #FFFFFF;
        line-height: 20px;
        font-size: 10px;
        text-align: center;
    }
</style>

