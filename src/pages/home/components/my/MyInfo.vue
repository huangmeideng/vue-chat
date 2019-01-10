<template>
    <div class="container">
        <img class="info-avatar" :src="userData.userAvatar" alt="">
        <div class="info-text">
            <div class="text-name">
                {{userData.userName}}
            </div>
            <img class="text-sex" :src="sexIcon" alt="">
        </div>
        <div class="info-border"></div>
    </div>
</template>

<script>
export default {
    name: 'MyInfo',
    data() {
        return {
            userData: {
                userAvatar: require("@/assets/temp/avatar_15.jpg"),
                userName: '孙大翠',
                userSex: 1
            },
            maleIcon: require("@/assets/icon/sex/boy.png"),
            femailIcon: require("@/assets/icon/sex/girl.png"),
        }
    },
    computed: {
        sexIcon: function () {
            if (this.userData.userSex === 1){
                return this.femailIcon
            } else{
                return this.maleIcon
            }
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 180px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .info-avatar {
        position: fixed;
        z-index: 999;
        margin-top: 40px;
        margin-left: 10px;
        width: 80px;
        height: 80px;
        border-radius: 2px;
    }
    .info-text {
        display: flex;
        flex-direction: row;
        margin-top: 58px;
        margin-left: 100px;
        position: fixed;
        z-index: 999;
    }
    .text-name{
        font-family: "Microsoft YaHei";
        line-height: 30px;
    }
    .text-sex{
        margin-left: 10px;
        width: 25px;
        height: 25px;
    }
    .info-border {
        position: absolute;
        margin-top: 90px;
        width: 100%;
        height: 1px;
        background-color: #E5E4E4;
    }
</style>

