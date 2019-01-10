<template>
    <div class="container">
        <chat-list-item :dialogListData="dialogListData"></chat-list-item>
    </div>
</template>

<script>
import ChatListItem from './ChatListItem'
export default {
    name: "ChatList",
    components: {
        ChatListItem
    },
    data() {
        return {
            dialogListData: [
                {
                    id: 0,
                    avatar: require("@/assets/temp/avatar_0.jpg"),
                    name: 'Kinano',
                    content: '我是Kinano',
                    time: '12:00',
                    tip: '2'
                },
                {
                    id: 1,
                    avatar: require("@/assets/temp/avatar_1.jpg"),
                    name: 'Kaka',
                    content: '我是Kaka',
                    time: '09:11',
                    tip: '3'
                },
                {
                    id: 2,
                    avatar: require("@/assets/temp/avatar_2.jpeg"),
                    name: 'Wall_qqP',
                    content: 'hello,world',
                    time: '21:11',
                    tip: '12'
                }
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>
