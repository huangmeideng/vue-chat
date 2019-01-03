<template>
    <div class="container">
        <img  v-for="(item,index) of imgs" :key="index" class="img-item" :src="item" alt="" @click="onImagePreview(index)">
    </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
    name: 'CommunityImgs',
    props: ['imgs'],
    methods: {
        onImagePreview (e) {
            ImagePreview({
                images: this.imgs,
                startPosition: e,
                showIndex: false,
                showIndicators: true
            })
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        width: 252px;
        flex-wrap: wrap;
    }
    .img-item {
        width: 80px;
        height: 80px;
        margin-left: 4px;
        margin-top: 4px;
    }
</style>

