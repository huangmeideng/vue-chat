<template>
    <div class="container">
        <div class="list-item">
            <div class="item-left">
                <img :src="listData[0].avatar" alt="">
            </div>
            <div class="item-right">
                <div class="right-name">
                    {{listData[0].name}}
                </div>
                <div class="right-text">
                    {{listData[0].text}}
                </div>
                <community-imgs :imgs="listData[0].imgs"></community-imgs>
                <div class="right-footer">
                    <div class="footer-time">
                        {{listData[0].time}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommunityImgs from './CommunityImgs'
export default {
    name: 'CommunityList',
    components: {
        CommunityImgs
    },
    data() {
        return {
            listData: [
                {
                    id: 0,
                    avatar: require("@/assets/temp/avatar_one.jpg"),
                    name: "Kinano",
                    text: '我是文字内容我收拾收拾收拾那你想叫你小激动呢小激动呢',
                    imgs: [
                        require("@/assets/temp/fr/1.jpg"),
                        require("@/assets/temp/fr/2.jpg"),
                        require("@/assets/temp/fr/3.jpg"),
                        require("@/assets/temp/fr/4.png"),
                        require("@/assets/temp/fr/5.jpg"),
                        require("@/assets/temp/fr/6.jpg"),
                        require("@/assets/temp/fr/7.jpg"),
                        require("@/assets/temp/fr/8.jpeg"),
                        require("@/assets/temp/fr/9.jpg")
                    ],
                    time: '17:01'
                }
            ]
        }
    },
}
</script>

<style scoped>
    .list-item {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        border-bottom: 1px solid #E9E9E9;
    }
    .item-left {
        margin-left: 10px;
        margin-bottom: 10px;
        width: 40px;
        height: 40px;
    }
    .item-left img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .item-right {
        width: 294px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .right-name {
        font-family: "Microsoft YaHei";
        font-size: 16px;
        color: #638BB7;
    }
    .right-text {
        margin-top: 5px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
    }
    .right-footer {
        display: flex;
        flex-direction: row;
        margin-top: 16px;
    }
    .footer-time {
        font-family: "Microsoft YaHei";
        font-size: 12px;
        color: #9A9A9A;
    }
</style>

