<template>
    <ul class="list-box">
        <li class="list-item" v-for="(item,index) of letterData" :key="index" >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: "AddressLetter",
    data() {
        return {
            letterData: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        }
    },
}
</script>

<style scoped>
    .list-box {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 20px;
        top: 30px;
        right: 4px;
    }
    .list-item {
        text-align: center;
        line-height: 20px;
    }
</style>

