<template>
    <div class="container">
        <div class="uploader-box">
            <img  v-for="(item,index) of imgs" :key="index" class="img-item" :src="item" alt="" @click="onImagePreview(index)">
            <!-- <van-uploader :after-read="onRead">
                <van-icon name="photograph" />
            </van-uploader> -->
        </div>
    </div>
</template>

<script>
import { Uploader, Icon } from 'vant'
export default {
    name: 'CommunityUpload',
    components: {
        Uploader,
        Icon
    },
    data() {
        return {
            imgs: [
                require("@/assets/temp/fr/1.jpg"),
                require("@/assets/temp/fr/2.jpg"),
                require("@/assets/temp/fr/3.jpg"),
                require("@/assets/temp/fr/4.png"),
                require("@/assets/temp/fr/5.jpg"),
                require("@/assets/temp/fr/6.jpg"),
                require("@/assets/temp/fr/7.jpg"),
                require("@/assets/temp/fr/8.jpeg"),
                require("@/assets/temp/fr/9.jpg"),
            ]
        }
    },
    methods: {
        onRead (file) {
            console.log(file)
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 5px;
    }
    .uploader-box {
        width: 342px;
        /* height: 100px; */
    }
    .img-item {
        width: 110px;
        height: 110px;
        margin-left: 4px;
        margin-top: 4px;
    }
</style>

