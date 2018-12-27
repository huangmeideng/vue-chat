<template>
    <div>
        <router-link v-for="item of listData" tag="div" class="address-list-item" :to="item.to" :key="item.id">
            <img :src="item.iconUrl" alt="">
            <div class="item-title">
                <span>{{item.title}}</span>
            </div>
            <div class="item-tip" v-show="item.tipShow">
                {{item.tipCount}}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AddressListItem",
    props: {
        listData: Array
    }
}
</script>

<style scoped>
    .address-list-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .address-list-item img {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        margin-top: 7px;
        margin-left: 7px;
    }
    .item-title {
        display: inline-block;
        width: 250px;
        height: 36px;
        margin-left: 10px;
        margin-top: 7px;
    }
    .item-title span {
        display: inline-block;
        margin-top: 10px;
    }
    .item-tip {
        width: 18px;
        height: 18px;
        margin-left: 20px;
        margin-top: 15px;
        border-radius: 50%;
        background-color: #EA544C;
        color: #FFFFFF;
        line-height: 18px;
        font-size: 10px;
        text-align: center;
    }
</style>

