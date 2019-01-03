<template>
    <div class="container">
        <div class="my-header">
            <van-icon  class="header-arrow" name="arrow-left" :color="arrowColor" :size="arrowSize"></van-icon>
            <img class="header-camera" :src="cameraIcon1" alt="">
        </div>
        <div>
            <div class="community-header">
                <img class="header-back" :src="userData.backUrl" alt="">
                <span class="header-name">{{userData.backName}}</span>
                <img class="header-avatar" :src="userData.backAvatar" alt="">
            </div>
            <community-list></community-list>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant'
import CommunityList from './CommunityList'
export default {
    name: "CommunityDetail",
    components: {
        CommunityList,
        Icon
    },
    data() {
        return {
            userData: {
                backUrl: require("@/assets/temp/community/2.jpg"),
                backName: ' momTrue',
                backAvatar: require("@/assets/temp/avatar_15.jpg")
            },
            cameraIcon0: require("@/assets/icon/community/camera_0.png"),
            cameraIcon1: require("@/assets/icon/community/camera_1.png"),
            arrowColor: '#FFFFFF',
            arrowSize: '20px'
        }
    },
}
</script>

<style scoped>
    .my-header {
        position: fixed;
        display: flex;
        flex-direction: row;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        height: 46px;
    }
    .header-arrow {
        margin-left: 10px;
        line-height: 46px;
    }
    .header-camera {
        width: 30px;
        height: 30px;
        margin-top: 8px;
        margin-left: 300px;
    }
    .community-header {
        height: 230px;
    }
    .header-back {
        width: 100%;
        height: 200px;
    }
    .header-name {
        position: absolute;
        right: 100px;
        top: 176px;
        font-size: 16px;
        color: #FFFFFF;
        font-family: "Microsoft YaHei";
    }
    .header-avatar {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 5px;
        right: 10px;
        top: 150px;
    }
</style>

