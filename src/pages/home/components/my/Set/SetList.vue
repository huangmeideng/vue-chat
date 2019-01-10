<template>
    <div class="container">
        <van-cell-group class="group-one">
            <van-cell title="账号与安全" is-link  @click="onTip"/>
        </van-cell-group>
        <van-cell-group class="group-two">
            <van-cell title="关于cui聊" is-link @click="onTip" />
            <van-cell title="帮助与反馈" is-link @click="onTip" />
        </van-cell-group>
        <van-cell-group class="group-three">
            <van-cell title="退出" to="/my/myset/" is-link />
        </van-cell-group>
    </div>
</template>

<script>
import { Cell, CellGroup, Dialog } from 'vant'
export default {
    name: 'SetList',
    components: {
        Cell,
        CellGroup
    },
    methods: {
        onTip () {
            Dialog.alert({
                message: '功能暂未开通'
            }).then( () => {

            })
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 46px;
        background-color: #EBEAEA;
    }
    .group-two {
        margin-top: 20px;
    }
    .group-three {
        margin-top: 30px;
    }
</style>

