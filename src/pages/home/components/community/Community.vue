<template>
    <div class="container">
        <router-link tag="div" to="/community/detail/" class="community-friend">
            <img class="friend-icon" :src="friendIcon" alt="">
            <div class="friend-title">朋友圈</div>
            <div class="friend-tip">12</div>
            <van-icon class="friend-arrow" name="arrow"></van-icon>
        </router-link>
        <div class="community-hot">
            <img class="hot-icon" :src="hotIcon" alt="">
            <div class="hot-title">热门</div>
            <div class="hot-tip">8</div>
            <van-icon class="hot-arrow" name="arrow"></van-icon>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant'
export default {
    name: 'Community',
    components: {
        Icon
    },
    data() {
        return {
            friendIcon: require("@/assets/icon/community/friend.png"),
            hotIcon: require("@/assets/icon/community/hot.png")
        }
    },
}
</script>

<style scoped>
    .community-friend {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #EDEDED;
    }
    .friend-icon {
        margin-left: 10px;
        margin-top: 10px;
        width: 30px;
        height: 30px;
    }
    .friend-title {
        font-family: "Microsoft YaHei";
        width: 250px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        margin-left: 10px;
    }
    .friend-tip {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-top: 15px;
        border-radius: 50%;
        background-color: #EA544C;
        color: #FFFFFF;
        line-height: 20px;
        font-size: 10px;
        text-align: center;
    }
    .friend-arrow {
        line-height: 50px;
        margin-left: 20px;
    }

    .community-hot {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #EDEDED;
        margin-top: 10px;
    }
    .hot-icon {
        margin-left: 10px;
        margin-top: 10px;
        width: 30px;
        height: 30px;
    }
    .hot-title {
        font-family: "Microsoft YaHei";
        width: 250px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        margin-left: 10px;
    }
    .hot-tip {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-top: 15px;
        border-radius: 50%;
        background-color: #EA544C;
        color: #FFFFFF;
        line-height: 20px;
        font-size: 10px;
        text-align: center;
    }
    .hot-arrow {
        line-height: 50px;
        margin-left: 20px;
    }
</style>

