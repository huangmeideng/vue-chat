<template>
    <div class="container">
        <div class="uploader-box">
            <div class="img-box" v-for="(item,index) of imgs" :key="index">
                <img class="img-item" 
                    :src="item" 
                    @click="onImagePreview(index)">
                <van-icon class="img-delete" 
                        name="clear"  
                        @click="onDeleteImg(index)"
                        v-show="deleteShow"></van-icon>    
            </div>
            <van-uploader v-show="uploadShow" :after-read="onRead" class="uploader-item">
                <van-icon name="photograph" :size="photoSize"/>
            </van-uploader>
        </div>
    </div>
</template>

<script>
import { Uploader, Icon, ImagePreview } from 'vant'
export default {
    name: 'CommunityUpload',
    components: {
        Uploader,
        Icon,
        ImagePreview
    },
    data() {
        return {
            photoSize: '50px',
            uploadShow: true,
            deleteShow: true,
            imgs: [],
            touchTimer: null //长按定时器
        }
    },
    watch: {
        imgs: function (val) {
            if (val.length === 9) {
                this.uploadShow = false
            } else {
                this.uploadShow = true
            }
        }
    },
    methods: {
        onRead (file) {
            this.imgs.push(file.content)
            //当存在图片数据时向父组件传值
            if (this.imgs.length > 0){
                this.$emit('uploadImg',1)
            }
        },
        //点击预览图片
        onImagePreview (e) {
            ImagePreview({
                images: this.imgs,
                startPosition: e,
                showIndex: false,
                showIndicators: true
            })
        },
        //删除图片
        onDeleteImg (index) {
            this.imgs.splice(index,1)
            //当不存在图片数据时向父组件传值
            if ( this.imgs.length == 0) {
                this.$emit('emptyImg',2)
            }
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
        margin-bottom: 5px;
    }
    .uploader-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 342px;
    }
    .img-item {
        width: 110px;
        height: 110px;
        margin-left: 4px;
        margin-top: 4px;
    }
    .img-delete {
        position: fixed;
        margin-top: -116px;
        margin-left: 106px;
    }
    .uploader-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 110px;
        margin-left: 4px;
        margin-top: 4px;
        background-color: #F2F2F2;
    }
</style>

