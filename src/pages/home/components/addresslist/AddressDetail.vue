<template>
    <div class="container">
        <van-nav-bar
            title="cui聊"
            class="nav-header" 
            left-arrow
            @click-left="onBack">
            <van-icon name="ellipsis" slot="right" size="25px" @click="onChangePopup"/>
        </van-nav-bar>
        <div class="detail-info">
            <div class="info-avatar">
                <img :src="testData.imgUrl" alt="">
            </div>
            <div class="info-list">
                <div class="list-name-gender">
                    <div class="list-name">
                        {{testData.name}}
                    </div>
                    <img class="list-gender" :src=" testData.gender === 0? maleIcon: femailIcon " alt="">
                </div>
                <div class="list-one">
                    电话: {{testData.phone}}
                </div>
                <div class="list-one">
                    地区: {{testData.area}}
                </div>
            </div>
        </div>
        <div class="detail-tag">
            <div class="tag-title">
                标签
            </div>
            <div class="tag-list">
                <van-tag v-for="(item,index) of testData.tagData" :key="index" round plain>
                    {{item}}
                </van-tag>
            </div>
            <van-icon name="arrow"></van-icon>
        </div>
        <div class="detail-community">
            <div class="community-title">
                社区
            </div>
            <div class="community-list">
                <img v-for="(item,index) of testData.communityData" :key="index" :src="item" alt="">
            </div>
            <van-icon name="arrow"></van-icon>
        </div>
        <div class="detail-more">
            <div class="more-title">
                更多
            </div>
            <div class="more-list"></div>
            <van-icon name="arrow"></van-icon>
        </div>
        <div class="detail-chat">
            <img :src="chatIcon" alt="">
            <div>发消息</div>
        </div>
        <van-popup v-model="popupShow" position="bottom" class="popup-box">
            <div class="popup-item" v-for="item of popupData" :key="item.id">
                <img :src="item.icon" alt="">
                <div>{{item.title}}</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { NavBar, Icon, Tag, Popup } from 'vant'
import utils from '../../../../utils'
import Bscroll from 'better-scroll'
export default {
    name: 'AddressDetail',
    components: {
        NavBar,
        Icon,
        Tag,
        Popup
    },
    data() {
        return {
            testData: {
                id: 1,
                name: '孙大翠',
                phone: '18362985538',
                imgUrl: require("@/assets/temp/cui.jpeg"),
                gender: 1,
                area: '福建 宁德',
                tagData: [
                    '电影',
                    '美妆',
                    '旅行'
                ],
                communityData: [
                    require("@/assets/temp/fr/1.jpg"),
                    require("@/assets/temp/fr/2.jpg"),
                    require("@/assets/temp/fr/3.jpg"),
                    require("@/assets/temp/fr/4.png")
                ]
            },
            maleIcon: require("@/assets/icon/sex/boy.png"),
            femailIcon: require("@/assets/icon/sex/girl.png"),
            chatIcon: require("@/assets/icon/addressdetail/Chat.png"),
            popupShow: false,
            scrollOptions: {
                click: true
            },
            popupData: [
                {
                    id: 0,
                    title: '修改备注',
                    icon: require("@/assets/icon/addressdetail/edit.png"),
                    to: 'www.baidu.com'
                },
                {
                    id: 1,
                    title: '拉黑',
                    icon: require("@/assets/icon/addressdetail/forbid.png"),
                    to: 'www.baidu.com'
                },
                {
                    id: 2,
                    title: '投诉举报',
                    icon: require("@/assets/icon/addressdetail/complain.png"),
                    to: 'www.baidu.com'
                },
                {
                    id: 3,
                    title: '删除好友',
                    icon: require("@/assets/icon/addressdetail/delete.png"),
                    to: 'www.baidu.com'
                }
            ]
        }
    },
    methods: {
        onBack () {
            this.$router.back(-1)
        },
        onChangePopup () {
            this.popupShow = !this.popupShow
            this.initScroll()
        },
        /**
         * better-scroll初始化事件
         */
        initScroll () {
            this.$nextTick( () => {
                this.scroll = new Bscroll(document.querySelector('.popup-box'),this.scrollOptions)
            })
        },
    },
    mounted () {

    },
}
</script>

<style scoped>
    .container {
        background-color: #EDECEC;
    }
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
        margin-top: 5px;
    }

    .detail-info {
        display: flex;
        flex-direction: row;
        background-color: #FFFFFF;
        height: 150px;
        border-bottom: 1px solid #E5E4E4;
    }
    .info-avatar {
        width: 120px;
        height: 150px;
    }
    .info-avatar img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin-left: 20px;
        margin-top: 20px;
    }
    .list-name-gender {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        width: 150px;
        height: 20px;
    }
    .list-name {
        font-size: 20px;
        font-family: "Microsoft YaHei";
    }
    .list-gender {
        margin-left: 10px;
        width: 20px;
        height: 20px;
    }
    .list-one {
        margin-top: 10px;
        width: 150px;
        height: 20px;
        line-height: 20px;
        color: #9F9E9E;
    }

    .detail-tag {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .tag-title {
        width: 80px;
        height: 50px;
        font-family: "Microsoft YaHei";
        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }
    .tag-list {
        margin-top: 15px;
        width: 250px;
    }
    .van-tag {
        margin-left: 10px;
    }
    .van-icon {
        margin-left: 10px;
        margin-top: 20px;
        color: #ABAAAA;
    }

    .detail-community {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .community-title {
        width: 80px;
        height: 50px;
        font-family: "Microsoft YaHei";
        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }
    .community-list {
        display: flex;
        flex-direction: row;
        margin-top: 7px;
        height: 50px;
        width: 250px;
    }
    .community-list img {
        width: 36px;
        height: 36px;
        margin-left: 5px;
        border-radius: 5px;
    }

    .detail-more {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .more-title {
        width: 80px;
        height: 50px;
        font-family: "Microsoft YaHei";
        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }
    .more-list {
        height: 50px;
        width: 250px;
    }

    .detail-chat {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .detail-chat img {
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-left: 120px;
    }
    .detail-chat div {
        margin-top: 5px;
        width: 60px;
        height: 40px;
        line-height: 40px;
        font-family: "Microsoft YaHei";
        font-size: 16px;
    }

    .popup-box {
        overflow: hidden;
        height: 240px;
        border-radius: 5px;
    }
    .popup-item {
        display: flex;
        flex-direction: row;
        height: 30px;
        margin-left: 20px;
        margin-top: 10px;
    }
    .popup-item img {
        width: 20px;
        height: 20px;
    }
    .popup-item div {
        margin-left: 20px;
        line-height: 20px;
    }
</style>

