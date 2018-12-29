<template>
    <ul class="list-box">
        <li class="list-item" 
            v-for="(item,index) of letterData" 
            :key="index" 
            @click="onClickLetter(item)"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CommonLetter',
    data() {
        return {
            letterData: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    methods: {
        /**
         * 点击字母触发的事件
         */
        onClickLetter (e) {
            this.$emit('change',e)
        },
        /**
         * 手指接触屏幕触发事件
         */
        onTouchStart () {
            this.touchStatus = true
        },
        /**
         * 手指触摸滑动事件
         */
        onTouchMove (e) {
            if (this.touchStatus) {
                //console.log(e.touches[0].clientY)
                let index = Math.floor((e.touches[0].clientY - 80) / 20)
                let letter = this.letterData[index]
                this.$emit('touchLetter',letter)
            }
        },
        /**
         * 触摸结束事件
         */
        onTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style scoped>
    .list-box {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 20px;
        top: 80px;
        right: 4px;
    }
    .list-item {
        text-align: center;
        line-height: 20px;
    }
</style>

